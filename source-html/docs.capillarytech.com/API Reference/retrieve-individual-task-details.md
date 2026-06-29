> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve Individual Task Details

Returns the information about individual tasks such as created by, assigned to, task type, created at store and current status.

# Request URL

`http://<cluster url>/v1.1/task/get?format=<xml/json>&<params>=<value>`

# Request Parameters

| Parameter    | Description                                                                                                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assoc        | Returns tasks of all associates of the current store if assoc=true                                                                                                                                       |
| all          | Returns all the tasks of the current organization if all=true. If all=false, only the current store tasks are returned. Default value: true                                                              |
| action\_type | Value: sms, email, call, or none. Returns a particular type of task (SMS/email/call). If action\_type is “none”, then the tasks other than SMS, email, or call will be returned.                         |
| assoc\_id    | Returns the tasks assigned to a specific associate                                                                                                                                                       |
| customer\_id | Returns the tasks created for a specific customer                                                                                                                                                        |
| status       | Returns the tasks by status. Value: OPEN, IN\_PROGRESS, CLOSED                                                                                                                                           |
| start\_date  | Returns the list of tasks created in a specific duration (set in start\_date and end\_date). If only start\_date is mentioned then the list of tasks created on or after the specified date is returned. |
| end\_date    | Returns the list of tasks created in a specific duration set in start\_date and end\_date. If only end\_date is passed then the list of tasks created on or before the specified date is returned.       |
| batch\_size  | Limits the number of tasks to be displayed. For example, if batch\_size=10 then the details of only 10 tasks are returned                                                                                |

# Response Parameters

| Parameter                | Description                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| response status success  | The success status of the response.                                                                      |
| response status code     | The HTTP status code of the response.                                                                    |
| response status message  | The status message of the response.                                                                      |
| tasks task type          | The type of the task. It could be associated with a customer or cashier, or be a specific customer type. |
| tasks task associate\_id | The ID of the associate involved in the task.                                                            |
| tasks task customer\_id  | The ID of the customer associated with the task.                                                         |
| tasks task store\_id     | The ID of the store related to the task.                                                                 |
| tasks task status        | The status of the task. It's "OPEN" for both tasks.                                                      |

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
    "/task/get": {
      "get": {
        "summary": "Retrieve Individual Task Details",
        "description": "Returns the information about individual tasks such as created by, assigned to, task type, created at store and current status.",
        "operationId": "retrieve-individual-task-details",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"SUCCESS\"\n    },\n    \"tasks\": {\n      \"task\": [\n        {\n          \"type\": \"CUSTOMER/CASHIER\",\n          \"associate_id\": \"\n123\n\",\n          \"customer_id\": \"\n124\n\",\n          \"store_id\": \"\n125\n\",\n          \"status\": \"OPEN\"\n        },\n        {\n          \"type\": \"CUSTOMER/TYPE\",\n          \"associate_id\": \"\n125\n\",\n          \"customer_id\": \"\n122\n\",\n          \"store_id\": \"\n127\n\",\n          \"status\": \"OPEN\"\n        }\n      ]\n    }\n  }\n}"
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
              "code": "http://us.api.capillarytech.com/v1.1/task/get?format=xml\n"
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