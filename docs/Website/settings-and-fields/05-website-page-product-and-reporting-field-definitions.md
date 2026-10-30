# Website Page, Product, and Reporting Field Definitions

This catalog documents data fields, manager column specifications, technical attributes, and reporting metrics across CURQ 18 Website, eCommerce, eLearning, and Live Chat.

---

## 1. Page Manager and Page Properties

### Page Manager Columns
In **Site** > **Pages** *(List View)*, the Page Manager organizes pages with the following attributes:

| Field Name | Description |
| :--- | :--- |
| **Page Title** | The public or internal display name of the webpage. Clicking a page opens it in live frontend preview. |
| **Page URL** | The relative URL path route *(e.g., `/contactus`, `/about-us`, `/services`)*. |
| **Indexed** | Indicates whether search engine crawlers are permitted to index and surface this page in public search results. |
| **Is In Main Menu** | Confirms whether an active link pointing to this page exists in the main header navigation menu. |
| **SEO Optimized** | Indicates whether custom SEO metadata *(Meta Title, Meta Description, keywords)* has been configured. |
| **Is Published** | Controls online visibility. Green indicates live and visible to visitors; grey/red indicates unpublished and restricted to administrators. |
| **Website** | In multi-website setups, identifies the website domain instance associated with the page *(empty if shared across all websites)*. |

### Page Properties Field Definitions
In **Site** > **This page** > **Properties**, the modal dialog configures underlying routing and visibility rules:

| Field Name | Description |
| :--- | :--- |
| **Page Title** | Human-readable title displayed in browser title bars, bookmarks, and search results. |
| **Page URL** | Route path of the page *(e.g., `/our-mission`)*. Modifying this updates internal links. |
| **Redirect Old URL** | Automatically generates an HTTP redirect when modifying an existing URL. Supports **301 Moved permanently** (preserves SEO link equity) and **302 Moved temporarily**. |
| **Dependencies** | Analyzes internal menus, buttons, and views referencing the old URL prior to modification. |
| **In Menu** | Controls whether this page appears automatically in the header navigation menu. |
| **Is Homepage** | Designates this page as the root landing page (`/`) for the active website. |
| **Published** | Switches between draft (internal) and published (public) status. |
| **Publishing Date** | Optional scheduled release timestamp when the page automatically transitions to published. |
| **Is a Template** | When enabled, converts this page into a reusable layout option selectable in **+ New** > **Page**. |

### Page Visibility and Access Security Options
The **Visibility** dropdown in Page Properties enforces access boundaries:

| Field Name | Description |
| :--- | :--- |
| **Public** | Open to all internet visitors without restriction. |
| **Signed In** | Restricts access to logged-in portal users and internal staff; redirects anonymous visitors to login. |
| **Restricted Group** | Displays an **Authorized Groups** tag field *(e.g., Portal, Editor, Sales / User)*. Access is denied to users lacking membership. |
| **With Password** | Displays a **Password** input field. Visitors must enter this passcode to access page content. |

---

## 2. SEO Optimizer and Keyword Placement

In **Site** > **This page** > **Optimize SEO**, the modal analyzes content optimization:

### SEO Metadata Field Definitions

| Field Name | Description |
| :--- | :--- |
| **Title** | Displayed as the primary clickable headline in search results (recommended 50–60 characters). Defaults to page name + company name. |
| **Description** | Displayed as the summary text snippet beneath the title in search engine result pages (recommended 150–160 characters). |
| **Custom Url** | Editable URL slug for dynamic records *(e.g., products, blog posts, events)* while preserving backend database ID. |
| **Social Share Image** | Graphic injected into Open Graph `og:image` tags for link preview cards on social networks (recommended 1200x630 px, 1.91:1 ratio). |

### SEO Optimizer Placement Indicators
The **Keywords** scorecard audits target keywords across the live HTML document:

| Field Name | Description |
| :--- | :--- |
| **H1** | First-level page heading. Every page should include the primary keyword in its main `<h1>` banner headline. |
| **H2** | Second-level page heading. Secondary section titles should feature primary or supporting keywords. |
| **T** | Page Title. Ensures target keywords appear within the meta `<title>`. |
| **D** | Meta Description. Verifies inclusion within the meta description snippet. |
| **C** | Body Content. Confirms the keyword appears naturally within paragraph text and body copy. |

---

## 3. Product and Course Catalog Fields

### Product Pages Field Definitions
In **Site** > **Products** *(List View)*, catalog items display the following columns:

