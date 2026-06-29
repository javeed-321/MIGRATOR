> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Redeem single coupon

This API allows you to redeem active coupons of a loyalty customer. You can pass multiple coupons at once.

> 🚧 Notes
>
> * This API does not trigger any loyalty events and is designed to redeem coupons directly. If the use case involves issuing points or coupons to the user as part of a loyalty promotion during the redemption of a coupon, it is recommended to use the `v1.1/coupon/redeem `API.
> * The coupon redemption and crediting of the coupon to the wallet functionality are available only in the v1.1 API. The v2 API is designed to redeem coupons directly.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/coupon/redeem' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic bWF2YQ==' \
--header 'Cookie: _cfuvid=O1NeiUP6e9UsP1Qo1DtGPkZlkdoRXAs5h62Q4uuK9X4-1759131316915-0.0.1.1-604800000' \
--data '
{
  "redemptionRequestList": [
    {
      "code": "MLFRH9Z7"
    }
  ],
  "user": {
   
   
    "externalId": "696969"
  },
  "transactionNumber": "txn-32",
  "billAmount": "3500",
  "redemptionTime": "2025-09-28T14:00:00+05:30"
}
'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                   |
| :------------ | :---------------- |
| URI           | /v2/coupon/redeem |
| HTTP method   | POST              |
| Pagination    | NA                |
| Batch support | NA                |

<br />

# Body parameter

| Parameter                    | Description                                                                                                                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| billAmount\*                 | The total amount of the bill.                                                                                                                                                                                                                             |
| transactionNumber            | The unique number associated with the transaction.                                                                                                                                                                                                        |
| user\*                       | Details of the customer.                                                                                                                                                                                                                                  |
| user.mobile/email/externalId | Identifier details of the customer. The mobile number can be with or without the country code.                                                                                                                                                            |
| redemptionTime               | The date and time when the coupon is going to be redeemed in YYYY-MM-DD HH:MM:SS format. The time defined here is used for certain evaluations, but it is not stored in the system. The system considers the store's current time as the redemption time. |
| redemptionRequestList        | List containing coupon details for redemption.                                                                                                                                                                                                            |
| code\*                       | Coupon code to be redeemed.                                                                                                                                                                                                                               |

# Example response

```curl Sample response
{
    "redemption": [
        {
            "redemptionId": "18958008",
            "id": 1349127196,
            "currencyInput": false,
            "localToBaseCurrencyExchangeRate": 0,
            "warnings": [],
            "appendedErrorMessage": "",
            "code": "MLFRH9Z7",
            "discountCode": "NO_VALUE",
            "seriesCode": 865240,
            "isAbsolute": false,
            "couponValue": 10.0,
            "redemptionStatus": {
                "statusCode": {
                    "status": true,
                    "message": "Coupon processing successful",
                    "code": 700
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "message": "Coupon processing successful",
                "code": 700,
                "success": true
            },
            "discountType": "PERC",
            "discountValue": 10,
            "discountUpto": 100
        }
    ],
    "redemptionStatus": {
        "status": true,
        "message": "Coupon processing successful",
        "code": 700
    },
    "customer": {
        "id": 566135941,
        "profiles": [
            {
                "firstName": "John",
                "lastName": "Pork",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "email",
                        "value": "tomswayer@capillarytech.com"
                    },
                    {
                        "type": "externalId",
                        "value": "696969"
                    },
                    {
                        "type": "mobile",
                        "value": "91556667722"
                    }
                ],
                "commChannels": [],
                "userId": 566135941,
                "accountId": "",
                "autoUpdateTime": "2025-09-29T09:06:34Z",
                "identifiersAll": [
                    {
                        "type": "email",
                        "value": "tomswayer@capillarytech.com"
                    },
                    {
                        "type": "externalId",
                        "value": "696969"
                    },
                    {
                        "type": "mobile",
                        "value": "91556667722"
                    }
                ]
            }
        ]
    },
    "warnings": []
}
```

# Response parameters

