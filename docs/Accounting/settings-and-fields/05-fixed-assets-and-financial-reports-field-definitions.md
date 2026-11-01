# Fixed Assets and Financial Reports Field Definitions

This document provides technical data dictionaries and field specifications for asset models, fixed asset records, the depreciation board, asset disposal wizards, MIS report configurations, and standard financial reporting filters in CURQ Accounting.

---

## Fixed Asset and Asset Model Form Fields

Fixed asset records and reusable asset models are managed in **Accounting > Assets** or generated automatically from capitalized vendor bills.

| Field Name | Description |
| :--- | :--- |
| **Asset Name** | Descriptive identification of the capital asset *(e.g., `Office Furniture Suite - Desk and Chairs`)*. |
| **Original Value** | Total gross acquisition cost of the asset excluding deductible VAT. |
| **Acquisition Date** | The date the asset was purchased or placed into operational service. Determines depreciation commencement. |
| **Non-depreciable Value** | The estimated residual or scrap value remaining at the end of the useful lifespan that is excluded from amortization. |
| **Depreciation Method** | Mathematical method governing periodic amortization: `Straight Line` (uniform depreciation per period), `Declining` (accelerated depreciation applied to net book value), or `Declining then Straight` (accelerated declining method switching to straight line when more favorable). |
| **Duration / Number of Depreciations** | Total number of depreciation installments scheduled over the asset lifecycle *(e.g., `60` months for a 5-year asset)*. |
| **Computation Method** | The periodicity of depreciation calculations: `Months` or `Years`. |
| **Prorata Temporis** | When enabled, calculates depreciation for the first fractional month based on the exact number of days remaining from the acquisition date. |
| **Fixed Asset Account** | Balance sheet non-current asset account recording the gross capitalized purchase cost *(e.g., `0102010 Inventaris`)*. |
| **Depreciation Account** | Balance sheet contra-asset account accumulating total historical depreciation write-downs *(e.g., `0102090 Cumulatieve afschrijving inventaris`)*. |
| **Expense Account** | Profit and Loss operating expense account absorbing the periodic depreciation write-off *(e.g., `4102090 Afschrijvingen inventaris`)*. |
| **Journal** | Accounting sub-ledger where monthly depreciation entries are generated *(e.g., `Depreciation` or `Miscellaneous Operations`)*. |

---

## Depreciation Board Table Columns

The depreciation board displays the multi-year amortization schedule, projecting future book values and recording posted write-offs.

| Field Name | Description |
| :--- | :--- |
| **# / Number** | Sequential installment index *(e.g., `1`, `2`, `3` up to total scheduled periods)*. |
| **Depreciation Date** | The calendar accounting date on which the periodic depreciation entry is scheduled to post. |
| **Depreciation** | The periodic amortization amount recognized as an expense in that specific installment. |
| **Cumulative Depreciation** | The total aggregate depreciation recognized from asset acquisition up to the current installment. |
| **Residual Value** | The remaining Net Book Value (NBV) of the asset: `Original Value` minus `Cumulative Depreciation`. |
| **Linked Entry** | Direct link to the generated accounting voucher *(e.g., `DEPR/2026/10/0001`)* once the installment is posted. |
| **Status** | State of the line: `Draft` (future projected installment) or `Posted` (committed general ledger transaction). |

---

## Asset Disposal and Action Wizard Fields

Clicking **Modify Depreciation** or **Dispose / Sell** on an active asset opens the disposal wizard to retire assets or recognize capital gains and losses.

| Field Name | Description |
| :--- | :--- |
| **Action** | Specifies the retirement procedure: `Dispose` (write off residual book value as scrap loss) or `Sell` (record asset disposal linked to a customer sales invoice). |
| **Date** | The effective accounting date of the asset retirement or terms modification. |
| **Loss Account** | P&L account absorbing any remaining unamortized net book value written off upon disposal *(e.g., `8501010 Boekwinst/-verlies op materiële vaste activa`)*. |
| **Customer Invoice** | Linked sales invoice when the asset is sold to a third party, allowing automatic clearing of capital proceeds against asset cost. |
| **Note** | Audit rationale explaining why the asset was retired, sold, or restructured before full amortization. |

---

## Last Reports Generated Archive Table Columns

Historical and saved report instances are audited under **Reporting > MIS Reporting > Last Reports Generated**:

