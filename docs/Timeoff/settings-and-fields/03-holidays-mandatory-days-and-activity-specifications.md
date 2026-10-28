# Holidays, Mandatory Days, and Activity Specifications

This document catalogs configuration fields, calendar constraints, and activity scheduling parameters governing Public Holidays, Mandatory Blackout Days, and Activity Types in CURQ.

---

## Public Holiday Attributes

The following fields configure official non-working holidays in **Time Off > Configuration > Public Holidays**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Descriptive name of the holiday *(e.g., `New Year's Day`, `Independence Day`)*. |
| **Company** | Operating entity restriction. In multi-company environments, binds the holiday to a specific branch. |
| **Start Date** | Timestamp marking the start of the holiday period. |
| **End Date** | Timestamp marking the conclusion of the holiday period. |
| **Working Hours** | Specific working calendar schedule to which the holiday applies. Excludes working hours on that schedule. |

---

## Mandatory Day Attributes

The following fields configure attendance blackout dates in **Time Off > Configuration > Mandatory Days**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Event or operational title *(e.g., `Annual Inventory Count`, `General Meeting`)*. |
| **Company** | Operating entity boundary for multi-company instances. |
| **Departments** | Target departments subject to mandatory attendance. If left empty, the blackout applies across the entire company. |
| **Start Date** | Date on which the mandatory attendance window begins. |
| **End Date** | Date on which the mandatory attendance window ends. |
| **Color** | Numerical color palette index used to render the blackout banner across employee calendars. |

---

## Activity Type Configuration Attributes

The following fields configure automated follow-up tasks and approval reminders in **Time Off > Configuration > Activity Types**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Activity title *(e.g., `Time Off Approval`, `Document Verification`)*. |
| **Action** | Behavioral category: **None**, **Upload Document**, **Phonecall**, **Meeting**, or **Reminder**. |
| **Default User** | Responsible user assigned by default when the activity is triggered. |
| **Model** | Target application document *(e.g., Time Off Request or Time Off Allocation)*. |
| **Default Summary** | Pre-populated activity subject line *(e.g., `Review pending leave request`)*. |
| **Icon** | Vector icon displayed on activity notification badges. |
| **Decoration Type** | Visual badge style: **Alert**, **Error**, **Success**, or **Information**. |
| **Keep Done** | When enabled, completed activities remain archived in chatter history instead of being deleted. |
| **Default Note** | Predefined instruction template inserted into the activity body. |
| **Chaining Type** | Post-completion automation: **Suggest Next Activity** *(recommends next step)* or **Trigger Next Activity** *(automatically schedules next step)*. |
| **Suggest** | Follow-up activity recommended upon completion of this activity. |
| **Schedule Delay** | Automatic deadline offset *(e.g., `2 Days` after creation)*. |

---

## Related Documentation

* [Configure Public Holidays and Mandatory Days](../task-guides/09-configure-public-holidays-and-mandatory-days.md)
* [Review, Approve, and Manage Team Time Off](../task-guides/04-review-approve-and-manage-team-time-off.md)
* [Understanding Multi-Tier Approvals and Allocation Mechanisms](../core-concepts/02-understanding-multi-tier-approvals-and-allocation-mechanisms.md)
