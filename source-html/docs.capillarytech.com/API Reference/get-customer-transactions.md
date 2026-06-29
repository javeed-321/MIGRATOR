> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Transactions

Retrieves transaction history of a customer which includes the following information. Transaction type, gross transaction amount, transaction date, points issued, points redeemed, coupons redeemed and so on.

By default, it shows up to 10 results and shows results based on the `limit` passed.

* There is no upper limit for number of transactions.
* There is no duration based limit.

By default, it shows up to 10 results and shows results based on the limit passed.

* There is no upper limit for number of transactions.
* There is no duration based limit.

> Note:
> When you use a store context in the request, the API returns points only for loyalty programs mapped to that store. If the store is not linked to a relevant loyalty program, the points fields may be zero, even if the customer has points in other programs.

> Important:
> All monetary fields in transaction line items (such as amount, rate, value, and discount) are rounded based on the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration. If this configuration is set to a value greater than or equal to 0, the API rounds these fields to the specified number of decimal places using rounding down. For example, a value of 38.98 may be returned as 38.97. To ensure correct storage and retrieval of decimal values, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to one more than the value of CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY (for example, if CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY is n, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to n+1).

# Example request

```
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/transactions?mobile=919986000586&format=json&local_currency=true' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDDkxZjg0ZTdi' \
--header 'Cookie: _cfuvid=7hXrm0hlY6PK.uIUfWNV_NmfVOT4Cmsn.3jaI1blBUo-1760427011419-0.0.1.1-604800000'
```

<br />

# Query parameters

| Parameter         | Datatype  | Description                                                                                                                                                                                                                                                                                                                            |
| ----------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierName\*  | enum      | Pass any of the customer identifier with the identifier value. Value: mobile, email, external\_id id. To retrieve transactions of multiple customers at a time, provide each identifier separating by a comma. Example: mobile=44700900000,44700900999,4470090345.                                                                     |
| identifierValue\* | string    | Provide the respective identifier value. For example, ?email=[bradpitt@gmail.com](mailto:tom.sawyer@example.com).                                                                                                                                                                                                                      |
| entity\_type      | enum      | Attribute by which you want to filter the transactions. Value: ZONE, CONCEPT, STORE, TILL, STR\_SERVER (store server). For oAuth2, you need to pass this in headers. See the Introduction > Authentication section for more details.                                                                                                   |
| entity\_code      | string    | Code of the specified entity\_type. For example, to get transactions of a specific zone (with zone code zone01), pass entity\_type=zone\&entity\_code=zone01.                                                                                                                                                                          |
| number            | string    | Fetch transaction details by transaction number.                                                                                                                                                                                                                                                                                       |
| transaction\_id   | int       | Fetch details of a transaction by transaction ID (internally generated unique ID for a transaction).                                                                                                                                                                                                                                   |
| store\_id         | string    | Filter transactions associated to a specific store id.                                                                                                                                                                                                                                                                                 |
| store\_code       | string    | Filter transactions associated to a specific store code.                                                                                                                                                                                                                                                                               |
| start\_id         | int       | Filters transactions with transaction IDs are greater than or equal to a specific value.                                                                                                                                                                                                                                               |
| end\_id           | int       | Filter transactions with transaction IDs less than or equal to a specific value.                                                                                                                                                                                                                                                       |
| start\_date       | date-time | Retrieves transactions made on or after a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start\_date and end\_date. Example: start\_date=2013-12-21+23:45:45\&end\_date=2013-12-29+12:11:45                                                                                                        |
| end\_date         | date-time | Retrieves transactions made on or before a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start\_date and end\_date. Example: start\_date=2013-12-21+23:45:45\&end\_date=2013-12-29+12:11:45                                                                                                       |
| credit\_notes     | boolean   | Retrieves the credit notes of the transactions. Value: true,false. Pass the parameter to retrieve credit notes along with the transaction details. Credit Notes is a receipt given by a cashier to a customer for returned goods which can be used for future purchases.                                                               |
| custom\_fields    | boolean   | Pass true to retrieve transaction level custom field details.                                                                                                                                                                                                                                                                          |
| points\_breakup   | boolean   | Pass true to retrieve the breakup of points earned for each transaction.                                                                                                                                                                                                                                                               |
| limit             | int       | Limit the number of results to be displayed (default value is 10). For example, limit=20 shows up to 20 transactions of the customer.                                                                                                                                                                                                  |
| offset            | int       | Number of records to be ignored from the top. Offset is the position of the entity in the database record. The value is assigned based on the sequence of creation. For example, offset=10 ignores the first 10 transactions of the customer.                                                                                          |
| sort              | enum      | Arranges transactions in ascending or descending order of transaction date if the value istrans\_date, transaction id if the value is trans\_id. By default, results are shown in descending order.                                                                                                                                    |
| order             | enum      | Arranges the transactions based on the value set in sort in an ascending (asc) or descending order (desc). By default, results are shown in the descending order of transaction date/id.                                                                                                                                               |
| local\_currency   | boolean   | Pass `true` to retrieve the main transaction level amount, gross amount and discount values in transaction currency (the currency in which the transaction was made). The rest of the monetary values, including the line item level values, are displayed in the base currency (default currency set at the organisation level) only. |

# Response parameters

<br />

