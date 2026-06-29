> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Status Log

Retrieves the log of customer status changes.

# Response Parameter

| Parameter       | Data Type      | Description                                                    |
| :-------------- | :------------- | :------------------------------------------------------------- |
| data            | Array\[Object] | List of status objects.                                        |
| -createdByUser  | String         | Username of the user who created the status                    |
| -reason         | String         | Reason for the status (e.g., `"This is the active customer"`). |
| -createdBy      | Number         | User ID of the creator.                                        |
| -actions        | Array          | List of possible actions                                       |
| -autoUpdateTime | String (Date)  | Timestamp of auto-update (format: `YYYY-MM-DD`).               |
| -createdOn      | String (ISO)   | Creation timestamp (format: `YYYY-MM-DDTHH:MM:SSZ`).           |
| -entityId       | Number         | Unique ID of the associated entity.                            |
| -isActive       | Boolean        | Indicates if the status is active (`true`/`false`).            |
| -label          | String         | Display label (e.g., `"Active"`).                              |
| -status         | String         | System status value (e.g., `"ACTIVE"`).                        |

```
{
    "data": [
        {
            "createdByUser": "1736163234_",
            "reason": "This is the active customer",
            "createdBy": 75155291,
            "actions": [],
            "autoUpdateTime": "2025-01-30",
            "createdOn": "2025-01-30T09:17:06Z",
            "entityId": 564590100,
            "isActive": true,
            "label": "Active",
            "status": "ACTIVE"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific error code

| Error Code | Description                                  | Reason                                          |
| ---------- | -------------------------------------------- | ----------------------------------------------- |
| 400        | Bad Request                                  | Invalid input parameters (malformed body/query) |
| 401        | Unauthorized                                 | Missing or invalid authentication token         |
| 404        | Not Found                                    | Incorrect URL or endpoint                       |
| 500        | Internal Server Error                        | Unexpected server failure (contact support)     |
| 8015       | Customer not found for the given identifiers | Invalid customer identifier                     |

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
    "/customers/{userId}/statusLog": {
      "get": {
        "summary": "Get Customer Status Log",
        "description": "Retrieves the log of customer status changes.",
        "operationId": "get-status-log-1",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer to fetch status log.",
            "schema": {
              "type": "integer",
              "format": "int64"
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
                    "value": "{\n    \"data\": [\n        {\n            \"createdByUser\": \"1736163234_\",\n            \"reason\": \"This is the active customer\",\n            \"createdBy\": 75155291,\n            \"actions\": [],\n            \"autoUpdateTime\": \"2025-01-30\",\n            \"createdOn\": \"2025-01-30T09:17:06Z\",\n            \"entityId\": 564590100,\n            \"isActive\": true,\n            \"label\": \"Active\",\n            \"status\": \"ACTIVE\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                          "createdByUser": {
                            "type": "string",
                            "example": "1736163234_"
                          },
                          "reason": {
                            "type": "string",
                            "example": "This is the active customer"
                          },
                          "createdBy": {
                            "type": "integer",
                            "example": 75155291,
                            "default": 0
                          },
                          "actions": {
                            "type": "array"
                          },
                          "autoUpdateTime": {
                            "type": "string",
                            "example": "2025-01-30"
                          },
                          "createdOn": {
                            "type": "string",
                            "example": "2025-01-30T09:17:06Z"
                          },
                          "entityId": {
                            "type": "integer",
                            "example": 564590100,
                            "default": 0
                          },
                          "isActive": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "label": {
                            "type": "string",
                            "example": "Active"
                          },
                          "status": {
                            "type": "string",
                            "example": "ACTIVE"
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
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/564590100/statusLog' \\\n--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Cookie: _cfuvid=XejpAu0JPrfAjXxLANIz3SWWX7UwPXkA48OkpvtwS8A-1745400713094-0.0.1.1-604800000; _cfuvid=fVULG3opb_XAyLeYYpQ2y6U79lKu5bg6tWtXSIg1v34-1746003099485-0.0.1.1-604800000'"
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