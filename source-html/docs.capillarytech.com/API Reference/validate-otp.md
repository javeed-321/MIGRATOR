> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Validate OTP

Lets you authenticate customer by validating the OTP sent to the customer through SMS or email and proceed with the necessary action such as redeeming points/coupons, and registering customer.

In Response, `entity: true` indicates the OTP validation is successful, and `"entiry": false` if the validation fails.

Use this API to authenticate a customer by validating the OTP sent through SMS or email.
After a successful validation, you can proceed with actions such as redeeming points or coupons or registering the customer.

In the response,

* `"entity": true` indicates that OTP validation was successful.
* `"entity": false` indicates that validation failed.

The API also supports **rate limiting** to prevent excessive validation attempts.

| Configuration Key                             | Description                                                              | Default Value |
| --------------------------------------------- | ------------------------------------------------------------------------ | ------------- |
| **CONF\_OTP\_VALIDATE\_RATE\_LIMIT\_ENABLED** | Enables rate limiting for the API.                                       | `false`       |
| **CONF\_OTP\_VALIDATE\_RATE\_LIMIT\_MINUTE**  | Defines the time window (in minutes) during which rate limiting applies. | `15`          |
| **CONF\_OTP\_VALIDATE\_RATE\_LIMIT\_COUNT**   | Defines the maximum number of API requests allowed.                      | `5`           |

**Example:** With the default configuration, a user can call the OTP validation API up to **5 times within 15 minutes** for the same entity.

For organisations created **after mid-October 2025**, rate limiting is **enabled by default** with the default configuration values.
To update the default values and enable the configuration for existing organisations, create a JIRA ticket with the Capillary Product Support team.

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
    "/otp/validate": {
      "post": {
        "summary": "Validate OTP",
        "description": "Lets you authenticate customer by validating the OTP sent to the customer through SMS or email and proceed with the necessary action such as redeeming points/coupons, and registering customer.\n\nIn Response, `entity: true` indicates the OTP validation is successful, and `\"entiry\": false` if the validation fails.",
        "operationId": "validate-otp",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "entityType",
                  "entityValue",
                  "code",
                  "action"
                ],
                "properties": {
                  "entityType": {
                    "type": "string",
                    "description": "Specify MOBILE to validate OTP send to the registered mobile number, EMAIL to send the validation code to the registered email ID.",
                    "enum": [
                      "MOBILE",
                      "EMAIL"
                    ]
                  },
                  "entityValue": {
                    "type": "string",
                    "description": "Specify the registered mobile number or email id of the customer based on the entityType passed."
                  },
                  "code": {
                    "type": "string",
                    "description": "Validation code received by the customer."
                  },
                  "action": {
                    "type": "string",
                    "description": "Action to be performed on successful validation.",
                    "enum": [
                      "COUPON (for coupon redemption)",
                      "POINTS (for points redemption)",
                      "REGISTRATION",
                      "USERGROUP",
                      "SUBSCRIPTION",
                      "GENERIC (for other purposes)",
                      "CUSTOMER_IDENTIFIER_CHANGE",
                      "CUSTOMER_STATUS_UPDATE",
                      "CUSTOMER_ISSUE_LINK_CARD."
                    ]
                  }
                }
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "entityType": "email",
                    "entityValue": "tom.sawyer@example.com",
                    "code": "A2WX11I",
                    "action": "GENERIC"
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
                    "value": "{\n    \"entity\": true,\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "boolean",
                      "example": true,
                      "default": true
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
                    "value": "{ \n  \"entity\": false, \n  \"warnings\":[] \n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "warnings": {
                      "type": "array"
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false
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