| Field Name | Description |
| :--- | :--- |
| **Name** | User-defined descriptive title identifying the specific report generation instance *(e.g., `P&L October 2026`)*. |
| **Template** | Architectural MIS template defining the financial statement structure *(e.g., `NL RGS Profit Loss`)*. |
| **Currency** | Currency denomination used to compute and present monetary amounts *(defaults to `EUR`)*. |
| **Target Moves** | Transaction eligibility filter recorded at run time: `All Posted Entries` or `All Entries`. |
| **Pivot Date** | Anchor calendar date utilized for comparative time horizons and reporting calculations. |

---

## MIS Report Form and Filters Configuration Fields

Configured when clicking **+ New** under **Reporting > MIS Reports** or **Reporting > MIS Reporting > Last Reports Generated**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Identifying title for the financial statement run *(e.g., `P&L October 2026`)*. Mandatory. |
| **Template** | Underlying reporting template governing KPI calculations and account hierarchies *(e.g., `NL RGS Profit Loss`, `NL RGS Balance Sheet`)*. Mandatory. |
| **Currency** | Currency denomination used for statement calculations *(defaults to company base currency `EUR`)*. |
| **Comparison Mode** | Checkbox activating side-by-side comparative financial columns against prior periods or operating budgets. |
| **Date Range: From / To** | Start date and end date establishing the financial calculation window *(e.g., `10/01/2026` to `10/31/2026`)*. |
| **Target Moves** | Transaction eligibility filter: `All Posted Entries` *(recommended standard evaluating only validated, legally binding transactions)* or `All Entries` *(includes unposted draft vouchers for provisional budgeting)*. |
| **Analytic Domain** | Optional domain filter restricting data aggregation to specific analytic accounts, cost centers, or project dimensions. |
| **Preview** | Action button in the top-right toolbar rendering the statement interactively on screen with collapsible account hierarchies. |
| **Print** | Compiles and downloads an audit-ready official PDF document. |
| **Export** | Generates an Excel spreadsheet (`.xlsx`) preserving raw formulas, line codes, and values. |
| **+ Add to dashboard** | Action button pinning the live report instance as a real-time card on the main Accounting dashboard. |

---

## MIS Report Layout and Widget Configuration Fields

The **Layout** and **Widget** tabs allow customizing exported document formats and dashboard behaviors:

| Field Name | Description |
| :--- | :--- |
| **Landscape PDF** | Formats exported PDF documents into horizontal orientation, ensuring broad multi-column statements fit without wrapping or truncation. |
| **Disable account details expansion** | Suppresses hierarchical account breakdown on screen and in exports, presenting only summary KPI lines without individual general ledger accounts. |
| **Display Columns Description** | Prints descriptive sub-titles beneath header columns for enhanced reader clarity. |

| Field Name | Description |
| :--- | :--- |
| **Show filters box** | Displays interactive search and filter controls directly above the pinned report card on the Accounting dashboard *(enabled by default)*. |
| **Filter box search view** | Links a specific search view definition to provide custom dimensional filters on the dashboard card. |
| **Show settings button** | Exposes a configuration gear icon on the dashboard widget card for rapid parameter adjustments. |
| **Show Pivot Date** | Displays the base pivot evaluation date control directly on the dashboard card interface. |

---

## Rendered MIS Report Preview Financial Lines

The interactive Profit and Loss statement rendered after clicking **Preview**:

| Field Name | Description |
| :--- | :--- |
| **Profit and Loss** | Master report category header and evaluation table container. |
| **Netto-omzet** | Cumulative net turnover from commercial activities *(e.g., `630.20`)*. |
| **Netto-omzet uit leveringen geproduceerde goederen** | Gross turnover from product shipments booked to income account `8001010` *(e.g., `730.20`)*. |
| **Huuropbrengsten** | Property and rental revenue adjustments booked to account `8010100` *(e.g., `-100.00` from monthly spreading schedules)*. |
| **Kostprijs van de Omzet** | Direct cost of sales and raw material procurement expenses booked to account `7001010` *(e.g., `-620.98`)*. |
| **Totaal Bruto-bedrijfsresultaat** | Gross operational margin: Total Netto-omzet plus Kostprijs van de Omzet *(calculated at `9.22`)*. |
| **Afschrijvingen op materiële vaste activa** | Periodic capital depreciation expense booked to account `4102090 Afschrijvingen inventaris` *(e.g., `-40.99`)*. |
| **Administratieve lasten** | Overhead banking and office fees booked to account `4210040 Bankkosten` *(e.g., `-15.00`)*. |
| **Totaal Overige bedrijfskosten** | Aggregate summary of all other operating expenses *(calculated at `-15.00`)*. |
| **Bedrijfsresultaat** | Net operating profit or loss before financing charges and taxation *(highlighted orange bar, computed at `-46.77`)*. |
| **Resultaat voor belastingen** | Pre-tax corporate profit or loss *(computed at `-46.77`)*. |
| **Resultaat na belastingen** | Final net period earnings carried to the balance sheet *(highlighted orange bar, computed at `-46.77`)*. |

