> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Status Log

Retrieves the log of status changes of a card number.

This API retrieves the status change history for a specific card. Each log entry includes the timestamp, previous and current status labels, and the user who made the change. Use this API to audit card lifecycle events or troubleshoot status-related issues.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on [making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

## Resource information

| HTTP method           | GET   |
| :-------------------- | :---- |
| Authentication        | Basic |
| Pagination supported? | NO    |
| Rate limit            | YES   |
| Batch support         | NO    |

## Example request

```json Sample request
curl --location 'https://eu.api.capillarytech.com/v2/card/statusLog?number=GOLD00000000000001012020' \
--header 'Authorization: Basic ='
```

## Query parameters

| Field  | Type   | Required | Description                    |
| :----- | :----- | :------- | :----------------------------- |
| number | string | Yes      | Card number to get status log. |

## Example response

```json Sample response
{
    "data": [
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T10:39:19Z",
            "entityId": 10609,
            "isActive": false,
            "label": "CARD GENERATED",
            "status": "NOT_ISSUED"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T10:40:25Z",
            "entityId": 10609,
            "isActive": false,
            "label": "ACTIVE",
            "status": "ACTIVE"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T12:01:39Z",
            "entityId": 10609,
            "isActive": false,
            "label": "SUSPENDED",
            "status": "SUSPENDED"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T12:02:00Z",
            "entityId": 10609,
            "isActive": false,
            "label": "ACTIVE",
            "status": "ACTIVE"
        },
        {
            "reason": "",
            "createdBy": 0,
            "actions": [],
            "autoUpdateTime": "2021-01-10",
            "createdOn": "2021-01-10T12:02:39Z",
            "entityId": 10609,
            "isActive": true,
            "label": "EXPIRED",
            "status": "EXPIRED"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        data
      </td>

      <td>
        array[object]
      </td>

      <td>
        List of status log entries.
      </td>
    </tr>

    <tr>
      <td>
        * reason
      </td>

      <td>
        string
      </td>

      <td>
        Reason for the status change, if provided.
      </td>
    </tr>

    <tr>
      <td>
        * createdBy
      </td>

      <td>
        integer
      </td>

      <td>
        Entity ID of the user or system that created this status entry. A value of `0` indicates an automated system change.
      </td>
    </tr>

    <tr>
      <td>
        * actions
      </td>

      <td>
        array
      </td>

      <td>
        List of actions that are permitted for this status.
      </td>
    </tr>

    <tr>
      <td>
        * autoUpdateTime
      </td>

      <td>
        string
      </td>

      <td>
        Date when the status was automatically updated (format: `YYYY-MM-DD`).
      </td>
    </tr>

    <tr>
      <td>
        * createdOn
      </td>

      <td>
        string
      </td>

      <td>
        Timestamp when the status entry was created in ISO 8601 format, returned in the server time zone.

        EU server example 2026-04-20T12:02:55Z → 20 April 2026, 12:02:55 (UTC)

        India server example 2026-04-20T17:32:55+05:30 → 20 April 2026, 17:32:55 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        * entityId
      </td>

      <td>
        integer
      </td>

      <td>
        Unique identifier of the card associated with this status entry.
      </td>
    </tr>

    <tr>
      <td>
        * isActive
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates whether this is the current active status. `true` for the most recent status; `false` for historical entries.
      </td>
    </tr>

    <tr>
      <td>
        * label
      </td>

      <td>
        string
      </td>

      <td>
        Human-readable label for the status (e.g., `CARD GENERATED`, `ACTIVE`, `SUSPENDED`, `EXPIRED`).
      </td>
    </tr>

    <tr>
      <td>
        * status
      </td>

      <td>
        string
      </td>

      <td>
        Internal status code. Possible values: `NOT_ISSUED`, `ACTIVE`, `SUSPENDED`, `EXPIRED`, `DELETED`.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        array
      </td>

      <td>
        List of warning messages, if any.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        array
      </td>

      <td>
        List of error messages, if the request failed.
      </td>
    </tr>
  </tbody>
</Table>

## Card status values

| Status      | Description                                               |
| :---------- | :-------------------------------------------------------- |
| NOT\_ISSUED | Card has been generated but not yet issued to a customer. |
| ACTIVE      | Card is active and can be used for transactions.          |
| SUSPENDED   | Card is temporarily suspended. It can be reactivated.     |
| EXPIRED     | Card has expired and cannot be used.                      |
| DELETED     | Card has been permanently deleted.                        |

## API-specific error codes

| Error Code | Description                | Reason                                      |
| :--------- | :------------------------- | :------------------------------------------ |
| 400        | Bad Request                | Invalid input parameters                    |
| 401        | Unauthorized               | Missing or invalid authentication token     |
| 404        | Not Found                  | Incorrect URL or endpoint                   |
| 500        | Internal Server Error      | Unexpected server failure (contact support) |
| 3010       | Card number does not exist | The specified card number was not found     |

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
    "/card/statusLog": {
      "get": {
        "summary": "Get Status Log",
        "description": "Retrieves the log of status changes of a card number.",
        "operationId": "get-status-log",
        "parameters": [
          {
            "name": "number",
            "in": "query",
            "description": "Card number to get status log.",
            "required": true,
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
                  "Result": {
                    "value": "{\n    \"data\": [\n        {\n            \"reason\": \"\",\n            \"createdBy\": 0,\n            \"actions\": [],\n            \"autoUpdateTime\": \"2021-01-10\",\n            \"createdOn\": \"2021-01-10T10:39:19Z\",\n            \"entityId\": 10609,\n            \"isActive\": false,\n            \"label\": \"CARD GENERATED\",\n            \"status\": \"NOT_ISSUED\"\n        },\n        {\n            \"reason\": \"\",\n            \"createdBy\": 0,\n            \"actions\": [],\n            \"autoUpdateTime\": \"2021-01-10\",\n            \"createdOn\": \"2021-01-10T10:40:25Z\",\n            \"entityId\": 10609,\n            \"isActive\": false,\n            \"label\": \"ACTIVE\",\n            \"status\": \"ACTIVE\"\n        },\n        {\n            \"reason\": \"\",\n            \"createdBy\": 0,\n            \"actions\": [],\n            \"autoUpdateTime\": \"2021-01-10\",\n            \"createdOn\": \"2021-01-10T12:01:39Z\",\n            \"entityId\": 10609,\n            \"isActive\": false,\n            \"label\": \"SUSPENDED\",\n            \"status\": \"SUSPENDED\"\n        },\n        {\n            \"reason\": \"\",\n            \"createdBy\": 0,\n            \"actions\": [],\n            \"autoUpdateTime\": \"2021-01-10\",\n            \"createdOn\": \"2021-01-10T12:02:00Z\",\n            \"entityId\": 10609,\n            \"isActive\": false,\n            \"label\": \"ACTIVE\",\n            \"status\": \"ACTIVE\"\n        },\n        {\n            \"reason\": \"\",\n            \"createdBy\": 0,\n            \"actions\": [],\n            \"autoUpdateTime\": \"2021-01-10\",\n            \"createdOn\": \"2021-01-10T12:02:39Z\",\n            \"entityId\": 10609,\n            \"isActive\": true,\n            \"label\": \"EXPIRED\",\n            \"status\": \"EXPIRED\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                          "reason": {
                            "type": "string",
                            "example": ""
                          },
                          "createdBy": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "actions": {
                            "type": "array"
                          },
                          "autoUpdateTime": {
                            "type": "string",
                            "example": "2021-01-10"
                          },
                          "createdOn": {
                            "type": "string",
                            "example": "2021-01-10T10:39:19Z"
                          },
                          "entityId": {
                            "type": "integer",
                            "example": 10609,
                            "default": 0
                          },
                          "isActive": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "label": {
                            "type": "string",
                            "example": "CARD GENERATED"
                          },
                          "status": {
                            "type": "string",
                            "example": "NOT_ISSUED"
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
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "https://eu.api.capillarytech.com/v2/card/statusLog?number=GOLD00000000000001012020",
              "name": "Sample request"
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