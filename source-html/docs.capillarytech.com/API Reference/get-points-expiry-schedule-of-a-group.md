> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve points expiry schedule of a group

This API allows you to retrieve the points expiry schedule of a specific group.

> ❗️ Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

`{host}/v2/userGroup2/pointsExpirySchedule`

# Query parameters

| Query Parameter         | Description                                                          |
| ----------------------- | -------------------------------------------------------------------- |
| externalId              | The external identifier for the user group.                          |
| type                    | The type of the user group.                                          |
| startDate               | The start date for the points expiry schedule.                       |
| endDate                 | The end date for the points expiry schedule.                         |
| getDataForAllPrograms   | A boolean indicating whether to get data for all programs or not.    |
| fetchEarliestExpiryOnly | A boolean indicating whether to fetch only the earliest expiry data. |
| limits                  | The maximum number of records to return per page.                    |
| offsets                 | The starting point in the list of records.                           |

# Response parameters

| Parameter       | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| expirySchedules | This is an array containing objects which each represent a set of points scheduled to expire. |
| points          | The number of points that are set to expire.                                                  |
| expiryDate      | The date when the points will expire.                                                         |
| programId       | The identifier of the program to which the points are attached.                               |
| pointsType      | The type of points that are set to expire.                                                    |
| expiryType      | The type of expiry, indicating how the expiry date was determined.                            |
| warnings        | An array of warning messages, if any were generated during the request.                       |

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
    "/userGroup2/pointsExpirySchedule": {
      "get": {
        "summary": "Retrieve points expiry schedule of a group",
        "description": "This API allows you to retrieve the points expiry schedule of a specific group.",
        "operationId": "get-points-expiry-schedule-of-a-group",
        "parameters": [
          {
            "name": "externalId",
            "in": "query",
            "description": "The external identifier for the user group.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Type of program",
            "schema": {
              "type": "string",
              "default": "CUSTOMER"
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "The start date for the points expiry schedule.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "The end date for the points expiry schedule.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "getDataForAllPrograms",
            "in": "query",
            "description": "A boolean indicating whether to get data for all programs or not.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "fetchEarliestExpiryOnly",
            "in": "query",
            "description": "A boolean indicating whether to fetch only the earliest expiry data.",
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
                  "Get points expiry schedule": {
                    "value": "{\n    \"expirySchedules\": [\n        {\n            \"points\": 700,\n            \"expiryDate\": \"2024-04-30\",\n            \"programId\": 469,\n            \"pointsType\": \"bill_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "expirySchedules": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "points": {
                            "type": "integer",
                            "example": 700,
                            "default": 0
                          },
                          "expiryDate": {
                            "type": "string",
                            "example": "2024-04-30"
                          },
                          "programId": {
                            "type": "integer",
                            "example": 469,
                            "default": 0
                          },
                          "pointsType": {
                            "type": "string",
                            "example": "bill_regular"
                          },
                          "expiryType": {
                            "type": "string",
                            "example": "fixed"
                          }
                        }
                      }
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
              "code": "'https://eucrm.cc.capillarytech.com/v2/userGroup2/pointsExpirySchedule?externalId=bukl123&type=FLEET&startDate=2023-11-30&endDate=2025-11-30&getDataForAllPrograms=false&fetchEarliestExpiryOnly=true&limits=2&offsets=0'",
              "name": "Get points schedule"
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