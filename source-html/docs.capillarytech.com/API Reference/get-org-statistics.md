> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Org Statistics

Returns the statistical information of the org which contains count of stores, zones, tills, loyalty customers, and products sold; average transaction amount, basket size and so on.

<Callout icon="❗️">
  Deprecated

This API is deprecated and no longer supported. Use Insights+ for the statistical information. </Callout>

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
    "/organization/statistics": {
      "get": {
        "summary": "Get Org Statistics",
        "description": "Returns the statistical information of the org which contains count of stores, zones, tills, loyalty customers, and products sold; average transaction amount, basket size and so on.",
        "operationId": "get-org-statistics",
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"organization\": {\n            \"statistics\": {\n                \"avg_basket\": \"1.07142857143\", \n                \"avg_transaction_value\": \"11796.5054945\", \n                \"customers\": \"223\", \n                \"stores\": \"2\", \n                \"products\": \"5\"\n            }\n        }\n    }\n}"
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
                            "statistics": {
                              "type": "object",
                              "properties": {
                                "avg_basket": {
                                  "type": "string",
                                  "example": "1.07142857143"
                                },
                                "avg_transaction_value": {
                                  "type": "string",
                                  "example": "11796.5054945"
                                },
                                "customers": {
                                  "type": "string",
                                  "example": "223"
                                },
                                "stores": {
                                  "type": "string",
                                  "example": "2"
                                },
                                "products": {
                                  "type": "string",
                                  "example": "5"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "http://apac.api.capillarytech.com/v1.1/organization/statistics?format=json",
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