> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Redemptions

This API allows you to retrieve points and coupons redemption history of a customer. You can filter the results by type, duration, coupon ids start with, and coupon ids end with. Besides filters you can also sort the results by ascending or descending order by redemption id/time and limit number of results to retrieve.

## Example request

```json Sample request Get customer redemptions
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=7744876415' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=a0NmZQvi.30LKK7NvCQJgMpK8Ig15sul9um2ZFRucDk-1757422794990-0.0.1.1-604800000'
```
```Text With points_limit
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=1234512345&points_limit=1' \
--header 'Authorization: Basic Z2VvcmdRlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=a0NmZQvi.30LCQJgMpK8Ig15sul9um2ZFRucDk-1757422794990-0.0.1.1-604800000; _cfuvid=G34mU5xo45KXhscLi1wLSxlx.ZVXnKiUNc_XzQMNPBg-1765781430679-0.0.1.1-604800000'
```
```Text With points_offset
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=1234512345&points_offset=10' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWYNTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=a0NmZQvi.30LKK7NvCQJgMpK8m2ZFRucDk-1757422794990-0.0.1.1-604800000; _cfuvid=5yvhhI4kBWT.hvwsNG.I9UYaK_KkaA6C32ngT3G5Gvk-1765781837648-0.0.1.1-604800000'
```
```Text With source breakdown
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=918442838241&includePointsSourceBreakdown=true&type=points&points_limit=10' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U='
```

## Example response

