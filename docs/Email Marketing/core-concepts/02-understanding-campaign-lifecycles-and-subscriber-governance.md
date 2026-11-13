# Understanding Campaign Lifecycles and Subscriber Governance

This guide examines the lifecycle stages of marketing mailings, recipient targeting models, statistical A/B testing algorithms, and subscriber compliance governance in CURQ 18 Email Marketing.

---

## 1. Mailing Lifecycle Stages

Each marketing broadcast moves through a deterministic series of workflow stages governed by system validation checks and scheduler events:

* **Draft**: The mailing is actively being authored. Headers, recipient criteria, body blocks, and A/B testing parameters can be freely modified. Test emails can be dispatched repeatedly without changing the document status.
* **In Queue**: The user has clicked **Send** or confirmed a future scheduled time. The recipient list is locked, and the document is queued for background cron worker execution.
* **Sending**: The asynchronous worker has commenced batch transmission. Emails are currently being formatted and passed to the outgoing SMTP relay.
* **Sent**: All messages in the mailing have been delivered to the outgoing mail server. Analytics smart buttons and reporting charts are populated with real-time delivery and interaction data.

> For complete stage specifications and composer field attributes, see [**Mailing Record Fields**](../settings-and-fields/01-mailing-and-campaign-field-definitions.md#1-mailing-record-fields).

---

## 2. Dynamic Recipient Targeting Models

CURQ Email Marketing supports two distinct methods for defining recipient audiences:

### 2.1 Static Mailing Lists

* Curated groups of subscribers stored directly within the Email Marketing module.
* Subscribers can be added manually, imported via CSV/Excel spreadsheets, or registered automatically through website newsletter forms.
* Ideal for public newsletters, recurring product announcements, and customer loyalty programs.

### 2.2 Dynamic Model Segmentation

CURQ can target records directly from any enterprise business area without manually exporting contact data:

| Target Business Area | Target Audience Description | Common Marketing Use Cases |
| :--- | :--- | :--- |
| **Contacts** | Individual and corporate customer records | B2B vendor announcements, regional customer updates, and VIP notices. |
| **Leads & Opportunities** | Sales pipeline prospects and inquiries | Nurturing unassigned leads, inactive prospect re-engagement, and sales offers. |
| **Sales Orders** | Customers with confirmed quotations or purchase history | Post-purchase cross-selling, warranty reminders, and repeat order promotions. |
| **Event Attendees** | Registered event participants and attendees | Pre-event logistics, schedule announcements, and post-conference surveys. |

When a dynamic model is selected, users can build advanced search domains *(e.g., `Country is United States AND Tags contains VIP`)*. The recipient list is evaluated dynamically at the moment of dispatch, ensuring that newly qualified contacts are included automatically.

---

## 3. A/B Testing Statistical Distribution

CURQ 18 provides native A/B testing to evaluate subject lines, email templates, and sender names before broadcasting to your entire audience:

```{mermaid}
flowchart TD
    A["`**Total Audience**
    10,000 Subscribers`"] --> B["`**Sample Group (20%)**
    2,000 Recipients`"]
    A --> C["`**Remainder Group (80%)**
    8,000 Recipients`"]

    B --> D["`**Version A (10%)**
    Subject Line 1`"]
    B --> E["`**Version B (10%)**
    Subject Line 2`"]

    D --> F{"`**Evaluation Period**
    e.g., 24 Hours`"}
    E --> F

    F -->|Highest Open/Click Rate| G["`**Winning Version**`"]
    G --> C
```

1. **Split Sample Allocation**: The marketer specifies a test percentage *(e.g., 20% of total recipients)*. CURQ divides this sample evenly between Version A (10%) and Version B (10%).
2. **Evaluation Window**: Both sample variants are dispatched simultaneously. The system monitors recipient engagement across a defined waiting window *(e.g., 24 hours)*.
3. **Winner Criteria**: The marketer configures the evaluation metric:
   * **Highest Open Rate**: Evaluates the effectiveness of subject lines and preview text.
   * **Highest Click Rate**: Evaluates call-to-action button placement, layout design, and offer appeal.
4. **Automated Remainder Dispatch**: Once the evaluation window elapses, CURQ selects the winning version and automatically broadcasts it to the remaining 80% of the audience.

---

## 4. Subscriber Consent and Compliance Governance

CURQ enforces international privacy regulations *(such as GDPR and CAN-SPAM)* through a two-tiered consent model:

* **List-Level Opt-Out**: When a subscriber chooses to leave a specific publication, they are unsubscribed from that mailing list only and remain active on other company lists.
* **Global Blacklist**: When a subscriber requests global suppression, their email address is registered on the organizational blacklist, permanently excluding them from all present and future marketing broadcasts across all modules.

### 4.1 Hierarchy of Subscriber Filtering

When compiling the final recipient list during dispatch, CURQ applies a strict multi-tier exclusion filter:

1. **Email Syntax Check**: Excludes malformed or empty email addresses.
2. **Duplicate Suppression**: Ensures an email address receives only one copy of the broadcast, even if the contact appears multiple times in the source list.
3. **List-Specific Opt-Out**: Skips contacts marked as opted out on the target mailing list.
4. **Global Blacklist Check**: Automatically drops any email address registered on the organizational blacklist. This overrides all mailing list subscriptions across all modules.

> For complete suppression specifications and blacklist attributes, see [**Global Email Blacklist Specifications**](../settings-and-fields/01-mailing-and-campaign-field-definitions.md#6-global-email-blacklist-specifications).

---

## 5. Core Engagement Metrics and Calculations

| Performance Metric | Mathematical Formula | Strategic Significance |
| :--- | :--- | :--- |
| **Delivery Rate** | `(Delivered / Sent) * 100` | Indicates sender IP reputation and mail server acceptance. |
| **Open Rate** | `(Opened / Delivered) * 100` | Measures subject line relevance and inbox timing. |
| **Click-Through Rate (CTR)** | `(Clicked / Delivered) * 100` | Measures overall audience engagement with email links. |
| **Click-to-Open Rate (CTOR)**| `(Clicked / Opened) * 100` | Evaluates message content quality and CTA effectiveness among readers. |
| **Bounce Rate** | `(Bounced / Sent) * 100` | Measures list cleanliness; rates above 2% indicate outdated data. |
| **Unsubscribe Rate** | `(Opted Out / Delivered) * 100` | Monitors audience fatigue or irrelevant content frequency. |

> For complete metric definitions and calculation formulas, see [**Analytical Smart Button Metrics**](../settings-and-fields/01-mailing-and-campaign-field-definitions.md#5-analytical-smart-button-metrics).

---

## Related Documentation

* [Understanding Email Marketing Architecture and Delivery Mechanisms](./01-understanding-email-marketing-architecture-and-delivery-mechanisms.md)
* [Create and Send Your First Email Marketing Campaign](../getting-started/01-create-and-send-your-first-email-marketing-campaign.md)
* [Manage Blacklisted Emails and Opt-Out Reasons](../task-guides/05-manage-blacklisted-emails-and-opt-out-reasons.md)
* [Mailing and Campaign Field Definitions](../settings-and-fields/01-mailing-and-campaign-field-definitions.md)
