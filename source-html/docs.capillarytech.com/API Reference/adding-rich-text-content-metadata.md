> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Adding Rich Text Content field for Reward

You can use the languageSpecificInfo object in “Create Reward API”  to include rich text content metadata in a reward. The `content` field can contain HTML-formatted text, and the `isEnabled` field indicates whether the rich text content is active.

# Prerequisites

* [ ] Create Rich Text Content Metadata using [Create Rich Text Content Meta Data Against Reward](https://docs.capillarytech.com/reference/create-rich-content-meta)
* [ ] Ensure that the rich text content is active by setting the isEnabled field to true. If it is not set, you can update it through [Update Rich Text Content Metadata Against Reward.](https://docs.capillarytech.com/reference/update-rich-content)

## Use Case

### Requirement

Suppose a brand wants to include reward-related terms and conditions within the reward itself and these details should support plain HTML, enabling the use of headings, lists, line breaks, and other basic tags to ensure the content is well-structured, readable, and visually consistent across platforms.

### Solution

To achieve this you can create terms and condition rich text using [Create Rich Text](https://docs.capillarytech.com/reference/create-rich-content-meta) and link the same during the [Creation of Reward](https://docs.capillarytech.com/reference/post-create-reward).

### **Adding Rich Text Content to Reward**

Use the `languageSpecificInfo` section of the [reward creation API](https://docs.capillarytech.com/reference/post-create-reward) to map rich text content to specific languages.

```Text With single Language Block
{
    "name": "Golden2",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "type": "VOUCHER",
    "brandId": "61",
    "enabled": true,
    "intouchPoints": 500,
    "categories": [229],
    "redemptionType": "INTOUCH_REWARD",
    "intouchSeriesId": "301233",
    "geography": [],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "jogoldnamechange check",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "terms&conditions": {
                    "content": "RC2_desc",
                    "isEnabled": true
                }
            }
        }
    ],
    "isactive": true
}{
    "name": "Golden3",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "type": "VOUCHER",
    "brandId": "61",
    "enabled": true,
    "intouchPoints": 500,
    "categories": [229],
    "redemptionType": "INTOUCH_REWARD",
    "intouchSeriesId": "301233",
    "geography": [],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "jogoldnamechange check",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "terms&conditions-2": {
                    "content": "RC2_desc",
                    "isEnabled": true
                }
            }
        }
    ],
    "isactive": true
}
```
```json With Multiple Language Block
{
    "name": "rewardname",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "type": "VOUCHER",
    "brandId": "61",
    "enabled": true,
    "intouchPoints": 500,
    "categories": [229],
    "redemptionType": "INTOUCH_REWARD",
    "intouchSeriesId": "301233",
    "geography": [],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "rewardname",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "termsAndConditionsenglish": {
                    "content": "<h1>Terms and Conditions</h1><p>These are the terms and conditions...</p>",
                    "isEnabled": true
                }
            }
        },
        {
            "languageCode": "fr",
            "name": "rewardname",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "termsAndConditionsfrench": {
                    "content": "<h1>Conditions Générales</h1><p>Voici les conditions générales...</p>",
                    "isEnabled": true
                }
            }
        }
    ]
}
```

# Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        `languageSpecificInfo.richContentRO`\*
      </td>

      <td>
        Object
      </td>

      <td>
        The rich content object for the reward.
      </td>
    </tr>

    <tr>
      <td>
        `richContentRO.content`\*
      </td>

      <td>
        String
      </td>

      <td>
        The HTML-formatted rich text content.
      </td>
    </tr>

    <tr>
      <td>
        `richContentRO.isEnabled`\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the rich text content is enabled for the specific reward. Supported Values: `true` or `false`
      </td>
    </tr>

    <tr>
      <td>
        `defaultValue`
      </td>

      <td>
        String
      </td>

      <td>
        The default value is shown when rich text content is unavailable for a specific reward.  

        * **Required**: Only if `isMandatory` is set to `true`.
        * **Optional**: If `isMandatory` is false.
        * **Max Length**: 50,000 characters.
      </td>
    </tr>
  </tbody>
</Table>

<br />

## Error Handling

| HTTP Status Code                                           | Resolution                                                                   |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 400 - Invalid request parameters.                          | Ensure all required parameters are included in the request body.             |
| 400 - value is not one of declared Enum                    | Ensure provided Enum field matches one of the supported values.              |
| 400 - `defaultValue` is required when isMandatory is true. | Ensure `defaultValue` is not set to null, when `isMandatory` is set to true. |
| 500 - Internal server error.                               | Retry the request after a short delay. The issue may be temporary.           |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "organization",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}.api.capillarytech.com/v2/organization",
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
        "type": "oauth2",
        "flows": {}
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/api_gateway/rewards/core/v1/reward/create": {
      "post": {
        "summary": "Adding Rich Text Content field for Reward",
        "description": "",
        "operationId": "adding-rich-text-content-metadata",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"status\": {\n        \"success\": true,\n        \"code\": 6002,\n        \"message\": \"Reward created successfully\"\n    },\n    \"reward\": {\n        \"id\": 343497\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "object",
                      "properties": {
                        "success": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "code": {
                          "type": "integer",
                          "example": 6002,
                          "default": 0
                        },
                        "message": {
                          "type": "string",
                          "example": "Reward created successfully"
                        }
                      }
                    },
                    "reward": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 343497,
                          "default": 0
                        }
                      }
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
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/create' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: */*' \\\n--header 'Authorization: Basic YXV0b3N0b3JlMS50aWxsMS0xNjgwMTY5MjIxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \\\n--header 'X-CAP-API-AUTH-ORG-ID: 50339' \\\n--data '{\n    \"name\": \"gold\",\n    \"description\": \"testreward1\",\n    \"startTime\": \"2025-09-26T20:00:00Z\",\n    \"endTime\": \"2026-10-31T11:59:30Z\",\n    \"type\": \"VOUCHER\",\n    \"brandId\": \"61\",\n    \"enabled\": true,\n    \"intouchPoints\": 500,\n    \"categories\": [229],\n    \"redemptionType\": \"INTOUCH_REWARD\",\n    \"intouchSeriesId\": \"301233\",\n    \"geography\": [],\n    \"languageSpecificInfo\": [\n        {\n            \"languageCode\": \"en\",\n            \"name\": \"jogoldnamechange check\",\n            \"description\": \"testreward1\",\n            \"enabled\": true,\n            \"cardSeries\": 123,\n            \"richContentRO\": {\n                \"RCtestgeorge3\": {\n                    \"content\": \"RC2_desc\",\n                    \"isEnabled\": true\n                }\n            }\n        }\n    ],\n    \"isactive\": true\n}{\n    \"name\": \"gold\",\n    \"description\": \"testreward1\",\n    \"startTime\": \"2025-09-26T20:00:00Z\",\n    \"endTime\": \"2026-10-31T11:59:30Z\",\n    \"type\": \"VOUCHER\",\n    \"brandId\": \"61\",\n    \"enabled\": true,\n    \"intouchPoints\": 500,\n    \"categories\": [229],\n    \"redemptionType\": \"INTOUCH_REWARD\",\n    \"intouchSeriesId\": \"301233\",\n    \"geography\": [],\n    \"languageSpecificInfo\": [\n        {\n            \"languageCode\": \"en\",\n            \"name\": \"jogoldnamechange check\",\n            \"description\": \"testreward1\",\n            \"enabled\": true,\n            \"cardSeries\": 123,\n            \"richContentRO\": {\n                \"RCtestgeorge3\": {\n                    \"content\": \"RC2_desc\",\n                    \"isEnabled\": true\n                }\n            }\n        }\n    ],\n    \"isactive\": true\n}'"
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
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```