> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Upload Store Logs

Uploads the log files of InStore as per the headers provided - supports activity logs and performance logs.

Uploading Activity Log Files to the Server

* Use the headers mentioned.
* Uploading Performance Log Files

<br />

<br />

***

## Headers

| Parameter Name              | Data Type | Description                                          |
| :-------------------------- | :-------- | :--------------------------------------------------- |
| Content-Type                | String    | multipart/form-data                                  |
| X-CAP-CLIENT-LOGFILENAME    | String    | Name of the file on the client's machine.            |
| X-CAP-CLIENT-LOGFILESIZE    | Long      | The size of the file in bytes in the client machine. |
| X-CAP-CLIENT-FILE-SIGNATURE | String    | Hash of file on client.                              |

<br />

## Request Query Parameters

| Parameter Name | Data Type | Description                                                                         |
| :------------- | :-------- | :---------------------------------------------------------------------------------- |
| uploaded\_time | DateTime  | Time at which the log file is uploaded in the database. Format: YYYY-MM-DD HH:MM:SS |
| logged\_time   | DateTime  | Time at which the log file is created in the database. Format: YYYY-MM-DD HH:MM:SS  |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "customer-v11",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v1.1",
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
    "/store/logs": {
      "post": {
        "summary": "Upload Store Logs",
        "description": "Uploads the log files of InStore as per the headers provided - supports activity logs and performance logs.",
        "operationId": "upload-store-logs",
        "parameters": [
          {
            "name": "format",
            "in": "query",
            "description": "Preferred response format.",
            "schema": {
              "type": "string",
              "enum": [
                "xml",
                "json"
              ]
            }
          },
          {
            "name": "uploaded_time",
            "in": "query",
            "description": "Time at which the log file is uploaded in the database. Format: YYYY-MM-DD HH:MM:SS",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "logged_time",
            "in": "query",
            "description": "Time at which the log file is created in the database. Format: YYYY-MM-DD HH:MM:SS",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "Content-Type",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "default": "multipart/form-data"
            }
          },
          {
            "name": "X-CAP-CLIENT-LOGFILENAME",
            "in": "header",
            "description": "Name of the file on the client's machine.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-CAP-CLIENT-LOGFILESIZE",
            "in": "header",
            "description": "The size of the file in bytes in the client machine.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "X-CAP-CLIENT-FILE-SIGNATURE",
            "in": "header",
            "description": "Hash of file on client.",
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
                    "value": "{\n  \"response\": {\n    \"success\": \"true\",\n    \"code\": \"200\",\n    \"message\": \"SUCCESS\"\n  }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "object",
                      "properties": {
                        "success": {
                          "type": "string",
                          "example": "true"
                        },
                        "code": {
                          "type": "string",
                          "example": "200"
                        },
                        "message": {
                          "type": "string",
                          "example": "SUCCESS"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false
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