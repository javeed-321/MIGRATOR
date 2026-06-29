> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Attribute Values

Use this API to create **attribute values** for existing product attributes. Attribute values define the allowed options that can be assigned to an attribute.

For example, if you create an attribute called `Color`, you can define values such as `Red`, `Blue`, and `Green`. These values standardise product data and ensure consistent classification across your catalogue.

### What this API supports

* Bulk creation of attribute values (up to 100 per request)
* Association with an existing attribute using `attributeCode`
* Optional OU-scoped attribute values
* Separate value sets per organisation unit, if required

### Limits and configuration

* You can create up to **100 attribute values per request**. This limit is controlled by `CONF_PRODUCT_CREATE_UPDATE_BATCH_SIZE`.
* By default, you can create up to **100 values per attribute**. This limit is controlled by `org_product_custom_attribute_value_limit`.
* You can raise a JIRA ticket to modify these configuration values.

### Default and validation behaviour

* The parent attribute must already exist.
* The `code` must be unique within the same attribute.
* If `name` is not provided, the API uses the `code` as the display name.
* If `ouCode` is not provided, the attribute value is created at the organisation level (`ouId = -1`).
* If the attribute ID is invalid, the API returns an error and does not create the value.

### Organisation unit (OU) behaviour

* You can scope attribute values to a specific OU using `ouCode`.
* OU-scoped values require OU support to be enabled.
* Org-level and OU-level values are stored separately.

# Example request

```bash
curl --location 'https://eu.api.capillarytech.com/v2/product/attributeValues' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=WEe5YUE2FwJBe7O0wzcDvSNI44nigxpVw3YBGB2zmFM-1772180246584-0.0.1.1-604800000' \
--data '[
    {
        "attributeCode": "orange",
        "ouCode": "invalid",
        "code": "efkejrfhkejrfh",
        "name": "EWRFEFRE"
    },
    {
        "attributeCode": "orange",
        "code": "efjhekrjfkej",
        "name": "VFGVFG"
    }
]'
```

# Prerequisites

