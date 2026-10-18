# Contacts FAQ

### 1. When should I set a partner as a Company versus an Individual?
Set a partner as a **Company** if it represents a legal entity that holds fiscal liabilities, tax IDs, and credit terms. Set a partner as an **Individual** for employees or contacts, who can be linked to a parent company to inherit its commercial and accounting settings while keeping direct contact details.

### 2. How do I ship orders to a branch warehouse while sending the invoice to corporate headquarters?
Under the customer company record in **Contacts**, add distinct child addresses for **Delivery Address** and **Invoice Address**. When creating a sales order, select the parent company as the customer, then choose the branch location in **Delivery Address** and headquarters in **Invoice Address**.

### 3. How do I merge duplicate contact records without losing transaction history?
In the **Contacts** list view, select the duplicate records, open the **Action** menu, and click **Merge**. Select the surviving master record; CURQ automatically reassigns all open sales orders, invoices, CRM opportunities, and chatter history to the destination contact.

### 4. How do Fiscal Positions automatically apply the correct taxes based on customer location?
Fiscal Positions map standard domestic tax rates to destination-specific taxes or zero-rate exemptions based on the customer's delivery country and state. With **Detect Automatically** enabled, CURQ detects the address on the sales order and replaces standard product taxes with the appropriate tax rules.

### 5. How can I prevent sales orders from being created for delinquent customers?
Open the contact record, go to the **Internal Notes** tab, and set **Warning on the Sales Order** to **Blocking Message** with an explanation. When a salesperson attempts to draft or confirm an order for this customer, the system displays a hard modal block that stops the transaction.
