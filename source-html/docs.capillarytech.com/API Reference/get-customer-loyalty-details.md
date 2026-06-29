> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Loyalty Details

Retrieves the loyalty information of a customer across all loyalty programs of the org . You can also fetch details of a specific loyalty program.

## Using Multiple Identifiers

When [dual eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility) is enabled in your organisation, the API allows you to send multiple identifiers while fetching details. The system automatically identifies which one is the primary identifier and retrieves the details accordingly. This removes the need for you to know or specify only the primary identifier. This is beneficial in a dual eligibility–enabled scenario, as the feature allows you to register multiple users with the same secondary identifiers.\
When you submit multiple identifiers in a lookup request:

* The service checks that dual eligibility is active.
* It parses all submitted identifiers, for example `email`,`mobile`,`externalId`
* It determines which identifier is configured as the primary key.
* If one of the provided values matches the primary key, the API uses it for the lookup.
* The API returns the single customer profile associated with the primary identifier.

You can enter multiple identifiers as comma-separated values using the `identifierName` and `identifierValue` query parameters. Ensure the order of the `identifierName` matches the `identifierValue`.

**Note:** If you provide only one identifier that is not the primary identifier, the system will return an error, `8015 - Customer not found for given identifiers`.

### Endpoint Example

```json Endpoint Example
<https://eu.api.capillarytech.com/v2/customers/lookup/loyaltyDetails?source=INSTORE&&identifierName=email,mobile,externalID&identifierValue=tomswayer@capillarytech1.com,915795008395,MPQSP100>
```

Here,

* `tomswayer@capillarytech1.com` is the email
* `915795008395` is the mobile number
* `MPQSP100` is the external ID

# Error Code

| Error Code | Description                                  | Reasomn                                                                                                                                                         |
| :--------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8015       | Customer not found for the given identifiers | The identifier provided is incorrect. When dual eligibility is enabled, if the primary identifier is missing from the input, the system returns the same error. |

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
    "/customers/lookup/loyaltyDetails": {
      "get": {
        "summary": "Get Customer Loyalty Details",
        "description": "Retrieves the loyalty information of a customer across all loyalty programs of the org . You can also fetch details of a specific loyalty program.",
        "operationId": "get-customer-loyalty-details",
        "parameters": [
          {
            "name": "programId",
            "in": "query",
            "description": "Unique ID of the program to get loyalty details of a specific program.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the customer details are available.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "INSTORE",
                "WECHAT",
                "MARTJACK",
                "WEB_ENGAGE",
                "JD",
                "TAOBAO",
                "TMALL",
                "FACEBOOK",
                "WEBSITE",
                "OTHERS",
                ""
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for INSTORE source.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Registered identifier name of the customer with respect to the source.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "id",
                "wechat",
                "martjackId",
                "fbId",
                "cardnumber",
                "cardExternalId"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Pass the respective identifier value. For example if identifierType is mobile, identifierValue is mobile number.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "includedAllFleetGroup",
            "in": "query",
            "description": "Pass `true` to include loyalty details of all groups. By default, it shows the loyalty details associated with the till.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "fleetGroupId",
            "in": "query",
            "description": "Unique ID of the fleet group to get the customer's loyalty details for a specific group.",
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
                  "Sample Response": {
                    "value": "{\n    \"data\": [\n        {\n            \"redeemed\": 0.0,\n            \"expired\": 0.0,\n            \"returned\": 0.0,\n            \"adjusted\": 0.0,\n            \"lifetimePoints\": 0.0,\n            \"loyaltyPoints\": 0.0,\n            \"cumulativePurchases\": 24000.0,\n            \"loyaltyId\": 143032714,\n            \"currentSlab\": \"Default\",\n            \"nextSlab\": \"\",\n            \"nextSlabSerialNumber\": -1,\n            \"nextSlabDescription\": \"\",\n            \"slabSNo\": 1,\n            \"slabExpiryDate\": \"2121-02-18T23:59:59+05:30\",\n            \"programId\": 1414,\n            \"delayedPoints\": 0.0,\n            \"delayedReturnedPoints\": 0.0,\n            \"totalAvailablePoints\": 0.0,\n            \"totalReturnedPoints\": 0.0,\n            \"linkedPartnerPrograms\": []\n        },\n        {\n            \"redeemed\": 0.0,\n            \"expired\": 0.0,\n            \"returned\": 0.0,\n            \"adjusted\": 0.0,\n            \"lifetimePoints\": 0.0,\n            \"loyaltyPoints\": 0.0,\n            \"cumulativePurchases\": 0.0,\n            \"loyaltyId\": 143032714,\n            \"currentSlab\": \"Base\",\n            \"nextSlab\": \"bbstar\",\n            \"nextSlabSerialNumber\": 2,\n            \"nextSlabDescription\": \"bbstar\",\n            \"slabSNo\": 1,\n            \"slabExpiryDate\": \"2121-05-08T01:20:22+05:30\",\n            \"programId\": 1679,\n            \"delayedPoints\": 0.0,\n            \"delayedReturnedPoints\": 0.0,\n            \"totalAvailablePoints\": 0.0,\n            \"totalReturnedPoints\": 0.0,\n            \"linkedPartnerPrograms\": []\n        },\n        {\n            \"redeemed\": 0.0,\n            \"expired\": 0.0,\n            \"returned\": 0.0,\n            \"adjusted\": 0.0,\n            \"lifetimePoints\": 0.0,\n            \"loyaltyPoints\": 0.0,\n            \"cumulativePurchases\": 0.0,\n            \"loyaltyId\": 143032714,\n            \"currentSlab\": \"CLiQPerQ\",\n            \"nextSlab\": \"Ignore\",\n            \"nextSlabSerialNumber\": 2,\n            \"nextSlabDescription\": \"Ignore\",\n            \"slabSNo\": 1,\n            \"slabExpiryDate\": \"2121-05-08T01:46:18+05:30\",\n            \"programId\": 1680,\n            \"delayedPoints\": 0.0,\n            \"delayedReturnedPoints\": 0.0,\n            \"totalAvailablePoints\": 0.0,\n            \"totalReturnedPoints\": 0.0,\n            \"linkedPartnerPrograms\": []\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
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
                          "redeemed": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "expired": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "returned": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "adjusted": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "lifetimePoints": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "loyaltyPoints": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "cumulativePurchases": {
                            "type": "integer",
                            "example": 24000,
                            "default": 0
                          },
                          "loyaltyId": {
                            "type": "integer",
                            "example": 143032714,
                            "default": 0
                          },
                          "currentSlab": {
                            "type": "string",
                            "example": "Default"
                          },
                          "nextSlab": {
                            "type": "string",
                            "example": ""
                          },
                          "nextSlabSerialNumber": {
                            "type": "integer",
                            "example": -1,
                            "default": 0
                          },
                          "nextSlabDescription": {
                            "type": "string",
                            "example": ""
                          },
                          "slabSNo": {
                            "type": "integer",
                            "example": 1,
                            "default": 0
                          },
                          "slabExpiryDate": {
                            "type": "string",
                            "example": "2121-02-18T23:59:59+05:30"
                          },
                          "programId": {
                            "type": "integer",
                            "example": 1414,
                            "default": 0
                          },
                          "delayedPoints": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "delayedReturnedPoints": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "totalAvailablePoints": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "totalReturnedPoints": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "linkedPartnerPrograms": {
                            "type": "array"
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
              "code": "https://apac.api.capillarytech.com/v2/customers/lookup/loyaltyDetails?source=INSTORE&identifierName=externalId&identifierValue=888555888555898855",
              "name": "Sample Request"
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