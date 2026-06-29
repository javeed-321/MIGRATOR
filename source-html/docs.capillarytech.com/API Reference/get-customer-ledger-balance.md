> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Customer Ledger Balance

Retrieves category-wise points’ ledger balance details of a customer for a given time.

# Query parameters

| Parameters                 | Description                                                                                                                                                                                                                                                                                         |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierName             | Identifier type to identify the customer.                                                                                                                                                                                                                                                           |
| identifierValue            | Value of the specified identifier type of the customer.                                                                                                                                                                                                                                             |
| source                     | Source in which the identifier is available.                                                                                                                                                                                                                                                        |
| accountId                  | For sources with multiple accounts, pass the specific accountId in which the identifier is registered.                                                                                                                                                                                              |
| tillId                     | Pass the unique till ID of the org.                                                                                                                                                                                                                                                                 |
| limit                      | Number of ledger records to display per page. For example, if the total records are 15 and the limit is 5, the first page will display the first 5 records. The maximum supported limit is 100.                                                                                                     |
| offset                     | Page number to retrieve. To view the first page, set the value to 0.                                                                                                                                                                                                                                |
| endDate                    | Get the closing balance of a specific date. Pass the end date in YYYY-MM-DDThh:mm:ss format.                                                                                                                                                                                                        |
| includeTillConceptEvents   | Fetches the deduction entries that were triggered at the tills mapped to the Concept of the Program ID even if the deductions are from a different program.                                                                                                                                         |
| ledgerEntryType            | Specify the type of ledger entries you want to fetch. By default, it fetches all the ledger entry types.                                                                                                                                                                                            |
| pointCategoryType          | Specify the point category type for which you want to fetch ledger details. By default, it fetches all the points category details.                                                                                                                                                                 |
| alternateCurrencyNames     | Filter alternate currencies for the customer based on the name. You can also pass a list of comma-separated alternate currency names. Set the parameter includeAlternateCurrencies to false when you use this. If the value is true, includeAlternateCurrencies lists all the available currencies. |
| includeAlternateCurrencies | Pass includeAlternateCurrencies=true to retrieve all alternate currencies available with the customer.                                                                                                                                                                                              |

# Response parameter

