# Product Catalog and Traceability Field Definitions

This document provides a comprehensive data dictionary for product masters, variants, replenishment parameters, logistics routes, and lot and serial number traceability in CURQ Inventory.

---

## 1. Products List Register Data Dictionary

In List mode, CURQ formats product records into tabular columns tracking stock levels and costing metrics:

### 1.1 Register Columns

| Field Name | Description |
| :--- | :--- |
| **Product Name** | Catalog description and title of the inventory item *(e.g., `Fair Phone 5`, `Fair Phone 5 (Black)`)*. |
| **Internal Reference** | Enterprise SKU code or internal reference identifier used for scanning and logistics tracking. |
| **Tags** | Categorical labels applied to group products for reporting and search *(e.g., `Phone`)*. |
| **Sales Price** | Base customer selling price before customer-specific discounts or price lists *(e.g., `€ 199.00`, `€ 67.00`)*. |
| **Cost** | Standard cost price or moving average cost used to compute inventory valuation *(e.g., `€ 0.00`, `€ 42.00`)*. |
| **On Hand** | Total physical quantity of product units currently stored in internal warehouse locations. |
| **Forecasted** | Projected inventory quantity calculating on-hand stock plus incoming receipts minus outgoing delivery reservations. |
| **Unit** | Standard Unit of Measure applied to inventory tracking and transactions *(e.g., `Units`)*. |

---

## 2. Product General Information Tab Data Dictionary

The General Information tab defines fundamental logistics classifications, tax profiles, valuation costs, and inventory tracking activation:

| Field Name | Description |
| :--- | :--- |
| **Product Type** | Classification selector between **Goods** *(tangible physical products)*, **Service** *(non-material labor)*, and **Combo** *(product bundles)*. |
| **Invoicing Policy** | Billing rule governing when invoices are generated; set to **Delivered quantities** to invoice only after physical shipment validation. |
| **Track Inventory** | Checkbox converting physical goods into tracked **Storable Products**. When unchecked, the product is a **Consumable**; when checked, CURQ activates on-hand balances, forecasting, and reordering rules. |
| **Sales Price** | Base customer sales price per unit *(e.g., `€ 67.00 per Units`)* before discounts or customer-specific price rules. |
| **Sales Taxes** | Customer sales tax tags applied automatically to sales quotation lines *(e.g., `Verkopen - BTW hoog (21%)`)*. |
| **Tax-Inclusive Price** | Calculated customer price displaying total amount inclusive of sales taxes *(e.g., `= € 81.07 Incl. Taxes`)*. |
| **Cost** | Standard unit cost price *(e.g., `€ 42.00 per Units`)* applied to calculate automated stock valuation and COGS postings. |
| **Purchase Taxes** | Supplier purchase tax tags applied automatically to vendor purchase order lines *(e.g., `Inkopen - BTW hoog (21%)`)*. |
| **Category** | Product category grouping governing general ledger inventory asset accounts and costing strategies *(e.g., `All`)*. |
| **Reference** | Enterprise SKU or unique alphanumeric product reference code. |
| **Barcode** | Standard optical barcode *(e.g., EAN-13, UPC)* scanned during barcode-assisted picking and receiving. |
| **Internal Notes** | Internal memo field for recording warehouse handling guidance or special storage requirements. |

---

## 3. Product Inventory Tab Data Dictionary

The **Inventory** tab governs procurement routing, fulfillment lead times, virtual counterpart locations, and operational dock instructions:

