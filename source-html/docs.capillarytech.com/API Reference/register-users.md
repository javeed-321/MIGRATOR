> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Register User

Lets the org’s InStore customers to register on their web page or mobile app. You need to use only the mobile number/email ID that is registered on InStore.

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
    "/user_auth/register": {
      "post": {
        "summary": "Register User",
        "description": "Lets the org’s InStore customers to register on their web page or mobile app. You need to use only the mobile number/email ID that is registered on InStore.",
        "operationId": "register-users",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "mobile",
                  "email",
                  "password"
                ],
                "properties": {
                  "mobile": {
                    "type": "string",
                    "description": "Specify a valid mobile number of the user that is already registered with your org (in any source)."
                  },
                  "email": {
                    "type": "string",
                    "description": "A valid email id of the user that is registered with your org (in any source)."
                  },
                  "password": {
                    "type": "string",
                    "description": "Password of the user account as a MD5 hash format."
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
                    "value": "{\n\"id\": 24335250,\n\"profiles\": [\n  {\n\"firstName\": \"Tom\",\n\"lastName\": \"Sawyer\",\n\"attribution\": {\n\"createDate\": \"2016-06-22T00:00:00+05:30\",\n\"createdBy\": {\n\"code\": \"org2.till1\",\n\"name\": \"org2.till1\",\n\"type\": \"TILL\"\n},\n\"modifiedBy\": {\n\"type\": \"TILL\"\n},\n\"modifiedDate\": \"2016-12-05T13:04:22+05:30\"\n},\n\"fields\": {},\n\"identifiers\": [\n  {\n\"type\": \"email\",\n\"value\": \"tom.swayer@capillarytech.com\"\n},\n  {\n\"type\": \"externalId\",\n\"value\": \"ext_id7342531948111\"\n}\n],\n\"commChannels\": [\n  {\n\"type\": \"email\",\n\"value\": \"tom.swayer@capillarytech.com\",\n\"primary\": true,\n\"verified\": false,\n\"meta\": {\n\"residence\": false,\n\"office\": false\n},\n\"attributes\": {}\n}\n],\n\"source\": \"INSTORE\",\n\"userId\": 24335250,\n\"accountId\": \"\",\n\"conflictingProfileList\": [],\n\"autoUpdateTime\": \"2017-08-04T11:12:14+05:30\"\n}\n],\n\"loyaltyInfo\": {\n\"loyaltyType\": \"loyalty\",\n\"attributionV2\": {\n\"createDate\": \"2016-06-22T00:00:00+05:30\",\n\"createdBy\": {\n\"code\": \"org2.till1\",\n\"name\": \"org2.till1\",\n\"type\": \"TILL\"\n},\n\"modifiedBy\": {\n\"type\": \"TILL\"\n},\n\"modifiedDate\": \"2016-12-05T13:04:22+05:30\"\n},\n\"lifetimePurchases\": 2000,\n\"score\": 97\n},\n\"segments\": {},\n\"warnings\": [],\n}"
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
              "code": "{\n  \"mobile\": \"71000000000\",\n  \"email\": \"tom.sawyer@example.com\",\n  \"password\": \"tom123\"\n}",
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