> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Remove group member

Removes a group member.

> ❗️ Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# Example request

```curl Sample request
curl --location --request DELETE 'https://eu.api.capillarytech.com/v2/userGroup2/3962910/leave?source=INSTORE&identifierName=mobile&identifierValue=918095467895' \
--header 'Authorization: Basic bWFkaHVfcmltYTowZjAwNmZlNGM4ZjFhNmRjMmI2ZDI1N2NkNzI3MjU2YQ==' \
--header 'Cookie: _cfuvid=vzCvOnzGrFLOd.qyWq3C1wR4U_d0NN8lePwtil_RTVU-1774957797145-0.0.1.1-604800000'
```

# Path parameters

| Path Parameter | Data type | Description          |
| -------------- | :-------- | -------------------- |
| groupId        | Long      | The ID of the group. |

# Query parameters

| Query parameters | Data type | Mandatory    | Description                                                                                                                             |
| :--------------- | :-------- | :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| source           | String    | required     | Source in which the customer identifier is registered.                                                                                  |
| accountId        | String    | not required | Unique account ID for sources with multiple accounts. Not applicable for the INSTORE source.                                            |
| identifierName   | String    | required     | Identifier type used to identify the customer. The supported identifiers are mobile, email, externalId, cardnumber, and cardExternalId. |
| identifierValue  | String    | required     | Value of the identifierName passed. For example, identifierName=cardExternalId\&identifierValue=cardUUID123                             |

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
    "/userGroup2/{groupId}/leave": {
      "delete": {
        "summary": "Remove group member",
        "description": "Removes a group member.",
        "operationId": "remove-group-member",
        "parameters": [
          {
            "name": "groupId",
            "in": "path",
            "description": "Unique ID of the group from which member needs to be deleted.",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the customer identifier is registered.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "INSTORE",
                "MARTJACK",
                "WECHAT",
                "ALL"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "Unique account ID for sources with multiple accounts. Not applicable for the INSTORE source.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier type used to identify the customer.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "cardnumber",
                "cardExternalId."
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the identifierName passed. For example, identifierName=cardExternalId&identifierValue=cardUUID123",
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
        "deprecated": false
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