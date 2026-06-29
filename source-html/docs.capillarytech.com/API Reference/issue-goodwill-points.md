> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Issue goodwill points request

This API endpoint enables initiating a Goodwill points Workflow, enabling the allocation of goodwill points to a customer.

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

`[https://eucrm.cc.capillarytech.com/api_gateway/v2/request-workflow/GOODWILL-POINTS`

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group
* [ ] Maker request access (CanMakeRequest).  Contact the access team for access.

# Resource information

|                        |                                                     |
| :--------------------- | :-------------------------------------------------- |
| URI                    | /api\_gateway/v2/request-workflow/GOODWILL-POINTS\` |
| HTTP Method            | POST                                                |
| Pagination             | No                                                  |
| Batch support          | No                                                  |
| Rate limit information | None                                                |

# Header information

|                       |                                                                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| X-CAP-API-AUTH-ORG-ID | Organization ID                                                                                                            |
| X-CAP-UI-AUTH-TOKEN   | A JSON Web Token (JWT) is used for intouch user authentication.  CanMakeRequest access is required to generate this token. |

# Request body parameters

<br />

| Parameter (Parameters marked \* are mandatory) | Type   | Description                                                                                                                                                                                                                                   |
| ---------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityInfo\*                                   | Object | Information about the entity (till, store, zone, concept)                                                                                                                                                                                     |
| - tillId\*                                     | String | The unique identifier for the till associated with the transaction.                                                                                                                                                                           |
| - storeId\*                                    | String | The unique identifier for the store where the transaction occurs.                                                                                                                                                                             |
| - zoneId\*                                     | String | The unique identifier for the zone or area the store is associated with.                                                                                                                                                                      |
| - conceptId\*                                  | String | The unique identifier for the concept or branding associated with the store.                                                                                                                                                                  |
| payload                                        | Object | The Intouch payload for the Goodwill points Workflow is a structured set of data that facilitates the allocation of goodwill points within the Intouch system. This payload contains specific information required to execute this operation. |
| - IntouchAPITask-Payload                       | Object | Information about the Intouch API task                                                                                                                                                                                                        |
| - hostname\*                                   | String | Hostname for the API endpoint. Example - `<https://eucrm-new.cc.capillarytech.com>`                                                                                                                                                           |
| - path\*                                       | String | `/internal/goodwill/`. This path denotes the endpoint within the API that manages the allocation of goodwill points. It defines the action that needs to be performed, which in this case, is the allocation of goodwill points               |
| - method\*                                     | String | POST. The HTTP method used for the request                                                                                                                                                                                                    |
| \pathParams                                    | Object | This field is reserved for any dynamic parameters that may be included in the API endpoint URL.  **Note:** In this workflow, pathParams may not be utilized, as the necessary information is typically provided in the request body.          |
| \queryParams\*                                 | Object | Additional parameters that can be appended to the API request URL for further customization. \*Note:\*\* In this workflow, query parameters may not be utilized, as the necessary information is typically provided in the request body.      |
| \body\*                                        | Object | The body section contains the essential data for the goodwill points operation                                                                                                                                                                |
| referenceId\*                                  | String | Unique reference ID for the request                                                                                                                                                                                                           |
| reason\*:                                      | String | This field specifies the reason for the goodwill points allocation. It might include information like why the goodwill points allocation is being done.                                                                                       |
| baseType\*:                                    | String | This indicates the type of entity that we are allocating. POINTS, in this case.                                                                                                                                                               |
| programId\*                                    | Number | Specifies the loyalty program ID for which goodwill points allocation is taking place.                                                                                                                                                        |
| awardingTillId\*                               | Number | Specifies the till ID from which goodwill points allocation is taking place.                                                                                                                                                                  |
| earningEntityType\*                            | String | Specifies the entity Type for which goodwill point allocation is taking place, eg “CUSTOMER“.                                                                                                                                                 |
| earningEntityId\*                              | Number | Specifies the ID of the user for which goodwill point allocation is taking place                                                                                                                                                              |
| points\*                                       | Number | Specifies the amount of points to be allocated                                                                                                                                                                                                |
| source\*                                       | String | Specifies the source of goodwill point allocation eg “API”.                                                                                                                                                                                   |
| \headers\*                                     | Object | Headers provide additional context and information about the request.                                                                                                                                                                         |
| - Authorization                                | String | Contains the authentication credentials needed to access the Intouch API.                                                                                                                                                                     |
| - content-type                                 | String | The content type of the request (application/JSON in this case). This field specifies that the payload is in JSON format, ensuring that the data is properly interpreted by the API.                                                          |
| -X-CAP-API-AUTH-ORG-ID                         | Number | Organisation ID                                                                                                                                                                                                                               |

