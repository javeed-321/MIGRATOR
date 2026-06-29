> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Detailed Customer Coupon Data

This API provides detailed information about customer coupons, including each coupon’s unique code, discount value, expiry date, redemption status, and related campaign details. It also covers specific conditions, such as redemption limits, eligibility criteria, and applicable stores. This API is useful for obtaining in-depth data about each coupon and understanding its terms, usage history, and redemption rules.

> **Note**
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|                        |                                 |
| :--------------------- | :------------------------------ |
| URL                    | /customers\[customerId]/coupons |
| HTTP Method            | GET                             |
| Pagination             | No                              |
| Batch support          | No                              |
| Rate limit information | None                            |

## Example request

```json Sample request Get detailed customer coupon data
curl --location 'https://eu.api.capillarytech.com/v2/customers/565032176/coupons' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=P1v.oAjtqBQvJ2.EXipQJ6uHW4JuFFe.H0bflyFcoPQ-1757327323020-0.0.1.1-604800000'
```
```curl Sample request with coupon code case = UPPER
curl --location 'https://eu.api.capillarytech.com/v2/customers/565032176/coupons?coupon_code_case=UPPER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bWFkaHVNzI3MjU2YQ==' \
--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=m2yUAqOA0jRHLfltVaqsrBoJp6yyOUuCAyw4QyAJ0uw-1751016550935-0.0.1.1-604800000; _cfuvid=yuMH3JWJP_h9XF84w83ViZelssejvCWsi32.uFF2WbI-1758716122894-0.0.1.1-604800000'
```
```curl Sample request with coupon code case = LOWER
curl --location 'https://eu.api.capillarytech.com/v2/customers/565032176/coupons?coupon_code_case=LOWER' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bWFkaHVfcmltI3MjU2YQ==' \
--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=m2yUAqOA0jRHLfltVaqsrBoJp6yyOUuCAyw4QyAJ0uw-1751016550935-0.0.1.1-604800000; _cfuvid=0kQrpjpRENfbHxG7FvzG_TDkfolqNDWNKeavqAqBJ_E-1758714752743-0.0.1.1-604800000'
```

# Request path parameters

| Parameters | Data Type | Description                                        |
| :--------- | :-------- | :------------------------------------------------- |
| customerId | Integer   | Unique ID of the customer to fetch coupon details. |

# Request query parameters

