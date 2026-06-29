> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Cart Promotion

This API updates an existing cart promotion's configuration.

* When you call this API, the system replaces the existing promotion configuration with the new values you provide in the request body. You can update fields such as the promotion name, conditions, actions, validity dates, restrictions, and status.
* To activate or deactivate a promotion without updating its configuration, use the [Activate Cart Promotion](https://docs.capillarytech.com/reference/put_api-gateway-v1-promotions-id-activate) or [Deactivate Cart Promotion](https://docs.capillarytech.com/reference/put_api-gateway-v1-promotions-id-deactivate) APIs instead.

# Example request

```curl
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/68de8ef2f398ae3dc8802e20' \
--header 'Content-Type: application/json' \
--header 'X-CAP-API-AUTH-ORG-ID: 100232' \
--header 'user-agent: pyapps_auto_Promotion_Engine_Eucrm_Smoke' \
--header 'Authorization: Basic bmFtYW5fZG9jOxxxxxxxxjZlY2I2MmEy' \
--data '{
    "name": "CODE_Promotion_Test_17573886",
    "priority": 0,
    "active": true,
    "messageLabel": "test!!",
    "type": "CODE",
    "condition": {
      "type": "CART",
      "cartCondition": {
        "kpi": "SUBTOTAL",
        "operator": "EQUALS",
        "value": 250.0
      }
    },
    "action": {
      "type": "CART_BASED",
      "cartBasedAction": {
        "type": "ABSOLUTE",
        "value": 25.0
      }
    },
    "createdBy": 70707,
    "createdOn": 0,
    "lastUpdatedBy": 70707,
    "startDate": "1857388651000",
    "endDate": "1857475051000",
    "campaignId": 39077,
    "mode": "DISCOUNT",
    "promotionRestrictions": {
      "Code": [
        {
          "kpi": "REDEMPTION",
          "limit": 1
        }
      ]
    },
    "isStackable": false
  }'
```

# API quick reference

```curl Reference structure
{{https://eu.api.capillarytech.com/api_gateway/v1/promotions}}
   └─ {{promotions}}
      ├─ {{createCartPromotion}}({{CartPromotionRequest}}) -> {{CartPromotionResponse}}
      ├─ {{CartPromotionRequest}}
      │   ├─ {{Name}} (string)
      │   ├─ {{Type}} (enum)
      │   ├─ {{MessageLabel}} (string)
      │   ├─ {{Active}} (boolean)
      │   ├─ {{Priority}} (integer)
      │   ├─ {{IsStackable}} (boolean)
      │   ├─ {{StartDate}} (long)
      │   ├─ {{EndDate}} (long)
      │   ├─ {{CampaignId}} (string)
      │   ├─ {{Mode}} (enum)
      │   ├─ {{Condition}}
      │   │   ├─ {{ConditionType}} (enum)
      │   │   ├─ {{CartCondition}}
      │   │   │   ├─ {{CartKpi}} (enum)
      │   │   │   ├─ {{CartOperator}} (enum)
      │   │   │   └─ {{CartValue}} (number)
      │   │   ├─ {{TenderCondition}}
      │   │   │   └─ {{TenderModes}} []
      │   │   │       ├─ {{TenderType}} (string)
      │   │   │       ├─ {{TenderIdentifiers}} []
      │   │   │       └─ {{NestedCondition}} (Object)
      │   │   ├─ {{ProductCondition}}
      │   │   │   ├─ {{CriteriaList}} []
      │   │   │   │   ├─ {{Entity}} (string)
      │   │   │   │   ├─ {{EntityOperator}} (enum)
      │   │   │   │   └─ {{EntityValues}} []
      │   │   │   ├─ {{ProductKpi}} (enum)
      │   │   │   ├─ {{ProductOperator}} (enum)
      │   │   │   └─ {{ProductValue}} (string)
      │   │   ├─ {{ComboProductCondition}}
      │   │   │   └─ {{ProductConditions}} []
      │   │   │       ├─ {{ComboCriteriaList}} []
      │   │   │       ├─ {{ComboKpi}} (enum)
      │   │   │       ├─ {{ComboOperator}} (enum)
      │   │   │       └─ {{ComboValue}} (string)
      │   │   ├─ {{PaymentModeScopeConditionRO}}
      │   │   │   ├─ {{PaymentModeConditionRO}}
      │   │   │   │   └─ {{PaymentModeSelectionCriteriaRO}}
      │   │   │   │       ├─ {{SelectionOperator}} (enum)
      │   │   │   │       └─ {{SelectionValues}} []
      │   │   │   └─ {{ScopeCondition}} (Object)
      │   │   └─ {{PaymentComboProductConditionRO}}
      │   │       ├─ {{PaymentTenderCondition}} (Object)
      │   │       └─ {{PaymentComboProductCondition}} (Object)
      │   ├─ {{Action}}
      │   │   ├─ {{ActionType}} (enum)
      │   │   ├─ {{CartBasedAction}}
      │   │   │   ├─ {{CartActionType}} (enum)
      │   │   │   └─ {{CartActionValue}} (number)
      │   │   ├─ {{TenderBasedAction}}
      │   │   │   ├─ {{TenderActionType}} (enum)
      │   │   │   └─ {{TenderActionValue}} (string)
      │   │   ├─ {{ProductBasedAction}}
      │   │   │   ├─ {{ProductActionType}} (enum)
      │   │   │   ├─ {{ProductActionValue}} (number)
      │   │   │   ├─ {{IncludeItemsFromConditionSet}} (boolean)
      │   │   │   └─ {{ProductBasedCondition}}
      │   │   │       ├─ {{TargetType}} (enum)
      │   │   │       ├─ {{TargetProductCondition}} (Object)
      │   │   │       └─ {{TargetComboProductCondition}} (Object)
      │   │   ├─ {{FreeProductAction}}
      │   │   │   ├─ {{FreeIncludeItemsFromConditionSet}} (boolean)
      │   │   │   └─ {{FreeProductBasedCondition}} (Object)
      │   │   ├─ {{FixedPriceAction}}
      │   │   │   ├─ {{FixedPriceValue}} (number)
      │   │   │   ├─ {{FixedIncludeItemsFromConditionSet}} (boolean)
      │   │   │   └─ {{FixedProductBasedCondition}} (Object)
      │   │   └─ {{PerUnitAction}}
      │   │       ├─ {{PerUnitKpi}} (enum)
      │   │       ├─ {{PerUnitDivider}} (string)
      │   │       └─ {{RewardAction}}
      │   │           ├─ {{RewardActionType}} (enum)
      │   │           ├─ {{RewardProductBasedAction}} (Object)
      │   │           ├─ {{RewardFreeProductAction}} (Object)
      │   │           └─ {{RewardFixedPriceAction}} (Object)
      │   ├─ {{CustomerActivationRequired}} (boolean)
      │   ├─ {{MaxIssuancePerCustomer}} (integer)
      │   ├─ {{PromotionRestrictions}}
      │   │   ├─ {{PromotionLevel}} []
      │   │   │   ├─ {{RestrictionKpi}} (enum)
      │   │   │   ├─ {{RestrictionFrequency}} (enum)
      │   │   │   ├─ {{MinTimeBetweenRepeat}} (long)
      │   │   │   └─ {{RestrictionLimit}} (string)
      │   │   ├─ {{CustomerLevel}} []
      │   │   ├─ {{CartLevel}} []
      │   │   ├─ {{CodeLevel}} []
      │   │   └─ {{EarnLevel}} []
      │   ├─ {{CustomFieldValues}} (Object)
      │   ├─ {{IsLoyaltyOnly}} (boolean)
      │   ├─ {{EarningCriteria}}
      │   │   ├─ {{CriteriaActive}} (boolean)
      │   │   ├─ {{CriteriaDsl}} (string)
      │   │   ├─ {{CriteriaDslJson}} (string)
      │   │   ├─ {{CriteriaName}} (string)
      │   │   ├─ {{EarnedFromType}} (enum)
      │   │   ├─ {{EventType}} (enum)
      │   │   ├─ {{GroupId}} (integer)
      │   │   └─ {{MilestoneId}} (integer)
      │   ├─ {{MaxEarningPerCustomer}} (integer)
      │   ├─ {{StoreCriteria}}
      │   │   ├─ {{StoreType}} (enum)
      │   │   ├─ {{StoreValues}} []
      │   │   └─ {{StoreOperator}} (enum)
      │   ├─ {{TimeCriteria}}
      │   │   ├─ {{StartTime}} (string)
      │   │   ├─ {{DurationInHours}} (string)
      │   │   ├─ {{RepeatFrequency}} (enum)
      │   │   └─ {{WeeklyValues}} []
      │   └─ {{SupplementaryCriteria}}
      │       ├─ {{LoyaltyProgramId}} (integer)
      │       ├─ {{ProgramType}} (enum)
      │       └─ {{PartnerProgramId}} (integer)
      └─ {{CartPromotionResponse}}
          ├─ {{Data}}
          │   ├─ {{ResponseId}} (string)
          │   ├─ {{ResponseName}} (string)
          │   ├─ {{ResponseOrgId}} (integer)
          │   ├─ {{ResponseType}} (string)
          │   ├─ {{ResponseActive}} (boolean)
          │   ├─ {{CreatedBy}} (long)
          │   ├─ {{CreatedOn}} (long)
          │   └─ {{LastUpdatedOn}} (long)
          ├─ {{Errors}} []
          │   ├─ {{ErrorCode}} (integer)
          │   └─ {{ErrorMessage}} (string)
          └─ {{Warnings}} []
              └─ {{WarningMessage}} (string)
```

# Prerequisites

* Authentication: Basic or OAuth authentication.
* Default access group

# Path parameters

| Field        | Type   | Required | Description                                                                                                                                   |
| :----------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| Promotion id | String | Yes      | Indicates the unique identifier of the promotion. This is returned in the `data.id` field of the promotion payload during promotion creation. |

# Body parameters

This table describes the top-level fields required to create any type of cart promotion.

| Field                      | Type    | Required    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Updatable   |
| :------------------------- | :------ | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| name                       | String  | Yes         | Indicates a unique name of the cart promotion. Character limit: 1-50.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes         |
| type                       | Enum    | Yes         | Specifies the type of cart promotion. Supported values are: - POS (Point of Sale): Applies automatically at checkout when cart or purchase conditions are met. Constrain: If a POS cart promotion is not restricted to loyal customers (isLoyaltyOnly is false), it cannot have Customer level restrictions. - CODE: Requires the customer to enter a cart promotion code for redemption. Constrain: Code cart promotions cannot have Customer level restrictions. They also require Code level restrictions to be present. - CUSTOMER: Targets specific customer segments or individuals based on attributes or behaviour. - EARNING: Grants rewards (such as points or benefits) when earning conditions are fulfilled. - REWARD: Offers a direct reward, such as a discount or complimentary item, upon meeting specific conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | No          |
| messageLabel               | String  | Optional    | Specifies a label for the cart promotion message. There is no character limit set for labels. Example: SummerSale2025.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Yes         |
| active                     | Boolean | Yes         | Indicates if the cart promotion is active. Supported values: true, false. Default value is true. Note: Use the activate/deactivate endpoints to change status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | No          |
| priority                   | Integer | Yes         | Specifies the order in which cart promotions are applied. Lower numbers have higher priority, with 0 being the highest. Example: If there are three promotions—A (priority 0), B (priority 1), and C (priority 2), the order of application will be A, then B, then C. Note: If customerActivationRequired is enabled, the priority order does not apply until the customer activates the promotion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes         |
| isStackable                | Boolean | Yes         | Indicates whether this cart promotion can be used with other cart promotions. Supported values: true, false. Default: false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes         |
| startDate                  | Long    | Yes         | Specifies the date and time when the cart promotion becomes active, as a Unix epoch timestamp in milliseconds (UTC). Example: 1757388651000 corresponds to 2025-09-12 06:30:51 UTC. Note: This field will be deprecated in the future and is being replaced by `startDateISO`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes         |
| startDateISO               | String  | Conditional | Defines the date and time when the cart promotion becomes active in ISO 8601 format, including the region offset. For example: The start date is at 14:30:45 on December 16, 2025, in India. Format for the request parameter: 2025-12-16T14:30:45+05:30.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes         |
| endDate                    | Long    | Conditional | Specifies the end date and time when the cart promotion expires, as a Unix epoch timestamp in milliseconds (UTC). Example: 1726123456789 corresponds to 2024-09-12 10:24:16 UTC. Note: This field will be deprecated in the future and is being replaced by `endDateISO`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes         |
| endDateISO                 | String  | Conditional | Defines the end date and time when the cart promotion expires in ISO 8601 format, including the region offset. For example: The expiration date is at 14:30:45 on December 16, 2025, in India. Format for the request parameter: 2025-12-16T14:30:45+05:30.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes         |
| campaignId                 | String  | Yes         | Specifies the unique identifier of the campaign that the cart promotion is linked to. Example: 12345. There is no validation for the campaign ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes         |
| condition                  | Object  | Yes         | Specifies the rules that determine how the cart promotion applies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes         |
| ..type                     | Enum    | Yes         | [CART](https://docs.capillarytech.com/reference/create-cart-promotion-api#when-the-promotions-condition-type-is-cart): Conditions based on the entire shopping cart's properties, like its total value or item count. Example: “Get $10 off when your subtotal is over $100.” [TENDER](https://docs.capillarytech.com/reference/create-cart-promotion-api#when-the-promotions-condition-type--is-tender): Conditions based on the customer's specific method of payment. Constrain: A TENDER condition must be paired with a TENDER action, and vice-versa. [COMBO\_PRODUCT](https://docs.capillarytech.com/reference/create-cart-promotion-api#when-the-promotions-condition-type--is-combo_product): Conditions based on multiple specific products being purchased together. [PRODUCT](https://docs.capillarytech.com/reference/create-cart-promotion-api#cart-promotion-with-the-promotions-condition-type-as-product): Conditions based on a specific group of products, evaluated by quantity or total value. [PAYMENT\_MODE\_SCOPE](https://docs.capillarytech.com/reference/update-cart-promotion-details_#cart-promotion-with-condition-type-payment_mode_scope): Conditions based on a specific payment method used with a nested PRODUCT or CART condition. [PAYMENT\_MODE\_COMBO\_PRODUCT](https://docs.capillarytech.com/reference/update-cart-promotion-details_#cart-promotion-with-condition-type-payment_mode_combo_product): Conditions based on a specific payment method used with a nested COMBO\_PRODUCT condition. [PAYMENT\_MODE](https://docs.capillarytech.com/reference/update-cart-promotion-details_#cart-promotion-with-condition-type-payment_mode): Conditions based solely on a specific payment method, without any nested condition. See the [“Condition Objects” tables](https://docs.capillarytech.com/reference/create-cart-promotion-api#condition-objects) below for the full structure. | Yes         |
| action                     | Object  | Yes         | Specifies what happens when the cart promotion is applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes         |
| customerActivationRequired | Boolean | Optional    | Indicates if a customer must opt-in for a cart promotion before it can be redeemed. If true, the cart promotion is issued as `INACTIVE` and requires a customer action to become `ACTIVE`. Constraint: Cannot be changed if the promotion has already started (StartDate < Now).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Conditional |
| maxIssuancePerCustomer     | Integer | Optional    | Defines the total number of times this cart promotion can be issued to a single customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes         |
| promotionRestrictions      | Object  | Optional    | Defines usage limits on the cart promotion, grouped by level: Customer, Cart, Promotion, Code. See the “Promotion Restrictions Object” table below for the full structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes         |
| customFieldValues          | Object  | Optional    | Defines a key-value map for storing custom metadata. The structure is user-defined (e.g., \{“key”: “value”}).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Yes         |
| earningCriteria            | Object  | Conditional | Defines the conditions for earning a reward. Required when type is EARNING. See the “Earning Criteria Object” table below for the full structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes         |
| maxEarningPerCustomer      | Integer | Optional    | Specifies the maximum number of times a customer can earn the reward from an EARNING type cart promotion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes         |
| storeCriteria              | Object  | Optional    | Limits the promotion to specific stores, zones, or concepts. See the “Store Criteria Object” section for the full structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes         |
| timeCriteria               | Object  | Optional    | Restricts the promotion to specific days of the week or hours of the day. See the “Time Criteria Object” section for the full structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Yes         |
| supplementaryCriteria      | Object  | Optional    | Targets the promotion to customers in a specific loyalty tier or subscription program. See the “Supplementary Criteria Object” section for the full structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes         |

## Condition Objects (Rules that determine how the cart promotion applies)

The condition object must contain a type field (CART, TENDER, or COMBO\_PRODUCT) which determines its structure.

### Cart promotion with the cart promotions condition type as `CART`

| Field          | Type   | Required | Description                                                                            | Updatable |
| :------------- | :----- | :------- | :------------------------------------------------------------------------------------- | :-------- |
| .cartCondition | Object | Yes      | Defines rules that apply to the entire shopping cart.                                  | Yes       |
| ..kpi          | Enum   | Yes      | Metric to evaluate. **Supported**: `SUBTOTAL`, `ITEMCOUNT`.                            | Yes       |
| ..operator     | Enum   | Yes      | Comparison operator. **Supported**: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`. | Yes       |
| ..value        | Number | Yes      | The number to compare against. **Example**: 250.                                       | Yes       |

### Example request

##### **Requirement:** The brand has set up a cart promotion, "Spend $100, Get $10 Off," with the condition that if the cart's subtotal is greater than or equal to $100, a fixed discount of $10 is applied to the entire cart.

Update requirement : Update the discount value to $25

```json
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/691db5e8d39e256f754adebe' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhMjI2MTk1OGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=YV2a56AO81MbffOHN.iaUZSHrzW2CTxKsIRt7smuhRk-1763554178883-0.0.1.1-604800000' \
--data '{
  "name": "Spend 100 Get 10 Offer",
  "orgId": 100737,
  "type": "CUSTOMER",
  "messageLabel": "Get $10 off on orders over $100!",
  "active": true,
  "priority": 0,
  "isStackable": false,
  "startDate": 1759363200000,
  "endDate": 1790985600000,
  "campaignId": "286039",
  "condition": {
    "type": "CART",
    "cartCondition": {
      "kpi": "SUBTOTAL",
      "operator": "GREATER_THAN_OR_EQUAL",
      "value": 100
    }
  },
  "action": {
    "type": "CART_BASED",
    "cartBasedAction": {
      "type": "ABSOLUTE",
      "value": 25
    }
  },
  "customerActivationRequired": true,
  "maxIssuancePerCustomer": 1,
  "promotionRestrictions": {},
  "customFieldValues": {}
}'
```

### Cart promotion with the cart promotions condition type as `TENDER`

| Field               | Type   | Required    | Description                                                                                                                                                                                                                                                                                                                                                                                      | Updatable |
| :------------------ | :----- | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .tenderCondition    | Object | Yes         | Defines rules based on the customer's method of payment.                                                                                                                                                                                                                                                                                                                                         | Yes       |
| ..tenderModes       | Array  | Yes         | Lists specific payment modes that trigger this condition.                                                                                                                                                                                                                                                                                                                                        | Yes       |
| ...type             | String | Yes         | Specifies the general payment category. Supported values: `CARD`, `CASH`, `PAYMENT_VOUCHER`.                                                                                                                                                                                                                                                                                                     | Yes       |
| ...identifiers      | Array  | Conditional | Lists exact payment identifiers. For example, \[“VISA\_CARD”]. Required when the type is `CARD` or `PAYMENT_VOUCHER`.                                                                                                                                                                                                                                                                            | Yes       |
| ..condition         | Object | Conditional | Defines an additional condition that must also be met for this rule to apply. Required when `tenderModes[].type` is `CARD` or `CASH`. Must not be set when `tenderModes[].type` is `PAYMENT_VOUCHER`, as the condition is inherited from the voucher. Example - You want a cart promotion to apply only when a customer pays by card and the cart subtotal is greater than $500.                 | Yes       |
| ...type             | Enum   | Yes         | Specifies the type of nested condition. Supported values: `CART`, `PRODUCT`.                                                                                                                                                                                                                                                                                                                     | Yes       |
| ...cartCondition    | Object | Conditional | Defines rules based on specific products. Required when condition.type is `CART`. Example: You want a cart promotion to apply only when the customer pays by cash and buys at least 2 units of a specific product. Defines rules based on the overall cart, such as subtotal or item count. Example: Apply a $20 discount when the customer pays with a credit card and the cart subtotal ≥ $50. | Yes       |
| ....kpi             | Enum   | Yes         | Defines the metric to evaluate the cart. Supported values: `SUBTOTAL`, `ITEMCOUNT`.                                                                                                                                                                                                                                                                                                              | Yes       |
| ....operator        | Enum   | Yes         | Defines how to compare the metric. Supported values: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`.                                                                                                                                                                                                                                                                                          | Yes       |
| ....value           | Number | Yes         | The number to compare against.                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| ...productCondition | Object | Conditional | Defines rules based on specific products. Required when condition.type is `PRODUCT`. Example: Apply a $100 discount when the customer pays with a VISA card and buys at least 2 items from the “Paint Supplies” category.                                                                                                                                                                        | Yes       |
| ....criteriaList    | Array  | Yes         | Lists criteria that identify the products targeted by this condition.                                                                                                                                                                                                                                                                                                                            | Yes       |
| ....kpi             | Enum   | Yes         | Specifies the product-level metric. Supported values: `NONE`, `QUANTITY`.                                                                                                                                                                                                                                                                                                                        | Yes       |
| ....operator        | Enum   | Conditional | Defines how to compare the product metric. Supported value: `EQUALS`.                                                                                                                                                                                                                                                                                                                            | Yes       |
| ....value           | String | Conditional | Specifies the target value for the comparison.                                                                                                                                                                                                                                                                                                                                                   | Yes       |

### Example request

##### **Requirement: 1**

The brand established a cart promotion, "Pay with VISA card, Get $20 Off on Orders Above $100," which stipulated that if a customer's cart subtotal was $\geq $100$ and they paid with a VISA card, an absolute discount of $$20$ would be applied. The brand now wants to update the promotion to "Cash Discount on Paint Supplies," by changing the tender condition to Cash, requiring the purchase of at least one item from the "Paint Supplies" category, and setting the discount value to $$5$.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=9769067-0.0.1.1-604800000; _cfuvid=5O_PtucI3YnfDUgjgMPnHbPeEKcKJjaHWDOkNDip3Po-1760116657904-0.0.1.1-604800000' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhMjI2MTk1OGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--data '{
  "name": "Cash Discount on Paint Supplies5",
  "orgId": 100737,
  "type": "CUSTOMER",
  "messageLabel": "Pay with Cash and Get $5 Off Paint Supplies",
  "active": true,
  "priority": 0,
  "isStackable": false,
  "startDate": 1759363200000,
  "endDate": 1790985600000,
  "campaignId": "286039",
  "condition": {
    "type": "TENDER",
    "tenderCondition": {
      "tenderModes": [
        {
          "type": "CASH"
        }
      ],
      "condition": {
        "type": "PRODUCT",
        "productCondition": {
          "criteriaList": [
            {
              "entity": "CATEGORY",
              "values": [
                "Paint Supplies"
              ],
              "operator": "IN"
            }
          ],
          "kpi": "QUANTITY",
          "operator": "GREATER_THAN_OR_EQUAL",
          "value": "1"
        }
      }
    }
  },
  "action": {
    "type": "TENDER",
    "tenderBasedAction": {
      "type": "ABSOLUTE",
      "value": "5"
    }
  },
  "customerActivationRequired": false,
  "maxIssuancePerCustomer": 1,
  "promotionRestrictions": {},
  "customFieldValues": {}
}'
```

##### **Requirement 2**:

The brand has set up a cart promotion, "Pay with Cash, Get $5 Off Paint Supplies," with conditions that if a customer buys at least one item from the "Paint Supplies" category and pays with cash, an absolute discount of $$5$ is applied. The brand now wants to update the promotion to "Cash Discount on Paint Supplies," requiring the customer to pay with Cash and purchase at least one item from the "Paint Supplies" category to receive a fixed discount of $5.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=5O_PtucI3YnfDUgjgMPnHbPeEKcKJjaHWDOkNDip3Po-1760116657904-0.0.1.1-604800000' \
--data '{
  "name": "Cash Discount on Paint Supplies21",
  "orgId": 100737,
  "type": "CUSTOMER",
  "messageLabel": "Pay with Cash and Get $5 Off Paint Supplies",
  "active": true,
  "priority": 0,
  "isStackable": false,
  "startDate": 1759363200000,
  "endDate": 1790985600000,
  "campaignId": "286039",
  "condition": {
    "type": "TENDER",
    "tenderCondition": {
      "tenderModes": [
        {
          "type": "CASH"
        }
      ],
      "condition": {
        "type": "PRODUCT",
        "productCondition": {
          "criteriaList": [
            {
              "entity": "CATEGORY",
              "values": [
                "Paint Supplies"
              ],
              "operator": "IN"
            }
          ],
          "kpi": "QUANTITY",
          "operator": "GREATER_THAN_OR_EQUAL",
          "value": "1"
        }
      }
    }
  },
  "action": {
    "type": "TENDER",
    "tenderBasedAction": {
      "type": "ABSOLUTE",
      "value": "5"
    }
  },
  "customerActivationRequired": false,
  "maxIssuancePerCustomer": 1,
  "promotionRestrictions": {},
  "customFieldValues": {}
}'
```

