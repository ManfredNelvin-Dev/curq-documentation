# Warehouse Receipt and Vendor Bill Field Definitions

This document details the logistics attributes, stock move columns, billing parameters, and matching fields across incoming receipts and vendor bills in CURQ 18 Purchase.

---

## 1. Warehouse Receipt Header Fields

Defines logistics tracking and warehouse transfer parameters on incoming receipts:

| Field Name | Description |
| :--- | :--- |
| **Receive From** | The vendor delivering the products, linked from the purchase order. |
| **Operation Type** | Warehouse operational route processing the delivery (e.g., *YourCompany: Receipts*). |
| **Destination Location** | Physical stock location where products will be placed upon validation (e.g., `WH/Stock`). |
| **Scheduled Date** | Planned delivery date and time scheduled with the supplier. |
| **Deadline** | Final date by which delivery must be validated to avoid operational delays. |
| **Source Document** | Originating purchase order sequence number (e.g., `P00019`). |

---

## 2. Receipt Operations Line Columns

Defines physical product verification during dock receiving:

| Field Name | Description |
| :--- | :--- |
| **Product** | The physical item being transferred into warehouse stock. |
| **Demand** | Exact quantity ordered on the purchase order line. |
| **Quantity** | Actual physical count verified upon delivery and received into inventory. |
| **Unit** | Measurement unit used for stock valuation and warehouse counting. |

---

## 3. Receipt Additional Info Fields

Defines freight carriers, parcel tracking, and weight attributes:

| Field Name | Description |
| :--- | :--- |
| **Carrier** | Logistics provider or delivery service transporting the goods. |
| **Tracking Reference** | Parcel tracking number or bill of lading provided by the carrier. |
| **Weight** | Net product weight calculated from product master records. |
| **Weight for shipping** | Gross shipping weight including pallets, crates, and containers. |
| **Company** | Warehouse legal entity receiving the shipment. |

---

## 4. Vendor Bill Form Fields

Defines financial, operational, and accounting attributes for supplier invoices as displayed on the Vendor Bill form:

### 4.1 Header Form Fields

| Field Name | Description |
| :--- | :--- |
| **Bill Number** | Sequential accounting identifier (displays `Draft` during creation, and system sequence code e.g., `BILL/2026/10/0004` once confirmed). |
| **Vendor** | The supplier issuing the bill, displaying their name, registered business address, and billing contact details. |
| **Bill Reference** | Supplier's formal invoice number, receipt reference, or external billing code. |
| **Auto-Complete** | Lookup selector *(placeholder: `Select a purchase order or an old bill`)* allowing users to auto-populate invoice lines and terms from linked purchase orders or previous bills. |
| **Bill Date** | Official issue date printed on the supplier's invoice document. |
| **Accounting Date** | The effective date on which journal entries are posted to the General Ledger. |
| **Payment Reference** | Remittance identification reference *(placeholder: `Use Bill Reference`)* included in outgoing bank payment communications. |
| **Payment Mode** | Commercial payment execution method used to settle the liability *(e.g., Bank Transfer, SEPA)*. |
| **Recipient Bank** | Supplier's registered bank account and IBAN destination for payment disbursements. |
| **Due Date / Payment Terms** | Calculated payment deadline date *(e.g., `10/30/2026`)* or pre-configured credit schedule *(e.g., `Immediate Payment`, `30 Days`)*. |
| **Journal** | Accounts payable journal recording the liability transaction *(typically `Vendor Bills`)*. |
| **Currency** | Transaction currency selector *(e.g., `EUR`)* displayed alongside the journal. |
| **Operating Unit** | Internal department, operational division, or project branch responsible for the expense. |

### 4.2 Header Action Buttons

| Button | Description |
| :--- | :--- |
| **Confirm** | Validates the draft vendor bill, assigns an official sequence number, posts double-entry vouchers to the General Ledger, and sets status to **Posted**. |
| **Cancel** | Voids the draft vendor bill and cancels any linked accounting reminders. |
| **Pay** | Available once posted; opens the payment registration modal to execute bank disbursements and advance the bill to **In Payment** / **Paid**. |
| **Print** | Generates and downloads a printable PDF voucher of the vendor bill. |
| **Credit Note** | Creates a reverse vendor refund or credit note linked to this bill in case of product returns or billing variances. |
| **Reset to Draft** | Reopens a posted bill back to draft status for modifications *(only available if un-reconciled)*. |

---

## 5. Bill Matching Workspace Columns

Defines fields used during automated 3-way matching between purchase orders, warehouse receipts, and vendor bills:

| Field Name | Description |
| :--- | :--- |
| **Purchase Order** | Originating purchase order reference number. |
| **Vendor** | Supplier name associated with the transaction. |
| **Ordered Quantity** | Total product units ordered on the confirmed purchase order. |
| **Received Quantity** | Actual product units verified and received on warehouse receipts. |
| **Billed Quantity** | Quantity currently invoiced on supplier bills. |
| **Unit Price (PO)** | Unit price agreed on the purchase order. |
| **Unit Price (Bill)** | Unit price charged on the supplier's vendor bill. |
| **Price Difference** | Financial variance between the purchase order price and the billed price. |
| **Matching Status** | Automated verification state (*Matched*, *Quantity Discrepancy*, or *Price Variance*). |

---

## Related Documentation

* [Receive Products and Manage Backorders](../task-guides/05-receive-products-and-manage-backorders.md)
* [Generate and Validate Vendor Bills](../task-guides/06-generate-and-validate-vendor-bills.md)
* [Reconcile Vendor Bills with Bill Matching](../task-guides/07-reconcile-vendor-bills-with-bill-matching.md)
* [Understanding Bill Control and 3-Way Matching](../core-concepts/02-understanding-bill-control-and-3-way-matching.md)
