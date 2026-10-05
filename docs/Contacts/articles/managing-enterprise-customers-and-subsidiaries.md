# Managing Corporate Clients and Branch Addresses

See how a commercial distributor organizes large corporate accounts, routes shipping and billing addresses automatically, protects bank transfers, and cleans duplicate records in CURQ 18.

---

### 1. The Real-World Challenge

When selling to large companies with multiple locations, businesses face three common problems:

1. **Invoices Sent to Warehouses**: When a client has separate offices and factories, bills often get mailed to the factory dock, and delivery slips get sent to accounting. This delays payments and causes delivery mix-ups.
2. **Payment Fraud on Bank Accounts**: Changing bank account numbers without verification risks sending money to fraudulent accounts.
3. **Duplicate Contact Records**: Sales staff often create new contact cards for existing clients, scattering order notes and invoices across multiple records.

This guide shows how **Apex Industrial Supply** sets up a multi-site client, **Vanguard Manufacturing Group**, using CURQ 18 Contacts to solve these issues.

---

### 2. The Client Setup

* **Main Company**: Vanguard Manufacturing Group (Headquarters in Chicago).
* **Delivery Site**: Dallas Assembly Plant (where products get shipped).
* **Billing Site**: New York Accounts Payable (where invoices get sent).
* **Key People**:
  * **Dr. Robert Vance**: VP of Procurement (approves purchases).
  * **Ms. Elena Torres**: Warehouse Manager (receives goods in Dallas).

---

### 3. Step 1: Create the Main Company Record

1. Go to **Contacts** and click **New**.
2. Select **Company** at the top.
3. Type the company name: `Vanguard Manufacturing Group`.
4. Enter the headquarters address in Chicago, the main phone number, and the company website.
5. In the **Tax ID** field, enter the business tax number.
6. Under the **Sales & Purchase** tab, assign the dedicated **Salesperson** and select **Payment Terms** (such as `30 Days`).
7. Click **Save** (cloud icon).

---

### 4. Step 2: Add Separate Delivery and Invoice Addresses

To send shipments and bills to the right places automatically:

1. On the Vanguard company card, open the **Contacts & Addresses** tab and click **Add**.
2. Choose **Delivery Address**:
   * Name: `Vanguard Dallas Assembly Plant`.
   * Address: Enter the Dallas warehouse address.
   * Internal Notes: Add delivery dock hours and instructions.
   * Click **Save & Close**.
3. Click **Add** again and choose **Invoice Address**:
   * Name: `Vanguard Accounts Payable`.
   * Address: Enter the New York billing address.
   * Email: Enter the direct billing email for invoices.
   * Click **Save & Close**.

CURQ now knows where to send goods and where to send bills. When creating a sales order, CURQ automatically sets the delivery address to Dallas and the invoice address to New York.

---

### 5. Step 3: Add Individual Employees

Link company employees directly under the parent organization:

1. In the **Contacts & Addresses** tab, click **Add**.
2. Choose **Contact** (for an individual person).
3. Enter the employee details:
   * **Name**: `Robert Vance`.
   * **Title**: `Dr.`
   * **Job Position**: `VP of Procurement`.
   * **Email**: Enter their direct work email.
   * **Phone**: Enter their direct phone number.
4. Notice that CURQ automatically copies the Chicago company address for the employee.
5. Click **Save & Close** (or **Save & New** to add `Elena Torres` in Dallas).

---

### 6. Step 4: Add and Verify the Bank Account

When setting up bank details for refunds or vendor payments:

1. Open the **Invoicing** tab on the company card.
2. In the **Bank Accounts** table, click **Add a line**.
3. Enter the **Account Number**, select the **Bank**, and enter the **Account Holder Name**.
4. Click **Save**.
5. The account starts with an **Untrusted** badge.
6. After an accounting manager calls the client or checks the bank letter, they turn on the **Send Money** toggle. The badge changes to **Trusted**.
7. This prevents outgoing wire payments from being sent to fake or altered accounts.

---

### 7. Step 5: Merge Duplicate Contact Cards

If a salesperson accidentally creates a duplicate card like `Vanguard Dallas Plant`:

1. Open the main **Contacts** list view.
2. Search for `Vanguard`.
3. Check the boxes next to both records.
4. Click the **Actions** gear icon at the top and select **Merge**.
5. Pick `Vanguard Manufacturing Group` as the destination contact.
6. Click **Merge Contacts**.
7. CURQ moves all past sales orders, invoices, deliveries, and chatter notes into the main contact card and deletes the duplicate.

---

### 8. Practical Results

* **No Billing Delays**: Invoices go straight to New York accounting, so bills get paid on time.
* **Accurate Deliveries**: Trucks deliver to the Dallas receiving dock with clear delivery notes.
* **Safe Payments**: Bank account verification prevents wire transfer fraud.
* **One Single Record**: Smart buttons on the company card show total sales, open invoices, and past meetings in one place.
