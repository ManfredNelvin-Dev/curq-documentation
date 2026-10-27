import os
import sys
from pathlib import Path

# Add project root and local extensions to sys.path
sys.path.insert(0, os.path.abspath("."))
sys.path.insert(0, str(Path(__file__).resolve().parent))

from _ext import (
    build_modules_context,
    setup as _ext_setup,
)

# ---------------------------------------------------------
# Project information
# ---------------------------------------------------------

project = "CURQ Documentation"
copyright = "2026, CIT Services"
author = "CIT Services"

version = "18.0"
release = "18.0"

# ---------------------------------------------------------
# Sphinx extensions
# ---------------------------------------------------------

extensions = [
    "myst_parser",
    "sphinx_multiversion",
    "sphinx.ext.mathjax",
    "sphinxcontrib.mermaid",
    "sphinx_design",
]

# Allow ```mermaid code blocks to be parsed directly as mermaid directives
myst_fence_as_directive = ["mermaid"]
mermaid_version = "11.12.1"
mermaid_width = "100%"
mermaid_height = "auto"
mermaid_light_theme = "base"
mermaid_init_config = {
    "startOnLoad": False,
    "theme": "base",
    "themeVariables": {
        "fontFamily": "Inter, system-ui, -apple-system, sans-serif",
        "fontSize": "13px",
        "primaryColor": "#fff6d6",
        "primaryTextColor": "#16345f",
        "primaryBorderColor": "#ffbf3d",
        "lineColor": "#16345f",
        "secondaryColor": "#ffbf3d",
        "tertiaryColor": "#ffffff",
        "clusterBkg": "#fffdf5",
        "clusterBorder": "#ffd875",
        "edgeLabelBackground": "#ffffff",
        "mainBkg": "#fff6d6",
        "nodeBorder": "#ffbf3d",
        "nodeTextColor": "#16345f",
    },
}

myst_enable_extensions = [
    "colon_fence",
    "dollarmath",
    "amsmath",
]

# ---------------------------------------------------------
# Sphinx Multi-Version configuration
# ---------------------------------------------------------

smv_tag_whitelist = r"^v?\d+(\.\d+)*$"
smv_branch_whitelist = r"^(main|18\.0)$"
smv_remote_whitelist = None
smv_released_pattern = r"^tags/.*$"
smv_outputdir_format = "{ref.name}"
smv_prefer_remote_refs = False
smv_latest_version = "18.0"

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
# HTML Context & Standalone Pages
# ---------------------------------------------------------

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

html_additional_pages = {
    "docs/support": "support.html",
    "docs/whats-new": "whats_new.html",
}

# ---------------------------------------------------------
# Sphinx Setup Hook
# ---------------------------------------------------------

def setup(app):
    """Delegate extension setup and context hooks to _ext package."""
    return _ext_setup(app)