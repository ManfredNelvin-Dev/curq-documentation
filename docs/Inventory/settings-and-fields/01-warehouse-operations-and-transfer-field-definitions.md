# Warehouse Operations and Transfer Field Definitions

This document provides a comprehensive data dictionary for the CURQ Inventory overview dashboard, operation cards, inbound receipts, outbound delivery orders, and detailed operations line items.

---

## 1. Navigation and Control Bar Data Dictionary

The top header bar and control panel coordinate warehouse navigation, filtering, and pagination:

| Field Name | Description |
| :--- | :--- |
| **Overview Top Menu** | Primary navigation tab opening the real-time operational warehouse dashboard. |
| **Operations Top Menu** | Dropdown menu providing access to transfers, batch transfers, physical inventory adjustments, and scrap registers. |
| **Products Top Menu** | Dropdown menu managing product masters, product variants, price lists, lots, and serial numbers. |
| **Reporting Top Menu** | Analytical menu launching stock valuation, inventory moves analysis, and performance metrics. |
| **Configuration Top Menu** | Administrative menu configuring warehouses, location hierarchies, operation types, and reordering rules. |
| **Inventory Overview Breadcrumb** | Active workspace label with configuration gear icon for customizing dashboard display parameters. |
| **Search Bar** | Keyword search input allowing warehouse operators to isolate cards by operation name or warehouse location. |
| **Refresh Button** | Action button reloading live stock counters and pending transfer quantities. |
| **Pagination Counter** | Indicator displaying currently visible cards and total available operation types *(e.g., `1-3 / 3`)*. |
| **Pager Navigation Chevrons** | Navigation arrows switching between multi-page operation type registers. |

---

## 2. Operation Type Card Data Dictionary

Each card on the dashboard summarizes active fulfillment and intake pipelines for a specific warehouse activity:

| Field Name | Description |
| :--- | :--- |
| **Receipts Card Title** | Operational card identifying the incoming goods intake workflow. |
| **To Receive Button** | Action button displaying pending inbound shipments *(e.g., `3 To Receive`)* and opening the receipts register. |
| **Back Orders Metric** | Indicator tracking partially fulfilled supplier shipments awaiting balance delivery *(e.g., `Back Orders 1`)*. |
| **Delivery Orders Card Title** | Operational card identifying the customer fulfillment and shipping workflow. |
| **To Deliver Button** | Action button displaying scheduled outbound shipments *(e.g., `5 To Deliver` or `6 To Deliver`)* and opening the delivery register. |
| **Late Metric** | Critical alert metric showing shipments that have exceeded scheduled execution deadlines *(e.g., `Late 3`, `Late 5`)*. |
| **Operations Metric** | Quantitative counter displaying the total volume of active fulfillment orders in the queue *(e.g., `Operations 4`, `Operations 5`)*. |
| **Dropship Card Title** | Operational card tracking direct supplier-to-customer order fulfillment. |
| **Open Button (Dropship)** | Action button launching the active dropship transfers queue. |
| **Card Color Indicator Strip** | Vertical colored bar on the left edge reflecting custom card tinting. |

---

## 3. Card Context Flyout Data Dictionary

Clicking the vertical ellipsis *(three dots icon)* on an operation card opens the administrative context menu:

| Field Name | Description |
| :--- | :--- |
| **Card Context Menu Trigger** | Three vertical dots button in the upper-right corner of the card opening operational shortcuts. |
| **All View Link** | Navigational link opening the complete list of historical, active, and completed operations of this type. |
| **Ready View Link** | Filtered link opening only those transfers with reserved stock ready for physical picking. |
| **Waiting View Link** | Filtered link isolating transfers blocked pending component availability or supplier arrival. |
| **New Action Link** | Action link creating a blank transfer record pre-assigned to this operation type. |
| **Reporting Link** | Navigational link launching analytical performance reports filtered for this operation queue. |
| **Color Palette Swatches** | 12 selectable color swatches allowing managers to color-code cards for rapid visual triage. |
| **Add to Favorites Button** | Bookmark toggle with star icon pinning high-priority operation cards to top positions. |
| **Configuration Action Link** | Navigational link opening the master configuration form for this operation type. |

---

## 4. Receipts List Register Data Dictionary

The receipts register aggregates all incoming warehouse transfers from suppliers, both in comprehensive views and filtered ready states:

