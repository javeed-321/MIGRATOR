> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Redeem Cart Promotion

This API records a customer's cart promotion redemption during a transaction.

This API defines the endpoint for saving or applying a cart promotion that a customer used during a purchase. It specifies the method to record the details of the transaction, such as the customer information, the items bought, the discount received, and how the cart promotion was applied.

# Example request

```curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/redemptions' \
--header 'Content-Type: application/json' \
--header 'X-CAP-API-AUTH-ORG-ID: 4000004' \
--header 'Authorization: Basic bmFtYW5fZG9jgyMzA3MWJmYjM5OGM5ZmM2YjZlY2I2MmEy' \
--header 'Cookie: _cfuvid=uvNcgoyanbmZMCVkA64njE4pSA_tJw1wkWo-1762160764633-0.0.1.1-604800000' \
--data '{
  "customerIdentifierValue" : "1234512345", 
  "customerIdentifierType" : "mobile",
  "customerId" : "566881933",
  "transactionIdentifier" : "txn-50",
  "transactionNumber" : "txn-50",
   "transactionDate":1743521508000, 
   "amount":1000,
   "lineItems" : [
    {
        "sku":"Sku#Fuel", 
        "promotionId":"67e3c1073919452f135e2da0",  
        "earnedPromotionId":"67e63559e1c34e7d8e9348aa", 
        "redemptionCount":1,
        "discount":500,
        "discountAppliedOnQuantity":1,
        "promotionAppliedOnQuantity":1
     }
   ],
   "redemptions" : [
      {
        "sku":"Sku#Fuel", 
        "promotionId":"67e3c1073919452f135e2da0",  
        "redemptionCount":1,
        "discount":500,
        "discountAppliedOnQuantity":1,
        "promotionAppliedOnQuantity":1
     }
   ]
}'
```

# Prerequisites

* Authentication: Basic or OAuth authentication
* Access group resource: Write access to customer group resource

