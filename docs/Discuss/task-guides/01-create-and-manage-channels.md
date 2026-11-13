# Create and Manage Channels

Create public and private communication rooms, configure channel access permissions, invite coworkers, search existing channels, and manage group membership in CURQ Discuss.

> **Prerequisites**
> * Active user account with **Discuss / User** rights.
> * Active enterprise user profiles configured in the corporate directory.

---

## 1. Create and Configure Channels

### 1.1 Create a Public Channel

Public channels are open to all internal employees and serve as transparent communication spaces for company-wide announcements, general discussions, or cross-functional interest groups.

1. Navigate to the **Discuss** app from your main dashboard (or open the top-right chat menu).
2. In the left navigation sidebar, locate the **Channels** heading.
3. Click the **+** (plus) icon next to **Channels**:

   ![Create channel inline input](../media/003.png)

4. Type a **Group Name** (e.g., `company-news` or `sales-leads`). Channel names automatically lowercase and prefix with `#`.
5. Click **Create: #channel-name** (or press **Enter**).
6. The newly created channel opens immediately in your main chat window and appears in your personal sidebar list:

   ![Created channel view](../media/004.png)

> For technical definitions of **Group Name**, **Channel Type**, **Parent Channel**, **Sub Channels**, **From Message**, **Sfu Channel Uuid**, and **Sfu Server Url**, see [**General and Technical Channel Fields**](../settings-and-fields/01-channel-and-chat-settings-definitions.md#11-general-and-technical-channel-fields).

---

### 1.2 Create a Private Restricted Channel

Private channels restrict access to authorized groups or explicitly invited participants. They keep sensitive executive discussions, HR reviews, or private project pods isolated from general staff:

1. In the left sidebar, click the **+** (plus) icon next to **Channels**.
2. Type the desired **Group Name** (e.g., `management-review`).
3. Click **Create: #management-review**.
4. Once the channel opens, click the **Gear** (Settings) icon next to the channel name in the left sidebar.
5. In the channel form view, select the **Privacy** tab.
6. In the **Authorized Group** field, assign the specific security group permitted to view the room (or restrict to invited members only via the **Members** tab rather than `User types / Internal User`):

   ![Channel privacy settings](../media/014.png)

7. Click the cloud icon (or navigate away) to save. Access is now strictly restricted.

---

### 1.3 Configure Channel Descriptions and Auto-Subscribe Rules

To provide clear guidance to participants and automate enrollment for departments or roles:

1. Hover over the channel name in the sidebar and click the **Gear** icon to open the configuration form.
2. Optionally upload a **Channel Image / Avatar** and enter a **Description** outlining the channel's purpose, response expectations, and acceptable topics.
3. Optionally link a **Parent Channel** (or add nested **Sub Channels**).
4. Under the **Privacy** tab, configure automated enrollment options:
   * **Authorized Group**: Controls the user security group permitted to access the room *(e.g., `User types / Internal User`)*.
   * **Auto Subscribe Groups**: Select one or more user groups (e.g., `Sales / User` or `Accounting / Accountant`). Existing and newly created users in those groups are enrolled automatically.
   * **Auto Subscribe Departments**: Select HR departments so all employees in those divisions are automatically subscribed.
5. Click the cloud icon in the top-left toolbar to save changes.

> For definitions of **Authorized Group**, **Auto Subscribe Groups**, and **Auto Subscribe Departments**, see [**Privacy Tab**](../settings-and-fields/01-channel-and-chat-settings-definitions.md#12-privacy-tab).

> **Tip:** Use **Auto Subscribe Groups** and **Auto Subscribe Departments** for vital operational rooms (such as `#finance-ops` or `#operations`) so new hires are automatically placed into relevant channels upon onboarding.

---

## 2. Add or Remove Channel Members

### 2.1 Add Teammates to a Channel
1. Open the target channel in Discuss.
2. In the top-right header toolbar, click the **People** icon to expand the members drawer:

   ![Conversation members drawer invite](../media/020.png)

3. Click **Invite a User**.
4. In the search box, select the colleague you wish to add.
5. Alternatively, open the channel settings form (Gear icon), select the **Members** tab, click **Add a line**, and select the **Partner** (or external **Guest**) from the list:

   ![Channel members tab](../media/015.png)

### 2.2 Remove Members from a Channel
1. Open the channel settings form (Gear icon) and navigate to the **Members** tab.
2. Locate the target **Partner** or **Guest** row in the list.
3. Click the **Trash Can** (Delete) icon on the right end of their row.
4. Click the cloud icon to confirm removal. The user loses immediate access to the channel feed.

> For details on **Partner**, **Guest**, and member removal controls, see [**Members Tab**](../settings-and-fields/01-channel-and-chat-settings-definitions.md#13-members-tab).

---

## 3. Search and Join an Existing Channel

If a colleague has already created a public channel and you want to participate:

1. Click the **+** (plus) icon next to **Channels** in the sidebar.
2. Begin typing keywords matching the channel name (e.g., `operations`):

   ![Join existing channel search](../media/021.png)

3. When the matching channel appears in the suggestion dropdown, click on it.
4. CURQ adds the channel to your sidebar and displays the message history immediately.

---

## 4. Leave or Unsubscribe from a Channel

When a project concludes or you no longer require updates from a specific room:

1. Locate the channel under your **Channels** list in the left sidebar.
2. Hover over the channel name and click the **X** (Leave) icon that appears beside it.
3. A confirmation modal appears asking if you want to leave `#channel-name`. Click **Leave Channel**.
4. The channel is removed from your sidebar. For public channels, you can rejoin at any time using the search tool; for private channels, an existing member must reinvite you.

---

## Related Documentation
* [Send Direct and Group Messages](02-send-direct-and-group-messages.md)
* [Collaborate with Mentions, Reactions, and Attachments](03-collaborate-with-mentions-reactions-and-attachments.md)
* [Channel and Chat Settings Definitions](../settings-and-fields/01-channel-and-chat-settings-definitions.md)
* [Understanding Channels, Collaboration, and WebRTC Architecture](../core-concepts/02-understanding-channels-collaboration-and-webrtc-architecture.md)
