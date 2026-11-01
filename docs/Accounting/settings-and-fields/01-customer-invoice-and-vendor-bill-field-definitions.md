# Customer Invoice, Vendor Bill, and Credit Note Field Definitions

This document provides factual specifications and data tables for all header fields, line item columns, journal items, other info settings, reversal wizards, and status lifecycles across Customer Invoices, Vendor Bills, and Customer Credit Notes (*Creditfacturen*) in CURQ Accounting.

---

## Header Fields

The header section records the primary commercial counterparty, billing dates, financial journals, and payment terms for the transaction.

| Field Name | Description |
| :--- | :--- |
| **Customer / Vendor** | The registered partner entity receiving the invoice or credit note, or issuing the bill. Selecting a partner auto-populates addresses, payment terms, currency, and default fiscal positions. |
| **Delivery Address** | *(Customer Invoices and Credit Notes)* The destination site where goods or physical services were delivered. Automatically populated from the partner's linked delivery address. |
| **Invoice Date** | *(Customer Invoices and Credit Notes)* The official legal date of the invoice or credit note. Determines the accounting period and tax reporting date for revenue or credit recognition. |
| **Bill Date** | *(Vendor Bills only)* The issuance date printed on the vendor's original paper or digital invoice. |
| **Accounting Date** | *(Vendor Bills and Journal Entries only)* The date on which the transaction is officially posted to the general ledger. Allows recording a prior-month bill into the current open accounting period if previous periods are locked. |
| **Payment Reference** | For customer invoices: the unique reference printed on the document for bank matching *(e.g., `INV/2026/00005`)*. For credit notes: the reference for bank disbursement matching *(e.g., `RINV/2026/00003`)*. For vendor bills: the external invoice number provided by the supplier. |
| **Payment Terms** | The contractual payment schedule applied to the transaction *(e.g., `Immediate Payment`, `15 Days`, `30 Days`, `End of Following Month`)*. Automatically computes the Due Date. |
| **Due Date** | The legal deadline by which the balance must be settled or refunded. If Payment Terms are selected, this date is calculated automatically; otherwise, it can be set manually. |
| **Journal** | The financial sub-ledger where the entry is recorded. Customer invoices and credit notes route to `Customer Invoices`; vendor bills route to `Vendor Bills`. Determines sequential numbering. |
| **Operating Unit** | The organizational branch, business division, or operational unit responsible for the commercial transaction. |
| **Currency** | The transaction currency *(e.g., `EUR`, `USD`, `GBP`)*. Defaults to company base currency unless a foreign currency is configured on the partner. |

---

## Invoice Lines, Bill Lines, and Credit Lines Table Columns

The lines table specifies the individual products, services, accounting allocations, and tax treatments that comprise the commercial document.

| Field Name | Description |
| :--- | :--- |
| **Product** | The catalog item or service being billed or credited. Selecting a product automatically loads default descriptions, ledger accounts, unit prices, and tax rules. |
| **Description / Label** | The line-item text printed on customer-facing documents and vendor vouchers. Auto-filled from the product catalog but fully editable. |
| **Account** | The general ledger account affected by the line. For customer invoices: an income account *(e.g., `8001010 Netto-omzet uit leveringen geproduceerde goederen`)*. For credit notes: the credited revenue account. For vendor bills: an operational expense account or asset account. |
| **Operating Unit** | The business unit or operating branch assigned to this individual line item *(labeled `Operatin...` in the UI)*. |
| **Analytic Distribution** | Cost center allocations dividing revenues, expenses, or credits across analytic projects, departments, or contracts for managerial reporting. |
| **Asset** | Links the line directly to a fixed asset model when purchasing capital equipment subject to long-term depreciation. |
| **Quantity** | The numerical units of merchandise or service hours delivered or credited. Must be entered as a positive value on credit notes. |
| **UoM** | The Unit of Measure governing the line *(e.g., `Units`, `Hours`, `Days`, `kg`)*. |
| **Price** | The unit selling price or unit purchase cost excluding taxes. Must be entered as a positive value on credit notes. |
| **Taxes / VAT** | The applicable tax codes applied to the line *(e.g., `21% VAT`, `9% VAT`, `BTW Nul (0%)`)*. Automatically determined by the customer/vendor fiscal position. |
| **Amount / Subtotal** | Net untaxed subtotal for the row: Quantity multiplied by Price. |
| **Terms and Conditions / Note** | Freeform commercial memorandum, bank transfer instructions, or legal terms printed at the bottom of customer-facing documents *(e.g., `Algemene voorwaarden: https://yourcompany.com/terms`)*. |

