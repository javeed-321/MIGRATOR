> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Currency Expiry

Update expiry dates for points earned by a customer. 

This API updates the expiry date of points earned by a customer. It uses a customer ID and transaction reference data.

# Prerequisites

* Authentication: Basic/OAuth authentication
* Access group: Default access group

# Resource information

| Property                   | Value                   |
| -------------------------- | ----------------------- |
| **URI**                    | /v2/points/updateExpiry |
| **HTTP Method**            | POST                    |
| **Pagination**             | Not supported           |
| **Batch support**          | Not supported           |
| **Rate limit information** | Not Applicable          |

# Example request

```curl
curl -L 'https://eu.api.capillarytech.com/v2/points/updateExpiry' \
-H 'Authorization: Bearer <YOUR_BEARER_TOKEN>' \
-H 'X-CAP-API-AUTH: <YOUR_CAPILLARY_API_TOKEN>' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-d '{
    "expiryDateUpdateRequest": [
        {
            "identifierName": "id",
            "identifierValue": "172440986",
            "programId": 469,
            "pointsAwardedRefId": 117521910,
            "pointsAwardedRefType": "POINT_AWARDED",
            "expiryUpdateReasonType": "EARLY_EXPIRY",
            "expiryUpdateReasonNote": "Customer made a purchase above $100",
            "standardMeta": {
                "who_raised": "Naman",
                "who_approved": "Admin",
                "reason_for_trigger": "Extend points expiry"
            },
            "customMeta": {
                "abc": "xyz"
            },
            "expiryDate": {
                "expiryType": "FIXED_DATE",
                "expiryValue": "2025-08-09"
            }
        }
    ]
}'
```

