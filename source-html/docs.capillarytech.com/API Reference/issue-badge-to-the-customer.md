> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Issue badge (earn)

This API allows you to issue badges to the customer (the customer earns the badge).

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).
> * A badge can be issued via MemberCare without any owners or claim.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/badges/customer/earn' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bWFkaHV2YQ==' \
--header 'Cookie: _cfuvid=G55QZbUnuqcGlxvEVrDIeQAXNoTvA58qzY6ItL2dY2A-1768823991734-0.0.1.1-604800000' \
--data '
{
  "badgeMetaId": "692e7e739b3ca00e4bbf7c06",
  "earnEventDate": "2025-12-02T11:30:00.192Z",
  "customerId": "23423",
  "requestId": 23432,
  "triggeredBy": {
   "ownerType": "Loyalty",
    "referenceId": "123"
  }
}
'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                                       |
| :------------ | :------------------------------------ |
| URI           | /api\_gateway/v1/badges/customer/earn |
| HTTP method   | POST                                  |
| Pagination    | No                                    |
| Batch support | NA                                    |

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        badgeMetaId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier ("id") generated during the creation of the badge.
      </td>
    </tr>

    <tr>
      <td>
        customerId*
      </td>

      <td>
        Number
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        requestId*
      </td>

      <td>
        String
      </td>

      <td>
        Enter a unique identifier to identify the request.
      </td>
    </tr>

    <tr>
      <td>
        earnEventDate
      </td>

      <td>
        Date
      </td>

      <td>
        Defines the date on which the customer performed the activity. This date can be set up to 24 hours in the future from the current time, which allows badges to be earned based on when the customer's action occurred, not just when the system processes it.

        * The earn event date has to be between the badge start date and end date if it is a direct earn type of badge.
        * The earn event date has to be set between the badge issual start date and end date if it is an issue & earn type of badge.
        * You can enter a past date to issue a badge against an older transaction.  
          Note: This field will be deprecated in the future and is being replaced by `earnEventDateISO`
      </td>
    </tr>

    <tr>
      <td>
        earnEventDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Defines the date on which the customer performed the activity in ISO 8601 format, including the region offset.

        For example: The activity was performed at 11:20:00 on March 15, 2026, in India.

        Format for the request parameter: 2026-03-15T11:20:00+05:30

        Notes:

        * This date can be set up to 24 hours in the future from the current time.
        * For direct earn badges, the date must be between the badge start and end date.
        * For issue & earn badges, the date must be between the badge issual start and end date.
        * A past date can be entered to issue a badge against an older transaction.
      </td>
    </tr>

    <tr>
      <td>
        triggeredBy
      </td>

      <td>
        Object
      </td>

      <td>
        The object containing information about what triggered the action.
      </td>
    </tr>

    <tr>
      <td>
        ownerType*
      </td>

      <td>
        Enum
      </td>

      <td>
        The module for which the badge is being issued. Supported values: Loyalty, Loyalty_Promotion, Referral_Campaigns, Journeys, Audience_Campaigns, Rewards_Catalog, Goodwill_Module, Milestones, Historical_Import
      </td>
    </tr>

    <tr>
      <td>
        referenceId*
      </td>

      <td>
        String
      </td>

      <td>
        Enter a unique identifier to identify the owner (ownerType). The referenceId passed here should be the same as the referenceId in the

        [claim badge API](https://docs.capillarytech.com/reference/claim-badge).
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json Sample response
{
    "data": {
        "badgeMetaId": "692e7e739b3ca00e4bbf7c06",
        "customerId": 23423,
        "earnedBadgeId": "696e2234eba5957293853195",
        "expiresOn": 1770034996.715319000,
        "expiresOnISO": "2026-02-02T12:23:16Z",
        "requestId": "23432",
        "issuedId": null
    },
    "errors": [],
    "warnings": []
}
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        badgeMetaId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the badge metadata.
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        Number
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        earnedBadgeId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the earned badge.
      </td>
    </tr>

    <tr>
      <td>
        expiresOn
      </td>

      <td>
        Number
      </td>

      <td>
        The time indicating when the badge expires, in epoch milliseconds timestamp format.
      </td>
    </tr>

    <tr>
      <td>
        expiresOnISO
      </td>

      <td>
        String
      </td>

      <td>
        The time indicating when the badge expires in ISO 8601 format, returned in the server time zone.

        EU server example 2025-09-10T15:00:00Z → 10 September 2025, 15:00:00 (UTC)

        India server example 2025-09-10T15:00:00+05:30 → 10 September 2025, 15:00:00 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request
      </td>
    </tr>

    <tr>
      <td>
        requestId
      </td>

      <td>
        String
      </td>

      <td>
        A unique identifier to identify the request.
      </td>
    </tr>

    <tr>
      <td>
        issuedId
      </td>

      <td>
        String
      </td>

      <td>
        A Unique identifier representing the specific issuance instance of the badge.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array
      </td>

      <td>
        Array to list any errors.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        Array to list any warnings.
      </td>
    </tr>
  </tbody>
</Table>

# API-specific error codes

| Error code | Description                                     |
| :--------- | :---------------------------------------------- |
| 809        | Request with the same requestId is not allowed. |
| 811        | Badge issue is mandatory before earn.           |
| 810        | Badge needs to be claimed first.                |
| 815        | Badge is not live.                              |
| 750        | Earn event date should not be in future.        |
| 812        | `CustomerId` information is missing.            |
| 804        | `RequestId` information is missing.             |
| 716        | Owner type information is missing.              |

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
    "/api_gateway/v1/badges/customer/earn": {
      "post": {
        "summary": "Issue badge (earn)",
        "description": "",
        "operationId": "issue-badge-to-the-customer",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "customerId",
                  "ownerType",
                  "referenceId"
                ],
                "properties": {
                  "badgeMetaId": {
                    "type": "string"
                  },
                  "customerId": {
                    "type": "string"
                  },
                  "requestId": {
                    "type": "string"
                  },
                  "triggeredBy": {
                    "type": "object",
                    "properties": {}
                  },
                  "ownerType": {
                    "type": "string",
                    "description": "Type of owner."
                  },
                  "referenceId": {
                    "type": "string",
                    "description": "A unique identifier associated with the owner."
                  },
                  "earnEventDate": {
                    "type": "string",
                    "description": "The date on which the customer performed the activity. Earn event date. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. has to be between the badge start date and end date if it is a direct earn type of badge and it has to be between the badge issual start date and end date if it is an issue & earn type of badge.",
                    "format": "date-time"
                  }
                }
              },
              "examples": {
                "request": {
                  "value": {
                    "badgeMetaId": "692e7e739b3ca00e4bbf7c06",
                    "earnEventDate": "2025-12-02T11:30:00.192Z",
                    "customerId": "23423",
                    "requestId": 23432,
                    "triggeredBy": {
                      "ownerType": "Loyalty",
                      "referenceId": "123"
                    }
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
                    "value": {
                      "data": {
                        "badgeMetaId": "692e7e739b3ca00e4bbf7c06",
                        "customerId": 23423,
                        "earnedBadgeId": "696e2234eba5957293853195",
                        "expiresOn": 1770034996.715319,
                        "expiresOnISO": "2026-02-02T12:23:16Z",
                        "requestId": "23432",
                        "issuedId": null
                      },
                      "errors": [],
                      "warnings": []
                    },
                    "summary": "Sample response"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "badgeMetaId": {
                          "type": "string",
                          "example": "66276dc68fe258516a88ff8e"
                        },
                        "customerId": {
                          "type": "integer",
                          "example": 62090013,
                          "default": 0
                        },
                        "earnedBadgeId": {
                          "type": "string",
                          "example": "66277aa28fe258516a88fff3"
                        },
                        "expiresOn": {
                          "type": "number",
                          "example": 1715072930.64038,
                          "default": 0
                        },
                        "requestId": {}
                      }
                    },
                    "errors": {
                      "type": "array"
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
                    "value": "{\n    \"data\": null,\n    \"errors\": [\n        {\n            \"code\": 809,\n            \"message\": \"Request with same requestId is not allowed\",\n            \"reference\": null\n        }\n    ],\n    \"warnings\": null\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {},
                    "errors": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "code": {
                            "type": "integer",
                            "example": 809,
                            "default": 0
                          },
                          "message": {
                            "type": "string",
                            "example": "Request with same requestId is not allowed"
                          },
                          "reference": {}
                        }
                      }
                    },
                    "warnings": {}
                  }
                }
              }
            }
          },
          "409": {
            "description": "409",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"data\": null,\n    \"errors\": [\n        {\n            \"code\": 811,\n            \"message\": \"Badge issue is mandatory before earn\",\n            \"reference\": null\n        }\n    ],\n    \"warnings\": null\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {},
                    "errors": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "code": {
                            "type": "integer",
                            "example": 811,
                            "default": 0
                          },
                          "message": {
                            "type": "string",
                            "example": "Badge issue is mandatory before earn"
                          },
                          "reference": {}
                        }
                      }
                    },
                    "warnings": {}
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/badges/customer/earn' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFkaHV2YQ==' \\\n--header 'Cookie: _cfuvid=G55QZbUnuqcGlxvEVrDIeQAXNoTvA58qzY6ItL2dY2A-1768823991734-0.0.1.1-604800000' \\\n--data '\n{\n  \"badgeMetaId\": \"692e7e739b3ca00e4bbf7c06\",\n  \"earnEventDate\": \"2025-12-02T11:30:00.192Z\",\n  \"customerId\": \"23423\",\n  \"requestId\": 23432,\n  \"triggeredBy\": {\n   \"ownerType\": \"Loyalty\",\n    \"referenceId\": \"123\"\n  }\n}\n'",
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