```json Request body
{   "entityInfo": {
        "tillId" : "50682289",
        "storeId": "50682288",
        "zoneId": "50682286",
        "conceptId": "50678331"
    },
    "payload":{
        "IntouchAPITask-Payload" : {          
            "hostname" : "http://internal-intouch-api.default:1900",
            "path": "/internal/goodwill/",
            "method": "POST",
            "pathParams" : {      
            },
            "queryParams" : {
            },
            "body":{
	            "referenceId":"ref_id_1299314173",
                "reason":"reason",
                "baseType":"POINTS",
                "programId":2739,
                "awardingTillId":50682616,
                "earningEntityType":"CUSTOMER",
                "earningEntityId":382332518,
                "points":20,
                "source":"API"
                },
            "headers":{
                "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                "content-type": "application/json",
                "X-CAP-API-AUTH-ORG-ID": "51250"
            }
        }
    }
}   
           
```

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

```json 200 OK
 {
    "data": {
        "requestId": "ffcf19fb-a3fd-11ee-9fa7-4650f67465b8",
        "userId": 232134,
        "userName": "tomswayer@tipent.com",
        "requestType": "goodwill-points",
        "state": "AdminTask",
        "startTime": "2023-12-26T20:19:40",
        "endTime": null,
        "details": {
            "IntouchAPITask-Payload": {
                "hostname": "http://internal-intouch-api.default:1900",
                "path": "/internal/goodwill/",
                "method": "POST",
                "pathParams": {},
                "queryParams": {},
                "body": {
                    "referenceId": "ref_id_1299314173",
                    "reason": "reason",
                    "baseType": "POINTS",
                    "programId": 2739,
                    "awardingTillId": 50682616,
                    "earningEntityType": "CUSTOMER",
                    "earningEntityId": 382332518,
                    "points": 20,
                    "source": "API"
                },
                "headers": {
                    "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                    "content-type": "application/json",
                    "X-CAP-API-AUTH-ORG-ID": "51250"
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
    "/api_gateway/v2/request-workflow/GOODWILL-POINTS": {
      "post": {
        "summary": "Issue goodwill points request",
        "description": "",
        "operationId": "issue-goodwill-points",
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
                        "requestId": "ffcf19fb-a3fd-11ee-9fa7-4650f67465b8",
                        "userId": 232134,
                        "userName": "tomswayer@tipent.com",
                        "requestType": "goodwill-points",
                        "state": "AdminTask",
                        "startTime": "2023-12-26T20:19:40",
                        "endTime": null,
                        "details": {
                          "IntouchAPITask-Payload": {
                            "hostname": "http://internal-intouch-api.default:1900",
                            "path": "/internal/goodwill/",
                            "method": "POST",
                            "pathParams": {},
                            "queryParams": {},
                            "body": {
                              "referenceId": "ref_id_1299314173",
                              "reason": "reason",
                              "baseType": "POINTS",
                              "programId": 2739,
                              "awardingTillId": 50682616,
                              "earningEntityType": "CUSTOMER",
                              "earningEntityId": 382332518,
                              "points": 20,
                              "source": "API"
                            },
                            "headers": {
                              "Authorization": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=",
                              "content-type": "application/json",
                              "X-CAP-API-AUTH-ORG-ID": "51250"
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
                          "example": "ffcf19fb-a3fd-11ee-9fa7-4650f67465b8"
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
                          "example": "goodwill-points"
                        },
                        "state": {
                          "type": "string",
                          "example": "AdminTask"
                        },
                        "startTime": {
                          "type": "string",
                          "example": "2023-12-26T20:19:40"
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
                                  "example": "http://internal-intouch-api.default:1900"
                                },
                                "path": {
                                  "type": "string",
                                  "example": "/internal/goodwill/"
                                },
                                "method": {
                                  "type": "string",
                                  "example": "POST"
                                },
                                "pathParams": {
                                  "type": "object",
                                  "properties": {}
                                },
                                "queryParams": {
                                  "type": "object",
                                  "properties": {}
                                },
                                "body": {
                                  "type": "object",
                                  "properties": {
                                    "referenceId": {
                                      "type": "string",
                                      "example": "ref_id_1299314173"
                                    },
                                    "reason": {
                                      "type": "string",
                                      "example": "reason"
                                    },
                                    "baseType": {
                                      "type": "string",
                                      "example": "POINTS"
                                    },
                                    "programId": {
                                      "type": "integer",
                                      "example": 2739,
                                      "default": 0
                                    },
                                    "awardingTillId": {
                                      "type": "integer",
                                      "example": 50682616,
                                      "default": 0
                                    },
                                    "earningEntityType": {
                                      "type": "string",
                                      "example": "CUSTOMER"
                                    },
                                    "earningEntityId": {
                                      "type": "integer",
                                      "example": 382332518,
                                      "default": 0
                                    },
                                    "points": {
                                      "type": "integer",
                                      "example": 20,
                                      "default": 0
                                    },
                                    "source": {
                                      "type": "string",
                                      "example": "API"
                                    }
                                  }
                                },
                                "headers": {
                                  "type": "object",
                                  "properties": {
                                    "Authorization": {
                                      "type": "string",
                                      "example": "Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA="
                                    },
                                    "content-type": {
                                      "type": "string",
                                      "example": "application/json"
                                    },
                                    "X-CAP-API-AUTH-ORG-ID": {
                                      "type": "string",
                                      "example": "51250"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/v2/request-workflow/GOODWILL-POINTS' \\\n--header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \\\n--header 'Cache-Control: no-cache' \\\n--header 'Connection: keep-alive' \\\n--header 'Content-Type: application/json' \\\n--header 'Cookie: JSESSIONID=6926CFEB1A30F0C6C83A4AFCEF3F4D4A' \\\n--header 'Origin: http://localhost:8080' \\\n--header 'Pragma: no-cache' \\\n--header 'Referer: http://localhost:8080/swagger-ui/index.html' \\\n--header 'Sec-Fetch-Dest: empty' \\\n--header 'Sec-Fetch-Mode: cors' \\\n--header 'Sec-Fetch-Site: same-origin' \\\n--header 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \\\n--header 'accept: */*' \\\n--header 'sec-ch-ua: \"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"' \\\n--header 'sec-ch-ua-mobile: ?0' \\\n--header 'sec-ch-ua-platform: \"macOS\"' \\\n--header 'X-CAP-API-AUTH-ORG-ID: 0' \\\n--header 'X-CAP-UI-AUTH-TOKEN;' \\\n--header 'Authorization: Basic Y20uMjoyMDJjYjk2jNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==' \\\n--data '{   \"entityInfo\": {\n        \"tillId\" : \"50682289\",\n        \"storeId\": \"50682288\",\n        \"zoneId\": \"50682286\",\n        \"conceptId\": \"50678331\"\n    },\n    \"payload\":{\n        \"IntouchAPITask-Payload\" : {          \n            \"hostname\" : \"http://internal-intouch-api.default:1900\",\n            \"path\": \"/internal/goodwill/\",\n            \"method\": \"POST\",\n            \"pathParams\" : {      \n            },\n            \"queryParams\" : {\n            },\n            \"body\":{\n\t            \"referenceId\":\"ref_id_129931417\",\n                \"reason\":\"reason\",\n                \"baseType\":\"POINTS\",\n                \"programId\":2739,\n                \"awardingTillId\":50682616,\n                \"earningEntityType\":\"CUSTOMER\",\n                \"earningEntityId\":382332518,\n                \"points\":20,\n                \"source\":\"API\"\n                },\n            \"headers\":{\n                \"Authorization\": \"Basic aW5kLjE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzEQyMzRiNzA=\",\n                \"content-type\": \"application/json\",\n                \"X-CAP-API-AUTH-ORG-ID\": \"51250\"\n            }\n        }\n    }\n}   '"
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