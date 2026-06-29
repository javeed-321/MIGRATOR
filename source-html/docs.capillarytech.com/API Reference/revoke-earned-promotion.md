> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Revoke Earned Cart Promotion

This API is used to revoke an already earned cart promotion

This API revokes cart promotions that a customer has earned but not yet redeemed.

* When you revoke an earned promotion, the system removes the customer's entitlement to redeem that promotion. The promotion is no longer available to the customer for future transactions.
* Use this API to cancel a promotion issued in error, or when a customer returns a qualifying purchase that originally triggered the promotion earn.
* You can revoke multiple promotions for a single customer in one request by including multiple entries in the `earnRevokeDetails` array.
* Only unredeemed promotions can be revoked. You cannot revoke a promotion that has already been redeemed.

# Example request

```curl Multiple id's revoke
curl --location 'https://{Host}/api_gateway/v1/promotions/revokeEarn' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '
{
  "customerId": 566881933,
  "earnRevokeDetails": [
    {
      "promotionId": "69117663b1cfc114606fd7fb",
      "earnIds": [
        "6911eaf1f57b486147effac0"
      ]
    },
    {
      "promotionId": "69058646b1cfc114606f7bbe",
      "earnIds": [
        "68f869d94a314550c4b46047"
      ]
    }
  ]
}
'
```
```Text Single id's revoke 
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/promotions/revokeEarn' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmJ1a2w6NzYMGQ3YzI4ZjU4ZjY3MmNhZjY1ZmY=' \
--header 'Cookie: _cfuvid=cc8Wgks3OrtzAV5WVi0XvYs2zw.tj0w-1762861404837-0.0.1.1-604800000' \
--data '
{
  "customerId": 566881933,
  "earnRevokeDetails": [
    {
      "promotionId": "68f9f2904a314550c4b46dc0",
      "earnIds": [
        "string"
      ]
    }
  ]
}
'
```

# Prerequisites

* Authentication: Basic or OAuth authentication.
* Default access group

# Resource information

|               |    |
| :------------ | :- |
| Pagination    | No |
| Batch support | No |

# Request body parameters

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
        customerId
      </td>

      <td>
        Number
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        earnRevokeDetails
      </td>

      <td>
        Array
      </td>

      <td>
        Yes
      </td>

      <td>
        Defines a list of cart promotion and earn ID details to be revoked.
      </td>
    </tr>

    <tr>
      <td>
        ..promotionId
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Specifies the unique identifier of the cart promotion.
      </td>
    </tr>

    <tr>
      <td>
        ..earnIds
      </td>

      <td>
        Array
      </td>

      <td>
        Yes
      </td>

      <td>
        Defines a list of specific earn transaction IDs to be revoked.

        Maximum earnIds supported in a single request : 1000

        Example : "earnIds": [
        "earned_id_1A2B3C",
        "earned_id_4D5E6F",
        "earned_id_7G8H9I"
        ]
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json
{
    "data": {
        "customerId": 566881933,
        "revokedDetails": [
          {
            "promotionId": "69117663b1cfc114606fd7fb",
            "revokedEarnIds": [
              "6911eaf1f57b486147effac0"
            ],
            "status": "SUCCESS"
          },
          {
            "promotionId": "69058646b1cfc114606f7bbe",
            "revokedEarnIds": [
              "68f869d94a314550c4b46047"
            ],
            "status": "SUCCESS"
          }
    T   ]
    },
    "errors": []
}
```

# Response parameters

| Field              | Type   | Description                                                                |
| :----------------- | :----- | :------------------------------------------------------------------------- |
| data               | Object | Indicates the result of the revocation attempt.                            |
| ..customerId       | Number | Indicates customer ID for whom the revocation was processed.               |
| ..revokedDetails   | Array  | Specifies a list of objects detailing the outcome for each cart promotion. |
| ....promotionId    | String | Indicates the cart promotion ID for this specific revocation result.       |
| ....revokedEarnIds | Array  | Indicates a list of earn IDs that were successfully revoked.               |
| ....status         | String | Indicates status of the revocation.                                        |
| errors             | Array  | Specifies a list of errors, if any, encountered during the request.        |
| ..code             | Number | Indicates the error code.                                                  |
| ..message          | String | Specifies a descriptive error message.                                     |

# Error codes

| Code | Description                                                                                                                        |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid request. Check required parameters. Ensure all required parameters (such as earn ID, promotion ID) are provided and valid. |
| 404  | Promotion, Earn, or Customer not found. Use a valid and existing promotion, earn, or customer identifier.                          |
| 729  | Promotion earn instance already redeemed. Cannot revoke; provide a valid, unredeemed earn instance.                                |
| 730  | Earn revoke not possible for POS and CODE promotion. Only supported earn types can be revoked.                                     |
| 731  | Earn ID passed is not valid. Use a valid earn ID.                                                                                  |
| 500  | Internal server error. Retry the request after a short delay, and contact support if the error persists.                           |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v1",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}",
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
    "/api_gateway/v1/promotions/revokeEarn": {
      "post": {
        "summary": "Post Revoke Earned Cart Promotion",
        "description": "This API is used to revoke an already earned cart promotion",
        "operationId": "post-revoke-earned-promotion",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string"
                  },
                  "customerId": {
                    "type": "string",
                    "description": "The customerId for which the earn should be revokes"
                  },
                  "earnRevokeDetails": {
                    "type": "object",
                    "description": "revoke details",
                    "properties": {
                      "": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Body": {
                  "value": {
                    "customerId": 0,
                    "earnRevokeDetails": [
                      {
                        "promotionId": "string",
                        "earnIds": [
                          "string"
                        ]
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n  \"data\": {\n    \"code\": 0,\n    \"message\": \"string\"\n  },\n  \"errors\": [\n    {\n      \"code\": 0,\n      \"message\": \"string\",\n      \"promotionId\": \"string\", //Unique id assigned to any promotion created\n      \"earnIds\": [\n        \"string\"\n      ]\n    }\n  ]\n}\n"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "code": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "message": {
                          "type": "string",
                          "example": "string"
                        }
                      }
                    },
                    "errors": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "code": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "message": {
                            "type": "string",
                            "example": "string"
                          },
                          "promotionId": {
                            "type": "string",
                            "example": "string"
                          },
                          "earnIds": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "example": "string"
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
        "deprecated": false
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