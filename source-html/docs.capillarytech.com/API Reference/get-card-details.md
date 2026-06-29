> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Card Details

Retrieves information about a specific card using the card number

The Get Card Details API retrieves information about a specific card using its unique card number. It returns details such as card identifiers, status, series, customer information, and any configured custom or extended fields. This API is read-only and does not update card information.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

## Resource information

| HTTP method           | GET   |
| :-------------------- | :---- |
| Authentication        | Basic |
| Pagination supported? | NO    |
| Rate limit            | YES   |
| Batch support         | NO    |

## Example request

```json Sample request
curl --location 'https://eu.api.capillarytech.com/v2/card?format=json&number=from1m1n1000000000100too' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=Ke4hAFMfCGK4gDMjnzYbiJhhGLrie234r1j56zvpTfc-1756899809255-0.0.1.1-604800000' \
--data ''
```

## Query parameters

| Field  | Type   | Required | Description                      |
| :----- | :----- | :------- | :------------------------------- |
| number | string | Yes      | Card number to retrieve details. |

## Example response

```json Sample response
{
    "cardId": 904249,
    "issuedDate": "2025-06-13T08:19:33Z",
    "createdDate": "2025-06-13",
    "expiryDays": 1000,
    "seriesName": "card series create new",
    "customerId": 564590100,
    "maxActiveCards": 5,
    "entityCode": "rutuja_capillary",
    "cardExternalId": "externalId44",
    "customFields": {},
    "type": "DIGITAL",
    "cardNumber": "from1m1n1000000000100too",
    "seriesId": 169,
    "seriesCode": "Test094",
    "orgId": 100737,
    "entityId": 75155373,
    "statusInfo": {
        "reason": "",
        "createdBy": 904249,
        "actions": [],
        "autoUpdateTime": "2025-06-13",
        "createdOn": "2025-06-13T08:19:33Z",
        "entityId": 904249,
        "id": 27976955,
        "isActive": true,
        "labelId": 494,
        "label": "ACTIVE",
        "status": "ACTIVE"
    },
    "id": 904249,
    "activeAndDigital": true,
    "transactionNotAllowed": true,
    "expiryDate": "2028-03-09T00:00:00Z",
    "warnings": []
}
```

# Response Parameters

