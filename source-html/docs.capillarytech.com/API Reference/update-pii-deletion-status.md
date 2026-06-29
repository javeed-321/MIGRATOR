> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update PII deletion status

Allows to approve or reject the deletion requests and update the deletion status accordingly.

> 📘 Note
>
> * The API does not allow bulk status change.
> * After approval, the PII deletion happens after the <Anchor label="configured number of days" target="_blank" href="https://docs.capillarytech.com/docs/pii-configuration#/">configured number of days</Anchor>.

# Example request

```
curl --location --request PUT 'https://eu.intouch.capillarytech.com/v2/requests' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--data '[
    {
		"type": "CUSTOMER",
		"baseType": "DELETE",
		"id": "13538087",
		"status": "APPROVED",
		"comments": "Seems to be a valid request, hence approving"
	}
]'
```

<br />

# Body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        Parameters marked with

        * <br />

        are mandatory.
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        type*
      </td>

      <td>
        string
      </td>

      <td>
        Type of the data. Only CUSTOMER type is supported.
      </td>
    </tr>

    <tr>
      <td>
        baseType*
      </td>

      <td>
        string
      </td>

      <td>
        Type of the operation. In this context, DELETE is the baseType.
      </td>
    </tr>

    <tr>
      <td>
        id*
      </td>

      <td>
        string
      </td>

      <td>
        PII deletion request ID.
      </td>
    </tr>

    <tr>
      <td>
        status*
      </td>

      <td>
        string
      </td>

      <td>
        PII deletion status that needs to be set. For example, APPROVED, REJECTED and CANCELLED.
      </td>
    </tr>

    <tr>
      <td>
        comments
      </td>

      <td>
        string
      </td>

      <td>
        Comments or description for the operation
      </td>
    </tr>
  </tbody>
</Table>

# Response

| Parameter    | Description                                                              |
| :----------- | :----------------------------------------------------------------------- |
| entityId     | Deletion request id.                                                     |
| warnings     | Displays the warning message                                             |
| result       | Indicates whether the update was successful. True-No error, False-error. |
| totalCount   | Total requests updated                                                   |
| failureCount | Total update requests failed                                             |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v2",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v2",
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
    "/requests": {
      "put": {
        "summary": "Update PII deletion status",
        "description": "Allows to approve or reject the deletion requests and update the deletion status accordingly.",
        "operationId": "update-pii-deletion-status",
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
                  "Same user cannot approve": {
                    "value": "{\n    \"response\": [\n        {\n            \"entityId\": 1391416,\n            \"errors\": [\n                {\n                    \"status\": false,\n                    \"message\": \"Same user cannot request and approve\",\n                    \"code\": 9051\n                }\n            ]\n        }\n    ],\n    \"totalCount\": 1,\n    \"failureCount\": 1\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "entityId": {
                            "type": "integer",
                            "example": 1391416,
                            "default": 0
                          },
                          "errors": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "status": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Same user cannot request and approve"
                                },
                                "code": {
                                  "type": "integer",
                                  "example": 9051,
                                  "default": 0
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "totalCount": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "failureCount": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    }
                  }
                }
              }
            }
          },
          "201": {
            "description": "201",
            "content": {
              "text/plain": {
                "examples": {
                  "Request approved": {
                    "value": "{\n    \"response\": [\n        {\n            \"entityId\": 1391416,\n            \"result\": true,\n            \"warnings\": []\n        }\n    ],\n    \"totalCount\": 1,\n    \"failureCount\": 0\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "entityId": {
                            "type": "integer",
                            "example": 1391416,
                            "default": 0
                          },
                          "result": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "warnings": {
                            "type": "array"
                          }
                        }
                      }
                    },
                    "totalCount": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "failureCount": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
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
              "code": "\n[\n\t{\n\t\t\"type\": \"CUSTOMER\",\n\t\t\"baseType\": \"DELETE\",\n\t\t\"id\": \"1458345\",\n\t\t\"status\": \"CANCELED\",\n\t\t\"comments\": \"Customer has changed their mind, hence canceling\"\n\t}\n]\n\n\n",
              "name": "Example"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```