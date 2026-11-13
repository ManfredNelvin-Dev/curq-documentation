# Accrual Plans and Milestone Specifications

This document catalogs the configuration fields, calculation frequencies, and allocation rules governing automated accrual plans in CURQ.

---

## 1. Accrual Plan Attributes

> **Warning - Cross-System Impact (Employee Compensation & Financial Liabilities):** Modifying accrual formulas, frequency cycles, or **Carry-Over Time** rules affects all enrolled employees across the company retroactively. Setting an incorrect carry-over rule can either wipe out legitimate employee earned leave (triggering labor disputes) or generate unbounded carryover balances that inflate accrued payroll liabilities on the company balance sheet. Non-technical administrators should always test new accrual plans on a test employee record before assigning company-wide.

The following fields define master accrual plans in **Time Off > Configuration > Accrual Plans**:

| Field Name | Description & Options |
| :--- | :--- |
| **Name** | Descriptive name of the accrual plan *(e.g., `Standard Vacation Accrual - 1.5 Days/Month`)*. |
| **Accrued Gain Time** | Specifies when accrued days are credited: **At the start of the accrual period** *(credited on the 1st day of the accrual period)* or **At the end of the accrual period** *(credited on the final day of the completed period)*. |
| **Carry-Over Time** | Specifies when unconsumed days roll forward or reset: **At the start of the year** *(January 1st)*, **On the allocation date** *(anniversary of allocation start date)*, or **Other** *(custom date)*. |
| **Based on worked time** | When enabled, leave accrues proportionally based on attendance or working hours logged in Timesheets. |
| **Milestone Rules** | Sequential milestone rules executed by the plan based on employee tenure milestones. |

---

## 2. Accrual Milestone Level Attributes

The following settings configure individual milestone rules within an accrual plan:

| Field Name | Operational Behavior & Boundaries |
| :--- | :--- |
| **Employee accrue** | Defines the accrual rate per cycle: **Amount** *(e.g., `1`, `1.5`)*, **Unit** (**Days** or **Hours**), and **Frequency** (**Daily**, **Weekly**, **Twice a month**, **Monthly**, **Twice a year**, or **Yearly**). |
| **Cap accrued time** | Checkbox enabling an absolute ceiling on total accumulated leave under this rule, with the numeric cap and unit *(e.g., `100 Days`)*. |
| **Start Accruing** | Waiting period *(numeric value and unit, e.g., `1 Days`)* after the allocation start date before the milestone begins accruing. |
| **Carry over** | Determines year-end balance rollover: **None. Accrued time reset to 0** *(forfeits unused balance)*, **All accrued time carried over** *(rolls over full balance)*, or **Carry over with a maximum** *(rolls over up to a specified cap)*. |
| **Milestone cap** | Checkbox enabling an annual accumulation limit restricting total leave earned under this milestone tier. |
| **Carry Over Validity** | Checkbox enabling an expiration duration during which rolled-over leave remains valid before lapsing *(e.g., `90 Days`)*. |

---

## 3. Allocation Record Attributes

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
* [Holidays, Mandatory Days, and Activity Specifications](03-holidays-mandatory-days-and-activity-specifications.md)
