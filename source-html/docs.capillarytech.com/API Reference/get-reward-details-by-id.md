> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get reward details by ID

This API retrieves a reward’s details using the reward ID.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/488443/brand/61' \
--header 'Authorization: Basic bWFkaHVjU2YQ==' \
--header 'Cookie: _cfuvid=j9A8Ne5yK28__G6y3AO.PC0FO2nL2Nxa6njgXshLg08-1745825668814-0.0.1.1-604800000; _cfuvid=Bt3knKvTi5qr4tLz.8c.OaIfgPwkuJF5o.pmTZJLci8-1763381177435-0.0.1.1-604800000'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# API Specification

|                        |                                                                  |
| :--------------------- | :--------------------------------------------------------------- |
| URI                    | `/api_gateway/rewards/core/v1/reward/{RewardId}/brand/{BrandId}` |
| HTTP Method            | GET                                                              |
| Pagination             | No                                                               |
| Batch support          | No                                                               |
| Rate limit information | None                                                             |

# Request path parameters

| Parameter Name | Data Type | Description                                                                                                                                |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| rewardId       | String    | Unique identifier of the reward. Excluding the reward ID retrieves information of all rewards for the brand.                               |
| brandId\*      | Long      | You can use the [API](https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/brand/getAll)  and retrieve the brand ID of your brand. |

# Example response