### 3.1 Inventory Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Buy Route Checkbox** | Operational route instructing replenishment rules to generate draft purchase orders when stock reaches minimum thresholds. |
| **Dropship Route Checkbox** | Operational route fulfilling customer orders directly from vendor locations, bypassing warehouse receiving and putaway. |
| **Responsible** | Assigned warehouse specialist or inventory lead overseeing product availability and storage health. |
| **Customer Lead Time** | Lead time buffer in days *(e.g., `0 days`)* added to sales order confirmation dates to determine scheduled delivery deadlines. |
| **HS Code** | Harmonized System customs classification code applied to international shipping manifests and customs filings. |
| **Origin of Goods** | Country of origin designating product manufacturing location for import and export compliance. |
| **Production Location** | Default virtual counterpart location for manufacturing work orders *(e.g., `Virtual Locations/Production`)*. |
| **Inventory Location** | Default virtual counterpart location for physical stock count adjustments *(e.g., `Virtual Locations/Inventory adjustment`)*. |
| **Description for Receipts** | Automated putaway instructions printed on physical receiving sheets for dock workers. |
| **Description for Delivery Orders** | Automated packaging and handling instructions printed on outbound delivery slips for shipping teams. |

### 3.2 Links and Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **View Diagram Link** | Opens the graphical supply chain route diagram mapping vendor intake, warehouse moves, and customer dispatch. |
| **Variants** | Displays configured product attribute combinations *(e.g., `3 Variants`)* and opens the variants list on click. |
| **Pricelist** | Displays customer-specific pricing and discount rules *(e.g., `1 Rule`)* and opens them on click. |

---

## 4. Lots / Serial Numbers Register Data Dictionary

The Lots / Serial Numbers register tracks all unique product tracking entities across the enterprise:

### 4.1 Register Columns and Search

| Field Name | Description |
| :--- | :--- |
| **Lot/Serial Number** | Alphanumeric code uniquely identifying the specific physical unit or production batch. |
| **Internal Reference** | Internal manufacturer part number, supplier batch code, or alternate SKU reference. |
| **Product** | Relational link displaying the catalog item associated with this tracking number. |
| **Created on** | Timestamp recording when the lot or serial number record was first registered in the system. |
| **Activities** | Next planned activity, audit task, or quality inspection scheduled for this tracking record. |

---

## 5. Lot / Serial Number Form View Data Dictionary

The form view defines product associations, valuation balances, location tracking, and traceability reports:

### 5.1 Lot / Serial Form Fields

| Field Name | Description |
| :--- | :--- |
| **Lot/Serial Number** | Mandatory unique string identifying the item *(e.g., `0000001`)*; must be populated to save the record. |
| **Product** | Mandatory relational field selecting the inventory item associated with this identifier *(e.g., `Fair Phone 5`)*. |
| **On Hand Quantity** | Read-only inventory counter displaying the current physical units present in warehouse storage; updates automatically upon transfer validation. |
| **Internal Reference** | Optional secondary identification code, supplier lot number, or internal tracking label. |
| **Total Value** | Read-only financial metric displaying the current balance sheet valuation of on-hand units for this serial. |
| **Average Cost** | Read-only metric calculating the moving average inventory valuation cost per unit for this lot. |
| **Cost** | Standard cost price per unit used for inventory asset accounting and COGS calculations. |
| **Description Tab** | Notebook tab containing a freeform text area for recording batch quality certificates, supplier notes, or storage instructions. |

### 5.2 Form Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **Location** | Opens the specific internal warehouse storage bin or shelf location holding this unit. |
| **Traceability** | Generates the full upstream and downstream movement report across purchase orders, receipts, and delivery orders. |

---

## Related Documentation

* [Manage Product Catalog and Inventory Levels](../task-guides/05-manage-product-catalog-and-inventory-levels.md)
* [Manage Lot and Serial Number Traceability](../task-guides/06-manage-lot-and-serial-number-traceability.md)
* [Warehouse Operations and Transfer Field Definitions](./01-warehouse-operations-and-transfer-field-definitions.md)
* [Replenishment and Reordering Rules Field Definitions](./04-replenishment-and-reordering-rules-field-definitions.md)
* [Understanding Double-Entry Inventory and Stock Flows](../core-concepts/01-understanding-double-entry-inventory-and-stock-flows.md)
