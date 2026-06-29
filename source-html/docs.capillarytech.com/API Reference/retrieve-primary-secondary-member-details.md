> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve user group member details

Retrieves details of all members in a user group, including their roles, identifiers, permissions, and points contributed. Optionally returns card details, customer status information, and pagination.

Use this API to retrieve all members of a user group. The response includes each member's role (`PRIMARY` or `SECONDARY`), identifiers, permissions, and points contributed to the group.

This API supports the following:

* View all members of a group using the group's internal ID.
* View card details for each member using `includeCardDetails=true`.
* View card status information (active/suspended status, reason, timestamps) using `includeStatusDetails=true`.
* Paginate through large groups using `paginationDetails=true` with `limit` and `offset`.
* Sort results or filter by member join date using `fromDate` and `toDate`.

The response also includes each member's email, mobile number, and list of registered identifiers.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

> 📘 Current membership records only
>
> The API returns only the current membership status for each member. If a member leaves and re-enrolls, only the latest active membership record is shown. Historical membership records (such as a previous EXITED status) are not included in the response.

# Example request

```curl
curl -L 'https://eu.api.capillarytech.com/v2/userGroup2/members?source=INSTORE&identifierName=id&identifierValue=3948622' \
-H 'Authorization: Basic {base64-encoded-credentials}'
```
```curl With card and status details
curl -L 'https://eu.api.capillarytech.com/v2/userGroup2/members?source=INSTORE&identifierName=id&identifierValue=3948622&includeCardDetails=true&includeStatusDetails=true&paginationDetails=true&sortOrder=DESC&limit=20' \
-H 'Authorization: Basic {base64-encoded-credentials}'
```

# Query parameters

