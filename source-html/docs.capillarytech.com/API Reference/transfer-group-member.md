> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Transfer Group Member

Lets you transfer members from one group to another.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/userGroup2/transfer' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bWFkaHVfcmI3MjU2YQ==' \
--header 'Cookie: _cfuvid=vzCvOnzGrFLOd.qyWq3C1wR4U_d0NN8lePwtil_RTVU-1774957797145-0.0.1.1-604800000' \
--data '{
    "leaveGroupId": "3962910",
    "joinGroupId": "3963208",
    "userIds": [568563144]
}
'
```

# Body parameters

| Body parameters | Data type | Mandatory | Description                                                                                         |
| :-------------- | :-------- | :-------- | :-------------------------------------------------------------------------------------------------- |
| leaveGroupId    | Long      | yes       | Group ID from which the customer needs to be removed. Ensure the customer is a member of the group. |
| joinGroupId     | Long      | yes       | Group ID to which the customer needs to join.                                                       |
| userIds         | Array     | yes       | Unique ID of the customers that you want to transfer to the new group.                              |

# Example response

```json Sample response
{
    "warnings": [],
    "errors": [],
    "success": true
}
```

# Response parameters

| Parameter | Description                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------- |
| warnings  | This is an array containing any warning messages generated during the processing of the request.          |
| errors    | This is an array containing any error messages that were generated if the request failed for some reason. |
| success   | This is a boolean value indicating whether the request was successful.                                    |

# Error code

| Error code | Description                                    |
| :--------- | :--------------------------------------------- |
| 403        | `leaveGroupId` and `joinGroupId` is mandatory. |
| 1619       | group id invalid.                              |
| 1620       | user id does not belong to group id.           |
| 1624       | group transfer not allowed for primary member. |

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
    "/userGroup2/transfer": {
      "post": {
        "summary": "Transfer Group Member",
        "description": "Lets you transfer members from one group to another.",
        "operationId": "transfer-group-member",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "leaveGroupId",
                  "joinGroupId",
                  "userIds"
                ],
                "properties": {
                  "leaveGroupId": {
                    "type": "integer",
                    "description": "Group ID from which the customer needs to be removed. Ensure the the customer is a member of the group.",
                    "format": "int32"
                  },
                  "joinGroupId": {
                    "type": "integer",
                    "description": "Group ID to which the customer needs to join.",
                    "format": "int32"
                  },
                  "userIds": {
                    "type": "array",
                    "description": "Unique ID of the customers that you want to transfer to the new group.",
                    "items": {
                      "type": "integer",
                      "format": "int64"
                    }
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
                      "warnings": [],
                      "errors": [],
                      "success": true
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
                      "type": "array"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true,
                      "default": true
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/userGroup2/transfer' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFka3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=vzCvOnzGrFLOd.qyWq3C1wR4U_d0NN8lePwtil_RTVU-1774957797145-0.0.1.1-604800000' \\\n--data '{\n    \"leaveGroupId\": \"3962910\",\n    \"joinGroupId\": \"3963208\",\n    \"userIds\": [568563144]\n}\n'",
              "name": "Sample request"
            }
          ],
          "samples-languages": [
            "shell"
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