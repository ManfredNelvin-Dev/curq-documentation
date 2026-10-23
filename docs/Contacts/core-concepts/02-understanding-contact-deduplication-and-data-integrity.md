# Core Concepts: Understanding Contact Deduplication and Data Integrity

Duplicate contacts are more than an address-book problem. In an integrated business system, customer records connect sales opportunities, quotations, invoices, deliveries, and communication history. When the same customer exists under multiple records, these relationships can become fragmented, making it harder for teams to maintain consistent information and understand the complete business relationship.

This article explains why duplicate contacts create operational problems, how contact merging differs from archiving, and why preserving relationships between contacts and business transactions matters in CURQ.

---

## The Business Problem: One Customer, Multiple Records

Imagine that a company named Acme Industries already exists in CURQ. A salesperson creates a customer record using the name Acme Industries Ltd., while another employee creates a second record as Acme Industrial.

Both records represent the same business, but CURQ may treat them as separate contacts until someone identifies and resolves the duplication. Over time, different transactions and communications may become associated with different records.

### 1. Fragmented Customer Information
When multiple records represent the same customer, employees may not know which record contains the most accurate or complete information.

For example:
* Sales quotations are associated with one contact.
* Previous orders and invoices are associated with another.
* Emails, meeting notes, and activities are spread across both records.

Employees may have to search multiple records to understand the customer's history. They may also create additional quotations or activities without realizing that another employee is already working with the same customer.

### 2. Inconsistent Business Decisions
Duplicate records can make it harder to evaluate a customer's overall relationship with the business.

If transaction history is split across several records, users may not see the complete picture when reviewing previous sales, outstanding balances, or ongoing opportunities.

This does not automatically mean that every duplicate causes a financial error. However, fragmented information increases the risk of incomplete reviews, inconsistent customer handling, and inaccurate reporting.

### 3. The Risk of Removing the Wrong Record
Deleting a duplicate may appear to be a simple cleanup operation. However, a contact can be connected to many other business records.

A contact associated with historical invoices, sales orders, or CRM opportunities is not just an isolated entry in an address book. Removing it without considering those relationships can affect access to related information or conflict with database restrictions.

The challenge is therefore twofold: identify duplicate records and resolve them without unnecessarily losing business context.

---

## Why Contact Records Are Connected to Business Data

CURQ's Contacts module is part of a wider business system. Contact records can be referenced by other applications, depending on the installed modules and how the system is configured.

A simplified view of these relationships is shown below:

```{mermaid}
flowchart LR
    C["Contact Record"]
    C --> S["`**Sales**
    Orders & Quotes`"]
    C --> CRM["`**CRM**
    Deals & Activities`"]
    C --> A["`**Accounting**
    Invoices & Bills`"]
    C --> I["`**Inventory**
    Shipments & Deliveries`"]
```

These relationships explain why contact cleanup requires more care than deleting a duplicate row from a spreadsheet.

The contact provides a common point of reference for business transactions. Maintaining that relationship helps users access relevant information and understand how a customer or supplier has interacted with the organization.

The exact relationships available depend on the modules installed and the records created in the system.

---

## How CURQ Addresses Duplicate Contacts

CURQ provides contact-management functionality that allows users to identify duplicate records and merge them when they represent the same person or organization.

The objective is to reduce unnecessary duplication while maintaining a usable, consistent set of contact records.

### 1. Identify Records That Represent the Same Entity
Duplicate identification begins with recognizing that different records may refer to the same real-world person or organization.

Users can compare information such as:
* Contact or company name.
* Email address and telephone number.
* Company affiliation and address.
* Existing transactions and communication history.

Similar names alone do not prove that two records are duplicates. Different branches, subsidiaries, or people within the same organization may legitimately require separate records. Users should therefore review the available information before merging contacts.

### 2. Merge Genuine Duplicates
When two or more records represent the same entity, merging can consolidate them into a selected surviving contact.

Conceptually, the process is:

```{mermaid}
flowchart LR
    subgraph BM ["Duplicate Records"]
        D1["`**Acme Industries**
        Quotes & Deals`"]
        D2["`**Acme Industrial**
        Invoices & Bills`"]
    end
    D1 --> M{"Merge"}
    D2 --> M
    M --> S["`**Consolidated Contact**
    All Transactions Linked`"]
```

