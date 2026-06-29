> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Card Series

Endpoint for POST /v2/card/series/

Lets you create a new card series for the org. With this API, you can do the following:

* Create auto-generated physical/digital cards for a series.
* Create physical/digital card series with auto card generation disabled.

# Prerequisites

* [ ] Authentication: Basic or OAuth authentication details
* [ ] Access group resource - NA

# Resource information

|               |                  |
| :------------ | :--------------- |
| URI           | /v2/card/series/ |
| HTTP method   | POST             |
| Pagination    | NA               |
| Rate limit    | NA               |
| Batch support | NA               |

# Sample API cURL

```
curl --location 'https://eu.api.capillarytech.com/v2/card/series/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic YTYyZTZm' \
--header 'Cookie: _cfuvid=Y0f3VfLqD8GzrSkhY4oAJF2sdcs4f0RvoHYzuwlgCKM-1751618877635-0.0.1.1-604800000' \
--data '{
  "code":"TestCardSeries123",
  "name":"TestCardSeries123",
  "type":"DIGITAL",
  "expiryDays":1000,
  "maxActiveCardsPerCustomer":1,
  "cardGenerationConfiguration":{
    "prefix":"M2",
    "suffix":"C0",
    "offset":1,
    "length":10,
    "method": "RANDOM_MOD7"
  },
  "cardGenerationEnabled":true,
  "isActive":true,
  "trigger":"SERIES_ID"
}'
```

<br />

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked with * are mandatory)
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
        code*
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the card series.
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
        Display name for the card series.
      </td>
    </tr>

    <tr>
      <td>
        type*
      </td>

      <td>
        String
      </td>

      <td>
        Type of card. **Supported values**: `DIGITAL`, `PHYSICAL`.
      </td>
    </tr>

    <tr>
      <td>
        expiryDays
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of days after issuance when the card expires.
      </td>
    </tr>

    <tr>
      <td>
        maxActiveCardsPerCustomer
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of active cards allowed per customer.
      </td>
    </tr>

    <tr>
      <td>
        cardGenerationConfiguration
      </td>

      <td>
        Object
      </td>

      <td>
        Configuration for generating card numbers.
      </td>
    </tr>

    <tr>
      <td>
        -prefix
      </td>

      <td>
        String
      </td>

      <td>
        Starting characters of the card number.
        Maximum 50 characters are allowed
        Special characters are not allowed.
      </td>
    </tr>

    <tr>
      <td>
        -suffix
      </td>

      <td>
        String
      </td>

      <td>
        Ending characters of the card number.
        Maximum 50 characters are allowed.
        Special characters are not allowed.
      </td>
    </tr>

    <tr>
      <td>
        -offset
      </td>

      <td>
        Integer
      </td>

      <td>
        Starting index or position for card number generation.
      </td>
    </tr>

    <tr>
      <td>
        -length
      </td>

      <td>
        Integer
      </td>

      <td>
        Total length of the card number including prefix and suffix.

        Minimum 5 characters are required.
        Maximum 150 characters are allowed.
      </td>
    </tr>

    <tr>
      <td>
        -method
      </td>

      <td>
        Enum
      </td>

      <td>
        Algorithm used for card number generation.  Supported values:  `DEFAULT`, `LUHNALGO`, `MOD7_ALGO`, `RANDOM`, `RANDOM_LUHN`, `RANDOM_MOD7`.  
        **Default value**: `DEFAULT` (Incremental- The system keeps a running number for each organisation and card series)
      </td>
    </tr>

    <tr>
      <td>
        cardGenerationEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        If true, card generation is enabled for this series.
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
        If true, the card series is active.
      </td>
    </tr>

    <tr>
      <td>
        trigger
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the event that triggers card generation. **Supported values**:  `SERIES_ID`, `OU_ID`, `REGISTRATION`.
      </td>
    </tr>
  </tbody>
</Table>

<br />

# Response parameters

| Parameter | Data Type | Description                                                           |
| --------- | --------- | --------------------------------------------------------------------- |
| entity    | Long      | Unique ID of the newly created card series.                           |
| warnings  | Array     | List of warnings, if any, generated during processing. Empty if none. |

# Sample response

```json Sample response
{
    "entity": 182,
    "warnings": []
}
```

# Error codes

| Code                       | Description                                                                                                              |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| 3001                       | Series code empty                                                                                                        |
| 3002                       | Series already exists                                                                                                    |
| 3003                       | Series type empty                                                                                                        |
| 3005                       | Card length invalid                                                                                                      |
| 3006                       | Card configuration already exists with the same prefix, suffix and cardlength                                            |
| 3007                       | Card generation config not passed                                                                                        |
| 3022                       | Card prefix is not a standard string                                                                                     |
| 3023                       | Card suffix is not a standard string                                                                                     |
| 3024                       | Card number total length should not be more than 150                                                                     |
| 3026                       | Card count exceeds 100000                                                                                                |
| 3028                       | Card length should not be less than                                                                                      |
| MAX\_CARD\_NUMBER\_REACHED | All possible card numbers have been generated for the current configuration. No more unique card numbers can be created. |

