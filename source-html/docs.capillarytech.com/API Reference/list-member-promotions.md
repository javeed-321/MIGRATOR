> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# List Member Promotions

Returns a paginated list of  loyalty promotions associated with a specific member. Use the optional query parameter filters to narrow results by enrolment status, promotion identifier, or promotion ID.

# Example request

```json cURL
curl -X GET "https://{host}/v3/members/{memberId}/promotions?page=0&size=10" \
  -H "Authorization: Basic {token}"
```

# Prerequisites

* Authentication: Basic authentication. Provide a valid `Authorization` header.
* Default access group.

# Resource information

|               |     |
| :------------ | :-- |
| Pagination    | Yes |
| Batch support | No  |

# Path parameters

| Field      | Type | Required | Description                               |
| :--------- | :--- | :------- | :---------------------------------------- |
| `memberId` | Long | Yes      | Unique customer identifier of the member. |

# Query parameters

| Field                    | Type    | Required | Description                                                                                                                                                                  |
| :----------------------- | :------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`                   | Integer | Optional | Page number for pagination (0-indexed). Defaults to `0`.                                                                                                                     |
| `size`                   | Integer | Optional | Number of promotions per page. Defaults to `10`. Max: `20`.                                                                                                                  |
| `memberEnrollmentStatus` | String  | Optional | Filters promotions by the member's enrolment status. Supported values: `PENDING_ENROLLMENT`, `PENDING_OPT_IN`, `AVAILABLE_TO_REDEEM`, `REDEEMED`, `EXPIRED`. Case-sensitive. |
| `promotionIdentifier`    | String  | Optional | Filters by the promotion's unique string identifier. The identifier must resolve to a promotion in `ACTIVE`, `PAUSED`, or `STOPPED` state.                                   |
| `promotionId`            | Integer | Optional | Filters by the promotion's numeric ID. The promotion must be in `ACTIVE`, `PAUSED`, or `STOPPED` state.                                                                      |

# API Quick Reference

```
GET /v3/members/{memberId}/promotions
   └─ Response
       ├─ pageDetails (object)
       │   ├─ pageNumber (number)
       │   ├─ pageSize (number)
       │   ├─ totalEntries (number)
       │   └─ pageCount (number)
       ├─ memberId (number)
       └─ promotions []
           ├─ promotionId (number)
           ├─ promotionName (string)
           ├─ programId (number)
           ├─ startDateISO (string)
           ├─ endDateISO (string)
           ├─ timezoneName (string)
           ├─ promotionIdentifier (string)
           ├─ description (string)
           └─ active (boolean)
