# Payment, Bank, and Journal Entry Field Definitions

This document provides technical data dictionaries and field specifications for payment registration wizards, payment records, bank statements, the bank reconciliation widget, manual journal entries, customer banking mandates, SEPA direct debit payment modes, batch debit orders, and accounting lock dates in CURQ Accounting.

---

## 1. Payment Registration and Refund Wizard Fields

The Payment wizard opens when clicking **Register Payment** on a validated customer invoice or vendor bill, or clicking **Pay** on a confirmed credit note.

| Field Name | Description |
| :--- | :--- |
| **Journal** | The financial bank or cash sub-ledger through which funds are received or disbursed *(e.g., `Bank` or `Cash`)*. Determines whether transactions route through outstanding clearing accounts. |
| **Payment Method** | The settlement mechanism *(e.g., `Manual Payment`, `SEPA Credit Transfer`, or `SEPA Direct Debit`)*. Dictates batch export eligibility and bank execution parameters. |
| **Recipient Bank Account** | The partner IBAN or bank account receiving disbursed funds. Required for electronic vendor SEPA payments and customer credit refunds; optional for incoming customer receipts. |
| **Amount** | The settlement amount in document currency. Defaults to the total open residual balance, but can be edited downwards to process a partial settlement. |
| **Currency** | The currency in which the payment transaction is executed. |
| **Payment Date** | The official date on which the payment was initiated or transferred. Determines the accounting period for the outstanding accounts clearing move. |
| **Memo** | The tracking reference stamped on the payment voucher and passed to bank communication lines. Defaults to the invoice, bill, or credit note number *(e.g., `INV/2026/00001` or `RINV/2026/00003`)*. |

---

## 2. Standalone Payment Form Fields

Standalone payment records are created directly from **Customers > Payments** (or **Vendors > Payments**) when recording customer deposits, prepayments, or direct partner settlements.

| Field Name | Description |
| :--- | :--- |
| **Payment Type** | Dictates the direction of funds: `Receive` (inbound cash inflow from customers) or `Send` (outbound cash disbursement or customer refund). |
| **Customer** | The partner receiving credit or issuing funds *(labeled `Vendor` under Vendors > Payments)*. Auto-populates linked receivable account `1101010`. |
| **Amount** | The monetary figure transferred, along with the designated currency selector *(defaults to `EUR`)*. |
| **Date** | The effective calendar accounting date of the payment transaction. |
| **Memo** | Descriptive text, transaction reference, or contract identifier used for partner ledger reconciliation. |
| **Journal** | The financial liquidity sub-ledger recording the transaction *(e.g., `Bank` or `Cash`)*. |
| **Operating Unit** | The operational branch or business division responsible for the payment transaction. |
| **Payment Method** | The payment mechanism configured on the selected journal *(e.g., `Manual Payment` or `SEPA Credit Transfer`)*. |
| **Company Bank Account** | The specific company bank account receiving or disbursing funds. |

---

## 3. Customer Payments List View Columns

Navigating to **Customers > Payments** displays all recorded customer receipts and outbound refunds:

| Field Name | Description |
| :--- | :--- |
| **Date** | The effective value date of the payment transaction. |
| **Number** | Sequential payment voucher sequence assigned by CURQ *(e.g., `PAY00001` or `PAY00003`)*. |
| **Journal** | The financial bank or cash sub-ledger where the entry is recorded *(e.g., `Bank`)*. |
| **Operating Unit** | The operational branch or business division associated with the entry. |
| **Payment Method** | The execution mechanism applied to the payment *(e.g., `Manual Payment`)*. |
| **Customer** | The legal partner entity credited or debited. |
| **Amount In Currency** | The payment amount expressed in the transaction currency *(negative figures indicate outbound refunds)*. |
| **Amount** | The payment amount converted to the company base currency. |
| **State** | The lifecycle stage of the payment: `Draft` (unconfirmed), `In Process` (yellow badge), or `Paid` (green badge). |

---

## 4. Vendor Payments List View and Record Fields

Navigating to **Vendors > Payments** displays all recorded supplier disbursements and outbound refunds:

Clicking **+ New** opens the standalone vendor payment creation form:

Opening a validated payment record *(e.g., `PAY00002`)* displays the payment parameters, linked bills stat button, and action controls:

| Field Name | Description |
| :--- | :--- |
| **Payment Type** | Defaults to `Send` for supplier disbursements *(or `Receive` for incoming vendor credit refunds)*. |
| **Vendor** | The supplier receiving payment *(e.g., `Acme Technologies`)*. Auto-populates linked payable account `1203010`. |
| **Amount** | The disbursement sum in document currency *(e.g., `€ 99.00 EUR`)*. |
| **Date** | The effective value date of the payment transaction. |
| **Memo** | Descriptive text or source document identifier *(e.g., vendor bill number `BILL/2026/10/0001`)*. |
| **Journal** | The financial liquidity journal handling the disbursement *(e.g., `Bank`)*. |
| **Operating Unit** | The operational branch or business division responsible for the disbursement. |
| **Payment Method** | The payment execution mechanism *(e.g., `Manual Payment` or `SEPA Credit Transfer`)*. |
| **Vendor Bank Account** | The verified supplier bank account or IBAN receiving funds. |
| **Validate Button** | Confirms the payment voucher and advances the record to `In Process` state. |
| **Reset To Draft Button** | Reopens a payment voucher to draft status if modifications are required prior to bank clearance. |
| **Mark as Sent Button** | Updates internal status indicating payment instructions were transmitted to the bank. |
| **Bills Stat Button** | Smart button linking to the source vendor bills settled by this disbursement *(e.g., `1 Bill`)*. |