# Request body parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
      </th>

      <th>
        Mandatory
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `expiryDateUpdateRequest`
      </td>

      <td>
        object
      </td>

      <td>
        Yes
      </td>

      <td>
        Object containing details about the customer, the program ID, the identifiers for the points, and the metadata for the points expiration.
      </td>
    </tr>

    <tr>
      <td>
            `identifierName`
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Identifier type for customer ID. Supported values: `mobile`, `id`, `externalId`, `email`.
      </td>
    </tr>

    <tr>
      <td>
            `identifierValue`
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Value corresponding to the `identifierName` provided.
      </td>
    </tr>

    <tr>
      <td>
            `programId`
      </td>

      <td>
        integer (int64)
      </td>

      <td>
        Yes
      </td>

      <td>
        Unique ID of the loyalty program. To retrieve the `programId`, use the [Get Loyalty Programs API](https://docs.capillarytech.com/reference/get-loyalty-programs).
      </td>
    </tr>

    <tr>
      <td>
            `pointsAwardedRefId`
      </td>

      <td>
        integer (int64)
      </td>

      <td>
        Yes
      </td>

      <td>
        Unique reference ID generated when points are awarded to a user. To retrieve the     `pointsAwardedRefId`, use the [Get points awarded ID API](https://docs.capillarytech.com/reference/get-paid#/).
      </td>
    </tr>

    <tr>
      <td>
            `pointsAwardedRefType`
      </td>

      <td>
        enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Type of points awarded to the user. Supported values:
        `POINT_AWARDED`, `POINT_AWARDED_BILL_PROMOTION`, `POINT_AWARDED_LINEITEM`, `POINT_AWARDED_LINEITEM_PROMOTION`, `POINT_AWARDED_CUSTOMER_PROMOTION`.
      </td>
    </tr>

    <tr>
      <td>
            `currencyName`
      </td>

      <td>
        string
      </td>

      <td>
        No
      </td>

      <td>
        Name of the reward currency. To retrieve the `currencyName`, refer to documentation the on [Viewing alternate currencies](https://docs.capillarytech.com/docs/alternate-currencies#/viewing-alternate-currencies).
      </td>
    </tr>

    <tr>
      <td>
            `pointCategoryType`
      </td>

      <td>
        string
      </td>

      <td>
        No
      </td>

      <td>
        Type of points to update the expiry. Possible values:
        `REGULAR`, `PROMISED`
      </td>
    </tr>

    <tr>
      <td>
            `expiryUpdateReasonType`
      </td>

      <td>
        enum
      </td>

      <td>
        No
      </td>

      <td>
        Type of expiry modification. Supported values:
        `EARLY_EXPIRY`, `EXTEND_EXPIRY`.
      </td>
    </tr>

    <tr>
      <td>
            `expiryUpdateReasonNote`
      </td>

      <td>
        string
      </td>

      <td>
        No
      </td>

      <td>
        Reason for updating the points expiry date.
      </td>
    </tr>

    <tr>
      <td>
            `standardMeta`
      </td>

      <td>
        object
      </td>

      <td>
        No
      </td>

      <td>
        Object containing details about the user who raised and approved the request, along with the reason for updating the expiry of points.
      </td>
    </tr>

    <tr>
      <td>
                `who_raised`
      </td>

      <td>
        string
      </td>

      <td>
        No
      </td>

      <td>
        Name or username of the user who raised the points expiry update request.
      </td>
    </tr>

    <tr>
      <td>
                `who_approved`
      </td>

      <td>
        string
      </td>

      <td>
        No
      </td>

      <td>
        Name or username of the user who approved the points expiry update request.
      </td>
    </tr>

    <tr>
      <td>
                `reason_for_trigger`
      </td>

      <td>
        string
      </td>

      <td>
        No
      </td>

      <td>
        Reason for expiring or extending the points expiry update.
      </td>
    </tr>

    <tr>
      <td>
            `customMeta`
      </td>

      <td>
        object
      </td>

      <td>
        No
      </td>

      <td>
        Object containing details of custom metadata for the points expiry update.
      </td>
    </tr>

    <tr>
      <td>
            `expiryDate`
      </td>

      <td>
        object
      </td>

      <td>
        Yes
      </td>

      <td>
        Object containing details of the updated points expiry date.
      </td>
    </tr>

    <tr>
      <td>
                `expiryType`
      </td>

      <td>
        enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Type of points expiry. Supported values:

        * `FIXED_DATE`: Points expire on a fixed date.
        * `FIXED_DAYS`: Points expire after a fixed number of days.
        * `FIXED_MONTHS`: Points expire after a fixed number of months.
        * `IMMEDIATE`: Points expire immediately after the API request is executed.
      </td>
    </tr>

    <tr>
      <td>
                `expiryValue`
      </td>

      <td>
        string/date
      </td>

      <td>
        Yes
      </td>

      <td>
        The date in `YYYY-MM-DD` format or number of days after which the points expire. Timezone: Cluster-specific timezone.
      </td>
    </tr>
  </tbody>
</Table>

# Response body

```json Success
{
    "currencyExpiryUpdateResponse": [
        {
            "customerId": 172440986,
            "programId": 469,
            "currencyName": "POINTS",
            "pointsExpiryUpdateLogs": {
                "paType": "POINT_AWARDED",
                "paId": 117521910,
                "expiryUpdateReasonType": "EARLY_EXPIRY",
                "expiryUpdateReasonNote": "xyz",
                "oldExpiryDate": "2026-08-09 23:59:59",
                "oldExpiryDateISO": "2026-08-09T23:59:59Z",
                "newExpiryDate": "2026-08-09 23:59:59",
                "newExpiryDateISO": "2026-08-09T23:59:59Z",
                "eventLogId": 41420339,
                "eventDate": "2026-01-07 10:35:28",
                "eventDateISO": "2026-01-07T10:35:28Z",
                "standardMeta": {
                    "reason_for_trigger": "test",
                    "who_approved": "Admin",
                    "who_raised": "Naman"
                },
                "customMeta": {
                    "abc": "xyz"
                }
            }
        }
    ]
}
```
```json Error: Customer not found
{
    "currencyExpiryUpdateResponse": [],
    "failures": [
        {
            "pointsAwardedRefId": 117521910,
            "pointsAwardedRefType": "POINT_AWARDED",
            "errorCode": 8015,
            "errorMessage": "Customer not found for the given identifiers"
        }
    ]
}
```
```json Error: pointsAwardedRefId value is invalid or missing
{
    "currencyExpiryUpdateResponse": [],
    "failures": [
        {
            "pointsAwardedRefId": 1175219,
            "pointsAwardedRefType": "POINT_AWARDED",
            "errorCode": 3034,
            "errorMessage": "No points awarded found for reference type POINT_AWARDED and ID 1175219"
        }
    ]
}
```
```json Error: pointsAwardedRefType value is invalid or missing
{
    "errors": [
        {
            "status": false,
            "code": 8941,
            "message": "Valid values are: [POINT_AWARDED, POINT_AWARDED_BILL_PROMOTION, POINT_AWARDED_LINEITEM, POINT_AWARDED_LINEITEM_PROMOTION, POINT_AWARDED_CUSTOMER_PROMOTION]"
        }
    ]
}
```
```json Error: expiryType value is invalid or missing
{
    "errors": [
        {
            "status": false,
            "code": 8941,
            "message": "Valid values are: [FIXED_DATE, FIXED_DAYS, FIXED_MONTHS, IMMEDIATE]"
        }
    ]
}
```
```json Error: Expiry date provided is in the past
{
    "currencyExpiryUpdateResponse": [],
    "failures": [
        {
            "pointsAwardedRefId": 117521910,
            "pointsAwardedRefType": "POINT_AWARDED",
            "errorCode": 3037,
            "errorMessage": "Invalid expiry date: Expiry date must be in the future"
        }
    ]
}
```

## Response body parameters

<Table align={["left","left","left"]}>
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
        updateCurrencyExpiryDateResponse
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of the points expiry update request.
      </td>
    </tr>

    <tr>
      <td>
        .customerId
      </td>

      <td>
        integer (int64)
      </td>

      <td>
        Unique identifier of the customer whose points expiry is updated.
      </td>
    </tr>

    <tr>
      <td>
        .programId
      </td>

      <td>
        integer (int64)
      </td>

      <td>
        Unique identifier of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        .currencyName
      </td>

      <td>
        string
      </td>

      <td>
        Unique name of the currency whose expiry is updated.
      </td>
    </tr>

    <tr>
      <td>
        .pointsExpiryUpdateLogs
      </td>

      <td>
        object
      </td>

      <td>
        Object containing details of the points expiry update.
      </td>
    </tr>

    <tr>
      <td>
        ..paType
      </td>

      <td>
        enum
      </td>

      <td>
        Type of points awarded to the user. Possible values: `POINT_AWARDED`, `POINT_AWARDED_BILL_PROMOTION`, `POINT_AWARDED_LINEITEM`, `POINT_AWARDED_LINEITEM_PROMOTION`, `POINT_AWARDED_CUSTOMER_PROMOTION`.
      </td>
    </tr>

    <tr>
      <td>
        ..paId
      </td>

      <td>
        integer (int64)
      </td>

      <td>
        Unique reference ID is generated when points are awarded to a user.
      </td>
    </tr>

    <tr>
      <td>
        ..expiryUpdateReasonType
      </td>

      <td>
        enum
      </td>

      <td>
        Type of expiry modification. Possible values: `EARLY_EXPIRY`, `EXTEND_EXPIRY`.
      </td>
    </tr>

    <tr>
      <td>
        ..expiryUpdateReasonNote
      </td>

      <td>
        string
      </td>

      <td>
        Reason for updating the points expiry date.
      </td>
    </tr>

    <tr>
      <td>
        ..oldExpiryDate
      </td>

      <td>
        date
      </td>

      <td>
        Points expiry date before the change was requested in ISO 8601 format. Timezone: Cluster-specific timezone.  
        **Note:** This field will be deprecated in the future and is being replaced by `oldExpiryDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        ..oldExpiryDateISO
      </td>

      <td>
        date
      </td>

      <td>
        Indicates the points expiry date before the change was requested in ISO 8601 format, returned in the server timezone.

        EU server example:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example:  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..newExpiryDate
      </td>

      <td>
        date
      </td>

      <td>
        Points expiry date after the change was requested in ISO 8601 format. Timezone: Cluster-specific timezone.

        Note: This field will be deprecated in the future and is being replaced by newExpiryDateISO.
      </td>
    </tr>

    <tr>
      <td>
        ..newExpiryDateISO
      </td>

      <td>
        date
      </td>

      <td>
        Indicates the points expiry date after the change was requested in ISO 8601 format, returned in the server timezone.

        EU server example:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..eventLogId
      </td>

      <td>
        integer
      </td>

      <td>
        Unique ID that is generated when the event is triggered.
      </td>
    </tr>

    <tr>
      <td>
        ..eventDate
      </td>

      <td>
        date
      </td>

      <td>
        Date when the points expiry update was requested in ISO 8601 format. Timezone: Cluster-specific timezone.

        Note: This field will be deprecated in the future and is being replaced by `eventDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        ..eventDateISO
      </td>

      <td>
        date
      </td>

      <td>
        Indicates the date when the points expiry update was requested in ISO 8601 format, returned in the server timezone.

        EU server example:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note: **The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..standardMeta
      </td>

      <td>
        object
      </td>

      <td>
        Object containing details of the reason and users who raised and approved the request.
      </td>
    </tr>

    <tr>
      <td>
        ...reason_for_trigger
      </td>

      <td>
        string
      </td>

      <td>
        Reason for expiring or extending the points expiry update.
      </td>
    </tr>

    <tr>
      <td>
        ...who_approved
      </td>

      <td>
        string
      </td>

      <td>
        Name or username of the user who approved the points expiry update request.
      </td>
    </tr>

    <tr>
      <td>
        ...who_raised
      </td>

      <td>
        string
      </td>

      <td>
        Name or username of the user who approved the points expiry update request.
      </td>
    </tr>

    <tr>
      <td>
        ..customMeta
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of custom metadata.
      </td>
    </tr>
  </tbody>
</Table>

Note: I also removed the "=" character that was incorrectly placed before "oldExpiryDate" in the original table.

## API specific errors

| Error Code | Description                                               | Reason                                                                                        |
| ---------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 8931       | Points expiry update request is invalid or empty          | Required fields are invalid or missing                                                        |
| 8932       | Identifier name is required for the points expiry update  | Customer identifier name is invalid or missing                                                |
| 8933       | Identifier value is required for the points expiry update | Customer identifier type is invalid or missing                                                |
| 8934       | Program ID is required for points expiry update           | Program ID provided is missing or invalid.                                                    |
| 8935       | Invalid standard meta key                                 | Values provided in the `standardMeta` object is invalid or missing.                           |
| 8936       | Points expiry update failed                               | Operation failed due to some reason. Check if all required parameters are provided and valid. |
| 8937       | Points awarded reference ID is required                   | `pointsAwardedRefId` is missing or invalid.                                                   |
| 8938       | Points awarded reference type is required                 | `pointsAwardedRefType` is missing or invalid.                                                 |
| 8942       | Points expiry date is mandatory                           | `expiryDate` and its respective arrays are missing or invalid.                                |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Points Expiry API",
    "version": "1.0.0",
    "description": "API for updating points expiry dates."
  },
  "servers": [
    {
      "url": "{hostname}/v2",
      "variables": {
        "hostname": {
          "default": "api.example.com",
          "description": "API hostname (e.g., eu.api.capillarytech.com)"
        }
      }
    }
  ],
  "security": [
    {
      "basicAuth": []
    },
    {
      "BearerAuth": [],
      "X-CAP-API-AUTH": []
    }
  ],
  "paths": {
    "/points/updateExpiry": {
      "post": {
        "summary": "Update Points Expiry",
        "description": "Updates expiry dates for points based on customer identifier and transaction reference data.",
        "parameters": [
          {
            "$ref": "#/components/parameters/AuthorizationHeader"
          },
          {
            "$ref": "#/components/parameters/XCapApiAuthHeader"
          },
          {
            "$ref": "#/components/parameters/ContentTypeHeader"
          },
          {
            "$ref": "#/components/parameters/AcceptHeader"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PointsExpiryUpdateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PointsExpiryUpdateSuccessResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request - Validation failed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PointsExpiryUpdateErrorResponse"
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
      "BearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      },
      "X-CAP-API-AUTH": {
        "type": "apiKey",
        "in": "header",
        "name": "X-CAP-API-AUTH"
      },
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    },
    "parameters": {
      "AuthorizationHeader": {
        "name": "Authorization",
        "in": "header",
        "description": "Bearer token or authentication header",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      "XCapApiAuthHeader": {
        "name": "X-CAP-API-AUTH",
        "in": "header",
        "description": "Capillary API authentication token",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      "ContentTypeHeader": {
        "name": "Content-Type",
        "in": "header",
        "description": "Must be application/json",
        "required": false,
        "schema": {
          "type": "string",
          "enum": [
            "application/json"
          ]
        }
      },
      "AcceptHeader": {
        "name": "Accept",
        "in": "header",
        "description": "Must be application/json",
        "required": false,
        "schema": {
          "type": "string",
          "enum": [
            "application/json"
          ]
        }
      }
    },
    "schemas": {
      "PointsExpiryUpdateRequest": {
        "type": "object",
        "properties": {
          "expiryDateUpdateRequest": {
            "type": "array",
            "description": "List of expiry update requests",
            "items": {
              "$ref": "#/components/schemas/PointsExpiryUpdateRequestItem"
            }
          }
        },
        "required": [
          "expiryDateUpdateRequest"
        ]
      },
      "PointsExpiryUpdateRequestItem": {
        "type": "object",
        "properties": {
          "identifierName": {
            "type": "string",
            "description": "Customer identifier type (e.g., 'mobile', 'email', 'customerId', 'externalId', 'id')",
            "enum": [
              "mobile",
              "email",
              "customerId",
              "externalId",
              "id"
            ]
          },
          "identifierValue": {
            "type": "string",
            "description": "Customer identifier value"
          },
          "programId": {
            "type": "integer",
            "format": "int64",
            "description": "Loyalty program identifier"
          },
          "pointsAwardedRefId": {
            "type": "integer",
            "format": "int64",
            "description": "Reference ID of the points transaction"
          },
          "pointsAwardedRefType": {
            "type": "string",
            "description": "Type of points award reference",
            "enum": [
              "POINT_AWARDED",
              "POINT_AWARDED_BILL_PROMOTION",
              "POINT_AWARDED_LINEITEM",
              "POINT_AWARDED_LINEITEM_PROMOTION",
              "POINT_AWARDED_CUSTOMER_PROMOTION"
            ]
          },
          "currencyName": {
            "type": "string",
            "description": "Name of the points currency (e.g., 'Main')",
            "default": "POINTS"
          },
          "pointCategoryType": {
            "type": "string",
            "description": "Category of points",
            "enum": [
              "REGULAR",
              "PROMISED"
            ]
          },
          "expiryUpdateReasonType": {
            "type": "string",
            "description": "Type of expiry update (e.g., 'EARLY_EXPIRY', 'EXTEND_EXPIRY')"
          },
          "expiryUpdateReasonNote": {
            "type": "string",
            "description": "Reason for updating expiry date"
          },
          "standardMeta": {
            "$ref": "#/components/schemas/StandardMeta"
          },
          "customMeta": {
            "$ref": "#/components/schemas/CustomMeta"
          },
          "expiryDate": {
            "$ref": "#/components/schemas/ExpiryDate",
            "description": "New expiry details"
          }
        },
        "required": [
          "identifierName",
          "identifierValue",
          "programId",
          "pointsAwardedRefId",
          "pointsAwardedRefType",
          "expiryDate"
        ]
      },
      "StandardMeta": {
        "type": "object",
        "properties": {
          "who_raised": {
            "type": "string"
          },
          "who_approved": {
            "type": "string"
          },
          "reason_for_trigger": {
            "type": "string"
          }
        }
      },
      "CustomMeta": {
        "type": "object",
        "description": "Custom metadata fields",
        "additionalProperties": {
          "type": "string"
        }
      },
      "ExpiryDate": {
        "type": "object",
        "properties": {
          "expiryType": {
            "type": "string",
            "description": "Type of expiry",
            "enum": [
              "FIXED_DATE",
              "FIXED_DAYS",
              "FIXED_MONTHS",
              "IMMEDIATE"
            ]
          },
          "expiryValue": {
            "type": "string",
            "description": "Value for expiry (date string or number of days/months)"
          }
        },
        "required": [
          "expiryType",
          "expiryValue"
        ]
      },
      "PointsExpiryUpdateSuccessResponse": {
        "type": "object",
        "properties": {
          "entity": {
            "$ref": "#/components/schemas/PointsExpiryUpdateSuccessEntity"
          },
          "errors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ErrorDetail"
            }
          },
          "warnings": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ErrorDetail"
            }
          }
        }
      },
      "PointsExpiryUpdateSuccessEntity": {
        "type": "object",
        "properties": {
          "updateCurrencyExpiryDateResponse": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateCurrencyExpiryDateResponseItem"
            }
          },
          "failures": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        }
      },
      "UpdateCurrencyExpiryDateResponseItem": {
        "type": "object",
        "properties": {
          "customerId": {
            "type": "integer",
            "format": "int64"
          },
          "programId": {
            "type": "integer",
            "format": "int64"
          },
          "success": {
            "type": "boolean"
          }
        }
      },
      "PointsExpiryUpdateErrorResponse": {
        "type": "object",
        "properties": {
          "entity": {
            "type": "object",
            "nullable": true
          },
          "errors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ErrorDetail"
            }
          },
          "warnings": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ErrorDetail"
            }
          }
        }
      },
      "ErrorDetail": {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer"
          },
          "message": {
            "type": "string"
          }
        }
      }
    }
  }
}
```