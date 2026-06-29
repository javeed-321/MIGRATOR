> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Create User

Allows you to create a new user and grant them access to the Capillary platform. The API creates the user account and automatically assigns them a role and access group based on the `orgRole` value passed in the request. Once the user is created, their role and access group setup is triggered automatically on the platform.

This API is primarily used by identity providers such as Microsoft Entra ID (Azure AD) to automate user onboarding. A Bearer token tied to a specific org is required, the org is derived from the token, so all users created through a token are onboarded under that org.

# Example request

```curl Sample request
curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v2/Users' \
--header 'Authorization: Bearer a7ba38a39712dff766414c43ef23dbf3c8d5138fd9db3ec3916b09a7a48da0c3' \
--header 'Content-Type: application/json' \
--data-raw '{
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "urn:ietf:params:scim:schemas:extension:capillary:2.0:User"
      ],
      "userName": "cap-demo@gmail.com",
      "externalId": "",
      "displayName": "Cap demo",
      "name": {
        "givenName": "Cap",
        "familyName": "demo"
      },
      "emails": [
        {
          "value": "cap-demo@gmail.com",
          "type": "work",
          "primary": true
        }
      ],
      "active": true,
      "phoneNumbers": [],
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {},
      "urn:ietf:params:scim:schemas:extension:capillary:2.0:User": {},
      "orgRole": "org_level"
    }'
```

## Prerequisites

* A valid SCIM bearer token for your organization, generated using the [Create SCIM Token](https://docs.capillarytech.com/reference/create-scim-token) API. Pass it in the request header as `Authorization: Bearer {token}`.

## Header information

| Header          | Required | Description                                                                                                                                                                                  |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Authorization` | Yes      | Bearer token generated when setting up SCIM for your organization. Pass the token value returned by the [Create SCIM Token](https://docs.capillarytech.com/reference/create-scim-token) API. |
| `Content-Type`  | Yes      | Must be `application/scim+json`.                                                                                                                                                             |
| `Accept`        | No       | Set to `application/json` to receive JSON responses.                                                                                                                                         |

# Body parameters

| Field                                                        | Type    | Required | Description                                                                                                                                                                                                                                           |
| ------------------------------------------------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schemas`                                                    | array   | Yes      | Tells the API what type of data is being sent. Must include `"urn:ietf:params:scim:schemas:core:2.0:User"`. If you are also sending enterprise or Capillary extension fields, add their respective URNs here as well.                                 |
| `userName`                                                   | string  | Yes      | The user's unique identifier, typically their email address. This is used as the login identity and as the email when setting up the user on the platform.                                                                                            |
| `name`                                                       | object  | Optional | The user's full name.                                                                                                                                                                                                                                 |
| `.givenName`                                                 | string  | Optional | The user's first name. Used as the first name when setting up the user on the platform.                                                                                                                                                               |
| `.familyName`                                                | string  | Optional | The user's last name. Used as the last name when setting up the user on the platform.                                                                                                                                                                 |
| `.middleName`                                                | string  | Optional | The user's middle name.                                                                                                                                                                                                                               |
| `displayName`                                                | string  | Optional | The name shown for the user on the platform. If not provided, it is automatically constructed from `givenName` and `familyName`. If both are absent, `userName` is used instead.                                                                      |
| `emails`                                                     | array   | Optional | The user's email addresses.                                                                                                                                                                                                                           |
| `.value`                                                     | string  | Optional | The email address.                                                                                                                                                                                                                                    |
| `.primary`                                                   | boolean | Optional | Set to `true` to mark this as the user's primary email address.                                                                                                                                                                                       |
| `phoneNumbers`                                               | array   | Optional | The user's phone numbers.                                                                                                                                                                                                                             |
| `.value`                                                     | string  | Optional | The phone number. A number with `type: "fax"` can be used to pass a role in `orgKey:role` format as an alternate way to assign access.                                                                                                                |
| `.type`                                                      | string  | Optional | The type of phone number. Supported values: `work`, `mobile`, `fax`, `home`, `other`.                                                                                                                                                                 |
| `.primary`                                                   | boolean | Optional | Set to `true` to mark this as the user's primary phone number.                                                                                                                                                                                        |
| `active`                                                     | boolean | Optional | Indicates whether the user account should be active upon creation. Defaults to `true`.                                                                                                                                                                |
| `externalId`                                                 | string  | Optional | The user's ID in the identity provider (e.g. Azure AD object ID). Used to identify and match the user during future sync operations. Must be unique per org.                                                                                          |
| `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User` | object  | Optional | Enterprise-level attributes for the user. Add this URN to `schemas` when sending these fields.                                                                                                                                                        |
| `..orgRole`                                                  | string  | Optional | The role to assign to the user in your Capillary organization. The accepted values are the role names configured in your organization, the same values used as `displayName` when [creating SCIM groups](). If not provided, defaults to `org_level`. |

# Example response

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User"
  ],
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
  "active": true
}
```

# Response parameters

| Field                                                        | Type           | Description                                                                                                                                                           |
| ------------------------------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schemas`                                                    | array          | List of schema URNs that describe the structure of the response. Indicates which core and extension schemas are present in the returned user object.                  |
| `id`                                                         | string         | Unique ID assigned to the user by Capillary upon creation. This ID is used to identify the user in all subsequent SCIM operations such as update or delete.           |
| `userName`                                                   | string         | The unique identifier of the created user, typically their email address. This is the same value passed in the request.                                               |
| `displayName`                                                | string         | The name displayed for the user on the platform. Returned as provided in the request, or auto-constructed from `givenName` and `familyName` if not explicitly passed. |
| `name.givenName`                                             | string         | The first name of the created user.                                                                                                                                   |
| `name.familyName`                                            | string         | The last name of the created user.                                                                                                                                    |
| `emails`                                                     | array          | The email addresses associated with the created user, as provided in the request.                                                                                     |
| `emails.value`                                               | string         | The email address of the user.                                                                                                                                        |
| `emails.primary`                                             | boolean        | Indicates whether this is the user's primary email address.                                                                                                           |
| `active`                                                     | boolean        | Indicates whether the created user account is active. Returns `true` unless explicitly set to `false` in the request.                                                 |
| `externalId`                                                 | string or null | The user's ID from the identity provider (e.g. Azure AD). Returned as `null` if not provided in the request.                                                          |
| `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User` | object         | Enterprise extension fields for the created user. Fields not provided in the request are returned as `null`.                                                          |
| `..orgRole`                                                  | string         | The role assigned to the user on the platform, as derived from the request. Returned as `null` if no valid role was provided.                                         |

