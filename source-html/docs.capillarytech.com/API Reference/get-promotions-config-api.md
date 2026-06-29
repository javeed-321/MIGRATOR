> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Cart Promotions Configurations Using Promotion ID

This API can be used fetch the configurations of the cart promotions via promotion ids

This API retrieves the configuration details of cart promotions using their promotion IDs.

* When you call this API, the system returns a simplified view of the promotion configuration, including the promotion name, type, expiry date, description, reward summary, and current status.
* Use this API when you need a quick summary of promotion configurations without the full rule definitions, such as displaying promotion information to customers or store associates.
* You can retrieve configurations for multiple promotions in a single request by passing comma-separated promotion IDs.
* Set `includeExpired` or `includeInactive` to `true` if you need to include promotions that have ended or been deactivated.

# Example request

```curl
curl --location 'https://{Host}/api_gateway/v1/promotions/config?promotionIds=68e7966845de881062349048&includeExpired=true&includeInactive=true' \
--header 'Authorization: Basic Z2VvcmdlvY2RlbNWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=DWAI.W93CwD84bJoUrRqwVps-1761979737913-0.0.1.1-604800000' \
--data ''
```

# Prerequisites

* Authentication: Basic or OAuth authentication.

* Default access group

# Resource information

|               |    |
| :------------ | :- |
| Pagination    | No |
| Batch support | No |

# Query parameters

| Field           | Type    | Required | Description                                                                                         |
| :-------------- | :------ | :------- | :-------------------------------------------------------------------------------------------------- |
| promotionIds    | String  | Yes      | Defines the promotion ID using which you want to retrieve the cart promotion configuration details. |
| includeExpired  | Boolean | Optional | If set as `true`, includes expired cart promotions in the response.                                 |
| includeInactive | Boolean | Optional | If set as `true`, includes inactive cart promotions in the response.                                |

# Example response

