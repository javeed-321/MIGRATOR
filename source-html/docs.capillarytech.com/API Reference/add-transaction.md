> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Transaction

Lets you add transactions of loyalty, non-loyalty, or not-interested customers. You can add batch transactions by passing each transaction details in a separate transaction attribute.

> \[!NOTE]
> The precision of monetary fields (amount, rate, value, discount) in transactions and line items is controlled by the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration. If this configuration is set to a value greater than or equal to 0, all monetary fields are rounded down (using Math.floor) to the specified number of decimal places. For example, a value of 38.98 may be rounded to 38.97. To ensure correct storage and retrieval of decimal values, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to one more than the value of CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY (for example, if CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY is 2, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to 3).

> \[!IMPORTANT]
> A successful API response (status code 200) only confirms that the transaction was created. Points accrual and promotion triggering depend on active loyalty program rules, store attribution (using the X-CAP-API-ATTRIBUTION-ENTITY-CODE header), product eligibility, and customer tier. If no rules match, the transaction may not reflect points or rewards in Member Care. Always review your loyalty program rules and product eligibility to ensure expected outcomes.

> \[!CAUTION]
> The transaction/add API processes one request per customer at a time. If two requests for the same customer are submitted simultaneously, one succeeds and the other is rejected with warning code 521 ("Multiple actions running for the same customer"). The retry mechanism is hardcoded and cannot be adjusted. To prevent this in bulk submission scenarios, send transactions for the same customer sequentially, not in parallel. If a 521 is returned, wait briefly and resubmit the failed transaction.

#### Rate Limit

| Region               | Default Limit (RPM) |
| :------------------- | :------------------ |
| Asia-2 (Singapore)   | 1500                |
| Asia-1 (N. Virginia) | 1500                |
| EMEA (Ireland)       | 700                 |

Currently, there is no validation that bill amount should match with sum of line items as the data is accepted as it is from POS or integration

Following are the key functionalities of the transaction/add API.

* Registers customers automatically when a new identifier is passed with the transaction details.
* If any identifier matches with another accounts, customer accounts will be merged if the config mentioned below is not enabled.
* If CONFIG\_SKIP\_SECONDARY\_ID\_ON\_PRIMARY\_MISMATCH is enabled, if the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch Profile > Organization Settings > Miscellaneous.
* Also, this config overrides CONF\_PRIMARY\_IDENTIFIER\_STRICT\_CHECK.
* Updates customer details if a registered identifier is passed with different customer details (other than customer identifiers).
* Supports transactions with Product Variant and Product Bundle details.
* Adds product variant to the database when a new variant product is passed with an existing base product.
* Adds base product to the database when a new base product/variant product is passed. However, if a new base product is passed with variant details, it adds only base product and ignores variant.
* For Multi Loyalty Programs, points can be grouped by their respective program IDs and correctly reflected in the side effects section of the response. To enable this, raise a JIRA ticket with the Sustenance team to activate the configuration `CONF_ENABLE_GROUP_POINTS_BY_PROGRAM` for your org.

### Redeeming cart promotions for transactions

