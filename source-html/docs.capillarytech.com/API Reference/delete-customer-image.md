> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Delete Customer Image

Deletes the profile image that is set for a customer.

# Example request

```curl Sample request
curl --location --request DELETE 'http://eu.api.capillarytech.com/v2/customers/564703420/deleteImage?image_ids=1' \
--header 'Authorization: Basic bWFkaHVzI3MjU2YQ==' \
--header 'Cookie: _cfuvid=UYaVw3yuWRusRWRvItdJ48TY.KSQcYmqJkINxSb_QXs-1744174110851-0.0.1.1-604800000; _cfuvid=dGIwbWm0KYguuf5fXsGxJ3mtpHXlH_k.GmKwtWQNmTM-1745306076287-0.0.1.1-604800000; _cfuvid=LfYENyeS6Y1vCU1Y4hd0xU6z6lxpFmFMWKQSr5LBhhs-1750337938435-0.0.1.1-604800000; _cfuvid=lz.4VRPSCSjAEVc3Q13mvAwa1ev1vKj_dsBEmxMWkvU-1758738086920-0.0.1.1-604800000'
```

# Query parameter

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        image_ids*
      </td>

      <td>
        Integer
      </td>

      <td>
        Index of the image to be deleted.

        Images for each customer are stored in a 0-based index order, meaning the first image is at position 0, the second at 1, the third at 2, and so on. To delete an image, you need to pass the index position of that image in the `image_ids` parameter. For example, if a customer has 3 images:
        Image 1 → index 0
        Image 2 → index 1
        Image 3 → index 2
        To delete any one of them, pass the respective index (0, 1, or 2) in the `image_ids` parameter.

        **Note**: The index values depend on the total number of images available for that specific customer. If more images are added, the index positions will increase accordingly.

        To find the number of images and indexes associated with the customer refer to <Anchor label="Get Customer Image" target="_blank" href="https://docs.capillarytech.com/reference/get-customer-image#/">Get Customer Image</Anchor>.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```curl Sample response
{
    "data": [
        {
            "code": 200,
            "message": "Success",
            "status": "true"
        }
    ],
    "warnings": [],
    "errors": []
}
```

# Response parameters

| Parameter | Type   | Description                        |
| :-------- | :----- | :--------------------------------- |
| message   | string | Success/failure message            |
| status    | string | "true" if successful, else "false" |

# API specific Error Code

| Error Code | Description                                  | Reason                                 |
| :--------- | :------------------------------------------- | :------------------------------------- |
| 8078       | No Image passed to be deleted.               | Valid Image not passed.                |
| 8015       | Customer not found for the given identifiers | Valid customer identifiers not passed. |

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
    "/customers/{userId}/deleteImage": {
      "delete": {
        "summary": "Delete Customer Image",
        "description": "Deletes the profile image that is set for a customer.",
        "operationId": "delete-customer-image",
        "parameters": [
          {
            "name": "userId",
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
            "description": "Pass the relevant value. Note: Content-Type is not required, as the DELETE request does not contain a payload.",
            "schema": {
              "type": "string",
              "default": "multipart/form-data"
            }
          },
          {
            "name": "image_ids",
            "in": "query",
            "description": "Unique IDs of images to be deleted. Pass each image ID in a new line.",
            "required": true,
            "schema": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": {
                      "data": [
                        {
                          "code": 200,
                          "message": "Success",
                          "status": "true"
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
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
                          "message": {
                            "type": "string",
                            "example": "Success"
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
              "language": "shell",
              "code": "curl --location --request DELETE 'http://eu.api.capillarytech.com/v2/customers/564703420/deleteImage?image_ids=1' \\\n--header 'Authorization: Basic bWFkaHVfcNzI3MjU2YQ==' \\\n--header 'Cookie: _cfuvid=UYaVw3yuWRusRWRvItdJ48TY.KSQcYmqJkINxSb_QXs-1744174110851-0.0.1.1-604800000; _cfuvid=dGIwbWm0KYguuf5fXsGxJ3mtpHXlH_k.GmKwtWQNmTM-1745306076287-0.0.1.1-604800000; _cfuvid=LfYENyeS6Y1vCU1Y4hd0xU6z6lxpFmFMWKQSr5LBhhs-1750337938435-0.0.1.1-604800000; _cfuvid=lz.4VRPSCSjAEVc3Q13mvAwa1ev1vKj_dsBEmxMWkvU-1758738086920-0.0.1.1-604800000'",
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```