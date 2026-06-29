> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Retro Requests

Retrieves the transaction retro requests of the customer.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/customers/565032200/retroRequest?changeType=RETRO' \
--header 'Authorization: Basic bWFkajU2YQ==' \
--header 'Cookie: _cfuvid=Lnq8NOofFCcTsbLTTg8SIfFKr1Kgqe36yiCcgK9e_.8-1762161511381-0.0.1.1-604800000'
```

## Resource information

|                      |                                                                                                                     |
| :------------------- | :------------------------------------------------------------------------------------------------------------------ |
| URI                  | v2/customers/lookup/retroRequest                                                                                    |
| HTTP method          | GET                                                                                                                 |
| Pagination supported | Yes                                                                                                                 |
| Rate Limit           | Demo and testing clusters: 1000 requests per minute per API key. Other organizations: Rate limit is brand-specific. |
| Batch support        | NA                                                                                                                  |

# Example response

```json Sample response
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 3
    },
    "data": [
        {
            "id": 38959,
            "status": "PENDING",
            "addedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedByParent": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "updatedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedOn": "2025-05-02T11:53:46Z",
            "updatedOn": "2025-05-02T11:53:46Z",
            "userId": 565032200,
            "requestId": 13048217,
            "baseType": "RETRO",
            "reason": "",
            "comments": "",
            "transactionId": 323391839,
            "warnings": [],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 38256,
            "status": "PENDING",
            "addedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedByParent": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "updatedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedOn": "2025-04-02T04:49:06Z",
            "updatedOn": "2025-04-02T04:49:06Z",
            "userId": 565032200,
            "requestId": 13019491,
            "baseType": "RETRO",
            "reason": "",
            "comments": "",
            "transactionId": 323274585,
            "warnings": [],
            "reqAdd": true,
            "oneStep": false
        },
        {
            "id": 38236,
            "status": "PENDING",
            "addedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedByParent": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "updatedBy": {
                "id": 75155295,
                "code": "sant.p_123",
                "description": "",
                "name": "sant.p_123",
                "type": "TILL",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "isOuEnabled": false,
                "timeZoneId": 191,
                "currencyId": 95,
                "languageId": 148,
                "default": false
            },
            "addedOn": "2025-04-01T09:03:20Z",
            "updatedOn": "2025-04-01T09:03:20Z",
            "userId": 565032200,
            "requestId": 13018738,
            "baseType": "RETRO",
            "reason": "",
            "comments": "",
            "transactionId": 323271072,
            "warnings": [],
            "reqAdd": true,
            "oneStep": false
        }
    ],
    "warnings": [],
    "errors": []
}
```

<br />

## Response Parameters

| Parameter         | Description                                               |
| :---------------- | :-------------------------------------------------------- |
| pagination.limit  | Maximum number of records returned per page (default: 10) |
| pagination.offset | Number of records skipped from the beginning              |
| pagination.total  | Total count of available retro requests                   |
| data id           | Unique ID of the retro request                            |
| -status           | Current status (e.g., "PENDING")                          |
| -addedBy          | Contains details of staff/user who created the request    |
| -addedByParent    | Contains parent entity details (e.g., store)              |
| -updatedBy        | Contains details of last updater                          |
| -addedOn          | Timestamp when request was created (ISO 8601 format)      |
| -updatedOn        | Timestamp when request was last updated                   |
| -userId           | Customer ID associated with the request                   |
| -requestId        | Unique transaction request ID                             |
| -baseType         | Always "RETRO" for retro requests                         |
| -transactionId    | Original transaction ID being retro-tagged                |
| -reqAdd           | Boolean indicating if request is additive                 |
| -oneStep          | Boolean indicating one-step processing status             |

<Callout icon="📘" theme="info">
  Retro transaction is conversion of non-member transactions to a loyalty transaction by tagging a previous transaction of a customer (once registered).

* You can enable retro transaction for the org with CONF\_RETRO\_TRANSACTION\_ENABLE on the Billing configuration page. That is, InTouch > **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing**.
* Check the following configurations for maximum days allowed and minimum time limit required after customer registration to tag a not-interested transaction to that customer.
  * CONF\_CLIENT\_RETRO\_MAX\_ALLOWED\_AGE\_DAYS
  * CONF\_CLIENT\_RETRO\_DELAY\_SINCE\_REGISTRATION\_HOURS
    </Callout>

## API specific Error code

| Error Code | Description       | Reason                             |
| :--------- | :---------------- | :--------------------------------- |
| 9050       | Request not found | Invalid or unsupported customer Id |

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
    "/customers/{customerId}/retroRequest": {
      "get": {
        "summary": "Get Retro Requests",
        "description": "Retrieves the transaction retro requests of the customer.",
        "operationId": "get-retro-requests",
        "parameters": [
          {
            "name": "changeType",
            "in": "query",
            "description": "Filters retro transaction requests. Only RETRO is applicable here.",
            "schema": {
              "type": "string",
              "enum": [
                ""
              ]
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "Filter results by date-range. Pass the start date in either 8601 format (YYYY-MM-DDTHH:MM:SSZ) or the local time format with timezone (YYYY-MM-DD at HH:MM:SS IST)",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "Filter results by date-range. Pass the end date in YYYY-MM-DD format.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "startId",
            "in": "query",
            "description": "Filter results by sequence ID (sequence in which a change happened). For example, get lists from startId 200",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "endId",
            "in": "query",
            "description": "Filter results by sequence ID (sequence in which a change happened). For example, get lists from startId 200 until endId 400.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Specifies the number of initial records to skip in the results.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Pass the number of results that you want to see.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "startLimit",
            "in": "query",
            "description": "Specifies the starting record index for pagination",
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
                  "Result": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 10,\n        \"offset\": 0,\n        \"total\": 3\n    },\n    \"data\": [\n        {\n            \"id\": 38959,\n            \"status\": \"PENDING\",\n            \"addedBy\": {\n                \"id\": 75155295,\n                \"code\": \"sant.p_123\",\n                \"description\": \"\",\n                \"name\": \"sant.p_123\",\n                \"type\": \"TILL\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"addedByParent\": {\n                \"id\": 75152715,\n                \"code\": \"doc123\",\n                \"description\": \"\",\n                \"name\": \"DocStore\",\n                \"type\": \"STORE\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"updatedBy\": {\n                \"id\": 75155295,\n                \"code\": \"sant.p_123\",\n                \"description\": \"\",\n                \"name\": \"sant.p_123\",\n                \"type\": \"TILL\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"addedOn\": \"2025-05-02T11:53:46Z\",\n            \"updatedOn\": \"2025-05-02T11:53:46Z\",\n            \"userId\": 565032200,\n            \"requestId\": 13048217,\n            \"baseType\": \"RETRO\",\n            \"reason\": \"\",\n            \"comments\": \"\",\n            \"transactionId\": 323391839,\n            \"warnings\": [],\n            \"reqAdd\": true,\n            \"oneStep\": false\n        },\n        {\n            \"id\": 38256,\n            \"status\": \"PENDING\",\n            \"addedBy\": {\n                \"id\": 75155295,\n                \"code\": \"sant.p_123\",\n                \"description\": \"\",\n                \"name\": \"sant.p_123\",\n                \"type\": \"TILL\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"addedByParent\": {\n                \"id\": 75152715,\n                \"code\": \"doc123\",\n                \"description\": \"\",\n                \"name\": \"DocStore\",\n                \"type\": \"STORE\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"updatedBy\": {\n                \"id\": 75155295,\n                \"code\": \"sant.p_123\",\n                \"description\": \"\",\n                \"name\": \"sant.p_123\",\n                \"type\": \"TILL\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"addedOn\": \"2025-04-02T04:49:06Z\",\n            \"updatedOn\": \"2025-04-02T04:49:06Z\",\n            \"userId\": 565032200,\n            \"requestId\": 13019491,\n            \"baseType\": \"RETRO\",\n            \"reason\": \"\",\n            \"comments\": \"\",\n            \"transactionId\": 323274585,\n            \"warnings\": [],\n            \"reqAdd\": true,\n            \"oneStep\": false\n        },\n        {\n            \"id\": 38236,\n            \"status\": \"PENDING\",\n            \"addedBy\": {\n                \"id\": 75155295,\n                \"code\": \"sant.p_123\",\n                \"description\": \"\",\n                \"name\": \"sant.p_123\",\n                \"type\": \"TILL\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"addedByParent\": {\n                \"id\": 75152715,\n                \"code\": \"doc123\",\n                \"description\": \"\",\n                \"name\": \"DocStore\",\n                \"type\": \"STORE\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"updatedBy\": {\n                \"id\": 75155295,\n                \"code\": \"sant.p_123\",\n                \"description\": \"\",\n                \"name\": \"sant.p_123\",\n                \"type\": \"TILL\",\n                \"referenceId\": -1,\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": 191,\n                \"currencyId\": 95,\n                \"languageId\": 148,\n                \"default\": false\n            },\n            \"addedOn\": \"2025-04-01T09:03:20Z\",\n            \"updatedOn\": \"2025-04-01T09:03:20Z\",\n            \"userId\": 565032200,\n            \"requestId\": 13018738,\n            \"baseType\": \"RETRO\",\n            \"reason\": \"\",\n            \"comments\": \"\",\n            \"transactionId\": 323271072,\n            \"warnings\": [],\n            \"reqAdd\": true,\n            \"oneStep\": false\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                          "example": 3,
                          "default": 0
                        }
                      }
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 38959,
                            "default": 0
                          },
                          "status": {
                            "type": "string",
                            "example": "PENDING"
                          },
                          "addedBy": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 75155295,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "sant.p_123"
                              },
                              "description": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "sant.p_123"
                              },
                              "type": {
                                "type": "string",
                                "example": "TILL"
                              },
                              "referenceId": {
                                "type": "integer",
                                "example": -1,
                                "default": 0
                              },
                              "adminType": {
                                "type": "string",
                                "example": "GENERAL"
                              },
                              "isActive": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "isOuEnabled": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "timeZoneId": {
                                "type": "integer",
                                "example": 191,
                                "default": 0
                              },
                              "currencyId": {
                                "type": "integer",
                                "example": 95,
                                "default": 0
                              },
                              "languageId": {
                                "type": "integer",
                                "example": 148,
                                "default": 0
                              },
                              "default": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "addedByParent": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 75152715,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "doc123"
                              },
                              "description": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "DocStore"
                              },
                              "type": {
                                "type": "string",
                                "example": "STORE"
                              },
                              "referenceId": {
                                "type": "integer",
                                "example": -1,
                                "default": 0
                              },
                              "adminType": {
                                "type": "string",
                                "example": "GENERAL"
                              },
                              "isActive": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "isOuEnabled": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "timeZoneId": {
                                "type": "integer",
                                "example": 191,
                                "default": 0
                              },
                              "currencyId": {
                                "type": "integer",
                                "example": 95,
                                "default": 0
                              },
                              "languageId": {
                                "type": "integer",
                                "example": 148,
                                "default": 0
                              },
                              "default": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "updatedBy": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 75155295,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "sant.p_123"
                              },
                              "description": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "sant.p_123"
                              },
                              "type": {
                                "type": "string",
                                "example": "TILL"
                              },
                              "referenceId": {
                                "type": "integer",
                                "example": -1,
                                "default": 0
                              },
                              "adminType": {
                                "type": "string",
                                "example": "GENERAL"
                              },
                              "isActive": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "isOuEnabled": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "timeZoneId": {
                                "type": "integer",
                                "example": 191,
                                "default": 0
                              },
                              "currencyId": {
                                "type": "integer",
                                "example": 95,
                                "default": 0
                              },
                              "languageId": {
                                "type": "integer",
                                "example": 148,
                                "default": 0
                              },
                              "default": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "addedOn": {
                            "type": "string",
                            "example": "2025-05-02T11:53:46Z"
                          },
                          "updatedOn": {
                            "type": "string",
                            "example": "2025-05-02T11:53:46Z"
                          },
                          "userId": {
                            "type": "integer",
                            "example": 565032200,
                            "default": 0
                          },
                          "requestId": {
                            "type": "integer",
                            "example": 13048217,
                            "default": 0
                          },
                          "baseType": {
                            "type": "string",
                            "example": "RETRO"
                          },
                          "reason": {
                            "type": "string",
                            "example": ""
                          },
                          "comments": {
                            "type": "string",
                            "example": ""
                          },
                          "transactionId": {
                            "type": "integer",
                            "example": 323391839,
                            "default": 0
                          },
                          "warnings": {
                            "type": "array"
                          },
                          "reqAdd": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "oneStep": {
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
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565032200/retroRequest?changeType=RETRO' \\\n--header 'Authorization: Basic c2FudC5wM2FlNw==' \\\n--header 'Cookie: _cfuvid=xYkpmjnwx_0lZib0_bYM1BKr9B54r.0mGxasyp3mFvE-1746681000631-0.0.1.1-604800000'"
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