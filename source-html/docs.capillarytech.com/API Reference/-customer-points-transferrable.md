> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Check if Points Transferable

Checks if specific points of a customer can be transferred to another customer.

Checks if specific points of a customer can be transferred to another customer. You can also `issue OTP` that is used to authenticate customer to transfer points ( `pointsTransfer` API ). By default, the value is set to false. OTP is not mandatory for points transfer and can be used for security purposes.

> 📘 Notes
>
> * [ ] Points added during customer creation cannot be transferred, points rewarded through transaction are transferable.
> * [ ] This API is applicable only for individual-to-individual transfers within the Intouch platform. It does not support group-to-group transfers.
> * [ ] For detailed information about the APIs and for hands-on testing, refer to the API overview [documentation](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on [making your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call/)

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/points/isTransferrable' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic bWFka2YQ==' \
--header 'Cookie: _cfuvid=IEacVBB7xCaQXaYZNjqhVgGFNNBE1wcNyx6O5vnh4cA-1759831634361-0.0.1.1-604800000' \
--data '{
    "pointsTobeTransferred":1, 
    "groupProgramTransfer": false,
    
    "programId": 973,
    "fromCustomerIdentifier": {
        "type": "MOBILE",
        "value": "9777785206" 
    },
    "toCustomerIdentifier": {
        "type": "MOBILE",
        "value": "9777785207"
    },
    "issueOtp":false
}'
```

# Prerequisites

* The config ALLOW\_POINTS\_TRANSFER should be enabled for the org. To enable this, create a JIRA ticket to the Product Support team.

# Example response

```json Sample response
{
    "data": [
        {
            "pointsTobeTransferred": 1.0,
            "transferFrom": {
                "id": 564955302,
                "profiles": [
                    {
                        "firstName": "testgrp4",
                        "lastName": "testgrpv2",
                        "attribution": {
                            "createDate": "2025-02-18T05:14:32Z",
                            "createdBy": {
                                "id": 75155295,
                                "code": "sant.p_123",
                                "name": "sant.p_123",
                                "type": "TILL",
                                "referenceId": -1,
                                "default": false
                            },
                            "modifiedBy": {
                                "id": 75155295,
                                "code": "sant.p_123",
                                "name": "sant.p_123",
                                "type": "TILL",
                                "referenceId": -1,
                                "default": false
                            },
                            "modifiedDate": "2025-06-02T11:26:52Z"
                        },
                        "fields": {},
                        "allFields": {},
                        "identifiers": [
                            {
                                "type": "mobile",
                                "value": "919777785206"
                            },
                            {
                                "type": "externalId",
                                "value": "434548"
                            },
                            {
                                "type": "email",
                                "value": "testgrp4@gmail.com"
                            }
                        ],
                        "commChannels": [
                            {
                                "type": "mobile",
                                "value": "919777785206",
                                "primary": true,
                                "verified": false,
                                "meta": {
                                    "residence": false,
                                    "office": false
                                },
                                "attributes": {}
                            },
                            {
                                "type": "email",
                                "value": "testgrp4@gmail.com",
                                "primary": true,
                                "verified": false,
                                "meta": {
                                    "residence": false,
                                    "office": false
                                },
                                "attributes": {}
                            }
                        ],
                        "source": "INSTORE",
                        "userId": 564955302,
                        "accountId": "",
                        "conflictingProfileList": [],
                        "autoUpdateTime": "2025-10-07T10:15:10Z",
                        "identifiersAll": [
                            {
                                "type": "mobile",
                                "value": "919777785206"
                            },
                            {
                                "type": "externalId",
                                "value": "434548"
                            },
                            {
                                "type": "email",
                                "value": "testgrp4@gmail.com"
                            }
                        ]
                    }
                ],
                "loyaltyInfo": {
                    "loyaltyType": "loyalty",
                    "attributionV2": {
                        "createDate": "2025-02-18T05:14:32Z",
                        "createdBy": {
                            "id": 75155295,
                            "code": "sant.p_123",
                            "name": "sant.p_123",
                            "type": "TILL",
                            "referenceId": -1,
                            "default": false
                        },
                        "modifiedBy": {
                            "id": 75155295,
                            "code": "sant.p_123",
                            "name": "sant.p_123",
                            "type": "TILL",
                            "referenceId": -1,
                            "default": false
                        },
                        "modifiedDate": "2025-06-02T11:26:52Z"
                    },
                    "lifetimePurchases": 50000.000
                },
                "segments": {},
                "extendedFields": {}
            },
            "transferTo": {
                "id": 564955411,
                "profiles": [
                    {
                        "firstName": "testgrp5",
                        "lastName": "testgrpv2",
                        "attribution": {
                            "createDate": "2025-02-18T05:53:34Z",
                            "createdBy": {
                                "id": 75155295,
                                "code": "sant.p_123",
                                "name": "sant.p_123",
                                "type": "TILL",
                                "referenceId": -1,
                                "default": false
                            },
                            "modifiedBy": {
                                "id": 75155295,
                                "code": "sant.p_123",
                                "name": "sant.p_123",
                                "type": "TILL",
                                "referenceId": -1,
                                "default": false
                            },
                            "modifiedDate": "2025-06-02T11:27:06Z"
                        },
                        "fields": {},
                        "allFields": {},
                        "identifiers": [
                            {
                                "type": "mobile",
                                "value": "919777785207"
                            },
                            {
                                "type": "email",
                                "value": "testgrp5@gmail.com"
                            },
                            {
                                "type": "externalId",
                                "value": "434549"
                            }
                        ],
                        "commChannels": [
                            {
                                "type": "mobile",
                                "value": "919777785207",
                                "primary": true,
                                "verified": false,
                                "meta": {
                                    "residence": false,
                                    "office": false
                                },
                                "attributes": {}
                            },
                            {
                                "type": "email",
                                "value": "testgrp5@gmail.com",
                                "primary": true,
                                "verified": false,
                                "meta": {
                                    "residence": false,
                                    "office": false
                                },
                                "attributes": {}
                            }
                        ],
                        "source": "INSTORE",
                        "userId": 564955411,
                        "accountId": "",
                        "conflictingProfileList": [],
                        "autoUpdateTime": "2025-10-07T10:15:10Z",
                        "identifiersAll": [
                            {
                                "type": "mobile",
                                "value": "919777785207"
                            },
                            {
                                "type": "email",
                                "value": "testgrp5@gmail.com"
                            },
                            {
                                "type": "externalId",
                                "value": "434549"
                            }
                        ]
                    }
                ],
                "loyaltyInfo": {
                    "loyaltyType": "loyalty",
                    "attributionV2": {
                        "createDate": "2025-02-18T05:53:34Z",
                        "createdBy": {
                            "id": 75155295,
                            "code": "sant.p_123",
                            "name": "sant.p_123",
                            "type": "TILL",
                            "referenceId": -1,
                            "default": false
                        },
                        "modifiedBy": {
                            "id": 75155295,
                            "code": "sant.p_123",
                            "name": "sant.p_123",
                            "type": "TILL",
                            "referenceId": -1,
                            "default": false
                        },
                        "modifiedDate": "2025-06-02T11:27:06Z"
                    },
                    "lifetimePurchases": 50000.000
                },
                "segments": {},
                "extendedFields": {}
            },
            "transferrable": true
        }
    ],
    "warnings": [],
    "errors": []
}
```

# Response Parameters

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
        Array
      </td>

      <td>
        Contains details of the points transfer request.
      </td>
    </tr>

    <tr>
      <td>
        pointsTobeTransferred
      </td>

      <td>
        Float
      </td>

      <td>
        Number of points to be transferred.
      </td>
    </tr>

    <tr>
      <td>
        transferFrom
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the customer transferring the points.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the customer transferring points.
      </td>
    </tr>

    <tr>
      <td>
        * profiles
      </td>

      <td>
        Array
      </td>

      <td>
        List of profile details of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        -- firstName
      </td>

      <td>
        String
      </td>

      <td>
        First name of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        -- lastName
      </td>

      <td>
        String
      </td>

      <td>
        Last name of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        -- identifiers
      </td>

      <td>
        Array
      </td>

      <td>
        List of identifiers for the transferring customer (e.g., email, mobile, external ID).
      </td>
    </tr>

    <tr>
      <td>
        -- commChannels
      </td>

      <td>
        Array
      </td>

      <td>
        List of communication channels (email, mobile) for the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyInfo
      </td>

      <td>
        Object
      </td>

      <td>
        Loyalty details of the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyType
      </td>

      <td>
        String
      </td>

      <td>
        Type of loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        * lifetimePurchases
      </td>

      <td>
        Float
      </td>

      <td>
        Total purchases made by the transferring customer.
      </td>
    </tr>

    <tr>
      <td>
        transferTo
      </td>

      <td>
        Object
      </td>

      <td>
        Details of the customer receiving the points.
      </td>
    </tr>

    <tr>
      <td>
        * id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique identifier of the customer receiving points.
      </td>
    </tr>

    <tr>
      <td>
        * profiles
      </td>

      <td>
        Array
      </td>

      <td>
        List of profile details of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        -- firstName
      </td>

      <td>
        String
      </td>

      <td>
        First name of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        -- lastName
      </td>

      <td>
        String
      </td>

      <td>
        Last name of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        -- identifiers
      </td>

      <td>
        Array
      </td>

      <td>
        List of identifiers for the receiving customer (e.g., email, mobile, external ID).
      </td>
    </tr>

    <tr>
      <td>
        -- commChannels
      </td>

      <td>
        Array
      </td>

      <td>
        List of communication channels (email, mobile) for the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        * loyaltyInfo (under transferTo)
      </td>

      <td>
        Object
      </td>

      <td>
        Loyalty details of the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        -- loyaltyType
      </td>

      <td>
        String
      </td>

      <td>
        Type of loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        -- lifetimePurchases
      </td>

      <td>
        Float
      </td>

      <td>
        Total purchases made by the receiving customer.
      </td>
    </tr>

    <tr>
      <td>
        transferrable
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the points transfer is possible.
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
        List of warnings, if any.
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
        List of errors, if any.
      </td>
    </tr>
  </tbody>
</Table>

# API specific error codes

| Error code | Description                                                        | Reason                                                                   |
| :--------- | :----------------------------------------------------------------- | :----------------------------------------------------------------------- |
| 885        | Invalid program id passed                                          | The program id provided is invalid or unsupported.                       |
| 8013       | Invalid identifier passed                                          | The costumer id was invalid or unsupported                               |
| 8015       | Costumer not found for the given identifiers                       | Customer id provided is invalid or not found.                            |
| 3316       | Group redemption action executed for non-group redemption payload. | Group redemption action is unsupported for non-group redemption payload. |

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
    "/points/isTransferable": {
      "post": {
        "summary": "Check if Points Transferable",
        "description": "Checks if specific points of a customer can be transferred to another customer.",
        "operationId": "-customer-points-transferrable",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "pointsTobeTransferred"
                ],
                "properties": {
                  "programId": {
                    "type": "integer",
                    "description": "Program ID from which points has to be transferred. Applicable for multi-program orgs.",
                    "format": "int32"
                  },
                  "groupProgramTransfer": {
                    "type": "boolean",
                    "description": "Pass `true` to check group points transfer details.",
                    "default": false
                  },
                  "notes": {
                    "type": "string",
                    "description": "Information to store for the current transfer activity."
                  },
                  "pointsTobeTransferred": {
                    "type": "integer",
                    "description": "Number of points to be transferred.",
                    "format": "int32"
                  },
                  "fromCustomerIdentifier": {
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Type of the identifier used. Values: MOBILE, EMAIL, EXTERNALID, CARDNUMBER, CARDEXTERNALID, ID."
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
                    "description": "Details of source customer - customer that wants to transfer points."
                  },
                  "toCustomerIdentifier": {
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Type of the identifier used. Values: MOBILE, EMAIL, EXTERNALID, CARDNUMBER, CARDEXTERNALID, ID."
                      },
                      "value": {
                        "type": "string",
                        "description": "Value of the specified identifierType."
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Customer or group to which the points needs to be transferred."
                  },
                  "issueOtp": {
                    "type": "boolean",
                    "description": "When set to `true`- It sends an OTP to the sender (fromCustomer) when points are transferable. This OTP can be used to authenticate the transfer. When set to `false`: No OTP will be generated or sent. The points transfer can still proceed without OTP verification. OTP is not mandatory for points transfer. It can be used for security purposes.",
                    "default": false
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
                      "data": [
                        {
                          "pointsTobeTransferred": 1,
                          "transferFrom": {
                            "id": 564955302,
                            "profiles": [
                              {
                                "firstName": "testgrp4",
                                "lastName": "testgrpv2",
                                "attribution": {
                                  "createDate": "2025-02-18T05:14:32Z",
                                  "createdBy": {
                                    "id": 75155295,
                                    "code": "sant.p_123",
                                    "name": "sant.p_123",
                                    "type": "TILL",
                                    "referenceId": -1,
                                    "default": false
                                  },
                                  "modifiedBy": {
                                    "id": 75155295,
                                    "code": "sant.p_123",
                                    "name": "sant.p_123",
                                    "type": "TILL",
                                    "referenceId": -1,
                                    "default": false
                                  },
                                  "modifiedDate": "2025-06-02T11:26:52Z"
                                },
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "mobile",
                                    "value": "919777785206"
                                  },
                                  {
                                    "type": "externalId",
                                    "value": "434548"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp4@gmail.com"
                                  }
                                ],
                                "commChannels": [
                                  {
                                    "type": "mobile",
                                    "value": "919777785206",
                                    "primary": true,
                                    "verified": false,
                                    "meta": {
                                      "residence": false,
                                      "office": false
                                    },
                                    "attributes": {}
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp4@gmail.com",
                                    "primary": true,
                                    "verified": false,
                                    "meta": {
                                      "residence": false,
                                      "office": false
                                    },
                                    "attributes": {}
                                  }
                                ],
                                "source": "INSTORE",
                                "userId": 564955302,
                                "accountId": "",
                                "conflictingProfileList": [],
                                "autoUpdateTime": "2025-10-07T10:15:10Z",
                                "identifiersAll": [
                                  {
                                    "type": "mobile",
                                    "value": "919777785206"
                                  },
                                  {
                                    "type": "externalId",
                                    "value": "434548"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp4@gmail.com"
                                  }
                                ]
                              }
                            ],
                            "loyaltyInfo": {
                              "loyaltyType": "loyalty",
                              "attributionV2": {
                                "createDate": "2025-02-18T05:14:32Z",
                                "createdBy": {
                                  "id": 75155295,
                                  "code": "sant.p_123",
                                  "name": "sant.p_123",
                                  "type": "TILL",
                                  "referenceId": -1,
                                  "default": false
                                },
                                "modifiedBy": {
                                  "id": 75155295,
                                  "code": "sant.p_123",
                                  "name": "sant.p_123",
                                  "type": "TILL",
                                  "referenceId": -1,
                                  "default": false
                                },
                                "modifiedDate": "2025-06-02T11:26:52Z"
                              },
                              "lifetimePurchases": 50000
                            },
                            "segments": {},
                            "extendedFields": {}
                          },
                          "transferTo": {
                            "id": 564955411,
                            "profiles": [
                              {
                                "firstName": "testgrp5",
                                "lastName": "testgrpv2",
                                "attribution": {
                                  "createDate": "2025-02-18T05:53:34Z",
                                  "createdBy": {
                                    "id": 75155295,
                                    "code": "sant.p_123",
                                    "name": "sant.p_123",
                                    "type": "TILL",
                                    "referenceId": -1,
                                    "default": false
                                  },
                                  "modifiedBy": {
                                    "id": 75155295,
                                    "code": "sant.p_123",
                                    "name": "sant.p_123",
                                    "type": "TILL",
                                    "referenceId": -1,
                                    "default": false
                                  },
                                  "modifiedDate": "2025-06-02T11:27:06Z"
                                },
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "mobile",
                                    "value": "919777785207"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp5@gmail.com"
                                  },
                                  {
                                    "type": "externalId",
                                    "value": "434549"
                                  }
                                ],
                                "commChannels": [
                                  {
                                    "type": "mobile",
                                    "value": "919777785207",
                                    "primary": true,
                                    "verified": false,
                                    "meta": {
                                      "residence": false,
                                      "office": false
                                    },
                                    "attributes": {}
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp5@gmail.com",
                                    "primary": true,
                                    "verified": false,
                                    "meta": {
                                      "residence": false,
                                      "office": false
                                    },
                                    "attributes": {}
                                  }
                                ],
                                "source": "INSTORE",
                                "userId": 564955411,
                                "accountId": "",
                                "conflictingProfileList": [],
                                "autoUpdateTime": "2025-10-07T10:15:10Z",
                                "identifiersAll": [
                                  {
                                    "type": "mobile",
                                    "value": "919777785207"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp5@gmail.com"
                                  },
                                  {
                                    "type": "externalId",
                                    "value": "434549"
                                  }
                                ]
                              }
                            ],
                            "loyaltyInfo": {
                              "loyaltyType": "loyalty",
                              "attributionV2": {
                                "createDate": "2025-02-18T05:53:34Z",
                                "createdBy": {
                                  "id": 75155295,
                                  "code": "sant.p_123",
                                  "name": "sant.p_123",
                                  "type": "TILL",
                                  "referenceId": -1,
                                  "default": false
                                },
                                "modifiedBy": {
                                  "id": 75155295,
                                  "code": "sant.p_123",
                                  "name": "sant.p_123",
                                  "type": "TILL",
                                  "referenceId": -1,
                                  "default": false
                                },
                                "modifiedDate": "2025-06-02T11:27:06Z"
                              },
                              "lifetimePurchases": 50000
                            },
                            "segments": {},
                            "extendedFields": {}
                          },
                          "transferrable": true
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
                          "pointsTobeTransferred": {
                            "type": "integer",
                            "example": 20,
                            "default": 0
                          },
                          "transferFrom": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 564955097,
                                "default": 0
                              },
                              "profiles": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "firstName": {
                                      "type": "string",
                                      "example": "testgrp1"
                                    },
                                    "lastName": {
                                      "type": "string",
                                      "example": "testgrpv2"
                                    },
                                    "attribution": {
                                      "type": "object",
                                      "properties": {
                                        "createDate": {
                                          "type": "string",
                                          "example": "2025-02-18T03:54:14Z"
                                        },
                                        "createdBy": {
                                          "type": "object",
                                          "properties": {
                                            "id": {
                                              "type": "integer",
                                              "example": 75155295,
                                              "default": 0
                                            },
                                            "code": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "name": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "type": {
                                              "type": "string",
                                              "example": "TILL"
                                            },
                                            "referenceId": {
                                              "type": "integer",
                                              "example": -1,
                                              "default": 0
                                            },
                                            "default": {
                                              "type": "boolean",
                                              "example": false,
                                              "default": true
                                            }
                                          }
                                        },
                                        "modifiedBy": {
                                          "type": "object",
                                          "properties": {
                                            "id": {
                                              "type": "integer",
                                              "example": 75155295,
                                              "default": 0
                                            },
                                            "code": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "name": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "type": {
                                              "type": "string",
                                              "example": "TILL"
                                            },
                                            "referenceId": {
                                              "type": "integer",
                                              "example": -1,
                                              "default": 0
                                            },
                                            "default": {
                                              "type": "boolean",
                                              "example": false,
                                              "default": true
                                            }
                                          }
                                        },
                                        "modifiedDate": {
                                          "type": "string",
                                          "example": "2025-02-28T03:59:49Z"
                                        }
                                      }
                                    },
                                    "fields": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "allFields": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "identifiers": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "email"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "tom.sawyer@capillarytech.com"
                                          }
                                        }
                                      }
                                    },
                                    "commChannels": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "email"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "tom.sawyer@capillarytech.com"
                                          },
                                          "primary": {
                                            "type": "boolean",
                                            "example": true,
                                            "default": true
                                          },
                                          "verified": {
                                            "type": "boolean",
                                            "example": false,
                                            "default": true
                                          },
                                          "meta": {
                                            "type": "object",
                                            "properties": {
                                              "residence": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              },
                                              "office": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              }
                                            }
                                          },
                                          "attributes": {
                                            "type": "object",
                                            "properties": {}
                                          }
                                        }
                                      }
                                    },
                                    "source": {
                                      "type": "string",
                                      "example": "INSTORE"
                                    },
                                    "userId": {
                                      "type": "integer",
                                      "example": 564955097,
                                      "default": 0
                                    },
                                    "accountId": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "conflictingProfileList": {
                                      "type": "array"
                                    },
                                    "autoUpdateTime": {
                                      "type": "string",
                                      "example": "2025-03-25T10:04:40Z"
                                    },
                                    "identifiersAll": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "email"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "tom.sawyer@capillarytech.com"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "loyaltyInfo": {
                                "type": "object",
                                "properties": {
                                  "loyaltyType": {
                                    "type": "string",
                                    "example": "loyalty"
                                  },
                                  "attributionV2": {
                                    "type": "object",
                                    "properties": {
                                      "createDate": {
                                        "type": "string",
                                        "example": "2025-02-18T03:54:14Z"
                                      },
                                      "createdBy": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 75155295,
                                            "default": 0
                                          },
                                          "code": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "TILL"
                                          },
                                          "referenceId": {
                                            "type": "integer",
                                            "example": -1,
                                            "default": 0
                                          },
                                          "default": {
                                            "type": "boolean",
                                            "example": false,
                                            "default": true
                                          }
                                        }
                                      },
                                      "modifiedBy": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 75155295,
                                            "default": 0
                                          },
                                          "code": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "TILL"
                                          },
                                          "referenceId": {
                                            "type": "integer",
                                            "example": -1,
                                            "default": 0
                                          },
                                          "default": {
                                            "type": "boolean",
                                            "example": false,
                                            "default": true
                                          }
                                        }
                                      },
                                      "modifiedDate": {
                                        "type": "string",
                                        "example": "2025-02-28T03:59:49Z"
                                      }
                                    }
                                  },
                                  "lifetimePurchases": {
                                    "type": "integer",
                                    "example": 12000,
                                    "default": 0
                                  }
                                }
                              },
                              "segments": {
                                "type": "object",
                                "properties": {}
                              },
                              "extendedFields": {
                                "type": "object",
                                "properties": {}
                              }
                            }
                          },
                          "transferTo": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 564955098,
                                "default": 0
                              },
                              "profiles": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "firstName": {
                                      "type": "string",
                                      "example": "testgrp2"
                                    },
                                    "lastName": {
                                      "type": "string",
                                      "example": "testgrpv2"
                                    },
                                    "attribution": {
                                      "type": "object",
                                      "properties": {
                                        "createDate": {
                                          "type": "string",
                                          "example": "2025-02-18T03:57:21Z"
                                        },
                                        "createdBy": {
                                          "type": "object",
                                          "properties": {
                                            "id": {
                                              "type": "integer",
                                              "example": 75155295,
                                              "default": 0
                                            },
                                            "code": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "name": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "type": {
                                              "type": "string",
                                              "example": "TILL"
                                            },
                                            "referenceId": {
                                              "type": "integer",
                                              "example": -1,
                                              "default": 0
                                            },
                                            "default": {
                                              "type": "boolean",
                                              "example": false,
                                              "default": true
                                            }
                                          }
                                        },
                                        "modifiedBy": {
                                          "type": "object",
                                          "properties": {
                                            "id": {
                                              "type": "integer",
                                              "example": 75155295,
                                              "default": 0
                                            },
                                            "code": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "name": {
                                              "type": "string",
                                              "example": "sant.p_123"
                                            },
                                            "type": {
                                              "type": "string",
                                              "example": "TILL"
                                            },
                                            "referenceId": {
                                              "type": "integer",
                                              "example": -1,
                                              "default": 0
                                            },
                                            "default": {
                                              "type": "boolean",
                                              "example": false,
                                              "default": true
                                            }
                                          }
                                        },
                                        "modifiedDate": {
                                          "type": "string",
                                          "example": "2025-03-20T12:03:55Z"
                                        }
                                      }
                                    },
                                    "fields": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "allFields": {
                                      "type": "object",
                                      "properties": {}
                                    },
                                    "identifiers": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "email"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "tom.sawyer@capillarytech.com"
                                          }
                                        }
                                      }
                                    },
                                    "commChannels": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "email"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "tom.sawyer@capillarytech.com"
                                          },
                                          "primary": {
                                            "type": "boolean",
                                            "example": true,
                                            "default": true
                                          },
                                          "verified": {
                                            "type": "boolean",
                                            "example": false,
                                            "default": true
                                          },
                                          "meta": {
                                            "type": "object",
                                            "properties": {
                                              "residence": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              },
                                              "office": {
                                                "type": "boolean",
                                                "example": false,
                                                "default": true
                                              }
                                            }
                                          },
                                          "attributes": {
                                            "type": "object",
                                            "properties": {}
                                          }
                                        }
                                      }
                                    },
                                    "source": {
                                      "type": "string",
                                      "example": "INSTORE"
                                    },
                                    "userId": {
                                      "type": "integer",
                                      "example": 564955098,
                                      "default": 0
                                    },
                                    "accountId": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "conflictingProfileList": {
                                      "type": "array"
                                    },
                                    "autoUpdateTime": {
                                      "type": "string",
                                      "example": "2025-03-25T10:04:40Z"
                                    },
                                    "identifiersAll": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "example": "email"
                                          },
                                          "value": {
                                            "type": "string",
                                            "example": "tom.sawyer@capillarytech.com"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "loyaltyInfo": {
                                "type": "object",
                                "properties": {
                                  "loyaltyType": {
                                    "type": "string",
                                    "example": "loyalty"
                                  },
                                  "attributionV2": {
                                    "type": "object",
                                    "properties": {
                                      "createDate": {
                                        "type": "string",
                                        "example": "2025-02-18T03:57:21Z"
                                      },
                                      "createdBy": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 75155295,
                                            "default": 0
                                          },
                                          "code": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "TILL"
                                          },
                                          "referenceId": {
                                            "type": "integer",
                                            "example": -1,
                                            "default": 0
                                          },
                                          "default": {
                                            "type": "boolean",
                                            "example": false,
                                            "default": true
                                          }
                                        }
                                      },
                                      "modifiedBy": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 75155295,
                                            "default": 0
                                          },
                                          "code": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "sant.p_123"
                                          },
                                          "type": {
                                            "type": "string",
                                            "example": "TILL"
                                          },
                                          "referenceId": {
                                            "type": "integer",
                                            "example": -1,
                                            "default": 0
                                          },
                                          "default": {
                                            "type": "boolean",
                                            "example": false,
                                            "default": true
                                          }
                                        }
                                      },
                                      "modifiedDate": {
                                        "type": "string",
                                        "example": "2025-03-20T12:03:55Z"
                                      }
                                    }
                                  },
                                  "lifetimePurchases": {
                                    "type": "integer",
                                    "example": 1000,
                                    "default": 0
                                  }
                                }
                              },
                              "segments": {
                                "type": "object",
                                "properties": {}
                              },
                              "extendedFields": {
                                "type": "object",
                                "properties": {}
                              }
                            }
                          },
                          "transferrable": {
                            "type": "boolean",
                            "example": true,
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/points/isTransferrable' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Basic bWFk22YQ==' \\\n--header 'Cookie: _cfuvid=IEacVBB7xCaQXaYZNjqhVgGFNNBE1wcNyx6O5vnh4cA-1759831634361-0.0.1.1-604800000' \\\n--data '{\n    \"pointsTobeTransferred\":1, \n    \"groupProgramTransfer\": false,\n    \n    \"programId\": 973,\n    \"fromCustomerIdentifier\": {\n        \"type\": \"MOBILE\",\n        \"value\": \"9777785206\" \n    },\n    \"toCustomerIdentifier\": {\n        \"type\": \"MOBILE\",\n        \"value\": \"9777785207\"\n    },\n    \"issueOtp\":false\n}'",
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