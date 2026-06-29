> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Subscription Log

Retrieves the log of subscription status changes of a customer.

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
    "/customers/{userId}/subscriptionStatusChangeLog": {
      "get": {
        "summary": "Get Customer Subscription Log",
        "description": "Retrieves the log of subscription status changes of a customer.",
        "operationId": "get-customer-subscription-log",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer to fetch subscription change log.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n    \"data\": [\n        {\n            \"orgUnitId\": -1,\n            \"source\": \"INSTORE\",\n            \"accountId\": \"\",\n            \"orgSourceId\": -1,\n            \"commChannelId\": 1,\n            \"commChannelType\": \"mobile\",\n            \"communicationCategoryId\": -1,\n            \"priority\": \"BULK\",\n            \"status\": true,\n            \"addedBy\": -1,\n            \"addedOn\": \"2021-12-27\",\n            \"reason\": \"Direct\"\n        },\n        {\n            \"orgUnitId\": -1,\n            \"source\": \"INSTORE\",\n            \"accountId\": \"\",\n            \"orgSourceId\": -1,\n            \"commChannelId\": 9,\n            \"commChannelType\": \"whatsapp\",\n            \"communicationCategoryId\": -1,\n            \"priority\": \"BULK\",\n            \"status\": true,\n            \"addedBy\": -1,\n            \"addedOn\": \"2021-12-27\",\n            \"reason\": \"Direct\"\n        },\n        {\n            \"orgUnitId\": -1,\n            \"source\": \"INSTORE\",\n            \"accountId\": \"\",\n            \"orgSourceId\": -1,\n            \"commChannelId\": 9,\n            \"commChannelType\": \"whatsapp\",\n            \"communicationCategoryId\": -1,\n            \"priority\": \"TRANS\",\n            \"status\": true,\n            \"addedBy\": -1,\n            \"addedOn\": \"2021-12-27\",\n            \"reason\": \"Direct\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                          "orgUnitId": {
                            "type": "integer",
                            "example": -1,
                            "default": 0
                          },
                          "source": {
                            "type": "string",
                            "example": "INSTORE"
                          },
                          "accountId": {
                            "type": "string",
                            "example": ""
                          },
                          "orgSourceId": {
                            "type": "integer",
                            "example": -1,
                            "default": 0
                          },
                          "commChannelId": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "commChannelType": {
                            "type": "string",
                            "example": "mobile"
                          },
                          "communicationCategoryId": {
                            "type": "integer",
                            "example": -1,
                            "default": 0
                          },
                          "priority": {
                            "type": "string",
                            "example": "BULK"
                          },
                          "status": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "addedBy": {
                            "type": "integer",
                            "example": -1,
                            "default": 0
                          },
                          "addedOn": {
                            "type": "string",
                            "example": "2021-12-27"
                          },
                          "reason": {
                            "type": "string",
                            "example": "Direct"
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
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "https://apac.api.capillarytech.com/v2/customers/987564/subscriptionStatusChangeLog"
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