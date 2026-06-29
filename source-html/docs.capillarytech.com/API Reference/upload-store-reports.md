> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Upload Store Reports

Uploads store report from InStore to the main server.

Uploading Activity Log Files to the Server

* Use the headers mentioned.

Uploading Performance Log Files

* *

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
    "/store/reports": {
      "post": {
        "summary": "Upload Store Reports",
        "description": "Uploads store report from InStore to the main server.",
        "operationId": "upload-store-reports",
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
                "Sample POST Body": {
                  "value": {
                    "root": {
                      "report": {
                        "-type": "loyalty",
                        "store_code": "xx",
                        "total_transactions": "10",
                        "total_sales": "5000",
                        "footfall_count": "10",
                        "date": "2013-03-14 18:00:13",
                        "transaction_count": {
                          "regular": "5",
                          "not_interested": "5",
                          "total_enter_later": "4",
                          "enter_later_for_today": "1"
                        }
                      }
                    }
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"store\": {\n            \"report\": {\n                \"type\": \"loyalty\", \n                \"store_code\": \"xx\", \n                \"date\": \"2013-03-14 18:00:13\", \n                \"item_status\": {\n                    \"success\": \"true\", \n                    \"code\": \"900\", \n                    \"message\": \"store report uploaded successfully\"\n                }\n            }\n        }\n    }\n}\n"
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
                        "store": {
                          "type": "object",
                          "properties": {
                            "report": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "example": "loyalty"
                                },
                                "store_code": {
                                  "type": "string",
                                  "example": "xx"
                                },
                                "date": {
                                  "type": "string",
                                  "example": "2013-03-14 18:00:13"
                                },
                                "item_status": {
                                  "type": "object",
                                  "properties": {
                                    "success": {
                                      "type": "string",
                                      "example": "true"
                                    },
                                    "code": {
                                      "type": "string",
                                      "example": "900"
                                    },
                                    "message": {
                                      "type": "string",
                                      "example": "store report uploaded successfully"
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