---

## Journal Items Tab Columns

The Journal Items tab displays the underlying double-entry accounting records that are committed to the General Ledger upon posting.

| Field Name | Description |
| :--- | :--- |
| **Account** | The specific general ledger balance sheet or P&L account *(e.g., `8001010 Netto-omzet uit leveringen...` for revenue, or `1101010 Handelsdebiteuren nominaal` for customer receivables)*. |
| **Label** | Line description or document identifier *(e.g., `Fair Phone 5 (White)` or `INV/2026/00005`)*. |
| **Analytic Distribution** | Cost center allocations dividing revenues or expenses across analytic projects, business units, or departments *(labeled `Analytic D...` in the UI)*. |
| **Asset** | Links the line directly to a fixed asset depreciation model when purchasing capital equipment. |
| **Debit** | The monetary value debited to the account in company currency. |
| **Credit** | The monetary value credited to the account in company currency. |
| **Tax Grids** | Statutory tax declaration boxes where the transaction figures report for government VAT returns *(e.g., `+3a` for non-EU exports)*. |
| **Cut-Off** | Action button triggering revenue or expense recognition adjustments across accounting cut-off periods. |

---

## Other Info Tab Fields

The Other Info tab configures operational parameters, financial journal settings, and marketing attribution tags organized into three distinct sections.

### 1. Invoice Section
| Field Name | Description |
| :--- | :--- |
| **Customer Reference** | *(Customer Invoice only)* The client's internal purchase order (PO) number or reference code, printed on the invoice for the customer's accounts payable team. |
| **Salesperson** | *(Customer Invoice only)* Internal representative credited with the sale, used for commercial analytics and commission tracking. |
| **Sales Team** | *(Customer Invoice only)* The internal commercial group or branch associated with the revenue *(e.g., `EU`)*. |
| **Recipient Bank** | *(Customer Invoice only)* The company bank account printed on customer invoices where remittances should be deposited, or partner bank for direct debits. |
| **Payment Reference** | The unique payment identifier printed on the invoice for automated bank statement reconciliation *(e.g., `INV/2026/00005`)*. |
| **Delivery Date** | Date on which the underlying merchandise or services were physically fulfilled. |

### 2. Accounting Section
| Field Name | Description |
| :--- | :--- |
| **Incoterm** | International commercial trade terms *(e.g., `EXW`, `FOB`, `CIF`, `DAP`)* governing shipping risk and logistics ownership. |
| **Incoterm Location** | Specific physical port, facility, or terminal associated with the Incoterm agreement. |
| **Fiscal Position** | Tax mapping rule that automatically adapts domestic taxes to cross-border, export, or tax-exempt rules *(e.g., `Niet-EU landen` for non-EU exports)*. |
| **Secured** | Cryptographic audit lock indicating whether the entry is secured by an immutable hash chain according to statutory anti-fraud regulations. |
| **Payment Method** | Expected settlement vehicle *(e.g., `Manual Payment`, `SEPA Credit Transfer`, `SEPA Direct Debit`, `Credit Card`)*. |
| **Payment Mode** | The automated collection rule routing the invoice into electronic payment orders *(e.g., `Direct debit`)*. |
| **Partner Bank Account** | The verified customer IBAN debited for direct debit settlements *(e.g., `BE39 1031 2345 6719 - Adyen`)*. |
| **Direct Debit Mandate** | The validated customer authorization reference linking the invoice to an active banking mandate *(e.g., `BM0000009 (first)`)*. |
| **Auto-post** | Configures recurring draft entries to post automatically on their scheduled date without manual intervention. |
| **Checked** | Administrative review flag allowing accountants to verify and mark the transaction as reviewed. |

