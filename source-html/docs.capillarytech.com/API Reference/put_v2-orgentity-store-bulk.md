> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Bulk Stores

Allows the org admin to update existing stores in bulk

Use this API to update multiple existing stores in bulk. You can modify store details such as contact information, location coordinates, timezone, currency, language settings, and external IDs. The API processes stores in batches of 200 for optimal performance.

<Callout icon="🚧" theme="warn">
  This API performs a full replace, not a partial update

Any field you omit from the request body will be saved as empty, overwriting existing data. Only include fields you intend to update, and always pass the current value for fields you want to keep unchanged.
Example: If a store has description: "Main flagship store" and you send an update request without the description field, the description will be cleared. </Callout>

## Example request

```bash
curl --location --request PUT 'https://eu.intouch.capillarytech.com/v2/orgEntity/store/bulk' \
--header 'X-CAP-API-OAUTH-TOKEN: eyJraWQiImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE3NzUxNDgzNzUsImp0aSI6InhoZmYyd0M3NldLa3B4dW8xNGo5ZVEiLCJpYXQiOjE3NzUxNDQ3NzUsInN1YiI6Ik5lZXJhaiIsImNsaWVudF9pZCI6MjE5NzYsIm9yZ19pZCI6MTAwNzM3LCJ0b2tlbl91c2UiOiJ0b2tlbl9hY2Nlc3MiLCJjbGllbnRfa2V5IjoieHY0TFc3MXJOOXJyekY4NlcxMUx3M0pneiIsImRlZmF1bHRfdGlsbCI6NzUxNTUyODIsImhhc19wc2lfYWNjZXNzIjp0cnVlLCJzY29wZXMiOiJbXSJ9.bv2KjNQrsjy7_gCpbjq6GURfw1RDxIjXMYlT164lrN31Vnp3YJJrXwbM1yyOG-iStKAJuedyjBx7T3dua4ysos7L_UJg47Q0A-xbVA1R6Vqp3m2lPlX_pI8flBu5NdF2n3A3weCmXQj6Hyn2Rhbcs8il4lxCPPt3z7iRMzb66-d6GnpsuDodLfbUFF9j8GvVa2_Qq51xAjO13dcnkHdrtKFZrK5TCHgY-bBDMdW4A613d1tCzpfQo-5kiNSLwQjWDN6xQ-pcgXW5OU7SwIWhiKVApYJSFfBx6mNNsdBnculhgB-JwyXNwh8J7McBK8d-_t6RY-w_T_VA5YIhyNTwCA' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "id" : 75228794,
        "code": "thisisastore",
        "description": "This is a test store",
        "name": "ThisisAStore",
        "referenceId": -1,
        "email": "newemail@test.com",
        
        "landline": "080-99999999",
        "latitude": "13.0827",
        "longitude": "80.2707",
        "cityId": 2,
        "areaId": 2,
        "default": false,
        "externalIds": [
            "a1",
            "a2",
            "a3"
        ],
        "adminType": "GENERAL",
        "isActive": true,
        "parentConceptId": "75216471",
    "parentZoneId": "75152646"
    }
]'
```

## Prerequisites

* Authentication: OAuth authentication
* Access group resource: Read and write access to the `Store` resource
* The stores being updated must already exist in the system (identified by store code)

## Body parameters

> **Note:** The **Updatable** column indicates whether a field can be changed after creation.
> Fields marked **No** must still be supplied in the request body but will be ignored.
>
> | Field             | Type    | Required | Description                                                                                                                                                                                                                                     | Updatable |
> | ----------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
> | `id`              | integer | Optional | Unique ID of the store to be updated.                                                                                                                                                                                                           | No        |
> | `code`            | string  | Required | Unique store code used to identify the store to update. The store must already exist in the system.                                                                                                                                             | No        |
> | `name`            | string  | Required | Name of the store. Used for validation along with `code`.                                                                                                                                                                                       | No        |
> | `description`     | string  | Optional | Description of the store. Maximum 250 characters.                                                                                                                                                                                               | Yes       |
> | `referenceId`     | integer | Optional | Reference ID of the store. Pass `-1` if not applicable.                                                                                                                                                                                         | Yes       |
> | `adminType`       | enum    | Optional | Admin type of the store. Values: `GENERAL`, `ADMIN`.                                                                                                                                                                                            | Yes       |
> | `isActive`        | boolean | Optional | Indicates whether the store is active.                                                                                                                                                                                                          | Yes       |
> | `isOuEnabled`     | boolean | Optional | Indicates whether the organisation unit (OU) is enabled for the store. Only applicable when the store is part of a concept hierarchy.                                                                                                           | Yes       |
> | `default`         | boolean | Optional | Indicates whether this is the default store.                                                                                                                                                                                                    | Yes       |
> | `parentConceptId` | integer | Optional | ID of the parent concept the store belongs to.                                                                                                                                                                                                  | Yes       |
> | `parentZoneId`    | integer | Optional | ID of the parent zone the store belongs to.                                                                                                                                                                                                     | Yes       |
> | `timeZoneId`      | integer | Optional | <Anchor label="Unique ID" target="_blank" href="https://docs.capillarytech.com/reference/add-store#country-ids-by-timezone">Unique ID</Anchor> representing the timezone of the store's geographical location. Example: `191` for Asia/Kolkata. | Yes       |
> | `currencyId`      | integer | Optional | Unique ID representing the base currency of the store's location. Example: `230` for Singapore Dollar, `211` for Australian Dollars.                                                                                                            | Yes       |
> | `languageId`      | integer | Optional | Unique ID representing the language used at the store. Example: `393`.                                                                                                                                                                          | Yes       |
> | `externalIds`     | array   | Optional | List of external identifiers associated with the store. Supports up to 3 external IDs.                                                                                                                                                          | Yes       |
> | `email`           | string  | Optional | Store's email address.                                                                                                                                                                                                                          | Yes       |
> | `mobile`          | string  | Optional | Store's mobile number.                                                                                                                                                                                                                          | Yes       |
> | `landline`        | string  | Optional | Store's landline number.                                                                                                                                                                                                                        | Yes       |
> | `latitude`        | string  | Optional | Latitude coordinate of the store.                                                                                                                                                                                                               | Yes       |
> | `longitude`       | string  | Optional | Longitude coordinate of the store.                                                                                                                                                                                                              | Yes       |
> | `cityId`          | integer | Optional | Unique ID for the city where the store is located.                                                                                                                                                                                              | Yes       |
> | `areaId`          | integer | Optional | Unique ID for the area where the store is located.                                                                                                                                                                                              | Yes       |

