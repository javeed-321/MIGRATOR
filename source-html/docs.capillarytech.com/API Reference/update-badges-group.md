> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update badges group

This API allows you to create a group for the badges.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call)

> 🚧 **Warning**
>
> Badge group name should be unique and is case sensitive.

# Example request

```curl Sample request
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/v1/badges/group/69708faa0772ad476ecf8511' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic bWFkaHVfcmltYTowZjAwNmZlNGM4ZjFhNmRjMmI2ZDI1N2NkNzI3MjU2YQ==' \
--header 'Cookie: _cfuvid=Wkaspor1BmNbRX4j31OHCHRfrJcYmaBKaFE_pmj9vaU-1771232084786-0.0.1.1-604800000' \
--data '
{
  "name": "GROUP_RANK_59",
  "rank": 1
}
'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Access group resource: WRITE access to target loyalty access group resource

# Resource information

|               |                                         |
| :------------ | :-------------------------------------- |
| URI           | api\_gateway/v1/badges/group/`group_id` |
| HTTP method   | POST                                    |
| Rate limit    | NA                                      |
| Batch support | NA                                      |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/v1/badges/group`

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameters
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
        Name*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the badge group. Ex: GROUP_RANK_2
      </td>
    </tr>

    <tr>
      <td>
        Rank*
      </td>

      <td>
        Integer
      </td>

      <td>
        The rank of the group is used to create an order among different groups. The brand assigns the rank, and groups with higher rank are prioritized over other groups.
        Ex: To encourage customers as they progress through course modules, you can organize badges into three groups corresponding to three-course modules. After completing each module, customers earn a badge. Upon achieving a set of badges, they are associated with a group such as Expert, Intermediate, or Beginner.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json
{
    "name": "GROUP_RANK_59",
    "rank": 1
}
```

# Example response

```json Sample response
{
    "data": {
        "id": "69708faa0772ad476ecf8511",
        "orgId": 100737,
        "name": "GROUP_RANK_59",
        "rank": 1,
        "createdBy": 75197372,
        "createdOn": 1768984490.856000000,
        "createdOnISO": "2026-01-21T08:34:50Z",
        "lastUpdatedBy": 75197372,
        "lastUpdatedOn": 1771247122.421232000,
        "lastUpdatedOnISO": "2026-02-16T13:05:22Z",
        "isActive": true
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
        id
      </td>

      <td>
        String
      </td>

      <td>
        Unique ID of the group.
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
        Unique iD of the org.
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
        Name of the group
      </td>
    </tr>

    <tr>
      <td>
        rank
      </td>

      <td>
        Integer
      </td>

      <td>
        The rank of the group assigned by the user.
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
        User ID who created the group.
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>
        Float
      </td>

      <td>
        Timestamp indicating when the group was created
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
        Timestamp indicating when the group was created, in ISO 8601 format, returned in the server time zone.

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
        User ID who last updated the group.
      </td>
    </tr>

    <tr>
      <td>
        lastUpdatedOn
      </td>

      <td>
        Float
      </td>

      <td>
        Timestamp indicating when the group was last updated
      </td>
    </tr>

    <tr>
      <td>
        lastUpdatedOn
      </td>

      <td>

      </td>

      <td>
        Timestamp indicating when the group was last updated, in ISO 8601 format, returned in the server time zone.

        EU server example 2025-12-16T14:30:45Z → 16 December 2025, 14:30:45 (UTC)

        India server example 2025-12-16T14:30:45+05:30 → 16 December 2025, 14:30:45 (IST)

        Note: The response time zone always matches the server time zone, regardless of the time zone offset in the request.
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
        Indicates whether the group is currently active or not.
      </td>
    </tr>
  </tbody>
</Table>

```json
{
    "data": {
        "id": "6968c1330772ad476ecf33b0",
        "orgId": 100737,
        "name": "GROUP_RANK_58",
        "rank": 1,
        "createdBy": 75197941,
        "createdOn": 1768472883.053000000,
        "createdOnISO": "2026-01-15T10:28:03Z",
        "lastUpdatedBy": 75197941,
        "lastUpdatedOn": 1768473600.277013000,
        "lastUpdatedOnISO": "2026-01-15T10:40:00Z",
        "isActive": true
    },
    "errors": [],
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                  |
| :--------- | :--------------------------- |
| 733        | Group Name should be Unique. |
| 732        | Group Rank is Mandatory.     |

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
    "/api_gateway/v1/badges/{groupid}": {
      "put": {
        "summary": "Update badges group",
        "description": "",
        "operationId": "update-badges-group",
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "Unique ID of the group.",
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
                "required": [
                  "name",
                  "rank"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Name of the group"
                  },
                  "rank": {
                    "type": "string",
                    "description": "The rank of the group set by the user."
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "name": "GROUP_RANK_59",
                    "rank": 1
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
                  "Sample response": {
                    "value": {
                      "data": {
                        "id": "69708faa0772ad476ecf8511",
                        "orgId": 100737,
                        "name": "GROUP_RANK_59",
                        "rank": 1,
                        "createdBy": 75197372,
                        "createdOn": 1768984490.856,
                        "createdOnISO": "2026-01-21T08:34:50Z",
                        "lastUpdatedBy": 75197372,
                        "lastUpdatedOn": 1771247122.421232,
                        "lastUpdatedOnISO": "2026-02-16T13:05:22Z",
                        "isActive": true
                      },
                      "errors": [],
                      "warnings": []
                    },
                    "summary": "Sample response"
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