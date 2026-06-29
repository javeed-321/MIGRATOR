> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Redeem Coupon

This API allows you to redeem coupons issued to the loyalty customer. For all redeem coupon APIs event notification  is only initiated when a redemption request contains a single coupon. If the request includes multiple coupons, the event will not be triggered.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v1.1/coupon/redeem' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic bWFkaHVU2YQ==' \
--header 'Cookie: _cfuvid=n1F4JDvsnWvJO70uTvPplsrYQNylI_1WnW5hyjv7SmA-1759129564236-0.0.1.1-604800000' \
--data '{
  "root": {
    "coupon": [
      {
        "code": "UZHYF",
        "customer": {
          "mobile": "9999988886"//,
        //   "email": "testusertjone@gmail.com",
        //   "external_id": "0000011110"
        },
        // "custom_fields": {
        //   "field": [
        //     {
        //       "name": "Sport",
        //       "value": "Soccer"
        //     },
        //     {
        //       "name": "custom_field2",
        //       "value": "50"
        //     }
        //   ]
        // },
        "transaction": [
          {
            // "number": "test00transact068",
            "amount": "5000"
          }
        ]
      }
    ]
  }
}
'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                     |
| :------------ | :------------------ |
| URI           | /v1.1/coupon/redeem |
| HTTP method   | POST                |
| Pagination    | NA                  |
| Batch support | NA                  |

# Request body

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        customer
      </td>

      <td>
        obj
      </td>

      <td>
        Pass any registered identifier type.
        Supported identifiers:
        `mobile`, `email`, `id`, `external_id`, `card_number`, `card_external_id`
      </td>
    </tr>

    <tr>
      <td>
        code
      </td>

      <td>
        string
      </td>

      <td>
        Coupon code that need to be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        validation_code
      </td>

      <td>
        string
      </td>

      <td>
        Validation code is required for the orgs that use validation based redemption.
      </td>
    </tr>

    <tr>
      <td>
        number
      </td>

      <td>
        string
      </td>

      <td>
        Transaction number against which the coupon needs to be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        double
      </td>

      <td>
        Transaction amount against which the coupon is redeemed.
      </td>
    </tr>

    <tr>
      <td>
        custom_fields
      </td>

      <td>
        obj
      </td>

      <td>
        Coupon redemption level custom fields.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        string
      </td>

      <td>
        Name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        string
      </td>

      <td>
        Custom field value.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```curl Sample response
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "coupon": {
                "customer": {
                    "mobile": "919999988886",
                    "email": "testusertjone@gmail.com",
                    "external_id": "0000011110"
                },
                "redemption_id": "18956938",
                "code": "UZHYF",
                "discount_code": "uatNightly4",
                "series_code": "844312",
                "series_info": [],
                "is_absolute": "true",
                "coupon_value": "46389",
                "transaction": {
                    "amount": "5000.00",
                    "number": ""
                },
                "side_effects": [],
                "item_status": {
                    "success": "true",
                    "code": 700,
                    "message": "Coupon processing successful"
                }
            }
        }
    }
}
```

<br />

