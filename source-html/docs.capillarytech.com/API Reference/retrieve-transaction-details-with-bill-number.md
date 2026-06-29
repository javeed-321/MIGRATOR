> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get transaction details using bill number

This API allows you to retrieve transaction details using bill number.

# Example request

```
curl --location 'https://eu.api.capillarytech.com/v2/transactions/getByBillNumber/testTZ1' \
--header 'Authorization: Basic bmhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=7hXrm0hlY6PK.uIUfWNV_NmfVOT4Cmsn.3jaI1blBUo-1760427011419-0.0.1.1-604800000; _cfuvid=rPQf0Z6NuvUQE_hHRmEP_FquSuw6yCBFG0acII_6b0s-1769169957411-0.0.1.1-604800000'
```

# Example response

```
{
    "pagination": {
        "limit": 100,
        "offset": 0,
        "total": 1
    },
    "data": [
        {
            "useDefaultFleetGroup": false,
            "loyaltiesPointDetails": [],
            "billPointsBreakup": [],
            "attribution": {
                "createDate": "2026-01-23T03:30:00Z",
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
                "modifiedDate": "2026-01-23T10:19:54Z"
            },
            "billDetails": {
                "amount": 2000,
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
                "billNumber": "testTZ1",
                "billingTime": "2026-01-23T03:30:00Z",
                "discount": 0,
                "grossAmount": 2000,
                "note": "Regular Tranasction number 114 reaching 100% of the enrolled milestone value for the day",
                "returnDetails": {
                    "canceled": false
                },
                "niReturnDetails": {},
                "invalidBill": false,
                "billingTimeInputOffset": "+05:30"
            },
            "customFields": {
                "booking_date": "2025-07-30",
                "origin": "instore",
                "paymentmode": "card"
            },
            "source": "instore",
            "addWithLocalCurrency": false,
            "async": false,
            "useV2": false,
            "simulation": false,
            "customerId": 564582355,
            "deliveryStatus": "DELIVERED",
            "id": 896772991,
            "lineItems": [
                {
                    "id": 4049944215,
                    "customerId": 0,
                    "details": {
                        "amount": 2000,
                        "description": "Wood Table",
                        "discount": 0,
                        "itemCode": "model_id_003",
                        "qty": 1,
                        "rate": 2000,
                        "serial": 0,
                        "value": 2000,
                        "returnable": true,
                        "returnableDays": -1,
                        "attributes": {},
                        "extendedFields": {},
                        "newExtendedFields": {},
                        "attributesSet": []
                    },
                    "outlierStatus": "NORMAL",
                    "returnDetails": {},
                    "valid": true,
                    "returnLineItemsDtos": [],
                    "niReturnLineItemsDtos": [],
                    "addonDetails": [],
                    "splitItemsDetails": [],
                    "niReturn": false
                }
            ],
            "outlierStatus": "NORMAL",
            "type": "REGULAR",
            "warnings": [],
            "lifeTimePurchases": 0,
            "ignorePoints": false,
            "extendedFields": {
                "event_input_date_offset": "+05:30"
            },
            "autoUpdateTime": "2026-01-23T10:19:54Z",
            "niReturnDetails": {},
            "basketSize": 1,
            "retroTxn": false,
            "returnDetails": {
                "canceled": false
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

<br />

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
        pagination
      </td>

      <td>
        Object
      </td>

      <td>
        Contains pagination details for the response.
      </td>
    </tr>

    <tr>
      <td>
        • limit
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of records to return per page.
      </td>
    </tr>

    <tr>
      <td>
        • offset
      </td>

      <td>
        Integer
      </td>

      <td>
        Starting index of records for the current page.
      </td>
    </tr>

    <tr>
      <td>
        • total
      </td>

      <td>
        Integer
      </td>

      <td>
        Total number of records available.
      </td>
    </tr>

    <tr>
      <td>
        data
      </td>

      <td>
        Array
      </td>

      <td>
        List of transaction or bill objects.
      </td>
    </tr>

    <tr>
      <td>
        • id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier for the transaction record.
      </td>
    </tr>

    <tr>
      <td>
        • customerId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the customer associated with the transaction.
      </td>
    </tr>

    <tr>
      <td>
        • source
      </td>

      <td>
        String
      </td>

      <td>
        Source of the transaction (for example, `instore`).
      </td>
    </tr>

    <tr>
      <td>
        • type
      </td>

      <td>
        String
      </td>

      <td>
        Type of transaction (for example, `REGULAR`).
      </td>
    </tr>

    <tr>
      <td>
        • deliveryStatus
      </td>

      <td>
        String
      </td>

      <td>
        Current delivery status of the order (for example, `DELIVERED`).
      </td>
    </tr>

    <tr>
      <td>
        • outlierStatus
      </td>

      <td>
        String
      </td>

      <td>
        Indicates whether the transaction is an outlier (for example, `NORMAL`).
      </td>
    </tr>

    <tr>
      <td>
        • basketSize
      </td>

      <td>
        Integer
      </td>

      <td>
        Total number of items in the transaction.
      </td>
    </tr>

    <tr>
      <td>
        • billDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains financial and timing details of the bill.
      </td>
    </tr>

    <tr>
      <td>
        ••• amount
      </td>

      <td>
        Double
      </td>

      <td>
        Net amount of the bill.
      </td>
    </tr>

    <tr>
      <td>
        ••• grossAmount
      </td>

      <td>
        Double
      </td>

      <td>
        Total amount before discounts.
      </td>
    </tr>

    <tr>
      <td>
        ••• billNumber
      </td>

      <td>
        String
      </td>

      <td>
        Receipt or bill number.
      </td>
    </tr>

    <tr>
      <td>
        ••• billingTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the bill creation date and time in ISO 8601 format, returned in the server time zone.

        **EU server example**
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        ••• billingTimeInputOffset
      </td>

      <td>
        String
      </td>

      <td>
        Preserves the original local timezone offset in which the transaction happened (`billingDate` in the Add transaction ).
      </td>
    </tr>

    <tr>
      <td>
        ••• note
      </td>

      <td>
        String
      </td>

      <td>
        Internal notes or comments for the transaction.
      </td>
    </tr>

    <tr>
      <td>
        ••• billingStore
      </td>

      <td>
        Object
      </td>

      <td>
        Store where the transaction occurred.
      </td>
    </tr>

    <tr>
      <td>
        •••• id
      </td>

      <td>
        Long
      </td>

      <td>
        Store identifier.
      </td>
    </tr>

    <tr>
      <td>
        •••• code
      </td>

      <td>
        String
      </td>

      <td>
        Internal store code.
      </td>
    </tr>

    <tr>
      <td>
        •••• name
      </td>

      <td>
        String
      </td>

      <td>
        Display name of the store.
      </td>
    </tr>

    <tr>
      <td>
        • attribution
      </td>

      <td>
        Object
      </td>

      <td>
        Audit information for record creation and modification.
      </td>
    </tr>

    <tr>
      <td>
        ••• createDate
      </td>

      <td>
        ISO-8601
      </td>

      <td>
        Timestamp when the record was created.
      </td>
    </tr>

    <tr>
      <td>
        ••• modifiedDate
      </td>

      <td>
        ISO-8601
      </td>

      <td>
        Timestamp of the last modification in ISO 8601 format, returned in the server time zone.

        EU server example 2026-01-27T10:22:45Z → 27 January 2026, 10:22:45 (UTC)

        India server example 2026-01-27T15:52:45+05:30 → 27 January 2026, 15:52:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        • lineItems
      </td>

      <td>
        Array
      </td>

      <td>
        Breakdown of individual items in the transaction.
      </td>
    </tr>

    <tr>
      <td>
        ••• id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier for the line item.
      </td>
    </tr>

    <tr>
      <td>
        ••• details
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the line item.
      </td>
    </tr>

    <tr>
      <td>
        •••• itemCode
      </td>

      <td>
        String
      </td>

      <td>
        Product SKU or item code.
      </td>
    </tr>

    <tr>
      <td>
        •••• qty
      </td>

      <td>
        Integer
      </td>

      <td>
        Quantity purchased.
      </td>
    </tr>

    <tr>
      <td>
        •••• rate
      </td>

      <td>
        Double
      </td>

      <td>
        Unit price of the item.
      </td>
    </tr>

    <tr>
      <td>
        •••• amount
      </td>

      <td>
        Double
      </td>

      <td>
        Total amount for the line item (qty × rate).
      </td>
    </tr>

    <tr>
      <td>
        • customFields
      </td>

      <td>
        Object
      </td>

      <td>
        User-defined metadata (for example, payment mode, origin).
      </td>
    </tr>

    <tr>
      <td>
        • extendedFields
      </td>

      <td>
        Object
      </td>

      <td>
        System-level metadata (for example, event input date offset).
      </td>
    </tr>

    <tr>
      <td>
        • async
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the request was processed asynchronously.
      </td>
    </tr>

    <tr>
      <td>
        • simulation
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether this is a simulated transaction.
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
        List of warning messages returned by the API.
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
        List of error messages returned by the API, if any.
      </td>
    </tr>
  </tbody>
</Table>

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
    "/transactions/getByBillNumber/{bill_number}": {
      "get": {
        "summary": "Get transaction details using bill number",
        "description": "This API allows you to retrieve transaction details using bill number.",
        "operationId": "retrieve-transaction-details-with-bill-number",
        "parameters": [
          {
            "name": "bill_number",
            "in": "path",
            "description": "Enter the bill number.",
            "schema": {
              "type": "string"
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
                  "Result": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 100,\n        \"offset\": 0,\n        \"total\": 1\n    },\n    \"data\": [\n        {\n            \"useDefaultFleetGroup\": false,\n            \"loyaltiesPointDetails\": [],\n            \"billPointsBreakup\": [],\n            \"attribution\": {\n                \"createDate\": \"2025-02-14T05:44:15Z\",\n                \"createdBy\": {\n                    \"id\": 75155297,\n                    \"code\": \"tj_capillary\",\n                    \"description\": \"\",\n                    \"name\": \"tj_capillary\",\n                    \"type\": \"TILL\",\n                    \"referenceId\": -1,\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": 191,\n                    \"currencyId\": 95,\n                    \"languageId\": 148,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-02-14T09:53:23Z\"\n            },\n            \"billDetails\": {\n                \"amount\": 6000.0,\n                \"billingStore\": {\n                    \"id\": 75152715,\n                    \"code\": \"doc123\",\n                    \"description\": \"\",\n                    \"name\": \"DocStore\",\n                    \"type\": \"STORE\",\n                    \"referenceId\": -1,\n                    \"adminType\": \"GENERAL\",\n                    \"isActive\": true,\n                    \"isOuEnabled\": false,\n                    \"timeZoneId\": 191,\n                    \"currencyId\": 95,\n                    \"languageId\": 148,\n                    \"default\": false\n                },\n                \"billNumber\": \"test00transact053\",\n                \"billingTime\": \"2025-02-14T05:44:15Z\",\n                \"discount\": 0.0,\n                \"grossAmount\": 6000.0,\n                \"note\": \"This is transaction number 52\",\n                \"returnDetails\": {\n                    \"canceled\": false\n                },\n                \"niReturnDetails\": {},\n                \"invalidBill\": false\n            },\n            \"customFields\": {},\n            \"source\": \"instore\",\n            \"addWithLocalCurrency\": false,\n            \"async\": false,\n            \"useV2\": false,\n            \"simulation\": false,\n            \"customerId\": 564703252,\n            \"deliveryStatus\": \"DELIVERED\",\n            \"id\": 882042894,\n            \"lineItems\": [\n                {\n                    \"id\": 3996184704,\n                    \"customerId\": 0,\n                    \"details\": {\n                        \"amount\": 2000.0,\n                        \"description\": \"Steel Bottle\",\n                        \"discount\": 0.0,\n                        \"itemCode\": \"model_id_001\",\n                        \"qty\": 4.0,\n                        \"rate\": 500.0,\n                        \"serial\": 0,\n                        \"value\": 2000.0,\n                        \"returnable\": true,\n                        \"returnableDays\": -1,\n                        \"attributes\": {},\n                        \"extendedFields\": {},\n                        \"newExtendedFields\": {},\n                        \"attributesSet\": []\n                    },\n                    \"outlierStatus\": \"NORMAL\",\n                    \"returnDetails\": {},\n                    \"valid\": true,\n                    \"returnLineItemsDtos\": [],\n                    \"niReturnLineItemsDtos\": [],\n                    \"addonDetails\": [],\n                    \"splitItemsDetails\": [],\n                    \"niReturn\": false\n                },\n                {\n                    \"id\": 3996184705,\n                    \"customerId\": 0,\n                    \"details\": {\n                        \"amount\": 2000.0,\n                        \"description\": \"Sports Shoe\",\n                        \"discount\": 0.0,\n                        \"itemCode\": \"model_id_002\",\n                        \"qty\": 2.0,\n                        \"rate\": 1000.0,\n                        \"serial\": 0,\n                        \"value\": 2000.0,\n                        \"returnable\": true,\n                        \"returnableDays\": -1,\n                        \"attributes\": {},\n                        \"extendedFields\": {},\n                        \"newExtendedFields\": {},\n                        \"attributesSet\": []\n                    },\n                    \"outlierStatus\": \"NORMAL\",\n                    \"returnDetails\": {},\n                    \"valid\": true,\n                    \"returnLineItemsDtos\": [],\n                    \"niReturnLineItemsDtos\": [],\n                    \"addonDetails\": [],\n                    \"splitItemsDetails\": [],\n                    \"niReturn\": false\n                },\n                {\n                    \"id\": 3996184706,\n                    \"customerId\": 0,\n                    \"details\": {\n                        \"amount\": 2000.0,\n                        \"description\": \"Wood Table\",\n                        \"discount\": 0.0,\n                        \"itemCode\": \"model_id_001\",\n                        \"qty\": 1.0,\n                        \"rate\": 2000.0,\n                        \"serial\": 0,\n                        \"value\": 2000.0,\n                        \"returnable\": true,\n                        \"returnableDays\": -1,\n                        \"attributes\": {},\n                        \"extendedFields\": {},\n                        \"newExtendedFields\": {},\n                        \"attributesSet\": []\n                    },\n                    \"outlierStatus\": \"NORMAL\",\n                    \"returnDetails\": {},\n                    \"valid\": true,\n                    \"returnLineItemsDtos\": [],\n                    \"niReturnLineItemsDtos\": [],\n                    \"addonDetails\": [],\n                    \"splitItemsDetails\": [],\n                    \"niReturn\": false\n                }\n            ],\n            \"outlierStatus\": \"NORMAL\",\n            \"type\": \"REGULAR\",\n            \"warnings\": [],\n            \"lifeTimePurchases\": 0,\n            \"ignorePoints\": false,\n            \"extendedFields\": {},\n            \"autoUpdateTime\": \"2025-02-14T09:53:23Z\",\n            \"retroTxn\": false,\n            \"returnDetails\": {\n                \"canceled\": false\n            },\n            \"niReturnDetails\": {},\n            \"basketSize\": 7.0\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "pagination": {
                      "type": "object",
                      "properties": {
                        "limit": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "offset": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
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
                          "useDefaultFleetGroup": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "loyaltiesPointDetails": {
                            "type": "array"
                          },
                          "billPointsBreakup": {
                            "type": "array"
                          },
                          "attribution": {
                            "type": "object",
                            "properties": {
                              "createDate": {
                                "type": "string",
                                "example": "2025-02-14T05:44:15Z"
                              },
                              "createdBy": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 75155297,
                                    "default": 0
                                  },
                                  "code": {
                                    "type": "string",
                                    "example": "tj_capillary"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "tj_capillary"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "TILL"
                                  },
                                  "referenceId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
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
                                    "example": 191,
                                    "default": 0
                                  },
                                  "currencyId": {
                                    "type": "integer",
                                    "example": 95,
                                    "default": 0
                                  },
                                  "languageId": {
                                    "type": "integer",
                                    "example": 148,
                                    "default": 0
                                  },
                                  "default": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "modifiedBy": {
                                "type": "object",
                                "properties": {
                                  "referenceId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  },
                                  "default": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "modifiedDate": {
                                "type": "string",
                                "example": "2025-02-14T09:53:23Z"
                              }
                            }
                          },
                          "billDetails": {
                            "type": "object",
                            "properties": {
                              "amount": {
                                "type": "integer",
                                "example": 6000,
                                "default": 0
                              },
                              "billingStore": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 75152715,
                                    "default": 0
                                  },
                                  "code": {
                                    "type": "string",
                                    "example": "doc123"
                                  },
                                  "description": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "name": {
                                    "type": "string",
                                    "example": "DocStore"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "STORE"
                                  },
                                  "referenceId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
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
                                    "example": 191,
                                    "default": 0
                                  },
                                  "currencyId": {
                                    "type": "integer",
                                    "example": 95,
                                    "default": 0
                                  },
                                  "languageId": {
                                    "type": "integer",
                                    "example": 148,
                                    "default": 0
                                  },
                                  "default": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "billNumber": {
                                "type": "string",
                                "example": "test00transact053"
                              },
                              "billingTime": {
                                "type": "string",
                                "example": "2025-02-14T05:44:15Z"
                              },
                              "discount": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "grossAmount": {
                                "type": "integer",
                                "example": 6000,
                                "default": 0
                              },
                              "note": {
                                "type": "string",
                                "example": "This is transaction number 52"
                              },
                              "returnDetails": {
                                "type": "object",
                                "properties": {
                                  "canceled": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "niReturnDetails": {
                                "type": "object",
                                "properties": {}
                              },
                              "invalidBill": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "customFields": {
                            "type": "object",
                            "properties": {}
                          },
                          "source": {
                            "type": "string",
                            "example": "instore"
                          },
                          "addWithLocalCurrency": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "async": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "useV2": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "simulation": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "customerId": {
                            "type": "integer",
                            "example": 564703252,
                            "default": 0
                          },
                          "deliveryStatus": {
                            "type": "string",
                            "example": "DELIVERED"
                          },
                          "id": {
                            "type": "integer",
                            "example": 882042894,
                            "default": 0
                          },
                          "lineItems": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "integer",
                                  "example": 3996184704,
                                  "default": 0
                                },
                                "customerId": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "details": {
                                  "type": "object",
                                  "properties": {
                                    "amount": {
                                      "type": "integer",
                                      "example": 2000,
                                      "default": 0
                                    },
                                    "description": {
                                      "type": "string",
                                      "example": "Steel Bottle"
                                    },
                                    "discount": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "itemCode": {
                                      "type": "string",
                                      "example": "model_id_001"
                                    },
                                    "qty": {
                                      "type": "integer",
                                      "example": 4,
                                      "default": 0
                                    },
                                    "rate": {
                                      "type": "integer",
                                      "example": 500,
                                      "default": 0
                                    },
                                    "serial": {
                                      "type": "integer",
                                      "example": 0,
                                      "default": 0
                                    },
                                    "value": {
                                      "type": "integer",
                                      "example": 2000,
                                      "default": 0
                                    },
                                    "returnable": {
                                      "type": "boolean",
                                      "example": true,
                                      "default": true
                                    },
                                    "returnableDays": {
                                      "type": "integer",
                                      "example": -1,
                                      "default": 0
                                    },
                                    "attributes": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "extendedFields": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "newExtendedFields": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "attributesSet": {
                                      "type": "array"
                                    }
                                  }
                                },
                                "outlierStatus": {
                                  "type": "string",
                                  "example": "NORMAL"
                                },
                                "returnDetails": {
                                  "type": "object",
                                  "properties": {}
                                },
                                "valid": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "returnLineItemsDtos": {
                                  "type": "array"
                                },
                                "niReturnLineItemsDtos": {
                                  "type": "array"
                                },
                                "addonDetails": {
                                  "type": "array"
                                },
                                "splitItemsDetails": {
                                  "type": "array"
                                },
                                "niReturn": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                }
                              }
                            }
                          },
                          "outlierStatus": {
                            "type": "string",
                            "example": "NORMAL"
                          },
                          "type": {
                            "type": "string",
                            "example": "REGULAR"
                          },
                          "warnings": {
                            "type": "array"
                          },
                          "lifeTimePurchases": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "ignorePoints": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "extendedFields": {
                            "type": "object",
                            "properties": {}
                          },
                          "autoUpdateTime": {
                            "type": "string",
                            "example": "2025-02-14T09:53:23Z"
                          },
                          "retroTxn": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "returnDetails": {
                            "type": "object",
                            "properties": {
                              "canceled": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "niReturnDetails": {
                            "type": "object",
                            "properties": {}
                          },
                          "basketSize": {
                            "type": "integer",
                            "example": 7,
                            "default": 0
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/transactions/getByBillNumber/test00transact053?points_breakup=true&mlp=true' \\\n--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTMDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Cookie: _cfuvid=79i_FRkNNgytEa6PGKilLRWcowz2gsIh8vQPQguBfVU-1744614050889-0.0.1.1-604800000'"
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/transactions/8626198?type=NOT_INTERESTED_RETURN&points_breakup=true&mlp=true' \\\n--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Cookie: _cfuvid=c.5agx8tmOi_4rS6BQFx4PU8ZWeuDT8iIAjHm8y6_cg-1744095133839-0.0.1.1-604800000' \\\n--data ''",
              "name": "Fetching the Returned Not Interested Transaction Details"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```