> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Issue multiple coupons to a customer from a series

Using this API, you can issue multiple coupons from a coupon series to the same customer by defining the quantity of coupons.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                           |
| :------------ | :------------------------ |
| URI           | /v2/coupon/issue/multiple |
| HTTP method   | POST                      |
| Pagination    | NA                        |
| Batch support | Yes                       |

<br />

# API endpoint example

`https://eu.api.capillarytech.com/v2/coupon/issue/multiple`

# Request body parameters

| **Parameter**    | **Datatype** | **Required** | Description                                                                                                                                                                                                            |    |
| :--------------- | :----------- | :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :- |
| seriesIds\*      | Integer      | Yes          | Series ID of coupon. You can get the Series ID from this [API](https://docs.capillarytech.com/reference/create-coupon-series). Externally managed/third party coupons are not supported.                               |    |
| count\*          | Integer      | Yes          | Number of coupons to be issued from the series. **NOTE:** Maximum coupons that can be issued is 500. If the count is not specified, by default it will take 1.                                                         |    |
| customer\*       | Object       | Yes          | The object containing the details of the customer. You can use mobile, email or external id of the customer.                                                                                                           |    |
| metadata         | Object       | Optional     | Defines tracking and auditing information for the coupon issuance.                                                                                                                                                     |    |
| ..sourceType     | String       | Optional     | Specifies the category of the source initiating the issuance (e.g., Journeys, Promotions, POS, API). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 50.                    |    |
| ..sourceId       | String       | Optional     | Indicates the unique reference ID of the source entity (e.g., Journey block ID, rule name, external workflow ID). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 50.       |    |
| ..sourceActivity | String       | Optional     | Indicates the specific event or activity that triggered the issuance (e.g., Tier upgrade, Milestone completion). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 50.        |    |
| ..notes          | String       | Optional     | Specifies additional comments or operational notes regarding the issuance (e.g., issued as part of a migration batch). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 250. |    |
| ..reason         | String       | Optional     | Specifies the business justification for issuing the coupons (e.g., tier upgrade benefit, service recovery). Supports alphanumeric characters, spaces, and special characters up to a maximum length of 250.           |    |

```json With Mobile
{
    "seriesId": 415446,
    "count": 2,
    "customer": {
        "mobile": "11223569865"
    }
}
```
```json With Email
{
    "seriesId": 415446,
    "count": 2,
    "customer": {
        "email": "Tomhills@captech.com"
    }
}
```
```json With External ID
{
    "seriesId": 18426,
    "count": 2,
    "customer": {
        "externalId": "3873472"
    }
}
```

# Response parameters

| **Parameters**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                        |
| :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| coupons                                | List of coupons issued.                                                                                                                                                                                                                                                                                                                                                                                |
| coupons.code                           | Code of the coupon.                                                                                                                                                                                                                                                                                                                                                                                    |
| coupons.couponId                       | ID of the coupon.                                                                                                                                                                                                                                                                                                                                                                                      |
| couponConfig                           | Configuration details of the coupon.                                                                                                                                                                                                                                                                                                                                                                   |
| couponConfig.customPropertyMap         | Custom properties of the coupon.                                                                                                                                                                                                                                                                                                                                                                       |
| couponConfig.id                        | ID of the coupon configuration.                                                                                                                                                                                                                                                                                                                                                                        |
| couponConfig.description               | Description of the coupon configuration.                                                                                                                                                                                                                                                                                                                                                               |
| couponConfig.discountCode              | Discount code associated with the coupon.                                                                                                                                                                                                                                                                                                                                                              |
| couponConfig.info                      | Information about the coupon configuration.                                                                                                                                                                                                                                                                                                                                                            |
| couponConfig.discountUpto              | Maximum discount value.                                                                                                                                                                                                                                                                                                                                                                                |
| couponConfig.discountValue             | Value of the discount.                                                                                                                                                                                                                                                                                                                                                                                 |
| couponConfig.issueToLoyalty            | Indicates if the coupon is issued to a loyalty program.                                                                                                                                                                                                                                                                                                                                                |
| couponConfig.numUploadedNonIssued      | Number of non-issued uploaded coupons.                                                                                                                                                                                                                                                                                                                                                                 |
| couponConfig.numUploadedTotal          | Total number of uploaded coupons.                                                                                                                                                                                                                                                                                                                                                                      |
| couponConfig.redemptionValidAfterDays  | Days after which the coupon is valid for redemption.                                                                                                                                                                                                                                                                                                                                                   |
| couponConfig.ownerId                   | ID of the coupon owner.                                                                                                                                                                                                                                                                                                                                                                                |
| couponConfig.ownerValidity             | Validity period of the coupon owner.                                                                                                                                                                                                                                                                                                                                                                   |
| couponConfig.alphaNumeric              | Indicates if the coupon code is alphanumeric.                                                                                                                                                                                                                                                                                                                                                          |
| couponConfig.shortCodeLength           | Length of the short code.                                                                                                                                                                                                                                                                                                                                                                              |
| couponConfig.randomCodeLength          | Length of the random code.                                                                                                                                                                                                                                                                                                                                                                             |
| couponConfig.fixedExpiryDate           | Fixed expiry date of the coupon.                                                                                                                                                                                                                                                                                                                                                                       |
| couponConfig.numTotal                  | Total number of coupons.                                                                                                                                                                                                                                                                                                                                                                               |
| couponConfig.latestIssualTime          | Timestamp of the latest coupon issuance.                                                                                                                                                                                                                                                                                                                                                               |
| couponConfig.latestRedemptionTime      | Timestamp of the latest coupon redemption.                                                                                                                                                                                                                                                                                                                                                             |
| couponConfig.discountOn                | Indicates what the discount applies to (e.g., BILL).                                                                                                                                                                                                                                                                                                                                                   |
| couponConfig.discountType              | Type of discount.                                                                                                                                                                                                                                                                                                                                                                                      |
| couponConfig.externalIssual            | Indicates if the coupon is issued externally.                                                                                                                                                                                                                                                                                                                                                          |
| couponConfig.updateProductData         | Indicates if product data is updated.                                                                                                                                                                                                                                                                                                                                                                  |
| customer                               | Customer details.                                                                                                                                                                                                                                                                                                                                                                                      |
| customer.id                            | ID of the customer.                                                                                                                                                                                                                                                                                                                                                                                    |
| totalCount                             | The total number of coupons that were attempted to be issued                                                                                                                                                                                                                                                                                                                                           |
| failureCount                           | The number of coupons that failed to be issued                                                                                                                                                                                                                                                                                                                                                         |
| successCount                           | The number of coupons that were successfully issued                                                                                                                                                                                                                                                                                                                                                    |
| customer.profiles.lastName             | Last name of the customer.                                                                                                                                                                                                                                                                                                                                                                             |
| customer.profiles.fields               | Custom fields of the customer profile.                                                                                                                                                                                                                                                                                                                                                                 |
| customer.profiles.allFields            | All fields of the customer profile.                                                                                                                                                                                                                                                                                                                                                                    |
| customer.profiles.identifiers          | List of customer identifiers.                                                                                                                                                                                                                                                                                                                                                                          |
| customer.profiles.identifiers.type     | Type of the identifier (e.g., email, mobile, external id.etc).                                                                                                                                                                                                                                                                                                                                         |
| customer.profiles.identifiers.value    | Value of the identifier.                                                                                                                                                                                                                                                                                                                                                                               |
| customer.profiles.commChannels         | Communication channels of the customer.                                                                                                                                                                                                                                                                                                                                                                |
| customer.profiles.userId               | User ID associated with the customer profile.                                                                                                                                                                                                                                                                                                                                                          |
| customer.profiles.accountId            | Account ID associated with the customer profile.                                                                                                                                                                                                                                                                                                                                                       |
| customer.profiles.autoUpdateTime       | Timestamp of the last auto-update of the customer profile in ISO 8601 format, returned in the server time zone. EU server example: `2025-10-09T06:45:52Z` → 09 October 2025, 06:45:52 (UTC). India server example: `2025-10-09T12:15:52+05:30` → 09 October 2025, 12:15:52 (IST). Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request. |
| customer.profiles.identifiersAll       | List of all identifiers of the customer profile.                                                                                                                                                                                                                                                                                                                                                       |
| customer.profiles.identifiersAll.type  | Type of the identifier (e.g., email, mobile, external id).                                                                                                                                                                                                                                                                                                                                             |
| customer.profiles.identifiersAll.value | Value of the identifier.                                                                                                                                                                                                                                                                                                                                                                               |
| errors                                 | List of errors.                                                                                                                                                                                                                                                                                                                                                                                        |
| warnings                               | List of warnings.                                                                                                                                                                                                                                                                                                                                                                                      |

```json Success response with automatically generated code and Coupon uploaded through Capillary
{
    "coupons": [
        {
            "code": "3084294818",
            "couponId": 1237263304
        },
        {
            "code": "5686061236",
            "couponId": 1237263305
        }
    ],
    "couponConfig": {
        "customPropertyMap": {},
        "id": 0,
        "description": "IKEA - 500KW Voucher ",
        "discountCode": "NO_VALUE",
        "info": "IKEA - 500KW Voucher ",
        "discountUpto": 0,
        "discountValue": 500,
        "issueToLoyalty": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownerId": 0,
        "ownerValidity": 0,
        "alphaNumeric": false,
        "shortCodeLength": 0,
        "randomCodeLength": 0,
        "fixedExpiryDate": 0,
        "numTotal": 0,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "discountOn": "BILL",
        "discountType": "ABS",
        "externalIssual": false,
        "updateProductData": false
    },
    "totalCount": 2,
    "failureCount": 0,
    "successCount": 2,
    "customer": {
        "id": 555567088,
        "profiles": [
            {
                "firstName": "Abijith",
                "lastName": "Gupta",
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
                "autoUpdateTime": "2024-08-20T09:57:15Z",
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
    "errors": [],
    "warnings": []
}
```
```json Success response With generic coupon code
{
    "coupons": [
        {
            "code": "DECATH10",
            "couponId": 1239821361
        }
    ],
    "couponConfig": {
        "customPropertyMap": {},
        "id": 0,
        "description": "10% off Decathlon Products",
        "discountCode": "NO_VALUE",
        "info": "10% off Decathlon Prodcuts",
        "discountUpto": 0,
        "discountValue": 100,
        "issueToLoyalty": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownerId": 0,
        "ownerValidity": 0,
        "alphaNumeric": false,
        "shortCodeLength": 0,
        "randomCodeLength": 0,
        "fixedExpiryDate": 0,
        "numTotal": 0,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "discountOn": "BILL",
        "discountType": "ABS",
        "externalIssual": false,
        "updateProductData": false
    },
    "totalCount": 1,
    "failureCount": 0,
    "successCount": 1,
    "customer": {
        "id": 555567088,
        "profiles": [
            {
                "firstName": "Abijith",
                "lastName": "Gupta",
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
                "autoUpdateTime": "2024-09-03T10:13:55Z",
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
    "errors": [],
    "warnings": []
}
```
```json Invalid Coupon Series ID
{
    "errors": [
        {
            "status": false,
            "code": 707,
            "message": "Coupon Series ID is invalid"
        }
    ]
}
```
```json Invalid Coupon Count
{
    "errors": [
        {
            "status": false,
            "code": 677,
            "message": "Invalid coupon count. Minimum 1 and Maximum 500."
        }
    ]
}
```
```json Could not find customer
{
    "errors": [
        {
            "status": false,
            "code": 701,
            "message": "The customer could not be found. Please check mobile, email, external id passed"
        }
    ]
}
```
```json Partial Success
{
    "coupons": [
        {
            "code": "2YQWCWQXZ6NTMTAJLCXNP1T6CYMN",
            "couponId": 96004050
        }
    ],
    "couponConfig": {
        "customPropertyMap": {},
        "id": 0,
        "description": "Only 1 issual",
        "discountCode": "NO_VALUE",
        "info": "Only 1 issual",
        "discountUpto": 0,
        "discountValue": 1,
        "issueToLoyalty": false,
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownerId": 0,
        "ownerValidity": 0,
        "alphaNumeric": false,
        "shortCodeLength": 0,
        "randomCodeLength": 0,
        "fixedExpiryDate": 0,
        "numTotal": 0,
        "latestIssualTime": 0,
        "latestRedemptionTime": 0,
        "discountOn": "BILL",
        "discountType": "ABS",
        "updateProductData": false,
        "externalIssual": false
    },
    "totalCount": 2,
    "failureCount": 1,
    "successCount": 1,
    "customer": {
        "id": 374658850,
        "profiles": [
            {
                "firstName": "plerthprth",
                "lastName": "gmmlzilbpg",
                "fields": {},
                "allFields": {},
                "identifiers": [
                    {
                        "type": "email",
                        "value": "Tomhills@mail.com"
                    },
                    {
                        "type": "mobile",
                        "value": "918028464628"
                    },
                    {
                        "type": "externalId",
                        "value": "x918028464628"
                    }
                ],
                "commChannels": [],
                "userId": 374658850,
                "accountId": "",
                "autoUpdateTime": "2024-08-01T12:42:46+05:30",
                "identifiersAll": [
                    {
                        "type": "email",
                        "value": "Tomhills@mail.com"
                    },
                    {
                        "type": "mobile",
                        "value": "918028464628"
                    },
                    {
                        "type": "externalId",
                        "value": "x918028464628"
                    }
                ]
            }
        ]
    },
    "errors": [
        {
            "status": false,
            "code": 5004,
            "message": "Issue only one coupon. Since isAllowMultipleVouchersPerUser=false."
        }
    ],
    "warnings": []
}

```
```json Expired Coupon or coupon series
{
    "errors": [
        {
            "status": false,
            "message": "Coupon has expired",
            "code": 713
        }
    ]
}

```
```json Coupon Processing Failed
{
    "errors": [
        {
            "status": false,
            "message": "Coupon processing failed: user already has a coupon",
            "code": 709
        }
    ]
}

```
```json Series ID is mandatory
{
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "seriesId is mandatory to set"
        }
    ]
}

```
```json One generic coupon can be issued
    "errors": [
        {
            "status": false,
            "code": 5004,
            "message": "Cannot issue more than one GENERIC coupon code."
        }
    ],
    "warnings": []
}
```
```json Count should be greater than 0
{
    "errors": [
        {
            "status": false,
            "code": 756,
            "message": "count should be greater than 0"
        }
    ]
}
```
```json With multiple series ID
{
    "seriesId": [415446,535521],
    "count": 2,
    "customer": {
        "mobile": "11223569865"
    }
}
//This is a part of request body.
```
```json Maximum coupon count from series exceeded for a user
    "errors": [
        {
            "status": false,
            "code": 5002,
            "message": "max coupon per user exceeded"
        }
    ],
    "warnings": []
}
```

# API-specific error and warning codes

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Warning Error Code (Partial Success*)
      </th>

      <th>
        Error code
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        * <br />
      </td>

      <td>
        701
      </td>

      <td>
        The customer could not be found. Check if mobile, email, external id entered correctly.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        707
      </td>

      <td>
        Coupon Series ID is invalid.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        709
      </td>

      <td>
        Coupon processing failed as user already has a coupon.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        713
      </td>

      <td>
        Coupon has expired.
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        756
      </td>

      <td>
        SeriesId is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        679
      </td>

      <td>
        5004
      </td>

      <td>
        Cannot issue more than one GENERIC coupon code or Issue only one coupon. This error occurs when the[ Maximum issuals per customer](https://docs.capillarytech.com/docs/offer-advanced-settings#issual--reminder-settings) is set to 1.
      </td>
    </tr>

    <tr>
      <td>
        626
      </td>

      <td>
        5001
      </td>

      <td>
        Maximum number of series has been created.
      </td>
    </tr>

    <tr>
      <td>
        621
      </td>

      <td>
        5002
      </td>

      <td>
        Maximum number of coupon issued per user has been exceeded
      </td>
    </tr>

    <tr>
      <td>
        702
      </td>

      <td>
        5005
      </td>

      <td>
        Queue is empty for series. This error happens on the backend because of system caching issues.
      </td>
    </tr>

    <tr>
      <td>
        678
      </td>

      <td>
        5006
      </td>

      <td>
        Unable to issue certain number of coupons
      </td>
    </tr>
  </tbody>
</Table>

\*\*\*\*\*Partial Success - This occurs when only some coupons are issued, while the rest are not issued due to certain reasons.

# Coupon Series Exhaustion

When all coupons in a coupon series have been issued (for example, after all manually uploaded coupons are distributed), the system enforces a fixed limit and prevents any further coupon issuance or redemption attempts from that series. If a redemption or issuance is attempted after the series is exhausted, the request will fail, and an appropriate error message will be returned. To continue issuing coupons, you must upload additional coupons to the series or create a new coupon series.

**Note:** Always ensure that your coupon series contains enough coupons to fulfill expected issuance or redemption volumes. Monitor the available coupon count in each series to avoid unexpected failures due to series exhaustion.

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
    "/coupon/issue/multiple": {
      "post": {
        "summary": "Issue multiple coupons to a customer from a series",
        "description": "",
        "operationId": "issue-bulk-coupon-with-count-from-series",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"coupons\": [\n        {\n            \"code\": \"FS1ANFYVQ4\",\n            \"couponId\": 1294366536\n        },\n        {\n            \"code\": \"85AMQDNC4Z\",\n            \"couponId\": 1294366537\n        }\n    ],\n    \"couponConfig\": {\n        \"customPropertyMap\": {},\n        \"id\": 0,\n        \"description\": \"20% Off for Random Reason\",\n        \"discountCode\": \"Random20\",\n        \"info\": \"20% off on everything for Random Reason 2\",\n        \"discountUpto\": 0,\n        \"discountValue\": 1000,\n        \"issueToLoyalty\": false,\n        \"numUploadedNonIssued\": 0,\n        \"numUploadedTotal\": 0,\n        \"redemptionValidAfterDays\": 0,\n        \"ownerId\": 0,\n        \"ownerValidity\": 0,\n        \"alphaNumeric\": false,\n        \"shortCodeLength\": 0,\n        \"randomCodeLength\": 0,\n        \"fixedExpiryDate\": 0,\n        \"numTotal\": 0,\n        \"latestIssualTime\": 0,\n        \"latestRedemptionTime\": 0,\n        \"discountOn\": \"BILL\",\n        \"discountType\": \"ABS\",\n        \"externalIssual\": false,\n        \"updateProductData\": false\n    },\n    \"totalCount\": 2,\n    \"failureCount\": 0,\n    \"successCount\": 2,\n    \"customer\": {\n        \"id\": 564703252,\n        \"profiles\": [\n            {\n                \"firstName\": \"Tjuser\",\n                \"lastName\": \"Eightysix\",\n                \"fields\": {},\n                \"allFields\": {},\n                \"identifiers\": [\n                    {\n                        \"type\": \"externalId\",\n                        \"value\": \"0000011110\"\n                    },\n                    {\n                        \"type\": \"mobile\",\n                        \"value\": \"919999988886\"\n                    },\n                    {\n                        \"type\": \"email\",\n                        \"value\": \"tom.sawyer@capillarytech.com\"\n                    }\n                ],\n                \"commChannels\": [],\n                \"userId\": 564703252,\n                \"accountId\": \"\",\n                \"autoUpdateTime\": \"2025-04-22T05:18:30Z\",\n                \"identifiersAll\": [\n                    {\n                        \"type\": \"externalId\",\n                        \"value\": \"0000011110\"\n                    },\n                    {\n                        \"type\": \"mobile\",\n                        \"value\": \"919999988886\"\n                    },\n                    {\n                        \"type\": \"email\",\n                        \"value\": \"tom.sawyer@capillarytech.com\"\n                    }\n                ]\n            }\n        ]\n    },\n    \"errors\": [],\n    \"warnings\": []\n} "
                  },
                  "Coupon Series ID is invalid": {
                    "value": "{\n\"errors\": [\n      {\n        \"status\": false,\n        \"code\" : 707,\n        \"message\": \"Coupon Series ID is invalid\"\n      }\n    ],\n    }"
                  },
                  "Invalid coupon count.": {
                    "value": "{\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 677,\n            \"message\": \"Invalid coupon count. Minimum 1 and Maximum 500.\"\n        }\n    ]\n}"
                  },
                  " customer could not be found. ": {
                    "value": "{\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 701,\n            \"message\": \"The customer could not be found. Please check mobile, email, external id passed\"\n        }\n    ]\n}"
                  },
                  "Expired Coupon or coupon series": {
                    "value": "{\n    \"errors\": [\n        {\n            \"status\": false,\n            \"message\": \"Coupon has expired\",\n            \"code\": 713\n        }\n    ]\n}"
                  },
                  "Coupon processing failed": {
                    "value": "{\n    \"errors\": [\n        {\n            \"status\": false,\n            \"message\": \"Coupon processing failed: user already has a coupon\",\n            \"code\": 709\n        }\n    ]\n}\n"
                  },
                  "seriesId is mandatory to set": {
                    "value": "{\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 756,\n            \"message\": \"seriesId is mandatory to set\"\n        }\n    ]\n}"
                  },
                  "One generic coupon can be issued": {
                    "value": " \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 5004,\n            \"message\": \"Cannot issue more than one GENERIC coupon code.\"\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "count should be greater than 0": {
                    "value": "{\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 756,\n            \"message\": \"count should be greater than 0\"\n        }\n    ]\n}"
                  },
                  "Maximum coupon count from series exceeded for a user": {
                    "value": "    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 5002,\n            \"message\": \"max coupon per user exceeded\"\n        }\n    ],\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "coupons": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "code": {
                                "type": "string",
                                "example": "FS1ANFYVQ4"
                              },
                              "couponId": {
                                "type": "integer",
                                "example": 1294366536,
                                "default": 0
                              }
                            }
                          }
                        },
                        "couponConfig": {
                          "type": "object",
                          "properties": {
                            "customPropertyMap": {
                              "type": "object",
                              "properties": {}
                            },
                            "id": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "description": {
                              "type": "string",
                              "example": "20% Off for Random Reason"
                            },
                            "discountCode": {
                              "type": "string",
                              "example": "Random20"
                            },
                            "info": {
                              "type": "string",
                              "example": "20% off on everything for Random Reason 2"
                            },
                            "discountUpto": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "discountValue": {
                              "type": "integer",
                              "example": 1000,
                              "default": 0
                            },
                            "issueToLoyalty": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "numUploadedNonIssued": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "numUploadedTotal": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "redemptionValidAfterDays": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "ownerId": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "ownerValidity": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "alphaNumeric": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "shortCodeLength": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "randomCodeLength": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "fixedExpiryDate": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "numTotal": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "latestIssualTime": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "latestRedemptionTime": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "discountOn": {
                              "type": "string",
                              "example": "BILL"
                            },
                            "discountType": {
                              "type": "string",
                              "example": "ABS"
                            },
                            "externalIssual": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "updateProductData": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            }
                          }
                        },
                        "totalCount": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "failureCount": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "successCount": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 564703252,
                              "default": 0
                            },
                            "profiles": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "firstName": {
                                    "type": "string",
                                    "example": "Tjuser"
                                  },
                                  "lastName": {
                                    "type": "string",
                                    "example": "Eightysix"
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
                                          "example": "externalId"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "0000011110"
                                        }
                                      }
                                    }
                                  },
                                  "commChannels": {
                                    "type": "array"
                                  },
                                  "userId": {
                                    "type": "integer",
                                    "example": 564703252,
                                    "default": 0
                                  },
                                  "accountId": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "autoUpdateTime": {
                                    "type": "string",
                                    "example": "2025-04-22T05:18:30Z"
                                  },
                                  "identifiersAll": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "example": "externalId"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "0000011110"
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "errors": {
                          "type": "array"
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Invalid coupon count.",
                      "type": "object",
                      "properties": {
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
                                "example": 677,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "Invalid coupon count. Minimum 1 and Maximum 500."
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": " customer could not be found. ",
                      "type": "object",
                      "properties": {
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
                                "example": 701,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "The customer could not be found. Please check mobile, email, external id passed"
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "Expired Coupon or coupon series",
                      "type": "object",
                      "properties": {
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
                              "message": {
                                "type": "string",
                                "example": "Coupon has expired"
                              },
                              "code": {
                                "type": "integer",
                                "example": 713,
                                "default": 0
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "Coupon processing failed",
                      "type": "object",
                      "properties": {
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
                              "message": {
                                "type": "string",
                                "example": "Coupon processing failed: user already has a coupon"
                              },
                              "code": {
                                "type": "integer",
                                "example": 709,
                                "default": 0
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "seriesId is mandatory to set",
                      "type": "object",
                      "properties": {
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
                                "example": "seriesId is mandatory to set"
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "count should be greater than 0",
                      "type": "object",
                      "properties": {
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
                                "example": "count should be greater than 0"
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
                    "value": "{\n    \"seriesId\": [415446,535521],\n    \"count\": 2,\n    \"customer\": {\n        \"mobile\": \"11223569865\"\n    }\n}\n//This is a part of request body."
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "seriesId": {
                      "type": "array",
                      "items": {
                        "type": "integer",
                        "example": 415446,
                        "default": 0
                      }
                    },
                    "count": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "customer": {
                      "type": "object",
                      "properties": {
                        "mobile": {
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon/issue/multiple' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic dGpfY2FwaWxsYXJ' \\\n--header 'Cookie: _cfuvid=iQg0cTNYdPBJ2kyv9IsLZ18ZizOtyqXe.QaZYOVUMKw-1746388892047-0.0.1.1-604800000' \\\n--data '{\n    \"seriesId\": 754528,\n    \"count\": 2,\n    \"customer\": {\n        \"mobile\": \"919999999999\"\n    }\n}' "
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