| Parameter                           | Description                                                                                                                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customerDetails.userId              | The unique identifier for the user.                                                                                                                                                            |
| customerDetails.externalId          | External reference ID for the customer.                                                                                                                                                        |
| customerDetails.entityType          | The type of entity.                                                                                                                                                                            |
| ledgerDetails.pageNumber            | Current page number in the paginated response.                                                                                                                                                 |
| ledgerDetails.pageSize              | Number of entries per page.                                                                                                                                                                    |
| ledgerDetails.totalEntries          | Total number of entries across all pages.                                                                                                                                                      |
| ledgerDetails.pageCount             | Total number of pages in the paginated response.                                                                                                                                               |
| ledgerDetails.ledgerClosingBalance  | An array of ledger closing balances.                                                                                                                                                           |
| ledgerClosingBalance.pointsCategory | Category of the points.                                                                                                                                                                        |
| ledgerClosingBalance.programName    | Name of the loyalty program.                                                                                                                                                                   |
| ledgerClosingBalance.programId      | Unique identifier for the loyalty program.                                                                                                                                                     |
| ledgerClosingBalance.closingBalance | Closing balance of points for the specified program and category. If alternate currency parameters are passed in the query parameter, it retrives Alternate currency name and category details |
| warnings                            | List of warnings, if any.                                                                                                                                                                      |

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
    "/pointsLedger/getCustomerLedgerBalance": {
      "get": {
        "summary": "Get Customer Ledger Balance",
        "description": "Retrieves category-wise points’ ledger balance details of a customer for a given time.",
        "operationId": "get-customer-ledger-balance",
        "parameters": [
          {
            "name": "identifierName",
            "in": "query",
            "description": "Identifier type to identify the customer.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "cardnumber",
                "cardExternalId"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the specified identifier type of the customer.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the identifier is available.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "INSTORE",
                "MARTJACK",
                "WECHAT",
                "FACEBOOK",
                "WEB_ENGAG",
                "TMALL",
                "TAOBAO",
                "JD",
                "ECOMMERCE",
                "WEBSITE",
                "LINE",
                "ALL"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "For sources with multiple accounts, pass the specific accountId in which the identifier is registered.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "tillId",
            "in": "query",
            "description": "Get the customer’s ledger balance of a specific TILL. Pass the unique till ID.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Number of results to retrieve. Max value supported is also 10.",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 10
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Number of pages to be ignored from the top (page number).",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": 0
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "Get the closing balance of a specific date. Pass the end date in YYYY-MM-DDThh:mm:ss format. Default value, startDate plus 7 days.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "includeTillConceptEvents",
            "in": "query",
            "description": "Fetches the deduction entries that were triggered at the tills mapped to the Concept of the Program ID even if the deductions are from a different program.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "ledgerEntryType",
            "in": "query",
            "description": "Specify the type of ledger entries you want to fetch. By default, it fetches all the ledger entry types.",
            "schema": {
              "type": "string",
              "enum": [
                "CREDIT",
                "DEBIT",
                "OPENING_BALANCE"
              ]
            }
          },
          {
            "name": "pointCategoryType",
            "in": "query",
            "description": "Specify the point category type for which you want to fetch ledger details. By default, it fetches all the points category details.",
            "schema": {
              "type": "string",
              "enum": [
                "REGULAR",
                "PROMISED",
                "TRIGGER_BASED"
              ]
            }
          },
          {
            "name": "alternateCurrencyNames",
            "in": "query",
            "description": "Pass includeAlternateCurrencies=true to retrieve all alternate currencies of the customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "includeAlternateCurrencies",
            "in": "query",
            "description": "Pass includeAlternateCurrencies=true to retrieve all alternate currencies available with the customer.",
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
                  "Sample Response": {
                    "value": "{\n    \"customerDetails\": {\n        \"userId\": 502522264,\n        \"externalId\": \"tomanatest2\",\n        \"entityType\": \"CUSTOMER\"\n    },\n    \"ledgerDetails\": {\n        \"pageNumber\": 0,\n        \"pageSize\": 10,\n        \"totalEntries\": 17,\n        \"pageCount\": 2,\n        \"ledgerClosingBalance\": [\n            {\n                \"pointsCategory\": \"DelayedAccrualPointCategory\",\n                \"programName\": \"Tata Ginger Loyalty\",\n                \"programId\": 1568,\n                \"closingBalance\": \"0.000\"\n            },\n            {\n                \"pointsCategory\": \"ExternalTriggerBasedPointCategory\",\n                \"programName\": \"Tata Ginger Loyalty\",\n                \"programId\": 1568,\n                \"closingBalance\": \"0.000\"\n            },\n            {\n                \"pointsCategory\": \"Main\",\n                \"programName\": \"Playground\",\n                \"programId\": 1745,\n                \"closingBalance\": \"30000.000\"\n            },\n            {\n                \"pointsCategory\": \"ExternalTriggerBasedPointCategory\",\n                \"programName\": \"Westdown\",\n                \"programId\": 1424,\n                \"closingBalance\": \"0.000\"\n            },\n            {\n                \"pointsCategory\": \"Main\",\n                \"programName\": \"Westdown\",\n                \"programId\": 1424,\n                \"closingBalance\": \"0.000\"\n            },\n            {\n                \"pointsCategory\": \"Main\",\n                \"programName\": \"PurpleNeu\",\n                \"programId\": 1414,\n                \"closingBalance\": \"12703.000\"\n            }\n        ]\n    },\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "customerDetails": {
                      "type": "object",
                      "properties": {
                        "userId": {
                          "type": "integer",
                          "example": 502522264,
                          "default": 0
                        },
                        "externalId": {
                          "type": "string",
                          "example": "tomanatest2"
                        },
                        "entityType": {
                          "type": "string",
                          "example": "CUSTOMER"
                        }
                      }
                    },
                    "ledgerDetails": {
                      "type": "object",
                      "properties": {
                        "pageNumber": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "pageSize": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "totalEntries": {
                          "type": "integer",
                          "example": 17,
                          "default": 0
                        },
                        "pageCount": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "ledgerClosingBalance": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "pointsCategory": {
                                "type": "string",
                                "example": "DelayedAccrualPointCategory"
                              },
                              "programName": {
                                "type": "string",
                                "example": "Tata Ginger Loyalty"
                              },
                              "programId": {
                                "type": "integer",
                                "example": 1568,
                                "default": 0
                              },
                              "closingBalance": {
                                "type": "string",
                                "example": "0.000"
                              }
                            }
                          }
                        }
                      }
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
              "text/plain": {
                "examples": {
                  "Result": {
                    "value": ""
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
              "code": "https://eu.api.capillarytech.com/v2/pointsLedger/getCustomerLedgerBalance?identifierName=externalId&identifierValue=tomanatest2&source=INSTORE",
              "name": "Sample Request URL"
            }
          ],
          "samples-languages": [
            "curl"
          ]
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {},
              "examples": {
                "includeAlternateCurrencies=true": {
                  "value": {
                    "customerDetails": {
                      "firstName": "",
                      "lastName": "",
                      "userId": 382590745,
                      "entityType": "CUSTOMER"
                    },
                    "ledgerDetails": {
                      "pageNumber": 0,
                      "pageSize": 10,
                      "totalEntries": 4,
                      "pageCount": 1,
                      "ledgerClosingBalance": [
                        {
                          "pointsCategory": "Main",
                          "programName": "Aman Org V2DefaultProgram",
                          "programId": 2568,
                          "closingBalance": "0.000"
                        },
                        {
                          "pointsCategory": "DelayedAccrualPointCategory",
                          "programName": "Aman Org V2DefaultProgram",
                          "programId": 2568,
                          "closingBalance": "0.000"
                        },
                        {
                          "pointsCategory": "ExternalTriggerBasedPointCategory",
                          "programName": "Aman Org V2DefaultProgram",
                          "programId": 2568,
                          "closingBalance": "0.000"
                        },
                        {
                          "pointsCategory": "AC-hawai_PointCategory",
                          "programName": "Aman Org V2DefaultProgram",
                          "programId": 2568,
                          "closingBalance": "150.000",
                          "alternateCurrency": "AC-hawai",
                          "alternateCurrencyCategory": "REGULAR"
                        }
                      ]
                    },
                    "warnings": []
                  }
                },
                "includeAlternateCurrencies=false and alternateCurrencyNames=AC-hawai": {
                  "value": {
                    "customerDetails": {
                      "firstName": "",
                      "lastName": "",
                      "userId": 382590745,
                      "entityType": "CUSTOMER"
                    },
                    "ledgerDetails": {
                      "pageNumber": 0,
                      "pageSize": 10,
                      "totalEntries": 3,
                      "pageCount": 1,
                      "ledgerClosingBalance": [
                        {
                          "pointsCategory": "AC-hawai_PointCategory",
                          "programName": "Aman Org V2DefaultProgram",
                          "programId": 2568,
                          "closingBalance": "150.000",
                          "alternateCurrency": "AC-hawai",
                          "alternateCurrencyCategory": "REGULAR"
                        }
                      ]
                    },
                    "warnings": []
                  }
                }
              }
            }
          }
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