# Managing Employee Timesheets from Recording to Approval

A complete commercial walkthrough demonstrating how a project-based organization tracks working hours, enforces review policies, and streamlines billing in CURQ 18.

---

## 1. Overview

Accurate time tracking is essential for businesses that manage multiple projects, deliverables, and employees. Capturing working hours helps organizations monitor project progress, understand resource utilization, control operational costs, and maintain verifiable records for client billing.

CURQ 18 provides a comprehensive **Timesheets** application that enables employees to log their daily working hours, submit weekly or monthly timesheet sheets, and allow authorized reviewers to inspect and validate submitted records.

This article details how a project-based software engineering and consulting firm manages employee timesheets from initial system configuration and daily time tracking through to managerial review and executive reporting.

---

## 2. Business Scenario

A software development company, **NovaByte Solutions**, manages multiple client software implementations alongside internal corporate initiatives:

* **Customer Deliverables**: Client portal implementations, backend API microservices, frontend user interfaces, and quality assurance testing.
* **Internal Operations**: Bi-weekly sprint planning meetings, employee professional development, and general administrative work.

Employees must record the hours spent on their assigned tasks. At the end of each weekly reporting period, employees review their accumulated entries and submit their timesheet sheets to designated managers. Reviewers audit the entries, request corrections when discrepancies occur, and approve validated sheets to update delivered service quantities on client sales orders.

### Core Business Objectives

* **Accurate Work Allocation**: Ensure all working hours are recorded against the correct client deliverables and internal accounts.
* **Streamlined Time Tracking**: Empower staff to capture hours easily via manual entry or live interactive timers.
* **Accountability & Compliance**: Enforce a structured approval workflow before timesheet hours are finalized.
* **Capacity & Effort Monitoring**: Gain real-time visibility into employee capacity, project budget consumption, and team productivity.
* **Automated Client Billing**: Convert validated billable hours directly into customer invoices with zero manual reconciliation.

---

## 3. Step 1: Configure Timesheet Rules and Policies

Before employees start logging their hours, the system administrator configures global timesheet policies to establish operational consistency:

1. Open the **Timesheets** application.
2. In the top navigation bar, click **Configuration → Settings**.
3. Under the **Time Encoding** section, choose the **Encoding Method**:
   * Select **Hours / Minutes** for granular task tracking and hourly billing.
4. Under the **Timesheet Options** section, configure the periodic cycle:
   * **Timesheet Sheet Range**: Set to **Week** *(or **Month**)*.
   * **Week Start Day**: Set to **Monday** *(or **Sunday**)* based on company work weeks.
5. Under the **Review Policy** section, set the **Timesheet Sheet Review Policy**:
   * Assign review responsibility to **HR Officers**, **HR Managers**, or **Timesheet Sheet Managers**.
6. Click **Save**.

![Configuring Time Encoding settings in Timesheets](../procedures/medias/timesheet-procedures-05.png)

> [!NOTE]
> For a detailed guide on configuring global units, validation rules, and holiday integrations, refer to [Configuring Timesheets Settings](../procedures/01-configure-timesheet-settings.md).

---

## 4. Step 2: Structure Projects and Task Deliverables

To ensure hours are categorized accurately, the project office sets up project and task hierarchies in advance:

| Project | Task | Activity Type | Commercial Classification |
| :--- | :--- | :--- | :--- |
| **Customer Portal** | Backend Development | Microservice architecture & APIs | Billable |
| **Customer Portal** | Frontend Development | React user interface components | Billable |
| **Customer Portal** | Quality Assurance | End-to-end integration testing | Billable |
| **Internal Operations**| Sprint Planning | Bi-weekly agile backlog reviews | Non-Billable |
| **Internal Operations**| Professional Training| Cloud certification coursework | Non-Billable |

This structure ensures that employees always allocate their effort to specific deliverables with transparent commercial classifications.

---

## 5. Step 3: Record Daily Working Hours

Employees record their working time using either inline list entries or the interactive live timer:

### Option A: Manual Line Entry via My Timesheets

Employees can record individual entries throughout the day or at the end of their shift:

1. In the top navigation bar, click **My Timesheets → My Timesheets**.
2. In the top-left control panel, click **+ New**.

![My Timesheets list view highlighting the New button in the top control panel](../manual/medias/timesheet-manuals-06.png)

3. A new editable row is created at the top of the table. Complete the timesheet fields:
   * **Start Time**: Set the timestamp when the work took place *(defaults to current date and time)*.
   * **Project**: Choose the relevant project *(e.g., `Customer Portal`)*.
   * **Task**: Choose the assigned task deliverable *(e.g., `Backend Development`)*.
   * **Description**: Enter a concise summary of the work *(e.g., `Configured OAuth2 JWT validation middleware`)*.
   * **Time Spent**: Enter the duration worked *(e.g., `03:00`)*.
4. Press **Enter** or click away to save the entry inline.

> [!TIP]
> For complete instructions on searching, filtering, and grouping individual line entries, see [My Timesheets](../manual/03-my-timesheets.md).

### Option B: Interactive Live Work Timer

For real-time tracking, employees can use the live stopwatch timer to eliminate end-of-day guesswork:

1. In the top navigation bar, click **Timesheets → Start work**.
2. The **Start work** dialog window opens.

![Start work dialog window displaying entry fields and action button](../manual/medias/timesheet-manuals-26.png)

3. Complete the work details:
   * **Description**: Enter a brief summary of the upcoming activity.
   * **Start Time**: Automatically set to the current timestamp.
   * **Project & Task**: Select the target project and task.
