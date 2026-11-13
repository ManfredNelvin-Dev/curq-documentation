# Project FAQ

Frequently asked technical, operational, and architectural questions regarding CURQ Project, Kanban stage pipelines, agile sprint workflows, timesheet recording, sub-task hierarchies, and cross-module Helpdesk linkages.

---

## 1. How do I enable automated task creation from client emails?
During project initialization in the **Create a Project** modal *(or under project configuration)*:
1. In the **Create tasks by sending an email to** field, enter a unique alias prefix *(e.g., `web`)*.
2. CURQ provisions an inbound address *(e.g., `web@yourcompany.com`)*.
3. Inbound emails sent to this address automatically generate new tasks in the project intake stage *(e.g., `To Do` or `New`)* with the email subject as the task title and the email body as the task description.

---

## 2. What is the difference between the "Timesheets" and "Billable" settings on a project?
* **Timesheets**: Enables the **Timesheets** tab on task forms, active timer tracking via **Start work**, and employee capacity recording. This setting can be used for both internal and commercial projects.
* **Billable**: Automatically routes recorded timesheet hours and project milestone achievements into CURQ Sales and Invoicing, allowing organizations to invoice clients on a Time and Materials (T&M) or fixed-milestone contract basis.

---

## 3. How do I link customer support tickets to project development tasks?
CURQ integrates Helpdesk and Project applications natively:
1. On any Helpdesk ticket form, select the target project workspace in **Project** and the work item in **Task**.
2. On the linked project task form, CURQ increments the **Tickets** smart button counter *(e.g., `1 Tickets`)*.
3. Clicking the **Tickets** smart button on the task form opens the linked support tickets directly, providing engineering teams with direct context from client communications.

---

## 4. What is the difference between project task boards and the My Tasks board?
* **Project Task Boards**: Located at **Project > Projects > [Project Name]**, these boards organize deliverables by operational workflow stages *(e.g., `To Do`, `Started`, `Doing`, `Pending`, `Done`)* specific to that project.
* **My Tasks Board**: Located at **Project > Tasks**, this dashboard consolidates all tasks assigned to the active user across every project in the enterprise, organizing them by execution timeline horizons *(e.g., `Inbox`, `Tomorrow`, `Today`, `This Week`, `This Month`, `Later`)*. Moving a card between time horizons helps specialists structure their workday without altering the formal stage of the task on the parent project board.

---

## 5. What are the differences between Project Visibility options?
* **Invited internal users (private)**: Restricts access strictly to employees and specialists explicitly added as followers or assignees. Tasks remain completely invisible to other corporate users.
* **All internal users**: Grants view, edit, and execution access to all internal company employees across the enterprise.
* **Invited portal users and all internal users (public)**: Allows internal staff full access while enabling external client portal users to follow projects. Adding a portal user as a project follower grants high-level visibility, while adding them to individual tasks allows them to collaborate on specific deliverables.

---

## Related Documentation

* [Create and Manage Your First Project](./getting-started/01-create-and-manage-your-first-project.md)
* [Track Work Hours and Manage Timesheets](./getting-started/02-track-work-hours-and-manage-timesheets.md)
* [Create and Manage Project Tasks](./task-guides/04-create-and-manage-project-tasks.md)
* [Project Dashboard and Kanban Card Definitions](./settings-and-fields/01-project-dashboard-and-kanban-card-definitions.md)
* [Project Task Field Definitions](./settings-and-fields/03-project-task-field-definitions.md)
