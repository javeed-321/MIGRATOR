> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update labels

Update one or more labels for an organization in a single request. Labels are flexible metadata tags applied to customers, products, or stores that act as reusable building blocks in promotions, campaigns, and analytics.

You can update a label's name, external ID, description, expiry configuration, or status. To retire a label from use, set its status to `ARCHIVED`. You can update up to 10 labels per request.

> **Note:** Updating a label's name or metadata reflects immediately across all items that currently have the label assigned. Updating the expiry configuration applies only to future assignments — existing assignments retain their original expiry dates.

## Example request

```bash ARCHIVED
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/labels' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDNjYjBlZWE4YTcwNmM0YzM0YTE2ODkxZjg0ZTdi' \
--data '{
  "labels": [
    {
      "labelId": "102",
      "status": "ARCHIVED"
    }
  ]
}'
```
```text Expiry date change
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/labels' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyTcwNmM0YzM0YTE2ODkxZjg0ZTdi' \
--data '{
  "labels": [
    {
      "labelId": "120",
      "expiryConfig": {
        "type": "FIXED_DATE",
        "expiryDate": "2100-06-30T23:59:59+05:30"
      }
    }
  ]
}'
```
```text bulk update
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/labels' \
--header 'Content-Type: application/json' \
--header 'X-CAP-API-OAUTH-TOKEN: {{your_token_here}}' \
--data '{
  "labels": [
    {
      "labelId": 114,
      "description": "Updated: High-value customer segment (Gold tier)"
    },
    {
      "labelId": 115,
      "description": "Updated: Flagship store - no expiry"
    },
    {
      "labelId": 119,
      "expiryConfig": { "type": "RELATIVE", "unit": "YEARS", "value": 2 }
    }
  ]
}'
```

## Prerequisites

* Basic authentication (`Authorization: Basic {base64_credentials}`) or OAuth (`X-CAP-API-OAUTH-TOKEN`).
* Access to Label access group resource

## Body parameters

> **Note:** The **Updatable** column indicates whether a field can be changed after creation. Fields marked **No** are identifiers and must match an existing label.

| Field            | Type   | Required     | Description                                                                                                                                                                                                                                                   | Updatable |
| ---------------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `labels`         | array  | **Required** | List of labels to update. Maximum 10 labels per request.                                                                                                                                                                                                      | No        |
| `.labelId`       | number | **Required** | Unique identifier of the label to update.                                                                                                                                                                                                                     | No        |
| `.name`          | string | Optional     | New name for the label. Must be unique within the same entity type and organization. Max 255 characters.                                                                                                                                                      | Yes       |
| `.externalId`    | string | Optional     | New external identifier for the label. Must be unique within the same entity type and organization. Max 255 characters.                                                                                                                                       | Yes       |
| `.description`   | string | Optional     | New description for the label. Max 1,024 characters.                                                                                                                                                                                                          | Yes       |
| `.expiryConfig`  | object | Optional     | New expiry configuration for the label.                                                                                                                                                                                                                       | Yes       |
| `..type`         | enum   | Optional     | Expiry type. Supported values: `NONE` — the label does not expire. `FIXED_DATE` — the label expires on a specific date set in `expiryDate`. `RELATIVE` — the label expires after a set duration from creation, defined by `unit` and `value`. Case-sensitive. | Yes       |
| `..expiryDate`   | string | Conditional  | Expiry date in ISO-8601 format: `YYYY-MM-DDThh:mm:ssZ` (for example, `2026-12-31T23:59:59+05:30`). Required when `type` is `FIXED_DATE`. Must be a future date.                                                                                               | Yes       |
| `..unit`         | enum   | Conditional  | Duration unit for the relative expiry. Required when `type` is `RELATIVE`. Supported values: `DAYS` — duration in days. `MONTHS` — duration in months. `YEARS` — duration in years.                                                                           | Yes       |
| `..value`        | number | Conditional  | Duration value for the relative expiry. Required when `type` is `RELATIVE`. Must be a non-negative integer.                                                                                                                                                   | Yes       |
| `..roundingUnit` | string | Optional     | Rounding unit for the expiry duration. Applicable when `type` is `RELATIVE`.                                                                                                                                                                                  | Yes       |
| `.status`        | enum   | Optional     | New status for the label. Supported values: `ACTIVE` — the label is available for new assignments. `ARCHIVED` — the label is retired and cannot be assigned to new entities. To reactivate an archived label, set `status` to `ACTIVE`.                       | Yes       |

