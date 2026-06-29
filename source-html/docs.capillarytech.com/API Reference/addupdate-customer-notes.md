> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add/Update Customer Notes

This API allows you to capture additional information about the customer.

## Request Body Parameters (Add)

| Parameter             | Datatype | Description                                                                                                                 |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| Customer identifier\* | string   | Pass any of the unique identifiers of the customer for whom you want to add notes (mobile no/email id/external id/user\_id) |
| date                  | date     | Date that you associate to the notes. By default, current date will be considered.                                          |
| description\*         | string   | Details or message of the note in a plain text format. The maximum number of characters supported is 255.                   |

### Request Body Parameters (Update)

| Parameter                              | Datatype | Description                                                                                                              |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| mobile/email/external\_id/user\_id\*\* | enum     | Unique identifier of the customer for which you want to update customer notes (mobile no/email id/external id/user\_id). |
| description\*                          | string   | New notes that you want to update with (plain text).                                                                     |
| id\*                                   | int      | Unique id of the customer note that you want to update.                                                                  |

<aside class="note">Parameters marked with * are mandatory.</aside>

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
    "/customer/notes": {
      "post": {
        "summary": "Add/Update Customer Notes",
        "description": "This API allows you to capture additional information about the customer.",
        "operationId": "addupdate-customer-notes",
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
                "Add Customer Notes": {
                  "value": {
                    "root": {
                      "customer": [
                        {
                          "user_id": "15",
                          "mobile": "44700900999",
                          "email": "catherine@example.com",
                          "external_id": "ct123",
                          "notes": {
                            "note": [
                              {
                                "date": "2016-05-05 15:15:00",
                                "description": "Likes Maggi"
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"Operation Successful\"\n    },\n    \"customer\": {\n      \"user_id\": \"15098\",\n      \"firstname\": \"Catherine\",\n      \"lastname\": \"Thomas\",\n      \"mobile\": \"44700900999\",\n      \"email\": \"catherine@example.com\",\n      \"external_id\": \"ct123\",\n      \"notes\": {\n        \"note\": {\n          \"id\":\"1\",\n          \"date\": \"2012-05-05 15:15:00\",\n          \"description\": \"Likes Maggi\"\n        }\n      },\n      \"item_status\": {\n        \"success\": true,\n        \"code\": 1000,\n        \"message\": \"Customer note added/updated successfully\",\n        \"warnings\": {\n            \"warning\": []\n            }\n      }\n    }\n  }\n}"
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
                              "example": "Operation Successful"
                            }
                          }
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "user_id": {
                              "type": "string",
                              "example": "15098"
                            },
                            "firstname": {
                              "type": "string",
                              "example": "Catherine"
                            },
                            "lastname": {
                              "type": "string",
                              "example": "Thomas"
                            },
                            "mobile": {
                              "type": "string",
                              "example": "44700900999"
                            },
                            "email": {
                              "type": "string",
                              "example": "catherine@example.com"
                            },
                            "external_id": {
                              "type": "string",
                              "example": "ct123"
                            },
                            "notes": {
                              "type": "object",
                              "properties": {
                                "note": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "string",
                                      "example": "1"
                                    },
                                    "date": {
                                      "type": "string",
                                      "example": "2012-05-05 15:15:00"
                                    },
                                    "description": {
                                      "type": "string",
                                      "example": "Likes Maggi"
                                    }
                                  }
                                }
                              }
                            },
                            "item_status": {
                              "type": "object",
                              "properties": {
                                "success": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "code": {
                                  "type": "integer",
                                  "example": 1000,
                                  "default": 0
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Customer note added/updated successfully"
                                },
                                "warnings": {
                                  "type": "object",
                                  "properties": {
                                    "warning": {
                                      "type": "array"
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
              "text/plain": {
                "examples": {
                  "Update notes": {
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"Success\",\n      \"total\": \"1\",\n      \"success_count\": \"1\"\n    },\n    \"customer\": {\n      \"user_id\": \"29361138\",\n      \"firstname\": \"Catherine\",\n      \"lastname\": \"Thomas\",\n      \"mobile\": \"44700900999\",\n      \"email\": \"catherine@example.com\",\n      \"external_id\": \"ext12\",\n      \"notes\": {\n        \"note\": [\n          {\n            \"id\": \"8378\",\n            \"date\": \"2017-11-05 15:15:00\",\n            \"description\": \"Likes jeans\"\n          },\n          {\n            \"id\": \"8379\",\n            \"date\": \"2017-10-05 15:15:00\",\n            \"description\": \"Likes new arrivals\"\n          }\n        ]\n      },\n      \"item_status\": {\n        \"success\": \"true\",\n        \"code\": \"1000\",\n        \"message\": \"Customer note updated successfully\"\n      }\n    }\n  }\n}"
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
                              "example": "Success"
                            },
                            "total": {
                              "type": "string",
                              "example": "1"
                            },
                            "success_count": {
                              "type": "string",
                              "example": "1"
                            }
                          }
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "user_id": {
                              "type": "string",
                              "example": "29361138"
                            },
                            "firstname": {
                              "type": "string",
                              "example": "Catherine"
                            },
                            "lastname": {
                              "type": "string",
                              "example": "Thomas"
                            },
                            "mobile": {
                              "type": "string",
                              "example": "44700900999"
                            },
                            "email": {
                              "type": "string",
                              "example": "catherine@example.com"
                            },
                            "external_id": {
                              "type": "string",
                              "example": "ext12"
                            },
                            "notes": {
                              "type": "object",
                              "properties": {
                                "note": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string",
                                        "example": "8378"
                                      },
                                      "date": {
                                        "type": "string",
                                        "example": "2017-11-05 15:15:00"
                                      },
                                      "description": {
                                        "type": "string",
                                        "example": "Likes jeans"
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
                                  "example": "1000"
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Customer note updated successfully"
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