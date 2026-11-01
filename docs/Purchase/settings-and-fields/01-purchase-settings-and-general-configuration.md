# Purchase Settings and General Configuration

This document details the configuration parameters, approval policies, automated order locks, bill control rules, and procurement lead times for CURQ 18 Purchase.

---

## 1. Purchase Orders Configuration Settings

Governs operational order controls, approval authorization thresholds, and vendor tender agreements:

| Field Name | Description |
| :--- | :--- |
| **Purchase Order Approval** | Enforces mandatory manager authorization for high-value orders. Purchase orders exceeding the specified minimum amount are placed in *To Approve* status until confirmed by an authorized Purchase Manager. |
| **Minimum Amount** | Currency threshold above which purchase orders require formal manager approval before confirmation. |
| **Lock Confirmed Orders** | Automatically locks purchase orders once confirmed, preventing accidental price or line alterations unless unlocked by an authorized user. |
| **Purchase Alternatives** | Enables creating, linking, and comparing competing vendor requests for quotation directly from the quotation alternatives tab. |
| **Purchase Agreements** | Enables long-term procurement agreements, including volume-based Blanket Orders and reusable Purchase Templates. |

---

## 2. Invoicing and Bill Control Settings

Governs vendor billing policies, quantities verification rules, and automated 3-way matching:

| Field Name | Description |
| :--- | :--- |
| **Bill Control** | Defines the default company-wide policy for validating vendor bills. Options include *Ordered quantities* (billable upon PO confirmation) and *Received quantities* (billable only after warehouse receipt validation). |
| **3-Way Matching: Purchases, Receptions and Bills** | Validates vendor bill lines against original purchase order quantities and confirmed warehouse receipts to detect discrepancies before payment. |

---

## 3. Products and Procurement Logistics Settings

Governs supplier lead time scheduling, automatic reminder dispatches, and catalog notifications:

| Field Name | Description |
| :--- | :--- |
| **Purchase Lead Time** | Number of buffer days added to procurement scheduling to protect against supplier delays in replenishment. |
| **Receipt Reminder** | Automatically sends an automated reminder email to vendors a configured number of days prior to the scheduled delivery date to confirm shipment arrival. |
| **Warnings** | Enables blocking or informational alerts on vendor contacts or specific products during purchase order creation. |

---

## Related Documentation

* [Understanding the Procurement Lifecycle and Order States](../core-concepts/01-understanding-the-procurement-lifecycle-and-order-states.md)
* [Understanding Bill Control and 3-Way Matching](../core-concepts/02-understanding-bill-control-and-3-way-matching.md)