---

## General Ledger and Trial Balance Filter Fields

Standard accounting ledger reports in **Reporting > General Ledger** and **Reporting > Trial Balance** provide analytic filtering across accounting dimensions.

| Field Name | Description |
| :--- | :--- |
| **Date Boundaries** | Filters transactions by accounting date, including predefined shortcuts *(This Month, This Quarter, Financial Year)* or custom dates. |
| **Journals** | Multi-select dropdown filtering ledger results to specific sub-ledgers *(e.g., reviewing only `Bank` and `Cash` movements)*. |
| **Accounts** | Multi-select selector restricting outputs to specific general ledger account codes or account ranges. |
| **Partners** | Restricts ledger transactions to moves associated with a designated customer, vendor, or employee. |
| **Display Accounts** | Criteria for row visibility: `With movements` (excludes dormant accounts with zero activity), `All` (displays complete Chart of Accounts regardless of balance), or `With non-zero balance` (displays only accounts carrying an active ending balance). |
| **Sort By** | Ordering parameter for ledger line items: `Date` or `Journal & Partner`. |

---

## Aged Partner Balance Filter Fields

The Aged Partner Balance report in **Reporting > Partner Reports > Aged Receivable / Aged Payable** segments open debts into aging time horizons.

| Field Name | Description |
| :--- | :--- |
| **As of Date** | The evaluation date against which document due dates or invoice dates are compared to compute days overdue. |
| **Partner Type** | Toggles analysis between `Customer` (Aged Receivables) and `Supplier / Vendor` (Aged Payables). |
| **Period Length (Days)** | The numerical duration in days of each aging interval *(defaults to `30` days, producing intervals `1-30`, `31-60`, `61-90`, `91-120`, and `120+` days)*. |
| **Target Moves** | Filters open balances based on transaction status: `All Posted Entries` or `All Entries`. |
| **Trust Rank / Partner Tags** | Optional filters narrowing aging results to specific partner commercial classifications. |

---

## Invoices Analysis Reporting Controls and Measures

The Invoice Analysis reporting engine under **Reporting > Management > Invoice Analysis** provides multidimensional charting and OLAP data cubes.

| Field Name | Description |
| :--- | :--- |
| **Measures** | Dropdown selector choosing the quantitative financial metric evaluated across dimensions. |
| **Untaxed Amount** | Net commercial invoice turnover excluding value-added tax *(e.g., `€ 725.00`)*. |
| **Total** | Gross customer invoice amount inclusive of statutory VAT. |
| **Margin** | Gross profit contribution calculated as `Untaxed Amount - Cost of Goods Sold`. |
| **Quantity** | Total physical or service item volume invoiced. |
| **Average Price** | Computed arithmetic mean unit price across sales lines. |
| **Bar Chart** | Renders discrete comparative columns grouped by selected time bucket or partner. |
| **Line Chart** | Renders continuous line plots to identify seasonal trends and trajectories. |
| **Pie Chart** | Renders proportional circular shares of total revenue across commercial categories. |
| **Stacked** | Merges multi-category values inside a single bar to compare category composition. |
| **Cumulative** | Accumulates successive periods into a running total trajectory. |
| **Pivot View** | Table icon switching to the multidimensional cross-tabulation matrix. |
| **Graph View** | Chart icon displaying interactive visual diagrams and trend plots. |

---

## Invoices Analysis Pivot Matrix Controls

The pivot view provides interactive multidimensional data aggregation:

| Field Name | Description |
| :--- | :--- |
| **Flip axis** | Action button swapping horizontal columns and vertical rows to reorient the cross-tabulation matrix. |
| **Expand all** | Action button expanding all nested dimensional levels across all active rows. |
| **Download xlsx** | Action button generating and exporting the rendered pivot grid directly to Microsoft Excel. |
| **Insert in spreadsheet** | Action button saving the current dynamic analytical query into an editable spreadsheet. |

