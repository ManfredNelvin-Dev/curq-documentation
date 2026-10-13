# eCommerce Management

Manage online sales orders, recover abandoned shopping carts, and configure website catalog rules in CURQ 18.

---

> [!NOTE]
> Installing the **eCommerce** app automatically creates the **Shop** navigation menu (`/shop`) in your website header, along with the shopping cart, wishlist shortcuts, and product catalog pages. The top administrative **eCommerce** menu also becomes available for managing orders and catalog settings. If your database only uses the base website builder without eCommerce, configure standard pages via [Page Management](./03-page-management.md).

---

### 1. Accessing eCommerce

In the top administrative bar, click **eCommerce** to open the menu dropdown:

![CURQ Website top control bar with eCommerce menu open highlighting Orders, Products, and Loyalty sections](images/website-ecommerce-dropdown-menu.png)

The menu organizes your online store into three functional areas:

* **Orders**: Track online checkouts, review unpaid orders, manage customer recovery for abandoned shopping carts, and browse registered online customers.
* **Products**: Configure master products, pricelists, eCommerce categories, variant attributes, combo choices, product tags, and promotional ribbons.
* **Loyalty**: Set up discount promotions, customer loyalty programs, gift cards, and eWallets.

---

### 2. Managing Online Orders & Recovery

#### Orders (`eCommerce > Orders > Orders`)

![Orders manager in list view showing default Confirmed and From Website search filters, view switcher icons, and order rows](images/website-ecommerce-orders-list-view.png)

* **Automatic Default Filters**:
  * **Confirmed**: Displays only sales orders in confirmed status (**Sales Order**).
  * **From Website**: Filters out backend manual quotations, displaying only sales originating from your website (`/shop`).

* **Key Columns Displayed**:

| Column | Description |
| --- | --- |
| **Number** | Unique sales order reference number *(e.g., `S00094`)*. |
| **Order Date** | Date and time the customer completed the website checkout. |
| **Customer** | The billing contact or company account name. |
| **Website** | Website domain where the checkout took place *(in multi-website databases)*. |
| **Salesperson** | Assigned sales representative or website team member. |
| **Activities** | Scheduled follow-up tasks, calls, or reminders. |
| **Company** | Multi-company legal entity managing the transaction. |
| **Total** | Final transaction total including items, shipping, and taxes. |
| **Invoice Status** | Customer billing status: **To Invoice** or **Nothing to Invoice**. |

* **View Switcher**: Use the view icons in the upper-right corner to toggle between **List**, **Kanban cards**, and **Activities calendar**.

* **All Sales Orders Filter**: To see orders across both physical and digital channels, remove the **From Website** filter chip in the search bar.
* **Order Processing Guides**: For step-by-step instructions on confirming orders, delivery validation, and invoice generation, see [Confirm Sales Order](../../Sales/manual/03-confirm-sales-order.md), [Invoicing Sales Order](../../Sales/manual/04-invoicing-sales-order.md), and [Analyze Sales Orders](../../Sales/manual/07-analyze-sales-orders.md).

#### Unpaid Orders (`eCommerce > Orders > Unpaid Orders`)

Clicking **Unpaid Orders** displays website checkout orders that reached the payment step with a quotation sent to the customer, but where the final payment was not confirmed:

![Unpaid Orders list view showing online orders in Quotation Sent status awaiting payment receipt](images/website-ecommerce-unpaid-orders-list.png)

* **Automatic Default Filter**: Automatically filters for website orders where the order status is **Quotation Sent**.
* **How an Order Enters Unpaid Orders**:
  * **Pending / Wire Transfer Payments**: When a customer checks out using offline payment providers *(such as Wire Transfer / SEPA / Custom payment methods)*, the payment transaction enters a pending state. CURQ automatically moves the quotation into **Quotation Sent** and emails the payment instructions to the customer.

![Unpaid order details form showing Quotation Sent status and chatter confirmation of selected wire transfer payment](images/website-ecommerce-unpaid-order-form-chatter.png)

  * **Failed / Interrupted Online Transactions**: If a shopper completes checkout and receives a quotation link or their payment gateway transaction is awaiting asynchronous authorization, the record remains in this view until settled.
