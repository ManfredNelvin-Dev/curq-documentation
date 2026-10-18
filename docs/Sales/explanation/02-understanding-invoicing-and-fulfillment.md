# Explanation: Understanding Invoicing and Fulfillment

This document explains the commercial logic, financial risk models, and cross-module synchronization governing invoicing policies in CURQ 18 Sales.

---

### The Operational Dilemma: When to Recognize a Billable Event

In commerce, determining the precise moment a quotation converts into a billable customer liability is a critical balance between cash flow optimization and operational accuracy:

```
                      ┌─── Invoicing Policy ───┐
                      │                        │
                      ▼                        ▼
           [ Ordered Quantities ]    [ Delivered Quantities ]
              • Billed Upfront          • Billed Post-Delivery
              • Optimizes Cash Flow     • Eliminates Billing Disputes
              • Services / Software     • Physical Goods / Freight
```

---

### Invoicing Policy Architecture

CURQ enforces invoicing rules at the individual product level via the **Invoicing Policy** configuration, directing how sales order lines translate into draft customer invoices:

#### 1. Ordered Quantities (`order`)
Under this policy, customer invoices are generated based on the agreed quantity specified in the confirmed sales order, regardless of warehouse shipment status.

* **Cash Flow Advantage**: Secures immediate liquidity by billing the client prior to incurring packaging, freight, or procurement costs.
* **Appropriate Commercial Scenarios**:
  * Digital software licenses, recurring SaaS plans, and digital downloads.
  * Professional services, retainer hours, and consulting agreements.
  * Made-to-order manufacturing requiring upfront customer commitment.
* **Accounting Risk**: If supply chain bottlenecks prevent fulfillment or products are returned, accounting staff must issue credit notes and process customer refunds to clear unearned revenue balances.

#### 2. Delivered Quantities (`delivery`)
Under this policy, an order line becomes invoiceable only after warehouse personnel physically dispatch goods and validate the corresponding delivery slip.

* **Operational Accuracy**: The invoice precisely mirrors what was loaded onto the delivery truck. If 100 units were ordered but only 80 were in stock, the customer is billed strictly for 80 units.
* **Appropriate Commercial Scenarios**:
  * Physical goods, heavy machinery, and wholesale consumables.
  * Fragile freight subject to transit damage or warehouse stock variances.
  * Multi-stage deliveries spanning several shipments over weeks or months.
* **Operational Risk**: If shipping clerks fail to validate delivery orders in the system, billing is delayed, creating unbilled inventory liabilities.

---

### The Three-Way Cross-Module Handshake

A sale does not exist in isolation; CURQ architecture binds the commercial order, warehouse dispatch, and general ledger into a synchronized tripartite workflow:

```
┌─────────────────┐       Confirmation       ┌─────────────────┐
│   Sales Order   ├─────────────────────────►│  Delivery Slip  │
│  (Commercial)   │                          │  (Warehouse)    │
└────────┬────────┘                          └────────┬────────┘
         │                                            │
         │ Automatic Rule / Manual Trigger            │ Physical Dispatch
         ▼                                            ▼
┌─────────────────┐                          ┌─────────────────┐
│ Customer Invoice│◄─────────────────────────┤ Validated Moves │
│   (Accounting)  │      Delivered Qty Done  │   (Inventory)   │
└─────────────────┘                          └─────────────────┘
```

1. **Sales Order**: Captures commercial intent, negotiated prices, currency exchange rates, and tax jurisdictions.
2. **Delivery Slip**: Manages physical warehouse operations, lot/serial numbers, packaging, and stock location routing.
3. **Customer Invoice**: Reconciles commercial commitments with physical fulfillment, posting journal debits to Accounts Receivable and credits to Sales Revenue.

---

### Handling Partial Shipments and Backorders

When inventory constraints necessitate splitting an order into multiple shipments:

1. **First Shipment**: 100 units ordered; warehouse dispatches 60 units.
2. **Backorder Generation**: CURQ automatically splits the delivery order, fulfilling 60 units and spawning a linked backorder for the remaining 40 units.
3. **Partial Billing**: Under *Delivered quantities*, clicking **Create Invoice** generates an invoice for exactly 60 units.
4. **Final Fulfillment**: When the remaining 40 units arrive and ship, a second invoice is generated for the final 40 units.
5. The sales order monitors the cumulative balance across all linked delivery slips and invoices, marking itself fully invoiced only when `Invoiced Qty == Ordered Qty`.

---

### Unbilled Revenue Governance: The "Orders to Invoice" Queue

In high-volume distribution centers, sales representatives should not manually check every individual order to see if warehouse dispatch has finished.

CURQ resolves this through the **Orders to Invoice** architectural filter (`To Invoice > Orders to Invoice`). The system runs an automated evaluation:

$$\text{Invoiceable Units} = \text{Delivered Quantity} - \text{Invoiced Quantity}$$

Whenever $\text{Invoiceable Units} > 0$, the sales order surfaces automatically in the queue. Finance teams can filter this list at regular intervals (daily, weekly, or monthly) and trigger batch invoice generation across hundreds of fulfilled orders simultaneously, preventing unbilled deliveries from slipping through administrative cracks.

---

### Related Documentation
* [How-To: Invoice Sales Orders](../how-to/04-invoice-sales-orders.md)
* [How-To: Configure Shipping and Delivery Methods](../how-to/13-configure-shipping-and-delivery-methods.md)
* [Reference: Sales Configuration and Delivery Settings](../reference/03-sales-configuration-and-delivery-settings.md)
* [Explanation: Understanding the Sales Order Lifecycle and State Machine](./01-understanding-the-sales-order-lifecycle.md)
