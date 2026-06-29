> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Issue bulk coupons

This API allows you to issue a batch of coupon series to a customer, enabling the customer to redeem the coupons.

```curl
curl --location 'https://eu.api.capillarytech.com/v2/coupon/bulk/issue' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic WY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=iUU642uBGHYKi7aKv0EaF6GgKEIXn1f._QJI-1768893329218-0.0.1.1-604800000' \
--data '{
"seriesIds" :[544770,553379],

"customer":

  {
   "id":"566881933"
  },
  "metadata": {
        "sourceType": "Journeys",
        "sourceId": "journey-block-001",
        "sourceActivity": "Tier upgrade",
        "notes": "Issued as part of loyalty tier upgrade batch",
        "reason": "Tier upgrade benefit"
    }
}'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                       |
| :------------ | :-------------------- |
| URI           | /v2/coupon/bulk/issue |
| HTTP method   | POST                  |
| Pagination    | NA                    |
| Batch support | Yes                   |

# API endpoint example

`https://eu.api.capillarytech.com/v2/coupon/bulk/issue`

# Request body parameters

| Field            | Type              | Required | Description                                                                                                                                                                                                                           |
| :--------------- | :---------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| seriesIds\*      | Array of Integers | Yes      | List of coupon series IDs                                                                                                                                                                                                             |
| customer\*       | Object            | Yes      | The object containing the details of the customer                                                                                                                                                                                     |
| customer.id      | String            | Optional | Unique identifier of the customer                                                                                                                                                                                                     |
| metadata         | Object            | Optional | Defines the tracking and auditing information for the bulk coupon issuance.                                                                                                                                                           |
| ..sourceType     | String            | Optional | Specifies the category of the source initiating the issuance (e.g., POS, Web, App, ServiceDesk). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 50.                                       |
| ..sourceId       | String            | Optional | Indicates the unique reference ID of the triggering entity (e.g., transaction flow ID, rule ID). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 50.                                       |
| ..sourceActivity | String            | Optional | Indicates the specific event that caused the coupon to be issued (e.g., Birthday trigger, Manual goodwill, Post-purchase bounce-back). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 50. |
| ..notes          | String            | Optional | Specifies additional comments about this bulk issuance (e.g., approved by store manager). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 250.                                             |
| ..reason         | String            | Optional | Specifies the business justification for issuing the coupon (e.g., goodwill, campaign reward). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 250.                                        |

# Response parameters

| Parameter           | type             | Description                                                                                                                                                                                                                                                                                                                                                               |
| :------------------ | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| response            | Array of Objects | List of responses for entities.                                                                                                                                                                                                                                                                                                                                           |
| .entityId           | Integer          | Unique Identifier of the entity.                                                                                                                                                                                                                                                                                                                                          |
| .result             | Object           | The object containing the result of the entity.                                                                                                                                                                                                                                                                                                                           |
| ..code              | String           | Unique code of the coupon.                                                                                                                                                                                                                                                                                                                                                |
| ..seriesId          | Integer          | Unique Identifier of the coupon.                                                                                                                                                                                                                                                                                                                                          |
| ..description       | String           | The description of the coupon.                                                                                                                                                                                                                                                                                                                                            |
| ..discountCode      | String           | This code is defined during the creation of a coupon series and is used as a POS identifier on member care. This will be used by the cashier at the Point of Sale machine.                                                                                                                                                                                                |
| ..validTill         | String           | Expiry date and time of the coupon in ISO 8601 format, returned in the server time zone. EU server example: `2026-06-11T00:00:00Z` → 11 June 2026, 00:00:00 (UTC). India server example: `2026-06-11T05:30:00+05:30` → 11 June 2026, 05:30:00 (IST). Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request. |
| ..validTillDateTime | String           | Specifies the exact expiry date and time of a coupon in ISO 8601 format (e.g., "2026-06-11T23:59:59Z"), indicating the precise moment until which the coupon can be redeemed.                                                                                                                                                                                             |
| ..discountType      | String           | Specifies the type of discount provided by the coupon. Supported values: ABS (a fixed amount is discounted), PERC (a percentage of the total amount is discounted).                                                                                                                                                                                                       |
| ..discountValue     | Integer          | The value of the discount.                                                                                                                                                                                                                                                                                                                                                |
| ..discountUpto      | Integer          | The maximum value up to which the discount can be applied.                                                                                                                                                                                                                                                                                                                |
| ..discountOn        | String           | The aspect on which the discount is applied. Supported values: BILL.                                                                                                                                                                                                                                                                                                      |
| ..detailedInfo      | String           | Detailed information about the coupon.                                                                                                                                                                                                                                                                                                                                    |
| ..redemptionCount   | Integer          | Number of times the coupon has been redeemed.                                                                                                                                                                                                                                                                                                                             |
| ..id                | Integer          | ID of the result.                                                                                                                                                                                                                                                                                                                                                         |
| .errors             | Array            | The array of errors in the response.                                                                                                                                                                                                                                                                                                                                      |
| .warnings           | Array            | The array of warning messages in the response.                                                                                                                                                                                                                                                                                                                            |
| totalCount          | Integer          | Total count of entities processed.                                                                                                                                                                                                                                                                                                                                        |
| failureCount        | Integer          | Count of entities that failed to process.                                                                                                                                                                                                                                                                                                                                 |