```json Sample response Get customer redemptions
{
    "response": {
        "status": {
            "success":true,
            "code":200,
            "message":"Success"
        },
        "customer": {
            "mobile": "917744876415",
            "email": "rutuja.hatwar@capillarytech.com",
            "external_id": null,
            "firstname": "tester",
            "lastname": "capillary",
            "user_groups2":[
],
            "rows": 4,
            "coupons_count": "3",
            "points_count": 1,
            "coupons_start_id": "16793490",
            "points_start_id": 1,
            "redemptions": {
                "coupons": {
                    "coupon": [
                         {
                             "id":"16793490",
                             "code": "RT2EJTAE",
                            "series_id":"689078",
                            "description":"LIKE1w2w2345678910",
                            "discount_code":"XYZ1w23",
                            "discount_type":"ABS",
                            "discount_value":"500",
                            "transaction_number":"bill-110",
                            "bill_id":"0",
                            "redeemed_time":"2025-02-24 13:01:40",
                            "redeemed_at":"satish.maharana",
                            "redeemed_store":
                            {
                                "name":"DocStore",
                                "code":"doc123"
                            },
                            "redeemed_till":{
                                "name":"satish.maharana",
                                "code":"satish.maharana"
                            },
                            "custom_fields": {
                                "field": [

                                ]
                            }
                                 },
                                                          {
                             "id":"16793484",
                             "code": "LU251JB2",
                            "series_id":"689078",
                            "description":"LIKE1w2w2345678910",
                            "discount_code":"XYZ1w23",
                            "discount_type":"ABS",
                            "discount_value":"500",
                            "transaction_number":"bill-110",
                            "bill_id":"0",
                            "redeemed_time":"2025-02-24 13:01:13",
                            "redeemed_at":"satish.maharana",
                            "redeemed_store":
                            {
                                "name":"DocStore",
                                "code":"doc123"
                            },
                            "redeemed_till":{
                                "name":"satish.maharana",
                                "code":"satish.maharana"
                            },
                            "custom_fields": {
                                "field": [

                                ]
                            }
                                 },
                                                          {
                             "id":"16787110",
                             "code": "K6OXLR0Q",
                            "series_id":"689078",
                            "description":"LIKE1w2w2345678910",
                            "discount_code":"XYZ1w23",
                            "discount_type":"ABS",
                            "discount_value":"500",
                            "transaction_number":"bill-110",
                            "bill_id":"0",
                            "redeemed_time":"2025-02-23 22:33:01",
                            "redeemed_at":"satish.maharana",
                            "redeemed_store":
                            {
                                "name":"DocStore",
                                "code":"doc123"
                            },
                            "redeemed_till":{
                                "name":"satish.maharana",
                                "code":"satish.maharana"
                            },
                            "custom_fields": {
                                "field": [

                                ]
                            }
                                 }
                                 ]
                },
                "points": {
                    "point": [
                        {
                           "id" :1,
                           "program_id":973,
                           "points_redeemed":100,
                           "transaction_number":"",
                           "bill_id":"-1",
                           "validation_code":"",
                           "redeemed_time":"2025-03-10 14:37:11",
                           "redeemed_at":"sant.p_123",
                           "redemption_purpose":"",
                           "notes":"Redeemed to transfer points to the friend",
                           "external_reference_number":"",
                           "redemption_id":"AfL1vt",
                           "redeemed_store":{
                               "code":"doc123",
                               "name":"DocStore"
                           },
                           "redeemed_till":{
                               "code":"sant.p_123",
                               "name":"sant.p_123"
                           },
                            "custom_fields": {
                                  "field": [

                                  ]
                            },
                               "reversals":
                               [
                                ],
                          "redemption_breakup_by_program":
                                    [
                                    ]
                        }
                         ]
                        
                    }
                }
            }
        }
}

```
```json With source breakdown
{
    "response": {
        "status": {
            "success": true,
            "code": 200,
            "message": "Success"
        },
        "customer": {
            "mobile": "918442838241",
            "email": "customer@example.com",
            "external_id": null,
            "firstname": "John",
            "lastname": "Doe",
            "user_groups2": [],
            "rows": 1,
            "points_count": 1,
            "points_start_id": 1,
            "redemptions": {
                "points": {
                    "point": [
                        {
                            "id": 1,
                            "program_id": 1886,
                            "points_redeemed": 8,
                            "transaction_number": "bill-123",
                            "bill_id": "-1",
                            "validation_code": "",
                            "redeemed_time": "2025-12-10 15:30:00",
                            "redeemed_at": "store_till",
                            "redemption_purpose": "Purchase discount",
                            "notes": "Redeemed at checkout",
                            "external_reference_number": "",
                            "redemption_id": "XyZ123",
                            "redeemed_store": {
                                "code": "store123",
                                "name": "Main Store"
                            },
                            "redeemed_till": {
                                "code": "till_01",
                                "name": "Till 01"
                            },
                            "custom_fields": {
                                "field": []
                            },
                            "reversals": [],
                            "redemption_breakup_by_program": [
                                {
                                    "program_id": 1886,
                                    "points_redeemed": 8,
                                    "program_name": "DefaultProgram"
                                }
                            ],
                            "redemption_breakup_by_source": [
                                {
                                    "source_store": {
                                        "code": "northstore",
                                        "name": "NorthStore"
                                    },
                                    "points_consumed": 6,
                                    "awarding_date": "2025-10-18 21:58:10"
                                },
                                {
                                    "source_store": {
                                        "code": "northstore",
                                        "name": "NorthStore"
                                    },
                                    "points_consumed": 2,
                                    "awarding_date": "2025-10-18 21:58:07"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
}
```

