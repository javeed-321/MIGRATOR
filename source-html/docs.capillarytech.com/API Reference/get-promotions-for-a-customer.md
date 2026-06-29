> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Cart Promotions available for a Customer

This API is used to retrieve the cart promotions tagged to a particular customer based on the user ID. This returns cart promotions issued to the customer or POS promotions which are tagged to the customer's tier or supplementary programs.

This API retrieves cart promotions and Point-of-Sale (POS) promotions specifically tagged to a customer based on their user ID. This includes cart promotions directly issued to the customer and POS promotions associated with the customer's loyalty tier or supplementary programs.

<Callout icon="📘" theme="info">
  **Notes**

**The API returns POS promotions under the following conditions:**

* Tier-Specific Promotions: If a promotion is configured for a specific loyalty tier (e.g., "Gold Tier") and the customer making the API call belongs to that tier, the promotion will be included in the response.
* Supplementary Program Promotions: When the includeSupplementaryPromotions parameter in the API call is set to true, promotions linked to supplementary programs will be returned.

**The API will not return POS promotions in these scenarios:**

* "All Loyalty Customers" Promotions: Promotions broadly applicable to all loyalty members, without being tied to a particular tier, are not returned by this API.
* No Tier or Supplementary Program Association: If a POS promotion is not explicitly linked to a customer tier or a supplementary program, it will not be part of the API's response.

**Result limit and sort order:**

* The API returns a maximum of 10 promotions by default, sorted by expiry date (latest first). Use the `limit` query parameter to override this default.
* The API response does not include pagination metadata such as `limit` or `skip`. To retrieve promotions beyond the default limit, pass a higher value using the `limit` parameter.
  </Callout>

# Example request

```curl
curl --location 'https://{Host}/api_gateway/v1/promotions/customer/566881933?includeRedemptions=true&isIncludeActivePromotionsOnly=true' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=uvNcgoyX0Q6nkA64njE4pSA_tJw1wkWo-1762160764633-0.0.1.1-604800000'
```
```curl filter by "entityId"
curl --location 'https://{Host}/api_gateway/v1/promotions/customer/566881933?includeRedemptions=true&isIncludeActivePromotionsOnly=true&entityId=50079370' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=uvNcgoyX0Q6nkA64njE4pSA_tJw1wkWo-1762160764633-0.0.1.1-604800000'
```
```curl with supplementary promotions and increased limit
curl --location 'https://{Host}/api_gateway/v1/promotions/customer/566881933?includeRedemptions=true&isIncludeActivePromotionsOnly=true&includeSupplementaryPromotions=true&limit=20' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=uvNcgoyX0Q6nkA64njE4pSA_tJw1wkWo-1762160764633-0.0.1.1-604800000'
```

# Prerequisites

* Authentication: Basic or OAuth authentication.

* Default access group

# Resource information

|               |    |
| :------------ | :- |
| Pagination    | No |
| Batch support | No |

# Path parameters

| Field      | Type   | Required | Description                         |
| :--------- | :----- | :------- | :---------------------------------- |
| customerId | Number | Yes      | Unique identifier for the customer. |

# Query parameters

| Field                          | Type    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                |
| :----------------------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeRedemptions             | Boolean | Optional | If true, includes the restrictions applied to the cart promotion, such as maxLimit and remainingRedemption.                                                                                                                                                                                                                                                                                |
| includeSupplementaryPromotions | Boolean | Optional | If true, includes POS cart promotions tagged to the customer's supplementary programs. Supplementary promotions with later expiry dates are sorted to the top of the result set, which will cause other promotions to be omitted from the response when the result limit is reached.                                                                                                       |
| isIncludeActivePromotionsOnly  | Boolean | Optional | If true, returns only cart promotions that are currently active.                                                                                                                                                                                                                                                                                                                           |
| entityId                       | Long    | Optional | Filters the response to promotions associated with the specified entity. The entity ID is resolved against the org hierarchy, passing a ZONE, TILL, STORE or  ID, which includes all promotions mapped to entities within that hierarchy. Promotions not mapped to any till or store are always included, regardless of the value passed. If omitted, no store-based filtering is applied. |
| limit                          | Integer | Optional | Specifies the maximum number of promotions to return. Defaults to 10 if not provided.                                                                                                                                                                                                                                                                                                      |

# Example response

