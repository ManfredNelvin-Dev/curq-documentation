# Stock Moves Analysis and Valuation Field Definitions

This document provides a comprehensive data dictionary for transfer smart controls, detailed operations move lines, stock moves history, throughput analysis pivot matrices, and financial inventory valuation ledgers in CURQ Inventory.

---

## 1. Validated Transfer Smart Controls Data Dictionary

Following the completion of an outbound delivery order or inbound stock receipt, CURQ activates dedicated navigation buttons in the form header:

| Field Name | Description |
| :--- | :--- |
| **Moves Smart Button** | Header navigation control displaying underlying physical stock moves, source bins, and lot tracking lines. |
| **Valuation Smart Button** | Header navigation control marked with a currency symbol providing drill-down access to inventory ledger valuation entries. |
| **Print Button** | Document generation action producing the Delivery Slip, Receiving Slip, or picking operations document. |
| **Return Button** | Reverse logistics action initiating an inbound or outbound return transfer. |
| **Status Chevron Bar** | Progression bar displaying terminal **Done** status in grey shading. |
| **Effective Date** | Immutable timestamp recording the precise date and time of physical stock validation. |
| **Delivery Address / Receive From** | Contact entity receiving dispatched goods or delivering inbound products *(e.g., `John Doe`, `Acme Technologies`)*. |
| **Operation Type** | Warehouse route governing the completed transfer *(e.g., `My Company: Delivery Orders`, `My Company: Receipts`)*. |
| **Source Document** | Originating business record triggering fulfillment *(e.g., `S00042`, `P00093`)*. |

---

## 2. Detailed Operations Grid Data Dictionary

The Detailed Operations view itemizes exact warehouse locations, source shelves, tracking identifiers, and item counts:

| Field Name | Description |
| :--- | :--- |
| **Checkbox Selector** | Multi-select selector for flagging individual move records for batch operations or exports. |
| **Product** | Catalog item name and specification transferred during execution *(e.g., `Fair Phone 5 (Black)`)*. |
| **Pick From** | Source internal warehouse storage location or bin from which items were retrieved on outbound deliveries *(e.g., `WH/Stock`)*. |
| **Lot/Serial Number** | Unique serialized hardware code or production lot number assigned to items during inbound receiving. |
| **Quantity** | Physical quantity moved into or out of warehouse storage *(e.g., `1.00`, `4.00`)*. |
| **Unit of Measure** | Standard measurement unit applied to the product quantity *(e.g., `Units`)*. |
| **Search Bar** | Filter field enabling warehouse staff to search moves by product, lot, or location. |
| **Settings Cog** | Display control allowing operators to customize visible table columns and field sorting. |
| **Pager Control** | Record counter displaying active pagination *(e.g., `1-1/1`)* with forward and back arrows. |

---

## 3. Moves History List Register Data Dictionary

The List View itemizes atomic double-entry stock transactions and hardware tracking identifiers:

| Field Name | Description |
| :--- | :--- |
| **Moves History Header Label** | Active workspace breadcrumb confirming navigation within the historical moves ledger. |
| **Settings Cog Icon** | Preferences control allowing users to customize visible register columns and sorting orders. |
| **Done Search Filter Tag** | Default filter restricting listed moves strictly to completed and validated warehouse operations. |
| **Search Input Bar** | Keyword lookup field to filter movements by product, lot number, reference code, or storage location. |
| **Refresh Action Control** | Action icon updating the register with live transactions from the double-entry database. |
| **Pagination Indicator** | Pager displaying active record window and total transaction count *(e.g., `1-12 / 12`)*. |
| **List View Switcher** | Tabular layout formatting atomic movement records into detailed rows. |
| **Kanban View Switcher** | Card layout presenting movements as operational visual cards. |
| **Pivot View Switcher** | Multi-dimensional matrix layout aggregating movement quantities by category and date. |
| **Date Column** | Timestamp recording the exact execution date and time of the physical stock move *(e.g., `11/06/2026 16:24:39`)*. |
| **Reference Column** | Transactional document code linking to the originating receipt, delivery, or scrap record *(e.g., `WH/IN/00110`, `SP/00001`)*. |
| **Product Column** | Inventory catalog item or product variant transferred *(e.g., `Fairphone 5`, `Fair Phone 5 (Black)`)*. |
| **Lot/Serial Number Column** | Specific hardware serial string or production batch identifier tracked during movement. |
| **From Location Column** | Source storage location debited during execution *(e.g., `Partners/Vendors`, `WH/Stock`)*. |
| **To Location Column** | Destination storage location credited during execution *(e.g., `WH/Stock`, `Virtual Locations/Scrap`, `Partners/Customers`)*. |
| **Quantity Column** | Numeric count of physical units transferred, with warehouse stock deductions highlighted in red text *(e.g., `2.00 Units`, `1.00 Units`)*. |
| **Unit of Measure Column** | Standard measurement unit applied to the product quantity *(e.g., `Units`)*. |
| **Status Column** | Operational lifecycle stage badge confirming terminal execution (*Done*). |

