> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Tasks Metadata

Returns the list of tasks created which contains information such as the title of the task, notes, created date, expiry date, type (customer/associate).

You can also use filters to limit or customize the results. You can also use store/task to retrieve task details.

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
    "/task/metadata": {
      "get": {
        "summary": "Get Tasks Metadata",
        "description": "Returns the list of tasks created which contains information such as the title of the task, notes, created date, expiry date, type (customer/associate).\n\nYou can also use filters to limit or customize the results. You can also use store/task to retrieve task details.",
        "operationId": "get-tasks-metadata",
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
          },
          {
            "name": "asoc",
            "in": "query",
            "description": "Returns tasks of all associates of the current store if assoc=true.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "action_type",
            "in": "query",
            "description": "Get tasks of a particular type. If `action_type=none`, then the tasks other than SMS, email, or call will be returned.",
            "schema": {
              "type": "string",
              "enum": [
                "sms",
                "email",
                "call",
                "none"
              ]
            }
          },
          {
            "name": "created_by",
            "in": "query",
            "description": "Unique associate ID to get tasks of a specific associate.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "created_by_type",
            "in": "query",
            "description": "Get tasks created either by manager or cashier.",
            "schema": {
              "type": "string",
              "enum": [
                "manager",
                "cashier"
              ]
            }
          },
          {
            "name": "execute_by_all",
            "in": "query",
            "description": "Returns the list of generic tasks - not to a specific associate or created for all associates",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "customer_task",
            "in": "query",
            "description": "Pass `true` to return the list of all customer tasks assigned to associates.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "start_id",
            "in": "query",
            "description": "Returns the list of tasks having task ids greater than or equal to the value passed.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "end_id",
            "in": "query",
            "description": "Returns the list of tasks having task ids less than or equal to the value passed.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "start_date",
            "in": "query",
            "description": "Returns the list of tasks created between the dates set on start_date and end_date. If only start_date is mentioned then the list of tasks created on or after that specified date is returned.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Returns the list of tasks created between the dates set on start_date and end_date. If only end_date is passed, the list of tasks created on or before the specified date is returned.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "batch_size",
            "in": "query",
            "description": "Limits the number of tasks to be displayed. For example, if `batch_size=10` then the details of only 10 tasks are returned",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "all",
            "in": "query",
            "description": "Returns all the tasks of the current organization if all=true. If all=false, only the current store tasks are returned. Default value: true",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "assoc_id",
            "in": "query",
            "description": "Unique ID of the associate to get the tasks assigned to a specific associate.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "customer_id",
            "in": "query",
            "description": "Returns the tasks created for a specific customer",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Get tasks of a specific status.",
            "schema": {
              "type": "string",
              "enum": [
                "OPEN",
                "IN_PROGRESS",
                "CLOSED"
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"tasks\": {\n            \"task\": {\n                \"id\": \"15\", \n                \"title\": \"Title\", \n                \"body\": \"Body\", \n                \"start_date\": \"2016-08-20\", \n                \"end_date\": \"2016-08-21\", \n                \"expiry_date\": \"2016-10-10 12:12:12\", \n                \"action\": {\n                    \"comment\": \"\", \n                    \"type\": \"Call\", \n                    \"template\": \"Hi {name}, Your points = {points}\"\n                }, \n                \"task_type\": \"MEMO/TASK\", \n                \"cashier_task\": \"false\", \n                \"comment\": [\n                    \"\", \n                    \"\"\n                ], \n                \"customer_task\": \"false\", \n                \"execute_by_all\": \"false\", \n                \"creator\": {\n                    \"type\": \"\", \n                    \"id\": \"\"\n                }, \n                \"possible_statuses\": {\n                    \"status\": [\n                        {\n                            \"label\": \"open\", \n                            \"value\": \"open\"\n                        }, \n                        {\n                            \"label\": \"processing\", \n                            \"value\": \"in_progress\"\n                        }\n                    ]\n                }, \n                \"tags\": \"[“label” : “birthday task”, “priority” : “1” ]\"\n            }\n        }\n    }\n}"
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
                                "id": {
                                  "type": "string",
                                  "example": "15"
                                },
                                "title": {
                                  "type": "string",
                                  "example": "Title"
                                },
                                "body": {
                                  "type": "string",
                                  "example": "Body"
                                },
                                "start_date": {
                                  "type": "string",
                                  "example": "2016-08-20"
                                },
                                "end_date": {
                                  "type": "string",
                                  "example": "2016-08-21"
                                },
                                "expiry_date": {
                                  "type": "string",
                                  "example": "2016-10-10 12:12:12"
                                },
                                "action": {
                                  "type": "object",
                                  "properties": {
                                    "comment": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "type": {
                                      "type": "string",
                                      "example": "Call"
                                    },
                                    "template": {
                                      "type": "string",
                                      "example": "Hi {name}, Your points = {points}"
                                    }
                                  }
                                },
                                "task_type": {
                                  "type": "string",
                                  "example": "MEMO/TASK"
                                },
                                "cashier_task": {
                                  "type": "string",
                                  "example": "false"
                                },
                                "comment": {
                                  "type": "array",
                                  "items": {
                                    "type": "string",
                                    "example": ""
                                  }
                                },
                                "customer_task": {
                                  "type": "string",
                                  "example": "false"
                                },
                                "execute_by_all": {
                                  "type": "string",
                                  "example": "false"
                                },
                                "creator": {
                                  "type": "object",
                                  "properties": {
                                    "type": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "id": {
                                      "type": "string",
                                      "example": ""
                                    }
                                  }
                                },
                                "possible_statuses": {
                                  "type": "object",
                                  "properties": {
                                    "status": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "label": {
                                            "type": "string",
                                            "example": "open"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "open"
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "tags": {
                                  "type": "string",
                                  "example": "[“label” : “birthday task”, “priority” : “1” ]"
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
              "code": "http://us.api.capillarytech.com/v1.1/task/metadata?format=xml&assoc=false&action_type=call&created_by=12435&created_by_type=cashier&execute_by_all=false&customer_task=true&start_id=3245&end_id=3345&start_date=2016-18-20+12:12:12&end_date=2016-12-29+12:11:45&batch_size=10",
              "name": "Sample Request URL"
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