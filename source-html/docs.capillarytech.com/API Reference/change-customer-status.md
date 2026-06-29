> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Change customer status request

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

This API allows you to initiate a request to change the customer status of a customer.

# API endpoint example

`[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/CUSTOMER-STATUS-CHANGE`

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group
* [ ] Maker request access (CanMakeRequest). Contact the access team for access.

# Resource information

|                        |                                                   |
| :--------------------- | :------------------------------------------------ |
| URI                    | /api\_gateway/v2/request-workflow/`{requestType}` |
| HTTP Method            | POST                                              |
| Pagination             | No                                                |
| Batch support          | No                                                |
| Rate limit information | None                                              |

<br />

# Header information

|                       |                                                                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| X-CAP-API-AUTH-ORG-ID | Organization ID                                                                                                            |
| X-CAP-UI-AUTH-TOKEN   | A JSON Web Token (JWT) is used for intouch user authentication.  CanMakeRequest access is required to generate this token. |

# Request body parameters

The request body contains essential entity information, including store, zone, and concept identifiers, along with a payload for the Intouch API task.

<br />

| **Parameter (Parameters marked \* are mandatory)** | **Type** | **Description**                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityInfo`\*                                     | Object   | Information about the entity (till, store, zone, concept).                                                                                                                                                                                                                                      |
|     `tillId`\*                                     | String   | The [unique identifier for the till ](https://docs.capillarytech.com/reference/get-org-entities#/)associated with the transaction.                                                                                                                                                              |
|     `storeId`\*                                    | String   | The [unique identifier for the store ](https://docs.capillarytech.com/reference/get-org-entities#/)where the transaction occurs.                                                                                                                                                                |
|     `zoneId`\*                                     | String   | The [unique identifier for the zone](https://docs.capillarytech.com/reference/get-org-entities#/) or area the store is associated with.                                                                                                                                                         |
|     `conceptId`\*                                  | String   | The [unique identifier for the concept](https://docs.capillarytech.com/reference/get-org-entities#/) or branding associated with the store.                                                                                                                                                     |
| `payload`                                          | Object   | The Intouch payload for the Customer Status Change Workflow. It facilitates changing a customer’s status within the Intouch system and includes specific data needed for this operation.                                                                                                        |
|     `IntouchAPITask-Payload`                       | Object   | Information about the Intouch API task.                                                                                                                                                                                                                                                         |
|     `hostname`\*                                   | String   | Hostname for the API endpoint. Example: `https://eucrm-new.cc.capillarytech.com`.                                                                                                                                                                                                               |
|     `path`\*                                       | String   | `/v2/customers/lookup/status`. This is the API that manages customer status changes.                                                                                                                                                                                                            |
|     `method`\*                                     | String   | `PUT`. The HTTP method used for the request.                                                                                                                                                                                                                                                    |
| `pathParams`                                       | Object   | Parameters to be included in the endpoint path. See [Update customer status API](https://docs.capillarytech.com/reference/update-customer-status) for details. **Note:** In this workflow, `pathParams` may not be used, as the required information is typically included in the request body. |
| `queryParams`\*                                    | Object   | Parameters to be included in the query string. See [Update customer status API](https://docs.capillarytech.com/reference/update-customer-status) for details.                                                                                                                                   |
|     `source`                                       | String   | The source of the request (for example, `INSTORE`).                                                                                                                                                                                                                                             |
|     `accountId`                                    | String   | The account ID (empty in this case).                                                                                                                                                                                                                                                            |
|     `use_async`                                    | String   | Indicates whether the request should be processed asynchronously. Setting `use_async` to `false` means the request will be processed synchronously (the program waits for the response before continuing).                                                                                      |
|     `identifierName`                               | String   | The type of identifier. Supported values: `mobile`, `email`, `externalId`, `cardnumber`, `cardExternalId`, `wechat`, `fbid`, and `martjackId`.                                                                                                                                                  |
|     `identifierValue`                              | String   | The value of the identifier (for example, `919780375691` for `mobile`).                                                                                                                                                                                                                         |
| `body`\*                                           | Object   | Contains essential data for the status change operation.                                                                                                                                                                                                                                        |
|     `reason`                                       | String   | Indicates the reason for the status change (for example, “testing purpose”).                                                                                                                                                                                                                    |
|     `label`                                        | String   | The label indicates the new status to assign to the customer (for example, “Suspended” or “Active”).                                                                                                                                                                                            |
| `headers`\*                                        | Object   | Headers provide additional context and information about the request.                                                                                                                                                                                                                           |
|     `Authorization`                                | String   | Contains the authentication credentials needed to access the Intouch API.                                                                                                                                                                                                                       |
|     `content-type`                                 | String   | Specifies the request content type (`application/json`). Ensures the API correctly interprets the JSON payload.                                                                                                                                                                                 |

```json Request body
{
    "entityInfo": {
        "tillId" : "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload": {
        "IntouchAPITask-Payload": {
            "hostname": "<https://eu.api.capillarytech.com>",
            "path": "/v2/customers/lookup/status",
            "method": "POST",
            "pathParams": {},
            "queryParams": {
                "source": "INSTORE",
                "accountId": "",
                "use_async": "false",
                "identifierName": "mobile",
                "identifierValue": "919780375690"
            },
            "body": {
                "reason": "testing",
                "label": "Suspended"
            },
            "headers": {
                "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                "content-type": "application/json"
            }
        }
    }
}

```

<br />

# Response parameters

| Parameter Name              | Data Type     | Description                                                                          |
| --------------------------- | ------------- | ------------------------------------------------------------------------------------ |
| requestId                   | String        | Unique identifier for the request.                                                   |
| userId                      | Integer       | Identifier for the user making the request.                                          |
| userName                    | String        | Email or username of the user making the request.                                    |
| requestType                 | String        | Type of request being made (e.g., "customer-status-change").                         |
| state                       | String        | Current state of the request (e.g., "AdminTask").                                    |
| startTime                   | DateTime      | Timestamp marking the start of the request.                                          |
| endTime                     | DateTime/Null | Timestamp marking the end of the request, if applicable.                             |
| IntouchAPITask-Payload      | Object        | Object containing specifics of the API call to change customer status.               |
|   hostname                  | String        | The base URL of the API endpoint.                                                    |
|   path                      | String        | Specific path to the API endpoint for changing customer status.                      |
|   method                    | String        | HTTP method used for the request.                                                    |
|   pathParams                | Object        | Path parameters for the API call, if any (empty in this case).                       |
|   queryParams               | Object        | Query parameters for the API call, detailing aspects like source and identifier.     |
|   body                      | Object        | Body of the API call, containing the reason for the status change and the new label. |
|   headers                   | Object        | Headers for the API call, including Authorization and Content-Type.                  |
| ValidateMakerAccess\_Output | Boolean       | Indicates whether maker access validation was successful.                            |
| ValidatePayload\_Output     | Boolean       | Indicates whether payload validation was successful.                                 |

<br />

```json 200 OK
{
    "data": {
        "requestId": "113cff87-62a5-11ee-aa6d-0aaee4e533d2",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "customer-status-change",
        "state": "AdminTask",
        "startTime": "2023-10-04T16:29:19",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                "path": "/v2/customers/lookup/status",
                "method": "PUT",
                "pathParams": {},
                "queryParams": {
                    "source": "INSTORE",
                    "accountId": "",
                    "use_async": "false",
                    "identifierName": "mobile",
                    "identifierValue": "919780375690"
                },
                "body": {
                    "reason": "testing",
                    "label": "Suspended"
                },
                "headers": {
                    "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                    "content-type": "application/json"
                }
            },
            "ValidateMakerAccess_Output": true,
            "ValidatePayload_Output": true
        }
    }
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
    "/api_gateway/v2/request-workflow/CUSTOMER-STATUS-CHANGE": {
      "post": {
        "summary": "Change customer status request",
        "description": "",
        "operationId": "change-customer-status",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "RAW_BODY": {
                    "type": "string"
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
                      "data": {
                        "requestId": "113cff87-62a5-11ee-aa6d-0aaee4e533d2",
                        "userId": 232134,
                        "userName": "tomswayer@tipent.com",
                        "requestType": "customer-status-change",
                        "state": "AdminTask",
                        "startTime": "2023-10-04T16:29:19",
                        "endTime": null,
                        "details": {
                          "IntouchAPITask-Payload": {
                            "hostname": "<https://crm-nightly-new.cc.capillarytech.com>",
                            "path": "/v2/customers/lookup/status",
                            "method": "PUT",
                            "pathParams": {},
                            "queryParams": {
                              "source": "INSTORE",
                              "accountId": "",
                              "use_async": "false",
                              "identifierName": "mobile",
                              "identifierValue": "919780375690"
                            },
                            "body": {
                              "reason": "testing",
                              "label": "Suspended"
                            },
                            "headers": {
                              "Authorization": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw",
                              "content-type": "application/json"
                            }
                          },
                          "ValidateMakerAccess_Output": true,
                          "ValidatePayload_Output": true
                        }
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string",
                          "example": "113cff87-62a5-11ee-aa6d-0aaee4e533d2"
                        },
                        "userId": {
                          "type": "integer",
                          "example": 232134,
                          "default": 0
                        },
                        "userName": {
                          "type": "string",
                          "example": "tonob50495@tipent.com"
                        },
                        "requestType": {
                          "type": "string",
                          "example": "customer-status-change"
                        },
                        "state": {
                          "type": "string",
                          "example": "AdminTask"
                        },
                        "startTime": {
                          "type": "string",
                          "example": "2023-10-04T16:29:19"
                        },
                        "endTime": {},
                        "details": {
                          "type": "object",
                          "properties": {
                            "IntouchAPITask-Payload": {
                              "type": "object",
                              "properties": {
                                "hostname": {
                                  "type": "string",
                                  "example": "<https://crm-nightly-new.cc.capillarytech.com>"
                                },
                                "path": {
                                  "type": "string",
                                  "example": "/v2/customers/lookup/status"
                                },
                                "method": {
                                  "type": "string",
                                  "example": "PUT"
                                },
                                "pathParams": {
                                  "type": "object",
                                  "properties": {}
                                },
                                "queryParams": {
                                  "type": "object",
                                  "properties": {
                                    "source": {
                                      "type": "string",
                                      "example": "INSTORE"
                                    },
                                    "accountId": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "use_async": {
                                      "type": "string",
                                      "example": "false"
                                    },
                                    "identifierName": {
                                      "type": "string",
                                      "example": "mobile"
                                    },
                                    "identifierValue": {
                                      "type": "string",
                                      "example": "919780375690"
                                    }
                                  }
                                },
                                "body": {
                                  "type": "object",
                                  "properties": {
                                    "reason": {
                                      "type": "string",
                                      "example": "testing"
                                    },
                                    "label": {
                                      "type": "string",
                                      "example": "Suspended"
                                    }
                                  }
                                },
                                "headers": {
                                  "type": "object",
                                  "properties": {
                                    "Authorization": {
                                      "type": "string",
                                      "example": "Basic cHVuLjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw"
                                    },
                                    "content-type": {
                                      "type": "string",
                                      "example": "application/json"
                                    }
                                  }
                                }
                              }
                            },
                            "ValidateMakerAccess_Output": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "ValidatePayload_Output": {
                              "type": "boolean",
                              "example": true,
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
              "code": "curl --location 'https://crm-nightly-new.cc.capillarytech.com/api_gateway/v2/request-workflow/CUSTOMER-STATUS-CHANGE' \\\n--header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \\\n--header 'Cache-Control: no-cache' \\\n--header 'Connection: keep-alive' \\\n--header 'Content-Type: application/json' \\\n--header 'Cookie: JSESSIONID=6926CFEB1A30F0C6C83A4AFCEF3F4D4A' \\\n--header 'Origin: http://localhost:8080' \\\n--header 'Pragma: no-cache' \\\n--header 'Referer: http://localhost:8080/swagger-ui/index.html' \\\n--header 'Sec-Fetch-Dest: empty' \\\n--header 'Sec-Fetch-Mode: cors' \\\n--header 'Sec-Fetch-Site: same-origin' \\\n--header 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \\\n--header 'accept: */*' \\\n--header 'sec-ch-ua: \"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"' \\\n--header 'sec-ch-ua-mobile: ?0' \\\n--header 'sec-ch-ua-platform: \"macOS\"' \\\n--header 'X-CAP-API-AUTH-ORG-ID: 0' \\\n--header 'X-CAP-UI-AUTH-TOKEN;' \\\n--header 'Authorization: Basic Y20uMjoyMDJjYj==k2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \\\n--data '{   \"entityInfo\": {\n        \"tillId\" : \"50682289\",\n        \"storeId\": \"50682288\",\n        \"zoneId\": \"50682286\",\n        \"conceptId\": \"50678331\"\n    },\n    \"payload\":{\n        \"IntouchAPITask-Payload\" : {          \n            \"hostname\" : \"https://eu.api.capillarytech.com\",\n            \"path\": \"/v2/customers/lookup/status\",\n            \"method\": \"PUT\",\n            \"pathParams\" : {      \n            },\n            \"queryParams\" : {\n                \"source\" :\"INSTORE\",\n                \"accountId\" : \"\",\n                \"use_async\" : \"false\",\n                \"identifierName\":\"mobile\",\n                \"identifierValue\":\"919780375690\"\n            },\n            \"body\":{\n                \"reason\":\"testing\",\n                \"label\":\"Suspended\"\n            },\n            \"headers\":{\n                \"Authorization\": \"Basic cHVuLjAxOjIwMmNiOTYyYWM1OTNWI5NjRiMDcxNTJkMjM0Yjcw\",\n                \"content-type\": \"application/json\"\n            }\n        }\n    }\n}'"
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