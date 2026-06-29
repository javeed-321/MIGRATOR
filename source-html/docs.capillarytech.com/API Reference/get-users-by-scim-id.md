> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get User by SCIM Id

Allows you to retrieve the details of a specific user in your organisation by their ID. You can use either the `numeric ID` or the `SCIM ID` to fetch the user. The API returns the user's name, email address, active status, and assigned role.

# Example request

```curl Sample request
curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v2/Users/50795539' \
--header 'Authorization: Bearer 7351f986b6c1ce4856883b5b1ca12b277eb3c483b5168613664505170eabac1d' \
--header 'Cookie: CS=e3f2bfa2cd6323fbddfa034e226084b8'
```

# Prerequisites

* A valid SCIM bearer token for your organization, generated using the [Create SCIM Token](https://docs.capillarytech.com/reference/create-scim-token) API. Pass it in the request header as `Authorization: Bearer {token}`.

# Path parameters

| Field | Type   | Required | Description                                                                                                                                                                                                          |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`  | string | Yes      | The ID of the user you want to retrieve. Accepts either a numeric ID (e.g. `50795539`) for users created directly in the system, or a SCIM ID (e.g. `scim-1777291410320`) for users onboarded through the SCIM flow. |

# Example response

```json
{
    "id": "scim-1780291539381",
    "userName": "cap-demo@gmail.com",
    "name": {
        "givenName": "Cap",
        "familyName": "demo"
    },
    "displayName": "Cap demo",
    "emails": [
        {
            "value": "cap-demo@gmail.com",
            "type": "work",
            "primary": true
        }
    ],
    "active": true,
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ]
}
```

# Response parameters

| Field             | Type    | Description                                                                                                                              |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `schemas`         | array   | Indicates the type of resource being returned. Always returns `"urn:ietf:params:scim:schemas:core:2.0:User"` for a single user response. |
| `id`              | string  | The unique ID of the retrieved user in the Capillary system. This is the same ID you passed in the request.                              |
| `userName`        | string  | The unique identifier of the retrieved user, typically their email address.                                                              |
| `displayName`     | string  | The name displayed for the retrieved user on the platform.                                                                               |
| `active`          | boolean | Indicates whether the retrieved user's account is currently active.                                                                      |
| `name.givenName`  | string  | The first name of the retrieved user.                                                                                                    |
| `name.familyName` | string  | The last name of the retrieved user.                                                                                                     |
| `emails`          | array   | The email addresses associated with the retrieved user.                                                                                  |
| `emails.value`    | string  | The email address of the retrieved user.                                                                                                 |
| `emails.type`     | string  | The type of email address of the retrieved user. Always returns `work`.                                                                  |
| `emails.primary`  | boolean | Indicates whether this is the retrieved user's primary email address. Always returns `true`.                                             |

# Error codes

| Code | Type  | Description                                                       |
| ---- | ----- | ----------------------------------------------------------------- |
| 401  | Error | `Authorization` header is missing or is not a valid Bearer token. |
| 403  | Error | Token is invalid or not associated with any org.                  |
| 404  | Error | No user was found for the given ID in the org.                    |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Get Users",
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
            "intouch.capillarytech.cn.com",
            "north-america.intouch.capillarytech.com"
          ],
          "default": "{Host}"
        }
      }
    }
  ],
  "paths": {
    "/launchpad/api/v2/Users/{scimId}": {
      "get": {
        "summary": "Get User by SCIM Id",
        "operationId": "getUsers",
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "Bearer a7ba38a39712dff766414c43ef23dbXXXXXXXX"
          },
          {
            "in": "path",
            "name": "scimId",
            "schema": {
              "type": "string"
            },
            "required": true
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
                      "id": "scim-1780291539381",
                      "userName": "cap-demo@gmail.com",
                      "name": {
                        "givenName": "Cap",
                        "familyName": "demo"
                      },
                      "displayName": "Cap demo",
                      "emails": [
                        {
                          "value": "cap-demo@gmail.com",
                          "type": "work",
                          "primary": true
                        }
                      ],
                      "active": true,
                      "schemas": [
                        "urn:ietf:params:scim:schemas:core:2.0:User"
                      ]
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
              "code": "curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v2/Users/scim-1780291539381' \\\n--header 'Authorization: Bearer a7ba38a39712dff766414c43ef23dbf3c8d5138fd9db3ec3916b09a7a48da0c3' \\\n--header 'Accept: application/json'",
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
  }
}
```