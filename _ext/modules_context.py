import functools
import re
import sys
from pathlib import Path
from typing import Any, Dict, List

# Ensure parent directory is in sys.path to import module_registry
root_dir = Path(__file__).resolve().parent.parent
if str(root_dir) not in sys.path:
    sys.path.insert(0, str(root_dir))

from module_registry import MODULE_REGISTRY

# Pre-compiled regex for stripping numeric prefixes from filenames
LEADING_NUMBER_RE = re.compile(r"^\d+[-\s]+")

# Standard Diátaxis module categories in canonical display order
STANDARD_CATEGORIES = [
    ("getting-started", "Getting Started"),
    ("task-guides", "Task Guides"),
    ("settings-and-fields", "Settings and Fields"),
    ("core-concepts", "Core Concepts"),
]


def format_page_label(stem: str) -> str:
    """Convert a markdown file stem into a polished display label."""
    cleaned = LEADING_NUMBER_RE.sub("", stem.replace("-", " ").replace("_", " ")).strip()
    return " ".join(
        w if w.isupper() else w.capitalize()
        for w in cleaned.split()
    )


@functools.lru_cache(maxsize=16)
def _cached_build_modules_context(base_dir_str: str) -> List[Dict[str, Any]]:
    """
    Scan docs/ based on standard Diátaxis module structure and cache results.
    """
    base_dir = Path(base_dir_str)
    doc_root = base_dir / "docs"
    modules = []

    for folder_name, meta in MODULE_REGISTRY.items():
        folder_path = doc_root / folder_name
        if not folder_path.is_dir():
            folder_path = doc_root / meta.get("display_name", "")
            if not folder_path.is_dir():
                folder_path = doc_root / folder_name.replace(" ", "")

        pages = []
        if folder_path.is_dir():
            # 1. Standard Diátaxis categories in strict display order
            for cat_slug, cat_display in STANDARD_CATEGORIES:
                cat_dir = folder_path / cat_slug
                if cat_dir.is_dir():
                    for md_file in sorted(cat_dir.glob("*.md")):
                        pages.append({
                            "label": format_page_label(md_file.stem),
                            "page_path": md_file.relative_to(base_dir).with_suffix("").as_posix(),
                            "category": cat_display,
                        })

            # 2. Module FAQ (placed at bottom of submenu)
            faq_file = folder_path / "faq.md"
            if faq_file.is_file():
                pages.append({
                    "label": "FAQ",
                    "page_path": faq_file.relative_to(base_dir).with_suffix("").as_posix(),
                    "category": "",
                })

        modules.append({
            "folder": folder_name,
            "display_name": meta["display_name"],
            "icon": meta["icon"],
            "description": meta["description"],
            "sidebar_key": meta["sidebar_key"],
            "pages": pages,
            "has_docs": bool(pages),
        })

    modules.sort(key=lambda module: module["display_name"].lower())
    return modules


def build_modules_context(sourcedir: str | Path | None = None) -> List[Dict[str, Any]]:
    """
    Scan the docs/ directory and build module metadata
    dictionaries for use in Sphinx HTML templates.
    """
    base_dir = root_dir if sourcedir is None else Path(sourcedir).resolve()
    return _cached_build_modules_context(str(base_dir))
