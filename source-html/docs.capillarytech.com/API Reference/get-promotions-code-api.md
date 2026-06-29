> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Cart Promotion Details using Code & Promotion mode

This API can be used to fetch the Cart promotion details based on the code of the promotion

This API can be used to fetch the Cart promotion details using the cart promotion code and the cart promotion mode.

**Note:** At present, the API to fetch cart promotion codes for existing code linked cart promotions is not available; you can download the generated code list via the "Manage Promo Codes" settings on the cart promotions listing page in the UI.

<Image align="center" border={true} width="70% " src="https://files.readme.io/a629aefecb53b9347aa41b49279e517266c1b80a775517a559c3809396f1ac05-Screenshot_2025-11-06_at_11.31.16_AM.png" className="border" />

# Example request

```json
curl --location 'https://{Host}/api_gateway/v1/promotions/code?codes=DQCV73&mode=DISCOUNT' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
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
        codes
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Defines the cart promotion code using which you want to retrieve the cart promotion details.
      </td>
    </tr>

    <tr>
      <td>
        mode
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Defines the mode of cart promotion applied  
        Supported values: `DISCOUNT`, `PAYMENT_VOUCHER`.
      </td>
    </tr>

    <tr>
      <td>
        includeRedemptions
      </td>

      <td>
        Boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        If true, includes redemption details for the codes.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json
{
    "data": [
        {
            "id": "68fb18d331d91c625a8d9e52",
            "orgId": 100458,
            "promotionId": "68fb18a431d91c625a8d9e51",
            "promotionName": "eratg",
            "code": "DQCV73",
            "customerId": 566881933,
            "active": true,
            "createdOn": 1761286355257,
            "createdOnISO": "2025-10-24T06:12:35Z",
            "validTill": 1763787599999,
            "validTillISO": "2025-11-22T04:59:59Z",
            "mode": "DISCOUNT",
            "redeemableFrom": 1761286355257,
            "redeemableFromISO": "2025-10-24T06:12:35Z"
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
        data
      </td>

      <td>
        Array
      </td>

      <td>
        Defines a list of cart promotion code objects.
      </td>
    </tr>

    <tr>
      <td>
        ..id
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the unique identifier for the cart promotion code record.
      </td>
    </tr>

    <tr>
      <td>
        ..orgId
      </td>

      <td>
        Number
      </td>

      <td>
        Specifies the Organization ID.
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
        Specifies the ID of the cart promotion meta this code belongs to.
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
        ..code
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the cart promotion code itself.
      </td>
    </tr>

    <tr>
      <td>
        ..customerId
      </td>

      <td>
        Number
      </td>

      <td>
        Specifies the customer ID this code is linked to.
      </td>
    </tr>

    <tr>
      <td>
        ..active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the code is currently active.
      </td>
    </tr>

    <tr>
      <td>
        ..createdOn
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates the timestamp when the code was created in UTC.
        Time format: Epoch milliseconds
      </td>
    </tr>

    <tr>
      <td>
        ..createdOnISO
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the ISO 8601 timestamp of when the code was created in UTC, returned in the server time zone.

        EU server example 2026-02-04T08:40:15Z → 04 February 2026, 08:40:15 (UTC)

        India server example 2026-02-04T14:10:15+05:30 → 04 February 2026, 14:10:15 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..validTill
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates the timestamp of when the code expires in UTC.
        Time format : Epoch milliseconds
      </td>
    </tr>

    <tr>
      <td>
        ..validTillISO
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the ISO 8601 timestamp of when the code was created in UTC, returned in the server time zone.

        EU server example 2026-02-04T08:40:15Z → 04 February 2026, 08:40:15 (UTC)

        India server example 2026-02-04T14:10:15+05:30 → 04 February 2026, 14:10:15 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..mode
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the cart promotion mode.
      </td>
    </tr>

    <tr>
      <td>
        ..redeemableFrom
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates the timestamp from when the code is redeemable.  
        Time format: Epoch milliseconds
      </td>
    </tr>

    <tr>
      <td>
        ..redeemableFromISO
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the ISO 8601 timestamp of when the code was created in UTC, returned in the server time zone.

        EU server example 2026-02-04T08:40:15Z → 04 February 2026, 08:40:15 (UTC)

        India server example 2026-02-04T14:10:15+05:30 → 04 February 2026, 14:10:15 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>
  </tbody>
</Table>

# Error codes

| Code | Description                                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid request. Check required parameters. Ensure all required parameters are provided and valid.                  |
| 902  | Code provided is non alpha numeric. Special characters are not allowed. Provide an alphanumeric code value.         |
| 903  | Code length should be greater than 5. Ensure the code meets the minimum length requirement.                         |
| 904  | Code length should be less than 40. Shorten the code to be under 40 characters.                                     |
| 905  | Code should be in upper case only. Use only uppercase letters for the code.                                         |
| 1001 | Invalid code. Provide a valid and existing code.                                                                    |
| 1002 | Code has expired. Use a non-expired code.                                                                           |
| 1004 | Code has been already redeemed. Use a code that has not already been redeemed.                                      |
| 1005 | Code linked to another customer. Provide a code that is not already linked.                                         |
| 1006 | Invalid customer identifier. Provide a valid customer identifier.                                                   |
| 1007 | Error while fetching customer identifier. Retry after checking the customer identifier details and service status.  |
| 1008 | Org not enabled for redemption without cart evaluation. Enable the feature or perform cart evaluation as required.  |
| 1009 | Validation failure for redemption without cart evaluation. Check your request for all needed validation compliance. |
| 500  | Internal server error. Retry after a short delay, and contact support if the error persists.                        |

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
    "/api_gateway/v1/promotions/code": {
      "get": {
        "summary": "Get Cart Promotions code API",
        "description": "This API can be used to fetch the Cart promotion details based on the code of the promotion",
        "operationId": "get-promotions-code-api",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "codes": {
                    "type": "string",
                    "description": "Code assigned to the promotion which can be used for redemption"
                  },
                  "mode": {
                    "type": "string",
                    "description": "type of mode: DISCOUNT or PAYMENT_VOUCHER"
                  },
                  "includeRedemptions": {
                    "type": "boolean",
                    "description": "to include details of redemption"
                  }
                }
              },
              "examples": {
                "Request Body": {
                  "value": {
                    "codes": [
                      "string"
                    ],
                    "mode": "DISCOUNT",
                    "includeRedemptions": true
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"data\": [\n    {\n      \"id\": \"string\",\n      \"orgId\": 0,                        \t\t //Unique id assigned to the organization/brand\n      \"promotionId\": \"string\", \t\t  \t //Unique id assigned to any promotion created\n      \"promotionName\": \"string\",\t  \t       //Name assigned to any promotion created\n      \"code\": \"string\", //Code assigned to the promotion which can be used for redemption\n      \"customerId\": 0\t\t\t\t\t         //Unique id assigned to a customer\n      \"active\": true,  \t\t //Whether the promotion is active or not(marked by the user)\n      \"createdOn\": 0, \t\t\t\t\t\t       //Date of promotion creation\n      \"validTill\": 0,\n      \"mode\": \"DISCOUNT\", //mode of the promotion\n      \"apiError\": {\n        \"code\": 0,\n        \"message\": \"string\"\n      },\n\"redeemableFrom\": 0,         //Date after which the promotion is applicable for redemption      \"restrictions\": {   \t\t                               \t        //applicable redemption restrictions\n        \"additionalProp1\": [\n          {\n            \"kpi\": \"REDEMPTION\",\n \"maxLimit\": 0,                                    //Maximum number of  redemptions allowed\n \t\"remainingRedemption\": 0, //Number of  redemptions remaining on the promotion\n          \"tempRedemption\": 0,         //Number of Temporary redemptions on the promotion\n              \"periodStart\": 0,                         //Period from which the restriction is applicable\n           \"periodEnd\": 0                                   //Period till which the restriction is applicable\n          }\n        ],\n        \"additionalProp2\": [\n          {\n            \"kpi\": \"REDEMPTION\",\n            \"maxLimit\": 0,\n            \"remainingRedemption\": 0,\n            \"tempRedemption\": 0,\n            \"periodStart\": 0,\n            \"periodEnd\": 0\n          }\n        ],\n        \"additionalProp3\": [\n          {\n            \"kpi\": \"REDEMPTION\",\n            \"maxLimit\": 0,\n            \"remainingRedemption\": 0,\n            \"tempRedemption\": 0,\n            \"periodStart\": 0,\n            \"periodEnd\": 0\n          }\n        ]\n      }\n    }\n  ],\n  \"errors\": [\n    {\n      \"code\": 0,\n      \"message\": \"string\"\n    }\n  ]\n}\n"
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