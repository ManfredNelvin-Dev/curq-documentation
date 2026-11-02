# Contract and Recurring Invoicing Field Definitions (Customer and Supplier)

This reference document provides comprehensive field definitions, data requirements, recurrence options, and operational rules for all fields and controls across both Customer Contracts and Supplier Contracts in CURQ.

---

## Contract Header Fields

The header block captures core contract identification, counterparty details, responsible staff, commercial terms, and master start and end dates.

### 1. General Information
| Field Name | Description |
| :--- | :--- |
| **Contract Name** | Descriptive title identifying the agreement *(e.g., `Cloud Hosting & Maintenance` or `Datacenter Colocation Lease 2026`)*. Displayed on contract overviews and counterparty documents. |
| **Customer / Supplier** | Partner entity legally and financially bound to the contract. On sales contracts, this is the debtor customer; on purchase contracts, this is the creditor supplier. |
| **Payment Mode** | Payment collection or settlement method *(e.g., `Direct debit` for customer collections or `SEPA Credit Transfer` for vendor disbursements)*. |
| **Responsible** | Internal commercial representative, buyer, or accountant overseeing the contract account. |
| **Recurrence at line level?** | Checkbox toggle. When unchecked, all contract lines share the global schedule defined under the **Invoicing** tab. When checked, each contract line can define its own recurrence cadence. |
| **Date Start** | Official commencement date of the subscription agreement *(defaults to current date, e.g., `10/30/2026`)*. Invoicing periods calculate from this date. |

### 2. Commercial and Scheduling Settings
| Field Name | Description |
| :--- | :--- |
| **Contract Template** | Standardized configuration blueprint that automatically populates default journals, line items, and invoicing intervals *(e.g., `Standard SaaS Monthly`)*. |
| **Pricelist** | Commercial pricing catalog applied to determine unit prices and currency rates for billed items *(e.g., `Default (EUR)`)*. |
| **Tags** | Categorization labels used for filtering, commercial grouping, and managerial reporting. |
| **Date End** | Optional final termination date for the contract. When reached, automated recurring invoicing permanently ceases. |
| **Date of Next Invoice** | Calendar date on which the upcoming recurring invoice or vendor bill will be generated *(e.g., `10/30/2026`)*. Calculated automatically by CURQ and advanced after each billing run. |

---

## Recurring Invoices Tab Columns

The **Recurring Invoices** tab lists the individual merchandise, services, software licenses, or retainers billed under the contract.

| Field Name | Description |
| :--- | :--- |
| **Product** | The specific inventory item or service billed on each recurrence cycle. |
| **Description** | Text printed on the generated invoice line. Supports dynamic billing date markers. |
| **Analytic Distribution** | Cost center allocations dividing subscription revenues across analytical projects, departments, or contracts *(labeled `Analytic Dist...` in the UI)*. |
| **Quantity** | Number of units, hours, or subscription seats billed per period. |
| **Unit of Measure** | Delivery or accounting unit of measurement *(e.g., `Units`, `Hours`, `Months`)* *(labeled `Unit of Mea...` in the UI)*. |
| **Auto-price?** | Checkbox enabling automatic price synchronization with the assigned pricelist. |
| **Unit Price** | Contractual price per unit charged before line-item discounts. |
| **Discount (%)** | Percentage discount applied to the gross unit price. |
| **Sub Total** | Computed net line amount for the periodic invoice after quantity and discount calculations. |
| **Date End** | Specific date on which recurring billing stops for this individual line item. |
| **Last Date Invoiced** | System timestamp recording the last time this specific line was converted into a customer invoice *(labeled `Last Date...` in the UI)*. |

### Tab Actions and Notes
| Field Name | Description |
| :--- | :--- |
| **Add a line** | Appends a new subscription product or service line to the contract. |
| **Add a section** | Inserts a visual header separator to organize related products into distinct groups. |
| **Add a note** | Inserts an explanatory text line that appears on contract printouts and invoices. |
| **Internal Notes Field** | Free-text area *(labeled `Put some note here...`)* for entering customer-facing instructions, payment stipulations, or internal administrative notes. |

---

## Invoicing Tab Fields

The **Invoicing** tab configures the billing mechanics, financial sub-ledgers, tax mapping rules, and document generation types.

