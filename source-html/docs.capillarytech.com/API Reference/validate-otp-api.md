> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Validate OTP

Validates the OTP generated through the `/otp/generate` API.

# Resource Information

|                    |                            |
| ------------------ | -------------------------- |
| URI for Mobile App | `auth/v1/otp/validate`     |
| URI for Web App    | `auth/v1/web/otp/validate` |
| Rate Limited?      | Yes                        |
| Authentication     | No                         |
| HTTP Method        | POST                       |
| Batch Support      | Yes                        |

# Request URL

For mobile application:

`http:{ae-host}/auth/v1/otp/validate`

For web application:

`http:{ae-host}/auth/v1/web/otp/validate`

```curl Sample request using mobile application
curl --location 'https://eu.api.capillarytech.com/auth/v1/otp/validate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Cookie: _cfuvid=4cDcLYjTxIP0ezb6fRYB0epcC4lTjAo5Uwd.pLnw9Ag-1760013365505-0.0.1.1-604800000' \
--data '{
    "identifierType": "MOBILE",
    "identifierValue": "919999999993",
    "brand": "DocDemo",
    "deviceId": "123456785",
    "sessionId": "P-6e195d03-a643-4d24-bbda-0d6e3810b06d",
    "otp": "999999"
}'
```
```curl Sample request using web application
curl --location 'https://eu.api.capillarytech.com/auth/v1/web/otp/validate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data-raw '{
    "identifierType": "EMAIL",
    "identifierValue": "captest@gmail.com",
    "brand": "DocDemo",
    "sessionId": "P-db0a6a4b-14e9-4b0b-998e-72203c39aa45",
    "otp": "999999"
}'
```

# Request Body Parameters

