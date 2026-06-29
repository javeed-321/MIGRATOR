> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Event Log (by Request ID)

**API Endpoint example:**  <https://eu.api.capillarytech.com/v3/webHooks/eventLog/requestId/6c00716c4d310a58b74cf808561bbde9>

**Request ID**: You can retrieve the request id using the [Audit log API ](https://docs.capillarytech.com/reference/get-entity-audit-logs) or from member care:

<Image align="center" className="border" border={true} src="https://files.readme.io/0a97246e6111c4534a48d76c037c9ad7fad2b34ec5352bb29a284be14b02d0d9-image.png" />

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v3",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v3",
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
    "/webHooks/eventLog/requestId/{requestid}": {
      "get": {
        "summary": "Get Event Log (by Request ID)",
        "description": "",
        "operationId": "get-event-log-by-request-id-",
        "parameters": [
          {
            "name": "requestId",
            "in": "path",
            "description": "Pass the generated request ID (X-CAP-REQUEST-ID) of an event to fetch details.",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"data\": [\n    {\n      \"refId\": \"2000089_123563158\",\n      \"requestId\": \"194e41f2-5544-4fc5-9365-1f4452daf239\",\n      \"eventName\": \"customerUpdated\",\n      \"eventId\": \"a7351361-793c-46e0-b00d-3629eb1e5e45\",\n      \"consumerGroupId\": \"55bd9129-72ca-4e8d-a94c-08c1316c9d72\",\n      \"eventIngestionTimestamp\": \"2025-03-05T15:43:43.549-0600\",\n      \"eventStartTimestamp\": \"2025-03-05T15:43:43.600-0600\",\n      \"eventEndTimestamp\": null,\n      \"slaBreachTimestamp\": null,\n      \"consumerResponse\": null\n    }\n  ],\n  \"errors\": null,\n  \"warnings\": null\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "refId": {
                            "type": "string",
                            "example": "2000089_123563158"
                          },
                          "requestId": {
                            "type": "string",
                            "example": "194e41f2-5544-4fc5-9365-1f4452daf239"
                          },
                          "eventName": {
                            "type": "string",
                            "example": "customerUpdated"
                          },
                          "eventId": {
                            "type": "string",
                            "example": "a7351361-793c-46e0-b00d-3629eb1e5e45"
                          },
                          "consumerGroupId": {
                            "type": "string",
                            "example": "55bd9129-72ca-4e8d-a94c-08c1316c9d72"
                          },
                          "eventIngestionTimestamp": {
                            "type": "string",
                            "example": "2025-03-05T15:43:43.549-0600"
                          },
                          "eventStartTimestamp": {
                            "type": "string",
                            "example": "2025-03-05T15:43:43.600-0600"
                          },
                          "eventEndTimestamp": {},
                          "slaBreachTimestamp": {},
                          "consumerResponse": {}
                        }
                      }
                    },
                    "errors": {},
                    "warnings": {}
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
              "code": "curl --location 'https://eu.intouch.api.capillarytech.com/v3/webHooks/eventLog/requestId/194e41f2-5544-4fc5-9365-1f4452daf239' \\\n--header 'X-CAP-API-OAUTH-TOKEN: eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE3NDEyOTg0NzYsImp0aSI6IjY5czJ1NUxHa2owZ2QxcVhELVFTTHciLCJpYXQiOjE3NDEyOTQ5MzYsInN1YiI6InRlc3RNaXhlZFR4biIsImNsaWVudF9pZCI6MjI3NzksIm9yZ19pZCI6MjAwMDA4OSwidG9rZW5fdXNlIjoidG9rZW5fYWNjZXNzIiwiY2xpZW50X2tleSI6IlZ4QlZ3bnFWMFZqMjFxcFloRkZVb09RdWkiLCJkZWZhdWx0X3RpbGwiOjMwMDE5OTA0NCwic2NvcGVzIjoiW10ifQ.Jeyr2hBUpLacb3kI2JJye7foY5ZyHfCrf4Ki1Eh9cRafS3VKLgP8nezxvtk4VE375vZnE1yq_obSdytIyxGpqM3ad4GZGFhFAgy4znIthQldCVKKFgJ7LbLlGUP8LCJYdjH2TXf7gTggXmpUtFMNfDaznxjz_fKlgw6-yZXCx0igF2Gdlc-0PA9nGKm2cH85iI3bJoPfeRiENm8DtMsdpbeZAPKc8uw52J3WW27fN9CoBE7akbeEqI1sBI7DuidgrbGHN1qa04wotnKxEr_rOA-Y102uHp8-Mfz2YoiSOJGmHqkTpfxVwlBsI9JZb1xM1V32bUjmn_b8Nen9g_Vndw' \\\n--header 'X-CAP-API-ATTRIBUTION-ENTITY-TYPE: TILL' \\\n--header 'X-CAP-API-ATTRIBUTION-ENTITY-CODE: flt.100.015' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'Cookie: _cfuvid=V9gz5M6w1DEozxHdBz2cYsUbw8iDGlMbc8aboxwGuiE-1741294936696-0.0.1.1-604800000'"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```