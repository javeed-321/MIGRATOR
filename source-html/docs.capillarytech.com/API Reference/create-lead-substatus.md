> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Lead Substatus

Lets you create a new sub-status to a lead status.

# Body parameter

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| status    | Status for which you want to add sub-status.       |
| subStatus | Name of the new sub-status that you want to create |

# Response parameter

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| status    | Represents the primary status of the entry. |
| subStatus | Represents the sub-status of the entry.     |
| warnings  | List of warnings associated with the entry. |

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
    "/leads/substatus": {
      "post": {
        "summary": "Add Lead Substatus",
        "description": "Lets you create a new sub-status to a lead status.",
        "operationId": "create-lead-substatus",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "status",
                  "subStatus"
                ],
                "properties": {
                  "status": {
                    "type": "string",
                    "description": "Status for which you want to add sub-status.",
                    "enum": [
                      "OPEN",
                      "WON",
                      "LOST",
                      "ON_HOLD",
                      "DELETED"
                    ]
                  },
                  "subStatus": {
                    "type": "string",
                    "description": "Name of the new sub-status that you want to create."
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
                    "value": "{\n    \"status\": \"ON_HOLD\",\n    \"subStatus\": \"YetToDecide\",\n    \"warnings\": []\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "string",
                      "example": "ON_HOLD"
                    },
                    "subStatus": {
                      "type": "string",
                      "example": "YetToDecide"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "{\n    \"status\": \"ON_HOLD\",\n    \"subStatus\": \"YetToDecide\"\n}",
              "name": "Sample POST  Body"
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