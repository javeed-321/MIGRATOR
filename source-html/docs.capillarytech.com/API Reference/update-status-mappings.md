> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Status Mappings

Lets you update mappings between the predefined and the user-defined statuses.

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
    "/task/statusmapping": {
      "post": {
        "summary": "Update Status Mappings",
        "description": "Lets you update mappings between the predefined and the user-defined statuses.",
        "operationId": "update-status-mappings",
        "parameters": [
          {
            "name": "format",
            "in": "query",
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"SUCCESS\"\n    },\n    \"tasks\": {\n      \"task_statuses\": {\n        \"status\": [\n          {\n            \"id\": \"1\",\n            \"value\": \"OPEN\",\n            \"label\": \"NEW\",\n            \"item_status\": {\n              \"success\": \"true\",\n              \"code\": \"200\",\n              \"message\": \"status added successfully\"\n            }\n          },\n          {\n            \"id\": \"2\",\n            \"value\": \"CLOSED\",\n            \"label\": \"FINISHED\",\n            \"item_status\": {\n              \"success\": \"true\",\n              \"code\": \"200\",\n              \"message\": \"status added successfully\"\n            }\n          },\n          {\n            \"id\": \"3\",\n            \"value\": \"NONE\",\n            \"label\": \"PROCESSING_START\",\n            \"item_status\": {\n              \"success\": \"true\",\n              \"code\": \"200\",\n              \"message\": \"status added successfully\"\n            }\n          },\n          {\n            \"id\": \"4\",\n            \"value\": \"NONE\",\n            \"label\": \"PROCESSING_DONE\",\n            \"item_status\": {\n              \"success\": \"true\",\n              \"code\": \"200\",\n              \"message\": \"status added successfully\"\n            }\n          }\n        ]\n      }\n    }\n  }\n}"
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
                        "tasks": {
                          "type": "object",
                          "properties": {
                            "task_statuses": {
                              "type": "object",
                              "properties": {
                                "status": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string",
                                        "example": "1"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": "OPEN"
                                      },
                                      "label": {
                                        "type": "string",
                                        "example": "NEW"
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
                                            "example": "200"
                                          },
                                          "message": {
                                            "type": "string",
                                            "example": "status added successfully"
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
              "code": "{\n  \"root\": {\n    \"status\": [\n      {\n        \"value\": \"OPEN\",\n        \"label\": \"NEW\"\n      },\n      {\n        \"id\": \"2\",\n        \"value\": \"CLOSED\",\n        \"label\": \"FINISHED\"\n      },\n      {\n        \"id\": \"3\",\n        \"value\": \"NONE\",\n        \"label\": \"PROCESS_START\"\n      },\n      {\n        \"value\": \"NONE\",\n        \"label\": \"PROCESS_DONE\"\n      }\n    ]\n  }\n}",
              "name": "Sample post"
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