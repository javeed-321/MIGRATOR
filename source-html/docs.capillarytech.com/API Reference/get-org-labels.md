> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get All Customer Labels for the Org

Retrieves all customer labels defined for the organization

* Rate limiter controls the number of incoming and outgoing traffic of a network
* Authentication verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

# Prerequisites

* Basic Authentication
* Default access group

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/organization/labels' \
--header 'Authorization: Basic bWFkaHNkNzI3MjU2YQ==' \
--header 'Cookie: _cfuvid=XwzpaUfBGieUZIPxFTHjhpyczOFRtqe.GRxZ21hOgK0-1751018164500-0.0.1.1-604800000; _cfuvid=YLm_seet2_6zJoqLhp5EdoEbbcbrOUi9o4nqY2vgbdU-1758709063429-0.0.1.1-604800000'
```

## Resource Information

| Field          | Value                  |
| -------------- | ---------------------- |
| URI            | v2/organization/labels |
| HTTP Method    | GET                    |
| Authentication | Required               |
| Rate Limited   | No                     |
| Batch Support  | No                     |

## Header Requests

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Header Key
      </th>

      <th>
        Required
      </th>

      <th>
        Value Example
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Authorization`
      </td>

      <td>
        Yes
      </td>

      <td>
        `Bearer <your_access_token>`
      </td>

      <td>
        Authentication token (JWT/OAuth).
        **Note**: The org ID is retrieved automatically based on the

        <Anchor label="till ID" target="_blank" href="https://docs.capillarytech.com/docs/basic-authentication-api#/using-till-id-and-password">till ID</Anchor>

        associated with that organization.
      </td>
    </tr>

    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        No
      </td>

      <td>
        `application/json`
      </td>

      <td>
        Only needed for POST/PUT requests. Not required for GET.
      </td>
    </tr>

    <tr>
      <td>
        `Accept`
      </td>

      <td>
        No
      </td>

      <td>
        `application/json`
      </td>

      <td>
        Expected response format (defaults to JSON if omitted).
      </td>
    </tr>
  </tbody>
</Table>

## Response Fields

| Field         | Type    | Description                                                         |
| ------------- | ------- | ------------------------------------------------------------------- |
| data          | Array   | List of label objects.                                              |
| id            | Integer | Unique ID of the label.                                             |
| orgId         | Integer | ID of the organization.                                             |
| description   | String  | Description of the label.                                           |
| lastUpdatedBy | Integer | User ID of the last updater.                                        |
| name          | String  | Name of the label.                                                  |
| active        | Boolean | If `true` then label is active. If `false`then label is not active. |
| warnings      | Array   | Non-critical warnings (if any).                                     |
| errors        | Array   | Critical errors (if any).                                           |

