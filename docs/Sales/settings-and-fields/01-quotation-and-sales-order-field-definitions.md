# Quotation and Sales Order Field Definitions

This document provides factual specifications and data tables for all header fields, order line columns, other info options, and status lifecycles on quotations and sales orders in CURQ 18.

---

### Quotation Header Fields

| Field Name | Description |
| :--- | :--- |
| **Customer** | The business partner or individual purchasing the goods or services. |
| **Invoice Address** | The billing entity and physical address rendered on customer invoices. |
| **Delivery Address** | The physical shipping destination for warehouse dispatch and delivery slips. |
| **Quotation Template** | Preconfigured template that loads standard order lines, optional items, and expiration periods. |
| **Expiration** | Deadline after which the customer can no longer accept or sign the proposal online. |
| **Pricelist** | Currency and pricing rule schedule applied to calculate line item unit prices. |
| **Payment Terms** | Contractual payment due schedule *(e.g., `Immediate Payment`, `30 Days`, `End of Following Month`)*. |

---

### Order Lines Table Columns

| Field Name | Description |
| :--- | :--- |
| **Product** | The specific catalog item or attribute variation being sold. |
| **Description** | Client-facing item name and line details printed on PDFs and portal views. |
| **Quantity** | The number of measurement units being sold. |
| **UoM** | Unit of Measure for the line *(e.g., `Units`, `Hours`, `Dozen`, `kg`)*. |
| **Packaging** | Physical packaging container standard *(e.g., `Box of 10`)*. |
| **Packaging Qty** | Number of packaging lots ordered; multiplies the unit quantity accordingly. |
| **Unit Price** | Unit selling price excluding taxes, derived from base catalog price or pricelists. |
| **Disc. %** | Percentage discount deducted directly from the unit price. |
| **Taxes** | Applicable sales taxes calculated on the line subtotal. |
| **Cost** | Procurement or replacement cost per unit (available when Margins is enabled). |
| **Margin** | Gross profit amount per line: $(\text{Unit Price} - \text{Cost}) \times \text{Quantity}$. |
| **Margin (%)** | Line gross profit percentage: $\frac{\text{Margin}}{\text{Line Subtotal}} \times 100$. |
| **Amount** | Net untaxed subtotal for the line after applying discounts. |

---

### Other Info Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Salesperson** | The commercial representative managing and credited for the transaction. |
| **Sales Team** | The organizational unit credited for the transaction in revenue dashboards. |
| **Company** | The multi-company entity legally issuing the commercial document. |
| **Online Signature** | When enabled, requests digital client signature in portal to confirm the order. |
| **Online Payment** | When enabled, requires an online deposit or full prepayment to confirm the order. |
| **Prepayment Amount** | Required deposit percentage *(e.g., `20.00 %` or `100.00 %`)*. |
| **Customer Reference** | The customer's internal purchase order (PO) number or reference code. |
| **Fiscal Position** | Automatic or manual tax mapping rule for tax-exempt or international customers. |
| **Invoicing Journal** | The financial journal where resulting customer invoices are posted. |
| **Shipping Policy** | **As soon as possible** (partial deliveries allowed) or **When all products are ready**. |
| **Delivery Date** | Target shipment or delivery promise date. |
| **Incoterm** | International commercial trade terms *(e.g., `EXW`, `FOB`, `CIF`, `DAP`)*. |
| **Tags** | Color-coded badges for custom categorization and pipeline filtering. |

---

### Sales Order Status Lifecycle

| Status | Operational Meaning | Allowed Actions |
| :--- | :--- | :--- |
| **Quotation** | Draft offer under preparation by sales staff. Unconfirmed and unreserved. | Send by Email, Confirm, Cancel, Delete |
| **Quotation Sent** | Formally delivered to the customer via email or portal invitation. | Send by Email, Confirm, Cancel |
| **Sales Order** | Legally confirmed commercial agreement. Inventory reserved and delivery created. | Create Invoice, Lock, Unlock, Cancel |
| **Locked** | Confirmed sales order protected against inadvertent price or line editing. | Unlock, Create Invoice |
| **Cancelled** | Voided transaction. Delivery orders cancelled and stock reservations released. | Set to Quotation, Delete |

---

### Customer Commercial and Invoicing Fields

| Field Name | Description |
| :--- | :--- |
| **Individual vs. Company** | Controls contact hierarchy: Companies hold tax registrations; Individuals link to parent companies. |
| **Invoice / Delivery Address** | Dedicated destination records for billing accounting and warehouse logistics. |
| **Fiscal Position** | Tax mapping rules adapting domestic, foreign, and tax-exempt sales. |
| **Pricelist** | Customer-specific pricing schedule, wholesale discount rules, or billing currency. |
| **Payment Terms** | Contractual due dates automatically prefilled on quotations and invoices. |
| **Sale Warnings** | Alert level on quotes: **No Message**, **Warning** (informative pop-up), or **Blocking Message** (blocks quote). |
| **eInvoice Format** | Country XML standard *(e.g., Peppol BIS 3.0, Factur-X, XRechnung)*. |
| **Peppol ID** | Customer electronic address on the Peppol exchange network. |
| **Auto-Post Bills** | Automated bill posting policy: *Ask after 3 validations*, *Always*, or *Never*. |
| **Ignore Abnormal Invoice Amount** | Bypasses unusual total verification alerts when bills have variable/high values. |
| **Ignore Abnormal Invoice Date** | Bypasses date discrepancy warnings for backdated or advance invoices. |

---

### Product Master and Category Fields

| Field Name | Options / Values | Operational Effect |
| :--- | :--- | :--- |
| **Product Type** | `Goods`, `Service`, `Combo` | Governs inventory tracking and physical warehouse pickings. |
| **Invoicing Policy** | `Ordered quantities`, `Delivered quantities` | Controls whether invoices generate upfront or upon delivery validation. |
| **Optional Products** | Complementary product items | Recommends upsell/cross-sell add-ons selectable on customer portal quotes. |
| **Quotation Description** | Notes | Custom marketing or technical details printed under product lines on quotes and invoices. |
| **Parent Category** | Hierarchical tree path | Defines parent-child categorization and inherited pricing rules. |
| **Costing Method** | `Standard Price`, `AVCO`, `FIFO` | Establishes mathematical procurement valuation for inventory assets. |
| **Removal Strategy** | `FIFO`, `LIFO`, `Closest Location`, `Least Packages` | Dictates warehouse stock picking sequence for deliveries. |
| **Reserve Packagings** | `Reserve Only Full Packagings`, `Reserve Partial Packagings` | Restricts or permits breaking open packaging pallets and boxes. |

---

### Related Documentation
* [Create and Manage Quotations](../task-guides/01-create-and-send-quotations.md)
* [Confirm and Lock Sales Orders](../task-guides/03-confirm-and-lock-sales-orders.md)
* [Understanding the Sales Order Lifecycle and State Machine](../core-concepts/01-understanding-the-sales-order-lifecycle.md)
