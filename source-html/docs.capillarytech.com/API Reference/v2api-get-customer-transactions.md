> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get customer transactions

This API retrieves transaction details of a customer using customer ID.

This API retrieves a customer’s transaction details using the customer ID. It does not return detailed line-item data.
To view complete transaction or line-item-level information, use the [Get Transaction (v2)](https://docs.capillarytech.com/reference/get-transaction-details#/) API for enrichment.

**Note:** All monetary fields in transaction line items (such as amount, rate, value, and discount) are rounded based on the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration. If this configuration is set to a value greater than or equal to 0, the API rounds these fields to the specified number of decimal places using floor rounding. For example, a value of 38.98 may be rounded down to 38.97. To ensure correct storage and retrieval of decimal values, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to one more than the value of CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY (for example, if CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY is n, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to n+1).

# Example request

```
curl --location 'https://eu.api.capillarytech.com/v2/customers/564582355/transactions?localCurrency=false' \
--header 'Authorization: Basic bmi' \
--header 'Cookie: _cfuvid=7hXrm0hlY6PK.uIUfWNV_NmfVOT4Cmsn.3jaI1blBUo-1760427011419-0.0.1.1-604800000'
```
```curl Sample request with startId and endId
curl --location 'https://eu.api.capillarytech.com/v2/customers/566881933/transactions?startDate=2024-04-02T12%3A47%3A05Z&endDate=2025-04-02T12%3A47%3A05Z&startId=884653716&endId=884654008' \
--header 'Authorization: Basic ZlYTI0YTYyZTZm' \
--header 'Cookie: _cfuvid=JGc1YGoLsL2DRiBXDIj6V5Be4X7XxM1crVO5RoLlqEI-1768379224394-0.0.1.1-604800000' \
--data ''
```
```curl Sample response with transactionIds and embed=TRANSACTION_IDENTIFIER
curl --location 'https://eu.api.capillarytech.com/v2/customers/566881933/transactions?transactionId=893010296%2C891887252%2C884653716%2C884654530&embed=TRANSACTION_IDENTIFIER' \
--header 'Authorization: Basic ZGI0YTYyZTZm' \
--header 'Cookie: _cfuvid=JGc1YGoLsL2DRiBXDIj6V5Be4X7XxM1crVO5RoLlqEI-1768379224394-0.0.1.1-604800000' \
--data ''
```
```curl Sample request with bill number
curl --location 'https://eu.api.capillarytech.com/v2/customers/566881933/transactions?number=trans-2' \
--header 'Authorization: Basic YTYyZTZm' \
--header 'Cookie: _cfuvid=JGc1YGoLsL2DRiBXDIj6V5Be4X7XxM1crVO5RoLlqEI-1768379224394-0.0.1.1-604800000' \
--data ''
```

<br />

# API endpoint

* To retrieve the transaction details of the customer, use the endpoint given below:

`https://{host}/v2/customers/{id}/transactions`

* To retrieve additional customer transaction information, use the 'embed' query parameter. The supported embed parameters are:  BILL\_CF, BILL\_EF, ATTRIBUTION, PAYMENT\_MODES, CREDIT\_NOTES, BILL\_STORE\_DETAILS, BILL\_POINTS, TRANSACTION\_IDENTIFIER
* When alternate currency is enabled for the org, the bill points information will also have alternate currency information with it.

`https://{host}/v2/customers/{id}/transactions?embed=BILL_CF, BILL_EF, ATTRIBUTION, PAYMENT_MODES`

# Path parameter

| Path parameter | Description                  |
| :------------- | :--------------------------- |
| id\*           | Customer ID of the customer. |

# Query parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        startDate
      </td>

      <td>
        Transaction start date in the format YYYY-MM-DD HH:MM:SS.
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        Transaction end date in the format YYYY-MM-DD HH:MM:SS.
      </td>
    </tr>

    <tr>
      <td>
        sortBy
      </td>

      <td>
        Field by which the records are sorted. Only `BILLING_TIME`is supported.
      </td>
    </tr>

    <tr>
      <td>
        sortOrder
      </td>

      <td>
        Order in which records are sorted.  ASC and DESC are supported values.
        Default order is DESC.
      </td>
    </tr>

    <tr>
      <td>
        limit
      </td>

      <td>
        Maximum number of records to retrieve.
        Default limit is 20.
        Maximum limit is 1000.
      </td>
    </tr>

    <tr>
      <td>
        offset
      </td>

      <td>
        Starting point for records retrieval.
        Default offset is 0.
      </td>
    </tr>

    <tr>
      <td>
        localCurrency
      </td>

      <td>
        If set to true, retrieves the amount, gross amount and discount in the transaction currency (the currency using which the transaction was made) as well. Not applicable for payment modes and credit notes.
      </td>
    </tr>

    <tr>
      <td>
        transactionId
      </td>

      <td>
        Unique transaction ID used to retrieve transaction details. This ID is generated when the [transaction is created](https://docs.capillarytech.com/reference/add-transaction-single).  You can also [retrieve it from Member Care UI](https://docs.capillarytech.com/docs/view-event_details#transactions).
        To retrieve details for multiple transactions, provide a comma-separated list of transaction IDs.
      </td>
    </tr>

    <tr>
      <td>
        startId
      </td>

      <td>
        A unique transaction ID from which the system starts retrieving transaction details. Transactions with an ID greater than or equal to this value are included in the results.
        **Example**: If `startId` is 5000, the system retrieves transactions with an ID greater than or equal to 5000
      </td>
    </tr>

    <tr>
      <td>
        endId
      </td>

      <td>
        A unique transaction ID up to which the system retrieves transaction details. Transactions with an ID less than or equal to this value are included in the results.  
        **Example**:  If `endId` is 8000, the system retrieves transactions with an ID less than or equal to 8000
      </td>
    </tr>

    <tr>
      <td>
        number
      </td>

      <td>
        Unique bill number used to retrieve transaction details. You can get the bill number from the [Add Transaction API](https://docs.capillarytech.com/reference/add-transaction-single) or [from the Member Care UI](https://docs.capillarytech.com/docs/view-event_details#transactions).
      </td>
    </tr>

    <tr>
      <td>
        transNos
      </td>

      <td>
        Alternative parameter for filtering transactions by bill number. Accepts comma-separated values. Functions the same as the `number` parameter.
      </td>
    </tr>

    <tr>
      <td>
        entityType
      </td>

      <td>
        Filters transactions by organizational entity type. Supported values: STORE, ZONE, CONCEPT, TILL.
      </td>
    </tr>

    <tr>
      <td>
        entityCode
      </td>

      <td>
        Filters transactions by organizational entity code. Use with `entityType` to retrieve transactions from specific entities.
      </td>
    </tr>

    <tr>
      <td>
        embed
      </td>

      <td>
        Specifies the details to include in the response. Supported values:

        * TRANSACTION_IDENTIFIER: Adds transaction details to the response.
        * BILL_CF: Custom fields associated with the transaction.
        * BILL_EF: Extended fields of the transaction.
        * ATTRIBUTION: Additional details regarding the transaction.
        * PAYMENT_MODES: Modes of payment for the transaction.
        * CREDIT_NOTES: Notes or references related to credits of the transaction.
        * BILL_STORE_DETAILS: Details of the store or outlet associated with the transaction.
        * BILL_POINTS: Information associated with the promised points, regular points, promotional points, and alternate currencies.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameter

**Rounding of monetary fields:**

All monetary fields in the response, including amount, rate, value, and discount, are rounded according to the AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES configuration. The API applies floor rounding to these fields based on the configured decimal places. This may result in values being rounded down (for example, 38.98 becomes 38.97). To avoid loss of precision, set AMOUNT\_ROUNDING\_OFF\_TO\_DECIMAL\_PLACES to one more than CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        **pagination**
      </td>

      <td>
        object
      </td>

      <td>
        Contains pagination details for the transaction list.
      </td>
    </tr>

    <tr>
      <td>
        . **limit**
      </td>

      <td>
        number
      </td>

      <td>
        Maximum number of records returned per request.
      </td>
    </tr>

    <tr>
      <td>
        . **offset**
      </td>

      <td>
        number
      </td>

      <td>
        Position from where records start (used for pagination).
      </td>
    </tr>

    <tr>
      <td>
        . **sortBy**
      </td>

      <td>
        string
      </td>

      <td>
        Field name used to sort transactions (for example, `BILLING_TIME`).
      </td>
    </tr>

    <tr>
      <td>
        . **sortOrder**
      </td>

      <td>
        string
      </td>

      <td>
        Order of sorting — `ASC` (ascending) or `DESC` (descending).
      </td>
    </tr>

    <tr>
      <td>
        . **total**
      </td>

      <td>
        number
      </td>

      <td>
        Total number of transactions matching the criteria.
      </td>
    </tr>

    <tr>
      <td>
        **data**
      </td>

      <td>
        array
      </td>

      <td>
        List of transactions returned in the response.
      </td>
    </tr>

    <tr>
      <td>
        . **id**
      </td>

      <td>
        number
      </td>

      <td>
        Unique identifier for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        . **customerId**
      </td>

      <td>
        number
      </td>

      <td>
        Unique identifier for the customer associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        . **loyaltyLogId**
      </td>

      <td>
        number
      </td>

      <td>
        ID of the corresponding loyalty log entry.
      </td>
    </tr>

    <tr>
      <td>
        . **billingTime**
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the bill creation date and time in ISO 8601 format, returned in the server time zone.

        **EU server example **
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        **billingTimeInputOffset**
      </td>

      <td>
        string
      </td>

      <td>
        Preserves the original local timezone offset in which the transaction happened (`billingDate` in the Add transaction).

        * Present only when the query parameter `embed` is set to `BILL_EF`.
      </td>
    </tr>

    <tr>
      <td>
        . **billNumber**
      </td>

      <td>
        string
      </td>

      <td>
        Bill or invoice number linked to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        . **type**
      </td>

      <td>
        string
      </td>

      <td>
        Transaction type (for example, `REGULAR`, `RETURN`).
      </td>
    </tr>

    <tr>
      <td>
        . **notes**
      </td>

      <td>
        string
      </td>

      <td>
        Additional remarks or comments for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        . **amount**
      </td>

      <td>
        number
      </td>

      <td>
        Final payable amount after discount (in base currency).
      </td>
    </tr>

    <tr>
      <td>
        . **grossAmount**
      </td>

      <td>
        number
      </td>

      <td>
        Total transaction value before discount (in base currency).
      </td>
    </tr>

    <tr>
      <td>
        . **discount**
      </td>

      <td>
        number
      </td>

      <td>
        Total discount applied to the transaction (in base currency).
      </td>
    </tr>

    <tr>
      <td>
        . **outlierStatus**
      </td>

      <td>
        string
      </td>

      <td>
        Indicates if the transaction is flagged as an outlier.
      </td>
    </tr>

    <tr>
      <td>
        . **currencyLogDto**
      </td>

      <td>
        object
      </td>

      <td>
        Contains currency conversion details between transaction and base currency. Available only when the query parameter local currency is set to true.
      </td>
    </tr>

    <tr>
      <td>
        . . **addedBy**
      </td>

      <td>
        number
      </td>

      <td>
        ID of the user or process that added the currency log entry.
      </td>
    </tr>

    <tr>
      <td>
        . . **addedOn**
      </td>

      <td>
        string
      </td>

      <td>
        Date when the currency log record was created.
      </td>
    </tr>

    <tr>
      <td>
        . . **autoUpdateTimestamp**
      </td>

      <td>
        string
      </td>

      <td>
        Timestamp when the currency details were last automatically updated.
      </td>
    </tr>

    <tr>
      <td>
        . . **baseCurrencyId**
      </td>

      <td>
        number
      </td>

      <td>
        ID of the base (local) currency.
      </td>
    </tr>

    <tr>
      <td>
        . . **baseCurrency**
      </td>

      <td>
        object
      </td>

      <td>
        Details of the base (local) currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **id**
      </td>

      <td>
        number
      </td>

      <td>
        Identifier of the base currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **name**
      </td>

      <td>
        string
      </td>

      <td>
        Full name of the base currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **symbol**
      </td>

      <td>
        string
      </td>

      <td>
        Symbol representing the base currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **isoCode**
      </td>

      <td>
        string
      </td>

      <td>
        ISO code of the base currency (for example, INR).
      </td>
    </tr>

    <tr>
      <td>
        . . . **refId**
      </td>

      <td>
        number
      </td>

      <td>
        Internal reference ID for the base currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **ratio**
      </td>

      <td>
        number
      </td>

      <td>
        Reserved ratio field, generally 0.0 in static base definitions.
      </td>
    </tr>

    <tr>
      <td>
        . . **id**
      </td>

      <td>
        number
      </td>

      <td>
        Unique identifier for the currency log record.
      </td>
    </tr>

    <tr>
      <td>
        . . **orgId**
      </td>

      <td>
        number
      </td>

      <td>
        Organisation ID under which this transaction belongs.
      </td>
    </tr>

    <tr>
      <td>
        . . **ratio**
      </td>

      <td>
        number
      </td>

      <td>
        Conversion ratio used to calculate base currency value. Example: `1 USD = 86 INR`.
      </td>
    </tr>

    <tr>
      <td>
        . . **refId**
      </td>

      <td>
        number
      </td>

      <td>
        Reference ID pointing to the related transaction record.
      </td>
    </tr>

    <tr>
      <td>
        . . **refType**
      </td>

      <td>
        string
      </td>

      <td>
        Type of the transaction associated with this currency log (for example, `REGULAR`).
      </td>
    </tr>

    <tr>
      <td>
        . . **transactionCurrencyId**
      </td>

      <td>
        number
      </td>

      <td>
        ID of the transaction (source) currency.
      </td>
    </tr>

    <tr>
      <td>
        . . **transactionCurrency**
      </td>

      <td>
        object
      </td>

      <td>
        Details of the transaction (source) currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **id**
      </td>

      <td>
        number
      </td>

      <td>
        Identifier of the transaction currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **name**
      </td>

      <td>
        string
      </td>

      <td>
        Full name of the transaction currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **symbol**
      </td>

      <td>
        string
      </td>

      <td>
        Symbol representing the transaction currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **isoCode**
      </td>

      <td>
        string
      </td>

      <td>
        ISO code of the transaction currency (for example, USD).
      </td>
    </tr>

    <tr>
      <td>
        . . . **refId**
      </td>

      <td>
        number
      </td>

      <td>
        Internal reference ID for the transaction currency.
      </td>
    </tr>

    <tr>
      <td>
        . . . **ratio**
      </td>

      <td>
        number
      </td>

      <td>
        The exchange rate between the transaction currency and the base currency.
      </td>
    </tr>

    <tr>
      <td>
        . . **value**
      </td>

      <td>
        number
      </td>

      <td>
        Transaction amount in the base currency. The base currency is the default currency set at the organisation.
      </td>
    </tr>

    <tr>
      <td>
        . . **localValue**
      </td>

      <td>
        number
      </td>

      <td>
        Transaction amount in the original transaction currency. This is the currency in which the transaction was made. Set at the store level or defined in the payload when using the v1 add transaction with local currency API.
      </td>
    </tr>

    <tr>
      <td>
        . . **localDiscount**
      </td>

      <td>
        number
      </td>

      <td>
        Discount value in the transaction currency.
      </td>
    </tr>

    <tr>
      <td>
        . . **localGrossAmount**
      </td>

      <td>
        number
      </td>

      <td>
        Gross transaction amount in the transaction currency.
      </td>
    </tr>
  </tbody>
</Table>

<br />

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        pagination
      </td>

      <td>
        An object containing pagination details for the API response.
      </td>
    </tr>

    <tr>
      <td>
        * limit
      </td>

      <td>
        The maximum number of items returned per page (e.g., 20).
      </td>
    </tr>

    <tr>
      <td>
        * offset
      </td>

      <td>
        The starting offset for the items in the current page (e.g., 0).
      </td>
    </tr>

    <tr>
      <td>
        * sortBy
      </td>

      <td>
        The field used for sorting the data (e.g., "BILLING_TIME").
      </td>
    </tr>

    <tr>
      <td>
        * sortOrder
      </td>

      <td>
        The sorting order (e.g., "DESC" for descending order).
      </td>
    </tr>

    <tr>
      <td>
        * total
      </td>

      <td>
        The total number of items available in the dataset (e.g., 107).
      </td>
    </tr>

    <tr>
      <td>
        data
      </td>

      <td>
        An array of objects containing the main data of the response.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        An identifier for the data item.
      </td>
    </tr>

    <tr>
      <td>
        * customerId
      </td>

      <td>
        The ID of the customer associated with the data.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyLogId
      </td>

      <td>
        The ID of the loyalty log.
      </td>
    </tr>

    <tr>
      <td>
        * billingTime
      </td>

      <td>
        The date and time of the billing event.
      </td>
    </tr>

    <tr>
      <td>
        * billNumber
      </td>

      <td>
        The bill number associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        The type of transaction (e.g., "RETURN" or "REGULAR").
      </td>
    </tr>

    <tr>
      <td>
        * returnType
      </td>

      <td>
        The type of return transaction (applicable for "RETURN" type).
      </td>
    </tr>

    <tr>
      <td>
        * notes
      </td>

      <td>
        Additional notes or comments related to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * amount
      </td>

      <td>
        The transaction amount.
      </td>
    </tr>

    <tr>
      <td>
        * grossAmount
      </td>

      <td>
        The gross transaction amount.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        The discount applied to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * outlierStatus
      </td>

      <td>
        The status of the transaction (e.g., "NORMAL").
      </td>
    </tr>

    <tr>
      <td>
        * billingStore
      </td>

      <td>
        An object containing details about the billing store.
      </td>
    </tr>

    <tr>
      <td>
        -- id
      </td>

      <td>
        The store ID.
      </td>
    </tr>

    <tr>
      <td>
        -- code
      </td>

      <td>
        The store code.
      </td>
    </tr>

    <tr>
      <td>
        -- description
      </td>

      <td>
        The store description.
      </td>
    </tr>

    <tr>
      <td>
        -- name
      </td>

      <td>
        The store name.
      </td>
    </tr>

    <tr>
      <td>
        -- type
      </td>

      <td>
        The store type.
      </td>
    </tr>

    <tr>
      <td>
        -- adminType
      </td>

      <td>
        The store admin type.
      </td>
    </tr>

    <tr>
      <td>
        -- isActive
      </td>

      <td>
        Indicates if the store is active.
      </td>
    </tr>

    <tr>
      <td>
        -- isOuEnabled
      </td>

      <td>
        Indicates if OU (Organization Unit) is enabled for the store.
      </td>
    </tr>

    <tr>
      <td>
        -- timeZoneId
      </td>

      <td>
        The time zone ID for the store.
      </td>
    </tr>

    <tr>
      <td>
        -- currencyId
      </td>

      <td>
        The currency ID used by the store.
      </td>
    </tr>

    <tr>
      <td>
        -- languageId
      </td>

      <td>
        The language ID used by the store.
      </td>
    </tr>

    <tr>
      <td>
        * extendedFields
      </td>

      <td>
        An object containing extended fields and their values.
      </td>
    </tr>

    <tr>
      <td>
        -- CentralGST
      </td>

      <td>
        The Central GST value.
      </td>
    </tr>

    <tr>
      <td>
        -- StateGST
      </td>

      <td>
        The State GST value.
      </td>
    </tr>

    <tr>
      <td>
        -- amount_excluding_tax
      </td>

      <td>
        The transaction amount excluding tax.
      </td>
    </tr>

    <tr>
      <td>
        * creditNotes
      </td>

      <td>
        An array of objects containing credit note details (if applicable).
      </td>
    </tr>

    <tr>
      <td>
        -- number
      </td>

      <td>
        The credit note number.
      </td>
    </tr>

    <tr>
      <td>
        -- amount
      </td>

      <td>
        The credit note amount.
      </td>
    </tr>

    <tr>
      <td>
        -- notes
      </td>

      <td>
        Notes related to the credit note.
      </td>
    </tr>

    <tr>
      <td>
        -- referenceId
      </td>

      <td>
        The reference ID associated with the credit note.
      </td>
    </tr>

    <tr>
      <td>
        * attribution
      </td>

      <td>
        An object containing attribution details.
      </td>
    </tr>

    <tr>
      <td>
        -- createDate
      </td>

      <td>
        The date and time of creation.
      </td>
    </tr>

    <tr>
      <td>
        -- createdBy
      </td>

      <td>
        An object containing details about the creator.
      </td>
    </tr>

    <tr>
      <td>
        --- id
      </td>

      <td>
        The creator's ID.
      </td>
    </tr>

    <tr>
      <td>
        --- code
      </td>

      <td>
        The creator's code.
      </td>
    </tr>

    <tr>
      <td>
        --- description
      </td>

      <td>
        The creator's description.
      </td>
    </tr>

    <tr>
      <td>
        --- name
      </td>

      <td>
        The creator's name.
      </td>
    </tr>

    <tr>
      <td>
        --- type
      </td>

      <td>
        The creator's type.
      </td>
    </tr>

    <tr>
      <td>
        --- adminType
      </td>

      <td>
        The creator's admin type.
      </td>
    </tr>

    <tr>
      <td>
        --- isActive
      </td>

      <td>
        Indicates if the creator is active.
      </td>
    </tr>

    <tr>
      <td>
        --- isOuEnabled
      </td>

      <td>
        Indicates if OU (Organization Unit) is enabled for the creator.
      </td>
    </tr>

    <tr>
      <td>
        --- timeZoneId
      </td>

      <td>
        The time zone ID for the creator.
      </td>
    </tr>

    <tr>
      <td>
        --- currencyId
      </td>

      <td>
        The currency ID used by the creator.
      </td>
    </tr>

    <tr>
      <td>
        --- languageId
      </td>

      <td>
        The language ID used by the creator.
      </td>
    </tr>

    <tr>
      <td>
        -- modifiedBy
      </td>

      <td>
        An object containing details about the modifier (if applicable).
      </td>
    </tr>

    <tr>
      <td>
        -- modifiedDate
      </td>

      <td>
        The date and time of modification (if applicable).
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        An array of warning messages (if any).
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        An array of error messages (if any).
      </td>
    </tr>
  </tbody>
</Table>

<details> <summary><b>Using EMBED=BILL_POINTS</b></summary></details>

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        pagination
      </td>

      <td>
        Object containing pagination details.
      </td>
    </tr>

    <tr>
      <td>
        * limit
      </td>

      <td>
        Maximum number of items to display per page.
      </td>
    </tr>

    <tr>
      <td>
        * offset
      </td>

      <td>
        Index of the first item to be displayed.
      </td>
    </tr>

    <tr>
      <td>
        * sortBy
      </td>

      <td>
        Field used for sorting the data.
      </td>
    </tr>

    <tr>
      <td>
        * sortOrder
      </td>

      <td>
        Sorting order (ascending or descending).
      </td>
    </tr>

    <tr>
      <td>
        * total
      </td>

      <td>
        Total number of items available.
      </td>
    </tr>

    <tr>
      <td>
        data
      </td>

      <td>
        Array containing the data objects.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        Unique identifier for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * customerId
      </td>

      <td>
        ID of the customer associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyLogId
      </td>

      <td>
        ID associated with the loyalty log.
      </td>
    </tr>

    <tr>
      <td>
        * billingTime
      </td>

      <td>
        Date and time of the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * billNumber
      </td>

      <td>
        Unique identifier for the bill.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        Type of transaction.
      </td>
    </tr>

    <tr>
      <td>
        * notes
      </td>

      <td>
        Additional notes or description of the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * amount
      </td>

      <td>
        Total amount of the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * grossAmount
      </td>

      <td>
        Gross amount of the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Discount applied to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * outlierStatus
      </td>

      <td>
        Status indicating if the transaction is considered an outlier (deviating from regular transaction).
      </td>
    </tr>

    <tr>
      <td>
        * billPoints
      </td>

      <td>
        Object containing details about loyalty points earned from the bill.
      </td>
    </tr>

    <tr>
      <td>
        * pointsBreakup
      </td>

      <td>
        Breakdown of points earned. Includes info on promised points, promotional points, regular points, and points awarded type with the associated program type and program ID.
      </td>
    </tr>

    <tr>
      <td>
        * aggregatedBillPoints
      </td>

      <td>
        Includes info on promised points, promotional points, and regular points with the associated program type and program ID.
      </td>
    </tr>

    <tr>
      <td>
        * alternateCurrenciesBreakup
      </td>

      <td>
        Breakdown of alternate currencies earned with the related information. This is available when alternate currency is enabled for the org and awarded.
      </td>
    </tr>

    <tr>
      <td>
        * aggregatedBillAlternateCurrencies
      </td>

      <td>
        Breakdown of alternate currencies earned with the related information. This is available when alternate currency is enabled for the org and awarded.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array containing any warnings encountered during processing.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array containing any errors encountered during processing.
      </td>
    </tr>
  </tbody>
</Table>

<details> <summary><b>Using EMBED=TRANSACTION_IDENTIFIER</b></summary></details>

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        pagination
      </td>

      <td>
        Object containing pagination details.
      </td>
    </tr>

    <tr>
      <td>
        * limit
      </td>

      <td>
        Maximum number of items to display per page.
      </td>
    </tr>

    <tr>
      <td>
        * offset
      </td>

      <td>
        Index of the first item to be displayed.
      </td>
    </tr>

    <tr>
      <td>
        * sortBy
      </td>

      <td>
        Field used for sorting the data.
      </td>
    </tr>

    <tr>
      <td>
        * sortOrder
      </td>

      <td>
        Sorting order (ascending or descending).
      </td>
    </tr>

    <tr>
      <td>
        * total
      </td>

      <td>
        Total number of items available.
      </td>
    </tr>

    <tr>
      <td>
        data
      </td>

      <td>
        Array containing the data objects.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        Unique identifier for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * customerId
      </td>

      <td>
        Unique identifier of the customer associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyLogId
      </td>

      <td>
        Unique identifier associated with the loyalty log.
      </td>
    </tr>

    <tr>
      <td>
        * billingTime
      </td>

      <td>
        Date and time of the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * billNumber
      </td>

      <td>
        Unique identifier for the bill.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        Type of transaction.
      </td>
    </tr>

    <tr>
      <td>
        * notes
      </td>

      <td>
        Additional notes or description of the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * amount
      </td>

      <td>
        Transaction amount after discount.
      </td>
    </tr>

    <tr>
      <td>
        * grossAmount
      </td>

      <td>
        Transaction amount before discount.
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Discount applied to the transaction.
      </td>
    </tr>

    <tr>
      <td>
        * outlierStatus
      </td>

      <td>
        Status indicating if the transaction is considered an outlier, deviating from a regular transaction.
      </td>
    </tr>

    <tr>
      <td>
        * txnIdentifiers
      </td>

      <td>
        Array containing the customer identifier details used when the transaction was created.
      </td>
    </tr>

    <tr>
      <td>
        -- type
      </td>

      <td>
        Type of identifier used for transaction.
      </td>
    </tr>

    <tr>
      <td>
        -- value
      </td>

      <td>
        Value of the identifier.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array containing any warnings encountered during processing.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array containing any errors encountered during processing.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```Text with localCurrency=true
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
            "id": 1139030313,
            "customerId": 658762519,
            "loyaltyLogId": 1139030313,
            "billingTime": "2026-01-23T09:00:00+05:30",
            "billingTimeInputOffset": "+05:30",
            "billNumber": "testTZ3",
            "type": "REGULAR",
            "notes": "Regular Tranasction number 114 reaching 100% of the enrolled milestone value for the day",
            "amount": 2000.0,
            "grossAmount": 2000.0,
            "discount": 0.0,
            "outlierStatus": "NORMAL",
            "extendedFields": {
                "event_input_date_offset": "+05:30"
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```
```Text with localCurrency=false
{
    "pagination": {
        "limit": 20,
        "offset": 0,
        "sortBy": "BILLING_TIME",
        "sortOrder": "DESC",
        "total": 37
    },
    "data": [
        {
            "id": 891340869,
            "customerId": 564582355,
            "loyaltyLogId": 891340869,
            "billingTime": "2025-09-19T09:04:20Z",
            "billNumber": "DaveMustaine1",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 892288086,
            "customerId": 564582355,
            "loyaltyLogId": 892288086,
            "billingTime": "2025-04-08T17:30:00Z",
            "billNumber": "NeeLocalTest4_2Disc",
            "type": "REGULAR",
            "notes": "Transaction Number 74",
            "amount": 8600.0,
            "grossAmount": 8600.0,
            "discount": 860.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 892287951,
            "customerId": 564582355,
            "loyaltyLogId": 892287951,
            "billingTime": "2025-04-08T17:30:00Z",
            "billNumber": "NeeLocalTest3_2Disc",
            "type": "REGULAR",
            "notes": "Transaction Number 74",
            "amount": 8600.0,
            "grossAmount": 8600.0,
            "discount": 860.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 892287745,
            "customerId": 564582355,
            "loyaltyLogId": 892287745,
            "billingTime": "2025-04-08T17:30:00Z",
            "billNumber": "NeeLocalTest3_Disc",
            "type": "REGULAR",
            "notes": "Transaction Number 74",
            "amount": 8600.0,
            "grossAmount": 8600.0,
            "discount": 860.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 892287474,
            "customerId": 564582355,
            "loyaltyLogId": 892287474,
            "billingTime": "2025-04-08T17:30:00Z",
            "billNumber": "NeeLocalTest2",
            "type": "REGULAR",
            "notes": "Transaction Number 74",
            "amount": 8600.0,
            "grossAmount": 8600.0,
            "discount": 0.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 892285776,
            "customerId": 564582355,
            "loyaltyLogId": 892285776,
            "billingTime": "2025-04-08T17:30:00Z",
            "billNumber": "NeeLocalTest1",
            "type": "REGULAR",
            "notes": "Transaction Number 74",
            "amount": 8600.0,
            "grossAmount": 8600.0,
            "discount": 0.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 892283305,
            "customerId": 564582355,
            "loyaltyLogId": 892283305,
            "billingTime": "2025-04-08T17:30:00Z",
            "billNumber": "NeeLocalTest",
            "type": "REGULAR",
            "notes": "Transaction Number 74",
            "amount": 5160.0,
            "grossAmount": 5160.0,
            "discount": 0.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 884649013,
            "customerId": 564582355,
            "loyaltyLogId": 884649013,
            "billingTime": "2025-04-07T04:15:10Z",
            "billNumber": "DaveMustaineSearch",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 883010076,
            "customerId": 564582355,
            "loyaltyLogId": 883010076,
            "billingTime": "2025-03-11T13:04:07Z",
            "billNumber": "DaveMustaine11",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 883009995,
            "customerId": 564582355,
            "loyaltyLogId": 883009995,
            "billingTime": "2025-03-11T13:01:45Z",
            "billNumber": "DaveMustaine10",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 882963167,
            "customerId": 564582355,
            "loyaltyLogId": 882963167,
            "billingTime": "2025-03-10T12:54:12Z",
            "billNumber": "DaveMustaine6",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 882818461,
            "customerId": 564582355,
            "loyaltyLogId": 882818461,
            "billingTime": "2025-03-07T09:56:47Z",
            "billNumber": "DaveMustaine2",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 882539129,
            "customerId": 564582355,
            "loyaltyLogId": 882539129,
            "billingTime": "2025-02-27T16:08:58Z",
            "billNumber": "DaveMustaine1",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 882538931,
            "customerId": 564582355,
            "loyaltyLogId": 882538931,
            "billingTime": "2025-02-27T16:06:30Z",
            "billNumber": "DaveMustaine",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 882538451,
            "customerId": 564582355,
            "loyaltyLogId": 882538451,
            "billingTime": "2025-02-27T16:00:30Z",
            "billNumber": "num-1234",
            "type": "REGULAR",
            "notes": "This is test",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 881933080,
            "customerId": 564582355,
            "loyaltyLogId": 881933080,
            "billingTime": "2025-02-11T06:30:29Z",
            "billNumber": "Transaction1",
            "type": "REGULAR",
            "notes": "This is a transaction",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 881625427,
            "customerId": 564582355,
            "loyaltyLogId": 881625427,
            "billingTime": "2025-02-03T08:32:20Z",
            "billNumber": "billNumberAndOutlierStatus_2",
            "type": "REGULAR",
            "notes": "This is a transaction",
            "amount": 200.0,
            "grossAmount": 110.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 881436092,
            "customerId": 564582355,
            "loyaltyLogId": 881436092,
            "billingTime": "2025-01-30T12:12:25Z",
            "billNumber": "neerajsearch4",
            "type": "REGULAR",
            "notes": "",
            "amount": 62.22,
            "grossAmount": 73.0,
            "discount": 0.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 881435939,
            "customerId": 564582355,
            "loyaltyLogId": 881435939,
            "billingTime": "2025-01-30T12:07:39Z",
            "billNumber": "neerajsearch3",
            "type": "REGULAR",
            "notes": "",
            "amount": 62.22,
            "grossAmount": 73.0,
            "discount": 0.0,
            "outlierStatus": "NORMAL"
        },
        {
            "id": 881432868,
            "customerId": 564582355,
            "loyaltyLogId": 881432868,
            "billingTime": "2025-01-30T10:56:52Z",
            "billNumber": "neerajsearch2",
            "type": "REGULAR",
            "notes": "",
            "amount": 62.22,
            "grossAmount": 73.0,
            "discount": 0.0,
            "outlierStatus": "NORMAL"
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json Sample response with startId and endId
{
  "pagination": {
    "limit": 20,
    "offset": 0,
    "sortBy": "BILLING_TIME",
    "sortOrder": "DESC",
    "total": 3
  },
  "data": [
    {
      "id": 884653716,
      "customerId": 566881933,
      "loyaltyLogId": 884653716,
      "billingTime": "2025-04-02T12:47:05Z",
      "billNumber": "trans-2",
      "type": "REGULAR",
      "notes": "customer returning",
      "amount": 2000,
      "grossAmount": 1000,
      "discount": 10,
      "outlierStatus": "NORMAL"
    },
    {
      "id": 884653807,
      "customerId": 566881933,
      "loyaltyLogId": 884653807,
      "billingTime": "2025-04-02T12:47:05Z",
      "billNumber": "trans-3",
      "type": "REGULAR",
      "notes": "customer returning",
      "amount": 10000,
      "grossAmount": 1000,
      "discount": 10,
      "outlierStatus": "NORMAL"
    },
    {
      "id": 884654008,
      "customerId": 566881933,
      "loyaltyLogId": 884654008,
      "billingTime": "2025-04-01T17:38:49Z",
      "billNumber": "trans-5",
      "type": "REGULAR",
      "notes": "This is a transaction",
      "amount": 1000,
      "grossAmount": 1000,
      "discount": 0,
      "outlierStatus": "NORMAL"
    }
  ],
  "warnings": [],
  "errors": []
}
```
```json Sample response with transactionIds and embed=TRANSACTION_IDENTIFIER
{
  "pagination": {
    "limit": 20,
    "offset": 0,
    "sortBy": "BILLING_TIME",
    "sortOrder": "DESC",
    "total": 4
  },
  "data": [
    {
      "id": 884653716,
      "customerId": 566881933,
      "loyaltyLogId": 884653716,
      "billingTime": "2025-04-02T12:47:05Z",
      "billNumber": "trans-2",
      "type": "REGULAR",
      "notes": "customer returning",
      "amount": 2000,
      "grossAmount": 1000,
      "discount": 10,
      "outlierStatus": "NORMAL",
      "txnIdentifiers": [
        {
          "type": "mobile",
          "value": "919074794320"
        }
      ]
    },
    {
      "id": 884654530,
      "customerId": 566881933,
      "loyaltyLogId": 884654530,
      "billingTime": "2025-04-02T12:47:05Z",
      "billNumber": "trans-7",
      "type": "REGULAR",
      "notes": "customer returning",
      "amount": 2000,
      "grossAmount": 1000,
      "discount": 10,
      "outlierStatus": "NORMAL",
      "txnIdentifiers": [
        {
          "type": "mobile",
          "value": "919074794320"
        }
      ]
    },
    {
      "id": 891887252,
      "customerId": 566881933,
      "loyaltyLogId": 891887252,
      "billingTime": "2025-04-02T12:47:05Z",
      "billNumber": "test_jo transaction2",
      "type": "REGULAR",
      "notes": "customer returning",
      "amount": 2000,
      "grossAmount": 1000,
      "discount": 10,
      "outlierStatus": "NORMAL",
      "txnIdentifiers": []
    },
    {
      "id": 893010296,
      "customerId": 566881933,
      "loyaltyLogId": 893010296,
      "billingTime": "2025-04-02T12:47:05Z",
      "billNumber": "test_joTtransaction2",
      "type": "REGULAR",
      "notes": "customer returning",
      "amount": 2000,
      "grossAmount": 1000,
      "discount": 10,
      "outlierStatus": "NORMAL",
      "txnIdentifiers": [
        {
          "type": "mobile",
          "value": "1234512345"
        }
      ]
    }
  ],
  "warnings": [],
  "errors": []
}
```
```json Sample response with bill number
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
            "id": 884653716,
            "customerId": 566881933,
            "loyaltyLogId": 884653716,
            "billingTime": "2025-04-02T12:47:05Z",
            "billNumber": "trans-2",
            "type": "REGULAR",
            "notes": "customer returning",
            "amount": 2000.0,
            "grossAmount": 1000.0,
            "discount": 10.0,
            "outlierStatus": "NORMAL"
        }
    ],
    "warnings": [],
    "errors": []
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
    "/customers/{id}/transactions": {
      "get": {
        "summary": "Get customer transactions",
        "description": "This API retrieves transaction details of a customer using customer ID.",
        "operationId": "v2api-get-customer-transactions",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Customer ID of the customer",
            "schema": {
              "type": "integer",
              "format": "int32"
            },
            "required": true
          },
          {
            "name": "embed",
            "in": "query",
            "description": "Retrieves details for the selected embed parameters.",
            "schema": {
              "type": "string",
              "enum": [
                "BILL_CF",
                "BILL_EF",
                "BILL_STORE_DETAILS",
                "PAYMENT_MODES",
                "ATTRIBUTION",
                "CREDIT_NOTES",
                "BILL_POINTS"
              ]
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "Transaction start date in the format YYYY-MM-DD HH:MM:SS.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "Transaction end date in the format YYYY-MM-DD HH:MM:SS.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "sortOrder",
            "in": "query",
            "description": "Order in which records are sorted. ASC and DESC are supported values.",
            "schema": {
              "type": "string",
              "enum": [
                "DESC",
                "ASC"
              ],
              "default": "DESC"
            }
          },
          {
            "name": "sortBy",
            "in": "query",
            "description": "Field by which the records are sorted",
            "schema": {
              "type": "string",
              "default": "BILLING_TIME"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Maximum number of records to retrieve. Maximum limit: 1000",
            "schema": {
              "type": "string",
              "default": "20"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Starting point for records retrieval",
            "schema": {
              "type": "string",
              "default": "0"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "SAMPLE RESPONSE": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 20,\n        \"offset\": 0,\n        \"sortBy\": \"BILLING_TIME\",\n        \"sortOrder\": \"DESC\",\n        \"total\": 108\n    },\n    \"data\": [\n        {\n            \"id\": 2151202228,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151202228,\n            \"billingTime\": \"2023-07-21T14:34:53+05:30\",\n            \"billNumber\": \"bill - 497607799\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 3000.0,\n            \"grossAmount\": 3000.0,\n            \"discount\": 0.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 3803508,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151195802,\n            \"billingTime\": \"2023-07-18T14:28:58+05:30\",\n            \"billNumber\": \"bill - 730\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"FULL\",\n            \"notes\": \"bill with note\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 0.0,\n            \"discount\": 0.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196276,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196276,\n            \"billingTime\": \"2023-07-18T14:27:08+05:30\",\n            \"billNumber\": \"number-34158022\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000.0,\n            \"grossAmount\": 100.0,\n            \"discount\": 10.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 3803507,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:27:08+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900.0,\n            \"grossAmount\": 0.0,\n            \"discount\": 0.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 3803504,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196003,\n            \"billingTime\": \"2023-07-18T14:23:19+05:30\",\n            \"billNumber\": \"bill - 572\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"FULL\",\n            \"notes\": \"bill with note\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 0.0,\n            \"discount\": 0.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196137,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196137,\n            \"billingTime\": \"2023-07-18T14:19:50+05:30\",\n            \"billNumber\": \"number-595036657\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000.0,\n            \"grossAmount\": 100.0,\n            \"discount\": 10.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 3803496,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:19:50+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900.0,\n            \"grossAmount\": 0.0,\n            \"discount\": 0.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196135,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196135,\n            \"billingTime\": \"2023-07-18T14:19:47+05:30\",\n            \"billNumber\": \"number-83554066\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000.0,\n            \"grossAmount\": 100.0,\n            \"discount\": 10.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 3803495,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:19:47+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900.0,\n            \"grossAmount\": 0.0,\n            \"discount\": 0.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196133,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196133,\n            \"billingTime\": \"2023-07-18T14:19:40+05:30\",\n            \"billNumber\": \"number-315540888\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000.0,\n            \"grossAmount\": 100.0,\n            \"discount\": 10.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 3803491,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:19:40+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900.0,\n            \"grossAmount\": 0.0,\n            \"discount\": 0.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196043,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196043,\n            \"billingTime\": \"2023-07-18T14:11:46+05:30\",\n            \"billNumber\": \"bill - 736\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196023,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196023,\n            \"billingTime\": \"2023-07-18T13:57:54+05:30\",\n            \"billNumber\": \"bill - 185\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196022,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196022,\n            \"billingTime\": \"2023-07-18T13:57:53+05:30\",\n            \"billNumber\": \"bill - 156\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196019,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196019,\n            \"billingTime\": \"2023-07-18T13:57:52+05:30\",\n            \"billNumber\": \"bill - 91\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196021,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196021,\n            \"billingTime\": \"2023-07-18T13:57:52+05:30\",\n            \"billNumber\": \"bill - 788\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196018,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196018,\n            \"billingTime\": \"2023-07-18T13:57:51+05:30\",\n            \"billNumber\": \"bill - 964\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196017,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196017,\n            \"billingTime\": \"2023-07-18T13:57:50+05:30\",\n            \"billNumber\": \"bill - 368\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196016,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196016,\n            \"billingTime\": \"2023-07-18T13:57:49+05:30\",\n            \"billNumber\": \"bill - 881\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        },\n        {\n            \"id\": 2151196015,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196015,\n            \"billingTime\": \"2023-07-18T13:57:48+05:30\",\n            \"billNumber\": \"bill - 606\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000.0,\n            \"grossAmount\": 2000.0,\n            \"discount\": 1.0,\n            \"outlierStatus\": \"NORMAL\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "With EMBED=BILL_CF, BILL_EF, ATTRIBUTION, PAYMENT_MODES, CREDIT_NOTES, BILL_STORE_DETAILS": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 20,\n        \"offset\": 0,\n        \"sortBy\": \"BILLING_TIME\",\n        \"sortOrder\": \"DESC\",\n        \"total\": 107\n    },\n    \"data\": [\n        {\n            \"id\": 3803508,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151195802,\n            \"billingTime\": \"2023-07-18T14:28:58+05:30\",\n            \"billNumber\": \"bill - 730\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"FULL\",\n            \"notes\": \"bill with note\",\n            \"amount\": 2000,\n            \"grossAmount\": 0,\n            \"discount\": 0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"extendedFields\": {\n                \"CentralGST\": 6,\n                \"StateGST\": 6,\n                \"amount_excluding_tax\": 100\n            },\n            \"creditNotes\": [\n                {\n                    \"number\": \"numbrwr32434\",\n                    \"amount\": 1800,\n                    \"notes\": \"Reason for credit return\",\n                    \"referenceId\": 3803508\n                }\n            ],\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:28:58+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:28:58+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196276,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196276,\n            \"billingTime\": \"2023-07-18T14:27:08+05:30\",\n            \"billNumber\": \"number-34158022\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000,\n            \"grossAmount\": 100,\n            \"discount\": 10,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 100\n            },\n            \"creditNotes\": [\n                {\n                    \"number\": \"numbrwr32434\",\n                    \"amount\": 1800,\n                    \"notes\": \"Reason for credit return\",\n                    \"referenceId\": 2151196276\n                }\n            ],\n            \"paymentModes\": [\n                {\n                    \"amount\": 100,\n                    \"id\": 0,\n                    \"mode\": \"Cash\",\n                    \"notes\": \"\",\n                    \"orgPaymentModeId\": 0\n                }\n            ],\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:27:08+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:27:08+05:30\"\n            }\n        },\n        {\n            \"id\": 3803507,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:27:08+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900,\n            \"grossAmount\": 0,\n            \"discount\": 0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:27:09+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:27:08+05:30\"\n            }\n        },\n        {\n            \"id\": 3803504,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196003,\n            \"billingTime\": \"2023-07-18T14:23:19+05:30\",\n            \"billNumber\": \"bill - 572\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"FULL\",\n            \"notes\": \"bill with note\",\n            \"amount\": 2000,\n            \"grossAmount\": 0,\n            \"discount\": 0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"extendedFields\": {\n                \"CentralGST\": 6,\n                \"StateGST\": 6\n            },\n            \"creditNotes\": [\n                {\n                    \"number\": \"numbrwr32434\",\n                    \"amount\": 1800,\n                    \"notes\": \"Reason for credit return\",\n                    \"referenceId\": 3803504\n                }\n            ],\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:23:20+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:23:19+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196137,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196137,\n            \"billingTime\": \"2023-07-18T14:19:50+05:30\",\n            \"billNumber\": \"number-595036657\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000,\n            \"grossAmount\": 100,\n            \"discount\": 10,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"creditNotes\": [\n                {\n                    \"number\": \"numbrwr32434\",\n                    \"amount\": 1800,\n                    \"notes\": \"Reason for credit return\",\n                    \"referenceId\": 2151196137\n                }\n            ],\n            \"paymentModes\": [\n                {\n                    \"amount\": 100,\n                    \"id\": 0,\n                    \"mode\": \"Cash\",\n                    \"notes\": \"\",\n                    \"orgPaymentModeId\": 0\n                }\n            ],\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:19:50+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:19:50+05:30\"\n            }\n        },\n        {\n            \"id\": 3803496,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:19:50+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900,\n            \"grossAmount\": 0,\n            \"discount\": 0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:19:52+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:19:51+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196135,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196135,\n            \"billingTime\": \"2023-07-18T14:19:47+05:30\",\n            \"billNumber\": \"number-83554066\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000,\n            \"grossAmount\": 100,\n            \"discount\": 10,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"creditNotes\": [\n                {\n                    \"number\": \"numbrwr32434\",\n                    \"amount\": 1800,\n                    \"notes\": \"Reason for credit return\",\n                    \"referenceId\": 2151196135\n                }\n            ],\n            \"paymentModes\": [\n                {\n                    \"amount\": 100,\n                    \"id\": 0,\n                    \"mode\": \"Cash\",\n                    \"notes\": \"\",\n                    \"orgPaymentModeId\": 0\n                }\n            ],\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:19:47+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:19:47+05:30\"\n            }\n        },\n        {\n            \"id\": 3803495,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:19:47+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900,\n            \"grossAmount\": 0,\n            \"discount\": 0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:19:48+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:19:47+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196133,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196133,\n            \"billingTime\": \"2023-07-18T14:19:40+05:30\",\n            \"billNumber\": \"number-315540888\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"2 lin1e items\",\n            \"amount\": 50000,\n            \"grossAmount\": 100,\n            \"discount\": 10,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"creditNotes\": [\n                {\n                    \"number\": \"numbrwr32434\",\n                    \"amount\": 1800,\n                    \"notes\": \"Reason for credit return\",\n                    \"referenceId\": 2151196133\n                }\n            ],\n            \"paymentModes\": [\n                {\n                    \"amount\": 100,\n                    \"id\": 0,\n                    \"mode\": \"Cash\",\n                    \"notes\": \"\",\n                    \"orgPaymentModeId\": 0\n                }\n            ],\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:19:40+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:19:41+05:30\"\n            }\n        },\n        {\n            \"id\": 3803491,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 0,\n            \"billingTime\": \"2023-07-18T14:19:40+05:30\",\n            \"billNumber\": \"previousBill1\",\n            \"type\": \"RETURN\",\n            \"returnType\": \"LINE_ITEM\",\n            \"notes\": \"\",\n            \"amount\": 2900,\n            \"grossAmount\": 0,\n            \"discount\": 0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:19:42+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:19:42+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196043,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196043,\n            \"billingTime\": \"2023-07-18T14:11:46+05:30\",\n            \"billNumber\": \"bill - 736\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"paymentModes\": [\n                {\n                    \"amount\": 500,\n                    \"id\": 0,\n                    \"mode\": \"Upi\",\n                    \"notes\": \"notes_6555444\",\n                    \"orgPaymentModeId\": 0\n                }\n            ],\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T14:11:46+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T14:11:45+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196023,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196023,\n            \"billingTime\": \"2023-07-18T13:57:54+05:30\",\n            \"billNumber\": \"bill - 185\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:54+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:54+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196022,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196022,\n            \"billingTime\": \"2023-07-18T13:57:53+05:30\",\n            \"billNumber\": \"bill - 156\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:53+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:53+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196019,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196019,\n            \"billingTime\": \"2023-07-18T13:57:52+05:30\",\n            \"billNumber\": \"bill - 91\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:52+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:51+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196021,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196021,\n            \"billingTime\": \"2023-07-18T13:57:52+05:30\",\n            \"billNumber\": \"bill - 788\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:52+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:52+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196018,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196018,\n            \"billingTime\": \"2023-07-18T13:57:51+05:30\",\n            \"billNumber\": \"bill - 964\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:51+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:51+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196017,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196017,\n            \"billingTime\": \"2023-07-18T13:57:50+05:30\",\n            \"billNumber\": \"bill - 368\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:50+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:50+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196016,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196016,\n            \"billingTime\": \"2023-07-18T13:57:49+05:30\",\n            \"billNumber\": \"bill - 881\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:49+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:48+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196015,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196015,\n            \"billingTime\": \"2023-07-18T13:57:48+05:30\",\n            \"billNumber\": \"bill - 606\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:48+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:47+05:30\"\n            }\n        },\n        {\n            \"id\": 2151196013,\n            \"customerId\": 381894088,\n            \"loyaltyLogId\": 2151196013,\n            \"billingTime\": \"2023-07-18T13:57:47+05:30\",\n            \"billNumber\": \"bill - 631\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"this is test\",\n            \"amount\": 2000,\n            \"grossAmount\": 2000,\n            \"discount\": 1,\n            \"outlierStatus\": \"NORMAL\",\n            \"billingStore\": {\n                \"id\": 50675040,\n                \"code\": \"ahmedabad\",\n                \"description\": \"amd\",\n                \"name\": \"ahmedabad\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isActive\": true,\n                \"isOuEnabled\": false,\n                \"timeZoneId\": -1,\n                \"currencyId\": -1,\n                \"languageId\": -1\n            },\n            \"customFields\": {\n                \"weight\": \"100\"\n            },\n            \"extendedFields\": {\n                \"amount_excluding_tax\": 450,\n                \"cashier_name\": \"bob\"\n            },\n            \"attribution\": {\n                \"createDate\": \"2023-07-18T13:57:47+05:30\",\n                \"createdBy\": {\n                    \"id\": 50675041,\n                    \"code\": \"amd_till\",\n                    \"description\": \"\",\n                    \"name\": \"amd_till\",\n                    \"type\": \"TILL\",\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": -1,\n                    \"currencyId\": -1,\n                    \"languageId\": -1\n                },\n                \"modifiedBy\": {},\n                \"modifiedDate\": \"2023-07-18T13:57:46+05:30\"\n            }\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "embed=BILL_POINTS with alternate currency info": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 20,\n        \"offset\": 0,\n        \"sortBy\": \"BILLING_TIME\",\n        \"sortOrder\": \"DESC\",\n        \"total\": 2\n    },\n    \"data\": [\n        {\n            \"id\": 2151556833,\n            \"customerId\": 383439394,\n            \"loyaltyLogId\": 2151556833,\n            \"billingTime\": \"2024-04-17T05:33:04+05:30\",\n            \"billNumber\": \"billIDv2_86587942\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"v2 Txn Add BLDPTS\",\n            \"amount\": 3000.0,\n            \"grossAmount\": 3250.0,\n            \"discount\": 250.0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billPoints\": {\n                \"pointsBreakup\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"regularPoints\": [\n                            {\n                                \"points\": 1.0,\n                                \"pointsAwardedType\": \"POINT_AWARDED\"\n                            }\n                        ],\n                        \"promisePoints\": [],\n                        \"promoPoints\": []\n                    }\n                ],\n                \"aggregatedBillPoints\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"regularPoints\": {\n                            \"points\": 1.0\n                        },\n                        \"promisePoints\": {\n                            \"points\": 0.0\n                        },\n                        \"promoPoints\": {\n                            \"points\": 0.0\n                        }\n                    }\n                ],\n                \"alternateCurrenciesBreakup\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"alternateCurrenciesBreakups\": [\n                            {\n                                \"identifier\": \"KFRps7\",\n                                \"name\": \"Elixir\",\n                                \"regular\": [\n                                    {\n                                        \"points\": 35.0,\n                                        \"pointsAwardedType\": \"POINT_AWARDED\"\n                                    }\n                                ],\n                                \"promised\": [],\n                                \"promotional\": []\n                            },\n                            {\n                                \"identifier\": \"oq4gqa\",\n                                \"name\": \"Bloodpoints\",\n                                \"regular\": [\n                                    {\n                                        \"points\": 75.0,\n                                        \"pointsAwardedType\": \"POINT_AWARDED\"\n                                    }\n                                ],\n                                \"promised\": [],\n                                \"promotional\": []\n                            }\n                        ]\n                    }\n                ],\n                \"aggregatedBillAlternateCurrencies\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"aggregatedAlternateCurrencies\": [\n                            {\n                                \"identifier\": \"KFRps7\",\n                                \"name\": \"Elixir\",\n                                \"regular\": {\n                                    \"points\": 35.0\n                                },\n                                \"promised\": {\n                                    \"points\": 0.0\n                                },\n                                \"promotional\": {\n                                    \"points\": 0.0\n                                }\n                            },\n                            {\n                                \"identifier\": \"oq4gqa\",\n                                \"name\": \"Bloodpoints\",\n                                \"regular\": {\n                                    \"points\": 75.0\n                                },\n                                \"promised\": {\n                                    \"points\": 0.0\n                                },\n                                \"promotional\": {\n                                    \"points\": 0.0\n                                }\n                            }\n                        ]\n                    }\n                ]\n            }\n        },\n        {\n            \"id\": 2151556831,\n            \"customerId\": 383439394,\n            \"loyaltyLogId\": 2151556831,\n            \"billingTime\": \"2024-04-17T05:32:55+05:30\",\n            \"billNumber\": \"billIDv2_82645849\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"v2 Txn Add PTS BLDPTS\",\n            \"amount\": 3000.0,\n            \"grossAmount\": 3250.0,\n            \"discount\": 250.0,\n            \"outlierStatus\": \"NORMAL\",\n            \"billPoints\": {\n                \"pointsBreakup\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"regularPoints\": [\n                            {\n                                \"points\": 1.0,\n                                \"pointsAwardedType\": \"POINT_AWARDED\"\n                            }\n                        ],\n                        \"promisePoints\": [],\n                        \"promoPoints\": []\n                    }\n                ],\n                \"aggregatedBillPoints\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"regularPoints\": {\n                            \"points\": 1.0\n                        },\n                        \"promisePoints\": {\n                            \"points\": 0.0\n                        },\n                        \"promoPoints\": {\n                            \"points\": 0.0\n                        }\n                    }\n                ],\n                \"alternateCurrenciesBreakup\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"alternateCurrenciesBreakups\": [\n                            {\n                                \"identifier\": \"KFRps7\",\n                                \"name\": \"Elixir\",\n                                \"regular\": [\n                                    {\n                                        \"points\": 35.0,\n                                        \"pointsAwardedType\": \"POINT_AWARDED\"\n                                    }\n                                ],\n                                \"promised\": [],\n                                \"promotional\": []\n                            },\n                            {\n                                \"identifier\": \"oq4gqa\",\n                                \"name\": \"Bloodpoints\",\n                                \"regular\": [\n                                    {\n                                        \"points\": 75.0,\n                                        \"pointsAwardedType\": \"POINT_AWARDED\"\n                                    }\n                                ],\n                                \"promised\": [],\n                                \"promotional\": []\n                            }\n                        ]\n                    }\n                ],\n                \"aggregatedBillAlternateCurrencies\": [\n                    {\n                        \"programName\": \"NirvanaFootwear Loyalty Program\",\n                        \"programId\": 2820,\n                        \"aggregatedAlternateCurrencies\": [\n                            {\n                                \"identifier\": \"KFRps7\",\n                                \"name\": \"Elixir\",\n                                \"regular\": {\n                                    \"points\": 35.0\n                                },\n                                \"promised\": {\n                                    \"points\": 0.0\n                                },\n                                \"promotional\": {\n                                    \"points\": 0.0\n                                }\n                            },\n                            {\n                                \"identifier\": \"oq4gqa\",\n                                \"name\": \"Bloodpoints\",\n                                \"regular\": {\n                                    \"points\": 75.0\n                                },\n                                \"promised\": {\n                                    \"points\": 0.0\n                                },\n                                \"promotional\": {\n                                    \"points\": 0.0\n                                }\n                            }\n                        ]\n                    }\n                ]\n            }\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "embed=BILL_POINTS Alternate currency is disabled": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 20,\n        \"offset\": 0,\n        \"sortBy\": \"BILLING_TIME\",\n        \"sortOrder\": \"DESC\",\n        \"total\": 1\n    },\n    \"data\": [\n        {\n            \"id\": 2151556836,\n            \"customerId\": 383439397,\n            \"loyaltyLogId\": 2151556836,\n            \"billingTime\": \"2024-04-17T05:35:33+05:30\",\n            \"billNumber\": \"billIDv2_95620882\",\n            \"type\": \"REGULAR\",\n            \"notes\": \"v2 Txn Add BLDPTS\",\n            \"amount\": 3000,\n            \"grossAmount\": 3250,\n            \"discount\": 250,\n            \"outlierStatus\": \"NORMAL\",\n            \"billPoints\": {\n                \"pointsBreakup\": [\n                    {\n                        \"programName\": \"Autotest2DefaultProgram\",\n                        \"programId\": 504,\n                        \"regularPoints\": [\n                            {\n                                \"points\": 96.429,\n                                \"pointsAwardedType\": \"POINT_AWARDED_LINEITEM\"\n                            },\n                            {\n                                \"points\": 53.571,\n                                \"pointsAwardedType\": \"POINT_AWARDED_LINEITEM\"\n                            }\n                        ],\n                        \"promisePoints\": [],\n                        \"promoPoints\": []\n                    }\n                ],\n                \"aggregatedBillPoints\": [\n                    {\n                        \"programName\": \"Autotest2DefaultProgram\",\n                        \"programId\": 504,\n                        \"regularPoints\": {\n                            \"points\": 150\n                        },\n                        \"promisePoints\": {\n                            \"points\": 0\n                        },\n                        \"promoPoints\": {\n                            \"points\": 0\n                        }\n                    }\n                ]\n            }\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "Sample response with startId and endId": {
                    "summary": "Sample response with startId and endId",
                    "value": {
                      "pagination": {
                        "limit": 20,
                        "offset": 0,
                        "sortBy": "BILLING_TIME",
                        "sortOrder": "DESC",
                        "total": 3
                      },
                      "data": [
                        {
                          "id": 884653716,
                          "customerId": 566881933,
                          "loyaltyLogId": 884653716,
                          "billingTime": "2025-04-02T12:47:05Z",
                          "billNumber": "trans-2",
                          "type": "REGULAR",
                          "notes": "customer returning",
                          "amount": 2000,
                          "grossAmount": 1000,
                          "discount": 10,
                          "outlierStatus": "NORMAL"
                        },
                        {
                          "id": 884653807,
                          "customerId": 566881933,
                          "loyaltyLogId": 884653807,
                          "billingTime": "2025-04-02T12:47:05Z",
                          "billNumber": "trans-3",
                          "type": "REGULAR",
                          "notes": "customer returning",
                          "amount": 10000,
                          "grossAmount": 1000,
                          "discount": 10,
                          "outlierStatus": "NORMAL"
                        },
                        {
                          "id": 884654008,
                          "customerId": 566881933,
                          "loyaltyLogId": 884654008,
                          "billingTime": "2025-04-01T17:38:49Z",
                          "billNumber": "trans-5",
                          "type": "REGULAR",
                          "notes": "This is a transaction",
                          "amount": 1000,
                          "grossAmount": 1000,
                          "discount": 0,
                          "outlierStatus": "NORMAL"
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "Sample response with transactionIds and embed=TRANSACTION_IDENTIFIER": {
                    "summary": "Sample response with transactionIds and embed=TRANSACTION_IDENTIFIER",
                    "value": {
                      "pagination": {
                        "limit": 20,
                        "offset": 0,
                        "sortBy": "BILLING_TIME",
                        "sortOrder": "DESC",
                        "total": 4
                      },
                      "data": [
                        {
                          "id": 884653716,
                          "customerId": 566881933,
                          "loyaltyLogId": 884653716,
                          "billingTime": "2025-04-02T12:47:05Z",
                          "billNumber": "trans-2",
                          "type": "REGULAR",
                          "notes": "customer returning",
                          "amount": 2000,
                          "grossAmount": 1000,
                          "discount": 10,
                          "outlierStatus": "NORMAL",
                          "txnIdentifiers": [
                            {
                              "type": "mobile",
                              "value": "919074794320"
                            }
                          ]
                        },
                        {
                          "id": 884654530,
                          "customerId": 566881933,
                          "loyaltyLogId": 884654530,
                          "billingTime": "2025-04-02T12:47:05Z",
                          "billNumber": "trans-7",
                          "type": "REGULAR",
                          "notes": "customer returning",
                          "amount": 2000,
                          "grossAmount": 1000,
                          "discount": 10,
                          "outlierStatus": "NORMAL",
                          "txnIdentifiers": [
                            {
                              "type": "mobile",
                              "value": "919074794320"
                            }
                          ]
                        },
                        {
                          "id": 891887252,
                          "customerId": 566881933,
                          "loyaltyLogId": 891887252,
                          "billingTime": "2025-04-02T12:47:05Z",
                          "billNumber": "test_jo transaction2",
                          "type": "REGULAR",
                          "notes": "customer returning",
                          "amount": 2000,
                          "grossAmount": 1000,
                          "discount": 10,
                          "outlierStatus": "NORMAL",
                          "txnIdentifiers": []
                        },
                        {
                          "id": 893010296,
                          "customerId": 566881933,
                          "loyaltyLogId": 893010296,
                          "billingTime": "2025-04-02T12:47:05Z",
                          "billNumber": "test_joTtransaction2",
                          "type": "REGULAR",
                          "notes": "customer returning",
                          "amount": 2000,
                          "grossAmount": 1000,
                          "discount": 10,
                          "outlierStatus": "NORMAL",
                          "txnIdentifiers": [
                            {
                              "type": "mobile",
                              "value": "1234512345"
                            }
                          ]
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "Sample response with bill number": {
                    "summary": "Sample response with bill number",
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
                          "id": 884653716,
                          "customerId": 566881933,
                          "loyaltyLogId": 884653716,
                          "billingTime": "2025-04-02T12:47:05Z",
                          "billNumber": "trans-2",
                          "type": "REGULAR",
                          "notes": "customer returning",
                          "amount": 2000,
                          "grossAmount": 1000,
                          "discount": 10,
                          "outlierStatus": "NORMAL"
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
                      "title": "SAMPLE RESPONSE",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 20,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "BILLING_TIME"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 108,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 2151202228,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 381894088,
                                "default": 0
                              },
                              "loyaltyLogId": {
                                "type": "integer",
                                "example": 2151202228,
                                "default": 0
                              },
                              "billingTime": {
                                "type": "string",
                                "example": "2023-07-21T14:34:53+05:30"
                              },
                              "billNumber": {
                                "type": "string",
                                "example": "bill - 497607799"
                              },
                              "type": {
                                "type": "string",
                                "example": "REGULAR"
                              },
                              "notes": {
                                "type": "string",
                                "example": "this is test"
                              },
                              "amount": {
                                "type": "integer",
                                "example": 3000,
                                "default": 0
                              },
                              "grossAmount": {
                                "type": "integer",
                                "example": 3000,
                                "default": 0
                              },
                              "discount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "outlierStatus": {
                                "type": "string",
                                "example": "NORMAL"
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
                      "title": "With EMBED=BILL_CF, BILL_EF, ATTRIBUTION, PAYMENT_MODES, CREDIT_NOTES, BILL_STORE_DETAILS",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 20,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "BILLING_TIME"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 107,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 3803508,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 381894088,
                                "default": 0
                              },
                              "loyaltyLogId": {
                                "type": "integer",
                                "example": 2151195802,
                                "default": 0
                              },
                              "billingTime": {
                                "type": "string",
                                "example": "2023-07-18T14:28:58+05:30"
                              },
                              "billNumber": {
                                "type": "string",
                                "example": "bill - 730"
                              },
                              "type": {
                                "type": "string",
                                "example": "RETURN"
                              },
                              "returnType": {
                                "type": "string",
                                "example": "FULL"
                              },
                              "notes": {
                                "type": "string",
                                "example": "bill with note"
                              },
                              "amount": {
                                "type": "integer",
                                "example": 2000,
                                "default": 0
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
                              "outlierStatus": {
                                "type": "string",
                                "example": "NORMAL"
                              },
                              "billingStore": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 50675040,
                                    "default": 0
                                  },
                                  "code": {
                                    "type": "string",
                                    "example": "ahmedabad"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": "amd"
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "ahmedabad"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "STORE"
                                  },
                                  "adminType": {
                                    "type": "string",
                                    "example": "GENERAL"
                                  },
                                  "isActive": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "isOuEnabled": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "timeZoneId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  },
                                  "currencyId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  },
                                  "languageId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  }
                                }
                              },
                              "extendedFields": {
                                "type": "object",
                                "properties": {
                                  "CentralGST": {
                                    "type": "integer",
                                    "example": 6,
                                    "default": 0
                                  },
                                  "StateGST": {
                                    "type": "integer",
                                    "example": 6,
                                    "default": 0
                                  },
                                  "amount_excluding_tax": {
                                    "type": "integer",
                                    "example": 100,
                                    "default": 0
                                  }
                                }
                              },
                              "creditNotes": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "number": {
                                      "type": "string",
                                      "example": "numbrwr32434"
                                    },
                                    "amount": {
                                      "type": "integer",
                                      "example": 1800,
                                      "default": 0
                                    },
                                    "notes": {
                                      "type": "string",
                                      "example": "Reason for credit return"
                                    },
                                    "referenceId": {
                                      "type": "integer",
                                      "example": 3803508,
                                      "default": 0
                                    }
                                  }
                                }
                              },
                              "attribution": {
                                "type": "object",
                                "properties": {
                                  "createDate": {
                                    "type": "string",
                                    "example": "2023-07-18T14:28:58+05:30"
                                  },
                                  "createdBy": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "integer",
                                        "example": 50675041,
                                        "default": 0
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "amd_till"
                                      },
                                      "description": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "name": {
                                        "type": "string",
                                        "example": "amd_till"
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "TILL"
                                      },
                                      "adminType": {
                                        "type": "string",
                                        "example": "GENERAL"
                                      },
                                      "isActive": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "isOuEnabled": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "timeZoneId": {
                                        "type": "integer",
                                        "example": -1,
                                        "default": 0
                                      },
                                      "currencyId": {
                                        "type": "integer",
                                        "example": -1,
                                        "default": 0
                                      },
                                      "languageId": {
                                        "type": "integer",
                                        "example": -1,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "modifiedBy": {
                                    "type": "object",
                                    "properties": {}
                                  },
                                  "modifiedDate": {
                                    "type": "string",
                                    "example": "2023-07-18T14:28:58+05:30"
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
                        }
                      }
                    },
                    {
                      "title": "embed=BILL_POINTS with alternate currency info",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 20,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "BILLING_TIME"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 2151556833,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 383439394,
                                "default": 0
                              },
                              "loyaltyLogId": {
                                "type": "integer",
                                "example": 2151556833,
                                "default": 0
                              },
                              "billingTime": {
                                "type": "string",
                                "example": "2024-04-17T05:33:04+05:30"
                              },
                              "billNumber": {
                                "type": "string",
                                "example": "billIDv2_86587942"
                              },
                              "type": {
                                "type": "string",
                                "example": "REGULAR"
                              },
                              "notes": {
                                "type": "string",
                                "example": "v2 Txn Add BLDPTS"
                              },
                              "amount": {
                                "type": "integer",
                                "example": 3000,
                                "default": 0
                              },
                              "grossAmount": {
                                "type": "integer",
                                "example": 3250,
                                "default": 0
                              },
                              "discount": {
                                "type": "integer",
                                "example": 250,
                                "default": 0
                              },
                              "outlierStatus": {
                                "type": "string",
                                "example": "NORMAL"
                              },
                              "billPoints": {
                                "type": "object",
                                "properties": {
                                  "pointsBreakup": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "programName": {
                                          "type": "string",
                                          "example": "NirvanaFootwear Loyalty Program"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 2820,
                                          "default": 0
                                        },
                                        "regularPoints": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "points": {
                                                "type": "integer",
                                                "example": 1,
                                                "default": 0
                                              },
                                              "pointsAwardedType": {
                                                "type": "string",
                                                "example": "POINT_AWARDED"
                                              }
                                            }
                                          }
                                        },
                                        "promisePoints": {
                                          "type": "array"
                                        },
                                        "promoPoints": {
                                          "type": "array"
                                        }
                                      }
                                    }
                                  },
                                  "aggregatedBillPoints": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "programName": {
                                          "type": "string",
                                          "example": "NirvanaFootwear Loyalty Program"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 2820,
                                          "default": 0
                                        },
                                        "regularPoints": {
                                          "type": "object",
                                          "properties": {
                                            "points": {
                                              "type": "integer",
                                              "example": 1,
                                              "default": 0
                                            }
                                          }
                                        },
                                        "promisePoints": {
                                          "type": "object",
                                          "properties": {
                                            "points": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            }
                                          }
                                        },
                                        "promoPoints": {
                                          "type": "object",
                                          "properties": {
                                            "points": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "alternateCurrenciesBreakup": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "programName": {
                                          "type": "string",
                                          "example": "NirvanaFootwear Loyalty Program"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 2820,
                                          "default": 0
                                        },
                                        "alternateCurrenciesBreakups": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "identifier": {
                                                "type": "string",
                                                "example": "KFRps7"
                                              },
                                              "name": {
                                                "type": "string",
                                                "example": "Elixir"
                                              },
                                              "regular": {
                                                "type": "array",
                                                "items": {
                                                  "type": "object",
                                                  "properties": {
                                                    "points": {
                                                      "type": "integer",
                                                      "example": 35,
                                                      "default": 0
                                                    },
                                                    "pointsAwardedType": {
                                                      "type": "string",
                                                      "example": "POINT_AWARDED"
                                                    }
                                                  }
                                                }
                                              },
                                              "promised": {
                                                "type": "array"
                                              },
                                              "promotional": {
                                                "type": "array"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "aggregatedBillAlternateCurrencies": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "programName": {
                                          "type": "string",
                                          "example": "NirvanaFootwear Loyalty Program"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 2820,
                                          "default": 0
                                        },
                                        "aggregatedAlternateCurrencies": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "identifier": {
                                                "type": "string",
                                                "example": "KFRps7"
                                              },
                                              "name": {
                                                "type": "string",
                                                "example": "Elixir"
                                              },
                                              "regular": {
                                                "type": "object",
                                                "properties": {
                                                  "points": {
                                                    "type": "integer",
                                                    "example": 35,
                                                    "default": 0
                                                  }
                                                }
                                              },
                                              "promised": {
                                                "type": "object",
                                                "properties": {
                                                  "points": {
                                                    "type": "integer",
                                                    "example": 0,
                                                    "default": 0
                                                  }
                                                }
                                              },
                                              "promotional": {
                                                "type": "object",
                                                "properties": {
                                                  "points": {
                                                    "type": "integer",
                                                    "example": 0,
                                                    "default": 0
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
                      "title": "embed=BILL_POINTS Alternate currency is disabled",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 20,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "BILLING_TIME"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 2151556836,
                                "default": 0
                              },
                              "customerId": {
                                "type": "integer",
                                "example": 383439397,
                                "default": 0
                              },
                              "loyaltyLogId": {
                                "type": "integer",
                                "example": 2151556836,
                                "default": 0
                              },
                              "billingTime": {
                                "type": "string",
                                "example": "2024-04-17T05:35:33+05:30"
                              },
                              "billNumber": {
                                "type": "string",
                                "example": "billIDv2_95620882"
                              },
                              "type": {
                                "type": "string",
                                "example": "REGULAR"
                              },
                              "notes": {
                                "type": "string",
                                "example": "v2 Txn Add BLDPTS"
                              },
                              "amount": {
                                "type": "integer",
                                "example": 3000,
                                "default": 0
                              },
                              "grossAmount": {
                                "type": "integer",
                                "example": 3250,
                                "default": 0
                              },
                              "discount": {
                                "type": "integer",
                                "example": 250,
                                "default": 0
                              },
                              "outlierStatus": {
                                "type": "string",
                                "example": "NORMAL"
                              },
                              "billPoints": {
                                "type": "object",
                                "properties": {
                                  "pointsBreakup": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "programName": {
                                          "type": "string",
                                          "example": "Autotest2DefaultProgram"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 504,
                                          "default": 0
                                        },
                                        "regularPoints": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "points": {
                                                "type": "number",
                                                "example": 96.429,
                                                "default": 0
                                              },
                                              "pointsAwardedType": {
                                                "type": "string",
                                                "example": "POINT_AWARDED_LINEITEM"
                                              }
                                            }
                                          }
                                        },
                                        "promisePoints": {
                                          "type": "array"
                                        },
                                        "promoPoints": {
                                          "type": "array"
                                        }
                                      }
                                    }
                                  },
                                  "aggregatedBillPoints": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "programName": {
                                          "type": "string",
                                          "example": "Autotest2DefaultProgram"
                                        },
                                        "programId": {
                                          "type": "integer",
                                          "example": 504,
                                          "default": 0
                                        },
                                        "regularPoints": {
                                          "type": "object",
                                          "properties": {
                                            "points": {
                                              "type": "integer",
                                              "example": 150,
                                              "default": 0
                                            }
                                          }
                                        },
                                        "promisePoints": {
                                          "type": "object",
                                          "properties": {
                                            "points": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
                                            }
                                          }
                                        },
                                        "promoPoints": {
                                          "type": "object",
                                          "properties": {
                                            "points": {
                                              "type": "integer",
                                              "example": 0,
                                              "default": 0
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
              "code": "https://nightly.api.capillarytech.com/v2/customers/381894088/transactions?transactionType=ALL&embed=BILL_CF, BILL_EF, ATTRIBUTION, PAYMENT_MODES, CREDIT_NOTES, BILL_STORE_DETAILS&startDate=2023-07-21&endDate=2023-07-22"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/566881933/transactions?startDate=2024-04-02T12%3A47%3A05Z&endDate=2025-04-02T12%3A47%3A05Z&startId=884653716&endId=884654008' \\\n--header 'Authorization: Basic ZlYTI0YTYyZTZm' \\\n--header 'Cookie: _cfuvid=JGc1YGoLsL2DRiBXDIj6V5Be4X7XxM1crVO5RoLlqEI-1768379224394-0.0.1.1-604800000' \\\n--data ''",
              "language": "shell",
              "name": "Sample request with startID and endId"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/566881933/transactions?transactionId=893010296%2C891887252%2C884653716%2C884654530&embed=TRANSACTION_IDENTIFIER' \\\n--header 'Authorization: Basic ZGI0YTYyZTZm' \\\n--header 'Cookie: _cfuvid=JGc1YGoLsL2DRiBXDIj6V5Be4X7XxM1crVO5RoLlqEI-1768379224394-0.0.1.1-604800000' \\\n--data ''",
              "language": "shell",
              "name": "Sample request with transactionIDs and embed= TRANSACTION_IDENTIFIER"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/566881933/transactions?number=trans-2' \\\n--header 'Authorization: Basic Z2eWFfZGZTZm' \\\n--header 'Cookie: _cfuvid=JGc1YGoLsL2DRiBXDIj6V5Be4X7XxM1crVO5RoLlqEI-1768379224394-0.0.1.1-604800000' \\\n--data ''",
              "language": "shell",
              "name": "Sample request with bill number"
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