> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update User Group

Lets you update an existing user group details.

# Example request

```curl Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/userGroup2' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bWFkaH3MjU2YQ==' \
--data '{
    "id": "3962909",
    "externalId": "uat_ug_10_txn",
    "groupName": "uatUserGroup10Transactions",
    "maxGroupSize": 2    
}'
```
```curl Sample request with extended field
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/userGroup2' \
--data '{
    "id": "3918893",
    "externalId": "uat_ug_10_txn",
    "groupName": "uatUserGroup10Transactions", 
    "extendedFields": {   
        "usergroup2_automation_extended_field": "25"
    }
}'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Access group resource: Read and write access to the `User Group` resource

# Resource information

|                        |                |
| :--------------------- | :------------- |
| URI                    | /v2/userGroup2 |
| HTTP Method            | PUT            |
| Pagination             | No             |
| Batch support          | No             |
| Rate limit information | NA             |

# Request body parameters

| Query Parameter | Type    | Mandatory | Description                                                                                                                                                                                                                                                                      |
| --------------- | :------ | :-------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id              | integer | Yes       | Unique ID of the user group, identical to the entity ID.                                                                                                                                                                                                                         |
| externalId      | string  | No        | External ID of the group.                                                                                                                                                                                                                                                        |
| extendedFields  | array   | No        | Array containing the [extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields)  and their corresponding values, enabled for specific verticals within the organization.  Each extended field must be valid and created under the `usergroup2` entity. |
| groupName       | string  | Yes       | Name of the group. The maximum number of allowed characters is 50.                                                                                                                                                                                                               |
| maxGroupSize    | integer | No        | Maximum size (members) of the group. The maximum group size is as defined by the product configuration `CONF_MAX_FLEET_GROUP_SIZE`. If this configuration is not set, the default maximum size is 30,000.                                                                        |

# Example response

```json Sample response
{
    "id": 3962909,
    "externalId": "uat_ug_10_txn",
    "groupName": "uatUserGroup10Transactions",
    "maxGroupSize": 2,
    "extendedFields": {},
    "warnings": []
}
```
```json Sample response with extended field
{
    "id": 3918893,
    "externalId": "uat_ug_10_txn",
    "groupName": "uatUserGroup10Transactions",
    "maxGroupSize": 6,
    "extendedFields": {
        "ug_status": "Active",
        "usergroup2_automation_extended_field": 25
    },
    "warnings": []
}
```

# Response parameters

| Parameter                  | Description                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                         | Unique identifier for the entity.                                                                                                                                                                    |
| groupName                  | Name of the group being updated.                                                                                                                                                                     |
| maxGroupSize               | Maximum size (members) of the group.                                                                                                                                                                 |
| extendedFields             | An array containing the [extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields) and their corresponding values, enabled for specific verticals within the organisation. |
| entityType                 | Type of entity.                                                                                                                                                                                      |
| promisedPointsScheduleList | This is an array containing objects of promised points scheduled for the user.                                                                                                                       |
| triggerBasedPointsList     | This is an array containing objects of points based on specific triggers or conditions.                                                                                                              |
| warnings                   | This is an array that contains warning messages, if any.                                                                                                                                             |

# API-specific error codes

|       |                                                                 |
| :---- | :-------------------------------------------------------------- |
| 1632  | Group ID, externalD, or primary userID  is not valid            |
| 91016 | This is a warning indicating the extended fields are incorrect. |
| 91017 | This is a warning indicating the extended fields are incorrect. |

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
    "/userGroup2": {
      "put": {
        "summary": "Update User Group",
        "description": "Lets you update an existing user group details.",
        "operationId": "update-user-group",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "id",
                  "externalId"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "description": "Unique ID of the user group.",
                    "format": "int32"
                  },
                  "externalId": {
                    "type": "string",
                    "description": "External ID of the group."
                  },
                  "groupName": {
                    "type": "string",
                    "description": "Name of the group."
                  },
                  "maxGroupSize": {
                    "type": "integer",
                    "description": "Maximum size (members) of the group.",
                    "default": 30000,
                    "format": "int32"
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
                    "value": {
                      "id": 3962909,
                      "externalId": "uat_ug_10_txn",
                      "groupName": "uatUserGroup10Transactions",
                      "maxGroupSize": 2,
                      "extendedFields": {},
                      "warnings": []
                    }
                  },
                  "Sample reponse with extended fields": {
                    "value": {
                      "id": 3918893,
                      "externalId": "uat_ug_10_txn",
                      "groupName": "uatUserGroup10Transactions",
                      "maxGroupSize": 6,
                      "extendedFields": {
                        "ug_status": "Active",
                        "usergroup2_automation_extended_field": 25
                      },
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Sample Response",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 2361,
                          "default": 0
                        },
                        "groupName": {
                          "type": "string",
                          "example": "newName2"
                        },
                        "maxGroupSize": {
                          "type": "integer",
                          "example": 1110,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Sample reponse with extended fields",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 51334,
                          "default": 0
                        },
                        "groupName": {
                          "type": "string",
                          "example": "natwest14"
                        },
                        "maxGroupSize": {
                          "type": "integer",
                          "example": 110,
                          "default": 0
                        },
                        "extendedFields": {
                          "type": "object",
                          "properties": {
                            "usergroup2_automation_extended_field": {
                              "type": "integer",
                              "example": 35,
                              "default": 0
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    }
                  ]
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
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v2/userGroup2' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFkajU2YQ==' \\\n--data '{\n    \"id\": \"3962909\",\n    \"externalId\": \"uat_ug_10_txn\",\n    \"groupName\": \"uatUserGroup10Transactions\",\n    \"maxGroupSize\": 2    \n}'",
              "name": "Sample request"
            },
            {
              "language": "curl",
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v2/userGroup2' \\\n--data '{\n    \"id\": \"3918893\",\n    \"externalId\": \"uat_ug_10_txn\",\n    \"groupName\": \"uatUserGroup10Transactions\",\n    \"extendedFields\": {   \n        \"usergroup2_automation_extended_field\": \"25\"\n    }\n}'",
              "name": "Sample request with extended fields"
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