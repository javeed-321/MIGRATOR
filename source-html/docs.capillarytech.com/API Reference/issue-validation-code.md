> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Issue Validation Code (to redeem points)

Before making points/redeem API call, you need to validate the customer by issuing validation code to the registered mobile number/email id.

This API allows you to issue a dynamic validation code to the customer’s registered mobile number/email id which is required to pass while redeeming points. The validation code is valid only for a specific time period post which it expires automatically. If you try to issue validation code within the validity period, same code will be issued again.

The validity period and communicate via is set on the **OTPConfigurations** page of **InTouch > Settings > Organization Setup**

* **OTP code validity period:** The validity of the validation code in minutes
* **Communicate OTP Via:** Mode of sending the validation code, email/sms/both

> 📘 The validation code is issued either to mobile number, or email id or both, based on the configuration set on the page InTouch > Settings > Organization Setup > OTPConfigurations

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v1.1/points/validationcode?external_id=434547&format=json&points=100' \
--header 'Authorization: Basic bWFkjU2YQ==' \
--header 'Cookie: _cfuvid=XumIPWGQWMR5H_KoNPj_nCPZxmHNpwo5t.jJOsDKIDg-1760604030972-0.0.1.1-604800000'
```

## Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

## Resource information

|                    |                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------ |
| URI                | v1.1/points/validationcode                                                                                          |
| Authentication     | Yes                                                                                                                 |
| Rate Limits        | Demo and testing clusters: 1000 requests per minute per API key. Other organizations: Rate limit is brand-specific. |
| HTTP Method        | GET                                                                                                                 |
| Batch Support      | No                                                                                                                  |
| Pagination Support | Nos                                                                                                                 |

## Query parameter

| Parameter (Parameters marked in \* are mandatory)           | Datatype | Description                                    |
| :---------------------------------------------------------- | :------- | :--------------------------------------------- |
| mobile/email/external\_id/card\_number/card\_external\_id\* | enum     | Pass any of the registered identifier type     |
| value\*                                                     | string   | Pass the respective identifier value.          |
| points                                                      | integer  | Number of points to redeem (must be positive). |

# Example response

```json Sample response
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Operation Successful"
        },
        "validation_code": {
            "code": {
                "mobile": "919777722334",
                "email": "testgrp3@gmail.com",
                "external_id": "434547",
                "points": 100,
                "item_status": {
                    "success": "true",
                    "code": 200,
                    "message": "Validation Code Issued by SMS and Email"
                }
            }
        }
    }
}
```

## Response parameter

| Parameter                 | Datatype | Description                                                                                    |
| :------------------------ | :------- | :--------------------------------------------------------------------------------------------- |
| response                  | Object   | Root object containing the API response.                                                       |
| response.status           | Object   | Contains the status of the API request.                                                        |
| status.success            | String   | Indicates if the request was successful ("true" or "false").                                   |
| status.code               | Integer  | HTTP status code (e.g., 200 for success).                                                      |
| status.message            | String   | Human-readable message describing the status (e.g., "Operation Successful").                   |
| response.validation\_code | Object   | Contains details about the validation code issuance.                                           |
| validation\_code.code     | Object   | Nested object with customer and transaction details.                                           |
| code.mobile               | String   | Customer's registered mobile number                                                            |
| code.email                | String   | Customer's registered email address                                                            |
| code.external\_id         | String   | Unique external identifier for the customer                                                    |
| code.points               | Integer  | Points to be redeemed                                                                          |
| code.item\_status         | Object   | Status of the validation code issuance.                                                        |
| item\_status.success      | String   | Indicates if the validation code was issued successfully ("true" or "false").                  |
| item\_status.code         | Integer  | Sub-status code for the validation process                                                     |
| item\_status.message      | String   | Additional details about the validation code issuance (e.g., "Validation Code Issued by SMS"). |

## API specific response

| Error code | Description                         | Reason                                                            |
| :--------- | :---------------------------------- | :---------------------------------------------------------------- |
| 400        | Bad Request                         | Invalid request parameters                                        |
| 401        | Unauthorized                        | Invalid or missing authentication credentials.                    |
| 816        | Customer not found for organization | Invalid mobile/email/external\_id/card\_number/card\_external\_id |

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
    "/points/validationcode": {
      "get": {
        "summary": "Issue Validation Code (to redeem points)",
        "description": "",
        "operationId": "issue-validation-code",
        "parameters": [
          {
            "name": "points",
            "in": "query",
            "description": "Number of points to redeem.",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
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
              "type": "string"
            }
          },
          {
            "name": "card_number",
            "in": "query",
            "description": "Card number of the customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "card_external_id",
            "in": "query",
            "description": "Card external ID of the customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "format",
            "in": "query",
            "description": "Preferred response format.",
            "schema": {
              "type": "string",
              "enum": [
                "xml",
                "json"
              ]
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
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Operation Successful"
                        },
                        "validation_code": {
                          "code": {
                            "mobile": "919777722334",
                            "email": "testgrp3@gmail.com",
                            "external_id": "434547",
                            "points": 100,
                            "item_status": {
                              "success": "true",
                              "code": 200,
                              "message": "Validation Code Issued by SMS and Email"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "string",
                              "example": "true"
                            },
                            "code": {
                              "type": "string",
                              "example": "200"
                            },
                            "message": {
                              "type": "string",
                              "example": "Operation Successful"
                            }
                          }
                        },
                        "validation_code": {
                          "type": "object",
                          "properties": {
                            "code": {
                              "type": "object",
                              "properties": {
                                "user_id": {
                                  "type": "string",
                                  "example": "55456"
                                },
                                "mobile": {
                                  "type": "string",
                                  "example": "44700900999"
                                },
                                "points": {
                                  "type": "string",
                                  "example": "50"
                                },
                                "item_status": {
                                  "type": "object",
                                  "properties": {
                                    "success": {
                                      "type": "string",
                                      "example": "true"
                                    },
                                    "code": {
                                      "type": "string",
                                      "example": "200"
                                    },
                                    "message": {
                                      "type": "string",
                                      "example": "Validation Code Issued by SMS/Email"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/points/validationcode?external_id=434547&format=json&points=100' \\\n--header 'Authorization: Basic bWFNzI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=XumIPWGQWMR5H_KoNPj_nCPZxmHNpwo5t.jJOsDKIDg-1760604030972-0.0.1.1-604800000'",
              "name": "Sample request"
            }
          ],
          "samples-languages": [
            "shell"
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