The purpose of merging is to reduce duplicate contact entries and maintain a more coherent customer or supplier record.

The precise behavior of the merge operation—including which field values are retained, how related records are handled, and which information is transferred—depends on the implemented functionality. Users should review the resulting contact and verify important related records after merging.

For the step-by-step procedure, see [Task Guide: Merge Duplicate Contacts](../task-guides/03-merge-duplicate-contacts.md).

### 3. Archive Contacts That Are No Longer Active
Not every contact that should disappear from day-to-day work is a duplicate. A supplier may stop trading, a customer relationship may end, or an individual contact may no longer be active. In these situations, archiving may be more appropriate than merging.

| Action | Purpose | When to Use It |
| :--- | :--- | :--- |
| **Merge** | Resolve duplicate records representing the same entity | Two records describe the same customer, supplier, or person |
| **Archive** | Deactivate a record that should no longer be used in routine operations | A genuine contact is inactive but may still be relevant to historical transactions |

Archiving is conceptually different from deleting a contact. Whether an archived record remains accessible through particular searches, dropdowns, or historical views depends on the application's behavior.

For related contact-management tasks, see [Task Guide: Create and Manage Contacts](../task-guides/01-create-and-manage-contacts.md).

---

## How Deduplication Improves Data Integrity

Resolving duplicates supports several important business objectives:

### A More Complete Customer View
Reducing duplicate records makes it easier for employees to locate the intended contact and review the information associated with it. Where related transactions and communications are retained or correctly linked, users can work from a more coherent view of the relationship.

### More Consistent Reporting
When the same entity is represented by multiple records, reports grouped by contact can show fragmented results. Cleaning up genuine duplicates can reduce this fragmentation, although historical reporting may still depend on how transactions were recorded and how reports aggregate data.

### Safer Record Management
Understanding the difference between merging, archiving, and deleting helps users choose an appropriate action for each situation.

Because contacts may be referenced by business transactions, users should not assume that a record is safe to delete merely because it appears redundant. System restrictions, historical requirements, and related records should be considered before removal.

### Better Long-Term Data Quality
Deduplication is most effective when combined with consistent data-entry practices. Using clear naming conventions, maintaining accurate contact details, and reviewing records during imports can reduce the creation of unnecessary duplicates.

---

## An Example: Cleaning Up a Customer Relationship

Consider a business that has two records for the same customer.

The first record contains the customer's correct company name and contact details. The second contains an older email address and several historical interactions.

A careful cleanup process would be:
1. **Compare both records** to confirm that they represent the same customer.
2. **Review their contact details**, business relationships, and relevant transactions.
3. **Select the appropriate surviving record**.
4. **Use CURQ's merge functionality** to resolve the duplicate.
5. **Review the surviving record** and verify important related information.
6. **Correct the underlying data-entry process** if the duplication resulted from inconsistent naming or importing.

The goal is not simply to reduce the number of contacts. It is to maintain reliable information while preserving the business context that employees need.

---

## Summary: Business Problem and CURQ's Approach

| Business Challenge | Why It Matters | CURQ Approach |
| :--- | :--- | :--- |
| **Multiple records for one customer** | Information becomes fragmented | Identify and merge genuine duplicates |
| **Transactions associated with different records** | Employees may not see the complete relationship | Review related records and verify merge results |
| **Inactive contacts remain in routine workflows** | Users may select outdated records | Archive contacts when deactivation is appropriate |
| **Inconsistent contact information** | Duplicate creation and reporting fragmentation become more likely | Maintain consistent data-entry practices and periodically review records |

Contact deduplication is ultimately a data-quality practice, not just an administrative cleanup task. By identifying genuine duplicates, choosing between merging and archiving, and checking the outcome, organizations can maintain more reliable contact data and reduce confusion across connected business workflows.

---

## Related Documentation

* [Core Concepts: Understanding Unified Partner Architecture and Hierarchies](./01-understanding-unified-partner-architecture-and-hierarchies.md)
* [Task Guide: Merge Duplicate Contacts](../task-guides/03-merge-duplicate-contacts.md)
* [Task Guide: Perform Bulk Actions on Contacts](../task-guides/04-perform-bulk-actions.md)
* [Settings and Fields: Contact Form Field Definitions](../settings-and-fields/01-contact-form-field-definitions.md)