### 3. Marketing Section
| Field Name | Description |
| :--- | :--- |
| **Campaign** | Commercial marketing campaign that generated the underlying order or invoice *(e.g., `Fall Promotion`)*. |
| **Medium** | The communication channel through which the lead or transaction arrived *(e.g., `Email`, `Website`, `Social`)*. |
| **Source** | The specific originating link, referral partner, or search engine driving the sale *(e.g., `Newsletter`, `Google`)*. |

---

## Overdue Invoice Reminder Wizard Fields

When a customer invoice exceeds its maturity due date without full settlement, clicking **Send an overdue reminder** in the invoice header banner launches the **Overdue Invoice Remind** modal wizard:

### 1. Filter and Option Fields
| Field Name | Description |
| :--- | :--- |
| **Customers** | Optional partner filter restricting the dunning run to designated customer accounts. If left empty, all debtors with overdue items are evaluated. |
| **Salesman** | Restricts reminder evaluation to invoices managed by a specific internal commercial representative. |
| **Contact to Remind** | Dictates which customer contact point receives the notification *(defaults to `Last Reminder`)*. |
| **Wizard Interface** | Workflow execution mode: `One by One` *(presents each customer reminder draft sequentially for review and custom note editing before dispatch)* or batch execution. |
| **Trigger Delay** | Grace period in days following the invoice due date before an overdue reminder triggers *(e.g., `0 days` for immediate reminder eligibility upon maturity)*. |
| **Minimum Delay Since Last Reminder** | Minimum waiting period in days enforced between sequential follow-up reminders *(e.g., `5 days`)* to avoid duplicate dunning notices. |

### 2. Payments Up-To-Date? Table Columns
| Field Name | Description |
| :--- | :--- |
| **Journal** | The financial liquidity journal checked for recent entries *(e.g., `Bank` or `Cash`)*. |
| **Last Entry** | Accounting date of the most recently posted payment or statement line in the journal. |
| **Last Entry Created on** | Exact system timestamp when the latest journal transaction was created or imported. |
| **Last Entry Created by** | The internal user who registered or imported the last journal entry. |

### 3. Wizard Action Buttons
| Field Name | Description |
| :--- | :--- |
| **Start** | Initiates the reminder generation process and opens the **Overdue Invoice Step** review modal. |
| **Cancel** | Closes the wizard without generating reminders or altering invoice statuses. |

---

## Overdue Invoice Step Review Modal Fields

In `One by One` mode, clicking **Start** opens the **Overdue Invoice Step** review modal to inspect, customize, and approve the reminder notice for each customer:

### 1. Customer and Contact Header Fields
| Field Name | Description |
| :--- | :--- |
| **Customer** | The debtor partner entity receiving the payment reminder *(e.g., `John Doe`)*. |
| **New Remind Counter** | Current escalation counter for the recipient *(e.g., `1` for first notice, `2` for formal warning, `3` for final demand)*. |
| **Invoicing Contact** | Specific individual billing contact targeted for correspondence. |
| **Phone** | Primary landline phone number registered on the customer contact record. |
| **Email** | Destination email address receiving the dunning notice and attached invoice PDFs *(e.g., `email@yourcompany.com`)*. |
| **Mobile** | Mobile phone number registered on the customer contact record for SMS or telephone follow-up. |

### 2. Overdue Invoices Sub-Table Columns
| Field Name | Description |
| :--- | :--- |
| **Invoicing Contact** | The billing recipient designated on the specific invoice line *(labeled `Invoicing ...` in the UI)*. |
| **Number** | Legal sequence reference of the overdue invoice *(e.g., `INV/2026/00001`)*. |
| **Invoice/Bill Date** | The calendar accounting date on which the invoice was originally posted *(labeled `Invoice/...` in the UI)*. |
| **Payment Terms** | Contractual credit and payment terms applied to the invoice *(labeled `Payment ...` in the UI)*. |
| **Due Date** | Statutory maturity date after which the balance became overdue. |
| **Order Ref** | Commercial sales order reference that originated the billing document. |
| **User** | Internal sales representative or account manager assigned to the invoice. |
| **Tax Excluded** | Net invoice amount excluding VAT. |
| **Total** | Gross total amount of the invoice including all applied taxes. |
| **Amount Due** | Open unpaid residual balance remaining on the invoice *(labeled `Am...` in the UI)*. |
| **Add a line** | Action link enabling manual addition of other open customer invoices to the current dunning notice. |

