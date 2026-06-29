> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Single Points Expiry Updates

Retrieves points expiry updates for a specific customer.

# Example request

```
curl --location 'https://eu.intouch.capillarytech.com/v2/customers/566135941/singlePointsExpiryUpdates?offset=0&limit=1' \
--header 'Authorization: Basic bmVlcmFqLNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ=='
```

# Prerequisites

* Authentication
* Read access to Points access group resource

# Resource information

|                    |     |
| :----------------- | :-- |
| Pagination support | Yes |
| Batch support      | No  |

# Path parameters

| Field       | Type    | Required | Description                 |
| ----------- | ------- | -------- | --------------------------- |
| Customer ID | Integer | Yes      | Unique customer identifier. |

***

## Query parameters

| Field  | Type | Required | Description                                                              |
| ------ | ---- | -------- | ------------------------------------------------------------------------ |
| limit  | int  | Optional | Maximum number of results to return. Maximum: 10. Must be greater than 0 |
| offset | int  | Optional | Number of results to skip for pagination. Default:0. Must be >= 0        |

***

# Example response

```json
{
    "id": 566881933,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "singlePointsExpiryUpdateList": [
        {
            "expiryChangeTime": "2026-01-17T10:14:38.000Z",
            "expiryChangeTimeISO": "2026-01-17T10:14:38Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "Xy4IFzbJQp"
            },
            "pointsNewExpiryDate": "2026-02-11",
            "pointsNewExpiryDateISO": "2026-02-11T23:59:59Z",
            "pointsUpdatedByProgram": [
                {
                    "programId": 973,
                    "points": 72000.0,
                    "pointsOldExpiryDate": "2026-02-11",
                    "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                },
                {
                    "programId": 983,
                    "points": 6.0,
                    "pointsOldExpiryDate": "2026-02-11",
                    "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                }
            ]
        },
        {
            "expiryChangeTime": "2026-01-17T10:12:35.000Z",
            "expiryChangeTimeISO": "2026-01-17T10:12:35Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "6gyGwyJWpH"
            },
            "pointsNewExpiryDate": "2026-02-11",
            "pointsNewExpiryDateISO": "2026-02-11T23:59:59Z",
            "pointsUpdatedByProgram": [
                {
                    "programId": 973,
                    "points": 72000.0,
                    "pointsOldExpiryDate": "2026-02-11",
                    "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                },
                {
                    "programId": 983,
                    "points": 6.0,
                    "pointsOldExpiryDate": "2026-02-11",
                    "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                }
            ]
        },
        {
            "expiryChangeTime": "2026-01-17T10:00:39.000Z",
            "expiryChangeTimeISO": "2026-01-17T10:00:39Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "gWjUWSOd2y"
            },
            "pointsNewExpiryDate": "2026-02-11",
            "pointsNewExpiryDateISO": "2026-02-11T23:59:59Z",
            "pointsUpdatedByProgram": []
        },
        {
            "expiryChangeTime": "2026-01-09T12:35:04.000Z",
            "expiryChangeTimeISO": "2026-01-09T12:35:04Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "KBttvVkdHu"
            },
            "pointsNewExpiryDate": "2026-02-03",
            "pointsNewExpiryDateISO": "2026-02-03T23:59:59Z",
            "pointsUpdatedByProgram": []
        },
        {
            "expiryChangeTime": "2026-01-09T12:30:22.000Z",
            "expiryChangeTimeISO": "2026-01-09T12:30:22Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "63NaD6cF36"
            },
            "pointsNewExpiryDate": "2026-02-03",
            "pointsNewExpiryDateISO": "2026-02-03T23:59:59Z",
            "pointsUpdatedByProgram": []
        },
        {
            "expiryChangeTime": "2026-01-08T09:00:32.000Z",
            "expiryChangeTimeISO": "2026-01-08T09:00:32Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "XH17DfoXKO"
            },
            "pointsNewExpiryDate": "2026-02-02",
            "pointsNewExpiryDateISO": "2026-02-02T23:59:59Z",
            "pointsUpdatedByProgram": []
        },
        {
            "expiryChangeTime": "2026-01-08T08:45:40.000Z",
            "expiryChangeTimeISO": "2026-01-08T08:45:40Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "vhOo1JIKuv"
            },
            "pointsNewExpiryDate": "2026-02-02",
            "pointsNewExpiryDateISO": "2026-02-02T23:59:59Z",
            "pointsUpdatedByProgram": []
        },
        {
            "expiryChangeTime": "2025-12-04T10:56:36.000Z",
            "expiryChangeTimeISO": "2025-12-04T10:56:36Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "fjJ6etf2Ka"
            },
            "pointsNewExpiryDate": "2025-12-29",
            "pointsNewExpiryDateISO": "2025-12-29T23:59:59Z",
            "pointsUpdatedByProgram": [
                {
                    "programId": 973,
                    "points": 129699.0,
                    "pointsOldExpiryDate": "2025-12-28",
                    "pointsOldExpiryDateISO": "2025-12-28T00:00:00Z"
                }
            ]
        },
        {
            "expiryChangeTime": "2025-12-03T05:03:59.000Z",
            "expiryChangeTimeISO": "2025-12-03T05:03:59Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "9tt1cyVRWq"
            },
            "pointsNewExpiryDate": "2025-12-28",
            "pointsNewExpiryDateISO": "2025-12-28T23:59:59Z",
            "pointsUpdatedByProgram": [
                {
                    "programId": 973,
                    "points": 129799.0,
                    "pointsOldExpiryDate": "2025-12-28",
                    "pointsOldExpiryDateISO": "2025-12-28T00:00:00Z"
                }
            ]
        },
        {
            "expiryChangeTime": "2025-12-03T05:03:08.000Z",
            "expiryChangeTimeISO": "2025-12-03T05:03:08Z",
            "eventName": "PointsRedemption",
            "eventIdentifier": {
                "type": "eventUniqueId",
                "value": "Nw740ZbpDb"
            },
            "pointsNewExpiryDate": "2025-12-28",
            "pointsNewExpiryDateISO": "2025-12-28T23:59:59Z",
            "pointsUpdatedByProgram": [
                {
                    "programId": 973,
                    "points": 133799.0,
                    "pointsOldExpiryDate": "2025-12-26",
                    "pointsOldExpiryDateISO": "2025-12-26T00:00:00Z"
                }
            ]
        }
    ],
    "extendedFields": {},
    "warnings": []
}
```

