> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Create DIY Template

Create a DIY template

This API creates a DIY template structure using the [workspace ID ](https://docs.capillarytech.com/reference/get-workspaces)and [block names](https://docs.capillarytech.com/reference/get-processor).

# API endpoint example

<https://uscrm.connectplus.capillarytech.com/api/workspaces/209/dataflows/diy>

# Prerequisites

* [ ] Authentication: Access to Connect+
* [ ] Keep the Connect+ UI open
* [ ] Workspace ID

# Request path parameter

| Field Name (Parameters marked with \* are mandatory) | Data Type | Description                                 |
| :--------------------------------------------------- | :-------- | :------------------------------------------ |
| workspaceID\*                                        | Integer   | Workspace ID where the template is created. |

# Request body parameter

> 🚧 Consider the following when preparing the payload:
>
> * The first block must be a source block that retrieves or pulls data from an FTP or SFTP location. If the first block is not a source block or the blocks are not properly connected, the template is created successfully but becomes unusable.
> * The `blockOrder `parameter determines the sequence, defines the connection between blocks and controls the flow of the template. If the order of the blocks is not logical, the template will not function as required.
> * The Trigger is automatically inserted and does not need to be a part of the payload.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field Name (Parameters marked with

        * <br />

        are mandatory)
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
        name\*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the template being created. You can name the template as per your requirement.
      </td>
    </tr>

    <tr>
      <td>
        blockList\*
      </td>

      <td>
        Array
      </td>

      <td>
        Array containing the details of the blocks or processors.
      </td>
    </tr>

    <tr>
      <td>
        blockName\*
      </td>

      <td>
        String
      </td>

      <td>
        Name of the block in the template. You can name the block as per your requirement.
      </td>
    </tr>

    <tr>
      <td>
        blockType\*
      </td>

      <td>
        String
      </td>

      <td>
        Defines the type of process the block runs. You cannot change the `blockType`. - The `blockType `in the request body matches the `name` parameter in the [Get Processor](https://docs.capillarytech.com/reference/post-create-api-diy-template-connectplus)  response. If the `blockType `parameter does not match the `name `parameter from Get Processor, an error occurs.

        * *Example*\*: The `sftp_pull `block matches the `name `parameter from the GET Process API.
        * *Note*\*: An error occurs if the `blockType `doesn't match the `name `parameter from Get Processor API.
      </td>
    </tr>

    <tr>
      <td>
        blockOrder\*
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the block creation order. - The order mentioned in the parameter `blockOrder` decides the connection between one block to another. The `blockOrder `of the source or first block is zero.

        * *Example*\*: The `sftp_pull `block is a source block, so its `blockOrder` is zero.
      </td>
    </tr>
  </tbody>
</Table>

```json Sample request
{
  "name": "DIYDEMONEO_TESTDOC",
  "blockList": [
    {
      "blockName": "Connect-to-source",
      "blockType": "sftp_pull",
      "blockOrder": 0
    },
    {
      "blockName": "Transform-Data",
      "blockType": "csv_json_neo_transformer",
      "blockOrder": 1
    },
    {
      "blockName": "Neo-Transformer",
      "blockType": "neo_transformer",
      "blockOrder": 2
    },
    {
      "blockName": "Connect-to-Destination",
      "blockType": "retro_destination",
      "blockOrder": 3
    }
  ]
}

```

# Response parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        **Field**
      </th>

      <th>
        **Data Type**
      </th>

      <th>
        **Description**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the template.
      </td>
    </tr>

    <tr>
      <td>
        uuid
      </td>

      <td>
        String
      </td>

      <td>
        Universally unique identifier (UUID) of the template.
      </td>
    </tr>

    <tr>
      <td>
        blocks
      </td>

      <td>
        Array
      </td>

      <td>
        Array contains the details of the created blocks.
      </td>
    </tr>

    <tr>
      <td>
        * blockTypeId
      </td>

      <td>
        Integer
      </td>

      <td>
        Identifies the unique ID of the block type.
      </td>
    </tr>

    <tr>
      <td>
        * name
      </td>

      <td>
        String
      </td>

      <td>
        Refers to the block's name.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the type of block used in the template
      </td>
    </tr>

    <tr>
      <td>
        * hide
      </td>

      <td>
        String
      </td>

      <td>
        Determines the visibility of the block.
      </td>
    </tr>

    <tr>
      <td>
        * order
      </td>

      <td>
        Integer
      </td>

      <td>
        The block's order in the template.
      </td>
    </tr>

    <tr>
      <td>
        * fields
      </td>

      <td>
        Array
      </td>

      <td>
        Array lists the details of the fields in the block.
      </td>
    </tr>

    <tr>
      <td>
        \-- name
      </td>

      <td>
        String
      </td>

      <td>
        Internal name of the field.
      </td>
    </tr>

    <tr>
      <td>
        \-- displayName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the field on the User Interface.
      </td>
    </tr>

    <tr>
      <td>
        \-- htmlType
      </td>

      <td>
        String
      </td>

      <td>
        Type of HTML input used.  **Values**:  `select`, `text`, `checkbox`
      </td>
    </tr>

    <tr>
      <td>
        \-- possibleValues
      </td>

      <td>
        Array
      </td>

      <td>
        List displaying values of the fields.
      </td>
    </tr>

    <tr>
      <td>
        \--- label
      </td>

      <td>
        String
      </td>

      <td>
        Field name as seen on the UI.
      </td>
    </tr>

    <tr>
      <td>
        \--- value
      </td>

      <td>
        String
      </td>

      <td>
        Corresponding label value.
      </td>
    </tr>

    <tr>
      <td>
        \-- dynamicFieldType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the field changes behaviour dynamically based on certain conditions.
      </td>
    </tr>

    <tr>
      <td>
        \-- value
      </td>

      <td>
        String
      </td>

      <td>
        Displays the current value of the field.
      </td>
    </tr>

    <tr>
      <td>
        * connections
      </td>

      <td>
        Array
      </td>

      <td>
        Defines how various blocks in a dataflow or template connect.
      </td>
    </tr>

    <tr>
      <td>
        \-- relationship
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the type of relationship between the blocks.

        * *Example*\*: `splits `means data or tasks are split into multiple paths.\
          `failure ` means an error-handling relationship; if the block encounters a failure during execution, the process moves to the block specified under the "failure" relationship.
      </td>
    </tr>

    <tr>
      <td>
        \-- destinationBlockName
      </td>

      <td>
        String
      </td>

      <td>
        Specifies the block where the data goes after a split or failure occurs.
      </td>
    </tr>

    <tr>
      <td>
        \-- loadBalanceStrategy
      </td>

      <td>
        String
      </td>

      <td>
        Defines how the system distributes data across multiple connections. `ROUND_ROBIN `evenly distributes the data, ensuring a balanced load among the connections.
      </td>
    </tr>

    <tr>
      <td>
        \-- terminated
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the connection is terminated upon failure.
      </td>
    </tr>

    <tr>
      <td>
        * validationErrors
      </td>

      <td>
        Array
      </td>

      <td>
        Array shows the validation errors related to the block.
      </td>
    </tr>

    <tr>
      <td>
        * validationKey
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the block passes validation.
      </td>
    </tr>

    <tr>
      <td>
        * dummyFieldChecked
      </td>

      <td>
        Boolean
      </td>

      <td>
        Shows whether a placeholder or dummy field is selected.
      </td>
    </tr>

    <tr>
      <td>
        * visible
      </td>

      <td>
        Boolean
      </td>

      <td>
        States whether the block is visible.
      </td>
    </tr>

    <tr>
      <td>
        * source
      </td>

      <td>
        Boolean
      </td>

      <td>
        States whether the block is a source block.
      </td>
    </tr>

    <tr>
      <td>
        * fieldsNotIsAdvanced
      </td>

      <td>
        Array
      </td>

      <td>
        Array gives the details of non-advanced fields in the block.
      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td>
        Array
      </td>

      <td>
        Array shows the status details of the template.
      </td>
    </tr>

    <tr>
      <td>
        * state
      </td>

      <td>
        String
      </td>

      <td>
        Current status of the template. **Example**: `Draft`, `Live`
      </td>
    </tr>

    <tr>
      <td>
        * runningCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates how many instances or executions of a workflow are currently running or active.
      </td>
    </tr>

    <tr>
      <td>
        * stoppedCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates how many instances or executions of the workflow are currently stopped or terminated.
      </td>
    </tr>

    <tr>
      <td>
        * invalidCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates how many instances or executions of the workflow are invalid because of errors or configuration issues.
      </td>
    </tr>

    <tr>
      <td>
        * disabledCount
      </td>

      <td>
        Integer
      </td>

      <td>
        Indicates how many instances or executions of the workflow are currently disabled and not running.
      </td>
    </tr>

    <tr>
      <td>
        schedule
      </td>

      <td>
        Array
      </td>

      <td>
        Array includes the scheduling details of the template.
      </td>
    </tr>

    <tr>
      <td>
        * cron
      </td>

      <td>
        String
      </td>

      <td>
        Cron expression. A cron expression is a time-based job scheduler that allows you to schedule tasks, known as cron jobs, to run automatically at specified intervals, such as every minute, hour, day, or week.
      </td>
    </tr>

    <tr>
      <td>
        * cronFrequencyInSeconds
      </td>

      <td>
        Integer
      </td>

      <td>
        Frequency of the cron job schedule in seconds.
      </td>
    </tr>
  </tbody>
</Table>

```
{
    "name": "DIYDEMONEO_TESTDOC",
    "uuid": "28bdca6c-0192-1000-ffff-fffff93a616d",
    "blocks": [
        {
            "blockTypeId": 65,
            "name": "Transform-Data",
            "type": "csv_json_neo_transformer",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "File",
                    "displayName": "File Type",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "csv",
                            "value": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Sort",
                    "displayName": "Sort headers",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Alphabetical Sort",
                    "displayName": "Alphabetical Sort ? ",
                    "defaultValue": "0",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Group size",
                    "displayName": "Grouping Limit(1-1000)",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "1"
                },
                {
                    "name": "Group By",
                    "displayName": "Group By",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ],
            "connections": [
                {
                    "relationship": "splits",
                    "destinationBlockName": "Neo-Transformer",
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "failure",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'Record Reader' is invalid because Record Reader is required",
                "'Record Reader' is invalid because Record Reader is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "File",
                    "displayName": "File Type",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "csv",
                            "value": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Sort",
                    "displayName": "Sort headers",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "Alphabetical Sort",
                    "displayName": "Alphabetical Sort ? ",
                    "defaultValue": "0",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Group size",
                    "displayName": "Grouping Limit(1-1000)",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "1"
                },
                {
                    "name": "Group By",
                    "displayName": "Group By",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ]
        },
        {
            "blockTypeId": 61,
            "name": "Neo-Transformer",
            "type": "neo_transformer",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "neoDataFlows",
                    "displayName": "Enter url",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "Demo_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl"
                        },
                        {
                            "label": "Automation_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/automation"
                        },
                        {
                            "label": "CustomerAddTransformation",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "split response",
                    "displayName": "Split Response",
                    "defaultValue": "false",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "true",
                            "value": "true"
                        },
                        {
                            "label": "false",
                            "value": "false"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Authorization",
                    "displayName": "Authorization",
                    "defaultValue": "Basic ${ten:append('bradpitt@capillarytech.com'):base64Encode()}",
                    "htmlType": "text",
                    "dynamicFieldType": ""
                }
            ],
            "connections": [
                {
                    "relationship": "success",
                    "destinationBlockName": "Connect-to-Destination",
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'Remote URL' is invalid because Remote URL is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "neoDataFlows",
                    "displayName": "Enter url",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "Demo_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl"
                        },
                        {
                            "label": "Automation_CONNECTPLUS",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/automation"
                        },
                        {
                            "label": "CustomerAddTransformation",
                            "value": "http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "split response",
                    "displayName": "Split Response",
                    "defaultValue": "false",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "true",
                            "value": "true"
                        },
                        {
                            "label": "false",
                            "value": "false"
                        }
                    ],
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "Authorization",
                    "displayName": "Authorization",
                    "defaultValue": "Basic ${ten:append('bradpitt@capillarytech.com'):base64Encode()}",
                    "htmlType": "text",
                    "dynamicFieldType": ""
                }
            ]
        },
        {
            "blockTypeId": 57,
            "name": "Connect-to-Destination",
            "type": "retro_destination",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "clientKey",
                    "displayName": "Client Key",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "clientSecret",
                    "displayName": "Client Secret",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "apiEndPoint",
                    "displayName": "API EndPoint",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiBaseUrl",
                    "displayName": "API Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiMethod",
                    "displayName": "API Method",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "POST",
                            "value": "POST"
                        },
                        {
                            "label": "PUT",
                            "value": "PUT"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "oAuthBaseUrl",
                    "displayName": "OAuth Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "bulkSupport",
                    "displayName": "Bulk Support",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "requestSplitPath",
                    "displayName": "Request Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "responseSplitPath",
                    "displayName": "Response Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "recoverableErrorCodes",
                    "displayName": "Recoverable Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "parsePathMap",
                    "displayName": "Parse Path Map",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "yieldingErrorCodes",
                    "displayName": "Yielding Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "maxRetries",
                    "displayName": "Max Retries",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "0"
                },
                {
                    "name": "additionalHeaders",
                    "displayName": "Additional Headers",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "false",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ],
            "connections": [
                {
                    "relationship": "success",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "failure",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                },
                {
                    "relationship": "complete",
                    "terminated": true,
                    "loadBalanceStrategy": "ROUND_ROBIN"
                }
            ],
            "validationErrors": [
                "'API Method' is invalid because API Method is required",
                "'OAuth Base URL' is invalid because OAuth Base URL is required",
                "'API Base URL' is invalid because API Base URL is required",
                "'API Endpoint' is invalid because API Endpoint is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": false,
            "fieldsNotIsAdvanced": [
                {
                    "name": "clientKey",
                    "displayName": "Client Key",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "clientSecret",
                    "displayName": "Client Secret",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "None"
                },
                {
                    "name": "apiEndPoint",
                    "displayName": "API EndPoint",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiBaseUrl",
                    "displayName": "API Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "apiMethod",
                    "displayName": "API Method",
                    "htmlType": "select",
                    "possibleValues": [
                        {
                            "label": "POST",
                            "value": "POST"
                        },
                        {
                            "label": "PUT",
                            "value": "PUT"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "oAuthBaseUrl",
                    "displayName": "OAuth Base Url",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "bulkSupport",
                    "displayName": "Bulk Support",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "requestSplitPath",
                    "displayName": "Request Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "responseSplitPath",
                    "displayName": "Response Split Path",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "recoverableErrorCodes",
                    "displayName": "Recoverable Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "parsePathMap",
                    "displayName": "Parse Path Map",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "yieldingErrorCodes",
                    "displayName": "Yielding Error Codes",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": ""
                },
                {
                    "name": "maxRetries",
                    "displayName": "Max Retries",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "0"
                },
                {
                    "name": "additionalHeaders",
                    "displayName": "Additional Headers",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "false",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                }
            ]
        },
        {
            "blockTypeId": 6,
            "name": "Connect-to-source",
            "type": "sftp_pull",
            "hide": "block-section",
            "order": 0,
            "fields": [
                {
                    "name": "hostname",
                    "displayName": "Hostname",
                    "htmlType": "text",
                    "rules": {
                        "maxLength": {
                            "value": "100",
                            "message": "maximum length can't exceed 100"
                        },
                        "minLength": {
                            "value": "5",
                            "message": "minimum length must be 5"
                        },
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "username",
                    "displayName": "Username",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "password",
                    "displayName": "Password",
                    "htmlType": "password",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "sourceDirectory",
                    "displayName": "Source Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "."
                },
                {
                    "name": "fileRegex",
                    "displayName": "Filename Pattern",
                    "htmlType": "text",
                    "possibleValues": [
                        {
                            "label": ".*.csv",
                            "value": ".*.csv"
                        },
                        {
                            "label": ".*",
                            "value": ".*"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "processedDirectory",
                    "displayName": "Processed Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "unzipFiles",
                    "displayName": "Unzip Files",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "apiErrorFilePath",
                    "displayName": "API Error Filepath",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "searchDirRecursively",
                    "displayName": "Search Directory Recursively",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "port",
                    "displayName": "Port",
                    "defaultValue": "22",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "22"
                }
            ],
            "connections": [
                {
                    "relationship": "validated",
                    "destinationBlockName": "Transform-Data",
                    "loadBalanceStrategy": "SINGLE_NODE"
                }
            ],
            "validationErrors": [
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required",
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required",
                "'Hostname' is invalid because Hostname is required",
                "'Username' is invalid because Username is required"
            ],
            "validationKey": false,
            "dummyFieldChecked": false,
            "visible": true,
            "source": true,
            "fieldsNotIsAdvanced": [
                {
                    "name": "hostname",
                    "displayName": "Hostname",
                    "htmlType": "text",
                    "rules": {
                        "maxLength": {
                            "value": "100",
                            "message": "maximum length can't exceed 100"
                        },
                        "minLength": {
                            "value": "5",
                            "message": "minimum length must be 5"
                        },
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "username",
                    "displayName": "Username",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "password",
                    "displayName": "Password",
                    "htmlType": "password",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "sourceDirectory",
                    "displayName": "Source Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "."
                },
                {
                    "name": "fileRegex",
                    "displayName": "Filename Pattern",
                    "htmlType": "text",
                    "possibleValues": [
                        {
                            "label": ".*.csv",
                            "value": ".*.csv"
                        },
                        {
                            "label": ".*",
                            "value": ".*"
                        }
                    ],
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "processedDirectory",
                    "displayName": "Processed Directory",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "unzipFiles",
                    "displayName": "Unzip Files",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "true"
                },
                {
                    "name": "apiErrorFilePath",
                    "displayName": "API Error Filepath",
                    "htmlType": "text",
                    "dynamicFieldType": "",
                    "value": "null"
                },
                {
                    "name": "searchDirRecursively",
                    "displayName": "Search Directory Recursively",
                    "htmlType": "checkbox",
                    "dynamicFieldType": "",
                    "value": "false"
                },
                {
                    "name": "port",
                    "displayName": "Port",
                    "defaultValue": "22",
                    "htmlType": "text",
                    "rules": {
                        "required": {
                            "value": "true",
                            "message": "this is required"
                        }
                    },
                    "dynamicFieldType": "",
                    "value": "22"
                }
            ]
        }
    ],
    "status": {
        "state": "Draft",
        "runningCount": 1,
        "stoppedCount": 9,
        "invalidCount": 7,
        "disabledCount": 0
    },
    "schedule": {
        "cron": "0 0 12 1 6 ? *",
        "cronFrequencyInSeconds": 31536000
    }
}
```

<br />

<br />

# API-specific error codes

| Error Code | Description          |
| :--------- | :------------------- |
| 500        | blockType is invalid |

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "diy-template",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}.connectplus.capillarytech.com",
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
    "/api/workspaces/{workspaceID}/dataflows/diy": {
      "post": {
        "summary": "Create DIY Template",
        "description": "Create a DIY template",
        "operationId": "post-create-api-diy-template-connectplus",
        "parameters": [
          {
            "name": "workspaceID",
            "in": "path",
            "description": "Workspace ID where the template is being created.",
            "schema": {
              "type": "integer",
              "format": "int32"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "name",
                  "blockList",
                  "blockName",
                  "blockType",
                  "blockOrder"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Name of the template being created."
                  },
                  "blockList": {
                    "type": "array",
                    "description": "Array containing the details of the blocks or processors.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "blockName": {
                    "type": "string",
                    "description": "Name of the block in the template."
                  },
                  "blockType": {
                    "type": "string",
                    "description": "Type of process executed by the block corresponds to the name parameter in the response from the GET processor API."
                  },
                  "blockOrder": {
                    "type": "string",
                    "description": "Order in which the block is created. It defines the linking between the blocks."
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
                    "value": "{\n  \"name\": \"DIYDEMONEO_TESTDOC\",\n  \"uuid\": \"28bdca6c-0192-1000-ffff-fffff93a616d\",\n  \"blocks\": [\n    {\n      \"blockTypeId\": 65,\n      \"name\": \"Transform-Data\",\n      \"type\": \"csv_json_neo_transformer\",\n      \"hide\": \"block-section\",\n      \"order\": 0,\n      \"fields\": [\n        {\n          \"name\": \"File\",\n          \"displayName\": \"File Type\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"csv\",\n              \"value\": \"5c5b9607-0173-1000-87ad-a0b9ca44885f\"\n            }\n          ],\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"Sort\",\n          \"displayName\": \"Sort headers\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"Alphabetical Sort\",\n          \"displayName\": \"Alphabetical Sort ? \",\n          \"defaultValue\": \"0\",\n          \"htmlType\": \"checkbox\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"false\"\n        },\n        {\n          \"name\": \"Group size\",\n          \"displayName\": \"Grouping Limit(1-1000)\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"1\"\n        },\n        {\n          \"name\": \"Group By\",\n          \"displayName\": \"Group By\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        }\n      ],\n      \"connections\": [\n        {\n          \"relationship\": \"splits\",\n          \"destinationBlockName\": \"Neo-Transformer\",\n          \"loadBalanceStrategy\": \"ROUND_ROBIN\"\n        },\n        {\n          \"relationship\": \"failure\",\n          \"terminated\": true,\n          \"loadBalanceStrategy\": \"ROUND_ROBIN\"\n        }\n      ],\n      \"validationErrors\": [\n        \"'Record Reader' is invalid because Record Reader is required\",\n        \"'Record Reader' is invalid because Record Reader is required\"\n      ],\n      \"validationKey\": false,\n      \"dummyFieldChecked\": false,\n      \"visible\": true,\n      \"source\": false,\n      \"fieldsNotIsAdvanced\": [\n        {\n          \"name\": \"File\",\n          \"displayName\": \"File Type\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"csv\",\n              \"value\": \"5c5b9607-0173-1000-87ad-a0b9ca44885f\"\n            }\n          ],\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"Sort\",\n          \"displayName\": \"Sort headers\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"Alphabetical Sort\",\n          \"displayName\": \"Alphabetical Sort ? \",\n          \"defaultValue\": \"0\",\n          \"htmlType\": \"checkbox\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"false\"\n        },\n        {\n          \"name\": \"Group size\",\n          \"displayName\": \"Grouping Limit(1-1000)\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"1\"\n        },\n        {\n          \"name\": \"Group By\",\n          \"displayName\": \"Group By\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        }\n      ]\n    },\n    {\n      \"blockTypeId\": 61,\n      \"name\": \"Neo-Transformer\",\n      \"type\": \"neo_transformer\",\n      \"hide\": \"block-section\",\n      \"order\": 0,\n      \"fields\": [\n        {\n          \"name\": \"neoDataFlows\",\n          \"displayName\": \"Enter url\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"Demo_CONNECTPLUS\",\n              \"value\": \"http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl\"\n            },\n            {\n              \"label\": \"Automation_CONNECTPLUS\",\n              \"value\": \"http://neo-a.default:3000/api/v1/xto6x/execute/automation\"\n            },\n            {\n              \"label\": \"CustomerAddTransformation\",\n              \"value\": \"http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation\"\n            }\n          ],\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"split response\",\n          \"displayName\": \"Split Response\",\n          \"defaultValue\": \"false\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"true\",\n              \"value\": \"true\"\n            },\n            {\n              \"label\": \"false\",\n              \"value\": \"false\"\n            }\n          ],\n          \"dynamicFieldType\": \"\",\n          \"value\": \"false\"\n        },\n        {\n          \"name\": \"Authorization\",\n          \"displayName\": \"Authorization\",\n          \"defaultValue\": \"Basic ${ten:append('bradpitt@capillarytech.com'):base64Encode()}\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\"\n        }\n      ],\n      \"connections\": [\n        {\n          \"relationship\": \"success\",\n          \"destinationBlockName\": \"Connect-to-Destination\",\n          \"loadBalanceStrategy\": \"ROUND_ROBIN\"\n        }\n      ],\n      \"validationErrors\": [\n        \"'Remote URL' is invalid because Remote URL is required\"\n      ],\n      \"validationKey\": false,\n      \"dummyFieldChecked\": false,\n      \"visible\": true,\n      \"source\": false,\n      \"fieldsNotIsAdvanced\": [\n        {\n          \"name\": \"neoDataFlows\",\n          \"displayName\": \"Enter url\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"Demo_CONNECTPLUS\",\n              \"value\": \"http://neo-a.default:3000/api/v1/xto6x/execute/demoUrl\"\n            },\n            {\n              \"label\": \"Automation_CONNECTPLUS\",\n              \"value\": \"http://neo-a.default:3000/api/v1/xto6x/execute/automation\"\n            },\n            {\n              \"label\": \"CustomerAddTransformation\",\n              \"value\": \"http://neo-a.default:3000/api/v1/xto6x/execute/customeraddtransformation\"\n            }\n          ],\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"split response\",\n          \"displayName\": \"Split Response\",\n          \"defaultValue\": \"false\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"true\",\n              \"value\": \"true\"\n            },\n            {\n              \"label\": \"false\",\n              \"value\": \"false\"\n            }\n          ],\n          \"dynamicFieldType\": \"\",\n          \"value\": \"false\"\n        },\n        {\n          \"name\": \"Authorization\",\n          \"displayName\": \"Authorization\",\n          \"defaultValue\": \"Basic ${ten:append('bradpitt@capillarytech.com'):base64Encode()}\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\"\n        }\n      ]\n    },\n    {\n      \"blockTypeId\": 57,\n      \"name\": \"Connect-to-Destination\",\n      \"type\": \"retro_destination\",\n      \"hide\": \"block-section\",\n      \"order\": 0,\n      \"fields\": [\n        {\n          \"name\": \"clientKey\",\n          \"displayName\": \"Client Key\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"None\"\n        },\n        {\n          \"name\": \"clientSecret\",\n          \"displayName\": \"Client Secret\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"None\"\n        },\n        {\n          \"name\": \"apiEndPoint\",\n          \"displayName\": \"API EndPoint\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"apiBaseUrl\",\n          \"displayName\": \"API Base Url\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"apiMethod\",\n          \"displayName\": \"API Method\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"POST\",\n              \"value\": \"POST\"\n            },\n            {\n              \"label\": \"PUT\",\n              \"value\": \"PUT\"\n            }\n          ],\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"oAuthBaseUrl\",\n          \"displayName\": \"OAuth Base Url\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"bulkSupport\",\n          \"displayName\": \"Bulk Support\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"true\"\n        },\n        {\n          \"name\": \"requestSplitPath\",\n          \"displayName\": \"Request Split Path\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"responseSplitPath\",\n          \"displayName\": \"Response Split Path\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"recoverableErrorCodes\",\n          \"displayName\": \"Recoverable Error Codes\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"parsePathMap\",\n          \"displayName\": \"Parse Path Map\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"yieldingErrorCodes\",\n          \"displayName\": \"Yielding Error Codes\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"maxRetries\",\n          \"displayName\": \"Max Retries\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"0\"\n        },\n        {\n          \"name\": \"additionalHeaders\",\n          \"displayName\": \"Additional Headers\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"false\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        }\n      ],\n      \"connections\": [\n        {\n          \"relationship\": \"success\",\n          \"terminated\": true,\n          \"loadBalanceStrategy\": \"ROUND_ROBIN\"\n        },\n        {\n          \"relationship\": \"failure\",\n          \"terminated\": true,\n          \"loadBalanceStrategy\": \"ROUND_ROBIN\"\n        },\n        {\n          \"relationship\": \"complete\",\n          \"terminated\": true,\n          \"loadBalanceStrategy\": \"ROUND_ROBIN\"\n        }\n      ],\n      \"validationErrors\": [\n        \"'API Method' is invalid because API Method is required\",\n        \"'OAuth Base URL' is invalid because OAuth Base URL is required\",\n        \"'API Base URL' is invalid because API Base URL is required\",\n        \"'API Endpoint' is invalid because API Endpoint is required\"\n      ],\n      \"validationKey\": false,\n      \"dummyFieldChecked\": false,\n      \"visible\": true,\n      \"source\": false,\n      \"fieldsNotIsAdvanced\": [\n        {\n          \"name\": \"clientKey\",\n          \"displayName\": \"Client Key\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"None\"\n        },\n        {\n          \"name\": \"clientSecret\",\n          \"displayName\": \"Client Secret\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"None\"\n        },\n        {\n          \"name\": \"apiEndPoint\",\n          \"displayName\": \"API EndPoint\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"apiBaseUrl\",\n          \"displayName\": \"API Base Url\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"apiMethod\",\n          \"displayName\": \"API Method\",\n          \"htmlType\": \"select\",\n          \"possibleValues\": [\n            {\n              \"label\": \"POST\",\n              \"value\": \"POST\"\n            },\n            {\n              \"label\": \"PUT\",\n              \"value\": \"PUT\"\n            }\n          ],\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"oAuthBaseUrl\",\n          \"displayName\": \"OAuth Base Url\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"bulkSupport\",\n          \"displayName\": \"Bulk Support\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"true\"\n        },\n        {\n          \"name\": \"requestSplitPath\",\n          \"displayName\": \"Request Split Path\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"responseSplitPath\",\n          \"displayName\": \"Response Split Path\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"recoverableErrorCodes\",\n          \"displayName\": \"Recoverable Error Codes\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"parsePathMap\",\n          \"displayName\": \"Parse Path Map\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"yieldingErrorCodes\",\n          \"displayName\": \"Yielding Error Codes\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"\"\n        },\n        {\n          \"name\": \"maxRetries\",\n          \"displayName\": \"Max Retries\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"0\"\n        },\n        {\n          \"name\": \"additionalHeaders\",\n          \"displayName\": \"Additional Headers\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"false\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        }\n      ]\n    },\n    {\n      \"blockTypeId\": 6,\n      \"name\": \"Connect-to-source\",\n      \"type\": \"sftp_pull\",\n      \"hide\": \"block-section\",\n      \"order\": 0,\n      \"fields\": [\n        {\n          \"name\": \"hostname\",\n          \"displayName\": \"Hostname\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"maxLength\": {\n              \"value\": \"100\",\n              \"message\": \"maximum length can't exceed 100\"\n            },\n            \"minLength\": {\n              \"value\": \"5\",\n              \"message\": \"minimum length must be 5\"\n            },\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"username\",\n          \"displayName\": \"Username\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"password\",\n          \"displayName\": \"Password\",\n          \"htmlType\": \"password\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"sourceDirectory\",\n          \"displayName\": \"Source Directory\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \".\"\n        },\n        {\n          \"name\": \"fileRegex\",\n          \"displayName\": \"Filename Pattern\",\n          \"htmlType\": \"text\",\n          \"possibleValues\": [\n            {\n              \"label\": \".*.csv\",\n              \"value\": \".*.csv\"\n            },\n            {\n              \"label\": \".*\",\n              \"value\": \".*\"\n            }\n          ],\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"processedDirectory\",\n          \"displayName\": \"Processed Directory\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"unzipFiles\",\n          \"displayName\": \"Unzip Files\",\n          \"htmlType\": \"checkbox\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"true\"\n        },\n        {\n          \"name\": \"apiErrorFilePath\",\n          \"displayName\": \"API Error Filepath\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"searchDirRecursively\",\n          \"displayName\": \"Search Directory Recursively\",\n          \"htmlType\": \"checkbox\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"false\"\n        },\n        {\n          \"name\": \"port\",\n          \"displayName\": \"Port\",\n          \"defaultValue\": \"22\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"22\"\n        }\n      ],\n      \"connections\": [\n        {\n          \"relationship\": \"validated\",\n          \"destinationBlockName\": \"Transform-Data\",\n          \"loadBalanceStrategy\": \"SINGLE_NODE\"\n        }\n      ],\n      \"validationErrors\": [\n        \"'Hostname' is invalid because Hostname is required\",\n        \"'Username' is invalid because Username is required\",\n        \"'Hostname' is invalid because Hostname is required\",\n        \"'Username' is invalid because Username is required\",\n        \"'Hostname' is invalid because Hostname is required\",\n        \"'Username' is invalid because Username is required\"\n      ],\n      \"validationKey\": false,\n      \"dummyFieldChecked\": false,\n      \"visible\": true,\n      \"source\": true,\n      \"fieldsNotIsAdvanced\": [\n        {\n          \"name\": \"hostname\",\n          \"displayName\": \"Hostname\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"maxLength\": {\n              \"value\": \"100\",\n              \"message\": \"maximum length can't exceed 100\"\n            },\n            \"minLength\": {\n              \"value\": \"5\",\n              \"message\": \"minimum length must be 5\"\n            },\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"username\",\n          \"displayName\": \"Username\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"password\",\n          \"displayName\": \"Password\",\n          \"htmlType\": \"password\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"sourceDirectory\",\n          \"displayName\": \"Source Directory\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \".\"\n        },\n        {\n          \"name\": \"fileRegex\",\n          \"displayName\": \"Filename Pattern\",\n          \"htmlType\": \"text\",\n          \"possibleValues\": [\n            {\n              \"label\": \".*.csv\",\n              \"value\": \".*.csv\"\n            },\n            {\n              \"label\": \".*\",\n              \"value\": \".*\"\n            }\n          ],\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"processedDirectory\",\n          \"displayName\": \"Processed Directory\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"unzipFiles\",\n          \"displayName\": \"Unzip Files\",\n          \"htmlType\": \"checkbox\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"true\"\n        },\n        {\n          \"name\": \"apiErrorFilePath\",\n          \"displayName\": \"API Error Filepath\",\n          \"htmlType\": \"text\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"null\"\n        },\n        {\n          \"name\": \"searchDirRecursively\",\n          \"displayName\": \"Search Directory Recursively\",\n          \"htmlType\": \"checkbox\",\n          \"dynamicFieldType\": \"\",\n          \"value\": \"false\"\n        },\n        {\n          \"name\": \"port\",\n          \"displayName\": \"Port\",\n          \"defaultValue\": \"22\",\n          \"htmlType\": \"text\",\n          \"rules\": {\n            \"required\": {\n              \"value\": \"true\",\n              \"message\": \"this is required\"\n            }\n          },\n          \"dynamicFieldType\": \"\",\n          \"value\": \"22\"\n        }\n      ]\n    }\n  ],\n  \"status\": {\n    \"state\": \"Draft\",\n    \"runningCount\": 1,\n    \"stoppedCount\": 9,\n    \"invalidCount\": 7,\n    \"disabledCount\": 0\n  },\n  \"schedule\": {\n    \"cron\": \"0 0 12 1 6 ? *\",\n    \"cronFrequencyInSeconds\": 31536000\n  }dpittd"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "example": "DIYDEMONEO_TESTDOC"
                    },
                    "uuid": {
                      "type": "string",
                      "example": "28bdca6c-0192-1000-ffff-fffff93a616d"
                    },
                    "blocks": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "blockTypeId": {
                            "type": "integer",
                            "example": 65,
                            "default": 0
                          },
                          "name": {
                            "type": "string",
                            "example": "Transform-Data"
                          },
                          "type": {
                            "type": "string",
                            "example": "csv_json_neo_transformer"
                          },
                          "hide": {
                            "type": "string",
                            "example": "block-section"
                          },
                          "order": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string",
                                  "example": "File"
                                },
                                "displayName": {
                                  "type": "string",
                                  "example": "File Type"
                                },
                                "htmlType": {
                                  "type": "string",
                                  "example": "select"
                                },
                                "possibleValues": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string",
                                        "example": "csv"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                                      }
                                    }
                                  }
                                },
                                "dynamicFieldType": {
                                  "type": "string",
                                  "example": ""
                                },
                                "value": {
                                  "type": "string",
                                  "example": "null"
                                }
                              }
                            }
                          },
                          "connections": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "relationship": {
                                  "type": "string",
                                  "example": "splits"
                                },
                                "destinationBlockName": {
                                  "type": "string",
                                  "example": "Neo-Transformer"
                                },
                                "loadBalanceStrategy": {
                                  "type": "string",
                                  "example": "ROUND_ROBIN"
                                }
                              }
                            }
                          },
                          "validationErrors": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "example": "'Record Reader' is invalid because Record Reader is required"
                            }
                          },
                          "validationKey": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "dummyFieldChecked": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "visible": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "source": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "fieldsNotIsAdvanced": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string",
                                  "example": "File"
                                },
                                "displayName": {
                                  "type": "string",
                                  "example": "File Type"
                                },
                                "htmlType": {
                                  "type": "string",
                                  "example": "select"
                                },
                                "possibleValues": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string",
                                        "example": "csv"
                                      },
                                      "value": {
                                        "type": "string",
                                        "example": "5c5b9607-0173-1000-87ad-a0b9ca44885f"
                                      }
                                    }
                                  }
                                },
                                "dynamicFieldType": {
                                  "type": "string",
                                  "example": ""
                                },
                                "value": {
                                  "type": "string",
                                  "example": "null"
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "status": {
                      "type": "object",
                      "properties": {
                        "state": {
                          "type": "string",
                          "example": "Draft"
                        },
                        "runningCount": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "stoppedCount": {
                          "type": "integer",
                          "example": 9,
                          "default": 0
                        },
                        "invalidCount": {
                          "type": "integer",
                          "example": 7,
                          "default": 0
                        },
                        "disabledCount": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        }
                      }
                    },
                    "schedule": {
                      "type": "object",
                      "properties": {
                        "cron": {
                          "type": "string",
                          "example": "0 0 12 1 6 ? *"
                        },
                        "cronFrequencyInSeconds": {
                          "type": "integer",
                          "example": 31536000,
                          "default": 0
                        }
                      }
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
              "code": "{\n  \"name\": \"DIYDEMONEO_TESTDOC\",\n  \"blockList\": [\n    {\n      \"blockName\": \"Connect-to-source\",\n      \"blockType\": \"sftp_pull\",\n      \"blockOrder\": 0\n    },\n    {\n      \"blockName\": \"Transform-Data\",\n      \"blockType\": \"csv_json_neo_transformer\",\n      \"blockOrder\": 1\n    },\n    {\n      \"blockName\": \"Neo-Transformer\",\n      \"blockType\": \"neo_transformer\",\n      \"blockOrder\": 2\n    },\n    {\n      \"blockName\": \"Connect-to-Destination\",\n      \"blockType\": \"retro_destination\",\n      \"blockOrder\": 3\n    }\n  ]\n}"
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