### 1. Invoicing Schedule Fields
| Field Name | Description |
| :--- | :--- |
| **Invoicing type** | Determines when invoices generate relative to the subscription service period: `Pre-paid` *(invoices at the beginning of the service window)* or `Post-paid` *(invoices in arrears at the end of the service window)*. |
| **Invoice Every** | Numeric frequency value combined with the interval unit dictating recurrence frequency *(e.g., `1 Month(s)`, `3 Month(s)`, `1 Year(s)`)*. |
| **Interval Unit** | Recurrence time scale: `Days`, `Weeks`, `Months`, `Last Day of Month`, or `Years`. |

### 2. Accounting and Partner Rules
| Field Name | Description |
| :--- | :--- |
| **Invoicing contact** | Designated individual or department at the customer or supplier organization receiving billing notices *(e.g., `Acme Technologies`)*. |
| **Fiscal Position** | Tax mapping rule adapting domestic taxes to cross-border, intra-community EU, or tax-exempt transactions *(e.g., `Niet-EU landen` or `EU B2B Reverse Charge`)*. |
| **Journal** | The financial sub-ledger where recurring entries post *(defaults to `Customer Invoices` on customer contracts and `Vendor Bills` on supplier contracts)*. |
| **Payment Terms** | Credit and settlement schedule applied to generated documents *(e.g., `45 Days` or `30 Days`)*. |

### 3. Recurring Type
| Field Name | Description |
| :--- | :--- |
| **Generation Type** | Document output produced by the recurring engine: `Invoice` *(generates customer billing documents or vendor bills according to contract type)*. |

---

## Modifications Tab Columns

The **Modifications** tab maintains an immutable audit trail of contract amendments, rate adjustments, scope changes, and legal revisions.

| Field Name | Description |
| :--- | :--- |
| **Date** | Calendar date on which the contract modification or amendment was executed. |
| **Description** | Detailed summary of the contractual revision *(e.g., `Scope upgrade to 25 user licenses`, `Annual rate adjustment per CPI`)*. |
| **Sent** | Audit checkbox recording whether the formal amendment notice was dispatched to the customer or supplier. |
| **Add a line** | Adds a new modification entry to the contract history log. |

---

## Other Information Tab Fields

The **Other Information** tab captures administrative references, reporting groups, transaction currencies, and reference guides for dynamic text markers.

### 1. Contract Identification and Grouping
| Field Name | Description |
| :--- | :--- |
| **Reference** | External customer purchase order (PO) number, supplier agreement code, tender identifier, or internal tracking code. |
| **Group** | Commercial or operational classification grouping related contracts for reporting. |
| **Currency** | Currency in which the contract lines and generated invoices calculate *(e.g., `EUR`)*. |

### 2. Dynamic Description Markers
Text placeholders entered in line descriptions that CURQ replaces with computed billing period dates:

| Field Name | Description |
| :--- | :--- |
| **`#START#`** | The calendar start date of the invoiced subscription period *(e.g., `01/01/2026`)*. |
| **`#END#`** | The calendar end date of the invoiced subscription period *(e.g., `31/01/2026`)*. |
| **`#INVOICEMONTHNAME#`** | The text month name of the invoiced subscription period *(e.g., `January`)*. |

---

## Header Action Controls and Stat Buttons

| Field Name | Description |
| :--- | :--- |
| **Send by Email** | Opens the email composer with the contract terms and summary attached to transmit to the customer or supplier. |
| **Create invoices** | Immediately triggers invoice or vendor bill creation for the current billing cycle and advances **Date of Next Invoice**. |
| **Preview** | Opens the Counterparty Portal view displaying how the subscription agreement appears to the customer online. |
| **Invoices** | Stat button displaying the count of customer invoices or vendor bills generated from this contract *(e.g., `Invoices 1`)* and opening the filtered document list view. |

---

## Supplier Contract Specific Variations and Operational Rules

While Customer Contracts and Supplier Contracts share the underlying contract framework, key operational variations apply when managing recurring vendor agreements:

