> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Delink Customer

Lets you remove a customer from one or more partner programs.

This API is used to Delink customer from Partner Program.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

# Prerequisites

* [ ] Authentication: Basic or OAuth credentials
* [ ] Default access group

# Resource information

|                        |                                |
| :--------------------- | :----------------------------- |
| URI                    | /partnerProgram/deLinkCustomer |
| HTTP Method            | POST                           |
| Pagination             | No                             |
| Batch support          | No                             |
| Rate limit information | None                           |

# API endpoint example

`https://eu.api.capillarytech.com/v2/partnerProgram/deLinkCustomer`

# Request body parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        deLinkCustomers
      </td>

      <td>
        array
      </td>

      <td>
        List of customers to be delinked
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        object
      </td>

      <td>
        Customer details
      </td>
    </tr>

    <tr>
      <td>
        * mobile
      </td>

      <td>
        integer
      </td>

      <td>
        Customer's mobile number
      </td>
    </tr>

    <tr>
      <td>
        deLinkFromPartnerPrograms
      </td>

      <td>
        array
      </td>

      <td>
        List of partner programs to delink from
      </td>
    </tr>

    <tr>
      <td>
        * partnerProgramName
      </td>

      <td>
        string
      </td>

      <td>
        Name of the partner program where it will be linked from.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
  "deLinkCustomers": [
    {
      "customer": {
        "mobile": 919800000000
      },
      "deLinkFromPartnerPrograms": [
        {
          "partnerProgramName": "1stProgram"
        },
        {
          "partnerProgramName": "p3e1"
        }
      ]
    }
  ]
}
```

# Response Parameter

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        customersPartnerUpdates
      </td>

      <td>
        List of customers with partner program updates
      </td>
    </tr>

    <tr>
      <td>
        customer
      </td>

      <td>
        List of customer details
      </td>
    </tr>

    <tr>
      <td>
        id
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        mobile
      </td>

      <td>
        Customer's unique mobile number
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        Customer's unique email
      </td>
    </tr>

    <tr>
      <td>
        externalId
      </td>

      <td>
        Customer's unique external ID
      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        Status of the customer retrieval
      </td>
    </tr>

    <tr>
      <td>
        * message
      </td>

      <td>
        Message regarding customer retrieval
      </td>
    </tr>

    <tr>
      <td>
        * code
      </td>

      <td>
        Status code
      </td>
    </tr>

    <tr>
      <td>
        partnerProgramUpdates
      </td>

      <td>
        List of partner program updates
      </td>
    </tr>

    <tr>
      <td>
        partnerProgramName
      </td>

      <td>
        Name of the partner program
      </td>
    </tr>

    <tr>
      <td>
        updateType
      </td>

      <td>
        Type of update (e.g., UPGRADE)
      </td>
    </tr>

    <tr>
      <td>
        updateStatus
      </td>

      <td>
        List of update status
      </td>
    </tr>

    <tr>
      <td>
        * status
      </td>

      <td>
        Status of the update
      </td>
    </tr>

    <tr>
      <td>
        * message
      </td>

      <td>
        Message regarding the update
      </td>
    </tr>

    <tr>
      <td>
        * code
      </td>

      <td>
        Status code
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        List of warnings (if any)
      </td>
    </tr>
  </tbody>
</Table>

```json
{
  "customersPartnerUpdates": [
    {
      "customer": {
        "id": 382741349,
        "mobile": "916215000000",
        "email": "tomswayer@gmail.com",
        "externalId": "X916215000000",
        "status": {
          "status": true,
          "message": "Customer successfully retrieved",
          "code": 1000
        }
      },
      "partnerProgramUpdates": [
        {
          "partnerProgramName": "1stProgram",
          "updateType": "UPGRADE",
          "updateStatus": {
            "status": true,
            "message": "Success",
            "code": 200
          }
        }
      ]
    }
  ],
  "warnings": []
}
```

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
    "/partnerProgram/deLinkCustomer": {
      "post": {
        "summary": "Delink Customer",
        "description": "Lets you remove a customer from one or more partner programs.",
        "operationId": "delink-customer",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "deLinkCustomers": {
                    "properties": {
                      "customer": {
                        "properties": {
                          "mobile": {
                            "type": "string",
                            "description": "Mobile number of the customer."
                          },
                          "email": {
                            "type": "string",
                            "description": "Email ID of the customer."
                          },
                          "externalId": {
                            "type": "string",
                            "description": "External ID of the customer."
                          }
                        },
                        "required": [],
                        "type": "object"
                      },
                      "deLinkFromPartnerPrograms": {
                        "properties": {
                          "partnerProgramName": {
                            "type": "string",
                            "description": "Name of the partner program to delink."
                          }
                        },
                        "required": [
                          "partnerProgramName"
                        ],
                        "type": "object"
                      }
                    },
                    "required": [],
                    "type": "object",
                    "description": "Details of the customer and partner program to delink."
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
                      "customersPartnerUpdates": [
                        {
                          "customer": {
                            "id": 382741349,
                            "mobile": "916215000000",
                            "email": "tom.swayer@capillarytech.com",
                            "externalId": "X916215000000",
                            "status": {
                              "status": true,
                              "message": "Customer successfully retrieved",
                              "code": 1000
                            }
                          },
                          "partnerProgramUpdates": [
                            {
                              "partnerProgramName": "1stProgram",
                              "updateType": "UPGRADE",
                              "updateStatus": {
                                "status": true,
                                "message": "Success",
                                "code": 200
                              }
                            }
                          ]
                        }
                      ],
                      "warnings": []
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "customersPartnerUpdates": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "customer": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 382741349,
                                "default": 0
                              },
                              "mobile": {
                                "type": "string",
                                "example": "916215000000"
                              },
                              "email": {
                                "type": "string",
                                "example": "tom.swayer@capillarytech.com"
                              },
                              "externalId": {
                                "type": "string",
                                "example": "X916215000000"
                              },
                              "status": {
                                "type": "object",
                                "properties": {
                                  "status": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Customer successfully retrieved"
                                  },
                                  "code": {
                                    "type": "integer",
                                    "example": 1000,
                                    "default": 0
                                  }
                                }
                              }
                            }
                          },
                          "partnerProgramUpdates": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "partnerProgramName": {
                                  "type": "string",
                                  "example": "1stProgram"
                                },
                                "updateType": {
                                  "type": "string",
                                  "example": "UPGRADE"
                                },
                                "updateStatus": {
                                  "type": "object",
                                  "properties": {
                                    "status": {
                                      "type": "boolean",
                                      "example": true,
                                      "default": true
                                    },
                                    "message": {
                                      "type": "string",
                                      "example": "Success"
                                    },
                                    "code": {
                                      "type": "integer",
                                      "example": 200,
                                      "default": 0
                                    }
                                  }
                                }
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
              "code": "{\n  \"deLinkCustomers\": [\n    {\n      \"customer\": {\n        \"mobile\": 919800000000\n      },\n      \"deLinkFromPartnerPrograms\": [\n        {\n          \"partnerProgramName\": \"1stProgram\"\n        },\n        {\n          \"partnerProgramName\": \"p3e1\"\n        }\n      ]\n    }\n  ]\n}",
              "name": "Sample POST Body"
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