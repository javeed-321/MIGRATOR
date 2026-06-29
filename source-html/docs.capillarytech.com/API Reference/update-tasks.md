> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Tasks

Updates the status of existing tasks and metadata details.

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
    "/task/update": {
      "post": {
        "summary": "Update Tasks",
        "description": "Updates the status of existing tasks and metadata details.",
        "operationId": "update-tasks",
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
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string"
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"SUCCESS\"\n    },\n    \"tasks\": {\n      \"task\": {\n        \"status\": \"CLOSED\",\n        \"start_date\": \"2016-08-20\",\n        \"end_date\": \"2016-08-22\",\n        \"expiry_date\": \"2016-08-22\",\n        \"item_status\": {\n          \"success\": \"true\",\n          \"code\": \"200\",\n          \"message\": \"Task Status Updated Successfully\"\n        }\n      }\n    }\n  }\n}"
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
                            "task": {
                              "type": "object",
                              "properties": {
                                "status": {
                                  "type": "string",
                                  "example": "CLOSED"
                                },
                                "start_date": {
                                  "type": "string",
                                  "example": "2016-08-20"
                                },
                                "end_date": {
                                  "type": "string",
                                  "example": "2016-08-22"
                                },
                                "expiry_date": {
                                  "type": "string",
                                  "example": "2016-08-22"
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
                                      "example": "Task Status Updated Successfully"
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
              "code": "{\n  \"root\": {\n    \"task\": [{\n      \"id\": \"15\",\n      \"status\": \"CLOSED\",\n      \"title\": \"Sample title\",\n      \"body\": \"sample body\",\n      \"start_date\": \"2016-08-20\",\n      \"end_date\": \"2016-08-22\",\n      \"expiry_date\": \"2016-08-22\",\n      \"action_type\": \"call\",\n      \"action_template\": \" template \",\n      \"tags\": \"\n\n[“label” : “birthday task”, “priority” : “1” ]\n\n\"\n    }]\n  }\n}",
              "name": "Sample body"
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