***

## Response parameters

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
        id
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        profiles
      </td>

      <td>
        Array
      </td>

      <td>
        Profiles associated with the customer.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyInfo
      </td>

      <td>
        Object
      </td>

      <td>
        Loyalty-related information for the customer.
      </td>
    </tr>

    <tr>
      <td>
        .loyaltyType
      </td>

      <td>
        String
      </td>

      <td>
        Type of loyalty associated with the customer.
      </td>
    </tr>

    <tr>
      <td>
        segments
      </td>

      <td>
        Object
      </td>

      <td>
        Segments associated with the customer.
      </td>
    </tr>

    <tr>
      <td>
        singlePointsExpiryUpdateList
      </td>

      <td>
        Array
      </td>

      <td>
        List of events that resulted in an update to points expiry.
      </td>
    </tr>

    <tr>
      <td>
        .expiryChangeTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points expiry change date and time in the server time zone in YYYY-MM-DDTHH:MM:SS.mmmZ format. **Note:** This field will be deprecated in the future and is being replaced by `expiryChangeTimeISO`.
      </td>
    </tr>

    <tr>
      <td>
        .expiryChangeTimeISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points expiry change date and time in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        .eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event that triggered the expiry update.
      </td>
    </tr>

    <tr>
      <td>
        .eventIdentifier
      </td>

      <td>
        Object
      </td>

      <td>
        Identifier details of the triggering event.
      </td>
    </tr>

    <tr>
      <td>
        ..type
      </td>

      <td>
        String
      </td>

      <td>
        Type of event identifier.
      </td>
    </tr>

    <tr>
      <td>
        ..value
      </td>

      <td>
        String
      </td>

      <td>
        Value of the event identifier.
      </td>
    </tr>

    <tr>
      <td>
        .pointsNewExpiryDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points new expiry date and time in the server time zone in YYYY-MM-DD format. **Note:** This field will be deprecated in the future and is being replaced by `pointsNewExpiryDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        .pointsNewExpiryDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the new points expiry date and time in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        .pointsUpdatedByProgram
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details on the loyalty program, number of points and the points expiry dates.
      </td>
    </tr>

    <tr>
      <td>
        ..programId
      </td>

      <td>
        Int
      </td>

      <td>
        Unique ID of the loyalty program where the points expiration updates occurred.
      </td>
    </tr>

    <tr>
      <td>
        ..points
      </td>

      <td>
        Int
      </td>

      <td>
        Indicates the total number of points with updated expiration dates.
      </td>
    </tr>

    <tr>
      <td>
        ..pointsOldExpiryDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points old expiry date and time in the server time zone in YYYY-MM-DD format. **Note:** This field will be deprecated in the future and is being replaced by `pointsOldExpiryDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        ..pointsOldExpiryDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the old points expiry date and time in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        Object
      </td>

      <td>
        Additional custom fields associated with the response.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        Any warnings returned in the response.
      </td>
    </tr>
  </tbody>
