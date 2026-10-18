# Contacts

Manage companies, individual contacts, branch addresses, banking details, and geographic localization in a single, unified address book for CURQ 18.

---

## Overview and Core Architecture

The **Contacts** application in CURQ 18 serves as the single source of truth for all business relationship data. Instead of maintaining separate database tables for customers, vendors, branches, employees, and logistics partners, CURQ utilizes a unified partner model. Every transaction across Sales, Purchase, CRM, Inventory, and Invoicing anchors directly back to this centralized address registry.

```
┌────────────────────────────────────────────────────────┐
│               Company: Acme Corporation                │
│  (Holds: Legal Name, Tax ID, Default Pricelist, Terms) │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
            ▼                                ▼
┌───────────────────────────┐   ┌───────────────────────────┐
│ Individual: Alice Smith   │   │ Delivery Address:         │
│ (Purchasing Manager)      │   │ Acme Warehouse East       │
│ • Direct Phone & Email    │   │ • Physical Street Address │
│ • Inherits Company Terms  │   │ • Dispatched Deliveries   │
└───────────────────────────┘   └───────────────────────────┘
```

---

## Key Functional Capabilities

### 1. Unified Partner Architecture & Hierarchies
* **Single Address Book**: Eliminates data silos by storing all commercial counterparties (clients, suppliers, subcontractors, service providers) in one standardized structure.
* **Company vs. Individual Roles**:
  * *Company Records*: Represent legal entities holding legal corporate names, VAT/tax IDs, commercial credit terms, and consolidated financial balances.
  * *Individual Contacts*: Represent real people (buyers, department heads, accounts payable officers). When linked to a company, an individual inherits the company's commercial rules while retaining distinct job titles, direct telephone numbers, and email addresses.
* **Standalone Individuals**: Independent contractors, freelancers, and B2C consumers operate as independent commercial entities without a parent organization.

### 2. Multi-Address Routing & Commercial Logistics
* **Decoupled Address Types**: Attach multiple specialized address records to a single parent company:
  * *Invoice Address*: Directs formal billing documents, tax identifiers, and Peppol electronic invoices to corporate accounting.
  * *Delivery Address*: Directs warehouse pickings, shipping labels, and carrier dispatch to regional distribution facilities, manufacturing plants, or retail job sites.
  * *Other Address*: Tracks secondary offices, showrooms, and satellite branches.
* **Automated Order Splitting**: Sales and purchase orders automatically split physical logistics to branch delivery locations while posting accounting entries to central corporate headquarters.

### 3. Data Integrity & Deduplication Governance
* **Deduplication & Merge Engine**: Safeguards database hygiene by detecting and merging duplicate contact records.
* **Foreign Key Preservation**: When merging duplicate partners, the engine automatically reassigns all foreign key pointers—including open quotations, confirmed sales orders, vendor bills, posted ledger items, CRM deals, and scheduled activities—to the surviving destination contact without data corruption or orphan records.
* **Audit Logging**: Full contact revision history, outbound emails, and customer portal activities remain permanently tracked in the Chatter audit feed.

### 4. Banking, Security & Verification
* **Partner Bank Registries**: Store multiple IBAN, BIC/SWIFT, and domestic routing numbers for each commercial counterparty.
* **Bank Account Verification**: Protect against wire fraud and vendor email compromise (BEC) attacks through dedicated security verification workflows. Unverified bank details trigger visual warning badges before vendor disbursements can be authorized.

### 5. Fiscal Localization & Commercial Restrictions
* **Automatic Tax Mapping (Fiscal Positions)**: Dynamically adapt transaction taxes based on customer geographic location (domestic VAT, intra-community B2B reverse charge, export zero-rating, or US state tax jurisdictions).
* **Commercial Warning & Blocking System**: Set customer-specific alerts on the **Internal Notes** tab. Choose between informative warnings (non-blocking notification banners) or hard blocking messages that prevent sales reps from creating or confirming orders for delinquent or high-risk accounts.
* **Geographic Registries**: Centralized management of countries, states, provinces, and city ZIP code auto-fill definitions.

---

### Quick Actions

| | |
| --- | --- |
| [**Create and Manage Contacts**](./how-to/01-create-and-manage-contacts.md) Go directly to the practical steps for adding companies, linking individuals, managing branch addresses, and setting order warnings. | [**Set Up Companies & Branch Locations**](./tutorials/02-set-up-an-enterprise-customer-with-branch-locations.md) Explore how companies, individual contacts, delivery branches, and invoice addresses work together in a unified address book. |
| [**Unified Architecture & Contact Merges**](./explanation/01-understanding-unified-partner-architecture-and-hierarchies.md) Understand the unified partner architecture, parent-child commercial inheritance, and safe contact deduplication. | [**Configure Geographic Data & Tags**](./how-to/09-configure-geographic-localization.md) Set up contact tags, titles, industry sectors, partner bank accounts, country registries, and geographic trade zones. |
