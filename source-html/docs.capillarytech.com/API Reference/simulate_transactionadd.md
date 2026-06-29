> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Simulation transaction add

Lets you perform the simulation of the Transaction Add.

This API enables the workflow simulation of a transaction and helps to demonstrate the benefits that the customers will receive with the transaction. It functions as a wrapper for the existing transaction add v2 API, allowing this process without performing any database writes. For more information on workflow simulation, refer to the [workflow simulation documentation](https://docs.capillarytech.com/docs/cart-event-simulation).

<Callout icon="👍" theme="okay">
  For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
</Callout>

# Prerequisites

* [ ] Enable config `CONF_ENABLE_SIMULATION_API_MODE`
* [ ] Write access to the Event simulation access group. For information on access groups, refer to the [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint example

`https://eu.api.capillarytech.com/v2/simulation/transactions?identifierName=email&identifierValue=johnhill@gmail.com`

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        (Parameters marked with

        *

        sign are mandatory)
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
        type\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of transactions - REGULAR
      </td>
    </tr>

    <tr>
      <td>
        billAmount\*
      </td>

      <td>
        string
      </td>

      <td>
        Total bill amount
      </td>
    </tr>

    <tr>
      <td>
        billNumber\*
      </td>

      <td>
        string
      </td>

      <td>
        Bill number
      </td>
    </tr>

    <tr>
      <td>
        addWithLocalCurrency
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates local currency usage
      </td>
    </tr>

    <tr>
      <td>
        lineItemsV2
      </td>

      <td>
        array
      </td>

      <td>
        An array containing item-level parameters
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        object
      </td>

      <td>
        An object containing custom field parameters.

        * *Note:*\* The custom fields are not taken into consideration for simulation.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        object
      </td>

      <td>
        An object containing extended field parameters
      </td>
    </tr>
  </tbody>
</Table>

> 📘 Note
>
> You can include all the body parameters permitted in the[ regular transaction add API](https://docs.capillarytech.com/reference/add-transaction-single) except rawSideEffects  and use\_async query param. Please note that the list provided above is not exhaustive and does not include all allowable body parameters.

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        (Parameters marked with

        *

        sign are mandatory)
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
        identifierName\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass any of the registered identifier name of the customer.\
        Values: `mobile`, `email`, `externalId`, `id`, `wechat`, `martjackId`, `fbId` (Facebook ID), `cardnumber`, `cardExternalId`.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue\*
      </td>

      <td>
        string
      </td>

      <td>
        Pass the respective identifier value. For example if identifierType is mobile, identifierValue is mobile number.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass the source from which the transaction is made. Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        string
      </td>

      <td>
        For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for INSTORE source.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

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
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing any warnings related to the simulation.
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
        An array containing any errors encountered during the simulation.
      </td>
    </tr>

    <tr>
      <td>
        simulatedPointsBreakup
      </td>

      <td>
        Object
      </td>

      <td>
        An object providing a breakdown of points earned from the simulation event.
      </td>
    </tr>

    <tr>
      <td>
        sideEffects
      </td>

      <td>
        Array
      </td>

      <td>
        An array of any side effects triggered by the simulation
      </td>
    </tr>

    <tr>
      <td>
        simulatedPointsBreakup
      </td>

      <td>
        Object
      </td>

      <td>
        An object providing a breakdown of points earned from the simulation event.
      </td>
    </tr>

    <tr>
      <td>
        * eventLogId
      </td>

      <td>
        Number
      </td>

      <td>
        Unique identifier for the simulation event log
      </td>
    </tr>

    <tr>
      <td>
        * eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event (e.g., "TransactionAdd")
      </td>
    </tr>

    <tr>
      <td>
        eventDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Details about the simulation event, such as max conversion date, event time, and till ID.
      </td>
    </tr>

    <tr>
      <td>
        * eventTime
      </td>

      <td>
        String
      </td>

      <td>
        Timestamp of the event (format: "YYYY-MM-DD HH:mm:ss.S").
      </td>
    </tr>

    <tr>
      <td>
        * tillId
      </td>

      <td>
        Number
      </td>

      <td>
        Identifier of the till where transaction occurred.
      </td>
    </tr>

    <tr>
      <td>
        billDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Details about the bill associated with the simulation, including bill type, number, and amount.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        String
      </td>

      <td>
        Type of bill (e.g., "loyalty")
      </td>
    </tr>

    <tr>
      <td>
        * billNumber
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the bill
      </td>
    </tr>

    <tr>
      <td>
        * grossAmount
      </td>

      <td>
        Number
      </td>

      <td>
        Total amount before discounts
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Number
      </td>

      <td>
        Total discount applied
      </td>
    </tr>

    <tr>
      <td>
        * billAmount
      </td>

      <td>
        Number
      </td>

      <td>
        Final amount after discounts
      </td>
    </tr>

    <tr>
      <td>
        * note
      </td>

      <td>
        String
      </td>

      <td>
        Additional notes about the transaction
      </td>
    </tr>

    <tr>
      <td>
        * billDate
      </td>

      <td>
        String
      </td>

      <td>
        Date/time of the bill (format: "YYYY-MM-DD HH:mm:ss.S")
      </td>
    </tr>

    <tr>
      <td>
        * regular
      </td>

      <td>
        Array
      </td>

      <td>
        Regular points earned
      </td>
    </tr>

    <tr>
      <td>
        * * value
      </td>

      <td>
        Number
      </td>

      <td>
        Points value
      </td>
    </tr>

    <tr>
      <td>
        * * expiresOn
      </td>

      <td>
        String
      </td>

      <td>
        Expiration date (format: "YYYY-MM-DD HH:mm:ss.S")
      </td>
    </tr>

    <tr>
      <td>
        * * programId
      </td>

      <td>
        Number
      </td>

      <td>
        ID of the loyalty program
      </td>
    </tr>

    <tr>
      <td>
        * * programName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the loyalty program
      </td>
    </tr>

    <tr>
      <td>
        * * expiryType
      </td>

      <td>
        String
      </td>

      <td>
        Type of expiry
      </td>
    </tr>

    <tr>
      <td>
        * promo
      </td>

      <td>
        Array
      </td>

      <td>
        Promotional points earned
      </td>
    </tr>

    <tr>
      <td>
        pointsEarned
      </td>

      <td>
        Object
      </td>

      <td>
        Information about the points earned during the simulation.
      </td>
    </tr>

    <tr>
      <td>
        promised
      </td>

      <td>
        Array
      </td>

      <td>
        An array of promised points, including their value, conversion date, program ID, and name.
      </td>
    </tr>

    <tr>
      <td>
        lineItems
      </td>

      <td>
        Array
      </td>

      <td>
        An array of line items associated with the bill, each containing details and earned points.
      </td>
    </tr>

    <tr>
      <td>
        regular
      </td>

      <td>
        Array
      </td>

      <td>
        An array of regular points earned, including their value, expiration date, program ID, and name.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Array
      </td>

      <td>
        An array of custom fields associated with the simulation event.

        * *Note:*\* The custom fields are not taken into consideration for simulation.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        Array
      </td>

      <td>
        An array of extended fields, such as "room\_nights\_count," with their respective values.
      </td>
    </tr>

    <tr>
      <td>
        paymentModes
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing information about payment modes used in the simulation.
      </td>
    </tr>

    <tr>
      <td>
        pointInTimeSlabs
      </td>

      <td>
        Array
      </td>

      <td>
        An array of point-in-time slabs, including slab number, name, program ID, and default status.
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
    "/simulation/transactions": {
      "post": {
        "summary": "Simulation transaction add",
        "description": "Lets you perform the simulation of the Transaction Add.",
        "operationId": "simulate_transactionadd",
        "parameters": [
          {
            "name": "X-CAP-DIRECT-REPLAY",
            "in": "header",
            "description": "Pass true to add the call to the event execution queue (reply event) - in this case, transaction is added and other events will be executed later. Pass false to directly execute the event.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Pass any of the registered identifier name of the customer.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "id",
                "wechat",
                "martjackId",
                "fbId",
                "cardnumber",
                "cardExternalId"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Pass the respective identifier value.",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "type",
                  "billAmount",
                  "billNumber"
                ],
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "REGULAR",
                      "RETURN",
                      "MIXED"
                    ]
                  },
                  "billAmount": {
                    "type": "number",
                    "description": "Bill Amount is the net transaction value.",
                    "format": "float"
                  },
                  "billNumber": {
                    "type": "string",
                    "description": "Bill Number"
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
                    "value": "{\n    \"warnings\": [],\n    \"errors\": [],\n    \"sideEffects\": [\n        {\n            \"entityType\": \"USER\",\n            \"rawAwardedPoints\": 14586.400,\n            \"awardedPoints\": 14586,\n            \"type\": \"points\"\n        }\n    ],\n    \"simulatedPointsBreakup\": {\n        \"eventLogId\": 0,\n        \"eventName\": \"TransactionAdd\",\n        \"eventDetails\": {\n            \"maxConversionDate\": \"2024-10-09 00:00:00.0\",\n            \"eventTime\": \"2023-10-09 11:42:49.680\",\n            \"tillId\": 13555163\n        },\n        \"billDetails\": {\n            \"type\": \"loyalty\",\n            \"billNumber\": \"660TRE009110812\",\n            \"billAmount\": 1440.0,\n            \"note\": \"\",\n            \"pointsEarned\": {\n                \"regular\": [],\n                \"promo\": [],\n                \"promised\": [\n                    {\n                        \"value\": 100.0,\n                        \"conversionDate\": \"2024-10-09 00:00:00.0\",\n                        \"programId\": 2202,\n                        \"programName\": \"Lotte Hotels Loyalty Program\"\n                    },\n                    {\n                        \"value\": 86.4,\n                        \"conversionDate\": \"2024-10-09 00:00:00.0\",\n                        \"programId\": 2202,\n                        \"programName\": \"Lotte Hotels Loyalty Program\"\n                    }\n                ]\n            },\n            \"lineItems\": [\n                {\n                    \"id\": 5291920451004507633,\n                    \"itemCode\": \"STAY123\",\n                    \"grossAmount\": 0.0,\n                    \"discount\": 0.0,\n                    \"amount\": 1400.0,\n                    \"rate\": 1400.0,\n                    \"qty\": 1.0,\n                    \"pointsEarned\": {\n                        \"regular\": [\n                            {\n                                \"value\": 14000.0,\n                                \"expiresOn\": \"2026-10-31 23:59:59.999\",\n                                \"programId\": 2202,\n                                \"programName\": \"Lotte Hotels Loyalty Program\",\n                                \"expiryType\": \"fixed\"\n                            }\n                        ],\n                        \"promo\": [],\n                        \"promised\": []\n                    }\n                },\n                {\n                    \"id\": 2592424948359166550,\n                    \"itemCode\": \"F&B123\",\n                    \"grossAmount\": 0.0,\n                    \"discount\": 0.0,\n                    \"amount\": 40.0,\n                    \"rate\": 40.0,\n                    \"qty\": 1.0,\n                    \"pointsEarned\": {\n                        \"regular\": [\n                            {\n                                \"value\": 400.0,\n                                \"expiresOn\": \"2026-10-31 23:59:59.999\",\n                                \"programId\": 2202,\n                                \"programName\": \"Lotte Hotels Loyalty Program\",\n                                \"expiryType\": \"fixed\"\n                            }\n                        ],\n                        \"promo\": [],\n                        \"promised\": []\n                    }\n                }\n            ]\n        },\n        \"customFields\": [],\n        \"extendedFields\": [\n            {\n                \"name\": \"room_nights_count\",\n                \"value\": \"3\"\n            }\n        ],\n        \"paymentModes\": [],\n        \"pointInTimeSlabs\": [\n            {\n                \"pointInTimeSlabNumber\": 1,\n                \"pointInTimeSlabName\": \"CLASSIC LEVEL\",\n                \"programId\": 2202,\n                \"isDefaultProgram\": false\n            }\n        ]\n    }\n}"
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
                    },
                    "sideEffects": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "entityType": {
                            "type": "string",
                            "example": "USER"
                          },
                          "rawAwardedPoints": {
                            "type": "number",
                            "example": 14586.4,
                            "default": 0
                          },
                          "awardedPoints": {
                            "type": "integer",
                            "example": 14586,
                            "default": 0
                          },
                          "type": {
                            "type": "string",
                            "example": "points"
                          }
                        }
                      }
                    },
                    "simulatedPointsBreakup": {
                      "type": "object",
                      "properties": {
                        "eventLogId": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "eventName": {
                          "type": "string",
                          "example": "TransactionAdd"
                        },
                        "eventDetails": {
                          "type": "object",
                          "properties": {
                            "maxConversionDate": {
                              "type": "string",
                              "example": "2024-10-09 00:00:00.0"
                            },
                            "eventTime": {
                              "type": "string",
                              "example": "2023-10-09 11:42:49.680"
                            },
                            "tillId": {
                              "type": "integer",
                              "example": 13555163,
                              "default": 0
                            }
                          }
                        },
                        "billDetails": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string",
                              "example": "loyalty"
                            },
                            "billNumber": {
                              "type": "string",
                              "example": "660TRE009110812"
                            },
                            "billAmount": {
                              "type": "integer",
                              "example": 1440,
                              "default": 0
                            },
                            "note": {
                              "type": "string",
                              "example": ""
                            },
                            "pointsEarned": {
                              "type": "object",
                              "properties": {
                                "regular": {
                                  "type": "array"
                                },
                                "promo": {
                                  "type": "array"
                                },
                                "promised": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "value": {
                                        "type": "integer",
                                        "example": 100,
                                        "default": 0
                                      },
                                      "conversionDate": {
                                        "type": "string",
                                        "example": "2024-10-09 00:00:00.0"
                                      },
                                      "programId": {
                                        "type": "integer",
                                        "example": 2202,
                                        "default": 0
                                      },
                                      "programName": {
                                        "type": "string",
                                        "example": "Lotte Hotels Loyalty Program"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "lineItems": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 5291920451004507000,
                                    "default": 0
                                  },
                                  "itemCode": {
                                    "type": "string",
                                    "example": "STAY123"
                                  },
                                  "grossAmount": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "discount": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "amount": {
                                    "type": "integer",
                                    "example": 1400,
                                    "default": 0
                                  },
                                  "rate": {
                                    "type": "integer",
                                    "example": 1400,
                                    "default": 0
                                  },
                                  "qty": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  },
                                  "pointsEarned": {
                                    "type": "object",
                                    "properties": {
                                      "regular": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "value": {
                                              "type": "integer",
                                              "example": 14000,
                                              "default": 0
                                            },
                                            "expiresOn": {
                                              "type": "string",
                                              "example": "2026-10-31 23:59:59.999"
                                            },
                                            "programId": {
                                              "type": "integer",
                                              "example": 2202,
                                              "default": 0
                                            },
                                            "programName": {
                                              "type": "string",
                                              "example": "Lotte Hotels Loyalty Program"
                                            },
                                            "expiryType": {
                                              "type": "string",
                                              "example": "fixed"
                                            }
                                          }
                                        }
                                      },
                                      "promo": {
                                        "type": "array"
                                      },
                                      "promised": {
                                        "type": "array"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "customFields": {
                          "type": "array"
                        },
                        "extendedFields": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "example": "room_nights_count"
                              },
                              "value": {
                                "type": "string",
                                "example": "3"
                              }
                            }
                          }
                        },
                        "paymentModes": {
                          "type": "array"
                        },
                        "pointInTimeSlabs": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "pointInTimeSlabNumber": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "pointInTimeSlabName": {
                                "type": "string",
                                "example": "CLASSIC LEVEL"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 2202,
                                "default": 0
                              },
                              "isDefaultProgram": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "403": {
            "description": "403",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"warnings\": [],\n    \"errors\": [\n        {\n            \"status\": false,\n            \"code\": 4000,\n            \"message\": \"Not authorized. Access is denied!\"\n        }\n    ]\n}"
                  }
                },
                "schema": {
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
                            "example": 4000,
                            "default": 0
                          },
                          "message": {
                            "type": "string",
                            "example": "Not authorized. Access is denied!"
                          }
                        }
                      }
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
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/simulation/transactions?identifierName=mobile&identifierValue=9999988886&source=WEB_ENGAGE&accountId=123456' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic dGpfY2' \\\n--header 'Cookie: _cfuvid=1ozIjmFaLoEx5vwdUHZU.3qhuO2to6ZW5PwirimSEGo-1745903460934-0.0.1.1-604800000' \\\n--data '{\n    \"type\": \"REGULAR\",\n    \"billNumber\": \"test00transact084\",\n    \"discount\": \"1000\",\n    \"billAmount\": \"6000\",\n    \"billingDate\" : \"2025-04-09T11:00:00+05:30\",\n    \"grossAmount\": \"7000\",\n    \"deliveryStatus\": \"PLACED\",\n    \"note\": \"Transaction number 84\",\n    \"attribution\": {\n        \"createDate\": \"2025-04-10T10:00:00+05:30\",\n        \"createdBy\": {\n                \"id\": 75155297,\n                \"code\": \"tj_capillary\",\n                \"name\": \"tj_capillary\",\n                \"type\": \"TILL\"\n            }\n    },\n    \"paymentModes\": [\n        {\n            \"mode\": \"Card Payment\",\n            \"value\": 5104,\n            \"notes\": \"Sample notes for card payment\",\n            \"attributes\": {\n                \"card_type\": \"Visa\"\n            }\n        }\n    ],\n    \"lineItemsV2\": [\n        {\n            \n            \"itemCode\": \"model_id_001\",\n            \"description\": \"Steel Bottle\",\n            \"amount\": 2000.0,\n            \"rate\": 500.0,\n            \"qty\": 4.0,\n            \"value\": 2000.0\n        },{\n            \"itemCode\": \"model_id_002\",\n            \"description\": \"Sports Shoe\",\n            \"amount\": 2000.0,\n            \"rate\": 1000.0,\n            \"qty\": 2.0,\n            \"value\": 2000.0\n        }\n    ]\n}'",
              "name": "REGULAR"
            }
          ],
          "samples-languages": [
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