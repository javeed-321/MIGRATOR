> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get customer hierarchy in a user group

Retrieves all child customers for a parent customer.

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] <Anchor label="Access group resource" target="_blank" href="https://docs.capillarytech.com/docs/access-group">Access group resource</Anchor>: Read access to the `User Group` resource
* [ ] <Anchor label="User group available" target="_blank" href="https://docs.capillarytech.com/docs/group-loyalty#/creating-a-user-group">User group available</Anchor>

# Example request

```curl Sample request
curl --location 'https://eucrm.cc.capillarytech.com/v2/customers/bulk?source=instore&associationEntityType=parentChildCustomer&associationEntityIdentifierType=mobile&associationEntityIdentifierValue=918933445577&limit=10&offset=0&sortOrder=DESC&includeNoOfChildren=true&includeCustomerAssociateDetail=true%27%20%5C%0A--header%20%27Authorization%3A%20Basic%20bWFkaHVjU2YQ%3D%3D%27' \
--header 'Authorization: Basic bWFkaHVfMjU2YQ=='
```

# Query parameters

<Table align={[null,"left",null]}>
  <thead>
    <tr>
      <th>
        Query Parameter
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
        source
      </td>

      <td>
        string
      </td>

      <td>
        Indicates the origin of the data.
      </td>
    </tr>

    <tr>
      <td>
        associationEntityType*
      </td>

      <td>
        string
      </td>

      <td>
        Type of entity associated.
        Supported values: -

        `parentCustomer`- Retrieve customer information linked to a primary or parent account.

        `company` -  Retrieve customer information for all customers associated with a specific company or business entity.

        `parentChildCustomer` - Retrieve  information for an individual customer associated with a specific company or business entity.
      </td>
    </tr>

    <tr>
      <td>
        associationEntityIdentifierType*
      </td>

      <td>
        string
      </td>

      <td>
        The type of identifier used for the associated entity.
      </td>
    </tr>

    <tr>
      <td>
        associationEntityIdentifierValue*
      </td>

      <td>
        integer/string
      </td>

      <td>
        The actual identifier value for the associated entity.
      </td>
    </tr>

    <tr>
      <td>
        limit
      </td>

      <td>
        integer
      </td>

      <td>
        The maximum number of records to return per page.
      </td>
    </tr>

    <tr>
      <td>
        offset
      </td>

      <td>
        integer
      </td>

      <td>
        The starting point in the list of records.
      </td>
    </tr>

    <tr>
      <td>
        sortOrder
      </td>

      <td>
        string
      </td>

      <td>
        The order in which the data is sorted.
      </td>
    </tr>

    <tr>
      <td>
        includeNoOfChildren
      </td>

      <td>
        boolean
      </td>

      <td>
        A flag indicating whether to include the number of children entities.
      </td>
    </tr>

    <tr>
      <td>
        includeCustomerAssociateDetail
      </td>

      <td>
        boolean
      </td>

      <td>
        A flag indicating whether to include details of associated customers.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter              | Type           | Description                                                                                                                                             |