| Field                                 | Description                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------- |
| redemption                            | A list containing details of each redemption instance.                          |
| id                                    | A unique identifier for the redemption instance.                                |
| currencyInput                         | Indicates whether currency input is required for the redemption.                |
| localToBaseCurrencyExchangeRate       | The exchange rate used to convert from the local currency to the base currency. |
| warnings                              | A list of warnings encountered during the redemption process.                   |
| appendedErrorMessage                  | Contains any error message appended during the redemption process.              |
| code                                  | The coupon code used for redemption.                                            |
| discountCode                          | The discount code associated with the coupon.                                   |
| seriesCode                            | The series code of the coupon.                                                  |
| isAbsolute                            | Indicates whether the discount value is absolute.                               |
| couponValue                           | The value of the coupon.                                                        |
| redemptionStatus                      | Indicates the status of the redemption process.                                 |
| redemptionStatus.statusCode           | Contains the status code details of the redemption process.                     |
| statusCode.status                     | Indicates whether the coupon processing was successful.                         |
| statusCode.message                    | A message describing the status of the coupon processing.                       |
| statusCode.code                       | The status code representing the result of the coupon processing.               |
| redemptionStatus.warnings             | Warnings related to the redemption process.                                     |
| redemptionStatus.warningsAsStatusCode | Warnings formatted as status codes.                                             |
| redemptionStatus.message              | A message providing additional information about the redemption status.         |
| redemptionStatus.code                 | The status code for the redemption process.                                     |
| redemptionStatus.success              | Indicates whether the redemption was successful.                                |
| discountType                          | The type of discount applied (e.g., "ABS" for absolute value).                  |
| discountValue                         | The value of the discount applied.                                              |
| discountUpto                          | The maximum value of the discount if applicable.                                |
| redemptionStatus                      | Represents the overall status of the redemption.                                |
| redemptionStatus.status               | Indicates the overall success status of the coupon processing.                  |
| redemptionStatus.message              | A message describing the overall status of the coupon processing.               |
| redemptionStatus.code                 | The status code representing the overall result of the coupon processing.       |
| customer                              | An object containing details about the customer.                                |
| customer.id                           | A unique identifier for the customer.                                           |
| customer.profiles                     | An array of profile objects associated with the customer.                       |
| firstName                             | The first name of the customer.                                                 |
| lastName                              | The last name of the customer.                                                  |
| fields                                | Contains additional fields related to the customer's profile.                   |
| identifiers                           | Identifier for the customer.                                                    |
| identifiers.type                      | The type of identifier (e.g., "mobile", "email").                               |
| identifiers.value                     | The value of the identifier (e.g., the actual mobile number or email address).  |
| customer.profiles.identifiers.type    | The type of the second identifier.                                              |
| customer.profiles.identifiers.value   | The value of the second identifier.                                             |
| customer.profiles.commChannels        | Communication channels preferred by the customer.                               |
| customer.profiles.userId              | A unique identifier for the user's profile.                                     |
| customer.profiles.accountId           | The account ID associated with the customer's profile.                          |
| customer.profiles.autoUpdateTime      | The timestamp indicating the last automatic update time for the profile.        |
| customer.profiles.identifiersAll      | Contains all identifiers associated with the customer.                          |
| identifiersAll.type                   | The type of the first identifier in the all identifiers.                        |
| identifiersAll.value                  | The value of the first identifier in the all identifiers.                       |
| identifiersAll.type                   | The type of the second identifier in the all identifiers.                       |
| identifiersAll.value                  | The value of the second identifier in the all identifiers.                      |
| warnings                              | Warnings encountered during the process.                                        |

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
    "/coupon/redeem": {
      "post": {
        "summary": "Redeem single coupon",
        "description": "This API allows you to redeem active coupons of a loyalty customer. You can pass multiple coupons at once.",
        "operationId": "redeem-single-coupon",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "billAmount",
                  "transactionNumber",
                  "code"
                ],
                "properties": {
                  "redemptionRequestList": {
                    "properties": {
                      "code": {
                        "type": "string",
                        "description": "Coupon code to be redeemed."
                      }
                    },
                    "required": [
                      "code"
                    ],
                    "type": "object",
                    "description": "Details of the coupon code to redeem."
                  },
                  "billAmount": {
                    "type": "number",
                    "description": "Transaction amount of the bill.",
                    "format": "float"
                  },
                  "transactionNumber": {
                    "type": "string",
                    "description": "Transaction number against which the coupon needs to be redeemed."
                  },
                  "code": {
                    "type": "string",
                    "description": "Coupon code to redeem."
                  },
                  "user": {
                    "properties": {
                      "mobile": {
                        "type": "string",
                        "description": "Mobile number of the customer."
                      },
                      "email": {
                        "type": "string",
                        "description": "Email ID of the customer."
                      },
                      "cardnumber": {
                        "type": "string",
                        "description": "Card number of the customer."
                      },
                      "externalId": {
                        "type": "string",
                        "description": "External ID of the customer"
                      },
                      "cardExternalId": {
                        "type": "string",
                        "description": "External ID of the card."
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Any identifier of the customer  who wants to redeem coupons. Values: mobile, email, externalId"
                  },
                  "redemptionTime": {
                    "type": "string",
                    "description": "Date and time of redemption in YYYY-MM-DD HH:MM:SS format. The time defined here is used for certain evaluations, but it is not stored in the system. The system considers the store's current time as the redemption time.",
                    "format": "date"
                  }
                }
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "redemptionRequestList": [
                      {
                        "code": "2609909641"
                      }
                    ],
                    "user": {
                      "externalId": "000003873472"
                    },
                    "transactionNumber": "",
                    "billAmount": "0",
                    "redemptionTime": "2024-11-11T05:11:13-05:00"
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
                      "redemption": [
                        {
                          "redemptionId": "18958008",
                          "id": 1349127196,
                          "currencyInput": false,
                          "localToBaseCurrencyExchangeRate": 0,
                          "warnings": [],
                          "appendedErrorMessage": "",
                          "code": "MLFRH9Z7",
                          "discountCode": "NO_VALUE",
                          "seriesCode": 865240,
                          "isAbsolute": false,
                          "couponValue": 10,
                          "redemptionStatus": {
                            "statusCode": {
                              "status": true,
                              "message": "Coupon processing successful",
                              "code": 700
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Coupon processing successful",
                            "code": 700,
                            "success": true
                          },
                          "discountType": "PERC",
                          "discountValue": 10,
                          "discountUpto": 100
                        }
                      ],
                      "redemptionStatus": {
                        "status": true,
                        "message": "Coupon processing successful",
                        "code": 700
                      },
                      "customer": {
                        "id": 566135941,
                        "profiles": [
                          {
                            "firstName": "John",
                            "lastName": "Pork",
                            "fields": {},
                            "allFields": {},
                            "identifiers": [
                              {
                                "type": "email",
                                "value": "tomswayer@capillarytech.com"
                              },
                              {
                                "type": "externalId",
                                "value": "696969"
                              },
                              {
                                "type": "mobile",
                                "value": "91556667722"
                              }
                            ],
                            "commChannels": [],
                            "userId": 566135941,
                            "accountId": "",
                            "autoUpdateTime": "2025-09-29T09:06:34Z",
                            "identifiersAll": [
                              {
                                "type": "email",
                                "value": "tomswayer@capillarytech.com"
                              },
                              {
                                "type": "externalId",
                                "value": "696969"
                              },
                              {
                                "type": "mobile",
                                "value": "91556667722"
                              }
                            ]
                          }
                        ]
                      },
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "redemption": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 369455787,
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
                            "example": "MGU9Y4PM"
                          },
                          "discountCode": {
                            "type": "string",
                            "example": "NO_VALUE"
                          },
                          "seriesCode": {
                            "type": "integer",
                            "example": 12313,
                            "default": 0
                          },
                          "isAbsolute": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "couponValue": {
                            "type": "integer",
                            "example": 10,
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
                            "example": 10,
                            "default": 0
                          },
                          "discountUpto": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          }
                        }
                      }
                    },
                    "redemptionStatus": {
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
                    "customer": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 126080386,
                          "default": 0
                        },
                        "profiles": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "firstName": {
                                "type": "string",
                                "example": "test"
                              },
                              "lastName": {
                                "type": "string",
                                "example": "test"
                              },
                              "fields": {
                                "type": "object",
                                "properties": {}
                              },
                              "identifiers": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "mobile"
                                    },
                                    "value": {
                                      "type": "string",
                                      "example": "917500000000"
                                    }
                                  }
                                }
                              },
                              "commChannels": {
                                "type": "array"
                              },
                              "userId": {
                                "type": "integer",
                                "example": 126080386,
                                "default": 0
                              },
                              "accountId": {
                                "type": "string",
                                "example": ""
                              },
                              "autoUpdateTime": {
                                "type": "string",
                                "example": "2021-05-12T15:18:01Z"
                              },
                              "identifiersAll": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": "mobile"
                                    },
                                    "value": {
                                      "type": "string",
                                      "example": "917500000000"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
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
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon/redeem' \\\n--header 'accept: application/json' \\\n--header 'content-type: application/json' \\\n--header 'Authorization: Basic bWFkU2YQ==' \\\n--header 'Cookie: _cfuvid=O1NeiUP6e9UsP1Qo1DtGPkZlkdoRXAs5h62Q4uuK9X4-1759131316915-0.0.1.1-604800000' \\\n--data '\n{\n  \"redemptionRequestList\": [\n    {\n      \"code\": \"MLFRH9Z7\"\n    }\n  ],\n  \"user\": {\n   \n   \n    \"externalId\": \"696969\"\n  },\n  \"transactionNumber\": \"txn-32\",\n  \"billAmount\": \"3500\",\n  \"redemptionTime\": \"2025-09-28T14:00:00+05:30\"\n}\n'",
              "language": "shell",
              "name": "Sample request"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```