To redeem a cart promotion for a transaction made using v1 transaction API, use the [Redeem Cart Promotion](https://docs.capillarytech.com/reference/redeem-cart-promotion#/) API after you [evaluate](https://docs.capillarytech.com/reference/evaluate-cart-promotions#/) and add the transaction for a customer. To apply and redeem the cart promotion while making a transaction, use the [Transaction V2](https://docs.capillarytech.com/reference/add-transaction-single#/) API. With this API, you can add a transaction, apply, and redeem a cart promotion in a single call.

<Callout icon="📘" theme="info">
  Note

Negative values for the transaction values such as amount, discount will not be considered. </Callout>

### Request Body Parameters

| Parameters                             | Type      | Description                                                                                                                                                                                                                                                                                                                                             |
| :------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| bill\_client\_id                       | string    | Unique id of the bill as per the client (org) end.                                                                                                                                                                                                                                                                                                      |
| type                                   | Enum      | Type of transaction. `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.                                                                                                                                                                                                                                |
| number                                 | string    | Unique transaction number. The uniqueness depends on the configuration `CONF_LOYALTY_BILL_NUMBER_UNIQUE_IN_DAYS` set in <strong>InTouch Settings > System & Deployment > InTouch POS Configuration > Billing.</strong> **Note**: The maximum length for a bill number is 50 characters.                                                                 |
| amount                                 | double    | Net transaction amount of the original bill. Represents the final amount after discounts are applied. For line items: amount = value - discount. For transactions: amount = gross\_amount - total\_discount. The value is rounded down to the number of decimal places set in the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration, if enabled. |
| discount                               | double    | Discount availed for the transaction or line item (discount amount). The value is rounded down to the number of decimal places set in the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration, if enabled.                                                                                                                                         |
| currency\_code                         | string    | ISO currency code of the transaction. For example, `INR` for Indian Rupee, `SGD` for Singapore Dollar, `EUR` for Euro, `IQD` for Iraqi Dinar.                                                                                                                                                                                                           |
| notes                                  | string    | Additional information about the transaction.                                                                                                                                                                                                                                                                                                           |
| qty                                    | int       | Quantity of the current line-item. This gets rounded off to the nearest digit. For example, the quantity "0.003" can get rounded off to 0. It is recommended to use V2 API to avoid the rounding off quantity.                                                                                                                                          |
| rate                                   | float     | Price of each line-item. The value is rounded down to the number of decimal places set in the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration, if enabled.                                                                                                                                                                                     |
| value                                  | double    | Represents the pre-discount total for a single line item. Calculated as: value = rate × quantity. Example: If a line item has a rate of $10 and quantity of 2, value would be $20. The value is rounded down to the number of decimal places set in the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration, if enabled.                           |
| billing\_time                          | date-time | Date and time of the transaction. By default, the current system date and time will be considered.                                                                                                                                                                                                                                                      |
| gross\_amount                          | double    | Represents the total transaction amount before any discounts are applied. It's the sum of all line items' values before discounts. Used in calculations involving the total transaction value.                                                                                                                                                          |
| outlier\_status                        | Enum      | Pass the outlier status of the transaction at transaction level, and outlier status of the line-item at line-item level. Values: `INTERNAL`, `NORMAL`, `INVALID`, `OUTLIER`, `FAILED`, `DELETED`, `RETRO`, `FRAUD`, `TEST`, `OTHER`.                                                                                                                    |
| source                                 | Enum      | Source from which the transaction is made. Values: `INSTORE` (for InStore), `WECHAT` (WeChat), `MARTJACK` (AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).                             |
| not\_interested\_reason                | string    | Reason why the customer is not interested to register. Applicable only for not-interested transactions.                                                                                                                                                                                                                                                 |
| pointsRedemptions                      | array     | Unique points redemption id(s) that you want to apply for the transaction. For example, `[727272, 237878]`.                                                                                                                                                                                                                                             |
| couponRedemptions                      | array     | Unique coupon redemption id(s) that you want to apply for the transaction. For example, `[727298, 237856]`.                                                                                                                                                                                                                                             |
| referral\_code                         | string    | Referral code for a new customer (if applicable) to register in the org's loyalty program. You can also have transaction level referral code.                                                                                                                                                                                                           |
| customer                               | obj       | Pass customer information. Applicable for non-loyalty and not-interested transactions.                                                                                                                                                                                                                                                                  |
| mobile/email/external\_id/card\_number | string    | Pass any of the registered identifiers of the customer. Required for regular transactions.                                                                                                                                                                                                                                                              |
| extended\_fields                       | obj       | Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.                                                                                                                                                                                                 |
| payment\_details                       | obj       | Payment details for the transaction.                                                                                                                                                                                                                                                                                                                    |
| attributes                             | obj       | Attributes of the current line-item in name and value pairs.                                                                                                                                                                                                                                                                                            |
| mode                                   | string    | Mode of payment. This has to be the mode configured for your org.                                                                                                                                                                                                                                                                                       |
| value                                  | float     | Amount paid through the current mode.                                                                                                                                                                                                                                                                                                                   |
| custom\_fields                         | obj       | Transaction level custom field details. Line item level custom fields are not supported.                                                                                                                                                                                                                                                                |
| line\_items                            | obj       | Details of transaction line-items.                                                                                                                                                                                                                                                                                                                      |
| serial                                 | long      | Serial number of the current line-item.                                                                                                                                                                                                                                                                                                                 |
| transaction\_number                    | string    | Transaction line-item number.                                                                                                                                                                                                                                                                                                                           |
| description                            | string    | Description of the line-item.                                                                                                                                                                                                                                                                                                                           |
| item\_code                             | string    | Unique line-item code.                                                                                                                                                                                                                                                                                                                                  |
| variant                                | string    | Variant code of the item. Applicable for variant product.                                                                                                                                                                                                                                                                                               |
| addon\_items                           | obj       | Details of add\_on items. For example, pizza with extra cheese, and personalized toppings.                                                                                                                                                                                                                                                              |
| combo\_items                           | obj       | Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps.                                                                                                                                                                                                                                                   |
| split\_items                           | obj       | Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges.                                                                                                                                                                                                                                       |
| item\_code                             | string    | Unique code of the add-on, split, or combo item. For example, combo-22, pizza01\_addon.                                                                                                                                                                                                                                                                 |
| quantity                               | double    | Quantity of the current add-on, split, or combo item.                                                                                                                                                                                                                                                                                                   |
| associate\_details                     | obj       | Details of store associate or cashier who did the transaction.                                                                                                                                                                                                                                                                                          |
| code                                   | string    | Unique code of the store associate.                                                                                                                                                                                                                                                                                                                     |
| name                                   | string    | Name of the store associate.                                                                                                                                                                                                                                                                                                                            |

## Return Transaction

Lets you submit a return transaction of any transaction type.

The following are different return types supported for a transaction.

> 📘 **Note**
>
> For return transactions, it is required to pass return item's purchased transaction number and purchase time. Purchase time: The date and time of the actual transaction. Billing time: The date and time of the return transaction

Before using this API, you need to know the configurations set of the Return Transactions page of InTouch **Settings** > **Systems & Deployment** > **InTouch POS Configuration**.

### Request Body Parameters (Return Transaction)

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
  <tr>
    <td colspan="3"><strong>Note:</strong> Monetary fields (amount, rate, value, discount) in return transactions and line items are rounded down to the number of decimal places set in the AMOUNT_ROUNDING_OFF_TO_DECIMAL_PLACES configuration, if enabled. Set this configuration to one more than CONF_DECIMAL_PLACES_FOR_BASE_CURRENCY to ensure correct storage and retrieval of decimal values.</td>
  </tr>
    <tr>
      <td>
        type*
      </td>

      <td>
        enum
      </td>

      <td>
        Type of transaction. `RETURN` for loyalty transaction return, `NOT_INTERESTED_RETURN` for not-interested return, `MIXED` for exchange (involves both return and purchase).<br />You will also need to pass `type` for `MIXED` transaction both at bill level (MIXED) and line-item level (`regular` for new transaction item and `return` for return item).
      </td>
    </tr>

    <tr>
      <td>
        return_type
      </td>

      <td>
        enum
      </td>

      <td>
        FULL - Returns the full amount of the original transaction.
        AMOUNT - Returns the specific amount passed in the amount parameter.
        LINE_ITEM - Returns the amount based on items listed in the line_item object
      </td>
    </tr>

    <tr>
      <td>
        number*
      </td>

      <td>
        string
      </td>

      <td>
        Actual transaction number of the return bill.
      </td>
    </tr>

    <tr>
      <td>
        parent_bill_number
      </td>

      <td>
        string
      </td>

      <td>
        Return transaction number.
      </td>
    </tr>

    <tr>
      <td>
        billing_time*
      </td>

      <td>
        date-time
      </td>

      <td>
        Date and time of the return transaction in `YYYY-MM-DD HH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        purchase_time*
      </td>

      <td>
        date
      </td>

      <td>
        Actual transaction date of the returning bill in`YYYY-MM-DD` format.
      </td>
    </tr>

    <tr>
      <td>
        notes
      </td>

      <td>
        string
      </td>

      <td>
        Additional information about the transaction.
      </td>
    </tr>

    <tr>
      <td>
        amount*
      </td>

      <td>
        double
      </td>

      <td>
        Amount that needs to be returned. The value is rounded down to the number of decimal places set in the AMOUNT_ROUNDING_OFF_TO_DECIMAL_PLACES configuration, if enabled.
      </td>
    </tr>

    <tr>
      <td>
        qty*
      </td>

      <td>
        int
      </td>

      <td>
        Quantity of the current line-item.
      </td>
    </tr>

    <tr>
      <td>
        rate
      </td>

      <td>
        float
      </td>

      <td>
        Price of each line-item. The value is rounded down to the number of decimal places set in the AMOUNT_ROUNDING_OFF_TO_DECIMAL_PLACES configuration, if enabled.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        float
      </td>

      <td>
        Gross transaction amount (transaction amount excluding discount). The value is rounded down to the number of decimal places set in the AMOUNT_ROUNDING_OFF_TO_DECIMAL_PLACES configuration, if enabled.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        enum
      </td>

      <td>
        Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE("ECOMMERCE"), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        obj
      </td>

      <td>
        Customer details associated to the transaction. Not applicable for not-interested transactions.
      </td>
    </tr>

    <tr>
      <td>
        mobile/email/external_id
      </td>

      <td>
        string
      </td>

      <td>
        Pass any of the registered identifiers of the customer. Required for regular transaction returns.
      </td>
    </tr>

    <tr>
      <td>
        firstname
      </td>

      <td>
        string
      </td>

      <td>
        First name of the customer.
      </td>
    </tr>

    <tr>
      <td>
        lastname
      </td>

      <td>
        string
      </td>

      <td>
        Last name of the customer.
      </td>
    </tr>

    <tr>
      <td>
        extended_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in `line_item` object.
      </td>
    </tr>

    <tr>
      <td>
        custom_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Transaction level custom field details. Pass line-item level custom field details in `line_item` object.
      </td>
    </tr>

    <tr>
      <td>
        line_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of transaction line-items.
      </td>
    </tr>

    <tr>
      <td>
        amount*
      </td>

      <td>
        double
      </td>

      <td>
        Net line item amount including tax. The value is rounded down to the number of decimal places set in the AMOUNT_ROUNDING_OFF_TO_DECIMAL_PLACES configuration, if enabled.
      </td>
    </tr>

    <tr>
      <td>
        serial
      </td>

      <td>
        long
      </td>

      <td>
        Serial number of the line-item.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        string
      </td>

      <td>
        Description of the line-item.
      </td>
    </tr>

    <tr>
      <td>
        item_code
      </td>

      <td>
        string
      </td>

      <td>
        Unique line-item code.
      </td>
    </tr>

    <tr>
      <td>
        variant
      </td>

      <td>
        string
      </td>

      <td>
        Variant code of the item. Applicable for variant product.
      </td>
    </tr>

    <tr>
      <td>
        addon_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of add-on items. For example, pizza with extra cheese, and personalized toppings.
      </td>
    </tr>

    <tr>
      <td>
        combo_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of combo or bundle items. For example, buy 1 shirt get one free, shirt+pant, pack of 5 soaps.
      </td>
    </tr>

    <tr>
      <td>
        split_items
      </td>

      <td>
        obj
      </td>

      <td>
        Details of split items. For example, a necklace having gold rate, store rate, making charge, and wastage charges.
      </td>
    </tr>

    <tr>
      <td>
        item_code
      </td>

      <td>
        string
      </td>

      <td>
        Unique code of the add-on, split, or combo item. For example, combo-22, pizza01_addon.
      </td>
    </tr>

    <tr>
      <td>
        quantity
      </td>

      <td>
        double
      </td>

      <td>
        Quantity of the current add-on, split, or combo item.
      </td>
    </tr>

    <tr>
      <td>
        associate_details
      </td>

      <td>
        obj
      </td>

      <td>
        Details of store associate or cashier who did the transaction.
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        string
      </td>

      <td>
        Unique code of the store associate.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        string
      </td>

      <td>
        Name of the store associate.
      </td>
    </tr>
  </tbody>
</Table>

Parameters marked with \* are mandatory.

```json
{
    "root": {
        "transaction": {
            "type": "return",
            "country": "true",
            "number": "test00transact112",
            "return_type": "LINE_ITEM",
            "parent_bill_number": "returnBill112",
            "purchase_time": "2025-08-07 10:32:15",
            "amount": "3000.00",
            "billing_time": "2025-08-07 10:34:00",
            "customer": {
                "mobile": "919999988886",
                "email": "johnhill@gmail.com",
                "external_id": "0000011110",
                "firstname": "Tjuser",
                "lastname": "Eightysix"
            },
            "line_items": {
                "line_item": [
                    {
                        "serial": "2",
                        "amount": "2000",
                        "description": "Sports Shoes",
                        "item_code": "model_id_002",
                        "qty": "2",
                        "rate": "1000.00",
                        "value": "2000.00"
                    } 
                ]
            }
        }
    }
}
```

<br />

### Response Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        id
      </td>

      <td>
        long
      </td>

      <td>
        Unique transaction ID generated internally.
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        obj
      </td>

      <td>
        Details of the customer associated to the transaction. Not applicable for `NOT_INTERESTED` transactions.
      </td>
    </tr>

    <tr>
      <td>
        lifetime_points
      </td>

      <td>
        int
      </td>

      <td>
        Total loyalty points earned by the customer to date.
      </td>
    </tr>

    <tr>
      <td>
        lifetime_purchases
      </td>

      <td>
        int
      </td>

      <td>
        Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.
      </td>
    </tr>

    <tr>
      <td>
        loyalty_points
      </td>

      <td>
        int
      </td>

      <td>
        Current active loyalty points (neither redeemed nor expired) of the customer.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        enum
      </td>

      <td>
        Type of transaction. Value: `regular` for loyalty transaction, `not_interested` for non-loyalty or not-interested transactions.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        enum
      </td>

      <td>
        Source from which the transaction is made. Values: `INSTORE`( for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), ECOMMERCE (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        current_slab
      </td>

      <td>
        string
      </td>

      <td>
        Current loyalty tier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        tier_expiry_date
      </td>

      <td>
        date-time
      </td>

      <td>
        Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        points_summaries
      </td>

      <td>
        obj
      </td>

      <td>
        Shows the details of the loyalty points.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the loyalty program associated to the points summary.
      </td>
    </tr>

    <tr>
      <td>
        redeemed
      </td>

      <td>
        int
      </td>

      <td>
        In total points earned from the program, the total number of points that are redeemed.
      </td>
    </tr>

    <tr>
      <td>
        expired
      </td>

      <td>
        int
      </td>

      <td>
        In total points earned from the program, the total number of points that are expired.
      </td>
    </tr>

    <tr>
      <td>
        returned
      </td>

      <td>
        int
      </td>

      <td>
        In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.
      </td>
    </tr>

    <tr>
      <td>
        adjusted
      </td>

      <td>
        int
      </td>

      <td>
        Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.
      </td>
    </tr>

    <tr>
      <td>
        cumulativePurchases
      </td>

      <td>
        double
      </td>

      <td>
        Total purchases amount of the customer in the stores associated to the current loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        currentSlab
      </td>

      <td>
        string
      </td>

      <td>
        Current tier of the customer in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        nextSlab
      </td>

      <td>
        string
      </td>

      <td>
        Next loyalty tier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        nextSlabSerialNumber
      </td>

      <td>
        int
      </td>

      <td>
        Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.
      </td>
    </tr>

    <tr>
      <td>
        nextSlabDescription
      </td>

      <td>
        string
      </td>

      <td>
        Description of the next tier as saved in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        slabSNo
      </td>

      <td>
        int
      </td>

      <td>
        Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.
      </td>
    </tr>

    <tr>
      <td>
        slabExpiryDate
      </td>

      <td>
        date-time
      </td>

      <td>
        Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.
      </td>
    </tr>

    <tr>
      <td>
        registered_on
      </td>

      <td>
        date-time
      </td>

      <td>
        Date on which the customer is enrolled in the org's loyalty.
      </td>
    </tr>

    <tr>
      <td>
        updated_on
      </td>

      <td>
        date-time
      </td>

      <td>
        Recent date on which the customer details are updated.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        enum
      </td>

      <td>
        Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.
      </td>
    </tr>

    <tr>
      <td>
        sideEffects
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing side effects (additional information) for the customer creation, if any.
      </td>
    </tr>

    <tr>
      <td>
        * entityType
      </td>

      <td>
        Enum
      </td>

      <td>
        Entity which receives points. Possible values: `USER`, `USERGROUP2`, `GROUP2`
      </td>
    </tr>

    <tr>
      <td>
        * rawAwardedPoints
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Total number of points awarded without any rounding applied.
      </td>
    </tr>

    <tr>
      <td>
        * customerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the customer who is awarded points
      </td>
    </tr>

    <tr>
      <td>
        * awardedPoints
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Total number of points awarded with rounding applied.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of award rewarded to the customer.
      </td>
    </tr>

    <tr>
      <td>
        * isReferrer
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the customer is a referrer. `true`: Customer is the referrer. `false`: Customer is not the referrer. This field is visible when a referrer (customer who is referring another customer) is awarded an incentives.
      </td>
    </tr>

    <tr>
      <td>
        custom_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Transaction or line-item level custom field details - field name (`name`) and field value (`value`).
      </td>
    </tr>

    <tr>
      <td>
        extended_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Transaction or line-item level extended field details - extended field name (`name`) and extended field value (`value`).
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json
{
  "response": {
    "status": {
      "success": "true",
      "code": 200,
      "message": "Success"
    },
    "transactions": {
      "transaction": [
        {
          "id": 884656083,
          "shipping_source_till_code": "",
          "number": "test00transact071",
          "bill_client_id": "",
          "type": "REGULAR",
          "delivery_status": "DELIVERED",
          "parent_bill_number": "",
          "outlier_status": "NORMAL",
          "customer": {
            "user_id": "564703252",
            "mobile": "919999988886",
            "firstname": "Tjuser",
            "lastname": "eightysix",
            "email": "johnhill@gmail.com",
            "external_id": "0000011110",
            "lifetime_points": "23002",
            "loyalty_points": "2",
            "current_slab": "Ruby",
            "tier_expiry_date": "2125-02-10 23:59:59",
            "points_summaries": {
              "points_summary": [
                {
                  "programId": "973",
                  "redeemed": "0",
                  "expired": "23000",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "23000",
                  "loyaltyPoints": "0",
                  "cumulativePurchases": "142000",
                  "currentSlab": "Ruby",
                  "nextSlab": "Emerald",
                  "nextSlabSerialNumber": "6",
                  "nextSlabDescription": "Tier 6",
                  "slabSNo": "5",
                  "slabExpiryDate": "2125-02-10 23:59:59",
                  "totalPoints": ""
                },
                {
                  "programId": "983",
                  "redeemed": "0",
                  "expired": "0",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "2",
                  "loyaltyPoints": "2",
                  "cumulativePurchases": "154000",
                  "currentSlab": "Coral",
                  "nextSlab": "Opal",
                  "nextSlabSerialNumber": "3",
                  "nextSlabDescription": "Tier 3",
                  "slabSNo": "2",
                  "slabExpiryDate": "2125-01-20 23:59:59",
                  "totalPoints": ""
                }
              ]
            },
            "lifetime_purchases": "142000",
            "type": "LOYALTY",
            "source": "instore"
          },
          "side_effects": {
            "effect": [
              {
                "awarded_points": 100,
                "total_points": 100,
                "customer_id": "424133043",
                "type": "points"
              },
              {
                "awarded_points": 100,
                "customer_id": "424133021",
                "is_referrer": "true",
                "type": "points"
              }
            ]
          },
          "source": "INSTORE",
          "item_status": {
            "success": "true",
            "code": 600,
            "message": "Transaction added successfully"
          }
        }
      ]
    }
  }
}
```
```json Response with alternate currencies as side effect
{
  "response": {
    "status": {
      "success": "true",
      "code": 200,
      "message": "Success"
    },
    "transactions": {
      "transaction": [
        {
          "id": 37813251,
          "shipping_source_till_code": "",
          "number": "BILL99",
          "bill_client_id": "",
          "type": "REGULAR",
          "delivery_status": "DELIVERED",
          "parent_bill_number": "",
          "outlier_status": "NORMAL",
          "customer": {
            "user_id": "342963216",
            "mobile": "919999000001",
            "firstname": "Tom",
            "lastname": "Sawyer",
            "email": "",
            "external_id": "",
            "lifetime_points": "106",
            "loyalty_points": "106",
            "current_slab": "bronze",
            "tier_expiry_date": "2119-09-20 23:59:59",
            "points_summaries": {
              "points_summary": [
                {
                  "programId": "1016",
                  "redeemed": "0",
                  "expired": "0",
                  "returned": "0",
                  "adjusted": "0",
                  "lifetimePoints": "106",
                  "loyaltyPoints": "106",
                  "cumulativePurchases": "18000",
                  "currentSlab": "bronze",
                  "nextSlab": "silver",
                  "nextSlabSerialNumber": "2",
                  "nextSlabDescription": "silver",
                  "slabSNo": "1",
                  "slabExpiryDate": "2119-09-20 23:59:59",
                  "totalPoints": ""
                }
              ]
            },
            "lifetime_purchases": "18000",
            "type": "LOYALTY",
            "source": "instore"
          },
          "side_effects": {
            "effect": [
              {
                "alternate_currency_identifier": "rgpws7",
                "alternate_currency_name": "ac1",
                "awarded_value": "110",
                "type": "alternate_currency"
              },
              {
                "alternate_currency_identifier": "pJ6E8A",
                "alternate_currency_name": "ac2",
                "awarded_value": "500",
                "type": "alternate_currency"
              },
              {
                "awarded_points": "120",
                "total_points": "2161",
                "type": "points"
              },
              {
                "previous_slab_name": "alpha1",
                "previous_slab_number": "1",
                "upgraded_slab_name": "Beta1",
                "upgraded_slab_number": "2",
                "type": "slab"
              }
            ]
          },
          "source": "ECOMM",
          "item_status": {
            "success": "true",
            "code": 600,
            "message": "Transaction added successfully"
          }
        }
      ]
    }
  }
}
```

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "customer-v11",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v1.1",
      "variables": {
        "host": {
          "default": "host"
        }
      }
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "http",
        "scheme": "basic"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/transaction/add": {
      "post": {
        "summary": "Add Transaction",
        "description": "",
        "operationId": "add-transaction",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string",
                    "format": "json"
                  }
                }
              },
              "examples": {
                "Add Transaction": {
                  "value": {
                    "root": {
                      "transaction": [
                        {
                          "bill_client_id": "",
                          "type": "regular",
                          "number": "test00transact071",
                          "amount": "6000",
                          "currency_code": "INR",
                          "notes": "Transaction number 70",
                          "gross_amount": "7000",
                          "outlier_status": "NORMAL",
                          "source": "INSTORE",
                          "not_interested_reason": "",
                          "discount": "1000",
                          "redemptions": {
                            "points_redemptions": {
                              "id": []
                            }
                          },
                          "line_items": {
                            "line_item": [
                              {
                                "serial": "1",
                                "amount": "2000",
                                "description": "Steel Bottle",
                                "item_code": "model_id_001",
                                "qty": "0.000875",
                                "rate": "500",
                                "value": "2000",
                                "discount": "0",
                                "notes": [],
                                "attributes": "",
                                "extended_fields": {
                                  "field": []
                                }
                              },
                              {
                                "serial": "2",
                                "amount": "2000",
                                "description": "Sports Shoes",
                                "item_code": "model_id_002",
                                "qty": "2",
                                "rate": "1000",
                                "value": "2000",
                                "discount": "0",
                                "notes": [],
                                "attributes": "",
                                "extended_fields": {
                                  "field": []
                                }
                              },
                              {
                                "serial": "3",
                                "amount": "2000",
                                "description": "Wood Table",
                                "item_code": "model_id_003",
                                "qty": "1",
                                "rate": "3000",
                                "value": "2000",
                                "discount": "1000",
                                "notes": [],
                                "attributes": "",
                                "extended_fields": {
                                  "field": []
                                }
                              }
                            ]
                          },
                          "customer": {
                            "mobile": "9999988886",
                            "email": "testusertjone@gmail.com",
                            "external_id": "0000011110",
                            "firstname": "Tjuser",
                            "lastname": "eightysix",
                            "type": "loyalty"
                          },
                          "payment_details": {},
                          "mode": "card",
                          "billing_time": "2025-04-03 09:00:15",
                          "referral_code": " "
                        }
                      ]
                    }
                  }
                },
                "Return Transaction": {
                  "value": {
                    "root": {
                      "transaction": {
                        "type": "return",
                        "country": "true",
                        "number": "BILL98",
                        "not_interested_reason": "Example reason",
                        "return_type": "AMOUNT",
                        "parent_bill_number": "RE123",
                        "purchase_time": "2018-04-01",
                        "amount": "500",
                        "billing_time": "2018-05-31",
                        "customer": {
                          "mobile": "919999000000",
                          "email": "",
                          "external_id": "",
                          "firstname": "Tom",
                          "lastname": "Sawyer"
                        },
                        "line_items": {
                          "line_item": {
                            "serial": "1",
                            "amount": "500",
                            "description": "soap",
                            "item_code": "item-001",
                            "qty": "50",
                            "rate": "10",
                            "value": "500",
                            "attributes": {
                              "attribute": {
                                "name": "brand",
                                "value": "Levis"
                              }
                            }
                          }
                        },
                        "custom_fields_data": {
                          "custom_data_item": {
                            "field_name": "paymentmode",
                            "field_value": "CASH"
                          }
                        },
                        "associate_details": {}
                      }
                    }
                  }
                },
                "Mixed Transaction": {
                  "value": {
                    "root": {
                      "transaction": [
                        {
                          "type": "mixed",
                          "number": "Exch-1112",
                          "amount": "500",
                          "notes": "1 line items",
                          "billing_time": "2018-09-26 20:10:00",
                          "gross_amount": "500",
                          "discount": "0",
                          "customer": {
                            "mobile": "9540000000",
                            "email": "",
                            "external_id": "",
                            "firstname": "",
                            "lastname": ""
                          },
                          "payment_details": {
                            "payment": [
                              {
                                "mode": "CASH",
                                "value": "200"
                              },
                              {
                                "mode": "Card",
                                "value": "200",
                                "attributes": {
                                  "attribute": [
                                    {
                                      "name": "card_type",
                                      "value": "Debit Card"
                                    },
                                    {
                                      "name": "bankName",
                                      "value": "BCA"
                                    },
                                    {
                                      "name": "CardIssuerCode",
                                      "value": "value345"
                                    }
                                  ]
                                },
                                "notes": "notes_602656"
                              }
                            ]
                          },
                          "custom_fields": {
                            "field": []
                          },
                          "line_items": {
                            "line_item": [
                              {
                                "type": "regular",
                                "serial": "1",
                                "amount": "300",
                                "description": "Testdesc04",
                                "item_code": "code04",
                                "variant": "",
                                "qty": "1",
                                "rate": "300",
                                "value": "300"
                              },
                              {
                                "type": "return",
                                "return_type": "LINE_ITEM",
                                "transaction_number": "RC-15",
                                "transaction_date": "2018-09-25 10:10:10",
                                "serial": "1",
                                "amount": "50",
                                "description": "Testdesc02",
                                "item_code": "code02",
                                "variant": "",
                                "qty": "1",
                                "rate": "50",
                                "value": "50"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                "with addon_items and combo items": {
                  "value": {
                    "root": {
                      "transaction": {
                        "type": "regular",
                        "number": "addOnComboBill002",
                        "amount": "2000",
                        "notes": "notes",
                        "gross_amount": "1000",
                        "discount": "10",
                        "line_items": {
                          "line_item": [
                            {
                              "serial": "16",
                              "amount": "250",
                              "description": "soap",
                              "item_code": "item_fna_003",
                              "qty": "100",
                              "rate": "5",
                              "value": "500",
                              "discount": "0",
                              "notes": [],
                              "extended_fields": {
                                "field": []
                              }
                            },
                            {
                              "serial": "84",
                              "amount": "300",
                              "description": "soap",
                              "item_code": "item_fna_003",
                              "qty": "100",
                              "rate": "5",
                              "value": "500",
                              "discount": "0",
                              "notes": [],
                              "extended_fields": {
                                "field": []
                              },
                              "addon_items": {
                                "addon_item": [
                                  {
                                    "description": "英语英语英语英语英语",
                                    "item_code": "item_fna_001",
                                    "quantity": "1"
                                  }
                                ]
                              },
                              "combo_items": {
                                "combo_item": [
                                  {
                                    "description": "combo_item_nnnn_1",
                                    "item_code": "item_fna_003",
                                    "quantity": "1"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "extended_fields": {
                          "field": []
                        },
                        "customer": {
                          "mobile": "60898956563",
                          "email": "iosuser2001@yopmail.com",
                          "external_id": "",
                          "firstname": "ios",
                          "lastname": "user",
                          "type": "loyalty"
                        },
                        "billing_time": "2024-10-24 22:37:01",
                        "referral_code": " "
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success"
                        },
                        "transactions": {
                          "transaction": [
                            {
                              "id": 884656083,
                              "shipping_source_till_code": "",
                              "number": "test00transact071",
                              "bill_client_id": "",
                              "type": "REGULAR",
                              "delivery_status": "DELIVERED",
                              "parent_bill_number": "",
                              "outlier_status": "NORMAL",
                              "customer": {
                                "user_id": "564703252",
                                "mobile": "919999988886",
                                "firstname": "Tjuser",
                                "lastname": "eightysix",
                                "email": "tom.sawyer@gmail.com",
                                "external_id": "0000011110",
                                "lifetime_points": "23002",
                                "loyalty_points": "2",
                                "current_slab": "Ruby",
                                "tier_expiry_date": "2125-02-10 23:59:59",
                                "points_summaries": {
                                  "points_summary": [
                                    {
                                      "programId": "973",
                                      "redeemed": "0",
                                      "expired": "23000",
                                      "returned": "0",
                                      "adjusted": "0",
                                      "lifetimePoints": "23000",
                                      "loyaltyPoints": "0",
                                      "cumulativePurchases": "142000",
                                      "currentSlab": "Ruby",
                                      "nextSlab": "Emerald",
                                      "nextSlabSerialNumber": "6",
                                      "nextSlabDescription": "Tier 6",
                                      "slabSNo": "5",
                                      "slabExpiryDate": "2125-02-10 23:59:59",
                                      "totalPoints": ""
                                    },
                                    {
                                      "programId": "983",
                                      "redeemed": "0",
                                      "expired": "0",
                                      "returned": "0",
                                      "adjusted": "0",
                                      "lifetimePoints": "2",
                                      "loyaltyPoints": "2",
                                      "cumulativePurchases": "154000",
                                      "currentSlab": "Coral",
                                      "nextSlab": "Opal",
                                      "nextSlabSerialNumber": "3",
                                      "nextSlabDescription": "Tier 3",
                                      "slabSNo": "2",
                                      "slabExpiryDate": "2125-01-20 23:59:59",
                                      "totalPoints": ""
                                    }
                                  ]
                                },
                                "lifetime_purchases": "142000",
                                "type": "LOYALTY",
                                "source": "instore"
                              },
                              "side_effects": {
                                "effect": []
                              },
                              "source": "INSTORE",
                              "item_status": {
                                "success": "true",
                                "code": 600,
                                "message": "Transaction added successfully"
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "With Alternate Currencies as Side Effect": {
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": 200,\n      \"message\": \"Success\"\n    },\n    \"transactions\": {\n      \"transaction\": [\n        {\n          \"id\": 37813251,\n          \"shipping_source_till_code\": \"\",\n          \"number\": \"BILL99\",\n          \"bill_client_id\": \"\",\n          \"type\": \"REGULAR\",\n          \"delivery_status\": \"DELIVERED\",\n          \"parent_bill_number\": \"\",\n          \"outlier_status\": \"NORMAL\",\n          \"customer\": {\n            \"user_id\": \"342963216\",\n            \"mobile\": \"919999000001\",\n            \"firstname\": \"Tom\",\n            \"lastname\": \"Sawyer\",\n            \"email\": \"\",\n            \"external_id\": \"\",\n            \"lifetime_points\": \"106\",\n            \"loyalty_points\": \"106\",\n            \"current_slab\": \"bronze\",\n            \"tier_expiry_date\": \"2119-09-20 23:59:59\",\n            \"points_summaries\": {\n              \"points_summary\": [\n                {\n                  \"programId\": \"1016\",\n                  \"redeemed\": \"0\",\n                  \"expired\": \"0\",\n                  \"returned\": \"0\",\n                  \"adjusted\": \"0\",\n                  \"lifetimePoints\": \"106\",\n                  \"loyaltyPoints\": \"106\",\n                  \"cumulativePurchases\": \"18000\",\n                  \"currentSlab\": \"bronze\",\n                  \"nextSlab\": \"silver\",\n                  \"nextSlabSerialNumber\": \"2\",\n                  \"nextSlabDescription\": \"silver\",\n                  \"slabSNo\": \"1\",\n                  \"slabExpiryDate\": \"2119-09-20 23:59:59\",\n                  \"totalPoints\": \"\"\n                }\n              ]\n            },\n            \"lifetime_purchases\": \"18000\",\n            \"type\": \"LOYALTY\",\n            \"source\": \"instore\"\n          },\n          \"side_effects\": {\n                        \"effect\": [\n                            {\n                                \"alternate_currency_identifier\": \"rgpws7\",\n                                \"alternate_currency_name\": \"ac1\",\n                                \"awarded_value\": \"110\",\n                                \"type\": \"alternate_currency\"\n                            },\n                            {\n                                \"alternate_currency_identifier\": \"pJ6E8A\",\n                                \"alternate_currency_name\": \"ac2\",\n                                \"awarded_value\": \"500\",\n                                \"type\": \"alternate_currency\"\n                            },\n                            {\n                                \"awarded_points\": \"120\",\n                                \"total_points\": \"2161\",\n                                \"type\": \"points\"\n                            },\n                            {\n                                \"previous_slab_name\": \"alpha1\",\n                                \"previous_slab_number\": \"1\",\n                                \"upgraded_slab_name\": \"Beta1\",\n                                \"upgraded_slab_number\": \"2\",\n                                \"type\": \"slab\"\n                            }\n                        ]\n                    },\n          \"source\": \"ECOMM\",\n          \"item_status\": {\n            \"success\": \"true\",\n            \"code\": 600,\n            \"message\": \"Transaction added successfully\"\n          }\n        }\n      ]\n    }\n  }\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "response": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "object",
                              "properties": {
                                "success": {
                                  "type": "string",
                                  "example": "true"
                                },
                                "code": {
                                  "type": "integer",
                                  "example": 200,
                                  "default": 0
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Success"
                                }
                              }
                            },
                            "transactions": {
                              "type": "object",
                              "properties": {
                                "transaction": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "integer",
                                        "example": 884656083,
                                        "default": 0
                                      },
                                      "shipping_source_till_code": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "number": {
                                        "type": "string",
                                        "example": "test00transact071"
                                      },
                                      "bill_client_id": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "REGULAR"
                                      },
                                      "delivery_status": {
                                        "type": "string",
                                        "example": "DELIVERED"
                                      },
                                      "parent_bill_number": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "outlier_status": {
                                        "type": "string",
                                        "example": "NORMAL"
                                      },
                                      "customer": {
                                        "type": "object",
                                        "properties": {
                                          "user_id": {
                                            "type": "string",
                                            "example": "564703252"
                                          },
                                          "mobile": {
                                            "type": "string",
                                            "example": "919999988886"
                                          },
                                          "firstname": {
                                            "type": "string",
                                            "example": "Tjuser"
                                          },
                                          "lastname": {
                                            "type": "string",
                                            "example": "eightysix"
                                          },
                                          "email": {
                                            "type": "string",
                                            "example": "tom.sawyer@gmail.com"
                                          },
                                          "external_id": {
                                            "type": "string",
                                            "example": "0000011110"
                                          },
                                          "lifetime_points": {
                                            "type": "string",
                                            "example": "23002"
                                          },
                                          "loyalty_points": {
                                            "type": "string",
                                            "example": "2"
                                          },
                                          "current_slab": {
                                            "type": "string",
                                            "example": "Ruby"
                                          },
                                          "tier_expiry_date": {
                                            "type": "string",
                                            "example": "2125-02-10 23:59:59"
                                          },
                                          "points_summaries": {
                                            "type": "object",
                                            "properties": {
                                              "points_summary": {
                                                "type": "array",
                                                "items": {
                                                  "type": "object",
                                                  "properties": {
                                                    "programId": {
                                                      "type": "string",
                                                      "example": "973"
                                                    },
                                                    "redeemed": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "expired": {
                                                      "type": "string",
                                                      "example": "23000"
                                                    },
                                                    "returned": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "adjusted": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "lifetimePoints": {
                                                      "type": "string",
                                                      "example": "23000"
                                                    },
                                                    "loyaltyPoints": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "cumulativePurchases": {
                                                      "type": "string",
                                                      "example": "142000"
                                                    },
                                                    "currentSlab": {
                                                      "type": "string",
                                                      "example": "Ruby"
                                                    },
                                                    "nextSlab": {
                                                      "type": "string",
                                                      "example": "Emerald"
                                                    },
                                                    "nextSlabSerialNumber": {
                                                      "type": "string",
                                                      "example": "6"
                                                    },
                                                    "nextSlabDescription": {
                                                      "type": "string",
                                                      "example": "Tier 6"
                                                    },
                                                    "slabSNo": {
                                                      "type": "string",
                                                      "example": "5"
                                                    },
                                                    "slabExpiryDate": {
                                                      "type": "string",
                                                      "example": "2125-02-10 23:59:59"
                                                    },
                                                    "totalPoints": {
                                                      "type": "string",
                                                      "example": ""
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "lifetime_purchases": {
                                            "type": "string",
                                            "example": "142000"
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "LOYALTY"
                                          },
                                          "source": {
                                            "type": "string",
                                            "example": "instore"
                                          }
                                        }
                                      },
                                      "side_effects": {
                                        "type": "object",
                                        "properties": {
                                          "effect": {
                                            "type": "array"
                                          }
                                        }
                                      },
                                      "source": {
                                        "type": "string",
                                        "example": "INSTORE"
                                      },
                                      "item_status": {
                                        "type": "object",
                                        "properties": {
                                          "success": {
                                            "type": "string",
                                            "example": "true"
                                          },
                                          "code": {
                                            "type": "integer",
                                            "example": 600,
                                            "default": 0
                                          },
                                          "message": {
                                            "type": "string",
                                            "example": "Transaction added successfully"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "With Alternate Currencies as Side Effect",
                      "type": "object",
                      "properties": {
                        "response": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "object",
                              "properties": {
                                "success": {
                                  "type": "string",
                                  "example": "true"
                                },
                                "code": {
                                  "type": "integer",
                                  "example": 200,
                                  "default": 0
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Success"
                                }
                              }
                            },
                            "transactions": {
                              "type": "object",
                              "properties": {
                                "transaction": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "integer",
                                        "example": 37813251,
                                        "default": 0
                                      },
                                      "shipping_source_till_code": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "number": {
                                        "type": "string",
                                        "example": "BILL99"
                                      },
                                      "bill_client_id": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "REGULAR"
                                      },
                                      "delivery_status": {
                                        "type": "string",
                                        "example": "DELIVERED"
                                      },
                                      "parent_bill_number": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "outlier_status": {
                                        "type": "string",
                                        "example": "NORMAL"
                                      },
                                      "customer": {
                                        "type": "object",
                                        "properties": {
                                          "user_id": {
                                            "type": "string",
                                            "example": "342963216"
                                          },
                                          "mobile": {
                                            "type": "string",
                                            "example": "919999000001"
                                          },
                                          "firstname": {
                                            "type": "string",
                                            "example": "Tom"
                                          },
                                          "lastname": {
                                            "type": "string",
                                            "example": "Sawyer"
                                          },
                                          "email": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "external_id": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "lifetime_points": {
                                            "type": "string",
                                            "example": "106"
                                          },
                                          "loyalty_points": {
                                            "type": "string",
                                            "example": "106"
                                          },
                                          "current_slab": {
                                            "type": "string",
                                            "example": "bronze"
                                          },
                                          "tier_expiry_date": {
                                            "type": "string",
                                            "example": "2119-09-20 23:59:59"
                                          },
                                          "points_summaries": {
                                            "type": "object",
                                            "properties": {
                                              "points_summary": {
                                                "type": "array",
                                                "items": {
                                                  "type": "object",
                                                  "properties": {
                                                    "programId": {
                                                      "type": "string",
                                                      "example": "1016"
                                                    },
                                                    "redeemed": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "expired": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "returned": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "adjusted": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "lifetimePoints": {
                                                      "type": "string",
                                                      "example": "106"
                                                    },
                                                    "loyaltyPoints": {
                                                      "type": "string",
                                                      "example": "106"
                                                    },
                                                    "cumulativePurchases": {
                                                      "type": "string",
                                                      "example": "18000"
                                                    },
                                                    "currentSlab": {
                                                      "type": "string",
                                                      "example": "bronze"
                                                    },
                                                    "nextSlab": {
                                                      "type": "string",
                                                      "example": "silver"
                                                    },
                                                    "nextSlabSerialNumber": {
                                                      "type": "string",
                                                      "example": "2"
                                                    },
                                                    "nextSlabDescription": {
                                                      "type": "string",
                                                      "example": "silver"
                                                    },
                                                    "slabSNo": {
                                                      "type": "string",
                                                      "example": "1"
                                                    },
                                                    "slabExpiryDate": {
                                                      "type": "string",
                                                      "example": "2119-09-20 23:59:59"
                                                    },
                                                    "totalPoints": {
                                                      "type": "string",
                                                      "example": ""
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "lifetime_purchases": {
                                            "type": "string",
                                            "example": "18000"
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "LOYALTY"
                                          },
                                          "source": {
                                            "type": "string",
                                            "example": "instore"
                                          }
                                        }
                                      },
                                      "side_effects": {
                                        "type": "object",
                                        "properties": {
                                          "effect": {
                                            "type": "array",
                                            "items": {
                                              "type": "object",
                                              "properties": {
                                                "alternate_currency_identifier": {
                                                  "type": "string",
                                                  "example": "rgpws7"
                                                },
                                                "alternate_currency_name": {
                                                  "type": "string",
                                                  "example": "ac1"
                                                },
                                                "awarded_value": {
                                                  "type": "string",
                                                  "example": "110"
                                                },
                                                "type": {
                                                  "type": "string",
                                                  "example": "alternate_currency"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "source": {
                                        "type": "string",
                                        "example": "ECOMM"
                                      },
                                      "item_status": {
                                        "type": "object",
                                        "properties": {
                                          "success": {
                                            "type": "string",
                                            "example": "true"
                                          },
                                          "code": {
                                            "type": "integer",
                                            "example": 600,
                                            "default": 0
                                          },
                                          "message": {
                                            "type": "string",
                                            "example": "Transaction added successfully"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false
      }
    }
  },
  "x-readme": {
    "headers": [
      {
        "key": "Content-Type",
        "value": "application/json"
      },
      {
        "key": "Accept",
        "value": "application/json"
      }
    ],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```