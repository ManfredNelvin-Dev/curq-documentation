import os
import re
import sys
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

extensions = ["myst_parser"]

myst_enable_extensions = ["colon_fence"]

# ---------------------------------------------------------
# Paths and exclusions
# ---------------------------------------------------------

templates_path = ["_templates"]

exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "docs/README.md",
    ".venv",
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

def build_modules_context() -> List[Dict[str, Any]]:
    """
    Scan the docs/ directory and build module metadata
    dictionaries for use in Sphinx HTML templates.
    """

    base_dir = Path(__file__).resolve().parent
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
                    ).strip().title()
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


# ---------------------------------------------------------
# HTML template context
# ---------------------------------------------------------

html_context = {
    "modules": build_modules_context(),
    "current_version": "CURQ 18",
    "supported_versions": [
        {"code": "18.0", "name": "CURQ 18"},
    ],
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