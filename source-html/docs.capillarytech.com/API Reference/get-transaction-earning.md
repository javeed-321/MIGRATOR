> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Transaction Earning

Retrieves the details of all points earned for a transaction.

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "organization-1",
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
    "/earning": {
      "get": {
        "summary": "Get Transaction Earning",
        "description": "Retrieves the details of all points earned for a transaction.",
        "operationId": "get-transaction-earning",
        "parameters": [
          {
            "name": "transactionId",
            "in": "path",
            "description": "Unique ID of the transaction to fetch earnings.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          }
        ],
        "deprecated": false
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