# Core Concepts: Understanding Unified Partner Architecture and Hierarchies

This document explains the architectural principles, data models, and business logic governing partner management in CURQ, contrasting the common business challenges of legacy systems with CURQ's unified solution.

---

## The Business Problem: Fragmented Systems & Address Desynchronization

In enterprise operations, managing business relationships across multiple departments—sales, procurement, warehousing, and accounting—presents fundamental structural challenges. Traditional ERP and CRM software suites typically maintain separate, isolated databases or tables for customers, vendors, employees, and subcontractors. While this separation appears intuitive initially, it creates severe operational bottlenecks and financial risks:

### 1. The Breakdown of Siloed Customer and Vendor Databases
* **Dual-Role Commercial Counterparties**: Many modern business partners act simultaneously as both suppliers and buyers. For instance, a manufacturing company may buy raw materials from a vendor while selling specialized consulting services or recycled scrap materials back to that same vendor. In segregated systems, this requires creating two completely unconnected records: a "Customer" entry and a "Vendor" entry.
  * **Fractured Transactional Visibility**: Commercial teams see only outgoing sales, while purchasing teams see only incoming purchases. Neither team has a 360-degree view of the relationship.
  * **Disjointed Financial Netting**: Accounts receivable and accounts payable balances remain isolated. Finance teams cannot easily reconcile or offset mutual debts, leading to missed cash flow netting opportunities and awkward credit holds on valuable suppliers.
* **Internal Entities and Employee Expense Chaos**: Employees frequently act as expense claimants, internal sales representatives, project managers, and authorized buyers. When employee profiles are segregated from the commercial address book, tracking expense reimbursements or attributing sales commissions requires brittle cross-system synchronization.
* **Scattered Communication History**: A single interaction history (emails, meeting notes, call logs, and contracts) is essential for cohesive account management. In siloed architectures, sales communication lives in the CRM, vendor dispute notes live in procurement, and payment reminders live in accounting, leaving teams blind to recent interactions.

### 2. Multi-Site Logistics and Billing Desynchronization
In real-world commercial engagements, legal liability and physical goods rarely flow to the same destination:
* Invoices and formal tax notices must be directed to an Accounts Payable department at corporate headquarters or a centralized financial shared-services center.
* Physical deliveries must be dispatched to regional fulfillment centers, manufacturing assembly plants, or temporary job sites equipped with specific loading docks, receiving hours, and freight requirements.

```{mermaid}
flowchart LR
    A["`**Customer: Acme Corp**
    Single Corporate Address`"] -->|"Single Address Used"| B["`❌ Freight shipped to 34th floor!
    ❌ Invoices lost at warehouse dock!`"]
```

When software uses a simplistic single-address model, companies suffer continuous logistical failures:
* **Misdirected Deliveries**: Carriers deliver bulk freight to executive offices rather than industrial receiving docks, generating costly carrier re-consignment fees, project delays, and damaged goods.
* **Disputed and Delayed Invoices**: Billing documents delivered to warehouse docks sit unacknowledged, triggering supplier credit holds, vendor payment disputes, and lost early-payment discounts.

### 3. Redundant Data Entry and Configuration Drift
Enterprise customers operate extensive corporate networks comprising holding companies, regional subsidiaries, retail storefronts, and independent procurement officers. In legacy systems, setting up a new branch often requires manually re-entering payment terms, credit limits, tax identification numbers, and custom pricelists. This repetitive data entry leads to configuration drift, where different branches of the same corporate client receive inconsistent pricing or conflicting credit terms.

---

## How CURQ Solves It: The Unified Partner Model

To eliminate data silos, commercial blind spots, and logistics failures, CURQ unifies all business actors into a single architectural entity: the **Partner** model.

```{mermaid}
flowchart TD
    subgraph PM ["CURQ Partner Model (Single Architectural Entity)"]
        direction LR
        T["`**Transactions**
        • Sales Orders
        • Vendor Bills
        • CRM Pipeline`"]
        L["`**Logistics**
        • Delivery Docks
        • Shipping Notes
        • Receiving Hours`"]
        F["`**Financials**
        • Consolidated Invoicing
        • Automated Fiscal Tax Maps
        • Unified Credit Limits`"]
    end
```

### 1. Single Architectural Registry with Dynamic Relational Roles
Rather than relying on static database flags or separate tables, CURQ determines a partner's role through its **relational transaction links**:
* If a partner is linked to a sales order or CRM deal, the partner automatically functions as a customer.
* If that same partner is linked to a purchase order or vendor bill, they function as a vendor.
* If an employee files an expense report or signs into the system, their user profile anchors back to their partner record.

This architectural unification provides immediate operational benefits:
* **360-Degree Partner Dashboard**: Opening a partner record displays their complete transaction history across all departments—total revenue generated, vendor bills outstanding, open quotations, active projects, and past communications—on a single interactive dashboard.
* **Unified Financial Reconciliation**: Accounting teams can view total open receivables alongside open payables for the same entity, enabling bilateral debt netting and accurate risk assessment.
* **Centralized Chatter Audit Stream**: All emails, quotes, notes, and activity reminders roll into a single immutable Chatter feed, ensuring every department is informed of past correspondence.

