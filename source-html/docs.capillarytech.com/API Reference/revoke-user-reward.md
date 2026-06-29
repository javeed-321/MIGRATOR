> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Revoke User Reward

This API revokes an issued reward transaction, moving every user reward in the transaction from the `ISSUED` state to `CANCELLED`, and refunds the points that were consumed when the reward was issued.

Use it to reverse a mis-issued or cancelled reward so that its value does not leak. Only transactions in the `ISSUED` state can be revoked; a reward that has already been redeemed must be reverse-redeemed back to `ISSUED` before it can be revoked.

The endpoint is gated by the brand-level `REVOKE_ENABLE` configuration flag, which is `false` by default. If the flag is not enabled for the org, the request is rejected.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer to the documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and the step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
> * All user rewards belonging to the transaction are revoked together. The points reversal is a single call for the whole transaction, because the rewards of a transaction share one redemption identifier.

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication.
* [ ] The `REVOKE_ENABLE` brand configuration flag must be set to `true` for the org. It is `false` by default and is managed through the brand configuration API.
* [ ] The reward transaction must be in the `ISSUED` state.

# Resource information

|                        |                                                                       |
| :--------------------- | :-------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/user/reward/revoke?username=`\{store\}` |
| HTTP Method            | POST                                                                  |
| Pagination             | No                                                                    |
| Batch support          | No                                                                    |
| Rate limit information | None                                                                  |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/reward/revoke?username=swati`

# Request query parameters

| Field      | Type   | Required | Description                                                                          |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------------ |
| `username` | string | Optional | Store identifier used for gateway authentication, consistent with other reward APIs. |

# Request body parameters

| Field                  | Type    | Required     | Description                                                                                                                                                 |
| ---------------------- | ------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `txnId`                | integer | **Required** | Transaction ID of the issuance transaction whose rewards are to be revoked. This is the reward issuance transaction ID returned at the time of issuance.    |
| `revokedEventDateTime` | string  | Optional     | The date and time at which the revoke happened at the source, in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`). Defaults to the processing time if not provided. |
| `revokedBy`            | string  | Optional     | Identifier of the actor who initiated the revoke, for example `BRAND_OPERATOR`. Stored against the revoke record for audit.                                 |
| `revokeReason`         | string  | Optional     | Reason for revoking the reward, for example `VENDOR_FULFILMENT_FAILURE`. Stored against the revoke record for audit.                                        |

# Example request

```bash
curl --location --request POST 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/user/reward/revoke?username=swati' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Basic <token>' \
  --data '{
    "txnId": 9876543210,
    "revokedEventDateTime": "2026-05-13T09:32:11.000Z",
    "revokedBy": "BRAND_OPERATOR",
    "revokeReason": "VENDOR_FULFILMENT_FAILURE"
  }'
```

# Example response

A successful revoke returns the resulting state and the number of user rewards that were cancelled for the transaction.

```json
{
  "status": {
    "success": true,
    "code": 200,
    "message": "Reward revoked successfully"
  },
  "txnId": 9876543210,
  "state": "CANCELLED",
  "userRewardCount": 1
}
```

When the points reversal could not be completed, the state is not changed and the response reports the failure. The caller should retry the revoke.

```json
{
  "status": {
    "success": false,
    "code": 1018,
    "message": "Failed to reverse points"
  },
  "txnId": 9876543210
}
```

# Response parameters

| Field             | Type    | Description                                                                                                                   |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `status`          | object  | Object containing the outcome of the request.                                                                                 |
| `.success`        | boolean | Indicates whether the revoke succeeded.                                                                                       |
| `.code`           | integer | Status code for the outcome. `200` indicates success; other values indicate the failure reason. See API-specific error codes. |
| `.message`        | string  | Human-readable description of the outcome.                                                                                    |
| `txnId`           | integer | Transaction ID that was revoked, echoed from the request.                                                                     |
| `state`           | string  | Resulting state of the transaction's user rewards. Returned as `CANCELLED` only when the revoke succeeds.                     |
| `userRewardCount` | integer | Number of user rewards transitioned to `CANCELLED` for the transaction. Returned only when the revoke succeeds.               |

