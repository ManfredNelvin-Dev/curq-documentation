# Understanding Unified Business Communication and Chatter Architecture

This document explains the architectural principles, information topology, and business philosophy governing communication in CURQ, contrasting the common operational failures of fragmented third-party messaging tools with CURQ's unified chatter architecture.

---

## The Business Problem: Fragmented Communication and Context Disconnection

In modern business environments, employees rely heavily on digital communication to manage daily operations. However, traditional enterprise architectures almost universally separate the software where work is executed (ERP, CRM, Invoicing) from the software where work is discussed (email clients, standalone instant messaging apps like Slack or Microsoft Teams, and personal phone chats):

```{mermaid}
flowchart TD
    subgraph "Legacy Fragmented Operations"
        E["`**External Email Client**
        Scattered Customer Negotiations`"]
        S["`**Standalone Chat App**
        Internal Whispers & Lost Notes`"]
        ERP["`**ERP / CRM Database**
        Silent Records Without Context`"]
    end
    E -.->|"Broken Links"| ERP
    S -.->|"Lost Context"| ERP
```

This structural division introduces severe operational vulnerabilities, financial blind spots, and communication overhead:

## 1. Disjointed Transactional History and Lost Operational Context
When a client contacts a sales representative to request an urgent price concession or custom delivery timeline, the conversation typically unfolds in a private email thread or an ad-hoc direct chat. When the order is finally entered into the ERP system, the rationale behind the special discount or customized fulfillment terms remains trapped in the salesperson's private inbox.

* **Information Asymmetry**: Colleagues in warehousing, accounting, and order fulfillment see only raw data entries (such as a discounted line item or an unusual delivery destination) without knowing why those terms were agreed upon.
* **Employee Turnover Risk**: When account managers leave an organization, their private email boxes and isolated chat histories are archived or deleted. The institutional memory of long-standing customer relationships, previous verbal commitments, and past resolutions evaporates overnight.

## 2. Lack of Verifiable Commercial Audit Trails
Commercial transactions frequently encounter post-sale disputes—such as disagreements over billable hours, disputed invoice line items, or unacknowledged shipping delays.

* In segregated software stacks, reconstructing the timeline of events requires cross-referencing email timestamps, searching chat logs, and interviewing multiple team members.
* Critical internal decisions (such as a sales manager approving a risky credit extension) are often documented only as unrecorded verbal agreements or unlinked chat messages, creating substantial legal and financial exposure.

## 3. Notification Fatigue and Context Switching
Operating across multiple independent messaging tools forces knowledge workers into a state of continuous context switching. Employees spend significant portions of their workday toggling between spreadsheets, email clients, and external chat windows, copying and pasting invoice numbers, lead titles, and customer references back and forth simply to establish basic conversation context.

---

## How CURQ Solves It: The Unified Communication Fabric

To eliminate information fragmentation and communication blind spots, CURQ embeds real-time messaging directly into the foundational data model of the business suite.

```{mermaid}
flowchart LR
    subgraph "Unified CURQ Architecture"
        D["`**Discuss Workspace**
        Channels & Direct Chats`"] <===> R["`**Record Chatter Engine**
        Sales • CRM • Invoicing • Inventory`"]
        R <===> I["`**Central Inbox**
        Prioritized Action Stream`"]
    end
```

## 1. The Record Chatter Architecture
Rather than treating communication as a separate, external layer, CURQ binds conversation threads directly to the specific business records they discuss:

* **Living Transaction Records**: Every commercial entity—including CRM Opportunities, Customer Contacts, Sales Quotations, Delivery Orders, Vendor Bills, and Helpdesk Tickets—possesses a built-in communication ledger known as the **Chatter**.
* **Zero Ambiguity**: When an employee comments on a Quotation, the context is inherent and immutable. There is no need to copy customer names, paste transaction numbers, or explain background parameters. The conversation is anchored permanently to the exact record, complete with version history and timestamped audit logs.
* **360-Degree Operational Visibility**: Anyone with authorized access to a business record can open its Chatter pane and review the entire historical transcript of customer interactions, internal decisions, and status transitions from the day the record was created.

---

## Architectural Segregation: Internal Notes vs. Customer Messages

A critical requirement of enterprise communication is the strict demarcation between internal collaboration and customer-facing correspondence. CURQ enforces this architectural boundary directly inside the Chatter engine:

```{mermaid}
flowchart TD
    subgraph "Chatter Permission Boundaries"
        N["`**Log Note (Internal)**
        • Confidential to Coworkers
        • Yellow/Neutral Visual Indicator
        • Never dispatched to external contacts
        • Ideal for margin debates & warehouse checks`"]
        M["`**Send Message (External & Internal)**
        • Dispatched via Email to Customer
        • Visible to External Portal Users
        • Timestamped in Document Audit Stream
        • Ideal for quotes, tracking links & invoices`"]
    end
```

## 1. Log Note: Private Operational Alignment
Internal notes provide a safe space for internal teams to debate pricing margins, assess customer creditworthiness, flag warehouse shortages, or seek management approvals. 
* Notes are visible exclusively to internal system users.
* External customers and portal users are completely blind to logged notes.
* Tagging a coworker with an `@mention` inside an internal note notifies them immediately without exposing internal remarks to the customer.

## 2. Send Message: Customer Engagement with Automated Email Gateway
When a team member sends a message from the Chatter, CURQ automatically formats the content into an outbound email delivered to all external followers linked to the transaction.
* When the customer replies to that email from their standard mail client (e.g., Gmail or Outlook), the CURQ Mailgate intercepts the incoming message, matches the cryptographic message header to the origin record, and appends the reply directly into the record's Chatter stream.
* The entire bilateral correspondence remains organized on the document without requiring sales reps to manage manual email filing or forwarding rules.

---

## The Central Inbox: Triage Without Notification Chaos

Traditional messaging systems rely on aggressive push notifications that fragment attention and interrupt productive work. CURQ adopts an inbox-centric notification model designed to balance real-time responsiveness with deep focus:

## 1. Pull-Oriented Workflow Triage
* Notifications generated by `@mentions`, followed document changes, and direct inquiries flow into a single, prioritized **Inbox**.
* Users process notifications as discrete actionable items: reviewing context, replying directly from the inbox feed, and marking items as done.
* Once marked as read, notifications move into **History**, preserving a zero-inbox state that eliminates anxiety while preventing critical tasks from falling through the cracks.

## 2. User-Driven Delivery Modes
CURQ accommodates varying operational habits by allowing employees to select their notification delivery channel:
* **Platform-Centric Employees (Handle in Odoo)**: Keeps all communications strictly inside the web platform, eliminating internal corporate email overhead.
* **Mobile / Occasional Users (Handle by Emails)**: Dispatches updates to corporate inboxes for executives or field personnel who interact with the system infrequently.

---

### Related Documentation
* [Understanding Channels, Collaboration, and WebRTC Architecture](02-understanding-channels-collaboration-and-webrtc-architecture.md)
* [Collaborate Using Record Chatter](../task-guides/09-collaborate-using-record-chatter.md)
* [Configure Notification Preferences and Do-Not-Disturb](../task-guides/05-configure-notification-preferences-and-dnd.md)
* [Notifications and User Preferences Specifications](../settings-and-fields/02-notifications-and-user-preferences-specifications.md)
