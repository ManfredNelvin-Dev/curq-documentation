# Helpdesk FAQ

Frequently asked technical, operational, and architectural questions regarding CURQ Helpdesk, ticket routing, stage workflows, customer satisfaction ratings, and project task coordination.

---

## 1. How do I assign a ticket to an external development project?
On the ticket form:
1. Locate the **Project** field in the right column.
2. Select the target project workspace *(e.g., `Development`)*.
3. In the **Task** field, select the specific development task *(e.g., `Frontend development`)*.
4. Updates made in the project task cross-link back to the support ticket chatter.

---

## 2. What is the difference between "Rating when changing stage" and "No rating"?
* **Rating when changing stage**: Automatically sends a customer satisfaction survey via email whenever the ticket transitions into designated milestone stages *(e.g., Solved or Closed)*.
* **No rating**: Disables automated survey dispatches for internal inquiries, administrative tickets, or non-commercial requests.

---

## 3. How do I group duplicate tickets submitted by the same client?
Open the primary parent ticket, select the **Related tickets** tab, click **Add a line**, and select the duplicate ticket number. The chatter audit trail automatically links both records together.

---

## 4. Why are tickets in the register showing priority stars?
The **Priority** field provides rapid visual triage:
* 0 Stars: Normal priority
* 1 Star: Low priority
* 2 Stars: Medium priority
* 3 Stars: Urgent / critical priority

Agents can click star icons directly in list or kanban views to escalate ticket urgency without opening the full edit form.

---

## 5. What does the "Assign to me" button do on an unassigned ticket?
When a ticket is routed to a functional department *(such as `Development Team`)* without an individual specialist assigned, CURQ displays an **Assign to me** button in the top action bar. Clicking it immediately assigns the logged-in user to the ticket, updates the team card counters, logs the claim in the audit chatter, and removes the button.

---

## 6. How do I export Helpdesk volume metrics for management reporting?
Navigate to **Helpdesk > Reporting**, confirm you are in the **Pivot View**, expand the desired row and column dimensions *(e.g., Month cohorts and Department teams)*, and click the **Download / Export** icon in the upper-left toolbar. CURQ generates an XLSX spreadsheet reflecting the on-screen aggregation matrix.

---

## Related Documentation

* [Log and Resolve Your First Helpdesk Ticket](./getting-started/01-log-and-resolve-your-first-helpdesk-ticket.md)
* [Configure a Support Team and Automate Ticket Intake](./getting-started/02-configure-a-support-team-and-automate-ticket-intake.md)
* [Create and Manage Helpdesk Tickets](./task-guides/01-create-and-manage-helpdesk-tickets.md)
* [Understanding Ticket Lifecycle and Routing](./core-concepts/01-understanding-ticket-lifecycle-and-routing.md)
* [Helpdesk Ticket and Register Field Definitions](./settings-and-fields/01-helpdesk-ticket-field-definitions.md)
