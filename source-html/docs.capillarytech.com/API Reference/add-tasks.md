> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Tasks

Creates new store task and store task entry ( that is status for each executor ). You can also set task type, title, created by, assigned to, validity, status and reminder.

# Example request

```
curl --location 'https://eu.api.capillarytech.com/v1.1/task/add?format=json' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Cookie: _cfuvid=08EZxY9Or2B8ALQYCy2KIu2JflOvnkEE5pgDgelzkKo-1764321102770-0.0.1.1-604800000; _cfuvid=mvpc8lYYIPJgj_4atqeM5hzmEaaUv001h9ku7uOl1b4-1764322206029-0.0.1.1-604800000' \
--data '
{
    "root": {
    "task": [
      {
        "id": "98758396",
        "local_id": "213124334342",
        "title": "any title for this task",
        "body": "description of this task",
        "start_date": "2025-10-04 12:12:12",
        "end_date": "2026-10-10 12:12:12",
        "expiry_date": "2026-12-30 12:12:12",
        "type": "MEMO",
        "action": {
          "type": "sms",
          "template": "Hi {name}, Your points = {points}"
        },
        "creator": {
          "type": "associate",
          "id": "george.johnson0808"
        },
        "execute_by_all": "false",
        "executable_by_type": "cashier",
        "executable_by_ids": "44,33,22,54",
        "possible_statuses": "OPEN,IN_PROGRESS,CLOSED",
        "tags": "[“label” : “birthday task”, “priority” : “1” ]",
        "reminder": [
          {
            "create": "true",
            "time": "2026-11-24 13:35:35",
            "template": "…."
          }
        ],
        "entries": {
          "entry": [
            {
              "status": "AC"
            },
            {
              "status": "OPEN"
            }
          ]
        }
      }
    ]
  }
}
'
```

<br />

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
    "/task/add": {
      "post": {
        "summary": "Add Tasks",
        "description": "Creates new store task and store task entry ( that is status for each executor ). You can also set task type, title, created by, assigned to, validity, status and reminder.",
        "operationId": "add-tasks",
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
                      "task": [
                        {
                          "id": "-1",
                          "local_id": "213124334342",
                          "title": "any title for this task",
                          "body": "description of this task",
                          "start_date": "2016-10-4 12:12:12",
                          "end_date": "2016-10-10 12:12:12",
                          "expiry_date": "2016-10-10 12:12:12",
                          "type": "MEMO",
                          "action": {
                            "type": "sms",
                            "template": "Hi {name}, Your points = {points}"
                          },
                          "creator": {
                            "type": "manager",
                            "id": "55456456"
                          },
                          "target_type": "CASHIER/CUSTOMER",
                          "customer_ids": "15,82,443399",
                          "selected_audience_groups": "443452,432887",
                          "execute_by_all": "false",
                          "executable_by_type": "cashier",
                          "executable_by_ids": "44,33,22,54",
                          "possible_statuses": "OPEN,IN_PROGRESS,CLOSED",
                          "tags": "[“label” : “birthday task”, “priority” : “1” ]",
                          "reminder": [
                            {
                              "-create": "true",
                              "time": "2012-12-26 13:35:35",
                              "template": "…."
                            }
                          ],
                          "entries": {
                            "entry": [
                              {
                                "status": "CLOSE"
                              },
                              {
                                "status": "CLOSE"
                              }
                            ]
                          }
                        }
                      ]
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"tasks\": {\n            \"task\": {\n                \"id\": \"12\", \n                \"title\": \"Title\", \n                \"body\": \"Body\", \n                \"start_date\": \"20120820\", \n                \"end_date\": \"20120821\", \n                \"action\": {\n                    \"type\": \"Call\", \n                    \"template\": \"Hi {name}, Your points = {points}\"\n                }, \n                \"cashier_task\": \"false\", \n                \"comment\": [\n                    \"\", \n                    \"\", \n                    \"\"\n                ], \n                \"customer_task\": \"false\", \n                \"execute_by_all\": \"false\", \n                \"creator\": {\n                    \"type\": \"manager\", \n                    \"id\": \"55456456\", \n                    \"name\": \"name\"\n                }, \n                \"entries\": {\n                    \"entry\": [\n                        {\n                            \"entry_id\": \"\", \n                            \"customer_id\": \"\", \n                            \"associate_id\": \"\", \n                            \"associate_name\": \"assigned_to name\", \n                            \"store_id\": \"\", \n                            \"status\": \"OPEN\", \n                            \"type\": \"CUSTOMER/CASHIER\"\n                        }, \n                        {\n                            \"entry_id\": \"\", \n                            \"customer_id\": \"\", \n                            \"associate_id\": \"\", \n                            \"associate_name\": \"assigned_to name\", \n                            \"store_id\": \"\", \n                            \"status\": \"OPEN\", \n                            \"type\": \"CUSTOMER/CASHIER\"\n                        }\n                    ]\n                }, \n                \"reminders\": {\n                    \"reminder\": [\n                        {\n                            \"id\": \"15\", \n                            \"time\": \"2016-05-30 13:12:12\", \n                            \"created_by\": \"453345\", \n                            \"template\": \"Please note this too\", \n                            \"remindee_id\": \"1245333\"\n                        }, \n                        {\n                            \"id\": \"16\", \n                            \"time\": \"2016-05-30 13:12:12\", \n                            \"created_by\": \"453345\", \n                            \"template\": \"Please note this too\", \n                            \"remindee_id\": \"1245333\"\n                        }\n                    ]\n                }, \n                \"item_status\": {\n                    \"success\": \"true\", \n                    \"code\": \"200\", \n                    \"message\": \"Task Added Successfully\"\n                }\n            }\n        }\n    }\n}"
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
                                  "example": "12"
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
                                  "example": "20120820"
                                },
                                "end_date": {
                                  "type": "string",
                                  "example": "20120821"
                                },
                                "action": {
                                  "type": "object",
                                  "properties": {
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
                                      "example": "manager"
                                    },
                                    "id": {
                                      "type": "string",
                                      "example": "55456456"
                                    },
                                    "name": {
                                      "type": "string",
                                      "example": "name"
                                    }
                                  }
                                },
                                "entries": {
                                  "type": "object",
                                  "properties": {
                                    "entry": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "entry_id": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "customer_id": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "associate_id": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "associate_name": {
                                            "type": "string",
                                            "example": "assigned_to name"
                                          },
                                          "store_id": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "status": {
                                            "type": "string",
                                            "example": "OPEN"
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "CUSTOMER/CASHIER"
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "reminders": {
                                  "type": "object",
                                  "properties": {
                                    "reminder": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "string",
                                            "example": "15"
                                          },
                                          "time": {
                                            "type": "string",
                                            "example": "2016-05-30 13:12:12"
                                          },
                                          "created_by": {
                                            "type": "string",
                                            "example": "453345"
                                          },
                                          "template": {
                                            "type": "string",
                                            "example": "Please note this too"
                                          },
                                          "remindee_id": {
                                            "type": "string",
                                            "example": "1245333"
                                          }
                                        }
                                      }
                                    }
                                  }
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
                                      "example": "Task Added Successfully"
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