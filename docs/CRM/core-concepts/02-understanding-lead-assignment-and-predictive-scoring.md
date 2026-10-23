# Core Concepts: Understanding Lead Assignment and Predictive Scoring

This document explains the automated routing logic, business rules, and statistical classification principles underlying rule-based lead allocation and predictive win scoring in CURQ.

---

### Automated Lead Routing vs. Manual Allocation

In high-volume sales organizations, assigning incoming leads manually creates severe operational bottlenecks:
* **Response Latency**: Industry research demonstrates that contacting an inbound prospect within five minutes yields significantly higher conversion rates than responding after an hour. Manual allocation introduces administrative friction and delayed follow-up.
* **Cherry-Picking and Sales Bias**: Representatives naturally gravitate toward recognizable brand names or high-value inquiries, leaving smaller, niche, or technically complex accounts unattended.
* **Capacity Imbalances**: Unregulated lead intake causes high-visibility representatives to become overloaded with follow-up tasks, while other qualified team members remain underutilized.

CURQ resolves these challenges through a two-tier **Rule-Based Assignment** engine that evaluates territory boundaries, member specialization, and rolling workload limits before distributing prospects.

---

### Architecture of Rule-Based Lead Assignment

The assignment workflow functions as a sequential filtering and load-balancing pipeline:

```{mermaid}
flowchart LR
    subgraph S1 ["1. Team Routing Tier"]
        A["Inbound Lead"] --> B["`**Territory Match**
        Country & Revenue`"] --> C["Target Team"]
    end
    subgraph S2 ["2. Member Allocation Tier"]
        C --> D["`**Capacity Check**
        Reps & Quotas`"] --> E["`**Round-Robin**
        Distribution`"] --> F["`**Converted Deal**
        Opportunity`"]
    end
```

#### 1. Two-Tier Domain Hierarchy
Lead routing evaluates criteria at both the team and individual representative levels:
* **Team Assignment Domains**: When an inquiry arrives (via web form, email alias, or API import), the engine matches lead properties against team-level domain expressions (`assignment_domain`). This routes enterprise opportunities to the Enterprise Sales Team, technical inquiries to Solutions Engineering, or regional leads to localized sales units.
* **Member Assignment Domains**: Within a team, individual sales representatives can have dedicated sub-domains (`assignment_domain` on the team member profile). For instance, a multilingual representative can be targeted exclusively for leads originating from French- or German-speaking territories.

#### 2. Capacity Governance & Load Balancing
To maintain balanced workloads, the assignment engine enforces rolling capacity ceilings:
* **Rolling 30-Day Capacity (`assignment_max`)**: Each team member has a configurable threshold defining the maximum volume of leads they can receive in a rolling 30-day window.
* **Dynamic Capacity Bypass**: If a representative reaches their 30-day quota, the distribution algorithm automatically bypasses them and routes subsequent matching prospects to eligible colleagues with available capacity.
* **Assignment Opt-Out (`assignment_optout`)**: Representatives on leave, supervisors, or team leaders can enable **Skip auto assignment**, exempting their profiles from automated distribution without removing them from team performance reporting.

#### 3. Execution Triggers and Automatic Conversion
Lead assignment operates through two complementary modes:
* **On-Demand Manual Execution**: Team leaders can trigger distribution instantly by clicking **Assign Leads** on the sales team form view.
* **Automated Scheduled Cron**: Organizations can schedule automated routing runs (e.g., every hour) via background cron automation.
* **Automatic Opportunity Conversion**: When rule-based assignment allocates a lead to a salesperson, CURQ automatically executes `_assign_and_convert_leads`, transitioning the unscrubbed lead record into a qualified opportunity within the representative’s active pipeline board.

---

### The Mechanics of Predictive Lead Scoring

Rather than relying on subjective intuition or static point heuristics (such as adding arbitrary points for clicking a link), CURQ implements statistical probability modeling to calculate real-time win probabilities.

#### 1. How Predictive Probability is Calculated
The predictive scoring engine evaluates an active opportunity's chances of closing as **Won** by comparing its observed attributes against historical deal outcomes:

* **Baseline Win Rate**: The system begins with your overall historical win rate across all past opportunities in the database.
* **Attribute Impact**: It analyzes how frequently each specific attribute (for example, stage, sales team, geographic location, or email and phone completeness) appeared among past won deals compared to lost deals.
* **Calibrated Win Probability**: By evaluating the influence of each attribute, the algorithm produces a calibrated win probability percentage in real time without requiring external machine learning infrastructure.

#### 2. Statistical Dimensions Evaluated
The predictive engine stores frequency distributions in historical scoring frequency tables across specific deal dimensions:

* **Mandatory Baseline Dimensions**:
  * **Stage**: Stage progression serves as the structural anchor of probability. As an opportunity advances from *New* to *Qualified* to *Proposition*, its baseline probability rises to match historical stage completion rates.
  * **Sales Team**: Accounts for differing closing rates across different sales units and commercial go-to-market motions.
* **Configurable Categorical Dimensions**:
  * **Phone Quality (`phone_state`)**: Evaluates the completeness, format validity, and presence of direct telephone numbers.
  * **Email Quality (`email_state`)**: Evaluates deliverability, corporate domain structure, and verified sender records.
  * **Geographical Attributes (`country_id`, `state_id`)**: Factors regional conversion variances and territory-specific win rates.
  * **Marketing Attribution (`source_id`, `medium_id`)**: Measures historical conversion efficacy across marketing channels (e.g., organic search vs. paid advertising vs. partner referrals).

#### 3. Data Governance and Algorithmic Prerequisites
To maintain scoring accuracy and data integrity, predictive lead scoring enforces strict governance constraints:

* **Lead Creation Cutoff Date**: Market dynamics, pricing tiers, and competitive environments evolve. Evaluating deals closed five years ago under obsolete pricing models skews modern predictions. Administrators configure a cutoff threshold (typically restricting data to the preceding 12 to 24 months) to ensure training sets reflect current commercial conditions.
* **Sample Size & Cold-Start Behavior**: The Naïve Bayes model requires statistical significance to make accurate predictions (a recommended baseline of at least 50 to 200+ closed won/lost opportunities). In new installations or low-volume pipelines, the engine defaults to stage baseline probabilities until sufficient throughput is achieved.
* **Protection of Manual Overrides**: Sales representatives frequently possess qualitative context that algorithms cannot detect (e.g., verbal executive confirmation). If a salesperson manually edits the probability percentage on an opportunity card, CURQ locks the manual value. Automated retraining passes and stage transitions **will not overwrite manual probability overrides** unless explicitly cleared.

---

### Related Documentation
* [Core Concepts: Understanding Leads vs. Opportunities in CURQ](./01-understanding-leads-vs-opportunities.md)
* [Task Guide: Configure Sales Teams and Rule-Based Lead Assignment](../task-guides/06-configure-sales-teams-and-assignment.md)
* [Task Guide: Configure Predictive Lead Scoring](../task-guides/11-configure-predictive-lead-scoring.md)
* [Settings and Fields: Pipeline Configuration and Assignment Settings](../settings-and-fields/02-pipeline-configuration-and-assignment-settings.md)
