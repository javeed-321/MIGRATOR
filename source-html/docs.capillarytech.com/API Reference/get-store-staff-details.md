> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Store Staff Details

Returns the entire staff details of the current organization. Staff could be associates or managers.

## Request query parameters

| Parameter Name | Data Type | Description                                                            |
| :------------- | :-------- | :--------------------------------------------------------------------- |
| type\_value    | Enum      | Type of staff details to return. Supported Values : ASSOCIATE, MANAGER |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "customer-v11",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v1.1",
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
    "/store/staff": {
      "get": {
        "summary": "Get Store Staff Details",
        "description": "Returns the entire staff details of the current organization. Staff could be associates or managers.",
        "operationId": "get-store-staff-details",
        "parameters": [
          {
            "name": "type_value",
            "in": "query",
            "description": "Type of staff details to return.",
            "schema": {
              "type": "string",
              "enum": [
                "ASSOCIATE",
                "MANAGER"
              ]
            }
          },
          {
            "name": "format",
            "in": "query",
            "description": "Format of the response object.",
            "schema": {
              "type": "string",
              "enum": [
                "xml",
                "json"
              ]
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"success\"\n        }, \n        \"store\": {\n            \"staff\": {\n                \"user\": [\n                    {\n                        \"id\": \"2313\", \n                        \"type\": \"ASSOCIATE\", \n                        \"code\": \"marks12131\", \n                        \"firstname\": \"George\", \n                        \"lastname\": \"Milton\", \n                        \"mobile\": \"447009000693\", \n                        \"email\": \"george.milton@example.com\", \n                        \"store_id\": \"232234\", \n                        \"store_code\": \"store.server\"\n                    }, \n                    {\n                        \"id\": \"2314\", \n                        \"type\": \"ASSOCIATE\", \n                        \"code\": \"marks12132\", \n                        \"firstname\": \"George\", \n                        \"lastname\": \"Milton\", \n                        \"mobile\": \"447009000693\", \n                        \"email\": \"george.milton@example.com\", \n                        \"store_id\": \"232234\", \n                        \"store_code\": \"store.server\"\n                    }, \n                    {\n                        \"id\": \"2315\", \n                        \"type\": \"ASSOCIATE\", \n                        \"code\": \"marks12133\", \n                        \"firstname\": \"George\", \n                        \"lastname\": \"Milton\", \n                        \"mobile\": \"447009000693\", \n                        \"email\": \"george.milton@example.com\", \n                        \"store_id\": \"232234\", \n                        \"store_code\": \"store.server\"\n                    }\n                ]\n            }\n        }\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "string",
                              "example": "true"
                            },
                            "code": {
                              "type": "string",
                              "example": "200"
                            },
                            "message": {
                              "type": "string",
                              "example": "success"
                            }
                          }
                        },
                        "store": {
                          "type": "object",
                          "properties": {
                            "staff": {
                              "type": "object",
                              "properties": {
                                "user": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string",
                                        "example": "2313"
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "ASSOCIATE"
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "marks12131"
                                      },
                                      "firstname": {
                                        "type": "string",
                                        "example": "George"
                                      },
                                      "lastname": {
                                        "type": "string",
                                        "example": "Milton"
                                      },
                                      "mobile": {
                                        "type": "string",
                                        "example": "447009000693"
                                      },
                                      "email": {
                                        "type": "string",
                                        "example": "george.milton@example.com"
                                      },
                                      "store_id": {
                                        "type": "string",
                                        "example": "232234"
                                      },
                                      "store_code": {
                                        "type": "string",
                                        "example": "store.server"
                                      }
                                    }
                                  }
                                }
                              }
                            }
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "http://us.api.capillarytech.com/v1.1/store/staff?format=json&type=ASSOCIATE\n",
              "name": "Sample request"
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
    "headers": [
      {
        "key": "Content-Type",
        "value": "application/json"
      },
      {
        "key": "Accept",
        "value": "application/json"
      }
    ],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```