```curl Response
{
    "data": [
        {
            "id": 20956,
            "orgId": 100737,
            "description": "High-value customers with premium status2",
            "lastUpdatedBy": 75155295,
            "name": "",
            "active": true
        },
        {
            "id": 20961,
            "orgId": 100737,
            "description": "121323232320",
            "lastUpdatedBy": 75155295,
            "name": "' OR '1'='1",
            "active": true
        },
        {
            "id": 20958,
            "orgId": 100737,
            "description": "Testing with wrong data type of name",
            "lastUpdatedBy": 75155295,
            "name": "1232121",
            "active": true
        },
        {
            "id": 20959,
            "orgId": 100737,
            "description": "12132323232",
            "lastUpdatedBy": 75155295,
            "name": "12321210000000000000000",
            "active": true
        },
        {
            "id": 20960,
            "orgId": 100737,
            "description": "121323232320",
            "lastUpdatedBy": 75155295,
            "name": "123212100000000000000000",
            "active": true
        },
        {
            "id": 21159,
            "orgId": 100737,
            "description": "Interested in gadgets and new technology",
            "lastUpdatedBy": 75161973,
            "name": "GadgetFreak",
            "active": true
        },
        {
            "id": 21152,
            "orgId": 100737,
            "description": "High-value customers with premium status",
            "lastUpdatedBy": 75155295,
            "name": "George",
            "active": true
        },
        {
            "id": 20941,
            "orgId": 100737,
            "description": "Recently acquired customers",
            "lastUpdatedBy": 75155295,
            "name": "New Customer",
            "active": true
        },
        {
            "id": 20944,
            "orgId": 100737,
            "description": "Recently acquired customers",
            "lastUpdatedBy": 75155295,
            "name": "Old Customer",
            "active": true
        },
        {
            "id": 20949,
            "orgId": 100737,
            "description": "Recently acquired customers1",
            "lastUpdatedBy": 75155295,
            "name": "Old1 Customer1",
            "active": true
        },
        {
            "id": 20952,
            "orgId": 100737,
            "description": "Recently acquired customers1 ^%$#%$#@^$#$%#^$#&##@#$@!@^#$%&*())))&^%$#@%^&*^%$#%^&*&^%$#%^TYUFDGHJFDRE%TYGHFDRETYGCFDSEW$%^TYGHFRE%$^&*UYIHJGYU&*(IOU*()IPOKLJHUY&^*UIJHKUIY&^%$ERDT%$E#WQEASRW#$@QWASD",
            "lastUpdatedBy": 75155295,
            "name": "Old2 Customer2",
            "active": true
        },
        {
            "id": 21158,
            "orgId": 100737,
            "description": "Customers whose purchase value is more than $4000",
            "lastUpdatedBy": 75161973,
            "name": "Premium",
            "active": true
        },
        {
            "id": 20942,
            "orgId": 100737,
            "description": "High-value customers with premium status",
            "lastUpdatedBy": 75155295,
            "name": "Premium Customer",
            "active": true
        },
        {
            "id": 17243,
            "orgId": 100737,
            "description": "real label",
            "lastUpdatedBy": 75152820,
            "name": "real",
            "active": true
        },
        {
            "id": 20957,
            "orgId": 100737,
            "description": "",
            "lastUpdatedBy": 75155295,
            "name": "Testing_UAT_@_123",
            "active": true
        },
        {
            "id": 20953,
            "orgId": 100737,
            "description": "High-value customers with premium status2",
            "lastUpdatedBy": 75155295,
            "name": "UAT-Testing",
            "active": true
        },
        {
            "id": 20955,
            "orgId": 100737,
            "lastUpdatedBy": 75155295,
            "name": "UAT-Testing1",
            "active": true
        },
        {
            "id": 20945,
            "orgId": 100737,
            "description": "High-value customers with premium status",
            "lastUpdatedBy": 75155295,
            "name": "Valuable Customer",
            "active": true
        },
        {
            "id": 20951,
            "orgId": 100737,
            "description": "High-value customers with premium status1 ^%$#%$#@^$#$%#^$#&##@#$@!@^#$%&*())))&^%$#@%^&*^%$#%^&*&^%$#%^TYUFDGHJFDRE%TYGHFDRETYGCFDSEW$%^TYGHFRE%$^&*UYIHJGYU&*(IOU*()IPOKLJHUY&^*UIJHKUIY&^%$ERDT%$E#WQEASRW#$@QWASD",
            "lastUpdatedBy": 75155295,
            "name": "Valuable Customer ^%$#%$#@^$#$%#^$#&##@#$@!@^#$%&*())))&^%$#@%^&*^%$#%^&*&^%$#%^TYUFDGHJFDRE%TYGHFDR",
            "active": true
        },
        {
            "id": 20948,
            "orgId": 100737,
            "description": "High-value customers with premium status1",
            "lastUpdatedBy": 75155295,
            "name": "Valuable Customer shvdshjdvshdvhjsdvjasajshjahadjgciuwyeguhbcwjhbjdshsbcjhwhewbehcbwjdhbckwjhekjhcbw",
            "active": true
        }
    ],
    "warnings": [],
    "errors": []
}
```

# Error code

| Error code | Description                          |
| :--------- | :----------------------------------- |
| 33002      | No labels found for the organization |

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
    "/organization/labels": {
      "get": {
        "summary": "Get Org Labels",
        "description": "Retrieves all customers labels created for that specific org.",
        "operationId": "get-org-labels",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n    \"data\": [\n        {\n            \"id\": 2,\n            \"orgId\": 1779,\n            \"description\": \"Loves new trends and collections in fashion\",\n            \"lastUpdatedBy\": 15000449,\n            \"name\": \"Fashion\",\n            \"active\": true\n        },\n        {\n            \"id\": 8,\n            \"orgId\": 1779,\n            \"description\": \"High loyal customer with spending more than $13000\",\n            \"lastUpdatedBy\": 15000449,\n            \"name\": \"Premium\",\n            \"active\": true\n        },\n        {\n            \"id\": 1,\n            \"orgId\": 1779,\n            \"description\": \"Loves new gadgets and technology\",\n            \"lastUpdatedBy\": 15000449,\n            \"name\": \"GadgetFreak\",\n            \"active\": true\n        },\n        {\n            \"id\": 3,\n            \"orgId\": 1779,\n            \"description\": \"汉语\",\n            \"lastUpdatedBy\": 15000449,\n            \"name\": \"汉语\",\n            \"active\": true\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 2,
                            "default": 0
                          },
                          "orgId": {
                            "type": "integer",
                            "example": 1779,
                            "default": 0
                          },
                          "description": {
                            "type": "string",
                            "example": "Loves new trends and collections in fashion"
                          },
                          "lastUpdatedBy": {
                            "type": "integer",
                            "example": 15000449,
                            "default": 0
                          },
                          "name": {
                            "type": "string",
                            "example": "Fashion"
                          },
                          "active": {
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/organization/labels' \\\n--header 'Authorization: Basic bWFkaHkNzI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=XwzpaUfBGieUZIPxFTHjhpyczOFRtqe.GRxZ21hOgK0-1751018164500-0.0.1.1-604800000; _cfuvid=YLm_seet2_6zJoqLhp5EdoEbbcbrOUi9o4nqY2vgbdU-1758709063429-0.0.1.1-604800000'",
              "name": "Sample cURL"
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