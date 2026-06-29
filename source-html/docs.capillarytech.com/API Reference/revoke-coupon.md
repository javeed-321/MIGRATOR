> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Revoke coupon

This API allows you to revoke unredeemed coupons by using customer identifiers or using the associated coupon codes.

When revoking by coupon codes, a maximum of **50** codes can be revoked in a single API call.

When revoking by customer ID, mobile number, email, or external ID, the API can revoke up to **100** unredeemed coupons for a customer. If the customer has more than 100 unredeemed coupons, the API will return an error.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
> * Supports revocations for one coupon code without requiring the series ID. For more than one coupon code, the series ID is required.

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                   |
| :------------ | :---------------- |
| URI           | /v2/coupon/revoke |
| HTTP method   | POST              |
| Pagination    | NA                |
| Rate limit    | NA                |
| Batch support | NA                |

# API endpoint example

`https://eucrm.cc.capillarytech.com/v2/coupon/revoke`

# Request query parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        couponCodeCase
      </td>

      <td>
        Enum
      </td>

      <td>
        This parameter helps retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to uppercase. Supported Values: LOWER, UPPER, AS\_IT\_IS

        <br />

        **LOWER -** Converts the coupon code to lowercase. Example: "ABCD1234" → "abcd1234"

        <br />

        **UPPER -** Converts the coupon code to uppercase. Example: "abcd1234" → \`"ABCD1234"

        <br />

        **AS\_IT\_IS -** Returns the coupon code exactly as it was created. Example: "abAB123" → "abAB123"
      </td>
    </tr>
  </tbody>
</Table>

# Body parameter

| Parameter        | Datatype | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `couponSeriesId` | Integer  | The ID of the series the coupon belongs to.                                                                                                                                                                                                                                                                                                                                                                           |
| `customer`       | String   | The object contains the details of the customer. You can use `mobile`, `email`, customer id (`id`) or external id (`externalId`) of the customer.                                                                                                                                                                                                                                                                     |
| `couponCodes`    | String   | Unique identifier of the coupon. **NOTE** - Generic coupon codes are not supported for single revokes. - If multiple coupons are revoked in bulk using a coupon series ID, and a generic coupon code exists within the same series, all coupons, including the generic coupon code in that series, will be revoked. - A user ID must be provided when dealing with generic coupon series to ensure proper validation. |

```json Revoke coupon using mobile
{
  "couponSeriesId": 415446,
  "customer": {
    "mobile": "11223569865"
  }
}
```
```json Revoking coupons using coupon codes
{
  "couponSeriesId": 415446,
  "couponCodes": [
    "3138309782",
    "3636820421"
  ]
}
```
```json Revoke coupon using external ID
{
  "couponSeriesId": 415446,
  "customer": {
    "externalId": "000003873472"
  }
}
```
```json Revoke coupon using customer ID
{
  "couponSeriesId": 415446,
  "customer": {
    "id": "555567088"
  }
}
```
```json Revoke coupon using email
{
  "couponSeriesId": 415446,
  "customer": {
    "email": "Tomswayer@capillarytech.com"
  }
}
```

# Response parameters

| **Parameter**  | **Description**                                   |
| -------------- | ------------------------------------------------- |
| totalCount     | Total number of coupons involved in this process. |
| failedCount    | Number of failed attempt to revoke coupon.        |
| revokedCoupons | Array of details of revoked coupons.              |
| couponId       | Unique identifier of the revoked coupon.          |
| couponCode     | Coupon code associated with the revoked coupon.   |
| issuedToUserId | ID of the user to whom the coupon was issued.     |
| failedToRevoke | List of coupons that failed to be revoked.        |

```json Response: Revoking all coupon from series using mobile
{
    "entity": {
        "totalCount": 18,
        "failedCount": 0,
        "revokedCoupons": [
            {
                "couponId": 1239575840,
                "couponCode": "5500675094",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232284084,
                "couponCode": "1017790881",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787759,
                "couponCode": "3172276491",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787758,
                "couponCode": "9933776655",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305016,
                "couponCode": "1274893438",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263410,
                "couponCode": "3381625240",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263409,
                "couponCode": "4716726416",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787735,
                "couponCode": "9988776622",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263337,
                "couponCode": "4882381921",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263305,
                "couponCode": "5686061236",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263336,
                "couponCode": "2924713073",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1237263304,
                "couponCode": "3084294818",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305003,
                "couponCode": "9989776655",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1232305002,
                "couponCode": "4209752443",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575902,
                "couponCode": "9922334455",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239787736,
                "couponCode": "9977886655",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575903,
                "couponCode": "4204166326",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239575839,
                "couponCode": "9988776655",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Response: Revoking coupon  from series using coupon code
{
    "entity": {
        "totalCount": 2,
        "failedCount": 0,
        "revokedCoupons": [
            {
                "couponId": 1239817476,
                "couponCode": "3636820421",
                "issuedToUserId": 555567088
            },
            {
                "couponId": 1239817475,
                "couponCode": "3138309782",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Response: Revoking generic coupon code
{
    "entity": {
        "totalCount": 1,
        "failedCount": 0,
        "revokedCoupons": [
            {
                "couponId": 1247326281,
                "couponCode": "SALE20",
                "issuedToUserId": 555567088
            }
        ],
        "failedToRevoke": []
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Failure: Coupon not found
{
    "entity": {
        "totalCount": 3,
        "failedCount": 3,
        "revokedCoupons": [],
        "failedToRevoke": [
            {
                "errorCode": 682,
                "errorMessage": "Coupon not found ",
                "couponCodes": [
                    "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25",
                    "GQ7PTBRWBLJLFT7R775B1XMUS2QCRB83WS9HI1A8",
                    "CODE123"
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Partial success: Coupon not found and coupon code redeemed
{
       "status": 200,
       "totalCount": 5,
       "failedCount": 4,
       "hasMore": false,
       "revokedCoupons":
       [
           {
               "couponId": 1231,
               "couponCode": "SDDSDSDS",
               "issuedToUserId": 123132
           }
       ],
       "failedToRevoke":
       [
           {
               "errroCode": 404,
               "errorMessage": "Coupon code not found",
               "couponCodes":
               [
                   "CODE4",
                   "CODE5"
               ]
           },
           {
               "errrorCode": 405,
               "errorMessage": "Coupon code redeemed",
               "couponCodes":
               [
                   "CODE6",
                   "CODE7"
               ],
           }
       ]
   }
```
```json Partial Success: Coupon not found and coupon already revoked.
{
    "entity": {
        "totalCount": 3,
        "failedCount": 2,
        "revokedCoupons": [
            {
                "couponId": 24454630,
                "couponCode": "3H2G6OAGPAQ3FYMT5IO4ZNV49V21VEV05JBP6S3T",
                "issuedToUserId": 341612616
            }
        ],
        "failedToRevoke": [
            {
                "errorCode": 682,
                "errorMessage": "Coupon not found ",
                "couponCodes": [
                    "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25",
                    "CODE123"
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Failure: Generic Coupon Code are not supported
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 108,
            "message": "Unsupported coupons series config with client handling type GENERIC"
        }
    ],
    "success": false
}
```
```json Failure: Coupon series has expired.
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 712,
            "message": "Coupon Series / Campaign has expired"
        }
    ],
    "success": false
}
```
```json Failure: No coupon code or customer info is passed
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "CouponCode/s or customer info is mandatory"
        }
    ],
    "success": false
}
```

# API-specific error codes

| Error code | Description                                             |
| :--------- | :------------------------------------------------------ |
| 404        | Coupon code not found.                                  |
| 405        | Coupon code is already redeemed.                        |
| 682        | Coupon not found.                                       |
| 108        | GENERIC coupon code is not supported.                   |
| 712        | Coupon Series has expired                               |
| 756        | No coupon code or customer info is passed.              |
| 811        | Operation not supported for GENERIC\_REDEEMABLE series. |

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
    "/coupon/revoke": {
      "post": {
        "summary": "Revoke coupon",
        "description": "",
        "operationId": "revoke-coupon",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Revoking coupon  from series using coupon code": {
                    "value": "{\n    \"entity\": {\n        \"totalCount\": 2,\n        \"failedCount\": 0,\n        \"revokedCoupons\": [\n            {\n                \"couponId\": 1239817476,\n                \"couponCode\": \"3636820421\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239817475,\n                \"couponCode\": \"3138309782\",\n                \"issuedToUserId\": 555567088\n            }\n        ],\n        \"failedToRevoke\": []\n    },\n    \"warnings\": [],\n    \"errors\": [],\n    \"success\": true\n}"
                  },
                  "Revoking all coupon from series using mobile": {
                    "value": "{\n    \"entity\": {\n        \"totalCount\": 18,\n        \"failedCount\": 0,\n        \"revokedCoupons\": [\n            {\n                \"couponId\": 1239575840,\n                \"couponCode\": \"5500675094\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1232284084,\n                \"couponCode\": \"1017790881\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239787759,\n                \"couponCode\": \"3172276491\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239787758,\n                \"couponCode\": \"8654169058\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1232305016,\n                \"couponCode\": \"1274893438\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1237263410,\n                \"couponCode\": \"3381625240\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1237263409,\n                \"couponCode\": \"4716726416\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239787735,\n                \"couponCode\": \"6630418828\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1237263337,\n                \"couponCode\": \"4882381921\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1237263305,\n                \"couponCode\": \"5686061236\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1237263336,\n                \"couponCode\": \"2924713073\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1237263304,\n                \"couponCode\": \"3084294818\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1232305003,\n                \"couponCode\": \"8984115714\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1232305002,\n                \"couponCode\": \"4209752443\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239575902,\n                \"couponCode\": \"8873389069\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239787736,\n                \"couponCode\": \"8396455657\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239575903,\n                \"couponCode\": \"4204166326\",\n                \"issuedToUserId\": 555567088\n            },\n            {\n                \"couponId\": 1239575839,\n                \"couponCode\": \"6479258939\",\n                \"issuedToUserId\": 555567088\n            }\n        ],\n        \"failedToRevoke\": []\n    },\n    \"warnings\": [],\n    \"errors\": [],\n    \"success\": true\n}"
                  },
                  "Coupon not found": {
                    "value": "{\n    \"entity\": {\n        \"totalCount\": 3,\n        \"failedCount\": 3,\n        \"revokedCoupons\": [],\n        \"failedToRevoke\": [\n            {\n                \"errorCode\": 682,\n                \"errorMessage\": \"Coupon not found \",\n                \"couponCodes\": [\n                    \"V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25\",\n                    \"GQ7PTBRWBLJLFT7R775B1XMUS2QCRB83WS9HI1A8\",\n                    \"CODE123\"\n                ]\n            }\n        ]\n    },\n    \"warnings\": [],\n    \"errors\": [],\n    \"success\": true\n}"
                  },
                  "Partial failure: Coupon not found and coupon code redeemed": {
                    "value": "{\n       \"status\": 200,\n       \"totalCount\": 5,\n       \"failedCount\": 4,\n       \"hasMore\": false,\n       \"revokedCoupons\":\n       [\n           {\n               \"couponId\": 1231,\n               \"couponCode\": \"SDDSDSDS\",\n               \"issuedToUserId\": 123132\n           }\n       ],\n       \"failedToRevoke\":\n       [\n           {\n               \"errroCode\": 404,\n               \"errorMessage\": \"Coupon code not found\",\n               \"couponCodes\":\n               [\n                   \"CODE4\",\n                   \"CODE5\"\n               ]\n           },\n           {\n               \"errrorCode\": 405,\n               \"errorMessage\": \"Coupon code redeemed\",\n               \"couponCodes\":\n               [\n                   \"CODE6\",\n                   \"CODE7\"\n               ],\n           }\n       ]\n   }"
                  },
                  "Partial Failure: Coupon not found and coupon already revoked.": {
                    "value": "{\n    \"entity\": {\n        \"totalCount\": 3,\n        \"failedCount\": 2,\n        \"revokedCoupons\": [\n            {\n                \"couponId\": 24454630,\n                \"couponCode\": \"3H2G6OAGPAQ3FYMT5IO4ZNV49V21VEV05JBP6S3T\",\n                \"issuedToUserId\": 341612616\n            }\n        ],\n        \"failedToRevoke\": [\n            {\n                \"errorCode\": 682,\n                \"errorMessage\": \"Coupon not found \",\n                \"couponCodes\": [\n                    \"V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25\",\n                    \"CODE123\"\n                ]\n            }\n        ]\n    },\n    \"warnings\": [],\n    \"errors\": [],\n    \"success\": true\n}"
                  },
                  "Failure: Coupon series has expired.": {
                    "value": "{\n    \"warnings\": [],\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 712,\n            \"message\": \"Coupon Series / Campaign has expired\"\n        }\n    ],\n    \"success\": false\n}"
                  },
                  "Failure: No coupon code or customer info is passed": {
                    "value": "{\n    \"warnings\": [],\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 756,\n            \"message\": \"CouponCode/s or customer info is mandatory\"\n        }\n    ],\n    \"success\": false\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Revoking coupon  from series using coupon code",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "object",
                          "properties": {
                            "totalCount": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            },
                            "failedCount": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "revokedCoupons": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "couponId": {
                                    "type": "integer",
                                    "example": 1239817476,
                                    "default": 0
                                  },
                                  "couponCode": {
                                    "type": "string",
                                    "example": "3636820421"
                                  },
                                  "issuedToUserId": {
                                    "type": "integer",
                                    "example": 555567088,
                                    "default": 0
                                  }
                                }
                              }
                            },
                            "failedToRevoke": {
                              "type": "array"
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
                          "type": "array"
                        },
                        "success": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        }
                      }
                    },
                    {
                      "title": "Revoking all coupon from series using mobile",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "object",
                          "properties": {
                            "totalCount": {
                              "type": "integer",
                              "example": 18,
                              "default": 0
                            },
                            "failedCount": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "revokedCoupons": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "couponId": {
                                    "type": "integer",
                                    "example": 1239575840,
                                    "default": 0
                                  },
                                  "couponCode": {
                                    "type": "string",
                                    "example": "5500675094"
                                  },
                                  "issuedToUserId": {
                                    "type": "integer",
                                    "example": 555567088,
                                    "default": 0
                                  }
                                }
                              }
                            },
                            "failedToRevoke": {
                              "type": "array"
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
                          "type": "array"
                        },
                        "success": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        }
                      }
                    },
                    {
                      "title": "Coupon not found",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "object",
                          "properties": {
                            "totalCount": {
                              "type": "integer",
                              "example": 3,
                              "default": 0
                            },
                            "failedCount": {
                              "type": "integer",
                              "example": 3,
                              "default": 0
                            },
                            "revokedCoupons": {
                              "type": "array"
                            },
                            "failedToRevoke": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "errorCode": {
                                    "type": "integer",
                                    "example": 682,
                                    "default": 0
                                  },
                                  "errorMessage": {
                                    "type": "string",
                                    "example": "Coupon not found "
                                  },
                                  "couponCodes": {
                                    "type": "array",
                                    "items": {
                                      "type": "string",
                                      "example": "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
                          "type": "array"
                        },
                        "success": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        }
                      }
                    },
                    {
                      "title": "Partial Failure: Coupon not found and coupon already revoked.",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "object",
                          "properties": {
                            "totalCount": {
                              "type": "integer",
                              "example": 3,
                              "default": 0
                            },
                            "failedCount": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            },
                            "revokedCoupons": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "couponId": {
                                    "type": "integer",
                                    "example": 24454630,
                                    "default": 0
                                  },
                                  "couponCode": {
                                    "type": "string",
                                    "example": "3H2G6OAGPAQ3FYMT5IO4ZNV49V21VEV05JBP6S3T"
                                  },
                                  "issuedToUserId": {
                                    "type": "integer",
                                    "example": 341612616,
                                    "default": 0
                                  }
                                }
                              }
                            },
                            "failedToRevoke": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "errorCode": {
                                    "type": "integer",
                                    "example": 682,
                                    "default": 0
                                  },
                                  "errorMessage": {
                                    "type": "string",
                                    "example": "Coupon not found "
                                  },
                                  "couponCodes": {
                                    "type": "array",
                                    "items": {
                                      "type": "string",
                                      "example": "V6AUE8G5890V41TCRRKKRM1K18SNO2BUUW2FLJ25"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
                          "type": "array"
                        },
                        "success": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        }
                      }
                    },
                    {
                      "title": "Failure: Coupon series has expired.",
                      "type": "object",
                      "properties": {
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "status": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "code": {
                                "type": "integer",
                                "example": 712,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "Coupon Series / Campaign has expired"
                              }
                            }
                          }
                        },
                        "success": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        }
                      }
                    },
                    {
                      "title": "Failure: No coupon code or customer info is passed",
                      "type": "object",
                      "properties": {
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "status": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "code": {
                                "type": "integer",
                                "example": 756,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "CouponCode/s or customer info is mandatory"
                              }
                            }
                          }
                        },
                        "success": {
                          "type": "boolean",
                          "example": false,
                          "default": true
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
                  "Generic Coupon code is not supported": {
                    "value": "{\n  \"couponSeriesId\": 597437,\n  \"couponCodes\": [\n    \"DECATH10\"\n  ]\n}\n// This is a part of request body."
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "couponSeriesId": {
                      "type": "integer",
                      "example": 597437,
                      "default": 0
                    },
                    "couponCodes": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "example": "DECATH10"
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
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon/revoke?format=json' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Basic aWFtcblahblahZjhlMzRkNWI1YTI5MWY=' \\\n--header 'user-agent: pyapps_auto_API2_Nightly_Cc_test_revokedCouponForCustomer' \\\n--header 'Cookie: _cfuvid=HBlZPsPx7PKOGHv0qsvlFEAvayOtHrVn02EjUzvTU3I-1725346395691-0.0.1.1-604800000' \\\n--data '{\n  \"couponSeriesId\": 415446,\n  \"couponCodes\": [\n    \"3138309782\",\n    \"3636820421\"\n  ]\n}'"
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