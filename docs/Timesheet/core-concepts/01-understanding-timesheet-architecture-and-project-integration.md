# Understanding Timesheet Architecture and Project Integration

This document examines the underlying architecture, operational structure, analytic accounting connections, and project management integrations that power CURQ Timesheets. Understanding these architectural mechanisms enables operational managers and financial controllers to track resource effort, monitor deliverable budgets, and automate professional service invoicing.

---

## 1. Core Data Architecture and Operational Dual-Layer Structure

CURQ Timesheets operates on a unified, dual-layer architectural model that balances detailed operational tracking with structured periodic approvals:

1. **Granular Activity Layer**:
   * Every recorded duration, whether generated via the live timer, mobile interface, or manual entry, forms an individual analytic line.
   * Each entry stores atomic activity metadata: date, employee, duration, project, task, and description.
   * Direct binding to the analytic accounting ledger guarantees real-time cost tracking against project budgets.

2. **Periodic Aggregate Layer**:
   * Groups atomic timesheet entries into structured organizational cycles *(weekly, bi-weekly, or monthly)*.
   * Serves as the governance and legal approval document for payroll validation and client billing release.
   * Enforces period boundaries, approval workflows, and immutability once validated by reviewers.

```{mermaid}
flowchart LR
    T["`**Live Work Timer**
    Real-time session`"] --> L["`**Timesheet Line**
    Date, Project & Hours`"]
    M["`**Manual Entry**
    My Timesheets / Details`"] --> L

    L --> A(["`**Analytic Ledger**
    Project costs & margins`"])
    L --> S["`**Timesheet Sheet**
    Weekly summary & approval`"] --> I(["`**Customer Invoicing**
    Billable hours released`"])
```

---

## 2. Architectural Comparison: Atomic Lines vs. Periodic Sheets

The table below contrasts the functions, behaviors, and access models of the two timesheet tiers:

| Architectural Dimension | Atomic Timesheet Entries | Periodic Timesheet Sheets |
| :--- | :--- | :--- |
| **Primary Objective** | Operational tracking of effort on tasks and deliverables. | Administrative validation, compliance, and billing release. |
| **Workspace Location** | **My Timesheets** & **All Timesheets** | **My Timesheet Sheets** & **Timesheet Sheets to Review** |
| **Data Granularity** | Individual line records with custom work descriptions. | Aggregated matrix grid grouped by employee, project, and date. |
| **Locking Mechanism** | Dynamic; editable until locked by an approved parent sheet. | State machine: `New` → `Open` → `Waiting Review` → `Approved`. |
| **Financial Impact** | Updates project consumed hours and analytic cost in real time. | Finalizes billable quantities for customer invoicing. |
| **Approval Route** | Filtered by project task managers or department leads. | Designated timesheet reviewer or HR compliance manager. |

---

## 3. Project and Task Deliverable Integration

Timesheets natively tie into the CURQ **Project** application to ensure accurate effort accounting:

### 3.1 Hierarchical Task Allocation

When employees log time, the interface enforces project-task relationships:
* Selecting a **Project** immediately narrows the **Task** dropdown to active deliverables belonging solely to that project.
* Tasks inherit analytic accounts, project managers, and billing parameters directly from parent projects.

### 3.2 Budget and Planned Hours Tracking

Each project task maintains planned hour targets:
* **Initially Planned Hours**: Budget allocated during sprint or deliverable scoping.
* **Recorded Hours**: Sum of all validated timesheet lines linked to the task.
* **Remaining Hours**: Dynamically computed as `Planned Hours - Recorded Hours`.
* **Progress Percentage**: Visualized on Kanban cards and Gantt views to warn project leads of budget overruns early.

---

## 4. Analytic Accounting and Cost Rate Dynamics

Timesheets connect operational effort directly with company financial ledgers:

* **Employee Cost Rate**: Configured on the employee HR profile. Every hour logged multiplies the employee's hourly cost against the project's analytic account, accumulating internal project expenses.
* **Customer Sales Price**: Defined on linked service products in sales orders. When billing on time and materials, approved timesheet hours automatically establish billable delivery lines.
* **Real-Time Profitability**: By comparing revenue generated against internal labor costs, CURQ provides live gross margin analysis across projects, departments, and individual accounts.

---

## Related Documentation

* [Understanding Timesheet Sheet Approval and Billing Workflows](./02-understanding-timesheet-sheet-approval-and-billing-workflows.md)
* [Log Your First Timesheet and Submit for Approval](../getting-started/01-log-your-first-timesheet-and-submit-for-approval.md)
* [Configure Timesheet Policies and Encoding Rules](../task-guides/06-configure-timesheet-policies-and-encoding-rules.md)
* [Timesheet Line and Sheet Field Definitions](../settings-and-fields/01-timesheet-line-and-sheet-field-definitions.md)
