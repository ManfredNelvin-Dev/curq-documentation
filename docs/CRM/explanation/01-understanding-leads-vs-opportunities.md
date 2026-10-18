# Explanation: Understanding Leads vs. Opportunities in CURQ

This document explains the commercial logic, data architecture, and pipeline mechanics that govern prospect management, revenue modeling, and deal outcomes in CURQ 18 CRM.

---

### The Two-Tier Commercial Intake Model

In commercial operations, sales teams encounter two fundamentally different categories of prospects:

```
┌────────────────────────────────────────────────────────┐
│                   Inbound Lead Intake                  │
│       (Raw Inquiries, Web Forms, Business Cards)       │
│        • Unscrubbed   • Unverified   • No Stages       │
└──────────────────────────┬─────────────────────────────┘
                           │ Qualification & Scrubbing
                           ▼
┌────────────────────────────────────────────────────────┐
│                  Active Opportunities                  │
│             (Qualified Deals in Pipeline)              │
│       • Defined Value • Win Probability • Stages       │
└────────────────────────────────────────────────────────┘
```

#### 1. Inbound Leads (Lead Intake Stage)
Leads represent raw, unverified inquiries. Examples include website contact form submissions, business cards gathered at trade shows, general email inquiries, or imported marketing lists. 

At this stage, the prospective client has expressed interest, but key commercial criteria remain unconfirmed:
* Does an authentic business need exist?
* Does the client have an approved budget?
* Are you speaking with a decision-maker?
* Is the inquiry a duplicate of an existing corporate account?

#### 2. Pipeline Opportunities (Active Pipeline Stage)
An opportunity represents an active, verified commercial engagement. An opportunity possesses an assigned account executive, an estimated monetary transaction value, an expected closing date, and a specific pipeline stage.

---

### Why Segregating Leads Protects Pipeline Velocity

Allowing unverified leads directly onto the active sales Kanban board introduces significant operational distortions:

* **Pipeline Pollution**: If every spam email, student inquiry, or unqualified contact creates a pipeline deal card, sales representatives spend valuable time sorting through noise rather than closing deals.
* **Distorted Conversion Metrics**: When 80% of inbound web inquiries are unqualified, measuring stage-by-stage pipeline conversion rates becomes meaningless.
* **Inaccurate Revenue Forecasting**: Weighted pipeline forecasting relies on multiplying deal values by stage probabilities. Adding arbitrary numbers to unqualified inquiries inflates pipeline forecasts with phantom revenue.

By establishing an optional qualification buffer, CURQ allows commercial teams to scrub and verify data beforehand, ensuring that only genuine sales prospects enter the active visual pipeline.

---

### Pipeline Stage Velocity and Probability Progression

The Kanban pipeline functions as an architectural state machine representing the natural evolution of a customer relationship:

```
[ New ] ──────► [ Qualified ] ──────► [ Proposition ] ──────► [ Won ]
 (10%)               (30%)                 (70%)              (100%)
```

#### Probability as a Weighted Metric
Each stage carries an architectural probability factor reflecting the historical likelihood of closure. As deals move to the right:
1. **Uncertainty Decreases**: Customer requirements are scoped, technical feasibility is demonstrated, and pricing agreements are submitted.
2. **Prorated Value Increases**: The system computes **Prorated Revenue** (`Expected Revenue * Probability`), allowing leadership to plan working capital and production based on statistically realistic revenue expectations.

#### Stage Transitions and Quotation Integration
When an opportunity reaches the proposition milestone, commercial representatives generate formal sales quotations directly from the deal record. This architectural link connects CRM data directly to inventory reserves, accounting ledgers, and delivery scheduling upon contract signature.

---

### Revenue Modeling: One-Off Contract Values vs. Normalized MRR

Modern B2B engagements frequently combine one-off transactions with subscription-based recurring revenue contracts. Evaluating these agreements side-by-side on a raw total value basis introduces severe reporting distortions:

* A one-off hardware or consulting engagement generates an immediate EUR 60,000 transaction.
* A three-year enterprise software subscription generates EUR 108,000 total contract value, billed annually at EUR 36,000 (or EUR 3,000 monthly).

If a sales pipeline measures only gross contract value, multi-year recurring deals artificially overshadow high-margin immediate sales. Conversely, measuring only first-year cash flow understates the long-term enterprise value of subscription accounts.

#### Normalization via Monthly Recurring Revenue (MRR)
CURQ resolves this discrepancy through automated recurring plan normalization:

$$\text{Expected MRR} = \frac{\text{Recurring Revenue}}{\text{Duration in Months}}$$

By converting multi-month subscription commitments into a normalized monthly metric, commercial directors can directly compare pipeline yield across diverse agreement durations alongside one-off deal values.

---

### Terminal Pipeline Outcomes and Closed-Lost Feedback Loops

In sales operations, closing a deal as **Lost** is often perceived as a failure. In data-driven organizations, however, lost deal analytics represent the primary feedback loop for continuous product, pricing, and operational refinement.

```
                      ┌───────────────► [ Won ] (100% Probability)
                      │
[ Pipeline Stages ] ──┤
                      │
                      └───────────────► [ Lost ] (0% Probability)
                                            │
                                            ▼
                                  Structured Lost Reason
                           (Competitor, Pricing, Feature Gap)
```

#### Standardized Rejection Taxonomy
When sales representatives record structured lost reasons rather than unstructured, subjective notes:
* **Product Strategy Gaps**: Repeated losses categorized under specific functional deficiencies reveal critical feature gaps for the product roadmap.
* **Pricing Elasticity**: Losses clustered under pricing objections provide finance and executive teams with quantitative evidence of market friction.
* **Competitor Intelligence**: Aggregating losses where specific rival vendors were selected reveals market displacement trends and equips marketing teams with competitive battlecard insights.

---

### Related Documentation
* [Tutorial: Track Your First Lead from Inquiry to Won Deal](../tutorials/01-track-your-first-lead-from-inquiry-to-won-deal.md)
* [How-To: Qualify and Convert Leads into Opportunities](../how-to/02-convert-leads-to-opportunities.md)
* [How-To: Manage Pipeline Stages and Won or Lost Deals](../how-to/03-manage-pipeline-stages-and-won-lost-status.md)
* [How-To: Configure Recurring Revenue Plans](../how-to/08-configure-recurring-revenue-plans.md)
* [Explanation: Understanding Lead Assignment and Predictive Scoring](./02-understanding-lead-assignment-and-predictive-scoring.md)
* [Reference: Lead and Opportunity Form Field Definitions](../reference/01-lead-and-opportunity-field-definitions.md)
