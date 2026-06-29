> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Request Details

This API allows you to retrieve up to 50 records containing goodwill and change identifier requests.  It is the sub-set of request/logs API. 

You can filter requests by customer and request type such as change identifier, customer merge, mobile reallocation and good will requests. This API supports various filters to fetch requests.

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
    "/request/get": {
      "get": {
        "summary": "Get Request Details",
        "description": "This API allows you to retrieve up to 50 records containing goodwill and change identifier requests.  It is the sub-set of request/logs API. \n\nYou can filter requests by customer and request type such as change identifier, customer merge, mobile reallocation and good will requests. This API supports various filters to fetch requests.",
        "operationId": "get-request-details",
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
            "name": "start_date",
            "in": "query",
            "description": "Get requests added on or after a specific date (YYYY-MM-DD). To get requests for a specific duration, pass the date-range in start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Get requests added before a specific date (YYYY-MM-DD). To get requests for a specific duration, pass the date-range in start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "mobile",
            "in": "query",
            "description": "Mobile number of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "email",
            "in": "query",
            "description": "Email ID of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "external_id",
            "in": "query",
            "description": "External ID  of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "Unique ID of the customer to get requests of a specific customer.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "card_number",
            "in": "query",
            "description": "Card number of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "card_external_id",
            "in": "query",
            "description": "External ID of the customer's card to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Filters requests by request status.",
            "schema": {
              "type": "string",
              "enum": [
                "APPROVED",
                "PENDING",
                "REJECTED"
              ]
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Filters requests of a specific type.",
            "schema": {
              "type": "string",
              "enum": [
                "HANGE_IDENTIFIER",
                "GOODWILL",
                "TRANSACTION_UPDATE"
              ]
            }
          },
          {
            "name": "base_type",
            "in": "query",
            "description": "Sub type of the specified type.",
            "schema": {
              "type": "string",
              "enum": [
                "MOBILE",
                "EXTERNAL_ID",
                "EMAIL",
                "MERGE",
                "ADDRESS",
                "COUPONS",
                "POINTS"
              ]
            }
          },
          {
            "name": "start_id",
            "in": "query",
            "description": "Get requests starting from a specific request ID. Use both `start_id` and `end_id` to get requests in a specific request ID range.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "end_id",
            "in": "query",
            "description": "Get requests until a specific request ID. Use both `start_id` and `end_id` to get requests in a specific request ID range.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limit the number of entries to retrieve.",
            "schema": {
              "type": "integer",
              "format": "int32"
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"SUCCESS\"\n    },\n    \"requests\": {\n      \"count\": \"531\",\n      \"rows\": \"30\",\n      \"goodwill\": {\n        \"id\": \"10039\",\n        \"type\": \"GOODWILL\",\n        \"status\": \"PENDING\",\n        \"base_type\": \"COUPON\",\n        \"reason\": \"BILL_ISSUE\",\n        \"comments\": \"customer is angry\",\n        \"customer\": {\n          \"firstname\": \"Tom\",\n          \"lastname\": \"Sawyer\",\n          \"email\": \"Tom.sawyer@example.com\",\n          \"mobile\": \"44700900000\",\n          \"external_id\": \"ts1234\",\n          \"fraud_status\": \"CONFIRMED\"\n        },\n        \"added_on\": \"2016-02-12T13:32:42+05:30\",\n        \"added_by\": {\n          \"code\": \"Tom.store\",\n          \"name\": \"Tom store\"\n        },\n        \"updated_by\": {\n\n        }\n      },\n      \"change_identifier\": [\n        {\n          \"id\": \"10034\",\n          \"type\": \"CHANGE_IDENTIFIER\",\n          \"status\": \"REJECTED\",\n          \"base_type\": \"EMAIL\",\n          \"new_value\": \"Tom@Tom2.com\",\n          \"old_value\": \"Tom@Tom.com\",\n          \"customer\": {\n            \"firstname\": \"Tom\",\n            \"lastname\": \"Sawyer\",\n            \"email\": \"Tom@Tom2.com\",\n            \"mobile\": \"919740798372\",\n            \"external_id\": \"XYPZ001\",\n            \"fraud_status\": \"CONFIRMED\"\n          },\n          \"added_on\": \"2016-02-12T05:30:00+05:30\",\n          \"last_action_on\": \"2014-02-21T05:30:00+05:30\",\n          \"added_by\": {\n            \"code\": \"Tom.store\",\n            \"name\": \"Tom store\"\n          },\n          \"updated_by\": {\n            \"code\": \"admin\",\n            \"name\": \"Mr Admin\"\n          }\n        },\n        {\n          \"id\": \"10035\",\n          \"type\": \"CHANGE_IDENTIFIER\",\n          \"status\": \"REJECTED\",\n          \"base_type\": \"EMAIL\",\n          \"new_value\": \"tom.sawyer@example.com\",\n          \"old_value\": \"tom.tom@example.com\",\n          \"customer\": {\n            \"firstname\": \"Tom\",\n            \"lastname\": \"Sawyer\",\n            \"email\": \"Tom.sawyer@example.com\",\n            \"mobile\": \"44700900000\",\n            \"external_id\": \"XYPZ001\",\n            \"fraud_status\": \"CONFIRMED\"\n          },\n          \"added_on\": \"2014-01-20T05:30:00+05:30\",\n          \"last_action_on\": \"2016-02-01T05:30:00+05:30\",\n          \"added_by\": {\n            \"code\": \"Tom.store\",\n            \"name\": \"Tom store\"\n          },\n          \"updated_by\": {\n            \"code\": \"admin007\",\n            \"name\": \"Mr Admin\"\n          }\n        }\n      ],\n      \"item_status\": {\n        \"success\": \"true\",\n        \"code\": \"9000\",\n        \"message\": \"Request retrieved successfully\"\n      }\n    }\n  }\n}"
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
                        "requests": {
                          "type": "object",
                          "properties": {
                            "count": {
                              "type": "string",
                              "example": "531"
                            },
                            "rows": {
                              "type": "string",
                              "example": "30"
                            },
                            "goodwill": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "example": "10039"
                                },
                                "type": {
                                  "type": "string",
                                  "example": "GOODWILL"
                                },
                                "status": {
                                  "type": "string",
                                  "example": "PENDING"
                                },
                                "base_type": {
                                  "type": "string",
                                  "example": "COUPON"
                                },
                                "reason": {
                                  "type": "string",
                                  "example": "BILL_ISSUE"
                                },
                                "comments": {
                                  "type": "string",
                                  "example": "customer is angry"
                                },
                                "customer": {
                                  "type": "object",
                                  "properties": {
                                    "firstname": {
                                      "type": "string",
                                      "example": "Tom"
                                    },
                                    "lastname": {
                                      "type": "string",
                                      "example": "Sawyer"
                                    },
                                    "email": {
                                      "type": "string",
                                      "example": "Tom.sawyer@example.com"
                                    },
                                    "mobile": {
                                      "type": "string",
                                      "example": "44700900000"
                                    },
                                    "external_id": {
                                      "type": "string",
                                      "example": "ts1234"
                                    },
                                    "fraud_status": {
                                      "type": "string",
                                      "example": "CONFIRMED"
                                    }
                                  }
                                },
                                "added_on": {
                                  "type": "string",
                                  "example": "2016-02-12T13:32:42+05:30"
                                },
                                "added_by": {
                                  "type": "object",
                                  "properties": {
                                    "code": {
                                      "type": "string",
                                      "example": "Tom.store"
                                    },
                                    "name": {
                                      "type": "string",
                                      "example": "Tom store"
                                    }
                                  }
                                },
                                "updated_by": {
                                  "type": "object",
                                  "properties": {}
                                }
                              }
                            },
                            "change_identifier": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string",
                                    "example": "10034"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "CHANGE_IDENTIFIER"
                                  },
                                  "status": {
                                    "type": "string",
                                    "example": "REJECTED"
                                  },
                                  "base_type": {
                                    "type": "string",
                                    "example": "EMAIL"
                                  },
                                  "new_value": {
                                    "type": "string",
                                    "example": "Tom@Tom2.com"
                                  },
                                  "old_value": {
                                    "type": "string",
                                    "example": "Tom@Tom.com"
                                  },
                                  "customer": {
                                    "type": "object",
                                    "properties": {
                                      "firstname": {
                                        "type": "string",
                                        "example": "Tom"
                                      },
                                      "lastname": {
                                        "type": "string",
                                        "example": "Sawyer"
                                      },
                                      "email": {
                                        "type": "string",
                                        "example": "Tom@Tom2.com"
                                      },
                                      "mobile": {
                                        "type": "string",
                                        "example": "919740798372"
                                      },
                                      "external_id": {
                                        "type": "string",
                                        "example": "XYPZ001"
                                      },
                                      "fraud_status": {
                                        "type": "string",
                                        "example": "CONFIRMED"
                                      }
                                    }
                                  },
                                  "added_on": {
                                    "type": "string",
                                    "example": "2016-02-12T05:30:00+05:30"
                                  },
                                  "last_action_on": {
                                    "type": "string",
                                    "example": "2014-02-21T05:30:00+05:30"
                                  },
                                  "added_by": {
                                    "type": "object",
                                    "properties": {
                                      "code": {
                                        "type": "string",
                                        "example": "Tom.store"
                                      },
                                      "name": {
                                        "type": "string",
                                        "example": "Tom store"
                                      }
                                    }
                                  },
                                  "updated_by": {
                                    "type": "object",
                                    "properties": {
                                      "code": {
                                        "type": "string",
                                        "example": "admin"
                                      },
                                      "name": {
                                        "type": "string",
                                        "example": "Mr Admin"
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
                                  "example": "9000"
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Request retrieved successfully"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "https://us.api.capillarytech.com/v1.1/request/get?format=json",
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