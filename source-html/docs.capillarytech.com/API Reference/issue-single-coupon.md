> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Issue single coupon

This API allows you to issue a series of coupons to a customer, enabling them to redeem the coupons.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/coupon/issue' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=iUU642id2lwK4uBGHYKi7aKv0EaF6GgKEIXn1f._QJI-1768893329218-0.0.1.1-604800000' \
--data '{
    "seriesId": 868760,
    "customer": {
        "id": "",
        "mobile": "1234512345",
        "externalId": "",
        "email": ""
    }
}'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                  |
| :------------ | :--------------- |
| URI           | /v2/coupon/issue |
| HTTP method   | POST             |
| Pagination    | NA               |
| Batch support | NA               |

<br />

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/coupon/issue`

# Body parameter

| Field        | Type    | Required | Description                                                                |
| :----------- | :------ | :------- | :------------------------------------------------------------------------- |
| seriesId     | Integer | Yes      | Specifies the valid coupon series ID linked with the create coupon series. |
| customer     | Object  | Yes      | Defines the object containing customer details.                            |
| ..id         | Integer | Optional | Indicates the unique identifier for the customer.                          |
| ..mobile     | String  | Optional | Specifies the mobile number of the customer.                               |
| ..externalId | String  | Optional | Indicates an external identifier for the customer.                         |
| ..email      | String  | Optional | Specifies the email address of the customer.                               |

> 📘 Note
>
> Any one among the customer identifiers is mandatory.

# Example response

```curl Sample response
{
    "code": "5875447216353555",
    "seriesId": 868760,
    "description": "Gold star coupons",
    "discountCode": "gold1234",
    "validTill": "2026-06-11T00:00:00Z",
    "discountType": "ABS",
    "discountValue": 1000,
    "discountUpto": 0,
    "discountOn": "BILL",
    "detailedInfo": "Gold star coupons",
    "customer": {
        "id": 566881933,
        "profiles": [
            {
                "firstName": "Dead",
                "lastName": "fool",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "1234512345"
                    },
                    {
                        "type": "email",
                        "value": "dead.fool@capillarytech.com"
                    },
                    {
                        "type": "externalId",
                        "value": "12341234"
                    }
                ],
                "commChannels": [],
                "userId": 566881933,
                "accountId": "",
                "autoUpdateTime": "2025-10-09T06:45:52Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "1234512345"
                    },
                    {
                        "type": "email",
                        "value": "dead.fool@capillarytech.com"
                    },
                    {
                        "type": "externalId",
                        "value": "12341234"
                    }
                ]
            }
        ]
    },
    "redemptionCount": 0,
    "id": 0,
    "validTillDateTime": "2026-06-11T23:59:59Z",
    "warnings": []
}
```

# Response parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        code
      </td>

      <td>
        String
      </td>

      <td>
        The unique coupon code generated. This code is used for redeeming the coupon.
      </td>
    </tr>

    <tr>
      <td>
        seriesId
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique identifier for the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        String
      </td>

      <td>
        Description of the coupon.
      </td>
    </tr>

    <tr>
      <td>
        discountCode
      </td>

      <td>
        String
      </td>

      <td>
        This code is defined during the creation of the coupon series and is used as a POS identifier on member care. This will be used by the cashier at the Point of sale machine.
      </td>
    </tr>

    <tr>
      <td>
        validTill
      </td>

      <td>
        String
      </td>

      <td>
        Expiry date and time of the coupon in ISO 8601 format, returned in the server time zone.

        EU server example 2026-06-11T00:00:00Z → 11 June 2026, 00:00:00 (UTC)

        India server example 2026-06-11T05:30:00+05:30 → 11 June 2026, 05:30:00 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        validTillDateTime

        <br />
      </td>

      <td>
        string
      </td>

      <td>
        Specifies the exact expiry date and time of a coupon in ISO 8601 format, returned in the server time zone.

        EU server example 2026-06-11T23:59:59Z → 11 June 2026, 23:59:59 (UTC)

        India server example 2026-06-12T05:29:59+05:30 → 12 June 2026, 05:29:59 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        discountType
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the type of discount provided by the coupon. This is created during the creation of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        discountValue
      </td>

      <td>
        Integer
      </td>

      <td>
        The value of the discount. This is created during the creation of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        discountUpto
      </td>

      <td>
        Integer
      </td>

      <td>
        The maximum value up to which the discount can be applied. This is created during the creation of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        discountOn
      </td>

      <td>
        String
      </td>

      <td>
        The aspect on which the discount is applied. This is created during the creation of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        detailedInfo
      </td>

      <td>
        String
      </td>

      <td>
        Additional information about the coupon. This is created during the creation of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing customer details.
      </td>
    </tr>

    <tr>
      <td>
        customer.id
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique identifier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing profile details of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.firstName
      </td>

      <td>
        String
      </td>

      <td>
        The first name of the customer.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.lastName
      </td>

      <td>
        String
      </td>

      <td>
        The last name of the customer.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.fields
      </td>

      <td>
        Object
      </td>

      <td>
        Additional fields related to the profile.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.allFields
      </td>

      <td>
        Object
      </td>

      <td>
        All fields related to the profile.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.identifiers
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the details of customer identifiers.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.identifiers.type
      </td>

      <td>
        String
      </td>

      <td>
        Type of identifier. Supported values: mobile, externalId.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.identifiers.value
      </td>

      <td>
        String
      </td>

      <td>
        Value of the identifier.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.commChannels
      </td>

      <td>
        Objet
      </td>

      <td>
        Object containing the details of the mode of communication with the customer.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.userId
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique identifier of the customer.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.accountId
      </td>

      <td>
        String
      </td>

      <td>
        Account ID associated with the customer.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.autoUpdateTime
      </td>

      <td>
        String
      </td>

      <td>
        The date and time when the customer profile was last automatically updated, in ISO 8601 format, returned in the server time zone.

        EU server example 2025-10-09T06:45:52Z → 09 October 2025, 06:45:52 (UTC)

        India server example 2025-10-09T12:15:52+05:30 → 09 October 2025, 12:15:52 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.identifiersAll
      </td>

      <td>
        Object
      </td>

      <td>
        The object containing identifier objects of the profile.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.identifiersAll.type
      </td>

      <td>
        String
      </td>

      <td>
        Type of identifier. Supported values: mobile, externalId.
      </td>
    </tr>

    <tr>
      <td>
        customer.profiles.identifiersAll.value
      </td>

      <td>
        String
      </td>

      <td>
        Value of the identifier.
      </td>
    </tr>

    <tr>
      <td>
        redemptionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of times the coupon has been redeemed.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Integer
      </td>

      <td>
        ID generated for the issued coupon.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array of Strings
      </td>

      <td>
        The array of warning messages related to the coupon.
      </td>
    </tr>
  </tbody>
</Table>

```json 200OK
 {
    "code": "ICJE1X12P6",
    "seriesId": 544770,
    "description": "Festival coupon",
    "discountCode": "erg123",
    "validTill": "2026-05-09T00:00:00Z",
    "discountType": "ABS",
    "discountValue": 500.0,
    "discountUpto": 0.0,
    "discountOn": "BILL",
    "detailedInfo": "Evil coupon",
    "customer": {
        "id": 555567088,
        "profiles": [
            {
                "firstName": "Tom",
                "lastName": "Hills",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ],
                "commChannels": [],
                "userId": 555567088,
                "accountId": "",
                "autoUpdateTime": "2024-06-25T06:51:13Z",
                "identifiersAll": [
                    {
                        "type": "mobile",
                        "value": "11223569865"
                    },
                    {
                        "type": "externalId",
                        "value": "000003873472"
                    }
                ]
            }
        ]
    },
    "redemptionCount": 0,
    "id": 0,
    "warnings": []
}
```

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
    "/coupon/issue": {
      "post": {
        "summary": "Issue single coupon",
        "description": "",
        "operationId": "issue-single-coupon",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "seriesId"
                ],
                "properties": {
                  "seriesId": {
                    "type": "integer",
                    "description": "The unique identifier for the series.",
                    "format": "int32"
                  },
                  "customer": {
                    "properties": {
                      "id": {
                        "type": "integer",
                        "description": "The unique identifier for the customer.",
                        "format": "int32"
                      },
                      "mobile": {
                        "type": "string",
                        "description": "The mobile number of the customer."
                      },
                      "email": {
                        "type": "string",
                        "description": "The email ID of the customer."
                      },
                      "externalId": {
                        "type": "string",
                        "description": "The external ID of the customer."
                      },
                      "cardNumber": {
                        "type": "string",
                        "description": "Card number of the customer."
                      },
                      "cardExternalId": {
                        "type": "string",
                        "description": "Card external ID of the customer."
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Object containing customer details."
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
                    "value": {
                      "code": "5875447216353555",
                      "seriesId": 868760,
                      "description": "Gold star coupons",
                      "discountCode": "gold1234",
                      "validTill": "2026-06-11T00:00:00Z",
                      "discountType": "ABS",
                      "discountValue": 1000,
                      "discountUpto": 0,
                      "discountOn": "BILL",
                      "detailedInfo": "Gold star coupons",
                      "customer": {
                        "id": 566881933,
                        "profiles": [
                          {
                            "firstName": "Dead",
                            "lastName": "fool",
                            "fields": {},
                            "allFields": {},
                            "identifiers": [
                              {
                                "type": "mobile",
                                "value": "1234512345"
                              },
                              {
                                "type": "email",
                                "value": "dead.fool@capillarytech.com"
                              },
                              {
                                "type": "externalId",
                                "value": "12341234"
                              }
                            ],
                            "commChannels": [],
                            "userId": 566881933,
                            "accountId": "",
                            "autoUpdateTime": "2025-10-09T09:06:07Z",
                            "identifiersAll": [
                              {
                                "type": "mobile",
                                "value": "1234512345"
                              },
                              {
                                "type": "email",
                                "value": "dead.fool@capillarytech.com"
                              },
                              {
                                "type": "externalId",
                                "value": "12341234"
                              }
                            ]
                          }
                        ]
                      },
                      "redemptionCount": 0,
                      "id": 0,
                      "validTillDateTime": "2026-06-11T23:59:59Z",
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "code": {
                      "type": "string",
                      "example": "ICJE1X12P6"
                    },
                    "seriesId": {
                      "type": "integer",
                      "example": 544770,
                      "default": 0
                    },
                    "description": {
                      "type": "string",
                      "example": "Festival coupon"
                    },
                    "discountCode": {
                      "type": "string",
                      "example": "erg123"
                    },
                    "validTill": {
                      "type": "string",
                      "example": "2026-05-09T00:00:00Z"
                    },
                    "discountType": {
                      "type": "string",
                      "example": "ABS"
                    },
                    "discountValue": {
                      "type": "integer",
                      "example": 500,
                      "default": 0
                    },
                    "discountUpto": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "discountOn": {
                      "type": "string",
                      "example": "BILL"
                    },
                    "detailedInfo": {
                      "type": "string",
                      "example": "Evil coupon"
                    },
                    "customer": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 555567088,
                          "default": 0
                        },
                        "profiles": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "firstName": {
                                "type": "string",
                                "example": "Abijith"
                              },
                              "lastName": {
                                "type": "string",
                                "example": "Guptha"
                              },
                              "fields": {
                                "type": "object",
                                "properties": {}
                              },
                              "allFields": {
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
                                      "example": "mobile"
                                    },
                                    "value": {
                                      "type": "string",
                                      "example": "11223569865"
                                    }
                                  }
                                }
                              },
                              "commChannels": {
                                "type": "array"
                              },
                              "userId": {
                                "type": "integer",
                                "example": 555567088,
                                "default": 0
                              },
                              "accountId": {
                                "type": "string",
                                "example": ""
                              },
                              "autoUpdateTime": {
                                "type": "string",
                                "example": "2024-06-25T06:51:13Z"
                              },
                              "identifiersAll": {
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
                                      "example": "11223569865"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "redemptionCount": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "id": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
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
              "code": "{\n\"seriesId\":544770,\n\"customer\":\n\n{ \n    \"id\":555567088, \n    \"mobile\":\"\", \n    \"externalId\":\"\", \n    \"email\":\"\" \n}\n}",
              "name": "Sample POST Body"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon/issue' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic fgsdsMjI2MTk1OGE2NWI5ZAxMzU5NGIwNDllZTk=' \\\n--header 'Cookie: _cfuvid=.YOC7HL19ecyDtnq72DtV3v_JT3ad47TBgP6cZcEnJU-1760000515077-0.0.1.1-604800000' \\\n--data '{\n    \"seriesId\": 868760,\n    \"customer\": {\n        \"id\": \"\",\n        \"mobile\": \"1234512345\",\n        \"externalId\": \"\",\n        \"email\": \"\"\n    }\n}'",
              "language": "shell",
              "name": "Sample request"
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