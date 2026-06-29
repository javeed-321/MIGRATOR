> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Create label assignments

Assign one or more labels to entities in a single request. Each assignment links a label to an entity (customer, product, or store) and optionally sets an expiry date for the assignment. You can create up to 100 assignments per request. Each entity is capped at 200 active labels.

> 📘 Creation of new label
>
> If `labelName` is provided and no active label with that name exists for the entity type, the API automatically creates a new label with no expiry before creating the assignment. To set an external ID on the auto-created label, provide `labelExternalId` as well — it must also not already exist.

## Example request

```bash Single assignment
curl --location 'https://eu.api.capillarytech.com/v2/labels/assignments' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcYTcwNmM0YzM0YTE2ODkxZjg0ZTdi' \
--data '{
  "entityType": "PRODUCT",
  "assignments": [
    {
      "entityId": "505102",
      "labelExternalId": "docdemo-vip-007"
      
    }
  ]
}'
```
```text Assign to multiple entities
curl --location --globoff '{{base_url}}/v2/labels/assignments' \
--header 'Content-Type: application/json' \
--data '{
  "entityType": "PRODUCT",
  "assignments": [
    { "entityId": "Addon-043",  "labelExternalId": "docdemo-flash-001" },
    { "entityId": "Cheese dip", "labelExternalId": "docdemo-flash-001" },
    { "entityId": "1",          "labelExternalId": "docdemo-flash-001" }
  ]
}'
```
```text With label name and external ID
curl --location --globoff '{{base_url}}/v2/labels/assignments' \
--header 'Content-Type: application/json' \
--data '{
  "entityType": "PRODUCT",
  "assignments": [
    {
      "entityId": "505101",
      "labelName": "DocDemo-Flash-Sale",
      "labelExternalId": "docdemo-flash-001"
    }
  ]
}'
```

## Prerequisites

* Basic authentication (`Authorization: Basic {base64_credentials}`) or OAuth (`X-CAP-API-OAUTH-TOKEN`).
* The label must already exist and be active. Create labels using [Create labels](post_v2-labels).
* Access to Labels access group resource

## Body parameters

| Field              | Type   | Required     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityType`       | enum   | **Required** | Entity type for all assignments in this request. Supported values: `CUSTOMER` — applies the label to a customer. `PRODUCT` — applies the label to a product. `STORE` — applies the label to a store. Case-sensitive.                                                                                                                                                                                                                        |
| `assignments`      | array  | **Required** | List of label assignments to create. Maximum 100 assignments per request.                                                                                                                                                                                                                                                                                                                                                                   |
| `.entityId`        | string | **Required** | Identifier of the entity to assign the label to.                                                                                                                                                                                                                                                                                                                                                                                            |
| `.labelName`       | string | Conditional  | Specifies the name of the label to assign. Obtain this from the `name` field returned by the [Create labels](https://docs.capillarytech.com/reference/create-labels) or [Get labels](https://docs.capillarytech.com/reference/get-labels) API. Required if `labelExternalId` is not provided. If both are provided, they must resolve to the same label. If the label name does not exist, the API auto-creates a new label with no expiry. |
| `.labelExternalId` | string | Conditional  | Specifies the external identifier of the label to assign. Obtain this from the `externalId` field returned by the [Create labels](https://docs.capillarytech.com/reference/create-labels) or [Get labels](https://docs.capillarytech.com/reference/get-labels) API. Required if `labelName` is not provided. If both are provided, they must resolve to the same label.                                                                     |
| `.expiryDate`      | string | Optional     | Expiry date for the assignment in ISO-8601 format: `YYYY-MM-DDThh:mm:ssZ` (for example, `2026-12-31T23:59:59+05:30`). Must be a future date. If not provided, inherits the label's expiry date. If the label has a relative expiry, the expiry is calculated in UTC.                                                                                                                                                                        |

## Example response

```json
{
  "data": [
    {
      "assignmentId": 1,
      "entityId": "<ENTITY_ID>",
      "labelId": 109,
      "labelName": "VIP",
      "labelExternalId": "vip-tier",
      "expiryDate": "2027-06-04T18:29:59Z"
    }
  ],
  "warnings": [],
  "errors": []
}
```
```text partial success
{
  "data": [
    {
      "assignmentId": 20,
      "entityId": "1",
      "labelId": 119,
      "labelName": "DocDemo-Clearance",
      "labelExternalId": "docdemo-clearance-001",
      "expiryDate": "2028-06-05T18:29:59Z"
    }
  ],
  "warnings": [],
  "errors": [
    {
      "code": 23044,
      "field": "labelName",
      "labelExternalId": "505101",
      "message": "Label 'DocDemo-Flash-Sale' is already assigned to entity '505101'."
    }
  ]
}
```
```text multiple assignments
{
  "data": [
    {
      "assignmentId": 15,
      "entityId": "Addon-043",
      "labelId": 116,
      "labelName": "DocDemo-Flash-Sale",
      "labelExternalId": "docdemo-flash-001",
      "expiryDate": "2026-09-03T18:29:59Z"
    },
    {
      "assignmentId": 16,
      "entityId": "Cheese dip",
      "labelId": 116,
      "labelName": "DocDemo-Flash-Sale",
      "labelExternalId": "docdemo-flash-001",
      "expiryDate": "2026-09-03T18:29:59Z"
    },
    {
      "assignmentId": 17,
      "entityId": "1",
      "labelId": 116,
      "labelName": "DocDemo-Flash-Sale",
      "labelExternalId": "docdemo-flash-001",
      "expiryDate": "2026-09-03T18:29:59Z"
    }
  ],
  "warnings": [],
  "errors": []
}
```

## Response parameters

| Field              | Type   | Description                                                                                                                                                                 |
| ------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`             | array  | List of successfully created assignments.                                                                                                                                   |
| `.assignmentId`    | number | Unique identifier of the created assignment.                                                                                                                                |
| `.entityId`        | string | Identifier of the entity the label was assigned to.                                                                                                                         |
| `.labelId`         | number | Unique identifier of the assigned label.                                                                                                                                    |
| `.labelName`       | string | Name of the assigned label.                                                                                                                                                 |
| `.labelExternalId` | string | External identifier of the assigned label.                                                                                                                                  |
| `.expiryDate`      | string | Expiry date and time of the assignment in UTC, in ISO-8601 format. When the label has a `RELATIVE` expiry config, this is computed automatically from the label definition. |
| `warnings`         | array  | List of warnings. Empty when no warnings occur.                                                                                                                             |
| `errors`           | array  | List of errors for assignments that failed.                                                                                                                                 |
| `.code`            | number | Numeric error code.                                                                                                                                                         |
| `.field`           | string | Name of the field that caused the error.                                                                                                                                    |
| `.labelExternalId` | string | External ID of the entity that caused the error. Present when the error is entity-scoped.                                                                                   |
| `.message`         | string | Description of the error.                                                                                                                                                   |

