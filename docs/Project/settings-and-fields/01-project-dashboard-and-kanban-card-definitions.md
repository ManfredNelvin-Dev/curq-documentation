# Project Dashboard and Kanban Card Definitions

This document provides a data dictionary for all top navigation menus, action bar controls, and project card indicators within the primary CURQ Project overview at **Project > Projects**.

---

## 1. Top Navigation and Header Action Controls

The top header bar coordinates project management, task registries, reporting, and operational views:

| Navigation / Control | Description |
| :--- | :--- |
| **Projects Menu** | Active overview dashboard displaying project workspaces as interactive Kanban cards. |
| **Tasks Menu** | Consolidated task register displaying tasks across all active projects. |
| **Reporting Menu** | Analytical workspace providing task velocity, burn-down charts, and team throughput metrics. |
| **Configuration Menu** | Administrative settings governing project stages, task stages, tags, and activity types. |
| **+ New Button** | Action button launching the project creation dialog to establish a new project workspace. |
| **Search Bar** | Real-time search and filter tool for isolating projects by name, project manager, or partner. |
| **Kanban View Toggle** | Default board layout displaying projects as visual workspace cards. |
| **List View Toggle** | Tabular register displaying project names, managers, contacts, and delivery deadlines. |
| **Activity View Toggle** | Calendar and activity matrix tracking scheduled project milestones and deadlines. |

---

## 2. Project Card Field Definitions

Each project card on the Kanban overview consolidates project status and cross-module linkages:

| Card Element / Metric | Description |
| :--- | :--- |
| **Favorite Star** | Bookmark toggle allowing users to pin critical projects to the top of the board. |
| **Project Title** | The formal designation of the project workspace *(e.g., `Development`)*. |
| **Tasks Counter** | Clickable metric link displaying the total count of assigned project tasks *(e.g., `3 Tasks`)*. |
| **Tickets Counter** | Direct cross-module metric linking to open Helpdesk support tickets connected to this project *(e.g., `1 Tickets`)*. |
| **Start Work Action** | Quick action button with play icon to immediately start real-time task work tracking. |
| **Activity Clock** | Indicator tracking scheduled activities, meetings, or pending project deadlines. |
| **Member Avatars** | Profile badges displaying assigned project leads, specialists, and team contributors. |

---

## 3. Project Creation Modal Field Definitions

The project initialization dialog launches when clicking **+ New** on the Projects board:

| Field / Control | Description |
| :--- | :--- |
| **Name** | Primary text input specifying the project workspace title *(e.g., `e.g. Office Party` or `Development`)*. |
| **Timesheets** | Checkbox toggle enabling task-level timesheet tracking and operational hour logging. |
| **Billable** | Checkbox toggle establishing invoicing integration to bill tracked task time and materials to clients. |
| **Create tasks by sending an email to** | Inbound email alias prefix used to automatically convert external client emails into project tasks. |
| **Create project Button** | Primary action button committing the configuration and provisioning the project workspace. |
| **Discard Button** | Cancellation control closing the modal without saving changes. |

---

## 4. Project Card Context Menu Data Dictionary

Clicking the three vertical dots on any project card reveals the operational context flyout:

| Field Name / Control | Description |
| :--- | :--- |
| **Three-Dots Menu Trigger** | Vertical ellipsis button on the upper-right card corner opening the administrative context menu. |
| **Tasks View Link** | Direct link opening the internal task Kanban pipeline for this workspace. |
| **Milestones View Link** | Navigational link filtering project deliverables to key milestone gates. |
| **Sprints View Link** | Navigational link opening active agile sprint iterations. |
| **Backlog View Link** | Filtered view isolating unscheduled backlog tasks. |
| **Timesheets View Link** | Navigational link opening employee timesheet ledgers recorded against this project. |
| **Dashboard Reporting Link** | Analytical summary view displaying real-time project operational health. |
| **Tasks Analysis Reporting Link** | Filtered reporting link launching the Graph and Pivot analysis for this project. |
| **Burndown Chart Link** | Velocity visualizer tracking remaining sprint work against target delivery deadlines. |
| **Sprints Timeline Link** | Chronological Gantt visualizer displaying sprint delivery milestones. |
| **Color Palette Swatches** | 12 selectable color swatches tinting the project card border for rapid identification. |
| **Share Project Action** | Collaborative action generating invitation links and access rights for external users. |
| **Duplicate Action** | Administrative action cloning project structure, stages, and settings into a new workspace. |
| **Settings Action** | Action button opening the comprehensive project configuration form view. |

---

## Related Documentation

* [Create and Manage Your First Project](../getting-started/01-create-and-manage-your-first-project.md)
* [Navigate and Manage Projects](../task-guides/01-navigate-and-manage-projects.md)
* [Project Task Board and Stage Field Definitions](./02-project-task-board-and-stage-field-definitions.md)
* [Project Configuration and Workspace Settings Field Definitions](./06-project-configuration-and-workspace-settings-field-definitions.md)
