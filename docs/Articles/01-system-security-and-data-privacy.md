# System Security & Data Privacy

Security and data protection are core components of the CURQ enterprise platform. This article outlines the security protocols, data encryption standards, and privacy compliance features built into CURQ.

---

## 1. Data Encryption Standard
All sensitive data within CURQ is encrypted both at rest and in transit:
- **In Transit**: HTTPS/TLS 1.3 encryption for all data exchanged between clients and the server.
- **At Rest**: AES-256 encryption applied to database storage and file assets.

---

## 2. Authentication & Access Protection
- **Multi-Factor Authentication (MFA)**: Support for TOTP authentication apps (Google Authenticator, Authy).
- **Session Timeout**: Automatic session termination after inactive periods to prevent unauthorized access.
- **IP Whitelisting**: Restrict administrative access to designated corporate IP subnets.

---

## 3. Compliance & GDPR
CURQ provides built-in GDPR tools allowing administrators to process customer data anonymization requests, export personal data archives, and maintain data retention schedules cleanly.

---

## Related Documentation

* [CURQ System Overview](00-overview.md)
* [User Roles & Permissions Setup](03-user-roles-and-permissions-setup.md)
* [Audit Logs & Compliance Tracking](04-audit-logs-and-compliance-tracking.md)
* [Data Import & Export Guide](02-data-import-and-export-guide.md)
* [Multi-Currency & Localization Guide](05-multi-currency-and-localization-guide.md)
