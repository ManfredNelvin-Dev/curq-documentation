# Stock and Location Reporting Field Definitions

This document provides a comprehensive data dictionary for enterprise stock balance reports, historical inventory at date snapshots, storage bin tracking, and location visualizers in CURQ Inventory.

---

## 1. Stock Report Header and Category Filter Controls

The header action bar and collapsible category drawer provide search, filtering, and historical audit utilities across company-wide inventory balances:

| Field Name | Description |
| :--- | :--- |
| **+ New Action Button** | Action button inserting an inline editable row to record a manual opening stock balance or physical count adjustment. |
| **Table Layout Switcher Icon** | Layout icon toggling tabular formatting and row density across the register. |
| **Inventory at Date Action Button** | Primary execution button (dark blue) launching the historical point-in-time stock balance recalculation dialog. |
| **Stock Workspace Breadcrumb** | Header title confirming navigation within the enterprise stock report. |
| **Settings Cog Icon** | Preferences control allowing operators to customize visible register columns and sorting orders. |
| **Search Input Bar** | Query lookup field to search stock by product name, SKU, or category. |
| **Search Options Dropdown Arrow** | Context menu expanding advanced filter criteria, grouping options, and custom search filters. |
| **Refresh Action Control** | Action icon updating the register with live physical stock figures from the inventory ledger. |
| **Pagination Indicator** | Pager displaying active record window and total line count *(e.g., `1-1/1`)*. |
| **Category Panel Drawer** | Collapsible sidebar on the left filtering the stock list by product category hierarchy. |
| **Collapse Drawer Icon** | Toggle control (double left chevron) collapsing the category sidebar to maximize table width. |
| **All Category Checkbox** | Category selection filter including all configured product catalog items. |

---

## 2. Stock Register Columns and Row Controls Data Dictionary

The Stock register itemizes physical quantities, valuation costs, unallocated availability, and incoming/outgoing pipelines per catalog item:

| Field Name | Description |
| :--- | :--- |
| **Batch Selection Checkbox** | Multi-row selector enabling bulk actions across selected stock lines. |
| **Product Column** | Inventory catalog item title and specification *(e.g., `Fairphone 5`)*. |
| **Unit Cost Column** | Valuation standard cost per inventory unit *(e.g., `€ 99.00`)*. |
| **Total Value Column** | Extended financial inventory valuation calculated as on-hand quantity multiplied by unit cost *(e.g., `€ 4,950.00`)*. |
| **On Hand Column** | Total physical unit count currently stored in warehouse premises *(e.g., `50.00`)*. |
| **Inline Adjustment Pencil Icon** | Quick-action control beside on-hand quantity opening an inline editing field for immediate physical count corrections. |
| **Free to Use Column** | Unallocated physical unit count available for new customer orders, equal to on-hand stock minus outgoing reservations *(e.g., `50.00`)*. |
| **Incoming Column** | Total units scheduled for arrival on approved purchase orders or pending inbound receipts *(e.g., `0.00`)*. |
| **Outgoing Column** | Total units committed to confirmed customer delivery orders or work orders awaiting dispatch *(e.g., `0.00`)*. |
| **Unit Column** | Standard measurement unit applied to the product inventory count *(e.g., `Units`)*. |
| **History Action Control** | Row-level shortcut opening the Moves History register pre-filtered to this product. |
| **Replenishment Action Control** | Row-level shortcut opening the reordering rules configuration and safety stock thresholds for this product. |
| **Column Options Selector Icon** | Table customization slider icon allowing operators to display or conceal optional data columns. |
| **Summary Total Row** | Bottom register row aggregating extended total value and unit counts across all listed products. |

---

## 3. Inventory at Date Modal Controls Data Dictionary

Auditors use the Inventory at Date wizard to recalculate point-in-time historical stock balances and asset valuations:

