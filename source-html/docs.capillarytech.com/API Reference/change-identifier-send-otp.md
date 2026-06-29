> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Change Identifier (Send OTP)

Sends a validation OTP to the registered mobile number/email id of the staff  to change identifier. 

Changing identifier involves two step - 
1. Send OTP to the new identifier (current API)
2. Validate the OTP received to the new identifier (next API)

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
    "/staff/changeidentifier/sendotp": {
      "post": {
        "summary": "Change Identifier (Send OTP)",
        "description": "Sends a validation OTP to the registered mobile number/email id of the staff  to change identifier. \n\nChanging identifier involves two step - \n1. Send OTP to the new identifier (current API)\n2. Validate the OTP received to the new identifier (next API)",
        "operationId": "change-identifier-send-otp",
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
                  "identifier",
                  "type"
                ],
                "properties": {
                  "identifier": {
                    "type": "integer",
                    "description": "Unique id created for the staff",
                    "format": "int64"
                  },
                  "type": {
                    "type": "string",
                    "description": "Identifier type used for OTP validation.",
                    "enum": [
                      "mobile",
                      "email"
                    ]
                  },
                  "notes": {
                    "type": "string",
                    "description": "Reason for identifier change."
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
                    "value": "{\n    \"entity\": 75025586,\n    \"warnings\": [\n    ],\n    \"errors\": [\n    ],\n    \"success\": true\n}"
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
              "code": "https://us.api.capillarytech.com/v2/staff/changeidentifier/sendotp",
              "name": "Sample Request URL"
            },
            {
              "language": "curl",
              "code": "{ \n  \"identifier\":\"tom1.sawyer@example.com\",\n \"type\":\"email\", \n \"notes\":\"changing email\"\n}",
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