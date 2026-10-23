# Reference: Pipeline Configuration and Assignment Settings

This document provides factual specifications and data tables for pipeline stages, sales teams, rule-based routing, and predictive scoring parameters in CURQ.

---

### Pipeline Stage Properties

| Field Name | Description |
| :--- | :--- |
| **Stage Name** | The title rendered at the head of the Kanban column and in stage breadcrumbs (e.g., `Technical Evaluation`). |
| **Is Won Stage?** | When enabled, moving an opportunity into this stage automatically marks it as won and sets probability to 100%. |
| **Folded in Pipeline** | When enabled, collapses the Kanban column vertically to save screen space when empty. |
| **Requirements** | Guidance displayed to salespeople outlining milestone prerequisites for moving deals into this stage. |

---

### Sales Team Parameters

| Parameter | Description |
| :--- | :--- |
| **Sales Team** | The official organizational title of the sales group (e.g., `EU`, `Enterprise Sales US`). |
| **Pipeline** | Checkbox that enables the Kanban pipeline board and stage tracking for this team. |
| **Leads** | Checkbox enabling this sales team to receive and process unassigned incoming leads. |
| **Team Leader** | The manager supervising the unit with administrative oversight across team opportunities. |
| **Email Alias** | Inbound email address prefix that automatically generates new opportunities assigned to this team. |
| **Accept Emails From** | Controls sender authorization policy for incoming email aliases (e.g., `Everyone`, `Authenticated Partners`). |
| **Company** | Multi-company entity association defining operational currency and data access rights. |
| **Invoicing Target** | The monthly revenue quota used in CRM reporting dashboards and monthly forecast evaluations. |
| **Team Members** | The commercial representatives belonging to the team who receive lead allocations. |
| **Skip auto assignment** | Checkbox on individual team members to exempt them from automated lead routing. |
| **Leads (30 days)** | Caps the maximum volume of unassigned leads routed to an individual representative within a rolling 30-day window. |
| **Member Domain** | Optional user-specific filter criteria specifying which subgroup of team leads route to this representative. |

---

### Rule-Based Assignment Parameters

| Setting | Description |
| :--- | :--- |
| **Rule-Based Assignment** | Enables automated lead routing based on assignment domains, team membership, and capacity limits. |
| **Running** | Determines execution trigger: **Manually** (triggers only when clicking *Assign Leads*) or **Repeatedly** (enables background cron automation). |
| **Repeat Every** | Defines the background execution frequency for automated lead distribution (e.g., Every `1` `Hours`). |
| **Assignment Domain** | Logical search filter (e.g., `Country is in ...` AND `Expected Revenue >= 50,000`) defining which leads route to this specific team. |

---

### Predictive Lead Scoring Parameters

| Parameter | Description |
| :--- | :--- |
| **Predictive Lead Scoring** | Built-in Bayesian statistical engine that computes real-time win probabilities for pipeline opportunities. |
| **Consider leads created as of the** | Historical cutoff threshold date. Records created prior to this date are excluded from algorithm training sets. |
| **Statistical Analysis Fields** | Additional attributes evaluated alongside Stage (`Phone Quality`, `Email Quality`, `Country`, `State`, `Source`) to calculate probability. |
| **Update Probabilities** | Action button that triggers retraining of probability weights across all active qualified leads. |

---

### Related Documentation
* [How-To: Configure Custom Pipeline Stages](../task-guides/05-configure-pipeline-stages.md)
* [How-To: Configure Sales Teams and Rule-Based Lead Assignment](../task-guides/06-configure-sales-teams-and-assignment.md)
* [How-To: Configure Predictive Lead Scoring](../task-guides/11-configure-predictive-lead-scoring.md)
* [Explanation: Understanding Lead Assignment and Predictive Scoring](../core-concepts/02-understanding-lead-assignment-and-predictive-scoring.md)