```json
{
    "data": [
        {
            "promotionId": "68e7966845de881062349048",
            "promotionName": "Goldpromo",
            "promotionType": "REWARD",
            "expiry": 1758738599999,
            "expiryISO": "2025-09-24T18:29:59Z",
            "description": "testing 1234",
            "reward": "Buy items of amount =  100.000000 Get 1000.000000 off on the bill",
            "isActive": true,
            "customFieldValues": {
                "qwer": ""
            },
            "promotionRestrictions": {}
        }
    ],
    "errors": []
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
        data
      </td>

      <td>
        Array
      </td>

      <td>
        Defines a list of cart promotion configuration objects.
      </td>
    </tr>

    <tr>
      <td>
        ..promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the unique identifier for the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..promotionName
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the name of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..promotionType
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the type of cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..milestoneId
      </td>

      <td>
        Number
      </td>

      <td>
        Specifies the milestone ID.
      </td>
    </tr>

    <tr>
      <td>
        ..groupId
      </td>

      <td>
        Number
      </td>

      <td>
        Specifies the group ID.
      </td>
    </tr>

    <tr>
      <td>
        ..ruleId
      </td>

      <td>
        Number
      </td>

      <td>
        Specifies the rule ID.
      </td>
    </tr>

    <tr>
      <td>
        ..expiry
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates the timestamp of when the cart promotion expires in UTC time zone.Time format: Epoch milliseconds
      </td>
    </tr>

    <tr>
      <td>
        ..expiryISO
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the ISO 8601 timestamp of when the cart promotion expires in UTC, returned in the server time zone.

        EU server example 2026-02-04T09:14:45Z → 04 February 2026, 09:14:45 (UTC)

        India server example 2026-02-04T14:44:45+05:30 → 04 February 2026, 14:44:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..description
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the description of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..storeCriteria
      </td>

      <td>
        Object
      </td>

      <td>
        Defines store-based applicability rules.
      </td>
    </tr>

    <tr>
      <td>
        ..supplementaryCriteria
      </td>

      <td>
        Object
      </td>

      <td>
        Defines supplementary criteria.
      </td>
    </tr>

    <tr>
      <td>
        ..reward
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the reward details.
      </td>
    </tr>

    <tr>
      <td>
        ..maxEarningPerCustomer
      </td>

      <td>
        Number
      </td>

      <td>
        Specifies the maximum number of times a customer can earn the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..isActive
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the cart promotion is currently active.
      </td>
    </tr>

    <tr>
      <td>
        ..customFieldValues
      </td>

      <td>
        Object
      </td>

      <td>
        Contains custom field key-value pairs associated with the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..promotionRestrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Contains any restrictions applied to the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ...Customer
      </td>

      <td>
        Array
      </td>

      <td>
        Contains customer-level redemption limits.
      </td>
    </tr>

    <tr>
      <td>
        ...Cart
      </td>

      <td>
        Array
      </td>

      <td>
        Contains cart-level redemption limits.
      </td>
    </tr>

    <tr>
      <td>
        ....kpi
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the key metric used for the restriction.
      </td>
    </tr>

    <tr>
      <td>
        ....limit
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the maximum allowed value for the restriction.
      </td>
    </tr>

    <tr>
      <td>
        ....windowType
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the type of limit window applied to the restriction.
      </td>
    </tr>

    <tr>
      <td>
        ....fixedWindowConfig
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the cycle configuration for the restriction when `windowType` is `FIXED`.
      </td>
    </tr>

    <tr>
      <td>
        .....cycleType
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the type of fixed cycle.
      </td>
    </tr>

    <tr>
      <td>
        .....weekStartDay
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the start day of the weekly cycle when `cycleType` is `WEEK`.
      </td>
    </tr>

    <tr>
      <td>
        .....refreshRate
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the number of days per cycle when `cycleType` is `N_DAY`.
      </td>
    </tr>

    <tr>
      <td>
        .....cycleReferenceDate
      </td>

      <td>
        Long
      </td>

      <td>
        Epoch timestamp in milliseconds. The anchor date from which N_DAY cycles are calculated. Interpreted in the org's configured timezone. Defaults to the promotion's `startDate` if omitted.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array
      </td>

      <td>
        Specifies the errors messages.
      </td>
    </tr>
  </tbody>
</Table>

# Error codes

| Code | Description                                                                                                            |
| ---- | ---------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid request. Check required parameters. Ensure all required parameters are provided and valid.                     |
| 404  | Configuration not found. Use a valid request or check if the promotions configuration exists for the provided context. |
| 500  | Internal server error. Retry the request after a short delay, and contact support if the error persists.               |
| 704  | Invalid reward type passed. Provide a valid reward type as per API specification.                                      |
| 707  | The passed promotion type is not supported. Change the promotion type to one supported by the system.                  |

<br />

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
    "/api_gateway/v1/promotions/config": {
      "get": {
        "summary": "Get Cart Promotions Config API",
        "description": "This API can be used fetch the configurations of the cart promotions via promotion ids",
        "operationId": "get-promotions-config-api",
        "parameters": [
          {
            "name": "includeExpired",
            "in": "query",
            "description": "includes expired promotions or not",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "includeInactive",
            "in": "query",
            "description": "includes active/inactive promotions",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "promotionIds",
            "in": "query",
            "description": "Unique id assigned to any promotion created",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"data\": [\n    {\n      \"promotionId\": \"string\",\t\t //Unique id assigned to any promotion \n      \"promotionName\": \"string\"\t\t  \t  //Name of the promotion \n      \"promotionType\": \"POS\",\t\t\t        //Type of  promotion \n      \"milestoneId\": 0,\n      \"groupId\": 0,\n      \"ruleId\": 0,\n      \"expiry\": 0,      \t\t    //Period after which the promotion will expire\n      \"description\": \"string\",      //Custom description added for the promotion\n      \"storeCriteria\": {\n        \"type\": \"STORE\",            //List of stores where promotion is applicable\n        \"values\": [\n          0\n        ],\n        \"operator\": \"IN\"\n      },\n      \"supplementaryCriteria\": {\n        \"loyaltyProgramId\": 0,\n        \"programType\": \"TIER\",\n        \"partnerProgramId\": 0\n      },\n      \"reward\": \"string\",\n      \"maxEarningPerCustomer\": 0,\n      \"isActive\": true,\n      \"customFieldValues\": {\n        \"additionalProp1\": \"string\",\n        \"additionalProp2\": \"string\",\n        \"additionalProp3\": \"string\"\n      },\n      \"promotionRestrictions\": {\n        \"additionalProp1\": [\n          {\n            \"kpi\": \"TRANSACTION\",\n            \"frequency\": \"DAYS\",\n            \"minTimeBetweenRepeat\": 0,\n            \"limit\": 0\n          }\n        ],\n        \"additionalProp2\": [\n          {\n            \"kpi\": \"TRANSACTION\",\n            \"frequency\": \"DAYS\",\n            \"minTimeBetweenRepeat\": 0,\n            \"limit\": 0\n          }\n        ],\n        \"additionalProp3\": [\n          {\n            \"kpi\": \"TRANSACTION\",\n            \"frequency\": \"DAYS\",\n            \"minTimeBetweenRepeat\": 0,\n            \"limit\": 0\n          }\n        ]\n      }\n    }\n  ],\n  \"errors\": [\n    {\n      \"code\": 0,\n      \"message\": \"string\"\n    }\n  ]\n"
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
        "deprecated": false
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