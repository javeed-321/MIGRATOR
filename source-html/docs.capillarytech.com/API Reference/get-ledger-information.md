> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Points Ledger 

Retrieves the points ledger records of a customer, usergroup or alternate currencies for each event.

## Example Requests

```curl Sample example to Retrieve points ledger entries of a customer
curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerInfo?identifierName=mobile&source=INSTORE&limit=5&offset=0&programId=973&order=ASC&identifierValue=918088369835&type=CUSTOMER' \
--header 'Authorization: Basic bWFkaHVfMjU2YQ==' \
--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=j0LtZcsVpoWH3QOLk14zBlfM2j0._KtqFl1cvEnFD7w-1759917775406-0.0.1.1-604800000'
```
```curl Sample example to Retrieve points ledger entries of Alternate Currencies for a customer
curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerInfo?identifierName=mobile&source=INSTORE&programId=973&includeAlternateCurrencies=true&alternateCurrencyNames=DocCoin&identifierValue=918088369835&type=CUSTOMER' \
--header 'Authorization: Basic c2FudCpiMFlNw==' \
--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=TZ97HRhOQIgIgy39aYzTDnPygcLRg2I7AYQtSnBu5SY-1759918250623-0.0.1.1-604800000'
```
```curl Sample example to Retrieve points ledger entries of a user group
curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerInfo?type=USERGROUP2&identifierName=id&identifierValue=3832765&source=INSTORE&offset=0&limit=10&order=DESC' \
--header 'Authorization: Basic c2FudC5wlNw==' \
--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=cvtmjKgSJdN_FgEvHvbQwcw5Qn6PNUMH1ozuWBT6.hY-1759918054003-0.0.1.1-604800000'
```

## Prerequisites

* Make sure you have access to the Points access group resource. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

## API Specification

| Property      | Value |
| :------------ | :---- |
| HTTP Method   | GET   |
| Pagination    | Yes   |
| Batch support | No    |

## Query Parameters (Customer)

You can use the below query parameters and retrieve points ledger entries of a customer.

