# Launching an Online Storefront and Customer Portal

See how My Company (San Francisco) configures a digital storefront on My Website, publishes office furniture products, activates wire transfer checkout, and provides self-service portal tracking for client Azure Interior in CURQ 18.

---

### 1. Summary of the Business Situation

Companies selling commercial office equipment face three common operational challenges:

1. **Manual Order Intake**: Sales representatives spend excessive time manually entering standard repeat orders sent by email or phone.
2. **Payment Tracking Delays**: Tracking bank transfers and linking receipts to sales quotations requires continuous communication across sales and accounting teams.
3. **Lack of Order Transparency for Clients**: Corporate clients calling customer service repeatedly to inquire about delivery status, tracking numbers, and invoice copies.

This walkthrough explains how **My Company (San Francisco)** implements a digital storefront on **My Website** for corporate client **Azure Interior** (represented by procurement buyer **Nicole Ford**), enabling online order placement, wire transfer checkout, and self-service document access.

---

### 2. The Customer Setup and Commercial Requirements

* **Seller Organization**: My Company (San Francisco).
* **Storefront Website**: My Website.
* **Customer Organization**: Azure Interior.
* **Procurement Contact**: Nicole Ford *(email: `nicole.ford75@example.com`)*.
* **Products Selected**:
  * `Conference Chair` *(listed at $33.00)*.
  * `Desk Combination` *(listed at $450.00)*.
  * `Acoustic Bloc Screens` *(listed at $295.00)*.
* **Shipping Method**: `Standard delivery` *(with `Pick up in store` available as an alternative)*.
* **Payment Provider**: `Wire Transfer`.
* **Account Policy**: Free sign up with access to document portal.

---

### 3. Step 1: Publish Products to the Online Storefront

To make furniture items visible to corporate buyers on the website:

1. Open the backend **Website** application and navigate to **eCommerce** > **Products**.
2. Open the product card for `Conference Chair`, `Desk Combination`, and `Acoustic Bloc Screens`.
3. Verify that the **Sales Price** and **Customer Taxes** are configured accurately.
4. In the top action bar or directly from the storefront editor, switch the publishing status toggle from red *(Unpublished)* to green *(**Published**)*.
5. The items appear immediately in the public catalog under `/shop`.

---

### 4. Step 2: Configure Shipping and Payment Methods

To support commercial delivery and bank payment processing:

1. Go to **Website** > **Configuration** > **Settings**.
2. Under **Shipping**, confirm that **Standard delivery** is activated and set to fixed delivery pricing.
3. Under the **Shop** payment section, open **Payment Providers** and verify that **Wire Transfer** is set to **Enabled**.
4. Confirm that the bank account instructions display the correct IBAN and payment communication reference format.
5. Click **Save** to apply the configuration.

---

### 5. Step 3: Activate Customer Portal Accounts

To allow corporate buyers to manage orders and invoices independently:

1. In **Website** > **Configuration** > **Settings**, scroll to the **Privacy** section.
2. Under **Customer Account**, select **Free sign up** to allow buyers to register directly, or **On invitation** to issue curated account invites.
3. Under **Ecommerce Access**, select **All users** or **Logged in users** depending on company catalog security policy.
4. Click **Save** in the top-left corner to enforce portal access rules.

---

### 6. Step 4: The Customer Purchasing Journey

With the storefront and account settings active, the procurement process proceeds smoothly:

1. `Nicole Ford` visits `My Website` at `/shop` and logs in with her `Azure Interior` account credentials.
2. She selects 10 units of `Conference Chair` and 2 units of `Desk Combination` and clicks **Add to Cart**.
3. In the shopping cart summary, she proceeds to **Checkout**.
4. In the address step, CURQ pre-populates the registered shipping address for `Azure Interior`.
5. Under shipping methods, she selects `Standard delivery`.
6. Under payment options, she selects `Wire Transfer` and clicks **Pay Now** to confirm the quotation.

---

### 7. Step 5: Self-Service Order Tracking in the Portal

Once the order is submitted, the customer can monitor fulfillment directly without phone calls:

1. CURQ automatically creates a sales quotation record in the backend assigned to the `Website` sales team.
2. `Nicole Ford` navigates to her portal profile at `/my/home` and opens **Sales Orders**.
3. In the customer portal, she can perform the following actions:
   * Review the exact line items, unit prices, and tax breakdown.
   * Download the official quotation or confirmed order PDF.
   * Access tracking details once the warehouse dispatches the order via `Standard delivery`.
   * Download the final customer invoice once payment is validated by accounting.

---

### 8. Business Benefits and Outcomes

* **Automated Order Processing**: Direct catalog checkout removes manual quotation entry errors for routine equipment orders.
* **Full Document Traceability**: Customers access quotations, delivery slips, and invoices independently without emailing account managers.
* **Unified Central Database**: Storefront transactions update backend sales, stock, and accounting records in real time.
