> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Active Tills

Retrieves the details of a specific ill based on the Till code or till ID passed.

> 📘
>
> Either `code` or `tillId` is mandatory.

# Response parameter

| Parameter Name | Description                                                     |
| :------------- | :-------------------------------------------------------------- |
| id             | Internal Till ID generated while creation of the till           |
| code           | The till user name that is provided while creation of the till. |
|                |                                                                 |

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
    "/organization/activeTill": {
      "get": {
        "summary": "Get Active Tills",
        "description": "Retrieves the details of a specific ill based on the Till code or till ID passed.",
        "operationId": "get-active-tills",
        "responses": {
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