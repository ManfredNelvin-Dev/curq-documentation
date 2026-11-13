# Warehouse Operations and Transfer Field Definitions

This document provides a comprehensive data dictionary for the CURQ Inventory overview dashboard, operation cards, inbound receipts, outbound delivery orders, and detailed operations line items.

---

## 1. Receipts List Register Data Dictionary

The receipts register aggregates all incoming warehouse transfers from suppliers, both in comprehensive views and filtered ready states:

| Field Name | Description |
| :--- | :--- |
| **Reference** | Unique alphanumeric tracking code assigned to the transfer *(e.g., `WH/IN/00070`)*. |
| **Contact** | Commercial entity, supplier, or specialist associated with the delivery *(e.g., `Acme Technologies`)*. |
| **Scheduled Date** | Target arrival timestamp, styled in red text when delivery has passed due date *(e.g., `6 days ago`, `4 days ago`)*. |
| **Source Document** | Originating procurement or sales document establishing the order baseline *(e.g., `P00093`)*. |
| **Status** | Operational lifecycle stage badge (*Ready*, *Done*, *Cancelled*). |
| **Label Print Status** | Indicator tracking whether physical barcode pallet labels have been generated. |

---

## 2. Receipt Form Header and Action Controls

The receipt form view provides execution controls, status tracking, and relational smart buttons:

### 2.1 Receipt Header Fields

| Field Name | Description |
| :--- | :--- |
| **Receive From** | Supplier or vendor delivering products *(e.g., `Acme Technologies`, placeholder `e.g. Lumber Inc`)*. |
| **Operation Type** | Warehouse routing pathway governing source and destination defaults *(e.g., `My Company: Receipts`)*. |
| **Scheduled Date** | Planned delivery timestamp for dock scheduling. |
| **Source Document** | Reference code linking this transfer to purchase orders or external shipping notes *(e.g., `P00093`)*. |

### 2.2 Header Action and Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **Mark as Todo** | Advances a draft receipt to active `Ready` execution status. |
| **Validate** | Commits physical intake, updates on-hand stock balances, and finalizes stock moves. |
| **Return** | Launches reverse logistics to generate an outbound return picking to the supplier. |
| **Cancel** | Voids the transfer record without modifying warehouse inventory. |
| **Moves Smart** | Opens individual underlying stock move records linked to this receipt. |

---

## 3. Ready Inbound Receipt Form and Operations Tab Definitions

When an inbound transfer reaches the `Ready` stage, warehouse staff inspect ordered demand against physical counts:

### 3.1 Operations Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Product** | Catalog item being received into warehouse storage *(e.g., `Fair Phone 5 (Black)`)*. |
| **Demand** | Total expected product quantity scheduled for delivery on the purchase order *(e.g., `4.00`)*. |
| **Quantity** | Actual physical quantity counted and accepted at the dock *(e.g., `4.00 Units`)*. |
| **Unit** | Standard Unit of Measure applied to the product quantity *(e.g., `Units`)*. |

---

## 4. Receipt Validation Action Controls

The receipt validation control bar coordinates stock intake execution:

| Button | Behavior |
| :--- | :--- |
| **Validate** | Commits physical receipt, moves stock into `WH/Stock`, and posts inventory valuation. |
| **Print** | Generates and downloads the Receiving Slip and pallet barcodes. |
| **Return** | Creates an outbound return picking to the supplier for rejected units. |
| **Cancel** | Cancels the transfer and releases planned receiving capacity. |

---

## 5. Additional Info Tab Data Dictionary

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

## 6. Note Tab Data Dictionary

The **Note** tab communicates internal warehouse guidance:

| Field Name | Description |
| :--- | :--- |
| **Internal Note Text Area** | Freeform text editor for recording handling instructions printed on Picking Operations sheets. |

---

## 7. Delivery Orders List Register Data Dictionary

The delivery orders register aggregates all outgoing customer shipments requiring warehouse fulfillment:

### 7.1 Register Columns

| Field Name | Description |
| :--- | :--- |
| **Reference** | Unique alphanumeric tracking identifier assigned to the outbound transfer *(e.g., `WH/OUT/00069`)*. |
| **Contact** | Customer, buyer entity, or commercial partner receiving the goods *(e.g., `John Doe`, `Acme Technologies`)*. |
| **Scheduled Date** | Target dispatch timestamp, displayed in red text when fulfillment is overdue *(e.g., `18 days ago`)*. |
| **Source Document** | Originating customer sales order establishing the fulfillment commitment *(e.g., `S00042`)*. |
| **Status** | Operational lifecycle stage badge (*Ready*, *Waiting*, *Done*, *Cancelled*). |
| **Label Print Status** | Indicator tracking whether physical parcel or pallet shipping labels have been printed. |

---

## 8. Delivery Order Form Action Buttons and Smart Controls

The delivery order form view coordinates picking verification, stock validation, and shipping documents:

### 8.1 Delivery Action and Smart Buttons

| Button | Behavior |
| :--- | :--- |
| **Validate** | Commits outbound dispatch, deducts stock from inventory, and completes the stock move. |
| **Print** | Generates and downloads the Delivery Slip, picking operations sheet, or parcel labels. |
| **Return** | Generates an inbound return transfer when goods are rejected or exchanged. |
| **Cancel** | Voids the transfer record and releases reserved warehouse inventory. |
| **Moves** | Opens individual underlying stock move records linked to this picking. |
| **Valuation** | Opens automated inventory valuation and cost accounting entries for this delivery. |

---

## 9. Delivery Order Header Fields Data Dictionary

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

## 10. Operations Tab Line Item Definitions

The **Operations** tab captures product lines, customer demand quantities, and picked units:

### 10.1 Operations Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Product** | Catalog item description and SKU being picked for shipment *(e.g., `Fair Phone 5 (Black)`)*. |
| **Demand** | Total product quantity requested by the customer on the originating sales order. |
| **Quantity** | Actual physical quantity picked, verified, and staged for packing and dispatch. |
| **Unit** | Standard Unit of Measure applied to the product quantity *(e.g., `Units`, `kg`)*. |

### 10.2 Line Action Buttons

| Button | Behavior |
| :--- | :--- |
| **Delete Row Icon** | Clicking the trash can icon removes a product line before validation. |
| **Add a line Control** | Inserts a new editable product line into the shipment table. |

---

## Related Documentation

* [Navigate Inventory and Manage Stock Operations](../getting-started/01-navigate-inventory-and-manage-stock-operations.md)
* [Fulfill Sales Orders and Process Deliveries](../getting-started/02-fulfill-sales-orders-and-process-deliveries.md)
* [Process Inbound Receipts and Vendor Deliveries](../task-guides/02-process-inbound-receipts-and-vendor-deliveries.md)
* [Process Outbound Delivery Orders and Customer Shipments](../task-guides/03-process-outbound-delivery-orders-and-customer-shipments.md)
* [Understanding Double-Entry Inventory and Stock Flows](../core-concepts/01-understanding-double-entry-inventory-and-stock-flows.md)
