# Accounting FAQ

Frequently asked technical, operational, and architectural questions regarding CURQ Accounting, double-entry bookkeeping, Dutch RGS accounts, bank reconciliation, lock dates, and statutory reporting.

---

## 1. Why does an invoice or vendor bill display "In Payment" instead of "Paid" after registering a payment?

CURQ uses a **two-step payment clearing architecture**:
1. When you click **Pay** (or **Register Payment**) on a posted invoice or bill, the system credits or debits the counterparty control account (`1101010 Handelsdebiteuren nominaal` or `1203010 Handelscrediteuren`) and offsets the balance to an **interim liquidity clearing account** (`1002017 Outstanding Receipts` or `1002018 Outstanding Payments`). At this stage, the document transitions to **In Payment**.
2. The document reaches **Paid** status only when you import the official bank statement line and execute **Reconcile**, which clears the interim clearing account item into the actual bank general ledger account (`1002010 Rekening-courant bank`).

---

## 2. How do I generate the Profit & Loss statement and Balance Sheet in CURQ?

In CURQ, statutory Dutch financial statements are generated through the **MIS Reporting engine**:
1. Navigate to **Reporting > MIS Reports**.
2. In the upper-left action bar, click **+ New**.
3. In the **Report** field, select the pre-installed Dutch RGS template:
   * **`NL RGS Profit Loss`** for the statutory Profit and Loss statement.
   * **`NL RGS Balance Sheet`** for the statutory Balance Sheet.
4. Select your target accounting period or comparison intervals, then click **Preview**, **Print** (PDF), or **Export** (Excel).

---

## 3. Can I modify or delete a customer invoice or vendor bill after posting?

**No.** Under statutory gapless numbering and audit compliance rules:
* Once an invoice or bill is **Posted**, it receives an immutable legal sequence number *(e.g., `INV/2026/00005` or `BILL/2026/10/0001`)* and cannot be deleted or modified.
* To rectify errors, click **Credit Note** (or **Reverse**) on the document header to generate a full or partial credit note. Validating the credit note generates offsetting reverse ledger entries, neutralizing the financial effect while preserving the legal audit trail.

---

## 4. How do I transfer funds between two company bank accounts without distorting revenue or expense figures?

Never record an inter-bank transfer as a customer invoice, vendor bill, or direct P&L entry. Instead:
1. Route the transfer through an interim **liquidity transit account** (*Kruisposten*), such as `1003010 Stortingen onderweg`.
2. When the originating bank account statement reflects the withdrawal, match the statement line with a credit to `1003010`.
3. When the receiving bank account statement reflects the deposit, match the statement line with a debit to `1003010`.
4. The two entries offset each other in `1003010`, leaving the transit account balance at zero and reflecting true liquidity across both bank accounts.

---

## 5. What is the difference between the Global Lock Date and Hard Lock Date in CURQ?

CURQ uses a multi-tier lock date framework to prevent unauthorized modifications to closed fiscal periods:
1. **Global Lock Date (Reversible)**: Blocks regular non-adviser users *(such as sales reps, purchasing agents, and billing clerks)* from creating, editing, posting, or cancelling journal entries dated on or before the selected cutoff date. Users with the **Financial Adviser** or **Accountant** role retain permission to record adjusting entries behind this date. Authorized advisers can advance, modify, or temporarily remove this date if an audit correction is required.
2. **Hard Lock Date (Irreversible)**: Completely and permanently freezes all accounting records, journal entries, and financial documents dated on or before the selected cutoff date. No user *(including financial advisers, controllers, and system administrators)* can modify, post, unpost, cancel, or reconcile entries prior to this date. This lock date cannot be moved backward or removed once confirmed.
3. **Sub-ledger and Tax Lock Dates**: CURQ also provides granular reversible locks:
   * **Sale Lock Date**: Blocks customer invoices and sales transactions.
   * **Purchase Lock Date**: Blocks vendor bills and purchasing transactions.
   * **Tax Return Lock Date**: Protects submitted tax periods by locking all entries bearing VAT grids.

---

## 6. How do Fiscal Positions handle cross-border VAT for EU and export sales?

A **Fiscal Position** (*Fiscale positie*) acts as an automatic tax and account translation rule:
* When a customer from an EU country with a verified VAT number is selected, CURQ detects the **`EU landen`** fiscal position.
* It dynamically maps standard domestic VAT *(e.g., `Verkopen - BTW hoog (21%)`)* to the EU reverse-charge tax *(e.g., `Verkopen - Export goederen binnen EU (Sales)`)*, reporting under statutory VAT grid `3b`.
* For non-EU exports, it maps taxes to export zero-rated rules (`0% BTW`) reporting under statutory VAT grid `3a`.

---

## Related Documentation

* [Process Your First Customer Invoice and Payment](./getting-started/01-process-your-first-customer-invoice-and-payment.md)
* [Understanding Double-Entry Bookkeeping and Journals](./core-concepts/01-understanding-double-entry-bookkeeping-and-journals.md)
* [Understanding the Invoice and Bill Lifecycle](./core-concepts/02-understanding-the-invoice-and-bill-lifecycle.md)
* [Customer Invoice and Vendor Bill Field Definitions](./settings-and-fields/01-customer-invoice-and-vendor-bill-field-definitions.md)
* [Chart of Accounts and Taxes Field Definitions](./settings-and-fields/02-chart-of-accounts-and-taxes-field-definitions.md)
