# Understanding Timesheet Sheet Approval and Billing Workflows

Timesheet governance is vital for organizational payroll compliance, project cost control, and client billing accuracy. This document details the lifecycle stages of timesheet sheets, review policies, refusal remediation processes, and the downstream billing mechanisms triggered when time logs are approved.

---

## The Timesheet Sheet State Machine

Timesheet sheets move through four distinct operational stages to maintain data integrity and regulatory accountability:

```{mermaid}
flowchart LR
    New["`**New**`"] --> Open["`**Open**`"]
    Open -->|Submit| Waiting["`**Waiting Review**`"]
    Waiting -->|Approve| Approved["`**Approved**`"]
    Waiting -->|Refuse| Refused["`**Refused**`"]
    Refused -->|Back to Open| Open
```

1. **New**:
   * The container is generated for an upcoming or active cycle *(e.g., current workweek)*.
   * Period boundaries and company assignment are initialized automatically.

2. **Open**:
   * The employee actively adds lines, records hours via the matrix grid, or logs entries via the live timer.
   * Hours remain fully editable by the employee.

3. **Waiting Review (Submitted)**:
   * The employee clicks **Submit to Reviewer**, finalizing their declaration.
   * Entries are locked against further modification by the employee.
   * Review activities and notifications are routed to the designated manager.

4. **Approved**:
   * The reviewer validates that hours are accurate and properly allocated.
   * Delivered quantities update automatically on linked sales order lines.
   * Entries become immutable records for accounting and payroll export.

5. **Refused**:
   * If discrepancies or missing task allocations are identified, the reviewer rejects the sheet.
   * The sheet returns to the **Open** stage, unlocking the lines so the employee can correct and resubmit.

```{mermaid}
flowchart TD
    subgraph Submission["Employee Activity"]
        A["`**Draft/Open Sheet**
        Record Daily Hours`"] --> B["`**Submit to Reviewer**
        Lock Entries`"]
    end

    subgraph Review["Managerial Governance"]
        B --> C{"`**Manager Review**
        Audit Deliverables`"}
        C -->|Refuse| D["`**Return to Employee**
        Unlock for Corrections`"]
        D --> A
        C -->|Approve| E["`**Finalized Approval**
        Immutable Records`"]
    end

    subgraph Billing["Downstream Release"]
        E --> F["`**Sales Order Invoicing**
        Time & Materials Delivery`"]
        E --> G["`**Analytic Cost Validation**
        Gross Margin Calculation`"]
    end
```

---

## Bidirectional Details-Summary Synchronization

A unique architectural feature of CURQ Timesheet Sheets is bidirectional synchronization between entry modes:

* **Details Tab (Atomic Records)**:
  * Allows employees to log discrete work items with comprehensive textual descriptions, specific date stamps, and task associations.
* **Summary Tab (Matrix Grid)**:
  * Aggregates recorded hours across a weekly calendar grid arranged by project and task rows.
  * Adjusting a numeric cell on the Summary matrix automatically creates or updates the underlying atomic line on the Details tab.
  * Adding a line on the Details tab immediately updates the matching date column and total sum in the Summary matrix.

---

## Timesheet Review Policies and Authorization

Organizations configure review workflows based on their management structure:

| Policy Configuration | Authorized Reviewer | Ideal Organizational Context |
| :--- | :--- | :--- |
| **Employee's Direct Manager** | Line manager defined on the HR Employee profile. | General corporate structures where direct leads monitor attendance and overall capacity. |
| **Timesheet / HR Reviewer** | Designated compliance officer or timesheet supervisor. | Centralized organizations where human resources audits labor regulations and payroll hours. |
| **Project Manager Validation** | Project managers responsible for specific deliverables. | Professional services firms where billable deliverable accuracy is governed by project leads. |

---

## Client Billing and Invoicing Integration

When timesheets are integrated with customer sales orders, approval triggers automated billing logic based on the service invoicing policy:

### Time and Materials (Billed on Timesheets)

* **Policy**: Billed based on delivered quantities.
* **Mechanism**: Every approved timesheet hour increments the **Delivered Quantity** on the corresponding sales order line.
* **Invoicing**: Creating a customer invoice pulls all unbilled approved timesheet hours at the contracted hourly rate.

### Fixed Price / Milestone Deliverables

* **Policy**: Billed based on milestone completion or upfront fixed fees.
* **Mechanism**: Approved timesheet hours consume the task budget and update internal analytic costs without altering invoiceable sales order quantities.
* **Profitability**: Allows project managers to track real-time project margins by comparing fixed contract revenue against incurred labor costs.

### Prepaid Service Packs

* **Policy**: Clients purchase a block of hours in advance *(e.g., 50 support hours)*.
* **Mechanism**: Approved timesheets deplete the remaining prepaid service balance until exhausted, alerting account managers when replenishment is needed.

---

## Related Documentation

* [Review, Approve, and Refuse Timesheet Sheets](../task-guides/04-review-approve-and-refuse-timesheet-sheets.md)
* [Configure Timesheet Policies and Encoding Rules](../task-guides/06-configure-timesheet-policies-and-encoding-rules.md)
* [Understanding Timesheet Architecture and Project Integration](./01-understanding-timesheet-architecture-and-project-integration.md)
