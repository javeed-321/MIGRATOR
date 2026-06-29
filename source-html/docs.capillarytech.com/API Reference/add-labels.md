> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Labels

Lets you add a new customer tag to the organization. You cannot add tags beyond the limit set for the org. 

You can set the label limit at the org level using the API `POST organization/configs` in the parameter `ORG_MAX_LABEL_COUNT`

This API allows you to add new customer labels to your organization. Before using it, ensure the label limit for your organization is properly configured, as you cannot add labels beyond this number. This limit must be set at the organization level using the POST organization/configs API with the ORG\_MAX\_LABEL\_COUNT parameter and cannot be configured through the user interface. If you attempt to add labels exceeding this limit, the system will block the request and return an error.

> 👍 Note
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview](https://docs.capillarytech.com/reference/apioverview) documentation and step-by-step guide on[ making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

# Prerequisites

* [ ] Basic Authentication
* [ ] Default access group

## Resource information

|                        |                                                             |
| :--------------------- | :---------------------------------------------------------- |
| URL                    | /v2/organization/labels                                     |
| HTTP Method            | POST                                                        |
| Pagination             | No                                                          |
| Batch support          | No                                                          |
| Rate limit information | This endpoint supports 200 requests per minute per API key. |

# API Endpoint

`https://eu.api.capillarytech.com/v2/organization/labels`

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v2/organization/labels' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic *****' \
--header 'Cookie: _cfuvid=suFj8RO2mrlXOut2Fa7ukoWvca.9BKPkdKXq1mrH7Fg-1736904971714-0.0.1.1-604800000; _cfuvid=oQ3H153LTM8nT.gh0fhBj8XXHgFGhIKuoi8lOxyh.c4-1751970693920-0.0.1.1-604800000' \
--data '{
    "orgLabels": [
        {
            "name": "DocDemoLabel",
            "description":"Label for DocDemo"
        
        }
    ]
}'
```

<br />

# Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        orgLabels*
      </td>

      <td>
        Array
      </td>

      <td>
        List of labels to be added. Each object must include the fields below.
      </td>
    </tr>

    <tr>
      <td>
        -name*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the label.   
        Maximum length: 100 characters.  
        Minimum length: 1 character (cannot be null)   
        Special characters: Allowed
      </td>
    </tr>

    <tr>
      <td>
        -description
      </td>

      <td>
        String
      </td>

      <td>
        Short description of the label.  Maximum length: 255 characters.
      </td>
    </tr>
  </tbody>
</Table>

# Response Body Parameters

| Parameter | Datatype        | Description                                                                                      |
| --------- | --------------- | ------------------------------------------------------------------------------------------------ |
| entity\*  | Integer         | ID of the created or updated entity.                                                             |
| warnings  | Array of string | List of warnings returned by the system. When no warnings are present, this array will be empty. |

# Error Code

| Error Code | Message               | Description                                                                                                                  |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 200        | OK                    | Request processed successfully. The entity was created or updated without errors.                                            |
| 400        | Bad Request           | The request is invalid. Possible reasons include missing required parameters, invalid input data, or malformed request body. |
| 401        | Unauthorized          | Authentication failed or the API token is missing or invalid.                                                                |
| 403        | Forbidden             | Access is not allowed due to insufficient permissions.                                                                       |
| 404        | Not Found             | The requested resource was not found.                                                                                        |
| 409        | Conflict              | The request could not be completed due to a conflict with the current state of the resource.                                 |
| 500        | Internal Server Error | An unexpected error occurred on the server side.                                                                             |
| 33003      | Invalid Array         | The request body contains an empty array. At least one valid object is required in the array.                                |

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
    "/organization/labels": {
      "post": {
        "summary": "Add Labels",
        "description": "Lets you add a new customer tag to the organization. You cannot add tags beyond the limit set for the org. \n\nYou can set the label limit at the org level using the API `POST organization/configs` in the parameter `ORG_MAX_LABEL_COUNT`",
        "operationId": "add-labels",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "name",
                  "description",
                  "orgLabels"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Name of the tag or labels."
                  },
                  "description": {
                    "type": "string",
                    "description": "Brief description about the tag."
                  },
                  "orgLabels": {
                    "type": "array",
                    "description": "Details of labels to add."
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
                  "Sample Response": {
                    "value": "{\n    \"entity\": 100737,\n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "integer",
                      "example": 100737,
                      "default": 0
                    },
                    "warnings": {
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
        "security": [],
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/organization/labels' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Basic *****' \\\n--header 'Cookie: _cfuvid=suFj8RO2mrlXOut2Fa7ukoWvca.9BKPkdKXq1mrH7Fg-1736904971714-0.0.1.1-604800000; _cfuvid=oQ3H153LTM8nT.gh0fhBj8XXHgFGhIKuoi8lOxyh.c4-1751970693920-0.0.1.1-604800000' \\\n--data '{\n    \"orgLabels\": [\n        {\n            \"name\": \"DocDemoLabel\",\n            \"description\":\"Label for DocDemo\"\n        \n        }\n    ]\n}'",
              "name": "Curl"
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