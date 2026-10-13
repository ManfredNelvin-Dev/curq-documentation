from typing import Dict

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
    'Discuss': {
        'display_name': 'Discuss',
        'icon': 'discuss-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'discuss',
    },
    'Timeoff': {
        'display_name': 'Time Off',
        'icon': 'timeoff-icon.png',
        'description': 'Discover the module',
        'sidebar_key': 'timeoff',
    },
}
