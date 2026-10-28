# Timesheet Configuration and Review Specifications

This reference guide outlines configuration settings, review policy behaviors, service billing integration rules, and workflow lifecycle specifications in CURQ Timesheets.

---

## Global System Settings

The following settings govern global timesheet recording and governance under **Configuration > Settings**:

| Field Name | Description |
| :--- | :--- |
| **Encoding Method** | Select `Hours / Minutes` for standard task-level tracking or `Days / Half-Days` for day-rate consulting. Enforces the unit of measure across all timesheet entry views. |
| **Time Billing** | Enables sales order item linkage on timesheets and automated customer invoicing based on delivered working hours. |
| **Time Off Integration** | Automatically generates non-billable timesheet records for approved employee leaves and public holidays. |
| **Time Off Project** | Designates the internal administrative project that hosts non-working leave hours *(default: `Internal`)*. |
| **Time Off Task** | Identifies the specific deliverable task dedicated to leave allocations *(default: `Time Off`)*. |
| **Sheet Range** | Defines periodic boundary containers for timesheet sheets *(e.g., `Week` or `Month`)*. |
| **Week Start Day** | Sets the beginning day of the weekly cycle *(e.g., `Monday` or `Sunday`)*, orienting column one in weekly summary matrix grids. |
| **Review Policy** | Determines managerial validation routing: **By HR Officers**, **By HR Managers**, or **By Timesheets Managers**. |

---

## Timesheet Sheet Workflow Lifecycle Transitions

| Source State | Trigger Action | Target State | Behavioral & Access Restrictions |
| :--- | :--- | :--- | :--- |
| `New` | Record creation | `Open` | Initial container generated; employee begins populating lines and matrix cells. |
| `Open` | **Submit to Reviewer** | `Waiting Review` | Employee entries are locked against modification; review notification routed to authorized reviewer. |
| `Waiting Review` | **Approve** | `Approved` | Records permanently locked; delivered quantities pushed to sales orders; entries released for payroll. |
| `Waiting Review` | **Refuse** | `Open` | Sheet reset to draft state; reappears in employee's **My Timesheets to Submit** queue for revision. |

---

## Service Product Billing Rules

When configuring billable services in **Sales / Inventory > Products**:

| Invoicing Policy | Timesheet Behavior | Customer Invoicing Result |
| :--- | :--- | :--- |
| **Prepaid (Fixed Price)** | Timesheets log internal hours and compute labor cost against the project. | Delivered quantities do not increment invoiceable lines; invoices generated based on upfront sales terms. |
| **Based on Timesheets** | Timesheets increment delivered quantities on sales order lines upon approval. | Generates draft customer invoices directly reflecting approved hours multiplied by agreed hourly rates. |
| **Milestones** | Timesheets track project effort toward deliverables. | Invoicing triggers manually or automatically when defined project milestone tasks reach completion. |

---

## Related Documentation

* [Timesheet Line and Sheet Field Definitions](./01-timesheet-line-and-sheet-field-definitions.md)
* [Configure Timesheet Policies and Encoding Rules](../task-guides/06-configure-timesheet-policies-and-encoding-rules.md)
* [Understanding Timesheet Sheet Approval and Billing Workflows](../core-concepts/02-understanding-timesheet-sheet-approval-and-billing-workflows.md)
