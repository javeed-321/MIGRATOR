> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Referrals

Lets you add customer referral details that contain referees, referred date, and the associated channel.

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
    "/customers/{userId}/referrals": {
      "get": {
        "summary": "Add Referrals",
        "description": "Lets you add customer referral details that contain referees, referred date, and the associated channel.",
        "operationId": "add-referrals",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer to fetch coupon details.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "customerReferrals": {
                    "properties": {
                      "customer": {
                        "properties": {
                          "id": {
                            "type": "integer",
                            "description": "Unique ID of the customer who is referring.",
                            "format": "int64"
                          },
                          "mobile": {
                            "type": "string",
                            "description": "Mobile number of the customer who is referring."
                          },
                          "email": {
                            "type": "string",
                            "description": "Email ID of the customer who is referring."
                          },
                          "externalId": {
                            "type": "string",
                            "description": "External ID of the customer who is referring."
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "campaignToken": {
                        "type": "string",
                        "description": "Unique token generated for the referral campaign."
                      },
                      "referrals": {
                        "properties": {
                          "type": {
                            "type": "string",
                            "description": "Channel through which the referral details need to be sent - MOBILE, EMAIL.",
                            "enum": [
                              "MOBILE",
                              "EMAIL"
                            ]
                          },
                          "referral": {
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Name of the referee."
                              },
                              "identifier": {
                                "type": "string",
                                "description": "Identifier value of the customer as per the specified `type`."
                              },
                              "invitedOn": {
                                "type": "string",
                                "description": "Date and time of the invitation in YYYY-MM-DDThh:mm:ss.Z.",
                                "format": "date-time"
                              }
                            },
                            "required": [],
                            "type": "object"
                          }
                        },
                        "required": [],
                        "type": "object"
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Details of customer referrals."
                  }
                }
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "customerReferrals": [
                      {
                        "customer": {
                          "id": 420007388,
                          "mobile": "918867710031",
                          "email": "tom.swayer@capillarytech.com",
                          "externalId": ""
                        },
                        "campaignToken": "CWRME",
                        "referrals": [
                          {
                            "type": "MOBILE",
                            "referral": [
                              {
                                "name": "some random name",
                                "identifier": "918867710032",
                                "invitedOn": "2021-12-16 13:15:45"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n  \"customerReferrals\": [\n    {\n      \"customer\": {\n        \"id\": 420007388,\n        \"mobile\": \"918867710031\",\n        \"email\": \"tom.swayer@capillarytech.com\",\n        \"externalId\": \"\"\n      },\n      \"campaignToken\": \"CWRME\",\n      \"referrals\": [\n        {\n          \"type\": \"MOBILE\",\n          \"referral\": [\n            {\n              \"name\": \"some random name\",\n              \"identifier\": \"918867710032\",\n              \"invitedOn\": \"2021-12-16 13:15:45\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "customerReferrals": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "customer": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 420007388,
                                "default": 0
                              },
                              "mobile": {
                                "type": "string",
                                "example": "918867710031"
                              },
                              "email": {
                                "type": "string",
                                "example": "tom.swayer@capillarytech.com"
                              },
                              "externalId": {
                                "type": "string",
                                "example": ""
                              }
                            }
                          },
                          "campaignToken": {
                            "type": "string",
                            "example": "CWRME"
                          },
                          "referrals": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "example": "MOBILE"
                                },
                                "referral": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string",
                                        "example": "some random name"
                                      },
                                      "identifier": {
                                        "type": "string",
                                        "example": "918867710032"
                                      },
                                      "invitedOn": {
                                        "type": "string",
                                        "example": "2021-12-16 13:15:45"
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