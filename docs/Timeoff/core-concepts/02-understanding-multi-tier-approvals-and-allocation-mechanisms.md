# Understanding Multi-Tier Approvals and Allocation Mechanisms

This document explores the access control architecture, multi-tiered approval workflows, allocation distribution channels, and calendar constraint engines that govern CURQ Time Off. A thorough understanding of these systems enables enterprise human resources teams to maintain strict organizational compliance while preventing operational understaffing.

---

## The Governance Paradigm: Segregation of Duties

Leave management requires balancing departmental operational needs with corporate human resources oversight:

* **Frontline Managers** understand team bandwidth, project deadlines, and immediate operational coverage. They verify whether an employee's requested dates conflict with critical deliverables.
* **HR Officers and Administrators** oversee statutory compliance, global entitlement ceilings, labor contracts, and payroll accuracy. They ensure that leaves conform to legal frameworks and corporate benefit agreements.

CURQ enforces this segregation of duties through modular approval workflows and security access tiers (**Time Off User**, **Time Off Officer**, and **Administrator**).

```{mermaid}
flowchart TD
    subgraph Single["Single Approval (1-Tier)"]
        direction TB
        S1["Employee Submits Request"] --> S2["Direct Manager Review"]
        S2 -->|Approve| S3(["Approved & Balance Deducted"])
        S2 -->|Refuse| S4(["Refused & Feedback Logged"])
    end

    subgraph Dual["Dual Validation (2-Tier)"]
        direction TB
        D1["Employee Submits Request"] --> D2["1st Review: Team Manager"]
        D2 -->|Approve| D3["2nd Review: HR Officer"]
        D2 -->|Refuse| D5(["Refused & Feedback Logged"])
        D3 -->|Validate| D4(["Approved & Balance Deducted"])
        D3 -->|Refuse| D5
    end
```

---

## The Four Leave Approval Workflows

Each leave category can be configured with one of four approval workflows:

| Approval Configuration | Operational Mechanism | Best-Fit Leave Scenarios |
| :--- | :--- | :--- |
| **No Validation** | Requests are immediately marked **Approved** upon employee submission. Balances deduct automatically without supervisor review. | Unpaid leave, informal remote work notifications, mandatory training attendance. |
| **By Employee's Approver** | The request routes to the employee's direct manager as defined on their employee profile. The manager validates or refuses. | Short-term casual absences, emergency half-days, compensatory leave usage. |
| **By Time Off Officer** | The request bypasses frontline managers and routes directly to centralized HR officers or legal compliance staff. | Statutory maternity/paternity leave, jury duty, extended military service. |
| **By Employee's Approver and Time Off Officer** | **Dual Validation**: The direct manager must approve first (transitioning request to **Second Approval**). The HR Officer must then validate to reach **Approved**. | Extended annual vacation (>10 consecutive days), sabbatical leave, medical leaves requiring doctor verification. |

---

## Allocation Distribution Channels

Granting leave entitlements across hundreds of employees manually is inefficient and error-prone. CURQ provides four distinct distribution modes within the **Multiple Requests** engine:

### 1. By Individual Employee
* **Scope**: Targeted single-employee assignments.
* **Application**: Tailored compensatory days, special performance bonuses, or adjusted contractual allowances.

### 2. By Department
* **Scope**: Evaluates department hierarchy and assigns allocations to all active members of the selected unit.
* **Application**: Department-wide floating holidays, regional office closures, or department-specific service milestones.

### 3. By Company
* **Scope**: Grants uniform leave allocations across all employees assigned to a specific legal entity in a multi-company instance.
* **Application**: Annual company-wide vacation renewals, statutory public leave mandates, or regional corporate allowances.

### 4. By Employee Tag
* **Scope**: Dynamic group assignment based on analytical employee tags (e.g., `Executive`, `Shift Worker`, `Intern`, `Night Shift`).
* **Application**: Shift-differential compensatory allowances, union-negotiated benefits, or executive perk days.

---

## Calendar Constraint Engines: Working Hours, Public Holidays, and Mandatory Days

Accurate absence calculations require dynamic evaluation against the enterprise calendar framework:

```{mermaid}
flowchart LR
    A["**1. Requested Dates**<br>Total calendar span"] --> B["**2. Working Schedule**<br>Subtract weekends & off-hours"]
    B --> C["**3. Public Holidays**<br>Subtract non-working holidays"]
    C --> D(["**4. Net Leave Duration**<br>Final days deducted"])
```

### 1. Working Hours Integration
CURQ never deducts standard non-working hours. If an employee on a Monday–Friday (40-hour) schedule requests leave from Friday to Monday, CURQ calculates exactly 2 working days (16 hours), ignoring Saturday and Sunday.

### 2. Public Holiday Deductions
When a public holiday (e.g., New Year's Day) falls within a requested leave window, the **Public Holiday Included** toggle dictates behavior:
* **Toggle Disabled (Default)**: The public holiday is recognized as a non-working day; no vacation entitlement is deducted for that date.
* **Toggle Enabled**: The holiday is deducted from the employee's personal leave allowance, treating the date as a standard absence.

### 3. Mandatory Days Lockout
Organizations can designate mandatory attendance dates (e.g., annual general meetings, retail peak season, fiscal year-end closing):
* When a mandatory day is defined for a company or department, CURQ displays a colored banner on the calendar.
* Employee self-service time-off requests spanning mandatory days are automatically blocked, ensuring essential workforce availability during critical business periods.

---

## Related Documentation

* [Review, Approve, and Manage Team Time Off](../task-guides/04-review-approve-and-manage-team-time-off.md)
* [Allocate Time Off to Multiple Employees](../task-guides/06-allocate-time-off-to-multiple-employees.md)
* [Configure Public Holidays and Mandatory Days](../task-guides/09-configure-public-holidays-and-mandatory-days.md)
