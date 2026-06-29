> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Disable Language for Rewards 

 This API allows you to disable the language metadata for rewards for your organization.

# Prerequisites

* [ ] Authentication: Basic or OAuth credentials
* [ ] Default access group

## Resource information

| Field       | Value                                                                              |
| ----------- | ---------------------------------------------------------------------------------- |
| URL         | `https\://{{eu}}/api\_gateway/rewards/core/v1/metadata/language/12/status/disable` |
| HTTP method | PUT                                                                                |
| Pagination  | NA                                                                                 |
| Rate limit  | NA                                                                                 |

## Example API cURL

```curl Disable
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/metadata/language/12/status/disable' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Authorization: Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg=' \
--header 'Cookie: _cfuvid=Vo40i2sQt2b9D_BbvyU32Wbvu39g2t0iystT.W9RDJ0-1751522911573-0.0.1.1-604800000' \
--data ''
```

# Path parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Language code
      </td>

      <td>
        String
      </td>

      <td>
        Represents the language code for example: "en" "fr".
        Note : These languages codes are not the standard language codes and can be created for your organization as per the requirement.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter | Data Type | Description                                                        |
| :-------- | :-------- | :----------------------------------------------------------------- |
| status    | Object    | An object containing the status of the response.                   |
| success   | Boolean   | Indicates whether the request was successful.                      |
| code      | Integer   | A specific code indicating the result of the operation.            |
| message   | String    | A descriptive message providing more information about the status. |

```curl Response Sample
{
    "status": {
        "success": true,
        "code": 2016,
        "message": "Language updated successfully"
    }
}
```

# API specific error codes

| Code | Description                   | Reason                                                           |
| :--- | :---------------------------- | :--------------------------------------------------------------- |
| 2016 | Language updated successfully | The language status (disabled/enabled) was successfully updated. |
| 2104 | Language not found            | The specified language code does not exist.                      |
| 400  | Invalid Request               | The request parameters or format were invalid.                   |
| 404  | Resource not found            | The requested API endpoint or resource does not exist.           |
| 500  | UNEXPECTED\_ERROR             | An unexpected error occurred on the server.                      |

# OpenAPI definition

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "Sample API",
    "version": "1.0.0",
    "description": "API specification generated from cURL for PUT /api_gateway/rewards/core/v1/metadata/language/12/status/disable"
  },
  "servers": [
    {
      "url": "https://eu.api.capillarytech.com"
    }
  ],
  "paths": {
    "/api_gateway/rewards/core/v1/metadata/language/12/status/disable": {
      "put": {
        "summary": "Disable Language for Rewards ",
        "description": " This API allows you to disable the language metadata for rewards for your organization.",
        "operationId": "putApi_gatewayrewardscorev1metadatalanguage12statusdisable",
        "parameters": [
          {
            "name": "Accept",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string",
              "example": "*/*"
            }
          },
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string",
              "example": "Basic Z2VvcmdlLmpvaG5zb246OTg4OTU2NWI4ODVhMmY4ZWE1MTk1MjA2NWEwYTEzNzg="
            }
          },
          {
            "name": "Cookie",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string",
              "example": "_cfuvid=Vo40i2sQt2b9D_BbvyU32Wbvu39g2t0iystT.W9RDJ0-1751522911573-0.0.1.1-604800000"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation (default from cURL)",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Success"
                    }
                  }
                },
                "examples": {
                  "New Example": {
                    "summary": "New Example",
                    "value": "{}"
                  },
                  "New Example 1": {
                    "summary": "New Example 1",
                    "value": "{}"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    }
  }
}
```