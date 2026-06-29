> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Brands 

Creates new product brands or updates existing ones in bulk.

**Code uniqueness:** Brand codes are validated case-insensitively. For example, "BRAND1" and "brand1" are treated as duplicates. The same code can exist for different organizational units (ouCode).

Allows you to create product brands in bulk. The API automatically processes parent brands before child brands. You can add up to 100 brands per request. This limit is controlled by the `CONF_PRODUCT_CREATE_UPDATE_BATCH_SIZE` configuration. To modify this limit, raise a JIRA ticket to the Capillary Product Support team.

An organization can maintain a hierarchy with a depth of up to 5 levels, and each parent brand can have a maximum of 50 child brands. These limits are controlled by the following configurations:

| Configuration                  | Default | Description                                             |
| :----------------------------- | :------ | :------------------------------------------------------ |
| `org_brand_max_children_limit` | 50      | Maximum number of child brands a parent brand can have. |
| `org_brand_max_depth_limit`    | 5       | Maximum hierarchy depth for brand relationships.        |

To modify these limits for your organization, raise a JIRA ticket to the Capillary Product Support team.

# Example request

```Text Create parent 
curl --location 'https://{Host}/v2/product/brands' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqa3Jpc2h2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
    {
        "code": "BRAND-parentcode",
        "name": "Brand-parent",
        "description": "This is the parent brand"
    }
]'
```
```Text create a child brand
curl --location 'https://{Host}/v2/product/brands' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqa3Jpc2huYTpkY2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
    {
        "code": "BRAND-child",
        "name": "Brand-child",
       "parentCode": "BRAND-parentcode",
        "description": "parent test"
    }
]'
```
```Text Bulk creation parent brands
curl --location 'https://nightly.intouch.capillarytech.com/v2/product/brands' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '[
    {
        "code": "BRAND-parent1",
        "name": "Brand 2",
        "description": "This is parent brand"
    },
    {
        "code": "BRAND-parent2",
        "name": "Brand 33",
        "description": "This is parent brand"
    }
]'
```
```Text Bulk creation child brands
curl --location 'https://nightly.intouch.capillarytech.com/v2/product/brands' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqa3Jpc2huY1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
    {
        "code": "BRAND-child1",
        "name": "Brand",
        "parentCode": "BRAND-parentcode",
        "description": "This is the child brand 1"
    },
    {
        "code": "BRAND-child2",
        "name": "Brand",
        "parentCode": "BRAND-parentcode",
        "description": "This is the child brand 2"
    }
]'
```
```Text Bulk parent & child
curl --location 'https://{Host}/v2/product/brands' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqa3Jpc2huYTpkY2VhJhODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
    {
        "code": "BRAND002child-1",
        "name": "Brand 2",
        "parentCode": "BRAND002parent",
        "description": "parent test"
    },
    {
        "code": "BRAND002child-2",
        "name": "Brand 2",
        "parentCode": "BRAND002parentjo",
        "description": "parent test"
    },
     {
        "code": "BRAND00parent001",
        "name": "Brand 2",
        "description": "parent test"
    }
]

]'
```

# Prerequisites

