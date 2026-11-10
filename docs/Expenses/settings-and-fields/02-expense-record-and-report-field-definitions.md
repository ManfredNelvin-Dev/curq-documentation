# Expense Record and Report Field Definitions

This document provides a comprehensive data dictionary for all transaction fields, receipt attributes, analytic tags, and lifecycle stages on the My Expenses register, individual CURQ Expense form, consolidated Expense Report sheet, and refusal modal.

---

## 1. My Expenses Register and Pipeline Data Dictionary

The My Expenses register (**Expenses > My Expenses > My Expenses**) itemizes personal expenditures, pipeline status banners, and intake shortcuts:

| Field Name | Description |
| :--- | :--- |
| **Upload Action Button** | Primary button opening a file dialog to batch upload receipts for automated OCR text extraction. |
| **New Action Button** | Action button opening a blank form to manually enter a new expense transaction. |
| **Summary Pipeline Banners** | Metric cards displaying real-time aggregated totals across approval stages: `to submit`, `under validation`, and `to be reimbursed`. |
| **Search Bar & Filter** | Lookup field defaulting to the `My Expenses` filter tag to restrict listed lines to personal expenditure claims. |
| **Expense Date Column** | Calendar date when the purchase transaction occurred *(e.g., `10/30/2026`)*. |
| **Description Column** | Itemized summary label describing the business purpose of the purchase *(e.g., `Train ticket to client headquarters`)*. |
| **Employee Column** | Name and profile tag of the employee who incurred the expenditure *(e.g., `Siddharth Sathyan`)*. |
| **Paid By Column** | Payment funding classification: `Employee (to reimburse)` for personal funds, or `Company` for corporate cards. |
| **Activities Column** | Scheduled review tasks or audit reminders assigned to the expense line *(clock icon)*. |
| **Analytic Distribution Column** | Analytical accounts or cost center dimensions assigned for departmental tracking. |
| **Total Column** | Gross monetary value of the transaction in the system currency *(e.g., `€ 75.00`)*. |
| **Status Column** | Operational lifecycle badge indicating processing stage (*To Report*, *To Submit*, *Submitted*, *Approved*, *Done*). |

---

## 2. Individual Expense Form Fields Data Dictionary

The individual expense form captures transactional details, tax calculations, accounting mappings, and receipt attachments for single purchases:

| Field Name | Description |
| :--- | :--- |
| **Attach Receipt Action Button** | Primary execution button (dark blue) opening a local file browser to upload digital receipt files *(PNG, JPEG, PDF)*. |
| **Create Report Action Button** | Action control creating a formal consolidated expense report sheet bundling this line item for management approval. |
| **Split Expense Action Button** | Action control dividing a composite transaction across multiple dates, categories, or project cost centers. |
| **Status Chevron Pipeline** | Visual stage tracker documenting workflow progression through **To Report**, **To Submit**, **Submitted**, **Approved**, and **Done**. |
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
| **Company** | Corporate legal entity owning the expense record in multi-company environments. |
| **Notes...** | Multi-line text field for internal explanatory comments or merchant itemization notes. |
| **Chatter Audit Feed** | Communication and audit logging panel tracking creation timestamps, attached files, follower messages, and status changes. |

---

## 3. Expense Report (Sheet) Fields Data Dictionary

An Expense Report groups one or more individual expense lines into a formal administrative document for batch approval, journal posting, and payment:

| Field Name | Description |
| :--- | :--- |
| **Expense Report Summary** | Descriptive title of the bundled expense claim *(e.g., `Client Lunch`)*. Required. |
| **Employee** | Staff member submitting the bundled claim *(e.g., `Siddharth Sathyan`)*. Required. |
| **Manager / Approver** | Department supervisor or authorized user responsible for reviewing and approving the report. Required. |
| **Paid By** | Payment source: `Employee (to reimburse)` or `Company`. Required. |
| **Company** | Operating legal entity owning the financial entries. Required. |
| **Journal** | Target accounting journal *(e.g., `Vendor Bills` or `Expenses`)* where vouchers are generated upon posting. Required upon posting. |
| **Smart Navigation Buttons** | Upper stat buttons linking related records: `Expenses` and `Sales Orders`. |
| **Expense Lines Notebook** | Itemized table displaying transaction date, category, description, customer reinvoice target, attached receipts, taxes, and currency subtotals. |
| **Financial Summary** | Summary displays showing Untaxed Amount, applicable Taxes, and Total claim. |
| **Status** | Current lifecycle stage of the report: `To Submit`, `Submitted`, `Approved`, `Posted`, `Done`, or `Refused`. System-maintained. |

---

## 4. Expense Refusal Modal Data Dictionary

When an approver or manager refuses an expense report, CURQ requires a formal explanation recorded in the record chatter:

| Field Name | Description |
| :--- | :--- |
| **Reason** | Mandatory justification note explaining why the expense report was rejected *(e.g., `• Reason: not valid`)*. Cannot be blank. |

---

## Related Documentation

* [Log Expenses and Attach Receipts](../task-guides/02-log-expenses-and-attach-receipts.md)
* [Submit and Track Expense Reports](../task-guides/03-submit-and-track-expense-reports.md)
* [Review, Approve, and Refuse Expenses](../task-guides/04-review-approve-and-refuse-expenses.md)
* [Expense Category and Configuration Field Definitions](./01-expense-category-and-configuration-field-definitions.md)
* [Expense Reimbursement and Posting Field Definitions](./03-expense-reimbursement-and-posting-field-definitions.md)
