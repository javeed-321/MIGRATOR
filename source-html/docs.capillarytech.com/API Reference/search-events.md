> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Search events

This API provides advanced search functionality for behavioural events, allowing you to filter, sort, and paginate through events.

> ❗️ Attention
>
> The API retrieves event details from January 2024 onwards and does not fetch details of events that occurred before this date.

# Features

1. **Filters:**
   * Filter events based on various criteria:
   * Date range
   * Event name.
   * Events of a customer or groups. You can combine this with other search criteria. For example, events of a customer in a particular date range.
   * Events performed by a particular member in a user group event
   * Event ID. The event ID is an internally generated ID during the creation of the event.
   * Behavioural event attributes.
   * Duplicate events.

2. **Sorting:** Sort events based on event date-time in ascending or descending order.

3. **Pagination:** Limit the number of page results and setting offset (number of pages to skip from the beginning)

4. This API provides more flexibility and search options than the [GET Customer event API](https://docs.capillarytech.com/reference/get-customer-events).

# Use cases

* You can use different combinations to search for events. For example, suppose you want to find an event named "Offerscan" performed by a particular user. In that case, you can filter the event search using the eventName parameter and by providing the identifier type and value of the customer.

* Similarly, to retrieve details of a particular event between certain dates, you can define`fromDate`, `tillDate`, `eventName` and filter the events.\
  `https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28`

* Searching for an event using behavioural event attribute - For example, as a hotel chain brand, if you want to search for reservation events of a particular hotel, you can search by defining the attribute name and value. If the behavioural event attribute name is `hotel_name` and the hotel name is `PalaceABC`, you can search using the attribute name `hotel_name` and the value `PalaceABC`.\
  `https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28&hotel_name=PalaceABC`

* Searching for duplicate events of a user

  `https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=555734097&isDuplicate=true`

* Searching for an event with details of outcomes triggered by the occurrence of a specific event

  `https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=mobile&userIdentifierValue=918105886351&includeSideEffects=true`

* Searching for an event performed by a member in a group event\
  `https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=176875087&userGroupIdentifierType=groupExternalId&userGroupIdentifierValue=bukl123`

<br />

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

* [ ] Authentication; Basic or OAuth authentication details
* [ ] Access group resource - Read access to Customer access group resource

# Resource information

|                       |                  |
| :-------------------- | :--------------- |
| URI                   | v2/events/search |
| HTTP method           | GET              |
| Pagination supported? | Yes              |
| Batch support         | NA               |

# Request query parameters

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
        eventId
      </td>

      <td>
        string
      </td>

      <td>
        Primary ID of the event. This ID is internally generated during the creation of the event. Refer to [Create Event](https://docs.capillarytech.com/reference/create-event-custom) to know about event creation.
      </td>
    </tr>

    <tr>
      <td>
        eventName
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
        userIdentifierType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of user identifier: Supported values: mobile, email, and userId.
      </td>
    </tr>

    <tr>
      <td>
        userIdentifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Value of the user identifier.
      </td>
    </tr>

    <tr>
      <td>
        userIdentifierSource
      </td>

      <td>
        string
      </td>

      <td>
        Source to search user profile. The default value is INSTORE.
      </td>
    </tr>

    <tr>
      <td>
        userIdentifierAccountId
      </td>

      <td>
        string
      </td>

      <td>
        Account ID of the user profile source. Not required for INSTORE profiles.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of user group identifier. Supported values: groupId, groupExternalId, mobile, email, and userId.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Value of the user group identifier.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierSource
      </td>

      <td>
        string
      </td>

      <td>
        Source to search user profile. The default value is INSTORE. Required if searching by mobile or email.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierAccountId
      </td>

      <td>
        string
      </td>

      <td>
        Account ID of the user profile source. Not required for INSTORE profiles. Required for mobile or email search.
      </td>
    </tr>

    <tr>
      <td>
        fromDate
      </td>

      <td>
        string
      </td>

      <td>
        Start date in ISO format (e.g., 2024-03-19T15:31:28).
      </td>
    </tr>

    <tr>
      <td>
        tillDate
      </td>

      <td>
        string
      </td>

      <td>
        End date in ISO Format (e.g., 2024-03-19T16:31:28).
      </td>
    </tr>

    <tr>
      <td>
        limit
      </td>

      <td>
        integer
      </td>

      <td>
        Number of records to fetch. The default value is 10.
      </td>
    </tr>

    <tr>
      <td>
        offset
      </td>

      <td>
        integer
      </td>

      <td>
        Number of records to skip from the beginning. The default value is 0.
      </td>
    </tr>

    <tr>
      <td>
        sortOrder
      </td>

      <td>
        string
      </td>

      <td>
        Sorts by event date-time in ascending or descending order. The default value is desc.
      </td>
    </tr>

    <tr>
      <td>
        includeSideEffects
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates whether to include loyalty side effects. The Default value is false. This parameter provides details of the outcomes triggered by the occurrence of a specific event.
      </td>
    </tr>

    <tr>
      <td>
        isDuplicate
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates whether to include [duplicate events](https://docs.capillarytech.com/docs/creat-behavioral-events#enabling-uniqueness-check). The `isDuplicate` field indicates whether an event is considered a duplicate or an original event. If true, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event. Acceptable values - true or false.
      </td>
    </tr>

    <tr>
      <td>
        allowExactMatch
      </td>

      <td>
        boolean
      </td>

      <td>
        Controls how the [event attributes](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/custom-attributes) filters are matched in the search. Use this parameter to choose between exact matching and partial matching for your search. By default, the value is set to false.

        Set `allowExactMatch=true` to return only events where the attribute value matches the full string exactly as entered. This is helpful when filtering values that include special characters like underscores (`_`) or hyphens (`-`).
        **Example**: `/v2/events/search?address=colaba-mumbai&allowExactMatch=true`
        Returns only events where the `address` exactly matches `"colaba-mumbai"`.

        Set `allowExactMatch=false` (or omit the parameter) to perform a partial match. The API splits the input into parts and matches each part independently. This allows for more flexible, forgiving searches. **Example**: `/v2/events/search?address=colaba`\\
        Returns events where similar parts appear in the address, such as:
        `"colaba east"`, `colaba market"`, or `"colaba-mumbai"`.

        **Note**: This parameter applies **only to event attribute filters**.
      </td>
    </tr>

    <tr>
      <td>
        attribute
      </td>

      <td>
        Based on the attribute
      </td>

      <td>
        Parameter used to search behavioural events by attribute name and its corresponding value.

        **Scenario 1:**\
        The event includes a [standard attribute](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/standard-attributes) named `eventDateTime` with the value `1746694617000`, you can retrieve it by searching on that field:
        **Example**: v2/events/search?eventDateTime=1746694617000

        **Scenario 2:**\
        If an event includes a [custom attribute](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/custom-attributes) named `hotel_name` with the value `Hilton-Kensington`, you can use the same approach to search by that attribute:
        **Example**: v2/events/search?hotel\_name=Hilton-Kensington
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| orgId                 | The organization ID associated with the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| userId                | The user identifier of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| date                  | The date and time when the event was processed in epoch time format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| eventName             | The name of the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| eventId               | The unique identifier for the event. This is internally generated during creation of the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| source                | Customer registration source profile (e.g., INSTORE).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| tillCode              | The code associated with the till where the event occurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| displayName           | The display name of the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| additionalAttributes  | Additional attributes related to the event, such as review content, account ID, and event metadata. <br />- The `isDuplicate` field indicates whether an event is considered a duplicate or an original event. If true, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event.<br />- The `eventDateTime` is a [standard attribute](https://docs.capillarytech.com/docs/creat-behavioral-events#standard-attributes) in the behavioural event system. This field captures the date and time when the event is processed. If you define a value for this parameter while sending the event, it displays that specific date and time in epoch format. Otherwise, it displays the event processing time, sharing the same value as the `date` parameter above. |
| clickEventSideEffects | Additional actions or consequences triggered by events, such as awarding points or other actions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| requestId             | The unique identifier for the request associated with the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| psiAttributes         | Includes attributes that are marked as potentially sensitive data. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| sideEffects           | An array containing details of any side effects triggered by the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# API Specific Error Code

| **Error Code** | **Description**                                         | **When It Occurs**                                                                                                                                       |
| :------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1849           | Search system unreachable                               | When the search system is temporarily unavailable or cannot be reached.                                                                                  |
| 1850           | Invalid search request parameters `userIdentifierValue` | When an invalid or malformed value is passed in the `userIdentifierValue` parameter of the search request (e.g., "77448764sd" instead of a valid value). |

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
    "/events/search": {
      "get": {
        "summary": "Search events",
        "description": "",
        "operationId": "search-events",
        "parameters": [
          {
            "name": "eventId",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "eventName",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "userIdentifierType",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "userId"
              ]
            }
          },
          {
            "name": "userIdentifierValue",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "userIdentifierSource",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "userIdentifierAccountId",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "userGroupIdentifierType",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "groupId",
                "groupExternalId",
                "mobile",
                "email",
                "userId"
              ]
            }
          },
          {
            "name": "userGroupIdentifierValue",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "userGroupIdentifierSource",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "userGroupIdentifierAccountId",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "fromDate",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "tillDate",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sortOrder",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ]
            }
          },
          {
            "name": "includeSideEffects",
            "in": "query",
            "description": "Pass `true` to include side effects of the event in the response. The `sideEffects.awardedPoints` value reflects the points awarded when the event was originally processed and is not updated by subsequent manual ledger adjustments. To see the customer's current point balance, use the [Get Customer Ledger Balance API](https://docs.capillarytech.com/reference/get-customer-ledger-balance).",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "isDuplicate",
            "in": "query",
            "description": "true, false",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Events of a user from a specific source": {
                    "value": {
                      "clickEventDataList": [
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:56:57Z",
                          "eventName": "TestingEvent_FE",
                          "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                          "source": "INSTORE",
                          "tillCode": "75155373",
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
                          "tillCode": "75155373",
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
                          "tillCode": "75155373",
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
                      "totalRecords": 3,
                      "warnings": []
                    }
                  },
                  "Response for an event with PSI attribute \"gender\"": {
                    "value": "{\n    \"clickEventDataList\": [\n        {\n            \"orgId\": 100458,\n            \"userId\": 556811467,\n            \"date\": \"2024-06-03T09:04:49Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"37b53c79-951b-4ea6-b3dd-2e3db2b4f88c\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1717405480386\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1717405489530,\n                \"customerId\": \"556811467\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1717405488000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 556811467\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 556811467,\n            \"date\": \"2024-06-03T09:04:04Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"582059b4-3153-4a0d-bba7-375b97067d0e\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1717405434116\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1717405444169,\n                \"customerId\": \"556811467\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1717405443000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 556811467\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 555204812,\n            \"date\": \"2024-05-29T10:56:49Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"e90d9d7c-f9c5-42b8-97e4-dde8a9f5bb29\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1716980202201\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1716980209733,\n                \"customerId\": \"555204812\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1716980208000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 555204812\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 171768797,\n            \"date\": \"2024-05-24T08:46:48Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"e60926a8-2096-45f9-af45-211aece57bd5\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1716540401629\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1716540408106,\n                \"customerId\": \"171768797\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1716540407000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 171768797\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 171768797,\n            \"date\": \"2024-05-24T08:45:26Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"aed49d67-cda3-4159-b968-b2c2d43e353e\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1716540319596\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1716540326704,\n                \"customerId\": \"171768797\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1716540326000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 171768797\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 171768797,\n            \"date\": \"2024-05-24T08:40:51Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"2deacc19-c541-4f36-a57d-861324ee6f12\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1716540045698\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1716540051948,\n                \"customerId\": \"171768797\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1716540051000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 171768797\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 171768797,\n            \"date\": \"2024-05-24T06:52:41Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"8d207c6c-4813-4cf2-88ae-1499bd453b4d\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1716533556222\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1716533561855,\n                \"customerId\": \"171768797\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1716533561000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 171768797\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 171768797,\n            \"date\": \"2024-05-23T09:10:21Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"db48bbb3-e3b4-4d66-9824-d887d0391186\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1716455414499\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1716455421239,\n                \"customerId\": \"171768797\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1716455420000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 171768797\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 555228834,\n            \"date\": \"2024-05-07T09:19:30Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"932ea8f6-7b2c-4bc9-9211-173052ac1316\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1715073565594\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1715073570719,\n                \"customerId\": \"555228834\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1715073570000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 555228834\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        },\n        {\n            \"orgId\": 100458,\n            \"userId\": 555228834,\n            \"date\": \"2024-05-07T09:18:19Z\",\n            \"eventName\": \"ClickReview\",\n            \"eventId\": \"b68e4bf2-7768-496b-922f-993d842f7dda\",\n            \"source\": \"INSTORE\",\n            \"tillCode\": \"75027692\",\n            \"displayName\": \"ClickReview\",\n            \"additonalAttributes\": {\n                \"Transaction_ID\": \"TRXNUMBER1715073492180\",\n                \"accountId\": null,\n                \"autoUpdateTimeStamp\": 1715073499518,\n                \"customerId\": \"555228834\",\n                \"displayName\": \"ClickReview\",\n                \"eventDateTime\": \"1715073497000\",\n                \"eventName\": \"ClickReview\",\n                \"isDuplicate\": false,\n                \"orgId\": 100458,\n                \"source\": \"INSTORE\",\n                \"source_till_id\": 75027692,\n                \"source_user_id\": 555228834\n            },\n            \"psiAttributes\": [\n                \"gender\"\n            ]\n        }\n    ],\n    \"totalRecords\": 329,\n    \"warnings\": []\n}"
                  },
                  "includeSideEffects = true": {
                    "value": {
                      "clickEventDataList": [
                        {
                          "orgId": 100737,
                          "userId": 566135941,
                          "date": "2025-09-18T05:03:51Z",
                          "eventName": "TestBE-Rutuja",
                          "eventId": "ff972d37-9c47-4fdd-b956-f57890479305",
                          "source": "INSTORE",
                          "tillCode": "75152721",
                          "additonalAttributes": {
                            "String": "75152721",
                            "accountId": null,
                            "autoUpdateTimeStamp": 1758171831268,
                            "customerId": "566135941",
                            "displayName": null,
                            "eventDateTime": "1758171831000",
                            "eventName": "TestBE-Rutuja",
                            "isDuplicate": false,
                            "is_mongo_push": true,
                            "orgId": 100737,
                            "ouTillCode": "naman_doc",
                            "requestId": "ff972d37-9c47-4fdd-b956-f57890479305",
                            "source": "INSTORE",
                            "source_till_id": 75152721,
                            "source_user_id": 566135941,
                            "uniqueId": "ff972d37-9c47-4fdd-b956-f57890479305",
                            "x-cap-lineage-id": "ff972d37-9c47-4fdd-b956-f57890479305",
                            "x-cap-lineage-start": "1758171829877"
                          },
                          "psiAttributes": [],
                          "clickEventSideEffects": {
                            "requestId": "ff972d37-9c47-4fdd-b956-f57890479305",
                            "sideEffects": []
                          },
                          "uniqueId": "ff972d37-9c47-4fdd-b956-f57890479305"
                        },
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:56:57Z",
                          "eventName": "TestingEvent_FE",
                          "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                          "source": "INSTORE",
                          "tillCode": "75155373",
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
                          "clickEventSideEffects": {
                            "requestId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                            "sideEffects": []
                          },
                          "uniqueId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3"
                        },
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:40:38Z",
                          "eventName": "Event_Rutuja",
                          "eventId": "330c3f0f-42ab-462f-9c77-dad0d132c663",
                          "source": "INSTORE",
                          "tillCode": "75155373",
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
                          "clickEventSideEffects": {
                            "requestId": "330c3f0f-42ab-462f-9c77-dad0d132c663"
                          },
                          "uniqueId": "330c3f0f-42ab-462f-9c77-dad0d132c663"
                        },
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:37:49Z",
                          "eventName": "TestingEvent_FE_Rutuja",
                          "eventId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                          "source": "INSTORE",
                          "tillCode": "75155373",
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
                          "clickEventSideEffects": {
                            "requestId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                            "sideEffects": []
                          },
                          "uniqueId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c"
                        },
                        {
                          "orgId": 100737,
                          "userId": 564332013,
                          "date": "2025-01-24T05:52:58Z",
                          "eventName": "categoryViewed",
                          "eventId": "ad8e814e-9828-4c77-9c49-2c95d378eda3",
                          "source": "INSTORE",
                          "tillCode": "75152721",
                          "displayName": "Category Viewed",
                          "additonalAttributes": {
                            "accountId": null,
                            "autoUpdateTimeStamp": 1737697978598,
                            "customerId": "564332013",
                            "displayName": "Category Viewed",
                            "eventDateTime": "1737697978000",
                            "eventName": "categoryViewed",
                            "isDuplicate": false,
                            "orgId": 100737,
                            "requestId": "ad8e814e-9828-4c77-9c49-2c95d378eda3",
                            "source": "INSTORE",
                            "source_till_id": 75152721,
                            "source_user_id": 564332013,
                            "uniqueId": "ad8e814e-9828-4c77-9c49-2c95d378eda3",
                            "x-cap-lineage-id": "ad8e814e-9828-4c77-9c49-2c95d378eda3",
                            "x-cap-lineage-start": "1737697977365"
                          },
                          "psiAttributes": [],
                          "clickEventSideEffects": {
                            "requestId": "ad8e814e-9828-4c77-9c49-2c95d378eda3",
                            "sideEffects": []
                          },
                          "uniqueId": "ad8e814e-9828-4c77-9c49-2c95d378eda3"
                        }
                      ],
                      "totalRecords": 5,
                      "warnings": []
                    }
                  },
                  "Search with attribute as displayName": {
                    "value": {
                      "clickEventDataList": [
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:56:57Z",
                          "eventName": "TestingEvent_FE",
                          "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                          "source": "INSTORE",
                          "tillCode": "75155373",
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
                          "date": "2025-05-08T08:37:49Z",
                          "eventName": "TestingEvent_FE_Rutuja",
                          "eventId": "1a07e8fd-d192-40b5-ad95-d1c489166a5c",
                          "source": "INSTORE",
                          "tillCode": "75155373",
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
                      "totalRecords": 2,
                      "warnings": []
                    },
                    "summary": "Search with attribute as displayName"
                  },
                  "Sample Response with allowExactMatch=true": {
                    "summary": "Sample Response with allowExactMatch=true",
                    "value": {
                      "clickEventDataList": [
                        {
                          "orgId": 100737,
                          "userId": 564590100,
                          "date": "2025-05-08T08:56:57Z",
                          "eventName": "TestingEvent_FE",
                          "eventId": "1284f7d3-7b54-473e-a72d-b6eaab91ecc3",
                          "source": "INSTORE",
                          "tillCode": "75155373",
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
                        }
                      ],
                      "totalRecords": 1,
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Events of a user from a specific source",
                      "type": "object",
                      "properties": {
                        "clickEventDataList": {
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
                                "example": 555734097,
                                "default": 0
                              },
                              "date": {
                                "type": "string",
                                "example": "2024-05-16T19:15:28Z"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "be_reserved"
                              },
                              "eventId": {
                                "type": "string",
                                "example": "62336aee-0a80-4606-a19e-c2879e2cd9e5"
                              },
                              "source": {
                                "type": "string",
                                "example": "INSTORE"
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
                                    "example": 1715886928261,
                                    "default": 0
                                  },
                                  "customerId": {
                                    "type": "string",
                                    "example": "555734097"
                                  },
                                  "displayName": {
                                    "type": "string",
                                    "example": "be_reserved"
                                  },
                                  "eventDateTime": {
                                    "type": "string",
                                    "example": "1715886927000"
                                  },
                                  "eventName": {
                                    "type": "string",
                                    "example": "be_reserved"
                                  },
                                  "external_event_id": {
                                    "type": "string",
                                    "example": "RAND118"
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
                                  "source_till_id": {},
                                  "source_user_id": {
                                    "type": "integer",
                                    "example": 555734097,
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
                        "totalRecords": {
                          "type": "integer",
                          "example": 9,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Search with transaction attribute",
                      "type": "object",
                      "properties": {
                        "clickEventDataList": {
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
                                "example": 171768797,
                                "default": 0
                              },
                              "date": {
                                "type": "string",
                                "example": "2024-05-24T06:52:41Z"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "ClickReview"
                              },
                              "eventId": {
                                "type": "string",
                                "example": "8d207c6c-4813-4cf2-88ae-1499bd453b4d"
                              },
                              "source": {
                                "type": "string",
                                "example": "INSTORE"
                              },
                              "tillCode": {
                                "type": "string",
                                "example": "75027692"
                              },
                              "displayName": {
                                "type": "string",
                                "example": "ClickReview"
                              },
                              "additonalAttributes": {
                                "type": "object",
                                "properties": {
                                  "Transaction_ID": {
                                    "type": "string",
                                    "example": "TRXNUMBER1716533556222"
                                  },
                                  "accountId": {},
                                  "autoUpdateTimeStamp": {
                                    "type": "integer",
                                    "example": 1716533561855,
                                    "default": 0
                                  },
                                  "customerId": {
                                    "type": "string",
                                    "example": "171768797"
                                  },
                                  "displayName": {
                                    "type": "string",
                                    "example": "ClickReview"
                                  },
                                  "eventDateTime": {
                                    "type": "string",
                                    "example": "1716533561000"
                                  },
                                  "eventName": {
                                    "type": "string",
                                    "example": "ClickReview"
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
                                  "source": {
                                    "type": "string",
                                    "example": "INSTORE"
                                  },
                                  "source_till_id": {
                                    "type": "integer",
                                    "example": 75027692,
                                    "default": 0
                                  },
                                  "source_user_id": {
                                    "type": "integer",
                                    "example": 171768797,
                                    "default": 0
                                  }
                                }
                              },
                              "psiAttributes": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "example": "gender"
                                }
                              }
                            }
                          }
                        },
                        "totalRecords": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Response for an event with PSI attribute \"gender\"",
                      "type": "object",
                      "properties": {
                        "clickEventDataList": {
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
                                "example": 556811467,
                                "default": 0
                              },
                              "date": {
                                "type": "string",
                                "example": "2024-06-03T09:04:49Z"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "ClickReview"
                              },
                              "eventId": {
                                "type": "string",
                                "example": "37b53c79-951b-4ea6-b3dd-2e3db2b4f88c"
                              },
                              "source": {
                                "type": "string",
                                "example": "INSTORE"
                              },
                              "tillCode": {
                                "type": "string",
                                "example": "75027692"
                              },
                              "displayName": {
                                "type": "string",
                                "example": "ClickReview"
                              },
                              "additonalAttributes": {
                                "type": "object",
                                "properties": {
                                  "Transaction_ID": {
                                    "type": "string",
                                    "example": "TRXNUMBER1717405480386"
                                  },
                                  "accountId": {},
                                  "autoUpdateTimeStamp": {
                                    "type": "integer",
                                    "example": 1717405489530,
                                    "default": 0
                                  },
                                  "customerId": {
                                    "type": "string",
                                    "example": "556811467"
                                  },
                                  "displayName": {
                                    "type": "string",
                                    "example": "ClickReview"
                                  },
                                  "eventDateTime": {
                                    "type": "string",
                                    "example": "1717405488000"
                                  },
                                  "eventName": {
                                    "type": "string",
                                    "example": "ClickReview"
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
                                  "source": {
                                    "type": "string",
                                    "example": "INSTORE"
                                  },
                                  "source_till_id": {
                                    "type": "integer",
                                    "example": 75027692,
                                    "default": 0
                                  },
                                  "source_user_id": {
                                    "type": "integer",
                                    "example": 556811467,
                                    "default": 0
                                  }
                                }
                              },
                              "psiAttributes": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "example": "gender"
                                }
                              }
                            }
                          }
                        },
                        "totalRecords": {
                          "type": "integer",
                          "example": 329,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "includeSideEffects = true",
                      "type": "object",
                      "properties": {
                        "clickEventDataList": {
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
                                "example": 556811467,
                                "default": 0
                              },
                              "date": {
                                "type": "string",
                                "example": "2024-06-03T09:04:49Z"
                              },
                              "eventName": {
                                "type": "string",
                                "example": "ClickReview"
                              },
                              "eventId": {
                                "type": "string",
                                "example": "37b53c79-951b-4ea6-b3dd-2e3db2b4f88c"
                              },
                              "source": {
                                "type": "string",
                                "example": "INSTORE"
                              },
                              "tillCode": {
                                "type": "string",
                                "example": "75027692"
                              },
                              "displayName": {
                                "type": "string",
                                "example": "ClickReview"
                              },
                              "additonalAttributes": {
                                "type": "object",
                                "properties": {
                                  "Transaction_ID": {
                                    "type": "string",
                                    "example": "TRXNUMBER1717405480386"
                                  },
                                  "accountId": {},
                                  "autoUpdateTimeStamp": {
                                    "type": "integer",
                                    "example": 1717405489530,
                                    "default": 0
                                  },
                                  "customerId": {
                                    "type": "string",
                                    "example": "556811467"
                                  },
                                  "displayName": {
                                    "type": "string",
                                    "example": "ClickReview"
                                  },
                                  "eventDateTime": {
                                    "type": "string",
                                    "example": "1717405488000"
                                  },
                                  "eventName": {
                                    "type": "string",
                                    "example": "ClickReview"
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
                                  "source": {
                                    "type": "string",
                                    "example": "INSTORE"
                                  },
                                  "source_till_id": {
                                    "type": "integer",
                                    "example": 75027692,
                                    "default": 0
                                  },
                                  "source_user_id": {
                                    "type": "integer",
                                    "example": 556811467,
                                    "default": 0
                                  }
                                }
                              },
                              "psiAttributes": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "example": "gender"
                                }
                              },
                              "clickEventSideEffects": {
                                "type": "object",
                                "properties": {
                                  "requestId": {
                                    "type": "string",
                                    "example": "37b53c79-951b-4ea6-b3dd-2e3db2b4f88c"
                                  },
                                  "sideEffects": {
                                    "type": "array"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "totalRecords": {
                          "type": "integer",
                          "example": 744,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    }
                  ]
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events/search?userIdentifierSource=INSTORE&userIdentifierType=userId&userIdentifierValue=564590100' \\\n--header 'Authorization: Basic ***********' \\\n--header 'Cookie: _cfuvid=LvoffYWnKNroiGI4mcPHub.st6yK1dPDHOW3wI1lEls-1751478744816-0.0.1.1-604800000; _cfuvid=rEh3l2.SnEcfPvuffOaWMD7y.gKyOcQTIs8ZZXkB6bw-1752578804740-0.0.1.1-604800000; _cfuvid=8aD26gTI98.tRf60hYttYRlMeuHFQBuGLB6CIWtoNJI-1758268086083-0.0.1.1-604800000'",
              "name": "Events of a user from a specific source"
            },
            {
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events/search?displayName=TestingEvent_FE' \\\n--header 'Authorization: Basic *********' \\\n--header 'Cookie: _cfuvid=LvoffYWnKNroiGI4mcPHub.st6yK1dPDHOW3wI1lEls-1751478744816-0.0.1.1-604800000; _cfuvid=rEh3l2.SnEcfPvuffOaWMD7y.gKyOcQTIs8ZZXkB6bw-1752578804740-0.0.1.1-604800000; _cfuvid=YoKsTBPhGKY2qdCl3rsX14eZI5ka1zEKxRciBqwbikA-1758274531576-0.0.1.1-604800000'",
              "name": "Search with the attribute displayName"
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events/search?includeSideEffects=true' \\\n--header 'Authorization: Basic *******' \\\n--header 'Cookie: _cfuvid=LvoffYWnKNroiGI4mcPHub.st6yK1dPDHOW3wI1lEls-1751478744816-0.0.1.1-604800000; _cfuvid=rEh3l2.SnEcfPvuffOaWMD7y.gKyOcQTIs8ZZXkB6bw-1752578804740-0.0.1.1-604800000; _cfuvid=jQ2NQYUMJqvuYBdCOf133aNm314A2LRIjIKErv3Aiq4-1758274803788-0.0.1.1-604800000'",
              "name": "includeSideEffects=true"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/events/search?requestId=1284f7d3-7b54-473e-a72d-b6eaab91ecc3&allowExactMatch=true' \\\n--header 'Authorization: Basic **********' \\\n--header 'Cookie: _cfuvid=LvoffYWnKNroiGI4mcPHub.st6yK1dPDHOW3wI1lEls-1751478744816-0.0.1.1-604800000; _cfuvid=rEh3l2.SnEcfPvuffOaWMD7y.gKyOcQTIs8ZZXkB6bw-1752578804740-0.0.1.1-604800000; _cfuvid=KgHxLXEPcP.wzx6JoR3LlOMzcLtK60DZdn41sbAy4Yw-1758275442690-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Search with allowExactMatch=true"
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