### Cart promotion with the cart promotions condition type as `COMBO_PRODUCT`

| Field                  | Type   | Required    | Description                                                                                                                                                                                                           | Updatable |
| :--------------------- | :----- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .comboProductCondition | Object | Yes         | Defines rules that require specific product combinations to qualify for the cart promotion. Example: A customer must buy one brush and one tube of Brand A toothpaste.                                                | Yes       |
| ..productConditions    | Array  | Yes         | List of product condition objects. All listed conditions must be met for the cart promotion to apply. The maximum number of product conditions that you can set is 100.                                               | Yes       |
| ...kpi                 | Enum   | Yes         | Metric used to evaluate each condition. Supported values: `NONE`, `QUANTITY`. QUANTITY checks how many qualifying products are in the cart.                                                                           | Yes       |
| ...operator            | Enum   | Conditional | Comparison logic for evaluating the metric. Supported values: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`.                                                                                                      | Yes       |
| ...value               | String | Conditional | Target value for the comparison. The value should in number. If kpi is `QUANTITY`, operator is `GREATER_THAN_OR_EQUAL`, and value is 2, the condition applies when the cart contains two or more qualifying products. | Yes       |
| ...criteriaList        | Array  | Yes         | Defines which products or attributes are part of the condition. Example: Products where entity = PRODUCT\_NAME and values = \["Paint Brush"]. You can specify up to 250 SKUs (values) in a single condition.          | Yes       |
| ....entity             | String | Yes         | Product attribute to evaluate. Example: `PRODUCT_NAME`, `BRAND`, or `CATEGORY`. This should match with the line item names in the Add Transaction API payload.                                                        | Yes       |
| ....operator           | Enum   | Yes         | Defines how attribute values are compared. Supported values: `IN`, `NOT_IN`. Example: IN checks if the product belongs to the specified brand or category.                                                            | Yes       |
| ....values             | Array  | Yes         | List of attribute values to match against the entity.                                                                                                                                                                 | Yes       |

### Example request

##### **Requirement:**

The brand has set up a cart promotion, "Buy a Burger and Fries, Get 15% Off," with conditions that if a customer's cart contains at least one item from the "Burgers" category and at least one item from the "Fries" category, a $15%$ discount is applied to those specific items. The brand now wants to update the promotion to require the purchase of 2 Burgers and 2 Fries, and increase the discount value to $20%$.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY22NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=5O_PtucI3YnfcKJjaHWDOkNDip3Po-1760116657904-0.0.1.1-604800000' \
--data '{
  "name": "Burger and Fries Combo Discount",
  "orgId": 100737,
  "type": "CUSTOMER",
  "messageLabel": "Get 15% off our Burger and Fries Combo!",
  "active": true,
  "priority": 0,
  "isStackable": false,
  "startDate": 1759363200000,
  "endDate": 1790985600000,
  "campaignId": "286039",
  "condition": {
    "type": "COMBO_PRODUCT",
    "comboProductCondition": {
      "productConditions": [
        {
          "kpi": "QUANTITY",
          "operator": "GREATER_THAN_OR_EQUAL",
          "value": "1",
          "criteriaList": [
            {
              "entity": "CATEGORY",
              "operator": "IN",
              "values": [
                "Burgers"
              ]
            }
          ]
        },
        {
          "kpi": "QUANTITY",
          "operator": "GREATER_THAN_OR_EQUAL",
          "value": "1",
          "criteriaList": [
            {
              "entity": "CATEGORY",
              "operator": "IN",
              "values": [
                "Fries"
              ]
            }
          ]
        }
      ]
    }
  },
  "action": {
    "type": "PRODUCT_BASED",
    "productBasedAction": {
      "type": "PERCENTAGE",
      "value": "20.00",
      "productBasedCondition": {
        "type": "COMBO_PRODUCT",
        "comboProductCondition": {
          "productConditions": [
            {
              "kpi": "QUANTITY",
              "operator": "GREATER_THAN_OR_EQUAL",
              "value": "2",
              "criteriaList": [
                {
                  "entity": "CATEGORY",
                  "operator": "IN",
                  "values": [
                    "Burgers"
                  ]
                }
              ]
            },
            {
              "kpi": "QUANTITY",
              "operator": "GREATER_THAN_OR_EQUAL",
              "value": "2",
              "criteriaList": [
                {
                  "entity": "CATEGORY",
                  "operator": "IN",
                  "values": [
                    "Fries"
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  },
  "customerActivationRequired": true,
  "maxIssuancePerCustomer": 1,
  "promotionRestrictions": {},
  "customFieldValues": {}
}'
```

### Cart promotion with the cart promotion's condition type as PRODUCT

This condition type triggers a cart promotion based on the presence, quantity, or total value of specific products or product groups within the cart.