| Field Name | Description |
| :--- | :--- |
| **Modal Header Title** | Window banner identifying the historical inventory calculation interface. |
| **Window Minimize Control** | Icon reducing the modal dialog to the lower taskbar. |
| **Window Close Icon** | Action icon dismissing the dialog without altering the stock display. |
| **Inventory at Date Datetime Field** | Timestamp input determining the exact historical cutoff for recalculating warehouse stock balances *(e.g., `11/09/2026 10:29:11`)*. |
| **Confirm Action Button** | Primary button executing the historical balance recalculation and updating the register display. |
| **Cancel Action Button** | Dismissal button closing the popup without altering current on-hand quantities. |

---

## 4. Locations Report Header and Filter Controls

The control bar governs searching, grouping, record creation, and layout modes across warehouse storage locations:

| Field Name | Description |
| :--- | :--- |
| **+ New Action Button** | Action button inserting an inline editable row to record initial stock balances or manual location adjustments. |
| **Locations Breadcrumb Title** | Workspace header identifying active navigation within the storage locations inventory register. |
| **Search Input Bar** | Query bar to filter locations by bin name, zone, internal reference, or product SKU. |
| **Internal Filter Pill Tag** | Default filter restricting listed locations strictly to physical, internal company storage zones *(e.g., `WH/Stock`)*. |
| **Search Configuration Dropdown** | Context menu providing custom filter parameters, grouping criteria, and saved search filters. |
| **Settings Cog Icon** | Preferences control allowing users to customize visible register columns and sorting orders. |
| **Refresh Action Control** | Action icon updating the register with live transactions from the inventory ledger. |
| **Pagination Indicator** | Pager displaying active record window and total line count *(e.g., `1-1/1`)*. |
| **List View Switcher** | Primary tabular layout displaying locations, products, and physical balances. |
| **Pivot View Switcher** | Multi-dimensional matrix view aggregating stock quantities across locations and product categories. |
| **Graph View Switcher** | Visual chart interface rendering stock distribution curves across storage zones. |

---

## 5. Locations List Register and Action Controls Data Dictionary

The tabular view details physical quantities, reserved units, and operational shortcuts for each storage bin:

| Field Name | Description |
| :--- | :--- |
| **Batch Selection Checkbox** | Multi-row selector enabling bulk actions across selected location lines. |
| **Location Column** | Hierarchical warehouse storage path *(e.g., `WH/Stock`)* indicating physical bin placement. |
| **Product Column** | Inventory catalog item description and specification *(e.g., `Fairphone 5`)* stored in that location. |
| **Package Column** | Container, tote, or pallet identifier *(optional)* grouping items within the location. |
| **Lot/Serial Number Column** | Hardware serial identifier or production batch number tracked in that location. |
| **On Hand Quantity Column** | Total physical unit count residing in that specific location *(e.g., `50.00`)*. |
| **Reserved Quantity Column** | Units allocated to pending outbound delivery orders or manufacturing orders awaiting physical picking *(e.g., `0.00`)*. |
| **Unit Column** | Measurement unit associated with the stored inventory balance *(e.g., `Units`)*. |
| **History Action Control** | Clock icon opening the Moves History register pre-filtered to this product and location. |
| **Replenishment Action Control** | Cycle icon navigating directly to replenishment rules for this product at this location to update min/max levels or trigger an order. |
| **Column Options Selector Icon** | Table customization control on the far right allowing users to show or hide optional columns. |
| **Summary Total Row** | Bottom register row aggregating total on hand and reserved inventory quantities across all active lines *(e.g., `50.00` on hand, `0.00` reserved)*. |

---

## 6. Inline Stock Balance Entry Data Dictionary

Clicking **+ New** transitions the register to inline edit mode for manual stock balance intake:

| Field Name | Description |
| :--- | :--- |
| **Save Action Button** | Primary button (checkmark icon) validating and committing the inline stock line to the inventory database. |
| **Discard Action Button** | Dismissal button (undo arrow icon) abandoning unsaved line entries and restoring default register display. |
| **Location Selector Field** | Searchable selection field defaulting to internal storage (WH/Stock) with external record link arrow. |
| **Open Related Location Arrow** | Shortcut icon (right arrow) opening the master location configuration record for the selected warehouse zone. |
| **Product Selector Field** | Dropdown lookup menu to search and assign the target catalog item to this storage location. |
| **Lot/Serial Number Selector Field** | Optional input dropdown assigning tracked serial numbers or production lot identifiers to the stock line. |
| **On Hand Quantity Input Field** | Numeric field entering the initial opening balance or physical count adjustment (defaults to 0.00). |
| **Reserved Quantity Display** | Read-only system calculation showing committed outgoing units (defaults to 0.00 for new entries). |
| **Row Checkbox Selector** | Selection box allowing individual row inclusion in bulk register actions. |

---

## 7. Locations Pivot Matrix Data Dictionary

The Pivot View summarizes stock quantities across physical storage locations and catalog items:

| Field Name | Description |
| :--- | :--- |
| **Measures Metric Dropdown** | Calculation selector specifying the metric evaluated across the matrix *(configured to Quantity)*. |
| **Flip Axis Control** | Tool interchanging horizontal location columns and vertical product rows for flexible cross-analysis. |
| **Expand All and Collapse All Controls** | Action controls expanding or collapsing nested multi-level location and product hierarchies. |
| **Download (XLSX) Control** | Utility downloading the active multidimensional matrix directly as a Microsoft Excel spreadsheet. |
| **Insert in Spreadsheet Control** | Embedding tool inserting the location pivot matrix into an internal CURQ spreadsheet dashboard. |
| **Total Column Header** | Root aggregation column summarizing unit quantities across all internal storage locations. |
| **Location Sub-Column (WH/Stock)** | Specific warehouse storage location column displaying the physical count stored within that zone. |
| **Quantity Metric Sub-Header** | Header label confirming that numerical cell values reflect physical inventory unit counts. |
| **Total Row Header** | Root summary row calculating total inventory volume across all catalog items. |
| **Product Row (Fairphone 5)** | Row isolating unit quantities associated with a specific catalog item. |

---

## 8. Locations Graph Visualizer Data Dictionary

The Graph View renders visual charts to evaluate warehouse space utilization and compare stock concentrations:

| Field Name | Description |
| :--- | :--- |
| **Measures Selector** | Metric dropdown defining the numerical measure plotted on the vertical axis *(Quantity)*. |
| **Bar Chart Switcher** | Discrete column visualization displaying stock quantities per storage location as vertical bars. |
| **Line Chart Switcher** | Continuous visual line plot representing stock distribution curves across locations. |
| **Pie Chart Switcher** | Proportional circular visualization illustrating percentage share of inventory held in each location. |
| **Stacked Bar Control** | Layout toggle stacking multiple products or variants on a single location column. |
| **Cumulative Grouped Control** | Layout toggle grouping product bars side-by-side per location for comparative volume analysis. |
| **Ascending Sort Control** | Sorts location bars in ascending order from lowest to highest stock volume. |
| **Descending Sort Control** | Sorts location bars in descending order from highest to lowest stock volume. |
| **Storage Location X-Axis** | Horizontal axis displaying warehouse bin identifiers *(e.g., `WH/Stock`)*. |
| **Unit Quantity Y-Axis** | Vertical axis scaling numeric unit counts from `0.00` to `50.00`. |
| **Quantity Metric Legend** | Color-coded key identifying the plotted bar series as physical unit quantity. |

---

## Related Documentation

* [Track Enterprise Stock Balances and Inventory at Date](../task-guides/13-track-enterprise-stock-balances-and-inventory-at-date.md)
* [Track Inventory by Location and Storage Bins](../task-guides/12-track-inventory-by-location-and-storage-bins.md)
* [Stock Moves Analysis and Valuation Field Definitions](./06-stock-moves-analysis-and-valuation-field-definitions.md)
* [Warehouse Operations and Transfer Field Definitions](./01-warehouse-operations-and-transfer-field-definitions.md)
* [Product Catalog and Traceability Field Definitions](./02-product-catalog-and-traceability-field-definitions.md)