* **Processing Unpaid Orders**:
  1. Once the customer completes the bank transfer or offline payment, open the order from this list.
  2. Click **Confirm** to convert the quotation into a confirmed sales order. The order automatically moves from **Unpaid Orders** to the confirmed **Orders** list.

![Unpaid order form with Confirm action button highlighted to authorize the sale upon payment receipt](images/website-ecommerce-unpaid-order-confirm-action.png)

#### Abandoned Carts (`eCommerce > Orders > Abandoned Carts`)

Clicking **Abandoned Carts** displays shopping sessions where visitors added items to their shopping cart and provided their contact details, but left before completing checkout.

![Abandoned Carts list view filtered by Recovery Email to Send](images/website-ecommerce-abandoned-carts-list.png)

* **How CURQ Qualifies an Abandoned Cart**:
  An online shopping session is automatically classified as an abandoned cart when all of the following conditions are met:
  * **Originated on Website**: The order was created through your online store (`/shop`), not manually entered by backend sales staff.
  * **Quotation State**: The order remains in unconfirmed quotation status (**Quotation**).
  * **Contains Products**: The shopping cart contains at least one product line.
  * **Identified Customer**: The shopper logged into their customer portal account or entered their contact email on the checkout address step. Completely anonymous visitors who never entered an email cannot be targeted with recovery emails.
  * **Inactivity Time Window**: The shopper has been inactive for longer than the configured abandoned cart delay *(set to 1 hour by default)*. Active browsing sessions within this window are not considered abandoned.

* **Automatic Default Filter**:
  * **Recovery Email to Send**: Automatically filters the list to show only abandoned carts where a recovery email has not yet been dispatched.

* **Recovering the Cart**:
  1. In the top bar, click **eCommerce** > **Orders** > **Abandoned Carts**.
  2. Review the list showing customer names, creation dates, and cart totals.
  3. Click an abandoned order row to inspect the cart items.
  4. On the order form, click the primary **Send a Recovery Email** button.
  5. CURQ sends a personalized recovery email containing a direct link that restores the visitor's shopping cart so they can complete checkout with a single click. Once sent, the order receives the **Recovery Email Sent** badge and clears from the default view to prevent duplicate messages.

#### Order Status Comparison

The following table clarifies how CURQ distinguishes between abandoned carts, unpaid orders, and confirmed sales orders:

| Order Type | Order Status | Customer Activity | Next Required Action |
| --- | --- | --- | --- |
| **Abandoned Carts** | Quotation | Visitor added items to the cart and entered details, but left before submitting checkout. | Click **Send a Recovery Email** to invite them back to their cart. |
| **Unpaid Orders** | Quotation Sent | Customer submitted checkout, but payment is pending *(e.g., awaiting wire transfer)*. | Verify bank receipt and click **Confirm** to authorize the sale. |
| **Confirmed Orders** | Sales Order | Customer paid via payment gateway, or staff manually confirmed the quotation. | Fulfill delivery lines and generate customer invoice. |

#### Customers (`eCommerce > Orders > Customers`)

Clicking **Customers** opens your address book of customer contacts and buyer accounts:

![Customers directory in Kanban card view displaying online shopper accounts](images/website-ecommerce-customers-kanban-view.png)

* **Default View**: Opens directly in **Kanban card view** by default, with an option to toggle to **List view** using the switcher in the upper-right corner.
* **Card Details**: Each card displays the contact avatar, display name, job title, company link, city, and country.
* **Creating a Customer**: Clicking the **New** button opens a blank contact form with **Company** selected by default. Follow the step-by-step creation guide in [Create and Manage Contacts](../../Contacts/manual/01-create-contact.md).
* **Customer Profile & Metrics**: Clicking any card opens the customer profile form:
  * **Sales Smart Button**: Displays the total count of quotations and sales orders, opening their full order history.
  * **Invoiced Smart Button**: Displays the cumulative billing amount for the customer.
  * **Contacts & Addresses Tab**: Displays and manages secondary shipping locations, invoice addresses, and company contact persons.

![Customer contact form highlighting Sales and Invoiced smart buttons tracking customer purchase history](images/website-ecommerce-customer-form-smart-buttons.png)

* **Search & Filters**: Search by name, email, or company, or use custom filters and grouping as described in [Search, Filter, and Group Contacts](../../Contacts/manual/02-search-filter-and-group-contacts.md).

---

