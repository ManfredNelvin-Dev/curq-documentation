# Inventory FAQ

Frequently asked technical, operational, and architectural questions regarding CURQ Inventory, warehouse operation types, stock picking lifecycles, outbound delivery validation, and replenishment rules.

---

## 1. What is the difference between "Demand" and "Quantity" on a transfer?
* **Demand**: The baseline quantity of products requested by the originating document *(such as a Customer Sales Order or Vendor Purchase Order)*.
* **Quantity**: The actual physical count of units picked, counted, and staged at the dock by warehouse operators. When Quantity is lower than Demand upon validation, CURQ automatically prompts operators to create a Backorder for remaining units or proceed without backorder.

---

## 2. How does the double-entry inventory model work in CURQ?
CURQ Inventory treats all stock handling as balanced double-entry moves between source and destination locations. Products are never generated or deleted arbitrarily. Inbound receipts move stock from `Partner Locations/Vendors` to `WH/Stock`, internal transfers move stock between shelves, and outbound deliveries move stock from `WH/Stock` to `Partner Locations/Customers`.

---

## 3. What is the difference between "On Hand", "Forecasted", and "Free to Use" quantities?
* **On Hand**: The physical count of units currently stored within internal warehouse bins *(e.g., `WH/Stock`)*.
* **Forecasted**: The projected future stock availability calculated by adding incoming purchase receipts and subtracting outbound delivery commitments from on-hand stock:
  $$\text{Forecasted Stock} = \text{On Hand} + \text{Incoming} - \text{Outgoing}$$
* **Free to Use**: Physical units currently available to promise for new sales orders without causing immediate fulfillment shortages, calculated as On Hand minus Outgoing reservations.

---

## 4. How do automated reordering rules prevent warehouse stockouts?
Reordering rules track forecasted inventory balances. When forecasted stock dips below the configured **Minimum Quantity** (safety stock floor), CURQ automatically generates a draft Purchase Order or Request for Quotation (RFQ) to replenish inventory up to the **Maximum Quantity** (target capacity ceiling), taking supplier packaging batch multiples into account.

---

## 5. How do I perform a physical inventory count and stock adjustment?
Navigate to **Inventory > Operations > Physical Inventory**:
1. In the adjustments register, review the theoretical **On Hand Quantity**.
2. Enter the verified shelf count into the **Counted Quantity** column.
3. Review the calculated **Difference**.
4. Click the row-level **Apply** button to commit an individual adjustment, or click **Apply All** in the top action bar to commit all counts across the warehouse. CURQ automatically posts balanced double-entry moves against `Virtual Locations/Inventory adjustment`.

---

## Related Documentation

* [Navigate Inventory and Manage Stock Operations](./getting-started/01-navigate-inventory-and-manage-stock-operations.md)
* [Fulfill Sales Orders and Process Deliveries](./getting-started/02-fulfill-sales-orders-and-process-deliveries.md)
* [Understanding Double-Entry Inventory and Stock Flows](./core-concepts/01-understanding-double-entry-inventory-and-stock-flows.md)
* [Understanding Reordering Rules and Lead Times](./core-concepts/02-understanding-reordering-rules-and-lead-times.md)
* [Navigate Inventory Overview and Operation Types](./task-guides/01-navigate-inventory-overview-and-operation-types.md)
