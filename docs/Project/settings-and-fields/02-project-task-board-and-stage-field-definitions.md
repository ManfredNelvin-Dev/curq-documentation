# Project Task Board and Stage Field Definitions

This document provides a data dictionary for all header controls, stage creation inputs, and default pipeline columns within the internal project task board at **Project > Projects > [Project Name]**.

---

## 1. Task Board Header and View Controls

The internal task board displays tasks associated with a specific project workspace across multiple analytical perspectives:

### Header Fields and Filters

| Element / Field | Description |
| :--- | :--- |
| **Project Breadcrumb** | Navigation breadcrumb displaying the active path *(e.g., `Projects / Website Redesign`)* with workspace settings gear icon. |
| **Open Tasks Filter** | Default search filter tag restricting the active board to unresolved and active tasks. |
| **Search Bar** | Keyword search input for isolating tasks by title, assigned user, or tags. |

### Header Buttons and View Toggles

| Button / Toggle | Behavior |
| :--- | :--- |
| **Control Panel Toggle** | Clicking the filter sliders icon opens or closes the advanced search, grouping, and custom filter panel. |
| **Kanban View Toggle** | Switches to the column-based board layout grouping tasks by operational delivery stage. |
| **List View Toggle** | Switches to a tabular task register sorted by title, assignee, deadline, and stage. |
| **Calendar View Toggle** | Switches to the scheduled task matrix organized across monthly and weekly delivery calendars. |
| **Pivot View Toggle** | Switches to a multi-dimensional cross-tabulation table for analyzing task quantities and hours across users. |
| **Graph View Toggle** | Switches to bar and line visualizers displaying task distribution and completion velocities. |
| **Activity View Toggle** | Switches to a chronological tracker showing pending calls, reviews, and task deadlines. |
| **Gantt View Toggle** | Switches to a horizontal timeline bar chart illustrating task dependencies, start dates, and milestones. |

---

## 2. Stage Pipeline Configuration Controls

When initializing or customizing a project task board, CURQ provides dynamic stage definition controls:

### Stage Fields and Default Columns

| Field / Stage | Description |
| :--- | :--- |
| **Stage Input Field** | Text entry field *(placeholder `Stage...`)* used to type the title of a new custom pipeline stage. |
| **New Stage** | Intake and triage column holding unstarted tasks and backlog requests. |
| **Assigned Stage** | Delegation column holding tasks assigned to a specialist awaiting active execution. |
| **In Progress Stage** | Execution column holding tasks actively undergoing development, design, or implementation. |
| **Done Stage** | Terminal resolution column holding verified, tested, and completed task deliverables. |

### Stage Setup Buttons and Behavior

| Button / Link | Behavior |
| :--- | :--- |
| **Add Button** | Commits the entered custom stage title and appends a new column to the board. |
| **See examples Link** | Opens pre-configured stage templates for software, marketing, and operations workflows. |

---

## 3. Active Stage Pipeline Data Dictionary

Once workflow stages are configured, the project task board displays operational columns ready for task execution:

### Active Pipeline Stages and Indicators

| Stage / Indicator | Description |
| :--- | :--- |
| **To Do** | Intake queue for unstarted tasks awaiting prioritization or scoping. |
| **Started** | Initial activity stage where preliminary preparation or technical setup has commenced. |
| **Doing** | Active execution stage where development, design, or copywriting is actively underway. |
| **Pending** | Paused stage where tasks wait on client feedback, external approvals, or vendor deliverables. |
| **Done** | Terminal completion stage where deliverables have been tested, approved, and archived. |
| **Empty State Notice** | Informational alert displayed when no tasks exist *(e.g., `No tasks found. Let's create one!`)*. |

### Board Action Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **+ Stage Button** | Opens an inline stage creation input on the far right of the board so managers can insert additional stages. |

---

## 4. Inline Quick-Add Task Card Controls

Clicking the **`+`** icon on any Kanban stage column reveals the inline task creation card:

### Quick-Add Card Fields

| Field Name | Description |
| :--- | :--- |
| **Task Title** | Mandatory text entry field *(placeholder `e.g. Send Invitations`)* defining the work deliverable. Tooltip provides contextual guidance. |
| **Sprint** | Optional selection field associating the task with an active or planned agile sprint iteration. |
| **Assignees** | Multi-select selector designating one or more team specialists responsible for task execution. |

### Quick-Add Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Add Button** | Immediately saves the task and inserts the new task card at the top of the current column. |
| **Edit Button** | Saves the preliminary details and redirects to the full task form view for detailed configuration. |
| **Delete Button** | Clicking the trash bin icon discards the draft card without persisting the task to the database. |

---

## Related Documentation

* [Create and Manage Your First Project](../getting-started/01-create-and-manage-your-first-project.md)
* [Understanding Project Task Lifecycles and Stage Workflows](../core-concepts/01-understanding-project-task-lifecycles-and-stages.md)
* [Project Dashboard and Kanban Card Definitions](./01-project-dashboard-and-kanban-card-definitions.md)
* [Create and Configure Projects](../task-guides/02-create-and-configure-projects.md)