</Table>

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Capillary Tech Loyalty API",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://{host}"
    }
  ],
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
  },
  "paths": {
    "/v2/customers/{customerId}/singlePointsExpiryUpdates": {
      "get": {
        "summary": "Get Single Points Expiry Updates",
        "description": "Retrieves points expiry updates for a specific customer.",
        "operationId": "getSinglePointsExpiryUpdates",
        "security": [
          {
            "basicAuth": []
          }
        ],
        "parameters": [
          {
            "name": "customerId",
            "in": "path",
            "required": true,
            "description": "The unique identifier of the customer.",
            "schema": {
              "type": "string",
              "example": "566135941"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Pagination offset.",
            "schema": {
              "type": "integer",
              "example": 0
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Pagination limit.",
            "schema": {
              "type": "integer",
              "example": 1
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "id": 566881933,
                      "profiles": [],
                      "loyaltyInfo": {
                        "loyaltyType": "loyalty"
                      },
                      "segments": {},
                      "singlePointsExpiryUpdateList": [
                        {
                          "expiryChangeTime": "2026-01-17T10:14:38.000Z",
                          "expiryChangeTimeISO": "2026-01-17T10:14:38Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "Xy4IFzbJQp"
                          },
                          "pointsNewExpiryDate": "2026-02-11",
                          "pointsNewExpiryDateISO": "2026-02-11T23:59:59Z",
                          "pointsUpdatedByProgram": [
                            {
                              "programId": 973,
                              "points": 72000,
                              "pointsOldExpiryDate": "2026-02-11",
                              "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                            },
                            {
                              "programId": 983,
                              "points": 6,
                              "pointsOldExpiryDate": "2026-02-11",
                              "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                            }
                          ]
                        },
                        {
                          "expiryChangeTime": "2026-01-17T10:12:35.000Z",
                          "expiryChangeTimeISO": "2026-01-17T10:12:35Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "6gyGwyJWpH"
                          },
                          "pointsNewExpiryDate": "2026-02-11",
                          "pointsNewExpiryDateISO": "2026-02-11T23:59:59Z",
                          "pointsUpdatedByProgram": [
                            {
                              "programId": 973,
                              "points": 72000,
                              "pointsOldExpiryDate": "2026-02-11",
                              "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                            },
                            {
                              "programId": 983,
                              "points": 6,
                              "pointsOldExpiryDate": "2026-02-11",
                              "pointsOldExpiryDateISO": "2026-02-11T00:00:00Z"
                            }
                          ]
                        },
                        {
                          "expiryChangeTime": "2026-01-17T10:00:39.000Z",
                          "expiryChangeTimeISO": "2026-01-17T10:00:39Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "gWjUWSOd2y"
                          },
                          "pointsNewExpiryDate": "2026-02-11",
                          "pointsNewExpiryDateISO": "2026-02-11T23:59:59Z",
                          "pointsUpdatedByProgram": []
                        },
                        {
                          "expiryChangeTime": "2026-01-09T12:35:04.000Z",
                          "expiryChangeTimeISO": "2026-01-09T12:35:04Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "KBttvVkdHu"
                          },
                          "pointsNewExpiryDate": "2026-02-03",
                          "pointsNewExpiryDateISO": "2026-02-03T23:59:59Z",
                          "pointsUpdatedByProgram": []
                        },
                        {
                          "expiryChangeTime": "2026-01-09T12:30:22.000Z",
                          "expiryChangeTimeISO": "2026-01-09T12:30:22Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "63NaD6cF36"
                          },
                          "pointsNewExpiryDate": "2026-02-03",
                          "pointsNewExpiryDateISO": "2026-02-03T23:59:59Z",
                          "pointsUpdatedByProgram": []
                        },
                        {
                          "expiryChangeTime": "2026-01-08T09:00:32.000Z",
                          "expiryChangeTimeISO": "2026-01-08T09:00:32Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "XH17DfoXKO"
                          },
                          "pointsNewExpiryDate": "2026-02-02",
                          "pointsNewExpiryDateISO": "2026-02-02T23:59:59Z",
                          "pointsUpdatedByProgram": []
                        },
                        {
                          "expiryChangeTime": "2026-01-08T08:45:40.000Z",
                          "expiryChangeTimeISO": "2026-01-08T08:45:40Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "vhOo1JIKuv"
                          },
                          "pointsNewExpiryDate": "2026-02-02",
                          "pointsNewExpiryDateISO": "2026-02-02T23:59:59Z",
                          "pointsUpdatedByProgram": []
                        },
                        {
                          "expiryChangeTime": "2025-12-04T10:56:36.000Z",
                          "expiryChangeTimeISO": "2025-12-04T10:56:36Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "fjJ6etf2Ka"
                          },
                          "pointsNewExpiryDate": "2025-12-29",
                          "pointsNewExpiryDateISO": "2025-12-29T23:59:59Z",
                          "pointsUpdatedByProgram": [
                            {
                              "programId": 973,
                              "points": 129699,
                              "pointsOldExpiryDate": "2025-12-28",
                              "pointsOldExpiryDateISO": "2025-12-28T00:00:00Z"
                            }
                          ]
                        },
                        {
                          "expiryChangeTime": "2025-12-03T05:03:59.000Z",
                          "expiryChangeTimeISO": "2025-12-03T05:03:59Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "9tt1cyVRWq"
                          },
                          "pointsNewExpiryDate": "2025-12-28",
                          "pointsNewExpiryDateISO": "2025-12-28T23:59:59Z",
                          "pointsUpdatedByProgram": [
                            {
                              "programId": 973,
                              "points": 129799,
                              "pointsOldExpiryDate": "2025-12-28",
                              "pointsOldExpiryDateISO": "2025-12-28T00:00:00Z"
                            }
                          ]
                        },
                        {
                          "expiryChangeTime": "2025-12-03T05:03:08.000Z",
                          "expiryChangeTimeISO": "2025-12-03T05:03:08Z",
                          "eventName": "PointsRedemption",
                          "eventIdentifier": {
                            "type": "eventUniqueId",
                            "value": "Nw740ZbpDb"
                          },
                          "pointsNewExpiryDate": "2025-12-28",
                          "pointsNewExpiryDateISO": "2025-12-28T23:59:59Z",
                          "pointsUpdatedByProgram": [
                            {
                              "programId": 973,
                              "points": 133799,
                              "pointsOldExpiryDate": "2025-12-26",
                              "pointsOldExpiryDateISO": "2025-12-26T00:00:00Z"
                            }
                          ]
                        }
                      ],
                      "extendedFields": {},
                      "warnings": []
                    }
                  }
                }
              }
            }
          }
        },
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.intouch.capillarytech.com/v2/customers/566135941/singlePointsExpiryUpdates?offset=0&limit=1' \\\n--header 'Authorization: Basic bmVlcmFqLNGFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ=='",
              "language": "shell",
              "name": ""
            }
          ],
          "samples-languages": [
            "shell"
          ]
        }
      }
    }
  },
  "x-readme": {}
}
```