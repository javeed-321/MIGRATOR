> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Webhook

Add a new webhook for event notification.

A Webhook (also called a web callback or HTTP push API) is a mechanism that enables an app to provide other applications with real-time information. A webhook URL is generated, which can be used for the integration.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

* [ ] Authentication - Basic or OAuth authentication details
* [ ] Access group resource - Write permission on webhook resource group.

# Resource information

|               |              |
| :------------ | :----------- |
| URL           | /v3/webHooks |
| HTTP method   | POST         |
| Pagination    | NA           |
| Rate limit    | NA           |
| Batch support | NA           |

# API endpoint example

`http://eu.api.capillarytech.com/v3/webHooks`

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
        active*
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
        customerIdentifiersToBeEnriched*
      </td>

      <td>
        Array
      </td>

      <td>
        List of customer identifiers to be enriched.
      </td>
    </tr>

    <tr>
      <td>
        eventNames*
      </td>

      <td>
        Array
      </td>

      <td>
        List of event names that trigger the webhook.  
        **Note**: At least one event name is required.
      </td>
    </tr>

    <tr>
      <td>
        maxAllowedConnections*
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum connections allowed at the same time for this webhook.
      </td>
    </tr>

    <tr>
      <td>
        methodType*
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
        name*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the webhook
        **Note:** Name of the webhook should be unique.
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
        Expected delivery time of the [event notification](https://docs.capillarytech.com/docs/configure_event_notification) in seconds.
      </td>
    </tr>

    <tr>
      <td>
        webHookHeaders*
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
        webHookType*
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
        webHookUrl*
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

```curl Sample request
curl --location 'http://eu.api.capillarytech.com/v3/webHooks' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic *********' \
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
  "maxAllowedConnections": 10,
  "methodType": "POST",
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

# Response body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        data
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the webhook configuration details.
      </td>
    </tr>

    <tr>
      <td>
        .attribution
      </td>

      <td>
        Object
      </td>

      <td>
        Metadata about creation and last update.
      </td>
    </tr>

    <tr>
      <td>
        ..createdOn
      </td>

      <td>
        String
      </td>

      <td>
        Timestamp when the webhook was created.
      </td>
    </tr>

    <tr>
      <td>
        ..createdOnISO
      </td>

      <td>
        String
      </td>

      <td>
        Creation time in ISO format.
      </td>
    </tr>

    <tr>
      <td>
        ..lastUpdatedOn
      </td>

      <td>
        String
      </td>

      <td>
        Timestamp when the webhook was last updated.
      </td>
    </tr>

    <tr>
      <td>
        ..lastUpdatedOnISO
      </td>

      <td>
        String
      </td>

      <td>
        Last updated time in ISO format.
      </td>
    </tr>

    <tr>
      <td>
        ..lastUpdatedBy
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the user who last updated the webhook.
      </td>
    </tr>

    <tr>
      <td>
        ...id
      </td>

      <td>
        Integer
      </td>

      <td>
        Till ID.
      </td>
    </tr>

    <tr>
      <td>
        ...code
      </td>

      <td>
        String
      </td>

      <td>
        Till code.
      </td>
    </tr>

    <tr>
      <td>
        ...description
      </td>

      <td>
        String
      </td>

      <td>
        Description of the user.
      </td>
    </tr>

    <tr>
      <td>
        ...name
      </td>

      <td>
        String
      </td>

      <td>
        Till name
      </td>
    </tr>

    <tr>
      <td>
        ...type
      </td>

      <td>
        String
      </td>

      <td>
        Type of user  
        Example: TILL
      </td>
    </tr>

    <tr>
      <td>
        ..createdBy
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the user who created the webhook.
      </td>
    </tr>

    <tr>
      <td>
        ...id
      </td>

      <td>
        Integer
      </td>

      <td>
        Till ID.
      </td>
    </tr>

    <tr>
      <td>
        ...code
      </td>

      <td>
        String
      </td>

      <td>
        User code.
      </td>
    </tr>

    <tr>
      <td>
        ...description
      </td>

      <td>
        String
      </td>

      <td>
        Details of the user who created the webhook.
      </td>
    </tr>

    <tr>
      <td>
        ...name
      </td>

      <td>
        String
      </td>

      <td>
        User name.
      </td>
    </tr>

    <tr>
      <td>
        ...type
      </td>

      <td>
        String
      </td>

      <td>
        Type of user  
        Example: TILL
      </td>
    </tr>

    <tr>
      <td>
        .webHookId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier of the webhook.
      </td>
    </tr>

    <tr>
      <td>
        .name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the webhook configuration.
      </td>
    </tr>

    <tr>
      <td>
        .eventNames
      </td>

      <td>
        Array of Strings
      </td>

      <td>
        List of events the webhook listens to.
      </td>
    </tr>

    <tr>
      <td>
        .webHookUrl
      </td>

      <td>
        String
      </td>

      <td>
        URL to which webhook events are delivered.
      </td>
    </tr>

    <tr>
      <td>
        .webHookType
      </td>

      <td>
        String
      </td>

      <td>
        Type of webhook delivery mechanism Example: HTTP
      </td>
    </tr>

    <tr>
      <td>
        .methodType
      </td>

      <td>
        String
      </td>

      <td>
        HTTP method used to send webhook payload. Example: POST
      </td>
    </tr>

    <tr>
      <td>
        .webHookHeaders
      </td>

      <td>
        Object
      </td>

      <td>
        Headers included in webhook requests.
      </td>
    </tr>

    <tr>
      <td>
        ..Authorization
      </td>

      <td>
        String
      </td>

      <td>
        Authorization header value.
      </td>
    </tr>

    <tr>
      <td>
        ..Content-Type
      </td>

      <td>
        String
      </td>

      <td>
        Content-Type header value.
      </td>
    </tr>

    <tr>
      <td>
        .noOfRetryAttempts
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of retry attempts allowed.
      </td>
    </tr>

    <tr>
      <td>
        .maxAllowedConnections
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of concurrent webhook connections allowed.
      </td>
    </tr>

    <tr>
      <td>
        .active
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the webhook is active.  
        `true` — The webhook is active.  
        `false` — The webhook is inactive.
      </td>
    </tr>

    <tr>
      <td>
        .slaInSeconds
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum time expected for webhook processing.
      </td>
    </tr>

    <tr>
      <td>
        .consumerGroupId
      </td>

      <td>
        String
      </td>

      <td>
        Consumer group identifier for event processing.
      </td>
    </tr>

    <tr>
      <td>
        .listenToChildEvents
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether child events are also listened to.
      </td>
    </tr>

    <tr>
      <td>
        .tillDetailsEnrichmentEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Enables enrichment of till details in the event payload.  
        `true` — Till details are enriched.
        `false` — Till details are not enriched.
      </td>
    </tr>

    <tr>
      <td>
        .storeDetailsEnrichmentEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Enables store detail enrichment in event payload.  
        `true` — Store details are enriched.
        `false` — Store details are not enriched.
      </td>
    </tr>

    <tr>
      <td>
        .customerIdentifiersToBeEnriched
      </td>

      <td>
        Array
      </td>

      <td>
        List of customer identifiers to enrich in payload.  
      </td>
    </tr>

    <tr>
      <td>
        .awardedReferenceEnrichmentEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Enables enrichment of awarded reference information.  
        `true` — Awarded reference details are enriched.
        `false` — Awarded reference details are not enriched.
      </td>
    </tr>

    <tr>
      <td>
        .availablePointsBalanceEnrichmentEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Enables enrichment of available points balance.  
        `true` — Available points balance is enriched.
        `false` — Available points balance is not enriched.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Object 
      </td>

      <td>
        Contains error details, if any.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Object 
      </td>

      <td>
        Contains warning details, if any.
      </td>
    </tr>
  </tbody>
</Table>

# Sample response

```Text Sample response
{
    "data": {
        "attribution": {
            "createdOn": "2025-11-25T06:40:06.036+0000",
            "createdOnISO": "2025-11-25T06:40:06Z",
            "lastUpdatedOn": "2025-11-25T06:40:06.036+0000",
            "lastUpdatedOnISO": "2025-11-25T06:40:06Z",
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
        "maxAllowedConnections": 10,
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

<br />

# API error codes

| Error Code | Description                                                |
| :--------- | :--------------------------------------------------------- |
| 51003      | `eventNames` can not be null                               |
| 51007      | `maxAllowedConnections` must be greater than zero          |
| 300004     | `maxAllowedConnections` is missing from the body parameter |

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
    "/webHooks": {
      "post": {
        "summary": "Add Webhook",
        "description": "Add a new webhook.",
        "operationId": "add-v3-webhooks",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "active",
                  "customerIdentifiersToBeEnriched",
                  "eventNames",
                  "maxAllowedConnections",
                  "methodType",
                  "name",
                  "webHookHeaders",
                  "webHookType",
                  "webHookUrl"
                ],
                "properties": {
                  "active": {
                    "type": "boolean",
                    "description": "Indicates if the webhook is active."
                  },
                  "customerIdentifiersToBeEnriched": {
                    "type": "array",
                    "description": "List of customer identifiers to be enriched.",
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
                    "description": "Maximum connections allowed at the same time for this webhook.",
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
                    "description": "Expected delivery time of the event notification in seconds.",
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
                    "value": "{\n    \"data\": {\n        \"attribution\": {\n            \"createdOn\": \"2024-10-28T08:05:44.665+0000\",\n            \"lastUpdatedOn\": \"2024-10-28T08:05:44.665+0000\",\n            \"lastUpdatedBy\": {\n                \"id\": 75121810,\n                \"code\": \"test_123\",\n                \"description\": \"\",\n                \"name\": \"test_123\",\n                \"type\": \"TILL\"\n            },\n            \"createdBy\": {\n                \"id\": 75121810,\n                \"code\": \"test_123\",\n                \"description\": \"\",\n                \"name\": \"test_123\",\n                \"type\": \"TILL\"\n            }\n        },\n        \"webHookId\": \"671f45d8760af000077b19f8\",\n        \"name\": \"test_post_webhook_12345\",\n        \"eventNames\": [\n            \"loyaltyCustomerMerge\",\n            \"partnerProgramLinked\",\n            \"pointsExpired\",\n            \"customerAdded\",\n            \"transactionUpdated\",\n            \"groupUpdated\",\n            \"promisedToCurrentPointsConversion\",\n            \"pointsTransferredReceived\",\n            \"groupMemberRemoved\",\n            \"groupCreated\",\n            \"partnerProgramUpdated\",\n            \"pointsIssued\",\n            \"tierDowngradeReminder\",\n            \"pointsContributionToGroup\",\n            \"CouponRedeem\",\n            \"pointsExpiryReminder\",\n            \"partnerProgramDelinked\",\n            \"CouponIssue\",\n            \"tierRenewed\",\n            \"tierDowngraded\",\n            \"pointsTransferredInitiated\",\n            \"customerUpdated\",\n            \"tierUpgraded\",\n            \"rewardIssued\",\n            \"pointsExpiryChange\",\n            \"rewardUpdated\",\n            \"supplementaryMembershipExpiryReminder\",\n            \"singlePointsExpiryUpdated\",\n            \"issuedPointsReversed\",\n            \"redeemedPointsReversed\"\n        ],\n        \"webHookUrl\": \"http://intouch-api-v3.default\",\n        \"webHookType\": \"HTTP\",\n        \"methodType\": \"POST\",\n        \"webHookHeaders\": {\n            \"Authorization\": \"Basic Q2FwaWxsYXJ5OklVTmhWVVQTROekl5\",\n            \"Content-Type\": \"application/json\"\n        },\n        \"noOfRetryAttempts\": 0,\n        \"maxAllowedConnections\": 10,\n        \"active\": true,\n        \"slaInSeconds\": 150,\n        \"consumerGroupId\": \"f7ea2579-28e2-4179-96da-fb271b17601c\",\n        \"tillDetailsEnrichmentEnabled\": false,\n        \"storeDetailsEnrichmentEnabled\": false,\n        \"customerIdentifiersToBeEnriched\": [],\n        \"awardedReferenceEnrichmentEnabled\": false,\n        \"availablePointsBalanceEnrichmentEnabled\": false\n    },\n    \"errors\": null,\n    \"warnings\": null\n}"
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
                              "example": "2024-10-28T08:05:44.665+0000"
                            },
                            "lastUpdatedOn": {
                              "type": "string",
                              "example": "2024-10-28T08:05:44.665+0000"
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
                          "example": "671f45d8760af000077b19f8"
                        },
                        "name": {
                          "type": "string",
                          "example": "test_post_webhook_12345"
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
                          "example": "http://intouch-api-v3.default"
                        },
                        "webHookType": {
                          "type": "string",
                          "example": "HTTP"
                        },
                        "methodType": {
                          "type": "string",
                          "example": "POST"
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
                          "example": "f7ea2579-28e2-4179-96da-fb271b17601c"
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
              "language": "shell",
              "code": "curl --location 'http://eu.api.capillarytech.com/v3/webHooks' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic ****' \\\n--header 'Cookie: _cfuvid=yYsH7ns18uvZ6yJ8YEDgIPw.ZjqHMYsSsHCnY00XLAM-1764052824812-0.0.1.1-604800000' \\\n--data ' {\n  \"active\": true,\n  \"customerIdentifiersToBeEnriched\": [],\n  \"eventNames\": [\n    \"loyaltyCustomerMerge\",\n    \"partnerProgramLinked\",\n    \"pointsExpired\",\n    \"customerAdded\",\n    \"transactionUpdated\",\n    \"groupUpdated\",\n    \"promisedToCurrentPointsConversion\",\n    \"pointsTransferredReceived\",\n    \"groupMemberRemoved\",\n    \"groupCreated\",\n    \"partnerProgramUpdated\",\n    \"pointsIssued\",\n    \"tierDowngradeReminder\",\n    \"pointsContributionToGroup\",\n    \"CouponRedeem\",\n    \"pointsExpiryReminder\",\n    \"partnerProgramDelinked\",\n    \"CouponIssue\",\n    \"tierRenewed\",\n    \"tierDowngraded\",\n    \"pointsTransferredInitiated\",\n    \"customerUpdated\",\n    \"tierUpgraded\",\n    \"rewardIssued\",\n    \"pointsExpiryChange\",\n    \"rewardUpdated\",\n    \"supplementaryMembershipExpiryReminder\",\n    \"singlePointsExpiryUpdated\",\n    \"issuedPointsReversed\",\n    \"redeemedPointsReversed\"\n  ],\n  \"maxAllowedConnections\": 10,\n  \"methodType\": \"POST\",\n  \"name\": \"All_Events_v3\",\n  \"slaInSeconds\": 150,\n  \"webHookHeaders\": {\n    \"Authorization\": \"Basic Q2FwaWxsYXJ5OklVTmhjR2xzYkdGeWVVQTROekl5\",\n    \"Content-Type\": \"application/json\"\n  },\n  \"webHookType\": \"HTTP\",\n  \"webHookUrl\" : \"https://eo4qiclzg50n2q8.m.pipedream.net\"\n }'",
              "name": "Sample request"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```