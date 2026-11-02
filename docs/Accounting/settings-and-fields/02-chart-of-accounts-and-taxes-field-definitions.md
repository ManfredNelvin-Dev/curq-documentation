# Chart of Accounts, Taxes, and Journals Field Definitions

This document provides factual technical specifications, field behaviors, and configuration dictionaries for the Chart of Accounts (COA), Tax rules, Financial Journals, and Fiscal Positions in CURQ Accounting.

---

## Chart of Accounts Field Definitions

The Chart of Accounts establishes the complete ledger account hierarchy under the Dutch Reference Chart of Accounts (*Referentie Grootboekschema - RGS*).

Navigate to: **Accounting > Configuration > Chart of Accounts**

### Header Fields
| Field Name | Description |
| :--- | :--- |
| **Code** | Unique numerical identifier for the general ledger account *(e.g., `1002010` for Bank Current Account or `1101010` for Accounts Receivable)*. Determines sorting order and RGS class grouping. |
| **Account Name** | The formal accounting title displayed across balance sheets, trial balances, and journal vouchers *(e.g., `Rekening-courant bank` or `Handelsdebiteuren nominaal`)*. |

### Accounting Tab
| Field Name | Description |
| :--- | :--- |
| **Asset Profile** | Links a fixed asset depreciation model *(e.g., `Inventaris`)* to the account. When this account is selected on a vendor bill line, CURQ automatically creates a linked capital asset record. |
| **Type** | The fundamental financial classification governing ledger behavior, normal balance polarity, and financial statement routing: `Receivable`, `Payable`, `Bank and Cash`, `Current Assets`, `Non-current Assets`, `Prepayments`, `Current Liabilities`, `Non-current Liabilities`, `Equity`, `Current Year Earnings`, `Operating Income`, `Other Income`, `Expenses`, `Depreciation`, or `Cost of Revenue`. |
| **Default Taxes** | Standard tax codes automatically inserted into invoice or bill lines when this ledger account is selected manually *(e.g., `Verkopen - BTW hoog (21%)`)*. |
| **Tags** | Reporting labels assigned for statutory tax declarations, cash flow statements, or specialized financial ratio analysis *(e.g., `Tegoeden op bankgirorekeningen`)*. |
| **Allowed Journals** | Restricts the use of this general ledger account strictly to designated journals *(e.g., allowing `1002010` only inside the `Bank` journal)*. If left empty, the account is selectable across all journals. |
| **Account Currency** | Forces all journal entries on this account to be denominated in a specific foreign currency *(e.g., `USD`)*. If left empty, the account accepts transactions in the company base currency (`EUR`). |
| **Deprecated** | Checkbox that deactivates the account. Prevents any future transactions from selecting this account while preserving historical audit records and prior financial reports. |
| **Centralized** | When enabled, entries recorded in this account during journal entry validation are summarized into a single consolidated journal item rather than multiple detailed lines. |
| **Group** | Dutch RGS parent hierarchy classification grouping accounts into standardized categories *(e.g., `1002 Tegoeden op bankgirorekeningen`)*. |
| **Referentiecode** | Technical reference code under the Dutch Reference Chart of Accounts (*Referentie Grootboekschema - RGS*) linking the account directly to statutory SBR/XBRL reporting boxes *(e.g., `BLimBanRba`)*. |

---

## Tax Configuration Field Definitions

Taxes define the calculation algorithms, VAT rates, and general ledger distribution rules applied across commercial documents and tax returns (*BTW-aangifte*).

Navigate to: **Accounting > Configuration > Taxes**