| Field Name | Description |
| :--- | :--- |
| **Product Name** | Display name of the product. Clicking opens the live storefront product detail page. |
| **Website URL** | Public URL path to the product page *(e.g., `/shop/customizable-desk-9`)*. |
| **Categories** | Assigned eCommerce category aisles. |
| **Sales Price** | Retail price configured for the active website. |
| **On Hand** | Physical inventory units available in the warehouse. |
| **SEO Optimized** | Indicates whether custom meta title, description, and keywords have been saved. |
| **Is Published** | Read-only indicator showing online publication status. |

#### Quick-Creation Product Fields
Clicking **+ New** in the Product Pages manager presents the following fields:

| Field Name | Description |
| :--- | :--- |
| **Product Name** | Title of the catalog item (required). |
| **Photo** | Square or 4:3 product thumbnail displayed in catalog grids. |
| **Barcode** | Optional EAN/UPC identifier for barcode scanning. |
| **Track Inventory** | Controls whether stock levels and low-stock warnings apply to this item. |
| **Sales Price** | Standard retail selling price before customer discounts. |
| **Sales Taxes** | Default sales tax rates applied to online purchases. |
| **Website Category** | Initial eCommerce category assignment for `/shop` navigation. |

### Course Pages Field Definitions
In **Site** > **Courses** *(List View)*, online learning programs display the following columns:

| Field Name | Description |
| :--- | :--- |
| **Name** | Course title. Clicking opens the course landing page. |
| **Website URL** | Frontend URL route to the course *(e.g., `/slides/basics-of-gardening-1`)*. |
| **Responsible** | Instructor or internal manager accountable for course content. |
| **Course Type** | Content classification *(e.g., Training, Documentation)*. |
| **Show Course To** | Audience visibility rules *(Everyone, Signed In, Course Attendees)*. |
| **SEO Optimized** | Confirms search snippet configuration. |
| **Is Published** | Publication state on the eLearning platform. |

#### Quick-Creation Course Fields
Clicking **+ New** in the Course Pages manager presents the following fields:

| Field Name | Description |
| :--- | :--- |
| **Course Title** | Public name of the online course (required). |
| **Tags** | Categorical labels for frontend search and filtering. |
| **Choose a layout** | Selects between sidebar syllabus view and card grid layout. |
| **Description** | Course summary and learning objectives displayed to prospective students. |
| **Allow Rating** | Enables student star ratings and public reviews on the course page. |
| **Enroll Policy** | Enrollment mechanism: **Open** (free), **On Invitation** (restricted), or **On payment** (requires purchasing associated eCommerce product). |

---

## 4. Catalog Merchandising and Attribute Field Definitions

### Product Merchandising and Upselling Fields
In **eCommerce** > **Products** > **Products** *(Product Form)*:

| Field Name | Description |
| :--- | :--- |
| **Compare to Price** | Original baseline price displayed with a strikethrough *(e.g., ~~$120~~ $99)* to emphasize savings. Located in `General Information` tab. |
| **Alternative Products** | Recommended substitute items displayed at the bottom of the product page under *"Alternative Products"*. Located in `Sales` tab > Upsell & Cross-sell. |
| **Accessory Products** | Add-on items suggested in the shopping cart pop-up drawer when customers add this product. Located in `Sales` tab > Upsell & Cross-sell. |
| **eCommerce Media** | Multi-image and video gallery attachments displayed on the product page. Located in `Sales` tab. |
| **eCommerce Description** | Formatted rich-text specifications and marketing copy displayed on the `/shop` product page. Located in `Sales` tab. |
| **Is Published** | Checkbox to toggle online visibility in `/shop`. Located in `Sales` tab > Ecommerce Shop. |
| **Website** | Restricts the product to a specific website domain, or blank for all sites. Located in `Sales` tab > Ecommerce Shop. |

### eCommerce Pricelists and Promotional Code Fields
In **eCommerce** > **Products** > **Pricelists** > **Ecommerce** tab:

| Field Name | Description |
| :--- | :--- |
| **Website** | Restricts the pricelist to a specific website domain, or blank for global availability. |
| **Selectable** | When enabled, shoppers can manually choose this pricelist from the currency/pricing dropdown on `/shop`. |
| **Code / E-commerce Promotional Code** | Promotional coupon code *(e.g., `EU`)* that activates the pricelist discounts when entered at checkout. |

### eCommerce Category Form Fields
In **eCommerce** > **Products** > **eCommerce Categories**:

| Field Name | Description |
| :--- | :--- |
| **Category Image** | Thumbnail graphic representing the category aisle. |
| **Name** | Category title displayed in navigation menus and breadcrumbs *(e.g., `Desks`)*. |
| **Parent Category** | Parent aisle for multi-level category hierarchies. |
| **Website** | Restricts category display to a specific website domain. |
| **Description** | Introductory promotional copy displayed at the top of the category browsing page. |

