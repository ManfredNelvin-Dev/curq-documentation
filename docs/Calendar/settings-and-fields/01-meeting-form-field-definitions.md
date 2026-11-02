# Meeting Form Field Definitions

This reference document details the header parameters, event scheduling attributes, recurrence controls, invitation tracking columns, and classification fields on the Meeting form in CURQ 18 Calendar.

---

## 1. Primary Event Header & Scheduling Fields

Defines the essential scheduling parameters, timestamps, duration, and access controls for the calendar event:

| Field Name | Description |
| :--- | :--- |
| **Meeting Subject** | Descriptive title or agenda header of the meeting (e.g., `Quarterly Product Roadmap Review`). |
| **Start** | Starting date and specific time for the scheduled session. |
| **End** | Concluding date and specific time for the session. |
| **Duration** | Total length of the meeting expressed in decimal hours (e.g., `0.50` for 30 minutes, `1.00` for 1 hour). |
| **All Day** | Checkbox indicating whether the event spans the entire calendar day without specific hourly start/end constraints. |
| **Recurrent** | Toggle enabling the recurrence engine for repeating series. |
| **Location** | Physical room designation, office branch name, or geographical address. |
| **Videocall URL** | URL link to an online conferencing room (e.g., Google Meet, MS Teams, Zoom, or CURQ Discuss). |
| **Tags** | Categorical labels used to filter and visually classify calendar entries (e.g., *Internal*, *Customer Demo*, *Urgent*). |
| **Privacy** | Controls visibility: *Public* (visible to all users), *Private* (visible only to attendees), or *Only internal users*. |
| **Organizer** | User account responsible for scheduling and managing the meeting lifecycle. |
| **Description** | Rich-text narrative field for meeting agendas, meeting minutes, shared URLs, or preparation requirements. |
| **Reminders** | Multi-select notification rules configuring pop-up alerts, automated emails, or SMS alerts prior to event start. |
| **Attendees** | Multi-select field containing all internal colleagues and external contacts invited to the event. |

---

## 2. Recurrence Configuration Fields

When the **Recurrent** checkbox is active, the following recurrence rules are exposed:

| Field Name | Description |
| :--- | :--- |
| **Repeat** | Recurrence frequency interval: *Daily*, *Weekly*, *Monthly*, or *Yearly*. |
| **Repeat Every** | Numerical multiplier determining interval spacing (e.g., repeat every `2` weeks). |
| **Timezone** | Reference geographical timezone evaluated when scheduling recurring instances across global participants. |
| **Until** | Defines when the series terminates: by fixed *End Date*, after a specified *Number of repetitions*, or *Forever*. |

---

## 3. Attendee Invitation Tracking Columns

Defines the invitation status and communication coordinates for each invited participant:

| Column Name | Description |
| :--- | :--- |
| **Attendee** | Name of the invited user or external contact. |
| **Email** | Contact email address used for invitation and reminder delivery. |
| **Phone** | Contact telephone or mobile number used for SMS alerts. |
| **Status** | Current RSVP response state: *Needs Action*, *Accepted*, *Declined*, or *Tentative*. |

---

## Related Documentation

* [Create Your First Meeting](../getting-started/01-create-your-first-meeting.md)
* [Plan a Recurring Meeting](../getting-started/02-plan-a-recurring-meeting.md)
* [Calendar Views and Navigation Controls](./02-calendar-views-and-navigation-controls.md)
