> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Lead Substatus

Retrieves all the sub-statuses added (for each status) to the organization.

# Response parameter

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| data      | List of objects containing status and sub-status details. |
| status    | Represents the primary status of the entry.               |
| subStatus | Represents the sub-status of the entry.                   |
| warnings  | List of warnings associated with the entry.               |
| errors    | List of errors associated with the entry.                 |

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
    "/leads/substatuses": {
      "get": {
        "summary": "Get Lead Substatus",
        "description": "Retrieves all the sub-statuses added (for each status) to the organization.",
        "operationId": "get-lead-substatus",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n    \"data\": [\n        {\n            \"status\": \"LOST\",\n            \"subStatus\": \"InvalidPhoneNumber\"\n        },\n        {\n            \"status\": \"ON_HOLD\",\n            \"subStatus\": \"YetToDecide\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "string",
                            "example": "LOST"
                          },
                          "subStatus": {
                            "type": "string",
                            "example": "InvalidPhoneNumber"
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
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
                    "value": ""
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
              "code": "http://us.api.capillarytech.com/v2/leads/substatuses",
              "name": "Sample get request"
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