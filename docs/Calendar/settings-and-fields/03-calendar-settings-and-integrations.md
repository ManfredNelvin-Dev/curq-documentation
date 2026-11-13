# Calendar Settings and Integrations

This reference document details the system-wide configuration options, third-party synchronization parameters, and cross-application activity settings available in CURQ 18 Calendar.

---

## 1. Calendar General Settings

> **Warning - Cross-System Impact (Calendar Synchronization & Timezones):** Modifying third-party OAuth credentials or disconnecting calendar synchronization without clearing cached events can result in duplicate meeting entries or unexpected event deletions across connected user devices. Furthermore, altering the company global working calendar or user timezone directly recalculates delivery promises in Sales, project task deadlines in Project, and SLA target clocks in Helpdesk. Always confirm timezone settings before deploying calendar integrations.

System-wide administrative parameters accessible under **Settings → General Settings → Integrations**:

| Field Name / Configuration Option | Description |
| :--- | :--- |
| **Google Calendar Synchronization** | Enables bi-directional event synchronization with Google Workspace calendars. Requires authorized Google Client ID and Client Secret credentials. |
| **Outlook Calendar Synchronization** | Enables bi-directional synchronization with Microsoft 365 and Outlook calendars. Requires registered Microsoft Azure App Client ID and Client Secret. |
| **Automatic Synchronization** | When enabled, runs scheduled cron jobs to update calendar events between CURQ and external providers automatically. Can be paused for maintenance. |

---

## 2. Cross-Module Activity Workflows

Defines how Calendar integrates with record chatters across other business applications:

| Field Name / Application Link | Integration Functionality |
| :--- | :--- |
| **CRM** | Schedule sales pitches, client discovery calls, and product demonstrations directly from Opportunity records into user calendars. |
| **Projects** | Coordinate milestone reviews, sprint planning sessions, and task follow-ups linked to specific project tasks. |
| **Helpdesk** | Schedule technical troubleshooting sessions and escalation calls with customers from support tickets. |
| **Appointments** | Expose public online booking links allowing external contacts to book slots directly into team members' calendars. |

---

## 3. Configuration Validation Checklist

Before releasing calendar and appointment features across your organization, verify the following parameters:

| Verification Parameter | Scope & Configuration Target | Required Role |
| :--- | :--- | :--- |
| **Google Calendar / Outlook Sync** | Verify whether API credentials and OAuth redirect URIs are active and authorized. | Administrator |
| **Outgoing Email Server** | Confirm that system mail servers can dispatch `.ics` calendar invitation attachments to external attendees. | Administrator |
| **Video Conferencing** | Check that default meeting URLs (CURQ Discuss, Google Meet, or Microsoft Teams) are configured. | User / Admin |
| **Reminder Channels** | Confirm that notification channels (browser notifications, emails, and SMS gateways) are functional. | User / Admin |
| **Access Rights** | Validate that user roles have appropriate visibility over personal and team calendars. | Administrator |

---

## Related Documentation

* [Create Meetings from Chatter](../task-guides/04-create-meetings-from-chatter.md)
* [Meeting Form Field Definitions](./01-meeting-form-field-definitions.md)
* [Calendar Views and Navigation Controls](./02-calendar-views-and-navigation-controls.md)
* [Navigate the Calendar](../task-guides/01-navigate-the-calendar.md)
