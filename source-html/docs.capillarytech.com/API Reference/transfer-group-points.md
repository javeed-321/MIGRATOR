> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Transfer Group Points

Lets you transfer points from one account to another account - group to customer, customer to group, or group to group.

## Resource information

| URI                           | v2/points/userGroup2/transfer |
| :---------------------------- | :---------------------------- |
| HTTP Method                   | POST                          |
| Pagination supported?         | NA                            |
| Rate limit                    | NA                            |
| Batch support                 | NA                            |
| Authentication type supported | Basic or OAuth                |

## Request Body Parameter

| Parameter (Parameters marked in \* are mandatory) | Type    | Description                                                                                                                 |
| :------------------------------------------------ | :------ | :-------------------------------------------------------------------------------------------------------------------------- |
| pointsTobeTransferred                             | Integer | Number of points to be transferred.                                                                                         |
| programId\*                                       | Integer | ID of the loyalty program from which points are deducted.                                                                   |
| notes                                             | String  | Additional notes or comments about the transfer.                                                                            |
| transferredBy\*                                   | Object  | Details of the entity initiating the transfer. It is required for all transfers except individual-to-group point transfers. |
| -identifierType\*                                 | String  | Type of identifier used                                                                                                     |
| -identifierValue\*                                | String  | Value of the identifier                                                                                                     |
| -source                                           | String  | Source system initiating the transfer (e.g., "INSTORE").                                                                    |
| -accountId                                        | String  | Account ID associated with the transfer initiator.                                                                          |
| toEntity\*                                        | Object  | Details of the entity receiving the points.                                                                                 |
| -type\*                                           | String  | Type of the receiving entity (e.g., "USERGROUP2").                                                                          |
| -identifierType\*                                 | String  | Type of identifier used                                                                                                     |
| -identifierValue\*                                | String  | Value of the identifier                                                                                                     |
| -accountId                                        | String  | Account ID associated with the recipient.                                                                                   |
| -source                                           | String  | Source system of the recipient (e.g., "INSTORE").                                                                           |
| fromEntity                                        | Object  | Details of the entity sending the points.                                                                                   |
| -type                                             | String  | Type of the sending entity                                                                                                  |
| -identifierType\*                                 | String  | Type of identifier used                                                                                                     |
| -identifierValue\*                                | String  | Value of the identifier                                                                                                     |

```json Sample Request
{
    "pointsTobeTransferred": 1,
    "programId": 973,
    "notes": "notes123",
    "transferredBy": {
        "identifierType": "id",
        "identifierValue": "565345942",
        "source": "INSTOREwe",
        "accountId": "textgrp22"
    },
    "toEntity": {
       "type": "USERGROUP2",
        "identifierType": "id",
        "identifierValue": "3847940",
        "accountId": "textgrp21",
        "source": "INSTORE"
    },
    "fromEntity": {
        "type": "CUSTOMER",
        "identifierType": "id",
        "identifierValue": "565345942"
    }
}
```

## Response Parameter