### 3. Reminder Message and Transmission Fields
| Field Name | Description |
| :--- | :--- |
| **Reminder Type** | Communication transmission channel *(e.g., `E-mail`)*. |
| **Cc** | Optional secondary email addresses carbon-copied on the outbound reminder email. |
| **Subject** | Editable email subject line pre-filled by the reminder level *(e.g., `Company Name - Payment Reminder n°1`)*. |
| **Message Body** | Rich text email notice containing the debtor greeting, itemized breakdown table *(listing `Invoice Number`, `Invoice Date`, `Payment Terms`, `Due Date`, `Order Ref.`, `Type`, `Total Untaxed`, `Total`, `Residual`, `Past Reminders`, and `Total Residual in EUR`)*, and remittance instructions. |

### 4. Modal Action Buttons
| Field Name | Description |
| :--- | :--- |
| **Validate** | Dispatches the reminder email with attached invoice PDFs to the customer, increments their reminder counter, logs the interaction in Chatter, and advances to the next customer in the queue. |
| **Skip** | Skips the current customer without sending an email or updating the reminder counter, immediately loading the next customer in line. |
| **Cancel** | Dismisses the modal and terminates the remainder of the dunning batch run. |

---

## Credit Note and Reversal Wizard Fields

Clicking **Credit Note** on a posted customer invoice or vendor bill launches the reversal modal wizard.

| Field Name | Description |
| :--- | :--- |
| **Credit Method** | Governs how the accounting reversal is executed: `Reverse and Create Invoice` (cancels the invoice and immediately generates an editable replacement draft invoice), `Reverse` (generates a standalone credit note cancelling the balance in full), or `Partial Refund` (generates an editable draft credit note copying invoice lines for selective line item reduction). |
| **Reason displayed on Credit Note** | The commercial or accounting justification printed directly on the customer credit note PDF and recorded in the audit trail *(e.g., `Defective merchandise return`)*. |
| **Journal** | The financial sub-ledger where the credit note entry is posted *(defaults to `Customer Invoices` for customer credit notes or `Vendor Bills` for supplier debit notes)*. |
| **Reversal date** | The calendar accounting date on which the credit note registers in the general ledger and statutory tax reports *(defaults to current date)*. |

---

## Document Status Lifecycle

Customer invoices, vendor bills, and credit notes transition through formal operational and legal states:

| Field Name | Description |
| :--- | :--- |
| **Draft** | Exploratory or preliminary record with a provisional tracking code *(e.g., `*INV/2026/...` or `*RINV/2026/...`)*. Zero balance sheet or P&L impact. Lines, pricing, taxes, and dates can be freely edited or deleted. |
| **Posted** | Legally recognized financial document with a permanent, gapless sequence number *(e.g., `INV/2026/00005` or `RINV/2026/00003`)*. Debits and credits are posted to general ledger accounts. Core amounts and accounts are locked; corrections require Credit Notes or Reversals. |
| **In Payment** | Settlement initiated: For invoices, payment was registered. For credit notes, an outbound refund was dispatched via the **Pay** button, but the bank statement has not yet undergone final reconciliation. Clears the partner open balance and offsets to liquidity clearing account `1101020`. Transaction is locked. |
| **Paid** | Fully settled: Open receivable or payable reaches `€ 0.00`. The temporary clearing balance is cleared into the main bank account balance upon bank reconciliation. Full settlement achieved. |
| **Cancelled / Reversed** | The document has been voided (if draft) or formally neutralized by an opposing credit note / reversal entry (if posted). Zero net financial effect on the balance sheet and profit & loss statements. Preserved in audit trail for statutory compliance. |

---

## Employee Expense Report Field Definitions

Employee expenses record reimbursable out-of-pocket costs and corporate card purchases under **Accounting > Vendors > Employee Expenses**.

### 1. Header Fields
| Field Name | Description |
| :--- | :--- |
| **Expense Report Summary** | Commercial description or project title identifying the reimbursement batch *(e.g., `Client Meeting Travel and Subsistence Oct 2026`)*. |
| **Employee** | The staff member submitting the claim and receiving personal reimbursement. |
| **Manager** | Designated approving manager responsible for authorizing the business expenditure. |
| **Paid By** | Funding origin: `Employee (to reimburse)` (personal out-of-pocket payment) or `Company` (corporate card/account). |

