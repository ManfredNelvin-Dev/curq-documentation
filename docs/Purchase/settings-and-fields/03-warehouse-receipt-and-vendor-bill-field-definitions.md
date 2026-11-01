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
| **Packaging** | Packaging container or bulk pack size (such as Box of 10 or Pallet) if configured. |
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

Defines financial and accounting attributes for supplier invoices:

| Field Name | Description |
| :--- | :--- |
| **Vendor** | The supplier issuing the invoice. |
| **Bill Reference** | Supplier's formal invoice or tax receipt number. |
| **Bill Date** | Issue date printed on the supplier's invoice document. |
| **Accounting Date** | Date on which the journal entry is posted to the general ledger. |
| **Payment Terms** | Credit terms establishing the net due date (e.g., *30 Days*). |
| **Journal** | Purchase journal recording the payable transaction (typically *Vendor Bills*). |
| **Currency** | Transaction currency in which the bill is settled. |

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