| Parameter                              | Type    | Description                                                            |
| :------------------------------------- | :------ | :--------------------------------------------------------------------- |
| data                                   | Array   | Contains the list of points transfer records.                          |
| toEntityId                             | Integer | The ID of the entity receiving the points (e.g., UserGroup2).          |
| toEntityType                           | String  | The type of entity receiving the points (e.g., "USERGROUP2").          |
| fromEntityId                           | Integer | The ID of the entity sending the points                                |
| fromEntityType                         | String  | The type of entity sending the points (e.g., "CUSTOMER").              |
| pointsTransferDate                     | String  | The timestamp when the points transfer occurred (yyyy-MM-dd HH:mm:ss). |
| pointsTransferred                      | Float   | The number of points transferred.                                      |
| transferId                             | Integer | A unique identifier for the transfer.                                  |
| transferType                           | String  | The type of transfer                                                   |
| transferredFrom                        | Object  | Details of the sender (Customer).                                      |
| userId                                 | Integer | The user ID of the sender.                                             |
| firstName                              | String  | The first name of the sender.                                          |
| lastName                               | String  | The last name of the sender.                                           |
| externalId                             | String  | The external identifier of the sender.                                 |
| transferredToUserGroup2                | Object  | Details of the recipient (UserGroup2).                                 |
| id                                     | Integer | The ID of the UserGroup2.                                              |
| externalId                             | String  | The external identifier of the UserGroup2.                             |
| groupStatus                            | String  | The status of the group (e.g., "ACTIVE").                              |
| fleetGroupUsers                        | Array   | List of users in the group                                             |
| createdBy                              | Integer | The user ID of the creator of the group.                               |
| createdOn                              | String  | The timestamp when the group was created.                              |
| groupName                              | String  | The name of the UserGroup2.                                            |
| maxGroupSize                           | Integer | The maximum allowed size of the group.                                 |
| lifeTimePurchases                      | Integer | The lifetime purchases associated with the group.                      |
| notes                                  | String  | Additional notes related to the transfer.                              |
| programName                            | String  | The name of the loyalty program.                                       |
| pointsTransferBreakupByEarningPrograms | Array   | Breakdown of points deducted per earning program.                      |
| programId                              | Integer | The ID of the earning program.                                         |
| deductedPoints                         | Float   | The points deducted from this program.                                 |
| programCurrentPoints                   | Integer | Remaining points in the program after deduction.                       |

```json Sample Response
{
    "data": [
        {
            "toEntityId": 3847940,
            "toEntityType": "USERGROUP2",
            "fromEntityId": 565345942,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-05-26 09:32:42",
            "pointsTransferred": 2.0,
            "transferId": 1037706,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 565345942,
                "firstName": "firstname21",
                "lastName": "lastname21",
                "externalId": "73818141"
            },
            "transferredToUserGroup2": {
                "id": 3847940,
                "externalId": "testgrp201externalId201",
                "groupStatus": "ACTIVE",
                "fleetGroupUsers": [],
                "createdBy": 75155295,
                "createdOn": "2025-04-04T09:26:46Z",
                "groupName": "name_sant201",
                "maxGroupSize": 110,
                "lifeTimePurchases": 78000
            },
            "notes": "notes123",
            "programName": "DocDemoDefaultProgram",
            "pointsTransferBreakupByEarningPrograms": [
                {
                    "programId": 973,
                    "deductedPoints": 1.000,
                    "programCurrentPoints": 992
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json Error: pointsToBeTransferred is not provided
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 422,
            "message": "pointsToBeTransferred value is invalid"
        }
    ]
}
```
```json Error: identifierValue or identifierType is invalid
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 434,
            "message": "Invalid transferredBy.identifierValue set in the request payload"
        }
    ]
}
```

## API Specific Error Code

