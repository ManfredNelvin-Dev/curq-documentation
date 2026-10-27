# Understanding Channels, Collaboration, and WebRTC Architecture

This document explains the information topology of team channels, the dynamics of cross-departmental alignment, and the architectural principles behind browser-native WebRTC media streaming in CURQ Discuss.

---

## Organizational Channel Topology and Information Flow

Effective enterprise communication requires balancing open transparency with confidential security. CURQ structures group communications into distinct architectural spaces to support varying levels of organizational scope:

```{mermaid}
flowchart TD
    subgraph "Organizational Communication Spectrum"
        PUB["`**Public Channels (#general, #news)**
        • Open Discovery & Self-Subscription
        • Cross-Functional Transparency
        • Company-Wide Alignment`"]
        PRIV["`**Private Channels (#leadership, #hiring)**
        • Explicit Member Invitations Only
        • Departmental & Project Isolation
        • Hidden from Directory Searches`"]
        DM["`**Ad-Hoc Group Chats**
        • Lightweight Multi-Party Peer Streams
        • Zero Channel Directory Overhead
        • Transient Collaboration Pods`"]
    end
```

## 1. Public Channels: Cross-Functional Transparency
Public channels provide transparent, self-subscribing information hubs accessible to every authenticated employee in the company.
* **Knowledge Democratization**: Important updates, product announcements, and company milestones are shared in spaces where any team member can discover and learn from ongoing discussions.
* **Reduction of Information Silos**: Cross-functional topics (such as `#product-updates` or `#general-discussion`) break down traditional departmental walls, allowing marketing, sales, and engineering to maintain mutual awareness without scheduled status meetings.

## 2. Private Channels: Governance and Sensitive Scopes
Private channels restrict visibility strictly to explicitly invited participants.
* **Security Isolation**: Channels reserved for executive leadership, financial audits, human resources evaluations, or proprietary research remain invisible in general directory searches.
* **Role-Based Membership**: Administrators can map private channels to specific security groups (e.g., automatically enrolling all users with the `Accounting / Accountant` credential into `#finance-restricted`), ensuring that staffing changes automatically update channel rosters without manual maintenance.

## 3. Ephemeral Ad-Hoc Chats: Eliminating Channel Sprawl
Traditional chat platforms suffer from "channel sprawl"—hundreds of dead, abandoned rooms created for short-lived conversations. CURQ addresses this by distinguishing permanent channels from multi-user direct chats. Team members can spin up transient group chats for 2-3 coworkers to resolve a temporary inquiry, preserving permanent channel directories for authentic long-term topics.

---

## Cross-Departmental Collaboration and Operational Velocity

Operational friction in enterprise workflows rarely occurs *within* departments; it occurs at the *handoff points between* departments. Consider an urgent commercial event: a key enterprise customer confirms a substantial sales order that requires expedited same-day dispatch, custom packaging, and special payment terms:

```{mermaid}
flowchart LR
    subgraph "Cross-Department Synchronization"
        S["`**Sales**
        • Confirmed Order
        • Chatter Note @Warehouse`"] --> W["`**Warehouse & Logistics**
        • Pack & Pick Verification
        • Sync in #operations`"]
        W --> A["`**Accounting & Billing**
        • Immediate Invoice Generation
        • Canned Terms Applied`"]
        W <--> M["`**Instant Ad-Hoc Meeting**
        • 2-Minute Video Sync
        • Visual Packaging Check`"]
    end
```

## 1. Breaking the Inter-Departmental Delay Loop
In fragmented operations, coordinating this urgent request requires a chain of phone calls, disjointed emails, and unsynchronized spreadsheets:
* The salesperson emails the warehouse manager. The email sits unread in an overloaded inbox.
* The warehouse manager calls the packing lead, who cannot confirm stock without looking up the order number in a separate system.
* When minor product scuffs or packing variances are identified, work halts completely while teams wait for a scheduled meeting or email reply.

## 2. Frictionless Resolution via CURQ's Unified Stack
In CURQ, the entire coordination process takes place within minutes through interconnected communication mechanisms:
1. **Context-Rich Tagging**: The salesperson logs an internal note on the Sales Order tagging the warehouse lead. The lead receives an instant alert that links directly to the specific picking list.
2. **Channel Broadcast**: The warehouse lead alerts dispatch drivers in the `#operations` channel, where coworkers acknowledge readiness using instant emoji reactions.
3. **Ad-Hoc Video Verification**: When packaging conditions require rapid visual confirmation, an instant 2-minute video conference launched via the **Start a meeting** tool allows the salesperson to inspect the item via webcam and grant immediate approval.
4. **Standardized Customer Updates**: The commercial representative utilizes pre-approved canned responses to send professional tracking links to the client within seconds of courier handoff.

Every decision, approval, and visual confirmation remains permanently attached to the underlying sales transaction, ensuring comprehensive accountability with zero administrative delay.

---

## Synchronous vs. Asynchronous Communication Matrix

Choosing the right communication medium determines whether an organization maintains high productivity or suffers from continuous interruption:

| Mode | Communication Channel | Characteristics & Latency | Best Operational Use Case |
| :--- | :--- | :--- | :--- |
| **Asynchronous Record-Bound** | Document Chatter (`Log note`, `Send message`) | Low interruption; permanent transactional audit trail; searchable context. | Approvals, quote reviews, customer correspondence, specifications, warehouse notes. |
| **Asynchronous Group Discussion** | Topic Channels (`#operations`, `#sales`) | Medium interruption; visible to whole team; searchable history. | General announcements, department updates, non-urgent inquiries, policy discussions. |
| **Semi-Synchronous Peer Chat** | Direct Messages & Group Chats | Targeted interruption; real-time conversational exchange. | Time-sensitive peer questions, quick clarifications, confidential one-on-one checks. |
| **High-Bandwidth Synchronous** | WebRTC Video Calls & Screen Sharing | Immediate interruption; complete visual and verbal bandwidth; temporary session. | Complex debugging, design reviews, urgent visual inspections, high-stakes negotiations. |

---

## Native WebRTC Architecture and Media Streaming

CURQ incorporates modern WebRTC (Web Real-Time Communication) protocols directly into the browser client, eliminating the requirement for third-party meeting licenses, desktop client installations, or proprietary conferencing servers:

```{mermaid}
flowchart TD
    subgraph "WebRTC Peer Connection"
        A["`**User A Browser**
        • Microphone & Camera
        • Client-Side Canvas Blur
        • DTLS-SRTP Media Packetizer`"] <===>|"Encrypted Audio/Video (SRTP)"| B["`**User B Browser**
        • Audio Output & Video Renderer
        • Hardware Acceleration
        • Jitter Buffer Management`"]
    end
```

## 1. Browser-Native Execution Without Third-Party Plugins
Traditional enterprise conferencing tools require users to install heavy desktop agents or browser extensions that consume memory and present enterprise IT compliance risks. 
* CURQ uses the native WebRTC engine integrated directly into modern web browsers.
* Calling is instantaneous: clicking the meeting button immediately initiates secure media streaming without software launch delays or operating system permission conflicts.

## 2. Peer-to-Peer and Mesh Media Streaming
For one-on-one and small group calls, CURQ establishes direct peer connections using standard ICE (Interactive Connectivity Establishment) frameworks:
* **Direct Audio/Video Transport**: Media streams flow directly between participating user browsers over secure SRTP (Secure Real-time Transport Protocol).
* **Minimal Latency**: By bypassing intermediary media encoding servers, audio delay and packet latency are minimized.
* **Corporate Privacy**: Call content is encrypted end-to-end between participants via DTLS-SRTP, ensuring corporate discussions cannot be intercepted on transit networks.

## 3. Client-Side Canvas Video Processing
Features such as real-time background blur are executed entirely on the local user's graphics hardware through HTML5 Canvas and WebGL shaders:
* The user's device segments the video silhouette locally before video frames are packetized and transmitted.
* Raw unblurred camera frames never leave the user's computer, guaranteeing privacy in personal home offices or sensitive physical environments.

## 4. Diagnostic Telemetry and Connection Transparency
WebRTC operates across unpredictable corporate local networks, firewalls, and VPN connections. To assist network administrators in diagnosing connectivity issues, CURQ exposes complete raw session telemetry through structured RTC logs. IT personnel can analyze ICE candidate states, round-trip times, and jitter buffer metrics without deploying intrusive network sniffing utilities.

---

### Related Documentation
* [Understanding Unified Business Communication and Chatter Architecture](01-understanding-unified-business-communication-and-chatter-architecture.md)
* [Start and Manage Voice and Video Calls](../task-guides/04-start-and-manage-voice-and-video-calls.md)
* [Configure Voice and Video Hardware and Backgrounds](../task-guides/08-configure-voice-and-video-hardware-and-backgrounds.md)
* [Voice, Video, and Canned Responses Specifications](../settings-and-fields/03-voice-video-and-canned-responses-specifications.md)
