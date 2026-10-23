# Settings and Fields: Contact Form Field Definitions

This document provides a factual, scannable catalog of all fields, toggles, and options available on CURQ contact forms.

---

### Header and Identity Fields

| Field Name | Description |
| :--- | :--- |
| **Contact Type** | Determines whether the record represents a legal corporate entity (**Company**) or a physical person (**Individual**). Modifies visible fields (e.g., Company displays *Industry*; Individual displays *Title* and *Company Name*). |
| **Name** | The primary personal name or registered business name of the contact. |
| **Company Name** | *(Individual only)* The parent corporate entity this person is associated with. When selected, automatically links the person and copies the company's business address. |
| **Address** | The primary postal and geographic location of the contact (street, city, state, postal code, and country). |
| **Tax ID** | The business VAT, GSTIN, EIN, or national tax registration number. Validated against the selected country's ISO tax schema if localization rules are active. |
| **Job Position** | *(Individual only)* The professional role, department, or functional title within their organization (e.g., `Procurement Director`). |
| **Phone** | Primary landline or switchboard telephone number. |
| **Mobile** | Direct mobile phone number used for direct calling and SMS notifications. |
| **Email** | Primary communication endpoint for system-generated quotations, sales confirmations, and invoices. |
| **Website** | Corporate website address. |
| **Title** | *(Individual only)* Formal salutation (e.g., `Mr.`, `Mrs.`, `Dr.`, `Prof.`) used in automated email templates and printed documents. |
| **Language** | The language used when generating automated emails, sales quotations, and invoices for this contact. |
| **Tags** | Color-coded category labels used for categorizing, filtering, and reporting on contacts. |
| **Avatar / Logo** | Photograph of the person or official corporate logo. |

---

### Contacts and Addresses Tab

| Address Type | Key Behaviors & Purpose |
| :--- | :--- |
| **Contact** | Adds an employee, account manager, or representative working at this business. Inherits company billing/accounting settings. |
| **Invoice Address** | The default billing destination. Sales invoices and credit notes automatically route to this destination address and email. |
| **Delivery Address** | The physical shipping destination. Delivery orders, picking slips, and warehouse dispatches automatically route to this location. |
| **Other Address** | Alternate physical locations, such as regional storage depots, secondary corporate offices, or temporary job sites. |
| **GLN** | Global Location Number (13-digit standard GS1 code) used for electronic logistics and EDI messaging. |

---

### Sales and Purchase Tab

#### Sales Section
| Field Name | Description |
| :--- | :--- |
| **Salesperson** | Internal system user assigned to manage customer relationships and commercial transactions. |
| **Payment Terms** | Default credit and payment timeline applied to customer sales orders and customer invoices (e.g., `Immediate Payment`, `15 Days`, `30 Days`, `End of Following Month`). |
| **Payment Method** | Preferred customer payment channel for incoming transactions (e.g., `Manual`, `Credit Card`, `Direct Debit`). |
| **Pricelist** | Commercial pricelist governing customer discounts, margin rules, and transaction currency. Inherited from parent company if linked. |
| **Delivery Method** | Default shipping carrier or fulfillment rule applied to customer deliveries (e.g., `Standard Delivery`, `Express Freight`). |

#### Purchase Section
| Field Name | Description |
| :--- | :--- |
| **Payment Terms** | Agreed settlement deadline applied to incoming vendor bills and purchase orders. |
| **Payment Method** | Default payment channel used by the enterprise to settle vendor payables (e.g., `Manual`, `Bank Transfer`, `Checks`). |

#### Fiscal Information Section
| Field Name | Description |
| :--- | :--- |
| **Fiscal Position** | Tax mapping rule that replaces or adapts product taxes according to domestic, intra-community, or international trade agreements. |

#### Miscellaneous Section
| Field Name | Description |
| :--- | :--- |
| **Reference** | Internal alphanumeric identifier or legacy account number assigned by the internal organization. |
| **Company ID** | Official commercial register number, SIRET, or Chamber of Commerce ID. |
| **Company** | In multi-company environments, designates the internal legal operating branch that owns this contact record. |
| **Website** | Restricts e-commerce customer account access to a specific storefront instance. |
| **Industry** | *(Company only)* Economic activity classification (e.g., `Manufacturing`, `Wholesale/Retail`). |