### 3. Website Catalog Configuration

While general product settings (such as cost, invoicing policies, and warehouse routes) are managed in standard sales catalogs, website merchandising rules are configured under **eCommerce** > **Products**.

* **Master Catalog & Inventory**: For setting up product templates, variants, and stock tracking, see [View All Products](../../Sales/manual/06-view-all-products.md).
* **Frontend Pages & SEO**: For product page URLs, SEO metadata, and frontend layout editing, see [Products & Courses Management](./06-products-and-courses.md).

#### Products & Website Visibility

In product list views, the **Is Published** column is read-only and displays whether an item is active online without permitting inline edits.

![Products catalog in Kanban card view showing default Published filter](images/website-ecommerce-products-kanban-view.png)

You can publish or unpublish a product using either of two methods:

* **From the Product Form**:
  1. In the top administrative bar, click **eCommerce** > **Products** > **Products**.
     * *Catalog Search Tip*: This view filters for **Published** products by default. If your product is currently unpublished, remove the **Published** filter chip from the search bar to locate it.
  2. Click on the product row to open its form view.
  3. Switch to the **Sales** tab.
  4. Under the **Ecommerce Shop** section:
     * **Is Published**: Check this box to make the product visible to shoppers in `/shop`. Uncheck it to hide the product from the public catalog.
     * **Website**: Leave blank to publish across all websites, or select a specific website domain in multi-website databases.

![Product form Sales tab highlighting the Is Published checkbox under Ecommerce Shop](images/website-ecommerce-product-form-is-published.png)

* **From Product Pages Kanban View**:
  1. In the top administrative bar, click **Site** > **Products**.
  2. Click the **Kanban view** switcher icon in the upper-right corner.
  3. On the target product card, click the interactive **Published / Not Published** toggle switch in the footer to change its status instantly without opening the product form.

![Product Pages Kanban view highlighting the interactive footer publication toggle](images/website-ecommerce-product-pages-kanban-toggle.png)

#### Product Merchandising & Media

When editing a product (**eCommerce** > **Products** > **Products**), configure promotional presentation and upselling rules across the **General Information** and **Sales** tabs:

![Product form Sales tab overview showing merchandising configuration options](images/website-ecommerce-product-form-sales-tab.png)

* **Compare to Price** (`General Information` tab): Set an original baseline price to display a strikethrough comparison *(e.g., ~~$120~~ $99)*, visually highlighting promotional discounts to shoppers.
* **Alternative Products** (`Sales` tab > **Upsell & Cross-sell**): Select related products to display as recommendations at the bottom of the product detail page under *"Alternative Products"*.
* **Accessory Products** (`Sales` tab > **Upsell & Cross-sell**): Select add-on items suggested in the shopping cart pop-up drawer when customers add this item to their cart.

![Product form highlighting Upsell and Cross-sell fields for Optional, Accessory, and Alternative products](images/website-ecommerce-product-form-upsell-cross-sell.png)

When shoppers add items with configured optional or accessory products to their cart, CURQ displays a configuration modal showcasing available add-ons directly before checkout:

![Configure your product cart modal showing available optional add-on products](images/website-ecommerce-cart-configure-options-modal.png)

* **eCommerce Media** (`Sales` tab > **eCommerce Media**): Click **Add Media** to upload additional high-resolution images or embed video links for the product page image gallery.

![Product form highlighting the Add Media button under eCommerce Media](images/website-ecommerce-product-form-media.png)

* **eCommerce Description** (`Sales` tab > **Ecommerce Description**): Enter formatted rich-text marketing copy to showcase product specifications and features directly on the `/shop` product page.

![Product form highlighting the rich-text eCommerce Description field](images/website-ecommerce-product-form-description.png)

#### Pricelists & Web Pricing Rules

General pricelist creation, pricing formulas, and wholesale tiers are managed in Sales; for complete setup instructions, see [Configuring Pricelists and Pricing Rules](../../Sales/procedures/04-pricelists-and-pricing-rules.md).

Under **eCommerce** > **Products** > **Pricelists**, view and configure website-specific pricing rules:

![Pricelists list view showing pricelist names, country groups, selectable flags, and assigned websites](images/website-ecommerce-pricelists-list.png)

Open any pricelist to configure options under the **Price Rules** and **Ecommerce** tabs:

