> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Org Payment Modes

Returns the details of payment modes configured for your organization.

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
    "/organization/tenders": {
      "get": {
        "summary": "Get Org Payment Modes",
        "description": "Returns the details of payment modes configured for your organization.",
        "operationId": "get-org-payment-modes",
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
          },
          {
            "name": "attribute_name",
            "in": "query",
            "description": "Retrieves the details of all tenders which contains the specific attribute name.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "attribute",
            "in": "query",
            "description": "Retrieves attributes of the payment modes if attribute=true.",
            "schema": {
              "type": "boolean"
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"SUCCESS\"\n    },\n    \"organization\": {\n      \"tenders\": {\n        \"count\": \"6\",\n        \"tender\": [\n          {\n            \"name\": \"CA\",\n            \"canonical_name\": \"CASH\",\n            \"description\": \"payment via cash\"\n          },\n          {\n            \"name\": \"Card\",\n            \"canonical_name\": \"CARD\",\n            \"description\": \"payment via card, it can be debit/credit card\"\n          },\n          {\n            \"name\": \"Check\",\n            \"canonical_name\": \"CHECK\",\n            \"description\": \"payment via cheque\"\n          },\n          {\n            \"name\": \"GIFT\",\n            \"canonical_name\": \"POINTS\",\n            \"description\": \"payment via points\"\n          },\n          {\n            \"name\": \"COD\",\n            \"canonical_name\": \"CASH_ON_DELIVERY\",\n            \"description\": \"Cash on delivery\"\n          },\n          {\n            \"name\": \"Credit\",\n            \"canonical_name\": \"CREDIT\",\n            \"description\": \"no payment, purchase is on credit\"\n          }\n        ]\n      }\n    }\n  }\n}"
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
                            "tenders": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "string",
                                  "example": "6"
                                },
                                "tender": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string",
                                        "example": "CA"
                                      },
                                      "canonical_name": {
                                        "type": "string",
                                        "example": "CASH"
                                      },
                                      "description": {
                                        "type": "string",
                                        "example": "payment via cash"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "http://us.api.capillarytech.com/v1.1/organization/tenders",
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