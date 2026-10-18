# How-To: Create and Manage Pipeline Opportunities

Create commercial opportunities directly on the Kanban board or via detailed form view, assign customers and salespeople, configure win probabilities, and generate sales quotations.

---

### Task 1: Quick Creation from the Pipeline Kanban

1. Open the **CRM** app from your main dashboard.
2. At the top left of the pipeline view, click the **+ New** button (or click the **+** icon in the **New** stage column header).

   ![CRM Pipeline Kanban creation buttons](../media/001.png)

3. Fill in the quick-creation fields:
   * **Contact**: Select an existing partner (e.g., `Abigail Peterson`) or type a new name to create one.
   * **Opportunity**: Enter a descriptive title (e.g., `NorthStar Logistics - Modernization`).
   * **Email**: Contact email address (`abigail.peterson39@example.com`).
   * **Phone**: Direct telephone number.
   * **Expected Revenue**: Enter the estimated gross transaction value (e.g., `€ 12,000.00`).
   * **Priority**: Click stars (1 to 3) to flag high-priority deals.

   ![CRM pipeline quick creation card](../media/012.png)

4. Click **Add** to create the card immediately in the stage column (or click **Edit** to open the full form view).

   ![New opportunity card displayed in pipeline stage](../media/015.png)

> [!NOTE]
> For allowed formats, character constraints, and definitions of each field, see [Reference: Opportunity Form Fields](../reference/01-lead-and-opportunity-field-definitions.md#opportunity-form-fields).

---

### Task 2: Configure Detailed Opportunity Properties

1. Open any opportunity card from your pipeline to view the full form.

   ![CRM opportunity form view](../media/016.png)

2. Configure core sales details:
   * **Expected Closing**: Select the target date by which you expect the contract to close.
   * **Probability**: By default, CURQ applies the stage's default probability or calculates statistical win odds. To set a custom percentage, type directly into the field.
   * **Tags**: Click into the field and select or type color-coded category labels (e.g., `Enterprise`, `Software`).
   * **Salesperson** and **Sales Team**: Verify or reassign the account owner (`Mitchell Admin`) and team unit (`Sales`).
3. In the **Internal Notes** tab at the bottom, type qualification background, technical specifications, or negotiation summaries.
4. Click the cloud icon at the top of the form (or navigate away) to save.

---

### Task 3: Complete Extra Tracking and Campaign Attribution

1. On the opportunity form, select the **Extra Information** tab.

   ![CRM opportunity extra information tab](../media/017.png)

2. Under the **Contact Information** section, review or populate:
   * **Company Name** & **Address**: Legal entity name and billing coordinates.
   * **Website** & **Language**: Web portal and communication language (e.g., `Dutch / Nederlands`).
   * **Contact Name**, **Job Position**, and **Mobile**: Key individual decision-maker contacts.
3. Under the **Marketing** section:
   * **Campaign**: Select the marketing initiative that generated this lead (e.g., `Webinar 2026`).
   * **Medium**: Select the delivery channel (e.g., `Email`, `Website Form`).
   * **Source**: Select the referral origin (e.g., `LinkedIn`, `Newsletter`).
   * **Referred By**: Enter the name of the individual or partner who introduced the deal.
4. Under the **Tracking** section:
   * **Company**: Multi-company entity holding the opportunity (`NL Company RGS`).
   * **Sales Team**: Assigned internal unit (`Sales`).
   * **Days to Assign** & **Days to Close**: Automatically tracked sales lifecycle velocity metrics.
5. Save the record.

> [!NOTE]
> For descriptions of tracking metadata and assignment duration metrics, see [Reference: Extra Information Tab Fields](../reference/01-lead-and-opportunity-field-definitions.md#extra-information-tab-fields).

---

### Task 4: Connect an Opportunity to a Sales Quotation

1. From the top action bar of the opportunity form, click **New Quotation**.

   ![CRM opportunity new quotation button](../media/018.png)

2. CURQ creates a draft sales order pre-populated with the customer, salesperson, and commercial terms.
3. Add quotation line items and product quantities.
4. When you save or confirm the quotation, the opportunity displays a **Quotations** smart button in its header showing real-time quote values and order status.

---

### Edge Cases & Recovery Steps

* **Resetting Overridden Probability**: If you entered a manual win probability and wish to restore the automated calculation, click the small gear icon next to the **Probability** field and select **Reset to default**.
* **Reassigning Deals**: If an opportunity needs to move to another representative, change the **Salesperson** field; the deal will automatically update in their personal pipeline.

---

### Related Documentation
* [Reference: Lead and Opportunity Form Field Definitions](../reference/01-lead-and-opportunity-field-definitions.md)
* [How-To: Qualify and Convert Leads into Opportunities](./02-convert-leads-to-opportunities.md)
* [How-To: Manage Pipeline Stages and Won or Lost Deals](./03-manage-pipeline-stages-and-won-lost-status.md)
