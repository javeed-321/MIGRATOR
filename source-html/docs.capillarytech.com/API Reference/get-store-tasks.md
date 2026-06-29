> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Store Tasks

Returns the details of store tasks such as task title, description, status, and updates.

***

## Request Query Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter Name
      </th>

      <th style={{ textAlign: "left" }}>
        Data Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        type\_value
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Type of staff details to return.
        Supported values : ASSOCIATE, MANAGER.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        all
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Type of task to return.
        Supported values : sms, email, call, none.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        assoc\_id
      </td>

      <td style={{ textAlign: "left" }}>
        Long
      </td>

      <td style={{ textAlign: "left" }}>
        Unique ID of the associate to return the list of tasks assigned to that specific associate.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        customer\_id
      </td>

      <td style={{ textAlign: "left" }}>
        Long
      </td>

      <td style={{ textAlign: "left" }}>
        Unique ID of the customer to get the list of tasks created for that specific customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        start\_date
      </td>

      <td style={{ textAlign: "left" }}>
        yyyy-mm-dd
      </td>

      <td style={{ textAlign: "left" }}>
        Returns the list of tasks created between the dates set on start\_date and end\_date. If only start\_date is mentioned then the list of tasks created on or after that specified date is returned.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        end\_date
      </td>

      <td style={{ textAlign: "left" }}>
        yyyy-mm-dd
      </td>

      <td style={{ textAlign: "left" }}>
        Returns the list of tasks created between the dates set on start\_date and end\_date. If only end\_date is passed, the list of tasks created on or before the specified date is returned.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        count
      </td>

      <td style={{ textAlign: "left" }}>
        int
      </td>

      <td style={{ textAlign: "left" }}>
        Limits the number of tasks to be returned. For example, if count=10 then the details of only 10 tasks are returned.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        format
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Format of the response object.
      </td>
    </tr>
  </tbody>
</Table>

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
    "/store/tasks": {
      "get": {
        "summary": "Get Store Tasks",
        "description": "Returns the details of store tasks such as task title, description, status, and updates.",
        "operationId": "get-store-tasks",
        "parameters": [
          {
            "name": "type_value",
            "in": "query",
            "description": "Type of staff details to return.",
            "schema": {
              "type": "string",
              "enum": [
                "ASSOCIATE",
                "MANAGER"
              ]
            }
          },
          {
            "name": "all",
            "in": "query",
            "description": "Type of task to return.",
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
            "name": "assoc_id",
            "in": "query",
            "description": "Unique ID of the associate to return the list of tasks assigned to that specific associate.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "customer_id",
            "in": "query",
            "description": "Unique ID of the customer to get the list of tasks created for that specific customer.",
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
            "name": "count",
            "in": "query",
            "description": "Limits the number of tasks to be returned. For example, if count=10 then the details of only 10 tasks are returned.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "format",
            "in": "query",
            "description": "Format of the response object.",
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"store\": {\n            \"tasks\": {\n                \"task\": [\n                    {\n                        \"id\": \"\", \n                        \"entry_id\": \"\", \n                        \"type\": \"CUSTOMER/CASHIER\", \n                        \"associate_id\": \"123\", \n                        \"comment\": [\n                            \"\", \n                            \"\"\n                        ], \n                        \"customer_id\": \"124\", \n                        \"store_id\": \"125\", \n                        \"status\": \"OPEN\"\n                    }, \n                    {\n                        \"id\": \"\", \n                        \"entry_id\": \"\", \n                        \"type\": \"CUSTOMER/TYPE\", \n                        \"associate_id\": \"125\", \n                        \"comment\": [\n                            \"\", \n                            \"\"\n                        ], \n                        \"customer_id\": \"122\", \n                        \"store_id\": \"127\", \n                        \"status\": \"OPEN\"\n                    }\n                ]\n            }\n        }\n    }\n}"
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
                            "tasks": {
                              "type": "object",
                              "properties": {
                                "task": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "entry_id": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "CUSTOMER/CASHIER"
                                      },
                                      "associate_id": {
                                        "type": "string",
                                        "example": "123"
                                      },
                                      "comment": {
                                        "type": "array",
                                        "items": {
                                          "type": "string",
                                          "example": ""
                                        }
                                      },
                                      "customer_id": {
                                        "type": "string",
                                        "example": "124"
                                      },
                                      "store_id": {
                                        "type": "string",
                                        "example": "125"
                                      },
                                      "status": {
                                        "type": "string",
                                        "example": "OPEN"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "http://us.api.capillarytech.com/v1/store/tasks?format=json",
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