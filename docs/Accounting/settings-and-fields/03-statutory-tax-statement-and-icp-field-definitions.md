# Statutory Tax Statement and ICP Field Definitions

This document provides factual technical specifications, field behaviors, column definitions, and lifecycle state machines for the Dutch VAT return (*NL BTW Statement*) and European Sales Listing (*ICP Statement*) in CURQ Accounting.

---

## Header Fields

The header section establishes the reporting legal entity, calendar boundaries, calculation rules, and operational timestamps for the tax declaration.

Navigate to: **Accounting > Reporting > NL BTW Statement**

| Field Name | Description |
| :--- | :--- |
| **Tax Statement Title** | The unique identifier and display title for the tax declaration *(e.g., `Company Name: 2026-01-01 2026-12-31` or `BTW 2026 Q3`)*. Combines company entity and date interval. |
| **NL Tax Invoice Basis** | Checkbox governing calculation methodology. When enabled, taxes are computed based on the legal invoice date (*Factuurstelsel* / Invoice System). When disabled, transactions are calculated according to general ledger posting dates. |
| **Date range** | Dropdown selector allowing fast configuration of standard statutory intervals *(e.g., `Quarter 1`, `Quarter 2`, `Month 10`, `Fiscal Year 2026`)*. |
| **Date (From / To)** | Explicit calendar boundaries restricting which journal items are evaluated by the statement calculation engine *(e.g., `01/01/2026` to `12/31/2026`)*. |
| **Date Posted** | Timestamp recorded automatically when the document is advanced to **Posted** state *(e.g., `10/29/2026 13:28:10`)*. Empty during Draft. |
| **Date Update** | Timestamp indicating the last moment the statement calculation engine was executed via the **Update** button *(e.g., `10/29/2026 13:22:12`)*. |
| **Currency** | Base operational currency governing all monetary calculations on the return *(defaults to company base currency `EUR`)*. |

---

## BTW Statement Tab Columns and Tax Box Specifications

The **BTW Statement** tab displays the aggregated tax declaration matrix structured according to statutory Dutch Belastingdienst reporting categories.

### Table Columns
| Field Name | Description |
| :--- | :--- |
| **Code** | Official statutory tax box identifier defined by the Dutch Tax and Customs Administration *(e.g., `1a`, `3a`, `4a`, `5b`, `5g`)*. |
| **Name** | Formal Dutch tax rubric title describing the legal transaction category *(e.g., `Leveringen/diensten belast met hoog tarief`)*. |
| **Turnover** | Aggregated untaxed net revenue or procurement base amount subject to this tax category. Clicking the magnifying glass displays contributing journal items. |
| **VAT** | Calculated monetary sales tax payable or deductible for this box. Clicking the magnifying glass displays contributing journal items. |

### Statutory Tax Box Definitions (Rubrieken 1 t/m 5)
| Field Name | Description |
| :--- | :--- |
| **`1a`** (*Leveringen/diensten belast met hoog tarief*) | Evaluates credit lines on income accounts with high VAT (`+1a (omzet)`) and tax account `1205010.00` (`+1a (BTW)`). Standard 21% domestic sales. |
| **`1b`** (*Leveringen/diensten belast met laag tarief*) | Evaluates reduced 9% domestic sales turnover and output VAT payable (`+1b`). |
| **`1c`** (*Leveringen/diensten belast met overige tarieven*) | Specialized domestic commercial transactions subject to alternate non-standard tax rates. |
| **`1d`** (*Privé-gebruik*) | Tax adjustments for personal usage of company vehicles, equipment, or assets. |
| **`1e`** (*Leveringen/diensten belast met 0%*) | Domestic zero-rated sales (excluding cross-border export transactions). |
| **`2a`** (*Verleggingsregelingen binnenland*) | Domestic transactions where the VAT liability is legally shifted to the recipient. |
| **`3a`** (*Leveringen naar landen buiten de EU*) | Non-EU export sales (0% VAT). Reports turnover under tax grid `+3a`. Zero output VAT accrued. |
| **`3b`** (*Leveringen naar landen binnen de EU*) | Intra-Community Deliveries (ICL) of goods and B2B services delivered to EU business customers (0% VAT). Reports turnover under tax grid `+3b`. |
| **`3c`** (*Installatie/afstandsverkopen binnen de EU*) | Cross-border installation contracts and eligible EU distance sales to non-taxable persons. |
| **`4a`** (*Verwerving uit landen buiten de EU*) | Reverse charge VAT payable on imports from outside the European Union. |
| **`4b`** (*Verwerving van goederen uit landen binnen de EU*) | Intra-Community Acquisitions (ICA) from suppliers located in other EU member states. |
| **`5a`** (*Verschuldigde omzetbelasting*) | Aggregated gross output VAT payable: $\text{Box 1a} + \text{1b} + \text{1c} + \text{1d} + \text{2a} + \text{4a} + \text{4b}$. |
| **`5b`** (*Voorbelasting*) | Input tax deduction: Total VAT paid on operational purchases and vendor bills (`5b`), credited against output liabilities. |
| **`5c`** (*Subtotaal*) | Net periodic tax position before small business reductions: $\text{Box 5a} - \text{Box 5b}$. |
| **`5d`** (*Kleineondernemersregeling (KOR)*) | Statutory tax reduction applied under the Dutch small businesses scheme. |
| **`5g`** (*Total 5c + 5d*) | Final monetary settlement with the Belastingdienst: Positive balance represents net tax payable; negative balance represents net tax refundable. |