<br />

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
    "/coupon/redeem": {
      "post": {
        "summary": "Redeem Coupon",
        "description": "",
        "operationId": "redeem-coupon",
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
                "Sample POST Body": {
                  "value": {
                    "root": {
                      "coupon": [
                        {
                          "code": "06000041",
                          "customer": {
                            "mobile": "447700900000",
                            "email": "",
                            "external_id": "",
                            "card_number": ""
                          },
                          "custom_fields": {
                            "field": [
                              {
                                "name": "Sport",
                                "value": "Soccer"
                              },
                              {
                                "name": "custom_field2",
                                "value": "50"
                              }
                            ]
                          },
                          "transaction": [
                            {
                              "number": "bill-110",
                              "amount": "1000"
                            }
                          ]
                        }
                      ]
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
                  "Result": {
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success"
                        },
                        "coupons": {
                          "coupon": {
                            "customer": {
                              "mobile": "919999988886",
                              "email": "testusertjone@gmail.com",
                              "external_id": "0000011110"
                            },
                            "redemption_id": "18956938",
                            "code": "UZHYF",
                            "discount_code": "uatNightly4",
                            "series_code": "844312",
                            "series_info": [],
                            "is_absolute": "true",
                            "coupon_value": "46389",
                            "transaction": {
                              "amount": "5000.00",
                              "number": ""
                            },
                            "side_effects": [],
                            "item_status": {
                              "success": "true",
                              "code": 700,
                              "message": "Coupon processing successful"
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
                          "example": "Success"
                        }
                      }
                    },
                    "coupons": {
                      "type": "object",
                      "properties": {
                        "coupon": {
                          "type": "object",
                          "properties": {
                            "customer": {
                              "type": "object",
                              "properties": {
                                "mobile": {
                                  "type": "string",
                                  "example": "447700900000"
                                },
                                "email": {
                                  "type": "string",
                                  "example": "tom.sawyer@example.com"
                                },
                                "external_id": {
                                  "type": "string",
                                  "example": "ext_id7342762947"
                                }
                              }
                            },
                            "redemptionId": {
                              "type": "string",
                              "example": "4577842"
                            },
                            "code": {
                              "type": "string",
                              "example": "P7WNQWF4"
                            },
                            "discount_code": {
                              "type": "string",
                              "example": "XYZ123"
                            },
                            "series_code": {
                              "type": "string",
                              "example": "9076"
                            },
                            "series_info": {
                              "type": "array"
                            },
                            "is_absolute": {
                              "type": "string",
                              "example": "false"
                            },
                            "coupon_value": {
                              "type": "string",
                              "example": "10"
                            },
                            "transaction": {
                              "type": "object",
                              "properties": {
                                "amount": {
                                  "type": "string",
                                  "example": "1000.00"
                                },
                                "number": {
                                  "type": "string",
                                  "example": "numbr7342762947"
                                }
                              }
                            },
                            "side_effects": {
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
                                  "type": "string",
                                  "example": "700"
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Coupon processing successful"
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
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Error 696 - Redemption per coupon code limit exceeded": {
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"false\",\n            \"code\": 500,\n            \"message\": \"All requests have failed due to errors\"\n        },\n        \"coupons\": {\n            \"coupon\": {\n                \"customer\": {\n                    \"mobile\": \"919845807500\",\n                    \"email\": \"tom.sawyer@gmail.com\",\n                    \"external_id\": \"246852\"\n                },\n                \"code\": \"19IV52PS\",\n                \"is_absolute\": \"false\",\n                \"transaction\": {\n                    \"amount\": \"1000.00\",\n                    \"number\": \"bill-110\"\n                },\n                \"side_effects\": [],\n                \"item_status\": {\n                    \"success\": \"false\",\n                    \"code\": 696,\n                    \"message\": \"Redemption per coupon code limit has reached max limit\"\n                }\n            }\n        }\n    }\n}"
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
                              "example": "false"
                            },
                            "code": {
                              "type": "integer",
                              "example": 500,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "All requests have failed due to errors"
                            }
                          }
                        },
                        "coupons": {
                          "type": "object",
                          "properties": {
                            "coupon": {
                              "type": "object",
                              "properties": {
                                "customer": {
                                  "type": "object",
                                  "properties": {
                                    "mobile": {
                                      "type": "string",
                                      "example": "919845807500"
                                    },
                                    "email": {
                                      "type": "string",
                                      "example": "tom.sawyer@gmail.com"
                                    },
                                    "external_id": {
                                      "type": "string",
                                      "example": "246852"
                                    }
                                  }
                                },
                                "code": {
                                  "type": "string",
                                  "example": "19IV52PS"
                                },
                                "is_absolute": {
                                  "type": "string",
                                  "example": "false"
                                },
                                "transaction": {
                                  "type": "object",
                                  "properties": {
                                    "amount": {
                                      "type": "string",
                                      "example": "1000.00"
                                    },
                                    "number": {
                                      "type": "string",
                                      "example": "bill-110"
                                    }
                                  }
                                },
                                "side_effects": {
                                  "type": "array"
                                },
                                "item_status": {
                                  "type": "object",
                                  "properties": {
                                    "success": {
                                      "type": "string",
                                      "example": "false"
                                    },
                                    "code": {
                                      "type": "integer",
                                      "example": 696,
                                      "default": 0
                                    },
                                    "message": {
                                      "type": "string",
                                      "example": "Redemption per coupon code limit has reached max limit"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/coupon/redeem' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic bWFkaHVI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=n1F4JDvsnWvJO70uTvPplsrYQNylI_1WnW5hyjv7SmA-1759129564236-0.0.1.1-604800000' \\\n--data '{\n  \"root\": {\n    \"coupon\": [\n      {\n        \"code\": \"UZHYF\",\n        \"customer\": {\n          \"mobile\": \"9999988886\"//,\n        //   \"email\": \"testusertjone@gmail.com\",\n        //   \"external_id\": \"0000011110\"\n        },\n        // \"custom_fields\": {\n        //   \"field\": [\n        //     {\n        //       \"name\": \"Sport\",\n        //       \"value\": \"Soccer\"\n        //     },\n        //     {\n        //       \"name\": \"custom_field2\",\n        //       \"value\": \"50\"\n        //     }\n        //   ]\n        // },\n        \"transaction\": [\n          {\n            // \"number\": \"test00transact068\",\n            \"amount\": \"5000\"\n          }\n        ]\n      }\n    ]\n  }\n}\n'",
              "language": "shell",
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