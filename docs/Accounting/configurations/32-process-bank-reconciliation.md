# Bank Reconciliation

Bank reconciliation is the process of matching bank transactions with records in your accounting system, such as customer invoices, supplier invoices, and payments. This process is essential for maintaining accurate financial records and helps reduce errors, detect discrepancies, and improve cash flow management.

CURQ uses reconciliation models to help automate this process. These models can automatically identify and match bank transactions with the corresponding accounting entries, significantly reducing manual work.

---

## General

From the Accounting Dashboard, you can monitor bank transactions through the available bank journal tiles. CURQ indicates when there are transactions waiting to be reconciled.

For automatic synchronization of bank transactions, CURQ recommends using the **MyPonto** integration, which imports transactions directly from your banking environment.

In addition to automatic synchronization, bank statements can also be imported manually using the following formats:
- CAMT.053.001.02
- CAMT.054.001.02
- CSV
- XLS

You can access all transaction lines by selecting the three-dot menu (⋮) on the relevant bank journal tile.

To reconcile transactions, click **Reconciliation Lines** on the relevant bank journal from the dashboard. CURQ will display all transaction lines that are ready for reconciliation. By default, only unreconciled lines are shown, but you can remove the search filter to display previously reconciled transactions as well.

> [!IMPORTANT]
> If you accidentally reconcile a transaction incorrectly, always remove the incorrect reconciliation entries first by deleting the associated lines before processing the transaction again.

> [!NOTE]
> When a transaction line is selected, it becomes highlighted. This indicates that the line is active and available for further actions such as assigning VAT codes, selecting accounts, or applying reconciliation models.

---

## Reconciliation Scenarios

### Reconcile a Fully Paid Invoice
When the transaction line contains the correct customer or supplier, the payment amount exactly matches an outstanding invoice, and the invoice number is included in the transaction description, CURQ automatically suggests the correct match.

You can also configure CURQ to automatically confirm these matches without manual intervention. This behavior can be configured through:
`Invoicing → Configuration → Reconciliation Rules`

### Reconcile Overpayments and Underpayments
Payment amounts do not always exactly match invoice amounts. CURQ supports several scenarios.

#### Scenario 1: Partial Payment
If a customer pays less than the invoice amount, CURQ automatically matches the received amount against the outstanding invoice balance.

The remaining amount can either:
- Remain open as an outstanding balance.
- Be written off directly to another ledger account.

To write off the remaining balance, select the transaction line and choose to mark the invoice as fully paid. The difference can then be assigned to a write-off account either manually or through a reconciliation model.

#### Scenario 2: Small Payment Differences
Sometimes customers pay an amount that differs by only a few cents from the invoice total.

To automate these situations, you can configure a tolerance amount in the reconciliation model and specify a ledger account for posting the difference. CURQ will then automatically reconcile the invoice and write off the remaining amount.

#### Scenario 3: One Payment for Multiple Invoices
Customers may pay several invoices in a single transaction.

In this situation, search for the customer and select multiple outstanding invoices to match against the payment. CURQ also allows invoices from different customers to be included if necessary.

For example:
1. Add Invoice 1 for Customer A.
2. Search for Customer B.
3. Add Invoice 2 for Customer B.

The payment amount will be distributed across the selected invoices.

---

### Reconcile a Payment Without an Invoice
Sometimes a bank transaction does not have a corresponding invoice.

In this case:
1. Select the transaction line.
2. Open the **Manual Operations** tab.
3. Choose the appropriate general ledger account.
4. Confirm the reconciliation.

---

### Reconcile a Payment Without an Invoice Including VAT
A payment may need to be recorded directly against an expense account while also including VAT.

In this situation:
1. Select the appropriate expense account.
2. Choose the correct VAT code.
3. CURQ automatically calculates the VAT amount and creates the necessary accounting entries.

The generated VAT entry will automatically appear in the correct section of the VAT return.

---

### Reconcile a SEPA Payment Batch
When using the SEPA payment functionality, multiple supplier invoices can be paid through a single payment batch.

After importing the bank statement:
1. Select the transaction line.
2. Search for the corresponding SEPA payment batch.
3. Assign the batch as the reference.
4. Confirm the reconciliation.

CURQ will automatically reconcile all invoices included in the payment batch.

---

## Undo a Reconciliation
If a reconciliation was completed incorrectly, it can be reversed.

To undo a reconciliation:
1. Open the reconciled transaction.
2. Click **Undo Reconciliation**.
3. Confirm the action.

The transaction will return to an unreconciled state and can be processed again.

---

## Additional Features

### Chatter
The Chatter feature is available directly from the reconciliation screen.

You can use Chatter to:
- Ask colleagues questions about a transaction.
- Share notes or comments.
- Attach supporting documents such as invoices or bank statements.

This makes collaboration and audit tracking easier during reconciliation activities.

### Additional Verification
If a transaction requires further review, you can mark it as **To Be Checked**.

This flag makes the transaction visible throughout the accounting system and indicates that additional verification is required before final approval.

After reviewing the transaction, click **Set as Checked** to remove the flag and confirm that the review has been completed.