---

## 5. Standalone Payment Status Lifecycle

Standalone customer and vendor payments transition through dedicated processing stages:

| Field Name | Description |
| :--- | :--- |
| **Draft** | Preliminary payment voucher prior to validation. Zero balance sheet or P&L impact. All fields can be edited or deleted. |
| **In Process** | Validated payment transaction staged in interim liquidity accounts. Displays yellow badge in list views. Debits/credits the transitory clearing account (`1002017 Outstanding Receipts` or `1002018 Outstanding Payments`) against the partner receivable/payable account (`1101010` / `1601010`). Preserved in audit trail and locked against edits. |
| **Paid** | The payment move is fully matched and reconciled against a confirmed bank statement line. Displays green badge in list views. Clears the transitory clearing account into the physical bank account (`1002010 Rekening-courant bank`). Fully settled and locked. |

---

## 6. Bank Statement Form and Line Fields

Bank statements group cleared bank transactions, confirming opening and closing statement balances against legal bank records.

| Field Name | Description |
| :--- | :--- |
| **Reference / Name** | The unique statement name or bank sheet reference number *(e.g., `BNK1/2026/001` or bank monthly extract date)*. |
| **Journal** | The specific bank journal linked to the underlying bank account IBAN. |
| **Date** | The statement generation or extraction date reported by the financial institution. |
| **Starting Balance** | The opening cash balance at the beginning of the statement period. Automatically derived from the validated ending balance of the previous statement. |
| **Ending Balance** | The physical closing balance printed on the official bank account statement. Used to verify the integrity of entered lines. |
| **Computed Balance** | Real-time calculated balance: `Starting Balance` + net sum of all statement transaction lines. |
| **Difference** | The variance between `Computed Balance` and `Ending Balance`. Must equal `€ 0.00` before the statement can be officially closed. |
| **Line: Date** | The value date on which the individual debit or credit transaction cleared the bank account. |
| **Line: Label** | The narrative transaction text, payer name, or reference transmitted in the bank statement feed *(e.g., `Payment INV/2026/00001` or `Bank Monthly Maintenance Fee`)*. |
| **Line: Partner** | The recognized commercial customer or vendor identified from the bank transaction metadata. |
| **Line: Amount** | The financial value of the line: positive figures represent inflows (receipts); negative figures represent outflows (expenditures). |
| **Line: Foreign Currency** | Optional currency and amount columns populated when a transaction clears in non-base currency. |

---

## 7. Bank Reconciliation Widget Fields

The interactive reconciliation dashboard matches cleared bank lines against open ledger moves or generates direct adjusting lines.

| Field Name | Description |
| :--- | :--- |
| **Bank Transaction Header** | Displays the statement line currently being reconciled, including clearing date, transaction label, partner, and monetary amount. |
| **Match Existing Moves Tab** | Searchable candidate table showing outstanding open receivables, payables, and outstanding clearing lines matching the counterparty or amount. |
| **Candidate Line: Date** | Accounting date of the existing open invoice, bill, or payment move line. |
| **Candidate Line: Reference** | Document number of the open item *(e.g., `INV/2026/00001` or `BILL/2026/10/0001`)*. |
| **Candidate Line: Partner** | Commercial counterparty assigned to the open move line. |
| **Candidate Line: Open Amount** | The remaining unsettled residual balance available for matching. |
| **Manual Operations Tab** | Entry sub-form used to generate write-off entries, bank fees, or liquidity transfers directly during reconciliation without an invoice. |
| **Manual: Account** | General ledger account receiving the offset debit or credit *(e.g., `4210040 Bankkosten` for bank charges or `1002010 Spaarrekening` for internal transfers)*. |
| **Manual: Taxes** | VAT rules applied to the manual adjustment row. |
| **Manual: Analytic Distribution** | Cost center allocations assigned to operational expense adjustments. |
| **Manual: Label** | Transaction description posted to the newly created counterpart journal item. |
| **Manual: Amount** | Numeric adjustment sum absorbing any remaining statement discrepancy. |
| **Validate Button** | Commits the reconciliation, creates clearing journal items, marks matching items as settled, and advances to the next statement line. |

---

## 8. Manual Journal Entry and Item Fields

Manual journal entries record non-commercial adjustments, accruals, opening balances, and capital movements in **Accounting > Accounting > Journal Entries**.

| Field Name | Description |
| :--- | :--- |
| **Number** | System-assigned sequential voucher number governed by journal prefix rules *(e.g., `MISC/2026/10/0001`)*. |
| **Journal** | The accounting sub-ledger where the entry is recorded *(e.g., `Miscellaneous Operations` or `Exchange Difference`)*. |
| **Date** | The accounting date determining which fiscal year and accounting period absorbs the entry. |
| **Reference** | External document reference, contract identifier, or audit trail memorandum. |
| **Line: Account** | The general ledger account affected by the line *(e.g., `4210010 Kantoorkosten` or `0501010 Gestort en opgevraagd kapitaal`)*. |
| **Line: Partner** | The commercial partner linked to the row. Mandatory when booking to receivable or payable control accounts. |
| **Line: Label** | Narrative audit description explaining the specific debit or credit movement. |
| **Line: Analytic Distribution** | Cost center allocations dividing revenues or costs across business units or projects. |
| **Line: Taxes** | Tax definitions linked to the line. Triggers automatic VAT calculation and tax grid reporting. |
| **Line: Debit** | The monetary value debited to the account in company currency. |
| **Line: Credit** | The monetary value credited to the account in company currency. |
| **Line: Tax Grids** | Statutory tax declaration boxes where the entry reports *(e.g., `+1a`, `+5b`)*. |

