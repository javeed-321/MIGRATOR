> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get/Search Product SKUs 

Use this API to **retrieve product SKU details** from your organisation. You can fetch SKUs in bulk, search SKUs by SKU code, brand name, or category name, or retrieve specific SKUs using SKU IDs or codes. The API supports pagination, sorting, and filtering, and can optionally return related data such as product attributes, style, colour, and size.

You can use this API to:

* Fetch all product SKUs in the organisation.
* Search SKUs by SKU code prefix, brand name prefix, or category name prefix using the `q` parameter.
* Retrieve specific SKUs using SKU IDs or SKU codes.
* Filter SKUs by organisation unit (OU) when OU support is enabled.
* Retrieve additional related data (attributes, style, colour, size) for a single SKU.

The response includes SKU details, pricing and return information, brand and category, optional related entities, attribution metadata, and pagination details.

# Example request

```bash List all SKUs
curl --location 'eu.intouch.capillarytech.com/v2/product/skus?limit=2&offset=0' \
--header 'Authorization: Basic bmVlcmFqLmRvWE4YTcwNmM0YzM0YTE2ODkxZjg0ZTdi'
```
```bash Filter by SKU IDs
curl --location 'eu.intouch.capillarytech.com/v2/product/skus?entityIds=504528848' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlccwNmM0YzM0YTE2ODkxZjg0ZTdi'
```
```bash Search by brand and category name
curl --location 'eu.intouch.capillarytech.com/v2/product/skus?q=brand:Zeta,category:Delta' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyN2NjYYTE2ODkxZjg0ZTdi'
```
```bash Single SKU with attributes
curl --location 'eu.intouch.capillarytech.com/v2/product/skus?entityIds=504528848&include=attributes' \
--header 'Authorization: Basic bmVlcmFqLmRvY3NlcDI1OjgyN2YzM0YTE2ODkxZjg0ZTdi'
```

# Prerequisites

