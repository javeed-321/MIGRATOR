> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Points Balance

Retrieves points balance of a customer from a single program or all programs of the org. Points are aggregated for each Point Category - Main, delayed accrual, and external trigger based.

**This is a light API**.

## Resource Information

|                       |                                        |
| :-------------------- | :------------------------------------- |
| URI                   | v2/customers/`{userId}`/points/balance |
| HTTP method           | GET                                    |
| Pagination supported? | NA                                     |
| Rate limit            | NA                                     |
| Batch support         | NA                                     |

### Important Note

| Condition                   | `fetchDataForAllPrograms = true`                           | `fetchDataForAllPrograms = false`                                |
| :-------------------------- | :--------------------------------------------------------- | :--------------------------------------------------------------- |
| **programId is passed**     | Returns the customer's points balance across all programs. | Returns the customer's points balance for the specified program. |
| **programId is not passed** | Returns the customer's points balance across all programs. | Returns the customer's points balance for the default program.   |

### Guidelines

* To retrieve a program-specific balance with fetchDataForAllPrograms = false, include programId.
* To default to the primary program with fetchDataForAllPrograms = false, omit programId.

### Response Parameters

| Parameter             | Datatype | Description                                                                                  |
| :-------------------- | :------- | :------------------------------------------------------------------------------------------- |
| entityId              | long     | Unique ID of the customer.                                                                   |
| entityType            | String   | Type of entity queried (always `"CUSTOMER"` for this endpoint).                              |
| totalPoints           | int      | Total promised & current points.                                                             |
| mainPoints            | int      | The points converted from promised points to current points. Points available to redeem now. |
| promisedPoints        | Float    | Points that are promised but not yet available for redemption.                               |
| promisedPointsBreakup | obj      | Break up details of promised points.                                                         |
| delayedAccrualPoints  | Float    | Points delayed due to accrual rules                                                          |

```json
{
    "entityId": 565039505,
    "entityType": "CUSTOMER",
    "totalPoints": 8500.000,
    "mainPoints": 8500.000,
    "promisedPoints": 0.000,
    "promisedPointsBreakup": {
        "delayedAccrualPoints": 0.000,
        "externalTriggerBasedPoints": 0.000
    },
    "warnings": []
}
```

## API specific error code

| Error Code | Description                                            | Reason                                     |
| :--------- | :----------------------------------------------------- | :----------------------------------------- |
| 8015       | Customer not found for the given identifiers           | Invalid or unsupported customerId          |
| 1212       | Entity type passed is not valid                        | Invalid or unsupported entity type         |
| 1632       | group id/externalId/primary userId passed is not valid | Invalid group id/externalid/primary userid |

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
    "/customers/{user id}/points/balance": {
      "get": {
        "summary": "Get Points Balance",
        "description": "Retrieves points balance of a customer from a single program or all programs of the org. Points are aggregated for each Point Category - Main, delayed accrual, and external trigger based.\n\n**This is a light API**.",
        "operationId": "get-points-balance",
        "parameters": [
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "programId",
            "in": "query",
            "description": "Unique ID of the loyalty program from which points balance needs to retrieve. If not passed, it shows the points balance in the default program.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "entityType",
            "in": "query",
            "description": "Pass CUSTOMER to fetch the individual customer’s points balance, FLEET to see group-level details. Default value is CUSTOMER.",
            "schema": {
              "type": "string",
              "enum": [
                "CUSTOMER",
                "FLEET"
              ]
            }
          },
          {
            "name": "fetchDataForAllPrograms",
            "in": "query",
            "description": "Pass true to fetch the sum of points balance from all the available programs of the org. Default value is false.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer whose points balance needs to be fetched.",
            "schema": {
              "type": "integer",
              "format": "int64"
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
                  "Sample Response": {
                    "value": "{\n    \"entityId\": 98662653,\n    \"entityType\": \"CUSTOMER\",\n    \"totalPoints\": 23682.300,\n    \"mainPoints\": 23682.300,\n    \"promisedPoints\": 0.000,\n    \"promisedPointsBreakup\": {\n        \"delayedAccrualPoints\": 0.000,\n        \"externalTriggerBasedPoints\": 0.000\n    },\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entityId": {
                      "type": "integer",
                      "example": 98662653,
                      "default": 0
                    },
                    "entityType": {
                      "type": "string",
                      "example": "CUSTOMER"
                    },
                    "totalPoints": {
                      "type": "number",
                      "example": 23682.3,
                      "default": 0
                    },
                    "mainPoints": {
                      "type": "number",
                      "example": 23682.3,
                      "default": 0
                    },
                    "promisedPoints": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "promisedPointsBreakup": {
                      "type": "object",
                      "properties": {
                        "delayedAccrualPoints": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "externalTriggerBasedPoints": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
                    },
                    "warnings": {
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/points/balance?programId=100458&entityType=CUSTOMER&fetchDataForAllPrograms=true' \\\n--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Cookie: _cfuvid=YXYyn0wU_nweufNlOU6vfY85CD1azTrx56Nftz1wb8k-1746530136736-0.0.1.1-604800000'",
              "name": "curl"
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