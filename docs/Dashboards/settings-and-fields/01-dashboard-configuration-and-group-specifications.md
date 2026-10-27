# Dashboard Configuration and Group Specifications

This document provides a factual, scannable reference catalog of configuration models, fields, and security parameters governing CURQ Dashboards.

---

## Dashboard Group Configuration Fields

The following fields define dashboard groups in **Dashboards > Configuration > Dashboards** (`spreadsheet.dashboard.group`):

| Field Name | Description |
| :--- | :--- |
| **Name** | The unique title of the dashboard group (such as `Sales`, `Finance`, `Logistics`, or `Human Resources`). Displayed as a top-level category header in the sidebar navigation drawer. |
| **Sequence** | Numerical integer determining the top-to-bottom sorting order of the group in the sidebar. Adjusted visually via drag-and-drop handles in the list view. |
| **Spreadsheets** | One-to-many relationship linking individual spreadsheet dashboards (`spreadsheet.dashboard`) to this category group. |

---

## Spreadsheet Dashboard Line Attributes

The following settings are configured per dashboard line under the **Spreadsheets** tab (`spreadsheet.dashboard`):

| Field Name | Description |
| :--- | :--- |
| **Name** | The title of the individual dashboard. Displayed as a selectable sub-item under its parent category in the navigation sidebar. |
| **Group** | The security access group (e.g., `Sales / Administrator`, `Human Resources / Officer`) required to view this dashboard. When left blank, all internal users can access the dashboard. |
| **Company** | Specifies the operating company for multi-company instances. If populated, the dashboard appears exclusively when users operate within the designated company context. |
| **Is Published** | Toggles public visibility for end users. When checked, the dashboard renders in the user workspace; when unchecked, it remains hidden in draft configuration. |
| **Active** | Archive toggle. Inactive dashboards are archived and excluded from both the sidebar and calculation engine. |
| **Data (Spreadsheet JSON)** | Binary/JSON payload storing grid cell contents, calculation formulas, scorecards, chart definitions, and embedded Odoo data queries. |

---

## Security and Permission Specifications

| Security Role | Operational Scope & Permissions |
| :--- | :--- |
| **Standard User** | Can view published dashboards within groups where they possess module read access. Can personalize **My Dashboard** with private widgets. Cannot modify standard dashboard structures. |
| **Department Manager** | Can view dashboards assigned to their specific department security groups (e.g., Sales Manager, Accounting Officer). Can share filtered dashboard permalinks. |
| **System Administrator** | Full administrative control. Can access **Configuration > Dashboards**, create groups, reorder categories, edit spreadsheet formulas, insert charts, and publish dashboards globally. |

---

## Related Documentation

* [Configure Dashboard Groups and Access Rights](../task-guides/03-configure-dashboard-groups-and-access-rights.md)
* [Dashboard Chart and Filter Definitions](./02-dashboard-chart-and-filter-definitions.md)
* [Understanding Dashboard Security and Data Aggregation](../core-concepts/02-understanding-dashboard-security-and-data-aggregation.md)

