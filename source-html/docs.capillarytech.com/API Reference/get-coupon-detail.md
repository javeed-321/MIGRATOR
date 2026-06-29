> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Coupon details

This API allows you to retrieve the details of a specific coupon. You can get information such as coupon issued to, current coupon status, coupon redeemed date, and coupon validity.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|                        |             |
| :--------------------- | :---------- |
| URL                    | /coupon/get |
| HTTP Method            | GET         |
| Pagination             | No          |
| Batch support          | No          |
| Rate limit information | None        |

# API endpoint example

`https://eu.api.capillarytech.com/v1.1/coupon/get?issuedToIds=98662653&code=PT4I43YN,WL2ZBJZK&coupon_code_case=LOWER`

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameters
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `issuedToIds`
      </td>

      <td>
        Integer
      </td>

      <td>
        Pass the customer ID that you want to retrieve the coupon details from.
      </td>
    </tr>

    <tr>
      <td>
        `code`
      </td>

      <td>
        String
      </td>

      <td>
        Pass the coupon code that you want to retrieve. To retrieve details of multiple coupons, pass each code separated with a comma (`,`).
      </td>
    </tr>

    <tr>
      <td>
        `coupon_code_case`
      </td>

      <td>
        Enum
      </td>

      <td>
        This parameter helps retrieve the coupon code in the desired letter case. By default, the system converts the coupon code to upper case. The query itself is not case sensitive.
        **Supported values:**
        `LOWER`: Converts to lower case. \<br>
        `UPPER`: Converts to upper case. \<br>
        `AS_IT_IS`: Retrieves the code exactly as created.

        <br />

        For instance, if the code is "abAB123," it should be retrieved and displayed as "abAB123," maintaining its original formatting.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter          | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| id                 | Unique identifier of the coupon.                                           |
| code               | Coupon code.                                                               |
| valid\_till        | Expiration date of the coupon (`"DD-MM-YYYY"`).                            |
| issued\_on         | Timestamp when the coupon was issued (`"YYYY-MM-DD HH:MM:SS"`).            |
| valid\_from        | Start date of the coupon validity (`"YYYY-MM-DD HH:MM:SS"`).               |
| purpose            | Purpose or additional description of the coupon (may be blank).            |
| custom\_properties | Custom properties associated with the coupon.                              |
| name               | Name of a custom property.                                                 |
| value              | Value of the custom property.                                              |
| series\_id         | Unique identifier of the coupon series.                                    |
| is\_absolute       | Indicates if the coupon value is an absolute discount (true/false).        |
| value              | Value of the coupon (e.g., `10`).                                          |
| discount\_upto     | Maximum discount limit applicable with the coupon.                         |
| customer           | Information about the customer to whom the coupon was issued.              |
| id                 | Customer's unique identifier.                                              |
| name               | Customer's name.                                                           |
| mobile             | Customer's mobile number.                                                  |
| email              | Customer's email address.                                                  |
| external\_id       | External identifier for the customer.                                      |
| pincode            | Pincode associated with the coupon, if available.                          |
| item\_status       | Status information for the specific coupon processing.                     |
| success            | Status of the coupon processing.                                           |
| code               | Status code for the item-level processing (e.g., `700<code>, </code>705`). |
| message            | Message describing the coupon processing result.                           |
| redemption\_info   | Details regarding redemption if the coupon was redeemed.                   |
| redeemed           | Indicates whether the coupon was redeemed.                                 |
| id                 | Redemption ID.                                                             |
| redeemed\_on       | Timestamp when the coupon was redeemed (`"YYYY-MM-DD HH:MM:SS"`).          |
| redeemed\_at       | Store or location where the coupon was redeemed.                           |
| redeemed\_by       | Information about the person who redeemed the coupon.                      |
| store              | Store information where the coupon was redeemed.                           |
| transaction        | Transaction details for the coupon redemption.                             |
| issued\_store      | Store information where the coupon was originally issued.                  |

<br />

