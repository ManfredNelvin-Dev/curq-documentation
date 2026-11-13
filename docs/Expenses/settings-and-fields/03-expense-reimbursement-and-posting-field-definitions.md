# Expense Reimbursement and Posting Field Definitions

This document provides a comprehensive data dictionary for direct reimbursement payment modals, bulk payment parameters, payroll payslip integration, and general ledger journal posting fields in CURQ Expenses.

---

## 1. Direct Reimbursement Payment Modal Fields

When reimbursing an approved and posted expense report via direct financial disbursement, the payment modal captures the following attributes:

### 1.1 Payment Form Fields

| Field Name | Description |
| :--- | :--- |
| **Journal** | Corporate bank or cash account from which disbursement funds are drawn *(e.g., `Bank` or `Cash`)*. Required. |
| **Payment Method** | Operational payment rail *(e.g., `Manual Payment (Cash)`, `Manual Payment (Bank)`, `Batch Deposit (Bank)`, `Checks (Bank)`)*. Required. |
| **Recipient Bank Account** | Employee personal bank account *(IBAN / Account Number)* retrieved from their contact profile. Required when using a Bank journal. |
| **Amount** | Total monetary reimbursement figure. Defaults to the net payable balance on the expense sheet. Required. |
| **Payment Date** | Effective date of bank or cash disbursement execution *(Default: Current Date)*. Required. |
| **Memo** | Transaction reference code cross-posted to the bank statement line *(e.g., `Client Lunch Reimbursement`)*. Optional. |
| **Group Payments** | Available during multi-report reimbursement. When enabled, consolidates multiple expense reports for the same employee into a single payment transaction. |

### 1.2 Payment Action Controls

| Button | Behavior |
| :--- | :--- |
| **Create Payment** | Executes financial disbursement, generates payment voucher, and transitions report to `Done`. |
| **Cancel** | Closes payment dialog without recording a transaction. |

---

## 2. Payslip Reimbursement Settings and Fields

When organizations configure expenses to be reimbursed through employee payroll rather than direct bank payouts:

### 2.1 Configuration and Allowance Line Fields

| Field Name | Description |
| :--- | :--- |
| **Reimburse in Payslip Setting** | Configuration toggle under **Expenses > Configuration > Settings > Accounting** enabling automated payslip queueing. |
| **Payslip Allowance Line** | Line item created under the employee's draft payslip in the **Payroll** application, classified as a non-taxable reimbursement allowance. |

### 2.2 Payslip Action Controls

| Button | Behavior |
| :--- | :--- |
| **Report in Next Payslip** | Header action button available on **Approved** (unposted) expense reports that routes the claim amount to the employee's pending payroll payslip. |

---

## 3. Accounting Journal Posting Fields

When committing an approved expense report to the corporate general ledger, the following accounting parameters are applied:

### 3.1 Journal Posting and Account Fields

| Field Name | Description |
| :--- | :--- |
| **Journal** | Target accounting journal *(e.g., `Vendor Bills` or `Expenses`)* where vouchers are generated upon posting. Required. |
| **Accounting Date** | Effective date for general ledger valuation. Defaults to the posting date. Optional. |
| **Debit Line(s)** | General ledger entry debiting the category operating expense account *(e.g., `7001010 Kosten van grond- en hulpstoffen`)* and applying analytic distribution tags. |
| **Tax Line(s)** | General ledger entry debiting the deductible purchase VAT/GST input tax account. |
| **Credit Line** | General ledger entry crediting the employee payable liability account *(for employee-paid expenses)* or bank clearing account *(for company-paid expenses)*. |

### 3.2 Smart Buttons and Navigation Controls

| Button | Behavior |
| :--- | :--- |
| **Journal Entry** | Stat button appearing on the posted expense report linking directly to the generated double-entry accounting entry in the **Accounting** application. |

---

## Related Documentation

* [Post Expenses to Accounting Journals](../task-guides/05-post-expenses-to-accounting-journals.md)
* [Reimburse Employee Expenses](../task-guides/06-reimburse-employee-expenses.md)
* [Review, Approve, and Refuse Expenses](../task-guides/04-review-approve-and-refuse-expenses.md)
* [Expense Category and Configuration Field Definitions](./01-expense-category-and-configuration-field-definitions.md)
* [Expense Record and Report Field Definitions](./02-expense-record-and-report-field-definitions.md)
