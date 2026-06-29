> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Remove label assignments

Remove one or more label assignments from entities in a single request. Removing an assignment immediately untags the entity, and downstream features such as promotions or campaigns that filter by that label will no longer include the entity.

Each removal item targets one entity and specifies which labels to remove by label ID, name, or external ID. You can process up to 100 removal items per request.

## Example request

```bash bulk removal
curl --location --request DELETE 'https://eu.api.capillarytech.com/v2/labels/assignments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyNmM0YzM0YTE2ODkxZjg0ZTdi' \
--data '{
  "entityType": "PRODUCT",
  "removals": [
    {
      "entityId": "505101",
      "labelIds": [116, 113]
    },
    {
      "entityId": "505102",
      "labelIds": [128,126]
    }
  ]
}'
```
```text remove by label id
curl --location --globoff --request DELETE '{{base_url}}/v2/labels/assignments' \
--header 'Content-Type: application/json' \
--data '{
  "entityType": "PRODUCT",
  "removals": [
    {
      "entityId": "1",
      "labelIds": [116]
    }
  ]
}'
```

## Prerequisites

* Basic authentication (`Authorization: Basic {base64_credentials}`) or OAuth (`X-CAP-API-OAUTH-TOKEN`).

## Body parameters

| Field               | Type   | Required     | Description                                                                                                                                                                                                       |
| ------------------- | ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityType`        | enum   | **Required** | Entity type for all removals in this request. Supported values: `CUSTOMER` — applies the label to a customer. `PRODUCT` — applies the label to a product. `STORE` — applies the label to a store. Case-sensitive. |
| `removals`          | array  | **Required** | List of removal items. Maximum 100 items per request.                                                                                                                                                             |
| `.entityId`         | string | **Required** | Identifier of the entity to remove labels from.                                                                                                                                                                   |
| `.labelIds`         | array  | Conditional  | List of label IDs to remove. Provide exactly one of `labelIds`, `labelNames`, or `labelExternalIds`.                                                                                                              |
| `.labelNames`       | array  | Conditional  | List of label names to remove. Provide exactly one of `labelIds`, `labelNames`, or `labelExternalIds`.                                                                                                            |
| `.labelExternalIds` | array  | Conditional  | List of label external IDs to remove. Provide exactly one of `labelIds`, `labelNames`, or `labelExternalIds`.                                                                                                     |

## Example response

```json removal with warning already inative
{
    "data": [
        {
            "entityId": "505102",
            "removedLabelIds": [
                128,
                126
            ]
        }
    ],
    "warnings": [
        {
            "code": 23051,
            "field": "labelIds",
            "labelExternalId": "505101",
            "message": "Label with id '116' is already inactive or expired for entity '505101'."
        },
        {
            "code": 23051,
            "field": "labelIds",
            "labelExternalId": "505101",
            "message": "Label with id '113' is already inactive or expired for entity '505101'."
        }
    ],
    "errors": []
}
```
```text
{
    "data": [
        {
            "entityId": "505102",
            "removedLabelIds": [
                124
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```

<br />

## Response parameters

| Field              | Type   | Description                                                                       |
| ------------------ | ------ | --------------------------------------------------------------------------------- |
| `data`             | array  | List of entities for which labels were successfully removed.                      |
| `.entityId`        | string | Identifier of the entity.                                                         |
| `.removedLabelIds` | array  | List of label IDs that were removed from the entity.                              |
| `warnings`         | array  | List of non-blocking warnings (for example, label already inactive).              |
| `.code`            | number | Numeric warning code.                                                             |
| `.field`           | string | Name of the field that caused the warning.                                        |
| `.labelExternalId` | string | External ID of the entity that triggered the warning. Present when entity-scoped. |
| `.message`         | string | Description of the warning.                                                       |
| `errors`           | array  | List of errors for removal items that failed.                                     |
| `.code`            | number | Numeric error code.                                                               |
| `.field`           | string | Name of the field that caused the error.                                          |
| `.labelExternalId` | string | External ID of the entity that caused the error. Present when entity-scoped.      |
| `.message`         | string | Description of the error.                                                         |

> **Note:** If some removal items succeed and others fail, the API returns HTTP 207. If all removal items fail, the API returns HTTP 400. If all removal items succeed, the API returns HTTP 200.

## Error & warning codes

| Code                                            | Error number | Type    | Description                                                                                                  |
| ----------------------------------------------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------------ |
| `ASSIGNMENT_REQUEST_BODY_EMPTY`                 | 23031        | Error   | Request body must contain at least one removal item. HTTP 400.                                               |
| `ASSIGNMENT_BATCH_SIZE_EXCEEDED`                | 23032        | Error   | Maximum 100 removal items can be processed in a single request. HTTP 400.                                    |
| `ASSIGNMENT_ENTITY_TYPE_REQUIRED`               | 23033        | Error   | `entityType` is required. HTTP 400.                                                                          |
| `ASSIGNMENT_INVALID_ENTITY_TYPE`                | 23034        | Error   | Invalid entity type. Supported values: `CUSTOMER`, `PRODUCT`, `STORE`. HTTP 400.                             |
| `ASSIGNMENT_NOT_ASSIGNED_TO_ENTITY`             | 23050        | Error   | The label is not assigned to this entity. HTTP 400.                                                          |
| `ASSIGNMENT_ALREADY_INACTIVE`                   | 23051        | Warning | The label assignment is already inactive or expired for this entity.                                         |
| `ASSIGNMENT_REMOVAL_ENTITY_ID_REQUIRED`         | 23052        | Error   | `entityId` is required for each removal item. HTTP 400.                                                      |
| `ASSIGNMENT_REMOVAL_LABEL_IDS_REQUIRED`         | 23053        | Error   | At least one of `labelIds`, `labelNames`, or `labelExternalIds` is required for each removal item. HTTP 400. |
| `ASSIGNMENT_LOCK_FAILED`                        | 23055        | Error   | Could not acquire lock for the entity. Retry after a short delay. HTTP 409.                                  |
| `ASSIGNMENT_REMOVAL_LABEL_IDENTIFIER_AMBIGUOUS` | 23058        | Error   | Only one of `labelIds`, `labelNames`, or `labelExternalIds` is allowed per removal item. HTTP 400.           |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Remove label assignments",
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
      "delete": {
        "summary": "Remove label assignments",
        "operationId": "remove-label-assignments",
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
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "entityType",
                  "removals"
                ],
                "properties": {
                  "entityType": {
                    "type": "string",
                    "enum": [
                      "CUSTOMER",
                      "PRODUCT",
                      "STORE"
                    ]
                  },
                  "removals": {
                    "type": "array",
                    "maxItems": 100,
                    "items": {
                      "type": "object",
                      "required": [
                        "entityId"
                      ],
                      "properties": {
                        "entityId": {
                          "type": "string"
                        },
                        "labelIds": {
                          "type": "array",
                          "items": {
                            "type": "integer"
                          }
                        },
                        "labelNames": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "labelExternalIds": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "example": {
                "entityType": "CUSTOMER",
                "removals": [
                  {
                    "entityId": "<ENTITY_ID>",
                    "labelIds": [
                      109
                    ]
                  }
                ]
              }
            }
          }
        },
        "security": [
          {
            "basicAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "All assignments removed.",
            "content": {
              "application/json": {
                "example": {
                  "data": [
                    {
                      "entityId": "<ENTITY_ID>",
                      "removedLabelIds": [
                        109
                      ]
                    }
                  ],
                  "warnings": [],
                  "errors": []
                }
              }
            }
          },
          "207": {
            "description": "Partial success — some removed, some with warnings."
          },
          "400": {
            "description": "All removals failed validation."
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