```json
{
    "response": {
        "status": {
            "success": "true",
            "status": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "coupon": [
                {
                    "id": "454473807",
                    "code": "WL2ZBJZK",
                    "valid_till": "08-03-2122",
                    "issued_on": "2022-05-30 18:10:48",
                    "valid_from": "2022-05-30 18:10:48",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": [
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": ""
                            }
                        ]
                    },
                    "series_id": 142654,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "pincode": "NULL",
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                },
                {
                    "id": "370179951",
                    "code": "PT4I43YN",
                    "valid_till": "10-07-2119",
                    "issued_on": "2021-05-17 19:06:03",
                    "valid_from": "2021-05-17 19:06:03",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": []
                    },
                    "series_id": 12313,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "Tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "redemption_info": {
                        "redeemed": "true",
                        "id": 4359526,
                        "redeemed_on": "2021-05-17 19:07:54",
                        "redeemed_at": "bukl.till",
                        "redeemed_by": {
                            "firstname": "Tom",
                            "lastname": "Hanks",
                            "email": "tom.hanks@capillarytech.com",
                            "mobile": "9944332266"
                        },
                        "store": {
                            "code": "bukl.till",
                            "name": "bukl.till"
                        },
                        "transaction": {
                            "id": null,
                            "bill_number": "ZDCsddfg"
                        }
                    },
                    "pincode": "NULL",
                    "issued_store": {
                        "code": "international_business_park",
                        "name": "International Business Park"
                    },
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                }
            ]
        }
    }
}
```
```json With coupon_code_case=LOWER
{
    "response": {
        "status": {
            "success": "true",
            "status": "true",
            "code": 200,
            "message": "Success"
        },
        "coupons": {
            "coupon": [
                {
                    "id": "454473807",
                    "code": "wl2zbjzk",
                    "valid_till": "08-03-2122",
                    "issued_on": "2022-05-30 18:10:48",
                    "valid_from": "2022-05-30 18:10:48",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": [
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": ""
                            }
                        ]
                    },
                    "series_id": 142654,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "pincode": "NULL",
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                },
                {
                    "id": -1,
                    "code": "WL2ZBJZK",
                    "is_absolute": false,
                    "value": null,
                    "discount_upto": null,
                    "pincode": "NULL",
                    "item_status": {
                        "success": "false",
                        "code": 705,
                        "message": "Both coupon code and validation code are invalid"
                    }
                },
                {
                    "id": -1,
                    "code": "PT4I43YN",
                    "is_absolute": false,
                    "value": null,
                    "discount_upto": null,
                    "pincode": "NULL",
                    "item_status": {
                        "success": "false",
                        "code": 705,
                        "message": "Both coupon code and validation code are invalid"
                    }
                },
                {
                    "id": "370179951",
                    "code": "pt4i43yn",
                    "valid_till": "10-07-2119",
                    "issued_on": "2021-05-17 19:06:03",
                    "valid_from": "2021-05-17 19:06:03",
                    "purpose": "",
                    "custom_properties": {
                        "custom_property": []
                    },
                    "series_id": 12313,
                    "is_absolute": true,
                    "value": 10,
                    "discount_upto": 0,
                    "customer": {
                        "id": "98662653",
                        "name": "Tom Hanks",
                        "mobile": "9944332266",
                        "email": "tom.hanks@capillarytech.com",
                        "external_id": null
                    },
                    "redemption_info": {
                        "redeemed": "true",
                        "id": 4359526,
                        "redeemed_on": "2021-05-17 19:07:54",
                        "redeemed_at": "bukl.till",
                        "redeemed_by": {
                            "firstname": "Tom",
                            "lastname": "Hanks",
                            "email": "tom.hanks@capillarytech.com",
                            "mobile": "9944332266"
                        },
                        "store": {
                            "code": "bukl.till",
                            "name": "bukl.till"
                        },
                        "transaction": {
                            "id": null,
                            "bill_number": "ZDCsddfg"
                        }
                    },
                    "pincode": "NULL",
                    "issued_store": {
                        "code": "international_business_park",
                        "name": "International Business Park"
                    },
                    "item_status": {
                        "success": "true",
                        "code": 700,
                        "message": "Coupon processing successful"
                    }
                }
            ]
        }
    }
}
```

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
    "/coupon/get": {
      "get": {
        "summary": "Get Coupon details",
        "description": "",
        "operationId": "get-coupon-detail",
        "parameters": [
          {
            "name": "issuedToIds",
            "in": "query",
            "description": "Pass the customer id that you want to retrieve the coupon details from.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "code",
            "in": "query",
            "description": "Pass the coupon code that you want to retrieve. To retrieve details of multiple coupons, pass each code separating with , (comma).",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "coupon_code_case",
            "in": "query",
            "description": "This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values: LOWER: Converts the coupon code to lower case. UPPER: Converts the coupon codes to upper case. AS_IT_IS: It ensure that the coupon code is retrieved exactly as it was created or provided, without altering the letter case. For instance, if the code is \"abAB123,\" it should be retrieved and displayed as \"abAB123,\" maintaining its original formatting.",
            "schema": {
              "type": "string",
              "enum": [
                ""
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\",\n            \"status\": \"true\",\n            \"code\": 200,\n            \"message\": \"Success\"\n        },\n        \"coupons\": {\n            \"coupon\": [\n                {\n                    \"id\": \"1296377532\",\n                    \"code\": \"ZLI0HZ0EGH\",\n                    \"valid_till\": \"09-05-2026\",\n                    \"issued_on\": \"2025-04-30 11:13:36\",\n                    \"valid_from\": \"2025-04-30 11:13:36\",\n                    \"purpose\": \"\",\n                    \"custom_properties\": {\n                        \"custom_property\": []\n                    },\n                    \"series_id\": 757291,\n                    \"is_absolute\": true,\n                    \"value\": 500,\n                    \"discount_upto\": 0,\n                    \"customer\": {\n                        \"id\": \"565039504\",\n                        \"name\": \"Tom Sawyer\",\n                        \"mobile\": \"919400488244\",\n                        \"email\": \"tom.sawyer@gmail.com\",\n                        \"external_id\": null\n                    },\n                    \"pincode\": \"NULL\",\n                    \"issued_store\": {\n                        \"code\": \"doc123\",\n                        \"name\": \"DocStore\"\n                    },\n                    \"item_status\": {\n                        \"success\": \"true\",\n                        \"code\": 700,\n                        \"message\": \"Coupon processing successful\"\n                    }\n                }\n            ]\n        }\n    }\n}"
                  },
                  "With coupon_code_case=LOWER": {
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\",\n            \"status\": \"true\",\n            \"code\": 200,\n            \"message\": \"Success\"\n        },\n        \"coupons\": {\n            \"coupon\": [\n                {\n                    \"id\": \"454473807\",\n                    \"code\": \"wl2zbjzk\",\n                    \"valid_till\": \"08-03-2122\",\n                    \"issued_on\": \"2022-05-30 18:10:48\",\n                    \"valid_from\": \"2022-05-30 18:10:48\",\n                    \"purpose\": \"\",\n                    \"custom_properties\": {\n                        \"custom_property\": [\n                            {\n                                \"name\": \"standard_image_3\",\n                                \"value\": \"\"\n                            },\n                            {\n                                \"name\": \"standard_terms_and_conditions\",\n                                \"value\": \"\"\n                            }\n                        ]\n                    },\n                    \"series_id\": 142654,\n                    \"is_absolute\": true,\n                    \"value\": 10,\n                    \"discount_upto\": 0,\n                    \"customer\": {\n                        \"id\": \"98662653\",\n                        \"name\": \"Tom Sawyer\",\n                        \"mobile\": \"9988776655\",\n                        \"email\": \"tom.sawyer@gmail.com\",\n                        \"external_id\": null\n                    },\n                    \"pincode\": \"NULL\",\n                    \"item_status\": {\n                        \"success\": \"true\",\n                        \"code\": 700,\n                        \"message\": \"Coupon processing successful\"\n                    }\n                },\n                {\n                    \"id\": -1,\n                    \"code\": \"WL2ZBJZK\",\n                    \"is_absolute\": false,\n                    \"value\": null,\n                    \"discount_upto\": null,\n                    \"pincode\": \"NULL\",\n                    \"item_status\": {\n                        \"success\": \"false\",\n                        \"code\": 705,\n                        \"message\": \"Both coupon code and validation code are invalid\"\n                    }\n                },\n                {\n                    \"id\": -1,\n                    \"code\": \"PT4I43YN\",\n                    \"is_absolute\": false,\n                    \"value\": null,\n                    \"discount_upto\": null,\n                    \"pincode\": \"NULL\",\n                    \"item_status\": {\n                        \"success\": \"false\",\n                        \"code\": 705,\n                        \"message\": \"Both coupon code and validation code are invalid\"\n                    }\n                },\n                {\n                    \"id\": \"370179951\",\n                    \"code\": \"pt4i43yn\",\n                    \"valid_till\": \"10-07-2119\",\n                    \"issued_on\": \"2021-05-17 19:06:03\",\n                    \"valid_from\": \"2021-05-17 19:06:03\",\n                    \"purpose\": \"\",\n                    \"custom_properties\": {\n                        \"custom_property\": []\n                    },\n                    \"series_id\": 12313,\n                    \"is_absolute\": true,\n                    \"value\": 10,\n                    \"discount_upto\": 0,\n                    \"customer\": {\n                        \"id\": \"98662653\",\n                        \"name\": \"Tom Sawyer\",\n                        \"mobile\": \"9988776655\",\n                        \"email\": \"tom.sawyer@gmail.com\",\n                        \"external_id\": null\n                    },\n                    \"redemption_info\": {\n                        \"redeemed\": \"true\",\n                        \"id\": 4359526,\n                        \"redeemed_on\": \"2021-05-17 19:07:54\",\n                        \"redeemed_at\": \"bukl.till\",\n                        \"redeemed_by\": {\n                            \"firstname\": \"Tom\",\n                            \"lastname\": \"Sawyer\",\n                            \"email\": \"tom.sawyer@gmail.com\",\n                            \"mobile\": \"9988776655\"\n                        },\n                        \"store\": {\n                            \"code\": \"bukl.till\",\n                            \"name\": \"bukl.till\"\n                        },\n                        \"transaction\": {\n                            \"id\": null,\n                            \"bill_number\": \"ZDCsddfg\"\n                        }\n                    },\n                    \"pincode\": \"NULL\",\n                    \"issued_store\": {\n                        \"code\": \"international_business_park\",\n                        \"name\": \"International Business Park\"\n                    },\n                    \"item_status\": {\n                        \"success\": \"true\",\n                        \"code\": 700,\n                        \"message\": \"Coupon processing successful\"\n                    }\n                }\n            ]\n        }\n    }\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
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
                                "status": {
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
                                  "example": "Success"
                                }
                              }
                            },
                            "coupons": {
                              "type": "object",
                              "properties": {
                                "coupon": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string",
                                        "example": "1296377532"
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "ZLI0HZ0EGH"
                                      },
                                      "valid_till": {
                                        "type": "string",
                                        "example": "09-05-2026"
                                      },
                                      "issued_on": {
                                        "type": "string",
                                        "example": "2025-04-30 11:13:36"
                                      },
                                      "valid_from": {
                                        "type": "string",
                                        "example": "2025-04-30 11:13:36"
                                      },
                                      "purpose": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "custom_properties": {
                                        "type": "object",
                                        "properties": {
                                          "custom_property": {
                                            "type": "array"
                                          }
                                        }
                                      },
                                      "series_id": {
                                        "type": "integer",
                                        "example": 757291,
                                        "default": 0
                                      },
                                      "is_absolute": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "value": {
                                        "type": "integer",
                                        "example": 500,
                                        "default": 0
                                      },
                                      "discount_upto": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "customer": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "string",
                                            "example": "565039504"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "Tom Sawyer"
                                          },
                                          "mobile": {
                                            "type": "string",
                                            "example": "919400488244"
                                          },
                                          "email": {
                                            "type": "string",
                                            "example": "tom.sawyer@gmail.com"
                                          },
                                          "external_id": {}
                                        }
                                      },
                                      "pincode": {
                                        "type": "string",
                                        "example": "NULL"
                                      },
                                      "issued_store": {
                                        "type": "object",
                                        "properties": {
                                          "code": {
                                            "type": "string",
                                            "example": "doc123"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "DocStore"
                                          }
                                        }
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
                                            "example": 700,
                                            "default": 0
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
                    {
                      "title": "With coupon_code_case=LOWER",
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
                                "status": {
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
                                  "example": "Success"
                                }
                              }
                            },
                            "coupons": {
                              "type": "object",
                              "properties": {
                                "coupon": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string",
                                        "example": "454473807"
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "wl2zbjzk"
                                      },
                                      "valid_till": {
                                        "type": "string",
                                        "example": "08-03-2122"
                                      },
                                      "issued_on": {
                                        "type": "string",
                                        "example": "2022-05-30 18:10:48"
                                      },
                                      "valid_from": {
                                        "type": "string",
                                        "example": "2022-05-30 18:10:48"
                                      },
                                      "purpose": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "custom_properties": {
                                        "type": "object",
                                        "properties": {
                                          "custom_property": {
                                            "type": "array",
                                            "items": {
                                              "type": "object",
                                              "properties": {
                                                "name": {
                                                  "type": "string",
                                                  "example": "standard_image_3"
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": ""
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "series_id": {
                                        "type": "integer",
                                        "example": 142654,
                                        "default": 0
                                      },
                                      "is_absolute": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "value": {
                                        "type": "integer",
                                        "example": 10,
                                        "default": 0
                                      },
                                      "discount_upto": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "customer": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "string",
                                            "example": "98662653"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "Tom Sawyer"
                                          },
                                          "mobile": {
                                            "type": "string",
                                            "example": "9988776655"
                                          },
                                          "email": {
                                            "type": "string",
                                            "example": "tom.sawyer@gmail.com"
                                          },
                                          "external_id": {}
                                        }
                                      },
                                      "pincode": {
                                        "type": "string",
                                        "example": "NULL"
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
                                            "example": 700,
                                            "default": 0
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/coupon/get?format=json&code=ZLI0HZ0EGH' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Basic dGlsbGF1dG9fMTIzOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw' \\\n--header 'X-CAP-DIRECT-REPLAY: FALSE' \\\n--header 'user-agent: pyapps_auto_API1_Incrm_Sanity' \\\n--header 'Cookie: _cfuvid=nwcc5s1jYk2s4g1lv.gdYW2B5ncSYe.HWyv3aFwEYrk-1745916355000-0.0.1.1-604800000'"
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