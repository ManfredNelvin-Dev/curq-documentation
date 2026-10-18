# Explanation: Understanding Contact Deduplication and Data Integrity

This document explains the data architecture, relational database dynamics, and governance principles behind contact deduplication and merges in CURQ 18.

---

### Why Contact Duplication Occurs

In enterprise environments, duplicate contact records are an inevitable byproduct of multi-channel operations:
* Multiple sales representatives independently engage different departments of the same prospective client.
* Inbound website contact forms, newsletter sign-ups, and e-commerce orders register slightly different spelling variations (e.g., `Acme Corp` vs. `Acme Corporation`, or `Robert Vance` vs. `Bob Vance`).
* Legacy CRM imports merge disparate customer datasets with inconsistent naming conventions.

When duplicates accumulate, business operations suffer:
* **Fragmented Transaction History**: Sales orders are linked to one card, while accounting invoices reside on another, obscuring customer lifetime value and credit standing.
* **Conflicting Communication**: Sales reps may reach out to the same contact with conflicting messaging.
* **Fragmented Reporting**: Revenue analytics and pipeline forecasts treat the duplicates as separate entities, distorting business intelligence.

---

### Relational Integrity and the Prohibition of Deletion

In standard spreadsheets, removing a duplicate entry is a simple row deletion. In an integrated Enterprise Resource Planning (ERP) database, however, contacts do not exist in isolation:

```
                          ┌───────────────────────┐
                          │  Contact Record (ID)  │
                          └───────────┬───────────┘
                                      │
        ┌──────────────────┬──────────┴──────────┬──────────────────┐
        ▼                  ▼                     ▼                  ▼
┌──────────────┐   ┌──────────────┐       ┌──────────────┐   ┌──────────────┐
│ Sales Orders │   │Vendor Bills &│       │ Stock Moves  │   │ Audit Trail  │
│  & Quotes    │   │   Invoices   │       │ & Logistics  │   │   & Notes    │
└──────────────┘   └──────────────┘       └──────────────┘   └──────────────┘
```

A partner record serves as a primary foreign key across dozens of transactional areas:
* Financial ledgers (customer invoices, vendor bills, and payment receipts)
* Inventory logistics (delivery slips and warehouse stock moves)
* Sales pipelines (CRM leads, pipeline opportunities, and confirmed sales orders)
* Historical audit logs (chatter messages and scheduled activities)

#### Why Deletion is Prohibited
Statutory tax laws and financial compliance standards (such as GAAP, IFRS, and SOX) mandate that posted accounting entries remain immutable. If the system permitted the hard deletion of a contact record that has been referenced in a posted invoice or delivery slip, relational foreign keys would break, corrupting the general ledger and invalidating historical audit trails.

CURQ therefore strictly enforces database integrity: **any partner record linked to posted ledger movements cannot be deleted**.

---

### The Mechanics of Database Merging

To eliminate duplicate records while strictly preserving statutory compliance and transactional history, CURQ utilizes a **pointer-reassignment merge engine**.

When multiple duplicate records are merged into a chosen Destination Master Contact, the database executes an atomic transaction that:

1. **Re-anchors Foreign Keys**:
   The engine iterates across all relational tables containing foreign keys referencing the duplicate partner IDs. Every instance of partner references in sales orders, purchase orders, posted invoices, payment vouchers, delivery pickings, and project tasks is updated to point directly to the destination master partner's ID.

2. **Unifies Audit and Communication Logs**:
   The message chatter logs, followers, attached file documents, and scheduled activities from all merged cards are transferred onto the surviving record's timeline in chronological sequence.

3. **Consolidates Secondary Coordinates**:
   Secondary email addresses, mobile numbers, and bank account associations are aggregated onto the destination master profile, ensuring future incoming messages or payments resolve accurately.

4. **Removes the Redundant Shell**:
   Because all foreign key references have been safely reassigned, the remaining empty contact records can be deleted from the database without violating relational constraints or losing a single transaction.

---

### Data Governance: Archiving vs. Merging

CURQ provides two complementary strategies for managing retired or redundant partner data:

| Strategy | Primary Mechanism | Best Practical Use Case |
| :--- | :--- | :--- |
| **Merging** | Reassigns all foreign keys to a single master record; removes duplicate records. | Resolving genuine accidental duplicates (e.g., two entries representing the exact same corporate entity or person). |
| **Archiving** | Sets the `active` flag to `False`; hides record from search lookups while keeping relations intact. | Retiring obsolete, bankrupt, or inactive partners where the record is not a duplicate, but operations with them have ceased. |

---

### Related Documentation
* [How-To: Merge Duplicate Contacts](../how-to/03-merge-duplicate-contacts.md)
* [How-To: Perform Bulk Actions on Contacts](../how-to/04-perform-bulk-actions.md)
* [How-To: Search, Filter, and Group Contacts](../how-to/02-search-filter-and-group-contacts.md)