| Parameter           | Datatype | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifierType`\*  | enum     | Identifier used to generate OTP. Values: `MOBILE`, `EMAIL`, `USERNAME`.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `identifierValue`\* | string   | Value of the specified `identifierType`. For example, if `identifierType` is `MOBILE`, the `identifierValue` is a mobile number.                                                                                                                                                                                                                                                                                                                                                        |
| `deviceId`\*\*      | string   | Unique ID of the device associated with the OTP. Not applicable for web applications.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `brand`\*           | string   | Name of the brand or org associated with the OTP.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `sessionId`\*       | string   | Session ID generated through the `v1/token/generate` API.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `otp`\*             | long     | Validation code received by the customer (either to the mobile number or email ID provided). Note: You can [configure maximum retries](https://docs.capillarytech.com/reference/authentication-configurations#defining-maximum-otp-retry-attempts) as well as [account locking](https://www.google.com/search?q=https://docs.capillarytech.com/reference/authentication-configurations%23account-locking-feature) after several defined unsuccessful attempts to enter the correct OTP. |

Parameters marked with \* are mandatory for both web and mobile applications.

Parameter marked with \*\* is mandatory for the mobile application and not required for web application.

# Sample response

```json Sample response using mobile application
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTk5OTk5MyJdLCJkZXYiOiIxMjM0NTY3ODUiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0MDQ4NjQ3IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDAxNzA4MCwiaWF0IjoxNzYwMDEzNDgwLCJyb2wiOiJVU0VSIn0.8cNCH_T63gDOE4BP9QoRT96eOs-qYlUVpO5MrVJwJPo",
        "key": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTk5OTk5MyJdLCJkZXYiOiIxMjM0NTY3ODUiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0MDQ4NjQ3IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlhdCI6MTc2MDAxMzQ4MCwicm9sIjoiQVVUSCJ9.YbMefn1HT8kkHb1r9hTRyAU-Uf3R-rNpJPlShFa0o4k"
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```
```json Sample response using web application
{
  "status": {
    "success": true,
    "code": 200,
    "message": "SUCCESS"
  },
  "auth": {
    "token": "eyJpZHYiOlsiRU1BSUx8Y2FwdGVzdEBnbWFpbC5jb20iXSwiZGV2IjpudWxsLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0MDY4MjkxIiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDAxMzg0MywiaWF0IjoxNzYwMDEzNzUzLCJyb2wiOiJVU0VSIn0.N7ocUUT5eBXE-rRIoJvRWmMIEN56CIr8_NXQYkUGYig",
    "key": null
  },
  "user": null
}
```

# Response parameters

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
        status
      </td>

      <td>
        Object containing status information
      </td>
    </tr>

    <tr>
      <td>
        * success
      </td>

      <td>
        Boolean indicating the success status
      </td>
    </tr>

    <tr>
      <td>
        * code
      </td>

      <td>
        Number indicating the status code (e.g., 200 for success)
      </td>
    </tr>

    <tr>
      <td>
        * message
      </td>

      <td>
        String providing a message related to the status
      </td>
    </tr>

    <tr>
      <td>
        auth
      </td>

      <td>
        Object containing authentication information
      </td>
    </tr>

    <tr>
      <td>
        * token
      </td>

      <td>
        String representing the authentication token. By default,  the token is valid for 15 minutes.
      </td>
    </tr>

    <tr>
      <td>
        * key
      </td>

      <td>
        String representing the authentication key. This key has no validity and can be used to regenerate the authentication token. It is recommended to set an expiry of the key to avoid unauthorized usage. For more information, refer to the section [Configuring validity for the key](https://docs.capillarytech.com/reference/authentication-configurations#configuring-validity-for-the-key).
      </td>
    </tr>

    <tr>
      <td>
        user
      </td>

      <td>
        Object containing user information
      </td>
    </tr>

    <tr>
      <td>
        * appRegistered
      </td>

      <td>
        Boolean indicating if the user is registered in the app
      </td>
    </tr>

    <tr>
      <td>
        * sessionId
      </td>

      <td>
        Value representing the user's session ID
      </td>
    </tr>

    <tr>
      <td>
        * role
      </td>

      <td>
        String indicating the user's role (e.g., "USER")
      </td>
    </tr>

    <tr>
      <td>
        * userRegisteredForPassword
      </td>

      <td>
        Boolean indicating if the user is registered for a password
      </td>
    </tr>
  </tbody>
</Table>

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
    "/auth/v1/web/otp/validate": {
      "post": {
        "summary": "Validate OTP",
        "description": "Validates the OTP generated through the `/otp/generate` API.",
        "operationId": "validate-otp-api",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "identifierType",
                  "identifierValue",
                  "brand",
                  "deviceId",
                  "sessionId",
                  "otp"
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
                  "deviceId": {
                    "type": "string",
                    "description": "Unique ID of the device from which the customer has generated the token."
                  },
                  "sessionId": {
                    "type": "string",
                    "description": "Session ID generated through the `v1/token/generate` API."
                  },
                  "otp": {
                    "type": "string",
                    "description": "Validation code received by the customer."
                  }
                }
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "identifierType": "MOBILE",
                    "identifierValue": "9940000000",
                    "deviceId": "deviceid1",
                    "brand": "standardapp",
                    "sessionId": "D-502259d3-d4d6-4458-bc5f-b89d3d8e4c7b",
                    "otp": "276889"
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
                  "Sample response using mobile application": {
                    "value": {
                      "status": {
                        "success": true,
                        "code": 200,
                        "message": "SUCCESS"
                      },
                      "auth": {
                        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTk5OTk5MyJdLCJkZXYiOiIxMjM0NTY3ODUiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0MDQ4NjQ3IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDAxNzA4MCwiaWF0IjoxNzYwMDEzNDgwLCJyb2wiOiJVU0VSIn0.8cNCH_T63gDOE4BP9QoRT96eOs-qYlUVpO5MrVJwJPo",
                        "key": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTk5OTk5MyJdLCJkZXYiOiIxMjM0NTY3ODUiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0MDQ4NjQ3IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlhdCI6MTc2MDAxMzQ4MCwicm9sIjoiQVVUSCJ9.YbMefn1HT8kkHb1r9hTRyAU-Uf3R-rNpJPlShFa0o4k"
                      },
                      "user": {
                        "appRegistered": false,
                        "sessionId": null,
                        "role": "USER",
                        "userRegisteredForPassword": true
                      }
                    },
                    "summary": "Sample response using mobile application"
                  },
                  "Sample response using web application": {
                    "summary": "Sample response using web application",
                    "value": {
                      "status": {
                        "success": true,
                        "code": 200,
                        "message": "SUCCESS"
                      },
                      "auth": {
                        "token": "eyJpZHYiOlsiRU1BSUx8Y2FwdGVzdEBnbWFpbC5jb20iXSwiZGV2IjpudWxsLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0MDY4MjkxIiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDAxMzg0MywiaWF0IjoxNzYwMDEzNzUzLCJyb2wiOiJVU0VSIn0.N7ocUUT5eBXE-rRIoJvRWmMIEN56CIr8_NXQYkUGYig",
                        "key": null
                      },
                      "user": null
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "object",
                      "properties": {
                        "success": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "code": {
                          "type": "integer",
                          "example": 200,
                          "default": 0
                        },
                        "message": {
                          "type": "string",
                          "example": "SUCCESS"
                        }
                      }
                    },
                    "auth": {
                      "type": "object",
                      "properties": {
                        "token": {
                          "type": "string",
                          "example": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaXNjIjoiZmFsc2UiLCJvZ2MiOlsiMTUxMDYwfHNhLmRlbW8uc29sdXRpb24iXSwiZXhwIjoxNTk3OTQzODU1LCJpYXQiOjE1OTc5NDAyNTUsInJvbCI6IlVTRVIifQ.Wyt_xxlqtmMH3lyReO718sDokngYGp_HSLuiBOyaEds"
                        },
                        "key": {
                          "type": "string",
                          "example": "eyJpZHYiOlsiTU9CSUxFfDk5NDU1NjAyMjQiXSwiZGV2IjoiZGV2aWNlaWQxIiwib3JnIjoiU1RBTkRBUkRBUFAiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3Njg4MTYiLCJpc3MiOiJDQVBJTExBUlkgVEVDSE5PTE9HSUVTIiwiaWF0IjoxNTk3OTQwMjU1LCJyb2wiOiJBVVRIIn0.UKCOU1oFLPsRx5YJRkClIaRVmE1lNDCjuuKQ9nnMdhE"
                        }
                      }
                    },
                    "user": {
                      "type": "object",
                      "properties": {
                        "appRegistered": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "sessionId": {},
                        "role": {
                          "type": "string",
                          "example": "USER"
                        },
                        "userRegisteredForPassword": {
                          "type": "boolean",
                          "example": false,
                          "default": true
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
              "code": "curl --location 'https://eu.api.capillarytech.com/auth/v1/otp/validate' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Cookie: _cfuvid=4cDcLYjTxIP0ezb6fRYB0epcC4lTjAo5Uwd.pLnw9Ag-1760013365505-0.0.1.1-604800000' \\\n--data '{\n    \"identifierType\": \"MOBILE\",\n    \"identifierValue\": \"919999999993\",\n    \"brand\": \"DocDemo\",\n    \"deviceId\": \"123456785\",\n    \"sessionId\": \"P-6e195d03-a643-4d24-bbda-0d6e3810b06d\",\n    \"otp\": \"999999\"\n}'",
              "language": "shell",
              "name": "Sample request using mobile application"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/auth/v1/web/otp/validate' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Cookie: _cfuvid=XCyqCZlwYDamaqrRf8xpmEpz1ZwdbLmtWOS4zHmfliY-1760013652075-0.0.1.1-604800000' \\\n--data-raw '{\n    \"identifierType\": \"EMAIL\",\n    \"identifierValue\": \"captest@gmail.com\",\n    \"brand\": \"DocDemo\",\n   \n    \"sessionId\": \"P-db0a6a4b-14e9-4b0b-998e-72203c39aa45\",\n    \"otp\": \"999999\"\n}'",
              "language": "shell",
              "name": "Sample request using web application"
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