> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Attribute Values

Use this API to update one or more existing product attribute values in bulk. Attribute values represent the allowed options under a product attribute, such as `Red` under `Color` or `Cotton` under `Material`.

You can update up to **100 attribute values per request**. This batch limit is controlled by the `CONF_PRODUCT_CREATE_UPDATE_BATCH_SIZE` configuration.

Each attribute value is identified using:

* `code` (attribute value code)
* `attributeCode` (parent attribute code)
* `ouCode` (if OU-scoped)

These fields locate the target record and **cannot be modified**.

### What you can update

* `name`

The API updates only the fields you provide in the request. Omitted fields remain unchanged.

### What you cannot update

* `code` (immutable identifier)
* `attributeCode` (parent attribute cannot be changed)
* `ouCode` (scope cannot be changed after creation)

To move an attribute value to a different attribute, delete it and recreate it under the correct attribute.

### Default and validation behaviour

* If the attribute does not exist, the API returns error `10250`.
* If the attribute value does not exist, the API returns error `10251`.
* If some records succeed and others fail, the API returns **207 Partial Success** with summary details.
* Duplicate value codes within the same request result in validation errors.

### Organisation unit (OU) behaviour

* If `ouCode` is provided, the API updates the OU-scoped attribute value.
* If `ouCode` is not provided, the API updates the organisation-level value (`ouId = -1`).
* OU scope cannot be changed using this API.

# Example request

```curl
curl --location --request PUT 'https://{Host}/v2/product/attributeValues' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqaVhNmODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
  {
    "code": "COTTON",
    "name": "Premium Cotton",
    "attributeCode": "Material",
    "ouCode": "krishna.ou1"
  }
]'
```
```Text Update multiple attribute values
curl --location --request PUT 'https://{Host}/v2/product/attributeValues' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqaVhNmODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
    {
        "code": "COTTON",
        "name": "Premium Cotton",
        "attributeCode": "Material",
        "ouCode": "krishna.ou1"
    },
    {
        "code": "POLYESTER",
        "name": "Recycled Polyester",
        "attributeCode": "Material",
        "ouCode": "krishna.ou1"
    },
    {
        "code": "SILK",
        "name": "Natural Silk",
        "attributeCode": "Material",
        "ouCode": "krishna.ou1"
    }
]'
```
```Text Update only name
curl --location --request PUT 'https://{Host}/v2/product/attributeValues' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic a3Jpc2huYS50aWxsMDE6MjAyY2I5wNzE1MmQyMzRiNzA=' \
--data '[
    {
        "code": "WOOL",
        "name": "Merino Wool",
        "attributeCode": "Material",
        "ouCode": "krishna.ou1"
    }
]'
```
```Text Update at organization level
curl --location --request PUT 'https://{Host}/v2/product/attributeValues' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic a3Jpc2huYS50aWxsMDE6MjAyY2I5wNzE1MmQyMzRiNzA=' \
--data '[
    {
        "code": "RED",
        "name": "Cherry Red",
        "attributeCode": "Color"
    }
]'
```

# Prerequisites

* **Access Group:** WRITE access to Product resource
* **Authorization:** Basic or OAuth token

# Body parameters

The body should be a JSON array of attribute value objects.

| Field           | Type   | Required | Description                                                                                                                                              | Updatable |
| :-------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| `code`          | string | Yes      | Specifies the unique identifier of the attribute value to update. This field identifies which attribute value to update and cannot be changed.           | No        |
| `name`          | string | No       | Specifies the display name of the attribute value (e.g., "Premium Cotton"). Supports up to 100 alphanumeric characters.                                  | Yes       |
| `attributeCode` | string | Yes      | Identifies the parent attribute code. Required to locate the attribute value. This field cannot be modified.                                             | No        |
| `ouCode`        | string | No       | Identifies the organization unit code. Required if the attribute value was created at the OU level. If not provided, defaults to the organization level. | No        |

# API Quick Reference

```json Tree structure
{{PUT /v2/product/attributeValues}}
   └─ {{RequestBody}} (Batch Array)
      ├─ {{code}} (string)
      ├─ {{name}} (string)
      ├─ {{attributeCode}} (string)
      ├─ {{ouCode}} (string)
      └─ {{ResponseBody}}
          ├─ {{updated}} []
          │   ├─ {{responseId}} (integer)
          │   ├─ {{responseOuId}} (integer)
          │   ├─ {{responseCode}} (string)
          │   └─ {{responseOuCode}} (string)
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
    "updated": [
        {
            "ouCode": "krishna.ou1",
            "id": 13544113,
            "ouId": 50025951,
            "code": "COTTON"
        },
        {
            "ouCode": "krishna.ou1",
            "id": 13544114,
            "ouId": 50025951,
            "code": "POLYESTER"
        },
        {
            "ouCode": "krishna.ou1",
            "id": 13544115,
            "ouId": 50025951,
            "code": "SILK"
        }
    ],
    "summary": {
        "totalRequested": 3,
        "successCount": 3,
        "failureCount": 0
    },
    "warnings": [],
    "errors": []
}
```

