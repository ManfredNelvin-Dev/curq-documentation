# Contact Form Field Definitions

This document provides a factual, scannable catalog of all fields, toggles, and options available on CURQ contact forms.

---

## 1. Header and Identity Fields

> **Warning - Cross-System Impact (Contact Identity & Accounting):** Toggling **Contact Type** between Company and Individual, modifying **VAT**, or changing linked parent entities alters tax computation algorithms and address inheritance on active Sales Quotations, open Vendor Bills, and pending Delivery Orders. Always verify child address mappings after modifying master contact properties.

### 1.1 Header Smart Buttons (Stat Metrics)

The top ribbon of the contact form provides quick-access smart buttons that aggregate commercial, operational, and financial interactions linked to this partner:

| Smart Button | Metric Description |
| :--- | :--- |
| **Meetings** | Displays the count of scheduled calendar meetings linked to this partner *(e.g., `0 Meetings`)*. Clicking opens the linked Calendar view. |
| **Opportunities** | Shows active commercial CRM opportunities and pipeline leads associated with this partner *(e.g., `0 Opportunities`)*. |
| **Sales** | Tracks total commercial sales order value and active quotations *(e.g., `$ 0 Sales`)*. |
| **Invoiced** | Aggregates total customer billing and invoice amounts issued to this partner *(e.g., `0.00 Invoiced`)*. |
| **Tasks** | Displays open project tasks assigned to or requested by this partner *(e.g., `0 Tasks`)*. |
| **Purchases** | Tracks total purchase order volume issued to this partner as a supplier *(e.g., `0 Purchases`)*. |
| **On-time Rate** | Supplier fulfillment reliability score measuring the percentage of shipments delivered on or before the scheduled date *(e.g., `0 % On-time Rate`)*. |
| **More (▼)** | Contextual overflow dropdown providing access to additional module statistics *(e.g., Helpdesk Tickets, Subscriptions, Direct Debit Mandates)*. |

### 1.2 Primary Identity & Address Fields

| Field Name | Description |
| :--- | :--- |
| **Contact Type (Radio)** | Selects whether the record represents an **Individual** *(private customer, employee, freelancer)* or a **Company** *(legal business entity, e.g., Acme Technologies)*. Modifies visible fields across the form. |
| **Name** | The primary legal business name *(e.g., `Acme Technologies`)* or person's full name. Forms the primary record title and appears on all transactional documents. |
| **Avatar / Logo** | Image upload box *(camera `📷 +` icon)* on the upper-right corner for uploading an official company logo or individual portrait photo. |
| **Company Name** | *(Individual only)* The parent corporate entity this person is associated with. When selected, automatically links the person and copies the company's business address. |
| **Address** | Multi-field structured postal block configured for the partner's geographic location: <br>• **Street**: Primary street address and building number *(e.g., `100 Innovation Way`)*. <br>• **Street 2...**: Secondary address line for suite, unit, building, or PO Box. <br>• **Municipality**: Local municipal district, county, or township. <br>• **ZIP**: Postal or ZIP code *(e.g., `78701`)*. <br>• **City**: City or locality name *(e.g., `Austin`)*. <br>• **State**: State, province, or regional division dropdown selector *(e.g., `Texas`)*. <br>• **Country**: Country dropdown selector governing postal formatting, address layout, and tax rules *(e.g., `United States`)*. |
| **VAT** | Business tax identification number, VAT ID, GSTIN, or EIN *(placeholder: `/ If not applicable`)*. Clicking the help icon (`?`) details validation rules; validated against national tax schemas based on the selected country. |
| **Job Position** | *(Individual only)* Professional role or functional title within their organization *(e.g., `Procurement Director`)*. |
| **Title** | *(Individual only)* Formal salutation *(e.g., `Mr.`, `Mrs.`, `Dr.`, `Prof.`)* used in automated correspondence and printed documents. |

### 1.3 Communication & Contact Channels

