# Sales FAQ

### 1. What is the difference between "Invoice what is ordered" and "Invoice what is delivered"?
**Invoice what is ordered** allows immediate invoicing for the full order amount upon confirmation, which is ideal for services and subscriptions. **Invoice what is delivered** restricts invoicing to quantities validated on warehouse delivery slips, preventing billing errors and disputes on physical goods.

### 2. Why are confirmed sales orders locked, and how can an authorized user edit them?
Confirmed orders are locked to protect downstream inventory pickings, manufacturing orders, and accounting drafts from inadvertent alterations. Authorized users can click **Unlock** on the order header, make necessary line or price adjustments, and click **Lock** to synchronize downstream documents.

### 3. What happens to reserved inventory and delivery pickings when a Sales Order is cancelled?
Cancelling a confirmed sales order immediately cancels any unfulfilled warehouse delivery pickings and returns reserved stock to available inventory. If goods have already been shipped, an inventory return picking must be processed before the order can be cancelled.

### 4. How do Down Payments work and how are they deducted from the final invoice?
On a confirmed order, click **Create Invoice** and select **Down Payment** (percentage or fixed amount) to bill the deposit. When the final order is fulfilled, generate a **Regular Invoice** with **Deduct down payments** checked to automatically deduct the prior deposit and bill the net remaining balance.

### 5. How does CURQ determine which pricelist rule applies when multiple rules overlap?
CURQ applies rules according to a strict specificity hierarchy: Product Variant takes precedence over Product Template, which takes precedence over Product Category, followed by Global rules. Within the same specificity tier, the rule with the highest applicable minimum quantity threshold is selected.
