# Reference: Sales Configuration and Delivery Settings

This document provides factual specifications for invoicing policies, delivery provider settings, sales margin calculations, and system error recovery tables in CURQ 18 Sales.

---

### Invoicing Policies Comparison

| Attribute | Ordered Quantities | Delivered Quantities |
| :--- | :--- | :--- |
| **Trigger Mechanism** | Immediate upon sales order confirmation. | Warehouse delivery slip validated. |
| **Quantity Invoiced** | Equals product quantity on the sales order line. | Equals delivered quantity on validated warehouse moves. |
| **Partial Shipments** | Bills full order amount upfront. | Bills only physical units actually dispatched. |
| **Recommended Use** | Standard services, prepayments, digital software. | Physical goods, fragile shipments, B2B wholesale freight. |
| **Accounting Risk** | Deferred revenue liabilities if fulfillment fails. | Unbilled accounts receivable if billing runs lag delivery. |

---

### Delivery Provider Configuration Fields

| Field Name | Description |
| :--- | :--- |
| **Fixed Price** | Flat shipping rate applied to order when using Fixed Price delivery. |
| **Free if order amount is above** | Subtotal threshold above which shipping fee drops to € 0.00. |
| **Condition Variable** | Variable evaluated in rule-based shipping (`Weight`, `Volume`, `Price`, or `Quantity`). |
| **Operator** | Rule-based comparison criteria: `<=`, `<`, `=`, `>`, `>=`. |
| **Delivery Cost** | Fixed base fee plus marginal variable rate per kg or unit. |
| **Public Key** | API authentication key from Sendcloud dashboard for carrier integration. |
| **Secret Key** | Cryptographic secret for live Sendcloud carrier API calls. |
| **Shipping Service** | Contracted parcel service product *(e.g., DHL, PostNL, UPS)*. |

---

### Sales Margin Calculations

* **Line Margin**: Gross profit calculated as unit selling price minus unit cost, multiplied by the ordered quantity.
* **Line Margin (%)**: The gross profit percentage of the line's untaxed subtotal.
* **Order Margin Total**: The aggregated gross profit across all order lines on the quotation.
* **Order Margin Total (%)**: The total gross profit divided by the order's untaxed total amount.
* All margin calculations evaluate figures **excluding sales taxes** to prevent regional tax rate differences from distorting commercial profitability.

---

### System Validation Errors & Recovery Lookup

| Error Message | Probable Cause | Corrective Action |
| :--- | :--- | :--- |
| **"There are no invoiceable lines"** | Product invoicing policy is set to *Delivered quantities*, but zero delivery slips have been validated. | Open the **Delivery** smart button and click **Validate** on the picking slip, or switch product policy to *Ordered quantities*. |
| **"You cannot modify a locked order"** | **Lock Confirmed Sales** is active in settings and order has reached confirmed state. | Click **Unlock** in the top action bar to enable line edits, make modifications, and re-lock. |
| **"No matching delivery method found"** | Customer delivery address does not match any **Availability** territory filters. | Add the customer's country or state to the delivery method's availability tab or leave filters blank for global support. |
| **"Cannot convert between units"** | Sales order line UoM belongs to a different measurement category than the product master UoM. | Select a Unit of Measure belonging to the same measurement category *(e.g., Weight vs. Unit)*. |
| **"Currency mismatch"** | Quotation pricelist currency differs from customer or company accounting currency without exchange rates. | Verify that active exchange rates exist in **Accounting > Configuration > Currencies**. |

---

### Operational Edge Cases and System Rules Reference

| Operational Scenario / FAQ Query | System Behavior | Resolution / Best Practice |
| :--- | :--- | :--- |
| **Can sales staff change prices or items after a customer signs online?** | Once signed online, CURQ locks the document to protect the legal agreement. | No. Once a customer signs online, CURQ locks the document. To change items or prices, sales staff must cancel the order or create a new revised quotation. |
| **What happens if a customer wants to pay by check or bank wire offline?** | Sales staff can bypass portal gateway payment requirements from the backend. | Sales staff can open the quotation in the backend and click **Confirm** directly. This confirms the sales order right away without requiring an online payment. |
| **Why is the Cost field hidden on some product forms?** | When products possess multiple variants, the cost input on the master template is hidden. | When a product has multiple variants *(such as colors or sizes)*, CURQ hides the cost on the main template. Open the **Variants** stat button and enter specific procurement costs on each individual variant record. |
| **Can we ask for a partial deposit like 20% or 50% instead of full payment online?** | Upfront deposit percentages rather than 100% full prepayment can be enforced. | Yes. In the quotation **Other Info** tab, check **Online Payment** and enter any deposit percentage you want *(e.g., `20.00 %` or `50.00 %`)*. The customer only needs to pay that deposit to confirm the order. |
| **When does CURQ create customer invoices automatically?** | Immediate invoice generation and ledger posting upon portal checkout. | If **Automatic Invoice** is turned on in settings, CURQ creates and posts the invoice the second the customer online payment is confirmed by the payment gateway. |

---

### Related Documentation
* [How-To: Invoice Sales Orders](../how-to/04-invoice-sales-orders.md)
* [How-To: Configure Shipping and Delivery Methods](../how-to/13-configure-shipping-and-delivery-methods.md)
* [How-To: Track Sales Margins and Costs](../how-to/15-track-sales-margins-and-reports.md)
* [Explanation: Understanding Invoicing and Fulfillment](../explanation/02-understanding-invoicing-and-fulfillment.md)
