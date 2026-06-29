> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Redeem Points

This API enables you to redeem points of a customer.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

> 📘 Note
>
> For the v2 equivalent of this API, see [Redeem customer points](https://docs.capillarytech.com/reference/redeem-customer-points) (`POST /v2/customers/{id}/redemptions`).

# Example request

```curl Sample request
curl -L 'https://eu.api.capillarytech.com/v1.1/points/redeem?skip_validation=false&program_id=973&format=json' \
-H 'Content-Type: application/json' \
-H 'Authorization: Basic 5ZmM2YjZlY2I2MmEy' \
-d '{
    "root": {
        "redeem": [
            {
                "points_redeemed": 1,
                "customer": {
                    "mobile": "919988776655"
                },
               "external_reference_number":"a3fd1a63-1aa3-4c47-9173-398",
               "transaction_number": "bilnum100000", 
                "notes": "Redeemed to transfer points to the friend",
               
                "custom_fields": {
                    "field": [
                        {
                            "name": "point_transfered_to",
                            "value": "9777788221"
                        }
                    ]
                }
            }
        ]
    }
}'
```

# Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

> 📘 Notes
>
> If you are using validation code, make sure to use it within the validity period.
>
> * You can check the validity set for the validation code in OTP code validity period field on **InTouch** > **Settings** > **Organization Setup** > **OTPConfigurations page**.

# Body parameters

| Parameter                    | Data Type | Description                                                                                                                                                                                                                                                                                                      |
| ---------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redeem                       | Array     | An array containing objects representing individual redemption transactions                                                                                                                                                                                                                                      |
| .points\_redeemed            | Integer   | The number of points that were redeemed in the transaction                                                                                                                                                                                                                                                       |
| ..customer                   | Object    | An object containing information about the customer involved in the transaction                                                                                                                                                                                                                                  |
| ...mobile\*                  | String    | The mobile phone number of the customer                                                                                                                                                                                                                                                                          |
| .transaction\_number         | String    | Unique identifier for the transaction.                                                                                                                                                                                                                                                                           |
| .external\_reference\_number | String    | A plain string reference identifier for the points redemption attempt. Each `external_reference_number` must be unique for a redemption. This is used for an [idempotency check](https://docs.capillarytech.com/reference/idempotency-check-for-issuing-reward). There is no character limit for this parameter. |
| .notes                       | String    | Notes or additional information about the transaction                                                                                                                                                                                                                                                            |
| .validation\_code            | String    | Validation code for the transaction.                                                                                                                                                                                                                                                                             |
| .custom\_fields              | Object    | Organization-specific custom fields. The [custom field must exist](https://docs.capillarytech.com/docs/data-fields#/custom-fields) in the organization.                                                                                                                                                          |
| ..field                      | Object    | Object containing the key-value pairs for the custom field.                                                                                                                                                                                                                                                      |
| ...name                      | String    | Key of the custom field. For example, if the custom field is "redemption\_channel", provide the same.                                                                                                                                                                                                            |
| ...value                     | String    | Value for the provided custom field `name`. For example, if the custom field is "redemption\_channel", provide a valid enum for the field such as `App`, `Website`, `In-store`, `POS`.                                                                                                                           |

# Query parameters

| Parameter                                   | Data Type | Description                                                                                                                                                                                                         |
| ------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user_group2_primary_user_id`               | String    | Unique user ID of the primary member of the group associated with the points to redeem.                                                                                                                             |
| `user_group2_id`                            | String    | Unique ID of the group associated with the points to redeem.                                                                                                                                                        |
| `user_group2_external_id`                   | String    | Unique external ID of the group associated with the points to redeem.                                                                                                                                               |
| `user_group2_primary_user_source`           | String    | Source in which the primary user's identifier is available. <br />Allowed values: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`. |
| `user_group2_primary_user_accountId`        | String    | Account ID of the source with multiple accounts such as WECHAT.                                                                                                                                                     |
| `user_group2_primary_user_identifier_type`  | String    | Identifier type used for the primary member. <br />Allowed values: `mobile`, `email`, `cardnumber`, `cardExternalId`, `id`.                                                                                         |
| `user_group2_primary_user_identifier_value` | String    | Value of the specified identifier type.                                                                                                                                                                             |
| `skip_validation`                           | Boolean   | Pass `true` to skip customer validation to redeem points.                                                                                                                                                           |
| `program_id`                                | String    | Unique ID of the program from which points need to be redeemed. Applicable for orgs with multi-loyalty program enabled.                                                                                             |
| `validation_type`                           | String    | Validation type used to redeem points. <br />Allowed values: `MISSED_CALL`, `SMS`.                                                                                                                                  |

> ❗️ Note
>
> You must provide at least one of the parameters marked with \*\* for group level points redemption.

# Example response

```json Individual redemption
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "responses": {
            "points": {
                "mobile": "919777788221",
                "email": "tomswayer@gmail.com",
                "external_id": "123456",
                "user_id": "564670755",
                "redemption_id": "7t4y2a",
                "points_redeemed": "1",
                "redemption_purpose": "",
                "redeemed_value": 1,
                "redeemed_local_value": 1,
                "balance": 1990,
                "side_effects": {
                    "effect": [
                        {
                            "id": 27141811,
                            "case_value": "false",
                            "num_points": 1,
                            "currency_value": 1,
                            "validation_code": "NS3U05",
                            "points_redemption_summary_id": "27141811",
                            "redeemed_on_bill_number": "bilnum100000",
                            "redeemed_on_bill_id": -1,
                            "type": "points"
                        }
                    ]
                },
                "item_status": {
                    "success": "true",
                    "code": 800,
                    "message": "Points Redeemed"
                }
            }
        }
    }
}
```

```json Cross-member group redemption
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "responses": {
            "points": {
                "mobile": "919998872203",
                "email": "kavya.nair@example.com",
                "external_id": "",
                "user_id": "568376576",
                "redemption_id": "uN1oA9",
                "points_redeemed": "10",
                "redemption_purpose": "",
                "redeemed_value": 10,
                "redeemed_local_value": 10,
                "balance": 10000,
                "is_group_redemption": true,
                "side_effects": {
                    "effect": [
                        {
                            "id": 28453291,
                            "case_value": "false",
                            "num_points": 10,
                            "currency_value": 10,
                            "validation_code": "",
                            "points_redemption_summary_id": "28453291",
                            "redeemed_on_bill_number": "txn-166",
                            "redeemed_on_bill_id": -1,
                            "type": "points"
                        }
                    ]
                },
                "item_status": {
                    "success": "true",
                    "code": 800,
                    "message": "Points Redeemed"
                }
            }
        }
    }
}
```

## Response parameters

| Parameter                           | Data Type        | Description                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response`                          | Object           | The root object that contains all the details of the response.                                                                                                                                                                                                                                                                                            |
| `.status`                           | Object           | An object containing the status details of the response.                                                                                                                                                                                                                                                                                                  |
| `..success`                         | String           | A string indicating the success status of the response.                                                                                                                                                                                                                                                                                                   |
| `..code`                            | Integer          | The HTTP status code associated with the response.                                                                                                                                                                                                                                                                                                        |
| `..message`                         | String           | A general message providing additional information about the status of the response.                                                                                                                                                                                                                                                                      |
| `.responses`                        | Object           | An object containing detailed response data.                                                                                                                                                                                                                                                                                                              |
| `..points`                          | Object           | An object containing detailed information about the points involved in the transaction.                                                                                                                                                                                                                                                                   |
| `...mobile`                         | String           | The mobile phone number associated with the account involved in the transaction.                                                                                                                                                                                                                                                                          |
| `...email`                          | String           | The email address associated with the account involved in the transaction.                                                                                                                                                                                                                                                                                |
| `...external_id`                    | String           | An external identifier for the transaction.                                                                                                                                                                                                                                                                                                               |
| `...user_id`                        | String           | The user ID associated with the account involved in the transaction.                                                                                                                                                                                                                                                                                      |
| `...redemption_id`                  | String           | A unique identifier for the redemption transaction.                                                                                                                                                                                                                                                                                                       |
| `...points_redeemed`                | String           | The number of points that were redeemed in the transaction.                                                                                                                                                                                                                                                                                               |
| `...redemption_purpose`             | String           | The purpose of the redemption.                                                                                                                                                                                                                                                                                                                            |
| `...redeemed_value`                 | Integer          | The value of the points that were redeemed.                                                                                                                                                                                                                                                                                                               |
| `...redeemed_local_value`           | Integer          | The local value of the points that were redeemed.                                                                                                                                                                                                                                                                                                         |
| `...balance`                        | Integer          | The remaining balance of points in the account after the redemption.                                                                                                                                                                                                                                                                                      |
| `...is_group_redemption`            | Boolean          | `true` when the redemption was processed as a cross-member First Expiry, First Out (FEFO) redemption. Present only when `ENABLE_CROSS_MEMBER_REDEMPTION` is enabled for the org and the transacting customer is an active member of a UserGroup2 group. Not present for standard individual or UserGroup2 group redemptions using `user_group2_*` params. |
| `...side_effects`                   | Object           | An object containing information about any side effects of the redemption.                                                                                                                                                                                                                                                                                |
| `....effect`                        | Array of Objects | An array containing objects representing individual effects of the redemption.                                                                                                                                                                                                                                                                            |
| `.....id`                           | Integer          | A unique identifier for an individual effect.                                                                                                                                                                                                                                                                                                             |
| `.....case_value`                   | String           | A string indicating whether a certain case is true for the effect. If your loyalty program doesn't have tracker cases configured for redemptions, the Points Engine returns "false" to indicate: no case matching was performed, tracker-based redemption rules are not active, and standard redemption rules were applied.                               |
| `.....num_points`                   | Number           | The number of points involved in the effect.                                                                                                                                                                                                                                                                                                              |
| `.....currency_value`               | Integer          | The currency value associated with the effect.                                                                                                                                                                                                                                                                                                            |
| `.....validation_code`              | String           | A validation code associated with the effect.                                                                                                                                                                                                                                                                                                             |
| `.....points_redemption_summary_id` | String           | A summary ID associated with the points redemption.                                                                                                                                                                                                                                                                                                       |
| `.....redeemed_on_bill_number`      | String           | The bill number associated with the redemption.                                                                                                                                                                                                                                                                                                           |
| `.....redeemed_on_bill_id`          | Integer          | The bill ID associated with the redemption.                                                                                                                                                                                                                                                                                                               |
| `.....type`                         | String           | The type of effect.                                                                                                                                                                                                                                                                                                                                       |
| `...item_status`                    | Object           | An object containing the status details of the item in the response.                                                                                                                                                                                                                                                                                      |
| `....code`                          | Integer          | The HTTP status code associated with the item status (800 indicates points were redeemed).                                                                                                                                                                                                                                                                |
| `....message`                       | String           | A general message providing additional information about the status of the item in the response.                                                                                                                                                                                                                                                          |

## Error & warning codes

| Code | Error number | Type  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —    | 521          | Error | The system is processing another request for the same customer. A customer-level lock is held for the duration of each request. If a second request for the same customer arrives before the first completes, the system cannot acquire the lock and rejects the request with 521. This is expected behavior. Retry the failed request after a short delay. To avoid elevated 521 rates in bulk flows, send requests for the same customer sequentially and implement a retry with backoff. |
| —    | 3316         | Error | Group redemption action executed from a non-group redemption payload. Raise a JIRA ticket to the Capillary product support team and disable the configuration `ENABLE_GROUP_PROGRAMS_REDEMPTION`.                                                                                                                                                                                                                                                                                           |
| —    | 801          | Error | Trying to redeem invalid points. The system validates that `points_redeemed` is strictly greater than 0. Any value that is null, 0, or negative is treated as invalid. Provide a valid value for `points_redeemed`.                                                                                                                                                                                                                                                                         |
| —    | 828          | Error | Points redemption not configured for the group. The group does not have points redemption set up in the system.                                                                                                                                                                                                                                                                                                                                                                             |
| —    | 878          | Error | Invalid decimal precision in points redeemed. The `points_redeemed` field must have a maximum of three decimal places. For example, `1.1111` or `10.12345` would trigger this error.                                                                                                                                                                                                                                                                                                        |
| —    | 1632         | Error | Invalid or non-existent groupId. The groupId provided is missing, invalid, or does not exist.                                                                                                                                                                                                                                                                                                                                                                                               |

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
    "/points/redeem": {
      "post": {
        "summary": "Redeem Points",
        "description": "This API enables you to redeem points of a customer.",
        "operationId": "redeem-points",
        "parameters": [
          {
            "name": "format",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "xml",
                "json"
              ]
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "root": {
                    "type": "object",
                    "properties": {
                      "redeem": {
                        "type": "object",
                        "description": "Redeem details",
                        "properties": {
                          "points_redeemed": {
                            "type": "string",
                            "description": "Points to be redeemed from the customer."
                          },
                          "transaction_number": {
                            "type": "string",
                            "description": "Transaction number of the transaction."
                          },
                          "customer": {
                            "type": "object",
                            "description": "Mobile number is a mandatory field.",
                            "required": [
                              "mobile"
                            ],
                            "properties": {
                              "mobile": {
                                "type": "string",
                                "description": "Mobile number of the customer."
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
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample response": {
                    "summary": "Sample response",
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success"
                        },
                        "responses": {
                          "points": {
                            "mobile": "919777788221",
                            "email": "tomswayer@gmail.com",
                            "external_id": "123456",
                            "user_id": "564670755",
                            "redemption_id": "7t4y2a",
                            "points_redeemed": "1",
                            "redemption_purpose": "",
                            "redeemed_value": 1,
                            "redeemed_local_value": 1,
                            "balance": 1990,
                            "side_effects": {
                              "effect": [
                                {
                                  "id": 27141811,
                                  "case_value": "false",
                                  "num_points": 1,
                                  "currency_value": 1,
                                  "validation_code": "NS3U05",
                                  "points_redemption_summary_id": "27141811",
                                  "redeemed_on_bill_number": "bilnum100000",
                                  "redeemed_on_bill_id": -1,
                                  "type": "points"
                                }
                              ]
                            },
                            "item_status": {
                              "success": "true",
                              "code": 800,
                              "message": "Points Redeemed"
                            }
                          }
                        }
                      }
                    }
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
                        "responses": {
                          "type": "object",
                          "properties": {
                            "points": {
                              "type": "object",
                              "properties": {
                                "mobile": {
                                  "type": "string",
                                  "example": "917897897896"
                                },
                                "email": {
                                  "type": "string",
                                  "example": ""
                                },
                                "external_id": {
                                  "type": "string",
                                  "example": "BUK003833454"
                                },
                                "user_id": {
                                  "type": "string",
                                  "example": "547528790"
                                },
                                "redemption_id": {
                                  "type": "string",
                                  "example": "LUVkYh"
                                },
                                "points_redeemed": {
                                  "type": "string",
                                  "example": "10"
                                },
                                "redemption_purpose": {
                                  "type": "string",
                                  "example": ""
                                },
                                "redeemed_value": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "redeemed_local_value": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "balance": {
                                  "type": "integer",
                                  "example": 132,
                                  "default": 0
                                },
                                "side_effects": {
                                  "type": "object",
                                  "properties": {
                                    "effect": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 25273601,
                                            "default": 0
                                          },
                                          "case_value": {
                                            "type": "string",
                                            "example": "false"
                                          },
                                          "num_points": {
                                            "type": "integer",
                                            "example": 10,
                                            "default": 0
                                          },
                                          "currency_value": {
                                            "type": "integer",
                                            "example": 0,
                                            "default": 0
                                          },
                                          "validation_code": {
                                            "type": "string",
                                            "example": "NS3U45"
                                          },
                                          "points_redemption_summary_id": {
                                            "type": "string",
                                            "example": "25273601"
                                          },
                                          "redeemed_on_bill_number": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "redeemed_on_bill_id": {
                                            "type": "integer",
                                            "example": -1,
                                            "default": 0
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "points"
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
                                      "type": "integer",
                                      "example": 800,
                                      "default": 0
                                    },
                                    "message": {
                                      "type": "string",
                                      "example": "Points Redeemed"
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"false\",\n            \"code\": 500,\n            \"message\": \"All requests have failed due to errors\"\n        },\n        \"responses\": {\n            \"points\": {\n                \"mobile\": \"91789789781\",\n                \"email\": \"\",\n                \"external_id\": \"\",\n                \"user_id\": null,\n                \"points_redeemed\": \"10\",\n                \"redeemed_value\": 0,\n                \"side_effects\": {\n                    \"effect\": []\n                },\n                \"item_status\": {\n                    \"success\": \"false\",\n                    \"code\": 816,\n                    \"message\": \"Customer not found for organization\"\n                }\n            }\n        }\n    }\n}"
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
                              "example": "false"
                            },
                            "code": {
                              "type": "integer",
                              "example": 500,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "All requests have failed due to errors"
                            }
                          }
                        },
                        "responses": {
                          "type": "object",
                          "properties": {
                            "points": {
                              "type": "object",
                              "properties": {
                                "mobile": {
                                  "type": "string",
                                  "example": "91789789781"
                                },
                                "email": {
                                  "type": "string",
                                  "example": ""
                                },
                                "external_id": {
                                  "type": "string",
                                  "example": ""
                                },
                                "user_id": {},
                                "points_redeemed": {
                                  "type": "string",
                                  "example": "10"
                                },
                                "redeemed_value": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "side_effects": {
                                  "type": "object",
                                  "properties": {
                                    "effect": {
                                      "type": "array"
                                    }
                                  }
                                },
                                "item_status": {
                                  "type": "object",
                                  "properties": {
                                    "success": {
                                      "type": "string",
                                      "example": "false"
                                    },
                                    "code": {
                                      "type": "integer",
                                      "example": 816,
                                      "default": 0
                                    },
                                    "message": {
                                      "type": "string",
                                      "example": "Customer not found for organization"
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
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl -L 'https://eu.api.capillarytech.com/v1.1/points/redeem?skip_validation=false&program_id=973&format=json' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: Basic 5ZmM2YjZlY2I2MmEy' \\\n-H 'Cookie: _cfuvid=XumIPWGQWMR5H_KoNPj_nCPZxmHNpwo5t.jJOsDKIDg-1760604030972-0.0.1.1-604800000; _cfuvid=Oh0QQggV8MSU5DNV505fn9BgzCqkOeV.cY67BUlO6oM-1762510017386-0.0.1.1-604800000' \\\n-d '{\n    \"root\": {\n        \"redeem\": [\n            {\n                \"points_redeemed\": 1,\n                \"customer\": {\n                    \"mobile\": \"919988776655\"\n                },\n               \"external_reference_number\":\"a3fd1a63-1aa3-4c47-9173-398\",\n               \"transaction_number\": \"bilnum100000\", \n                \"notes\": \"Redeemed to transfer points to the friend\",\n               \n                \"custom_fields\": {\n                    \"field\": [\n                        {\n                            \"name\": \"point_transfered_to\",\n                            \"value\": \"9777788221\"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}'",
              "name": "Sample request"
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