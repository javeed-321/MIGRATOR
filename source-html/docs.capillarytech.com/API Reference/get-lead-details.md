> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Lead Details

Retrieves the details of leads created in an org. You can use filter parameters to get personalized results.

> 📘 To enable a specific language support for an org, contact the Platforms team to get the translations added to the database and activate translations for the org.

# Query parameter

| Parameter  | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
| userId     | Get leads of a specific customer. Pass the user ID of the customer.                      |
| status     | Get leads of a specific status.                                                          |
| substatus  | Get leads by lead sub-status.                                                            |
| owner      | Fetch leads assigned to a specific associate.                                            |
| limit      | Limit the number of results to retrieve.                                                 |
| offset     | Number of rows (as per the data entered into the table) that you want omit from showing. |
| entityType | Get leads of a specific entity. You also need to pass the entityCode accordingly.        |
| entityCode | Pass the code of the respective entityType.                                              |

# Response parameter

| Parameter        | Datatype | Description                                      |
| ---------------- | -------- | ------------------------------------------------ |
| id               | int      | Unique identifier for the lead.                  |
| userId           | long     | User ID associated with the lead.                |
| type             | string   | Type of the lead (e.g., SKU).                    |
| leadFor          | string   | Description of what the lead is for.             |
| status           | string   | Current status of the lead.                      |
| nextFollowUp     | string   | Scheduled date and time for the next follow-up.  |
| createdOn        | string   | Date and time when the lead was created.         |
| createdBy        | long     | User ID of the person who created the lead.      |
| lastUpdatedOn    | string   | Date and time when the lead was last updated.    |
| lastUpdatedBy    | long     | User ID of the person who last updated the lead. |
| followUpDetails  | array    | Details of the follow-up activities.             |
| statusLogDetails | array    | Details of the status log activities.            |
| orgSourceId      | int      | Organization source ID.                          |
| extendedFields   | object   | Additional extended fields related to the lead.  |

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
    "/leads": {
      "get": {
        "summary": "Assign Lead",
        "description": "Lets you change the owner of an existing lead.",
        "operationId": "assign-lead",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "description": "Get leads of a specific customer. Pass the user ID of the customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Get leads of a specific status. Values: OPEN, ON_HOLD, WON, LOST, DELETED.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "substatus",
            "in": "query",
            "description": "Get leads by lead sub-status.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "owner",
            "in": "query",
            "description": "Fetch leads assigned to a specific associate. Pass the associate/staff ID (user id of the staff).",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limit the number of results to retrieve.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Number of rows (as per the data entered into the table) that you want omit from showing.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entityType",
            "in": "query",
            "description": "Get leads of a specific entity. You also need to pass the entityCode accordingly. Pass entityType and e Values: ZONE, CONCEPT, STORE, TILL, STR_SERVER, ADMIN_USER, ASSOCIATE, STAFF.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entityCode",
            "in": "query",
            "description": "Pass the code of the respective entityType. For example, if entityType is STORE, then entityCode should be store code by which you want to get leads.",
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
                    "value": "{\n    \"data\": [\n        {\n            \"id\": 3,\n            \"userId\": 90486448,\n            \"type\": \"SKU\",\n            \"leadFor\": \"Denim\",\n            \"status\": \"ON_HOLD\",\n            \"nextFollowUp\": \"2018-10-05T02:30:00Z\",\n            \"createdOn\": \"2018-10-04T08:00:00Z\",\n            \"createdBy\": 75029724,\n            \"lastUpdatedOn\": \"2019-02-20T15:28:13Z\",\n            \"lastUpdatedBy\": 75029724,\n            \"followUpDetails\": [\n                {\n                    \"id\": 5,\n                    \"userId\": 90486448,\n                    \"leadId\": 3,\n                    \"notes\": \"notes 1\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:13Z\",\n                    \"followedUpBy\": 75029724,\n                    \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n                    \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n                },\n                {\n                    \"id\": 6,\n                    \"userId\": 90486448,\n                    \"leadId\": 3,\n                    \"notes\": \"notes 2\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:13Z\",\n                    \"followedUpBy\": 75029724,\n                    \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n                    \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n                }\n            ],\n            \"statusLogDetails\": [\n                {\n                    \"id\": 5,\n                    \"userId\": 90486448,\n                    \"leadId\": 3,\n                    \"status\": \"OPEN\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:13Z\",\n                    \"reasonId\": 3,\n                    \"reason\": \"APICALL\"\n                },\n                {\n                    \"id\": 6,\n                    \"userId\": 90486448,\n                    \"leadId\": 3,\n                    \"status\": \"ON_HOLD\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:13Z\",\n                    \"reasonId\": 4,\n                    \"reason\": \"NOT PICKING CALL\"\n                }\n            ],\n            \"orgSourceId\": -1,\n            \"extendedFields\": {\n                \"trial_status\": \"Not Done\"\n            }\n        },\n        {\n            \"id\": 4,\n            \"userId\": 90486448,\n            \"type\": \"SKU\",\n            \"leadFor\": \"CasualShirt\",\n            \"status\": \"ON_HOLD\",\n            \"nextFollowUp\": \"2018-10-05T02:30:00Z\",\n            \"createdOn\": \"2018-10-04T08:00:00Z\",\n            \"createdBy\": 75029724,\n            \"lastUpdatedOn\": \"2019-02-20T15:28:51Z\",\n            \"lastUpdatedBy\": 75029724,\n            \"followUpDetails\": [\n                {\n                    \"id\": 7,\n                    \"userId\": 90486448,\n                    \"leadId\": 4,\n                    \"notes\": \"notes 1\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:51Z\",\n                    \"followedUpBy\": 75029724,\n                    \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n                    \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n                },\n                {\n                    \"id\": 8,\n                    \"userId\": 90486448,\n                    \"leadId\": 4,\n                    \"notes\": \"notes 2\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:51Z\",\n                    \"followedUpBy\": 75029724,\n                    \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n                    \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n                }\n            ],\n            \"statusLogDetails\": [\n                {\n                    \"id\": 7,\n                    \"userId\": 90486448,\n                    \"leadId\": 4,\n                    \"status\": \"OPEN\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:51Z\",\n                    \"reasonId\": 3,\n                    \"reason\": \"APICALL\"\n                },\n                {\n                    \"id\": 8,\n                    \"userId\": 90486448,\n                    \"leadId\": 4,\n                    \"status\": \"ON_HOLD\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:28:51Z\",\n                    \"reasonId\": 4,\n                    \"reason\": \"NOT PICKING CALL\"\n                }\n            ],\n            \"orgSourceId\": -1,\n            \"extendedFields\": {\n                \"trial_status\": \"Not Done\"\n            }\n        },\n        {\n            \"id\": 5,\n            \"userId\": 90486448,\n            \"type\": \"SKU\",\n            \"leadFor\": \"Polo\",\n            \"status\": \"ON_HOLD\",\n            \"nextFollowUp\": \"2018-10-05T02:30:00Z\",\n            \"createdOn\": \"2018-10-04T08:00:00Z\",\n            \"createdBy\": 75029724,\n            \"lastUpdatedOn\": \"2019-02-20T15:29:29Z\",\n            \"lastUpdatedBy\": 75029724,\n            \"followUpDetails\": [\n                {\n                    \"id\": 9,\n                    \"userId\": 90486448,\n                    \"leadId\": 5,\n                    \"notes\": \"notes 1\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:29:29Z\",\n                    \"followedUpBy\": 75029724,\n                    \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n                    \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n                },\n                {\n                    \"id\": 10,\n                    \"userId\": 90486448,\n                    \"leadId\": 5,\n                    \"notes\": \"notes 2\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:29:29Z\",\n                    \"followedUpBy\": 75029724,\n                    \"followedUpOn\": \"2018-10-04T07:15:00Z\",\n                    \"scheduledFollowUp\": \"2018-10-04T07:00:00Z\"\n                }\n            ],\n            \"statusLogDetails\": [\n                {\n                    \"id\": 9,\n                    \"userId\": 90486448,\n                    \"leadId\": 5,\n                    \"status\": \"OPEN\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:29:29Z\",\n                    \"reasonId\": 3,\n                    \"reason\": \"APICALL\"\n                },\n                {\n                    \"id\": 10,\n                    \"userId\": 90486448,\n                    \"leadId\": 5,\n                    \"status\": \"ON_HOLD\",\n                    \"createdBy\": 75029724,\n                    \"createdOn\": \"2019-02-20T15:29:29Z\",\n                    \"reasonId\": 4,\n                    \"reason\": \"NOT PICKING CALL\"\n                }\n            ],\n            \"orgSourceId\": -1,\n            \"extendedFields\": {\n                \"trial_status\": \"Not Done\"\n            }\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                            "example": 3,
                            "default": 0
                          },
                          "userId": {
                            "type": "integer",
                            "example": 90486448,
                            "default": 0
                          },
                          "type": {
                            "type": "string",
                            "example": "SKU"
                          },
                          "leadFor": {
                            "type": "string",
                            "example": "Denim"
                          },
                          "status": {
                            "type": "string",
                            "example": "ON_HOLD"
                          },
                          "nextFollowUp": {
                            "type": "string",
                            "example": "2018-10-05T02:30:00Z"
                          },
                          "createdOn": {
                            "type": "string",
                            "example": "2018-10-04T08:00:00Z"
                          },
                          "createdBy": {
                            "type": "integer",
                            "example": 75029724,
                            "default": 0
                          },
                          "lastUpdatedOn": {
                            "type": "string",
                            "example": "2019-02-20T15:28:13Z"
                          },
                          "lastUpdatedBy": {
                            "type": "integer",
                            "example": 75029724,
                            "default": 0
                          },
                          "followUpDetails": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "integer",
                                  "example": 5,
                                  "default": 0
                                },
                                "userId": {
                                  "type": "integer",
                                  "example": 90486448,
                                  "default": 0
                                },
                                "leadId": {
                                  "type": "integer",
                                  "example": 3,
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
                                  "example": "2019-02-20T15:28:13Z"
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
                          "statusLogDetails": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "integer",
                                  "example": 5,
                                  "default": 0
                                },
                                "userId": {
                                  "type": "integer",
                                  "example": 90486448,
                                  "default": 0
                                },
                                "leadId": {
                                  "type": "integer",
                                  "example": 3,
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
                                  "example": "2019-02-20T15:28:13Z"
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
                          "orgSourceId": {
                            "type": "integer",
                            "example": -1,
                            "default": 0
                          },
                          "extendedFields": {
                            "type": "object",
                            "properties": {
                              "trial_status": {
                                "type": "string",
                                "example": "Not Done"
                              }
                            }
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
              "code": "https://eu.api.capillarytech.com/v2/leads?userId=90486448"
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