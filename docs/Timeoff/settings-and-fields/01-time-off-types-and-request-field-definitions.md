# Time Off Types and Request Field Definitions

This document provides a factual, scannable reference catalog of configuration fields and validation states governing Time Off Types and Employee Leave Requests in CURQ.

---

## 1. Time Off Type Configuration Fields

The following fields configure leave policies and operational constraints in **Time Off > Configuration > Time Off Types**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Client-facing title of the leave category *(e.g., `Paid Time Off`, `Sick Leave`)*. |
| **Approval (Time Off Requests)** | Defines required authorization workflow for leave requests: **No Validation**, **By Time Off Officer**, **By Employee's Approver**, or **By Employee's Approver and Time Off Officer** *(Dual Validation)*. |
| **Requires allocation** | Determines entitlement requirements under **Allocation Requests**: **Yes** *(requires pre-allocated balance)* or **No Limit** *(unlimited booking allowed)*. |
| **Employee Requests** | Controls whether employees can submit self-service allocation requests: **Extra Days Requests Allowed** or **Not Allowed**. |
| **Approval (Allocation Requests)** | Approval rule for allocation requests: **No Validation**, **By Time Off Officer**, **By Employee's Approver**, or **By Employee's Approver and Time Off Officer**. |
| **Notified Time Off Officer** | HR officer selected to receive notifications for submitted requests *(defaults to `Nobody will be notified`)*. |
| **Take Time Off in** | Granularity of leave requests: **Day** *(full-day increments)*, **Half Day** *(morning/afternoon)*, or **Hours** *(custom hourly times)*. |
| **Public Holiday Included** | When enabled, public holidays within the request span deduct from the leave balance. When disabled, public holidays are treated as non-working days and excluded from deductions. |
| **Show On Dashboard** | When checked, displays a summary balance card on the employee's personal Time Off Dashboard. |
| **Allow To Attach Supporting Document** | Toggles the file attachment field on employee leave request forms. |
| **Kind of Time Off** | Classification for accrual and payroll calculations: **Absence** *(non-working absence)* or **Worked Time** *(worked time)*. |
| **Display Time Off in Calendar** | When checked, renders leave entries of this type on calendar views. |
| **Allow Negative Cap** | When enabled, allows employees to submit requests that exceed their available balance *(reveals the **Maximum Excess Amount** limit when active)*. |
| **Generate Timesheets** | When enabled under **Timesheets**, automatically generates timesheet lines when a request of this type is validated. |
| **Project** | Default project linked to auto-generated leave timesheets *(e.g., `Internal`)*. |
| **Task** | Default task linked to auto-generated leave timesheets *(e.g., `Time Off`)*. |
| **Color** | Color swatch under **Display Option** used to render leave entries across calendar views. |
| **Cover Image** | Vector icon symbol under **Display Option** representing the leave type on dashboard summary scorecards. |

---

## 2. Employee Leave Request Fields

The following fields define individual absence requests in **My Time > My Time Off** and **Management > Time Off**:

| Field Name | Description |
| :--- | :--- |
| **Employee** | The employee taking leave. Inherited automatically from user session or selected by manager. |
| **Department** | Read-only department associated with the selected employee profile. |
| **Time Off Type** | The leave category selected for the request. Dictates validation workflow and duration units. |
| **Date Start & Date End** | Calendar dates defining the leave period. |
| **Half Day** | Checkbox indicating a morning or afternoon half-day absence. |
| **Request Hour From / To** | Start and end times defining custom hourly leave requests. |
| **Requested Duration** | System-calculated duration in days or hours based on employee working calendar. |
| **Description** | Optional explanation or operational reason provided by the requester. |
| **Supporting Document** | File attachments providing medical certificates or administrative justification. |
| **State / Status** | Lifecycle state: **Draft** *(unsubmitted)*, **To Approve** *(pending review)*, **Second Approval** *(pending HR review)*, **Approved** *(validated)*, or **Refused** *(rejected)*. |

---

## Related Documentation

* [Configure Time Off Types](../task-guides/07-configure-time-off-types.md)
* [Review, Approve, and Manage Team Time Off](../task-guides/04-review-approve-and-manage-team-time-off.md)
* [Understanding Time Off Types and Accrual Architecture](../core-concepts/01-understanding-time-off-types-and-accrual-architecture.md)
* [Holidays, Mandatory Days, and Activity Specifications](03-holidays-mandatory-days-and-activity-specifications.md)
