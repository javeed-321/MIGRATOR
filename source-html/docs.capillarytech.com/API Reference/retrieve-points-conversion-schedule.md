> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve points conversion schedule

This API lets you retrieve points conversion schedule of a group.

> ❗️ Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

\{host}/v2/userGroup2/promisedPointsSchedule

# Query parameters

| Query Parameter         | Description                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- |
| primaryUserId           | The primary user ID for which the promised points schedule is being requested.        |
| type                    | The type of user group. This query parameter appears to be empty in the provided URL. |
| startDate               | The start date for the date range                                                     |
| endDate                 | The end date for the date range.                                                      |
| getDataForAllPrograms   | A boolean parameter to specify if data for all programs is needed.                    |
| fetchEarliestExpiryOnly | A boolean parameter to specify if only the earliest expiry data is needed.            |
| programId               | The ID of the program for which the promised points schedule is requested.            |
| limit                   | The maximum number of records to return per page.                                     |
| offset                  | The starting point in the list of records.                                            |

# Response parameters

| Parameter                  | Description                                                                     |
| -------------------------- | ------------------------------------------------------------------------------- |
| entityId                   | ID of the entity.                                                               |
| entityType                 | Type of entity.                                                                 |
| promisedPointsScheduleList | This is an array containing objects of promised points scheduled for the user.  |
| triggerBasedPointsList     | This array contains objects of points based on specific triggers or conditions. |
| warnings                   | This is an array that contains warning messages, if any.                        |
| points                     | The number of points either awarded or deducted based on the trigger/action     |
| programId                  | The identifier for the specific program that's causing the trigger.             |
| pointsType                 | The category or reason for these points.                                        |

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
    "/userGroup2/promisedPointsSchedule": {
      "get": {
        "summary": "Retrieve points conversion schedule",
        "description": "This API lets you retrieve points conversion schedule of a group.",
        "operationId": "retrieve-points-conversion-schedule",
        "parameters": [
          {
            "name": "primaryUserId",
            "in": "query",
            "description": "User ID of the member.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "Start date of the date range.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "End date of the date range.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "getDataForAllPrograms",
            "in": "query",
            "description": "A boolean parameter to specify if data for all programs is needed.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "programId",
            "in": "query",
            "description": "The ID of the program for which the promised points schedule is requested.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "The maximum number of records to return per page.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "The starting point in the list of records.",
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
                    "value": "{\n    \"entityId\": -21988,\n    \"entityType\": \"FLEET\",\n    \"promisedPointsScheduleList\": [],\n    \"triggerBasedPointsList\": [\n        {\n            \"points\": 33.33,\n            \"programId\": 1573,\n            \"pointsType\": \"line_item_regular\"\n        },\n        {\n            \"points\": -40,\n            \"programId\": 1573,\n            \"pointsType\": \"bill_promotions\"\n        },\n        {\n            \"points\": 0,\n            \"programId\": 1573,\n            \"pointsType\": \"customer_promotions\"\n        },\n        {\n            \"points\": -5,\n            \"programId\": 1573,\n            \"pointsType\": \"line_item_promotions\"\n        },\n        {\n            \"points\": 100,\n            \"programId\": 1573,\n            \"pointsType\": \"bill_regular\"\n        }\n    ],\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entityId": {
                      "type": "integer",
                      "example": -21988,
                      "default": 0
                    },
                    "entityType": {
                      "type": "string",
                      "example": "FLEET"
                    },
                    "promisedPointsScheduleList": {
                      "type": "array"
                    },
                    "triggerBasedPointsList": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "points": {
                            "type": "number",
                            "example": 33.33,
                            "default": 0
                          },
                          "programId": {
                            "type": "integer",
                            "example": 1573,
                            "default": 0
                          },
                          "pointsType": {
                            "type": "string",
                            "example": "line_item_regular"
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
              "code": "https://eucrm.cc.capillarytech.com/v2/userGroup2/promisedPointsSchedule?primaryUserId=98662653&type=&startDate=2023-7-25&endDate=2025-12-20&getDataForAllPrograms=true&fetchEarliestExpiryOnly=true&programId=1573&limits=5&offsets=0"
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