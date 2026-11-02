"""
Custom Sphinx extensions and build-time context generators for CURQ documentation.
"""

from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List

from .git_metadata import get_git_file_dates_for_ref
from .modules_context import build_modules_context
from .whats_new import get_whats_new_from_git

__all__ = [
    "build_modules_context",
    "get_whats_new_from_git",
    "get_git_file_dates_for_ref",
    "setup",
]


def get_available_doc_versions(app) -> List[str]:
    """
    Returns all available doc versions: active release (18.0)
    plus all numeric Git tags (0.4, 0.3, 0.2, 0.1) in descending order.
    """
    import subprocess
    import re

    doc_version = getattr(app.config, "version", "18.0")
    tag_pattern = getattr(app.config, "smv_tag_whitelist", r"^v?\d+(\.\d+)*$")
    try:
        out = subprocess.check_output(["git", "tag", "-l"], text=True, stderr=subprocess.DEVNULL)
        pat = re.compile(tag_pattern)
        tags = [t.strip() for t in out.splitlines() if pat.match(t.strip())]
    except Exception:
        tags = []

    def parse_ver(v):
        return [int(x) if x.isdigit() else x for x in re.split(r"(\d+)", v)]

    tags.sort(key=parse_ver, reverse=True)
    versions = [doc_version] + [t for t in tags if t != doc_version]
    return versions


def setup(app) -> Dict[str, Any]:
    """
    Sphinx extension entrypoint. Connects context injectors and page hooks.
    """

    def on_html_page_context(app, pagename, templatename, context, doctree):
        context["modules"] = build_modules_context(app.srcdir)

        releases = get_whats_new_from_git(app)
        doc_version = getattr(app.config, "version", "18.0")
        context["available_doc_versions"] = get_available_doc_versions(app)
        context["whats_new_releases"] = releases

        if pagename in ("docs/whats-new", "whats-new"):
            context["active_release_version"] = doc_version

        # In sphinx-multiversion, smv_current_version is set ('main', '0.1', '0.2')
        # In single-version builds, fallback to 'HEAD'
        target_ref = getattr(app.config, "smv_current_version", None) or "HEAD"
        git_dates = get_git_file_dates_for_ref(target_ref)

        page_date = None
        if hasattr(app.env, "doc2path"):
            try:
                doc_path = Path(app.env.doc2path(pagename)).resolve()
                srcdir = Path(app.srcdir).resolve()
                rel_path = doc_path.relative_to(srcdir).as_posix()
                page_date = git_dates.get(rel_path)
            except Exception:
                pass

        # If not found in git (e.g. new uncommitted file), fall back to file mtime
        if not page_date and hasattr(app.env, "doc2path"):
            try:
                doc_path = Path(app.env.doc2path(pagename)).resolve()
                if doc_path.exists():
                    mtime = doc_path.stat().st_mtime
                    page_date = datetime.fromtimestamp(mtime).strftime("%B %d, %Y")
            except Exception:
                pass

        context["page_last_updated"] = page_date
        context["last_updated"] = page_date

    app.connect("html-page-context", on_html_page_context)

    return {
        "version": "1.0",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