## Example response

```json name change
{
    "data": [
        {
            "id": 120,
            "externalId": "docdemo-summer-002",
            "name": "DocDemo-Summer-Sale_update",
            "description": "Updated: Summer 2026 sale products",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "FIXED_DATE",
                "expiryDate": "2099-12-31T23:59:59+05:30"
            },
            "status": "ACTIVE",
            "createdOn": "2026-06-05T05:15:09Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T11:14:29Z",
            "lastUpdatedBy": 75197399
        }
    ],
    "warnings": [],
    "errors": []
}
```
```text label archived
{
    "data": [
        {
            "id": 102,
            "externalId": "summersale101",
            "name": "Summer Sale101",
            "description": "Products on summer sale",
            "entityType": "PRODUCT",
            "expiryConfig": {
                "type": "FIXED_DATE",
                "expiryDate": "2099-12-31T23:59:59+05:30"
            },
            "status": "ARCHIVED",
            "createdOn": "2026-06-02T14:23:07Z",
            "createdBy": 75197399,
            "lastUpdatedOn": "2026-06-05T11:34:24Z",
            "lastUpdatedBy": 75197399
        }
    ],
    "warnings": [],
    "errors": []
}
```
```text expiry config change
{
    "data": [
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
        }
    ],
    "warnings": [],
    "errors": []
}
```

## Response parameters

| Field            | Type   | Description                                                                                        |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------- |
| `data`           | array  | List of successfully updated label objects.                                                        |
| `.id`            | number | Unique identifier of the label.                                                                    |
| `.externalId`    | string | External identifier of the label.                                                                  |
| `.name`          | string | Name of the label.                                                                                 |
| `.description`   | string | Description of the label.                                                                          |
| `.entityType`    | string | Entity type the label applies to. One of `CUSTOMER`, `PRODUCT`, or `STORE`.                        |
| `.expiryConfig`  | object | Expiry configuration for the label.                                                                |
| `..type`         | string | Expiry type. One of `NONE`, `FIXED_DATE`, or `RELATIVE`.                                           |
| `..expiryDate`   | string | Expiry date in ISO-8601 format as provided. Present when `type` is `FIXED_DATE`.                   |
| `..unit`         | string | Duration unit. Present when `type` is `RELATIVE`. One of `DAYS`, `MONTHS`, or `YEARS`.             |
| `..value`        | number | Duration value. Present when `type` is `RELATIVE`.                                                 |
| `.status`        | string | Current status of the label. One of `ACTIVE` or `ARCHIVED`.                                        |
| `.createdOn`     | string | UTC timestamp when the label was created in the server's timezone. Format: `YYYY-MM-DDThh:mm:ssZ`. |
| `.createdBy`     | number | ID of the user who created the label.                                                              |
| `.lastUpdatedOn` | string | UTC timestamp when the label was last updated in server timezone. Format: `YYYY-MM-DDThh:mm:ssZ`.  |
| `.lastUpdatedBy` | number | ID of the user who last updated the label.                                                         |
| `warnings`       | array  | List of warnings. Empty when no warnings occur.                                                    |
| `errors`         | array  | List of errors for labels that failed to update.                                                   |
| `.code`          | number | Numeric error code.                                                                                |
| `.field`         | string | Name of the field that caused the error.                                                           |
| `.labelId`       | number | ID of the label item that failed.                                                                  |
| `.message`       | string | Description of the error.                                                                          |

> **Note:** If some labels are updated and others fail, the API returns HTTP 207. If all labels fail, the API returns HTTP 400. If all labels are updated successfully, the API returns HTTP 200.

## Error & warning codes