---

## 4. Moves History Kanban Card Data Dictionary

The Kanban View displays executed stock movements as standalone operational cards:

| Field Name | Description |
| :--- | :--- |
| **Reference Header Identifier** | Primary document code displayed in the upper-left of each card *(e.g., `WH/OUT/00069`, `SP/00001`)*. |
| **Execution Timestamp** | Date and time recording when the transfer was validated at the dock or warehouse floor *(e.g., `11/05/2026 17:26:52`)*. |
| **Product Catalog Name** | Catalog description of the inventory item moved *(e.g., `Fair Phone 5 (Black)`)*. |
| **Moved Quantity Tag** | Physical unit count transferred during execution *(e.g., `1.00Units`, `4.00Units`, `50.00Units`)*. |
| **Done Lifecycle Badge** | Terminal status badge confirming completed warehouse movement. |

---

## 5. Moves History Pivot View Data Dictionary

The Pivot View summarizes stock movement quantities across product categories and calendar periods:

| Field Name | Description |
| :--- | :--- |
| **Measures Metric Dropdown** | Calculation selector toggling metrics between physical volume and transaction record count. |
| **Swap Axis Control** | Matrix tool interchanging horizontal category columns and vertical timeline rows. |
| **Expand and Collapse All Controls** | Structural controls expanding or minimizing all nested categories simultaneously. |
| **Download (XLSX) Control** | File export utility downloading the active pivot matrix directly to Microsoft Excel format. |
| **Insert in Spreadsheet Control** | Embedding tool placing the live category matrix into an internal CURQ spreadsheet dashboard. |
| **Product Category Column** | Categorical columns grouping moves by product category hierarchy *(e.g., `All`, `All / Software`)*. |
| **Quantity in Product UoM Metric** | Sub-column calculating total physical product units moved within the category. |
| **Count Metric** | Sub-column displaying total number of distinct atomic move lines executed. |
| **Fiscal Period Grouping Row** | Row clustering transaction figures by execution month *(e.g., `October 2026`, `November 2026`)*. |
| **Total Throughput Summary Row** | Bottom summary row aggregating overall throughput across all categories *(e.g., `75.00` units across `12` moves)*. |

---

## 6. Moves Analysis Header and View Switcher Controls Data Dictionary

The control bar governs filters, groupings, export options, and layout modes across warehouse throughput data:

| Field Name | Description |
| :--- | :--- |
| **Moves Analysis Workspace Title** | Header breadcrumb confirming active navigation in the analytical throughput engine. |
| **Settings Cog Icon** | Preferences control allowing operators to customize matrix dimensions and table layout. |
| **Done Search Filter Tag** | Default filter restricting analysis strictly to completed double-entry stock transactions. |
| **Search Input Bar** | Query bar to filter moves by product name, category, location, or partner. |
| **Search Configuration Dropdown** | Advanced query drawer providing custom filters, grouping rules, and saved reports. |
| **Refresh Action Control** | Action icon updating the analysis matrix with live transactions from the inventory ledger. |
| **Pivot View Switcher (Default)** | Multi-dimensional matrix view cross-tabulating throughput by category, operation type, and date. |
| **List View Switcher** | Granular tabular register detailing atomic movement records line by line. |
| **Graph View Switcher** | Analytical chart interface visualizing throughput trends and comparative volumes. |
| **Kanban View Switcher** | Card board view presenting moves organized by product and fulfillment ratios. |

---

## 7. Moves Analysis Pivot Matrix Data Dictionary

The Pivot View cross-tabulates movement throughput across operation types and calendar periods:

| Field Name | Description |
| :--- | :--- |
| **Measures Metric Dropdown** | Calculation selector defining the measure plotted across the matrix *(configured to Quantity)*. |
| **Swap Axis Control** | Matrix layout icon transposing horizontal operation types and vertical calendar rows. |
| **Expand and Collapse Controls** | Hierarchy controls revealing granular subcategories and individual product variants. |
| **Download (XLSX) Control** | File export utility downloading the active pivot matrix to Microsoft Excel format. |
| **Insert in Spreadsheet Control** | Collaborative action creating a live embedded spreadsheet dashboard inside CURQ Documents. |
| **Delivery Orders Column (WH/OUT)** | Operational column aggregating outbound customer delivery volumes *(e.g., `6.00 Units`)*. |
| **Receipts Column (WH/IN)** | Operational column aggregating inbound vendor intake volumes *(e.g., `67.00 Units`)*. |
| **Scrap Column (SP)** | Operational column aggregating scrapped and written-off units *(e.g., `2.00 Units`)*. |
| **Total Column Header** | Root aggregation column calculating total enterprise physical throughput *(e.g., `75.00 Units`)*. |
| **Quantity Metric Sub-Header** | Sub-header confirming that numeric cell values represent physical inventory units. |
| **Monthly Calendar Rows** | Rows grouping transactions by calendar month *(e.g., `October 2026`, `November 2026`)*. |
| **Total Row Header** | Bottom summary row calculating cumulative throughput volume across the reporting period. |

