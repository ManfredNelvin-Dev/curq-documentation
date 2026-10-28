# Grant and Validate Employee Allocations

The **Management → Allocations** interface allows Time Off Officers and HR Administrators to assign leave entitlements to individual employees, configure accrual plans, and review incoming employee allocation requests. This guide explains how to create regular and accrual allocations, validate employee requests, and manage entitlement lifecycles.

---

### Task 1: Access the Allocations Management Interface

Open the administrative allocations workspace:

1. Open the **Time Off** application.
2. In the top navigation bar, click **Management** and select **Allocations**:

   ![Navigating to Allocations from the Management menu](../media/023.png)

3. The **Allocations** list view opens:

   ![Allocations list view with default filters and pending requests](../media/024.png)

4. The view applies the **First Approval** and **My Team** filters by default to highlight pending allocation requests submitted by team members you supervise.

---

### Task 2: Create a Single Employee Allocation

To grant a new leave allowance to an employee:

1. In the top-left action bar, click **New**:

   ![Allocations list view with New button highlighted](../media/025.png)

2. Complete the primary allocation fields:
   * **Name**: Enter a clear administrative title *(e.g., `Annual Vacation - 2026` or `Compensatory Days - Event Setup`)*.
   * **Time Off Type**: Select the leave category being granted *(e.g., **Paid Time Off**)*.
   * **Allocation Type**:
     * Choose **Regular Allocation** to credit a fixed balance immediately.
     * Choose **Accrual Allocation** to associate the employee with an automated accrual plan.
   * **Allocation Quantity**: Enter the total number of days or hours to grant *(e.g., `15.00 Days`)*.
   * **Employee**: Select the employee who will receive the balance.
   * **Validity Period**: For regular allocations, specify the date when the allowance becomes effective and an optional expiration date.
   * **Add a reason...**: Provide operational context explaining why the allowance was granted.

---

### Task 3: Approve and Validate the Allocation

Finalize the allocation to activate the leave balance:

1. Review all form fields.
2. In the top action bar, click **Approve**:

   ![Allocation form view in To Approve stage with Approve button highlighted](../media/026.png)

3. The record status updates to **Approved**:

   ![Allocation record updated to Approved status with chatter history](../media/027.png)

4. An automated audit log entry is posted to the record chatter, recording the authorizer's name, timestamp, and balance amount.
5. The employee can now view the approved entitlement under **My Time → My Allocations**:

   ![Employee My Allocations list view displaying approved leave entitlements](../media/028.png)

---

### Task 4: Review Incoming Employee Allocation Requests

When employees submit self-service requests for additional leave allocations:

1. Open **Management → Allocations**.
2. Locate requests marked with status **To Approve**.
3. Inspect the requested leave type, requested amount, and employee reason.
4. Process the request:
   * **Approve**: Click **Approve** on the row to grant the requested balance.
   * **Refuse**: Click **Refuse** to reject the request. Provide feedback in the chatter explaining why the allocation could not be granted.

---

### Edge Cases & Recovery Steps

* **Allocation Not Visible to Employee**: Verify that the allocation record has reached **Approved** status. Allocations in **Draft** or **To Approve** do not credit the employee's active balance.
* **Dual Approval Required**: If the allocation status moves to **Second Approval** after clicking **Approve**, the leave type requires authorization by a Time Off Officer or HR Administrator before activation.
* **Filter Hiding Completed Records**: By default, the Allocations catalog filters by **First Approval** (pending). Clear the filter in the search bar or select **Approved** from the left-hand status panel to audit existing grants.

---

## Related Documentation

* [Set Up Your First Leave Allocation](../getting-started/02-set-up-your-first-leave-allocation.md)
* [Allocate Time Off to Multiple Employees](./06-allocate-time-off-to-multiple-employees.md)
* [Accrual Plans and Milestone Specifications](../settings-and-fields/02-accrual-plans-and-milestone-specifications.md)
