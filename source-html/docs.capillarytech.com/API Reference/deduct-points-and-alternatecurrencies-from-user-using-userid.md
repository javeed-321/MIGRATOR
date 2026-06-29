> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Deduct points and alternate currencies from user using userId

This API allows you to deduct reward currencies (points or alternate currencies) from a user using the `userId` . It is also referred to as the `Manual Points Adjustment API`.

> 👍 Notes
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * You can enable `ALLOW_NEGATIVE_BALANCE_ON_RETURN` that support negative points. For example, if the negative points configuration is enabled and the currently available points for a customer are 0, you can still deduct 100 points from a customer. To enable, create a JIRA ticket to the Capillary Product Support team.
> * This API overrides the CONF\_POINTS\_RETURN\_ENABLED configuration that prevents the reversal of earned points when a transaction is returned. Points are reversed even if the configuration is disabled.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/customers/565032200/negativePointsAdjustment?source=INSTORE' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic bmFtYWN0MTY=' \
--header 'Cookie: _cfuvid=QZz3iRQ8IGuoQrdG_VSRXK7vCjfMgRAg4j0_sPX6KXQ-1734090839667-0.0.1.1-604800000' \
--data '{
{
   "pointsAwardedId": 38768508,
   "pointsAwardedRefType": "bill_regular",
   "promotionId": 7955500,
   "promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c", 
    "programId": 973,
    "alternateCurrencyName": "DocCoin",
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "1",
    "valueToBeAdjusted": "1",
    "reasonOfReturn": "Testing"
}
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Access to Points access group resource. For more information, see [access group](https://docs.capillarytech.com/docs/access-group#access-group) documentation.

# Resource information

|               |                                                  |
| :------------ | :----------------------------------------------- |
| URI           | `v2/customers/{userid}/negativePointsAdjustment` |
| HTTP method   | POST                                             |
| Pagination    | NA                                               |
| Rate limit    | NA                                               |
| Batch support | NA                                               |

# API endpoint example

`https://eu.api.capillarytech.com/v2/customers/{userid}/negativePointsAdjustment?source=INSTORE`

# Request path parameters

| Field Name | Data Type | Description                                                                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| userId\*   | Integer   | Unique ID of the customer (customerId). **Note:** When using `userId` as an identifier, request it within the path parameter. |

# Request query parameters

| Field name | Data type | Description                                                                                                                                                                                           |
| :--------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source     | Enum      | Source in which the identifier is available. Supported values: `INSTORE`, `MARTJACK`, `WECHAT`, `FACEBOOK` , `WEB_ENGAGE`, `INSTORE`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`. |

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        pointsAwardedId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the awarded points. To retrieve the `pointsAwardedId` use the [https://docs.capillarytech.com/update/reference/get-paid#/](https://docs.capillarytech.com/update/reference/get-paid#/) .
        **NOTE:** - Provide the `pointsAwardedRefType` along with the `pointsAwardedId`.
      </td>
    </tr>

    <tr>
      <td>
        pointsAwardedRefType
      </td>

      <td>
        Enum
      </td>

      <td>
        Reference type for points awarded. Supported values: `bill_regular`, `bill_promotions`, `line_item_regular`, `line_item_promotions`, `customer_promotions`
      </td>
    </tr>

    <tr>
      <td>
        promotionId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the promotion. Ensure that the promotion id value is lesser than 10 digits.  
        **NOTE:** Provide either `promotionId` or `promotionIdentifier`. 
      </td>
    </tr>

    <tr>
      <td>
        promotionIdentifier
      </td>

      <td>
        string
      </td>

      <td>
        Identifier for the promotion. **NOTE:** Provide the `programId` along with the `promotionIdentifier`.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the loyalty program associated with the promotion.
      </td>
    </tr>

    <tr>
      <td>
        alternateCurrencyName
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the alternate currency. Refer to the documentation on [viewing alternate currencies](https://docs.capillarytech.com/docs/alternate-currencies#viewing-alternate-currencies) to identify the alternate currency name.
      </td>
    </tr>

    <tr>
      <td>
        pointCategoryTypes
      </td>

      <td>
        Enum
      </td>

      <td>
        Points category to deduct for the user. Supported values: `REGULAR` `PROMISED` and `EXTERNAL_TRIGGER_BASED`. **Note:** Default value is `REGULAR` if the `pointCategoryTypes` is not provided. Refer to the documentation for more information on [points categories](https://docs.capillarytech.com/docs/dimension-tables#points-category).
      </td>
    </tr>

    <tr>
      <td>
        pointsToBeAdjusted*
      </td>

      <td>
        Integer
      </td>

      <td>
        Points to be deducted for the user. Provide a value greater than 0.
      </td>
    </tr>

    <tr>
      <td>
        valueToBeAdjusted*
      </td>

      <td>
        Integer
      </td>

      <td>
        Alternate currencies to be deducted for the user. Provide a value greater than 0.
      </td>
    </tr>

    <tr>
      <td>
        reasonOfReturn*
      </td>

      <td>
        String
      </td>

      <td>
        Reason for the return of points.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json Sample response
{
    "status": "success",
    "pointsAvailable": "5435.900",
    "message": "points deducted successfully for the user ",
    "warnings": []
}
```

## Deducting points

```json No identifiers
{
    "pointCategoryTypes": "REGULAR",
    "pointsToBeAdjusted": "100.00",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with pointsawardedId + pointsAwardedRefType
{
"pointsAwardedId": 38768508,
"pointsAwardedRefType": "bill_regular",
"pointCategoryTypes": "REGULAR",
"pointsToBeAdjusted": "10",
"reasonOfReturn": "Extra points were issued"
}
```
```json with promotionId
{
"promotionId": 79555,
"pointsToBeAdjusted": "10",
"pointCategoryTypes": "REGULAR",
"reasonOfReturn": "Extra points were issued"
}
```
```json with promtionIdentifier + programId
{
"promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
"programId": 973,
"pointCategoryTypes": "REGULAR",
"pointsToBeAdjusted": "10",
"reasonOfReturn": "Extra points were issued"
}
```
```json with programId
{
"programId": 973,
"pointCategoryTypes": "REGULAR",
"pointsToBeAdjusted": "10",
"reasonOfReturn": "Extra points were issued"
}
```

## Deducting alternate currencies

```json with pointsawardedId + pointsAwardedRefType
{
    "pointsAwardedId": 38768508,
    "pointsAwardedRefType": "bill_regular",
    "alternateCurrencyName": "coins",
    "pointCategoryTypes": "REGULAR",
    "valueToBeAdjusted": "10",
    "reasonOfReturn": "Extra points were issued"
}
```
```json with promotionId
{
"promotionId": 79555,
"alternateCurrencyName": "coins",
"pointCategoryTypes": "REGULAR",
"valueToBeAdjusted": "10",
"reasonOfReturn": "Extra points were issued"
}
```
```json with promtionIdentifier + programId
{
"promotionIdentifier": "b86ca53f-4c5e-46d3-8d33-b61c4f49392c",
"programId": 973,
"alternateCurrencyName": "coins",
"pointCategoryTypes": "REGULAR",
"valueToBeAdjusted": "10",
"reasonOfReturn": "Extra points were issued"
}
```
```json with programId
{
"programId": 973,
"alternateCurrencyName": "coins",
"pointCategoryTypes": "REGULAR",
"valueToBeAdjusted": "10",
"reasonOfReturn": "Extra points were issued"
}
```

# Response parameters

| Field name      | Description                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| status          | Status of the operation. Possible values: `success`: The operation was successful. `false`: The operation was unsuccessful. |
| pointsAvailable | Points available for the customer after the deduction.                                                                      |
| valueAvailable  | Alternate currencies that are available for the customer after the deduction.                                               |
| message         | Note for the point deduction operation.                                                                                     |
| warnings        | Warnings (if any).                                                                                                          |

```json Deducting points
{
    "status": "success",
    "pointsAvailable": "670.000",
    "message": "points deducted successfully for the user ",
    "warnings": []
}
```
```json Deducting alternate currencies
{
"status": "success",
"valueAvailable": "80145.500",
"message": "DocCoin deducted successfully for the user ",
"warnings": []
}
```

# API Error Codes

| Code | Description                                                                                                                       | Reason                                                                                      |
| :--- | :-------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| 8906 | decimal places passed: 3 is greater than the configured round decimals: 2 for programId: 973                                      | Decimal places are higher than the configured decimals for the program.                     |
| 8003 | Invalid source                                                                                                                    | Source is invalid or incorrect.                                                             |
| 8015 | Customer not found for the given identifiers                                                                                      | Identifier value is invalid or incorrect.                                                   |
| 8013 | Lookup,Invalid identifier passed                                                                                                  | Type of identifier is invalid or incorrect.                                                 |
| 8907 | points to be deducted 101.54 is greater than available points for program and NegativeBalanceOnReturn config is disabled for org. | Points to deduct is higher than the available points balance.                               |
| 8888 | Points to be adjusted cannot be zero                                                                                              | Points to deduct is zero.                                                                   |
| 8887 | Provide Program Id with Promotion Identifier                                                                                      | `programId` is not provided along with the `promotionIdentifier`                            |
| 8874 | promotion id passed is invalid                                                                                                    | `promotionId `provided is invalid or incorrect.                                             |
| 8877 | points awarded Id passed is invalid                                                                                               | `pointsAwardedId`provided is invalid or incorrect.                                          |
| 9975 | Points awarded ref type is invalid                                                                                                | `pointsAwardedRefType`provided is invalid or incorrect.                                     |
| 8911 | No alternate currency with name coins found for programId in org                                                                  | `alternateCurrencyName`provided is invalid or incorrect.                                    |
| 8882 | Reason for adjustment cannot be null                                                                                              | Reason for return is not provided.                                                          |
| 1218 | Customer not enrolled in loyalty program : customer not found for `programId `97                                                  | Customer is not enrolled in the loyalty program or the `programId` is invalid or incorrect. |
| 400  | Input is invalid                                                                                                                  | Ensure that the `promotion id` value is lesser than 10 digits.                              |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v2",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v2",
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
    "/customers/{userid}/negativePointsAdjustment": {
      "post": {
        "summary": "Deduct points and alternate currencies from user using userId",
        "description": "",
        "operationId": "deduct-points-and-alternatecurrencies-from-user-using-userid",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the identifier is available.",
            "schema": {
              "type": "string",
              "enum": [
                "INSTORE",
                "WEB_ENGAGE",
                "WECHAT"
              ]
            }
          },
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer (customerId).",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "pointsToBeAdjusted",
                  "reasonOfReturn"
                ],
                "properties": {
                  "pointsToBeAdjusted": {
                    "type": "integer",
                    "description": "Points to be deducted for the user. Provide a value greater than 0. This is applicable for points.",
                    "format": "int32"
                  },
                  "programId": {
                    "type": "integer",
                    "description": "Unique ID of the loyalty program to associate with the promotion.",
                    "format": "int32"
                  },
                  "reasonOfReturn": {
                    "type": "string",
                    "description": "Enter the reason for the return of the points."
                  },
                  "pointsAwardedId": {
                    "type": "integer",
                    "description": "Unique ID of the awarded points.",
                    "format": "int32"
                  },
                  "promotionId": {
                    "type": "integer",
                    "description": "Unique identifier for the promotion",
                    "format": "int32"
                  },
                  "promotionIdentifier": {
                    "type": "string",
                    "description": "Identifier for the promotion."
                  },
                  "pointsAwardedRefType": {
                    "type": "string",
                    "description": "Reference type for points awarded.",
                    "enum": [
                      "bill_regular",
                      "bill_promotions",
                      "line_item_regular",
                      "line_item_promotions",
                      "customer_promotions"
                    ]
                  },
                  "alternateCurrencyName": {
                    "type": "string",
                    "description": "Unique name of the alternate currency."
                  },
                  "pointCategoryTypes": {
                    "type": "string",
                    "description": "Points category to deduct for the user.",
                    "default": "REGULAR",
                    "enum": [
                      "REGULAR",
                      "PROMISED",
                      "EXTERNAL_TRIGGER_BASED"
                    ]
                  },
                  "valueToBeAdjusted": {
                    "type": "integer",
                    "description": "Alternate currencies to be deducted for the user. Provide a value greater than 0. This is applicable for alternate currencies.   Provide the `alternateCurrencyName` when using this parameter.",
                    "format": "int32"
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
                  "Deducting points": {
                    "value": {
                      "status": "success",
                      "pointsAvailable": "5435.900",
                      "message": "points deducted successfully for the user ",
                      "warnings": []
                    }
                  },
                  "Deducting alternate currencies": {
                    "value": "{\n    \"status\": \"success\",\n    \"valueAvailable\": \"80145.500\",\n    \"message\": \"DocCoin deducted successfully for the user \",\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Deducting points",
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "string",
                          "example": "success"
                        },
                        "pointsAvailable": {
                          "type": "string",
                          "example": "670.000"
                        },
                        "message": {
                          "type": "string",
                          "example": "points deducted successfully for the user "
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Deducting alternate currencies",
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "string",
                          "example": "success"
                        },
                        "valueAvailable": {
                          "type": "string",
                          "example": "80145.500"
                        },
                        "message": {
                          "type": "string",
                          "example": "DocCoin deducted successfully for the user "
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    }
                  ]
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565032200/negativePointsAdjustment?source=INSTORE' \\\n--header 'accept: application/json' \\\n--header 'content-type: application/json' \\\n--header 'Authorization: Basic bmFtYWN0MTY=' \\\n--header 'Cookie: _cfuvid=QZz3iRQ8IGuoQrdG_VSRXK7vCjfMgRAg4j0_sPX6KXQ-1734090839667-0.0.1.1-604800000' \\\n--data '{\n{\n   \"pointsAwardedId\": 38768508,\n   \"pointsAwardedRefType\": \"bill_regular\",\n   \"promotionId\": 7955500,\n   \"promotionIdentifier\": \"b86ca53f-4c5e-46d3-8d33-b61c4f49392c\", \n    \"programId\": 973,\n    \"alternateCurrencyName\": \"DocCoin\",\n    \"pointCategoryTypes\": \"REGULAR\",\n    \"pointsToBeAdjusted\": \"1\",\n    \"valueToBeAdjusted\": \"1\",\n    \"reasonOfReturn\": \"Testing\"\n}",
              "name": "cURL"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```