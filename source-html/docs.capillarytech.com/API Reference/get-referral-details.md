> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Referral Details

Retrieves the stats of the referrals along with the unique referral code of a specific customer.

## Authentication

<Anchor label="Basic Authentication" target="_blank" href="https://docs.capillarytech.com/reference/basic-authentication#/">Basic Authentication</Anchor>

## API specific error code

| Error Code | Description                             | Reason                                |
| :--------- | :-------------------------------------- | :------------------------------------ |
| 1222       | Internal error with the referral system | System failure in referral processing |

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
    "/customer/referrals": {
      "get": {
        "summary": "Get Referral Details",
        "description": "Retrieves the stats of the referrals along with the unique referral code of a specific customer.",
        "operationId": "get-referral-details",
        "parameters": [
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
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "campaign_token",
            "in": "query",
            "description": "Pass the specific token id of the referral campaign that you want to fetch. If no campaign id is passed, the details of the customer’s referral history of the default campaign will be retrieved",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "start_date",
            "in": "query",
            "description": "Get customers referred  on or after a specific date (YYYY-MM-DD). To get referral history of a specific duration, pass the date range in start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Get customers referred before a specific date (YYYY-MM-DD). To get referral history of a specific duration, pass the date range in start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "store_code",
            "in": "query",
            "description": "Retrieve referral stats of the specific store. Default value will be the current store. Set all to track details from all the stores",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "order_by",
            "in": "query",
            "description": "Order the results by a specific entry. `valid_till` is for issued_till.",
            "schema": {
              "type": "string",
              "enum": [
                "created_date",
                "amount",
                "valid_till"
              ]
            }
          },
          {
            "name": "sort_order",
            "in": "query",
            "description": "Sort the results in ascending (asc) or descending (desc) order of order_by.",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limit the number of results to be retrieved. For example: limit=10 to retrieve the history of ten recent coupons of the customer.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "only_referral_code",
            "in": "query",
            "description": "Set true to retrieve the referral code of the respective referral campaigns (of the specific customer).",
            "schema": {
              "type": "boolean"
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
                    "value": "{\n   \"response\":{\n      \"status\":{\n         \"success\":\"true\",\n         \"code\":200,\n         \"message\":\"SUCCESS\"\n      },\n      \"customer\":{\n         \"email\":null,\n         \"mobile\":\"971544979350\",\n         \"external_id\":\"971544979350\",\n         \"firstname\":\"Ishant\",\n         \"lastname\":\"Jindal\",\n         \"referral_code\":\"1mba0dlo5\",\n         \"invitees\":{\n            \"referral_type\":[\n               {\n                  \"type\":\"MOBILE\",\n                  \"invitee\":[\n                     {\n                        \"identifier\":\"971564265901\",\n                        \"name\":\"Siddhant\",\n                        \"invited_on\":\"2020-01-29 12:25:46.0\",\n                        \"till\":{\n                           \"code\":\"jotun.uae.admin.2\",\n                           \"name\":\"jotun.uae.admin.2\"\n                        }\n                     },\n                     {\n                        \"identifier\":\"971564265901\",\n                        \"name\":\"Siva\",\n                        \"invited_on\":\"2020-01-29 13:37:36.0\",\n                        \"till\":{\n                           \"code\":\"jotun.uae.admin.2\",\n                           \"name\":\"jotun.uae.admin.2\"\n                        }\n                     },\n                     {\n                        \"identifier\":\"97150000099\",\n                        \"name\":\"Harry\",\n                        \"invited_on\":\"2020-01-29 13:55:32.0\",\n                        \"till\":{\n                           \"code\":\"jotun.uae.admin.2\",\n                           \"name\":\"jotun.uae.admin.2\"\n                        }\n                     },\n                     {\n                        \"identifier\":\"97150000099\",\n                        \"name\":\"Jim\",\n                        \"invited_on\":\"2020-01-30 14:56:12.0\",\n                        \"till\":{\n                           \"code\":\"jotun.uae.admin.2\",\n                           \"name\":\"jotun.uae.admin.2\"\n                        }\n                     }\n                  ]\n               }\n            ]\n         },\n         \"referees\":{\n            \"referee\":[\n               {\n                  \"event_type\":\"REGISTRATION\",\n                  \"firstname\":null,\n                  \"lastname\":null,\n                  \"mobile\":null,\n                  \"email\":null,\n                  \"external_id\":null,\n                  \"added_on\":\"2020-01-29 13:24:15\"\n               },\n               {\n                  \"event_type\":\"REGISTRATION\",\n                  \"firstname\":null,\n                  \"lastname\":null,\n                  \"mobile\":null,\n                  \"email\":null,\n                  \"external_id\":null,\n                  \"added_on\":\"2020-01-29 13:31:53\"\n               },\n               {\n                  \"event_type\":\"REGISTRATION\",\n                  \"firstname\":null,\n                  \"lastname\":null,\n                  \"mobile\":null,\n                  \"email\":null,\n                  \"external_id\":null,\n                  \"added_on\":\"2020-01-29 14:33:05\"\n               },\n               {\n                  \"event_type\":\"REGISTRATION\",\n                  \"firstname\":null,\n                  \"lastname\":null,\n                  \"mobile\":null,\n                  \"email\":null,\n                  \"external_id\":null,\n                  \"added_on\":\"2020-01-29 15:32:37\"\n               }\n            ]\n         },\n         \"incentives\":[\n\n         ],\n         \"item_status\":{\n            \"success\":\"true\",\n            \"code\":1000,\n            \"message\":\"Referral statistics retrieved successfully\"\n         }\n      }\n   }\n}"
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
                              "type": "integer",
                              "example": 200,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "SUCCESS"
                            }
                          }
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "email": {},
                            "mobile": {
                              "type": "string",
                              "example": "971544979350"
                            },
                            "external_id": {
                              "type": "string",
                              "example": "971544979350"
                            },
                            "firstname": {
                              "type": "string",
                              "example": "Ishant"
                            },
                            "lastname": {
                              "type": "string",
                              "example": "Jindal"
                            },
                            "referral_code": {
                              "type": "string",
                              "example": "1mba0dlo5"
                            },
                            "invitees": {
                              "type": "object",
                              "properties": {
                                "referral_type": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "example": "MOBILE"
                                      },
                                      "invitee": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "identifier": {
                                              "type": "string",
                                              "example": "971564265901"
                                            },
                                            "name": {
                                              "type": "string",
                                              "example": "Siddhant"
                                            },
                                            "invited_on": {
                                              "type": "string",
                                              "example": "2020-01-29 12:25:46.0"
                                            },
                                            "till": {
                                              "type": "object",
                                              "properties": {
                                                "code": {
                                                  "type": "string",
                                                  "example": "jotun.uae.admin.2"
                                                },
                                                "name": {
                                                  "type": "string",
                                                  "example": "jotun.uae.admin.2"
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
                            "referees": {
                              "type": "object",
                              "properties": {
                                "referee": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "event_type": {
                                        "type": "string",
                                        "example": "REGISTRATION"
                                      },
                                      "firstname": {},
                                      "lastname": {},
                                      "mobile": {},
                                      "email": {},
                                      "external_id": {},
                                      "added_on": {
                                        "type": "string",
                                        "example": "2020-01-29 13:24:15"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "incentives": {
                              "type": "array"
                            },
                            "item_status": {
                              "type": "object",
                              "properties": {
                                "success": {
                                  "type": "string",
                                  "example": "true"
                                },
                                "code": {
                                  "type": "integer",
                                  "example": 1000,
                                  "default": 0
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Referral statistics retrieved successfully"
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
              "language": "curl",
              "code": "https://us.api.capillarytech.com/v1.1/customer/referrals&mobile=9197407983xx\n"
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