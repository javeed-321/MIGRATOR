> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get label assignments

Retrieve all label assignments for a set of entities. A label assignment is the relationship between a label and a specific entity item — for example, a product tagged "Flash-Sale" or a customer tagged "VIP".

Pass up to 10 entity IDs in a single request to get each entity's active assignments. Set `includeInactive=true` to also return expired or removed assignments.

## Example request

```bash multiple entities
curl --location 'https://eu.api.capillarytech.com/v2/labels/assignments?entityType=PRODUCT&entityIds=505101%2C505102%2C107276' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyN2cwNmM0YzM0YTE2ODkxZjg0ZTdi'
```
```text with inactive entities
curl --location --globoff '{{base_url}}/v2/labels/assignments?entityType=PRODUCT&entityIds=505101%2C505102&includeInactive=true'
```

## Prerequisites

* Basic authentication (`Authorization: Basic {base64_credentials}`) or OAuth (`X-CAP-API-OAUTH-TOKEN`).
* Access to Label access group resource

## Resource information

|                    |                                       |
| ------------------ | ------------------------------------- |
| Pagination support | No                                    |
| Batch support      | Yes — up to 10 entity IDs per request |

## Query parameters

| Field             | Type    | Required     | Description                                                                                                                                                                               |
| ----------------- | ------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityType`      | enum    | **Required** | Entity type to query. Supported values: `CUSTOMER` — applies the label to a customer. `PRODUCT` — applies the label to a product. `STORE` — applies the label to a store. Case-sensitive. |
| `entityIds`       | string  | **Required** | Comma-separated list of entity IDs to look up. Maximum 10 IDs per request.                                                                                                                |
| `includeInactive` | boolean | Optional     | Set to `true` to include expired and inactive assignments in the response. Defaults to `false`.                                                                                           |

## Example response

```json
{
    "data": [
        {
            "entityId": "505101",
            "labels": []
        },
        {
            "entityId": "505102",
            "labels": [
                {
                    "labelId": 128,
                    "labelName": "DocDemo-VIP-Customer0",
                    "labelExternalId": "docdemo-vip-0",
                    "expiryDate": "2100-06-30T18:29:59Z"
                },
                {
                    "labelId": 126,
                    "labelName": "DocDemo-VIP-Customer7",
                    "labelExternalId": "docdemo-vip-007"
                },
                {
                    "labelId": 124,
                    "labelName": "DocDemo-VIP-Customer5",
                    "labelExternalId": "docdemo-vip-005",
                    "expiryDate": "2027-12-31T18:29:59Z"
                },
                {
                    "labelId": 123,
                    "labelName": "DocDemo-VIP-Customer4",
                    "labelExternalId": "docdemo-vip-004",
                    "expiryDate": "2027-12-31T18:29:59Z"
                },
                {
                    "labelId": 122,
                    "labelName": "DocDemo-VIP-Customer3",
                    "labelExternalId": "docdemo-vip-003",
                    "expiryDate": "2026-12-05T18:29:59Z"
                }
            ]
        },
        {
            "entityId": "107276",
            "labels": [
                {
                    "labelId": 116,
                    "labelName": "DocDemo-Flash-Sale",
                    "labelExternalId": "docdemo-flash-001",
                    "expiryDate": "2026-09-03T18:29:59Z"
                }
            ]
        }
    ]
}
```

## Response parameters

| Field               | Type   | Description                                                                                                            |
| ------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `data`              | array  | One entry per requested entity ID.                                                                                     |
| `.entityId`         | string | Identifier of the entity.                                                                                              |
| `.labels`           | array  | List of label assignments for the entity. Empty when the entity has no active assignments.                             |
| `..labelId`         | number | Unique identifier of the label.                                                                                        |
| `..labelName`       | string | Name of the label.                                                                                                     |
| `..labelExternalId` | string | External identifier of the label.                                                                                      |
| `..expiryDate`      | string | Expiry date and time of the assignment in ISO-8601 format (server timezone). `null` if the assignment does not expire. |
| `errors`            | array  | List of request-level errors.                                                                                          |

## Error and warning codes

> **Note:** Validation errors for this endpoint are returned as `{"message": "<error description>"}` rather than the standard `errors` array.

| Code                              | Error number | Type  | Description                                                                      |
| --------------------------------- | ------------ | ----- | -------------------------------------------------------------------------------- |
| `ASSIGNMENT_ENTITY_TYPE_REQUIRED` | 23033        | Error | `entityType` is required. HTTP 400.                                              |
| `ASSIGNMENT_INVALID_ENTITY_TYPE`  | 23034        | Error | Invalid entity type. Supported values: `CUSTOMER`, `PRODUCT`, `STORE`. HTTP 400. |
| `ASSIGNMENT_ENTITY_IDS_REQUIRED`  | 23041        | Error | `entityIds` must contain at least one value. HTTP 400.                           |
| `ASSIGNMENT_ENTITY_IDS_EXCEEDED`  | 23042        | Error | Maximum 10 entity IDs can be queried in a single request. HTTP 400.              |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Get label assignments",
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
    "/v2/labels/assignments": {
      "get": {
        "summary": "Get label assignments",
        "operationId": "get-label-assignments",
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
            "name": "entityIds",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "Comma-separated list of entity IDs. Maximum 10."
          },
          {
            "name": "includeInactive",
            "in": "query",
            "required": false,
            "schema": {
              "type": "boolean",
              "default": false
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
                      "labels": [
                        {
                          "labelId": 109,
                          "labelName": "VIP",
                          "labelExternalId": "vip-tier",
                          "expiryDate": "2027-06-04T18:29:59Z"
                        }
                      ]
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
                  "message": "entityIds must contain at least one value."
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