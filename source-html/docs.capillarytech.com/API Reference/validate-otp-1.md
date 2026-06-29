> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Validate OTP

Lets admin users validate OTP sent to the staff’s registered mobile number or email id through the `staff/sendOtp` API.

> 📘 Note
>
> You need to pass either `email` or `mobile` on which the customer received the OTP.

<br />

<Callout icon="❗️" theme="error">
  All Staff related APIs are deprected and cannot be used any more.
</Callout>

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
    "/staff/validate": {
      "post": {
        "summary": "Validate OTP",
        "description": "Lets admin users validate OTP sent to the staff’s registered mobile number or email id through the `staff/sendOtp` API.",
        "operationId": "validate-otp-1",
        "parameters": [
          {
            "name": "X-CAP-API-AUTH-KEY",
            "in": "header",
            "description": "Authentication key of the admin.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-CAP-API-AUTH-ORG-ID",
            "in": "header",
            "description": "ID of the org to associate with the staff user.",
            "required": true,
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
                  "id",
                  "username",
                  "identifierType",
                  "password",
                  "otp"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "description": "Unique id created for the staff",
                    "format": "int64"
                  },
                  "username": {
                    "type": "string",
                    "description": "Registered username of the staff."
                  },
                  "mobile": {
                    "type": "string",
                    "description": "Registered mobile number of the staff to send OTP. You can use this to validate mobile number and also to authenticate login."
                  },
                  "email": {
                    "type": "string",
                    "description": "Registered email id of the staff to send OTP. You can use this to validate email id and also to authenticate login."
                  },
                  "identifierType": {
                    "type": "string",
                    "description": "Specify EMAIL for email id validation and MOBILE for mobile number validation.",
                    "enum": [
                      "EMAIL",
                      "MOBILE"
                    ]
                  },
                  "password": {
                    "type": "string",
                    "description": "The password of the staff account."
                  },
                  "otp": {
                    "type": "string",
                    "description": "One time password received on the specified identifierType."
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
                    "value": "{\n   \"entity\":75025586,\n   \"warnings\":[\n\n   ],\n   \"errors\":[\n\n   ],\n   \"success\":true\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "integer",
                      "example": 75025586,
                      "default": 0
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
                      "type": "array"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true,
                      "default": true
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
              "code": "{\n   \"username\":\"timjames\",\n   \"mobile\":\"9800500000\",\n   \"email\":\"tom.swayer@capillarytech.com\",\n   \"id\":18,\n   \"identifierType\":\"EMAIL\",\n   \"password\":\"timpass45\",\n   \"otp\":\"335713\"\n}",
              "name": "Sample POST Request"
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