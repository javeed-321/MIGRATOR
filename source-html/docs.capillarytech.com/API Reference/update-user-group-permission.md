> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update permissions

API to update permissions of a member in a group.

This API enables you to update the user group permissions of a member in a group. There are four types of permissions that you can set for a member:

* allow\_points\_redemption
* allow\_points\_transfer
* block\_points\_redemption
* block\_points\_transfer

<br />

> 👍 Note
>
> For an overview on our APIs and for hands-on testing, refer to [API overview](https://docs.capillarytech.com/reference/apioverview) and [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) documentation.

# Prerequisites

* [ ] Basic or OAuth credentials
* [ ] Access to [Usergroup resource](https://docs.capillarytech.com/reference/api-index)

# Resource information

|               |                                    |
| :------------ | :--------------------------------- |
| URI           | /v2/userGroup2/members/permissions |
| HTTP method   | PUT                                |
| Pagination    | NA                                 |
| Rate limit    | NA                                 |
| Batch support | NA                                 |

# API endpoint example

`https://eu.api.capillarytech.com/v2/userGroup2/members/permissions?id=3839`

# Request query parameters

| Parameter (Parameters marked \* are mandatory) | Description                       |
| :--------------------------------------------- | :-------------------------------- |
| id\*                                           | User group identification number. |

# Request body parameters

```json
[{
    "userId": 109983515,
    "permissions":
    ["allow_points_transfer"]
}]
```

| Parameter (Parameters marked \* are mandatory) | Type   | Description                                                                                                                                                                     |
| :--------------------------------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId\*                                       | string | User ID (customer ID) of the group member you want to update the permission for.                                                                                                |
| permissions\*                                  | string | The permission list that you want to assign the user. Supported values:  `allow_points_redemption`, `allow_points_transfer`, `block_points_redemption`, `block_points_transfer` |

# Response parameters

```json
{
    "response": [
        {
            "entityId": {
                "userId": 109983515,
                "groupId": 3839,
                "permissions": [
                    "allow_points_transfer"
                ],
                "defaultGroup": false,
                "primaryMember": false,
                "active": false
            },
            "result": {
                "userId": 109983515,
                "groupId": 3839,
                "permissions": [
                    "allow_points_transfer"
                ],
                "defaultGroup": false,
                "primaryMember": false,
                "active": false
            },
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```

| **Parameter**       | **Description**                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------- |
| **response**        | An array containing the details of the response for each entity.                         |
| **entityId**        | An object holding identifier and status details of the member in a user group.           |
| - **userId**        | Customer ID of the user group member.                                                    |
| - **groupId**       | Identifier for the group to which the user belongs                                       |
| - **permissions**   | Array of permissions assigned to the user                                                |
| - **defaultGroup**  | Boolean indicating if this group is the user's default.                                  |
| - **primaryMember** | Boolean indicating if the user is a primary member of the group.                         |
| - **active**        | Boolean indicating if the user is active in this group.                                  |
| **result**          | Object echoing the relevant details of the entity, confirming the information processed. |
| **warnings**        | Array for potential warning messages.                                                    |
| **totalCount**      | Total number of entities processed                                                       |
| **failureCount**    | Total number of entities that failed to process                                          |

# Error codes

| Error code | Description                                                                     |
| :--------- | :------------------------------------------------------------------------------ |
| 1632       | Invalid user group member ID passed. Make sure that the user group ID is valid. |

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
    "/userGroup2/members/permissions": {
      "put": {
        "summary": "Update permissions",
        "description": "API to update permissions of a member in a group.",
        "operationId": "update-user-group-permission",
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "User group id",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "userId": {
                    "type": "string",
                    "description": "ID of the user for whom you want to update the permissions."
                  },
                  "permissions": {
                    "type": "string",
                    "description": "Permissions that you need to set for the user"
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
                  "Result": {
                    "value": "{}{\n    \"response\": [\n        {\n            \"entityId\": {\n                \"userId\": 109983515,\n                \"groupId\": 3839,\n                \"permissions\": [\n                    \"allow_points_transfer\"\n                ],\n                \"defaultGroup\": false,\n                \"primaryMember\": false,\n                \"active\": false\n            },\n            \"result\": {\n                \"userId\": 109983515,\n                \"groupId\": 3839,\n                \"permissions\": [\n                    \"allow_points_transfer\"\n                ],\n                \"defaultGroup\": false,\n                \"primaryMember\": false,\n                \"active\": false\n            },\n            \"warnings\": []\n        }\n    ],\n    \"totalCount\": 1,\n    \"failureCount\": 0\n}"
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
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v2/userGroup2/members/permissions?id=3839' \\\n--data '[{\n    \"userId\": 109983515,\n    \"permissions\":\n    [\"allow_points_transfer\"]\n}]'"
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