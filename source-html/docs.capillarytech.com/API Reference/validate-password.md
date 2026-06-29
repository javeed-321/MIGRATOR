> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Validate Password

Validates the password of an existing user account 

Validates the password of an existing user account and generates an access token and a key when using a mobile application. By default, the token remains valid for 15 minutes, and the key can be used to regenerate a new token.

A first-time user cannot directly validate the password. Instead, the user must enter the password during [token generation](https://docs.capillarytech.com/reference/generate-authentication-tokenapi#/), [generate OTP](https://docs.capillarytech.com/reference/generate-otp-api#/), and [validate it using an OTP](https://docs.capillarytech.com/reference/validate-otp-api#/). From the next login onward, the user can directly validate the password.

# Resource Information

|                        |                                 |
| ---------------------- | ------------------------------- |
| **URI for Mobile App** | `auth/v1/password/validate`     |
| **URI for Web App**    | `auth/v1/web/password/validate` |
| **Rate Limited?**      | Yes                             |
| **Authentication**     | No                              |
| **HTTP Method**        | POST                            |
| **Batch Support**      | No                              |

# Request URL

For mobile application:

`http:`{`ae-host`}`/auth/v1/password/validate`

For web application:

`http:`{`ae-host`}`/auth/v1/web/password/validate`

# Request Body Parameters

```curl Sample request for mobile application
curl --location 'https://eu.api.capillarytech.com/auth/v1/password/validate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "identifierType": "MOBILE",
    "identifierValue": "919999922332",
    "brand": "DocDemo",
    "deviceId": "deviceid1",
    "password": "abc123",
    "sessionId": "P-268e52ac-0546-4ae1-8826-578a897efeae"
}'
```
```curl Sample request for web application
curl --location 'https://eu.api.capillarytech.com/auth/v1/web/password/validate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "identifierType": "MOBILE",
    "identifierValue": "919999922332",
    "brand": "DocDemo",
    "password": "abc123",
    "sessionId": "P-570b6b63-52e1-4fd1-a904-3489acb6a976"
}'
```

<br />

| Parameter               | Datatype | Description                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`identifierType`**\*  | enum     | Identifier used to generate OTP. Values: `MOBILE`, `EMAIL`, `USERNAME`.                                                                                                                                                                                                                                                                                                                                                          |
| **`identifierValue`**\* | string   | Value of the specified `identifierType`. For example, if `identifierType` is `MOBILE`, the `identifierValue` is the mobile number.                                                                                                                                                                                                                                                                                               |
| **`deviceId`**\*\*      | string   | Unique ID of the device used for password validation. Should be the same as the `deviceId` used to generate the current token. Not applicable for web applications.                                                                                                                                                                                                                                                              |
| **`brand`**\*           | string   | Name of the brand or org associated with the current account.                                                                                                                                                                                                                                                                                                                                                                    |
| **`sessionId`**\*       | string   | Session ID generated through the `v1/token/generate` API.                                                                                                                                                                                                                                                                                                                                                                        |
| **`password`**\*        | string   | Password of the current account. Note: You can [configure maximum retries](https://docs.capillarytech.com/reference/authentication-configurations#defining-maximum-otp-retry-attempts) as well as [account locking](https://www.google.com/search?q=https://docs.capillarytech.com/reference/authentication-configurations%23account-locking-feature) after several defined unsuccessful attempts to enter the correct password. |

* Parameters marked with *are mandatory, and the parameters marked with* \* are required for the mobile app.

# Response parameters

```json Sample response for mobile application
{
    "status": {
        "success": true,
        "code": 200,
        "message": "SUCCESS"
    },
    "auth": {
        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM1NjYyNSwiaWF0IjoxNzYwMzUzMDI1LCJyb2wiOiJVU0VSIn0.5fvUeAvhu7kOkhJRubZ0tiEyzEQJ4ARpwxV6EXuFt1I",
        "key": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6ZmFsc2UsImlhdCI6MTc2MDM1MzAyNSwicm9sIjoiQVVUSCJ9.ArsBygaS9m5cgRihZYtLyorkuvSyIK0aMOVPnErHZKI"
    },
    "identifiers": {
        "identifierList": null
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
        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOm51bGwsIm9yZyI6IkRPQ0RFTU8iLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM2NDE0MiwiaWF0IjoxNzYwMzUzMzQyLCJyb2wiOiJVU0VSIn0.Y_bFGVIrxlFLJGABIg-VSVE9ubyoin9XGFboPq44xys",
        "key": null
    },
    "identifiers": {
        "identifierList": null
    },
    "user": {
        "appRegistered": false,
        "sessionId": null,
        "role": "USER",
        "userRegisteredForPassword": true
    }
}
```

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
        String representing the authentication key.
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

# Error code

| Code | Description                                                                   |
| :--- | :---------------------------------------------------------------------------- |
| 1526 | Indicates a mismatch between the identifier type and its corresponding value. |

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
    "/auth/v1/web/password/validate": {
      "post": {
        "summary": "Validate Password",
        "description": "Validates the password of an existing user account and generates the access token and key. The token is valid for 15 minutes by default. You can use the key to regenerate token.",
        "operationId": "validate-password",
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
                  "password"
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
                  "password": {
                    "type": "string",
                    "description": "Account password to validate."
                  }
                }
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "identifierType": "USERNAME",
                    "identifierValue": "9940000000",
                    "deviceId": "deviceid1",
                    "brand": "KANMODEMO",
                    "sessionId": "D-c62d7326-e122-4186-8c72-e42f270b0cdf",
                    "password": "password"
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
                        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM1NjYyNSwiaWF0IjoxNzYwMzUzMDI1LCJyb2wiOiJVU0VSIn0.5fvUeAvhu7kOkhJRubZ0tiEyzEQJ4ARpwxV6EXuFt1I",
                        "key": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOiJkZXZpY2VpZDEiLCJvcmciOiJET0NERU1PIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsIm1mYSI6ZmFsc2UsImlhdCI6MTc2MDM1MzAyNSwicm9sIjoiQVVUSCJ9.ArsBygaS9m5cgRihZYtLyorkuvSyIK0aMOVPnErHZKI"
                      },
                      "identifiers": {
                        "identifierList": null
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
                        "token": "eyJpZHYiOlsiTU9CSUxFfDkxOTk5OTkyMjMzMiJdLCJkZXYiOm51bGwsIm9yZyI6IkRPQ0RFTU8iLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI0NDEyNDU4IiwiaXNzIjoiQ0FQSUxMQVJZIFRFQ0hOT0xPR0lFUyIsImlzYyI6ImZhbHNlIiwib2djIjpbIjEwMDczN3xuZWVyYWouZG9jIl0sImV4cCI6MTc2MDM2NDE0MiwiaWF0IjoxNzYwMzUzMzQyLCJyb2wiOiJVU0VSIn0.Y_bFGVIrxlFLJGABIg-VSVE9ubyoin9XGFboPq44xys",
                        "key": null
                      },
                      "identifiers": {
                        "identifierList": null
                      },
                      "user": {
                        "appRegistered": false,
                        "sessionId": null,
                        "role": "USER",
                        "userRegisteredForPassword": true
                      }
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
                          "example": true,
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
              "code": "curl --location 'https://eu.api.capillarytech.com/auth/v1/password/validate' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--data '{\n    \"identifierType\": \"MOBILE\",\n    \"identifierValue\": \"919999922332\",\n    \"brand\": \"DocDemo\",\n    \"deviceId\": \"deviceid1\",\n    \"password\": \"abc123\",\n    \"sessionId\": \"P-268e52ac-0546-4ae1-8826-578a897efeae\"\n}'",
              "language": "shell",
              "name": "Sample request for mobile app"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/auth/v1/web/password/validate' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--data '{\n    \"identifierType\": \"MOBILE\",\n    \"identifierValue\": \"919999922332\",\n    \"brand\": \"DocDemo\",\n    \"password\": \"abc123\",\n    \"sessionId\": \"P-570b6b63-52e1-4fd1-a904-3489acb6a976\"\n}'",
              "language": "shell",
              "name": "Sample request for a web application"
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