---

## 9. Reverse Entry Wizard Fields

The Reverse Entry wizard generates contra-entries to negate prior journal entries for period-end accruals or correction vouchers.

| Field Name | Description |
| :--- | :--- |
| **Reversal Date** | Dictates when the contra-entry takes effect: `Specific Date` (user-defined date) or `Journal Entry Date` (mirrors the original entry date). |
| **Date** | The exact calendar accounting date applied to the newly generated reversal entry. |
| **Use Specific Journal** | Optional toggle allowing the contra-entry to post into an alternate journal instead of the source voucher journal. |
| **Journal** | The target journal designated to receive the reversal voucher when the specific journal toggle is enabled. |
| **Description** | Default memo assigned to the reversal voucher, automatically prefixed with `Reversal of: <Original Entry Number>`. |

---

## 10. Customer Banking Mandate Form Fields

Customer banking mandates legally authorize direct debit collections from a partner's bank account under **Customers > Banking Mandates**.

| Field Name | Description |
| :--- | :--- |
| **Reference** | Permanent unique mandate identifier assigned upon validation *(e.g., `BM0000009`)*. Can be manually entered during draft stage or automatically generated by CURQ sequence. |
| **Partner** | The customer entity granting debit authorization *(e.g., `John Doe`)*. |
| **Bank Account** | The verified customer IBAN linked to the partner record where funds will be debited *(e.g., `BE39 1031 2345 6719 - Adyen`)*. |
| **Format** | The electronic direct debit standard *(defaults to `Sepa Mandate`)*. |
| **Type** | The recurring authorization scope: `Recurrent` (for recurring subscription or installment debits) or `One-Off` (valid for a single collection run only). |
| **Scheme** | The regulatory clearing framework: `Basic (CORE)` (for retail consumers and standard commercial entities with full refund rights) or `B2B` (for corporate entities without automatic refund rights). |
| **Sequence Type for Next Debit** | Controls the ISO 20022 XML mandate marker: `First` (for initial debit in a recurring series) or `Recurring` (for subsequent recurring debits). Automatically updated by CURQ after successful file generation. |
| **Date of Signature of the Mandate** | The calendar date on which the debtor signed the authorization agreement. Required for legal compliance and statutory banking audits. |
| **Date of the Last Debit** | System-maintained timestamp recording the execution date of the most recent direct debit run utilizing this mandate. |
| **Scan of the Mandate** | File attachment field allowing upload of the signed physical or digital mandate document. |

---

## 11. Customer Banking Mandates List View Columns

The Banking Mandates list view displays active and historical customer authorizations:

| Field Name | Description |
| :--- | :--- |
| **Reference** | Unique mandate sequence number *(e.g., `BM0000009`)*. |
| **Partner** | The commercial debtor customer. |
| **Format** | Mandate transmission standard *(e.g., `Sepa Mandate`)*. |
| **Type** | Mandate periodicity: `Recurrent` or `One-Off`. |
| **Scheme** | Regulatory scheme: `Basic (CORE)` or `B2B`. |
| **Sequence Type** | Current sequence state: `First` or `Recurring`. |
| **Signature Date** | Effective execution date of the mandate agreement. |
| **Date of the Last Debit** | Most recent collection execution date. |
| **Status** | Lifecycle state: `Draft`, `Valid`, or `Cancel`. |

---

## 12. Banking Mandate Status Lifecycle

| Field Name | Description |
| :--- | :--- |
| **Draft** | Newly initialized mandate prior to validation. Cannot be attached to debit orders or customer invoices. All fields can be adjusted. |
| **Valid** | Confirmed authorization active for direct debit processing. Fully eligible for batch pulling and transaction inclusion. Core banking identifiers locked; can be printed or canceled. |
| **Cancel** | Revoked authorization. Excluded from all future direct debit generation runs and ineligible for transaction generation. Read-only historical record. |

---

## 13. Direct Debit Payment Mode Configuration Fields

