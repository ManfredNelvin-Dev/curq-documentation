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

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'docs/README.md', '.venv']

language = "en"

locale_dirs = ["locale/"]
gettext_compact = False
gettext_uuid = True

html_theme = 'basic'
html_static_path = ['_static']

html_css_files = []
source_suffix = {'.rst': 'restructuredtext', '.md': 'markdown'}

# -- Module Registry ---------------------------------------------------------
# Maps folder names in docs/ to display metadata.
# To add a new module:
#   1. Create a folder in docs/ (e.g. docs/Accounting/)
#   2. Add an entry below with: display_name, icon, description
#   3. Place an icon named <icon>.png in _static/images/
#   4. Add .md files inside the folder (00-overview.md, 01-manual.md, etc.)
#
# The template auto-discovers .md files inside each module folder and
# generates sidebar submenu items from them.

MODULE_REGISTRY: Dict[str, Dict[str, str]] = {
    'Accounting': {
        'display_name': 'Accounting',
        'icon': 'accounting-icon.png',
        'description': 'Expenses and administration',
        'sidebar_key': 'accounting',
    },
    'CRM': {
        'display_name': 'CRM',
        'icon': 'crm-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'crm',
    },
    'Sales': {
        'display_name': 'Sales',
        'icon': 'sales-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'sales',
    },
    'Purchase': {
        'display_name': 'Purchase',
        'icon': 'purchase-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'purchase',
    },
    'Inventory': {
        'display_name': 'Inventory',
        'icon': 'inventory-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'inventory',
    },
    'Projects': {
        'display_name': 'Projects',
        'icon': 'project-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'projects',
    },
    'HR': {
        'display_name': 'HR',
        'icon': 'hr-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'hr',
    },
    'Helpdesk': {
        'display_name': 'Helpdesk',
        'icon': 'helpdesk-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'helpdesk',
    },
    'EmailMarketing': {
        'display_name': 'Email Marketing',
        'icon': 'emailmarketing-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'emailmarketing',
    },
    'Appointments': {
        'display_name': 'Appointments',
        'icon': 'appointment-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'appointments',
    },
    'Dashboards': {
        'display_name': 'Dashboards',
        'icon': 'dashboard-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'dashboards',
    },
    'Website': {
        'display_name': 'Website',
        'icon': 'website-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'website',
    },
    'Contacts': {
        'display_name': 'Contacts',
        'icon': 'contacts-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'contacts',
    },
    'Chat': {
        'display_name': 'Chats',
        'icon': 'chats-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'chats',
    },
}

SUBMENU_LABELS: Dict[str, str] = {
    '00-overview': 'Overview',
    '01-manual': 'Manual',
    '02-procedures': 'Procedures',
    '03-articles': 'Articles',
    '04-faq': 'FAQ',
    '05-reference': 'Reference',
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
                    category = 'FAQ' if 'faq' in basename.lower() else ''
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

    return modules

html_context = {
    'modules': build_modules_context(),
    'supported_languages': [
        {'code': 'en', 'name': 'English'},
        {'code': 'nl', 'name': 'Nederlands'}
    ],
    'default_language': 'en',
}

