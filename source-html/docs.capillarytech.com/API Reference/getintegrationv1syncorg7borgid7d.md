> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve Organization Sync Data

Endpoint for GET /integration/v1/sync/org/%7BorgId%7D

This endpoint synchronize information of a specified organization.

# Prerequisites

* [ ] Authentication: Basic or OAuth credentials
* [ ] Default access group

# Resource information

|                        |                                   |
| :--------------------- | :-------------------------------- |
| URI                    | /integration/v1/sync/org/\[orgId] |
| HTTP Method            | GET                               |
| Pagination             | No                                |
| Batch support          | No                                |
| Rate limit information | Not specified                     |

### Endpoint

`GET http://ccurl/integration/v1/sync/org/{orgId}`

### Path Parameters

| Name    | Type   | Description                           |
| :------ | :----- | :------------------------------------ |
| `orgId` | string | Unique identifier of the organization |

## Request body sample

```curl
curl --request GET \
     --url http://host/integration/v1/sync/org/orgId \
     --header 'accept: application/json'
```

# OpenAPI definition

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "Sample API",
    "version": "1.0.0",
    "description": "API specification generated from cURL for GET /integration/v1/sync/org/%7BorgId%7D"
  },
  "servers": [
    {
      "url": "http://{host}"
    }
  ],
  "paths": {
    "/integration/v1/sync/org/{orgId}": {
      "get": {
        "summary": "Operation for GET /integration/v1/sync/org/%7BorgId%7D",
        "description": "Endpoint for GET /integration/v1/sync/org/%7BorgId%7D",
        "operationId": "getIntegrationv1syncorg7BorgId7D",
        "parameters": [
          {
            "in": "path",
            "name": "orgId",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Success"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    }
  }
}
```