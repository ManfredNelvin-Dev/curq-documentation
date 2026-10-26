# Default Deal Tags, Lost Reasons, and Activity Specifications

This document details the configuration parameters, interval formulas, and status codes for activities, subscription revenues, and lost deal tracking in CURQ.

---

### Activity Type Specifications

| Field Name | Description |
| :--- | :--- |
| **Name** | The action title displayed on scheduling menus and task lists (e.g., `Call`, `Meeting`). |
| **Action** | Triggers specialized system behaviors (e.g., `Meeting` opens calendar booking; `Upload Document` prompts file attachment). |
| **Delay** | Default number of days from creation until the activity is due. |
| **Delay Unit** | Time metric added to the current date when computing the due deadline (`Days`, `Weeks`, `Months`). |
| **Icon** | Visual glyph rendered on Chatter activity buttons. |
| **Default User** | Specific user automatically assigned when this activity is scheduled. |
| **Chaining Type** | Whether marking this activity done prompts a user to schedule a follow-up or automatically launches a pre-configured task. |

---

### Activity Plan Structure

| Property | Description |
| :--- | :--- |
| **Plan Name** | The workflow identifier (e.g., `Onboarding`, `Enterprise Discovery Sequence`). |
| **Model** | Target database model (`Lead/Opportunity`). |
| **Activities To Create** | Sub-table defining the sequential activity tasks launched by the plan. |
| **Activity Type** | The specific interaction type (e.g., `To-Do`, `Call`, `Meeting`, `Email`). |
| **Assignment** | Role assignment policy (`Ask at launch`, `Salesperson`, or specific user). |
| **Interval & Unit** | Delay duration and metric relative to plan trigger (e.g., `1 days`). |
| **Trigger** | Execution anchor timing (e.g., `Before Plan Date`, `After Plan Date`). |

---

### Recurring Revenue Plan Intervals

| Plan Name | # Months | Expected MRR Normalization Formula | Description |
| :--- | :--- | :--- | :--- |
| **Monthly** | 1 | `Total Amount / 1` | Standard recurring monthly retainer or software subscription. |
| **Quarterly** | 3 | `Total Amount / 3` | Quarterly service agreement normalized to monthly revenue. |
| **Bi-annually** | 6 | `Total Amount / 6` | Six-month contract agreement normalized to monthly revenue. |
| **Yearly** | 12 | `Total Amount / 12` | Full-year annual subscription normalized to monthly revenue. |
| **Over 3 years** | 36 | `Total Amount / 36` | Three-year enterprise contract normalized to monthly revenue. |
| **Over 5 years** | 60 | `Total Amount / 60` | Five-year long-term agreement normalized to monthly revenue. |

---

### Default Deal Tags

| Tag Name | Display Color | Analytical Significance |
| :--- | :--- | :--- |
| **Enterprise** | Blue | Flags high-value corporate deals requiring multi-stakeholder management. |
| **Consulting** | Purple | Categorizes professional services, implementation, and advisory scopes. |
| **Software** | Green | Flags recurring software licensing and cloud platform contracts. |
| **Urgent** | Red | Marks priority deals requiring immediate executive escalation in the active quarter. |
| **Renewal** | Orange | Distinguishes recurring client contract renewals from net-new business acquisitions. |

---

### Standard Lost Reasons Catalog

| Lost Reason | Suggested Use Case | Analytical Significance |
| :--- | :--- | :--- |
| **Too Expensive** | Prospect cited pricing, license fees, or prohibitive implementation costs. | Flags commercial pricing pressure or budget misalignment. |
| **We Don't Have People/Skills** | Technical scope or custom requirements exceeded current delivery capacity. | Identifies internal staffing or technical roadmap gaps. |
| **Not Enough Stock** | Required product inventory or hardware units could not meet delivery timelines. | Indicates supply chain or inventory replenishment constraints. |
| **Competitor Selected** | Prospect opted for an alternative vendor or competitive offering. | Feeds competitor market intelligence and displacement reporting. |
| **Budget Cancelled** | Client executive leadership cancelled internal funding or project initiative. | Categorizes macroeconomic or client-internal project cancellations. |

---

### Related Documentation
* [Schedule a Follow-Up Call and Manage Sales Activities](../task-guides/04-schedule-and-track-sales-activities.md)
* [Configure Standardized Lost Reasons and Deal Tags](../task-guides/07-configure-lost-reasons-and-tags.md)
* [Configure Recurring Revenue Plans](../task-guides/08-configure-recurring-revenue-plans.md)
* [Configure Activity Types and Automated Activity Plans](../task-guides/09-configure-activity-types-and-plans.md)
