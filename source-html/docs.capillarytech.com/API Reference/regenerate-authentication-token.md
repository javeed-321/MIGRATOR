> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Regenerate Authentication Token

Generates authentication token using auth key or expired token generated in `otp/validate` API. By default, a token is valid for 15 minutes. You can use this API only for orgs in which password based authentication is enabled.

# Resource Information

|                        |                                   |
| ---------------------- | --------------------------------- |
| **URI for Mobile App** | **/auth/v1/token/regenerate**     |
| **URI for Web App**    | **/auth/v1/web/token/regenerate** |
| **Rate Limited?**      | Yes                               |
| **HTTP Method**        | POST                              |
| **Authentication**     | No                                |
| **Batch Support**      | No                                |

# Request URL

For mobile application:

`http://`{`ae-host`}`/auth/v1/token/regenerate`

For web application:

`http://`{`ae-host`}`/`{`auth`}`/v1/web/token/regenerate`

# Example request

```curl Sample request for mobile application
curl --location 'https://eu.api.capillarytech.com/auth/v1/token/regenerate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Cookie: _cfuvid=Ot3GURj_wgib7uz.8f4SW6vyut.8YIVFkWCyvT.QyuE-1760089512848-0.0.1.1-604800000' \
--data '
{
  "identifierType": "MOBILE",
  "identifierValue": "919999922332",
  "brand": "DocDemo",
  "deviceId": "deviceid1",
	"key":"eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6ZmFsc2UsImlhdCI6MTc2MDM1MzAyNSwicm9sIjoiQVVUSCJ9.ArsBygaS9m5cgRihZYtLyorkuvSyIK0aMOVPnErHZKI"
}
'
```
```curl Sample request for web application
curl --location 'https://eu.api.capillarytech.com/auth/v1/web/token/regenerate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Cookie: _cfuvid=Ot3GURj_wgib7uz.8f4SW6vyut.8YIVFkWCyvT.QyuE-1760089512848-0.0.1.1-604800000; _cfuvid=xG1SSpjArOPbwu586VvrxV5Lb82NDs_YTMtn6I96TjE-1760358400850-0.0.1.1-604800000' \
--data '
{
  "identifierType": "MOBILE",
  "identifierValue": "919999922332",
  "brand": "DocDemo",
  "deviceId": "deviceid1",
  "expiredToken":"eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOm51bGwsIm9yZyI6IkRPQ0RFTU8iLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM2NDE0MiwiaWF0IjoxNzYwMzUzMzQyLCJyb2wiOiJVU0VSIn0.Y_bFGVIrxlFLJGABIg-VSVE9ubyoin9XGFboPq44xys"
}
'
```

<br />

