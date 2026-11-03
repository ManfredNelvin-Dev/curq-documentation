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

_WHATS_NEW_CACHE: Dict[str, List[Dict[str, Any]]] = {}

RELEASE_HEADER_REGEX = r"^#\ (?P<project>.*?)\ (?P<version>[^\ ]+)\ \((?P<date>[^)]+)\)\s*\n(?P<content>.*?)(?=^#\ |\Z)"

NL_MONTHS = {
    1: "januari", 2: "februari", 3: "maart", 4: "april", 5: "mei", 6: "juni",
    7: "juli", 8: "augustus", 9: "september", 10: "oktober", 11: "november", 12: "december"
}


def load_news_content(app=None, lang: Optional[str] = None) -> str:
    """
    Fetch NEWS.md directly from the GitHub addons-curq repository.
    Fetches NEWS.nl_NL.md for Dutch, or NEWS.md for English.
    """
    if not lang:
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


def parse_news_markdown(raw_content: str, lang: str = "en") -> List[Dict[str, Any]]:
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
                if lang in ("nl", "nl_NL"):
                    formatted_date = f"{dt.day} {NL_MONTHS.get(dt.month, '')} {dt.year}"
                else:
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

        status_label = "Latest" if i == 0 else "Stable"
        if lang in ("nl", "nl_NL"):
            status_label = "Nieuwste" if i == 0 else "Stabiel"

        releases.append({
            "project": project,
            "version": version,
            "title": f"{project} {version}",
            "date": formatted_date,
            "raw_date": raw_date,
            "status": status_label,
            "body_html": body_html,
            "body_md": content,
            "entries": entries,
        })

    return releases


def get_whats_new(app=None, lang: Optional[str] = None) -> List[Dict[str, Any]]:
    """
    Fetch and parse NEWS.md into structured releases for specified language ('en' or 'nl').
    Cached in-memory for the duration of the Sphinx build process.
    """
    global _WHATS_NEW_CACHE
    if not lang:
        lang = getattr(app.config, "language", "en") if app and hasattr(app, "config") else "en"
    cache_key = "nl" if lang in ("nl", "nl_NL") else "en"

    if cache_key in _WHATS_NEW_CACHE:
        return _WHATS_NEW_CACHE[cache_key]

    raw_content = load_news_content(app, lang=cache_key)
    releases = parse_news_markdown(raw_content, lang=cache_key) if raw_content else []

    _WHATS_NEW_CACHE[cache_key] = releases
    return releases


# Alias for backward compatibility with Sphinx build hooks
get_whats_new_from_git = get_whats_new
