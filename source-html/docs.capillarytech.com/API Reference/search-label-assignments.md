> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Search Label Assignments

Search label assignments by a specific label, with optional filtering by entity ID and pagination. Use this endpoint to find which customers, products, or stores currently have a particular label assigned — for example, to audit all products tagged "Flash-Sale" before running a promotion, or to list all customers labelled "VIP".

## Example request

```bash search by id
curl --location 'https://eu.api.capillarytech.com/v2/labels/assignments/search?entityType=PRODUCT&labelId=116&limit=5' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyNmM0YzM0YTE2ODkxZjg0ZTdi'
```
```text search by pagination
curl --location 'https://eu.api.capillarytech.com/v2/labels/assignments/search?entityType=PRODUCT&labelId=116&offset=1&limit=2' \
--header 'Authorization: Basic bmVlcmFqLmRvYNmM0YzM0YTE2ODkxZjg0ZTdi'
```

## Prerequisites

* Basic authentication (`Authorization: Basic {base64_credentials}`) or OAuth (`X-CAP-API-OAUTH-TOKEN`).
* Access to Label access group resource

## Resource information

|                    |     |
| ------------------ | --- |
| Pagination support | Yes |
| Batch support      | No  |

## Query parameters

| Field             | Type   | Required     | Description                                                                                                                                                                                       |
| ----------------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityType`      | enum   | **Required** | Entity type to search within. Supported values: `CUSTOMER` — applies the label to a customer. `PRODUCT` — applies the label to a product. `STORE` — applies the label to a store. Case-sensitive. |
| `labelId`         | number | Conditional  | Unique identifier of the label to search by. Provide exactly one of `labelId`, `labelName`, or `labelExternalId`.                                                                                 |
| `labelName`       | string | Conditional  | Name of the label to search by. Provide exactly one of `labelId`, `labelName`, or `labelExternalId`.                                                                                              |
| `labelExternalId` | string | Conditional  | External identifier of the label to search by. Provide exactly one of `labelId`, `labelName`, or `labelExternalId`.                                                                               |
| `entityId`        | string | Optional     | Filters results to a specific entity ID.                                                                                                                                                          |
| `limit`           | number | Optional     | Maximum number of results to return per page. Between 1 and 50. Defaults to 10.                                                                                                                   |
| `offset`          | number | Optional     | Number of records to skip for pagination. Must be 0 or greater. Defaults to 0.                                                                                                                    |

## Example response

```json
{
    "data": [
        {
            "entityId": "Cheese dip",
            "labelId": 116,
            "labelName": "DocDemo-Flash-Sale",
            "labelExternalId": "docdemo-flash-001",
            "expiryDate": "2026-09-03T18:29:59Z"
        },
        {
            "entityId": "107276",
            "labelId": 116,
            "labelName": "DocDemo-Flash-Sale",
            "labelExternalId": "docdemo-flash-001",
            "expiryDate": "2026-09-03T18:29:59Z"
        }
    ],
    "pagination": {
        "totalCount": 4,
        "limit": 2,
        "offset": 1
    }
}
```

## Response parameters

| Field              | Type   | Description                                                                                                            |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `data`             | array  | List of label assignment records matching the search criteria.                                                         |
| `.entityId`        | string | Identifier of the entity.                                                                                              |
| `.labelId`         | number | Unique identifier of the label.                                                                                        |
| `.labelName`       | string | Name of the label.                                                                                                     |
| `.labelExternalId` | string | External identifier of the label.                                                                                      |
| `.expiryDate`      | string | Expiry date and time of the assignment in ISO-8601 format (server timezone). `null` if the assignment does not expire. |
| `pagination`       | object | Pagination metadata.                                                                                                   |
| `.totalCount`      | number | Total number of matching records.                                                                                      |
| `.limit`           | number | Maximum number of records returned in this response.                                                                   |
| `.offset`          | number | Number of records skipped.                                                                                             |

## Error and warning codes

> **Note:** Validation errors for this endpoint are returned as `{"message": "<error description>"}` rather than the standard `errors` array.

| Code                                          | Error number | Type  | Description                                                                        |
| --------------------------------------------- | ------------ | ----- | ---------------------------------------------------------------------------------- |
| `ASSIGNMENT_ENTITY_TYPE_REQUIRED`             | 23033        | Error | `entityType` is required. HTTP 400.                                                |
| `ASSIGNMENT_INVALID_ENTITY_TYPE`              | 23034        | Error | Invalid entity type. Supported values: `CUSTOMER`, `PRODUCT`, `STORE`. HTTP 400.   |
| `ASSIGNMENT_LABEL_SEARCH_IDENTIFIER_REQUIRED` | 23036        | Error | Exactly one of `labelId`, `labelName`, or `labelExternalId` is required. HTTP 400. |
| `ASSIGNMENT_INVALID_LIMIT`                    | 23046        | Error | `limit` must be between 1 and 50. HTTP 400.                                        |
| `ASSIGNMENT_INVALID_OFFSET`                   | 23047        | Error | `offset` must be 0 or greater. HTTP 400.                                           |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Search label assignments",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://{Host}",
      "variables": {
        "Host": {
          "enum": [
            "{Host}",
            "eu.intouch.capillarytech.com",
            "intouch.capillary.co.in",
            "apac2.intouch.capillarytech.com",
            "sgcrm.cc.capillarytech.com",
            "intouch.capillary.cn.com",
            "north-america.intouch.capillarytech.com"
          ],
          "default": "{Host}"
        }
      }
    }
  ],
  "paths": {
    "/v2/labels/assignments/search": {
      "get": {
        "summary": "Search Label Assignments",
        "operationId": "search-label-assignments",
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "Basic <base64>"
          },
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "<token>"
          },
          {
            "name": "entityType",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "CUSTOMER",
                "PRODUCT",
                "STORE"
              ]
            }
          },
          {
            "name": "labelId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "labelName",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "labelExternalId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entityId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 10,
              "minimum": 1,
              "maximum": 50
            }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 0,
              "minimum": 0
            }
          }
        ],
        "security": [
          {
            "basicAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response.",
            "content": {
              "application/json": {
                "example": {
                  "data": [
                    {
                      "entityId": "<ENTITY_ID>",
                      "labelId": 109,
                      "labelName": "VIP",
                      "labelExternalId": "vip-tier",
                      "expiryDate": "2027-06-04T18:29:59Z"
                    }
                  ],
                  "pagination": {
                    "totalCount": 1,
                    "limit": 5,
                    "offset": 0
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid request parameters.",
            "content": {
              "application/json": {
                "example": {
                  "message": "Exactly one of labelId, labelName or labelExternalId is required."
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
  }
}
```