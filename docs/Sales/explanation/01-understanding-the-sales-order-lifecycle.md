# Explanation: Understanding the Sales Order Lifecycle and State Machine

This document explains the architectural state machine, legal locking mechanics, and data integrity principles governing sales contracts in CURQ 18 Sales.

---

### The Sales Order as an Architectural State Machine

A commercial transaction in CURQ is governed by a deterministic finite state machine. As negotiations progress from preliminary inquiries to finalized contracts, the document transitions through formal states:

```
[ Draft Quotation ] ───► [ Quotation Sent ] ───► [ Sales Order ] ───► [ Locked ]
       │                         │                     │
       ▼                         ▼                     ▼
 [ Cancelled ]             [ Cancelled ]         [ Cancelled ]
```

#### 1. Draft Quotation (`draft`)
The draft stage represents an exploratory estimate. Sales personnel can freely add, modify, reorder, or delete lines. In this state:
* No warehouse stock is reserved.
* No revenue projections are recognized in financial ledgers.
* The document carries a temporary sequence identifier *(e.g., `Q00042`)*.

#### 2. Quotation Sent (`sent`)
When the proposal is transmitted via email or presented in the customer portal, the record enters the `sent` state. This signifies an outstanding commercial offer:
* The system establishes a legal timestamp marking the start of the validity period.
* The customer portal activates real-time access, logging an audit event the moment the recipient views the offer.
* If an expiration date is reached without client confirmation, the offer becomes invalid for digital signature.

#### 3. Sales Order (`sale`)
Customer confirmation (via digital signature, online payment, or manual approval) converts the quotation into a legally binding sales order:
* The sequence prefix permanently transforms *(e.g., to `S00042`)*.
* **Inventory Handshake**: CURQ automatically commits stock allocations and creates a linked warehouse delivery slip.
* **Accounting Handshake**: Unbilled order balances register in operational reporting, awaiting invoice generation.

---

### Why Confirmed Orders Lock: Contractual and Ledger Integrity

In high-volume commercial operations, allowing unrestricted modifications to confirmed orders introduces severe risks across procurement, fulfillment, and accounting:

* **Preventing Unauthorized Tampering**: Once a customer digitally signs an agreement for 50 units at $100 each, modifying lines or prices in the backend creates a legal discrepancy between the customer's signed copy and internal records.
* **Fulfillment Desynchronization**: If a salesperson increases quantities on an order after warehouse dispatchers have already packed the shipment, physical delivery slips diverge from commercial invoices.
* **Financial Reconciliation Stability**: Confirmed orders often trigger downstream accounting entries, down payment invoices, or procurement purchase orders. Locking the document guarantees data consistency across these dependent records.

When modifications are genuinely required, CURQ enforces an explicit **Unlock** procedure that logs the modifying user and timestamp in the document's audit trail.

---

### The Chatter Audit Trail and Non-Repudiation

CURQ integrates an immutable activity stream (the **Chatter**) on every sales order to provide verifiable compliance and non-repudiation:

```
┌────────────────────────────────────────────────────────┐
│                    Chatter History                     │
├────────────────────────────────────────────────────────┤
│ • 10:14 AM - Salesperson sent Quotation Q00042 (PDF)   │
│ • 10:32 AM - Quotation viewed by customer              │
│ • 10:45 AM - Order digitally signed by J. Doe (IP)     │
│ • 10:46 AM - Online Payment $594.00 cleared (Stripe)   │
│ • 10:46 AM - Order S00042 confirmed & locked          │
└────────────────────────────────────────────────────────┘
```

When an electronic signature is submitted, CURQ captures:
1. The visual signature vector.
2. The signatory's printed name.
3. The precise UTC timestamp.
4. The client's public IP address.
5. An archived, unalterable PDF snapshot of the exact terms agreed to at the moment of signing.

This cryptographic and operational trail satisfies commercial e-signature standards and eliminates disputed verbal agreements.

---

### Down Payments vs. Final Settlements

In complex or high-value contracts, revenue realization is decoupled from initial cash intake through a structured two-stage accounting model:

```
[ Confirmed Order: $10,000 ]
           │
           ├────────► Down Payment Invoice (30%): $3,000 (Unearned Revenue)
           │
           ▼
[ Delivery Fulfilled ]
           │
           └────────► Final Invoice: $10,000 
                      Less Down Payment: -$3,000
                      Net Balance Due: $7,000 (Realized Revenue)
```

1. **Down Payment Invoicing**: Records an unearned revenue liability in the general ledger. The sales order remains open, tracking that physical goods are yet to be delivered.
2. **Final Invoice Deduction**: When delivery is validated, CURQ includes the full value of delivered products and applies an automated negative offset for the previously billed down payment, closing out the liability account and recognizing net earned revenue.

---

### Related Documentation
* [Tutorial: Process Your First Sale from Quote to Invoice](../tutorials/01-process-your-first-sale.md)
* [How-To: Confirm and Lock Sales Orders](../how-to/03-confirm-and-lock-sales-orders.md)
* [How-To: Invoice Sales Orders](../how-to/04-invoice-sales-orders.md)
* [Reference: Quotation and Sales Order Field Definitions](../reference/01-quotation-and-sales-order-field-definitions.md)
