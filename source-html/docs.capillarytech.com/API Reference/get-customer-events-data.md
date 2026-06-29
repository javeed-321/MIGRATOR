> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Events

Retrieves the details of all events of a specific customer.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/events/event_data/564590100?userId=564590100' \
--header 'accept: application/json' \
--header 'Authorization: Basic bWFkaHVfjU2YQ==' \
--header 'Cookie: _cfuvid=SaCVkFZICUs252lQ2tc24m6rQ2d38EDi8ptr3sp38bc-1762493749325-0.0.1.1-604800000'
```

# Query parameter

| Parameter | Description                                                                                                                                           |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Use the scope `child` to retrieve the event details of a customer in a child org using the parent org till ID. This applies to a Connected org setup. |

# Path parameter

| Parameter | Data type | Required | Description                                   |
| :-------- | :-------- | :------- | :-------------------------------------------- |
| userId    | Long      | Yes      | Unique customer ID for retrieving event data. |

# Example response

```json Sample response
{
    "data": [
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:56:57Z",
            "eventName": "TestingEvent_FE",
            "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "displayName": "TestingEvent_FE",
            "additonalAttributes": {
                "accountId": null,
                "autoUpdateTimeStamp": 1746694617401,
                "customerId": "564590100",
                "displayName": "TestingEvent_FE",
                "eventDateTime": "1746694617000",
                "eventName": "TestingEvent_FE",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "requestId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "x-cap-lineage-id": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "x-cap-lineage-start": "1746694616212"
            },
            "psiAttributes": [],
            "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3"
        },
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:40:38Z",
            "eventName": "Event_Rutuja",
            "eventId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "additonalAttributes": {
                "String": "75155373",
                "accountId": null,
                "autoUpdateTimeStamp": 1746693638140,
                "customerId": "564590100",
                "displayName": null,
                "eventDateTime": "1746693638000",
                "eventName": "Event_Rutuja",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "ouTillCode": "rutuja_capillary",
                "requestId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "x-cap-lineage-id": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "x-cap-lineage-start": "1746693637008"
            },
            "psiAttributes": [],
            "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663"
        },
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:37:49Z",
            "eventName": "TestingEvent_FE_Rutuja",
            "eventId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "displayName": "TestingEvent_FE",
            "additonalAttributes": {
                "accountId": null,
                "autoUpdateTimeStamp": 1746693469553,
                "customerId": "564590100",
                "displayName": "TestingEvent_FE",
                "eventDateTime": "1746693469000",
                "eventName": "TestingEvent_FE_Rutuja",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "requestId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "x-cap-lineage-id": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "x-cap-lineage-start": "1746693468308"
            },
            "psiAttributes": [],
            "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c"
        }
    ],
    "warnings": [],
    "errors": []
}
```

# Response parameter

| Parameter                 | Description                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                      | A list of event details.                                                                                                                                                                                                                    |
| orgId                     | The organization's identification number.                                                                                                                                                                                                   |
| userId                    | The user's identification number.                                                                                                                                                                                                           |
| date                      | The date and time when the event occurred.                                                                                                                                                                                                  |
| eventName                 | Name of the event.                                                                                                                                                                                                                          |
| eventId                   | Unique identifier for the event.                                                                                                                                                                                                            |
| source                    | Source from which the event originated.                                                                                                                                                                                                     |
| tillCode                  | Code of the till where the event took place.                                                                                                                                                                                                |
| source\_till\_id          | Till ID of the till where the event took place.                                                                                                                                                                                             |
| source\_user\_id          | User ID from which the event was generated.                                                                                                                                                                                                 |
| additonalAttributes       | Additional details associated with the event.                                                                                                                                                                                               |
| uniqueId                  | Unique generated for the event when the Is Unique feature is enabled. Refer to the [Uniqueness check documentation](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check) for more information.       |
| accountid                 | Account identification.                                                                                                                                                                                                                     |
| autoUpdateTimeStamp       | Time when the event was automatically updated.                                                                                                                                                                                              |
| brandname/brand           | Name of the brand.                                                                                                                                                                                                                          |
| browsername/browser\_name | Name of the browser where the event took place.                                                                                                                                                                                             |
| cartid/cartrefkey         | Unique identifier for the cart.                                                                                                                                                                                                             |
| categoryname/category     | Category under which the product/event falls.                                                                                                                                                                                               |
| city                      | City where the event took place.                                                                                                                                                                                                            |
| country                   | Country where the event took place.                                                                                                                                                                                                         |
| device                    | Type of device used during the event.                                                                                                                                                                                                       |
| id                        | Unique identifier.                                                                                                                                                                                                                          |
| ip                        | IP address from which the event originated.                                                                                                                                                                                                 |
| locationname              | Name of the location where the event took place.                                                                                                                                                                                            |
| osname/os\_name           | Name of the operating system.                                                                                                                                                                                                               |
| pageurl/page\_url         | URL of the page where the event occurred.                                                                                                                                                                                                   |
| productname/name          | Name of the product.                                                                                                                                                                                                                        |
| region                    | Region where the event took place.                                                                                                                                                                                                          |
| till                      | Till details.                                                                                                                                                                                                                               |
| variant                   | Variant details of the product.                                                                                                                                                                                                             |
| psiAttributes             | Object indicating if the field contains Protected Sensitive Information. For more information refer, [Classify Potentially Sensitive Information (PSI)](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi) |
| warnings                  | A list of warnings related to the response.                                                                                                                                                                                                 |
| errors                    | A list of errors related to the response.                                                                                                                                                                                                   |

```json Sample response
{
    "data": [
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:56:57Z",
            "eventName": "TestingEvent_FE",
            "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "displayName": "TestingEvent_FE",
            "additonalAttributes": {
                "accountId": null,
                "autoUpdateTimeStamp": 1746694617401,
                "customerId": "564590100",
                "displayName": "TestingEvent_FE",
                "eventDateTime": "1746694617000",
                "eventName": "TestingEvent_FE",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "requestId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "x-cap-lineage-id": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                "x-cap-lineage-start": "1746694616212"
            },
            "psiAttributes": [],
            "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3"
        },
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:40:38Z",
            "eventName": "Event_Rutuja",
            "eventId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "additonalAttributes": {
                "String": "75155373",
                "accountId": null,
                "autoUpdateTimeStamp": 1746693638140,
                "customerId": "564590100",
                "displayName": null,
                "eventDateTime": "1746693638000",
                "eventName": "Event_Rutuja",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "ouTillCode": "rutuja_capillary",
                "requestId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "x-cap-lineage-id": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                "x-cap-lineage-start": "1746693637008"
            },
            "psiAttributes": [],
            "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663"
        },
        {
            "orgId": 100737,
            "userId": 564590100,
            "date": "2025-05-08T08:37:49Z",
            "eventName": "TestingEvent_FE_Rutuja",
            "eventId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
            "source": "INSTORE",
            "tillCode": "rutuja_capillary",
            "displayName": "TestingEvent_FE",
            "additonalAttributes": {
                "accountId": null,
                "autoUpdateTimeStamp": 1746693469553,
                "customerId": "564590100",
                "displayName": "TestingEvent_FE",
                "eventDateTime": "1746693469000",
                "eventName": "TestingEvent_FE_Rutuja",
                "isDuplicate": false,
                "is_mongo_push": true,
                "orgId": 100737,
                "requestId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "source": "INSTORE",
                "source_till_id": 75155373,
                "source_user_id": 564590100,
                "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "x-cap-lineage-id": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                "x-cap-lineage-start": "1746693468308"
            },
            "psiAttributes": [],
            "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c"
        }
    ],
    "warnings": [],
    "errors": []
}
```

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
    "/events/event_data/{userId}": {
      "get": {
        "summary": "Get Customer Events",
        "description": "Retrieves the details of all events of a specific customer.",
        "operationId": "get-customer-events",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer whose events need to be fetched.",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Sample response with PSI data": {
                    "summary": "Sample response with PSI data",
                    "value": {
                      "data": [
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-08-07T13:39:03Z",
                          "eventName": "psiTest",
                          "eventId": "3b18e392-0175-4181-b748-7e7a19bb69f5",
                          "source": "INSTORE",
                          "tillCode": "aldo.till.1",
                          "displayName": "psiTest",
                          "additonalAttributes": {
                            "Age": "24",
                            "Customer": "Anjaney Vatsal",
                            "accountId": null,
                            "autoUpdateTimeStamp": 1723037943257,
                            "customerId": "555738346",
                            "displayName": "psiTest",
                            "eventDateTime": "1723037942000",
                            "eventName": "psiTest",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "source": "INSTORE",
                            "source_till_id": 75046492,
                            "source_user_id": 555738346,
                            "uniqueId": "3b18e392-0175-4181-b748-7e7a19bb69f5"
                          },
                          "psiAttributes": [
                            "Customer",
                            "Age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-08-07T13:35:29Z",
                          "eventName": "psiTest",
                          "eventId": "6f15ca6c-22c6-48e4-b95f-94a9e519c12e",
                          "source": "INSTORE",
                          "tillCode": "aldo.till.1",
                          "displayName": "psiTest",
                          "additonalAttributes": {
                            "Customer": "Anjaney Vatsal",
                            "accountId": null,
                            "autoUpdateTimeStamp": 1723037729237,
                            "customerId": "555738346",
                            "displayName": "psiTest",
                            "eventDateTime": "1723037728000",
                            "eventName": "psiTest",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "source": "INSTORE",
                            "source_till_id": 75046492,
                            "source_user_id": 555738346,
                            "uniqueId": "6f15ca6c-22c6-48e4-b95f-94a9e519c12e"
                          },
                          "psiAttributes": [
                            "Customer",
                            "Age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-28T05:56:53Z",
                          "eventName": "NeTest1",
                          "eventId": "ca5902c6-0061-446b-98dc-019e64b9d784",
                          "source": "INSTORE",
                          "tillCode": "webstore.till_1",
                          "displayName": "NeTest1",
                          "additonalAttributes": {
                            "accountId": null,
                            "autoUpdateTimeStamp": 1719554213692,
                            "customerId": "555738346",
                            "displayName": "NeTest1",
                            "eventDateTime": "1719554213000",
                            "eventName": "NeTest1",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "source": "INSTORE",
                            "source_till_id": 75027692,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": []
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-28T04:56:45Z",
                          "eventName": "be_reserved",
                          "eventId": "40942449-dd7c-4d05-8824-d7adb8fa2fbb",
                          "source": "INSTORE",
                          "tillCode": "webstore.till_1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1719550605677,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1719489600000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75027692,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-28T04:51:26Z",
                          "eventName": "be_reserved",
                          "eventId": "464b0218-7c25-4bfd-84b9-1612d97b6ff5",
                          "source": "INSTORE",
                          "tillCode": "webstore.till_1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1719550286375,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1719489600000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75027692,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-28T04:17:05Z",
                          "eventName": "be_reserved",
                          "eventId": "be085741-85b3-455d-abb2-a56a3bee9b22",
                          "source": "INSTORE",
                          "tillCode": "webstore.till_1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1719548225704,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75027692,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-28T03:44:30Z",
                          "eventName": "be_reserved",
                          "eventId": "4f70f99d-f0e3-4215-b832-ba9fe2ff60a4",
                          "source": "INSTORE",
                          "tillCode": "webstore.till_1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1719546270763,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75027692,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-21T08:22:55Z",
                          "eventName": "be_reserved",
                          "eventId": "67396a1e-1075-4e9a-8da4-8f51252640d3",
                          "source": "INSTORE",
                          "tillCode": "store.nike.1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1718958175628,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75128552,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-20T12:08:37Z",
                          "eventName": "be_reserved",
                          "eventId": "42845e1b-23e9-46f6-a584-608af5741c1f",
                          "source": "INSTORE",
                          "tillCode": "store.nike.1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1718885317372,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75128552,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-20T07:01:41Z",
                          "eventName": "be_reserved",
                          "eventId": "35a56de6-93fe-4119-a360-f3547af1499a",
                          "source": "INSTORE",
                          "tillCode": "store.nike.1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1718866901011,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75128552,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-18T11:20:30Z",
                          "eventName": "be_reserved",
                          "eventId": "948d09c0-35f3-4d85-a8d5-b025caf959a6",
                          "source": "INSTORE",
                          "tillCode": "store.nike.1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1718709630491,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75128552,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-06-12T08:19:35Z",
                          "eventName": "be_reserved",
                          "eventId": "b1641bb7-53c6-4cc1-86ed-9a0c77385e0a",
                          "source": "INSTORE",
                          "tillCode": "store.nike.1",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1718180375462,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": 75128552,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-05-28T20:25:49Z",
                          "eventName": "be_reserved",
                          "eventId": "5fe55552-0a05-47c4-b4d8-8056dda707c2",
                          "source": "INSTORE",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1716927949451,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": null,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-05-28T20:25:32Z",
                          "eventName": "be_reserved",
                          "eventId": "869464b1-ea8c-439d-bc51-a603f717c6e2",
                          "source": "INSTORE",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1716927932811,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": null,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-05-17T10:03:28Z",
                          "eventName": "be_reserved",
                          "eventId": "7be2fdbe-c99d-4a89-a807-9c647f643a0c",
                          "source": "INSTORE",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1715940208103,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1712836800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND121",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": null,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        },
                        {
                          "orgId": 100458,
                          "userId": 555738346,
                          "date": "2024-05-16T20:05:50Z",
                          "eventName": "be_reserved",
                          "eventId": "1f4a921a-6b87-484e-b3c6-fa21960c508f",
                          "source": "INSTORE",
                          "displayName": "be_reserved",
                          "additonalAttributes": {
                            "accountId": null,
                            "age": "20.0",
                            "autoUpdateTimeStamp": 1715889950819,
                            "customerId": "555738346",
                            "displayName": "be_reserved",
                            "eventDateTime": "1715428800000",
                            "eventName": "be_reserved",
                            "external_event_id": "RAND119",
                            "hotel_name": "Indiranagar",
                            "isDuplicate": false,
                            "orgId": 100458,
                            "room_nights": "12",
                            "source": "INSTORE",
                            "source_till_id": null,
                            "source_user_id": 555738346
                          },
                          "psiAttributes": [
                            "age"
                          ]
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "Event details of a child org from a parent org": {
                    "summary": "Event details of a child org from a parent org",
                    "value": {
                      "data": [
                        {
                          "orgId": 51930,
                          "userId": 387476719,
                          "date": "2024-10-22T17:41:40+05:30",
                          "eventName": "clickEventPromoPoint_NonCustomerFieldExistsWithAtleastOneHavingIsUniqueKeyTrue",
                          "eventId": "32100bef-b44e-4819-83ec-2add1562c93f",
                          "source": "INSTORE",
                          "tillCode": "pc.2",
                          "additonalAttributes": {
                            "accountId": null,
                            "autoUpdateTimeStamp": 1729599100186,
                            "customerId": "387476719",
                            "displayName": null,
                            "eventDateTime": "1729599099000",
                            "eventName": "clickEventPromoPoint_NonCustomerFieldExistsWithAtleastOneHavingIsUniqueKeyTrue",
                            "event_flag": "75.16",
                            "isDuplicate": true,
                            "lineageId": "32100bef-b44e-4819-83ec-2add1562c93f",
                            "lineageStart": null,
                            "orgId": 51930,
                            "requestId": "32100bef-b44e-4819-83ec-2add1562c93f",
                            "source": "INSTORE",
                            "source_till_id": 50709498,
                            "source_user_id": 387476719,
                            "uniqueId": "7CB8BFA22E50001280A1BBCC7A62FF33"
                          },
                          "psiAttributes": []
                        },
                        {
                          "orgId": 51930,
                          "userId": 387476719,
                          "date": "2024-10-22T17:39:37+05:30",
                          "eventName": "clickEventPromoPoint_NonCustomerFieldExistsWithAtleastOneHavingIsUniqueKeyTrue",
                          "eventId": "e8ffed86-d642-4015-8274-efc414e9e9ac",
                          "source": "INSTORE",
                          "tillCode": "pc.2",
                          "additonalAttributes": {
                            "accountId": null,
                            "autoUpdateTimeStamp": 1729598977637,
                            "customerId": "387476719",
                            "displayName": null,
                            "eventDateTime": "1729598970000",
                            "eventName": "clickEventPromoPoint_NonCustomerFieldExistsWithAtleastOneHavingIsUniqueKeyTrue",
                            "event_flag": "75.16",
                            "isDuplicate": false,
                            "lineageId": "e8ffed86-d642-4015-8274-efc414e9e9ac",
                            "lineageStart": null,
                            "orgId": 51930,
                            "requestId": "e8ffed86-d642-4015-8274-efc414e9e9ac",
                            "source": "INSTORE",
                            "source_till_id": 50709498,
                            "source_user_id": 387476719,
                            "uniqueId": "7CB8BFA22E50001280A1BBCC7A62FF33"
                          },
                          "psiAttributes": []
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "Sample response": {
                    "summary": "Sample response",
                    "value": {
                      "data": [
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:56:57Z",
                          "eventName": "TestingEvent_FE",
                          "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                          "source": "INSTORE",
                          "tillCode": "rutuja_capillary",
                          "displayName": "TestingEvent_FE",
                          "additonalAttributes": {
                            "accountId": null,
                            "autoUpdateTimeStamp": 1746694617401,
                            "customerId": "564590100",
                            "displayName": "TestingEvent_FE",
                            "eventDateTime": "1746694617000",
                            "eventName": "TestingEvent_FE",
                            "isDuplicate": false,
                            "is_mongo_push": true,
                            "orgId": 100737,
                            "requestId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                            "source": "INSTORE",
                            "source_till_id": 75155373,
                            "source_user_id": 564590100,
                            "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                            "x-cap-lineage-id": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                            "x-cap-lineage-start": "1746694616212"
                          },
                          "psiAttributes": [],
                          "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3"
                        },
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:40:38Z",
                          "eventName": "Event_Rutuja",
                          "eventId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                          "source": "INSTORE",
                          "tillCode": "rutuja_capillary",
                          "additonalAttributes": {
                            "String": "75155373",
                            "accountId": null,
                            "autoUpdateTimeStamp": 1746693638140,
                            "customerId": "564590100",
                            "displayName": null,
                            "eventDateTime": "1746693638000",
                            "eventName": "Event_Rutuja",
                            "isDuplicate": false,
                            "is_mongo_push": true,
                            "orgId": 100737,
                            "ouTillCode": "rutuja_capillary",
                            "requestId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                            "source": "INSTORE",
                            "source_till_id": 75155373,
                            "source_user_id": 564590100,
                            "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                            "x-cap-lineage-id": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                            "x-cap-lineage-start": "1746693637008"
                          },
                          "psiAttributes": [],
                          "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663"
                        },
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:37:49Z",
                          "eventName": "TestingEvent_FE_Rutuja",
                          "eventId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                          "source": "INSTORE",
                          "tillCode": "rutuja_capillary",
                          "displayName": "TestingEvent_FE",
                          "additonalAttributes": {
                            "accountId": null,
                            "autoUpdateTimeStamp": 1746693469553,
                            "customerId": "564590100",
                            "displayName": "TestingEvent_FE",
                            "eventDateTime": "1746693469000",
                            "eventName": "TestingEvent_FE_Rutuja",
                            "isDuplicate": false,
                            "is_mongo_push": true,
                            "orgId": 100737,
                            "requestId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                            "source": "INSTORE",
                            "source_till_id": 75155373,
                            "source_user_id": 564590100,
                            "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                            "x-cap-lineage-id": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                            "x-cap-lineage-start": "1746693468308"
                          },
                          "psiAttributes": [],
                          "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c"
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
                          "orgId": {
                            "type": "integer",
                            "example": 100458,
                            "default": 0
                          },
                          "userId": {
                            "type": "integer",
                            "example": 98662653,
                            "default": 0
                          },
                          "date": {
                            "type": "string",
                            "example": "2019-12-09T03:13:23Z"
                          },
                          "eventName": {
                            "type": "string",
                            "example": "addedToCart"
                          },
                          "eventId": {
                            "type": "string",
                            "example": "5aa2e5dc-2b84-4798-99a2-69dba75523ba"
                          },
                          "source": {
                            "type": "string",
                            "example": "WEB_ENGAGE"
                          },
                          "tillCode": {
                            "type": "string",
                            "example": "webstore.till_1"
                          },
                          "additonalAttributes": {
                            "type": "object",
                            "properties": {
                              "accountid": {
                                "type": "string",
                                "example": "~11b564bda"
                              },
                              "autoUpdateTimeStamp": {
                                "type": "string",
                                "example": "Mon Dec 09 03:13:23 UTC 2019"
                              },
                              "brandname": {
                                "type": "string",
                                "example": "Bukl"
                              },
                              "browsername": {
                                "type": "string",
                                "example": "Chrome"
                              },
                              "cartid": {
                                "type": "string",
                                "example": "7f1e74da-36d3-4fda-9aef-9e8be379a6db"
                              },
                              "categoryname": {
                                "type": "string",
                                "example": "Men/Top Wear/Shirts"
                              },
                              "city": {
                                "type": "string",
                                "example": "Bengaluru"
                              },
                              "country": {
                                "type": "string",
                                "example": "India"
                              },
                              "device": {
                                "type": "string",
                                "example": "desktop"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "addedToCart"
                              },
                              "id": {
                                "type": "string",
                                "example": "5aa2e5dc-2b84-4798-99a2-69dba75523"
                              },
                              "ip": {
                                "type": "string",
                                "example": "115.99.221.149"
                              },
                              "orgId": {
                                "type": "integer",
                                "example": 100458,
                                "default": 0
                              },
                              "osname": {
                                "type": "string",
                                "example": "Mac OS"
                              },
                              "pageurl": {
                                "type": "string",
                                "example": "https://www.bukl.in/products/root-men-top-wear-shirts/bukl/mens-casual-shirt/pid-14572567.aspx?vpid=10569467"
                              },
                              "productname": {
                                "type": "string",
                                "example": "Men's Casual shirt"
                              },
                              "region": {
                                "type": "string",
                                "example": "Karnataka"
                              },
                              "source": {
                                "type": "string",
                                "example": "WEB_ENGAGE"
                              },
                              "till": {
                                "type": "string",
                                "example": "webstore.till_1"
                              },
                              "userId": {
                                "type": "integer",
                                "example": 98662653,
                                "default": 0
                              },
                              "variant": {
                                "type": "string",
                                "example": "M"
                              }
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events/event_data/564590100?userId=564590100' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic bWFkaMjU2YQ==' \\\n--header 'Cookie: _cfuvid=SaCVkFZICUs252lQ2tc24m6rQ2d38EDi8ptr3sp38bc-1762493749325-0.0.1.1-604800000'",
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