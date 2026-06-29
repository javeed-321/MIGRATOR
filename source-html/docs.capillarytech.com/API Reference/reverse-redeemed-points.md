> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Reverse Redeemed Points

Lets you reverse a set of points that are redeemed in a transaction. For example, you can use this API to reverse points redeemed for a transaction if the transaction is returned.

Reverses points that were redeemed in a transaction. Use this API to restore points to a customer's wallet when a transaction is returned or a redemption is cancelled. For cross-member group redemptions, points are restored to each source member's wallet in the amounts originally drawn.

**What this API supports**

* Reverse redeemed points for an individual customer's wallet.
* Reverse a cross-member group redemption, restoring points to each source member's wallet in the amounts originally drawn.
* Per-source-member breakdown in the response (`crossMemberReversalBreakup[]`) showing exactly whose points were restored and how much was expired at the time of reversal.
* Backward compatible: for individual (non-group) reversals, `crossMemberReversalBreakup` is absent from the response and all existing fields are unchanged.

## Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/points/reverse' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bWFkaMjU2YQ==' \
--header 'Cookie: _cfuvid=7165ECtxDm51hFGZ_zSJYF7reiBXgk4OldF_d7_82Iw-1761202117837-0.0.1.1-604800000' \
--data '{
    "redemptionId": "gWpna6",
    "pointsToBeReversed": 2,
    
    "identifier": {
        "type": "ID",
        "value": "564847023"
    }
}'
```

## Prerequisites

The following configurations are required for points/reverse API

* Enable Allow\_points\_redemption\_reversal config on EMF settings. Only the back-end team has access to this page. Please raise a ticket to enable the config. For more information on this feature, click [here](https://docs.capillarytech.com/docs/actions#points-redemption-reversal).
* Enable V2 API as points reversal is supported only V2.0.

## Body parameters

| Field                | Type   | Required     | Description                                                                         |
| -------------------- | ------ | ------------ | ----------------------------------------------------------------------------------- |
| `redemptionId`       | String | **Required** | Unique identifier for the original redemption transaction.                          |
| `pointsToBeReversed` | Number | Optional     | Number of points to be reversed. If not provided, all redeemed points are reversed. |
| `identifier`         | Object | **Required** | Object containing customer identification details.                                  |
| `.type`              | String | **Required** | Type of customer identifier. Must be one of: `ID`, `PHONE`, `EMAIL`.                |
| `.value`             | String | **Required** | Unique value of the customer identifier.                                            |

## Example response

```curl Individual reversal response
{
    "orgId": 100737,
    "identifier": {
        "type": "ID",
        "value": "564847023"
    },
    "customerId": 564847023,
    "redemptionId": "gWpna6",
    "pointsToBeReversed": 2.0,
    "pointsReversed": 2.0,
    "pointsReversedDetails": {
        "available": 2.0,
        "expired": 0.0
    },
    "warnings": []
}
```

```curl Cross-member reversal response
{
    "orgId": 100737,
    "identifier": {
        "type": "ID",
        "value": "564847023"
    },
    "customerId": 564847023,
    "redemptionId": "gWpna6",
    "pointsToBeReversed": 350.0,
    "pointsReversed": 350.0,
    "pointsReversedDetails": {
        "available": 330.0,
        "expired": 20.0
    },
    "crossMemberReversalBreakup": [
        {
            "memberId": 564847024,
            "pointsRestored": 100.0,
            "pointsExpiredByReversal": 0.0,
            "expiryBatchDate": "2026-04-10T00:00:00Z",
            "status": "REVERSED"
        },
        {
            "memberId": 564847025,
            "pointsRestored": 250.0,
            "pointsExpiredByReversal": 20.0,
            "expiryBatchDate": "2026-03-15T00:00:00Z",
            "status": "REVERSED"
        }
    ],
    "warnings": []
}
```

## Response parameters

| Parameter                    | Type   | Description                                                                                                                                                                                                           |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orgId`                      | Number | Unique identifier for the organization.                                                                                                                                                                               |
| `identifier`                 | Object | Object containing customer identification details.                                                                                                                                                                    |
| -`type`                      | String | Type of customer identifier.                                                                                                                                                                                          |
| -`value`                     | String | Unique value of the customer identifier.                                                                                                                                                                              |
| `customerId`                 | Number | Unique internal identifier for the customer.                                                                                                                                                                          |
| `redemptionId`               | String | Unique identifier for the original redemption transaction.                                                                                                                                                            |
| `reversalId`                 | String | Unique identifier for the reversal transaction.                                                                                                                                                                       |
| `pointsToBeReversed`         | Number | Number of points requested to be reversed.                                                                                                                                                                            |
| `pointsReversed`             | Number | Number of points actually reversed.                                                                                                                                                                                   |
| `pointsReversedDetails`      | Object | Breakdown of points reversed by type. Only unexpired (available) points are credited back. Expired points are not restored.                                                                                           |
| -`available`                 | Number | Points reversed from the active or available balance.                                                                                                                                                                 |
| -`expired`                   | Number | Points that were expired and not restored.                                                                                                                                                                            |
| `warnings`                   | Array  | List of warnings, if any.                                                                                                                                                                                             |
| `errors`                     | Array  | List of errors, if any.                                                                                                                                                                                               |
| `crossMemberReversalBreakup` | Array  | Object containing details of the points reversed and members to whom the points were reversed. Present only when the reversed redemption was a cross-member group redemption. `null` for individual-member reversals. |
| `.memberId`                  | Long   | Customer ID of the group member whose points was reversed.                                                                                                                                                            |
| `.pointsRestored`            | Number | Total number of points reversed for the customer.                                                                                                                                                                     |
| `.pointsExpiredByReversal`   | Number | Portion of `pointsRestored` that could not be re-credited because the underlying points allocation had already expired. Zero on a standard reversal.                                                                  |
| `.expiryBatchDate`           | String | Original expiry date of the points allocation restored to this member. ISO-8601 timestamp.                                                                                                                            |
| `.status`                    | String | Status of the cross-member redemption log row after this reversal was applied.                                                                                                                                        |

