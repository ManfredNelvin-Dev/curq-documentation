# CURQ Documentation

Comprehensive technical documentation for the CURQ business suite. Built with [Sphinx](https://www.sphinx-doc.org/), [MyST Parser](https://myst-parser.readthedocs.io/) (Markdown), and official [`sphinx-multiversion`](https://holzhaus.github.io/sphinx-multiversion/master/).

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Step 1: Cloning & Environment Setup](#2-step-1-cloning--environment-setup)
3. [Step 2: Adding a New Module to the Registry & Content](#3-step-2-adding-a-new-module-to-the-registry--content)
4. [Step 3: Local Preview & Authoring](#4-step-3-local-preview--authoring)
5. [Step 4: Tagging a Specific Commit (Git Tags)](#5-step-4-tagging-a-specific-commit-git-tags)
6. [Step 5: Building Multi-Version Documentation](#6-step-5-building-multi-version-documentation)
7. [Step 6: Docker & Production Deployment](#7-step-6-docker--production-deployment)
8. [Project Directory Layout](#8-project-directory-layout)

---

## 1. Prerequisites

Before getting started, make sure you have the following installed on your machine:

* **Python**: `3.12+`
* **Git**: `2.30+`
* **Make**: GNU Make utility

---

## 2. Step 1: Cloning & Environment Setup

### 1. Clone the Repository
```bash
git clone https://github.com/ManfredNelvin-Dev/curq-documentation.git
cd curq-documentation
```

### 2. Create and Activate a Virtual Environment
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Required Dependencies
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

---

## 3. Step 2: Adding a New Module to the Registry & Content

Follow these steps whenever you create documentation for a new CURQ module (for example: **Inventory**):

### 3.1 Register the Module in `module_registry.py`
Open `module_registry.py` and add a new dictionary entry under `MODULE_REGISTRY`:

```python
MODULE_REGISTRY: Dict[str, Dict[str, str]] = {
    # Existing modules...
    'Inventory': {
        'display_name': 'Inventory',
        'icon': 'inventory-icon.png',
        'description': 'Stock & Warehouse Management',
        'sidebar_key': 'inventory',
    },
}
```

* **`folder_name` (Key)**: Must exactly match the directory name you will create in `docs/` (case-sensitive).
* **`display_name`**: Label shown on the landing page cards.
* **`icon`**: File name of the icon in `_static/images/`.
* **`description`**: Sub-heading displayed under the module title on the landing page.
* **`sidebar_key`**: URL parameter key used for active sidebar highlights (e.g., `?module=inventory`).

### 3.2 Add the Module Icon
Add the icon image into the static images directory:
```text
_static/images/inventory-icon.png
```
*(Recommended format: PNG, 64x64 or 128x128 pixels with a transparent background).*

### 3.3 Create the Module Directory Structure
Under the `docs/` folder, create the module directory and subcategories:

```bash
mkdir -p docs/Inventory/manual docs/Inventory/configurations docs/Inventory/articles docs/Inventory/manual/images
```

Standard module folder structure:
```text
docs/Inventory/
├── 00-overview.md              # Landing overview page (Required)
├── manual/                     # Step-by-step end-user manuals
│   ├── 01-create-receipt.md
│   ├── 02-deliver-products.md
│   └── images/                 # Module screenshots
├── configurations/             # Settings & admin setup procedures
│   ├── 01-warehouse-setup.md
│   └── 02-reordering-rules.md
├── articles/                   # In-depth technical guides & best practices
│   └── optimizing-inventory-turnover.md
└── faq.md                      # Frequently asked questions
```

### 3.4 Writing Documentation Files
* Write all content in standard **Markdown** (`.md`).
* Prefix manual files with two-digit numbers (`01-`, `02-`) to define their display order in the sidebar.
* Store screenshots inside an `images/` directory within the module folder and link them using relative paths:
  ```markdown
  # Create a Warehouse Receipt

  To register incoming goods, navigate to the inventory dashboard.

  ![Warehouse Receipt View](images/warehouse-receipt.png)
  ```

---

## 4. Step 3: Local Preview & Authoring

### Live Auto-Reload Server (Recommended for Writing)
To preview changes with instant browser live-reloading:

```bash
make livehtml
```
*(or run directly: `sphinx-autobuild . _build/html`)*

Open **[http://127.0.0.1:8000](http://127.0.0.1:8000)** in your browser. Whenever you save a `.md` file, the browser automatically rebuilds and refreshes the page.

### Single-Version Build
To compile only the current workspace into `_build/html`:
```bash
make html
```

---

## 5. Step 4: Tagging a Specific Commit (Git Tags)

You do **not** need to create GitHub Releases. `sphinx-multiversion` works directly from your **Git commit tags** and **branches**. Whenever you want to freeze a version of the documentation, simply tag the specific commit hash.

> [!NOTE]
> `sphinx-multiversion` checks out each tagged commit into an isolated worktree during the build process, so each version folder exactly matches the documentation as it existed at that particular commit.

### Tag Naming Convention
The whitelist in `conf.py` (`smv_tag_whitelist = r"^v?\d+(\.\d+)*$"`) automatically detects version tags such as:
* `0.1`, `0.2`, `0.3`
* `1.0`, `1.1`
* `v2.0`

### Step-by-Step: Tagging a Particular Commit

#### 1. Find the commit hash you want to tag
```bash
git log --oneline -n 10
```
Example output:
```text
4a296e6 (HEAD -> upload-docs) search functionality fix
ad78a42 fix: added the multiversion functionality
ce6bb31 Added Timesheet module documentation
f4feb46 Add Accounting documentation
```

#### 2. Tag that particular commit
Specify your desired version number and the commit hash:
```bash
git tag 0.3 ce6bb31
```
*(If you want to tag the latest commit on your current branch, you can simply run `git tag 0.3`).*

#### 3. Verify the tag points to that commit
```bash
git log -1 0.3
```

#### 4. Push the tag to GitHub
```bash
git push origin 0.3
```

#### (Optional) Moving or Deleting a Tag
If you tagged the wrong commit and want to retag:
```bash
# Delete local tag
git tag -d 0.3

# Delete remote tag (if already pushed to GitHub)
git push origin --delete 0.3

# Re-create tag on the correct commit
git tag 0.3 <correct-commit-hash>
git push origin 0.3
```

---

## 6. Step 5: Building Multi-Version Documentation

### 1. Fetch Remote Tags
Ensure your local repository has all tags from the remote:
```bash
git fetch --tags
```

### 2. Run the Multi-Version Build
```bash
make multiversion
```
*(Runs the official `sphinx-multiversion . _build/html`)*

`sphinx-multiversion` will:
1. Automatically discover all commit tags matching the `smv_tag_whitelist` regex in `conf.py` (e.g., any version tag like `0.1`, `0.2`, `0.3`, `0.4`, `1.0`, etc.) and branches matching `smv_branch_whitelist`.
2. Build each discovered commit tag and branch into an isolated subfolder inside `_build/html/`:
   ```text
   _build/html/
   ├── index.html          # Standard root redirect to active branch
   ├── upload-docs/        # Current working branch documentation
   ├── main/               # Main branch documentation
   ├── 0.1/                # Documentation built from commit tagged as 0.1
   ├── 0.2/                # Documentation built from commit tagged as 0.2
   └── <your-tag>/         # Documentation built from any commit you tag (e.g. 0.3, 1.0)
   ```
   *(Note: The version tags above are examples—`sphinx-multiversion` dynamically builds whatever tags exist in Git).*
3. Generate the pre-computed version selector dropdown in the navigation and sidebar of every page.

### 3. Open and Verify Multi-Version Documentation
* **Open root in browser (Linux):**
  ```bash
  xdg-open _build/html/index.html
  ```
* **Or open a specific tagged version directly:**
  ```bash
  xdg-open _build/html/0.3/index.html
  ```

---

## 7. Step 6: Docker & Production Deployment

To run the documentation container locally or deploy to a VPS using Docker:

### 1. Build and Start the Container
```bash
docker compose up -d --build
```

### 2. Access the Documentation
The container serves documentation via Nginx on port `8080`:
* Local: `http://localhost:8080`
* VPS Server: `http://<your-vps-ip>:8080`

### 3. Stop the Container
```bash
docker compose down
```

---

## 8. Project Directory Layout

```text
curq-documentation/
├── _static/              # CSS stylesheets, JavaScript, and module icons
│   ├── css/
│   │   ├── style.css     # Main layout and landing styles
│   │   └── sidebar.css   # Navigation sidebar styles
│   ├── js/
│   │   └── main.js       # Client interactions and search
│   └── images/           # Module icons and logos
├── _templates/           # Jinja2 templates (landing, sidebar, layout)
├── docs/                 # Documentation source content (Markdown files)
├── conf.py               # Sphinx and sphinx-multiversion configuration
├── module_registry.py    # Module catalog metadata and icon bindings
├── Makefile              # Build automation commands (html, multiversion, livehtml)
├── requirements.txt      # Python dependencies
├── Dockerfile            # Production Nginx container
└── docker-compose.yml    # Docker service definitions
```
