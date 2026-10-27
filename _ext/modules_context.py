import os
import re
import sys
from pathlib import Path
from typing import Any, Dict, List

# Ensure parent directory is in sys.path to import module_registry
root_dir = Path(__file__).resolve().parent.parent
if str(root_dir) not in sys.path:
    sys.path.insert(0, str(root_dir))

from module_registry import MODULE_REGISTRY

SUBMENU_LABELS: Dict[str, str] = {
    "00-overview": "Overview",
    "01-manual": "Manual",
    "02-procedures": "Procedures",
    "03-articles": "Articles",
    "04-faq": "FAQ",
}


def build_modules_context(sourcedir: str | None = None) -> List[Dict[str, Any]]:
    """
    Scan the docs/ directory and build module metadata
    dictionaries for use in Sphinx HTML templates.
    """
    if sourcedir is None:
        base_dir = root_dir
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
        if "getting started" in cat_lower or "tutorial" in cat_lower or "manual" in cat_lower:
            return 1
        if "task guide" in cat_lower or "how" in cat_lower or "procedure" in cat_lower or "configuration" in cat_lower:
            return 2
        if "settings" in cat_lower or "field" in cat_lower or "explanation" in cat_lower or "article" in cat_lower:
            return 3
        if "core concept" in cat_lower or "reference" in cat_lower:
            return 4
        if "faq" in cat_lower:
            return 5
        return 99

    for folder_name, meta in MODULE_REGISTRY.items():
        folder_path = doc_root / folder_name
        if not folder_path.is_dir():
            alt_path = doc_root / meta.get("display_name", "")
            if alt_path.is_dir():
                folder_path = alt_path
                folder_name = meta["display_name"]
            else:
                alt_nospaces = doc_root / folder_name.replace(" ", "")
                if alt_nospaces.is_dir():
                    folder_path = alt_nospaces
                    folder_name = folder_name.replace(" ", "")

        pages = []
        if folder_path.is_dir():

            def get_sort_key(md_file: Path) -> tuple:
                """Sort pages by category and filename."""
                folder_rel = str(md_file.parent.relative_to(folder_path))

                if folder_rel == ".":
                    category_name = ""
                    order = 5 if "faq" in md_file.stem.lower() else 0
                else:
                    category_name = folder_rel.replace("-", " ").replace("_", " ")
                    category_name = leading_number_re.sub("", category_name).strip().title()

                    if category_name.lower() == "settings and fields":
                        category_name = "Settings and Fields"
                    elif category_name.lower() == "faq":
                        category_name = "FAQ"

                    order = get_category_order(category_name)

                return order, category_name.lower(), md_file.name.lower()

            md_files = sorted(
                folder_path.rglob("*.md"),
                key=get_sort_key,
            )

            for md_file in md_files:
                basename = md_file.stem
                pretty_name = basename.replace("-", " ").replace("_", " ")
                pretty_name = leading_number_re.sub("", pretty_name).strip()
                pretty_name = " ".join(
                    w if w.isupper() else w.capitalize()
                    for w in pretty_name.split()
                )

                if pretty_name.lower() == "faq":
                    pretty_name = "FAQ"

                label = SUBMENU_LABELS.get(basename, pretty_name)
                rel_path = md_file.relative_to(base_dir)
                page_path = rel_path.with_suffix("").as_posix()
                folder_rel = str(md_file.parent.relative_to(folder_path))

                if folder_rel == ".":
                    category = ""
                else:
                    category = folder_rel.replace("-", " ").replace("_", " ")
                    category = leading_number_re.sub("", category).strip().title()

                    if category.lower() == "settings and fields":
                        category = "Settings and Fields"
                    elif category.lower() == "faq":
                        category = "FAQ"

                pages.append({
                    "label": label,
                    "page_path": page_path,
                    "category": category,
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
