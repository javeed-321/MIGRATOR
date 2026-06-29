> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update redeem points

This API allows you to add or update metadata for a point redemption. The following fields can be edited:

* bill\_id
* bill\_number
* purpose
* custom fields

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Example request

```curl Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/v2/points/updateRedemption' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic bWFkaHzI3MjU2YQ==' \
--header 'Cookie: CC=hxVc6LZCMF1eeNlIK-5ArYCe6cvhui9bPBrNvPuITC4sjNGnu38i6U7XPncmwdOS; CT=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6WyIxNDgzNTYiXSwib3JnSUQiOjUwMzY2LCJleHAiOjE3MjIwNTc1NzEsImlhdCI6MTcyMTk3MTE3MiwiaXNzIjoiY2FwaWxsYXJ5dGVjaC5jb20iLCJhdWQiOiJjYXBpbGxhcnksaW50b3VjaCxhcnlhLHJlb24sYXBwcyIsInNvdXJjZSI6IldFQkFQUCJ9.QOKPoNaoFROpdU6hqQHtJnV1HmlYPDu8QRZHUsZxiX0; OID=50366; _cfuvid=v4REFESfdMALppPg_TcpQuUBTBwlGF7_qbRvsCR1zTM-1761219794658-0.0.1.1-604800000' \
--data '{
    "redemptionId": "NZVAt9", 
    
    "billNumber": "billnumber333",
    "billId": 12345678901, 
    "purpose": "testing123",
    "entity": {
        "type": "CUSTOMER",
        "identifierType": "mobile",
        "identifierValue": "919777785302"
    }
}'
```

# API specifications

| Feature                  | Availability  |
| :----------------------- | :------------ |
| Authentication supported | Basic         |
| Pagination               | Not supported |
| Batch support            | Not supported |
| Access Group             | Yes           |

# Request parameters

```json
{
    "redemptionId": "Fnpztw",
    "billNumber": "txn-79",
    "purpose": "Update redemption details",
    "entity": {
        "type": "CUSTOMER",
        "identifierType": "mobile",
        "identifierValue": "919731013853"
    },
    "customFields": {
        "card_number": "123456"
    }
}
```