---

## 8. Moves Analysis List Register Data Dictionary

The List View itemizes atomic move records along with execution statuses and tracking references:

| Field Name | Description |
| :--- | :--- |
| **Batch Selection Checkbox** | Multi-row selector enabling bulk export or categorization across moves. |
| **Date Column** | Timestamp recording the exact execution date and time of the physical movement. |
| **Reference Column** | Transactional document code linking to the originating operational record. |
| **Product Column** | Inventory catalog item description and specification. |
| **Lot/Serial Number Column** | Hardware serial string or production batch identifier tracked during movement. |
| **From Location Column** | Source storage location debited during execution. |
| **To Location Column** | Destination storage location credited during execution. |
| **Quantity Column** | Numeric count of physical units transferred, with inventory deductions displayed in red text. |
| **Unit of Measure Column** | Standard measurement unit applied to the product quantity *(e.g., `Units`)*. |
| **Status Column** | Operational lifecycle stage badge confirming terminal execution (*Done*). |
| **Column Options Selector Icon** | Table customization control on the far right allowing users to show or hide optional columns. |
| **Summary Total Row** | Bottom register row aggregating net quantities and total movement lines. |

---

## 9. Moves Analysis Graph View Controls and Canvas Data Dictionary

The Graph View visualizes warehouse velocity, volume spikes, and fulfillment capacity:

| Field Name | Description |
| :--- | :--- |
| **Measures Selector** | Metric dropdown defining the numerical measure plotted on the vertical axis *(Quantity)*. |
| **Bar Chart Switcher** | Discrete column visualization displaying throughput per product or operation type as vertical bars. |
| **Line Chart Switcher** | Continuous visual line plot representing throughput trends over chronological periods. |
| **Pie Chart Switcher** | Proportional circular visualization illustrating percentage share of throughput by operation type. |
| **Stacked Bar Layout Control** | Layout toggle stacking multiple operations or products on a single calendar column. |
| **Cumulative Grouped Layout Control** | Layout toggle grouping operation bars side-by-side per period for comparative analysis. |
| **Sort Order Controls** | Sorting tools ordering product bars in ascending or descending throughput sequence. |
| **Product Category / Date X-Axis** | Horizontal axis displaying grouped products, categories, or calendar timeframes. |
| **Quantity Metric Y-Axis** | Vertical axis scaling throughput unit counts. |
| **Quantity Series Legend** | Color-coded key identifying the plotted bar series as physical unit quantity. |

---

## 10. Moves Analysis Kanban Card Data Dictionary

The Kanban View groups moves into operational cards displaying fulfillment ratios:

| Field Name | Description |
| :--- | :--- |
| **Card Product Title** | Bold header on each card displaying the catalog item name. |
| **Quantity Execution Ratio** | Operational ratio comparing executed quantity against original demand *(e.g., `Quantity 50.00 / 50.00 Units`, `Quantity 10.00 / 6.00 Units`)*. |
| **Card Selection Area** | Clickable card surface opening the underlying detailed stock move form. |
| **Record Counter / Pager** | Navigation indicator displaying visible cards and total record count *(e.g., `1-10 / 10`)*. |

---

## 11. Stock Valuation Register Data Dictionary

Drilling into valuation ledgers from a validated transfer exposes financial double-entry records:

| Field Name | Description |
| :--- | :--- |
| **Stock Valuation Breadcrumb** | Header breadcrumb confirming navigation in the stock valuation ledger filtered to a specific transfer. |
| **Date Column** | Exact execution timestamp matching the transfer effective date *(e.g., `11/05/2026 17:26:52`)*. |
| **Reference Column** | Outbound or inbound transfer code *(e.g., `WH/OUT/00069`)* linking to the originating shipment. |
| **Product Column** | Inventory catalog item evaluated *(e.g., `Fair Phone 5 (Black)`)*. |
| **Quantity Column** | Signed numeric quantity delta *(e.g., `-1.00` for outbound deliveries reducing inventory, `+4.00` for inbound receipts)*. |
| **Total Value Column** | Extended balance sheet inventory value change *(e.g., `€ 0.00` or standard cost valuation)*. |
| **Aggregate Value Summary Row** | Bottom register row calculating net quantity and total valuation adjustments for the transfer. |

