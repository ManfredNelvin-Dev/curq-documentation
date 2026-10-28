# Track Active Sessions with the Work Timer

This guide details how to track working time in real time using the CURQ interactive work timer, switch between tasks seamlessly without session collision, and automatically convert running sessions into accurate timesheet lines.

---

### Task 1: Launch the Work Timer Modal

Access the live timer from the Timesheets navigation interface:

1. Open the **Timesheets** application.
2. In the top navigation bar, click the **Timesheets** menu.
3. Select **Start work**:

   ![Navigating to Start work in the top navigation bar](../media/014.png)

4. The **Start work** dialog window opens in a focused modal.

---

### Task 2: Specify Session and Deliverable Parameters

Configure activity metadata before launching the clock:

![Start work dialog window displaying entry fields and action button](../media/026.png)

1. Complete the session parameters:
   * **Project**: Choose the target customer or internal project.
   * **Task**: Select the specific task deliverable within the project. Selecting the project automatically restricts the task list to valid deliverables.
   * **Description**: Enter an operational summary describing the work about to be performed.
   * **Start Time**: Initialized automatically with the current system timestamp.

---

### Task 3: Run and Monitor the Active Timer

Initiate the real-time tracking session:

1. Click **Start new timer** at the bottom of the dialog:

   ![Active timesheet entry form displaying real-time tracking session details](../media/025.png)

2. The timer begins actively recording elapsed time:
   * A live timesheet entry displays the project, task, start time, and running duration.
   * You can freely navigate across other CURQ modules while the timer runs continuously in the background.

---

### Task 4: Transition Between Concurrent Tasks

To switch activities when an active timer is already running:

1. Re-open **Timesheets** > **Start work**.
2. CURQ detects the active session and displays a **PREVIOUS TIMER** warning banner:

   ![Start work dialog displaying the Previous Timer notification and stop confirmation button](../media/027.png)

3. Review the running timer's details, including its accumulated duration *(e.g., `00:03 hour(s)`)*.
4. Select the new **Project** and **Task** for the upcoming deliverable.
5. Click **Stop previous timer and start the new one**.
6. The system automatically finalizes and logs the previous session before immediately starting tracking on the new task.

---

### Task 5: Stop and Save Timer Durations

Conclude your tracking session and convert time into persistent records:

1. When work on the deliverable concludes, stop the active timer.
2. The duration is converted into an atomic timesheet record (`account.analytic.line`).
3. The entry immediately reflects in your **My Timesheets** log and aggregates into the active **My Timesheet Sheets** weekly matrix grid.

---

### Related Documentation

* [Track Live Work Hours with the Timer](../getting-started/02-track-live-work-hours-with-the-timer.md)
* [Manage Daily Timesheets and Line Entries](./02-manage-daily-timesheets-and-line-entries.md)
* [Create and Submit Timesheet Sheets](./01-create-and-submit-timesheet-sheets.md)
