# Reference: Geographic and Localization Settings

This document details the configuration parameters, ISO standards, and data tables governing geographic localization in CURQ.

---

### Country Fields

| Field Name | Description |
| :--- | :--- |
| **Country Name** | Official sovereign nation name (e.g., `United States`, `Germany`). |
| **Country Code** | Two-letter ISO 3166-1 alpha-2 country code (e.g., `US`, `DE`, `FR`, `IN`). Used in tax validation and international address matching. |
| **Country Calling Code** | International dialing code prefix (e.g., `1`, `49`, `91`) used to format telephone and mobile inputs. |
| **Currency** | Default transactional currency assigned when creating sales orders and invoices with partners in this nation. |
| **Vat Label** | Country-specific tax identifier label displayed on contact forms replacing the generic "Tax ID" (e.g., `VAT`, `GSTIN`, `UID`, `EIN`). |
| **Enforce Cities** | When enabled, requires contact addresses in this nation to choose an existing registered city rather than entering arbitrary text. |
| **Zip Required** | When enabled, prevents saving an address record if the postal/ZIP code is omitted. |
| **State Required** | When enabled, prevents saving an address record if the federal state/province is omitted. |
| **States** | Registry of administrative subdivisions (states, provinces, cantons) recognized for this nation. |

---

### Federal State Fields

| Field Name | Description |
| :--- | :--- |
| **State Name** | Full name of the state, province, or canton (e.g., `California`, `Bavaria`). |
| **State Code** | Standard postal or fiscal abbreviation (e.g., `CA`, `BY`, `ON`) printed on shipping manifests and tax reports. |
| **Country** | Sovereign nation to which this administrative subdivision belongs. |

---

### City Fields

| Field Name | Description |
| :--- | :--- |
| **Name** | Official municipality or town name (e.g., `Austin`, `Munich`). |
| **Zip** | Postal code associated with this municipality. Triggers automated address completion when typed on contact forms. |
| **Country** | Sovereign nation where the city is located. |
| **State** | Subordinate state or province governing this municipality. |

---

### Country Group Fields

| Field Name | Description |
| :--- | :--- |
| **Group Name** | Name of the regional or economic zone (e.g., `European Union`, `North America`, `SEPA`). |
| **Countries** | Set of member nations belonging to this economic or geographic trade cluster. |
| **Pricelists** | Commercial sales pricelists automatically scoped to partners residing within member countries of this group. |

---

## Related Documentation

* [Reference: Bank Account Fields and Security Badges](./02-bank-account-security-and-fields.md)
* [Reference: Contact Form Field Definitions](./01-contact-form-field-definitions.md)
* [How-To: Configure Geographic Data and Country Groups](../task-guides/09-configure-geographic-localization.md)
* [Explanation: Understanding Unified Partner Architecture and Hierarchies](../core-concepts/01-understanding-unified-partner-architecture-and-hierarchies.md)

