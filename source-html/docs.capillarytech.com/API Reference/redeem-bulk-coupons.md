> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Redeem bulk coupons

Lets you redeem one or more coupons of a customer.

> 👍 Notes
>
> * A maximum of 50 coupons can be redeemed in a single API request.
> * The coupon redemption and crediting of the coupon to the wallet functionality are available only in the v1.1 API. The v2 API is designed to redeem coupons directly.
> * `VoucherRedemption`event is triggered only during the single coupon redemption.

> 🚧 Warning
>
> Bulk coupon redemption will fail if even one of the coupons is invalid. For example, if you submit a request with 50 coupons and just one is either invalid or not issued to the user, the entire redemption will be unsuccessful. There is no option for partial success in bulk redemptions.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/coupon/bulk/redeem' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bWFkaHMjU2YQ==' \
--header 'Cookie: _cfuvid=O1NeiUP6e9UsP1Qo1DtGPkZlkdoRXAs5h62Q4uuK9X4-1759131316915-0.0.1.1-604800000' \
--data '{
    "redemptionRequestList": [
        {
            "code": "IG950B8F"
        },
        {
            "code": "NZX4HM3T"
        }
    ],
    "redemptionTime": "2025-09-28T14:00:00+05:30",
    "transactionNumber": "txn-38",
    "user": {
        
        
       
        "externalId": "07072001"
    },
    "billAmount": "3500"
}'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                       |
| :------------ | :-------------------- |
| URI           | v2/coupon/bulk/redeem |
| HTTP method   | POST                  |
| Pagination    | NA                    |
| Batch support | NA                    |

<br />

# Request query parameter

<Table align={[null,"left",null]}>
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
        is_redeemable
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies whether the coupon is redeemable. When you set` isredeemable=true`, the API checks redeemability and returns the result in the response without performing a redemption. If the coupon is redeemable: The response will include `redemptionStatus.message = "Coupon redemption successful"`.

        **Notes:** Coupons are not redeemed when `isredeemable=true` is used. It only checks the status.
        You can also use this to check the status for multiple coupon codes at once. To add multiple codes, you can add it as an array of objects, where each object contains a code field.
      </td>
    </tr>
  </tbody>
</Table>

# Request Body parameter

| Parameter             | Description                                                                                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redemptionRequestList | List of coupons to redeem.                                                                                                                                                                                                                                |
| code\*                | Coupon code to redeem.  To redeem multiple codes you can add it as an array of objects, where each object contains a code field.                                                                                                                          |
| redemptionTime        | The date and time when the coupon is going to be redeemed in YYYY-MM-DD HH:MM:SS format. The time defined here is used for certain evaluations, but it is not stored in the system. The system considers the store's current time as the redemption time. |
| transactionNumber     | Transaction number for which the coupon(s) needs to be redeemed.                                                                                                                                                                                          |
| billAmount\*          | Transaction amount for which the coupon is redeemed.                                                                                                                                                                                                      |
| user                  | Details of the customer that redeems the coupon(s).                                                                                                                                                                                                       |
| id                    | Unique ID of the customer.                                                                                                                                                                                                                                |
| mobile\*              | Unique mobile number of the customer.                                                                                                                                                                                                                     |
| email\*               | Unique email ID of the customer.                                                                                                                                                                                                                          |
| externalId\*          | Unique external ID of the customer.                                                                                                                                                                                                                       |

\*Any one of the customer identifiers is mandatory.

# Example response