| Parameter                          | Type   | Description                                                                                                                                                                              |
| ---------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| start                              | string | First transaction ID in the response.                                                                                                                                                    |
| delayed\_points                    | string | Delayed accrual points waiting to be available                                                                                                                                           |
| delayed\_returned\_points          | string | Delayed accrual points marked as returned                                                                                                                                                |
| total\_available\_points           | string | Total points currently available, including delayed accrual availability                                                                                                                 |
| total\_returned\_points            | string | Total points returned, including delayed accrual returns                                                                                                                                 |
| transaction                        | object | Transaction record                                                                                                                                                                       |
| . id                               | string | Unique transaction identifier.                                                                                                                                                           |
| . number                           | string | External bill or reference number.                                                                                                                                                       |
| . type                             | string | Transaction type (for example, REGULAR).                                                                                                                                                 |
| . user\_group2\_id                 | string | Secondary user group identifier.                                                                                                                                                         |
| . return\_type                     | string | Return type, if applicable.                                                                                                                                                              |
| . amount                           | string | Transaction amount in base currency (default currency set at organisation level).                                                                                                        |
| . outlier\_status                  | string | Outlier flag for fraud/anomaly checks.                                                                                                                                                   |
| . delivery\_status                 | string | Processing status (for example, DELIVERED).                                                                                                                                              |
| . notes                            | string | Free-text remarks.                                                                                                                                                                       |
| . billing\_time                    | string | Billing timestamp.                                                                                                                                                                       |
| . auto\_update\_time               | string | Last system update timestamp.                                                                                                                                                            |
| . gross\_amount                    | string | Gross amount before discount in base currency.                                                                                                                                           |
| . discount                         | string | Discount applied at bill level in base currency.                                                                                                                                         |
| . store                            | string | Store name.                                                                                                                                                                              |
| . store\_code                      | string | Store code.                                                                                                                                                                              |
| . returned\_points\_on\_bill       | string | Points returned on this bill.                                                                                                                                                            |
| . currency                         | object | Transaction currency info and ratio.                                                                                                                                                     |
| . . ratio                          | number | Exchange rate between the transaction currency and the base currency.                                                                                                                    |
| . . transaction\_currency          | object | Currency used for the transaction. The currency set at store level or the currency defined as local currency when adding transaction using the v1 API.                                   |
| . . . supported\_currency\_id      | number | Internal currency mapping id.                                                                                                                                                            |
| . . . name                         | string | Currency name.                                                                                                                                                                           |
| . . . symbol                       | string | Currency symbol.                                                                                                                                                                         |
| . . id                             | number | Currency record id.                                                                                                                                                                      |
| . . name                           | string | Duplicate of currency name (root of currency).                                                                                                                                           |
| . . symbol                         | string | Duplicate of currency symbol (root of currency).                                                                                                                                         |
| . points                           | object | Points summary for the bill.                                                                                                                                                             |
| . . issued                         | string | Points issued.                                                                                                                                                                           |
| . . redeemed                       | string | Points redeemed.                                                                                                                                                                         |
| . . returned                       | string | Points returned.                                                                                                                                                                         |
| . . expired                        | string | Points expired.                                                                                                                                                                          |
| . . returnedPointsOnBill           | string | Returned points specific to this bill.                                                                                                                                                   |
| . . expiry\_date                   | string | Points expiry date, if any.                                                                                                                                                              |
| . . program\_id                    | string | Loyalty programme identifier.                                                                                                                                                            |
| . custom\_fields                   | object | Custom key–value fields.                                                                                                                                                                 |
| . . field                          | array  | List of custom fields.                                                                                                                                                                   |
| . extended\_fields                 | object | Extended key–value fields.                                                                                                                                                               |
| . . field                          | array  | List of extended fields.                                                                                                                                                                 |
| . identifiers                      | object | External identifiers.                                                                                                                                                                    |
| . . field                          | array  | List of identifier fields.                                                                                                                                                               |
| . coupons                          | array  | Applied coupons.                                                                                                                                                                         |
| . basket\_size                     | number | Count of line items.                                                                                                                                                                     |
| . line\_items                      | object | Container for line item list.                                                                                                                                                            |
| . . line\_item                     | array  | Array of line items.                                                                                                                                                                     |
| . . . \[0]                         | object | First line item.                                                                                                                                                                         |
| . . . . id                         | string | Line item id.                                                                                                                                                                            |
| . . . . type                       | string | Line item type.                                                                                                                                                                          |
| . . . . return\_type               | string | Line-item return type.                                                                                                                                                                   |
| . . . . outlier\_status            | string | Outlier status at line level.                                                                                                                                                            |
| . . . . serial                     | string | Line sequence number.                                                                                                                                                                    |
| . . . . item\_code                 | string | SKU or product code.                                                                                                                                                                     |
| . . . . description                | string | Product description.                                                                                                                                                                     |
| . . . . qty                        | string | Quantity purchased.                                                                                                                                                                      |
| . . . . rate                       | string | Unit price in base currency.                                                                                                                                                             |
| . . . . value                      | string | Line value before bill-level effects in base currency.                                                                                                                                   |
| . . . . discount                   | string | Line-level discount in base currency.                                                                                                                                                    |
| . . . . amount                     | string | Line amount in base currency.                                                                                                                                                            |
| . . . . line\_item\_point\_details | array  | Points breakdown at line level.                                                                                                                                                          |
| . . . . extended\_fields           | object | Extended fields for the line.                                                                                                                                                            |
| . . . . split\_items               | array  | Split components, if any.                                                                                                                                                                |
| . . . . addon\_items               | array  | Add-on items, if any.                                                                                                                                                                    |
| . . . . combo\_items               | array  | Combo components, if any.                                                                                                                                                                |
| . . . . attributes                 | object | Line attributes.                                                                                                                                                                         |
| . . . . . attribute                | array  | Name–value attribute list.                                                                                                                                                               |
| . . . . local\_currency            | object | Includes the base currency and the transaction currency object at line item-level. This is available only when the local currency query parameter is set to true.                        |
| . . . . . id                       | string | Line currency record id.                                                                                                                                                                 |
| . . . . . ratio                    | string | Exchange rate between the transaction currency and the base currency                                                                                                                     |
| . . . . . base\_currency           | object | Base currency details. This is the default currency set at the organisation level.                                                                                                       |
| . . . . . . id                     | string | Base currency ID.                                                                                                                                                                        |
| . . . . . . name                   | string | Base currency name.                                                                                                                                                                      |
| . . . . . . symbol                 | string | Base currency symbol.                                                                                                                                                                    |
| . . . . . transaction\_currency    | object | Original transaction currency. This is the currency at which the transaction took place. This is set at the store level or as the local currency when using the v1 add transaction API.  |
| . . . . . . id                     | string | Base currency id.                                                                                                                                                                        |
| . . . . . . name                   | string | base  currency name.                                                                                                                                                                     |
| . . . . . . symbol                 | string | Transaction currency symbol.                                                                                                                                                             |
| . . . . . amount                   | string | Line amount in base currency.                                                                                                                                                            |
| . . . . . value                    | string | Line value in base currency.                                                                                                                                                             |
| . . . . . rate                     | string | Unit price in base currency.                                                                                                                                                             |
| . . . . . discount                 | string | Line discount in base currency.                                                                                                                                                          |
| . local\_currency                  | object | Bill-level currency mapping. The object containing transaction and base currency details for the whole transaction. This is available only when the local currency parameter is enabled. |
| . . id                             | string | Bill currency record id.                                                                                                                                                                 |
| . . ratio                          | string | Exchange rate between the transaction currency and the base currency                                                                                                                     |
| . . base\_currency                 | object | Base currency details. The default currency of the organisation.                                                                                                                         |
| . . . id                           | string | Base currency id.                                                                                                                                                                        |
| . . . name                         | string | Base currency name.                                                                                                                                                                      |
| . . . symbol                       | string | Base currency symbol.                                                                                                                                                                    |
| . . transaction\_currency          | object | Original transaction currency.                                                                                                                                                           |
| . . . id                           | string | Transaction currency id.                                                                                                                                                                 |
| . . . name                         | string | Transaction currency name.                                                                                                                                                               |
| . . . symbol                       | string | Transaction currency symbol.                                                                                                                                                             |
| . . amount                         | string | Bill amount in transaction currency.                                                                                                                                                     |
| . . value                          | string | An equivalent amount of the bill amount in the base currency. This parameter will be removed in future and can be ignored.                                                               |
| . . discount                       | string | Bill discount in transaction currency.                                                                                                                                                   |
| . . gross\_amount                  | string | The total transaction value before any discounts are applied in the transaction currency.                                                                                                |

