> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Retrieve group slab/tier log history

This API enables you to retrieve group's tier log history.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

`{host}/v2/userGroup2/slabHistory?fleetGroupId={value}`

# Query parameters

| Parameter    | Type    | Description                                                                                      |
| ------------ | ------- | ------------------------------------------------------------------------------------------------ |
| fleetGroupId | String  | Defines the fleet group id.                                                                      |
| startDate    | Date    | Filter results where transaction\_date < end\_date. Enter the date in ISO standard date format.  |
| endDate      | Date    | Filter results where transaction\_date < end\_date. Enter the date in ISO standard date format.  |
| pageSize     | Integer | Defines the maximum number of results that should be displayed. This should be a positive value. |

You can then fill in the table with the relevant information based on the response you receive from executing the cURL command.

# Response parameters

| Parameter              | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| data                   | An array containing the details of the changes made to the slabs. |
| data.fromSlabNumber    | The slab number before the change.                                |
| data.toSlabNumber      | The slab number after the change.                                 |
| data.from              | The name of the slab before the change.                           |
| data.to                | The name of the slab after the change.                            |
| data.changedOn         | The date and time when the change occurred.                       |
| data.notes             | Additional notes or information about the change.                 |
| data.tillId            | The ID of the till associated with the change.                    |
| data.store             | An object containing details about the store.                     |
| data.store.id          | The ID of the store.                                              |
| data.store.code        | The code of the store.                                            |
| data.store.description | The description of the store.                                     |
| data.store.name        | The name of the store.                                            |
| data.store.type        | The type of the store.                                            |
| data.store.adminType   | The administrative type of the store.                             |
| data.store.isOrgUnit   | Indicates if the store is an organization unit.                   |
| data.type              | The type of change (e.g., "RENEW", "UPGRADE", "DOWNGRADE").       |
| data.programId         | The ID of the program associated with the change.                 |
| pagination             | An object containing pagination information.                      |
| pagination.limit       | The maximum number of records per page.                           |
| pagination.offset      | The offset of the records in the current page.                    |
| pagination.total       | The total number of records available.                            |
| warnings               | An array containing any warning messages.                         |

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
    "/userGroup2/slabHistory": {
      "get": {
        "summary": "Retrieve group slab/tier log history",
        "description": "This API enables you to retrieve group's tier log history.",
        "operationId": "retrieve-group-tier-log-history",
        "parameters": [
          {
            "name": "fleetGroupId",
            "in": "query",
            "description": "Defines the fleet group id.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "Filter results where transaction_date >= startDate. Enter the date in ISO standard date format.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "Filter results where transaction_date < end_date. Enter the date in ISO standard date format.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "pageSize",
            "in": "query",
            "description": "Defines the maximum number of results that should be displayed. This should be a positive value.",
            "schema": {
              "type": "integer",
              "format": "int32"
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
                    "value": "{\n    \"data\": [\n        {\n            \"fromSlabNumber\": 6,\n            \"toSlabNumber\": 6,\n            \"from\": \"Signature\",\n            \"to\": \"Signature\",\n            \"changedOn\": \"2022-12-01T02:30:00+05:30\",\n            \"notes\": \"points_engine_tier_downgrade visits: 0 purchase: 0.0\",\n            \"tillId\": 13027245,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"RENEW\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 6,\n            \"toSlabNumber\": 6,\n            \"from\": \"Signature\",\n            \"to\": \"Signature\",\n            \"changedOn\": \"2022-11-01T02:30:03+05:30\",\n            \"notes\": \"points_engine_tier_downgrade visits: 0 purchase: 0.0\",\n            \"tillId\": 13027245,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"RENEW\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 6,\n            \"toSlabNumber\": 6,\n            \"from\": \"Signature\",\n            \"to\": \"Signature\",\n            \"changedOn\": \"2022-10-01T02:30:07+05:30\",\n            \"notes\": \"points_engine_tier_downgrade visits: 0 purchase: 0.0\",\n            \"tillId\": 13027245,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"RENEW\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 6,\n            \"toSlabNumber\": 6,\n            \"from\": \"Signature\",\n            \"to\": \"Signature\",\n            \"changedOn\": \"2022-09-01T02:30:03+05:30\",\n            \"notes\": \"points_engine_tier_downgrade visits: 0 purchase: 0.0\",\n            \"tillId\": 13027245,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"RENEW\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 5,\n            \"toSlabNumber\": 6,\n            \"from\": \"PlatinumPlus\",\n            \"to\": \"Signature\",\n            \"changedOn\": \"2022-08-05T17:29:16+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[6]: Name [Signature] Description [Signature] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 4,\n            \"toSlabNumber\": 5,\n            \"from\": \"Platinum\",\n            \"to\": \"PlatinumPlus\",\n            \"changedOn\": \"2022-08-02T12:57:10+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[5]: Name [PlatinumPlus] Description [Slab 5] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 3,\n            \"toSlabNumber\": 4,\n            \"from\": \"Gold\",\n            \"to\": \"Platinum\",\n            \"changedOn\": \"2022-08-01T16:44:21+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[4]: Name [Platinum] Description [Slab 4] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 2,\n            \"toSlabNumber\": 3,\n            \"from\": \"Silver\",\n            \"to\": \"Gold\",\n            \"changedOn\": \"2022-08-01T12:34:38+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[3]: Name [Gold] Description [Third] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 1,\n            \"toSlabNumber\": 2,\n            \"from\": \"Blue\",\n            \"to\": \"Silver\",\n            \"changedOn\": \"2022-08-01T12:08:24+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[2]: Name [Silver] Description [Second] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 6,\n            \"toSlabNumber\": 1,\n            \"from\": \"Signature\",\n            \"to\": \"Blue\",\n            \"changedOn\": \"2022-08-01T02:30:06+05:30\",\n            \"notes\": \"points_engine_tier_downgrade visits: 28 purchase: 97347867.400\",\n            \"tillId\": 13027245,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"DOWNGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 5,\n            \"toSlabNumber\": 6,\n            \"from\": \"PlatinumPlus\",\n            \"to\": \"Signature\",\n            \"changedOn\": \"2022-07-07T17:28:24+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[6]: Name [Signature] Description [Signature] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 4,\n            \"toSlabNumber\": 5,\n            \"from\": \"Platinum\",\n            \"to\": \"PlatinumPlus\",\n            \"changedOn\": \"2022-07-02T16:29:16+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[5]: Name [PlatinumPlus] Description [Slab 5] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 3,\n            \"toSlabNumber\": 4,\n            \"from\": \"Gold\",\n            \"to\": \"Platinum\",\n            \"changedOn\": \"2022-07-01T12:57:34+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[4]: Name [Platinum] Description [Slab 4] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 2,\n            \"toSlabNumber\": 3,\n            \"from\": \"Silver\",\n            \"to\": \"Gold\",\n            \"changedOn\": \"2022-07-01T12:48:26+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[3]: Name [Gold] Description [Third] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 1,\n            \"toSlabNumber\": 2,\n            \"from\": \"Blue\",\n            \"to\": \"Silver\",\n            \"changedOn\": \"2022-07-01T12:27:00+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[2]: Name [Silver] Description [Second] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 6,\n            \"toSlabNumber\": 1,\n            \"from\": \"Signature\",\n            \"to\": \"Blue\",\n            \"changedOn\": \"2022-07-01T02:30:00+05:30\",\n            \"notes\": \"points_engine_tier_downgrade visits: 29 purchase: 102555309.380\",\n            \"tillId\": 13027245,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"DOWNGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 5,\n            \"toSlabNumber\": 6,\n            \"from\": \"PlatinumPlus\",\n            \"to\": \"Signature\",\n            \"changedOn\": \"2022-06-04T13:57:32+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[6]: Name [Signature] Description [Signature] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 4,\n            \"toSlabNumber\": 5,\n            \"from\": \"Platinum\",\n            \"to\": \"PlatinumPlus\",\n            \"changedOn\": \"2022-06-02T10:18:00+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[5]: Name [PlatinumPlus] Description [Slab 5] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 3,\n            \"toSlabNumber\": 4,\n            \"from\": \"Gold\",\n            \"to\": \"Platinum\",\n            \"changedOn\": \"2022-06-01T16:21:07+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[4]: Name [Platinum] Description [Slab 4] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        },\n        {\n            \"fromSlabNumber\": 1,\n            \"toSlabNumber\": 3,\n            \"from\": \"Blue\",\n            \"to\": \"Gold\",\n            \"changedOn\": \"2022-06-01T15:52:53+05:30\",\n            \"notes\": \"Upgrading to Slab : Slab[3]: Name [Gold] Description [Third] , Criteria: Primary\",\n            \"tillId\": 13384512,\n            \"store\": {\n                \"id\": 13027244,\n                \"code\": \"prod.bpcl.smartfleet\",\n                \"description\": \"prod.bpcl.smartfleet\",\n                \"name\": \"prodbpclsmartfleet\",\n                \"type\": \"STORE\",\n                \"adminType\": \"GENERAL\",\n                \"isOrgUnit\": false\n            },\n            \"type\": \"UPGRADE\",\n            \"programId\": 1949\n        }\n    ],\n    \"pagination\": {\n        \"limit\": 20,\n        \"offset\": 0,\n        \"total\": 32\n    },\n    \"warnings\": []\n}"
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
                          "fromSlabNumber": {
                            "type": "integer",
                            "example": 6,
                            "default": 0
                          },
                          "toSlabNumber": {
                            "type": "integer",
                            "example": 6,
                            "default": 0
                          },
                          "from": {
                            "type": "string",
                            "example": "Signature"
                          },
                          "to": {
                            "type": "string",
                            "example": "Signature"
                          },
                          "changedOn": {
                            "type": "string",
                            "example": "2022-12-01T02:30:00+05:30"
                          },
                          "notes": {
                            "type": "string",
                            "example": "points_engine_tier_downgrade visits: 0 purchase: 0.0"
                          },
                          "tillId": {
                            "type": "integer",
                            "example": 13027245,
                            "default": 0
                          },
                          "store": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 13027244,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "prod.bpcl.smartfleet"
                              },
                              "description": {
                                "type": "string",
                                "example": "prod.bpcl.smartfleet"
                              },
                              "name": {
                                "type": "string",
                                "example": "prodbpclsmartfleet"
                              },
                              "type": {
                                "type": "string",
                                "example": "STORE"
                              },
                              "adminType": {
                                "type": "string",
                                "example": "GENERAL"
                              },
                              "isOrgUnit": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "type": {
                            "type": "string",
                            "example": "RENEW"
                          },
                          "programId": {
                            "type": "integer",
                            "example": 1949,
                            "default": 0
                          }
                        }
                      }
                    },
                    "pagination": {
                      "type": "object",
                      "properties": {
                        "limit": {
                          "type": "integer",
                          "example": 20,
                          "default": 0
                        },
                        "offset": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "total": {
                          "type": "integer",
                          "example": 32,
                          "default": 0
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
              "code": "curl --location 'https://apac.api.capillarytech.com/v2/userGroup2/slabHistory?fleetGroupId=11421' \\\n--header 'X-CAP-API-OAUTH-TOKEN: eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE2ODc3NjUxMzUsImp0aSI6IktBM0R6dHd6VGFyemozb1pYOWtNQ3ciLCJpYXQiOjE2ODc3NjE1MzUsInN1YiI6Ik5lZXIiLCJjbGllbnRfaWQiOjg5NDYsIm9yZ19pZCI6MjAxOCwidG9rZW5fdXNlIjoidG9rZW5fYWNjZXNzIiwiY2xpZW50X2tleSI6IlJGc1NaYVB2amZkMENxejJ4UzZaZjlrR2QiLCJkZWZhdWx0X3RpbGwiOjEzNDA5MDYzLCJzY29wZXMiOiJbXSJ9.SGjn0TP8e54RcXrykuljsgrYRXf2YJsH9bgtG5mF8ciPhBlNM6zT1M7DmNpai1eUFkcEVvVHVL2OWZ9zrDMWlhsJ-6fhuiM-rYGqUWB844JK7YUqStHd3ByLGS1b7K9-j_jROtCC16oXW6mMrwMC3US41s24MAgI9L43zy6CjKmJrClsf90ziMohmEjAzrdOw5Iqp6Z25M3r6OGAgfsOJx6gchJH2BBS6_FnPwBI9ELGATkjqeQ8GjlFkDchv4GdgE7w1SCfzbSyeF5VbaVLRLnhl7IZepZ0r4jVovfMfj95HEfVr2wRfyl_zVorhpC63J0ACEhbdn16BE9LtiuyhQ'",
              "name": "Sample cURL with fleetgroupid"
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