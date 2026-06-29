> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Org Events

Retrieves all events configured for the org. This includes both standard and custom events.

You can also use the query parameter to fetch details of a specific event.

# API endpoint example

`<http://eu.api.capillarytech.com/v2/events>`

# Prerequisites

* [ ] Authentication: Basic or OAuth credentials
* [ ] Access group resource: Read access on Behavioural Events resource

# Resource information

|                        |            |
| :--------------------- | :--------- |
| URI                    | /v2/events |
| HTTP Method            | GET        |
| Pagination             | No         |
| Batch support          | No         |
| Rate limit information | NA         |

# Example request

```json Sample request
curl --location 'https://eu.api.capillarytech.com/v2/events' \
--header 'Cookie: _cfuvid=cVUZ35z5krdCM26evqA.B0plrMHwkF57TihY2N7Cp0k-1718948790910-0.0.1.1-604800000; _cfuvid=P5nAvVQILHCofukFt8usi2pzsDcNCGVU5XhfVla7e8s-1757672304590-0.0.1.1-604800000' \
--header 'Authorization: Basic ******'
```

# Response parameters

<Table align={["left","left","left"]}>
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
        Object containing event metadata and field mapping information.
      </td>
    </tr>

    <tr>
      <td>
        -clickEventsMeta
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
        -- eventId
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
        -- actions
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
        -- fields
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Object containing the details of the fields of the event.
      </td>
    </tr>

    <tr>
      <td>
        --- name
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
        --- type
      </td>

      <td>
        String
      </td>

      <td>
        Data type or data related to the field. Example: STRING, DOUBLE, CUSTOMER
      </td>
    </tr>

    <tr>
      <td>
        --- attributes
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
        ---- accountId
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
        ----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the value of accountId.
      </td>
    </tr>

    <tr>
      <td>
        ---- addCustomerIfNotExists
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
        ----- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies if customers should be added if they do not exist. Values: `True` - If customers do not exist, they should be created.
        `False` - If customers do not exist, they should not be created.
      </td>
    </tr>

    <tr>
      <td>
        ----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the data type of the value of `addCustomerIfNotExists`.
      </td>
    </tr>

    <tr>
      <td>
        ---- identifierType
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
        ----- value
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
        ----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the value of `identifierType`.
      </td>
    </tr>

    <tr>
      <td>
        ---- isRequired
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
        ----- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Value indicating if the field is mandatory. Values: `True` - mandatory, `False` - not mandatory.
      </td>
    </tr>

    <tr>
      <td>
        ----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the value of `isRequired`.
      </td>
    </tr>

    <tr>
      <td>
        ---- source
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
        ----- value
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
        ----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Datatype of the value of `source`.
      </td>
    </tr>

    <tr>
      <td>
        ---- isPsiData
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
        ----- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Value indicating if PSI is present. Values: `True` - PSI present, `False` - No PSI.
      </td>
    </tr>

    <tr>
      <td>
        ----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Datatype of the value of `isPsiData`.
      </td>
    </tr>

    <tr>
      <td>
        ---- regex
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
        ----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Datatype of the value of regex.
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
        Organisation ID for which the events are created.
      </td>
    </tr>

    <tr>
      <td>
        -- status
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
        -- testStatus
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
        -- label
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
        -- description
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
        -- date
      </td>

      <td>
        Integer
      </td>

      <td>
        Timestamp for the event in UNIX epoch format.
      </td>
    </tr>

    <tr>
      <td>
        -- standardEvent
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the event is standard or custom. A value of `true` indicates it is a standard event, while `false` indicates it is a custom event.
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
        Object containing information on field mapping. For more information see,

        [Transformer](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/transformer)

        .
      </td>
    </tr>

    <tr>
      <td>
        -- defaultTransformerMapping
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
        --- eventNameMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping the event name.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueMap
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the event name for mapping.
      </td>
    </tr>

    <tr>
      <td>
        --- eventFieldMappings
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Object containing information on the mapping of the event's fields.
      </td>
    </tr>

    <tr>
      <td>
        ---- eventFieldName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the field for the event.
      </td>
    </tr>

    <tr>
      <td>
        ---- fieldName
      </td>

      <td>
        String
      </td>

      <td>
        Value the field is mapped to.
      </td>
    </tr>

    <tr>
      <td>
        -- webEngageTransformerMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping for

        [WebEngage](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/webengage)

        .
      </td>
    </tr>

    <tr>
      <td>
        --- eventNameMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping the event name.
      </td>
    </tr>

    <tr>
      <td>
        ---- valueMap
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the event name for mapping.
      </td>
    </tr>

    <tr>
      <td>
        --- eventFieldMappings
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Object containing information on the mapping of the event's fields.
      </td>
    </tr>

    <tr>
      <td>
        ---- eventFieldName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the field for the event.
      </td>
    </tr>

    <tr>
      <td>
        ---- fieldName
      </td>

      <td>
        String
      </td>

      <td>
        Value the field is mapped to.
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

    <tr>
      <td>
        errors
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing a list of error messages, if any.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json Sample response
{
    "data": [
        {
            "clickEventsMeta": {
                "eventId": "e5e99bc08aa62321978661fea1d750c4",
                "eventName": "Testing_3",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
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
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "Testing_3",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Testing_3",
                "description": "subscribe a Channel",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "a927234bff097b96f55d76af894d9268",
                "eventName": "TestEventWithDate",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
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
                        "name": "createdDate",
                        "type": "DATE",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
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
                "label": "Date Event",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "e2e76c301ebfd62190a480bda2e7234c",
                "eventName": "Event_Aditi K",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                        "name": "Strin",
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "98ed645f4af37c8e78f730ff05693de8",
                "eventName": "Testing_2",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
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
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "Testing_2",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Testing_1",
                "description": "Unsubscribe a Channel",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "516f327076e55fcc52afb9592e3c8ffd",
                "eventName": "Testing_1",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
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
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "eventTime",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Testing_1",
                "description": "Unsubscribe a Channel",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "72a7b7a79653bde6df41898b7ab409f5",
                "eventName": "Adi",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                                "value": "true",
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "ed94747ebeb4f5ab54fecf25fddee23b",
                "eventName": "Event_Aditi",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                                "value": "true",
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "5ffcbb57de8b19602cc2e89c7d36ad3e",
                "eventName": "Event_Aditi Kh",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                                "valueType": "Boolea"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "6cb354c56da0d8fd555ea7296a173f69",
                "eventName": "TestBE-Rutuja",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
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
                "description": "This is a demo event created && updated by Rutuja Hatwar",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "b3a0d351648da56c34cec8c00f8247ad",
                "eventName": "Event_Aditi Khandelwal",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                                "value": "true",
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "f7d31950cc2ef1fbb3c03af1b00207a1",
                "eventName": "Group_User_Event",
                "actions": [
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "Aditi",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
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
                    },
                    {
                        "name": "enum",
                        "type": "GROUPID",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "groupIdentifierType": {
                                "value": "GroupExternalId",
                                "valueType": "ENUM"
                            },
                            "identifierType": {
                                "value": "userId",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
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
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "8dc87bcc1a938e5196f0f69b3a6f4ba4",
                "eventName": "DemoTest20250428",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                        "name": "rutuja_capillary",
                        "type": "TILLCODE",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "sku",
                        "type": "PRODUCTSKU",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Sparkles",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Bricks",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Cement",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Names",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "df475f72c53301f700dce72e685c98f3",
                "eventName": "Event_Aditi Kha",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "ae7d505b4e3288168a234c5e9f472b00",
                "eventName": "categoryViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
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
                        "name": "categoryCode",
                        "type": "PRODUCTCATEGORY",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
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
                "label": "Category Viewed",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "d0adb7861f0d52041828e7ebec10b65a",
                "eventName": "Adi_K",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true"
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
                                "value": "true",
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "8296f348e58ebdefcc434e5ae53163b8",
                "eventName": "Event_Adi",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                                "value": "true",
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "12c42ed8cc8411a2bb3d15511f0c3b7e",
                "eventName": "Event_Aditi Khan",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "3631d781a9ac9fee518bf6910d77a271",
                "eventName": "TestEvent1",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EMFConsumer"
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
                                "value": "true",
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
                        "name": "till",
                        "type": "TILLCODE",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "sku",
                        "type": "PRODUCTSKU",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Sparkles",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Bricks",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Cement",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Names",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "1390fd606e560de05dd45a6bd6555b7f",
                "eventName": "addedToCart",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
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
                        },
                        "standardField": true
                    },
                    {
                        "name": "cartId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "skuCode",
                        "type": "PRODUCTSKU",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "brandCode",
                        "type": "PRODUCTBRAND",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "categoryCode",
                        "type": "PRODUCTCATEGORY",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "quantity",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "price",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productName",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productType",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Added To Cart",
                "description": "Added To Cart",
                "date": 1757672304428,
                "standardEvent": true
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "2fedcc95da465d06504b8fe9e36917b4",
                "eventName": "TestingEvent_FE",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "Customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
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
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "TestingEvent_FE",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "45319f76a7d8d9a8c108ecc75bd85767",
                "eventName": "promotionViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
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
                        "name": "promotionId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "promotionName",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
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
                "label": "Promotion Viewed",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": {
                    "eventNameMapping": {
                        "valueMap": {
                            "promotionViewed": "promotionViewed"
                        }
                    },
                    "eventFieldMappings": [
                        {
                            "eventFieldName": "customerId"
                        },
                        {
                            "eventFieldName": "promotionId"
                        },
                        {
                            "eventFieldName": "promotionName"
                        }
                    ]
                },
                "webEngageTransformerMapping": null
            }
        },
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
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "f51e85918c4496c0fefad7859cffb430",
                "eventName": "testing_event",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
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
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "testing_event",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "testing_event",
                "description": "un/subscribe a Channel",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "92b06dd34906b983474a3414b72bb635",
                "eventName": "TestingEvent_FE_Rutuja",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
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
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "TestingEvent_FE",
                "date": 1757672304428,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```

# Error code

| Code | Description                                          |
| :--- | :--------------------------------------------------- |
| 401  | Unauthorized request. Username or password incorrect |
| 400  | Bad request                                          |
| 500  | Internal Server Error                                |

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
    "/events": {
      "get": {
        "summary": "Get Org Events",
        "description": "Retrieves all events configured for the org. This includes both standard and custom events.\n\nYou can also use the query parameter to fetch details of a specific event.",
        "operationId": "get-event-details",
        "parameters": [
          {
            "name": "eventName",
            "in": "query",
            "description": "Name of the event to fetch details of a specific event.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "isDuplicate",
            "in": "query",
            "description": "To filter by duplicate events",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "source_user_id",
            "in": "query",
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
                      "data": [
                        {
                          "clickEventsMeta": {
                            "eventId": "e5e99bc08aa62321978661fea1d750c4",
                            "eventName": "Testing_3",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EIConsumer"
                            ],
                            "fields": [
                              {
                                "name": "userId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "identifierType": {
                                    "value": "userId",
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
                                "name": "deviceId",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              },
                              {
                                "name": "Testing_3",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "label": "Testing_3",
                            "description": "subscribe a Channel",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "a927234bff097b96f55d76af894d9268",
                            "eventName": "TestEventWithDate",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer",
                              "EIConsumer"
                            ],
                            "fields": [
                              {
                                "name": "CustomerId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
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
                                "name": "createdDate",
                                "type": "DATE",
                                "attributes": {
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
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
                            "label": "Date Event",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "e2e76c301ebfd62190a480bda2e7234c",
                            "eventName": "Event_Aditi K",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                "name": "Strin",
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "98ed645f4af37c8e78f730ff05693de8",
                            "eventName": "Testing_2",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EIConsumer"
                            ],
                            "fields": [
                              {
                                "name": "userId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "identifierType": {
                                    "value": "userId",
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
                                "name": "deviceId",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              },
                              {
                                "name": "Testing_2",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "label": "Testing_1",
                            "description": "Unsubscribe a Channel",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "516f327076e55fcc52afb9592e3c8ffd",
                            "eventName": "Testing_1",
                            "actions": [
                              "EIConsumer",
                              "EMFConsumer"
                            ],
                            "fields": [
                              {
                                "name": "userId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "identifierType": {
                                    "value": "userId",
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
                                "name": "deviceId",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              },
                              {
                                "name": "eventTime",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "label": "Testing_1",
                            "description": "Unsubscribe a Channel",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "72a7b7a79653bde6df41898b7ab409f5",
                            "eventName": "Adi",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                    "value": "true",
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "ed94747ebeb4f5ab54fecf25fddee23b",
                            "eventName": "Event_Aditi",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                    "value": "true",
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "5ffcbb57de8b19602cc2e89c7d36ad3e",
                            "eventName": "Event_Aditi Kh",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                    "valueType": "Boolea"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "6cb354c56da0d8fd555ea7296a173f69",
                            "eventName": "TestBE-Rutuja",
                            "actions": [
                              "EIConsumer",
                              "EMFConsumer"
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
                            "description": "This is a demo event created && updated by Rutuja Hatwar",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "b3a0d351648da56c34cec8c00f8247ad",
                            "eventName": "Event_Aditi Khandelwal",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                    "value": "true",
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "f7d31950cc2ef1fbb3c03af1b00207a1",
                            "eventName": "Group_User_Event",
                            "actions": [
                              "EMFConsumer"
                            ],
                            "fields": [
                              {
                                "name": "Aditi",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "true",
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
                              },
                              {
                                "name": "enum",
                                "type": "GROUPID",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "groupIdentifierType": {
                                    "value": "GroupExternalId",
                                    "valueType": "ENUM"
                                  },
                                  "identifierType": {
                                    "value": "userId",
                                    "valueType": "ENUM"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "Boolean"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "source": {
                                    "value": "INSTORE",
                                    "valueType": "ENUM"
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
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "8dc87bcc1a938e5196f0f69b3a6f4ba4",
                            "eventName": "DemoTest20250428",
                            "eventType": "PRODUCTEVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                "name": "rutuja_capillary",
                                "type": "TILLCODE",
                                "attributes": {
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "Boolean"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "sku",
                                "type": "PRODUCTSKU",
                                "attributes": {
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Sparkles",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Bricks",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Cement",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Names",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "df475f72c53301f700dce72e685c98f3",
                            "eventName": "Event_Aditi Kha",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "ae7d505b4e3288168a234c5e9f472b00",
                            "eventName": "categoryViewed",
                            "actions": [
                              "EIConsumer",
                              "EMFConsumer"
                            ],
                            "fields": [
                              {
                                "name": "customerId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "identifierType": {
                                    "value": "MOBILE",
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
                                "name": "categoryCode",
                                "type": "PRODUCTCATEGORY",
                                "attributes": {
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
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
                            "label": "Category Viewed",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "d0adb7861f0d52041828e7ebec10b65a",
                            "eventName": "Adi_K",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true"
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
                                    "value": "true",
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "8296f348e58ebdefcc434e5ae53163b8",
                            "eventName": "Event_Adi",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                    "value": "true",
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "12c42ed8cc8411a2bb3d15511f0c3b7e",
                            "eventName": "Event_Aditi Khan",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "3631d781a9ac9fee518bf6910d77a271",
                            "eventName": "TestEvent1",
                            "eventType": "PRODUCTEVENT",
                            "actions": [
                              "EMFConsumer"
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
                                    "value": "true",
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
                                "name": "till",
                                "type": "TILLCODE",
                                "attributes": {
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "Boolean"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "sku",
                                "type": "PRODUCTSKU",
                                "attributes": {
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Sparkles",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Bricks",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Cement",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                }
                              },
                              {
                                "name": "Names",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "1390fd606e560de05dd45a6bd6555b7f",
                            "eventName": "addedToCart",
                            "eventType": "PRODUCTEVENT",
                            "actions": [
                              "EIConsumer",
                              "EMFConsumer"
                            ],
                            "fields": [
                              {
                                "name": "customerId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "identifierType": {
                                    "value": "MOBILE",
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
                                },
                                "standardField": true
                              },
                              {
                                "name": "cartId",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                },
                                "standardField": true
                              },
                              {
                                "name": "skuCode",
                                "type": "PRODUCTSKU",
                                "attributes": {
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                },
                                "standardField": true
                              },
                              {
                                "name": "brandCode",
                                "type": "PRODUCTBRAND",
                                "attributes": {
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                },
                                "standardField": true
                              },
                              {
                                "name": "categoryCode",
                                "type": "PRODUCTCATEGORY",
                                "attributes": {
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                },
                                "standardField": true
                              },
                              {
                                "name": "quantity",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                },
                                "standardField": true
                              },
                              {
                                "name": "price",
                                "type": "DOUBLE",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  }
                                },
                                "standardField": true
                              },
                              {
                                "name": "productName",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                },
                                "standardField": true
                              },
                              {
                                "name": "productType",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                },
                                "standardField": true
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "label": "Added To Cart",
                            "description": "Added To Cart",
                            "date": 1757672304428,
                            "standardEvent": true
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "2fedcc95da465d06504b8fe9e36917b4",
                            "eventName": "TestingEvent_FE",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer",
                              "EIConsumer"
                            ],
                            "fields": [
                              {
                                "name": "Customer",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
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
                              }
                            ],
                            "orgId": 100737,
                            "status": "PUBLISHED",
                            "testStatus": "VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "label": "TestingEvent_FE",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "45319f76a7d8d9a8c108ecc75bd85767",
                            "eventName": "promotionViewed",
                            "actions": [
                              "EIConsumer",
                              "EMFConsumer"
                            ],
                            "fields": [
                              {
                                "name": "customerId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "identifierType": {
                                    "value": "MOBILE",
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
                                "name": "promotionId",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              },
                              {
                                "name": "promotionName",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
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
                            "label": "Promotion Viewed",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": {
                              "eventNameMapping": {
                                "valueMap": {
                                  "promotionViewed": "promotionViewed"
                                }
                              },
                              "eventFieldMappings": [
                                {
                                  "eventFieldName": "customerId"
                                },
                                {
                                  "eventFieldName": "promotionId"
                                },
                                {
                                  "eventFieldName": "promotionName"
                                }
                              ]
                            },
                            "webEngageTransformerMapping": null
                          }
                        },
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
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "f51e85918c4496c0fefad7859cffb430",
                            "eventName": "testing_event",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EIConsumer"
                            ],
                            "fields": [
                              {
                                "name": "userId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "identifierType": {
                                    "value": "userId",
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
                                "name": "deviceId",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              },
                              {
                                "name": "testing_event",
                                "type": "STRING",
                                "attributes": {
                                  "isPsiData": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isRequired": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
                                  },
                                  "isUniqueKeyField": {
                                    "value": "false",
                                    "valueType": "BOOLEAN"
                                  },
                                  "regex": {
                                    "valueType": "STRING"
                                  }
                                }
                              }
                            ],
                            "orgId": 100737,
                            "status": "UNPUBLISHED",
                            "testStatus": "NOT_VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "label": "testing_event",
                            "description": "un/subscribe a Channel",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        },
                        {
                          "clickEventsMeta": {
                            "eventId": "92b06dd34906b983474a3414b72bb635",
                            "eventName": "TestingEvent_FE_Rutuja",
                            "eventType": "USEREVENT",
                            "actions": [
                              "EMFConsumer",
                              "EIConsumer"
                            ],
                            "fields": [
                              {
                                "name": "CustomerId",
                                "type": "CUSTOMER",
                                "attributes": {
                                  "accountId": {
                                    "valueType": "ENUM"
                                  },
                                  "addCustomerIfNotExists": {
                                    "value": "true",
                                    "valueType": "BOOLEAN"
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
                              }
                            ],
                            "orgId": 100737,
                            "status": "PUBLISHED",
                            "testStatus": "VERIFIED",
                            "connectedOrgContext": {
                              "orgType": "STANDARD_ORG"
                            },
                            "label": "TestingEvent_FE",
                            "date": 1757672304428,
                            "standardEvent": false
                          },
                          "transformerMappings": {
                            "defaultTransformerMapping": null,
                            "webEngageTransformerMapping": null
                          }
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
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
                          "clickEventsMeta": {
                            "type": "object",
                            "properties": {
                              "eventId": {
                                "type": "string",
                                "example": "87c8b0fb-b825-4b7e-b336-b24e7c389f70"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "CustomerEvent"
                              },
                              "actions": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "example": "EIConsumer"
                                }
                              },
                              "fields": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "name": {
                                      "type": "string",
                                      "example": "customer"
                                    },
                                    "type": {
                                      "type": "string",
                                      "example": "customer"
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
                                              "example": "Boolean"
                                            }
                                          }
                                        },
                                        "identifierType": {
                                          "type": "object",
                                          "properties": {
                                            "value": {
                                              "type": "string",
                                              "example": "MOBILE"
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
                              "status": {
                                "type": "string",
                                "example": "UNPUBLISHED"
                              },
                              "testStatus": {
                                "type": "string",
                                "example": "NOT_VERIFIED"
                              },
                              "description": {
                                "type": "string",
                                "example": "sample description"
                              },
                              "date": {
                                "type": "integer",
                                "example": 1560941666471,
                                "default": 0
                              },
                              "standardEvent": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "defaultTransformerMappping": {
                            "type": "boolean",
                            "example": false,
                            "default": true
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
              },
              "text/plain": {
                "examples": {
                  "Sample response for specific event": {
                    "value": "{\n   \"data\":[\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"48529b6f-b39f-4d10-83c9-a90a150dd73b\",\n            \"eventName\":\"OfferScan\",\n            \"eventType\":\"USEREVENT\",\n            \"actions\":[\n               \"EMFConsumer\",\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"customer\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"INSTORE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"Product category\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"Discount %\",\n                  \"type\":\"double\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"PUBLISHED\",\n            \"testStatus\":\"VERIFIED\",\n            \"label\":\"Offer Scan Event\",\n            \"date\":1583306398493,\n            \"standardEvent\":false\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":null\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"ff506f87-23c6-43d3-a009-392a133d1b3c\",\n            \"eventName\":\"sales_promotion\",\n            \"eventType\":\"USEREVENT\",\n            \"actions\":[\n               \"EMFConsumer\",\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"mobile\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"INSTORE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"promotion_name\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"store\",\n                  \"type\":\"tillCode\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"PUBLISHED\",\n            \"testStatus\":\"VERIFIED\",\n            \"label\":\"Sales Promotion\",\n            \"description\":\"sales promotion\",\n            \"date\":1583306398494,\n            \"standardEvent\":false\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":null\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"208a6889-5653-4f5e-87d2-fa1470bdd2e9\",\n            \"eventName\":\"removedFromCart\",\n            \"eventType\":\"PRODUCTEVENT\",\n            \"actions\":[\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"customerId\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"value\":\"~11b564bda\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"WEB_ENGAGE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"cartId\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"skuCode\",\n                  \"type\":\"productSku\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"brandCode\",\n                  \"type\":\"productBrand\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"categoryCode\",\n                  \"type\":\"productCategory\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"quantity\",\n                  \"type\":\"double\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"price\",\n                  \"type\":\"double\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"productName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"productType\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"brand\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"categoryName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"locationName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"variant\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"pageURL\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"browserName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"osName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"device\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"city\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"region\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"country\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"ip\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"PUBLISHED\",\n            \"testStatus\":\"VERIFIED\",\n            \"label\":\"Removed From Cart\",\n            \"description\":\"Removed From Cart\",\n            \"date\":1583306398494,\n            \"standardEvent\":true\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":{\n               \"eventNameMapping\":{\n                  \"valueMap\":{\n                     \"Added To Cart\":\"addedToCart\",\n                     \"Product Viewed\":\"productViewed\",\n                     \"Promotion Viewed\":\"promotionViewed\",\n                     \"Register\":\"customerRegistered\",\n                     \"Removed From Cart\":\"removedFromCart\",\n                     \"asdfg\":\"promotionViewed\",\n                     \"qwert\":\"addedToCart\",\n                     \"qwert1234567u\":\"productViewed\"\n                  }\n               },\n               \"eventFieldMappings\":[\n                  {\n                     \"eventFieldName\":\"customerId\",\n                     \"fieldName\":\"user_id\"\n                  },\n                  {\n                     \"eventFieldName\":\"cartId\",\n                     \"fieldName\":\"cartRefKey\"\n                  },\n                  {\n                     \"eventFieldName\":\"skuCode\",\n                     \"fieldName\":\"skuCode\"\n                  },\n                  {\n                     \"eventFieldName\":\"brandCode\",\n                     \"fieldName\":\"brandCode\"\n                  },\n                  {\n                     \"eventFieldName\":\"categoryCode\",\n                     \"fieldName\":\"categoryCode\"\n                  },\n                  {\n                     \"eventFieldName\":\"quantity\",\n                     \"fieldName\":\"quantity\"\n                  },\n                  {\n                     \"eventFieldName\":\"price\",\n                     \"fieldName\":\"price\"\n                  },\n                  {\n                     \"eventFieldName\":\"productName\",\n                     \"fieldName\":\"name\"\n                  },\n                  {\n                     \"eventFieldName\":\"productType\",\n                     \"fieldName\":\"productType\"\n                  },\n                  {\n                     \"eventFieldName\":\"brand\",\n                     \"fieldName\":\"brand\"\n                  },\n                  {\n                     \"eventFieldName\":\"categoryName\",\n                     \"fieldName\":\"category\"\n                  },\n                  {\n                     \"eventFieldName\":\"locationName\",\n                     \"fieldName\":\"LocationName\"\n                  },\n                  {\n                     \"eventFieldName\":\"variant\",\n                     \"fieldName\":\"variant\"\n                  },\n                  {\n                     \"eventFieldName\":\"pageURL\",\n                     \"fieldName\":\"page_url\"\n                  },\n                  {\n                     \"eventFieldName\":\"browserName\",\n                     \"fieldName\":\"browser_name\"\n                  },\n                  {\n                     \"eventFieldName\":\"osName\",\n                     \"fieldName\":\"os_name\"\n                  },\n                  {\n                     \"eventFieldName\":\"device\",\n                     \"fieldName\":\"device\"\n                  },\n                  {\n                     \"eventFieldName\":\"city\",\n                     \"fieldName\":\"city\"\n                  },\n                  {\n                     \"eventFieldName\":\"region\",\n                     \"fieldName\":\"region\"\n                  },\n                  {\n                     \"eventFieldName\":\"country\",\n                     \"fieldName\":\"country\"\n                  },\n                  {\n                     \"eventFieldName\":\"ip\",\n                     \"fieldName\":\"ip\"\n                  }\n               ]\n            }\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"f0bbf01f-892b-44bd-b644-bd5ebd397821\",\n            \"eventName\":\"Checkout Started\",\n            \"actions\":[\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"cartRefKey\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"user_id\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"value\":\"~11b564bda\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"WEB_ENGAGE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"category\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"brand\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"LocationName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"numberofProducts\",\n                  \"type\":\"double\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"quantity\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"browser_name\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"os_name\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"device\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"city\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"region\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"country\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"ip\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"page_url\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"name\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"variant\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"PUBLISHED\",\n            \"testStatus\":\"VERIFIED\",\n            \"label\":\"Checkout Started\",\n            \"date\":1583306398494,\n            \"standardEvent\":false\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":null\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"8c5d2c45-2979-4b13-84d4-daf5f70d54ca\",\n            \"eventName\":\"SpintheWheelReloaded\",\n            \"eventType\":\"USEREVENT\",\n            \"actions\":[\n               \"EMFConsumer\",\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"customerMobile\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"INSTORE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"till\",\n                  \"type\":\"tillCode\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"gametype\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"wheelslot\",\n                  \"type\":\"double\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"UNPUBLISHED\",\n            \"testStatus\":\"NOT_VERIFIED\",\n            \"label\":\"Spin the Wheel Demo\",\n            \"description\":\"Spin the Wheel for Sales Demo\",\n            \"date\":1583306398494,\n            \"standardEvent\":false\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":null\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"fc73f1ee-cbe5-4585-8a54-33ddb24eb16f\",\n            \"eventName\":\"MovieInterval\",\n            \"eventType\":\"USEREVENT\",\n            \"actions\":[\n               \"EMFConsumer\",\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"customerMobile\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"INSTORE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"movieName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"theaterCode\",\n                  \"type\":\"tillCode\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"PUBLISHED\",\n            \"testStatus\":\"VERIFIED\",\n            \"label\":\"MovieInterval\",\n            \"description\":\"Reward on movie interval\",\n            \"date\":1583306398494,\n            \"standardEvent\":false\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":null\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"63a888ec-1722-48e9-a538-b71cd96e6b79\",\n            \"eventName\":\"PWP\",\n            \"actions\":[\n               \"EMFConsumer\",\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"SKU\",\n                  \"type\":\"productSku\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"productCategory\",\n                  \"type\":\"productCategory\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"date\",\n                  \"type\":\"date\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"customerID\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"INSTORE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"UNPUBLISHED\",\n            \"testStatus\":\"NOT_VERIFIED\",\n            \"label\":\"PWP\",\n            \"description\":\"Purchase with purchase\",\n            \"date\":1583306398494,\n            \"standardEvent\":false\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":null\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"0f34757f-53cf-4bde-b1bd-3543e456108f\",\n            \"eventName\":\"productViewed\",\n            \"actions\":[\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"customerId\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"value\":\"~11b564bda\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"MOBILE\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"WEB_ENGAGE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"osName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"browserName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"region\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"device\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"country\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"pageURL\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"brandName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"PUBLISHED\",\n            \"testStatus\":\"VERIFIED\",\n            \"label\":\"Product Viewed\",\n            \"description\":\"Product Viewed\",\n            \"date\":1583306398494,\n            \"standardEvent\":true\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":{\n               \"eventNameMapping\":{\n                  \"valueMap\":{\n                     \"Added To Cart\":\"addedToCart\",\n                     \"Product Viewed\":\"productViewed\",\n                     \"Promotion Viewed\":\"promotionViewed\",\n                     \"Register\":\"customerRegistered\",\n                     \"Removed From Cart\":\"removedFromCart\",\n                     \"asdfg\":\"promotionViewed\",\n                     \"qwert\":\"addedToCart\",\n                     \"qwert1234567u\":\"productViewed\"\n                  }\n               },\n               \"eventFieldMappings\":[\n                  {\n                     \"eventFieldName\":\"customerId\",\n                     \"fieldName\":\"user_id\"\n                  },\n                  {\n                     \"eventFieldName\":\"skuCode\",\n                     \"fieldName\":\"sku\"\n                  },\n                  {\n                     \"eventFieldName\":\"brandCode\",\n                     \"fieldName\":\"brandCode\"\n                  },\n                  {\n                     \"eventFieldName\":\"categoryCode\",\n                     \"fieldName\":\"categoryCode\"\n                  },\n                  {\n                     \"eventFieldName\":\"price\",\n                     \"fieldName\":\"price\"\n                  },\n                  {\n                     \"eventFieldName\":\"productName\",\n                     \"fieldName\":\"name\"\n                  },\n                  {\n                     \"eventFieldName\":\"productType\",\n                     \"fieldName\":\"productType\"\n                  },\n                  {\n                     \"eventFieldName\":\"locationName\",\n                     \"fieldName\":\"LocationName\"\n                  },\n                  {\n                     \"eventFieldName\":\"categoryName\",\n                     \"fieldName\":\"category\"\n                  },\n                  {\n                     \"eventFieldName\":\"city\",\n                     \"fieldName\":\"city\"\n                  },\n                  {\n                     \"eventFieldName\":\"ip\",\n                     \"fieldName\":\"ip\"\n                  },\n                  {\n                     \"eventFieldName\":\"osName\",\n                     \"fieldName\":\"os_name\"\n                  },\n                  {\n                     \"eventFieldName\":\"browserName\",\n                     \"fieldName\":\"browser_name\"\n                  },\n                  {\n                     \"eventFieldName\":\"region\",\n                     \"fieldName\":\"region\"\n                  },\n                  {\n                     \"eventFieldName\":\"device\",\n                     \"fieldName\":\"device\"\n                  },\n                  {\n                     \"eventFieldName\":\"country\",\n                     \"fieldName\":\"country\"\n                  },\n                  {\n                     \"eventFieldName\":\"pageURL\",\n                     \"fieldName\":\"page_url\"\n                  },\n                  {\n                     \"eventFieldName\":\"brandName\",\n                     \"fieldName\":\"brand\"\n                  }\n               ]\n            }\n         }\n      },\n      {\n         \"clickEventsMeta\":{\n            \"eventId\":\"3c7f8017-e060-40d7-9188-635a26d55596\",\n            \"eventName\":\"customerRegistered\",\n            \"eventType\":\"USEREVENT\",\n            \"actions\":[\n               \"EIConsumer\"\n            ],\n            \"fields\":[\n               {\n                  \"name\":\"customerId\",\n                  \"type\":\"customer\",\n                  \"attributes\":{\n                     \"accountId\":{\n                        \"value\":\"~11b564bda\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"addCustomerIfNotExists\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"identifierType\":{\n                        \"value\":\"mobile\",\n                        \"valueType\":\"ENUM\"\n                     },\n                     \"isRequired\":{\n                        \"value\":\"true\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"source\":{\n                        \"value\":\"WEB_ENGAGE\",\n                        \"valueType\":\"ENUM\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"firstName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"lastName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"deviceId\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"ipAddress\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"city\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"region\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"country\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"browserName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"osName\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"device\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               },\n               {\n                  \"name\":\"pageURL\",\n                  \"type\":\"string\",\n                  \"attributes\":{\n                     \"isRequired\":{\n                        \"value\":\"false\",\n                        \"valueType\":\"BOOLEAN\"\n                     },\n                     \"regex\":{\n                        \"valueType\":\"STRING\"\n                     }\n                  }\n               }\n            ],\n            \"orgId\":100458,\n            \"status\":\"PUBLISHED\",\n            \"testStatus\":\"VERIFIED\",\n            \"label\":\"Customer Registered\",\n            \"description\":\"Customer Registered\",\n            \"date\":1583306398495,\n            \"standardEvent\":true\n         },\n         \"transformerMappings\":{\n            \"defaultTransformerMappping\":false,\n            \"webEngageTransformerMapping\":{\n               \"eventNameMapping\":{\n                  \"valueMap\":{\n                     \"Added To Cart\":\"addedToCart\",\n                     \"Product Viewed\":\"productViewed\",\n                     \"Promotion Viewed\":\"promotionViewed\",\n                     \"Register\":\"customerRegistered\",\n                     \"Removed From Cart\":\"removedFromCart\",\n                     \"asdfg\":\"promotionViewed\",\n                     \"qwert\":\"addedToCart\",\n                     \"qwert1234567u\":\"productViewed\"\n                  }\n               },\n               \"eventFieldMappings\":[\n                  {\n                     \"eventFieldName\":\"customerId\",\n                     \"fieldName\":\"user_id\"\n                  },\n                  {\n                     \"eventFieldName\":\"firstName\",\n                     \"fieldName\":\"firstName\"\n                  },\n                  {\n                     \"eventFieldName\":\"lastName\",\n                     \"fieldName\":\"lastName\"\n                  },\n                  {\n                     \"eventFieldName\":\"deviceId\",\n                     \"fieldName\":\"deviceId\"\n                  },\n                  {\n                     \"eventFieldName\":\"ipAddress\",\n                     \"fieldName\":\"ip\"\n                  },\n                  {\n                     \"eventFieldName\":\"city\",\n                     \"fieldName\":\"city\"\n                  },\n                  {\n                     \"eventFieldName\":\"region\",\n                     \"fieldName\":\"region\"\n                  },\n                  {\n                     \"eventFieldName\":\"country\",\n                     \"fieldName\":\"country\"\n                  },\n                  {\n                     \"eventFieldName\":\"browserName\",\n                     \"fieldName\":\"browser_name\"\n                  },\n                  {\n                     \"eventFieldName\":\"osName\",\n                     \"fieldName\":\"os_name\"\n                  },\n                  {\n                     \"eventFieldName\":\"device\",\n                     \"fieldName\":\"device\"\n                  },\n                  {\n                     \"eventFieldName\":\"pageURL\",\n                     \"fieldName\":\"page_url\"\n                  }\n               ]\n            }\n         }\n      }\n   ],\n   \"warnings\":[\n\n   ],\n   \"errors\":[\n\n   ]\n}"
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
                          "clickEventsMeta": {
                            "type": "object",
                            "properties": {
                              "eventId": {
                                "type": "string",
                                "example": "48529b6f-b39f-4d10-83c9-a90a150dd73b"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "OfferScan"
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
                                      "example": "customer"
                                    },
                                    "type": {
                                      "type": "string",
                                      "example": "customer"
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
                                              "example": "false"
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
                                "example": "Offer Scan Event"
                              },
                              "date": {
                                "type": "integer",
                                "example": 1583306398493,
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
                              "defaultTransformerMappping": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "webEngageTransformerMapping": {}
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
          }
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events' \\\n--header 'Cookie: _cfuvid=cVUZ35z5krdCM26evqA.B0plrMHwkF57TihY2N7Cp0k-1718948790910-0.0.1.1-604800000; _cfuvid=P5nAvVQILHCofukFt8usi2pzsDcNCGVU5XhfVla7e8s-1757672304590-0.0.1.1-604800000' \\\n--header 'Authorization: Basic ******'",
              "name": "Sample request"
            },
            {
              "language": "curl",
              "code": "http://eu.api.capillarytech.com/v2/events/event_data?id=5aa2e5dc-2b84-4798-99a2-69dba75523ba\n",
              "name": "Sample to get specific event"
            }
          ],
          "samples-languages": [
            "shell",
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