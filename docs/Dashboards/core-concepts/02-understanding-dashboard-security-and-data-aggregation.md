# Understanding Dashboard Security and Data Aggregation

This document explores the technical security architecture, multi-company isolation boundaries, data aggregation pipelines, and caching mechanisms that govern CURQ Dashboards. Understanding these systems ensures administrators can design high-performance reporting suites while maintaining rigorous data privacy and compliance.

---

## The Security Paradigm: Multi-Tiered Access Enforcement

When a user opens a dashboard in CURQ, the system does not simply grant blanket access to the underlying metrics. Instead, access control is enforced across three sequential architectural layers:

1. **Layer 1: Interface & Category Visibility** (`spreadsheet.dashboard.group`) – Evaluates group memberships to show or hide dashboard titles and entire category folders in the left navigation sidebar.
2. **Layer 2: Multi-Company Isolation Boundaries** (`company_id`) – Verifies whether the dashboard is assigned to the user's active company branch or marked globally accessible.
3. **Layer 3: Row-Level Security & Record Rules** (`ir.rule`) – Executes individual record rules and domain filters during SQL metric aggregation so users only see aggregates of records they are authorized to read.

---

## Interface & Category Visibility (Layer 1)

The first line of defense operates at the menu and navigation level:

* **Dashboard Group Restrictions**: Each spreadsheet dashboard registered in **Configuration > Dashboards** can be assigned to a specific security user group (such as `Sales / Administrator` or `Accounting / Officer`).
* **Sidebar Pruning**: When the left navigation drawer renders, CURQ evaluates the current user's group memberships. If a user lacks the required group for a dashboard, that dashboard is excluded from the DOM.
* **Empty Category Auto-Hiding**: If all dashboards inside a parent category group (e.g., `Finance`) are restricted, the entire parent category folder is hidden automatically, preventing visual clutter for unauthorized staff.

---

## Multi-Company Data Isolation (Layer 2)

In multi-company enterprise environments, corporate governance requires strict data segregation between separate legal operating entities:

* **Explicit Dashboard Binding**: When creating a dashboard, administrators can link it to a specific company via the `company_id` field.
* **Active Company Context**: The dashboard only appears in the navigation sidebar when the user has selected that specific company in the top-right company switcher.
* **Global Dashboards**: If `company_id` is left empty, the dashboard is globally available across all entities. However, the data queries inside the dashboard will dynamically filter records based on the user's currently active company context (`env.companies`).

---

## Row-Level Security and Record Rules (Layer 3)

The most critical aspect of CURQ's reporting security is **Record Rule Inheritance**. Unlike external business intelligence tools that connect via service accounts with broad database read access, CURQ's spreadsheet and board engines execute queries through the active user's ORM session:

* **Automatic Security Inheritance**: All data formulas (such as pivot tables and record counts) pass through Odoo's core `ir.rule` framework.
* **Zero Data Leakage**: If a regional salesperson is restricted by record rules to seeing only their personal sales orders, a standard dashboard displaying will automatically evaluate only their permitted records. They will not see colleagues' revenues or confidential enterprise accounts.
* **Drill-Down Consistency**: When a user clicks a KPI score or chart segment to drill down into transactional lists, the opened list view enforces identical security domains. The user cannot access records during drill-down that were hidden in the aggregate calculation.

---

## Data Aggregation and Performance Optimization

High-volume enterprise databases process hundreds of thousands of transactions daily. Generating real-time analytical reports directly from raw transactional tables can introduce severe database contention if not properly architected.

### Read-Optimized SQL Aggregation
CURQ's reporting framework bypasses row-by-row object loading in favor of database-native SQL grouping:
* Queries leverage PostgreSQL `GROUP BY`, `SUM`, and `COUNT` operations directly at the database layer.
* Filter selections (such as Date Ranges or Country codes) are translated into indexed SQL `WHERE` clauses prior to execution, ensuring queries scan only relevant index partitions.

### Server-Side Calculation Caching
To maintain sub-second page loads across frequent dashboard visits:
* The `spreadsheet_dashboard` module maintains a server-side JSON cache of evaluated spreadsheet models.
* When multiple users with identical access privileges view a department dashboard, the pre-computed cell grid is delivered from cache rather than re-executing dozens of raw SQL queries.
* Cache invalidation occurs automatically when underlying transactions are confirmed or when a user applies non-default global filter parameters.

### Drill-Down Action Domain Construction
Rather than storing static record links, CURQ dynamically compiles search domains:
* The system merges the dashboard's base domain, the global filter parameters, and the clicked chart series' specific categorical values into an optimized domain tuple.
* This ensures that drill-downs are always 100% synchronized with the live database state at the precise second of interaction.

---

## Related Documentation

* [Configure Dashboard Groups and Access Rights](../task-guides/03-configure-dashboard-groups-and-access-rights.md)
* [Dashboard Configuration and Group Specifications](../settings-and-fields/01-dashboard-configuration-and-group-specifications.md)
* [Understanding Spreadsheet Dashboards vs. My Dashboard](./01-understanding-spreadsheet-dashboards-vs-my-dashboard.md)