```json
{
    "data": [
        {
            "earnedPromotionId": "68df4539dd46cd232fb6fbd3",
            "promotionId": "68df4516f398ae3dc88031df",
            "promotionName": "cart_based test jo",
            "validTill": 1790985600000,
            "validTillISO": "2026-10-03T00:00:00Z",
            "unlockedDate": 1759462713920,
            "unlockedDateISO": "2025-10-03T03:38:33Z",
            "customerId": 566881933,
            "earnedType": "NONE",
            "earnedStatus": "UNLOCKED",
            "promotionStatus": "INACTIVE",
            "applicationMode": "DISCOUNT",
            "redeemableFrom": 1759462713920,
            "redeemableFromISO": "2025-10-03T03:38:33Z",
            "customFieldValues": {
                "Age": "25"
            },
            "eventTime": 1759462713920,
            "eventTimeISO": "2025-10-03T03:38:33Z"
        }
    ],
    "errors": []
}
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
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
        data
      </td>

      <td>
        Array
      </td>

      <td>
        Defines a list of cart promotion objects available to the customer.
      </td>
    </tr>

    <tr>
      <td>
        .earnedPromotionId
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the unique identifier for the instance of the earned cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the unique identifier of the base Cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .promotionName
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the name of the Cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .validTill
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the expiration timestamp in milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        .validTillISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the expiration timestamp of the cart promotion in ISO 8601 format, returned in the server time zone.

        EU server example 2026-10-03T00:00:00Z → 03 October 2026, 00:00:00 (UTC)

        India server example 2026-10-03T05:30:00+05:30 → 03 October 2026, 05:30:00 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        .unlockedDate
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the timestamp when the cart promotion became available (unlocked) for use, in UTC.  
        Time format: milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        .unlockedDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the timestamp when the cart promotion became available in UTC in ISO 8601 format, returned in the server time zone.

        EU server example 2026-02-04T09:12:45Z → 04 February 2026, 09:12:45 (UTC)

        India server example 2026-02-04T14:42:45+05:30 → 04 February 2026, 14:42:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        .customerId
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the Unique Identifier of the Customer using the Cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .earnedType
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the method how cart cart promotion was earned.
      </td>
    </tr>

    <tr>
      <td>
        .earnedStatus
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the status of the earned cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .promotionStatus
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the overall status of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .milestoneId
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the milestone or achievement target linked to the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .targetGroupId
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the identifier for a specific customer group eligible for the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .applicationMode
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the way the cart promotion is applied.
      </td>
    </tr>

    <tr>
      <td>
        .redeemableFrom
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the timestamp from when the cart promotion is redeemable, in UTC.  
        Time format: milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        .redeemableFromISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the timestamp from when the cart promotion is redeemable in UTC in ISO 8601 format, returned in the server time zone.

        EU server example 2026-02-04T09:14:10Z → 04 February 2026, 09:14:10 (UTC)

        India server example 2026-02-04T14:44:10+05:30 → 04 February 2026, 14:44:10 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        .customFieldValues
      </td>

      <td>
        Object
      </td>

      <td>
        Defines an object containing custom key-value pairs related to the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        .eventTime
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the timestamp of the event that triggered the cart promotion, in UTC.  
        Time format: milliseconds since epoch.
      </td>
    </tr>

    <tr>
      <td>
        .eventTimeISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the timestamp of the event in UTC in ISO 8601 format, returned in the server time zone.

        EU server example 2026-02-04T09:11:58Z → 04 February 2026, 09:11:58 (UTC)

        India server example 2026-02-04T14:41:58+05:30 → 04 February 2026, 14:41:58 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        .restrictions
      </td>

      <td>
        Object
      </td>

      <td>
        Defines an object containing restrictions categorized by level. Indicates this is returned if includeRedemptions=true.
      </td>
    </tr>

    <tr>
      <td>
        ..Cart
      </td>

      <td>
        Array
      </td>

      <td>
        Defines an array of cart-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        ..Customer
      </td>

      <td>
        Array
      </td>

      <td>
        Defines an array of customer-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        ..Promotion
      </td>

      <td>
        Array
      </td>

      <td>
        Defines an array of cart promotion-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        ..Product
      </td>

      <td>
        Array
      </td>

      <td>
        Defines an array of product-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        ..Category
      </td>

      <td>
        Array
      </td>

      <td>
        Defines an array of category-level restrictions.
      </td>
    </tr>

    <tr>
      <td>
        ...kpi
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the key metric used for restriction.
      </td>
    </tr>

    <tr>
      <td>
        ...maxLimit
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the maximum allowed limit for the restriction.
      </td>
    </tr>

    <tr>
      <td>
        ...remainingRedemption
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the remaining number of times the cart promotion can be used.
      </td>
    </tr>

    <tr>
      <td>
        ...windowType
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the type of limit window applied to this restriction.
      </td>
    </tr>

    <tr>
      <td>
        ...fixedWindowConfig
      </td>

      <td>
        Object
      </td>

      <td>
        Indicates the cycle configuration for the restriction when `windowType` is `FIXED`.
      </td>
    </tr>

    <tr>
      <td>
        ....cycleType
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the type of fixed cycle.
      </td>
    </tr>

    <tr>
      <td>
        ....weekStartDay
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the start day of the weekly cycle when `cycleType` is `WEEK`.
      </td>
    </tr>

    <tr>
      <td>
        ....refreshRate
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the number of days per cycle when `cycleType` is `N_DAY`.
      </td>
    </tr>

    <tr>
      <td>
        ....cycleReferenceDate
      </td>

      <td>
        Long
      </td>

      <td>
        Epoch timestamp in milliseconds. The anchor date from which N_DAY cycles are calculated. Interpreted in the org's configured timezone.
      </td>
    </tr>

    <tr>
      <td>
        ...currentCycle
      </td>

      <td>
        Object
      </td>

      <td>
        Indicates the active cycle window at the time of the API call. Only present when `windowType` is `FIXED`.
      </td>
    </tr>

    <tr>
      <td>
        ....startDate
      </td>

      <td>
        Long
      </td>

      <td>
        Epoch timestamp in milliseconds. Inclusive start of the current cycle window.
      </td>
    </tr>

    <tr>
      <td>
        ....endDate
      </td>

      <td>
        Long
      </td>

      <td>
        Epoch timestamp in milliseconds. Inclusive end of the current cycle window.
      </td>
    </tr>

    <tr>
      <td>
        ...periodStart
      </td>

      <td>
        Long
      </td>

      <td>
        Epoch timestamp in milliseconds. Same as `currentCycle.startDate`; used for display and UI rendering. Returns `null` for `OVERALL` restrictions.
      </td>
    </tr>

    <tr>
      <td>
        ...periodEnd
      </td>

      <td>
        Long
      </td>

      <td>
        Epoch timestamp in milliseconds. Same as `currentCycle.endDate`; used for display and UI rendering. Returns `null` for `OVERALL` restrictions.
      </td>
    </tr>

    <tr>
      <td>
        .supplementaryCriteria
      </td>

      <td>
        Object
      </td>

      <td>
        Defines additional loyalty-based conditions. Indicates this is returned if includeSupplementary Promotions is set to `true`.
      </td>
    </tr>

    <tr>
      <td>
        ..loyaltyprogramId
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the identifier of the associated loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        ..programType
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the type of program.
      </td>
    </tr>

    <tr>
      <td>
        ..partnerprogramId
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the partner program ID.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array
      </td>

      <td>
        Defines a list of error objects, which is empty on success.
      </td>
    </tr>
  </tbody>
</Table>

## Error codes

| HTTP code | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| 400       | Invalid request. Check required path or query parameters.    |
| 401       | Authentication failed. Check your API key or credentials.    |
| 404       | Customer not found. The specified customerId does not exist. |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v1",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}",
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
    "/api_gateway/v1/promotions/customer/109943742?includeRedemptions=true&includeSupplementaryPromotions=true": {
      "get": {
        "summary": "Get Cart Promotions for a Customer",
        "description": "This API is used to retrieve the cart promotions tagged to a particular customer based on the user ID. This returns cart promotions issued to the customer or POS promotions which are tagged to the customer's tier or supplementary programs.",
        "operationId": "get-promotions-for-a-customer",
        "parameters": [
          {
            "name": "includeRedemptions",
            "in": "query",
            "description": "includeRedemptions=true includes the restrictions applied to the promotion including max limit and remaining redemptions",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "includeSupplementaryPromotions",
            "in": "query",
            "description": "includeSupplementaryPromotions=true includes the POS promotions tagged to the customer's tier or supplementary program",
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
                  "includeRedemptions=true&includeSupplementaryPromotions=true": {
                    "value": "{\n    \"data\": [\n        {\n            \"promotionId\": \"6460c3e8bd84737237d53ae6\",\n            \"promotionName\": \"25¢ off per gallon for Gold Members\",\n            \"validTill\": 1704067199999,\n            \"customerId\": 100458,\n            \"earnedType\": \"TIER\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"supplementaryCriteria\": {\n                \"loyaltyProgramId\": 469,\n                \"programType\": \"TIER\",\n                \"partnerProgramId\": 1207\n            },\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {\n                \"t&c\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"Test_Cap\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"Field\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"image_url\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"partner 1 liability value\": \"1\"\n            },\n            \"restrictions\": {\n                \"Cart\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"99999.000000\",\n                        \"remainingRedemption\": \"99999.000000\"\n                    }\n                ],\n                \"Customer\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"99999.000000\",\n                        \"remainingRedemption\": \"99981.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1684002600000\n        },\n        {\n            \"earnedPromotionId\": \"64c0efc4468f3c6d37cea957\",\n            \"promotionId\": \"6461b3771baa292a997ada73\",\n            \"promotionName\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n            \"validTill\": 1704047399999,\n            \"unlockedDate\": 1690365891325,\n            \"customerId\": 109943742,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"redeemableFrom\": 1690365892735,\n            \"customFieldValues\": {\n                \"t&c\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Test_Cap\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Field\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"image_url\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"partner 1 liability value\": \"1\"\n            },\n            \"restrictions\": {\n                \"Cart\": [\n                    {\n                        \"kpi\": \"DISCOUNT\",\n                        \"maxLimit\": \"3.000000\",\n                        \"remainingRedemption\": \"3.000000\"\n                    }\n                ],\n                \"Customer\": [\n                    {\n                        \"kpi\": \"TRANSACTION\",\n                        \"maxLimit\": \"5.000000\",\n                        \"remainingRedemption\": \"4.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1690365892735\n        },\n        {\n            \"promotionId\": \"64de1f74c69ccc25d2b432e4\",\n            \"promotionName\": \"VIP Lounge Access (Gold)\",\n            \"validTill\": 1693526399999,\n            \"customerId\": 100458,\n            \"earnedType\": \"TIER\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"supplementaryCriteria\": {\n                \"loyaltyProgramId\": 469,\n                \"programType\": \"TIER\",\n                \"partnerProgramId\": 1207\n            },\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"restrictions\": {\n                \"Cart\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"1.000000\",\n                        \"remainingRedemption\": \"1.000000\"\n                    }\n                ],\n                \"Customer\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"7.000000\",\n                        \"remainingRedemption\": \"7.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1692210600000\n        },\n        {\n            \"promotionId\": \"64de1789c1e1de7955eb0002\",\n            \"promotionName\": \"Tier Benefits - Parking( Gold)\",\n            \"validTill\": 1693526399999,\n            \"customerId\": 100458,\n            \"earnedType\": \"TIER\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"supplementaryCriteria\": {\n                \"loyaltyProgramId\": 469,\n                \"programType\": \"TIER\",\n                \"partnerProgramId\": 1207\n            },\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"restrictions\": {\n                \"Cart\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"1.000000\",\n                        \"remainingRedemption\": \"1.000000\"\n                    }\n                ],\n                \"Customer\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"10.000000\",\n                        \"remainingRedemption\": \"10.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1692210600000\n        }\n    ],\n    \"errors\": []\n}"
                  },
                  "includeRedemptions=true": {
                    "value": "{\n    \"data\": [\n        {\n            \"earnedPromotionId\": \"64c0efc4468f3c6d37cea957\",\n            \"promotionId\": \"6461b3771baa292a997ada73\",\n            \"promotionName\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n            \"validTill\": 1704047399999,\n            \"unlockedDate\": 1690365891325,\n            \"customerId\": 109943742,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"redeemableFrom\": 1690365892735,\n            \"customFieldValues\": {\n                \"t&c\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Test_Cap\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Field\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"image_url\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"partner 1 liability value\": \"1\"\n            },\n            \"restrictions\": {\n                \"Cart\": [\n                    {\n                        \"kpi\": \"DISCOUNT\",\n                        \"maxLimit\": \"3.000000\",\n                        \"remainingRedemption\": \"3.000000\"\n                    }\n                ],\n                \"Customer\": [\n                    {\n                        \"kpi\": \"TRANSACTION\",\n                        \"maxLimit\": \"5.000000\",\n                        \"remainingRedemption\": \"4.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1690365892735\n        }\n    ],\n    \"errors\": []\n}"
                  },
                  "includeSupplementaryPromotions=true": {
                    "value": "{\n    \"data\": [\n        {\n            \"promotionId\": \"6460c3e8bd84737237d53ae6\",\n            \"promotionName\": \"25¢ off per gallon for Gold Members\",\n            \"validTill\": 1704067199999,\n            \"customerId\": 100458,\n            \"earnedType\": \"TIER\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"supplementaryCriteria\": {\n                \"loyaltyProgramId\": 469,\n                \"programType\": \"TIER\",\n                \"partnerProgramId\": 1207\n            },\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {\n                \"t&c\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"Test_Cap\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"Field\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"image_url\": \"5¢ off per gallon for Premium Members SF for all fuel ups\",\n                \"partner 1 liability value\": \"1\"\n            },\n            \"eventTime\": 1684002600000\n        },\n        {\n            \"earnedPromotionId\": \"64c0efc4468f3c6d37cea957\",\n            \"promotionId\": \"6461b3771baa292a997ada73\",\n            \"promotionName\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n            \"validTill\": 1704047399999,\n            \"unlockedDate\": 1690365891325,\n            \"customerId\": 109943742,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"redeemableFrom\": 1690365892735,\n            \"customFieldValues\": {\n                \"t&c\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Test_Cap\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Field\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"image_url\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"partner 1 liability value\": \"1\"\n            },\n            \"eventTime\": 1690365892735\n        },\n        {\n            \"promotionId\": \"64de1f74c69ccc25d2b432e4\",\n            \"promotionName\": \"VIP Lounge Access (Gold)\",\n            \"validTill\": 1693526399999,\n            \"customerId\": 100458,\n            \"earnedType\": \"TIER\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"supplementaryCriteria\": {\n                \"loyaltyProgramId\": 469,\n                \"programType\": \"TIER\",\n                \"partnerProgramId\": 1207\n            },\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"eventTime\": 1692210600000\n        },\n        {\n            \"promotionId\": \"64de1789c1e1de7955eb0002\",\n            \"promotionName\": \"Tier Benefits - Parking( Gold)\",\n            \"validTill\": 1693526399999,\n            \"customerId\": 100458,\n            \"earnedType\": \"TIER\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"supplementaryCriteria\": {\n                \"loyaltyProgramId\": 469,\n                \"programType\": \"TIER\",\n                \"partnerProgramId\": 1207\n            },\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"eventTime\": 1692210600000\n        }\n    ],\n    \"errors\": []\n}"
                  },
                  "no query param": {
                    "value": "{\n    \"data\": [\n        {\n            \"earnedPromotionId\": \"64c0efc4468f3c6d37cea957\",\n            \"promotionId\": \"6461b3771baa292a997ada73\",\n            \"promotionName\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n            \"validTill\": 1704047399999,\n            \"unlockedDate\": 1690365891325,\n            \"customerId\": 109943742,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"redeemableFrom\": 1690365892735,\n            \"customFieldValues\": {\n                \"t&c\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Test_Cap\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"Field\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"image_url\": \"Enrollment:15¢ off per gallon for 5 fuel ups\",\n                \"partner 1 liability value\": \"1\"\n            },\n            \"eventTime\": 1690365892735\n        }\n    ],\n    \"errors\": []\n}"
                  },
                  "Response with all restrictions applied": {
                    "value": "{\n    \"data\": [\n        {\n            \"earnedPromotionId\": \"67efba82b206f929966ac2e5\",\n            \"promotionId\": \"67efba69b206f929966ac2e3\",\n            \"promotionName\": \"AllRestrictions\",\n            \"validTill\": 1746383399999,\n            \"unlockedDate\": 1743764098940,\n            \"customerId\": 564332013,\n            \"earnedType\": \"NONE\",\n            \"earnedStatus\": \"UNLOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"applicationMode\": \"DISCOUNT\",\n            \"redeemableFrom\": 1743764098940,\n            \"customFieldValues\": {},\n            \"restrictions\": {\n                \"Customer\": [\n                    {\n                        \"kpi\": \"DISCOUNT\",\n                        \"maxLimit\": \"2.000000\",\n                        \"remainingRedemption\": \"1.000000\"\n                    },\n                    {\n                        \"kpi\": \"TRANSACTION\",\n                        \"maxLimit\": \"2.000000\",\n                        \"remainingRedemption\": \"1.000000\"\n                    },\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"2.000000\",\n                        \"remainingRedemption\": \"1.000000\"\n                    }\n                ],\n                \"Cart\": [\n                    {\n                        \"kpi\": \"DISCOUNT\",\n                        \"maxLimit\": \"100.000000\",\n                        \"remainingRedemption\": \"100.000000\"\n                    },\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"2.000000\",\n                        \"remainingRedemption\": \"2.000000\"\n                    }\n                ],\n                \"Promotion\": [\n                    {\n                        \"kpi\": \"DISCOUNT\",\n                        \"maxLimit\": \"100.000000\",\n                        \"remainingRedemption\": \"99.000000\"\n                    },\n                    {\n                        \"kpi\": \"TRANSACTION\",\n                        \"maxLimit\": \"2.000000\",\n                        \"remainingRedemption\": \"1.000000\"\n                    },\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"2.000000\",\n                        \"remainingRedemption\": \"1.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1743764098940\n        },\n        {\n            \"promotionId\": \"67e27c04ef21a6421122a163\",\n            \"promotionName\": \"SummerPromotion\",\n            \"validTill\": 1746057599999,\n            \"customerId\": 564332013,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"LOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"restrictions\": {\n                \"Cart\": [\n                    {\n                        \"kpi\": \"DISCOUNT\",\n                        \"maxLimit\": \"1000.000000\",\n                        \"remainingRedemption\": \"1000.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1742962288452\n        },\n        {\n            \"promotionId\": \"67e3c1073919452f135e2da0\",\n            \"promotionName\": \"2 items in cart\",\n            \"validTill\": 1746057599999,\n            \"customerId\": 564332013,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"LOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"restrictions\": {\n                \"Cart\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"2.000000\",\n                        \"remainingRedemption\": \"2.000000\"\n                    }\n                ]\n            },\n            \"eventTime\": 1743140185189\n        },\n        {\n            \"promotionId\": \"67e62ac48c0df9394671a7d4\",\n            \"promotionName\": \"txn above 100\",\n            \"validTill\": 1746057599999,\n            \"customerId\": 564332013,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"LOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"eventTime\": 1743140407695\n        },\n        {\n            \"promotionId\": \"67e62aefe1c34e7d8e934853\",\n            \"promotionName\": \"txn above 500\",\n            \"validTill\": 1746057599999,\n            \"customerId\": 564332013,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"LOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"eventTime\": 1743140430852\n        },\n        {\n            \"promotionId\": \"67ed02dcb206f929966aaf33\",\n            \"promotionName\": \"Txn250\",\n            \"validTill\": 1746057599999,\n            \"customerId\": 564332013,\n            \"earnedType\": \"SINGLE_ACTIVITY_EARN\",\n            \"earnedStatus\": \"LOCKED\",\n            \"promotionStatus\": \"ACTIVE\",\n            \"mileStoneId\": 0,\n            \"targetGroupId\": 0,\n            \"applicationMode\": \"DISCOUNT\",\n            \"customFieldValues\": {},\n            \"restrictions\": {\n                \"Customer\": [\n                    {\n                        \"kpi\": \"REDEMPTION\",\n                        \"maxLimit\": \"3.000000\",\n                        \"remainingRedemption\": \"0\"\n                    }\n                ]\n            },\n            \"eventTime\": 1743586059055\n        }\n    ],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "includeRedemptions=true&includeSupplementaryPromotions=true",
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "promotionId": {
                                "type": "string",
                                "example": "6460c3e8bd84737237d53ae6"
                              },
                              "promotionName": {
                                "type": "string",
                                "example": "25¢ off per gallon for Gold Members"
                              },
                              "validTill": {
                                "type": "integer",
                                "example": 1704067199999,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 100458,
                                "default": 0
                              },
                              "earnedType": {
                                "type": "string",
                                "example": "TIER"
                              },
                              "earnedStatus": {
                                "type": "string",
                                "example": "UNLOCKED"
                              },
                              "promotionStatus": {
                                "type": "string",
                                "example": "ACTIVE"
                              },
                              "supplementaryCriteria": {
                                "type": "object",
                                "properties": {
                                  "loyaltyProgramId": {
                                    "type": "integer",
                                    "example": 469,
                                    "default": 0
                                  },
                                  "programType": {
                                    "type": "string",
                                    "example": "TIER"
                                  },
                                  "partnerProgramId": {
                                    "type": "integer",
                                    "example": 1207,
                                    "default": 0
                                  }
                                }
                              },
                              "applicationMode": {
                                "type": "string",
                                "example": "DISCOUNT"
                              },
                              "customFieldValues": {
                                "type": "object",
                                "properties": {
                                  "t&c": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "Test_Cap": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "Field": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "image_url": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "partner 1 liability value": {
                                    "type": "string",
                                    "example": "1"
                                  }
                                }
                              },
                              "restrictions": {
                                "type": "object",
                                "properties": {
                                  "Cart": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "kpi": {
                                          "type": "string",
                                          "example": "REDEMPTION"
                                        },
                                        "maxLimit": {
                                          "type": "string",
                                          "example": "99999.000000"
                                        },
                                        "remainingRedemption": {
                                          "type": "string",
                                          "example": "99999.000000"
                                        }
                                      }
                                    }
                                  },
                                  "Customer": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "kpi": {
                                          "type": "string",
                                          "example": "REDEMPTION"
                                        },
                                        "maxLimit": {
                                          "type": "string",
                                          "example": "99999.000000"
                                        },
                                        "remainingRedemption": {
                                          "type": "string",
                                          "example": "99981.000000"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "eventTime": {
                                "type": "integer",
                                "example": 1684002600000,
                                "default": 0
                              }
                            }
                          }
                        },
                        "errors": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "includeRedemptions=true",
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "earnedPromotionId": {
                                "type": "string",
                                "example": "64c0efc4468f3c6d37cea957"
                              },
                              "promotionId": {
                                "type": "string",
                                "example": "6461b3771baa292a997ada73"
                              },
                              "promotionName": {
                                "type": "string",
                                "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                              },
                              "validTill": {
                                "type": "integer",
                                "example": 1704047399999,
                                "default": 0
                              },
                              "unlockedDate": {
                                "type": "integer",
                                "example": 1690365891325,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 109943742,
                                "default": 0
                              },
                              "earnedType": {
                                "type": "string",
                                "example": "SINGLE_ACTIVITY_EARN"
                              },
                              "earnedStatus": {
                                "type": "string",
                                "example": "UNLOCKED"
                              },
                              "promotionStatus": {
                                "type": "string",
                                "example": "ACTIVE"
                              },
                              "mileStoneId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "targetGroupId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "applicationMode": {
                                "type": "string",
                                "example": "DISCOUNT"
                              },
                              "redeemableFrom": {
                                "type": "integer",
                                "example": 1690365892735,
                                "default": 0
                              },
                              "customFieldValues": {
                                "type": "object",
                                "properties": {
                                  "t&c": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "Test_Cap": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "Field": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "image_url": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "partner 1 liability value": {
                                    "type": "string",
                                    "example": "1"
                                  }
                                }
                              },
                              "restrictions": {
                                "type": "object",
                                "properties": {
                                  "Cart": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "kpi": {
                                          "type": "string",
                                          "example": "DISCOUNT"
                                        },
                                        "maxLimit": {
                                          "type": "string",
                                          "example": "3.000000"
                                        },
                                        "remainingRedemption": {
                                          "type": "string",
                                          "example": "3.000000"
                                        }
                                      }
                                    }
                                  },
                                  "Customer": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "kpi": {
                                          "type": "string",
                                          "example": "TRANSACTION"
                                        },
                                        "maxLimit": {
                                          "type": "string",
                                          "example": "5.000000"
                                        },
                                        "remainingRedemption": {
                                          "type": "string",
                                          "example": "4.000000"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "eventTime": {
                                "type": "integer",
                                "example": 1690365892735,
                                "default": 0
                              }
                            }
                          }
                        },
                        "errors": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "includeSupplementaryPromotions=true",
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "promotionId": {
                                "type": "string",
                                "example": "6460c3e8bd84737237d53ae6"
                              },
                              "promotionName": {
                                "type": "string",
                                "example": "25¢ off per gallon for Gold Members"
                              },
                              "validTill": {
                                "type": "integer",
                                "example": 1704067199999,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 100458,
                                "default": 0
                              },
                              "earnedType": {
                                "type": "string",
                                "example": "TIER"
                              },
                              "earnedStatus": {
                                "type": "string",
                                "example": "UNLOCKED"
                              },
                              "promotionStatus": {
                                "type": "string",
                                "example": "ACTIVE"
                              },
                              "supplementaryCriteria": {
                                "type": "object",
                                "properties": {
                                  "loyaltyProgramId": {
                                    "type": "integer",
                                    "example": 469,
                                    "default": 0
                                  },
                                  "programType": {
                                    "type": "string",
                                    "example": "TIER"
                                  },
                                  "partnerProgramId": {
                                    "type": "integer",
                                    "example": 1207,
                                    "default": 0
                                  }
                                }
                              },
                              "applicationMode": {
                                "type": "string",
                                "example": "DISCOUNT"
                              },
                              "customFieldValues": {
                                "type": "object",
                                "properties": {
                                  "t&c": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "Test_Cap": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "Field": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "image_url": {
                                    "type": "string",
                                    "example": "5¢ off per gallon for Premium Members SF for all fuel ups"
                                  },
                                  "partner 1 liability value": {
                                    "type": "string",
                                    "example": "1"
                                  }
                                }
                              },
                              "eventTime": {
                                "type": "integer",
                                "example": 1684002600000,
                                "default": 0
                              }
                            }
                          }
                        },
                        "errors": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "no query param",
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "earnedPromotionId": {
                                "type": "string",
                                "example": "64c0efc4468f3c6d37cea957"
                              },
                              "promotionId": {
                                "type": "string",
                                "example": "6461b3771baa292a997ada73"
                              },
                              "promotionName": {
                                "type": "string",
                                "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                              },
                              "validTill": {
                                "type": "integer",
                                "example": 1704047399999,
                                "default": 0
                              },
                              "unlockedDate": {
                                "type": "integer",
                                "example": 1690365891325,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 109943742,
                                "default": 0
                              },
                              "earnedType": {
                                "type": "string",
                                "example": "SINGLE_ACTIVITY_EARN"
                              },
                              "earnedStatus": {
                                "type": "string",
                                "example": "UNLOCKED"
                              },
                              "promotionStatus": {
                                "type": "string",
                                "example": "ACTIVE"
                              },
                              "mileStoneId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "targetGroupId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "applicationMode": {
                                "type": "string",
                                "example": "DISCOUNT"
                              },
                              "redeemableFrom": {
                                "type": "integer",
                                "example": 1690365892735,
                                "default": 0
                              },
                              "customFieldValues": {
                                "type": "object",
                                "properties": {
                                  "t&c": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "Test_Cap": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "Field": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "image_url": {
                                    "type": "string",
                                    "example": "Enrollment:15¢ off per gallon for 5 fuel ups"
                                  },
                                  "partner 1 liability value": {
                                    "type": "string",
                                    "example": "1"
                                  }
                                }
                              },
                              "eventTime": {
                                "type": "integer",
                                "example": 1690365892735,
                                "default": 0
                              }
                            }
                          }
                        },
                        "errors": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Response with all restrictions applied",
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "earnedPromotionId": {
                                "type": "string",
                                "example": "67efba82b206f929966ac2e5"
                              },
                              "promotionId": {
                                "type": "string",
                                "example": "67efba69b206f929966ac2e3"
                              },
                              "promotionName": {
                                "type": "string",
                                "example": "AllRestrictions"
                              },
                              "validTill": {
                                "type": "integer",
                                "example": 1746383399999,
                                "default": 0
                              },
                              "unlockedDate": {
                                "type": "integer",
                                "example": 1743764098940,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 564332013,
                                "default": 0
                              },
                              "earnedType": {
                                "type": "string",
                                "example": "NONE"
                              },
                              "earnedStatus": {
                                "type": "string",
                                "example": "UNLOCKED"
                              },
                              "promotionStatus": {
                                "type": "string",
                                "example": "ACTIVE"
                              },
                              "applicationMode": {
                                "type": "string",
                                "example": "DISCOUNT"
                              },
                              "redeemableFrom": {
                                "type": "integer",
                                "example": 1743764098940,
                                "default": 0
                              },
                              "customFieldValues": {
                                "type": "object",
                                "properties": {}
                              },
                              "restrictions": {
                                "type": "object",
                                "properties": {
                                  "Customer": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "kpi": {
                                          "type": "string",
                                          "example": "DISCOUNT"
                                        },
                                        "maxLimit": {
                                          "type": "string",
                                          "example": "2.000000"
                                        },
                                        "remainingRedemption": {
                                          "type": "string",
                                          "example": "1.000000"
                                        }
                                      }
                                    }
                                  },
                                  "Cart": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "kpi": {
                                          "type": "string",
                                          "example": "DISCOUNT"
                                        },
                                        "maxLimit": {
                                          "type": "string",
                                          "example": "100.000000"
                                        },
                                        "remainingRedemption": {
                                          "type": "string",
                                          "example": "100.000000"
                                        }
                                      }
                                    }
                                  },
                                  "Promotion": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "kpi": {
                                          "type": "string",
                                          "example": "DISCOUNT"
                                        },
                                        "maxLimit": {
                                          "type": "string",
                                          "example": "100.000000"
                                        },
                                        "remainingRedemption": {
                                          "type": "string",
                                          "example": "99.000000"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "eventTime": {
                                "type": "integer",
                                "example": 1743764098940,
                                "default": 0
                              }
                            }
                          }
                        },
                        "errors": {
                          "type": "array"
                        }
                      }
                    }
                  ]
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
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/customer/566881933?includeRedemptions=true&isIncludeActivePromotionsOnly=true' \\\n--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhMjI2MTk1OGE2NWI5ZjAxMzU5NGIwNDllZTk=' \\\n--header 'Cookie: _cfuvid=uvNcgoyX0Q6nY4banbmZMCVkA64njE4pSA_tJw1wkWo-1762160764633-0.0.1.1-604800000'"
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