---

## 12. Inventory Reporting Menu Data Dictionary

The primary navigation menu provides access to all operational registers, analytical views, and financial valuations:

| Field Name | Description |
| :--- | :--- |
| **Reporting Navigation Menu** | Primary application dropdown grouping inventory performance reports. |
| **Stock Option** | Navigation option opening the current stock balance register across warehouse storage bins. |
| **Locations Option** | Navigation option listing inventory counts grouped by physical shelf, transit route, and virtual location. |
| **Moves History Option** | Navigation option opening the comprehensive audit trail of executed double-entry stock transactions. |
| **Moves Analysis Option** | Navigation option providing multi-dimensional pivot reporting on movement velocities and fulfillment throughput. |
| **Valuation Option** | Navigation option opening the master enterprise balance sheet stock valuation ledger. |

---

## 13. Enterprise Stock Valuation Register and Pivot View Data Dictionary

Navigating to **Reporting > Valuation** exposes global inventory asset valuations in tabular and pivot modes:

| Field Name | Description |
| :--- | :--- |
| **Stock Valuation Register Header** | Top breadcrumb confirming navigation within the global stock valuation audit ledger. |
| **Valuation at Date Action Button** | Primary execution button opening the historical point-in-time inventory valuation recalculation wizard. |
| **Date Column** | Execution timestamp recording the physical move completion date and time *(e.g., `11/06/2026 16:24:39`, `11/06/2026 16:59:40`)*. |
| **Reference Column** | Transactional document code linking to the originating warehouse receipt or blank for direct cost revaluation adjustments *(e.g., `WH/IN/00110`)*. |
| **Product Column** | Inventory catalog item evaluated *(e.g., `Fairphone 5`)*. |
| **Quantity Column** | Inventory volume delta committed by the transfer *(e.g., `50.00` for physical moves, `0.00` for pure valuation revaluations)*. |
| **Total Value Column** | Balance sheet valuation change calculated from standard or FIFO product costs *(e.g., `€ 4,950.00`)*. |
| **Revaluation Journal Line** | Specialized valuation entry with `0.00` quantity adjusting balance sheet asset value without altering physical bin counts. |
| **Aggregate Valuation Totals Bar** | Summary footer calculating total physical warehouse units and net monetary asset value *(e.g., `50.00` units, `€ 4,950.00`)*. |
| **Pivot Measures Selector** | Analytical dropdown toggling metrics between physical count and financial asset valuation. |
| **Remaining Qty Column** | Pivot table column calculating remaining physical stock units on hand at the close of the period *(e.g., `50.00`)*. |
| **Remaining Value Column** | Pivot table column calculating remaining monetary asset balance at the close of the period *(e.g., `0.00`)*. |
| **Swap Axis Control** | Pivot layout tool interchanging horizontal and vertical grouping dimensions. |
| **Expand and Collapse All Control** | Structural control expanding or minimizing all hierarchical product categories simultaneously. |
| **Download XLSX Control** | Export utility downloading the active valuation pivot grid to a Microsoft Excel spreadsheet. |
| **Insert in Spreadsheet Control** | Collaborative tool embedding the live valuation pivot into an internal CURQ spreadsheet dashboard. |

---

## 14. Valuation at Date Modal Dialog Data Dictionary

Auditors use the Valuation at Date wizard to generate historical asset snapshots:

| Field Name | Description |
| :--- | :--- |
| **Valuation at Date Action Button (Header)** | Action button launching the point-in-time valuation calculation interface. |
| **Modal Dialog Header** | Window title identifying the historical valuation configuration popup. |
| **Valuation at Date Datetime Field** | Audit cutoff timestamp selector determining the historical date and time for stock recalculation *(e.g., `11/06/2026 16:54:38`)*. |
| **Confirm Action Button** | Execution button recalculating stock valuation quantities and financial balances as of the selected historical cutoff. |
| **Cancel Action Button** | Dismissal button closing the popup without modifying the real-time valuation display. |
| **Modal Window Management Controls** | Icons allowing users to minimize, maximize, or close the dialog popup. |

---

## Related Documentation

* [Analyze Stock Moves and Warehouse Throughput](../task-guides/10-analyze-stock-moves-and-warehouse-throughput.md)
* [Audit Historical Stock Movements in Moves History](../task-guides/11-audit-historical-stock-movements-in-moves-history.md)
* [Audit Stock Moves and Inventory Valuation](../task-guides/04-audit-stock-moves-and-inventory-valuation.md)
* [Stock and Location Reporting Field Definitions](./05-stock-and-location-reporting-field-definitions.md)
* [Warehouse Operations and Transfer Field Definitions](./01-warehouse-operations-and-transfer-field-definitions.md)
