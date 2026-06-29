> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get coupon details

This API retrieves the details of one or more coupons by coupon codes or IDs, or get coupons issued to specific customers.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Example request

```curl Sample request with coupon series details
curl --location 'https://eu.api.capillarytech.com/v2/coupon?couponCodes=YTOWAEN5N0&showCouponSeries=true' \
--header 'Authorization: Basic YyZTZm' \
--header 'Cookie: _cfuvid=N8eBMQkzAuS0B.TF12bNd.D2Foo6GiTEeU_Hb2aUc1U-1768823280663-0.0.1.1-604800000'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|                        |         |
| :--------------------- | :------ |
| URL                    | /coupon |
| HTTP Method            | GET     |
| Pagination             | No      |
| Batch support          | No      |
| Rate limit information | None    |

# API endpoint example

`https://eu.api.capillarytech.com/v2/coupon?issuedToIds=345635529&coupon_code_case=LOWER`

# Request Query parameter

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
        `issuedToIds`
      </td>

      <td>
        Integer
      </td>

      <td>
        Fetch coupons issued to specific customers. Pass customer IDs to fetch.
      </td>
    </tr>

    <tr>
      <td>
        `couponIds*`
      </td>

      <td>
        Integer
      </td>

      <td>
        Fetch coupon details by coupon IDs.
        To fetch multiple coupons, use the id or code parameters repeatedly in your API request,
        **For example:**
        ?couponIds=123&couponIds=456 or ?couponCodes=ABC&couponCodes=DEF.  
        Mandatory if `couponCodes` is not provided.
      </td>
    </tr>

    <tr>
      <td>
        `couponCodes*`
      </td>

      <td>
        String
      </td>

      <td>
        Fetch coupon details by coupon code.  
        Mandatory if `couponIds` is not provided.
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
        This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive.  
        **Supported Values**: `LOWER`: Converts the coupon code to lower case.  
        `UPPER`: Converts the coupon codes to upper case.  
        `AS_IT_IS`: It ensures that the coupon code is retrieved exactly as it was created or provided, without altering the letter case. For instance, if the code is "abAB123," it should be retrieved and displayed as "abAB123," maintaining its original formatting.
      </td>
    </tr>

    <tr>
      <td>
        showCouponSeries
      </td>

      <td>
        Boolean
      </td>

      <td>
        Fetches the coupon series details when set to`true`.
        **Default value**: `false`
      </td>
    </tr>

    <tr>
      <td>
        `includeIssualDetails`
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies whether to include the `couponIssualDetails` object in the response. When set to `true`, returns the metadata captured at the time of issuance.
        **Default value**: `false`
      </td>
    </tr>
  </tbody>
</Table>

# Response parameter

