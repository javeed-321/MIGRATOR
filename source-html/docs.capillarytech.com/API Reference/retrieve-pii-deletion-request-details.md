> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve Request Details using Type and Subtype

Allows you to retrieve request details with desired filters.

# Request

curl: `https://{host}/v2/requests`

Example: `https://eu.api.capillarytech.com/v2/requests?requestType=CUSTOMER&requestSubType=DELETE&limit=10&offset=0&sort=ADDED_ON&order=DESC&source=WEB_ENGAGE`

# Response

* **type**: Displays the PII deletion request data type.
* **baseType**: Displays the PII deletion request action.
* **status**: Displays the PII deletion request status.
* **attribution**: Displays the attribution details of the PII deletion request data.
* **id**: Displays the PII deletion request ID.
* **customerDeletionDetails**: Displays the PII deletion request and scheduled time and status of the request.

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
    "/requests": {
      "get": {
        "summary": "Retrieve Request Details using Type and Subtype",
        "description": "Allows you to retrieve request details with desired filters.",
        "operationId": "retrieve-transaction-customer-merge-request-details",
        "parameters": [
          {
            "name": "requestType",
            "in": "query",
            "description": "Type of request. **Values**: `TRANSACTION` - For transaction request   `CHANGE_IDENTIFIER` -  For customer merge request",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "requestSubType",
            "in": "query",
            "description": "Subtype of the request.   **Values**: `REGULAR_TXN_ADD` - For transaction request   `MERGE` - For customer merge request",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "umber of results. For example, number 10 retrieves the first 10 rows of the query results.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Defines the number of rows that needs to be skipped from the beginning of the results. For example, number 10 skips the first 10 search results.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "description": "Sorts the results as per the defined method.",
            "schema": {
              "type": "string",
              "enum": [
                "ADDED_ON",
                "LAST_UPDATED_ON"
              ]
            }
          },
          {
            "name": "order",
            "in": "query",
            "description": "Sorts the data in descending or ascending order.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Filter the data by its status.",
            "schema": {
              "type": "string",
              "enum": [
                "PENDING",
                "REJECTED",
                "APPROVED",
                "SUCCESS",
                "FAILURE"
              ]
            }
          },
          {
            "name": "Customer identification",
            "in": "query",
            "description": "Customer identification parameters such as source, account id, identifiers etc.",
            "required": true,
            "schema": {
              "properties": {
                "source": {
                  "type": "string",
                  "description": "Defines the source from which the transaction is made. Example: INSTORE, WECHAT, WEB_ENGAGE (Web-engage integration) etc."
                },
                "identifierType": {
                  "type": "string",
                  "description": "Defines any of the registered identifier name of the customer. Values: mobile, email, externalId, id, WeChat, cardnumber, cardExternalId"
                },
                "identifierValue": {
                  "type": "string",
                  "description": "Defines the respective identifier value. For example, if identifierType is mobile, identifierValue is mobile number."
                }
              },
              "required": [
                "source",
                "identifierType",
                "identifierValue"
              ],
              "type": "object"
            }
          },
          {
            "name": "start_date",
            "in": "query",
            "description": "Pass the date range in ISO standard - yyyy-mm-ddThh:mm:ss.s+z.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Pass the date range in ISO standard - yyyy-mm-ddThh:mm:ss.s+z.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Response for Customer Merge from Parent Org": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 10,\n        \"offset\": 0,\n        \"sortBy\": \"r.created_on\",\n        \"sortOrder\": \"DESC\",\n        \"total\": 5\n    },\n    \"data\": [\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:07:56+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:07:56+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 843372,\n                \"userId\": -1,\n                \"requestId\": 1778080,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387733529\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387733597\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        },\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:07:56+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:07:56+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 842617,\n                \"userId\": -1,\n                \"requestId\": 1774973,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724145\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724147\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        },\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:07:56+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:07:56+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 842614,\n                \"userId\": -1,\n                \"requestId\": 1774969,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724145\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724147\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        },\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:07:56+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:07:56+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 842574,\n                \"userId\": -1,\n                \"requestId\": 1774882,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724145\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724147\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        },\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:07:56+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:07:56+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 825524,\n                \"userId\": -1,\n                \"requestId\": 1704615,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387480176\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387480177\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "Response for Customer Merge from Child Org": {
                    "value": "{\n    \"pagination\": {\n        \"limit\": 10,\n        \"offset\": 0,\n        \"sortBy\": \"r.created_on\",\n        \"sortOrder\": \"DESC\",\n        \"total\": 3\n    },\n    \"data\": [\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:00:19+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:00:19+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 843373,\n                \"userId\": -1,\n                \"requestId\": 1778080,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387733529\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387733597\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        },\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:00:19+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:00:19+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 842618,\n                \"userId\": -1,\n                \"requestId\": 1774973,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724145\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724147\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        },\n        {\n            \"attribution\": {\n                \"createDate\": \"2025-03-21T11:00:19+05:30\",\n                \"createdBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedBy\": {\n                    \"referenceId\": -1,\n                    \"default\": false\n                },\n                \"modifiedDate\": \"2025-03-21T11:00:19+05:30\"\n            },\n            \"userId\": -1,\n            \"changeIdentifierRequest\": {\n                \"id\": 842615,\n                \"userId\": -1,\n                \"requestId\": 1774969,\n                \"changeIdentifiers\": {\n                    \"add\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724145\"\n                        }\n                    ],\n                    \"remove\": [\n                        {\n                            \"type\": \"id\",\n                            \"value\": \"387724147\"\n                        }\n                    ]\n                },\n                \"oneStep\": false\n            },\n            \"oneStep\": false\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  },
                  "Sample response for Customer Merge": {
                    "value": {
                      "pagination": {
                        "limit": 10,
                        "offset": 0,
                        "sortBy": "r.created_on",
                        "sortOrder": "DESC",
                        "total": 83
                      },
                      "data": [
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1107529,
                            "userId": -1,
                            "requestId": 13675913,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "566196275"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566186920"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1085923,
                            "userId": -1,
                            "requestId": 13607298,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "564661993"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045866,
                            "userId": -1,
                            "requestId": 13552463,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "566727315"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045846,
                            "userId": -1,
                            "requestId": 13552401,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "564661993"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045845,
                            "userId": -1,
                            "requestId": 13552400,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "564661993"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "565409418"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045844,
                            "userId": -1,
                            "requestId": 13552399,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "564661993"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045840,
                            "userId": -1,
                            "requestId": 13552391,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "564661993"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045799,
                            "userId": -1,
                            "requestId": 13552011,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "566727315"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045798,
                            "userId": -1,
                            "requestId": 13552010,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "566727315"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        },
                        {
                          "attribution": {
                            "createDate": "2026-03-03T12:51:44Z",
                            "createdBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedBy": {
                              "referenceId": -1,
                              "default": false
                            },
                            "modifiedDate": "2026-03-03T12:51:44Z"
                          },
                          "userId": -1,
                          "changeIdentifierRequest": {
                            "id": 1045797,
                            "userId": -1,
                            "requestId": 13552003,
                            "changeIdentifiers": {
                              "add": [
                                {
                                  "type": "id",
                                  "value": "566727315"
                                }
                              ],
                              "remove": [
                                {
                                  "type": "id",
                                  "value": "566907117"
                                }
                              ]
                            },
                            "oneStep": false
                          },
                          "oneStep": false
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    },
                    "summary": "Sample response for Customer Merge"
                  },
                  "Sample response for Transaction Request": {
                    "value": {
                      "pagination": {
                        "limit": 10,
                        "offset": 0,
                        "sortBy": "r.created_on",
                        "sortOrder": "DESC",
                        "total": 37
                      },
                      "data": [
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "type": "REGULAR",
                            "billAmount": 6000,
                            "billNumber": "test00transact088",
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2025-04-29T04:30:00Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T14:02:32Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T14:02:32Z"
                          },
                          "id": 29592579,
                          "addedOn": "2026-02-23T14:02:32Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "type": "REGULAR",
                            "billAmount": 6000,
                            "billNumber": "test00transact088",
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2025-04-29T04:30:00Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T14:02:27Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T14:02:27Z"
                          },
                          "id": 29592578,
                          "addedOn": "2026-02-23T14:02:27Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "type": "REGULAR",
                            "billAmount": 6000,
                            "billNumber": "test00transact088",
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2025-04-29T04:30:00Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T14:01:37Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T14:01:37Z"
                          },
                          "id": 29592266,
                          "addedOn": "2026-02-23T14:01:37Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T13:45:37Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T13:45:37Z"
                          },
                          "id": 29586874,
                          "addedOn": "2026-02-23T13:45:37Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "type": "REGULAR",
                            "billAmount": 6000,
                            "billNumber": "test00transact088",
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "billingDate": "2025-04-29T04:30:00Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T13:40:49Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T13:40:49Z"
                          },
                          "id": 29585202,
                          "addedOn": "2026-02-23T13:40:49Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "billAmount": 6000,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2026-02-23T13:40:16Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T13:40:17Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T13:40:17Z"
                          },
                          "id": 29584811,
                          "addedOn": "2026-02-23T13:40:17Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "billAmount": 6000,
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2026-02-23T13:40:11Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T13:40:12Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T13:40:12Z"
                          },
                          "id": 29584810,
                          "addedOn": "2026-02-23T13:40:12Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "billAmount": 6000,
                            "billNumber": "test00transact088",
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2026-02-23T13:40:07Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T13:40:08Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T13:40:08Z"
                          },
                          "id": 29584809,
                          "addedOn": "2026-02-23T13:40:08Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "type": "REGULAR",
                            "billAmount": 6000,
                            "billNumber": "test00transact088",
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2025-04-29T04:30:00Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T13:38:39Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T13:38:39Z"
                          },
                          "id": 29584495,
                          "addedOn": "2026-02-23T13:38:39Z",
                          "userId": 564703252,
                          "oneStep": false
                        },
                        {
                          "type": "TRANSACTION",
                          "baseType": "REGULAR_TXN_ADD",
                          "status": "PENDING",
                          "transaction": {
                            "deliveryStatus": "PLACED",
                            "type": "REGULAR",
                            "billAmount": 6000,
                            "billNumber": "test00transact088",
                            "discount": 0,
                            "grossAmount": 6000,
                            "note": "Add Transaction Request 88",
                            "lineItemsV2": [
                              {
                                "amount": 6000,
                                "description": "sports shoes",
                                "discount": 0,
                                "itemCode": "model_id_001",
                                "qty": 3,
                                "rate": 2000,
                                "returnable": true,
                                "returnableDays": -1,
                                "comboDetails": [],
                                "addOnDetails": [],
                                "splitDetails": []
                              }
                            ],
                            "notInterestedReason": "",
                            "isUseDefaultUserGroup2": false,
                            "paymentModes": [
                              {
                                "mode": "Cash",
                                "value": 6000,
                                "notes": ""
                              }
                            ],
                            "billingDate": "2025-04-29T04:30:00Z",
                            "useDefaultUserGroup2": false
                          },
                          "customer": {
                            "id": 564703252,
                            "profiles": [
                              {
                                "firstName": "Tjuser",
                                "lastName": "Eightysix",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564703252,
                                "accountId": "",
                                "autoUpdateTime": "2026-03-03T12:39:33Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "0000011110"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919999988886"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testusertjone@gmail.com"
                                  }
                                ]
                              }
                            ]
                          },
                          "attribution": {
                            "createDate": "2026-02-23T05:59:53Z",
                            "createdBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedBy": {
                              "id": 75197372,
                              "code": "madhu_rima",
                              "description": "madhurima's till",
                              "name": "madhurima",
                              "type": "TILL",
                              "referenceId": -1,
                              "adminType": "GENERAL",
                              "isActive": true,
                              "isOuEnabled": false,
                              "timeZoneId": 191,
                              "currencyId": 0,
                              "languageId": 0,
                              "default": false
                            },
                            "modifiedDate": "2026-02-23T05:59:53Z"
                          },
                          "id": 29487591,
                          "addedOn": "2026-02-23T05:59:53Z",
                          "userId": 564703252,
                          "oneStep": false
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    },
                    "summary": "Sample response for Transaction Request"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Response for Transaction Request",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 10,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "created_on"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 988,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "string",
                                "example": "TRANSACTION"
                              },
                              "baseType": {
                                "type": "string",
                                "example": "REGULAR_TXN_ADD"
                              },
                              "status": {
                                "type": "string",
                                "example": "PENDING"
                              },
                              "transaction": {
                                "type": "object",
                                "properties": {
                                  "extendedFields": {
                                    "type": "object",
                                    "properties": {
                                      "checkin_date": {
                                        "type": "string",
                                        "example": "2010-06-04 21:08:12"
                                      },
                                      "checkout_date": {
                                        "type": "string",
                                        "example": "2010-06-05 21:08:12"
                                      },
                                      "ship_first_name": {
                                        "type": "string",
                                        "example": "Ram"
                                      },
                                      "ship_last_name": {
                                        "type": "string",
                                        "example": "Singh"
                                      }
                                    }
                                  },
                                  "deliveryStatus": {
                                    "type": "string",
                                    "example": "SHIPPED"
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "REGULAR"
                                  },
                                  "billAmount": {
                                    "type": "integer",
                                    "example": 200,
                                    "default": 0
                                  },
                                  "billNumber": {
                                    "type": "string",
                                    "example": "num-1234"
                                  },
                                  "discount": {
                                    "type": "integer",
                                    "example": 10,
                                    "default": 0
                                  },
                                  "grossAmount": {
                                    "type": "integer",
                                    "example": 110,
                                    "default": 0
                                  },
                                  "note": {
                                    "type": "string",
                                    "example": "This is test"
                                  },
                                  "lineItemsV2": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "amount": {
                                          "type": "number",
                                          "example": 100.5,
                                          "default": 0
                                        },
                                        "itemCode": {
                                          "type": "string",
                                          "example": "sku_234_2"
                                        },
                                        "qty": {
                                          "type": "integer",
                                          "example": 1,
                                          "default": 0
                                        },
                                        "rate": {
                                          "type": "number",
                                          "example": 100.5,
                                          "default": 0
                                        },
                                        "returnable": {
                                          "type": "boolean",
                                          "example": true,
                                          "default": true
                                        },
                                        "returnableDays": {
                                          "type": "integer",
                                          "example": -1,
                                          "default": 0
                                        },
                                        "comboDetails": {
                                          "type": "array"
                                        },
                                        "addOnDetails": {
                                          "type": "array"
                                        },
                                        "splitDetails": {
                                          "type": "array"
                                        },
                                        "extendedFields": {
                                          "type": "object",
                                          "properties": {
                                            "GrossWeight": {
                                              "type": "string",
                                              "example": "10.50"
                                            },
                                            "MetalRate": {
                                              "type": "string",
                                              "example": "22.02"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "customFields": {
                                    "type": "object",
                                    "properties": {
                                      "paymentmode": {
                                        "type": "string",
                                        "example": "cash"
                                      }
                                    }
                                  },
                                  "notInterestedReason": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "userGroup2Id": {
                                    "type": "integer",
                                    "example": 1949,
                                    "default": 0
                                  },
                                  "userGroup2ExternalId": {
                                    "type": "string",
                                    "example": ""
                                  },
                                  "userGroup2PrimaryUserId": {
                                    "type": "integer",
                                    "example": 414936033,
                                    "default": 0
                                  },
                                  "isUseDefaultUserGroup2": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "paymentModes": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "mode": {
                                          "type": "string",
                                          "example": "Card Payment"
                                        },
                                        "value": {
                                          "type": "integer",
                                          "example": 5104,
                                          "default": 0
                                        },
                                        "notes": {
                                          "type": "string",
                                          "example": "Sample notes"
                                        },
                                        "attributes": {
                                          "type": "object",
                                          "properties": {
                                            "card_type": {
                                              "type": "string",
                                              "example": "Visa"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "billingDate": {
                                    "type": "string",
                                    "example": "2023-05-08T20:51:13+05:30"
                                  },
                                  "useDefaultUserGroup2": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "images": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "integer",
                                      "example": 934,
                                      "default": 0
                                    },
                                    "provider": {
                                      "type": "string",
                                      "example": "FILESERVICE"
                                    },
                                    "namespace": {
                                      "type": "string",
                                      "example": "solutions"
                                    },
                                    "serial": {
                                      "type": "integer",
                                      "example": 1,
                                      "default": 0
                                    },
                                    "fileName": {
                                      "type": "string",
                                      "example": "TestImage.jpeg"
                                    },
                                    "imageReference": {
                                      "type": "string",
                                      "example": "bdacb6a7-d4ce-4dea-bf38-134a1200b8b9"
                                    },
                                    "filePath": {
                                      "type": "string",
                                      "example": "https://s3.amazonaws.com/fileservice.in/solutions/ebe6ad63-da4c-4dfb-9365-2f8d421.jpeg?X-Amz-Security-Token=FwoGZXIvYXdzEFoaDGIjegsrv1Xa7a%2B9oiLQAa2VFQ4UY0IUnFAbH8TuKWHmpRGsr0lQagsZ%2BJVj7wiEwxoYEsg%2Fa1TtecwDU5nYJZ4HhoU1dRz8BcDTM8v%2Bcgd0ywEOE3Kkwyg5YqPW4L3%2BrJzeEl0R2pDgv%2Bu6uioXnxQE2EmAgTV%2BeIiz5OfyyTHpPlUA7EYyU3pUSrjciT6bMPvMAP%2FEoiKyf2C4KWeYKGRtRmhV3rROWNKGccHjpWYXs70c20RhTGzxibK1qYIAKPcvrNODubcQbahWA7bag658fVsYnlHM5G0TmdMnnYYonbzkogYyLToxrhDfxMghIp90SbouodGENsEWiKO0i4NB35ovbg15szbjMm9tzwfaXqCJ1Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230508T160948Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBYMAOFKMJ%2F20230508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=190e961ca3064095b4ac62df830297f62f1946dfaef58d0b2a6dce50f6c725c5"
                                    },
                                    "securedFilePath": {
                                      "type": "string",
                                      "example": "https://s3.amazonaws.com/fileservice.in/solutions/ebe6ad63-da4c-4dfb-9365-2f8d421.jpeg?X-Amz-Security-Token=FwoGZXIvYXdzEFoaDGIjegsrv1Xa7a%2B9oiLQAa2VFQ4UY0IUnFAbH8TuKWHmpRGsr0lQagsZ%2BJVj7wiEwxoYEsg%2Fa1TtecwDU5nYJZ4HhoU1dRz8BcDTM8v%2Bcgd0ywEOE3Kkwyg5YqPW4L3%2BrJzeEl0R2pDgv%2Bu6uioXnxQE2EmAgTV%2BeIiz5OfyyTHpPlUA7EYyU3pUSrjciT6bMPvMAP%2FEoiKyf2C4KWeYKGRtRmhV3rROWNKGccHjpWYXs70c20RhTGzxibK1qYIAKPcvrNODubcQbahWA7bag658fVsYnlHM5G0TmdMnnYYonbzkogYyLToxrhDfxMghIp90SbouodGENsEWiKO0i4NB35ovbg15szbjMm9tzwfaXqCJ1Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230508T160948Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIAXKEP2EMBYMAOFKMJ%2F20230508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=190e961ca3064095b4ac62df830297f62f1946dfaef58d0b2a6dce50f6c725c5"
                                    },
                                    "active": {
                                      "type": "boolean",
                                      "example": true,
                                      "default": true
                                    }
                                  }
                                }
                              },
                              "customer": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 536093144,
                                    "default": 0
                                  },
                                  "profiles": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "firstName": {
                                          "type": "string",
                                          "example": "Dave"
                                        },
                                        "lastName": {
                                          "type": "string",
                                          "example": "Maz"
                                        },
                                        "fields": {
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
                                                "example": "tom.swayer@capillarytech.com"
                                              }
                                            }
                                          }
                                        },
                                        "commChannels": {
                                          "type": "array"
                                        },
                                        "userId": {
                                          "type": "integer",
                                          "example": 536093144,
                                          "default": 0
                                        },
                                        "accountId": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "autoUpdateTime": {
                                          "type": "string",
                                          "example": "2023-05-08T21:39:48+05:30"
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
                                                "example": "tom.swayer@capillarytech.com"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "attribution": {
                                "type": "object",
                                "properties": {
                                  "createDate": {
                                    "type": "string",
                                    "example": "2023-05-08T20:51:14+05:30"
                                  },
                                  "createdBy": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "integer",
                                        "example": 13539312,
                                        "default": 0
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "neestoretillssnee1"
                                      },
                                      "description": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "name": {
                                        "type": "string",
                                        "example": "neestoretillssnee1"
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "TILL"
                                      },
                                      "adminType": {
                                        "type": "string",
                                        "example": "GENERAL"
                                      },
                                      "isActive": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "isOuEnabled": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "timeZoneId": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "currencyId": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "languageId": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "modifiedBy": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "integer",
                                        "example": 13539312,
                                        "default": 0
                                      },
                                      "code": {
                                        "type": "string",
                                        "example": "neestoretillssnee1"
                                      },
                                      "description": {
                                        "type": "string",
                                        "example": ""
                                      },
                                      "name": {
                                        "type": "string",
                                        "example": "neestoretillssnee1"
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "TILL"
                                      },
                                      "adminType": {
                                        "type": "string",
                                        "example": "GENERAL"
                                      },
                                      "isActive": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "isOuEnabled": {
                                        "type": "boolean",
                                        "example": false,
                                        "default": true
                                      },
                                      "timeZoneId": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "currencyId": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "languageId": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      }
                                    }
                                  },
                                  "modifiedDate": {
                                    "type": "string",
                                    "example": "2023-05-08T20:51:14+05:30"
                                  }
                                }
                              },
                              "id": {
                                "type": "integer",
                                "example": 978078,
                                "default": 0
                              },
                              "addedOn": {
                                "type": "string",
                                "example": "2023-05-08T20:51:14+05:30"
                              },
                              "userId": {
                                "type": "integer",
                                "example": 536093144,
                                "default": 0
                              },
                              "comments": {
                                "type": "string",
                                "example": "any comments"
                              },
                              "oneStep": {
                                "type": "boolean",
                                "example": false,
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
                    },
                    {
                      "title": "Response for Customer Merge",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 10,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "r.created_on"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 22,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attribution": {
                                "type": "object",
                                "properties": {
                                  "createDate": {
                                    "type": "string",
                                    "example": "2025-04-13T11:33:57Z"
                                  },
                                  "createdBy": {
                                    "type": "object",
                                    "properties": {
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
                                    "example": "2025-04-13T11:33:57Z"
                                  }
                                }
                              },
                              "userId": {
                                "type": "integer",
                                "example": -1,
                                "default": 0
                              },
                              "changeIdentifierRequest": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 1000120,
                                    "default": 0
                                  },
                                  "userId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  },
                                  "requestId": {
                                    "type": "integer",
                                    "example": 13030603,
                                    "default": 0
                                  },
                                  "changeIdentifiers": {
                                    "type": "object",
                                    "properties": {
                                      "add": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "example": "id"
                                            },
                                            "value": {
                                              "type": "string",
                                              "example": "565398773"
                                            }
                                          }
                                        }
                                      },
                                      "remove": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "example": "id"
                                            },
                                            "value": {
                                              "type": "string",
                                              "example": "565398692"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "oneStep": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "oneStep": {
                                "type": "boolean",
                                "example": false,
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
                    },
                    {
                      "title": "Response for Customer Merge from Parent Org",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 10,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "r.created_on"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 5,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attribution": {
                                "type": "object",
                                "properties": {
                                  "createDate": {
                                    "type": "string",
                                    "example": "2025-03-21T11:07:56+05:30"
                                  },
                                  "createdBy": {
                                    "type": "object",
                                    "properties": {
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
                                    "example": "2025-03-21T11:07:56+05:30"
                                  }
                                }
                              },
                              "userId": {
                                "type": "integer",
                                "example": -1,
                                "default": 0
                              },
                              "changeIdentifierRequest": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 843372,
                                    "default": 0
                                  },
                                  "userId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  },
                                  "requestId": {
                                    "type": "integer",
                                    "example": 1778080,
                                    "default": 0
                                  },
                                  "changeIdentifiers": {
                                    "type": "object",
                                    "properties": {
                                      "add": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "example": "id"
                                            },
                                            "value": {
                                              "type": "string",
                                              "example": "387733529"
                                            }
                                          }
                                        }
                                      },
                                      "remove": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "example": "id"
                                            },
                                            "value": {
                                              "type": "string",
                                              "example": "387733597"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "oneStep": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "oneStep": {
                                "type": "boolean",
                                "example": false,
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
                    },
                    {
                      "title": "Response for Customer Merge from Child Org",
                      "type": "object",
                      "properties": {
                        "pagination": {
                          "type": "object",
                          "properties": {
                            "limit": {
                              "type": "integer",
                              "example": 10,
                              "default": 0
                            },
                            "offset": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "sortBy": {
                              "type": "string",
                              "example": "r.created_on"
                            },
                            "sortOrder": {
                              "type": "string",
                              "example": "DESC"
                            },
                            "total": {
                              "type": "integer",
                              "example": 3,
                              "default": 0
                            }
                          }
                        },
                        "data": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attribution": {
                                "type": "object",
                                "properties": {
                                  "createDate": {
                                    "type": "string",
                                    "example": "2025-03-21T11:00:19+05:30"
                                  },
                                  "createdBy": {
                                    "type": "object",
                                    "properties": {
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
                                    "example": "2025-03-21T11:00:19+05:30"
                                  }
                                }
                              },
                              "userId": {
                                "type": "integer",
                                "example": -1,
                                "default": 0
                              },
                              "changeIdentifierRequest": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "integer",
                                    "example": 843373,
                                    "default": 0
                                  },
                                  "userId": {
                                    "type": "integer",
                                    "example": -1,
                                    "default": 0
                                  },
                                  "requestId": {
                                    "type": "integer",
                                    "example": 1778080,
                                    "default": 0
                                  },
                                  "changeIdentifiers": {
                                    "type": "object",
                                    "properties": {
                                      "add": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "example": "id"
                                            },
                                            "value": {
                                              "type": "string",
                                              "example": "387733529"
                                            }
                                          }
                                        }
                                      },
                                      "remove": {
                                        "type": "array",
                                        "items": {
                                          "type": "object",
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "example": "id"
                                            },
                                            "value": {
                                              "type": "string",
                                              "example": "387733597"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "oneStep": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              },
                              "oneStep": {
                                "type": "boolean",
                                "example": false,
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
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/requests?requestType=TRANSACTION&requestSubType=REGULAR_TXN_ADD' \\\n--header 'Authorization: Basic bWFkaHV3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000'",
              "name": "Sample request for Transaction "
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/requests?requestType=CHANGE_IDENTIFIER&requestSubType=MERGE' \\\n--header 'Authorization: Basic bWFkaHVzI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000'",
              "name": "Sample request for Customer Merge"
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/requests?requestType=CHANGE_IDENTIFIER&requestSubType=MERGE' \\\n--header 'Authorization: Basic YXV0bJkMjM0Yjcw'",
              "name": "Sample request for Customer Merge from Parent Org"
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/requests?requestType=CHANGE_IDENTIFIER&requestSubType=MERGE' \\\n--header 'Authorization: Basic YXV0bNTJkMjM0Yjcw'",
              "name": "Sample request for Customer Merge from Child Org"
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