| Code                                   | Error number | Type  | Description                                                                               |
| -------------------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------- |
| `LABEL_EXPIRY_DATE_PAST`               | 23004        | Error | Expiry date must be a future date. HTTP 400.                                              |
| `LABEL_UNSUPPORTED_TIME_UNIT`          | 23005        | Error | Unsupported time unit. Supported values: `DAYS`, `MONTHS`, `YEARS`. HTTP 400.             |
| `LABEL_NAME_TOO_LONG`                  | 23007        | Error | Label name must not exceed 255 characters. HTTP 400.                                      |
| `LABEL_EXTERNAL_ID_TOO_LONG`           | 23008        | Error | External ID must not exceed 255 characters. HTTP 400.                                     |
| `LABEL_DESCRIPTION_TOO_LONG`           | 23009        | Error | Description must not exceed 1,024 characters. HTTP 400.                                   |
| `LABEL_RELATIVE_EXPIRY_UNIT_REQUIRED`  | 23010        | Error | `unit` is required when `expiryConfig.type` is `RELATIVE`. HTTP 400.                      |
| `LABEL_RELATIVE_EXPIRY_VALUE_REQUIRED` | 23011        | Error | `value` must be a non-negative integer when `expiryConfig.type` is `RELATIVE`. HTTP 400.  |
| `LABEL_FIXED_EXPIRY_DATE_REQUIRED`     | 23012        | Error | `expiryDate` is required when `expiryConfig.type` is `FIXED_DATE`. HTTP 400.              |
| `LABEL_INVALID_EXPIRY_CONFIG_TYPE`     | 23013        | Error | Invalid expiry config type. Supported values: `NONE`, `FIXED_DATE`, `RELATIVE`. HTTP 400. |
| `LABEL_INVALID_EXPIRY_DATE_FORMAT`     | 23014        | Error | Invalid expiry date format. Expected ISO-8601 format: `YYYY-MM-DDThh:mm:ssZ`. HTTP 400.   |
| `LABEL_BATCH_SIZE_EXCEEDED`            | 23021        | Error | Maximum 10 labels can be updated in a single request. HTTP 400.                           |
| `LABEL_REQUEST_BODY_EMPTY`             | 23022        | Error | Request body must contain at least one label. HTTP 400.                                   |
| `LABEL_NOT_FOUND`                      | 23025        | Error | Label with the specified ID does not exist. HTTP 400.                                     |
| `LABEL_ARCHIVED`                       | 23026        | Error | Label is archived. Only a status change to `ACTIVE` is allowed. HTTP 400.                 |
| `LABEL_UPDATE_NAME_DUPLICATE`          | 23027        | Error | An active label with this name already exists for this entity type. HTTP 409.             |
| `LABEL_UPDATE_EXTERNAL_ID_DUPLICATE`   | 23028        | Error | An active label with this external ID already exists for this entity type. HTTP 409.      |
| `LABEL_UPDATE_LOCK_FAILED`             | 23029        | Error | Could not acquire lock for label update. Retry after a short delay. HTTP 409.             |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Update labels",
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
      "put": {
        "summary": "Update labels",
        "operationId": "update-labels",
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
                "properties": {
                  "labels": {
                    "type": "array",
                    "maxItems": 10,
                    "items": {
                      "type": "object",
                      "required": [
                        "labelId"
                      ],
                      "properties": {
                        "labelId": {
                          "type": "integer"
                        },
                        "name": {
                          "type": "string",
                          "maxLength": 255
                        },
                        "externalId": {
                          "type": "string",
                          "maxLength": 255
                        },
                        "description": {
                          "type": "string",
                          "maxLength": 1024
                        },
                        "expiryConfig": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string",
                              "enum": [
                                "NONE",
                                "FIXED_DATE",
                                "RELATIVE"
                              ]
                            },
                            "expiryDate": {
                              "type": "string"
                            },
                            "unit": {
                              "type": "string",
                              "enum": [
                                "DAYS",
                                "MONTHS",
                                "YEARS"
                              ]
                            },
                            "value": {
                              "type": "integer"
                            },
                            "roundingUnit": {
                              "type": "string"
                            }
                          }
                        },
                        "status": {
                          "type": "string",
                          "enum": [
                            "ACTIVE",
                            "ARCHIVED"
                          ]
                        }
                      }
                    }
                  }
                }
              },
              "example": {
                "labels": [
                  {
                    "labelId": 101,
                    "name": "Summer Sale Updated",
                    "status": "ARCHIVED"
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
            "description": "All labels updated.",
            "content": {
              "application/json": {
                "example": {
                  "data": [
                    {
                      "id": 101,
                      "externalId": "summer-sale-2026",
                      "name": "Summer Sale Updated",
                      "entityType": "PRODUCT",
                      "expiryConfig": {
                        "type": "FIXED_DATE",
                        "expiryDate": "2027-12-31T23:59:59+05:30"
                      },
                      "status": "ARCHIVED",
                      "createdOn": "2026-06-04T10:42:24Z",
                      "createdBy": 75216507,
                      "lastUpdatedOn": "2026-06-04T10:46:43Z",
                      "lastUpdatedBy": 75216507
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
            "description": "All labels failed validation."
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