# Additional notes

For all algorithms, the final card number is constructed as:

```
[prefix] + [generated numeric part] + [suffix]
```

For algorithms that use a check digit (`LUHNALGO`, `MOD7_ALGO`, `RANDOM_LUHN`, `RANDOM_MOD7`), one digit is reserved for the check digit.

**Available digits for the generated number**

```
Total card length
– prefix length
– suffix length
– check digit (if applicable)
```

**Important constraint for RANDOM method**

When you use the `RANDOM` card generation method, the available numeric space is calculated as total card length minus prefix and suffix lengths. If this space is too small (for example, only one digit), the system may quickly use all possible card numbers. When this happens, you receive the `MAX_CARD_NUMBER_REACHED` error, and no more unique card numbers can be generated for this series. Always ensure that the numeric space is large enough to support your expected card volume.

***

### Important behaviour when changing algorithms

* Changing the card number generation algorithm **does not reset** the existing numeric counter.
* The counter is maintained per **organisation and card series**, not per prefix.
* Updating the prefix **does not affect** the counter value.

If the current counter value exceeds the number of digits allowed by the new algorithm, card generation fails.

***

### Example scenario:

Consider the scenario below:

* Total card length: 16
* Prefix length: 6
* Check digit: 1
* Available numeric digits: 9

If the existing counter has already reached a 10-digit value, no valid card numbers can be generated.

**Resolution**

* Increase the total card length, or
* Create a new card series.

***

### Best practices

* Decide the card generation algorithm **before** issuing cards.
* Avoid changing the algorithm for an active card series.
* When switching to check-digit–based algorithms, ensure enough digits are available for future growth.
* Card length must not be reduced after cards have been generated.
* Do not switch generation method (RANDOM ↔ SEQUENCE) after the card series are live.
* Prefix length reduces numeric space and can exhaust card numbers even when length looks valid.
* Sequence counters are not resettable and persist across config changes.
* When exhaustion occurs, only supported options are: Increase card length, or
  Create a new card series.

<br />

# OpenAPI definition

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "Create Card Series",
    "version": "1.0.0",
    "description": "API specification generated from cURL for POST /v2/card/series/"
  },
  "servers": [
    {
      "url": "https://{host}"
    }
  ],
  "paths": {
    "/v2/card/series/": {
      "post": {
        "summary": "Operation for POST /v2/card/series/",
        "description": "Endpoint for POST /v2/card/series/",
        "operationId": "postV2cardseries",
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string",
              "example": "Basic a3Jpc2huYS50aWxsMTAwOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "examples": {
                  "New Example": {
                    "summary": "New Example",
                    "value": ""
                  },
                  "Sample response": {
                    "summary": "Sample response",
                    "value": {
                      "entity": 187,
                      "warnings": []
                    }
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
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "code": {
                    "type": "string",
                    "example": "TestCardSeries11"
                  },
                  "name": {
                    "type": "string",
                    "example": "TestCardSeries11"
                  },
                  "type": {
                    "type": "string",
                    "example": "DIGITAL"
                  },
                  "expiryDays": {
                    "type": "integer",
                    "example": 1000
                  },
                  "maxActiveCardsPerCustomer": {
                    "type": "integer",
                    "example": 1
                  },
                  "cardGenerationConfiguration": {
                    "type": "object",
                    "properties": {
                      "prefix": {
                        "type": "string",
                        "example": "M"
                      },
                      "suffix": {
                        "type": "string",
                        "example": "C"
                      },
                      "offset": {
                        "type": "integer",
                        "example": 1
                      },
                      "length": {
                        "type": "integer",
                        "example": 10
                      },
                      "method": {
                        "type": "string",
                        "example": "RANDOM_MOD7"
                      }
                    }
                  },
                  "cardGenerationEnabled": {
                    "type": "boolean",
                    "example": true
                  },
                  "isActive": {
                    "type": "boolean",
                    "example": true
                  },
                  "trigger": {
                    "type": "string",
                    "example": "SERIES_ID"
                  }
                },
                "description": "Request body as an object",
                "required": [
                  "code",
                  "type"
                ]
              }
            }
          },
          "description": "Request body",
          "required": true
        },
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/card/series/' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic YTYyZTZm' \\\n--header 'Cookie: _cfuvid=Y0f3VfLqD8GzrSkhY4oAJF2sdcs4f0RvoHYzuwlgCKM-1751618877635-0.0.1.1-604800000' \\\n--data '{\n  \"code\":\"TestCardSeries123\",\n  \"name\":\"TestCardSeries123\",\n  \"type\":\"DIGITAL\",\n  \"expiryDays\":1000,\n  \"maxActiveCardsPerCustomer\":1,\n  \"cardGenerationConfiguration\":{\n    \"prefix\":\"M2\",\n    \"suffix\":\"C0\",\n    \"offset\":1,\n    \"length\":10,\n    \"method\": \"RANDOM_MOD7\"\n  },\n  \"cardGenerationEnabled\":true,\n  \"isActive\":true,\n  \"trigger\":\"SERIES_ID\"\n}'",
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
  }
}
```