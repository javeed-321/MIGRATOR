> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Preferences

Retrieves preferences of a specific customer.

> 📘 Any one of the customer identifiers is required.

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
    "/customer/preferences": {
      "get": {
        "summary": "Get Customer Preferences",
        "description": "Retrieves preferences of a specific customer.",
        "operationId": "get-customer-preferences",
        "parameters": [
          {
            "name": "format",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "json",
                "xml"
              ]
            }
          },
          {
            "name": "mobile",
            "in": "query",
            "description": "Mobile number of the customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "email",
            "in": "query",
            "description": "Email ID of the customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "external_id",
            "in": "query",
            "description": "External ID of the customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "Unique ID of the customer.",
            "schema": {
              "type": "integer",
              "format": "int64"
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"SUCCESS\"\n    },\n    \"customers\": {\n      \"customer\": {\n        \"user_id\": \"5532354\",\n        \"mobile\": \"44700900000\",\n        \"email\": \"tom.sawyer@example.com\",\n        \"external_id\": \"ts1234\",\n        \"custom_fields\": {\n          \"field\": [\n            {\n              \"name\": \"Favorite Color\",\n              \"value\": \"Green\"\n            },\n            {\n              \"name\": \"Favorite Brand\",\n              \"value\": \"Puma\"\n            },\n            {\n              \"name\": \"Likes\",\n              \"value\": \"Shoes\"\n            },\n            {\n              \"name\": \"PREFERRED_STORE\",\n              \"value\": \"Store Name\"\n            }\n          ]\n        },\n        \"item_status\": {\n          \"success\": \"true\",\n          \"code\": \"200\",\n          \"message\": \"\nPreferences retrieved successfully\n\"\n        }\n      }\n    }\n  }\n}"
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
              "language": "curl",
              "code": "https://us.api.capillarytech.com/v1.1/customer/preferences?format=json&mobile=44700900000\n",
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