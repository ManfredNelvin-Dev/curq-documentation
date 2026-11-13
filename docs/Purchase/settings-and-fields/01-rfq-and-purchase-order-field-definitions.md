# RFQ, Purchase Order, and Blanket Order Field Definitions

This document details the header fields, order line columns, commercial parameters, status stages, list view attributes, and blanket agreement specifications across Requests for Quotation (RFQs), Purchase Orders, and Purchase Agreements in CURQ 18 Purchase.

---

## 1. Request for Quotation & Purchase Order Header Fields

Defines primary vendor identity, delivery dates, commercial currency, operational references, and action controls as shown on the RFQ and Purchase Order form header:

### 1.1 Header Form Fields

| Field Name | Description |
| :--- | :--- |
| **Vendor** | Mandatory supplier selector *(placeholder: `Name, TIN, Email, or Reference`)*. Automatically populates default currency, payment terms, and fiscal positions from the partner contact record. |
| **Vendor Reference** | Supplier-issued quotation number, commercial proposal code, or external catalog reference. |
| **Currency** | Transaction currency selector *(e.g., `EUR`)* defining the pricing currency for all order lines and financial totals. |
| **Order Deadline** | Target date and time by which the vendor must confirm pricing and availability before the quote expires. |
| **Expected Arrival** | Estimated date and time when ordered items are scheduled to arrive at your facility. |
| **On-Time Delivery** | Vendor fulfillment punctuality badge displayed beside Expected Arrival *(e.g., `No On-time Delivery Data` or a punctuality percentage)* tracking historical delivery reliability. |
| **Ask confirmation** | Checkbox toggle. When enabled, reveals a reminder window *(day(s) before receipt)* to automatically dispatch an email asking the vendor to confirm delivery. |
| **Project** | Associated analytical or operational project tracking procurement costs and material expenses against a project budget. |

### 1.2 Header Action Buttons

| Button | Description |
| :--- | :--- |
| **Send by Email** | Opens an email composer modal with a pre-configured template and PDF attachment (`Request for Quotation - [Ref].pdf`) to transmit to the supplier. Advances document status to **RFQ Sent**. |
| **Print RFQ** | Generates and downloads an official printable PDF copy of the Request for Quotation for offline distribution. Advances document status to **RFQ Sent**. |
| **Confirm Order** | Converts the RFQ into an active, legally binding **Purchase Order**, generating incoming warehouse delivery receipts (`WH/IN`). |
| **Cancel** | Voids the quotation or active purchase order, cancelling any linked unvalidated warehouse receipts. |

---

## 2. Products Tab Order Line Columns

Defines ordered items, requested volumes, negotiated prices, and line amounts:

| Field Name | Description |
| :--- | :--- |
| **Product** | The catalog item or raw material being purchased. Populates standard purchasing descriptions and vendor codes. |
| **Description** | Line item narrative displayed on vendor-facing documents, including vendor product codes and specifications. |
| **Quantity** | Requested purchase volume expressed in the designated purchasing unit of measure. |
| **Unit of Measure** | Measurement unit used for procurement (e.g., Units, Dozens, kg, or Pallets). |
| **Unit Price** | Price per unit negotiated with the supplier. Defaults from product cost or entered manually. |
| **Taxes** | Purchase tax rates mapped automatically by the vendor's fiscal position. |
| **Amount** | Net monetary amount for the line item before taxes (`Quantity` $\times$ `Unit Price`). |

---

## 3. Other Information Tab Fields

Defines buyer assignments, shipping terms, billing progression, and financial rules as shown under the Other Information tab:

| Field Name | Description |
| :--- | :--- |
| **Buyer** | Internal team member responsible for managing and following up on the purchase transaction *(e.g., `George Watson`)*. Defaults to the current user. |
| **Source Document** | Originating document reference (such as a sales order, maintenance request, or project code) that triggered the purchase. |
| **Incoterm** | Standardized International Commercial Terms (such as EXW, FOB, CIF, or DDP) governing freight risks and shipping obligations. |
| **Incoterm Location** | Specific port, terminal, city, or delivery destination where the selected Incoterm takes legal effect. |
| **Receipt Status** | Automated inventory intake status reflecting physical delivery progress (*Pending*, *Partially Received*, or *Fully Received*). |
| **Billing Status** | Invoicing lifecycle indicator reflecting whether the order is *Nothing to Bill*, *Waiting Bills*, or *Fully Billed*. |
| **Payment Terms** | Agreed commercial payment schedule (such as Immediate Payment, 15 Days, or 30 Days End of Month). |
| **Payment Mode** | Selected payment execution method used for financial disbursements to the vendor. |
| **Supplier Bank Account** | Registered bank account of the supplier used for direct payment transfers. |
| **Fiscal Position** | Tax mapping rule *(e.g., `Niet-EU landen`)* determining the automatic application of taxes on purchase order lines. |

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

## 5. Purchase Orders List View Columns

Defines summary columns displayed on the primary Purchase Orders workspace:

| Field Name | Description |
| :--- | :--- |
| **Reference** | Unique system sequence identifier for the purchase order (e.g., `P00093`). |
| **Confirmation Date** | Official date and timestamp when the purchase order was confirmed with the supplier. |
| **Vendor** | Name of the supplier supplying the products. |
| **Buyer** | Internal purchasing agent or staff member responsible for administering the order. |
| **Activities** | Scheduled next actions, follow-up calls, reminders, or to-dos linked to the order. |
| **Source Document** | Originating sales order, project, or internal requisition reference. |
| **Total** | Final grand total monetary amount including taxes and shipping charges. |
| **Billing Status** | Current invoicing state: *Nothing to Bill*, *Waiting Bills*, or *Fully Billed*. |
| **Expected Arrival** | Estimated arrival date and time when ordered goods are scheduled for delivery. |

---

## 6. Product Form Purchase Tab Fields

Defines procurement rules, billing policies, and tax specifications on product templates:

| Field Name | Description |
| :--- | :--- |
| **Purchase Unit of Measure** | Measurement unit used for purchase orders (can differ from inventory storage unit, e.g., purchase in Pallets, store in Units). |
| **Control Policy** | Dictates when purchase order lines can be invoiced: *On ordered quantities* or *On received quantities*. |
| **Purchase Description** | Default specification text printed on RFQs and purchase orders under the product line. |
| **Vendor Taxes** | Default sales tax or value-added tax rates applied to purchases of this item. |

---

## 7. Units of Measure Conversion Fields

Defines conversion mathematics between purchasing units and warehouse stock units:

| Field Name | Description |
| :--- | :--- |
| **Unit of Measure** | The reference unit name used for transactions. |
| **Category** | Grouping of units measuring the same physical dimension (e.g., Unit, Weight, Volume, Working Time, Length). |
| **Type** | Relationship to the category reference unit: *Reference Unit*, *Bigger than the reference Unit*, or *Smaller than the reference Unit*. |
| **Ratio** | Mathematical multiplier or divisor converting this unit into the base reference unit of the category. |
| **Active** | Toggles whether this unit of measure is available for selection in purchasing and inventory menus. |

---

## 8. Purchase Agreements and Blanket Orders Header Fields

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

## 9. Blanket Order Products Tab Line Columns

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

## 10. Purchase Agreements List View Columns

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
