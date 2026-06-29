> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Points Ledger Explode Info

Retrieves the points ledger explode info for customer/ user group.

The Customer Ledger Explode Info API retrieves additional points ledger info for a customer or user group.

A customer points ledger is essentially a record that tracks the points earned, spent, and adjusted within an organization and its affiliates. These points are treated like currency and can be redeemed across various units or loyalty programs within the organization.

For more information, refer to the documentation on [Points Ledgers](https://docs.capillarytech.com/reference/points-ledger).

# Example request

```curl Sample example With eventIds
curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=918088369835&source=INSTORE&eventIds=634510612' \
--header 'Authorization: Basic aWFtc2hpdkNWI1YTI5MWY=' \
--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000'
```
```curl Sample example With event name and reference ID for a transactional event
curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=918088369835&source=INSTORE&eventName=TransactionAdd&eventReferenceIds=888812880' \
--header 'Authorization: Basic aWFtc2h1YTI5MWY=' \
--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000'
```
```curl Sample example With event name and request ID for a behavioral event
curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=id&identifierValue=565039506&source=INSTORE&type=CUSTOMER&eventName=GenericEvent&eventReferenceIds=67587c26-d925-4f8d-9211-a9b4d6f8db8e' \
--header 'Authorization: Basic aWFtc2hpYTI5MWY=' \
--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000'
```
```json Sample request with getPointsEarnedBreakup=true
curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=918088369835&source=INSTORE&eventIds=634510612&getPointsEarnedBreakup=true' \
--header 'Authorization: Basic ' \
--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=8Dv9MBbR4vrWw540MN.YxjsaVPdriQsRVRJDtn4T2uE-1773323026611-0.0.1.1-604800000'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth credentials
* [ ] Access points group resource: Read access to customer points group resource

# Resource information

|                        |                                      |
| :--------------------- | :----------------------------------- |
| URI                    | v2/pointsLedger/getLedgerExplodeInfo |
| HTTP Method            | GET                                  |
| Pagination             | Yes                                  |
| Batch support          | No                                   |
| Rate limit information | NA                                   |

# Query parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        identifierName*
      </td>

      <td>
        Identifier type to identify the customer. Supported values: **MOBILE**, **ID**, **EMAIL**, **CustomerID**, **primaryUserId**, and **EXTERNALID**.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue*
      </td>

      <td>
        Value for the identifier. For example, the mobile number or customer ID.
      </td>
    </tr>

    <tr>
      <td>
        source*
      </td>

      <td>
        Source in which the identifier is available. For example, INSTORE, MARTJACK, WECHAT, FACEBOOK, WEB_ENGAGE, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL.
      </td>
    </tr>

    <tr>
      <td>
        eventIds**
      </td>

      <td>
        The list of `eventLogId` with comma-separated values. These are eventLogIds corresponding to events in loyalty, like TransactionAdd, CustomerRegistration, etc.  
        Note: Either `eventIds`, or a combination of `eventName `and `eventReferenceIds`, must be provided.
      </td>
    </tr>

    <tr>
      <td>
        eventName**
      </td>

      <td>
        Name of the event. Supports both behavioral and transactional events. Possible values: `NewBill`, `TransactionAdd`, `GroupTransactionAdd`, `LineItemsPointsPromotionImport`, `BillPointsPromotionImport`, `CustomerPromotionImport`, `GenericEvent`, `CustomerRegistration`, `CustomerUpdate`, `AllocateGoodwillPoints`, `PointsTransfer`, `PointsRedemption`, `ReturnBill`, `TargetCompleted`, `ManualPointsAdjustment`, `VoucherRedemption`

        Note: Either `eventIds` or `eventName` and `eventReferenceIds` are mandatory.
      </td>
    </tr>

    <tr>
      <td>
        eventReferenceIds**
      </td>

      <td>
        Reference ID for the event. For transactional events, this is the transaction ID. For behavioral events, this is the unique request ID generated when a behavioral event is triggered. You can add up to **ten** reference IDs for the specified `eventName`, separated by commas.
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        For a source with multiple accounts, pass the specific accountId in which the customer identifier is available.
      </td>
    </tr>

    <tr>
      <td>
        getBillDetails
      </td>

      <td>
        Setting this to true will return bill details like bill number, amount, discount, line items, etc.
      </td>
    </tr>

    <tr>
      <td>
        getPointsEarnedBreakup
      </td>

      <td>
        Setting this to `true` returns the points breakup details, such as the points category name, points allocation strategy name, expiry strategy, and other related information.  
        Ensure that the `ENABLE_POINTS_AWARDED_SOURCE_VALUE_CAPTURING` configuration is enabled.
      </td>
    </tr>

    <tr>
      <td>
        getCustomFields
      </td>

      <td>
        Setting this value will return the custom fields set up by the brand.
      </td>
    </tr>

    <tr>
      <td>
        getExtendedFields
      </td>

      <td>
        Setting this field will return the extended fields set up by the brand.
      </td>
    </tr>

    <tr>
      <td>
        getMaxConversionDetails
      </td>

      <td>
        Setting this field to true will return the max conversion details set for Add Transaction. For all line items where delayed accrual is based on fixed or return date, the max of all dates is calculated and shown in the field `maxConversionDate`.
      </td>
    </tr>

    <tr>
      <td>
        getPaymentModes
      </td>

      <td>
        Setting this field will show an array of payment modes used (e.g., UPI, CASH, etc.).
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        Returns entries for type of user—either individual customer or group. Supported values: CUSTOMER, USERGROUP2.
      </td>
    </tr>

    <tr>
      <td>
        isPrimaryUser
      </td>

      <td>
        Returns entry for the primary member of a group, in case of user groups.
      </td>
    </tr>

    <tr>
      <td>
        includeAlternateCurrencies
      </td>

      <td>
        Pass `includeAlternateCurrencies=true` to retrieve all alternate currencies available for the customer.
      </td>
    </tr>

    <tr>
      <td>
        alternateCurrencyNames
      </td>

      <td>
        Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated currency names. Set `includeAlternateCurrencies` to false when using this. If true, all available currencies are listed.
      </td>
    </tr>
  </tbody>
</Table>

# Example Response

```json Sample response for generic events
{
    "events": [
        {
            "eventLogId": 30527930,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName",
                "targetId": 76041,
                "targetName": "TName",
                "targetDescription": "TDescription",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "targetValue": "1000.000",
                "achievedValue": "1200.000",
                "sourceId": 641554,
                "sourceType": "USERTARGET",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Progname",
                            "programId": 1933,
                            "programName": "DefaultProgram",
                            "value": 100.0,
                            "expiresOn": "2026-11-30 23:59:59.0",
                        		"expiresOnISO": "2026-11-30T23:59:59+05:30",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                }
            },
            "eventReferenceId": "263985",
            "uniqueId": "71730c8b628d0978e21e5e374f50fae606779fd412"
        },
        {
            "eventLogId": 30527931,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "300.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 1"
            },
            "eventReferenceId": "263986",
            "uniqueId": "88248bc99f945f1778f85af7c6ba69e4b90651c6"
        },
        {
            "eventLogId": 30527932,
            "eventName": "TargetCompleted",
            "eventDetails": {
                "eventTime": "2024-10-25 22:59:12.0",
                "tillId": 50137565
            },
            "targetCompletedDetails": {
                "targetGroupID": 46750,
                "targetGroupName": "TGName1",
                "targetId": 76041,
                "targetName": "TName1",
                "targetDescription": "TDesc1",
                "targetPeriodID": 66277,
                "targetPeriodName": "Cycle_4",
                "triggerValue": "600.000",
                "sourceId": 78104,
                "sourceType": "MILESTONE",
                "pointsEarned": {
                    "promo": [
                        {
                            "promotionId": 1133572888,
                            "promotionName": "Promoname",
                            "programId": 1933,
                            "programName": "Progname",
                            "value": 100.0,
                            "expiresOn": "2025-10-31 23:59:59.0",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "mileStoneName": "Sub target 2"
            },
            "eventReferenceId": "263987",
            "uniqueId": "7470f2457563461f66bc1aasgf1760d8ga71ec3ee0174c267"
        }
    ],
    "warnings": []
}
```
```json Sample response With eventIds
{
    "events": [
        {
            "eventLogId": 652367550,
            "eventName": "PointsRedemption",
            "eventDetails": {
                "eventTime": "2025-12-03 05:13:39.0",
                "eventTimeISO": "2025-12-03T05:13:39Z",
                "tillId": 75155297,
                "redemptionDetails": {
                    "pointsRedeemed": "20.000",
                    "redemptionPurpose": "",
                    "transactionNumber": "test00transact96",
                    "billingTime": "2025-07-24 14:00:00.0",
                    "billingTimeISO": "2025-07-24T14:00:00Z",
                    "redemptionId": "evjan8",
                    "notes": "Redeemed to transfer points to the friend",
                    "groupRedemption": false
                }
            },
            "customFields": [],
            "pointsBreakup": [],
            "eventReferenceId": "566135941",
            "uniqueId": "QGcBZ8Nv3C"
        }
    ],
    "warnings": []
}
```
```json Sample response with With event name and reference ID for a transactional event
{
    "events": [
        {
            "eventLogId": 634510612,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2025-07-16 14:00:00.0",
                "eventTimeISO": "2025-07-16T14:00:00Z",
                "tillId": 75152721
            },
            "eventReferenceId": "888812880",
            "uniqueId": "yFNq8FgavV"
        }
    ],
    "warnings": []
}
```
```json Sample response with With event name and request ID for a behavioral event
{
    "events": [
        {
            "eventLogId": 44049002,
            "eventName": "GenericEvent",
            "eventDetails": {
                "eventDisplayName": "Walk5Kms",
                "tillId": 50789251,
                "displayName": "Walk5Kms"
            },
            "pointsEarned": {
                "regular": [],
                "promo": [
                    {
                        "promotionId": 1133595541,
                        "promotionName": "Walk5Kms",
                        "programId": 3500,
                        "programName": "DocDemoDefaultProgram",
                        "value": 100.0,
                        "expiresOn": "2026-11-30 23:59:59.0",
                        "expiresOnISO": "2026-11-30T23:59:59+05:30",
                        "promotionStartDate": "2025-11-01 00:00:00.0",
                        "promotionEndDate": "2026-02-25 23:59:59.0"
                    }
                ],
                "promised": []
            },
            "behavioralEventMetadata": {
                "label": "Walk5Kms",
                "fields": [
                    {
                        "fieldName": "mobile",
                        "fieldType": "customer",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "valueType": "BOOLEAN",
                                "value": "true"
                            },
                            "identifierType": {
                                "valueType": "ENUM",
                                "value": "mobile"
                            },
                            "isRequired": {
                                "valueType": "BOOLEAN",
                                "value": "true"
                            },
                            "source": {
                                "valueType": "ENUM",
                                "value": "INSTORE"
                            }
                        }
                    },
                    {
                        "fieldName": "stepsWalked",
                        "fieldType": "double",
                        "attributes": {
                            "isPsiData": {
                                "valueType": "BOOLEAN",
                                "value": "false"
                            },
                            "isRequired": {
                                "valueType": "BOOLEAN",
                                "value": "true"
                            },
                            "isUniqueKeyField": {
                                "valueType": "BOOLEAN",
                                "value": "false"
                            }
                        }
                    }
                ]
            },
            "eventReferenceId": "fb98ae16-668d-4c48-826b-1c13fa5344e7",
            "uniqueId": "fb98ae16-668d-4c48-826b-1c13fa5344e7"
        }
    ],
    "warnings": [
        {
            "code": 9018,
            "message": "no alternate currency found for org with given input params",
            "status": false
        }
    ]
}
```
```json Ledger Explode information with events
{
    "events": [
        {
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId1},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        },

{
            "eventLogId": 27909380,
            "eventName": "CustomerRegistration",
             “eventReferenceIds“:{RefId2},
            "eventDetails": {
                "eventTime": "2024-01-18 17:18:00.0",
                "tillId": 50697469
            },
            "pointsEarned": {
                "regular": [],
                "promo": [],
                "promised": []
            }
        }
    ],
    "warnings": []
}
```
```json Goodwillpoints event
{
    "events": [
        {
            "eventLogId": 659919680,
            "eventName": "AllocateGoodwillPoints",
            "eventDetails": {
                "eventTime": "2026-02-10 20:25:58.0",
                "eventTimeISO": "2026-02-10T20:25:58Z",
                "reason": "GoodGuy",
                "comments": "Good behaviour",
                "assocId": 0,
                "requestId": 17729827
            },
            "pointsEarned": {
                "regular": [],
                "promo": [
                    {
                        "promotionId": 75984,
                        "promotionName": "Goodwill Promotion",
                        "programId": 973,
                        "programName": "DocDemoDefaultProgram",
                        "value": 100.0,
                        "expiresOn": "2126-02-10 23:59:59.0",
                        "expiresOnISO": "2126-02-10T23:59:59Z",
                        "expiryType": "fixed"
                    }
                ],
                "promised": []
            },
            "eventReferenceId": "-1",
            "uniqueId": "rN5DUi2osg"
        }
    ],
    "warnings": []
}
```
```Text Return transaction event
{
    "events": [
        {
            "eventLogId": 632749682,
            "eventName": "PointsRedemption",
            "eventDetails": {
                "eventTime": "2025-07-03 07:13:20.0",
                "tillId": 75152721,
                "redemptionDetails": {
                    "pointsRedeemed": "101.000",
                    "redemptionPurpose": "testUpdate",
                    "transactionNumber": "txn-79",
                    "redemptionId": "kh4Mh7",
                    "notes": "Redeemed to transfer points to the friend",
                    "groupRedemption": false
                }
            },
            "customFields": [
                {
                    "name": "card_number",
                    "value": "123456"
                }
            ],
            "pointsBreakup": [],
            "eventReferenceId": "564332013",
            "uniqueId": "nQmaNo4ay9"
        }
    ],
    "warnings": []
}
```
```json With get points earned filter
{
    "events": [
        {
            "eventLogId": 24732968,
            "eventName": "TransactionAdd",
            "eventDetails": {
                "eventTime": "2024-03-26 10:38:00.0",
                "eventTimeISO": "2024-03-26T10:38:00+05:30",
                "tillId": 50671937
            },
            "billDetails": {
                "type": "loyalty",
                "billNumber": "num124536",
                "grossAmount": 30.0,
                "discount": 5.0,
                "billAmount": 200.0,
                "note": "this is test1",
                "source": "instore",
                "billDate": "2024-03-26 10:38:00.0",
                "billDateISO": "2024-03-26T10:38:00+05:30",
                "pointsEarned": {
                    "regular": [
                        {
                            "value": 0.0,
                            "expiresOn": "2025-03-31 23:59:59.0",
                            "expiresOnISO": "2025-03-31T23:59:59+05:30",
                            "programId": 2649,
                            "programName": "VidhiJainOrgDefaultProgram",
                            "expiryType": "fixed"
                        }
                    ],
                    "promo": [],
                    "promised": []
                },
                "pointsEarnedBreakup": {
                    "regular": [
                        {
                            "value": 0.0,
                            "expiresOn": "2025-03-31 23:59:59.0",
                            "expiresOnISO": "2025-03-31T23:59:59+05:30",
                            "awardedOn": "2024-03-26 10:38:00.0",
                            "awardedOnISO": "2024-03-26T10:38:00+05:30",
                            "sourceValue": 0.0,
                            "programId": 2649,
                            "programName": "VidhiJainOrgDefaultProgram",
                            "allocationStrategyId": 111526,
                            "allocationStrategyName": "10x fixed",
                            "pointsCategoryId": 18871,
                            "pointsCategoryName": "Main",
                            "expiryStrategyId": 109281,
                            "expiryStrategyName": "NUM_MONTHS_END12",
                            "expiryType": "fixed"
                        }
                    ],
                    "promised": []
                },
                "alternateCurrencyValueEarned": [
                    {
                        "regular": [
                            {
                                "value": 150.0,
                                "expiresOn": "2025-03-31 23:59:59.0",
                                "expiresOnISO": "2025-03-31T23:59:59+05:30",
                                "programId": 2649,
                                "programName": "VidhiJainOrgDefaultProgram",
                                "expiryType": "fixed"
                            }
                        ],
                        "promo": [],
                        "promised": [],
                        "alternateCurrencyName": "acName",
                        "alternateCurrencyIdentifier": "P7d8Br"
                    }
                ],
                "alternateCurrencyValueEarnedBreakup": [
                    {
                        "regular": [
                            {
                                "value": 0.0,
                                "expiresOn": "2025-03-31 23:59:59.0",
                                "expiresOnISO": "2025-03-31T23:59:59+05:30",
                                "awardedOn": "2024-03-26 10:38:00.0",
                                "awardedOnISO": "2024-03-26T10:38:00+05:30",
                                "sourceValue": 0.0,
                                "programId": 2649,
                                "programName": "VidhiJainOrgDefaultProgram",
                                "allocationStrategyId": 111529,
                                "allocationStrategyName": "alllocate 150",
                                "pointsCategoryId": 20151,
                                "pointsCategoryName": "acName_PointCategory",
                                "expiryStrategyId": 109281,
                                "expiryStrategyName": "NUM_MONTHS_END12",
                                "expiryType": "fixed"
                            }
                        ],
                        "promised": [],
                        "alternateCurrencyName": "acName",
                        "alternateCurrencyIdentifier": "P7d8Br"
                    }
                ],
                "lineItems": [
                    {
                        "id": 2158986015,
                        "itemCode": "sku_164716451_2",
                        "source": "instore",
                        "grossAmount": 0.0,
                        "discount": 0.0,
                        "amount": 300.0,
                        "rate": 10.5,
                        "qty": 3.0
                    },
                    {
                        "id": 2158986016,
                        "itemCode": "sku_164716451_3",
                        "source": "instore",
                        "grossAmount": 0.0,
                        "discount": 0.0,
                        "amount": 300.0,
                        "rate": 10.5,
                        "qty": 3.0
                    },
                    {
                        "id": 2158986017,
                        "itemCode": "sku_164716451_4",
                        "source": "instore",
                        "grossAmount": 0.0,
                        "discount": 0.0,
                        "amount": 300.0,
                        "rate": 10.5,
                        "qty": 3.0
                    }
                ]
            },
            "customFields": [],
            "extendedFields": [],
            "paymentModes": [],
            "pointInTimeSlabs": [
                {
                    "pointInTimeSlabNumber": 2,
                    "pointInTimeSlabName": "SILVER",
                    "programId": 2649,
                    "isDefaultProgram": true
                }
            ],
            "eventReferenceId": "2151534230",
            "uniqueId": "sC1RXvEHWU"
        }
    ],
    "warnings": [
        {
            "code": 9018,
            "message": "alternate currency with given name not found for org, name: dummy",
            "status": false
        }
    ]
}
```

# Response Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        eventLogId
      </td>

      <td>
        Integer
      </td>

      <td>
        A unique identifier for the event.
      </td>
    </tr>

    <tr>
      <td>
        eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event.  ` `NewBill`, `TransactionAdd`, `GroupTransactionAdd`, `LineItemsPointsPromotionImport`, `BillPointsPromotionImport`, `CustomerPromotionImport`, `GenericEvent`, CustomerRegistration, `CustomerUpdate`, `AllocateGoodwillPoints`, `PointsTransfer`, `PointsRedemption`, `ReturnBill`, `TargetCompleted`, `ManualPointsAdjustment`, `VoucherRedemption`
      </td>
    </tr>

    <tr>
      <td>
        eventDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the event.
      </td>
    </tr>

    <tr>
      <td>
        -eventTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the event-triggered date in YYYY-MM-DD HH:MM:SS.s format. **Note**: This field will be deprecated in the future and is being replaced by eventTimeISO.
      </td>
    </tr>

    <tr>
      <td>
        -eventTimeISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the event-triggered date and time in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        -eventDisplayName
      </td>

      <td>
        String
      </td>

      <td>
        Display name of the event, e.g., `"CupSeries2024"`.
      </td>
    </tr>

    <tr>
      <td>
        -tillId
      </td>

      <td>
        Integer
      </td>

      <td>
        ID of the till where the event was recorded.
      </td>
    </tr>

    <tr>
      <td>
        -comments
      </td>

      <td>
        String
      </td>

      <td>
        Additional comments provided while issuing goodwill points.
      </td>
    </tr>

    <tr>
      <td>
        -assocId
      </td>

      <td>
        long
      </td>

      <td>
        User ID of the Intouch user who issued the Goodwill points.
      </td>
    </tr>

    <tr>
      <td>
        -displayName
      </td>

      <td>
        String
      </td>

      <td>
        Name to display for the event, e.g., `"CUP SERIES CHECK-IN"`.
      </td>
    </tr>

    <tr>
      <td>
        -redemptionDetails
      </td>

      <td>
        Array
      </td>

      <td>
        Includes the details related to the redemption of points.
      </td>
    </tr>

    <tr>
      <td>
        --pointsRedeemed
      </td>

      <td>
        String
      </td>

      <td>
        The number of points that were redeemed in the transaction.
      </td>
    </tr>

    <tr>
      <td>
        --redemptionPurpose
      </td>

      <td>
        String
      </td>

      <td>
        Purpose of points redemption.
      </td>
    </tr>

    <tr>
      <td>
        --transactionNumber
      </td>

      <td>
        String
      </td>

      <td>
        The transaction/bill number associated with the points redemption.
      </td>
    </tr>

    <tr>
      <td>
        --redemptionId
      </td>

      <td>
        String
      </td>

      <td>
        A unique identifier for the redemption transaction.
      </td>
    </tr>

    <tr>
      <td>
        targetCompletedDetails
      </td>

      <td>
        Array
      </td>

      <td>
        Object containing details of a completed target.
      </td>
    </tr>

    <tr>
      <td>
        -targetGroupID
      </td>

      <td>
        String
      </td>

      <td>
        The unique group ID of the target.
      </td>
    </tr>

    <tr>
      <td>
        -targetGroupName
      </td>

      <td>
        String
      </td>

      <td>
        The unique name of the target group.
      </td>
    </tr>

    <tr>
      <td>
        -targetId
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique ID of the target.
      </td>
    </tr>

    <tr>
      <td>
        -targetName
      </td>

      <td>
        String
      </td>

      <td>
        The unique name of the target.
      </td>
    </tr>

    <tr>
      <td>
        -targetDescription
      </td>

      <td>
        String
      </td>

      <td>
        Description of the target (if added).
      </td>
    </tr>

    <tr>
      <td>
        -targetPeriodID
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique ID of the target period.
      </td>
    </tr>

    <tr>
      <td>
        -targetPeriodName
      </td>

      <td>
        String
      </td>

      <td>
        The unique name of the target period.
      </td>
    </tr>

    <tr>
      <td>
        -sourceId
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique ID of the target source.
      </td>
    </tr>

    <tr>
      <td>
        -sourceType
      </td>

      <td>
        String
      </td>

      <td>
        The type of source (MILESTONE, STREAKS, UNIFIED).
      </td>
    </tr>

    <tr>
      <td>
        pointsEarned
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details of points earned in the event.
      </td>
    </tr>

    <tr>
      <td>
        -regular
      </td>

      <td>
        Array
      </td>

      <td>
        Array of regular points earned (empty in this case).
      </td>
    </tr>

    <tr>
      <td>
        -promo
      </td>

      <td>
        Array
      </td>

      <td>
        Array of promotional points earned during the event.
      </td>
    </tr>

    <tr>
      <td>
        --promotionId
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the promotion, e.g., `8166`.
      </td>
    </tr>

    <tr>
      <td>
        --promotionName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the promotion, e.g., `SummerPromo2025`.
      </td>
    </tr>

    <tr>
      <td>
        --programId
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the loyalty program associated with the promotion, e.g., `1155`.
      </td>
    </tr>

    <tr>
      <td>
        --programName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the loyalty program, e.g., `"NASCAR LoyaltyDefaultProgram"`.
      </td>
    </tr>

    <tr>
      <td>
        --value
      </td>

      <td>
        Float
      </td>

      <td>
        The value of the points earned from the promotion, e.g., `200.0`.
      </td>
    </tr>

    <tr>
      <td>
        --expiresOn
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the promotion expiry date and time. **Note:** This field will be deprecated in the future and is being replaced by `expiresOnISO`.
      </td>
    </tr>

    <tr>
      <td>
        --expiresOnISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the promotion expiry date and time in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        --promotionStartDate
      </td>

      <td>
        String
      </td>

      <td>
        The start date of the promotion, e.g., `"2024-02-04 00:00:00.0"`.
      </td>
    </tr>

    <tr>
      <td>
        --promotionEndDate
      </td>

      <td>
        String
      </td>

      <td>
        The end date of the promotion, e.g., `"2024-03-05 23:59:59.0"`.
      </td>
    </tr>

    <tr>
      <td>
        -promised
      </td>

      <td>
        Array
      </td>

      <td>
        Array of promised points (empty in this case).
      </td>
    </tr>

    <tr>
      <td>
        behavioralEventMetadata
      </td>

      <td>
        Object
      </td>

      <td>
        Metadata about the behavioral event associated with the check-in.
      </td>
    </tr>

    <tr>
      <td>
        -label
      </td>

      <td>
        String
      </td>

      <td>
        The label for the behavioral event, e.g., `"CUP SERIES CHECK-IN"`.
      </td>
    </tr>

    <tr>
      <td>
        -fields
      </td>

      <td>
        Array
      </td>

      <td>
        An array of fields related to the event's metadata.
      </td>
    </tr>

    <tr>
      <td>
        --fieldName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the field, e.g., `"activity_date"`.
      </td>
    </tr>

    <tr>
      <td>
        --fieldType
      </td>

      <td>
        String
      </td>

      <td>
        The type of the field, e.g., `"DATE"`.
      </td>
    </tr>

    <tr>
      <td>
        --attributes.isRequired.valueType
      </td>

      <td>
        String
      </td>

      <td>
        The type of value for the `isRequired` attribute for the event, e.g., `"BOOLEAN"`. This is configured during the [creation of the event](https://docs.capillarytech.com/docs/setup-test-behavioral-events).
      </td>
    </tr>

    <tr>
      <td>
        --attributes.isRequired.value
      </td>

      <td>
        String
      </td>

      <td>
        The value indicating if the field is required, e.g., `"false"`.
      </td>
    </tr>

    <tr>
      <td>
        --isUniqueKeyField.valueType
      </td>

      <td>
        String
      </td>

      <td>
        The type of value for the `isUniqueKeyField` attribute, e.g., `"BOOLEAN"`. This is configured during the [creation of the event](https://docs.capillarytech.com/docs/setup-test-behavioral-events).
      </td>
    </tr>

    <tr>
      <td>
        --isUniqueKeyField.value
      </td>

      <td>
        String
      </td>

      <td>
        The value indicating if the field is a unique key, e.g., `"false"`.
      </td>
    </tr>

    <tr>
      <td>
        eventReferenceId
      </td>

      <td>
        String
      </td>

      <td>
        The event request ID. This is generated when the [event is sent](https://docs.capillarytech.com/reference/post-event). This helps to trace the event. For `TargetCompleted` events, this ID (`targetAchievedEventLogId`) is generated when a user has achieved a target.
      </td>
    </tr>

    <tr>
      <td>
        uniqueId
      </td>

      <td>
        String
      </td>

      <td>
        A [unique identifier](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check) for this specific event instance, e.g., `"70375599-a144-4065-8db5-a6abd061ddf7"`. This can be the same as `requestId` or a hash of the payload when the `isUniqueKeyField` is enabled.
      </td>
    </tr>

    <tr>
      <td>
        billDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details on the following information: type (type of transaction), bill number (unique transaction number), gross amount, discount, bill amount, note, source, bill date (time in ISO 8601 format), and points earned details.
      </td>
    </tr>

    <tr>
      <td>
        -billNumber
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the transaction. This is defined when adding the original transaction.
      </td>
    </tr>

    <tr>
      <td>
        -billAmount
      </td>

      <td>
        Float
      </td>

      <td>
        Total transaction amount for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        -note
      </td>

      <td>
        String
      </td>

      <td>
        Note for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        -returnDate
      </td>

      <td>
        String
      </td>

      <td>
        Date when the transaction was returned in in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format. **Note:** This field will be deprecated in the future and is being replaced by `returnDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        -returnDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the returned transaction date and time in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        -returnAmount
      </td>

      <td>
        Float
      </td>

      <td>
        Total amount for the return transaction.
      </td>
    </tr>

    <tr>
      <td>
        -billDate
      </td>

      <td>
        String
      </td>

      <td>
        Date when the transaction was created in ISO 8601 `YYYY-MM-DDTHH:mm:ss.SSS` format. **Note**: This field will be deprecated in the future and is being replaced by `billDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        -billDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the transaction created date and time in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        -returnType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of return. Possible values: `AMOUNT`, `FULL`, `LINE_ITEM`, `CANCELLED`.
      </td>
    </tr>

    <tr>
      <td>
        -returnBillId
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID for the return transaction that is generated after a return transaction. This is the `entityId` of the return transaction.
      </td>
    </tr>

    <tr>
      <td>
        -pointsEarned
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details on the points earned for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        -lineItems
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details on line items in the bill.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details on custom fields for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        -name
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        -value
      </td>

      <td>
        Any
      </td>

      <td>
        Value for the corresponding custom field name. The data type for the value is based on what is configured for the custom field.
      </td>
    </tr>

    <tr>
      <td>
        pointsEarnedBreakup
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing points earned details with break up.
      </td>
    </tr>

    <tr>
      <td>
        awardedOn
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points awarded  date in YYYY-MM-DD HH:MM:SS.s format. **Note:** This field will be deprecated in the future and is being replaced by `awardedOnISO`.
      </td>
    </tr>

    <tr>
      <td>
        awardedOnISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points awarded date and time in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.

        **Note:** The timezone offset returned by `awardedOnISO` reflects the data as stored and may not match the server timezone in all cases.
      </td>
    </tr>

    <tr>
      <td>
        expiresOn
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points expiry  date in YYYY-MM-DD HH:MM:SS.s format. **Note**: This field will be deprecated in the future and is being replaced by `expiresOnISO`.
      </td>
    </tr>

    <tr>
      <td>
        expiresOnISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points expiry date and time in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        Warnings, if any.
      </td>
    </tr>
  </tbody>
</Table>

## Response parameters: Filtered by`ManualPointsAdjustment ` event ID

```
{
    "events": [
        {
            "eventLogId": 656317605,
            "eventName": "ManualPointsAdjustment",
            "eventDetails": {
                "eventTime": "2026-01-07 05:43:40.0",
                "eventTimeISO": "2026-01-07T05:43:40Z",
                "tillId": 75152721
            },
            "eventReferenceId": "-1",
            "uniqueId": "J52P7ttKJL",
            "manualPointsAdjustmentDetails": {
                "orgId": 100737,
                "customerId": 566135941,
                "totalPointsDeducted": "100.000",
                "createdOn": "2026-01-07 05:43:40",
                "createdOnISO": "2026-01-07T05:43:40Z",
                "reason": "testing",
                "pointsDeductionBreakUpDetails": [
                    {
                        "customerId": 566135941,
                        "loyaltyId": 566135941,
                        "programId": 973,
                        "programName": "DocDemoDefaultProgram",
                        "promotionId": 75984,
                        "promotionName": "Goodwill Promotion",
                        "pointAwardedRefType": "POINT_AWARDED_CUSTOMER_PROMOTION",
                        "pointAwardedRefId": 738338727,
                        "deductionType": "MANUAL_ADJUSTMENT",
                        "pointsDeducted": 100.0,
                        "pointsDeductedStr": "100.000",
                        "pointsDeductedCurrencyValue": 100.0,
                        "pointsDeductedCurrencyValueStr": "100.000",
                        "pointsDeductedOn": "2026-01-07 05:43:40.0",
                        "pointsDeductedOnISO": "2026-01-07T05:43:40Z",
                        "pointsDeductedBy": "naman",
                        "pointsDeductedById": 75152721,
                        "sourceType": "Bill",
                        "awardedTillId": 75197941,
                        "awardedTillDate": "2025-12-03 12:16:59.0"
                    }
                ]
            }
        }
    ],
    "warnings": []
}
```

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter name
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
        pointsDeductionBreakUpDetails
      </td>

      <td>
        List PointsDeductionBreakUpDetail
      </td>

      <td>
        List containing detailed breakup of loyalty points deductions for a customer.
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        int
      </td>

      <td>
        Unique identifier of the customer whose points were deducted.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyId
      </td>

      <td>
        Long
      </td>

      <td>
        Loyalty ID associated with the customer.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        programName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the loyalty program under which the points were deducted.
      </td>
    </tr>

    <tr>
      <td>
        promotionId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the promotion linked to the points deduction.
      </td>
    </tr>

    <tr>
      <td>
        promotionName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the promotion associated with the deduction.
      </td>
    </tr>

    <tr>
      <td>
        pointAwardedRefType
      </td>

      <td>
        String
      </td>

      <td>
        Reference type indicating how the original points were awarded.
      </td>
    </tr>

    <tr>
      <td>
        pointAwardedRefId
      </td>

      <td>
        Long
      </td>

      <td>
        Reference ID of the original points award transaction.
      </td>
    </tr>

    <tr>
      <td>
        deductionType
      </td>

      <td>
        String
      </td>

      <td>
        Type of points deduction (e.g., manual adjustment).
      </td>
    </tr>

    <tr>
      <td>
        pointsDeducted
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Number of loyalty points deducted.
      </td>
    </tr>

    <tr>
      <td>
        pointsDeductedStr
      </td>

      <td>
        String
      </td>

      <td>
        Points deducted represented as a formatted string.
      </td>
    </tr>

    <tr>
      <td>
        pointsDeductedCurrencyValue
      </td>

      <td>
        BigDecimal
      </td>

      <td>
        Currency value equivalent of the deducted points.
      </td>
    </tr>

    <tr>
      <td>
        pointsDeductedCurrencyValueStr
      </td>

      <td>
        String
      </td>

      <td>
        Currency value of the deducted points as a formatted string.
      </td>
    </tr>

    <tr>
      <td>
        pointsDeductedOn
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points deducte  date in yyyy-MM-dd HH:mm:ss.S
        format. **Note:** This field will be deprecated in the future and is being replaced by `pointsDeductedOnISO`.
      </td>
    </tr>

    <tr>
      <td>
        pointsDeductedOnISO
      </td>

      <td>
        Date
      </td>

      <td>
        Indicates the date and time of the points deducted in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        pointsDeductedBy
      </td>

      <td>
        String
      </td>

      <td>
        Username of the user who performed the points deduction.
      </td>
    </tr>

    <tr>
      <td>
        pointsDeductedById
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the user who performed the deduction.
      </td>
    </tr>

    <tr>
      <td>
        sourceType
      </td>

      <td>
        String
      </td>

      <td>
        Source that triggered the points deduction (e.g., Bill).
      </td>
    </tr>

    <tr>
      <td>
        awardedTillId
      </td>

      <td>
        Integer
      </td>

      <td>
        Identifier of the till where the original points were awarded.
      </td>
    </tr>

    <tr>
      <td>
        awardedTillDate
      </td>

      <td>
        String
      </td>

      <td>
        Date and time when the original points were awarded. **Note:** This field will be deprecated in the future and is being replaced by `awardedTillDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        awardedTillDateISO
      </td>

      <td>
        Date
      </td>

      <td>
        Indicates the date and time of when the original points were awarded in ISO 8601 format, returned in the server timezone.

        **EU server example**:
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC).

        **India server example**:
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST).

        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>
  </tbody>
</Table>

# Error codes

| HTTP Code | Description                                                                                                           |
| :-------- | :-------------------------------------------------------------------------------------------------------------------- |
| 9022      | Event reference IDs are invalid.                                                                                      |
| 11014     | Event name not found. Provide a valid `event name`.                                                                   |
| 11023     | Invalid identifiers found. Either EventLogId or (EventName and BillId) are required.                                  |
| 11012     | Invalid `userId` field value.                                                                                         |
| 11013     | IdentifierName and identifierValue, source can not be empty.                                                          |
| 8013      | Invalid `identifiername` field value.                                                                                 |
| 9003      | Error fetching points ledger data when `type` is invalid. Provide a valid `type`.                                     |
| 1632      | group id/externalId/primary userId passed is invalid.                                                                 |
| 9021      | Invalid identifiers found when invalid `eventid` is passed. Provide a valid `eventId`.                                |
| 11017     | Event id format exception. The provided value is not a valid numeric `eventIds` . Provide a valid numeric `eventIds`. |
| 9005      | Invalid `alternateCurrencyNames` field value. Provide a valid `alternateCurrencyNames`.                               |
| 9018      | Alternate currencies not found with provided category filters. Provide a valid alternate currency name.               |
| 11021     | EventId and Event References, both cannot be passed. Provide either `eventId` or `eventName `and `eventReferenceIds`. |
| 11019     | Source value capturing status is disabled. To enable it raise a Jira ticket to the Capillary Product Support team.    |

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
    "/pointsLedger/getLedgerExplodeInfo": {
      "get": {
        "summary": "Get Points Ledger Explode info",
        "description": "Retrieves the points ledger explode info for customer/ user group.\n\n> **Note:** This API returns promotion details and behavioral event metadata (field schema). It does not return custom payload attributes submitted with a behavioral event (such as `dollars_to_award` or `vendor_reference_id`). To retrieve those attributes, use [GET v2/events/event_data/{userId}](https://docs.capillarytech.com/reference/get-customer-events) instead.",
        "operationId": "get-points-ledger-explode-info",
        "parameters": [
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier type to identify the customer. The allowed values are = email, mobile, cuid, externalId, id, primaryUserId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the specified identifier type of the customer",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the identifier is available. The allowed values are = INSTORE, MARTJACK, WECHAT, FACEBOOK, WEB_ENG,TMALL,TAOBAO,JD, ECOMMERCE, WEBSITE,LINE,ALL",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "eventIds",
            "in": "query",
            "description": "The list of eventId’s with comma separated  values. These are eventLogIds, corresponding to the events in loyalty like TransactionAdd, CustomerRegistration etc.",
            "required": true,
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "For a source with multiple accounts, pass the specific accountId in which the customer identifier is available.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "getBillDetails",
            "in": "query",
            "description": "Setting this to true will return Bill details like the bill no, amount, discount, line items etc",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "getPointsEarnedBreakup",
            "in": "query",
            "description": "Setting this to true will return the points breakup details like points category Name, points allocation strategy Name, expiry strategy etc",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "getCustomFields",
            "in": "query",
            "description": "Setting this value will return the custom fields set up by the brand",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "getExtendedFields",
            "in": "query",
            "description": "Setting this field will return the extended fields set up by the brand",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "getMaxConversionDetails",
            "in": "query",
            "description": "Setting this field to true will return the max conversion details which is set for Add txn, for all line items where delayed accrual is based on fixed or return date, max of all dates is calculated and show in the field name “maxConversionDate”",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "getPaymentMode",
            "in": "query",
            "description": "Setting this field will show an array of payment modes used ex UPI, CASH etc",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Setting this field returns entries for type of user, whether individual customer or a group. Supported values: CUSTOMER, USERGROUP2",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "isPrimaryUser",
            "in": "query",
            "description": "Returns entry for the primary member of a group, in case of usergroups.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "includeAlternateCurrencies",
            "in": "query",
            "description": "Pass includeAlternateCurrencies=true to retrieve all alternate currencies available with the customer.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "alternateCurrencyNames",
            "in": "query",
            "description": "Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter includeAlternateCurrencies to false when you use this. If the value is true, includeAlternateCurrencies lists all the available currencies.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "eventName",
            "in": "query",
            "description": "Name of the event (GenericEvent, TransactionAdd, ReturnBill).",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "eventReferenceIds",
            "in": "query",
            "description": "A reference ID is a unique identifier that links to an event.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "NewBill/Txn Add": {
                    "value": "{\n  \"events\": [\n    {\n      \"eventLogId\": 549393345,\n      \"eventName\": \"TransactionAdd\",\n      \"eventDetails\": {\n        \"eventTime\": \"2023-08-02 16:24:44.0\",\n        \"tillId\": 100004318\n      },\n      \"billDetails\": {\n        \"type\": \"loyalty\",\n        \"billNumber\": \"TC300051690458\",\n        \"grossAmount\": 0.0,\n        \"discount\": 0.0,\n        \"billAmount\": 11691.0,\n        \"note\": \"\",\n        \"source\": \"instore\",\n        \"pointsEarned\": {\n          \"regular\": [\n            \n          ],\n          \"promo\": [\n            \n          ],\n          \"promised\": [\n            \n          ]\n        },\n        \"lineItems\": [\n          {\n            \"id\": 310201424,\n            \"itemCode\": \"243593\",\n            \"source\": \"instore\",\n            \"grossAmount\": 0.0,\n            \"discount\": 0.0,\n            \"amount\": 11691.0,\n            \"rate\": 0.0,\n            \"qty\": 1.0,\n            \"pointsEarned\": {\n              \"regular\": [\n                {\n                  \"value\": 0.0,\n                  \"expiresOn\": \"2024-08-01 23:59:59.0\",\n                  \"programId\": 1000013,\n                  \"programName\": \"Croma\",\n                  \"expiryType\": \"rolling\"\n                }\n              ],\n              \"promo\": [\n                {\n                  \"promotionId\": 9418,\n                  \"promotionName\": \"Min 5% Drop 2_Croma\",\n                  \"programId\": 1000007,\n                  \"programName\": \"TataNeu\",\n                  \"value\": 0.0,\n                  \"expiresOn\": \"2024-08-01 23:59:59.0\",\n                  \"expiryType\": \"rolling\"\n                }\n              ],\n              \"promised\": [\n                \n              ]\n            }\n          }\n        ]\n      },\n      \"customFields\": [\n        {\n          \"name\": \"txn_source\",\n          \"value\": \"tcp\"\n        }\n      ],\n      \"extendedFields\": [\n        \n      ],\n      \"paymentModes\": [\n        \"Others\"\n      ],\n      \"pointInTimeSlabs\": [\n        {\n          \"pointInTimeSlabNumber\": 1,\n          \"pointInTimeSlabName\": \"NONE\",\n          \"programId\": 1000007,\n          \"isDefaultProgram\": true\n        },\n        {\n          \"pointInTimeSlabNumber\": 1,\n          \"pointInTimeSlabName\": \"Privilege\",\n          \"programId\": 1000013,\n          \"isDefaultProgram\": false\n        }\n      ]\n    }\n  ],\n  \"warnings\": [\n    \n  ]\n}"
                  },
                  "GenericEvent/ImportEvents": {
                    "value": {
                      "events": [
                        {
                          "eventLogId": 44049002,
                          "eventName": "GenericEvent",
                          "eventDetails": {
                            "eventDisplayName": "Walk5Kms",
                            "tillId": 50789251,
                            "displayName": "Walk5Kms"
                          },
                          "pointsEarned": {
                            "regular": [],
                            "promo": [
                              {
                                "promotionId": 1133595541,
                                "promotionName": "Walk5Kms",
                                "programId": 3500,
                                "programName": "DocDemoDefaultProgram",
                                "value": 100,
                                "expiresOn": "2026-11-30 23:59:59.0",
                                "expiresOnISO": "2026-11-30T23:59:59+05:30",
                                "promotionStartDate": "2025-11-01 00:00:00.0",
                                "promotionEndDate": "2026-02-25 23:59:59.0"
                              }
                            ],
                            "promised": []
                          },
                          "behavioralEventMetadata": {
                            "label": "Walk5Kms",
                            "fields": [
                              {
                                "fieldName": "mobile",
                                "fieldType": "customer",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "valueType": "BOOLEAN",
                                    "value": "true"
                                  },
                                  "identifierType": {
                                    "valueType": "ENUM",
                                    "value": "mobile"
                                  },
                                  "isRequired": {
                                    "valueType": "BOOLEAN",
                                    "value": "true"
                                  },
                                  "source": {
                                    "valueType": "ENUM",
                                    "value": "INSTORE"
                                  }
                                }
                              },
                              {
                                "fieldName": "stepsWalked",
                                "fieldType": "double",
                                "attributes": {
                                  "isPsiData": {
                                    "valueType": "BOOLEAN",
                                    "value": "false"
                                  },
                                  "isRequired": {
                                    "valueType": "BOOLEAN",
                                    "value": "true"
                                  },
                                  "isUniqueKeyField": {
                                    "valueType": "BOOLEAN",
                                    "value": "false"
                                  }
                                }
                              }
                            ]
                          },
                          "eventReferenceId": "fb98ae16-668d-4c48-826b-1c13fa5344e7",
                          "uniqueId": "fb98ae16-668d-4c48-826b-1c13fa5344e7"
                        }
                      ],
                      "warnings": [
                        {
                          "code": 9018,
                          "message": "no alternate currency found for org with given input params",
                          "status": false
                        }
                      ]
                    }
                  },
                  "CustomerRegistration": {
                    "value": "{\n  \"events\": [\n    {\n      \"eventLogId\": 20229363,\n      \"eventName\": \"CustomerRegistration\",\n      \"eventDetails\": {\n        \"eventTime\": \"2023-08-31 06:25:40.0\",\n        \"tillId\": 50137565\n      },\n      \"pointsEarned\": {\n        \"regular\": [\n          {\n            \"value\": 100.0,\n            \"expiresOn\": \"2023-09-15 23:59:59.0\",\n            \"programId\": 1933,\n            \"programName\": \"PellDungaAgarUseKiyaTohDefaultProgram\",\n            \"expiryType\": \"fixed\"\n          }\n        ],\n        \"promo\": [\n          {\n            \"promotionId\": 1133561326,\n            \"promotionName\": \"delayedAccrualpromo\",\n            \"programId\": 1933,\n            \"programName\": \"PellDungaAgarUseKiyaTohDefaultProgram\",\n            \"value\": 100.0,\n            \"expiresOn\": \"2023-09-15 23:59:59.0\",\n            \"expiryType\": \"fixed\"\n          }\n        ],\n        \"promised\": [\n          {\n            \"value\": 1001.0,\n            \"conversionDate\": \"2023-09-06 00:00:00.0\",\n            \"programId\": 1933,\n            \"programName\": \"PellDungaAgarUseKiyaTohDefaultProgram\"\n          }\n        ]\n      }\n    }\n  ],\n  \"warnings\": [\n    \n  ]\n}"
                  },
                  "GoodWillPoints": {
                    "value": "{\n  \"events\": [\n    {\n      \"eventLogId\": 579442157,\n      \"eventName\": \"AllocateGoodwillPoints\",\n      \"eventDetails\": {\n        \"eventTime\": \"2023-08-29 19:12:17.0\",\n        \"reason\": \"CS: Cx received Rs 500 TNRL voucher which can be u\",\n        \"requestId\": 2828197\n      },\n      \"pointsEarned\": {\n        \"regular\": [\n          \n        ],\n        \"promo\": [\n          {\n            \"promotionId\": 5486,\n            \"promotionName\": \"Goodwill Promotion\",\n            \"programId\": 1000019,\n            \"programName\": \"AirAsia India\",\n            \"value\": 500.0,\n            \"expiresOn\": \"2024-08-28 23:59:59.0\",\n            \"expiryType\": \"rolling\"\n          }\n        ],\n        \"promised\": [\n          \n        ]\n      }\n    }\n  ],\n  \"warnings\": [\n    \n  ]\n}"
                  },
                  "TargetCompleted": {
                    "value": "{\n  \"events\": [\n    {\n      \"eventLogId\": 404150880,\n      \"eventName\": \"TargetCompleted\",\n      \"eventDetails\": {\n        \"eventTime\": \"2023-03-26 21:31:49.0\",\n        \"tillId\": 100008816\n      },\n      \"targetCompletedDetails\": {\n        \"targetGroupID\": 106,\n        \"targetGroupName\": \"Offer_March2023_CFT_Milestone\",\n        \"targetId\": 199,\n        \"targetName\": \"Offer_March2023_CFT_Milestone_1\",\n        \"targetPeriodID\": 44,\n        \"targetPeriodName\": \"B1\",\n        \"targetValue\": \"2.000\",\n        \"achievedValue\": \"2.000\",\n        \"sourceId\": 5020906,\n        \"sourceType\": \"USERTARGET\",\n        \"pointsEarned\": {\n          \"promised\": [\n            {\n              \"value\": 0.0,\n              \"conversionDate\": \"2023-04-26 00:00:00.0\",\n              \"programId\": 1000007,\n              \"programName\": \"TataNeu\"\n            }\n          ]\n        }\n      }\n    }\n  ],\n  \"warnings\": [\n    \n  ]\n}"
                  },
                  "PointsTransfer": {
                    "value": {
                      "events": [
                        {
                          "eventLogId": 656547282,
                          "eventName": "PointsTransfer",
                          "eventDetails": {
                            "eventTime": "2026-01-09 05:58:09.0",
                            "eventTimeISO": "2026-01-09T05:58:09Z"
                          },
                          "transferredFrom": {
                            "userId": "566135941",
                            "firstName": "John",
                            "lastName": "Doe",
                            "transferType": "TRANSFER",
                            "pointsTransferDetails": [
                              {
                                "points": "1000.000",
                                "programId": "973",
                                "programName": "DocDemoDefaultProgram"
                              }
                            ]
                          },
                          "transferredTo": {
                            "userId": "566881933",
                            "firstName": "Jane",
                            "lastName": "Doe",
                            "transferType": "TRANSFER",
                            "pointsTransferDetails": [
                              {
                                "points": "1000.000",
                                "programId": "973",
                                "programName": "DocDemoDefaultProgram"
                              }
                            ]
                          },
                          "notes": "",
                          "eventReferenceId": "566135941",
                          "uniqueId": "UcQNynwyYN"
                        }
                      ],
                      "warnings": []
                    }
                  },
                  "PointsRedemption": {
                    "value": {
                      "events": [
                        {
                          "eventLogId": 656442239,
                          "eventName": "PointsRedemption",
                          "eventDetails": {
                            "eventTime": "2026-01-08 09:11:52.0",
                            "eventTimeISO": "2026-01-08T09:11:52Z",
                            "tillId": 75155297,
                            "redemptionDetails": {
                              "pointsRedeemed": "300.000",
                              "redemptionPurpose": "",
                              "transactionNumber": "87fe81bd-3990-465a-a2f4-b6fe4dc3402f",
                              "externalReferenceNumber": "a794eb44-c21b-41a9-8952-d231df851a0b",
                              "redemptionId": "GunO1h",
                              "notes": "null",
                              "groupRedemption": false
                            }
                          },
                          "customFields": [],
                          "pointsBreakup": [],
                          "eventReferenceId": "566135941",
                          "uniqueId": "17m3dhp7BM"
                        }
                      ],
                      "warnings": []
                    }
                  },
                  "ReturnTxn": {
                    "value": "{\n  \"events\": [\n    {\n      \"eventLogId\": 617258993,\n      \"eventName\": \"ReturnBill\",\n      \"eventDetails\": {\n        \"eventTime\": \"2025-02-04 09:00:00.0\",\n        \"tillId\": 75152721\n      },\n      \"billDetails\": {\n        \"billNumber\": \"txn-30\",\n        \"billAmount\": 500,\n        \"note\": \"this is test\",\n        \"returnDate\": \"2025-02-04 09:00:00.0\",\n        \"returnAmount\": 500,\n        \"billDate\": \"2025-02-04 09:00:00.0\",\n        \"returnType\": \"FULL\",\n        \"returnBillId\": 25489000,\n        \"pointsEarned\": {\n          \"regular\": [\n            {\n              \"value\": 0,\n              \"expiresOn\": \"2025-03-01 23:59:59.0\",\n              \"programId\": 973,\n              \"programName\": \"DocDemoDefaultProgram\",\n              \"returnPoints\": 1000,\n              \"expiryType\": \"rolling\"\n            }\n          ],\n          \"promo\": [\n            {\n              \"promotionId\": 79555,\n              \"promotionName\": \"2X Points\",\n              \"programId\": 973,\n              \"programName\": \"DocDemoDefaultProgram\",\n              \"value\": 0,\n              \"expiresOn\": \"2025-03-01 23:59:59.0\",\n              \"returnedPoints\": 1000,\n              \"expiryType\": \"rolling\"\n            }\n          ],\n          \"promised\": []\n        },\n        \"pointsEarnedBreakup\": {\n          \"regular\": [\n            {\n              \"value\": 0,\n              \"expiresOn\": \"2025-03-01 23:59:59.0\",\n              \"awardedOn\": \"2025-02-04 10:47:50.0\",\n              \"sourceValue\": 0,\n              \"programId\": 973,\n              \"programName\": \"DocDemoDefaultProgram\",\n              \"allocationStrategyId\": 11879,\n              \"allocationStrategyName\": \"2X\",\n              \"pointsCategoryId\": 2143,\n              \"pointsCategoryName\": \"Main\",\n              \"expiryStrategyId\": 11833,\n              \"expiryStrategyName\": \"1 month\",\n              \"promotionDetails\": {\n                \"promotionId\": 79555,\n                \"promotionName\": \"2X Points\"\n              },\n              \"returnPoints\": 1000,\n              \"expiryType\": \"rolling\"\n            },\n            {\n              \"value\": 0,\n              \"expiresOn\": \"2025-03-01 23:59:59.0\",\n              \"awardedOn\": \"2025-02-04 10:47:50.0\",\n              \"sourceValue\": 0,\n              \"programId\": 973,\n              \"programName\": \"DocDemoDefaultProgram\",\n              \"allocationStrategyId\": 11879,\n              \"allocationStrategyName\": \"2X\",\n              \"pointsCategoryId\": 2143,\n              \"pointsCategoryName\": \"Main\",\n              \"expiryStrategyId\": 11833,\n              \"expiryStrategyName\": \"1 month\",\n              \"returnPoints\": 1000,\n              \"expiryType\": \"rolling\"\n            }\n          ],\n          \"promised\": []\n        },\n        \"lineItems\": []\n      },\n      \"eventReferenceId\": \"881656638\",\n      \"uniqueId\": \"esVgKMifP6\"\n    }\n  ],\n  \"warnings\": []\n}"
                  },
                  "CustomerPromotionImport": {
                    "value": "{\n  \"events\": [\n    {\n      \"eventLogId\": 564778187,\n      \"eventName\": \"CustomerPromotionImport\",\n      \"eventDetails\": {\n        \"eventDisplayName\": \"Tata Neu HDFC Bank Credit Card – Last billing cycle NeuCoins\",\n        \"tillId\": -1\n      },\n      \"pointsEarned\": {\n        \"regular\": [\n          \n        ],\n        \"promo\": [\n          {\n            \"promotionId\": 6877,\n            \"promotionName\": \"Tata Neu HDFC Bank Credit Card – Last billing cycle NeuCoins\",\n            \"programId\": 1000086,\n            \"programName\": \"TataNeu HDFC\",\n            \"value\": 8754.0\n          }\n        ],\n        \"promised\": [\n          \n        ]\n      },\n      \"importMeta\": {\n        \"fileName\": \"cap_data_16082023_031522_16August2023_09_01_14am.csv\",\n        \"importStartTime\": \"2023-08-16 09:01:15.0\",\n        \"importEndTime\": \"2023-08-16 09:02:13.0\",\n        \"profileName\": \"Customer Promotion\",\n        \"profileType\": \"Promotional Rewards \"\n      }\n    }\n  ],\n  \"warnings\": [\n    \n  ]\n}"
                  },
                  "with Alternate Currencies name filter_AC name not found": {
                    "value": "{\n    \"events\": [\n        {\n            \"eventLogId\": 24732968,\n            \"eventName\": \"TransactionAdd\",\n            \"eventDetails\": {\n                \"eventTime\": \"2024-03-26 10:38:00.0\",\n                \"tillId\": 50671937\n            },\n            \"billDetails\": {\n                \"type\": \"loyalty\",\n                \"billNumber\": \"num124536\",\n                \"grossAmount\": 30.0,\n                \"discount\": 5.0,\n                \"billAmount\": 200.0,\n                \"note\": \"this is test1\",\n                \"source\": \"instore\",\n                \"pointsEarned\": {\n                    \"regular\": [\n                        {\n                            \"value\": 10.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"expiryType\": \"fixed\"\n                        },\n                        {\n                            \"value\": 150.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"expiryType\": \"fixed\"\n                        }\n                    ],\n                    \"promo\": [],\n                    \"promised\": []\n                },\n                \"pointsEarnedBreakup\": {\n                    \"regular\": [\n                        {\n                            \"value\": 0.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"awardedOn\": \"2024-03-26 10:38:00.0\",\n                            \"sourceValue\": 0.0,\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"allocationStrategyId\": 111526,\n                            \"allocationStrategyName\": \"10x fixed\",\n                            \"pointsCategoryId\": 18871,\n                            \"pointsCategoryName\": \"Main\",\n                            \"expiryStrategyId\": 109281,\n                            \"expiryStrategyName\": \"NUM_MONTHS_END12\",\n                            \"expiryType\": \"fixed\"\n                        },\n                        {\n                            \"value\": 0.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"awardedOn\": \"2024-03-26 10:38:00.0\",\n                            \"sourceValue\": 0.0,\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"allocationStrategyId\": 111529,\n                            \"allocationStrategyName\": \"alllocate 150\",\n                            \"pointsCategoryId\": 20151,\n                            \"pointsCategoryName\": \"acName_PointCategory\",\n                            \"expiryStrategyId\": 109281,\n                            \"expiryStrategyName\": \"NUM_MONTHS_END12\",\n                            \"expiryType\": \"fixed\"\n                        }\n                    ],\n                    \"promised\": []\n                },\n                \"alternateCurrencyValueEarned\": [\n                    {\n                        \"regular\": [\n                            {\n                                \"value\": 150.0,\n                                \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                                \"programId\": 2649,\n                                \"programName\": \"VidhiJainOrgDefaultProgram\",\n                                \"expiryType\": \"fixed\"\n                            }\n                        ],\n                        \"promo\": [],\n                        \"promised\": [],\n                        \"alternateCurrencyName\": \"acName\",\n                        \"alternateCurrencyIdentifier\": \"P7d8Br\"\n                    }\n                ],\n                \"alternateCurrencyValueEarnedBreakup\": [\n                    {\n                        \"regular\": [\n                            {\n                                \"value\": 0.0,\n                                \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                                \"awardedOn\": \"2024-03-26 10:38:00.0\",\n                                \"sourceValue\": 0.0,\n                                \"programId\": 2649,\n                                \"programName\": \"VidhiJainOrgDefaultProgram\",\n                                \"allocationStrategyId\": 111529,\n                                \"allocationStrategyName\": \"alllocate 150\",\n                                \"pointsCategoryId\": 20151,\n                                \"pointsCategoryName\": \"acName_PointCategory\",\n                                \"expiryStrategyId\": 109281,\n                                \"expiryStrategyName\": \"NUM_MONTHS_END12\",\n                                \"expiryType\": \"fixed\"\n                            }\n                        ],\n                        \"promised\": [],\n                        \"alternateCurrencyName\": \"acName\",\n                        \"alternateCurrencyIdentifier\": \"P7d8Br\"\n                    }\n                ],\n                \"lineItems\": [\n                    {\n                        \"id\": 2158986015,\n                        \"itemCode\": \"sku_164716451_2\",\n                        \"source\": \"instore\",\n                        \"grossAmount\": 0.0,\n                        \"discount\": 0.0,\n                        \"amount\": 300.0,\n                        \"rate\": 10.5,\n                        \"qty\": 3.0\n                    },\n                    {\n                        \"id\": 2158986016,\n                        \"itemCode\": \"sku_164716451_3\",\n                        \"source\": \"instore\",\n                        \"grossAmount\": 0.0,\n                        \"discount\": 0.0,\n                        \"amount\": 300.0,\n                        \"rate\": 10.5,\n                        \"qty\": 3.0\n                    },\n                    {\n                        \"id\": 2158986017,\n                        \"itemCode\": \"sku_164716451_4\",\n                        \"source\": \"instore\",\n                        \"grossAmount\": 0.0,\n                        \"discount\": 0.0,\n                        \"amount\": 300.0,\n                        \"rate\": 10.5,\n                        \"qty\": 3.0\n                    }\n                ]\n            },\n            \"customFields\": [],\n            \"extendedFields\": [],\n            \"paymentModes\": [],\n            \"pointInTimeSlabs\": [\n                {\n                    \"pointInTimeSlabNumber\": 2,\n                    \"pointInTimeSlabName\": \"SILVER\",\n                    \"programId\": 2649,\n                    \"isDefaultProgram\": true\n                }\n            ]\n        }\n    ],\n    \"warnings\": [\n        {\n            \"code\": 9004,\n            \"message\": \"Warning while fetching ledger info : alternate currency with given name not found for org, name: dummy\",\n            \"status\": false\n        }\n    ]\n}"
                  },
                  "With voucher redemption details": {
                    "value": "{\n    \"events\": [\n        {\n            \"eventLogId\": 19942815,\n            \"eventName\": \"VoucherRedemption\",\n            \"eventDetails\": {\n                \"eventTime\": \"2024-08-27 05:59:25.0\",\n                \"tillId\": 50674058\n            },\n            \"pointsEarned\": {\n                \"regular\": [\n                    {\n                        \"value\": 10.0,\n                        \"expiresOn\": \"2025-08-31 23:59:59.0\",\n                        \"programId\": 46,\n                        \"programName\": \"VidhiOrgDefaultProgram\",\n                        \"expiryType\": \"fixed\"\n                    }\n                ],\n                \"promo\": [\n                    {\n                        \"promotionId\": 199484,\n                        \"promotionName\": \"testPromoVoucher\",\n                        \"programId\": 46,\n                        \"programName\": \"VidhiOrgDefaultProgram\",\n                        \"value\": 50.0,\n                        \"expiresOn\": \"2025-08-31 23:59:59.0\",\n                        \"expiryType\": \"fixed\"\n                    }\n                ],\n                \"promised\": []\n            },\n            \"eventReferenceId\": \"90285353\",\n            \"uniqueId\": \"yQJ6quYpLF\",\n            \"voucherRedemptionDetails\": {\n                \"voucherIssuedId\": 90285353,\n                \"voucherSeriesId\": 1110658,\n                \"redeemedVoucherCode\": \"390982\",\n                \"redeemDate\": \"2024-08-27 05:59:25.0\"\n            }\n        }\n    ],\n    \"warnings\": []\n}"
                  },
                  "Sample request with getPointsEarnedBreakup=true": {
                    "summary": "Sample request with getPointsEarnedBreakup=true",
                    "value": {
                      "events": [
                        {
                          "eventLogId": 634510612,
                          "eventName": "TransactionAdd",
                          "eventDetails": {
                            "eventTime": "2025-07-16 14:00:00.0",
                            "eventTimeISO": "2025-07-16T14:00:00Z",
                            "tillId": 75152721
                          },
                          "billDetails": {
                            "type": "loyalty",
                            "billNumber": "txn-1",
                            "grossAmount": 1000,
                            "discount": 0,
                            "billAmount": 1000,
                            "note": "",
                            "source": "instore",
                            "billDate": "2025-07-16 14:00:00.0",
                            "billDateISO": "2025-07-16T14:00:00Z",
                            "pointsEarnedBreakup": {
                              "regular": [
                                {
                                  "value": 0,
                                  "expiresOn": "2025-08-22 23:59:59.0",
                                  "expiresOnISO": "2025-08-22T23:59:59Z",
                                  "awardedOn": "2025-07-16 14:00:00.0",
                                  "awardedOnISO": "2025-07-16T14:00:00Z",
                                  "sourceValue": 0,
                                  "programId": 973,
                                  "programName": "DocDemoDefaultProgram",
                                  "allocationStrategyId": 11879,
                                  "allocationStrategyName": "2X",
                                  "pointsCategoryId": 2143,
                                  "pointsCategoryName": "Main",
                                  "expiryStrategyId": 11825,
                                  "expiryStrategyName": "NUM_MONTHS_END12",
                                  "expiryType": "fixed"
                                }
                              ],
                              "promised": []
                            },
                            "lineItems": []
                          },
                          "eventReferenceId": "888812880",
                          "uniqueId": "yFNq8FgavV"
                        }
                      ],
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "NewBill/Txn Add",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 549393345,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "TransactionAdd"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2023-08-02 16:24:44.0"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 100004318,
                                    "default": 0
                                  }
                                }
                              },
                              "billDetails": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "loyalty"
                                  },
                                  "billNumber": {
                                    "type": "string",
                                    "example": "TC300051690458"
                                  },
                                  "grossAmount": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "discount": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "billAmount": {
                                    "type": "integer",
                                    "example": 11691,
                                    "default": 0
                                  },
                                  "note": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "source": {
                                    "type": "string",
                                    "example": "instore"
                                  },
                                  "pointsEarned": {
                                    "type": "object",
                                    "properties": {
                                      "regular": {
                                        "type": "array"
                                      },
                                      "promo": {
                                        "type": "array"
                                      },
                                      "promised": {
                                        "type": "array"
                                      }
                                    }
                                  },
                                  "lineItems": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "integer",
                                          "example": 310201424,
                                          "default": 0
                                        },
                                        "itemCode": {
                                          "type": "string",
                                          "example": "243593"
                                        },
                                        "source": {
                                          "type": "string",
                                          "example": "instore"
                                        },
                                        "grossAmount": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "discount": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "amount": {
                                          "type": "integer",
                                          "example": 11691,
                                          "default": 0
                                        },
                                        "rate": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "qty": {
                                          "type": "integer",
                                          "example": 1,
                                          "default": 0
                                        },
                                        "pointsEarned": {
                                          "type": "object",
                                          "properties": {
                                            "regular": {
                                              "type": "array",
                                              "items": {
                                                "type": "object",
                                                "properties": {
                                                  "value": {
                                                    "type": "integer",
                                                    "example": 0,
                                                    "default": 0
                                                  },
                                                  "expiresOn": {
                                                    "type": "string",
                                                    "example": "2024-08-01 23:59:59.0"
                                                  },
                                                  "programId": {
                                                    "type": "integer",
                                                    "example": 1000013,
                                                    "default": 0
                                                  },
                                                  "programName": {
                                                    "type": "string",
                                                    "example": "Croma"
                                                  },
                                                  "expiryType": {
                                                    "type": "string",
                                                    "example": "rolling"
                                                  }
                                                }
                                              }
                                            },
                                            "promo": {
                                              "type": "array",
                                              "items": {
                                                "type": "object",
                                                "properties": {
                                                  "promotionId": {
                                                    "type": "integer",
                                                    "example": 9418,
                                                    "default": 0
                                                  },
                                                  "promotionName": {
                                                    "type": "string",
                                                    "example": "Min 5% Drop 2_Croma"
                                                  },
                                                  "programId": {
                                                    "type": "integer",
                                                    "example": 1000007,
                                                    "default": 0
                                                  },
                                                  "programName": {
                                                    "type": "string",
                                                    "example": "TataNeu"
                                                  },
                                                  "value": {
                                                    "type": "integer",
                                                    "example": 0,
                                                    "default": 0
                                                  },
                                                  "expiresOn": {
                                                    "type": "string",
                                                    "example": "2024-08-01 23:59:59.0"
                                                  },
                                                  "expiryType": {
                                                    "type": "string",
                                                    "example": "rolling"
                                                  }
                                                }
                                              }
                                            },
                                            "promised": {
                                              "type": "array"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "customFields": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "name": {
                                      "type": "string",
                                      "example": "txn_source"
                                    },
                                    "value": {
                                      "type": "string",
                                      "example": "tcp"
                                    }
                                  }
                                }
                              },
                              "extendedFields": {
                                "type": "array"
                              },
                              "paymentModes": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "example": "Others"
                                }
                              },
                              "pointInTimeSlabs": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "pointInTimeSlabNumber": {
                                      "type": "integer",
                                      "example": 1,
                                      "default": 0
                                    },
                                    "pointInTimeSlabName": {
                                      "type": "string",
                                      "example": "NONE"
                                    },
                                    "programId": {
                                      "type": "integer",
                                      "example": 1000007,
                                      "default": 0
                                    },
                                    "isDefaultProgram": {
                                      "type": "boolean",
                                      "example": true,
                                      "default": true
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "GenericEvent/ImportEvents",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 296576878,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "GenericEvent"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventDisplayName": {
                                    "type": "string",
                                    "example": "first_bill_pay"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 100011485,
                                    "default": 0
                                  },
                                  "displayName": {
                                    "type": "string",
                                    "example": "first_bill_pay"
                                  }
                                }
                              },
                              "pointsEarned": {
                                "type": "object",
                                "properties": {
                                  "regular": {
                                    "type": "array"
                                  },
                                  "promo": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "promotionId": {
                                          "type": "integer",
                                          "example": 7125,
                                          "default": 0
                                        },
                                        "promotionName": {
                                          "type": "string",
                                          "example": "Earn at BillPay – December Mid Month Sale"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 1000055,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "bill payments"
                                        },
                                        "value": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "promotionStartDate": {
                                          "type": "string",
                                          "example": "2022-12-19 00:00:00.0"
                                        },
                                        "promotionEndDate": {
                                          "type": "string",
                                          "example": "2022-12-22 23:59:59.0"
                                        }
                                      }
                                    }
                                  },
                                  "promised": {
                                    "type": "array"
                                  }
                                }
                              },
                              "behavioralEventMetadata": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "first_bill_pay"
                                  },
                                  "fields": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "fieldName": {
                                          "type": "string",
                                          "example": "externalid"
                                        },
                                        "fieldType": {
                                          "type": "string",
                                          "example": "customer"
                                        },
                                        "attributes": {
                                          "type": "object",
                                          "properties": {
                                            "accountId": {
                                              "type": "object",
                                              "properties": {
                                                "valueType": {
                                                  "type": "string",
                                                  "example": "ENUM"
                                                }
                                              }
                                            },
                                            "addCustomerIfNotExists": {
                                              "type": "object",
                                              "properties": {
                                                "valueType": {
                                                  "type": "string",
                                                  "example": "BOOLEAN"
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": "false"
                                                }
                                              }
                                            },
                                            "identifierType": {
                                              "type": "object",
                                              "properties": {
                                                "valueType": {
                                                  "type": "string",
                                                  "example": "ENUM"
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": "externalId"
                                                }
                                              }
                                            },
                                            "isRequired": {
                                              "type": "object",
                                              "properties": {
                                                "valueType": {
                                                  "type": "string",
                                                  "example": "BOOLEAN"
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": "true"
                                                }
                                              }
                                            },
                                            "source": {
                                              "type": "object",
                                              "properties": {
                                                "valueType": {
                                                  "type": "string",
                                                  "example": "ENUM"
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": "INSTORE"
                                                }
                                              }
                                            }
                                          }
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
                        }
                      }
                    },
                    {
                      "title": "CustomerRegistration",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 20229363,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "CustomerRegistration"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2023-08-31 06:25:40.0"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 50137565,
                                    "default": 0
                                  }
                                }
                              },
                              "pointsEarned": {
                                "type": "object",
                                "properties": {
                                  "regular": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "value": {
                                          "type": "integer",
                                          "example": 100,
                                          "default": 0
                                        },
                                        "expiresOn": {
                                          "type": "string",
                                          "example": "2023-09-15 23:59:59.0"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 1933,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "PellDungaAgarUseKiyaTohDefaultProgram"
                                        },
                                        "expiryType": {
                                          "type": "string",
                                          "example": "fixed"
                                        }
                                      }
                                    }
                                  },
                                  "promo": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "promotionId": {
                                          "type": "integer",
                                          "example": 1133561326,
                                          "default": 0
                                        },
                                        "promotionName": {
                                          "type": "string",
                                          "example": "delayedAccrualpromo"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 1933,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "PellDungaAgarUseKiyaTohDefaultProgram"
                                        },
                                        "value": {
                                          "type": "integer",
                                          "example": 100,
                                          "default": 0
                                        },
                                        "expiresOn": {
                                          "type": "string",
                                          "example": "2023-09-15 23:59:59.0"
                                        },
                                        "expiryType": {
                                          "type": "string",
                                          "example": "fixed"
                                        }
                                      }
                                    }
                                  },
                                  "promised": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "value": {
                                          "type": "integer",
                                          "example": 1001,
                                          "default": 0
                                        },
                                        "conversionDate": {
                                          "type": "string",
                                          "example": "2023-09-06 00:00:00.0"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 1933,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "PellDungaAgarUseKiyaTohDefaultProgram"
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
                        }
                      }
                    },
                    {
                      "title": "GoodWillPoints",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 579442157,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "AllocateGoodwillPoints"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2023-08-29 19:12:17.0"
                                  },
                                  "reason": {
                                    "type": "string",
                                    "example": "CS: Cx received Rs 500 TNRL voucher which can be u"
                                  },
                                  "requestId": {
                                    "type": "integer",
                                    "example": 2828197,
                                    "default": 0
                                  }
                                }
                              },
                              "pointsEarned": {
                                "type": "object",
                                "properties": {
                                  "regular": {
                                    "type": "array"
                                  },
                                  "promo": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "promotionId": {
                                          "type": "integer",
                                          "example": 5486,
                                          "default": 0
                                        },
                                        "promotionName": {
                                          "type": "string",
                                          "example": "Goodwill Promotion"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 1000019,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "AirAsia India"
                                        },
                                        "value": {
                                          "type": "integer",
                                          "example": 500,
                                          "default": 0
                                        },
                                        "expiresOn": {
                                          "type": "string",
                                          "example": "2024-08-28 23:59:59.0"
                                        },
                                        "expiryType": {
                                          "type": "string",
                                          "example": "rolling"
                                        }
                                      }
                                    }
                                  },
                                  "promised": {
                                    "type": "array"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "TargetCompleted",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 404150880,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "TargetCompleted"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2023-03-26 21:31:49.0"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 100008816,
                                    "default": 0
                                  }
                                }
                              },
                              "targetCompletedDetails": {
                                "type": "object",
                                "properties": {
                                  "targetGroupID": {
                                    "type": "integer",
                                    "example": 106,
                                    "default": 0
                                  },
                                  "targetGroupName": {
                                    "type": "string",
                                    "example": "Offer_March2023_CFT_Milestone"
                                  },
                                  "targetId": {
                                    "type": "integer",
                                    "example": 199,
                                    "default": 0
                                  },
                                  "targetName": {
                                    "type": "string",
                                    "example": "Offer_March2023_CFT_Milestone_1"
                                  },
                                  "targetPeriodID": {
                                    "type": "integer",
                                    "example": 44,
                                    "default": 0
                                  },
                                  "targetPeriodName": {
                                    "type": "string",
                                    "example": "B1"
                                  },
                                  "targetValue": {
                                    "type": "string",
                                    "example": "2.000"
                                  },
                                  "achievedValue": {
                                    "type": "string",
                                    "example": "2.000"
                                  },
                                  "sourceId": {
                                    "type": "integer",
                                    "example": 5020906,
                                    "default": 0
                                  },
                                  "sourceType": {
                                    "type": "string",
                                    "example": "USERTARGET"
                                  },
                                  "pointsEarned": {
                                    "type": "object",
                                    "properties": {
                                      "promised": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "value": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            },
                                            "conversionDate": {
                                              "type": "string",
                                              "example": "2023-04-26 00:00:00.0"
                                            },
                                            "programId": {
                                              "type": "integer",
                                              "example": 1000007,
                                              "default": 0
                                            },
                                            "programName": {
                                              "type": "string",
                                              "example": "TataNeu"
                                            }
                                          }
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
                        }
                      }
                    },
                    {
                      "title": "PointsTransfer",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 498243059,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "PointsTransfer"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2023-06-19 10:04:32.0"
                                  }
                                }
                              },
                              "transferredFrom": {
                                "type": "object",
                                "properties": {
                                  "userId": {
                                    "type": "string",
                                    "example": "4811870"
                                  },
                                  "firstName": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "lastName": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "transferType": {
                                    "type": "string",
                                    "example": "TRANSFER"
                                  },
                                  "pointsTransferDetails": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "points": {
                                          "type": "string",
                                          "example": "62718.260"
                                        },
                                        "programId": {
                                          "type": "string",
                                          "example": "1000014"
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "IHCL"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "transferredTo": {
                                "type": "object",
                                "properties": {
                                  "userId": {
                                    "type": "string",
                                    "example": "68519328"
                                  },
                                  "firstName": {
                                    "type": "string",
                                    "example": "3e64ec7fb438a54abc003b95942a5e9a"
                                  },
                                  "lastName": {
                                    "type": "string",
                                    "example": "3e64ec7fb438a54abc003b95942a5e9a"
                                  },
                                  "transferType": {
                                    "type": "string",
                                    "example": "TRANSFER"
                                  },
                                  "pointsTransferDetails": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "points": {
                                          "type": "string",
                                          "example": "62718.260"
                                        },
                                        "programId": {
                                          "type": "string",
                                          "example": "1000014"
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "IHCL"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "notes": {
                                "type": "string",
                                "example": "2023-06-19T04:34:32.327770699"
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "PointsRedemption",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 469585846,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "PointsRedemption"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2023-05-23 12:20:18.0"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 100007771,
                                    "default": 0
                                  },
                                  "redemptionDetails": {
                                    "type": "object",
                                    "properties": {
                                      "pointsRedeemed": {
                                        "type": "string",
                                        "example": "1131.870"
                                      },
                                      "transactionNumber": {
                                        "type": "string",
                                        "example": "TBN-1222183117-20230523"
                                      },
                                      "billingTime": {
                                        "type": "string",
                                        "example": "2023-05-23 12:20:18.0"
                                      },
                                      "externalReferenceNumber": {
                                        "type": "string",
                                        "example": "26ec1bca2ccb9cea9ef2"
                                      },
                                      "notes": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "groupRedemption": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      }
                                    }
                                  }
                                }
                              },
                              "customFields": {
                                "type": "array"
                              },
                              "pointsBreakup": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "points": {
                                      "type": "string",
                                      "example": "803.009"
                                    },
                                    "programId": {
                                      "type": "string",
                                      "example": "1000007"
                                    },
                                    "programName": {
                                      "type": "string",
                                      "example": "TataNeu"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "ReturnTxn",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 617258993,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "ReturnBill"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2025-02-04 09:00:00.0"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 75152721,
                                    "default": 0
                                  }
                                }
                              },
                              "billDetails": {
                                "type": "object",
                                "properties": {
                                  "billNumber": {
                                    "type": "string",
                                    "example": "txn-30"
                                  },
                                  "billAmount": {
                                    "type": "integer",
                                    "example": 500,
                                    "default": 0
                                  },
                                  "note": {
                                    "type": "string",
                                    "example": "this is test"
                                  },
                                  "returnDate": {
                                    "type": "string",
                                    "example": "2025-02-04 09:00:00.0"
                                  },
                                  "returnAmount": {
                                    "type": "integer",
                                    "example": 500,
                                    "default": 0
                                  },
                                  "billDate": {
                                    "type": "string",
                                    "example": "2025-02-04 09:00:00.0"
                                  },
                                  "returnType": {
                                    "type": "string",
                                    "example": "FULL"
                                  },
                                  "returnBillId": {
                                    "type": "integer",
                                    "example": 25489000,
                                    "default": 0
                                  },
                                  "pointsEarned": {
                                    "type": "object",
                                    "properties": {
                                      "regular": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "value": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            },
                                            "expiresOn": {
                                              "type": "string",
                                              "example": "2025-03-01 23:59:59.0"
                                            },
                                            "programId": {
                                              "type": "integer",
                                              "example": 973,
                                              "default": 0
                                            },
                                            "programName": {
                                              "type": "string",
                                              "example": "DocDemoDefaultProgram"
                                            },
                                            "returnPoints": {
                                              "type": "integer",
                                              "example": 1000,
                                              "default": 0
                                            },
                                            "expiryType": {
                                              "type": "string",
                                              "example": "rolling"
                                            }
                                          }
                                        }
                                      },
                                      "promo": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "promotionId": {
                                              "type": "integer",
                                              "example": 79555,
                                              "default": 0
                                            },
                                            "promotionName": {
                                              "type": "string",
                                              "example": "2X Points"
                                            },
                                            "programId": {
                                              "type": "integer",
                                              "example": 973,
                                              "default": 0
                                            },
                                            "programName": {
                                              "type": "string",
                                              "example": "DocDemoDefaultProgram"
                                            },
                                            "value": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            },
                                            "expiresOn": {
                                              "type": "string",
                                              "example": "2025-03-01 23:59:59.0"
                                            },
                                            "returnedPoints": {
                                              "type": "integer",
                                              "example": 1000,
                                              "default": 0
                                            },
                                            "expiryType": {
                                              "type": "string",
                                              "example": "rolling"
                                            }
                                          }
                                        }
                                      },
                                      "promised": {
                                        "type": "array"
                                      }
                                    }
                                  },
                                  "pointsEarnedBreakup": {
                                    "type": "object",
                                    "properties": {
                                      "regular": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "value": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            },
                                            "expiresOn": {
                                              "type": "string",
                                              "example": "2025-03-01 23:59:59.0"
                                            },
                                            "awardedOn": {
                                              "type": "string",
                                              "example": "2025-02-04 10:47:50.0"
                                            },
                                            "sourceValue": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            },
                                            "programId": {
                                              "type": "integer",
                                              "example": 973,
                                              "default": 0
                                            },
                                            "programName": {
                                              "type": "string",
                                              "example": "DocDemoDefaultProgram"
                                            },
                                            "allocationStrategyId": {
                                              "type": "integer",
                                              "example": 11879,
                                              "default": 0
                                            },
                                            "allocationStrategyName": {
                                              "type": "string",
                                              "example": "2X"
                                            },
                                            "pointsCategoryId": {
                                              "type": "integer",
                                              "example": 2143,
                                              "default": 0
                                            },
                                            "pointsCategoryName": {
                                              "type": "string",
                                              "example": "Main"
                                            },
                                            "expiryStrategyId": {
                                              "type": "integer",
                                              "example": 11833,
                                              "default": 0
                                            },
                                            "expiryStrategyName": {
                                              "type": "string",
                                              "example": "1 month"
                                            },
                                            "promotionDetails": {
                                              "type": "object",
                                              "properties": {
                                                "promotionId": {
                                                  "type": "integer",
                                                  "example": 79555,
                                                  "default": 0
                                                },
                                                "promotionName": {
                                                  "type": "string",
                                                  "example": "2X Points"
                                                }
                                              }
                                            },
                                            "returnPoints": {
                                              "type": "integer",
                                              "example": 1000,
                                              "default": 0
                                            },
                                            "expiryType": {
                                              "type": "string",
                                              "example": "rolling"
                                            }
                                          }
                                        }
                                      },
                                      "promised": {
                                        "type": "array"
                                      }
                                    }
                                  },
                                  "lineItems": {
                                    "type": "array"
                                  }
                                }
                              },
                              "eventReferenceId": {
                                "type": "string",
                                "example": "881656638"
                              },
                              "uniqueId": {
                                "type": "string",
                                "example": "esVgKMifP6"
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "CustomerPromotionImport",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 564778187,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "CustomerPromotionImport"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventDisplayName": {
                                    "type": "string",
                                    "example": "Tata Neu HDFC Bank Credit Card – Last billing cycle NeuCoins"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  }
                                }
                              },
                              "pointsEarned": {
                                "type": "object",
                                "properties": {
                                  "regular": {
                                    "type": "array"
                                  },
                                  "promo": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "promotionId": {
                                          "type": "integer",
                                          "example": 6877,
                                          "default": 0
                                        },
                                        "promotionName": {
                                          "type": "string",
                                          "example": "Tata Neu HDFC Bank Credit Card – Last billing cycle NeuCoins"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 1000086,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "TataNeu HDFC"
                                        },
                                        "value": {
                                          "type": "integer",
                                          "example": 8754,
                                          "default": 0
                                        }
                                      }
                                    }
                                  },
                                  "promised": {
                                    "type": "array"
                                  }
                                }
                              },
                              "importMeta": {
                                "type": "object",
                                "properties": {
                                  "fileName": {
                                    "type": "string",
                                    "example": "cap_data_16082023_031522_16August2023_09_01_14am.csv"
                                  },
                                  "importStartTime": {
                                    "type": "string",
                                    "example": "2023-08-16 09:01:15.0"
                                  },
                                  "importEndTime": {
                                    "type": "string",
                                    "example": "2023-08-16 09:02:13.0"
                                  },
                                  "profileName": {
                                    "type": "string",
                                    "example": "Customer Promotion"
                                  },
                                  "profileType": {
                                    "type": "string",
                                    "example": "Promotional Rewards "
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "with Alternate Currencies name filter_AC name not found",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 24732968,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "TransactionAdd"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2024-03-26 10:38:00.0"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 50671937,
                                    "default": 0
                                  }
                                }
                              },
                              "billDetails": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "example": "loyalty"
                                  },
                                  "billNumber": {
                                    "type": "string",
                                    "example": "num124536"
                                  },
                                  "grossAmount": {
                                    "type": "integer",
                                    "example": 30,
                                    "default": 0
                                  },
                                  "discount": {
                                    "type": "integer",
                                    "example": 5,
                                    "default": 0
                                  },
                                  "billAmount": {
                                    "type": "integer",
                                    "example": 200,
                                    "default": 0
                                  },
                                  "note": {
                                    "type": "string",
                                    "example": "this is test1"
                                  },
                                  "source": {
                                    "type": "string",
                                    "example": "instore"
                                  },
                                  "pointsEarned": {
                                    "type": "object",
                                    "properties": {
                                      "regular": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "value": {
                                              "type": "integer",
                                              "example": 10,
                                              "default": 0
                                            },
                                            "expiresOn": {
                                              "type": "string",
                                              "example": "2025-03-31 23:59:59.0"
                                            },
                                            "programId": {
                                              "type": "integer",
                                              "example": 2649,
                                              "default": 0
                                            },
                                            "programName": {
                                              "type": "string",
                                              "example": "VidhiJainOrgDefaultProgram"
                                            },
                                            "expiryType": {
                                              "type": "string",
                                              "example": "fixed"
                                            }
                                          }
                                        }
                                      },
                                      "promo": {
                                        "type": "array"
                                      },
                                      "promised": {
                                        "type": "array"
                                      }
                                    }
                                  },
                                  "pointsEarnedBreakup": {
                                    "type": "object",
                                    "properties": {
                                      "regular": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "value": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            },
                                            "expiresOn": {
                                              "type": "string",
                                              "example": "2025-03-31 23:59:59.0"
                                            },
                                            "awardedOn": {
                                              "type": "string",
                                              "example": "2024-03-26 10:38:00.0"
                                            },
                                            "sourceValue": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            },
                                            "programId": {
                                              "type": "integer",
                                              "example": 2649,
                                              "default": 0
                                            },
                                            "programName": {
                                              "type": "string",
                                              "example": "VidhiJainOrgDefaultProgram"
                                            },
                                            "allocationStrategyId": {
                                              "type": "integer",
                                              "example": 111526,
                                              "default": 0
                                            },
                                            "allocationStrategyName": {
                                              "type": "string",
                                              "example": "10x fixed"
                                            },
                                            "pointsCategoryId": {
                                              "type": "integer",
                                              "example": 18871,
                                              "default": 0
                                            },
                                            "pointsCategoryName": {
                                              "type": "string",
                                              "example": "Main"
                                            },
                                            "expiryStrategyId": {
                                              "type": "integer",
                                              "example": 109281,
                                              "default": 0
                                            },
                                            "expiryStrategyName": {
                                              "type": "string",
                                              "example": "NUM_MONTHS_END12"
                                            },
                                            "expiryType": {
                                              "type": "string",
                                              "example": "fixed"
                                            }
                                          }
                                        }
                                      },
                                      "promised": {
                                        "type": "array"
                                      }
                                    }
                                  },
                                  "alternateCurrencyValueEarned": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "regular": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "value": {
                                                "type": "integer",
                                                "example": 150,
                                                "default": 0
                                              },
                                              "expiresOn": {
                                                "type": "string",
                                                "example": "2025-03-31 23:59:59.0"
                                              },
                                              "programId": {
                                                "type": "integer",
                                                "example": 2649,
                                                "default": 0
                                              },
                                              "programName": {
                                                "type": "string",
                                                "example": "VidhiJainOrgDefaultProgram"
                                              },
                                              "expiryType": {
                                                "type": "string",
                                                "example": "fixed"
                                              }
                                            }
                                          }
                                        },
                                        "promo": {
                                          "type": "array"
                                        },
                                        "promised": {
                                          "type": "array"
                                        },
                                        "alternateCurrencyName": {
                                          "type": "string",
                                          "example": "acName"
                                        },
                                        "alternateCurrencyIdentifier": {
                                          "type": "string",
                                          "example": "P7d8Br"
                                        }
                                      }
                                    }
                                  },
                                  "alternateCurrencyValueEarnedBreakup": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "regular": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "value": {
                                                "type": "integer",
                                                "example": 0,
                                                "default": 0
                                              },
                                              "expiresOn": {
                                                "type": "string",
                                                "example": "2025-03-31 23:59:59.0"
                                              },
                                              "awardedOn": {
                                                "type": "string",
                                                "example": "2024-03-26 10:38:00.0"
                                              },
                                              "sourceValue": {
                                                "type": "integer",
                                                "example": 0,
                                                "default": 0
                                              },
                                              "programId": {
                                                "type": "integer",
                                                "example": 2649,
                                                "default": 0
                                              },
                                              "programName": {
                                                "type": "string",
                                                "example": "VidhiJainOrgDefaultProgram"
                                              },
                                              "allocationStrategyId": {
                                                "type": "integer",
                                                "example": 111529,
                                                "default": 0
                                              },
                                              "allocationStrategyName": {
                                                "type": "string",
                                                "example": "alllocate 150"
                                              },
                                              "pointsCategoryId": {
                                                "type": "integer",
                                                "example": 20151,
                                                "default": 0
                                              },
                                              "pointsCategoryName": {
                                                "type": "string",
                                                "example": "acName_PointCategory"
                                              },
                                              "expiryStrategyId": {
                                                "type": "integer",
                                                "example": 109281,
                                                "default": 0
                                              },
                                              "expiryStrategyName": {
                                                "type": "string",
                                                "example": "NUM_MONTHS_END12"
                                              },
                                              "expiryType": {
                                                "type": "string",
                                                "example": "fixed"
                                              }
                                            }
                                          }
                                        },
                                        "promised": {
                                          "type": "array"
                                        },
                                        "alternateCurrencyName": {
                                          "type": "string",
                                          "example": "acName"
                                        },
                                        "alternateCurrencyIdentifier": {
                                          "type": "string",
                                          "example": "P7d8Br"
                                        }
                                      }
                                    }
                                  },
                                  "lineItems": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "integer",
                                          "example": 2158986015,
                                          "default": 0
                                        },
                                        "itemCode": {
                                          "type": "string",
                                          "example": "sku_164716451_2"
                                        },
                                        "source": {
                                          "type": "string",
                                          "example": "instore"
                                        },
                                        "grossAmount": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "discount": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "amount": {
                                          "type": "integer",
                                          "example": 300,
                                          "default": 0
                                        },
                                        "rate": {
                                          "type": "number",
                                          "example": 10.5,
                                          "default": 0
                                        },
                                        "qty": {
                                          "type": "integer",
                                          "example": 3,
                                          "default": 0
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "customFields": {
                                "type": "array"
                              },
                              "extendedFields": {
                                "type": "array"
                              },
                              "paymentModes": {
                                "type": "array"
                              },
                              "pointInTimeSlabs": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "pointInTimeSlabNumber": {
                                      "type": "integer",
                                      "example": 2,
                                      "default": 0
                                    },
                                    "pointInTimeSlabName": {
                                      "type": "string",
                                      "example": "SILVER"
                                    },
                                    "programId": {
                                      "type": "integer",
                                      "example": 2649,
                                      "default": 0
                                    },
                                    "isDefaultProgram": {
                                      "type": "boolean",
                                      "example": true,
                                      "default": true
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "code": {
                                "type": "integer",
                                "example": 9004,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "Warning while fetching ledger info : alternate currency with given name not found for org, name: dummy"
                              },
                              "status": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "With voucher redemption details",
                      "type": "object",
                      "properties": {
                        "events": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "eventLogId": {
                                "type": "integer",
                                "example": 19942815,
                                "default": 0
                              },
                              "eventName": {
                                "type": "string",
                                "example": "VoucherRedemption"
                              },
                              "eventDetails": {
                                "type": "object",
                                "properties": {
                                  "eventTime": {
                                    "type": "string",
                                    "example": "2024-08-27 05:59:25.0"
                                  },
                                  "tillId": {
                                    "type": "integer",
                                    "example": 50674058,
                                    "default": 0
                                  }
                                }
                              },
                              "pointsEarned": {
                                "type": "object",
                                "properties": {
                                  "regular": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "value": {
                                          "type": "integer",
                                          "example": 10,
                                          "default": 0
                                        },
                                        "expiresOn": {
                                          "type": "string",
                                          "example": "2025-08-31 23:59:59.0"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 46,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "VidhiOrgDefaultProgram"
                                        },
                                        "expiryType": {
                                          "type": "string",
                                          "example": "fixed"
                                        }
                                      }
                                    }
                                  },
                                  "promo": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "promotionId": {
                                          "type": "integer",
                                          "example": 199484,
                                          "default": 0
                                        },
                                        "promotionName": {
                                          "type": "string",
                                          "example": "testPromoVoucher"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 46,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "VidhiOrgDefaultProgram"
                                        },
                                        "value": {
                                          "type": "integer",
                                          "example": 50,
                                          "default": 0
                                        },
                                        "expiresOn": {
                                          "type": "string",
                                          "example": "2025-08-31 23:59:59.0"
                                        },
                                        "expiryType": {
                                          "type": "string",
                                          "example": "fixed"
                                        }
                                      }
                                    }
                                  },
                                  "promised": {
                                    "type": "array"
                                  }
                                }
                              },
                              "eventReferenceId": {
                                "type": "string",
                                "example": "90285353"
                              },
                              "uniqueId": {
                                "type": "string",
                                "example": "yQJ6quYpLF"
                              },
                              "voucherRedemptionDetails": {
                                "type": "object",
                                "properties": {
                                  "voucherIssuedId": {
                                    "type": "integer",
                                    "example": 90285353,
                                    "default": 0
                                  },
                                  "voucherSeriesId": {
                                    "type": "integer",
                                    "example": 1110658,
                                    "default": 0
                                  },
                                  "redeemedVoucherCode": {
                                    "type": "string",
                                    "example": "390982"
                                  },
                                  "redeemDate": {
                                    "type": "string",
                                    "example": "2024-08-27 05:59:25.0"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    }
                  ]
                }
              },
              "text/plain": {
                "examples": {
                  "without alternate currency name filter": {
                    "value": "{\n    \"events\": [\n        {\n            \"eventLogId\": 24732968,\n            \"eventName\": \"TransactionAdd\",\n            \"eventDetails\": {\n                \"eventTime\": \"2024-03-26 10:38:00.0\",\n                \"tillId\": 50671937\n            },\n            \"billDetails\": {\n                \"type\": \"loyalty\",\n                \"billNumber\": \"num124536\",\n                \"grossAmount\": 30.0,\n                \"discount\": 5.0,\n                \"billAmount\": 200.0,\n                \"note\": \"this is test1\",\n                \"source\": \"instore\",\n                \"pointsEarned\": {\n                    \"regular\": [\n                        {\n                            \"value\": 10.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"expiryType\": \"fixed\"\n                        },\n                        {\n                            \"value\": 150.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"expiryType\": \"fixed\"\n                        }\n                    ],\n                    \"promo\": [],\n                    \"promised\": []\n                },\n                \"pointsEarnedBreakup\": {\n                    \"regular\": [\n                        {\n                            \"value\": 0.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"awardedOn\": \"2024-03-26 10:38:00.0\",\n                            \"sourceValue\": 0.0,\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"allocationStrategyId\": 111526,\n                            \"allocationStrategyName\": \"10x fixed\",\n                            \"pointsCategoryId\": 18871,\n                            \"pointsCategoryName\": \"Main\",\n                            \"expiryStrategyId\": 109281,\n                            \"expiryStrategyName\": \"NUM_MONTHS_END12\",\n                            \"expiryType\": \"fixed\"\n                        },\n                        {\n                            \"value\": 0.0,\n                            \"expiresOn\": \"2025-03-31 23:59:59.0\",\n                            \"awardedOn\": \"2024-03-26 10:38:00.0\",\n                            \"sourceValue\": 0.0,\n                            \"programId\": 2649,\n                            \"programName\": \"VidhiJainOrgDefaultProgram\",\n                            \"allocationStrategyId\": 111529,\n                            \"allocationStrategyName\": \"alllocate 150\",\n                            \"pointsCategoryId\": 20151,\n                            \"pointsCategoryName\": \"acName_PointCategory\",\n                            \"expiryStrategyId\": 109281,\n                            \"expiryStrategyName\": \"NUM_MONTHS_END12\",\n                            \"expiryType\": \"fixed\"\n                        }\n                    ],\n                    \"promised\": []\n                },\n                \"lineItems\": [\n                    {\n                        \"id\": 2158986015,\n                        \"itemCode\": \"sku_164716451_2\",\n                        \"source\": \"instore\",\n                        \"grossAmount\": 0.0,\n                        \"discount\": 0.0,\n                        \"amount\": 300.0,\n                        \"rate\": 10.5,\n                        \"qty\": 3.0\n                    },\n                    {\n                        \"id\": 2158986016,\n                        \"itemCode\": \"sku_164716451_3\",\n                        \"source\": \"instore\",\n                        \"grossAmount\": 0.0,\n                        \"discount\": 0.0,\n                        \"amount\": 300.0,\n                        \"rate\": 10.5,\n                        \"qty\": 3.0\n                    },\n                    {\n                        \"id\": 2158986017,\n                        \"itemCode\": \"sku_164716451_4\",\n                        \"source\": \"instore\",\n                        \"grossAmount\": 0.0,\n                        \"discount\": 0.0,\n                        \"amount\": 300.0,\n                        \"rate\": 10.5,\n                        \"qty\": 3.0\n                    }\n                ]\n            },\n            \"customFields\": [],\n            \"extendedFields\": [],\n            \"paymentModes\": [],\n            \"pointInTimeSlabs\": [\n                {\n                    \"pointInTimeSlabNumber\": 2,\n                    \"pointInTimeSlabName\": \"SILVER\",\n                    \"programId\": 2649,\n                    \"isDefaultProgram\": true\n                }\n            ]\n        }\n    ],\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "events": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "eventLogId": {
                            "type": "integer",
                            "example": 24732968,
                            "default": 0
                          },
                          "eventName": {
                            "type": "string",
                            "example": "TransactionAdd"
                          },
                          "eventDetails": {
                            "type": "object",
                            "properties": {
                              "eventTime": {
                                "type": "string",
                                "example": "2024-03-26 10:38:00.0"
                              },
                              "tillId": {
                                "type": "integer",
                                "example": 50671937,
                                "default": 0
                              }
                            }
                          },
                          "billDetails": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "string",
                                "example": "loyalty"
                              },
                              "billNumber": {
                                "type": "string",
                                "example": "num124536"
                              },
                              "grossAmount": {
                                "type": "integer",
                                "example": 30,
                                "default": 0
                              },
                              "discount": {
                                "type": "integer",
                                "example": 5,
                                "default": 0
                              },
                              "billAmount": {
                                "type": "integer",
                                "example": 200,
                                "default": 0
                              },
                              "note": {
                                "type": "string",
                                "example": "this is test1"
                              },
                              "source": {
                                "type": "string",
                                "example": "instore"
                              },
                              "pointsEarned": {
                                "type": "object",
                                "properties": {
                                  "regular": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "value": {
                                          "type": "integer",
                                          "example": 10,
                                          "default": 0
                                        },
                                        "expiresOn": {
                                          "type": "string",
                                          "example": "2025-03-31 23:59:59.0"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 2649,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "VidhiJainOrgDefaultProgram"
                                        },
                                        "expiryType": {
                                          "type": "string",
                                          "example": "fixed"
                                        }
                                      }
                                    }
                                  },
                                  "promo": {
                                    "type": "array"
                                  },
                                  "promised": {
                                    "type": "array"
                                  }
                                }
                              },
                              "pointsEarnedBreakup": {
                                "type": "object",
                                "properties": {
                                  "regular": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "value": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "expiresOn": {
                                          "type": "string",
                                          "example": "2025-03-31 23:59:59.0"
                                        },
                                        "awardedOn": {
                                          "type": "string",
                                          "example": "2024-03-26 10:38:00.0"
                                        },
                                        "sourceValue": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 2649,
                                          "default": 0
                                        },
                                        "programName": {
                                          "type": "string",
                                          "example": "VidhiJainOrgDefaultProgram"
                                        },
                                        "allocationStrategyId": {
                                          "type": "integer",
                                          "example": 111526,
                                          "default": 0
                                        },
                                        "allocationStrategyName": {
                                          "type": "string",
                                          "example": "10x fixed"
                                        },
                                        "pointsCategoryId": {
                                          "type": "integer",
                                          "example": 18871,
                                          "default": 0
                                        },
                                        "pointsCategoryName": {
                                          "type": "string",
                                          "example": "Main"
                                        },
                                        "expiryStrategyId": {
                                          "type": "integer",
                                          "example": 109281,
                                          "default": 0
                                        },
                                        "expiryStrategyName": {
                                          "type": "string",
                                          "example": "NUM_MONTHS_END12"
                                        },
                                        "expiryType": {
                                          "type": "string",
                                          "example": "fixed"
                                        }
                                      }
                                    }
                                  },
                                  "promised": {
                                    "type": "array"
                                  }
                                }
                              },
                              "lineItems": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "integer",
                                      "example": 2158986015,
                                      "default": 0
                                    },
                                    "itemCode": {
                                      "type": "string",
                                      "example": "sku_164716451_2"
                                    },
                                    "source": {
                                      "type": "string",
                                      "example": "instore"
                                    },
                                    "grossAmount": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "discount": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "amount": {
                                      "type": "integer",
                                      "example": 300,
                                      "default": 0
                                    },
                                    "rate": {
                                      "type": "number",
                                      "example": 10.5,
                                      "default": 0
                                    },
                                    "qty": {
                                      "type": "integer",
                                      "example": 3,
                                      "default": 0
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "customFields": {
                            "type": "array"
                          },
                          "extendedFields": {
                            "type": "array"
                          },
                          "paymentModes": {
                            "type": "array"
                          },
                          "pointInTimeSlabs": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "pointInTimeSlabNumber": {
                                  "type": "integer",
                                  "example": 2,
                                  "default": 0
                                },
                                "pointInTimeSlabName": {
                                  "type": "string",
                                  "example": "SILVER"
                                },
                                "programId": {
                                  "type": "integer",
                                  "example": 2649,
                                  "default": 0
                                },
                                "isDefaultProgram": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=918088369835&source=INSTORE&eventIds=634510612' \\\n--header 'Authorization: Basic aWFtc2hpdkNWI1YTI5MWY=' \\\n--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000'",
              "name": "Sample example With eventIds"
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=918088369835&source=INSTORE&eventName=TransactionAdd&eventReferenceIds=888812880' \\\n--header 'Authorization: Basic aWFtc2h1YTI5MWY=' \\\n--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000'",
              "name": "Sample example With event name and reference ID for a transactional event"
            },
            {
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=id&identifierValue=565039506&source=INSTORE&type=CUSTOMER&eventName=GenericEvent&eventReferenceIds=67587c26-d925-4f8d-9211-a9b4d6f8db8e' \\\n--header 'Authorization: Basic aWFtc2hpYTI5MWY=' \\\n--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000'",
              "name": "Sample example With event name and request ID for a behavioral event"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getLedgerExplodeInfo?identifierName=mobile&identifierValue=918088369835&source=INSTORE&eventIds=634510612&getPointsEarnedBreakup=true' \\\n--header 'Authorization: Basic ' \\\n--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=8Dv9MBbR4vrWw540MN.YxjsaVPdriQsRVRJDtn4T2uE-1773323026611-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request with getPointsEarnedBreakup=trues"
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