# Timesheet Line and Sheet Field Definitions

This reference catalog provides field definitions, operational behaviors, and validation rules governing atomic Timesheet Lines and periodic Timesheet Sheets in CURQ Timesheets.

---

## Timesheet Line Entry Fields

The following fields define individual atomic timesheet logs in **My Timesheets**, **All Timesheets**, and the work timer:

| Field Name | Description & Operational Behavior |
| :--- | :--- |
| **Start Time / Date** | Calendar timestamp when the work occurred. Defaults to current system time; determines chronological placement. |
| **Employee** | Team member who executed the work. Inherited automatically from the active login session or assigned by manager. |
| **Project** | Target project deliverable. Directs costs to the project's analytic account. |
| **Task** | Specific milestone or deliverable within the selected project. Constrained by the selected project. |
| **Description** | Free-text operational summary of the activity accomplished. Displayed on client invoices and manager audit views. |
| **Time Spent / Hours** | Quantity of time logged, stored as decimal hours *(e.g., `1.50` = 1 hour 30 minutes)*. |
| **Sales Order Item** | Linked billable service line on customer sales contracts. Drives automatic delivered quantity invoicing. |
| **Ticket Partner** | Customer or external contact linked to associated customer service tickets. |
| **Ticket** | Linked support ticket when logging time directly from helpdesk deliverables. |
| **Department** | Organizational department associated with the employee profile. |
| **Company** | Legal operating company entity in multi-company configurations. |

---

## Periodic Timesheet Sheet Fields

The following fields define periodic timesheet governance containers in **My Timesheet Sheets** and **Timesheet Sheets to Review**:

| Field Name | Description & Operational Behavior |
| :--- | :--- |
| **Employee** | Employee whose time logs are aggregated within the sheet. |
| **Period** | Human-readable label indicating reporting cycle *(e.g., `Weeks 42, 2026 - 43, 2026`)*. |
| **Date From** | Beginning calendar boundary of the sheet's active cycle. |
| **Date To** | Closing calendar boundary of the sheet's active cycle. |
| **Reviewer** | Assigned validator responsible for evaluating and approving the sheet. |
| **Total Time** | Cumulative sum of all hours recorded across projects within the sheet period. |
| **Status / State** | Lifecycle state: `New` (initialized), `Open` (in progress), `Waiting Review` (submitted for approval), `Approved` (finalized). |
| **Company** | Legal company entity for organizational reporting. |

---

## Summary Matrix Grid Specifications

The **Summary** tab renders a dynamic matrix grid that synchronizes bidirectionally with atomic line entries:

| Matrix Dimension | Grid Representation | Behavior & Calculation |
| :--- | :--- | :--- |
| **Row Dimension** | `Project` + `Task` | Combines unique project and task deliverables into distinct table rows. |
| **Column Dimension** | Daily Date Columns *(e.g., Mon–Sun)* | Displays individual days within the period. Editing a cell creates/updates the underlying line. |
| **Row Totals** | End-of-Row Sum | Computes cumulative hours spent on that specific deliverable across the entire period. |
| **Column Totals** | Bottom Summary Row | Sums total hours logged across all projects for each individual day *(e.g., verifying 8.00 hours/day)*. |
| **Sheet Total** | Bottom-Right Cell | Displays cumulative hours for the period *(e.g., `40:00`)*. |

---

## Security Roles and Permission Matrix

| Security Role | Operational Scope & Permissions |
| :--- | :--- |
| **User: own timesheets only** | Can log personal hours, run live timer, edit own draft lines, and submit personal timesheet sheets. Cannot view other employees' records. |
| **User: all timesheets** | Can view personal timesheets as well as read-only access to organization-wide timesheet records and reporting views. |
| **Timesheet Sheet Manager** | Can review, validate, approve, and refuse employee timesheet sheets assigned to their jurisdiction. Can audit team submissions. |
| **HR Officer / Manager** | Can review organization-wide sheets, audit compliance, oversee employee contractual hours, and manage timesheet review queues. |
| **Administrator** | Full administrative rights. Can configure encoding units, sheet ranges, review policies, billing integrations, and time-off rules. |

---

## Related Documentation

* [Timesheet Configuration and Review Specifications](./02-timesheet-configuration-and-review-specifications.md)
* [Create and Submit Timesheet Sheets](../task-guides/01-create-and-submit-timesheet-sheets.md)
* [Understanding Timesheet Architecture and Project Integration](../core-concepts/01-understanding-timesheet-architecture-and-project-integration.md)