| Field             | Type   | Required    | Description                                                                                                                     | Updatable |
| :---------------- | :----- | :---------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------- |
| .productCondition | Object | Yes         | Defines rules that apply to specific products in the shopping cart.                                                             | Yes       |
| ..criteriaList    | Array  | Yes         | Defines the specific products that must be present in the cart to satisfy the condition.                                        | Yes       |
| ...entity         | String | Yes         | The product attribute to evaluate. Example: `SKU`, `BRAND`, or `CATEGORY`.                                                      | Yes       |
| ...operator       | Enum   | Yes         | Defines how attribute values are compared. Supported: `IN`, `NOT_IN`.                                                           | Yes       |
| ...values         | Array  | Yes         | List of attribute values to match against the entity. You can specify up to 250 SKUs (values) in a single condition.            | Yes       |
| ..kpi             | Enum   | Yes         | Metric used to evaluate the matching products. Supported: `NONE`, `QUANTITY`, `AMOUNT`.                                         | Yes       |
| ..operator        | Enum   | Conditional | Comparison logic for the metric. Supported: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`. Required if `kpi` is not `NONE`. | Yes       |
| ..value           | String | Conditional | Target value for the comparison. Required if `kpi` is not `NONE`.                                                               | Yes       |

##### **Requirement**:

The brand wants to set up a cart promotion, "Buy 2 'Paint Supplies', Get $15 Off Your Order," with the condition that if the cart contains at least two items from the "Paint Supplies" category, a fixed discount of $$15$ is applied to the entire cart. The brand now wants to update the promotion to "Buy 3 Paint Supplies Get 25% Off," requiring the purchase of exactly 3 items from the "Paint Supplies" category to receive a fixed discount of $15.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRW86Mm5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=5O_PtucI3YnHbPip3Po-1760116657904-0.0.1.1-604800000' \
--data '{
    "name": "Buy 2 Paint Supplies Get 15 Off",
    "type": "CUSTOMER",
    "messageLabel": "Get $15 off when you buy two paint supplies!",
    "active": true,
    "priority": 0,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "PRODUCT",
        "productCondition": {
            "criteriaList": [
                {
                    "entity": "CATEGORY",
                    "operator": "IN",
                    "values": [
                        "Paint Supplies"
                    ]
                }
            ],
            "kpi": "QUANTITY",
            "operator": "EQUALS",
            "value": "3"
        }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": {
            "type": "ABSOLUTE",
            "value": 25
        }
    },
    "customerActivationRequired": false,
    "maxIssuancePerCustomer": 1,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'\'''
```

### Cart promotion with condition type `PAYMENT_MODE_SCOPE`

This condition type combines payment using Points with a product or cart condition that will trigger the promotion benefits. For example, "Pay with Points to get 60% off on ChocoBrand biscuit."

| Field                             | Type   | Required    | Description                                                                                                                                                                                  | Updatable |
| :-------------------------------- | :----- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .paymentModeScopeConditionRO      | Object | Yes         | Defines the main container object for a payment condition.                                                                                                                                   | Yes       |
| ..paymentModeConditionRO          | Object | Yes         | Defines the specific payment method rules that will trigger the promotion.                                                                                                                   | Yes       |
| ...paymentModeSelectionCriteriaRO | Object | Yes         | Specifies the specific criteria for selecting the payment mode.                                                                                                                              | Yes       |
| ....operator                      | Enum   | Yes         | Indicates the logical operator for the values list. Supported values: `IN`: Contains at least one item from the specified values. `NOT_IN`: Does not contain item from the specified values. | Yes       |
| ....values                        | Array  | Yes         | Defines an array of payment mode objects that are allowed.                                                                                                                                   | Yes       |
| .....type                         | String | Yes         | Specifies the category of the payment method. Supported: `CARD`. `CARD` is always used as a payment type when the payment method is Points.                                                  | Yes       |
| .....identifiers                  | Array  | Yes         | Specifies the payment identifier. Supported: `POINTS`                                                                                                                                        | Yes       |
| ..condition                       | Object | Yes         | Indicates a standard subcondition/nested condition that must also be met for the promotion to be applied.                                                                                    | Yes       |
| ...type                           | Enum   | Yes         | Defines the type of the nested condition. Supported: `PRODUCT`: Condition is based on a specific product. `CART`: Condition is based on the overall cart.                                    | Yes       |
| ...productCondition               | Object | Conditional | Specifies the product condition details. Required if the condition type is `PRODUCT`.                                                                                                        | Yes       |
| ....criteriaList                  | Array  | Yes         | Defines the specific products that must be in the cart to satisfy the condition.                                                                                                             | Yes       |
| .....entity                       | String | Yes         | Specifies the product attribute to evaluate. Supported values: `SKU`, `BRAND`, `ATTRIBUTE`, `CATEGORY`.                                                                                      | Yes       |
| .....operator                     | Enum   | Yes         | Defines how attribute values are compared. Supported: `IN`, `NOT_IN`.                                                                                                                        | Yes       |
| .....values                       | Array  | Yes         | Defines values to match against the product. Supports up to 250 values.                                                                                                                      | Yes       |
| ....kpi                           | Enum   | Yes         | Defines the metric used to evaluate the matching products. Supported: `NONE`, `QUANTITY`, `AMOUNT`.                                                                                          | Yes       |
| ....operator                      | Enum   | Conditional | Defines the comparison logic for the metric. Required if KPI is not `NONE`. Supported: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`.                                                    | Yes       |
| ....value                         | Number | Conditional | Specifies the target value for the comparison. Required if KPI is not `NONE`.                                                                                                                | Yes       |
| ...cartCondition                  | Object | Conditional | Defines the cart condition details. Required if ..condition.type is `CART`.                                                                                                                  | Yes       |
| ....kpi                           | Enum   | Yes         | Defines the metric to evaluate the entire cart. Supported: `SUBTOTAL`, `ITEMCOUNT`.                                                                                                          | Yes       |
| ....operator                      | Enum   | Yes         | Indicates the comparison operator. Supported: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`.                                                                                             | Yes       |
| ....value                         | Number | Yes         | Specifies the number to compare the cart's KPI against.                                                                                                                                      | Yes       |

**Constraints:**

* The promotion's top-level `mode` must be `DISCOUNT`.
* The nested `condition.type` must be `PRODUCT` or `CART`.
* `CART_BASED` action is not allowed. Use `PRODUCT_BASED` or `PER_UNIT`.

### Cart promotion with condition type `PAYMENT_MODE_COMBO_PRODUCT`

This condition type combines payment using Points with a combo product condition. For example, "Buy Coke & ChocoBrand biscuit with Points payment mode, and get 50% off on Maggi noodles."

| Field                             | Type   | Required    | Description                                                                                                                    | Updatable |
| :-------------------------------- | :----- | :---------- | :----------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .paymentComboProductConditionRO   | Object | Yes         | Specifies the main container object for a payment based combo condition.                                                       | Yes       |
| ..tenderCondition                 | Object | Yes         | Defines the specific payment method rules required to trigger the promotion.                                                   | Yes       |
| ...paymentModeSelectionCriteriaRO | Object | Yes         | Specifies the criteria for selecting the payment mode.                                                                         | Yes       |
| ....operator                      | Enum   | Yes         | Indicates the logical operator for the values list. Supported values: `IN`, `NOT_IN`.                                          | Yes       |
| ....values                        | Array  | Yes         | Defines an array of payment mode objects to check against.                                                                     | Yes       |
| .....type                         | String | Yes         | Specifies the category of the payment method. Supported: `CARD`.                                                               | Yes       |
| .....identifiers                  | Array  | Yes         | Defines the specific payment identifiers. Supported: `POINTS`.                                                                 | Yes       |
| ..comboProductCondition           | Object | Yes         | Defines the combo product condition. All product conditions listed inside must be fulfilled for the promotion to be triggered. | Yes       |
| ...productConditions              | Array  | Yes         | Defines the list of product rules that make up the combo. Each object in this list is one part of the combo.                   | Yes       |
| ....criteriaList                  | Array  | Yes         | Defines the specific products that must be in the cart for this part of the combo.                                             | Yes       |
| .....entity                       | String | Yes         | Specifies the product attribute to evaluate. Supported: `SKU`, `BRAND`, `ATTRIBUTE`, `CATEGORY`.                               | Yes       |
| .....operator                     | Enum   | Yes         | Defines how attribute values are compared. Supported: `IN`, `NOT_IN`.                                                          | Yes       |
| .....values                       | Array  | Yes         | Defines values to match against the product. Supports up to 250 values.                                                        | Yes       |
| ....kpi                           | Enum   | Yes         | Specifies the metric for evaluating the matching products. Supported: `NONE`, `QUANTITY`, `AMOUNT`.                            | Yes       |
| ....operator                      | Enum   | Conditional | Comparison logic for the kpi. Required if kpi is not `NONE`. Supported: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`.     | Yes       |
| ....value                         | Number | Conditional | Specifies the target value. Required if kpi is not `NONE`.                                                                     | Yes       |

**Constraints:**

* The promotion's top-level `mode` must be `DISCOUNT`.
* `CART_BASED` action is not allowed. Use `PRODUCT_BASED`, `FREE_PRODUCT`, `FIXED_PRICE`, or `PER_UNIT`.

### Cart promotion with condition type `PAYMENT_MODE`

This condition type triggers a cart promotion based solely on the payment method used, without requiring any nested product or cart condition. For example, "Pay with Points to get 10% off your order."

| Field                            | Type   | Required | Description                                                                                                     | Updatable |
| :------------------------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------- | :-------- |
| .paymentModeConditionRO          | Object | Yes      | Defines the payment method rules that will trigger the promotion.                                               | Yes       |
| ..paymentModeSelectionCriteriaRO | Object | Yes      | Specifies the criteria for selecting the payment mode.                                                          | Yes       |
| ...operator                      | Enum   | Yes      | Indicates the logical operator for the values list. Supported values: `IN`, `NOT_IN`.                           | Yes       |
| ...values                        | Array  | Yes      | Defines the list of payment mode identifiers to match against. Supports up to 100 values. Example: `["POINTS"]` | Yes       |

**Constraints:**

* The promotion's top-level `mode` must be `DISCOUNT`.
* `CART_BASED` and `PER_UNIT` actions are not supported. Use `PAYMENT_MODE_SCOPE` or `PAYMENT_MODE_COMBO_PRODUCT` if you need a per-unit reward.

**Note**

* A PRODUCT condition checks for one set of products that meet a single criteria.
* A COMBO\_PRODUCT condition checks for multiple, distinct sets of products that must all be present in the cart together.

## Action Objects (specifies what happens when the cart promotion is applied)

The **action** object defines **what happens** when a cart promotion’s **condition** is met.
In simple terms:

* **Condition** = *When does the offer apply?*
* **Action** = *What benefit does the customer get?*

| Concept   | Purpose                                                                 | Example                                   |
| :-------- | :---------------------------------------------------------------------- | :---------------------------------------- |
| condition | Specifies the trigger criteria for the cart promotion.                  | When the cart subtotal is ₹1,000 or more. |
| action    | Specifies the reward action or benefit once the condition is satisfied. | Apply a ₹200 discount.                    |

### Action Types and Scenarios

#### 1. CART\_BASED

Applies a discount to the entire shopping cart when a cart-level condition is met.
**Example**: Give a $200 discount when the cart subtotal is $1,000 or more.

The condition checks the cart’s total value; the action applies the discount to the entire cart.

#### 2. TENDER

Applies a discount based on the customer’s **payment method**.
**Example**: Give a $100 discount when the customer pays using a VISA credit card.

The condition checks the payment type; the action applies a discount tied to that payment.

#### 3. PRODUCT\_BASED

A product-based action is used when the cart promotion applies a discount or reward action to specific products in the cart—not to the entire cart or a payment method. This action type is most commonly used for item-level offers, where the benefit depends on the products purchased or their attributes (such as category, brand, or quantity).

##### When to use it

* Apply a percentage or fixed amount discount on certain products.
* Offer discounts only on products that meet specific criteria, such as `category`, `brand`, or `SKU`.
* Reward a related product set, for example, “Buy product A, get a discount on product B.”
* Run category-level or brand-level cart promotions.

#### 4. FREE\_PRODUCT

Makes one or more specific items in the cart free of charge. This is the ideal action for "Buy X, Get Y Free" cart promotions.

**Example**: Buy a laptop and get a computer mouse for free.

The system identifies the product to be discounted and reduces its price to zero.

#### 5. FIXED\_PRICE

Changes the price of specific items to a set amount, regardless of their original price.

**Example**: Get any large pizza for $10.

The system finds the qualifying item and overrides its original price with the new fixed price.

#### 6. PER\_UNIT

Applies a reward action repeatedly for each qualifying group of items or value.
**Example**: Buy 2 Paint Buckets, get 1 Paint Brush free for every 2 buckets.

The condition checks the total quantity or amount, and the action applies a recurring reward action for each multiple of a defined value.

### Comparison Table

| Action Type    | When to Use It                                                 | What It Does                                                                       | Example cart Promotion                                           |
| :------------- | :------------------------------------------------------------- | :--------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| CART\_BASED    | When the discount applies to the entire cart total.            | Gives a single discount based on the total value of all items in the cart.         | Get $200 off when your cart total is $1,000 or more.             |
| TENDER         | When the reward action depends on the payment method used.     | Applies a discount if the customer uses a specific payment mode.                   | Pay with a VISA card and get $100 off your total bill.           |
| PRODUCT\_BASED | When you want to discount specific products or categories.     | Applies a fixed or percentage discount to particular items that meet set criteria. | Get 10% off all Paint Supplies.                                  |
| FREE\_PRODUCT  | For "Buy X, Get Y Free" offers.                                | Reduces the price of one or more specific items to zero.                           | Buy a laptop and get a computer mouse for free.                  |
| FIXED\_PRICE   | To sell an item or group of items at a specific special price. | Overrides the original price of an item with a new, set price.                     | Get any large pizza for $10.                                     |
| PER\_UNIT      | When the reward action should repeat per quantity or group.    | Applies benefits repeatedly for each qualifying group of items or value.           | Buy 2 Paint Buckets, get 1 Paint Brush free for every 2 buckets. |

### When the cart promotions action type is CART\_BASED

| Field            | Type   | Required | Description                                                                                                                                                                                                                                                                                   |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .cartBasedAction | Object | Yes      | Defines a reward action or discount that applies to the entire shopping cart once the cart promotion’s condition is met. It’s used when the benefit is calculated at the cart level, not per product or payment type. Example:Apply a $200 discount when the cart subtotal is $1,000 or more. |
| ..type           | Enum   | Yes      | Type of action. Supported value: `ABSOLUTE` (fixed monetary discount).                                                                                                                                                                                                                        |
| ..value          | Number | Yes      | Fixed monetary amount for the discount.                                                                                                                                                                                                                                                       |

##### **Requirement**:

The brand has set up a cart promotion, "Spend $100, Get $10 Off," with the condition that if the cart's subtotal is greater than or equal to $$100$, a fixed discount of $$10$ is applied to the entire cart. The brand now wants to update the promotion to "Spend $200, Get $20 Off," with the condition that if the cart's subtotal is greater than or equal to $$200$, a fixed discount of $$20$ is applied to the entire cart.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuv_vSE54e.Ky_kOxQM.ixIiU-1760115687488-0.0.1.1-604800000' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW81OGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--data '{
  "name": "Spend 200 Get 20 Off",
  "orgId": 100737,
  "type": "CUSTOMER",
  "messageLabel": "Get $20 off on orders over $200!",
  "active": true,
  "priority": 0,
  "isStackable": false,
  "startDate": 1759363200000,
  "endDate": 1790985600000,
  "campaignId": "286039",
  "condition": {
    "type": "CART",
    "cartCondition": {
      "kpi": "SUBTOTAL",
      "operator": "GREATER_THAN_OR_EQUAL",
      "value": 200
    }
  },
  "action": {
    "type": "CART_BASED",
    "cartBasedAction": {
      "type": "ABSOLUTE",
      "value": 20
    }
  },
  "customerActivationRequired": true,
  "maxIssuancePerCustomer": 1,
  "promotionRestrictions": {},
  "customFieldValues": {}
}'
```

