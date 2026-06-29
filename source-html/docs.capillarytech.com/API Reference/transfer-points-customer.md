> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Transfer Customer Points

Transfers points from one customer account to another customer account by validating the OTP issued for the points transfer.

* Rate limiter controls the number of incoming and outgoing traffic of a network
* Authentication verifies the identity of the current user or integration.
  See Introduction > Authentication (Merchant Setup on Admin Portal) for more details.

# Body Parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter
      </th>

      <th style={{ textAlign: "left" }}>
        Type
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        pointsToBeTransferred
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Number of points to be transferred.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        programId
      </td>

      <td style={{ textAlign: "left" }}>
        Integer
      </td>

      <td style={{ textAlign: "left" }}>
        Program ID from which points has to be transferred.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        fromCustomerIdentifier
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        Details of source customer - customer that wants to transfer points.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        toCustomerIdentifier
      </td>

      <td style={{ textAlign: "left" }}>
        Object
      </td>

      <td style={{ textAlign: "left" }}>
        Details of destination customer - customer to whom the points have to be transferred.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        type
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Customer identifier type.
        Values: `ID` (user id of the customer), `MOBILE`, `EXTERNAL_ID`, `EMAIL`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        value
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        The value of the specified identifier.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        groupProgramTransfer
      </td>

      <td style={{ textAlign: "left" }}>
        Boolean
      </td>

      <td style={{ textAlign: "left" }}>
        Indicates whether the transfer is part of a group program. (true/false)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        code
      </td>

      <td style={{ textAlign: "left" }}>
        String
      </td>

      <td style={{ textAlign: "left" }}>
        Pass the OTP received by the fromCustomer for the current points transfer. To issue OTP, use either `/isPointsTransferreable` or `/issuePointsTransferOtp`. This is not mandatory is required only if you have set `issueOtp` to true in [this API](https://docs.capillarytech.com/reference/-customer-points-transferrable) .
      </td>
    </tr>
  </tbody>
</Table>

```curl Sample request using mobile identifiers
curl --location 'https://eu.api.capillarytech.com/v2/points/transfer' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic ********' \
--header 'Cookie: _cfuvid=imSiYfMutGN8wGrfx8333HEATybeT6uGh8RPFWFDg6s-1760698549507-0.0.1.1-604800000' \
--data '{ 
   "pointsTobeTransferred":1, 
   "groupProgramTransfer": "false",
   "programId": 973,
    "fromCustomerIdentifier": {
        "type": "MOBILE",
        "value": "9777785206"
    },
    "toCustomerIdentifier": {
        "type": "MOBILE",
        "value": "9777785207"
    }
   }'
```

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
        data
      </td>

      <td>
        Array
      </td>

      <td>
        List of transfer records returned
      </td>
    </tr>

    <tr>
      <td>
        toEntityId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the recipient customer
      </td>
    </tr>

    <tr>
      <td>
        toEntityType
      </td>

      <td>
        String
      </td>

      <td>
        Type of recipient entity
      </td>
    </tr>

    <tr>
      <td>
        fromEntityId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the sender customer
      </td>
    </tr>

    <tr>
      <td>
        fromEntityType
      </td>

      <td>
        String
      </td>

      <td>
        Type of sender entity
      </td>
    </tr>

    <tr>
      <td>
        pointsTransferDate
      </td>

      <td>
        String
      </td>

      <td>
        Timestamp when transfer occurred in format: yyyy-MM-dd HH:mm:ss.  

        Note: This field will be deprecated in the future and is being replaced by `pointsTransferDateISO`.
      </td>
    </tr>

    <tr>
      <td>
        pointsTransferDateISO
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the points transfer date in ISO 8601 format, returned in the server timezone.

        **EU server example**  
        `2025-12-16T14:30:45Z` → 16 December 2025, 14:30:45 (UTC)

        **India server example**  
        `2025-12-16T14:30:45+05:30` → 16 December 2025, 14:30:45 (IST).

        **Note:** The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        pointsTransferred
      </td>

      <td>
        Float
      </td>

      <td>
        Total number of points transferred
      </td>
    </tr>

    <tr>
      <td>
        transferId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique transaction ID for this transfer
      </td>
    </tr>

    <tr>
      <td>
        transferType
      </td>

      <td>
        String
      </td>

      <td>
        Transfer operation type (e.g: "DEDUCTION" for sender side)
      </td>
    </tr>

    <tr>
      <td>
        -transferredFrom
      </td>

      <td>
        Object
      </td>

      <td>
        Details about the sender
      </td>
    </tr>

    <tr>
      <td>
        -userId
      </td>

      <td>
        Integer
      </td>

      <td>
        Sender's user ID
      </td>
    </tr>

    <tr>
      <td>
        -firstName
      </td>

      <td>
        String
      </td>

      <td>
        Sender's first name
      </td>
    </tr>

    <tr>
      <td>
        -lastName
      </td>

      <td>
        String
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
        Object
      </td>

      <td>
        Details about the recipient
      </td>
    </tr>

    <tr>
      <td>
        -userId
      </td>

      <td>
        Integer
      </td>

      <td>
        Recipient's user ID
      </td>
    </tr>

    <tr>
      <td>
        -firstName
      </td>

      <td>
        String
      </td>

      <td>
        Recipient's first name
      </td>
    </tr>

    <tr>
      <td>
        -lastName
      </td>

      <td>
        String
      </td>

      <td>
        Recipient's last name
      </td>
    </tr>

    <tr>
      <td>
        -notes
      </td>

      <td>
        String
      </td>

      <td>
        Additional notes about the transfer
      </td>
    </tr>

    <tr>
      <td>
        -programName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the loyalty program used
      </td>
    </tr>

    <tr>
      <td>
        pointsTransferBreakupByEarningPrograms
      </td>

      <td>
        Object
      </td>

      <td>
        Breakdown of points by sub-program
      </td>
    </tr>

    <tr>
      <td>
        -programId
      </td>

      <td>
        Integer
      </td>

      <td>
        ID of the earning sub-program
      </td>
    </tr>

    <tr>
      <td>
        -deductedPoints
      </td>

      <td>
        Float
      </td>

      <td>
        Points deducted from this program
      </td>
    </tr>

    <tr>
      <td>
        -programCurrentPoints
      </td>

      <td>
        Integer
      </td>

      <td>
        Remaining points balance in this program
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        List of non-critical warnings (if any)
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array
      </td>

      <td>
        List of errors if transfer failed (empty on success)
      </td>
    </tr>
  </tbody>
</Table>

```json
{
  "data": [
    {
      "toEntityId": 564955411,
      "toEntityType": "CUSTOMER",
      "fromEntityId": 564955302,
      "fromEntityType": "CUSTOMER",
      "pointsTransferDate": "2026-01-07 10:15:05",
      "pointsTransferDateISO": "2026-01-07T10:15:05Z",
      "pointsTransferred": 2,
      "transferId": 1043035,
      "transferType": "DEDUCTION",
      "transferredFrom": {
        "userId": 564955302,
        "firstName": "Oliver",
        "lastName": "Twist"
      },
      "transferredTo": {
        "userId": 564955411,
        "firstName": "Tom",
        "lastName": "Sawyer"
      },
      "notes": "",
      "programName": "DocDemoDefaultProgram",
      "pointsTransferBreakupByEarningPrograms": [
        {
          "programId": 973,
          "deductedPoints": 1,
          "programCurrentPoints": 492
        }
      ]
    }
  ],
  "warnings": [],
  "errors": []
}
```
```json pointsToBeTransferred field is missing 
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
```json value parameter data type invalid
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
```json Parameter provided in the identifierType field is invalid
{
    "warnings": [],
    "errors": [
        {
            "status": false,
            "code": 434,
            "message": "Invalid fromEntity.identifierType set in the request payload"
        }
    ]
}
```
```json Sample response using mobile identifiers
{
    "data": [
        {
            "toEntityId": 564955411,
            "toEntityType": "CUSTOMER",
            "fromEntityId": 564955302,
            "fromEntityType": "CUSTOMER",
            "pointsTransferDate": "2025-10-17 10:55:49",
            "pointsTransferDateISO": "2025-10-17T10:55:49Z",
            "pointsTransferred": 2.0,
            "transferId": 1041106,
            "transferType": "DEDUCTION",
            "transferredFrom": {
                "userId": 564955302,
                "firstName": "",
                "lastName": ""
            },
            "transferredTo": {
                "userId": 564955411,
                "firstName": "testgrp5",
                "lastName": "testgrpv2"
            },
            "notes": "",
            "programName": "DocDemoDefaultProgram",
            "pointsTransferBreakupByEarningPrograms": [
                {
                    "programId": 973,
                    "deductedPoints": 1.000,
                    "programCurrentPoints": 496
                }
            ]
        }
    ],
    "warnings": [],
    "errors": []
}
```

## API specific error code

| Error Code | Description                                                                  | Reason                                                                                                                  |
| :--------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| 3316       | Group redemption action executed for non-group payload                       | The `groupProgramTransfer` parameter is set to "true" but the identifier belongs to a non-group entity.                 |
| 807        | Redemption points not divisible                                              | Only whole numbers greater than 0 are valid in the `pointsToBeTransferred` parameter. Decimal values are not supported. |
| 885        | Invalid program ID                                                           | Invalid or missing `programId`.                                                                                         |
| 8013       | Invalid identifier type                                                      | Invalid or missing `type` in `fromCustomerIdentifier` or `toCustomerIdentifier` parameter.                              |
| 8015       | Customer not found for the given identifier                                  | Invalid or missing `value` in `fromCustomerIdentifier` or `toCustomerIdentifier` parameter.                             |
| 422        | pointsToBeTransferred field is missing                                       | Value provided in `pointsToBeTransferred` field is missing or invalid.                                                  |
| 434        | Invalid transferredBy.identifierValue                                        | The value provided in the `value` parameter is invalid.                                                                 |
| 434        | Invalid fromEntity.identifierType                                            | The value provided in the `identifierType` parameter is invalid.                                                        |
| 804        | Unable to process points transfer request                                    | General processing failure due to system or validation error.                                                           |
| 817        | Redemption failed due to insufficient points or configuration                | Customer does not have enough points or redemption is restricted for this configuration.                                |
| 818        | Points transfer not allowed for the specified program                        | The program does not support point transfer operations.                                                                 |
| 827        | Unable to redeem points. Points redemption is enabled for your organization. | Redemption failed due to temporary or unexpected processing issues. Please try later.                                   |
| 886        | Points transfer failed due to temporary system error                         | Internal failure, please try again later.                                                                               |
| 887        | Points transfer failed due to validation error                               | Parameter or data validation failed, please verify your request.                                                        |
| 888        | Invalid configuration detected                                               | Configuration is invalid. No eligible consumers or listeners are configured. Please report to Capillary Support.        |
| 896        | Points transfer could not be processed                                       | Temporary failure, please try again later.                                                                              |
| 898        | Points transfer currently unavailable                                        | Service temporarily unavailable, please retry later.                                                                    |
| 899        | Misconfigured program setup                                                  | Configuration issue detected. The loyalty program configuration is invalid. Please report to Capillary Support.         |
| 901\*      | (Error code) Customer not eligible for points transfer                       | Customer eligibility criteria not met.                                                                                  |
| 902\*      | (Error code) Duplicate points transfer request                               | Duplicate or conflicting transfer detected.                                                                             |
| 903\*      | (Error code) Redemption limit exceeded                                       | Customer has reached the allowed redemption or transfer limit. The operation did not complete.                          |
| 904\*      | (Error code) Points transfer locked for the customer                         | Transfers are temporarily locked for this customer account.                                                             |

# API Specific Warning Code

| Warning Code | Description                             |
| ------------ | --------------------------------------- |
| 901          | Invalid points or points redemption ID. |
| 902          | Redemption ID does not exist.           |
| 903          | Unable to redeem points.                |
| 904          | Invalid customer details passed.        |

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
    "/points/transfer": {
      "post": {
        "summary": "Transfer Customer Points",
        "description": "Transfers points from one customer account to another customer account by validating the OTP issued for the points transfer.",
        "operationId": "transfer-points-customer",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "pointsTobeTransferred"
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
                  "fromCustomerIdentifier": {
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Identifier type used to identify the customer. Value: mobile, email, externalId, id, cardnumber, cardExternalId."
                      },
                      "value": {
                        "type": "string",
                        "description": "Value of the specified identifier type."
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "type": "object",
                    "description": "Source account from which points need to be transferred."
                  },
                  "toCustomerIdentifier": {
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Identifier type used to identify the customer. Value: mobile, email, externalId, id, cardnumber, cardExternalId."
                      },
                      "value": {
                        "type": "string",
                        "description": "Value of the specified identifier type."
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "type": "object",
                    "description": "Details of destination account."
                  },
                  "code": {
                    "type": "string",
                    "description": "Pass the OTP received by the fromCustomer for the current points transfer. To issue OTP, use either /isPointsTransferrable or /issuePointsTransferOtp."
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "201",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": {
                      "data": [
                        {
                          "toEntityId": 564955411,
                          "toEntityType": "CUSTOMER",
                          "fromEntityId": 564955302,
                          "fromEntityType": "CUSTOMER",
                          "pointsTransferDate": "2026-01-07 10:15:05",
                          "pointsTransferDateISO": "2026-01-07T10:15:05Z",
                          "pointsTransferred": 2,
                          "transferId": 1043035,
                          "transferType": "DEDUCTION",
                          "transferredFrom": {
                            "userId": 564955302,
                            "firstName": "Oliver",
                            "lastName": "Twist"
                          },
                          "transferredTo": {
                            "userId": 564955411,
                            "firstName": "Tom",
                            "lastName": "Sawyer"
                          },
                          "notes": "",
                          "programName": "DocDemoDefaultProgram",
                          "pointsTransferBreakupByEarningPrograms": [
                            {
                              "programId": 973,
                              "deductedPoints": 1,
                              "programCurrentPoints": 492
                            }
                          ]
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "Sample resonse using mobile identifiers": {
                    "summary": "Sample resonse using mobile identifiers",
                    "value": {
                      "data": [
                        {
                          "toEntityId": 564955411,
                          "toEntityType": "CUSTOMER",
                          "fromEntityId": 564955302,
                          "fromEntityType": "CUSTOMER",
                          "pointsTransferDate": "2025-10-17 10:55:49",
                          "pointsTransferDateISO": "2025-10-17T10:55:49Z",
                          "pointsTransferred": 2,
                          "transferId": 1041106,
                          "transferType": "DEDUCTION",
                          "transferredFrom": {
                            "userId": 564955302,
                            "firstName": "",
                            "lastName": ""
                          },
                          "transferredTo": {
                            "userId": 564955411,
                            "firstName": "testgrp5",
                            "lastName": "testgrpv2"
                          },
                          "notes": "",
                          "programName": "DocDemoDefaultProgram",
                          "pointsTransferBreakupByEarningPrograms": [
                            {
                              "programId": 973,
                              "deductedPoints": 1,
                              "programCurrentPoints": 496
                            }
                          ]
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
                          "toEntityId": {
                            "type": "integer",
                            "example": 565039506,
                            "default": 0
                          },
                          "toEntityType": {
                            "type": "string",
                            "example": "CUSTOMER"
                          },
                          "fromEntityId": {
                            "type": "integer",
                            "example": 565039505,
                            "default": 0
                          },
                          "fromEntityType": {
                            "type": "string",
                            "example": "CUSTOMER"
                          },
                          "pointsTransferDate": {
                            "type": "string",
                            "example": "2025-06-02 07:24:58"
                          },
                          "pointsTransferred": {
                            "type": "integer",
                            "example": 2000,
                            "default": 0
                          },
                          "transferId": {
                            "type": "integer",
                            "example": 1037890,
                            "default": 0
                          },
                          "transferType": {
                            "type": "string",
                            "example": "DEDUCTION"
                          },
                          "transferredFrom": {
                            "type": "object",
                            "properties": {
                              "userId": {
                                "type": "integer",
                                "example": 565039505,
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
                          "transferredTo": {
                            "type": "object",
                            "properties": {
                              "userId": {
                                "type": "integer",
                                "example": 565039506,
                                "default": 0
                              },
                              "firstName": {
                                "type": "string",
                                "example": "Madhurima"
                              },
                              "lastName": {
                                "type": "string",
                                "example": "Basak"
                              }
                            }
                          },
                          "notes": {
                            "type": "string",
                            "example": ""
                          },
                          "programName": {
                            "type": "string",
                            "example": "DocDemoDefaultProgram"
                          },
                          "pointsTransferBreakupByEarningPrograms": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "programId": {
                                  "type": "integer",
                                  "example": 973,
                                  "default": 0
                                },
                                "deductedPoints": {
                                  "type": "integer",
                                  "example": 1000,
                                  "default": 0
                                },
                                "programCurrentPoints": {
                                  "type": "integer",
                                  "example": 7500,
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/points/transfer' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic dGpwaWXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Cookie: _cfuvid=smHGQUehzH5WA7Eo3joOunl90pf1EqC0_X3nP9fmLI4-1747978617856-0.0.1.1-604800000; _cfuvid=.PqejUXVjSNaaH.iGjQC9NJQJOL5jhJ_UifXZ2_gxVA-1748849098585-0.0.1.1-604800000' \\\n--data '{\n   \"pointsTobeTransferred\":1000,\n   \"groupProgramTransfer\": \"false\",\n   \"programId\": 973,\n    \"fromCustomerIdentifier\": {\n        \"type\": \"MOBILE\",\n        \"value\": \"919988221100\"\n    },\n    \"toCustomerIdentifier\": {\n        \"type\": \"ID\",\n        \"value\": \"565039506\"\n    }\n}'",
              "name": "cURL"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/points/transfer' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic *****\n--data '{ \n   \"pointsTobeTransferred\":1, \n   \"groupProgramTransfer\": \"false\",\n   \"programId\": 973,\n  \n    \"fromCustomerIdentifier\": {\n        \"type\": \"MOBILE\",\n        \"value\": \"9777785206\"\n    },\n    \"toCustomerIdentifier\": {\n        \"type\": \"MOBILE\",\n        \"value\": \"9777785207\"\n    }\n   \n}'",
              "language": "shell",
              "name": "Sample request usinhg mobile identifiers"
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