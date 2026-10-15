# Closing Enterprise Deals with Pipeline Management

An end-to-end commercial walkthrough tracking a high-value B2B contract from website lead capture and qualification to pipeline opportunity management, quotation generation, and signed agreement in CURQ 18.

---

### 1. Scenario Background

At Vertex Solutions, an enterprise software and logistics consultancy, the commercial team manages long-cycle B2B deals involving multiple technical stakeholders, customized scopes of work, and formal executive sign-offs.

A prospective client, NorthStar Logistics, submits an enterprise contact form on the corporate website seeking a modernization package valued at approximately EUR 65,000 alongside an ongoing annual service contract.

Without an integrated CRM, inquiries of this size risk communication bottlenecks, missed follow-ups, and fragmented handovers between qualification staff and senior account managers. By routing the prospect through CURQ CRM, the organization maintains end-to-end tracking from the initial web inquiry to the confirmed sales order.

---

### 2. Step-by-Step Commercial Walkthrough

#### Step 1: Inbound Lead Generation from the Website
1. A decision-maker at NorthStar Logistics completes the contact form on the company website, specifying requirements for warehouse modernization, technical timelines, and budget expectations.
2. CURQ automatically generates an unscrubbed lead record in **CRM > Leads** with the subject `Warehouse Modernization Inquiry`.
3. Based on the configured **Rule-Based Assignment** domain (such as territory or deal scale), CURQ routes the lead to the Enterprise Accounts team.
4. The lead record captures the prospect details, including contact name, work email address, direct phone, and the original web message text.

#### Step 2: Lead Scrubbing, Deduplication, and Qualification
1. A commercial coordinator opens **CRM > Leads** to inspect the new record.
2. They review the **Similar Lead** smart button on the form to verify that NorthStar Logistics does not already exist as an active inquiry, preventing conflicting outreach.
3. The coordinator logs an initial **Call** activity in the Chatter to verify project scope and commercial readiness.
4. Having confirmed that NorthStar Logistics has an approved budget and an active implementation initiative, the coordinator clicks **Convert to Opportunity** in the top action bar.
5. In the conversion dialog:
   * **Conversion Action**: Select `Convert to opportunity`.
   * **Customer**: Select `Create a new customer` to instantiate the customer profile for NorthStar Logistics.
   * **Sales Team**: Assign to `Enterprise Solutions`.
   * **Salesperson**: Assign to the designated account executive.
6. Clicking **Create Opportunity** converts the raw lead into an opportunity and opens it inside the Kanban pipeline.

#### Step 3: Opportunity Discovery and Pipeline Progression
1. The assigned account executive opens the opportunity card in the **New** stage of **CRM > Sales > My Pipeline**.
2. In the opportunity form, the executive enters key deal attributes:
   * **Expected Revenue**: `EUR 65,000.00`.
   * **Recurring Plan**: Selects `Annually` with an ongoing software retainer.
   * **Priority**: 3 stars (High Priority).
   * **Tags**: Attaches commercial tags such as `Software` and `Consulting`.
3. Using the Chatter, the executive schedules an **Activity Plan** (such as an onboarding or technical discovery sequence) that creates calendar milestones for requirements review, architecture design, and executive presentation.
4. After conducting the technical discovery session, the account executive drags the Kanban card to the **Qualified** column.
5. The Predictive Lead Scoring model evaluates stage progression and communication quality, automatically adjusting the opportunity win probability to reflect the qualified status.

#### Step 4: Generating and Sending the Formal Quotation
1. When project scope and commercial terms are established, the account executive opens the opportunity.
2. In the top action bar, they click the **New Quotation** button.
3. CURQ generates a linked sales quotation pre-populated with customer contact details, price list rules, payment terms, and the assigned sales team.
4. The account executive adds the required line items:
   * Core Warehouse Management Software License.
   * 120 Hours Implementation and Consulting Services.
5. They send the quotation by email directly through CURQ, enabling online electronic signature and customer portal review.
6. Returning to the Kanban board, the executive advances the opportunity to **Proposition**. The smart button on the opportunity updates to show `1 Quotation` with the linked monetary total.

#### Step 5: Customer Approval, Winning the Deal, and Order Fulfillment
1. Executive leadership at NorthStar Logistics reviews the online proposal in the customer portal and signs the agreement electronically.
2. The account executive opens the opportunity in CURQ and clicks the **Won** button in the top action bar.
3. CURQ displays the celebration visual effect, updates the opportunity stage to **Won**, sets the probability to 100%, and attaches the green **Won** ribbon across the record.
4. The linked quotation automatically transitions to a confirmed **Sales Order**, triggering project delivery workflows, warehouse provisioning, and invoice tracking against monthly team targets.

---

### 3. Key Operational Takeaways

* **Continuous Audit Trail**: From initial website submission notes to discovery calls, quotation versions, and signed contracts, the entire commercial history remains unified on a single thread.
* **Zero Data Retyping**: Lead contact details populate the opportunity, which directly populates the quotation and resulting sales order without manual data re-entry.
* **Dynamic Pipeline Analytics**: Moving the deal through stages automatically updates weighted pipeline revenue, sales team target trackers, and predictive win probabilities.