* [Basic/OAuth](https://docs.capillarytech.com/reference/authentication#/) authentication

# Resource information

|                    |     |
| :----------------- | :-- |
| Pagination support | Yes |
| Batch support      | Yes |

# Query parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
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
        `q`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Search product SKUs using a structured `field:value` format. Multiple fields are separated by commas and act as an AND condition. Allowed fields:

        - `code` — matches SKUs whose code starts with the given prefix. Case-insensitive. Max 30 characters.
        - `brand` — matches SKUs assigned to a brand whose **name** starts with the given prefix. Case-insensitive.
        - `category` — matches SKUs assigned to a category whose **name** starts with the given prefix. Case-insensitive.

        Example: `q=code:SHIRT`, `q=brand:Nike`, `q=brand:Nike,category:Footwear`

        This parameter overrides `entityCodes` and `entityIds`. If provided along with those filters, a warning is returned and the other filters are ignored.
      </td>
    </tr>

    <tr>
      <td>
        `entityCodes`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        A single or comma-separated list of product SKU codes. Use the value of the `code` parameter from the response of the <Anchor target="_blank" href="https://docs.capillarytech.com/reference/add_product_sku">Add Product SKU API</Anchor>.Used when `q` parameter is not provided.

        - Format: Case-insensitive; supports UTF-8 characters.
        - Limits: Maximum 30 codes; 50 characters per code.
        - This parameter is ignored if query parameter `q` is provided.

        Example: code1, 10001
      </td>
    </tr>

    <tr>
      <td>
        `entityIds`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        A single or comma-separated list of product SKU `id`. Use the value of the `id` parameter from the response of the <Anchor target="_blank" href="https://docs.capillarytech.com/reference/add_product_sku">Add Product SKU API</Anchor>.

        - Limits: Maximum 30 ID's.
        - This parameter is ignored if the query parameter `q` or `entityCodes` are provided.

        Example: 1999, 2000
      </td>
    </tr>

    <tr>
      <td>
        `include`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Comma-separated list of optional related data to include in the response. Only applied when retrieving a single SKU (using `entityIds` or `entityCodes` with a single value).

        **Possible values**: `attributes`, `style`, `color`, `size`.

        Note: `brand` and `category` are always returned in the base response regardless of this parameter.
      </td>
    </tr>

    <tr>
      <td>
        `limit`
      </td>

      <td>
        integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Maximum number of SKUs to retrieve. The default value is 10, and the maximum allowed value is 100.
      </td>
    </tr>

    <tr>
      <td>
        `offset`
      </td>

      <td>
        integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Number of SKUs to skip from the beginning of the response.
      </td>
    </tr>

    <tr>
      <td>
        `sortBy`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Allows you to sort the response based on specific fields. Supported values are `id` and `code`. Defaults to `id`.
      </td>
    </tr>

    <tr>
      <td>
        `sortOrder`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Sort direction. Supported values: `ASC`, `DESC`. Default: `DESC`
      </td>
    </tr>

    <tr>
      <td>
        `ouCode`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Filters product SKUs by the Organization's concept code. This parameter is only applicable when OU support is enabled.
      </td>
    </tr>

    <tr>
      <td>
        `fetchType`
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Scope of product categories to fetch. Supported Values: ALL (master org and OU), ORG (master org only), SCOPE (OU only).
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json List all SKUs
{
    "data": [
        {
            "id": 504528848,
            "orgId": 100737,
            "ouId": -1,
            "code": "TEST-SKU-APITEST-001",
            "ean": "TEST-EAN-APITEST-001",
            "price": 999.0,
            "description": "Test SKU for API documentation",
            "longDescription": "A test SKU created for API documentation testing purposes",
            "imageUrl": "https://example.com/test-image.jpg",
            "returnable": true,
            "returnableDays": 30,
            "brand": {
                "id": 1219533,
                "code": "TEST-BRAND-APITEST-001",
                "name": "Test Brand APITest"
            },
            "category": {
                "id": 2477825,
                "code": "TEST-CAT-APITEST-001",
                "name": "Test Category APITest"
            },
            "attribution": {
                "modifiedDate": "2026-06-18T09:11:07Z"
            }
        },
        {
            "id": 503348546,
            "orgId": 100737,
            "ouId": -1,
            "code": "00001453234013",
            "ean": "00001453234013",
            "price": 500.0,
            "description": "",
            "imageUrl": "",
            "returnable": true,
            "returnableDays": -1,
            "attribution": {
                "modifiedDate": "2026-04-13T05:19:02Z"
            }
        }
    ],
    "pagination": {
        "limit": 2,
        "offset": 0,
        "total": 54
    }
}
```
```json Single SKU with include=attributes
{
    "data": [
        {
            "id": 504528848,
            "orgId": 100737,
            "ouId": -1,
            "code": "TEST-SKU-APITEST-001",
            "ean": "TEST-EAN-APITEST-001",
            "price": 999.0,
            "description": "Test SKU for API documentation",
            "longDescription": "A test SKU created for API documentation testing purposes",
            "imageUrl": "https://example.com/test-image.jpg",
            "returnable": true,
            "returnableDays": 30,
            "brand": {
                "id": 1219533,
                "code": "TEST-BRAND-APITEST-001",
                "name": "Test Brand APITest"
            },
            "category": {
                "id": 2477825,
                "code": "TEST-CAT-APITEST-001",
                "name": "Test Category APITest"
            },
            "attributes": [],
            "attribution": {
                "modifiedDate": "2026-06-18T09:11:07Z"
            }
        }
    ],
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 1
    }
}
```

# Response parameters

| Parameter         | Type    | Description                                                                                                                  |
| :---------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------- |
| `id`              | long    | Unique numeric identifier for the SKU, from the Add Product SKU API response.                                                |
| `orgId`           | long    | Organisation ID to which the SKU belongs.                                                                                    |
| `ouId`            | long    | Organisational unit ID. `-1` if the SKU belongs to the master organisation.                                                  |
| `code`            | string  | Unique code for the SKU (also called item code).                                                                             |
| `ean`             | string  | European Article Number (EAN) of the product.                                                                                |
| `price`           | decimal | Monetary cost of the product.                                                                                                |
| `description`     | string  | Short summary or title of the product.                                                                                       |
| `longDescription` | string  | Detailed description of the product.                                                                                         |
| `imageUrl`        | string  | URL of the product image.                                                                                                    |
| `returnable`      | boolean | Whether the product is eligible for return.                                                                                  |
| `returnableDays`  | integer | Number of days within which the product can be returned. `-1` if not applicable.                                             |
| `brand`           | object  | Object containing the brand assigned to this SKU. Always returned in the base response.                                      |
| `.id`             | long    | Unique numeric identifier for the brand.                                                                                     |
| `.code`           | string  | Unique code for the brand.                                                                                                   |
| `.name`           | string  | Display name of the brand.                                                                                                   |
| `category`        | object  | Object containing the category assigned to this SKU. Always returned in the base response.                                   |
| `.id`             | long    | Unique numeric identifier for the category.                                                                                  |
| `.code`           | string  | Unique code for the category.                                                                                                |
| `.name`           | string  | Display name of the category.                                                                                                |
| `style`           | object  | Object containing the style variant. Returned when `include=style` is specified.                                             |
| `colorPalette`    | object  | Object containing the colour variant. Returned when `include=color` is specified.                                            |
| `size`            | object  | Object containing the size variant. Returned when `include=size` is specified.                                               |
| `attributes`      | array   | List of custom product attributes. Returned when `include=attributes` is specified.                                          |
| `.id`             | long    | Unique identifier of the attribute definition.                                                                               |
| `.code`           | string  | System code identifying the attribute type (for example, `material`).                                                        |
| `.name`           | string  | Display name of the attribute type.                                                                                          |
| `.value`          | object  | Object containing the assigned attribute value details.                                                                      |
| `..id`            | long    | Unique identifier for the specific attribute value.                                                                          |
| `..code`          | string  | Code representing the attribute value.                                                                                       |
| `..name`          | string  | Display name of the attribute value.                                                                                         |
| `attribution`     | object  | Object containing modification metadata.                                                                                     |
| `.modifiedDate`   | string  | Date and time when the SKU was last modified, in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`), returned in the server time zone. |
| `pagination`      | object  | Object containing pagination details.                                                                                        |
| `.limit`          | integer | Maximum number of records returned per page.                                                                                 |
| `.offset`         | integer | Number of records skipped from the beginning of the result set.                                                              |
| `.total`          | integer | Total number of SKUs matching the request filters.                                                                           |