With `showCouponSeries` = `false`

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| code                | The unique code associated with the coupon.                                                                                                                                                                                                                                                                                                                              |
| seriesId            | The ID of the series the coupon belongs to.                                                                                                                                                                                                                                                                                                                              |
| description         | A brief description of the coupon.                                                                                                                                                                                                                                                                                                                                       |
| discountCode        | Code indicating the type of discount.                                                                                                                                                                                                                                                                                                                                    |
| validTill           | The expiry time displayed here can be different if time is defined along with the expiry date of the coupon. For more details, refer to the [documentation about the difference in the displayed and actual coupon expiry time](https://docs.capillarytech.com/reference/update-coupon-code-expiry-date#difference-between-displayed-expiry-and-actual-expiration-time). |
| validTillDateTime   | Specifies the exact expiry date and time of a coupon in ISO 8601 format (e.g., "2026-06-11T23:59:59Z"), indicating the precise moment until which the coupon can be redeemed.                                                                                                                                                                                            |
| discountType        | The type of discount.                                                                                                                                                                                                                                                                                                                                                    |
| discountValue       | The value of the discount provided by the coupon.                                                                                                                                                                                                                                                                                                                        |
| discountUpto        | The maximum value up to which discount can be applied.                                                                                                                                                                                                                                                                                                                   |
| discountOn          | What the discount is applied on.                                                                                                                                                                                                                                                                                                                                         |
| detailedInfo        | Detailed information about the coupon.                                                                                                                                                                                                                                                                                                                                   |
| couponIssualDetails | Defines the object containing the metadata captured at the time of coupon issuance. Returned when `includeIssualDetails=true`.                                                                                                                                                                                                                                           |
| ..sourceType        | Indicates the category of the source that initiated the issuance (e.g., Promotions, Journeys, API).                                                                                                                                                                                                                                                                      |
| ..sourceId          | Indicates the unique reference ID of the entity that triggered the issuance (e.g., journey block ID, rule ID).                                                                                                                                                                                                                                                           |
| ..sourceActivity    | Indicates the specific event or activity that caused the coupon to be issued (e.g., Milestone completion, Post-purchase bounce-back).                                                                                                                                                                                                                                    |
| ..notes             | Specifies additional comments about the issuance.                                                                                                                                                                                                                                                                                                                        |
| ..reason            | Specifies the business justification for issuing the coupon (e.g., campaign reward, service recovery).                                                                                                                                                                                                                                                                   |

With `showCouponSeries` = `true`

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        .data
      </td>

      <td>
        Array
      </td>

      <td>
        Array containing the list of coupon series details.
      </td>
    </tr>

    <tr>
      <td>
        ..code
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the coupon code used for redemption.
      </td>
    </tr>

    <tr>
      <td>
        ..seriesId
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the ID of the coupon series the coupon belongs to.
      </td>
    </tr>

    <tr>
      <td>
        ..description
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the description of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ..discountCode
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the discount code of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ..validTill
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the coupon validity end date and time in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T00:00:00Z → 16 December 2025.

        **India server example**  
        2025-12-16T00:00:00Z+05:30 → 16 December 2025.

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..validTillDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the coupon validity end date and time in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T00:00:00Z → 16 December 2025.

        **India server example**  
        2025-12-16T00:00:00Z+05:30 → 16 December 2025.

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..discountType
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the type of discount.  **Example values**: `ABS`, `PERC`.
      </td>
    </tr>

    <tr>
      <td>
        ..discountValue
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the discount value—percentage when `discountType=PERC`, and currency amount when `discountType=ABS`
      </td>
    </tr>

    <tr>
      <td>
        ..discountUpto
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the maximum discount allowed.
      </td>
    </tr>

    <tr>
      <td>
        ..discountOn
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the discount applies to the total bill or specific items.  
        **Example values**: `BILL`, `ITEM`
      </td>
    </tr>

    <tr>
      <td>
        ..detailedInfo
      </td>

      <td>
        String
      </td>

      <td>
        Additional descriptive text about the coupon.
      </td>
    </tr>

    <tr>
      <td>
        ..couponIssualDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Indicates an object containing the metadata captured at the time of coupon issuance. Returned when `includeIssualDetails=true`.
      </td>
    </tr>

    <tr>
      <td>
        ...sourceType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the category of the source that initiated the issuance (e.g., Promotions, Journeys, API).
      </td>
    </tr>

    <tr>
      <td>
        ...sourceId
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the unique reference ID of the entity that triggered the issuance (e.g., journey block ID, rule ID).
      </td>
    </tr>

    <tr>
      <td>
        ...sourceActivity
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the specific event or activity that caused the coupon to be issued (e.g., Milestone completion, Post-purchase bounce-back).
      </td>
    </tr>

    <tr>
      <td>
        ...notes
      </td>

      <td>
        String
      </td>

      <td>
        Specifies additional comments about the issuance.
      </td>
    </tr>

    <tr>
      <td>
        ...reason
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the business justification for issuing the coupon (e.g., campaign reward, service recovery).
      </td>
    </tr>

    <tr>
      <td>
        ..couponSeries
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the details of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...id
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...orgId
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the organization ID associated with the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...description
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the description of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...discountCode
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the discount code associated with the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...validTillDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the expiration date of the coupon series in ISO 8601 format, returned in the server time zone.

        **EU server example**  
        2025-12-16T00:00:00Z → 16 December 2025.

        **India server example**  
        2025-12-16T00:00:00Z+05:30 → 16 December 2025.

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ...validTillDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the expiration date and time of the coupon series in ISO 8601 format, returned in the server time zone.

        **EU server example**  
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ...validTillISODate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the coupon expiration date in `yyyy-MM-dd` ISO date format.  
        **Note**: This parameter is not related to ISO timezone standardization.
      </td>
    </tr>

    <tr>
      <td>
        ...validDaysFromCreation
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the number of days from creation after which the coupon expires.
      </td>
    </tr>

    <tr>
      <td>
        ...expiryStrategyValue
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the configured expiry strategy value for the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...maxCreate
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum number of coupons that can be created in the series.
      </td>
    </tr>

    <tr>
      <td>
        ...maxRedeem
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum number of redemptions allowed for the series.
      </td>
    </tr>

    <tr>
      <td>
        ...isTransferrable
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon can be transferred to another customer.  
        **Value**: `true`: The coupon can be transferred to another customer.  
        `false`: The coupon is locked to the originally issued user.
      </td>
    </tr>

    <tr>
      <td>
        ...anyUser
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether any customer can redeem the coupon.  
        **Value**: `true`: Any user can redeem the coupon.  
        `false`: Redemption is restricted only to the issued user.
      </td>
    </tr>

    <tr>
      <td>
        ...sameUserMultipleRedeem
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the same customer can redeem the coupon multiple times.  
        **Value**: `true`: The same user is allowed to redeem multiple times from this series.  
        `false`: The same user is not allowed multiple redemptions.
      </td>
    </tr>

    <tr>
      <td>
        ...isReferralExistingUsersAllowed
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether existing users are allowed to use the coupon for referrals.  
        **Value**: `true`: Existing users can participate in the referral program for this series.  
        `false`: Only new users can be used in the referral flow.
      </td>
    </tr>

    <tr>
      <td>
        ...isMultipleUseAllowed
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon can be used multiple times.  
        **Value**: `true`: Each coupon code may be used multiple times.  
        `false`: Each coupon code is single‑use.
      </td>
    </tr>

    <tr>
      <td>
        ...isValidationRequired
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether validation is required before redemption.  
        **Value**: `true`: Validation is required before actual redemption.
        `false`: Coupon can be directly redeemed without validation.
      </td>
    </tr>

    <tr>
      <td>
        ...isValidWithDiscountedItem
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon can be used with discounted items.  
        **Value**: `true`: Coupon can be applied to items on discount.
        `false`: Coupon cannot be combined with existing item discounts.
      </td>
    </tr>

    <tr>
      <td>
        ...createdBy
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the user ID of the person who created the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...numIssued
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the number of coupons issued in the series.
      </td>
    </tr>

    <tr>
      <td>
        ...numRedeemed
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the number of coupons redeemed in the series.
      </td>
    </tr>

    <tr>
      <td>
        ...createdOn
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the date and time when the coupon series was created in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ...lastUsed
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the date and time when the coupon series was last used in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ...seriesCode
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the unique series code for the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...smsTemplate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the SMS template associated with the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...isSMSDisabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether SMS communication is disabled for the coupon series.  
        **Value**: `true`: SMS sending for this series is disabled.
        `false`: SMS sending is allowed/enabled.
      </td>
    </tr>

    <tr>
      <td>
        ...info
      </td>

      <td>
        String
      </td>

      <td>
        Indicates additional coupon information.
      </td>
    </tr>

    <tr>
      <td>
        ...isMultipleVouchersPerUserAllowed
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether multiple vouchers can be issued to the same user.  
        **Value**: `true`: A single user can receive multiple vouchers from this series.
        `false`: A user is restricted to one voucher from this series.
      </td>
    </tr>

    <tr>
      <td>
        ...doNotResendExistingVoucher
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether an existing voucher should not be resent to the user.
        **Value**: `true`: The system does not resend an issued voucher to the same user.
        `false`: Resending an existing voucher is allowed.
      </td>
    </tr>

    <tr>
      <td>
        ...mutualExclusiveSeriesIds
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the list of series IDs that are mutually exclusive with this series.
      </td>
    </tr>

    <tr>
      <td>
        ...storeIdsJson
      </td>

      <td>
        String
      </td>

      <td>
        JSON string containing store IDs where the series is applicable.
      </td>
    </tr>

    <tr>
      <td>
        ...isDvsEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether DVS (Dynamic Voucher System) is enabled for the coupon series.  
        **Value**: `true`: Dynamic Voucher System is enabled
        `false`: Dynamic Voucher System is disabled.
      </td>
    </tr>

    <tr>
      <td>
        ...dvsExpiryDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the expiry date for DVS vouchers in the server time zone.

        **EU server example**  
        2025-12-16T00:00:00Z → 16 December 2025.

        **India server example**  
        2025-12-16T00:00:00Z+05:30 → 16 December 2025.

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ...priority
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the priority of the coupon series when multiple offers apply.
      </td>
    </tr>

    <tr>
      <td>
        ...shortSMSTemplate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the short SMS template used for the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...maxVouchersPerUser
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum number of coupons from this series that a single user can receive.
      </td>
    </tr>

    <tr>
      <td>
        ...minDaysBetweenVouchers
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the minimum days gap between issuing multiple vouchers in this series to the same user.
      </td>
    </tr>

    <tr>
      <td>
        ...maxReferralsPerReferee
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum number of referrals allowed per referee.
      </td>
    </tr>

    <tr>
      <td>
        ...discountUpto
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum discount allowed.
      </td>
    </tr>

    <tr>
      <td>
        ...discountValue
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the value of the discount configured for the series.
      </td>
    </tr>

    <tr>
      <td>
        ...dvsItems
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the DVS items configuration for the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...redemptionRange
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the redemption range configuration.  
        **Example**: Allowed days and hours.
      </td>
    </tr>

    <tr>
      <td>
        ...minBillAmount
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the minimum bill amount required for redemption.
      </td>
    </tr>

    <tr>
      <td>
        ...maxBillAmount
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum bill amount above which the coupon is not applicable.
      </td>
    </tr>

    <tr>
      <td>
        ...redeemAtStore
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the list of stores where the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        ...campaignId
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the campaign ID associated with the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...tag
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the tag associated with the coupon series.  It helps categorize or search the series.
      </td>
    </tr>

    <tr>
      <td>
        ...maxRedemptionsInSeriesPerUser
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum redemptions allowed per user in the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...minDaysBetweenRedemption
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the minimum number of days required between redemptions for a user.
      </td>
    </tr>

    <tr>
      <td>
        ...redemptionValidFrom
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the date and time from which redemption is allowed in ISO 8601 format, returned in the server time zone.

        **EU server example**  
        2025-12-16T00:00:00Z → 16 December 2025.

        **India server example**  
        2025-12-16T00:00:00Z+05:30 → 16 December 2025.

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ...sourceOrgId
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the source organization ID, if the series is shared across organizations.
      </td>
    </tr>

    <tr>
      <td>
        ...issueToLoyalty
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon is issued to a loyalty customer.
      </td>
    </tr>

    <tr>
      <td>
        ...redeemStoreType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the type of stores where redemption is allowed.
      </td>
    </tr>

    <tr>
      <td>
        ...offlineRedeemType
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon supports offline redemption.  
        **Value**: `true`: Dynamic Voucher System is enabled
        `false`: Dynamic Voucher System is disabled.
      </td>
    </tr>

    <tr>
      <td>
        ...isOldFlowEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the old redemption flow is enabled.  
        **Value**: `true`: Uses the legacy coupon flow for this series
        `false`:  Use the current/standard flow.
      </td>
    </tr>

    <tr>
      <td>
        ...isPreRedeemEventRequired
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether a pre-redemption event is required.  
        **Value**: `true`:  A pre-redeem event must succeed before redemption proceeds;
        `false`:  No pre-redeem event is required.
      </td>
    </tr>

    <tr>
      <td>
        ...termsAndConditions
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the terms and conditions configured for the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...signalRedemptionEvent
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the system triggers a redemption event.
        **Value**: `true`:  The system sends a redemption event when a coupon is redeemed.
        `false`:  The system does not send a redemption event signal when a coupon is redeemed.
      </td>
    </tr>

    <tr>
      <td>
        ...syncToClient
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon series is synced to the client system.  
        **Value**: `true`:  Keeps the series in sync with client systems.
        `false`:  Does not keep the series in sync with client systems.
      </td>
    </tr>

    <tr>
      <td>
        ...showPinCode
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the PIN code is displayed for the coupon.  
        **Value**: `true`: Shows a PIN code to the user for this series.  
        `false`:  Does not show a PIN code to the user for this series.
      </td>
    </tr>

    <tr>
      <td>
        ...targetUserDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing target user details.
      </td>
    </tr>

    <tr>
      <td>
        ....validMaxUserTransactionLimit
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the maximum transaction limit allowed for the user.
      </td>
    </tr>

    <tr>
      <td>
        ....validUserRegistrationStartTime
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the user registration start time for eligibility validation.
      </td>
    </tr>

    <tr>
      <td>
        ....validUserRegistrationEndTime
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the user registration end time for eligibility validation.
      </td>
    </tr>

    <tr>
      <td>
        ...numUploadedNonIssued
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the number of uploaded coupons that were not issued.
      </td>
    </tr>

    <tr>
      <td>
        ...numUploadedTotal
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the total number of uploaded coupons. This includes both issued and not issued coupons.
      </td>
    </tr>

    <tr>
      <td>
        ...redemptionValidAfterDays
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the number of days after issuance from which redemption is allowed.
      </td>
    </tr>

    <tr>
      <td>
        ...ownedBy
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the ownership of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...ownerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the owner ID associated with the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...ownerValidity
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the validity period for the owner configuration.
      </td>
    </tr>

    <tr>
      <td>
        ...alphaNumeric
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon code supports alphanumeric values.  
        **Value**: `true`: Generated codes are alphanumeric.
        `false`:  Generated codes are not alphanumeric.
      </td>
    </tr>

    <tr>
      <td>
        ...shortCodeLength
      </td>

      <td>
        integer
      </td>

      <td>
        Indicates the length of the short coupon code.
      </td>
    </tr>

    <tr>
      <td>
        ...randomCodeLength
      </td>

      <td>
        integer
      </td>

      <td>
        Indicates the length of the randomly generated coupon code.
      </td>
    </tr>

    <tr>
      <td>
        ...fixedExpiryDate
      </td>

      <td>
        integer
      </td>

      <td>
        Indicates the fixed expiry date in epoch time (milliseconds).
      </td>
    </tr>

    <tr>
      <td>
        ...numTotal
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the total number of coupons in the series.
      </td>
    </tr>

    <tr>
      <td>
        ...latestIssualTime
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the latest issuance time in epoch time (milliseconds).
      </td>
    </tr>

    <tr>
      <td>
        ...latestRedemptionTime
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the latest redemption time in epoch time (milliseconds).
      </td>
    </tr>

    <tr>
      <td>
        ...resendMessageEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether resend message is enabled for the coupon series.  
        **Value**: `true`: Allow resending coupon communications.  
        `false`: Do not allow resending coupon communications.
      </td>
    </tr>

    <tr>
      <td>
        ...redemptionPerCouponMaxLimit
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the maximum number of redemptions allowed per coupon.
      </td>
    </tr>

    <tr>
      <td>
        ...isPrefixEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether a prefix is enabled for coupon code generation.  
        **Value**: `true`: Enable applying a prefix to generated coupon codes.  
        `false`: Disable applying a prefix to generated coupon codes.
      </td>
    </tr>

    <tr>
      <td>
        ...isSuffixEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether a suffix is enabled for coupon code generation.  
        **Value**: `true`: Enable applying a suffix to generated coupon codes.  
        `false`: Disable applying a suffix to generated coupon codes.
      </td>
    </tr>

    <tr>
      <td>
        ...orgPrefixOverride
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the organization prefix overrides the series prefix.  
        **Value**: `true`: Overrides the organization-level prefix with the series-specific prefix.  
        `false`: Uses the organization-level prefix as is.
      </td>
    </tr>

    <tr>
      <td>
        ...orgSuffixOverride
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the organization suffix overrides the default suffix.  
        **Value**: `true`: Overrides the organization-level suffix with the series-specific one.  
        `false`: Uses the organization-level suffix as is.
      </td>
    </tr>

    <tr>
      <td>
        ...seriesType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the series type of the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...clientHandlingType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates how the client handles the coupon series.   
        **Example**:  `DISC_CODE`
      </td>
    </tr>

    <tr>
      <td>
        ...expiryStrategyType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the expiry strategy type for the coupon series.
      </td>
    </tr>

    <tr>
      <td>
        ...discountOn
      </td>

      <td>
        String
      </td>

      <td>
        Indicates what the discount applies to.   
        **Example**: `BILL`, `ITEM`
      </td>
    </tr>

    <tr>
      <td>
        ...discountType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the type of discount. **Example**: `ABS`, `PERC`.
      </td>
    </tr>

    <tr>
      <td>
        ...updateProductData
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates the update requirement for product data.  
        **Value**: `true`: Product data associated with the series needs updating/sync.  
        `false`: No product data update needed.
      </td>
    </tr>

    <tr>
      <td>
        ...externalIssual
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the coupon series supports external issuance.
        **Value**: `true`: Coupon issuance is handled by an external gateway or provider.
        `false`: Coupon issuance is handled internally.
      </td>
    </tr>

    <tr>
      <td>
        .warnings[]
      </td>

      <td>
        Array
      </td>

      <td>
        Array with the list of warnings returned in the response, if any.
      </td>
    </tr>

    <tr>
      <td>
        .errors[]
      </td>

      <td>
        Array
      </td>

      <td>
        Array with the list of errors returned in the response, if any.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "data": [
        {
            "code": "5875447216353555",
            "seriesId": 868760,
            "description": "Gold star coupons",
            "discountCode": "gold1234",
            "validTill": "2026-06-11T00:00:00Z",
            "validTillDateTime": "2026-06-11T23:59:59Z",
            "discountType": "ABS",
            "discountValue": 1000,
            "discountUpto": 0,
            "discountOn": "BILL",
            "detailedInfo": "Gold star coupons"
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json With coupon_code_case=LOWER
{
    "data": [
        {
            "code": "vmqvzcvymt",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "x6wqg8kb01",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "oo8hf7divr",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "tt6wzp7xnw",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "ziwy7lzgw8",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        },
        {
            "code": "hu1dh75hny",
            "seriesId": 68579,
            "description": "test-lekhana-2",
            "discountCode": "NO_VALUE",
            "validTill": "2024-10-31T00:00:00Z",
            "discountType": "ABS",
            "discountValue": 10.0,
            "discountUpto": 0.0,
            "discountOn": "BILL",
            "detailedInfo": "test-lekhana-2"
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json Sample response with coupon series details
{
  "data": [
    {
      "code": "YTOWAEN5N0",
      "seriesId": 757291,
      "description": "Vishu 10% OFF",
      "discountCode": "XMM123",
      "validTill": "2026-05-09T00:00:00Z",
      "validTillDateTime": "2026-05-09T23:59:59Z",
      "discountType": "ABS",
      "discountValue": 500,
      "discountUpto": 0,
      "discountOn": "BILL",
      "detailedInfo": "Evil coupon",
      "couponSeries": {
        "id": 757291,
        "orgId": 100737,
        "description": "Vishu 10% OFF",
        "discountCode": "XMM123",
        "validTillDate": "2026-05-09T00:00:00Z",
        "validTillDateTime": "2026-05-09T23:59:59Z",
        "validTillISODate": "2026-05-09",
        "validDaysFromCreation": 30,
        "expiryStrategyValue": 1,
        "maxCreate": 5,
        "maxRedeem": 5,
        "isTransferrable": false,
        "anyUser": true,
        "sameUserMultipleRedeem": true,
        "isReferralExistingUsersAllowed": false,
        "isMultipleUseAllowed": true,
        "isValidationRequired": false,
        "isValidWithDiscountedItem": true,
        "createdBy": 75161973,
        "numIssued": 5,
        "numRedeemed": 0,
        "createdOn": "2025-04-25T12:29:05Z",
        "lastUsed": "2025-04-25T12:29:05Z",
        "seriesCode": "1458A78E8A2846FBBB01",
        "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
        "isSMSDisabled": false,
        "info": "Evil coupon",
        "isMultipleVouchersPerUserAllowed": true,
        "doNotResendExistingVoucher": true,
        "mutualExclusiveSeriesIds": "[-1]",
        "storeIdsJson": "[-1]",
        "isDvsEnabled": false,
        "dvsExpiryDate": "2025-04-25T00:00:00Z",
        "priority": 0,
        "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
        "maxVouchersPerUser": 11,
        "minDaysBetweenVouchers": 2,
        "maxReferralsPerReferee": -1,
        "discountUpto": 0,
        "discountValue": 500,
        "dvsItems": "items",
        "redemptionRange": {
          "dom": [
            1
          ],
          "dow": [
            1
          ],
          "hours": [
            1
          ]
        },
        "minBillAmount": 100,
        "maxBillAmount": 20000,
        "redeemAtStore": "[-1]",
        "campaignId": -1,
        "tag": "Vishu 10% OFF",
        "maxRedemptionsInSeriesPerUser": 122,
        "minDaysBetweenRedemption": 0,
        "redemptionValidFrom": "2024-05-01T00:00:00Z",
        "sourceOrgId": -1,
        "issueToLoyalty": false,
        "redeemStoreType": "redeemable_stores",
        "offlineRedeemType": false,
        "isOldFlowEnabled": false,
        "isPreRedeemEventRequired": false,
        "termsAndConditions": "T&C",
        "signalRedemptionEvent": false,
        "syncToClient": false,
        "showPinCode": false,
        "targetUserDetails": {
          "validMaxUserTransactionLimit": 5,
          "validUserRegistrationStartTime": 0,
          "validUserRegistrationEndTime": 10000
        },
        "numUploadedNonIssued": 0,
        "numUploadedTotal": 0,
        "redemptionValidAfterDays": 0,
        "ownedBy": "NONE",
        "ownerId": -1,
        "ownerValidity": 0,
        "alphaNumeric": true,
        "shortCodeLength": 0,
        "randomCodeLength": 10,
        "fixedExpiryDate": 1778284800000,
        "numTotal": 5,
        "latestIssualTime": 1750933819000,
        "latestRedemptionTime": 0,
        "resendMessageEnabled": true,
        "redemptionPerCouponMaxLimit": -1,
        "isPrefixEnabled": false,
        "isSuffixEnabled": false,
        "orgPrefixOverride": false,
        "orgSuffixOverride": false,
        "seriesType": "UNDEFINED",
        "clientHandlingType": "DISC_CODE",
        "expiryStrategyType": "SERIES_EXPIRY",
        "discountOn": "BILL",
        "discountType": "ABS",
        "externalIssual": false,
        "updateProductData": false
      }
    }
  ],
  "warnings": [],
  "errors": []
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
    "/coupon": {
      "get": {
        "summary": "Get coupon details",
        "description": "",
        "operationId": "get-coupon-details",
        "parameters": [
          {
            "name": "issuedToIds",
            "in": "query",
            "description": "Fetch coupons issued to specific customers. Pass customer IDs to fetch. Example: ?issuedToIds=126080386&issuedToIds=108573800",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "couponIds",
            "in": "query",
            "description": "Fetch coupon details by coupon IDs. Example: ?couponIds=126080386&issuedToIds=108573800.",
            "schema": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          },
          {
            "name": "couponCodes",
            "in": "query",
            "description": "Fetch coupon details by coupon codes.",
            "schema": {
              "type": "string"
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
                  "Result": {
                    "value": {
                      "data": [
                        {
                          "code": "5875447216353555",
                          "seriesId": 868760,
                          "description": "Gold star coupons",
                          "discountCode": "gold1234",
                          "validTill": "2026-06-11T00:00:00Z",
                          "validTillDateTime": "2026-06-11T23:59:59Z",
                          "discountType": "ABS",
                          "discountValue": 1000,
                          "discountUpto": 0,
                          "discountOn": "BILL",
                          "detailedInfo": "Gold star coupons"
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "With coupon_code_case=LOWER": {
                    "value": "{\n    \"data\": [\n        {\n            \"code\": \"vmqvzcvymt\",\n            \"seriesId\": 68579,\n            \"description\": \"test-lekhana-2\",\n            \"discountCode\": \"NO_VALUE\",\n            \"validTill\": \"2024-10-31T00:00:00Z\",\n            \"discountType\": \"ABS\",\n            \"discountValue\": 10.0,\n            \"discountUpto\": 0.0,\n            \"discountOn\": \"BILL\",\n            \"detailedInfo\": \"test-lekhana-2\"\n        },\n        {\n            \"code\": \"x6wqg8kb01\",\n            \"seriesId\": 68579,\n            \"description\": \"test-lekhana-2\",\n            \"discountCode\": \"NO_VALUE\",\n            \"validTill\": \"2024-10-31T00:00:00Z\",\n            \"discountType\": \"ABS\",\n            \"discountValue\": 10.0,\n            \"discountUpto\": 0.0,\n            \"discountOn\": \"BILL\",\n            \"detailedInfo\": \"test-lekhana-2\"\n        },\n        {\n            \"code\": \"oo8hf7divr\",\n            \"seriesId\": 68579,\n            \"description\": \"test-lekhana-2\",\n            \"discountCode\": \"NO_VALUE\",\n            \"validTill\": \"2024-10-31T00:00:00Z\",\n            \"discountType\": \"ABS\",\n            \"discountValue\": 10.0,\n            \"discountUpto\": 0.0,\n            \"discountOn\": \"BILL\",\n            \"detailedInfo\": \"test-lekhana-2\"\n        },\n        {\n            \"code\": \"tt6wzp7xnw\",\n            \"seriesId\": 68579,\n            \"description\": \"test-lekhana-2\",\n            \"discountCode\": \"NO_VALUE\",\n            \"validTill\": \"2024-10-31T00:00:00Z\",\n            \"discountType\": \"ABS\",\n            \"discountValue\": 10.0,\n            \"discountUpto\": 0.0,\n            \"discountOn\": \"BILL\",\n            \"detailedInfo\": \"test-lekhana-2\"\n        },\n        {\n            \"code\": \"ziwy7lzgw8\",\n            \"seriesId\": 68579,\n            \"description\": \"test-lekhana-2\",\n            \"discountCode\": \"NO_VALUE\",\n            \"validTill\": \"2024-10-31T00:00:00Z\",\n            \"discountType\": \"ABS\",\n            \"discountValue\": 10.0,\n            \"discountUpto\": 0.0,\n            \"discountOn\": \"BILL\",\n            \"detailedInfo\": \"test-lekhana-2\"\n        },\n        {\n            \"code\": \"hu1dh75hny\",\n            \"seriesId\": 68579,\n            \"description\": \"test-lekhana-2\",\n            \"discountCode\": \"NO_VALUE\",\n            \"validTill\": \"2024-10-31T00:00:00Z\",\n            \"discountType\": \"ABS\",\n            \"discountValue\": 10.0,\n            \"discountUpto\": 0.0,\n            \"discountOn\": \"BILL\",\n            \"detailedInfo\": \"test-lekhana-2\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "Sample response with coupon series details": {
                    "summary": "Sample response with coupon series details",
                    "value": {
                      "data": [
                        {
                          "code": "YTOWAEN5N0",
                          "seriesId": 757291,
                          "description": "Vishu 10% OFF",
                          "discountCode": "XMM123",
                          "validTill": "2026-05-09T00:00:00Z",
                          "validTillDateTime": "2026-05-09T23:59:59Z",
                          "discountType": "ABS",
                          "discountValue": 500,
                          "discountUpto": 0,
                          "discountOn": "BILL",
                          "detailedInfo": "Evil coupon",
                          "couponSeries": {
                            "id": 757291,
                            "orgId": 100737,
                            "description": "Vishu 10% OFF",
                            "discountCode": "XMM123",
                            "validTillDate": "2026-05-09T00:00:00Z",
                            "validTillDateTime": "2026-05-09T23:59:59Z",
                            "validTillISODate": "2026-05-09",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 5,
                            "maxRedeem": 5,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75161973,
                            "numIssued": 5,
                            "numRedeemed": 0,
                            "createdOn": "2025-04-25T12:29:05Z",
                            "lastUsed": "2025-04-25T12:29:05Z",
                            "seriesCode": "1458A78E8A2846FBBB01",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "info": "Evil coupon",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-04-25T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 11,
                            "minDaysBetweenVouchers": 2,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 500,
                            "dvsItems": "items",
                            "redemptionRange": {
                              "dom": [
                                1
                              ],
                              "dow": [
                                1
                              ],
                              "hours": [
                                1
                              ]
                            },
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Vishu 10% OFF",
                            "maxRedemptionsInSeriesPerUser": 122,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2024-05-01T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "targetUserDetails": {
                              "validMaxUserTransactionLimit": 5,
                              "validUserRegistrationStartTime": 0,
                              "validUserRegistrationEndTime": 10000
                            },
                            "numUploadedNonIssued": 0,
                            "numUploadedTotal": 0,
                            "redemptionValidAfterDays": 0,
                            "ownedBy": "NONE",
                            "ownerId": -1,
                            "ownerValidity": 0,
                            "alphaNumeric": true,
                            "shortCodeLength": 0,
                            "randomCodeLength": 10,
                            "fixedExpiryDate": 1778284800000,
                            "numTotal": 5,
                            "latestIssualTime": 1750933819000,
                            "latestRedemptionTime": 0,
                            "resendMessageEnabled": true,
                            "redemptionPerCouponMaxLimit": -1,
                            "isPrefixEnabled": false,
                            "isSuffixEnabled": false,
                            "orgPrefixOverride": false,
                            "orgSuffixOverride": false,
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "externalIssual": false,
                            "updateProductData": false
                          }
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "code": {
                                "type": "string",
                                "example": "GEV8LUGIDD"
                              },
                              "seriesId": {
                                "type": "integer",
                                "example": 757291,
                                "default": 0
                              },
                              "description": {
                                "type": "string",
                                "example": "Vishu 10% OFF"
                              },
                              "discountCode": {
                                "type": "string",
                                "example": "XMM123"
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
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "With coupon_code_case=LOWER",
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "code": {
                                "type": "string",
                                "example": "vmqvzcvymt"
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
                              "discountCode": {
                                "type": "string",
                                "example": "NO_VALUE"
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
                              "discountOn": {
                                "type": "string",
                                "example": "BILL"
                              },
                              "detailedInfo": {
                                "type": "string",
                                "example": "test-lekhana-2"
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon?couponCodes=YTOWAEN5N0&couponCodes=GEV8LUGIDD' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Basic EwYTEzNzg=' \\\n--header 'X-CAP-DIRECT-REPLAY: FALSE' \\\n--header 'user-agent: pyapps_auto_API1_Incrm_Sanity' \\\n--header 'Cookie: _cfuvid=nwcc5s1jYk2s4g1lv.gdYW2B5ncSYe.HWyv3aFwEYrk-1745916355000-0.0.1.1-604800000; _cfuvid=nwcc5s1jYk2s4g1lv.gdYW2B5ncSYe.HWyv3aFwEYrk-1745916355000-0.0.1.1-604800000; _cfuvid=E0nrhQ7TNJ2DrQjOfq8OPA3PDaMOEBRg7bVR12_ssr4-1749451653197-0.0.1.1-604800000'",
              "name": "Sample Get Request"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/coupon?couponCodes=YTOWAEN5N0&showCouponSeries=true' \\\n--header 'Authorization: Basic YyZTZm' \\\n--header 'Cookie: _cfuvid=N8eBMQkzAuS0B.TF12bNd.D2Foo6GiTEeU_Hb2aUc1U-1768823280663-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request with coupon series details"
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