## Example response

```json 200 OK
{
    "response": [
        {
            "entityId": 75228794,
            "result": {
                "id": 75228794,
                "code": "thisisastore",
                "description": "This is a test store",
                "name": "ThisisAStore",
                "type": "STORE",
                "referenceId": -1,
                "adminType": "GENERAL",
                "isActive": true,
                "parentZoneId": 75152646,
                "parentConceptId": 75216471,
                "externalIds": [
                    "a1",
                    "a2",
                    "a3"
                ],
                "email": "newemail@test.com",
                "landline": "080-99999999",
                "latitude": "13.0827",
                "longitude": "80.2707",
                "cityId": 2,
                "areaId": 2,
                "default": false
            },
            "errors": [],
            "warnings": []
        }
    ],
    "totalCount": 1,
    "failureCount": 0
}
```

## Response parameters

| Field                               | Type    | Description                                                                        |
| ----------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| `response`                          | array   | List of responses for each store update.                                           |
| `response[].entityId`               | integer | Unique identifier of the updated store. Returns `null` if the store was not found. |
| `response[].result`                 | object  | Store details that were submitted for update.                                      |
| `response[].result.id`              | integer | Unique ID of the store.                                                            |
| `response[].result.code`            | string  | Store code used to identify the store.                                             |
| `response[].result.name`            | string  | Name of the store.                                                                 |
| `response[].result.description`     | string  | Description of the store.                                                          |
| `response[].result.type`            | enum    | Entity type. Value: `STORE`.                                                       |
| `response[].result.referenceId`     | integer | Reference ID of the store. Returns `-1` if not set.                                |
| `response[].result.adminType`       | enum    | Admin type of the store. Example: `GENERAL`.                                       |
| `response[].result.isActive`        | boolean | Indicates whether the store is active.                                             |
| `response[].result.parentZoneId`    | integer | ID of the parent zone the store belongs to.                                        |
| `response[].result.parentConceptId` | integer | ID of the parent concept the store belongs to.                                     |
| `response[].result.externalIds`     | array   | List of external identifiers associated with the store.                            |
| `response[].result.email`           | string  | Store's email address.                                                             |
| `response[].result.landline`        | string  | Store's landline number.                                                           |
| `response[].result.latitude`        | string  | Latitude coordinate of the store.                                                  |
| `response[].result.longitude`       | string  | Longitude coordinate of the store.                                                 |
| `response[].result.cityId`          | integer | City ID of the store.                                                              |
| `response[].result.areaId`          | integer | Area ID of the store.                                                              |
| `response[].result.default`         | boolean | Indicates whether this is the default store.                                       |
| `response[].errors`                 | array   | List of errors related to the store update, if any.                                |
| `response[].warnings`               | array   | List of warnings related to the store update, if any.                              |
| `totalCount`                        | integer | Total number of stores processed.                                                  |
| `failureCount`                      | integer | Total number of stores that failed to update.                                      |

## Error & warning codes

