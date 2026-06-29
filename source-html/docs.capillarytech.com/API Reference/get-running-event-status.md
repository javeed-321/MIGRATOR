> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Running Events Status

Retrieves the current status of live events.

# Query parameter

| Parameters | Description                                                             |
| :--------- | :---------------------------------------------------------------------- |
| eventId    | Unique id of the event that is generated when you push data to Webhook. |

# Response parameter

| Parameter         | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| id                | Unique identifier for the response.                        |
| orgId             | Organization ID associated with the response.              |
| stateList         | List detailing the states of the event processing.         |
| stateList.message | Message associated with the state of the event processing. |
| stateList.date    | Date and time when the state occurred.                     |
| stateList.status  | Status detailing the state of the event processing.        |
| eventName         | Name of the event in the response.                         |
| warnings          | List of warnings associated with the response.             |

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
    "/events/running_status": {
      "get": {
        "summary": "Get Running Events Status",
        "description": "Retrieves the current status of live events.",
        "operationId": "get-running-event-status",
        "parameters": [
          {
            "name": "eventId",
            "in": "query",
            "description": "Unique id of the event that is generated (in x-cap-hydra-request-id) when you push data to Webhook.",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample Response": {
                    "value": "{\n    \"id\": \"0d3f5a7f-2432-4c88-8045-37127615d8e8\",\n    \"orgId\": 1115,\n    \"stateList\": [{\n        \"message\": \"Event864\",\n        \"date\": \"2019-06-25T14:52:53+05:30\",\n        \"status\": \"EVENT_PROCESSING_STARTED\"\n    }, {\n        \"message\": \"customer\",\n        \"date\": \"2019-06-25T14:52:53+05:30\",\n        \"status\": \"EVENT_FIELD_VALIDATION_STARTED\"\n    }, {\n        \"message\": \"customer\",\n        \"date\": \"2019-06-25T14:53:03+05:30\",\n        \"status\": \"EVENT_FIELD_VALIDATION_FINISHED\"\n    }, {\n        \"message\": \"till\",\n        \"date\": \"2019-06-25T14:53:03+05:30\",\n        \"status\": \"EVENT_FIELD_VALIDATION_STARTED\"\n    }, {\n        \"message\": \"till\",\n        \"date\": \"2019-06-25T14:53:03+05:30\",\n        \"status\": \"EVENT_FIELD_VALIDATION_FINISHED\"\n    }, {\n        \"message\": \"Event864\",\n        \"date\": \"2019-06-25T14:53:03+05:30\",\n        \"status\": \"EVENT_VALIDATION_FINISHED\"\n    }, {\n        \"message\": \"EIConsumer\",\n        \"date\": \"2019-06-25T14:53:03+05:30\",\n        \"status\": \"EVENT_CONSUMER_STARTED\"\n    }, {\n        \"message\": \"EIConsumer null\",\n        \"date\": \"2019-06-25T14:53:03+05:30\",\n        \"status\": \"EVENT_CONSUMER_FAILED\"\n    }],\n    \"eventName\": \"Event864\",\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "example": "0d3f5a7f-2432-4c88-8045-37127615d8e8"
                    },
                    "orgId": {
                      "type": "integer",
                      "example": 1115,
                      "default": 0
                    },
                    "stateList": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "message": {
                            "type": "string",
                            "example": "Event864"
                          },
                          "date": {
                            "type": "string",
                            "example": "2019-06-25T14:52:53+05:30"
                          },
                          "status": {
                            "type": "string",
                            "example": "EVENT_PROCESSING_STARTED"
                          }
                        }
                      }
                    },
                    "eventName": {
                      "type": "string",
                      "example": "Event864"
                    },
                    "warnings": {
                      "type": "array"
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
              "language": "curl",
              "code": "http://us.api.capillarytech.com/v2/events/running_status?eventId=0d3f5a7f-2432-4c88-8045-37127615d8e8"
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