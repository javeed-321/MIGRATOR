> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Webhook

A Webhook (also called a web callback or HTTP push API) is a way for an app to provide other applications with real-time information. A `webHookUri` is generated which can be used for the integration.

## Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter
      </th>

      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        transformerType
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        Specifies the type of transformer used to process incoming webhook data.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        tillCode
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        Till code to associate with the current Webhook. Events posted through this Webhook’s URL will be linked to this store TILL.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        authEnabled
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Enables authentication for the Webhook. 
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        authMechanism
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        Defines the authentication mechanism (e.g., Basic). Supported values: BASIC — Basic authentication
        OAUTH — OAuth authentication. Mandoty is auth is enabled.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        uniquenessCheckEnabled
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Enables or disables the uniqueness check for events.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        listenToChildEvents
      </td>

      <td style={{ textAlign: "left" }}>
        boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Applicable for connected orgs only. Enables or disables listening to child organization events. If enabled in a parent organization’s webhook, the webhook also receives events from its child organizations.
      </td>
    </tr>
  </tbody>
</Table>

```
{
    "transformerType": "WebEngageTransformer",
    "tillCode": "rutuja_capillary",
    "authEnabled": false,
    "authMechanism": "Basic",
    "uniquenessCheckEnabled": false
}
```
```Text listentoChildEvents
{ 
  "name": "exampleName",
  "eventNames": [],
  "webHookUrl": "https://example.com/webhook",
  "webHookType": "QUEUE_INT",
  "methodType": "POST",
  "webHookHeaders": {},
  "maxAllowedConnections": 20,
  "slaInSeconds": 30,
  "tillDetailsEnrichmentEnabled": false,
  "storeDetailsEnrichmentEnabled": false,
  "customerIdentifiersToBeEnriched": [],
  "awardedReferenceEnrichmentEnabled": false,
  "neoEnrichment": {},
  "noOfRetryAttempts": 0,
  "consumerGroupId": "",
  "availablePointsBalanceEnrichmentEnabled": false,
  "listenToChildEvents": true
}
```

## Response Parameters

| Parameter              | Type    | Description                                                                     |
| :--------------------- | :------ | :------------------------------------------------------------------------------ |
| transformerType        | string  | Indicates the transformer type used (e.g., `"WebEngageTransformer"`).           |
| uniquenessCheckEnabled | boolean | If `true`, duplicate events are filtered; if `false`, all events are processed. |
| tillCode               | string  | The Till code associated with the webhook for store mapping.                    |
| webHookUri             | string  | The auto-generated URL where events should be sent (unique to this webhook).    |
| authEnabled            | boolean | Indicates whether authentication is enabled (`true`/`false`).                   |
| warnings               | array   | Lists non-critical issues during webhook creation.                              |

```
{
    "transformerType": "WebEngageTransformer",
    "uniquenessCheckEnabled": false,
    "tillCode": "rutuja_capillary",
    "webHookUri": "https://spd6hzcltl.execute-api.eu-west-1.amazonaws.com/eucrm/webhooks/e4492fc546c93453ff177f356356a7b3",
    "authEnabled": false,
    "warnings": []
}
```
```
{
    "data": {
        "attribution": {
            "createdOn": "2025-08-01T11:08:16.807+0000",
            "lastUpdatedOn": "2025-08-01T11:08:16.807+0000",
            "lastUpdatedBy": {
                "id": 75074637,
                "code": "neestoretillssnee23",
                "description": "",
                "name": "neestoretillssnee23",
                "type": "TILL"
            },
            "createdBy": {
                "id": 75074637,
                "code": "neestoretillssnee23",
                "description": "",
                "name": "neestoretillssnee23",
                "type": "TILL"
            }
        },
        "webHookId": "688ca020a6a6cb077172c044",
        "name": "684464d788428927ce3ee59c31",
        "eventNames": [
            "customerAdded"
        ],
        "webHookUrl": " ",
        "webHookType": "QUEUE_INT",
        "methodType": "POST",
        "webHookHeaders": {
            "": ""
        },
        "noOfRetryAttempts": 0,
        "maxAllowedConnections": 20,
        "active": true,
        "slaInSeconds": 30,
        "consumerGroupId": "991b5b44-da37-402a-8938-d9695a43691c",
        "listenToChildEvents": true,
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

## API specific Error code

| Error Code | Description                            | Reason                                   |
| :--------- | :------------------------------------- | :--------------------------------------- |
| 1839       | auth mechanism not present             | `authenabled`field passed as false       |
| 1808       | customer event transformer not present | Invalid or unsupported `transformertype` |

For information on event uniqueness check, see [Event uniqueness check](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check).

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v2",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v2",
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
    "/events/webhook": {
      "post": {
        "summary": "Add Webhook",
        "description": "A Webhook (also called a web callback or HTTP push API) is a way for an app to provide other applications with real-time information. A `webHookUri` is generated which can be used for the integration.",
        "operationId": "add-webhook",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "transformerType",
                  "tillCode"
                ],
                "properties": {
                  "transformerType": {
                    "type": "string",
                    "description": "Currently, only WebEngageTransformer is supported.",
                    "enum": [
                      "WebEngageTransformer"
                    ]
                  },
                  "tillCode": {
                    "type": "string",
                    "description": "Till code to associate with the current Webhook. All events data that are posted through the current Webhook’s URL will be associated to this store TILL."
                  },
                  "authEnabled": {
                    "type": "boolean",
                    "description": "To enable the authentication",
                    "default": false
                  },
                  "authMechanism": {
                    "type": "string",
                    "description": "Defines the authentication mechanism",
                    "default": "Basic"
                  },
                  "uniquenessCheckEnabled": {
                    "type": "boolean",
                    "description": "Enable or disable the uniqueness check."
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
                  "Sample Response": {
                    "value": "{\n    \"transformerType\": \"WebEngageTransformer\",\n    \"uniquenessCheckEnabled\": false,\n    \"tillCode\": \"rutuja_capillary\",\n    \"webHookUri\": \"https://spd6hzcltl.execute-api.eu-west-1.amazonaws.com/eucrm/webhooks/e4492fc546c93453ff177f356356a7b3\",\n    \"authEnabled\": false,\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "transformerType": {
                      "type": "string",
                      "example": "WebEngageTransformer"
                    },
                    "uniquenessCheckEnabled": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "tillCode": {
                      "type": "string",
                      "example": "rutuja_capillary"
                    },
                    "webHookUri": {
                      "type": "string",
                      "example": "https://spd6hzcltl.execute-api.eu-west-1.amazonaws.com/eucrm/webhooks/e4492fc546c93453ff177f356356a7b3"
                    },
                    "authEnabled": {
                      "type": "boolean",
                      "example": false,
                      "default": true
                    },
                    "warnings": {
                      "type": "array"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "text/plain": {
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events/webhook?format=json' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic cnV0dWphX2NhcGlsbGFyeTpkMTNlMmEyYmY4OWRkNDAxN2U0Y2EwOTk1MGI0NzZjNg==' \\\n--header 'Cookie: _cfuvid=RtTU05D99rbDb2cv6Hfc4v_aXjBIzlB.n4EhwfADb3M-1747212351006-0.0.1.1-604800000' \\\n--data '{\n    \"transformerType\": \"WebEngageTransformer\",\n    \"tillCode\": \"rutuja_capillary\",\n    \"authEnabled\": false,\n    \"authMechanism\": \"Basic\",\n    \"uniquenessCheckEnabled\": false\n}'",
              "name": "cURL"
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