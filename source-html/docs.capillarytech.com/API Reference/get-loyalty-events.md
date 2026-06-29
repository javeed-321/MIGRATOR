> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Loyalty Events

Retrieves the details of loyalty events triggered for the customer.

## Example request

```json Sample request Get loyalty points
curl --location 'https://eu.api.capillarytech.com/v2/customers/564955097/loyaltyEvents' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=SPpJZvR8VvAMacotHKvjCBzkT.A38OIejYNSsGOXido-1757310494558-0.0.1.1-604800000'
```

## Prerequisites

* [ ] Basic or OAuth credentials
* [ ] Read access to Points access group resource

## API endpoint example

`https://eu.api.capillarytech.com/v2/customers/565039505/loyaltyEvents`

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/loyaltyEvents' \
--header 'Authorization: Basic 
c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: 
_cfuvid=uEUwrBAfGGgkRhH8C6wGyc6ShByhFRsEdpQj1e8WSGU-1750831646379-0.0.1.1-
604800000'
```

## Resource Information

| Field          | Value                          |
| -------------- | ------------------------------ |
| URI            | v2/\[customerId]/loyaltyEvents |
| HTTP Method    | GET                            |
| Rate Limited   | Yes                            |
| Authentication | Yes (Bearer token)             |
| Batch Support  | No                             |

## Header information

| Header Key            | Description                                                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorization         | Bearer token for authentication. Example: Bearer \<your\_access\_token>.                                                                                              |
| Content-Type          | Specifies the media type of the request. Use application/json for JSON.                                                                                               |
| Accept                | Defines the response format. Example: application/json or application/xml.                                                                                            |
| X-Capillary-OrgId     | Unique organization ID for which the API is being called.                                                                                                             |
| X-Capillary-App-Key   | Application key for API access.                                                                                                                                       |
| X-CAP-API-OAUTH-TOKEN | This header is a custom authentication header used to pass the OAuth access token for API authentication. Refer to <https://docs.capillarytech.com/reference/oauth#/> |

## Request Parameters

### Path Parameters

| Parameter  | Type | Description                |
| ---------- | ---- | -------------------------- |
| customerId | long | Unique ID of the customer. |

### Query Parameters

| Parameter | Type   | Description                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| limit     | int    | Maximum records per page. Default value: 10                       |
| offset    | int    | Records to skip (zero-based). Default offset value: 0             |
| page      | int    | Page number (overrides offset if both provided). Default value: 1 |
| eventType | string | Filter by event type (e.g., EARN, REDEEM, EXPIRE, TRANSFER).      |
| fromDate  | string | Start date for filtering events (format: YYYY-MM-DD).             |
| toDate    | string | End date for filtering events (format: YYYY-MM-DD).               |

## Response Parameters

| Parameter  | Type   | Description                                                               |
| ---------- | ------ | ------------------------------------------------------------------------- |
| id         | long   | Unique identifier for the loyalty event.                                  |
| customerId | long   | Unique ID of the customer associated with the event.                      |
| date       | string | Timestamp of the event in ISO 8601 format (e.g., "2025-02-28T06:16:16Z"). |
| eventName  | string | Name/type of the event (e.g., "CustomerRegistration").                    |
| orgId      | long   | Unique ID of the organization where the event occurred.                   |
| status     | string | Status of the event (e.g., "SUCCESS", "FAILED").                          |
| uniqueId   | string | Unique reference ID for the event (e.g., "eQmzQLEfVb").                   |

```json Response
{
    "data": [
        {
            "id": 1603616021,
            "customerId": 565039505,
            "date": "2025-02-28T06:16:16Z",
            "eventName": "CustomerRegistration",
            "orgId": 100737,
            "status": "SUCCESS",
            "uniqueId": "eQmzQLEfVb"
        },
        {
            "id": 1603618101,
            "customerId": 565039505,
            "date": "2025-02-28T06:56:04Z",
            "eventName": "CustomerUpdate",
            "orgId": 100737,
            "status": "SUCCESS",
            "uniqueId": "RnPyaWafs6"
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json Sample response Get loyalty events
{
    "data": [
        {
            "id": 1602578009,
            "customerId": 564955097,
            "date": "2025-02-18T03:54:14Z",
            "eventName": "CustomerRegistration",
            "orgId": 100737,
            "status": "SUCCESS",
            "uniqueId": "D76aXtwJPP"
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific errors

| Error code | Description                                  | Reason                                                  |
| :--------- | :------------------------------------------- | :------------------------------------------------------ |
| 8069       | Merged customer found                        | API request is made for a customer who has been merged. |
| 8015       | Customer not found for the given identifiers | Invalid Customer ID passed                              |

<br />

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
    "/customers/{userId}/loyaltyEvents": {
      "get": {
        "summary": "Get Loyalty Events",
        "description": "Retrieves the details of loyalty events triggered for the customer.",
        "operationId": "get-loyalty-events",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer to fetch loyalty events.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          },
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n  \"data\": [\n   {\n      \"id\": 42272852,\n      \"customerId\": 28780933,\n      \"date\": \"2021-06-21T19:59:09+05:30\",\n      \"eventName\": \"CustomerRegistration\",\n      \"orgId\": 1779,\n      \"status\": \"SUCCESS\",\n      \"uniqueId\": \"pLZ9NGKDJ6\"\n    }\n  ],\n   \"warnings\": [],\n   \"errors\": []\n}"
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
                          "id": {
                            "type": "integer",
                            "example": 42272852,
                            "default": 0
                          },
                          "customerId": {
                            "type": "integer",
                            "example": 28780933,
                            "default": 0
                          },
                          "date": {
                            "type": "string",
                            "example": "2021-06-21T19:59:09+05:30"
                          },
                          "eventName": {
                            "type": "string",
                            "example": "CustomerRegistration"
                          },
                          "orgId": {
                            "type": "integer",
                            "example": 1779,
                            "default": 0
                          },
                          "status": {
                            "type": "string",
                            "example": "SUCCESS"
                          },
                          "uniqueId": {
                            "type": "string",
                            "example": "pLZ9NGKDJ6"
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
                      "type": "array"
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
              "code": "https://eu.api.capillarytech.com/v2/customers/28780933/loyaltyEvents",
              "name": "Sample Request"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/564955097/loyaltyEvents' \\\n--header 'Authorization: Basic =' \\\n--header 'Cookie: _cfuvid=SPpJZvR8VvAMacotHKvjCBzkT.A38OIejYNSsGOXido-1757310494558-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request Get loyalty events"
            }
          ],
          "samples-languages": [
            "curl",
            "shell"
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