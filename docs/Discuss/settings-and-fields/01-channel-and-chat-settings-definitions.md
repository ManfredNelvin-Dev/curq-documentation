# Channel and Chat Settings Definitions

This document provides a factual, scannable catalog of properties, parameters, presence indicators, and action options across the CURQ Discuss workspace.

---

## Channel Configuration Properties

The following fields and options are accessible on the channel settings form (**Discuss > Channel Gear Icon**):

| Field / Setting | Description |
| :--- | :--- |
| **Channel Name** | The unique title of the room. Formatted automatically with a `#` prefix in lowercase syntax. |
| **Description** | Brief explanation of the channel's purpose, operational scope, and usage guidelines visible in channel directories. |
| **Privacy: Everyone** | Public channel. Discoverable and joinable by all internal system users without administrative approval. |
| **Privacy: Invited people only** | Private channel. Hidden from global directory searches; access is granted strictly through explicit invitations from existing members. |
| **Privacy: Auto Subscribe Groups** | Relational user groups (e.g., `Sales / User`, `Accounting / Accountant`). Users assigned to these groups are enrolled into the channel automatically upon creation. |
| **Members: Member Name** | Relational link to the partner/user profile enrolled in the channel. |
| **Members: Role / Actions** | Displays membership status and provides the deletion action to revoke channel access. |

---

## Workspace Navigation Elements

| Folder / View | Purpose & Operational Behavior |
| :--- | :--- |
| **Inbox** | Central repository collecting unread `@mentions`, broadcast alerts, and updates on followed business documents. |
| **Starred** | Bookmarked messages flagged by the user across any channel, direct chat, or document chatter for future reference. |
| **History** | Archive containing read and cleared notifications previously processed from the Inbox. |
| **Channels** | Group discussion rooms categorized by topic, department, or operational project. |
| **Direct Messages** | One-on-one and private ad-hoc group conversations restricted to explicitly invited participants. |

---

## Real-Time User Presence Status Specifications

| Status Indicator | System Trigger & Operational Meaning |
| :--- | :--- |
| **Online** | Active. The user has CURQ open in an active browser tab with recent mouse, keyboard, or navigation activity. |
| **Away / Idle** | Inactive. The user's browser session has remained open with zero user interaction for 30 consecutive minutes. |
| **Offline** | Disconnected. The user has logged out, closed their browser tab, or experienced network loss. |
| **System Bot** | Automated platform assistant (e.g., CURQBot) executing background automations and onboarding guidance. |

---

## Message Action Menu Definitions

Options available via message hover actions and the three vertical dots menu:

| Action | Function | Scope & Permissions |
| :--- | :--- | :--- |
| **Emoji Reaction** | Attaches a visual emoji icon badge directly beneath the message bubble. | Available to all conversation participants. |
| **Quote** | Embeds the referenced message text into the composer with attribution. | Available to all conversation participants. |
| **Star** | Flags the message into the user's personal **Starred** folder. | Personal to the user; does not alter message state for others. |
| **Pin** | Attaches the message to the conversation's header Pinned Messages drawer. | Channel-wide; visible to all members. |
| **Edit** | Opens an inline text editor to modify previously submitted message content. | Available exclusively to the message author. |
| **Delete** | Permanently purges the message from the conversation database. | Available to the message author and system administrators. |
| **Mark as Unread** | Resets the conversation read marker to this specific message timestamp. | Personal to the user. |
| **Copy Link** | Generates a persistent permalink URL linking directly to the message. | Available to all conversation participants. |

---

## Header Toolbar Tools and Security Settings

| Tool / Icon | Parameter | Technical Specification |
| :--- | :--- | :--- |
| **Bell Icon** | Notification Controls | Sets conversation mute timers and channel alert sensitivities. |
| **Magnifying Glass** | Conversation Search | Searches text content across the channel history with author and timestamp indices. |
| **Paperclip** | Attachments Drawer | Displays chronologically indexed file uploads, images, and documents. |
| **Attachments Drawer** | **External User Upload Security** | Toggle switch controlling whether portal users and external guests are permitted to upload binary files into the thread. |
| **Push Pin** | Pinned Messages Drawer | Displays permanent announcements and reference guidelines pinned by members. |
| **People Icon** | Members Drawer | Displays active member rosters, presence circles, and the user invitation popover. |

---

### Related Documentation
* [Create and Manage Channels](../task-guides/01-create-and-manage-channels.md)
* [Manage Conversation Header Tools and Search](../task-guides/07-manage-conversation-header-tools-and-search.md)
* [Notifications and User Preferences Specifications](02-notifications-and-user-preferences-specifications.md)
