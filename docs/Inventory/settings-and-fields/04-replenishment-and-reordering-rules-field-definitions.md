# Replenishment and Reordering Rules Field Definitions

This document provides a comprehensive data dictionary for the replenishment board, minimum/maximum reordering rules, vendor pricelists, and forecasted stock calculation parameters in CURQ Inventory.

---

## 1. Replenishment Board Header and Navigation Controls Data Dictionary

> **Caution (Automated Procurement Risk):** Minimum and maximum reordering rules trigger automated Requests for Quotation (RFQs) and manufacturing orders in Purchase. Inaccurate quantity thresholds or exaggerated safety stock lead times can automatically commit significant company capital without buyer review. Always simulate reordering rules in a staging environment before activating automated procurement triggers.

The header and filter drawer provide controls to search, filter planning horizons, and switch display modes across replenishment propositions:

### 1.1 Header Elements and Filters

| Element / Filter | Description |
| :--- | :--- |
| **Replenishment Board Title** | Module header indicating active navigation within the procurement replenishment register. |
| **Search Bar** | Keyword lookup field to filter replenishment lines by product name, SKU reference, or category. |
| **Not Snoozed Filter Tag** | Default filter tag active in the search bar that excludes deferred or snoozed replenishment lines from the active view. |
| **HORIZON Filter Control** | Forward planning filter *(e.g., `0 days`)* defining the time window used to project customer demand, delivery orders, and incoming receipts. |
| **TRIGGER Filter Control** | Categorical filter distinguishing between **Manual** rules requiring buyer review and **Automated** rules managed by the system scheduler. |
| **CATEGORY Filter Control** | Multiselect filter grouping replenishment propositions by product category. |

### 1.2 Header Buttons and View Switchers

| Button / Control | Behavior |
| :--- | :--- |
| **+ New Action Button** | Inserts a new manual reordering rule for a specified product and location. |
| **Settings Gear Icon** | Opens administrative view customization, reordering automation parameters, and scheduled action settings. |
| **Horizon Drawer Toggle** | Expands or collapses the left planning horizon filter drawer. |
| **Refresh Action Control** | Recalculates real-time stock balances and refreshes proposition lines. |
| **List View Switcher** | Switches the board to a tabular list of replenishment propositions and stock metrics. |
| **Kanban View Switcher** | Switches the board to visual replenishment cards grouped by category or priority. |

---

## 2. Search: Product Lookup Modal Data Dictionary

Clicking **+ New** on the Replenishment board and selecting **Search More...** opens the filtered product selection dialog:

### 2.1 Modal Fields

| Field Name | Description |
| :--- | :--- |
| **Internal Reference** | Alphanumeric enterprise SKU identifier assigned to the product variant. |
| **Name** | Primary catalog title of the inventory item *(e.g., `Fairphone 5`)*. |
| **Website** | Relational link showing online eCommerce availability. |
| **Variant Values** | Specific attribute combination tags distinguishing variant permutations. |
| **Sales Price** | Standard customer selling price configured for the item *(e.g., `1.00`)*. |
| **Cost** | Standard or moving average cost price used for valuation accounting *(e.g., `0.00`)*. |
| **On Hand** | Real-time physical inventory count stored in internal warehouse locations *(e.g., `0.00`)*. |
| **Forecasted** | Projected inventory availability after factoring in scheduled receipts and dispatches *(e.g., `0.00`)*. |
| **Unit** | Primary unit of measure applied to inventory tracking *(e.g., `Units`)*. |

### 2.2 Modal Buttons

| Button | Behavior |
| :--- | :--- |
| **New** | Opens a creation form to create a new product record directly from the modal. |
| **Close** | Closes the lookup modal without making a product selection. |

---

## 3. Replenishment Table Columns Data Dictionary

The table grid displays real-time stock metrics, safety limits, and calculated procurement recommendations:

| Field Name | Description |
| :--- | :--- |
| **Product** | Relational link displaying the catalog item name requiring inventory replenishment *(e.g., `Fairphone 5`)*. |
| **On Hand** | Real-time physical inventory quantity currently stored within internal warehouse locations *(e.g., `0.00`)*. |
| **Forecast** | Projected inventory quantity calculating on-hand stock plus incoming receipts minus outbound sales reservations *(e.g., `0.00`)*. |
| **Forecast Origin Icon** | Visual indicator *(such as a factory or truck icon)* signifying whether projected replenishment originates from purchasing or manufacturing routes. |
| **Min** | Minimum safety stock threshold configured for the item *(e.g., `10.00`)* below which automated or manual reordering triggers. |
| **Max** | Maximum target stock capacity ceiling configured for the item *(e.g., `50.00`)* defining the upper replenishment limit. |
| **To Order** | Recommended quantity to purchase or manufacture *(e.g., `50.00`)* to return projected stock levels to the configured maximum limit. |
| **Unit of Measure (UoM)** | Standard unit applied to the product inventory count *(e.g., `Units`)*. |

---

## 4. Row-Level Action Controls Data Dictionary

Each row in the replenishment register exposes dedicated action buttons for rapid execution without navigating away from the board:

