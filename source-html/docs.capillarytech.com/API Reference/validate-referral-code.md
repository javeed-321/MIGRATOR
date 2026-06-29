> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Validate Referral Code

Lets you validate referral code received by the referee.

# Query parameter

| Parameter | Description                       |
| :-------- | :-------------------------------- |
| code      | Unique referral code to validate. |

# Response parameter

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| valid     | Indicates whether the operation or request is valid.    |
| referrer  | ID of the referrer.                                     |
| warnings  | A list of warnings related to the operation or request. |

If the referral code exists but its creation date is outside the campaign's start and end dates, the API returns `{"valid": false, "referrer": -1}`. This means the code is not valid for the current campaign period, even if the code itself is correct.

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
    "/referral/validate": {
      "get": {
        "summary": "Validate Referral Code",
        "description": "Lets you validate referral code received by the referee.",
        "operationId": "validate-referral-code",
        "parameters": [
          {
            "name": "code*",
            "in": "query",
            "description": "Unique referral code to validate.",
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
                  "Sample Response": {
                    "value": "{\n    \"valid\": true,\n    \"referrer\": 314606628,\n    \"warnings\": []\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "valid": {
                      "type": "boolean",
                      "example": true,
                      "default": true
                    },
                    "referrer": {
                      "type": "integer",
                      "example": 314606628,
                      "default": 0
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
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "https://eu.api.capillarytech.com/v2/referral/validate?code=referral345",
              "name": "Sample Request URL"
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