> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Manual Tier Adjustment

This API allows for manual adjustment of a customer's loyalty tier (slab), including upgrading, downgrading, renewing the current tier, or extending its expiry date.

> 📘 Note
>
> You can adjust tiers for individual customers. Manual tier adjustments aren't available for [user groups](https://docs.capillarytech.com/docs/group-loyalty#/).

## Prerequisites

* Authentication: Basic/OAuth authentication
* Access group: Default access group

## Resource Information

| Field                  | Value                        |
| :--------------------- | :--------------------------- |
| URI                    | v2/slab/manualSlabAdjustment |
| HTTP Method            | POST                         |
| Pagination             | No                           |
| Batch support          | NA                           |
| Rate limit information | NA                           |

## API Endpoint cURL

```curl
curl --location 'https://eu.api.capillarytech.com/v2/slab/manualSlabAdjustment?identifierName=mobile&identifierValue=919731013853&source=INSTORE' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--header 'Cookie: _cfuvid=d0G7Nfz8dsA1COsbdZ.lAjHfFW9uVmAotZAHao.w4Jk-1744631218437-0.0.1.1-604800000' \
--data '{
    "programId": 973,
    "toSlabName": "Emerald",
    "slabAction": "UPGRADE",
    "manualSlabActionValidity": "FIXED_DURATION",
    "manualSlabActionValidityUpto": "20",
    "reassessTierOnNextActivity": true,
    "slabChangeReason": "Won the tier giveaway"
}'
```

## Query Parameters

| Parameter Name (Parameters marked as \* are mandatory) | Data Type | Description                                                                                                                                                                        |
| :----------------------------------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source\*                                               | String    | Source of customer information. Supported values: `INSTORE`, `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP` |
| identifierName\*                                       | String    | Identifier type to identify the customer. Supported values: `mobile`, `id`, `externalId`                                                                                           |
| identifierValue\*                                      | String    | Value corresponding to the `identifierName` provided.                                                                                                                              |
| type                                                   | String    | Type of entity to adjust the tier. Supported values: `CUSTOMER`.                                                                                                                   |

## Request Body Example

```json
{
    "programId": 973,
    "toSlabName": "Emerald",
    "slabAction": "UPGRADE",
    "manualSlabActionValidity": "FIXED_DURATION",
    "manualSlabActionValidityUpto": "20",
    "reassessTierOnNextActivity": true,
    "slabChangeReason": "Won the tier giveaway"
}
```

## Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked as * are required)
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
        programId*
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the loyalty program. To retrieve the `programId`, use the [Get Loyalty Programs API](https://docs.capillarytech.com/reference/get-loyalty-programs).
      </td>
    </tr>

    <tr>
      <td>
        slabAction*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of slab change being performed. Supported values: `UPGRADE`: Upgrade the customer's tier to a higher tier. `DOWNGRADE`: Downgrade a customer's tier to a lower tier. `RENEWAL`: Renew this customer's current tier. `EXTEND_CURRENT_TIER_EXPIRY_DATE`: Extend the customer's current tier expiry date.
      </td>
    </tr>

    <tr>
      <td>
        toSlabName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the slab to upgrade or downgrade the customer to. This parameter is required if `slabAction` = `UPGRADE` or `DOWNGRADE`. For example, to downgrade a customer from "Gold" to "Silver", provide the value as "Silver".
      </td>
    </tr>

    <tr>
      <td>
        manualSlabActionValidity*
      </td>

      <td>
        Enum
      </td>

      <td>
        Validity period for the tier change. Supported values: `FIXED_DURATION`: Extends the slab expiry by a fixed number of days. `SPECIFIC_DATE`: Sets the slab expiry to a specific date in ISO YYYY-MM-DD HH:MM:SS format. `CURRENT_TIER_EXPIRY_DATE`: Maintains the current slab's expiry date in ISO YYYY-MM-DD HH:MM:SS format. `AS_PER_TIER_STRATEGY`: Calculates the expiry date based on the expiration strategy defined by the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        manualSlabActionValidityUpto*
      </td>

      <td>
        Long
      </td>

      <td>
        Date or number of days the customer's tier upgrade or downgrade is valid for.   

        * If `manualSlabActionValidity` = `FIXED_DURATION`: Provide a numerical value. For example, to extend the expiry by 15 days, provide this value as `15`.     
          The day of the upgrade (day 0) counts toward the validity period.   
          For example, if you upgrade a customer to a new tier on January 1st with a 30-day validity period,  the validity period begins on the upgrade date of January 1st and ends on January 31st. 
        * If `manualSlabActionValidity` = `SPECIFIC_DATE`: Provide the date till when the tier is valid in `YYYY-MM-DD` format. For example, to extend the expiry till 20th April, 2025, provide this value as `2025-04-20`.
      </td>
    </tr>

    <tr>
      <td>
        reassessTierOnNextActivity
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specify if the customer's tier during their next transaction or activity should be re-evaluated. The value is `false` by default. `true`: The system will reassess the customer's tier during their next activity. `false`: No automatic reassessment will occur during the next activity and the tier upgrade will expire based on the expiry strategy defined.
      </td>
    </tr>

    <tr>
      <td>
        slabChangeReason
      </td>

      <td>
        String
      </td>

      <td>
        Reason for changing, renewing or extending the customer's tier. Character limit: 255 characters.
      </td>
    </tr>
  </tbody>
</Table>

## Response Body

```json Tier Upgrade
{
    "programId": 973,
    "entityId": 424134447,
    "sideEffects": [
        {
            "entityType": "USER",
            "previousSlabName": "Ruby",
            "previousSlabNumber": 2,
            "upgradedSlabName": "Emerald",
            "upgradedSlabNumber": 3,
            "slabExpiryDate": "30th Nov, 2025",
            "type": "slab"
        }
    ],
    "warnings": []
}
```
```Text Tier Downgrade
{
    "programId": 2834,
    "entityId": 424134447,
    "sideEffects": [
        {
            "entityType": "USER",
            "previousSlabName": "GOLD",
            "previousSlabNumber": 3,
            "upgradedSlabName": "Silver",
            "upgradedSlabNumber": 2,
            "slabExpiryDate": "30th Nov, 2025",
            "type": "slab"
        }
    ],
    "warnings": []
}
```
```Text Tier Renewal / Extension
{
    "programId": 2834,
    "entityId": 424134447,
    "sideEffects": [
        {
            "entityType": "USER",
            "previousSlabName": "GOLD",
            "previousSlabNumber": 3,
            "upgradedSlabName": "GOLD",
            "upgradedSlabNumber": 3,
            "slabExpiryDate": "30th Nov, 2025",
            "type": "slab"
        }
    ],
    "warnings": []
}
```

## Response Body Parameters

| Parameter          | Description                                                                                                                                    |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| programId          | Unique ID of the loyalty program.                                                                                                              |
| entityId           | Unique ID of the customer whose slab was adjusted.                                                                                             |
| sideEffects        | Object containing details of the tier adjustment.                                                                                              |
| entityType         | Type of entity part of the tier adjustment. Possible values: `USER`                                                                            |
| previousSlabName   | Customer's slab name before the adjustment.                                                                                                    |
| previousSlabNumber | Numerical representation of the previous slab. For example, if the slab was the third slab in the order, the value will be `3`.                |
| upgradedSlabName   | Customer's slab name after the adjustment.                                                                                                     |
| upgradedSlabNumber | Numerical representation of the upgraded or downgraded slab. For example, if the slab was the second slab in the order, the value will be `2`. |
| slabExpiryDate     | New expiry date of the customer's slab.                                                                                                        |
| type               | Type of side effect. Possible value: `slab`                                                                                                    |
| warnings           | Object containing warnings, if any.                                                                                                            |

## API Specific Error Codes

| Error Code | Description                                                                    | Reason                                                                                                      |
| :--------- | :----------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| 1101       | invalid programId passed                                                       | Program ID invalid or unsupported                                                                           |
| 3045       | Manual slab adjustment is not allowed for the customer                         | Customer status (such as `Fraud_confirmed`) blocks tier upgrade, renewal, or tier expiry extension          |
| 8015       | Customer not found for the given identifiers                                   | Invalid customer ID passed                                                                                  |
| 8917       | slabAction field is not set                                                    | Invalid slabAction field passed                                                                             |
| 8920       | manualSLabActionValidity field is not set                                      | Invalid manualSLabActionValidity field passed                                                               |
| 8921       | manualSLabActionValidityUpto value should be an integer                        | Valid Integer not passed for manualSLabActionValidityUpto field                                             |
| 8923       | slab not found for the given slab name                                         | Invalid or unsupported slab name                                                                            |
| 8925       | target slab must be higher than the current slab                               | Invalid toslabname field passed                                                                             |
| 11030      | When identifierName is id, identifierValue must be a valid numeric customer id | `identifierValue` is not a valid numeric customer ID (e.g., `"undefined"`, `"null"`, or non-numeric string) |

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
    "/slab/manualSlabAdjustment": {
      "post": {
        "summary": "Manual Tier Adjustment",
        "description": "",
        "operationId": "manual-tier-adjustment",
        "parameters": [
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier type to identify the customer. Supported values: mobile, id, externalId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value corresponding to the identifierName provided.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Type of entity to adjust the tier. Supported values: CUSTOMER",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "programId",
                  "slabAction",
                  "manualSlabActionValidity",
                  "manualSlabActionValidityUpto"
                ],
                "properties": {
                  "programId": {
                    "type": "integer",
                    "description": "Unique ID of the loyalty program. To retrieve the programId , use the Get Loyalty Programs API.",
                    "format": "int32"
                  },
                  "slabAction": {
                    "type": "string",
                    "description": "UPGRADE, DOWNGRADE, RENEWAL, EXTEND_CURRENT_TIER_EXPIRY_DATE",
                    "enum": [
                      "Type of slab change being performed"
                    ]
                  },
                  "toSlabName": {
                    "type": "string",
                    "description": "Name of the slab to upgrade or downgrade the customer to. This parameter is required if slabAction = UPGRADE or DOWNGRADE. For example, to downgrade a customer from \"Gold\" to \"Silver”, provide the value as \"Silver\"."
                  },
                  "manualSlabActionValidity": {
                    "type": "string",
                    "description": "Validity period for the tier change.",
                    "enum": [
                      "FIXED_DURATION",
                      "SPECIFIC_DATE",
                      "CURRENT_TIER_EXPIRY_DATE",
                      "AS_PER_TIER_STRATEGY"
                    ]
                  },
                  "manualSlabActionValidityUpto": {
                    "type": "integer",
                    "description": "Date or number of days the customer's tier upgrade or downgrade is valid till. If manualSlabActionValidity = FIXED_DURATION: Provide a numerical value. For example to extend the expiry by 15 days, provide this value as 15. If manualSlabActionValidity = SPECIFIC_DATE: Provide the date till when the tier is valid in YYYY-MM-DD format. For example to extend the expiry till 20th April, 2025, provide this value as 2025-04-20.",
                    "format": "int64"
                  },
                  "reassessTierOnNextActivity": {
                    "type": "boolean",
                    "description": "Specify if the customer's tier during their next transaction or activity should be re-evaluated.",
                    "default": false
                  },
                  "slabChangeReason": {
                    "type": "string",
                    "description": "Reason for changing, renewing or extending the customer's tier. Character limit: 255 characters."
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
                  "Tier upgrade": {
                    "value": "{\n    \"programId\": 2834,\n    \"entityId\": 424134447,\n    \"sideEffects\": [\n        {\n            \"entityType\": \"USER\",\n            \"previousSlabName\": \"Silver\",\n            \"previousSlabNumber\": 2,\n            \"upgradedSlabName\": \"GOLD\",\n            \"upgradedSlabNumber\": 3,\n            \"slabExpiryDate\": \"30th Nov, 2025\",\n            \"type\": \"slab\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "Tier downgrade": {
                    "value": "{\n    \"programId\": 2834,\n    \"entityId\": 424134447,\n    \"sideEffects\": [\n        {\n            \"entityType\": \"USER\",\n            \"previousSlabName\": \"GOLD\",\n            \"previousSlabNumber\": 3,\n            \"upgradedSlabName\": \"Silver\",\n            \"upgradedSlabNumber\": 2,\n            \"slabExpiryDate\": \"30th Nov, 2025\",\n            \"type\": \"slab\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "Tier Renewal / Extension": {
                    "value": "{\n    \"programId\": 2834,\n    \"entityId\": 424134447,\n    \"sideEffects\": [\n        {\n            \"entityType\": \"USER\",\n            \"previousSlabName\": \"GOLD\",\n            \"previousSlabNumber\": 3,\n            \"upgradedSlabName\": \"GOLD\",\n            \"upgradedSlabNumber\": 3,\n            \"slabExpiryDate\": \"30th Nov, 2025\",\n            \"type\": \"slab\"\n        }\n    ],\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Tier upgrade",
                      "type": "object",
                      "properties": {
                        "programId": {
                          "type": "integer",
                          "example": 2834,
                          "default": 0
                        },
                        "entityId": {
                          "type": "integer",
                          "example": 424134447,
                          "default": 0
                        },
                        "sideEffects": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "entityType": {
                                "type": "string",
                                "example": "USER"
                              },
                              "previousSlabName": {
                                "type": "string",
                                "example": "Silver"
                              },
                              "previousSlabNumber": {
                                "type": "integer",
                                "example": 2,
                                "default": 0
                              },
                              "upgradedSlabName": {
                                "type": "string",
                                "example": "GOLD"
                              },
                              "upgradedSlabNumber": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
                              "slabExpiryDate": {
                                "type": "string",
                                "example": "30th Nov, 2025"
                              },
                              "type": {
                                "type": "string",
                                "example": "slab"
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
                      "title": "Tier downgrade",
                      "type": "object",
                      "properties": {
                        "programId": {
                          "type": "integer",
                          "example": 2834,
                          "default": 0
                        },
                        "entityId": {
                          "type": "integer",
                          "example": 424134447,
                          "default": 0
                        },
                        "sideEffects": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "entityType": {
                                "type": "string",
                                "example": "USER"
                              },
                              "previousSlabName": {
                                "type": "string",
                                "example": "GOLD"
                              },
                              "previousSlabNumber": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
                              "upgradedSlabName": {
                                "type": "string",
                                "example": "Silver"
                              },
                              "upgradedSlabNumber": {
                                "type": "integer",
                                "example": 2,
                                "default": 0
                              },
                              "slabExpiryDate": {
                                "type": "string",
                                "example": "30th Nov, 2025"
                              },
                              "type": {
                                "type": "string",
                                "example": "slab"
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
                      "title": "Tier Renewal / Extension",
                      "type": "object",
                      "properties": {
                        "programId": {
                          "type": "integer",
                          "example": 2834,
                          "default": 0
                        },
                        "entityId": {
                          "type": "integer",
                          "example": 424134447,
                          "default": 0
                        },
                        "sideEffects": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "entityType": {
                                "type": "string",
                                "example": "USER"
                              },
                              "previousSlabName": {
                                "type": "string",
                                "example": "GOLD"
                              },
                              "previousSlabNumber": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
                              "upgradedSlabName": {
                                "type": "string",
                                "example": "GOLD"
                              },
                              "upgradedSlabNumber": {
                                "type": "integer",
                                "example": 3,
                                "default": 0
                              },
                              "slabExpiryDate": {
                                "type": "string",
                                "example": "30th Nov, 2025"
                              },
                              "type": {
                                "type": "string",
                                "example": "slab"
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
              "text/plain": {
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/slab/manualSlabAdjustment?identifierName=mobile&identifierValue=919731013853&source=INSTORE' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: ••••••' \\\n--header 'Cookie: _cfuvid=d0G7Nfz8dsA1COsbdZ.lAjHfFW9uVmAotZAHao.w4Jk-1744631218437-0.0.1.1-604800000' \\\n--data '{\n    \"programId\": 973,\n    \"toSlabName\": \"Emerald\",\n    \"slabAction\": \"UPGRADE\",\n    \"manualSlabActionValidity\": \"FIXED_DURATION\",\n    \"manualSlabActionValidityUpto\": \"20\",\n    \"reassessTierOnNextActivity\": true,\n    \"slabChangeReason\": \"Won the tier giveaway\"\n}'"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```