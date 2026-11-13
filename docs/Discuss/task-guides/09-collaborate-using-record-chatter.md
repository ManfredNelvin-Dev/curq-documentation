# Collaborate Using Record Chatter

Coordinate cross-departmental operations, log internal audit notes, send customer messages, schedule follow-up tasks, and follow business documents in CURQ Discuss.

> **Prerequisites**
> * Active user account with **Discuss / User** rights.
> * Active enterprise user profiles configured in the corporate directory.

---

## 1. Record Chatter Notes and Customer Messages

### 1.1 Log Internal Private Notes

Internal notes are strictly confidential to your company colleagues and are never visible to external clients, suppliers, or portal users:

1. Open any business document in CURQ (e.g., a Sales Order, CRM Opportunity, Customer Invoice, or Inventory Delivery).
2. On the right side (or bottom) of the screen, locate the **Chatter** pane.
3. Click the **Log note** button:
   * Notice that the composer border displays a yellow/neutral tint indicating internal confidentiality.
4. Type your internal remarks.
5. Use `@name` to tag a coworker (e.g., `@Marc Demo can warehouse pack these valves before 2 PM?`).
6. Click **Log**.
7. The note is permanently timestamped on the record audit trail, and your colleague receives an immediate alert in their Discuss **Inbox**.

> **Important:** Always verify that the composer tab is set to **Log note** when discussing pricing margins, internal approvals, or warehouse bottlenecks.

---

### 1.2 Send External Customer Messages

When you need to communicate directly with the customer or vendor associated with the document:

1. In the record Chatter pane, click the **Send message** button.
   * Notice that the composer styling shifts to an active communication mode.
2. Review the list of followers who will receive the message.
3. Type your customer-facing update (e.g., dispatch notices, shipment tracking links, or quotation clarifications).
4. You can type `:canned-response` to insert pre-approved customer communication templates.

> For shortcut syntax and template substitution rules, see [**Voice, Video, and Canned Responses Specifications**](../settings-and-fields/03-voice-video-and-canned-responses-specifications.md#3-canned-response-field-specifications).

5. Click **Send**.
6. CURQ dispatches the message as an official email to all external followers and logs the transmission in the document's permanent audit trail.

---

## 2. Schedule and Track Follow-Up Activities

Ensure critical tasks are completed on time without letting actions slip through the cracks:

1. In the record Chatter pane, click the **Activities** button (clock icon).
2. In the **Schedule Activity** modal:
   * **Activity Type**: Select **Call**, **Email**, **Meeting**, **To Do**, or **Upload Document**.
   * **Summary**: Enter a concise task objective (e.g., `Review payment terms with legal`).
   * **Due Date**: Select the target completion deadline.
   * **Assigned to**: Choose the responsible employee.
3. Click **Schedule** (or **Schedule & Mark as Done** if completing an immediate action).
4. The activity registers under the record header and syncs directly into the assignee's daily activity calendar.

---

## 3. Follow and Unfollow Records to Control Notifications

Control which business transactions send notifications into your Discuss Inbox:

### 3.1 Follow a Document
1. Open the target transaction record.
2. In the top-right corner of the Chatter pane, click the **Follow** button.
3. You are now subscribed to automated status updates (such as order confirmation, delivery validation, or invoice payment).
4. Hover over the **Following** button and click the dropdown arrow to customize which specific subtype events notify you (**Discussions**, **Notes**, **Activities**, or **Stage Changes**).

> For alert routing behavior across all document chatter subscription event types, see [**Document Chatter Subscription Event Types**](../settings-and-fields/02-notifications-and-user-preferences-specifications.md#3-document-chatter-subscription-event-types).

### 3.2 Unfollow a Document
1. Open the document you wish to stop tracking.
2. Hover over the **Following** button in the Chatter pane.
3. The button label changes to red text: **Unfollow**.
4. Click **Unfollow**. You will no longer receive notifications for updates on this record unless a colleague explicitly tags you with an `@mention`.

---

## Related Documentation
* [Send Direct and Group Messages](02-send-direct-and-group-messages.md)
* [Configure Notification Preferences and Do-Not-Disturb](05-configure-notification-preferences-and-dnd.md)
* [Notifications and User Preferences Specifications](../settings-and-fields/02-notifications-and-user-preferences-specifications.md)
* [Voice, Video, and Canned Responses Specifications](../settings-and-fields/03-voice-video-and-canned-responses-specifications.md)
* [Understanding Unified Business Communication and Chatter Architecture](../core-concepts/01-understanding-unified-business-communication-and-chatter-architecture.md)
