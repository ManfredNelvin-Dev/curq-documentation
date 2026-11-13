# eCommerce Shop and Checkout Settings

This document details the configuration parameters, checkout process options, payment gateway fields, product merchandising rules, and automated invoicing specifications for CURQ 18 eCommerce.

---

## 1. Shop: Payment Settings

The payment configuration block manages online payment gateways, payment methods, and transaction processing rules:

| Field Name | Description |
| :--- | :--- |
| **Activate Payments** | Activates and configures payment provider integrations supporting credit/debit cards, digital wallets *(Google Pay, Apple Pay)*, and direct wire transfers via the centralized Payment Provider registry. |

### 1.1 Payment Provider Form Field Specifications

> **Caution (Production Payment Gateway Safeguard):** Leaving a payment provider in **Test Mode** on a live public website allows shoppers to complete checkouts and confirm orders in Sales and Inventory without real financial transactions being captured or settled. Conversely, switching to **Enabled** without verifying live API keys and webhook secrets causes checkout failures and lost revenue. Always execute a live end-to-end small test transaction prior to launching campaigns.

Opening any gateway *(such as Wire Transfer, Stripe, or PayPal)* in the payment provider manager exposes the following configuration fields:

| Field Name | Description |
| :--- | :--- |
| **State** | Controls provider availability (`Disabled`, `Enabled`, or `Test Mode`). `Test Mode` processes transactions against sandbox environments without real charges; `Enabled` processes live payments; `Disabled` hides the gateway from checkout. |
| **Website** | Restricts provider availability to a specific website domain or leaves it available across all websites. |
| **Company** | Designates the multi-company operating entity associated with collected funds and accounting journals. |
| **Payment Journal** | Specifies the bank or cash accounting journal where customer payment transactions and reconciliation entries are booked. |
| **Supported Payment Methods** | Displays logos and activates specific payment instruments handled by the provider *(Credit Cards, Wallets, SEPA, etc.)*. |
| **Maximum Amount** | Sets a currency threshold *(e.g., `5,000.00`)* above which the gateway option is hidden from checkout. |
| **Countries** | Geographically restricts provider availability based on the customer billing country. |

---

## 2. Shop: Checkout Process Settings

Controls shopper purchasing journeys, registration requirements, instant checkout options, and internal sales order assignments:

| Field Name | Description |
| :--- | :--- |
| **Add to Cart** | Dictates client redirection when clicking Add to Cart (*Stay on Product Page*, *Go to cart*, or *Let the user decide (dialog)*). Choosing the dialog option presents an interactive modal allowing the buyer to continue shopping or proceed immediately to checkout. |
| **Sign in/up at checkout** | Regulates user authentication during checkout (*Optional*, *Disabled (buy as guest)*, or *Mandatory (no guest checkout)*). **Optional** permits guest checkout with an invitation to create an account on the confirmation page; **Mandatory** requires login or account creation before entering payment. |
| **Buy Now** | Injects an instant checkout button on product pages that bypasses the shopping cart and sends the buyer directly to checkout delivery and payment. |
| **Extra Step During Checkout** | Injects a customizable form page (`/shop/extra_info`) between the delivery method and payment steps to capture PO numbers, delivery instructions, or custom survey data. |
| **Assignment** | Automatically assigns online confirmed sales orders to a designated internal commercial **Sales Team** *(e.g., `Website`)* and **Salesperson** for fulfillment and commission tracking. |
| **Re-order From Portal** | Displays a **Re-order** button in the customer portal order history (`/my/orders`), allowing authenticated clients to duplicate past orders into an active shopping cart. |

> For step-by-step procedures on managing checkout workflows and processing online sales, see [**Manage Online Orders and Abandoned Carts**](../task-guides/07-manage-online-orders-and-abandoned-carts.md).

---

## 3. Shop: Products and Merchandising Settings

Governs pricing presentation, discounts, product variants, inventory notices, and catalog restrictions:

| Field Name | Description |
| :--- | :--- |
| **Display Product Prices** | Dictates public catalog price presentation (*Tax Excluded* or *Tax Included*). **Tax Excluded** is standard for B2B commercial portals; **Tax Included** complies with consumer B2C retail regulations. |
| **Pricelists** | Activates multi-currency pricing, customer-specific contracts, and volume discount tiers. Linked to [**Pricelists Specifications**](../../Sales/settings-and-fields/02-pricing-pricelists-and-discount-specifications.md). |
| **Comparison Price** | Displays a strikethrough original price next to discounted sales prices *(e.g., ~~$ 100.00~~ $ 79.00)* to highlight promotional savings. |
| **Product Reference Price** | Computes and displays unit pricing per standard unit of measure *(e.g., `$ 12.50 / kg`)* alongside total retail prices. |
| **Product Variants** | Activates multi-attribute product matrices *(size, color, material)* on frontend product pages. Linked to [**Configure Products and Variants**](../../Sales/task-guides/06-configure-products-and-variants.md) and [**Product Field Definitions**](./05-website-page-product-and-reporting-field-definitions.md). |
| **Discounts, Loyalty & Gift Card** | Activates coupon codes, gift card redemption, loyalty point tracking, and eWallet balances on shopping cart lines. |
| **Wishlists** | Enables authenticated portal customers to bookmark favorite items for future purchasing. |
| **Product Comparison Tool** | Enables a floating comparison tray where shoppers can evaluate specifications of up to 4 items side-by-side. |
| **Inventory Defaults** | Dictates inventory behavior when stock is depleted (*Continue Selling* or *Show Available Qty* threshold alerts). Controls whether out-of-stock items allow backorders and defines threshold alerts for limited inventory. |
| **Prevent Sale of Zero Priced Product** | Replaces the Add to Cart button with a Contact Us inquiry link *(default: `/contactus`)* whenever a catalog item has a zero sales price. |

---

## 4. Invoicing Settings

Dictates customer billing triggers, automated invoice generation upon payment settlement, and email dispatch templates:

| Field Name | Description |
| :--- | :--- |
| **Invoicing Policy** | Baseline billing rule applied to newly created catalog items (*Invoice what is ordered* or *Invoice what is delivered*). **Invoice what is ordered** allows instant billing upon checkout; **Invoice what is delivered** restricts invoice posting until warehouse fulfillment validation. |
| **Automatic Invoice** | Automatically creates, validates, and marks customer invoices as paid as soon as online payment gateways confirm settlement. Visible only when Invoicing Policy is set to **Invoice what is ordered**. |
| **Invoice Email Template** | Transactional email template *(default: `Invoice: Sending`)* dispatched to the customer upon payment settlement, containing the dynamic invoice PDF attachment. |

### 4.1 Automated Invoicing Technical Specifications

* **Automatic Invoice Trigger**: Fires synchronously upon receipt of a successful payment gateway callback notification.
* **Accounting State**: The customer invoice is created directly in `Posted` status without manual approval.
* **Payment Reconciliation**: The payment transaction record is automatically matched and reconciled against the generated invoice using the payment provider's designated bank journal.
* **Customer Portal Availability**: The resulting PDF invoice is immediately made available under `/my/invoices`.

### 4.2 Invoice Email Template Parameters

Opening the template editor via the external link on **Invoice Email Template** exposes the following parameters:

| Field Name | Description |
| :--- | :--- |
| **Name** | Administrative label for the notification template *(default: `Invoice: Sending`)*. |
| **Applies to** | Underlying business document providing dynamic variables (`Journal Entry` / Customer Invoices). |
| **Subject** | Dynamic text template rendered as the customer email subject line *(e.g., `{{ company.name }} Invoice (Ref {{ invoice.name or 'n/a' }})`)*. |
| **Report to be Generated** | Automated QWeb PDF document rendered and attached to the outgoing notification (`Invoices`). |

---

## 5. Abandoned Cart Recovery Specifications

| Field Name | Description |
| :--- | :--- |
| **Send after** | Inactivity threshold duration *(default: `10:00` Hours)* after which CURQ flags shopping carts as abandoned and schedules recovery emails. |
| **Email Template** | Transactional template (`Ecommerce: Cart Recovery`) containing an automated recovery link that reconstructs the shopper's cart items upon click. |

### 5.1 Cart Recovery System Rules

* **Contact Capture Requirement**: Carts must be linked to a signed-in portal customer or have an email address captured during the checkout address step. Anonymous sessions without captured email addresses cannot receive recovery emails.
* **Prior Order Suppression**: If the customer completes payment prior to timer expiration, the scheduled email is automatically cancelled.
* **Manual Outreach Suppression**: If back-office staff manually dispatches a recovery email from **eCommerce** > **Orders** > **Abandoned Carts**, the automated background trigger is suppressed to prevent duplicate customer contact.
* **Payment Error Isolation**: Transactions interrupted by payment gateway errors are held for manual review rather than triggering automated sales recovery.

> For procedural instructions on monitoring carts and dispatching manual recovery campaigns, see [**Manage Online Orders and Abandoned Carts**](../task-guides/07-manage-online-orders-and-abandoned-carts.md).

---

## Related Documentation

* [Manage Online Orders and Abandoned Carts](../task-guides/07-manage-online-orders-and-abandoned-carts.md)
* [Configure Product Attributes, Ribbons, and Categories](../task-guides/08-configure-product-attributes-ribbons-and-categories.md)
* [Configure Delivery Methods and Shipping Zones](../task-guides/11-configure-delivery-methods-and-shipping-zones.md)
* [Understanding eCommerce Checkout and Customer Portals](../core-concepts/02-understanding-ecommerce-checkout-and-customer-portals.md)
