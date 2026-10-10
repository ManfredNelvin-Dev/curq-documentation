import os
import re
from pathlib import Path
from typing import Dict, Any, List

project = 'CURQ Documentation'
copyright = '2026, CIT Services'
author = 'CIT Services'

version = '1.0'
release = '1.0'

extensions = ['myst_parser']
myst_enable_extensions = ["colon_fence"]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'docs/README.md', '.venv']

language = "en"

locale_dirs = ["locale/"]
gettext_compact = False
gettext_uuid = True

html_theme = 'basic'
html_static_path = ['_static']
html_favicon = '_static/images/curq-favicon.png'

html_css_files = []
source_suffix = {'.rst': 'restructuredtext', '.md': 'markdown'}

import sys
sys.path.insert(0, os.path.abspath('.'))
from module_registry import MODULE_REGISTRY

SUBMENU_LABELS: Dict[str, str] = {
    '00-overview': 'Overview',
    '01-manual': 'Manual',
    '02-procedures': 'Procedures',
    '03-articles': 'Articles',
    '04-faq': 'FAQ',
}

def build_modules_context() -> List[Dict[str, Any]]:
    """
    Scan the docs/ directory and build a list of module metadata
    dictionaries to inject into the Sphinx HTML template context.
    """
    base_dir = Path(__file__).parent
    doc_root = base_dir / 'docs'
    modules = []

    leading_number_re = re.compile(r'^\d+\s*')

    def get_category_order(cat_name: str) -> int:
        cat_lower = cat_name.lower()
        if not cat_lower or 'overview' in cat_lower: return 0
        if 'manual' in cat_lower: return 1
        if 'procedure' in cat_lower or 'configuration' in cat_lower: return 2
        if 'article' in cat_lower: return 3
        if 'faq' in cat_lower: return 4
        return 99

    for folder_name, meta in MODULE_REGISTRY.items():
        folder_path = doc_root / folder_name
        pages = []

        if folder_path.is_dir():
            def get_sort_key(md_file: Path) -> tuple:
                folder_rel = str(md_file.parent.relative_to(folder_path))
                if folder_rel == '.':
                    order = 4 if 'faq' in md_file.stem.lower() else 0
                else:
                    cat = folder_rel.replace('-', ' ').replace('_', ' ')
                    cat = leading_number_re.sub('', cat).strip().title()
                    order = get_category_order(cat)
                return (order, md_file.name)

            md_files = list(folder_path.rglob('*.md'))
            md_files.sort(key=get_sort_key)

            for md_file in md_files:
                basename = md_file.stem

                pretty_name = basename.replace('-', ' ').replace('_', ' ')
                pretty_name = leading_number_re.sub('', pretty_name).strip().title()

                if pretty_name.lower() == 'faq':
                    pretty_name = 'FAQ'

                label = SUBMENU_LABELS.get(basename, pretty_name)

                rel_path = md_file.relative_to(base_dir)
                page_path = str(rel_path.with_suffix('')).replace('\\', '/')

                folder_rel = str(md_file.parent.relative_to(folder_path))
                if folder_rel == '.':
                    category = ''
                else:
                    category = folder_rel.replace('-', ' ').replace('_', ' ')
                    category = leading_number_re.sub('', category).strip().title()

                    if category.lower() == 'faq':
                        category = 'FAQ'

                pages.append({
                    'label': label,
                    'page_path': page_path,
                    'category': category,
                })

        modules.append({
            'folder': folder_name,
            'display_name': meta['display_name'],
            'icon': meta['icon'],
            'description': meta['description'],
            'sidebar_key': meta['sidebar_key'],
            'pages': pages,
            'has_docs': len(pages) > 0,
        })

    modules.sort(key=lambda m: m['display_name'].lower())
    return modules

html_context = {
    'modules': build_modules_context(),
    'supported_languages': [
        {'code': 'en', 'name': 'English'},
        {'code': 'nl', 'name': 'Nederlands'}
    ],
    'default_language': 'en',
}

