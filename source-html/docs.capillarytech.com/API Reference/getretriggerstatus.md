> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# getReTriggerStatus

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "organization-2",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}.api.capillarytech.com/v2/organization",
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
        "type": "oauth2",
        "flows": {}
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/rejectedTransactions/retriggerStatus/{retriggerId}": {
      "get": {
        "summary": "getReTriggerStatus",
        "description": "",
        "operationId": "getretriggerstatus",
        "parameters": [
          {
            "name": "retriggerId",
            "in": "path",
            "description": "the retiggerId for which user wants to check the status of retrigger request. The retriggerId will be present in response",
            "schema": {
              "type": "integer",
              "format": "int32"
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
                  "Result": {
                    "value": "{\n    \"retriggerId\": 5,\n    \"status\": {\n        \"success\": 1,\n        \"fixed\": 0,\n        \"maxOut\": 0,\n        \"replayed\": 0\n    },\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "retriggerId": {
                      "type": "integer",
                      "example": 5,
                      "default": 0
                    },
                    "status": {
                      "type": "object",
                      "properties": {
                        "success": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "fixed": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "maxOut": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "replayed": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
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
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```