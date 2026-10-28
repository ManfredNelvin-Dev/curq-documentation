# Time Off Types and Request Field Definitions

This document provides a factual, scannable reference catalog of configuration fields, validation states, and security access permissions governing Time Off Types and Employee Leave Requests in CURQ.

---

## Time Off Type Configuration Fields

The following fields configure leave policies and operational constraints in **Time Off > Configuration > Time Off Types**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Client-facing title of the leave category *(e.g., `Paid Time Off`, `Sick Leave`)*. |
| **Approval** | Defines required authorization workflow: **No Validation** *(auto-approved)*, **By Time Off Officer**, **By Employee's Approver**, or **By Employee's Approver and Time Off Officer** *(Dual Validation)*. |
| **Requires Allocation** | Determines entitlement requirements: **Yes** *(requires pre-allocated balance)* or **No Limit** *(unlimited booking allowed)*. |
| **Extra Days Requests Allowed** | Toggles whether employees who have consumed their allocation can submit requests for surplus days (**Yes** / **No**). |
| **Allocation Approval** | Approval rule for surplus allocation requests: **By Time Off Officer**, **By Employee's Approver**, or **By Employee's Approver and Time Off Officer**. |
| **Take Time Off in** | Granularity of leave requests: **Day** *(full-day increments)*, **Half Day** *(morning/afternoon)*, or **Hours** *(custom hourly times)*. |
| **Public Holiday Included?** | When enabled, public holidays within the request span deduct from the leave balance. When disabled, public holidays are treated as non-working days and excluded from deductions. |
| **Show On Dashboard?** | When checked, displays a summary balance card on the employee's personal Time Off Dashboard. |
| **Allow Supporting Document** | Toggles the file attachment field on employee leave request forms. |
| **Kind of Time Off** | Classification for accrual and payroll calculations: **Absence** *(non-working absence)* or **Worked Time** *(worked time)*. |
| **Allow Negative Cap?** | When enabled, allows employees to submit requests that exceed their available balance. |
| **Maximum Excess Amount** | Maximum negative balance permitted when negative cap is enabled *(e.g., `-3.00`)*. |
| **Color** | Numerical color palette index used to render leave entries on calendar and Kanban views. |
| **Cover Image** | Vector icon symbol representing the leave type on dashboard summary scorecards. |
| **Generate Timesheets** | When enabled, automatically generates timesheet lines when a request is approved. |
| **Project** | Default project linked to auto-generated leave timesheets. |
| **Task** | Default task linked to auto-generated leave timesheets. |
| **Company** | Operating entity restriction for multi-company environments; blank allows global availability. |

---

## Employee Leave Request Fields

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

## Security Roles and Permission Matrix

| Security Role | Operational Scope & Permissions |
| :--- | :--- |
| **Employee (Self-Service)** | Can view personal dashboard and balances. Can submit time-off and allocation requests. Can view personal leave history. Cannot access Management or Configuration menus. |
| **Team Approver (Manager)** | Can view and approve leave requests for directly supervised team members. Can submit leave on behalf of subordinates. Cannot access administrative configuration. |
| **Time Off Officer** | Can access **Management** menus across all departments. Can approve, validate, refuse, and edit all leave and allocation requests. Can view enterprise reporting. |
| **Administrator** | Full administrative control. Can access **Configuration** menus, create time-off types, build accrual plans, schedule public holidays, and set mandatory blackout days. |

---

## Related Documentation

* [Configure Time Off Types](../task-guides/07-configure-time-off-types.md)
* [Review, Approve, and Manage Team Time Off](../task-guides/04-review-approve-and-manage-team-time-off.md)
* [Understanding Time Off Types and Accrual Architecture](../core-concepts/01-understanding-time-off-types-and-accrual-architecture.md)
