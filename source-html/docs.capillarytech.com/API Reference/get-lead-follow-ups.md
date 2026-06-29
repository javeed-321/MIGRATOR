> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Lead follow-ups

Retrieves the follow ups of a specific lead.

# Path parameters

| Parameter | Description            |
| :-------- | :--------------------- |
| leadId    | Unique ID of the lead. |

# Response parameter

| Parameter         | Description                                      |
| ----------------- | ------------------------------------------------ |
| id                | Unique identifier for the data entry.            |
| userId            | User's unique ID associated with the data entry. |
| leadId            | Unique ID of the lead.                           |
| notes             | Additional notes or comments for the entry.      |
| createdBy         | ID of the user who created the entry.            |
| createdOn         | Timestamp when the entry was created.            |
| followedUpBy      | ID of the user who followed up on the entry.     |
| followedUpOn      | Timestamp when the entry was followed up on.     |
| scheduledFollowUp | Timestamp for the scheduled follow-up.           |

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
    "/leads/{leadId}/followups": {
      "get": {
        "summary": "Get Lead follow-ups",
        "description": "Retrieves the follow ups of a specific lead.",
        "operationId": "get-lead-follow-ups",
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
                    "value": "{\n    \"data\": [\n        {\n            \"id\": 23,\n            \"userId\": 90486525,\n            \"leadId\": 12,\n            \"notes\": \"notes 1\",\n            \"createdBy\": 75029724,\n            \"createdOn\": \"2019-02-20T15:33:11Z\",\n            \"followedUpBy\": 75029724,\n            \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n            \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n        },\n        {\n            \"id\": 24,\n            \"userId\": 90486525,\n            \"leadId\": 12,\n            \"notes\": \"notes 2\",\n            \"createdBy\": 75029724,\n            \"createdOn\": \"2019-02-20T15:33:11Z\",\n            \"followedUpBy\": 75029724,\n            \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n            \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                          "notes": {
                            "type": "string",
                            "example": "notes 1"
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
                          "followedUpBy": {
                            "type": "integer",
                            "example": 75029724,
                            "default": 0
                          },
                          "followedUpOn": {
                            "type": "string",
                            "example": "2018-10-04T07:15:00Z"
                          },
                          "scheduledFollowUp": {
                            "type": "string",
                            "example": "2018-10-04T07:00:00Z"
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
              "code": "https://us.api.capillarytech.com/v2/leads/12/followups"
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