# Reference: Lead and Opportunity Form Field Definitions

This document details the data fields, validation specifications, and configuration parameters used on CURQ opportunity and lead forms.

---

### Opportunity Form Fields

| Field Name | Description |
| :--- | :--- |
| **Opportunity** | The commercial title or subject line identifying the sales deal (e.g., `NorthStar Logistics - Modernization`). |
| **Expected Revenue** | The estimated gross transaction amount of the opportunity in company currency. |
| **Prorated Revenue** | System-computed weighted revenue metric (`Expected Revenue * Probability / 100`) used in commercial forecasting and pipeline reporting. |
| **Probability** | The statistical likelihood of winning the deal (0.0% to 100.0%). Updated automatically by stage or Predictive Lead Scoring, or manually overridden. |
| **Customer** | The company or individual partner associated with this commercial deal. |
| **Email** | Contact email address for quote dispatches and customer communications. |
| **Phone** | Direct landline telephone number. |
| **Mobile** | Direct mobile telephone number for SMS and phone calls. |
| **Salesperson** | The internal account executive or commercial representative managing the deal. |
| **Sales Team** | The organizational sales branch or business unit responsible for the opportunity. |
| **Expected Closing** | Target deadline date by which the sales contract is anticipated to be signed or won. |
| **Priority** | Visual priority rating (0 to 3 stars) displayed on Kanban cards to highlight high-value deals. |
| **Tags** | Color-coded categorization badges (e.g., `Enterprise`, `Software`, `Urgent`). |
| **Internal Notes** | Private background notes, qualification transcripts, or client requirements. |

---

### Extra Information Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Company** | In multi-company environments, the legal operating branch owning this opportunity. |
| **Campaign** | The marketing outreach initiative that generated the prospect (e.g., `Google Ads`, `Trade Show 2026`). |
| **Medium** | The delivery channel through which the lead arrived (e.g., `Email`, `Website Form`, `Phone`). |
| **Source** | The specific origin link or referral source (e.g., `LinkedIn`, `Newsletter`, `Partner Referral`). |
| **Referred By** | The person, partner, or employee who introduced the prospective client. |
| **Day to Assign** | System-tracked duration (in days) between lead creation and assignment to a salesperson. |
| **Day to Close** | System-tracked duration (in days) between lead creation and marking Won or Lost. |

---

### Inbound Lead Form Fields

| Field Name | Description |
| :--- | :--- |
| **Lead** | Subject title describing the unscrubbed incoming inquiry. |
| **Contact Name** | Personal name of the prospect reaching out. |
| **Company Name** | Legal organization or corporate name mentioned in the inquiry. |
| **Address** | Primary street, city, state, postal code, and country of the prospective organization. |
| **Website** | Company corporate web address. |
| **Job Position** | The functional role or title of the contact. |
| **Similar Lead** | Counter showing existing active leads or opportunities with matching email or phone coordinates. |

---

### Lead Conversion Dialog Parameters

| Option | Description |
| :--- | :--- |
| **Conversion Action** | Determines how the inquiry is processed: **Convert to opportunity** (creates a new deal card) or **Merge with existing opportunities** (combines duplicate deals and aggregates notes/chatter). |
| **Customer** | Directs partner profile linking: **Link to an existing customer**, **Create a new customer**, or **Do not link to a customer**. |
| **Salesperson** | Assigns commercial account ownership of the converted deal. |
| **Sales Team** | Routes the converted deal to a designated commercial sales division. |

---

### Related Documentation
* [How-To: Create and Manage Pipeline Opportunities](../task-guides/01-create-and-manage-opportunities.md)
* [How-To: Convert a Lead into an Opportunity](../task-guides/02-convert-leads-to-opportunities.md)
* [Explanation: Understanding Leads vs. Opportunities in CURQ](../core-concepts/01-understanding-leads-vs-opportunities.md)