| Field Name | Description |
| :--- | :--- |
| **Reference** | Unique alphanumeric tracking code assigned to the transfer *(e.g., `WH/IN/00070`)*. |
| **Contact** | Commercial entity, supplier, or specialist associated with the delivery *(e.g., `Acme Technologies`)*. |
| **Scheduled Date** | Target arrival timestamp, styled in red text when delivery has passed due date *(e.g., `6 days ago`, `4 days ago`)*. |
| **Source Document** | Originating procurement or sales document establishing the order baseline *(e.g., `P00093`)*. |
| **Status** | Operational lifecycle stage badge (*Ready*, *Done*, *Cancelled*). |
| **Label Print Status** | Indicator tracking whether physical barcode pallet labels have been generated. |
| **Favorite Star** | Interactive toggle bookmarking critical inbound receipts. |
| **Batch Selection Checkbox** | Multi-select selector for initiating bulk receiving validations or batch moves. |
| **Ready Filter** | Search filter restricting listed transfers to actionable arrivals ready for intake. |

---

## 5. Receipt Form Header and Action Controls

The receipt form view provides execution controls, status tracking, and relational smart buttons:

| Field Name | Description |
| :--- | :--- |
| **Mark as Todo Button** | Primary action button advancing a draft receipt to active `Ready` execution status. |
| **Validate Button** | Action button committing physical intake, updating on-hand stock balances, and finalizing moves. |
| **Return Button** | Reverse logistics action generating an outbound return picking to supplier. |
| **Cancel Button** | Administrative action voiding the transfer record without modifying inventory. |
| **Moves Smart Button** | Navigational button displaying individual underlying stock move records. |
| **Status Chevron Bar** | Sequential stage indicator tracking progression across **Draft**, **Ready**, and **Done**. |
| **Receive From** | Supplier or vendor delivering products *(e.g., `Acme Technologies`, placeholder `e.g. Lumber Inc`)*. |
| **Operation Type** | Warehouse routing pathway governing source and destination defaults *(e.g., `My Company: Receipts`)*. |
| **Scheduled Date** | Planned delivery timestamp for dock scheduling. |
| **Deadline** | Operational threshold for completing receiving intake. |
| **Source Document** | Reference code linking this transfer to purchase orders or external shipping notes *(e.g., `P00093`)*. |

---

## 6. Ready Inbound Receipt Form and Operations Tab Definitions

When an inbound transfer reaches the `Ready` stage, warehouse staff inspect ordered demand against physical counts:

| Field Name | Description |
| :--- | :--- |
| **Product** | Catalog item being received into warehouse storage *(e.g., `Fair Phone 5 (Black)`)*. |
| **Demand** | Total expected product quantity scheduled for delivery on the purchase order *(e.g., `4.00`)*. |
| **Quantity** | Actual physical quantity counted and accepted at the dock *(e.g., `4.00 Units`)*. |
| **Unit** | Standard Unit of Measure applied to the product quantity *(e.g., `Units`)*. |
| **Delete Row Icon** | Trash can icon allowing dock workers to remove an unfulfilled line item before validation. |
| **Add a line Control** | Table button inserting a new product receiving row. |

---

## 7. Receipt Validation Action Controls

The receipt validation control bar coordinates stock intake execution:

| Field Name | Description |
| :--- | :--- |
| **Validate Action Button** | Primary execution button committing physical receipt, moving stock into `WH/Stock`, and posting valuation. |
| **Print Action Button** | Document generation action producing the Receiving Slip and pallet barcodes. |
| **Return Action Button** | Reverse logistics action creating an outbound return picking to the supplier for rejected units. |
| **Cancel Action Button** | Administrative action cancelling the transfer and releasing planned receiving capacity. |

---

## 8. Validated Receipt Form and Valuation Smart Controls

Upon validation, the receipt displays terminal metrics, execution timestamps, and accounting links:

| Field Name | Description |
| :--- | :--- |
| **Valuation Smart Button** | Header navigation control marked with a currency symbol providing access to inventory valuation ledger debits. |
| **Moves Smart Button** | Navigational button linking to detailed stock move records documenting the intake transfer into storage. |
| **Effective Date** | Immutable timestamp recording the exact date and time physical intake was validated *(e.g., `11/05/2026 17:42:07`)*. |
| **Terminal Status Chevron** | Progress indicator displaying completed **Done** status in grey shading. |

---

## 9. Additional Info Tab Data Dictionary

The **Additional Info** tab captures freight parameters, tracking numbers, and corporate governance:

| Field Name | Description |
| :--- | :--- |
| **Carrier** | Third-party freight carrier or delivery service handling physical transportation. |
| **Tracking Reference** | Waybill, bill of lading, or tracking number provided by the carrier. |
| **Weight** | Measured net weight of the delivered goods in kilograms. |
| **Weight for shipping** | Total freight gross weight including packaging and pallets. |
| **Responsible** | Assigned warehouse specialist or procurement lead overseeing delivery intake. |
| **Procurement Group** | Relational link coordinating multiple transfers within a shared supply group. |
| **Sales Order** | Connected customer order when items are received for direct cross-docking or reserved sale. |
| **Project** | Relational link associating received stock with a specific project workspace. |

---