# Body parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        customerIdentifierValue
      </td>

      <td>
        String
      </td>

      <td>
        Conditional
      </td>

      <td>
        Specifies the value used to identify the customer, such as their mobile number.  Required if customerId is not provided.
      </td>
    </tr>

    <tr>
      <td>
        customerIdentifierType
      </td>

      <td>
        String
      </td>

      <td>
        Conditional
      </td>

      <td>
        Specifies the type of identifier used. Required if customerId is not provided.
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        String
      </td>

      <td>
        Conditional
      </td>

      <td>
        Specifies the Unique Identifier of the customer.  
        Note : One of customerId or the identifier pair is required.
      </td>
    </tr>

    <tr>
      <td>
        transactionIdentifier
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the unique ID for the transaction. Supports a max of 250 characters.
      </td>
    </tr>

    <tr>
      <td>
        transactionNumber
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the customer-facing bill or receipt number. Supports a max of 250 characters.
      </td>
    </tr>

    <tr>
      <td>
        transactionDate
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the time of the transaction in UTC.  
        Time format : milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        transactionDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Conditional
      </td>

      <td>
        Specifies the time of the transaction in ISO 8601 format, returned in the server time zone.

        EU server example 2025-04-01T15:31:48Z → 01 April 2025, 15:31:48 (UTC)

        India server example 2025-04-01T21:01:48+05:30 → 01 April 2025, 21:01:48 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the total amount of the transaction before any discount.
      </td>
    </tr>

    <tr>
      <td>
        lineItems
      </td>

      <td>
        Array
      </td>

      <td>
        Conditional
      </td>

      <td>
        Defines the details of the items purchased.  At least one of lineItems or redemptions must be specified.
      </td>
    </tr>

    <tr>
      <td>
        .sku
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Specifies the unique identifier for the product (SKU) to which the cart promotion is applied.
      </td>
    </tr>

    <tr>
      <td>
        .promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the Unique Identifier of the cart promotion being redeemed or applied to the item.
      </td>
    </tr>

    <tr>
      <td>
        .earnedPromotionId
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Specifies the Unique Identifier of the previously earned cart promotion being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        .redemptionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the number of times this cart promotion is being redeemed for the item.
      </td>
    </tr>

    <tr>
      <td>
        .discount
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the monetary value of the discount applied.
      </td>
    </tr>

    <tr>
      <td>
        .discountAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the number of item units on which the discount was actually applied.
      </td>
    </tr>

    <tr>
      <td>
        .promotionAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the quantity of the item that was eligible for the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        redemptions
      </td>

      <td>
        Array
      </td>

      <td>
        Conditional
      </td>

      <td>
        Details about the cart promotions redeemed. You must specify at least one of the lineItems or redemptions.
      </td>
    </tr>

    <tr>
      <td>
        .sku
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Specifies the product SKU for which the cart promotion is being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        .promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the unique identifier of the cart promotion that is being redeemed.
      </td>
    </tr>

    <tr>
      <td>
        .redemptionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the number of times this cart promotion needs to be redeemed for the item.
      </td>
    </tr>

    <tr>
      <td>
        .discount
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the discount amount applied as part of the redemption.
      </td>
    </tr>

    <tr>
      <td>
        .discountAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the quantity of the item on which the discount is applied.
      </td>
    </tr>

    <tr>
      <td>
        .promotionAppliedOnQuantity
      </td>

      <td>
        Integer
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the quantity of the item on which the discount was is applied.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json
{
    "data": {
        "orgId": 100737,
        "customerIdentifierValue": "1234512345",
        "customerIdentifierType": "mobile",
        "customerId": 566881933,
        "transactionIdentifier": "txn-50",
        "transactionNumber": "txn-50",
        "transactionDate": 1743521508000,
        "transactionDateISO": "2025-04-01T15:31:48Z",
        "amount": 1000.0,
        "redemptions": [
            {
                "promotionId": "67e3c1073919452f135e2da0",
                "redemptionCount": 1,
                "discount": "500.000000",
                "discountAppliedOnQuantity": "1.000000",
                "promotionAppliedOnQuantity": "1.000000"
            }
        ],
        "lineItems": [
            {
                "sku": "Sku#Fuel",
                "promotionId": "67e3c1073919452f135e2da0",
                "earnedPromotionId": "67e63559e1c34e7d8e9348aa",
                "redemptionCount": 1,
                "discount": "500.000000",
                "discountAppliedOnQuantity": "1.000000",
                "promotionAppliedOnQuantity": "1.000000"
            }
        ]
    }
}
```

# Response parameters

| Field                        | Type    | Description                                                                                       |
| :--------------------------- | :------ | :------------------------------------------------------------------------------------------------ |
| data                         | Object  | Defines the object that contains the details of the processed redemption.                         |
| .orgId                       | Integer | Specifies the Unique Identifier of your organization.                                             |
| .customerIdentifierValue     | String  | Specifies the value used to identify the customer.                                                |
| .customerIdentifierType      | String  | Specifies the type of identifier provided.                                                        |
| .customerId                  | Integer | Specifies the Unique Identifier of the customer.                                                  |
| .transactionIdentifier       | String  | Specifies the Unique Identifier used to track transaction.                                        |
| .transactionNumber           | String  | Specifies the visible transaction number.                                                         |
| .transactionDate             | Integer | Indicates the timestamp of the transaction in milliseconds since epoch.                           |
| .amount                      | Integer | Specifies the total transaction amount before applying discounts.                                 |
| .redemptions                 | Array   | Defines the redemptions array that contains details about the cart promotions that were redeemed. |
| ..promotionId                | String  | Specifies the unique identifier of the cart promotion that is being redeemed.                     |
| ..redemptionCount            | Integer | Indicates the number of times this cart promotion is being redeemed for the item.                 |
| ..discount                   | String  | Specifies the discount amount applied as part of the redemption.                                  |
| ..discountAppliedOnQuantity  | String  | Indicates the quantity of the item on which the discount was actually applied.                    |
| ..promotionAppliedOnQuantity | String  | Indicates the quantity of the item that was eligible for the cart promotion.                      |
| .lineItems                   | Array   | Defines the details of the items purchased in the transaction.                                    |
| ..sku                        | String  | Specifies the unique identifier for the product (SKU).                                            |
| ..promotionId                | String  | Specifies the unique identifier of the cart promotion that is being redeemed.                     |
| ..earnedPromotionId          | String  | Specifies the Unique Identifier of the previously earned cart promotion being redeemed.           |
| ..redemptionCount            | Integer | Indicates the number of times this cart promotion is being redeemed for the item.                 |
| ..discount                   | String  | Specifies the discount amount applied as part of the redemption.                                  |
| ..discountAppliedOnQuantity  | String  | Indicates the quantity of the item on which the discount was actually applied.                    |
| ..promotionAppliedOnQuantity | String  | Indicates the quantity of the item on which the discount was actually applied.                    |

# Error codes

| Code | Description                                                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid request. Check required parameters. Ensure all required parameters are provided and valid.                          |
| 404  | Passed promotion, redemption, or evaluation ID not found. Use a valid and existing promotion, redemption, or evaluation ID. |
| 405  | Org not enabled for redemption without cart evaluation. Enable this feature for your org or perform cart evaluation.        |
| 406  | Web engage account Id is not valid for this org. Verify and update your web engage account ID for this org.                 |
| 500  | Internal server error. Retry the request after a short delay, and contact support if the error persists.                    |
| 521  | Could not acquire the lock on the resource. Retry after some time or resolve resource contention.                           |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v1",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}",
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
    "/api_gateway/v1/promotions/redemptions#": {
      "post": {
        "summary": "Redeem Cart Promotion",
        "description": "This API records a customer's cart promotion redemption during a transaction.",
        "operationId": "redeem-cart-promotion",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"data\": {\n    \"orgId\": 100737,\n    \"customerIdentifierValue\": \"9988221100\",\n    \"customerIdentifierType\": \"mobile\",\n    \"customerId\": 564332013,\n    \"transactionIdentifier\": \"txn-50\",\n    \"transactionNumber\": \"txn-50\",\n    \"transactionDate\": 1743521508000,\n    \"amount\": 1000,\n    \"redemptions\": [\n      {\n        \"promotionId\": \"67e3c1073919452f135e2da0\",\n        \"redemptionCount\": 1,\n        \"discount\": \"500.000000\",\n        \"discountAppliedOnQuantity\": \"1.000000\",\n        \"promotionAppliedOnQuantity\": \"1.000000\"\n      }\n    ],\n    \"lineItems\": [\n      {\n        \"sku\": \"Sku#Fuel\",\n        \"promotionId\": \"67e3c1073919452f135e2da0\",\n        \"earnedPromotionId\": \"67e63559e1c34e7d8e9348aa\",\n        \"redemptionCount\": 1,\n        \"discount\": \"500.000000\",\n        \"discountAppliedOnQuantity\": \"1.000000\",\n        \"promotionAppliedOnQuantity\": \"1.000000\"\n      }\n    ]\n  }\n"
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
                    "value": "{\n    \"timestamp\": 1746166870695,\n    \"errorCode\": 400,\n    \"message\": \"Validation Failed\",\n    \"errorDetails\": [\n        \"CustomerIdentifierType and CustomerIdentifierValue is mandatory when customerId is not specified.\"\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "timestamp": {
                      "type": "integer",
                      "example": 1746166870695,
                      "default": 0
                    },
                    "errorCode": {
                      "type": "integer",
                      "example": 400,
                      "default": 0
                    },
                    "message": {
                      "type": "string",
                      "example": "Validation Failed"
                    },
                    "errorDetails": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "CustomerIdentifierType and CustomerIdentifierValue is mandatory when customerId is not specified."
                      }
                    }
                  }
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
              "code": "curl --location 'https://eu.api.capillary\ntech.com/api_gateway/v1/promotions/redemptions'\n--header 'Content-Type: application/json' \\\n--header 'X-CAP-API-AUTH-ORG-ID: 4000004' \\\n--header 'Authorization: Basic bmFtYW5fZG9jOmE\nzYjRjYjgyM\nzA3MWJmYjM5OGM5ZmM2YjZlY2I2MmEy' \\\n--data '{\n  \"customerIdentifierValue\" : \"9988221100\", \n  \"customerIdentifierType\" : \"mobile\",\n  \"customerId\" : \"564332013\",\n  \"transactionIdentifier\" : \"txn-50\",\n  \"transactionNumber\" : \"txn-50\",\n   \"transactionDate\":1743521508000, \n   \"amount\":1000,\n   \"lineItems\" : [\n    {\n        \"sku\":\"Sku#Fuel\", \n        \"promotionId\":\"67e3c1073919452f135e2da0\",  \n        \"earnedPromotionId\":\"67e63559e1c34e7d8e9\n348aa\", \n        \"redemptionCount\":1,\n        \"discount\":500,\n        \"discountAppliedOnQuantity\":1,\n        \"promotionAppliedOnQuantity\":1\n     }\n   ],\n   \"redemptions\" : [\n      {\n        \"sku\":\"Sku#Fuel\", \n        \"promotionId\":\"67e3c1073919452f135e2da0\",  \n        \"redemptionCount\":1,\n        \"discount\":500,\n        \"discountAppliedOnQuantity\":1,\n        \"promotionAppliedOnQuantity\":1\n     }\n   ]\n}'"
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