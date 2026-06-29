> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Search Customers by Label

Retrieves the list of customers tagged to a specific label. Searches by exact label name, case-insensitive. By default you will see a maximum of 10 records.

Retrieves the list of customers tagged to a specific label, searching by exact label name.

## Example request

```bash
curl --location 'https://eu.api.capillarytech.com/v2/customers/labels/search?q=Gold' \
--header 'Authorization: Basic ******'
```

## Prerequisites

* Authentication: Basic or O-Auth. For details, see [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
* Default access group.
* Rate limiter controls the number of incoming and outgoing traffic of a network.

Retrieves the list of customers tagged to a specific label, searching by exact label name.

## Example request

```bash
curl --location 'https://eu.api.capillarytech.com/v2/customers/labels/search?q=Gold' \
--header 'Authorization: Basic ******'
```

## Prerequisites

* Authentication: Basic or O-Auth. For details, see [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
* Default access group.
* Rate limiter controls the number of incoming and outgoing traffic of a network.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

## Resource information

|                       |                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| URI                   | `customers/labels/search?q=LabelName`                                                                               |
| HTTP method           | GET                                                                                                                 |
| Authentication        | Basic and O-Auth                                                                                                    |
| Pagination supported? | Yes                                                                                                                 |
| Rate limit            | Demo and testing clusters: 1000 requests per minute per API key. Other organizations: Rate limit is brand-specific. |
| Batch support         | No                                                                                                                  |

## Query parameters

| Field                 | Type                                  | Required     | Description                                                                                                                                           |
| --------------------- | ------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `q`                   | string                                | **Required** | The exact name of the label to search by. The search is case-insensitive. For example, `Gold` returns all customers tagged with the label named Gold. |
| `offset`              | integer                               | Optional     | Number of records to skip for pagination. Default value: 0.                                                                                           |
| `limit`               | integer                               | Optional     | Maximum number of records to return. `-1` means no limit (fetch all records). Default value: 10.                                                      |
|                       |                                       |              |                                                                                                                                                       |
| --------------------- | ------------------------------------- |              |                                                                                                                                                       |
| URI                   | `customers/labels/search?q=LabelName` |              |                                                                                                                                                       |
| HTTP method           | GET                                   |              |                                                                                                                                                       |
| Authentication        | Basic and O-Auth                      |              |                                                                                                                                                       |
| Pagination supported? | Yes                                   |              |                                                                                                                                                       |
| Batch support         | No                                    |              |                                                                                                                                                       |

## Query parameters

| Field    | Type    | Required     | Description                                                                                                                                           |
| -------- | ------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `q`      | string  | **Required** | The exact name of the label to search by. The search is case-insensitive. For example, `Gold` returns all customers tagged with the label named Gold. |
| `offset` | integer | Optional     | Number of records to skip for pagination. Default value: 0.                                                                                           |
| `limit`  | integer | Optional     | Maximum number of records to return. `-1` means no limit (fetch all records). Default value: 10.                                                      |

## Example response

```json
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 2
    },
    "data": [
        {
            "userId": 564341182,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 17243,
                    "userId": 564341182,
                    "labelName": "real"
                }
            ]
        },
        {
            "userId": 565032200,
            "customerLabels": [
                {
                    "orgId": 100737,
                    "labelId": 17243,
                    "userId": 565032200,
                    "labelName": "real"
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```

## Response parameters

| Parameter         | Type    | Description                                                                                            |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `pagination`      | object  | Pagination details. The maximum number of records to return per page. Defaults to 10 if not specified. |
| `.limit`          | integer | Number of records returned per page.                                                                   |
| `.offset`         | integer | Offset used for pagination.                                                                            |
| `.total`          | integer | Total number of records available.                                                                     |
| `data`            | array   | Array of user data objects.                                                                            |
| `.userId`         | integer | Unique identifier of the user.                                                                         |
| `.customerLabels` | array   | Labels assigned to this user.                                                                          |
| `..orgId`         | integer | Organization ID where the label belongs.                                                               |
| `..labelId`       | integer | Unique ID of the label.                                                                                |
| `..userId`        | integer | Unique identifier of the user.                                                                         |
| `..labelName`     | string  | Name of the label assigned to the user.                                                                |
| `warnings`        | array   | Any warnings returned by the API.                                                                      |
| `errors`          | array   | Any errors returned by the API.                                                                        |

## Error and warning codes

| Code              | Error number | Type                                                                                                   | Description                                         |
| ----------------- | ------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| —                 | —            | Error                                                                                                  | Invalid input parameters. HTTP 400.                 |
| —                 | —            | Error                                                                                                  | Authentication failed. HTTP 401.                    |
| —                 | —            | Error                                                                                                  | Operation not supported for the resource. HTTP 405. |
| —                 | —            | Error                                                                                                  | Internal error. HTTP 500.                           |
| Parameter         | Type         | Description                                                                                            |                                                     |
| ----------------- | -------      | ------------------------------------------------------------------------------------------------------ |                                                     |
| `pagination`      | object       | Pagination details. The maximum number of records to return per page. Defaults to 10 if not specified. |                                                     |
| `.limit`          | integer      | Number of records returned per page.                                                                   |                                                     |
| `.offset`         | integer      | Offset used for pagination.                                                                            |                                                     |
| `.total`          | integer      | Total number of records available.                                                                     |                                                     |
| `data`            | array        | Array of user data objects.                                                                            |                                                     |
| `.userId`         | integer      | Unique identifier of the user.                                                                         |                                                     |
| `.customerLabels` | array        | Labels assigned to this user.                                                                          |                                                     |
| `..orgId`         | integer      | Organization ID where the label belongs.                                                               |                                                     |
| `..labelId`       | integer      | Unique ID of the label.                                                                                |                                                     |
| `..userId`        | integer      | Unique identifier of the user.                                                                         |                                                     |
| `..labelName`     | string       | Name of the label assigned to the user.                                                                |                                                     |
| `warnings`        | array        | Any warnings returned by the API.                                                                      |                                                     |
| `errors`          | array        | Any errors returned by the API.                                                                        |                                                     |

## Error and warning codes

| Code | Error number | Type  | Description                                         |
| ---- | ------------ | ----- | --------------------------------------------------- |
| —    | —            | Error | Invalid input parameters. HTTP 400.                 |
| —    | —            | Error | Authentication failed. HTTP 401.                    |
| —    | —            | Error | Operation not supported for the resource. HTTP 405. |
| —    | —            | Error | Internal error. HTTP 500.                           |

<br />

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
    "/customers/labels/search?q={LabelName}": {
      "get": {
        "summary": "Search Customers by Label",
        "description": "Retrieves the list of customers tagged to a specific label. Searches by exact label name, case-insensitive. By default you will see a maximum of 10 records.",
        "operationId": "search-customers-by-labels",
        "parameters": [
          {
            "name": "q",
            "in": "query",
            "description": "Specify the label name by which you want to fetch customers. You can also pass partial string. For example pre to fetch customers in all labels that starts with pre.",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": {
                      "pagination": {
                        "limit": 10,
                        "offset": 0,
                        "total": 2
                      },
                      "data": [
                        {
                          "userId": 564341182,
                          "customerLabels": [
                            {
                              "orgId": 100737,
                              "labelId": 17243,
                              "userId": 564341182,
                              "labelName": "real"
                            }
                          ]
                        },
                        {
                          "userId": 565032200,
                          "customerLabels": [
                            {
                              "orgId": 100737,
                              "labelId": 17243,
                              "userId": 565032200,
                              "labelName": "real"
                            }
                          ]
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "pagination": {
                      "type": "object",
                      "properties": {
                        "limit": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "offset": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "total": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        }
                      }
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "userId": {
                            "type": "integer",
                            "example": 316481804,
                            "default": 0
                          },
                          "customerLabels": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "orgId": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "labelId": {
                                  "type": "integer",
                                  "example": 3,
                                  "default": 0
                                },
                                "userId": {
                                  "type": "integer",
                                  "example": 316481804,
                                  "default": 0
                                },
                                "labelName": {
                                  "type": "string",
                                  "example": "book"
                                }
                              }
                            }
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
        "x-readme": {
          "code-samples": [
            {
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/labels/search?q=r' \\\n--header 'Authorization: Basic *****' \\\n--header 'Cookie: _cfuvid=A7RRUmy8v5VI5rJd.mVzhbsc4Ab_bYLSUImEI2T6GuE-1757664909131-0.0.1.1-604800000'",
              "name": "Sample Request"
            }
          ],
          "samples-languages": [
            "shell"
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