> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Pending Carts Details (Cart Promotion)

This API evaluates and returns the details of the carts which are pending  for a particular customer(cart promotions have been applied but transaction not completed yet)

This API retrieves the details of pending cart evaluations for a specific customer. These are carts where promotions have been temporarily reserved for the customer, but the transaction has not yet been completed for the promotion to be redeemed.

Cart locking functionality during cart evaluation, which temporarily reserves the applied promotion exclusively for the customer, is disabled by default. To enable it, you must raise a support ticket with capillary to activate the `isLockingEnabled` configuration for the particular org.

# Example request

```curl
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/customer/566881933/evaluations/pending_carts' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=OgMlxpnYcUTaLvDRPsarD3khviE1Jl3t9uS8-1764069327097-0.0.1.1-604800000'
```

# Prerequisites

* Authentication: Basic or OAuth authentication.

* Default access group

# Resource information

|               |    |
| :------------ | :- |
| Pagination    | No |
| Batch support | No |

# Path parameters

| Field      | Type   | Required | Description                                                                      |
| :--------- | :----- | :------- | :------------------------------------------------------------------------------- |
| customerId | String | Yes      | Unique identifier of the customer whose pending evaluations are being retrieved. |

# Example response

```json
{
    "data": {
        "tempRedemptionDetails": [
            {
                "cartEvaluationId": "69258fc119bec5537d95b07d",
                "startTime": 1764069313846,
                "validTillTime": 1764069613949,
                "appliedPromotions": [
                    {
                        "promotionId": "6914307779e37261fe5d506e",
                        "promoCode": "BB6N0G",
                        "promotionName": "code linked 3",
                        "redemptionCount": 1,
                        "discount": "12.0"
                    },
                    {
                        "promotionId": "690af07dcd583924435946f6",
                        "promotionName": "Cart Promotion (OPEN TO ALL)",
                        "redemptionCount": 1,
                        "discount": "10.0"
                    },
                    {
                        "promotionId": "6914303f79e37261fe5d506d",
                        "promotionName": "code link 2",
                        "redemptionCount": 1,
                        "discount": "12.0"
                    }
                ]
            }
        ]
    }
}
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        data
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the main container for the response data.
      </td>
    </tr>

    <tr>
      <td>
        .tempRedemptionDetails
      </td>

      <td>
        Array
      </td>

      <td>
        Indicates the list of pending redemption details for the customer's cart.
      </td>
    </tr>

    <tr>
      <td>
        ..cartEvaluationId
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the unique identifier for the specific cart evaluation session.
      </td>
    </tr>

    <tr>
      <td>
        ..startTime
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates the date and time when the evaluation or lock started.

        Time format: Epoch milliseconds.

        Note: This field returns an epoch milliseconds timestamp.
      </td>
    </tr>

    <tr>
      <td>
        ..validTillTime
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates when the pending evaluation/redemption expires.

        Time format: Epoch milliseconds.

        Note: This field returns an epoch milliseconds timestamp.
      </td>
    </tr>

    <tr>
      <td>
        ..appliedPromotions
      </td>

      <td>
        Array
      </td>

      <td>
        Indicates the list of promotions applied during this evaluation.
      </td>
    </tr>

    <tr>
      <td>
        ...promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the unique system identifier for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        ...promoCode
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the coupon code used to trigger the promotion.
      </td>
    </tr>

    <tr>
      <td>
        ...promotionName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        ...redemptionCount
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates the number of times this promotion was applied or redeemed in this evaluation.
      </td>
    </tr>

    <tr>
      <td>
        ...discount
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the calculated discount amount for this promotion.
      </td>
    </tr>
  </tbody>
</Table>

# Error codes

| Code | Description                                                                                                                         |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid request. Check required parameters. Ensure all required parameters, including a valid `customerId`, are provided and valid. |
| 404  | Customer or pending cart evaluation not found. Use a valid and existing `customerId` and evaluation data.                           |
| 707  | The passed promotion type is not supported. Change the promotion type to one supported by the system.                               |
| 116  | Maximum pending open carts exceeded. Reduce the number of open carts for this customer.                                             |
| 120  | Pending cart not found for the cart evaluation. Check if there is an active pending cart to evaluate.                               |
| 500  | Internal server error. Retry the request after a short delay, and contact support if the error persists.                            |

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
    "/v1/promotions/customer/{customerId}/evaluations/pending_carts": {
      "get": {
        "summary": "Get Lock unlock -Pending carts (Cart Promotion)",
        "description": "This API evaluates and returns the details of the carts which are pending  for a particular customer(cart promotions have been applied but transaction not completed yet)",
        "operationId": "get-lock-unlock-pending-carts",
        "parameters": [
          {
            "name": "customerid",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n\"data\": {\n\"tempRedemptionDetails\": [\n{\n \"cartEvaluationId\": \"string\",//Unique id assigned to any cart evaluated\n\"startTime\": 0,\t// evaluation call\n\"validTillTime\": 0, // How long is the pending card valid     \n\"appliedPromotions\": [\n{\n\"promotionId\": \"string\", //Unique id assigned to a promotion \n\"earnedPromotionId\": \"string\",//Unique id assigned to the earn event of the promotion\n\"promoCode\": \"string\",//Code assigned to a promotion , which can be used to redeem that promotion\n\"promotionName\": \"string\",//Name assigned to the promotion at the time of  promotion creation\n \"redemptionCount\": 0,//Number of redemptions already done for promotion\n\"discount\": \"string\"//Discount being offered for the promotion\n\n          }\n        ]\n      }\n    ]\n  },\n  \"errors\": [\n    {\n      \"code\": 0,\n      \"message\": \"string\"\n    }\n  ]\n}\n\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "tempRedemptionDetails": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "cartEvaluationId": {
                                "type": "string",
                                "example": "string"
                              },
                              "startTime": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "validTillTime": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "appliedPromotions": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "promotionId": {
                                      "type": "string",
                                      "example": "string"
                                    },
                                    "earnedPromotionId": {
                                      "type": "string",
                                      "example": "string"
                                    },
                                    "promoCode": {
                                      "type": "string",
                                      "example": "string"
                                    },
                                    "promotionName": {
                                      "type": "string",
                                      "example": "string"
                                    },
                                    "redemptionCount": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "discount": {
                                      "type": "string",
                                      "example": "string"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "errors": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "code": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "message": {
                            "type": "string",
                            "example": "string"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/customer/566881933/evaluations/pending_carts' \\\n--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \\\n--header 'Cookie: _cfuvid=OgMlxpnYcUTaLvDRPsarD3khviE1Jl3t9uS8-1764069327097-0.0.1.1-604800000'",
              "language": "shell",
              "name": ""
            }
          ],
          "samples-languages": [
            "shell"
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