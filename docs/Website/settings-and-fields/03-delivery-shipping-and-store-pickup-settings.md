# Delivery, Shipping, and Store Pickup Settings

This document details the configuration parameters, delivery calculation rules, carrier method specifications, Click & Collect parameters, and shipping availability restrictions for CURQ 18 Website and eCommerce.

---

## 1. Overview of Website Delivery Settings

Under the **Delivery** configuration section, parameters control how customer addresses are captured, how shipping charges are computed, and how local collection is handled:

| Field Name | Description |
| :--- | :--- |
| **Shipping Address** | Allows customers to enter an independent delivery address during checkout when shipping differs from their invoicing address. |
| **Shipping Costs** | Enables automated shipping cost calculation on online carts and provides access to configure delivery methods. |
| **Click & Collect** | Allows customers to select store pickup during checkout and collect online purchases in person with on-site payment. |

---

## 2. Delivery Methods Specification

In the Delivery Methods manager, shipping carriers define pricing rules, weight ceilings, and publication status:

### Delivery Methods List View Columns

| Field Name | Description |
| :--- | :--- |
| **Delivery Method** | The customer-facing title of the shipping option displayed during online checkout. |
| **Provider** | Calculation engine driving the shipping fee *(Fixed Price, Based on Rules, Sendcloud, or Pick up in store)*. |
| **Is Published** | Controls online visibility in the checkout shipping selector. Unpublished carriers remain hidden from visitors. |
| **Website** | Restricts the carrier to a specific website *(e.g., `My Website`)* or makes it available across all websites. |
| **Company** | Limits carrier availability to a specific multi-company operating unit. |
| **Max Weight** | Enforces an upper weight limit on the shipment before the method is hidden from checkout. |

### Carrier Provider Modes

* **Fixed Price**: Flat-rate shipping fee added to order subtotals regardless of parcel dimensions.
* **Based on Rules**: Tiered pricing computed dynamically using conditional criteria:
  * Weight thresholds *(e.g., $ 5.00 for $\le 2\text{ kg}$, $ 10.00 for $> 2\text{ kg}$)*
  * Volume thresholds *(in cubic meters)*
  * Order price subtotal thresholds
* **Sendcloud Integration**: Automated real-time shipping rate computation and parcel label generation connected directly with European logistics carriers.
* **Free Shipping Threshold**: Available across Fixed Price and Based on Rules. Checking **Free if order amount is above** waives shipping charges when the cart subtotal satisfies the qualifying minimum *(e.g., free shipping on orders above $ 100.00)*.

---

## 3. Click & Collect and Store Pickup Parameters

Enabling Click & Collect provides physical in-store collection at designated warehouses:

### Stores Tab Specifications

Defines retail branch collection points and physical fulfillment outlets:

| Field Name | Description |
| :--- | :--- |
| **Warehouse** | Designates the active database stock warehouse handling fulfillment for store pickups. |
| **Opening Hours** | Public operational schedule displayed to customers selecting this store during checkout. |
| **Address** | Physical street address, map coordinates, and contact details of the pickup location. |
| **Company** | Operating company entity responsible for store collection orders. |

### Availability Tab Specifications

Defines geographic eligibility, parcel dimension limits, and product tagging restrictions for store collection:

| Field Name | Description |
| :--- | :--- |
| **Countries** | Restricts store pickup eligibility to customer addresses within specific designated countries. |
| **States** | Restricts store pickup eligibility to specific regional states or provinces. |
| **Zip Prefixes** | Comma-separated postal code prefixes *(e.g., `1011, 1012, 1013`)* permitted to choose store collection. |
| **Max Weight (kg)** | Sets the maximum allowable package weight ceiling for store collection orders. |
| **Max Volume (m³)** | Sets the maximum allowable package volume limit in cubic meters. |
| **Must Have Tags** | Order must contain products matching these catalog tags to qualify for store pickup. |
| **Excluded Tags** | Prevents store pickup if the customer's order contains any product with these tags. |

> For step-by-step procedures on setting up shipping carriers and zone limits, see [**Configure Delivery Methods and Shipping Zones**](../task-guides/11-configure-delivery-methods-and-shipping-zones.md).

---

## Related Documentation

* [Configure Delivery Methods and Shipping Zones](../task-guides/11-configure-delivery-methods-and-shipping-zones.md)
* [Set Up an eCommerce Storefront and Checkout](../getting-started/02-set-up-an-ecommerce-storefront-and-checkout.md)
* [eCommerce Shop and Checkout Settings](./02-ecommerce-shop-and-checkout-settings.md)
* [Understanding eCommerce Checkout and Customer Portals](../core-concepts/02-understanding-ecommerce-checkout-and-customer-portals.md)