* **Price Rules Tab**: Define percentage discounts, formula margins, or fixed prices for specific products or entire catalogs:

![Pricelist form Price Rules tab showing percentage discount rules applied to products](images/website-ecommerce-pricelist-form-price-rules.png)

* **Ecommerce Tab**:
  * **Website**: Restrict the pricelist to a specific website domain, or leave blank to make it available across all websites.
  * **Selectable**: Enable this option to let online shoppers manually choose this pricelist from the website currency and pricing dropdown menu.
  * **Code / E-commerce Promotional Code**: Enter a promotional code *(e.g., `EU`)* that automatically activates this pricelist when entered during online checkout or visited via promotional link.

![Pricelist form Ecommerce tab showing Website domain restriction, Selectable toggle, and promotional code](images/website-ecommerce-pricelist-form-ecommerce-tab.png)

##### Shopper Experience with Selectable Pricelists and Promo Codes

* **Selectable Pricelist Dropdown**: When **Selectable** is enabled, shoppers can switch pricing and currencies from the dropdown located on the catalog page or individual product pages:

![Store catalog page on website highlighting the selectable pricelist dropdown menu](images/website-ecommerce-shop-selectable-pricelist-dropdown.png)

![Product detail page on website highlighting the selectable pricelist dropdown menu](images/website-ecommerce-product-selectable-pricelist-dropdown.png)

* **Applying Promotional Codes at Checkout**:
  * Standard catalog orders display regular base pricing:

![Website checkout order overview showing standard catalog pricing before promotional code](images/website-ecommerce-cart-standard-pricing.png)

  * When shoppers enter the promotional code into the **Gift card or discount code** field and click **Apply**, CURQ recalculates the order lines using the discount rules defined on the pricelist:

![Website checkout order overview with promotional code EU applied showing discounted order totals and loyalty reward](images/website-ecommerce-cart-promotional-code-applied.png)

#### eCommerce Categories

Organize how items are grouped and navigated in your online store (`/shop`):

1. In the top administrative bar, click **eCommerce** > **Products** > **eCommerce Categories**.

![eCommerce Categories list view showing category hierarchy with New button highlighted](images/website-ecommerce-categories-list.png)

2. Click **New** to create a category, or select an existing one to edit.
3. Configure category settings:
   * **Category Image**: Upload an image or icon representing the category.
   * **Name**: Enter the category title displayed in store navigation *(e.g., `Desks`)*.
   * **Parent Category**: Select a parent category to create nested hierarchical menus and breadcrumbs.
   * **Website**: Restrict the category to a specific website, or leave blank to display across all websites.
   * **Description**: Enter promotional or informational text displayed on the category browsing page.

![eCommerce Category form view showing name, parent category, website scoping, and category image](images/website-ecommerce-category-form.png)

4. Click **Save**.
5. **Assigning to Products**: Open any product (**eCommerce** > **Products** > **Products**), switch to the **Sales** tab, and select one or more categories in the **Categories** field under **Ecommerce Shop**. Items immediately appear in those category navigation aisles on your website (`/shop`).

![Product form Sales tab highlighting the Categories dropdown selection under Ecommerce Shop](images/website-ecommerce-product-form-assign-categories.png)

#### Attributes, Combo Choices & Tags

General variant attributes, combo choices, and product tags are managed in Sales; for complete setup instructions, see [Configuring Product Attributes and Variants](../../Sales/procedures/02-product-variants.md), [Combo Choices Setup](../../Sales/procedures/11-combo-choices-setup.md), and [Product Tags Setup](../../Sales/procedures/13-product-tags-setup.md).

Under **eCommerce** > **Products**, configure variant options, bundling, and catalog tags with website-specific settings:

##### Attributes (`eCommerce > Products > Attributes`)

Configure product attributes and their visibility in the online store:

![Attributes list view showing attribute names, eCommerce categories, display types, and filter visibility](images/website-ecommerce-attributes-list.png)

Open an attribute to configure its website controls:

* **eCommerce Filter**:
  * Set to **Hidden** to keep the attribute selectable on individual product pages while hiding it from the `/shop` sidebar filter list:

![Attribute form for Color showing eCommerce Filter set to Hidden](images/website-ecommerce-attribute-form-filter-hidden.png)

  * Set to **Visible** *(default)* to include the attribute as an interactive filtering facet in the `/shop` sidebar:

