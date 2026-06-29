> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Staff of Store/Zone

Retrieve registered staff users of a specific store or zone. Accessible only to admin users.

<br />

<Callout icon="❗️" theme="error">
  All Staff related APIs are deprected and cannot be used any more.
</Callout>

# Query parameter

| Parameter | Description                                                                 |
| :-------- | :-------------------------------------------------------------------------- |
| zoneCode  | Get registered staff of a specific zone. Pass the respective zone code.     |
| storeCode | Fetch registered users of a specific store. Pass the respective store code. |

# Response parameter

| Parameter | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| username  | The username associated with the entity.                            |
| mobile    | Mobile number of the user.                                          |
| email     | Email ID of the user.                                               |
| storeCode | The code representing a specific store associated with the user.    |
| zoneCode  | Code representing a specific zone associated with the user.         |
| id        | An identifier or ID related to a specific entity in the system.     |
| warnings  | A list containing any warnings related to the operation or request. |
| errors    | A list containing any errors related to the operation or request.   |
| success   | Indicates whether the operation or request was successful.          |

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
    "/staff/getUsersList": {
      "get": {
        "summary": "Get Staff of Store/Zone",
        "description": "Retrieve registered staff users of a specific store or zone. Accessible only to admin users.",
        "operationId": "get-staff-of-storezone",
        "parameters": [
          {
            "name": "zoneCode",
            "in": "query",
            "description": "Get registered staff of a specific zone. Pass the respective zone code.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "storeCode",
            "in": "query",
            "description": "Fetch registered users of a specific store. Pass the respective store code.",
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
                    "value": "{\n\n    \"entity\": [\n\n        {\n\n            \"username\": \"timjames\",\n\n            \"mobile\": \"91841400000\",\n\n            \"storeCode\": \"store1\",\n\n            \"zoneCode\": \"root\",\n\n            \"id\": 50007775\n\n        },\n\n        {\n\n            \"username\": \"tomsawyer\",\n\n            \"mobile\": \"91939511111\",\n\n            \"storeCode\": \"store1\",\n\n            \"zoneCode\": \"root\",\n\n            \"id\": 50007777\n\n        },\n\n        {\n\n            \"username\": \"sivaru\",\n\n            \"mobile\": \"919395222222\",\n\n            \"email\": \"tom.swayer@capillarytech.com\",\n\n            \"storeCode\": \"store1\",\n\n            \"zoneCode\": \"root\",\n\n            \"id\": 50007782\n\n        }\n\n    ],\n\n    \"warnings\": [\n\n    ],\n\n    \"errors\": [\n\n    ],\n\n    \"success\": true\n\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "username": {
                            "type": "string",
                            "example": "timjames"
                          },
                          "mobile": {
                            "type": "string",
                            "example": "91841400000"
                          },
                          "storeCode": {
                            "type": "string",
                            "example": "store1"
                          },
                          "zoneCode": {
                            "type": "string",
                            "example": "root"
                          },
                          "id": {
                            "type": "integer",
                            "example": 50007775,
                            "default": 0
                          }
                        }
                      }
                    },
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
              "language": "curl",
              "code": "https://us.api.capillarytech.com/v2/staff/getUsersList?storeCode=st123",
              "name": "Sample Request URL"
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