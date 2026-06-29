> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Event (Custom)

Lets you add or remove fields and customers for an event. You need to pass the entire payload of the event.

# Prerequisites

* [ ] Authentication: Basic/OAuth authentication
* [ ] Default access group

# Example request

```curl Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/events' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=wt8d4fYS58HryJHm8c1rXf1DHjZVfMI9qocnVL_Stxo-1758799896660-0.0.1.1-604800000; _cfuvid=NMpRvtWWP3izaAO2jX6gHgmPjT1VrUYA4rFoEvaCGtI-1758802176508-0.0.1.1-604800000' \
--header 'Authorization: Basic bWFkMjU2YQ==' \
--data '{
    "eventName": "Group_User_Event",
    "actions": [
        "EMFConsumer"
    ],
    "fields": [
        {
            "attributes": {
                "addCustomerIfNotExists": {
                    "valueType": "Boolean",
                    "value": "true"
                }
            },
            "type": "customer",
            "name": "customer"
        },
        {
            "attributes": {
                "isRequired": {
                    "valueType": "Boolean",
                    "value": "false"
                }
            },
            "type": "tillCode",
            "name": "String"
        },
        {
            "attributes": {
                "isRequired": {
                    "valueType": "Boolean",
                    "value": "false"
                }
            },
            "type": "groupId",
            "name": "enum"
        }
    ]
}'
```
```curl Sample request with OAUTH
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/events' \
--header 'X-CAP-API-OAUTH-TOKEN: eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE3NDY0NjU3NzYsImp0aSI6IktwX3ltdGI3aEZoU21XclhJV3NHeVEiLCJpYXQiOjE3NDY0NjM5NzYsInN1YiI6InJ1dHVqYU9hdXRoIiwiY2xpZW50X2lkIjoyMjk1Mywib3JnX2lkIjoxMDA3MzcsInRva2VuX3VzZSI6InRva2VuX2FjY2VzcyIsImNsaWVudF9rZXkiOiJoaHNBenBocGNGOFI4bkdYZzZrQjBBcDdYIiwiZGVmYXVsdF90aWxsIjo3NTE1NTM3Mywic2NvcGVzIjoiW10ifQ.HJUQdt3jhAz67d-aPKegIyNwXpdlpx1PWGrjOIYw-Ei8CeV6UAq0kvFYbZhzcBx5tEshUgC39vKt4lJ14O_yIz_Ta-vuDRhvsCJeo1CgOpEV-MI2FwnAu1A6vyB7E7T2UnuZPKUukvenkHtZvk8MpS61PhQvU92DvOLoAkdN4tTYbj4pCzV0xlqejPrXFJewHFcXjuEeskoPy_RX8BecdxxbKB4JsHJ4ererD6_YrfTQPLgvnAcOffREe_0Wa_xCtK4CBihsD2IeMQuACBp_STqgeEegRhKGVySqcAE1FpYtkY7NtfLe4YWVQD4Nd6un-XouRnfpD5K4o1e69OVSNA' \
--header 'Content-Type: application/json' \
--header 'Cookie: _cfuvid=PeVDUYK1.WXqSbLr9s0KMRB_g5pBGS1W1BDpQykP18I-1746463976267-0.0.1.1-604800000; _cfuvid=QlI8tqYI8Ta5fLsAYaGDCkEEFdMMKubnukity31whYk-1758804658292-0.0.1.1-604800000' \
--header 'Authorization: Basic bWFkaHVfcmltYTowZjAwNmZlNGM4ZjFhNmRjMmI2ZDI1N2NkNzI3MjU2YQ==' \
--data '{
    "eventName": "TestBE-Rutuja",
    "actions": [
        "EIConsumer"
        
    ],
    "description": "This is a demo event created && updated by Rutuja Hatwar",
    "fields": [
        {
            "name": "customer",
            "type": "customer",
            "attributes": {
                "addCustomerIfNotExists": {
                    "valueType": "Boolean",
                    "value": "false"
                }
            }
        },
        {
            "name": "String",
            "type": "tillCode",
            "attributes": {
                "isRequired": {
                    "valueType": "Boolean",
                    "value": "false"
                }
            }
        },
        {
            "name": "enum",
            "type": "tillCode",
            "attributes": {
                "isRequired": {
                    "valueType": "Boolean",
                    "value": "false"
                }
            }
        }
    ]
}'
```

