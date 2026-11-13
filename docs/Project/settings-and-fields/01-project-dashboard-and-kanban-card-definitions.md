# Project Dashboard and Kanban Card Definitions

This document provides a data dictionary for all top navigation menus, action bar controls, and project card indicators within the primary CURQ Project overview at **Project > Projects**.

---

## 1. Top Navigation and Header Action Controls

The top header bar coordinates project management, task registries, reporting, and operational views:

### Navigation Menus and Search

| Menu / Field | Description |
| :--- | :--- |
| **Projects Menu** | Active overview dashboard displaying project workspaces as interactive Kanban cards. |
| **Tasks Menu** | Consolidated task register displaying tasks across all active projects. |
| **Reporting Menu** | Analytical workspace providing task velocity, burn-down charts, and team throughput metrics. |
| **Configuration Menu** | Administrative settings governing project stages, task stages, tags, and activity types. |
| **Search Bar** | Real-time search and filter input for isolating projects by name, project manager, or partner. |

### Header Buttons and View Toggles

| Button / Control | Behavior |
| :--- | :--- |
| **+ New Button** | Launches the project creation dialog to establish a new project workspace. |
| **Kanban View Toggle** | Switches the board to the default card layout displaying projects as visual workspace cards. |
| **List View Toggle** | Switches to a tabular register displaying project names, managers, contacts, and delivery deadlines. |
| **Activity View Toggle** | Switches to the calendar and activity matrix tracking scheduled project milestones and deadlines. |

---

## 2. Project Card Field Definitions

Each project card on the Kanban overview consolidates project status and cross-module linkages:

### Card Fields and Metrics

| Field / Indicator | Description |
| :--- | :--- |
| **Project Title** | The formal designation of the project workspace *(e.g., `Development`)*. |
| **Tasks Counter** | Metric displaying the total count of assigned project tasks *(e.g., `3 Tasks`)*. |
| **Tickets Counter** | Cross-module metric showing open Helpdesk support tickets connected to this project *(e.g., `1 Tickets`)*. |
| **Activity Clock** | Indicator tracking scheduled activities, meetings, or pending project deadlines. |
| **Member Avatars** | Profile badges displaying assigned project leads, specialists, and team contributors. |

### Card Buttons and Behavior

| Button / Action | Behavior |
| :--- | :--- |
| **Favorite Star** | Toggles bookmark status to pin or unpin critical projects at the top of the board. |
| **Tasks Counter Link** | Clicking the counter opens the task pipeline filtered to this project. |
| **Tickets Counter Link** | Clicking the counter navigates directly to the open Helpdesk support tickets linked to this project. |
| **Start Work Action** | Clicking the play icon immediately starts real-time task work tracking. |

---

## 3. Project Creation Modal Field Definitions

The project initialization dialog launches when clicking **+ New** on the Projects board:

### Modal Fields

| Field Name | Description |
| :--- | :--- |
| **Name** | Primary text input specifying the project workspace title *(e.g., `Office Party` or `Development`)*. |
| **Timesheets** | Checkbox toggle enabling task-level timesheet tracking and operational hour logging. |
| **Billable** | Checkbox toggle establishing invoicing integration to bill tracked task time and materials to clients. |
| **Create tasks by sending an email to** | Inbound email alias prefix used to automatically convert external client emails into project tasks. |

### Modal Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Create project** | Commits the configuration, creates the workspace, and opens the new project board. |
| **Discard** | Closes the modal immediately without saving changes. |

---

## 4. Project Card Context Menu Data Dictionary

Clicking the three vertical dots on any project card reveals the operational context flyout:

### Context Menu Navigation Links

| Menu Link | Description |
| :--- | :--- |
| **Tasks View Link** | Direct link opening the internal task Kanban pipeline for this workspace. |
| **Milestones View Link** | Navigational link filtering project deliverables to key milestone gates. |
| **Sprints View Link** | Navigational link opening active agile sprint iterations. |
| **Backlog View Link** | Filtered view isolating unscheduled backlog tasks. |
| **Timesheets View Link** | Navigational link opening employee timesheet ledgers recorded against this project. |
| **Dashboard Reporting Link** | Analytical summary view displaying real-time project operational health. |
| **Tasks Analysis Reporting Link** | Filtered reporting link launching the Graph and Pivot analysis for this project. |
| **Burndown Chart Link** | Velocity visualizer tracking remaining sprint work against target delivery deadlines. |
| **Sprints Timeline Link** | Chronological Gantt visualizer displaying sprint delivery milestones. |

### Context Menu Buttons and Actions

| Button / Control | Behavior |
| :--- | :--- |
| **Three-Dots Menu Trigger** | Clicking the vertical ellipsis button on the upper-right card corner opens the administrative context menu. |
| **Color Palette Swatches** | Selecting one of the 12 color swatches tints the project card border for rapid visual identification. |
| **Share Project** | Generates invitation links and manages access rights for external users. |
| **Duplicate** | Clones the project structure, stages, and settings into a new workspace. |
| **Settings** | Opens the comprehensive project configuration form view. |

---

## Related Documentation

* [Create and Manage Your First Project](../getting-started/01-create-and-manage-your-first-project.md)
* [Navigate and Manage Projects](../task-guides/01-navigate-and-manage-projects.md)
* [Project Task Board and Stage Field Definitions](./02-project-task-board-and-stage-field-definitions.md)
* [Project Configuration and Workspace Settings Field Definitions](./06-project-configuration-and-workspace-settings-field-definitions.md)
