> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Data Field

This API allows you to update data fields that you defined for the org.

> 👍 Note:
>
> For detailed information about the APIs and for hands-on testing, refer to the [API overview documentation ](https://docs.capillarytech.com/reference/apioverview)and the step-by-step guide on [making your first API call.](https://docs.capillarytech.com/reference/make-your-first-api-call)

<br />

# Prerequisites

* [ ] Authentication: Basic/OAuth authentication
* [ ] Default access group

# Resource Information

|               |                                            |
| :------------ | :----------------------------------------- |
| URI           | /api\_gateway/cortex/v1/dataFields`\{id\}` |
| HTTP method   | PUT                                        |
| Pagination    | NA                                         |
| Rate limit    | Default                                    |
| Batch support | NA                                         |

# API cURL

```curl
curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields/67c13be980eaa45a46519efa' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic cHJlcmFuYV9zaW5naDoyZmFhZmZjNZDRjMTc5Y2NlMzNhYzc5OTBjMTQ1Ng==' \
--header 'Cookie: _cfuvid=257QQtZKKeLsnIKUrPVpHcKPHvi2s4LSYFlH8VLHtc0-1743065149089-0.0.1.1-604800000; _cfuvid=Wp9DM7jKlGaLVdZEYrh2ApStBYz0xLZsHFHOWo.VnBw-1743484167715-0.0.1.1-604800000' \
--data '{
  "searchStrategyType" : "PREFIX",
  "entityType" : "CUSTOMER",
  "dataFieldDefinitions" : [
		{
			"fieldId" : "firstName",
			"fieldAlias" : "firstName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "firstName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "lastName",
			"fieldAlias" : "lastName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "lastName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "mobile",
			"fieldAlias" : "mobile",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "mobile"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "email",
			"fieldAlias" : "email",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "email"
			},
			"dataType" : "STRING"
		},
    {
			"fieldId" : "externalId",
			"fieldAlias" : "externalId",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "externalId"
			},
			"dataType" : "STRING"
		}

	]
}'
```

# Query Parameter

| Parameter | Data Type | Description                                                                                   |
| :-------- | :-------- | :-------------------------------------------------------------------------------------------- |
| id\*      | String    | Data Field identifier that you received in the response during the creation of the datafield. |

# Request Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameters
      </th>

      <th>
        Data type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `searchStrategyType`\*
      </td>

      <td>
        String
      </td>

      <td>
        Defines the search strategy type (`COMBINATION`, `PREFIX`).
      </td>
    </tr>

    <tr>
      <td>
        `entityType`\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of entity being searched (`TRANSACTION`, `CUSTOMER`).
      </td>
    </tr>

    <tr>
      <td>
        `dataFieldDefinitions`\*
      </td>

      <td>
        Array
      </td>

      <td>
        List of field definitions used in the search.
      </td>
    </tr>

    <tr>
      <td>
        * `fieldId`\*
      </td>

      <td>
        String
      </td>

      <td>
        The field to search on. For **Customer**, the supported standard fields are: `firstName`, `lastName`, `email`, `mobile`, `externalId`, and `fullName`. <br />For **Transaction**, the supported fields are: `outlierStatus`, `billDate`, `billNumber`, and `storecode` (additional field).
      </td>
    </tr>

    <tr>
      <td>
        * `fieldAlias`
      </td>

      <td>
        String
      </td>

      <td>
        The alias or display name of the field.
      </td>
    </tr>

    <tr>
      <td>
        * `fieldType`
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of field. Use the value `DATA`.
      </td>
    </tr>

    <tr>
      <td>
        * `dataSourceDetails`
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the data source.
      </td>
    </tr>

    <tr>
      <td>
        \-- `fieldReference`
      </td>

      <td>
        String
      </td>

      <td>
        Applicable when using custom fields or extended fields. For example: `extendedFields.ship_email`, `customFields.age`. If you're using store code to search, use `additionalFields.storecode` (applicable for transactions).
      </td>
    </tr>

    <tr>
      <td>
        * `dataType`
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the field (`STRING`, `NUMBER`, `DECIMAL`, or `DATE`).
      </td>
    </tr>
  </tbody>
</Table>

```json Customer
{
  "searchStrategyType": "PREFIX",
  "entityType": "TRANSACTION",
  "dataFieldDefinitions": [
    {
      "fieldId": "lastName",
      "fieldAlias": "lastName",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "lastName"
      },
      "dataType": "STRING"
    },
    {
      "fieldId": "mobile",
      "fieldAlias": "mobile",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "mobile"
      },
      "dataType": "STRING"
    },
    {
      "fieldId": "email",
      "fieldAlias": "email",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "email"
      },
      "dataType": "STRING"
    },
    {
      "fieldId": "externalId",
      "fieldAlias": "externalId",
      "fieldType": "DATA",
      "dataSourceDetails": {
        "fieldReference": "externalId"
      },
      "dataType": "STRING"
    }
  ],
  "errors": [
}
```
```json Transaction
{
  "searchStrategyType" : "PREFIX",
  "entityType" : "CUSTOMER",
  "dataFieldDefinitions" : [
		{
			"fieldId" : "firstName",
			"fieldAlias" : "firstName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "firstName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "lastName",
			"fieldAlias" : "lastName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "lastName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "mobile",
			"fieldAlias" : "mobile",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "mobile"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "email",
			"fieldAlias" : "email",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "email"
			},
			"dataType" : "STRING"
		},
    {
			"fieldId" : "externalId",
			"fieldAlias" : "externalId",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "externalId"
			},
			"dataType" : "STRING"
		}

	]
}
```

# Response Body Parameters

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
        id
      </td>

      <td>
        String
      </td>

      <td>
        Unique Identifier of the data
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
        The ID of the organization associated with the criteria
      </td>
    </tr>

    <tr>
      <td>
        searchStrategyType
      </td>

      <td>
        Enum
      </td>

      <td>
        Defines the search strategy type (\`\`COMBINATION`, `PREFIX\` )
      </td>
    </tr>

    <tr>
      <td>
        entityType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of entity being searched (`TRANSACTION` , `CUSTOMER`)
      </td>
    </tr>

    <tr>
      <td>
        dataFieldDefinitions
      </td>

      <td>
        Array
      </td>

      <td>
        List of field definitions used in the search.
      </td>
    </tr>

    <tr>
      <td>
        * fieldId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the field.
      </td>
    </tr>

    <tr>
      <td>
        * fieldAlias
      </td>

      <td>
        String
      </td>

      <td>
        The alias or display name of the search field.
      </td>
    </tr>

    <tr>
      <td>
        * fieldType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of field (e.g., `INDEXED`, `FILTERABLE`).
      </td>
    </tr>

    <tr>
      <td>
        * dataSourceDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Contains details about the data source.
      </td>
    </tr>

    <tr>
      <td>
        \-- fieldReference
      </td>

      <td>
        String
      </td>

      <td>
        The reference to the search field in the data source.
      </td>
    </tr>

    <tr>
      <td>
        * dataType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the field (e.g., `STRING`, `DATE`).
      </td>
    </tr>

    <tr>
      <td>
        auditInfo
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing audit information about the criteria.
      </td>
    </tr>

    <tr>
      <td>
        * createdOn
      </td>

      <td>
        String
      </td>

      <td>
        The timestamp indicating when the criteria was created.
      </td>
    </tr>

    <tr>
      <td>
        * createdBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the user who created the criteria.
      </td>
    </tr>

    <tr>
      <td>
        * lastUpdatedOn
      </td>

      <td>
        String
      </td>

      <td>
        The timestamp indicating when the search criteria was last updated.
      </td>
    </tr>

    <tr>
      <td>
        * lastUpdatedBy
      </td>

      <td>
        Integer
      </td>

      <td>
        The ID of the user who last updated the criteria.
      </td>
    </tr>
  </tbody>
</Table>

```json Customer
{
  "searchStrategyType" : "PREFIX",
  "entityType" : "CUSTOMER",
  "dataFieldDefinitions" : [
		{
			"fieldId" : "firstName",
			"fieldAlias" : "firstName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "firstName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "lastName",
			"fieldAlias" : "lastName",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "lastName"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "mobile",
			"fieldAlias" : "mobile",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "mobile"
			},
			"dataType" : "STRING"
		},
		{
			"fieldId" : "email",
			"fieldAlias" : "email",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "email"
			},
			"dataType" : "STRING"
		},
    {
			"fieldId" : "externalId",
			"fieldAlias" : "externalId",
			"fieldType" : "DATA",
			"dataSourceDetails" : {
				"fieldReference" : "externalId"
			},
			"dataType" : "STRING"
		}

	]
}
```
```json Transaction
{
    "data": {
        "id": "67ebcbe9730aa850fc504145",
        "orgId": 100737,
        "searchStrategyType": "COMBINATION",
        "entityType": "TRANSACTION",
        "dataFieldDefinitions": [
            {
                "fieldId": "billNumber",
                "fieldAlias": "billNumber",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billNumber"
                },
                "dataType": "STRING"
            },
            {
                "fieldId": "billDate",
                "fieldAlias": "billDate",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "billDate"
                },
                "dataType": "DATE"
            },
            {
                "fieldId": "storename",
                "fieldAlias": "storename",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "additionalFields.storename"
                },
                "dataType": "STRING"
            },
            {
                "fieldId": "storecode",
                "fieldAlias": "storecode",
                "fieldType": "DATA",
                "dataSourceDetails": {
                    "fieldReference": "additionalFields.storecode"
                },
                "dataType": "STRING"
            }
        ],
        "auditInfo": {
            "createdOn": "2025-04-01T11:20:09.793+00:00",
            "createdBy": 75155282,
            "lastUpdatedOn": "2025-04-01T11:20:09.793+00:00",
            "lastUpdatedBy": 75155282
        }
    },
    "errors": []
}
```

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
    "/api_gateway/cortex/v1/dataFields/{id}": {
      "put": {
        "summary": "Update Data Field",
        "description": "This API allows you to update data fields that you defined for the org.",
        "operationId": "put-data-field-api",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Customer": {
                    "value": "{\n  \"searchStrategyType\" : \"PREFIX\",\n  \"entityType\" : \"CUSTOMER\",\n  \"dataFieldDefinitions\" : [\n\t\t{\n\t\t\t\"fieldId\" : \"firstName\",\n\t\t\t\"fieldAlias\" : \"firstName\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"firstName\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"lastName\",\n\t\t\t\"fieldAlias\" : \"lastName\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"lastName\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"mobile\",\n\t\t\t\"fieldAlias\" : \"mobile\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"mobile\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"email\",\n\t\t\t\"fieldAlias\" : \"email\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"email\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n    {\n\t\t\t\"fieldId\" : \"externalId\",\n\t\t\t\"fieldAlias\" : \"externalId\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"externalId\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t}\n\n\t]\n}"
                  },
                  "Transaction": {
                    "value": "{\n    \"data\": {\n        \"id\": \"67ebcbe9730aa850fc504145\",\n        \"orgId\": 100737,\n        \"searchStrategyType\": \"COMBINATION\",\n        \"entityType\": \"TRANSACTION\",\n        \"dataFieldDefinitions\": [\n            {\n                \"fieldId\": \"billNumber\",\n                \"fieldAlias\": \"billNumber\",\n                \"fieldType\": \"DATA\",\n                \"dataSourceDetails\": {\n                    \"fieldReference\": \"billNumber\"\n                },\n                \"dataType\": \"STRING\"\n            },\n            {\n                \"fieldId\": \"billDate\",\n                \"fieldAlias\": \"billDate\",\n                \"fieldType\": \"DATA\",\n                \"dataSourceDetails\": {\n                    \"fieldReference\": \"billDate\"\n                },\n                \"dataType\": \"DATE\"\n            },\n            {\n                \"fieldId\": \"storename\",\n                \"fieldAlias\": \"storename\",\n                \"fieldType\": \"DATA\",\n                \"dataSourceDetails\": {\n                    \"fieldReference\": \"additionalFields.storename\"\n                },\n                \"dataType\": \"STRING\"\n            },\n            {\n                \"fieldId\": \"storecode\",\n                \"fieldAlias\": \"storecode\",\n                \"fieldType\": \"DATA\",\n                \"dataSourceDetails\": {\n                    \"fieldReference\": \"additionalFields.storecode\"\n                },\n                \"dataType\": \"STRING\"\n            }\n        ],\n        \"auditInfo\": {\n            \"createdOn\": \"2025-04-01T11:20:09.793+00:00\",\n            \"createdBy\": 75155282,\n            \"lastUpdatedOn\": \"2025-04-01T11:20:09.793+00:00\",\n            \"lastUpdatedBy\": 75155282\n        }\n    },\n    \"errors\": []\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "title": "Customer",
                      "type": "object",
                      "properties": {
                        "searchStrategyType": {
                          "type": "string",
                          "example": "PREFIX"
                        },
                        "entityType": {
                          "type": "string",
                          "example": "CUSTOMER"
                        },
                        "dataFieldDefinitions": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "fieldId": {
                                "type": "string",
                                "example": "firstName"
                              },
                              "fieldAlias": {
                                "type": "string",
                                "example": "firstName"
                              },
                              "fieldType": {
                                "type": "string",
                                "example": "DATA"
                              },
                              "dataSourceDetails": {
                                "type": "object",
                                "properties": {
                                  "fieldReference": {
                                    "type": "string",
                                    "example": "firstName"
                                  }
                                }
                              },
                              "dataType": {
                                "type": "string",
                                "example": "STRING"
                              }
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "Transaction",
                      "type": "object",
                      "properties": {
                        "data": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string",
                              "example": "67ebcbe9730aa850fc504145"
                            },
                            "orgId": {
                              "type": "integer",
                              "example": 100737,
                              "default": 0
                            },
                            "searchStrategyType": {
                              "type": "string",
                              "example": "COMBINATION"
                            },
                            "entityType": {
                              "type": "string",
                              "example": "TRANSACTION"
                            },
                            "dataFieldDefinitions": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "fieldId": {
                                    "type": "string",
                                    "example": "billNumber"
                                  },
                                  "fieldAlias": {
                                    "type": "string",
                                    "example": "billNumber"
                                  },
                                  "fieldType": {
                                    "type": "string",
                                    "example": "DATA"
                                  },
                                  "dataSourceDetails": {
                                    "type": "object",
                                    "properties": {
                                      "fieldReference": {
                                        "type": "string",
                                        "example": "billNumber"
                                      }
                                    }
                                  },
                                  "dataType": {
                                    "type": "string",
                                    "example": "STRING"
                                  }
                                }
                              }
                            },
                            "auditInfo": {
                              "type": "object",
                              "properties": {
                                "createdOn": {
                                  "type": "string",
                                  "example": "2025-04-01T11:20:09.793+00:00"
                                },
                                "createdBy": {
                                  "type": "integer",
                                  "example": 75155282,
                                  "default": 0
                                },
                                "lastUpdatedOn": {
                                  "type": "string",
                                  "example": "2025-04-01T11:20:09.793+00:00"
                                },
                                "lastUpdatedBy": {
                                  "type": "integer",
                                  "example": 75155282,
                                  "default": 0
                                }
                              }
                            }
                          }
                        },
                        "errors": {
                          "type": "array"
                        }
                      }
                    }
                  ]
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
              "code": "curl --location --request PUT 'https://eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields/67c13be980eaa45a46519efa' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic cHJlcmFuYV9zaW5naDoyZmFhZmZjNZDRjMTc5Y2NlMzNhYzc5OTBjMTQ1Ng==' \\\n--header 'Cookie: _cfuvid=257QQtZKKeLsnIKUrPVpHcKPHvi2s4LSYFlH8VLHtc0-1743065149089-0.0.1.1-604800000; _cfuvid=Wp9DM7jKlGaLVdZEYrh2ApStBYz0xLZsHFHOWo.VnBw-1743484167715-0.0.1.1-604800000' \\\n--data '{\n  \"searchStrategyType\" : \"PREFIX\",\n  \"entityType\" : \"CUSTOMER\",\n  \"dataFieldDefinitions\" : [\n\t\t{\n\t\t\t\"fieldId\" : \"firstName\",\n\t\t\t\"fieldAlias\" : \"firstName\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"firstName\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"lastName\",\n\t\t\t\"fieldAlias\" : \"lastName\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"lastName\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"mobile\",\n\t\t\t\"fieldAlias\" : \"mobile\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"mobile\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"email\",\n\t\t\t\"fieldAlias\" : \"email\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"email\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n    {\n\t\t\t\"fieldId\" : \"externalId\",\n\t\t\t\"fieldAlias\" : \"externalId\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"externalId\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t}\n\n\t]\n}'",
              "name": "Customer"
            },
            {
              "language": "curl",
              "code": "curl --location 'eu.api.capillarytech.com/api_gateway/cortex/v1/dataFields' \\\n--header 'Authorization: Basic bmVlcmFqLmRvNGFmDA0MDAY2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \\\n--header 'Content-Type: application/json' \\\n--header 'Cookie: _cfuvid=NIG4hPIouTlCOXgwODX50uFuouza2nwDNThbawZibQM-1743137683215-0.0.1.1-604800000' \\\n--data '{\n  \"searchStrategyType\" : \"PREFIX\",\n  \"entityType\" : \"CUSTOMER\",\n  \"dataFieldDefinitions\" : [\n\t\t{\n\t\t\t\"fieldId\" : \"firstName\",\n\t\t\t\"fieldAlias\" : \"firstName\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"firstName\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"lastName\",\n\t\t\t\"fieldAlias\" : \"lastName\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"lastName\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"mobile\",\n\t\t\t\"fieldAlias\" : \"mobile\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"mobile\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n\t\t{\n\t\t\t\"fieldId\" : \"email\",\n\t\t\t\"fieldAlias\" : \"email\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"email\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t},\n    {\n\t\t\t\"fieldId\" : \"externalId\",\n\t\t\t\"fieldAlias\" : \"externalId\",\n\t\t\t\"fieldType\" : \"DATA\",\n\t\t\t\"dataSourceDetails\" : {\n\t\t\t\t\"fieldReference\" : \"externalId\"\n\t\t\t},\n\t\t\t\"dataType\" : \"STRING\"\n\t\t}\n\n\t]\n}'",
              "name": "Transaction"
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