* [ ] [Basic/OAuth](https://docs.capillarytech.com/reference/authentication#/) authentication
* [ ] [WRITE access to Product resource](https://docs.capillarytech.com/docs/access-group)
* [ ] [Enable OU support if you want to associate the attributes with OU](https://docs.capillarytech.com/docs/inventory-profiles#configuring-organisation-unit-ou-support-for-product-entities)

# Body parameters

> \[!IMPORTANT]
> You must provide both the brand name and label when adding a product brand. If you provide only the name without a label, the brand is not stored and does not appear in the user interface, even if a success message is shown.

| Field         | Type   | Required | Description                                                                                                                                                                                                                                                                                                                          |
| :------------ | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`        | string | Yes      | Defines the unique identifier for the brand. A maximum of 50 characters is supported. Codes are validated case-insensitively. For example, "BRAND1" and "brand1" are treated as duplicates. The same code can exist for different organizational units (ouCode).                                                                     |
| `name`        | string | Yes      | Defines a display name of the brand. There is no strict character limit.                                                                                                                                                                                                                                                             |
| `label`       | string | Yes      | Defines the label for the brand. This field is required. If you do not provide a label, the brand is not stored and does not appear in the user interface, even if a success message is shown. The label helps identify the brand in the UI.                                                                                         |
| `description` | string | Optional | Defines a summary of the brand. There is no strict character limit.                                                                                                                                                                                                                                                                  |
| `ouCode`      | string | Optional | Specifies the concept code of the organisation unit. This is applicable only if OU support for product inventory is enabled. For more information, see [OU support for product inventory.](https://docs.capillarytech.com/docs/inventory-profiles?isFramePreview=true#configuring-organisation-unit-ou-support-for-product-entities) |
| `parentCode`  | string | Optional | Code of the parent brand. Parent brand must be already created or be in the same request body.                                                                                                                                                                                                                                       |

# API quick reference

```html Tree structure
{{https://{Host}/v2/product/brands}}
   └─ {{RequestBody}} (Batch Array)
      ├─ {{code}} (string)
      ├─ {{name}} (string)
      ├─ {{label}} (string)
      ├─ {{description}} (string)
      ├─ {{ouCode}} (string)
      ├─ {{parentCode}} (string)
      └─ {{ResponseBody}}
          ├─ {{created}} []
          │   ├─ {{responseId}} (integer)
          │   ├─ {{responseOuId}} (integer)
          │   └─ {{responseCode}} (string)
          ├─ {{summary}}
          │   ├─ {{totalRequested}} (integer)
          │   ├─ {{successCount}} (integer)
          │   └─ {{failureCount}} (integer)
          ├─ {{warnings}} []
          └─ {{errors}} []
```

# Example response

```Text 200 OK
{
    "created": [
        {
            "id": 1242752,
            "ouId": -1,
            "code": "BRAND_001"
        },
        {
            "id": 1242753,
            "ouId": 15041271,
            "code": "BRAND_002"
        }
    ],
    "summary": {
        "totalRequested": 2,
        "successCount": 2,
        "failureCount": 0
    },
    "warnings": [],
    "errors": []
}

```

# Response parameters

| Field             | Type    | Description                                                                               |
| :---------------- | :------ | :---------------------------------------------------------------------------------------- |
| `created`         | array   | Indicates the list of successfully created brand objects.                                 |
| `.id`             | integer | Indicates the system-generated unique ID for the brand.                                   |
| `.ouId`           | integer | Indicates the ID of the Organization Unit (-1 for Org level).                             |
| `.code`           | string  | Indicates the brand code is provided in the request.                                      |
| `summary`         | object  | Represents the high-level statistics and meta-information for the bulk operation.         |
| `.totalRequested` | integer | Specifies the total count of brand records submitted in the request payload.              |
| `.successCount`   | integer | Tracks the number of brand entities that passed validation and were successfully created. |
| `.failureCount`   | integer | Specifies the number of brand records that failed validation and were rejected.           |
| `warnings`        | array   | Highlights non-blocking issues or ignored parameters encountered during processing.       |
| `errors`          | array   | List of error objects for failed records.                                                 |

# Error codes

| Code  | Description                                                                                                                           |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------ |
| 9182  | Organization-level brand limit reached. Contact support to increase the limit.                                                        |
| 9170  | Brand code exceeds the maximum length of 50 characters.                                                                               |
| 10001 | Invalid ouCode provided. Use a valid concept code.                                                                                    |
| 10002 | OU level product filtering is disabled for your organization, but an `ouCode` was provided.                                           |
| 10051 | At least one brand must be present in the request.                                                                                    |
| 10052 | Request exceeds the limit of 100 brands.                                                                                              |
| 10053 | Brand code cannot be empty. Provide a valid string for the `code` field.                                                              |
| 10054 | Brand code already exists in the database. Codes are checked case-insensitively.                                                      |
| 10055 | Brand name cannot be empty. Provide a valid string for the `name` field.                                                              |
| 10056 | Duplicate brand codes found within the same request payload (for the same organizational unit). Codes are checked case-insensitively. |
| 10057 | The specified `parentCode` does not exist.                                                                                            |
| 10058 | Parent brand has exceeded the maximum number of child brands.                                                                         |
| 10059 | Hierarchy depth exceeds the 5-level limit.                                                                                            |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Product Brands API",
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
        "scheme": "basic",
        "description": "Basic Auth. Example (Corrupted): Basic bmVlcmFqa3Jpc2huYTpkY2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMx"
      }
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ],
  "paths": {
    "/v2/product/brands": {
      "post": {
        "summary": "Create or Update Product Brands",
        "description": "Creates new product brands or updates existing ones in bulk.\n\n**Code uniqueness:** Brand codes are validated case-insensitively. For example, \"BRAND1\" and \"brand1\" are treated as duplicates. The same code can exist for different organizational units (ouCode).",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "code": {
                      "type": "string",
                      "description": "Unique identifier for the brand. Codes are validated case-insensitively—\"BRAND1\" and \"brand1\" are treated as duplicates.  The same code can exist for different organizational units (ouCode).",
                      "example": "BRAND002COOKIE"
                    },
                    "name": {
                      "type": "string",
                      "description": "Display name for the brand.",
                      "example": "Brand 2"
                    },
                    "description": {
                      "type": "string",
                      "description": "Optional description for the brand.",
                      "example": "parent test"
                    },
                    "ouCode": {
                      "type": "string",
                      "description": "Organizational unit code. When specified, brand code uniqueness is scoped to this organizational unit,  allowing the same brand code to exist in different organizational units.",
                      "example": "store1.ou"
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response"
          },
          "400": {
            "description": "Bad request. Possible error codes:\n- **10054** (ERR_BRAND_CODE_EXISTS): Brand code already exists in the database. Codes are checked case-insensitively.\n- **10056** (ERR_BRAND_DUPLICATE_CODE_IN_PAYLOAD): Duplicate brand codes found within the same request payload (for the same organizational unit). Codes are checked case-insensitively."
          }
        },
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://{Host}/v2/product/brands' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bmVlcmFqa3Jpc2h2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMxOQ==' \\\n--data '[\n    {\n        \"code\": \"BRAND-parentcode\",\n        \"name\": \"Brand-parent\",\n        \"description\": \"This is the parent brand\"\n    }\n]'",
              "language": "shell",
              "name": ""
            }
          ],
          "samples-languages": [
            "shell"
          ]
        }
      }
    }
  }
}
```