| Code                           | Description                                                     |
| ------------------------------ | --------------------------------------------------------------- |
| STORE\_CODE\_MISSING (1234)    | The `code` field is missing from the request for a store entry. |
| STORE\_NAME\_NOT\_FOUND (1235) | No store matching the provided `name` was found in the system.  |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Update Bulk Stores",
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
    "/v2/orgEntity/store/bulk": {
      "put": {
        "summary": "Update Bulk Stores",
        "security": [
          {
            "ApiKeyAuth": []
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
                    "id": {
                      "type": "integer"
                    },
                    "code": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "referenceId": {
                      "type": "integer"
                    },
                    "email": {
                      "type": "string"
                    },
                    "landline": {
                      "type": "string"
                    },
                    "latitude": {
                      "type": "string"
                    },
                    "longitude": {
                      "type": "string"
                    },
                    "cityId": {
                      "type": "integer"
                    },
                    "areaId": {
                      "type": "integer"
                    },
                    "default": {
                      "type": "boolean"
                    },
                    "externalIds": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "adminType": {
                      "type": "string"
                    },
                    "isActive": {
                      "type": "boolean"
                    },
                    "parentConceptId": {
                      "type": "string"
                    },
                    "parentZoneId": {
                      "type": "string"
                    }
                  }
                }
              },
              "example": [
                {
                  "id": 75228794,
                  "code": "thisisastore",
                  "description": "This is a test store",
                  "name": "ThisisAStore",
                  "referenceId": -1,
                  "email": "newemail@test.com",
                  "landline": "080-99999999",
                  "latitude": "13.0827",
                  "longitude": "80.2707",
                  "cityId": 2,
                  "areaId": 2,
                  "default": false,
                  "externalIds": [
                    "a1",
                    "a2",
                    "a3"
                  ],
                  "adminType": "GENERAL",
                  "isActive": true,
                  "parentConceptId": "75216471",
                  "parentZoneId": "75152646"
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
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "response": [
                        {
                          "entityId": 75228794,
                          "result": {
                            "id": 75228794,
                            "code": "thisisastore",
                            "description": "This is a test store",
                            "name": "ThisisAStore",
                            "type": "STORE",
                            "referenceId": -1,
                            "adminType": "GENERAL",
                            "isActive": true,
                            "parentZoneId": 75152646,
                            "parentConceptId": 75216471,
                            "externalIds": [
                              "a1",
                              "a2",
                              "a3"
                            ],
                            "email": "newemail@test.com",
                            "landline": "080-99999999",
                            "latitude": "13.0827",
                            "longitude": "80.2707",
                            "cityId": 2,
                            "areaId": 2,
                            "default": false
                          },
                          "errors": [],
                          "warnings": []
                        }
                      ],
                      "totalCount": 1,
                      "failureCount": 0
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
              "code": "curl --location --request PUT 'https://eu.intouch.capillarytech.com/v2/orgEntity/store/bulk' \\\n--header 'X-CAP-API-OAUTH-TOKEN: eyJraWQiImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE3NzUxNDgzNzUsImp0aSI6InhoZmYyd0M3NldLa3B4dW8xNGo5ZVEiLCJpYXQiOjE3NzUxNDQ3NzUsInN1YiI6Ik5lZXJhaiIsImNsaWVudF9pZCI6MjE5NzYsIm9yZ19pZCI6MTAwNzM3LCJ0b2tlbl91c2UiOiJ0b2tlbl9hY2Nlc3MiLCJjbGllbnRfa2V5IjoieHY0TFc3MXJOOXJyekY4NlcxMUx3M0pneiIsImRlZmF1bHRfdGlsbCI6NzUxNTUyODIsImhhc19wc2lfYWNjZXNzIjp0cnVlLCJzY29wZXMiOiJbXSJ9.bv2KjNQrsjy7_gCpbjq6GURfw1RDxIjXMYlT164lrN31Vnp3YJJrXwbM1yyOG-iStKAJuedyjBx7T3dua4ysos7L_UJg47Q0A-xbVA1R6Vqp3m2lPlX_pI8flBu5NdF2n3A3weCmXQj6Hyn2Rhbcs8il4lxCPPt3z7iRMzb66-d6GnpsuDodLfbUFF9j8GvVa2_Qq51xAjO13dcnkHdrtKFZrK5TCHgY-bBDMdW4A613d1tCzpfQo-5kiNSLwQjWDN6xQ-pcgXW5OU7SwIWhiKVApYJSFfBx6mNNsdBnculhgB-JwyXNwh8J7McBK8d-_t6RY-w_T_VA5YIhyNTwCA' \\\n--header 'Content-Type: application/json' \\\n--data-raw '[\n    {\n        \"id\" : 75228794,\n        \"code\": \"thisisastore\",\n        \"description\": \"This is a test store\",\n        \"name\": \"ThisisAStore\",\n        \"referenceId\": -1,\n        \"email\": \"newemail@test.com\",\n        \n        \"landline\": \"080-99999999\",\n        \"latitude\": \"13.0827\",\n        \"longitude\": \"80.2707\",\n        \"cityId\": 2,\n        \"areaId\": 2,\n        \"default\": false,\n        \"externalIds\": [\n            \"a1\",\n            \"a2\",\n            \"a3\"\n        ],\n        \"adminType\": \"GENERAL\",\n        \"isActive\": true,\n        \"parentConceptId\": \"75216471\",\n    \"parentZoneId\": \"75152646\"\n    }\n]'",
              "language": "shell",
              "name": "curl"
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
      "ApiKeyAuth": {
        "type": "apiKey",
        "in": "header",
        "name": "X-CAP-API-OAUTH-TOKEN"
      }
    }
  }
}
```