---

## Past Undeclared Moves Tab Fields

The **Past Undeclared Moves** tab enables capturing late-posted invoices from closed prior tax periods without filing an independent supplementary return (*suppletie-aangifte*).

| Field Name | Description |
| :--- | :--- |
| **From Date** | Date filter defining the historical scan cutoff. CURQ queries all unfinalized moves with transaction dates between this date and the statement start date. |
| **Date** | Legal transaction date recorded on the late-posted invoice or vendor bill. |
| **Number** | System document sequence number *(e.g., `INV/2025/00142` or `BILL/2025/11/0003`)*. |
| **Journal** | The financial sub-ledger where the late entry was posted *(e.g., `Customer Invoices` or `Vendor Bills`)*. |
| **Partner** | The counterparty customer or vendor associated with the entry. |
| **Untaxed Amount** | Net line subtotal excluding taxes. |
| **Tax** | Total VAT monetary amount assigned to the late transaction. |
| **Include in VAT** | Selection checkbox. When enabled, including the transaction absorbs its turnover and VAT directly into the current period's declaration lines upon clicking **Update**. |

---

## ICP Statement Tab Columns

The **ICP Statement** tab compiles the statutory Intra-Community Transactions Declaration (*Opgaaf intracommunautaire prestaties - ICP*) for supplies to VAT-registered businesses across the European Union.

| Field Name | Description |
| :--- | :--- |
| **Partner** | The legal corporate name of the EU customer receiving the cross-border goods or services. |
| **Country Code** | 2-letter European Union member state ISO code derived from the customer's verified delivery/billing address *(e.g., `BE`, `DE`, `FR`, `IT`)*. |
| **Format Vat** | The customer's European VAT registration number, stripped of punctuation and validated against the European VIES database. |
| **Currency** | Transaction reporting currency (`EUR`). |
| **Amount Products** | Total untaxed turnover from physical merchandise delivered to the customer under intra-community supply rules. |
| **Amount Services** | Total untaxed turnover from cross-border professional services delivered to the customer. |
| **Total ICP amount** | Bottom summary row aggregating total EU cross-border turnover. Must strictly reconcile with **Box `3b`** on the main BTW Statement. |

---

## Document Status Lifecycle

The NL BTW Statement progresses through three formal operational and legal states:

| Field Name | Description |
| :--- | :--- |
| **Draft** | Exploratory statement. Calculations can be freely recomputed using the **Update** button. Date boundaries, invoice basis, and included historical moves can be changed or deleted. |
| **Posted** | Legally staged return. Calculations are frozen and official statutory PDF/Excel exports are enabled. Statement lines and date boundaries are locked. The **Past Undeclared Moves** tab is hidden. Can be reverted using **Reset to Draft**. |
| **Final** | Period officially submitted to the Belastingdienst and closed. Completely immutable. Transactions included in this statement cannot be altered or included in future declarations. |

---

## Statutory Export Formats

Generated via the **gear icon** > **Print** menu on posted statements:

| Field Name | Description |
| :--- | :--- |
| **NL Tax Statement (PDF)** | Official summary report matching the Dutch Belastingdienst layout for corporate archival. |
| **NL Tax Statement XLS export (XLSX)** | Comprehensive multi-tab spreadsheet containing all declaration boxes, formulas, and contributing move references for audit trails. |
| **NL ICP Statement (PDF)** | Formal Intra-Community Transactions summary document. |
| **NL ICP Statement XLS export (XLSX)** | Structured spreadsheet formatted for batch upload into the Dutch tax authority's ICP submission portal. |

---

## Auditfile Export Registry Fields

The Auditfile export registry lists compiled Belastingdienst XML audit files under **Reporting > OCA accounting reports > Auditfile export**.

| Field Name | Description |
| :--- | :--- |
| **Name** | Descriptive name of the statutory audit file *(e.g., `Statutory Auditfile FY2025`)*. |
| **Start date** | Earliest accounting transaction date included in the XML export. |
| **End date** | Latest accounting transaction date included in the XML export. |
| **Date generated** | System timestamp recording when the audit file was compiled. |

---

## Auditfile Export Form Fields

Configured when clicking **+ New** on the Auditfile export registry:

| Field Name | Description |
| :--- | :--- |
| **Generate auditfile** | Action button in the header to compile and generate the statutory XAF 3.2 XML data file. |
| **Name** | Descriptive name or reference for the statutory auditfile *(e.g., `Auditfile FY2026`)*. |
| **Start date** | Earliest calendar date of accounting transactions to be evaluated *(e.g., `01/01/2026`)*. |
| **End date** | Closing calendar date of the accounting period included in the export *(e.g., `12/31/2026`)*. |
| **Unit4 ?** | Checkbox option to format XML elements according to Unit4 Multivers accounting integration standards. |

---

## Related Documentation

* [File Statutory VAT Returns and ICP Declaration](../task-guides/08-file-statutory-vat-returns-and-icp-declaration.md)
* [Export Statutory Tax Auditfiles (XAF 3.2)](../task-guides/16-export-statutory-tax-auditfiles.md)
* [Chart of Accounts, Taxes, and Journals Field Definitions](./02-chart-of-accounts-and-taxes-field-definitions.md)
* [Generate Financial Reports and Trial Balance](../task-guides/07-generate-financial-reports-and-trial-balance.md)
