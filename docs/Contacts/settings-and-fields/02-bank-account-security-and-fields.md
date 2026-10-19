# Reference: Bank Account Fields and Security Badges

This document details the data fields, validation specifications, and security risk indicators used within the CURQ banking directories.

---

### Bank Directory Fields

| Field Name | Description |
| :--- | :--- |
| **Name** | The registered, legal name of the financial institution (e.g., `JPMorgan Chase`, `BNP Paribas`). |
| **Bank Identifier Code** | Standardized SWIFT / BIC code used for domestic and international interbank clearing (e.g., `CHASUS33`). |
| **Bank Address** | Street, City, State, ZIP, and Country of the primary branch or institutional headquarters. |
| **Phone** | Official telephone contact for the financial institution. |
| **Email** | Official administrative or clearing inquiry email address. |

---

### Partner Bank Account Fields

| Field Name | Description |
| :--- | :--- |
| **Account Number** | The bank account number or International Bank Account Number (IBAN). Validated according to the nation's checksum algorithm when an IBAN structure is recognized. |
| **Bank** | Linked record from the Bank Directory. Automatically resolves BIC/SWIFT code for payment files. |
| **ABA / Routing** | Domestic routing transit number (used for Fedwire/ACH clearing in the United States and equivalent domestic clearing systems). |
| **Account Holder** | The CURQ partner entity (individual or company) that owns this account. |
| **Account Holder Name** | The exact legal entity name registered on the external bank statement. Used for payee reconciliation. |
| **Company** | Internal legal operating unit that manages transactions with this account in a multi-company database. |
| **Send Money** | Authorizes outgoing cash disbursements. Directly controls the **Untrusted** vs. **Trusted** status badge. |

---

### Security Badges and Risk Levels

| Status Badge / Warning | Trigger Condition | System Behavior |
| :--- | :--- | :--- |
| **Untrusted** | Any newly created bank account before verification. | Outgoing automated wire payments, batch payouts, and customer refunds are blocked. |
| **Trusted** | The **Send Money** toggle is turned on by an authorized user. | Outgoing payment orders and SEPA/NACHA payment export files are fully enabled. |
| **High Risk (Payment Provider)** | Account number matches known ranges for money service businesses (MSBs), virtual accounts, or electronic wallets rather than clearing banks. | Renders high-visibility alert banner on the account form advising immediate verbal verification. |
| **Medium Risk (Country Mismatch)** | The country code of the IBAN differs from the primary registered country of the partner contact card. | Renders cautionary banner on the account form flagging cross-border routing discrepancy. |

---

## Related Documentation

* [Reference: Contact Form Field Definitions](./01-contact-form-field-definitions.md)
* [Reference: Geographic and Localization Settings](./03-localization-and-country-settings.md)
* [How-To: Register and Authorize Partner Bank Accounts](../task-guides/08-manage-partner-bank-accounts.md)
* [Explanation: Understanding Contact Deduplication and Data Integrity](../core-concepts/02-understanding-contact-deduplication-and-data-integrity.md)

