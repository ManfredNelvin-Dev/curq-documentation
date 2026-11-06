# Helpdesk Team Field Definitions

This document provides a comprehensive data dictionary for all configuration settings, email aliases, portal toggles, and automated stage update rules on the Helpdesk Team form in CURQ Helpdesk.

---

## 1. Helpdesk Team Configuration Header Fields

Located at **Helpdesk > Configuration > Teams**, the Helpdesk Team form governs functional team dispatch, communication aliases, and project synchronization:

| Field Name | Description |
| :--- | :--- |
| **Helpdesk Team** | The formal designation of the functional support department *(e.g., `Development Team`, `Customer Support`, `Billing`)*. |
| **Parent Team** | Optional hierarchical parent team used to organize multi-tier support operations. |
| **Team Leader** | Designated supervisory user responsible for team SLA performance and workload delegation. |
| **Email Alias** | Inbound email prefix *(e.g., `dev`)* that automatically generates and routes incoming support inquiries directly into this team's queue. |
| **Accept Emails From** | Inbound access restriction rule: `Everyone` (accepts emails from all external senders), authenticated partners, or internal employees only. |
| **Email** | Outbound notification email address used for team correspondence *(e.g., `mail@example.com`)*. |
| **Project** | Default project workspace in CURQ Projects *(e.g., `Development`)* linked to all tickets logged under this team. |
| **Show in portal form** | Checkbox toggle that displays this support team as a selectable category option on the customer self-service web portal. |
| **Auto Update Ticket Stage** | Checkbox toggle enabling automated stage transitions based on customer communication events. |
| **Category** | Classification tag grouping related support departments across the enterprise. |

---

## 2. Tab Section Field Definitions

### 2.1 Team Members Tab

The **Team Members** tab lists active support specialists assigned to the team:

| Control / Field | Description |
| :--- | :--- |
| **Add** | Button opening the user directory modal to enroll additional agents into this team. |
| **Member Card** | Individual agent profile avatar and display name *(e.g., `Support Agent`)*. |

### 2.2 Auto Update Ticket Stage Tab

The **Auto Update Ticket Stage** tab defines automated workflow transitions when customers interact with existing tickets:

| Field Name | Description |
| :--- | :--- |
| **Autoupdate Source Stages** | The initial operational stages *(such as `Awaiting`)* that qualify for automated progression upon event trigger. |
| **Autoupdate Destination Stage** | The target operational stage *(such as `In Progress`)* into which the ticket automatically advances when a customer replies. |

---

## Related Documentation

* [Configure a Support Team and Automate Ticket Intake](../getting-started/02-configure-a-support-team-and-automate-ticket-intake.md)
* [Configure Helpdesk Teams and Routing](../task-guides/03-configure-helpdesk-teams-and-routing.md)
* [Understanding Ticket Lifecycle and Routing](../core-concepts/01-understanding-ticket-lifecycle-and-routing.md)
* [Helpdesk Ticket and Register Field Definitions](./01-helpdesk-ticket-field-definitions.md)
* [Create and Manage Helpdesk Tickets](../task-guides/01-create-and-manage-helpdesk-tickets.md)