```curl Sample response
{
    "response": [
        {
            "entityId": 1349127408,
            "result": {
                "redemptionId": "18958125",
                "id": 1349127408,
                "currencyInput": false,
                "localToBaseCurrencyExchangeRate": 0,
                "warnings": [],
                "appendedErrorMessage": "",
                "code": "IG950B8F",
                "discountCode": "NO_VALUE",
                "seriesCode": 865240,
                "isAbsolute": false,
                "couponValue": 10.0,
                "redemptionStatus": {
                    "statusCode": {
                        "status": true,
                        "code": 700,
                        "message": "Coupon processing successful"
                    },
                    "warnings": [],
                    "warningsAsStatusCode": [],
                    "code": 700,
                    "success": true,
                    "message": "Coupon processing successful"
                },
                "discountType": "PERC",
                "discountValue": 10,
                "discountUpto": 100
            },
            "errors": []
        },
        {
            "entityId": 1349127292,
            "result": {
                "redemptionId": "18958124",
                "id": 1349127292,
                "currencyInput": false,
                "localToBaseCurrencyExchangeRate": 0,
                "warnings": [],
                "appendedErrorMessage": "",
                "code": "NZX4HM3T",
                "discountCode": "NO_VALUE",
                "seriesCode": 865240,
                "isAbsolute": false,
                "couponValue": 10.0,
                "redemptionStatus": {
                    "statusCode": {
                        "status": true,
                        "code": 700,
                        "message": "Coupon processing successful"
                    },
                    "warnings": [],
                    "warningsAsStatusCode": [],
                    "code": 700,
                    "success": true,
                    "message": "Coupon processing successful"
                },
                "discountType": "PERC",
                "discountValue": 10,
                "discountUpto": 100
            },
            "errors": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

<br />

# Response body parameter

| Parameter                              | Description                                           |
| -------------------------------------- | ----------------------------------------------------- |
| entityId                               | Unique identifier for the entity.                     |
| result.id                              | Unique ID of the result.                              |
| result.currencyInput                   | Indicates if currency input is present.               |
| result.localToBaseCurrencyExchangeRate | Exchange rate from local currency to base currency.   |
| result.code                            | Code associated with the result.                      |
| result.discountCode                    | Code indicating the type of discount.                 |
| result.seriesCode                      | Code associated with the series.                      |
| result.isAbsolute                      | Indicates if the value is absolute.                   |
| result.couponValue                     | Value of the coupon.                                  |
| result.redemptionStatus.statusCode     | Status code object containing status details.         |
| result.redemptionStatus.message        | Message indicating the status of coupon processing.   |
| result.redemptionStatus.code           | Code indicating the status of coupon processing.      |
| result.redemptionStatus.success        | Indicates if the coupon processing was successful.    |
| result.discountType                    | Type of discount provided.                            |
| result.discountValue                   | Value of the discount provided.                       |
| result.discountUpto                    | Maximum value up to which the discount is applicable. |
| totalCount                             | Total count of items in the response.                 |
| failureCount                           | Count of items that failed.                           |

```Text Response
{
    "response": [
        {
            "entityId": 1306648998,
            "result": {
                "redemptionId": "-1",
                "id": 1306648998,
                "currencyInput": false,
                "localToBaseCurrencyExchangeRate": 0,
                "warnings": [],
                "appendedErrorMessage": "",
                "code": "3ELN50QRLCKGW5S6",
                "discountCode": "123123123",
                "seriesCode": 794088,
                "isAbsolute": false,
                "couponValue": 12,
                "redemptionStatus": {
                    "statusCode": {
                        "status": true,
                        "code": 700,
                        "message": "Coupon isRedeem successful"
                    },
                    "warnings": [],
                    "warningsAsStatusCode": [],
                    "code": 700,
                    "success": true,
                    "message": "Coupon isRedeem successful"
                },
                "discountType": "PERC",
                "discountValue": 12,
                "discountUpto": 12
            },
            "errors": []
        },
        {
            "entityId": 1306648999,
            "result": {
                "redemptionId": "-1",
                "id": 1306648999,
                "currencyInput": false,
                "localToBaseCurrencyExchangeRate": 0,
                "warnings": [],
                "appendedErrorMessage": "",
                "code": "WWTX7NIPSDC34DFX",
                "discountCode": "123123123123",
                "seriesCode": 801319,
                "isAbsolute": true,
                "couponValue": 122,
                "redemptionStatus": {
                    "statusCode": {
                        "status": true,
                        "code": 700,
                        "message": "Coupon isRedeem successful"
                    },
                    "warnings": [],
                    "warningsAsStatusCode": [],
                    "code": 700,
                    "success": true,
                    "message": "Coupon isRedeem successful"
                },
                "discountType": "ABS",
                "discountValue": 122,
                "discountUpto": 0
            },
            "errors": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

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
    "/coupon/bulk/redeem": {
      "post": {
        "summary": "Redeem bulk coupons",
        "description": "Lets you redeem one or more coupons of a customer.",
        "operationId": "redeem-bulk-coupons",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "redemptionRequestList",
                  "billAmount"
                ],
                "properties": {
                  "redemptionRequestList": {
                    "type": "array",
                    "description": "List of coupons to redeem."
                  },
                  "code": {
                    "type": "string",
                    "description": "Coupon code to redeem."
                  },
                  "redemptionTime": {
                    "type": "string",
                    "description": "Date and time of redemption in YYYY-MM-DD HH:MM:SS format. The time defined here is used for certain evaluations, but it is not stored in the system. The system considers the store's current time as the redemption time.",
                    "format": "date"
                  },
                  "transactionNumber": {
                    "type": "string",
                    "description": "Transaction number for which the coupon(s) needs to be redeemed."
                  },
                  "billAmount": {
                    "type": "number",
                    "description": "Transaction amount for which the coupon is redeemed.",
                    "format": "double"
                  },
                  "user": {
                    "properties": {
                      "id**": {
                        "type": "integer",
                        "description": "Unique ID of the customer.",
                        "format": "int64"
                      },
                      "mobile**": {
                        "type": "string",
                        "description": "Mobile number of the customer."
                      },
                      "email**": {
                        "type": "string",
                        "description": "Email ID of the customer."
                      },
                      "externalId**": {
                        "type": "string",
                        "description": "External ID of the customer."
                      },
                      "cardnumber": {
                        "type": "string",
                        "description": "Card number of the customer."
                      },
                      "cardExternalId": {
                        "type": "string",
                        "description": "Card external ID of the customer."
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Details of the customer that redeems the coupon(s)."
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
                  "Sample Response": {
                    "value": {
                      "response": [
                        {
                          "entityId": 1349127408,
                          "result": {
                            "redemptionId": "18958125",
                            "id": 1349127408,
                            "currencyInput": false,
                            "localToBaseCurrencyExchangeRate": 0,
                            "warnings": [],
                            "appendedErrorMessage": "",
                            "code": "IG950B8F",
                            "discountCode": "NO_VALUE",
                            "seriesCode": 865240,
                            "isAbsolute": false,
                            "couponValue": 10,
                            "redemptionStatus": {
                              "statusCode": {
                                "status": true,
                                "code": 700,
                                "message": "Coupon processing successful"
                              },
                              "warnings": [],
                              "warningsAsStatusCode": [],
                              "code": 700,
                              "success": true,
                              "message": "Coupon processing successful"
                            },
                            "discountType": "PERC",
                            "discountValue": 10,
                            "discountUpto": 100
                          },
                          "errors": []
                        },
                        {
                          "entityId": 1349127292,
                          "result": {
                            "redemptionId": "18958124",
                            "id": 1349127292,
                            "currencyInput": false,
                            "localToBaseCurrencyExchangeRate": 0,
                            "warnings": [],
                            "appendedErrorMessage": "",
                            "code": "NZX4HM3T",
                            "discountCode": "NO_VALUE",
                            "seriesCode": 865240,
                            "isAbsolute": false,
                            "couponValue": 10,
                            "redemptionStatus": {
                              "statusCode": {
                                "status": true,
                                "code": 700,
                                "message": "Coupon processing successful"
                              },
                              "warnings": [],
                              "warningsAsStatusCode": [],
                              "code": 700,
                              "success": true,
                              "message": "Coupon processing successful"
                            },
                            "discountType": "PERC",
                            "discountValue": 10,
                            "discountUpto": 100
                          },
                          "errors": []
                        }
                      ],
                      "totalCount": 2,
                      "failureCount": 0
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "entityId": {
                            "type": "integer",
                            "example": 369454015,
                            "default": 0
                          },
                          "result": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 369454015,
                                "default": 0
                              },
                              "currencyInput": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "localToBaseCurrencyExchangeRate": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "warnings": {
                                "type": "array"
                              },
                              "appendedErrorMessage": {
                                "type": "string",
                                "example": ""
                              },
                              "code": {
                                "type": "string",
                                "example": "U6ER8MJ5"
                              },
                              "discountCode": {
                                "type": "string",
                                "example": "NO_VALUE"
                              },
                              "seriesCode": {
                                "type": "integer",
                                "example": 84093,
                                "default": 0
                              },
                              "isAbsolute": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "couponValue": {
                                "type": "integer",
                                "example": 100,
                                "default": 0
                              },
                              "redemptionStatus": {
                                "type": "object",
                                "properties": {
                                  "statusCode": {
                                    "type": "object",
                                    "properties": {
                                      "status": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "message": {
                                        "type": "string",
                                        "example": "Coupon processing successful"
                                      },
                                      "code": {
                                        "type": "integer",
                                        "example": 700,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "warnings": {
                                    "type": "array"
                                  },
                                  "warningsAsStatusCode": {
                                    "type": "array"
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Coupon processing successful"
                                  },
                                  "code": {
                                    "type": "integer",
                                    "example": 700,
                                    "default": 0
                                  },
                                  "success": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  }
                                }
                              },
                              "discountType": {
                                "type": "string",
                                "example": "ABS"
                              },
                              "discountValue": {
                                "type": "integer",
                                "example": 100,
                                "default": 0
                              },
                              "discountUpto": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              }
                            }
                          },
                          "errors": {
                            "type": "array"
                          }
                        }
                      }
                    },
                    "totalCount": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "failureCount": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
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
                    "value": "{\n  \"status\": false,\n  \"code\": 701,\n  \"message\": \"The customer could not be found. Please check mobile, email, external id passed\"\n}"
                  },
                  "Error - More than 100 coupon redeemed": {
                    "value": "response:  {\n  \"response\": [\n    {\n      \"result\": {\n        \"currencyInput\": false,\n        \"localToBaseCurrencyExchangeRate\": 0,\n        \"warnings\": [],\n        \"appendedErrorMessage\": \"\",\n        \"isAbsolute\": false,\n        \"redemptionStatus\": {\n          \"statusCode\": {\n            \"status\": false,\n            \"code\": 629,\n            \"message\": \"Invalid Input\"\n          },\n          \"warnings\": [],\n          \"warningsAsStatusCode\": [],\n          \"code\": 629,\n          \"success\": false,\n          \"message\": \"Invalid Input\"\n        }\n      },\n      \"errors\": [\n        {\n          \"status\": false,\n          \"code\": 629,\n          \"message\": \"Invalid Input\"\n        }\n      ]\n    }\n  ],\n  \"totalCount\": 1,\n  \"failureCount\": 1"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "code": {
                      "type": "integer",
                      "example": 701,
                      "default": 0
                    },
                    "message": {
                      "type": "string",
                      "example": "The customer could not be found. Please check mobile, email, external id passed"
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "{\n    \"redemptionRequestList\": [\n    \n\n    ],\n    \"redemptionTime\": \"2021-05-12 19:18:30\",\n    \"transactionNumber\": \"numbr9435064964\",\n    \"user\": {\n        \"id\": 126080386\n    },\n    \"billAmount\": \"2000\"\n}",
              "name": "Sample POST Body"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon/bulk/redeem' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFkaHVfI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=O1NeiUP6e9UsP1Qo1DtGPkZlkdoRXAs5h62Q4uuK9X4-1759131316915-0.0.1.1-604800000' \\\n--data '{\n    \"redemptionRequestList\": [\n        {\n            \"code\": \"IG950B8F\"\n        },\n        {\n            \"code\": \"NZX4HM3T\"\n        }\n    ],\n    \"redemptionTime\": \"2025-09-28T14:00:00+05:30\",\n    \"transactionNumber\": \"txn-38\",\n    \"user\": {\n        \n        \n       \n        \"externalId\": \"07072001\"\n    },\n    \"billAmount\": \"3500\"\n}'",
              "language": "shell",
              "name": "Sample request"
            }
          ],
          "samples-languages": [
            "curl",
            "shell"
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