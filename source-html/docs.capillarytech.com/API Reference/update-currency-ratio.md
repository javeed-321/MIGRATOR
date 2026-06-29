> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Currency Ratio

Lets you add or update currency ratios with respect to Indian Rupee (INR).

> 📘 Note: To add a new supported currency for an org, follow these steps
>
> * [ ] Navigate to Intouch > Org settings > Org Setup > Org Profile > Click on the Edit button on the top right > Click on Org Profile > Set Org Currency tab > Select the currency which you wan to add from the list on the left and then add it to the right list > Click on submit.
> * [ ] Once a new supported currency have been added to an org from the Intouch UI, it takes a **maximum of 1 hour** for that currency's ratio to be updated using the Update Currency Ratio API.

## Body Parameters

| Field        | Type   | Required | Description                                           |
| ------------ | ------ | -------- | ----------------------------------------------------- |
| currencyCode | string | Yes      | ISO code of the currency                              |
| ratioInr     | number | Yes      | Ratio of the currency to INR (must be greater than 0) |

```
{
    "ratioInr":65,
    "currencyCode":"SGD"
}
```

## Response Parameters

| Parameter Name | Type    | Description                             |
| :------------- | :------ | :-------------------------------------- |
| entity         | Object  | Contains currency conversion details    |
| - ratioInr     | Float   | Conversion rate to INR                  |
| - currencyCode | String  | Original currency code (ISO Format)     |
| warnings       | Array   | List of non-critical warnings (if any)  |
| errors         | Array   | List of error messages (if any)         |
| success        | Boolean | Indicates if the request was successful |

```
{
    "entity": {
        "ratioInr": 65.0,
        "currencyCode": "SGD"
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

> 📘 NOTE
>
> To retrieve all updated currency ratios for an organization, use the same endpoint as the Update Currency Ratio API but:
>
> * Change the method from POST → GET
> * Set the body type to `none`(GET calls require no request body)

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
    "/currencyratio": {
      "post": {
        "summary": "Update Currency Ratio",
        "description": "Lets you add or update currency ratios with respect to Indian Rupee (INR).",
        "operationId": "update-currency-ratio",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "ratioInr",
                  "currencyCode"
                ],
                "properties": {
                  "ratioInr": {
                    "type": "number",
                    "description": "Conversion ratio with respect to INR.",
                    "format": "double"
                  },
                  "currencyCode": {
                    "type": "string",
                    "description": "ISO currency code that you want to update. For example `EUR` for Euro, `SGD` for Singapore Dollar, `CNY` for China Yuan Renminbi, `SAR` Saudi Riyal. For more codes, Google for ISO currency codes."
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
                    "value": "{\n    \"entity\": {\n        \"ratioInr\": 65.0,\n        \"currencyCode\": \"SGD\"\n    },\n    \"warnings\": [],\n    \"errors\": [],\n    \"success\": true\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "entity": {
                      "type": "object",
                      "properties": {
                        "ratioInr": {
                          "type": "integer",
                          "example": 65,
                          "default": 0
                        },
                        "currencyCode": {
                          "type": "string",
                          "example": "SGD"
                        }
                      }
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "errors": {
                      "type": "array"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true,
                      "default": true
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/currencyratio' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic dGpfY2FwaWxsYXJ5OjVjMTc3MDJlOTI5NjQ4MjUzZTY3ZDJiMGM2ZTk5ZjE5' \\\n--header 'Cookie: _cfuvid=c.5agx8tmOi_4rS6BQFx4PU8ZWeuDT8iIAjHm8y6_cg-1744095133839-0.0.1.1-604800000; _cfuvid=1ozIjmFaLoEx5vwdUHZU.3qhuO2to6ZW5PwirimSEGo-1745903460934-0.0.1.1-604800000; _cfuvid=fTFul6f54qaPJd4K8nJAoOuTIlBzPjPfRFJj50EYz1c-1746005669697-0.0.1.1-604800000' \\\n--data '{\n    \"ratioInr\":65,\n    \"currencyCode\":\"SGD\"\n}'",
              "name": "curl"
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