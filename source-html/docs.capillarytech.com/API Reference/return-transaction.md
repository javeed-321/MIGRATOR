> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Return Transaction

Lets you submit a return transaction of any transaction type.

The following are different return types supported for a transaction.

1. Full Return: To return an entire transaction and exchange with different items
2. Line-item Return: To return line-item(s) of a transaction and exchange with other items
3. Mixed Return: To exchange one or more line items of a transaction (line-items)
4. Amount Return: To return the entire transaction amount

> 📘 Notes
>
> * For return transactions, it is required to pass return item’s purchased transaction number and purchase\_ time . Purchase time: The date and time of the actual transaction \* Billing time: The date and time of the return transaction.
> * Before using this API, you need to know the configurations set of the Return Transactions page of InTouch **Settings** > **Systems & Deployment** > **InTouch POS Configuration**.
> * You can disable the configuration CONF\_POINTS\_RETURN\_ENABLED to prevent the reversal of earned points when a transaction is returned. When a user returns a transaction, the points earned for that transaction are not reversed. To reverse the points, you can use the [Manual Points Adjustment API](https://docs.capillarytech.com/reference/deduct-points-and-alternatecurrencies-from-user-using-userid#/). **To enable the configuration for your organisation, raise a JIRA ticket to the Capillary Product Support team.**
> * You can create a Neo workflow to automatically [revoke coupons ](https://docs.capillarytech.com/docs/offers#revoking-coupons-for-returned-transactions)associated with a returned transaction.
> * The points deducted on a return are determined by re-evaluating the original earn rules against the remaining items, not by proportionally splitting the originally awarded points. For example, if a customer earns 1,000 bonus points for a ₹10,000 spend and returns an item that drops the total below ₹10,000, all 1,000 points are deducted — not a proportional fraction. For more information, see [Return re-evaluation](https://docs.capillarytech.com/docs/points#return-re-evaluation).

# Request URL

`https://{host}/v1.1/transaction/add?format={xml/json}`

# Request Body Parameters

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
        type*
      </td>

      <td>
        enum
      </td>

      <td>
        Type of transaction. RETURN for loyalty transaction return, NOT_INTERESTED_RETURN for not-interested return, MIXED for exchange (involves both return and purchase). You will also need to pass type for MIXED transaction both at bill level (MIXED) and line-item level (regular for new transaction item and return for return item).
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
        Type of return. Value: AMOUNT to return transaction or line-items for money, LINE_ITEM to return one or more line-items of the transaction, FULL to return complete transaction.
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
        Sale transaction number of the return bill.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        long
      </td>

      <td>
        Transaction ID of the transaction that needs to be returned.

        Identifies the specific transaction to be returned when identical bill numbers exist across different transactions.
        This is applicable when the CONF_LOYALTY_BILL_NUMBER_UNIQUE_ONLY_STORE configuration is enabled, and the same bill number is used for transactions at different stores.
        Example:
        Store A: Customer transaction with bill number B1
        Store B: Different transaction also with bill number B1
        In this scenario, you can include the transaction ID in the return transaction payload to:

        * Distinguish between transactions with identical bill numbers
        * Prevent failures in return transactions due to duplicate bill numbers
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
        Date and time of the return transaction in YYYY-MM-DD HH:MM:SS format.
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
        Actual transaction date of the returning bill in YYYY-MM-DD HH-MM-SS format.
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
        Sum of regular line items of the current transaction after discount.
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
        Price of each line-item.
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
        Gross transaction amount (transaction amount excluding discount).
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
        Source from which the transaction is made. Values: INSTORE( for InStore), WECHAT (WeChat), MARTJACK(AnywhereCommerce), WEB_ENGAGE (Web-engage integration), ECOMMERCE(“ECOMMERCE”), JD (JD), TAOBAO (Taobao), TMALL (TMall), FACEBOOK (Facebook), WEBSITE (other website), OTHERS (any other source).
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
        Valid transaction level extended field details in name and value pairs. You can also pass line-item level extended field details in line_item object.
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
        Transaction level custom field details. Pass line-item level custom field details in line_item object.
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

> 📘 Parameters marked with \* are mandatory.

# Response Parameters

| Parameter            | Datatype  | Description                                                                                                                                                                                                                                                                                           |
| -------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                   | long      | Unique transaction ID generated internally for return.                                                                                                                                                                                                                                                |
| customer             | obj       | Details of the customer associated to the transaction. Not applicable for NOT\_INTERESTED transactions.                                                                                                                                                                                               |
| lifetime\_points     | int       | Total loyalty points earned by the customer to date.                                                                                                                                                                                                                                                  |
| lifetime\_purchases  | int       | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.                                                                                                                                                                                            |
| loyalty\_points      | int       | Current active loyalty points (neither redeemed nor expired) of the customer.                                                                                                                                                                                                                         |
| type                 | enum      | Type of transaction. Value: return for loyalty transaction, not\_interested\_return for non-loyalty or not-interested transactions.                                                                                                                                                                   |
| source               | enum      | Source from which the transaction is made. Values: INSTORE( for InStore), WECHAT (WeChat), MARTJACK(AnywhereCommerce), WEB\_ENGAGE (Web-engage integration), ECOMMERCE (ECOMMERCE), JD (JD), TAOBAO (Taobao), TMALL (TMall), FACEBOOK (Facebook), WEBSITE (other website), OTHERS (any other source). |
| current\_slab        | string    | Current loyalty tier of the customer.                                                                                                                                                                                                                                                                 |
| tier\_expiry\_date   | date-time | Expiry date of the current tier in YYYY-MM-DD HH:MM:SS format.                                                                                                                                                                                                                                        |
| points\_summaries    | obj       | Shows the details of the loyalty points.                                                                                                                                                                                                                                                              |
| programId            | long      | Unique ID of the loyalty program associated to the points summary.                                                                                                                                                                                                                                    |
| redeemed             | int       | In total points earned from the program, the total number of points that are redeemed.                                                                                                                                                                                                                |
| expired              | int       | In total points earned from the program, the total number of points that are expired.                                                                                                                                                                                                                 |
| returned             | int       | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.                                                                                                                                                                              |
| adjusted             | int       | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if debited points are more than credited, and positive if credited points are more than debited.                                                                                   |
| cumulativePurchases  | double    | Total purchases amount of the customer in the stores associated to the current loyalty program.                                                                                                                                                                                                       |
| currentSlab          | string    | Current tier of the customer in the loyalty program.                                                                                                                                                                                                                                                  |
| nextSlab             | string    | Next loyalty tier of the customer.                                                                                                                                                                                                                                                                    |
| nextSlabSerialNumber | int       | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                                                                                                                       |
| nextSlabDescription  | string    | Description of the next tier as saved in the loyalty program.                                                                                                                                                                                                                                         |
| slabSNo              | int       | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                                                                                                    |
| slabExpiryDate       | date-time | Expiry date of the current loyalty tier of the customer in YYYY-MM-DD HH:MM:SS.                                                                                                                                                                                                                       |
| type                 | enum      | Loyalty type of the customer. LOYALTY if the customer is enrolled in the org’s loyalty program, NON\_LOYALTY if customer has not enrolled in the loyalty program but registered mobile number or email id with the org.                                                                               |
| custom\_fields       | obj       | Transaction or line-item level custom field details - field name (name) and field value (value).                                                                                                                                                                                                      |
| extended\_fields     | obj       | Transaction or line-item level extended field details - extended field name (name) and extended field value (value).                                                                                                                                                                                  |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "transaction-v1",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}.api.capillarytech.com/v1.1/transaction",
      "variables": {
        "host": {
          "default": "host"
        }
      }
    }
  ],
  "security": [
    {}
  ],
  "paths": {
    "/add": {
      "post": {
        "summary": "Return Transaction",
        "description": "Lets you submit a return transaction of any transaction type.",
        "operationId": "return-transaction",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "transaction type": {
                    "type": "string",
                    "description": "The type of transaction."
                  },
                  "country": {
                    "type": "string",
                    "description": "The country in which the transaction took place."
                  },
                  "number": {
                    "type": "string",
                    "description": "The unique identifier for the transaction."
                  },
                  "not_interested_reason": {
                    "type": "string",
                    "description": "The reason provided for the return transaction."
                  },
                  "return_type": {
                    "type": "string",
                    "description": "The type of return."
                  },
                  "parent_bill_number": {
                    "type": "string",
                    "description": "The original bill number associated with the transaction."
                  },
                  "purchase_time": {
                    "type": "string",
                    "description": "The date of the original purchase."
                  },
                  "amount": {
                    "type": "string",
                    "description": "The amount associated with the return."
                  },
                  "billing_time": {
                    "type": "string",
                    "description": "The time the bill was issued."
                  },
                  "customer mobile": {
                    "type": "string",
                    "description": "The mobile number of the customer."
                  },
                  "customer email": {
                    "type": "string",
                    "description": "The email address of the customer."
                  },
                  "customer external_id": {
                    "type": "string",
                    "description": "An external identifier for the customer."
                  },
                  "customer firstname": {
                    "type": "string",
                    "description": "The customer's first name."
                  },
                  "customer lastname": {
                    "type": "string",
                    "description": "The customer's last name."
                  },
                  "line_item serial": {
                    "type": "string",
                    "description": "The serial number of the item."
                  },
                  "line_item amount": {
                    "type": "string",
                    "description": "The amount for the line item."
                  },
                  "line_item description": {
                    "type": "string",
                    "description": "The description of the line item."
                  },
                  "line_item item_code": {
                    "type": "string",
                    "description": "The unique code associated with the line item."
                  },
                  "line_item qty": {
                    "type": "string",
                    "description": "The quantity of the line item."
                  },
                  "line_item rate": {
                    "type": "string",
                    "description": "The rate of the line item."
                  },
                  "line_item value": {
                    "type": "string",
                    "description": "The value of the line item."
                  },
                  "line_item attribute name": {
                    "type": "string",
                    "description": "The attribute name of the line item."
                  },
                  "line_item attribute value": {
                    "type": "string",
                    "description": "The attribute value of the line item."
                  },
                  "custom_data_item field_name": {
                    "type": "string",
                    "description": "The custom field name."
                  },
                  "custom_data_item field_value": {
                    "type": "string",
                    "description": "The value associated with the custom field."
                  },
                  "id": {
                    "type": "integer",
                    "description": "Transaction ID of the transaction that needs to be returned.",
                    "format": "int64"
                  }
                }
              },
              "examples": {
                "SAMPLE POST REQUEST (MIXED TRANSACTION)": {
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
                "Sample POST request with 'id' parameter for duplicate bill numbers": {
                  "value": {
                    "root": {
                      "transaction": {
                        "type": "return",
                        "country": "true",
                        "number": "BILL990909",
                        "id": "875080362",
                        "not_interested_reason": "Example reason",
                        "return_type": "AMOUNT",
                        "parent_bill_number": "RE123",
                        "purchase_time": "2024-08-27",
                        "amount": "500",
                        "billing_time": "2024-08-27",
                        "customer": {
                          "mobile": "13860975184",
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
                        }
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
                  "SAMPLE RESPONSE": {
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\",\n            \"code\": 200,\n            \"message\": \"Success\"\n        },\n        \"transactions\": {\n            \"transaction\": []\n        }\n    }\n}\n          "
                  },
                  "Sample response for POST with 'id' parameter for duplicate bill numbers": {
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\",\n            \"code\": 200,\n            \"message\": \"Success\"\n        },\n        \"transactions\": {\n            \"transaction\": [\n                {\n                    \"id\": 24902729,\n                    \"shipping_source_till_code\": \"\",\n                    \"number\": \"BILL990909\",\n                    \"bill_client_id\": \"\",\n                    \"type\": \"RETURN\",\n                    \"delivery_status\": \"DELIVERED\",\n                    \"parent_bill_number\": \"RE123\",\n                    \"outlier_status\": \"NORMAL\",\n                    \"customer\": {\n                        \"user_id\": \"557603396\",\n                        \"mobile\": \"13860975184\",\n                        \"firstname\": \"Tom\",\n                        \"lastname\": \"Sawyer\",\n                        \"email\": \"141@capillarytech.com\",\n                        \"external_id\": \"000003880435\",\n                        \"lifetime_points\": \"0\",\n                        \"loyalty_points\": \"0\",\n                        \"current_slab\": \"Base\",\n                        \"tier_expiry_date\": \"2024-10-11 11:06:17\",\n                        \"points_summaries\": {\n                            \"points_summary\": [\n                                {\n                                    \"programId\": \"469\",\n                                    \"redeemed\": \"0\",\n                                    \"expired\": \"0\",\n                                    \"returned\": \"0\",\n                                    \"adjusted\": \"0\",\n                                    \"lifetimePoints\": \"0\",\n                                    \"loyaltyPoints\": \"0\",\n                                    \"cumulativePurchases\": \"9500\",\n                                    \"currentSlab\": \"Base\",\n                                    \"nextSlab\": \"Bronze\",\n                                    \"nextSlabSerialNumber\": \"2\",\n                                    \"nextSlabDescription\": \"Tier 2\",\n                                    \"slabSNo\": \"1\",\n                                    \"slabExpiryDate\": \"2024-10-11 11:06:17\",\n                                    \"totalPoints\": \"\"\n                                }\n                            ]\n                        },\n                        \"lifetime_purchases\": \"9500\",\n                        \"type\": \"LOYALTY\",\n                        \"source\": \"instore\"\n                    },\n                    \"side_effects\": {\n                        \"effect\": []\n                    },\n                    \"points_deducted\": 0,\n                    \"points_balance\": 0,\n                    \"source\": \"\",\n                    \"item_status\": {\n                        \"success\": \"true\",\n                        \"code\": 600,\n                        \"message\": \"Transaction added successfully\"\n                    }\n                }\n            ]\n        }\n    }\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "SAMPLE RESPONSE",
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
                                  "type": "array"
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "Sample response for POST with 'id' parameter for duplicate bill numbers",
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
                                        "example": 24902729,
                                        "default": 0
                                      },
                                      "shipping_source_till_code": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "number": {
                                        "type": "string",
                                        "example": "BILL990909"
                                      },
                                      "bill_client_id": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "RETURN"
                                      },
                                      "delivery_status": {
                                        "type": "string",
                                        "example": "DELIVERED"
                                      },
                                      "parent_bill_number": {
                                        "type": "string",
                                        "example": "RE123"
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
                                            "example": "557603396"
                                          },
                                          "mobile": {
                                            "type": "string",
                                            "example": "13860975184"
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
                                            "example": "141@capillarytech.com"
                                          },
                                          "external_id": {
                                            "type": "string",
                                            "example": "000003880435"
                                          },
                                          "lifetime_points": {
                                            "type": "string",
                                            "example": "0"
                                          },
                                          "loyalty_points": {
                                            "type": "string",
                                            "example": "0"
                                          },
                                          "current_slab": {
                                            "type": "string",
                                            "example": "Base"
                                          },
                                          "tier_expiry_date": {
                                            "type": "string",
                                            "example": "2024-10-11 11:06:17"
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
                                                      "example": "469"
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
                                                      "example": "0"
                                                    },
                                                    "loyaltyPoints": {
                                                      "type": "string",
                                                      "example": "0"
                                                    },
                                                    "cumulativePurchases": {
                                                      "type": "string",
                                                      "example": "9500"
                                                    },
                                                    "currentSlab": {
                                                      "type": "string",
                                                      "example": "Base"
                                                    },
                                                    "nextSlab": {
                                                      "type": "string",
                                                      "example": "Bronze"
                                                    },
                                                    "nextSlabSerialNumber": {
                                                      "type": "string",
                                                      "example": "2"
                                                    },
                                                    "nextSlabDescription": {
                                                      "type": "string",
                                                      "example": "Tier 2"
                                                    },
                                                    "slabSNo": {
                                                      "type": "string",
                                                      "example": "1"
                                                    },
                                                    "slabExpiryDate": {
                                                      "type": "string",
                                                      "example": "2024-10-11 11:06:17"
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
                                            "example": "9500"
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
                                      "points_deducted": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "points_balance": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "source": {
                                        "type": "string",
                                        "example": ""
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/transaction/add' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Cookie: _cfuvid=K0FnoR56khf8wazu.pXkeORL929gB4vIE_D65SevHsA-1744196775822-0.0.1.1-604800000' \\\n--data-raw '\n{\n  \"transaction type\": \"RETURN\",\n  \"number\": \"test00transact002\",\n  \"return_type\": \"FULL\",\n  \"parent_bill_number\": \"test00return002\",\n  \"purchase_time\": \"2025-01-15 14:58:01\",\n  \"amount\": \"500\",\n  \"billing_time\": \"2025-01-29 15:37:00\",\n  \"customer mobile\": \"919999988887\",\n  \"customer email\": \"leomessi1919@gmail.com\",\n  \"customer external_id\": \"1919\",\n  \"customer firstname\": \"Lionel\",\n  \"customer lastname\": \"Messi\",\n  \"line_item serial\": \"0\",\n  \"line_item amount\": \"100.50\",\n  \"line_item item_code\": \"sku_234_2\",\n  \"line_item qty\": \"1\",\n  \"line_item rate\": \"100.50\",\n  \"line_item value\": \"100.50\",\n  \"id\": 880862082\n}\n'",
              "name": "SAMPLE POST REQUEST (RETURN)"
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
    "explorer-enabled": false,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```