![Attribute form for Color showing eCommerce Filter set to Visible and assigned eCommerce Category](images/website-ecommerce-attribute-form-filter-visible.png)

* **eCommerce Category**: Assign an attribute category *(such as `General Features` or `Dimensions`)* to group related attributes into structured sections on the product comparison page (`/shop/compare`) and the frontend specifications table.

##### Shopper Experience with Attribute Filters

When attributes are set to **Visible**, shoppers can filter catalog products directly from the left sidebar on `/shop`:

![Store catalog page on website showing the left sidebar attribute filters with Color swatches visible](images/website-ecommerce-shop-attribute-filters-sidebar.png)

Selecting an attribute facet immediately refines the displayed product catalog:

![Store catalog page on website showing active Color filter and filtered product results](images/website-ecommerce-shop-attribute-filter-active.png)

##### Combo Choices (`eCommerce > Products > Combo Choices`)

Group complementary products into combo choices or packaged sets for promotional website ordering:

![Combo Choices list view showing configured combo options and item counts](images/website-ecommerce-combo-choices-list.png)

Click **New** or open an existing combo choice to configure the bundled product lines and extra prices:

![Combo Choice form view for Desks Combo showing bundled product lines](images/website-ecommerce-combo-choice-form.png)

When ordering a combo product online, shoppers can customize each bundle selection in a dedicated modal:

![Frontend combo product selection modal showing configurable item choices](images/website-ecommerce-combo-modal-selection.png)

##### Product Tags (`eCommerce > Products > Product Tags`)

Create searchable tags to classify catalog items and showcase badge highlights on website product cards:

![Product Tags list view showing tag names, template counts, and variant assignments](images/website-ecommerce-product-tags-list.png)

Open a tag to configure its website display options:

* **Visible on eCommerce**: Check this box to display the tag badge on website product cards and product pages. Uncheck to keep the tag strictly internal.
* **Color / Image**: Choose a badge color or upload a custom image/icon badge *(uploading an image overrides the badge color on the website)*.

![Product Tag form view for Phone highlighting Visible on eCommerce checkbox, Color picker, and custom Image upload](images/website-ecommerce-product-tag-form.png)

When enabled, tag badges display directly on the website product page:

![Product detail page on website highlighting the Phone tag badge](images/website-ecommerce-product-page-tag-badge.png)

Online shoppers can also use tags as filtering facets in the store sidebar:

![Store catalog page on website highlighting the sidebar Tags filter with Phone selected](images/website-ecommerce-shop-tags-sidebar-filter.png)

#### Product Ribbons

Highlight specific items on the website with visual badge ribbons *(such as "Sale", "New!", "Sold out", or "Out of stock")*:

##### Defining Ribbons

1. In the top administrative bar, click **eCommerce** > **Products** > **Product Ribbons**.

![Product Ribbons list view showing existing ribbon badges, positions, text colors, and background colors](images/website-ecommerce-product-ribbons-list.png)

2. Click **New** to define a ribbon badge:
   * **Ribbon Name**: Enter the text displayed directly on the badge *(e.g., `Sale`, `New!`, `Featured`)*.
   * **Position**: Choose **Left** or **Right** to control badge placement on the product card.
   * **Background Color**: Select the badge background color using the color picker *(defaults to black `#000000`)*.
   * **Text Color**: Select the text font color using the color picker *(defaults to white `#FFFFFF`)*.

![Product Ribbon form view for New! showing Left position, white text color, and blue background color](images/website-ecommerce-product-ribbon-form.png)

3. Click **Save**.

##### Applying a Ribbon to a Product

Ribbons cannot be assigned inline from backend list views (the product list view is read-only for ribbons, and the backend form view hides the field behind Developer Mode). 

To apply a ribbon to a product as a standard user:

1. Open the website store catalog by navigating to `/shop`.
2. Click **Edit** in the top navigation bar to open the website builder.
3. Click on the product card inside the catalog grid (`#products_grid`).
4. In the right-hand **Customize** sidebar under product options, click the **Ribbon** dropdown.

![Website editor on shop catalog grid highlighting product card selected and Ribbon dropdown option](images/website-ecommerce-editor-select-product-ribbon.png)