| Field Name | Description |
| :--- | :--- |
| **Counterparty Header** | On Customer Contracts, labeled **Customer** (debtor partner). On Supplier Contracts, labeled **Supplier** (creditor vendor with validated banking details). |
| **Default Journal** | Customer contracts default to `Customer Invoices` (sales sub-ledger); supplier contracts default to `Vendor Bills` (purchase sub-ledger). |
| **Output Document** | Customer contracts generate draft Customer Invoices (`INV/...`) debiting accounts receivable and crediting revenue; supplier contracts generate draft Vendor Bills (`BILL/...`) debiting operating expenses and crediting accounts payable. |
| **Batch Invoicing Menu** | Customer contracts are processed in bulk via **Accounting > Customers > Manually Invoice Sale Contracts**; supplier contracts are processed via **Accounting > Vendors > Manually Invoice Purchase Contracts**. |
| **Settlement Flow** | Customer contracts settle via customer payments, bank reconciliation, or SEPA Direct Debit collections; supplier contracts settle via vendor payments or electronic SEPA Credit Transfer payment batches. |

### Batch Contract Invoicing Wizard Fields

Used when generating customer invoices or vendor bills in bulk via **Accounting > Customers > Manually Invoice Sale Contracts** or **Accounting > Vendors > Manually Invoice Purchase Contracts**:

| Field Name | Description |
| :--- | :--- |
| **Invoice Date** | Cutoff calendar date. CURQ evaluates all active contracts whose `Date of Next Invoice` falls on or before this date and compiles their recurring draft documents. |
| **Cancel** | Closes the batch invoicing dialog without generating recurring invoices. |

---

## Customer Contract Lines Reporting Columns

Accessed via **Accounting > Reporting > Contracts > Customer Contract lines** to audit recurring customer line items across all contracts:

| Field Name | Description |
| :--- | :--- |
| **Contract** | Parent subscription agreement and descriptive title *(e.g., `Cloud Hosting & Maintenance - Acme Technologies`)*. |
| **Partner** | Billed customer debtor account *(e.g., `Acme Technologies`)*. |
| **Product** | Recurring service, license, or maintenance item *(e.g., `Cloud Hosting Standard`)*. |
| **Analytic Distribution** | Cost center allocations and project tracking parameters. |
| **Quantity** | Recurring volume delivered and invoiced per cycle *(e.g., `1.00`)*. |
| **Unit of Measure** | Commercial measurement unit *(e.g., `Units`)*. |
| **Unit Price** | Contracted unit rate billed before tax *(e.g., `99.00`)*. |
| **Discount (%)** | Percentage reduction deducted from line gross rate *(e.g., `0.00`)*. |
| **Sub Total** | Net cycle line turnover recognized before VAT *(e.g., `99.00`)*. |
| **Date Start** | Commencement calendar date of the subscription line *(e.g., `10/30/2026`)*. |
| **Date End** | Expiration or termination calendar date of the subscription line. |
| **Invoice Every** | Recurrence frequency numeric value *(e.g., `1`)*. |
| **Recurrence** | Recurrence frequency interval *(e.g., `Month(s)`)*. |
| **Date of Next Invoice** | Scheduled calendar date of the next automated billing run *(e.g., `11/30/2026`)*. |
| **Last Date Invoiced** | Ending calendar date of the most recently invoiced billing period *(e.g., `11/29/2026`)*. |

---

## Customer Contract Line Recurrence Parameters

Detail form view opened when selecting an individual contract line:

| Field Name | Description |
| :--- | :--- |
| **Product** | The recurring product or service item billed to the client. |
| **Auto-price?** | Checkbox dynamically re-evaluating price from client pricelist on each generation run. |
| **Unit Price** | Fixed agreed unit price applied when Auto-price is disabled *(e.g., `0.00`)*. |
| **Analytic Distribution** | Analytic accounts and percentage splits applied to line journal items. |
| **Quantity** | Unit volume billed per recurrence cycle *(e.g., `1.00`)*. |
| **Discount (%)** | Commercial concession percentage deducted from invoice unit price. |
| **Description** | Custom narrative or dynamic placeholder description printed on invoice lines. |
| **Invoice Every** | Numerical recurrence multiplier *(e.g., `1`)*. |
| **Recurrence (Interval Unit)** | Recurrence time unit *(e.g., `Month(s)`, `Day(s)`, `Week(s)`, `Year(s)`)*. |
| **Invoicing type** | Timing rule: `Pre-paid` *(billed in advance)* or `Post-paid` *(billed in arrears)*. |
| **Date Start** | Commencement date of line billing eligibility *(e.g., `10/30/2026`)*. |
| **Date End** | Final date of line billing eligibility. |
| **Next Period Start** | Beginning calendar date of the upcoming invoice cycle *(e.g., `10/30/2026`)*. |
| **Next Period End** | Ending calendar date of the upcoming invoice cycle *(e.g., `11/29/2026`)*. |
| **Last Date Invoiced** | Calendar date through which services were previously invoiced. |
| **Date of Next Invoice** | Scheduled execution date for next customer invoice generation. |

