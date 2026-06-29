> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Brands 

This API lets you **update product brands in bulk**. You can update multiple brands in a single request, subject to per-request and hierarchy constraints.

## Bulk update behaviour

* Update multiple product brands in one API request.
* You can update **up to 100 brands per request** by default.
* The per-request limit is controlled by the `CONF_PRODUCT_CREATE_UPDATE_BATCH_SIZE` configuration.

To change this limit, raise a JIRA ticket to the Capillary Product Support team.

## Brand hierarchy constraints

When updating brands, the system validates hierarchy rules to ensure consistency.

* Maximum hierarchy depth: **5 levels**
* Maximum child brands per parent: **50**

These limits are controlled by the following configurations:

| Configuration                  | Default | Description                                                 |
| ------------------------------ | ------- | ----------------------------------------------------------- |
| `org_brand_max_children_limit` | 50      | Maximum number of child brands allowed under a parent brand |
| `org_brand_max_depth_limit`    | 5       | Maximum allowed depth of the brand hierarchy                |

To modify these limits for your organization, raise a JIRA ticket to the Capillary Product Support team.

# Example request

```curl
curl --location --request PUT 'https://{Host}/v2/product/brands' \
--data '[
  {
    "code": "BRAND002",
    "name": "Brand-abibas",
    "description": "Shoes"
  },
  {
    "code": "BRAND003",
    "name": "Brand-noke",
    "ouCode": "krishna.ou1"
  }
]'
```

# Prerequisites

* Authentication: Basic or OAuth authentication
* To enable [OU support](https://docs.capillarytech.com/docs/inventory-profiles?isFramePreview=true#configuring-organisation-unit-ou-support-for-product-entities) for product entities, you need to create a JIRA ticket and enable the config CONF\_OU\_LEVEL\_PRODUCTS\_ENABLED.

# Body parameters

The request body should be a JSON array of brand update objects.

| Field         | Type   | Required | Description                                                                                                                                                                                                                                                                | Updatable |
| :------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| `code`        | string | Yes      | Specifies a unique identifier of the brand. This field identifies which brand to update and cannot be changed.                                                                                                                                                             | No        |
| `name`        | string | Optional | Defines a display name of the brand. There is no strict character limit.                                                                                                                                                                                                   | Yes       |
| `description` | string | Optional | Defines a summary of the brand. There is no strict character limit.                                                                                                                                                                                                        | Yes       |
| `ouCode`      | string | No       | Specifies the organization concept code to identify the scope of the brand. Required if the brand was created at the [OU level](https://docs.capillarytech.com/docs/inventory-profiles?isFramePreview=true#configuring-organisation-unit-ou-support-for-product-entities). | No        |

# API Quick Reference

```html Tree structure
 {{host_/v2/product/brands/{brandid}}}
   └─ {{RequestBody}} (Batch Array)
      ├─ {{code}} (string)
      ├─ {{name}} (string)
      ├─ {{description}} (string)
      ├─ {{ouCode}} (string)
      └─ {{ResponseBody}}
          ├─ {{updated}} []
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

```json
{
    "updated": [
        {
            "id": 1243080,
            "ouId": -1,
            "code": "BRAND002"
        },
        {
            "ouCode": "krishna.ou1",
            "id": 1243081,
            "ouId": 50025951,
            "code": "BRAND003"
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

| Field             | Type    | Description                                                                                     |
| :---------------- | :------ | :---------------------------------------------------------------------------------------------- |
| `updated`         | array   | Indicates the array of successfully updated ProductBrand objects containing id, ouId, and code. |
| `.id`             | long    | Specifies the unique identifier for the brand.                                                  |
| `.ouId`           | long    | Indicates the Organization unit ID. Returns -1 for organization-level brands.                   |
| `.code`           | string  | Specifies the brand code (unchanged).                                                           |
| `summary`         | object  | Defines the summary statistics for the bulk operation.                                          |
| `.totalRequested` | integer | Indicates the total number of brands in the request.                                            |
| `.successCount`   | integer | Indicates the number of brands successfully updated.                                            |
| `.failureCount`   | integer | Indicates the number of brands that failed validation.                                          |
| `warnings`        | array   | Specifies the array of warning status codes.                                                    |
| `errors`          | array   | Specifies the array of error status codes for brands that failed validation.                    |

# Error codes

| Code  | Description                                                                                        |
| :---- | :------------------------------------------------------------------------------------------------- |
| 9170  | Brand code exceeds the maximum allowed length. Shorten the brand code.                             |
| 10001 | Invalid ouCode provided. Use a valid concept code.                                                 |
| 10002 | OU level product filtering is disabled for your organization, but an `ouCode` was provided.        |
| 10051 | The request body cannot be empty.                                                                  |
| 10052 | Maximum 100 brands allowed per request.                                                            |
| 10053 | Brand code is required and cannot be empty.                                                        |
| 10055 | The brand name cannot be empty if provided.                                                        |
| 10056 | Duplicate brand codes found within the same request payload. Codes are checked case-insensitively. |
| 10060 | The brand's `parentCode` cannot be changed after creation.                                         |
| 10125 | Brand with the specified code not found.                                                           |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Update Product Brands",
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
    "/v2/product/brands": {
      "put": {
        "summary": "Update Product Brands",
        "parameters": [
          {
            "in": "header",
            "name": "Authorization",
            "schema": {
              "type": "string"
            },
            "description": "Basic Auth Header (Corrupted for security)",
            "example": "Basic bmVlcmFqa3Jpc2huYTpkY2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMx"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "code": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "ouCode": {
                      "type": "string"
                    }
                  }
                }
              },
              "example": [
                {
                  "code": "BRAND002",
                  "name": "Brand-abibas",
                  "description": "Shoes"
                },
                {
                  "code": "BRAND003",
                  "name": "Brand-noke",
                  "ouCode": "krishna.ou1"
                }
              ]
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response"
          }
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
  },
  "security": [
    {
      "basicAuth": []
    }
  ]
}
```