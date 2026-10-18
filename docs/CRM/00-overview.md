# CRM

Track incoming leads, manage sales pipelines, assign opportunities to teams, schedule follow-ups, and close deals in CURQ 18.

---

## Overview and Core Architecture

The **CRM** application in CURQ 18 serves as the pipeline intelligence and prospect engagement center. It provides end-to-end visibility into the customer acquisition journey, transforming raw inquiries into qualified pipeline opportunities, coordinating team follow-up activities, and synchronizing commercial proposals directly with Sales.

```
Incoming Prospects (Web Forms, Emails, Events)
                      │
                      ▼
              ┌───────────────┐
              │   CRM Leads   │  <── Optional qualification filter
              └───────┬───────┘
                      │ (Convert to Opportunity)
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                     Sales Pipeline Kanban                   │
│   [New]  ───►  [Qualified]  ───►  [Proposition]  ───► [Won] │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
                ┌───────────────────────────┐
                │ Linked Quotation / Order  │
                │ (Updates Expected Revenue)│
                └───────────────────────────┘
```

---

## Key Functional Capabilities

### 1. Lead Intake & Qualification Funnel
* **Two-Tier Qualification Engine**: Capture raw inquiries from website forms, incoming emails, phone calls, and marketing campaigns as **Leads**. Dedicated development reps (BDRs/SDRs) qualify prospective buyers before converting them into pipeline opportunities, keeping primary revenue forecasts clean.
* **Smart Deduplication & Contact Linking**: Automatically check incoming leads against existing contacts to prevent duplicate partner records, link historical correspondence, or establish new company and individual accounts.

### 2. Visual Pipeline & Opportunity Governance
* **Interactive Kanban Pipeline**: Track deals across customizable stages reflecting your sales methodology. Drag-and-drop cards to advance stages, adjust priority stars, and instantly view stage totals and weighted revenue.
* **Expected Revenue & Probabilities**: Calculate realistic revenue projections based on deal value and closing probabilities. As deals progress through stages, probabilities update automatically to reflect higher closing confidence.
* **Recurring Revenue & MRR**: Track monthly, quarterly, and annual subscription contracts with dedicated recurring revenue plans and contract duration metrics.

### 3. Activity Scheduling & Follow-Up Automation
* **Activity-Driven Selling**: Schedule next steps (calls, meetings, emails, reminders) directly on opportunity cards. Color-coded badges indicate overdue (red), due today (orange), and future (green) activities.
* **Automated Activity Plans**: Trigger standardized follow-up sequences (e.g., *Onboarding Follow-Up* or *Enterprise Demo Plan*) that generate multi-step tasks across team members upon stage transitions.
* **Integrated Calendar & Communications**: Sync appointments with external calendars and log client communications directly within the Chatter feed for complete team visibility.

### 4. Predictive Scoring & Rule-Based Routing
* **Predictive Lead Scoring**: Leverage machine learning to evaluate historical conversion data against key attributes (stage, geography, email/phone quality, acquisition source). The algorithm assigns data-backed win probabilities, eliminating optimistic sales bias.
* **Rule-Based Lead Assignment**: Automatically route leads to regional or specialized sales teams using territory domain filters (country, state, language, tag).
* **Capacity-Capped Round-Robin**: Distribute leads fairly among team members while enforcing individual monthly lead capacity limits to prevent team overload.

### 5. Sales Integration & Win/Lost Analytics
* **Seamless Quotation Integration**: Generate formal quotations directly from the opportunity card. The quotation untaxed total synchronizes with the opportunity's expected revenue.
* **Automated Won Progression**: When a client accepts and confirms a quotation, the linked opportunity automatically transitions to **Won** with 100% probability.
* **Lost Reason Governance**: Prevent record deletion by requiring structured **Lost Reasons** (e.g., *Too Expensive*, *Competitor*, *Missing Feature*) when archiving lost deals. Management can analyze win/loss ratios in Pivot reports to uncover product gaps, pricing friction, and campaign quality.

---

### Quick Actions

| | |
| --- | --- |
| [**Create or Update an Opportunity**](./how-to/01-create-and-manage-opportunities.md) Go directly to the practical steps for adding deals, setting revenue, and moving cards across pipeline stages. | [**Track Deals from Inquiry to Won**](./tutorials/01-track-your-first-lead-from-inquiry-to-won-deal.md) Explore how stages, probability, deal cards, and sales activities work together from initial enquiry to closed deal. |
| [**Manage Pipeline Stages & Lost Deals**](./how-to/03-manage-pipeline-stages-and-won-lost-status.md) Understand lost reasons, archive closed opportunities, and restore deals if negotiations resume. | [**Configure Pipeline Stages & Settings**](./how-to/05-configure-pipeline-stages.md) Set up custom pipeline stages, sales teams, deal tags, standardized lost reasons, and recurring plans. |
