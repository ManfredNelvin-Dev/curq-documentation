# Year-End Closing

The year-end closing is a critical accounting process that finalizes all financial activities at the end of a financial year. During this process, financial records are reviewed, reconciled, and finalized to prepare accurate financial statements and ensure compliance with tax regulations.

Typical year-end activities include:
- Reviewing and reconciling financial records.
- Recording depreciation and impairment adjustments.
- Evaluating provisions and reserves.
- Processing outstanding invoices and payments.
- Verifying inventory balances.
- Preparing financial statements such as the Balance Sheet, Profit & Loss Statement, and Cash Flow Statement.
- Preparing tax declarations and ensuring compliance with statutory obligations.

The year-end closing not only fulfills legal requirements but also provides valuable insight into the company's financial performance and supports planning for the upcoming financial year.

---

## Date-Based Accounting

CURQ accounting is based on transaction dates, which are linked to predefined accounting periods such as months, quarters, and financial years.

Every journal entry is assigned a date, and this date determines the accounting period in which the transaction appears in reports and financial statements.

By default, CURQ uses standard calendar-based periods:
- Monthly periods
- Quarterly periods
- Financial years

Although CURQ does not provide standard support for non-standard financial years, these can be configured manually when required. The configuration of accounting periods is explained in the **Date Ranges** section of the documentation.

---

## Year-End Closing Checklist for Accountants

A proper year-end closing typically includes the following activities:

### Depreciation and Impairment
Review company assets and record the required depreciation. Assess whether any assets require impairment adjustments.

### Provisions and Reserves
Evaluate provisions for:
- Doubtful debtors
- Warranty obligations
- Future liabilities
- Other reserves and provisions

### Inventory Verification
Verify the inventory of assets and liabilities, including physical stock counts where applicable.

### Outstanding Transactions
Process and reconcile:
- Outstanding sales invoices
- Outstanding purchase invoices
- Payments
- Other pending financial transactions

### Financial Statements
Prepare and review:
- Balance Sheet
- Profit & Loss Statement
- Cash Flow Statement

### Tax Preparation
Gather all required documentation and ensure that tax obligations, including VAT filings, have been completed correctly.

### Non-Standard Financial Years
If the company uses a non-standard financial year, ensure that all required adjustments and closing entries are recorded correctly.

### Documentation and Archiving
Archive financial reports, supporting documents, and accounting records in accordance with legal and regulatory requirements.

### Financial Evaluation and Planning
Review the company's financial performance and use the results to support strategic planning and decision-making for the next financial year.

> [!NOTE]
> Year-end closing requirements may vary depending on local regulations, company policies, and accounting practices. It is recommended to consult an accountant or financial professional before finalizing the year-end closing.

---

## Year-End Closing Process in CURQ

To perform a proper year-end closing in CURQ, complete the following steps.

### 1. Reconcile Financial Accounts
Reconcile all financial accounts, including:
- Bank accounts
- Credit card accounts
- Suspense and intermediary accounts
- Other financial accounts

Verify that the balances in the general ledger match the balances shown by the financial institutions.

### 2. Review Invoices and Payments
Review all outstanding customer and supplier transactions.
- Process any invoices that have not yet been recorded.
- Reconcile outstanding payments.
- Verify that all expected payments have been completed.

### 3. Verify Inventory
Ensure that:
- All incoming and outgoing stock movements have been processed.
- Inventory counts are accurate.
- Inventory valuation matches the actual stock on hand.

### 4. Process Depreciation and Deferred Entries
Record:
- Depreciation entries
- Amortization entries
- Deferred expenses
- Deferred revenues

Verify that all required adjustments have been posted before closing the year.

### 5. Process Employee Expenses and Claims
Review all approved expense claims and ensure they have been:
- Posted to the accounting records
- Paid where required

### 6. Submit VAT Returns
Before closing the financial year, ensure that:
- All VAT returns have been prepared and submitted.
- VAT obligations have been fulfilled.
- Any VAT corrections have been processed.

### 7. Lock Accounting Periods
After completing VAT reporting, lock the accounting periods to prevent further changes.

**Navigate to:**
`Accounting → Configuration → Lock Dates`

Configure the appropriate lock dates:
- **Sales Lock Date**: Prevents users from creating or modifying customer invoices dated on or before the selected date.
- **Purchase Lock Date**: Prevents users from creating or modifying vendor bills dated on or before the selected date.
- **Tax Lock Date**: Locks VAT-related entries up to the selected date, ensuring that submitted VAT declarations cannot be changed.
- **Global Lock Date**: Prevents modifications to all accounting entries dated on or before the specified date.
- **Hard Lock Date**: Permanently locks accounting entries before the selected date.

> [!WARNING]
> Even administrators cannot modify entries before the Hard Lock Date. Use this option with caution.

*[Image placeholder: Accounting Lock Dates]*

### 8. Review Balance Sheet and Profit & Loss Reports
The Balance Sheet and Profit & Loss reports are essential for reviewing the financial year before closure.

**Navigate to:**
`Accounting → MIS Reporting → MIS Reports`

These reports provide a complete overview of:
- Assets and liabilities
- Income and expenses
- Financial performance
- Company profitability

For more information, refer to the MIS Reporting documentation.

*[Image placeholder: MIS Reports Overview]*

### 9. Record Correction Entries
After reviewing the accounting records, the accountant or auditor may identify corrections that need to be made.

These corrections are typically recorded using:
- Journal entries
- Adjustment entries
- Reclassification entries

Ensure all corrections are completed before finalizing the financial year.

### 10. Transfer Profit or Loss
Once the accounts have been reviewed and finalized:
1. Calculate the annual profit or loss.
2. Create a journal entry to transfer the result to the appropriate equity account.

This step formally closes the income and expense accounts for the financial year.

### 11. Final Financial Year Lock
After all year-end activities have been completed:
1. Update the final lock date.
2. Prevent all users from posting transactions before the closing date.

This officially closes the financial year and ensures that historical financial data remains unchanged.
