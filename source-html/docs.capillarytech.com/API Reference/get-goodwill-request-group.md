> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Request Goodwill points (Group)

Use this API to allocate goodwill points to a user group.

This API will generate a request to the admin for the brand, to approve the request. Use the approve request API, to approve the request. Refer the API [here](https://docs.capillarytech.com/reference/approve-requests)

### Request Body Parameters (for group goodwill requests)

| Parameter             | Datatype | Description                               |
| --------------------- | -------- | ----------------------------------------- |
| type                  | enum     | Type of request. Value: `GOODWILL`.       |
| base\_type            | enum     | Sub-type of the request. Value: `POINTS.` |
| earning\_entity\_type | enum     | USERGROUP2                                |
| identifier\_value     | string   | Group id                                  |

```Text JSON
{
  "type": "GOODWILL",
  "baseType": "POINTS",
  "goodwillRequest": {
    "comments": "Customer is Good, award him 100 pts.",
    "points": 100,
    "reason": "POINTS_ISSUE"
  },
  "earningEntityType": "USERGROUP2",
  "userGroup2IdentificationInfo": {
    "identifierType": "id",
    "identifierValue": 3832764,
    "source": "INSTORE",
    "accountId": "565118794"
  },
  "comments": "request add via automation",
  "programId": 973
}

```

### Response Parameters

| Parameter | Datatype | Description                                   |
| --------- | -------- | --------------------------------------------- |
| id        | long     | Unique ID generated for the goodwill request. |
| warnings  | string   | Warnings if any.                              |

```Text JSON
{
    "createdId": 13044649,
    "warnings": []
}
```

## API specific Error codes

| Error Code | Description                                                                                                       | Reason                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| 400        | Input is invalid, Please check request parameters or input xml/json, No identifier provided to get loyalty users. | Input invalid in request parameters     |
| 93026      | Invalid Group Details Provided                                                                                    | Group id/details invalid or unsupported |
| 1101       | Invalid programId passed                                                                                          | Program Id invalid or unsupported       |
| 9006       | Request Type is invalid                                                                                           | Invalid/ unsupported request `type`     |
| 9008       | Request Base Type is invalid                                                                                      | Invalid/unsupported `basetype`          |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "request-v2",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "{host}/v2/requests",
      "variables": {
        "host": {
          "default": "host"
        }
      }
    }
  ],
  "security": [
    {}
  ],
  "paths": {
    "/": {
      "post": {
        "summary": "Request Goodwill points (Group)",
        "description": "Use this API to allocate goodwill points to a user group.",
        "operationId": "get-goodwill-request-group",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string",
                    "format": "json"
                  }
                }
              },
              "examples": {
                "Group Goodwill points": {
                  "value": {
                    "type": "GOODWILL",
                    "baseType": "POINTS",
                    "goodwillRequest": {
                      "comments": "Customer is Good, Award him 100 pts.",
                      "points": 100,
                      "reason": "POINTS_ISSUE"
                    },
                    "earningEntityType": "USERGROUP2",
                    "userGroup2IdentificationInfo": {
                      "identifierType": "id",
                      "identifierValue": 1901,
                      "source": "",
                      "accountId": ""
                    },
                    "comments": "request add via automation",
                    "programId": 469
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
                    "value": "{\n    \"createdId\": 1353092,\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "createdId": {
                      "type": "integer",
                      "example": 1353092,
                      "default": 0
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
                    "value": "{\n    \"errors\": [\n        {\n            \"status\": false,\n            \"message\": \"Input is invalid, Please check request parameters or input xml/json, No identifier provided to get loyalty users.\",\n            \"code\": 400\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "errors": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "message": {
                            "type": "string",
                            "example": "Input is invalid, Please check request parameters or input xml/json, No identifier provided to get loyalty users."
                          },
                          "code": {
                            "type": "integer",
                            "example": 400,
                            "default": 0
                          }
                        }
                      }
                    }
                  }
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