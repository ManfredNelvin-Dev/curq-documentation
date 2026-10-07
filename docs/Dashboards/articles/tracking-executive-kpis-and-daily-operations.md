# Daily Business Monitoring with Dashboards

How a growing company tracks daily sales, watches unpaid bills, and builds quick personal dashboards in CURQ 18.

---

### 1. The Real-World Challenge

At **Nova Supplies**, managers were spending hours every week compiling numbers:

1. **Slow Weekly Reports**: Every Friday, managers copied numbers into Excel sheets to show the director how the week went. By Monday morning, the numbers were already old.
2. **Surprise Unpaid Invoices**: The team only noticed overdue customer bills at the end of the month when cash ran short.
3. **Too Many Apps**: Managers had to click between Sales, Invoicing, and Inventory every morning just to check urgent work.

With CURQ 18 Dashboards, Nova Supplies replaced manual reports with two simple tools:
* **Standard Dashboards**: Pre-built company dashboards that show live sales, finance, and logistics figures automatically.
* **My Dashboard**: A personal home page where each manager pins their own daily lists and shortcuts.

---

### 2. Step 1: Check Company Numbers in Standard Dashboards

Every Monday morning, the company director checks overall performance:

1. Open the **Dashboards** app from the main menu.
2. In the left sidebar, click **Sales**.
3. The dashboard instantly shows:
   * Total sales this month.
   * Top-selling products and sales reps.
   * Total revenue vs target.
4. Use the filter at the top to switch between **This Month**, **This Quarter**, or a specific branch.
5. Click any bar or chart segment to jump straight to the actual sales orders.

---

### 3. Step 2: Build a Personal Daily Cockpit in "My Dashboard"

The operations manager wants one screen each morning showing urgent orders and overdue invoices:

1. **Pin Overdue Invoices**:
   * Go to **Invoicing > Customers > Invoices**.
   * In the search bar, filter by **Overdue**.
   * Click **Favorites > Add to my dashboard**.
   * Name it `Overdue Invoices` and click **Add**.
2. **Pin Urgent Deliveries**:
   * Go to **Inventory > Delivery Orders**.
   * Filter by **Waiting** or **Late**.
   * Click **Favorites > Add to my dashboard**.
   * Name it `Delayed Deliveries` and click **Add**.
3. **Arrange the Layout**:
   * Open **Dashboards > My Dashboard**.
   * Click **Change Layout** and choose **2 Columns** or **3 Columns**.
   * Drag the cards to place deliveries on the left and unpaid bills on the right.

---

### 4. Step 3: Add a Custom Department Dashboard

When the company needs a new dashboard (like team headcount or departmental KPIs):

1. Go to **Dashboards > Configuration > Dashboards**.
2. Click **+ New**.
3. Enter the category name: `Operations`.
4. Click the cloud icon to save the category.
5. Under the **Spreadsheets** tab, click **Add a line**:
   * **Name**: `Team Headcount`.
   * **Group**: Pick a user group (such as `Administration`) if only managers should see it. Leave blank for everyone.
   * **Is Published**: Check this box so users can see it.
6. Click the pencil icon (**Edit**) on the row to open the spreadsheet editor.

---

### 5. Step 4: Add Simple Data, Scorecards, and Charts

Inside the spreadsheet editor:

1. **Type your data**:
   * Cell `A1` to `A4`: Department names (*Administration*, *Sales*, *Logistics*).
   * Cell `B1` to `B4`: Employee count (*4*, *6*, *10*).
   * Cell `B5`: `=SUM(B1:B4)`.
2. **Add a Scorecard KPI**:
   * Click cell `B5` (total count).
   * Click **Insert > Chart** from the top menu.
   * On the right panel, set **Chart type** to **Scorecard** and enter the title `Total Team`.
3. **Add a Bar Chart**:
   * Highlight cells `A1:B4`.
   * Click **Insert > Chart** and select **Column**.
4. Click **Dashboards** at the top to exit. The changes save automatically.

---

### 6. Summary of Benefits

* **No More Manual Reports**: Numbers update live from actual transactions.
* **Everything in One Place**: Managers see their own urgent tasks on one morning screen.
* **Safe and Secure**: Confidential reports (like payroll or profit) can be locked to managers only.
