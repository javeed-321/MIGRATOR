> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Categories 

Use this API to update existing product categories in bulk. You can modify category metadata such as the display name and description without recreating the category.

This API supports batch updates for up to **100 categories per request**. Each category is identified by its unique `code`, which determines the category to update. This limit is controlled by the `CONF_PRODUCT_CREATE_UPDATE_BATCH_SIZE` configuration. To modify this limit, raise a JIRA ticket to the Capillary Product Support team.

### What you can update

You can update:

* `name`
* `description`

The API updates only the fields you provide. Omitted fields remain unchanged.

### What you cannot update

You cannot update:

* `code` (immutable identifier)
* `parentCode` (category hierarchy cannot be modified)
* `ouCode` (scope cannot be changed after creation)

# Example request

```curl
curl --location --request PUT 'https://{Host}/v2/product/categories' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmkY2VhNU0M2JhODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
  {
    "code": "HOME_APPLIANCES",
    "name": "Home Appliances Updated",
    "description": "Updated description for household electrical machines.",
    "ouCode": "krishna.ou1"
  }
]'
```
```Text Update multiple categories
curl --location --request PUT 'https://{Host}/v2/product/categories' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqaVhNmODdkMTFkMTM2ODI2NmMxOQ==' \
--data '[
    {
        "code": "HOME_APPLIANCES",
        "name": "Home Appliances - Premium",
        "description": "Premium household electrical machines.",
        "ouCode": "krishna.ou1"
    },
    {
        "code": "REFRIGERATORS",
        "name": "Refrigerators & Freezers",
        "description": "Cooling and freezing units for home and commercial use.",
        "ouCode": "krishna.ou1"
    },
    {
        "code": "FURNITURE",
        "name": "Home & Office Furniture",
        "ouCode": "krishna.ou1"
    }
]'
```
```Text Update only name
curl --location --request PUT 'https://{Host}/v2/product/categories' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic a3Jpc2MDEjk2NGIwNzE1MmQyMzRiNzA=' \
--data '[
    {
        "code": "OFFICE_CHAIRS",
        "name": "Ergonomic Office Chairs",
        "ouCode": "krishna.ou1"
    }
]'
```
```Text Update only description
curl --location --request PUT 'https://{Host}/v2/product/categories' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic a3Jpc2huYS50aWxsMDE6MjAyY2I5wNzE1MmQyMzRiNzA=' \
--data '[
    {
        "code": "PARENT_LOGISTICS_500",
        "description": "Complete shipping, warehousing, and fulfillment solutions for businesses.",
        "ouCode": "krishna.ou1"
    }
]'
```

# Prerequisites

* **Access Group:** WRITE access to Product resource
* **Authorization:** Basic or OAuth token

# Body parameters

The body should be a JSON array of category objects.

| Field         | Type   | Required | Description                                                                                                                                       | Updatable |
| :------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------- |
| `code`        | string | Yes      | Specifies the unique identifier of the category to update. This field identifies which category to update and cannot be changed.                  | No        |
| `name`        | string | No       | Specifies the display name of the category (e.g., "Men's Footwear"). Supports up to 100 alphanumeric characters.                                  | Yes       |
| `description` | string | No       | Provides additional details about the category.                                                                                                   | Yes       |
| `ouCode`      | string | No       | Identifies the organization unit code. Required if the category was created at the OU level. If not provided, defaults to the organization level. | No        |
| `parentCode`  | string | No       | Not supported for updates. Attempting to provide this field will result in error 10070.                                                           | No        |

# API Quick Reference