Payment modes define automated bank settlement and matching rules under **Accounting > Configuration > Payment Modes**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Descriptive name for the payment configuration *(e.g., `Direct debit`)*. |
| **Payment Method** | Underlying technical execution sink *(e.g., `SEPA Direct Debit for customers`)*. |
| **Payment Type** | Monetary direction: `Inbound` (customer collection) or `Outbound` (supplier disbursement). |
| **Selectable in Payment Orders** | Boolean toggle enabling this payment mode to appear in batch payment order creation dialogs. |
| **Link to Bank Account?** | Dictates journal pairing: `Fixed` (binds directly to a specific bank journal) or `Variable` (allows selection across specified journals). |
| **Fixed Bank Journal** | The specific financial bank journal linked when `Fixed` is selected *(e.g., `Bank`)*. |
| **Payment mode for refunds?** | Boolean flag indicating whether this mode processes customer credit refunds. |
| **Disallow Debit Before Maturity Date?** | Enforces that debit orders cannot execute prior to the invoice payment term due date. |
| **Default Payment Execution Date** | Controls execution date populating in batches: `Immediately`, `Due Date`, or `Fixed Date`. |
| **Group Transactions in Payment Orders?** | Consolidates multiple invoices for the same debtor into a single aggregated bank transaction line. |
| **Journals Filter** | Filter restriction limiting eligible invoices to specified journals. |
| **Payment Mode on Invoice** | Matching criterion for pulling open move lines: `Same`, `Same or empty`, or `Any`. |
| **Target Moves** | Invoice status filter: `All Posted Entries` or `All Entries`. |
| **Type of Date Filter** | Date criterion used for invoice maturity filtering: `Due` (due date) or `Move` (invoice date). |
| **Show bank account in invoice report** | Controls printing of debtor/creditor bank account on customer invoice PDFs: `Full`, `First n chars`, `Last n chars`, or `No`. |
| **SEPA Creditor Identifier** | The organization Incassant ID *(e.g., `NL69ZZZ123456780000`)* required for compiling valid ISO 20022 XML direct debit messages (`pain.008`). |

---

## 14. Debit Order Batch Form Fields

Debit order batch documents group eligible customer direct debit items for electronic ISO 20022 XML export under **Customers > Debit Orders**.

### 14.1 Header Fields

| Field Name | Description |
| :--- | :--- |
| **Number** | Sequential batch reference assigned automatically by CURQ upon confirmation *(e.g., `PAY0002`)*. |
| **Payment Mode** | The direct debit payment configuration linking customer collection rules to the company settlement bank account *(e.g., `SEPA Direct Debit for customers (Bank)`)*. |
| **Bank Journal** | The financial liquidity journal recording the clearing entries. Automatically populated from the selected payment mode *(e.g., `Bank`)*. |
| **Company Bank Account** | The organization IBAN receiving the collected customer funds *(e.g., `NL93 ABNA 0417 1643 00`)*. |
| **Payment Type** | The monetary direction of the batch order *(defaults to `Inbound` for customer collections)*. |
| **Payment Execution Date Type** | Controls transaction scheduling *(defaults to `Due Date` to respect invoice payment terms)*. |

### 14.2 Transactions Tab Table Columns

The Transactions tab displays all individual customer collection items assembled into the batch:

| Field Name | Description |
| :--- | :--- |
| **Payment Reference** | Internal collection line identifier *(e.g., `P00002`)*. |
| **Partner** | The customer being debited *(e.g., `John Doe`)*. |
| **Amount** | The monetary figure to collect in transaction currency *(e.g., `€ 252.89`)*. |
| **Currency** | Currency denomination of the collection *(defaults to `EUR`)*. |
| **Partner Bank Account** | Authorized customer debtor IBAN *(e.g., `BE39 1031 2345 6719`)*. |
| **Communication** | Remittance narrative transmitted to the debtor bank statement *(defaults to customer invoice number `INV/2026/00006`)*. |
| **State** | Lifecycle status of the individual line: `Draft`, `Confirmed`, or `Paid`. |

### 14.3 Other Information Tab Fields

The Other Information tab configures electronic file generation metadata, banking protocol flags, and batch settlement options:

| Field Name | Description |
| :--- | :--- |
| **SEPA Payment** | Checkbox indicating that the batch conforms to European SEPA direct debit standards. Automatically enabled when selecting a SEPA payment mode. |
| **Batch Booking?** | Checkbox determining whether the clearing bank reports the collection run as a single consolidated bank line or separate individual transaction lines. |
| **Charge Bearer?** | Specifies which party incurs banking charges *(defaults to `Following Service Level` according to SEPA scheme rules)*. |
| **Number of Payment Transactions** | Total count of distinct customer debit items bundled into the batch order. |
| **File Generation Date** | Timestamp recording when the ISO 20022 XML file was exported. |
| **Generated by** | The user account responsible for compiling the electronic banking file. |
| **File Upload Date** | Timestamp recorded when the user marks the file as successfully uploaded to the banking portal. |
| **Description** | Optional internal narrative or audit label explaining the debit order collection batch. |

---

## 15. Debit Order Transaction Line and Modal Fields

Clicking **Add a line** in the Transactions tab opens the **Create Transactions** modal to configure or review an individual direct debit item:

| Field Name | Description |
| :--- | :--- |
| **Payment Reference**                   | Reference transmitted with the payment instruction *(e.g., customer invoice reference `INV/2026/00006`)*.                                                                                                    |
| **Journal Item**                        | The specific unsettled customer receivable journal item (`1101010 Handelsdebiteuren nominaal`) selected for direct debit collection. Auto-populates counterparty, mandate, bank account, and amount details. |
| **Payment Date**                        | Scheduled settlement value date for the specific transaction line.                                                                                                                                           |
| **Due Date**                            | Maturity date derived from the linked customer invoice terms.                                                                                                                                                |
| **Amount**                              | The transaction collection sum in transaction currency.                                                                                                                                                      |
| **Amount in Company Currency**          | Collection amount converted into the base ledger currency (`EUR`).                                                                                                                                           |
| **Currency of the Payment Transaction** | The currency denomination applied to the transaction *(defaults to `EUR`)*.                                                                                                                                  |
| **Partner**                             | The customer entity being debited *(e.g., `John Doe`)*.                                                                                                                                                      |
| **Partner Bank Account** | The authorized customer IBAN registered on the partner profile. |
| **Direct Debit Mandate**                | The validated SEPA banking mandate reference authorizing the debit *(e.g., `BM0000009`)*.                                                                                                                    |
| **Priority**                            | Banking execution urgency level *(defaults to `Normal`)*.                                                                                                                                                    |
| **Local Instrument**                    | SEPA scheme identifier *(e.g., `CORE` for consumers/businesses or `B2B` for inter-corporate collections)*.                                                                                                   |
| **Category Purpose**                    | High-level ISO 20022 business classification code.                                                                                                                                                           |
| **Purpose**                             | Detailed ISO 20022 transaction reason code.                                                                                                                                                                  |
| **Communication Type**                  | Remittance format: `Free` (unstructured narrative) or structured reference.                                                                                                                                  |
| **Communication**                       | Remittance narrative stamped onto the customer's bank statement *(defaults to invoice number)*.                                                                                                              |