# Points reversal behaviour

On revoke, the points consumed during issuance are refunded through a single points reversal call for the transaction:

1. Rewards that have no points attached (free or non-points rewards) need no reversal, and the revoke proceeds to `CANCELLED`.
2. If the points reversal succeeds, the user rewards move to `CANCELLED` and the reversal reference is recorded against the revoke.
3. If the points reversal fails (the points service is unreachable, returns a non-success response, or the points could not be returned), the state does not change. The response returns `code` `1018` and the revoke attempt is recorded so it can be retried.

# API-specific error codes

The endpoint returns HTTP `200` in all cases. The outcome is conveyed through the `status` object in the response body. The table below lists the `status.code` values and the symbolic name of each.

| Code  | Symbolic name                  | Message                                                     | When it occurs                                                                        |
| ----- | ------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 200   | `REWARD_REVOKED_OK`            | Reward revoked successfully                                 | The transaction was revoked and its rewards moved to `CANCELLED`.                     |
| 400   | —                              | must not be null                                            | The required `txnId` field is missing from the request body.                          |
| 13005 | `REVOKE_FEATURE_NOT_ENABLED`   | Revoke feature is not enabled for this brand                | The `REVOKE_ENABLE` flag is `false` for the org.                                      |
| 13003 | `INVALID_REWARD_STATE`         | Transaction is not in the required state for this operation | One or more user rewards in the transaction are not in the `ISSUED` state.            |
| 10007 | `TRANSACTION_NOT_FOUND`        | Transaction not found                                       | No transaction exists for the provided `txnId`.                                       |
| 10008 | `USER_REWARD_NOT_FOUND`        | User reward not found                                       | The transaction exists but has no associated user rewards.                            |
| 1018  | `REVERSE_POINTS_API_EXCEPTION` | Failed to reverse points                                    | The points reversal could not be completed. The state is unchanged; retry the revoke. |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Reward State Management",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://{Host}",
      "variables": {
        "Host": {
          "enum": [
            "{Host}",
            "eu.api.capillarytech.com",
            "api.capillarytech.com",
            "apac.api.capillarytech.com",
            "api.capillarytech.cn"
          ],
          "default": "{Host}"
        }
      }
    }
  ],
  "paths": {
    "/api_gateway/rewards/core/v1/user/reward/revoke": {
      "post": {
        "summary": "Revoke User Reward",
        "operationId": "revoke-user-reward",
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "Basic <base64>XXXXXXXX"
          },
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "<token>"
          },
          {
            "name": "username",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "Store identifier used for gateway authentication.",
            "example": "swati"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "txnId"
                ],
                "properties": {
                  "txnId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "Transaction ID of the issuance transaction to revoke.",
                    "example": 9876543210
                  },
                  "revokedEventDateTime": {
                    "type": "string",
                    "description": "Source event date-time in ISO 8601 format. Defaults to the processing time.",
                    "example": "2026-05-13T09:32:11.000Z"
                  },
                  "revokedBy": {
                    "type": "string",
                    "description": "Actor who initiated the revoke.",
                    "example": "BRAND_OPERATOR"
                  },
                  "revokeReason": {
                    "type": "string",
                    "description": "Reason for revoking the reward.",
                    "example": "VENDOR_FULFILMENT_FAILURE"
                  }
                }
              },
              "example": {
                "txnId": 9876543210,
                "revokedEventDateTime": "2026-05-13T09:32:11.000Z",
                "revokedBy": "BRAND_OPERATOR",
                "revokeReason": "VENDOR_FULFILMENT_FAILURE"
              }
            }
          }
        },
        "security": [
          {
            "basicAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "Outcome of the revoke. The result is conveyed in the status object.",
            "content": {
              "application/json": {
                "example": {
                  "status": {
                    "success": true,
                    "code": 200,
                    "message": "Reward revoked successfully"
                  },
                  "txnId": 9876543210,
                  "state": "CANCELLED",
                  "userRewardCount": 1
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
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
  }
}
```