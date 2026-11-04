# Understanding Email Marketing Architecture and Delivery Mechanisms

This document explains the underlying architecture, mail queue dispatch engines, deliverability mechanisms, bounce tracking protocols, and link redirection systems that power CURQ 18 Email Marketing. Understanding these architectural components enables administrators and technical marketers to optimize delivery throughput and safeguard domain sender reputation.

---

## Architectural Overview: Transactional vs. Bulk Broadcast Pipelines

CURQ separates email operations into two distinct processing pipelines to isolate routine transactional notifications from mass marketing campaigns:

1. **Transactional Mail Engine**:
   * Handles user-triggered communications, including sales order confirmations, customer invoice PDFs, password reset instructions, and internal chatter notifications.
   * Dispatched with highest priority through the primary corporate SMTP server.
   * Critical for real-time customer service and business continuity.

2. **Bulk Marketing Engine**:
   * Handles mass promotional campaigns, newsletters, and product updates sent to hundreds or thousands of contacts.
   * Operates via asynchronous background queue workers with batch chunking.
   * Routes through dedicated outgoing SMTP servers to prevent bulk sending from impacting corporate email deliverability.

```{mermaid}
flowchart TD
    subgraph Composition["Marketing Composition Layer"]
        A["`**Mailing Campaign**
        Campaign Composition`"] --> B["`**Recipient Evaluation**
        Mailing Lists & Domain Filters`"]
    end

    subgraph Queue["Asynchronous Queue Processing"]
        B --> C["`**Cron Worker Queue**
        Mail: Process queue job`"]
        C --> D["`**Batch Chunking Engine**
        Split into batches of 50-100`"]
    end

    subgraph Transport["Transport & Deliverability"]
        D --> E{"`**Server Router**`"}
        E -->|Dedicated Server| F["`**Dedicated SMTP Server**
        High-Volume Relay IP`"]
        E -->|Default Fallback| G["`**System Mail Server**
        Corporate SMTP`"]
    end

    subgraph Inbound["Delivery Feedback & Processing"]
        F --> H["`**Recipient Mail Server**
        Inbox / Spam Filter`"]
        G --> H
        H -->|Hard / Soft Bounce| I["`**VERP Return-Path**
        Automated Bounce Handler`"]
        H -->|URL Click| J["`**Link Tracker**
        Redirect & UTM Attribution`"]
        I --> K["`**Delivery Ledger**
        Delivery Status Update`"]
        J --> K
    end
```

---

## Asynchronous Mail Queue Processing and Batch Throttling

When a user clicks **Send** or a scheduled dispatch time is reached, CURQ does not transmit emails synchronously through the active browser session. Instead, it utilizes an asynchronous execution architecture:

1. **Record Generation**: CURQ generates individual delivery trace records for each recipient, linking the target contact to the mailing document.
2. **Cron Execution**: The scheduled job **Mail: Process queue** periodically inspects pending mailings in queued status.
3. **Batch Throttling**: The dispatcher slices recipient records into configurable chunks *(typically 50 to 100 messages per transaction)*. This protects server memory, prevents execution timeouts, and avoids triggering rate limits imposed by SMTP relay providers *(such as Sendgrid, Brevo, or Mailgun)*.
4. **Resiliency**: If a worker process fails midway through a broadcast, previously dispatched messages retain their sent status, allowing the next cron cycle to resume cleanly without duplicate deliveries.

---

## Deliverability, Domain Authentication, and Bounce Tracking

To maintain high deliverability and avoid spam classification, CURQ integrates standard email authentication and feedback protocols:

### Domain Authentication Protocols

| Protocol | Technical Mechanism | Deliverability Purpose |
| :--- | :--- | :--- |
| **SPF (Sender Policy Framework)** | DNS TXT record listing authorized sending IP addresses. | Verifies that the mail server is authorized to broadcast on behalf of your sender domain. |
| **DKIM (DomainKeys Identified Mail)** | Cryptographic signature embedded in outgoing email headers. | Validates that message headers and body content were not altered during transmission. |
| **DMARC (Domain-based Message Authentication)** | DNS policy instructing receivers on handling failed SPF/DKIM. | Protects domain sender reputation and enforces strict inbox routing compliance. |

### Automated Bounce Handling via VERP

CURQ employs **Variable Envelope Return Path (VERP)** to detect and process undeliverable messages automatically:

* Outgoing emails receive a customized `Return-Path` header formatted as:  
  `bounce-<mailing-id>-<contact-id>@yourdomain.com`
* When a remote mail transfer agent rejects the message, the bounce notification is returned to the unique VERP address.
* The CURQ mail gateway parses the incoming bounce, extracts the matching mailing ID and contact ID, and updates the recipient's trace status:
  * **Soft Bounce**: Temporary issue *(e.g., recipient inbox full)*. Logged as bounced without immediately disabling the subscriber.
  * **Hard Bounce**: Permanent delivery failure *(e.g., domain does not exist or invalid address)*. Automatically increments the contact's bounce counter and prevents future dispatches.

> For complete field definitions and delivery tracking attributes, see [**Mailing and Campaign Field Definitions**](../settings-and-fields/01-mailing-and-campaign-field-definitions.md).

---

## Architectural Comparison Table

| Operational Dimension | Transactional Mail Pipeline | Email Marketing Broadcast Pipeline |
| :--- | :--- | :--- |
| **Core Focus** | System notifications and chatter messages | Marketing campaigns, subscriber lists, and delivery tracking |
| **Execution Trigger** | Real-time user or business workflow event | Asynchronous cron scheduler with batch throttling |
| **Server Routing** | Primary system SMTP server | Dedicated Outgoing Mail Server option |
| **Bounce Handling** | System administrator alert | Automated VERP extraction and contact bounce counter |
| **Unsubscribe Handling** | Not applicable (transactional notices) | Automated unsubscribe handling and global blacklist enforcement |
| **Link Tracking** | Disabled by default | Automatic click tracking with campaign analytics |

---

## Related Documentation

* [Understanding Campaign Lifecycles and Subscriber Governance](./02-understanding-campaign-lifecycles-and-subscriber-governance.md)
* [Design, Schedule, and Send Email Mailings](../task-guides/04-design-schedule-and-send-email-mailings.md)
* [Mailing and Campaign Field Definitions](../settings-and-fields/01-mailing-and-campaign-field-definitions.md)
