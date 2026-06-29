> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Feed (Scan Event)

Captures details of an events based on qrcodes ,menuclick, and getpromotion.

## Request Body Parameters

| Parameter                    | Description                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| eventName\*                  | Pass the name of the scan event to capture - Value: GetPromotion (for scan event)        |
| eventTime                    | Time of the event                                                                        |
| scanId                       | ID of the scanned code                                                                   |
| sku                          | SKU of the scanned item                                                                  |
| promotionCode                | The coupon code of the promotion (Place holder for future use case. Not implemented yet) |
| details                      | Details of the event item                                                                |
| id/mobile/email/externalId\* | Any one of the unique identifiers of the customer.                                       |

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
    "/feed": {
      "post": {
        "summary": "Feed (Scan Event)",
        "description": "Captures details of an events based on qrcodes ,menuclick, and getpromotion.",
        "operationId": "feed-scan-event",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Source from which the event is made.",
            "schema": {
              "type": "string",
              "enum": [
                "INSTORE"
              ]
            }
          }
        ],
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
        "deprecated": false,
        "security": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {},
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "eventName": "GetPromotion",
                    "openId": "",
                    "eventTime": "2018-09-28T15:26:45+05:30",
                    "scanId": "scanId_571910",
                    "details": "details_571910",
                    "customer": {
                      "id": "293653070",
                      "mobile": "917799497290",
                      "email": "2245@gmail.com",
                      "externalId": "ext_i9422176957"
                    },
                    "sku": "Levis-001",
                    "promotionCode": ""
                  }
                }
              }
            }
          }
        }
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