# Request body parameters

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
        redemptionId*
      </td>

      <td>
        String
      </td>

      <td>
        A unique identifier for the redemption process. The `redemptionId` is generated when redeeming points using the [redeem points API](https://docs.capillarytech.com/reference/redeem-points#/).
      </td>
    </tr>

    <tr>
      <td>
        billNumber
      </td>

      <td>
        String
      </td>

      <td>
        A string identifier for the bill.
      </td>
    </tr>

    <tr>
      <td>
        billId
      </td>

      <td>
        Integer
      </td>

      <td>
        A numerical identifier for the bill. The maximum number of supported characters is 19. Must be a positive whole number without decimals or special characters.   
        For example:  
        Valid billId: 1234567890123456789  
        Invalid billId: "12345.67", "ABC123", "-12345"
      </td>
    </tr>

    <tr>
      <td>
        purpose
      </td>

      <td>
        String
      </td>

      <td>
        The purpose or reason for the redemption update. The maximum character limit is 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        entity
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing details about the entity.
      </td>
    </tr>

    <tr>
      <td>
        * type*
      </td>

      <td>
        Enum
      </td>

      <td>
        The type of entity involved in the transaction. Supported values: `CUSTOMER`, `USERGROUP2`, `FLEET`
      </td>
    </tr>

    <tr>
      <td>
        * identifierType*
      </td>

      <td>
        Enum
      </td>

      <td>
        The type of identifier used for the entity.
      </td>
    </tr>

    <tr>
      <td>
        * identifierValue*
      </td>

      <td>
        String
      </td>

      <td>
        The value of the identifier for the entity.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of custom fields for the point redemption.
      </td>
    </tr>

    <tr>
      <td>
        * key `<value>`
      </td>

      <td>
        String
      </td>

      <td>
        Key-value pairs of the custom field and their respective values.  
        **Notes:**

        * Before using custom fields, ensure they are created in the organisation. For more information on creating custom fields, refer to the section on [creating a new custom field](https://docs.capillarytech.com/docs/data-fields#create-new-custom-fields).
        * You can add or edit custom fields only if you include custom field metadata during the points redemption event. Include the custom fields when redeeming points using the [Redeem points API](https://docs.capillarytech.com/reference/redeem-points#/).
      </td>
    </tr>
  </tbody>
</Table>

Note: It is mandatory to pass either redemptionId or externalReferenceNumber.

# Response body

```json Sample response
{
    "id": 26445488,
    "programId": 973,
    "pointsRedeemed": 1.0,
    "billId": 12345678901,
    "billNumber": "billnumber333",
    "validationCode": "NS3U05",
    "notes": "Redeemed to transfer points to the friend",
    "redemptionTime": 1749721256000,
    "pointsRedemptionTime": 1749701456000,
    "tillId": 75155295,
    "tillName": "",
    "pointDeductionList": [],
    "redemptionId": "NZVAt9",
    "customerId": 564670755,
    "redemptionPurpose": "testing123",
    "redemptionDate": "2025-06-12T09:40:56Z",
    "warnings": []
}
```
```json
{
    "id": 26503632,
    "programId": 973,
    "pointsRedeemed": 101.0,
    "billId": -1,
    "billNumber": "txn-79",
    "validationCode": "NS3U05",
    "notes": "Redeemed to transfer points to the friend",
    "redemptionTime": 1750951708000,
    "pointsRedemptionTime": 1750931908000,
    "tillId": 75152721,
    "tillName": "",
    "pointDeductionList": [],
    "redemptionId": "Fnpztw",
    "customFields": [
        {
            "name": "card_number",
            "value": "123456"
        }
    ],
    "customerId": 564332013,
    "redemptionPurpose": "testUpdate",
    "redemptionDate": "2025-06-26T15:28:28Z",
    "warnings": []
}
```

# Response body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Key
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
        id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique ID of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        pointsRedeemed
      </td>

      <td>
        String
      </td>

      <td>
        Number of points redeemed during the redemption.
      </td>
    </tr>

    <tr>
      <td>
        billId
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID generated after a transaction. The maximum number of supported characters is 19. It must be a positive whole number, without decimals or special characters.  
        For example:  
        Valid billId: 1234567890123456789  
        Invalid billId: "12345.67", "ABC123", "-12345".
      </td>
    </tr>

    <tr>
      <td>
        billNumber
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID associated with the transaction. This is provided when adding a transaction.
      </td>
    </tr>

    <tr>
      <td>
        validationCode
      </td>

      <td>
        String
      </td>

      <td>
        Unique code to validate the redemption.
      </td>
    </tr>

    <tr>
      <td>
        notes
      </td>

      <td>
        String
      </td>

      <td>
        Notes related to the redemption update, if any.
      </td>
    </tr>

    <tr>
      <td>
        redemptionTime
      </td>

      <td>
        Date
      </td>

      <td>
        Timestamp when the redemption event was initiated or performed
      </td>
    </tr>

    <tr>
      <td>
        pointsRedemptionTime
      </td>

      <td>
        Date
      </td>

      <td>
        Timestamp when the points were deducted from the warehouse or backend system.
      </td>
    </tr>

    <tr>
      <td>
        tillId
      </td>

      <td>
        Integer
      </td>

      <td>
        Till ID from where the redemption occurred.
      </td>
    </tr>

    <tr>
      <td>
        tillName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the till where the redemption occurred.
      </td>
    </tr>

    <tr>
      <td>
        pointDeductionList
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of the point deduction.
      </td>
    </tr>

    <tr>
      <td>
        redemptionId
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID of the redemption event.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing details of custom fields associated with the points redemption.
      </td>
    </tr>

    <tr>
      <td>
        customFields.name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        customFields.value
      </td>

      <td>
        String
      </td>

      <td>
        Value of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        customerId
      </td>

      <td>
        Integer
      </td>

      <td>
        Unique customer identifier whose points were deducted.
      </td>
    </tr>

    <tr>
      <td>
        redemptionPurpose
      </td>

      <td>
        String
      </td>

      <td>
        Purpose for updating the points redemption details.
      </td>
    </tr>

    <tr>
      <td>
        redemptionDate
      </td>

      <td>
        Date
      </td>

      <td>
        Date when the redemption occurred in ISO 8601 format.
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
        Object containing warnings that occured, if any.
      </td>
    </tr>
  </tbody>
</Table>

# API-specific error codes

| Error Code | Description                                                      | Reason / When It Occurs                                                                                                                                      |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **748**    | No metadata update requested.                                    | The request did not include any updatable fields (e.g., no new bill number, bill ID, or purpose provided).                                                   |
| **749**    | Exactly one redemption identifier needed to identify redemption. | You must pass **only one** valid identifier (`redemptionId`, `billNumber`, or another allowed ID). Passing none or multiple identifiers triggers this error. |
| **750**    | Redemption update failed: {0}.                                   | The update action failed internally, possibly due to invalid status transitions or data integrity issues. `{0}` provides specific details.                   |
| **1219**   | Entity details not set/invalid.                                  | The `entity` object is missing or its fields (`type`, `identifierType`, `identifierValue`) are incomplete or invalid.                                        |
| **1212**   | Entity type passed is not valid.                                 | The `entity.type` value (e.g., `CUSTOMER`, `groupUser`) is incorrect or not supported for your configuration.                                                |
| **8015**   | Invalid or malformed identifier provided in request body.        | The `identifierValue` or `redemptionId` is missing, incorrectly formatted, or does not exist in the system.                                                  |

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
    "/points/updateRedemption": {
      "put": {
        "summary": "Update redeem points",
        "description": "",
        "operationId": "update-redeem-points",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "redemptionId",
                  "externalReferenceNumber"
                ],
                "properties": {
                  "redemptionId": {
                    "type": "string",
                    "description": "A unique identifier for the redemption process."
                  },
                  "externalReferenceNumber": {
                    "type": "string",
                    "description": "Unique reference number associated with the bill."
                  },
                  "billNumber": {
                    "type": "string",
                    "description": "A string identifier for the bill."
                  },
                  "billId": {
                    "type": "integer",
                    "description": "A numerical identifier for the bill. The maximum number of supported characters is 19.",
                    "format": "int32"
                  },
                  "purpose": {
                    "type": "string",
                    "description": "The purpose or reason for the redemption update."
                  },
                  "type": {
                    "type": "string",
                    "description": "The type of entity involved in the transaction.",
                    "enum": [
                      "CUSTOMER",
                      "USER GROUP"
                    ]
                  },
                  "identifierValue": {
                    "type": "string",
                    "description": "The value of the identifier for the entity."
                  },
                  "customFields": {
                    "type": "object",
                    "description": "Object containing details of custom fields for the point redemption.",
                    "properties": {}
                  },
                  "key": {
                    "type": "string",
                    "description": "Key-value pairs of the custom field and its respective value."
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
                    "value": "{\n    \"id\": 994485,\n    \"programId\": 2649,\n    \"pointsRedeemed\": 1.0,\n    \"billId\": 2152315011,\n    \"billNumber\": \"txn-75\",\n    \"validationCode\": \"\",\n    \"notes\": \"Sample notes\",\n    \"redemptionTime\": 1749414724000,\n    \"pointsRedemptionTime\": 1749414725000,\n    \"tillId\": 50671937,\n    \"tillName\": \"\",\n    \"pointDeductionList\": [],\n    \"redemptionId\": \"X3k8GI\",\n    \"customFields\": [\n        {\n            \"name\": \"gender\",\n            \"value\": \"female\"\n        },\n        {\n            \"name\": \"age\",\n            \"value\": \"25\"\n        }\n    ],\n    \"customerId\": 387952506,\n    \"redemptionPurpose\": \"Redeemed for purchase\",\n    \"redemptionDate\": \"2025-06-09T02:02:04+05:30\",\n    \"warnings\": []\n}"
                  },
                  "Sample response": {
                    "summary": "Sample response",
                    "value": {
                      "id": 26445488,
                      "programId": 973,
                      "pointsRedeemed": 1,
                      "billId": 12345678901,
                      "billNumber": "billnumber333",
                      "validationCode": "NS3U05",
                      "notes": "Redeemed to transfer points to the friend",
                      "redemptionTime": 1749721256000,
                      "pointsRedemptionTime": 1749701456000,
                      "tillId": 75155295,
                      "tillName": "",
                      "pointDeductionList": [],
                      "redemptionId": "NZVAt9",
                      "customerId": 564670755,
                      "redemptionPurpose": "testing123",
                      "redemptionDate": "2025-06-12T09:40:56Z",
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "example": 994485,
                      "default": 0
                    },
                    "programId": {
                      "type": "integer",
                      "example": 2649,
                      "default": 0
                    },
                    "pointsRedeemed": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "billId": {
                      "type": "integer",
                      "example": 2152315011,
                      "default": 0
                    },
                    "billNumber": {
                      "type": "string",
                      "example": "txn-75"
                    },
                    "validationCode": {
                      "type": "string",
                      "example": ""
                    },
                    "notes": {
                      "type": "string",
                      "example": "Sample notes"
                    },
                    "redemptionTime": {
                      "type": "integer",
                      "example": 1749414724000,
                      "default": 0
                    },
                    "pointsRedemptionTime": {
                      "type": "integer",
                      "example": 1749414725000,
                      "default": 0
                    },
                    "tillId": {
                      "type": "integer",
                      "example": 50671937,
                      "default": 0
                    },
                    "tillName": {
                      "type": "string",
                      "example": ""
                    },
                    "pointDeductionList": {
                      "type": "array"
                    },
                    "redemptionId": {
                      "type": "string",
                      "example": "X3k8GI"
                    },
                    "customFields": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "example": "gender"
                          },
                          "value": {
                            "type": "string",
                            "example": "female"
                          }
                        }
                      }
                    },
                    "customerId": {
                      "type": "integer",
                      "example": 387952506,
                      "default": 0
                    },
                    "redemptionPurpose": {
                      "type": "string",
                      "example": "Redeemed for purchase"
                    },
                    "redemptionDate": {
                      "type": "string",
                      "example": "2025-06-09T02:02:04+05:30"
                    },
                    "warnings": {
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
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/v2/points/updateRedemption' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Basic bWFkaI3MjU2YQ==' \\\n--header 'Cookie: CC=hxVc6LZCMF1eeNlIK-5ArYCe6cvhui9bPBrNvPuITC4sjNGnu38i6U7XPncmwdOS; CT=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6WyIxNDgzNTYiXSwib3JnSUQiOjUwMzY2LCJleHAiOjE3MjIwNTc1NzEsImlhdCI6MTcyMTk3MTE3MiwiaXNzIjoiY2FwaWxsYXJ5dGVjaC5jb20iLCJhdWQiOiJjYXBpbGxhcnksaW50b3VjaCxhcnlhLHJlb24sYXBwcyIsInNvdXJjZSI6IldFQkFQUCJ9.QOKPoNaoFROpdU6hqQHtJnV1HmlYPDu8QRZHUsZxiX0; OID=50366; _cfuvid=v4REFESfdMALppPg_TcpQuUBTBwlGF7_qbRvsCR1zTM-1761219794658-0.0.1.1-604800000' \\\n--data '{\n    \"redemptionId\": \"NZVAt9\", \n    \n    \"billNumber\": \"billnumber333\",\n    \"billId\": 12345678901, \n    \"purpose\": \"testing123\",\n    \"entity\": {\n        \"type\": \"CUSTOMER\",\n        \"identifierType\": \"mobile\",\n        \"identifierValue\": \"919777785302\"\n    }\n}'",
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