# Error codes

| Code | Type  | Description                                                                  |
| ---- | ----- | ---------------------------------------------------------------------------- |
| 400  | Error | `userName` is missing or blank.                                              |
| 401  | Error | `Authorization` header is missing or does not start with `Bearer`.           |
| 403  | Error | Token is invalid or inactive.                                                |
| 409  | Error | A user with the same `userName` or `externalId` already exists for this org. |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "POST /launchpad/api/v2/Users",
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
    "/launchpad/api/v2/Users": {
      "post": {
        "summary": "Create User",
        "operationId": "postUsers",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "schemas": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "example": [
                      "urn:ietf:params:scim:schemas:core:2.0:User",
                      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
                      "urn:ietf:params:scim:schemas:extension:capillary:2.0:User"
                    ]
                  },
                  "userName": {
                    "type": "string",
                    "example": "scim-demo@gmail.com"
                  },
                  "externalId": {
                    "type": "string",
                    "example": ""
                  },
                  "displayName": {
                    "type": "string",
                    "example": "Scim demo"
                  },
                  "name": {
                    "type": "object",
                    "properties": {
                      "givenName": {
                        "type": "string",
                        "example": "Scim"
                      },
                      "familyName": {
                        "type": "string",
                        "example": "demo"
                      }
                    }
                  },
                  "emails": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "value": {
                          "type": "string",
                          "example": "scim-demo@gmail.com"
                        },
                        "type": {
                          "type": "string",
                          "example": "work"
                        },
                        "primary": {
                          "type": "boolean",
                          "example": true
                        }
                      }
                    }
                  },
                  "active": {
                    "type": "boolean",
                    "example": true
                  },
                  "phoneNumbers": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "example": []
                  },
                  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
                    "type": "object",
                    "example": {}
                  },
                  "urn:ietf:params:scim:schemas:extension:capillary:2.0:User": {
                    "type": "object",
                    "example": {}
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "examples": {
                  "Sample response": {
                    "summary": "Sample response",
                    "value": {
                      "schemas": [
                        "urn:ietf:params:scim:schemas:core:2.0:User"
                      ],
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
                      "active": true
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
              "code": "curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v2/Users' \\\n--header 'Authorization: Bearer a7ba38a39712dff766414c43ef23dbf3c8d5138fd9db3ec3916b09a7a48da0c3' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n      \"schemas\": [\n        \"urn:ietf:params:scim:schemas:core:2.0:User\",\n        \"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\",\n        \"urn:ietf:params:scim:schemas:extension:capillary:2.0:User\"\n      ],\n      \"userName\": \"cap-demo@gmail.com\",\n      \"externalId\": \"\",\n      \"displayName\": \"Cap demo\",\n      \"name\": {\n        \"givenName\": \"Cap\",\n        \"familyName\": \"demo\"\n      },\n      \"emails\": [\n        {\n          \"value\": \"cap-demo@gmail.com\",\n          \"type\": \"work\",\n          \"primary\": true\n        }\n      ],\n      \"active\": true,\n      \"phoneNumbers\": [],\n      \"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {},\n      \"urn:ietf:params:scim:schemas:extension:capillary:2.0:User\": {},\n      \"orgRole\": \"org_level\"\n    }'",
              "language": "shell",
              "name": "Sample request "
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