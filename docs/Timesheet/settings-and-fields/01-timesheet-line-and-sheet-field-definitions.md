# Timesheet Line and Sheet Field Definitions

This reference catalog provides field definitions, operational behaviors, and validation rules governing atomic Timesheet Lines and periodic Timesheet Sheets in CURQ Timesheets.

---

## 1. Timesheet Sheet Details Tab Fields

The following fields define the line-item columns under the **Details** tab on a periodic timesheet sheet:

| Field Name | Description |
| :--- | :--- |
| **Date** | Calendar date on which the work was performed *(e.g., `10/26/2026`)*. Synchronizes with the matching date column on the **Summary** tab. |
| **Project** | Target customer or internal project to which the logged hours belong *(e.g., `Development`)*. |
| **Task** | Specific deliverable task within the selected project *(e.g., `Backend development`)*. |
| **Description** | Brief operational summary describing the work completed *(e.g., `Initial project setup`)*. |
| **Hours** | Duration worked on the entry in `HH:MM` format *(e.g., `04:00`)*. |

---

## 2. Periodic Timesheet Sheet Fields

The following fields define periodic timesheet governance containers in **My Timesheet Sheets** and **Timesheet Sheets to Review**:

| Field Name | Description |
| :--- | :--- |
| **Employee** | Employee whose time logs are aggregated within the sheet. |
| **Period** | Human-readable label indicating reporting cycle *(e.g., `Weeks 42, 2026 - 43, 2026`)*. |
| **Date From** | Beginning calendar boundary of the sheet's active cycle. |
| **Date To** | Closing calendar boundary of the sheet's active cycle. |
| **Reviewer** | Assigned validator responsible for evaluating and approving the sheet. |
| **Total Time** | Cumulative sum of all hours recorded across projects within the sheet period. |
| **Department** | Organizational department associated with the employee profile. |

---

## 3. Summary Matrix Grid Specifications

The **Summary** tab renders a dynamic matrix grid that synchronizes bidirectionally with atomic line entries:

| Matrix Dimension | Grid Representation | Behavior & Calculation |
| :--- | :--- | :--- |
| **Row Dimension** | `Project` + `Task` | Combines unique project and task deliverables into distinct table rows. |
| **Column Dimension** | Daily Date Columns *(e.g., Mon–Sun)* | Displays individual days within the period. Editing a cell creates/updates the underlying line. |
| **Row Totals** | End-of-Row Sum | Computes cumulative hours spent on that specific deliverable across the entire period. |
| **Column Totals** | Bottom Summary Row | Sums total hours logged across all projects for each individual day *(e.g., verifying 8.00 hours/day)*. |
| **Sheet Total** | Bottom-Right Cell | Displays cumulative hours for the period *(e.g., `40:00`)*. |

---

## 4. Work Timer Session Fields

The following fields configure live tracking sessions in the **Start work** dialog:

| Field Name | Description |
| :--- | :--- |
| **Description** | Operational summary describing the work performed during the session *(e.g., `Server setup`)*. |
| **Start Time** | Timestamp when the work session begins *(initialized automatically to the current date and time, e.g., `10/28/2026 07:41:51`)*. |
| **End Time** | Timestamp when the work session ends *(left blank while the timer is active and populated upon stopping)*. |
| **Project** | Target project to which the tracked session hours are billed and allocated *(e.g., `Development`)*. |
| **Task** | Specific deliverable task within the selected project *(e.g., `Server setup`)*. |

---

## 5. My Timesheets List View Fields

The following fields define the columns in the **My Timesheets > My Timesheets** list view:

| Field Name | Description |
| :--- | :--- |
| **Start Time** | Timestamp when the activity started *(defaults to the current date and time; editable inline when logging past work)*. |
| **Project** | Target customer or internal project to which the logged hours belong *(e.g., `Development`)*. |
| **Task** | Specific deliverable task within the selected project *(e.g., `Server setup`, `Frontend development`)*. |
| **Description** | Short operational summary describing the work performed *(e.g., `Initial project setup`)*. |
| **Sales Order Item** | Linked billable service line on a customer sales order used for time-and-materials invoicing. |
| **Time Spent** | Logged duration for the entry in `HH:MM` format *(e.g., `03:00`, `04:00`)*, paired with a row-level timer toggle and column total at the bottom. |

---

## Related Documentation

* [Timesheet Configuration and Review Specifications](./02-timesheet-configuration-and-review-specifications.md)
* [Create and Submit Timesheet Sheets](../task-guides/01-create-and-submit-timesheet-sheets.md)
* [Understanding Timesheet Architecture and Project Integration](../core-concepts/01-understanding-timesheet-architecture-and-project-integration.md)
