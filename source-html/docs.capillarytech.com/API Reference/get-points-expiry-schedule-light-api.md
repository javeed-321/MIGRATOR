> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Points Expiry Schedule (Light API)

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

| **Parameter**                 | Type    | **Description**                                                                        |
| ----------------------------- | :------ | -------------------------------------------------------------------------------------- |
| id                            | integer | Unique identifier.                                                                     |
| profiles                      | array   | List containing profile details.                                                       |
| loyaltyInfo                   | object  | Object containing information about loyalty.                                           |
| loyaltyInfo.loyaltyType       | string  | Type of loyalty, in this instance, "loyalty".                                          |
| segments                      | object  | Object containing segment details.                                                     |
| extendedFields                | object  | Object containing extended field details (currently empty).                            |
| expirySchedules               | array   | List containing details of points expiry schedules.                                    |
| expirySchedules\[].points     | decimal | Number of points in each expiry schedule.                                              |
| expirySchedules\[].expiryDate | string  | Date on which the points in each expiry schedule will expire.                          |
| expirySchedules\[].programId  | integer | Identifier for the program associated with the points in each expiry schedule.         |
| expirySchedules\[].pointsType | string  | Type of points in each expiry schedule (e.g., "line\_item\_regular", "bill\_regular"). |
| expirySchedules\[].expiryType | string  | Type of expiry for the points in each expiry schedule (in this case, "fixed").         |
| warnings                      | array   | List containing warnings related to the entity (currently empty).                      |

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
            "expiryDate": "2022-05-19",
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
            "expiryDate": "2122-03-20",
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
            "expiryDate": "2022-05-19",
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
            "expiryDate": "2122-03-20",
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
            "expiryDate": "2022-05-19",
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
    "/customers/lookup/pointsExpirySchedule": {
      "get": {
        "summary": "Get Points Expiry Schedule (Light API)",
        "description": "",
        "operationId": "get-points-expiry-schedule-light-api",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Source on which the identifier is available.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "FACEBOOK",
                "WEB_ENGAGE",
                "WECHAT",
                "INSTORE",
                "MARTJACK",
                "TMALL",
                "TAOBAO",
                "JD",
                "ECOMMERCE",
                "WEBSITE",
                "LINE",
                "ALL"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "Account ID of a specific source if the source has multiple accounts.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier type used to fetch the customer's expiry schedule details.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "cardnumber",
                "cardExternalId",
                "wechat",
                "martjackId",
                "fbId"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Identifier of the customer specific to the identifierName.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "fetchDataForAllPrograms",
            "in": "query",
            "description": "Pass true to fetch points conversion schedules from all the available programs of the org.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "fetchEarliestExpiryOnly",
            "in": "query",
            "description": "Pass true to fetche earliest points expiry records of default program or passed programId",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "Date (YYYY-MM-DD) from which points conversion schedule details need to be fetched. Default value - current time.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "End date (YYYY-MM-DD) for the points conversion schedule details need to be fetched. Maximum supported date - current time + 100 years",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "programId",
            "in": "query",
            "description": "Unique ID of the program.",
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
                    "value": "{\n    \"id\": 421098436,\n    \"profiles\": [],\n    \"loyaltyInfo\": {\n        \"loyaltyType\": \"loyalty\"\n    },\n    \"segments\": {},\n    \"extendedFields\": {},\n    \"expirySchedules\": [\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2122-03-20\",\n            \"programId\": 1356,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 20.0,\n            \"expiryDate\": \"2122-03-20\",\n            \"programId\": 1356,\n            \"pointsType\": \"bill_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 200.0,\n            \"expiryDate\": \"2022-05-19\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2022-05-20\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "when fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=false": {
                    "value": "{\n    \"id\": 421098436,\n    \"profiles\": [],\n    \"loyaltyInfo\": {\n        \"loyaltyType\": \"loyalty\"\n    },\n    \"segments\": {},\n    \"extendedFields\": {},\n    \"expirySchedules\": [\n        {\n            \"points\": 200.0,\n            \"expiryDate\": \"2022-05-19\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2022-05-20\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "with fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=false": {
                    "value": "{\n    \"id\": 421098436,\n    \"profiles\": [],\n    \"loyaltyInfo\": {\n        \"loyaltyType\": \"loyalty\"\n    },\n    \"segments\": {},\n    \"extendedFields\": {},\n    \"expirySchedules\": [\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2122-03-20\",\n            \"programId\": 1356,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 20.0,\n            \"expiryDate\": \"2122-03-20\",\n            \"programId\": 1356,\n            \"pointsType\": \"bill_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 200.0,\n            \"expiryDate\": \"2022-05-19\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2022-05-20\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "with fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=true": {
                    "value": "{\n    \"id\": 421098436,\n    \"profiles\": [],\n    \"loyaltyInfo\": {\n        \"loyaltyType\": \"loyalty\"\n    },\n    \"segments\": {},\n    \"extendedFields\": {},\n    \"expirySchedules\": [\n        {\n            \"points\": 200.0,\n            \"expiryDate\": \"2022-05-19\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "with fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=true": {
                    "value": "{\n    \"id\": 421098436,\n    \"profiles\": [],\n    \"loyaltyInfo\": {\n        \"loyaltyType\": \"loyalty\"\n    },\n    \"segments\": {},\n    \"extendedFields\": {},\n    \"expirySchedules\": [\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2122-03-20\",\n            \"programId\": 1356,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 20.0,\n            \"expiryDate\": \"2122-03-20\",\n            \"programId\": 1356,\n            \"pointsType\": \"bill_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 200.0,\n            \"expiryDate\": \"2022-05-19\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "with startDate and endDate ": {
                    "value": "{\n    \"id\": 421098436,\n    \"profiles\": [],\n    \"loyaltyInfo\": {\n        \"loyaltyType\": \"loyalty\"\n    },\n    \"segments\": {},\n    \"extendedFields\": {},\n    \"expirySchedules\": [\n        {\n            \"points\": 200.0,\n            \"expiryDate\": \"2022-05-19\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        },\n        {\n            \"points\": 100.0,\n            \"expiryDate\": \"2022-05-20\",\n            \"programId\": 1357,\n            \"pointsType\": \"line_item_regular\",\n            \"expiryType\": \"fixed\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "Sample response with identifier name as email ": {
                    "summary": "Sample response with identifier name as email ",
                    "value": {
                      "id": 565032200,
                      "profiles": [],
                      "loyaltyInfo": {
                        "loyaltyType": "loyalty"
                      },
                      "segments": {},
                      "extendedFields": {},
                      "expirySchedules": [],
                      "warnings": []
                    }
                  },
                  "": {
                    "summary": "",
                    "value": "{}"
                  },
                  "Sample response with idemtifier name as mobile": {
                    "summary": "Sample response with idemtifier name as mobile",
                    "value": {
                      "id": 565039506,
                      "profiles": [],
                      "loyaltyInfo": {
                        "loyaltyType": "loyalty"
                      },
                      "segments": {},
                      "extendedFields": {},
                      "expirySchedules": [],
                      "warnings": []
                    }
                  },
                  "Sample response with Get Points Expiry Schedule": {
                    "summary": "Sample response with Get Points Expiry Schedule",
                    "value": {
                      "id": 565039505,
                      "profiles": [],
                      "loyaltyInfo": {
                        "loyaltyType": "loyalty"
                      },
                      "segments": {},
                      "extendedFields": {},
                      "expirySchedules": [
                        {
                          "points": 5140,
                          "expiryDate": "2125-05-05",
                          "expiryDateISO": "2125-05-05T00:00:00Z",
                          "programId": 973,
                          "pointsType": "customer_promotions",
                          "expiryType": "fixed"
                        }
                      ],
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Sample Response",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 421098436,
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
                                "example": 100,
                                "default": 0
                              },
                              "expiryDate": {
                                "type": "string",
                                "example": "2122-03-20"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 1356,
                                "default": 0
                              },
                              "pointsType": {
                                "type": "string",
                                "example": "line_item_regular"
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
                    },
                    {
                      "title": "when fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=false",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 421098436,
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
                                "example": 200,
                                "default": 0
                              },
                              "expiryDate": {
                                "type": "string",
                                "example": "2022-05-19"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 1357,
                                "default": 0
                              },
                              "pointsType": {
                                "type": "string",
                                "example": "line_item_regular"
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
                    },
                    {
                      "title": "with fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=false",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 421098436,
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
                                "example": 100,
                                "default": 0
                              },
                              "expiryDate": {
                                "type": "string",
                                "example": "2122-03-20"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 1356,
                                "default": 0
                              },
                              "pointsType": {
                                "type": "string",
                                "example": "line_item_regular"
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
                    },
                    {
                      "title": "with fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=true",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 421098436,
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
                                "example": 200,
                                "default": 0
                              },
                              "expiryDate": {
                                "type": "string",
                                "example": "2022-05-19"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 1357,
                                "default": 0
                              },
                              "pointsType": {
                                "type": "string",
                                "example": "line_item_regular"
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
                    },
                    {
                      "title": "with fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=true",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 421098436,
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
                                "example": 100,
                                "default": 0
                              },
                              "expiryDate": {
                                "type": "string",
                                "example": "2122-03-20"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 1356,
                                "default": 0
                              },
                              "pointsType": {
                                "type": "string",
                                "example": "line_item_regular"
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
                    },
                    {
                      "title": "with startDate and endDate ",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 421098436,
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
                                "example": 200,
                                "default": 0
                              },
                              "expiryDate": {
                                "type": "string",
                                "example": "2022-05-19"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 1357,
                                "default": 0
                              },
                              "pointsType": {
                                "type": "string",
                                "example": "line_item_regular"
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
                  ]
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/pointsExpirySchedule?source=INSTORE&identifierName=email&identifierValue=testgr10%40gmail.com&programId=983' \\\n--header 'Authorization: Basic bWFkaHVfc3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=6YGS7PapTDGsKc7JD9w_pnV5CKUsdzslUmxwoX0R9pY-1757168968223-0.0.1.1-604800000; _cfuvid=zYS0gwmsMVAj9DUolHoCbzD_Ta014xaIOdd9xXQS4h0-1758706722158-0.0.1.1-604800000'",
              "name": "Sample request with identifier name as email"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=8944837871&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=false&programId=973' \\\n--header 'Authorization: Basic bWFkaHVfcmltN2NkNzI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=3oOBdzHyrQZ09vC5iWm.FZMKBR51NMuMu37h8nKfaA8-1758706927293-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request with identifier name as mobile"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/pointsExpirySchedule' \\\n--header 'Authorization: Basic bWFkaHVfcmltYTkNzI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=uEUwrBAfGGgkRhH8C6wGyc6ShByhFRsEdpQj1e8WSGU-1750831646379-0.0.1.1-604800000; _cfuvid=H6Q8UU1zIGfafWJdknSM8QpYTX3rjg2tGnWw_8Sd02s-1758719807587-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request with Get Points Expiry Schedule"
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