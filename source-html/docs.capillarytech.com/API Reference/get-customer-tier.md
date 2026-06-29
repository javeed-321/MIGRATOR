> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Tier

Retrieves tier details of a customer for a single program or across all programs of the org.

**This is a light API**.

### Important Note

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        When
      </th>

      <th style={{ textAlign: "left" }}>
        `fetchDataForAllPrograms`

        is true
      </th>

      <th style={{ textAlign: "left" }}>
        `fetchDataForAllPrograms`

        is false
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        programId is passed
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer across all programs
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer for that particular program.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        programId is not passed
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer across all programs
      </td>

      <td style={{ textAlign: "left" }}>
        You will still see tier details of the customer for the default program.
      </td>
    </tr>
  </tbody>
</Table>

# Response example

```Text 200 OK
{
    "entityId": 566881933,
    "entityType": "CUSTOMER",
    "programTiers": [
        {
            "programId": 973,
            "currentTierName": "Diamond",
            "currentTierSerialNumber": 8,
            "tierExpiryDate": "2125-03-26 23:59:59",
            "tierExpiryDateISO": "2125-03-26T23:59:59Z",
            "nextTierName": "",
            "nextTierSerialNumber": -1
        }
    ],
    "warnings": []
}
```

# Response Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        entityId
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        currentTierSerialNumber
      </td>

      <td>
        int
      </td>

      <td>
        Serial number of the current tier. For highest tier, this value is shown as `-1` meaning no next tier is available.
      </td>
    </tr>

    <tr>
      <td>
        nextTierSerialNumber
      </td>

      <td>
        int
      </td>

      <td>
        Serial number of the next tier. For highest tier, this value is shown as `-1` meaning no next tier is available.
      </td>
    </tr>

    <tr>
      <td>
        tierExpiryDate
      </td>

      <td>
        int
      </td>

      <td>
        Indicates the creation date and time of the target cycle in the server time zone in YYYY-MM-DD- format. **Note:** This field will be deprecated in the future and is being replaced by `tierExpiryDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        tierExpiryDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the creation date and time of the target cycle in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>
  </tbody>
</Table>

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
    "/customers/{userId|/tierDetails": {
      "get": {
        "summary": "Get Customer Tier",
        "description": "Retrieves tier details of a customer for a single program or across all programs of the org.\n\n**This is a light API**.",
        "operationId": "get-customer-tier",
        "parameters": [
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer whose tier details need to be fetched.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          },
          {
            "name": "programId",
            "in": "query",
            "description": "Unique ID of the loyalty program from which tier details need to retrieve. If not passed, it shows the points balance in the default program.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "entityType",
            "in": "query",
            "description": "Pass CUSTOMER to fetch tier details of the individual, FLEET to fetch details of the user group. Default value is CUSTOMER.",
            "schema": {
              "type": "string",
              "enum": [
                "CUSTOMER",
                "FLEET"
              ]
            }
          },
          {
            "name": "fetchDataForAllPrograms",
            "in": "query",
            "description": "Pass true to fetch tier details from all the available programs of the org.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n    \"entityId\": 374844123,\n    \"entityType\": \"CUSTOMER\",\n    \"programTiers\": [\n        {\n            \"programId\": 1933,\n            \"currentTierName\": \"C\",\n            \"currentTierSerialNumber\": 3,\n            \"tierExpiryDate\": \"2022-05-02 23:59:59\",\n            \"nextTierName\": \"\",\n            \"nextTierSerialNumber\": -1\n        }\n    ],\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entityId": {
                      "type": "integer",
                      "example": 374844123,
                      "default": 0
                    },
                    "entityType": {
                      "type": "string",
                      "example": "CUSTOMER"
                    },
                    "programTiers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "programId": {
                            "type": "integer",
                            "example": 1933,
                            "default": 0
                          },
                          "currentTierName": {
                            "type": "string",
                            "example": "C"
                          },
                          "currentTierSerialNumber": {
                            "type": "integer",
                            "example": 3,
                            "default": 0
                          },
                          "tierExpiryDate": {
                            "type": "string",
                            "example": "2022-05-02 23:59:59"
                          },
                          "nextTierName": {
                            "type": "string",
                            "example": ""
                          },
                          "nextTierSerialNumber": {
                            "type": "integer",
                            "example": -1,
                            "default": 0
                          }
                        }
                      }
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
        "deprecated": false
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