| **Parameter**     | **Datatype** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifierType\*  | enum         | Identifier used for token generation. Values: MOBILE, EMAIL, USERNAME.                                                                                                                                                                                                                                                                                                                                                            |
| identifierValue\* | string       | Value of the specified identifierType. For example, if identifierType is MOBILE, the identifierValue is mobile number.                                                                                                                                                                                                                                                                                                            |
| deviceId\*        | string       | Unique ID of the device from which the customer has generated the token.                                                                                                                                                                                                                                                                                                                                                          |
| brand\*           | string       | Name of the brand or org for which authentication needs to be verified.                                                                                                                                                                                                                                                                                                                                                           |
| mobile\*\*        | string       | Mobile number of the customer. Either mobile number or email ID is required to authenticate with username.                                                                                                                                                                                                                                                                                                                        |
| email\*\*         | string       | Email ID of the customer. Either mobile number or email ID is required to authenticate with username.                                                                                                                                                                                                                                                                                                                             |
| key\*\*           | string       | Unique key generated for the successful mobile app OTP validation. If the key expiry configuration is enabled, make sure that the unique key is valid and not expired. The API throws an error if the key is expired. For information on configuring the expiry time for the key, refer to the [documentation on the configurations](https://docs.capillarytech.com/reference/validate-otp-api#configuring-validity-for-the-key). |
| expiredToken\*\*  | string       | Expired web token. It is the unique token generated during successful web [OTP](https://docs.capillarytech.com/reference/validate-otp-api#/) or [password validation](https://docs.capillarytech.com/reference/validate-password#/).                                                                                                                                                                                              |

Parameters marked with *are mandatory and the ones marked with* \* are required when the identifierType is USERNAME.

# Example response

```json Sample response for mobile application
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM1NjY5MSwiaWF0IjoxNzYwMzUzMDkxLCJyb2wiOiJVU0VSIn0.hb_3vb2Txm-V3LOSFsB7WVdMA9zeYoTXC4xFSw5LVlc",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```
```json Sample response for web application
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOm51bGwsIm9yZyI6IkRPQ0RFTU8iLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM1ODYwNiwiaWF0IjoxNzYwMzU4NTE2LCJyb2wiOiJVU0VSIn0.ItIkocenPtaOgjkRGdB52uHLj3VRz5uBHrCco88keaM",
        "key": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": false
    }
}
```

# Error code

| Error code                    | Solution                         |
| :---------------------------- | :------------------------------- |
| 1597 Key expired or not valid | Make sure that the key is valid. |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v1",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}",
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
    "/auth/v1/web/token/regenerate": {
      "post": {
        "summary": "Regenerate Authentication Token",
        "description": "Generates authentication token using auth key or expired token generated in `otp/validate` API. By default, a token is valid for 15 minutes. You can use this API only for orgs in which password based authentication is enabled.",
        "operationId": "regenerate-authentication-token",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "identifierType",
                  "identifierValue",
                  "brand",
                  "expiredToken"
                ],
                "properties": {
                  "identifierType": {
                    "type": "string",
                    "description": "Identifier used for token generation. Values: MOBILE, EMAIL, USERNAME."
                  },
                  "identifierValue": {
                    "type": "string",
                    "description": "Value of the specified identifierType."
                  },
                  "brand": {
                    "type": "string",
                    "description": "Name of the brand/org for which authentication needs to be verified."
                  },
                  "expiredToken": {
                    "type": "string",
                    "description": "Unique key generated for the successful web OTP validation."
                  }
                }
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "identifierType": "MOBILE",
                    "identifierValue": "0495678923",
                    "brand": "STANDARDAPP",
                    "expiredToken": "nhdbYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiMzJydHNkZXJlZCIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5NzY1NTgxMywiaWF0IjoxNTk3NjUyMjEzLCJyb2wiOiJWSUVXIn0.2LqAg3tDVu8VwasSXuwiL6p917NCxgpKEt76qqrHGsF"
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
                  "Sample response for mobile application": {
                    "value": {
                      "status": {
                        "success": true,
                        "code": 200,
                        "message": "SUCCESS"
                      },
                      "auth": {
                        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM1NjY5MSwiaWF0IjoxNzYwMzUzMDkxLCJyb2wiOiJVU0VSIn0.hb_3vb2Txm-V3LOSFsB7WVdMA9zeYoTXC4xFSw5LVlc",
                        "key": null
                      },
                      "user": {
                        "appRegistered": false,
                        "sessionId": null,
                        "role": "USER",
                        "userRegisteredForPassword": true
                      }
                    },
                    "summary": "Sample response for mobile application"
                  },
                  "Sample response for web application": {
                    "summary": "Sample response for web application",
                    "value": {
                      "status": {
                        "success": true,
                        "code": 200,
                        "message": "SUCCESS"
                      },
                      "auth": {
                        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOm51bGwsIm9yZyI6IkRPQ0RFTU8iLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM1MzUzMSwiaWF0IjoxNzYwMzUzNDQxLCJyb2wiOiJVU0VSIn0.STzPzVNrWx7MYdkJuwn7UkJN_2w6PLZOt2jW4RaZEJc",
                        "key": null
                      },
                      "user": {
                        "appRegistered": false,
                        "sessionId": null,
                        "role": "USER",
                        "userRegisteredForPassword": false
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "identifierType": {
                      "type": "string",
                      "example": "MOBILE"
                    },
                    "identifierValue": {
                      "type": "string",
                      "example": "0495678923"
                    },
                    "brand": {
                      "type": "string",
                      "example": "STANDARDAPP"
                    },
                    "expiredToken": {
                      "type": "string",
                      "example": "nhdbYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiMzJydHNkZXJlZCIsIm9yZyI6IlNUQU5EQVJEQVBQIiwiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwib2djIjpbIjE1MTA2MHxzYS5kZW1vLnNvbHV0aW9uIl0sImV4cCI6MTU5NzY1NTgxMywiaWF0IjoxNTk3NjUyMjEzLCJyb2wiOiJWSUVXIn0.2LqAg3tDVu8VwasSXuwiL6p917NCxgpKEt76qqrHGsF"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/auth/v1/token/regenerate' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Cookie: _cfuvid=Ot3GURj_wgib7uz.8f4SW6vyut.8YIVFkWCyvT.QyuE-1760089512848-0.0.1.1-604800000; _cfuvid=L7huDLbSg7dPFRtKKZz1XEX7JJFTILmJiOX5zYMrnb4-1760358330261-0.0.1.1-604800000' \\\n--data '\n{\n  \"identifierType\": \"MOBILE\",\n  \"identifierValue\": \"919999922332\",\n  \"brand\": \"DocDemo\",\n  \"deviceId\": \"deviceid1\",\n  \"key\":\"eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6ZmFsc2UsImlhdCI6MTc2MDM1MzAyNSwicm9sIjoiQVVUSCJ9.ArsBygaS9m5cgRihZYtLyorkuvSyIK0aMOVPnErHZKI\"\n}\n'",
              "language": "shell",
              "name": "Sample request for mobile application"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/auth/v1/web/token/regenerate' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Cookie: _cfuvid=Ot3GURj_wgib7uz.8f4SW6vyut.8YIVFkWCyvT.QyuE-1760089512848-0.0.1.1-604800000; _cfuvid=xG1SSpjArOPbwu586VvrxV5Lb82NDs_YTMtn6I96TjE-1760358400850-0.0.1.1-604800000' \\\n--data '\n{\n  \"identifierType\": \"MOBILE\",\n  \"identifierValue\": \"919999922332\",\n  \"brand\": \"DocDemo\",\n  \"deviceId\": \"deviceid1\",\n  \"expiredToken\":\"eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOm51bGwsIm9yZyI6IkRPQ0RFTU8iLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM2NDE0MiwiaWF0IjoxNzYwMzUzMzQyLCJyb2wiOiJVU0VSIn0.Y_bFGVIrxlFLJGABIg-VSVE9ubyoin9XGFboPq44xys\"\n}\n'",
              "language": "shell",
              "name": "Sample request for web application"
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
    "headers": [
      {
        "key": "Content-Type",
        "value": "application/json"
      },
      {
        "key": "Accept",
        "value": "application/json"
      }
    ],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```