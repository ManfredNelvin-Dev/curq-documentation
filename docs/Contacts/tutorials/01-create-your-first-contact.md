# Getting Started: Create Your First Contact

Welcome to CURQ 18 Contacts. In this introductory tutorial, you will learn how CURQ organizes business relationships by creating your first company contact and linking an employee to it.

By the end of this exercise, you will understand how companies and individuals are connected and feel confident creating and locating records in your address book.

---

### Prerequisites
* Access to a standard CURQ 18 instance with the **Contacts** app installed.
* No prior configuration is necessary. We will use standard default settings.

---

### Step 1: Open Contacts and Create a Company

1. From the main CURQ dashboard, click the **Contacts** app icon.
2. At the top left of the directory view, click the **New** button.

   ![Click New to create a contact](../media/001.png)

3. Notice the radio buttons at the top of the form: **Individual** and **Company**. Select **Company**.

   ![Blank company contact form](../media/002.png)

4. Enter the primary company information:
   * **Name**: Type `Acme Technologies`.
   * **Address**: Enter a street address, city, state, postal code, and country (for example, `100 Innovation Way, Austin, TX 78701, United States`).
   * **Phone**: Enter `+1 (512) 555-0199`.
   * **Email**: Enter `info@acmetech.com`.

5. Leave all advanced tabs (**Sales & Purchase**, **Invoicing**, etc.) at their default settings for now.
6. Look at the top left near the document title—CURQ saves changes automatically. You can also click the cloud icon to confirm saving.

You now have your first corporate partner in CURQ.

---

### Step 2: Add an Employee Linked to the Company

Now, let's attach a real person to Acme Technologies.

1. On the Acme Technologies company form, select the **Contacts & Addresses** tab.
2. Click the **Add** button. A popup window opens.

   ![Create contact and address modal](../media/003.png)

3. Keep the radio option set to **Contact** (this represents an individual employee).
4. Enter the employee's details:
   * **Contact Name**: `Jane Doe`.
   * **Job Position**: `Procurement Manager`.
   * **Email**: `jane.doe@acmetech.com`.
   * **Phone**: `+1 (512) 555-0142`.
5. Notice that CURQ automatically inherits the street address from Acme Technologies. Leave it as is.
6. Click **Save & Close** at the bottom of the popup window.

Jane Doe now appears as an employee card directly under Acme Technologies.

---

### Step 3: Find Your Contacts in the Directory

Let's verify that both records are visible and accessible in the main address book.

1. Click **Contacts** in the breadcrumbs bar at the top left to return to the main directory.
2. In the search bar at the top center, type `Acme`.
3. Press **Enter**. You will see `Acme Technologies` displayed as a card.
4. Next, clear the search bar, type `Jane Doe`, and press **Enter**.
5. Click on Jane Doe's card. Notice that:
   * Her contact type is **Individual**.
   * The **Company Name** field is automatically linked to **Acme Technologies**.
   * Her business address matches the parent company.

Congratulations! You have completed your first exercise in CURQ Contacts. You now understand how CURQ links individual people to corporate entities.

---

### Next Steps

* To learn how to add separate billing and shipping addresses, see [How-To: Create and Manage Contacts](../how-to/01-create-and-manage-contacts.md).
* To explore all fields, options, and e-invoicing settings in detail, see [Reference: Contact Form Field Definitions](../reference/01-contact-form-field-definitions.md).
* To understand the architectural design behind unified contacts, see [Explanation: Understanding Unified Partner Architecture and Hierarchies](../explanation/01-understanding-unified-partner-architecture-and-hierarchies.md).