---

### Invoicing Tab

#### Bank Accounts Sub-Table
| Column | Description |
| :--- | :--- |
| **Account Number** | Full bank account number or IBAN. |
| **Bank** | Linked banking institution from the Bank Registry. |
| **Send Money** | Toggle switch indicating **Untrusted** or **Trusted** status for outgoing cash disbursements. |

#### Customer Invoices Section
| Field Name | Description |
| :--- | :--- |
| **Invoice sending** | Default delivery mode when finalizing customer invoices (`Download` or `by Email`). |
| **eInvoice format** | Electronic Data Interchange (EDI) format standard used when exporting structured invoice files for government gateways (e.g., `France (FacturX)`, `EU Standard (Peppol Bis 3.0)`, `Germany (ZUGFeRD)`, `Germany (XRechnung)`, `Netherlands (NLCIUS)`). |
| **Peppol ID** | Official public registry identifier (e.g., SIRET, KvK, Leitweg-ID, EIN) used for cross-border e-invoicing transmission. |

#### Automation Section
| Setting | Description |
| :--- | :--- |
| **Auto-post bills** | Controls validation behavior for incoming vendor bills from this partner: **Always** (automatically posts upon creation), **Ask after 3 validations without edits** (prompts to enable after three unmodified bills), or **Never** (mandates manual confirmation). |

---

### Internal Notes and Warnings Tab

| Setting | Description |
| :--- | :--- |
| **Internal Notes** | Private background notes and reminders. Visible only to internal staff; omitted from customer-facing documents. |
| **Warning on the Sales Order** | Determines the alert behavior when this customer is selected on quotations or sales orders: **No Message** (standard operation), **Warning** (informational popup alert), or **Blocking Message** (halts order creation completely). |
| **Message** | The exact text string rendered in the warning or blocking modal dialog. |

---

### Personal Information Tab

| Field Name | Description |
| :--- | :--- |
| **Birthdate** | *(Individual only)* Contact date of birth used for demographic profiling, legal age verification, or automated greeting messages. |

---

### Partner Assignment Tab

| Field Name | Description |
| :--- | :--- |
| **Geo Location** | Precise GPS coordinates (**Latitude** and **Longitude**) calculated from the partner's address or entered manually. |
| **Compute based on address** | System action button that queries geocoding services to resolve latitude and longitude coordinates automatically. |

---

### Membership Tab

| Field Name | Description |
| :--- | :--- |
| **Free Member** | Flags whether the contact holds complimentary membership status with voting rights without requiring subscription fees. |
| **Membership Application Date** | Official timestamp recording when the member application was received or registered. |
| **Membership Categories** | Organizational membership tiers or interest groups associated with the partner. |
| **Current Membership Status** | Active standing of the member (e.g., `Non Member`, `Paid Member`, `Cancelled`). Includes shortcut to **Buy Membership**. |
| **Membership Lines** | History table recording **Join Date**, membership intervals (**From** / **To**), billing invoices, and payment statuses. |

---

### Privacy Tab

| Field Name | Description |
| :--- | :--- |
| **Website Privacy Level** | Defines public profile visibility on e-commerce and portal websites (e.g., `Use Name`, `Public`, `Private`). |
| **Show Email** | Controls whether the contact's email address is publicly visible in online community directories. |
| **Show Address** | Controls whether physical address coordinates are displayed on web directory profiles. |
| **Show Phone** | Toggles telephone visibility on customer-facing portal and directory listings. |
| **Show Website** | Toggles external website link visibility on published community cards. |

---

## Related Documentation

* [Task Guide: Create and Manage Contacts](../task-guides/01-create-and-manage-contacts.md)
* [Settings and Fields: Bank Account Fields and Security Badges](./02-bank-account-security-and-fields.md)
* [Settings and Fields: Geographic and Localization Settings](./03-localization-and-country-settings.md)
* [Core Concepts: Understanding Unified Partner Architecture and Hierarchies](../core-concepts/01-understanding-unified-partner-architecture-and-hierarchies.md)