---

## Product Margins Selection Parameters

Launched under **Reporting > Management > Product Margins** to configure date windows and document statuses:

| Field Name | Description |
| :--- | :--- |
| **From** | Earliest transaction date evaluated for product sales revenue and costs *(e.g., `01/01/2026`)*. |
| **To** | Latest transaction date evaluated for product sales revenue and costs *(e.g., `12/31/2026`)*. |
| **Invoice State** | Filter criteria determining invoice maturity: `Paid`, `Open and Paid` *(recommended standard)*, or `Draft, Open and Paid`. |
| **Open Margins** | Primary action button computing turnover, cost of sales, and gross margins across all products. |
| **Cancel** | Closes the parameters dialog without generating the margins report. |

---

## Product Margins Report Table Columns

The calculated profitability matrix displayed after clicking **Open Margins**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Product commercial description or title *(e.g., `Cloud Hosting Standard`, `Fair Phone 5`)*. |
| **Internal Reference** | Product SKU or internal part identifier code *(e.g., `COMM`, `Delivery_007`)*. |
| **Avg. Sale Unit Price** | Computed mean commercial selling price per unit billed to customers *(e.g., `€ 99.00`)*. |
| **# Invoiced in Sale** | Total unit volume of product billed to customers within the evaluation window *(e.g., `1.00`, `2.00`)*. |
| **Turnover** | Cumulative net sales revenue recognized on customer invoices *(e.g., `€ 418.00`, `€ 716.00 total`)*. |
| **Sales Gap** | Difference between base catalog price and negotiated invoiced selling price *(e.g., `-€ 20.00`)*. |
| **Total Cost** | Total procurement or production cost attributed to sold units *(e.g., `€ 99.00`, `€ 1,360.98 total`)*. |
| **# Purchased** | Quantity of physical units acquired from suppliers on vendor bills within the window. |
| **Total Margin** | Absolute profit contribution calculated as `Turnover - Total Cost` *(e.g., `€ 99.00`, `€ 418.00`)*. |
| **Expected Margin** | Projected gross margin calculated from standard list price vs standard product cost *(e.g., `€ 398.00`)*. |
| **Total Margin Rate(%)** | Visual progress bar and percentage of gross profit realized: `(Total Margin / Turnover) * 100`. |
| **Expected Margin (%)** | Target list-price profit margin percentage calculated from master data pricing. |

---

## Analytic Reporting Ledger Columns

Accessed under **Reporting > Management > Analytic Report** to audit employee timesheets, project cost tracking, and billable operational labor:

| Field Name | Description |
| :--- | :--- |
| **Start Time** | Calendar date and timestamp recording when the work unit or operational task commenced *(e.g., `10/28/2026 07:41:51`)*. |
| **Employee** | Personnel or internal resource who executed the recorded task *(e.g., `George Watson`, `Siddharth Sathyan`)*. |
| **Project** | Analytical project dimension or internal operational department receiving the labor cost allocation *(e.g., `Development`, `Internal`)*. |
| **Task** | Granular work package or operational assignment *(e.g., `Server setup`, `Frontend development`, `Time Off`)*. |
| **Description** | Contextual memorandum describing specific activities executed during the session. |
| **Sales Order Item** | Commercial sales order line linked to the timesheet for billing and recharging labor to clients. |
| **Time Spent** | Duration allocated to the task, formatted in hours and minutes *(e.g., `03:00`, `04:00`, `08:00`)*, with inline timer play controls on active sessions. |
| **Time Spent Total** | Cumulative aggregate duration calculated in the table footer across all filtered timesheets *(e.g., `521:30` hours)*. |
| **From last fiscal year** | Default search filter tag restricting timesheet visibility to ongoing and preceding fiscal periods. |

---

## Financial Assets Report Selection Parameters

Launched under **Reporting > Financial Assets report** to configure the statutory fixed asset register and accumulated depreciation parameters:

| Field Name | Description |
| :--- | :--- |
| **Asset Group** | Category classification filter restricting the report to a specific asset category *(e.g., `01 Immateriële vaste activa`, `Inventaris`)*. |
| **Start Date** | Earliest accounting date evaluated for asset acquisitions and depreciation accruals *(e.g., `10/01/2026`)*. |
| **End Date** | Cutoff accounting date evaluated for asset book values and cumulative depreciation *(e.g., `10/30/2026`)*. |
| **Include draft assets** | Checkbox toggle enabling unconfirmed draft asset schedules to be included in projected asset valuations. |
| **Generate Report** | Primary action button compiling and rendering the statutory asset register report. |
| **Cancel** | Discards parameter selection and closes the report dialog. |

