# Explanation: Understanding Lead Assignment and Predictive Scoring

This document explains the mathematical foundations, automated routing logic, and statistical classification principles underlying rule-based lead allocation and predictive win scoring in CURQ 18.

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

```
                         Inbound Lead / Prospect
                                    │
                                    ▼
                    Team Domain & Territory Matching
              (e.g., Country == US, Expected Revenue >= 50,000)
                                    │
                                    ▼
                           Target Sales Team
                                    │
                      Member Eligibility Filtering
                (Excludes 'Skip auto assignment' users)
                                    │
                                    ▼
                      Member-Specific Domain Check
                 (e.g., Regional territory, Product line)
                                    │
                                    ▼
                      Rolling 30-Day Capacity Check
                 (Current 30-day count < assignment_max)
                                    │
                                    ▼
                   Sequential Round-Robin Distribution
                 (Balanced lead allocation across peers)
                                    │
                                    ▼
                    Automatic Opportunity Conversion
                  (_assign_and_convert_leads execution)
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

Rather than relying on subjective intuition or static point heuristics (such as adding arbitrary points for clicking a link), CURQ implements a **Naïve Bayes statistical classifier** to calculate real-time win probabilities.

#### 1. The Naïve Bayes Probability Model
The predictive scoring engine computes the posterior probability that an active opportunity will successfully close as **Won** given its observed categorical attributes:

$$P(\text{Won} \mid X_1, X_2, \dots, X_n) = \frac{P(\text{Won}) \prod_{i=1}^{n} P(X_i \mid \text{Won})}{P(X_1, X_2, \dots, X_n)}$$

Where:
* $P(\text{Won})$ is the **prior probability**—the baseline historical close rate across all deals in the CRM database.
* $P(X_i \mid \text{Won})$ is the **likelihood**—the frequency with which attribute $X_i$ (e.g., Country = Germany, Phone Quality = Valid) appears among historically successful deals.
* $P(X_1, \dots, X_n)$ is the **marginal probability**—the overall frequency of those attribute values occurring across both Won and Lost deals.

Under the conditional independence assumption of Naïve Bayes, the algorithm evaluates each attribute's statistical contribution independently, enabling lightweight, near-instantaneous recalculations without requiring external machine learning infrastructure.

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
To maintain mathematical integrity, predictive lead scoring enforces strict data governance constraints:

* **Lead Creation Cutoff Date**: Market dynamics, pricing tiers, and competitive environments evolve. Evaluating deals closed five years ago under obsolete pricing models skews modern predictions. Administrators configure a cutoff threshold (typically restricting data to the preceding 12 to 24 months) to ensure training sets reflect current commercial conditions.
* **Sample Size & Cold-Start Behavior**: The Naïve Bayes model requires statistical significance to make accurate predictions (a recommended baseline of at least 50 to 200+ closed won/lost opportunities). In new installations or low-volume pipelines, the engine defaults to stage baseline probabilities until sufficient throughput is achieved.
* **Protection of Manual Overrides**: Sales representatives frequently possess qualitative context that algorithms cannot detect (e.g., verbal executive confirmation). If a salesperson manually edits the probability percentage on an opportunity card, CURQ locks the manual value. Automated retraining passes and stage transitions **will not overwrite manual probability overrides** unless explicitly cleared.

---

### Related Documentation
* [Explanation: Understanding Leads vs. Opportunities in CURQ](./01-understanding-leads-vs-opportunities.md)
* [How-To: Configure Sales Teams and Rule-Based Lead Assignment](../how-to/06-configure-sales-teams-and-assignment.md)
* [How-To: Configure Predictive Lead Scoring](../how-to/11-configure-predictive-lead-scoring.md)
* [Reference: Pipeline Configuration and Assignment Settings](../reference/02-pipeline-configuration-and-assignment-settings.md)
