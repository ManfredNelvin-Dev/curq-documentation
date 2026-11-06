# Helpdesk Ticket and Register Field Definitions

This document provides a comprehensive data dictionary for all header fields, categorization attributes, tracking timestamps, and related records on the CURQ Helpdesk Ticket form and Ticket Register list view.

---

## 1. Ticket Register List View Columns

The primary register at **Helpdesk > Tickets** displays incoming and active customer inquiries across ten default columns:

| Column Name | Description |
| :--- | :--- |
| **Priority** | Star-based urgency indicator *(0 to 3 stars)* signifying resolution criticality: Normal *(0 stars)*, Low *(1 star)*, Medium *(2 stars)*, or High / Urgent *(3 stars)*. |
| **Ticket number** | Unique sequential identifier governed by prefix rules *(e.g., `HT00065`)*, automatically assigned upon saving a new ticket. |
| **Title** | Concise summary describing the client issue or support request *(e.g., `Unable to access cloud hosting dashboard`)*. |
| **Partner Name** | The customer company or individual contact associated with the support request *(e.g., `Acme Technologies`)*. |
| **Assigned user** | Internal support specialist or account engineer responsible for handling and resolving the ticket. |
| **Project** | Associated operational project when the support ticket relates to custom software, professional services, or implementation deliverables *(e.g., `Development`)*. |
| **Tags** | Custom organizational labels applied for fast categorization, filtering, and cross-team routing. |
| **Created on** | Exact system timestamp when the support ticket was logged into CURQ. |
| **Last Stage Update** | Date and time when the ticket most recently transitioned between lifecycle stages. |
| **Stage** | Current operational lifecycle stage *(e.g., `New`, `In Progress`, `Awaiting`, or `Closed`)*. |

---

## 2. Ticket Form Header and Classification Field Definitions

The main ticket editing form captures core technical, customer, and internal routing parameters:

### 2.1 Identification and General Routing Fields

| Field Name | Description |
| :--- | :--- |
| **Ticket Title** | Primary operational subject line identifying the problem or inquiry. |
| **Team** | Designated functional support unit handling the ticket *(e.g., `Customer Care`, `Technical Support`, or `Billing Support`)*. |
| **Assigned user** | Support agent actively investigating, diagnosing, or escalating the ticket. |
| **Priority** | Visual star rating determining queue ranking and SLA response targets. |
| **Created on** | Automatic audit timestamp marking ticket intake. |
| **Channel** | Communication medium through which the inquiry arrived *(e.g., `Email`, `Website Form`, `Phone`, or `Direct Entry`)*. |
| **Customer Rating** | Customer satisfaction tracking rule: `Rating when changing stage` (dispatches automatic satisfaction survey on target stage moves) or `No rating`. |

### 2.2 Counterparty and Project Linkage Fields

| Field Name | Description |
| :--- | :--- |
| **Contact** | Specific individual contact person submitting the request from the partner organization. |
| **Partner Name** | Formal customer account or corporate debtor profile *(e.g., `Acme Technologies`)*. |
| **Email** | Validated email address used for automated email correspondence and notifications *(e.g., `info@acmetech.com`)*. |
| **Project** | Linked project workspace in CURQ Projects for coordinating development or professional service tasks. |
| **Task** | Specific project task tied to this ticket when remediation requires code changes or project deliverables. |
| **Milestone** | Contractual project phase or scheduled sprint milestone tied to the remediation effort. |
| **Category** | Technical classification classifying the nature of the issue *(e.g., `Bug`, `Feature Request`, `Billing`, `Hardware`)*. |
| **Tags** | Keyword labels used for search filtering and multi-team reporting. |
| **Sequence** | Numerical priority ordering value used to rank tickets within the same operational stage *(defaults to `10`)*. |

---

## 3. Tab Section Field Definitions

### 3.1 Description Tab

The **Description** tab contains the rich-text incident log, customer transcript, or diagnostic reproduction steps.

| Field Name | Description |
| :--- | :--- |
| **Description** | Detailed body text documenting the full technical context, error messages, user environment, and reproduction steps. |

### 3.2 Other Information Tab

The **Other Information** tab maintains immutable SLA and lifecycle audit markers:

| Field Name | Description |
| :--- | :--- |
| **Last Stage Update** | Immutable timestamp recording when the ticket most recently changed stage. |
| **Assigned Date** | Timestamp recording when the ticket was first allocated to an internal agent. |
| **Closed Date** | Final audit timestamp recorded when the ticket reaches a terminal solved or closed stage. |

### 3.3 Related Tickets Tab

The **Related Tickets** tab cross-links duplicate issues, child inquiries, or related incidents:

| Column Name | Description |
| :--- | :--- |
| **Created on** | Intake timestamp of the linked reference ticket. |
| **Ticket number** | Sequential ticket identifier of the associated ticket. |
| **Title** | Summary title of the associated support record. |
| **Contact** | Customer contact person associated with the linked ticket. |

---

## 4. Helpdesk Dashboard Metrics Data Dictionary

Located at **Helpdesk > Dashboard**, the dashboard visualizes operational queue metrics and team workload cards:

| Metric / Control | Description |
| :--- | :--- |
| **Open Tickets without team** | Triage warning counter displaying the volume of open tickets lacking an assigned support team. |
| **Open Tickets** | Operational workload counter displaying all active, unresolved tickets across the organization *(e.g., `1`)*. |
| **Team Title** | Header identifier of the functional support department *(e.g., `Development Team`)*. |
| **To Do Action Button** | Primary quick-access action button *(e.g., `1 To Do`)* opening the filtered queue for the department. |
| **Unassigned** | Department workload counter tracking tickets without an individual assigned user. |
| **Unattended** | Department backlog metric indicating tickets awaiting first response or internal activity. |
| **High Priority** | Criticality metric tracking urgent tickets requiring priority handling. |
| **Kanban View** | Stage-based board layout grouping tickets into visual columns. |
| **List View** | Tabular register view sorted by priority, date, or customer partner. |
| **Pivot View** | Multidimensional cross-table for workload and volume analysis. |

---

## 5. Ticket Lifecycle Stages Data Dictionary

Tickets progress through visible header stage buttons and a terminal action dropdown:

| Stage Name | Operational Definition and Workflow Trigger |
| :--- | :--- |
| **New** | Initial triage state upon ticket intake. Displays elapsed hours spent in queue *(e.g., `New 18h`)* to guide response SLAs. |
| **In Progress** | Active troubleshooting state. Support agent is actively investigating, replicating, or working with developers on linked tasks. |
| **Awaiting** | Paused state. The ticket is held waiting for customer feedback, system logs, or third-party vendor action. |
| **Done** | Remediated and verified state. Resolves the issue and triggers automated customer satisfaction surveys when configured. |
| **Cancelled** | Voided state. Used when the customer withdraws the request or the problem resolves itself before investigation. |
| **Rejected** | Declined state. Used when an inquiry is deemed duplicate, invalid, spam, or outside contractual support agreements. |

---

## Related Documentation

* [Log and Resolve Your First Helpdesk Ticket](../getting-started/01-log-and-resolve-your-first-helpdesk-ticket.md)
* [Navigate and Use the Helpdesk Dashboard](../task-guides/02-navigate-and-use-the-helpdesk-dashboard.md)
* [Create and Manage Helpdesk Tickets](../task-guides/01-create-and-manage-helpdesk-tickets.md)
* [Understanding Ticket Lifecycle and Routing](../core-concepts/01-understanding-ticket-lifecycle-and-routing.md)
* [Helpdesk Team Field Definitions](./02-helpdesk-team-field-definitions.md)
