> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Org Configurations

Returns the organization configuration details in key and value pairs.

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
    "/organization/configs": {
      "get": {
        "summary": "Get Org Configurations",
        "description": "Returns the organization configuration details in key and value pairs.",
        "operationId": "get-org-configurations",
        "parameters": [
          {
            "name": "format",
            "in": "query",
            "description": "Preferred response format.",
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"organization\": {\n            \"configs\": {\n                \"config\": [\n                    {\n                        \"key\": \"CONF_USERS_IS_EMAIL_REQUIRED\", \n                        \"scopes\": \"ORG\", \n                        \"value_type\": \"NUMERIC\", \n                        \"modules\": \"LOYALTY\", \n                        \"entity_id\": \"146\", \n                        \"value\": \"0\"\n                    }, \n                    {\n                        \"key\": \"CONF_USERS_IS_EMAIL_UNIQUE\", \n                        \"scopes\": \"ORG\", \n                        \"value_type\": \"NUMERIC\", \n                        \"modules\": \"LOYALTY\", \n                        \"entity_id\": \"146\", \n                        \"value\": \"0\"\n                    }, \n                    {\n                        \"key\": \"CONF_LOYALTY_IS_BILL_NUMBER_REQUIRED\", \n                        \"scopes\": \"ORG\", \n                        \"value_type\": \"NUMERIC\", \n                        \"modules\": \"LOYALTY\", \n                        \"entity_id\": \"146\", \n                        \"value\": \"0\"\n                    }, \n                    {\n                        \"key\": \"CONF_LOYALTY_IS_BILL_NUMBER_UNIQUE\", \n                        \"scopes\": \"ORG\", \n                        \"value_type\": \"NUMERIC\", \n                        \"modules\": \"LOYALTY\", \n                        \"entity_id\": \"146\", \n                        \"value\": \"0\"\n                    }\n                ]\n            }\n        }\n    }\n}"
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
                              "example": "SUCCESS"
                            }
                          }
                        },
                        "organization": {
                          "type": "object",
                          "properties": {
                            "configs": {
                              "type": "object",
                              "properties": {
                                "config": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "key": {
                                        "type": "string",
                                        "example": "CONF_USERS_IS_EMAIL_REQUIRED"
                                      },
                                      "scopes": {
                                        "type": "string",
                                        "example": "ORG"
                                      },
                                      "value_type": {
                                        "type": "string",
                                        "example": "NUMERIC"
                                      },
                                      "modules": {
                                        "type": "string",
                                        "example": "LOYALTY"
                                      },
                                      "entity_id": {
                                        "type": "string",
                                        "example": "146"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": "0"
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