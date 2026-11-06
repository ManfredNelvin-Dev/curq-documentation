# Project Task Field Definitions

This document provides a comprehensive data dictionary for all header controls, primary configuration attributes, and notebook tabs within the CURQ Project task form view.

---

## 1. Task Header and Primary Information Fields

The task form header captures primary identification, resource allocation, and timeline metadata:

| Field Name / Control | Description |
| :--- | :--- |
| **Task Title** | Primary name and description of the deliverable *(e.g., `Design Responsive Homepage Layout`)*. |
| **Tickets Smart Button** | Counter button displaying linked Helpdesk customer support tickets with one-click cross-module navigation. |
| **Start Work Button** | Action button with green play icon initiating real-time work recording and timesheet clocking. |
| **Priority Stars** | Three-star interactive rating control setting operational importance *(Normal, High, Urgent)*. |
| **Stage Status Bar** | Interactive chevron pipeline showing current workflow stage *(e.g., `To Do`, `Started`, `Doing`, `Pending`, `Done`)* with stage duration metrics. |
| **Project** | Reference link to the parent project workspace *(e.g., `Website Redesign`)*. |
| **Milestone** | Optional selection field linking the task to a broader project milestone release *(e.g., `Product Launch`)*. |
| **Assignees** | Multi-select selector designating team members and technical specialists responsible for delivery. |
| **Tags** | Categorical labels used for filtering and cross-project reporting. |
| **Sprint** | Agile iteration selector associating the task with a planned development sprint. |
| **Planned Dates** | Timestamp recording the automated start date and time of the task. |
| **Deadline** | Hard completion date establishing schedule constraints and escalation tracking. |
| **Allocated Time** | Planned hours budgeted for the deliverable with real-time percentage completion tracking. |
| **Status Badge** | System indicator reflecting active execution state *(e.g., `In Progress`)*. |

---

## 2. Sub-Tasks Tab Data Dictionary

The **Sub-tasks** tab provides a nested breakdown for dividing complex work items into manageable sub-deliverables:

| Field Name / Control | Description |
| :--- | :--- |
| **Title** | Text description specifying the granular sub-task deliverable. |
| **Assignees** | Dedicated specialist assigned to complete the specific sub-task item. |
| **Add a line** | Table action button inserting a new sub-task entry row. |

---

## 3. Extra Info Tab Data Dictionary

The **Extra Info** tab provides technical metadata, display customization, and automated audit timestamps:

| Field Name / Control | Description |
| :--- | :--- |
| **Parent Task** | Relational link designating the primary task when nesting this deliverable within an epic. |
| **Sequence** | Integer ranking *(default `10`)* governing the manual sort order of tasks on Kanban boards and lists. |
| **Email cc** | Notification field defining additional stakeholder email addresses to receive task updates. |
| **Cover Image** | Image upload control allowing users to attach visual headers displayed on the Kanban card. |
| **Assigning Date** | Automated read-only timestamp logging when the current assignee was delegated the task. |
| **Last Stage Update** | Automated read-only audit timestamp recording the most recent stage transition. |

---

## 4. Start Work Modal and Timesheets Tab Data Dictionary

Clicking **Start work** on the task header opens the live work timer configuration dialog over the active Timesheets tab:

| Field Name / Control | Description |
| :--- | :--- |
| **Description (Modal)** | Narrative entry field defining the specific development or design activity being started. |
| **Start Time** | Automated system timestamp capturing the exact moment work commenced. |
| **End Time** | Completion timestamp populated when the active timer is stopped. |
| **Project (Modal)** | Read-only relational field verifying the target project workspace. |
| **Task (Modal)** | Read-only relational field verifying the target deliverable. |
| **Start new timer Button** | Action button committing initial parameters and initiating real-time clock tracking. |
| **Cancel Button** | Action button closing the modal dialog without recording work time. |
| **Date (Timesheets Tab)** | Calendar date on which timesheet hours were logged. |
| **Employee (Timesheets Tab)** | Name or role designation of the specialist logging work hours. |
| **Description (Timesheets Tab)** | Detailed record of technical deliverables completed during the logged period. |
| **Add a line Control** | Table control allowing specialists to record offline or retrospective work hours manually. |
| **Time Spent Metric** | Calculated summation of all completed timesheet hours logged against the deliverable. |

---

## 5. Active Work Tracking Controls

When a work timer is running, CURQ transforms header controls and provides real-time timesheet feedback:

| Field Name / Control | Description |
| :--- | :--- |
| **Stop Work Button** | Header action button with square stop icon terminating active timer tracking and committing elapsed minutes to timesheets. |
| **Stage Duration Badge** | Time counter displayed on the active stage chevron *(e.g., `To Do 8m`)* measuring dwell time in current stage. |
| **Active Timer Indicator** | Rotating ring icon and live running counter on the active timesheet row displaying real-time duration. |
| **Delete Timesheet Entry** | Trash bin icon button permitting users to remove unneeded or duplicate timesheet records. |

---

## Related Documentation

* [Create and Manage Your First Project](../getting-started/01-create-and-manage-your-first-project.md)
* [Create and Manage Project Tasks](../task-guides/04-create-and-manage-project-tasks.md)
* [Configure Sub-Tasks and Task Hierarchies](../task-guides/05-configure-sub-tasks-and-task-hierarchies.md)
* [Understanding Project Task Lifecycles and Stage Workflows](../core-concepts/01-understanding-project-task-lifecycles-and-stages.md)
