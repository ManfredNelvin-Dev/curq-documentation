# Website Configuration and Domain Settings

This document details the configuration parameters, domain routing rules, multi-website options, and SEO/analytics technical specifications for CURQ 18 Website.

---

## 1. Website Info Specifications

> **Caution (Domain Routing & SSL Safeguard):** Modifying the **Domain** field without prior DNS record updates and active SSL/TLS certificates will drop the public website and eCommerce store offline immediately. Furthermore, changing the **Company** entity alters sales order invoicing journals and inventory stock locations for all future online checkouts. Non-technical users should never change production domain settings without network administrator verification.

The **Website Info** configuration block establishes the foundational identity, routing address, language availability, and brand icon for each website instance in CURQ 18:

| Field Name | Description |
| :--- | :--- |
| **Domain** | Defines the public web address where this website resolves *(e.g., `https://curq.nl`)*. If left empty, the site serves as the fallback instance for unmatched domain requests. |
| **Languages** | Lists all active languages accessible to visitors via the frontend language switcher *(e.g., `English (US)`)*. |
| **Default** | Specifies the default primary language loaded when visitors access the root domain without a language prefix. Visible when two or more languages are active. |
| **Website Name** | Internal administrative label used across the backend to identify the website instance *(e.g., `My Website`)*. |
| **Company** | Designates the legal operating partner entity responsible for sales orders, inventory valuation, and accounting entries originating from this website. |
| **Favicon** | The browser tab icon displayed alongside the webpage title. CURQ automatically resizes and converts uploaded graphics (PNG, JPG, or ICO) into 256x256 ICO format. |

### 1.1 Multi-Website Scope and Routing Behavior

* **Domain Routing**: In multi-website deployments, CURQ matches incoming HTTP requests against the **Domain** field. If a request does not match any configured domain, CURQ routes the visitor to the fallback website record (where Domain is blank or matches base database URL).
* **Language Prefixes**: Non-default languages are injected into URL routes using ISO-639-1 language codes (e.g., `/nl/shop` vs. `/shop`).
* **Favicon Cache**: Favicon assets are cached by browsers and CDNs at the root path `/web/image/website/{website_id}/favicon`.

> For procedural instructions on managing domains, pages, and redirects, see [**Manage Webpages and Redirections**](../task-guides/03-manage-webpages-and-redirections.md).

---

## 2. SEO and Web Analytics Specifications

The **SEO** configuration block controls search crawler directives, tracking tag injections, ownership verification, and social graph previews:

| Field Name | Description |
| :--- | :--- |
| **Google Analytics** | Injects Google Analytics 4 (GA4) `gtag.js` tracking scripts using your Measurement ID *(e.g., `G-XXXXXXXXXX`)* into the `<head>` of all rendered public pages. |
| **Robots.txt** | Opens the directive code editor to manage search crawler instructions governing which directories and endpoints search engines can index. |
| **Default Social Share Image** | Replaces the company logo with a standardized 1200x630 px Open Graph fallback graphic when URLs are shared across social networks. |
| **Google Search Console** | Verifies domain ownership with Google Webmaster Tools by returning the required HTML verification token *(e.g., `google<alphanumeric>.html`)*. |
| **Plausible Analytics** | Integrates lightweight, privacy-friendly web analytics using your shared link authorization token and domain string without triggering cookie banner requirements. |

### 2.1 Technical Details & Formats

#### 2.1.1 Google Analytics 4 (GA4)
* **Tag Injection**: Injects `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX` into the QWeb primary asset template.
* **Privacy Interaction**: In environments with the **Cookies Bar** enabled, Google Analytics scripts are held until the visitor grants consent to optional cookies.

#### 2.1.2 Robots.txt Specifications
* **Public Endpoint**: Directives compile directly to the standard public route `/robots.txt`.
* **Standard Directives**:
  * `User-agent: *`: Applies following rules to all search engine crawlers.
  * `Disallow: /web/login`: Restricts crawlers from indexing authentication and backend login forms.
  * `Disallow: /shop/cart`: Prevents indexing transient shopping carts.
  * `Disallow: /my/`: Blocks search spiders from indexing authenticated customer portal directories.
  * `Allow: *`: Explicitly permits crawling all public layout and catalog pages.

#### 2.1.3 Default Social Share Image (Open Graph)
* **Image Dimensions**: Recommended aspect ratio is 1.91:1 (1200 x 630 pixels, minimum 600 x 315 pixels).
* **Metadata Tags**: Injected as `<meta property="og:image" content="...">` and `<meta name="twitter:image" content="...">`.
* **Fallback Hierarchy**:
  1. Individual page custom Open Graph image (configured in Page SEO modal).
  2. Default Social Share Image (configured in Settings).
  3. Operating Company Logo (system fallback).

#### 2.1.4 Google Search Console
* **Verification Format**: Accepts the full file token string (e.g., `google1234567890123456.html`) or the raw verification key.
* **Response Handling**: CURQ automatically intercepts requests to the verification endpoint and returns the matching verification string to confirm ownership.

#### 2.1.5 Plausible Analytics
* **Shared Link Auth**: The read-only authorization token generated from the Plausible dashboard settings.
* **Site Identifier**: The registered domain name matching the Plausible site record *(e.g., `curq.nl`)*.
* **Cookie-Free Advantage**: Operates without client-side cookies or personal data storage, exempt from GDPR consent banner requirements.

> For step-by-step instructions on configuring page-level SEO and metadata, see [**Optimize SEO and Search Metadata**](../task-guides/04-optimize-seo-and-search-metadata.md).

---

## Related Documentation

* [Optimize SEO and Search Metadata](../task-guides/04-optimize-seo-and-search-metadata.md)
* [Manage Webpages and Redirections](../task-guides/03-manage-webpages-and-redirections.md)
* [Website Page, Product, and Reporting Field Definitions](./05-website-page-product-and-reporting-field-definitions.md)
* [Understanding Website Architecture and Content Delivery](../core-concepts/01-understanding-website-architecture-and-content-delivery.md)
