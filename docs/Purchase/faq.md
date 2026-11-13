# Purchase FAQ

Frequently asked questions about procurement lifecycles, RFQs, purchase order approvals, warehouse receiving, bill control policies, and vendor blanket agreements in CURQ 18.

---

## 1. What is the difference between "Ordered quantities" and "Received quantities" bill control?

**Ordered quantities** allows accounts payable to generate and validate vendor bills immediately after purchase order confirmation, regardless of whether goods have arrived at the warehouse dock. This policy is ideal for recurring service contracts, software licenses, or prepaid retainers. **Received quantities** enforces strict physical verification, preventing vendor bill creation until warehouse staff validates incoming delivery receipts (`WH/IN/` in *Done* status). This protects your cash flow against billing errors or short shipments on physical goods.

---

## 2. When should I use a Blanket Order versus a Purchase Template?

Use a **Blanket Order** when you have a binding long-term commercial agreement with a single supplier for a committed volume of goods at locked, pre-negotiated unit prices over a defined validity period. Blanket orders track cumulative call-off releases in real time via the *Ordered* column. Use a **Purchase Template** for routine, non-contractual purchasing lists (such as monthly office supplies or standard packaging components) where items are frequently ordered together, potentially from different vendors, without tracking commitment fulfillment.

---

## 3. How does the Purchase Order Approval limit threshold work for high-value purchases?

When **Purchase Order Approval** is enabled under Purchase Settings, any order whose total amount exceeds the configured threshold (e.g., `$ 5,000.00`) cannot be confirmed directly by standard buyers. Upon clicking **Confirm Order**, the status advances to **To Approve**. A user with *Purchase Manager* access rights must review the commercial terms and click **Approve Order** to authorize the purchase and trigger downstream warehouse receipts.

---

## 4. Can I cancel a confirmed Purchase Order and reset it back to a draft quotation?

Yes, provided no incoming warehouse receipts have been validated or vendor bills posted. Open the purchase order and click **Cancel** in the action bar. The status advances to *Cancelled*. To reopen and edit terms or quantities, click **Set to Draft**, which restores the document to an editable *RFQ* state. If warehouse receipts or vendor bills have already been validated, you must return the received goods or cancel the vendor credit notes before the purchase order can be cancelled.

---

## 5. How do I handle partial incoming shipments, backorders, and vendor returns?

When a supplier delivers fewer items than requested, enter the actual count verified at the receiving dock in the **Quantity** column and click **Validate**. CURQ prompts you to **Create Backorder**, which automatically generates a new incoming receipt for the remaining balance. If delivered goods are damaged or incorrect, open the validated receipt in *Done* status, click **Return**, confirm the return quantity, and validate the outgoing return picking (`WH/OUT/`). The originating purchase order automatically reduces its received quantity count to keep billing lines accurate.

---

## Related Documentation

* [Create and Process Your First Purchase Order](./getting-started/01-create-and-process-your-first-purchase-order.md)
* [Understanding the Procurement Lifecycle and Order States](./core-concepts/01-understanding-the-procurement-lifecycle-and-order-states.md)
* [Understanding Bill Control and 3-Way Matching](./core-concepts/02-understanding-bill-control-and-3-way-matching.md)
* [RFQ, Purchase Order, and Blanket Order Field Definitions](./settings-and-fields/01-rfq-and-purchase-order-field-definitions.md)
* [Warehouse Receipt and Vendor Bill Field Definitions](./settings-and-fields/02-warehouse-receipt-and-vendor-bill-field-definitions.md)
