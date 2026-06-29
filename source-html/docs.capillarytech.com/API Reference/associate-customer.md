> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Associate Customer

Lets you batch register customers, or associate a customer with company or hierarchy. This API registers parent and child customers (if not registered), and associates the customer with hierarchy code, company role, parent and child customers.

> 📘 Batch support is for normal customer registration

# Example request

```json Register mutliple coustomers and associate with a fleet
 curl -L 'https://eu.api.capillarytech.com/v2/customers/bulk?source=INSTORE' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Basic bmFtYW5fZG9jOmEzY' \
-H 'Cookie: _cfuvid=nAfguio5PXQ6zxSX8B_GPBt_GJsUWoHZKt0fFxRpkvE-1773126986434-0.0.1.1-604800000' \
-d '[
    {
        "profiles": [
            {
                "firstName": "Rajesh",
                "lastName": "Sharma",
                "source": "INSTORE",
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "919998872122"
                    }
                ]
            }
        ],
        "loyaltyInfo": {
            "loyaltyType": "loyalty"
        },
        "associationDetails": {
            "hierarchyCode": "SIL0101",
            "roleCode": "CEO",
            "fleetCompany": {
                "name": "C Company",
                "hierarchyDefinitionCode": "SIL0101",
                "externalId": "dc_123"
            }
        }
    },
    {
        "profiles": [
            {
                "firstName": "Priya",
                "lastName": "Verma",
                "source": "INSTORE",
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "919998872123"
                    }
                ]
            }
        ],
        "loyaltyInfo": {
            "loyaltyType": "loyalty"
        },
        "associationDetails": {
            "hierarchyCode": "SIL0101",
            "roleCode": "Zonal_Manager",
            "fleetCompany": {
                "name": "C Company",
                "hierarchyDefinitionCode": "SIL0101",
                "externalId": "dc_123"
            }
        }
    },
    {
        "profiles": [
            {
                "firstName": "Amit",
                "lastName": "Patel",
                "source": "INSTORE",
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "919998872124"
                    }
                ]
            }
        ],
        "loyaltyInfo": {
            "loyaltyType": "loyalty"
        },
        "associationDetails": {
            "hierarchyCode": "SIL0101",
            "roleCode": "City_Manager",
            "fleetCompany": {
                "name": "C Company",
                "hierarchyDefinitionCode": "SIL0101",
                "externalId": "dc_123"
            }
        }
    },
    {
        "profiles": [
            {
                "firstName": "Sunita",
                "lastName": "Reddy",
                "source": "INSTORE",
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "919998872125"
                    }
                ]
            }
        ],
        "loyaltyInfo": {
            "loyaltyType": "loyalty"
        },
        "associationDetails": {
            "hierarchyCode": "SIL0101",
            "roleCode": "Associate",
            "fleetCompany": {
                "name": "C Company",
                "hierarchyDefinitionCode": "SIL0101",
                "externalId": "dc_123"
            }
        }
    },
    {
        "profiles": [
            {
                "firstName": "Vikram",
                "lastName": "Singh",
                "source": "INSTORE",
                "identifiers": [
                    {
                        "type": "mobile",
                        "value": "919998872126"
                    }
                ]
            }
        ],
        "loyaltyInfo": {
            "loyaltyType": "loyalty"
        },
        "associationDetails": {
            "hierarchyCode": "SIL0101",
            "roleCode": "Drivers",
            "fleetCompany": {
                "name": "C Company",
                "hierarchyDefinitionCode": "SIL0101",
                "externalId": "dc_123"
            }
        }
    }
]'
```

<br />

# Request Body Parameters

| Parameter      | Type      | Description                                                                                                                                               |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loyaltyType    | enum      | Loyalty status of the customer.                                                                                                                           |
| profiles       | obj       | Meta information of the customer.                                                                                                                         |
| identifiers    | obj       | Identifiers of the customer in type and value.                                                                                                            |
| type           | enum      | Type of the customer identifier. .                                                                                                                        |
| value          | string    | Value of the specified identifier.                                                                                                                        |
| seriesId       | int       | Card series ID (for card series generated in Capillary). .                                                                                                |
| seriesCode     | string    | Unique card series code (for external card series).                                                                                                       |
| statusLabel    | string    | User defined card status.                                                                                                                                 |
| lastViewedDate | Date      | Date when the customer recently opened the app.                                                                                                           |
| hierarchyCode  | string    | Unique code of the hierarchy to associate with the customer/company. All configurations set for the hierarchy will be applicable to the customer/company. |
| roleCode       | string    | Pre defined role code - Role of the customer in the hierarchy.                                                                                            |
| parentCustomer | obj       | User profile of the parent customer.                                                                                                                      |
| fleetCompany   | obj       | Details of the company the customer is associated with.                                                                                                   |
| childCustomers | obj       | Profiles of the child customers.                                                                                                                          |
| externalId     | string    | External ID of the company.                                                                                                                               |
| profiles       | obj       | Details of the customer to associate.                                                                                                                     |
| Firstname      | string    | First name of the customer.                                                                                                                               |
| Lastname       | string    | Last name of the customer.                                                                                                                                |
| identifiers    | obj       | Identifiers of the customer in type and value.                                                                                                            |
| type           | enum      | Type of the customer identifier.                                                                                                                          |
| value          | string    | Value of the specified identifier.                                                                                                                        |
| commChannels   | obj       | Available communication channels of the customer.                                                                                                         |
| createDate     | date-time | Time and date of registration in `YYYY-MM-DDTHH:MM:SS+HH:MM` format.                                                                                      |
| associatedWith | string    | The TILL code associated with the customer registration.                                                                                                  |
| extendedFields | obj       | Customer level extended field details of the customer in key:value pairs.                                                                                 |
| fields         | obj       | Custom field details of customers in key-value pairs.                                                                                                     |

# Response parameter