### Header Fields
| Field Name | Description |
| :--- | :--- |
| **Tax Name** | The operational name displayed to users on invoices, bills, and tax configuration lists *(e.g., `Verkopen - BTW hoog (21%)`)*. |
| **Tax Computation** | The mathematical logic applied to line net amounts: `Percentage` *(standard percentage rate)*, `Fixed` *(flat monetary levy)*, `Group of Taxes` *(bundles multiple sub-taxes)*, or `Percentage of Price Tax Included` *(gross pricing)*. |
| **Active** | Toggle switch enabling or archiving the tax rule. Archiving prevents selection on new lines without altering historical invoices. |
| **Tax Type** | Restricts the tax rule to a specific commercial workflow: `Sales` *(customer invoices)*, `Purchases` *(vendor bills)*, or `None` *(miscellaneous adjustments)*. |
| **Tax Scope** | Differentiates applicability between physical merchandise (`Goods`) and professional services (`Services`) for EU tax reporting. |
| **Amount** | The numerical rate or monetary amount applied by the computation formula *(e.g., `21.0000 %` for standard Dutch high VAT)*. |

### Definition Tab
Configures the general ledger split and tax return box mapping for invoices and credit notes.

#### 1. Distribution for Invoices
| Field Name | Description |
| :--- | :--- |
| **% Based On** | The computation base for this distribution row: `Base` *(allocates the untaxed line amount to the revenue/expense account)* or `% of tax` *(e.g., `100.00 of tax` allocating the tax amount)*. |
| **Account** | The destination general ledger account where this distribution line is posted *(e.g., `1205010.00 Af te dragen BTW hoog tarief` for VAT payable)*. Left empty for the base row so the revenue/expense account from the product line is used. |
| **Tax Grids** | Statutory Dutch VAT return (*BTW-aangifte*) boxes affected by the transaction *(e.g., `+1a (omzet)` for high-rate turnover and `+1a (BTW)` for high-rate VAT payable)*. |

#### 2. Distribution for Refunds
| Field Name | Description |
| :--- | :--- |
| **% Based On** | The computation base applied when credit notes or vendor refunds are posted (`Base` or `% of tax`). |
| **Account** | The destination general ledger account where the corrective credit note line is posted *(e.g., `1205010.00 Af te dragen BTW hoog tarief`)*. |
| **Tax Grids** | Reversing statutory tax return boxes assigned to credit notes *(e.g., `-1a (omzet)` and `-1a (BTW)`)*. |

### Advanced Options Tab
Configures document presentation, grouping, and compound calculation behavior.

| Field Name | Description |
| :--- | :--- |
| **Label on Invoices** | Short tax code printed directly on customer-facing invoice PDFs *(e.g., `21% VAT`)*. |
| **Description** | Internal descriptive text explaining the tax rate *(e.g., `21% BTW`)*. |
| **Tax Group** | Aggregation category used to summarize taxes on printed invoices and financial reports *(e.g., `BTW Hoog`)*. |
| **Include in Analytic Cost** | When enabled, includes the computed tax amount in analytic cost distributions. |
| **Country** | The sovereign jurisdiction governing the tax rule *(defaults to `Netherlands`)*. |
| **Legal Notes** | Statutory legal notes, tax treaty clauses, or reverse-charge disclaimers printed on customer invoices. |
| **Included in Price** | Governs whether catalog unit prices include this tax by default: `Default`, `Tax Included`, or `Tax Excluded`. |
| **Affect Base of Subsequent Taxes** | When enabled within grouped taxes, adds this tax amount into the taxable base for subsequent tax layers *(compound tax)*. |
| **Base Affected by Previous Taxes** | Checkbox indicating that the taxable base for this rate incorporates taxes computed in earlier stages of a tax group. |

---

## Financial Journals Field Definitions

Journals segregate double-entry transactions into dedicated operational sub-ledgers with independent chronological numbering sequences.

Navigate to: **Accounting > Configuration > Journals**

### Header Fields
| Field Name | Description |
| :--- | :--- |
| **Journal Name** | Formal ledger name displayed on transaction forms, dashboards, and audit trails *(e.g., `Bank`, `Customer Invoices`, `Vendor Bills`, or `Miscellaneous Operations`)*. |
| **Type** | Governs entry constraints, sequence behavior, and UI actions: `Sale` *(customer billing)*, `Purchase` *(vendor bills)*, `Cash` *(cash registers)*, `Bank` *(electronic statements)*, or `General` *(manual adjustments and asset depreciations)*. |
| **Operating Unit** | Organizational division or operational branch associated with transactions posted inside this journal. |

