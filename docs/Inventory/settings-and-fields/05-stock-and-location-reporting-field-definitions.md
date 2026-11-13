# Stock and Location Reporting Field Definitions

This document provides a comprehensive data dictionary for enterprise stock balance reports, historical inventory at date snapshots, storage bin tracking, and location visualizers in CURQ Inventory.

---

## 1. Stock Register Columns and Row Controls Data Dictionary

The Stock register itemizes physical quantities, valuation costs, unallocated availability, and incoming/outgoing pipelines per catalog item:

### 1.1 Register Columns

| Field Name | Description |
| :--- | :--- |
| **Product** | Inventory catalog item title and specification *(e.g., `Fairphone 5`)*. |
| **Unit Cost** | Valuation standard cost per inventory unit *(e.g., `€ 99.00`)*. |
| **Total Value** | Extended financial inventory valuation calculated as on-hand quantity multiplied by unit cost *(e.g., `€ 4,950.00`)*. |
| **On Hand** | Total physical unit count currently stored in warehouse premises *(e.g., `50.00`)*. |
| **Free to Use** | Unallocated physical unit count available for new customer orders, equal to on-hand stock minus outgoing reservations *(e.g., `50.00`)*. |
| **Incoming** | Total units scheduled for arrival on approved purchase orders or pending inbound receipts *(e.g., `0.00`)*. |
| **Outgoing** | Total units committed to confirmed customer delivery orders or work orders awaiting dispatch *(e.g., `0.00`)*. |
| **Unit** | Standard measurement unit applied to the product inventory count *(e.g., `Units`)*. |

### 1.2 Row Action Buttons

| Button | Behavior |
| :--- | :--- |
| **History** | Opens the Moves History register pre-filtered to this product. |
| **Replenishment** | Opens reordering rules and safety stock thresholds for this product. |

---

## 2. Inventory at Date Modal Controls Data Dictionary

Auditors use the Inventory at Date wizard to recalculate point-in-time historical stock balances and asset valuations:

### 2.1 Modal Fields

| Field Name | Description |
| :--- | :--- |
| **Inventory at Date Datetime Field** | Timestamp input determining the exact historical cutoff for recalculating warehouse stock balances *(e.g., `11/09/2026 10:29:11`)*. |

### 2.2 Modal Buttons

| Button | Behavior |
| :--- | :--- |
| **Confirm** | Executes the historical balance recalculation and updates the register display. |
| **Cancel** | Closes the popup without altering current on-hand quantities. |

---

## 3. Locations List Register and Action Controls Data Dictionary

The tabular view details physical quantities, reserved units, and operational shortcuts for each storage bin:

### 3.1 Register Columns

| Field Name | Description |
| :--- | :--- |
| **Location** | Hierarchical warehouse storage path *(e.g., `WH/Stock`)* indicating physical bin placement. |
| **Product** | Inventory catalog item description and specification *(e.g., `Fairphone 5`)* stored in that location. |
| **Package** | Container, tote, or pallet identifier *(optional)* grouping items within the location. |
| **Lot/Serial Number** | Hardware serial identifier or production batch number tracked in that location. |
| **On Hand Quantity** | Total physical unit count residing in that specific location *(e.g., `50.00`)*. |
| **Reserved Quantity** | Units allocated to pending outbound delivery orders or manufacturing orders awaiting physical picking *(e.g., `0.00`)*. |
| **Unit** | Measurement unit associated with the stored inventory balance *(e.g., `Units`)*. |
| **Summary Total Row** | Bottom register row aggregating total on hand and reserved inventory quantities across all active lines *(e.g., `50.00` on hand, `0.00` reserved)*. |

### 3.2 Row Action Buttons

| Button | Behavior |
| :--- | :--- |
| **History** | Clicking the clock icon opens the Moves History register pre-filtered to this product and location. |
| **Replenishment** | Clicking the cycle icon navigates to replenishment rules for this product at this location. |

---

## 4. Inline Stock Balance Entry Data Dictionary

Clicking **+ New** transitions the register to inline edit mode for manual stock balance intake:

| Field Name | Description |
| :--- | :--- |
| **Location** | Searchable selection field defaulting to internal storage *(e.g., `WH/Stock`)*. |
| **Product** | Dropdown lookup menu to search and assign the target catalog item to this storage location. |
| **Lot/Serial Number** | Optional input dropdown assigning tracked serial numbers or production lot identifiers to the stock line. |
| **On Hand Quantity Input Field** | Numeric field entering the initial opening balance or physical count adjustment *(defaults to `0.00`)*. |
| **Reserved Quantity Display** | Read-only system calculation showing committed outgoing units *(defaults to `0.00` for new entries)*. |
| **Unit** | Measurement unit associated with the stored inventory balance *(e.g., `Units`)*. |

---

## Related Documentation

* [Track Enterprise Stock Balances and Inventory at Date](../task-guides/13-track-enterprise-stock-balances-and-inventory-at-date.md)
* [Track Inventory by Location and Storage Bins](../task-guides/12-track-inventory-by-location-and-storage-bins.md)
* [Stock Moves Analysis and Valuation Field Definitions](./06-stock-moves-analysis-and-valuation-field-definitions.md)
* [Warehouse Operations and Transfer Field Definitions](./01-warehouse-operations-and-transfer-field-definitions.md)
* [Product Catalog and Traceability Field Definitions](./02-product-catalog-and-traceability-field-definitions.md)
