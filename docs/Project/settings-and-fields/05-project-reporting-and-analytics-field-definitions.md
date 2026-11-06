# Project Reporting and Analytics Field Definitions

This document provides a comprehensive data dictionary for all analytical measures, graph visualizers, pivot matrix controls, timeline scales, and cross-project list columns within the **Reporting** and **Tasks** registers of CURQ Project.

---

## 1. All Tasks List Register Data Dictionary

The global list view at **Project > Tasks** aggregates task records across all organizational workspaces:

| Field Name / Control | Description |
| :--- | :--- |
| **All Tasks Breadcrumb** | Active workspace label with configuration gear icon for customizing list field displays. |
| **Selection Checkbox** | Multi-select selector for initiating batch stage transitions, reassignments, or exports. |
| **Priority Stars** | Interactive rating control allowing users to update task urgency directly within table rows. |
| **Status Dot** | Quick status indicator reflecting task execution readiness and blockage status. |
| **Title** | Operational name of the deliverable with direct link to the comprehensive task form. |
| **Project** | Reference link to the parent project workspace *(e.g., `Development`, `Internal`, `Website Redesign`, or `Private`)*. |
| **Sprint** | Designated agile iteration associated with the deliverable. |
| **Assignees** | Primary specialists and technical leads responsible for delivery. |
| **Time Spent** | Cumulative duration of logged timesheet hours for each individual task row and portfolio total *(e.g., `521:34`)*. |
| **Progress** | Real-time percentage indicator measuring completed sub-tasks and milestones. |
| **Next Activity** | Scheduled follow-up meeting, call, or deadline icon with hover details. |
| **Tags** | Operational and categorical labels *(e.g., `Internal`)* applied for cross-cutting filtering. |
| **Stage** | Current workflow status chevron *(e.g., `To Do`)*. |
| **Start Work Button** | Row-level action button with green play icon initiating real-time work timer recording. |

---

## 2. Tasks Analysis Graph View Data Dictionary

The primary reporting dashboard at **Project > Reporting** renders graphical distributions of project metrics:

| Field Name / Control | Description |
| :--- | :--- |
| **Reporting Top Menu** | Primary navigation tab in the upper header opening the centralized analytical suite. |
| **Tasks Analysis Header** | Dashboard identifier with configuration gear icon for saving custom analytical filters. |
| **Measures Selector** | Dropdown menu defining the numerical metric charted *(e.g., Count, Allocated Time, Time Remaining, Overtime)*. |
| **Bar Chart Selector** | Visualization icon rendering vertical comparative column charts across projects. |
| **Line Chart Selector** | Visualization icon rendering continuous velocity trends and burn-down lines. |
| **Pie Chart Selector** | Visualization icon rendering proportional market-share style slices of project workload. |
| **Stacked Chart Toggle** | Visualization mode layering stage or tag segments within individual project bars. |
| **Sort Ascending / Descending** | Control buttons reordering project bars from smallest to largest volume or vice versa. |
| **Trendline Indicator** | Connected vector line illustrating volume changes and total sum across plotted categories. |

---

## 3. Tasks Analysis Pivot Matrix Data Dictionary

The pivot view at **Project > Reporting** delivers multi-dimensional cross-tabulation across projects and metrics:

| Field Name / Control | Description |
| :--- | :--- |
| **Count Metric** | Total quantity of active and completed tasks within each project grouping. |
| **Allocated Time Metric** | Cumulative sum of budgeted baseline hours configured across task records. |
| **Time Remaining Metric** | Calculation of outstanding unspent hours remaining against allocated budgets. |
| **Overtime Metric** | Quantitative metric logging timesheet hours recorded beyond budgeted baselines. |
| **Flip Axis Button** | Table control swapping row dimensions with column dimensions for alternative cross-tabulation. |
| **Expand All Button** | Hierarchy control expanding nested sub-categories across all projects simultaneously. |
| **Download XLSX Button** | Export control generating an Excel spreadsheet matching on-screen matrix values. |
| **Insert in Spreadsheet Button** | Integration control linking the pivot table directly into internal CURQ spreadsheets. |

---

## 4. Tasks Analysis Gantt Timeline Data Dictionary

The timeline view at **Project > Reporting** plots deliverables against scheduled operational dates:

| Field Name / Control | Description |
| :--- | :--- |
| **Gantt View Switcher** | Far-right layout toggle displaying horizontal schedule planning grids. |
| **Temporal Scale Controls** | Navigation buttons toggling timeline density across **Today**, **Day**, **Week**, **Month**, and **Year**. |
| **Project Grouping Rows** | Horizontal swimlanes categorizing deliverables by workspace *(e.g., `Development`, `Internal`, `Website Redesign`, `UNASSIGNED`)*. |
| **Current Day Indicator Line** | Vertical red guideline marking today's operational date for rapid schedule alignment. |
| **Task Delivery Block** | Interactive horizontal bar representing the scheduled start date, duration, and deadline of each deliverable. |

---

## Related Documentation

* [Analyze Project Performance and Reporting](../task-guides/09-analyze-project-performance-and-reporting.md)
* [Filter and Export Cross-Project Tasks](../task-guides/08-filter-and-export-cross-project-tasks.md)
* [Track Task Time and Manage Timesheets](../task-guides/06-track-task-time-and-manage-timesheets.md)
* [Understanding Timesheet Costing and Project Profitability](../core-concepts/02-understanding-timesheet-costing-and-project-profitability.md)
