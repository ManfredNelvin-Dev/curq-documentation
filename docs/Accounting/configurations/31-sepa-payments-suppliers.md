# SEPA Payments to Suppliers

CURQ allows you to make supplier payments efficiently by generating a SEPA XML payment file that can be uploaded directly to your bank. The file contains all selected supplier payments based on criteria such as invoice due dates. After the bank processes the payments, the corresponding bank transactions can be reconciled in CURQ.

---

## 1. Create and Process a Supplier Invoice

Before a supplier invoice can be included in a SEPA payment batch, the supplier record must contain a valid bank account number. Without this information, the supplier cannot be included in a SEPA payment file.

When creating the supplier invoice, make sure to:
- Select the correct supplier.
- Enter the supplier's bank account details on the supplier contact.
- Fill in the **Invoice Reference** field on the supplier invoice. This field is mandatory for SEPA payment processing.
- Validate (confirm) the supplier invoice.

*[Image placeholder: Supplier invoice with supplier bank account and invoice reference completed]*

---

## 2. Create an Outgoing Payment Order

Once the supplier invoices have been validated, they can be added to a SEPA payment batch.

**Navigation:**
`Accounting → Vendors → Outgoing Payment Orders`

Click **New** to create a payment order.

### Configure the Payment Order
1. Select the desired **Date Filter Type**.
2. Choose the appropriate **Due Date** or date range.
3. Click **Add All Transactions** to retrieve all supplier invoices that match the selected criteria.
4. Review the invoices that will be included in the payment batch.
5. Click **Create Transactions** to generate the payment transactions.

*[Image placeholder: Outgoing Payment Order showing selected invoices]*

---

## 3. Generate the SEPA XML File

A payment order progresses through several stages.
After the transactions are created, proceed through the workflow until the **File Created** stage.

At this stage, CURQ generates a SEPA XML file containing all selected supplier payments.

### Upload the File to Your Bank
1. Download the generated XML file.
2. Log in to your online banking application.
3. Import the SEPA XML file.
4. Submit the payment batch through the bank.

The actual file upload and payment authorization are performed outside CURQ using your banking platform.

*[Image placeholder: Payment order in the "File Created" stage with generated XML file]*

---

## 4. Mark the File as Uploaded

After successfully uploading the file to the bank, return to CURQ and move the payment order to the **File Uploaded** stage.

This action performs the following updates:
- The supplier invoices included in the batch are marked as **Paid**.
- The total payment amount is posted to an intermediate clearing account (for example, the Creditors in Transit account).
- The payment order is finalized within CURQ.

*[Image placeholder: Payment order in the "File Uploaded" stage]*

---

## 5. Reconcile the Bank Transaction

Once the bank has processed the payment file, the payment will appear on your bank statement.
Bank statements can be imported manually or synchronized automatically through the Ponto integration, which is available in CURQ.

### Reconciliation Process
1. Open the imported bank statement line.
2. Match the transaction with the previously created payment order.
3. Validate the reconciliation.

During reconciliation:
- The balance on the intermediate creditors account is cleared.
- The supplier payment is fully settled.
- The bank account balance is updated accordingly.

*[Image placeholder: Bank reconciliation matching the payment order]*
