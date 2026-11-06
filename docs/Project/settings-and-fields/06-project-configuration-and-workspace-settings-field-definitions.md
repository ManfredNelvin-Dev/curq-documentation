# Project Configuration and Workspace Settings Field Definitions

This document provides a comprehensive data dictionary for all header smart buttons, administrative fields, governance settings, analytical accounts, and pipeline stage rules within the CURQ Project settings form view.

---

## 1. Project Settings Header and Smart Buttons

The project configuration header provides high-level health indicators, cross-module links, and operational actions:

| Field Name / Control | Description |
| :--- | :--- |
| **Share Project Button** | Action button launching external collaborator invitation workflows and portal access rules. |
| **Tasks Smart Button** | Metric button showing completed versus total tasks with completion percentage *(e.g., `0/1 (0%)`)*. |
| **Dashboard Status Smart Button** | Quick indicator tracking project milestone health and delivery confidence. |
| **Tickets Smart Button** | Counter button displaying open Helpdesk customer tickets associated with this project. |
| **Child Projects Smart Button** | Navigational button accessing nested sub-projects within this master workspace. |
| **Sprints Smart Button** | Agile counter displaying active and planned development sprints. |
| **Backlog Smart Button** | Register button opening unassigned backlog work items. |
| **Start Work Button** | Action button with green play icon initiating real-time project-level time logging. |
| **Favorite Star** | Bookmark control pinning the workspace to top priority positions across the enterprise. |
| **Project Title** | Master name defining the workspace *(e.g., `Website Redesign`)*. |
| **Name of the Tasks** | Customizable singular label applied to deliverables across views *(default `Tasks`)*. |
| **Use Tickets as** | Customizable label applied to linked Helpdesk support records *(default `Tickets`)*. |
| **Tags** | Categorical tags applied for global search filtering and reporting. |
| **Project Manager** | Lead administrator or technical coordinator responsible for workspace governance. |
| **Parent Project** | Relational link nesting this workspace under an overarching corporate program. |
| **Planned Date** | Calendar date range establishing target commencement and delivery deadlines. |
| **Allocated Time** | Total budgeted labor hours allocated across the entire project scope. |

---

## 2. Settings Tab Data Dictionary

The **Settings** tab defines project visibility, customer communication aliases, and module integrations:

| Field Name / Control | Description |
| :--- | :--- |
| **Visibility (Private)** | Radio option restricting workspace access strictly to invited internal users. |
| **Visibility (All Internal)** | Radio option granting view and update rights to all internal employees. |
| **Visibility (Public / Portal)** | Radio option permitting invited external portal users and all internal staff to access the workspace. |
| **Create tasks by sending an email to** | Inbound mailbox alias prefix *(e.g., `web`)* converting received messages into project tasks automatically. |
| **Milestones Toggle** | Checkbox activating milestone progress tracking gates and delivery thresholds. |
| **Timesheets Toggle** | Checkbox enabling labor hour logging, real-time timers, and specialist capacity reporting. |
| **Billable Toggle** | Checkbox establishing commercial billing integration with CURQ Sales and Invoicing. |

---

## 3. Analytic Tab Data Dictionary

The **Analytic** tab establishes relational connections to corporate financial and cost accounting ledgers:

| Field Name / Control | Description |
| :--- | :--- |
| **Project Analytic Account** | Financial analytic ledger account *(e.g., `Website Redesign`)* recording direct labor costs and revenues. |

---

## 4. Project Stages Tab Data Dictionary

The **Project Stages** tab configures the sequential progression gates and automated email templates:

| Field Name / Control | Description |
| :--- | :--- |
| **Stage Reorder Handle** | Drag-and-drop icon on the left edge allowing administrators to resequence column order. |
| **Name** | Title of the pipeline stage *(e.g., `To Do`, `Started`, `Doing`, `Pending`, `Done`)*. |
| **Folded in Kanban** | Checkbox collapsing the stage column by default in Kanban views to reduce visual clutter. |
| **Email Template** | Automated email template triggered when tasks transition into this specific stage. |
| **Delete Row Action** | Table control removing a stage from the project workflow pipeline. |
| **Add a line Control** | Table action button inserting a new operational stage into the project master. |

---

## Related Documentation

* [Create and Configure Projects](../task-guides/02-create-and-configure-projects.md)
* [Configure Project Stages and Task Pipelines](../task-guides/03-configure-project-stages-and-task-pipelines.md)
* [Project Dashboard and Kanban Card Definitions](./01-project-dashboard-and-kanban-card-definitions.md)
* [Project Task Board and Stage Field Definitions](./02-project-task-board-and-stage-field-definitions.md)
* [Understanding Project Task Lifecycles and Stage Workflows](../core-concepts/01-understanding-project-task-lifecycles-and-stages.md)
