> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Create Event (Custom)

Lets you create a new behavioral event.

## Authentication

* Valid OAuth 2.0 authentication token must be included in the request header.
* Use the X-CAP-API-OAUTH-TOKEN header to pass the token.

## Request Body Parameters

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
        eventName\*
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
        actions\*
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
        Short description for the event.
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
        Configure fields for the current event with attributes: `name`, `type`, and `value`. The various attributes available are:
        -`addCustomerIfNotExists` - Adds the customer if the customer does not exist.
        -`isRequired` - Marks the attribute as mandatory
        -`isUniqueKeyField `- Includes the attribute, to the unique key. Once defined as a unique key field, this attribute becomes mandatory and needs to be marked as `isRequired`. By default, customer identifier and event name are already part of the unique key.
        -`isPsiData` - Mark the field as Protected Sensitive Information. For more information refer to, [Classify Potentially Sensitive Information (PSI)](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi) . **Note** - You cannot enable `isPsiData` for the mandatory customer identifier field.
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
        Specify the name of the field.
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
        Set this value to `true` to allow registering new customers into the loyalty program automatically
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

    <tr>
      <td>
        identifierType
      </td>

      <td>
        Object
      </td>

      <td>
        Specify the identifier type and its value
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        String
      </td>

      <td>
        Supported values: userId, mobile, email, externalId, wechat, martjackId, cuid, fbid, unionId, fcmToken, line, cardnumber, cardExternalId
      </td>
    </tr>

    <tr>
      <td>
        valueType
      </td>

      <td>
        String
      </td>

      <td>
        Value for the identifier type
      </td>
    </tr>
  </tbody>
</Table>

<aside class="notice">All parameters marked by \* are mandatory. </aside>

For information on event uniqueness check, see [Event uniqueness check](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check).

## API specific Error codes

| Error Code | Description                                                 | Reason                                  |
| :--------- | :---------------------------------------------------------- | :-------------------------------------- |
| 1806       | Event\_`name` event already exists                          | Already existing event name             |
| 1810       | Event\_`name` event actions invalid                         | Invalid or unsupported event actions    |
| 1811       | event name invalid                                          | Invalid or unsupported event name       |
| 1823       | tillCod invalid event field type                            | Invalid or unsupported event field type |
| 1802       | field attribute value  fails for validation type isRequired | Invalid/null field attribute value      |

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
      "post": {
        "summary": "Create Event (Custom)",
        "description": "Lets you create a new behavioral event.",
        "operationId": "create-event-custom",
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
                  "Sample Response": {
                    "value": ""
                  },
                  "New Example": {
                    "summary": "New Example",
                    "value": ""
                  },
                  "Sample response": {
                    "summary": "Sample response",
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
              "language": "json",
              "code": "{\n    \"eventName\": \"Event_Aditi Khandelwal\",\n    \"actions\": [\n        \"EMFConsumer\"\n    ],\n    \"fields\": [\n        {\n            \"attributes\": {\n                \"addCustomerIfNotExists\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"true\"\n                }\n            },\n            \"type\": \"customer\",\n            \"name\": \"customer\"\n        },\n        {\n            \"attributes\": {\n                \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"true\"\n                }\n            },\n            \"type\": \"tillCode\",\n            \"name\": \"String\"\n        }\n    ]\n}",
              "name": "Sample POST Body"
            },
            {
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events' \\\n--header 'Content-Type: application/json' \\\n--header 'X-CAP-API-OAUTH-TOKEN: eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE3NDc3MjY4NDgsImp0aSI6InFIZHJRSEVJUS1nMHBSX1FCcWlLbmciLCJpYXQiOjE3NDc3MjMyNDgsInN1YiI6IlRKIE9BdXRoIiwiY2xpZW50X2lkIjoyMjYwMSwib3JnX2lkIjoxMDA3MzcsInRva2VuX3VzZSI6InRva2VuX2FjY2VzcyIsImNsaWVudF9rZXkiOiIwckUwdENZRDFjSDhmWlQ5V1l4M1lUU1UxIiwiZGVmYXVsdF90aWxsIjo3NTE1NTI5Nywic2NvcGVzIjoiW10ifQ.dQCUGruEl0o3sp2WiWluJIx002c7pJ7ANMH8mL_AKpy7E-SpaURvoZ2IpJOYwBo3l0p1ajm-L_9gL85lzppAS83kJZnLFQ5jisOyTamRXhNUUAM5RSjnXaprcvAT6Dzcu1o7tGyzInAEMb0RLVWvN-t9OpNwKI-RdOxwSjjvajDugrpzKLWaAlg01VeegdoOwSpe1NKsqCNPd0XnKxIug-tKfsKWuchIiXXOmilV5dvWJdZXjjpd_kO6ltfmBZHnGw1hOjKHenrDekvhc5NqrW_C2mx1wLujyTnkAvcvZB-nMUxqnWw3p9UNobsE1uYRrEhbYIhXWsaoYy2WHHm5uA' \\\n--header 'Cookie: _cfuvid=UD8tBi92awr9KDo5Gz50zEdo5HcsFyQ.anJEXD3XAxE-1745598320661-0.0.1.1-604800000; _cfuvid=gx7_h0H.AUKOkLWlagIoO9Dqfep14kZCAnmfhG8fdH8-1745599453668-0.0.1.1-604800000; _cfuvid=bYWA3PE.Xd7Ex4rtIIL6Z4MgJmlJH1QolLMgTivE6j4-1746004083435-0.0.1.1-604800000; _cfuvid=a1pp7k4tDqgFzDjbIpPglwrAcqAn9nNuT.Kn_DcvY_g-1747723425616-0.0.1.1-604800000' \\\n--data '{\n    \"eventName\": \"Event_Aditi Khandelwal\",\n    \"actions\": [\n        \"EMFConsumer\"\n    ],\n    \"fields\": [\n        {\n            \"attributes\": {\n                \"addCustomerIfNotExists\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"true\"\n                }\n            },\n            \"type\": \"customer\",\n            \"name\": \"customer\"\n        },\n        {\n            \"attributes\": {\n                \"isRequired\": {\n                    \"valueType\": \"Boolean\",\n                    \"value\": \"true\"\n                }\n            },\n            \"type\": \"tillCode\",\n            \"name\": \"String\"\n        }\n    ]\n}'"
            }
          ],
          "samples-languages": [
            "json",
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