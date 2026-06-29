> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Product Colors

Retrieves the details of all product colors configured for the org.

### Response Parameters

| Parameter  | Datatype | Description                                                                                                                                                |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`     | string   | Name of the color.                                                                                                                                         |
| `pallette` | string   | Hex code of the color..                                                                                                                                    |
| `ou\_id`   | integer  | Indicates the ID of the OU. -1 indicates that the product belongs to a master org. This is applicable only if OU support for product inventory is enabled. |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "customer-v11",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v1.1",
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
    "/product/colors": {
      "get": {
        "summary": "Get Product Colors",
        "description": "Retrieves the details of all product colors configured for the org.",
        "operationId": "get-product-colors",
        "parameters": [
          {
            "name": "pallette",
            "in": "query",
            "description": "Retrieves the details of a specific color. Pass the hexa code of the color that you want to fetch.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limits the number of product colors to be retrieved.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Number of rows or results that you want omit from showing (from the top).",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "ou_code",
            "in": "query",
            "description": "Identifier code of the organisation.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "fetch_type",
            "in": "query",
            "description": "ALL - Fetches details of product associated with both master org and org unit. ORG-Fetches details of products associated with master ORG. SCOPE-Fetches details of products associated with an org unit.",
            "schema": {
              "type": "string",
              "enum": [
                "ALL",
                "ORG",
                "SCOPE"
              ]
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
                    "value": "{\n  \"response\":{\n    \"status\":{\n      \"success\":true,\n      \"code\":200,\n      \"message\":\"Success\"\n    },\n    \"product\":{\n      \"count\":20,\n      \"colors\":{\n        \"color\":[\n          {\n            \"pallette\":\"000000\",\n            \"name\":\"Black\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9178,\n              \"message\":\"Color retrieval successful\"\n            }\n          },\n          {\n            \"pallette\":\"000080\",\n            \"name\":\"Navy\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9178,\n              \"message\":\"Color retrieval successful\"\n            }\n          },\n          {\n            \"pallette\":\"00bfff\",\n            \"name\":\"DeepSkyBlue\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9178,\n              \"message\":\"Color retrieval successful\"\n            }\n          },\n        ]\n      }\n    }\n  }\n}"
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
              "code": "https://us/api.capillarytech.com/v1.1/product/colors?format=json",
              "name": "Sample request"
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