---

## OCA General Ledger Report Setup Wizard Fields

Configured under **Reporting > General Ledger** (or **Reporting > OCA accounting reports > General Ledger**) to define the accounting extraction scope and audit filters:

| Field Name | Description |
| :--- | :--- |
| **Date range** | Dropdown menu providing predefined fiscal intervals *(e.g., Financial Year, Current Quarter)* that auto-populate date boundaries. |
| **Date From** | Beginning calendar date of the reporting window *(e.g., `01/01/2026`)*. |
| **Date To** | Ending calendar date of the reporting window *(e.g., `10/30/2026`)*. |
| **Grouped By** | Primary grouping hierarchy, organizing transactions by `Partners` or standard general ledger account code order. |
| **Activate centralization** | When enabled, aggregates high-volume transactions into centralized monthly journal summary lines. |
| **Hide account ending balance at 0** | Checkbox omitting accounts whose cumulative debits equal credits to focus exclusively on active balances. |
| **Target Moves** | Radio selection restricting transaction status: `All Posted Entries` *(recommended for audited reporting)* or `All Entries`. |
| **Show foreign currency** | Checkbox displaying original foreign currency denominations alongside base currency figures. |
| **Show Analytic Account** | Checkbox rendering analytic distribution tags and cost-center allocations for each transaction line. |
| **Filter accounts Tab** | Provides targeted sub-ledger filters including `Receivable Accounts Only`, `Payable Accounts Only`, or custom `From Code` / `To` account ranges. |
| **Filter partners Tab** | Allows isolating transactions to designated customer, vendor, or employee partners. |
| **Filter analytic accounts Tab** | Restricts ledger outputs to selected project or operational cost centers. |
| **Additional Filtering Tab** | Provides advanced journal exclusions and posting source criteria. |
| **Format Tab** | Controls presentation layout options, indentation levels, and page break behavior. |
| **View** | Primary action button rendering the interactive on-screen General Ledger statement. |
| **Export PDF** | Compiles and downloads an audit-ready official PDF document. |
| **Export XLSX** | Generates an Excel spreadsheet containing detailed ledger move lines and balances. |
| **Cancel** | Closes the setup wizard dialog without executing the report. |

---

## OCA Journal Ledger Setup Wizard Fields

Configured under **Reporting > OCA accounting reports > Journal Ledger** (or **Reporting > Journal Ledger**) to audit individual accounting journals:

| Field Name | Description |
| :--- | :--- |
| **Date range** | Dropdown menu providing predefined fiscal intervals *(e.g., Financial Year, This Month)* that auto-populate Start date and End date. |
| **Start date** | Earliest calendar date of the journal audit interval *(e.g., `01/01/2026`)*. |
| **End date** | Closing calendar date of the journal audit interval *(e.g., `10/30/2026`)*. |
| **Move Target** | Radio selection restricting transaction status: `Posted` *(default for audited legal reporting)*, `All`, or `Not Posted` *(provisional drafts)*. |
| **Sort entries by** | Sequencing rule for journal vouchers: `Entry number` *(chronological sequential voucher numbering)* or transaction date. |
| **Group entries by** | Primary organization dimension: `Journal` *(groups items by sub-ledger book)* or accounting period. |
| **Foreign Currency** | Checkbox displaying original foreign currency denominations alongside local currency debits and credits. |
| **With Account Name** | Checkbox printing the full descriptive account title alongside the general ledger account code. |
| **Show Auto Sequence** | Checkbox revealing system-assigned internal automated sequence identifiers. |
| **Label Text Limit** | Maximum character threshold before memo text is truncated in report columns *(defaults to `40`)*. |
| **Journals** | Multi-select selector restricting outputs to specific accounting journals *(e.g., `Customer Invoices`, `Vendor Bills`, `Bank`)* or blank for all journals. |
| **View** | Primary action button generating and rendering the on-screen Journal Ledger report. |
| **Export PDF** | Compiles and downloads an audit-ready official PDF journal book. |
| **Export XLSX** | Generates an Excel spreadsheet containing detailed journal move lines and period totals. |
| **Cancel** | Closes the setup wizard dialog without executing the report. |

