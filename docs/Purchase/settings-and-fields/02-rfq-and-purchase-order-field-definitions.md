# RFQ, Purchase Order, and Blanket Order Field Definitions

This document details the header fields, order line columns, commercial parameters, status stages, list view attributes, and blanket agreement specifications across Requests for Quotation (RFQs), Purchase Orders, and Purchase Agreements in CURQ 18 Purchase.

---

## 1. Request for Quotation & Purchase Order Header Fields

Defines primary vendor identity, delivery dates, and operational references:

| Field Name | Description |
| :--- | :--- |
| **Vendor** | The supplier supplying the goods or services. Loading a vendor automatically populates default payment terms, currency, and fiscal positions. |
| **Vendor Reference** | Supplier-issued quotation number, commercial proposal code, or external catalog reference. |
| **Order Deadline** | Target date and time by which the vendor must confirm pricing and availability before the quote expires. |
| **Expected Arrival** | Estimated date when ordered items are scheduled to arrive at your warehouse facility. |
| **Ask confirmation** | When enabled, triggers an automated email reminder to the supplier a specified number of days prior to the expected arrival date. |
| **Deliver To** | Destination warehouse operation type and physical receipt location for incoming shipments. |
| **Agreement** | Linked blanket order or tender agreement governing pricing and volume call-off terms for this order. |
| **Project** | Associated analytical or operational project tracking procurement costs and material expenses. |

---

## 2. Products Tab Order Line Columns

Defines ordered items, requested volumes, negotiated prices, and financial subtotals:

| Field Name | Description |
| :--- | :--- |
| **Product** | The catalog item or raw material being purchased. Populates standard purchasing descriptions and vendor codes. |
| **Description** | Line item narrative displayed on vendor-facing documents, including vendor product codes and specifications. |
| **Quantity** | Requested purchase volume expressed in the designated purchasing unit of measure. |
| **Unit of Measure** | Measurement unit used for procurement (e.g., Units, Dozens, kg, or Pallets). |
| **Unit Price** | Price per unit negotiated with the supplier. Defaults from product cost or entered manually. |
| **Taxes** | Purchase tax rates mapped automatically by the vendor's fiscal position. |
| **Subtotal** | Net monetary amount for the line item before taxes (`Quantity` $\times$ `Unit Price`). |

---

## 3. Other Information Tab Fields

Defines buyer assignments, legal entity ownership, shipping terms, and financial rules:

| Field Name | Description |
| :--- | :--- |
| **Buyer** | Internal team member responsible for managing and following up on the purchase transaction. |
| **Company** | Corporate legal entity or operating branch issuing the purchase order. |
| **Source Document** | Originating document reference (such as a sales order, maintenance request, or project code) that triggered the purchase. |
| **Incoterm** | Standardized International Commercial Terms (such as EXW, FOB, CIF, or DDP) governing freight risks and shipping obligations. |
| **Incoterm Location** | Specific port, terminal, city, or delivery destination where the selected Incoterm takes legal effect. |
| **Payment Terms** | Agreed commercial payment schedule (such as Immediate Payment, 15 Days, or 30 Days End of Month). |
| **Fiscal Position** | Tax rule mapping domestic, regional, or international tax rates to supplier purchases. |

---

## 4. Alternatives Tab Columns

Defines competing vendor quotes linked to the request for quotation:

| Field Name | Description |
| :--- | :--- |
| **Reference** | Quotation sequence number of the alternative vendor request for quotation. |
| **Vendor** | Competing supplier submitting pricing and delivery bids. |
| **Order Deadline** | Expiration deadline for the alternative supplier's commercial proposal. |
| **Expected Arrival** | Promised delivery date for the alternative vendor's shipment. |
| **Buyer** | Procurement agent administering the alternative quote. |
| **Total** | Total proposed monetary amount of the competing offer. |
| **Status** | Current operational stage of the alternative quotation (*RFQ*, *RFQ Sent*, or *Cancelled*). |

---

## 5. Order Statusbar Lifecycle Stages

Tracks document progression through procurement verification:

| Field Name | Description |
| :--- | :--- |
| **RFQ** | Initial draft state where vendor terms, products, and prices are being prepared. |
| **RFQ Sent** | Quotation document has been emailed or printed and dispatched to the vendor for confirmation. |
| **To Approve** | High-value order exceeding the company approval threshold awaiting manager confirmation. |
| **Purchase Order** | Official, legally binding order confirmed with the supplier; incoming receipts and billable lines are active. |
| **Locked** | Confirmed purchase order locked against modifications to protect warehouse and accounting records. |
| **Cancelled** | Voided order with cancelled delivery pickings and reversed stock reservations. |

---

## 6. Purchase Orders List View Columns

Defines summary columns displayed on the primary Purchase Orders workspace:

