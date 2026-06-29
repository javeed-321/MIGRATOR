> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Customer Image

Lets you add profile image for a customer.

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
    "/customers/lookup/setImage": {
      "post": {
        "summary": "Add Customer Image",
        "description": "Lets you add profile image for a customer.",
        "operationId": "set-customer-image-1",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Pass the relevant value.",
            "required": true,
            "schema": {
              "type": "string",
              "default": "multipart/form-data"
            }
          },
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the identifier is available.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "FACEBOOK",
                "WEB_ENGAGE",
                "WECHAT",
                "INSTORE",
                "MARTJACK",
                "TMALL",
                "TAOBAO",
                "JD",
                "ECOMMERCE",
                "WEBSITE",
                "LINE",
                "MOBILE_APP"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "Account ID for sources with multiple accounts.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Customer identifier used to set image.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "cardExternalId",
                "cardNumber"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Value of the specified identifier type.",
            "required": true,
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
                "schema": {
                  "type": "object",
                  "properties": {
                    "pagination": {
                      "type": "object",
                      "properties": {
                        "limit": {
                          "type": "integer",
                          "example": 10,
                          "default": 0
                        },
                        "offset": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "total": {
                          "type": "integer",
                          "example": 2,
                          "default": 0
                        }
                      }
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "example": 43114,
                            "default": 0
                          },
                          "addedBy": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 15000449,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "1371622280_919866643044"
                              },
                              "description": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "1371622280_Ashish"
                              },
                              "type": {
                                "type": "string",
                                "example": "ADMIN_USER"
                              },
                              "adminType": {
                                "type": "string",
                                "example": "GENERAL"
                              },
                              "isActive": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "isOuEnabled": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "timeZoneId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "currencyId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "languageId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              }
                            }
                          },
                          "updatedBy": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 15000449,
                                "default": 0
                              },
                              "code": {
                                "type": "string",
                                "example": "1371622280_919866643044"
                              },
                              "description": {
                                "type": "string",
                                "example": ""
                              },
                              "name": {
                                "type": "string",
                                "example": "1371622280_Ashish"
                              },
                              "type": {
                                "type": "string",
                                "example": "ADMIN_USER"
                              },
                              "adminType": {
                                "type": "string",
                                "example": "GENERAL"
                              },
                              "isActive": {
                                "type": "boolean",
                                "example": true,
                                "default": true
                              },
                              "isOuEnabled": {
                                "type": "boolean",
                                "example": false,
                                "default": true
                              },
                              "timeZoneId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "currencyId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              },
                              "languageId": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              }
                            }
                          },
                          "addedOn": {
                            "type": "string",
                            "example": "2019-11-04T15:18:23+05:30"
                          },
                          "updatedOn": {
                            "type": "string",
                            "example": "2019-11-04T15:18:23+05:30"
                          },
                          "userId": {
                            "type": "integer",
                            "example": 343040815,
                            "default": 0
                          },
                          "requestId": {
                            "type": "integer",
                            "example": 770197,
                            "default": 0
                          },
                          "goodwillType": {
                            "type": "string",
                            "example": "POINTS"
                          },
                          "goodwillStatus": {
                            "type": "string",
                            "example": "APPROVED"
                          },
                          "comments": {
                            "type": "string",
                            "example": "sample"
                          },
                          "reason": {
                            "type": "string",
                            "example": " "
                          },
                          "approvedValue": {
                            "type": "string",
                            "example": "450"
                          },
                          "updatedComments": {
                            "type": "string",
                            "example": "sample; AUTO_APPROVED"
                          },
                          "oneStep": {
                            "type": "boolean",
                            "example": false,
                            "default": true
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
                },
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "data": [
                        {
                          "code": 200,
                          "file": {
                            "acl": "PRIVATE",
                            "fileSize": "115015",
                            "fileHandle": "c6193bc4-a629-4973-b0ce-710bda4046b1",
                            "lastModified": "2026-04-20 12:16:41",
                            "latestVersion": 1,
                            "name": "100737/566881933/0",
                            "namespace": "customerImage",
                            "s3Token": "customerImage/100737/566881933/e91af7dc-a417-4d36-a36f-fcd572f8d6c5",
                            "version": 1
                          },
                          "message": "Successfully uploaded file",
                          "status": "true"
                        }
                      ],
                      "warnings": [],
                      "errors": []
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
              "code": "curl -i -X POST \\\n   -H \"Authorization:Basic a3Jpc2huYS50aWxsMDE6MjAyY2I5NjJhYzU5MDc1Yjk2NmQyMzRiNzA=\" \\\n   -H \"Content-Type:multipart/form-data\" \\\n   -H \"Accept:application/json\" \\\n   -F \"file=@\\\"./Screenshot 2021-11-07 at 12.30.24 PM.png\\\";type=image/png;filename=\\\"Screenshot 2021-11-07 at 12.30.24 PM.png\\\"\" \\\n 'https://eu.api.capillarytech.com/v2/customers/lookup/setImage?source=INSTORE&identifierName=mobile&identifierValue=919800123456'"
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