## Error & warning codes

| Code | Error number | Type  | Description                                                                                                                       |
| ---- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------- |
| —    | 804          | Error | Unable to process points reversal request. General failure while processing the reversal request. Check parameters and try again. |
| —    | 817          | Error | Points reversal failed due to insufficient points. The customer does not have enough points available for reversal.               |
| —    | 818          | Error | Points reversal not allowed for this program. Reversal is not permitted for the given program configuration.                      |
| —    | 827          | Error | Unable to reverse points; reversal is enabled. Reversal conditions were not met despite being enabled for the organization.       |
| —    | 878          | Error | Points decimal precision not supported. Points value has more than 3 decimal places; maximum supported precision exceeded.        |
| —    | 885          | Error | Invalid program ID. The specified program ID is invalid or not applicable for reversal.                                           |
| —    | 886          | Error | Points reversal failed due to a temporary system error. Internal system issue. Retry the request later.                           |
| —    | 887          | Error | Points reversal failed due to a validation error. Provided parameters are invalid or failed server-side validation checks.        |
| —    | 888          | Error | Invalid configuration detected. System configuration error; raise a JIRA ticket to the Capillary product support team.            |
| —    | 896          | Error | Points reversal could not be processed. Temporary failure; retry after some time.                                                 |
| —    | 898          | Error | Points reversal currently unavailable. The reversal service is temporarily unavailable; retry later.                              |
| —    | 899          | Error | Misconfigured program setup. Program setup issue; raise a JIRA ticket to the Capillary product support team.                      |
| —    | 901          | Error | Customer not eligible for points reversal. Customer does not meet eligibility criteria for reversal.                              |
| —    | 902          | Error | Duplicate reversal request. A duplicate reversal request has been detected.                                                       |
| —    | 903          | Error | Reversal limit exceeded. Customer has reached the allowed reversal limit.                                                         |
| —    | 904          | Error | Points reversal locked for this customer. Points reversal operations are temporarily locked for this customer account.            |

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
    "/points/reverse": {
      "post": {
        "summary": "Reverse Redeemed Points",
        "description": "Lets you reverse a set of points that are redeemed in a transaction. For example, you can use this API to reverse points redeemed for a transaction if the transaction is returned.",
        "operationId": "reverse-redeemed-points",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "redemptionId"
                ],
                "properties": {
                  "redemptionId": {
                    "type": "string",
                    "description": "Unique ID of the points redemption to be reversed. This redemption Id will be available in the response of the points redeem API."
                  },
                  "pointsToBeReversed": {
                    "type": "number",
                    "description": "Number of points to be reversed.",
                    "format": "float"
                  },
                  "identifier": {
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Type of the identifier. Value: mobile, email, externalId, id, cardnumber, cardExternalId"
                      },
                      "value": {
                        "type": "string",
                        "description": "Value of the specified identifierType."
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "type": "object",
                    "description": "Details of the customer."
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
                  "Sample response": {
                    "summary": "Sample response",
                    "value": {
                      "orgId": 100737,
                      "identifier": {
                        "type": "ID",
                        "value": "564847023"
                      },
                      "customerId": 564847023,
                      "redemptionId": "gWpna6",
                      "pointsToBeReversed": 2,
                      "pointsReversed": 0,
                      "pointsReversedDetails": {
                        "available": 0,
                        "expired": 0
                      },
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "orgId": {
                      "type": "integer",
                      "example": 100458,
                      "default": 0
                    },
                    "identifier": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "example": "mobile"
                        },
                        "value": {
                          "type": "string",
                          "example": "919879787"
                        }
                      }
                    },
                    "customerId": {
                      "type": "integer",
                      "example": 556875097,
                      "default": 0
                    },
                    "reversalId": {
                      "type": "string",
                      "example": "zwU7b0"
                    },
                    "redemptionId": {
                      "type": "string",
                      "example": "bdHzg3"
                    },
                    "pointsToBeReversed": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "pointsReversed": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "pointsReversedDetails": {
                      "type": "object",
                      "properties": {
                        "available": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "expired": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
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
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/points/reverse' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFkaHljU2YQ==' \\\n--header 'Cookie: _cfuvid=7165ECtxDm51hFGZ_zSJYF7reiBXgk4OldF_d7_82Iw-1761202117837-0.0.1.1-604800000' \\\n--data '{\n    \"redemptionId\": \"gWpna6\",\n    \"pointsToBeReversed\": 2,\n    \n    \"identifier\": {\n        \"type\": \"ID\",\n        \"value\": \"564847023\"\n    }\n}'",
              "name": "Sample request"
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