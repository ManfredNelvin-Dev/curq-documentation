# Expenses FAQ

Frequently asked technical, operational, and financial questions regarding CURQ Expenses, receipt capture, approval hierarchies, general ledger postings, customer reinvoicing, and employee reimbursements.

---

## 1. What is the difference between "Employee (to reimburse)" and "Company" in the Paid By field?
* **Employee (to reimburse)**: The staff member used personal funds or a personal payment method for the purchase. The company owes money to the employee, and a reimbursement disbursement (via bank transfer, cash, check, or payroll payslip) is required.
* **Company**: The purchase was paid for using a company payment method or corporate account. No employee reimbursement takes place; the general ledger posting credits the company bank/cash account directly.

---

## 2. Why can't I edit an expense report after submitting it?
Once an expense sheet is submitted to a manager, CURQ locks the document to preserve audit integrity and prevent unauthorized changes while under review. If you need to make corrections:
1. Contact your approving manager and request that they click **Refuse** or return the sheet.
2. If the report is in **Refused** status, click **Reset to Draft** to unlock the report and expense lines, amend the details, and resubmit.

---

## 3. How do I reinvoice an expense to a client if I forgot to select the Sales Order during initial logging?
You can assign or adjust the **Customer to Reinvoice** field at any time before the expense report is formally approved by a manager:
1. Open the draft or submitted expense sheet.
2. Click on the specific expense line.
3. In the **Customer to Reinvoice** field, select the target confirmed sales order *(e.g., `S00048 - John Doe`)*.
4. Ensure the **Analytic Distribution** is properly allocated *(allocations must sum to 100%)*, then save the record.

---

## 4. What happens when a manager refuses an expense report?
When a manager clicks **Refuse**, CURQ requires a mandatory justification note:
1. The status updates to **Refused**.
2. The refusal reason is permanently logged in the record chatter and dispatched to the employee.
3. The employee can inspect the feedback in chatter, click **Reset to Draft**, adjust missing receipts or unallowable lines, and submit the report again via **Submit to Manager**.

---

## 5. How does OCR receipt scanning work in CURQ Expenses?
When **Expense Digitization (OCR)** is activated in **Configuration > Settings**:
* Dragging and dropping a PDF or image into **My Expenses**, or clicking the dark blue **Upload** button, triggers automated optical character recognition.
* The system detects the vendor name, invoice date, currency, total amount, and taxes, creating a pre-populated draft record in **Generate Expenses**.
* The employee opens the record, reviews the extracted values against the side-by-side receipt preview, selects the category, and creates the report.

---

## 6. Can we reimburse employees through monthly payroll payslips instead of bank transfers?
Yes. If your company uses CURQ Payroll:
1. Enable **Reimburse in Payslip** under **Expenses → Configuration → Settings**.
2. Open an **Approved** expense report *(before posting)*.
3. In the upper action bar, click **Report in Next Payslip**.
4. The approved amount is automatically added as a non-taxable reimbursement allowance line on the employee's next scheduled payroll payslip.
5. The report status updates to **Posted**, and advances to **Done** when the payslip is processed.

---

## 7. How does quantity-based mileage reimbursement calculate totals?
When an expense category *(e.g., `Mileage`)* has a fixed cost rate defined on its master record *(e.g., `€ 1.00` per mile)*:
1. The employee selects the category on the expense form.
2. The employee enters the total distance traveled in the **Quantity** field *(e.g., `50`)*.
3. CURQ automatically calculates the line total:
   ```text
   Total = 50 × € 1.00 = € 50.00
   ```

---

## 8. Why is an expense report marked "Approved" but the employee has not received payment?
Approval and payment are separate operational steps in CURQ to enforce segregation of duties:
1. **Approval** is performed by department managers to authorize business necessity.
2. **Posting** must then be executed by the accounting team via **Post Journal Entries** to commit the liability to the general ledger.
3. **Payment** must finally be registered by finance via **Pay** (or **Report in Next Payslip**) to disburse funds.

---

## Related Documentation

* [Record and Submit Your First Expense](./getting-started/01-record-and-submit-your-first-expense.md)
* [Approve, Post, and Reimburse Expenses](./getting-started/02-approve-post-and-reimburse-expenses.md)
* [Understanding the Expense Lifecycle and Accounting Flow](./core-concepts/01-understanding-the-expense-lifecycle-and-accounting-flow.md)
* [Expense Record and Report Field Definitions](./settings-and-fields/02-expense-record-and-report-field-definitions.md)
* [Expense Reimbursement and Posting Field Definitions](./settings-and-fields/03-expense-reimbursement-and-posting-field-definitions.md)