| Field Name | Description |
| :--- | :--- |
| **Phone** | Primary landline or corporate switchboard telephone number *(e.g., `+1 512-555-0199`)*. |
| **Mobile** | Direct mobile cellular phone number used for direct calling and SMS notifications. |
| **Email** | Primary electronic mail address for system-generated quotations, sales confirmations, and invoices *(e.g., `info@acmetech.com`)*. Features an add (`+`) icon and an **Ignore** button to bypass automated email bounce or blacklist filters. |
| **Email Score** | Visual deliverability and quality rating bar *(e.g., `50 %`)* calculated from email syntax validity, MX record responsiveness, and delivery history. |
| **Email Bounced** | Checkbox indicator denoting whether system emails dispatched to this address encountered delivery rejections or hard bounces. |
| **Website** | Corporate website URL *(e.g., placeholder `e.g. https://www.odoo.com`)*. |
| **Telegram Link** | Direct handle or web link for instant messaging and notifications via Telegram. |
| **Language** | Preferred communication and localization language *(e.g., `Dutch / Nederlands`)* with help tooltip (`?`). Governs the language used for automated emails, customer portal views, sales quotations, and PDF invoices. |
| **Tags** | Multi-select classification tags *(e.g., `B2B`, `VIP`, `Consulting`)* used for categorizing, segmenting, and filtering contacts across CURQ. <br>• **Search Before Creating**: The **Create** option appears quickly in the dropdown. Always select **Search more...** first to locate an existing tag before creating a new one to prevent unnecessary duplicates. <br>• **Accuracy & Spacing**: Enter tag names accurately and avoid leading spaces *(e.g., `" VIP"`)*, as even an extra space creates a separate tag and disrupts search results. |

---

## 2. Contacts and Addresses Tab

| Address Type | Key Behaviors & Purpose |
| :--- | :--- |
| **Contact** | Adds an employee, account manager, or representative working at this business. Inherits company billing/accounting settings. |
| **Invoice Address** | The default billing destination. Sales invoices and credit notes automatically route to this destination address and email. |
| **Delivery Address** | The physical shipping destination. Delivery orders, picking slips, and warehouse dispatches automatically route to this location. |
| **Other Address** | Alternate physical locations, such as regional storage depots, secondary corporate offices, or temporary job sites. |

---

## 3. Sales and Purchase Tab

### 3.1 Sales Section
| Field Name | Description |
| :--- | :--- |
| **Salesperson** | Internal system user assigned to manage customer relationships and commercial transactions. |
| **Payment Terms** | Default credit and payment timeline applied to customer sales orders and customer invoices (e.g., `Immediate Payment`, `15 Days`, `30 Days`, `End of Following Month`). |
| **Payment Method** | Preferred customer payment channel for incoming transactions (e.g., `Manual`, `Credit Card`, `Direct Debit`). |
| **Pricelist** | Commercial pricelist governing customer discounts, margin rules, and transaction currency. Inherited from parent company if linked. |
| **Delivery Method** | Default shipping carrier or fulfillment rule applied to customer deliveries (e.g., `Standard Delivery`, `Express Freight`). |

### 3.2 Purchase Section
| Field Name | Description |
| :--- | :--- |
| **Payment Terms** | Agreed settlement deadline applied to incoming vendor bills and purchase orders. |
| **Payment Method** | Default payment channel used by the enterprise to settle vendor payables (e.g., `Manual`, `Bank Transfer`, `Checks`). |

### 3.3 Fiscal Information Section
| Field Name | Description |
| :--- | :--- |
| **Fiscal Position** | Tax mapping rule that replaces or adapts product taxes according to domestic, intra-community, or international trade agreements. |

### 3.4 Miscellaneous Section
| Field Name | Description |
| :--- | :--- |
| **Reference** | Internal alphanumeric identifier or legacy account number assigned by the internal organization. |
| **Company ID** | Official commercial register number, SIRET, or Chamber of Commerce ID. |
| **Company** | In multi-company environments, designates the internal legal operating branch that owns this contact record. |
| **Website** | Restricts e-commerce customer account access to a specific storefront instance. |
| **Industry** | *(Company only)* Economic activity classification (e.g., `Manufacturing`, `Wholesale/Retail`). |

---

## 4. Invoicing Tab