---

## OCA Open Items Setup Wizard Fields

Configured under **Reporting > OCA accounting reports > Open Items** to extract unreconciled entries across accounts receivable and accounts payable:

| Field Name | Description |
| :--- | :--- |
| **Date At** | Evaluation cutoff calendar date *(e.g., `11/01/2026`)*. The report evaluates all moves remaining unreconciled as of this date. |
| **Date From** | Optional earliest calendar date. When left blank, all historical open entries from company inception are included. |
| **Target Moves** | Radio selection restricting transaction status: `All Posted Entries` *(standard for official audit reporting)* or `All Entries`. |
| **Show Partner Details** | Checkbox revealing debtor or creditor company name and contact details on each open line. |
| **Grouped By** | Primary grouping dimension, organizing open items by `Partners` or standard account code order. |
| **Hide account ending balance at 0** | Checkbox suppressing accounts whose cumulative balance is zero to focus on active debt exposure. |
| **Show foreign currency** | Checkbox displaying original transaction amounts in foreign currencies alongside base EUR values. |
| **Label Text Limit** | Maximum character threshold before memo text is truncated in report columns *(defaults to `40`)*. |
| **Filter partners** | Selector restricting results to a designated customer, vendor, or employee partner. |
| **Receivable Accounts Only** | Checkbox filtering ledger outputs exclusively to debtor receivable accounts *(e.g., `1101010`)*. |
| **Payable Accounts Only** | Checkbox filtering ledger outputs exclusively to creditor payable accounts *(e.g., `1203010`)*. |
| **From Code / To** | Account range boundary selectors filtering by specific Chart of Accounts code brackets. |
| **View** | Primary action button generating and displaying the interactive on-screen Open Items statement. |
| **Export PDF** | Compiles and downloads an audit-ready official PDF document. |
| **Export XLSX** | Generates an Excel spreadsheet containing itemized open moves and aging brackets. |
| **Cancel** | Closes the setup wizard dialog without executing the report. |

---

## OCA Open Items Report Table Columns

Displayed after clicking **View** in the Open Items wizard:

| Field Name | Description |
| :--- | :--- |
| **Date** | Accounting execution date of the underlying transaction move line *(e.g., `30/10/2026`)*. |
| **Entry** | Legal sequence voucher number of the originating document *(e.g., `INV/2026/00007` or `RINV/2026/00003`)*. |
| **Journal** | Journal identifier code of the posting sub-ledger *(e.g., `INV`)*. |
| **Account** | General ledger account code *(e.g., `1101010 Handelsdebiteuren nominaal`)*. |
| **Partner** | Debtor customer or creditor vendor bound to the open balance *(e.g., `Acme Technologies`, `John Doe`)*. |
| **Ref - Label** | Operational memo, payment reference, or document reference label. |
| **Due date** | Maturity calendar date when the invoice or bill is legally due *(e.g., `14/12/2026`)*. |
| **Original** | Initial gross transaction amount booked to the balance sheet account *(e.g., `€ 99.00`)*. |
| **Residual** | Remaining unpaid or unreconciled amount awaiting settlement *(e.g., `€ 99.00`)*. |
| **Cur.** | Currency denomination code *(e.g., `EUR`)*. |
| **Cur. Original** | Initial gross transaction value in the original currency denomination. |
| **Cur. Residual** | Remaining unsettled balance in the original currency denomination. |
| **Partner ending balance** | Subtotal line summarizing net outstanding debt or credit for each counterparty *(e.g., `-€ 110.00` for Acme Technologies, `€ 280.57` for John Doe)*. |
| **Ending balance** | Grand total line summarizing the net position across all open items for the control account *(e.g., `€ 170.57`)*. |
---

## Related Documentation

* [Manage Fixed Assets and Depreciation](../task-guides/06-manage-fixed-assets-and-depreciation.md)
* [Generate Financial Reports and Trial Balance](../task-guides/07-generate-financial-reports-and-trial-balance.md)
* [Customer Invoice and Vendor Bill Field Definitions](./01-customer-invoice-and-vendor-bill-field-definitions.md)
* [Payment, Bank, and Journal Entry Field Definitions](./04-payment-bank-and-journal-entry-field-definitions.md)
* [Understanding Double-Entry Bookkeeping and Journals](../core-concepts/01-understanding-double-entry-bookkeeping-and-journals.md)
