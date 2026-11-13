# Understanding Project Task Lifecycles and Stage Workflows

In project management, the task lifecycle dictates how conceptual deliverables transition from intake and backlog prioritization to active development, quality verification, and terminal delivery. In CURQ Project, task progression is governed by visual Kanban pipelines, automated timesheet logging, and cross-functional linkages to customer support and commercial contracts.

This document explains the conceptual mechanics of project task state machines, stage gates, and cross-module tracking.

---

## 1. The Task Lifecycle State Machine

Each task in CURQ progresses across sequential operational stages representing distinct phases of delivery:

```{mermaid}
flowchart LR
    New["`**New**
    Intake & backlog`"] -->|"Assign"| Ass["`**Assigned**
    Scoped & ready`"]
    Ass -->|"Start Work"| Prog["`**In Progress**
    Active execution`"]
    Prog -->|"Verify"| Done(["`**Done**
    Delivered & closed`"])

    Prog -.->|"Blocked"| Ass
    Done -.->|"Rework"| Prog
```

### 1.1 Core Workflow Stages
* **New (Backlog / Intake)**: The initial capture stage. Tasks logged by internal managers, generated from client emails, or escalated from Helpdesk tickets enter here awaiting scoping.
* **Assigned (Delegation & Readiness)**: The task has been reviewed and assigned to a primary specialist or engineer. Technical requirements, deadlines, and milestone linkages are finalized.
* **In Progress (Active Execution)**: Work is underway. Clicking **Start work** on a task card initiates real-time working sessions and logs timesheet entries directly to the user profile.
* **Done (Completion & Archival)**: The deliverable has passed functional testing and peer review. Terminal completion updates project completion percentages and triggers customer billing calculations when billable.

---

## 2. Stage Progression and Work-in-Progress (WIP) Control

CURQ Project organizes task execution through Kanban stage columns:

1. **Visual Stage Gates**: Each column functions as a quality gate. Moving a task from `In Progress` to `Done` signifies that all definition-of-done criteria have been satisfied.
2. **Dynamic Stage Customization**: While `New`, `Assigned`, `In Progress`, and `Done` form the standard template, organizations can insert intermediate stages *(such as `Code Review`, `Staging Deployment`, or `Client Approval`)* to mirror internal operational maturity.
3. **Stage Automation**: Transitions between stages can automatically update linked milestone completion, log chatter audit notes, or trigger notifications to project leads.

---

## 3. Cross-Module Relational Architecture

Tasks in CURQ Project connect directly with other core enterprise applications:

```{mermaid}
flowchart LR
    Sales["`**CURQ Sales**
    Sales order lines`"] -->|"Creates Project"| Proj["`**Project Workspace**
    Tasks & sprints`"]
    Help["`**CURQ Helpdesk**
    Support tickets`"] -->|"Escalates Bug"| Proj

    Proj -->|"Logs Hours"| Time["`**CURQ Timesheets**
    Recorded work hours`"]
    Time -->|"Bills Hours"| Inv(["`**CURQ Accounting**
    Customer invoices`"])
```

* **Helpdesk Escalations**: When a client ticket in CURQ Helpdesk *(such as `HT00065`)* requires software development, the ticket is attached to an internal task *(such as `Frontend development`)*. Changes in task status cross-post directly to the ticket chatter.
* **Timesheet Tracking**: Tasks act as the fundamental cost-accounting object. Tracked hours feed directly into project profitability reports and payroll journals.
* **Commercial Invoicing**: For projects configured as **Billable**, completed tasks generate draft invoice lines in CURQ Accounting based on tracked timesheet hours and contract rates.

---

## Related Documentation

* [Create and Manage Your First Project](../getting-started/01-create-and-manage-your-first-project.md)
* [Navigate and Manage Projects](../task-guides/01-navigate-and-manage-projects.md)
* [Create and Configure Projects](../task-guides/02-create-and-configure-projects.md)
* [Project Dashboard and Kanban Card Definitions](../settings-and-fields/01-project-dashboard-and-kanban-card-definitions.md)
