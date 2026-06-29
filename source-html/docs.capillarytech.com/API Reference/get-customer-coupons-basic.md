> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get All Customer Coupons

This API retrieves the coupon history details of a customer with basic details. For each customer, information includes coupon codes, validity, discount type and amount, redemption history, and issuing details, as well as pagination to manage large data sets efficiently. This API is ideal for accessing an overview of all coupons across customers. If you want  to retrieve more information about coupons, use this [API](https://docs.capillarytech.com/reference/get-customer-coupons-detailed).

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|               |                      |
| :------------ | :------------------- |
| URL           | v2/customers/coupons |
| HTTP Method   | GET                  |
| Pagination    | Yes                  |
| Batch support | No                   |

<br />

# API endpoint example

`https://eu.api.capillarytech.com/v2/customers/coupons?mobile=917003222195&coupon_code_case=LOWER&limit=20&offset=5`

# Request Query Parameters

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
        `include_reversed_redemptions`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Include reversed redemption details for each coupon. Set to `true` to retrieve the `reversedRedemptions` field with data. If not provided or set to `false`, the `reversedRedemptions` field is empty in the response.
      </td>
    </tr>

    <tr>
      <td>
        `mobile`
      </td>

      <td>
        Integer
      </td>

      <td>
        Mobile of the customer.
      </td>
    </tr>

    <tr>
      <td>
        `email`
      </td>

      <td>
        Integer
      </td>

      <td>
        Email of the customer.
      </td>
    </tr>

    <tr>
      <td>
        `external_Id`
      </td>

      <td>
        Integer
      </td>

      <td>
        External ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        `id`
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        `status`
      </td>

      <td>
        Enum
      </td>

      <td>
        Get coupons of selected status(es). Supported values: `REDEEMED`, `UNREDEEMED`, `ACTIVE`, `EXPIRED`, `ACTIVE_REDEEMED`, `ACTIVE_UNREDEEMED`, `EXPIRED_REDEEMED`, `EXPIRED_UNREDEEMED`, `REDEEMABLE`. In the enum values, `Active_Redeemed` is for coupon is active but redeemed), `Active_Unredeemed` for coupons that are active and not redeemed, `Expired_Redeemed` for coupons that are expired but redeemed, and `Expired_Unredeemed` for coupons that are expired and not redeemed.
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
        This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values: `LOWER`, `UPPER`, `AS_IT_IS`. `LOWER` Converts the coupon code to lowercase. Example: "ABCD1234" → "abcd1234". `UPPER` Converts the coupon code to uppercase. Example: "abcd1234" → "ABCD1234". `AS_IT_IS` Returns the coupon code exactly as it was created or provided. Example: "abAB123" → "abAB123"
      </td>
    </tr>

    <tr>
      <td>
        `sort_order`
      </td>

      <td>
        Enum
      </td>

      <td>
        Sort the results in Ascending order (`ASC`) or Descending (`DESC`) order. By default, it is Descending.
      </td>
    </tr>

    <tr>
      <td>
        `limit`
      </td>

      <td>
        Integer
      </td>

      <td>
        Limit the number of results to be retrieved.  
        Default limit: 100  
        For example: `limit=10` to retrieve the history of ten recent coupons of the customer.
      </td>
    </tr>

    <tr>
      <td>
        `offset`
      </td>

      <td>
        Integer
      </td>

      <td>
        Defines the number of rows that need to be skipped from the beginning of the results. For example, number `10` skips the first 10 search results.
      </td>
    </tr>

    <tr>
      <td>
        transaction_numbers
      </td>

      <td>
        String
      </td>

      <td>
        This parameter helps you retrieve customer details based on transaction numbers. You can use a  comma to add multiple transaction numbers. Eg. `1010,2020`
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter                           | Description                                                                                                                                                                                                                                                                                                                                                                          |
| :---------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code                                | The unique coupon code generated. This code is used for redeeming the coupon.                                                                                                                                                                                                                                                                                                        |
| seriesId                            | The unique identifier for the coupon series.                                                                                                                                                                                                                                                                                                                                         |
| description                         | Description of the coupon.                                                                                                                                                                                                                                                                                                                                                           |
| validTill                           | Expiry date of the coupon in ISO 8601 format.                                                                                                                                                                                                                                                                                                                                        |
| discountType                        | Specifies the type of discount provided by the coupon (e.g., ABS for absolute, PERC for percentage).                                                                                                                                                                                                                                                                                 |
| discountValue                       | The value of the discount.                                                                                                                                                                                                                                                                                                                                                           |
| discountUpto                        | The maximum value up to which the discount can be applied.                                                                                                                                                                                                                                                                                                                           |
| customer                            | An object containing details about the customer.                                                                                                                                                                                                                                                                                                                                     |
| customer.id                         | The unique identifier of the customer.                                                                                                                                                                                                                                                                                                                                               |
| customer.profiles                   | An object containing profile details of the customer.                                                                                                                                                                                                                                                                                                                                |
| customer.profiles.firstName         | The first name of the customer.                                                                                                                                                                                                                                                                                                                                                      |
| customer.profiles.lastName          | The last name of the customer.                                                                                                                                                                                                                                                                                                                                                       |
| customer.profiles.identifiers       | Identifier for the customer.                                                                                                                                                                                                                                                                                                                                                         |
| customer.profiles.identifiers.type  | The type of identifier (e.g., "mobile", "email").                                                                                                                                                                                                                                                                                                                                    |
| customer.profiles.identifiers.value | The value of the identifier (e.g., the actual mobile number or email address).                                                                                                                                                                                                                                                                                                       |
| customer.profiles.commChannels      | Communication channels preferred by the customer.                                                                                                                                                                                                                                                                                                                                    |
| customer.profiles.userId            | A unique identifier for the user's profile.                                                                                                                                                                                                                                                                                                                                          |
| customer.profiles.accountId         | The account ID associated with the customer's profile.                                                                                                                                                                                                                                                                                                                               |
| customer.profiles.autoUpdateTime    | The timestamp indicating the last automatic update time for the profile.                                                                                                                                                                                                                                                                                                             |
| customer.profiles.identifiersAll    | Contains all identifiers associated with the customer.                                                                                                                                                                                                                                                                                                                               |
| identifiersAll.type\`               | The type of the first identifier in the all identifiers.                                                                                                                                                                                                                                                                                                                             |
| identifiersAll.value                | The value of the first identifier in the all identifiers.                                                                                                                                                                                                                                                                                                                            |
| identifiersAll.type                 | The type of the second identifier in the all identifiers.                                                                                                                                                                                                                                                                                                                            |
| identifiersAll.value                | The value of the second identifier in the all identifiers.                                                                                                                                                                                                                                                                                                                           |
| redemptionStatus                    | Represents the overall status of the redemption.                                                                                                                                                                                                                                                                                                                                     |
| redemptionStatus.status             | Indicates the overall success status of the coupon processing.                                                                                                                                                                                                                                                                                                                       |
| redemptionStatus.message            | A message describing the overall status of the coupon processing.                                                                                                                                                                                                                                                                                                                    |
| redemptionStatus.code               | The status code representing the overall result of the coupon processing.                                                                                                                                                                                                                                                                                                            |
| issuedAt                            | An object containing details about where the coupon was issued.                                                                                                                                                                                                                                                                                                                      |
| issuedAt.code                       | The code of the store where the coupon was issued.                                                                                                                                                                                                                                                                                                                                   |
| issuedAt.name                       | The name of the store where the coupon was issued.                                                                                                                                                                                                                                                                                                                                   |
| createdDate                         | The timestamp when the coupon was issued.                                                                                                                                                                                                                                                                                                                                            |
| createdDateISO                      | Timestamp when the coupon was created in ISO 8601 format, returned in the server time zone. EU server example: `2025-08-19T11:22:11Z` → 19 August 2025, 11:22:11 (UTC). India server example: `2025-08-19T16:52:11+05:30` → 19 August 2025, 16:52:11 (IST). **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request. |
| customProperty                      | An array of custom properties associated with the coupon.                                                                                                                                                                                                                                                                                                                            |
| redemptions                         | An array containing details of redemptions associated with the coupon.                                                                                                                                                                                                                                                                                                               |
| redemptions.id                      | Unique ID of the redemption event.                                                                                                                                                                                                                                                                                                                                                   |
| redemptions.date                    | The timestamp of the coupon redemption.                                                                                                                                                                                                                                                                                                                                              |
| redemptions.dateISO                 | Timestamp of the coupon redemption in ISO 8601 format, returned in the server time zone. EU server example: `2025-08-19T11:22:30Z` → 19 August 2025, 11:22:30 (UTC). India server example: `2025-08-19T16:52:30+05:30` → 19 August 2025, 16:52:30 (IST). **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.    |
| redemptions.transactionNumber       | The transaction number associated with the redemption.                                                                                                                                                                                                                                                                                                                               |
| redemptions.redeemedAt              | An object containing details of the store where the coupon was redeemed.                                                                                                                                                                                                                                                                                                             |
| redemptions.redeemedAt.code         | The code of the store where the coupon was redeemed.                                                                                                                                                                                                                                                                                                                                 |
| redemptions.redeemedAt.name         | The name of the store where the coupon was redeemed.                                                                                                                                                                                                                                                                                                                                 |
| reversedRedemptions                 | An array containing details of reversed redemptions associated with the coupon.                                                                                                                                                                                                                                                                                                      |
| validTillDateTime                   | Specifies the exact expiry date and time of a coupon in ISO 8601 format (e.g., "2026-06-11T23:59:59Z"), indicating the precise moment until which the coupon can be redeemed.                                                                                                                                                                                                        |

```json
{
    "entity": {
        "pagination": {
            "limit": "100",
            "offset": "0",
            "total": 23
        },
        "customers": [
            {
                "firstname": "Tom",
                "lastname": "Sawyer",
                "email": "georgejohnsonoff@gmail.com",
                "mobile": "919400488244",
                "id": 565039504,
                "coupons": [
                    {
                        "code": "0211706970002385",
                        "seriesId": 840067,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1312013462,
                        "createdDate": "2025-08-19T16:52:11Z",
                        "createdDateISO": "2025-08-19T11:22:11Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18527071,
                                "date": "2025-08-19T16:52:30Z",
                                "dateISO": "2025-08-19T11:22:30Z",
                                "transactionNumber": "12121212",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "0425942118660204",
                        "seriesId": 840066,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1312013428,
                        "createdDate": "2025-08-19T16:49:39Z",
                        "createdDateISO": "2025-08-19T11:19:39Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18527057,
                                "date": "2025-08-19T16:50:06Z",
                                "dateISO": "2025-08-19T11:20:06Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "2028126844759923",
                        "seriesId": 839534,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 5000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987477,
                        "createdDate": "2025-08-18T19:37:28Z",
                        "createdDateISO": "2025-08-18T14:07:28Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518032,
                                "date": "2025-08-18T19:37:45Z",
                                "dateISO": "2025-08-18T14:07:45Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "3558615628138696",
                        "seriesId": 839532,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987440,
                        "createdDate": "2025-08-18T19:35:54Z",
                        "createdDateISO": "2025-08-18T14:05:54Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518007,
                                "date": "2025-08-18T19:36:10Z",
                                "dateISO": "2025-08-18T14:06:10Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "3908392058023755",
                        "seriesId": 839527,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987397,
                        "createdDate": "2025-08-18T19:34:32Z",
                        "createdDateISO": "2025-08-18T14:04:32Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518002,
                                "date": "2025-08-18T19:34:48Z",
                                "dateISO": "2025-08-18T14:04:48Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "8317751592007332",
                        "seriesId": 836844,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1311139693,
                        "createdDate": "2025-08-14T14:29:50Z",
                        "createdDateISO": "2025-08-14T08:59:50Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "5894567822344805",
                        "seriesId": 836832,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311139131,
                        "createdDate": "2025-08-14T13:59:48Z",
                        "createdDateISO": "2025-08-14T08:29:48Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18478608,
                                "date": "2025-08-14T14:26:27Z",
                                "dateISO": "2025-08-14T08:56:27Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "12341234",
                        "seriesId": 823542,
                        "description": "doc-test 4",
                        "validTill": "2028-07-28T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 200.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1307428181,
                        "createdDate": "2025-07-27T14:16:01Z",
                        "createdDateISO": "2025-07-27T08:46:01Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18291008,
                                "date": "2025-07-27T14:16:17Z",
                                "dateISO": "2025-07-27T08:46:17Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2028-07-28T23:59:59Z"
                    },
                    {
                        "code": "KNBK1NIM9U",
                        "seriesId": 819823,
                        "description": "Coupon Series for UAT Team JULY only for new Registration",
                        "validTill": "2025-07-30T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 1000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1307428068,
                        "createdDate": "2025-07-27T14:11:01Z",
                        "createdDateISO": "2025-07-27T08:41:01Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18290983,
                                "date": "2025-07-27T14:11:22Z",
                                "dateISO": "2025-07-27T08:41:22Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-30T23:59:59Z"
                    },
                    {
                        "code": "WWTX7NIPSDC34DFX",
                        "seriesId": 801319,
                        "description": "jooffers",
                        "validTill": "2027-06-26T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 122.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1306648999,
                        "createdDate": "2025-07-16T17:42:21Z",
                        "createdDateISO": "2025-07-16T12:12:21Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18183149,
                                "date": "2025-07-16T17:46:43Z",
                                "dateISO": "2025-07-16T12:16:43Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2027-06-26T23:59:59Z"
                    },
                    {
                        "code": "3ELN50QRLCKGW5S6",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1306648998,
                        "createdDate": "2025-07-16T17:42:21Z",
                        "createdDateISO": "2025-07-16T12:12:21Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18183150,
                                "date": "2025-07-16T17:46:43Z",
                                "dateISO": "2025-07-16T12:16:43Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "D1O6AR0BSQKK3XQR",
                        "seriesId": 816002,
                        "description": "doc_test_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 100.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1306638254,
                        "createdDate": "2025-07-16T16:01:50Z",
                        "createdDateISO": "2025-07-16T10:31:50Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "J5B1OG0BC6J1QLDX",
                        "seriesId": 816002,
                        "description": "doc_test_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 100.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 14,
                        "redemptionsLeft": 5,
                        "id": 1306638176,
                        "createdDate": "2025-07-16T15:56:41Z",
                        "createdDateISO": "2025-07-16T10:26:41Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18182215,
                                "date": "2025-07-16T15:58:32Z",
                                "dateISO": "2025-07-16T10:28:32Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182405,
                                "date": "2025-07-16T16:15:34Z",
                                "dateISO": "2025-07-16T10:45:34Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182412,
                                "date": "2025-07-16T16:15:53Z",
                                "dateISO": "2025-07-16T10:45:53Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182430,
                                "date": "2025-07-16T16:16:27Z",
                                "dateISO": "2025-07-16T10:46:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182438,
                                "date": "2025-07-16T16:16:56Z",
                                "dateISO": "2025-07-16T10:46:56Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182468,
                                "date": "2025-07-16T16:20:26Z",
                                "dateISO": "2025-07-16T10:50:26Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182470,
                                "date": "2025-07-16T16:20:27Z",
                                "dateISO": "2025-07-16T10:50:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182473,
                                "date": "2025-07-16T16:20:28Z",
                                "dateISO": "2025-07-16T10:50:28Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182475,
                                "date": "2025-07-16T16:20:29Z",
                                "dateISO": "2025-07-16T10:50:29Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182488,
                                "date": "2025-07-16T16:20:42Z",
                                "dateISO": "2025-07-16T10:50:42Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182490,
                                "date": "2025-07-16T16:20:44Z",
                                "dateISO": "2025-07-16T10:50:44Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182492,
                                "date": "2025-07-16T16:20:46Z",
                                "dateISO": "2025-07-16T10:50:46Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182496,
                                "date": "2025-07-16T16:20:47Z",
                                "dateISO": "2025-07-16T10:50:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182501,
                                "date": "2025-07-16T16:21:47Z",
                                "dateISO": "2025-07-16T10:51:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "KDHYDY1N0EYP1FWF",
                        "seriesId": 816003,
                        "description": "doc_doc_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 14,
                        "redemptionsLeft": 0,
                        "id": 1306638175,
                        "createdDate": "2025-07-16T15:56:41Z",
                        "createdDateISO": "2025-07-16T10:26:41Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18182216,
                                "date": "2025-07-16T15:58:32Z",
                                "dateISO": "2025-07-16T10:28:32Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182406,
                                "date": "2025-07-16T16:15:34Z",
                                "dateISO": "2025-07-16T10:45:34Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182413,
                                "date": "2025-07-16T16:15:53Z",
                                "dateISO": "2025-07-16T10:45:53Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182431,
                                "date": "2025-07-16T16:16:27Z",
                                "dateISO": "2025-07-16T10:46:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182439,
                                "date": "2025-07-16T16:16:56Z",
                                "dateISO": "2025-07-16T10:46:56Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182469,
                                "date": "2025-07-16T16:20:26Z",
                                "dateISO": "2025-07-16T10:50:26Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182471,
                                "date": "2025-07-16T16:20:27Z",
                                "dateISO": "2025-07-16T10:50:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182474,
                                "date": "2025-07-16T16:20:28Z",
                                "dateISO": "2025-07-16T10:50:28Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182476,
                                "date": "2025-07-16T16:20:29Z",
                                "dateISO": "2025-07-16T10:50:29Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182489,
                                "date": "2025-07-16T16:20:42Z",
                                "dateISO": "2025-07-16T10:50:42Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182491,
                                "date": "2025-07-16T16:20:44Z",
                                "dateISO": "2025-07-16T10:50:44Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182493,
                                "date": "2025-07-16T16:20:46Z",
                                "dateISO": "2025-07-16T10:50:46Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182497,
                                "date": "2025-07-16T16:20:47Z",
                                "dateISO": "2025-07-16T10:50:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182502,
                                "date": "2025-07-16T16:21:47Z",
                                "dateISO": "2025-07-16T10:51:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "9093147113389818",
                        "seriesId": 804943,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 5000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1305582408,
                        "createdDate": "2025-07-02T05:35:59Z",
                        "createdDateISO": "2025-07-02T00:05:59Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18036029,
                                "date": "2025-07-02T05:42:57Z",
                                "dateISO": "2025-07-02T00:12:57Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "MP9H9T2EJ5",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1305016621,
                        "createdDate": "2025-06-26T10:30:19Z",
                        "createdDateISO": "2025-06-26T05:00:19Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "RXYEDPREM3BRTF7U",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1303420745,
                        "createdDate": "2025-06-16T20:46:37Z",
                        "createdDateISO": "2025-06-16T15:16:37Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "2VNGQ9Y3DWVBHBE9",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1303420744,
                        "createdDate": "2025-06-16T20:46:37Z",
                        "createdDateISO": "2025-06-16T15:16:37Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "1VV10SV891",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1303408281,
                        "createdDate": "2025-06-16T12:23:56Z",
                        "createdDateISO": "2025-06-16T06:53:56Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "GEV8LUGIDD",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1301025591,
                        "createdDate": "2025-06-02T11:26:34Z",
                        "createdDateISO": "2025-06-02T05:56:34Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "YTOWAEN5N0",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1298658947,
                        "createdDate": "2025-05-23T16:08:25Z",
                        "createdDateISO": "2025-05-23T10:38:25Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "ZLI0HZ0EGH",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1296377532,
                        "createdDate": "2025-04-30T11:13:36Z",
                        "createdDateISO": "2025-04-30T05:43:36Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "UHI3T4V98MRGP0G0",
                        "seriesId": 686692,
                        "description": "50% Off Holi Coupon",
                        "validTill": "2025-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 200.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 6,
                        "redemptionsLeft": -1,
                        "id": 1293385129,
                        "createdDate": "2025-04-14T11:49:03Z",
                        "createdDateISO": "2025-04-14T06:19:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 17423837,
                                "date": "2025-04-30T10:57:29Z",
                                "dateISO": "2025-04-30T05:27:29Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596279,
                                "date": "2025-05-16T15:45:33Z",
                                "dateISO": "2025-05-16T10:15:33Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596293,
                                "date": "2025-05-16T15:46:14Z",
                                "dateISO": "2025-05-16T10:16:14Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596385,
                                "date": "2025-05-16T16:01:50Z",
                                "dateISO": "2025-05-16T10:31:50Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17653665,
                                "date": "2025-05-21T17:21:01Z",
                                "dateISO": "2025-05-21T11:51:01Z",
                                "transactionNumber": "txnNumberTest1605",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17677044,
                                "date": "2025-05-23T18:23:36Z",
                                "dateISO": "2025-05-23T12:53:36Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-06-11T23:59:59Z"
                    }
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json With coupon_code_case=LOWER
{
    "entity": {
        "pagination": {
            "limit": "100",
            "offset": "0",
            "total": 7
        },
        "customers": [
            {
                "firstname": "autofn_917003222195",
                "lastname": "autoln_917003222195",
                "email": "tomswayer@gmail.com",
                "mobile": "917003222195",
                "id": 345635529,
                "externalId": "ext_id917003222195",
                "coupons": [
                    {
                        "code": "tt6wzp7xnw",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004111,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "createdDateISO": "2024-10-11T07:48:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "ziwy7lzgw8",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004112,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "createdDateISO": "2024-10-11T07:48:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "hu1dh75hny",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 39004113,
                        "createdDate": "2024-10-11T13:18:03Z",
                        "createdDateISO": "2024-10-11T07:48:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "vmqvzcvymt",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502461,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "createdDateISO": "2024-10-10T05:07:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "x6wqg8kb01",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502462,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "createdDateISO": "2024-10-10T05:07:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "oo8hf7divr",
                        "seriesId": 68579,
                        "description": "test-lekhana-2",
                        "validTill": "2024-10-31T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36502463,
                        "createdDate": "2024-10-10T10:37:03Z",
                        "createdDateISO": "2024-10-10T05:07:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "redemptions": [],
                        "reversedRedemptions": []
                    },
                    {
                        "code": "w2jjud9yrguaprdur52o",
                        "seriesId": 68377,
                        "description": "test-lekhana",
                        "validTill": "2024-10-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 36501088,
                        "createdDate": "2024-10-08T18:29:14Z",
                        "createdDateISO": "2024-10-08T12:59:14Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "store123",
                            "name": "MarvelAuto_Store"
                        },
                        "customProperty": [
                            {
                                "name": "standard_image_1",
                                "value": ""
                            },
                            {
                                "name": "standard_image_2",
                                "value": ""
                            },
                            {
                                "name": "standard_description",
                                "value": "DescriptionCustom"
                            },
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": "Terms and conditionscustom"
                            },
                            {
                                "name": "test-xyz",
                                "value": "test-xyz custom"
                            }
                        ],
                        "redemptions": [],
                        "reversedRedemptions": []
                    }
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```Text With transaction_numbers=0
{
    "entity": {
        "pagination": {
            "limit": "100",
            "offset": "0",
            "total": 23
        },
        "customers": [
            {
                "firstname": "Tom",
                "lastname": "Sawyer",
                "email": "georgxxx@gmail.com",
                "mobile": "91940048xxx",
                "id": 565039504,
                "coupons": [
                    {
                        "code": "0211706970002385",
                        "seriesId": 840067,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1312013462,
                        "createdDate": "2025-08-19T16:52:11Z",
                        "createdDateISO": "2025-08-19T11:22:11Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18527071,
                                "date": "2025-08-19T16:52:30Z",
                                "dateISO": "2025-08-19T11:22:30Z",
                                "transactionNumber": "12121212",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "0425942118660204",
                        "seriesId": 840066,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1312013428,
                        "createdDate": "2025-08-19T16:49:39Z",
                        "createdDateISO": "2025-08-19T11:19:39Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18527057,
                                "date": "2025-08-19T16:50:06Z",
                                "dateISO": "2025-08-19T11:20:06Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "2028126844759923",
                        "seriesId": 839534,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 5000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987477,
                        "createdDate": "2025-08-18T19:37:28Z",
                        "createdDateISO": "2025-08-18T14:07:28Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518032,
                                "date": "2025-08-18T19:37:45Z",
                                "dateISO": "2025-08-18T14:07:45Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "3558615628138696",
                        "seriesId": 839532,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987440,
                        "createdDate": "2025-08-18T19:35:54Z",
                        "createdDateISO": "2025-08-18T14:05:54Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518007,
                                "date": "2025-08-18T19:36:10Z",
                                "dateISO": "2025-08-18T14:06:10Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "3908392058023755",
                        "seriesId": 839527,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311987397,
                        "createdDate": "2025-08-18T19:34:32Z",
                        "createdDateISO": "2025-08-18T14:04:32Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18518002,
                                "date": "2025-08-18T19:34:48Z",
                                "dateISO": "2025-08-18T14:04:48Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "8317751592007332",
                        "seriesId": 836844,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1311139693,
                        "createdDate": "2025-08-14T14:29:50Z",
                        "createdDateISO": "2025-08-14T08:59:50Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "5894567822344805",
                        "seriesId": 836832,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1311139131,
                        "createdDate": "2025-08-14T13:59:48Z",
                        "createdDateISO": "2025-08-14T08:29:48Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18478608,
                                "date": "2025-08-14T14:26:27Z",
                                "dateISO": "2025-08-14T08:56:27Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "12341234",
                        "seriesId": 823542,
                        "description": "doc-test 4",
                        "validTill": "2028-07-28T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 200.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1307428181,
                        "createdDate": "2025-07-27T14:16:01Z",
                        "createdDateISO": "2025-07-27T08:46:01Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18291008,
                                "date": "2025-07-27T14:16:17Z",
                                "dateISO": "2025-07-27T08:46:17Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2028-07-28T23:59:59Z"
                    },
                    {
                        "code": "KNBK1NIM9U",
                        "seriesId": 819823,
                        "description": "Coupon Series for UAT Team JULY only for new Registration",
                        "validTill": "2025-07-30T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 1000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1307428068,
                        "createdDate": "2025-07-27T14:11:01Z",
                        "createdDateISO": "2025-07-27T08:41:01Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18290983,
                                "date": "2025-07-27T14:11:22Z",
                                "dateISO": "2025-07-27T08:41:22Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-30T23:59:59Z"
                    },
                    {
                        "code": "WWTX7NIPSDC34DFX",
                        "seriesId": 801319,
                        "description": "jooffers",
                        "validTill": "2027-06-26T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 122.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1306648999,
                        "createdDate": "2025-07-16T17:42:21Z",
                        "createdDateISO": "2025-07-16T12:12:21Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18183149,
                                "date": "2025-07-16T17:46:43Z",
                                "dateISO": "2025-07-16T12:16:43Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2027-06-26T23:59:59Z"
                    },
                    {
                        "code": "3ELN50QRLCKGW5S6",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1306648998,
                        "createdDate": "2025-07-16T17:42:21Z",
                        "createdDateISO": "2025-07-16T12:12:21Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18183150,
                                "date": "2025-07-16T17:46:43Z",
                                "dateISO": "2025-07-16T12:16:43Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "D1O6AR0BSQKK3XQR",
                        "seriesId": 816002,
                        "description": "doc_test_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 100.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1306638254,
                        "createdDate": "2025-07-16T16:01:50Z",
                        "createdDateISO": "2025-07-16T10:31:50Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "J5B1OG0BC6J1QLDX",
                        "seriesId": 816002,
                        "description": "doc_test_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 100.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 14,
                        "redemptionsLeft": 5,
                        "id": 1306638176,
                        "createdDate": "2025-07-16T15:56:41Z",
                        "createdDateISO": "2025-07-16T10:26:41Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18182215,
                                "date": "2025-07-16T15:58:32Z",
                                "dateISO": "2025-07-16T10:28:32Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182405,
                                "date": "2025-07-16T16:15:34Z",
                                "dateISO": "2025-07-16T10:45:34Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182412,
                                "date": "2025-07-16T16:15:53Z",
                                "dateISO": "2025-07-16T10:45:53Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182430,
                                "date": "2025-07-16T16:16:27Z",
                                "dateISO": "2025-07-16T10:46:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182438,
                                "date": "2025-07-16T16:16:56Z",
                                "dateISO": "2025-07-16T10:46:56Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182468,
                                "date": "2025-07-16T16:20:26Z",
                                "dateISO": "2025-07-16T10:50:26Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182470,
                                "date": "2025-07-16T16:20:27Z",
                                "dateISO": "2025-07-16T10:50:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182473,
                                "date": "2025-07-16T16:20:28Z",
                                "dateISO": "2025-07-16T10:50:28Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182475,
                                "date": "2025-07-16T16:20:29Z",
                                "dateISO": "2025-07-16T10:50:29Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182488,
                                "date": "2025-07-16T16:20:42Z",
                                "dateISO": "2025-07-16T10:50:42Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182490,
                                "date": "2025-07-16T16:20:44Z",
                                "dateISO": "2025-07-16T10:50:44Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182492,
                                "date": "2025-07-16T16:20:46Z",
                                "dateISO": "2025-07-16T10:50:46Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182496,
                                "date": "2025-07-16T16:20:47Z",
                                "dateISO": "2025-07-16T10:50:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182501,
                                "date": "2025-07-16T16:21:47Z",
                                "dateISO": "2025-07-16T10:51:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "KDHYDY1N0EYP1FWF",
                        "seriesId": 816003,
                        "description": "doc_doc_coupon",
                        "validTill": "2025-07-17T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 10.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 14,
                        "redemptionsLeft": 0,
                        "id": 1306638175,
                        "createdDate": "2025-07-16T15:56:41Z",
                        "createdDateISO": "2025-07-16T10:26:41Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18182216,
                                "date": "2025-07-16T15:58:32Z",
                                "dateISO": "2025-07-16T10:28:32Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182406,
                                "date": "2025-07-16T16:15:34Z",
                                "dateISO": "2025-07-16T10:45:34Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182413,
                                "date": "2025-07-16T16:15:53Z",
                                "dateISO": "2025-07-16T10:45:53Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182431,
                                "date": "2025-07-16T16:16:27Z",
                                "dateISO": "2025-07-16T10:46:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182439,
                                "date": "2025-07-16T16:16:56Z",
                                "dateISO": "2025-07-16T10:46:56Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182469,
                                "date": "2025-07-16T16:20:26Z",
                                "dateISO": "2025-07-16T10:50:26Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182471,
                                "date": "2025-07-16T16:20:27Z",
                                "dateISO": "2025-07-16T10:50:27Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182474,
                                "date": "2025-07-16T16:20:28Z",
                                "dateISO": "2025-07-16T10:50:28Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182476,
                                "date": "2025-07-16T16:20:29Z",
                                "dateISO": "2025-07-16T10:50:29Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182489,
                                "date": "2025-07-16T16:20:42Z",
                                "dateISO": "2025-07-16T10:50:42Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182491,
                                "date": "2025-07-16T16:20:44Z",
                                "dateISO": "2025-07-16T10:50:44Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182493,
                                "date": "2025-07-16T16:20:46Z",
                                "dateISO": "2025-07-16T10:50:46Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182497,
                                "date": "2025-07-16T16:20:47Z",
                                "dateISO": "2025-07-16T10:50:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 18182502,
                                "date": "2025-07-16T16:21:47Z",
                                "dateISO": "2025-07-16T10:51:47Z",
                                "transactionNumber": "numbr9435064964",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-07-17T23:59:59Z"
                    },
                    {
                        "code": "9093147113389818",
                        "seriesId": 804943,
                        "description": "doc_coupon01",
                        "validTill": "2026-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 5000.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 1,
                        "redemptionsLeft": 0,
                        "id": 1305582408,
                        "createdDate": "2025-07-02T05:35:59Z",
                        "createdDateISO": "2025-07-02T00:05:59Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 18036029,
                                "date": "2025-07-02T05:42:57Z",
                                "dateISO": "2025-07-02T00:12:57Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-06-11T23:59:59Z"
                    },
                    {
                        "code": "MP9H9T2EJ5",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1305016621,
                        "createdDate": "2025-06-26T10:30:19Z",
                        "createdDateISO": "2025-06-26T05:00:19Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "RXYEDPREM3BRTF7U",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1303420745,
                        "createdDate": "2025-06-16T20:46:37Z",
                        "createdDateISO": "2025-06-16T15:16:37Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "2VNGQ9Y3DWVBHBE9",
                        "seriesId": 794088,
                        "description": "DOC_COUPON",
                        "validTill": "2032-06-16T00:00:00Z",
                        "discountType": "PERC",
                        "discountValue": 12.0,
                        "discountUpto": 12.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1303420744,
                        "createdDate": "2025-06-16T20:46:37Z",
                        "createdDateISO": "2025-06-16T15:16:37Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2032-06-16T23:59:59Z"
                    },
                    {
                        "code": "1VV10SV891",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1303408281,
                        "createdDate": "2025-06-16T12:23:56Z",
                        "createdDateISO": "2025-06-16T06:53:56Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "GEV8LUGIDD",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1301025591,
                        "createdDate": "2025-06-02T11:26:34Z",
                        "createdDateISO": "2025-06-02T05:56:34Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "YTOWAEN5N0",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1298658947,
                        "createdDate": "2025-05-23T16:08:25Z",
                        "createdDateISO": "2025-05-23T10:38:25Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "ZLI0HZ0EGH",
                        "seriesId": 757291,
                        "description": "Vishu 10% OFF",
                        "validTill": "2026-05-09T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 500.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 5,
                        "id": 1296377532,
                        "createdDate": "2025-04-30T11:13:36Z",
                        "createdDateISO": "2025-04-30T05:43:36Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2026-05-09T23:59:59Z"
                    },
                    {
                        "code": "UHI3T4V98MRGP0G0",
                        "seriesId": 686692,
                        "description": "50% Off Holi Coupon",
                        "validTill": "2025-06-11T00:00:00Z",
                        "discountType": "ABS",
                        "discountValue": 200.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 6,
                        "redemptionsLeft": -1,
                        "id": 1293385129,
                        "createdDate": "2025-04-14T11:49:03Z",
                        "createdDateISO": "2025-04-14T06:19:03Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "doc123",
                            "name": "DocStore"
                        },
                        "redemptions": [
                            {
                                "id": 17423837,
                                "date": "2025-04-30T10:57:29Z",
                                "dateISO": "2025-04-30T05:27:29Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596279,
                                "date": "2025-05-16T15:45:33Z",
                                "dateISO": "2025-05-16T10:15:33Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596293,
                                "date": "2025-05-16T15:46:14Z",
                                "dateISO": "2025-05-16T10:16:14Z",
                                "transactionNumber": "",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17596385,
                                "date": "2025-05-16T16:01:50Z",
                                "dateISO": "2025-05-16T10:31:50Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17653665,
                                "date": "2025-05-21T17:21:01Z",
                                "dateISO": "2025-05-21T11:51:01Z",
                                "transactionNumber": "txnNumberTest1605",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            },
                            {
                                "id": 17677044,
                                "date": "2025-05-23T18:23:36Z",
                                "dateISO": "2025-05-23T12:53:36Z",
                                "transactionNumber": "bill-110",
                                "redeemedAt": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                }
                            }
                        ],
                        "reversedRedemptions": [],
                        "validTillDateTime": "2025-06-11T23:59:59Z"
                    }
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```
```Text reversedRedemptions=true
{
    "entity": {
        "pagination": {
            "limit": "1",
            "offset": "0",
            "total": 1
        },
        "customers": [
            {
                "firstname": "Divyansh",
                "lastname": "Saran n",
                "email": "dsafg9131749@gmail.com",
                "mobile": "919686569677",
                "id": 591985779,
                "externalId": "000010231",
                "coupons": [
                    {
                        "code": "843411",
                        "seriesId": 331412,
                        "description": "6E SEAT",
                        "validTill": "2026-07-18T00:00:00+05:30",
                        "discountType": "ABS",
                        "discountValue": 0.0,
                        "discountUpto": 0.0,
                        "redemptionCount": 0,
                        "redemptionsLeft": 1,
                        "id": 1353215179,
                        "createdDate": "2026-01-19T15:23:19+05:30",
                        "createdDateISO": "2026-01-19T04:23:19Z",
                        "transactionNumber": "0",
                        "issuedAt": {
                            "code": "demo.indigo.mobileskyplus",
                            "name": "IndiGo App"
                        },
                        "customProperty": [
                            {
                                "name": "standard_image_1",
                                "value": ""
                            },
                            {
                                "name": "JourneyType",
                                "value": ""
                            },
                            {
                                "name": "TierType ",
                                "value": ""
                            },
                            {
                                "name": "Category",
                                "value": "Axis"
                            },
                            {
                                "name": "Dom or Int",
                                "value": ""
                            },
                            {
                                "name": "standard_image_2",
                                "value": ""
                            },
                            {
                                "name": "standard_description",
                                "value": ""
                            },
                            {
                                "name": "standard_image_3",
                                "value": ""
                            },
                            {
                                "name": "Business or Economy",
                                "value": ""
                            },
                            {
                                "name": "offerType",
                                "value": "6ESeats"
                            },
                            {
                                "name": "is_refundable",
                                "value": ""
                            },
                            {
                                "name": "Currency",
                                "value": ""
                            },
                            {
                                "name": "TripType",
                                "value": ""
                            },
                            {
                                "name": "standard_terms_and_conditions",
                                "value": ""
                            },
                            {
                                "name": "VoucherType",
                                "value": ""
                            }
                        ],
                        "redemptions": [],
                        "reversedRedemptions": [
                            {
                                "id": 284016479,
                                "date": "2026-01-19T15:24:42+05:30",
                                "dateISO": "2026-01-19T15:24:42+05:30",
                                "reversedOn": "2026-01-19T15:32:13+05:30",
                                "redeemedAt": {
                                    "code": "demo.indigo.mobileskyplus",
                                    "name": "IndiGo App"
                                }
                            }
                        ],
                        "validTillDateTime": "2026-07-18T23:59:59+05:30"
                    }
                ]
            }
        ]
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

<br />

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
    "/customers/coupons": {
      "get": {
        "summary": "Get All Customer Coupons",
        "description": "",
        "operationId": "get-customer-coupons-basic",
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
            "name": "externalId",
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
            "name": "status",
            "in": "query",
            "description": "Get coupons of selected status(es). In the enum values, Active_Redeemed is for coupon is active but redeemed), Active_Unredeemed for coupons that are active and not redeemed, Expired_Redeemed for coupons that are expired but redeemed,and Expired_Unredeemed for coupons that are expired and not redeemed.",
            "schema": {
              "type": "string",
              "enum": [
                "REDEEMED",
                "UNREDEEMED",
                "ACTIVE",
                "EXPIRED",
                "ACTIVE_REDEEMED",
                "ACTIVE_UNREDEEMED",
                "EXPIRED_REDEEMED",
                "EXPIRED_UNREDEEMED",
                "REDEEMABLE"
              ]
            }
          },
          {
            "name": "coupon_code_case",
            "in": "query",
            "description": "This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values:   LOWER: Converts the coupon code to lower case.   UPPER: Converts the coupon codes to upper case.   AS_IT_IS: It ensure that the coupon code is retrieved exactly as it was created or provided, without altering the letter case. For instance, if the code is \"abAB123,\" it should be retrieved and displayed as \"abAB123,\" maintaining its original formatting.",
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
                  "Sample Response": {
                    "value": {
                      "entity": {
                        "pagination": {
                          "limit": "100",
                          "offset": "0",
                          "total": 23
                        },
                        "customers": [
                          {
                            "firstname": "Tom",
                            "lastname": "Sawyer",
                            "email": "georgejohnsonoff@gmail.com",
                            "mobile": "919400488244",
                            "id": 565039504,
                            "coupons": [
                              {
                                "code": "0211706970002385",
                                "seriesId": 840067,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1312013462,
                                "createdDate": "2025-08-19T16:52:11Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18527071,
                                    "date": "2025-08-19T16:52:30Z",
                                    "transactionNumber": "12121212",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "0425942118660204",
                                "seriesId": 840066,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1312013428,
                                "createdDate": "2025-08-19T16:49:39Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18527057,
                                    "date": "2025-08-19T16:50:06Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "2028126844759923",
                                "seriesId": 839534,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 5000,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1311987477,
                                "createdDate": "2025-08-18T19:37:28Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18518032,
                                    "date": "2025-08-18T19:37:45Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "3558615628138696",
                                "seriesId": 839532,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1311987440,
                                "createdDate": "2025-08-18T19:35:54Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18518007,
                                    "date": "2025-08-18T19:36:10Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "3908392058023755",
                                "seriesId": 839527,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1311987397,
                                "createdDate": "2025-08-18T19:34:32Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18518002,
                                    "date": "2025-08-18T19:34:48Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "8317751592007332",
                                "seriesId": 836844,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 0,
                                "redemptionsLeft": 1,
                                "id": 1311139693,
                                "createdDate": "2025-08-14T14:29:50Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "5894567822344805",
                                "seriesId": 836832,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1311139131,
                                "createdDate": "2025-08-14T13:59:48Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18478608,
                                    "date": "2025-08-14T14:26:27Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "12341234",
                                "seriesId": 823542,
                                "description": "doc-test 4",
                                "validTill": "2028-07-28T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 200,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1307428181,
                                "createdDate": "2025-07-27T14:16:01Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18291008,
                                    "date": "2025-07-27T14:16:17Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2028-07-28T23:59:59Z"
                              },
                              {
                                "code": "KNBK1NIM9U",
                                "seriesId": 819823,
                                "description": "Coupon Series for UAT Team JULY only for new Registration",
                                "validTill": "2025-07-30T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 1000,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1307428068,
                                "createdDate": "2025-07-27T14:11:01Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18290983,
                                    "date": "2025-07-27T14:11:22Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2025-07-30T23:59:59Z"
                              },
                              {
                                "code": "WWTX7NIPSDC34DFX",
                                "seriesId": 801319,
                                "description": "jooffers",
                                "validTill": "2027-06-26T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 122,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1306648999,
                                "createdDate": "2025-07-16T17:42:21Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18183149,
                                    "date": "2025-07-16T17:46:43Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2027-06-26T23:59:59Z"
                              },
                              {
                                "code": "3ELN50QRLCKGW5S6",
                                "seriesId": 794088,
                                "description": "DOC_COUPON",
                                "validTill": "2032-06-16T00:00:00Z",
                                "discountType": "PERC",
                                "discountValue": 12,
                                "discountUpto": 12,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1306648998,
                                "createdDate": "2025-07-16T17:42:21Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18183150,
                                    "date": "2025-07-16T17:46:43Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2032-06-16T23:59:59Z"
                              },
                              {
                                "code": "D1O6AR0BSQKK3XQR",
                                "seriesId": 816002,
                                "description": "doc_test_coupon",
                                "validTill": "2025-07-17T00:00:00Z",
                                "discountType": "PERC",
                                "discountValue": 100,
                                "discountUpto": 0,
                                "redemptionCount": 0,
                                "redemptionsLeft": 5,
                                "id": 1306638254,
                                "createdDate": "2025-07-16T16:01:50Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2025-07-17T23:59:59Z"
                              },
                              {
                                "code": "J5B1OG0BC6J1QLDX",
                                "seriesId": 816002,
                                "description": "doc_test_coupon",
                                "validTill": "2025-07-17T00:00:00Z",
                                "discountType": "PERC",
                                "discountValue": 100,
                                "discountUpto": 0,
                                "redemptionCount": 14,
                                "redemptionsLeft": 5,
                                "id": 1306638176,
                                "createdDate": "2025-07-16T15:56:41Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18182215,
                                    "date": "2025-07-16T15:58:32Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182405,
                                    "date": "2025-07-16T16:15:34Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182412,
                                    "date": "2025-07-16T16:15:53Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182430,
                                    "date": "2025-07-16T16:16:27Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182438,
                                    "date": "2025-07-16T16:16:56Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182468,
                                    "date": "2025-07-16T16:20:26Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182470,
                                    "date": "2025-07-16T16:20:27Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182473,
                                    "date": "2025-07-16T16:20:28Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182475,
                                    "date": "2025-07-16T16:20:29Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182488,
                                    "date": "2025-07-16T16:20:42Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182490,
                                    "date": "2025-07-16T16:20:44Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182492,
                                    "date": "2025-07-16T16:20:46Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182496,
                                    "date": "2025-07-16T16:20:47Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182501,
                                    "date": "2025-07-16T16:21:47Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2025-07-17T23:59:59Z"
                              },
                              {
                                "code": "KDHYDY1N0EYP1FWF",
                                "seriesId": 816003,
                                "description": "doc_doc_coupon",
                                "validTill": "2025-07-17T00:00:00Z",
                                "discountType": "PERC",
                                "discountValue": 10,
                                "discountUpto": 0,
                                "redemptionCount": 14,
                                "redemptionsLeft": 0,
                                "id": 1306638175,
                                "createdDate": "2025-07-16T15:56:41Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18182216,
                                    "date": "2025-07-16T15:58:32Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182406,
                                    "date": "2025-07-16T16:15:34Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182413,
                                    "date": "2025-07-16T16:15:53Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182431,
                                    "date": "2025-07-16T16:16:27Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182439,
                                    "date": "2025-07-16T16:16:56Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182469,
                                    "date": "2025-07-16T16:20:26Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182471,
                                    "date": "2025-07-16T16:20:27Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182474,
                                    "date": "2025-07-16T16:20:28Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182476,
                                    "date": "2025-07-16T16:20:29Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182489,
                                    "date": "2025-07-16T16:20:42Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182491,
                                    "date": "2025-07-16T16:20:44Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182493,
                                    "date": "2025-07-16T16:20:46Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182497,
                                    "date": "2025-07-16T16:20:47Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 18182502,
                                    "date": "2025-07-16T16:21:47Z",
                                    "transactionNumber": "numbr9435064964",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2025-07-17T23:59:59Z"
                              },
                              {
                                "code": "9093147113389818",
                                "seriesId": 804943,
                                "description": "doc_coupon01",
                                "validTill": "2026-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 5000,
                                "discountUpto": 0,
                                "redemptionCount": 1,
                                "redemptionsLeft": 0,
                                "id": 1305582408,
                                "createdDate": "2025-07-02T05:35:59Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 18036029,
                                    "date": "2025-07-02T05:42:57Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-06-11T23:59:59Z"
                              },
                              {
                                "code": "MP9H9T2EJ5",
                                "seriesId": 757291,
                                "description": "Vishu 10% OFF",
                                "validTill": "2026-05-09T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 0,
                                "redemptionsLeft": 5,
                                "id": 1305016621,
                                "createdDate": "2025-06-26T10:30:19Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-05-09T23:59:59Z"
                              },
                              {
                                "code": "RXYEDPREM3BRTF7U",
                                "seriesId": 794088,
                                "description": "DOC_COUPON",
                                "validTill": "2032-06-16T00:00:00Z",
                                "discountType": "PERC",
                                "discountValue": 12,
                                "discountUpto": 12,
                                "redemptionCount": 0,
                                "redemptionsLeft": 1,
                                "id": 1303420745,
                                "createdDate": "2025-06-16T20:46:37Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2032-06-16T23:59:59Z"
                              },
                              {
                                "code": "2VNGQ9Y3DWVBHBE9",
                                "seriesId": 794088,
                                "description": "DOC_COUPON",
                                "validTill": "2032-06-16T00:00:00Z",
                                "discountType": "PERC",
                                "discountValue": 12,
                                "discountUpto": 12,
                                "redemptionCount": 0,
                                "redemptionsLeft": 1,
                                "id": 1303420744,
                                "createdDate": "2025-06-16T20:46:37Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2032-06-16T23:59:59Z"
                              },
                              {
                                "code": "1VV10SV891",
                                "seriesId": 757291,
                                "description": "Vishu 10% OFF",
                                "validTill": "2026-05-09T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 0,
                                "redemptionsLeft": 5,
                                "id": 1303408281,
                                "createdDate": "2025-06-16T12:23:56Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-05-09T23:59:59Z"
                              },
                              {
                                "code": "GEV8LUGIDD",
                                "seriesId": 757291,
                                "description": "Vishu 10% OFF",
                                "validTill": "2026-05-09T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 0,
                                "redemptionsLeft": 5,
                                "id": 1301025591,
                                "createdDate": "2025-06-02T11:26:34Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-05-09T23:59:59Z"
                              },
                              {
                                "code": "YTOWAEN5N0",
                                "seriesId": 757291,
                                "description": "Vishu 10% OFF",
                                "validTill": "2026-05-09T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 0,
                                "redemptionsLeft": 5,
                                "id": 1298658947,
                                "createdDate": "2025-05-23T16:08:25Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-05-09T23:59:59Z"
                              },
                              {
                                "code": "ZLI0HZ0EGH",
                                "seriesId": 757291,
                                "description": "Vishu 10% OFF",
                                "validTill": "2026-05-09T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 500,
                                "discountUpto": 0,
                                "redemptionCount": 0,
                                "redemptionsLeft": 5,
                                "id": 1296377532,
                                "createdDate": "2025-04-30T11:13:36Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2026-05-09T23:59:59Z"
                              },
                              {
                                "code": "UHI3T4V98MRGP0G0",
                                "seriesId": 686692,
                                "description": "50% Off Holi Coupon",
                                "validTill": "2025-06-11T00:00:00Z",
                                "discountType": "ABS",
                                "discountValue": 200,
                                "discountUpto": 0,
                                "redemptionCount": 6,
                                "redemptionsLeft": -1,
                                "id": 1293385129,
                                "createdDate": "2025-04-14T11:49:03Z",
                                "transactionNumber": "0",
                                "issuedAt": {
                                  "code": "doc123",
                                  "name": "DocStore"
                                },
                                "redemptions": [
                                  {
                                    "id": 17423837,
                                    "date": "2025-04-30T10:57:29Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 17596279,
                                    "date": "2025-05-16T15:45:33Z",
                                    "transactionNumber": "bill-110",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 17596293,
                                    "date": "2025-05-16T15:46:14Z",
                                    "transactionNumber": "",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 17596385,
                                    "date": "2025-05-16T16:01:50Z",
                                    "transactionNumber": "bill-110",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 17653665,
                                    "date": "2025-05-21T17:21:01Z",
                                    "transactionNumber": "txnNumberTest1605",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  },
                                  {
                                    "id": 17677044,
                                    "date": "2025-05-23T18:23:36Z",
                                    "transactionNumber": "bill-110",
                                    "redeemedAt": {
                                      "code": "doc123",
                                      "name": "DocStore"
                                    }
                                  }
                                ],
                                "reversedRedemptions": [],
                                "validTillDateTime": "2025-06-11T23:59:59Z"
                              }
                            ]
                          }
                        ]
                      },
                      "warnings": [],
                      "errors": [],
                      "success": true
                    }
                  },
                  "With coupon_code_case=LOWER": {
                    "value": "{\n    \"entity\": {\n        \"pagination\": {\n            \"limit\": \"100\",\n            \"offset\": \"0\",\n            \"total\": 7\n        },\n        \"customers\": [\n            {\n                \"firstname\": \"autofn_917003222195\",\n                \"lastname\": \"autoln_917003222195\",\n                \"email\": \"tom.sawyer@capillarytech.com\",\n                \"mobile\": \"917003222195\",\n                \"id\": 345635529,\n                \"externalId\": \"ext_id917003222195\",\n                \"coupons\": [\n                    {\n                        \"code\": \"tt6wzp7xnw\",\n                        \"seriesId\": 68579,\n                        \"description\": \"test-lekhana-2\",\n                        \"validTill\": \"2024-10-31T00:00:00Z\",\n                        \"discountType\": \"ABS\",\n                        \"discountValue\": 10.0,\n                        \"discountUpto\": 0.0,\n                        \"redemptionCount\": 0,\n                        \"redemptionsLeft\": 1,\n                        \"id\": 39004111,\n                        \"createdDate\": \"2024-10-11T13:18:03Z\",\n                        \"transactionNumber\": \"0\",\n                        \"issuedAt\": {\n                            \"code\": \"store123\",\n                            \"name\": \"MarvelAuto_Store\"\n                        },\n                        \"redemptions\": [],\n                        \"reversedRedemptions\": []\n                    },\n                    {\n                        \"code\": \"ziwy7lzgw8\",\n                        \"seriesId\": 68579,\n                        \"description\": \"test-lekhana-2\",\n                        \"validTill\": \"2024-10-31T00:00:00Z\",\n                        \"discountType\": \"ABS\",\n                        \"discountValue\": 10.0,\n                        \"discountUpto\": 0.0,\n                        \"redemptionCount\": 0,\n                        \"redemptionsLeft\": 1,\n                        \"id\": 39004112,\n                        \"createdDate\": \"2024-10-11T13:18:03Z\",\n                        \"transactionNumber\": \"0\",\n                        \"issuedAt\": {\n                            \"code\": \"store123\",\n                            \"name\": \"MarvelAuto_Store\"\n                        },\n                        \"redemptions\": [],\n                        \"reversedRedemptions\": []\n                    },\n                    {\n                        \"code\": \"hu1dh75hny\",\n                        \"seriesId\": 68579,\n                        \"description\": \"test-lekhana-2\",\n                        \"validTill\": \"2024-10-31T00:00:00Z\",\n                        \"discountType\": \"ABS\",\n                        \"discountValue\": 10.0,\n                        \"discountUpto\": 0.0,\n                        \"redemptionCount\": 0,\n                        \"redemptionsLeft\": 1,\n                        \"id\": 39004113,\n                        \"createdDate\": \"2024-10-11T13:18:03Z\",\n                        \"transactionNumber\": \"0\",\n                        \"issuedAt\": {\n                            \"code\": \"store123\",\n                            \"name\": \"MarvelAuto_Store\"\n                        },\n                        \"redemptions\": [],\n                        \"reversedRedemptions\": []\n                    },\n                    {\n                        \"code\": \"vmqvzcvymt\",\n                        \"seriesId\": 68579,\n                        \"description\": \"test-lekhana-2\",\n                        \"validTill\": \"2024-10-31T00:00:00Z\",\n                        \"discountType\": \"ABS\",\n                        \"discountValue\": 10.0,\n                        \"discountUpto\": 0.0,\n                        \"redemptionCount\": 0,\n                        \"redemptionsLeft\": 1,\n                        \"id\": 36502461,\n                        \"createdDate\": \"2024-10-10T10:37:03Z\",\n                        \"transactionNumber\": \"0\",\n                        \"issuedAt\": {\n                            \"code\": \"store123\",\n                            \"name\": \"MarvelAuto_Store\"\n                        },\n                        \"redemptions\": [],\n                        \"reversedRedemptions\": []\n                    },\n                    {\n                        \"code\": \"x6wqg8kb01\",\n                        \"seriesId\": 68579,\n                        \"description\": \"test-lekhana-2\",\n                        \"validTill\": \"2024-10-31T00:00:00Z\",\n                        \"discountType\": \"ABS\",\n                        \"discountValue\": 10.0,\n                        \"discountUpto\": 0.0,\n                        \"redemptionCount\": 0,\n                        \"redemptionsLeft\": 1,\n                        \"id\": 36502462,\n                        \"createdDate\": \"2024-10-10T10:37:03Z\",\n                        \"transactionNumber\": \"0\",\n                        \"issuedAt\": {\n                            \"code\": \"store123\",\n                            \"name\": \"MarvelAuto_Store\"\n                        },\n                        \"redemptions\": [],\n                        \"reversedRedemptions\": []\n                    },\n                    {\n                        \"code\": \"oo8hf7divr\",\n                        \"seriesId\": 68579,\n                        \"description\": \"test-lekhana-2\",\n                        \"validTill\": \"2024-10-31T00:00:00Z\",\n                        \"discountType\": \"ABS\",\n                        \"discountValue\": 10.0,\n                        \"discountUpto\": 0.0,\n                        \"redemptionCount\": 0,\n                        \"redemptionsLeft\": 1,\n                        \"id\": 36502463,\n                        \"createdDate\": \"2024-10-10T10:37:03Z\",\n                        \"transactionNumber\": \"0\",\n                        \"issuedAt\": {\n                            \"code\": \"store123\",\n                            \"name\": \"MarvelAuto_Store\"\n                        },\n                        \"redemptions\": [],\n                        \"reversedRedemptions\": []\n                    },\n                    {\n                        \"code\": \"w2jjud9yrguaprdur52o\",\n                        \"seriesId\": 68377,\n                        \"description\": \"test-lekhana\",\n                        \"validTill\": \"2024-10-09T00:00:00Z\",\n                        \"discountType\": \"ABS\",\n                        \"discountValue\": 10.0,\n                        \"discountUpto\": 0.0,\n                        \"redemptionCount\": 0,\n                        \"redemptionsLeft\": 1,\n                        \"id\": 36501088,\n                        \"createdDate\": \"2024-10-08T18:29:14Z\",\n                        \"transactionNumber\": \"0\",\n                        \"issuedAt\": {\n                            \"code\": \"store123\",\n                            \"name\": \"MarvelAuto_Store\"\n                        },\n                        \"customProperty\": [\n                            {\n                                \"name\": \"standard_image_1\",\n                                \"value\": \"\"\n                            },\n                            {\n                                \"name\": \"standard_image_2\",\n                                \"value\": \"\"\n                            },\n                            {\n                                \"name\": \"standard_description\",\n                                \"value\": \"DescriptionCustom\"\n                            },\n                            {\n                                \"name\": \"standard_image_3\",\n                                \"value\": \"\"\n                            },\n                            {\n                                \"name\": \"standard_terms_and_conditions\",\n                                \"value\": \"Terms and conditionscustom\"\n                            },\n                            {\n                                \"name\": \"test-xyz\",\n                                \"value\": \"test-xyz custom\"\n                            }\n                        ],\n                        \"redemptions\": [],\n                        \"reversedRedemptions\": []\n                    }\n                ]\n            }\n        ]\n    },\n    \"warnings\": [],\n    \"errors\": [],\n    \"success\": true\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Sample Response",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "object",
                          "properties": {
                            "pagination": {
                              "type": "object",
                              "properties": {
                                "limit": {
                                  "type": "string",
                                  "example": "100"
                                },
                                "offset": {
                                  "type": "string",
                                  "example": "0"
                                },
                                "total": {
                                  "type": "integer",
                                  "example": 99,
                                  "default": 0
                                }
                              }
                            },
                            "customers": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "firstname": {
                                    "type": "string",
                                    "example": "Abijith"
                                  },
                                  "lastname": {
                                    "type": "string",
                                    "example": "Gupta"
                                  },
                                  "mobile": {
                                    "type": "string",
                                    "example": "11223569865"
                                  },
                                  "id": {
                                    "type": "integer",
                                    "example": 555567088,
                                    "default": 0
                                  },
                                  "coupons": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "code": {
                                          "type": "string",
                                          "example": "0355325315"
                                        },
                                        "seriesId": {
                                          "type": "integer",
                                          "example": 415446,
                                          "default": 0
                                        },
                                        "description": {
                                          "type": "string",
                                          "example": " 500AED Voucher "
                                        },
                                        "validTill": {
                                          "type": "string",
                                          "example": "2025-10-31T00:00:00Z"
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
                                        "redemptionCount": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "redemptionsLeft": {
                                          "type": "integer",
                                          "example": 1,
                                          "default": 0
                                        },
                                        "id": {
                                          "type": "integer",
                                          "example": 1293400633,
                                          "default": 0
                                        },
                                        "createdDate": {
                                          "type": "string",
                                          "example": "2025-04-14T16:58:45Z"
                                        },
                                        "transactionNumber": {
                                          "type": "string",
                                          "example": "0"
                                        },
                                        "issuedAt": {
                                          "type": "object",
                                          "properties": {
                                            "code": {
                                              "type": "string",
                                              "example": "1234576"
                                            },
                                            "name": {
                                              "type": "string",
                                              "example": "Dallas DICK'S Sporting Goods"
                                            }
                                          }
                                        },
                                        "customProperty": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "name": {
                                                "type": "string",
                                                "example": "standard_image_1"
                                              },
                                              "value": {
                                                "type": "string",
                                                "example": ""
                                              }
                                            }
                                          }
                                        },
                                        "redemptions": {
                                          "type": "array"
                                        },
                                        "reversedRedemptions": {
                                          "type": "array"
                                        }
                                      }
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
                      "title": "With coupon_code_case=LOWER",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "object",
                          "properties": {
                            "pagination": {
                              "type": "object",
                              "properties": {
                                "limit": {
                                  "type": "string",
                                  "example": "100"
                                },
                                "offset": {
                                  "type": "string",
                                  "example": "0"
                                },
                                "total": {
                                  "type": "integer",
                                  "example": 7,
                                  "default": 0
                                }
                              }
                            },
                            "customers": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "firstname": {
                                    "type": "string",
                                    "example": "autofn_917003222195"
                                  },
                                  "lastname": {
                                    "type": "string",
                                    "example": "autoln_917003222195"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "tom.sawyer@capillarytech.com"
                                  },
                                  "mobile": {
                                    "type": "string",
                                    "example": "917003222195"
                                  },
                                  "id": {
                                    "type": "integer",
                                    "example": 345635529,
                                    "default": 0
                                  },
                                  "externalId": {
                                    "type": "string",
                                    "example": "ext_id917003222195"
                                  },
                                  "coupons": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "code": {
                                          "type": "string",
                                          "example": "tt6wzp7xnw"
                                        },
                                        "seriesId": {
                                          "type": "integer",
                                          "example": 68579,
                                          "default": 0
                                        },
                                        "description": {
                                          "type": "string",
                                          "example": "test-lekhana-2"
                                        },
                                        "validTill": {
                                          "type": "string",
                                          "example": "2024-10-31T00:00:00Z"
                                        },
                                        "discountType": {
                                          "type": "string",
                                          "example": "ABS"
                                        },
                                        "discountValue": {
                                          "type": "integer",
                                          "example": 10,
                                          "default": 0
                                        },
                                        "discountUpto": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "redemptionCount": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "redemptionsLeft": {
                                          "type": "integer",
                                          "example": 1,
                                          "default": 0
                                        },
                                        "id": {
                                          "type": "integer",
                                          "example": 39004111,
                                          "default": 0
                                        },
                                        "createdDate": {
                                          "type": "string",
                                          "example": "2024-10-11T13:18:03Z"
                                        },
                                        "transactionNumber": {
                                          "type": "string",
                                          "example": "0"
                                        },
                                        "issuedAt": {
                                          "type": "object",
                                          "properties": {
                                            "code": {
                                              "type": "string",
                                              "example": "store123"
                                            },
                                            "name": {
                                              "type": "string",
                                              "example": "MarvelAuto_Store"
                                            }
                                          }
                                        },
                                        "redemptions": {
                                          "type": "array"
                                        },
                                        "reversedRedemptions": {
                                          "type": "array"
                                        }
                                      }
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/coupons?external_id=565039504&transaction_numbers=null&mobile=' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic Z2VvcmdlLmRvYzg4OjY1YTA4M2I5NTFmOTBmNTU2OTQ5NWJjZDc1MWJiYmNl' \\\n--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=RfHDJzWLB6cLzUXi3GqEStAoE3VyENMCfiJ6VnbY.sk-1747124901658-0.0.1.1-604800000; _cfuvid=CDkyuoA1GSH7WLzpJ.XDWhuPPiccH_W0Q364L5g6cfE-1747129748999-0.0.1.1-604800000; _cfuvid=_k9r0KQLvP2EhtyqzK3nGXbbjr6i_4dm3nf15LqS2C4-1750845256631-0.0.1.1-604800000; _cfuvid=JgKce0fQk2ukpnH.93mPdUWi6VwkjMWzO5kiPSyMOuo-1757394388274-0.0.1.1-604800000'",
              "name": "cURL"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```