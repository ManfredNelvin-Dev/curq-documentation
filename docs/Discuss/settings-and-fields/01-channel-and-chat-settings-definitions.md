# Channel and Chat Settings Definitions

This document provides a factual, scannable catalog of properties, parameters, presence indicators, and action options across the CURQ Discuss workspace.

---

## 1. Channel Configuration Properties

> **Warning (Channel Visibility & Privacy Risk):** Expanding the **Authorized Group** setting *(for example, switching from a restricted managerial group to `User types / Internal User`)* immediately exposes all historical message archives, attached files, and internal discussions in that room to every user in the expanded group. Never widen access on sensitive HR or executive channels; create a separate general channel instead.

The following fields and tabs are accessible on the channel settings form (**Discuss > Channel Gear Icon**):

### 1.1 General and Technical Channel Fields

| Field Name | Description |
| :--- | :--- |
| **Group Name** | The primary title of the channel displayed in the sidebar and header *(formatted automatically with a `#` prefix, e.g., `# operations`)*. |
| **Channel Image / Avatar** | Camera upload box (`📷 +`) in the top-right corner for attaching a custom channel icon or department badge. |
| **Channel Type** | Classification of the room *(e.g., `Channel`)* determining conversation behavior and visibility rules. Includes a help tooltip (`?`). |
| **Description** | Brief explanation of the channel's purpose, operational scope, and usage guidelines *(placeholder: `Topics discussed in this group...`)*. |
| **Parent Channel** | Optional parent channel linking this room beneath a higher-level topic hierarchy. Includes a help tooltip (`?`). |
| **Sub Channels (`Name`)** | Inline sub-table listing nested child channels created under this parent channel. |
| **From Message** | Reference to the originating message when a channel or thread is created directly from an existing discussion post. Includes a help tooltip (`?`). |
| **Sfu Channel Uuid** | Unique Selective Forwarding Unit (SFU) identifier governing WebRTC audio/video conference routing for this channel. |
| **Sfu Server Url** | Endpoint URL of the SFU media server handling real-time multi-party video and voice streams. |

### 1.2 Privacy Tab

Parameters under the **Privacy** tab govern who can discover, access, and automatically join the channel:

| Field Name | Description |
| :--- | :--- |
| **Authorized Group** | Security user group permitted to access and participate in the channel *(e.g., `User types / Internal User`)*. Restrict to a specific department or admin group to limit access, or manage membership explicitly via the **Members** tab. |
| **Auto Subscribe Groups** | Relational user groups *(e.g., `Sales / User`, `Accounting / Accountant`)*. Existing and newly added users in these groups are automatically subscribed to the channel without manual invitations. |
| **Auto Subscribe Departments** | HR departments whose employees are automatically enrolled into the channel upon creation or department assignment. |

### 1.3 Members Tab

The **Members** tab lists all active participants enrolled in the channel and provides inline controls to add or remove access:

| Field Name | Description |
| :--- | :--- |
| **Partner** | Relational link to each enrolled internal user or partner profile *(e.g., `Siddharth Sathyan`)*. Click **Add a line** at the bottom of the table to enroll additional users. |
| **Guest** | Identifies external guest or portal participants granted temporary or invited access to the channel. |
| **Remove Action (`🗑`)** | Trash can icon on the far right end of each member row used to immediately remove the participant and revoke their access to the channel. |

---

## 2. Workspace Navigation Elements

| Folder / View | Purpose & Operational Behavior |
| :--- | :--- |
| **Inbox** | Central repository collecting unread `@mentions`, broadcast alerts, and updates on followed business documents. |
| **Starred** | Bookmarked messages flagged by the user across any channel, direct chat, or document chatter for future reference. |
| **History** | Archive containing read and cleared notifications previously processed from the Inbox. |
| **Channels** | Group discussion rooms categorized by topic, department, or operational project. |
| **Direct Messages** | One-on-one and private ad-hoc group conversations restricted to explicitly invited participants. |

---

## 3. Real-Time User Presence Status Specifications

| Status Indicator | System Trigger & Operational Meaning |
| :--- | :--- |
| **Online** | Active. The user has CURQ open in an active browser tab with recent mouse, keyboard, or navigation activity. |
| **Away / Idle** | Inactive. The user's browser session has remained open with zero user interaction for 30 consecutive minutes. |
| **Offline** | Disconnected. The user has logged out, closed their browser tab, or experienced network loss. |
| **System Bot** | Automated platform assistant (e.g., CURQBot) executing background automations and onboarding guidance. |

---

## 4. Message Action Menu Definitions

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

## 5. Header Toolbar Tools and Security Settings

| Tool / Icon | Parameter | Technical Specification |
| :--- | :--- | :--- |
| **Bell Icon** | Notification Controls | Sets conversation mute timers and channel alert sensitivities. |
| **Magnifying Glass** | Conversation Search | Searches text content across the channel history with author and timestamp indices. |
| **Paperclip** | Attachments Drawer | Displays chronologically indexed file uploads, images, and documents. |
| **Attachments Drawer** | **External User Upload Security** | Toggle switch controlling whether portal users and external guests are permitted to upload binary files into the thread. |
| **Push Pin** | Pinned Messages Drawer | Displays permanent announcements and reference guidelines pinned by members. |
| **People Icon** | Members Drawer | Displays active member rosters, presence circles, and the user invitation popover. |

---

## Related Documentation
* [Create and Manage Channels](../task-guides/01-create-and-manage-channels.md)
* [Manage Conversation Header Tools and Search](../task-guides/07-manage-conversation-header-tools-and-search.md)
* [Notifications and User Preferences Specifications](02-notifications-and-user-preferences-specifications.md)
* [Voice, Video, and Canned Responses Specifications](03-voice-video-and-canned-responses-specifications.md)
