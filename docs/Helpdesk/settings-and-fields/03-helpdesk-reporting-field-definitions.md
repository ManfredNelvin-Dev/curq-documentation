# Helpdesk Reporting Field Definitions

This document provides a data dictionary for all analytical controls, matrix dimensions, visualization toggles, and metrics within CURQ Helpdesk Reporting at **Helpdesk > Reporting**.

---

## 1. Pivot View Controls and Matrix Dimensions

The Pivot View provides multi-dimensional aggregation across support tickets and performance cohorts:

### 1.1 Pivot Action Toolbar Controls

| Control / Button | Description |
| :--- | :--- |
| **Measures** | Dropdown selector choosing the aggregated computational metric *(e.g., `Count`)* calculated inside matrix cells. |
| **Flip Axis** | Inverts row and column variables instantly to alternate grouping perspectives. |
| **Expand All** | Simultaneously expands every nested row and column group across all hierarchical tiers. |
| **Download / Export** | Generates and downloads an XLSX spreadsheet representation of the active matrix structure. |
| **Table View** | Switches matrix formatting density between compact and standard data cell grids. |

### 1.2 Pivot Matrix Dimensions and Cohorts

| Dimension / Metric | Description |
| :--- | :--- |
| **Total (Row/Column)** | Aggregate summary summing all matching tickets across active filter parameters. |
| **Period / Month** | Temporal intake dimension grouping tickets by creation timestamp *(e.g., `November 2026`)*. |
| **Team Dimension** | Departmental grouping categorizing tickets by designated support unit *(e.g., `Development Team`)*. |
| **Count** | Base integer calculation representing the absolute number of tickets matching the cell coordinates. |

---

## 2. Graph View Controls and Visualization Tools

The Graph View visualizes ticket distributions and operational throughput trends:

### 2.1 Graph View Mode and Chart Selectors

| Chart Control | Description |
| :--- | :--- |
| **Bar Chart** | Renders discrete vertical bars comparing ticket volumes across categories, teams, or stages. |
| **Line Chart** | Draws continuous trend lines illustrating velocity changes over chronological periods. |
| **Pie Chart** | Generates circular proportional wedges showing percentage distribution of support volume. |

### 2.2 Graph Formatting and Sorting Controls

| Layout Control | Description |
| :--- | :--- |
| **Stacked Bar** | Stacks multi-variable values vertically within individual category bars. |
| **Grouped Bars** | Arranges discrete category bars side-by-side along the horizontal axis for direct comparison. |
| **Ascending Sort** | Reorders chart bars in ascending order based on the active metric values. |
| **Descending Sort** | Reorders chart bars in descending order from highest to lowest volume. |
| **Y-Axis Scale** | Decimal value axis displaying operational measurement scale *(e.g., `0.00` to `1.00`)*. |
| **X-Axis Dimension** | Discrete category or ticket reference identifier *(e.g., `HT00065`)*. |
| **Count Legend** | Color-coded indicator identifying the active visual metric *(e.g., blue bar indicating `Count`)*. |

---

## 3. Customer Rating Controls and Metrics Data Dictionary

Located at **Reporting > Customer Rating**, this view aggregates customer feedback scores submitted through automated post-closure satisfaction surveys:

| Control / Metric | Description |
| :--- | :--- |
| **Customer Rating Header** | Title bar identifying the customer satisfaction feedback register. |
| **Kanban View** | Visual card board grouping customer survey submissions by satisfaction sentiment. |
| **List View** | Tabular register displaying customer name, submission timestamp, rating score, and ticket link. |
| **Pivot View** | Multidimensional aggregation matrix calculating satisfaction percentages across teams and months. |
| **Graph View** | Bar and pie charts displaying comparative satisfaction rating distributions. |
| **Empty State Notice** | Informational alert displayed when no survey responses have been submitted *(e.g., `There are no rated tickets at this moment.`)*. |

---

## Related Documentation

* [Analyze Helpdesk Performance and Reports](../task-guides/04-analyze-helpdesk-performance-and-reports.md)
* [Navigate and Use the Helpdesk Dashboard](../task-guides/02-navigate-and-use-the-helpdesk-dashboard.md)
* [Create and Manage Helpdesk Tickets](../task-guides/01-create-and-manage-helpdesk-tickets.md)
* [Helpdesk Ticket and Register Field Definitions](./01-helpdesk-ticket-field-definitions.md)
* [Helpdesk Team Field Definitions](./02-helpdesk-team-field-definitions.md)
