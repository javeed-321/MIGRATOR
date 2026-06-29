> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Product Meta Sizes

Retrieves details of all product meta-sizes.

# Query parameters

| Parameter         | Description                                                                                                                                                                                               |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `include\_id`     | Retrieves category ids of eachmeta  size fetched.                                                                                                                                                         |
| `name`            | Retrieves details of specific size details based on the meta size name passed.                                                                                                                            |
| `canonical\_name` | Retrieves the details of a specific meta-size based on the CName. Canonical names are reference name provided to a specific size.                                                                         |
| `size\_family`    | Retrieve sizes of a specified meta-size family. Supports only predefined values.                                                                                                                          |
| `type`            | Retrieve meta-sizes of a specific type.                                                                                                                                                                   |
| `id`              | Retrieve the details of a specific meta-size based on the size id passed.                                                                                                                                 |
| `limit`           | Retrieve the details of a specific meta-size based on the size id passed.                                                                                                                                 |
| `offset`          | Entries to be ignored from the top.                                                                                                                                                                       |
| `ou\_code`        | Identifier code of the organisation.                                                                                                                                                                      |
| `fetch\_type`     | ALL - Fetches details of product associated with both master org and org unit. ORG-Fetches details of products associated with master ORG. SCOPE-Fetches details of products associated with an org unit. |

# Response Parameters

| Parameter                     | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| `response.status.success`     | Indicates if the request was successful.        |
| `response.status.code`        | Status code for the response.                   |
| `response.status.message`     | Message associated with request status.         |
| `response.product.item`       | List of product items retrieved.                |
| `.item\_id`                   | Unique ID of the item.                          |
| `.sku`                        | Stock Keeping Unit of the item.                 |
| `.item\_ean`                  | European Article Number or barcode of the item. |
| `.price`                      | Price of the item.                              |
| `.img\_url`                   | URL of item's image.                            |
| `.in\_stock`                  | Indicates if item is in stock.                  |
| `.description`                | Short description of the item.                  |
| `.long\_description`          | Longer description of the item (if available).  |
| `.size`                       | Size of the item (if available).                |
| `.style`                      | Style of the item (if available).               |
| `.brand`                      | Brand of the item (if available).               |
| `.color`                      | Color of the item (if available).               |
| `.category`                   | Category of the item (if available).            |
| `.attributes`                 | Additional attributes of item (if available).   |
| `.attributes.attribute.name`  | Name of the attribute (e.g., "Color", "Size").  |
| `.attributes.attribute.value` | Value of attribute (e.g., "Black", "XXL").      |
| `.added\_on`                  | Date and time when the item was added.          |
| `.item\_status.status`        | Indicates if item retrieval was successful.     |
| `.item\_status.code`          | Status code for the item retrieval.             |
| `.item\_status.message`       | Message associated with item retrieval status.  |

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
    "/product/meta_sizes": {
      "get": {
        "summary": "Get Product Meta Sizes",
        "description": "Retrieves details of all product meta-sizes.",
        "operationId": "get-product-meta-sizes",
        "parameters": [
          {
            "name": "include_id",
            "in": "query",
            "description": "Retrieves category ids of eachmeta  size fetched.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "name",
            "in": "query",
            "description": "Retrieves details of specific size details based on the meta size name passed.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "canonical_name",
            "in": "query",
            "description": "Retrieves the details of a specific meta-size based on the CName. Canonical names are reference name provided to a specific size.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "size_family",
            "in": "query",
            "description": "Retrieve sizes of a specified meta-size family. Supports only predefined values.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Retrieve meta-sizes of a specific type.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "Retrieve the details of a specific meta-size based on the size id passed",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Retrieve the details of a specific meta-size based on the size id passed",
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
                    "value": "{\n  \"response\":{\n    \"status\":{\n      \"success\":true,\n      \"code\":200,\n      \"message\":\"Success\"\n    },\n    \"product\":{\n      \"count\":16,\n      \"meta_sizes\":{\n        \"meta_size\":[\n          {\n            \"name\":\"37\",\n            \"label\":\"\",\n            \"description\":\"\",\n            \"size_family\":\"CentiMeter\",\n            \"type\":\"Mens Shirt\",\n            \"parent_meta_size\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9140,\n              \"message\":\"Meta size retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"38\",\n            \"label\":\"\",\n            \"description\":\"\",\n            \"size_family\":\"CentiMeter\",\n            \"type\":\"Mens Shirt\",\n            \"parent_meta_size\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9140,\n              \"message\":\"Meta size retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"39\",\n            \"label\":\"\",\n            \"description\":\"\",\n            \"size_family\":\"CentiMeter\",\n            \"type\":\"Mens Shirt\",\n            \"parent_meta_size\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9140,\n              \"message\":\"Meta size retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"40\",\n            \"label\":\"\",\n            \"description\":\"\",\n            \"size_family\":\"CentiMeter\",\n            \"type\":\"Mens Shirt\",\n            \"parent_meta_size\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9140,\n              \"message\":\"Meta size retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"41\",\n            \"label\":\"\",\n            \"description\":\"\",\n            \"size_family\":\"CentiMeter\",\n            \"type\":\"Mens Shirt\",\n            \"parent_meta_size\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9140,\n              \"message\":\"Meta size retrieval successful\"\n            }\n          },\n        ]\n      }\n    }\n  }\n}"
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
              "code": "https://us.api.capillarytech.com/v1.1/product/meta_sizes?format=json",
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