### When the cart promotions action type is TENDER

| Field              | Type   | Required | Description                                                                                                                                                                                                                                                  | Updatable |
| :----------------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .tenderBasedAction | Object | Yes      | Defines a reward action or discount that applies when the customer uses a specific payment method (tender) during checkout. It’s used for conditions tied to cards  or cash payments. Apply a $100 discount when the customer pays using a VISA credit card. | Yes       |
| ..type             | Enum   | Yes      | Specifies how the discount or reward action amount is calculated. Supported value: `ABSOLUTE`, `PERCENTAGE`.                                                                                                                                                 | Yes       |
| ..value            | String | Yes      | Specifies the amount discount to apply in numbers. Example: If the value is $20, the system applies a fixed discount for example, $20 off.                                                                                                                   | Yes       |

##### **Requirement**

The brand has set up a cart promotion, "Pay with VISA, Get $20 Off on Orders Above $100," with conditions that if a customer's cart subtotal is greater than or equal to $$100$ and they pay with a VISA card, an absolute discount of $$20$ is applied. The brand now wants to update the promotion by changing the fixed discount value from $20 to $30.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlI5ZjAxMzU5NGIwkNDip3Po-1760116657904-0.0.1.1-604800000' \
--data '{
  "name": "VISA Discount on Cart Total",
  "orgId": 100737,
  "type": "CUSTOMER",
  "messageLabel": "Get $20 off with VISA on orders above $100",
  "active": true,
  "priority": 0,
  "isStackable": false,
  "startDate": 1759363200000,
  "endDate": 1790985600000,
  "campaignId": "286039",
  "condition": {
    "type": "TENDER",
    "tenderCondition": {
      "tenderModes": [
        {
          "type": "CARD",
          "identifiers": [
            "VISA_CARD"
          ]
        }
      ],
      "condition": {
        "type": "CART",
        "cartCondition": {
          "kpi": "SUBTOTAL",
          "operator": "GREATER_THAN_OR_EQUAL",
          "value": 100
        }
      }
    }
  },
  "action": {
    "type": "TENDER",
    "tenderBasedAction": {
      "type": "ABSOLUTE",
      "value": "30"
    }
  },
  "customerActivationRequired": true,
  "maxIssuancePerCustomer": 1,
  "promotionRestrictions": {},
  "customFieldValues": {}
}'
```

### When the cart promotions action type is PRODUCT\_BASED

| Field                          | Type    | Required    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Updatable |
| :----------------------------- | :------ | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .productBasedAction            | Object  | Yes         | Defines a discount or reward action applied to specific products that meet defined criteria. Example: Apply a 10% discount on Paint Supplies.                                                                                                                                                                                                                                                                                                                                        | Yes       |
| ..type                         | Enum    | Yes         | Defines how the discount is calculated. Supported values: `ABSOLUTE` (fixed amount), `PERCENTAGE` (percentage-based). Example: type = PERCENTAGE applies 10% off.                                                                                                                                                                                                                                                                                                                    | Yes       |
| ..value                        | Number  | Yes         | Specifies the amount or percentage of the discount. Example: value = 10 applies a 10% discount if type is PERCENTAGE, or $10 off if type is ABSOLUTE.                                                                                                                                                                                                                                                                                                                                | Yes       |
| ..includeItemsFromConditionSet | Boolean | Yes         | Controls whether the action benefit applies to the same items that satisfied the cart promotion trigger (`true`) or to a different target set defined by productBasedCondition (`false`). Example (true): “Buy 10 A, get $100 off those 10 A.” Example (false): “Buy 10 A, get $100 off B.”                                                                                                                                                                                          | Yes       |
| ..productBasedCondition        | Object  | Yes         | Defines the set of products to which the action's benefit will be applied. The main condition decides when the cart promotion should trigger and the action-level condition here decides which products and  the benefit applies to once it triggers.                                                                                                                                                                                                                                | Yes       |
| ...type                        | Enum    | Yes         | Specifies how target products are grouped. Supported values: `PRODUCT`, `COMBO_PRODUCT`. Example: COMBO\_PRODUCT targets combinations like Paint + Brush.                                                                                                                                                                                                                                                                                                                            | Yes       |
| ...productCondition            | Object  | Conditional | Defines target products using product-level rules. Required if type = `PRODUCT`. Example: Apply discount to products in the “Paint Supplies” category.                                                                                                                                                                                                                                                                                                                               | Yes       |
| ....criteriaList               | Array   | Yes         | List of rules that specify which products are eligible. Example: entity = CATEGORY, values = \[“Paint Supplies”].                                                                                                                                                                                                                                                                                                                                                                    | Yes       |
| ....kpi                        | Enum    | Yes         | Metric used for filtering products. Supported values: `NONE`, `QUANTITY`. Example: QUANTITY = 2 means at least two products are required.                                                                                                                                                                                                                                                                                                                                            | Yes       |
| ....operator                   | Enum    | Conditional | Defines how the KPI is compared. Supported value: `EQUALS`. Example: EQUALS ensures the quantity exactly matches the target value.                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| ....value                      | String  | Conditional | Specifies the target number or value for the comparison. This should be defined in numbers. Example: value = “2” means exactly two items must be purchased.                                                                                                                                                                                                                                                                                                                          | Yes       |
| ...comboProductCondition       | Object  | Conditional | Defines the set of product combinations that receive the discount or reward action when the cart promotion is applied. It specifies which combo of products — such as a bundle or paired items — will get the benefit, based on the action’s configuration. If `includeItemsFromConditionSet` is true, the discount applies to the same combo that triggered the cart promotion. If` includeItemsFromConditionSet` is false, the discount applies to a different combo defined here. | Yes       |
| ....productConditions          | Array   | Yes         | List of product condition objects. All listed conditions must be met for the discount to apply. Example: One Paint Brush and one ColorCo product.                                                                                                                                                                                                                                                                                                                                    | Yes       |
| .....kpi                       | Enum    | Yes         | Metric used for evaluating combo conditions. Supported values: `NONE`, `QUANTITY`. Example: QUANTITY = 1 ensures each product is present at least once.                                                                                                                                                                                                                                                                                                                              | Yes       |
| .....operator                  | Enum    | Conditional | Logical operator. Supported values: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUA`L.                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| .....value                     | String  | Conditional | Numeric target for KPI comparison. This should be defiend in numbers. Example: value = “1” means at least one item must be present.                                                                                                                                                                                                                                                                                                                                                  | Yes       |
| .....criteriaList              | Array   | Yes         | Defines which products or attributes are included in the combo. Example: entity = PRODUCT\_NAME, values = \[“Paint Brush”].                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| ......entity                   | String  | Yes         | Product attribute to evaluate (e.g., SKU).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Yes       |
| ......operator                 | Enum    | Yes         | Defines how the attribute values are compared. Supported values: `IN`, `NOT_IN`. Example: IN checks if the product belongs to “Paint Supplies.”                                                                                                                                                                                                                                                                                                                                      | Yes       |
| ......values                   | Array   | Yes         | List of attribute values to match for inclusion. Example: values = \[“Paint Brush”, “ColorCo”].                                                                                                                                                                                                                                                                                                                                                                                      | Yes       |

##### **Requirement 1**:

The brand has set up a cart promotion where if a customer buys any laptop, they receive a $50%$ discount on an accessory bundle, which is defined as exactly one mouse and one keyboard, with the stipulation that if the cart contains more than one mouse or keyboard, the discount should only apply to one of each. The brand now wants to update the promotion by changing the discount value from $50%$ to $60%$.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmNDI3MGQ3YzI4ZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=m_cAUxdAS9kIldmFfEaOkagijzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data 'curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmNDI3MGQ3YzI4ZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=m_cAUxdAS9kIldmFfEaOkagijzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Laptop + Accessory Bundle Deal",
    "type": "POS",
    "messageLabel": "Buy a Laptop, Get 50% Off a Mouse & Keyboard!",
    "active": true,
    "priority": 5,
    "isStackable": false,
    "startDate": 1760332800000,
    "endDate": 1792031999000,
    "campaignId": "286039",
    "condition": {
        "type": "PRODUCT",                             
        "productCondition": {
            "criteriaList": [
                {
                    "entity": "CATEGORY",
                    "operator": "IN",
                    "values": ["Laptops"]             
                }
            ],
            "kpi": "QUANTITY",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "1"                              
        }
    },
    "action": {
        "type": "PRODUCT_BASED",                      
        "productBasedAction": {
            "type": "PERCENTAGE",                     
            "value": "60",                            
            "includeItemsFromConditionSet": false,    
            "productBasedCondition": {
                "type": "COMBO_PRODUCT",              
                "comboProductCondition": {
                    "productConditions": [            
                        {
                            "criteriaList": [
                                {
                                    "entity": "CATEGORY",
                                    "operator": "IN",
                                    "values": ["Mouse"] 
                                }
                            ],
                            "kpi": "QUANTITY",        
                            "operator": "EQUALS",     
                            "value": "1"              
                        },
                        {
                            "criteriaList": [
                                {
                                    "entity": "CATEGORY",
                                    "operator": "IN",
                                    "values": ["Keyboards"] 
                                }
                            ],
                            "kpi": "QUANTITY",        
                            "operator": "EQUALS",     
                            "value": "1"              
                        }
                    ]
                }
            }
        }
    }
}'\''''\'''
```

##### **Requirement 2**:

A brand wants to offer a "$25%$ Off Snacks" cart promotion, where the discount applies only to the first two snack items a customer buys (e.g., if a customer buys five snack items, only two will receive the $25%$ discount). The brand now wants to update the promotion to be applied to "Drinks" instead of "Snacks."

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmNDI3MGQ3YzI4ZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=m_cAUxdAS9kIldmFfEaOkagijzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "25 Percent Off First Two Snacks",
    "type": "POS",
    "messageLabel": "25% Off the first two snacks you buy!",
    "active": true,
    "priority": 1,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "PRODUCT",                             // Trigger: If the cart contains at least one snack.
        "productCondition": {
            "criteriaList": [
                {
                    "entity": "CATEGORY",
                    "operator": "IN",
                    "values": ["Drinks"]
                }
            ],
            "kpi": "QUANTITY",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "1"
        }
    },
    "action": {
        "type": "PRODUCT_BASED",                      // Action: Apply a discount to specific products.
        "productBasedAction": {
            "type": "PERCENTAGE",                     // The discount is 25%.
            "value": "25.00",
            "productBasedCondition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [                 // Rule: Find items in the "Snacks" category.
                        {
                            "entity": "CATEGORY",
                            "operator": "IN",
                            "values": [
                                "Drinks"
                            ]
                        }
                    ],
                    "kpi": "QUANTITY",                // KPI: Apply the discount based on the quantity of snacks.
                    "operator": "EQUALS",             // Logic: The quantity must be an exact match.
                    "value": "2"                      // Value: The discount applies to exactly TWO snack items.
                }
            }
        }
    },
    "customerActivationRequired": false,
    "maxIssuancePerCustomer": 10,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'\'''
```

### When the cart promotions action type is PER\_UNIT

| Field                            | Type    | Required    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Updatable |
| :------------------------------- | :------ | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------- |
| .perUnitAction                   | Object  | Yes         | Defines a reward action that can be applied repeatedly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes       |
| ..perUnitKPI                     | Enum    | Yes         | Metric used to group items. **Supported**: `QUANTITY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes       |
| ..perUnitDivider                 | String  | Yes         | Specifies a numerical value that specifies the minimum quantity of items that must be purchased before a specified action (such as a discount or free item)is repeated. [Example](https://docs.capillarytech.com/reference/create-cart-promotion-api#requirement-2-the-brand-wants-to-set-up-a-promotion-where-a-customer-buys-any-two-items-from-the-shirts-category-they-are-eligible-to-receive-one-item-from-the-ties-category-for-free) : Customer buys any two items from the 'Shirts' category, they are eligible to receive one item from the 'Ties' category for free Here the perUnitDivider will be 2, since every two item purchased is eligible for a free item repeatedly.                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| ..rewardAction                   | Object  | Yes         | Defines the specific benefit for each group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes       |
| ...type                          | Enum    | Yes         | Type of per-unit reward action. **Supported values** : \* `PRODUCT_BASED`: This action applies a direct discount (either a fixed amount or a percentage) to specific items., Example :A “25% Off All Snacks” cart promotion . When a customer adds any item from the “Snacks” category to their cart, the system applies a 25% discount to the price of just those snack items. \* `FREE_PRODUCT`:This action makes a specific item free, often as part of a “Buy X, Get Y” offer. Example : A “Buy 2 Shirts, Get 1 Free” cart promotion . When the system detects three items from the “Shirts” category in the cart, it identifies the cheapest one among them and reduces its price to zero, making it free. \* `FIXED_PRICE`:This action changes the price of a specific item to a set amount, regardless of its original price. Example: An “Any Large Pizza for $10” deal. When a customer adds any pizza from the “Large Pizzas” category to their cart, the system ignores its original price (e.g., $18) and changes it to the special fixed price of $10. | Yes       |
| ...productBasedAction            | Object  | Conditional | Required when `rewardAction.type` is `PRODUCT_BASED`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ....type                         | Enum    | Yes         | Calculation method. **Supported**: `ABSOLUTE`, `PERCENTAGE`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes       |
| ....value                        | Number  | Yes         | The amount or percentage of the discount.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Yes       |
| ....includeItemsFromConditionSet | Boolean | Yes         | Controls whether the action benefit applies to the same items that satisfied the cart promotion trigger (`true`) or to a different target set defined by productBasedCondition (`false`). Example (true): “Buy 10 A, get $100 off those 10 A.” Example (false): “Buy 10 A, get $100 off B.” [Example](https://docs.capillarytech.com/reference/create-cart-promotion-api#requirement-4-the-brand-wants-to-set-up-a-promotion-in-which-if-a-customer-buys-a-laptop-a-mouse-and-a-keyboard-all-in-the-same-transaction-they-get-50-off-all-three-items) : “If a customer buys a Laptop, a Mouse, and a Keyboard all in the same transaction, they get 50% off all three items.” By setting `includeItemsFromConditionSet` to true, the discount is applied directly to the same three items that triggered the cart promotion in the above example.                                                                                                                                                                                                                   | Yes       |
| ....productBasedCondition        | Object  | Yes         | Defines the set of products to which the benefit will be applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| .....type                        | Enum    | Yes         | Targeting method. **Supported**: `PRODUCT`, `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes       |
| .....productCondition            | Object  | Conditional | Defines target products. Required if type is PRODUCT.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ......criteriaList               | Array   | Yes         | Defines an array of rule objects that specify which products are targeted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .......entity                    | String  | Yes         | Specifies the product attribute to evaluate, such as `SKU`, `BRAND`, or `CATEGORY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| .......values                    | Array   | Yes         | Specifies an array of strings to match against the `entity` attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes       |
| .......operator                  | Enum    | Yes         | Specifies the operator for the list comparison. **Supported values**: `IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ......kpi                        | Enum    | Yes         | Specifies an optional metric for filtering products. **Supported values**: `NONE`, `QUANTITY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes       |
| ......operator                   | Enum    | Conditional | Specifies the logical operator for product comparison. **Supported values**: `EQUALS`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes       |
| ......value                      | String  | Conditional | Specifies the target value for the product KPI comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .....comboProductCondition       | Object  | Conditional | Defines target combos. Required if type is COMBO\_PRODUCT.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| ......productConditions          | Array   | Yes         | Array of product condition objects.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| ...freeProductAction             | Object  | Conditional | Required when rewardAction.type is FREE\_PRODUCT.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| ....includeItemsFromConditionSet | Boolean | Yes         | Controls whether the action benefit applies to the same items that satisfied the cart promotion trigger (`true`) or to a different target set defined by productBasedCondition (`false`). Example (true): “Buy 10 A, get $100 off those 10 A.” Example (false): “Buy 10 A, get $100 off B.” [Example](https://docs.capillarytech.com/reference/create-cart-promotion-api#requirement-4-the-brand-wants-to-set-up-a-promotion-in-which-if-a-customer-buys-a-laptop-a-mouse-and-a-keyboard-all-in-the-same-transaction-they-get-50-off-all-three-items-1) : “If a customer buys a Laptop, a Mouse, and a Keyboard all in the same transaction, they get 50% off all three items.”                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| ....productBasedCondition        | Object  | Yes         | Defines exactly which products are to be marked as free.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| .....type                        | Enum    | Yes         | Targeting method. **Supported**: `PRODUCT`, `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes       |
| .....productCondition            | Object  | Conditional | Defines target products. Required if type is `PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Yes       |
| ......criteriaList               | Array   | Yes         | Defines an array of rule objects that specify which products are targeted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .......entity                    | String  | Yes         | Specifies the product attribute to evaluate, such as `SKU`, `BRAND`, or `CATEGORY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| .......values                    | Array   | Yes         | Specifies an array of strings to match against the `entity` attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes       |
| .......operator                  | Enum    | Yes         | Specifies the operator for the list comparison. **Supported values**: `IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ......kpi                        | Enum    | Yes         | Specifies an optional metric for filtering products. **Supported values**: `NONE`, `QUANTITY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes       |
| ......operator                   | Enum    | Conditional | Specifies the logical operator for product comparison. **Supported values**: `EQUALS`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes       |
| ......value                      | String  | Conditional | Specifies the target value for the product KPI comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .....comboProductCondition       | Object  | Conditional | Defines target combos. Required if type is `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Yes       |
| ...fixedPriceAction              | Object  | Conditional | Defines a reward action where products are sold at a fixed price. Required when `rewardAction.type` is `FIXED_PRICE`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ....value                        | Number  | Yes         | Specifies the new, fixed price for the qualifying items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| ....includeItemsFromConditionSet | Boolean | Yes         | Controls whether the action benefit applies to the same items that satisfied the cart promotion trigger (`true`) or to a different target set defined by productBasedCondition (`false`). Example (true): “Buy 10 A, get $100 off those 10 A.” Example (false): “Buy 10 A, get $100 off B.” [Example](https://docs.capillarytech.com/reference/create-cart-promotion-api#requirement-4-the-brand-wants-to-set-up-a-promotion-in-which-if-a-customer-buys-a-laptop-a-mouse-and-a-keyboard-all-in-the-same-transaction-they-get-50-off-all-three-items-1) : “If a customer buys a Laptop, a Mouse, and a Keyboard all in the same transaction, they get 50% off all three items.”                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| ....productBasedCondition        | Object  | Yes         | Defines exactly which products are to be sold at the fixed price.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| .....type                        | Enum    | Yes         | Specifies the product targeting method for the action. Supported values: `PRODUCT`, `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes       |
| .....productCondition            | Object  | Conditional | Defines target products using a list of criteria. Required when `type` is `PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes       |
| ......criteriaList               | Array   | Yes         | Defines an array of rule objects that specify which products are targeted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .......entity                    | String  | Yes         | Specifies the product attribute to evaluate, such as `SKU`, `BRAND`, or `CATEGORY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| .......values                    | Array   | Yes         | Specifies an array of strings to match against the `entity` attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes       |
| .......operator                  | Enum    | Yes         | Specifies the operator for the list comparison. Supported values: `IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| ......kpi                        | Enum    | Yes         | Specifies an optional metric for filtering products. Supported values: `NONE`, `QUANTITY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| ......operator                   | Enum    | Conditional | Specifies the logical operator for product comparison. Supported values: `EQUALS`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes       |
| ......value                      | String  | Conditional | Specifies the target value for the product KPI comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .....comboProductCondition       | Object  | Conditional | Defines the target combo products for the action. Required when `type` is `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| ......productConditions          | Array   | Yes         | Defines an array of product condition objects that must all be satisfied for the action to apply.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| .......kpi                       | Enum    | Yes         | Specifies an optional metric for filtering products. Supported values: `NONE`, `QUANTITY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .......operator                  | Enum    | Conditional | Specifies the logical operator for the product `kpi` comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Yes       |
| .......value                     | String  | Conditional | Specifies the target value for the product `kpi` comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Yes       |
| .......criteriaList              | Array   | Yes         | Defines an array of rule objects that specify the products in this part of the combo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ........entity                   | String  | Yes         | Specifies the product attribute to evaluate, such as `SKU`, `BRAND`, or `CATEGORY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| ........values                   | Array   | Yes         | Specifies an array of strings to match against the `entity` attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Yes       |
| ........operator                 | Enum    | Yes         | Specifies the operator for the list comparison. Supported values: `IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |

### Example request

##### **Requirement 1** :

The brand has set up a product-specific discount cart promotion, "Get $25%$ Off All Snacks," with conditions that if a customer adds any item from the "Snacks" category to their cart, a $25%$ discount is applied to those specific items using a PRODUCT\_BASED reward action. The brand now wants to update the promotion to "Buy a Coffee, Get 50% Off a Pastry," changing the condition to 1 item from the "Coffee" category, and the reward to a $50%$ discount on 1 item from the "Pastries" category.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmNDjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=m_cAUxdASkagijzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Buy a Coffee, Get 50% Off a Pastry",
    "type": "POS",
    "messageLabel": "Buy a Coffee, Get 50% Off a Pastry!",
    "active": true,
    "priority": 1,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "PRODUCT",
        "productCondition": {
            "criteriaList": [
                {
                    "entity": "CATEGORY",
                    "operator": "IN",
                    "values": [
                        "Coffee"
                    ]
                }
            ],
            "kpi": "QUANTITY",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "1"
        }
    },
    "action": {
        "type": "PER_UNIT",
        "perUnitAction": {
            "perUnitKPI": "QUANTITY",
            "perUnitDivider": "1",
            "rewardAction": {
                "type": "PRODUCT_BASED",
                "productBasedAction": {
                    "type": "PERCENTAGE",
                    "value": 50,
                    "includeItemsFromConditionSet": false,
                    "productBasedCondition": {
                        "type": "PRODUCT",
                        "productCondition": {
                            "criteriaList": [
                                {
                                    "entity": "CATEGORY",
                                    "operator": "IN",
                                    "values": [
                                        "Pastries"
                                    ]
                                }
                            ],
                            "kpi": "QUANTITY",
                            "operator": "EQUALS",
                            "value": "1"
                        }
                    }
                }
            }
        }
    },
    "customerActivationRequired": false,
    "maxIssuancePerCustomer": 10,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'
```

##### **Requirement 2:**

The brand has set up a cart promotion where if a customer buys any two items from the "Shirts" category, they are eligible to receive one item from the "Ties" category for free. The brand now wants to update the promotion to "Buy 1 Trousers, Get 1 Belt Free," changing the trigger condition to 1 item from the "Trousers" category, and setting the perUnitDivider to 1 so that for every pair of trousers purchased, one item from the "Belts" category is free.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=m_cAUxdAS9kIldnWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Buy 1 Trousers, Get 1 Belt Free",
    "type": "POS",
    "messageLabel": "Free belt when you buy trousers!",
    "active": true,
    "priority": 1,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "PRODUCT",
        "productCondition": {
            "criteriaList": [
                {
                    "entity": "CATEGORY",
                    "operator": "IN",
                    "values": [
                        "Trousers"
                    ]
                }
            ],
            "kpi": "QUANTITY",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "1"
        }
    },
    "action": {
        "type": "PER_UNIT",
        "perUnitAction": {
            "perUnitKPI": "QUANTITY",
            "perUnitDivider": "1",
            "rewardAction": {
                "type": "FREE_PRODUCT",
                "freeProductAction": {
                    "includeItemsFromConditionSet": false,
                    "productBasedCondition": {
                        "type": "PRODUCT",
                        "productCondition": {
                            "criteriaList": [
                                {
                                    "entity": "CATEGORY",
                                    "operator": "IN",
                                    "values": [
                                        "Belts"
                                    ]
                                }
                            ],
                            "kpi": "QUANTITY",
                            "operator": "EQUALS",
                            "value": "1"
                        }
                    }
                }
            }
        }
    },
    "customerActivationRequired": false,
    "maxIssuancePerCustomer": 10,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'
```

##### **Requirement 3**:

The brand wants to set up a cart promotion, "Any Large Pizza for $10," with conditions that if a customer buys any item from the "Large Pizzas" category, its price is set to $$10$ using a FIXED\_PRICE reward action. The brand now wants to update the promotion to "Premium Burgers for $12," changing the target category to "Premium Burgers" and updating the fixed price value to $12.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhMjI2MTk1OGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=5O_PtucI3YnfDUgjgMPnHbPeEKcKJjaHWDOkNDip3Po-1760116657904-0.0.1.1-604800000' \
--data '{
    "name": "Premium Burgers for 12 Dollars",
    "orgId": 100737,
    "type": "POS",
    "messageLabel": "Get any Premium Burger for just $12!",
    "active": true,
    "priority": 2,
    "isStackable": true,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "CART",
        "cartCondition": {
            "kpi": "ITEMCOUNT",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": 1
        }
    },
    "action": {
        "type": "PER_UNIT",
        "perUnitAction": {
            "perUnitKPI": "QUANTITY",
            "perUnitDivider": "1",
            "rewardAction": {
                "type": "FIXED_PRICE",
                "fixedPriceAction": {
                    "value": 12,
                    "includeItemsFromConditionSet": false,
                    "productBasedCondition": {
                        "type": "PRODUCT",
                        "productCondition": {
                            "criteriaList": [
                                {
                                    "entity": "CATEGORY",
                                    "values": [
                                        "Premium Burgers"
                                    ],
                                    "operator": "IN"
                                }
                            ],
                            "kpi": "NONE"
                        }
                    }
                }
            }
        }
    },
    "customerActivationRequired": false,
    "maxIssuancePerCustomer": 10,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'
```

##### **Requirement 4**:

The brand wants to set up a cart promotion in which, "If a customer buys a Laptop, a Mouse, and a Keyboard all in the same transaction, they get 50% off all three items." The brand now wants to update the promotion to "Shampoo and Conditioner Bundle," requiring a combo of 1 Shampoo and 1 Conditioner, and applying a $20%$ discount to both items using includeItemsFromConditionSet: true.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmN4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=8M02INsasy1bHCM-1760357020184-0.0.1.1-604800000' \
--data '{
    "name": "Shampoo and Conditioner Bundle - 20% Off",
    "type": "POS",
    "messageLabel": "Get 20% off when you buy Shampoo and Conditioner together!",
    "active": true,
    "priority": 0,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "COMBO_PRODUCT",
        "comboProductCondition": {
            "productConditions": [
                {
                    "kpi": "QUANTITY",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "1",
                    "criteriaList": [
                        {
                            "entity": "CATEGORY",
                            "operator": "IN",
                            "values": [
                                "Shampoo"
                            ]
                        }
                    ]
                },
                {
                    "kpi": "QUANTITY",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "1",
                    "criteriaList": [
                        {
                            "entity": "CATEGORY",
                            "operator": "IN",
                            "values": [
                                "Conditioner"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "action": {
        "type": "PRODUCT_BASED",
        "productBasedAction": {
            "type": "PERCENTAGE",
            "value": 20,
            "includeItemsFromConditionSet": true
        }
    },
    "customerActivationRequired": false,
    "maxIssuancePerCustomer": 10,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'
```

### When the cart promotion's action type is `FREE_PRODUCT`

| Field                          | Type    | Required    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Updatable |
| :----------------------------- | :------ | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .freeProductAction             | Object  | Yes         | Defines a reward action where specific products are made free.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| ..includeItemsFromConditionSet | Boolean | Yes         | Controls whether the action benefit applies to the same items that satisfied the cart promotion trigger (`true`) or to a different target set defined by productBasedCondition (`false`). Example (true): “Buy 10 A, get $100 off those 10 A.” Example (false): “Buy 10 A, get $100 off B.” [Example](https://docs.capillarytech.com/reference/create-cart-promotion-api#requirement-a-tech-store-wants-to-create-an-all-in-one-bundle-deal-the-requirement-is-if-a-customer-buys-a-premium-laptop-over-1000-a-pro-gaming-mouse-and-a-mechanical-keyboard-all-in-the-same-transaction-they-get-all-three-items-for-a-combined-fixed-price-of-1200): “If a customer buys a premium laptop (over $1000), a 'Pro Gaming Mouse', AND a 'Mechanical Keyboard' all in the same transaction, they get all three items for a combined, fixed price of **$1200**.” | Yes       |
| ..productBasedCondition        | Object  | Yes         | Defines the set of products that are eligible to be made free. If multiple items in the cart match, the system typically makes the cheapest one free.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| ...type                        | Enum    | Yes         | Specifies how target products are grouped. **Supported**: `PRODUCT`, `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| ...productCondition            | Object  | Conditional | Defines target products using product-level rules. Required when `type` is `PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| ....criteriaList               | Array   | Yes         | A list of rule objects that specify which products are targeted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .....entity                    | String  | Yes         | Specifies the product attribute to evaluate, such as `SKU`, `BRAND`, or `CATEGORY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes       |
| .....operator                  | Enum    | Yes         | Specifies the operator for the list comparison. **Supported**: `IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| .....values                    | Array   | Yes         | Specifies an array of strings to match against the `entity` attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Yes       |
| ....kpi                        | Enum    | Yes         | An optional metric for filtering products. **Supported**: `NONE`, `QUANTITY`, `AMOUNT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| ....operator                   | Enum    | Conditional | The logical operator for the KPI comparison. Required if `kpi` is not `NONE`. **Supported**: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Yes       |
| ....value                      | String  | Conditional | The target value for the KPI comparison. Required if `kpi` is not `NONE`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| ...comboProductCondition       | Object  | Conditional | Defines the set of product combinations that can be made free. Required when `type` is `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes       |
| ....productConditions          | Array   | Yes         | An array of product condition objects. All conditions in this list must be satisfied for the combo to qualify.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| .....criteriaList              | Array   | Yes         | Defines the specific products to check in this part of the combo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Yes       |
| ......entity                   | String  | Yes         | Specifies the product attribute to evaluate, such as `SKU`, `BRAND`, or `CATEGORY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes       |
| ......operator                 | Enum    | Yes         | The operator for the list comparison Supported values:`IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| ......values                   | Array   | Yes         | The list of attribute values to match against.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| .....kpi                       | Enum    | Yes         | The metric to evaluate for this part of the combo Supported values:`NONE`, `QUANTITY`, `AMOUNT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| .....operator                  | Enum    | Conditional | The comparison logic for the KPI Supported values: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUA`L.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| .....value                     | String  | Conditional | The target value for the KPI comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes       |

### Example request

##### **Requirement**:

A tech store wants to create an "all-in-one" bundle deal with the requirement: "If a customer buys a premium laptop (over $1000), a 'Pro Gaming Mouse', AND a 'Mechanical Keyboard' all in the same transaction, they get all three items for a combined, fixed price of $1200." The brand now wants to update the promotion to "Free Keyboard with Laptop and Mouse," changing the condition to require only the Premium Laptop and Pro Gaming Mouse, and changing the action to make the Mechanical Keyboard (1 unit) FREE.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmNDI3MGQ3YzI4ZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=8M02INwaH44vLLEiiCcBIHKDdvTjqsnNjksasy1bHCM-1760357020184-0.0.1.1-604800000' \
--data '{
    "name": "Free Keyboard with Laptop and Mouse",
    "type": "POS",
    "messageLabel": "Buy a Premium Laptop and Pro Mouse, Get a Mechanical Keyboard Free!",
    "active": true,
    "priority": 1,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "COMBO_PRODUCT",
        "comboProductCondition": {
            "productConditions": [
                {
                    "criteriaList": [
                        {
                            "entity": "CATEGORY",
                            "operator": "IN",
                            "values": [
                                "Laptops"
                            ]
                        }
                    ],
                    "kpi": "AMOUNT",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "1000"
                },
                {
                    "criteriaList": [
                        {
                            "entity": "SKU",
                            "operator": "IN",
                            "values": [
                                "GM-PRO-001"
                            ]
                        }
                    ],
                    "kpi": "QUANTITY",
                    "operator": "GREATER_THAN_OR_EQUAL",
                    "value": "1"
                }
            ]
        }
    },
    "action": {
        "type": "PER_UNIT",
        "perUnitAction": {
            "perUnitKPI": "QUANTITY",
            "perUnitDivider": "1",
            "rewardAction": {
                "type": "FREE_PRODUCT",
                "freeProductAction": {
                    "includeItemsFromConditionSet": false,
                    "productBasedCondition": {
                        "type": "PRODUCT",
                        "productCondition": {
                            "criteriaList": [
                                {
                                    "entity": "CATEGORY",
                                    "operator": "IN",
                                    "values": [
                                        "Mechanical Keyboards"
                                    ]
                                }
                            ],
                            "kpi": "QUANTITY",
                            "operator": "EQUALS",
                            "value": "1"
                        }
                    }
                }
            }
        }
    },
    "customerActivationRequired": false,
    "maxIssuancePerCustomer": 10,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'
```

### When the cart promotion's action type is `FIXED_PRICE`

> **Important Constraint**: For a `FIXED_PRICE` action to be valid, the `productCondition` or `comboProductCondition` that defines which items get the special price **must** use a `kpi` of `QUANTITY` and an `operator` of `EQUALS`.

| Field                          | Type    | Required    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Updatable |
| :----------------------------- | :------ | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .fixedPriceAction              | Object  | Yes         | Defines a reward action where the price of a product is changed to a specific value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes       |
| ..value                        | Number  | Yes         | The new, fixed price for the qualifying items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes       |
| ..includeItemsFromConditionSet | Boolean | Yes         | Controls whether the action benefit applies to the same items that satisfied the cart promotion trigger (`true`) or to a different target set defined by productBasedCondition (`false`). Example (true): “Buy 10 A, get $100 off those 10 A.” Example (false): “Buy 10 A, get $100 off B.” [Example](https://docs.capillarytech.com/reference/create-cart-promotion-api#requirement-the-brand-wants-to-set-up-a-promotion-any-large-pizza-for-10-the-condition-is-that-if-a-customer-buys-any-item-from-the-large-pizzas-category-its-price-is-set-to-a-fixed-10) : “Any Large Pizza for $10.” The condition is that if a customer buys any item from the “Large Pizzas” category, its price is set to a fixed $10. | Yes       |
| ..productBasedCondition        | Object  | Yes         | Defines the specific set of products that will be sold at the fixed price.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Yes       |
| ...type                        | Enum    | Yes         | Specifies how the target products are grouped. **Supported**: `PRODUCT`, `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes       |
| ...productCondition            | Object  | Conditional | Defines target products using product-level rules. Required when `type` is `PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes       |
| ....criteriaList               | Array   | Yes         | A list of rule objects that specify which products are targeted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Yes       |
| .....entity                    | String  | Yes         | Specifies the product attribute to evaluate, such as `SKU`, `BRAND`, or `CATEGORY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes       |
| .....operator                  | Enum    | Yes         | Specifies the operator for the list comparison. **Supported**: `IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes       |
| .....values                    | Array   | Yes         | Specifies an array of strings to match against the `entity` attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ....kpi                        | Enum    | Yes         | The metric for filtering products. **Constraint**: Must be `QUANTITY` for this action type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |
| ....operator                   | Enum    | Conditional | The logical operator for the KPI comparison. **Constraint**: Must be `EQUALS` for this action type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes       |
| ....value                      | String  | Conditional | The target quantity for the KPI comparison. Required if `kpi` is not `NONE`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Yes       |
| ...comboProductCondition       | Object  | Conditional | Defines the set of product combinations that will be sold at the fixed price. Required when `type` is `COMBO_PRODUCT`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes       |
| ....productConditions          | Array   | Yes         | An array of `productCondition` objects. All conditions in this list must be satisfied for the combo to qualify.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes       |
| .....criteriaList              | Array   | Yes         | Defines the specific products to check in this part of the combo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Yes       |
| ......entity                   | String  | Yes         | The product attribute to evaluate Supported values: `CATEGORY`, `BRAND`,`SKU`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes       |
| ......operator                 | Enum    | Yes         | The operator for the list comparison Supported values:`IN`, `NOT_IN`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes       |
| ......values                   | Array   | Yes         | The list of attribute values to match against.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Yes       |
| .....kpi                       | Enum    | Yes         | The metric for this part of the combo. **Constraint**: Must be `QUANTITY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Yes       |
| .....operator                  | Enum    | Conditional | The comparison logic for the KPI. **Constraint**: Must be `EQUALS`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes       |
| .....value                     | String  | Conditional | The target quantity for the KPI comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes       |

### Example Request

##### **Requirement**:

The brand wants to set up a cart promotion, "Any Large Pizza for $10." The condition is that if a customer buys any item from the "Large Pizzas" category, its price is set to a fixed $$10$. The brand now wants to update the promotion to "Designer Jeans for $40," changing the target category to "Jeans" and the fixed price value to $40.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--data '{
    "name": "Designer Jeans for 40 Dollars",
    "type": "POS",
    "messageLabel": "Get any pair of Designer Jeans for just $40!",
    "active": true,
    "priority": 2,
    "isStackable": true,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "PRODUCT",
        "productCondition": {
            "criteriaList": [
                {
                    "entity": "CATEGORY",
                    "operator": "IN",
                    "values": [
                        "Jeans"
                    ]
                }
            ],
            "kpi": "QUANTITY",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "1"
        }
    },
    "action": {
        "type": "FIXED_PRICE",
        "fixedPriceAction": {
            "value": 40,
            "includeItemsFromConditionSet": true,
            "productBasedCondition": {
                "type": "PRODUCT",
                "productCondition": {
                    "criteriaList": [
                        {
                            "entity": "CATEGORY",
                            "operator": "IN",
                            "values": [
                                "Jeans"
                            ]
                        }
                    ],
                    "kpi": "QUANTITY",
                    "operator": "EQUALS",
                    "value": "1"
                }
            }
        }
    },
    "customerActivationRequired": false,
    "promotionRestrictions": {},
    "customFieldValues": {}
}'
```

## Promotion restrictions Object

| Field                       | Type       | Required                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Updatable   |
| :-------------------------- | :--------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| .Customer                   | Array      | Conditional                        | Specifies restrictions that apply per customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes         |
| .Cart                       | Array      | Conditional                        | Specifies restrictions that apply per cart.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes         |
| .Promotion                  | Array      | Conditional                        | Specifies restrictions that apply to the overall cart promotion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Yes         |
| .Code                       | Array      | Conditional                        | Specifies restrictions that apply to cart promotion codes. Required when the main promotion type is `CODE`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes         |
| ..kpi                       | Enum       | Yes                                | The metric to be limited. Supported: • `REDEMPTION`: Limits redemption count. • `TRANSACTION`: Limits transaction count. • `DISCOUNT`: Caps total discount value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Yes         |
| ..frequency                 | Enum       | Optional                           | How often the restriction resets. Supported: \<br>\* `DAYS`: The limit resets every N days. Example: A limit of 100 redemptions resets every 10 days. \<br>\* `WEEKS`: The limit resets weekly. Example: A limit of 500 redemptions resets each week, starting on Monday. DOES\_NOT\_REPEAT : The restriction is applied only once and does not reset. It acts as a single, lifetime limit for the duration of the promotion.. **If omitted, the restriction does not repeat.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes         |
| ..minTimeBetweenRepeat      | Long       | Optional                           | Minimum time between uses in milliseconds. Example: 86400000 (1 day).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Yes         |
| ..limit                     | BigDecimal | Yes                                | Maximum allowed value for the restriction. Example: A REDEMPTION limit of "1"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Yes         |
| ..windowType                | Enum       | Optional                           | Specifies the type of limit window. Supported values: • `OVERALL`: Lifetime limit, no reset. • `MOVING`: Rolling window; uses `frequency` and `minTimeBetweenRepeat`. • `FIXED`: Resets on a recurring calendar cycle; requires `fixedWindowConfig`. If omitted, defaults to `OVERALL` (backward compatible with existing promotions). Constraints: `MOVING` and `FIXED` cannot coexist anywhere in the same promotion. `OVERALL` and `MOVING` cannot coexist on the same Level + KPI. `OVERALL` and `FIXED` can coexist on the same Level + KPI. Multiple `FIXED` restrictions with different cycle configurations on the same Level + KPI are valid. Per Level + KPI limits: max 1 `OVERALL`, max 1 `MOVING`, max 9 `FIXED`. A promotion supports a maximum of 10 restrictions in total across all levels. All cycle boundaries are computed in the org's configured timezone. Cannot be changed from `FIXED` to `MOVING` (or vice versa) on a live promotion. | Conditional |
| ..fixedWindowConfig         | Object     | Conditional                        | Required when `windowType` is `FIXED`. Defines the cycle configuration for the fixed window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Conditional |
| ...cycleType                | Enum       | Yes (if fixedWindowConfig present) | Defines the type of fixed cycle. Supported values: • `CALENDAR_MONTH`: Resets on the 1st of each calendar month. • `WEEK`: Resets weekly; configure the start day via `weekStartDay`. • `N_DAY`: Resets every N days from a configurable anchor date; configure the interval via `refreshRate` and the anchor via `cycleReferenceDate`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Yes         |
| ...weekStartDay             | Enum       | Conditional                        | Required when `cycleType` is `WEEK`. Specifies the day the weekly cycle starts. Supported values: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Yes         |
| ...refreshRate              | Integer    | Conditional                        | Required when `cycleType` is `N_DAY`. Defines the number of days per cycle (must be ≥ 1). Example: A value of 7 resets the limit every 7 days.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Yes         |
| ...cycleReferenceDate       | Long       | Conditional                        | Epoch timestamp in milliseconds used as the anchor date from which `N_DAY` cycles are calculated forward and backward. Required when `cycleType` is `N_DAY` and `cycleReferenceDateSource` is `PROMOTION_CONFIG`. Interpreted in the org's configured timezone. Defaults to the promotion's `startDate` if omitted. Example: `1748908800000` (1 June 2025 00:00:00 UTC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | No          |
| ...cycleReferenceDateSource | Enum       | Optional                           | Specifies whether the fixed-window cycle start date is shared across all customers or calculated individually per customer based on when the promotion was issued to them. Supported values: • `PROMOTION_CONFIG`: All customers' counters reset on the same date, set in `cycleReferenceDate`. The reset schedule is identical for every customer regardless of when they received the promotion. Example: A monthly promotion with `cycleReferenceDate` of 1 June 2025 resets every customer's counter on 1 July, 1 August, and so on. • `ISSUANCE_DATE`: Each customer's counter resets based on the date the promotion was issued to that customer. Example: A customer issued on 5 June gets a monthly window from 5 June to 5 July; a customer issued on 20 June gets a window from 20 June to 20 July. Valid only at `Earn` and `Code` restriction levels. If omitted, defaults to `PROMOTION_CONFIG`. Cannot be updated after the promotion is live.     | No          |

##### **customer level requirement**:

A coffee shop wants to offer a "Happy Hour" cart promotion for "$2 off any drink" but wants to limit each customer to using this offer only once per day to ensure fair usage. The brand now wants to update the promotion to "Weekly Coffee Treat," increasing the discount to $5 but changing the restriction to limit customers to 1 redemption per week (resetting weekly).

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhMjI2MTk1OllZTk=' \
--header 'Cookie: _cfuvid=m_cAUxdzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Weekly Coffee Treat",
    "type": "CUSTOMER",
    "messageLabel": "$5 off your favorite drink, once a week!",
    "active": true,
    "priority": 10,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "PRODUCT",
        "productCondition": {
            "criteriaList": [
                {
                    "entity": "CATEGORY",
                    "operator": "IN",
                    "values": [
                        "Coffee",
                        "Tea",
                        "Juice"
                    ]
                }
            ],
            "kpi": "QUANTITY",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "1"
        }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": {
            "type": "ABSOLUTE",
            "value": 5
        }
    },
    "promotionRestrictions": {
        "Customer": [
            {
                "kpi": "REDEMPTION",
                "frequency": "WEEKS",
                "minTimeBetweenRepeat": 604800000,
                "limit": "1"
            }
        ]
    }
}'
```

##### **customer level restriction requirement (fixed window)**:

A grocery chain wants to update their "Monthly Freshness Deal" promotion — customers can redeem a 10% discount up to 5 times per calendar month, with an overall lifetime cap of 30 redemptions.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/{{promotionId}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTNhMjI2MTk1OllZTk=' \
--header 'Cookie: _cfuvid=m_cAUxdzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Monthly Freshness Deal",
    "type": "CUSTOMER",
    "messageLabel": "10% off on fresh produce, up to 5 times this month!",
    "active": true,
    "priority": 10,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "promotionRestrictions": {
        "Customer": [
            {
                "kpi": "REDEMPTION",
                "windowType": "OVERALL",
                "limit": "30"
            },
            {
                "kpi": "REDEMPTION",
                "windowType": "FIXED",
                "fixedWindowConfig": {
                    "cycleType": "CALENDAR_MONTH"
                },
                "limit": "5"
            }
        ]
    }
}'
```

##### **Cart level restriction requirement**:

A fashion retailer offers a "$25%$ Off Everything" cart promotion but wants to cap the maximum discount at $100 per transaction. The brand now wants to update the promotion to "Flash Sale $50%$ Off," increasing the percentage discount to $50%$, but tightening the restriction to cap the maximum discount at $50 per transaction.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OOGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=m_cAUxdAzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Flash Sale 50% Off (Capped at $50)",
    "type": "POS",
    "messageLabel": "Flash Sale! Get 50% off (Max discount $50).",
    "active": true,
    "priority": 5,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "CART",
        "cartCondition": {
            "kpi": "SUBTOTAL",
            "operator": "GREATER_THAN",
            "value": 0
        }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": {
            "type": "PERCENTAGE",
            "value": 50
        }
    },
    "promotionRestrictions": {
        "Cart": [
            {
                "kpi": "DISCOUNT",
                "limit": "50"
            }
        ]
    }
}'
```

##### **Promotion Level Restriction requirement**:

A new store is launching with a "Grand Opening" offer where the first 1,000 customers get $10 off. The brand now wants to update the promotion to "Super Early Bird Special," limiting the offer to only the first 100 customers globally (Promotion level limit).

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86MmQ1OTN5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=m_cAUxdAS9kIldmF3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Grand Opening - First 1000 Customers", 
    "type": "POS",
    "messageLabel": "$10 off for our first 1000 customers!",
    "active": true,
    "priority": 1,                                
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "CART",
        "cartCondition": {
            "kpi": "SUBTOTAL",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": 10                           
        }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": {
            "type": "ABSOLUTE",
            "value": 10                           
        }
    },
    "promotionRestrictions": {
        "Promotion": [                            
            {
                "kpi": "REDEMPTION",              
                "limit": "1000"                   
            }
        ]
    }
}'\'''
```

##### **Code level restriction requirement**: A company provides new subscribers with a unique, single-use code for "$15%$ off their first order." The brand now wants to update the promotion to "Referral Program Codes," allowing each unique code to be redeemed up to 5 times (Code level limit) before it expires.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbWjI2MTk1OGE2NWI5ZjAxMzU5NGIwNDllZTk=' \
--header 'Cookie: _cfuvid=m_cAUxdAagijzS7nWq3g15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Referral Program - 5 Uses Per Code",
    "type": "CODE",
    "messageLabel": "Share this code! Valid for 5 uses.",
    "active": true,
    "priority": 0,
    "isStackable": false,
    "startDate": 1759363200000,
    "endDate": 1790985600000,
    "campaignId": "286039",
    "condition": {
        "type": "CART",
        "cartCondition": {
            "kpi": "SUBTOTAL",
            "operator": "GREATER_THAN",
            "value": 0
        }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": {
            "type": "PERCENTAGE",
            "value": 15
        }
    },
    "promotionRestrictions": {
        "Code": [
            {
                "kpi": "REDEMPTION",
                "limit": "5"
            }
        ]
    }
}'
```

## Earning Criteria Object

| Field            | Type    | Required | Description                                                                                                                                                                                                                                                                                                                                      | Updatable |
| :--------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .active          | Boolean | Yes      | Flag to enable or disable this specific earning rule.                                                                                                                                                                                                                                                                                            | Yes       |
| .criteriaDsl     | String  | Yes      | The earning rule in simple language Example: "true": Always True (No Condition)                                                                                                                                                                                                                                                                  | Yes       |
| .criteriaDslJson | String  | Yes      | Escaped JSON string of the rule's values. Example: ` "{ \"arity\":\"literal\", \"value\":\"true\", \"type\":\"boolean:primitive\" }"`                                                                                                                                                                                                            | Yes       |
| .criteriaName    | String  | Yes      | A name for the earning criteria rule.                                                                                                                                                                                                                                                                                                            | Yes       |
| .earnedFromType  | Enum    | Yes      | Type of event that triggers the rule. Supported: `ACTIVITY`: This type is used when a cart promotion is earned based on a customer's real-time actions, such as making a purchase (TransactionAdd). `MILESTONE`: This type is used when a cart promotion is earned because a customer has achieved a predefined goal or status within a program. | Yes       |
| .eventType       | Enum    | Yes      | Specific activity that triggers the rule. Supported: `TransactionAdd` , `Customer Update` , `Registration`.                                                                                                                                                                                                                                      | Yes       |
| .groupId         | Integer | Yes      | Identifier for grouping related earning criteria.                                                                                                                                                                                                                                                                                                | Yes       |
| .milestoneId     | Integer | Yes      | Identifier for a specific milestone within an earning program.                                                                                                                                                                                                                                                                                   | Yes       |

##### **Requirement:**

The brand wants to set up a cart promotion where if a customer reaches milestone 12345, they get a $50 voucher that they can use on their next purchase of $50 or more. The brand now wants to update the promotion to "Platinum Milestone Reward," changing the trigger to Milestone ID 67890, increasing the voucher value to $100, and raising the minimum purchase requirement to $150.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=m_cAUxdAS9kIldmg15w1dpuKfA-1760347164530-0.0.1.1-604800000' \
--data '{
    "name": "Platinum Milestone Reward - $100 Voucher",
    "type": "EARNING",
    "messageLabel": "Congratulations! You'\''ve earned a $100 voucher.",
    "active": true,
    "priority": 1,
    "isStackable": false,
    "startDate": 1760332800000,
    "endDate": 1792031999000,
    "campaignId": "286039",
    "condition": {
        "type": "CART",
        "cartCondition": {
            "kpi": "SUBTOTAL",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "150.000000"
        }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": {
            "type": "ABSOLUTE",
            "value": "100.000000"
        }
    },
    "earningCriteria": {
        "active": true,
        "earnedFromType": "MILESTONE",
        "eventType": "TransactionAdd",
        "criteriaName": "Milestone_Achievement_67890",
        "criteriaDsl": "true",
        "criteriaDslJson": "{ \"arity\":\"literal\", \"value\":\"true\", \"type\":\"boolean:primitive\" }",
        "groupId": 1,
        "milestoneId": 67890
    }
}'
```

## Store Criteria Object

This object limits the promotion to specific physical or logical locations, such as a set of stores or a geographical zone.

| Field     | Type              | Required | Description                                                                                                                                                                                     | Updatable |
| :-------- | :---------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .type     | Enum              | Yes      | The type of location entity. Supported values: • **`STORE`**: A specific store. • **`ZONE`**: A defined group of stores. • **`CONCEPT`**: A brand or store concept.                             | Yes       |
| .values   | Array of Integers | Yes      | An array of IDs corresponding to the `type` (e.g., `[101, 204]` for store IDs).                                                                                                                 | Yes       |
| .operator | Enum              | Yes      | The logical operator. Supported values: • **`IN`**: The promotion is valid **only in** the listed locations. • **`NOT_IN`**: The promotion is valid **everywhere except** the listed locations. | Yes       |

#### Example Request

##### **Requirement:** The brand wants to offer a "15% Off Store Opening Special" that is only valid at their two new store locations (IDs: 101 and 102).

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmN4ZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=Fl.R3pP_RtM6ZaoUweo7cHOk4zcxuRg-1761063598566-0.0.1.1-604800000' \
--data '{
    "name": "New Store Opening Special",
    "type": "POS",
    "startDate": 1761019200000,
    "endDate": 1764565199999,
    "campaignId": 286039,
    "storeCriteria": {
        "type": "STORE",
        "values": [101, 102],
        "operator": "IN"
    },
    "condition": {
        "type": "CART",
        "cartCondition": {
            "kpi": "SUBTOTAL",
            "operator": "GREATER_THAN",
            "value": 0
        }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": {
            "type": "PERCENTAGE",
            "value": 15
        }
    }
}'
```

## Time Criteria Object

This object restricts the promotion to specific times of the day or days of the week, enabling use cases like "Happy Hour" or "Weekend Specials."

| Field            | Type             | Required    | Description                                                                                                                                       | Updatable |
| :--------------- | :--------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------- |
| .startTime       | String           | Yes         | An object specifying the start time. Must contain `hour` (0-23) and `minute` (0-59).                                                              | Yes       |
| .durationInHours | Integer          | Yes         | The duration of the promotion window in hours from the `startTime`.                                                                               | Yes       |
| .repeatFrequency | Enum             | Yes         | How often the time window repeats. Supported: `WEEKS`, `DAYS`, `DOES_NOT_REPEAT`.                                                                 | Yes       |
| .weeklyValues    | Array of Strings | Conditional | Required if `repeatFrequency` is `WEEKS`. A list of days, e.g., `["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]`. | Yes       |

#### Example Request

##### **Requirement:** The brand wants a "Weekday Happy Hour" offering 20% off from 4:00 PM to 5:59 PM (a 2-hour duration) every Monday through Friday.

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmNDIZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=Fl.R3pP_RilU3aoUweo7cHOk4zcxuRg-1761063598566-0.0.1.1-604800000' \
--data '{
    "name": "Weekday Happy Hour",
    "type": "POS",
    "startDate": 1761019200000,
    "endDate": 1764565199999,
    "campaignId": "286039",
    "timeCriteria": {
        "startTime": "16:00",                 
        "durationInHours": "2",               
        "repeatFrequency": "WEEKS",
        "weeklyValues": [
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY"
        ]
    },
    "condition": {
        "type": "PRODUCT",
        "productCondition": {
            "criteriaList": [ { "entity": "CATEGORY", "operator": "IN", "values": ["Beverages"] } ],
            "kpi": "QUANTITY",
            "operator": "GREATER_THAN_OR_EQUAL",
            "value": "1"
        }
    },
    "action": {
        "type": "PRODUCT_BASED",
        "productBasedAction": {
            "type": "PERCENTAGE",
            "value": "20",
            "includeItemsFromConditionSet": true
        }
    }
}'
```

## Supplementary Criteria Object

This object targets customers based on their status in a loyalty program, such as their membership tier or subscription status.

| Field             | Type    | Required | Description                                                                                                                                                              | Updatable |
| :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| .loyaltyProgramId | Integer | Yes      | The ID of the loyalty program to check against.                                                                                                                          | Yes       |
| .programType      | Enum    | Yes      | The type of program. Supported values: • **`TIER`**: Targets customers in a specific loyalty tier. • **`SUBSCRIPTION`**: Targets customers with a specific subscription. | Yes       |
| .partnerProgramId | Integer | Yes      | The ID of the specific tier or subscription within the program that is being targeted.                                                                                   | Yes       |

#### Example Request

##### **Requirement:** Offer an exclusive "10% off for Gold Tier members" (Tier ID 99) who are part of the main loyalty program (ID 123).

```json
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYzNDkxOGFmND3YzI4ZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=Fl.R3pP_RilU3UFbHOk4zcxuRg-1761063598566-0.0.1.1-604800000' \
--data '{
    "name": "Gold Tier Exclusive",
    "type": "CUSTOMER",
    
    "startDate": 1761019200000,
    "endDate": 1764565199999,
    "campaignId": "286039",
    "supplementaryCriteria": {
        "loyaltyProgramId": 123,
        "programType": "TIER",
        "partnerProgramId": 99
    },
    "condition": {
        "type": "CART",
        "cartCondition": { "kpi": "SUBTOTAL", "operator": "GREATER_THAN", "value": 0 }
    },
    "action": {
        "type": "CART_BASED",
        "cartBasedAction": { "type": "PERCENTAGE", "value": 10 }
    }
}'
```

# Example response

```json 200 OK
{
    "data": {
        "id": "68de8ef2f398ae3dc8802e20",
        "name": "CODE_Promotion_Test_17573886",
        "orgId": 100737,
        "priority": 0,
        "active": true,
        "messageLabel": "test!!",
        "type": "CODE",
        "condition": {
            "type": "CART",
            "cartCondition": {
                "kpi": "SUBTOTAL",
                "operator": "EQUALS",
                "value": "250.000000"
            }
        },
        "action": {
            "type": "CART_BASED",
            "cartBasedAction": {
                "type": "ABSOLUTE",
                "value": "25.000000"
            }
        },
        "createdBy": 75197941,
        "createdOn": 1759416050903,
        "createdOnISO": "2025-10-02T14:40:50Z",
        "lastUpdatedBy": 75152721,
        "lastUpdatedOn": 1759416683389,
        "lastUpdatedOnISO": "2025-10-02T14:51:23Z",
        "startDate": 1857388651000,
        "startDateISO": "2028-11-09T13:17:31Z",
        "endDate": 1857475051000,
        "endDateISO": "2028-11-10T13:17:31Z",
        "campaignId": 39077,
        "promotionRestrictions": {
            "Code": [
                {
                    "kpi": "REDEMPTION",
                    "limit": "1.000000"
                }
            ]
        },
        "earnLimitedToSpecificAudience": false,
        "mode": "DISCOUNT",
        "maxIssuancePerCustomer": 1,
        "isStackable": false,
        "expiryDateChangeJobList": [
            {
                "jobType": "CODE",
                "status": "OPEN",
                "createdOn": 1759416683395,
                "createdOnISO": "2025-10-02T14:51:23Z",
                "lastUpdatedOn": 1759416683395,
                "lastUpdatedOnISO": "2025-10-02T14:51:23Z",
                "lastUpdatedBy": 75152721,
                "createdBy": 75152721,
                "message": "Changed to 'Expire on 2028-11-10T13:17:31Z' from 'Expire on 2025-09-23T18:29:59.999Z'",
                "requestId": "1778756bcb13f7d6b3d65587ae38f6da"
            }
        ]
    }
}
```

# Response parameters

| Field                                  | Type            | Description                                                                                                                                                                                                    |
| :------------------------------------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                                   | Object          | Contains the main container for the promotion object.                                                                                                                                                          |
| ..id                                   | String          | Specifies the unique, system-generated identifier for the promotion.                                                                                                                                           |
| ..name                                 | String          | Specifies the unique name of the promotion.                                                                                                                                                                    |
| ..orgId                                | Integer         | Specifies the unique identifier for the organization to which this promotion belongs.                                                                                                                          |
| ..type                                 | String          | Specifies the type of promotion. Possible values: POS, CODE, CUSTOMER, EARNING, REWARD.                                                                                                                        |
| ..messageLabel                         | String          | Specifies a customer-facing label for the promotion message.                                                                                                                                                   |
| ..active                               | Boolean         | Specifies if the promotion is active. Possible values: true, false.                                                                                                                                            |
| ..priority                             | Integer         | Specifies the order of application, where lower numbers have higher priority (0 is the highest). Defaults to 0 if not explicitly set.                                                                          |
| ..isStackable                          | Boolean         | Specifies if this promotion can be combined with other promotions. Defaults to false if not provided. Possible values: true, false.                                                                            |
| ..startDate                            | Long            | Specifies the start time of the promotion in Unix epoch milliseconds (UTC).                                                                                                                                    |
| ..startDateISO                         | String          | Specifies the start time in ISO 8601 format (UTC).                                                                                                                                                             |
| ..endDate                              | Long            | Specifies the end time of the promotion in Unix epoch milliseconds (UTC).                                                                                                                                      |
| ..endDateISO                           | String          | Specifies the end time in ISO 8601 format (UTC).                                                                                                                                                               |
| ..campaignId                           | String          | Specifies the identifier of the campaign that the promotion is linked to.                                                                                                                                      |
| ..createdBy                            | Long            | Specifies the unique identifier of the user who created the promotion.                                                                                                                                         |
| ..createdOn                            | Long            | Specifies the creation time in Unix epoch milliseconds (UTC).                                                                                                                                                  |
| ..createdOnISO                         | String          | Specifies the creation time in ISO 8601 format (UTC).                                                                                                                                                          |
| ..lastUpdatedBy                        | Long            | Specifies the unique identifier of the user who last updated the promotion.                                                                                                                                    |
| ..lastUpdatedOn                        | Long            | Specifies the last update time in Unix epoch milliseconds (UTC).                                                                                                                                               |
| ..lastUpdatedOnISO                     | String          | Specifies the last update time in ISO 8601 format (UTC).                                                                                                                                                       |
| ..condition                            | Object          | Defines the conditions under which the promotion applies.                                                                                                                                                      |
| ....type                               | String          | Specifies the type of condition to evaluate. Possible values: CART, TENDER, COMBO\_PRODUCT.                                                                                                                    |
| ....cartCondition                      | Object          | Contains rules for the entire shopping cart, present if condition.type is CART.                                                                                                                                |
| ......kpi                              | String          | Specifies the metric used to evaluate the cart. Possible values: SUBTOTAL, ITEMCOUNT.                                                                                                                          |
| ......operator                         | String          | Specifies the comparison operator. Possible values: EQUALS, GREATER\_THAN, GREATER\_THAN\_OR\_EQUAL.                                                                                                           |
| ......value                            | String          | Specifies the numerical value to compare the kpi against, returned as a string.                                                                                                                                |
| ....tenderCondition                    | Object          | Contains rules based on the customer's payment method, present if condition.type is TENDER.                                                                                                                    |
| ......tenderModes                      | Array           | Contains an array of specific payment methods that will trigger the condition.                                                                                                                                 |
| ........type                           | String          | Specifies the category of the payment method. Possible value: `CARD`, `CASH`.                                                                                                                                  |
| ........identifiers                    | Array           | Contains an array of strings for the exact payment methods, such as \["VISA\_CARD", "MASTERCARD"].                                                                                                             |
| ......condition                        | Object          | Contains a nested condition (typically CART type) that must also be satisfied.                                                                                                                                 |
| ....comboProductCondition              | Object          | Contains a condition where multiple product sets must be in the cart, present if condition.type is COMBO\_PRODUCT.                                                                                             |
| ......productConditions                | Array           | Contains an array of product conditions that must all be satisfied.                                                                                                                                            |
| ..action                               | Object          | Defines the action taken when the promotion applies.                                                                                                                                                           |
| ....type                               | String          | Specifies the scope of the action. Possible values: CART\_BASED, PRODUCT\_BASED, TENDER, PER\_UNIT.                                                                                                            |
| ....cartBasedAction                    | Object          | Contains an action for the entire cart, present if action.type is CART\_BASED.                                                                                                                                 |
| ......type                             | String          | Specifies the type of cart-based action. Possible value: ABSOLUTE.                                                                                                                                             |
| ......value                            | String          | Specifies the fixed monetary amount for the discount, returned as a string.                                                                                                                                    |
| ....tenderBasedAction                  | Object          | Contains the reward for a tender-based promotion, present if action.type is TENDER.                                                                                                                            |
| ......type                             | String          | Specifies the calculation method. Possible value: ABSOLUTE.                                                                                                                                                    |
| ......value                            | String          | Specifies the fixed monetary amount to be discounted, sent as a string.                                                                                                                                        |
| ....perUnitAction                      | Object          | Contains a repeating reward, present if action.type is PER\_UNIT.                                                                                                                                              |
| ......perUnitKPI                       | String          | Specifies the metric used to group items. Possible value: QUANTITY.                                                                                                                                            |
| ......perUnitDivider                   | String          | Specifies the number of units required to trigger one instance of the rewardAction.                                                                                                                            |
| ......includeItemsFromConditionSet     | Boolean         | Specifies if the action applies to the same items that triggered the condition.                                                                                                                                |
| ......rewardAction                     | Object          | Contains the specific benefit granted for each qualifying unit group.                                                                                                                                          |
| ........type                           | String          | Specifies the type of per-unit reward. Possible values: PRODUCT\_BASED, FREE\_PRODUCT, FIXED\_PRICE.                                                                                                           |
| ........productBasedAction             | Object          | Contains a discount on specific products, present if rewardAction.type is PRODUCT\_BASED.                                                                                                                      |
| ..........type                         | String          | Specifies the discount calculation method. Possible values: ABSOLUTE, PERCENTAGE.                                                                                                                              |
| ..........value                        | String          | Specifies the discount amount or percentage, returned as a string.                                                                                                                                             |
| ..........includeItemsFromConditionSet | Boolean         | Specifies if the discount applies to a different set of products than the triggering ones.                                                                                                                     |
| ..........productBasedCondition        | Object          | Contains the set of products to which the action's benefit will be applied.                                                                                                                                    |
| ............type                       | String          | Specifies the product targeting mode. Possible values: PRODUCT, COMBO\_PRODUCT.                                                                                                                                |
| ............productCondition           | Object          | Contains target products using a list of criteria.                                                                                                                                                             |
| ..............criteriaList             | Array           | Contains an array of rule objects specifying the products.                                                                                                                                                     |
| ................entity                 | String          | Specifies the product attribute to evaluate (e.g., CATEGORY, SKU, BRAND).                                                                                                                                      |
| ................operator               | String          | Specifies the operator for the list comparison. Possible values: IN, NOT\_IN.                                                                                                                                  |
| ................values                 | Array           | Contains an array of strings to match against the entity.                                                                                                                                                      |
| ..............kpi                      | String          | Specifies an optional metric for filtering products. Possible values: NONE, QUANTITY.                                                                                                                          |
| ........freeProductAction              | Object          | Contains a reward where products are given for free, present if rewardAction.type is FREE\_PRODUCT.                                                                                                            |
| ..........includeItemsFromConditionSet | Boolean         | Specifies if the free products are different from the triggering ones.                                                                                                                                         |
| ..........productBasedCondition        | Object          | Contains exactly which products are to be marked as free.                                                                                                                                                      |
| ........fixedPriceAction               | Object          | Contains a reward where products are sold at a fixed price, present if rewardAction.type is FIXED\_PRICE.                                                                                                      |
| ..........value                        | String          | Specifies the new, fixed price for the qualifying items, returned as a string.                                                                                                                                 |
| ..........includeItemsFromConditionSet | Boolean         | Specifies if the fixed price applies to products different from the triggering ones.                                                                                                                           |
| ..........productBasedCondition        | Object          | Contains exactly which products are to be sold at the fixed price.                                                                                                                                             |
| ..customerActivationRequired           | Boolean         | Specifies if a customer must opt-in for a promotion before it can be redeemed.                                                                                                                                 |
| ..maxIssuancePerCustomer               | Integer         | Specifies the total number of times this promotion can be issued to a single customer.                                                                                                                         |
| ..earningCriteria                      | Object          | Contains conditions for EARNING type promotions, present if the main type is EARNING.                                                                                                                          |
| ....active                             | Boolean         | Specifies if this specific earning rule is active.                                                                                                                                                             |
| ....criteriaDsl                        | String          | Specifies a domain-specific language string representing the earning rule.                                                                                                                                     |
| ....criteriaDslJson                    | String          | Specifies an escaped JSON string representation of the criteriaDsl rule.                                                                                                                                       |
| ....criteriaName                       | String          | Specifies a human-readable name for the earning criteria rule.                                                                                                                                                 |
| ....duration                           | Object          | Contains a placeholder object for future duration-based earning rules.                                                                                                                                         |
| ....earnedFromType                     | String          | Specifies the type of event that can trigger the rule. Possible value: ACTIVITY.                                                                                                                               |
| ....eventType                          | String          | Specifies the specific activity that triggers the rule. Possible value: TransactionAdd.                                                                                                                        |
| ....groupId                            | Integer         | Specifies an identifier for grouping related earning criteria.                                                                                                                                                 |
| ....milestoneId                        | Integer         | Specifies an identifier for a specific milestone within an earning program.                                                                                                                                    |
| ..maxEarningPerCustomer                | Integer or null | Specifies the maximum number of times a customer can earn the reward from an EARNING promotion.                                                                                                                |
| ..promotionRestrictions                | Object          | Contains usage limits and constraints on the promotion.                                                                                                                                                        |
| ....Promotion                          | Array           | Contains restrictions that apply to the overall promotion.                                                                                                                                                     |
| ....Customer                           | Array           | Contains restrictions that apply per customer.                                                                                                                                                                 |
| ....Cart                               | Array           | Contains restrictions that apply per cart.                                                                                                                                                                     |
| ....Code                               | Array           | Contains restrictions for CODE type promotions.                                                                                                                                                                |
| ......kpi                              | String          | Specifies the metric to be limited. Possible values: REDEMPTION, TRANSACTION, DISCOUNT.                                                                                                                        |
| ......frequency                        | String          | Specifies how often the restriction resets. Possible values: DAYS, WEEKS.                                                                                                                                      |
| ......minTimeBetweenRepeat             | Long            | Specifies the minimum time between uses in milliseconds.                                                                                                                                                       |
| ......limit                            | String          | Specifies the maximum allowed value for the restriction, returned as a string.                                                                                                                                 |
| ......windowType                       | Enum            | Specifies the type of limit window applied to the restriction.                                                                                                                                                 |
| ......fixedWindowConfig                | Object          | Contains the cycle configuration for the restriction when `windowType` is `FIXED`.                                                                                                                             |
| .......cycleType                       | Enum            | Specifies the type of fixed cycle.                                                                                                                                                                             |
| .......weekStartDay                    | Enum            | Specifies the start day of the weekly cycle when `cycleType` is `WEEK`.                                                                                                                                        |
| .......refreshRate                     | Integer         | Specifies the number of days per cycle when `cycleType` is `N_DAY`.                                                                                                                                            |
| .......cycleReferenceDate              | Long            | Specifies the anchor date from which the N\_DAY cycle is calculated. Time format: epoch milliseconds.                                                                                                          |
| .......cycleReferenceDateISO           | String          | ISO 8601 representation of `cycleReferenceDate`.                                                                                                                                                               |
| .......cycleReferenceDateSource        | Enum            | The cycle start date mode applied to this promotion. `PROMOTION_CONFIG`: all customers reset on the shared date in `cycleReferenceDate`. `ISSUANCE_DATE`: each customer resets on their individual issue date. |
| ..customFieldValues                    | Object          | Contains a key-value map for storing custom metadata.                                                                                                                                                          |
| ..mode                                 | String          | Specifies the application mode of the promotion. Possible value: DISCOUNT.                                                                                                                                     |
| ..earnLimitedToSpecificAudience        | Boolean         | Specifies if earning is limited to a specific audience.                                                                                                                                                        |
| ..expiryDateChangeJobList              | Array           | Contains a log of jobs created to change expiry dates for entities related to the promotion. This object only appears in the response to an Update Promotion call.                                             |
| ....jobType                            | String          | Specifies the type of entity whose expiry date is being changed. Possible values: ISSUED, EARNED, CODE.                                                                                                        |
| ....status                             | String          | Specifies the current status of the change job. Possible values: `OPEN`, `IN_PROGRESS`, `COMPLETED`, `FAILED`, `CANCELLED`.                                                                                    |
| ....createdOn                          | Long            | Specifies when the change job was created (epoch millis UTC).                                                                                                                                                  |
| ....createdOnISO                       | String          | Specifies when the change job was created in ISO 8601 format.                                                                                                                                                  |
| ....createdBy                          | Long            | Specifies the system-generated ID of the user or process that created this job.                                                                                                                                |
| ....lastUpdatedOn                      | Long            | Specifies when the change job was last updated (epoch millis UTC).                                                                                                                                             |
| ....lastUpdatedOnISO                   | String          | Specifies when the change job was last updated in ISO 8601 format.                                                                                                                                             |
| ....lastUpdatedBy                      | Long            | Specifies the system-generated ID of the user that last updated this job.                                                                                                                                      |
| ....message                            | String          | Contains a descriptive message about the expiry date change, including the old and new dates.                                                                                                                  |
| ....requestId                          | String          | Specifies the unique request ID associated with the update action.                                                                                                                                             |

# Error  codes

| Code | Description                                                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid request. Check required parameters. Ensure all required parameters are provided and valid.                          |
| 400  | Enum value is invalid. The scope must be "REWARD". Pass `scope` as `"REWARD"` only.                                         |
| 400  | defaultValue is required when isMandatory is true. Add a `defaultValue` if `isMandatory` is set to `true`.                  |
| 701  | Error while calling the segmentation engine. Check segmentation engine service connectivity and logs.                       |
| 703  | Org timezone fetch failed. Verify org timezone configuration and service availability.                                      |
| 704  | Invalid reward type passed. Provide a valid reward type as per the API specification.                                       |
| 705  | Exceeded maximum active promotions for an org. Deactivate some active promotions before creating a new one.                 |
| 706  | Promotion has expired. Use a valid, non-expired promotion for the operation.                                                |
| 707  | The passed promotion type is not supported. Change the promotion type to one supported by the system.                       |
| 708  | Exceeded the max earn per customer limit. Adjust the earn amount or check the customer limits setup.                        |
| 709  | Promotion not in running state. Ensure the promotion is currently running before proceeding.                                |
| 710  | Error while saving earned promotion. Retry after checking backend/infrastructure logs.                                      |
| 711  | Error while saving promotion, or could not get product details. Check input data and ensure product service is available.   |
| 712  | Error while creating/updating emf rules. Check rule configuration and retry or contact support.                             |
| 713  | Earned from type cannot be changed. Do not change `earnedFromType` on existing earned promotions.                           |
| 714  | Earn is not supported for this promotion type. Switch to a supported promotion type for earn operations.                    |
| 715  | Promotion was not issued to current customer. Ensure the promotion was issued to the specified customer.                    |
| 716  | Promotion name must be unique. Use an unused, unique promotion name.                                                        |
| 500  | Internal server error. Retry the request after a short delay. If the error persists, contact support with details and logs. |

# OpenAPI definition

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "Sample API",
    "version": "1.0.0",
    "description": "API specification generated from cURL for POST /v1.1/customer/add"
  },
  "servers": [
    {
      "url": "https://{host}"
    }
  ],
  "paths": {
    "/api_gateway/v1/promotions/{PromotionID}": {
      "put": {
        "description": "",
        "operationId": "",
        "responses": {
          "200": {
            "description": ""
          }
        },
        "parameters": [
          {
            "in": "path",
            "name": "PromotionID",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/68de8ef2f398ae3dc8802e20' \\\n--header 'Content-Type: application/json' \\\n--header 'X-CAP-API-AUTH-ORG-ID: 100232' \\\n--header 'user-agent: pyapps_auto_Promotion_Engine_Eucrm_Smoke' \\\n--header 'Authorization: Basic bmFtYW5fZG9jOxxxxxxxxjZlY2I2MmEy' \\\n--data '{\n    \"name\": \"CODE_Promotion_Test_17573886\",\n    \"priority\": 0,\n    \"active\": true,\n    \"messageLabel\": \"test!!\",\n    \"type\": \"CODE\",\n    \"condition\": {\n      \"type\": \"CART\",\n      \"cartCondition\": {\n        \"kpi\": \"SUBTOTAL\",\n        \"operator\": \"EQUALS\",\n        \"value\": 250.0\n      }\n    },\n    \"action\": {\n      \"type\": \"CART_BASED\",\n      \"cartBasedAction\": {\n        \"type\": \"ABSOLUTE\",\n        \"value\": 25.0\n      }\n    },\n    \"createdBy\": 70707,\n    \"createdOn\": 0,\n    \"lastUpdatedBy\": 70707,\n    \"startDate\": \"1857388651000\",\n    \"endDate\": \"1857475051000\",\n    \"campaignId\": 39077,\n    \"mode\": \"DISCOUNT\",\n    \"promotionRestrictions\": {\n      \"Code\": [\n        {\n          \"kpi\": \"REDEMPTION\",\n          \"limit\": 1\n        }\n      ]\n    },\n    \"isStackable\": false\n  }'",
              "language": "shell",
              "name": ""
            }
          ],
          "samples-languages": [
            "shell"
          ]
        },
        "summary": "Update Cart Promotion"
      }
    }
  },
  "x-readme": {}
}
```