| Parameter              | Type     | Required | Description                                                                                                                                                                                                      |
| ---------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `source`               | Enum     | Yes      | Source in which the group identifier is registered. Supported values: `INSTORE`, `MARTJACK`, `WECHAT`, `FACEBOOK`, `WEB_ENGAGE`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`. Case-sensitive. |
| `identifierName`       | Enum     | Yes      | Identifier type used to look up the group. Supported value: `id` (internal group ID).                                                                                                                            |
| `identifierValue`      | String   | Yes      | Value of the identifier specified in `identifierName`. For example, if `identifierName` is `id`, pass the numeric group ID.                                                                                      |
| `includeCardDetails`   | Boolean  | Optional | Pass `true` to include card details for each member in the response. Defaults to `false`.                                                                                                                        |
| `includeStatusDetails` | Boolean  | Optional | Pass `true` to include customer status details for each member's cards in the response. Defaults to `false`.                                                                                                     |
| `paginationDetails`    | Boolean  | Optional | Pass `true` to include a `pagination` object in the response. Defaults to `false`.                                                                                                                               |
| `limit`                | Integer  | Optional | Maximum number of members to return per page. Used with `paginationDetails=true`.                                                                                                                                |
| `offset`               | Integer  | Optional | Starting index for paginated results. Used with `paginationDetails=true`.                                                                                                                                        |
| `sortBy`               | String   | Optional | Field to sort results by. Pass `IS_PRIMARY` to list the primary member first.                                                                                                                                    |
| `sortOrder`            | Enum     | Optional | Sort direction. Supported values: `ASC`, `DESC`. Defaults to `DESC`.                                                                                                                                             |
| `fromDate`             | DateTime | Optional | Start of the date range to filter members by join date. Format: `YYYY-MM-DD HH:MM:SS`.                                                                                                                           |
| `toDate`               | DateTime | Optional | End of the date range to filter members by join date. Format: `YYYY-MM-DD HH:MM:SS`.                                                                                                                             |

# Response parameters

| Field                      | Type    | Description                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.pagination`              | Object  | Pagination details. Present only when `paginationDetails=true`.                                                                                                                                                                                                                                                  |
| `..limit`                  | Integer | Maximum number of records returned per page.                                                                                                                                                                                                                                                                     |
| `..offset`                 | Integer | Starting index of the current page.                                                                                                                                                                                                                                                                              |
| `..sortBy`                 | String  | Field used to sort results.                                                                                                                                                                                                                                                                                      |
| `..sortOrder`              | String  | Sort direction: `ASC` or `DESC`.                                                                                                                                                                                                                                                                                 |
| `..total`                  | Integer | Total number of members in the group.                                                                                                                                                                                                                                                                            |
| `.data`                    | Array   | List of member objects in the user group.                                                                                                                                                                                                                                                                        |
| `..fleetUserId`            | Integer | Unique identifier of the member (customer ID).                                                                                                                                                                                                                                                                   |
| `..firstName`              | String  | First name of the member.                                                                                                                                                                                                                                                                                        |
| `..lastName`               | String  | Last name of the member.                                                                                                                                                                                                                                                                                         |
| `..joinedOn`               | String  | Date the member joined the group, in `YYYY-MM-DD` format.                                                                                                                                                                                                                                                        |
| `..permissions`            | String  | Comma-separated list of permissions assigned to the member. Possible values: `allow_points_redemption`, `allow_points_transfer`, `block_points_redemption`, `block_points_transfer`.                                                                                                                             |
| `..pointsContributed`      | Number  | Total points contributed by the member to the group.                                                                                                                                                                                                                                                             |
| `..email`                  | String  | Email address of the member.                                                                                                                                                                                                                                                                                     |
| `..mobile`                 | String  | Mobile number of the member, including country code.                                                                                                                                                                                                                                                             |
| `..role`                   | String  | Role of the member in the group. Possible values: `PRIMARY`, `SECONDARY`.                                                                                                                                                                                                                                        |
| `..roleCode`               | String  | Short code for the member's role as configured in the hierarchy definition.                                                                                                                                                                                                                                      |
| `..identifiers`            | Array   | List of registered identifiers for the member.                                                                                                                                                                                                                                                                   |
| `...type`                  | String  | Identifier type. Possible values: `mobile`, `email`, `externalId`, `cardnumber`.                                                                                                                                                                                                                                 |
| `...value`                 | String  | Value of the identifier.                                                                                                                                                                                                                                                                                         |
| `..cards`                  | Array   | Card objects owned by the member. Present only when `includeCardDetails=true`.                                                                                                                                                                                                                                   |
| `...cardId`                | Integer | Unique identifier for the card.                                                                                                                                                                                                                                                                                  |
| `...issuedDate`            | String  | Date and time the card was issued, in ISO 8601 format, returned in the server time zone.<br /><br />EU server example: `2022-05-05T17:45:58+05:30` → 05 May 2022, 17:45:58 (IST)<br /><br />Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request. |
| `...createdDate`           | String  | Date the card record was created, in `YYYY-MM-DD` format.                                                                                                                                                                                                                                                        |
| `...expiryDays`            | Integer | Number of days from issuance until card expiry.                                                                                                                                                                                                                                                                  |
| `...expiryDate`            | String  | Date and time the card expires, in ISO 8601 format, returned in the server time zone.                                                                                                                                                                                                                            |
| `...seriesName`            | String  | Name of the card series the card belongs to.                                                                                                                                                                                                                                                                     |
| `...seriesId`              | Integer | Unique identifier of the card series.                                                                                                                                                                                                                                                                            |
| `...seriesCode`            | String  | Code of the card series.                                                                                                                                                                                                                                                                                         |
| `...cardNumber`            | String  | Unique card number.                                                                                                                                                                                                                                                                                              |
| `...type`                  | String  | Type of card. Possible values: `DIGITAL`, `PHYSICAL`.                                                                                                                                                                                                                                                            |
| `...customerId`            | Integer | Customer ID of the member the card is issued to.                                                                                                                                                                                                                                                                 |
| `...maxActiveCards`        | Integer | Maximum number of active cards allowed for this series.                                                                                                                                                                                                                                                          |
| `...orgId`                 | Integer | Unique identifier of the organisation.                                                                                                                                                                                                                                                                           |
| `...entityId`              | Integer | Unique identifier of the entity associated with the card.                                                                                                                                                                                                                                                        |
| `...customFields`          | Object  | Key-value pairs of custom field data associated with the card.                                                                                                                                                                                                                                                   |
| `...transactionNotAllowed` | Boolean | Indicates whether transactions are blocked on this card.                                                                                                                                                                                                                                                         |
| `...statusInfo`            | Object  | Status details of the card. Present only when `includeStatusDetails=true`.                                                                                                                                                                                                                                       |
| `....id`                   | Integer | Unique identifier of the card status record.                                                                                                                                                                                                                                                                     |
| `....isActive`             | Boolean | Indicates whether the current card status is active.                                                                                                                                                                                                                                                             |
| `....label`                | String  | User-defined status label (e.g., `ACTIVE`, `SUSPENDED`).                                                                                                                                                                                                                                                         |
| `....status`               | String  | System-defined status code. Possible values: `ACTIVE`, `SUSPENDED`, `DELETED`, `EXPIRED`, `NOT_ISSUED`.                                                                                                                                                                                                          |
| `....labelId`              | Integer | Unique identifier of the status label.                                                                                                                                                                                                                                                                           |
| `....reason`               | String  | Reason for the current card status.                                                                                                                                                                                                                                                                              |
| `....createdBy`            | Integer | ID of the entity that created the card status.                                                                                                                                                                                                                                                                   |
| `....createdOn`            | String  | Date and time the card status was created, in ISO 8601 format.                                                                                                                                                                                                                                                   |
| `....autoUpdateTime`       | String  | Date the card status was last auto-updated, in `YYYY-MM-DD` format.                                                                                                                                                                                                                                              |
| `....entityId`             | Integer | Card ID associated with this status record.                                                                                                                                                                                                                                                                      |
| `....actions`              | Array   | List of actions associated with this card status.                                                                                                                                                                                                                                                                |
| `..inActive`               | Boolean | Indicates whether the member is active in the group. `true` means active; `false` means inactive.                                                                                                                                                                                                                |
| `..primaryMember`          | Boolean | Indicates whether the member is the primary member. `true` for primary; `false` for secondary.                                                                                                                                                                                                                   |
| `.warnings`                | Array   | List of warning messages, if any.                                                                                                                                                                                                                                                                                |
| `.errors`                  | Array   | List of error messages, if any.                                                                                                                                                                                                                                                                                  |

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
    "/userGroup2/members": {
      "get": {
        "summary": "Retrieve user group members",
        "description": "Retrieves details of all members in a user group, including their roles, identifiers, permissions, and points contributed. Optionally returns card details, customer status information, and pagination.",
        "operationId": "retrieve-primary-secondary-member-details",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the group identifier is registered. Required. Supported values: INSTORE, MARTJACK, WECHAT, FACEBOOK, WEB_ENGAGE, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL. Case-sensitive.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier type used to look up the group. Required. Supported value: id (internal group ID).",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the identifier specified in identifierName. Required. For example, if identifierName is id, pass the numeric group ID.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "includeCardDetails",
            "in": "query",
            "description": "Pass true to include card details for each member in the response. Defaults to false.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "includeStatusDetails",
            "in": "query",
            "description": "Pass true to include customer status details for each member's cards in the response. Defaults to false.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "paginationDetails",
            "in": "query",
            "description": "Pass true to include a pagination object in the response. Defaults to false.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Maximum number of members to return per page. Used with paginationDetails=true.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Starting index for paginated results. Used with paginationDetails=true.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "sortBy",
            "in": "query",
            "description": "Field to sort results by. Pass IS_PRIMARY to list the primary member first.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sortOrder",
            "in": "query",
            "description": "Sort direction. Supported values: ASC, DESC. Defaults to DESC.",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "DESC"
            }
          },
          {
            "name": "fromDate",
            "in": "query",
            "description": "Start of the date range to filter members by join date. Format: YYYY-MM-DD HH:MM:SS.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "toDate",
            "in": "query",
            "description": "End of the date range to filter members by join date. Format: YYYY-MM-DD HH:MM:SS.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Basic response": {
                    "value": "{\n    \"data\": [\n        {\n            \"fleetUserId\": 568077466,\n            \"firstName\": \"Father\",\n            \"lastName\": \"\",\n            \"joinedOn\": \"2026-02-12\",\n            \"permissions\": \"allow_points_redemption,allow_points_transfer\",\n            \"pointsContributed\": 0.0,\n            \"email\": \"father@gmail.com\",\n            \"mobile\": \"919988123456\",\n            \"role\": \"PRIMARY\",\n            \"identifiers\": [\n                {\n                    \"type\": \"email\",\n                    \"value\": \"father@gmail.com\"\n                },\n                {\n                    \"type\": \"externalId\",\n                    \"value\": \"father\"\n                },\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"919988123456\"\n                }\n            ],\n            \"inActive\": true,\n            \"primaryMember\": true\n        },\n        {\n            \"fleetUserId\": 568077476,\n            \"firstName\": \"Mother\",\n            \"lastName\": \"\",\n            \"joinedOn\": \"2026-02-12\",\n            \"permissions\": \"allow_points_redemption,block_points_transfer\",\n            \"pointsContributed\": 0.0,\n            \"email\": \"mother@gmail.com\",\n            \"mobile\": \"919988123457\",\n            \"role\": \"SECONDARY\",\n            \"identifiers\": [\n                {\n                    \"type\": \"externalId\",\n                    \"value\": \"mother\"\n                },\n                {\n                    \"type\": \"email\",\n                    \"value\": \"mother@gmail.com\"\n                },\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"919988123457\"\n                }\n            ],\n            \"inActive\": true,\n            \"primaryMember\": false\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "With card and status details": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 20,\n        \"offset\": 0,\n        \"sortBy\": \"IS_PRIMARY\",\n        \"sortOrder\": \"DESC\",\n        \"total\": 2\n    },\n    \"data\": [\n        {\n            \"fleetUserId\": 421977926,\n            \"firstName\": \"Tom\",\n            \"lastName\": \"Hill\",\n            \"joinedOn\": \"2022-05-05\",\n            \"permissions\": \"allow_points_redemption,allow_points_transfer\",\n            \"pointsContributed\": 0.0,\n            \"mobile\": \"915484360670\",\n            \"role\": \"PRIMARY\",\n            \"roleCode\": \"FA\",\n            \"identifiers\": [\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"915484360670\"\n                }\n            ],\n            \"cards\": [\n                {\n                    \"cardId\": 1970588,\n                    \"issuedDate\": \"2022-05-05T17:45:58+05:30\",\n                    \"createdDate\": \"2022-05-05\",\n                    \"expiryDays\": 10000,\n                    \"seriesName\": \"ONREGSUN\",\n                    \"customerId\": 421977926,\n                    \"maxActiveCards\": 100,\n                    \"customFields\": {},\n                    \"type\": \"DIGITAL\",\n                    \"cardNumber\": \"rego0000000000204800series\",\n                    \"seriesId\": 172,\n                    \"seriesCode\": \"ONREGSUN\",\n                    \"orgId\": 1442,\n                    \"entityId\": 15089282,\n                    \"statusInfo\": {\n                        \"id\": 1992627,\n                        \"isActive\": true,\n                        \"label\": \"ACTIVE\",\n                        \"status\": \"ACTIVE\",\n                        \"labelId\": 157,\n                        \"reason\": \"\",\n                        \"createdBy\": 15089282,\n                        \"createdOn\": \"2022-05-05T17:45:58+05:30\",\n                        \"autoUpdateTime\": \"2022-05-05\",\n                        \"entityId\": 1970588,\n                        \"actions\": []\n                    },\n                    \"transactionNotAllowed\": true,\n                    \"expiryDate\": \"2049-09-20T00:00:00+05:30\"\n                }\n            ],\n            \"inActive\": true,\n            \"primaryMember\": true\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "pagination": {
                      "type": "object",
                      "properties": {
                        "limit": {
                          "type": "integer",
                          "example": 20,
                          "default": 0
                        },
                        "offset": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "sortBy": {
                          "type": "string",
                          "example": "IS_PRIMARY"
                        },
                        "sortOrder": {
                          "type": "string",
                          "example": "DESC"
                        },
                        "total": {
                          "type": "integer",
                          "example": 6,
                          "default": 0
                        }
                      }
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "fleetUserId": {
                            "type": "integer",
                            "example": 568077466,
                            "default": 0
                          },
                          "firstName": {
                            "type": "string",
                            "example": "Father"
                          },
                          "lastName": {
                            "type": "string",
                            "example": ""
                          },
                          "joinedOn": {
                            "type": "string",
                            "example": "2026-02-12"
                          },
                          "permissions": {
                            "type": "string",
                            "example": "allow_points_redemption,allow_points_transfer"
                          },
                          "pointsContributed": {
                            "type": "number",
                            "example": 0,
                            "default": 0
                          },
                          "email": {
                            "type": "string",
                            "example": "father@gmail.com"
                          },
                          "mobile": {
                            "type": "string",
                            "example": "919988123456"
                          },
                          "role": {
                            "type": "string",
                            "example": "PRIMARY"
                          },
                          "roleCode": {
                            "type": "string",
                            "example": "FA"
                          },
                          "identifiers": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "example": "email"
                                },
                                "value": {
                                  "type": "string",
                                  "example": "father@gmail.com"
                                }
                              }
                            }
                          },
                          "cards": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "cardId": {
                                  "type": "integer",
                                  "example": 1970588,
                                  "default": 0
                                },
                                "issuedDate": {
                                  "type": "string",
                                  "example": "2022-05-05T17:45:58+05:30"
                                },
                                "createdDate": {
                                  "type": "string",
                                  "example": "2022-05-05"
                                },
                                "expiryDays": {
                                  "type": "integer",
                                  "example": 10000,
                                  "default": 0
                                },
                                "expiryDate": {
                                  "type": "string",
                                  "example": "2049-09-20T00:00:00+05:30"
                                },
                                "seriesName": {
                                  "type": "string",
                                  "example": "ONREGSUN"
                                },
                                "seriesId": {
                                  "type": "integer",
                                  "example": 172,
                                  "default": 0
                                },
                                "seriesCode": {
                                  "type": "string",
                                  "example": "ONREGSUN"
                                },
                                "cardNumber": {
                                  "type": "string",
                                  "example": "rego0000000000204800series"
                                },
                                "type": {
                                  "type": "string",
                                  "example": "DIGITAL"
                                },
                                "customerId": {
                                  "type": "integer",
                                  "example": 421977926,
                                  "default": 0
                                },
                                "maxActiveCards": {
                                  "type": "integer",
                                  "example": 100,
                                  "default": 0
                                },
                                "orgId": {
                                  "type": "integer",
                                  "example": 1442,
                                  "default": 0
                                },
                                "entityId": {
                                  "type": "integer",
                                  "example": 15089282,
                                  "default": 0
                                },
                                "customFields": {
                                  "type": "object"
                                },
                                "transactionNotAllowed": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "statusInfo": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "integer",
                                      "example": 1992627,
                                      "default": 0
                                    },
                                    "isActive": {
                                      "type": "boolean",
                                      "example": true,
                                      "default": true
                                    },
                                    "label": {
                                      "type": "string",
                                      "example": "ACTIVE"
                                    },
                                    "status": {
                                      "type": "string",
                                      "example": "ACTIVE"
                                    },
                                    "labelId": {
                                      "type": "integer",
                                      "example": 157,
                                      "default": 0
                                    },
                                    "reason": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "createdBy": {
                                      "type": "integer",
                                      "example": 15089282,
                                      "default": 0
                                    },
                                    "createdOn": {
                                      "type": "string",
                                      "example": "2022-05-05T17:45:58+05:30"
                                    },
                                    "autoUpdateTime": {
                                      "type": "string",
                                      "example": "2022-05-05"
                                    },
                                    "entityId": {
                                      "type": "integer",
                                      "example": 1970588,
                                      "default": 0
                                    },
                                    "actions": {
                                      "type": "array"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "inActive": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "primaryMember": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
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
              "name": "Basic",
              "code": "curl -L 'https://eu.api.capillarytech.com/v2/userGroup2/members?source=INSTORE&identifierName=id&identifierValue=3948622' \\\n-H 'Authorization: Basic {base64-encoded-credentials}'"
            },
            {
              "language": "curl",
              "name": "With card and status details",
              "code": "curl -L 'https://eu.api.capillarytech.com/v2/userGroup2/members?source=INSTORE&identifierName=id&identifierValue=3948622&includeCardDetails=true&includeStatusDetails=true&paginationDetails=true&sortOrder=DESC&limit=20' \\\n-H 'Authorization: Basic {base64-encoded-credentials}'"
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