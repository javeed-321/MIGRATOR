> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Points Transfer Summary

Retrieves points transfer summary of a customer. 

This includes points that are transferred from the customer account to another customer’s account (Deduction) and points that are received from another customer’s account (Addition).

# Example request

```json Sample request Get points transfer summary
curl --location 'https://eu.api.capillarytech.com/v2/customers/564955098/pointsTransfers' \
--header 'Authorization: Basic =' \
--header 'Cookie: _cfuvid=SPpJZvR8VvAMacotHKvjCBzkT.A38OIejYNSsGOXido-1757310494558-0.0.1.1-604800000'
```

# Prerequisites

* [ ] Basic or OAuth credentials
* [ ] Read access to Points access group resource

# Resource information

| URI                | v2/customers/34301543/pointsTransfers |
| :----------------- | :------------------------------------ |
| HTTP method        | GET                                   |
| Authentication     | Basic                                 |
| Pagination support | Yes                                   |
| Batch Support      | No                                    |

# Request Headers

| Header Key            | Description                                                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorization         | Bearer token for authentication. Example: Bearer \<your\_access\_token>.                                                                                              |
| Content-Type          | Specifies the media type of the request. Use application/json for JSON.                                                                                               |
| Accept                | Defines the response format. Example: application/json or application/xml.                                                                                            |
| X-Capillary-OrgId     | Unique organization ID for which the API is being called.                                                                                                             |
| X-Capillary-App-Key   | Application key for API access.                                                                                                                                       |
| X-CAP-API-OAUTH-TOKEN | This header is a custom authentication header used to pass the OAuth access token for API authentication. Refer to <https://docs.capillarytech.com/reference/oauth#/> |

# Query parameter

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        programId
      </td>

      <td>
        integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Filters transfers for a specific loyalty program; typically needed only for multi-program orgs.
      </td>
    </tr>

    <tr>
      <td>
        entityType
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Supported values: CUSTOMER
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
        Optional
      </td>

      <td>
        Maximum number of records to return per page. Default value: 10
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
        Optional
      </td>

      <td>
        Number of records to skip before starting to return results. The count starts from 0.\  
        Default value: 0
      </td>
    </tr>

    <tr>
      <td>
        page
      </td>

      <td>
        integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Page number to fetch. Default value: 1.
        If you provide both, the page value takes priority, and the offset value is ignored.
        If you give neither, the API fetches page 1 by default.
      </td>
    </tr>

    <tr>
      <td>
        sortBy
      </td>

      <td>
        string
      </td>

      <td>
        Optional
      </td>

      <td>
        Field to sort by (e.g., pointsTransferDate, pointsTransferred).
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
        Optional
      </td>

      <td>
        Sort direction: `asc` (ascending) or `desc` (descending). Default: `desc`.
      </td>
    </tr>
  </tbody>
</Table>

# Path parameter

| Parameter | Type    | Required | Description                                                           |
| :-------- | :------ | :------- | :-------------------------------------------------------------------- |
| userId    | integer | Yes      | Unique ID of the customer whose points transfer summary is requested. |

