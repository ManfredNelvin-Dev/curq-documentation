# Expense Record and Report Field Definitions

This document provides a comprehensive data dictionary for all transaction fields, receipt attributes, analytic tags, and lifecycle stages on the My Expenses register, individual CURQ Expense form, consolidated Expense Report sheet, and refusal modal.

---

## 1. My Expenses Register and Pipeline Data Dictionary

The My Expenses register (**Expenses > My Expenses > My Expenses**) itemizes personal expenditures, pipeline status banners, and intake shortcuts:

### 1.1 Register Column Fields

| Field Name | Description |
| :--- | :--- |
| **Expense Date** | Calendar date when the purchase transaction occurred *(e.g., `10/30/2026`)*. |
| **Description** | Itemized summary label describing the business purpose of the purchase *(e.g., `Train ticket to client headquarters`)*. |
| **Employee** | Name and profile tag of the employee who incurred the expenditure *(e.g., `Siddharth Sathyan`)*. |
| **Paid By** | Payment funding classification: `Employee (to reimburse)` for personal funds, or `Company` for corporate cards. |
| **Activities** | Scheduled review tasks or audit reminders assigned to the expense line *(clock icon)*. |
| **Analytic Distribution** | Analytical accounts or cost center dimensions assigned for departmental tracking. |
| **Total** | Gross monetary value of the transaction in the system currency *(e.g., `€ 75.00`)*. |
| **Status** | Current operational lifecycle stage badge of the expense record (*To Report*, *To Submit*, *Submitted*, *Approved*, *Done*, *Refused*). |

### 1.2 Action Buttons and Pipeline Controls

| Button | Behavior |
| :--- | :--- |
| **Upload** | Primary action button (dark blue) opening a local file browser to batch upload receipts for automated OCR text extraction. |
| **New** | Action button opening a blank form to manually enter a new expense transaction. |

---

## 2. Individual Expense Form Fields Data Dictionary

The individual expense form captures transactional details, tax calculations, accounting mappings, and receipt attachments for single purchases:

### 2.1 Expense Detail and Accounting Fields

| Field Name | Description |
| :--- | :--- |
| **Description** | Mandatory text field identifying the business reason for the expense *(e.g., `Client Lunch`)*. |
| **Category** | Mandatory relational dropdown selecting the expenditure category *(e.g., `[FOOD] Meals`)* and displaying policy notes. |
| **Total** | Mandatory numeric field capturing the gross purchase amount *(e.g., `€ 1,200.00`)*, currency selector, and tax breakdown note. |
| **Quantity** | Number of units logged when the expense has a fixed reimbursement rate *(e.g., miles driven or per diem days)*. |
| **Included Taxes** | Relational tax tag selector and computed tax amount deducted on the purchase *(e.g., `Inkopen - BTW laag (9%)`, `€ 99.08`)*. |
| **Employee** | Mandatory profile field selecting the staff member claiming reimbursement *(e.g., `Siddharth Sathyan`)*. |
| **Paid By** | Radio button selecting between **Employee (to reimburse)** for personal funds and **Company** for corporate payments. |
| **Expense Date** | Mandatory date selector recording the purchase date *(e.g., `11/09/2026`)*. |
| **Account** | General ledger operating expense account debited upon posting *(e.g., `7001010 Kosten van grond- en hulpstoffen`)*. |
| **Customer to Reinvoice** | Optional relational lookup linking the expense to a customer Sales Order *(e.g., `S00048 - John Doe`)* for automated client billing. |
| **Analytic Distribution** | Percentage or monetary distribution widget allocating expenditure across analytic projects and cost centers *(allocations must sum to 100%)*. |
| **Notes...** | Multi-line text field for internal explanatory comments or merchant itemization notes. |

### 2.2 Action Controls and Status Pipeline

| Button | Behavior |
| :--- | :--- |
| **Attach Receipt** | Primary execution button (dark blue) opening a local file browser to upload digital receipt files *(PNG, JPEG, PDF)*. |
| **Create Report** | Action control creating a formal consolidated expense report sheet bundling this line item for management approval. |
| **Split Expense** | Action control dividing a composite transaction across multiple dates, categories, or project cost centers. |

---

## 3. Expense Report (Sheet) Fields Data Dictionary

An Expense Report groups one or more individual expense lines into a formal administrative document for batch approval, journal posting, and payment:

### 3.1 Report Header and Summary Fields

| Field Name | Description |
| :--- | :--- |
| **Expense Report Summary** | Descriptive title of the bundled expense claim *(e.g., `Client Lunch`)*. Required. |
| **Employee** | Staff member submitting the bundled claim *(e.g., `Siddharth Sathyan`)*. Required. |
| **Manager** | Department supervisor or authorized user responsible for reviewing and approving the report. Automatically populated upon approval. |
| **Paid By** | Payment source: `Employee (to reimburse)` for out-of-pocket expenses or `Company` for corporate cards. Required. |
| **Journal** | Target accounting journal *(e.g., `Vendor Bills` or `Expenses`)* where vouchers and general ledger entries are generated upon posting. Required. |
| **Expense Report Date** | Calendar date recording the submission or effective accounting recognition date for the consolidated report *(e.g., `11/10/2026`)*. |

### 3.2 Header Action and Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **Submit to Manager** | Submits draft expense report for supervisor review and approval. |
| **Approve** | Authorizes approved expenses and advances sheet to `Approved` stage. |
| **Refuse** | Opens the refusal modal to reject the claim with a required explanation note. |
| **Post Journal Entries** | Generates double-entry accounting entries in the specified journal. |
| **Pay** | Opens the direct reimbursement modal to issue employee disbursement. |
| **Reset to Draft** | Reopens a refused or rejected report for employee correction. |

---

## 4. Expense Refusal Modal Data Dictionary

When an approver or manager refuses an expense report, CURQ requires a formal explanation recorded in the record chatter:

### 4.1 Modal Form Fields

| Field Name | Description |
| :--- | :--- |
| **Reason** | Mandatory justification note explaining why the expense report was rejected *(e.g., `• Reason: not valid`)*. Cannot be blank. |

### 4.2 Refusal Action Controls

| Button | Behavior |
| :--- | :--- |
| **Refuse** | Confirms rejection, closes modal, logs justification into chatter, and moves report to `Refused`. |
| **Cancel** | Discards modal without modifying report status. |

---

## Related Documentation

* [Log Expenses and Attach Receipts](../task-guides/02-log-expenses-and-attach-receipts.md)
* [Submit and Track Expense Reports](../task-guides/03-submit-and-track-expense-reports.md)
* [Review, Approve, and Refuse Expenses](../task-guides/04-review-approve-and-refuse-expenses.md)
* [Expense Category and Configuration Field Definitions](./01-expense-category-and-configuration-field-definitions.md)
* [Expense Reimbursement and Posting Field Definitions](./03-expense-reimbursement-and-posting-field-definitions.md)
