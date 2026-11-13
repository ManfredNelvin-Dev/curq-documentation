# Project Configuration and Workspace Settings Field Definitions

This document provides a comprehensive data dictionary for all header smart buttons, administrative fields, governance settings, analytical accounts, and pipeline stage rules within the CURQ Project settings form view.

---

## 1. Project Settings Header and Smart Buttons

The project configuration header provides high-level health indicators, cross-module links, and operational actions:

### Project Header Fields

| Field Name | Description |
| :--- | :--- |
| **Project Title** | Master name defining the workspace *(e.g., `Website Redesign`)*. |
| **Name of the Tasks** | Customizable singular label applied to deliverables across views *(default `Tasks`)*. |
| **Use Tickets as** | Customizable label applied to linked Helpdesk support records *(default `Tickets`)*. |
| **Tags** | Categorical tags applied for global search filtering and reporting. |
| **Project Manager** | Lead administrator or technical coordinator responsible for workspace governance. |
| **Parent Project** | Relational link nesting this workspace under an overarching corporate program. |
| **Planned Date** | Calendar date range establishing target commencement and delivery deadlines. |
| **Allocated Time** | Total budgeted labor hours allocated across the entire project scope. |

### Header Action and Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **Share Project Button** | Launches external collaborator invitation workflows and configures portal access rules. |
| **Tasks Smart Button** | Displays completed versus total tasks with percentage *(e.g., `0/1 (0%)`)* and opens the project's task register on click. |
| **Dashboard Status Smart Button** | Opens the project health and milestone confidence update view. |
| **Tickets Smart Button** | Displays the count of linked Helpdesk customer tickets and navigates directly to them on click. |
| **Child Projects Smart Button** | Opens nested sub-projects belonging to this master workspace. |
| **Sprints Smart Button** | Displays active and planned agile sprints and opens the sprint register on click. |
| **Backlog Smart Button** | Opens the register of unassigned backlog work items for this project. |
| **Start Work Button** | Clicking the green play icon initiates real-time project-level time logging. |
| **Favorite Star** | Toggles bookmark status to pin or unpin the workspace on the Projects overview board. |

---

## 2. Settings Tab Data Dictionary

> **Warning - Cross-System Impact (Billable Projects & Analytic Accounting):** De-selecting the **Billable** checkbox or changing the associated **Analytic Account** immediately disconnects logged employee timesheets from linked Sales Orders. Hours worked will not show up on customer invoices, leading to unbilled services and revenue loss. Non-technical users should not change billing or analytic configurations while a project has active work orders in progress.

The **Settings** tab defines project visibility, customer communication aliases, and module integrations:

| Field Name | Description |
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

| Field Name | Description |
| :--- | :--- |
| **Project Analytic Account** | Financial analytic ledger account *(e.g., `Website Redesign`)* recording direct labor costs and revenues. |

---

## 4. Project Stages Tab Data Dictionary

The **Project Stages** tab configures the sequential progression gates and automated email templates:

### Stage Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Name** | Title of the pipeline stage *(e.g., `To Do`, `Started`, `Doing`, `Pending`, `Done`)*. |
| **Folded in Kanban** | Checkbox collapsing the stage column by default in Kanban views to reduce visual clutter. |
| **Email Template** | Automated email template triggered when tasks transition into this specific stage. |

### Stage Row Controls and Buttons

| Button / Control | Behavior |
| :--- | :--- |
| **Stage Reorder Handle** | Drag-and-drop handle on the left edge that resequences pipeline stage column order. |
| **Delete Row Action** | Clicking the trash bin icon removes the stage from the project workflow pipeline. |
| **Add a line Control** | Inserts a new editable stage row into the project stages table. |

---

## Related Documentation

* [Create and Configure Projects](../task-guides/02-create-and-configure-projects.md)
* [Configure Project Stages and Task Pipelines](../task-guides/03-configure-project-stages-and-task-pipelines.md)
* [Project Dashboard and Kanban Card Definitions](./01-project-dashboard-and-kanban-card-definitions.md)
* [Project Task Board and Stage Field Definitions](./02-project-task-board-and-stage-field-definitions.md)
* [Understanding Project Task Lifecycles and Stage Workflows](../core-concepts/01-understanding-project-task-lifecycles-and-stages.md)