```Text 400 Bad Request - Attribute value not found
{
    "updated": [],
    "summary": {
        "totalRequested": 1,
        "successCount": 0,
        "failureCount": 1
    },
    "warnings": [],
    "errors": [
        {
            "code": 10251,
            "message": "Attribute value not found",
            "entityCode": "NONEXISTENT_VALUE",
            "ouCode": "krishna.ou1"
        }
    ]
}
```

```Text 400 Bad Request - Attribute code not found
{
    "updated": [],
    "summary": {
        "totalRequested": 1,
        "successCount": 0,
        "failureCount": 1
    },
    "warnings": [],
    "errors": [
        {
            "code": 10250,
            "message": "Attribute not found with code: INVALID_ATTR",
            "entityCode": "COTTON",
            "ouCode": "krishna.ou1"
        }
    ]
}
```

```Text 207 Partial Success
{
    "updated": [
        {
            "ouCode": "krishna.ou1",
            "id": 13544113,
            "ouId": 50025951,
            "code": "COTTON"
        }
    ],
    "summary": {
        "totalRequested": 2,
        "successCount": 1,
        "failureCount": 1
    },
    "warnings": [],
    "errors": [
        {
            "code": 10251,
            "message": "Attribute value not found",
            "entityCode": "NONEXISTENT_VALUE",
            "ouCode": "krishna.ou1"
        }
    ]
}
```

# Response parameters

| Field             | Type    | Description                                                                                           |
| :---------------- | :------ | :---------------------------------------------------------------------------------------------------- |
| `updated`         | array   | Contains the array of successfully updated attribute value objects.                                   |
| `.id`             | integer | Indicates the unique database ID of the updated attribute value.                                      |
| `.ouId`           | integer | Specifies the Organization Unit ID, returning -1 if the attribute value is at the organization level. |
| `.code`           | string  | Specifies the unique code of the attribute value.                                                     |
| `.ouCode`         | string  | Specifies the organization unit code (if applicable).                                                 |
| `summary`         | object  | Provides a summary of the bulk operation results.                                                     |
| `.totalRequested` | integer | Indicates the total number of attribute values submitted in the request.                              |
| `.successCount`   | integer | Indicates the number of attribute values that were successfully updated.                              |
| `.failureCount`   | integer | Indicates the number of attribute values that failed validation.                                      |
| `errors`          | array   | Contains an array of error objects for any operations that failed.                                    |
| `.code`           | integer | Specifies the error code associated with the failure.                                                 |
| `.message`        | string  | Provides a human-readable error message explaining why the operation failed.                          |
| `.entityCode`     | string  | Specifies the attribute value code that failed.                                                       |
| `.ouCode`         | string  | Specifies the organization unit code associated with the failed attribute value.                      |
| `warnings`        | array   | Contains an array of warning objects for non-fatal issues encountered during processing.              |

# Error codes

| Code  | Description                                                                                                           |
| :---- | :-------------------------------------------------------------------------------------------------------------------- |
| 10001 | Invalid ouCode provided. Use a valid concept code.                                                                    |
| 10002 | OU level product filtering is disabled for your organization, but an `ouCode` was provided.                           |
| 10003 | Duplicate attribute value codes were found within the same request. Ensure every item in the array has a unique code. |
| 10121 | The attribute value with the specified code was not found. Verify the attribute value code exists.                    |
| 10201 | The request body is empty. Include at least one attribute value object in the array.                                  |
| 10202 | The request exceeds the processing limit. Reduce the batch size to 100 attribute values or fewer.                     |
| 10203 | An attribute code is missing. Provide a valid, non-empty string for the `attributeCode` field.                        |
| 10205 | Attribute code exceeds the maximum length of 30 characters. Shorten the `attributeCode`.                              |
| 10212 | The attribute with the specified code was not found. Verify the attribute code exists before attempting to update.    |
| 10251 | An attribute value code is missing. Provide a valid, non-empty string for the `code` field.                           |
| 10252 | Attribute value code exceeds the maximum length of 30 characters. Provide a shorter value code.                       |
| 10253 | The attribute value name cannot be empty if provided. Provide a valid name string.                                    |
| 10254 | The name length exceeds the maximum limit. Shorten the attribute value name.                                          |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Update Product Attribute Values",
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
      "put": {
        "summary": "Update Product Attribute Values",
        "tags": [
          "Product"
        ],
        "security": [
          {
            "basicAuth": []
          }
        ],
        "parameters": [
          {
            "in": "header",
            "name": "Authorization",
            "schema": {
              "type": "string",
              "default": "Basic bmVlcmFqa3Jpc2huYTpkY2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMx"
            },
            "required": true,
            "description": "Standard Basic Auth header."
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
                    "attributeCode": {
                      "type": "string",
                      "example": "orange"
                    },
                    "ouCode": {
                      "type": "string",
                      "example": "invalid"
                    },
                    "code": {
                      "type": "string",
                      "example": "efkejrfhkejrfh"
                    },
                    "name": {
                      "type": "string",
                      "example": "EWRFEFRE"
                    }
                  }
                }
              },
              "example": [
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
  }
}
```