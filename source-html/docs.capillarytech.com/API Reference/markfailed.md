> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# markFailed

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
    "/rejectedTransactions/markFailed": {
      "put": {
        "summary": "markFailed",
        "description": "",
        "operationId": "markfailed",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "userId": {
                    "type": "integer",
                    "description": "id of customer for which we transaction add need to be retriggered.",
                    "format": "int64"
                  },
                  "transactionNumber": {
                    "type": "array",
                    "description": "list of billNumbers for which the txns were rejected, and for which user wants to retrigger txn add.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "errorCode": {
                    "type": "array",
                    "description": "list of error code for which user wants to retrigger all the rejected transactions.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "comments": {
                    "type": "string",
                    "description": "can pass the reason for marking the rejected txn permanent fail."
                  }
                }
              },
              "examples": {
                "Sample body": {
                  "value": {
                    "transactionNumber": [
                      "1684131125"
                    ],
                    "comments": "marking permanent failed"
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
                    "value": "{\n    \"result\": true,\n    \"warnings\": [],\n    \"errors\": []\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "result": {
                      "type": "boolean",
                      "example": true,
                      "default": true
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