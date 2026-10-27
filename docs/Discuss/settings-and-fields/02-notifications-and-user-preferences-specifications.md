# Notifications and User Preferences Specifications

This document provides factual specifications and configuration parameters for notification delivery, focus timers, and channel alert sensitivity in CURQ.

---

## Global Notification Configuration Parameters

Parameters configured under **Discuss > Configuration > Notifications**:

| Setting | Values / Defaults | Description |
| :--- | :--- | :--- |
| **Mute all conversations** | Enabled / Disabled (Default: Disabled) | Master focus switch that silences desktop notifications, sound chimes, and unread counters across all channels. |
| **Mute duration** | • 15 minutes<br>• 1 hour<br>• 3 hours<br>• 8 hours<br>• 24 hours<br>• Until I turn it back on | Defines the active timeframe for the master Do-Not-Disturb focus block before standard notifications resume. |
| **Channel Notifications** | • All Messages<br>• Mentions Only (Default)<br>• Nothing | Establishes the system-wide baseline alert rule applied to newly joined channels. |

---

## Channel Notification Level Options

Rules selectable per-channel via the header **Bell** icon:

| Notification Level | Visual Bell State | Alert Criteria | Operational Use Case |
| :--- | :--- | :--- | :--- |
| **Use Default** | Standard Gray Bell | Inherits baseline from global configuration. | Standard channels. |
| **All Messages** | Solid Blue Bell | Alerts on every single post sent to the channel. | Critical operations or incident monitoring rooms. |
| **Mentions Only** | Bell with Badge | Alerts only on `@username`, `@channel`, or `@everyone`. | High-traffic team channels (recommended baseline). |
| **Nothing** | Gray Bell with Cross | Completely silences all posts, including general tags. | Background or secondary reference channels. |
| **Muted** | Red Slashed Bell | Temporarily silences alerts for a defined duration. | Temporary focus blocks on specific noisy threads. |

---

## Document Chatter Subscription Event Types

Subtype triggers available when following business records (Sales Orders, Invoices, CRM Deals):

| Event Subtype | Description | Alert Routing |
| :--- | :--- | :--- |
| **Discussions** | Messages sent directly to followers via the **Send message** tab. | Dispatched to external customer and internal followers. |
| **Notes** | Private internal collaboration logged via the **Log note** tab. | Dispatched strictly to internal followers with platform access. |
| **Activities** | Scheduling, updating, or completing planned activities on the record. | Dispatched to the activity creator and assigned owner. |
| **Stage Changes** | Pipeline progression (e.g., Quotation Sent -> Sales Order Confirmed). | Dispatched to all subscribed record followers. |

---

### Related Documentation
* [Configure Notification Preferences and Do-Not-Disturb](../task-guides/05-configure-notification-preferences-and-dnd.md)
* [Collaborate Using Record Chatter](../task-guides/09-collaborate-using-record-chatter.md)
* [Channel and Chat Settings Definitions](01-channel-and-chat-settings-definitions.md)