```json Sample response
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 488443,
        "type": "VOUCHER",
        "startDate": "2025-09-16 05:15:00",
        "startDateTime": "2025-09-16T05:15:00Z",
        "endDate": "2025-10-01 06:00:00",
        "endDateTime": "2025-10-01T06:00:00Z",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": "844312",
        "tier": null,
        "group": null,
        "tillId": null,
        "status": "ENDED",
        "programId": null,
        "label": null,
        "redemptionType": "INTOUCH_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [
            486
        ],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 488443,
                "languageCode": "en",
                "name": "UAT Reward 11",
                "description": "Test Reward for UAT Team",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RCtest": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentfrench": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge4": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentenglish": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "Golden2reward": {
                        "content": "20% Discount Applied",
                        "isEnabled": true
                    },
                    "UAT_RCT_1": {
                        "content": "Rich Content Text for UAT",
                        "isEnabled": true
                    }
                }
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": [
            {
                "paymentMode": "POINTS",
                "id": 12616,
                "points": 100.0000
            }
        ],
        "segment": [],
        "cardSeries": null,
        "labels": null,
        "createdBy": 75197372,
        "lastUpdatedBy": 75197372
    }
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
        status
      </td>

      <td>
        Object
      </td>

      <td>
        Indicates the status of the request.
      </td>
    </tr>

    <tr>
      <td>
        .success
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the request was successful.
      </td>
    </tr>

    <tr>
      <td>
        .code
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies a numerical code indicating the status of the request.
      </td>
    </tr>

    <tr>
      <td>
        .message
      </td>

      <td>
        String
      </td>

      <td>
        Defines a human-readable message describing the status.
      </td>
    </tr>

    <tr>
      <td>
        reward
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the reward details.
      </td>
    </tr>

    <tr>
      <td>
        .id
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the unique identifier for the reward.
      </td>
    </tr>

    <tr>
      <td>
        .type
      </td>

      <td>
        String
      </td>

      <td>
        Defines the type of the reward.
      </td>
    </tr>

    <tr>
      <td>
        .startDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the start date of the reward. This field returns the date in `yyyy-MM-dd HH:mm:ss` format and does not include a timezone offset.
      </td>
    </tr>

    <tr>
      <td>
        .startDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the start date and time of the reward in ISO 8601 format. Note: This field returns a fixed `Z` suffix and does not reflect the server or UTC timezone.
      </td>
    </tr>

    <tr>
      <td>
        .endDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the end date of the reward. This field returns the date in `yyyy-MM-dd HH:mm:ss` format and does not include a timezone offset.
      </td>
    </tr>

    <tr>
      <td>
        .endDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the end date and time of the reward in ISO 8601 format. Note: This field returns a fixed `Z` suffix and does not reflect the server or UTC timezone.
      </td>
    </tr>

    <tr>
      <td>
        .enabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the reward is enabled.
      </td>
    </tr>

    <tr>
      <td>
        .priority
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the priority of the reward.
      </td>
    </tr>

    <tr>
      <td>
        .intouchPoints
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies points associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        .intouchSeriesId
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the InTouch series ID.
      </td>
    </tr>

    <tr>
      <td>
        .tier
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the tier of the reward.
      </td>
    </tr>

    <tr>
      <td>
        .group
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the group of the reward.
      </td>
    </tr>

    <tr>
      <td>
        .tillId
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the till ID.
      </td>
    </tr>

    <tr>
      <td>
        .status
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the status of the reward.
      </td>
    </tr>

    <tr>
      <td>
        .programId
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the program ID.
      </td>
    </tr>

    <tr>
      <td>
        .label
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the label of the reward.
      </td>
    </tr>

    <tr>
      <td>
        .redemptionType
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the redemption type. Possible values:
        `INTOUCH_REWARD`, `VENDOR_INTOUCH_REWARD`,
        `VENDOR_ONLY_REWARD`, `CART_PROMOTION`, `MILES`, `CASH_WALLET`, `CASH_BACK`, `CARD_DISC`, `CHARITY`, `GAMES`, `VOUCHER`, `SWEEPSTAKES`, `AUCTION`, `GIFT_CARD`, `PHYSICAL_REWARD`, `GIFT_VOUCHER`
      </td>
    </tr>

    <tr>
      <td>
        .vendorId
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the vendor ID.
      </td>
    </tr>

    <tr>
      <td>
        .vendorRedemption
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies vendor redemption details.
      </td>
    </tr>

    <tr>
      <td>
        .communications
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies communication details.
      </td>
    </tr>

    <tr>
      <td>
        .categories
      </td>

      <td>
        Array
      </td>

      <td>
        Specifies a list of categories associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        .geography
      </td>

      <td>
        Object
      </td>

      <td>
        Defines geographical restrictions.
      </td>
    </tr>

    <tr>
      <td>
        .languageSpecificInfo
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Specifies a list of language-specific information for the reward.
      </td>
    </tr>

    <tr>
      <td>
        ..rewardId
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the ID of the reward.
      </td>
    </tr>

    <tr>
      <td>
        ..languageCode
      </td>

      <td>
        String
      </td>

      <td>
        Defines the language code.
      </td>
    </tr>

    <tr>
      <td>
        ..name
      </td>

      <td>
        String
      </td>

      <td>
        Defines the name of the reward in the specified language.
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
        Provides the description of the reward in the specified language.
      </td>
    </tr>

    <tr>
      <td>
        ..termNConditionsId
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the ID of the terms and conditions.
      </td>
    </tr>

    <tr>
      <td>
        ..termNConditionsUrl
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies the URL for terms and conditions.
      </td>
    </tr>

    <tr>
      <td>
        ..imageId
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the image ID.
      </td>
    </tr>

    <tr>
      <td>
        ..imageUrl
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies the URL of the image.
      </td>
    </tr>

    <tr>
      <td>
        ..thumbnailId
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the thumbnail ID.
      </td>
    </tr>

    <tr>
      <td>
        ..thumbnailUrl
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies the URL of the thumbnail.
      </td>
    </tr>

    <tr>
      <td>
        ..enabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the language-specific information is enabled.
      </td>
    </tr>

    <tr>
      <td>
        ..images
      </td>

      <td>
        Array
      </td>

      <td>
        Specifies a list of images.
      </td>
    </tr>

    <tr>
      <td>
        ..videos
      </td>

      <td>
        Array
      </td>

      <td>
        Specifies a list of videos.
      </td>
    </tr>

    <tr>
      <td>
        ..customFields
      </td>

      <td>
        Object
      </td>

      <td>
        Defines custom fields for language-specific information.
      </td>
    </tr>

    <tr>
      <td>
        ..richContentRO
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies the rich text content information for the particular reward.
      </td>
    </tr>

    <tr>
      <td>
        ...[key_name]
      </td>

      <td>
        Object
      </td>

      <td>
        Represents dynamic keys for rich content entries. Example keys: `RCtest`, `RC345`, `RCtestgeorgetrue`, etc.
      </td>
    </tr>

    <tr>
      <td>
        ....content
      </td>

      <td>
        String
      </td>

      <td>
        Defines the content of the rich text. Possible values: `"en"`, `"this is the default value"`, `"20% Discount Applied"`, `"Rich Text Content for UAT(is displayed when enabled is marked as false)"`.
      </td>
    </tr>

    <tr>
      <td>
        ....isEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the rich content is enabled. Possible values: `true`.
      </td>
    </tr>

    <tr>
      <td>
        .customFields
      </td>

      <td>
        Object
      </td>

      <td>
        Defines custom fields for the reward.
      </td>
    </tr>

    <tr>
      <td>
        .owners
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies owners of the reward. Possible values: `null`.
      </td>
    </tr>

    <tr>
      <td>
        .supplementaryCriteriaRO
      </td>

      <td>
        Array
      </td>

      <td>
        Specifies supplementary criteria for the reward.
      </td>
    </tr>

    <tr>
      <td>
        ..loyaltyProgramId
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the ID of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        ..loyaltyProgramId
      </td>

      <td>
        Array of Strings
      </td>

      <td>
        Defines a list of tier IDs associated with the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        ..partnerProgramIds
      </td>

      <td>
        Array of Strings
      </td>

      <td>
        Defines a list of partner program IDs associated with the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        .groups
      </td>

      <td>
        Array
      </td>

      <td>
        Specifies groups associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        ..groupName
      </td>

      <td>
        String
      </td>

      <td>
        Defines the rank of the group.
      </td>
    </tr>

    <tr>
      <td>
        ..groupRank
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the name of the group.
      </td>
    </tr>

    <tr>
      <td>
        .rewardRank
      </td>

      <td>
        Object
      </td>

      <td>
        Defines the rank of the reward. Possible values: `null`.
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
        Contains various restrictions for the reward.
      </td>
    </tr>

    <tr>
      <td>
        ..customerLevel
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Specifies a list of restrictions applied at the customer level.
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
        Specifies the unique identifier for the customer-level restriction. Possible values: `37823`, `37824`.
      </td>
    </tr>

    <tr>
      <td>
        ...repeatFrequencyType
      </td>

      <td>
        String
      </td>

      <td>
        Defines the type of frequency for repeating the restriction. Possible values: `"DAYS"`, `"MONTHS"`.
      </td>
    </tr>

    <tr>
      <td>
        ...limit
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the limit for the restriction. Possible values: `2`, `6`.
      </td>
    </tr>

    <tr>
      <td>
        ...interval
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the interval for the restriction. Possible values: `2` (can be null).
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
        Defines the Key Performance Indicator for the restriction. Possible values: `"QUANTITY"`.
      </td>
    </tr>

    <tr>
      <td>
        ...windowType
      </td>

      <td>
        String
      </td>

      <td>
        Defines the type of window for the restriction. Possible values: `"FIXED"`.
      </td>
    </tr>

    <tr>
      <td>
        ...startOfCycle
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the start of the cycle in ISO 8601 format. Possible values: `"2025-06-24T13:00:00Z"`.
      </td>
    </tr>

    <tr>
      <td>
        ...createdOn
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the timestamp of creation. Possible values: `1751266773000`.
      </td>
    </tr>

    <tr>
      <td>
        ...updatedOn
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the timestamp of last update. Possible values: `1751266773000`.
      </td>
    </tr>

    <tr>
      <td>
        ...createdBy
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the ID of the user who created the restriction. Possible values: `75161973`.
      </td>
    </tr>

    <tr>
      <td>
        ...updatedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the ID of the user who last updated the restriction. Possible values: `75161973`.
      </td>
    </tr>

    <tr>
      <td>
        ...createdOnDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the creation date and time in ISO 8601 format. Possible values: `"2025-06-30T06:59:33Z"`. Note: This field returns a fixed `Z` suffix and does not reflect the server or UTC timezone.
      </td>
    </tr>

    <tr>
      <td>
        ...updatedOnDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the last updated date and time in ISO 8601 format. Possible values: `"2025-06-30T06:59:33Z"`. Note: This field returns a fixed `Z` suffix and does not reflect the server or UTC timezone.
      </td>
    </tr>

    <tr>
      <td>
        ..rewardLevel
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Specifies a list of restrictions applied at the reward level.
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
        Specifies the unique identifier for the reward-level restriction. Possible values: `37822`.
      </td>
    </tr>

    <tr>
      <td>
        ...repeatFrequencyType
      </td>

      <td>
        String
      </td>

      <td>
        Defines the type of frequency for repeating the restriction.
      </td>
    </tr>

    <tr>
      <td>
        ...limit
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the limit for the restriction.
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
        Defines the Key Performance Indicator for the restriction.
      </td>
    </tr>

    <tr>
      <td>
        ...windowType
      </td>

      <td>
        String
      </td>

      <td>
        Defines the type of window for the restriction. Possible values: `"FIXED"`, `ROLLING`
      </td>
    </tr>

    <tr>
      <td>
        ...weekStartDay
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the starting day of the week for the restriction. Eg. `"TUESDAY"`.
      </td>
    </tr>

    <tr>
      <td>
        ...createdOn
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the timestamp of creation. Possible values: `1751266773000`.
      </td>
    </tr>

    <tr>
      <td>
        ...updatedOn
      </td>

      <td>
        Long
      </td>

      <td>
        Specifies the timestamp of last update. Possible values: `1751266773000`.
      </td>
    </tr>

    <tr>
      <td>
        ...createdBy
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the ID of the user who created the restriction. Possible values: `75161973`.
      </td>
    </tr>

    <tr>
      <td>
        ...updatedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the ID of the user who last updated the restriction. Possible values: `75161973`.
      </td>
    </tr>

    <tr>
      <td>
        ...createdOnDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the creation date and time in ISO 8601 format. Possible values: `"2025-06-30T06:59:33Z"`. Note: This field returns a fixed `Z` suffix and does not reflect the server or UTC timezone.
      </td>
    </tr>

    <tr>
      <td>
        ...updatedOnDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the last updated date and time in ISO 8601 format. Possible values: `"2025-06-30T06:59:33Z"`. Note: This field returns a fixed `Z` suffix and does not reflect the server or UTC timezone.
      </td>
    </tr>

    <tr>
      <td>
        .rewardRevenueMeta
      </td>

      <td>
        Array
      </td>

      <td>
        Defines a list of revenue metadata configurations for the reward.
      </td>
    </tr>

    <tr>
      <td>
        ..commissionParticipant
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the entity receiving the commission. Possible values: "BRAND", "CAPILLARY", "AFFILIATE", "END_CUSTOMER".
      </td>
    </tr>

    <tr>
      <td>
        ..commissionRate
      </td>

      <td>
        String
      </td>

      <td>
        Defines the commission rate as a decimal number.
      </td>
    </tr>

    <tr>
      <td>
        ..cycleStartDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the start date of the commission cycle in ISO 8601 format. Possible values: e.g., "2024-11-07T17:04:30.000Z".
      </td>
    </tr>

    <tr>
      <td>
        ..cycleEndDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the end date of the commission cycle in ISO 8601 format. Possible values: e.g., "2025-10-06T07:43:30.000Z".
      </td>
    </tr>

    <tr>
      <td>
        .rewardRevenueDefaults
      </td>

      <td>
        Array
      </td>

      <td>
        Defines reward revenue defaults.
      </td>
    </tr>

    <tr>
      <td>
        ..commissionParticipant
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the participant for the commission. Possible values: "BRAND", "CAPILLARY", "AFFILIATE", "END_CUSTOMER".
      </td>
    </tr>

    <tr>
      <td>
        ..defaultValue
      </td>

      <td>
        Number
      </td>

      <td>
        Defines the default commission value. This is a decimal number, often representing a percentage.
      </td>
    </tr>

    <tr>
      <td>
        .paymentConfigs
      </td>

      <td>
        Object
      </td>

      <td>
        Specifies payment configurations.
      </td>
    </tr>

    <tr>
      <td>
        ..paymentMode
      </td>

      <td>
        String
      </td>

      <td>
        Defines the mode of payment. Possible values: "CASH", "CONV_RATIO".
      </td>
    </tr>

    <tr>
      <td>
        ..id
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the unique identifier for the payment configuration.
      </td>
    </tr>

    <tr>
      <td>
        ..cash
      </td>

      <td>
        Number
      </td>

      <td>
        Indicates the cash amount for the payment mode.
      </td>
    </tr>

    <tr>
      <td>
        ..conversionRatio
      </td>

      <td>
        Number
      </td>

      <td>
        Defines the conversion ratio for the payment mode.
      </td>
    </tr>

    <tr>
      <td>
        .segment
      </td>

      <td>
        Array
      </td>

      <td>
        Defines the reward segment.
      </td>
    </tr>

    <tr>
      <td>
        ..segmentId
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the unique identifier for the segment.
      </td>
    </tr>

    <tr>
      <td>
        ..partitionId
      </td>

      <td>
        Array of Strings
      </td>

      <td>
        Defines a list of partition IDs associated with the segment.
      </td>
    </tr>

    <tr>
      <td>
        .cardSeries
      </td>

      <td>
        Object
      </td>

      <td>
        Indicates the card series details.
      </td>
    </tr>

    <tr>
      <td>
        .labels
      </td>

      <td>
        Object
      </td>

      <td>
        Defines labels associated with the reward.
      </td>
    </tr>

    <tr>
      <td>
        .createdBy
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the system generated ID of the user who created the reward.
      </td>
    </tr>

    <tr>
      <td>
        .lastUpdatedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the system generated ID of the user who last updated the reward.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 401279,
        "type": "FREE_VOUCHER",
        "startDate": "2025-03-18 07:46:55",
        "startDateTime": "2025-03-18T07:46:55Z",
        "endDate": "2025-10-04 07:46:55",
        "endDateTime": "2025-10-04T07:46:55Z",
        "enabled": true,
        "priority": null,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": null,
        "group": null,
        "tillId": null,
        "status": "LIVE",
        "programId": null,
        "label": null,
        "redemptionType": "AUCTION",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 401279,
                "languageCode": "en",
                "name": "english rewardName",
                "description": "hello",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RCtest": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentfrench": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge4": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentenglish": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "Golden2reward": {
                        "content": "20% Discount Applied",
                        "isEnabled": true
                    },
                    "UAT_RCT_1": {
                        "content": "Rich Text Content for UAT(is displayed when enabled is marked as false)",
                        "isEnabled": true
                    }
                }
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": {
            "customerLevel": [
                {
                    "id": 37823,
                    "repeatFrequencyType": "DAYS",
                    "limit": 2,
                    "interval": 2,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "startOfCycle": "2025-06-24T13:00:00Z",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                },
                {
                    "id": 37824,
                    "repeatFrequencyType": "MONTHS",
                    "limit": 6,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                }
            ],
            "rewardLevel": [
                {
                    "id": 37822,
                    "repeatFrequencyType": "WEEKS",
                    "limit": 2,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "weekStartDay": "TUESDAY",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                }
            ]
        },
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cardSeries": null,
        "labels": null,
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973
    }
}
```
```json With Segment and Partition ID
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 275829,
        "type": "FREE_VOUCHER",
        "startDate": "2024-12-03 05:14:26",
        "endDate": "2027-01-15 07:26:45",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 1,
        "intouchSeriesId": "6602d0937ea62412eec7b38d",
        "tier": "SILVER",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "CART_PROMOTION",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [
            5
        ],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 275829,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEB8aDEH6QR9s%2BpLD0fCbLCLMAUM2SEjGCCEzL31jIF40zqCOOoNMci6MVRtQw6w26Ho%2FgAwfedshL3nsgLbNx%2BKfNfz434X5KfpEwXeoYy2QfRLXdEYBjech7fTV62ig23q%2BW33fcsU6R6rvLF1U4%2Fd9%2FSvkcaEJjXT7OEKRLSsL49gKeaYEpHBJV%2BPPKNZXL9yObltXyBvaL63k6OoJ6F7P8ldLsWTmCK%2FCLNdGrYKEDVfg72oTSIp9opLTT%2BRaB%2BRtpUnvi0trD6ANhJc%2FPuGx0naVUfGx11%2BWE9xBnSjvhbW6BjItA1S0NlYPzjTnBrrxJImF8dT9eMh6xxzgxiEsVhqPfNZdGoELNjLgkrYP7Ejg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241202T051735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBUY53NIHR%2F20241202%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=a02e79699ec1c3d25a15cdbe5fb9c486482a89621c74c39f20a97ba641162189",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEB8aDEH6QR9s%2BpLD0fCbLCLMAUM2SEjGCCEzL31jIF40zqCOOoNMci6MVRtQw6w26Ho%2FgAwfedshL3nsgLbNx%2BKfNfz434X5KfpEwXeoYy2QfRLXdEYBjech7fTV62ig23q%2BW33fcsU6R6rvLF1U4%2Fd9%2FSvkcaEJjXT7OEKRLSsL49gKeaYEpHBJV%2BPPKNZXL9yObltXyBvaL63k6OoJ6F7P8ldLsWTmCK%2FCLNdGrYKEDVfg72oTSIp9opLTT%2BRaB%2BRtpUnvi0trD6ANhJc%2FPuGx0naVUfGx11%2BWE9xBnSjvhbW6BjItA1S0NlYPzjTnBrrxJImF8dT9eMh6xxzgxiEsVhqPfNZdGoELNjLgkrYP7Ejg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241202T051735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMBUY53NIHR%2F20241202%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0f9bb6c2eb798b530ecf39ee547445776692ddfdc476fa78ff66dc24d32f2bac",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEB8aDEH6QR9s%2BpLD0fCbLCLMAUM2SEjGCCEzL31jIF40zqCOOoNMci6MVRtQw6w26Ho%2FgAwfedshL3nsgLbNx%2BKfNfz434X5KfpEwXeoYy2QfRLXdEYBjech7fTV62ig23q%2BW33fcsU6R6rvLF1U4%2Fd9%2FSvkcaEJjXT7OEKRLSsL49gKeaYEpHBJV%2BPPKNZXL9yObltXyBvaL63k6OoJ6F7P8ldLsWTmCK%2FCLNdGrYKEDVfg72oTSIp9opLTT%2BRaB%2BRtpUnvi0trD6ANhJc%2FPuGx0naVUfGx11%2BWE9xBnSjvhbW6BjItA1S0NlYPzjTnBrrxJImF8dT9eMh6xxzgxiEsVhqPfNZdGoELNjLgkrYP7Ejg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241202T051735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBUY53NIHR%2F20241202%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=d2f957cbf5e04385d0b050bf0200c29e5780d4a41f7a835933dc2280ef4c5489",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01"
                }
            }
        ],
        "customFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [
            {
                "groupName": "The Home Depot",
                "groupRank": 1
            },
            {
                "groupName": "Kellanova Rewards",
                "groupRank": null
            }
        ],
        "rewardRank": 10,
        "restrictions": {
            "customerLevel": [
                {
                    "id": 21695,
                    "repeatFrequencyType": "DAYS",
                    "limit": 10,
                    "interval": 30,
                    "kpi": "QUANTITY"
                },
                {
                    "id": 21696,
                    "repeatFrequencyType": "MONTHS",
                    "limit": 50,
                    "interval": 12,
                    "kpi": "QUANTITY"
                }
            ],
            "rewardLevel": [
                {
                    "id": 21694,
                    "repeatFrequencyType": "NO_LIMIT",
                    "limit": 10000,
                    "kpi": "QUANTITY"
                }
            ]
        },
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": [
            {
                "paymentMode": "CONV_RATIO",
                "id": 11,
                "conversionRatio": 0.33
            }
        ],
        "segment": [
            {
                "segmentId": "6136",
                "partitionId": [
                    "2675"
                ]
            }
        ],
        "cards": null,
        "labels": []
    }
}
```
```json With Cards
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 285131,
        "type": "FREE_VOUCHER",
        "startDate": "2025-11-28 13:56:00",
        "endDate": "2026-11-28 14:10:00",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "PLATINUM",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "PHYSICAL_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 285131,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0ec51631b66041f63dc34fcbf79d437f4549d272ca7bec7921cdf6b5a18cf3c1",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c5c14013bb68f52e3cacb2b659133ad46bdafaf99812eb99c266232c2745e3c",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=f36461d01eb3b5e7004f69df6fd1e90bd4490f4e0676aef4f36f888c69807b4c",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01"
                }
            }
        ],
        "customFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cardSeries": [
            {
                "id": 158,
                "code": "26NOV2024TRYLEN17"
            },
            {
                "id": 159,
                "code": "26NOV2024TRYLEN18"
            }
        ],
        "labels": null
    }
}
```
```json With Labels
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 285132,
        "type": "FREE_VOUCHER",
        "startDate": "2025-11-28 13:56:00",
        "endDate": "2026-11-28 14:10:00",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "PLATINUM",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "PHYSICAL_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 285132,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c33f149316ca3f9d8c3dd00ceb5a8c55a8ee68e929a955b8f741ff70637f9fa",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c075879e5bd1e7095bbe1783b02c641d50cbe986bb6e141444425ad8b080b41",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7ec80a41a78f17904036103194476e5ec306df5745023aee27d0b6d493f0818b",
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {
                    "testdate": "2020-01-01 01:01:01"
                }
            }
        ],
        "customFields": {
            "testdate": "2020-01-01 01:01:01"
        },
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cards": null,
        "labels": [
            12751,12752
        ]
    }
}
```
```json With 'altText' for images and videos
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 316356,
        "type": "FREE_VOUCHER",
        "startDate": "2025-02-12 05:59:00",
        "endDate": "2025-12-30 12:50:20",
        "enabled": true,
        "priority": 1,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": "PLATINUM",
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "PHYSICAL_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 316356,
                "languageCode": "en",
                "name": " INTOUCH Enabled",
                "description": "Description",
                "termNConditionsId": "EXDR12987R",
                "termNConditionsUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ba3dc28fada891e7e9c25534a7d364d85253c8db1471725e5204fe32eed7482c",
                "imageId": "EXDR12987U",
                "imageUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=b0ae5fced49362da529ae652d280cc8fa42186556e64851e20f3b5bd0cc63613",
                "thumbnailId": "EXDR12987T",
                "thumbnailUrl": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=4396fceaf5cc64a17c7fbe7f7e11389431edab9602bb4b20938bdcc2aa3d7e4e",
                "enabled": true,
                "images": [
                    {
                        "name": "imageName",
                        "altText": "product picture",
                        "id": null,
                        "url": "mypic.com",
                        "isExternal": true
                    }
                ],
                "videos": [
                    {
                        "name": "videoName",
                        "altText": "product picture",
                        "id": null,
                        "url": "mypic.com",
                        "isExternal": true
                    }
                ],
                "customFields": {}
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cards": null,
        "labels": null
    }
}
```
```Text With RichTextcontent
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 336588,
        "type": "POINTS",
        "startDate": "2025-03-17 20:00:00",
        "startDateTime": "2025-03-17T20:00:00Z",
        "endDate": "2026-10-31 11:59:30",
        "endDateTime": "2026-10-31T11:59:30Z",
        "enabled": true,
        "priority": null,
        "intouchPoints": 500,
        "intouchSeriesId": "301233",
        "tier": null,
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "INTOUCH_REWARD",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [
            229
        ],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 336588,
                "languageCode": "en",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    }
                }
            },
            {
                "rewardId": 336588,
                "languageCode": "hin1",
                "name": "jogold",
                "description": "testreward1",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    }
                }
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": null,
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cardSeries": null,
        "labels": null,
        "createdBy": null,
        "lastUpdatedBy": null
    }
}
```
```json With Frequency restriction
{
    "status": {
        "success": true,
        "code": 6001,
        "message": "Reward fetched successfully"
    },
    "reward": {
        "id": 401279,
        "type": "FREE_VOUCHER",
        "startDate": "2025-03-18 07:46:55",
        "startDateTime": "2025-03-18T07:46:55Z",
        "endDate": "2025-10-04 07:46:55",
        "endDateTime": "2025-10-04T07:46:55Z",
        "enabled": true,
        "priority": null,
        "intouchPoints": 0,
        "intouchSeriesId": null,
        "tier": null,
        "group": null,
        "tillId": null,
        "programId": null,
        "label": null,
        "redemptionType": "AUCTION",
        "vendorId": null,
        "vendorRedemption": null,
        "communications": null,
        "categories": [],
        "geography": null,
        "languageSpecificInfo": [
            {
                "rewardId": 401279,
                "languageCode": "en",
                "name": "english rewardName",
                "description": "hello",
                "termNConditionsId": null,
                "termNConditionsUrl": null,
                "imageId": null,
                "imageUrl": null,
                "thumbnailId": null,
                "thumbnailUrl": null,
                "enabled": true,
                "images": [],
                "videos": [],
                "customFields": {},
                "richContentRO": {
                    "RCtest": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RC345": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorgetrue": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge2": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentfrench": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "RCtestCREATE": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "RCtestgeorge4": {
                        "content": "en",
                        "isEnabled": true
                    },
                    "richcontentenglish": {
                        "content": "this is the default value",
                        "isEnabled": true
                    },
                    "Golden2reward": {
                        "content": "20% Discount Applied",
                        "isEnabled": true
                    }
                }
            }
        ],
        "customFields": {},
        "owners": null,
        "supplementaryCriteriaRO": [],
        "groups": [],
        "rewardRank": null,
        "restrictions": {
            "customerLevel": [
                {
                    "id": 37823,
                    "repeatFrequencyType": "DAYS",
                    "limit": 2,
                    "interval": 2,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "startOfCycle": "2025-06-24T13:00:00Z",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                },
                {
                    "id": 37824,
                    "repeatFrequencyType": "MONTHS",
                    "limit": 6,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                }
            ],
            "rewardLevel": [
                {
                    "id": 37822,
                    "repeatFrequencyType": "WEEKS",
                    "limit": 2,
                    "kpi": "QUANTITY",
                    "windowType": "FIXED",
                    "weekStartDay": "TUESDAY",
                    "createdOn": 1751266773000,
                    "updatedOn": 1751266773000,
                    "createdBy": 75161973,
                    "updatedBy": 75161973,
                    "createdOnDateTime": "2025-06-30T06:59:33Z",
                    "updatedOnDateTime": "2025-06-30T06:59:33Z"
                }
            ]
        },
        "rewardRevenueMeta": [],
        "rewardRevenueDefaults": [],
        "paymentConfigs": null,
        "segment": [],
        "cardSeries": null,
        "labels": null,
        "createdBy": 75161973,
        "lastUpdatedBy": 75161973
    }
}
```

