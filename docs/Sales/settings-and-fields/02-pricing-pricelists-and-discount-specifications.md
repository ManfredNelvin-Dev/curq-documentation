# Pricing, Pricelists, and Unit of Measure Specifications

This document provides rule priority hierarchies, pricing methods, and conversion specifications for pricing in CURQ 18 Sales.

---

### Pricelist Rule Computation Methods

| Method | Description |
| :--- | :--- |
| **Fixed Price** | Overrides the base price with an absolute, invariant monetary value. |
| **Percentage** | Deducts a specified percentage discount from the baseline sales price. |
| **Formula** | Computes price dynamically from a chosen base (Sales Price, Cost, or Other Pricelist) with percentage discounts, fixed surcharges, and optional margin boundaries. |

#### Formula Margin Boundary Enforcement
When **Formula** is used with **Min. Margin** and **Max. Margin** relative to the selected valuation baseline:

* **Base Valuation**: Configurable as **Sales Price**, **Cost**, or **Other Pricelist**.
* **Cost-Plus Profit Floor**: When the base is set to Cost, the minimum margin guarantees that unit revenue covers product cost plus an absolute monetary profit floor.
* **Margin Ceiling**: Prevents excessive markups or volatile supplier surcharges from exceeding the maximum margin threshold.
* **Rounding Method**: Prices can be rounded to a defined decimal increment (such as the nearest 0.05 or 0.99) after applying discounts and surcharges.

---

### Pricelist Specificity Hierarchy

When a single sales order line qualifies for multiple competing pricelist rules, CURQ evaluates rules in descending order of specificity:

| Priority Rank | Rule Scope | Evaluation Criteria |
| :---: | :--- | :--- |
| **1 (Highest)**| **Product Variant** | Matches the exact SKU and attribute combination. |
| **2** | **Product Template** | Matches the master product across all variations. |
| **3** | **Product Category** | Matches any product assigned to this category or sub-category. |
| **4 (Lowest)** | **All Products** | Global catalog fallback applied when no specific rule matches. |

*If two rules share the same scope, the rule with the higher **Min. Quantity** matching the order line quantity takes precedence.*

---

### Units of Measure (UoM) Conversion Ratios

Units within the same category convert dynamically using the reference unit ratio:

| Unit Category Type | Definition | Conversion Behavior | Example (Reference: 1 Unit) |
| :--- | :--- | :--- | :--- |
| **Reference Unit** | Baseline unit for the category | Multiplier ratio of 1.00 | `Unit` (Ratio = 1.0) |
| **Bigger than Reference** | Unit representing multiple reference units | Multiplies reference unit by the ratio factor | `Dozen` (Ratio = 12.0) |
| **Smaller than Reference** | Fractional portion of a reference unit | Divides reference unit by the ratio factor | `Half-Dozen` (Ratio = 0.5) |

---

### Related Documentation
* [Configure Pricelists and Pricing Rules](../task-guides/08-configure-pricelists-and-pricing-rules.md)
* [Configure Units of Measure](../task-guides/11-configure-units-of-measure.md)