| Field Name | Description |
| :--- | :--- |
| **Priority** | Star toggle indicating high-priority or urgent procurement orders. |
| **Reference** | Unique system sequence identifier for the purchase order (e.g., `P00019`). |
| **Vendor** | Name of the supplier supplying the order. |
| **Buyer** | Internal staff member accountable for managing the order. |
| **Order Deadline** | Final date by which order terms were confirmed. |
| **Activities** | Scheduled follow-up tasks, calls, reminders, or to-dos linked to the order. |
| **Source Document** | Originating sales order, project, or manufacturing order reference. |
| **Untaxed Amount** | Net total monetary value before taxes. |
| **Total** | Final grand total including taxes and shipping charges. |
| **Billing Status** | Current invoicing state: *Nothing to Bill*, *Waiting Bills*, or *Fully Billed*. |

---

## 7. Product Form Purchase Tab Fields

Defines procurement rules, billing policies, and tax specifications on product templates:

| Field Name | Description |
| :--- | :--- |
| **Purchase Unit of Measure** | Measurement unit used for purchase orders (can differ from inventory storage unit, e.g., purchase in Pallets, store in Units). |
| **Control Policy** | Dictates when purchase order lines can be invoiced: *On ordered quantities* or *On received quantities*. |
| **Purchase Description** | Default specification text printed on RFQs and purchase orders under the product line. |
| **Vendor Taxes** | Default sales tax or value-added tax rates applied to purchases of this item. |

---

## 8. Units of Measure Conversion Fields

Defines conversion mathematics between purchasing units and warehouse stock units:

| Field Name | Description |
| :--- | :--- |
| **Unit of Measure** | The reference unit name used for transactions. |
| **Category** | Grouping of units measuring the same physical dimension (e.g., Unit, Weight, Volume, Working Time, Length). |
| **Type** | Relationship to the category reference unit: *Reference Unit*, *Bigger than the reference Unit*, or *Smaller than the reference Unit*. |
| **Ratio** | Mathematical multiplier or divisor converting this unit into the base reference unit of the category. |
| **Active** | Toggles whether this unit of measure is available for selection in purchasing and inventory menus. |

---

## 9. Purchase Agreements and Blanket Orders Header Fields

Defines master vendor contracts, blanket order commitments, and validity boundaries:

| Field Name | Description |
| :--- | :--- |
| **Vendor** | The agreed supplier bound to the blanket agreement terms. Mandatory on Blanket Orders. |
| **Buyer** | Assigned internal buyer administering the agreement. Defaults to the current user. |
| **Agreement Type** | Functional contract classification (*Blanket Order* for volume-locked commitments or *Purchase Template* for reusable shopping lists). |
| **Agreement Validity** | From and To calendar dates establishing contract start and expiration boundaries. |
| **Reference** | Supplier master agreement reference, tender bid number, or legal contract identifier. |
| **Company** | Operating legal entity responsible for the agreement. |

---

## 10. Blanket Order Products Tab Line Columns

Defines contracted product items, committed volumes, call-off consumption, and locked prices:

| Field Name | Description |
| :--- | :--- |
| **Product** | The contracted item or material governed by the agreement. |
| **Description** | Line description printed on resulting call-off purchase orders. |
| **Quantity** | Total agreed commitment volume to be purchased over the contract duration. |
| **Ordered** | Cumulative quantity already released across confirmed call-off purchase orders. |
| **Unit Price** | Pre-negotiated locked price per unit applied to all call-off purchase orders. |
| **Unit of Measure** | Measurement unit used for tracking commitment and release quantities. |

---

## 11. Purchase Agreements List View Columns

Defines summary columns displayed on the central Purchase Agreements dashboard:

| Field Name | Description |
| :--- | :--- |
| **Agreement** | Unique sequence identifier for the contract (e.g., `BO00001` for blanket orders). |
| **Vendor** | Contracted supplier bound to the agreement terms. |
| **Agreement Type** | Functional contract classification (*Blanket Order* or *Purchase Template*). |
| **Purchase Representative** | Internal buyer responsible for administering and reviewing contract performance. |
| **Company** | Corporate entity holding the legal agreement. |
| **Start Date** | Initial effective date from which call-off purchase orders can be released. |
| **End Date** | Contract expiration deadline after which no further call-offs are permitted. |
| **Reference** | External reference code, such as the supplier's signed contract identifier. |
| **Status** | Contract state: *Draft*, *Confirmed*, or *Closed*. |

---

## Related Documentation

* [Create and Manage Requests for Quotation](../task-guides/01-create-and-manage-requests-for-quotation.md)
* [Confirm Purchase Orders and Manage Approvals](../task-guides/03-confirm-purchase-orders-and-manage-approvals.md)
* [Track and Manage Purchase Orders Across Views](../task-guides/04-track-and-manage-purchase-orders-across-views.md)
* [Understanding the Procurement Lifecycle and Order States](../core-concepts/01-understanding-the-procurement-lifecycle-and-order-states.md)