| Button | Behavior |
| :--- | :--- |
| **Order (Truck Icon)** | Immediately generates a procurement document *(such as a draft Purchase Order or Manufacturing Order)* for the specified `To Order` quantity. |
| **Automate (Cycle Icon)** | Converts the rule from manual review to automated background scheduler execution. |
| **Snooze (Bell Icon)** | Temporarily hides the replenishment proposition from the active register until a defined future date. |

---

## 5. Procurement Warning Dialog Data Dictionary

When automated purchase order generation encounters vendor pricing discrepancies, CURQ displays a modal blocking action:

| Button | Behavior |
| :--- | :--- |
| **Edit Product** | Redirects directly to the product form's Purchase tab so supplier pricing or quantity rules can be fixed. |
| **Close** | Closes the warning modal and returns to the replenishment board without generating orders. |

---

## 6. Product Purchase Tab and Vendor Pricelist Data Dictionary

Navigating to the product form from replenishment displays vendor agreements, bill matching rules, and lead times:

### 6.1 Product and Purchase Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Vendor** | Relational link selecting the partner organization supplying the product *(e.g., `Acme Technologies`)*. |
| **Minimum Quantity** | Threshold value specifying the minimum order volume required by the supplier to honor the agreed price *(e.g., `100.00`)*. |
| **Contracted Price** | Unit purchase cost agreed upon with the supplier *(e.g., `99.00`)*. |
| **Currency Selector** | Transaction currency applied to vendor procurement orders *(e.g., `EUR`)*. |
| **Delivery Lead Time** | Estimated duration in days required by the vendor to deliver goods following order placement *(e.g., `1` day)*. |
| **Purchase Unit** | Specific measurement unit used when ordering goods from suppliers *(e.g., `Units`)*. |
| **Control Policy** | Bill matching rule selecting between **On ordered quantities** and **On received quantities** (enforcing 3-way matching against warehouse receipts). |
| **Purchase Description** | Text area for internal instructions or vendor notes appended automatically to outbound purchase orders. |

### 6.2 Header Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **Update Quantity** | Opens the on-hand inventory adjustment interface to manually update stock quantities. |
| **Replenish** | Launches the manual replenishment wizard for a one-off stock order. |
| **Print Labels** | Opens the label printing dialog to generate product and shelf barcode tags. |

---

## 7. Generated Request for Quotation (RFQ) Data Dictionary

Clicking the generated order reference opens the procurement order in the CURQ Purchase module:

### 7.1 RFQ Fields and Financial Summary

| Field Name | Description |
| :--- | :--- |
| **RFQ Document Identifier** | Alphanumeric purchase document code assigned upon replenishment generation *(e.g., `P00132`)*. |
| **Vendor** | Relational link displaying the contracted supplier selected by the replenishment engine *(e.g., `Acme Technologies`)*. |
| **Vendor Reference** | Optional supplier-issued quotation number or external commercial reference code. |
| **Currency** | Transaction currency applied to the purchase order and vendor pricing *(e.g., `EUR`)*. |
| **Order Deadline** | Target date and time by which the purchase order should be confirmed with the vendor *(e.g., `11/06/2026 17:30:00`)*. |
| **Expected Arrival** | Estimated delivery timestamp factoring in vendor transit lead time *(e.g., `11/07/2026 17:30:00`)*. |
| **On-Time Delivery** | Performance metric tracking historical vendor delivery punctuality *(e.g., `0% On-Time Delivery`)*. |
| **Project** | Optional project workspace linked to track procurement material costs against a project. |
| **Products** | Itemized procurement table displaying the ordered product *(e.g., `Fairphone 5`)*, quantity, unit of measure, price, taxes, and amount. |
| **Quantity** | Required replenishment volume populated directly from the reordering rule deficit *(e.g., `50.00`)*. |
| **UoM** | Unit of Measure applied to the ordered product quantity *(e.g., `Units`)*. |
| **Unit Price** | Agreed purchase cost per unit drawn from the approved vendor pricelist *(e.g., `99.00`)*. |
| **Taxes** | Applicable import or VAT purchase tax classification tags applied to the order line. |
| **Amount** | Calculated line-item subtotal before taxes *(e.g., `€ 4,950.00`)*. |

### 7.2 RFQ Action Buttons

| Button | Behavior |
| :--- | :--- |
| **Send by Email** | Emails the RFQ document directly to the supplier and updates the status to **RFQ Sent**. |
| **Print RFQ** | Generates and downloads a formal quotation request PDF. |
| **Confirm Order** | Converts the RFQ into an approved Purchase Order and generates inbound dock receipts. |
| **Cancel** | Cancels the draft procurement request without inventory impact. |

---

## Related Documentation

* [Manage Replenishment and Automated Reordering Rules](../task-guides/09-manage-replenishment-and-automated-reordering-rules.md)
* [Understanding Reordering Rules and Lead Times](../core-concepts/02-understanding-reordering-rules-and-lead-times.md)
* [Product Catalog and Traceability Field Definitions](./02-product-catalog-and-traceability-field-definitions.md)
* [Warehouse Operations and Transfer Field Definitions](./01-warehouse-operations-and-transfer-field-definitions.md)
* [Stock and Location Reporting Field Definitions](./05-stock-and-location-reporting-field-definitions.md)