| ---------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entity                 | object         | An object containing information about customers and their parent relationships.                                                                        |
| customers              | array\[object] | An array containing customer profiles and related details.                                                                                              |
| profiles               | array\[object] | An array containing customer profile details such as first name, last name, identifiers, communication channels, source, user ID, account ID, and more. |
| firstName              | string         | The first name of the customer.                                                                                                                         |
| lastName               | string         | The last name of the customer.                                                                                                                          |
| fields                 | object         | Additional fields associated with the customer profile.                                                                                                 |
| identifiers            | array\[object] | An array containing customer identifier details such as type and value.                                                                                 |
| type                   | string         | The type of identifier, e.g., "mobile".                                                                                                                 |
| value                  | string         | The value of the identifier, e.g., mobile number.                                                                                                       |
| commChannels           | array\[object] | An array containing communication channel details such as type, value, primary status, verification status, meta attributes, and attributes.            |
| type                   | string         | The type of communication channel, e.g., "mobile".                                                                                                      |
| value                  | string         | The value of the communication channel, e.g., mobile number.                                                                                            |
| primary                | boolean        | Indicates if the communication channel is the primary one.                                                                                              |
| verified               | boolean        | Indicates if the communication channel is verified.                                                                                                     |
| meta                   | object         | Meta attributes associated with the communication channel.                                                                                              |
| source                 | string         | The source of the customer data, e.g., "INSTORE".                                                                                                       |
| userId                 | integer        | The unique identifier of the user.                                                                                                                      |
| accountId              | string         | The account ID associated with the customer.                                                                                                            |
| conflictingProfileList | array          | An array containing conflicting profile information.                                                                                                    |
| autoUpdateTime         | string         | The date and time when the customer profile was last updated.                                                                                           |
| identifiersAll         | array\[object] | An array containing all identifier details for the customer.                                                                                            |
| roleCode               | string         | A string representing the role code associated with the customer profile.                                                                               |
| createdDate            | string         | The date and time when the customer profile was created.                                                                                                |
| noOfChildren           | integer        | The number of children associated with the customer.                                                                                                    |
| defaultChild           | boolean        | Indicates whether the customer is the default child.                                                                                                    |
| parentCustomer         | object         | An object containing details about the parent customer of the specified customer.                                                                       |
| extendedFields         | object         | An object containing extended fields associated with the customer profile, such as city and gender.                                                     |
| city                   | string         | The city associated with the customer.                                                                                                                  |
| gender                 | string         | The gender of the customer.                                                                                                                             |
| count                  | integer        | An integer indicating the count of entities in the response.                                                                                            |
| errors                 | array          | An array containing any errors encountered during the request.                                                                                          |
| warnings               | array          | An array containing any warnings generated during the request.                                                                                          |
| success                | boolean        | A boolean indicating the success status of the request.                                                                                                 |

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
      "get": {
        "summary": "Get customer hierarchy in a user group",
        "description": "Retrieves all child customers for a parent customer.",
        "operationId": "customer-hierarchy",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Indicates the origin of the data.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "associationEntityType",
            "in": "query",
            "description": "Type of entity associated.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "associationEntityIdentifierType",
            "in": "query",
            "description": "The type of identifier used for the associated entity.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "associationEntityIdentifierValue",
            "in": "query",
            "description": "The actual identifier value for the associated entity.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "The maximum number of records to return per page.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "The starting point in the list of records.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "sortOrder",
            "in": "query",
            "description": "The order in which the results should be sorted, e.g., DESC.",
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ],
              "default": "DESC"
            }
          },
          {
            "name": "includeCustomerAssociateDetail",
            "in": "query",
            "description": "Indicates whether to include customer associate details in the response.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "includeNoOfChildren",
            "in": "query",
            "description": "Indicates whether to include the count of associated children in the response.",
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
                  "Retrieve child and parent": {
                    "value": {
                      "entity": {
                        "customers": [
                          {
                            "profiles": [
                              {
                                "firstName": "tom",
                                "lastName": "sawyer",
                                "fields": {},
                                "identifiers": [
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "917799889933"
                                  }
                                ],
                                "commChannels": [
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com",
                                    "primary": true,
                                    "verified": false,
                                    "meta": {
                                      "residence": false,
                                      "office": false
                                    },
                                    "attributes": {}
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "917799889933",
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
                                "userId": 134094571,
                                "accountId": "",
                                "conflictingProfileList": [],
                                "autoUpdateTime": "2023-07-21T05:54:37Z",
                                "identifiersAll": [
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "917799889933"
                                  }
                                ]
                              }
                            ],
                            "extendedFields": {
                              "dob": "1980-05-08T00:00:00Z"
                            },
                            "roleCode": "Senior_Manager",
                            "createdDate": "2023-04-14T03:29:31Z",
                            "noOfChildren": 1,
                            "defaultChild": false
                          },
                          {
                            "profiles": [
                              {
                                "firstName": "Lalit",
                                "lastName": "Sharma",
                                "fields": {},
                                "identifiers": [
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919620653502"
                                  }
                                ],
                                "commChannels": [
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com",
                                    "primary": true,
                                    "verified": false,
                                    "meta": {
                                      "residence": false,
                                      "office": false
                                    },
                                    "attributes": {}
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919620653502",
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
                                "userId": 109983515,
                                "accountId": "",
                                "conflictingProfileList": [],
                                "autoUpdateTime": "2023-07-21T05:54:37Z",
                                "identifiersAll": [
                                  {
                                    "type": "email",
                                    "value": "tom.sawyer@capillarytech.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919620653502"
                                  }
                                ]
                              }
                            ],
                            "extendedFields": {
                              "dob": "1983-12-31T00:00:00Z"
                            },
                            "roleCode": "Manager",
                            "createdDate": "2023-04-14T03:31:01Z",
                            "noOfChildren": 2,
                            "defaultChild": false
                          }
                        ],
                        "count": 2,
                        "errors": [],
                        "warnings": []
                      },
                      "warnings": [],
                      "errors": [],
                      "success": true
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "object",
                      "properties": {
                        "customers": {
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
                                      "example": "Rohan"
                                    },
                                    "lastName": {
                                      "type": "string",
                                      "example": "Mahadar"
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
                                            "example": "tom.swayer@capillarytech.com"
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
                                      "example": 134094571,
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
                                      "example": "2023-07-21T05:54:37Z"
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
                              "extendedFields": {
                                "type": "object",
                                "properties": {
                                  "dob": {
                                    "type": "string",
                                    "example": "1980-05-08T00:00:00Z"
                                  }
                                }
                              },
                              "roleCode": {
                                "type": "string",
                                "example": "Senior_Manager"
                              },
                              "createdDate": {
                                "type": "string",
                                "example": "2023-04-14T03:29:31Z"
                              },
                              "noOfChildren": {
                                "type": "integer",
                                "example": 1,
                                "default": 0
                              },
                              "defaultChild": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              }
                            }
                          }
                        },
                        "count": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        },
                        "errors": {
                          "type": "array"
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
                      "type": "array"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true,
                      "default": true
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
              "code": "curl --location 'https://eucrm.cc.capillarytech.com/v2/customers/bulk?source=instore&associationEntityType=parentChildCustomer&associationEntityIdentifierType=mobile&associationEntityIdentifierValue=918933445577&limit=10&offset=0&sortOrder=DESC&includeNoOfChildren=true&includeCustomerAssociateDetail=true%27%20%5C%0A--header%20%27Authorization%3A%20Basic%20bWFkaHVjU2YQ%3D%3D%27' \\\n--header 'Authorization: Basic bWFkaHVfcmltYTowZjU2YQ=='"
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