| Parameter             | Type    | Description                                                 |
| :-------------------- | :------ | :---------------------------------------------------------- |
| cardId                | int     | Unique identifier for the card.                             |
| issuedDate            | string  | Date and time when the card was issued.                     |
| createdDate           | string  | Date when the card was created.                             |
| expiryDays            | int     | Number of days after issuance when the card will expire.    |
| seriesName            | string  | Name of the card series.                                    |
| customerId            | int     | Unique identifier of the customer associated with the card. |
| maxActiveCards        | int     | Maximum number of active cards allowed.                     |
| entityCode            | string  | Code of the entity associated with the card.                |
| cardExternalId        | string  | External identifier for the card.                           |
| customFields          | object  | Custom field data as key-value pairs.                       |
| type                  | string  | Type of card (e.g., `DIGITAL`).                             |
| cardNumber            | string  | Card number assigned.                                       |
| seriesId              | int     | Unique identifier of the card series.                       |
| seriesCode            | string  | Code of the card series.                                    |
| orgId                 | int     | Organization identifier.                                    |
| entityId              | int     | Entity identifier linked to the card.                       |
| statusInfo            | object  | Status details of the card.                                 |
| — reason              | string  | Reason for the current status (if any).                     |
| — createdBy           | int     | Identifier of the user who created this status entry.       |
| — actions             | array   | List of actions related to status updates.                  |
| — autoUpdateTime      | string  | Date when status was automatically updated.                 |
| — createdOn           | string  | Date and time when the status was created.                  |
| — entityId            | int     | Entity identifier related to this status.                   |
| — id                  | int     | Unique identifier for the status entry.                     |
| — isActive            | boolean | `true` if active; `false` if inactive.                      |
| — labelId             | int     | Identifier for the status label.                            |
| — label               | string  | Label description of the status (e.g., `ACTIVE`).           |
| — status              | string  | Status code (e.g., `ACTIVE`).                               |
| id                    | int     | Unique identifier for the card object.                      |
| activeAndDigital      | boolean | Indicates if the card is both active and digital.           |
| transactionNotAllowed | boolean | Indicates if transactions are disallowed on this card.      |
| expiryDate            | string  | Expiry date and time of the card (ISO 8601 format).         |
| warnings              | array   | List of warnings, if any.                                   |

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
    "/card": {
      "get": {
        "summary": "Get Card Details",
        "description": "Lets you update details of existing cards in bulk. You can update details such as card status label, and custom/extended field values.",
        "operationId": "get-card-details",
        "parameters": [
          {
            "name": "number",
            "in": "query",
            "description": "Unique card number to fetch.",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"cardId\": 204802,\n    \"issuedDate\": \"2021-12-08T17:53:01+05:30\",\n    \"createdDate\": \"2021-12-08\",\n    \"expiryDays\": 0,\n    \"seriesName\": \"14477448572684visa001\",\n    \"customerId\": 374395406,\n    \"maxActiveCards\": 10,\n    \"entityCode\": \"paw1\",\n    \"extendedFields\": {\n        \"vehicle_make\": \"ford\"\n    },\n    \"customFields\": {\n        \"city\": \"Bangalore\",\n        \"address\": \"103, Richmond street \",\n        \"pincode\": \"\"\n    },\n    \"type\": \"DIGITAL\",\n    \"cardNumber\": \"test123112121\",\n    \"seriesId\": 298,\n    \"seriesCode\": \"14477448572684\",\n    \"orgId\": 50740,\n    \"entityId\": 50036987,\n    \"statusInfo\": {\n        \"reason\": \"\",\n        \"createdBy\": 204802,\n        \"actions\": [],\n        \"autoUpdateTime\": \"2021-12-08\",\n        \"createdOn\": \"2021-12-08T17:53:01+05:30\",\n        \"entityId\": 204802,\n        \"id\": 213779,\n        \"isActive\": true,\n        \"labelId\": 208,\n        \"label\": \"ACTIVE\",\n        \"status\": \"ACTIVE\"\n    },\n    \"id\": 204802,\n    \"transactionNotAllowed\": true,\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "cardId": {
                      "type": "integer",
                      "example": 204802,
                      "default": 0
                    },
                    "issuedDate": {
                      "type": "string",
                      "example": "2021-12-08T17:53:01+05:30"
                    },
                    "createdDate": {
                      "type": "string",
                      "example": "2021-12-08"
                    },
                    "expiryDays": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "seriesName": {
                      "type": "string",
                      "example": "14477448572684visa001"
                    },
                    "customerId": {
                      "type": "integer",
                      "example": 374395406,
                      "default": 0
                    },
                    "maxActiveCards": {
                      "type": "integer",
                      "example": 10,
                      "default": 0
                    },
                    "entityCode": {
                      "type": "string",
                      "example": "paw1"
                    },
                    "extendedFields": {
                      "type": "object",
                      "properties": {
                        "vehicle_make": {
                          "type": "string",
                          "example": "ford"
                        }
                      }
                    },
                    "customFields": {
                      "type": "object",
                      "properties": {
                        "city": {
                          "type": "string",
                          "example": "Bangalore"
                        },
                        "address": {
                          "type": "string",
                          "example": "103, Richmond street "
                        },
                        "pincode": {
                          "type": "string",
                          "example": ""
                        }
                      }
                    },
                    "type": {
                      "type": "string",
                      "example": "DIGITAL"
                    },
                    "cardNumber": {
                      "type": "string",
                      "example": "test123112121"
                    },
                    "seriesId": {
                      "type": "integer",
                      "example": 298,
                      "default": 0
                    },
                    "seriesCode": {
                      "type": "string",
                      "example": "14477448572684"
                    },
                    "orgId": {
                      "type": "integer",
                      "example": 50740,
                      "default": 0
                    },
                    "entityId": {
                      "type": "integer",
                      "example": 50036987,
                      "default": 0
                    },
                    "statusInfo": {
                      "type": "object",
                      "properties": {
                        "reason": {
                          "type": "string",
                          "example": ""
                        },
                        "createdBy": {
                          "type": "integer",
                          "example": 204802,
                          "default": 0
                        },
                        "actions": {
                          "type": "array"
                        },
                        "autoUpdateTime": {
                          "type": "string",
                          "example": "2021-12-08"
                        },
                        "createdOn": {
                          "type": "string",
                          "example": "2021-12-08T17:53:01+05:30"
                        },
                        "entityId": {
                          "type": "integer",
                          "example": 204802,
                          "default": 0
                        },
                        "id": {
                          "type": "integer",
                          "example": 213779,
                          "default": 0
                        },
                        "isActive": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "labelId": {
                          "type": "integer",
                          "example": 208,
                          "default": 0
                        },
                        "label": {
                          "type": "string",
                          "example": "ACTIVE"
                        },
                        "status": {
                          "type": "string",
                          "example": "ACTIVE"
                        }
                      }
                    },
                    "id": {
                      "type": "integer",
                      "example": 204802,
                      "default": 0
                    },
                    "transactionNotAllowed": {
                      "type": "boolean",
                      "example": true,
                      "default": true
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
              "code": "https://us.api.capillarytech.com/v2/card?number=test123112121",
              "name": "Sample Request URL"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/card?format=json&number=from1m1n1000000000100too' \\\n--header 'Authorization: Basic ",
              "language": "json",
              "name": "Sample request"
            }
          ],
          "samples-languages": [
            "curl",
            "json"
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