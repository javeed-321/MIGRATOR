> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Change Identifier (Validate OTP)

Lets you validate the OTP sent through /changeidentifier/sendotp API to change the identifier of a staff. 

Changing identifier is a two step process - 
1. Send OTP to the new identifier (previous API)
2. Validate the OTP received to the new identifier. (current API)

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
    "/staff/changeidentifier": {
      "post": {
        "summary": "Change Identifier (Validate OTP)",
        "description": "Lets you validate the OTP sent through /changeidentifier/sendotp API to change the identifier of a staff. \n\nChanging identifier is a two step process - \n1. Send OTP to the new identifier (previous API)\n2. Validate the OTP received to the new identifier. (current API)",
        "operationId": "change-identifier-validate-otp",
        "parameters": [
          {
            "name": "X-CAP-API-AUTH-KEY",
            "in": "header",
            "description": "Authentication key of the admin.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-CAP-API-AUTH-ORG-ID",
            "in": "header",
            "description": "ID of the org to associate with the staff user.",
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
                  },
                  "otp": {
                    "type": "string",
                    "description": "OTP sent to the registered identifier."
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
                    "value": "{\n   \"entity\": 75027185,\n   \"warnings\": [\n   ],\n   \"errors\": [\n   ],\n   \"success\": true\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "integer",
                      "example": 75027185,
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
              "code": "https://us.api.capillarytech.com/v2/staff/changeidentifier",
              "name": "Sample Request URL"
            },
            {
              "language": "curl",
              "code": "{ \n  \"identifier\":\"tom1.sawyer@example.com\",\n \"type\":\"email\", \n \"notes\":\"changing email\",\n\"otp\":\"13482\"\n} ",
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