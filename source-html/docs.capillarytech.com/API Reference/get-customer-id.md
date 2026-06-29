> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer ID

Lets you fetch unique ID of a customer generated internally. This is required for customer related activities such as fetch customer details, update customer details, manage subscription details and other activities.

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
https://eu.api.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=email,mobile,externalId&identifierValue=tomswayer@capillarytech1.com,915795008395,MPQSP100
```

Here,

* `tomswayer@capillarytech1.com` is the email
* `915795008395` is the mobile number
* `MPQSP100` is the external ID

# Error Code

| Error Code | Description                                  | Reason                                                                                                                                                          |
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
    "/customers/lookup": {
      "get": {
        "summary": "Get Customer ID",
        "description": "Lets you fetch unique ID of a customer generated internally. This is required for customer related activities such as fetch customer details, update customer details, manage subscription details and other activities.",
        "operationId": "get-customer-id",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Source on which the customer identifier is available.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "FACEBOOK",
                "WEB_ENGAGE",
                "WECHAT",
                "INSTORE",
                "MARTJACK",
                "TMALL",
                "TAOBAO",
                "JD",
                "ECOMMERCE",
                "WEBSITE",
                "LINE",
                "ALL"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "Account ID for sources with multiple accounts.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier type used to identify the customer.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "cardnumber",
                "wechat",
                "martjackId",
                "fbId"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the specified identifierName.",
            "required": true,
            "schema": {
              "type": "string"
            }
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
                    "value": "{\n\"entity\": 306,\n\"warnings\":[]\n}"
                  },
                  "With Multiple Identifiers": {
                    "value": "{\n    \"entity\": 565715801,\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Sample Response",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "integer",
                          "example": 306,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "With Multiple Identifiers",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "integer",
                          "example": 565715801,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    }
                  ]
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
              "code": "https://eu.api.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=mobile&identifierValue=919111111111",
              "name": "Sample Get Request"
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup?source=INSTORE&identifierName=email%2Cmobile&identifierValue=DualEligibility%40capillarytech1.com%2C915795008395' \\\n--header 'Authorization: Basic dlYTI0YTYyZTZm' \\\n--header 'Cookie: _cfuvid=iBT1qNThhrYHVc0l18wcaR1tN1cI.2qA6CJxixO3gxU-1747808145025-0.0.1.1-604800000'",
              "name": "With Multiple Identifiers"
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