| Parameter *(Parameters marked with \* are mandatory)* | Data Type | Description                                                                                                                                                                                                                                                                                                                 |
| :---------------------------------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **identifierName**\*                                  | Enum      | Identifier type to identify the customer. (`id`, `email`, `mobile`, `externalId`)                                                                                                                                                                                                                                           |
| **identifierValue**\*                                 | String    | Value of the specified identifier type of the customer.                                                                                                                                                                                                                                                                     |
| **source**\*                                          | Enum      | The source of the customer's registration. Supported values: `FACEBOOK`, `WEB_ENGAGE`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`.                                                                                                                                               |
| **accountId**\*                                       | Integer   | For sources with multiple accounts, pass the specific `accountId` to retrieve the ledger information.                                                                                                                                                                                                                       |
| tillId                                                | Integer   | Get the customer's ledger information from a specific till. To get the customer's ledger information from multiple tills, use `tillIds`. **Note:** Provide either `tillId`, `tillIds`, `storeId`, or `storeCode`. Providing multiple identifiers is not supported.                                                          |
| tillIds                                               | Integer   | Get the customer's ledger information from a list of tills. Provide the list of tills separated by commas without spacing. For example, 12345,67890.                                                                                                                                                                        |
| storeId                                               | Integer   | Get the customer's ledger information from a specific store using a store ID. Refer to the [Get Org Entities API](https://docs.capillarytech.com/reference/get-org-entities) to get the `storeId`.                                                                                                                          |
| storeCode                                             | String    | Get the customer's ledger information from a specific store using a store code. Refer to the [Get Org Entities API](https://docs.capillarytech.com/reference/get-org-entities) to get the `storeCode`.                                                                                                                      |
| limit                                                 | Integer   | Number of ledger records to display per page. For example, if the total records are 15 and the limit is 5, the first page will display the first 5 records. The maximum supported limit is 100.                                                                                                                             |
| offset                                                | Integer   | Page number to retrieve. To view the first page, set the value to `0`.                                                                                                                                                                                                                                                      |
| programId                                             | Integer   | Retrieve the ledger details of a specific program.                                                                                                                                                                                                                                                                          |
| isFilterBasedOnDate                                   | Boolean   | Indicates whether the date filter should be applied when fetching data. Default: `True`. If not specified, the API fetches the user's entire purchase history when no start or end date is provided.                                                                                                                        |
| includeLastOneYearData                                | Boolean   | If `True`, the API response will include data from the last year instead of the last 90 days when only `startDate` or `endDate` is provided. Default: `False`.                                                                                                                                                              |
| startDate                                             | String    | Get ledger information from a specific date range. Format: `YYYY-MM-DDThh:mm:ss`. **Notes:** - The date range between `startDate` and `endDate` should not exceed 90 days. - If only one of these is provided, 90 days of data is retrieved. - If `includeLastOneYearData` is `True`, data from the last year is retrieved. |
| endDate                                               | String    | Get ledger information up to a specific date range. Same format and restrictions as `startDate`.                                                                                                                                                                                                                            |
| includeTillConceptEvents                              | Boolean   | If `True`, fetches deduction entries from tills mapped to the Program ID's Concept, even if deductions are from another program. Default: `False`. Requires `programId` when `True`.                                                                                                                                        |
| ledgerEntryType                                       | Enum      | Specify the type of ledger entries to fetch. Supported values: `CREDIT`, `DEBIT`, `OPENING_BALANCE`. Default: All entry types.                                                                                                                                                                                              |
| pointCategoryType                                     | Enum      | Specify the point category type. Supported values: `REGULAR`, `PROMISED`, `TRIGGER_BASED`. Default: All category types.                                                                                                                                                                                                     |
| includeAlternateCurrencies                            | Boolean   | If `True`, retrieves all alternate currencies available with the customer.                                                                                                                                                                                                                                                  |
| alternateCurrencyNames                                | String    | Filter alternate currencies by name. Pass a comma-separated list of names. Set `includeAlternateCurrencies` to `False` when using this.                                                                                                                                                                                     |
| excludePointCategories                                | Boolean   | Use with `includeAlternateCurrencies=true` to include only ledger records for alternate currencies. Refer to the [documentation](https://docs.capillarytech.com/reference/get-ledger-information#behaviour-of-includealternatecurrencies-and-excludepointcategoriesparameters) for more details.                            |
| includeConceptDetails                                 | Boolean   | If `True`, includes `conceptId` and `conceptName` in each ledger entry. The concept is the org hierarchy level above the store associated with the till where the event occurred. Default: `False`.                                                                                                                         |

## Query Parameters (User Group)

You can use the below query parameters and retrieve points ledger entries of a usergroup.

| Parameter *(Parameters marked with \* are mandatory)* | Data Type | Description                                                                                                                                                                                                                                                                                      |
| :---------------------------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                  | Enum      | Type of user group entity. Supported values: `USERGROUP2`, `FLEET`.                                                                                                                                                                                                                              |
| **identifierName**\*                                  | Enum      | Identifier of the group. Supported values: `groupId`, `externalId`, `primaryUserId`.                                                                                                                                                                                                             |
| **identifierValue**\*                                 | String    | Value of the specified identifier type for the user group.                                                                                                                                                                                                                                       |
| **source**\*                                          | Enum      | Source of the user group's registration. Supported values: `FACEBOOK`, `WEB_ENGAGE`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `ALL`.                                                                                                                      |
| limit                                                 | Integer   | Number of ledger records to display per page. Maximum supported limit is 100.                                                                                                                                                                                                                    |
| offset                                                | Integer   | Starting index for data retrieval.                                                                                                                                                                                                                                                               |
| order                                                 | Enum      | Sort order of entries by the **ledger creation date** (`ledgerCreatedDate`). Supported values: `ASC`, `DESC`.                                                                                                                                                                                    |
| tillId                                                | Integer   | Get the customer's ledger information from a specific till. To get the customer's ledger information from multiple tills, use `tillIds`. **Note:** Provide either `tillId`, `tillIds`, `storeId`, or `storeCode`. Providing multiple identifiers is not supported.                               |
| tillIds                                               | Integer   | Get the user group's ledger information from a list of tills. Provide the list of tills separated by commas without spacing. For example, `12345,67890`.                                                                                                                                         |
| storeId                                               | Integer   | Get the user group's ledger information from a specific store using a store ID. Refer to the [Get Org Entities API](https://docs.capillarytech.com/reference/get-org-entities) to get the `storeId`.                                                                                             |
| storeCode                                             | String    | Get the user group's ledger information from a specific store using a store code. Refer to the [Get Org Entities API](https://docs.capillarytech.com/reference/get-org-entities) to get the `storeCode`.                                                                                         |
| alternateCurrencyNames                                | String    | Filter alternate currencies by name. Pass a comma-separated list of names. Set `includeAlternateCurrencies` to `False` when using this.                                                                                                                                                          |
| excludePointCategories                                | Boolean   | Use with `includeAlternateCurrencies=true` to include only ledger records for alternate currencies. Refer to the [documentation](https://docs.capillarytech.com/reference/get-ledger-information#behaviour-of-includealternatecurrencies-and-excludepointcategoriesparameters) for more details. |

## Behaviour of Alternate Currency and Point Category Parameters

The following table details how different combinations of `includeAlternateCurrencies`, `pointCategoryType`, and `excludePointCategories` parameters affect the API response:

| `includeAlternateCurrencies` | `pointCategoryType`                       | `excludePointCategories` | Behaviour                                                                                                         |
| :--------------------------- | :---------------------------------------- | :----------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `true`                       | `REGULAR`, `PROMISED`, or `TRIGGER_BASED` | Not provided/ `false`    | Only points and alternate currencies entries with the provided category types are displayed.                      |
| `true`                       | Not provided                              | Not provided/ `false`    | Points and alternate currencies across all categories are displayed.                                              |
| `true`                       | Not provided                              | `true`                   | Only alternate currency entries are displayed.                                                                    |
| `true`                       | `REGULAR`                                 | `true`                   | Only alternate currency entries are displayed; `pointCategoryType` is ignored when `excludePointCategories=true`. |
| `false`                      | Not provided                              | Not provided/ `false`    | Only entries for points across all categories are displayed.                                                      |
| `false`                      | `REGULAR`, `PROMISED`, or `TRIGGER_BASED` | Not provided/ `false`    | Only entries matching the provided point category types are displayed, excluding alternate currencies.            |

## Example Responses

```json Sample response to Retrieve points ledger entries of a customer
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 566135941,
        "externalId": "696969",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 138,
        "pageCount": 14
    },
    "ledgerEntries": [
        {
            "eventLogId": 656098370,
            "eventName": "PointsExpiry",
            "customerId": 973,
            "ledgerCreatedDate": "2026-01-05 04:48:48.0",
            "ledgerCreatedDateISO": "2026-01-05T04:48:48Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "86900.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-86900.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {},
            "store": "",
            "storeCode": "",
            "tillCode": "",
            "eventDetails": {
                "eventDate": "2026-01-05 04:48:48.0",
                "eventDateISO": "2026-01-05T04:48:48Z"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": 100737
        },
        {
            "eventLogId": 653318319,
            "eventName": "TransactionAdd",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-10 06:13:46.0",
            "ledgerCreatedDateISO": "2025-12-10T06:13:46Z",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "21000.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "21000.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {
                "transactionId": 894749264,
                "transactionNumber": "txn-121",
                "date": "2025-12-10 10:35:00.0",
                "dateISO": "2025-12-10T10:35:00Z",
                "amount": 10000.0,
                "grossBillAmount": 10000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-10 10:35:00.0",
                "eventDateISO": "2025-12-10T10:35:00Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 653318287,
            "eventName": "TransactionAdd",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-10 06:13:27.0",
            "ledgerCreatedDateISO": "2025-12-10T06:13:27Z",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "21000.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "21000.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {
                "transactionId": 894749261,
                "transactionNumber": "txn-120",
                "date": "2025-12-08 10:35:00.0",
                "dateISO": "2025-12-08T10:35:00Z",
                "amount": 10000.0,
                "grossBillAmount": 10000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-08 10:35:00.0",
                "eventDateISO": "2025-12-08T10:35:00Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 653318116,
            "eventName": "TransactionAdd",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-10 06:11:55.0",
            "ledgerCreatedDateISO": "2025-12-10T06:11:55Z",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {
                "transactionId": 894749252,
                "transactionNumber": "txn-119",
                "date": "2025-12-08 10:35:00.0",
                "dateISO": "2025-12-08T10:35:00Z",
                "amount": 5000.0,
                "grossBillAmount": 5000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-08 10:35:00.0",
                "eventDateISO": "2025-12-08T10:35:00Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 653318086,
            "eventName": "TransactionAdd",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-10 06:11:35.0",
            "ledgerCreatedDateISO": "2025-12-10T06:11:35Z",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10000.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10000.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {
                "transactionId": 894749251,
                "transactionNumber": "txn-118",
                "date": "2025-12-08 10:35:00.0",
                "dateISO": "2025-12-08T10:35:00Z",
                "amount": 5000.0,
                "grossBillAmount": 5000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-08 10:35:00.0",
                "eventDateISO": "2025-12-08T10:35:00Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 653311246,
            "eventName": "TransactionAdd",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-10 05:05:56.0",
            "ledgerCreatedDateISO": "2025-12-10T05:05:56Z",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "10100.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "10100.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {
                "transactionId": 894743676,
                "transactionNumber": "txn-117",
                "date": "2025-12-08 10:35:00.0",
                "dateISO": "2025-12-08T10:35:00Z",
                "amount": 5000.0,
                "grossBillAmount": 5000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-08 10:35:00.0",
                "eventDateISO": "2025-12-08T10:35:00Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 653235244,
            "eventName": "PointsRedemption",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-09 12:59:15.0",
            "ledgerCreatedDateISO": "2025-12-09T12:59:15Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                },
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-100.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "100.000"
            },
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-09 12:59:14.0",
                "eventDateISO": "2025-12-09T12:59:14Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 653235085,
            "eventName": "PointsRedemption",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-09 12:56:14.0",
            "ledgerCreatedDateISO": "2025-12-09T12:56:14Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                },
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-100.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "100.000"
            },
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-09 12:56:13.0",
                "eventDateISO": "2025-12-09T12:56:13Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 652789031,
            "eventName": "PointsRedemption",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-05 13:50:16.0",
            "ledgerCreatedDateISO": "2025-12-05T13:50:16Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                },
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "500.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-500.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "100.000"
            },
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "george.docdemo",
            "eventDetails": {
                "eventDate": "2025-12-05 13:50:16.0",
                "eventDateISO": "2025-12-05T13:50:16Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 652787930,
            "eventName": "PointsRedemption",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-05 13:41:45.0",
            "ledgerCreatedDateISO": "2025-12-05T13:41:45Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "100.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                },
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "500.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-500.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "100.000"
            },
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "george.docdemo",
            "eventDetails": {
                "eventDate": "2025-12-05 13:41:45.0",
                "eventDateISO": "2025-12-05T13:41:45Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        }
    ],
    "warnings": []
}
```
```json Sample response with concept details (includeConceptDetails=true)
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 566135941,
        "externalId": "696969",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 2,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 653318319,
            "eventName": "TransactionAdd",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-12-10 06:13:46.0",
            "ledgerCreatedDateISO": "2025-12-10T06:13:46Z",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "21000.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "21000.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {
                "transactionId": 894749264,
                "transactionNumber": "txn-121",
                "date": "2025-12-10 10:35:00.0",
                "dateISO": "2025-12-10T10:35:00Z",
                "amount": 10000.0,
                "grossBillAmount": 10000.0,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "naman_doc",
            "eventDetails": {
                "eventDate": "2025-12-10 10:35:00.0",
                "eventDateISO": "2025-12-10T10:35:00Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737,
            "conceptId": 50789001,
            "conceptName": "ROOT"
        }
    ],
    "warnings": []
}
```
```json Sample response to Retrieve points ledger entries of Alternate Currencies for a customer
{
    "customerDetails": {
        "firstName": "John",
        "lastName": "Pork",
        "userId": 566135941,
        "externalId": "696969",
        "entityType": "CUSTOMER"
    },
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 83,
        "pageCount": 9
    },
    "ledgerEntries": [
        {
            "eventLogId": 644117583,
            "eventName": "TransactionAdd",
            "customerId": 566135941,
            "ledgerCreatedDate": "2025-09-29 09:09:02.0",
            "ledgerCreatedDateISO": "2025-09-29T09:09:02Z",
            "customerDetails": {
                "userId": 0
            },
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "7000.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973,
                    "alternateCurrencyName": "DocCoin"
                }
            ],
            "netPointsOnEvent": "7000.000",
            "netAlternateCurrenciesOnEvent": {
                "DocCoin": "7000.000"
            },
            "transactionDetails": {
                "transactionId": 891732965,
                "transactionNumber": "txn-33",
                "date": "2025-09-28 14:00:00.0",
                "dateISO": "2025-09-28T14:00:00Z",
                "amount": 3500,
                "grossBillAmount": 3500,
                "source": "instore"
            },
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "madhu_rima",
            "eventDetails": {
                "eventDate": "2025-09-28 14:00:00.0",
                "eventDateISO": "2025-09-28T14:00:00Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": null,
            "orgId": 100737
        }
    ],
    "warnings": []
}
```
```json Sample example to Retrieve points ledger entries of a user group
{
    "ledgerDetails": {
        "pageNumber": 0,
        "pageSize": 10,
        "totalEntries": 5,
        "pageCount": 1
    },
    "ledgerEntries": [
        {
            "eventLogId": 623972643,
            "eventName": "PointsExpiry",
            "customerId": 973,
            "ledgerCreatedDate": "2025-04-05 02:42:18.0",
            "ledgerCreatedDateISO": "2025-04-05T02:42:18Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "20.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-20.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {},
            "store": "",
            "storeCode": "",
            "tillCode": "",
            "eventDetails": {
                "eventDate": "2025-04-05 02:42:19.0",
                "eventDateISO": "2025-04-05T02:42:19Z"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": 100737
        },
        {
            "eventLogId": 623659380,
            "eventName": "PointsExpiry",
            "customerId": 973,
            "ledgerCreatedDate": "2025-04-01 02:53:58.0",
            "ledgerCreatedDateISO": "2025-04-01T02:53:58Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "DEBIT",
                    "points": "20.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "-20.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {},
            "store": "",
            "storeCode": "",
            "tillCode": "",
            "eventDetails": {
                "eventDate": "2025-04-01 02:53:59.0",
                "eventDateISO": "2025-04-01T02:53:59Z"
            },
            "sourceProgramId": 973,
            "sourceProgramName": "DocDemoDefaultProgram",
            "orgId": 100737
        },
        {
            "eventLogId": 620655452,
            "eventName": "PointsTransfer",
            "customerId": -3835641,
            "ledgerCreatedDate": "2025-03-10 05:45:19.0",
            "ledgerCreatedDateISO": "2025-03-10T05:45:19Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "20.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "sant.p_123",
            "eventDetails": {
                "eventDate": "2025-03-10 05:45:19.0",
                "eventDateISO": "2025-03-10T05:45:19Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 620245980,
            "eventName": "PointsTransfer",
            "customerId": -3835641,
            "ledgerCreatedDate": "2025-03-06 05:52:18.0",
            "ledgerCreatedDateISO": "2025-03-06T05:52:18Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "CREDIT",
                    "points": "20.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "20.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "sant.p_123",
            "eventDetails": {
                "eventDate": "2025-03-06 05:52:18.0",
                "eventDateISO": "2025-03-06T05:52:18Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        },
        {
            "eventLogId": 618615192,
            "eventName": "UserGroup2Create",
            "customerId": -3832765,
            "ledgerCreatedDate": "2025-02-18 06:28:02.0",
            "ledgerCreatedDateISO": "2025-02-18T06:28:02Z",
            "customerDetails": null,
            "entryDetails": [
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "DelayedAccrualPointCategory",
                    "programName": "DocTransferPoints",
                    "programId": 983
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "ExternalTriggerBasedPointCategory",
                    "programName": "DocTransferPoints",
                    "programId": 983
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "Main",
                    "programName": "DocTransferPoints",
                    "programId": 983
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "DelayedAccrualPointCategory",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "ExternalTriggerBasedPointCategory",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                },
                {
                    "ledgerEntryType": "OPENING_BALANCE",
                    "points": "0.000",
                    "pointsCategory": "Main",
                    "programName": "DocDemoDefaultProgram",
                    "programId": 973
                }
            ],
            "netPointsOnEvent": "0.000",
            "netAlternateCurrenciesOnEvent": {},
            "transactionDetails": {},
            "store": "DocStore",
            "storeCode": "doc123",
            "tillCode": "sant.p_123",
            "eventDetails": {
                "eventDate": "2025-02-18 06:28:02.0",
                "eventDateISO": "2025-02-18T06:28:02Z"
            },
            "sourceProgramId": 983,
            "sourceProgramName": "DocTransferPoints",
            "orgId": 100737
        }
    ],
    "warnings": []
}
```

## Response Parameters (Customer and User Group)

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        customerDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the customer.
      </td>
    </tr>

    <tr>
      <td>
        * firstName
      </td>

      <td>
        String
      </td>

      <td>
        Registered first name of the customer. Character limit: 100 characters
      </td>
    </tr>

    <tr>
      <td>
        * lastName
      </td>

      <td>
        String
      </td>

      <td>
        Registered last name of the customer. Character limit: 100 characters
      </td>
    </tr>

    <tr>
      <td>
        * userId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        * entityType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of entity. Supported values: CUSTOMER, USERGROUP2, FLEET
      </td>
    </tr>

    <tr>
      <td>
        ledgerDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Details on the ledger record.
      </td>
    </tr>

    <tr>
      <td>
        * pageNumber
      </td>

      <td>
        Integer
      </td>

      <td>
        Current page number of the ledger.
      </td>
    </tr>

    <tr>
      <td>
        * pageSize
      </td>

      <td>
        Integer
      </td>

      <td>
        Current page size of the ledger.
      </td>
    </tr>

    <tr>
      <td>
        * totalEntries
      </td>

      <td>
        Integer
      </td>

      <td>
        Total number of entries in the ledger.
      </td>
    </tr>

    <tr>
      <td>
        * pageCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Total number of pages in the ledger.
      </td>
    </tr>

    <tr>
      <td>
        ledgerEntries
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the ledger entry.
      </td>
    </tr>

    <tr>
      <td>
        * eventLogId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the event that is triggered.
      </td>
    </tr>

    <tr>
      <td>
        * eventName
      </td>

      <td>
        Enum
      </td>

      <td>
        Name of the event. Supported values: GenericEvent, TransactionAdd, TransactionUpdate, TargetCompleted, PointsRedemption, VoucherRedemption, DelayedAccrual, PointsTransfer, PointsRedemptionReversal, CustomerRegistration, CustomerUpdate, ManualPointsAdjustment, BulkAllocatePoints. For more information on [behavioural events](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/), refer to the documentation.
      </td>
    </tr>

    <tr>
      <td>
        * customerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the customer who triggered the event. When type=USERGROUP2, this may return a negative value — this is expected behaviour. The absolute value of the negative number is the group ID. To query group-level ledger entries, use groupId as the identifierName parameter instead of customerId.
      </td>
    </tr>

    <tr>
      <td>
        * ledgerCreatedDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the ledger entry created  date in YYYY-MM-DD HH:MM:SS.s format. **Note:** This field will be deprecated in the future and is being replaced by `ledgerCreatedDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        * ledgerCreatedDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the ledger entry created date in ISO 8601 format, returned in the server timezone.

        **EU server example **
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        * customerDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the customer within a user group who triggered the event. The value is null if not a user group.
      </td>
    </tr>

    <tr>
      <td>
        -- firstName
      </td>

      <td>
        String
      </td>

      <td>
        Registered first name of the customer in the user group. Character limit: 100 characters
      </td>
    </tr>

    <tr>
      <td>
        -- lastName
      </td>

      <td>
        String
      </td>

      <td>
        Registered last name of the customer in the user group. Character limit: 100 characters
      </td>
    </tr>

    <tr>
      <td>
        -- identifier
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the identifiers of a customer in the user group.
      </td>
    </tr>

    <tr>
      <td>
        --- type
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of identifier for the customer in the user group. Supported values: email, mobile.
      </td>
    </tr>

    <tr>
      <td>
        --- value
      </td>

      <td>
        String
      </td>

      <td>
        Registered identifier of the customer in the user group based on the type. Character limit for email: 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        --- role
      </td>

      <td>
        String
      </td>

      <td>
        Role of the customer in the user group. For example, a company enrolled in a fleet loyalty program can have roles such as owner, associate, driver.
      </td>
    </tr>

    <tr>
      <td>
        -- userId
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID of the customer in the user group who triggered the event.
      </td>
    </tr>

    <tr>
      <td>
        * entryDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the ledger entry.
      </td>
    </tr>

    <tr>
      <td>
        -- ledgerEntryType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of ledger entry. Supported values: OPENING_BALANCE, CREDIT, DEBIT. Refer to the documentation on points liability for more details.
      </td>
    </tr>

    <tr>
      <td>
        -- points
      </td>

      <td>
        Float
      </td>

      <td>
        Number of points transacted.
      </td>
    </tr>

    <tr>
      <td>
        -- pointsCategory
      </td>

      <td>
        String
      </td>

      <td>
        Category of points transacted. Supported values: Main (redeemable account), DelayedAccrualPointCategory (promised points), ExternalTriggerBasedPointCategory (points awarded based on external events or triggers.). Refer to the documentation on points for more information.
      </td>
    </tr>

    <tr>
      <td>
        -- programName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the program where the event occurred. Character limit: 255 characters
      </td>
    </tr>

    <tr>
      <td>
        -- programId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the program where the event occurred.
      </td>
    </tr>

    <tr>
      <td>
        * netPointsOnEvent
      </td>

      <td>
        Float
      </td>

      <td>
        Net amount of points transacted.
      </td>
    </tr>

    <tr>
      <td>
        * netAlternateCurrenciesOnEvent
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of alternate currencies transacted.
      </td>
    </tr>

    <tr>
      <td>
        -- "name of alternate currency"
      </td>

      <td>
        Float
      </td>

      <td>
        Net amount of alternate currencies transacted. The parameter is the unique name of the alternate currency for the organisation.
      </td>
    </tr>

    <tr>
      <td>
        * transactionDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the transactions that occurred.
      </td>
    </tr>

    <tr>
      <td>
        -- transactionId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the transaction that is generated after a transaction is completed.
      </td>
    </tr>

    <tr>
      <td>
        -- transactionNumber
      </td>

      <td>
        String
      </td>

      <td>
        Unique reference number for a transaction. This can be used to reference a transaction for a return.
      </td>
    </tr>

    <tr>
      <td>
        -- date
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the transaction date and time in YYYY-MM-DD HH:MM:SS.s format. **Note:** This field will be deprecated in the future and is being replaced by `dateISO`.
      </td>
    </tr>

    <tr>
      <td>
        --dateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the transaction date and time in ISO 8601 format, returned in the server timezone. **EU server example**  :
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC). **India server example** :
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)  
        **Note:** The response timezone always matches the server timezone, regardless of the timezone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        -- amount
      </td>

      <td>
        Float
      </td>

      <td>
        The total amount that was transacted, after all adjustments such as discounts or taxes.
      </td>
    </tr>

    <tr>
      <td>
        -- grossBillAmount
      </td>

      <td>
        Float
      </td>

      <td>
        Total value of the transaction before any adjustments like discounts or taxes are applied.
      </td>
    </tr>

    <tr>
      <td>
        -- source
      </td>

      <td>
        String
      </td>

      <td>
        Source where the transaction occurred. Supported values: FACEBOOK, WEB_ENGAGE, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL.
      </td>
    </tr>

    <tr>
      <td>
        * store
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the store where the transaction occurred.
      </td>
    </tr>

    <tr>
      <td>
        * storeCode
      </td>

      <td>
        String
      </td>

      <td>
        Unique code of the store where the transaction occurred.
      </td>
    </tr>

    <tr>
      <td>
        * tillCode
      </td>

      <td>
        String
      </td>

      <td>
        Till code of the POS machine where the transaction occurred.
      </td>
    </tr>

    <tr>
      <td>
        * eventDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the triggered event and the promotion associated with it. Promotion details are included for TargetCompleted, Behavioural Events and Import type events
      </td>
    </tr>

    <tr>
      <td>
        -- eventDisplayName
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the event that is triggered.
      </td>
    </tr>

    <tr>
      <td>
        -- promotionName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the promotion. The character limit for the name is 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        -- promotionDescription
      </td>

      <td>
        String
      </td>

      <td>
        Description of the promotion. The character limit for the description is 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        -- promotionIdentifier
      </td>

      <td>
        String
      </td>

      <td>
        Unique external identifier of the promotion that is configured for the program.
      </td>
    </tr>

    <tr>
      <td>
        -- promotionId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the promotion.
      </td>
    </tr>

    <tr>
      <td>
        -- eventDate
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the event-triggered date in YYYY-MM-DD HH:MM:SS.s format. **Note:** This field will be deprecated in the future and is being replaced by `eventDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        --eventDateISO
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
        * sourceProgramId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the source program for the ledger entry.
      </td>
    </tr>

    <tr>
      <td>
        * sourceProgramName
      </td>

      <td>
        String
      </td>

      <td>
        Unique name of the source program for the ledger entry.
      </td>
    </tr>

    <tr>
      <td>
        * orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the organisation.
      </td>
    </tr>

    <tr>
      <td>
        * conceptId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the concept associated with the store where the transaction occurred. Returned only when `includeConceptDetails=true`. Returns `-1` if the concept or store cannot be resolved for the till.
      </td>
    </tr>

    <tr>
      <td>
        * conceptName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the concept associated with the store where the transaction occurred. Returned only when `includeConceptDetails=true` and the concept has a valid name. Omitted from the response if the concept name is unavailable.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Object
      </td>

      <td>
        Warnings, if any.
      </td>
    </tr>
  </tbody>
</Table>

## API Error Codes

| Error Code | Description                                                                                                    | Reason                                                                                                                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11012      | Invalid userId passed in request                                                                               | The userId is wrong.                                                                                                                                                                                                                                             |
| 8013       | Lookup, Invalid identifier passed                                                                              | The identifier type is wrong or invalid.                                                                                                                                                                                                                         |
| 11029      | Limit cannot be greater than 100                                                                               | The page limit is higher than the supported limit.                                                                                                                                                                                                               |
| 11003      | There are no ledger entries present for the given parameters. Try removing parameters to widen the search      | The offset value is greater than the total number of pages.                                                                                                                                                                                                      |
| 11007      | Invalid ledgerEntryType passed in request                                                                      | The type of ledger entry is wrong or invalid.                                                                                                                                                                                                                    |
| 11008      | Invalid pointCategoryType passed in request                                                                    | The type of point category is wrong or invalid.                                                                                                                                                                                                                  |
| 9003       | No CPS entry for the given points type.                                                                        | No matching record found in the Customer Points Summary (CPS) table for that specific combination of customer and points type. Verify the customer ID is correct and confirm the points type is valid. Contact the Capillary support team if the issue persists. |
| 11028      | Multiple input parameters set. Please provide only one of the following: tillId, tillIds, storeCode or storeId | More than one of the parameters (`tillId`, `tillIds`, `storeCode` or `storeId`) are passed together.                                                                                                                                                             |
| 11027      | Invalid tillIds: \[123]                                                                                        | Till ID provided is invalid or wrong.                                                                                                                                                                                                                            |
| 11025      | Till id format exception:For input string: "abc"                                                               | Till ID format is invalid                                                                                                                                                                                                                                        |
| 11026      | No tills found for store with store id: 123                                                                    | Store ID provided is invalid or wrong.                                                                                                                                                                                                                           |
| 11026      | No tills found for store with store code: abc                                                                  | Store code provided is invalid or wrong.                                                                                                                                                                                                                         |

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
    "/pointsLedger/getCustomerLedgerInfo": {
      "get": {
        "summary": "Retrieve group ledger information (Available in points ledger)",
        "description": "This API allows you to retrieve the ledger information of the group.",
        "operationId": "get-group-ledger-information",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Enter the source of the group.",
            "required": true,
            "schema": {
              "type": "string",
              "default": "INSTORE"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Enter the identifier name such as, group id, external id.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Enter the value of the identifier.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Type of group. In this case, the value should be USERGROUP2.",
            "required": true,
            "schema": {
              "type": "string",
              "default": "USERGROUP2"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "The maximum number of items to be retrieved.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "The starting index for data retrieval.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample response to Retrieve points ledger entries of a customer ": {
                    "summary": "Sample response to Retrieve points ledger entries of a customer ",
                    "value": {
                      "customerDetails": {
                        "firstName": "testgr6",
                        "lastName": "testgrpv2",
                        "userId": 565032176,
                        "externalId": "434550",
                        "entityType": "CUSTOMER"
                      },
                      "ledgerDetails": {
                        "pageNumber": 0,
                        "pageSize": 10,
                        "totalEntries": 15,
                        "pageCount": 2
                      },
                      "ledgerEntries": [
                        {
                          "eventLogId": 633146326,
                          "eventName": "PointsExpiry",
                          "customerId": 973,
                          "ledgerCreatedDate": "2025-07-07 02:46:56.0",
                          "ledgerCreatedDateISO": "2025-07-07T02:46:56Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "213100.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-213100.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "",
                          "storeCode": "",
                          "tillCode": "",
                          "eventDetails": {
                            "eventDate": "2025-07-07 02:46:57.0",
                            "eventDateISO": "2025-07-07T02:46:57Z"
                          },
                          "sourceProgramId": 973,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 631760812,
                          "eventName": "TransactionAdd",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-06-23 08:08:56.0",
                          "ledgerCreatedDateISO": "2025-06-23T08:08:56Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "142000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "142000.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {
                            "transactionId": 887897816,
                            "transactionNumber": "billnumber20012",
                            "date": "2025-06-11 05:41:30.0",
                            "dateISO": "2025-06-11T05:41:30Z",
                            "amount": 35500,
                            "grossBillAmount": 110,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-06-11 05:41:30.0",
                            "eventDateISO": "2025-06-11T05:41:30Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 630742874,
                          "eventName": "TransactionAdd",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-06-12 05:11:18.0",
                          "ledgerCreatedDateISO": "2025-06-12T05:11:18Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "71000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "71000.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {
                            "transactionId": 887588965,
                            "transactionNumber": "billnumber20011",
                            "date": "2025-06-11 05:41:30.0",
                            "dateISO": "2025-06-11T05:41:30Z",
                            "amount": 35500,
                            "grossBillAmount": 110,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-06-11 05:41:30.0",
                            "eventDateISO": "2025-06-11T05:41:30Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 630141231,
                          "eventName": "DelayedAccrual",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-06-05 00:33:48.0",
                          "ledgerCreatedDateISO": "2025-06-05T00:33:48Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "100.000",
                              "pointsCategory": "DelayedAccrualPointCategory",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            },
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "100.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "0.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-06-05 00:00:00.0",
                            "eventDateISO": "2025-06-05T00:00:00Z"
                          },
                          "sourceProgramId": 973,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 629768732,
                          "eventName": "TransactionAdd",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-06-02 19:21:31.0",
                          "ledgerCreatedDateISO": "2025-06-02T19:21:31Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "100.000",
                              "pointsCategory": "DelayedAccrualPointCategory",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "100.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {
                            "transactionId": 887098712,
                            "transactionNumber": "billnumber1009",
                            "date": "2025-06-01 05:41:30.0",
                            "dateISO": "2025-06-01T05:41:30Z",
                            "amount": 40000,
                            "grossBillAmount": 110,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-06-01 05:41:30.0",
                            "eventDateISO": "2025-06-01T05:41:30Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 628247740,
                          "eventName": "PointsRedemption",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-05-20 16:08:16.0",
                          "ledgerCreatedDateISO": "2025-05-20T16:08:16Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "1.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-1.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-05-20 16:08:16.0",
                            "eventDateISO": "2025-05-20T16:08:16Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 628246818,
                          "eventName": "PointsRedemption",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-05-20 16:07:09.0",
                          "ledgerCreatedDateISO": "2025-05-20T16:07:09Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "1.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-1.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-05-20 16:07:09.0",
                            "eventDateISO": "2025-05-20T16:07:09Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 628246511,
                          "eventName": "PointsRedemption",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-05-20 16:04:20.0",
                          "ledgerCreatedDateISO": "2025-05-20T16:04:20Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "1.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-1.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-05-20 16:04:20.0",
                            "eventDateISO": "2025-05-20T16:04:20Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 626011220,
                          "eventName": "PointsExpiry",
                          "customerId": 973,
                          "ledgerCreatedDate": "2025-04-28 02:42:16.0",
                          "ledgerCreatedDateISO": "2025-04-28T02:42:16Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "10000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-10000.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "",
                          "storeCode": "",
                          "tillCode": "",
                          "eventDetails": {
                            "eventDate": "2025-04-28 02:42:16.0",
                            "eventDateISO": "2025-04-28T02:42:16Z"
                          },
                          "sourceProgramId": 973,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 623735593,
                          "eventName": "TransactionAdd",
                          "customerId": 565032176,
                          "ledgerCreatedDate": "2025-04-02 06:42:51.0",
                          "ledgerCreatedDateISO": "2025-04-02T06:42:51Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "10000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "10000.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {
                            "transactionId": 884477116,
                            "transactionNumber": "billnum85302",
                            "date": "2025-04-02 17:38:49.0",
                            "dateISO": "2025-04-02T17:38:49Z",
                            "amount": 5000,
                            "grossBillAmount": 110,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-04-02 17:38:49.0",
                            "eventDateISO": "2025-04-02T17:38:49Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        }
                      ],
                      "warnings": []
                    }
                  },
                  "Sample response to Retrieve points ledger entries of Alternate Currencies for a customer": {
                    "summary": "Sample response to Retrieve points ledger entries of Alternate Currencies for a customer",
                    "value": {
                      "customerDetails": {
                        "firstName": "John",
                        "lastName": "Pork",
                        "userId": 566135941,
                        "externalId": "696969",
                        "entityType": "CUSTOMER"
                      },
                      "ledgerDetails": {
                        "pageNumber": 0,
                        "pageSize": 10,
                        "totalEntries": 83,
                        "pageCount": 9
                      },
                      "ledgerEntries": [
                        {
                          "eventLogId": 644117583,
                          "eventName": "TransactionAdd",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-29 09:09:02.0",
                          "ledgerCreatedDateISO": "2025-09-29T09:09:02Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "7000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973,
                              "alternateCurrencyName": "DocCoin"
                            },
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "7000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "7000.000",
                          "netAlternateCurrenciesOnEvent": {
                            "DocCoin": "7000.000"
                          },
                          "transactionDetails": {
                            "transactionId": 891732965,
                            "transactionNumber": "txn-33",
                            "date": "2025-09-28 14:00:00.0",
                            "dateISO": "2025-09-28T14:00:00Z",
                            "amount": 3500,
                            "grossBillAmount": 3500,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "madhu_rima",
                          "eventDetails": {
                            "eventDate": "2025-09-28 14:00:00.0",
                            "eventDateISO": "2025-09-28T14:00:00Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 644117381,
                          "eventName": "TransactionAdd",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-29 09:05:27.0",
                          "ledgerCreatedDateISO": "2025-09-29T09:05:27Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "7000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973,
                              "alternateCurrencyName": "DocCoin"
                            },
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "7000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "7000.000",
                          "netAlternateCurrenciesOnEvent": {
                            "DocCoin": "7000.000"
                          },
                          "transactionDetails": {
                            "transactionId": 891732909,
                            "transactionNumber": "txn-32",
                            "date": "2025-09-28 14:00:00.0",
                            "dateISO": "2025-09-28T14:00:00Z",
                            "amount": 3500,
                            "grossBillAmount": 3500,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "madhu_rima",
                          "eventDetails": {
                            "eventDate": "2025-09-28 14:00:00.0",
                            "eventDateISO": "2025-09-28T14:00:00Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 644117323,
                          "eventName": "TransactionAdd",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-29 09:04:34.0",
                          "ledgerCreatedDateISO": "2025-09-29T09:04:34Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "20000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973,
                              "alternateCurrencyName": "DocCoin"
                            },
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "20000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "20000.000",
                          "netAlternateCurrenciesOnEvent": {
                            "DocCoin": "20000.000"
                          },
                          "transactionDetails": {
                            "transactionId": 891732895,
                            "transactionNumber": "txn-30",
                            "date": "2025-09-28 14:00:00.0",
                            "dateISO": "2025-09-28T14:00:00Z",
                            "amount": 10000,
                            "grossBillAmount": 10000,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "madhu_rima",
                          "eventDetails": {
                            "eventDate": "2025-09-28 14:00:00.0",
                            "eventDateISO": "2025-09-28T14:00:00Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 643492329,
                          "eventName": "GenericEvent",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-25 08:46:34.0",
                          "ledgerCreatedDateISO": "2025-09-25T08:46:34Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "100.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "100.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "naman_doc",
                          "eventDetails": {
                            "promotionName": "Event Based Promo",
                            "promotionDescription": "",
                            "promotionIdentifier": "6c9792f0-0b6e-41d8-96bd-dd99d8af2e1b",
                            "promotionId": 107232,
                            "eventDate": "2025-09-25 08:46:34.0",
                            "eventDateISO": "2025-09-25T08:46:34Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 642680130,
                          "eventName": "TransactionAdd",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-18 05:51:50.0",
                          "ledgerCreatedDateISO": "2025-09-18T05:51:50Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "20000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973,
                              "alternateCurrencyName": "DocCoin"
                            },
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "20000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "20000.000",
                          "netAlternateCurrenciesOnEvent": {
                            "DocCoin": "20000.000"
                          },
                          "transactionDetails": {
                            "transactionId": 891297579,
                            "transactionNumber": "txn-30",
                            "date": "2025-08-28 14:00:00.0",
                            "dateISO": "2025-08-28T14:00:00Z",
                            "amount": 10000,
                            "grossBillAmount": 10000,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "naman_doc",
                          "eventDetails": {
                            "eventDate": "2025-08-28 14:00:00.0",
                            "eventDateISO": "2025-08-28T14:00:00Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 642679934,
                          "eventName": "TransactionAdd",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-18 05:42:48.0",
                          "ledgerCreatedDateISO": "2025-09-18T05:42:48Z",
                          "customerDetails": {
                            "userId": 0
                          },
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "12000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973,
                              "alternateCurrencyName": "DocCoin"
                            },
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "12000.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "12000.000",
                          "netAlternateCurrenciesOnEvent": {
                            "DocCoin": "12000.000"
                          },
                          "transactionDetails": {
                            "transactionId": 891297556,
                            "transactionNumber": "test085",
                            "date": "2025-04-10 07:00:00.0",
                            "dateISO": "2025-04-10T07:00:00Z",
                            "amount": 6000,
                            "grossBillAmount": 8000,
                            "source": "instore"
                          },
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "tj_capillary",
                          "eventDetails": {
                            "eventDate": "2025-04-10 07:00:00.0",
                            "eventDateISO": "2025-04-10T07:00:00Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 642307437,
                          "eventName": "PointsRedemption",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-15 06:59:16.0",
                          "ledgerCreatedDateISO": "2025-09-15T06:59:16Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "1.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-1.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "divya_doc",
                          "eventDetails": {
                            "eventDate": "2025-09-15 06:59:15.0",
                            "eventDateISO": "2025-09-15T06:59:15Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 642307313,
                          "eventName": "PointsRedemption",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-15 06:55:40.0",
                          "ledgerCreatedDateISO": "2025-09-15T06:55:40Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "1.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-1.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-09-15 06:55:40.0",
                            "eventDateISO": "2025-09-15T06:55:40Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 641643473,
                          "eventName": "PointsRedemption",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-09 11:18:34.0",
                          "ledgerCreatedDateISO": "2025-09-09T11:18:34Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "1.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-1.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "naman_doc",
                          "eventDetails": {
                            "eventDate": "2025-09-09 11:18:33.0",
                            "eventDateISO": "2025-09-09T11:18:33Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 641643377,
                          "eventName": "PointsRedemption",
                          "customerId": 566135941,
                          "ledgerCreatedDate": "2025-09-09 11:16:19.0",
                          "ledgerCreatedDateISO": "2025-09-09T11:16:19Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "1.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-1.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "naman_doc",
                          "eventDetails": {
                            "eventDate": "2025-09-09 11:16:18.0",
                            "eventDateISO": "2025-09-09T11:16:18Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": null,
                          "orgId": 100737
                        }
                      ],
                      "warnings": []
                    }
                  },
                  "Sample example to Retrieve points ledger entries of a user group": {
                    "summary": "Sample example to Retrieve points ledger entries of a user group",
                    "value": {
                      "ledgerDetails": {
                        "pageNumber": 0,
                        "pageSize": 10,
                        "totalEntries": 5,
                        "pageCount": 1
                      },
                      "ledgerEntries": [
                        {
                          "eventLogId": 623972643,
                          "eventName": "PointsExpiry",
                          "customerId": 973,
                          "ledgerCreatedDate": "2025-04-05 02:42:18.0",
                          "ledgerCreatedDateISO": "2025-04-05T02:42:18Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "20.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-20.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "",
                          "storeCode": "",
                          "tillCode": "",
                          "eventDetails": {
                            "eventDate": "2025-04-05 02:42:19.0",
                            "eventDateISO": "2025-04-05T02:42:19Z"
                          },
                          "sourceProgramId": 973,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 623659380,
                          "eventName": "PointsExpiry",
                          "customerId": 973,
                          "ledgerCreatedDate": "2025-04-01 02:53:58.0",
                          "ledgerCreatedDateISO": "2025-04-01T02:53:58Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "DEBIT",
                              "points": "20.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "-20.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "",
                          "storeCode": "",
                          "tillCode": "",
                          "eventDetails": {
                            "eventDate": "2025-04-01 02:53:59.0",
                            "eventDateISO": "2025-04-01T02:53:59Z"
                          },
                          "sourceProgramId": 973,
                          "sourceProgramName": "DocDemoDefaultProgram",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 620655452,
                          "eventName": "PointsTransfer",
                          "customerId": -3835641,
                          "ledgerCreatedDate": "2025-03-10 05:45:19.0",
                          "ledgerCreatedDateISO": "2025-03-10T05:45:19Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "20.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "20.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-03-10 05:45:19.0",
                            "eventDateISO": "2025-03-10T05:45:19Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocTransferPoints",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 620245980,
                          "eventName": "PointsTransfer",
                          "customerId": -3835641,
                          "ledgerCreatedDate": "2025-03-06 05:52:18.0",
                          "ledgerCreatedDateISO": "2025-03-06T05:52:18Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "CREDIT",
                              "points": "20.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "20.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-03-06 05:52:18.0",
                            "eventDateISO": "2025-03-06T05:52:18Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocTransferPoints",
                          "orgId": 100737
                        },
                        {
                          "eventLogId": 618615192,
                          "eventName": "UserGroup2Create",
                          "customerId": -3832765,
                          "ledgerCreatedDate": "2025-02-18 06:28:02.0",
                          "ledgerCreatedDateISO": "2025-02-18T06:28:02Z",
                          "customerDetails": null,
                          "entryDetails": [
                            {
                              "ledgerEntryType": "OPENING_BALANCE",
                              "points": "0.000",
                              "pointsCategory": "DelayedAccrualPointCategory",
                              "programName": "DocTransferPoints",
                              "programId": 983
                            },
                            {
                              "ledgerEntryType": "OPENING_BALANCE",
                              "points": "0.000",
                              "pointsCategory": "ExternalTriggerBasedPointCategory",
                              "programName": "DocTransferPoints",
                              "programId": 983
                            },
                            {
                              "ledgerEntryType": "OPENING_BALANCE",
                              "points": "0.000",
                              "pointsCategory": "Main",
                              "programName": "DocTransferPoints",
                              "programId": 983
                            },
                            {
                              "ledgerEntryType": "OPENING_BALANCE",
                              "points": "0.000",
                              "pointsCategory": "DelayedAccrualPointCategory",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            },
                            {
                              "ledgerEntryType": "OPENING_BALANCE",
                              "points": "0.000",
                              "pointsCategory": "ExternalTriggerBasedPointCategory",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            },
                            {
                              "ledgerEntryType": "OPENING_BALANCE",
                              "points": "0.000",
                              "pointsCategory": "Main",
                              "programName": "DocDemoDefaultProgram",
                              "programId": 973
                            }
                          ],
                          "netPointsOnEvent": "0.000",
                          "netAlternateCurrenciesOnEvent": {},
                          "transactionDetails": {},
                          "store": "DocStore",
                          "storeCode": "doc123",
                          "tillCode": "sant.p_123",
                          "eventDetails": {
                            "eventDate": "2025-02-18 06:28:02.0",
                            "eventDateISO": "2025-02-18T06:28:02Z"
                          },
                          "sourceProgramId": 983,
                          "sourceProgramName": "DocTransferPoints",
                          "orgId": 100737
                        }
                      ],
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "ledgerDetails": {
                      "type": "object",
                      "properties": {
                        "pageNumber": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "pageSize": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "totalEntries": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "pageCount": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        }
                      }
                    },
                    "ledgerEntries": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "eventLogId": {
                            "type": "integer",
                            "example": 508308379,
                            "default": 0
                          },
                          "eventName": {
                            "type": "string",
                            "example": "AllocateGoodwillPoints"
                          },
                          "customerId": {
                            "type": "integer",
                            "example": -2860,
                            "default": 0
                          },
                          "ledgerCreatedDate": {
                            "type": "string",
                            "example": "2023-06-21 13:34:16.0"
                          },
                          "customerDetails": {},
                          "entryDetails": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "ledgerEntryType": {
                                  "type": "string",
                                  "example": "CREDIT"
                                },
                                "points": {
                                  "type": "string",
                                  "example": "350.000"
                                },
                                "pointsCategory": {
                                  "type": "string",
                                  "example": "Main"
                                },
                                "programName": {
                                  "type": "string",
                                  "example": "Default Program"
                                },
                                "programId": {
                                  "type": "integer",
                                  "example": 469,
                                  "default": 0
                                }
                              }
                            }
                          },
                          "netPointsOnEvent": {
                            "type": "string",
                            "example": "350.000"
                          },
                          "transactionDetails": {
                            "type": "object",
                            "properties": {}
                          },
                          "store": {
                            "type": "string",
                            "example": "test"
                          },
                          "storeCode": {
                            "type": "string",
                            "example": "teststore"
                          },
                          "tillCode": {
                            "type": "string",
                            "example": "neestoretillssnee23"
                          },
                          "eventDetails": {
                            "type": "object",
                            "properties": {
                              "reason": {
                                "type": "string",
                                "example": "POINTS_ISSUE"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerInfo?identifierName=mobile&source=INSTORE&limit=5&offset=0&programId=973&order=ASC&identifierValue=918088369835&type=CUSTOMER' \\\n--header 'Authorization: Basic bWFkaHVfMjU2YQ==' \\\n--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=j0LtZcsVpoWH3QOLk14zBlfM2j0._KtqFl1cvEnFD7w-1759917775406-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample example to Retrieve points ledger entries of a customer "
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerInfo?identifierName=mobile&source=INSTORE&programId=973&includeAlternateCurrencies=true&alternateCurrencyNames=DocCoin&identifierValue=918088369835&type=CUSTOMER' \\\n--header 'Authorization: Basic c2FudCpiMFlNw==' \\\n--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=TZ97HRhOQIgIgy39aYzTDnPygcLRg2I7AYQtSnBu5SY-1759918250623-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample example to Retrieve points ledger entries of Alternate Currencies for a customer"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerInfo?type=USERGROUP2&identifierName=id&identifierValue=3832765&source=INSTORE&offset=0&limit=10&order=DESC' \\\n--header 'Authorization: Basic c2FudC5wlNw==' \\\n--header 'Cookie: _cfuvid=PsFx0ALxLdrB1NEgHeuRoT3TmBSmBySaXbb3ptIqvJY-1732095262794-0.0.1.1-604800000; _cfuvid=cvtmjKgSJdN_FgEvHvbQwcw5Qn6PNUMH1ozuWBT6.hY-1759918054003-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample example to Retrieve points ledger entries of a user group"
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