# Error code

| Error | Description                 |
| :---- | :-------------------------- |
| 91001 | Failed to get point details |

# Example response

```Text with local_currency=true
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "customer": {
            "firstname": "Neeraj",
            "lastname": "FiveEight",
            "user_id": "564582355",
            "mobile": "919986000586",
            "email": "neeraj.k@capillarytech.com",
            "external_id": null,
            "lifetime_points": 124374.4,
            "lifetime_purchases": 72871,
            "loyalty_points": 96330,
            "current_slab": "Diamond",
            "registered_on": "2025-01-06 09:56:21",
            "updated_on": "2025-10-14 12:05:31",
            "type": "LOYALTY",
            "source": "instore",
            "user_groups2": [],
            "count": 37,
            "start": "891340869",
            "delayed_points": "0",
            "delayed_returned_points": "0",
            "total_available_points": "96330",
            "total_returned_points": "0",
            "rows": "10",
            "transactions": {
                "transaction": [
                    {
                        "id": "891340869",
                        "number": "DaveMustaine1",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "200.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "This is test",
                        "billing_time": "2025-09-19 09:04:20",
                        "auto_update_time": "2025-09-19 09:04:20",
                        "gross_amount": "110.00",
                        "discount": "10.00",
                        "store": "DocStore",
                        "store_code": "doc123",
                        "returned_points_on_bill": "0.0",
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "paymentmode",
                                    "value": "cash"
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": [
                                {
                                    "name": "additional_discount",
                                    "value": "100"
                                },
                                {
                                    "name": "cashier_name",
                                    "value": "Singh"
                                }
                            ]
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 0,
                        "line_items": {
                            "line_item": []
                        }
                    },
                    {
                        "id": "892288086",
                        "number": "NeeLocalTest4_2Disc",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "8600.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "Transaction Number 74",
                        "billing_time": "2025-04-08 17:30:00",
                        "auto_update_time": "2025-10-14 12:05:31",
                        "gross_amount": "8600.00",
                        "discount": "860.00",
                        "store": "DocSep25",
                        "store_code": "docsep25",
                        "returned_points_on_bill": "0.0",
                        "currency": {
                            "ratio": 86,
                            "transaction_currency": {
                                "supported_currency_id": 101182220,
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "id": 101182220,
                            "name": "United States dollar",
                            "symbol": "$"
                        },
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "",
                                    "value": ""
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": []
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 1,
                        "line_items": {
                            "line_item": [
                                {
                                    "id": "4033748435",
                                    "type": "REGULAR",
                                    "return_type": "",
                                    "outlier_status": "NORMAL",
                                    "serial": "1",
                                    "item_code": "model_id_001",
                                    "description": "Steel Bottle3",
                                    "qty": "4",
                                    "rate": "430.00",
                                    "value": "1720.00",
                                    "discount": "258.00",
                                    "amount": "1720.00",
                                    "line_item_point_details": [
                                        {
                                            "issued": "0",
                                            "promised": "0",
                                            "promised_returned": "0",
                                            "redeemed": "0",
                                            "returned": "0",
                                            "redeemable_from": "",
                                            "expiry_date": "",
                                            "program_id": "0"
                                        }
                                    ],
                                    "extended_fields": {
                                        "field": []
                                    },
                                    "split_items": [],
                                    "addon_items": [],
                                    "combo_items": [],
                                    "attributes": {
                                        "attribute": [
                                            {
                                                "name": "Returnable",
                                                "value": "true"
                                            },
                                            {
                                                "name": "ReturnableDays",
                                                "value": "-1"
                                            }
                                        ]
                                    },
                                    "local_currency": {
                                        "id": "352136823",
                                        "ratio": "86.0",
                                        "base_currency": {
                                            "id": "95",
                                            "name": "Indian rupee",
                                            "symbol": "₹"
                                        },
                                        "transaction_currency": {
                                            "id": "216",
                                            "name": "United States dollar",
                                            "symbol": "$"
                                        },
                                        "amount": "1720.0",
                                        "value": "1720.00",
                                        "rate": "430.0",
                                        "discount": "258.0"
                                    }
                                }
                            ]
                        },
                        "local_currency": {
                            "id": "101182220",
                            "ratio": "86.0",
                            "base_currency": {
                                "id": "95",
                                "name": "Indian rupee",
                                "symbol": "₹"
                            },
                            "transaction_currency": {
                                "id": "216",
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "amount": "100.0",
                            "value": "8600.0",
                            "discount": "10.0",
                            "gross_amount": "100.0"
                        }
                    },
                    {
                        "id": "892287951",
                        "number": "NeeLocalTest3_2Disc",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "8600.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "Transaction Number 74",
                        "billing_time": "2025-04-08 17:30:00",
                        "auto_update_time": "2025-10-14 11:59:23",
                        "gross_amount": "8600.00",
                        "discount": "860.00",
                        "store": "DocSep25",
                        "store_code": "docsep25",
                        "returned_points_on_bill": "0.0",
                        "currency": {
                            "ratio": 86,
                            "transaction_currency": {
                                "supported_currency_id": 101182187,
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "id": 101182187,
                            "name": "United States dollar",
                            "symbol": "$"
                        },
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "",
                                    "value": ""
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": []
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 1,
                        "line_items": {
                            "line_item": [
                                {
                                    "id": "4033748056",
                                    "type": "REGULAR",
                                    "return_type": "",
                                    "outlier_status": "NORMAL",
                                    "serial": "1",
                                    "item_code": "model_id_001",
                                    "description": "Steel Bottle3",
                                    "qty": "4",
                                    "rate": "430.00",
                                    "value": "1720.00",
                                    "discount": "430.00",
                                    "amount": "1720.00",
                                    "line_item_point_details": [
                                        {
                                            "issued": "0",
                                            "promised": "0",
                                            "promised_returned": "0",
                                            "redeemed": "0",
                                            "returned": "0",
                                            "redeemable_from": "",
                                            "expiry_date": "",
                                            "program_id": "0"
                                        }
                                    ],
                                    "extended_fields": {
                                        "field": []
                                    },
                                    "split_items": [],
                                    "addon_items": [],
                                    "combo_items": [],
                                    "attributes": {
                                        "attribute": [
                                            {
                                                "name": "Returnable",
                                                "value": "true"
                                            },
                                            {
                                                "name": "ReturnableDays",
                                                "value": "-1"
                                            }
                                        ]
                                    },
                                    "local_currency": {
                                        "id": "352136768",
                                        "ratio": "86.0",
                                        "base_currency": {
                                            "id": "95",
                                            "name": "Indian rupee",
                                            "symbol": "₹"
                                        },
                                        "transaction_currency": {
                                            "id": "216",
                                            "name": "United States dollar",
                                            "symbol": "$"
                                        },
                                        "amount": "1720.0",
                                        "value": "1720.00",
                                        "rate": "430.0",
                                        "discount": "430.0"
                                    }
                                }
                            ]
                        },
                        "local_currency": {
                            "id": "101182187",
                            "ratio": "86.0",
                            "base_currency": {
                                "id": "95",
                                "name": "Indian rupee",
                                "symbol": "₹"
                            },
                            "transaction_currency": {
                                "id": "216",
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "amount": "100.0",
                            "value": "8600.0",
                            "discount": "10.0",
                            "gross_amount": "100.0"
                        }
                    },
                    {
                        "id": "892287745",
                        "number": "NeeLocalTest3_Disc",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "8600.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "Transaction Number 74",
                        "billing_time": "2025-04-08 17:30:00",
                        "auto_update_time": "2025-10-14 11:45:21",
                        "gross_amount": "8600.00",
                        "discount": "860.00",
                        "store": "DocSep25",
                        "store_code": "docsep25",
                        "returned_points_on_bill": "0.0",
                        "currency": {
                            "ratio": 86,
                            "transaction_currency": {
                                "supported_currency_id": 101182174,
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "id": 101182174,
                            "name": "United States dollar",
                            "symbol": "$"
                        },
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "",
                                    "value": ""
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": []
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 1,
                        "line_items": {
                            "line_item": [
                                {
                                    "id": "4033747481",
                                    "type": "REGULAR",
                                    "return_type": "",
                                    "outlier_status": "NORMAL",
                                    "serial": "1",
                                    "item_code": "model_id_001",
                                    "description": "Steel Bottle3",
                                    "qty": "4",
                                    "rate": "430.00",
                                    "value": "1720.00",
                                    "discount": "0.00",
                                    "amount": "1720.00",
                                    "line_item_point_details": [
                                        {
                                            "issued": "0",
                                            "promised": "0",
                                            "promised_returned": "0",
                                            "redeemed": "0",
                                            "returned": "0",
                                            "redeemable_from": "",
                                            "expiry_date": "",
                                            "program_id": "0"
                                        }
                                    ],
                                    "extended_fields": {
                                        "field": []
                                    },
                                    "split_items": [],
                                    "addon_items": [],
                                    "combo_items": [],
                                    "attributes": {
                                        "attribute": [
                                            {
                                                "name": "Returnable",
                                                "value": "true"
                                            },
                                            {
                                                "name": "ReturnableDays",
                                                "value": "-1"
                                            }
                                        ]
                                    },
                                    "local_currency": {
                                        "id": "352136751",
                                        "ratio": "86.0",
                                        "base_currency": {
                                            "id": "95",
                                            "name": "Indian rupee",
                                            "symbol": "₹"
                                        },
                                        "transaction_currency": {
                                            "id": "216",
                                            "name": "United States dollar",
                                            "symbol": "$"
                                        },
                                        "amount": "1720.0",
                                        "value": "1720.00",
                                        "rate": "430.0",
                                        "discount": "0.0"
                                    }
                                }
                            ]
                        },
                        "local_currency": {
                            "id": "101182174",
                            "ratio": "86.0",
                            "base_currency": {
                                "id": "95",
                                "name": "Indian rupee",
                                "symbol": "₹"
                            },
                            "transaction_currency": {
                                "id": "216",
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "amount": "100.0",
                            "value": "8600.0",
                            "discount": "10.0",
                            "gross_amount": "100.0"
                        }
                    },
                    {
                        "id": "892287474",
                        "number": "NeeLocalTest2",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "8600.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "Transaction Number 74",
                        "billing_time": "2025-04-08 17:30:00",
                        "auto_update_time": "2025-10-14 11:27:56",
                        "gross_amount": "8600.00",
                        "discount": "0.00",
                        "store": "DocSep25",
                        "store_code": "docsep25",
                        "returned_points_on_bill": "0.0",
                        "currency": {
                            "ratio": 86,
                            "transaction_currency": {
                                "supported_currency_id": 101182172,
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "id": 101182172,
                            "name": "United States dollar",
                            "symbol": "$"
                        },
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "",
                                    "value": ""
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": []
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 1,
                        "line_items": {
                            "line_item": [
                                {
                                    "id": "4033746711",
                                    "type": "REGULAR",
                                    "return_type": "",
                                    "outlier_status": "NORMAL",
                                    "serial": "1",
                                    "item_code": "model_id_001",
                                    "description": "Steel Bottle3",
                                    "qty": "4",
                                    "rate": "430.00",
                                    "value": "1720.00",
                                    "discount": "0.00",
                                    "amount": "1720.00",
                                    "line_item_point_details": [
                                        {
                                            "issued": "0",
                                            "promised": "0",
                                            "promised_returned": "0",
                                            "redeemed": "0",
                                            "returned": "0",
                                            "redeemable_from": "",
                                            "expiry_date": "",
                                            "program_id": "0"
                                        }
                                    ],
                                    "extended_fields": {
                                        "field": []
                                    },
                                    "split_items": [],
                                    "addon_items": [],
                                    "combo_items": [],
                                    "attributes": {
                                        "attribute": [
                                            {
                                                "name": "Returnable",
                                                "value": "true"
                                            },
                                            {
                                                "name": "ReturnableDays",
                                                "value": "-1"
                                            }
                                        ]
                                    },
                                    "local_currency": {
                                        "id": "352136746",
                                        "ratio": "86.0",
                                        "base_currency": {
                                            "id": "95",
                                            "name": "Indian rupee",
                                            "symbol": "₹"
                                        },
                                        "transaction_currency": {
                                            "id": "216",
                                            "name": "United States dollar",
                                            "symbol": "$"
                                        },
                                        "amount": "1720.0",
                                        "value": "1720.00",
                                        "rate": "430.0",
                                        "discount": "0.0"
                                    }
                                }
                            ]
                        },
                        "local_currency": {
                            "id": "101182172",
                            "ratio": "86.0",
                            "base_currency": {
                                "id": "95",
                                "name": "Indian rupee",
                                "symbol": "₹"
                            },
                            "transaction_currency": {
                                "id": "216",
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "amount": "100.0",
                            "value": "8600.0",
                            "discount": "0.0",
                            "gross_amount": "100.0"
                        }
                    },
                    {
                        "id": "892285776",
                        "number": "NeeLocalTest1",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "8600.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "Transaction Number 74",
                        "billing_time": "2025-04-08 17:30:00",
                        "auto_update_time": "2025-10-14 09:40:10",
                        "gross_amount": "8600.00",
                        "discount": "0.00",
                        "store": "DocSep25",
                        "store_code": "docsep25",
                        "returned_points_on_bill": "0.0",
                        "currency": {
                            "ratio": 86,
                            "transaction_currency": {
                                "supported_currency_id": 101182166,
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "id": 101182166,
                            "name": "United States dollar",
                            "symbol": "$"
                        },
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "",
                                    "value": ""
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": []
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 1,
                        "line_items": {
                            "line_item": [
                                {
                                    "id": "4033741540",
                                    "type": "REGULAR",
                                    "return_type": "",
                                    "outlier_status": "NORMAL",
                                    "serial": "1",
                                    "item_code": "model_id_001",
                                    "description": "Steel Bottle3",
                                    "qty": "4",
                                    "rate": "430.00",
                                    "value": "1720.00",
                                    "discount": "0.00",
                                    "amount": "1720.00",
                                    "line_item_point_details": [
                                        {
                                            "issued": "0",
                                            "promised": "0",
                                            "promised_returned": "0",
                                            "redeemed": "0",
                                            "returned": "0",
                                            "redeemable_from": "",
                                            "expiry_date": "",
                                            "program_id": "0"
                                        }
                                    ],
                                    "extended_fields": {
                                        "field": []
                                    },
                                    "split_items": [],
                                    "addon_items": [],
                                    "combo_items": [],
                                    "attributes": {
                                        "attribute": [
                                            {
                                                "name": "Returnable",
                                                "value": "true"
                                            },
                                            {
                                                "name": "ReturnableDays",
                                                "value": "-1"
                                            }
                                        ]
                                    },
                                    "local_currency": {
                                        "id": "352136740",
                                        "ratio": "86.0",
                                        "base_currency": {
                                            "id": "95",
                                            "name": "Indian rupee",
                                            "symbol": "₹"
                                        },
                                        "transaction_currency": {
                                            "id": "216",
                                            "name": "United States dollar",
                                            "symbol": "$"
                                        },
                                        "amount": "1720.0",
                                        "value": "1720.00",
                                        "rate": "430.0",
                                        "discount": "0.0"
                                    }
                                }
                            ]
                        },
                        "local_currency": {
                            "id": "101182166",
                            "ratio": "86.0",
                            "base_currency": {
                                "id": "95",
                                "name": "Indian rupee",
                                "symbol": "₹"
                            },
                            "transaction_currency": {
                                "id": "216",
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "amount": "100.0",
                            "value": "8600.0",
                            "discount": "0.0",
                            "gross_amount": "100.0"
                        }
                    },
                    {
                        "id": "892283305",
                        "number": "NeeLocalTest",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "5160.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "Transaction Number 74",
                        "billing_time": "2025-04-08 17:30:00",
                        "auto_update_time": "2025-10-14 07:30:11",
                        "gross_amount": "5160.00",
                        "discount": "0.00",
                        "store": "DocSep25",
                        "store_code": "docsep25",
                        "returned_points_on_bill": "0.0",
                        "currency": {
                            "ratio": 86,
                            "transaction_currency": {
                                "supported_currency_id": 101182131,
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "id": 101182131,
                            "name": "United States dollar",
                            "symbol": "$"
                        },
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "",
                                    "value": ""
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": []
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 1,
                        "line_items": {
                            "line_item": [
                                {
                                    "id": "4033733432",
                                    "type": "REGULAR",
                                    "return_type": "",
                                    "outlier_status": "NORMAL",
                                    "serial": "1",
                                    "item_code": "model_id_001",
                                    "description": "Steel Bottle3",
                                    "qty": "4",
                                    "rate": "430.00",
                                    "value": "1720.00",
                                    "discount": "0.00",
                                    "amount": "1720.00",
                                    "line_item_point_details": [
                                        {
                                            "issued": "0",
                                            "promised": "0",
                                            "promised_returned": "0",
                                            "redeemed": "0",
                                            "returned": "0",
                                            "redeemable_from": "",
                                            "expiry_date": "",
                                            "program_id": "0"
                                        }
                                    ],
                                    "extended_fields": {
                                        "field": []
                                    },
                                    "split_items": [],
                                    "addon_items": [],
                                    "combo_items": [],
                                    "attributes": {
                                        "attribute": [
                                            {
                                                "name": "Returnable",
                                                "value": "true"
                                            },
                                            {
                                                "name": "ReturnableDays",
                                                "value": "-1"
                                            }
                                        ]
                                    },
                                    "local_currency": {
                                        "id": "352136663",
                                        "ratio": "86.0",
                                        "base_currency": {
                                            "id": "95",
                                            "name": "Indian rupee",
                                            "symbol": "₹"
                                        },
                                        "transaction_currency": {
                                            "id": "216",
                                            "name": "United States dollar",
                                            "symbol": "$"
                                        },
                                        "amount": "1720.0",
                                        "value": "1720.00",
                                        "rate": "430.0",
                                        "discount": "0.0"
                                    }
                                }
                            ]
                        },
                        "local_currency": {
                            "id": "101182131",
                            "ratio": "86.0",
                            "base_currency": {
                                "id": "95",
                                "name": "Indian rupee",
                                "symbol": "₹"
                            },
                            "transaction_currency": {
                                "id": "216",
                                "name": "United States dollar",
                                "symbol": "$"
                            },
                            "amount": "60.0",
                            "value": "5160.0",
                            "discount": "0.0",
                            "gross_amount": "60.0"
                        }
                    },
                    {
                        "id": "884649013",
                        "number": "DaveMustaineSearch",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "200.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "This is test",
                        "billing_time": "2025-04-07 04:15:10",
                        "auto_update_time": "2025-04-07 04:15:09",
                        "gross_amount": "110.00",
                        "discount": "10.00",
                        "store": "DocStore",
                        "store_code": "doc123",
                        "returned_points_on_bill": "0.0",
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "paymentmode",
                                    "value": "cash"
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": [
                                {
                                    "name": "additional_discount",
                                    "value": "100"
                                },
                                {
                                    "name": "cashier_name",
                                    "value": "Singh"
                                }
                            ]
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 0,
                        "line_items": {
                            "line_item": []
                        }
                    },
                    {
                        "id": "883010076",
                        "number": "DaveMustaine11",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "200.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "This is test",
                        "billing_time": "2025-03-11 13:04:07",
                        "auto_update_time": "2025-03-11 13:04:06",
                        "gross_amount": "110.00",
                        "discount": "10.00",
                        "store": "DocStore",
                        "store_code": "doc123",
                        "returned_points_on_bill": "0.0",
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "paymentmode",
                                    "value": "cash"
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": [
                                {
                                    "name": "additional_discount",
                                    "value": "100"
                                },
                                {
                                    "name": "cashier_name",
                                    "value": "Singh"
                                }
                            ]
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 0,
                        "line_items": {
                            "line_item": []
                        }
                    },
                    {
                        "id": "883009995",
                        "number": "DaveMustaine10",
                        "type": "REGULAR",
                        "user_group2_id": "0",
                        "return_type": "",
                        "amount": "200.00",
                        "outlier_status": "NORMAL",
                        "delivery_status": "DELIVERED",
                        "notes": "This is test",
                        "billing_time": "2025-03-11 13:01:45",
                        "auto_update_time": "2025-03-11 13:01:45",
                        "gross_amount": "110.00",
                        "discount": "10.00",
                        "store": "DocStore",
                        "store_code": "doc123",
                        "returned_points_on_bill": "0.0",
                        "points": {
                            "issued": "0",
                            "redeemed": "0",
                            "returned": "0",
                            "expired": "0",
                            "returnedPointsOnBill": "0.0",
                            "expiry_date": "",
                            "program_id": "983"
                        },
                        "custom_fields": {
                            "field": [
                                {
                                    "name": "paymentmode",
                                    "value": "cash"
                                }
                            ]
                        },
                        "extended_fields": {
                            "field": [
                                {
                                    "name": "additional_discount",
                                    "value": "100"
                                },
                                {
                                    "name": "cashier_name",
                                    "value": "Singh"
                                }
                            ]
                        },
                        "identifiers": {
                            "field": []
                        },
                        "coupons": [],
                        "basket_size": 0,
                        "line_items": {
                            "line_item": []
                        }
                    }
                ]
            },
            "item_status": {
                "success": "true",
                "code": "1052",
                "message": "Transactions fetched successfully",
                "warnings": {
                    "warning": []
                }
            }
        }
    }
}
```