## 10. Note Tab Data Dictionary

The **Note** tab communicates internal warehouse guidance:

| Field Name | Description |
| :--- | :--- |
| **Internal Note Text Area** | Freeform text editor for recording handling instructions printed on Picking Operations sheets. |

---

## 11. Delivery Orders List Register Data Dictionary

The delivery orders register aggregates all outgoing customer shipments requiring warehouse fulfillment:

| Field Name | Description |
| :--- | :--- |
| **Reference** | Unique alphanumeric tracking identifier assigned to the outbound transfer *(e.g., `WH/OUT/00069`)*. |
| **Contact** | Customer, buyer entity, or commercial partner receiving the goods *(e.g., `John Doe`, `Acme Technologies`)*. |
| **Scheduled Date** | Target dispatch timestamp, displayed in red text when fulfillment is overdue *(e.g., `18 days ago`)*. |
| **Source Document** | Originating customer sales order establishing the fulfillment commitment *(e.g., `S00042`)*. |
| **Status** | Operational lifecycle stage badge (*Ready*, *Waiting*, *Done*, *Cancelled*). |
| **Label Print Status** | Indicator tracking whether physical parcel or pallet shipping labels have been printed. |
| **Favorite Star** | Interactive toggle bookmarking critical customer shipments. |
| **Batch Selection Checkbox** | Multi-select selector for initiating bulk shipping validations, wave pickings, or batch moves. |

---

## 12. Delivery Order Form Action Buttons and Smart Controls

The delivery order form view coordinates picking verification, stock validation, and shipping documents:

| Field Name | Description |
| :--- | :--- |
| **Validate Button** | Primary action button committing outbound dispatch, deducting stock from inventory, and completing the move. |
| **Print Button** | Document generation action generating the Delivery Slip, picking operations sheet, or parcel labels. |
| **Return Button** | Reverse logistics action generating an inbound return transfer if goods are rejected or exchanged. |
| **Cancel Button** | Administrative action voiding the transfer record and releasing reserved warehouse inventory. |
| **Moves Smart Button** | Navigational button displaying individual underlying stock move records linked to this picking. |
| **Valuation Smart Button** | Financial ledger button displaying automated inventory valuation and cost accounting entries. |
| **Status Chevron Bar** | Sequential stage indicator tracking progression across **Draft**, **Waiting**, **Ready**, and **Done**. |

---

## 13. Validated Delivery Order View

Once validated, the transfer transitions to its completed state with financial valuation links:

---

## 14. Delivery Order Header Fields Data Dictionary

The form header captures customer shipping destinations, operational deadlines, and stock availability metrics:

| Field Name | Description |
| :--- | :--- |
| **Delivery Address** | Commercial destination address for the customer recipient *(e.g., `John Doe`)*. |
| **Operation Type** | Warehouse routing pathway governing outbound fulfillment defaults *(e.g., `My Company: Delivery Orders`)*. |
| **Scheduled Date** | Planned target date and time for shipment departure. |
| **Deadline** | Hard operational delivery threshold agreed with the customer. |
| **Effective Date** | Immutable timestamp recording the exact date and time shipment validation occurred. |
| **Product Availability** | Real-time stock reservation indicator displaying **Available** in green when stock is ready for picking. |
| **Source Document** | Reference code linking this transfer directly to the originating sales contract *(e.g., `S00042`)*. |

---

## 15. Operations Tab Line Item Definitions

The **Operations** tab captures product lines, customer demand quantities, and picked units:

| Field Name | Description |
| :--- | :--- |
| **Product** | Catalog item description and SKU being picked for shipment *(e.g., `Fair Phone 5 (Black)`)*. |
| **Demand** | Total product quantity requested by the customer on the originating sales order. |
| **Quantity** | Actual physical quantity picked, verified, and staged for packing and dispatch. |
| **Unit** | Standard Unit of Measure applied to the product quantity *(e.g., `Units`, `kg`)*. |
| **Delete Row Icon** | Trash can icon allowing operators to remove a product line before validation. |
| **Add a line Control** | Table action button allowing operators to add extra items to the shipment. |

---

## Related Documentation

* [Navigate Inventory and Manage Stock Operations](../getting-started/01-navigate-inventory-and-manage-stock-operations.md)
* [Fulfill Sales Orders and Process Deliveries](../getting-started/02-fulfill-sales-orders-and-process-deliveries.md)
* [Process Inbound Receipts and Vendor Deliveries](../task-guides/02-process-inbound-receipts-and-vendor-deliveries.md)
* [Process Outbound Delivery Orders and Customer Shipments](../task-guides/03-process-outbound-delivery-orders-and-customer-shipments.md)
* [Understanding Double-Entry Inventory and Stock Flows](../core-concepts/01-understanding-double-entry-inventory-and-stock-flows.md)