<Table align={["left","left","left"]}>
    <thead>
    <tr>
        <th>
            Error Code
        </th>

        <th>
            Description
        </th>

        <th>
            Reason
        </th>
    </tr>
    </thead>

    <tbody>
    <tr>
        <td>
            1207
        </td>

        <td>
            points transfer to entity details not set/invalid
        </td>

        <td>
            `toEntity` object is missing
        </td>
    </tr>

    <tr>
        <td>
            422
        </td>

        <td>
            pointsToBeTransferred value is invalid
        </td>

        <td>
            `pointsToBeTransferred` value is either invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            434
        </td>

        <td>
            Invalid transferredBy.identifierValue set in the request payload
        </td>

        <td>
            * `identifierType` is invalid. <br />
            * Invalid `identifierValue` for `identifierType` = `id`.\
            Ensure that the data type provided is an integer.
        </td>
    </tr>

    <tr>
        <td>

        </td>

        <td>

        </td>

        <td>

        </td>
    </tr>

    <tr>
        <td>
            807
        </td>

        <td>
            Redemptions points not divisible
        </td>

        <td>
            Redemption points must be in whole numbers.
        </td>
    </tr>

    <tr>
        <td>
            830
        </td>

        <td>
            User does not have permissions to transfer points from this entity
        </td>

        <td>
            User lacks permissions to transfer points.
        </td>
    </tr>

    <tr>
        <td>
            885
        </td>

        <td>
            Invalid program id passed
        </td>

        <td>
            Program ID is invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            889
        </td>

        <td>
            Points processing failed, Please try again later
        </td>

        <td>
            Invalid customer identifiers passed in `toEntity` or `fromEntity`, or the `toEntity` user group is not eligible to receive points (for example, the group is inactive or the transfer feature is not enabled for the program).
        </td>
    </tr>

    <tr>
        <td>
            1206
        </td>

        <td>
            points transfer from entity details not set/invalid
        </td>

        <td>
            `fromEntity` object is missing.
        </td>
    </tr>

    <tr>
        <td>
            1208
        </td>

        <td>
            points transfer entity type not set/invalid.
        </td>

        <td>
            The `identifierValue` or `identifierType` in`to entity` object is invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            1645
        </td>

        <td>
            group details passed are not valid
        </td>

        <td>
            Group Id in `toEntity`object is invalid or missing.
        </td>
    </tr>

    <tr>
        <td>
            8015
        </td>

        <td>
            Customer not found for the given identifiers
        </td>

        <td>
            Invalid or missing costumer ID in  `toEntity`or `fromEntity` object
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
    "/points/userGroup2/transfer": {
      "post": {
        "summary": "Transfer Group Points",
        "description": "Lets you transfer points from one account to another account - group to customer, customer to group, or group to group.",
        "operationId": "transfer-group-points",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "pointsTobeTransferred",
                  "programId"
                ],
                "properties": {
                  "pointsTobeTransferred": {
                    "type": "integer",
                    "description": "Number of points to be transferred.",
                    "format": "int32"
                  },
                  "programId": {
                    "type": "integer",
                    "description": "Program ID from which points has to be transferred. Applicable for multi-program orgs.",
                    "format": "int64"
                  },
                  "groupProgramTransfer": {
                    "type": "boolean",
                    "description": "Pass true to transfer group points."
                  },
                  "notes": {
                    "type": "string",
                    "description": "A short note on the points transfer."
                  },
                  "transferredBy": {
                    "properties": {
                      "identifierType": {
                        "type": "string",
                        "description": "Identifier type used to identify the group or customer. <br>Supported values for customer: mobile, email, externalId, cardnumber, wechat, martjackId, fbId. <br>Supported values for group: id, externalId, primaryUserId, primaryUserCardnumber, primaryUserMobile, primaryUserEmail."
                      },
                      "identifierValue": {
                        "type": "string",
                        "description": "Value of the specified identifier type."
                      },
                      "source": {
                        "type": "string",
                        "description": "Source in which the customer account is available. Value: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP. Required for customer entity."
                      },
                      "accountId": {
                        "type": "string",
                        "description": "Account ID for sources with multiple account IDs."
                      }
                    },
                    "required": [
                      "identifierType",
                      "identifierValue"
                    ],
                    "type": "object",
                    "description": "Source account from which points need to be transferred. This field is mandatory. Note: This field is optional when transferring points from an individual to a group.."
                  },
                  "toEntity": {
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Identifier type used to identify the customer.",
                        "enum": [
                          "CUSTOMER",
                          "USERGROUP2"
                        ]
                      },
                      "identifierType": {
                        "type": "string",
                        "description": "Identifier type to identify customer or group. Supported values for customer: mobile, email, externalId, cardnumber, wechat, martjackId, fbId. Supported values for group: id, externalId, primaryUserId, primaryUserCardnumber, primaryUserMobile, primaryUserEmail."
                      },
                      "identifierValue": {
                        "type": "string",
                        "description": "Value of the specified identifierType."
                      }
                    },
                    "required": [
                      "type",
                      "identifierType",
                      "identifierValue"
                    ],
                    "type": "object",
                    "description": "Details of destination account."
                  },
                  "toEntry": {
                    "properties": {
                      "source": {
                        "type": "string",
                        "description": "Source in which the customer account is available. Value: FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, MOBILE_APP. Required for customer entity."
                      },
                      "accountId": {
                        "type": "string",
                        "description": "Account ID for sources with multiple accounts."
                      }
                    },
                    "required": [],
                    "type": "object"
                  },
                  "code": {
                    "type": "string",
                    "description": "Pass the OTP received by the fromCustomer for the current points transfer. To issue OTP, use either /isPointsTransferrable or /issuePointsTransferOtp."
                  },
                  "fromEntity": {
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Type of the entry.",
                        "enum": [
                          "CUSTOMER",
                          "USERGROUP2"
                        ]
                      },
                      "identifierType": {
                        "type": "string",
                        "description": "Identifier type to identify customer or group. Supported values for customer: mobile, email, externalId, cardnumber, wechat, martjackId, fbId. Supported values for group: id, externalId, primaryUserId, primaryUserCardnumber, primaryUserMobile, primaryUserEmail."
                      },
                      "identifierValue": {
                        "type": "string",
                        "description": "Value of the specified identifierType."
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Details of the source account."
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
                    "value": "{\n   \"data\":[\n      {\n         \"toEntityId\":418400980,\n         \"toEntityType\":\"CUSTOMER\",\n         \"fromEntityId\":2626,\n         \"fromEntityType\":\"USERGROUP2\",\n         \"pointsTransferDate\":\"2021-10-07 16:36:12\",\n         \"pointsTransferred\":10.0,\n         \"transferId\":6545,\n         \"transferType\":\"DEDUCTION\",\n         \"transferredTo\":{\n            \"userId\":418400980,\n            \"firstName\":\"\",\n            \"lastName\":\"\"\n         },\n         \"transferredFromUserGroup2\":{\n            \"id\":2626,\n            \"groupStatus\":\"ACTIVE\",\n            \"fleetGroupUsers\":[\n               {\n                  \"userId\":418400982,\n                  \"groupId\":2626,\n                  \"defaultGroup\":true,\n                  \"active\":true,\n                  \"primaryMember\":true\n               },\n               {\n                  \"userId\":418400981,\n                  \"groupId\":2626,\n                  \"defaultGroup\":false,\n                  \"active\":true,\n                  \"primaryMember\":false\n               },\n               {\n                  \"userId\":418400980,\n                  \"groupId\":2626,\n                  \"defaultGroup\":false,\n                  \"active\":true,\n                  \"primaryMember\":false\n               },\n               {\n                  \"userId\":418400984,\n                  \"groupId\":2626,\n                  \"defaultGroup\":true,\n                  \"active\":true,\n                  \"primaryMember\":false\n               },\n               {\n                  \"userId\":418400985,\n                  \"groupId\":2626,\n                  \"defaultGroup\":true,\n                  \"active\":true,\n                  \"primaryMember\":false\n               }\n            ],\n            \"createdBy\":15089282,\n            \"createdOn\":\"2021-10-07T15:42:02+05:30\",\n            \"lifeTimePurchases\":400\n         },\n         \"notes\":\"notes123\",\n         \"programName\":\"SunRiseDefaultProgram\",\n         \"pointsTransferBreakupByEarningPrograms\":[\n            {\n               \"programId\":765,\n               \"deductedPoints\":10.000,\n               \"programCurrentPoints\":70\n            }\n         ]\n      }\n   ],\n   \"warnings\":[\n\n   ],\n   \"errors\":[\n\n   ]\n}"
                  },
                  "Error: pointsToBeTransferred is not provided": {
                    "value": "{\n    \"warnings\": [],\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 422,\n            \"message\": \"pointsToBeTransferred value is invalid\"\n        }\n    ]\n}"
                  },
                  "Error: identifierValue or identifierType is invalid": {
                    "value": "{\n    \"warnings\": [],\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 434,\n            \"message\": \"Invalid transferredBy.identifierValue set in the request payload\"\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "toEntityId": {
                                "type": "integer",
                                "example": 418400980,
                                "default": 0
                              },
                              "toEntityType": {
                                "type": "string",
                                "example": "CUSTOMER"
                              },
                              "fromEntityId": {
                                "type": "integer",
                                "example": 2626,
                                "default": 0
                              },
                              "fromEntityType": {
                                "type": "string",
                                "example": "USERGROUP2"
                              },
                              "pointsTransferDate": {
                                "type": "string",
                                "example": "2021-10-07 16:36:12"
                              },
                              "pointsTransferred": {
                                "type": "integer",
                                "example": 10,
                                "default": 0
                              },
                              "transferId": {
                                "type": "integer",
                                "example": 6545,
                                "default": 0
                              },
                              "transferType": {
                                "type": "string",
                                "example": "DEDUCTION"
                              },
                              "transferredTo": {
                                "type": "object",
                                "properties": {
                                  "userId": {
                                    "type": "integer",
                                    "example": 418400980,
                                    "default": 0
                                  },
                                  "firstName": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "lastName": {
                                    "type": "string",
                                    "example": ""
                                  }
                                }
                              },
                              "transferredFromUserGroup2": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 2626,
                                    "default": 0
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
                                          "example": 418400982,
                                          "default": 0
                                        },
                                        "groupId": {
                                          "type": "integer",
                                          "example": 2626,
                                          "default": 0
                                        },
                                        "defaultGroup": {
                                          "type": "boolean",
                                          "example": true,
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
                                    "example": 15089282,
                                    "default": 0
                                  },
                                  "createdOn": {
                                    "type": "string",
                                    "example": "2021-10-07T15:42:02+05:30"
                                  },
                                  "lifeTimePurchases": {
                                    "type": "integer",
                                    "example": 400,
                                    "default": 0
                                  }
                                }
                              },
                              "notes": {
                                "type": "string",
                                "example": "notes123"
                              },
                              "programName": {
                                "type": "string",
                                "example": "SunRiseDefaultProgram"
                              },
                              "pointsTransferBreakupByEarningPrograms": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "programId": {
                                      "type": "integer",
                                      "example": 765,
                                      "default": 0
                                    },
                                    "deductedPoints": {
                                      "type": "integer",
                                      "example": 10,
                                      "default": 0
                                    },
                                    "programCurrentPoints": {
                                      "type": "integer",
                                      "example": 70,
                                      "default": 0
                                    }
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
                    },
                    {
                      "title": "Error: pointsToBeTransferred is not provided",
                      "type": "object",
                      "properties": {
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
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
                                "example": 422,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "pointsToBeTransferred value is invalid"
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "Error: identifierValue or identifierType is invalid",
                      "type": "object",
                      "properties": {
                        "warnings": {
                          "type": "array"
                        },
                        "errors": {
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
                                "example": 434,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "Invalid transferredBy.identifierValue set in the request payload"
                              }
                            }
                          }
                        }
                      }
                    }
                  ]
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/points/userGroup2/transfer' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bmFtYW46Y2FiY2U5OGM4MWFlNDM5ZTQ1Yjk3ZTM5YTY0NTY0MTY=' \\\n--header 'X-CAP-API-OAUTH-TOKEN*;' \\\n--header 'Cookie: _cfuvid=KAL3im8y4a6p1m.sKC9ZNCKOc.7BJ5oinn8QtC8fo8Q-1750237083524-0.0.1.1-604800000; _cfuvid=q26adaZV_LdDxr9WGtRWF0DaWItcAvJQ0i3w7VjJQFc-1750675122714-0.0.1.1-604800000' \\\n--data '{\n    \"pointsTobeTransferred\": 1,\n    \"programId\": 469,\n    \"notes\": \"notes123\",\n    \"transferredBy\": {\n        \"identifierType\": \"id\",\n        \"identifierValue\": \"555567088\",\n        \"source\": \"INSTORE\",\n        \"accountId\": \"textgrp22\"\n    },\n    \"toEntity\": {\n       \"type\": \"USERGROUP2\",\n        \"identifierType\": \"externalId\",\n        \"identifierValue\": \"bukl123\",\n        \"accountId\": \"textgrp21\",\n        \"source\": \"INSTORE\"\n    },\n    \"fromEntity\": {\n        \"type\": \"CUSTOMER\",\n        \"identifierType\": \"id\",\n        \"identifierValue\": \"555567088\"\n    }\n}'"
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