### Product Attribute, Tag, and Ribbon Fields

| Field Name | Description |
| :--- | :--- |
| **Attribute: eCommerce Filter** | Sets attribute visibility: `Visible` displays the attribute as a filtering facet in the `/shop` sidebar; `Hidden` keeps it selectable only on product pages. |
| **Attribute: eCommerce Category** | Groups attributes into comparison sections on `/shop/compare` and specifications tables. |
| **Product Tag: Visible on eCommerce** | Displays the tag badge on website product cards and product pages. |
| **Product Tag: Color / Image** | Sets badge color tone or overrides with a custom icon graphic. |
| **Product Ribbon: Ribbon Name** | Badge label text *(e.g., `Sale`, `New!`, `Sold out`)*. |
| **Product Ribbon: Position** | Corner alignment (`Left` or `Right`) of the badge on the product card. |
| **Product Ribbon: Background Color** | Hex background color of the ribbon badge *(defaults to `#000000`)*. |
| **Product Ribbon: Text Color** | Hex text color of the ribbon badge *(defaults to `#FFFFFF`)*. |

---

## 5. Online Orders and Cart Recovery Criteria

### Online Sales Order Field Definitions
In **eCommerce** > **Orders** > **Orders** *(List View)*:

| Field Name | Description |
| :--- | :--- |
| **Number** | Unique sales order reference number *(e.g., `S00094`)*. |
| **Order Date** | Exact date and time the customer completed the website checkout. |
| **Customer** | Billing contact or company account name associated with the transaction. |
| **Website** | Website domain instance where the purchase originated. |
| **Salesperson** | Assigned internal sales representative or eCommerce manager. |
| **Activities** | Follow-up activities, calls, or reminders scheduled on the order. |
| **Company** | Operating company entity responsible for accounting and fulfillment. |
| **Total** | Final transaction grand total including items, shipping fees, and taxes. |
| **Invoice Status** | Billing state: **To Invoice** (pending customer invoice) or **Nothing to Invoice**. |

### Order Status and Cart Recovery Criteria
How CURQ categorizes website purchasing journeys:

| Field Name | Description |
| :--- | :--- |
| **Abandoned Carts** | State `Quotation`. Shopper added items to cart and supplied contact email, but left before completing checkout. Inactivity exceeds configured delay *(default 1 hr)*. Staff can click **Send a Recovery Email** or rely on automated dispatch to send recovery link. |
| **Unpaid Orders** | State `Quotation Sent`. Shopper completed checkout, but payment is pending asynchronous settlement *(e.g., Wire Transfer / SEPA)*. Staff verifies bank receipt and clicks **Confirm** to authorize the sale. |
| **Confirmed Orders** | State `Sales Order`. Payment confirmed by gateway or manually authorized by staff. Outbound delivery is processed and customer invoice is generated. |

---

## 6. Live Chat and Chatbot Field Definitions

### Live Chat Channel and Operator Fields
In **Website** > **Configuration** > **Settings** > **Email & Marketing** > **Channel**:

| Field Name | Description |
| :--- | :--- |
| **Channel Name** | Internal title of the live chat channel *(e.g., `YourWebsite.com`)*. |
| **Operators** | Internal staff roster assigned to handle incoming chats. |
| **Operator Inactivity Timeout** | Automatic system rule where operators inactive in CURQ for more than 30 minutes are treated as disconnected. |
| **Chatbots** | Count of linked conversational chatbot decision trees. |
| **Sessions** | Total count of recorded visitor live chat sessions. |
| **% Happy** | Cumulative customer satisfaction rating percentage. |

### Widget Aesthetics and Greeting Options
Under the channel **Options** tab:

| Field Name | Description |
| :--- | :--- |
| **Notification text** | Callout bubble prompt next to the collapsed launcher icon *(default: `Have a Question? Chat with us.`)*. |
| **Livechat Button Color** | Background color of the collapsed floating bubble *(defaults to theme palette)*. |
| **Welcome Message** | Automated greeting sent when the customer opens the chat window *(default: `Hello, how may I help you?`)*. |
| **Chat Input Placeholder** | Guide prompt text inside the message typing field *(defaults to empty)*. |
| **Channel Header Color** | Header banner color of the expanded chat window *(defaults to theme palette)*. |

### Channel Display Rule Fields
Under the channel **Channel Rules** tab:

| Field Name | Description |
| :--- | :--- |
| **Live Chat Button** | Display behavior of the floating bubble on matching URL routes (`Show`, `Show with notification`, `Open automatically`, or `Hide`). |
| **Chatbot** | Optional automated conversational bot assigned to engage visitors prior to operator transfer. |
| **URL Regex** | Regular expression pattern matching website URL routes *(e.g., `/contactus`, `/shop/.*`)*. |
| **Country** | Restricts rule execution to visitors from specific countries *(requires GeoIP)*. |

### Chatbot Script and Visitor Tracking Fields
In the **Chatbot Script** builder:

| Field Name | Description |
| :--- | :--- |
| **Message** | Message prompt transmitted by the bot to the visitor. |
| **Step Type** | Behavior of the node: text announcement (`Text`), question with clickable choices (`Question`), contact input (`Email`), or human handoff (`Forward to Operator`). |
| **Answers** | Clickable answer choices presented to the visitor. |
| **Only If** | Branching condition executing this node only if a specific previous answer was chosen. |

---

## 7. Website Reporting and Analytics Field Definitions

### Reporting Menus Overview

| Field Name | Description |
| :--- | :--- |
| **Analytics** | Located at `Reporting` > `Analytics` (Dashboard view). Covers visitor traffic overview, bounce rates, visit durations, and Plausible Analytics. |
| **Online Sales** | Located at `Reporting` > `Online Sales` (Pivot and Graph views). Provides multi-dimensional analysis of confirmed web sales, product lines, and revenue. |
| **Visitors** | Located at `Reporting` > `Visitors` (Kanban, List, Form, and Graph views). Displays real-time user tracking, connection states, browsing paths, and direct outreach. |
| **Page Views** | Located at `Reporting` > `Page Views` (List and Graph views). Provides a granular audit trail of individual URL impressions, timestamps, and sessions. |

### Online Sales Analysis Measures and Dimensions
In `Reporting` > `Online Sales`:

| Field Name | Description |
| :--- | :--- |
| **Untaxed Amount** | Net item revenue before taxes *(default measure)*, representing baseline sales revenue excluding tax liabilities. |
| **Total** | Gross order total including taxes, representing total customer payment collected. |
| **Qty Ordered** | Total product units purchased for unit sales volume tracking. |
| **Qty Delivered** | Units shipped and validated for fulfillment throughput monitoring. |
| **Qty Invoiced** | Units billed on customer invoices for revenue recognition progress. |
| **Qty to Invoice** | Fulfilled units awaiting billing representing unbilled order pipeline. |
| **Discount Amount** | Total discounts deducted representing commercial promotion impact. |
| **Gross Weight** | Total shipment weight in kg for logistics and freight volume planning. |
| **Volume** | Total cubic volume in m³ for warehouse packing optimization. |
| **Count** | Total sales order line records representing transaction frequency. |

### Visitor Tracking Attributes and Columns
In `Reporting` > `Visitors`:

| Field Name | Description |
| :--- | :--- |
| **Country Flag** | Icon representing the visitor's detected geographic location via GeoIP. |
| **Name** | Contact name *(if authenticated)* or system tag *(e.g., `Visitor #128`)*. |
| **Last Connection** | Timestamp of the visitor's most recent interaction. |
| **Language** | Preferred browsing language detected from the client browser. |
| **Visits** | Cumulative count of distinct sessions initiated by this visitor. |
| **Pages** | Badges showing specific web pages visited during the session. |
| **Products** | Badges showing eCommerce catalog products viewed by the visitor. |
| **Leads** | Count of CRM leads generated by or linked to this visitor. |
| **Direct Outreach** | Action shortcuts to launch **Email**, **SMS**, or **Livechat** directly to the visitor. |

### Page Views Audit Log Field Definitions
In `Reporting` > `Page Views`:

| Field Name | Description |
| :--- | :--- |
| **Page URL** | Exact relative URL route accessed *(e.g., `/shop`, `/contactus`)*. |
| **Visitor** | Linked visitor record identifier. |
| **Visit Date** | Precise timestamp when the HTTP request occurred. |
| **Products** | Catalog item linked if the page view was a product detail view. |
| **Website** | Domain instance serving the page view. |

---

## Related Documentation

* [Website Configuration and Domain Settings](./01-website-configuration-and-domain-settings.md)
* [eCommerce Shop and Checkout Settings](./02-ecommerce-shop-and-checkout-settings.md)
* [Delivery, Shipping, and Store Pickup Settings](./03-delivery-shipping-and-store-pickup-settings.md)
* [Privacy, Cookie Compliance, and Account Settings](./04-privacy-cookie-compliance-and-account-settings.md)
* [Manage Webpages and Redirections](../task-guides/03-manage-webpages-and-redirections.md)
* [Track Visitors and Analyze Web Reporting](../task-guides/13-track-visitors-and-analyze-web-reporting.md)
