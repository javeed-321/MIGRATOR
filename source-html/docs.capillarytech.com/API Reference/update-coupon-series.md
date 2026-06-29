> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update coupon series

Lets you update existing coupon series details.

# Example request

```curl Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/coupon/series/923222?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RjVhMDGY1NTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=mJsi4aQ3oxBBuYDlQxQdv_wDqIZBYmAonrNmnns-1765961752938-0.0.1.1-604800000' \
--data '{
  "CouponSeriesV2": {
    "id": 923222,
    "seriesCode": "923222",
    "orgId": 999,
    "description": "promogold22",
    "discountCode": "gold1234",
    "validTillDate": "2026-06-12T00:00:00+05:30",
    "anyUser": false,
    "smsTemplate": "Hi {{first_name}} {{last_name}} your voucher code //////{{voucher}}is valid",
    "discountValue": 1000,
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "SERIES_EXPIRY",
    "discountType": "ABS",
    
    "couponPrefix": "gold",
    "isPrefixEnabled": false,
    "orgPrefixOverride": false,
    
    "couponSuffix": "NEWEND",
    "isSuffixEnabled": true,
    "orgSuffixOverride": false
  }
}'
```

# Body Parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter
      </th>

      <th style={{ textAlign: "left" }}>
        Data Type
      </th>

      <th style={{ textAlign: "left" }}>
        Required
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        CouponSeriesV2
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Object containing the coupon series details.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        customPropertyMap
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        An object containing a collection of keys that represents unique property names and each value represents the corresponding property's value.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        customPropertyMap.key1
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Custom field of the coupon series, providing additional information about the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        customPropertyMap.key2
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Custom field of the coupon series, providing additional information about the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        standard_terms_and_conditions
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Custom field in the coupon series that provides information about the terms and conditions.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        description
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        Brief description of the coupon series.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        discountCode
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        The code given for the coupon as the POS identifier.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        discountType
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the type of discount provided by the coupon. Supported values: ABS (a fixed amount is discounted), PERC (a percentage of the total amount is discounted).
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        discountValue
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        Discount value of the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        anyUser
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if any user can use the offer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        validTillDate
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        validTillDateTime
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the exact expiry date and time of a coupon in ISO 8601 format (e.g., "2026-06-11T23:59:59Z"), indicating the precise moment until which the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        expiryStrategyValue
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the duration a coupon remains valid based on the expiryStrategyType. For expiryStrategyType: "SERIES_EXPIRY", expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series. For expiryStrategyType: "DAYS", and expiryStrategyValue: "5", specifies that coupon will be valid till 5 days of issuance. For expiryStrategyType: "MONTHS_END", and expiryStrategyValue: "10" specifies that the coupon will be valid for 10 months of issuance.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        maxCreate
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Maximum number of coupons that can be created. Constraint: The value must always be greater than the number of coupons already issued from the coupon series.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        maxRedeem
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Maximum number of coupons that can be redeemed.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        redemptionPerCouponMaxLimit
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Conditional
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the maximum number of times a particular coupon code can be redeemed across all users. **Note**: • Applicable only when the anyUser parameter is set to true. • The value must be greater than 0. • To create a coupon series without a redemption limit, set the value as null or -1. • This parameter applies only to autogenerated coupon codes (DISC_CODE) and uploaded coupon codes (DISC_CODE_PIN). • Not applicable for GENERIC coupon codes or externally managed coupon series (EXTERNALLY_MANAGED = true). Refer to the [Create Offer](https://docs.capillarytech.com/docs/create-offer) section to know more about coupon code types.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        sameUserMultipleRedeem
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if the same user can redeem multiple times.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        isReferralExistingUsersAllowed
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if the referral is allowed for existing users.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        isMultipleUseAllowed
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if multiple uses of the offer are allowed.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        isValidWithDiscountedItem
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if the offer is valid with discounted items.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        smsTemplate
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        Template for the SMS that is sent to users.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        isSMSDisabled
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if SMS is disabled.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        info
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Additional information about the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        isMultipleVouchersPerUserAllowed
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if multiple vouchers per user are allowed.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        doNotResendExistingVoucher
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates not to resend existing vouchers.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        mutualExclusiveSeriesIds
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        maxVouchersPerUser
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Maximum number of vouchers allowed per user.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        minDaysBetweenVouchers
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Minimum days between issuance of vouchers.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        redemptionRange
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Defines the specific days, weekdays, and hours during which the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        minBillAmount
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Minimum bill amount required to use the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        maxBillAmount
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Maximum bill amount allowed for coupon redemption.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        maxRedemptionsInSeriesPerUser
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Maximum redemptions in the series per user.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        minDaysBetweenRedemption
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Minimum days required between redemptions.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        redemptionValidFrom
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Date from which redemption is valid.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        productInfo
      </td>

      <td style={{ textAlign: "left" }}>
        Array
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Information about the products on which the coupon can be applied.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        .productType
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Type of the product. Supported values: SKU, CATEGORY, BRAND, ATTRIBUTE.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        .productIds
      </td>

      <td style={{ textAlign: "left" }}>
        Array
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        IDs of the product. **Note:** When `.productType` is `CATEGORY`, a maximum of **1,000** category IDs are supported. Requests with more than 1,000 category IDs return a `400 Bad Request` error.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        redemptionOrgEntityDetails
      </td>

      <td style={{ textAlign: "left" }}>
        Array
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Details about the organization entities where the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        redemptionOrgEntityType
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Type of redemption organization entity. Supported values: CONCEPT, TILL, ZONE, STORE.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        orgEntityId
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        ID of the organization entity.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        targetUserDetails
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Details of the criteria that the customer must meet to redeem the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        validMaxUserTransactionLimit
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Number of transactions required by the customer to redeem the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        validUserRegistrationStartTime
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Customer can redeem the coupon only if their registration date is after the specified date.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        validUserRegistrationEndTime
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Customer can redeem the coupon only if their registration date is within the specified date.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        redemptionValidAfterDays
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Number of days after which the redemption becomes valid.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        alphaNumeric
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if the code is alphanumeric.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        randomCodeLength
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Length of the random code for the coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        resendMessageEnabled
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if the resend message feature is enabled.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        clientHandlingType
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        The method using which the coupons should be generated. Supported values: `DISC_CODE` : Generate coupon codes automatically.`GENERIC`: Provide a common coupon code. `DISC_CODE_PIN` : Upload existing coupon codes.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        seriesCode
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        Code for the coupon series.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        genericCode
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Conditional
      </td>

      <td style={{ textAlign: "left" }}>
        Generic code of the coupon. **Note:** Only required if the clientHandlingType is set to GENERIC.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        expiryStrategyType
      </td>

      <td style={{ textAlign: "left" }}>
        Enum
      </td>

      <td style={{ textAlign: "left" }}>
        **Yes**
      </td>

      <td style={{ textAlign: "left" }}>
        Defines the method for coupon expiry. Supported values: SERIES_EXPIRY : Defines the coupon expires based on the rules defined for its series),  
        MONTHS_END : Defines the number of months from issuance until the coupon expires),  
        DAYS : Defines the number of days from issuance until the coupon expires.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        couponPrefix
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Conditional
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the custom value to be added before the coupon code. e.g., SUMMER-XYZ123.

        This prefix value is added to the coupon code only if:

        * `isPrefixEnabled` parameter is set to `true`.
        * `orgPrefixOverride` parameter is set to `false`
        * clientHandlingType is set to DISC_CODE.
          <br />
          **Constraints:**
          * Maximum length: 10 characters.
          * Supports alphanumeric values, hyphens (-), and underscores (*) without spaces.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        couponSuffix
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Conditional
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the custom value to be added after the coupon code. e.g., XYZ123-SUMMER.

        This suffix value is added to the coupon code only if:

        * `isSuffixEnabled` parameter is set to true.
        * `orgSuffixOverride` parameter is set to `false`.
        * `clientHandlingType` parameter is set to DISC_CODE.

          **Constraints:**

          * Maximum length: 10 characters.
          * Supports alphanumeric values, hyphens (-), and underscores (*) without spaces.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        isPrefixEnabled
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if the custom prefix is enabled for the coupon code.

        **Supported values:**

        * `true`: Custom prefix is enabled.
        * `false`: Custom prefix is disabled.

        **Note:** If this parameter is set to `false`, no prefix value will be added to the coupon code, even if orgPrefixOverride is set to true.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        isSuffixEnabled
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates if the custom suffix is enabled for the coupon code.

        **Supported values:**

        * `true`: Custom suffix is enabled.
        * `false`: Custom suffix is disabled.

        **Note:** If this parameter is set to false, no suffix value will be added to the coupon code, even if orgSuffixOverride is set to true.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        orgPrefixOverride
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies whether to add the custom prefix or the org-level default prefix for the coupon code.

        **Supported values:**

        * `true`: The default prefix value set in the org settings is added to the coupon code. If no prefix value is set at the org level, the coupon creation request will fail.
        * `false`: The custom prefix value set in the couponPrefix parameter is added to the coupon code.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        orgSuffixOverride
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Optional
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies whether to add the custom suffix or the org-level default suffix for the coupon code.

        **Supported values:**

        * `true`: The default suffix value set in the org settings is added to the coupon code. If no suffix value is set at the org level, the coupon creation request will fail.
        * `false`: The custom suffix value set in the couponSuffix parameter is added to the coupon code.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```curl Sample response
{
    "id": 927443,
    "orgId": 100737,
    "description": "Test 1: P and S Enabled",
    "discountCode": "gold1234",
    "validTillDate": "2026-06-11T00:00:00Z",
    "validTillDateTime": "2026-06-11T23:59:59Z",
    "validDaysFromCreation": 30,
    "expiryStrategyValue": -1,
    "maxCreate": -1,
    "maxRedeem": -1,
    "isTransferrable": false,
    "anyUser": false,
    "sameUserMultipleRedeem": false,
    "isReferralExistingUsersAllowed": false,
    "isMultipleUseAllowed": false,
    "isValidationRequired": false,
    "isValidWithDiscountedItem": false,
    "createdBy": 75197941,
    "numIssued": 0,
    "numRedeemed": 0,
    "createdOn": "2025-12-17T11:05:57Z",
    "lastUsed": "2025-12-17T11:06:15Z",
    "seriesCode": "927443",
    "smsTemplate": "Hi {{first_name}} {{last_name}} your voucher code //////{{voucher}}is valid",
    "isSMSDisabled": false,
    "info": "Test 1: P and S Enabled",
    "isMultipleVouchersPerUserAllowed": false,
    "doNotResendExistingVoucher": false,
    "mutualExclusiveSeriesIds": "[-1]",
    "storeIdsJson": "[-1]",
    "isDvsEnabled": false,
    "dvsExpiryDate": "2025-12-17T00:00:00Z",
    "priority": 0,
    "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
    "maxVouchersPerUser": -1,
    "minDaysBetweenVouchers": -1,
    "maxReferralsPerReferee": -1,
    "discountUpto": 0,
    "discountValue": 1000,
    "dvsItems": "items",
    "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
    "minBillAmount": -1,
    "maxBillAmount": -1,
    "redeemAtStore": "[-1]",
    "campaignId": -1,
    "tag": "Test 1: P and S Enabled",
    "maxRedemptionsInSeriesPerUser": -1,
    "minDaysBetweenRedemption": -1,
    "redemptionValidFrom": "2025-12-17T00:00:00Z",
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
    "numUploadedNonIssued": 0,
    "numUploadedTotal": 0,
    "redemptionValidAfterDays": 0,
    "ownedBy": "NONE",
    "ownerId": -1,
    "ownerValidity": 0,
    "alphaNumeric": false,
    "shortCodeLength": 0,
    "randomCodeLength": 5,
    "fixedExpiryDate": 1781136000000,
    "numTotal": -1,
    "latestIssualTime": 0,
    "latestRedemptionTime": 0,
    "resendMessageEnabled": true,
    "redemptionPerCouponMaxLimit": -1,
    "couponPrefix": "P-SUC",
    "couponSuffix": "S-SUC",
    "isPrefixEnabled": true,
    "isSuffixEnabled": true,
    "orgPrefixOverride": false,
    "orgSuffixOverride": false,
    "seriesType": "UNDEFINED",
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "SERIES_EXPIRY",
    "discountOn": "BILL",
    "discountType": "ABS",
    "externalIssual": false,
    "updateProductData": false,
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
        customPropertyMap
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing a collection of keys that represents unique property names and each value represents the corresponding property's value.
      </td>
    </tr>

    <tr>
      <td>
        standard_terms_and_conditions
      </td>

      <td>
        string
      </td>

      <td>
        Custom field in the coupon series that provides information about the terms and conditions.
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        integer
      </td>

      <td>
        Unique identifier of the coupon series
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        integer
      </td>

      <td>
        Organization ID associated with the coupon series
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        string
      </td>

      <td>
        Description of the coupon series
      </td>
    </tr>

    <tr>
      <td>
        discountCode
      </td>

      <td>
        string
      </td>

      <td>
        The code given for the coupon as the POS identifier that was created during the creation of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        validTillDate
      </td>

      <td>
        string
      </td>

      <td>
        Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).
      </td>
    </tr>

    <tr>
      <td>
        validDaysFromCreation
      </td>

      <td>
        integer
      </td>

      <td>
        Number of days the coupon is valid from creation
      </td>
    </tr>

    <tr>
      <td>
        expiryStrategyValue
      </td>

      <td>
        integer
      </td>

      <td>
        Specifies the duration a coupon remains valid based on the expiryStrategyType.

        For expiryStrategyType: "SERIES_EXPIRY", expiryStrategyValue is always 1, which defines the coupon expires based on the rules defined for its series.

        For expiryStrategyType: "DAYS", and expiryStrategyValue: "5", specifies that coupon will be valid till 5 days of issuance

        For expiryStrategyType: "MONTHS_END", and expiryStrategyValue: "10" specifies that the coupon will be valid for 10 months of issuance.
      </td>
    </tr>

    <tr>
      <td>
        maxCreate
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of coupons that can be created
      </td>
    </tr>

    <tr>
      <td>
        maxRedeem
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of coupons that can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        isTransferrable
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the coupon is transferable
      </td>
    </tr>

    <tr>
      <td>
        anyUser
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if any user can use the offer.
      </td>
    </tr>

    <tr>
      <td>
        redemptionPerCouponMaxLimit
      </td>

      <td>
        integer
      </td>

      <td>
        Specifies the maximum number of times a particular coupon code can be redeemed across all users.
      </td>
    </tr>

    <tr>
      <td>
        couponPrefix
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the custom string added before the coupon code.
      </td>
    </tr>

    <tr>
      <td>
        couponSuffix
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the custom string added after the coupon code.
      </td>
    </tr>

    <tr>
      <td>
        isPrefixEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the prefix configuration is currently enabled.
      </td>
    </tr>

    <tr>
      <td>
        isSuffixEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the suffix configuration is currently enabled.
      </td>
    </tr>

    <tr>
      <td>
        orgPrefixOverride
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the organization-level default prefix overrides the custom prefix.
      </td>
    </tr>

    <tr>
      <td>
        orgSuffixOverride
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the organization-level default suffix overrides the custom suffix.
      </td>
    </tr>

    <tr>
      <td>
        sameUserMultipleRedeem
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the same user can redeem multiple times.
      </td>
    </tr>

    <tr>
      <td>
        isReferralExistingUsersAllowed
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the referral is allowed for existing users.
      </td>
    </tr>

    <tr>
      <td>
        isMultipleUseAllowed
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if multiple uses of the offer are allowed.
      </td>
    </tr>

    <tr>
      <td>
        isValidationRequired
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if validation is required for the coupon
      </td>
    </tr>

    <tr>
      <td>
        isValidWithDiscountedItem
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the offer is valid with discounted items.
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        integer
      </td>

      <td>
        ID of the user who created the coupon series
      </td>
    </tr>

    <tr>
      <td>
        numIssued
      </td>

      <td>
        integer
      </td>

      <td>
        Number of coupons issued from this series
      </td>
    </tr>

    <tr>
      <td>
        numRedeemed
      </td>

      <td>
        integer
      </td>

      <td>
        Number of coupons redeemed from this series
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the coupon series was created.
      </td>
    </tr>

    <tr>
      <td>
        lastUsed
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the coupon was last used
      </td>
    </tr>

    <tr>
      <td>
        seriesCode
      </td>

      <td>
        string
      </td>

      <td>
        Code for the coupon series
      </td>
    </tr>

    <tr>
      <td>
        smsTemplate
      </td>

      <td>
        string
      </td>

      <td>
        Template for the SMS that is sent to users.
      </td>
    </tr>

    <tr>
      <td>
        isSMSDisabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if SMS is disabled.
      </td>
    </tr>

    <tr>
      <td>
        info
      </td>

      <td>
        string
      </td>

      <td>
        Additional information about the coupon
      </td>
    </tr>

    <tr>
      <td>
        isMultipleVouchersPerUserAllowed
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if multiple vouchers per user are allowed
      </td>
    </tr>

    <tr>
      <td>
        doNotResendExistingVoucher
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates not to resend existing vouchers.
      </td>
    </tr>

    <tr>
      <td>
        mutualExclusiveSeriesIds
      </td>

      <td>
        string
      </td>

      <td>
        Allows you to specify a list of offer IDs that are mutually exclusive to the current offer. If a customer already has a coupon from any of the offer IDs in this list, they will not be eligible to receive a coupon from the current series.
      </td>
    </tr>

    <tr>
      <td>
        storeIdsJson
      </td>

      <td>
        string
      </td>

      <td>
        IDs of stores where the coupon is valid.
      </td>
    </tr>

    <tr>
      <td>
        isDvsEnabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if DVS (Dynamic Voucher System) is enabled
      </td>
    </tr>

    <tr>
      <td>
        dvsExpiryDate
      </td>

      <td>
        string
      </td>

      <td>
        Expiry date for DVS.
      </td>
    </tr>

    <tr>
      <td>
        priority
      </td>

      <td>
        integer
      </td>

      <td>
        Priority level of the offer.
      </td>
    </tr>

    <tr>
      <td>
        shortSMSTemplate
      </td>

      <td>
        string
      </td>

      <td>
        Short template for the SMS to be sent to users
      </td>
    </tr>

    <tr>
      <td>
        maxVouchersPerUser
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of vouchers allowed per user
      </td>
    </tr>

    <tr>
      <td>
        minDaysBetweenVouchers
      </td>

      <td>
        integer
      </td>

      <td>
        Minimum days between issuance of vouchers.
      </td>
    </tr>

    <tr>
      <td>
        maxReferralsPerReferee
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum number of referrals allowed per referee
      </td>
    </tr>

    <tr>
      <td>
        discountUpto
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum discount value
      </td>
    </tr>

    <tr>
      <td>
        discountValue
      </td>

      <td>
        integer
      </td>

      <td>
        Discount value of the coupon
      </td>
    </tr>

    <tr>
      <td>
        dvsItems
      </td>

      <td>
        string
      </td>

      <td>
        Items for DVS (Dynamic Voucher System).
      </td>
    </tr>

    <tr>
      <td>
        redemptionRange
      </td>

      <td>
        string
      </td>

      <td>
        Defines the specific days, weekdays, and hours during which the coupon can be redeemed.
      </td>
    </tr>

    <tr>
      <td>
        minBillAmount
      </td>

      <td>
        integer
      </td>

      <td>
        Minimum bill amount required to use the coupon.
      </td>
    </tr>

    <tr>
      <td>
        maxBillAmount
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum bill amount allowed for coupon redemption
      </td>
    </tr>

    <tr>
      <td>
        redeemAtStore
      </td>

      <td>
        string
      </td>

      <td>
        Stores IDs where redemption is allowed.
      </td>
    </tr>

    <tr>
      <td>
        campaignId
      </td>

      <td>
        integer
      </td>

      <td>
        Identifier of the campaign associated with the coupon
      </td>
    </tr>

    <tr>
      <td>
        tag
      </td>

      <td>
        string
      </td>

      <td>
        Tag or label for the coupon
      </td>
    </tr>

    <tr>
      <td>
        maxRedemptionsInSeriesPerUser
      </td>

      <td>
        integer
      </td>

      <td>
        Maximum redemptions in the series per user.
      </td>
    </tr>

    <tr>
      <td>
        minDaysBetweenRedemption
      </td>

      <td>
        integer
      </td>

      <td>
        Minimum days required between redemptions.
      </td>
    </tr>

    <tr>
      <td>
        redemptionValidFrom
      </td>

      <td>
        string
      </td>

      <td>
        Date from which redemption is valid.
      </td>
    </tr>

    <tr>
      <td>
        sourceOrgId
      </td>

      <td>
        integer
      </td>

      <td>
        Identifier of the source organization
      </td>
    </tr>

    <tr>
      <td>
        issueToLoyalty
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the coupon is issued to loyalty members
      </td>
    </tr>

    <tr>
      <td>
        redeemStoreType
      </td>

      <td>
        string
      </td>

      <td>
        Type of store where the coupon can be redeemed. Supported values : redeemable_stores.
      </td>
    </tr>

    <tr>
      <td>
        offlineRedeemType
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if offline redemption is enabled
      </td>
    </tr>

    <tr>
      <td>
        isOldFlowEnabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the old redemption flow is enabled
      </td>
    </tr>

    <tr>
      <td>
        isPreRedeemEventRequired
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if a pre-redeem event is required
      </td>
    </tr>

    <tr>
      <td>
        termsAndConditions
      </td>

      <td>
        string
      </td>

      <td>
        Terms and conditions for the offer.
      </td>
    </tr>

    <tr>
      <td>
        signalRedemptionEvent
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if a redemption event signal is required
      </td>
    </tr>

    <tr>
      <td>
        syncToClient
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the coupon data should be synchronized to the client
      </td>
    </tr>

    <tr>
      <td>
        showPinCode
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if a PIN code should be displayed
      </td>
    </tr>

    <tr>
      <td>
        validMaxUserTransactionLimit
      </td>

      <td>
        integer
      </td>

      <td>
        Number of transactions required by the customer to redeem the coupon.
      </td>
    </tr>

    <tr>
      <td>
        validUserRegistrationStartTime
      </td>

      <td>
        integer
      </td>

      <td>
        Customer can redeem the coupon only if their registration date is after the specified date.
      </td>
    </tr>

    <tr>
      <td>
        validUserRegistrationEndTime
      </td>

      <td>
        integer
      </td>

      <td>
        Customer can redeem the coupon only if their registration date is within the specified date.
      </td>
    </tr>

    <tr>
      <td>
        numUploadedNonIssued
      </td>

      <td>
        integer
      </td>

      <td>
        Number of non-issued coupons uploaded
      </td>
    </tr>

    <tr>
      <td>
        numUploadedTotal
      </td>

      <td>
        integer
      </td>

      <td>
        Total number of coupons uploaded
      </td>
    </tr>

    <tr>
      <td>
        redemptionValidAfterDays
      </td>

      <td>
        integer
      </td>

      <td>
        Number of days after which the redemption becomes valid.
      </td>
    </tr>

    <tr>
      <td>
        ownedBy
      </td>

      <td>
        string
      </td>

      <td>
        Ownership details for the offer.
      </td>
    </tr>

    <tr>
      <td>
        ownerId
      </td>

      <td>
        integer
      </td>

      <td>
        Identifier of the owner of the coupon
      </td>
    </tr>

    <tr>
      <td>
        ownerValidity
      </td>

      <td>
        integer
      </td>

      <td>
        Validity period of the owner's rights to the coupon
      </td>
    </tr>

    <tr>
      <td>
        alphaNumeric
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the code is alphanumeric.
      </td>
    </tr>

    <tr>
      <td>
        shortCodeLength
      </td>

      <td>
        integer
      </td>

      <td>
        Length of the short code generated for the coupon
      </td>
    </tr>

    <tr>
      <td>
        randomCodeLength
      </td>

      <td>
        integer
      </td>

      <td>
        Length of the random code for the coupon.
      </td>
    </tr>

    <tr>
      <td>
        fixedExpiryDate
      </td>

      <td>
        integer
      </td>

      <td>
        Fixed expiry date of the coupon (in epoch milliseconds)
      </td>
    </tr>

    <tr>
      <td>
        numTotal
      </td>

      <td>
        integer
      </td>

      <td>
        Total number of coupons issued
      </td>
    </tr>

    <tr>
      <td>
        latestIssualTime
      </td>

      <td>
        integer
      </td>

      <td>
        Latest issuance time of the coupon (in epoch milliseconds)
      </td>
    </tr>

    <tr>
      <td>
        latestRedemptionTime
      </td>

      <td>
        integer
      </td>

      <td>
        Latest redemption time of the coupon (in epoch milliseconds)
      </td>
    </tr>

    <tr>
      <td>
        resendMessageEnabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the resend message feature is enabled.
      </td>
    </tr>

    <tr>
      <td>
        seriesType
      </td>

      <td>
        string
      </td>

      <td>
        Type of coupon series.
      </td>
    </tr>

    <tr>
      <td>
        clientHandlingType
      </td>

      <td>
        string
      </td>

      <td>
        Method using which the coupons should be generated. Supported values: DISC_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC_CODE_PIN (Upload existing coupon codes).
      </td>
    </tr>

    <tr>
      <td>
        expiryStrategyType
      </td>

      <td>
        string
      </td>

      <td>
        Defines the method for coupon expiry.
        Supported values: SERIES_EXPIRY(defines the coupon expires based on the rules defined for its series), MONTHS_END(defines the number of months from issuance until the coupon expires.), DAYS(defines the number of days from issuance until the coupon expires).
      </td>
    </tr>

    <tr>
      <td>
        discountOn
      </td>

      <td>
        string
      </td>

      <td>
        Type of discount.
      </td>
    </tr>

    <tr>
      <td>
        discountType
      </td>

      <td>
        string
      </td>

      <td>
        Specifies the type of discount provided by the coupon. Supported values: ABS(a fixed amount is discounted), PERC(a percentage of the total amount is discounted).
      </td>
    </tr>

    <tr>
      <td>
        updateProductData
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicating if the product data can be updated.
      </td>
    </tr>

    <tr>
      <td>
        externalIssual
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicating if external issuance is allowed.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        array
      </td>

      <td>
        List of warnings related to the coupon.
      </td>
    </tr>
  </tbody>
</Table>

# Error code

| Error code | Description                                                                                                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400        | **Bad Request** - Invalid parameters. Verify that the series ID is a valid long integer and orgId is provided.                                                                     |
| 401        | **Unauthorized** - Authentication failed. Ensure valid authentication credentials (API key/token) are provided in the request headers.                                             |
| 403        | **Forbidden** - Access denied. Verify that the authenticated user has permission to access this coupon series.                                                                     |
| 404        | **Not Found** - Coupon series not found. Confirm that the series ID exists and belongs to the specified organization. Check the series ID in Campaign Manager.                     |
| 500        | **Internal Server Error**. Retry the request after a few moments. If the issue persists, contact Capillary Support.                                                                |
| 501        | **Invalid Organization ID**. Provide a valid organization ID that exists in the system.                                                                                            |
| 502        | **No Coupon Series Available**. The specified coupon series does not exist for this organization. Verify the series ID.                                                            |
| 707        | **Coupon series id is invalid**. The provided series ID format is incorrect or the series does not exist. Verify the ID in Campaign Manager and ensure it's a valid numeric value. |
| 730        | **Unknown error**. Check request parameters and retry. If error persists, contact Capillary Support with request details.                                                          |
| 786        | **Unable to process coupon**. Please try again later. Service temporarily unavailable. Retry the request after a few seconds.                                                      |
| 788        | **Configuration is invalid**. Please report to Capillary Support. Contact Capillary Support to verify organization configuration settings.                                         |
| 795        | **Configuration is invalid**. Please report to Capillary Support. Contact Capillary Support to verify organization configuration settings.                                         |
| 799        | **Configuration is invalid**. Please report to Capillary Support. Contact Capillary Support to verify organization configuration settings.                                         |

```json
{
    "id": 751412,
    "orgId": 100737,
    "description": "40% off for unknown reason",
    "discountCode": "unknown40",
    "validTillDate": "2025-04-25T00:00:00Z",
    "validDaysFromCreation": 30,
    "expiryStrategyValue": 1,
    "maxCreate": 1316432742,
    "maxRedeem": 1316863212,
    "isTransferrable": false,
    "anyUser": true,
    "sameUserMultipleRedeem": true,
    "isReferralExistingUsersAllowed": false,
    "isMultipleUseAllowed": false,
    "isValidationRequired": false,
    "isValidWithDiscountedItem": true,
    "createdBy": 75155297,
    "numIssued": 0,
    "numRedeemed": 0,
    "createdOn": "2025-04-17T05:36:41Z",
    "lastUsed": "2025-05-12T08:27:45Z",
    "seriesCode": "string",
    "smsTemplate": "string",
    "isSMSDisabled": false,
    "info": "30% off for unknown reason",
    "isMultipleVouchersPerUserAllowed": true,
    "doNotResendExistingVoucher": true,
    "mutualExclusiveSeriesIds": "[-1]",
    "storeIdsJson": "[-1]",
    "isDvsEnabled": false,
    "dvsExpiryDate": "2025-05-12T00:00:00Z",
    "priority": 0,
    "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
    "maxVouchersPerUser": -123,
    "minDaysBetweenVouchers": -123,
    "maxReferralsPerReferee": -1,
    "discountUpto": 0,
    "discountValue": 150000004759552,
    "dvsItems": "items",
    "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
    "minBillAmount": 0,
    "maxBillAmount": 40000,
    "redeemAtStore": "[-1]",
    "campaignId": 0,
    "tag": "40% off for unknown reason",
    "maxRedemptionsInSeriesPerUser": 4,
    "minDaysBetweenRedemption": 0,
    "redemptionValidFrom": "2025-04-23T00:00:00Z",
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
        "validMaxUserTransactionLimit": 1,
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
    "fixedExpiryDate": 1745539200000,
    "numTotal": 0,
    "latestIssualTime": 0,
    "latestRedemptionTime": 0,
    "genericCode": "string",
    "resendMessageEnabled": true,
    "redemptionPerCouponMaxLimit": -1,
    "seriesType": "UNDEFINED",
    "clientHandlingType": "DISC_CODE",
    "expiryStrategyType": "SERIES_EXPIRY",
    "discountOn": "BILL",
    "discountType": "ABS",
    "externalIssual": false,
    "updateProductData": false,
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
    "/coupon/series/{id}": {
      "put": {
        "summary": "Update coupon series",
        "description": "Lets you update existing coupon series details.",
        "operationId": "update-coupon-series",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Unique ID of the coupon series to update.",
            "schema": {
              "type": "integer",
              "format": "int32"
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
                  "CouponSeriesV2": {
                    "properties": {
                      "customPropertyMap": {
                        "properties": {
                          "key1": {
                            "type": "string",
                            "description": "Mapping of each field in key:value pairs."
                          },
                          "key2": {
                            "type": "string"
                          },
                          "": {
                            "properties": {
                              "standard_terms_and_conditions": {
                                "type": "string",
                                "description": "Map terms and conditions."
                              }
                            },
                            "required": [],
                            "type": "object"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "description": {
                        "type": "string",
                        "description": "Brief description of the card series."
                      },
                      "discountCode": {
                        "type": "string",
                        "description": "Discount code of the coupon."
                      },
                      "validTillDate": {
                        "type": "string",
                        "description": "Validity of the card series in UTC timestamp. Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone).",
                        "format": "date"
                      },
                      "expiryStrategyType": {
                        "type": "string",
                        "description": "Pass `SERIES_EXPIRY` (to expire along with the offer), `MONTHS_END` (to expire at the end of specific months). For the month end expiry, specify expiryStrategyType, expiryStrategyType, and expiryStrategyValue."
                      },
                      "expiryStrategyValue": {
                        "type": "integer",
                        "description": "Expiry strategy value for the selected expiryStrategyType type.",
                        "format": "int32"
                      },
                      "maxCreate": {
                        "type": "integer",
                        "description": "Limit number of coupons to be created from the coupon series (offer).",
                        "format": "int32"
                      },
                      "maxRedeem": {
                        "type": "integer",
                        "description": "Limit number of coupons to be redeemed from the coupon series.",
                        "format": "int32"
                      },
                      "isTransferrable": {
                        "type": "boolean",
                        "description": "Pass `true` if the recipient can transfer the coupon to someone else."
                      },
                      "anyUser": {
                        "type": "boolean",
                        "description": "Pass `true` to allow any customer to redeem the coupon, `false` to allow only the customer who received the coupon to redeem it."
                      },
                      "sameUserMultipleRedeem": {
                        "type": "boolean",
                        "description": "Pass `true` to allow a customer to redeem the the coupon multiple times."
                      },
                      "isReferralExistingUsersAllowed": {
                        "type": "boolean",
                        "description": "Deprecated"
                      },
                      "isMultipleUseAllowed": {
                        "type": "boolean",
                        "description": "Can a coupon be used multiple times?"
                      },
                      "isValidationRequired": {
                        "type": "boolean",
                        "description": "Whether validation code checking is required to redeem coupon. Deprecated."
                      },
                      "isValidWithDiscountedItem": {
                        "type": "boolean",
                        "description": "Deprecated"
                      },
                      "seriesCode": {
                        "type": "string",
                        "description": "Unique alpha-numeric code of the coupon series. Deprecated."
                      },
                      "smsTemplate": {
                        "type": "string",
                        "description": "Message to be sent to issue a coupon from the series. Use predefined tags in the message wherever required. For example, first_name, last_name, voucher (for voucher code) and so on."
                      },
                      "isSMSDisabled": {
                        "type": "boolean",
                        "description": "Pass t`rue` to disable sending coupon related SMS to audience."
                      },
                      "info": {
                        "type": "string",
                        "description": "Information or description about the coupon series."
                      },
                      "isMultipleVouchersPerUserAllowed": {
                        "type": "boolean",
                        "description": "Can more than one coupon be issued to a customer?"
                      },
                      "doNotResendExistingVoucher": {
                        "type": "boolean",
                        "description": "If true, it does not allow resending coupon to the customer. Pass `false` to allow resending coupon if the customer misses it."
                      },
                      "mutualExclusiveSeriesIds": {
                        "type": "array",
                        "description": "List of offer ids, which are mutually exclusive to this offer. That is, if a customer has a coupon specific to the in the list of offer ID(s) passed here, then the customer would not get any coupon from the current series.",
                        "items": {
                          "type": "integer",
                          "format": "int32"
                        }
                      },
                      "maxVouchersPerUser": {
                        "type": "integer",
                        "description": "Maximum number of vouchers per user in the series. -1 implies unlimited.",
                        "default": -1,
                        "format": "int32"
                      },
                      "minDaysBetweenVouchers": {
                        "type": "integer",
                        "description": "Minimum gap (no. of days) between two consecutive coupon issuals for a customer.",
                        "format": "int32"
                      },
                      "maxReferralsPerReferee": {
                        "type": "integer",
                        "description": "Deprecated",
                        "format": "int32"
                      },
                      "discountUpto": {
                        "type": "number",
                        "description": "The maximum discount amount in case percentage discount.",
                        "format": "float"
                      },
                      "discountValue": {
                        "type": "string",
                        "description": "Value corresponding to the discountType (percentage or flat amount discount)."
                      },
                      "redemptionRange": {
                        "type": "string",
                        "description": "When to allow redemption (days of week, dates of month, and hours of day ). For example, `\"{\\\"dom\\\" : [1, 13, 31], \\\"dow\\\": [1, 2, 7], \\\"hours\\\": [0, 1, 2, 23]}\"`. <br>1 for Monday in Days of week."
                      },
                      "minBillAmount": {
                        "type": "number",
                        "description": "Minimum transaction amount for which the coupon redemption is applicable.",
                        "format": "double"
                      },
                      "maxBillAmount": {
                        "type": "number",
                        "description": "Maximum transaction amount for which the coupon redemption is applicable.",
                        "format": "double"
                      },
                      "redemptionOrgEntityDetails": {
                        "properties": {
                          "redemptionOrgEntityType": {
                            "type": "string",
                            "description": "Type of the org entity. Values: CONCEPT, TILL, STORE, ZONE"
                          },
                          "orgEntityId": {
                            "type": "integer",
                            "description": "Unique ID of the store, zone, concept, or till.",
                            "format": "int32"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "redemptionValidFrom": {
                        "type": "string",
                        "description": "Date after which the coupon can be redeemed in YYYY-MM-DDThh:mm:ssZ format.",
                        "format": "date"
                      },
                      "targetUserDetails": {
                        "properties": {
                          "validMaxUserTransactionLimit": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "valid": {
                            "properties": {
                              "UserRegistrationStartTime": {
                                "type": "string"
                              }
                            },
                            "required": [],
                            "type": "object"
                          },
                          "validUserRegistrationEndTime": {
                            "type": "string"
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "redemptionValidAfterDays": {
                        "type": "integer",
                        "description": "Days after which the coupon redemption is valid from the date of issual.",
                        "format": "int32"
                      },
                      "alphaNumeric": {
                        "type": "boolean",
                        "description": "Whether the coupon codes generated automatically should be alphanumeric."
                      },
                      "randomCodeLength": {
                        "type": "integer",
                        "description": "Length of the coupon code.",
                        "format": "int32"
                      },
                      "resendMessageEnabled": {
                        "type": "boolean",
                        "description": "Pass `true` to enable resending message."
                      },
                      "clientHandlingType": {
                        "type": "string",
                        "description": "DISC_CODE (generate coupon codes automatically), GENERIC (provide a common coupon code), DISC_CODE_PIN (Upload existing coupon codes)"
                      },
                      "redemptionPerCouponMaxLimit": {
                        "type": "integer",
                        "description": "Specifies the maximum number of times a particular coupon code can be redeemed across all users.",
                        "format": "int32"
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Details of the coupon series."
                  },
                  "storeIdsJson": {
                    "type": "array",
                    "description": "Unique IDs of the stores where the series is applicable.",
                    "items": {
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "isDvsEnabled": {
                    "type": "boolean",
                    "description": "Whether DVS is enabled for the coupon series or not. Pass true for DVS coupons."
                  },
                  "dvsExpiryDate": {
                    "type": "string",
                    "description": "Date and time of expiry of the DVS campaign associated with the coupon series in YYYY-MM-DDThh:mm:ssZ.",
                    "format": "date"
                  },
                  "shortSMSTemplate": {
                    "type": "string",
                    "description": "Short message to send to users. Pass voucher_code to insert coupon code in the message."
                  },
                  "campaignId": {
                    "type": "integer",
                    "description": "Unique ID of the campaign associated with the series.",
                    "format": "int64"
                  },
                  "maxRedemptionsInSeriesPerUser": {
                    "type": "integer",
                    "description": "Limit number of time same user can redeem the coupon",
                    "format": "int32"
                  },
                  "minDaysBetweenRedemption": {
                    "type": "integer",
                    "description": "Minimum number of days between any two redemption",
                    "format": "int32"
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
                      "id": 877510,
                      "orgId": 100737,
                      "description": "Gold star coupons",
                      "discountCode": "gold1234",
                      "validTillDate": "2026-06-11T00:00:00Z",
                      "validTillDateTime": "2026-06-11T23:59:59Z",
                      "validDaysFromCreation": 30,
                      "expiryStrategyValue": -1,
                      "maxCreate": -1,
                      "maxRedeem": -1,
                      "isTransferrable": false,
                      "anyUser": false,
                      "sameUserMultipleRedeem": false,
                      "isReferralExistingUsersAllowed": false,
                      "isMultipleUseAllowed": false,
                      "isValidationRequired": false,
                      "isValidWithDiscountedItem": false,
                      "createdBy": 75197941,
                      "numIssued": 0,
                      "numRedeemed": 0,
                      "createdOn": "2025-10-09T06:45:15Z",
                      "lastUsed": "2025-10-09T06:45:14Z",
                      "seriesCode": "2D51C86999B948CA99DC",
                      "smsTemplate": "Hi {{first_name}} {{last_name}} your voucher code //////{{voucher}}is valid",
                      "isSMSDisabled": false,
                      "info": "Gold star coupons",
                      "isMultipleVouchersPerUserAllowed": false,
                      "doNotResendExistingVoucher": false,
                      "mutualExclusiveSeriesIds": "[-1]",
                      "storeIdsJson": "[-1]",
                      "isDvsEnabled": false,
                      "dvsExpiryDate": "2025-10-09T00:00:00Z",
                      "priority": 0,
                      "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                      "maxVouchersPerUser": -1,
                      "minDaysBetweenVouchers": -1,
                      "maxReferralsPerReferee": -1,
                      "discountUpto": 0,
                      "discountValue": 1000,
                      "dvsItems": "items",
                      "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                      "minBillAmount": -1,
                      "maxBillAmount": -1,
                      "redeemAtStore": "[-1]",
                      "campaignId": -1,
                      "tag": "Gold star coupons",
                      "maxRedemptionsInSeriesPerUser": -1,
                      "minDaysBetweenRedemption": -1,
                      "redemptionValidFrom": "2025-10-09T00:00:00Z",
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
                      "numUploadedNonIssued": 0,
                      "numUploadedTotal": 0,
                      "redemptionValidAfterDays": 0,
                      "ownedBy": "NONE",
                      "ownerId": -1,
                      "ownerValidity": 0,
                      "alphaNumeric": false,
                      "shortCodeLength": 0,
                      "randomCodeLength": 0,
                      "fixedExpiryDate": 1781136000000,
                      "numTotal": 0,
                      "latestIssualTime": 0,
                      "latestRedemptionTime": 0,
                      "resendMessageEnabled": true,
                      "redemptionPerCouponMaxLimit": -1,
                      "seriesType": "UNDEFINED",
                      "clientHandlingType": "DISC_CODE",
                      "expiryStrategyType": "SERIES_EXPIRY",
                      "discountOn": "BILL",
                      "discountType": "ABS",
                      "updateProductData": false,
                      "externalIssual": false,
                      "warnings": []
                    }
                  },
                  "With redemptionPerCouponMaxLimit": {
                    "value": "{\n    \"id\": 698948,\n    \"orgId\": 100737,\n    \"description\": \"LIKE1w2w2345678910\",\n    \"discountCode\": \"XYZ1w23\",\n    \"validTillDate\": \"2030-09-29T00:00:00Z\",\n    \"validDaysFromCreation\": 30,\n    \"expiryStrategyValue\": 30,\n    \"maxCreate\": -1,\n    \"maxRedeem\": -1,\n    \"isTransferrable\": false,\n    \"anyUser\": true,\n    \"sameUserMultipleRedeem\": true,\n    \"isReferralExistingUsersAllowed\": false,\n    \"isMultipleUseAllowed\": true,\n    \"isValidationRequired\": false,\n    \"isValidWithDiscountedItem\": false,\n    \"createdBy\": 75154383,\n    \"numIssued\": 0,\n    \"numRedeemed\": 0,\n    \"createdOn\": \"2025-02-04T08:52:56Z\",\n    \"lastUsed\": \"2025-02-04T10:19:30Z\",\n    \"seriesCode\": \"seriesCode001\",\n    \"smsTemplate\": \"Hi  {{first_name}}\",\n    \"isSMSDisabled\": false,\n    \"info\": \"LIKE12345678910\",\n    \"isMultipleVouchersPerUserAllowed\": true,\n    \"doNotResendExistingVoucher\": true,\n    \"mutualExclusiveSeriesIds\": \"[]\",\n    \"storeIdsJson\": \"[-1]\",\n    \"isDvsEnabled\": false,\n    \"dvsExpiryDate\": \"2025-02-04T00:00:00Z\",\n    \"priority\": 0,\n    \"shortSMSTemplate\": \"Hello {{cust_name}}, your voucher code is {{voucher_code}}\",\n    \"maxVouchersPerUser\": -1,\n    \"minDaysBetweenVouchers\": -1,\n    \"maxReferralsPerReferee\": -1,\n    \"discountUpto\": 0,\n    \"discountValue\": 500,\n    \"dvsItems\": \"items\",\n    \"redemptionRange\": \"{\\\"dom\\\":[\\\"-1\\\"],\\\"dow\\\":[\\\"-1\\\"],\\\"hours\\\":[\\\"-1\\\"]}\",\n    \"minBillAmount\": 0,\n    \"maxBillAmount\": 9007199254740991,\n    \"redeemAtStore\": \"[-1]\",\n    \"campaignId\": -1,\n    \"tag\": \"LIKE12345678910\",\n    \"maxRedemptionsInSeriesPerUser\": -1,\n    \"minDaysBetweenRedemption\": -1,\n    \"redemptionValidFrom\": \"1970-01-01T00:00:00Z\",\n    \"sourceOrgId\": -1,\n    \"issueToLoyalty\": false,\n    \"redeemStoreType\": \"redeemable_stores\",\n    \"offlineRedeemType\": false,\n    \"isOldFlowEnabled\": false,\n    \"isPreRedeemEventRequired\": false,\n    \"termsAndConditions\": \"T&C apply\",\n    \"signalRedemptionEvent\": false,\n    \"syncToClient\": false,\n    \"showPinCode\": false,\n    \"numUploadedNonIssued\": 0,\n    \"numUploadedTotal\": 0,\n    \"redemptionValidAfterDays\": 0,\n    \"ownedBy\": \"NONE\",\n    \"ownerId\": -1,\n    \"ownerValidity\": 0,\n    \"alphaNumeric\": true,\n    \"shortCodeLength\": 0,\n    \"randomCodeLength\": 8,\n    \"fixedExpiryDate\": 1916870400000,\n    \"numTotal\": -1,\n    \"latestIssualTime\": 0,\n    \"latestRedemptionTime\": 0,\n    \"resendMessageEnabled\": true,\n    \"redemptionPerCouponMaxLimit\": 3,\n    \"seriesType\": \"UNDEFINED\",\n    \"clientHandlingType\": \"DISC_CODE\",\n    \"expiryStrategyType\": \"DAYS\",\n    \"discountOn\": \"BILL\",\n    \"discountType\": \"ABS\",\n    \"updateProductData\": false,\n    \"externalIssual\": false,\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 791560,
                          "default": 0
                        },
                        "orgId": {
                          "type": "integer",
                          "example": 100737,
                          "default": 0
                        },
                        "description": {
                          "type": "string",
                          "example": "April 777"
                        },
                        "discountCode": {
                          "type": "string",
                          "example": "XYZ12345"
                        },
                        "validTillDate": {
                          "type": "string",
                          "example": "1970-01-01T00:00:00Z"
                        },
                        "validDaysFromCreation": {
                          "type": "integer",
                          "example": 30,
                          "default": 0
                        },
                        "expiryStrategyValue": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "maxCreate": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "maxRedeem": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "isTransferrable": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "anyUser": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "sameUserMultipleRedeem": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isReferralExistingUsersAllowed": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isMultipleUseAllowed": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isValidationRequired": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isValidWithDiscountedItem": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "createdBy": {
                          "type": "integer",
                          "example": 75161973,
                          "default": 0
                        },
                        "numIssued": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "numRedeemed": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "createdOn": {
                          "type": "string",
                          "example": "2025-06-12T12:34:49Z"
                        },
                        "lastUsed": {
                          "type": "string",
                          "example": "2025-06-12T12:58:18Z"
                        },
                        "seriesCode": {
                          "type": "string",
                          "example": "39262223334841478347"
                        },
                        "smsTemplate": {
                          "type": "string",
                          "example": "Hi {{first_name}}"
                        },
                        "isSMSDisabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "info": {
                          "type": "string",
                          "example": "April 777"
                        },
                        "isMultipleVouchersPerUserAllowed": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "doNotResendExistingVoucher": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "mutualExclusiveSeriesIds": {
                          "type": "string",
                          "example": "[-1]"
                        },
                        "storeIdsJson": {
                          "type": "string",
                          "example": "[-1]"
                        },
                        "isDvsEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "dvsExpiryDate": {
                          "type": "string",
                          "example": "2025-06-12T00:00:00Z"
                        },
                        "priority": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "shortSMSTemplate": {
                          "type": "string",
                          "example": "Hello {{cust_name}}, your voucher code is {{voucher_code}}"
                        },
                        "maxVouchersPerUser": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "minDaysBetweenVouchers": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "maxReferralsPerReferee": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "discountUpto": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "discountValue": {
                          "type": "integer",
                          "example": 500,
                          "default": 0
                        },
                        "dvsItems": {
                          "type": "string",
                          "example": "items"
                        },
                        "redemptionRange": {
                          "type": "string",
                          "example": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}"
                        },
                        "minBillAmount": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "maxBillAmount": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "redeemAtStore": {
                          "type": "string",
                          "example": "[-1]"
                        },
                        "campaignId": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "tag": {
                          "type": "string",
                          "example": "April 777"
                        },
                        "maxRedemptionsInSeriesPerUser": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "minDaysBetweenRedemption": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "redemptionValidFrom": {
                          "type": "string",
                          "example": "2025-06-12T00:00:00Z"
                        },
                        "sourceOrgId": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "issueToLoyalty": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "redeemStoreType": {
                          "type": "string",
                          "example": "redeemable_stores"
                        },
                        "offlineRedeemType": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isOldFlowEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isPreRedeemEventRequired": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "termsAndConditions": {
                          "type": "string",
                          "example": "T&C"
                        },
                        "signalRedemptionEvent": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "syncToClient": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "showPinCode": {
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
                        "ownedBy": {
                          "type": "string",
                          "example": "NONE"
                        },
                        "ownerId": {
                          "type": "integer",
                          "example": -1,
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
                        "resendMessageEnabled": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "redemptionPerCouponMaxLimit": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "seriesType": {
                          "type": "string",
                          "example": "UNDEFINED"
                        },
                        "clientHandlingType": {
                          "type": "string",
                          "example": "DISC_CODE"
                        },
                        "expiryStrategyType": {
                          "type": "string",
                          "example": "DAYS"
                        },
                        "discountOn": {
                          "type": "string",
                          "example": "BILL"
                        },
                        "discountType": {
                          "type": "string",
                          "example": "ABS"
                        },
                        "updateProductData": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "externalIssual": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "With redemptionPerCouponMaxLimit",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 698948,
                          "default": 0
                        },
                        "orgId": {
                          "type": "integer",
                          "example": 100737,
                          "default": 0
                        },
                        "description": {
                          "type": "string",
                          "example": "LIKE1w2w2345678910"
                        },
                        "discountCode": {
                          "type": "string",
                          "example": "XYZ1w23"
                        },
                        "validTillDate": {
                          "type": "string",
                          "example": "2030-09-29T00:00:00Z"
                        },
                        "validDaysFromCreation": {
                          "type": "integer",
                          "example": 30,
                          "default": 0
                        },
                        "expiryStrategyValue": {
                          "type": "integer",
                          "example": 30,
                          "default": 0
                        },
                        "maxCreate": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "maxRedeem": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "isTransferrable": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "anyUser": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "sameUserMultipleRedeem": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "isReferralExistingUsersAllowed": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isMultipleUseAllowed": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "isValidationRequired": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isValidWithDiscountedItem": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "createdBy": {
                          "type": "integer",
                          "example": 75154383,
                          "default": 0
                        },
                        "numIssued": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "numRedeemed": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "createdOn": {
                          "type": "string",
                          "example": "2025-02-04T08:52:56Z"
                        },
                        "lastUsed": {
                          "type": "string",
                          "example": "2025-02-04T10:19:30Z"
                        },
                        "seriesCode": {
                          "type": "string",
                          "example": "seriesCode001"
                        },
                        "smsTemplate": {
                          "type": "string",
                          "example": "Hi  {{first_name}}"
                        },
                        "isSMSDisabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "info": {
                          "type": "string",
                          "example": "LIKE12345678910"
                        },
                        "isMultipleVouchersPerUserAllowed": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "doNotResendExistingVoucher": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "mutualExclusiveSeriesIds": {
                          "type": "string",
                          "example": "[]"
                        },
                        "storeIdsJson": {
                          "type": "string",
                          "example": "[-1]"
                        },
                        "isDvsEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "dvsExpiryDate": {
                          "type": "string",
                          "example": "2025-02-04T00:00:00Z"
                        },
                        "priority": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "shortSMSTemplate": {
                          "type": "string",
                          "example": "Hello {{cust_name}}, your voucher code is {{voucher_code}}"
                        },
                        "maxVouchersPerUser": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "minDaysBetweenVouchers": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "maxReferralsPerReferee": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "discountUpto": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "discountValue": {
                          "type": "integer",
                          "example": 500,
                          "default": 0
                        },
                        "dvsItems": {
                          "type": "string",
                          "example": "items"
                        },
                        "redemptionRange": {
                          "type": "string",
                          "example": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}"
                        },
                        "minBillAmount": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "maxBillAmount": {
                          "type": "integer",
                          "example": 9007199254740991,
                          "default": 0
                        },
                        "redeemAtStore": {
                          "type": "string",
                          "example": "[-1]"
                        },
                        "campaignId": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "tag": {
                          "type": "string",
                          "example": "LIKE12345678910"
                        },
                        "maxRedemptionsInSeriesPerUser": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "minDaysBetweenRedemption": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "redemptionValidFrom": {
                          "type": "string",
                          "example": "1970-01-01T00:00:00Z"
                        },
                        "sourceOrgId": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "issueToLoyalty": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "redeemStoreType": {
                          "type": "string",
                          "example": "redeemable_stores"
                        },
                        "offlineRedeemType": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isOldFlowEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "isPreRedeemEventRequired": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "termsAndConditions": {
                          "type": "string",
                          "example": "T&C apply"
                        },
                        "signalRedemptionEvent": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "syncToClient": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "showPinCode": {
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
                        "ownedBy": {
                          "type": "string",
                          "example": "NONE"
                        },
                        "ownerId": {
                          "type": "integer",
                          "example": -1,
                          "default": 0
                        },
                        "ownerValidity": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "alphaNumeric": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "shortCodeLength": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "randomCodeLength": {
                          "type": "integer",
                          "example": 8,
                          "default": 0
                        },
                        "fixedExpiryDate": {
                          "type": "integer",
                          "example": 1916870400000,
                          "default": 0
                        },
                        "numTotal": {
                          "type": "integer",
                          "example": -1,
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
                        "resendMessageEnabled": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "redemptionPerCouponMaxLimit": {
                          "type": "integer",
                          "example": 3,
                          "default": 0
                        },
                        "seriesType": {
                          "type": "string",
                          "example": "UNDEFINED"
                        },
                        "clientHandlingType": {
                          "type": "string",
                          "example": "DISC_CODE"
                        },
                        "expiryStrategyType": {
                          "type": "string",
                          "example": "DAYS"
                        },
                        "discountOn": {
                          "type": "string",
                          "example": "BILL"
                        },
                        "discountType": {
                          "type": "string",
                          "example": "ABS"
                        },
                        "updateProductData": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "externalIssual": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "warnings": {
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
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "language": "shell",
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v2/coupon/series/923222?format=json' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \\\n--header 'Cookie: _cfuvid=mJsi4aQ3oxBBuYDlQxQdv_PNm_wDqIZBYmAonrNmnns-1765961752938-0.0.1.1-604800000' \\\n--data '{\n  \"CouponSeriesV2\": {\n    \"id\": 923222,\n    \"seriesCode\": \"923222\",\n    \"orgId\": 999,\n    \"description\": \"promogold22\",\n    \"discountCode\": \"gold1234\",\n    \"validTillDate\": \"2026-06-12T00:00:00+05:30\",\n    \"anyUser\": false,\n    \"smsTemplate\": \"Hi {{first_name}} {{last_name}} your voucher code //////{{voucher}}is valid\",\n    \"discountValue\": 1000,\n    \"clientHandlingType\": \"DISC_CODE\",\n    \"expiryStrategyType\": \"SERIES_EXPIRY\",\n    \"discountType\": \"ABS\",\n    \n    \"couponPrefix\": \"gold\",\n    \"isPrefixEnabled\": false,\n    \"orgPrefixOverride\": false,\n    \n    \"couponSuffix\": \"NEWEND\",\n    \"isSuffixEnabled\": true,\n    \"orgSuffixOverride\": false\n  }\n}'",
              "name": "Sample request"
            },
            {
              "language": "curl",
              "code": "\"productInfo\": [\n            {\n                \"productType\": \"SKU\",\n                \"productIds\": [ // product ids not name\n                    30,\n                    40\n                ]\n            },\n            {\n                \"productType\": \"CATEGORY\",\n                \"productIds\": [\n                    50,\n                    60\n                ]\n            },\n            {\n                \"productType\": \"BRAND\",\n                \"productIds\": [\n                    10,\n                    20\n                ]\n            },\n            {\n                \"productType\": \"ATTRIBUTE\",\n                \"productIds\": [\n                    10,\n                    20\n                ]\n            }\n        ],",
              "name": "Product Information"
            },
            {
              "language": "curl",
              "code": "\"redemptionOrgEntityDetails\": [\n            {\n                \"redemptionOrgEntityType\": \"CONCEPT\",\n                \"orgEntityId\": 10\n            },\n            {\n                \"redemptionOrgEntityType\": \"TILL\",\n                \"orgEntityId\": 20\n            },\n            {\n                \"redemptionOrgEntityType\": \"ZONE\",\n                \"orgEntityId\": 30\n            },\n            {\n                \"redemptionOrgEntityType\": \"STORE\",\n                \"orgEntityId\": 40\n            }\n        ],",
              "name": "Redemption Org Entry Details"
            },
            {
              "language": "curl",
              "code": "{\n    \"CouponSeriesV2\": {\n        \"maxCreate\": -1,\n        \"maxRedeem\": -1,\n        \"anyUser\": true,\n        \"redemptionPerCouponMaxLimit\": 3,\n        \"maxRedemptionsInSeriesPerUser\": -1,\n        \"sameUserMultipleRedeem\": true,\n        \"isMultipleUseAllowed\": true,\n        \"isMultipleVouchersPerUserAllowed\": true,\n        \"maxVouchersPerUser\": -1,\n        \"minDaysBetweenVouchers\": -1,\n        \"minDaysBetweenRedemption\": -1,\n        \"redemptionValidFrom\": \"1970-01-01T05:30:00+05:30\",\n        \"description\": \"LIKE1w2w2345678910\",\n        \"discountCode\": \"XYZ1w23\",\n        \"validTillDate\": \"2030-09-30T00:00:00+05:30\",\n        \"validDaysFromCreation\": 30,\n        \"expiryStrategyValue\": 30,\n        \"isTransferrable\": false,\n        \"isReferralExistingUsersAllowed\": false,\n        \"isValidationRequired\": false,\n        \"isValidWithDiscountedItem\": false,\n        \"createdBy\": 70,\n        \"numIssued\": 0,\n        \"numRedeemed\": 0,\n        \"createdOn\": \"2022-02-23T11:08:37+05:30\",\n        \"lastUsed\": \"2022-02-23T11:08:36+05:30\",\n        \"seriesCode\": \"seriesCode001\",\n        \"smsTemplate\": \"Hi  {{first_name}}\",\n        \"isSMSDisabled\": false,\n        \"info\": \"LIKE12345678910\",\n        \"doNotResendExistingVoucher\": true,\n        \"mutualExclusiveSeriesIds\": \"[]\",\n        \"storeIdsJson\": \"[-1]\",\n        \"isDvsEnabled\": false,\n        \"dvsExpiryDate\": \"2022-02-23T00:00:00+05:30\",\n        \"priority\": 0,\n        \"shortSMSTemplate\": \"Hello {{cust_name}}, your voucher code is {{voucher_code}}\",\n        \"maxReferralsPerReferee\": -1,\n        \"discountUpto\": 0,\n        \"discountValue\": 500,\n        \"dvsItems\": \"items\",\n        \"redemptionRange\": \"{\\\"dom\\\":[\\\"-1\\\"],\\\"dow\\\":[\\\"-1\\\"],\\\"hours\\\":[\\\"-1\\\"]}\",\n        \"minBillAmount\": 0,\n        \"maxBillAmount\": 9007199254740991,\n        \"redeemAtStore\": \"[-1]\",\n        \"campaignId\": -1,\n        \"tag\": \"LIKE12345678910\",\n        \"sourceOrgId\": -1,\n        \"issueToLoyalty\": false,\n        \"redeemStoreType\": \"redeemable_stores\",\n        \"offlineRedeemType\": false,\n        \"isOldFlowEnabled\": false,\n        \"isPreRedeemEventRequired\": false,\n        \"termsAndConditions\": \"T&C apply\",\n        \"signalRedemptionEvent\": false,\n        \"syncToClient\": false,\n        \"showPinCode\": false,\n        \"numUploadedNonIssued\": 0,\n        \"numUploadedTotal\": 0,\n        \"redemptionValidAfterDays\": 0,\n        \"ownedBy\": \"NONE\",\n        \"ownerId\": -1,\n        \"ownerValidity\": 0,\n        \"alphaNumeric\": true,\n        \"shortCodeLength\": 0,\n        \"randomCodeLength\": 8,\n        \"fixedExpiryDate\": 1916937000000,\n        \"numTotal\": -1,\n        \"latestIssualTime\": 0,\n        \"latestRedemptionTime\": 0,\n        \"resendMessageEnabled\": true,\n        \"seriesType\": \"UNDEFINED\",\n        \"clientHandlingType\": \"DISC_CODE\",\n        \"expiryStrategyType\": \"DAYS\",\n        \"discountOn\": \"BILL\",\n        \"discountType\": \"ABS\",\n        \"updateProductData\": false,\n        \"externalIssual\": false\n    }\n}",
              "name": "With redemptionPerCouponMaxLimit"
            }
          ],
          "samples-languages": [
            "shell",
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