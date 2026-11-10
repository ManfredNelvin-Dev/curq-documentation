# Process Outbound Delivery Orders and Customer Shipments

This operational guide provides procedures for warehouse shipping teams to triage customer orders, verify product reservations, execute physical picking, validate outbound shipments, and handle reverse logistics in CURQ Inventory.

> **Prerequisites**
> * Operational access to the CURQ Inventory application.
> * Confirmed customer sales orders generating active outbound delivery pickings.

---

## 1. Access and Triage the Delivery Orders Queue

1. Navigate to **Inventory > Overview**.
2. Locate the **Delivery Orders** operational card:

![CURQ Inventory Overview dashboard highlighting the Delivery Orders card with 6 To Deliver action button](../media/006.png)

3. Review the execution workload:
   * **To Deliver**: Total pending outbound transfers requiring warehouse processing.
   * **Late**: Critical metric highlighting shipments that have passed scheduled delivery dates.
   * **Operations**: Quantitative summary of total planned shipping tasks.
4. Click **6 To Deliver** to open the active shipping register.


> **Tip:** For more details about delivery order card counters and fulfillment metrics, see [**Operation Type Card Data Dictionary**](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md#2-operation-type-card-data-dictionary).

---

## 2. Filter and Prioritize Ready Shipments

The delivery orders register organizes outbound fulfillment orders by operational priority:

![CURQ Delivery Orders list register displaying Reference, Contact, Scheduled Date, Source Document, and Ready status](../media/007.png)

1. **Verify Default Filters**:
   * Confirm the search bar applies `Operation Type: My Company: Delivery Orders` and `Ready`.
   * The `Ready` filter guarantees that listed transfers have complete stock reservations in warehouse storage.
2. **Prioritize Overdue Shipments**:
   * Scan the **Scheduled Date** column for dates highlighted in red text *(e.g., `18 days ago`, `11 days ago`)*. Expedite these orders to mitigate customer delivery delays.
3. **Inspect Order Origin**:
   * Review the **Source Document** column *(e.g., `S00042`)* to confirm customer sales contract details.
4. Click any delivery order reference *(e.g., `WH/OUT/00069`)* to open the detailed fulfillment form.

> **Tip:** For more details about the fields and controls on the delivery order register, see [**Delivery Orders List Register Data Dictionary**](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md#11-delivery-orders-list-register-data-dictionary).

---

## 3. Pick Items and Confirm Product Availability

On the delivery order form view:

![CURQ Delivery Order form view for WH/OUT/00069 showing header fields, status chevron bar, and Operations tab](../media/008.png)

1. **Verify Customer Address**: Ensure the **Delivery Address** matches customer shipping instructions.
2. **Review Product Lines on Operations Tab**:
   * **Product**: Verify the catalog item description *(e.g., `Fair Phone 5 (Black)`)*.
   * **Demand**: Check ordered quantities required by the customer contract *(e.g., `1.00`)*.
   * **Quantity**: Confirm physical items picked and placed in the shipping staging zone *(e.g., `1.00 Units`)*.
3. If partial picking is required, adjust the **Quantity** field to match physical goods picked.

> **Tip:** For more details about delivery header attributes and line item specifications, see [**Delivery Order Header Fields Data Dictionary**](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md#14-delivery-order-header-fields-data-dictionary) and [**Operations Tab Line Item Definitions**](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md#15-operations-tab-line-item-definitions).

---

## 4. Validate Outbound Transfer and Complete Shipment

Once items are packed and staged at the shipping bay:

![CURQ Delivery Order form view highlighting Product Availability Available and the Validate action button](../media/009.png)

1. **Confirm Product Availability Status**:
   * Verify that **Product Availability** displays **Available** in green text.
2. **Click Validate**:
   * Click the dark blue **Validate** button in the upper-left action bar.
3. **System Execution and Form Updates**:
   * CURQ updates the status chevron from **Ready** to **Done**:

![CURQ validated Delivery Order form view showing Done status chevron, Effective Date, and Valuation smart button](../media/010.png)

   * Balanced stock moves deduct units from `WH/Stock` and credit customer partner locations.
   * The **Effective Date** timestamp is recorded automatically.
   * A new **Valuation** smart button appears in the upper right, providing direct access to financial cost of goods sold (COGS) journal entries.
   * Connected Sales Order lines update to `Delivered`, triggering customer invoice generation.
4. **Print Shipping Documents**:
   * Click **Print** in the top action bar to generate the Delivery Slip and shipping labels.

> **Tip:** For more details about dispatch action buttons and post-validation stage indicators, see [**Delivery Order Form Action Buttons and Smart Controls**](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md#12-delivery-order-form-action-buttons-and-smart-controls) and [**Validated Delivery Order View**](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md#13-validated-delivery-order-view).

---

## 5. Handle Returns and Order Cancellations

1. **Process Customer Return**: Click **Return** to initiate a reverse picking transfer routing returned units back into warehouse stock.
2. **Cancel Transfer**: If an order is voided before physical dispatch, click **Cancel** to release reserved inventory back to available stock.

> **Tip:** For more details about return logistics and cancellation actions, see [**Delivery Order Form Action Buttons and Smart Controls**](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md#12-delivery-order-form-action-buttons-and-smart-controls).

---

## Related Documentation

* [Fulfill Sales Orders and Process Deliveries](../getting-started/02-fulfill-sales-orders-and-process-deliveries.md)
* [Audit Stock Moves and Inventory Valuation](./04-audit-stock-moves-and-inventory-valuation.md)
* [Warehouse Operations and Transfer Field Definitions](../settings-and-fields/01-warehouse-operations-and-transfer-field-definitions.md)
* [Stock Moves Analysis and Valuation Field Definitions](../settings-and-fields/06-stock-moves-analysis-and-valuation-field-definitions.md)
* [Understanding Double-Entry Inventory and Stock Flows](../core-concepts/01-understanding-double-entry-inventory-and-stock-flows.md)
