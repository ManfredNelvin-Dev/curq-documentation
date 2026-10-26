# Generate and Track Sales Quotations from Opportunities

Create commercial quotations directly from CRM opportunities, manage quote revisions, track customer proposals, and convert accepted quotes into confirmed sales orders.

---

### Task 1: Create a Quotation from an Opportunity

1. Open **CRM > Sales > My Pipeline**.
2. Click into the target opportunity card to open its full form view (e.g., `Test Deal - Cloud Migration` or `Northstar Logisctics - Modernization`).
3. In the top action bar, click the **New Quotation** button (highlighted in red):

   ![CRM opportunity new quotation button](../media/018.png)

4. CURQ automatically generates a draft quotation pre-filled with:
   * **Customer**: Inherited from the opportunity's linked contact (`Daan van den Berg`).
   * **Addresses**: Inherits the billing coordinates (`Invoice Address: Daan van den Berg`, `Keizersgracht 421, Gebouw B, Suite 304, 1016 EK Amsterdam, Netherlands`) and shipping destination (`Delivery Address: Daan van den Berg, Sanne de Vries`).
   * **Expiration**: Pre-set expiration date (e.g., `11/16/2026`).
   * **Commercial Terms**: Default currency pricelist (`Default (EUR)`) and payment terms (`Immediate`).
   * **Salesperson**: Inherited from the deal record (`Siddharth Sathyan`).
5. In the **Order Lines** tab, click **Add a product** to select goods, software subscriptions, or consulting services.
6. The draft quotation saves automatically (or click the cloud icon).

---

### Task 2: Send the Quotation to the Prospect

1. On the quotation form view, click the **Send by Email** button in the top action bar (highlighted in red):

   ![CRM quotation Send by Email button](../media/088.png)

2. In the email composer dialog, review the pre-configured email template and proposal attachment:

   ![CRM quotation email composer modal](../media/089.png)

   * **To**: Recipient contact email (`Daan van den Berg <corporate@globallogistics.com>`).
   * **Subject**: Proposal notification subject line (`Siddharth Quotation (Ref S00041)`).
   * **Body**: Standardized message referencing the quotation reference (`S00041`), the opportunity title (`Northstar Logisctics - Modernization`), and quotation amount.
   * **Attachment**: Auto-generated proposal document (`Quotation - S00041.pdf`).
3. Click the dark blue **Send** button at the bottom left of the modal dialog.
4. The quotation state advances from **Quotation** to **Quotation Sent**, and the sent email log and PDF copy are recorded in the record's Chatter feed on the right.

---

### Task 3: Track Quotations on the Opportunity Card

1. Click the breadcrumbs link at the top to return to the opportunity record (`Pipeline / Northstar Logisctics - Modernization`).
2. In the form header, notice the **Quotations** smart button (highlighted in red):

   ![CRM opportunity Quotations smart button](../media/090.png)

   * It displays the total count of active quotations linked to this deal (`Quotations 1`).
   * Notice that the deal details display the expected revenue (`€ 12,000.00`), contact (`Daan van den Berg`), email (`corporate@globallogistics.com`), phone (`+31 20 555 0148`), probability (`at 50.00 %`), and salesperson (`Siddharth Sathyan`).
3. If negotiations evolve and the client requests an alternate scope, click **New Quotation** again to issue a secondary proposal without overwriting the original.

---

### Task 4: Confirm the Sale and Finalize the Opportunity

1. When the customer approves the proposal:
2. Open the quotation (`S00041`), currently in the **Quotation Sent** stage, and click the **Confirm** button in the top action bar (highlighted in red):

   ![CRM quotation Confirm sales order button](../media/091.png)

3. CURQ advances the quotation into a confirmed **Sales Order** (the status indicator advances from `Quotation Sent` to `Sales Order`).
4. Return to the opportunity:
   * The **Expected Revenue** synchronizes with the confirmed sales order total.
   * In the top action bar, click **Won** to transition the deal to the Won stage at 100% probability and record the closed deal.

---

### Edge Cases & Recovery Steps

* **Multiple Competing Quotations**: If you send multiple alternate quotes to a client, only the quotation that is confirmed will update the final order revenue; remaining draft quotes can be cancelled.
* **Customer Cancels Before Confirmation**: If the deal falls through, click **Cancel** on the draft quotation and click **Lost** on the opportunity record, selecting the appropriate rejection reason.

---

### Related Documentation
* [Opportunity Form Fields](../settings-and-fields/01-lead-and-opportunity-field-definitions.md#opportunity-form-fields)
* [Create and Manage Pipeline Opportunities](./01-create-and-manage-opportunities.md)
* [Understanding Leads vs. Opportunities in CURQ](../core-concepts/01-understanding-leads-vs-opportunities.md)
