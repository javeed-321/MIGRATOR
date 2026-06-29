> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get User by Filter name

Allows you to search for specific users in your organisation by filtering on user attributes such as `userName`, `email`, `displayName`, `externalId`, or `active` status. This is primarily used by identity providers such as Microsoft Entra ID (Azure AD) to check whether a specific user already exists in Capillary before creating or updating them.

# Example request

```curl Sample request
curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v2/Users?filter=userName%20eq%20%22cap-demo%40gmail.com%22' \
--header 'Authorization: Bearer a7ba38a39712dff766414c43ef23dbf3c8d5138fd9db3ec3916b09a7a48da0c3' \
--header 'Accept: application/json'
```

# Prerequisites

* A valid SCIM bearer token for your organization, generated using the [Create SCIM Token](https://docs.capillarytech.com/reference/create-scim-token) API. Pass it in the request header as `Authorization: Bearer {token}`.

# Resource information

|                    |     |
| ------------------ | --- |
| Pagination support | No  |
| Filter support     | Yes |

# Query parameters

| Field    | Type   | Required | Description                                                                                                                                                                       |
| -------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filter` | string | Yes      | The filter expression used to search for users. Must follow the format `attribute eq "value"`. Supported attributes: `userName`, `externalId`, `displayName`, `active`, `emails`. |

## Supported filter expressions

| Filter           | Example                                     |
| ---------------- | ------------------------------------------- |
| By username      | `filter=userName eq "john.doe@example.com"` |
| By external ID   | `filter=externalId eq "azure-object-id"`    |
| By display name  | `filter=displayName eq "John Doe"`          |
| By active status | `filter=active eq true`                     |
| By email         | `filter=emails eq "john.doe@example.com"`   |

***

# Example response

```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "totalResults": 1,
    "startIndex": 1,
    "itemsPerPage": 1,
    "Resources": [
        {
            "id": "50823272",
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
    ]
}
```

# Response parameters

| Field                       | Type    | Description                                                                                                                                           |
| --------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schemas`                   | array   | Indicates the type of response being returned. Always returns `"urn:ietf:params:scim:api:messages:2.0:ListResponse"`.                                 |
| `totalResults`              | number  | The total number of users that matched your filter. Returns `0` if no user was found matching the filter criteria.                                    |
| `startIndex`                | number  | The starting index of the returned results. Always `1` as pagination is not supported.                                                                |
| `itemsPerPage`              | number  | The number of matched users returned in this response. Same as `totalResults`.                                                                        |
| `Resources`                 | array   | The list of users that matched your filter. Returns an empty array if no users match the filter criteria.                                             |
| `Resources.id`              | string  | The unique ID assigned to the matched user in the Capillary system. Used to identify the user in subsequent SCIM operations such as update or delete. |
| `Resources.userName`        | string  | The unique identifier of the matched user, typically their email address.                                                                             |
| `Resources.displayName`     | string  | The name displayed for the matched user on the platform.                                                                                              |
| `Resources.active`          | boolean | Indicates whether the matched user's account is currently active.                                                                                     |
| `Resources.name.givenName`  | string  | The first name of the matched user.                                                                                                                   |
| `Resources.name.familyName` | string  | The last name of the matched user.                                                                                                                    |
| `Resources.emails`          | array   | The email addresses associated with the matched user.                                                                                                 |
| `Resources.emails.value`    | string  | The email address of the matched user.                                                                                                                |
| `Resources.emails.type`     | string  | The type of email address of the matched user. Always returns `work`.                                                                                 |
| `Resources.emails.primary`  | boolean | Indicates whether this is the matched user's primary email address. Always returns `true`.                                                            |

# Error & warning codes

| Code | Type  | Description                                                       |
| ---- | ----- | ----------------------------------------------------------------- |
| 401  | Error | `Authorization` header is missing or is not a valid Bearer token. |
| 403  | Error | Token is invalid or not associated with any org.                  |

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
    "/launchpad/api/v2/Users": {
      "get": {
        "summary": "Get User by Filter name",
        "operationId": "getUsers",
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "userName eq \"scim-demo@gmail.com\""
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
                      "schemas": [
                        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
                      ],
                      "totalResults": 1,
                      "startIndex": 1,
                      "itemsPerPage": 1,
                      "Resources": [
                        {
                          "id": "50823272",
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
              "code": "curl --location 'https://nightly.intouch.capillarytech.com/launchpad/api/v2/Users?filter=userName%20eq%20%22cap-demo%40gmail.com%22' \\\n--header 'Authorization: Bearer a7ba38a39712dff766414c43ef23dbf3c8d5138fd9db3ec3916b09a7a48da0c3' \\\n--header 'Accept: application/json'",
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