# Request Body Parameters

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
        eventName*
      </td>

      <td>
        string
      </td>

      <td>
        Name of the event.
      </td>
    </tr>

    <tr>
      <td>
        actions*
      </td>

      <td>
        enum
      </td>

      <td>
        Destination of the event. Values: `EMFConsumer` for EMF related events: Loyalty, DVS, and Communication, EIConsumer for Essential Insights.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        string
      </td>

      <td>
        A short description for the event.
      </td>
    </tr>

    <tr>
      <td>
        fields
      </td>

      <td>
        obj
      </td>

      <td>
        Configure fields for the current event with attributes: `name`, `type`, and `value`.
        -`addCustomerIfNotExists` - Adds the customer if the customer does not exist.
        -`isRequired` - Marks the attribute as mandatory
        -`isUniqueKeyField `- Includes the attribute, to the unique key. Once defined as a unique key field, this attribute becomes mandatory and needs to be marked as `isRequired`. By default, customer identifier and event name are already part of the unique key.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        string
      </td>

      <td>
        Name of the field.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        enum
      </td>

      <td>
        Specify the type of the attribute. Values: `tillCode`, `couponCode`, `customer`, `productSku`, `productBrand`, `productCategory`, `string`, `double`.
      </td>
    </tr>

    <tr>
      <td>
        addCustomerIfNotExists
      </td>

      <td>
        obj
      </td>

      <td>
        Set this value to `true` to allow registering new customers in to the loyalty program automatically
      </td>
    </tr>

    <tr>
      <td>
        valueType
      </td>

      <td>
        enum
      </td>

      <td>
        Data-type of the attribute. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        string
      </td>

      <td>
        Value of the attribute based on its `valueType`.For example, if `valueType` is Boolean, value could be either `true` or `false`.
      </td>
    </tr>
  </tbody>
</Table>

All parameters marked with \* are mandatory. For more information on [event uniqueness check](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/enabling-uniqueness-check), refer to the documentation.

# Example response

```curl Sample response
{
    "warnings": [],
    "errors": []
}
```

