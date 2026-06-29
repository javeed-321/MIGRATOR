> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Revoke SCIM Token

Revoke the active SCIM provisioning token for one or more organizations.

This API allows you to revoke the active SCIM provisioning token for one or more organizations. Use this API before generating a new token for an organization; an organization can only have one active SCIM token at a time.

Revoking a token immediately deactivates it. Any identity provider configured with that token (such as Microsoft Entra ID) will lose access and must be reconfigured with a new token.

**Note:** This API processes each organization independently and returns a different HTTP status code depending on the outcome. Check `result.failed` for details on any organizations that failed.

## Example request

```curl Sample request
curl --location --request PUT 'https://{host}/launchpad/api/v1/orgs/scim/tokens/revoke' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <token>' \
--header 'X-CAP-API-AUTH-ORG-ID: <org_id>' \
--data '{
    "org_ids": [
        1231
    ]
}'
```

## Prerequisites

A valid Bearer token for the organization.

## Header information

| Field                   | Type    | Required     | Description                                                   |
| ----------------------- | ------- | ------------ | ------------------------------------------------------------- |
| `Content-Type`          | string  | **Required** | Must be `application/json`.                                   |
| `Authorization`         | string  | **Required** | Bearer token for an Intouch admin user with org owner access. |
| `X-CAP-API-AUTH-ORG-ID` | integer | **Required** | Org ID of the admin user making the request.                  |

## Body parameters

| Field     | Type              | Required     | Description                                                                                        |
| --------- | ----------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| `org_ids` | array of integers | **Required** | List of organization IDs whose active SCIM tokens should be revoked. Must contain at least one ID. |

## Example response

**All succeeded (HTTP 200):**

```json Sample response
{
    "success": true,
    "metadata": {
        "status": 200,
        "errorCode": "",
        "message": "",
        "error": []
    },
    "result": {
        "successful": [1231],
        "failed": []
    }
}
```

**Partial success (HTTP 207):**

```json Sample response
{
    "success": true,
    "metadata": {
        "status": 207,
        "errorCode": "",
        "message": "",
        "error": []
    },
    "result": {
        "successful": [1231],
        "failed": [
            {
                "org_id": 9999,
                "error_code": "2003",
                "error_name": "TOKEN_NOT_FOUND",
                "details": "No active token found"
            }
        ]
    }
}
```

**All failed (HTTP 422):**

```json Sample response
{
    "success": false,
    "metadata": {
        "status": 422,
        "errorCode": "",
        "message": "",
        "error": []
    },
    "result": {
        "successful": [],
        "failed": [
            {
                "org_id": 1231,
                "error_code": "2003",
                "error_name": "TOKEN_NOT_FOUND",
                "details": "No active token found"
            }
        ]
    }
}
```

## Response parameters

| Field                        | Type              | Description                                                                           |
| ---------------------------- | ----------------- | ------------------------------------------------------------------------------------- |
| `success`                    | boolean           | `true` if at least one token was revoked. `false` if all revocations failed.          |
| `metadata.status`            | integer           | HTTP status code. `200` — all succeeded. `207` — partial success. `422` — all failed. |
| `result.successful`          | array of integers | Org IDs whose SCIM tokens were successfully revoked.                                  |
| `result.failed`              | array             | Organizations for which revocation failed. Empty if all organizations succeeded.      |
| `result.failed[].org_id`     | integer           | Org ID that failed.                                                                   |
| `result.failed[].error_code` | string            | Numeric code identifying the failure reason.                                          |
| `result.failed[].error_name` | string            | Symbolic name for the error.                                                          |
| `result.failed[].details`    | string            | Human-readable description of why the revocation failed.                              |

## Error codes

| Code              | Error number | Type  | Description                                                                                                      |
| ----------------- | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------- |
| `TOKEN_NOT_FOUND` | 2003         | Error | No active SCIM token exists for this organization. The token may have already been revoked or was never created. |
| `DATABASE_ERROR`  | 2005         | Error | A database error occurred while revoking the token. Retry the request.                                           |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Revoke SCIM Token",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://{Host}",
      "variables": {
        "Host": {
          "enum": [
            "{Host}",
            "eu.intouch.capillarytech.com",
            "intouch.capillary.co.in",
            "apac2.intouch.capillarytech.com",
            "sgcrm.cc.capillarytech.com",
            "intouch.capillary.cn.com",
            "north-america.intouch.capillarytech.com"
          ],
          "default": "{Host}"
        }
      }
    }
  ],
  "paths": {
    "/launchpad/api/v1/orgs/scim/tokens/revoke": {
      "put": {
        "summary": "Revoke SCIM Token",
        "operationId": "revoke-scim-token",
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "Bearer <token>"
          },
          {
            "name": "X-CAP-API-AUTH-ORG-ID",
            "in": "header",
            "required": true,
            "schema": {
              "type": "integer"
            },
            "example": 50947
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "org_ids"
                ],
                "properties": {
                  "org_ids": {
                    "type": "array",
                    "items": {
                      "type": "integer"
                    },
                    "description": "List of organization IDs whose SCIM tokens should be revoked."
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "All tokens revoked successfully.",
            "content": {
              "application/json": {
                "examples": {
                  "Sample response": {
                    "summary": "Sample response",
                    "value": {
                      "success": true,
                      "metadata": {
                        "status": 200,
                        "errorCode": "",
                        "message": "",
                        "error": []
                      },
                      "result": {
                        "successful": [
                          1231
                        ],
                        "failed": []
                      }
                    }
                  }
                }
              }
            }
          },
          "207": {
            "description": "Partial success — some tokens revoked, some failed."
          },
          "422": {
            "description": "All revocations failed — no tokens were revoked."
          }
        },
        "description": "Revoke the active SCIM provisioning token for one or more organizations.",
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location --request PUT 'https://{host}/launchpad/api/v1/orgs/scim/tokens/revoke' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer <token>' \\\n--header 'X-CAP-API-AUTH-ORG-ID: <org_id>' \\\n--data '{\n    \"org_ids\": [\n        1231\n    ]\n}'",
              "language": "shell",
              "name": "Sample request"
            }
          ],
          "samples-languages": [
            "shell"
          ]
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```