# Stock Moves Analysis and Valuation Field Definitions

This document provides a comprehensive data dictionary for transfer smart controls, detailed operations move lines, stock moves history, throughput analysis pivot matrices, and financial inventory valuation ledgers in CURQ Inventory.

---

## 1. Validated Transfer Smart Controls Data Dictionary

> **Warning - Cross-System Impact (Inventory Valuation & Accounting):** Adjusting costing methods (Standard, Average Cost / AVCO, FIFO) or toggling inventory valuation between Manual and Automated creates retroactive, irreversible ledger postings in CURQ Accounting. Modifying valuation settings on active product categories distorts balance sheet asset values and Cost of Goods Sold (COGS). Non-technical users should never adjust product valuation models without accountant oversight.

Following the completion of an outbound delivery order or inbound stock receipt, CURQ activates dedicated navigation buttons in the form header:

### 1.1 Validated Transfer Fields

| Field Name | Description |
| :--- | :--- |
| **Transfer Reference** | System-generated transfer code displayed as the form header *(e.g., `WH/OUT/00069`)*. |
| **Delivery Address** | Customer or destination contact receiving the dispatched goods *(e.g., `John Doe`)*. |
| **Operation Type** | Warehouse route governing the completed transfer *(e.g., `My Company: Delivery Orders`)*. |
| **Scheduled Date** | Planned execution date and time initially scheduled for the transfer *(e.g., `10/18/2026 13:08:44`)*. |
| **Effective Date** | Immutable timestamp recording the precise date and time of physical stock validation *(e.g., `11/05/2026 17:26:52`)*. |
| **Source Document** | Originating business record triggering fulfillment *(e.g., `S00042`)*. |

### 1.2 Operations Tab Columns

| Field Name | Description |
| :--- | :--- |
| **Product** | Catalog item or variant transferred during execution *(e.g., `Fair Phone 5 (Black)`)*. |
| **Demand** | Requested quantity specified on the originating order *(e.g., `1.00`)*. |
| **Quantity** | Actual physical quantity validated and moved *(e.g., `1.00`)*. |
| **Unit** | Standard Unit of Measure applied to the transfer line *(e.g., `Units`)*. |

### 1.3 Header Action and Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **Moves** | Opens underlying physical stock moves, source bins, and lot tracking lines for this transfer. |
| **Valuation** | Clicking the currency-symbol smart button opens inventory ledger valuation entries for this transfer. |
| **Print** | Generates and downloads the Delivery Slip, Receiving Slip, or picking operations document. |
| **Return** | Initiates reverse logistics by creating an inbound or outbound return transfer. |

---

## 2. Moves History List Register Data Dictionary

The List View itemizes atomic double-entry stock transactions and hardware tracking identifiers:

| Field Name | Description |
| :--- | :--- |
| **Date** | Timestamp recording the exact execution date and time of the physical stock move *(e.g., `11/06/2026 16:24:39`)*. |
| **Reference** | Transactional document code linking to the originating receipt, delivery, or scrap record *(e.g., `WH/IN/00110`, `SP/00001`)*. |
| **Product** | Inventory catalog item or product variant transferred *(e.g., `Fairphone 5`, `Fair Phone 5 (Black)`)*. |
| **Lot/Serial Number** | Specific hardware serial string or production batch identifier tracked during movement. |
| **From Location** | Source storage location debited during execution *(e.g., `Partners/Vendors`, `WH/Stock`)*. |
| **To Location** | Destination storage location credited during execution *(e.g., `WH/Stock`, `Virtual Locations/Scrap`, `Partners/Customers`)*. |
| **Quantity** | Numeric count of physical units transferred, with warehouse stock deductions highlighted in red text *(e.g., `2.00 Units`, `1.00 Units`)*. |
| **Unit of Measure** | Standard measurement unit applied to the product quantity *(e.g., `Units`)*. |
| **Status** | Operational lifecycle stage badge confirming terminal execution (*Done*). |

---

## 3. Moves Analysis List Register Data Dictionary

