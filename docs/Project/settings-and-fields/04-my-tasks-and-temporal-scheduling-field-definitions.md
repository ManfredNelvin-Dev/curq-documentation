# My Tasks and Temporal Scheduling Field Definitions

This document provides a data dictionary for all navigation controls, personal Kanban columns, and task card indicators within the **Tasks > My Tasks** dashboard.

---

## 1. My Tasks Control Panel and View Selectors

The personal task register consolidates deliverables assigned to the active user across all project workspaces:

### Navigation and Search Fields

| Element / Field | Description |
| :--- | :--- |
| **Tasks Top Menu** | Primary navigation tab in the upper header opening the global personalized task workspace. |
| **My Tasks Breadcrumb** | Dashboard label with configuration gear icon for customizing display preferences. |
| **Open Tasks Filter** | Active search tag isolating unresolved assignments and excluding closed or archived records. |
| **Search Bar** | Keyword text entry box for filtering personal tasks by title, project, or tag. |

### View Switcher Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Kanban View Switcher** | Switches to the card-based board organizing personal work by temporal scheduling horizons. |
| **List View Switcher** | Switches to the tabular register showing task titles, parent projects, deadlines, and current stages. |
| **Calendar View Switcher** | Switches to the schedule visualizer arranging personal deliverables across calendar days and weeks. |
| **Pivot View Switcher** | Switches to the analytical cross-tabulation table aggregating personal hours and task counts across projects. |
| **Graph View Switcher** | Switches to the visual chart displaying task volume distributions and completion metrics. |
| **Activity View Switcher** | Switches to the chronological feed displaying scheduled activities, notes, and upcoming milestones. |

---

## 2. Temporal Scheduling Horizon Columns

The **My Tasks** board uses time-based horizon columns to structure daily productivity:

### Horizon Columns

| Column / Horizon | Description |
| :--- | :--- |
| **Inbox** | Intake staging queue holding newly assigned or unscheduled tasks requiring triage. |
| **Tomorrow** | Near-term planning queue holding tasks scheduled for execution on the next business day. |
| **Today** | Immediate operational queue holding high-priority deliverables committed for same-day delivery. |
| **This Week** | Sprint execution queue containing commitments scheduled for delivery during the current working week. |
| **This Month** | Medium-term queue containing strategic deliverables due before the close of the calendar month. |
| **Later** | Long-range backlog queue for deferred tasks, future iterations, and unscheduled ideas. |

### Column Action Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **+ Column Quick-Add** | Clicking `+` in a column header opens an inline card to create a task directly inside that scheduling horizon. |

---

## 3. Personal Task Card Indicators

Each task card on the personal board provides rapid status diagnostics:

| Indicator / Element | Description |
| :--- | :--- |
| **Task Title** | Primary name of the deliverable *(e.g., `CUG webshop - product master configuration`)*. |
| **Priority Stars** | Three-star interactive rating allowing specialists to set personal urgency. |
| **Timesheet Clock Icon** | Visual icon indicating logged labor hours against allocated budgets. |
| **State / Security Shield** | Status icon indicating access restrictions or task execution state. |
| **Assignee Avatar** | Circular badge displaying the specialist initial *(e.g., `A`)*. |
| **Completion Status Indicator** | Circular status indicator showing active task state. |

---

## Related Documentation

* [Manage Personal Workloads with My Tasks](../task-guides/07-manage-personal-workloads-with-my-tasks.md)
* [Filter and Export Cross-Project Tasks](../task-guides/08-filter-and-export-cross-project-tasks.md)
* [Project Task Board and Stage Field Definitions](./02-project-task-board-and-stage-field-definitions.md)
* [Project Task Field Definitions](./03-project-task-field-definitions.md)