# Response Parameter

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
        toEntityId
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the recipient entity (customer or group).
      </td>
    </tr>

    <tr>
      <td>
        toEntityType
      </td>

      <td>
        string
      </td>

      <td>
        Type of the recipient entity (e.g., "CUSTOMER").
      </td>
    </tr>

    <tr>
      <td>
        fromEntityId
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the sender entity (customer or group).
      </td>
    </tr>

    <tr>
      <td>
        fromEntityType
      </td>

      <td>
        string
      </td>

      <td>
        Type of the sender entity (e.g., "CUSTOMER").
      </td>
    </tr>

    <tr>
      <td>
        pointsTransferDate
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the points tranfer date and time in the server time zone in YYYY-MM-DDHH:MM:SS. format.  
        Note: This field will be deprecated in the future and is being replaced by `pointsTransferDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        pointsTransferDateISO
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the points transfer date and time in ISO 8601 format, returned in the server time zone.

        **EU server example** 
        2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        **India server example **
        2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        pointsTransferred
      </td>

      <td>
        double
      </td>

      <td>
        Number of points transferred.
      </td>
    </tr>

    <tr>
      <td>
        transferId
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID for the transfer transaction.
      </td>
    </tr>

    <tr>
      <td>
        transferType
      </td>

      <td>
        string
      </td>

      <td>
        Type of transfer (e.g., "DEDUCTION" for outgoing, "ADDITION" for incoming).
      </td>
    </tr>

    <tr>
      <td>
        transferredFrom
      </td>

      <td>
        object
      </td>

      <td>
        Details of the sender:
      </td>
    </tr>

    <tr>
      <td>
          userId
      </td>

      <td>
        long
      </td>

      <td>
        Sender's unique ID.
      </td>
    </tr>

    <tr>
      <td>
          firstName
      </td>

      <td>
        string
      </td>

      <td>
        Sender's first name
      </td>
    </tr>

    <tr>
      <td>
          lastName
      </td>

      <td>
        string
      </td>

      <td>
        Sender's last name
      </td>
    </tr>

    <tr>
      <td>
        transferredTo
      </td>

      <td>
        object
      </td>

      <td>
        Details of the recipient:
      </td>
    </tr>

    <tr>
      <td>
          userId
      </td>

      <td>
        long
      </td>

      <td>
        Recipient's unique ID.
      </td>
    </tr>

    <tr>
      <td>
          firstName
      </td>

      <td>
        string
      </td>

      <td>
        Recipient's first name
      </td>
    </tr>

    <tr>
      <td>
          lastName
      </td>

      <td>
        string
      </td>

      <td>
        Recipient's last name
      </td>
    </tr>

    <tr>
      <td>
        notes
      </td>

      <td>
        string
      </td>

      <td>
        Additional notes or comments for the transfer (if provided).
      </td>
    </tr>

    <tr>
      <td>
        programName
      </td>

      <td>
        string
      </td>

      <td>
        Name of the loyalty program associated with the transfer.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json Response
{
    "data": [
        {
            "toEntityId": 564955098,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 564955097,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-03-26 17:49:22",
            "pointsTransferDateISO": "2025-03-26T17:49:22Z",
            "pointsTransferred": 40.0,
            "transferId": 1035937,
            "transferType": "ADDITION",
            "transferredFrom": {
                "userId": 564955097,
                "firstName": "testgrp1",
                "lastName": "testgrpv2"
            },
            "transferredTo": {
                "userId": 564955098,
                "firstName": "",
                "lastName": ""
            },
            "notes": "Transferred on 28 feb 2025",
            "programName": "DocDemoDefaultProgram"
        },
        {
            "toEntityId": 564955098,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 564955097,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-03-26 17:49:21",
            "pointsTransferDateISO": "2025-03-26T17:49:21Z",
            "pointsTransferred": 40.0,
            "transferId": 1035936,
            "transferType": "ADDITION",
            "transferredFrom": {
                "userId": 564955097,
                "firstName": "testgrp1",
                "lastName": "testgrpv2"
            },
            "transferredTo": {
                "userId": 564955098,
                "firstName": "",
                "lastName": ""
            },
            "notes": "Transferred on 28 feb 2025",
            "programName": "DocDemoDefaultProgram"
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API specific error code

| Error Code | Description                                  | Reason                                                 |
| :--------- | :------------------------------------------- | :----------------------------------------------------- |
| 814        | No Results Found                             | Invalid query parameter passed                         |
| 8015       | Customer not found for the given identifiers | Invalid userId passed                                  |
| 8069       | Merged customer found                        | API request is made for a customer who has been merged |

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
    "/customers/{userId}/pointsTransfers": {
      "get": {
        "summary": "Get Points Transfer Summary",
        "description": "Retrieves points transfer summary of a customer. \n\nThis includes points that are transferred from the customer account to another customer’s account (Deduction) and points that are received from another customer’s account (Addition).",
        "operationId": "get-points-transfer-summary",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "Unique ID of the customer whose points transfer summary needs to fetch.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          },
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
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
                    "value": "{ \n   \"data\":[ \n      { \n         \"pointsTransferDate\":\"2019-10-16 15:53:42\",\n         \"pointsTransferred\":15.0,\n         \"transferId\":100,\n         \"transferType\":\"DEDUCTION\",\n         \"transferredFrom\":{ \n            \"userId\":343015431,\n            \"firstName\":\"Tom\",\n            \"lastName\":\"Sawyer\"\n         },\n         \"transferredTo\":{ \n            \"userId\":343015432,\n            \"firstName\":\"James\",\n            \"lastName\":\"Thomas\"\n         },\n         \"notes\":\"\",\n         \"programName\":\"Nightly_ApiAutoDefaultProgram\"\n      },\n      { \n         \"pointsTransferDate\":\"2019-10-26 10:23:42\",\n         \"pointsTransferred\":5.0,\n         \"transferId\":100,\n         \"transferType\":\"ADDITION\",\n         \"transferredFrom\":{ \n            \"userId\":343015432,\n            \"firstName\":\"James\",\n            \"lastName\":\"Thomas\"\n         },\n         \"transferredTo\":{ \n            \"userId\":343015431,\n            \"firstName\":\"Tom\",\n            \"lastName\":\"Sawyer\"\n         },\n         \"notes\":\"\",\n         \"programName\":\"Nightly_ApiAutoDefaultProgram\"\n      }\n   ],\n   \"warnings\":[ \n\n   ],\n   \"errors\":[ \n\n   ]\n}"
                  },
                  "Sample response Get points transfer summary": {
                    "summary": "Sample response Get points transfer summary",
                    "value": {
                      "data": [
                        {
                          "toEntityId": 564955098,
                          "toEntityType": "CUSTOMER",
                          "fromEntityId": 564955097,
                          "fromEntityType": "CUSTOMER",
                          "pointsTransferDate": "2025-03-26 17:49:22",
                          "pointsTransferred": 40,
                          "transferId": 1035937,
                          "transferType": "ADDITION",
                          "transferredFrom": {
                            "userId": 564955097,
                            "firstName": "testgrp1",
                            "lastName": "testgrpv2"
                          },
                          "transferredTo": {
                            "userId": 564955098,
                            "firstName": "",
                            "lastName": ""
                          },
                          "notes": "Transferred on 28 feb 2025",
                          "programName": "DocDemoDefaultProgram"
                        },
                        {
                          "toEntityId": 564955098,
                          "toEntityType": "CUSTOMER",
                          "fromEntityId": 564955097,
                          "fromEntityType": "CUSTOMER",
                          "pointsTransferDate": "2025-03-26 17:49:21",
                          "pointsTransferred": 40,
                          "transferId": 1035936,
                          "transferType": "ADDITION",
                          "transferredFrom": {
                            "userId": 564955097,
                            "firstName": "testgrp1",
                            "lastName": "testgrpv2"
                          },
                          "transferredTo": {
                            "userId": 564955098,
                            "firstName": "",
                            "lastName": ""
                          },
                          "notes": "Transferred on 28 feb 2025",
                          "programName": "DocDemoDefaultProgram"
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
                          "pointsTransferDate": {
                            "type": "string",
                            "example": "2019-10-16 15:53:42"
                          },
                          "pointsTransferred": {
                            "type": "integer",
                            "example": 15,
                            "default": 0
                          },
                          "transferId": {
                            "type": "integer",
                            "example": 100,
                            "default": 0
                          },
                          "transferType": {
                            "type": "string",
                            "example": "DEDUCTION"
                          },
                          "transferredFrom": {
                            "type": "object",
                            "properties": {
                              "firstName": {
                                "type": "string",
                                "example": "Tom"
                              },
                              "lastName": {
                                "type": "string",
                                "example": "Sawyer"
                              },
                              "userId": {
                                "type": "string"
                              }
                            }
                          },
                          "transferredTo": {
                            "type": "object",
                            "properties": {
                              "firstName": {
                                "type": "string",
                                "example": "James"
                              },
                              "lastName": {
                                "type": "string",
                                "example": "Thomas"
                              },
                              "userId": {
                                "type": "integer"
                              }
                            }
                          },
                          "notes": {
                            "type": "string",
                            "example": ""
                          },
                          "programName": {
                            "type": "string",
                            "example": "Nightly_ApiAutoDefaultProgram"
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
              "language": "shell",
              "code": "https://eu.api.capillarytech.com/v2/customers/343015431/pointsTransfers"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/564955098/pointsTransfers' \\\n--header 'Authorization: Basic =' \\\n--header 'Cookie: _cfuvid=SPpJZvR8VvAMacotHKvjCBzkT.A38OIejYNSsGOXido-1757310494558-0.0.1.1-604800000'",
              "language": "shell",
              "name": "Sample request Get points transfer summary"
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