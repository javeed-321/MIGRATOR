> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Assign Lead

Lets you change the owner of an existing lead.

# Request URL

`http://{host}/v2/leads?{queryParams}={value}`

# Request Query Parameters

| Parameter  | Datatype | Description                                                                                                                                                                             |
| :--------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId     | long     | Get leads of a specific customer. Pass the user ID of the customer.                                                                                                                     |
| status     | enum     | Get leads of a specific status. Values: OPEN, ON\_HOLD, WON, LOST, DELETED.                                                                                                             |
| substatus  | string   | Get leads by lead sub-status.                                                                                                                                                           |
| owner      | string   | Fetch leads assigned to a specific associate. Pass the associate/staff ID (user id of the staff).                                                                                       |
| limit      | int      | Limit the number of results to retrieve.                                                                                                                                                |
| offset     | long     | Number of rows (as per the data entered into the table) that you want omit from showing.                                                                                                |
| entityType | enum     | Get leads of a specific entity. You also need to pass the entityCode accordingly. Pass entityType and e Values: ZONE, CONCEPT, STORE, TILL, STR\_SERVER, ADMIN\_USER, ASSOCIATE, STAFF. |
| entityCode | string   | Pass the code of the respective entityType. For example, if entityType is STORE, then entityCode should be store code by which you want to get leads.                                   |

## Additional Header

| Header   | Description                                                                                                                                                                                       |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| language | Specify the ISO code of a language to get extended field values in your preferred language. For example, `zh `for Chinese, `id `for Indonesian, `ar `for Arabic. English is the default language. |

# Response parameters

| Field                             | Datatype  | Description                                                      |
| --------------------------------- | --------- | ---------------------------------------------------------------- |
| id                                | integer   | Unique identifier for the lead.                                  |
| userId                            | integer   | The user's unique identifier.                                    |
| type                              | string    | The type of the lead.                                            |
| leadFor                           | string    | The product for which the lead is created.                       |
| status                            | string    | The status of the lead (e.g., ON\_HOLD, OPEN).                   |
| nextFollowUp                      | timestamp | The timestamp for the next follow up.                            |
| createdOn                         | timestamp | The timestamp when the lead was created.                         |
| createdBy                         | integer   | The user's unique identifier who created the lead.               |
| lastUpdatedOn                     | timestamp | The timestamp when the lead was last updated.                    |
| lastUpdatedBy                     | integer   | The user's unique identifier who last updated the lead.          |
| followUpDetails                   | object    | Details of follow-up activities for the lead.                    |
| statusLogDetails                  | object    | Log of status updates for the lead.                              |
| orgSourceId                       | integer   | Organization's source ID.                                        |
| extendedFields                    | object    | Additional, customizable fields.                                 |
| followUpDetails.id                | integer   | Unique identifier for the follow-up activity.                    |
| followUpDetails.userId            | integer   | The user's unique identifier for follow-up activities.           |
| followUpDetails.leadId            | integer   | The lead's unique identifier related to follow-up activities.    |
| followUpDetails.notes             | string    | Notes related to follow-up activities.                           |
| followUpDetails.createdBy         | integer   | The user's unique identifier who created the follow-up activity. |
| followUpDetails.createdOn         | timestamp | The timestamp when the follow-up activity was created.           |
| followUpDetails.followedUpBy      | integer   | The user's unique identifier who followed up the activity.       |
| followUpDetails.followedUpOn      | timestamp | The timestamp when the follow-up activity was followed up.       |
| followUpDetails.scheduledFollowUp | timestamp | The timestamp when the follow-up activity was scheduled.         |
| statusLogDetails.id               | integer   | Unique identifier for the status log.                            |
| statusLogDetails.userId           | integer   | The user's unique identifier for the status log.                 |
| statusLogDetails.leadId           | integer   | The lead's unique identifier related to the status log.          |
| statusLogDetails.status           | string    | Status related to the status log (e.g., OPEN, ON\_HOLD).         |
| statusLogDetails.createdBy        | integer   | The user's unique identifier who created the status log.         |
| statusLogDetails.createdOn        | timestamp | The timestamp when the status log was created.                   |
| statusLogDetails.reasonId         | integer   | Unique identifier for the reason in the status log.              |
| statusLogDetails.reason           | string    | Reason for the status update.                                    |
| extendedFields.trial\_status      | string    | Custom field for trial status.                                   |
| warnings                          | array     | Array of warning messages, if any.                               |
| errors                            | array     | Array of error messages, if any.                                 |

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