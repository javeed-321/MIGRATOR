> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Lookup Customer Transactions

Retrieve a list of transactions for a specific customer based on identifiers and filters.

This API retrieves a list of customer transactions based on a specified customer identifier and filters.

**Note:** All monetary fields in transaction line items (such as amount, rate, value, and discount) are rounded based on the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration. If this configuration is set to a value greater than or equal to 0, these fields are rounded down to the specified number of decimal places. For example, a value of 38.98 may be rounded to 38.97. To ensure correct storage and retrieval of decimal values, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to one more than the value of CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY (for example, if CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY is n, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to n+1).

# Example request

```curl Sample request with ATTRIBUTION, BILL_STORE_DETAILS, BILL_POINTS,TRANSACTION_IDENTIFIER
curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/transactions?identifierName=mobile&identifierValue=918088369835&source=INSTORE&transactionType=REGULAR&startDate=2025-01-01&endDate=2025-12-31&localCurrency=false&transactionId=894749264&number=txn-118&startId=1000&endId=2000&entityType=STORE&entityCode=STORE_001&sortOrder=DESC&limit=20&offset=0&embed=BILL_CF%2CBILL_EF%2CATTRIBUTION%2CPAYMENT_MODES%2CCREDIT_NOTES%2CBILL_STORE_DETAILS%2CBILL_POINTS%2CTRANSACTION_IDENTIFIER' \
--header 'Authorization: Basic bWFkaHMjU2YQ==' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=iOrJ_zuHNucnWYJlrloDHCuLzbcD.yzBleSJLaFGd6s-1769592321072-0.0.1.1-604800000'
```
```curl Sample request with BILL_CFF, BILL_EF
curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/transactions?identifierName=mobile&identifierValue=918088369835&source=INSTORE&transactionType=REGULAR&sortOrder=DESC&limit=1&offset=0&embed=BILL_CF%2CBILL_EF%2CATTRIBUTION%2CPAYMENT_MODES%2CCREDIT_NOTES%2CBILL_STORE_DETAILS%2CBILL_POINTS%2CTRANSACTION_IDENTIFIER' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json'
```

# Prerequisite