# API-specific codes

| Code | Description                    |
| :--- | :----------------------------- |
| 6004 | Reward not found or disabled   |
| 6001 | Reward fetched successfully    |
| 3004 | Brand ID is invalid or missing |

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
    "/api_gateway/rewards/core/v1/reward/{rewardId}/brand/{brandId}": {
      "get": {
        "summary": "Get reward details by ID",
        "description": "",
        "operationId": "get-reward-details-by-id",
        "parameters": [
          {
            "name": "rewardId",
            "in": "path",
            "description": "Unique identifier of the reward.",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "brandId",
            "in": "path",
            "description": "Name of the brand the reward is associated with.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "With Cards": {
                    "value": "{\n    \"status\": {\n        \"success\": true,\n        \"code\": 6001,\n        \"message\": \"Reward fetched successfully\"\n    },\n    \"reward\": {\n        \"id\": 285131,\n        \"type\": \"FREE_VOUCHER\",\n        \"startDate\": \"2025-11-28 13:56:00\",\n        \"endDate\": \"2026-11-28 14:10:00\",\n        \"enabled\": true,\n        \"priority\": 1,\n        \"intouchPoints\": 0,\n        \"intouchSeriesId\": null,\n        \"tier\": \"PLATINUM\",\n        \"group\": null,\n        \"tillId\": null,\n        \"programId\": null,\n        \"label\": null,\n        \"redemptionType\": \"PHYSICAL_REWARD\",\n        \"vendorId\": null,\n        \"vendorRedemption\": null,\n        \"communications\": null,\n        \"categories\": [],\n        \"geography\": null,\n        \"languageSpecificInfo\": [\n            {\n                \"rewardId\": 285131,\n                \"languageCode\": \"en\",\n                \"name\": \" INTOUCH Enabled\",\n                \"description\": \"Description\",\n                \"termNConditionsId\": \"EXDR12987R\",\n                \"termNConditionsUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0ec51631b66041f63dc34fcbf79d437f4549d272ca7bec7921cdf6b5a18cf3c1\",\n                \"imageId\": \"EXDR12987U\",\n                \"imageUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c5c14013bb68f52e3cacb2b659133ad46bdafaf99812eb99c266232c2745e3c\",\n                \"thumbnailId\": \"EXDR12987T\",\n                \"thumbnailUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=f36461d01eb3b5e7004f69df6fd1e90bd4490f4e0676aef4f36f888c69807b4c\",\n                \"enabled\": true,\n                \"images\": [],\n                \"videos\": [],\n                \"customFields\": {\n                    \"testdate\": \"2020-01-01 01:01:01\"\n                }\n            }\n        ],\n        \"customFields\": {\n            \"testdate\": \"2020-01-01 01:01:01\"\n        },\n        \"owners\": null,\n        \"supplementaryCriteriaRO\": [],\n        \"groups\": [],\n        \"rewardRank\": null,\n        \"restrictions\": null,\n        \"rewardRevenueMeta\": [],\n        \"rewardRevenueDefaults\": [],\n        \"paymentConfigs\": null,\n        \"segment\": [],\n        \"cards\": [\n            {\n                \"id\": 158,\n                \"code\": \"26NOV2024TRYLEN17\"\n            },\n            {\n                \"id\": 159,\n                \"code\": \"26NOV2024TRYLEN18\"\n            }\n        ],\n        \"labels\": null\n    }\n}"
                  },
                  "With Labels": {
                    "value": "{\n    \"status\": {\n        \"success\": true,\n        \"code\": 6001,\n        \"message\": \"Reward fetched successfully\"\n    },\n    \"reward\": {\n        \"id\": 285132,\n        \"type\": \"FREE_VOUCHER\",\n        \"startDate\": \"2025-11-28 13:56:00\",\n        \"endDate\": \"2026-11-28 14:10:00\",\n        \"enabled\": true,\n        \"priority\": 1,\n        \"intouchPoints\": 0,\n        \"intouchSeriesId\": null,\n        \"tier\": \"PLATINUM\",\n        \"group\": null,\n        \"tillId\": null,\n        \"programId\": null,\n        \"label\": null,\n        \"redemptionType\": \"PHYSICAL_REWARD\",\n        \"vendorId\": null,\n        \"vendorRedemption\": null,\n        \"communications\": null,\n        \"categories\": [],\n        \"geography\": null,\n        \"languageSpecificInfo\": [\n            {\n                \"rewardId\": 285132,\n                \"languageCode\": \"en\",\n                \"name\": \" INTOUCH Enabled\",\n                \"description\": \"Description\",\n                \"termNConditionsId\": \"EXDR12987R\",\n                \"termNConditionsUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c33f149316ca3f9d8c3dd00ceb5a8c55a8ee68e929a955b8f741ff70637f9fa\",\n                \"imageId\": \"EXDR12987U\",\n                \"imageUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c075879e5bd1e7095bbe1783b02c641d50cbe986bb6e141444425ad8b080b41\",\n                \"thumbnailId\": \"EXDR12987T\",\n                \"thumbnailUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7ec80a41a78f17904036103194476e5ec306df5745023aee27d0b6d493f0818b\",\n                \"enabled\": true,\n                \"images\": [],\n                \"videos\": [],\n                \"customFields\": {\n                    \"testdate\": \"2020-01-01 01:01:01\"\n                }\n            }\n        ],\n        \"customFields\": {\n            \"testdate\": \"2020-01-01 01:01:01\"\n        },\n        \"owners\": null,\n        \"supplementaryCriteriaRO\": [],\n        \"groups\": [],\n        \"rewardRank\": null,\n        \"restrictions\": null,\n        \"rewardRevenueMeta\": [],\n        \"rewardRevenueDefaults\": [],\n        \"paymentConfigs\": null,\n        \"segment\": [],\n        \"cards\": null,\n        \"labels\": [\n            12751,12752\n        ]\n    }\n}"
                  },
                  "With 'altText' for images and videos": {
                    "value": "{\n    \"status\": {\n        \"success\": true,\n        \"code\": 6001,\n        \"message\": \"Reward fetched successfully\"\n    },\n    \"reward\": {\n        \"id\": 316356,\n        \"type\": \"FREE_VOUCHER\",\n        \"startDate\": \"2025-02-12 05:59:00\",\n        \"endDate\": \"2025-12-30 12:50:20\",\n        \"enabled\": true,\n        \"priority\": 1,\n        \"intouchPoints\": 0,\n        \"intouchSeriesId\": null,\n        \"tier\": \"PLATINUM\",\n        \"group\": null,\n        \"tillId\": null,\n        \"programId\": null,\n        \"label\": null,\n        \"redemptionType\": \"PHYSICAL_REWARD\",\n        \"vendorId\": null,\n        \"vendorRedemption\": null,\n        \"communications\": null,\n        \"categories\": [],\n        \"geography\": null,\n        \"languageSpecificInfo\": [\n            {\n                \"rewardId\": 316356,\n                \"languageCode\": \"en\",\n                \"name\": \" INTOUCH Enabled\",\n                \"description\": \"Description\",\n                \"termNConditionsId\": \"EXDR12987R\",\n                \"termNConditionsUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ba3dc28fada891e7e9c25534a7d364d85253c8db1471725e5204fe32eed7482c\",\n                \"imageId\": \"EXDR12987U\",\n                \"imageUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=b0ae5fced49362da529ae652d280cc8fa42186556e64851e20f3b5bd0cc63613\",\n                \"thumbnailId\": \"EXDR12987T\",\n                \"thumbnailUrl\": \"https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=4396fceaf5cc64a17c7fbe7f7e11389431edab9602bb4b20938bdcc2aa3d7e4e\",\n                \"enabled\": true,\n                \"images\": [\n                    {\n                        \"name\": \"imageName\",\n                        \"altText\": \"product picture\",\n                        \"id\": null,\n                        \"url\": \"mypic.com\",\n                        \"isExternal\": true\n                    }\n                ],\n                \"videos\": [\n                    {\n                        \"name\": \"videoName\",\n                        \"altText\": \"product picture\",\n                        \"id\": null,\n                        \"url\": \"mypic.com\",\n                        \"isExternal\": true\n                    }\n                ],\n                \"customFields\": {}\n            }\n        ],\n        \"customFields\": {},\n        \"owners\": null,\n        \"supplementaryCriteriaRO\": [],\n        \"groups\": [],\n        \"rewardRank\": null,\n        \"restrictions\": null,\n        \"rewardRevenueMeta\": [],\n        \"rewardRevenueDefaults\": [],\n        \"paymentConfigs\": null,\n        \"segment\": [],\n        \"cards\": null,\n        \"labels\": null\n    }\n}"
                  },
                  "": {
                    "summary": "",
                    "value": "{}"
                  },
                  "Sample response": {
                    "value": {
                      "status": {
                        "success": true,
                        "code": 6001,
                        "message": "Reward fetched successfully"
                      },
                      "reward": {
                        "id": 488443,
                        "type": "VOUCHER",
                        "startDate": "2025-09-16 05:15:00",
                        "startDateTime": "2025-09-16T05:15:00Z",
                        "endDate": "2025-10-01 06:00:00",
                        "endDateTime": "2025-10-01T06:00:00Z",
                        "enabled": true,
                        "priority": 1,
                        "intouchPoints": 0,
                        "intouchSeriesId": "844312",
                        "tier": null,
                        "group": null,
                        "tillId": null,
                        "status": "ENDED",
                        "programId": null,
                        "label": null,
                        "redemptionType": "INTOUCH_REWARD",
                        "vendorId": null,
                        "vendorRedemption": null,
                        "communications": null,
                        "categories": [
                          486
                        ],
                        "geography": null,
                        "languageSpecificInfo": [
                          {
                            "rewardId": 488443,
                            "languageCode": "en",
                            "name": "UAT Reward 11",
                            "description": "Test Reward for UAT Team",
                            "termNConditionsId": null,
                            "termNConditionsUrl": null,
                            "imageId": null,
                            "imageUrl": null,
                            "thumbnailId": null,
                            "thumbnailUrl": null,
                            "enabled": true,
                            "images": [],
                            "videos": [],
                            "customFields": {},
                            "richContentRO": {
                              "RCtest": {
                                "content": "en",
                                "isEnabled": true
                              },
                              "RC345": {
                                "content": "en",
                                "isEnabled": true
                              },
                              "RCtestgeorgetrue": {
                                "content": "en",
                                "isEnabled": true
                              },
                              "RCtestgeorge2": {
                                "content": "en",
                                "isEnabled": true
                              },
                              "richcontentfrench": {
                                "content": "this is the default value",
                                "isEnabled": true
                              },
                              "RCtestCREATE": {
                                "content": "en",
                                "isEnabled": true
                              },
                              "RCtestgeorge4": {
                                "content": "en",
                                "isEnabled": true
                              },
                              "richcontentenglish": {
                                "content": "this is the default value",
                                "isEnabled": true
                              },
                              "Golden2reward": {
                                "content": "20% Discount Applied",
                                "isEnabled": true
                              },
                              "UAT_RCT_1": {
                                "content": "Rich Content Text for UAT",
                                "isEnabled": true
                              }
                            }
                          }
                        ],
                        "customFields": {},
                        "owners": null,
                        "supplementaryCriteriaRO": [],
                        "groups": [],
                        "rewardRank": null,
                        "restrictions": null,
                        "rewardRevenueMeta": [],
                        "rewardRevenueDefaults": [],
                        "paymentConfigs": [
                          {
                            "paymentMode": "POINTS",
                            "id": 12616,
                            "points": 100
                          }
                        ],
                        "segment": [],
                        "cardSeries": null,
                        "labels": null,
                        "createdBy": 75197372,
                        "lastUpdatedBy": 75197372
                      }
                    },
                    "summary": "Sample response"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "code": {
                              "type": "integer",
                              "example": 6001,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "Reward fetched successfully"
                            }
                          }
                        },
                        "reward": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 334004,
                              "default": 0
                            },
                            "type": {
                              "type": "string",
                              "example": "VOUCHER"
                            },
                            "startDate": {
                              "type": "string",
                              "example": "2025-09-26 20:00:00"
                            },
                            "startDateTime": {
                              "type": "string",
                              "example": "2025-09-26T20:00:00Z"
                            },
                            "endDate": {
                              "type": "string",
                              "example": "2026-10-31 11:59:30"
                            },
                            "endDateTime": {
                              "type": "string",
                              "example": "2026-10-31T11:59:30Z"
                            },
                            "enabled": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "priority": {},
                            "intouchPoints": {
                              "type": "integer",
                              "example": 500,
                              "default": 0
                            },
                            "intouchSeriesId": {
                              "type": "string",
                              "example": "301233"
                            },
                            "tier": {},
                            "group": {},
                            "tillId": {},
                            "programId": {},
                            "label": {},
                            "redemptionType": {
                              "type": "string",
                              "example": "INTOUCH_REWARD"
                            },
                            "vendorId": {},
                            "vendorRedemption": {},
                            "communications": {},
                            "categories": {
                              "type": "array",
                              "items": {
                                "type": "integer",
                                "example": 229,
                                "default": 0
                              }
                            },
                            "geography": {},
                            "languageSpecificInfo": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "rewardId": {
                                    "type": "integer",
                                    "example": 334004,
                                    "default": 0
                                  },
                                  "languageCode": {
                                    "type": "string",
                                    "example": "en"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "jogoldhindi"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "testreward1"
                                  },
                                  "termNConditionsId": {},
                                  "termNConditionsUrl": {},
                                  "imageId": {},
                                  "imageUrl": {},
                                  "thumbnailId": {},
                                  "thumbnailUrl": {},
                                  "enabled": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "images": {
                                    "type": "array"
                                  },
                                  "videos": {
                                    "type": "array"
                                  },
                                  "customFields": {
                                    "type": "object",
                                    "properties": {}
                                  }
                                }
                              }
                            },
                            "customFields": {
                              "type": "object",
                              "properties": {}
                            },
                            "owners": {},
                            "supplementaryCriteriaRO": {
                              "type": "array"
                            },
                            "groups": {
                              "type": "array"
                            },
                            "rewardRank": {},
                            "restrictions": {},
                            "rewardRevenueMeta": {
                              "type": "array"
                            },
                            "rewardRevenueDefaults": {
                              "type": "array"
                            },
                            "paymentConfigs": {},
                            "segment": {
                              "type": "array"
                            },
                            "cards": {},
                            "labels": {}
                          }
                        }
                      }
                    },
                    {
                      "title": "With Cards",
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "code": {
                              "type": "integer",
                              "example": 6001,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "Reward fetched successfully"
                            }
                          }
                        },
                        "reward": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 285131,
                              "default": 0
                            },
                            "type": {
                              "type": "string",
                              "example": "FREE_VOUCHER"
                            },
                            "startDate": {
                              "type": "string",
                              "example": "2025-11-28 13:56:00"
                            },
                            "endDate": {
                              "type": "string",
                              "example": "2026-11-28 14:10:00"
                            },
                            "enabled": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "priority": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "intouchPoints": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "intouchSeriesId": {},
                            "tier": {
                              "type": "string",
                              "example": "PLATINUM"
                            },
                            "group": {},
                            "tillId": {},
                            "programId": {},
                            "label": {},
                            "redemptionType": {
                              "type": "string",
                              "example": "PHYSICAL_REWARD"
                            },
                            "vendorId": {},
                            "vendorRedemption": {},
                            "communications": {},
                            "categories": {
                              "type": "array"
                            },
                            "geography": {},
                            "languageSpecificInfo": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "rewardId": {
                                    "type": "integer",
                                    "example": 285131,
                                    "default": 0
                                  },
                                  "languageCode": {
                                    "type": "string",
                                    "example": "en"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": " INTOUCH Enabled"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "Description"
                                  },
                                  "termNConditionsId": {
                                    "type": "string",
                                    "example": "EXDR12987R"
                                  },
                                  "termNConditionsUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=0ec51631b66041f63dc34fcbf79d437f4549d272ca7bec7921cdf6b5a18cf3c1"
                                  },
                                  "imageId": {
                                    "type": "string",
                                    "example": "EXDR12987U"
                                  },
                                  "imageUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6c5c14013bb68f52e3cacb2b659133ad46bdafaf99812eb99c266232c2745e3c"
                                  },
                                  "thumbnailId": {
                                    "type": "string",
                                    "example": "EXDR12987T"
                                  },
                                  "thumbnailUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDL6O%2FKoTICzLkDy8DiLMAcE7CWzspkAB%2BVnSL37PeVgwEQE6Y%2Fy4Xpik1znpHFktlC33uDYO%2B1JxmLjy2VRr5C6HJ2bsgHXlcBhVF4Pegrj8gZ6mMJpeJYVWMvMUeE1xN%2FREa1dAL4V5XV3rjHRDSc24fVLAAerYzQ5D5a0oGy6KLP5xGu9OnPbAeQVUNOkrDpvVivN4cXFSkNhJtz%2FWkaddTBSTTUAAyGXaLMU1xYsOkPf%2FgXXunXm2vHdd6%2BsHw5RnltXHs%2FZ%2BOWVSO8RojtvzXDZkJ6t2jLH1PiiJvIm7BjItbQY7QS%2B5EAmU1eOOR%2FzRSRTo0r3spUfS1fLeHexFjeXG88tMBFDq9INiow8u&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T053100Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB2AHTQVTQ%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=f36461d01eb3b5e7004f69df6fd1e90bd4490f4e0676aef4f36f888c69807b4c"
                                  },
                                  "enabled": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "images": {
                                    "type": "array"
                                  },
                                  "videos": {
                                    "type": "array"
                                  },
                                  "customFields": {
                                    "type": "object",
                                    "properties": {
                                      "testdate": {
                                        "type": "string",
                                        "example": "2020-01-01 01:01:01"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "customFields": {
                              "type": "object",
                              "properties": {
                                "testdate": {
                                  "type": "string",
                                  "example": "2020-01-01 01:01:01"
                                }
                              }
                            },
                            "owners": {},
                            "supplementaryCriteriaRO": {
                              "type": "array"
                            },
                            "groups": {
                              "type": "array"
                            },
                            "rewardRank": {},
                            "restrictions": {},
                            "rewardRevenueMeta": {
                              "type": "array"
                            },
                            "rewardRevenueDefaults": {
                              "type": "array"
                            },
                            "paymentConfigs": {},
                            "segment": {
                              "type": "array"
                            },
                            "cards": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 158,
                                    "default": 0
                                  },
                                  "code": {
                                    "type": "string",
                                    "example": "26NOV2024TRYLEN17"
                                  }
                                }
                              }
                            },
                            "labels": {}
                          }
                        }
                      }
                    },
                    {
                      "title": "With Labels",
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "code": {
                              "type": "integer",
                              "example": 6001,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "Reward fetched successfully"
                            }
                          }
                        },
                        "reward": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 285132,
                              "default": 0
                            },
                            "type": {
                              "type": "string",
                              "example": "FREE_VOUCHER"
                            },
                            "startDate": {
                              "type": "string",
                              "example": "2025-11-28 13:56:00"
                            },
                            "endDate": {
                              "type": "string",
                              "example": "2026-11-28 14:10:00"
                            },
                            "enabled": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "priority": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "intouchPoints": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "intouchSeriesId": {},
                            "tier": {
                              "type": "string",
                              "example": "PLATINUM"
                            },
                            "group": {},
                            "tillId": {},
                            "programId": {},
                            "label": {},
                            "redemptionType": {
                              "type": "string",
                              "example": "PHYSICAL_REWARD"
                            },
                            "vendorId": {},
                            "vendorRedemption": {},
                            "communications": {},
                            "categories": {
                              "type": "array"
                            },
                            "geography": {},
                            "languageSpecificInfo": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "rewardId": {
                                    "type": "integer",
                                    "example": 285132,
                                    "default": 0
                                  },
                                  "languageCode": {
                                    "type": "string",
                                    "example": "en"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": " INTOUCH Enabled"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "Description"
                                  },
                                  "termNConditionsId": {
                                    "type": "string",
                                    "example": "EXDR12987R"
                                  },
                                  "termNConditionsUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987R?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c33f149316ca3f9d8c3dd00ceb5a8c55a8ee68e929a955b8f741ff70637f9fa"
                                  },
                                  "imageId": {
                                    "type": "string",
                                    "example": "EXDR12987U"
                                  },
                                  "imageUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987U?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2c075879e5bd1e7095bbe1783b02c641d50cbe986bb6e141444425ad8b080b41"
                                  },
                                  "thumbnailId": {
                                    "type": "string",
                                    "example": "EXDR12987T"
                                  },
                                  "thumbnailUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/BUKL/EXDR12987T?X-Amz-Security-Token=FwoGZXIvYXdzEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDFxdV1gYlKLzLNiCnyLMAfXpuU8lo%2F68GeRLMF3%2FN1CyDf6CP73dqIIhHjl%2FdmjfV%2FSDrNS0K0Imfh5kS4XiQo9PV%2FFfS3hbkQapEb%2FJqbZ4ZRIaosH2pp6niOxmntCLCgKosDCe1%2B3ZzqwAXi4SffMv39DUpcwkijRS0V%2BO4IF6QxhR6ftWr3WgxNmOLyKDJQ24GRKyWNkugyGDJmlARbcXoJUk%2FYSMQLHmNZ0kOQ1RUX%2BEAZM%2B%2BertX%2B7apw9a4rwNQTDpyBQfuxhGXQFUvYOw29TeD%2B5lqwiqgijlu4m7BjItFXnYIJPLJBnocGeTFvZyRLVgOd5xXgQeXG8sTh5Ffr16yFgF49OOFi7KHEhy&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241218T054136Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBZHQLFRXX%2F20241218%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=7ec80a41a78f17904036103194476e5ec306df5745023aee27d0b6d493f0818b"
                                  },
                                  "enabled": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "images": {
                                    "type": "array"
                                  },
                                  "videos": {
                                    "type": "array"
                                  },
                                  "customFields": {
                                    "type": "object",
                                    "properties": {
                                      "testdate": {
                                        "type": "string",
                                        "example": "2020-01-01 01:01:01"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "customFields": {
                              "type": "object",
                              "properties": {
                                "testdate": {
                                  "type": "string",
                                  "example": "2020-01-01 01:01:01"
                                }
                              }
                            },
                            "owners": {},
                            "supplementaryCriteriaRO": {
                              "type": "array"
                            },
                            "groups": {
                              "type": "array"
                            },
                            "rewardRank": {},
                            "restrictions": {},
                            "rewardRevenueMeta": {
                              "type": "array"
                            },
                            "rewardRevenueDefaults": {
                              "type": "array"
                            },
                            "paymentConfigs": {},
                            "segment": {
                              "type": "array"
                            },
                            "cards": {},
                            "labels": {
                              "type": "array",
                              "items": {
                                "type": "integer",
                                "example": 12751,
                                "default": 0
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "With 'altText' for images and videos",
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "code": {
                              "type": "integer",
                              "example": 6001,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "Reward fetched successfully"
                            }
                          }
                        },
                        "reward": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 316356,
                              "default": 0
                            },
                            "type": {
                              "type": "string",
                              "example": "FREE_VOUCHER"
                            },
                            "startDate": {
                              "type": "string",
                              "example": "2025-02-12 05:59:00"
                            },
                            "endDate": {
                              "type": "string",
                              "example": "2025-12-30 12:50:20"
                            },
                            "enabled": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "priority": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "intouchPoints": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "intouchSeriesId": {},
                            "tier": {
                              "type": "string",
                              "example": "PLATINUM"
                            },
                            "group": {},
                            "tillId": {},
                            "programId": {},
                            "label": {},
                            "redemptionType": {
                              "type": "string",
                              "example": "PHYSICAL_REWARD"
                            },
                            "vendorId": {},
                            "vendorRedemption": {},
                            "communications": {},
                            "categories": {
                              "type": "array"
                            },
                            "geography": {},
                            "languageSpecificInfo": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "rewardId": {
                                    "type": "integer",
                                    "example": 316356,
                                    "default": 0
                                  },
                                  "languageCode": {
                                    "type": "string",
                                    "example": "en"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": " INTOUCH Enabled"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "Description"
                                  },
                                  "termNConditionsId": {
                                    "type": "string",
                                    "example": "EXDR12987R"
                                  },
                                  "termNConditionsUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987R?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ba3dc28fada891e7e9c25534a7d364d85253c8db1471725e5204fe32eed7482c"
                                  },
                                  "imageId": {
                                    "type": "string",
                                    "example": "EXDR12987U"
                                  },
                                  "imageUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987U?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=b0ae5fced49362da529ae652d280cc8fa42186556e64851e20f3b5bd0cc63613"
                                  },
                                  "thumbnailId": {
                                    "type": "string",
                                    "example": "EXDR12987T"
                                  },
                                  "thumbnailUrl": {
                                    "type": "string",
                                    "example": "https://s3.eu-west-1.amazonaws.com/eucrm-solutions/DOCDEMO/EXDR12987T?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCHxXxuzFsKGh4jJe8nHWJC8HpR%2F3JEbwYOoEbvWHcRAgIhAPHRhNSihPD%2FLbllR5gTsy3JwRbbW2B9gNc%2BnfnsMyq3Kr4CCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTAyODEyNzc5MjY3IgzR86kFkYBtTNYWUGEqkgIRCzR%2FTzOgs49WDyP4TG2upwP1cOLb%2FdD624eALCKdqLr13XWC66rOCiThnqfRowrl%2B1uC%2BHOZxaE%2FkNhkunfgpd9GQrySwEjHECw%2BJUWnbBNWq%2FxV4MfzPZD7nQEUvoRdhNnNhclJQiyvq088Uc%2BQpRJ6ocbjZK4pd0UHPsFM1GtyOFrPJAObFHKtAAjxwi4NENFeMYb90Yy43d%2B6Yi%2F8H0FCreqVqxnfqtWzomYy9s49lBmuL3tB89dt2PUCh4%2FivNQRPzVTNX1M9JI7IASl5GwLIo9FYzxfpbmmAPZqouGubstMGddC122zSBnv%2BkxpJY5lOYAd4ZAF1lFLeEi0iWlVNDkI%2BpDul8chs%2FguWzLHMOKpsb0GOpwBplJpeihD7zlre1M2WZy9hyNkEEY0GHgsIJHXGYbdv6ZUDErV654w%2FugSzUO%2FhSkwnkywvQssqWQBVqUBSb5KiMoc7oRj2uiXzZdhgvBEftPXvWR1gKenEaRE70ZhE51bYLCTES%2F6nkZz%2FIDbwWTU4plCc3JIN1Um3C0jjQQwCqV5pELcdtrMsPrNNmQ41aDlL9pNT01YT7k1svL1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250212T075930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMB4DAMOMRZ%2F20250212%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=4396fceaf5cc64a17c7fbe7f7e11389431edab9602bb4b20938bdcc2aa3d7e4e"
                                  },
                                  "enabled": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "images": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "name": {
                                          "type": "string",
                                          "example": "imageName"
                                        },
                                        "altText": {
                                          "type": "string",
                                          "example": "product picture"
                                        },
                                        "id": {},
                                        "url": {
                                          "type": "string",
                                          "example": "mypic.com"
                                        },
                                        "isExternal": {
                                          "type": "boolean",
                                          "example": true,
                                          "default": true
                                        }
                                      }
                                    }
                                  },
                                  "videos": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "name": {
                                          "type": "string",
                                          "example": "videoName"
                                        },
                                        "altText": {
                                          "type": "string",
                                          "example": "product picture"
                                        },
                                        "id": {},
                                        "url": {
                                          "type": "string",
                                          "example": "mypic.com"
                                        },
                                        "isExternal": {
                                          "type": "boolean",
                                          "example": true,
                                          "default": true
                                        }
                                      }
                                    }
                                  },
                                  "customFields": {
                                    "type": "object",
                                    "properties": {}
                                  }
                                }
                              }
                            },
                            "customFields": {
                              "type": "object",
                              "properties": {}
                            },
                            "owners": {},
                            "supplementaryCriteriaRO": {
                              "type": "array"
                            },
                            "groups": {
                              "type": "array"
                            },
                            "rewardRank": {},
                            "restrictions": {},
                            "rewardRevenueMeta": {
                              "type": "array"
                            },
                            "rewardRevenueDefaults": {
                              "type": "array"
                            },
                            "paymentConfigs": {},
                            "segment": {
                              "type": "array"
                            },
                            "cards": {},
                            "labels": {}
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
                  "6004": {
                    "value": "{\n   \"status\": {\n       \"success\": false,\n       \"code\": 6004,\n       \"message\": \"Reward not found or disabled.\"\n   },\n   \"reward\": null\n}\n\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "object",
                      "properties": {
                        "success": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "code": {
                          "type": "integer",
                          "example": 6004,
                          "default": 0
                        },
                        "message": {
                          "type": "string",
                          "example": "Reward not found or disabled."
                        }
                      }
                    },
                    "reward": {}
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/reward/488443/brand/61' \\\n--header 'Authorization: Basic bWFkaHV3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=j9A8Ne5yK28__G6y3AO.PC0FO2nL2Nxa6njgXshLg08-1745825668814-0.0.1.1-604800000; _cfuvid=Bt3knKvTi5qr4tLz.8c.OaIfgPwkuJF5o.pmTZJLci8-1763381177435-0.0.1.1-604800000'",
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