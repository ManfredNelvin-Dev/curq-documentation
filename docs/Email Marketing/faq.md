# Email Marketing FAQ

Frequently asked questions about outgoing mail server configuration, mailing lists, campaign scheduling, deliverability, bounce management, and recipient tracking in CURQ 18.

---

## 1. How do I configure Email Marketing to send emails through a dedicated server?
To isolate bulk marketing broadcasts from transactional business emails, navigate to **Email Marketing > Configuration > Settings**, check the **Dedicated Server** option, and select your configured outgoing SMTP mail server. Always test the server connection under **Settings > Technical > Outgoing Mail Servers** before dispatching a campaign.

## 2. What is the difference between a Mailing List and an individual Mailing?
A **Mailing List** is a reusable subscriber group containing contact email addresses. A **Mailing** is an individual email broadcast created with specific subject lines, design blocks, and recipient criteria. You can send multiple distinct mailings to the same mailing list over time.

## 3. How does A/B testing work in CURQ Email Marketing?
Enable **Allow A/B Testing** on a draft mailing to split an initial sample percentage *(e.g., 20%)* between two content or subject line variants. After a designated testing window, CURQ evaluates performance based on your chosen metric *(highest open rate or highest click rate)* and automatically sends the winning version to the remaining 80% of your audience.

## 4. How do I schedule an email marketing campaign for future delivery?
Open your composed mailing, verify recipient criteria and content, and click **Schedule** in the top action bar. Select the desired calendar date and time, then confirm. CURQ places the mailing into the **In Queue** stage and automatically transmits it when the scheduled time arrives via the background cron worker.

## 5. How can I track open rates, clicks, and bounce performance?
Navigate to **Email Marketing > Reporting > Mass Mailings** to review aggregate performance across graphical, pivot, and list views. Use the **Measures** selector to analyze delivered count, open percentage, link clickthroughs, and bounce statistics. To evaluate click performance on specific URLs, open **Configuration > Link Tracker**.

## 6. How does CURQ prevent emails from being sent to unsubscribed contacts?
When a recipient clicks unsubscribe, CURQ marks their subscription as opted out for that specific list. If **Blacklist Option when Unsubscribing** is enabled in settings, the email address is added to the global **Blacklisted Email Addresses** database, unconditionally suppressing all future marketing dispatches across every module.

## 7. Can I send email marketing broadcasts directly to CRM Leads or Sales Orders without creating a mailing list?
Yes. On the mailing creation form, change the **Recipients** selector from `Mailing List` to your desired business model, such as `Lead/Opportunity` or `Sales Order`. You can then define granular domain filter rules *(such as country, stage, or tags)* to dynamically target those records.
