# Project Reporting and Analytics Field Definitions

This document provides a comprehensive data dictionary for all analytical measures, graph visualizers, pivot matrix controls, timeline scales, and cross-project list columns within the **Reporting** and **Tasks** registers of CURQ Project.

---

## 1. All Tasks List Register Data Dictionary

The global list view at **Project > Tasks** aggregates task records across all organizational workspaces:

### List Columns and Indicators

| Column / Field | Description |
| :--- | :--- |
| **Title** | Operational name of the deliverable with direct link to the comprehensive task form. |
| **Project** | Reference link to the parent project workspace *(e.g., `Development`, `Internal`, `Website Redesign`, or `Private`)*. |
| **Sprint** | Designated agile iteration associated with the deliverable. |
| **Assignees** | Primary specialists and technical leads responsible for delivery. |
| **Time Spent** | Cumulative duration of logged timesheet hours for each individual task row and portfolio total *(e.g., `521:34`)*. |
| **Progress** | Real-time percentage indicator measuring completed sub-tasks and milestones. |
| **Next Activity** | Scheduled follow-up meeting, call, or deadline icon with hover details. |
| **Tags** | Operational and categorical labels *(e.g., `Internal`)* applied for cross-cutting filtering. |
| **Stage** | Current workflow status chevron *(e.g., `To Do`)*. |

### Row Selection and Action Buttons

| Button / Control | Behavior |
| :--- | :--- |
| **Selection Checkbox** | Selects one or more task rows to unlock batch actions such as stage transitions, reassignments, or exports. |
| **Start Work Button** | Clicking the green play icon on a task row immediately initiates real-time work timer recording for that task. |

---

## 2. Tasks Analysis Graph View Data Dictionary

The primary reporting dashboard at **Project > Reporting** renders graphical distributions of project metrics:

### Graph Header and Visual Indicators

| Element | Description |
| :--- | :--- |
| **Reporting Top Menu** | Primary navigation tab in the upper header opening the centralized analytical suite. |
| **Tasks Analysis Header** | Dashboard identifier with configuration gear icon for saving custom analytical filters. |
| **Trendline Indicator** | Connected vector line illustrating volume changes and total sum across plotted categories. |

### Graph Toolbar Buttons and Controls

| Button / Control | Behavior |
| :--- | :--- |
| **Measures Selector** | Opens a dropdown menu to change the numerical metric charted *(e.g., Count, Allocated Time, Time Remaining, Overtime)*. |
| **Bar Chart Selector** | Switches the chart to vertical comparative columns across projects. |
| **Line Chart Selector** | Switches the chart to continuous velocity trends and burn-down lines. |
| **Pie Chart Selector** | Switches the chart to proportional slices representing share of project workload. |
| **Stacked Chart Toggle** | Layers stage or tag segments vertically within individual project bars instead of grouping them side-by-side. |
| **Sort Ascending / Descending** | Reorders project bars from smallest to largest volume, or largest to smallest. |

---

## 3. Tasks Analysis Pivot Matrix Data Dictionary

The pivot view at **Project > Reporting** delivers multi-dimensional cross-tabulation across projects and metrics:

### Pivot Matrix Measures

| Measure | Description |
| :--- | :--- |
| **Count Metric** | Total quantity of active and completed tasks within each project grouping. |
| **Allocated Time Metric** | Cumulative sum of budgeted baseline hours configured across task records. |
| **Time Remaining Metric** | Calculation of outstanding unspent hours remaining against allocated budgets. |
| **Overtime Metric** | Quantitative metric logging timesheet hours recorded beyond budgeted baselines. |

### Pivot Toolbar Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Flip Axis Button** | Swaps row dimensions with column dimensions instantly for alternative cross-tabulation. |
| **Expand All Button** | Expands all nested sub-categories across every project row and column simultaneously. |
| **Download XLSX Button** | Generates and downloads an Excel spreadsheet matching the current on-screen matrix structure. |
| **Insert in Spreadsheet Button** | Inserts the live pivot table directly into an internal CURQ spreadsheet. |

---

## 4. Tasks Analysis Gantt Timeline Data Dictionary

The timeline view at **Project > Reporting** plots deliverables against scheduled operational dates:

### Timeline Grid Elements

| Element | Description |
| :--- | :--- |
| **Project Grouping Rows** | Horizontal swimlanes categorizing deliverables by workspace *(e.g., `Development`, `Internal`, `Website Redesign`, `UNASSIGNED`)*. |
| **Current Day Indicator Line** | Vertical red guideline marking today's operational date for rapid schedule alignment. |
| **Task Delivery Block** | Interactive horizontal bar representing the scheduled start date, duration, and deadline of each deliverable. |

### Timeline Controls and Buttons

| Button / Control | Behavior |
| :--- | :--- |
| **Gantt View Switcher** | Far-right layout toggle switching the reporting screen to the horizontal schedule planning grid. |
| **Temporal Scale Controls** | Navigation buttons adjusting timeline zoom and focus across **Today**, **Day**, **Week**, **Month**, and **Year**. |

---

## Related Documentation

* [Analyze Project Performance and Reporting](../task-guides/09-analyze-project-performance-and-reporting.md)
* [Filter and Export Cross-Project Tasks](../task-guides/08-filter-and-export-cross-project-tasks.md)
* [Track Task Time and Manage Timesheets](../task-guides/06-track-task-time-and-manage-timesheets.md)
* [Understanding Timesheet Costing and Project Profitability](../core-concepts/02-understanding-timesheet-costing-and-project-profitability.md)
