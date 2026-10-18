# How-To: Configure Quotation Templates and PDF Quote Builder

Create standardized quotation templates, configure default product bundles, and attach professional PDF Quote Builder header and footer cover pages in CURQ 18 Sales.

---

### Prerequisites
* Enable **Quotation Templates** in **Sales > Configuration > Settings**.

   ![Enable quotation templates setting](../media/055.png)

---

### Task 1: Create a Quotation Template

1. Navigate to **Sales > Configuration > Quotation Templates**:

   ![Configuration navigation dropdown showing Quotation Templates](../media/011.png)

   ![Quotation templates list](../media/134.png)

2. Click **+ New**.
3. In the **Quotation Template** title field, type a clear template name *(e.g., `Standard Equipment Package`)*.
4. Configure baseline validity and terms:
   * **Quotation Validity**: Enter validity duration in days *(e.g., `30` days)*.
   * **Confirmation Mail**: Select automated confirmation email template *(e.g., `Sales: Order Confirmation`)*.
   * **Online Signature & Online Payment**: Set default customer approval toggles.

---

### Task 2: Populate Default Lines and Optional Items

1. Under the **Lines** tab, click **Add a product** to pre-populate default catalog items *(e.g., `Fair Phone 5 (Black)` and `Fair Phone 5 (White)`)*, standard quantities, and sections:

   ![Quotation template form Lines tab showing default product lines](../media/130.png)

2. Under the **Optional Products** tab, click **Add a line** to specify recommended cross-sell add-ons *(e.g., `Event Registration`)* that sales reps can pitch alongside the core package:

   ![Quotation template form Optional Products tab showing cross-sell item and online confirmation settings](../media/131.png)

3. Under the **Terms & Conditions** tab, enter default legal stipulations, warranty policies, and payment terms:

   ![Quotation template Terms and Conditions tab showing template-specific terms editor](../media/133.png)

---

### Task 3: Attach PDF Quote Builder Headers and Footers

CURQ's PDF Quote Builder dynamically inserts polished cover pages, team introductions, and contract terms around your quotation PDF:

1. On the template form, click the **Quote Builder** tab:
2. Use **Upload** or **Add** to attach header and footer documents:
   * **Header**: Attach high-resolution PDF cover sheets, marketing portfolios, or executive letters.
   * **Footer**: Attach legal stipulations, SLA specifications, or return policy terms.

   ![Quote Builder tab showing attached header and footer PDF documents](../media/132.png)

3. **Managing Global Headers & Footers**:
   * Navigate to **Sales > Configuration > Headers/Footers**:

      ![Access headers footers menu](../media/006.png)

   * Review uploaded PDF documents in Kanban view:

      ![Headers and Footers Kanban view showing document types and linked templates](../media/066.png)

   * Open a document record *(e.g., `Header`)* to assign quotation templates, download content, or click **Configure dynamic fields**:

      ![Quotation document form view showing Header document and assigned quotation templates](../media/065.png)

   * Switch to List view and use drag handles to reorder execution priority:

      ![Reorder headers footers list](../media/138.png)

4. Save the template.

---

### Task 4: Apply a Template to a Quotation

1. Open **Sales > Orders > Quotations** and click **+ New**.
2. Select your customer.
3. In the **Quotation Template** dropdown, select your configured template *(e.g., `Standard Equipment Package`)*.
4. CURQ automatically:
   * Populates all predefined order lines and optional accessories.
   * Calculates the expiration deadline based on the template's day duration.

   ![Quotation form with applied template showing pre-populated order lines, sections, and expiration date](../media/114.png)

5. Under the quotation's **Quote Builder** tab, you can inspect active headers and footers or customize dynamic PDF form values:

   ![Quotation form showing Quote Builder tab with active headers, footers, and customizable dynamic fields](../media/125.png)

---

### Edge Cases & Recovery Steps

* **Modifying a Template Does Not Alter Existing Quotes**: Adjusting a quotation template only influences future quotes created from it. Any previously generated quotes maintain their original lines and terms.
* **Overriding Lines on an Individual Quote**: Sales representatives can freely add, remove, or discount individual lines on a quote without altering the master template.

---

### Related Documentation
* [How-To: Create and Manage Quotations](./01-create-and-send-quotations.md)
* [How-To: Send Quotations to Customers](./01-create-and-send-quotations.md)
* [Reference: Quotation and Sales Order Field Definitions](../reference/01-quotation-and-sales-order-field-definitions.md)
