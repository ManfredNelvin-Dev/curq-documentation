# Sales

Manage customer quotations, automate sales order confirmation, configure dynamic pricing and catalog variants, and streamline delivery and customer invoicing in CURQ 18.

---

## Overview and Core Architecture

The **Sales** application in CURQ 18 acts as the central revenue engine, orchestrating the entire commercial transaction lifecycle from initial inquiry to payment reconciliation. It bridges commercial negotiation, product catalog governance, warehouse fulfillment, and accounts receivable invoicing into a single, cohesive business process.

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ Draft Quotation │ ───► │ Sent Quotation  │ ───► │ Confirmed Order │
│ (Lines & Price) │      │ (Email/Portal)  │      │ (Locked Record) │
└─────────────────┘      └─────────────────┘      └────────┬────────┘
                                                           │
                         ┌─────────────────────────────────┴─────────────────────────────────┐
                         ▼                                                                   ▼
              ┌─────────────────────┐                                             ┌─────────────────────┐
              │ Warehouse Picking   │                                             │ Customer Invoicing  │
              │ Physical Delivery   │                                             │ Ordered / Delivered │
              │ Delivered Goods     │                                             │ Financial Postings  │
              └─────────────────────┘                                             └─────────────────────┘
```

---

## Key Functional Capabilities

### 1. Quotation & Offer Management
* **Flexible Quotations**: Build detailed commercial quotes with section headers, descriptive text notes, packaging calculations, and optional add-on products.
* **Quotation Templates & PDF Builder**: Accelerate quoting using pre-configured templates with default terms, payment policies, and dynamic PDF cover pages, executive summaries, and legal footers.
* **Customer Portal & E-Signatures**: Dispatch quotes electronically via email or the customer portal. Prospects can review line details, accept quotes with legally binding digital signatures, and submit credit card or wire prepayments online.

### 2. Order Lifecycle & Governance
* **Sales Order State Machine**: Transition cleanly across status milestones (`Quotation` → `Quotation Sent` → `Sale Order` → `Locked` / `Cancelled`).
* **Automated Order Locking**: Prevent accidental changes to confirmed agreements. Once an order is confirmed, the record locks automatically to preserve downstream alignment with warehouse pickings and accounting records. Authorized managers can safely unlock, adjust, and re-lock orders when revisions are necessary.
* **Audit Trail & Chatter**: Track every price change, sent email, customer view, and approval event in the Chatter audit log.

### 3. Catalog, Variants & Dynamic Pricing
* **Goods & Services**: Sell physical storable products with stock tracking, consumables, service retainers, and digital subscriptions.
* **Configurable Attributes & Variants**: Maintain a single product template with multiple attributes (size, color, storage) while dynamically calculating variant price extras and tracking inventory per specific SKU.
* **Multi-Currency Pricelists**: Set customer-specific pricing, seasonal campaigns, and volume breaks. CURQ evaluates pricing rules using a strict specificity cascade (*Product Variant* → *Product Template* → *Product Category* → *Global*).
* **Discount & Loyalty Programs**: Launch promotional coupon codes, loyalty point rewards, digital wallets, gift cards, and automated bundle discounts.

### 4. Fulfillment & Invoicing Policies
* **Ordered vs. Delivered Invoicing**:
  * *Delivered Quantities*: Essential for storable physical goods. Customer invoices can only be generated after warehouse delivery slips are validated in the Inventory module, eliminating billing discrepancies.
  * *Ordered Quantities*: Recommended for services, retainers, and subscriptions, allowing immediate invoicing upon sales order confirmation.
* **Down Payments & Deposits**: Bill percentage (e.g., 30%) or fixed deposits upfront. When final fulfillment occurs, CURQ automatically reconciles and deducts previous down payments from the final balance invoice.
* **Shipping & Logistics**: Integrate shipping rules (fixed rate, weight/volume brackets, or live Sendcloud carrier logistics) directly into the quotation checkout.

### 5. Sales Teams & Margin Analytics
* **Team Governance**: Group sales personnel into regional or product teams, assign team leaders, track monthly revenue quotas, and categorize orders with color-coded tags.
* **Real-Time Gross Margin Tracking**: Monitor purchase costs, computed gross profit margins, and markup percentages per line item and across the entire order.
* **Reporting & Pivot Dashboards**: Analyze sales velocity, average order values, salesperson performance, and historical revenue trends through interactive Pivot and Graphical reports.

---

### Quick Actions

| | |
| --- | --- |
| [**Create and Send Quotations**](./how-to/01-create-and-send-quotations.md) Go directly to the practical steps for drafting quotations, confirming orders, locking agreements, and generating customer invoices. | [**Process Your First Sale**](./tutorials/01-process-your-first-sale.md) Explore how quotations, digital signatures, online payments, delivery orders, and customer billing connect from start to finish. |
| [**Invoicing Policies & Fulfillment Mechanics**](./explanation/02-understanding-invoicing-and-fulfillment.md) Understand ordered versus delivered billing rules, sales state machine locking, down payments, and pricelist rule hierarchies. | [**Configure Pricelists & Pricing Rules**](./how-to/08-configure-pricelists-and-pricing-rules.md) Set up product variants, category logistics, pricelists, promotion programs, quote templates, delivery methods, and sales teams. |