### 2. Expense Tab Line Columns
| Field Name | Description |
| :--- | :--- |
| **Expense Date** | Transaction or invoice date printed on the merchant receipt *(e.g., `10/30/2026`)*. |
| **Category** | Expense classification product mapping the transaction to statutory general ledger accounts. |
| **Description** | Line-item explanation of the purchase *(e.g., `Train ticket to client site`)*. |
| **Customer to Reinvoice** | Optional debtor partner to whom the expense should be recharged on the next sales invoice. |
| **Analytic Distribution** | Cost center allocations attributing expenses to specific analytical projects or departments. |
| **Taxes** | Applicable input VAT rate applied to the expenditure *(e.g., `21% BTW` or zero-rated)*. |
| **Subtotal In Currency** | Receipt amount denominated in original transaction currency if foreign exchange applies. |
| **Subtotal** | Net line amount before tax calculated in company base currency *(e.g., `€ 75.00`)*. |

### 3. Create Expense Lines Modal Fields

Opened when clicking **Add a line** on the expense report form to encode individual receipts:

| Field Name | Description |
| :--- | :--- |
| **Description** | Operational narrative of the purchase *(e.g., `Train ticket to client headquarters`)*. |
| **Category** | Expense classification product mapping to statutory GL accounts *(e.g., `Travel Expenses`)*. |
| **Expense Date** | Calendar date recorded on the merchant receipt *(defaults to current date)*. |
| **Total** | Gross receipt payment figure including taxes *(e.g., `€ 75.00`)*. |
| **Account** | Specific general ledger expense account debited *(e.g., `7001010 Kosten van grond- en hulpstoffen`)*. |
| **Included taxes** | Deductible input tax codes applied to the expenditure line *(e.g., `Inkopen - BTW hoog`)*. |
| **Analytic Distribution** | Cost center allocations attributing expenses to specific analytical projects or departments. |
| **Employee** | The staff member submitting the receipt. |
| **Paid By** | Monetary source: `Employee (to reimburse)` or `Company`. |
| **Notes** | Free-text field for internal remarks or receipt details. |

### 4. Individual Expense Record Form Fields

When clicking an expense line from the report, CURQ opens the individual expense record detail view:

| Field Name | Description |
| :--- | :--- |
| **Attach Receipt** | Action button to upload supporting merchant receipts, scans, or PDF vouchers directly to this expense line. |
| **View Report** | Action button navigating directly to the parent expense report batch containing this expense line. |
| **Description** | Operational narrative of the purchase *(e.g., `Train ticket to client headquarters`)*. |
| **Category** | Expense classification product mapping to statutory GL accounts *(e.g., `Travel Expenses`)*. |
| **Total** | Gross receipt payment figure including taxes *(e.g., `€ 75.00`)*. |
| **Included taxes** | Applied input VAT rates and calculated tax amounts *(e.g., `Inkopen - BTW hoog (21%) € 13.02`)*. |
| **Employee** | The staff member who incurred the expense and receives reimbursement. |
| **Paid By** | Monetary source: `Employee (to reimburse)` (personal out-of-pocket payment) or `Company` (corporate card). |
| **Expense Date** | Calendar date recorded on the merchant receipt *(defaults to current date)*. |
| **Accounting Date** | Effective posting date assigned to the general ledger transaction *(defaults to expense date)*. |
| **Account** | Specific general ledger expense account debited *(e.g., `7001010 Kosten van grond- en hulpstoffen`)*. |
| **Analytic Distribution** | Cost center allocations attributing expenses to specific analytical projects or departments. |

### 5. Employee Expense Reimbursement Modal Fields (Pay Dialog)

Triggered by clicking **Pay** on a posted Expense Report to execute staff reimbursement:

| Field Name | Description |
| :--- | :--- |
| **Journal** | Liquidity journal disbursing the reimbursement payment *(e.g., `Bank`)*. |
| **Payment Method** | Disbursement mode selected for the payment transfer *(defaults to `Manual Payment`)*. |
| **Recipient Bank Account** | The claimant employee verified IBAN / bank account number. |
| **Amount** | Total financial disbursement figure allocated to clear the expense claim *(e.g., `€ 75.00 EUR`)*. |
| **Payment Date** | Execution or booking date of the bank disbursement transaction. |
| **Memo** | Reference note recorded on the journal payment line *(defaults to the Expense Report Summary)*. |
| **Create Payment** | Action button executing the payment move and advancing document status to `Done` (`In Payment`). |
| **Discard** | Cancels payment entry creation and returns to the posted expense voucher without changes. |

### 6. Expense Document Status Pipelines

#### Expense Report Lifecycle
| Field Name | Description |
| :--- | :--- |
| **To Submit** | Draft report. Receipts and line items can be freely added, modified, or removed. |
| **Submitted** | Staged for managerial review. Awaiting supervisor approval. |
| **Approved** | Authorized by management. Awaiting finance team audit and GL posting. |
| **Posted** | Accounting entries posted to the general ledger; payable balance recorded. |
| **Done** | Payment disbursed and settled; employee payable cleared to zero. |
| **Refused** | Rejected by management or finance. Returned to draft status for employee correction. |

#### Individual Expense Line Lifecycle
| Field Name | Description |
| :--- | :--- |
| **To Report** | Individual expense recorded independently but not yet attached to an Expense Report batch. |
| **To Submit** | Attached to a draft Expense Report batch awaiting submission. |
| **Submitted** | Included in an Expense Report currently awaiting managerial approval. |
| **Approved** | Approved by management as part of the report batch; ready for GL posting. |
| **Done** | The parent report has been posted and reimbursed; lifecycle complete. |

---

## Products Catalog List View Field Definitions

Navigating to **Customers > Products** or **Vendors > Products** opens the central accounting product catalog:

| Field Name | Description |
| :--- | :--- |
| **Internal Reference** | Unique SKU code or internal accounting product identifier *(e.g., `COMM`, `EXP_GEN`, `GIFT`, `FOOD`, `MIL`)*. |
| **Name** | Primary commercial and legal description of the goods or services rendered. |
| **Sales Price** | Base unit sales price automatically loaded onto customer invoice lines before partner discounts. |
| **Sales Taxes** | Default output VAT rule applied when invoicing customers *(e.g., `Verkopen - BTW hoog (21%)`)*. |
| **Purchase Taxes** | Default input VAT rule applied when receiving vendor bills *(e.g., `Inkopen - BTW hoog (21%)`)*. |

---

## Customers and Vendors Directory Field Definitions

Navigating to **Customers > Customers** or **Vendors > Vendors** displays counterparty ledgers filtered by commercial billing status:

| Field Name | Description |
| :--- | :--- |
| **Partner Name** | Formal business name or individual counterparty identity *(e.g., `Acme Technologies`, `John Doe`)*. |
| **Location & Contact** | Primary registered address and official accounting email address. |
| **Status Tags** | Operational role tags *(e.g., `Vendor`, `Customer`, `Website Form`)* identifying commercial relationships. |
| **Sales / Purchase Count** | Smart button icon indicating the volume of confirmed commercial orders for this partner. |
| **Invoice / Bill Count** | Smart button icon indicating the cumulative volume of customer invoices or vendor bills issued. |
| **Total Billed Balance** | Real-time lifetime financial value transacted with this partner *(e.g., `$ 2` or `$ 0`)*. |

---

## Related Documentation

* [Create and Validate Customer Invoices](../task-guides/01-create-and-validate-customer-invoices.md)
* [Issue and Manage Customer Credit Notes](../task-guides/09-issue-and-manage-customer-credit-notes.md)
* [Create and Process Vendor Bills](../task-guides/02-create-and-process-vendor-bills.md)
* [Process and Reimburse Employee Expenses](../task-guides/17-process-and-reimburse-employee-expenses.md)
* [Process Your First Customer Invoice and Payment](../getting-started/01-process-your-first-customer-invoice-and-payment.md)
* [Understanding Double-Entry Bookkeeping and Journals](../core-concepts/01-understanding-double-entry-bookkeeping-and-journals.md)