<br />

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
    "/customer/transactions": {
      "get": {
        "summary": "Get Customer Transactions",
        "description": "Retrieves transaction history of a customer which includes the following information. Transaction type, gross transaction amount, transaction date, points issued, points redeemed, coupons redeemed and so on.\n\nBy default, it shows up to 10 results and shows results based on the `limit` passed.\n\n* There is no upper limit for number of transactions.\n* There is no duration based limit.",
        "operationId": "get-customer-transactions",
        "parameters": [
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier of the customer to use.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "external_id id"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the specified identifier type. o retrieve transactions of multiple customers at a time, provide each identifier separating by a comma. <br>Example: `mobile=44700900000,44700900999,4470090345`",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entity_type",
            "in": "query",
            "description": "Attribute by which you want to filter the transactions. <br>For oAuth2, you need to pass this in headers. See the Introduction > Authentication section for more details.",
            "schema": {
              "type": "string",
              "enum": [
                "ZONE",
                "CONCEPT",
                "STORE",
                "TILL",
                "STR_SERVER"
              ]
            }
          },
          {
            "name": "entity_code",
            "in": "query",
            "description": "Code of the specified entity_type. For example, to get transactions of a specific zone (with zone code zone01), pass entity_type=zone&entity_code=zone01.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "number",
            "in": "query",
            "description": "Fetch transaction details by transaction number.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "transaction_id",
            "in": "query",
            "description": "Fetch details of a transaction by transaction ID (internally generated unique ID for a transaction).",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "store_id",
            "in": "query",
            "description": "Filter transactions associated to a specific store ID.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "store_code",
            "in": "query",
            "description": "Filter transactions made in a specific store. Pass the store code.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "start_id",
            "in": "query",
            "description": "Filters transactions with transaction IDs are greater than or equal to a specific value.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "end_id",
            "in": "query",
            "description": "Filter transactions with transaction IDs less than or equal to a specific value.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "start_date",
            "in": "query",
            "description": "Retrieves transactions made on or after a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Retrieves transactions made on or before a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start_date and end_date. Example: start_date=2013-12-21+23:45:45&end_date=2013-12-29+12:11:45",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "credit_notes",
            "in": "query",
            "description": "Retrieves the credit notes of the transactions. Credit Notes is a receipt given by a cashier to a customer for returned goods which can be used for future purchases.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "custom_fields",
            "in": "query",
            "description": "Pass true to retrieve transaction level custom field details.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "points_breakup",
            "in": "query",
            "description": "Pass true to retrieve the breakup of points earned for each transaction.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limit the number of results to be displayed (default value is 10). For example, limit=20 shows up to 20 transactions of the customer.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Number of records to be ignored from the top. Offset is the position of the entity in the database record. The value is assigned based on the sequence of creation. For example, offset=10 ignores the first 10 transactions of the customer.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Whether to sort results by transaction date or transaction ID.",
            "schema": {
              "type": "string",
              "enum": [
                "trans_date",
                "trans_id"
              ]
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "Arranges the transactions based on the value set in sort. By default, results are shown in the descending order of transaction date/id.",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ],
              "default": "desc"
            }
          },
          {
            "name": "mlp",
            "in": "query",
            "description": "Pass `true` to get transactions from all programs of the org, `false` to fetch from the default program associated with the till.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": 200,\n      \"message\": \"Success\"\n    },\n    \"customer\": {\n      \"firstname\": \"Tom\",\n      \"lastname\": \"Sawyer\",\n      \"user_id\": \"98662653\",\n      \"mobile\": \"919740000000\",\n      \"email\": \"bradpitt@gmail.com\",\n      \"external_id\": \"anjvat123\",\n      \"lifetime_points\": 5730,\n      \"lifetime_purchases\": 53609,\n      \"loyalty_points\": 4776,\n      \"current_slab\": \"Albatross Elite\",\n      \"registered_on\": \"2019-04-14 11:32:30\",\n      \"updated_on\": \"2020-04-03 06:58:32\",\n      \"type\": \"LOYALTY\",\n      \"source\": \"instore\",\n      \"count\": 51,\n      \"start\": \"321260040\",\n      \"delayed_points\": \"0\",\n      \"delayed_returned_points\": \"0\",\n      \"total_available_points\": \"0\",\n      \"total_returned_points\": \"0\",\n      \"rows\": \"10\",\n      \"transactions\": {\n        \"transaction\": [\n          {\n            \"id\": \"321260040\",\n            \"number\": \"localcurrency0235\",\n            \"type\": \"REGULAR\",\n            \"return_type\": \"\",\n            \"amount\": \"2000\",\n            \"outlier_status\": \"NORMAL\",\n            \"delivery_status\": \"DELIVERED\",\n            \"notes\": \"Regular Bill with Payment Details\",\n            \"billing_time\": \"2020-04-01 00:00:00\",\n            \"auto_update_time\": \"2020-04-03 06:58:31\",\n            \"gross_amount\": \"2000\",\n            \"discount\": \"0\",\n            \"store\": \"International Business Park\",\n            \"store_code\": \"international_business_park\",\n            \"returned_points_on_bill\": \"0.0\",\n            \"currency\": {\n              \"ratio\": 1,\n              \"transaction_currency\": {\n                \"supported_currency_id\": 70275062,\n                \"name\": \"Indian Rupee \",\n                \"symbol\": \"₹\"\n              },\n              \"id\": 70275062,\n              \"name\": \"Indian Rupee \",\n              \"symbol\": \"₹\"\n            },\n            \"points\": {\n              \"issued\": \"200\",\n              \"redeemed\": \"0\",\n              \"returned\": \"0\",\n              \"expired\": \"0\",\n              \"returnedPointsOnBill\": \"0.0\",\n              \"expiry_date\": \"2020-05-31 23:59:59\",\n              \"program_id\": \"469\"\n            },\n            \"custom_fields\": {\n              \"field\": [\n                {\n                  \"name\": \"\",\n                  \"value\": \"\"\n                }\n              ]\n            },\n            \"extended_fields\": {\n              \"field\": []\n            },\n            \"coupons\": [],\n            \"basket_size\": 0,\n            \"line_items\": {\n              \"line_item\": []\n            }\n          },\n          {\n            \"id\": \"321156323\",\n            \"number\": \"localcurrency020\",\n            \"type\": \"REGULAR\",\n            \"return_type\": \"\",\n            \"amount\": \"2000\",\n            \"outlier_status\": \"NORMAL\",\n            \"delivery_status\": \"DELIVERED\",\n            \"notes\": \"Regular Bill with Payment Details\",\n            \"billing_time\": \"2020-04-01 00:00:00\",\n            \"auto_update_time\": \"2020-04-02 08:37:02\",\n            \"gross_amount\": \"2000\",\n            \"discount\": \"0\",\n            \"store\": \"International Business Park\",\n            \"store_code\": \"international_business_park\",\n            \"returned_points_on_bill\": \"0.0\",\n            \"points\": {\n              \"issued\": \"200\",\n              \"redeemed\": \"0\",\n              \"returned\": \"0\",\n              \"expired\": \"0\",\n              \"returnedPointsOnBill\": \"0.0\",\n              \"expiry_date\": \"2020-05-31 23:59:59\",\n              \"program_id\": \"469\"\n            },\n            \"custom_fields\": {\n              \"field\": [\n                {\n                  \"name\": \"\",\n                  \"value\": \"\"\n                }\n              ]\n            },\n            \"extended_fields\": {\n              \"field\": []\n            },\n            \"coupons\": [],\n            \"basket_size\": 0,\n            \"line_items\": {\n              \"line_item\": []\n            }\n          }\n        ]\n      },\n      \"item_status\": {\n        \"success\": \"true\",\n        \"code\": \"1052\",\n        \"message\": \"Transactions fetched successfully\",\n        \"warnings\": {\n          \"warning\": []\n        }\n      }\n    }\n  }"
                  },
                  "Transactions fetched successfully, Failed to get point details.": {
                    "value": "“item_status”: {\n        “success”: “true”,\n        “code”: “1052”,\n        “message”: “Transactions fetched successfully, Failed to get point details”,\n        “warnings”: {\n          “warning”: [\n            “91001\"\n          ]\n        }\n      }"
                  }
                },
                "schema": {
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
                        "customer": {
                          "type": "object",
                          "properties": {
                            "firstname": {
                              "type": "string",
                              "example": "Tom"
                            },
                            "lastname": {
                              "type": "string",
                              "example": "Sawyer"
                            },
                            "user_id": {
                              "type": "string",
                              "example": "98662653"
                            },
                            "mobile": {
                              "type": "string",
                              "example": "919740000000"
                            },
                            "email": {
                              "type": "string",
                              "example": "tom.sawyer@example.com"
                            },
                            "external_id": {
                              "type": "string",
                              "example": "anjvat123"
                            },
                            "lifetime_points": {
                              "type": "integer",
                              "example": 5730,
                              "default": 0
                            },
                            "lifetime_purchases": {
                              "type": "integer",
                              "example": 53609,
                              "default": 0
                            },
                            "loyalty_points": {
                              "type": "integer",
                              "example": 4776,
                              "default": 0
                            },
                            "current_slab": {
                              "type": "string",
                              "example": "Albatross Elite"
                            },
                            "registered_on": {
                              "type": "string",
                              "example": "2019-04-14 11:32:30"
                            },
                            "updated_on": {
                              "type": "string",
                              "example": "2020-04-03 06:58:32"
                            },
                            "type": {
                              "type": "string",
                              "example": "LOYALTY"
                            },
                            "source": {
                              "type": "string",
                              "example": "instore"
                            },
                            "count": {
                              "type": "integer",
                              "example": 51,
                              "default": 0
                            },
                            "start": {
                              "type": "string",
                              "example": "321260040"
                            },
                            "delayed_points": {
                              "type": "string",
                              "example": "0"
                            },
                            "delayed_returned_points": {
                              "type": "string",
                              "example": "0"
                            },
                            "total_available_points": {
                              "type": "string",
                              "example": "0"
                            },
                            "total_returned_points": {
                              "type": "string",
                              "example": "0"
                            },
                            "rows": {
                              "type": "string",
                              "example": "10"
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
                                        "type": "string",
                                        "example": "321260040"
                                      },
                                      "number": {
                                        "type": "string",
                                        "example": "localcurrency0235"
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "REGULAR"
                                      },
                                      "return_type": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "amount": {
                                        "type": "string",
                                        "example": "2000"
                                      },
                                      "outlier_status": {
                                        "type": "string",
                                        "example": "NORMAL"
                                      },
                                      "delivery_status": {
                                        "type": "string",
                                        "example": "DELIVERED"
                                      },
                                      "notes": {
                                        "type": "string",
                                        "example": "Regular Bill with Payment Details"
                                      },
                                      "billing_time": {
                                        "type": "string",
                                        "example": "2020-04-01 00:00:00"
                                      },
                                      "auto_update_time": {
                                        "type": "string",
                                        "example": "2020-04-03 06:58:31"
                                      },
                                      "gross_amount": {
                                        "type": "string",
                                        "example": "2000"
                                      },
                                      "discount": {
                                        "type": "string",
                                        "example": "0"
                                      },
                                      "store": {
                                        "type": "string",
                                        "example": "International Business Park"
                                      },
                                      "store_code": {
                                        "type": "string",
                                        "example": "international_business_park"
                                      },
                                      "returned_points_on_bill": {
                                        "type": "string",
                                        "example": "0.0"
                                      },
                                      "currency": {
                                        "type": "object",
                                        "properties": {
                                          "ratio": {
                                            "type": "integer",
                                            "example": 1,
                                            "default": 0
                                          },
                                          "transaction_currency": {
                                            "type": "object",
                                            "properties": {
                                              "supported_currency_id": {
                                                "type": "integer",
                                                "example": 70275062,
                                                "default": 0
                                              },
                                              "name": {
                                                "type": "string",
                                                "example": "Indian Rupee "
                                              },
                                              "symbol": {
                                                "type": "string",
                                                "example": "₹"
                                              }
                                            }
                                          },
                                          "id": {
                                            "type": "integer",
                                            "example": 70275062,
                                            "default": 0
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "Indian Rupee "
                                          },
                                          "symbol": {
                                            "type": "string",
                                            "example": "₹"
                                          }
                                        }
                                      },
                                      "points": {
                                        "type": "object",
                                        "properties": {
                                          "issued": {
                                            "type": "string",
                                            "example": "200"
                                          },
                                          "redeemed": {
                                            "type": "string",
                                            "example": "0"
                                          },
                                          "returned": {
                                            "type": "string",
                                            "example": "0"
                                          },
                                          "expired": {
                                            "type": "string",
                                            "example": "0"
                                          },
                                          "returnedPointsOnBill": {
                                            "type": "string",
                                            "example": "0.0"
                                          },
                                          "expiry_date": {
                                            "type": "string",
                                            "example": "2020-05-31 23:59:59"
                                          },
                                          "program_id": {
                                            "type": "string",
                                            "example": "469"
                                          }
                                        }
                                      },
                                      "custom_fields": {
                                        "type": "object",
                                        "properties": {
                                          "field": {
                                            "type": "array",
                                            "items": {
                                              "type": "object",
                                              "properties": {
                                                "name": {
                                                  "type": "string",
                                                  "example": ""
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": ""
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "extended_fields": {
                                        "type": "object",
                                        "properties": {
                                          "field": {
                                            "type": "array"
                                          }
                                        }
                                      },
                                      "coupons": {
                                        "type": "array"
                                      },
                                      "basket_size": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "line_items": {
                                        "type": "object",
                                        "properties": {
                                          "line_item": {
                                            "type": "array"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "item_status": {
                              "type": "object",
                              "properties": {
                                "success": {
                                  "type": "string",
                                  "example": "true"
                                },
                                "code": {
                                  "type": "string",
                                  "example": "1052"
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Transactions fetched successfully"
                                },
                                "warnings": {
                                  "type": "object",
                                  "properties": {
                                    "warning": {
                                      "type": "array"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "https://eu.api.capillarytech.com/v1.1/customer/transactions?format=json&mobile=44700900000&start_date=2020-04-03+23:45:45&end_date=2016-12-29+12:11:45",
              "name": "Sample Request"
            }
          ],
          "samples-languages": [
            "curl"
          ]
        }
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