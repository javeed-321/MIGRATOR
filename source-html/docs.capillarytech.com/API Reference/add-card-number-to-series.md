> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Card Number to a Card Series

Lets you add a new card number to a card series and provide card details.

Once the card is added, you can issue it to a customer using customers /changeIdentifier API.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/card' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Basic <BASE64_CREDENTIALS>' \
  --header 'Cookie: <COOKIE>' \
  --data '{
    "seriesId": 224,
    "cardNumber": "ghost0000800001180930",
    "cardExternalId": "CardExternal6993",
    "statusLabel": "NOT_ISSUED",
    "statusInfo": {
        "reason": "Card is generated but not issued"
    }
}'
```

# Prerequisites

| Requirement            | Details                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Authentication details | `Authorization` header with Basic Auth (Base64-encoded `username:password`)                                                |
| Access permission      | WRITE access to the **Card** resource. See [Access Group configuration](https://docs.capillarytech.com/docs/access-group). |

# Resource information

|                    |    |
| ------------------ | -- |
| Pagination support | No |
| Batch support      | No |

# Request body parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **seriesId**
      </td>

      <td>
        Number
      </td>

      <td>
        Yes
      </td>

      <td>
        Unique identifier of the card series to which the card number will be added. Must correspond to an existing series in the system.
      </td>
    </tr>

    <tr>
      <td>
        **cardNumber**
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Unique card number to be added to the series. Must not already exist in the system.
      </td>
    </tr>

    <tr>
      <td>
        **statusLabel**
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Status of the card at the time of creation. Must be a valid label configured for the `CARD` entity type.

        Supported values: `NOT_ISSUED`, `ACTIVE`, `SUSPENDED`, `ISSUED`, `DELETED`, `EXPIRED`

        Default value:`NOT_ISSUED`
      </td>
    </tr>

    <tr>
      <td>
        **cardExternalId**
      </td>

      <td>
        String
      </td>

      <td>
        No
      </td>

      <td>
        External identifier for the card. Must be unique if provided.
      </td>
    </tr>

    <tr>
      <td>
        **statusInfo**
      </td>

      <td>
        Object
      </td>

      <td>
        No
      </td>

      <td>
        Additional metadata associated with the card status.
      </td>
    </tr>

    <tr>
      <td>
        **statusInfo.reason**
      </td>

      <td>
        String
      </td>

      <td>
        No
      </td>

      <td>
        Description of the reason for the current card status. Example: `"Card is generated but not issued"`.
      </td>
    </tr>

    <tr>
      <td>
        **seriesCode**
      </td>

      <td>
        String
      </td>

      <td>
        No
      </td>

      <td>
        Unique code of the card series. Can be used as an alternative to `seriesId` if `seriesId` is not provided.
      </td>
    </tr>

    <tr>
      <td>
        **customerId**
      </td>

      <td>
        Number
      </td>

      <td>
        No
      </td>

      <td>
        Unique identifier of the customer to associate with the card at the time of creation.
      </td>
    </tr>

    <tr>
      <td>
        **extendedFields**
      </td>

      <td>
        Object
      </td>

      <td>
        No
      </td>

      <td>
        Key-value pairs representing extended field values for the card. Keys must match the configured extended fields for the organization.
      </td>
    </tr>

    <tr>
      <td>
        **customFields**
      </td>

      <td>
        Object
      </td>

      <td>
        No
      </td>

      <td>
        Key-value pairs representing custom field values for the card.
      </td>
    </tr>

    <tr>
      <td>
        **mappedEntity**
      </td>

      <td>
        Object
      </td>

      <td>
        No
      </td>

      <td>
        Mapping details to associate the card with an entity such as a store, location, or till.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json
{
    "entity": 966091,
    "warnings": []
}
```

# Response parameters

| Field    | Type   | Description                                                                       |
| -------- | ------ | --------------------------------------------------------------------------------- |
| entity   | Number | The unique ID of the newly created card.                                          |
| warnings | Array  | List of warning objects generated during the request. Empty array if no warnings. |

# Error codes

| Code | Type  | Description                                                                                                      |
| ---- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| 400  | Error | Invalid request. Check that all required fields (`seriesId`, `cardNumber`, `statusLabel`) are present and valid. |
| 401  | Error | Unauthorised. Invalid or missing `Authorization` header.                                                         |
| 403  | Error | Forbidden. The authenticated user does not have WRITE access to the Card resource.                               |
| 404  | Error | Resource not found. The specified `seriesId` or `seriesCode` does not exist.                                     |
| 409  | Error | Conflict. The provided `cardNumber` or `cardExternalId` already exists in the system.                            |

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
      "post": {
        "summary": "Add Card Number to a Card Series",
        "description": "",
        "operationId": "add-card-number-to-a-card-series",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string"
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
                  "Result": {
                    "value": {
                      "entity": 966091,
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "integer",
                      "example": 72453,
                      "default": 0
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/card' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFkaHVjU2YQ==' \\\n--header 'Cookie: _cfuvid=fYe2STiYHsd7lsYtujNvgTE_IWiTqZbsg0ozNHqwNOI-1774254546895-0.0.1.1-604800000' \\\n--data '{\n    \"seriesId\": 224,\n    \"cardNumber\": \"ghost0000800001180930\",\n    \"cardExternalId\": \"CardExternal6993\",\n    \"statusLabel\": \"NOT_ISSUED\",\n    \"statusInfo\": {\n        \"reason\": \"Card is generated but not issued\"\n    }   \n}'",
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```