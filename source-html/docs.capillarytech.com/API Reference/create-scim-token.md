> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Create SCIM Token

Generate a SCIM provisioning token for one or more organizations.

This API allows you to generate a SCIM provisioning token for one or more organizations. Each token is returned once in the response. Store it immediately; the token can't be retrieved again. To generate a new token for an organization that already has an active token, first revoke the existing token.

**Note:** This API processes each organization independently. If token generation fails for some organizations, it still returns HTTP 200. Check the `failed` array in the response for details on which organizations failed and why.

## Example request

```curl Sample request
curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v1/orgs/scim/tokens' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6WyIyOTIyMjkiXSwib3JnSUQiOjAsImV4cCI6MTc3NzA5NDQwNCwiaWF0IjoxNzc3MDA4MDA0LCJpc3MiOiJjYXBpbGxhcnl0ZWNoLmNvbSIsImF1ZCI6ImNhcGlsbGFyeSxpbnRvdWNoLGFyeWEscmVvbixhcHBzIiwic291cmNlIjoiV0VCQVBQIiwicmVmZXJlbmNlSUQiOiI1MDc3OTk5NyJ9.2k37ovR4kLNOXXEYZT9XjY-J5v72ObaCvl4lPDbQlMg' \
--header 'X-CAP-API-AUTH-ORG-ID: 50947' \
--data '[
    {
      "org_name": "Loyalty Lane"
    }
  ]'
```

## Prerequisites

A valid Bearer token for the organization.

## Header information

| Field                   | Type    | Required     | Description                                                                                                                     |
| ----------------------- | ------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `Content-Type`          | string  | **Required** | Must be `application/json`.                                                                                                     |
| `Authorization`         | string  | **Required** | Bearer token for an Intouch admin user with org owner access. This is the `CT` session cookie from your active Intouch session. |
| `X-CAP-API-AUTH-ORG-ID` | integer | **Required** | Org ID of the admin user making the request.                                                                                    |

## Body parameters

| Field      | Type   | Required     | Description                                                                                                                   |
| ---------- | ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `org_name` | string | **Required** | Name of the organization to generate a SCIM token for. Must exactly match the organization name in Capillary. Case-sensitive. |

## Example response

```json
{
    "success": true,
    "metadata": {
        "status": 200,
        "errorCode": "",
        "message": "",
        "error": []
    },
    "result": {
        "successful": [
            {
                "org_id": 50947,
                "org_name": "Loyalty Lane",
                "token": "7351f986b6c1ce4856883b5b1ca12b277eb3c483b5168613664505170eabac1d"
            }
        ],
        "failed": []
    }
}
```

## Response parameters

| Field                          | Type    | Description                                                                                                                                    |
| ------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`                      | boolean | Indicates whether the request was processed. `true` even when some organizations fail — check `result.failed` for per-org errors.              |
| `metadata.status`              | integer | HTTP status code of the response.                                                                                                              |
| `result.successful`            | array   | Organizations for which a token was successfully generated.                                                                                    |
| `result.successful[].org_id`   | integer | Unique identifier of the organization.                                                                                                         |
| `result.successful[].org_name` | string  | Name of the organization.                                                                                                                      |
| `result.successful[].token`    | string  | Generated SCIM Bearer token. A 64-character hex string. Store this immediately — the token is returned only once and can't be retrieved again. |
| `result.failed`                | array   | Organizations for which token generation failed. Empty if all organizations succeeded.                                                         |
| `result.failed[].org_name`     | string  | Name of the organization that failed.                                                                                                          |
| `result.failed[].error_code`   | string  | Numeric code identifying the failure reason. See [Error & warning codes](#error--warning-codes).                                               |
| `result.failed[].error_name`   | string  | Symbolic name for the error.                                                                                                                   |
| `result.failed[].details`      | string  | Human-readable description of why the token generation failed.                                                                                 |

## Error codes

| Code                  | Error number | Description                                                                                                                   |
| --------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `ORG_NOT_FOUND`       | 2001         | The organization name was not found or is inactive. Check that `org_name` exactly matches the organization name in Capillary. |
| `ACTIVE_TOKEN_EXISTS` | 2002         | An active SCIM token already exists for this organization. Revoke the existing token before generating a new one.             |
| `DATABASE_ERROR`      | 2005         | A database error occurred while creating the token. Retry the request. HTTP 200 with failed entry.                            |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Create SCIM Token",
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
    "/launchpad/api/v1/orgs/scim/tokens": {
      "post": {
        "summary": "Create SCIM Token",
        "operationId": "create-scim-token",
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
                "type": "array",
                "items": {
                  "type": "object",
                  "required": [
                    "org_name"
                  ],
                  "properties": {
                    "org_name": {
                      "type": "string",
                      "description": "Name of the organization to generate a SCIM token for."
                    }
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
            "description": "Successful response",
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
                          {
                            "org_id": 50947,
                            "org_name": "Loyalty Lane",
                            "token": "7351f986b6c1ce4856883b5b1ca12b277eb3c483b5168613664505170eabac1d"
                          }
                        ],
                        "failed": []
                      }
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
              "code": "curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v1/orgs/scim/tokens' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6WyIyOTIyMjkiXSwib3JnSUQiOjAsImV4cCI6MTc3NzA5NDQwNCwiaWF0IjoxNzc3MDA4MDA0LCJpc3MiOiJjYXBpbGxhcnl0ZWNoLmNvbSIsImF1ZCI6ImNhcGlsbGFyeSxpbnRvdWNoLGFyeWEscmVvbixhcHBzIiwic291cmNlIjoiV0VCQVBQIiwicmVmZXJlbmNlSUQiOiI1MDc3OTk5NyJ9.2k37ovR4kLNOXXEYZT9XjY-J5v72ObaCvl4lPDbQlMg' \\\n--header 'X-CAP-API-AUTH-ORG-ID: 50947' \\\n--data '[\n    {\n      \"org_name\": \"Loyalty Lane\"\n    }\n  ]'",
              "language": "shell",
              "name": "Sample request"
            }
          ],
          "samples-languages": [
            "shell"
          ]
        },
        "description": "Generate a SCIM provisioning token for one or more organizations."
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