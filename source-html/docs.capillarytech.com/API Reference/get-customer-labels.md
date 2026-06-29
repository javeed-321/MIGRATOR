> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Labels

Retrieves the list of labels tagged to a customer.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

## Resource information

| URI                   | customers/userId/labels |
| :-------------------- | :---------------------- |
| HTTP method           | GET                     |
| Authentication        | Basic                   |
| Pagination supported? | NO                      |
| Rate limit            | YES                     |
| Batch support         | NO                      |

# Example cURL request

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/564663098/labels' \
--header 'Authorization: Basic c2FudC5wXzzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw=='
```

# Path Parameter

| Parameter | Data type | Description                                                           |
| :-------- | :-------- | :-------------------------------------------------------------------- |
| userId    | Integer   | Unique identifier of the customer for whom labels are being modified. |

# Response Parameter

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `data`
      </td>

      <td>
        Array
      </td>

      <td>
        An array of label objects assigned to the user.
      </td>
    </tr>

    <tr>
      <td>
        `- id`
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of this user-label mapping record.
      </td>
    </tr>

    <tr>
      <td>
        `- orgId`
      </td>

      <td>
        Integer
      </td>

      <td>
        Organization ID where the label was added.
      </td>
    </tr>

    <tr>
      <td>
        `- addedBy`
      </td>

      <td>
        Integer
      </td>

      <td>
        ID of the user who added the label.
      </td>
    </tr>

    <tr>
      <td>
        `- labelId`
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the label.
      </td>
    </tr>

    <tr>
      <td>
        `- userId`
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the customer/user.
      </td>
    </tr>

    <tr>
      <td>
        `- labelName`
      </td>

      <td>
        String
      </td>

      <td>
        Name of the label.
      </td>
    </tr>

    <tr>
      <td>
        `- deleted`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Boolean indicating if the customer has a label.  \
        `true` indicates the label is inactive  \
        `false` - label is active for the customer.
      </td>
    </tr>

    <tr>
      <td>
        `warnings`
      </td>

      <td>
        Array
      </td>

      <td>
        An array of warning objects, if any.
      </td>
    </tr>

    <tr>
      <td>
        `errors`
      </td>

      <td>
        Array
      </td>

      <td>
        An array of error objects, if any.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "data": [
        {
            "id": 33558,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20942,
            "userId": 564663098,
            "labelName": "Premium Customer",
            "deleted": false
        },
        {
            "id": 33561,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20948,
            "userId": 564663098,
            "labelName": "Valuable Customer shvdshjdvshdvhjsdvjasajshjahadjgciuwyeguhbcwjhbjdshsbcjhwhewbehcbwjdhbckwjhekjhcbw",
            "deleted": false
        },
        {
            "id": 33559,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20949,
            "userId": 564663098,
            "labelName": "Old1 Customer1",
            "deleted": false
        },
        {
            "id": 33557,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20952,
            "userId": 564663098,
            "labelName": "Old2 Customer2",
            "deleted": false
        },
        {
            "id": 33560,
            "orgId": 100737,
            "addedBy": 75155295,
            "labelId": 20957,
            "userId": 564663098,
            "labelName": "Testing_UAT_@_123",
            "deleted": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API Specific Error Codes

| Error Code | Description           | Reason                                                                                |
| ---------- | --------------------- | ------------------------------------------------------------------------------------- |
| **33001**  | User labels not found | Occurs when no labels are found for the user or incorrect label references are given. |

```json
{
    "warnings": [
        {
            "status": false,
            "message": "User labels not found",
            "code": 33001
        }
    ],
    "errors": []
}
```

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
    "/customers/{userId}/labels": {
      "get": {
        "summary": "Get Customer Labels",
        "description": "Retrieves the list of labels tagged to a customer.",
        "operationId": "get-customer-labels",
        "parameters": [
          {
            "name": "{userId}",
            "in": "path",
            "description": "Unique id of the customer for which you want to fetch tagged labels.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n    \"data\": [\n        {\n            \"id\": 5,\n            \"orgId\": 0,\n            \"addedBy\": 15147364,\n            \"labelId\": 3,\n            \"userId\": 249598560,\n            \"labelName\": \"GadgetFreak\",\n            \"deleted\": false\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 5,
                            "default": 0
                          },
                          "orgId": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "addedBy": {
                            "type": "integer",
                            "example": 15147364,
                            "default": 0
                          },
                          "labelId": {
                            "type": "integer",
                            "example": 3,
                            "default": 0
                          },
                          "userId": {
                            "type": "integer",
                            "example": 249598560,
                            "default": 0
                          },
                          "labelName": {
                            "type": "string",
                            "example": "GadgetFreak"
                          },
                          "deleted": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
                      "type": "array"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/564663098/labels' \\\n--header 'Authorization: Basic AzNGE2NjA5NTIwM2FlNw=='",
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```