> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Lead Status Log

Retrieves the status change log of a specific lead.

# Path parameter

| Parameter | Description            |
| --------- | ---------------------- |
| leadId    | Unique ID of the lead. |

# Response parameter

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| id        | Unique identifier for the data entry.            |
| userId    | User's unique ID associated with the data entry. |
| leadId    | Unique ID of the lead.                           |
| status    | Status of the entry.                             |
| createdBy | ID of the user who created the entry.            |
| createdOn | Timestamp when the entry was created.            |
| reasonId  | Unique identifier for the reason.                |
| reason    | Description or name of the reason.               |

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
    "/leads/{leadId}/statusLog": {
      "get": {
        "summary": "Get Lead Status Log",
        "description": "Retrieves the status change log of a specific lead.",
        "operationId": "get-lead-status-log",
        "parameters": [
          {
            "name": "leadId",
            "in": "path",
            "description": "Unique ID of the lead.",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n    \"data\": [\n        {\n            \"id\": 23,\n            \"userId\": 90486525,\n            \"leadId\": 12,\n            \"status\": \"OPEN\",\n            \"createdBy\": 75029724,\n            \"createdOn\": \"2019-02-20T15:33:11Z\",\n            \"reasonId\": 3,\n            \"reason\": \"APICALL\"\n        },\n        {\n            \"id\": 24,\n            \"userId\": 90486525,\n            \"leadId\": 12,\n            \"status\": \"ON_HOLD\",\n            \"createdBy\": 75029724,\n            \"createdOn\": \"2019-02-20T15:33:11Z\",\n            \"reasonId\": 4,\n            \"reason\": \"NOT PICKING CALL\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                          "id": {
                            "type": "integer",
                            "example": 23,
                            "default": 0
                          },
                          "userId": {
                            "type": "integer",
                            "example": 90486525,
                            "default": 0
                          },
                          "leadId": {
                            "type": "integer",
                            "example": 12,
                            "default": 0
                          },
                          "status": {
                            "type": "string",
                            "example": "OPEN"
                          },
                          "createdBy": {
                            "type": "integer",
                            "example": 75029724,
                            "default": 0
                          },
                          "createdOn": {
                            "type": "string",
                            "example": "2019-02-20T15:33:11Z"
                          },
                          "reasonId": {
                            "type": "integer",
                            "example": 3,
                            "default": 0
                          },
                          "reason": {
                            "type": "string",
                            "example": "APICALL"
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
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "https://us.api.capillarytech.com/v2/leads/12/statusLog",
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