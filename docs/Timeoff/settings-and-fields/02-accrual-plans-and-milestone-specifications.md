# Accrual Plans and Milestone Specifications

This document catalogs the configuration fields, calculation frequencies, and allocation rules governing automated accrual plans in CURQ.

---

## Accrual Plan Attributes

The following fields define master accrual plans in **Time Off > Configuration > Accrual Plans**:

| Field Name | Description & Options |
| :--- | :--- |
| **Name** | Descriptive name of the accrual plan *(e.g., `Standard Vacation Accrual - 1.5 Days/Month`)*. |
| **Accrued Gain Time** | Specifies when accrued days are credited: **At the start of the accrual period** *(credited on the 1st day of the accrual period)* or **At the end of the accrual period** *(credited on the final day of the completed period)*. |
| **Carry-Over Time** | Specifies when unconsumed days roll forward or reset: **At the start of the year** *(January 1st)*, **On the allocation date** *(anniversary of allocation start date)*, or **Other** *(custom date)*. |
| **Based on worked time** | When enabled, leave accrues proportionally based on attendance or working hours logged in Timesheets. |
| **Milestone Rules** | Sequential milestone rules executed by the plan based on employee tenure milestones. |

---

## Accrual Milestone Level Attributes

The following settings configure individual milestone rules within an accrual plan:

| Milestone Field | Operational Behavior & Boundaries |
| :--- | :--- |
| **Start Accruing** | Waiting period before milestone takes effect relative to allocation start date *(e.g., `3 Months`, `1 Year`)*. |
| **Amount** | Numeric quantity of leave credited per frequency cycle *(e.g., `1.50`)*. |
| **Unit** | Unit of measurement for added leave: **Day** or **Hours**. |
| **Frequency** | Interval at which accrual executes: **Daily**, **Weekly**, **Twice a month**, **Monthly**, **Twice a year**, or **Yearly**. |
| **Cap Accrued Time** | Toggle enabling an absolute ceiling on total accumulated leave under this rule. |
| **Maximum Accrued Time** | Numerical maximum balance cap permitted *(e.g., `30.00 Days`)*. Accrual halts once this threshold is reached. |
| **Carry Over Action** | Determines year-end balance rollover: **Lost** *(unconsumed balance resets to zero)*, **All** *(roll over full balance)*, or **Maximum** *(roll over up to a defined ceiling)*. |
| **Maximum Carry Over** | Maximum days or hours allowed to roll forward when carry-over action is set to maximum. |
| **Milestone Cap** | Annual accumulation ceiling restricting total days an employee can earn within a 12-month cycle. |
| **Carry Over Validity** | Duration during which rolled-over leave remains valid before expiring *(e.g., `90 Days`)*. |

---

## Allocation Record Attributes

The following settings configure allocation grants in **Management > Allocations**:

| Allocation Field | Description & Options |
| :--- | :--- |
| **Name** | Administrative title for the allocation grant *(e.g., `Annual Vacation - 2026`)*. |
| **Mode** | Target recipient scope: **By Employee** *(individual)*, **By Company** *(entire company)*, **By Department** *(departmental team)*, or **By Employee Tag** *(custom tag group)*. |
| **Employee** | Specific employee receiving the allocation *(when mode is By Employee)*. |
| **Time Off Type** | Leave category being allocated *(e.g., `Paid Time Off`, `Compensatory Days`)*. |
| **Allocation Type** | Entitlement mechanism: **Regular Allocation** *(fixed immediate grant)* or **Accrual Allocation** *(dynamic plan accumulation)*. |
| **Accrual Plan** | Linked accrual plan defining milestone calculation *(required when allocation type is Accrual Allocation)*. |
| **Validity Date From / To** | Date range defining the legal validity window for the allocation. |
| **Allocated Quantity** | Number of days or hours granted under the allocation *(e.g., `15.00 Days`)*. |
| **Status** | Lifecycle state: **Draft** *(unsubmitted)*, **To Approve** *(pending review)*, **Approved** *(validated)*, or **Refused** *(rejected)*. |

---

## Related Documentation

* [Configure Accrual Plans and Milestones](../task-guides/08-configure-accrual-plans-and-milestones.md)
* [Grant and Validate Employee Allocations](../task-guides/05-grant-and-validate-employee-allocations.md)
* [Understanding Time Off Types and Accrual Architecture](../core-concepts/01-understanding-time-off-types-and-accrual-architecture.md)
