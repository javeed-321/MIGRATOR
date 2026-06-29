> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Custom Fields

Retrieves custom fields based on the provided field names.

Use this API to retrieve the list of custom fields configured for historical points import in your organisation. The API returns only the custom fields created for your organisation. If no custom fields exist, the API returns an empty entity array.

**Use this API to:**

* Validate available custom fields before importing historical points.
* Build a dynamic mapping UI for historical points upload.

**Default behaviour**

* Returns all custom fields.
* Returns an empty entity array if no custom fields are configured.
* Does not support pagination.

# Prerequisites

This API returns only custom fields created for your organization. If no custom fields are configured, the API returns an empty array.

# Example request

```curl Sample request
curl --location 'https://eu.intouch.capillarytech.com/v2/historicalPoints/getCustomFields' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiNGFmODAMzMzQzMWVmOWFjOQ==' \
--data ''
```

# Resource information

|                    |    |
| :----------------- | :- |
| Pagination support | No |
| Batch support      | No |

# Example response

```json Sample response
{
    "entity": [
        {
            "customFieldName": "testField2",
            "createdBy": "-1",
            "createdOn": "2026-02-16 14:58:15",
            "createdOnISO": "2026-02-16T14:58:15Z",
            "updatedOn": "2026-02-18 10:23:38",
            "updatedOnISO": "2026-02-18T10:23:38Z",
            "active": true
        },
        {
            "customFieldName": "testField3",
            "createdBy": "-1",
            "createdOn": "2026-02-18 10:23:38",
            "createdOnISO": "2026-02-18T10:23:38Z",
            "updatedOn": "2026-02-18 10:23:38",
            "updatedOnISO": "2026-02-18T10:23:38Z",
            "active": true
        },
        {
            "customFieldName": "testField4",
            "createdBy": "-1",
            "createdOn": "2026-02-18 10:24:10",
            "createdOnISO": "2026-02-18T10:24:10Z",
            "updatedOn": "2026-02-18 10:42:22",
            "updatedOnISO": "2026-02-18T10:42:22Z",
            "active": true
        },
        {
            "customFieldName": "testField5",
            "createdBy": "-1",
            "createdOn": "2026-02-18 10:24:10",
            "createdOnISO": "2026-02-18T10:24:10Z",
            "updatedOn": "2026-02-18 10:42:22",
            "updatedOnISO": "2026-02-18T10:42:22Z",
            "active": true
        }
    ],
    "warnings": []
}
```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        entity
      </td>

      <td>
        array
      </td>

      <td>
        List of custom fields configured for historical points import.
      </td>
    </tr>

    <tr>
      <td>
        -customFieldName
      </td>

      <td>
        string
      </td>

      <td>
        Name of the custom field.
      </td>
    </tr>

    <tr>
      <td>
        -createdBy
      </td>

      <td>
        string
      </td>

      <td>
        Username of the user who created the field.
      </td>
    </tr>

    <tr>
      <td>
        -createdOn
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the field was created in the server timezone. This field is being replaced by createdOnISO and will be deprecated in the future.
      </td>
    </tr>

    <tr>
      <td>
        -createdOnISO
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the custom field was created in ISO 8601 format, returned in the server time zone.

        EU server example 2026-02-19T09:05:15Z → 19 February 2026, 09:05:15 (UTC)

        India server example 2026-02-19T14:35:15+05:30 → 19 February 2026, 14:35:15 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        -updatedOn
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the field was last updated. This field is being replaced by updatedOnISO and will be deprecated in the future.
      </td>
    </tr>

    <tr>
      <td>
        -updatedOnISO
      </td>

      <td>
        string
      </td>

      <td>
        Date and time when the custom field was last updated in ISO 8601 format, returned in the server time zone.

        EU server example 2026-02-19T09:04:23Z → 19 February 2026, 09:04:23 (UTC)

        India server example 2026-02-19T14:34:23+05:30 → 19 February 2026, 14:34:23 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
      </td>
    </tr>

    <tr>
      <td>
        -active
      </td>

      <td>
        string
      </td>

      <td>
        Indicates if the custom field is active or not.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        array
      </td>

      <td>
        List of warning messages.
      </td>
    </tr>
  </tbody>
</Table>

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Get Custom Fields",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "{Host}",
      "variables": {
        "Host": {
          "default": "https://eu.intouch.capillarytech.com",
          "enum": [
            "https://eu.intouch.capillarytech.com",
            "https://intouch.capillary.co.in",
            "https://apac2.intouch.capillarytech.com",
            "https://sgcrm.cc.capillarytech.com",
            "http://intouch.capillarytech.cn.com",
            "https://north-america.intouch.capillarytech.com"
          ]
        }
      }
    }
  ],
  "paths": {
    "/v2/historicalPoints/getCustomFields": {
      "get": {
        "summary": "Get Custom Fields",
        "description": "Retrieves custom fields based on the provided field names.",
        "security": [
          {
            "basicAuth": []
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "customFieldName": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "customFieldName": [
                    "testField4",
                    "testField5"
                  ]
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "entity": [
                        {
                          "customFieldName": "testField2",
                          "createdBy": "-1",
                          "createdOn": "2026-02-16 14:58:15",
                          "createdOnISO": "2026-02-16T14:58:15Z",
                          "updatedOn": "2026-02-18 10:23:38",
                          "updatedOnISO": "2026-02-18T10:23:38Z",
                          "active": true
                        },
                        {
                          "customFieldName": "testField3",
                          "createdBy": "-1",
                          "createdOn": "2026-02-18 10:23:38",
                          "createdOnISO": "2026-02-18T10:23:38Z",
                          "updatedOn": "2026-02-18 10:23:38",
                          "updatedOnISO": "2026-02-18T10:23:38Z",
                          "active": true
                        },
                        {
                          "customFieldName": "testField4",
                          "createdBy": "-1",
                          "createdOn": "2026-02-18 10:24:10",
                          "createdOnISO": "2026-02-18T10:24:10Z",
                          "updatedOn": "2026-02-18 10:42:22",
                          "updatedOnISO": "2026-02-18T10:42:22Z",
                          "active": true
                        },
                        {
                          "customFieldName": "testField5",
                          "createdBy": "-1",
                          "createdOn": "2026-02-18 10:24:10",
                          "createdOnISO": "2026-02-18T10:24:10Z",
                          "updatedOn": "2026-02-18 10:42:22",
                          "updatedOnISO": "2026-02-18T10:42:22Z",
                          "active": true
                        }
                      ],
                      "warnings": []
                    }
                  }
                }
              }
            }
          }
        },
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.intouch.capillarytech.com/v2/historicalPoints/getCustomFields' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Basic bmVFmODA0MDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \\\n--data ''",
              "language": "shell",
              "name": ""
            }
          ],
          "samples-languages": [
            "shell"
          ]
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
  }
}
```