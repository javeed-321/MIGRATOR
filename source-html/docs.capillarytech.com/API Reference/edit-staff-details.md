> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Edit Staff Details

Updates profile information of the respective staff user. You can use direct login or token based login. You need a new header X-CAP-API-ACCESS-TOKEN for token based authentication.

<br />

<Callout icon="❗️" theme="error">
  All Staff related APIs are deprected and cannot be used any more.
</Callout>

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
    "/staff/edit": {
      "post": {
        "summary": "Edit Staff Details",
        "description": "Updates profile information of the respective staff user. You can use direct login or token based login. You need a new header X-CAP-API-ACCESS-TOKEN for token based authentication.",
        "operationId": "edit-staff-details",
        "parameters": [
          {
            "name": "X-CAP-API-AUTH-KEY",
            "in": "header",
            "description": "Authentication key of the admin.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-CAP-API-AUTH-ORG-ID",
            "in": "header",
            "description": "ID of the org to associate with the staff user.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "username": {
                    "type": "string",
                    "description": "Username for the current staff account. No special characters are allowed."
                  },
                  "id": {
                    "type": "string",
                    "description": "Unique ID of the staff."
                  },
                  "mobile": {
                    "type": "string",
                    "description": "Mobile number of the staff."
                  },
                  "email": {
                    "type": "string",
                    "description": "Email ID of the staff."
                  },
                  "firstname": {
                    "type": "string",
                    "description": "First name of the staff user"
                  },
                  "lastname": {
                    "type": "string",
                    "description": "Last name of the staff user."
                  },
                  "title": {
                    "type": "string",
                    "description": "Role or designation of the user"
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
                    "value": "{\n\n    \"entity\": {\n\n        \"firstname\": \"Tom\",\n\n       \"lastname\":\"Sawyer\",\n\n       \"title\":\"Manager\",s\n\n        \"id\": 50007774\n\n    },\n\n    \"warnings\": [\n\n    ],\n\n    \"errors\": [\n\n    ],\n\n    \"success\": true\n\n}"
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
              "code": "{\n\n  \"firstname\":\"Tom\",\n\n  \"id\":50007774,\n\n  \"lastname\":\"Sawyer\",\n\n  \"title\":\"Manager\"\n\n}",
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