* Access Group: You must have WRITE access to the Product resource.
  * Attribute Exists: The parent attribute (specified by `attributeCode`) must already exist. Use the [Add Product Attributes API](https://docs.capillarytech.com/docs/add_product_attributes_v2) to create attributes first.
* OU Configuration: If you intend to scope attribute values to specific Organization Units (OUs), ensure OU support for product entities is enabled.

# Body parameters

| Field           | Type   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :-------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `attributeCode` | long   | Yes      | The ID of the parent attribute for which you are creating values. Use the `id` from the response of the [Add Product Attributes API](https://docs.capillarytech.com/docs/add_product_attributes_v2) or [Get Product Attributes API](https://docs.capillarytech.com/docs/getv2productattributes).                                                                                                                                                                                                                        |
| `code`          | string | Yes      | Defines the unique identifier for the attribute value within the parent attribute. Maximum 50 characters are supported. Codes are validated case-insensitively. For example, "ATTRIBUTEVALUE1" and "attributevalue1" are treated as duplicates.  The same code can exist for different organizational units (ouCode).                                                                                                                                   |
| `name`          | string | Optional | Defines a display name of the attribute value. If not provided, the `code` value is used as the display name.                                                                                                                                                                                                                                                                                                                                           |
| `ouCode`        | string | Optional | The OU code to scope the attribute value. If omitted, the attribute value is created at the org level (ouId = -1). Specifies the concept code of the organisation unit. This is applicable only if OU support for product inventory is enabled. For more information, see [OU support for product inventory](https://docs.capillarytech.com/docs/inventory-profiles?isFramePreview=true#configuring-organisation-unit-ou-support-for-product-entities). |

# API Quick Reference

```html
{{https://{host}.api.capillarytech.com/v2/product/attributeValues}}
   └─ {{RequestBody}} (Batch Array)
      ├─ {{attributeCode}} (long)
      ├─ {{code}} (string)
      ├─ {{name}} (string)
      ├─ {{ouCode}} (string)
      └─ {{ResponseBody}}
          ├─ {{created}} []
          │   ├─ {{id}} (long)
          │   ├─ {{attributeId}} (long)
          │   ├─ {{code}} (string)
          │   ├─ {{ouId}} (integer)
          │   └─ {{ouCode}} (string)
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
    "created": [
        {
            "id": 13567890,
            "attributeId": 91459,
            "code": "red",
            "ouId": -1
        },
        {
            "id": 13567891,
            "attributeId": 91459,
            "code": "blue",
            "ouId": 50025951,
            "ouCode": "zone_north_01"
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

| Field             | Type    | Description                                                                                                                                         |
| :---------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `created`         | array   | Contains a list of successfully created product attribute value objects.                                                                            |
| `.id`             | long    | Specifies the auto-generated unique identifier for the attribute value.                                                                             |
| `.attributeId`    | long    | The ID of the parent attribute to which this value belongs.                                                                                         |
| `.code`           | string  | Defines the unique attribute value code provided in the request.                                                                                    |
| `.ouId`           | integer | Indicates the ID of the Organization Unit (OU) where the attribute value was created. `-1` indicates org level.                                     |
| `.ouCode`         | string  | Organization unit code. Only included if the attribute value belongs to a specific OU (not returned for organization-level values where ouId = -1). |
| `summary`         | object  | Provides a statistical overview of the results of the bulk operation.                                                                               |
| `.totalRequested` | integer | Specifies the total number of attribute values processed in the request.                                                                            |
| `.successCount`   | integer | Indicates the total number of attribute values successfully created.                                                                                |
| `.failureCount`   | integer | Indicates the total number of attribute values that failed validation or creation.                                                                  |
| `warnings`        | array   | Contains non-blocking notices.                                                                                                                      |
| `errors`          | array   | Contains detailed error information for each attribute value that failed validation.                                                                |

# Error codes

| Code  | Description                                                                                                       |
| :---- | :---------------------------------------------------------------------------------------------------------------- |
| 9182  | Organization-level attribute value limit reached. Contact support to increase the limit.                          |
| 10001 | Invalid ouCode provided. Use a valid concept code.                                                                |
| 10002 | OU level product filtering is disabled for your organization, but an `ouCode` was provided.                       |
| 10003 | Duplicate attribute value code found within the same request payload. Use a unique value code within all objects. |
| 10201 | At least one attribute value must be present in the request.                                                      |
| 10202 | Batch size exceeded. A maximum of 100 attribute values can be processed in a single request.                      |
| 10203 | Attribute code cannot be empty. Provide a valid string for the `attributeCode` field.                             |
| 10205 | Attribute code exceeds the maximum length of 30 characters. Shorten the `attributeCode`.                          |
| 10212 | Invalid attribute code provided. The specified attribute does not exist.                                          |
| 10251 | Attribute value code cannot be empty. Provide a valid string for the `code` field.                                |
| 10252 | Attribute value code exceeds the maximum length of 30 characters. Provide a shorter value code.                   |
| 10253 | Attribute value name cannot be empty if provided. Provide a valid string for the `name` field.                    |
| 10254 | Attribute value name exceeds the maximum length. Shorten the `name` value.                                        |
| 10255 | Attribute value code already exists for this attribute. Use a unique value code within the same attribute.        |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Capillary InTouch API",
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
    "/v2/product/attributeValues": {
      "post": {
        "summary": "Create Product Attribute Values",
        "operationId": "postV2productattributeValues",
        "parameters": [
          {
            "in": "header",
            "name": "Authorization",
            "schema": {
              "type": "string",
              "default": "Basic bmVlcmFqa3Jpc2huYTpkY2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMx"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "attributeId": {
                      "type": "integer",
                      "example": 91459
                    },
                    "code": {
                      "type": "string",
                      "example": "red"
                    },
                    "name": {
                      "type": "string",
                      "example": "Red Color"
                    },
                    "ouCode": {
                      "type": "string",
                      "example": "zone_north_01"
                    }
                  }
                }
              },
              "example": [
                {
                  "attributeId": 91459,
                  "code": "red",
                  "name": "Red Color"
                },
                {
                  "attributeId": 91459,
                  "ouCode": "zone_north_01",
                  "code": "blue",
                  "name": "Blue Color"
                }
              ]
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "created": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer"
                          },
                          "attributeId": {
                            "type": "integer"
                          },
                          "code": {
                            "type": "string"
                          },
                          "ouId": {
                            "type": "integer"
                          },
                          "ouCode": {
                            "type": "string"
                          }
                        }
                      }
                    },
                    "summary": {
                      "type": "object",
                      "properties": {
                        "totalRequested": {
                          "type": "integer"
                        },
                        "successCount": {
                          "type": "integer"
                        },
                        "failureCount": {
                          "type": "integer"
                        }
                      }
                    },
                    "warnings": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    },
                    "errors": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    }
                  }
                },
                "example": {
                  "created": [
                    {
                      "id": 13567890,
                      "attributeId": 91459,
                      "code": "red",
                      "ouId": -1
                    },
                    {
                      "id": 13567891,
                      "attributeId": 91459,
                      "code": "blue",
                      "ouId": 50025951,
                      "ouCode": "zone_north_01"
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
              }
            }
          }
        }
      }
    }
  }
}
```