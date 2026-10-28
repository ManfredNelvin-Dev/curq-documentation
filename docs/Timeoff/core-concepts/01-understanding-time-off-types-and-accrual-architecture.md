# Understanding Time Off Types and Accrual Architecture

This document explores the architectural models, underlying data pipelines, accrual calculation engines, and balance governance rules that power CURQ Time Off. Understanding these principles allows HR directors and system administrators to design equitable, legally compliant leave policies that balance organizational agility with automated workforce accounting.

---

## The Dual Entitlement Model: Fixed Allocations vs. Dynamic Accruals

Managing employee leave requires two distinct entitlement structures:

1. **Fixed (Lump-Sum) Allocations**:
   * Entitlements granted all at once—such as 15 days of annual vacation credited on January 1st, or 3 compensatory days awarded after weekend event coverage.
   * Balances remain static until consumed by approved leave requests or expired via configured validity deadlines.

2. **Dynamic Accrual Plans**:
   * Entitlements earned progressively over time based on service milestones—such as accumulating 1.75 days per month of active employment, or 1 hour of paid leave for every 30 hours worked.
   * Balances recalculate continuously according to scheduled batch routines, tenure tiers, and work schedules.

```{mermaid}
flowchart LR
    subgraph Source["1. Entitlement Source"]
        direction TB
        A["**Fixed Allocation**<br>Lump-sum balance credited upfront"]
        B["**Accrual Plan**<br>Progressive balance earned over time"]
        C["**Unallocated (No Limit)**<br>Direct booking without balance pool"]
    end

    subgraph Pool["2. Balance Accounting"]
        direction TB
        D["**Fixed Balance Pool**<br>Valid within set dates"]
        E["**Accrued Balance**<br>Earned per period / milestone"]
        F["**No Balance Tracking**<br>Unlimited policy allowance"]
    end

    subgraph Outcome["3. Leave Booking"]
        direction TB
        G(["**Deducted from Available Balance**"])
        H(["**Approved Absence Recorded**"])
    end

    A --> D --> G
    B --> E --> G
    C --> F --> H
```

---

## Architectural Comparison of Entitlement Models

The table below contrasts the three primary allocation architectures available in CURQ Time Off:

| Architectural Dimension | Fixed Regular Allocation | Dynamic Accrual Plan | No-Limit (Unallocated) Type |
| :--- | :--- | :--- | :--- |
| **Configuration Mode** | Fixed Regular Allocation | Dynamic Accrual Allocation linked to Accrual Plan | Unallocated (No Limit Required) |
| **Balance Generation** | Single immediate balance credit upon manager approval. | Incremental balance increments calculated per frequency cycle. | Unlimited; balance is not capped or tracked against an allocation pool. |
| **Typical Use Cases** | Annual vacation quotas, compensatory time, executive allowances. | Standard earned leave, tenure-based vacation accrual, hourly part-time leave. | Unpaid leave, bereavement, jury duty, compassionate leave. |
| **Tenure Scaling** | Manual adjustments or annual re-allocation needed per employee. | Automated milestone transitions based on service duration (e.g., year 1 vs year 3). | Not applicable. |
| **Overdraw Protection** | Enforced strictly unless negative cap is explicitly configured. | Enforced against current accrued total or maximum annual milestone cap. | Not applicable; absences are always allowed subject to approval. |
| **Carry-Over Rules** | Governed by hard validity expiration dates. | Governed by carry-over rules: reset to zero, roll all over, or roll over with maximums. | Not applicable. |

---

## How the Accrual Plan Calculation Engine Operates

Accrual plans automate complex statutory leave entitlements by evaluating sequential milestone rules against employee tenure and calendar schedules.

### 1. Accrued Gain Timing

When an employee earns leave within a period (such as 1.5 days per month), CURQ evaluates the **Accrued Gain Time** setting:

* **At the start of the accrual period**: Leave is credited at 00:00 on the first day of the cycle *(e.g., on the 1st of each month)*. This allows employees to take leave anticipating the full month's service.
* **At the end of the accrual period**: Leave is credited only after the cycle completes *(e.g., on the last day of the month)*, ensuring employees earn time only after rendering service.

### 2. Tenure-Based Milestone Tiers

Organizations often award greater leave entitlements to tenured staff. CURQ implements this through progressive milestones on a single accrual plan:

* **Tier 1 (Months 0–12)**: Accrue 1.25 days monthly (15 days annually), cap total balance at 20 days.
* **Tier 2 (Months 13–36)**: Accrue 1.50 days monthly (18 days annually), cap total balance at 25 days.
* **Tier 3 (Month 37+)**: Accrue 1.75 days monthly (21 days annually), cap total balance at 30 days.

When an employee reaches a service milestone, the engine automatically transitions their accrual rate without requiring HR intervention.

### 3. Carry-Over Governance and Expiration

At the conclusion of an accrual cycle (such as the end of the calendar year), the engine processes unused balances:

* **Reset to Zero**: Any unused accrued days are forfeited.
* **Carry Over All**: Unused days carry forward unconditionally into the subsequent year.
* **Carry Over with a Maximum**: A capped amount (e.g., up to 5 days) carries forward; surplus days lapse.
* **Carry-Over Validity Window**: Carried-over days can be configured to expire after a defined grace period *(e.g., must be used within 90 days of the new calendar year)*.

---

## Worked Time vs. Absence Rules

For hourly or part-time staff, leave accrual can be tied directly to actual hours logged in the **Timesheets** application:

* **Based on Worked Time**: When enabled on an accrual plan, CURQ calculates leave accruals as a direct percentage of validated attendance hours or timesheet entries.
* **Kind of Time Off Classification**:
  * **Absence**: Leaves configured as absences do not count as worked time. If an employee takes 3 days of unpaid leave, those 3 days do not generate accrual credits.
  * **Worked Time**: Paid holidays and training leaves can be classified as worked time, allowing accrual accumulation to continue uninterrupted during paid absences.

---

## Negative Cap Mechanics and Overdraft Governance

Under standard rules, CURQ prevents employees from booking leave that exceeds their current available balance. However, business policies often allow borrowing against future earnings:

* **Allow Negative Cap**: When enabled on a time-off type, employees can submit requests even if their current balance is zero.
* **Maximum Excess Amount**: Establishes a strict credit limit *(e.g., maximum -3.00 days)*. If an employee attempts to book -4.00 days, CURQ blocks submission.
* **Automatic Recovery**: As subsequent monthly accruals execute, newly earned leave automatically offsets the negative balance until the account returns to a positive standing.

---

## Related Documentation

* [Configure Time Off Types](../task-guides/07-configure-time-off-types.md)
* [Configure Accrual Plans and Milestones](../task-guides/08-configure-accrual-plans-and-milestones.md)
* [Time Off Types and Request Field Definitions](../settings-and-fields/01-time-off-types-and-request-field-definitions.md)
