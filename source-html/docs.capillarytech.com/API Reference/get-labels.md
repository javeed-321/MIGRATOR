> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get/Search labels

Enables you to search or retrieve a paginated list of labels for an organization. Labels are flexible metadata tags applied to customers, products, or stores, used as building blocks in promotions, audience segments, and analytics.

Filter results by entity type (`CUSTOMER`, `PRODUCT`, or `STORE`), status, or a search term that matches label names or external IDs. Results are ordered by lastUpdatedOn DESC (most recently updated first).

## Example request

```bash Deafult listing
curl --location 'https://eu.api.capillarytech.com/v2/labels?limit=10' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyN2NjYjBlZWE4YTcwNmM0YzM0YTE2ODkxZjg0ZTdi'
```
```text by entity type
curl --location 'https://eu.api.capillarytech.com/v2/labels?entityType=CUSTOMER&limit=10' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1YTcwNmM0YzM0YTE2ODkxZjg0ZTdi'
```
```text paginated
curl --location 'https://eu.api.capillarytech.com/v2/labels?offset=5&limit=3' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1lZWE4YTcwNmM0YzM0YTE2ODkxZjg0ZTdi'
```
```text partial name search
curl --location 'https://eu.api.capillarytech.com/v2/labels?q=DocDemo&entityType=PRODUCT&limit=10' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyN2NjYj\0YTE2ODkxZjg0ZTdi'
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

| Field        | Type   | Required | Description                                                                                                                                                                                               |
| ------------ | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityType` | enum   | Optional | Filters labels by entity type. Supported values: `CUSTOMER` — applies the label to a customer. `PRODUCT` — applies the label to a product. `STORE` — applies the label to a store. Defaults to `PRODUCT`. |
| `q`          | string | Optional | Search term to filter labels by name or external ID. Matches partial strings. Case insensitive.                                                                                                           |
| `status`     | enum   | Optional | Filters labels by status. Supported values: `ACTIVE` — the label is available for new assignments. `ARCHIVED` — the label is retired and cannot be assigned to new entities. Defaults to `ACTIVE`.        |
| `limit`      | number | Optional | Maximum number of labels to return per page. Between 1 and 100. Defaults to 50.                                                                                                                           |
| `offset`     | number | Optional | Number of records to skip for pagination. Must be 0 or greater. Defaults to 0.                                                                                                                            |

## Example response

```json Deafult listing
{
    "totalCount": 118,
    "limit": 10,
    "offset": 0,
    "labels": [
        {
            "id": 119,
            "externalId": "docdemo-clearance-001",
            "name": "DocDemo-Clearance",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "RELATIVE",
                "unit": "YEARS",
                "value": 2
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T04:20:47Z",
            "createdBy": 75216507,
            "lastUpdatedOn": "2026-06-05T11:42:45Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 102,
            "externalId": "summersale101",
            "name": "Summer Sale101",
            "description": "Updated: High-value customer segment (Gold tier)",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "FIXED_DATE",
                "expiryDate": "2099-12-31T23:59:59+05:30"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-02T14:23:07Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T11:42:45Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 120,
            "externalId": "docdemo-summer-002",
            "name": "DocDemo-Summer-Sale_update",
            "description": "Updated: Summer 2026 sale products",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "FIXED_DATE",
                "expiryDate": "2100-06-30T23:59:59+05:30"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T05:15:09Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T11:28:26Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 128,
            "externalId": "docdemo-vip-0",
            "name": "DocDemo-VIP-Customer0",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "NONE"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T10:11:14Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T10:11:14Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 127,
            "externalId": "docdemo-vip-008",
            "name": "DocDemo-VIP-Customer8",
            "description": "High-value customer segment",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "NONE"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T10:08:43Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T10:08:43Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 126,
            "externalId": "docdemo-vip-007",
            "name": "DocDemo-VIP-Customer7",
            "description": "High-value customer segment",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "NONE"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T09:42:49Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T09:42:49Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 125,
            "externalId": "docdemo-vip-006",
            "name": "DocDemo-VIP-Customer6",
            "description": "High-value customer segment",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "FIXED_DATE",
                "expiryDate": "2027-12-31T23:59:59+05:30"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T09:41:12Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T09:41:12Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 124,
            "externalId": "docdemo-vip-005",
            "name": "DocDemo-VIP-Customer5",
            "description": "High-value customer segment",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "FIXED_DATE",
                "expiryDate": "2027-12-31T23:59:59+05:30"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T09:39:58Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T09:39:58Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 123,
            "externalId": "docdemo-vip-004",
            "name": "DocDemo-VIP-Customer4",
            "description": "High-value customer segment",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "FIXED_DATE",
                "expiryDate": "2027-12-31T23:59:59+05:30"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T09:38:00Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T09:38:00Z",
            "lastUpdatedBy": 75197399
        },
        {
            "id": 122,
            "externalId": "docdemo-vip-003",
            "name": "DocDemo-VIP-Customer3",
            "description": "High-value customer segment",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "RELATIVE",
                "unit": "MONTHS",
                "value": 6
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T09:30:30Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T09:30:30Z",
            "lastUpdatedBy": 75197399
        }
    ]
}
```