<br />

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
    "/events": {
      "put": {
        "summary": "Update Event (Custom)",
        "description": "Lets you add or remove fields and customers for an event. You need to pass the entire payload of the event.",
        "operationId": "update-event-custom",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string"
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
                    "value": {
                      "warnings": [],
                      "errors": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
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
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "{\n    \"eventName\": \"eventsdemo1\",\n    \"actions\": [\"EIConsumer\",\"EMFConsumer\"],\n  \"description\":\"Demo event\",\n    \"fields\": [{\n            \"name\": \"customer\",\n            \"type\": \"customer\",\n            \"attributes\": {\n                \"addCustomerIfNotExists\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"true\"\n                }\n            }\n        },\n        {\n            \"name\": \"string\",\n            \"type\": \"string\",\n            \"attributes\": {\n\n              \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n\n\n            }\n        },\n        {\n            \"name\": \"tillCode\",\n            \"type\": \"tillCode\",\n            \"attributes\": {\n                 \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            }\n        },\n\n        {\n            \"name\": \"productSku\",\n            \"type\": \"productSku\",\n            \"attributes\": {\n                 \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            }\n\n        },\n        {\n            \"name\": \"productBrand\",\n            \"type\": \"productBrand\",\n            \"attributes\": {\n               \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            }\n\n        },\n\n        {\n            \"name\": \"productCategory\",\n            \"type\": \"productCategory\",\n            \"attributes\": {\n                 \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            }\n\n        },\n        {\n            \"name\": \"double\",\n            \"type\": \"double\",\n            \"attributes\": {\n\n               \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n\n            }\n\n        }\n    ]\n}",
              "name": "Sample PUT Body"
            },
            {
              "language": "shell",
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v2/events' \\\n--header 'X-CAP-API-OAUTH-TOKEN: eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE3NDY0NjU3NzYsImp0aSI6IktwX3ltdGI3aEZoU21XclhJV3NHeVEiLCJpYXQiOjE3NDY0NjM5NzYsInN1YiI6InJ1dHVqYU9hdXRoIiwiY2xpZW50X2lkIjoyMjk1Mywib3JnX2lkIjoxMDA3MzcsInRva2VuX3VzZSI6InRva2VuX2FjY2VzcyIsImNsaWVudF9rZXkiOiJoaHNBenBocGNGOFI4bkdYZzZrQjBBcDdYIiwiZGVmYXVsdF90aWxsIjo3NTE1NTM3Mywic2NvcGVzIjoiW10ifQ.HJUQdt3jhAz67d-aPKegIyNwXpdlpx1PWGrjOIYw-Ei8CeV6UAq0kvFYbZhzcBx5tEshUgC39vKt4lJ14O_yIz_Ta-vuDRhvsCJeo1CgOpEV-MI2FwnAu1A6vyB7E7T2UnuZPKUukvenkHtZvk8MpS61PhQvU92DvOLoAkdN4tTYbj4pCzV0xlqejPrXFJewHFcXjuEeskoPy_RX8BecdxxbKB4JsHJ4ererD6_YrfTQPLgvnAcOffREe_0Wa_xCtK4CBihsD2IeMQuACBp_STqgeEegRhKGVySqcAE1FpYtkY7NtfLe4YWVQD4Nd6un-XouRnfpD5K4o1e69OVSNA' \\\n--header 'Content-Type: application/json' \\\n--header 'Cookie: _cfuvid=PeVDUYK1.WXqSbLr9s0KMRB_g5pBGS1W1BDpQykP18I-1746463976267-0.0.1.1-604800000' \\\n--data '{\n    \"eventName\": \"TestBE-Rutuja\",\n    \"actions\": [\n        \"EIConsumer\"\n        \n    ],\n    \"description\": \"This is a demo event created && updated by Rutuja Hatwar\",\n    \"fields\": [\n        {\n            \"name\": \"customer\",\n            \"type\": \"customer\",\n            \"attributes\": {\n                \"addCustomerIfNotExists\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            }\n        },\n        {\n            \"name\": \"String\",\n            \"type\": \"tillCode\",\n            \"attributes\": {\n                \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            }\n        },\n        {\n            \"name\": \"enum\",\n            \"type\": \"tillCode\",\n            \"attributes\": {\n                \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            }\n        }\n    ]\n}'",
              "name": "Sample request with OAUTH"
            },
            {
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v2/events' \\\n--header 'Content-Type: application/json' \\\n--header 'Cookie: _cfuvid=wt8d4fYS58HryJHm8c1rXf1DHjZVfMI9qocnVL_Stxo-1758799896660-0.0.1.1-604800000; _cfuvid=NMpRvtWWP3izaAO2jX6gHgmPjT1VrUYA4rFoEvaCGtI-1758802176508-0.0.1.1-604800000' \\\n--header 'Authorization: Basic bWFkajU2YQ==' \\\n--data '{\n    \"eventName\": \"Group_User_Event\",\n    \"actions\": [\n        \"EMFConsumer\"\n    ],\n    \"fields\": [\n        {\n            \"attributes\": {\n                \"addCustomerIfNotExists\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"true\"\n                }\n            },\n            \"type\": \"customer\",\n            \"name\": \"customer\"\n        },\n        {\n            \"attributes\": {\n                \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            },\n            \"type\": \"tillCode\",\n            \"name\": \"String\"\n        },\n        {\n            \"attributes\": {\n                \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"false\"\n                }\n            },\n            \"type\": \"groupId\",\n            \"name\": \"enum\"\n        }\n    ]\n}'",
              "language": "shell",
              "name": "Sample request"
            }
          ],
          "samples-languages": [
            "curl",
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