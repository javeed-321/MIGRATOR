> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Points Expiry Schedule

Retrieves the history of points expired schedules of a customer.

<Callout icon="👍" theme="okay">
  For an overview on our APIs and for hands-on testing, refer to [API overview](https://docs.capillarytech.com/reference/apioverview) and  [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) documentation.
</Callout>

This API retrieves the history of points expiry schedules for a specific duration. The expiry schedules are sorted by date in the ascending order. This is a light API and hence the data retrieval is faster as it shows only the key information of the API.

## Prerequisites

* [ ] Basic or OAuth credentials
* [ ] Read access to Points access group resource
* [ ] If the [dual eligibility](https://docs.capillarytech.com/docs/customer_entity#/dual-eligibility) configuration is set to true, the  API will not work.

## Example request

```curl Sample request with identifier name as email
curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/pointsExpirySchedule?source=INSTORE&identifierName=email&identifierValue=testgr10%40gmail.com&programId=973' \
--header 'Authorization: Basic bWFkaHU2YQ==' \
--header 'Cookie: _cfuvid=6YGS7PapTDGsKc7JD9w_pnV5CKUsdzslUmxwoX0R9pY-1757168968223-0.0.1.1-604800000; _cfuvid=zYS0gwmsMVAj9DUolHoCbzD_Ta014xaIOdd9xXQS4h0-1758706722158-0.0.1.1-604800000'
```
```curl Sample request with identifier name as mobile
curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/pointsExpirySchedule?source=INSTORE&identifierName=mobile&identifierValue=9777785208&programId=973' \
--header 'Authorization: Basic bWFkaHVfMjU2YQ==' \
--header 'Cookie: _cfuvid=6YGS7PapTDGsKc7JD9w_pnV5CKUsdzslUmxwoX0R9pY-1757168968223-0.0.1.1-604800000; _cfuvid=zYS0gwmsMVAj9DUolHoCbzD_Ta014xaIOdd9xXQS4h0-1758706722158-0.0.1.1-604800000'
```

## Resource Information

| URI                | v2/customers/565039505/pointsExpirySchedule |
| :----------------- | :------------------------------------------ |
| HTTP method        | GET                                         |
| Authentication     | Basic                                       |
| Pagination support | No                                          |
| Rate limit         | Yes                                         |
| Batch Support      | No                                          |

## Query parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        source*
      </td>

      <td>
        Enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Source on which the identifier is available.
        The supported values are FACEBOOK,WEB_ENGAGE,WECHAT,
        INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE, and ALL.
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Account ID of a specific source if the source has multiple accounts.
      </td>
    </tr>

    <tr>
      <td>
        identifierName*
      </td>

      <td>
        Enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Identifier type used to fetch the customer's expiry schedule details.
        The supported values are mobile,email,externalId,cardnumber,cardExternalId.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue*
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Identifier of the customer specific to the identifierName.
      </td>
    </tr>

    <tr>
      <td>
        fetchDataForAllPrograms
      </td>

      <td>
        Boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        If `true` Returns expiry schedules for all loyalty programs the customer is enrolled in. If `false` Returns expiry schedules only for the specified programId (or the default program if programId is omitted).
      </td>
    </tr>

    <tr>
      <td>
        fetchEarliestExpiryOnly
      </td>

      <td>
        Boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        When set to true, the API returns the earliest expiry for each unique (programId + pointsType + expiryType) group. When false (default), it returns all expiry schedules for the customer.
      </td>
    </tr>

    <tr>
      <td>
        startDate
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Start date (YYYY-MM-DD) for fetching points expiry schedules. Must be future dated (current date + 1 day minimum). Time components not supported. Example: If today is 2023-10-25, earliest allowed is 2023-10-26
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        End date (YYYY-MM-DD) for the expiry schedule range. Defaults to startDate + 100 years if omitted. Maximum range: 100 years from current date. Time components not supported. Example: With startDate=2023-10-26, maximum endDate is 2123-10-26
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Unique ID of the program. Filter by a specific loyalty program; if omitted, uses the default program.
      </td>
    </tr>
  </tbody>
</Table>

## Example response

```json Sample response with identifier name as email
{
    "id": 565032200,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 331.9,
            "expiryDate": "2026-06-11",
            "expiryDateISO": "2026-06-11T00:00:00Z",
            "programId": 973,
            "pointsType": "customer_promotions",
            "expiryType": "rolling"
        },
        {
            "points": 5000,
            "expiryDate": "2125-03-26",
            "expiryDateISO": "2125-03-26T00:00:00Z",
            "programId": 973,
            "pointsType": "customer_promotions",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```
```curl Sample response with identifier name as mobile
{
    "id": 565032176,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 497,
            "expiryDate": "2026-06-11",
            "expiryDateISO": "2026-06-11T00:00:00Z",
            "programId": 973,
            "pointsType": "customer_promotions",
            "expiryType": "rolling"
        }
    ],
    "warnings": []
}
```

# Response parameter

<Table align={[null,"left",null]}>
  <thead>
    <tr>
      <th>
        **Parameter**
      </th>

      <th>
        Type
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        id
      </td>

      <td>
        integer
      </td>

      <td>
        Unique identifier.
      </td>
    </tr>

    <tr>
      <td>
        profiles
      </td>

      <td>
        array
      </td>

      <td>
        List containing profile details.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyInfo
      </td>

      <td>
        object
      </td>

      <td>
        Object containing information about loyalty.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyInfo.loyaltyType
      </td>

      <td>
        string
      </td>

      <td>
        Type of loyalty, in this instance, "loyalty".
      </td>
    </tr>

    <tr>
      <td>
        segments
      </td>

      <td>
        object
      </td>

      <td>
        Object containing segment details.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        object
      </td>

      <td>
        Object containing extended field details (currently empty).
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules
      </td>

      <td>
        array
      </td>

      <td>
        List containing details of points expiry schedules.
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules[].points
      </td>

      <td>
        decimal
      </td>

      <td>
        Number of points in each expiry schedule.
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules[].expiryDate
      </td>

      <td>
        string
      </td>

      <td>
        Date on which the points in each expiry schedule will expire in YYYY-MM-DD format. **Note:** This field will be deprecated in the future and is being replaced by `expiryDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules[].expiryDateISO
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the points expiry date and time  in ISO 8601 format, returned in the server time zone.

        **EU server example**  
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules[].programId
      </td>

      <td>
        integer
      </td>

      <td>
        Identifier for the program associated with the points in each expiry schedule.
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules[].pointsType
      </td>

      <td>
        string
      </td>

      <td>
        Type of points in each expiry schedule (e.g., "line_item_regular", "bill_regular").
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules[].expiryType
      </td>

      <td>
        string
      </td>

      <td>
        Type of expiry for the points in each expiry schedule (in this case, "fixed").
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        array
      </td>

      <td>
        List containing warnings related to the entity (currently empty).
      </td>
    </tr>
  </tbody>
</Table>

## Examples

**with fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=false**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=false&programId=1357`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
          "expiryDate": "2125-03-26",
          "expiryDateISO": "2125-03-26T00:00:00Z"

            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**when fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=false**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=false&programId=1357`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2125-03-26",
            "expiryDateISO": "2125-03-26T00:00:00Z"
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2125-03-26",
            "expiryDateISO": "2125-03-26T00:00:00Z"
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
           "expiryDate": "2125-03-26",
            "expiryDateISO": "2125-03-26T00:00:00Z"
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**when fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=true**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=true&programId=1357`

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2125-03-26",
            "expiryDateISO": "2125-03-26T00:00:00Z"
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**when fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=true**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=true&programId=1357`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2125-03-26",
            "expiryDateISO": "2125-03-26T00:00:00Z"
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**with startDate and endDate**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&startDate=2020-01-01&endDate=2040-03-01&programId=1357&fetchEarliestExpiryOnly=false&fetchDataForAllPrograms=true`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2125-03-26",
            "expiryDateISO": "2125-03-26T00:00:00Z"
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

## API specific error code

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error Code
      </th>

      <th>
        Description
      </th>

      <th>
        Reason
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        8015
      </td>

      <td>
        Customer not found for the given identifiers
      </td>

      <td>
        Invalid or missing customer identifier passed
      </td>
    </tr>

    <tr>
      <td>
        8003
      </td>

      <td>
        Invalid source
      </td>

      <td>
        Unsupported source parameter passed
      </td>
    </tr>

    <tr>
      <td>
        8130
      </td>

      <td>
        Lookup,Invalid Params passed
      </td>

      <td>
        Unsupported query parameter passed
      </td>
    </tr>

    <tr>
      <td>
        1216
      </td>

      <td>
        The date format used for startDate is not supported. Enter the date in (yyyy-MM-dd) format
        The date format used for endDate is not supported. Enter the date in (yyyy-MM-dd) format
      </td>

      <td>
        Incorrect format given for `startDate` and `endDate` parameter
      </td>
    </tr>

    <tr>
      <td>
        1215
      </td>

      <td>
        startDate cannot be in past
      </td>

      <td>
        Past date given for `startDate` parameter
      </td>
    </tr>

    <tr>
      <td>
        1214
      </td>

      <td>
        startDate is after endDate
      </td>

      <td>
        Date provided in `startDate` parameter is beyond the end date
      </td>
    </tr>

    <tr>
      <td>
        1217
      </td>

      <td>
        endDate cannot be after 100 years from now
      </td>

      <td>
        Date provided for `endDate` is beyond 100 years
      </td>
    </tr>

    <tr>
      <td>
        885
      </td>

      <td>
        Invalid program id passed
      </td>

      <td>
        Unsupported program Id
      </td>
    </tr>
  </tbody>
</Table>

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
    "/customers/{userId}/pointsExpirySchedule": {
      "get": {
        "summary": "Get Points Expiry Schedule",
        "description": "Retrieves the history of points expired schedules of a customer.",
        "operationId": "get-points-expiry-schedule",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer to fetch points expiry schedule history.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          },
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
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
                  "Sample Response": {
                    "value": "{\n    \"id\": 28780933,\n    \"profiles\": [],\n    \"loyaltyInfo\": {\n        \"loyaltyType\": \"loyalty\"\n    },\n    \"segments\": {},\n    \"extendedFields\": {},\n    \"expirySchedules\": [\n        {\n            \"points\": 400.0,\n            \"expiryDate\": \"2117-07-18\",\n            \"programId\": 1009,\n            \"pointsType\": \"bill_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2119-03-31\",\n            \"programId\": 1009,\n            \"pointsType\": \"bill_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 600.0,\n            \"expiryDate\": \"2121-02-22\",\n            \"programId\": 1009,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 150.0,\n            \"expiryDate\": \"2121-02-24\",\n            \"programId\": 1009,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 28780933,
                      "default": 0
                    },
                    "profiles": {
                      "type": "array"
                    },
                    "loyaltyInfo": {
                      "type": "object",
                      "properties": {
                        "loyaltyType": {
                          "type": "string",
                          "example": "loyalty"
                        }
                      }
                    },
                    "segments": {
                      "type": "object",
                      "properties": {}
                    },
                    "extendedFields": {
                      "type": "object",
                      "properties": {}
                    },
                    "expirySchedules": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "points": {
                            "type": "integer",
                            "example": 400,
                            "default": 0
                          },
                          "expiryDate": {
                            "type": "string",
                            "example": "2117-07-18"
                          },
                          "programId": {
                            "type": "integer",
                            "example": 1009,
                            "default": 0
                          },
                          "pointsType": {
                            "type": "string",
                            "example": "bill_regular"
                          },
                          "expiryType": {
                            "type": "string",
                            "example": "fixed"
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "shell",
              "code": "https://eu.api.capillarytech.com/v2/customers/28780933/pointsExpirySchedule",
              "name": "Sample Request "
            }
          ],
          "samples-languages": [
            "shell"
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