### Journal Entries Tab
Configures primary accounting accounts, reconciliation parameters, and bank feed methods.

#### 1. Accounting Information
| Field Name | Description |
| :--- | :--- |
| **Bank Account** | General ledger liquidity account linked to this journal *(e.g., `1002010 Rekening-courant bank`)*. For `Sale` journals, this field is replaced by `Default Income Account`; for `Purchase` journals, it is replaced by `Default Expense Account`. |
| **Reconcile Mode** | The operational method used to process bank statement reconciliation *(e.g., `Edit Move`)*. |
| **Reconcile aggregation** | Aggregation strategy applied when multiple statement lines match against journal items. |
| **Suspense Account** | Interim transit account *(e.g., `1002016 Bank Suspense Account`)* holding unreconciled electronic bank statement lines until formally matched against open invoices, bills, or GL accounts. |
| **Profit Account** | Profit & Loss account absorbing realized positive cash/currency rounding differences during reconciliation *(e.g., `4210070 Betalingsverschillen`)*. |
| **Loss Account** | Profit & Loss account absorbing realized negative cash/currency rounding differences during reconciliation *(e.g., `4210070 Betalingsverschillen`)*. |
| **Dedicated Payment Sequence** | When enabled, generates payments processed through this journal using an independent sequential numbering rule rather than sharing the general journal entry sequence. |
| **Short Code** | Compact 3 to 5 character prefix used to construct statutory document numbers *(e.g., `BNK1` for bank moves, `INV` for customer invoices, `BILL` for vendor bills)*. |
| **Currency** | Dedicated currency for foreign bank accounts *(e.g., `USD`)*. If left blank, the journal operates in company currency (`EUR`). |

#### 2. Bank Account Number
| Field Name | Description |
| :--- | :--- |
| **Account Number** | The company's official International Bank Account Number (IBAN) or bank account number. |
| **Bank Feeds** | The method used to synchronize bank transactions into CURQ: `Import (OCA) (TXT/CSV/XSLX, camt.053.001.02, camt.054.001.02)` for manual file imports, `Undefined Yet` for manual entry, `Mollie Synchronization` for Mollie gateway integration, or `Online (OCA)` for live automated banking feeds. |

### Incoming Payments Tab
Defines the settlement methods and clearing accounts for customer payments.

| Field Name | Description |
| :--- | :--- |
| **Payment Method** | System-supported inbound payment protocol *(e.g., `[manual] Manual Payment (inbound)`, `[sepa_direct_debit] SEPA Direct Debit for customers (inbound)`, or `[demo] Demo (inbound)`)*. |
| **Name** | Display title for the payment method displayed to users when registering payments. |
| **Outstanding Receipts accounts** | Interim clearing account *(e.g., `1002017 Outstanding Receipts`)* where customer payments are staged upon registration until electronic bank statement reconciliation clears them into the main bank account. |

### Outgoing Payments Tab
Defines the disbursement methods and clearing accounts for supplier payments.

| Field Name | Description |
| :--- | :--- |
| **Payment Method** | System-supported outbound disbursement protocol *(e.g., `[manual] Manual Payment (outbound)` or `[sepa_credit_transfer] SEPA Credit Transfer to suppliers (outbound)`)*. |
| **Name** | Display title for the payment method displayed when registering vendor bill payments. |
| **Outstanding Payments accounts** | Interim clearing account where vendor disbursements are staged until electronic bank statement reconciliation confirms settlement. |

### Advanced Settings Tab
Configures posting controls, lock dates, and statement import mapping.