---

## 16. Debit Order Status Lifecycle

| Field Name | Description |
| :--- | :--- |
| **Draft** | Initial order creation and line assembly. Invoices remain in **Posted** status with open residual balance. Lines can be freely added, modified, or removed. |
| **Confirmed** | Payment lines validated and locked for electronic file compilation. Invoices remain in **Posted** status reserved for direct debit batching. Parameters locked. |
| **File Generated** | The ISO 20022 XML batch file (`pain.008`) is compiled and downloaded. Invoices remain in **Posted** status awaiting bank execution. Output file is fixed. |
| **File Uploaded** | Confirmation that the XML batch was uploaded to the commercial banking portal. Invoices remain in **Posted** status with a linked **Payment Lines** stat button until cleared via bank statement reconciliation. |

---

## 17. SEPA Direct Debit Payment Transaction Fields

Payment transactions represent the individual customer execution records generated under batch debit orders and viewed via the **Payment Lines** stat button on invoices:

| Field Name | Description |
| :--- | :--- |
| **Payment Type** | Monetary direction *(defaults to `Receive` for customer collections)*. |
| **Customer** | The legal debtor partner record linked to the transaction *(e.g., `John Doe`)*. |
| **Amount** | The financial sum collected in transaction currency *(e.g., `€ 252.89 EUR`)*. |
| **Date** | Value date assigned to the payment transaction *(e.g., `10/30/2026`)*. |
| **Memo** | Internal payment batch identifier *(e.g., `PAY0002`)*. |
| **Payment Reference** | Source commercial document reference *(e.g., `INV/2026/00006`)*. |
| **Journal** | The financial liquidity journal handling the transaction *(e.g., `Bank`)*. |
| **Operating Unit** | The organizational branch or division assigned to the entry. |
| **Payment Method** | Technical payment handler *(e.g., `SEPA Direct Debit for customers`)*. |
| **State** | Lifecycle stage: `Draft` (unconfirmed), `In Process` (staged), or `Paid` (cleared). |

---

## 18. Vendor Payment Order Batch Form Fields

Payment order batch documents group eligible supplier bills for electronic ISO 20022 XML credit transfer export under **Vendors > Payment Orders**:

### 18.1 Header and Form Fields

| Field Name | Description |
| :--- | :--- |
| **Number** | Sequential batch reference assigned automatically by CURQ upon confirmation *(e.g., `PAY0001`)*. |
| **Payment Mode** | The outbound disbursement payment configuration linking supplier payment rules to the company settlement bank account *(e.g., `Manual` or `SEPA Credit Transfer`)*. |
| **Bank Journal** | The financial liquidity journal recording the outgoing clearing entries *(e.g., `Bank`)*. |
| **Company Bank Account** | The organization IBAN disbursing funds to suppliers *(e.g., `NL93 ABNA 0417 1643 00`)*. |
| **Batch Booking?** | Checkbox determining whether the clearing bank reports the payment run as a single consolidated debit on bank statements or separate individual transaction entries. |
| **Charge Bearer?** | Specifies which party incurs banking charges *(defaults to `Following Service Level` according to European SEPA scheme rules)*. |
| **Payment Type** | The monetary direction of the batch order *(fixed to `Outbound` for supplier payments)*. |
| **Payment Execution Date Type** | Controls transaction execution scheduling *(defaults to `Due Date` to respect supplier invoice payment terms, or `Immediately`)*. |
| **File Generation Date** | Timestamp recording when the ISO 20022 XML credit transfer file was exported *(e.g., `10/30/2026`)*. |
| **Generated by** | The user account responsible for compiling the electronic banking file. |
| **File Upload Date** | Timestamp recorded when the user marks the file as successfully uploaded to the banking portal *(e.g., `10/30/2026`)*. |
| **Description** | Optional internal narrative or audit label explaining the payment run. |

### 18.2 Transactions Tab Table Columns

| Field Name | Description |
| :--- | :--- |
| **Partner** | The supplier receiving payment *(e.g., `Acme Technologies`)*. |
| **Communication** | Mandatory remittance information transmitted to the supplier bank statement *(e.g., `BILL/2026/10/0001`)*. |
| **Partner Bank Account** | Recipient supplier IBAN registered on the vendor contact profile. |
| **Due Date** | Contractual payment term maturity date *(e.g., `10/27/2026`)*. |
| **Payment Date** | Scheduled settlement value date for the payment line *(e.g., `10/30/2026`)*. |
| **Amount** | The transaction disbursement sum in currency *(e.g., `€ 99.00`)*. |
| **Payment Reference** | Internal system transaction voucher sequence *(e.g., `PO0001`)*. |