## Response parameters

| Field            | Type   | Description                                                                                                 |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| `totalCount`     | number | Total number of labels matching the filter criteria.                                                        |
| `limit`          | number | Maximum number of labels returned in this response.                                                         |
| `offset`         | number | Number of records skipped.                                                                                  |
| `labels`         | array  | List of label objects.                                                                                      |
| `.id`            | number | Unique identifier of the label.                                                                             |
| `.externalId`    | string | External identifier of the label.                                                                           |
| `.name`          | string | Name of the label.                                                                                          |
| `.description`   | string | Description of the label.                                                                                   |
| `.entityType`    | string | Entity type the label applies to. One of `CUSTOMER`, `PRODUCT`, or `STORE`.                                 |
| `.expiryConfig`  | object | Expiry configuration for the label.                                                                         |
| `..type`         | string | Expiry type. One of `NONE`, `FIXED_DATE`, or `RELATIVE`.                                                    |
| `..expiryDate`   | string | Expiry date in ISO-8601 format. Present when `type` is `FIXED_DATE`.                                        |
| `..unit`         | string | Duration unit. Present when `type` is `RELATIVE`. One of `DAYS`, `MONTHS`, or `YEARS`.                      |
| `..value`        | number | Duration value. Present when `type` is `RELATIVE`.                                                          |
| `..roundingUnit` | string | Rounding unit for the expiry duration. Present when `type` is `RELATIVE` and a rounding unit is configured. |
| `.status`        | string | Status of the label. One of `ACTIVE` or `ARCHIVED`.                                                         |
| `.createdOn`     | string | UTC timestamp when the label was created. Format: `YYYY-MM-DDThh:mm:ssZ` (server timezone).                 |
| `.createdBy`     | number | ID of the user who created the label.                                                                       |
| `.lastUpdatedOn` | string | UTC timestamp when the label was last updated. Format: `YYYY-MM-DDThh:mm:ssZ` (server timezone).            |
| `.lastUpdatedBy` | number | ID of the user who last updated the label.                                                                  |

## Error and warning codes

> **Note:** Validation errors for this endpoint are returned as `{"message": "<error description>"}` rather than the standard `errors` array.

| Code                        | Error number | Type  | Description                                                                      |
| --------------------------- | ------------ | ----- | -------------------------------------------------------------------------------- |
| `LABEL_INVALID_ENTITY_TYPE` | 23006        | Error | Invalid entity type. Supported values: `CUSTOMER`, `PRODUCT`, `STORE`. HTTP 400. |
| `LABEL_INVALID_STATUS`      | 23016        | Error | Invalid status value. Supported values: `ACTIVE`, `ARCHIVED`. HTTP 400.          |
| `LABEL_INVALID_LIMIT`       | 23017        | Error | `limit` must be between 1 and 100. HTTP 400.                                     |
| `LABEL_INVALID_OFFSET`      | 23018        | Error | `offset` must be 0 or greater. HTTP 400.                                         |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Get labels",
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
    "/v2/labels": {
      "get": {
        "summary": "Get/Search labels",
        "operationId": "get-labels",
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
            "required": false,
            "schema": {
              "type": "string",
              "default": "PRODUCT",
              "enum": [
                "CUSTOMER",
                "PRODUCT",
                "STORE"
              ]
            },
            "description": "Filters labels by entity type."
          },
          {
            "name": "q",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "Search term to filter labels by name or external ID."
          },
          {
            "name": "status",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "default": "ACTIVE",
              "enum": [
                "ACTIVE",
                "ARCHIVED"
              ]
            },
            "description": "Filters labels by status."
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 50,
              "minimum": 1,
              "maximum": 100
            },
            "description": "Maximum number of labels to return per page."
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 0,
              "minimum": 0
            },
            "description": "Number of records to skip for pagination."
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
                  "totalCount": 108,
                  "limit": 3,
                  "offset": 0,
                  "labels": [
                    {
                      "id": 101,
                      "externalId": "summer-sale-2026",
                      "name": "Summer Sale",
                      "description": "Labels for summer sale products",
                      "entityType": "PRODUCT",
                      "expiryConfig": {
                        "type": "FIXED_DATE",
                        "expiryDate": "2027-12-31T23:59:59+05:30"
                      },
                      "status": "ACTIVE",
                      "createdOn": "2026-06-04T10:42:24Z",
                      "createdBy": 75216507,
                      "lastUpdatedOn": "2026-06-04T10:46:43Z",
                      "lastUpdatedBy": 75216507
                    }
                  ]
                }
              }
            }
          },
          "400": {
            "description": "Invalid request parameters.",
            "content": {
              "application/json": {
                "example": {
                  "message": "Invalid entity type 'INVALID'. Supported values are: CUSTOMER, PRODUCT, STORE."
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