# Request query parameters

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
        identifierName
      </td>

      <td>
        string (enum)
      </td>

      <td>
        Mandatory
      </td>

      <td>
        Identifier of the customer to use. Allowed: `mobile`, `email`, `external_id`, `id`.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Mandatory
      </td>

      <td>
        Value of the specified identifier type. To retrieve transactions of multiple customers, provide each identifier separated by commas.**Example:** `mobile=44700900000,44700900999,4470090345`
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        string (enum)
      </td>

      <td>
        Optional
      </td>

      <td>
        Type of redemption. Allowed: `POINTS`, `COUPONS`, `BOTH`.
      </td>
    </tr>

    <tr>
      <td>
        start_date
      </td>

      <td>
        date
      </td>

      <td>
        Optional
      </td>

      <td>
        Retrieves redemptions made on or after a specific date (`YYYY-MM-DD`). Use with `end_date` for a date range.
      </td>
    </tr>

    <tr>
      <td>
        end_date
      </td>

      <td>
        date
      </td>

      <td>
        Optional
      </td>

      <td>
        Retrieves redemptions made on or before a specific date (`YYYY-MM-DD`). Use with `start_date` for a date range.**Example:** `start_date=2013-12-21+23:45:45&end_date=2013-12-29+12:11:45`
      </td>
    </tr>

    <tr>
      <td>
        entity_code
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Code of the specified entity_type. Example: to get transactions of a zone with code `zone01`, pass `entity_type=zone&entity_code=zone01`.
      </td>
    </tr>

    <tr>
      <td>
        coupons_limit
      </td>

      <td>
        int32
      </td>

      <td>
        Optional
      </td>

      <td>
        Limit the number of coupon redemptions displayed. Use only when `type` is not passed.**Example:** `coupons_limit=10`
      </td>
    </tr>

    <tr>
      <td>
        points_limit
      </td>

      <td>
        int32
      </td>

      <td>
        Optional
      </td>

      <td>
        Specifies the maximum number of point redemption records to return.

        * This parameter is applicable only when the type parameter is not provided.
        * The maximum supported value is 500.  
          If a value greater than 500 is provided, the system automatically resets the limit to 500.  
          Example: points_limit=10  
          Default value: 10
      </td>
    </tr>

    <tr>
      <td>
        limit
      </td>

      <td>
        int32
      </td>

      <td>
        Optional
      </td>

      <td>
        Limit the number of redemption details (points and/or coupons). Default is 10. Use only when `type` is not passed.
      </td>
    </tr>

    <tr>
      <td>
        coupons_start_id
      </td>

      <td>
        int64
      </td>

      <td>
        Optional
      </td>

      <td>
        Filter results by coupon redemption ID starting with a specific number. Use only when `type` is not passed.
      </td>
    </tr>

    <tr>
      <td>
        coupons_end_id
      </td>

      <td>
        int64
      </td>

      <td>
        Optional
      </td>

      <td>
        Filter results by coupon redemption ID ending with a specific number. Use only when `type` is not passed.
      </td>
    </tr>

    <tr>
      <td>
        points_start_id
      </td>

      <td>
        int64
      </td>

      <td>
        Optional
      </td>

      <td>
        Filter results by points redemption ID starting with a specific number. Use only when `type` is not passed.
      </td>
    </tr>

    <tr>
      <td>
        points_end_id
      </td>

      <td>
        int64
      </td>

      <td>
        Optional
      </td>

      <td>
        Filter results by points redemption ID ending with a specific number. Use only when `type` is not passed.
      </td>
    </tr>

    <tr>
      <td>
        sort
      </td>

      <td>
        string (enum)
      </td>

      <td>
        Optional
      </td>

      <td>
        Sort results by redemption ID or redeemed time. Defaults to descending order of redeemed time.  
        Supported parameters: `false`, `redemption_id`, `redeemed_time`.
      </td>
    </tr>

    <tr>
      <td>
        order
      </td>

      <td>
        string (enum)
      </td>

      <td>
        Optional
      </td>

      <td>
        Defines sort order. Defaults to `desc`.  
        Supported parameters: `asc`, `desc`.
      </td>
    </tr>

    <tr>
      <td>
        mlp
      </td>

      <td>
        boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        Pass `true` to get redemptions from all programs of the org; `false` for only the default program. Defaults to `false`.
      </td>
    </tr>

    <tr>
      <td>
        format
      </td>

      <td>
        string (enum)
      </td>

      <td>
        Optional
      </td>

      <td>
        Format of the response. Allowed: `xml`, `json`.
      </td>
    </tr>

    <tr>
      <td>
        user_id
      </td>

      <td>
        boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        Pass `true` to include customer ID in response. Defaults to not retrieved.
      </td>
    </tr>

    <tr>
      <td>
        merchant_store_id
      </td>

      <td>
        int64
      </td>

      <td>
        Optional
      </td>

      <td>
        Merchant store ID to fetch redemptions from a specific store.
      </td>
    </tr>

    <tr>
      <td>
        program_id
      </td>

      <td>
        int32
      </td>

      <td>
        Optional
      </td>

      <td>
        Program ID to filter redemptions of a particular program.
      </td>
    </tr>

    <tr>
      <td>
        external_reference_number
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Unique reference number provided when making the points redemption request.
      </td>
    </tr>

    <tr>
      <td>
        points_offset
      </td>

      <td>
        integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Specifies the starting page for the records to be fetched. Default: 0
      </td>
    </tr>

    <tr>
      <td>
        includePointsEarnBreakdown
      </td>

      <td>
        boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        When set to `true`, includes source-level breakdown for each points redemption, showing which stores/tills originally awarded the redeemed points. This provides transparency into where points were earned before being redeemed.

        **Default:** `false`

        **Note:** This parameter only applies to points redemptions. It has no effect on coupon redemptions.
      </td>
    </tr>
  </tbody>