> **Note:** If some assignments are created and others fail, the API returns HTTP 207. If all assignments fail, the API returns HTTP 400. If all assignments are created successfully, the API returns HTTP 200.
>
> **Note:** When `expiryDate` is provided and the org does not have a timezone configured, the API returns HTTP 400 with no response body. Contact your Capillary account team to configure org timezone.

## Error & warning codes

| Code                                    | Error number | Type  | Description                                                                                                              |
| --------------------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------ |
| `ASSIGNMENT_REQUEST_BODY_EMPTY`         | 23031        | Error | Request body must contain at least one assignment. HTTP 400.                                                             |
| `ASSIGNMENT_BATCH_SIZE_EXCEEDED`        | 23032        | Error | Maximum 100 assignments can be created in a single request. HTTP 400.                                                    |
| `ASSIGNMENT_ENTITY_TYPE_REQUIRED`       | 23033        | Error | `entityType` is required. HTTP 400.                                                                                      |
| `ASSIGNMENT_INVALID_ENTITY_TYPE`        | 23034        | Error | Invalid entity type. Supported values: `CUSTOMER`, `PRODUCT`, `STORE`. HTTP 400.                                         |
| `ASSIGNMENT_LABEL_IDENTIFIER_REQUIRED`  | 23035        | Error | Either `labelName` or `labelExternalId` is required. HTTP 400.                                                           |
| `ASSIGNMENT_LABEL_NOT_FOUND`            | 23037        | Error | No active label found for the given identifier and entity type. HTTP 400.                                                |
| `ASSIGNMENT_LABEL_IDENTIFIER_AMBIGUOUS` | 23038        | Error | `labelName` and `labelExternalId` resolve to different labels. Provide only one. HTTP 400.                               |
| `ASSIGNMENT_EXPIRY_DATE_PAST`           | 23039        | Error | Expiry date must be a future date. HTTP 400.                                                                             |
| `ASSIGNMENT_INVALID_EXPIRY_DATE_FORMAT` | 23040        | Error | Invalid expiry date format. Expected: `yyyy-MM-dd` (for example, `2026-08-31`). HTTP 400.                                |
| `ASSIGNMENT_MAX_LABELS_PER_ENTITY`      | 23043        | Error | Entity already has the maximum number of active labels allowed. HTTP 400.                                                |
| `ASSIGNMENT_ALREADY_EXISTS`             | 23044        | Error | This label is already assigned to the entity. HTTP 409.                                                                  |
| `ASSIGNMENT_ENTITY_NOT_FOUND`           | 23045        | Error | Entity with the given ID does not exist. HTTP 400.                                                                       |
| `ASSIGNMENT_LOCK_FAILED`                | 23055        | Error | Could not acquire lock for the entity. Another assignment operation is in progress. Retry after a short delay. HTTP 409. |
| `ORG_TIMEZONE_NOT_CONFIGURED`           | 23056        | Error | The organization does not have a timezone configured. HTTP 400.                                                          |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Create label assignments",
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
      "post": {
        "summary": "Create label assignments",
        "operationId": "create-label-assignments",
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
                  "assignments"
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
                  "assignments": {
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
                        "labelName": {
                          "type": "string"
                        },
                        "labelExternalId": {
                          "type": "string"
                        },
                        "expiryDate": {
                          "type": "string",
                          "format": "date"
                        }
                      }
                    }
                  }
                }
              },
              "example": {
                "entityType": "CUSTOMER",
                "assignments": [
                  {
                    "entityId": "<ENTITY_ID>",
                    "labelName": "VIP"
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
            "description": "All assignments created.",
            "content": {
              "application/json": {
                "example": {
                  "data": [
                    {
                      "assignmentId": 1,
                      "entityId": "<ENTITY_ID>",
                      "labelId": 109,
                      "labelName": "VIP",
                      "labelExternalId": "vip-tier",
                      "expiryDate": "2027-06-04T18:29:59Z"
                    }
                  ],
                  "warnings": [],
                  "errors": []
                }
              }
            }
          },
          "207": {
            "description": "Partial success."
          },
          "400": {
            "description": "All assignments failed validation."
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