5. Select the desired ribbon *(such as `Sale`, `New!`, `Sold out`, or `Out of stock`)*, or choose **None** to remove an assigned ribbon.
   * You can also click the **`+`** (create) button next to the dropdown to define and style a new ribbon directly from the sidebar.

![Website editor sidebar showing Ribbon option set to New! with edit and create buttons](images/website-ecommerce-editor-ribbon-applied.png)

6. Click **Save** in the top bar. The ribbon badge immediately displays on the product card:

![Store catalog page on website showing product card with New! ribbon badge displayed](images/website-ecommerce-shop-product-card-ribbon-badge.png)

*(Note: In the backend, the `Ribbon` field on the product template form view is restricted to Developer Mode. When Developer Mode is active, the Ribbon field appears under the **Sales** tab > **Ecommerce Shop** section).*

![Product form in Developer Mode highlighting the Ribbon field under Ecommerce Shop](images/website-ecommerce-product-form-developer-mode-ribbon.png)

---

### 4. Loyalty, Discounts & Gift Cards

General promotional campaigns, loyalty programs, and gift card generation are managed in Sales; for complete setup instructions, see [Configuring Discount and Loyalty Programs](../../Sales/procedures/06-discount-and-loyalty-programs.md).

#### Enabling or Disabling Programs for the Website

All promotional, coupon, and gift card programs share the same master records between Sales and eCommerce. To control whether a program is active on your website:

1. In the top administrative bar, navigate to the target menu under **eCommerce** > **Loyalty**:
   * Click **Discount & Loyalty** for promotional codes, coupons, loyalty point schemes, or Buy X Get Y programs.
   * Click **Gift cards & eWallet** for digital gift cards and prepaid electronic wallets.

![Discount and Loyalty programs list view showing program names, types, and channel availability](images/website-ecommerce-loyalty-programs-list.png)

2. Click on the target program *(e.g., `Code for 10% on orders` or `Gift Card`)* to open its form view.
3. Locate the **Available On** section on the right side of the form:
   * **To Enable for Website**:
     1. Check the **Website** checkbox. This immediately activates the promotion or gift card program for online shoppers during `/shop` checkout.
     2. *(Optional Website Restriction)*: In the **Website** dropdown that appears directly below the checkbox, leave it blank (*All websites*) to allow redemption across all websites, or select a specific website domain in multi-website databases.
   * **To Disable for Website**:
     1. Uncheck the **Website** checkbox.
     2. The program is immediately deactivated for the website. Shoppers will no longer be able to apply promo codes, earn points, or redeem gift cards/eWallets during checkout.

![Discount and Loyalty program form view highlighting Available On Website checkbox and website dropdown](images/website-ecommerce-loyalty-program-form-website-toggle.png)

4. Click the manual save icon or navigate away to save changes.

#### Program Types and Website Capabilities

* **Discount & Loyalty**:
  * **Share Promo Code Link**: In the **Discount & Loyalty** list view, click the **Share** button *(share icon)* on any Discount Code row to copy a direct URL that automatically applies the promo code to the customer's online shopping cart. *(The Share button appears only in the list view for Discount Code programs and is not present on the form view)*.

![Discount and Loyalty list view highlighting the Share button on Discount Code rows](images/website-ecommerce-loyalty-share-button-highlight.png)

Clicking **Share** opens the **Share Discounts** dialog, providing the direct promotional link and target redirect route *(such as `/shop`)*:

![Share Discounts modal showing direct promotion URL and redirect destination](images/website-ecommerce-loyalty-share-discount-modal.png)

* **Gift cards & eWallet**:

![Gift cards and eWallet programs list view showing active programs](images/website-ecommerce-gift-cards-programs-list.png)

  * **Selling Gift Cards Online**: In the program form, ensure the item specified in the **Gift Card Products** field is published (**eCommerce** > **Products** > **Products** > **Sales** tab > check **Is Published**). When purchased online, CURQ automatically generates and emails the gift card code using the configured **Email template**.
  * **Online Checkout Redemption**: Ensure **Available On > Website** is checked so shoppers can enter their gift card code or pay using their eWallet balance directly in the website checkout interface.

![Gift Card program configuration form highlighting the Available On Website checkbox](images/website-ecommerce-gift-card-form-website-toggle.png)
