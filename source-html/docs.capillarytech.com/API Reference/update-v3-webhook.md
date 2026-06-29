> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Webhook

Update an existing webhook.

# API endpoint example

`https://eu.api.capillarytech.com/v3/webHooks/69254f46749e644bc0132`

# Prerequisites

* [ ] Authentication - Basic or OAuth authentication details
* [ ] Access group resource - Read and write permission on webhook resource group.

# Resource information

|                       |                            |
| :-------------------- | :------------------------- |
| URL                   | /v3/webHooks/`{webHookId}` |
| HTTP method           | PUT                        |
| Pagination supported? | NA                         |
| Rate limit            | NA                         |
| Batch support         | NA                         |

# Request path parameters

| (Parameters marked with \* are mandatory) | Type   | Description                                                                                                                                                                              |
| ----------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| webHookId\*                               | String | Identifier for the webhook. You can retrieve this value from the `webHookId` parameter in the [Add Webhook](https://docs.capillarytech.com/update/reference/add-v3-webhooks#/) response. |

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        (Parameters marked with * are mandatory)
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
        active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the webhook is active.
      </td>
    </tr>

    <tr>
      <td>
        customerIdentifiersToBeEnriched
      </td>

      <td>
        Array
      </td>

      <td>
        List of customer identifiers enrichment available in the payload.
      </td>
    </tr>

    <tr>
      <td>
        eventNames
      </td>

      <td>
        Array
      </td>

      <td>
        List of event names that trigger the webhook. At least one event name is required.
      </td>
    </tr>

    <tr>
      <td>
        maxAllowedConnections
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum allowed concurrent connections for this webhook.  
        **Note:** Minimum one concurrent connection is required.
      </td>
    </tr>

    <tr>
      <td>
        methodType
      </td>

      <td>
        String
      </td>

      <td>
        HTTP method used by the webhook. **Example:** `POST`, `PUT`,` GET` or `DELETE`.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the webhook.
      </td>
    </tr>

    <tr>
      <td>
        slaInSeconds
      </td>

      <td>
        Integer
      </td>

      <td>
        Expected delivery time of the [event notification](https://docs.capillarytech.com/docs/configure_event_notification)  in seconds. This is used to track notifications that took more time than the SLA set.
      </td>
    </tr>

    <tr>
      <td>
        webHookHeaders
      </td>

      <td>
        Array
      </td>

      <td>
        Headers sent with the webhook request.
      </td>
    </tr>

    <tr>
      <td>
        * Authorization
      </td>

      <td>
        String
      </td>

      <td>
        Authorization header for authentication.
      </td>
    </tr>

    <tr>
      <td>
        * Content-Type
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the content, **Example:** `application/json`
      </td>
    </tr>

    <tr>
      <td>
        webHookType
      </td>

      <td>
        String
      </td>

      <td>
        Type of webhook, **Example:** `HTTP`
      </td>
    </tr>

    <tr>
      <td>
        webHookUrl
      </td>

      <td>
        String
      </td>

      <td>
        URL where the webhook sends its requests.
      </td>
    </tr>
  </tbody>
</Table>

```json Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/v3/webHooks/69254f46749e644bc01328c1' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic *******' \
--header 'Cookie: _cfuvid=yYsH7ns18uvZ6yJ8YEDgIPw.ZjqHMYsSsHCnY00XLAM-1764052824812-0.0.1.1-604800000' \
--data ' {
  "active": true,
  "customerIdentifiersToBeEnriched": [],
  "eventNames": [
    "loyaltyCustomerMerge",
    "partnerProgramLinked",
    "pointsExpired",
    "customerAdded",
    "transactionUpdated",
    "groupUpdated",
    "promisedToCurrentPointsConversion",
    "pointsTransferredReceived",
    "groupMemberRemoved",
    "groupCreated",
    "partnerProgramUpdated",
    "pointsIssued",
    "tierDowngradeReminder",
    "pointsContributionToGroup",
    "CouponRedeem",
    "pointsExpiryReminder",
    "partnerProgramDelinked",
    "CouponIssue",
    "tierRenewed",
    "tierDowngraded",
    "pointsTransferredInitiated",
    "customerUpdated",
    "tierUpgraded",
    "rewardIssued",
    "pointsExpiryChange",
    "rewardUpdated",
    "supplementaryMembershipExpiryReminder",
    "singlePointsExpiryUpdated",
    "issuedPointsReversed",
    "redeemedPointsReversed"
  ],
  "maxAllowedConnections": 15,
  "methodType": "PUT",
  "name": "All_Events_v3",
  "slaInSeconds": 150,
  "webHookHeaders": {
    "Authorization": "Basic Q2FwaWxsYXJ5OklVTmhjR2xzYkdGeWVVQTROekl5",
    "Content-Type": "application/json"
  },
  "webHookType": "HTTP",
  "webHookUrl" : "https://eo4qiclzg50n2q8.m.pipedream.net"
 }'
```

# Response parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        data
      </td>

      <td>
        Contains the main data for the webhook configuration.
      </td>
    </tr>

    <tr>
      <td>
        * attribution
      </td>

      <td>
        Metadata about the creation and last update of the webhook.
      </td>
    </tr>

    <tr>
      <td>
        -- createdOn
      </td>

      <td>
        Timestamp when the webhook was created. It is in the local time zone of the org and in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        -- lastUpdatedOn
      </td>

      <td>
        Timestamp when the webhook was last updated. It is in the local time zone of the org and in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        -- lastUpdatedBy
      </td>

      <td>
        Information about the user who last updated the webhook.
      </td>
    </tr>

    <tr>
      <td>
        --- id
      </td>

      <td>
        Unique identifier of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- code
      </td>

      <td>
        Code of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- description
      </td>

      <td>
        Description of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- name
      </td>

      <td>
        Name of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- type
      </td>

      <td>
        Type of user. **Example: ** `TILL`
      </td>
    </tr>

    <tr>
      <td>
        -- createdBy
      </td>

      <td>
        Information about the user who created the webhook.
      </td>
    </tr>

    <tr>
      <td>
        --- id
      </td>

      <td>
        Unique identifier of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- code
      </td>

      <td>
        Code of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- description
      </td>

      <td>
        Description of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- name
      </td>

      <td>
        Name of the user.
      </td>
    </tr>

    <tr>
      <td>
        --- type
      </td>

      <td>
        Type of user. **Example: ** `TILL`
      </td>
    </tr>

    <tr>
      <td>
        webHookId
      </td>

      <td>
        Unique identifier of the webhook.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        Name of the webhook.
      </td>
    </tr>

    <tr>
      <td>
        eventNames
      </td>

      <td>
        List of event names that trigger the webhook.
      </td>
    </tr>

    <tr>
      <td>
        webHookUrl
      </td>

      <td>
        URL where the webhook sends its requests.
      </td>
    </tr>

    <tr>
      <td>
        webHookType
      </td>

      <td>
        Type of webhook, **Example:** `HTTP`
      </td>
    </tr>

    <tr>
      <td>
        methodType
      </td>

      <td>
        HTTP method used by the webhook. **Example:** `POST`, `PUT`,` GET` or `DELETE`.
      </td>
    </tr>

    <tr>
      <td>
        webHookHeaders
      </td>

      <td>
        Headers sent with the webhook request.
      </td>
    </tr>

    <tr>
      <td>
        * Authorization
      </td>

      <td>
        Authorization header for basic authentication.
      </td>
    </tr>

    <tr>
      <td>
        * Content-Type
      </td>

      <td>
        Specifies the content, **Example:** `application/json`
      </td>
    </tr>

    <tr>
      <td>
        noOfRetryAttempts
      </td>

      <td>
        Number of retry attempts configured.
      </td>
    </tr>

    <tr>
      <td>
        maxAllowedConnections
      </td>

      <td>
        Maximum allowed concurrent connections for this webhook.
      </td>
    </tr>

    <tr>
      <td>
        **Note:** Minimum one concurrent connection is required.
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        active
      </td>

      <td>
        Indicates if the webhook is active.
      </td>
    </tr>

    <tr>
      <td>
        slaInSeconds
      </td>

      <td>
        Expected delivery time of the event notification in seconds. This is used to track notifications that took more time than the SLA set.
      </td>
    </tr>

    <tr>
      <td>
        consumerGroupId
      </td>

      <td>
        Identifier for the consumer group.
      </td>
    </tr>

    <tr>
      <td>
        tillDetailsEnrichmentEnabled
      </td>

      <td>
        Indicates if the event payload is enriched with till details.
      </td>
    </tr>

    <tr>
      <td>
        storeDetailsEnrichmentEnabled
      </td>

      <td>
        Indicates if the event payload is enriched with store details
      </td>
    </tr>

    <tr>
      <td>
        customerIdentifiersToBeEnriched
      </td>

      <td>
        List of customer identifiers enrichment available in the payload.
      </td>
    </tr>

    <tr>
      <td>
        awardedReferenceEnrichmentEnabled
      </td>

      <td>
        Indicates if the event payload is enriched with [awarded reference ID](https://docs.capillarytech.com/docs/add-event-notification-account) . It is a unique identifier associated with each issued point or redemption transaction within the system.
      </td>
    </tr>

    <tr>
      <td>
        availablePointsBalanceEnrichmentEnabled
      </td>

      <td>
        Indicates if the event payload is enriched with available points balance.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array containing errors, if any.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array containing warnings, if any.
      </td>
    </tr>
  </tbody>
</Table>

```json Sample response
{
    "data": {
        "attribution": {
            "createdOn": "2025-11-25T06:40:06.036+0000",
            "createdOnISO": "2025-11-25T06:40:06Z",
            "lastUpdatedOn": "2025-11-25T08:51:42.158+0000",
            "lastUpdatedOnISO": "2025-11-25T08:51:42Z",
            "lastUpdatedBy": {
                "id": 75152722,
                "code": "divya_doc",
                "description": "",
                "name": "divya_doc",
                "type": "TILL"
            },
            "createdBy": {
                "id": 75152722,
                "code": "divya_doc",
                "description": "",
                "name": "divya_doc",
                "type": "TILL"
            }
        },
        "webHookId": "69254f46749e644bc01328c1",
        "name": "All_Events_v3",
        "eventNames": [
            "loyaltyCustomerMerge",
            "partnerProgramLinked",
            "pointsExpired",
            "customerAdded",
            "transactionUpdated",
            "groupUpdated",
            "promisedToCurrentPointsConversion",
            "pointsTransferredReceived",
            "groupMemberRemoved",
            "groupCreated",
            "partnerProgramUpdated",
            "pointsIssued",
            "tierDowngradeReminder",
            "pointsContributionToGroup",
            "CouponRedeem",
            "pointsExpiryReminder",
            "partnerProgramDelinked",
            "CouponIssue",
            "tierRenewed",
            "tierDowngraded",
            "pointsTransferredInitiated",
            "customerUpdated",
            "tierUpgraded",
            "rewardIssued",
            "pointsExpiryChange",
            "rewardUpdated",
            "supplementaryMembershipExpiryReminder",
            "singlePointsExpiryUpdated",
            "issuedPointsReversed",
            "redeemedPointsReversed"
        ],
        "webHookUrl": "https://eo4qiclzg50n2q8.m.pipedream.net",
        "webHookType": "HTTP",
        "methodType": "POST",
        "webHookHeaders": {
            "Authorization": "Basic Q2FwaWxsYXJ5OklVTmhjR2xzYkdGeWVVQTROekl5",
            "Content-Type": "application/json"
        },
        "noOfRetryAttempts": 0,
        "maxAllowedConnections": 15,
        "active": true,
        "slaInSeconds": 150,
        "consumerGroupId": "b3bd2ff7-1525-46d0-b855-08bee77209fc",
        "listenToChildEvents": false,
        "tillDetailsEnrichmentEnabled": false,
        "storeDetailsEnrichmentEnabled": false,
        "customerIdentifiersToBeEnriched": [],
        "awardedReferenceEnrichmentEnabled": false,
        "availablePointsBalanceEnrichmentEnabled": false
    },
    "errors": null,
    "warnings": null
}
```

# API error codes

| Error Code | Description                                                |
| :--------- | :--------------------------------------------------------- |
| 51003      | `eventNames` can not be null                               |
| 51007      | `maxAllowedConnections` must be greater than zero          |
| 300004     | `maxAllowedConnections` is missing from the body parameter |
| 400        | `webHookId` is invalid                                     |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v3",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v3",
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
    "/webHooks/{webHookId}": {
      "put": {
        "summary": "Update Webhook",
        "description": "Update an existing webhook.",
        "operationId": "update-v3-webhook",
        "parameters": [
          {
            "name": "webHookId",
            "in": "path",
            "description": "Identifier for the webhook.",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "active": {
                    "type": "boolean",
                    "description": "Indicates if the webhook is active."
                  },
                  "customerIdentifiersToBeEnriched": {
                    "type": "array",
                    "description": "List of customer identifiers enrichment available in the payload.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "eventNames": {
                    "type": "array",
                    "description": "List of event names that trigger the webhook.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "maxAllowedConnections": {
                    "type": "integer",
                    "description": "Maximum allowed concurrent connections for this webhook.",
                    "format": "int32"
                  },
                  "methodType": {
                    "type": "string",
                    "description": "HTTP method used by the webhook. Example: POST, PUT, GET or DELETE."
                  },
                  "name": {
                    "type": "string",
                    "description": "Name of the webhook."
                  },
                  "slaInSeconds": {
                    "type": "integer",
                    "description": "Expected delivery time of the event notification in seconds. This is used to track notifications that took more time than the SLA set.",
                    "format": "int32"
                  },
                  "webHookHeaders": {
                    "type": "array",
                    "description": "Headers sent with the webhook request.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "webHookType": {
                    "type": "string",
                    "description": "Type of webhook, Example: HTTP"
                  },
                  "webHookUrl": {
                    "type": "string",
                    "description": "URL where the webhook sends its requests."
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
                  "Sample response": {
                    "value": {
                      "data": {
                        "attribution": {
                          "createdOn": "2025-11-25T06:40:06.036+0000",
                          "createdOnISO": "2025-11-25T06:40:06Z",
                          "lastUpdatedOn": "2025-11-25T08:51:42.158+0000",
                          "lastUpdatedOnISO": "2025-11-25T08:51:42Z",
                          "lastUpdatedBy": {
                            "id": 75152722,
                            "code": "divya_doc",
                            "description": "",
                            "name": "divya_doc",
                            "type": "TILL"
                          },
                          "createdBy": {
                            "id": 75152722,
                            "code": "divya_doc",
                            "description": "",
                            "name": "divya_doc",
                            "type": "TILL"
                          }
                        },
                        "webHookId": "69254f46749e644bc01328c1",
                        "name": "All_Events_v3",
                        "eventNames": [
                          "loyaltyCustomerMerge",
                          "partnerProgramLinked",
                          "pointsExpired",
                          "customerAdded",
                          "transactionUpdated",
                          "groupUpdated",
                          "promisedToCurrentPointsConversion",
                          "pointsTransferredReceived",
                          "groupMemberRemoved",
                          "groupCreated",
                          "partnerProgramUpdated",
                          "pointsIssued",
                          "tierDowngradeReminder",
                          "pointsContributionToGroup",
                          "CouponRedeem",
                          "pointsExpiryReminder",
                          "partnerProgramDelinked",
                          "CouponIssue",
                          "tierRenewed",
                          "tierDowngraded",
                          "pointsTransferredInitiated",
                          "customerUpdated",
                          "tierUpgraded",
                          "rewardIssued",
                          "pointsExpiryChange",
                          "rewardUpdated",
                          "supplementaryMembershipExpiryReminder",
                          "singlePointsExpiryUpdated",
                          "issuedPointsReversed",
                          "redeemedPointsReversed"
                        ],
                        "webHookUrl": "https://eo4qiclzg50n2q8.m.pipedream.net",
                        "webHookType": "HTTP",
                        "methodType": "POST",
                        "webHookHeaders": {
                          "Authorization": "Basic Q2FwaWxsYXJ5OklVTmhjR2xzYkdGeWVVQTROekl5",
                          "Content-Type": "application/json"
                        },
                        "noOfRetryAttempts": 0,
                        "maxAllowedConnections": 15,
                        "active": true,
                        "slaInSeconds": 150,
                        "consumerGroupId": "b3bd2ff7-1525-46d0-b855-08bee77209fc",
                        "listenToChildEvents": false,
                        "tillDetailsEnrichmentEnabled": false,
                        "storeDetailsEnrichmentEnabled": false,
                        "customerIdentifiersToBeEnriched": [],
                        "awardedReferenceEnrichmentEnabled": false,
                        "availablePointsBalanceEnrichmentEnabled": false
                      },
                      "errors": null,
                      "warnings": null
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "attribution": {
                          "type": "object",
                          "properties": {
                            "createdOn": {
                              "type": "string",
                              "example": "2024-10-25T11:43:34.087+0000"
                            },
                            "lastUpdatedOn": {
                              "type": "string",
                              "example": "2024-10-28T06:44:05.025+0000"
                            },
                            "lastUpdatedBy": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "integer",
                                  "example": 75121810,
                                  "default": 0
                                },
                                "code": {
                                  "type": "string",
                                  "example": "test_123"
                                },
                                "description": {
                                  "type": "string",
                                  "example": ""
                                },
                                "name": {
                                  "type": "string",
                                  "example": "test_123"
                                },
                                "type": {
                                  "type": "string",
                                  "example": "TILL"
                                }
                              }
                            },
                            "createdBy": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "integer",
                                  "example": 75121810,
                                  "default": 0
                                },
                                "code": {
                                  "type": "string",
                                  "example": "test_123"
                                },
                                "description": {
                                  "type": "string",
                                  "example": ""
                                },
                                "name": {
                                  "type": "string",
                                  "example": "test_123"
                                },
                                "type": {
                                  "type": "string",
                                  "example": "TILL"
                                }
                              }
                            }
                          }
                        },
                        "webHookId": {
                          "type": "string",
                          "example": "671b8466760af0000761b640"
                        },
                        "name": {
                          "type": "string",
                          "example": "test_post_webhook_1234"
                        },
                        "eventNames": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "loyaltyCustomerMerge"
                          }
                        },
                        "webHookUrl": {
                          "type": "string",
                          "example": "http://eu.api.capillarytech.com"
                        },
                        "webHookType": {
                          "type": "string",
                          "example": "HTTP"
                        },
                        "methodType": {
                          "type": "string",
                          "example": "PUT"
                        },
                        "webHookHeaders": {
                          "type": "object",
                          "properties": {
                            "Authorization": {
                              "type": "string",
                              "example": "Basic Q2FwaWxsYXJ5OklVTmhWVVQTROekl5"
                            },
                            "Content-Type": {
                              "type": "string",
                              "example": "application/json"
                            }
                          }
                        },
                        "noOfRetryAttempts": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "maxAllowedConnections": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "active": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "slaInSeconds": {
                          "type": "integer",
                          "example": 150,
                          "default": 0
                        },
                        "consumerGroupId": {
                          "type": "string",
                          "example": "8fb2fdec-53ba-44de-bce9-82eedcb29026"
                        },
                        "tillDetailsEnrichmentEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "storeDetailsEnrichmentEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "customerIdentifiersToBeEnriched": {
                          "type": "array"
                        },
                        "awardedReferenceEnrichmentEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "availablePointsBalanceEnrichmentEnabled": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        }
                      }
                    },
                    "errors": {},
                    "warnings": {}
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
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v3/webHooks/69254f46749e644bc01328c1' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic *****' \\\n--header 'Cookie: _cfuvid=yYsH7ns18uvZ6yJ8YEDgIPw.ZjqHMYsSsHCnY00XLAM-1764052824812-0.0.1.1-604800000' \\\n--data ' {\n  \"active\": true,\n  \"customerIdentifiersToBeEnriched\": [],\n  \"eventNames\": [\n    \"loyaltyCustomerMerge\",\n    \"partnerProgramLinked\",\n    \"pointsExpired\",\n    \"customerAdded\",\n    \"transactionUpdated\",\n    \"groupUpdated\",\n    \"promisedToCurrentPointsConversion\",\n    \"pointsTransferredReceived\",\n    \"groupMemberRemoved\",\n    \"groupCreated\",\n    \"partnerProgramUpdated\",\n    \"pointsIssued\",\n    \"tierDowngradeReminder\",\n    \"pointsContributionToGroup\",\n    \"CouponRedeem\",\n    \"pointsExpiryReminder\",\n    \"partnerProgramDelinked\",\n    \"CouponIssue\",\n    \"tierRenewed\",\n    \"tierDowngraded\",\n    \"pointsTransferredInitiated\",\n    \"customerUpdated\",\n    \"tierUpgraded\",\n    \"rewardIssued\",\n    \"pointsExpiryChange\",\n    \"rewardUpdated\",\n    \"supplementaryMembershipExpiryReminder\",\n    \"singlePointsExpiryUpdated\",\n    \"issuedPointsReversed\",\n    \"redeemedPointsReversed\"\n  ],\n  \"maxAllowedConnections\": 15,\n  \"methodType\": \"PUT\",\n  \"name\": \"All_Events_v3\",\n  \"slaInSeconds\": 150,\n  \"webHookHeaders\": {\n    \"Authorization\": \"Basic Q2FwaWxsYXJ5OklVTmhjR2xzYkdGeWVVQTROekl5\",\n    \"Content-Type\": \"application/json\"\n  },\n  \"webHookType\": \"HTTP\",\n  \"webHookUrl\" : \"https://eo4qiclzg50n2q8.m.pipedream.net\"\n }'",
              "name": "Sample request"
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