### 18.3 Action Buttons and Lifecycle Controls

| Field Name | Description |
| :--- | :--- |
| **Create Payment Lines from Journal Items** | Opens the batch retrieval wizard to query open vendor payable items across specified due-date ranges. |
| **Confirm Payments** | Locks payment lines, assigns batch identifier *(e.g., `PAY0001`)*, and advances order to `Confirmed` status. |
| **Generate Payment File** | Compiles the validated transaction lines into a standardized ISO 20022 XML credit transfer file (`pain.001`) and advances to `File Generated` status. |
| **File Successfully Uploaded** | Confirms batch upload to the commercial banking portal, records `File Upload Date`, and advances order to `File Uploaded` status. |
| **Cancel Payments** | Voids an unexecuted payment order and releases attached vendor bills back to open status. |

---

## 19. Lock Dates Dialog Field Definitions

Navigating to **Accounting > Lock Dates** opens the configuration dialog used to define sub-ledger restrictions, tax period locks, and statutory fiscal year closing boundaries:

### 19.1 Reversible Lock Dates

| Field Name | Description |
| :--- | :--- |
| **Sale Lock Date** | Cutoff date restricting customer invoices, customer credit notes, and sales journal items. Prevents creating, modifying, posting, or cancelling sales entries dated on or before this date. Can be modified, advanced, or cleared at any time by authorized financial advisers. |
| **Purchase Lock Date** | Cutoff date restricting vendor bills, vendor refunds, and purchase journal items. Prevents creating, modifying, posting, or cancelling purchase entries dated on or before this date. Can be modified, advanced, or cleared at any time by authorized financial advisers. |
| **Tax Return Lock Date** | Cutoff date locking all journal entries and lines bearing statutory tax grids *(e.g., Dutch BTW rubrieken `1a`, `1b`, `2a`, `3a`, `4a`, `5b`)*. Cannot be set to a future date relative to the current system date. Ensures transactions included in submitted tax returns cannot be altered. Can be adjusted by advisers if a formal supplementary declaration (*suppletie*) is approved. |
| **Global Lock Date** | Operational cutoff date restricting non-adviser users *(e.g., billing clerks, sales officers, purchasing agents)* across all journals. Prevents creating, editing, posting, or cancelling transactions dated on or before this date. Users with the **Adviser** role retain permission to record adjusting journal entries behind this date. |

### 19.2 Irreversible Lock Date

| Field Name | Description |
| :--- | :--- |
| **Hard Lock Date** | Permanent, company-wide statutory cutoff date. Completely and irreversibly locks all journal entries, general ledger moves, and documents dated on or before this date. Must be on or before the current system date (cannot be set to a future date). Once saved, no user *(including system administrators, controllers, advisers, and root accounts)* can modify, post, unpost, cancel, or reconcile entries prior to this date. This date cannot be moved backward or cleared. |

### 19.3 Dialog Action Buttons

| Field Name | Description |
| :--- | :--- |
| **Update** | Commits the configured cutoff dates to company parameters and immediately enforces validation rules across all accounting workflows. |
| **Cancel** | Discards any unsaved changes and closes the dialog without modifying active lock dates. |

---

## 20. Cost and Revenue Spreading Field Definitions

Spread tables and templates govern automated deferred revenue and prepaid expense amortization schedules in **Accounting > Spread Costs/Revenues**:

### 20.1 Spread Board Header and Form Fields

| Field Name | Description |
| :--- | :--- |
| **Spread Board Name** | Descriptive identification label of the spreading schedule *(e.g., `One year offices cleaning contract` or `Annual SaaS License Deferral`)*. |
| **Spread Template** | Optional pre-configured template populating repetition count, period type, and default ledger accounts. |
| **Invoice Type** | Distinguishes whether the schedule governs customer sales income (`Customer Invoice`) or vendor expense prepayments (`Vendor Bill`). |
| **Debit Account** | For deferred revenue: the Balance Sheet liability account debited each month (`2101010 Vooruitontvangen bedragen`). For prepaid expenses: the P&L operating expense account debited each month (`4301010 Huurkosten`). |
| **Credit Account** | For deferred revenue: the P&L operating revenue account credited each month *(e.g., `8010100 Huuropbrengsten` or `8001010 Omzet`)*. For prepaid expenses: the Balance Sheet asset account credited each month *(e.g., `1301010 Vooruitbetaalde kosten`)*. |
| **Journal Entry** | Read-only reference displayed when linked to an originating commercial invoice or bill *(e.g., `Draft Invoice`)*. |
| **Invoice Line** | Read-only reference to the specific product line item tied to this amortization schedule *(e.g., `Cloud Hosting Standard`)*. |
| **Estimated Amount** | Initial projected financial sum to be amortized before document linking *(e.g., `1,200.00`)*. |
| **Total Amount** | The actual net monetary value derived from the linked commercial invoice or bill line *(e.g., `-1,200.00` for revenue deferral)*. |
| **Auto-post lines** | Checkbox controlling automatic confirmation. When enabled, CURQ posts recognition journal entries automatically upon their scheduled dates via automated background crons. When disabled, entries remain in `Draft` status for manual accountant validation. |
| **Number of Repetitions?** | Total number of amortization installments *(defaults to `12` for an annual schedule)*. |
| **Period Type?** | Frequency of recognition intervals: `Month`, `Quarter`, or `Year`. |
| **Start Date** | Inception date of the amortization schedule *(defaults to the start of the year or current month, e.g., `01/01/2026` or `10/01/2026`)*. |
| **Calculate by days?** | When enabled, CURQ weights monthly recognition installments by the exact number of calendar days in each period rather than dividing the amount into equal monthly slices. |
| **Currency** | Base currency of the amortization schedule *(configured in the **Details** tab, defaults to `EUR`)*. |
| **Analytic Distribution** | Cost center or analytical department tag assigned to recognition entries *(configured in the **Details** tab)*. |