---

## How CURQ Solves It: Companies vs. Individuals

CURQ structures relationships through an intuitive parent-child hierarchy that separates **Legal Business Entities** (`Company`) from **Physical People** (`Individual`):

```{mermaid}
flowchart LR
    P["`**Parent Company Record**
    Legal Entity • Tax ID`"]
    P --> I["`**Individual Person**
    Employee • Direct Coordinates`"]
    P --> D["`**Delivery Address**
    Warehouse Dock • Freight`"]
    P --> INV["`**Invoice Address**
    Accounts Payable • Billing`"]
```

### 1. Company Records as Statutory & Fiscal Anchors
A Company record represents the legal personhood of the organization. It holds statutory registration numbers (Tax ID, VAT number, corporate registration), commercial credit limits, default fiscal tax positions, and negotiated contract terms.

### 2. Individual Contacts as Operational Nodes
Individual records represent actual people (such as purchasing managers, accounting clerks, or sales executives). When attached to a parent company:
* **Inherited Commercial Rules**: The individual automatically inherits the company's fiscal position, payment terms, and negotiated pricelist.
* **Distinct Personal Coordinates**: The individual maintains their own direct telephone extension, verified email address, job title, and notification preferences.
* **B2C Independence**: Independent contractors, freelancers, and retail consumers can operate as standalone individuals without being attached to any corporate entity.

---

## How CURQ Solves It: Specialized Multi-Address Routing

To solve the friction between physical logistics and legal billing, CURQ decouples addresses into specialized operational records attached directly to the parent company:

```{mermaid}
flowchart LR
    P["Corporate Parent Account"]
    P --> D["`**Delivery Address**
    Regional Warehouse Dock`"] --> PS["Packing Slip"]
    P --> I["`**Invoice Address**
    Accounts Payable Dept`"] --> CI["Customer Invoice"]
```

* **Invoice Address**: Anchors financial and legal documents. Automated PDF invoices, Peppol electronic EDI streams, and billing reminders are dispatched directly to the accounts payable email address.
* **Delivery Address**: Anchors warehouse operations and transport logistics. Delivery orders, freight waybills, carrier shipping labels, and picking slips populate this address, including specific delivery notes and localized dock hours.
* **Other Address**: Represents secondary branch locations, regional showrooms, retail sites, or training facilities.

### Automated Order Splitting
When a commercial representative confirms a sales order or purchase order, CURQ's business logic automatically inspects the customer's partner hierarchy:
1. Physical goods shipments are routed to the specified **Delivery Address**.
2. Accounting entries and formal tax invoices are addressed to the specified **Invoice Address**.

This automation completely eliminates carrier re-routing costs and ensures invoices reach accounting promptly.

---

## How CURQ Solves It: Top-Down Configuration Inheritance

To eliminate duplicate administrative setup across enterprise accounts with dozens of subsidiary locations and contacts, CURQ applies automated top-down configuration inheritance:

* **Pricelist & Currency Cascading**: Assigning a wholesale pricelist or specific currency to the parent company automatically applies that pricing structure across all linked employee contacts and delivery locations.
* **Fiscal Position & Tax Mapping**: Domestic or international tax rules configured on the parent record dynamically govern all child branches.
* **Address Synchronization**: When a corporate headquarters updates its primary corporate address, all linked individual employees without custom override addresses update automatically, maintaining pristine database hygiene without manual overhead.

---

## Summary: Business Problem vs. CURQ Solution

| Business Challenge | Traditional Legacy Approach | How CURQ Solves It |
| :--- | :--- | :--- |
| **Dual-Role Counterparties** | Separate customer and vendor tables create duplicate records, isolated credit limits, and fragmented balances. | Unified Partner model allows the same record to hold both sales orders and vendor bills, providing a single 360-degree ledger. |
| **Logistics Desynchronization** | Single address field forces shipping and billing to the same location, sending freight to offices or invoices to docks. | Dedicated address types (Delivery, Invoice, Other) automatically route warehouse pickings and accounting invoices to distinct locations. |
| **Administrative Redundancy** | Payment terms, pricelists, and tax positions must be manually configured on every single employee and branch contact. | Top-down inheritance cascades credit terms, wholesale pricelists, and fiscal positions from the parent company to all linked records. |
| **Disjointed Communication** | Emails and internal notes are scattered across departmental silos, leaving sales, billing, and support out of sync. | Centralized Chatter feed consolidates all commercial correspondence, quotes, and audit history onto the partner's unified timeline. |

---

## Related Documentation

* [Core Concepts: Understanding Contact Deduplication and Data Integrity](./02-understanding-contact-deduplication-and-data-integrity.md)
* [Getting Started: Overview & Create Your First Contact](../getting-started/01-create-your-first-contact.md)
* [Task Guide: Create and Manage Contacts](../task-guides/01-create-and-manage-contacts.md)
* [Settings and Fields: Contact Form Field Definitions](../settings-and-fields/01-contact-form-field-definitions.md)