### 4.1 Bank Accounts Sub-Table
| Column | Description |
| :--- | :--- |
| **Account Number** | Full bank account number or IBAN. |
| **Bank** | Linked banking institution from the Bank Registry. |
| **Send Money** | Toggle switch indicating **Untrusted** or **Trusted** status for outgoing cash disbursements. |

### 4.2 Customer Invoices Section
| Field Name | Description |
| :--- | :--- |
| **Invoice sending** | Default delivery mode when finalizing customer invoices (`Download` or `by Email`). |
| **eInvoice format** | Electronic Data Interchange (EDI) format standard used when exporting structured invoice files for government gateways (e.g., `France (FacturX)`, `EU Standard (Peppol Bis 3.0)`, `Germany (ZUGFeRD)`, `Germany (XRechnung)`, `Netherlands (NLCIUS)`). |
| **Peppol ID** | Official public registry identifier (e.g., SIRET, KvK, Leitweg-ID, EIN) used for cross-border e-invoicing transmission. |

### 4.3 Automation Section
| Setting | Description |
| :--- | :--- |
| **Auto-post bills** | Controls validation behavior for incoming vendor bills from this partner: **Always** (automatically posts upon creation), **Ask after 3 validations without edits** (prompts to enable after three unmodified bills), or **Never** (mandates manual confirmation). |

---

## 5. Internal Notes and Warnings Tab

| Setting | Description |
| :--- | :--- |
| **Internal Notes** | Private background notes and reminders. Visible only to internal staff; omitted from customer-facing documents. |
| **Warning on the Sales Order** | Determines the alert behavior when this customer is selected on quotations or sales orders: **No Message** (standard operation), **Warning** (informational popup alert), or **Blocking Message** (halts order creation completely). |
| **Warning on the Picking** | Determines the alert behavior when this partner is selected on warehouse delivery orders or incoming receipts: **No Message**, **Warning**, or **Blocking Message**. |
| **Message** | The exact text string rendered in the warning or blocking modal dialog. |

---

## 6. Personal Information Tab

| Field Name | Description |
| :--- | :--- |
| **Birthdate** | *(Individual only)* Contact date of birth used for demographic profiling, legal age verification, or automated greeting messages. |

---

## 7. Partner Assignment Tab

| Field Name | Description |
| :--- | :--- |
| **Geo Location** | Precise GPS coordinates (**Latitude** and **Longitude**) calculated from the partner's address or entered manually. |
| **Compute based on address** | System action button that queries geocoding services to resolve latitude and longitude coordinates automatically. |

---

## 8. Membership Tab

| Field Name | Description |
| :--- | :--- |
| **Free Member** | Flags whether the contact holds complimentary membership status with voting rights without requiring subscription fees. |
| **Membership Application Date** | Official timestamp recording when the member application was received or registered. |
| **Membership Categories** | Organizational membership tiers or interest groups associated with the partner. |
| **Current Membership Status** | Active standing of the member (e.g., `Non Member`, `Paid Member`, `Cancelled`). Includes shortcut to **Buy Membership**. |
| **Membership Lines** | History table recording **Join Date**, membership intervals (**From** / **To**), billing invoices, and payment statuses. |

---

## 9. Privacy Tab

| Field Name | Description |
| :--- | :--- |
| **Website Privacy Level** | Defines public profile visibility on e-commerce and portal websites (e.g., `Use Name`, `Public`, `Private`). |
| **Show Email** | Controls whether the contact's email address is publicly visible in online community directories. |
| **Show Address** | Controls whether physical address coordinates are displayed on web directory profiles. |
| **Show Phone** | Toggles telephone visibility on customer-facing portal and directory listings. |
| **Show Website** | Toggles external website link visibility on published community cards. |

---

## Related Documentation

* [Create and Manage Contacts](../task-guides/01-create-and-manage-contacts.md)
* [Bank Account Fields and Security Badges](./02-bank-account-security-and-fields.md)
* [Geographic and Localization Settings](./03-localization-and-country-settings.md)
* [Understanding Unified Partner Architecture and Hierarchies](../core-concepts/01-understanding-unified-partner-architecture-and-hierarchies.md)