* **Authentication details**: Basic or OAuth authentication details.\
  For more information on authentication, see the [Authentication documentation](https://docs.capillarytech.com/docs/api-client).
* **Authorisation/access group details**: Write access to customer group resource. For more information on access control, see the [access group documentation](https://docs.capillarytech.com/docs/access-group).
* The customer should be registered and have at least made one transaction.

# Resource information

|                       |                                   |
| :-------------------- | :-------------------------------- |
| URI                   | /v2/customers/lookup/transactions |
| Pagination supported? | Yes                               |
| Batch support         | No                                |

# Query parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **identifierName**
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Unique registered identifier of the customer.
        Supported Values: `mobile`, `email`, `externalId`, `id`, `wechat`, `cardnumber`, `cardExternalId`
      </td>
    </tr>

    <tr>
      <td>
        **identifierValue**
      </td>

      <td>
        string
      </td>

      <td>
        Yes
      </td>

      <td>
        Value of the identifier.  
        For example, if `identifierName` is mobile, `identifierValue` is mobile number.
      </td>
    </tr>

    <tr>
      <td>
        **source**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Pass the source from which the transaction is made.  
        Supported Values: `INSTORE`, `WECHAT`, `MARTJACK` (AnywhereCommerce), `WEB_ENGAGE`, `ECOMMERCE`, `JD`, `TAOBAO`, `TMALL` , `FACEBOOK` , `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        **transactionType**
      </td>

      <td>
        enum
      </td>

      <td>
        optional
      </td>

      <td>
        Specifies which transaction types are included in the response.

        Supported values:  
        `REGULAR` – Includes only standard sales transactions

        `RETURN` – Includes only return or refund transactions

        `ALL` – Includes both sales and return transactions

        `Default`: ALL (applied when the parameter is not provided)
      </td>
    </tr>

    <tr>
      <td>
        **startDate**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Transaction start date in the format YYYY-MM-DD .  
        For example: 2025-01-01
      </td>
    </tr>

    <tr>
      <td>
        **endDate**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Transaction end date in the format YYYY-MM-DD .  
        For example: 2025-01-01
      </td>
    </tr>

    <tr>
      <td>
        **localCurrency**
      </td>

      <td>
        boolean
      </td>

      <td>
        optional
      </td>

      <td>
        If set to true, retrieves the amount, gross amount and discount in the transaction currency (the currency using which the transaction was made) as well. Not applicable for payment modes and credit notes.

        Default value: `False`  
        Supported Values: `True` and `False`.
      </td>
    </tr>

    <tr>
      <td>
        **transactionId**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Unique transaction ID used to retrieve transaction details. This ID is generated when the [transaction is created](https://docs.capillarytech.com/reference/add-transaction-single).  You can also [retrieve it from Member Care UI](https://docs.capillarytech.com/docs/view-event_details#transactions).
        To retrieve details for multiple transactions, provide a comma-separated list of transaction IDs.
      </td>
    </tr>

    <tr>
      <td>
        **number**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Unique bill number used to retrieve transaction details. You can get the bill number from the [Add Transaction API](https://docs.capillarytech.com/reference/add-transaction-single) or [from the Member Care UI](https://docs.capillarytech.com/docs/view-event_details#transactions).
      </td>
    </tr>

    <tr>
      <td>
        **startId**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Unique transaction ID from which the system starts retrieving transaction details. Transactions with an ID greater than or equal to this value are included in the results.
        **Example**: If `startId` is 5000, the system retrieves transactions with an ID greater than or equal to 5000
      </td>
    </tr>

    <tr>
      <td>
        **endId**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Unique transaction ID up to which the system retrieves transaction details. Transactions with an ID less than or equal to this value are included in the results.

        **Example**:  If `endId` is 8000, the system retrieves transactions with an ID less than or equal to 8000
      </td>
    </tr>

    <tr>
      <td>
        **entityType**
      </td>

      <td>
        enum
      </td>

      <td>
        optional
      </td>

      <td>
        Specifies the level of the store hierarchy to apply the filter.  
        Supported values:  
        <Anchor label="STORE" target="_blank" href="https://docs.capillarytech.com/docs/store-hierarchy#create-store">STORE</Anchor>, <Anchor label="ZONE" target="_blank" href="https://docs.capillarytech.com/docs/store-hierarchy#create-zone">ZONE</Anchor>, <Anchor label="CONCEPT" target="_blank" href="https://docs.capillarytech.com/docs/store-hierarchy#create-concept">CONCEPT</Anchor> and <Anchor label="TILL" target="_blank" href="https://docs.capillarytech.com/docs/store-hierarchy#add-till">TILL</Anchor>.  
        **Note**: Values are case-sensitive.
      </td>
    </tr>

    <tr>
      <td>
        **entityCode**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Specifies the unique identifier of the entity selected in `entityType`.

        **Example**:  
        When `entityType=STORE`, `entityCode` is the store code (for example, STORE_001)

        When `entityType=ZONE`, `entityCode` is the zone code (for example, NORTH_ZONE)

        When `entityType=TILL`, `entityCode` is the till or cash register code (for example, TILL_05)
      </td>
    </tr>

    <tr>
      <td>
        **sortOrder**
      </td>

      <td>
        enum
      </td>

      <td>
        optional
      </td>

      <td>
        Order in which records are sorted.  `ASC` and `DESC` are supported values.
        Default order is `DESC`.
      </td>
    </tr>

    <tr>
      <td>
        **limit**
      </td>

      <td>
        integer
      </td>

      <td>
        optional
      </td>

      <td>
        Number of transaction records to display per page.
        Default limit is 20.
      </td>
    </tr>

    <tr>
      <td>
        **offset**
      </td>

      <td>
        integer
      </td>

      <td>
        optional
      </td>

      <td>
        Page number to retrieve. To view the first page, set the value to 0.
      </td>
    </tr>

    <tr>
      <td>
        **embed**
      </td>

      <td>
        string
      </td>

      <td>
        optional
      </td>

      <td>
        Specifies the details to include in the response. Supported values:

        * TRANSACTION_IDENTIFIER: Includes transaction details to the response.
        * BILL_CF: Includes custom fields associated with the transaction.
        * BILL_EF: Includes extended fields of the transaction.
        * ATTRIBUTION: Includes additional details regarding the transaction.
        * PAYMENT_MODES: Includes modes of payment for the transaction.
        * CREDIT_NOTES: Includes notes or references related to credits of the transaction.
        * BILL_STORE_DETAILS: Includes details of the store or outlet associated with the transaction.
        * BILL_POINTS: Includes information associated with the promised points, regular points, promotional points, and alternate currencies.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json Sample response with ATTRIBUTION, BILL_STORE_DETAILS, BILL_POINTS,TRANSACTION_IDENTIFIER
{
  "pagination": {
    "limit": 20,
    "offset": 0,
    "sortBy": "BILLING_TIME",
    "sortOrder": "DESC",
    "total": 1
  },
  "data": [
    {
      "id": 894749251,
      "customerId": 566135941,
      "loyaltyLogId": 894749251,
      "billingTime": "2025-12-08T10:35:00Z",
      "billNumber": "txn-118",
      "type": "REGULAR",
      "notes": "",
      "amount": 5000,
      "grossAmount": 5000,
      "discount": 0,
      "outlierStatus": "NORMAL",
      "billingStore": {
        "id": 75152715,
        "code": "doc123",
        "description": "",
        "name": "DocStore",
        "type": "STORE",
        "referenceId": -1,
        "adminType": "GENERAL",
        "isActive": true,
        "isOuEnabled": false,
        "timeZoneId": 191,
        "currencyId": 95,
        "languageId": 148,
        "default": false
      },
      "billPoints": {
        "pointsBreakup": [
          {
            "programName": "DocDemoDefaultProgram",
            "programId": 973,
            "regularPoints": [
              {
                "points": 10000,
                "pointsAwardedType": "POINT_AWARDED"
              }
            ],
            "promisePoints": [],
            "promoPoints": []
          }
        ],
        "aggregatedBillPoints": [
          {
            "programName": "DocDemoDefaultProgram",
            "programId": 973,
            "regularPoints": {
              "points": 10000
            },
            "promisePoints": {
              "points": 0
            },
            "promoPoints": {
              "points": 0
            }
          }
        ],
        "alternateCurrenciesBreakup": [],
        "aggregatedBillAlternateCurrencies": []
      },
      "attribution": {
        "createDate": "2025-12-08T10:35:00Z",
        "createdBy": {
          "id": 75152721,
          "code": "naman_doc",
          "description": "",
          "name": "naman",
          "type": "TILL",
          "referenceId": -1,
          "adminType": "GENERAL",
          "isActive": true,
          "isOuEnabled": false,
          "timeZoneId": 191,
          "currencyId": 95,
          "languageId": 148,
          "default": false
        },
        "modifiedBy": {
          "referenceId": -1,
          "default": false
        },
        "modifiedDate": "2025-12-10T06:11:36Z"
      },
      "txnIdentifiers": [
        {
          "type": "id",
          "value": "566135941"
        }
      ]
    }
  ],
  "warnings": [],
  "errors": []
}
```
```json Sample response with BILL_CFF, BILL_EF
{
  "pagination": {
    "limit": 1,
    "offset": 0,
    "sortBy": "BILLING_TIME",
    "sortOrder": "DESC",
    "total": 66
  },
  "data": [
    {
      "id": 896977973,
      "customerId": 566135941,
      "loyaltyLogId": 896977973,
      "billingTime": "2026-01-27T09:00:00Z",
      "billingTimeInputOffset": "+05:30",
      "billNumber": "test00transact12399",
      "type": "REGULAR",
      "notes": "Regular Tranasction number 122",
      "amount": 2000,
      "grossAmount": 2000,
      "discount": 0,
      "outlierStatus": "NORMAL",
      "billingStore": {
        "id": 75152715,
        "code": "doc123",
        "description": "",
        "name": "DocStore",
        "type": "STORE",
        "referenceId": -1,
        "adminType": "GENERAL",
        "isActive": true,
        "isOuEnabled": false,
        "timeZoneId": 191,
        "currencyId": 95,
        "languageId": 148,
        "default": false
      },
      "customFields": {
        "booking_date": "2025-07-30",
        "origin": "instore",
        "paymentmode": "card"
      },
      "extendedFields": {
        "event_input_date_offset": "+05:30"
      },
      "billPoints": {
        "pointsBreakup": [],
        "aggregatedBillPoints": [],
        "alternateCurrenciesBreakup": [],
        "aggregatedBillAlternateCurrencies": []
      },
      "attribution": {
        "createDate": "2026-01-27T09:00:00Z",
        "createdBy": {
          "id": 75155297,
          "code": "tj_capillary",
          "description": "",
          "name": "tj_capillary",
          "type": "TILL",
          "referenceId": -1,
          "adminType": "GENERAL",
          "isActive": true,
          "isOuEnabled": false,
          "timeZoneId": 191,
          "currencyId": 95,
          "languageId": 148,
          "default": false
        },
        "modifiedBy": {
          "referenceId": -1,
          "default": false
        },
        "modifiedDate": "2026-01-28T12:19:46Z"
      },
      "txnIdentifiers": [
        {
          "type": "mobile",
          "value": "918088369835"
        }
      ]
    }
  ],
  "warnings": [],
  "errors": []
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
        .**pagination**
      </td>

      <td>
        Object
      </td>

      <td>
        Contains pagination details for the transaction list.
      </td>
    </tr>

    <tr>
      <td>
        ..**limit**
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates maximum number of records returned per request.
      </td>
    </tr>

    <tr>
      <td>
        ..**offset**
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates the position from which records start and is used for pagination.
      </td>
    </tr>

    <tr>
      <td>
        ..**sortBy**
      </td>

      <td>
        String
      </td>

      <td>
        Field name used to sort transactions.  
        Possible value: `BILLING_TIME`.
      </td>
    </tr>

    <tr>
      <td>
        ..**sortOrder**
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the order in which records are sorted.  
        Possible values: `ASC` (ascending) or `DESC` (descending).
      </td>
    </tr>

    <tr>
      <td>
        ..**total**
      </td>

      <td>
        Integer
      </td>

      <td>
        Total number of transactions matching the query filters.
      </td>
    </tr>

    <tr>
      <td>
        .**data**
      </td>

      <td>
        Array
      </td>

      <td>
        Array of objects containing the list of transactions.
      </td>
    </tr>

    <tr>
      <td>
        ..**id**
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        **customerId**
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the customer associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        ..**loyaltyLogId**
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the transaction record in the loyalty log entry.
      </td>
    </tr>

    <tr>
      <td>
        ..**billingTime**
      </td>

      <td>
        String
      </td>

      <td>
        Bill creation date and time in ISO 8601 format, returned in the server time zone.  **EU server example:** `2025-12-16T14:30:45Z` → 16 December 2025, 14:30:45 (UTC) **India server example:** `2025-12-16T14:30:45+05:30` → 16 December 2025, 14:30:45 (IST) **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        **billingTimeInputOffset**
      </td>

      <td>
        integer
      </td>

      <td>
        Specifies the time difference, in minutes, between the billing time provided in the request and UTC. This indicates the timezone offset that was applied when the original billing time was recorded.
      </td>
    </tr>

    <tr>
      <td>
        ..**billNumber**
      </td>

      <td>
        String
      </td>

      <td>
        Bill or invoice number linked to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        ..**type**
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates the type of Transaction.

        Possible values:

        i. `REGULAR`:  A normal purchase transaction with no return.

        ii. `NOT_INTERESTED`:  A bill where the customer made a purchase transaction but explicitly chose not to enroll/participate in loyalty program.

        iii. `RETURN`:  A return/cancellation transaction where items from a previous bill are being returned.

        iv.`NOT_INTERESTED_RETURN`: A bill where the customer returned items from a purchase that was not on the loyalty program.

        v. `MIXED`:   A bill that has both new purchases and returns on the same receipt.

        vi. `NI_MIXED`:  A bill with both purchases and returns where the customer is not using the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        ..**notes**
      </td>

      <td>
        String
      </td>

      <td>
        Note added when creating a transaction.
      </td>
    </tr>

    <tr>
      <td>
        ..**amount**
      </td>

      <td>
        Decimal
      </td>

      <td>
        Final payable amount after discount in base currency.
      </td>
    </tr>

    <tr>
      <td>
        ..**grossAmount**
      </td>

      <td>
        Decimal
      </td>

      <td>
        Total transaction value before discount in base currency.
      </td>
    </tr>

    <tr>
      <td>
        ..**discount**
      </td>

      <td>
        Decimal
      </td>

      <td>
        Total discount applied to the transaction in base currency.
      </td>
    </tr>

    <tr>
      <td>
        ..**outlierStatus**
      </td>

      <td>
        Enum
      </td>

      <td>
        Indicates if the transaction is flagged as an outlier.

        Possible Values: `INTERNAL`, `NORMAL`, `INVALID`, `OUTLIER`, `FAILED`, `DELETED`, `RETRO`, `FRAUD`, `TEST`.
      </td>
    </tr>

    <tr>
      <td>
        ..**billingStore**
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing details about the billing store.
      </td>
    </tr>

    <tr>
      <td>
        ...**id**
      </td>

      <td>
        Integer
      </td>

      <td>
        The store ID.
      </td>
    </tr>

    <tr>
      <td>
        ...**code**
      </td>

      <td>
        String
      </td>

      <td>
        The store code.
      </td>
    </tr>

    <tr>
      <td>
        ...**description**
      </td>

      <td>
        String
      </td>

      <td>
        The store description.
      </td>
    </tr>

    <tr>
      <td>
        ...**name**
      </td>

      <td>
        String
      </td>

      <td>
        The store name.
      </td>
    </tr>

    <tr>
      <td>
        ...**referenceId**
      </td>

      <td>
        Integer
      </td>

      <td>
        The unique ID from an external system which is used for linking the billing store in loyalty to its corresponding to an external record (for example, the POS/ERP/store master). A positive value indicates a valid external link, while -1 (or null) means no external reference is configured.
      </td>
    </tr>

    <tr>
      <td>
        ...**adminType**
      </td>

      <td>
        String
      </td>

      <td>
        The store admin type.  
        Possible values: `ADMIN`, `GENERAL`.
      </td>
    </tr>

    <tr>
      <td>
        ...**isActive**
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the store is active.
      </td>
    </tr>

    <tr>
      <td>
        ...**isOuEnabled**
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if <Anchor label="Organization Unit" target="_blank" href="https://docs.capillarytech.com/docs/organisation-units-ou">Organization Unit</Anchor> (OU) is enabled for the store.
      </td>
    </tr>

    <tr>
      <td>
        ...**timeZoneId**
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the time zone used for that store (for example, which local time zone the store operates in). It’s used so bill times can be shown/processed in the store’s local time
      </td>
    </tr>

    <tr>
      <td>
        ...**currencyId**
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the currency used by that store. For example, which currency the store’s prices and bills are in.
      </td>
    </tr>

    <tr>
      <td>
        ...**languageId**
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the language configured for that store. For example, which language is used for store‑specific labels, messages, or content.
      </td>
    </tr>

    <tr>
      <td>
        ...**default**
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the store is configured as the default billing store.  

        Possible values:
        `true` – The store is set as the default billing store for the organization or context.
        `false` – The store is not the default billing store.
      </td>
    </tr>

    <tr>
      <td>
        ..**<Anchor label="customFields" target="_blank" href="https://docs.capillarytech.com/docs/entity-management-custom-fields">customFields</Anchor>**
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing list of custom fields for transaction.
      </td>
    </tr>

    <tr>
      <td>
        ..**<Anchor label="extendedFields" target="_blank" href="https://docs.capillarytech.com/docs/extended-fields">extendedFields</Anchor>**
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing list of extended fields for transaction.
      </td>
    </tr>

    <tr>
      <td>
        ..**billPoints**
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details about loyalty points earned from the bill.
      </td>
    </tr>

    <tr>
      <td>
        ...**pointsBreakup**
      </td>

      <td>
        Array
      </td>

      <td>
        Breakdown of points earned. Includes info on promised points, promotional points, regular points, and points awarded type with the associated program type and program ID.
      </td>
    </tr>

    <tr>
      <td>
        ....**programName**
      </td>

      <td>
        String
      </td>

      <td>
        The name of the program
      </td>
    </tr>

    <tr>
      <td>
        ....**programId**
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique Id of the program
      </td>
    </tr>

    <tr>
      <td>
        ....**regularPoints**
      </td>

      <td>
        Array
      </td>

      <td>
        Redeemable loyalty points earned for the transaction, excluding promotional or bonus points.
      </td>
    </tr>

    <tr>
      <td>
        .....**points**
      </td>

      <td>
        Decimal
      </td>

      <td>
        Total points issued for a transaction.
      </td>
    </tr>

    <tr>
      <td>
        .....**<Anchor label="pointsAwardedType" target="_blank" href="https://docs.capillarytech.com/docs/dimension-tables#points-awarded-type">pointsAwardedType</Anchor>**
      </td>

      <td>
        String
      </td>

      <td>
        The types of points that are awarded.

        Possible values:  `Point_Awarded`, `Point_Awarded_Bill_Promotion`,  `Point_Awarded_Lineitem`,  
        `Point_Awarded_Customer_Promotion`
      </td>
    </tr>

    <tr>
      <td>
        ....**promisePoints**
      </td>

      <td>
        Array
      </td>

      <td>
        Points that are not yet active and will convert to regular points after a delay. If the transaction is returned within that window, these promised points are reverted and never become current points.
      </td>
    </tr>

    <tr>
      <td>
        ....**promoPoints**
      </td>

      <td>
        Array
      </td>

      <td>
        Bonus loyalty points awarded through promotions at the bill, line-item, or customer level, in addition to regular points. The source of these points is a promotion rather than the base earn rule.
      </td>
    </tr>

    <tr>
      <td>
        ...**aggregatedBillPoints**
      </td>

      <td>
        Array
      </td>

      <td>
        Includes info on promised points, promotional points, and regular points with the associated program type and program ID.
      </td>
    </tr>

    <tr>
      <td>
        ...**alternateCurrenciesBreakup**
      </td>

      <td>
        Array
      </td>

      <td>
        Breakdown of alternate currencies earned with the related information. This is available when alternate currency is enabled for the org and awarded.
      </td>
    </tr>

    <tr>
      <td>
        ...**aggregatedBillAlternateCurrencies**
      </td>

      <td>
        array
      </td>

      <td>
        Breakdown of alternate currencies earned with the related information. This is available when alternate currency is enabled for the org and awarded.
      </td>
    </tr>

    <tr>
      <td>
        ..**attribution**
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing attribution details.
      </td>
    </tr>

    <tr>
      <td>
        ...**createDate**
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the creation date and time of the transaction in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ...**createdBy**
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing details about the creator.
      </td>
    </tr>

    <tr>
      <td>
        ....**id**
      </td>

      <td>
        Integer
      </td>

      <td>
        The creator's ID.
      </td>
    </tr>

    <tr>
      <td>
        ....**code**
      </td>

      <td>
        String
      </td>

      <td>
        The creator's code. It is also the till id.
      </td>
    </tr>

    <tr>
      <td>
        ....**description**
      </td>

      <td>
        String
      </td>

      <td>
        The creator's description.
      </td>
    </tr>

    <tr>
      <td>
        ....**name**
      </td>

      <td>
        string
      </td>

      <td>
        The creator's name.
      </td>
    </tr>

    <tr>
      <td>
        ....**type**
      </td>

      <td>
        string
      </td>

      <td>
        The type of entity that created or updated the transaction.

        Possible values: `ZONE`, `CONCEPT`, `STORE`, `TILL`, `STR_SERVER`, `ADMIN_USER`, `ASSOCIATE`, `RULE` and `OU`.
      </td>
    </tr>

    <tr>
      <td>
        ....**referenceId**
      </td>

      <td>
        Integer
      </td>

      <td>
        Internal reference ID of the creator entity. Used by backend systems to link this 'created by' entity to its source record.
      </td>
    </tr>

    <tr>
      <td>
        ....**adminType**
      </td>

      <td>
        String
      </td>

      <td>
        The level of access that the creating or updating entity has.

        Possible values: `ADMIN` and `GENERAL`.
      </td>
    </tr>

    <tr>
      <td>
        ....**isActive**
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the creator is active.
      </td>
    </tr>

    <tr>
      <td>
        ....**isOuEnabled**
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates if <Anchor label="Organization Unit" target="_blank" href="https://docs.capillarytech.com/docs/organisation-units-ou">Organization Unit</Anchor> (OU) is enabled for the creator.
      </td>
    </tr>

    <tr>
      <td>
        ....**timeZoneId**
      </td>

      <td>
        Integer
      </td>

      <td>
        The time zone ID for the creator.
      </td>
    </tr>

    <tr>
      <td>
        ....**currencyId**
      </td>

      <td>
        Integer
      </td>

      <td>
        The currency ID used by the creator.
      </td>
    </tr>

    <tr>
      <td>
        ....**languageId**
      </td>

      <td>
        Integer
      </td>

      <td>
        The language ID used by the creator.
      </td>
    </tr>

    <tr>
      <td>
        ....**default**
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether this creator entity is the **default** one for its context. If `true`, this is the default user/store/till to attribute actions to when no more specific creator is available.
      </td>
    </tr>

    <tr>
      <td>
        ...**modifiedBy**
      </td>

      <td>
        Object
      </td>

      <td>
        Details on the modifications made.
      </td>
    </tr>

    <tr>
      <td>
        ...**modifiedDate**
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the creation date and time of the transaction in ISO 8601 format, returned in the server time zone.

        **EU server example**  
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note**: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ..**txnIdentifiers**
      </td>

      <td>
        Array
      </td>

      <td>
        Array containing the customer identifier details used when the transaction was created.
      </td>
    </tr>

    <tr>
      <td>
        ...**type**
      </td>

      <td>
        String
      </td>

      <td>
        Type of identifier used for transaction.
      </td>
    </tr>

    <tr>
      <td>
        ...**value**
      </td>

      <td>
        String
      </td>

      <td>
        Value of the identifier.
      </td>
    </tr>

    <tr>
      <td>
        .**warnings**
      </td>

      <td>
        Array
      </td>

      <td>
        Array containing any warnings encountered during processing.
      </td>
    </tr>

    <tr>
      <td>
        .**errors**
      </td>

      <td>
        Array
      </td>

      <td>
        Array containing any errors encountered during processing.
      </td>
    </tr>
  </tbody>
</Table>

# Error codes

| Error codes | Description                                                        |
| :---------- | :----------------------------------------------------------------- |
| 8003        | Source information is missing.                                     |
| 8130        | Identifiername and value is missing.                               |
| 816         | Customer not found for organization                                |
| 1011        | Cannot find customer for provided identifier                       |
| 1012        | Cannot find customer with the provided mobile/external ID/email ID |
| 1013        | Customer is not registered for the loyalty program                 |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Lookup Customer Transactions",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "{Host}",
      "variables": {
        "Host": {
          "default": "https://eu.intouch.capillarytech.com",
          "enum": [
            "https://eu.intouch.capillarytech.com",
            "https://intouch.capillary.co.in",
            "https://apac2.intouch.capillarytech.com",
            "https://sgcrm.cc.capillarytech.com",
            "http://intouch.capillarytech.cn.com",
            "https://north-america.intouch.capillarytech.com"
          ]
        }
      }
    }
  ],
  "paths": {
    "/v2/customers/lookup/transactions": {
      "get": {
        "summary": "Lookup Customer Transactions",
        "description": "Retrieve a list of transactions for a specific customer based on identifiers and filters.",
        "parameters": [
          {
            "name": "identifierName",
            "in": "query",
            "description": "The name of the identifier (e.g., mobile, email).",
            "required": true,
            "schema": {
              "type": "string",
              "example": "mobile"
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "The value of the identifier.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "918088369835"
            }
          },
          {
            "name": "source",
            "in": "query",
            "description": "The source of the transaction.",
            "schema": {
              "type": "string",
              "example": "INSTORE"
            },
            "required": true
          },
          {
            "name": "transactionType",
            "in": "query",
            "description": "The type of transaction.",
            "schema": {
              "type": "string",
              "example": "REGULAR"
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "Transaction start date in the format YYYY-MM-DD HH:MM:SS.",
            "schema": {
              "type": "string",
              "format": "date",
              "example": "2025-01-01"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "Transaction end date in the format YYYY-MM-DD HH:MM:SS.",
            "schema": {
              "type": "string",
              "format": "date",
              "example": "2025-12-31"
            }
          },
          {
            "name": "localCurrency",
            "in": "query",
            "description": "Whether to return values in local currency.",
            "schema": {
              "type": "boolean",
              "example": false
            }
          },
          {
            "name": "transactionId",
            "in": "query",
            "description": "Unique transaction ID used to retrieve transaction details. ",
            "schema": {
              "type": "integer",
              "example": 894749264
            }
          },
          {
            "name": "number",
            "in": "query",
            "description": "Filter by transaction number.",
            "schema": {
              "type": "string",
              "example": "txn-118"
            }
          },
          {
            "name": "startId",
            "in": "query",
            "description": "A unique transaction ID from which the system starts retrieving transaction details.",
            "schema": {
              "type": "integer",
              "example": 1000
            }
          },
          {
            "name": "endId",
            "in": "query",
            "description": "A unique transaction ID up to which the system retrieves transaction details. ",
            "schema": {
              "type": "integer",
              "example": 2000
            }
          },
          {
            "name": "entityType",
            "in": "query",
            "description": "Specifies the level of the store hierarchy to apply the filter.  ",
            "schema": {
              "type": "string",
              "example": "STORE"
            }
          },
          {
            "name": "entityCode",
            "in": "query",
            "description": "Specifies the unique identifier of the entity selected in `entityType`.",
            "schema": {
              "type": "string",
              "example": "STORE_001"
            }
          },
          {
            "name": "sortOrder",
            "in": "query",
            "description": "Order in which records are sorted. ASC and DESC are supported values.",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "example": "DESC"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Maximum number of records to retrieve. Maximum limit: 1000",
            "schema": {
              "type": "integer",
              "example": 20,
              "default": "20"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Starting point for records retrieval",
            "schema": {
              "type": "integer",
              "example": 0,
              "default": "0"
            }
          },
          {
            "name": "embed",
            "in": "query",
            "description": "Retrieves details for the selected embed parameters.\nAllowed:\nBILL_CF, BILL_EF, BILL_STORE_DETAILS, PAYMENT_MODES, ATTRIBUTION, CREDIT_NOTES, BILL_POINTS",
            "schema": {
              "type": "string",
              "example": "BILL_CF,BILL_EF,ATTRIBUTION,PAYMENT_MODES,CREDIT_NOTES,BILL_STORE_DETAILS,BILL_POINTS,TRANSACTION_IDENTIFIER"
            }
          }
        ],
        "security": [
          {
            "basicAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "examples": {
                  "Sample response with BILL_CFF, BILL_EF": {
                    "summary": "Sample response with BILL_CFF, BILL_EF",
                    "value": {
                      "pagination": {
                        "limit": 1,
                        "offset": 0,
                        "sortBy": "BILLING_TIME",
                        "sortOrder": "DESC",
                        "total": 66
                      },
                      "data": [
                        {
                          "id": 896977973,
                          "customerId": 566135941,
                          "loyaltyLogId": 896977973,
                          "billingTime": "2026-01-27T09:00:00Z",
                          "billingTimeInputOffset": "+05:30",
                          "billNumber": "test00transact12399",
                          "type": "REGULAR",
                          "notes": "Regular Tranasction number 122",
                          "amount": 2000,
                          "grossAmount": 2000,
                          "discount": 0,
                          "outlierStatus": "NORMAL",
                          "billingStore": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "referenceId": -1,
                            "adminType": "GENERAL",
                            "isActive": true,
                            "isOuEnabled": false,
                            "timeZoneId": 191,
                            "currencyId": 95,
                            "languageId": 148,
                            "default": false
                          },
                          "customFields": {
                            "booking_date": "2025-07-30",
                            "origin": "instore",
                            "paymentmode": "card"
                          },
                          "extendedFields": {
                            "event_input_date_offset": "+05:30"
                          },
                          "billPoints": {
                            "pointsBreakup": [],
                            "aggregatedBillPoints": [],
                            "alternateCurrenciesBreakup": [],
                            "aggregatedBillAlternateCurrencies": []
                          },
                          "attribution": {
                            "createDate": "2026-01-27T09:00:00Z",
                            "createdBy": {
                              "id": 75155297,
                              "code": "tj_capillary",
                              "description": "",
                              "name": "tj_capillary",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 95,
                              "languageId": 148,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-01-28T12:19:46Z"
                          },
                          "txnIdentifiers": [
                            {
                              "type": "mobile",
                              "value": "918088369835"
                            }
                          ]
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "Sample response with ATTRIBUTION, BILL_STORE_DETAILS, BILL_POINTS,TRANSACTION_IDENTIFIER": {
                    "summary": "Sample response with ATTRIBUTION, BILL_STORE_DETAILS, BILL_POINTS,TRANSACTION_IDENTIFIER",
                    "value": {
                      "pagination": {
                        "limit": 20,
                        "offset": 0,
                        "sortBy": "BILLING_TIME",
                        "sortOrder": "DESC",
                        "total": 1
                      },
                      "data": [
                        {
                          "id": 894749251,
                          "customerId": 566135941,
                          "loyaltyLogId": 894749251,
                          "billingTime": "2025-12-08T10:35:00Z",
                          "billNumber": "txn-118",
                          "type": "REGULAR",
                          "notes": "",
                          "amount": 5000,
                          "grossAmount": 5000,
                          "discount": 0,
                          "outlierStatus": "NORMAL",
                          "billingStore": {
                            "id": 75152715,
                            "code": "doc123",
                            "description": "",
                            "name": "DocStore",
                            "type": "STORE",
                            "referenceId": -1,
                            "adminType": "GENERAL",
                            "isActive": true,
                            "isOuEnabled": false,
                            "timeZoneId": 191,
                            "currencyId": 95,
                            "languageId": 148,
                            "default": false
                          },
                          "billPoints": {
                            "pointsBreakup": [
                              {
                                "programName": "DocDemoDefaultProgram",
                                "programId": 973,
                                "regularPoints": [
                                  {
                                    "points": 10000,
                                    "pointsAwardedType": "POINT_AWARDED"
                                  }
                                ],
                                "promisePoints": [],
                                "promoPoints": []
                              }
                            ],
                            "aggregatedBillPoints": [
                              {
                                "programName": "DocDemoDefaultProgram",
                                "programId": 973,
                                "regularPoints": {
                                  "points": 10000
                                },
                                "promisePoints": {
                                  "points": 0
                                },
                                "promoPoints": {
                                  "points": 0
                                }
                              }
                            ],
                            "alternateCurrenciesBreakup": [],
                            "aggregatedBillAlternateCurrencies": []
                          },
                          "attribution": {
                            "createDate": "2025-12-08T10:35:00Z",
                            "createdBy": {
                              "id": 75152721,
                              "code": "naman_doc",
                              "description": "",
                              "name": "naman",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 95,
                              "languageId": 148,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2025-12-10T06:11:36Z"
                          },
                          "txnIdentifiers": [
                            {
                              "type": "id",
                              "value": "566135941"
                            }
                          ]
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  }
                }
              }
            }
          }
        },
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/transactions?identifierName=mobile&identifierValue=918088369835&source=INSTORE&transactionType=REGULAR&startDate=2025-01-01&endDate=2025-12-31&localCurrency=false&transactionId=894749264&number=txn-118&startId=1000&endId=2000&entityType=STORE&entityCode=STORE_001&sortOrder=DESC&limit=20&offset=0&embed=BILL_CF%2CBILL_EF%2CATTRIBUTION%2CPAYMENT_MODES%2CCREDIT_NOTES%2CBILL_STORE_DETAILS%2CBILL_POINTS%2CTRANSACTION_IDENTIFIER' \\\n--header 'Authorization: Basic bWFkaHVfjU2YQ==' \\\n--header 'Content-Type: application/json' \\\n--header 'Cookie: _cfuvid=iOrJ_zuHNucnWYJlrloDHCuLzbcD.yzBleSJLaFGd6s-1769592321072-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request with ATTRIBUTION, BILL_STORE_DETAILS, BILL_POINTS,TRANSACTION_IDENTIFIER"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/transactions?identifierName=mobile&identifierValue=918088369835&source=INSTORE&transactionType=REGULAR&sortOrder=DESC&limit=1&offset=0&embed=BILL_CF%2CBILL_EF%2CATTRIBUTION%2CPAYMENT_MODES%2CCREDIT_NOTES%2CBILL_STORE_DETAILS%2CBILL_POINTS%2CTRANSACTION_IDENTIFIER' \\\n--header 'Authorization: Bearer <token>' \\\n--header 'Content-Type: application/json'",
              "language": "shell",
              "name": "Sample request with BILL_CFF, BILL_EF"
            }
          ],
          "samples-languages": [
            "shell"
          ]
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
  }
}
```