### 20.2 Spread Lines Tab Columns and Summary Totals

| Field Name | Description |
| :--- | :--- |
| **Description** | Sequential installment identifier *(e.g., `Annual Cloud Subscription 2026/1` for period 1)*. |
| **Amount** | The calculated periodic portion amortized within that specific interval *(e.g., `100.00`)*. |
| **Date** | Accounting date on which the periodic installment is scheduled to post *(e.g., `10/31/2026`)*. |
| **Journal Entry** | Direct link to the generated accounting voucher once posted *(e.g., `MISC/2026/10/0003`)*. |
| **Create Move** | Action button to post an unbooked recognition voucher to the general ledger. |
| **View Move** | Opens the posted accounting journal entry to review debited and credited accounts. |
| **Delete Move** | Voids and unposts the generated journal entry, returning the line back to draft status. |
| **Unspread Amount** | Financial sum remaining to be divided into recognition schedule rows *(reaches `0.00` upon recalculation)*. |
| **Unposted Amount** | Total outstanding balance across all future installment lines that have not yet been posted to the General Ledger. |


### 20.3 Link Invoice Line with Spread Board Modal Fields

| Field Name | Description |
| :--- | :--- |
| **Invoice Type** | Commercial document type *(fixed to `Customer Invoice` or `Vendor Bill`)*. |
| **Journal Entry** | Reference to the originating commercial invoice or bill *(e.g., `Draft Invoice`)*. |
| **Invoice Line** | Specific commercial line item being linked to the amortization schedule *(e.g., `Cloud Hosting Standard`)*. |
| **Spread Action Type** | Radio selector determining the creation method: `Create from spread template` or `Create new spread board`. |
| **Spread Board** | Dropdown selector to choose an existing unlinked spread schedule *(e.g., `Annual Cloud Subscription 2026`)*. |

### 20.4 Spread Table Action Buttons

| Field Name | Description |
| :--- | :--- |
| **Create Move** | Generates the individual accounting entry for a selected spread line installment. |
| **Create All Moves** | Compiles and posts accounting vouchers for all remaining unbooked spread lines simultaneously. |
| **Recalculate unposted lines** | Updates dates and values for future unposted lines without altering previously posted historical entries. |
| **Recalculate entire spread** | Completely recomputes the entire amortization schedule from the original start date. |
| **Undo spread** | Clears all calculated installment lines and returns the spread table to an empty draft state. |
| **Unlink Invoice Line** | Disconnects the spread table from the source invoice line. |

---

## 21. Analytic Items Ledger Field Definitions

Analytic items track managerial cost and revenue allocations across project dimensions without affecting the statutory double-entry general ledger under **Accounting > Accounting > Analytic Items**.

| Field Name | Description |
| :--- | :--- |
| **Date** | Calendar date on which the operational expense, timesheet hour, or revenue occurred. |
| **Description** | Operational narrative or task description *(e.g., `Server setup`, `Frontend project setup`, `Time Off`)*. |
| **Project** | The assigned analytical account, department, or project cost center *(e.g., `Development`, `Internal`)*. |
| **Amount** | Financial impact attributed to the analytical account in company currency *(positive for revenue/credit allocations, negative for costs/expenses)*. |
| **Financial Account** | Optional link to the statutory general ledger account associated with the origin move line. |
| **Unit of Measure** | Operational unit used when tracking quantities or time *(e.g., `Hours`, `Units`)*. |
| **Partner** | Optional counterparty associated with the operational activity. |
| **User** | System user who performed the activity, logged the timesheet, or created the entry. |

---

## 22. Global Journal Items Ledger Field Definitions

The global ledger under **Accounting > Accounting > Journal Items** aggregates all debit and credit moves across all journals:

| Field Name | Description |
| :--- | :--- |
| **Date** | Legal accounting date on which the journal item posted to the general ledger. |
| **Journal Entry** | System document sequence reference linking directly to the parent balanced voucher *(e.g., `INV/2026/00007`, `BILL/2026/10/0003`)*. |
| **Account** | Chart of accounts code and description debited or credited *(e.g., `8010100 Netto-omzet`, `1101010 Handelsdebiteuren`)*. |
| **Operating Unit** | Branch or departmental entity responsible for the accounting transaction. |
| **Partner** | Commercial counterparty customer, vendor, or employee linked to the line. |
| **Label** | Detailed transaction narrative or invoice line item text. |
| **Debit** | Positive financial sum debited to the account in company base currency. |
| **Credit** | Positive financial sum credited to the account in company base currency. |
| **Matching** | Reconciliation matching code assigned when the line is reconciled against an offsetting entry *(e.g., `P6`, `5`)*. |
| **Preview** | Quick-view preview link for transaction attachments or PDF vouchers. |

