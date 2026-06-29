> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve user group members list

This API allows you to retrieve details of members in the user group.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/userGroup2?id=3918893&primaryUserId=566998132&programDetails=true&expiredPoints=true&expirySchedules=true&gapToUpgradeFor=2&gapToRenewFor=2&companyDetails=true' \
--header 'Authorization: Basic bWFkaHVfcmltYTowZjAwNmZlNGM4ZjFhNmRjMmI2ZDI1N2NkNzI3MjU2YQ==' \
--data ''
```

# Query parameters

| Query Parameter | Data type | Description                                                                                                                   |
| --------------- | :-------- | ----------------------------------------------------------------------------------------------------------------------------- |
| externalId      | String    | This parameter is used to filter user groups by their external identifier.                                                    |
| expiredPoints   | boolean   | This parameter, when set to true, requests that information about points that have expired be included in the response.       |
| expirySchedules | boolean   | This parameter, when set to true, requests that information about the schedules for point expiry be included in the response. |
| gapToUpgradeFor | Integer   | This parameter requests the point gap required for upgrading to the next level for a user group.                              |
| gapToRenewFor   | Integer   | This parameter requests the point gap required for renewing the current level for a user group.                               |
| companyDetails  | boolean   | This parameter requests details about the company associated with the user group.                                             |

# Example response

```json Sample response
{
    "id": 3918893,
    "externalId": "uat_ug_10_txn",
    "groupStatus": "ACTIVE",
    "fleetGroupUsers": [
        {
            "userId": 566998132,
            "groupId": 3918893,
            "defaultGroup": true,
            "primaryMember": true,
            "active": true
        },
        {
            "userId": 567219877,
            "groupId": 3918893,
            "defaultGroup": true,
            "primaryMember": false,
            "active": true
        },
        {
            "userId": 567219954,
            "groupId": 3918893,
            "defaultGroup": true,
            "primaryMember": false,
            "active": true
        },
        {
            "userId": 564662499,
            "groupId": 3918893,
            "defaultGroup": false,
            "primaryMember": false,
            "active": false
        }
    ],
    "createdBy": 75155297,
    "createdOn": "2025-11-03T05:23:40Z",
    "groupName": "uatUserGroup10Transactions",
    "maxGroupSize": 6,
    "lifeTimePurchases": 70100,
    "expiredPoints": [],
    "expirySchedules": [
        {
            "points": 49500.0,
            "expiryDate": "2026-04-27",
            "expiryDateISO": "2026-04-27T00:00:00Z",
            "programId": 973
        },
        {
            "points": 5000.0,
            "expiryDate": "2125-11-03",
            "expiryDateISO": "2125-11-03T00:00:00Z",
            "programId": 973
        }
    ],
    "gapToUpgrade": [
        {
            "upgradeBasedOn": "CURRENT_POINTS",
            "upgradeThreshold": 2000.0,
            "customerUpgradeEntityValues": {
                "currentValue": 0.0,
                "gapToUpgrade": 2000.0,
                "valueValidUpto": "2125-11-03"
            }
        }
    ],
    "gapToRenew": {
        "tierExpiryDate": "2125-11-19",
        "renewConfirmed": false,
        "renewStrategies": []
    },
    "totalActiveMembers": 3,
    "totalExitedMembers": 1,
    "pointsSummaries": [
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 54500.0,
            "loyaltyPoints": 54500.0,
            "userGroup2Id": 3918893,
            "currentSlab": "Diamond",
            "currentSlabDescription": "Tier 8",
            "nextSlab": "",
            "nextSlabSerialNumber": -1,
            "nextSlabDescription": "",
            "slabSNo": 8,
            "slabExpiryDate": "2125-11-19T23:59:59Z",
            "programId": 973,
            "delayedPoints": 0.0,
            "delayedReturnedPoints": 0.0,
            "delayedExpiredPoints": 0.0,
            "totalAvailablePoints": 54500.0,
            "totalReturnedPoints": 0.0,
            "linkedPartnerPrograms": [],
            "programTitle": "DocDemoDefaultProgram",
            "programDescription": "Default program for DocDemo",
            "programPointsToCurrencyRatio": 1.0,
            "upgradeStrategies": [],
            "gapToRenewSummary": {
                "tierExpiryDate": "2125-11-19",
                "renewConfirmed": false,
                "renewStrategies": []
            },
            "pointsContributionToGroup": 0.0
        },
        {
            "redeemed": 0.0,
            "expired": 0.0,
            "returned": 0.0,
            "adjusted": 0.0,
            "lifetimePoints": 0.0,
            "loyaltyPoints": 0.0,
            "userGroup2Id": 3918893,
            "currentSlab": "Topaz",
            "currentSlabDescription": "Slab 1",
            "nextSlab": "Coral",
            "nextSlabSerialNumber": 2,
            "nextSlabDescription": "Tier 2",
            "slabSNo": 1,
            "slabExpiryDate": "2125-11-03T23:59:59Z",
            "programId": 983,
            "delayedPoints": 4000.0,
            "delayedReturnedPoints": 0.0,
            "delayedExpiredPoints": 0.0,
            "totalAvailablePoints": 4000.0,
            "totalReturnedPoints": 0.0,
            "linkedPartnerPrograms": [],
            "programTitle": "Group Loyalty Program",
            "programDescription": "Loyalty program for groups",
            "programPointsToCurrencyRatio": 1.0,
            "upgradeStrategies": [
                {
                    "upgradeBasedOn": "CURRENT_POINTS",
                    "upgradeThreshold": 2000.0,
                    "customerUpgradeEntityValues": {
                        "currentValue": 0.0,
                        "gapToUpgrade": 2000.0,
                        "valueValidUpto": "2125-11-03"
                    }
                }
            ],
            "pointsContributionToGroup": 0.0
        }
    ],
    "extendedFields": {
        "ug_status": "Active",
        "usergroup2_automation_extended_field": 25
    },
    "warnings": [
        {
            "status": false,
            "code": 1656,
            "message": "Fleet group do not have a mapped hierarchy"
        }
    ]
}
```

# Response parameters

<Table align={[null,"left",null]}>
  <thead>
    <tr>
      <th>
        Key
      </th>

      <th>
        Data type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        id
      </td>

      <td>
        Long
      </td>

      <td>
        The unique identifier for the group.
      </td>
    </tr>

    <tr>
      <td>
        userId
      </td>

      <td>
        Long
      </td>

      <td>
        The unique identifier for the user.
      </td>
    </tr>

    <tr>
      <td>
        groupId
      </td>

      <td>
        Long
      </td>

      <td>
        The unique identifier for the group to which the user belongs.
      </td>
    </tr>

    <tr>
      <td>
        defaultGroup
      </td>

      <td>
        boolean
      </td>

      <td>
        A boolean indicating if this group is the default group for the user.
      </td>
    </tr>

    <tr>
      <td>
        active
      </td>

      <td>
        boolean
      </td>

      <td>
        A boolean indicating if the user is currently active.
      </td>
    </tr>

    <tr>
      <td>
        primaryMember
      </td>

      <td>
        boolean
      </td>

      <td>
        A boolean indicating if the user is the primary member of the group.
      </td>
    </tr>

    <tr>
      <td>
        externalId
      </td>

      <td>
        String
      </td>

      <td>
        The external identifier for the group.
      </td>
    </tr>

    <tr>
      <td>
        groupStatus
      </td>

      <td>
        Enum
      </td>

      <td>
        The status of the group.   

        Possible values: `ACTIVE`, `INACTIVE`, `DELETED`.
      </td>
    </tr>

    <tr>
      <td>
        fleetGroupUsers
      </td>

      <td>

      </td>

      <td>
        An array of user objects, each with details about a user in the group.
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        Long
      </td>

      <td>
        The ID of the user who created the group.
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>

      </td>

      <td>
        The date and time when the group was created.
      </td>
    </tr>

    <tr>
      <td>
        groupName
      </td>

      <td>
        String
      </td>

      <td>
        The name of the group.
      </td>
    </tr>

    <tr>
      <td>
        maxGroupSize
      </td>

      <td>
        Long
      </td>

      <td>
        The maximum size of the group.
      </td>
    </tr>

    <tr>
      <td>
        lifeTimePurchases
      </td>

      <td>
        Decimal
      </td>

      <td>
        The total purchases made over the lifetime of the group.
      </td>
    </tr>

    <tr>
      <td>
        expiredPoints
      </td>

      <td>

      </td>

      <td>
        An array containing details about points that have expired.
      </td>
    </tr>

    <tr>
      <td>
        expirySchedules
      </td>

      <td>

      </td>

      <td>
        An array containing details about the schedules for point expiry.
      </td>
    </tr>

    <tr>
      <td>
        gapToUpgrade
      </td>

      <td>

      </td>

      <td>
        An array containing details about the gap required to upgrade to the next level.
      </td>
    </tr>

    <tr>
      <td>
        totalActiveMembers
      </td>

      <td>

      </td>

      <td>
        The total number of active members in the group.
      </td>
    </tr>

    <tr>
      <td>
        totalExitedMembers
      </td>

      <td>

      </td>

      <td>
        The total number of members who have exited the group.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>

      </td>

      <td>
        An array of warning messages generated during the processing of the request.
      </td>
    </tr>
  </tbody>
</Table>

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
    "/userGroup2": {
      "get": {
        "summary": "Retrieve user group members list",
        "description": "This API allows you to retrieve details of members in the user group.",
        "operationId": "retrieve-user-group-member-details",
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "Unique ID of the user group. Either id or externalId is mandatory.",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "externalId",
            "in": "query",
            "description": "External ID of the group. Either id or externalId is mandatory.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "primaryMemberDetails",
            "in": "query",
            "description": "Primary member details of the group.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "programDetails",
            "in": "query",
            "description": "Details of the program tier",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "expiredPoints",
            "in": "query",
            "description": "Expired points of the group",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "expirySchedules",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "gapToUpgradeFor",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "gapToRenewFor",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "companyDetails",
            "in": "query",
            "description": "Details of the company",
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
                  "Sample response": {
                    "value": {
                      "id": 3918893,
                      "externalId": "uat_ug_10_txn",
                      "groupStatus": "ACTIVE",
                      "fleetGroupUsers": [
                        {
                          "userId": 566998132,
                          "groupId": 3918893,
                          "defaultGroup": true,
                          "primaryMember": true,
                          "active": true
                        },
                        {
                          "userId": 567219877,
                          "groupId": 3918893,
                          "defaultGroup": true,
                          "primaryMember": false,
                          "active": true
                        },
                        {
                          "userId": 567219954,
                          "groupId": 3918893,
                          "defaultGroup": true,
                          "primaryMember": false,
                          "active": true
                        },
                        {
                          "userId": 564662499,
                          "groupId": 3918893,
                          "defaultGroup": false,
                          "primaryMember": false,
                          "active": false
                        }
                      ],
                      "createdBy": 75155297,
                      "createdOn": "2025-11-03T05:23:40Z",
                      "groupName": "uatUserGroup10Transactions",
                      "maxGroupSize": 6,
                      "lifeTimePurchases": 70100,
                      "expiredPoints": [],
                      "expirySchedules": [
                        {
                          "points": 49500,
                          "expiryDate": "2026-04-27",
                          "expiryDateISO": "2026-04-27T00:00:00Z",
                          "programId": 973
                        },
                        {
                          "points": 5000,
                          "expiryDate": "2125-11-03",
                          "expiryDateISO": "2125-11-03T00:00:00Z",
                          "programId": 973
                        }
                      ],
                      "gapToUpgrade": [
                        {
                          "upgradeBasedOn": "CURRENT_POINTS",
                          "upgradeThreshold": 2000,
                          "customerUpgradeEntityValues": {
                            "currentValue": 0,
                            "gapToUpgrade": 2000,
                            "valueValidUpto": "2125-11-03"
                          }
                        }
                      ],
                      "gapToRenew": {
                        "tierExpiryDate": "2125-11-19",
                        "renewConfirmed": false,
                        "renewStrategies": []
                      },
                      "totalActiveMembers": 3,
                      "totalExitedMembers": 1,
                      "pointsSummaries": [
                        {
                          "redeemed": 0,
                          "expired": 0,
                          "returned": 0,
                          "adjusted": 0,
                          "lifetimePoints": 54500,
                          "loyaltyPoints": 54500,
                          "userGroup2Id": 3918893,
                          "currentSlab": "Diamond",
                          "currentSlabDescription": "Tier 8",
                          "nextSlab": "",
                          "nextSlabSerialNumber": -1,
                          "nextSlabDescription": "",
                          "slabSNo": 8,
                          "slabExpiryDate": "2125-11-19T23:59:59Z",
                          "programId": 973,
                          "delayedPoints": 0,
                          "delayedReturnedPoints": 0,
                          "delayedExpiredPoints": 0,
                          "totalAvailablePoints": 54500,
                          "totalReturnedPoints": 0,
                          "linkedPartnerPrograms": [],
                          "programTitle": "DocDemoDefaultProgram",
                          "programDescription": "Default program for DocDemo",
                          "programPointsToCurrencyRatio": 1,
                          "upgradeStrategies": [],
                          "gapToRenewSummary": {
                            "tierExpiryDate": "2125-11-19",
                            "renewConfirmed": false,
                            "renewStrategies": []
                          },
                          "pointsContributionToGroup": 0
                        },
                        {
                          "redeemed": 0,
                          "expired": 0,
                          "returned": 0,
                          "adjusted": 0,
                          "lifetimePoints": 0,
                          "loyaltyPoints": 0,
                          "userGroup2Id": 3918893,
                          "currentSlab": "Topaz",
                          "currentSlabDescription": "Slab 1",
                          "nextSlab": "Coral",
                          "nextSlabSerialNumber": 2,
                          "nextSlabDescription": "Tier 2",
                          "slabSNo": 1,
                          "slabExpiryDate": "2125-11-03T23:59:59Z",
                          "programId": 983,
                          "delayedPoints": 4000,
                          "delayedReturnedPoints": 0,
                          "delayedExpiredPoints": 0,
                          "totalAvailablePoints": 4000,
                          "totalReturnedPoints": 0,
                          "linkedPartnerPrograms": [],
                          "programTitle": "Group Loyalty Program",
                          "programDescription": "Loyalty program for groups",
                          "programPointsToCurrencyRatio": 1,
                          "upgradeStrategies": [
                            {
                              "upgradeBasedOn": "CURRENT_POINTS",
                              "upgradeThreshold": 2000,
                              "customerUpgradeEntityValues": {
                                "currentValue": 0,
                                "gapToUpgrade": 2000,
                                "valueValidUpto": "2125-11-03"
                              }
                            }
                          ],
                          "pointsContributionToGroup": 0
                        }
                      ],
                      "extendedFields": {
                        "ug_status": "Active",
                        "usergroup2_automation_extended_field": 25
                      },
                      "warnings": [
                        {
                          "status": false,
                          "code": 1656,
                          "message": "Fleet group do not have a mapped hierarchy"
                        }
                      ]
                    },
                    "summary": "Sample response"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 3839,
                      "default": 0
                    },
                    "externalId": {
                      "type": "string",
                      "example": "bukl123"
                    },
                    "groupStatus": {
                      "type": "string",
                      "example": "ACTIVE"
                    },
                    "fleetGroupUsers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "userId": {
                            "type": "integer",
                            "example": 134094571,
                            "default": 0
                          },
                          "groupId": {
                            "type": "integer",
                            "example": 3839,
                            "default": 0
                          },
                          "defaultGroup": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "active": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "primaryMember": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          }
                        }
                      }
                    },
                    "createdBy": {
                      "type": "integer",
                      "example": 75036445,
                      "default": 0
                    },
                    "createdOn": {
                      "type": "string",
                      "example": "2023-04-14T04:29:03Z"
                    },
                    "groupName": {
                      "type": "string",
                      "example": "Buklfleetgroup"
                    },
                    "maxGroupSize": {
                      "type": "integer",
                      "example": 110,
                      "default": 0
                    },
                    "lifeTimePurchases": {
                      "type": "integer",
                      "example": 30000,
                      "default": 0
                    },
                    "expiredPoints": {
                      "type": "array"
                    },
                    "expirySchedules": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "points": {
                            "type": "integer",
                            "example": 700,
                            "default": 0
                          },
                          "expiryDate": {
                            "type": "string",
                            "example": "2024-04-30"
                          },
                          "programId": {
                            "type": "integer",
                            "example": 469,
                            "default": 0
                          }
                        }
                      }
                    },
                    "gapToUpgrade": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "upgradeBasedOn": {
                            "type": "string",
                            "example": "CURRENT_POINTS"
                          },
                          "upgradeThreshold": {
                            "type": "integer",
                            "example": 3000,
                            "default": 0
                          },
                          "customerUpgradeEntityValues": {
                            "type": "object",
                            "properties": {
                              "currentValue": {
                                "type": "integer",
                                "example": 700,
                                "default": 0
                              },
                              "gapToUpgrade": {
                                "type": "integer",
                                "example": 2300,
                                "default": 0
                              },
                              "valueValidUpto": {
                                "type": "string",
                                "example": "2123-04-14"
                              }
                            }
                          }
                        }
                      }
                    },
                    "totalActiveMembers": {
                      "type": "integer",
                      "example": 7,
                      "default": 0
                    },
                    "totalExitedMembers": {
                      "type": "integer",
                      "example": 0,
                      "default": 0
                    },
                    "warnings": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "code": {
                            "type": "integer",
                            "example": 1656,
                            "default": 0
                          },
                          "message": {
                            "type": "string",
                            "example": "Fleet group do not have a mapped hierarchy"
                          }
                        }
                      }
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/userGroup2?id=3918893&primaryUserId=566998132&programDetails=true&expiredPoints=true&expirySchedules=true&gapToUpgradeFor=2&gapToRenewFor=2&companyDetails=true' \\\n--header 'Authorization: Basic bWFkaHVfcmltYTowZjAwNmZlNGM4ZjFhNmRjMmI2ZDI1N2NkNzI3MjU2YQ==' \\\n--data ''",
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