</Table>

## Response Parameters

| Parameter                        | Datatype  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| coupons\_count                   | int       | Number of coupon redemptions retrieved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| points\_count                    | int       | Number of points redemptions received.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| coupons                          | obj       | Details of coupon redemptions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| points                           | obj       | Details of points redemption.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| code                             | string    | Unique code of the coupon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| series\_id                       | long      | Coupon series ID associated to the coupon.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| description                      | string    | Description of the coupon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| discount\_code                   | string    | Coupon code used to avail discount.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| discount\_type                   | enum      | Type of discount. `PERC` for discount in percentage, `FLAT` for flat amount discount.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| id                               | long      | Redemption ID of that points or coupon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| transaction\_number              | string    | Transaction number associated to the points or coupon redemption.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| bill\_id                         | long      | A numerical identifier for the bill.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| redeemed\_time                   | date-time | Date and time of points or coupon redemption.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| redeemed\_at                     | string    | Store or TILL code associated to points or coupon redemption.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| program\_id                      | long      | Unique ID of the loyalty program in which points is redeemed.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| points\_redeemed                 | int       | Number of points redeemed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| transaction\_number              | string    | Transaction number associated to the points or coupon redemption.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| redeemed\_time                   | date-time | Date and time of points or coupon redemption.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| redeemed\_at                     | string    | Store or TILL code associated to points or coupon redemption.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| redemption\_breakup\_by\_program | obj       | Breakup of points redeemed with respect to the program.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| reversals                        | obj       | Details of points reversed if the transaction for which points are redeemed is returned.                                                                                                                                                                                                                                                                                                                                                                                                                |
| reversal\_id                     | long      | Unique ID generated for the reversal of a specific set of redeemed points.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| points\_reversed                 | int       | number of points reversed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| reversal\_time                   | date-time | Date and time of points reversal in `YYYY-MM-DD HH:MM:SS` format.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| reversed\_on\_till\_id           | long      | Till ID associated to the points reversal.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| reversal\_breakup\_by\_program   | obj       | Breakup of points reversed and associated loyalty program.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| redemption\_breakup\_by\_source  | array     | Source-level breakdown of redeemed points (only included when `includePointsSourceBreakdown=true`). Shows which stores/tills originally awarded the points being redeemed. Each entry contains:<br />- `source_store`: Object with `code` and `name` of the store where points were awarded<br />- `points_consumed`: Number of points from that source used in this redemption<br />- `awarding_date`: Date and time when the points were awarded at that source store (format: `YYYY-MM-DD HH:MM:SS`) |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "customer-v11",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v1.1",
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
    "/customer/redemptions": {
      "get": {
        "summary": "Get Customer Redemptions",
        "description": "This API allows you to retrieve points and coupons redemption history of a customer. You can filter the results by type, duration, coupon ids start with, and coupon ids end with. Besides filters you can also sort the results by ascending or descending order by redemption id/time and limit number of results to retrieve.",
        "operationId": "get-customer-redemptions",
        "parameters": [
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier of the customer to use.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "external_id id"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the specified identifier type. o retrieve transactions of multiple customers at a time, provide each identifier separating by a comma. <br>Example: `mobile=44700900000,44700900999,4470090345`",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": "Type of redemption.",
            "schema": {
              "type": "string",
              "enum": [
                "POINTS",
                "COUPONS",
                "BOTH"
              ]
            }
          },
          {
            "name": "start_date",
            "in": "query",
            "description": "Retrieves redemptions made on or after a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Retrieves redemptions made on or before a specific date (YYYY-MM-DD). To get transactions of a particular duration, use both start_date and end_date. Example: start_date=2013-12-21+23:45:45&end_date=2013-12-29+12:11:45",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "entity_code",
            "in": "query",
            "description": "Code of the specified entity_type. For example, to get transactions of a specific zone (with zone code zone01), pass entity_type=zone&entity_code=zone01.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "coupons_limit",
            "in": "query",
            "description": "Limit the number of coupon redemptions to be displayed. Example:coupons_limit=10 to show only 10 coupon redemption details. Use only when the type parameter is not passed.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "points_limit",
            "in": "query",
            "description": "Limit the number of points redemption results to be displayed. Example:points_limit=10 to show only 10 points redemption details. Use only when the type parameter is not passed.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limit the number of redemption details (points and/or coupons). Use only when the type parameter is not passed. Default value is 10.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "coupons_start_id",
            "in": "query",
            "description": "Filter the results by coupon redemption id starting with a specific number. Use only when the type parameter is not passed.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "coupons_end_id",
            "in": "query",
            "description": "Filter the results by coupon redemption id ending with a specific number. Use only when the type parameter is not passed.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "points_start_id",
            "in": "query",
            "description": "Filter the results by points redemption id ending with a specific number. Use only when the type parameter is not passed.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "points_end_id",
            "in": "query",
            "description": "Retrieves the credit notes of the transactions. Credit Notes is a receipt given by a cashier to a customer for returned goods which can be used for future purchases.",
            "schema": {
              "type": "integer",
              "format": "int64",
              "default": null
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Sort the results either by redemption id or redeemed time. By default, the results are sorted in the descending order of redeemed time.",
            "schema": {
              "type": "string",
              "enum": [
                "redemption_id",
                "redeemed_time"
              ],
              "default": "false"
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "Order the results in ascending (asc) or descending order (desc). By default, the results are shown in the descending order of redeemed time.",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "mlp",
            "in": "query",
            "description": "Pass `true` to get redemptions of the customer from all programs of the org, `false` to fetch from the default program associated with the till.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "format",
            "in": "query",
            "description": "Representation of response content.",
            "schema": {
              "type": "string",
              "enum": [
                "xml",
                "json"
              ]
            }
          },
          {
            "name": "user_id",
            "in": "query",
            "description": "Pass `true` to return the customer ID in response. By default, customer id is not retrieved.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "merchant_store_id",
            "in": "query",
            "description": "Pass the merchant store ID of to fetch redemptions made in that particular merchant store.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "Arranges the transactions based on the value set in sort. By default, results are shown in the descending order of transaction date/id.",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ],
              "default": "desc"
            }
          },
          {
            "name": "program_id",
            "in": "query",
            "description": "Pass program ID to filter redemptions of a particular program.",
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
                  "Sample Response": {
                    "value": {
                      "response": {
                        "status": {
                          "success": true,
                          "code": 200,
                          "message": "Success"
                        },
                        "customer": {
                          "mobile": "9988221100",
                          "email": "tom.sawyer@gmail.com",
                          "external_id": "123456",
                          "firstname": "Lione101",
                          "lastname": "Messi101",
                          "user_groups2": [],
                          "rows": 10,
                          "coupons_count": null,
                          "points_count": 12,
                          "coupons_start_id": "",
                          "points_start_id": 1,
                          "redemptions": {
                            "coupons": {
                              "coupon": null
                            },
                            "points": {
                              "point": [
                                {
                                  "id": 1,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "bilnum100000",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-07-25 12:19:54",
                                  "redeemed_at": "divya_doc",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "cLrg1k",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "divya_doc",
                                    "name": "divya_doc"
                                  },
                                  "custom_fields": {
                                    "field": [
                                      {
                                        "name": "point_transferred_to",
                                        "value": "9988221101"
                                      }
                                    ]
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 2,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "bilnum100000",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-07-25 12:18:43",
                                  "redeemed_at": "divya_doc",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "EPGufA",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "divya_doc",
                                    "name": "divya_doc"
                                  },
                                  "custom_fields": {
                                    "field": [
                                      {
                                        "name": "point_transferred_to",
                                        "value": "9988221101"
                                      }
                                    ]
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 3,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "bilnum100000",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-06-26 12:16:03",
                                  "redeemed_at": "naman",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "3i2Vjv",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "naman_doc",
                                    "name": "naman"
                                  },
                                  "custom_fields": {
                                    "field": [
                                      {
                                        "name": "point_transferred_to",
                                        "value": "9988221101"
                                      }
                                    ]
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 4,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "bilnum100000",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-06-23 12:22:32",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "czJqLu",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": [
                                      {
                                        "name": "point_transferred_to",
                                        "value": "9988221101"
                                      }
                                    ]
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 5,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "billnumber333",
                                  "bill_id": "1234567891234567",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-06-12 09:40:56",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "testing123",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "NZVAt9",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": []
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 6,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "billnumber333",
                                  "bill_id": "12345678901",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-06-12 09:34:00",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "testing123",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "meXt7G",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": []
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 7,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-05-20 23:01:53",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "1MC89B",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": []
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 8,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "bilnum100000",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-05-20 23:01:33",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "Ex8hCb",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": [
                                      {
                                        "name": "point_transferred_to",
                                        "value": "9988221101"
                                      }
                                    ]
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 9,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "bilnum100000",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-05-20 23:00:57",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "diLpuX",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": [
                                      {
                                        "name": "point_transferred_to",
                                        "value": "9988221101"
                                      }
                                    ]
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                },
                                {
                                  "id": 10,
                                  "program_id": 973,
                                  "points_redeemed": 1,
                                  "transaction_number": "bilnum100000",
                                  "bill_id": "-1",
                                  "validation_code": "NS3U05",
                                  "redeemed_time": "2025-05-20 21:48:58",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "blQjRR",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": [
                                      {
                                        "name": "point_transferred_to",
                                        "value": "9988221101"
                                      }
                                    ]
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  },
                  "Sample response Get customer redemptions": {
                    "summary": "Sample response Get customer redemptions",
                    "value": {
                      "response": {
                        "status": {
                          "success": true,
                          "code": 200,
                          "message": "Success"
                        },
                        "customer": {
                          "mobile": "917744876415",
                          "email": "rutuja.hatwar@capillarytech.com",
                          "external_id": null,
                          "firstname": "tester",
                          "lastname": "capillary",
                          "user_groups2": [],
                          "rows": 4,
                          "coupons_count": "3",
                          "points_count": 1,
                          "coupons_start_id": "16793490",
                          "points_start_id": 1,
                          "redemptions": {
                            "coupons": {
                              "coupon": [
                                {
                                  "id": "16793490",
                                  "code": "RT2EJTAE",
                                  "series_id": "689078",
                                  "description": "LIKE1w2w2345678910",
                                  "discount_code": "XYZ1w23",
                                  "discount_type": "ABS",
                                  "discount_value": "500",
                                  "transaction_number": "bill-110",
                                  "bill_id": "0",
                                  "redeemed_time": "2025-02-24 13:01:40",
                                  "redeemed_at": "satish.maharana",
                                  "redeemed_store": {
                                    "name": "DocStore",
                                    "code": "doc123"
                                  },
                                  "redeemed_till": {
                                    "name": "satish.maharana",
                                    "code": "satish.maharana"
                                  },
                                  "custom_fields": {
                                    "field": []
                                  }
                                },
                                {
                                  "id": "16793484",
                                  "code": "LU251JB2",
                                  "series_id": "689078",
                                  "description": "LIKE1w2w2345678910",
                                  "discount_code": "XYZ1w23",
                                  "discount_type": "ABS",
                                  "discount_value": "500",
                                  "transaction_number": "bill-110",
                                  "bill_id": "0",
                                  "redeemed_time": "2025-02-24 13:01:13",
                                  "redeemed_at": "satish.maharana",
                                  "redeemed_store": {
                                    "name": "DocStore",
                                    "code": "doc123"
                                  },
                                  "redeemed_till": {
                                    "name": "satish.maharana",
                                    "code": "satish.maharana"
                                  },
                                  "custom_fields": {
                                    "field": []
                                  }
                                },
                                {
                                  "id": "16787110",
                                  "code": "K6OXLR0Q",
                                  "series_id": "689078",
                                  "description": "LIKE1w2w2345678910",
                                  "discount_code": "XYZ1w23",
                                  "discount_type": "ABS",
                                  "discount_value": "500",
                                  "transaction_number": "bill-110",
                                  "bill_id": "0",
                                  "redeemed_time": "2025-02-23 22:33:01",
                                  "redeemed_at": "satish.maharana",
                                  "redeemed_store": {
                                    "name": "DocStore",
                                    "code": "doc123"
                                  },
                                  "redeemed_till": {
                                    "name": "satish.maharana",
                                    "code": "satish.maharana"
                                  },
                                  "custom_fields": {
                                    "field": []
                                  }
                                }
                              ]
                            },
                            "points": {
                              "point": [
                                {
                                  "id": 1,
                                  "program_id": 973,
                                  "points_redeemed": 100,
                                  "transaction_number": "",
                                  "bill_id": "-1",
                                  "validation_code": "",
                                  "redeemed_time": "2025-03-10 14:37:11",
                                  "redeemed_at": "sant.p_123",
                                  "redemption_purpose": "",
                                  "notes": "Redeemed to transfer points to the friend",
                                  "external_reference_number": "",
                                  "redemption_id": "AfL1vt",
                                  "redeemed_store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "redeemed_till": {
                                    "code": "sant.p_123",
                                    "name": "sant.p_123"
                                  },
                                  "custom_fields": {
                                    "field": []
                                  },
                                  "reversals": [],
                                  "redemption_breakup_by_program": []
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
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
                              "example": 200,
                              "default": 0
                            },
                            "message": {
                              "type": "string",
                              "example": "Success"
                            }
                          }
                        },
                        "customer": {
                          "type": "object",
                          "properties": {
                            "mobile": {
                              "type": "string",
                              "example": "917939623972"
                            },
                            "email": {
                              "type": "string",
                              "example": "auto_917939623972@capautomation.com"
                            },
                            "external_id": {
                              "type": "string",
                              "example": "ext_id7939623972"
                            },
                            "firstname": {
                              "type": "string",
                              "example": "Tom"
                            },
                            "lastname": {
                              "type": "string",
                              "example": "Sawyer"
                            },
                            "user_groups2": {
                              "type": "array"
                            },
                            "rows": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            },
                            "coupons_count": {},
                            "points_count": {
                              "type": "integer",
                              "example": 2,
                              "default": 0
                            },
                            "coupons_start_id": {
                              "type": "string",
                              "example": ""
                            },
                            "points_start_id": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "redemptions": {
                              "type": "object",
                              "properties": {
                                "coupons": {
                                  "type": "object",
                                  "properties": {
                                    "coupon": {}
                                  }
                                },
                                "points": {
                                  "type": "object",
                                  "properties": {
                                    "point": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 1,
                                            "default": 0
                                          },
                                          "program_id": {
                                            "type": "integer",
                                            "example": 1098,
                                            "default": 0
                                          },
                                          "points_redeemed": {
                                            "type": "integer",
                                            "example": 100,
                                            "default": 0
                                          },
                                          "transaction_number": {
                                            "type": "string",
                                            "example": "number7939623972"
                                          },
                                          "bill_id": {
                                            "type": "string",
                                            "example": "12345"
                                          },
                                          "validation_code": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "redeemed_time": {
                                            "type": "string",
                                            "example": "2024-07-26 10:52:24"
                                          },
                                          "redeemed_at": {
                                            "type": "string",
                                            "example": "autostore1.till2"
                                          },
                                          "redemption_purpose": {
                                            "type": "string",
                                            "example": "Testing"
                                          },
                                          "notes": {
                                            "type": "string",
                                            "example": "Redemption by SMS"
                                          },
                                          "external_reference_number": {
                                            "type": "string",
                                            "example": "ACR-5801353177"
                                          },
                                          "redemption_id": {
                                            "type": "string",
                                            "example": "8878ru"
                                          },
                                          "redeemed_store": {
                                            "type": "object",
                                            "properties": {
                                              "code": {
                                                "type": "string",
                                                "example": "autostore1"
                                              },
                                              "name": {
                                                "type": "string",
                                                "example": "autostore1"
                                              }
                                            }
                                          },
                                          "redeemed_till": {
                                            "type": "object",
                                            "properties": {
                                              "code": {
                                                "type": "string",
                                                "example": "autostore1.till2"
                                              },
                                              "name": {
                                                "type": "string",
                                                "example": "autostore1.till2"
                                              }
                                            }
                                          },
                                          "custom_fields": {
                                            "type": "object",
                                            "properties": {
                                              "field": {
                                                "type": "array"
                                              }
                                            }
                                          },
                                          "reversals": {
                                            "type": "array"
                                          },
                                          "redemption_breakup_by_program": {
                                            "type": "array"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=9988221100&format=JSON' \\\n--header 'Authorization: Basic ZNhNTdlYTI0YTYyZTZm' \\\n--header 'Cookie: _cfuvid=SZ1NpwEUC9G5d9dKfJNjk7LsfNCROONngFRQR5..tic-1746439809613-0.0.1.1-604800000; _cfuvid=TfK55doR2S7VmPkLh6b3bKQLIoDYfMfKWbDhNdfGz5M-1753426500477-0.0.1.1-604800000'",
              "name": "Sample Request"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=918877665544' \\\n--header 'Authorization: Basic =' \\\n--header 'Cookie: _cfuvid=a0NmZQvi.30LKK7NvCQJgMpK8Ig15sul9um2ZFRucDk-1757422794990-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request Get customer redemptions"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=1234512345&points_limit=1' \\\n--header 'Authorization: Basic Z2VvcmdRlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \\\n--header 'Cookie: _cfuvid=a0NmZQvi.30LCQJgMpK8Ig15sul9um2ZFRucDk-1757422794990-0.0.1.1-604800000; _cfuvid=G34mU5xo45KXhscLi1wLSxlx.ZVXnKiUNc_XzQMNPBg-1765781430679-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request with points_limit"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/customer/redemptions?mobile=1234512345&points_offset=10' \\\n--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWYNTY5NDk1YmNkNzUxYmJiY2U=' \\\n--header 'Cookie: _cfuvid=a0NmZQvi.30LKK7NvCQJgMpK8m2ZFRucDk-1757422794990-0.0.1.1-604800000; _cfuvid=5yvhhI4kBWT.hvwsNG.I9UYaK_KkaA6C32ngT3G5Gvk-1765781837648-0.0.1.1-604800000'",
              "language": "shell",
              "name": "With offset"
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