```

# Example response

```json
{
  "pageDetails": {
    "pageNumber": 0,
    "pageSize": 10,
    "totalEntries": 37,
    "pageCount": 4
  },
  "memberId": 388757626,
  "promotions": [
    {
      "promotionId": 126779,
      "promotionName": "UAT ULP - Updating enrolment type using API",
      "programId": 973,
      "startDateISO": "2026-03-18T06:11:00Z",
      "endDateISO": "2026-03-19T06:11:59Z",
      "timezoneName": "Indian/Maldives",
      "promotionIdentifier": "f385f258-c315-412c-b910-7bd8a8d89427",
      "description": "UAT ULP - Updating enrolment type using API",
      "active": true
    },
    {
      "promotionId": 126635,
      "promotionName": "Single Activity Promotion2",
      "programId": 973,
      "startDateISO": "2026-03-01T05:11:00Z",
      "endDateISO": "2026-03-31T05:11:59Z",
      "timezoneName": "Asia/Kolkata",
      "promotionIdentifier": "single-activity-promotion2",
      "description": "A promotion with single activity",
      "active": true
    }
  ]
}
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `pageDetails`
      </td>

      <td>
        Object
      </td>

      <td>
        Pagination metadata for the response.
      </td>
    </tr>

    <tr>
      <td>
        `.pageNumber`
      </td>

      <td>
        Integer
      </td>

      <td>
        The zero-based index of the current page in the result set.
      </td>
    </tr>

    <tr>
      <td>
        `.pageSize`
      </td>

      <td>
        Integer
      </td>

      <td>
        The number of promotions returned in the current page of results.
      </td>
    </tr>

    <tr>
      <td>
        `.totalEntries`
      </td>

      <td>
        Integer
      </td>

      <td>
        The total count of promotions matching the specified filters across all pages.
      </td>
    </tr>

    <tr>
      <td>
        `.pageCount`
      </td>

      <td>
        Integer
      </td>

      <td>
        The total number of pages available at the specified page size.
      </td>
    </tr>

    <tr>
      <td>
        `memberId`
      </td>

      <td>
        Long
      </td>

      <td>
        The system-generated identifier of the member whose promotions are being retrieved.
      </td>
    </tr>

    <tr>
      <td>
        `promotions`
      </td>

      <td>
        Array
      </td>

      <td>
        The list of promotions the member is enrolled in or eligible to participate in.
      </td>
    </tr>

    <tr>
      <td>
        `.promotionId`
      </td>

      <td>
        Long
      </td>

      <td>
        The system-generated identifier for the promotion.
      </td>
    </tr>

    <tr>
      <td>
        `.promotionName`
      </td>

      <td>
        String
      </td>

      <td>
        The display name of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        `.programId`
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique identifier of the loyalty program under which this promotion operates.
      </td>
    </tr>

    <tr>
      <td>
        `.startDateISO`
      </td>

      <td>
        String (date-time)
      </td>

      <td>
        Indicates the promotion's start date and time in ISO 8601 format, returned in the server time zone.

        EU server example: 2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)  
        India server example: 2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)  
        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        `.endDateISO`
      </td>

      <td>
        String (date-time)
      </td>

      <td>
        Indicates the promotion's end date and time in ISO 8601 format, returned in the server time zone.

        EU server example: 2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)  
        India server example: 2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)  
        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        `.timezoneName`
      </td>

      <td>
        String
      </td>

      <td>
        [IANA time zone name](https://timeapi.io/documentation/iana-timezones) for the promotion. This is a reference label to identify the time zone where the promotion is created.
      </td>
    </tr>

    <tr>
      <td>
        `.promotionIdentifier`
      </td>

      <td>
        String
      </td>

      <td>
        The human-readable identifier used to reference the promotion across systems, distinct from the system-generated ID.
      </td>
    </tr>

    <tr>
      <td>
        `.description`
      </td>

      <td>
        String
      </td>

      <td>
        The text describing the promotion's offer and key benefits to the member.
      </td>
    </tr>

    <tr>
      <td>
        `.active`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the promotion is currently eligible for member enrollment and participation.
      </td>
    </tr>
  </tbody>
</Table>

# Error and warning codes

| Code   | Type  | Description                                                                                                                                                       |
| :----- | :---- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 310192 | Error | Member not found for the given `memberId`. Provide a valid member identifier.                                                                                     |
| 310193 | Error | No `ACTIVE`, `PAUSED`, or `STOPPED` promotion found for the given `promotionIdentifier`.                                                                          |
| 310194 | Error | No `ACTIVE`, `PAUSED`, or `STOPPED` promotion found for the given `promotionId`.                                                                                  |
| 310195 | Error | `size` exceeds the maximum allowed limit of 20.                                                                                                                   |
| 310196 | Error | Invalid value for `memberEnrollmentStatus`. Must be one of: `PENDING_ENROLLMENT`, `PENDING_OPT_IN`, `AVAILABLE_TO_REDEEM`, `REDEEMED`, `EXPIRED`. Case-sensitive. |
| 500    | Error | Internal server error. Retry the request after a short delay.                                                                                                     |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "GET /v3/members/{memberId}/promotions",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://{Host}",
      "variables": {
        "Host": {
          "enum": [
            "eu.intouch.capillarytech.com",
            "intouch.capillary.co.in",
            "apac2.intouch.capillarytech.com",
            "sgcrm.cc.capillarytech.com",
            "intouch.capillarytech.cn.com",
            "north-america.intouch.capillarytech.com"
          ],
          "default": "eu.intouch.capillarytech.com"
        }
      }
    }
  ],
  "paths": {
    "/v3/members/{memberId}/promotions": {
      "get": {
        "summary": "List Member Promotions",
        "operationId": "listMemberPromotions",
        "parameters": [
          {
            "name": "memberId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "example": 388757626
          },
          {
            "name": "page",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer"
            },
            "example": 0
          },
          {
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer"
            },
            "example": 10
          },
          {
            "name": "memberEnrollmentStatus",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "PENDING_ENROLLMENT",
                "PENDING_OPT_IN",
                "AVAILABLE_TO_REDEEM",
                "REDEEMED",
                "EXPIRED"
              ]
            },
            "example": "AVAILABLE_TO_REDEEM"
          },
          {
            "name": "promotionIdentifier",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "single-activity-promotion2"
          },
          {
            "name": "promotionId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer"
            },
            "example": 126635
          },
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            },
            "example": "Basic dGlsbG"
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "example": {
                  "pageDetails": {
                    "pageNumber": 0,
                    "pageSize": 10,
                    "totalEntries": 37,
                    "pageCount": 4
                  },
                  "memberId": 388757626,
                  "promotions": [
                    {
                      "promotionId": 126779,
                      "promotionName": "UAT ULP - Updating enrolment type using API",
                      "programId": 973,
                      "startDateISO": "2026-03-18T06:11:00Z",
                      "endDateISO": "2026-03-19T06:11:59Z",
                      "timezoneName": "Indian/Maldives",
                      "promotionIdentifier": "f385f258-c315-412c-b910-7bd8a8d89427",
                      "description": "UAT ULP - Updating enrolment type using API",
                      "active": true
                    },
                    {
                      "promotionId": 126635,
                      "promotionName": "Single Activity Promotion2",
                      "programId": 973,
                      "startDateISO": "2026-03-01T05:11:00Z",
                      "endDateISO": "2026-03-31T05:11:59Z",
                      "timezoneName": "Asia/Kolkata",
                      "promotionIdentifier": "single-activity-promotion2",
                      "description": "A promotion with single activity",
                      "active": true
                    }
                  ]
                }
              }
            }
          }
        },
        "security": [
          {
            "basicAuth": []
          }
        ]
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