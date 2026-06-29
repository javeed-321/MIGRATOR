> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Product Categories

Retrieves the details of all product categories.

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
    "/product/categories": {
      "get": {
        "summary": "Get Product Categories",
        "description": "Retrieves the details of all product categories.",
        "operationId": "get-product-categories",
        "parameters": [
          {
            "name": "include_id",
            "in": "query",
            "description": "Retrieves category ids of each category fetched.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "values",
            "in": "query",
            "description": "Retrieves all child categories if values=true.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "value_limit",
            "in": "query",
            "description": "Limits number of child categories to be retrieved.",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 20
            }
          },
          {
            "name": "name",
            "in": "query",
            "description": "Retrieves the details of a specific product category based on the category name passed (not case sensitive).",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "Retrieves the details of a specific product category based on the product id.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "parent_id",
            "in": "query",
            "description": "Retrieves the details of a specific product category and its child categories based on the parent product id passed.",
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
            "description": "Limits the number of product categories to be retrieved.",
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
                    "value": "{\n  \"response\":{\n    \"status\":{\n      \"success\":true,\n      \"code\":200,\n      \"message\":\"SUCCESS\"\n    },\n    \"product\":{\n      \"count\":20,\n      \"categories\":{\n        \"category\":[\n          {\n            \"name\":\"AAA\",\n            \"label\":\"a1\",\n            \"description\":\"aa13\",\n            \"parent_name\":null,\n            \"parent_label\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9172,\n              \"message\":\"Category retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"BBB\",\n            \"label\":\"b1\",\n            \"description\":\"bb13\",\n            \"parent_name\":null,\n            \"parent_label\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9172,\n              \"message\":\"Category retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"EEE\",\n            \"label\":\"e1\",\n            \"description\":\"ee13\",\n            \"parent_name\":null,\n            \"parent_label\":null,\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9172,\n              \"message\":\"Category retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"ZZZ\",\n            \"label\":\"z1\",\n            \"description\":\"zz13\",\n            \"parent_name\":\"AAA\",\n            \"parent_label\":\"a1\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9172,\n              \"message\":\"Category retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"LLL\",\n            \"label\":\"l1\",\n            \"description\":\"ll13\",\n            \"parent_name\":\"KKK\",\n            \"parent_label\":\"k1\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9172,\n              \"message\":\"Category retrieval successful\"\n            }\n          },\n          {\n            \"name\":\"NNN\",\n            \"label\":\"n1\",\n            \"description\":\"nn13\",\n            \"parent_name\":\"MMM\",\n            \"parent_label\":\"m1\",\n            \"item_status\":{\n              \"success\":true,\n              \"code\":9172,\n              \"message\":\"Category retrieval successful\"\n            }\n          }\n        ]\n      }\n    }\n  }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
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
                              "example": 200,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "SUCCESS"
                            }
                          }
                        },
                        "product": {
                          "type": "object",
                          "properties": {
                            "count": {
                              "type": "integer",
                              "example": 20,
                              "default": 0
                            },
                            "categories": {
                              "type": "object",
                              "properties": {
                                "category": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string",
                                        "example": "AAA"
                                      },
                                      "label": {
                                        "type": "string",
                                        "example": "a1"
                                      },
                                      "description": {
                                        "type": "string",
                                        "example": "aa13"
                                      },
                                      "parent_name": {},
                                      "parent_label": {},
                                      "item_status": {
                                        "type": "object",
                                        "properties": {
                                          "success": {
                                            "type": "boolean",
                                            "example": true,
                                            "default": true
                                          },
                                          "code": {
                                            "type": "integer",
                                            "example": 9172,
                                            "default": 0
                                          },
                                          "message": {
                                            "type": "string",
                                            "example": "Category retrieval successful"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
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
              "code": "https://us.api.capillarytech.com/v1.1/product/categories?format=json\n",
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