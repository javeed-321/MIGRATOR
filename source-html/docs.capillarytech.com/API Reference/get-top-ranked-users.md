> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get top ranked users

The API fetches a ranked list of users who have achieved a target within a timeframe

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation on [API overview ](https://docs.capillarytech.com/reference/apioverview)and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

* [ ] Authentication: Basic/OAuth authentication
* [ ] Default access group
* [ ] Enable leaderboards for the organisation.
* [ ] Create a target milestone or streak.
* [ ] Enable leaderboards for the milestone or streak

# Resource Information

|                        |                                                                             |
| :--------------------- | :-------------------------------------------------------------------------- |
| URI                    | api\_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups`\{targetGroup\}` |
| HTTP Method            | GET                                                                         |
| Pagination             | Yes                                                                         |
| Rate limit information | NA                                                                          |

# API Endpoint Example

`https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/232?targetId=366&periodId=243&pageOffset=4&pageSize=10`

# Headers

| Header         | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DATA-SCOPE-ORG | List of Organisation IDs                                                                                                                                                                                                                                                                                                                                                                                          |
| DATA-SCOPE     | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation. Supported headers: SELF, OTHER and ALL. Refer to connected orgs [data scopes](https://docs.capillarytech.com/reference/connected-orgs-data-scopes) for more information. |

# Request path parameters

**Request path parameters**

| Parameters    | Type    | Description                                                                    |
| :------------ | :------ | :----------------------------------------------------------------------------- |
| targetGroupId | Integer | The ID of the target group. A target group is an entity that contains targets. |

# Request query parameters

| Parameter **Note:** Parameters marked with `*` are mandatory. | Type    | Description                                                                                                                                                                              |
| ------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `targetId`\*                                                  | Long    | The ID of the target. A target is a set of conditions or rules that need to be met to achieve a specific goal.                                                                           |
| `periodId`                                                    | Long    | The period ID of the target. A period is a set of parameters that define the timeframe for a target. If `periodId` is not provided, the current period of the target group will be used. |
| `pageSize`                                                    | Integer | The number of results required. For example, to view the top five ranks only, set the value to `5`.                                                                                      |
| `pageOffset`                                                  | Integer | The start page from which data retrieval starts. This value should not be negative.  For example, a value of `5` indicates that data retrieval will begin from the 4th page.             |
| `pageLimit`                                                   | Integer | Number of pages from which results are displayed.  A maximum of 100 pages can be viewed in one request.                                                                                  |

<br />

# Response body

```json
"pagination": {
    "limit": 3,
    "offset": 0,
    "total": 4527
},
"data": {
    "lastSyncTime": "2024-06-24T17:37:00.000IST",
    "lastSyncTimeISO": "2024-06-24T12:07:00.000Z",
    "targetGroupId": 232,
    "targetGroupName": "Target",
    "periodId": 243,
    "periodRefCode": "target_period",
    "targetRuleId": 366,
    "targetRuleName": "target1",
    "rankings": [
        {
            "rank": 1,
            "userId": 381329844,
            "achievedValue": 21000,
            "lastActivityTime": "2022-11-25T21:44:40.000IST",
            "lastActivityTimeISO": "2022-11-25T16:14:40.000Z",
            "userEnrichmentDetails": {
                "birthday": "NOT-CAPTURED",
                "gender": "Male",
                "mobile": "Sawyer",
                "last_name": "To",
                "first_name": "Sawyer",
                "anniversary": "NOT-CAPTURED",
                "email": "tom.sawyer@capillarytech.com"
            }
        },
        {
            "rank": 2,
            "userId": 381332324,
            "achievedValue": 21000,
            "lastActivityTime": "2022-11-29T00:14:48.000IST",
            "lastActivityTimeISO": "2022-11-28T18:44:48.000Z",
            "userEnrichmentDetails": {
                "birthday": "NOT-CAPTURED",
                "gender": "Male",
                "mobile": "919988221101",
                "last_name": "Finn",
                "first_name": "Huckleberry",
                "anniversary": "NOT-CAPTURED",
                "email": "huckleberry.finn@caillarytech.com"
            }
        },
        {
            "rank": 3,
            "userId": 381333386,
            "achievedValue": 21000,
            "lastActivityTime": "2022-11-29T13:48:28.000IST",
            "lastActivityTimeISO": "2022-11-29T08:18:28.000Z",
            "userEnrichmentDetails": {
                "birthday": "NOT-CAPTURED",
                "gender": "Male",
                "mobile": "919988221102",
                "last_name": "Crusoe",
                "first_name": "Robinson",
                "anniversary": "NOT-CAPTURED",
                "email": "robinson.crusoe@capillaryte"
            }
        }
    ]
},
"errors": [],
"warnings": []
```

# Response parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameters
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
        pagination
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing pagination details.
      </td>
    </tr>

    <tr>
      <td>
        – limit
      </td>

      <td>
        String
      </td>

      <td>
        Number of entries per page.
      </td>
    </tr>

    <tr>
      <td>
        – offset
      </td>

      <td>
        String
      </td>

      <td>
        Page number of the current result set.
      </td>
    </tr>

    <tr>
      <td>
        – total
      </td>

      <td>
        String
      </td>

      <td>
        Total number of entries.
      </td>
    </tr>

    <tr>
      <td>
        data
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of the leaderboard.
      </td>
    </tr>

    <tr>
      <td>
        – lastSyncTime
      </td>

      <td>
        String
      </td>

      <td>
        Time when data was updated Supported format:` YYYY-MM-DDTHH:MM:SS.000z`.  
        Note: This field will be deprecated in the future and is being replaced by lastSyncTimeISO.
      </td>
    </tr>

    <tr>
      <td>
        – lastSyncTimeISO
      </td>

      <td>

      </td>

      <td>
        Indicates the last sync date and time in ISO 8601 format, returned in the server time zone.

        EU server example  
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        –targetGroupId
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique ID of the target group. A target group contains an array of targets.
      </td>
    </tr>

    <tr>
      <td>
        –targetGroupName
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the target group.
      </td>
    </tr>

    <tr>
      <td>
        –periodId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the target period. A period is a set of parameters that define the timeframe for a target.
      </td>
    </tr>

    <tr>
      <td>
        –periodRefCode
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the target period.
      </td>
    </tr>

    <tr>
      <td>
        –targetRuleId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the target rule. A target rule is a set of parameters that define the rules for achieving a target.
      </td>
    </tr>

    <tr>
      <td>
        –targetRuleName
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the target rule.
      </td>
    </tr>

    <tr>
      <td>
        –rankings
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing user ranking details.
      </td>
    </tr>

    <tr>
      <td>
        –rank
      </td>

      <td>
        Integer
      </td>

      <td>
        Rank of the user.
      </td>
    </tr>

    <tr>
      <td>
        –userId
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
        –achievedValue
      </td>

      <td>
        Integer
      </td>

      <td>
        The achieved value of the customer in the period. Example: If the customer has earned 5000 points, the value will be 5000.
      </td>
    </tr>

    <tr>
      <td>
        –lastActivityTime
      </td>

      <td>
        String
      </td>

      <td>
        Last activity time Supported format: `YYYY-MM-DDTHH:MM:SS.000z`.  

        Note: This field will be deprecated in the future and is being replaced by lastActivityTimeISO.
      </td>
    </tr>

    <tr>
      <td>
        -lastActivityTimeISO
      </td>

      <td>
        DateTime
      </td>

      <td>
        Indicates the last activity's date and time in ISO 8601 format, returned in the server time zone.

        EU server example  
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        --mobile
      </td>

      <td>
        Integer
      </td>

      <td>
        Mobile number associated with the user.
      </td>
    </tr>

    <tr>
      <td>
        –userEnrichmentDetails
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing information related to the user.
      </td>
    </tr>

    <tr>
      <td>
        --birthday
      </td>

      <td>
        String
      </td>

      <td>
        Birthday of the user.
      </td>
    </tr>

    <tr>
      <td>
        gender
      </td>

      <td>
        String
      </td>

      <td>
        Gender of the user.
      </td>
    </tr>

    <tr>
      <td>
        --last_name
      </td>

      <td>
        String
      </td>

      <td>
        Last name of the user.
      </td>
    </tr>

    <tr>
      <td>
        --first_name
      </td>

      <td>
        String
      </td>

      <td>
        First name of the user.
      </td>
    </tr>

    <tr>
      <td>
        --anniversary
      </td>

      <td>
        String
      </td>

      <td>
        Anniversary date of the user.
      </td>
    </tr>

    <tr>
      <td>
        --email
      </td>

      <td>
        String
      </td>

      <td>
        Email address associated with the user.
      </td>
    </tr>
  </tbody>
</Table>

# API-specific warnings and errors

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
        * <br />
      </td>

      <td>
        Page offset can not be in negative, fetching the first page by default
      </td>

      <td>
        The page offset value is negative.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        Page Size can not be more than 100, capping the page size to 100
      </td>

      <td>
        The page size value is more than the supported limit of 100.
      </td>
    </tr>

    <tr>
      <td>
        310133
      </td>

      <td>
        Leaderboards are not enabled for the following orgs
      </td>

      <td>
        Leaderboards are not enabled for the organisation.
      </td>
    </tr>

    <tr>
      <td>
        310017
      </td>

      <td>
        Target group not found or deactivated
      </td>

      <td>
        The target group passed is either invalid or currently inactive.
      </td>
    </tr>

    <tr>
      <td>
        310134
      </td>

      <td>
        Leaderboard is not enabled for the target group
      </td>

      <td>
        Leaderboard is not enabled for the requested target group.
      </td>
    </tr>

    <tr>
      <td>
        310079
      </td>

      <td>
        target rule id doesn't belong to target group
      </td>

      <td>
        The target rule ID passed does not belong to the target group or is invalid.
      </td>
    </tr>

    <tr>
      <td>
        310118
      </td>

      <td>
        Target Period not found for the target
      </td>

      <td>
        The target period ID passed does not belong to the target group or is invalid or does not exist.
      </td>
    </tr>
  </tbody>
</Table>

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v1",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}",
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
    "/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/{targetGroupId}": {
      "get": {
        "summary": "Get top ranked users",
        "description": "",
        "operationId": "get-top-ranked-users",
        "parameters": [
          {
            "name": "targetId",
            "in": "query",
            "description": "The ID of the target. A target is a set of conditions or rules that need to be met to achieve a specific goal.",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "periodId",
            "in": "query",
            "description": "The period ID of the target. A period is a set of parameters that define the timeframe for a target.  If periodId is not provided, the current period of the target group will be used.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "pageSize",
            "in": "query",
            "description": "The number of results required.  For example, to view the top five ranks only, set the value to 5.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "pageOffset",
            "in": "query",
            "description": "The start page from which data retrieval starts. This value should not be negative.  For example, a value of 5 indicates that data retrieval will begin from the 5th page.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "pageLimit",
            "in": "query",
            "description": "Number of pages from which results are displayed.    A maximum of 100 pages can be viewed in one request.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "DATA-SCOPE-ORG",
            "in": "header",
            "description": "List of Organisation IDs",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "DATA-SCOPE",
            "in": "header",
            "description": "Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organisation. Defining a scope ensures that the response contains only data from the respective organisation.  Supported headers: SELF, OTHER and ALL.",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "path",
            "name": "targetGroupId",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "\"pagination\": {\n    \"limit\": 3,\n    \"offset\": 0,\n    \"total\": 4527\n},\n\"data\": {\n    \"lastSyncTime\": \"2024-06-24T17:37:00.000IST\",\n    \"lastSyncTimeISO\": \"2024-06-24T12:07:00.000Z\",\n    \"targetGroupId\": 232,\n    \"targetGroupName\": \"Target\",\n    \"periodId\": 243,\n    \"periodRefCode\": \"target_period\",\n    \"targetRuleId\": 366,\n    \"targetRuleName\": \"target1\",\n    \"rankings\": [\n        {\n            \"rank\": 1,\n            \"userId\": 381329844,\n            \"achievedValue\": 21000,\n            \"lastActivityTime\": \"2022-11-25T21:44:40.000IST\",\n            \"lastActivityTimeISO\": \"2022-11-25T16:14:40.000Z\",\n            \"userEnrichmentDetails\": {\n                \"birthday\": \"NOT-CAPTURED\",\n                \"gender\": \"Male\",\n                \"mobile\": \"Sawyer\",\n                \"last_name\": \"To\",\n                \"first_name\": \"Sawyer\",\n                \"anniversary\": \"NOT-CAPTURED\",\n                \"email\": \"tom.sawyer@capillarytech.com\"\n            }\n        },\n        {\n            \"rank\": 2,\n            \"userId\": 381332324,\n            \"achievedValue\": 21000,\n            \"lastActivityTime\": \"2022-11-29T00:14:48.000IST\",\n            \"lastActivityTimeISO\": \"2022-11-28T18:44:48.000Z\",\n            \"userEnrichmentDetails\": {\n                \"birthday\": \"NOT-CAPTURED\",\n                \"gender\": \"Male\",\n                \"mobile\": \"919988221101\",\n                \"last_name\": \"Finn\",\n                \"first_name\": \"Huckleberry\",\n                \"anniversary\": \"NOT-CAPTURED\",\n                \"email\": \"huckleberry.finn@caillarytech.com\"\n            }\n        },\n        {\n            \"rank\": 3,\n            \"userId\": 381333386,\n            \"achievedValue\": 21000,\n            \"lastActivityTime\": \"2022-11-29T13:48:28.000IST\",\n            \"lastActivityTimeISO\": \"2022-11-29T08:18:28.000Z\",\n            \"userEnrichmentDetails\": {\n                \"birthday\": \"NOT-CAPTURED\",\n                \"gender\": \"Male\",\n                \"mobile\": \"919988221102\",\n                \"last_name\": \"Crusoe\",\n                \"first_name\": \"Robinson\",\n                \"anniversary\": \"NOT-CAPTURED\",\n                \"email\": \"robinson.crusoe@capillaryte\"\n            }\n        }\n    ]\n},\n\"errors\": [],\n\"warnings\": []"
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
              "language": "curl",
              "code": "curl -L 'https://eu.api.capillarytech.com/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/232?targetId=366&periodId=243&pageOffset=0&pageSize=3' -H 'Authorization:****' -H 'DATA-SCOPE: SELF'"
            }
          ],
          "samples-languages": [
            "curl"
          ]
        }
      }
    }
  },
  "x-readme": {
    "headers": [
      {
        "key": "Content-Type",
        "value": "application/json"
      },
      {
        "key": "Accept",
        "value": "application/json"
      }
    ],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```