# Example response

```json Sample response body
{
    "response": [
        {
            "entityId": 951540,
            "result": {
                "code": "875410568",
                "seriesId": 951540,
                "description": "doc_coupon01",
                "discountCode": "XYZ12345",
                "validTill": "2026-06-11T00:00:00Z",
                "discountType": "ABS",
                "discountValue": 500.0,
                "discountUpto": 0.0,
                "discountOn": "BILL",
                "detailedInfo": "doc_coupon01",
                "redemptionCount": 0,
                "id": 0,
                "validTillDateTime": "2026-06-11T23:59:59Z"
            },
            "errors": [],
            "warnings": []
        },
        {
            "entityId": 951539,
            "result": {
                "code": "923356739",
                "seriesId": 951539,
                "description": "Gold star coupons",
                "discountCode": "gold1234",
                "validTill": "2026-06-11T00:00:00Z",
                "discountType": "ABS",
                "discountValue": 1000.0,
                "discountUpto": 0.0,
                "discountOn": "BILL",
                "detailedInfo": "Gold star coupons",
                "redemptionCount": 0,
                "id": 0,
                "validTillDateTime": "2026-06-11T23:59:59Z"
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 2,
    "failureCount": 0
}
```

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
    "/coupon/bulk/issue": {
      "post": {
        "summary": "Issue bulk coupons",
        "description": "",
        "operationId": "issue-bulk-coupons",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Registered source of the customer.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "FACEBOOK",
                "WEB_ENGAGE",
                "WECHAT",
                "INSTORE",
                "MARTJACK",
                "TMALL",
                "TAOBAO",
                "JD",
                "ECOMMERCE",
                "WEBSITE",
                "LINE",
                "MOBILE_APP"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "Account ID for sources with multiple accounts. Required for multi-source accounts.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "seriesIds"
                ],
                "properties": {
                  "seriesIds": {
                    "type": "array",
                    "description": "Coupon series IDs (offerIds) from which you want to issue coupons.",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "customer": {
                    "properties": {
                      "id": {
                        "type": "integer",
                        "description": "Unique ID of the customer.",
                        "format": "int64"
                      },
                      "mobile": {
                        "type": "string",
                        "description": "Unique mobile number of the customer."
                      },
                      "email": {
                        "type": "string",
                        "description": "Registered email ID of the customer."
                      },
                      "externalId": {
                        "type": "string",
                        "description": "Unique external ID of the customer."
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Details of customer to whom the coupons need to send."
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
                          "entityId": 544770,
                          "result": {
                            "code": "TPLPYOEYOT",
                            "seriesId": 544770,
                            "description": "Festival coupon",
                            "discountCode": "erg123",
                            "validTill": "2026-06-11T00:00:00Z",
                            "discountType": "ABS",
                            "discountValue": 500,
                            "discountUpto": 0,
                            "discountOn": "BILL",
                            "detailedInfo": "Evil coupon",
                            "redemptionCount": 0,
                            "id": 0,
                            "validTillDateTime": "2026-06-11T23:59:59Z"
                          },
                          "errors": [],
                          "warnings": []
                        },
                        {
                          "entityId": 553379,
                          "result": {
                            "code": "9WJIGHOBRL",
                            "seriesId": 553379,
                            "description": "DIWALI 100% OFF",
                            "discountCode": "XYZ123",
                            "validTill": "2029-05-09T00:00:00Z",
                            "discountType": "ABS",
                            "discountValue": 500,
                            "discountUpto": 0,
                            "discountOn": "BILL",
                            "detailedInfo": "Evil coupon",
                            "redemptionCount": 0,
                            "id": 0
                          },
                          "errors": [],
                          "warnings": []
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
                            "example": 544770,
                            "default": 0
                          },
                          "result": {
                            "type": "object",
                            "properties": {
                              "code": {
                                "type": "string",
                                "example": "TPLPYOEYOT"
                              },
                              "seriesId": {
                                "type": "integer",
                                "example": 544770,
                                "default": 0
                              },
                              "description": {
                                "type": "string",
                                "example": "Festival coupon"
                              },
                              "discountCode": {
                                "type": "string",
                                "example": "erg123"
                              },
                              "validTill": {
                                "type": "string",
                                "example": "2026-05-09T00:00:00Z"
                              },
                              "discountType": {
                                "type": "string",
                                "example": "ABS"
                              },
                              "discountValue": {
                                "type": "integer",
                                "example": 500,
                                "default": 0
                              },
                              "discountUpto": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "discountOn": {
                                "type": "string",
                                "example": "BILL"
                              },
                              "detailedInfo": {
                                "type": "string",
                                "example": "Evil coupon"
                              },
                              "redemptionCount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "id": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              }
                            }
                          },
                          "errors": {
                            "type": "array"
                          },
                          "warnings": {
                            "type": "array"
                          }
                        }
                      }
                    },
                    "totalCount": {
                      "type": "integer",
                      "example": 2,
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon/bulk/issue' \\\n--data '{\n\"seriesIds\" :[544770,553379],\n\n\"customer\":\n\n  { \n   \"id\":\"555567088\"\n  }\n}'",
              "name": "Sample POST Body"
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