---

## Supplier Contract Lines Reporting Columns

Accessed via **Accounting > Reporting > Contracts > Supplier Contract lines** to audit recurring vendor expense commitments across all purchase contracts:

| Field Name | Description |
| :--- | :--- |
| **Contract** | Parent supplier agreement and descriptive title *(e.g., `Hardware Equipment Lease 2026`)*. |
| **Partner** | Creditor supplier vendor account *(e.g., `Acme Technologies`)*. |
| **Product** | Leased equipment, recurring subscription, or maintenance service *(e.g., `Fair Phone 5 (Orange)`)*. |
| **Analytic Distribution** | Cost center allocations and project expense tagging. |
| **Quantity** | Recurring procurement volume delivered per cycle *(e.g., `10.00`)*. |
| **Unit of Measure** | Commercial measurement unit *(e.g., `Units`)*. |
| **Unit Price** | Contracted procurement unit rate *(e.g., `99.00`)*. |
| **Discount (%)** | Supplier concession percentage applied to line gross rate *(e.g., `0.00`)*. |
| **Sub Total** | Net recurring procurement liability per cycle *(e.g., `990.00`)*. |
| **Date Start** | Commencement calendar date of the supplier contract line *(e.g., `10/30/2026`)*. |
| **Date End** | Expiration or termination calendar date of the lease or subscription. |
| **Invoice Every** | Recurrence frequency numeric value *(e.g., `1`)*. |
| **Recurrence** | Recurrence frequency interval *(e.g., `Month(s)`)*. |
| **Date of Next Invoice** | Scheduled calendar date for next automated vendor bill generation *(e.g., `11/30/2026`)*. |
| **Last Date Invoiced** | Ending calendar date of the most recently processed billing period *(e.g., `11/29/2026`)*. |

---

## Supplier Contract Line Recurrence Parameters

Detail form view opened when inspecting an individual supplier contract line:

| Field Name | Description |
| :--- | :--- |
| **Product** | The leased equipment or recurring service item billed by the supplier. |
| **Auto-price?** | Checkbox dynamically re-evaluating price from supplier catalog rules on generation. |
| **Unit Price** | Fixed agreed procurement rate applied when Auto-price is disabled *(e.g., `0.00`)*. |
| **Analytic Distribution** | Cost center allocations and department cost tagging. |
| **Quantity** | Procurement volume billed per cycle *(e.g., `1.00`)*. |
| **Discount (%)** | Supplier concession percentage deducted from bill unit price. |
| **Description** | Custom narrative or dynamic placeholder description printed on vendor bill lines. |
| **Invoice Every** | Numerical recurrence multiplier *(e.g., `1`)*. |
| **Recurrence (Interval Unit)** | Recurrence time unit *(e.g., `Month(s)`, `Day(s)`, `Week(s)`, `Year(s)`)*. |
| **Invoicing type** | Timing rule: `Pre-paid` *(billed in advance)* or `Post-paid` *(billed in arrears)*. |
| **Date Start** | Commencement date of lease or service billing eligibility *(e.g., `10/30/2026`)*. |
| **Date End** | Final termination date of supplier recurring line. |
| **Next Period Start** | Beginning calendar date of the upcoming billing window *(e.g., `10/30/2026`)*. |
| **Next Period End** | Ending calendar date of the upcoming billing window *(e.g., `11/29/2026`)*. |
| **Last Date Invoiced** | Calendar date through which vendor bills were previously booked. |
| **Date of Next Invoice** | Scheduled execution date for next vendor bill draft generation. |

---

## Related Documentation

* [Manage Customer Contracts and Recurring Invoicing](../task-guides/11-manage-customer-contracts-and-recurring-invoicing.md)
* [Manage Supplier Contracts and Recurring Purchase Invoicing](../task-guides/15-manage-supplier-contracts-and-purchase-invoicing.md)
* [Customer Invoice and Vendor Bill Field Definitions](./01-customer-invoice-and-vendor-bill-field-definitions.md)
* [Create and Validate Customer Invoices](../task-guides/01-create-and-validate-customer-invoices.md)
