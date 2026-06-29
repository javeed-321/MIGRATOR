> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get event data using request ID

Retrieves details of a specific events.

<Callout icon="👍" theme="okay">
  For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
</Callout>

# Prerequisites

* [ ] Authentication: Basic or OAuth credentials
* [ ] Access group resource: Read access on Behavioural Events resource. For more information, refer to [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint example

`<http://eu.api.capillarytech.com/v2/events/event_data?id=35a56de6-93fe-4119-a360-f3547af1499a>`

# Resource information

|                       |                     |
| :-------------------- | :------------------ |
| URI                   | /events/event\_data |
| HTTP method           | GET                 |
| Pagination supported? | NA                  |
| Rate limit            | NA                  |
| Batch support         | NA                  |

# Query parameter

| Parameter (Parameters marked with \* are mandatory) | Description                                                                                                                                                      |
| :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                                                | requestId for the event generated during the POST event API call. For more information refer, [Post event](https://docs.capillarytech.com/reference/post-event). |

```json Sample request
curl --location 'http://eu.api.capillarytech.com/v2/events/event_data?id=35a56de6-93fe-4119-a360-f3547af1499a' \
--header 'Authorization: Basic YzdiNmY2OWZmZmRkYg==' \
--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000'
```

# Response parameter

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
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
        Array of Objects
      </td>

      <td>
        Array containing event data objects.
      </td>
    </tr>

    <tr>
      <td>
        * orgId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier of the organisation for which the event was generated.
      </td>
    </tr>

    <tr>
      <td>
        * userId
      </td>

      <td>
        Integer
      </td>

      <td>
        Customer ID of the user.
      </td>
    </tr>

    <tr>
      <td>
        * date
      </td>

      <td>
        String
      </td>

      <td>
        Date and time when the event occurred represented in ISO 8601 format.
      </td>
    </tr>

    <tr>
      <td>
        * eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event.
      </td>
    </tr>

    <tr>
      <td>
        * eventId
      </td>

      <td>
        String
      </td>

      <td>
        requestId of the event generated during the POST event API call. For more info see, [Post event](https://docs.capillarytech.com/reference/post-event).
      </td>
    </tr>

    <tr>
      <td>
        * source
      </td>

      <td>
        String
      </td>

      <td>
        Source of the event.
      </td>
    </tr>

    <tr>
      <td>
        * tillCode
      </td>

      <td>
        String
      </td>

      <td>
        Till code where the event occurred.
      </td>
    </tr>

    <tr>
      <td>
        * displayName
      </td>

      <td>
        String
      </td>

      <td>
        Display name of the event.
      </td>
    </tr>

    <tr>
      <td>
        * additonalAttributes
      </td>

      <td>
        Object
      </td>

      <td>
        Additional information related to the event.
      </td>
    </tr>

    <tr>
      <td>
        -- accountId
      </td>

      <td>
        String
      </td>

      <td>
        Account ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        -- age
      </td>

      <td>
        String
      </td>

      <td>
        Age of the customer.
      </td>
    </tr>

    <tr>
      <td>
        -- autoUpdateTimeStamp
      </td>

      <td>
        String
      </td>

      <td>
        Timestamp when the event occured in the epoch format. It is the number of seconds that have elapsed since the Unix epoch, which is 00:00:00 UTC on January 1, 1970.
      </td>
    </tr>

    <tr>
      <td>
        -- customerId
      </td>

      <td>
        String
      </td>

      <td>
        Customer ID the user.
      </td>
    </tr>

    <tr>
      <td>
        -- displayName
      </td>

      <td>
        String
      </td>

      <td>
        Display name of the event.
      </td>
    </tr>

    <tr>
      <td>
        -- eventDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Timestamp when the event actually occurred, not when it was ingested. It comes from the eventDateTime you sent in the request (Post event). The value is in epoch milliseconds. The original timezone is preserved separately in eventDateTimeInputOffset.
      </td>
    </tr>

    <tr>
      <td>
        --eventDateTimeInputOffset
      </td>

      <td>
        string
      </td>

      <td>
        Stores the original timezone offset from the eventDateTime to preserve local time context.
      </td>
    </tr>

    <tr>
      <td>
        -- eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event.
      </td>
    </tr>

    <tr>
      <td>
        -- external_event_id
      </td>

      <td>
        String
      </td>

      <td>
        External identifier for Behavioral Events. This identifier allows brands to pass their unique identifiers for each event they send to the Customer Data Platform.
      </td>
    </tr>

    <tr>
      <td>
        -- isDuplicate
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether an event is considered a duplicate or an original event. If `True`, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event.
      </td>
    </tr>

    <tr>
      <td>
        -- orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique identifier for the organisation for which the event was generated.
      </td>
    </tr>

    <tr>
      <td>
        -- source
      </td>

      <td>
        String
      </td>

      <td>
        Source of the event.
      </td>
    </tr>

    <tr>
      <td>
        -- source_till_id
      </td>

      <td>
        Integer
      </td>

      <td>
        Till ID where the event was generated.
      </td>
    </tr>

    <tr>
      <td>
        -- source_user_id
      </td>

      <td>
        Integer
      </td>

      <td>
        Identifier of the user who is associated with the source of the event.
      </td>
    </tr>

    <tr>
      <td>
        * psiAttributes
      </td>

      <td>
        Object
      </td>

      <td>
        Includes attributes that are marked as potentially sensitive data. Refer to the PSI data documentation for more information [Classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi).
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
        Object containing warning messages.
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
        Object containing error messages.
      </td>
    </tr>
  </tbody>
</Table>

```json Sample response
{
    "data": [
        {
            "orgId": 100737,
            "userId": 565496268,
            "date": "2026-01-23T08:40:01Z",
            "eventName": "Group_User_Event",
            "eventId": "b26d5065-2177-4a18-a5ae-332682072073",
            "source": "INSTORE",
            "tillCode": "75155373",
            "additonalAttributes": {
                "String": "75155373",
                "accountId": null,
                "autoUpdateTimeStamp": 1769157601101,
                "customerId": "565496268",
                "displayName": null,
                "eventDateTime": "1724488200000",
                "eventDateTimeInputOffset": "+07:00",
                "eventName": "Group_User_Event",
                "groupId": "3854766",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "ouTillCode": "rutuja_capillary",
                "requestId": "b26d5065-2177-4a18-a5ae-332682072073",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 565496268,
                "uniqueId": "b26d5065-2177-4a18-a5ae-332682072073",
                "x-cap-lineage-id": "b26d5065-2177-4a18-a5ae-332682072073",
                "x-cap-lineage-start": "1769157599735"
            },
            "psiAttributes": [],
            "uniqueId": "b26d5065-2177-4a18-a5ae-332682072073"
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API-specific error codes

| **Error Code** | **Description**           | **When It Occurs**                                                      |
| :------------- | :------------------------ | :---------------------------------------------------------------------- |
| 1849           | Search system unreachable | When the search system is temporarily unavailable or cannot be reached. |

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
    "/events/event_data": {
      "get": {
        "summary": "Get event data using request ID",
        "description": "Retrieves details of a specific events.",
        "operationId": "get-specific-event-data",
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "requestId of the event generated during the POST event API call.",
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
                  "Result": {
                    "value": "{\n    \"data\": [\n        {\n            \"orgId\": 100458,\n            \"userId\": 555738346,\n            \"date\": \"2024-06-20T07:01:41Z\",\n            \"eventName\": \"be_reserved\",\n            \"eventId\": \"35a56de6-93fe-4119-a360-f3547af1499a\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75128552\",\n            \"displayName\": \"be_reserved\",\n            \"additonalAttributes\": {\n                \"accountId\": null,\n                \"age\": \"20.0\",\n                \"autoUpdateTimeStamp\": 1718866901011,\n                \"customerId\": \"555738346\",\n                \"displayName\": \"be_reserved\",\n                \"eventDateTime\": \"1712836800000\",\n                \"eventName\": \"be_reserved\",\n                \"external_event_id\": \"RAND121\",\n                \"hotel_name\": \"Indiranagar\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"room_nights\": \"12\",\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75128552,\n                \"source_user_id\": 555738346\n            },\n            \"psiAttributes\": [\n                \"age\"\n            ]\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "orgId": {
                            "type": "integer",
                            "example": 100458,
                            "default": 0
                          },
                          "userId": {
                            "type": "integer",
                            "example": 555738346,
                            "default": 0
                          },
                          "date": {
                            "type": "string",
                            "example": "2024-06-20T07:01:41Z"
                          },
                          "eventName": {
                            "type": "string",
                            "example": "be_reserved"
                          },
                          "eventId": {
                            "type": "string",
                            "example": "35a56de6-93fe-4119-a360-f3547af1499a"
                          },
                          "source": {
                            "type": "string",
                            "example": "INSTORE"
                          },
                          "tillCode": {
                            "type": "string",
                            "example": "75128552"
                          },
                          "displayName": {
                            "type": "string",
                            "example": "be_reserved"
                          },
                          "additonalAttributes": {
                            "type": "object",
                            "properties": {
                              "accountId": {},
                              "age": {
                                "type": "string",
                                "example": "20.0"
                              },
                              "autoUpdateTimeStamp": {
                                "type": "integer",
                                "example": 1718866901011,
                                "default": 0
                              },
                              "customerId": {
                                "type": "string",
                                "example": "555738346"
                              },
                              "displayName": {
                                "type": "string",
                                "example": "be_reserved"
                              },
                              "eventDateTime": {
                                "type": "string",
                                "example": "1712836800000"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "be_reserved"
                              },
                              "external_event_id": {
                                "type": "string",
                                "example": "RAND121"
                              },
                              "hotel_name": {
                                "type": "string",
                                "example": "Indiranagar"
                              },
                              "isDuplicate": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "orgId": {
                                "type": "integer",
                                "example": 100458,
                                "default": 0
                              },
                              "room_nights": {
                                "type": "string",
                                "example": "12"
                              },
                              "source": {
                                "type": "string",
                                "example": "INSTORE"
                              },
                              "source_till_id": {
                                "type": "integer",
                                "example": 75128552,
                                "default": 0
                              },
                              "source_user_id": {
                                "type": "integer",
                                "example": 555738346,
                                "default": 0
                              }
                            }
                          },
                          "psiAttributes": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "example": "age"
                            }
                          }
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
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
              "code": "curl --location 'http://eu.api.capillarytech.com/v2/events/event_data?id=35a56de6-93fe-4119-a360-f3547af1499a' \\\n--header 'Authorization: Basic NmY2OWZmZmRkYg==' \\\n--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000'",
              "name": "Sample response"
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