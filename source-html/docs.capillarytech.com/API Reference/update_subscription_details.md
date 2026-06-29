> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Subscription Details

This API allows you to update SMS/email subscription details of a customer.

### Note

<Callout icon="📘" theme="info">
  Make sure communication channels like [Mobile ](https://docs.capillarytech.com/docs/subscription_management#/sms-based-subscription-settings)and [Email ](https://docs.capillarytech.com/reference/update-subscription-details#/:~:text=like%20Mobile%20and-,Email,-are%20configured%20in)are configured in InTouch for subscription.
</Callout>

## Example request

```json Sample request Update subscription details
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/subscriptions?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=iH5ZoGjh2NaRGTbIMaIYS6zsemu6jtA_Dya0VMkpL3c-1757338223833-0.0.1.1-604800000' \
--data-raw '{
  "root": {
    "subscription": [
      {
        "email": "rutuja.hatwar@capillarytech.com",
        "priority": "bulk",
        "scope": "all",
        "channel": "email",
        "is_subscribed": "1"
      },
      {
        "email": "rutuja.hatwar@capillarytech.com",
        "priority": "bulk",
        "scope": "all",
        "channel": "sms",
        "is_subscribed": "0"
      }
    ]
  }
}'
```

# API Endpoint Example

```curl Update Subscription Details
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/subscriptions?format=json' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \
--header 'Cookie: _cfuvid=ELP_n3u8qC1Vt2z0yryFjifRT6N.CVONHAt3Fse0zsQ-1750659660819-0.0.1.1-604800000; _cfuvid=Xlu0xR4rWHodl7BXGQjSJ88NKmFp2TybTHNUzeYcwfs-1750676916066-0.0.1.1-604800000' \
--data '
{
  "communicationId": -1,
  "campaignId": -1,
  "reason": "This is V2 subscription api",
  "scope": {
    "scope": "USER",
    "subScope": "NONE"
  },
  "subscriptions": [
    {
      "channel": "EMAIL",
      "priority": "BULK",
      "type": "OPTOUT",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK",
      "accountId": "01"
    },
    {
      "channel": "MOBILE",
      "accountId": "01",
      "priority": "BULK",
      "type": "OPTIN",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    },
    {
      "channel": "EMAIL",
      "accountId": "01",
      "priority": "TRANS",
      "type": "OPTIN",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    },
    {
      "channel": "MOBILE",
      "accountId": "01",
      "priority": "TANS",
      "type": "OPTOUT",
      "orgUnitId": 200031782,
      "sourceName": "FACEBOOK"
    }
  ]
}
'
```

# Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

## Resource information

| URI                   | v1.1/customer/subscriptions |
| :-------------------- | :-------------------------- |
| HTTP method           | POST                        |
| Authentication        | Basic                       |
| Pagination supported? | No                          |
| Rate limit            | Yes                         |
| Batch support         | No                          |

## Request Body Parameters

| Parameter                      | Datatype | Description                                                                                                                             |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| mobile/email/external\_id/id\* | string   | Provide any of the customer identifiers to update subscription details.                                                                 |
| priority\*                     | enum     | Specify the service that you want to update. Value: `TRANS` for personalized messages, and `BULK` for campaign or promotional messages. |
| scope                          | enum     | Set the scope to 'all' always.                                                                                                          |
| channel\*                      | enum     | Pass the communication channel that you want to update. Value: `sms`, `email`.                                                          |
| is\_subscribed\*               | enum     | Specify `0` to unsubscribe, `1` to subscribe.                                                                                           |

<aside class="notice"> Parameters marked with * are mandatory. </aside>

## Response parameters

| Field          | Type             | Description                                                       |
| -------------- | ---------------- | ----------------------------------------------------------------- |
| response       | Object           | Top-level wrapper for status and subscription results.            |
| status         | Object           | Overall API execution status.                                     |
| success        | boolean/string   | Whether the request succeeded (may be "true"/"false" as strings). |
| code           | integer          | HTTP-like status code (e.g., 200).                                |
| message        | string           | Human-readable status message.                                    |
| total          | integer          | Total number of items processed/returned.                         |
| success\_count | integer          | Number of items successfully processed.                           |
| subscriptions  | Object           | Container for subscription records.                               |
| subscription   | Array of objects | List of subscription results, one per channel/scope.              |
| user\_id       | string           | Internal user identifier.                                         |
| mobile         | string           | MSISDN in country code format (e.g., "91xxxxxxxxxx").             |
| email          | string           | Email address of the user.                                        |
| channel        | string           | Communication channel (e.g., "EMAIL", "SMS").                     |
| priority       | string           | Message priority/category (e.g., "BULK").                         |
| scope          | string           | Subscription scope (e.g., "ALL").                                 |
| is\_subscribed | integer          | Subscription flag per channel/scope (1/0 or "1"/"0").             |
| item\_status   | Object           | Per-item operation status.                                        |
| code           | integer          | Item-level status/result code (e.g., "1000").                     |
| message        | string           | Item-level status message.                                        |
| success        | boolean          | Whether the item operation succeeded.                             |

## Error codes

| Code | Description                                                                                  |
| :--- | :------------------------------------------------------------------------------------------- |
| 201  | Some requests have failed due to errors.                                                     |
| 400  | Bad Request. The request is malformed or missing required parameters (e.g., invalid format). |
| 401  | Unauthorized. Authentication failed or the user lacks valid credentials.                     |
| 500  | Internal Server Error. An unexpected server error occurred.                                  |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "customer-v11",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v1.1",
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
    "/customer/subscriptions": {
      "post": {
        "summary": "Update Subscription Details",
        "description": "This API allows you to update SMS/email subscription details of a customer.",
        "operationId": "update-subscription-details-1",
        "parameters": [
          {
            "name": "format",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "json",
                "xml"
              ]
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string",
                    "format": "json"
                  }
                }
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "root": {
                      "subscription": [
                        {
                          "email": "tom.sawyer@example.com",
                          "priority": "bulk",
                          "scope": "all",
                          "channel": "email",
                          "is_subscribed": "0"
                        },
                        {
                          "email": "tom.sawyer@example.com",
                          "priority": "bulk",
                          "scope": "all",
                          "channel": "sms",
                          "is_subscribed": "0"
                        }
                      ]
                    }
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"SUCCESS\"\n    },\n    \"subscriptions\": {\n      \"subscription\": [\n        {\n          \"user_id\": \"608\",\n          \"email\": \"tom.sawyer@example.com\",\n          \"channel\": \"EMAIL\",\n          \"priority\": \"BULK\",\n          \"scope\": \"ALL\",\n          \"is_subscribed\": \"0\",\n          \"item_status\": {\n            \"success\": \"true\",\n            \"code\": \"1000\",\n            \"message\": \"Subscription successfully updated\"\n          }\n        },\n        {\n          \"user_id\": \"608\",\n          \"email\": \"tom.sawyer@example.com\",\n          \"channel\": \"SMS\",\n          \"priority\": \"TRANS\",\n          \"scope\": \"ALL\",\n          \"is_subscribed\": \"0\",\n          \"item_status\": {\n            \"success\": \"true\",\n            \"code\": \"1000\",\n            \"message\": \"Subscription successfully updated\"\n          }\n        }\n      ]\n    }\n  }\n}"
                  },
                  "Sample response Update subscription details": {
                    "summary": "Sample response Update subscription details",
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success",
                          "total": "2",
                          "success_count": "2"
                        },
                        "subscriptions": {
                          "subscription": [
                            {
                              "user_id": "564590100",
                              "mobile": "917744876415",
                              "email": "rutuja.hatwar@capillarytech.com",
                              "channel": "EMAIL",
                              "priority": "BULK",
                              "scope": "ALL",
                              "is_subscribed": "1",
                              "item_status": {
                                "code": "1000",
                                "message": "Subscription successfully updated",
                                "success": "true"
                              }
                            },
                            {
                              "user_id": "564590100",
                              "mobile": "917744876415",
                              "email": "rutuja.hatwar@capillarytech.com",
                              "channel": "SMS",
                              "priority": "BULK",
                              "scope": "ALL",
                              "is_subscribed": "0",
                              "item_status": {
                                "code": "1000",
                                "message": "Subscription successfully updated",
                                "success": "true"
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "string",
                              "example": "true"
                            },
                            "code": {
                              "type": "string",
                              "example": "200"
                            },
                            "message": {
                              "type": "string",
                              "example": "SUCCESS"
                            }
                          }
                        },
                        "subscriptions": {
                          "type": "object",
                          "properties": {
                            "subscription": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "user_id": {
                                    "type": "string",
                                    "example": "608"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "tom.sawyer@example.com"
                                  },
                                  "channel": {
                                    "type": "string",
                                    "example": "EMAIL"
                                  },
                                  "priority": {
                                    "type": "string",
                                    "example": "BULK"
                                  },
                                  "scope": {
                                    "type": "string",
                                    "example": "ALL"
                                  },
                                  "is_subscribed": {
                                    "type": "string",
                                    "example": "0"
                                  },
                                  "item_status": {
                                    "type": "object",
                                    "properties": {
                                      "success": {
                                        "type": "string",
                                        "example": "true"
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "1000"
                                      },
                                      "message": {
                                        "type": "string",
                                        "example": "Subscription successfully updated"
                                      }
                                    }
                                  }
                                }
                              }
                            }
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/customer/subscriptions?format=json' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic =' \\\n--header 'Cookie: _cfuvid=iH5ZoGjh2NaRGTbIMaIYS6zsemu6jtA_Dya0VMkpL3c-1757338223833-0.0.1.1-604800000' \\\n--data-raw '{\n  \"root\": {\n    \"subscription\": [\n      {\n        \"email\": \"rutuja.hatwar@capillarytech.com\",\n        \"priority\": \"bulk\",\n        \"scope\": \"all\",\n        \"channel\": \"email\",\n        \"is_subscribed\": \"1\"\n      },\n      {\n        \"email\": \"rutuja.hatwar@capillarytech.com\",\n        \"priority\": \"bulk\",\n        \"scope\": \"all\",\n        \"channel\": \"sms\",\n        \"is_subscribed\": \"0\"\n      }\n    ]\n  }\n}'",
              "language": "shell",
              "name": "Sample request Update subscription details"
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