```json Tree structure
{{PUT /v2/product/categories}}
   └─ {{RequestBody}} (Batch Array)
      ├─ {{code}} (string)
      ├─ {{name}} (string)
      ├─ {{description}} (string)
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
            "id": 11420907,
            "ouId": 50025951,
            "code": "HOME_APPLIANCES"
        },
        {
            "ouCode": "krishna.ou1",
            "id": 11420908,
            "ouId": 50025951,
            "code": "REFRIGERATORS"
        },
        {
            "ouCode": "krishna.ou1",
            "id": 11420909,
            "ouId": 50025951,
            "code": "FURNITURE"
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
```Text 400 Bad Request - Category not found
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
            "code": 9137,
            "message": "Category not found",
            "entityCode": "NONEXISTENT_CATEGORY",
            "ouCode": "krishna.ou1"
        }
    ]
}
```
```Text 400 Bad Request - Parent code cannot be updated
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
            "code": 10070,
            "message": "Parent category code cannot be updated for category: HOME_APPLIANCES"
        }
    ]
}
```
```Text 207 Partial Success
{
    "updated": [
        {
            "ouCode": "krishna.ou1",
            "id": 11420907,
            "ouId": 50025951,
            "code": "HOME_APPLIANCES"
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
            "code": 9137,
            "message": "Category not found",
            "entityCode": "NONEXISTENT_CATEGORY",
            "ouCode": "krishna.ou1"
        }
    ]
}
```

# Response parameters

| Field             | Type    | Description                                                                                    |
| :---------------- | :------ | :--------------------------------------------------------------------------------------------- |
| `updated`         | array   | Contains the array of successfully updated category objects.                                   |
| `.id`             | integer | Indicates the unique database ID of the updated category.                                      |
| `.ouId`           | integer | Specifies the Organization Unit ID, returning -1 if the category is at the organization level. |
| `.code`           | string  | Specifies the unique code of the category.                                                     |
| `.ouCode`         | string  | Specifies the organization unit code (if applicable).                                          |
| `summary`         | object  | Provides a summary of the bulk operation results.                                              |
| `.totalRequested` | integer | Indicates the total number of categories submitted in the request.                             |
| `.successCount`   | integer | Indicates the number of categories that were successfully updated.                             |
| `.failureCount`   | integer | Indicates the number of categories that failed validation.                                     |
| `errors`          | array   | Contains an array of error objects for any operations that failed.                             |
| `.code`           | integer | Specifies the error code associated with the failure.                                          |
| `.message`        | string  | Provides a human-readable error message explaining why the operation failed.                   |
| `.entityCode`     | string  | Specifies the category code that failed.                                                       |
| `.ouCode`         | string  | Specifies the organization unit code associated with the failed category.                      |
| `warnings`        | array   | Contains an array of warning objects for non-fatal issues encountered during processing.       |

# Error codes

| Code  | Description                                                                                                      |
| :---- | :--------------------------------------------------------------------------------------------------------------- |
| 9174  | Category code exceeds the maximum allowed length. Shorten the category code.                                     |
| 10001 | Invalid ouCode provided. Use a valid concept code.                                                               |
| 10002 | OU level product filtering is disabled for your organization, but an `ouCode` was provided.                      |
| 10061 | The request body is empty. Include at least one category object in the array.                                    |
| 10062 | The request exceeds the processing limit. Reduce the batch size to 100 categories or fewer.                      |
| 10063 | A category code is missing. Provide a valid, non-empty string for the `code` field.                              |
| 10065 | Category name cannot be empty. Provide a valid string for the `name` field.                                      |
| 10066 | Duplicate category codes were found within the same request. Ensure every item in the array has a unique code.   |
| 10070 | The parent category code cannot be updated. Delete and recreate the category to move it to a different parent.   |
| 10122 | The category with the specified code was not found. Verify the category code exists before attempting to update. |

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
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic",
        "description": "Example (Corrupted): Basic bmVlcmFqa3Jpc2huYTpkY2VhNmU1ODlhM2U0M2JhODdkMTFkMTM2ODI2NmMx"
      }
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ],
  "paths": {
    "/v2/product/categories": {
      "put": {
        "summary": "Update Product Categories",
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
                      "example": "HOME_APPLIANCES"
                    },
                    "name": {
                      "type": "string",
                      "example": "Home Appliances Updated"
                    },
                    "description": {
                      "type": "string",
                      "example": "Updated description for home appliances"
                    },
                    "ouCode": {
                      "type": "string",
                      "example": "krishna.ou1"
                    }
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful response"
          },
          "207": {
            "description": "Partial success - some categories updated, some failed"
          },
          "400": {
            "description": "All categories failed validation"
          }
        }
      }
    }
  }
}
```