| Parameter              | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| id                     | Unique ID of the entity.                                                 |
| profiles               | Array of profiles associated with the entity.                            |
| firstName              | First name of the profile.                                               |
| lastName               | Last name of the profile.                                                |
| attribution            | Information about the profile's creation and modification.               |
| fields                 | Additional fields associated with the profile.                           |
| identifiers            | Array of identifiers associated with the profile.                        |
| commChannels           | Communication channels (like email, mobile) associated with the profile. |
| source                 | Source of the profile.                                                   |
| userId                 | User ID associated with the profile.                                     |
| accountId              | Account ID associated with the profile.                                  |
| conflictingProfileList | List of profiles that have conflicts.                                    |
| autoUpdateTime         | Time of automatic update of the profile.                                 |
| loyaltyInfo            | Loyalty information associated with the entity.                          |
| segments               | Segments associated with the entity.                                     |
| referralCode           | Referral code for the entity.                                            |
| associationDetails     | Details about the association of the entity.                             |
| extendedFields         | Extended fields associated with the entity.                              |
| warnings               | Array of warnings related to the entity.                                 |
| childEntities          | Array of child entities associated with the main entity.                 |
| childCount             | Total count of child entities.                                           |
| childFailureCount      | Count of child entities that failed.                                     |
| childSuccessCount      | Count of child entities that succeeded.                                  |

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
    "/customers/bulk": {
      "post": {
        "summary": "Associate Customer",
        "description": "Lets you batch register customers, or associate a customer with company or hierarchy. This API registers parent and child customers (if not registered), and associates the customer with hierarchy code, company role, parent and child customers.",
        "operationId": "associate-customer",
        "parameters": [
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
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
                "properties": {
                  "loyaltyInfo": {
                    "properties": {
                      "loyaltyType": {
                        "type": "string",
                        "enum": [
                          "loyalty",
                          "non-loyalty"
                        ]
                      }
                    },
                    "required": [],
                    "type": "object"
                  },
                  "profiles": {
                    "properties": {
                      "firstName": {
                        "type": "string"
                      },
                      "lastName": {
                        "type": "string"
                      },
                      "identifiers": {
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "mobile",
                              "email",
                              "externalId",
                              "wechat",
                              "martjackId",
                              "fbId mobile",
                              "tmall_uname",
                              "cuid",
                              "ali_uname",
                              "jd_uname",
                              "vip_uname",
                              "mobilePush",
                              "line",
                              "card"
                            ]
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "": {
                        "properties": {
                          "identifiers": {
                            "properties": {
                              "value": {
                                "type": "string"
                              },
                              "seriesId": {
                                "type": "integer",
                                "format": "int32"
                              },
                              "seriesCode": {
                                "type": "string"
                              },
                              "statusLabel": {
                                "type": "string"
                              },
                              "lastViewedDate": {
                                "type": "string",
                                "format": "date"
                              }
                            },
                            "required": [],
                            "type": "object"
                          }
                        },
                        "required": [],
                        "type": "object"
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Meta information of the customer."
                  },
                  "RAW_BODY": {
                    "type": "string",
                    "format": "json"
                  }
                }
              },
              "examples": {
                "Associate Parent with Child": {
                  "value": [
                    {
                      "profiles": [
                        {
                          "firstName": "Capillary",
                          "lastName": "Customer",
                          "identifiers": [
                            {
                              "type": "mobile",
                              "value": "917979000000"
                            },
                            {
                              "type": "cuid",
                              "value": "cuid_917979000000"
                            },
                            {
                              "type": "unionId",
                              "value": "unionId_917979000000"
                            },
                            {
                              "type": "cardnumber",
                              "cardExternalId": "carduuid_710000",
                              "value": "card_710000",
                              "seriesCode": "FleetCard1",
                              "statusLabel": "ACTIVE",
                              "extendedFields": {
                                "custom_card_name": "64346srt34532323",
                                "vehicle_number": "879976453431adsgfsf"
                              }
                            }
                          ],
                          "commChannels": [
                            {
                              "type": "mobile",
                              "value": "9020000000",
                              "primary": true,
                              "verified": true
                            },
                            {
                              "type": "email",
                              "value": "tom.sawyer@mail.com",
                              "primary": true,
                              "verified": true
                            }
                          ],
                          "fields": {
                            "gender": "MALE",
                            "city": "city0"
                          },
                          "source": "WECHAT",
                          "accountId": "WECHAT-CM"
                        }
                      ],
                      "extendedFields": {
                        "gender": "Male",
                        "city": "city_6878387"
                      },
                      "loyaltyInfo": {
                        "loyaltyType": "loyalty"
                      },
                      "referralCode": "",
                      "associationDetails": {
                        "hierarchyCode": "code-association2",
                        "roleCode": "FA",
                        "childCustomers": [
                          {
                            "profiles": [
                              {
                                "firstName": "Capillary",
                                "lastName": "Customer",
                                "identifiers": [
                                  {
                                    "type": "mobile",
                                    "value": "{{mobile2}}"
                                  },
                                  {
                                    "type": "cuid",
                                    "value": "cuid_{{mobile2}}"
                                  },
                                  {
                                    "type": "unionId",
                                    "value": "unionId_{{mobile2}}"
                                  }
                                ],
                                "commChannels": [
                                  {
                                    "type": "mobile",
                                    "value": "{{mobile2}}",
                                    "primary": true,
                                    "verified": true
                                  },
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com",
                                    "primary": true,
                                    "verified": true
                                  }
                                ],
                                "fields": {
                                  "gender": "MALE",
                                  "city": "city0"
                                },
                                "source": "WECHAT",
                                "accountId": "WECHAT-CM"
                              }
                            ],
                            "extendedFields": {
                              "gender": "Male",
                              "city": "city_6878387"
                            }
                          },
                          {
                            "profiles": [
                              {
                                "firstName": "Capillary",
                                "lastName": "Customer",
                                "identifiers": [
                                  {
                                    "type": "mobile",
                                    "value": "{{mobile3}}"
                                  },
                                  {
                                    "type": "cuid",
                                    "value": "cuid_{{mobile3}}"
                                  },
                                  {
                                    "type": "unionId",
                                    "value": "unionId_{{mobile3}}"
                                  }
                                ],
                                "commChannels": [
                                  {
                                    "type": "mobile",
                                    "value": "{{mobile3}}",
                                    "primary": true,
                                    "verified": true
                                  },
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com",
                                    "primary": true,
                                    "verified": true
                                  }
                                ],
                                "fields": {
                                  "gender": "MALE",
                                  "city": "city0"
                                },
                                "source": "WECHAT",
                                "accountId": "WECHAT-CM"
                              }
                            ],
                            "extendedFields": {
                              "gender": "Male",
                              "city": "city_6878387"
                            }
                          }
                        ],
                        "fleetCompany": {
                          "externalId": "ex917471949194"
                        },
                        "childRoleCode": "FC"
                      }
                    }
                  ]
                },
                "Associate Child with Parent ": {
                  "value": [
                    {
                      "profiles": [
                        {
                          "firstName": "Capillary",
                          "lastName": "Customer",
                          "identifiers": [
                            {
                              "type": "mobile",
                              "value": "917979000000"
                            },
                            {
                              "type": "cuid",
                              "value": "cuid_917979000000"
                            },
                            {
                              "type": "unionId",
                              "value": "unionId_917979000000"
                            },
                            {
                              "type": "cardnumber",
                              "cardExternalId": "carduuid_710000",
                              "value": "card_710000",
                              "seriesCode": "FleetCard1",
                              "statusLabel": "ACTIVE",
                              "extendedFields": {
                                "custom_card_name": "64346srt34532323",
                                "vehicle_number": "879976453431adsgfsf"
                              }
                            }
                          ],
                          "commChannels": [
                            {
                              "type": "mobile",
                              "value": "9020000000",
                              "primary": true,
                              "verified": true
                            },
                            {
                              "type": "email",
                              "value": "tom.sawyer@mail.com",
                              "primary": true,
                              "verified": true
                            }
                          ],
                          "fields": {
                            "gender": "MALE",
                            "city": "city0"
                          },
                          "source": "WECHAT",
                          "accountId": "WECHAT-CM"
                        }
                      ],
                      "extendedFields": {
                        "gender": "Male",
                        "city": "city_6878387"
                      },
                      "loyaltyInfo": {
                        "loyaltyType": "loyalty"
                      },
                      "referralCode": "",
                      "associationDetails": {
                        "hierarchyCode": "code-association2",
                        "roleCode": "FC",
                        "parentCustomer": {
                          "profiles": [
                            {
                              "firstName": "慧慧",
                              "lastName": "慧慧",
                              "identifiers": [
                                {
                                  "type": "mobile",
                                  "value": "917875000000"
                                },
                                {
                                  "type": "cuid",
                                  "value": "cuid_917875000000"
                                },
                                {
                                  "type": "unionId",
                                  "value": "unionId_917875000000"
                                }
                              ],
                              "commChannels": [
                                {
                                  "type": "mobile",
                                  "value": "917685000000",
                                  "primary": true,
                                  "verified": true
                                },
                                {
                                  "type": "email",
                                  "value": "tom.sawyer@capillarytech.com",
                                  "primary": true,
                                  "verified": true
                                }
                              ],
                              "source": "WECHAT",
                              "accountId": "WECHAT-CM"
                            }
                          ],
                          "extendedFields": {
                            "gender": "Male",
                            "city": "city_6878387"
                          }
                        },
                        "fleetCompany": {
                          "externalId": "ex91747000000"
                        }
                      }
                    }
                  ]
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
                  "Sample Response": {
                    "value": "[\n   {\n      \"entity\":{\n         \"id\":409966467,\n         \"profiles\":[\n            {\n               \"firstName\":\"Capillary\",\n               \"lastName\":\"Customer\",\n               \"attribution\":{\n                  \"createDate\":\"2021-07-30T11:25:21+05:30\",\n                  \"createdBy\":{\n                     \"id\":15071481,\n                     \"code\":\"cm.1\",\n                     \"description\":\"\",\n                     \"name\":\"cm.1\",\n                     \"type\":\"TILL\",\n                     \"adminType\":\"GENERAL\",\n                     \"isActive\":true,\n                     \"isOuEnabled\":true,\n                     \"timeZoneId\":0,\n                     \"currencyId\":95,\n                     \"languageId\":-1\n                  },\n                  \"modifiedBy\":{\n                     \"id\":15071481,\n                     \"code\":\"cm.1\",\n                     \"description\":\"\",\n                     \"name\":\"cm.1\",\n                     \"type\":\"TILL\",\n                     \"adminType\":\"GENERAL\",\n                     \"isActive\":true,\n                     \"isOuEnabled\":true,\n                     \"timeZoneId\":0,\n                     \"currencyId\":95,\n                     \"languageId\":-1\n                  },\n                  \"modifiedDate\":\"2021-07-30T11:25:21+05:30\"\n               },\n               \"fields\":{\n                  \"gender\":\"MALE\"\n               },\n               \"identifiers\":[\n                  {\n                     \"type\":\"mobile\",\n                     \"value\":\"917979015462\"\n                  },\n                  {\n                     \"type\":\"cuid\",\n                     \"value\":\"cuid_917979015462\"\n                  },\n                  {\n                     \"type\":\"cardnumber\",\n                     \"value\":\"card_917979015462\",\n                     \"seriesCode\":\"FleetCard1\",\n                     \"statusLabel\":\"ACTIVE\",\n                     \"cardExternalId\":\"carduuid_917979015462\",\n                     \"extendedFields\":{\n                        \"custom_card_name\":\"64346srt34532323\",\n                        \"vehicle_number\":\"879976453431adsgfsf\"\n                     }\n                  },\n                  {\n                     \"type\":\"unionId\",\n                     \"value\":\"unionId_917979000000\"\n                  }\n               ],\n               \"commChannels\":[\n                  {\n                     \"type\":\"mobile\",\n                     \"value\":\"917979000000\",\n                     \"primary\":true,\n                     \"verified\":true,\n                     \"meta\":{\n                        \"residence\":false,\n                        \"office\":false\n                     },\n                     \"attributes\":{\n\n                     }\n                  },\n                  {\n                     \"type\":\"email\",\n                     \"value\":\"tom.sawyer@capillarytech.com\",\n                     \"primary\":true,\n                     \"verified\":true,\n                     \"meta\":{\n                        \"residence\":false,\n                        \"office\":false\n                     },\n                     \"attributes\":{\n\n                     }\n                  }\n               ],\n               \"source\":\"WECHAT\",\n               \"userId\":409966467,\n               \"accountId\":\"WECHAT-CM\",\n               \"conflictingProfileList\":[\n\n               ],\n               \"autoUpdateTime\":\"2021-07-30T11:25:21+05:30\",\n               \"identifiersAll\":[\n                  {\n                     \"type\":\"mobile\",\n                     \"value\":\"917979015462\"\n                  },\n                  {\n                     \"type\":\"cuid\",\n                     \"value\":\"cuid_917979015462\"\n                  },\n                  {\n                     \"type\":\"cardnumber\",\n                     \"value\":\"card_917979015462\",\n                     \"seriesCode\":\"FleetCard1\",\n                     \"statusLabel\":\"ACTIVE\",\n                     \"cardExternalId\":\"carduuid_917979015462\",\n                     \"extendedFields\":{\n                        \"custom_card_name\":\"64346srt34532323\",\n                        \"vehicle_number\":\"879976453431adsgfsf\"\n                     }\n                  },\n                  {\n                     \"type\":\"unionId\",\n                     \"value\":\"unionId_917979015462\"\n                  }\n               ]\n            }\n         ],\n         \"loyaltyInfo\":{\n            \"loyaltyType\":\"loyalty\"\n         },\n         \"segments\":{\n\n         },\n         \"referralCode\":\"\",\n         \"associationDetails\":{\n            \"hierarchyCode\":\"code-association2\",\n            \"hierarchyId\":21,\n            \"roleCode\":\"FA\",\n            \"childCustomers\":[\n               {\n                  \"profiles\":[\n                     {\n                        \"firstName\":\"Capillary\",\n                        \"lastName\":\"Customer\",\n                        \"attribution\":{\n                           \"createDate\":\"2021-07-30T11:25:21+05:30\",\n                           \"createdBy\":{\n                              \"id\":15071481,\n                              \"code\":\"cm.1\",\n                              \"description\":\"\",\n                              \"name\":\"cm.1\",\n                              \"type\":\"TILL\",\n                              \"adminType\":\"GENERAL\",\n                              \"isActive\":true,\n                              \"isOuEnabled\":true,\n                              \"timeZoneId\":0,\n                              \"currencyId\":95,\n                              \"languageId\":-1\n                           },\n                           \"modifiedBy\":{\n                              \"id\":15071481,\n                              \"code\":\"cm.1\",\n                              \"description\":\"\",\n                              \"name\":\"cm.1\",\n                              \"type\":\"TILL\",\n                              \"adminType\":\"GENERAL\",\n                              \"isActive\":true,\n                              \"isOuEnabled\":true,\n                              \"timeZoneId\":0,\n                              \"currencyId\":95,\n                              \"languageId\":-1\n                           },\n                           \"modifiedDate\":\"2021-07-30T11:25:21+05:30\"\n                        },\n                        \"fields\":{\n                           \"gender\":\"MALE\"\n                        },\n                        \"identifiers\":[\n                           {\n                              \"type\":\"cuid\",\n                              \"value\":\"cuid_91553000000\"\n                           },\n                           {\n                              \"type\":\"unionId\",\n                              \"value\":\"unionId_91553000000\"\n                           },\n                           {\n                              \"type\":\"cardnumber\",\n                              \"value\":\"regcm0000000000182412\"\n                           }\n                        ],\n                        \"commChannels\":[\n                           {\n                              \"type\":\"email\",\n                              \"value\":\"tom.sawyer@capillarytech.com\",\n                              \"primary\":true,\n                              \"verified\":true,\n                              \"meta\":{\n                                 \"residence\":false,\n                                 \"office\":false\n                              },\n                              \"attributes\":{\n\n                              }\n                           }\n                        ],\n                        \"source\":\"WECHAT\",\n                        \"userId\":409966468,\n                        \"accountId\":\"WECHAT-CM\",\n                        \"conflictingProfileList\":[\n\n                        ],\n                        \"autoUpdateTime\":\"2021-07-30T11:25:21+05:30\",\n                        \"identifiersAll\":[\n                           {\n                              \"type\":\"cuid\",\n                              \"value\":\"cuid_91553000000\"\n                           },\n                           {\n                              \"type\":\"unionId\",\n                              \"value\":\"unionId_91553000000\"\n                           },\n                           {\n                              \"type\":\"cardnumber\",\n                              \"value\":\"regcm0000000000182412\"\n                           }\n                        ]\n                     }\n                  ],\n                  \"extendedFields\":{\n                     \"city\":\"city_6878387\",\n                     \"gender\":\"Male\"\n                  }\n               },\n               {\n                  \"profiles\":[\n                     {\n                        \"firstName\":\"Capillary\",\n                        \"lastName\":\"Customer\",\n                        \"attribution\":{\n                           \"createDate\":\"2021-07-30T11:25:21+05:30\",\n                           \"createdBy\":{\n                              \"id\":15071481,\n                              \"code\":\"cm.1\",\n                              \"description\":\"\",\n                              \"name\":\"cm.1\",\n                              \"type\":\"TILL\",\n                              \"adminType\":\"GENERAL\",\n                              \"isActive\":true,\n                              \"isOuEnabled\":true,\n                              \"timeZoneId\":0,\n                              \"currencyId\":95,\n                              \"languageId\":-1\n                           },\n                           \"modifiedBy\":{\n                              \"id\":15071481,\n                              \"code\":\"cm.1\",\n                              \"description\":\"\",\n                              \"name\":\"cm.1\",\n                              \"type\":\"TILL\",\n                              \"adminType\":\"GENERAL\",\n                              \"isActive\":true,\n                              \"isOuEnabled\":true,\n                              \"timeZoneId\":0,\n                              \"currencyId\":95,\n                              \"languageId\":-1\n                           },\n                           \"modifiedDate\":\"2021-07-30T11:25:21+05:30\"\n                        },\n                        \"fields\":{\n                           \"gender\":\"MALE\"\n                        },\n                        \"identifiers\":[\n                           {\n                              \"type\":\"mobile\",\n                              \"value\":\"916894126424\"\n                           },\n                           {\n                              \"type\":\"cuid\",\n                              \"value\":\"cuid_916894126424\"\n                           },\n                           {\n                              \"type\":\"cardnumber\",\n                              \"value\":\"regcm0000000000182413\"\n                           },\n                           {\n                              \"type\":\"unionId\",\n                              \"value\":\"unionId_916894126424\"\n                           }\n                        ],\n                        \"commChannels\":[\n                           {\n                              \"type\":\"email\",\n                              \"value\":\"tom.sawyer@capillarytech.com\",\n                              \"primary\":true,\n                              \"verified\":true,\n                              \"meta\":{\n                                 \"residence\":false,\n                                 \"office\":false\n                              },\n                              \"attributes\":{\n\n                              }\n                           },\n                           {\n                              \"type\":\"mobile\",\n                              \"value\":\"916894126424\",\n                              \"primary\":true,\n                              \"verified\":true,\n                              \"meta\":{\n                                 \"residence\":false,\n                                 \"office\":false\n                              },\n                              \"attributes\":{\n\n                              }\n                           }\n                        ],\n                        \"source\":\"WECHAT\",\n                        \"userId\":409966469,\n                        \"accountId\":\"WECHAT-CM\",\n                        \"conflictingProfileList\":[\n\n                        ],\n                        \"autoUpdateTime\":\"2021-07-30T11:25:21+05:30\",\n                        \"identifiersAll\":[\n                           {\n                              \"type\":\"mobile\",\n                              \"value\":\"916894126424\"\n                           },\n                           {\n                              \"type\":\"cuid\",\n                              \"value\":\"cuid_916894126424\"\n                           },\n                           {\n                              \"type\":\"cardnumber\",\n                              \"value\":\"regcm0000000000182413\"\n                           },\n                           {\n                              \"type\":\"unionId\",\n                              \"value\":\"unionId_916894126424\"\n                           }\n                        ]\n                     }\n                  ],\n                  \"extendedFields\":{\n                     \"city\":\"city_6878387\",\n                     \"gender\":\"Male\"\n                  }\n               }\n            ],\n            \"fleetCompany\":{\n               \"externalId\":\"ex917471949194\",\n               \"companyId\":71\n            },\n            \"childRoleCode\":\"FC\",\n            \"skipLevelAllowed\":false,\n            \"new\":true,\n            \"childCustomer\":false\n         },\n         \"extendedFields\":{\n            \"city\":\"city_6878387\",\n            \"gender\":\"Male\"\n         },\n         \"warnings\":[\n            {\n               \"status\":false,\n               \"code\":19223,\n               \"message\":\"Points processing failed\"\n            }\n         ]\n      },\n      \"childEntities\":[\n         {\n            \"id\":409966468,\n            \"profiles\":[\n               {\n                  \"firstName\":\"Capillary\",\n                  \"lastName\":\"Customer\",\n                  \"attribution\":{\n                     \"createDate\":\"2021-07-30T11:25:21+05:30\",\n                     \"createdBy\":{\n                        \"id\":15071481,\n                        \"code\":\"cm.1\",\n                        \"description\":\"\",\n                        \"name\":\"cm.1\",\n                        \"type\":\"TILL\",\n                        \"adminType\":\"GENERAL\",\n                        \"isActive\":true,\n                        \"isOuEnabled\":true,\n                        \"timeZoneId\":0,\n                        \"currencyId\":95,\n                        \"languageId\":-1\n                     },\n                     \"modifiedBy\":{\n                        \"id\":15071481,\n                        \"code\":\"cm.1\",\n                        \"description\":\"\",\n                        \"name\":\"cm.1\",\n                        \"type\":\"TILL\",\n                        \"adminType\":\"GENERAL\",\n                        \"isActive\":true,\n                        \"isOuEnabled\":true,\n                        \"timeZoneId\":0,\n                        \"currencyId\":95,\n                        \"languageId\":-1\n                     },\n                     \"modifiedDate\":\"2021-07-30T11:25:21+05:30\"\n                  },\n                  \"fields\":{\n                     \"gender\":\"MALE\"\n                  },\n                  \"identifiers\":[\n                     {\n                        \"type\":\"cuid\",\n                        \"value\":\"cuid_91553015360\"\n                     },\n                     {\n                        \"type\":\"unionId\",\n                        \"value\":\"unionId_91553015360\"\n                     },\n                     {\n                        \"type\":\"cardnumber\",\n                        \"value\":\"regcm0000000000182412\"\n                     }\n                  ],\n                  \"commChannels\":[\n                     {\n                        \"type\":\"email\",\n                        \"value\":\"tom.sawyer@capillarytech.com\",\n                        \"primary\":true,\n                        \"verified\":true,\n                        \"meta\":{\n                           \"residence\":false,\n                           \"office\":false\n                        },\n                        \"attributes\":{\n\n                        }\n                     }\n                  ],\n                  \"source\":\"WECHAT\",\n                  \"userId\":409966468,\n                  \"accountId\":\"WECHAT-CM\",\n                  \"conflictingProfileList\":[\n\n                  ],\n                  \"autoUpdateTime\":\"2021-07-30T11:25:21+05:30\",\n                  \"identifiersAll\":[\n                     {\n                        \"type\":\"cuid\",\n                        \"value\":\"cuid_91553015360\"\n                     },\n                     {\n                        \"type\":\"unionId\",\n                        \"value\":\"unionId_91553015360\"\n                     },\n                     {\n                        \"type\":\"cardnumber\",\n                        \"value\":\"regcm0000000000182412\"\n                     }\n                  ]\n               }\n            ],\n            \"loyaltyInfo\":{\n               \"loyaltyType\":\"loyalty\"\n            },\n            \"segments\":{\n\n            },\n            \"associationDetails\":{\n               \"hierarchyId\":21,\n               \"roleCode\":\"FC\",\n               \"fleetCompany\":{\n                  \"externalId\":\"ex917471949194\",\n                  \"companyId\":71\n               },\n               \"parentRoleId\":83,\n               \"skipLevelAllowed\":false,\n               \"new\":true,\n               \"childCustomer\":true\n            },\n            \"extendedFields\":{\n               \"city\":\"city_6878387\",\n               \"gender\":\"Male\"\n            },\n            \"warnings\":[\n               {\n                  \"status\":false,\n                  \"code\":8056,\n                  \"message\":\"Invalid mobile\"\n               },\n               {\n                  \"status\":false,\n                  \"code\":8058,\n                  \"message\":\"Invalid mobile in comm channel\"\n               },\n               {\n                  \"status\":false,\n                  \"code\":19223,\n                  \"message\":\"Points processing failed\"\n               }\n            ]\n         },\n         {\n            \"id\":409966469,\n            \"profiles\":[\n               {\n                  \"firstName\":\"Capillary\",\n                  \"lastName\":\"Customer\",\n                  \"attribution\":{\n                     \"createDate\":\"2021-07-30T11:25:21+05:30\",\n                     \"createdBy\":{\n                        \"id\":15071481,\n                        \"code\":\"cm.1\",\n                        \"description\":\"\",\n                        \"name\":\"cm.1\",\n                        \"type\":\"TILL\",\n                        \"adminType\":\"GENERAL\",\n                        \"isActive\":true,\n                        \"isOuEnabled\":true,\n                        \"timeZoneId\":0,\n                        \"currencyId\":95,\n                        \"languageId\":-1\n                     },\n                     \"modifiedBy\":{\n                        \"id\":15071481,\n                        \"code\":\"cm.1\",\n                        \"description\":\"\",\n                        \"name\":\"cm.1\",\n                        \"type\":\"TILL\",\n                        \"adminType\":\"GENERAL\",\n                        \"isActive\":true,\n                        \"isOuEnabled\":true,\n                        \"timeZoneId\":0,\n                        \"currencyId\":95,\n                        \"languageId\":-1\n                     },\n                     \"modifiedDate\":\"2021-07-30T11:25:21+05:30\"\n                  },\n                  \"fields\":{\n                     \"gender\":\"MALE\"\n                  },\n                  \"identifiers\":[\n                     {\n                        \"type\":\"mobile\",\n                        \"value\":\"916894126424\"\n                     },\n                     {\n                        \"type\":\"cuid\",\n                        \"value\":\"cuid_916894126424\"\n                     },\n                     {\n                        \"type\":\"cardnumber\",\n                        \"value\":\"regcm0000000000182413\"\n                     },\n                     {\n                        \"type\":\"unionId\",\n                        \"value\":\"unionId_916894126424\"\n                     }\n                  ],\n                  \"commChannels\":[\n                     {\n                        \"type\":\"email\",\n                        \"value\":\"tom.sawyer@capillarytech.com\",\n                        \"primary\":true,\n                        \"verified\":true,\n                        \"meta\":{\n                           \"residence\":false,\n                           \"office\":false\n                        },\n                        \"attributes\":{\n\n                        }\n                     },\n                     {\n                        \"type\":\"mobile\",\n                        \"value\":\"916894126424\",\n                        \"primary\":true,\n                        \"verified\":true,\n                        \"meta\":{\n                           \"residence\":false,\n                           \"office\":false\n                        },\n                        \"attributes\":{\n\n                        }\n                     }\n                  ],\n                  \"source\":\"WECHAT\",\n                  \"userId\":409966469,\n                  \"accountId\":\"WECHAT-CM\",\n                  \"conflictingProfileList\":[\n\n                  ],\n                  \"autoUpdateTime\":\"2021-07-30T11:25:21+05:30\",\n                  \"identifiersAll\":[\n                     {\n                        \"type\":\"mobile\",\n                        \"value\":\"916894126424\"\n                     },\n                     {\n                        \"type\":\"cuid\",\n                        \"value\":\"cuid_916894126424\"\n                     },\n                     {\n                        \"type\":\"cardnumber\",\n                        \"value\":\"regcm0000000000182413\"\n                     },\n                     {\n                        \"type\":\"unionId\",\n                        \"value\":\"unionId_916894126424\"\n                     }\n                  ]\n               }\n            ],\n            \"loyaltyInfo\":{\n               \"loyaltyType\":\"loyalty\"\n            },\n            \"segments\":{\n\n            },\n            \"associationDetails\":{\n               \"hierarchyId\":21,\n               \"roleCode\":\"FC\",\n               \"fleetCompany\":{\n                  \"externalId\":\"ex9174710000\",\n                  \"companyId\":71\n               },\n               \"parentRoleId\":83,\n               \"skipLevelAllowed\":false,\n               \"new\":true,\n               \"childCustomer\":true\n            },\n            \"extendedFields\":{\n               \"city\":\"city_6878387\",\n               \"gender\":\"Male\"\n            },\n            \"warnings\":[\n               {\n                  \"status\":false,\n                  \"code\":19223,\n                  \"message\":\"Points processing failed\"\n               }\n            ]\n         }\n      ],\n      \"childCount\":2,\n      \"childFailureCount\":0,\n      \"childSuccessCount\":2\n   }\n]"
                  }
                },
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "entity": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 409966467,
                            "default": 0
                          },
                          "profiles": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "firstName": {
                                  "type": "string",
                                  "example": "Capillary"
                                },
                                "lastName": {
                                  "type": "string",
                                  "example": "Customer"
                                },
                                "attribution": {
                                  "type": "object",
                                  "properties": {
                                    "createDate": {
                                      "type": "string",
                                      "example": "2021-07-30T11:25:21+05:30"
                                    },
                                    "createdBy": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "integer",
                                          "example": 15071481,
                                          "default": 0
                                        },
                                        "code": {
                                          "type": "string",
                                          "example": "cm.1"
                                        },
                                        "description": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "cm.1"
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
                                          "example": true,
                                          "default": true
                                        },
                                        "timeZoneId": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "currencyId": {
                                          "type": "integer",
                                          "example": 95,
                                          "default": 0
                                        },
                                        "languageId": {
                                          "type": "integer",
                                          "example": -1,
                                          "default": 0
                                        }
                                      }
                                    },
                                    "modifiedBy": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "integer",
                                          "example": 15071481,
                                          "default": 0
                                        },
                                        "code": {
                                          "type": "string",
                                          "example": "cm.1"
                                        },
                                        "description": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "cm.1"
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
                                          "example": true,
                                          "default": true
                                        },
                                        "timeZoneId": {
                                          "type": "integer",
                                          "example": 0,
                                          "default": 0
                                        },
                                        "currencyId": {
                                          "type": "integer",
                                          "example": 95,
                                          "default": 0
                                        },
                                        "languageId": {
                                          "type": "integer",
                                          "example": -1,
                                          "default": 0
                                        }
                                      }
                                    },
                                    "modifiedDate": {
                                      "type": "string",
                                      "example": "2021-07-30T11:25:21+05:30"
                                    }
                                  }
                                },
                                "fields": {
                                  "type": "object",
                                  "properties": {
                                    "gender": {
                                      "type": "string",
                                      "example": "MALE"
                                    }
                                  }
                                },
                                "identifiers": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "example": "mobile"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": "917979015462"
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
                                        "example": "mobile"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": "917979000000"
                                      },
                                      "primary": {
                                        "type": "boolean",
                                        "example": true,
                                        "default": true
                                      },
                                      "verified": {
                                        "type": "boolean",
                                        "example": true,
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
                                  "example": "WECHAT"
                                },
                                "userId": {
                                  "type": "integer",
                                  "example": 409966467,
                                  "default": 0
                                },
                                "accountId": {
                                  "type": "string",
                                  "example": "WECHAT-CM"
                                },
                                "conflictingProfileList": {
                                  "type": "array"
                                },
                                "autoUpdateTime": {
                                  "type": "string",
                                  "example": "2021-07-30T11:25:21+05:30"
                                },
                                "identifiersAll": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "string",
                                        "example": "mobile"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": "917979015462"
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
                              }
                            }
                          },
                          "segments": {
                            "type": "object",
                            "properties": {}
                          },
                          "referralCode": {
                            "type": "string",
                            "example": ""
                          },
                          "associationDetails": {
                            "type": "object",
                            "properties": {
                              "hierarchyCode": {
                                "type": "string",
                                "example": "code-association2"
                              },
                              "hierarchyId": {
                                "type": "integer",
                                "example": 21,
                                "default": 0
                              },
                              "roleCode": {
                                "type": "string",
                                "example": "FA"
                              },
                              "childCustomers": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "profiles": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "firstName": {
                                            "type": "string",
                                            "example": "Capillary"
                                          },
                                          "lastName": {
                                            "type": "string",
                                            "example": "Customer"
                                          },
                                          "attribution": {
                                            "type": "object",
                                            "properties": {
                                              "createDate": {
                                                "type": "string",
                                                "example": "2021-07-30T11:25:21+05:30"
                                              },
                                              "createdBy": {
                                                "type": "object",
                                                "properties": {
                                                  "id": {
                                                    "type": "integer",
                                                    "example": 15071481,
                                                    "default": 0
                                                  },
                                                  "code": {
                                                    "type": "string",
                                                    "example": "cm.1"
                                                  },
                                                  "description": {
                                                    "type": "string",
                                                    "example": ""
                                                  },
                                                  "name": {
                                                    "type": "string",
                                                    "example": "cm.1"
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
                                                    "example": true,
                                                    "default": true
                                                  },
                                                  "timeZoneId": {
                                                    "type": "integer",
                                                    "example": 0,
                                                    "default": 0
                                                  },
                                                  "currencyId": {
                                                    "type": "integer",
                                                    "example": 95,
                                                    "default": 0
                                                  },
                                                  "languageId": {
                                                    "type": "integer",
                                                    "example": -1,
                                                    "default": 0
                                                  }
                                                }
                                              },
                                              "modifiedBy": {
                                                "type": "object",
                                                "properties": {
                                                  "id": {
                                                    "type": "integer",
                                                    "example": 15071481,
                                                    "default": 0
                                                  },
                                                  "code": {
                                                    "type": "string",
                                                    "example": "cm.1"
                                                  },
                                                  "description": {
                                                    "type": "string",
                                                    "example": ""
                                                  },
                                                  "name": {
                                                    "type": "string",
                                                    "example": "cm.1"
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
                                                    "example": true,
                                                    "default": true
                                                  },
                                                  "timeZoneId": {
                                                    "type": "integer",
                                                    "example": 0,
                                                    "default": 0
                                                  },
                                                  "currencyId": {
                                                    "type": "integer",
                                                    "example": 95,
                                                    "default": 0
                                                  },
                                                  "languageId": {
                                                    "type": "integer",
                                                    "example": -1,
                                                    "default": 0
                                                  }
                                                }
                                              },
                                              "modifiedDate": {
                                                "type": "string",
                                                "example": "2021-07-30T11:25:21+05:30"
                                              }
                                            }
                                          },
                                          "fields": {
                                            "type": "object",
                                            "properties": {
                                              "gender": {
                                                "type": "string",
                                                "example": "MALE"
                                              }
                                            }
                                          },
                                          "identifiers": {
                                            "type": "array",
                                            "items": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "string",
                                                  "example": "cuid"
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": "cuid_91553000000"
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
                                                  "example": true,
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
                                            "example": "WECHAT"
                                          },
                                          "userId": {
                                            "type": "integer",
                                            "example": 409966468,
                                            "default": 0
                                          },
                                          "accountId": {
                                            "type": "string",
                                            "example": "WECHAT-CM"
                                          },
                                          "conflictingProfileList": {
                                            "type": "array"
                                          },
                                          "autoUpdateTime": {
                                            "type": "string",
                                            "example": "2021-07-30T11:25:21+05:30"
                                          },
                                          "identifiersAll": {
                                            "type": "array",
                                            "items": {
                                              "type": "object",
                                              "properties": {
                                                "type": {
                                                  "type": "string",
                                                  "example": "cuid"
                                                },
                                                "value": {
                                                  "type": "string",
                                                  "example": "cuid_91553000000"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "extendedFields": {
                                      "type": "object",
                                      "properties": {
                                        "city": {
                                          "type": "string",
                                          "example": "city_6878387"
                                        },
                                        "gender": {
                                          "type": "string",
                                          "example": "Male"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "fleetCompany": {
                                "type": "object",
                                "properties": {
                                  "externalId": {
                                    "type": "string",
                                    "example": "ex917471949194"
                                  },
                                  "companyId": {
                                    "type": "integer",
                                    "example": 71,
                                    "default": 0
                                  }
                                }
                              },
                              "childRoleCode": {
                                "type": "string",
                                "example": "FC"
                              },
                              "skipLevelAllowed": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "new": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "childCustomer": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          },
                          "extendedFields": {
                            "type": "object",
                            "properties": {
                              "city": {
                                "type": "string",
                                "example": "city_6878387"
                              },
                              "gender": {
                                "type": "string",
                                "example": "Male"
                              }
                            }
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
                                  "example": 19223,
                                  "default": 0
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Points processing failed"
                                }
                              }
                            }
                          }
                        }
                      },
                      "childEntities": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "integer",
                              "example": 409966468,
                              "default": 0
                            },
                            "profiles": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "firstName": {
                                    "type": "string",
                                    "example": "Capillary"
                                  },
                                  "lastName": {
                                    "type": "string",
                                    "example": "Customer"
                                  },
                                  "attribution": {
                                    "type": "object",
                                    "properties": {
                                      "createDate": {
                                        "type": "string",
                                        "example": "2021-07-30T11:25:21+05:30"
                                      },
                                      "createdBy": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 15071481,
                                            "default": 0
                                          },
                                          "code": {
                                            "type": "string",
                                            "example": "cm.1"
                                          },
                                          "description": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "cm.1"
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
                                            "example": true,
                                            "default": true
                                          },
                                          "timeZoneId": {
                                            "type": "integer",
                                            "example": 0,
                                            "default": 0
                                          },
                                          "currencyId": {
                                            "type": "integer",
                                            "example": 95,
                                            "default": 0
                                          },
                                          "languageId": {
                                            "type": "integer",
                                            "example": -1,
                                            "default": 0
                                          }
                                        }
                                      },
                                      "modifiedBy": {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": "integer",
                                            "example": 15071481,
                                            "default": 0
                                          },
                                          "code": {
                                            "type": "string",
                                            "example": "cm.1"
                                          },
                                          "description": {
                                            "type": "string",
                                            "example": ""
                                          },
                                          "name": {
                                            "type": "string",
                                            "example": "cm.1"
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
                                            "example": true,
                                            "default": true
                                          },
                                          "timeZoneId": {
                                            "type": "integer",
                                            "example": 0,
                                            "default": 0
                                          },
                                          "currencyId": {
                                            "type": "integer",
                                            "example": 95,
                                            "default": 0
                                          },
                                          "languageId": {
                                            "type": "integer",
                                            "example": -1,
                                            "default": 0
                                          }
                                        }
                                      },
                                      "modifiedDate": {
                                        "type": "string",
                                        "example": "2021-07-30T11:25:21+05:30"
                                      }
                                    }
                                  },
                                  "fields": {
                                    "type": "object",
                                    "properties": {
                                      "gender": {
                                        "type": "string",
                                        "example": "MALE"
                                      }
                                    }
                                  },
                                  "identifiers": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "example": "cuid"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "cuid_91553015360"
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
                                          "example": true,
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
                                    "example": "WECHAT"
                                  },
                                  "userId": {
                                    "type": "integer",
                                    "example": 409966468,
                                    "default": 0
                                  },
                                  "accountId": {
                                    "type": "string",
                                    "example": "WECHAT-CM"
                                  },
                                  "conflictingProfileList": {
                                    "type": "array"
                                  },
                                  "autoUpdateTime": {
                                    "type": "string",
                                    "example": "2021-07-30T11:25:21+05:30"
                                  },
                                  "identifiersAll": {
                                    "type": "array",
                                    "items": {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "string",
                                          "example": "cuid"
                                        },
                                        "value": {
                                          "type": "string",
                                          "example": "cuid_91553015360"
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
                                }
                              }
                            },
                            "segments": {
                              "type": "object",
                              "properties": {}
                            },
                            "associationDetails": {
                              "type": "object",
                              "properties": {
                                "hierarchyId": {
                                  "type": "integer",
                                  "example": 21,
                                  "default": 0
                                },
                                "roleCode": {
                                  "type": "string",
                                  "example": "FC"
                                },
                                "fleetCompany": {
                                  "type": "object",
                                  "properties": {
                                    "externalId": {
                                      "type": "string",
                                      "example": "ex917471949194"
                                    },
                                    "companyId": {
                                      "type": "integer",
                                      "example": 71,
                                      "default": 0
                                    }
                                  }
                                },
                                "parentRoleId": {
                                  "type": "integer",
                                  "example": 83,
                                  "default": 0
                                },
                                "skipLevelAllowed": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "new": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "childCustomer": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                }
                              }
                            },
                            "extendedFields": {
                              "type": "object",
                              "properties": {
                                "city": {
                                  "type": "string",
                                  "example": "city_6878387"
                                },
                                "gender": {
                                  "type": "string",
                                  "example": "Male"
                                }
                              }
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
                                    "example": 8056,
                                    "default": 0
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Invalid mobile"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "childCount": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
                      },
                      "childFailureCount": {
                        "type": "integer",
                        "example": 0,
                        "default": 0
                      },
                      "childSuccessCount": {
                        "type": "integer",
                        "example": 2,
                        "default": 0
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
        "deprecated": false
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