#### 1. Control-Access
| Field Name | Description |
| :--- | :--- |
| **Allowed accounts** | Restricts which general ledger accounts can be manually posted into this journal. If left empty (`Keep empty for no control`), any active account is selectable. |
| **Add balance Line ?** | When enabled, automatically generates an offsetting balance line on journal entries created within this journal. |
| **Lock Date ?** | Journal-specific accounting lock date. Transactions dated on or before this date cannot be posted or edited in this journal. |
| **Lock Date for Non-Advisers ?** | Journal-specific lock date restricting entry modifications for standard accounting users, while allowing senior advisers/controllers access. |
| **Auto-Check on Post** | When enabled, automatically marks journal entries as reviewed (`Checked`) upon posting. |

#### 2. Statement Import Map
| Field Name | Description |
| :--- | :--- |
| **Default Sheet Mapping** | Preconfigured spreadsheet and column mapping profile used when parsing imported bank statement files. |

---

## Fiscal Positions Field Definitions

Fiscal Positions automatically translate product default taxes and income/expense accounts based on counterparty geographic jurisdiction and VAT registration status.

Navigate to: **Accounting > Configuration > Fiscal Positions**

### Header Fields
| Field Name | Description |
| :--- | :--- |
| **Fiscal Position** | Descriptive title identifying the tax policy *(e.g., `EU landen`, `Niet-EU landen`, or `National`)*. |
| **Detect Automatically ?** | Enables automatic assignment of this tax profile on customer sales orders, customer invoices, and vendor bills when partner address criteria match. |
| **VAT required ?** | Requires the partner record to have a verified VAT identification number before the fiscal position can be applied automatically *(mandatory for intra-EU B2B reverse charge)*. |
| **Foreign Tax ID ?** | Directs CURQ to record and display the partner's foreign VAT registration number on invoices. |
| **Country Group ?** | Automatically triggers the fiscal position when the delivery or billing address belongs to an established economic area *(e.g., `European Union`)*. |
| **Country ?** | Restricts automatic trigger strictly to a specific sovereign state *(e.g., `Germany` or `Belgium`)*. |

### Tax Mapping Tab
Translates catalog taxes to destination fiscal taxes.

| Field Name | Description |
| :--- | :--- |
| **Tax on Product** | The default baseline tax assigned to products in the catalog *(e.g., `Verkopen - BTW hoog (21%) (Sales)` or `Inkopen - BTW hoog (21%) (Purchases)`)*. |
| **Tax to Apply** | The replacement tax substituted by CURQ when this fiscal position is active *(e.g., mapped to `Verkopen - Export goederen binnen EU (Sales)` or `Inkopen - Import binnen EU hoog (21%) (Purchases)`)*. |

### Account Mapping Tab
Redirects income and expense accounts to specialized foreign or export general ledger accounts.

| Field Name | Description |
| :--- | :--- |
| **Account on Product** | The standard general ledger account assigned to product categories *(e.g., domestic sales `8001010 Netto-omzet uit leveringen geproduceerde goederen`)*. |
| **Account to Use Instead** | The destination replacement account where revenue or expenses are redirected *(e.g., intra-EU export sales `8001020 Netto-omzet EU`)*. |

### Common Fields
| Field Name | Description |
| :--- | :--- |
| **Legal Notes** | Multi-line text field at the bottom of the form for statutory disclaimers, VAT directive exemptions, or reverse-charge clauses printed on customer invoices. |

---

## Related Documentation

* [Statutory Tax Statement and ICP Field Definitions](./03-statutory-tax-statement-and-icp-field-definitions.md)
* [File Statutory VAT Returns and ICP Declaration](../task-guides/08-file-statutory-vat-returns-and-icp-declaration.md)
* [Generate Financial Reports and Trial Balance](../task-guides/07-generate-financial-reports-and-trial-balance.md)
* [Understanding Double-Entry Bookkeeping and Journals](../core-concepts/01-understanding-double-entry-bookkeeping-and-journals.md)