---

## 23. Secure Journal Entries Parameter Definitions

Launched under **Accounting > Accounting > Secure Entries** to cryptographically lock historical posted entries:

| Field Name | Description |
| :--- | :--- |
| **Secure entries up to** | Date boundary defining the inclusive cutoff date up to which all posted entries are permanently locked. |
| **Secure Entries** | Action button computing SHA-256 hash chains across all prior moves, making them legally immutable. |
| **Discard** | Closes the security wizard without applying the cryptographic lock. |

---

## 24. Accounting Dashboard Journal Cards Data Dictionary

The Accounting Dashboard at **Accounting > Dashboard** displays 12 interactive cards representing the company's core and specialized sub-ledgers:

| Field Name | Description |
| :--- | :--- |
| **Customer Invoices** | Sales sub-ledger tracking customer receivables. Features real-time aging bar charts and counters (`To Validate`, `Unpaid`, `Late`). Action button `New` creates draft sales invoices. |
| **Vendor Bills** | Procurement sub-ledger tracking supplier liabilities. Features aging bar charts and counters (`To Validate`, `To Pay`, `Late`). Action buttons `Upload` (batch document ingestion) and `New` (manual vendor bill creation). |
| **Bank** | Electronic banking liquidity sub-ledger. Displays current general ledger bank balance and dynamic balance trendline. Action buttons `Import (OCA)` (statement file ingestion) and `Transactions` (reconciliation interface). |
| **Cash** | Physical cash register sub-ledger. Displays physical vault and petty cash balances with dynamic balance trendline and statement reconciliation tools. |
| **Miscellaneous Operations** | General journal sub-ledger. Used for manual adjustments, opening balances, payroll vouchers, and unallocated non-commercial entries. Action button `New` launches pre-selected manual vouchers. |
| **Exchange Difference** | Dedicated sub-ledger isolating realized foreign currency exchange gains (`8501020`) and losses (`4501020`) generated during multi-currency invoice payments and bank reconciliations. Uses sequence prefix `EXCH/YYYY/MM/XXXX`. |
| **Accruals** | Dedicated sub-ledger isolating period-end expense accruals, deferred revenues, and recurring spreading schedules from general miscellaneous entries. Uses sequence prefix `ACCR/YYYY/MM/XXXX`. |
| **Depreciations** | Dedicated sub-ledger receiving automated monthly asset amortization vouchers generated by the fixed assets engine. Uses sequence prefix `DEPR/YYYY/MM/XXXX`. |
| **Foreign currency revaluation** | Dedicated sub-ledger recording period-end unrealized exchange rate revaluations for foreign currency bank accounts, receivables, and payables. Uses sequence prefix `FCR/YYYY/MM/XXXX`. |
| **Wages** | Dedicated payroll sub-ledger recording gross salaries, employer social security charges, wage tax withholdings, and net salaries payable. Uses sequence prefix `WAG/YYYY/MM/XXXX`. |
| **Inventory Valuation** | Automated sub-ledger recording perpetual stock valuation movements, goods receipt variances, and periodic inventory shrinkage adjustments. Uses sequence prefix `STJ/YYYY/MM/XXXX` *(Stock Transaction Journal)*. |
| **Taxes** | Dedicated sub-ledger recording statutory tax adjustments, quarterly Belastingdienst VAT clearance vouchers, and small business scheme (KOR) settlements. Uses sequence prefix `TAX/YYYY/MM/XXXX`. |

---

## 25. Accounting Dashboard Card Action Menu Fields

Accessible by clicking the three dots icon in the upper-right corner of any journal card on the dashboard:

| Field Name | Description |
| :--- | :--- |
| **View > Invoices / Bills / Operations** | Direct shortcut opening the filtered document list view for this specific journal. |
| **View > Credit Notes / Refunds** | Direct shortcut opening filtered credit notes or vendor refunds. |
| **View > Journal Items** | Direct shortcut displaying individual general ledger line items posted to this journal. |
| **New > Invoice / Bill / Operation** | Initializes a blank draft document pre-routed to this specific journal. |
| **New > Credit Note / Refund** | Initializes a blank corrective credit note pre-assigned to this journal. |
| **New > Upload Invoices / Bills** | Launches the document uploader for automated optical character recognition (OCR) and PDF ingestion. |
| **Reporting > Invoices Analysis** | Opens the multidimensional OLAP cube and graphical trend dashboard for this journal. |
| **Color Swatches** | Palette of 11 distinct color tags allowing users to color-code the left vertical border stripe of the journal card. |
| **Remove from Favorites / Add to Favorites** | Star icon toggle displaying or hiding the card on favorite-filtered dashboard views. |
| **Configuration** | Administrative shortcut opening the underlying journal configuration form to adjust accounts, sequences, and lock rules. |
---

## Related Documentation

* [Register and Reconcile Payments](../task-guides/03-register-and-reconcile-payments.md)
* [Import and Reconcile Bank Statements](../task-guides/04-import-and-reconcile-bank-statements.md)
* [Create Manual Journal Entries](../task-guides/05-create-manual-journal-entries.md)
* [Manage SEPA Direct Debit Orders and Mandates](../task-guides/10-manage-sepa-direct-debit-orders-and-mandates.md)