| Parameters         | Data Type | Description                                                                                                                                                                                                                                        |
| :----------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coupon_code_case` | Enum      | This parameter helps to retrieve the coupon code in the desired letter cases. By default, the system automatically converts the coupon code to upper case. The query itself is not case sensitive. Supported Values: `LOWER`, `UPPER`, `AS_IT_IS`. |

# Response Parameters

### Coupon Entity

| Parameter                        | Type         | Description                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                             | Integer      | Unique coupon ID.                                                                                                                                                                                                                                                                                                                                                               |
| `seriesId`                       | Integer      | ID of the associated coupon series.                                                                                                                                                                                                                                                                                                                                             |
| `series`                         | Object       | Series details                                                                                                                                                                                                                                                                                                                                                                  |
| `code`                           | String       | Unique coupon code (e.g., `"QZX30JQLIC"`).                                                                                                                                                                                                                                                                                                                                      |
| `description`                    | String       | Coupon description.                                                                                                                                                                                                                                                                                                                                                             |
| `createdDate`                    | String (ISO) | Creation timestamp. YYYY-MM-DDTHH:MM:SSZ                                                                                                                                                                                                                                                                                                                                        |
| `validTill`                      | String (ISO) | Expiry timestamp. YYYY-MM-DDTHH:MM:SSZ                                                                                                                                                                                                                                                                                                                                          |
| `isRedeemed`                     | Boolean      | Indicates whether this specific coupon instance has been redeemed at least once. \true`= coupon has been redeemed,`false\` = coupon is not redeemed                                                                                                                                                                                                                             |
| `issuedTo`                       | Integer      | Recipient user ID.                                                                                                                                                                                                                                                                                                                                                              |
| `issuedBy`                       | Integer      | Issuer user ID.                                                                                                                                                                                                                                                                                                                                                                 |
| `orgId`                          | Integer      | Organization ID.                                                                                                                                                                                                                                                                                                                                                                |
| `refId`                          | Integer      | Reference ID (`0` if none).                                                                                                                                                                                                                                                                                                                                                     |
| `issuedAt`                       | Object       | Issuing location                                                                                                                                                                                                                                                                                                                                                                |
| `status`                         | Object       | Operation status                                                                                                                                                                                                                                                                                                                                                                |
| `couponDiscountType`             | String       | Discount type (e.g., `"ABS"`).                                                                                                                                                                                                                                                                                                                                                  |
| `issuedOn`                       | String (ISO) | Issuance timestamp. YYYY-MM-DDTHH:MM:SSZ                                                                                                                                                                                                                                                                                                                                        |
| `issuedOnISO`                    | String       | Timestamp when the coupon was issued in ISO 8601 format, returned in the server time zone. EU server example: `2025-05-21T07:13:01Z` → 21 May 2025, 07:13:01 (UTC). India server example: `2025-05-21T12:43:01+05:30` → 21 May 2025, 12:43:01 (IST). **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.   |
| `activeFrom`                     | String (ISO) | Activation timestamp. YYYY-MM-DDTHH:MM:SSZ                                                                                                                                                                                                                                                                                                                                      |
| `redemptionsLeft`                | Integer      | Remaining redemptions (e.g., `4`). -1 indicates that there is no limit on the redemptions, and unlimited redemptions are available.                                                                                                                                                                                                                                             |
| `couponStatus`                   | Object       | Coupon status (mirrors `status`).                                                                                                                                                                                                                                                                                                                                               |
| `redemptionInfo`                 | Array        | Redemption history                                                                                                                                                                                                                                                                                                                                                              |
| `redemptionInfo[].redeemedOnISO` | String       | Timestamp when the coupon was redeemed in ISO 8601 format, returned in the server time zone. EU server example: `2025-05-21T07:15:00Z` → 21 May 2025, 07:15:00 (UTC). India server example: `2025-05-21T12:45:00+05:30` → 21 May 2025, 12:45:00 (IST). **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request. |
| `reversedRedemptionInfo`         | Array        | Reversed redemptions                                                                                                                                                                                                                                                                                                                                                            |
| `discountType`                   | Boolean      | **Deprecated**:  Use `couponDiscountType`.                                                                                                                                                                                                                                                                                                                                      |
| `discountValue`                  | Integer      | Discount amount (e.g., `1000`).                                                                                                                                                                                                                                                                                                                                                 |
| `discountValueAsDouble`          | Double       | Discount value in double format.                                                                                                                                                                                                                                                                                                                                                |
| `discountUpto`                   | Integer      | Maximum discount cap (`0` for no cap).                                                                                                                                                                                                                                                                                                                                          |
| `trimmedCode`                    | String       | Shortened coupon code.                                                                                                                                                                                                                                                                                                                                                          |
| `seriesName`                     | String       | Name of the coupon series.                                                                                                                                                                                                                                                                                                                                                      |
| `redeemed`                       | Boolean      | Duplicate of `isRedeemed`. Indicates whether this specific coupon has been redeemed at least once, true`= coupon has been redeemed,`false\` = coupon is not redeemed                                                                                                                                                                                                            |

### Series Object (`entity[].series`)

| Parameter                            | Type         | Description                                          |
| ------------------------------------ | ------------ | ---------------------------------------------------- |
| `id`                                 | Integer      | Series ID.                                           |
| `orgId`                              | Integer      | Organization ID.                                     |
| `description`                        | String       | Series description.                                  |
| `discountCode`                       | String       | Discount code (e.g., `"uatMaySant"`).                |
| `validTillDate`                      | String (ISO) | Series expiry timestamp. YYYY-MM-DDTHH:MM:SSZ        |
| `validDaysFromCreation`              | Integer      | Validity duration in days.                           |
| `expiryStrategyValue`                | Integer      | Expiry strategy code.                                |
| `maxCreate`                          | Integer      | Maximum issuable coupons (e.g., `20`).               |
| `maxRedeem`                          | Integer      | Maximum redemptions (e.g., `20`).                    |
| `isTransferrable`                    | Boolean      | `false` if non-transferable.                         |
| `anyUser`                            | Boolean      | `true` if redeemable by any user.                    |
| `sameUserMultipleRedeem`             | Boolean      | `true` if the user can redeem multiple times.        |
| `isReferralExistingUsersAllowed`     | Boolean      | `false` to block referrals for existing users.       |
| `isMultipleUseAllowed`               | Boolean      | `true` if multi-use is allowed.                      |
| `isValidationRequired`               | Boolean      | `false` if no validation needed.                     |
| `isValidWithDiscountedItem`          | Boolean      | `true` if valid on discounted items.                 |
| `createdBy`                          | Integer      | Creator user ID.                                     |
| `numIssued`                          | Integer      | Number of coupons issued.                            |
| `numRedeemed`                        | Integer      | Number of coupons redeemed.                          |
| `createdOn`                          | String (ISO) | Series creation timestamp. YYYY-MM-DDTHH:MM:SSZ      |
| `lastUsed`                           | String (ISO) | Last redemption timestamp. YYYY-MM-DDTHH:MM:SSZ      |
| `seriesCode`                         | String       | Internal series code.                                |
| `smsTemplate`                        | String       | SMS notification template.                           |
| `isSMSDisabled`                      | Boolean      | `false` if SMS is enabled.                           |
| `isUpdateProductData`                | Boolean      | `false` if product updates are disabled.             |
| `info`                               | String       | Additional series info.                              |
| `isMultipleVouchersPerUserAllowed`   | Boolean      | `true` if users can hold multiple vouchers.          |
| `doNotResendExistingVoucher`         | Boolean      | `true` to avoid resending existing vouchers.         |
| `mutualExclusiveSeriesIds`           | String       | JSON array of exclusive series IDs.                  |
| `storeIdsJson`                       | String       | JSON array of valid store IDs.                       |
| `isDvsEnabled`                       | Boolean      | `false` if Dynamic Voucher System (DVS) is disabled. |
| `dvsExpiryDate`                      | String (ISO) | DVS expiry timestamp. YYYY-MM-DDTHH:MM:SSZ           |
| `priority`                           | Integer      | Priority level (e.g., `0`).                          |
| `shortSMSTemplate`                   | String       | Concise SMS template.                                |
| `maxVouchersPerUser`                 | Integer      | Max vouchers per user (e.g., `5`).                   |
| `minDaysBetweenVouchers`             | Integer      | Minimum days between issuing vouchers.               |
| `maxReferralsPerReferee`             | Integer      | Max referrals per user (`-1` for unlimited).         |
| `discountUpto`                       | Integer      | Discount cap (`0` for no cap).                       |
| `discountValue`                      | Integer      | Discount amount (e.g., `1000`).                      |
| `dvsItems`                           | String       | DVS-specific items.                                  |
| `redemptionRange`                    | String       | JSON for redemption constraints.                     |
| `minBillAmount`                      | Integer      | Minimum bill amount to redeem (e.g., `100`).         |
| `maxBillAmount`                      | Integer      | Maximum bill amount to redeem (e.g., `20000`).       |
| `redeemAtStore`                      | String       | JSON array of redemption store IDs.                  |
| `campaignId`                         | Integer      | Associated campaign ID (`-1` if none).               |
| `tag`                                | String       | Series tag.                                          |
| `maxRedemptionsInSeriesPerUser`      | Integer      | Max redemptions per user (e.g., `4`).                |
| `minDaysBetweenRedemption`           | Integer      | Minimum days between redemptions.                    |
| `redemptionValidFrom`                | String (ISO) | Earliest redemption timestamp. YYYY-MM-DDTHH:MM:SSZ  |
| `sourceOrgId`                        | Integer      | Source organization ID (`-1` if none).               |
| `issueToLoyalty`                     | Boolean      | `false` if not issued via loyalty program.           |
| `redeemStoreType`                    | String       | Redemption store type.                               |
| `offlineRedeemType`                  | Boolean      | `false` if online-only redemption.                   |
| `isOldFlowEnabled`                   | Boolean      | `false` if legacy flow is disabled.                  |
| `isPreRedeemEventRequired`           | Boolean      | `false` if no pre-redemption event needed.           |
| `brands`                             | Array        | Allowed brands (empty for all).                      |
| `products`                           | Array        | Allowed products (empty for all).                    |
| `categories`                         | Array        | Allowed categories (empty for all).                  |
| `termsAndConditions`                 | String       | Terms and conditions text.                           |
| `signalRedemptionEvent`              | Boolean      | `false` if no event signalling needed.               |
| `syncToClient`                       | Boolean      | `false` if no client sync required.                  |
| `showPinCode`                        | Boolean      | `false` if PIN not required.                         |
| `redemptionPerCouponMaxLimit`        | Integer      | Max redemptions per coupon (`-1` for unlimited).     |
| `validRedemptionOrgEntityDetails`    | Object       | Valid redemption entities (see below).               |
| `seriesType`                         | String       | Series type (e.g., `"UNDEFINED"`).                   |
| `clientHandlingType`                 | String       | Client handling type (e.g., `"DISC_CODE"`).          |
| `expiryStrategyType`                 | String       | Expiry strategy (e.g., `"SERIES_EXPIRY"`).           |
| `discountOn`                         | String       | Discount applicability (e.g., `"BILL"`).             |
| `discountType`                       | String       | Discount type (e.g., `"ABS"`).                       |
| `dvsExpiryDateFormat`                | String       | DVS expiry date in `YYYY-MM-DD`.                     |
| `updateProductData`                  | Boolean      | `false` if product updates are disabled.             |
| `entityLevelRedemptionConfigsValues` | Array        | Additional redemption configs (empty).               |
| `redemptionValidFromFormat`          | String       | Redemption start date in `YYYY-MM-DD`.               |
| `validTilldateFormat`                | String       | Series expiry date in `YYYY-MM-DD`.                  |

### IssuedAt Object

| Parameter     | Type    | Description                         |
| ------------- | ------- | ----------------------------------- |
| `id`          | Integer | Location ID (e.g., `75152715`).     |
| `code`        | String  | Location code (e.g., `"doc123"`).   |
| `description` | String  | Location description (empty).       |
| `name`        | String  | Location name (e.g., `"DocStore"`). |
| `type`        | String  | Location type (e.g., `"STORE"`).    |
| `adminType`   | String  | Admin type (e.g., `"GENERAL"`).     |
| `isOrgUnit`   | Boolean | `false` if not an org unit.         |

### Status Object

| Parameter              | Type    | Description                               |
| ---------------------- | ------- | ----------------------------------------- |
| `statusCode`           | Object  | Status details (see below).               |
| `statusCode.status`    | Boolean | `true` if successful.                     |
| `statusCode.code`      | Integer | Status code                               |
| `statusCode.message`   | String  | Status message (e.g., `"Coupon Resent"`). |
| `warnings`             | Array   | Warnings (empty).                         |
| `warningsAsStatusCode` | Array   | Warnings in status format (empty).        |
| `code`                 | Integer | Duplicate of `statusCode.code`.           |
| `success`              | Boolean | Duplicate of `statusCode.status`.         |
| `message`              | String  | Duplicate of `statusCode.message`.        |

# Example response

```json with coupon code case = UPPER
{
    "entity": [
        {
            "id": 33267197,
            "seriesId": 14162,
            "series": {
                "id": 14162,
                "orgId": 50074,
                "description": "Mobile Push offer 1",
                "discountCode": "MobilePush",
                "validTillDate": "2118-09-10T16:09:02+05:30",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 200,
                "maxCreate": 1000,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 78,
                "numRedeemed": 6,
                "createdOn": "2018-09-10T14:45:06+05:30",
                "lastUsed": "2019-10-31T16:47:39+05:30",
                "seriesCode": "GM0V3HXC",
                "smsTemplate": "{{full_name}} Your Coupon code {{voucher}} Expires on {{valid_days_from_create}} {{optout}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "Mobile Push offer 1",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2019-11-30T00:00:00+05:30",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Mobile Push offer 1",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "LOYALTY",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "DAYS",
                "discountOn": "BILL",
                "discountType": "PERC",
                "dvsExpiryDateFormat": "2019-11-30",
                "updateProductData": false,
                "validTilldateFormat": "2118-09-10",
                "redemptionValidFromFormat": "1970-01-01"
            },
            "code": "ER07BCJ8",
            "description": "Mobile Push offer 1",
            "createdDate": "2019-10-31T17:15:02+05:30",
            "validTill": "2020-05-18T23:59:59+05:30",
            "isRedeemed": false,
            "issuedTo": 343040815,
            "issuedBy": 50006796,
            "orgId": 50074,
            "refId": 0,
            "issuedAt": {
                "id": 50006795,
                "code": "storecode",
                "description": "webenagestore",
                "name": "webstore1",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "PERC",
            "issuedOn": "2019-10-31T17:15:02+05:30",
            "issuedOnISO": "2019-10-31T11:45:02Z",
            "activeFrom": "2019-10-31T00:00:00+05:30",
            "redemptionsLeft": -1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "discountType": false,
            "discountValue": 10,
            "discountUpto": 0,
            "redeemed": false,
            "seriesName": "Mobile Push offer 1",
            "trimmedCode": "ER07BCJ8"
        },
        {
            "id": 33267195,
            "seriesId": 14162,
            "series": {
                "id": 14162,
                "orgId": 50074,
                "description": "Mobile Push offer 1",
                "discountCode": "MobilePush",
                "validTillDate": "2118-09-10T16:09:02+05:30",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 200,
                "maxCreate": 1000,
                "maxRedeem": -1,
                "isTransferrable": false,
                "anyUser": false,
                "sameUserMultipleRedeem": false,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": false,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": false,
                "createdBy": 4,
                "numIssued": 78,
                "numRedeemed": 6,
                "createdOn": "2018-09-10T14:45:06+05:30",
                "lastUsed": "2019-10-31T16:47:39+05:30",
                "seriesCode": "GM0V3HXC",
                "smsTemplate": "{{full_name}} Your Coupon code {{voucher}} Expires on {{valid_days_from_create}} {{optout}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "Mobile Push offer 1",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2019-11-30T00:00:00+05:30",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": -1,
                "minDaysBetweenVouchers": -1,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 10,
                "dvsItems": "false",
                "redemptionRange": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}",
                "minBillAmount": 0,
                "maxBillAmount": 9007199254740991,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Mobile Push offer 1",
                "maxRedemptionsInSeriesPerUser": -1,
                "minDaysBetweenRedemption": -1,
                "redemptionValidFrom": "1970-01-01T05:30:00+05:30",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C apply",
                "signalRedemptionEvent": true,
                "syncToClient": false,
                "showPinCode": false,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "LOYALTY",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "DAYS",
                "discountOn": "BILL",
                "discountType": "PERC",
                "dvsExpiryDateFormat": "2019-11-30",
                "updateProductData": false,
                "validTilldateFormat": "2118-09-10",
                "redemptionValidFromFormat": "1970-01-01"
            },
            "code": "H306ORH2",
            "description": "Mobile Push offer 1",
            "createdDate": "2019-10-31T17:14:49+05:30",
            "validTill": "2020-05-18T23:59:59+05:30",
            "isRedeemed": false,
            "issuedTo": 343040815,
            "issuedBy": 50006796,
            "orgId": 50074,
            "refId": 0,
            "issuedAt": {
                "id": 50006795,
                "code": "storecode",
                "description": "webenagestore",
                "name": "webstore1",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "PERC",
            "issuedOn": "2019-10-31T17:14:49+05:30",
            "issuedOnISO": "2019-10-31T11:44:49Z",
            "activeFrom": "2019-10-31T00:00:00+05:30",
            "redemptionsLeft": -1,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "discountType": false,
            "discountValue": 10,
            "discountUpto": 0,
            "redeemed": false,
            "seriesName": "Mobile Push offer 1",
            "trimmedCode": "H306ORH2"
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json with coupon code case = LOWER
{
    "entity": [
        {
            "id": 1298282420,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21"
            },
            "code": "qzx30jqlic",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:43:01Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:43:01Z",
            "issuedOnISO": "2025-05-21T07:13:01Z",
            "activeFrom": "2025-05-21T12:43:01Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "seriesName": "Coupon Series for UAT May Sant",
            "redeemed": false,
            "trimmedCode": "qzx30jqlic"
        },
        {
            "id": 1298282419,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21"
            },
            "code": "gijsgiza3p",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:42:59Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:42:59Z",
            "issuedOnISO": "2025-05-21T07:12:59Z",
            "activeFrom": "2025-05-21T12:42:59Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "seriesName": "Coupon Series for UAT May Sant",
            "redeemed": false,
            "trimmedCode": "gijsgiza3p"
        },
        {
            "id": 1298282418,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21"
            },
            "code": "w9z584ruw6",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:42:58Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:42:58Z",
            "issuedOnISO": "2025-05-21T07:12:58Z",
            "activeFrom": "2025-05-21T12:42:58Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "seriesName": "Coupon Series for UAT May Sant",
            "redeemed": false,
            "trimmedCode": "w9z584ruw6"
        },
        {
            "id": 1298282415,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "entityLevelRedemptionConfigsValues": [],
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21"
            },
            "code": "7bu2joyzzr",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:42:51Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:42:51Z",
            "issuedOnISO": "2025-05-21T07:12:51Z",
            "activeFrom": "2025-05-21T12:42:51Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "seriesName": "Coupon Series for UAT May Sant",
            "redeemed": false,
            "trimmedCode": "7bu2joyzzr"
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```
```json Sample response Get detailed customer coupon data
{
    "entity": [
        {
            "id": 1298282420,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21",
                "entityLevelRedemptionConfigsValues": []
            },
            "code": "QZX30JQLIC",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:43:01Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:43:01Z",
            "issuedOnISO": "2025-05-21T07:13:01Z",
            "activeFrom": "2025-05-21T12:43:01Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "trimmedCode": "QZX30JQLIC",
            "redeemed": false,
            "seriesName": "Coupon Series for UAT May Sant"
        },
        {
            "id": 1298282419,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21",
                "entityLevelRedemptionConfigsValues": []
            },
            "code": "GIJSGIZA3P",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:42:59Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:42:59Z",
            "issuedOnISO": "2025-05-21T07:12:59Z",
            "activeFrom": "2025-05-21T12:42:59Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "trimmedCode": "GIJSGIZA3P",
            "redeemed": false,
            "seriesName": "Coupon Series for UAT May Sant"
        },
        {
            "id": 1298282418,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21",
                "entityLevelRedemptionConfigsValues": []
            },
            "code": "W9Z584RUW6",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:42:58Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:42:58Z",
            "issuedOnISO": "2025-05-21T07:12:58Z",
            "activeFrom": "2025-05-21T12:42:58Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "trimmedCode": "W9Z584RUW6",
            "redeemed": false,
            "seriesName": "Coupon Series for UAT May Sant"
        },
        {
            "id": 1298282415,
            "seriesId": 775657,
            "series": {
                "id": 775657,
                "orgId": 100737,
                "description": "Coupon Series for UAT May Sant",
                "discountCode": "uatMaySant",
                "validTillDate": "2025-05-29T00:00:00Z",
                "validDaysFromCreation": 30,
                "expiryStrategyValue": 1,
                "maxCreate": 20,
                "maxRedeem": 20,
                "isTransferrable": false,
                "anyUser": true,
                "sameUserMultipleRedeem": true,
                "isReferralExistingUsersAllowed": false,
                "isMultipleUseAllowed": true,
                "isValidationRequired": false,
                "isValidWithDiscountedItem": true,
                "createdBy": 75155297,
                "numIssued": 0,
                "numRedeemed": 0,
                "createdOn": "2025-05-21T07:12:09Z",
                "lastUsed": "2025-05-21T07:12:09Z",
                "seriesCode": "0AAB21DFA86D4956BBD7",
                "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                "isSMSDisabled": false,
                "isUpdateProductData": false,
                "info": "UAT May Coupon Series",
                "isMultipleVouchersPerUserAllowed": true,
                "doNotResendExistingVoucher": true,
                "mutualExclusiveSeriesIds": "[-1]",
                "storeIdsJson": "[-1]",
                "isDvsEnabled": false,
                "dvsExpiryDate": "2025-05-21T00:00:00Z",
                "priority": 0,
                "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                "maxVouchersPerUser": 5,
                "minDaysBetweenVouchers": 0,
                "maxReferralsPerReferee": -1,
                "discountUpto": 0,
                "discountValue": 1000,
                "dvsItems": "items",
                "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                "minBillAmount": 100,
                "maxBillAmount": 20000,
                "redeemAtStore": "[-1]",
                "campaignId": -1,
                "tag": "Coupon Series for UAT May Sant",
                "maxRedemptionsInSeriesPerUser": 4,
                "minDaysBetweenRedemption": 0,
                "redemptionValidFrom": "2025-04-26T00:00:00Z",
                "sourceOrgId": -1,
                "issueToLoyalty": false,
                "redeemStoreType": "redeemable_stores",
                "offlineRedeemType": false,
                "isOldFlowEnabled": false,
                "isPreRedeemEventRequired": false,
                "brands": [],
                "products": [],
                "categories": [],
                "termsAndConditions": "T&C",
                "signalRedemptionEvent": false,
                "syncToClient": false,
                "showPinCode": false,
                "redemptionPerCouponMaxLimit": -1,
                "validRedemptionOrgEntityDetails": {
                    "concepts": [],
                    "zones": [],
                    "stores": [],
                    "tills": []
                },
                "seriesType": "UNDEFINED",
                "clientHandlingType": "DISC_CODE",
                "expiryStrategyType": "SERIES_EXPIRY",
                "discountOn": "BILL",
                "discountType": "ABS",
                "updateProductData": false,
                "validTilldateFormat": "2025-05-29",
                "redemptionValidFromFormat": "2025-04-26",
                "dvsExpiryDateFormat": "2025-05-21",
                "entityLevelRedemptionConfigsValues": []
            },
            "code": "7BU2JOYZZR",
            "description": "Coupon Series for UAT May Sant",
            "createdDate": "2025-05-21T12:42:51Z",
            "validTill": "2025-05-29T23:59:59Z",
            "isRedeemed": false,
            "issuedTo": 565032176,
            "issuedBy": 75155297,
            "orgId": 100737,
            "refId": 0,
            "issuedAt": {
                "id": 75152715,
                "code": "doc123",
                "description": "",
                "name": "DocStore",
                "type": "STORE",
                "adminType": "GENERAL",
                "isOrgUnit": false
            },
            "status": {
                "statusCode": {
                    "status": true,
                    "code": 700,
                    "message": "Coupon Resent"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 700,
                "success": true,
                "message": "Coupon Resent"
            },
            "couponDiscountType": "ABS",
            "issuedOn": "2025-05-21T12:42:51Z",
            "issuedOnISO": "2025-05-21T07:12:51Z",
            "activeFrom": "2025-05-21T12:42:51Z",
            "redemptionsLeft": 4,
            "couponStatus": {
                "statusCode": {
                    "status": true,
                    "code": 200,
                    "message": "Success"
                },
                "warnings": [],
                "warningsAsStatusCode": [],
                "code": 200,
                "success": true,
                "message": "Success"
            },
            "redemptionInfo": [],
            "reversedRedemptionInfo": [],
            "discountType": true,
            "discountValue": 1000,
            "discountValueAsDouble": 1000.0,
            "discountUpto": 0,
            "trimmedCode": "7BU2JOYZZR",
            "redeemed": false,
            "seriesName": "Coupon Series for UAT May Sant"
        }
    ],
    "warnings": [],
    "errors": [],
    "success": true
}
```

## API specific error code

| HTTP Status | Error Code (API-Specific) | Description                                                              |
| ----------- | ------------------------- | ------------------------------------------------------------------------ |
| `400`       | INVALID\_CUSTOMER\_ID     | Invalid or malformed `customerId` (e.g., non-numeric or negative value). |
| `401`       | UNAUTHORIZED              | Missing/invalid authentication token or insufficient permissions.        |
| `403`       | FORBIDDEN                 | Customer exists but requester lacks access to their coupons.             |
| `404`       | CUSTOMER\_NOT\_FOUND      | No customer exists with the provided `customerId`.                       |
| `404`       | NO\_COUPONS\_FOUND        | Customer exists but has no coupons.                                      |
| `500`       | INTERNAL\_SERVER\_ERROR   | Server-side failure (e.g., database timeout).                            |

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
    "/customers/{customerId}/coupons": {
      "get": {
        "summary": "Get Detailed Customer Coupon Data",
        "description": "",
        "operationId": "get-customer-coupons-detailed",
        "parameters": [
          {
            "name": "customerId",
            "in": "path",
            "description": "Unique ID of the customer to fetch coupon details.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
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
                  "With coupon_code_case=LOWER": {
                    "value": {
                      "entity": [
                        {
                          "id": 1298282420,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "entityLevelRedemptionConfigsValues": [],
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21"
                          },
                          "code": "qzx30jqlic",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:43:01Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:43:01Z",
                          "activeFrom": "2025-05-21T12:43:01Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "seriesName": "Coupon Series for UAT May Sant",
                          "redeemed": false,
                          "trimmedCode": "qzx30jqlic"
                        },
                        {
                          "id": 1298282419,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "entityLevelRedemptionConfigsValues": [],
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21"
                          },
                          "code": "gijsgiza3p",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:59Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:59Z",
                          "activeFrom": "2025-05-21T12:42:59Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "seriesName": "Coupon Series for UAT May Sant",
                          "redeemed": false,
                          "trimmedCode": "gijsgiza3p"
                        },
                        {
                          "id": 1298282418,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "entityLevelRedemptionConfigsValues": [],
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21"
                          },
                          "code": "w9z584ruw6",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:58Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:58Z",
                          "activeFrom": "2025-05-21T12:42:58Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "seriesName": "Coupon Series for UAT May Sant",
                          "redeemed": false,
                          "trimmedCode": "w9z584ruw6"
                        },
                        {
                          "id": 1298282415,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "entityLevelRedemptionConfigsValues": [],
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21"
                          },
                          "code": "7bu2joyzzr",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:51Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:51Z",
                          "activeFrom": "2025-05-21T12:42:51Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "seriesName": "Coupon Series for UAT May Sant",
                          "redeemed": false,
                          "trimmedCode": "7bu2joyzzr"
                        }
                      ],
                      "warnings": [],
                      "errors": [],
                      "success": true
                    }
                  },
                  "Sample response Get detailed customer coupon data": {
                    "summary": "Sample response Get detailed customer coupon data",
                    "value": {
                      "entity": [
                        {
                          "id": 1298282420,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "QZX30JQLIC",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:43:01Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:43:01Z",
                          "activeFrom": "2025-05-21T12:43:01Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "trimmedCode": "QZX30JQLIC",
                          "redeemed": false,
                          "seriesName": "Coupon Series for UAT May Sant"
                        },
                        {
                          "id": 1298282419,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "GIJSGIZA3P",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:59Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:59Z",
                          "activeFrom": "2025-05-21T12:42:59Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "trimmedCode": "GIJSGIZA3P",
                          "redeemed": false,
                          "seriesName": "Coupon Series for UAT May Sant"
                        },
                        {
                          "id": 1298282418,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "W9Z584RUW6",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:58Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:58Z",
                          "activeFrom": "2025-05-21T12:42:58Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "trimmedCode": "W9Z584RUW6",
                          "redeemed": false,
                          "seriesName": "Coupon Series for UAT May Sant"
                        },
                        {
                          "id": 1298282415,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "7BU2JOYZZR",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:51Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "code": 700,
                              "message": "Coupon Resent"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 700,
                            "success": true,
                            "message": "Coupon Resent"
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:51Z",
                          "activeFrom": "2025-05-21T12:42:51Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "code": 200,
                              "message": "Success"
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "code": 200,
                            "success": true,
                            "message": "Success"
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "trimmedCode": "7BU2JOYZZR",
                          "redeemed": false,
                          "seriesName": "Coupon Series for UAT May Sant"
                        }
                      ],
                      "warnings": [],
                      "errors": [],
                      "success": true
                    }
                  },
                  "with coupon_code_case=UPPER": {
                    "value": {
                      "entity": [
                        {
                          "id": 1298282420,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "QZX30JQLIC",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:43:01Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "message": "Coupon Resent",
                              "code": 700
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Coupon Resent",
                            "code": 700,
                            "success": true
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:43:01Z",
                          "activeFrom": "2025-05-21T12:43:01Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "message": "Success",
                              "code": 200
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Success",
                            "code": 200,
                            "success": true
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "redeemed": false,
                          "trimmedCode": "QZX30JQLIC",
                          "seriesName": "Coupon Series for UAT May Sant"
                        },
                        {
                          "id": 1298282419,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "GIJSGIZA3P",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:59Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "message": "Coupon Resent",
                              "code": 700
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Coupon Resent",
                            "code": 700,
                            "success": true
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:59Z",
                          "activeFrom": "2025-05-21T12:42:59Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "message": "Success",
                              "code": 200
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Success",
                            "code": 200,
                            "success": true
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "redeemed": false,
                          "trimmedCode": "GIJSGIZA3P",
                          "seriesName": "Coupon Series for UAT May Sant"
                        },
                        {
                          "id": 1298282418,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "W9Z584RUW6",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:58Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "message": "Coupon Resent",
                              "code": 700
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Coupon Resent",
                            "code": 700,
                            "success": true
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:58Z",
                          "activeFrom": "2025-05-21T12:42:58Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "message": "Success",
                              "code": 200
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Success",
                            "code": 200,
                            "success": true
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "redeemed": false,
                          "trimmedCode": "W9Z584RUW6",
                          "seriesName": "Coupon Series for UAT May Sant"
                        },
                        {
                          "id": 1298282415,
                          "seriesId": 775657,
                          "series": {
                            "id": 775657,
                            "orgId": 100737,
                            "description": "Coupon Series for UAT May Sant",
                            "discountCode": "uatMaySant",
                            "validTillDate": "2025-05-29T00:00:00Z",
                            "validDaysFromCreation": 30,
                            "expiryStrategyValue": 1,
                            "maxCreate": 20,
                            "maxRedeem": 20,
                            "isTransferrable": false,
                            "anyUser": true,
                            "sameUserMultipleRedeem": true,
                            "isReferralExistingUsersAllowed": false,
                            "isMultipleUseAllowed": true,
                            "isValidationRequired": false,
                            "isValidWithDiscountedItem": true,
                            "createdBy": 75155297,
                            "numIssued": 0,
                            "numRedeemed": 0,
                            "createdOn": "2025-05-21T07:12:09Z",
                            "lastUsed": "2025-05-21T07:12:09Z",
                            "seriesCode": "0AAB21DFA86D4956BBD7",
                            "smsTemplate": "Hi  {{first_name}} {{last_name}} your voucher code {{voucher}}is valid {{valid_days_from_create}}. {{fullname}} {{offer_name}}",
                            "isSMSDisabled": false,
                            "isUpdateProductData": false,
                            "info": "UAT May Coupon Series",
                            "isMultipleVouchersPerUserAllowed": true,
                            "doNotResendExistingVoucher": true,
                            "mutualExclusiveSeriesIds": "[-1]",
                            "storeIdsJson": "[-1]",
                            "isDvsEnabled": false,
                            "dvsExpiryDate": "2025-05-21T00:00:00Z",
                            "priority": 0,
                            "shortSMSTemplate": "Hello {{cust_name}}, your voucher code is {{voucher_code}}",
                            "maxVouchersPerUser": 5,
                            "minDaysBetweenVouchers": 0,
                            "maxReferralsPerReferee": -1,
                            "discountUpto": 0,
                            "discountValue": 1000,
                            "dvsItems": "items",
                            "redemptionRange": "{\"dom\" : [-1], \"dow\": [-1], \"hours\": [-1]}",
                            "minBillAmount": 100,
                            "maxBillAmount": 20000,
                            "redeemAtStore": "[-1]",
                            "campaignId": -1,
                            "tag": "Coupon Series for UAT May Sant",
                            "maxRedemptionsInSeriesPerUser": 4,
                            "minDaysBetweenRedemption": 0,
                            "redemptionValidFrom": "2025-04-26T00:00:00Z",
                            "sourceOrgId": -1,
                            "issueToLoyalty": false,
                            "redeemStoreType": "redeemable_stores",
                            "offlineRedeemType": false,
                            "isOldFlowEnabled": false,
                            "isPreRedeemEventRequired": false,
                            "brands": [],
                            "products": [],
                            "categories": [],
                            "termsAndConditions": "T&C",
                            "signalRedemptionEvent": false,
                            "syncToClient": false,
                            "showPinCode": false,
                            "redemptionPerCouponMaxLimit": -1,
                            "validRedemptionOrgEntityDetails": {
                              "concepts": [],
                              "zones": [],
                              "stores": [],
                              "tills": []
                            },
                            "seriesType": "UNDEFINED",
                            "clientHandlingType": "DISC_CODE",
                            "expiryStrategyType": "SERIES_EXPIRY",
                            "discountOn": "BILL",
                            "discountType": "ABS",
                            "updateProductData": false,
                            "validTilldateFormat": "2025-05-29",
                            "redemptionValidFromFormat": "2025-04-26",
                            "dvsExpiryDateFormat": "2025-05-21",
                            "entityLevelRedemptionConfigsValues": []
                          },
                          "code": "7BU2JOYZZR",
                          "description": "Coupon Series for UAT May Sant",
                          "createdDate": "2025-05-21T12:42:51Z",
                          "validTill": "2025-05-29T23:59:59Z",
                          "isRedeemed": false,
                          "issuedTo": 565032176,
                          "issuedBy": 75155297,
                          "orgId": 100737,
                          "refId": 0,
                          "issuedAt": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "adminType": "GENERAL",
                            "isOrgUnit": false
                          },
                          "status": {
                            "statusCode": {
                              "status": true,
                              "message": "Coupon Resent",
                              "code": 700
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Coupon Resent",
                            "code": 700,
                            "success": true
                          },
                          "couponDiscountType": "ABS",
                          "issuedOn": "2025-05-21T12:42:51Z",
                          "activeFrom": "2025-05-21T12:42:51Z",
                          "redemptionsLeft": 4,
                          "couponStatus": {
                            "statusCode": {
                              "status": true,
                              "message": "Success",
                              "code": 200
                            },
                            "warnings": [],
                            "warningsAsStatusCode": [],
                            "message": "Success",
                            "code": 200,
                            "success": true
                          },
                          "redemptionInfo": [],
                          "reversedRedemptionInfo": [],
                          "discountType": true,
                          "discountValue": 1000,
                          "discountValueAsDouble": 1000,
                          "discountUpto": 0,
                          "redeemed": false,
                          "trimmedCode": "7BU2JOYZZR",
                          "seriesName": "Coupon Series for UAT May Sant"
                        }
                      ],
                      "warnings": [],
                      "errors": [],
                      "success": true
                    },
                    "summary": "with coupon_code_case=UPPER"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Sample Response",
                      "type": "object",
                      "properties": {
                        "entity": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 33267197,
                                "default": 0
                              },
                              "seriesId": {
                                "type": "integer",
                                "example": 14162,
                                "default": 0
                              },
                              "series": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 14162,
                                    "default": 0
                                  },
                                  "orgId": {
                                    "type": "integer",
                                    "example": 50074,
                                    "default": 0
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "Mobile Push offer 1"
                                  },
                                  "discountCode": {
                                    "type": "string",
                                    "example": "MobilePush"
                                  },
                                  "validTillDate": {
                                    "type": "string",
                                    "example": "2118-09-10T16:09:02+05:30"
                                  },
                                  "validDaysFromCreation": {
                                    "type": "integer",
                                    "example": 30,
                                    "default": 0
                                  },
                                  "expiryStrategyValue": {
                                    "type": "integer",
                                    "example": 200,
                                    "default": 0
                                  },
                                  "maxCreate": {
                                    "type": "integer",
                                    "example": 1000,
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
                                    "default": ""
                                  },
                                  "anyUser": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "sameUserMultipleRedeem": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isReferralExistingUsersAllowed": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isMultipleUseAllowed": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isValidationRequired": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isValidWithDiscountedItem": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "createdBy": {
                                    "type": "integer",
                                    "example": 4,
                                    "default": 0
                                  },
                                  "numIssued": {
                                    "type": "integer",
                                    "example": 78,
                                    "default": 0
                                  },
                                  "numRedeemed": {
                                    "type": "integer",
                                    "example": 6,
                                    "default": 0
                                  },
                                  "createdOn": {
                                    "type": "string",
                                    "example": "2018-09-10T14:45:06+05:30"
                                  },
                                  "lastUsed": {
                                    "type": "string",
                                    "example": "2019-10-31T16:47:39+05:30"
                                  },
                                  "seriesCode": {
                                    "type": "string",
                                    "example": "GM0V3HXC"
                                  },
                                  "smsTemplate": {
                                    "type": "string",
                                    "example": "{{full_name}} Your Coupon code {{voucher}} Expires on {{valid_days_from_create}} {{optout}}"
                                  },
                                  "isSMSDisabled": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isUpdateProductData": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "info": {
                                    "type": "string",
                                    "example": "Mobile Push offer 1"
                                  },
                                  "isMultipleVouchersPerUserAllowed": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": ""
                                  },
                                  "doNotResendExistingVoucher": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": ""
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
                                    "default": ""
                                  },
                                  "dvsExpiryDate": {
                                    "type": "string",
                                    "example": "2019-11-30T00:00:00+05:30"
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
                                    "example": 10,
                                    "default": 0
                                  },
                                  "dvsItems": {
                                    "type": "string",
                                    "example": "false"
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
                                    "example": "Mobile Push offer 1"
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
                                    "example": "1970-01-01T05:30:00+05:30"
                                  },
                                  "sourceOrgId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  },
                                  "issueToLoyalty": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "redeemStoreType": {
                                    "type": "string",
                                    "example": "redeemable_stores"
                                  },
                                  "offlineRedeemType": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isOldFlowEnabled": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isPreRedeemEventRequired": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "brands": {
                                    "type": "array"
                                  },
                                  "products": {
                                    "type": "array"
                                  },
                                  "categories": {
                                    "type": "array"
                                  },
                                  "termsAndConditions": {
                                    "type": "string",
                                    "example": "T&C apply"
                                  },
                                  "signalRedemptionEvent": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": ""
                                  },
                                  "syncToClient": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "showPinCode": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "validRedemptionOrgEntityDetails": {
                                    "type": "object",
                                    "properties": {
                                      "concepts": {
                                        "type": "array"
                                      },
                                      "zones": {
                                        "type": "array"
                                      },
                                      "stores": {
                                        "type": "array"
                                      },
                                      "tills": {
                                        "type": "array"
                                      }
                                    }
                                  },
                                  "seriesType": {
                                    "type": "string",
                                    "example": "LOYALTY"
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
                                    "example": "PERC"
                                  },
                                  "dvsExpiryDateFormat": {
                                    "type": "string",
                                    "example": "2019-11-30"
                                  },
                                  "updateProductData": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "validTilldateFormat": {
                                    "type": "string",
                                    "example": "2118-09-10"
                                  },
                                  "redemptionValidFromFormat": {
                                    "type": "string",
                                    "example": "1970-01-01"
                                  }
                                }
                              },
                              "code": {
                                "type": "string",
                                "example": "ER07BCJ8"
                              },
                              "description": {
                                "type": "string",
                                "example": "Mobile Push offer 1"
                              },
                              "createdDate": {
                                "type": "string",
                                "example": "2019-10-31T17:15:02+05:30"
                              },
                              "validTill": {
                                "type": "string",
                                "example": "2020-05-18T23:59:59+05:30"
                              },
                              "isRedeemed": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "issuedTo": {
                                "type": "integer",
                                "example": 343040815,
                                "default": 0
                              },
                              "issuedBy": {
                                "type": "integer",
                                "example": 50006796,
                                "default": 0
                              },
                              "orgId": {
                                "type": "integer",
                                "example": 50074,
                                "default": 0
                              },
                              "refId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "issuedAt": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 50006795,
                                    "default": 0
                                  },
                                  "code": {
                                    "type": "string",
                                    "example": "storecode"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "webenagestore"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "webstore1"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "STORE"
                                  },
                                  "adminType": {
                                    "type": "string",
                                    "example": "GENERAL"
                                  },
                                  "isOrgUnit": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "status": {
                                "type": "object",
                                "properties": {
                                  "statusCode": {
                                    "type": "object",
                                    "properties": {
                                      "status": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "code": {
                                        "type": "integer",
                                        "example": 700,
                                        "default": 0
                                      },
                                      "message": {
                                        "type": "string",
                                        "example": "Coupon Resent"
                                      }
                                    }
                                  },
                                  "warnings": {
                                    "type": "array"
                                  },
                                  "warningsAsStatusCode": {
                                    "type": "array"
                                  },
                                  "code": {
                                    "type": "integer",
                                    "example": 700,
                                    "default": 0
                                  },
                                  "success": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Coupon Resent"
                                  }
                                }
                              },
                              "couponDiscountType": {
                                "type": "string",
                                "example": "PERC"
                              },
                              "issuedOn": {
                                "type": "string",
                                "example": "2019-10-31T17:15:02+05:30"
                              },
                              "activeFrom": {
                                "type": "string",
                                "example": "2019-10-31T00:00:00+05:30"
                              },
                              "redemptionsLeft": {
                                "type": "integer",
                                "example": -1,
                                "default": 0
                              },
                              "couponStatus": {
                                "type": "object",
                                "properties": {
                                  "statusCode": {
                                    "type": "object",
                                    "properties": {
                                      "status": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
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
                                  "warnings": {
                                    "type": "array"
                                  },
                                  "warningsAsStatusCode": {
                                    "type": "array"
                                  },
                                  "code": {
                                    "type": "integer",
                                    "example": 200,
                                    "default": 0
                                  },
                                  "success": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Success"
                                  }
                                }
                              },
                              "redemptionInfo": {
                                "type": "array"
                              },
                              "discountType": {
                                "type": "boolean",
                                "example": false,
                                "default": true
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
                              "redeemed": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "seriesName": {
                                "type": "string",
                                "example": "Mobile Push offer 1"
                              },
                              "trimmedCode": {
                                "type": "string",
                                "example": "ER07BCJ8"
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
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 39004111,
                                "default": 0
                              },
                              "seriesId": {
                                "type": "integer",
                                "example": 68579,
                                "default": 0
                              },
                              "series": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 68579,
                                    "default": 0
                                  },
                                  "orgId": {
                                    "type": "integer",
                                    "example": 50339,
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
                                  "validTillDate": {
                                    "type": "string",
                                    "example": "2024-10-31T00:00:00Z"
                                  },
                                  "validDaysFromCreation": {
                                    "type": "integer",
                                    "example": 30,
                                    "default": 0
                                  },
                                  "expiryStrategyValue": {
                                    "type": "integer",
                                    "example": 1,
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
                                    "default": ""
                                  },
                                  "anyUser": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "sameUserMultipleRedeem": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isReferralExistingUsersAllowed": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isMultipleUseAllowed": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isValidationRequired": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isValidWithDiscountedItem": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "createdBy": {
                                    "type": "integer",
                                    "example": 4,
                                    "default": 0
                                  },
                                  "numIssued": {
                                    "type": "integer",
                                    "example": 6,
                                    "default": 0
                                  },
                                  "numRedeemed": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "createdOn": {
                                    "type": "string",
                                    "example": "2024-10-10T05:06:25Z"
                                  },
                                  "lastUsed": {
                                    "type": "string",
                                    "example": "2024-10-10T05:06:25Z"
                                  },
                                  "seriesCode": {
                                    "type": "string",
                                    "example": "WIYHXBMY"
                                  },
                                  "smsTemplate": {
                                    "type": "string",
                                    "example": "TEST_AUTO"
                                  },
                                  "isSMSDisabled": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isUpdateProductData": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "info": {
                                    "type": "string",
                                    "example": "test-lekhana-2"
                                  },
                                  "isMultipleVouchersPerUserAllowed": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": ""
                                  },
                                  "doNotResendExistingVoucher": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": ""
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
                                    "default": ""
                                  },
                                  "dvsExpiryDate": {
                                    "type": "string",
                                    "example": "2024-11-09T00:00:00Z"
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
                                    "example": 10,
                                    "default": 0
                                  },
                                  "dvsItems": {
                                    "type": "string",
                                    "example": "false"
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
                                    "example": "test-lekhana-2"
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
                                    "default": ""
                                  },
                                  "redeemStoreType": {
                                    "type": "string",
                                    "example": "redeemable_stores"
                                  },
                                  "offlineRedeemType": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isOldFlowEnabled": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "isPreRedeemEventRequired": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "brands": {
                                    "type": "array"
                                  },
                                  "products": {
                                    "type": "array"
                                  },
                                  "categories": {
                                    "type": "array"
                                  },
                                  "termsAndConditions": {
                                    "type": "string",
                                    "example": "T&C apply"
                                  },
                                  "signalRedemptionEvent": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": ""
                                  },
                                  "syncToClient": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "showPinCode": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  },
                                  "validRedemptionOrgEntityDetails": {
                                    "type": "object",
                                    "properties": {
                                      "concepts": {
                                        "type": "array"
                                      },
                                      "zones": {
                                        "type": "array"
                                      },
                                      "stores": {
                                        "type": "array"
                                      },
                                      "tills": {
                                        "type": "array"
                                      }
                                    }
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
                                    "example": "SERIES_EXPIRY"
                                  },
                                  "discountOn": {
                                    "type": "string",
                                    "example": "BILL"
                                  },
                                  "discountType": {
                                    "type": "string",
                                    "example": "ABS"
                                  },
                                  "entityLevelRedemptionConfigsValues": {
                                    "type": "array"
                                  },
                                  "validTilldateFormat": {
                                    "type": "string",
                                    "example": "2024-10-31"
                                  },
                                  "redemptionValidFromFormat": {
                                    "type": "string",
                                    "example": "1970-01-01"
                                  },
                                  "dvsExpiryDateFormat": {
                                    "type": "string",
                                    "example": "2024-11-09"
                                  },
                                  "updateProductData": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": ""
                                  }
                                }
                              },
                              "code": {
                                "type": "string",
                                "example": "tt6wzp7xnw"
                              },
                              "description": {
                                "type": "string",
                                "example": "test-lekhana-2"
                              },
                              "createdDate": {
                                "type": "string",
                                "example": "2024-10-11T13:18:03Z"
                              },
                              "validTill": {
                                "type": "string",
                                "example": "2024-10-31T23:59:59Z"
                              },
                              "isRedeemed": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "issuedTo": {
                                "type": "integer",
                                "example": 345635529,
                                "default": 0
                              },
                              "issuedBy": {
                                "type": "integer",
                                "example": 50143661,
                                "default": 0
                              },
                              "orgId": {
                                "type": "integer",
                                "example": 50339,
                                "default": 0
                              },
                              "refId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "issuedAt": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 50143656,
                                    "default": 0
                                  },
                                  "code": {
                                    "type": "string",
                                    "example": "store123"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "MarvelAuto_Store_For_Automation"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "MarvelAuto_Store"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "STORE"
                                  },
                                  "adminType": {
                                    "type": "string",
                                    "example": "GENERAL"
                                  },
                                  "isOrgUnit": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "status": {
                                "type": "object",
                                "properties": {
                                  "statusCode": {
                                    "type": "object",
                                    "properties": {
                                      "status": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "message": {
                                        "type": "string",
                                        "example": "Coupon Resent"
                                      },
                                      "code": {
                                        "type": "integer",
                                        "example": 700,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "warnings": {
                                    "type": "array"
                                  },
                                  "warningsAsStatusCode": {
                                    "type": "array"
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Coupon Resent"
                                  },
                                  "code": {
                                    "type": "integer",
                                    "example": 700,
                                    "default": 0
                                  },
                                  "success": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  }
                                }
                              },
                              "couponDiscountType": {
                                "type": "string",
                                "example": "ABS"
                              },
                              "issuedOn": {
                                "type": "string",
                                "example": "2024-10-11T13:18:03Z"
                              },
                              "activeFrom": {
                                "type": "string",
                                "example": "2024-10-11T13:18:03Z"
                              },
                              "redemptionsLeft": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "couponStatus": {
                                "type": "object",
                                "properties": {
                                  "statusCode": {
                                    "type": "object",
                                    "properties": {
                                      "status": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "message": {
                                        "type": "string",
                                        "example": "Success"
                                      },
                                      "code": {
                                        "type": "integer",
                                        "example": 200,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "warnings": {
                                    "type": "array"
                                  },
                                  "warningsAsStatusCode": {
                                    "type": "array"
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Success"
                                  },
                                  "code": {
                                    "type": "integer",
                                    "example": 200,
                                    "default": 0
                                  },
                                  "success": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  }
                                }
                              },
                              "redemptionInfo": {
                                "type": "array"
                              },
                              "reversedRedemptionInfo": {
                                "type": "array"
                              },
                              "discountType": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "discountValue": {
                                "type": "integer",
                                "example": 10,
                                "default": 0
                              },
                              "discountValueAsDouble": {
                                "type": "integer",
                                "example": 10,
                                "default": 0
                              },
                              "discountUpto": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "trimmedCode": {
                                "type": "string",
                                "example": "tt6wzp7xnw"
                              },
                              "redeemed": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "seriesName": {
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565032176/coupons' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic c2FudC5wXzEyMzpiMwM2FlNw==' \\\n--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=m2yUAqOA0jRHLfltVaqsrBoJp6yyOUuCAyw4QyAJ0uw-1751016550935-0.0.1.1-604800000'",
              "name": "Sample request with coupon code case = UPPER"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565032176/coupons' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic =' \\\n--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=P1v.oAjtqBQvJ2.EXipQJ6uHW4JuFFe.H0bflyFcoPQ-1757327323020-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request Get detailed customer coupon data"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565032176/coupons?coupon_code_case=LOWER' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFkaHVfcmltI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=tpKykcaB8j092CRnB66wUikOsgeMsTbQIAona20jx1M-1728643546352-0.0.1.1-604800000; _cfuvid=m2yUAqOA0jRHLfltVaqsrBoJp6yyOUuCAyw4QyAJ0uw-1751016550935-0.0.1.1-604800000; _cfuvid=0kQrpjpRENfbHxG7FvzG_TDkfolqNDWNKeavqAqBJ_E-1758714752743-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request with coupon code case = LOWER"
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