> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Events Meta

Retrieves the specified event's metadata.

Metadata refers to information about data. This API retrieves metadata for a specified event by using the event name. It fetches the details of the event's schema or structure as defined during its creation, detailing the various fields and their attributes.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/events/meta?event_name=Event_Rutuja' \
--header 'Authorization: Basic bWFkaHjU2YQ==' \
--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000; _cfuvid=yWiDF4a0reOBPItfUk9t6CNMWJz3YZCMhRE5lfMrHXQ-1758800023218-0.0.1.1-604800000'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth credentials
* [ ] Access group resource: Read access on Behavioural Events resource

# Resource information

|                       |              |
| :-------------------- | :----------- |
| URI                   | /events/meta |
| HTTP method           | GET          |
| Pagination supported? | NA           |
| Rate limit            | NA           |
| Batch support         | NA           |

# Query parameter

| Parameter (Parameters marked with \* are mandatory) | Description                                            |
| :-------------------------------------------------- | :----------------------------------------------------- |
| event\_name\*                                       | Name of the event for which the metadata is retrieved. |

# Example response

```curl Sample response
{
    "clickEventsMeta": {
        "eventId": "dbfca3b86bd501fa6fa92b0c682b8f58",
        "eventName": "Event_Rutuja",
        "actions": [
            "EIConsumer"
        ],
        "fields": [
            {
                "name": "customer",
                "type": "CUSTOMER",
                "attributes": {
                    "accountId": {
                        "valueType": "ENUM"
                    },
                    "addCustomerIfNotExists": {
                        "value": "false",
                        "valueType": "Boolean"
                    },
                    "identifierType": {
                        "value": "mobile",
                        "valueType": "ENUM"
                    },
                    "isRequired": {
                        "value": "true",
                        "valueType": "BOOLEAN"
                    },
                    "source": {
                        "value": "INSTORE",
                        "valueType": "ENUM"
                    }
                }
            },
            {
                "name": "String",
                "type": "TILLCODE",
                "attributes": {
                    "isRequired": {
                        "value": "false",
                        "valueType": "Boolean"
                    },
                    "isUniqueKeyField": {
                        "value": "false",
                        "valueType": "BOOLEAN"
                    }
                }
            }
        ],
        "orgId": 100737,
        "status": "PUBLISHED",
        "testStatus": "VERIFIED",
        "connectedOrgContext": {
            "orgType": "STANDARD_ORG"
        },
        "date": 1758800023162,
        "standardEvent": false
    },
    "transformerMappings": {
        "defaultTransformerMapping": null,
        "webEngageTransformerMapping": null
    },
    "warnings": []
}
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        clickEventsMeta
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing metadata related to the event.
      </td>
    </tr>

    <tr>
      <td>
        -eventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier generated for the event at the time of its creation.
      </td>
    </tr>

    <tr>
      <td>
        -eventName
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
        -eventType
      </td>

      <td>
        String
      </td>

      <td>
        Specifies what the event is related to. Values: `USEREVENT`, `PRODUCTEVENT`, `COUPONEVENT`
      </td>
    </tr>

    <tr>
      <td>
        -actions
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing a list of event handlers that process the event.
      </td>
    </tr>

    <tr>
      <td>
        -fields
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the details of the fields of the event.
      </td>
    </tr>

    <tr>
      <td>
        -- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the field.
      </td>
    </tr>

    <tr>
      <td>
        -- type
      </td>

      <td>
        String
      </td>

      <td>
        Data type or data related to the field. Example: `STRING`, `DOUBLE`, `CUSTOMER`
      </td>
    </tr>

    <tr>
      <td>
        -- attributes
      </td>

      <td>
        Object
      </td>

      <td>
        Attributes associated with the field.
      </td>
    </tr>

    <tr>
      <td>
        --- accountId
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing customer account-related information for the field.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the accountId field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        --- addCustomerIfNotExists
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information for adding customers if they do not exist.
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies if customers should be added if they do not exist. Values: `True` - If customers do not exist, they are created.
        `False` - If customers do not exist, they are not created.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the `addCustomerIfNotExists` field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        --- identifierType
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on customer identifier type.
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        String
      </td>

      <td>
        Customer identifier name.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the `identifierType` field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        --- isRequired
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on whether the field is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the field is mandatory. Values: `True` - Required, `False` - Not required.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the `isRequired` field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        --- source
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the source of customer creation.
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        String
      </td>

      <td>
        Source of customer creation.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the source field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        --- isPsiData
      </td>

      <td>
        Object
      </td>

      <td>
        Object indicating if the field contains Protected Sensitive Information. For more information refer,

        [Classify Potentially Sensitive Information (PSI)](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi#/)
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if PSI is present. Values: `True` - PSI present, `False` - No PSI.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Value indicating if Protected Sensitive Information is present. Values: `True` - PSI present, `False` - No PSI.
      </td>
    </tr>

    <tr>
      <td>
        --- isUniqueKeyField
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on isUniqueKeyField attribute. Enable to make the attribute a part of a unique key. By default, the event name and customer identifier are included in the unique key. When the isuniquekeyfield attribute is enabled, it is added to the unique key with the event name and customer identifier. This ensures that the combination of these elements remains unique and consistent. Refer

        [Enabling uniqueness check](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/enabling-uniqueness-check)

        for more details.
      </td>
    </tr>

    <tr>
      <td>
        ---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Value indicating if the field is a unique key field. Values: `True` - Part of unique key, `False` - Not part of unique key.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the isUniqueKeyField field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        --- regex
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information for regex.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the regex field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        --- possibleValues
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the possible values for the field.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the possibleValues field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        ---- values
      </td>

      <td>
        Enum
      </td>

      <td>
        List of possible values.
      </td>
    </tr>

    <tr>
      <td>
        -orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Organisation ID for which the events are created.
      </td>
    </tr>

    <tr>
      <td>
        -status
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the event is published.
      </td>
    </tr>

    <tr>
      <td>
        -testStatus
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the event is verified for data flow.
      </td>
    </tr>

    <tr>
      <td>
        -label
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
        -description
      </td>

      <td>
        String
      </td>

      <td>
        Description of the event.
      </td>
    </tr>

    <tr>
      <td>
        -date
      </td>

      <td>
        Long
      </td>

      <td>
        Timestamp for the event in UNIX epoch format.
      </td>
    </tr>

    <tr>
      <td>
        -standardEvent
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the event is standard or custom. `True` - Standard event,
        `False` - Custom event. For more information refer,

        [Types of Behavioral Events](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/types-of-behavioral-events)
      </td>
    </tr>

    <tr>
      <td>
        transformerMappings
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on field mapping. For more information, refer to

        [Transformer](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/transformer)
      </td>
    </tr>

    <tr>
      <td>
        -defaultTransformerMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on default field mapping.
      </td>
    </tr>

    <tr>
      <td>
        -webEngageTransformerMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping for WebEngage. For more information see,

        [WebEngage](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/webengage)

        .
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
        Object containing a list of warning messages, if any.
      </td>
    </tr>
  </tbody>
</Table>

# Error codes

| Error code | Description                                   |
| :--------- | :-------------------------------------------- |
| 404        | Not found. The api endpoint url is incorrect. |

<br />

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
    "/events/meta": {
      "get": {
        "summary": "Get Events Meta",
        "description": "Retrieves the specified event's metadata.",
        "operationId": "get-events-meta",
        "parameters": [
          {
            "name": "event_name",
            "in": "query",
            "description": "Name of the event for which the metadata is retrieved.",
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
                    "value": {
                      "clickEventsMeta": {
                        "eventId": "dbfca3b86bd501fa6fa92b0c682b8f58",
                        "eventName": "Event_Rutuja",
                        "actions": [
                          "EIConsumer"
                        ],
                        "fields": [
                          {
                            "name": "customer",
                            "type": "CUSTOMER",
                            "attributes": {
                              "accountId": {
                                "valueType": "ENUM"
                              },
                              "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "Boolean"
                              },
                              "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                              },
                              "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                              },
                              "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                              }
                            }
                          },
                          {
                            "name": "String",
                            "type": "TILLCODE",
                            "attributes": {
                              "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                              },
                              "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                              }
                            }
                          }
                        ],
                        "orgId": 100737,
                        "status": "PUBLISHED",
                        "testStatus": "VERIFIED",
                        "connectedOrgContext": {
                          "orgType": "STANDARD_ORG"
                        },
                        "date": 1758800023162,
                        "standardEvent": false
                      },
                      "transformerMappings": {
                        "defaultTransformerMapping": null,
                        "webEngageTransformerMapping": null
                      },
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "clickEventsMeta": {
                      "type": "object",
                      "properties": {
                        "eventId": {
                          "type": "string",
                          "example": "96d266fc6323a296701425011343c544"
                        },
                        "eventName": {
                          "type": "string",
                          "example": "be_reserved"
                        },
                        "eventType": {
                          "type": "string",
                          "example": "USEREVENT"
                        },
                        "actions": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "EMFConsumer"
                          }
                        },
                        "fields": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "example": "customer_id"
                              },
                              "type": {
                                "type": "string",
                                "example": "CUSTOMER"
                              },
                              "attributes": {
                                "type": "object",
                                "properties": {
                                  "accountId": {
                                    "type": "object",
                                    "properties": {
                                      "valueType": {
                                        "type": "string",
                                        "example": "ENUM"
                                      }
                                    }
                                  },
                                  "addCustomerIfNotExists": {
                                    "type": "object",
                                    "properties": {
                                      "value": {
                                        "type": "string",
                                        "example": "true"
                                      },
                                      "valueType": {
                                        "type": "string",
                                        "example": "BOOLEAN"
                                      }
                                    }
                                  },
                                  "identifierType": {
                                    "type": "object",
                                    "properties": {
                                      "value": {
                                        "type": "string",
                                        "example": "mobile"
                                      },
                                      "valueType": {
                                        "type": "string",
                                        "example": "ENUM"
                                      }
                                    }
                                  },
                                  "isRequired": {
                                    "type": "object",
                                    "properties": {
                                      "value": {
                                        "type": "string",
                                        "example": "true"
                                      },
                                      "valueType": {
                                        "type": "string",
                                        "example": "BOOLEAN"
                                      }
                                    }
                                  },
                                  "source": {
                                    "type": "object",
                                    "properties": {
                                      "value": {
                                        "type": "string",
                                        "example": "INSTORE"
                                      },
                                      "valueType": {
                                        "type": "string",
                                        "example": "ENUM"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "orgId": {
                          "type": "integer",
                          "example": 100458,
                          "default": 0
                        },
                        "status": {
                          "type": "string",
                          "example": "PUBLISHED"
                        },
                        "testStatus": {
                          "type": "string",
                          "example": "VERIFIED"
                        },
                        "label": {
                          "type": "string",
                          "example": "be_reserved"
                        },
                        "description": {
                          "type": "string",
                          "example": "be_reserved"
                        },
                        "date": {
                          "type": "integer",
                          "example": 1719226975198,
                          "default": 0
                        },
                        "standardEvent": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        }
                      }
                    },
                    "transformerMappings": {
                      "type": "object",
                      "properties": {
                        "defaultTransformerMapping": {},
                        "webEngageTransformerMapping": {}
                      }
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events/meta?event_name=Event_Rutuja' \\\n--header 'Authorization: Basic bWFkaHVfcm2YQ==' \\\n--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000; _cfuvid=yWiDF4a0reOBPItfUk9t6CNMWJz3YZCMhRE5lfMrHXQ-1758800023218-0.0.1.1-604800000'",
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