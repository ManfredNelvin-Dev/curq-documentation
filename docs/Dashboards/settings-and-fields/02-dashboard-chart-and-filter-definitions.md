# Dashboard Chart and Filter Definitions

This document details visual chart types, analytical metrics, global filter parameters, and layout specifications used across CURQ Dashboards.

---

## Chart and Metric Types Catalog

CURQ Dashboards support diverse visual formats optimized for operational and financial analysis:

| Chart / Metric Type | Analytical Purpose | Key Configuration Attributes |
| :--- | :--- | :--- |
| **Scorecard** | Displays a single high-priority KPI value (e.g., Total Revenue, New Leads) with optional period-over-period comparison variance. | Metric cell reference, headline label, baseline comparison range, positive/negative color inversion. |
| **Column Chart** | Compares discrete categories vertically (e.g., Sales by Product Category, Invoiced Revenue by Month). | Data series range, category labels range, legend visibility, stacked format toggle. |
| **Bar Chart** | Compares ranking lists horizontally (e.g., Top 10 Sales Representatives, Best Seller Products). | Value series, category labels, descending sorting, data label display. |
| **Stacked Bar Chart** | Breaks down aggregate totals into sub-segments across categories (e.g., Department Expenses split by meals, travel, supplies). | Multiple value series sharing a single category axis, normalized 100% or absolute value display. |
| **Line Chart** | Tracks continuous trends, milestones, or pacing over sequential time periods (e.g., Monthly Order Volume). | Time sequence axis, one or more value series, smooth curve toggle, data markers. |
| **Area Chart** | Highlights cumulative volume and magnitude beneath historical trends (e.g., Cumulative Annual Revenue). | Time sequence axis, filled area beneath curve, opacity setting. |
| **Combo Chart** | Evaluates two correlated metrics utilizing distinct scales (e.g., Total Revenue as vertical columns with Average Margin as an overlay line). | Primary Y-axis series (bars), secondary Y-axis series (line), category axis. |
| **Pie / Donut Chart** | Illustrates proportional shares of a whole (e.g., Tasks by Status, Leads by Channel). | Value series, slice labels, hole size (donut vs full pie), legend positioning. |
| **Gauge / Rating** | Illustrates performance benchmarks against qualitative target ranges (e.g., Customer Satisfaction Score, SLA Adherence). | Metric cell, minimum bound, maximum bound, threshold bands (green/yellow/red). |

---

## Standard Dashboard Global Filter Parameters

The global filter bar at the top of standard dashboards allows users to isolate specific transaction subsets:

| Filter Parameter | Operational Behavior & Scope |
| :--- | :--- |
| **Timeframe / Date Range** | Applies temporal boundaries across all date-sensitive queries (e.g., *Last 30 Days*, *Last 90 Days*, *This Month*, *This Quarter*, *This Year*, or *Custom Range*). |
| **Country** | Restricts records based on the associated partner's delivery or billing country. |
| **Product / Category** | Filters transactional lines to isolate specific products, variants, or broader product families. |
| **Customer / Account** | Limits calculations to transactions tied to a specific customer company or partner profile. |
| **Sales Team** | Filters commercial records to evaluate performance for an individual sales division or department. |
| **Salesperson** | Isolates deals, quotes, and activities owned by an individual representative. |
| **UTM Campaign Source** | Analyzes lead generation and revenue attributed to specific marketing channels (e.g., Google, Newsletter). |
| **UTM Medium** | Evaluates inbound conversion channels (e.g., CPC, organic, referral). |

---

## My Dashboard Layout and Action Parameters

The following configuration options manage widgets and layouts within **My Dashboard**:

| Layout / Action | Function & Display Behavior |
| :--- | :--- |
| **1 Column Layout** | Single full-width column grid. Maximizes horizontal space for complex lists, Kanban boards, and multi-column tables. |
| **2 Columns Layout** | Two equal-width parallel columns. Standard default balance for comparing daily queues side-by-side. |
| **3 Columns Layout** | Three equal-width vertical columns. Suited for wide displays, high-density KPI monitoring, and multitasking. |
| **Drag-and-Drop Reorder** | Click and hold on widget header to dynamically reposition cards across vertical stacks or different columns. |
| **Minimize / Collapse (`-`)** | Collapses the widget body into a single-line title bar while maintaining its position in the grid layout. |
| **Maximize / Expand (`+`)** | Reopens a collapsed widget back to its full dimensions. |
| **Close / Remove (`x`)** | Permanently deletes the widget from the user's personal dashboard profile upon confirmation. |

---

## Related Documentation

* [Navigate and Filter Standard Dashboards](../task-guides/01-navigate-and-filter-standard-dashboards.md)
* [Dashboard Configuration and Group Specifications](./01-dashboard-configuration-and-group-specifications.md)
* [Understanding Spreadsheet Dashboards vs. My Dashboard](../core-concepts/01-understanding-spreadsheet-dashboards-vs-my-dashboard.md)

