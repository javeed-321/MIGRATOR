> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Product Sizes

Retrieves the list of all configured product sizes.

## Response Parameters

| Parameter               | Datatype | Description                                                                                                                                                |
| ----------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                  | string   | Name of the size                                                                                                                                           |
| `label`                 | string   | Label name of the size.                                                                                                                                    |
| `canonical_name`        | string   | "M"                                                                                                                                                        |
| `description`           | string   | Description of the size as in the database.                                                                                                                |
| `size_family`           | string   | Family size to which the size belongs to.                                                                                                                  |
| `type`                  | string   | Type associated to the size.                                                                                                                               |
| `parent_canonical_name` | string   | CNAME or reference name provided to a specific size.                                                                                                       |
| `ou_id`                 | integer  | Indicates the ID of the OU. -1 indicates that the product belongs to a master org. This is applicable only if OU support for product inventory is enabled. |

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
    "/product/sizes": {
      "get": {
        "summary": "Get Product Sizes",
        "description": "Retrieves the list of all configured product sizes.",
        "operationId": "get-product-sizes",
        "parameters": [
          {
            "name": "include_id",
            "in": "query",
            "description": "Retrieves category ids of each size fetched.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "name",
            "in": "query",
            "description": "Retrieves details of specific size details based on the size name passed.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "canonical_name",
            "in": "query",
            "description": "Retrieves the details of a specific size based on the CName. Canonical names are reference name provided to a specific size.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "size_family",
            "in": "query",
            "description": "Retrieve sizes of a specified size family. Supports only predefined values.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Retrieve sizes of a specific type.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "Retrieve the details of a specific size based on the size id passed",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "parent_name",
            "in": "query",
            "description": "Fetch categories by name of the parent product.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limits the number of results to be retrieved.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Entries to be ignored from the top.",
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
                    "value": "{\n  \"response\":{\n    \"status\":{\n      \"success\":true,\n      \"code\":200,\n      \"message\":\"Success\"\n    },\n    \"product\":{\n      \"count\":7,\n      \"sizes\":{\n        \"size\":[\n          {\n            \"name\":\"L\",\n            \"label\":\"large\",\n            \"canonical_name\":\"Large\",\n            \"description\":\"\",\n            \"size_family\":\"US\",\n            \"type\":\"Mens Shirt\",\n            \"parent_canonical_name\":\"40\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9130,\n              \"message\":\"Size retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"M\",\n            \"label\":\"medium\",\n            \"canonical_name\":\"Medium\",\n            \"description\":\"\",\n            \"size_family\":\"US\",\n            \"type\":\"Mens Shirt\",\n            \"parent_canonical_name\":\"38\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9130,\n              \"message\":\"Size retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"S\",\n            \"label\":\"small\",\n            \"canonical_name\":\"Small\",\n            \"description\":\"\",\n            \"size_family\":\"US\",\n            \"type\":\"Mens Shirt\",\n            \"parent_canonical_name\":\"37\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9130,\n              \"message\":\"Size retrieval successful\"\n            }\n          },\n\n        ]\n      }\n    }\n  }\n}"
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
              "code": "https://us.api.capillarytech.com/v1.1/product/sizes?format=json",
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