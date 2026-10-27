import json
import os
import re
import subprocess
import urllib.request
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

_GIT_WHATS_NEW_CACHE: Optional[List[Dict[str, Any]]] = None


def get_whats_new_from_git(app=None) -> List[Dict[str, Any]]:
    """
    Dynamically extract release notes directly from GitHub Releases (Notes)
    and Git tags across repository versions without any hardcoded versions or dates.
    """
    global _GIT_WHATS_NEW_CACHE
    if _GIT_WHATS_NEW_CACHE is not None:
        return _GIT_WHATS_NEW_CACHE

    repo_root = Path(__file__).resolve().parent.parent

    # 1. Dynamically determine GitHub repository releases endpoint from git remote origin
    gh_releases: Dict[str, Dict[str, Any]] = {}
    gh_url = ""
    try:
        remote_url = subprocess.check_output(
            ["git", "config", "--get", "remote.origin.url"],
            cwd=repo_root,
            stderr=subprocess.DEVNULL,
            text=True,
        ).strip()
        m = re.search(r"github\.com[:/]([^/]+)/([^/.]+)", remote_url)
        if m:
            owner, repo_name = m.group(1), m.group(2)
            gh_url = f"https://api.github.com/repos/{owner}/{repo_name}/releases"
    except Exception:
        gh_url = ""

    if gh_url:
        try:
            gh_token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
            gh_headers = {
                "User-Agent": "Sphinx-WhatsNew-Builder",
                "Accept": "application/vnd.github.v3+json",
            }
            if gh_token:
                gh_headers["Authorization"] = f"Bearer {gh_token}"

            gh_req = urllib.request.Request(gh_url, headers=gh_headers)
            with urllib.request.urlopen(gh_req, timeout=10) as resp:
                gh_data = json.loads(resp.read().decode())
                for item in gh_data:
                    tag = item.get("tag_name")
                    if tag:
                        gh_releases[tag] = item
        except Exception:
            # Fallback to curl if urllib encounters SSL or network timeout
            try:
                curl_cmd = ["curl", "-s", "--max-time", "10", "-H", "Accept: application/vnd.github.v3+json", gh_url]
                res = subprocess.check_output(curl_cmd, stderr=subprocess.DEVNULL, text=True)
                gh_data = json.loads(res)
                for item in gh_data:
                    tag = item.get("tag_name")
                    if tag:
                        gh_releases[tag] = item
            except Exception:
                gh_releases = {}

    # 2. Extract Git tags, commit dates, and subjects directly from repository
    try:
        tag_lines = subprocess.check_output(
            ["git", "tag", "-l", "--format=%(refname:short)|%(creatordate:format:%B %d, %Y)|%(contents:subject)"],
            cwd=repo_root,
            stderr=subprocess.DEVNULL,
            text=True,
        ).splitlines()
    except Exception:
        tag_lines = []

    tags_info: Dict[str, Dict[str, str]] = {}
    for line in tag_lines:
        line = line.strip()
        if not line:
            continue
        parts = line.split("|")
        t_name = parts[0]
        date_str = parts[1] if len(parts) > 1 and parts[1] else ""
        if not date_str:
            try:
                date_str = subprocess.check_output(
                    ["git", "log", "-1", "--format=%cd", "--date=format:%B %d, %Y", t_name],
                    cwd=repo_root,
                    stderr=subprocess.DEVNULL,
                    text=True,
                ).strip()
            except Exception:
                date_str = ""
        tags_info[t_name] = {
            "date": date_str,
            "subject": parts[2] if len(parts) > 2 else "",
        }

    def ver_tuple(v: str) -> List[int]:
        v_clean = re.sub(r"^v", "", v)
        try:
            return [int(x) for x in v_clean.split(".")]
        except Exception:
            return [0]

    def is_version_identifier(v: str) -> bool:
        return bool(re.match(r"^v?\d+(\.\d+)*$", v.strip()))

    def clean_title(subject: str) -> str:
        cleaned = re.sub(r"^(feat|fix|docs|style|chore|refactor)(\([^)]+\))?:\s*", "", subject, flags=re.IGNORECASE)
        cleaned = cleaned.strip()
        return cleaned[:1].upper() + cleaned[1:] if cleaned else subject

    # 3. Dynamically discover all unique versions from git tags and GitHub releases
    discovered_versions = set()
    for t in tags_info.keys():
        if is_version_identifier(t):
            discovered_versions.add(t)
    for t in gh_releases.keys():
        if is_version_identifier(t):
            discovered_versions.add(t)

    # If Sphinx config defines a version, include it dynamically as well
    configured_version = ""
    if app and hasattr(app, "config"):
        configured_version = getattr(app.config, "smv_latest_version", None) or getattr(app.config, "version", "")
    if configured_version and is_version_identifier(configured_version):
        discovered_versions.add(configured_version)

    sorted_versions = sorted(discovered_versions, key=ver_tuple, reverse=True)
    total_versions = len(sorted_versions)

    results = []
    for i, ver in enumerate(sorted_versions):
        gh_rel = gh_releases.get(ver) or gh_releases.get(f"v{ver}")
        tag_meta = tags_info.get(ver) or tags_info.get(f"v{ver}") or {}

        # Dynamic release title
        if gh_rel and gh_rel.get("name"):
            release_title = gh_rel["name"]
        else:
            proj_name = getattr(app.config, "project", "CURQ Documentation") if app and hasattr(app, "config") else "CURQ Documentation"
            release_title = f"{proj_name} {ver}"

        # Dynamic release date
        release_date = ""
        if gh_rel:
            pub_at = gh_rel.get("published_at") or gh_rel.get("created_at")
            if pub_at:
                try:
                    dt = datetime.fromisoformat(pub_at.replace("Z", "+00:00"))
                    release_date = dt.strftime("%B %d, %Y")
                except Exception:
                    release_date = pub_at[:10]
        if not release_date and tag_meta.get("date"):
            release_date = tag_meta["date"]
        if not release_date:
            try:
                release_date = subprocess.check_output(
                    ["git", "log", "-1", "--format=%cd", "--date=format:%B %d, %Y", ver],
                    cwd=repo_root,
                    stderr=subprocess.DEVNULL,
                    text=True,
                ).strip()
            except Exception:
                release_date = datetime.now().strftime("%B %d, %Y")

        # Dynamic status based on position: 0 is Latest, last is Initial, intermediate are Stable
        if i == 0:
            status = "Latest"
        elif i == total_versions - 1:
            status = "Initial"
        else:
            status = "Stable"

        # Dynamic entries extraction
        entries = []
        gh_body = (gh_rel.get("body") or "").strip() if gh_rel else ""
        if gh_body:
            in_contributors = False
            for line in gh_body.splitlines():
                line_s = line.strip()
                if not line_s:
                    continue
                if re.match(r"^(#+\s*)?what\'?s changed", line_s, re.IGNORECASE):
                    in_contributors = False
                    continue
                if re.match(r"^(#+\s*)?(new\s+)?contributors", line_s, re.IGNORECASE):
                    in_contributors = True
                    continue
                if "full changelog" in line_s.lower():
                    in_contributors = False
                    continue
                if in_contributors:
                    continue

                clean_text = re.sub(r"^[*\-•]\s*", "", line_s).strip()
                if not clean_text or clean_text.startswith("<!--"):
                    continue

                entries.append({"title": clean_title(clean_text)})
        elif tag_meta.get("subject"):
            entries = [{"title": clean_title(tag_meta["subject"])}]

        results.append({
            "version": ver,
            "ver_num": ver_tuple(ver),
            "title": release_title,
            "date": release_date,
            "status": status,
            "entries": entries,
        })

    results.sort(key=lambda r: r["ver_num"], reverse=True)
    _GIT_WHATS_NEW_CACHE = results
    return results
