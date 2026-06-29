> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add a PII deletion request

The PII deletion request API allows you to raise a PII deletion request.

<Callout icon="👍" theme="okay">
  For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
</Callout>

# Prerequisites

* [ ] Make sure that PII deletion configuration is enabled. Refer [Enable PII deletion](https://docs.capillarytech.com/docs/pii-configuration#configuring-pii-deletion) documentation for more information.
* [ ] Make sure that you have appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# Example request

```
curl --location 'https://eu.api.capillarytech.com/v2/requests' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'X-CAP-API-OAUTH-TOKEN: RUGojdJXl0hvvoSazhdwcv1YmLq_WV18e2Uiv49ZXkFjs2pvTDiHYrp2dv78-1rD-6q63HwwdPhhRnc4QQmgB-CG2bWTA0rQjZkZRRNViZOuRHhQArBgm4Ilx5_Un2H1YCNUDIMI9_VigV0GMJ8p1lmKp1nTD6vuO544OTphAnUVQjyVfxJyJmi9Dt14XykbRUT8BRIYOTjF4KHo8ziG_MBa-RHGmevFPQmi8NAr-LkriAjzC2wJ-BnBFSLNc-_p33knlasPA3TsbGndn0oig' \
--data '
  {
    "type": "CUSTOMER",
    "baseType": "DELETE",
    "comments": "APP DELETION",
    "customerIdentificationInfo": {
        "source": "INSTORE",
        "identifierType": "mobile",
        "identifierValue": "919986000581"
    }
}

'
```

<br />

# Body parameters

| Parameter       | Type   | Description                                                                 |
| --------------- | ------ | --------------------------------------------------------------------------- |
| type            | string | Type of the data. At present, only CUSTOMER is supported.                   |
| baseType        | string | Type of the operation. In this context, DELETE is the operation type.       |
| comments        | string | Comments or description. The maximum number of supported characters is 255. |
| source          | string | Source of customer data                                                     |
| identifierType  | string | Type of identifier                                                          |
| identifierValue | string | Value of the identifier                                                     |

# Response

| Parameter | Description             |
| :-------- | :---------------------- |
| createdId | The request-id created. |
| warnings  | Warnings, if any.       |

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
      "post": {
        "summary": "Add Request",
        "description": "Add a transaction or customer merge request",
        "operationId": "add-request-transaction-customer-merge",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "User type. At present, only CUSTOMER is supported.",
                    "default": "Defaults to CUSTOMER"
                  },
                  "baseType": {
                    "type": "string",
                    "default": "Defaults to DELETE",
                    "description": "Action that needs to be performed. Only DELETE is supported."
                  },
                  "comments": {
                    "type": "string",
                    "description": "Comment, if any."
                  },
                  "customerIdentificationInfo": {
                    "type": "object",
                    "properties": {
                      "CUSTOMERIDENTIFICATIONINFO OBJECT": {
                        "type": "string"
                      },
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
                    "description": "Customer identification details.",
                    "required": [
                      "source",
                      "identifierType",
                      "identifierValue"
                    ]
                  }
                },
                "required": [
                  "type",
                  "baseType",
                  "customerIdentificationInfo"
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "createdId": {
                      "type": "integer",
                      "example": 7062847,
                      "default": 0
                    },
                    "warnings": {
                      "type": "array"
                    }
                  }
                }
              }
            }
          },
          "201": {
            "description": "201",
            "content": {
              "application/json": {
                "schema": {
                  "oneOf": [
                    {
                      "title": "For Generic Customer Merge",
                      "type": "object",
                      "properties": {
                        "createdId": {
                          "type": "integer",
                          "example": 13030171,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Sample Response from Parent Org",
                      "type": "object",
                      "properties": {
                        "createdId": {
                          "type": "integer",
                          "example": 1778080,
                          "default": 0
                        },
                        "warnings": {
                          "type": "array"
                        }
                      }
                    },
                    {
                      "title": "Sample Response from Child Org",
                      "type": "object",
                      "properties": {
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
                                "example": 9021,
                                "default": 0
                              },
                              "message": {
                                "type": "string",
                                "example": "Request Add/Update is blocked for the org"
                              }
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                "examples": {
                  "Sample response_Transaction": {
                    "summary": "Sample response_Transaction",
                    "value": {
                      "createdId": 29487591,
                      "warnings": []
                    }
                  },
                  "": {
                    "summary": "",
                    "value": "{}"
                  },
                  "Sample response_Transaction_Queryparam": {
                    "summary": "Sample response_Transaction_Queryparam",
                    "value": {
                      "createdId": 29592579,
                      "warnings": []
                    }
                  }
                }
              },
              "text/plain": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "createdId": {
                      "type": "integer",
                      "example": 1785155,
                      "default": 0
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/requests' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic dGjE5' \\\n--header 'Cookie: _cfuvid=G6oxIkgK2fZsiAlvp1Hq7JkcB.t_CLzqxY.NmLbxwXQ-1771394758003-0.0.1.1-604800000' \\\n--data '{\n    \"type\": \"TRANSACTION\",\n    \"baseType\": \"REGULAR_TXN_ADD\",\n    \"customerIdentificationInfo\": {\n        \"identifierType\": \"mobile\",\n        \"identifierValue\": \"919999988886\",\n        \"source\": \"INSTORE\"\n    },\n    \"transaction\": {\n        \"type\": \"REGULAR\",\n        \"billingDate\" : \"2025-04-29T10:00:00+05:30\",\n        \"billNumber\": \"test00transact088\",\n        \"discount\": \"0\",\n        \"billAmount\": \"6000\",\n        \"note\": \"Add Transaction Request 88\",\n        \"grossAmount\": \"6000\",\n        \"deliveryStatus\": \"PLACED\",\n        \"paymentModes\": [\n            {\n                \"notes\": \"\",\n                \"mode\": \"Cash\",\n                \"value\": \"6000\"\n            }\n        ],\n        \"lineItemsV2\": [\n            {\n                \"itemCode\": \"model_id_001\",\n                \"description\": \"sports shoes\",\n                \"amount\": 6000.0,\n                \"rate\": 2000.0,\n                \"qty\": 3,\n                \"discount\":0\n            } \n        ]\n    }\n}'",
              "language": "shell",
              "name": "Sample request_Transaction"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/requests?source=INSTORE&client_auto_approve=true' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic bWFkaMjU2YQ==' \\\n--header 'Cookie: _cfuvid=G6oxIkgK2fZsiAlvp1Hq7JkcB.t_CLzqxY.NmLbxwXQ-1771394758003-0.0.1.1-604800000' \\\n--data '{\n    \"type\": \"TRANSACTION\",\n    \"baseType\": \"REGULAR_TXN_ADD\",\n    \"customerIdentificationInfo\": {\n       \"identifierType\": \"mobile\",\n        \"identifierValue\": \"919999988886\",\n        \"source\": \"INSTORE\"\n    },\n    \"transaction\": {\n        \"type\": \"REGULAR\",\n        \"billingDate\" :\"2025-04-29T10:00:00+05:30\",\n        \"billNumber\": \"test00transact088\",\n        \"discount\": \"0\",\n        \"billAmount\": \"6000\",\n        \"note\": \"Add Transaction Request 88\",\n        \"grossAmount\": \"6000\",\n        \"deliveryStatus\": \"PLACED\",\n        \"paymentModes\": [\n            {\n                \"notes\": \"\",\n                \"mode\": \"Cash\",\n                \"value\": \"6000\"\n            }\n        ],\n        \"lineItemsV2\": [\n            {\n                \"itemCode\": \"model_id_001\",\n                \"description\": \"sports shoes\",\n                \"amount\": 6000.0,\n                \"rate\": 2000.0,\n                \"qty\": 3,\n                \"discount\":0\n            } \n        ]\n    }\n}'",
              "language": "shell",
              "name": "Sample request_Transaction_Queryparam"
            },
            {
              "code": "{\n    \"type\": \"CUSTOMER\",\n    \"baseType\": \"DELETE\",\n    \"comments\": \"APP DELETION\",\n    \"customerIdentificationInfo\": {\n        \"source\": \"INSTORE\",\n        \"identifierType\": \"mobile\",\n        \"identifierValue\": \"919986000581\"\n    }\n}",
              "language": "shell",
              "name": ""
            }
          ],
          "samples-languages": [
            "shell"
          ]
        },
        "security": [
          {
            "sec0": []
          }
        ]
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