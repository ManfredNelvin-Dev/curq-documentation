# Explanation: Understanding Unified Partner Architecture and Hierarchies

This document explains the architectural principles, data models, and business logic governing partner management in CURQ 18.

---

### The Unified Partner Model

In traditional business software, systems frequently maintain separate databases or tables for customers, vendors, employees, and subcontractors. While this approach appears intuitive on the surface, it breaks down in modern enterprise operations:

* **Dual-Role Relationships**: A vendor supplying raw materials may also purchase finished goods or consulting services from your company. In segregated systems, this requires duplicate records, fracturing financial history, credit limits, and contact communication.
* **Internal Entities**: Employees often act as expense claimants, internal sales representatives, and points of contact for corporate accounts.
* **Unified Communications**: A single interaction history (emails, meetings, calls, and internal memos) is required regardless of whether an interaction pertains to a sales deal, a purchasing agreement, or an accounting clarification.

To solve this, CURQ unifies all business actors into a single architectural entity: the **Partner** model. Whether a partner is a customer, vendor, or internal user is determined by their relational transaction links (such as whether they hold sales orders, vendor bills, or user credentials), rather than an immutable database flag.

---

### Companies vs. Individuals

The foundational distinction within the partner model is the structural divide between **Legal Business Entities** (`Company`) and **Physical People** (`Individual`):

```
       ┌────────────────────────────────────────────────────────┐
       │                Parent Company Record                   │
       │       (Legal Entity, Tax ID, Fiscal Position)          │
       └──────────────────────────┬─────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Individual Person│    │ Delivery Address │    │ Invoice Address  │
│(Employee, Title, │    │ (Warehouse Dock, │    │(Accounts Payable,│
│ Direct Email/Tel)│    │  Shipping Rules) │    │  Billing Email)  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

1. **Company Records as Fiscal Anchors**:
   A Company record represents the legal personhood of the business. It holds the statutory registration numbers (Tax ID, SIRET, EIN), primary corporate address, default fiscal tax positions, credit limits, and standard payment terms.

2. **Individual Contacts as Operational Nodes**:
   Individual records represent living people. When linked to a parent company, an individual inherits the company's fiscal position, payment terms, and geographic address by default, but retains personal communication channels (direct email, mobile telephone, professional title, and personal calendar).

---

### The Multi-Address Routing Architecture

In commercial operations, physical goods and legal liabilities rarely flow to the same destination:
* Invoices must be submitted to an Accounts Payable team at corporate headquarters or an outsourced billing center.
* Deliveries must be dispatched to specific regional warehouses, job sites, or distribution docks with localized receiving hours.

If a system uses a single address field, businesses frequently experience:
* **Misdirected Deliveries**: Carriers delivering raw materials to an administrative office in Manhattan instead of an assembly plant in Dallas.
* **Disputed Invoices**: Bills sent to receiving dock clerks where they sit unapproved, resulting in payment delays and credit holds.

CURQ resolves this through architectural address specialization:
* **Invoice Address**: Relational foreign keys on accounting documents anchor specifically to this address record. Automated email dispatches, PDF invoices, and Peppol electronic EDI streams are sent directly to this destination.
* **Delivery Address**: Relational foreign keys on warehouse delivery slips and shipment manifests anchor to this location. Freight carriers receive dock hours, warehouse site notes, and local site phone numbers.

When a sales order or vendor bill is generated, CURQ's business logic inspects the parent entity's address hierarchy and automatically populates the appropriate destination records, decoupling physical logistics from accounting workflows.

---

### Configuration Inheritance Mechanics

To eliminate redundant administrative data entry across multi-contact accounts, CURQ employs a top-down inheritance model:

* **Pricelists and Currency**: Setting a customized wholesale pricelist or specific settlement currency on the parent company cascades to all linked sub-contacts and branch locations automatically.
* **Accounting Controls**: Tax identification numbers, fiscal positions, and accounts receivable balances are evaluated at the parent company tier. Transactions recorded against linked employees automatically roll up into the parent company’s financial statements.
* **Address Synchronization**: If the parent company relocates its primary corporate headquarters, all linked employees without explicit custom addresses update automatically to reflect the new headquarters location.

---

### Related Documentation
* [Getting Started: Create Your First Contact](../tutorials/01-create-your-first-contact.md)
* [How-To: Create and Manage Contacts](../how-to/01-create-and-manage-contacts.md)
* [Reference: Contact Form Field Definitions](../reference/01-contact-form-field-definitions.md)

