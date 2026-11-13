# Expense Category and Configuration Field Definitions

This document provides a comprehensive data dictionary for all configuration settings, category parameters, tax rules, accounting accounts, and global intake settings in CURQ Expenses.

---

## 1. Expense Categories Register Data Dictionary

The Expense Categories register (**Expenses > Configuration > Expense Categories**) itemizes configured expenditure types, commercial pricing, internal costs, and reinvoicing policies:

| Field Name | Description |
| :--- | :--- |
| **Name** | Descriptive title of the expense category *(e.g., `Communication`, `Meals`, `Mileage`, `Travel & Accommodation`)*. |
| **Reference** | Alphanumeric tracking code used for category classification and automated email ingestion *(e.g., `COMM`, `FOOD`, `MIL`, `TRANS & ACC`)*. |
| **Note Column** | Contextual policy notes, item descriptions, and employee spending rules *(e.g., `Phone bills, postage, etc.`, `Restaurants, business lunches, etc.`)*. |
| **Sales Price** | Standard customer catalog price charged when reinvoicing expenses to clients *(e.g., `€ 1.00`)*. |
| **Cost** | Standard internal reimbursement cost per unit or distance allowance rate *(e.g., `€ 0.00`, `€ 1.00`)*. |
| **Purchase Taxes** | Default input tax applied to supplier invoices or purchase receipts *(e.g., `Inkopen - BTW laag (9%)`)*. |
| **Re-Invoice Costs** | Commercial billing policy for client reinvoicing (`No`, `At cost`, `Sales price`). |

---

## 2. Expense Category Form Fields Data Dictionary

The Expense Category form establishes the operational, financial, and tax attributes for individual expenditure types:

### 2.1 General Information & Identification Fields

| Field Name | Description |
| :--- | :--- |
| **Product Name** | Primary label describing the expense type *(e.g., `Client Lunch`, `Hotel Accommodations`, `Mileage Allowance`)*. Required. |
| **Cost** | Specify the fixed reimbursement amount. Leave as `0.00` if employees are reimbursed based on the actual expense amount. |
| **Reference** | Enter a short reference code *(e.g., `FOOD`, `TRAVEL`, or `COMM`)* used for matching categories during email intake. Optional. |
| **Category** | Select the appropriate product category in the catalog hierarchy *(typically `All`)*. Required. |
| **Company** | Specify the company entity to which the expense category belongs. Leave blank if it applies across all companies. Optional. |
| **Guideline** | Contextual instructions, policy notes, and company spending limits displayed to employees when logging expenses under this category *(e.g., `e.g. Restaurants: only week days, for lunch`)*. Optional. |

---

### 2.2 Financial and Tax Mapping Fields

> **Warning - Cross-System Impact (Accounting & Taxes):** The **Expense Account** and **Purchase Taxes** configured here directly govern journal entries generated in CURQ Accounting when expense reports are posted. Selecting an incorrect GL account or tax grid distorts corporate profit & loss statements and can lead to incorrect VAT returns. Non-technical users should consult with their finance team or accountant before modifying account or tax mappings.

| Field Name | Description |
| :--- | :--- |
| **Expense Account** | General ledger operating expense account debited upon posting *(e.g., `0101010 Verkrijgings- of vervaardigingsprijs kosten van`)*. Required. |
| **Purchase Taxes** | Default input purchase tax rate applicable to the expense *(e.g., `Inkopen - BTW laag (9%)`)*. Optional. |
| **Sales Taxes** | Default output sales tax rate applied to customer invoices when the expense is reinvoiced at sales price *(e.g., `Verkopen - BTW hoog (21%)`)*. Optional. |

---

### 2.3 Reinvoicing & Commercial Recovery Fields

| Field Name | Description |
| :--- | :--- |
| **Re-Invoice Costs** | Dictates whether and how the expenditure is billed to a client: `No` (internal cost only), `At cost` (billed at employee expense cost), or `Sales price` (billed at configured catalog sales price). Default: `No`. |
| **Sales Price** | Fixed catalog price charged to the client when **Re-Invoice Costs** is configured to `Sales price`. Optional. |

---

## 3. Global Expenses Module Settings Data Dictionary

Global parameters configured under **Expenses > Configuration > Settings** dictate enterprise-wide workflow automation and external payment integrations.

### 3.1 Receipt Processing and Digitization (OCR)

| Field Name | Description |
| :--- | :--- |
| **Expense Digitization (OCR)** | Enables automated receipt scanning using optical character recognition. Configurable options include: `Do Not Digitize` (disables scanning while keeping module installed), `Digitize on Demand Only` (scans only when clicking Digitize Document), or `Digitize Automatically` (automatically scans uploaded receipts). |
| **Incoming Emails** | Enables an inbound email alias *(e.g., `expenses@yourcompany.com`)* allowing employees to register receipts by emailing their photos to the system. Requires authenticated employee work email. |

---

### 3.2 Reimbursement and Accounting Settings

| Field Name | Description |
| :--- | :--- |
| **Reimburse in Payslip** | When enabled, approved employee expenses can be incorporated directly into employee payroll payslips prior to journal posting. Default: Disabled. |
| **Payment Methods** | Configures allowable disbursement payment methods under Accounting *(Manual Payment Cash, Manual Payment Bank, Batch Deposit Bank, Checks Bank)*. Leaving blank allows all available options. |

---

## Related Documentation

* [Create and Manage Expense Categories](../task-guides/01-create-and-manage-expense-categories.md)
* [Expense Record and Report Field Definitions](./02-expense-record-and-report-field-definitions.md)
* [Expense Reimbursement and Posting Field Definitions](./03-expense-reimbursement-and-posting-field-definitions.md)
* [Reinvoice Project Expenses to Customers](../task-guides/07-reinvoice-project-expenses-to-customers.md)
* [Understanding Expense Reinvoicing and Analytic Costing](../core-concepts/02-understanding-expense-reinvoicing-and-analytic-costing.md)
