# Mailing and Campaign Field Definitions

This catalog documents the data fields, technical specifications, operational behaviors, and blacklist controls of core records in CURQ 18 Email Marketing, including Mailings, Campaigns, Mailing Lists, Contacts, and Global Suppression Lists.

---

## 1. Mailing Record Fields

> **Warning (Email Template & Dynamic Content Advisory):** Modifications to email templates, dynamic field placeholders (`{{ ... }}`), or tracking links have direct cross-system consequences. Corrupting template syntax can cause automated delivery failures across Sales, Accounting, and CRM. Non-technical users should never edit live production templates directly; always duplicate the template first, verify placeholder resolution with test dispatches, and ensure mandatory unsubscribe links (`[[opt_out]]`) are preserved to prevent domain reputation damage and regulatory violations.

The following fields configure individual marketing broadcasts in the **Mailings** composer view:

| Field Name | Description |
| :--- | :--- |
| **Subject** | The email subject line visible in recipient inbox lists. Required. |
| **Preview Text** | Short secondary snippet displayed alongside or below the subject line in supporting email clients. |
| **Recipients** | Defines the audience source: Mailing List, Contacts, Lead/Opportunity, Sales Order, or custom audience. |
| **Select Mailing Lists** | Visible when Recipients is set to Mailing List. Specifies the target subscriber lists. |
| **Filter Domain** | Search criteria applied when targeting business models to restrict recipient records dynamically. |
| **Mailing Campaign** | Links the individual broadcast to a broader marketing campaign. |
| **Responsible** | Internal system user accountable for designing, testing, and dispatching the broadcast. |
| **Send Date / Schedule** | The calendar timestamp when the mailing was dispatched or is queued for automated delivery. |
| **Allow A/B Testing** | Enables split testing functionality between multiple content variants. |
| **A/B Testing Percentage** | Percentage of total recipients allocated to the initial test sample *(e.g., `20`%)*. |
| **Winner Selection** | Metric used to evaluate variants: Highest Open Rate or Highest Click Rate. |
| **Evaluation Period** | Number of hours or days to wait after test dispatch before deploying the winning version. |
| **Body (HTML)** | Full responsive HTML email content generated using snippets and modular layout blocks. |
| **Attachment** | Optional PDF or image files transmitted alongside the email content. |
| **State** | Operational state: Draft, In Queue, Sending, or Sent. |

---

## 2. Campaign Header Fields

The following fields define strategic marketing initiatives in the **Campaigns** view:

| Field Name | Description |
| :--- | :--- |
| **Campaign Name** | Descriptive label identifying the marketing project *(e.g., `Black Friday 2026`)*. Required. |
| **Responsible** | Marketing manager overseeing campaign execution and budgetary targets. |
| **Tags** | Categorical labels used to filter and group campaigns in Kanban and reporting views. |
| **Stage** | Pipeline phase *(e.g., `New`, `In Progress`, `Design`, `Sent`, `Completed`)*. |
| **Color** | Color index for visual tagging on Kanban cards. |

---

## 3. Mailing List Fields

The following fields configure subscriber groupings in **Mailing Lists**:

| Field Name | Description |
| :--- | :--- |
| **Mailing List** | Name of the subscriber list *(e.g., `VIP Customers` or `Monthly Product Newsletter`)*. |
| **Show in Preferences** | When checked, displays this list on subscriber self-service preference management pages. |
| **Mandatory Partner** | When checked, contacts added to this list must have an associated master Contact record. |
| **Partner Tag** | Partner category automatically assigned to contacts registered on this mailing list. |
| **Contact Count** | Read-only counter computing total active, unbounced subscribers assigned to the list. |

---

## 4. Mailing Contact Fields

The following fields define individual subscriber records in **Mailing List Contacts**:

| Field Name | Description |
| :--- | :--- |
| **Name** | Subscriber display name or contact identifier. |
| **Email** | Primary email address for message delivery. Evaluated against global blacklist. |
| **Title** | Salutation prefix *(e.g., `Mr.`, `Ms.`, `Dr.`)* used in dynamic email placeholder expressions. |
| **Company Name** | Organization or business entity associated with the subscriber. |
| **Country** | Geographic location used for localized segmentation and timezone-based dispatch. |
| **Mailing Lists** | Subscriptions assigned to this contact. |
| **Subscription Date** | Read-only timestamp recording when the contact joined the respective mailing list. |
| **Opt-Out** | Checked if the subscriber has opted out of communications for a specific mailing list. |
| **Bounce Count** | Cumulative count of delivery failures returned for this email address. |

---

## 5. Analytical Smart Button Metrics

Both Mailings and Campaigns feature header smart buttons that compute aggregate operational KPIs:

| Smart Button Metric | Description |
| :--- | :--- |
| **Sent** | Number of email messages dispatched through the outgoing mail relay. |
| **Delivered** | Successfully received emails accepted by recipient mail servers. |
| **Opened** | Percentage and count of recipients who viewed the email body. |
| **Clicked** | Percentage and count of recipients who clicked a tracked link. |
| **Replied** | Recipients who directly replied to the broadcast message. |
| **Bounced** | Undelivered messages rejected by recipient mail servers (hard or soft bounces). |

---

## 6. Global Email Blacklist Specifications

The global blacklist provides enterprise-wide suppression of unsubscribed or delinquent email addresses:

| Attribute | Description |
| :--- | :--- |
| **Email Address** | Standardized, normalized lowercase email address *(e.g., `user@domain.com`)*. |
| **Active Status** | Toggles exclusion active status. Unchecking reactivates the email address if the customer explicitly re-subscribes. |
| **Audit Chatter** | Logs timestamp, user, and origin mechanism *(e.g., `User unsubscribed via one-click link`)*. |
| **System Enforcement** | Checked during pre-dispatch recipient compilation. Blacklisted addresses are excluded unconditionally. |

---

## 7. Opt-Out Reasons Specifications

Feedback reasons presented to subscribers during the unsubscribe workflow:

| Field Name | Description |
| :--- | :--- |
| **Reason** | Display title shown on preference forms *(e.g., `Content no longer relevant`, `Too many emails`)*. |
| **Description** | Internal guidance on when and how to address recipient feedback. |
| **Active** | Toggles whether the reason appears as an option on the public unsubscribe form. |

---

## Related Documentation

* [Manage Blacklisted Emails and Opt-Out Reasons](../task-guides/05-manage-blacklisted-emails-and-opt-out-reasons.md)
* [Design, Schedule, and Send Email Mailings](../task-guides/04-design-schedule-and-send-email-mailings.md)
* [Understanding Campaign Lifecycles and Subscriber Governance](../core-concepts/02-understanding-campaign-lifecycles-and-subscriber-governance.md)
* [Understanding Email Marketing Architecture and Delivery Mechanisms](../core-concepts/01-understanding-email-marketing-architecture-and-delivery-mechanisms.md)