The List View itemizes atomic move records along with execution statuses and tracking references:

| Field Name | Description |
| :--- | :--- |
| **Date Scheduled** | Scheduled or execution timestamp recording the date and time of the physical movement. |
| **Reference** | Transactional document code linking to the originating operational record. |
| **Product** | Inventory catalog item description and specification. |
| **Lot/Serial Number** | Hardware serial string or production batch identifier tracked during movement. |
| **From Location** | Source storage location debited during execution. |
| **To Location** | Destination storage location credited during execution. |
| **Quantity** | Numeric count of physical units transferred, with inventory deductions displayed in red text. |
| **Unit of Measure** | Standard measurement unit applied to the product quantity *(e.g., `Units`)*. |
| **Status** | Operational lifecycle stage badge confirming terminal execution (*Done*). |

---

## 4. Stock Valuation Register Data Dictionary

Drilling into valuation ledgers from a validated transfer exposes financial double-entry records:

| Field Name | Description |
| :--- | :--- |
| **Date** | Exact execution timestamp matching the transfer effective date *(e.g., `11/05/2026 17:26:52`)*. |
| **Reference** | Outbound or inbound transfer code *(e.g., `WH/OUT/00069`)* linking to the originating shipment. |
| **Product** | Inventory catalog item evaluated *(e.g., `Fair Phone 5 (Black)`)*. |
| **Quantity** | Signed numeric quantity delta *(e.g., `-1.00` for outbound deliveries reducing inventory, `+4.00` for inbound receipts)*. |
| **Total Value** | Extended balance sheet inventory value change *(e.g., `€ 0.00` or standard cost valuation)*. |

---

## 5. Enterprise Stock Valuation Register Dictionary

Navigating to **Reporting > Valuation** exposes global inventory asset valuations in tabular and pivot modes:

### 5.1 Register Columns and Pivot Metrics

| Field Name | Description |
| :--- | :--- |
| **Date** | Execution timestamp recording the physical move completion date and time *(e.g., `11/06/2026 16:24:39`, `11/06/2026 16:59:40`)*. |
| **Reference** | Transactional document code linking to the originating warehouse receipt or blank for direct cost revaluation adjustments *(e.g., `WH/IN/00110`)*. |
| **Product** | Inventory catalog item evaluated *(e.g., `Fairphone 5`)*. |
| **Quantity** | Inventory volume delta committed by the transfer *(e.g., `50.00` for physical moves, `0.00` for pure valuation revaluations)*. |
| **Remaining Qty** | Pivot table column calculating remaining physical stock units on hand at the close of the period *(e.g., `50.00`)*. |
| **Remaining Value** | Pivot table column calculating remaining monetary asset balance at the close of the period *(e.g., `0.00`)*. |

---

## 6. Valuation at Date Modal Dialog Data Dictionary

Auditors use the Valuation at Date wizard to generate historical asset snapshots:

### 6.1 Modal Fields

| Field Name | Description |
| :--- | :--- |
| **Valuation at Date** | Audit cutoff timestamp selector determining the historical date and time for stock recalculation *(e.g., `11/06/2026 16:54:38`)*. |

### 6.2 Modal Buttons and Window Controls

| Button | Behavior |
| :--- | :--- |
| **Confirm** | Recalculates stock valuation quantities and financial balances as of the selected historical cutoff. |
| **Cancel** | Closes the popup without modifying the real-time valuation display. |

---

## Related Documentation

* [Analyze Stock Moves and Warehouse Throughput](../task-guides/10-analyze-stock-moves-and-warehouse-throughput.md)
* [Audit Historical Stock Movements in Moves History](../task-guides/11-audit-historical-stock-movements-in-moves-history.md)
* [Audit Stock Moves and Inventory Valuation](../task-guides/04-audit-stock-moves-and-inventory-valuation.md)
* [Stock and Location Reporting Field Definitions](./05-stock-and-location-reporting-field-definitions.md)
* [Warehouse Operations and Transfer Field Definitions](./01-warehouse-operations-and-transfer-field-definitions.md)
