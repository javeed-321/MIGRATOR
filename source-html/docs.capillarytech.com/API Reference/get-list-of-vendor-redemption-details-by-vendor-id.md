> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Vendor Redemption Details by Redemption & Vendor ID

This API endpoint retrieves the details of a specific vendor redemption associated with a specific vendor and redemption ID. It allows brands to access information about the redemption status and related details.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/430/redemption/36987/brand/61' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic bWFkaHVfcmMjU2YQ==' \
--header 'Cookie: _cfuvid=vN5wfiWeYZXwnooleui8wohWfs.JTIrPyd1SjnuHz_4-1764227099805-0.0.1.1-604800000'
```

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication
* [ ] Default access group

# API Specification

|                        |                                                                                                 |
| :--------------------- | :---------------------------------------------------------------------------------------------- |
| URI                    | /api\_gateway/rewards/core/v1/vendor/`{vendorid}`/redemption/`{redemptionid}`/brand/`{brandid}` |
| HTTP Method            | GET                                                                                             |
| Pagination             | Yes                                                                                             |
| Batch support          | No                                                                                              |
| Rate limit information | None                                                                                            |

# Path parameters

| Parameter    | Type | Description                                                        |
| ------------ | ---- | ------------------------------------------------------------------ |
| vendorId     | Long | The unique identifier of the vendor.                               |
| redemptionId | Long | The unique identifier of the redemption.                           |
| brandId      | Long | The unique identifier of the brand associated with the redemption. |

# Example response

```json Sample response
{
    "status": {
        "success": true,
        "code": 5011,
        "message": "Vendor redemption fetched successfully"
    },
    "redemption": {
        "id": 36987,
        "name": "UAT Vendor Redemption 6",
        "enabled": true,
        "responseKeys": [
            "voucher"
        ],
        "lastUpdatedOn": 1764153001000,
        "lastUpdatedOnDateTime": "2025-11-26T10:30:01Z",
        "redemptionType": "INTOUCH_REWARD",
        "vendorId": 430,
        "vendorName": null,
        "createdBy": 75197372,
        "lastUpdatedBy": 75197372,
        "createdOn": 1764153001000,
        "createdOnDateTime": "2025-11-26T10:30:01Z",
        "redemptionActionList": [
            {
                "id": 27321,
                "name": "add good will points",
                "enabled": true,
                "apiType": "POST",
                "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                "apiHeaders": {
                    "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                "execOrder": 1,
                "contextKeys": {
                    "voucher": "response.requests.request.get(0).id"
                },
                "retryAction": false
            }
        ]
    }
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
        status
      </td>

      <td>
        Object
      </td>

      <td>
        Contains the status details of the vendor redemption.
      </td>
    </tr>

    <tr>
      <td>
        -success
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the request was successful.
      </td>
    </tr>

    <tr>
      <td>
        -code
      </td>

      <td>
        Integer
      </td>

      <td>
        Status code of the response.
      </td>
    </tr>

    <tr>
      <td>
        -message
      </td>

      <td>
        String
      </td>

      <td>
        Message describing the status of the response.
      </td>
    </tr>

    <tr>
      <td>
        redemptionList
      </td>

      <td>
        Array
      </td>

      <td>
        List of vendor redemptions.
      </td>
    </tr>

    <tr>
      <td>
        -id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of the vendor redemption.
      </td>
    </tr>

    <tr>
      <td>
        -name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the vendor redemption.
      </td>
    </tr>

    <tr>
      <td>
        -enabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the vendor redemption is enabled.
      </td>
    </tr>

    <tr>
      <td>
        -responseKeys
      </td>

      <td>
        Array
      </td>

      <td>
        A list of response keys expected from the vendor API.
      </td>
    </tr>

    <tr>
      <td>
        -lastUpdatedOn
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the timestamp when the vendor redemption was updated. The timestamp is in Epoch time format.
      </td>
    </tr>

    <tr>
      <td>
        -lastUpdatedOnDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the date and time when the vendor redemption was updated, formatted in ISO 8601
      </td>
    </tr>

    <tr>
      <td>
        -redemptionType
      </td>

      <td>
        String
      </td>

      <td>
        Type of redemption (e.g. MILES).
      </td>
    </tr>

    <tr>
      <td>
        -vendorId
      </td>

      <td>
        long
      </td>

      <td>
        The Unique identifier of the vendor whose information is being fetched.
      </td>
    </tr>

    <tr>
      <td>
        -vendorName
      </td>

      <td>
        string
      </td>

      <td>
        The unique name of the vendor.
      </td>
    </tr>

    <tr>
      <td>
        -createdBy
      </td>

      <td>
        Long
      </td>

      <td>
        The unique identifier of the user who created the vendor redemption.
      </td>
    </tr>

    <tr>
      <td>
        -lastUpdatedBy
      </td>

      <td>
        Long
      </td>

      <td>
        The unique identifier of the user who last updated the vendor redemption record.
      </td>
    </tr>

    <tr>
      <td>
        -createdOn
      </td>

      <td>
        Long
      </td>

      <td>
        Indicates the timestamp when the vendor redemption was created. The timestamp is in Epoch time format.
      </td>
    </tr>

    <tr>
      <td>
        -createdOnDateTime
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the date and time when the vendor redemption was created, formatted in ISO 8601.
      </td>
    </tr>

    <tr>
      <td>
        -redemptionActionList
      </td>

      <td>
        array
      </td>

      <td>
        List of vendor redemptions fetched in the response.
      </td>
    </tr>

    <tr>
      <td>
        --id
      </td>

      <td>
        long
      </td>

      <td>
        Unique ID of the vendor redemption.
      </td>
    </tr>

    <tr>
      <td>
        --name
      </td>

      <td>
        string
      </td>

      <td>
        Name of the vendor redemption.
      </td>
    </tr>

    <tr>
      <td>
        --enabled
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if the vendor redemption is enabled.
      </td>
    </tr>

    <tr>
      <td>
        --apiType
      </td>

      <td>
        string
      </td>

      <td>
        The HTTP method to be used for the API request.
      </td>
    </tr>

    <tr>
      <td>
        --apiUrl
      </td>

      <td>
        string
      </td>

      <td>
        The URL to which the API request is made. For example, "apiUrl": "[https://partial.com/reward/issue](https://partial.com/reward/issue)" specifies the endpoint where the request to issue a reward will be made.
      </td>
    </tr>

    <tr>
      <td>
        --apiHeaders
      </td>

      <td>
        object
      </td>

      <td>
        An object containing the headers to be sent with the API request.
      </td>
    </tr>

    <tr>
      <td>
        ---Authorization
      </td>

      <td>
        String
      </td>

      <td>
        The authorization header containing the authentication credentials.
      </td>
    </tr>

    <tr>
      <td>
        ---Content-Type
      </td>

      <td>
        String
      </td>

      <td>
        The content type header indicating the format of the request body.
      </td>
    </tr>

    <tr>
      <td>
        --apiBody
      </td>

      <td>
        String
      </td>

      <td>
        The API body for the external API endpoint specified in apiUrl. You can also include custom fields, fulfillment status, and reward transaction ID. The fulfillment status and reward transaction ID are variables resolved in the backend according to the associated transaction.  
        **Custom Field**: Enables brands to add additional data in the API request. Use the format customfield_customFieldName. For example, a custom field named "Address: Bangalore" should be written as customfield_Address then it will replace the value of custom field with Bangalore. `Note`: Only custom fields created with ISSUE_REWARD scope are supported.
        **Fulfillment Status**: Enables updating the fulfillment status. Use the parameter fulfillmentStatus, formatted in camelCase. Reward Transaction ID: Enables adding the reward transaction ID. This helps the vendor to identify the transaction associated with the issued reward. Use the parameter rewardTransactionId, formatted in camelCase. `NOTE`: The API body supports other parameters that can be included based on the brand's specific requirements or integration needs. Internal Capillary APIs can also be used.
      </td>
    </tr>

    <tr>
      <td>
        --execOrder
      </td>

      <td>
        Integer
      </td>

      <td>
        The execution order of the action.
      </td>
    </tr>

    <tr>
      <td>
        --contextKeys
      </td>

      <td>
        Object
      </td>

      <td>
        An object containing context keys for extracting values from the response.
      </td>
    </tr>

    <tr>
      <td>
        --retryAction
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the action should be retried on failure (true/false).
      </td>
    </tr>

    <tr>
      <td>
        actionCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of actions configured for this redemption setup.
      </td>
    </tr>
  </tbody>
</Table>

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
    "/api_gateway/rewards/core/v1/vendor/{vendorid}/redemption/{redemptionid}/brand/{brandid}": {
      "get": {
        "summary": "Vendor Redemption Details by Redemption & Vendor ID",
        "description": "",
        "operationId": "get-list-of-vendor-redemption-details-by-vendor-id",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": {
                      "status": {
                        "success": true,
                        "code": 5011,
                        "message": "Vendor redemption fetched successfully"
                      },
                      "redemption": {
                        "id": 36987,
                        "name": "UAT Vendor Redemption 6",
                        "enabled": true,
                        "responseKeys": [
                          "voucher"
                        ],
                        "lastUpdatedOn": 1764153001000,
                        "lastUpdatedOnDateTime": "2025-11-26T10:30:01Z",
                        "redemptionType": "INTOUCH_REWARD",
                        "vendorId": 430,
                        "vendorName": null,
                        "createdBy": 75197372,
                        "lastUpdatedBy": 75197372,
                        "createdOn": 1764153001000,
                        "createdOnDateTime": "2025-11-26T10:30:01Z",
                        "redemptionActionList": [
                          {
                            "id": 27321,
                            "name": "add good will points",
                            "enabled": true,
                            "apiType": "POST",
                            "apiUrl": "https://crm-nightly-new.cc.capillarytech.com/v1.1/request/add?program_id=2851",
                            "apiHeaders": {
                              "Authorization": "Basic bHVjaWF1dG9fdGlsbF8xMDoyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MA==",
                              "accept": "application/json",
                              "Content-Type": "application/json"
                            },
                            "apiBody": "{\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"transactionId_property\": \"${rewardTransactionId}\", \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
                            "execOrder": 1,
                            "contextKeys": {
                              "voucher": "response.requests.request.get(0).id"
                            },
                            "retryAction": false
                          }
                        ]
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1/vendor/430/redemption/36987/brand/61' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic bWFka3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=vN5wfiWeYZXwnooleui8wohWfs.JTIrPyd1SjnuHz_4-1764227099805-0.0.1.1-604800000'",
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