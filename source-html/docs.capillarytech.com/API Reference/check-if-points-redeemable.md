> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Check If Points Redeemable

Allows redeeming active points of customers according to the redemption criteria set for the organization (Loyalty Program). For example, you could set redemption criteria as allow redemption only in multiples of 10 and a maximum of 200 points per time.

This API checks if a specific number of points can be redeemed by a customer from a selected loyalty program. The eligibility check uses only the points balance in the selected program, not the total points across all programs. If a customer has points in other programs, those balances are not considered for this check. Store-to-program mapping determines which program's balance is checked for redemption eligibility. For example, the mapping between a store and a program (such as uat.promised.points to ROOT concept) controls which program's points are used for the redemption request.

With this API, you can now issue a validation code to the customer automatically upon successful validation. This reduces the need to call the `/points/validationcode` API separately. <Callout icon="📘" theme="info">
If there is any problem in issuing validation code, Points Redeemable but OTP Generation failed error will be displayed (876) \* if points validation itself fails, then the relevant error message will be displayed </Callout>

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v1.1/points/isredeemable?mobile=9777785205&program_id=973&format=json&points=10&issue_otp=null&validation_code=true' \
--header 'Authorization: Basic bWFkaHVMjU2YQ==' \
--header 'Cookie: _cfuvid=7165ECtxDm51hFGZ_zSJYF7reiBXgk4OldF_d7_82Iw-1761202117837-0.0.1.1-604800000'
```

# Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

## Resource information

| URI                   | /v1.1/points/isredeemable?                                                                                               |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| HTTP method           | GET                                                                                                                      |
| Authentication        | Basic                                                                                                                    |
| Pagination supported? | NO                                                                                                                       |
| Rate limit            | YES. Demo and testing clusters: 1000 requests per minute per API key. Other organizations: Rate limit is brand-specific. |
| Batch support         | NO                                                                                                                       |

## Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked in * are mandatory)
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
        mobile/email/external_id/card_number/card_external_id*
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass any of the registered identifier type.
      </td>
    </tr>

    <tr>
      <td>
        program_id*
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the loyalty program from which points need to redeem.
      </td>
    </tr>

    <tr>
      <td>
        group_redemption
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` for group redemption - points earned in one program need to redeem in a different program of the org.
      </td>
    </tr>

    <tr>
      <td>
        points*
      </td>

      <td>
        int
      </td>

      <td>
        Number of points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        issue_otp
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to issue OTP if the validation is successful.
      </td>
    </tr>

    <tr>
      <td>
        validation_code
      </td>

      <td>
        string
      </td>

      <td>
        OTP issued to the customer’s mobile number.
      </td>
    </tr>

    <tr>
      <td>
        skip_validation
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` if you want to skip validation.
      </td>
    </tr>

    <tr>
      <td>
        validation_type
      </td>

      <td>
        Enum
      </td>

      <td>
        Preferred mode of validation.
        Value: `MISSED_CALL`, `SMS`, `INVALID`.
        Use invalid if you want to skip_validation.
      </td>
    </tr>

    <tr>
      <td>
        user_group2_primary_user_id
      </td>

      <td>
        long
      </td>

      <td>
        Unique user ID of the primary member of the group associated with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        user_group2_id
      </td>

      <td>
        int
      </td>

      <td>
        Unique ID of the group associated with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        user_group2_primary_user_source
      </td>

      <td>
        Enum
      </td>

      <td>
        Source in which the primary user’s identifier is available.
        Value: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`.
      </td>
    </tr>

    <tr>
      <td>
        user_group2_primary_user_accountId
      </td>

      <td>
        string
      </td>

      <td>
        Account ID of the source with multiple accounts such as WECHAT.
      </td>
    </tr>

    <tr>
      <td>
        user_group2_primary_user_identifier_type
      </td>

      <td>
        Enum
      </td>

      <td>
        Identifier type used for the primary member.
        Value: `mobile`, `email`, `cardnumber`, `cardExternalId`, `id`.
      </td>
    </tr>

    <tr>
      <td>
        user_group2_primary_user_identifier_value
      </td>

      <td>
        string
      </td>

      <td>
        Value of the specified identifier type.
      </td>
    </tr>

    <tr>
      <td>
        user_group2_external_id
      </td>

      <td>
        string
      </td>

      <td>
        Unique external ID of the group associated with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        use_default_user_group2
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to associate the default group with the points to redeem.
      </td>
    </tr>

    <tr>
      <td>
        currency_input
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` whether the points of worth n can be redeemed. For example, you can check if points of worth $5 can be redeemed (assuming $ as the base currency). To use this, ensure that the org currency ratio is configured for the org.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```curl Sample response
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "points": {
            "redeemable": {
                "mobile": "919777785205",
                "email": "testgrp3@gmail.com",
                "external_id": "434547",
                "points": 10,
                "is_redeemable": "true",
                "points_redeem_value": 10,
                "points_redeem_local_value": 10,
                "input_type": "points",
                "points_currency_ratio": "1",
                "item_status": {
                    "success": "true",
                    "code": 800,
                    "message": "Points can be redeemed"
                }
            }
        }
    }
}
```

# Response parameter

| Parameter Path                | Type    | Description                                                                   |
| :---------------------------- | :------ | :---------------------------------------------------------------------------- |
| response                      | boolean | true if the request succeeded.                                                |
| status                        | integer | HTTP status code (e.g., 200 for success).                                     |
| -message                      | string  | Human-readable status message (e.g., "Success").                              |
| mobile                        | string  | Customer’s registered mobile number (masked or full, based on configuration). |
| email                         | string  | Customer’s registered email address.                                          |
| externalId                    | string  | Customer’s external identifier                                                |
| points                        | integer | Points requested for redemption.                                              |
| -is\_redeemable               | boolean | true if points are redeemable.                                                |
| -points\_redeem\_value        | decimal | Equivalent monetary value of redeemable points                                |
| -points\_redeem\_local\_value | decimal | Equivalent monetary value in local currency (if conversion is enabled).       |
| -input\_type                  | string  | Type of input (e.g., "points" or "currency").                                 |
| points\_currency\_ratio       | string  | Conversion ratio between points and currency (e.g., "1").                     |
| -item\_status                 | boolean | true if points validation passed.                                             |
| --code                        | integer | Sub-status code for redemption checks (e.g., 800).                            |
| --message                     | string  | Detailed message (e.g., "Points can be redeemed").                            |

## API specific error codes

| Error Code | Description                                                                            | Reason                                                                                                                                                                                                                                                                                          |
| :--------- | :------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 889        | Points processing failed, Please try again later Reason : Failed to Connect to Service | Invalid Customer identifiers passed                                                                                                                                                                                                                                                             |
| 1101       | invalid programId passed                                                               | Invalid `programId` passed                                                                                                                                                                                                                                                                      |
| 801        | Trying to redeem invalid points                                                        | Invalid `points` parameter passed (e.g, negative points value)                                                                                                                                                                                                                                  |
| 818        | Current points are less than points requested for redemption                           | The customer's points balance in the selected program is less than the requested redemption amount. Only the balance in the selected program is checked, even if the customer has points in other programs. Store-to-program mapping determines which program's balance is used for this check. |

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
    "/points/isredeemable": {
      "get": {
        "summary": "Check If Points Redeemable",
        "description": "",
        "operationId": "check-if-points-redeemable",
        "parameters": [
          {
            "name": "mobile",
            "in": "query",
            "description": "Mobile number of the customer to check whether points are redeemable.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "email",
            "in": "query",
            "description": "Email ID of the customer to check whether points are redeemable.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "external_id",
            "in": "query",
            "description": "External ID of the customer to check whether points are redeemable.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "Unique ID of the customer to check whether points are redeemable.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "card_number",
            "in": "query",
            "description": "Card number of the customer to check whether points are redeemable.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "card_external_id",
            "in": "query",
            "description": "Card external ID of the customer to check whether points are redeemable.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "program_id",
            "in": "query",
            "description": "Unique ID of the loyalty program from which points need to redeem.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          },
          {
            "name": "group_redemption",
            "in": "query",
            "description": "Pass true for group redemption - points earned in one program need to redeem in a different program of the org.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "points",
            "in": "query",
            "description": "Number of points to redeem.",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "issue_otp",
            "in": "query",
            "description": "Pass true to issue OTP if the validation is successful.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "validation_code",
            "in": "query",
            "description": "OTP issued to the customer’s mobile number.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "skip_validation",
            "in": "query",
            "description": "Pass true if you want to skip validation.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "validation_type",
            "in": "query",
            "description": "Preferred mode for validation. Use `INVALID` to skip validation.",
            "schema": {
              "type": "string",
              "enum": [
                "MISSED_CALL",
                "SMS",
                "INVALID"
              ]
            }
          },
          {
            "name": "user_group2_primary_user_id",
            "in": "query",
            "description": "Unique user ID of the primary member of the group associated with the points to redeem.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "user_group2_id",
            "in": "query",
            "description": "Unique ID of the group associated with the points to redeem.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "user_group2_primary_user_source",
            "in": "query",
            "description": "Source in which the primary user’s identifier is available.",
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
            "name": "user_group2_primary_user_accountId",
            "in": "query",
            "description": "Account ID of the source with multiple accounts such as WECHAT.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_group2_primary_user_identifier_type",
            "in": "query",
            "description": "Identifier type used for the primary member.",
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "cardnumber",
                "cardExternalId",
                "id"
              ]
            }
          },
          {
            "name": "user_group2_primary_user_identifier_value",
            "in": "query",
            "description": "Value of the specified identifier type.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "user_group2_external_id",
            "in": "query",
            "description": "Unique external ID of the group associated with the points to redeem.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "use_default_user_group2",
            "in": "query",
            "description": "Pass true to associate the default group with the points to redeem.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "use_default_user_group2",
            "in": "query",
            "description": "Pass true to consider the default user group.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "format",
            "in": "query",
            "description": "Preferred response format.",
            "schema": {
              "type": "string",
              "enum": [
                "xml",
                "json"
              ]
            }
          },
          {
            "name": "currency_input",
            "in": "query",
            "description": "Pass `true` whether the points of worth `n` can be redeemed. For example, you can check if points of worth $5 can be redeemed (assuming $ as the base currency).  To use this, ensure that the org currency ratio is configured for the org.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "currency_value",
            "in": "query",
            "description": "The currency amount to check. Required if `currency_input=true`.",
            "schema": {
              "type": "integer",
              "format": "int32"
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
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success"
                        },
                        "points": {
                          "redeemable": {
                            "mobile": "919777785205",
                            "email": "testgrp3@gmail.com",
                            "external_id": "434547",
                            "points": 10,
                            "is_redeemable": "true",
                            "points_redeem_value": 10,
                            "points_redeem_local_value": 10,
                            "input_type": "points",
                            "points_currency_ratio": "1",
                            "item_status": {
                              "success": "true",
                              "code": 800,
                              "message": "Points can be redeemed"
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
                              "type": "string",
                              "example": "200"
                            },
                            "message": {
                              "type": "string",
                              "example": "SUCCESS"
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
                                  "example": "44700900999"
                                },
                                "points_redeemed": {
                                  "type": "string",
                                  "example": "100"
                                },
                                "redeemed_value": {
                                  "type": "string",
                                  "example": "100"
                                },
                                "balance": {
                                  "type": "string",
                                  "example": "257"
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
                                      "example": "800"
                                    },
                                    "message": {
                                      "type": "string",
                                      "example": "Points Redeemed"
                                    }
                                  }
                                },
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
                                          "type": "string",
                                          "example": "200"
                                        },
                                        "message": {
                                          "type": "string",
                                          "example": "SUCCESS"
                                        }
                                      }
                                    },
                                    "points": {
                                      "type": "object",
                                      "properties": {
                                        "redeemable": {
                                          "type": "object",
                                          "properties": {
                                            "mobile": {
                                              "type": "string",
                                              "example": "44700900999"
                                            },
                                            "points": {
                                              "type": "string",
                                              "example": "100"
                                            },
                                            "is_redeemable": {
                                              "type": "string",
                                              "example": "true"
                                            },
                                            "points_redeem_value": {
                                              "type": "integer",
                                              "example": 536,
                                              "default": 0
                                            },
                                            "points_redeem_local_value": {
                                              "type": "number",
                                              "example": 5239.79,
                                              "default": 0
                                            },
                                            "points_currency_ratio": {
                                              "type": "string",
                                              "example": "1"
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
                                                  "example": "800"
                                                },
                                                "message": {
                                                  "type": "string",
                                                  "example": "Points can be redeemed"
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/points/isredeemable?mobile=9777785205&program_id=973&format=json&points=10&issue_otp=null&validation_code=true' \\\n--header 'Authorization: Basic bWFkaHVfI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=7165ECtxDm51hFGZ_zSJYF7reiBXgk4OldF_d7_82Iw-1761202117837-0.0.1.1-604800000'",
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