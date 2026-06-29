> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update association details

Lets you update group customer details.

# Query parameter

| Parameter | Description                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------------- |
| source    | FACEBOOK, WEB\_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL |
| accountId | Account ID of the customer                                                                         |

# Body Parameter

| Parameter          | Description                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| loyaltyType\*      | Loyalty status of the customer.                                                                         |
| profiles           | Meta information of the customer.                                                                       |
| identifiers\*      | Identifiers of the customer in type and value.                                                          |
| type               | Type of the customer identifier.                                                                        |
| value              | Value of the specified identifier.                                                                      |
| seriesId           | Card series ID (for card series generated in Capillary).                                                |
| seriesCode         | Unique card series code (for external card series).                                                     |
| statusLabel        | User defined card status.                                                                               |
| lastViewedDate\*\* | Date when the customer recently opened the app.                                                         |
| hierarchyCode      | Unique code of the hierarchy to associate with the customer/company.                                    |
| roleCode           | Pre defined role code.                                                                                  |
| childCustomers     | Details of child customers.                                                                             |
| profiles           | Details of the customer to associate.                                                                   |
| Firstname          | First name of the customer.                                                                             |
| Lastname           | Last name of the customer.                                                                              |
| identifiers\*      | Identifiers of the customer in type and value.                                                          |
| type               | Type of the customer identifier.                                                                        |
| value              | Value of the specified identifier.                                                                      |
| commChannels       | Available communication channels of the customer.                                                       |
| createDate         | Time and date of registration in `YYYY-MM-DDTHH:MM:SS+HH:MM` format. Example: 2016-06-23T19:11:18+08:00 |
| associatedWith     | The TILL code associated with the customer registration.                                                |
| extendedFields     | Customer level extended field details of the customer in key.                                           |
| fields             | Custom field details of customers in key-value pairs.                                                   |
| fleetCompany       | Details of                                                                                              |
| externalId         | External ID of the company.                                                                             |

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
    "/bulk": {
      "put": {
        "summary": "Update association details",
        "description": "Lets you update group customer details.",
        "operationId": "update-association-details",
        "parameters": [
          {
            "name": "source",
            "in": "query",
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
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string",
                    "format": "json"
                  }
                }
              },
              "examples": {
                "Sample PUT Request": {
                  "value": {
                    "profiles": [
                      {
                        "firstName": "Tom",
                        "lastName": "Sawyer",
                        "identifiers": [
                          {
                            "type": "mobile",
                            "value": "915905000000"
                          },
                          {
                            "type": "cuid",
                            "value": "cuid_915905000000"
                          },
                          {
                            "type": "unionId",
                            "value": "unionId_915905000000"
                          }
                        ],
                        "commChannels": [
                          {
                            "type": "mobile",
                            "value": "915905000000",
                            "primary": true,
                            "verified": true
                          },
                          {
                            "type": "email",
                            "value": "tom.sawyer@capillarytech.com",
                            "primary": true,
                            "verified": true
                          }
                        ],
                        "source": "WECHAT",
                        "accountId": "WECHAT-CM"
                      }
                    ],
                    "extendedFields": {
                      "gender": "Male",
                      "city": "city_6878387"
                    },
                    "loyaltyInfo": {
                      "loyaltyType": "loyalty"
                    },
                    "referralCode": "",
                    "associationDetails": {
                      "hierarchyCode": "code-association2",
                      "roleCode": "FA",
                      "parentCustomer": {
                        "profiles": [
                          {
                            "firstName": "Jim",
                            "lastName": "Solace",
                            "identifiers": [
                              {
                                "type": "mobile",
                                "value": "919905000000"
                              },
                              {
                                "type": "cuid",
                                "value": "cuid_919905000000"
                              },
                              {
                                "type": "unionId",
                                "value": "unionId_919905000000"
                              }
                            ],
                            "commChannels": [
                              {
                                "type": "mobile",
                                "value": "919905000000",
                                "primary": true,
                                "verified": true
                              },
                              {
                                "type": "email",
                                "value": "tom.sawyer@capillarytech.com",
                                "primary": true,
                                "verified": true
                              }
                            ],
                            "source": "WECHAT",
                            "accountId": "WECHAT-CM"
                          }
                        ],
                        "extendedFields": {
                          "gender": "Male",
                          "city": "city_6878387"
                        }
                      },
                      "fleetCompany": {
                        "externalId": "ex917471000000"
                      }
                    }
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
                    "value": "[\n   {\n      \"profiles\":[\n         {\n            \"firstName\":\"Tom\",\n            \"lastName\":\"Sawyer\",\n            \"attribution\":{\n               \"createDate\":\"2021-08-03T17:05:38+05:30\",\n               \"createdBy\":{\n\n               },\n               \"modifiedBy\":{\n\n               },\n               \"modifiedDate\":\"2021-08-03T17:05:38+05:30\"\n            },\n            \"fields\":{\n\n            },\n            \"identifiers\":[\n               {\n                  \"type\":\"unionId\",\n                  \"value\":\"unionId_915905000000\"\n               },\n               {\n                  \"type\":\"cuid\",\n                  \"value\":\"cuid_915905000000\"\n               },\n               {\n                  \"type\":\"mobile\",\n                  \"value\":\"915905000000\"\n               }\n            ],\n            \"commChannels\":[\n               {\n                  \"type\":\"email\",\n                  \"value\":\"tom.sawyer@capillarytech.com\",\n                  \"primary\":true,\n                  \"verified\":true,\n                  \"meta\":{\n                     \"residence\":false,\n                     \"office\":false\n                  },\n                  \"attributes\":{\n\n                  }\n               },\n               {\n                  \"type\":\"mobile\",\n                  \"value\":\"915905000000\",\n                  \"primary\":true,\n                  \"verified\":true,\n                  \"meta\":{\n                     \"residence\":false,\n                     \"office\":false\n                  },\n                  \"attributes\":{\n\n                  }\n               }\n            ],\n            \"source\":\"WECHAT\",\n            \"accountId\":\"WECHAT-CM\",\n            \"conflictingProfileList\":[\n\n            ],\n            \"autoUpdateTime\":\"2021-08-03T17:05:38+05:30\",\n            \"identifiersAll\":[\n               {\n                  \"type\":\"unionId\",\n                  \"value\":\"unionId_915905000000\"\n               },\n               {\n                  \"type\":\"cuid\",\n                  \"value\":\"cuid_915905000000\"\n               },\n               {\n                  \"type\":\"mobile\",\n                  \"value\":\"915905000000\"\n               }\n            ]\n         }\n      ],\n      \"loyaltyInfo\":{\n         \"loyaltyType\":\"loyalty\"\n      },\n      \"segments\":{\n\n      },\n      \"referralCode\":\"\",\n      \"associationDetails\":{\n         \"hierarchyCode\":\"code-association2\",\n         \"roleCode\":\"FA\",\n         \"parentCustomer\":{\n            \"profiles\":[\n               {\n                  \"firstName\":\"Jim\",\n                  \"lastName\":\"Solace\",\n                  \"attribution\":{\n                     \"createDate\":\"2021-08-03T17:05:38+05:30\",\n                     \"createdBy\":{\n\n                     },\n                     \"modifiedBy\":{\n\n                     },\n                     \"modifiedDate\":\"2021-08-03T17:05:38+05:30\"\n                  },\n                  \"fields\":{\n\n                  },\n                  \"identifiers\":[\n                     {\n                        \"type\":\"cuid\",\n                        \"value\":\"cuid_919905000000\"\n                     },\n                     {\n                        \"type\":\"unionId\",\n                        \"value\":\"unionId_919905000000\"\n                     },\n                     {\n                        \"type\":\"mobile\",\n                        \"value\":\"919905000000\"\n                     }\n                  ],\n                  \"commChannels\":[\n                     {\n                        \"type\":\"mobile\",\n                        \"value\":\"919905000000\",\n                        \"primary\":true,\n                        \"verified\":true,\n                        \"meta\":{\n                           \"residence\":false,\n                           \"office\":false\n                        },\n                        \"attributes\":{\n\n                        }\n                     },\n                     {\n                        \"type\":\"email\",\n                        \"value\":\"919905000000@mail.com\",\n                        \"primary\":true,\n                        \"verified\":true,\n                        \"meta\":{\n                           \"residence\":false,\n                           \"office\":false\n                        },\n                        \"attributes\":{\n\n                        }\n                     }\n                  ],\n                  \"source\":\"WECHAT\",\n                  \"accountId\":\"WECHAT-CM\",\n                  \"conflictingProfileList\":[\n\n                  ],\n                  \"autoUpdateTime\":\"2021-08-03T17:05:38+05:30\",\n                  \"identifiersAll\":[\n                     {\n                        \"type\":\"cuid\",\n                        \"value\":\"cuid_919905000000\"\n                     },\n                     {\n                        \"type\":\"unionId\",\n                        \"value\":\"unionId_919905000000\"\n                     },\n                     {\n                        \"type\":\"mobile\",\n                        \"value\":\"919905000000\"\n                     }\n                  ]\n               }\n            ],\n            \"extendedFields\":{\n               \"city\":\"city_6878387\",\n               \"gender\":\"Male\"\n            }\n         },\n         \"fleetCompany\":{\n            \"externalId\":\"ex917471000000\"\n         },\n         \"skipLevelAllowed\":false,\n         \"new\":true,\n         \"childCustomer\":false\n      },\n      \"extendedFields\":{\n         \"city\":\"city_6878387\",\n         \"gender\":\"Male\"\n      },\n      \"errors\":[\n         {}\n      ]\n   }\n]"
                  }
                },
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "profiles": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "firstName": {
                              "type": "string",
                              "example": "Tom"
                            },
                            "lastName": {
                              "type": "string",
                              "example": "Sawyer"
                            },
                            "attribution": {
                              "type": "object",
                              "properties": {
                                "createDate": {
                                  "type": "string",
                                  "example": "2021-08-03T17:05:38+05:30"
                                },
                                "createdBy": {
                                  "type": "object",
                                  "properties": {}
                                },
                                "modifiedBy": {
                                  "type": "object",
                                  "properties": {}
                                },
                                "modifiedDate": {
                                  "type": "string",
                                  "example": "2021-08-03T17:05:38+05:30"
                                }
                              }
                            },
                            "fields": {
                              "type": "object",
                              "properties": {}
                            },
                            "identifiers": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "unionId"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": "unionId_915905000000"
                                  }
                                }
                              }
                            },
                            "commChannels": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "email"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": "tom.sawyer@capillarytech.com"
                                  },
                                  "primary": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "verified": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "meta": {
                                    "type": "object",
                                    "properties": {
                                      "residence": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "office": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      }
                                    }
                                  },
                                  "attributes": {
                                    "type": "object",
                                    "properties": {}
                                  }
                                }
                              }
                            },
                            "source": {
                              "type": "string",
                              "example": "WECHAT"
                            },
                            "accountId": {
                              "type": "string",
                              "example": "WECHAT-CM"
                            },
                            "conflictingProfileList": {
                              "type": "array"
                            },
                            "autoUpdateTime": {
                              "type": "string",
                              "example": "2021-08-03T17:05:38+05:30"
                            },
                            "identifiersAll": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "unionId"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": "unionId_915905000000"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "loyaltyInfo": {
                        "type": "object",
                        "properties": {
                          "loyaltyType": {
                            "type": "string",
                            "example": "loyalty"
                          }
                        }
                      },
                      "segments": {
                        "type": "object",
                        "properties": {}
                      },
                      "referralCode": {
                        "type": "string",
                        "example": ""
                      },
                      "associationDetails": {
                        "type": "object",
                        "properties": {
                          "hierarchyCode": {
                            "type": "string",
                            "example": "code-association2"
                          },
                          "roleCode": {
                            "type": "string",
                            "example": "FA"
                          },
                          "parentCustomer": {
                            "type": "object",
                            "properties": {
                              "profiles": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "firstName": {
                                      "type": "string",
                                      "example": "Jim"
                                    },
                                    "lastName": {
                                      "type": "string",
                                      "example": "Solace"
                                    },
                                    "attribution": {
                                      "type": "object",
                                      "properties": {
                                        "createDate": {
                                          "type": "string",
                                          "example": "2021-08-03T17:05:38+05:30"
                                        },
                                        "createdBy": {
                                          "type": "object",
                                          "properties": {}
                                        },
                                        "modifiedBy": {
                                          "type": "object",
                                          "properties": {}
                                        },
                                        "modifiedDate": {
                                          "type": "string",
                                          "example": "2021-08-03T17:05:38+05:30"
                                        }
                                      }
                                    },
                                    "fields": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "identifiers": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "cuid"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "cuid_919905000000"
                                          }
                                        }
                                      }
                                    },
                                    "commChannels": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "mobile"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "919905000000"
                                          },
                                          "primary": {
                                            "type": "boolean",
                                            "example": true,
                                            "default": true
                                          },
                                          "verified": {
                                            "type": "boolean",
                                            "example": true,
                                            "default": true
                                          },
                                          "meta": {
                                            "type": "object",
                                            "properties": {
                                              "residence": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              },
                                              "office": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              }
                                            }
                                          },
                                          "attributes": {
                                            "type": "object",
                                            "properties": {}
                                          }
                                        }
                                      }
                                    },
                                    "source": {
                                      "type": "string",
                                      "example": "WECHAT"
                                    },
                                    "accountId": {
                                      "type": "string",
                                      "example": "WECHAT-CM"
                                    },
                                    "conflictingProfileList": {
                                      "type": "array"
                                    },
                                    "autoUpdateTime": {
                                      "type": "string",
                                      "example": "2021-08-03T17:05:38+05:30"
                                    },
                                    "identifiersAll": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "cuid"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "cuid_919905000000"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "extendedFields": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string",
                                    "example": "city_6878387"
                                  },
                                  "gender": {
                                    "type": "string",
                                    "example": "Male"
                                  }
                                }
                              }
                            }
                          },
                          "fleetCompany": {
                            "type": "object",
                            "properties": {
                              "externalId": {
                                "type": "string",
                                "example": "ex917471000000"
                              }
                            }
                          },
                          "skipLevelAllowed": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "new": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "childCustomer": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          }
                        }
                      },
                      "extendedFields": {
                        "type": "object",
                        "properties": {
                          "city": {
                            "type": "string",
                            "example": "city_6878387"
                          },
                          "gender": {
                            "type": "string",
                            "example": "Male"
                          }
                        }
                      },
                      "errors": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {}
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