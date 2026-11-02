# Privacy, Cookie Compliance, and Account Settings

This document details the configuration parameters, GDPR cookie consent options, third-party tracking controls, customer portal onboarding policies, and eCommerce storefront access boundaries for CURQ 18 Website.

---

## 1. Overview of Website Privacy Settings

The **Privacy** block governs user consent compliance, portal account creation rules, and storefront access boundaries:

| Field Name | Description |
| :--- | :--- |
| **Cookies Bar** | Displays a customizable cookie consent notification banner anchored to the bottom of the viewport for public website visitors. |
| **Block tracking 3rd-party services** | Halts scripts, tracking pixels, and external iframes from executing until the visitor explicitly grants consent. |
| **Shared Customer Accounts** | Permits customer login credentials to authenticate across all website instances operating within the database. |
| **Customer Account** | Regulates whether public visitors can self-register for portal accounts (*Free sign up*) or require administrative email invitation (*On invitation*). |
| **Ecommerce Access** | Dictates whether product catalogs, prices, and shopping carts are public (*All users*) or restricted to authenticated accounts (*Logged in users*). |

---

## 2. Cookies Bar and Consent Actions

When active, visitors arriving on any public web page see the consent bar anchored to the bottom of the viewport.

### Consent Banner Elements and Actions

| Field Name | Description |
| :--- | :--- |
| **Consent Notice** | Text statement informing visitors of cookie categorization and data privacy policies. |
| **Cookie Policy Link** | Hyperlink routing to `/cookie-policy` outlining session, functional, and tracking cookies. |
| **Only essentials Button** | Limits cookies strictly to required operational session data and maintains third-party service script blocks. |
| **I agree Button** | Unblocks optional tracking cookies and triggers blocked third-party service scripts and iframes. |

---

## 3. Third-Party Tracking and Blocked Domains

### Automatically Suppressed Service Categories

CURQ suppresses scripts, analytics tags, and embedded frames originating from the following networks prior to affirmative cookie consent:

| Field Name | Description |
| :--- | :--- |
| **Social Networks** | Facebook (`connect.facebook.net`), Instagram, Twitter/X (`platform.twitter.com`), TikTok, and LinkedIn widgets and tracking scripts. |
| **Video Streaming** | YouTube (`youtube.com/embed`), Vimeo (`player.vimeo.com`), Dailymotion, and Youku embedded players. |
| **Google Services** | Google Maps embed iframes, Google Analytics (`gtag.js`), and Google Tag Manager containers. |

### Custom Blocked Domain Specifications

* **Syntax**: Fully qualified domain names (FQDN) or hostnames *(e.g., `www.custom-tracker.com`, `analytics.partner.io`)* entered one per line.
* **Matching Logic**: Substring matching applied against script `src` attributes and iframe target URLs.
* **Storage Model**: Stored in system parameter records associated with the active website.

---

## 4. Customer Account Authentication Policies

### Multi-Website Account Scope

* **Shared Customer Accounts (Enabled)**: Single sign-on experience across multiple websites. A customer registered on `site-a.com` can authenticate directly on `site-b.com` using identical credentials.
* **Shared Customer Accounts (Disabled)**: User records remain strictly segregated by website ID. Accounts registered on one site cannot authenticate on other sites without explicit registration.

### Portal Onboarding Modes

| Field Name | Description |
| :--- | :--- |
| **On invitation** *(B2B Mode)* | Disables public registration on `/web/signup`. New portal users can only access the site when staff sends an email invitation from Contacts under Portal Access Management. Access is governed by strict individual role assignment. |
| **Free sign up** *(B2C Mode)* | Displays a Sign up link on the login page, allowing any public visitor to self-register an account. Role assignment is configured via the Default Access Rights template user record. |

---

## 5. eCommerce Access Restriction Policies

Governs public visibility for `/shop`, product catalog pages, shopping carts, and wishlists:

| Field Name | Description |
| :--- | :--- |
| **All users** | Open to the general public. Anonymous visitors can browse items, inspect prices, and add products to carts, with guest checkout permitted based on checkout process rules. |
| **Logged in users** | Locks catalog browsing behind authentication. Anonymous visitors attempting to access `/shop`, item pages, or cart URLs are redirected to `/web/login`, restricting purchasing exclusively to verified registered users. |

> For step-by-step procedures on enforcing compliance policies, managing cookie texts, and restricting access, see [**Configure Privacy, Cookies, and Compliance Policies**](../task-guides/12-configure-privacy-cookies-and-compliance.md).

---

## Related Documentation

* [Configure Privacy, Cookies, and Compliance Policies](../task-guides/12-configure-privacy-cookies-and-compliance.md)
* [Website Configuration and Domain Settings](./01-website-configuration-and-domain-settings.md)
* [eCommerce Shop and Checkout Settings](./02-ecommerce-shop-and-checkout-settings.md)
* [Understanding Website Architecture and Content Delivery](../core-concepts/01-understanding-website-architecture-and-content-delivery.md)