4. Click **Start new timer** to begin tracking.
5. While the timer runs, the employee works on their deliverable. The active session record displays elapsed duration in real time.
6. Upon concluding the activity, stop the timer to save the record, or click **Stop previous timer and start the new one** if switching directly to another task.

> [!NOTE]
> When a timer concludes, CURQ automatically generates a finalized timesheet log entry and rolls the duration up into the periodic sheet. See [Starting and Managing a Work Timer](../manual/05-start-and-manage-work-timer.md) for details.

---

## 6. Step 4: Review and Verify the Periodic Timesheet Sheet

At the end of the weekly reporting cycle, employees open their compiled timesheet sheet to review their collective effort:

1. In the top navigation bar, click **My Timesheets → My Timesheet Sheets**.
2. Open the timesheet sheet corresponding to the current week *(e.g., `Weeks 42, 2026 - 43, 2026`)*.
3. Review the **Summary** tab matrix grid:
   * Confirm daily logged hours across all days of the week.
   * Verify that daily totals reflect full working days *(e.g., 8:00 hours per day)*.
4. Switch to the **Details** tab:
   * Audit task descriptions to ensure all work performed has sufficient operational context.
   * Make any required modifications directly in the line items.

![Summary matrix grid displaying synchronized hours across daily date columns](../manual/medias/timesheet-manuals-28.png)

---

## 7. Step 5: Submit the Timesheet Sheet for Approval

Once the employee confirms that all hours and descriptions for the period are complete:

1. In the top action bar of the timesheet sheet, click **Submit to Reviewer**.
2. The timesheet sheet transitions from **Open** to **Waiting Review**.
3. The sheet is automatically routed to the designated reviewer's queue.

![Timesheet summary grid showing added project lines and Submit to Reviewer button](../manual/medias/timesheet-manuals-29.png)

> [!TIP]
> Employees can navigate to [My Timesheets to Submit](../manual/02-my-timesheets-to-submit.md) to quickly check whether any past sheets remain in draft or require submission. Once submitted, records automatically clear from that view. If a manager later refuses a sheet, it returns to this queue with reviewer feedback logged in the chatter.

---

## 8. Step 6: Review, Audit, and Approve Employee Timesheets

The designated reviewer *(e.g., Project Manager or HR Officer)* inspects submitted timesheets in the dedicated review queue:

1. Open the **Timesheets** application.
2. In the top navigation bar, click **To Review → Timesheet Sheets to Review**.
3. Open a timesheet sheet in **Waiting Review** status.

![Timesheet sheet form view highlighting the Approve and Refuse action buttons](../manual/medias/timesheet-manuals-23.png)

4. Review the employee's logged hours against project deliverables, sprint budgets, and contract schedules:
   * **Approving Accurate Submissions**: Click **Approve**. The sheet transitions to **Approved**, entries are locked against employee modifications, and billable hours synchronize with project accounts.
   * **Refusing Incomplete Submissions**: Click **Refuse**. The sheet resets to **Open** and returns to the employee's **My Timesheets to Submit** queue for adjustment.

---

## 9. Step 7: Analyze Timesheet Reports and Utilization

With all hours approved, project managers and business leaders extract operational insights via the **Reporting** menu:

1. In the top navigation bar, click **Reporting**.
2. Select the analysis view to evaluate:
   * **By Employee**: Compare working hours across staff to balance workloads and identify burnout risks.
   * **By Project**: Compare planned vs. actual project effort to prevent budget overruns.
   * **By Task**: Identify complex, resource-heavy tasks to refine future sprint estimations.
   * **By Billing Type**: Evaluate company-wide billable utilization rates and non-billable administrative overhead.

![Timesheets by Employee pivot matrix report](../manual/medias/timesheet-manuals-18.png)

> [!TIP]
> For detailed instructions on using the **Measures** selector, pivot expansion, and data export, see [Analyzing Timesheet Reports](../manual/07-analyze-timesheet-reports.md).

---

## 10. Step 8: Leverage Recorded Hours for Customer Invoicing

For client projects billed on a time-and-materials basis:

1. **Service Product Setup:** Ensure the service product is configured with the invoicing policy *Based on Timesheets* and linked to the appropriate sales order line.

2. **Automatic Delivered Quantity Update:** Record employee working hours against the relevant project and task linked to the sales order. CURQ 18 calculates the delivered quantity from eligible timesheet entries and updates the corresponding sales order line.

3. **Generate Customer Invoice:** Navigate to **Sales → To Invoice → Orders to Invoice**, select the relevant sales order, and create the customer invoice. Alternatively, open the confirmed sales order and click **Create Invoice**. Review the billable hours, unit price, taxes, and total amount before confirming the invoice.

**Note:** Only eligible billable timesheet entries are included in the invoice calculation. Ensure the recorded hours are correctly linked to the sales order and comply with your company's timesheet approval workflow.

---

## 11. Business Benefits Summary

Implementing this structured timesheet management workflow in CURQ 18 delivers substantial operational advantages:

* **Operational Transparency**: Complete, real-time visibility into what team members are working on and where project time is spent.
* **Audit Compliance & Accuracy**: Multi-stage review lifecycle guarantees that only verified, legitimate hours are billed and compensated.
* **Zero Lost Revenue**: Captures every billable minute through live timers and streamlined line logging, preventing revenue leakage.
* **Accurate Project Estimations**: Historical task-level data provides reliable benchmarks for bidding and scoping future client contracts.
* **Billing Automation**: Seamless integration between Timesheets, Project, and Sales eliminates manual invoice calculation and reduces billing disputes.
