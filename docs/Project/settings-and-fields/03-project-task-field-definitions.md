# Project Task Field Definitions

This document provides a comprehensive data dictionary for all header controls, primary configuration attributes, and notebook tabs within the CURQ Project task form view.

---

## 1. Task Header and Primary Information Fields

The task form header captures primary identification, resource allocation, and timeline metadata:

### Task Header Fields

| Field Name | Description |
| :--- | :--- |
| **Task Title** | Primary name and description of the deliverable *(e.g., `Design Responsive Homepage Layout`)*. |
| **Project** | Reference link to the parent project workspace *(e.g., `Website Redesign`)*. |
| **Milestone** | Optional selection field linking the task to a broader project milestone release *(e.g., `Product Launch`)*. |
| **Assignees** | Multi-select selector designating team members and technical specialists responsible for delivery. |
| **Tags** | Categorical labels used for filtering and cross-project reporting. |
| **Sprint** | Agile iteration selector associating the task with a planned development sprint. |
| **Planned Dates** | Timestamp recording the scheduled start date and time of the task. |
| **Deadline** | Hard completion date establishing schedule constraints and escalation tracking. |
| **Allocated Time** | Planned hours budgeted for the deliverable with real-time percentage completion tracking. |

### Task Header Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Tickets Smart Button** | Displays the count of linked Helpdesk customer support tickets and opens them directly on click. |
| **Start Work Button** | Clicking the green play icon opens the work timer modal to start real-time timesheet clocking. |
| **Stage Chevron Buttons** | Clicking any stage chevron on the status bar transitions the task directly to that stage and logs the duration. |

---

## 2. Sub-Tasks Tab Data Dictionary

The **Sub-tasks** tab provides a nested breakdown for dividing complex work items into manageable sub-deliverables:

### Sub-Tasks Fields

| Field Name | Description |
| :--- | :--- |
| **Title** | Text description specifying the granular sub-task deliverable. |
| **Assignees** | Dedicated specialist assigned to complete the specific sub-task item. |

### Sub-Tasks Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Add a line** | Inserts a new editable sub-task entry row into the table. |

---

## 3. Extra Info Tab Data Dictionary

The **Extra Info** tab provides technical metadata, display customization, and automated audit timestamps:

| Field Name | Description |
| :--- | :--- |
| **Parent Task** | Relational link designating the primary task when nesting this deliverable within an epic. |
| **Sequence** | Integer ranking *(default `10`)* governing the manual sort order of tasks on Kanban boards and lists. |
| **Email cc** | Notification field defining additional stakeholder email addresses to receive task updates. |
| **Cover Image** | Image upload field allowing users to attach visual headers displayed on the Kanban card. |
| **Assigning Date** | Automated read-only timestamp logging when the current assignee was delegated the task. |
| **Last Stage Update** | Automated read-only audit timestamp recording the most recent stage transition. |

---

## 4. Start Work Modal and Timesheets Tab Data Dictionary

Clicking **Start work** on the task header opens the live work timer configuration dialog over the active Timesheets tab:

### Start Work Modal Fields

| Field Name | Description |
| :--- | :--- |
| **Description (Modal)** | Narrative entry field defining the specific development or design activity being started. |
| **Start Time** | Automated system timestamp capturing the exact moment work commenced. |
| **End Time** | Completion timestamp populated when the active timer is stopped. |
| **Project (Modal)** | Read-only relational field verifying the target project workspace. |
| **Task (Modal)** | Read-only relational field verifying the target deliverable. |

### Start Work Modal Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Start new timer** | Commits the initial session parameters, closes the modal, and starts real-time clock tracking. |
| **Cancel** | Closes the modal dialog immediately without starting a timer or recording work time. |

### Timesheets Tab Fields

| Field Name | Description |
| :--- | :--- |
| **Date** | Calendar date on which timesheet hours were logged. |
| **Employee** | Name or role designation of the specialist logging work hours. |
| **Description** | Detailed record of technical deliverables completed during the logged period. |
| **Time Spent** | Calculated duration of logged timesheet hours against the deliverable. |

### Timesheets Tab Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Add a line** | Inserts a new manual timesheet row so specialists can record offline or retrospective work hours. |

---

## 5. Active Work Tracking Controls

When a work timer is running, CURQ transforms header controls and provides real-time timesheet feedback:

### Active Tracking Indicators

| Indicator | Description |
| :--- | :--- |
| **Stage Duration Badge** | Time counter displayed on the active stage chevron *(e.g., `To Do 8m`)* measuring dwell time in the current stage. |
| **Active Timer Indicator** | Rotating ring icon and live running counter on the active timesheet row displaying real-time duration. |

### Active Tracking Buttons and Behavior

| Button | Behavior |
| :--- | :--- |
| **Stop Work Button** | Clicking the square stop icon terminates active timer tracking, populates **End Time**, and commits elapsed time to the timesheet line. |
| **Delete Timesheet Entry** | Clicking the trash bin icon removes unneeded or duplicate timesheet rows. |

---

## Related Documentation

* [Create and Manage Your First Project](../getting-started/01-create-and-manage-your-first-project.md)
* [Create and Manage Project Tasks](../task-guides/04-create-and-manage-project-tasks.md)
* [Configure Sub-Tasks and Task Hierarchies](../task-guides/05-configure-sub-tasks-and-task-hierarchies.md)
* [Understanding Project Task Lifecycles and Stage Workflows](../core-concepts/01-understanding-project-task-lifecycles-and-stages.md)
