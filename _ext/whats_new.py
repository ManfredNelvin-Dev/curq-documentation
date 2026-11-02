"""
Sphinx extension module for parsing CURQ release notes from NEWS.md.
Directly reads from local addons-curq repository or fetches live from GitHub,
without creating any local cached files on disk.
"""

import os
import re
import urllib.request
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional
import markdown_it

_WHATS_NEW_CACHE: Optional[List[Dict[str, Any]]] = None

RELEASE_HEADER_REGEX = r"^#\ (?P<project>.*?)\ (?P<version>[^\ ]+)\ \((?P<date>[^)]+)\)\s*\n(?P<content>.*?)(?=^#\ |\Z)"


def load_news_content(app=None) -> str:
    """
    Fetch NEWS.md directly from the GitHub addons-curq repository.
    Does not fetch from local directories or write any fallback file to disk.
    """
    lang = getattr(app.config, "language", "en") if app and hasattr(app, "config") else "en"
    filename = "NEWS.nl_NL.md" if lang in ("nl", "nl_NL") else "NEWS.md"

    gh_url = f"https://raw.githubusercontent.com/onesteinbv/addons-curq/18.0/{filename}"
    try:
        req = urllib.request.Request(gh_url, headers={"User-Agent": "CURQ-Docs-Builder/1.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.read().decode("utf-8")
    except Exception:
        pass

    # If localized file was not found, fallback to default English NEWS.md from GitHub
    if filename != "NEWS.md":
        fallback_url = "https://raw.githubusercontent.com/onesteinbv/addons-curq/18.0/NEWS.md"
        try:
            req = urllib.request.Request(fallback_url, headers={"User-Agent": "CURQ-Docs-Builder/1.0"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                return resp.read().decode("utf-8")
        except Exception:
            pass

    return ""


def parse_news_markdown(raw_content: str) -> List[Dict[str, Any]]:
    r"""
    Parse NEWS.md using the exact regex pattern defined in addons-curq's release_note module:
    r"^#\ (?P<project>.*?)\ (?P<version>[^\ ]+)\ \((?P<date>[^)]+)\)\s*\n(?P<content>.*?)(?=^#\ |\Z)"
    """
    md = markdown_it.MarkdownIt("commonmark", {"html": True}).enable("table")
    matches = list(re.finditer(RELEASE_HEADER_REGEX, raw_content, re.DOTALL | re.MULTILINE))

    releases: List[Dict[str, Any]] = []

    for i, m in enumerate(matches):
        project = m.group("project").strip()
        version = m.group("version").strip()
        raw_date = m.group("date").strip()
        content = m.group("content").strip()

        # Format date cleanly (supports YYYY-MM-DD or DD-MM-YYYY)
        formatted_date = raw_date
        for fmt in ("%Y-%m-%d", "%d-%m-%Y"):
            try:
                dt = datetime.strptime(raw_date, fmt)
                formatted_date = dt.strftime("%B %d, %Y")
                break
            except Exception:
                pass

        body_html = md.render(content)
        # Ensure external links open securely in new tab
        body_html = re.sub(
            r'<a\s+href="(https?://[^"]+)"(?![^>]*target=)',
            r'<a href="\1" target="_blank" rel="noopener noreferrer"',
            body_html,
        )

        entries = []
        for line in content.splitlines():
            line_s = line.strip()
            if line_s.startswith(("-", "*", "+")):
                clean_item = re.sub(r"^[-*+]\s*", "", line_s)
                entries.append({"title": clean_item})

        releases.append({
            "project": project,
            "version": version,
            "title": f"{project} {version}",
            "date": formatted_date,
            "raw_date": raw_date,
            "status": "Latest" if i == 0 else "Stable",
            "body_html": body_html,
            "body_md": content,
            "entries": entries,
        })

    return releases


def get_whats_new(app=None) -> List[Dict[str, Any]]:
    """
    Fetch and parse NEWS.md into structured releases.
    Cached in-memory only for the duration of the Sphinx build process.
    """
    global _WHATS_NEW_CACHE
    if _WHATS_NEW_CACHE is not None:
        return _WHATS_NEW_CACHE

    raw_content = load_news_content(app)
    releases = parse_news_markdown(raw_content) if raw_content else []

    _WHATS_NEW_CACHE = releases
    return releases


# Alias for backward compatibility with Sphinx build hooks
get_whats_new_from_git = get_whats_new
