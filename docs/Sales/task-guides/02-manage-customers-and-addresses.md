# Manage Customers and Commercial Addresses

Create customer records, configure multiple delivery and invoicing addresses, set commercial pricing terms, and establish sales order warning rules in CURQ 18 Sales.

---

### Prerequisites
* Sales User or Administrator access in CURQ 18.
* *(Optional)* To enable warning pop-ups, check **Sale Warnings** in **Sales > Configuration > Settings**.

---

### Task 1: Create a Customer Record (Individual vs. Company)

Every quotation and sales order requires a customer account. To create a new customer:

1. In the top navigation bar, click **Orders > Customers**.
2. Click **+ New** at the top left of the screen:

   ![Customers list view showing existing customer cards and the New button](../media/022.png)

3. Select whether the contact is an **Individual** or a **Company**:

   ![Customer form configured for an individual contact with contact details](../media/023.png)

4. Configure primary contact fields:
   * **First Name & Last Name**: For individuals, specify personal names *(e.g., `John Doe`)*.
   * **Company Name**: When creating an individual, link them to an existing parent corporate account *(e.g., `Acme Technologies`)*.
   * **Contact Address**: Enter Street, Municipality, ZIP, City, and Country *(e.g., `Netherlands`)*.
   * **Job Position & Department**: Specify the contact's professional role *(e.g., `Sales Director`)* and department.
   * **Email & Website**: Primary electronic mailbox and web domain used for customer portal access and quotation delivery.
   * **Phone & Mobile**: Direct telephone coordinates printed on quotations, delivery slips, and invoices.
   * **Language**: Select the client's preferred language *(e.g., `Dutch / Nederlands`)*. Quotation PDFs, portal pages, and invoice emails render in this language automatically.
   * **Tags**: Assign categorization badges *(such as `B2B`, `VIP`, or `Consulting`)*.
5. CURQ auto-saves updates as you enter information.

---

### Task 2: Manage Multiple Delivery and Invoicing Addresses

Large corporate customers often centralize accounting at headquarters while receiving goods at regional warehouses or branch offices:

1. On the customer record, locate the **Contacts & Addresses** tab.
2. Click **Add**.
3. In the **Create Contact** modal, choose the address type:
   * **Contact**: An individual employee, buyer, or site manager linked to this company.
   * **Invoice Address**: The dedicated billing office where invoices and statements are routed.
   * **Delivery Address**: Physical shipping warehouse or receiving dock printed on warehouse picking and delivery slips.
   * **Other Address**: Secondary office, showroom, or subsidiary branch.

   ![Create Contact modal configuring contact and address types](../media/024.png)

4. Enter the contact name, street address, and direct phone/email coordinates for this location.
5. Click **Save & Close** (or **Save & New** to add additional branch addresses).
6. When drafting a quotation for this client, selecting their company automatically populates the default invoice and delivery addresses while allowing sales reps to select branch alternatives.

---

### Task 3: Configure Commercial and Fiscal Terms

Open the customer record and click the **Sales & Purchase** tab:

![Customer form showing Sales and Purchase tab highlighted in red box](../media/025.png)

1. Under the **Sales** section:
   * **Is a Customer**: Check to mark this contact as an active commercial buyer.
   * **Salesperson**: Assign a dedicated internal account executive. New quotations prefill this salesperson automatically.
   * **Payment Terms**: Select the default payment schedule *(e.g., `30 Days` or `Immediate Payment`)*.
   * **Customer Payment Mode**: Designate the preferred inbound payment method.
   * **Pricelist**: Assign customer-specific negotiated pricing tiers, wholesale schedules, or currency pricelists *(e.g., `Default (EUR)`)*.
   * **Delivery Method**: Assign a default shipping carrier *(e.g., `Standard Ground Shipping`)*.
2. Under the **Fiscal Information** section:
   * **Fiscal Position**: Assign tax mapping rules for tax-exempt, domestic, or international B2B clients.
3. Under the **Miscellaneous** section:
   * **Reference**: Enter an internal client account code or legacy customer ID.
   * **Company ID**: Official government business registration number.

---

### Task 4: Configure Electronic Invoicing and Banking

Under the **Invoicing** tab, establish banking coordinates and e-invoicing exchange parameters:

![Customer form showing Invoicing tab highlighted in red box](../media/026.png)

1. **Bank Accounts**: Click **Add a line** to register the partner's bank account number (`IBAN`), bank name, and check **Send Money** if issuing refunds.
2. **Customer Invoices Settings**:
   * **Invoice sending**: Choose delivery method for customer invoices.
   * **eInvoice format**: Select applicable XML e-invoicing standards *(such as `XML format`, `France Factur-X`, or `EU Peppol BIS 3.0`)*.
   * **Netherlands KvK**: Enter local Chamber of Commerce (KvK) identification number.
   * **Disable Overdue Invoice Reminder**: Check to exclude this customer from automated payment reminder runs.
3. **Accounting Entries & Automation**:
   * **Account Receivable / Payable**: View or adjust standard general ledger reconciliation accounts *(e.g., `1101010 Handelsdebiteuren nominaal`)*.
   * **Auto-post bills**: Choose **Ask after 3 validations without edits** (default), **Always**, or **Never**.
   * **Ignore Abnormal Invoice Amount & Date**: Check to bypass anomaly verification warning alerts for trusted partners.

---

### Task 5: Set Customer Sales Order Warnings and Credit Holds

If a customer has a credit hold, pending lawsuit, or strict packaging requirement, configure automatic alerts:

1. Open the customer record and click the **Internal Notes** tab:

   ![Customer record form showing Internal Notes tab](../media/027.png)

2. In the **Warning on the Sales Order** section, select an alert level:
   * **No Message**: Standard operation with no alerts.
   * **Warning**: Displays an informative pop-up alert on screen when sales reps select this customer, but allows them to proceed.
   * **Blocking Message**: Displays an error modal and completely blocks sales staff from saving or confirming quotations for this customer.
3. Type the message text in the prompt box *(e.g., `Account on credit hold: Contact finance before issuing new quotes`)*.
4. Click the cloud icon to save.

---

### Edge Cases & Recovery Steps

* **Overriding a Blocking Message**: If an executive authorizes an exception for a customer with a blocking message, open the customer record, temporarily set **Warning on the Sales Order** to **Warning** or **No Message**, confirm the quote, and restore the block.
* **Customer Address Conflict on Existing Quotations**: Changing a customer's address on their master contact card does not alter already-confirmed historical sales orders, protecting historical delivery slips and tax audits.

---

### Related Documentation
* [Create and Send Quotations](./01-create-and-send-quotations.md)
* [Configure Pricelists and Pricing Rules](./08-configure-pricelists-and-pricing-rules.md)
* [Quotation and Sales Order Field Definitions](../settings-and-fields/01-quotation-and-sales-order-field-definitions.md)
