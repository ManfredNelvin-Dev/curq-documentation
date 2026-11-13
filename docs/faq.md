# CURQ Product FAQ

Frequently asked questions about the CURQ business management platform, modular architecture, multi-company and multi-website capabilities, security permissions, and third-party integrations.

---

## 1. What is CURQ and what business functions does it support?

CURQ is an integrated, modular enterprise management platform that unifies core business operations into a single system. It provides native applications for **CRM**, **Sales**, **Invoicing & Accounting**, **Website & eCommerce**, **Inventory & Purchasing**, **Projects & Timesheets**, **Team Discussions**, and **HR/Timeoff**. Because all modules share a unified PostgreSQL database, data flows seamlessly across departments without manual re-entry or custom connectors—for example, confirmed sales orders instantly update stock reservations and draft accounting entries.

---

## 2. How does CURQ's modular architecture work?

CURQ operates on a flexible modular framework where applications can be activated on demand. Organizations can begin with a single module (such as CRM or Invoicing) and progressively activate additional applications as operational requirements expand. When a new module is enabled, it automatically links with existing database records:
* Contacts created in **Website** forms immediately populate **CRM** pipelines.
* Confirmed **Sales** orders trigger pickings in **Inventory** and draft customer invoices in **Accounting**.
* Billable hours logged in **Timesheets** sync directly into linked customer contracts and invoices.

---

## 3. Does CURQ support multi-company, multi-website, and multi-currency operations?

Yes. CURQ natively supports complex organizational structures:
* **Multi-Company**: Maintain separate legal entities with dedicated charts of accounts, warehouses, journals, and bank accounts, while retaining centralized management and automated inter-company transactions.
* **Multi-Website**: Host and manage multiple independent public storefronts and branded websites from a single backend, with distinct domain routing, theme styling, and catalog visibility.
* **Multi-Currency**: Handle transactions in multiple foreign currencies with automated daily exchange rate updates and automatic foreign currency gain/loss accounting entries.

---

## 4. How are user access rights, security roles, and permissions managed?

Access control in CURQ is governed through role-based access management:
* **Role-Based Groups**: Administrators assign predefined access levels (such as *Internal User*, *Officer*, or *Administrator*) per application.
* **Granular Permissions**: Permissions control record creation, modification, export, and deletion privileges.
* **Record Rules & Domains**: Record-level security restricts access to data based on organizational parameters (such as company ID, sales team membership, or branch location), ensuring staff members only access records pertinent to their responsibilities.

---

## 5. How does CURQ integrate with third-party software and external services?

CURQ includes built-in integration capabilities and open API protocols:
* **APIs**: Standard REST, XML-RPC, and JSON-RPC endpoints allow bidirectional communication with external applications, mobile apps, and custom business portals.
* **Payment Gateways**: Pre-configured connectors for payment processors (such as Stripe, PayPal, and SEPA Direct Debit) support secure online checkout and automated payment reconciliation.
* **Logistics & Communication**: Direct integrations support parcel carriers (such as Sendcloud), transactional and marketing email servers (SMTP/IMAP), and SMS gateways.
* **Data Migration**: Built-in CSV and Excel import/export tools enable rapid bulk data ingestion and synchronization.

---

## Related Documentation

* [CURQ System Overview](Articles/00-overview.md)
* [System Security & Data Privacy](Articles/01-system-security-and-data-privacy.md)
* [User Roles & Permissions Setup](Articles/03-user-roles-and-permissions-setup.md)
* [Data Import & Export Guide](Articles/02-data-import-and-export-guide.md)
* [Multi-Currency & Localization Guide](Articles/05-multi-currency-and-localization-guide.md)
