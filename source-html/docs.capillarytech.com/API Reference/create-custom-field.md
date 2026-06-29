> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Create custom field for badges

This API allows you to create a custom field for the badge.

There is no limit on the number of custom fields that can be defined at an org level for badges.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call).

> 🚧 Warning
>
> Custom field name should be unique and is case sensitive.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/badges/customField' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic bWFkaHYQ==' \
--header 'Cookie: _cfuvid=2wODcKsHz5O4nH9if.oAaM9mGGlxP9toYWBAik.SBbc-1773312258300-0.0.1.1-604800000' \
--data '
{
  "name": "CF20 dates",
  "isMandatory": false,
  "defaultValue": "0",
  "dataType": "STRING"
}
'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# Resource information

|                      |                                    |
| :------------------- | :--------------------------------- |
| URI                  | api\_gateway/v1/badges/customField |
| HTTP method          | POST                               |
| Pagination supported | No                                 |
| Rate limit           | NA                                 |
| Batch support        | NA                                 |

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        name*
      </td>

      <td>
        String
      </td>

      <td>
        The name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        isMandatory
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the custom field is mandatory.  
        Default value: 0
      </td>
    </tr>

    <tr>
      <td>
        defaultValue
      </td>

      <td>
        String
      </td>

      <td>
        The default value of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        dataType*
      </td>

      <td>
        Enum
      </td>

      <td>
        The data type of the custom field's value. Supported values: INTEGER, BOOLEAN, DATE, STRING.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "name": "CF20 dates",
    "isMandatory": false,
    "defaultValue": "0",
    "dataType": "STRING"
}
```

# Example response

```json Sample response
{
    "data": {
        "id": "69c0e1c823ba8848e5979a67",
        "orgId": 100737,
        "name": "CF20 dates",
        "isMandatory": false,
        "defaultValue": "0",
        "isActive": true,
        "dataType": "STRING",
        "createdOn": 1774248392.637564000,
        "createdOnISO": "2026-03-23T06:46:32Z",
        "createdBy": 75197372,
        "lastUpdatedOn": 1774248392.637564000,
        "lastUpdatedOnISO": "2026-03-23T06:46:32Z",
        "lastUpdatedBy": 75197372
    },
    "errors": [],
    "warnings": []
}
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        id
      </td>

      <td>
        String
      </td>

      <td>
        The unique identifier of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        The org ID the custom field belongs to.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        The name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        isMandatory
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the custom field is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        defaultValue
      </td>

      <td>
        String
      </td>

      <td>
        The default value of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        isActive
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the custom field is active.
      </td>
    </tr>

    <tr>
      <td>
        dataType
      </td>

      <td>
        String
      </td>

      <td>
        The data type of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>
        Date
      </td>

      <td>
        The timestamp when the custom field was created. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ.
      </td>
    </tr>

    <tr>
      <td>
        createdOnISO
      </td>

      <td>
        String
      </td>

      <td>
        The timestamp when the custom field was created, in ISO 8601 format, returned in the server time zone.

        EU server example 2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example 2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        createdBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The identifier of the user who created the custom field.
      </td>
    </tr>

    <tr>
      <td>
        lastUpdatedOn
      </td>

      <td>
        Date
      </td>

      <td>
        The timestamp when the custom field was last updated, in epoch timestamp format.
      </td>
    </tr>

    <tr>
      <td>
        lastUpdatedOnISO
      </td>

      <td>
        String
      </td>

      <td>
        The timestamp when the custom field was last updated, in ISO 8601 format, returned in the server time zone.

        EU server example 2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example 2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        lastUpdatedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The identifier of the user who last updated the custom field.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Object
      </td>

      <td>
        A list of errors if any.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Object
      </td>

      <td>
        A list of warnings if any.
      </td>
    </tr>
  </tbody>
</Table>

# Error codes

| Error codes | Description                                       |
| :---------- | :------------------------------------------------ |
| 740         | Custom field name cannot be duplicate.            |
| 741         | Custom field Data Type is mandatory.              |
| 744         | Custom field default value should be a number.    |
| 742         | Mandatory custom field should have default Value. |

<br />

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
    "/api_gateway/v1/badges/customField": {
      "post": {
        "summary": "Create custom field for badges",
        "description": "",
        "operationId": "create-custom-field",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "name",
                  "dataType"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "The name of the custom field."
                  },
                  "isMandatory": {
                    "type": "boolean",
                    "description": "Indicates if the custom field is mandatory."
                  },
                  "defaultValue": {
                    "type": "string",
                    "description": "The default value of the custom field."
                  },
                  "dataType": {
                    "type": "string",
                    "description": "The data type of the custom field's value.",
                    "enum": [
                      "INTEGER",
                      "BOOLEAN",
                      "DATE",
                      "STRING"
                    ]
                  }
                }
              },
              "examples": {
                "Request Body": {
                  "value": {
                    "name": "CF20 dates",
                    "isMandatory": false,
                    "defaultValue": "0",
                    "dataType": "STRING"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "201",
            "content": {
              "application/json": {
                "examples": {
                  "Sample response": {
                    "value": {
                      "data": {
                        "id": "69c0e1c823ba8848e5979a67",
                        "orgId": 100737,
                        "name": "CF20 dates",
                        "isMandatory": false,
                        "defaultValue": "0",
                        "isActive": true,
                        "dataType": "STRING",
                        "createdOn": 1774248392.637564,
                        "createdOnISO": "2026-03-23T06:46:32Z",
                        "createdBy": 75197372,
                        "lastUpdatedOn": 1774248392.637564,
                        "lastUpdatedOnISO": "2026-03-23T06:46:32Z",
                        "lastUpdatedBy": 75197372
                      },
                      "errors": [],
                      "warnings": []
                    },
                    "summary": "Sample response"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "string",
                          "example": "65cda4fda888ce70acd29378"
                        },
                        "orgId": {
                          "type": "integer",
                          "example": 100606,
                          "default": 0
                        },
                        "name": {
                          "type": "string",
                          "example": "CF15 date"
                        },
                        "isMandatory": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "defaultValue": {
                          "type": "string",
                          "example": ""
                        },
                        "isActive": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "dataType": {
                          "type": "string",
                          "example": "STRING"
                        },
                        "createdOn": {
                          "type": "number",
                          "example": 1707975933.62922,
                          "default": 0
                        },
                        "createdBy": {
                          "type": "integer",
                          "example": 75097962,
                          "default": 0
                        },
                        "lastUpdatedOn": {
                          "type": "number",
                          "example": 1707975933.62922,
                          "default": 0
                        },
                        "lastUpdatedBy": {
                          "type": "integer",
                          "example": 75097962,
                          "default": 0
                        }
                      }
                    },
                    "errors": {
                      "type": "array"
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
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/v1/badges/customField' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic bWFkaHMjU2YQ==' \\\n--header 'Cookie: _cfuvid=2wODcKsHz5O4nH9if.oAaM9mGGlxP9toYWBAik.SBbc-1773312258300-0.0.1.1-604800000' \\\n--data '\n{\n  \"name\": \"CF20 dates\",\n  \"isMandatory\": false,\n  \"defaultValue\": \"0\",\n  \"dataType\": \"STRING\"\n}\n'",
              "language": "shell",
              "name": "Sample request"
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