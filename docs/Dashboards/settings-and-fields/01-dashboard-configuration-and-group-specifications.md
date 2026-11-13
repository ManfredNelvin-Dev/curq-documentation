# Dashboard Configuration and Group Specifications

This document provides a factual, scannable reference catalog of configuration models, fields, and security parameters governing CURQ Dashboards.

---

## 1. Dashboard Group Configuration Fields

The following fields define dashboard groups in **Dashboards > Configuration > Dashboards**:

| Field Name | Description |
| :--- | :--- |
| **Name** | The unique title of the dashboard group (such as `Sales`, `Finance`, `Logistics`, or `Human Resources`). Displayed as a top-level category header in the sidebar navigation drawer. |
| **Sequence** | Numerical integer determining the top-to-bottom sorting order of the group in the sidebar. Adjusted visually via drag-and-drop handles in the list view. |
| **Spreadsheets** | One-to-many relationship linking individual spreadsheet dashboards to this category group. |

---

## 2. Spreadsheet Dashboard Line Attributes

> **Warning (Data Privacy & Server Performance Safeguard):** Leaving the **Group** field blank makes that dashboard accessible to all internal system users, potentially exposing confidential financial, margin, or compensation figures. Furthermore, embedding high-frequency unindexed domain queries or sub-minute auto-refresh intervals across large transaction volumes can cause severe database lock contention and system-wide slowdowns. Always restrict sensitive dashboards to designated manager roles and benchmark query performance before publishing.

The following settings are configured per dashboard line under the **Spreadsheets** tab:

| Field Name | Description |
| :--- | :--- |
| **Name** | The title of the individual dashboard. Displayed as a selectable sub-item under its parent category in the navigation sidebar. |
| **Group** | The security access group (e.g., `Sales / Administrator`, `Human Resources / Officer`) required to view this dashboard. When left blank, all internal users can access the dashboard. |
| **Company** | Specifies the operating company for multi-company instances. If populated, the dashboard appears exclusively when users operate within the designated company context. |
| **Is Published** | Toggles public visibility for end users. When checked, the dashboard renders in the user workspace; when unchecked, it remains hidden in draft configuration. |
| **Active** | Archive toggle. Inactive dashboards are archived and excluded from both the sidebar and calculation engine. |
| **Data (Spreadsheet JSON)** | Binary/JSON payload storing grid cell contents, calculation formulas, scorecards, chart definitions, and embedded Odoo data queries. |

---

## Related Documentation

* [Configure Dashboard Groups and Access Rights](../task-guides/03-configure-dashboard-groups-and-access-rights.md)
* [Dashboard Chart and Filter Definitions](./02-dashboard-chart-and-filter-definitions.md)
* [Understanding Dashboard Security and Data Aggregation](../core-concepts/02-understanding-dashboard-security-and-data-aggregation.md)
