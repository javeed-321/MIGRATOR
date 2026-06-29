> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Org Companies

Retrieves all companies of the org. Use filter parameters to get specific details.

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
    "/companies/all": {
      "get": {
        "summary": "Get Org Companies",
        "description": "Retrieves all companies of the org. Use filter parameters to get specific details.",
        "operationId": "get-org-companies",
        "parameters": [
          {
            "name": "limit",
            "in": "query",
            "description": "Number of results to relative.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Filter companies by status.",
            "schema": {
              "type": "string",
              "enum": [
                "ACTIVE",
                "INACTIVE"
              ],
              "default": "ACTIVE"
            }
          },
          {
            "name": "sortBy",
            "in": "query",
            "description": "Always sort results by created date.",
            "schema": {
              "type": "string",
              "enum": [
                "createdDate"
              ]
            }
          },
          {
            "name": "sortOrder",
            "in": "query",
            "description": "Sort the results in ascending or descending order of the chosen `soryBy`.",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "offset",
            "in": "query",
            "description": "Number of rows to be ignored from the top (pagination).",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n   \"pagination\":{\n      \"limit\":100,\n      \"offset\":0,\n      \"sortBy\":\"createdDate\",\n      \"sortOrder\":\"DESC\",\n      \"total\":3\n   },\n   \"data\":[\n      {\n         \"externalId\":\"ppartner435\",\n         \"companyId\":99,\n         \"name\":\"Purple Partner\",\n         \"hierarchyDefinitionCode\":\"code-tst1111\",\n         \"parentCompany\":{\n            \"externalId\":\"Purple2345\",\n            \"companyId\":98,\n            \"name\":\"Purple2346\"\n         },\n         \"isActive\":true,\n         \"extendedFields\":{\n            \"address1\":\"Richmond Circle\",\n            \"owner\":\"James\",\n            \"phone\":\"9988000000\",\n            \"pincode\":\"560068\"\n         }\n      },\n      {\n         \"externalId\":\"Purple2345\",\n         \"companyId\":98,\n         \"name\":\"Purple2346\",\n         \"hierarchyDefinitionCode\":\"code-association2\",\n         \"isActive\":true,\n         \"extendedFields\":{\n            \"address1\":\"Hill Town\",\n            \"address2\":\"\",\n            \"address3\":\"\",\n            \"address4\":\"\",\n            \"company_city\":\"\",\n            \"company_country\":\"India\",\n            \"company_state\":\"\",\n            \"owner\":\"James\",\n            \"phone\":\"9870000000\",\n            \"pincode\":\"560068\"\n         }\n      },\n      {\n        \"externalId\": \"917791000000\",\n        \"companyId\": 15,\n        \"name\": \"name-917869800000\",\n        \"hierarchyDefinitionCode\": \"code-tst1111\",\n        \"parentCompany\": {\n          \"externalId\": \"917787000000\",\n          \"companyId\": 16,\n          \"name\": \"name-917787000000\"\n        },\n         \"isActive\":true,\n         \"extendedFields\":{\n            \"address1\":\"\",\n            \"address2\":\"\",\n            \"address3\":\"\",\n            \"address4\":\"\",\n            \"company_city\":\"Bangalore1\",\n            \"company_country\":\"India\",\n            \"company_state\":\"Karnataka\",\n            \"industry\":\"industry2\",\n            \"owner\":\"Sivjan\",\n            \"phone\":\"99880000000\",\n            \"pincode\":\"5600681\"\n         }\n      }\n   ],\n   \"warnings\":[\n\n   ],\n   \"errors\":[\n\n   ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "pagination": {
                      "type": "object",
                      "properties": {
                        "limit": {
                          "type": "integer",
                          "example": 100,
                          "default": 0
                        },
                        "offset": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "sortBy": {
                          "type": "string",
                          "example": "createdDate"
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
                          "externalId": {
                            "type": "string",
                            "example": "ppartner435"
                          },
                          "companyId": {
                            "type": "integer",
                            "example": 99,
                            "default": 0
                          },
                          "name": {
                            "type": "string",
                            "example": "Purple Partner"
                          },
                          "hierarchyDefinitionCode": {
                            "type": "string",
                            "example": "code-tst1111"
                          },
                          "parentCompany": {
                            "type": "object",
                            "properties": {
                              "externalId": {
                                "type": "string",
                                "example": "Purple2345"
                              },
                              "companyId": {
                                "type": "integer",
                                "example": 98,
                                "default": 0
                              },
                              "name": {
                                "type": "string",
                                "example": "Purple2346"
                              }
                            }
                          },
                          "isActive": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "extendedFields": {
                            "type": "object",
                            "properties": {
                              "address1": {
                                "type": "string",
                                "example": "Richmond Circle"
                              },
                              "owner": {
                                "type": "string",
                                "example": "James"
                              },
                              "phone": {
                                "type": "string",
                                "example": "9988000000"
                              },
                              "pincode": {
                                "type": "string",
                                "example": "560068"
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
              "code": "https://us.api.capillarytech.com/v2/companies/all?limit=100&status=ACTIVE&sortOrder=DESC&sortBy=createdDate",
              "name": "Sample request"
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