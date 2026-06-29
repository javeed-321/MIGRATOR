> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Customer Image

Sets profile image for a customer.

## Example request

```
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/setImage' \
--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjY3ZDJiMGM2ZTk5ZjE5' \
--header 'Accept: application/json' \
--header 'Cookie: _cfuvid=Es2X3vmjttABkNkPiKazemkN3VVyy8kpX.D3.lHTbu8-1745994507567-0.0.1.1-604800000' \
--form 'file=@"./Screenshot 2021-11-07 at 12.30.24 PM.png"' \
--form 'file=@"6ZbWPcdnB/Screenshot 2025-04-29 at 3.28.19 PM.png"'
```

<br />

## Request Body Parameter

| Parameter | Type | Description                                                                                                                                                                                                        |
| :-------- | :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FILE      | File | Image file to be uploaded for the customer. The maximum number of files you can upload is five. The file size can range from a minimum of 10 KB to a maximum of 49 MB. There is no restriction on the file format. |

> 📘 Note:
>
> * [ ] Use `form-data` in the request body and upload the image file under the key `FILE`.

## Response Parameters

| Parameter      | Type    | Description                                   |
| :------------- | :------ | :-------------------------------------------- |
| file           | Object  | File related information                      |
| -acl           | String  | Access control level                          |
| -Size          | String  | File size in bytes                            |
| -Handle        | String  | Unique file identifier                        |
| -lastModified  | String  | Last modified timestamp (YYYY-MM-DD HH:mm:ss) |
| -latestVersion | Integer | Latest version indicator                      |
| -name          | String  | Internal file path                            |
| -namespace     | String  | File namespace                                |
| -s3Token       | String  | S3 storage path                               |
| -version       | Integer | File version                                  |

```
{
    "data": [
        {
            "code": 200,
            "file": {
                "acl": "PRIVATE",
                "fileSize": "18039",
                "fileHandle": "01a24b35-f1fa-4dc3-bbce-ab9bc5094e2c",
                "lastModified": "2025-04-21 03:01:43",
                "latestVersion": -1,
                "name": "100737/565039505/0",
                "namespace": "customerImage",
                "s3Token": "customerImage/100737/565039505/389fff57-1ed3-4bbb-96e0-6a541c8d20d1",
                "version": -1
            },
            "message": "Successfully uploaded file",
            "status": "true"
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API specific error code

| Error code | Description                                                                       |
| :--------- | :-------------------------------------------------------------------------------- |
| 8083       | Uploaded image size is below the minimum required size.                           |
| 8084       | The request does not contain a valid image file, or the image has not been added. |

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
    "/customers/{customerId}/setImage": {
      "post": {
        "summary": "Add Customer Image",
        "description": "Sets profile image for a customer.",
        "operationId": "add-customer-image",
        "parameters": [
          {
            "name": "customerId",
            "in": "path",
            "description": "Pass the unique ID of the customer whose goodwill request details you want to fetch.",
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "required": true
          },
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Pass the relevant value.",
            "required": true,
            "schema": {
              "type": "string",
              "default": "multipart/form-data"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "form-data"
                ],
                "properties": {
                  "form-data": {
                    "type": "string",
                    "format": "binary"
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
                    "value": "{\n    \"data\": [\n        {\n            \"code\": 200,\n            \"file\": {\n                \"acl\": \"PRIVATE\",\n                \"fileHandle\": \"a014949a-0822-48b3-90ad-73908174147d\",\n                \"lastModified\": \"2021-11-24 08:59:40\",\n                \"latestVersion\": 2,\n                \"name\": \"50583/343014824/0\",\n                \"namespace\": \"customerImage\",\n                \"s3Token\": \"customerImage/50583/343014824/ab98b31a-d400-41be-bb2e-18229f85d420\",\n                \"version\": 2\n            },\n            \"message\": \"Successfully uploaded file\",\n            \"status\": \"true\"\n        }\n    ],\n    \"warnings\": [],\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "code": {
                            "type": "integer",
                            "example": 200,
                            "default": 0
                          },
                          "file": {
                            "type": "object",
                            "properties": {
                              "acl": {
                                "type": "string",
                                "example": "PRIVATE"
                              },
                              "fileHandle": {
                                "type": "string",
                                "example": "a014949a-0822-48b3-90ad-73908174147d"
                              },
                              "lastModified": {
                                "type": "string",
                                "example": "2021-11-24 08:59:40"
                              },
                              "latestVersion": {
                                "type": "integer",
                                "example": 2,
                                "default": 0
                              },
                              "name": {
                                "type": "string",
                                "example": "50583/343014824/0"
                              },
                              "namespace": {
                                "type": "string",
                                "example": "customerImage"
                              },
                              "s3Token": {
                                "type": "string",
                                "example": "customerImage/50583/343014824/ab98b31a-d400-41be-bb2e-18229f85d420"
                              },
                              "version": {
                                "type": "integer",
                                "example": 2,
                                "default": 0
                              }
                            }
                          },
                          "message": {
                            "type": "string",
                            "example": "Successfully uploaded file"
                          },
                          "status": {
                            "type": "string",
                            "example": "true"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/setImage' \\\n--header 'Authorization: Basic dGpfYaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Accept: application/json' \\\n--header 'Cookie: _cfuvid=Es2X3vmjttABkNkPiKazemkN3VVyy8kpX.D3.lHTbu8-1745994507567-0.0.1.1-604800000' \\\n--form 'file=@\"./Screenshot 2021-11-07 at 12.30.24 PM.png\"' \\\n--form 'file=@\"6ZbWPcdnB/Screenshot 2025-04-29 at 3.28.19 PM.png\"'",
              "name": "curl"
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