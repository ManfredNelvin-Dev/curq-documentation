import json
import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List

# ---------------------------------------------------------
# Project information
# ---------------------------------------------------------

project = "CURQ Documentation"
copyright = "2026, CIT Services"
author = "CIT Services"

version = "1.0"
release = "1.0"

# ---------------------------------------------------------
# Sphinx extensions
# ---------------------------------------------------------

extensions = [
    "myst_parser",
    "sphinx_multiversion",
]

myst_enable_extensions = ["colon_fence"]

# ---------------------------------------------------------
# Sphinx Multi-Version configuration
# ---------------------------------------------------------

smv_tag_whitelist = r"^v?\d+(\.\d+)*$"
smv_branch_whitelist = r"^(main|18\.0)$"
smv_remote_whitelist = None
smv_released_pattern = r"^tags/.*$"
smv_outputdir_format = "{ref.name}"
smv_prefer_remote_refs = False
smv_latest_version = "main"

# ---------------------------------------------------------
# Paths and exclusions
# ---------------------------------------------------------

templates_path = ["_templates"]

exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "docs/README.md",
    "README.md",
    ".venv",
    "docs/popular_articles.md",
    "docs/landing_faq.md",
]

# ---------------------------------------------------------
# Language and translations
# ---------------------------------------------------------

language = "en"

locale_dirs = ["locale/"]
gettext_compact = False
gettext_uuid = True

# ---------------------------------------------------------
# HTML configuration
# ---------------------------------------------------------

html_theme = "basic"

html_static_path = ["_static"]
html_favicon = "_static/images/curq-favicon.png"
html_last_updated_fmt = "%B %d, %Y"

html_css_files = []

source_suffix = {
    ".rst": "restructuredtext",
    ".md": "markdown",
}

# ---------------------------------------------------------
# Module registry
# ---------------------------------------------------------

sys.path.insert(0, os.path.abspath("."))

from module_registry import MODULE_REGISTRY


# ---------------------------------------------------------
# Sidebar labels
# ---------------------------------------------------------

SUBMENU_LABELS: Dict[str, str] = {
    "00-overview": "Overview",
    "01-manual": "Manual",
    "02-procedures": "Procedures",
    "03-articles": "Articles",
    "04-faq": "FAQ",
}


# ---------------------------------------------------------
# Build module documentation context
# ---------------------------------------------------------

def build_modules_context(sourcedir: str | None = None) -> List[Dict[str, Any]]:
    """
    Scan the docs/ directory and build module metadata
    dictionaries for use in Sphinx HTML templates.
    """

    if sourcedir is None:
        base_dir = Path(__file__).resolve().parent
    else:
        base_dir = Path(sourcedir).resolve()

    doc_root = base_dir / "docs"
    modules = []

    # Match a leading number followed by a hyphen or space.
    leading_number_re = re.compile(r"^\d+[-\s]+")

    def get_category_order(cat_name: str) -> int:
        """Return the display order for documentation categories."""

        cat_lower = cat_name.lower()

        if not cat_lower or "overview" in cat_lower:
            return 0

        if "manual" in cat_lower:
            return 1

        if "procedure" in cat_lower or "configuration" in cat_lower:
            return 2

        if "article" in cat_lower:
            return 3

        if "faq" in cat_lower:
            return 4

        return 99

    for folder_name, meta in MODULE_REGISTRY.items():
        folder_path = doc_root / folder_name
        pages = []

        if folder_path.is_dir():

            def get_sort_key(md_file: Path) -> tuple:
                """Sort pages by category and filename."""

                folder_rel = str(
                    md_file.parent.relative_to(folder_path)
                )

                if folder_rel == ".":
                    order = (
                        4
                        if "faq" in md_file.stem.lower()
                        else 0
                    )
                else:
                    category_name = (
                        folder_rel
                        .replace("-", " ")
                        .replace("_", " ")
                    )

                    category_name = (
                        leading_number_re.sub(
                            "", category_name
                        ).strip().title()
                    )

                    order = get_category_order(category_name)

                return order, md_file.name.lower()

            md_files = sorted(
                folder_path.rglob("*.md"),
                key=get_sort_key,
            )

            for md_file in md_files:
                basename = md_file.stem

                pretty_name = (
                    basename
                    .replace("-", " ")
                    .replace("_", " ")
                )

                pretty_name = (
                    leading_number_re.sub(
                        "", pretty_name
                    ).strip()
                )

                pretty_name = " ".join(
                    w if w.isupper() else w.capitalize()
                    for w in pretty_name.split()
                )

                if pretty_name.lower() == "faq":
                    pretty_name = "FAQ"

                label = SUBMENU_LABELS.get(
                    basename, pretty_name
                )

                rel_path = md_file.relative_to(base_dir)

                page_path = rel_path.with_suffix("").as_posix()

                folder_rel = str(
                    md_file.parent.relative_to(folder_path)
                )

                if folder_rel == ".":
                    category = ""
                else:
                    category = (
                        folder_rel
                        .replace("-", " ")
                        .replace("_", " ")
                    )

                    category = (
                        leading_number_re.sub(
                            "", category
                        ).strip().title()
                    )

                    if category.lower() == "faq":
                        category = "FAQ"

                pages.append(
                    {
                        "label": label,
                        "page_path": page_path,
                        "category": category,
                    }
                )

        modules.append(
            {
                "folder": folder_name,
                "display_name": meta["display_name"],
                "icon": meta["icon"],
                "description": meta["description"],
                "sidebar_key": meta["sidebar_key"],
                "pages": pages,
                "has_docs": bool(pages),
            }
        )

    modules.sort(
        key=lambda module: module["display_name"].lower()
    )

    return modules


html_context = {
    "modules": build_modules_context(),
    "current_version": version,
    "current_version_code": version,
    "supported_languages": [
        {"code": "en", "name": "English"},
        {"code": "nl", "name": "Dutch"},
    ],
    "default_language": "en",
}

# ---------------------------------------------------------
# Additional standalone HTML templates
# ---------------------------------------------------------

html_additional_pages = {
    "docs/support": "support.html",
}


_GIT_FILE_DATES_CACHE: Dict[str, Dict[str, str]] = {}


def get_git_file_dates_for_ref(ref: str = "HEAD") -> Dict[str, str]:
    """
    Extract and cache the exact last commit date for all repository files
    for a specific Git reference (e.g. 'main', '0.1', '0.2', or 'HEAD').
    Always runs in the true repository directory where conf.py is located.
    """
    global _GIT_FILE_DATES_CACHE
    if ref in _GIT_FILE_DATES_CACHE:
        return _GIT_FILE_DATES_CACHE[ref]

    repo_root = Path(__file__).resolve().parent
    dates: Dict[str, str] = {}
    try:
        cmd = [
            "git",
            "log",
            ref,
            "--name-only",
            "--format=DATE:%cd",
            "--date=format:%B %d, %Y",
        ]
        res = subprocess.check_output(
            cmd,
            cwd=repo_root,
            stderr=subprocess.DEVNULL,
            text=True,
        )
        current_date = None
        for line in res.splitlines():
            line = line.strip()
            if line.startswith("DATE:"):
                current_date = line[5:]
            elif line and current_date:
                if line not in dates:
                    dates[line] = current_date
    except Exception:
        pass

    _GIT_FILE_DATES_CACHE[ref] = dates
    return dates


def setup(app):
    def on_html_page_context(app, pagename, templatename, context, doctree):
        context["modules"] = build_modules_context(app.srcdir)

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