# Error and warning codes

| Code                                     | Error number | Type    | Description                                                                                                                        |
| :--------------------------------------- | :----------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| `ERR_INVALID_OU_CODE`                    | 10001        | Error   | The provided `ouCode` is invalid or does not exist. HTTP 400.                                                                      |
| `ERR_OU_LEVEL_DISABLED`                  | 10002        | Error   | OU-level product filtering is disabled for your organisation, but an `ouCode` was provided. HTTP 400.                              |
| `ERR_PAGINATION_LIMIT_EXCEEDED`          | 10004        | Error   | Pagination `limit` cannot exceed 100. HTTP 400.                                                                                    |
| `ERR_PAGINATION_LIMIT_NEGATIVE`          | 10005        | Error   | Pagination `limit` cannot be zero or negative. HTTP 400.                                                                           |
| `ERR_PAGINATION_OFFSET_NEGATIVE`         | 10006        | Error   | Pagination `offset` cannot be negative. HTTP 400.                                                                                  |
| `ERR_ENTITY_CODES_LIMIT_EXCEEDED`        | 10007        | Error   | `entityCodes` cannot have more than 30 comma-separated values. HTTP 400.                                                           |
| `ERR_ENTITY_IDS_LIMIT_EXCEEDED`          | 10008        | Error   | `entityIds` cannot have more than 30 comma-separated values. HTTP 400.                                                             |
| `ERR_INVALID_SKU_Q_FORMAT`               | 10071        | Error   | Invalid `q` parameter format. Expected format: `field:value,field2:value2`. Allowed fields: `code`, `brand`, `category`. HTTP 400. |
| `WARN_SEARCH_BY_QUERY_PRIORITY`          | 10009        | Warning | Searching by `q` parameter; `entityCodes` and `entityIds` were ignored.                                                            |
| `WARN_SEARCH_BY_CODES_PRIORITY`          | 10010        | Warning | Searching by `entityCodes`; `entityIds` was ignored.                                                                               |
| `WARN_BLANK_ENTITIES_IGNORED`            | 10011        | Warning | One or more blank values in `entityCodes` or `entityIds` were ignored.                                                             |
| `WARN_NON_NUMERIC_IDS_IGNORED`           | 10012        | Warning | One or more non-numeric values in `entityIds` were ignored.                                                                        |
| `WARN_ALL_ENTITY_IDS_IGNORED`            | 10013        | Warning | All provided `entityIds` were invalid and ignored. The query fetches all entities.                                                 |
| `WARN_INVALID_SORT_KEY`                  | 10014        | Warning | Invalid `sortBy` parameter. Defaulting to sort by `id`.                                                                            |
| `WARN_INCLUDE_IGNORED_FOR_MULTIPLE_SKUS` | 10018        | Warning | The `include` parameter is only supported for single SKU requests and will be ignored.                                             |
| `WARN_INVALID_INCLUDE_VALUES`            | 10019        | Warning | One or more values passed to `include` are invalid and will be ignored.                                                            |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Capillary API",
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
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ],
  "paths": {
    "/v2/product/skus": {
      "get": {
        "summary": "Get/Search Product SKUs ",
        "parameters": [
          {
            "name": "include",
            "in": "query",
            "schema": {
              "type": "string"
            },
            "example": "category"
          },
          {
            "name": "entityIds",
            "in": "query",
            "schema": {
              "type": "integer"
            },
            "example": 32510888
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  }
}
```