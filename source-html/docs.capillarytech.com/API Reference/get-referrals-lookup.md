> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Referrals (Lookup)

Retrieves the referee details of a customer (referral).

## Using Multiple Identifiers

When [dual eligibility](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility) is enabled in your organisation, the API allows you to send multiple identifiers while fetching details. The system automatically identifies which one is the primary identifier and retrieves the details accordingly. This removes the need for you to know or specify only the primary identifier. This is beneficial in a dual eligibility–enabled scenario, as the feature allows you to register multiple users with the same secondary identifiers.
When you submit multiple identifiers in a lookup request:

* The service checks that dual eligibility is active.
* It parses all submitted identifiers, for example `email`,`mobile`,`externalId`
* It determines which identifier is configured as the primary key.
* If one of the provided values matches the primary key, the API uses it for the lookup.
* The API returns the single customer profile associated with the primary identifier.

You can enter multiple identifiers as comma-separated values using the `identifierName` and `identifierValue` query parameters. Ensure the order of the `identifierName` matches the `identifierValue`.

### Endpoint example with multiple identifiers

```json Endpoint Example
https://eu.api.capillarytech.com/v2/customers/lookup/referrals?source=INSTORE&identifierName=email,mobile&identifierValue=DualEligibility@capillarytech1.com,915795008395
```

Here,

* `DualEligibility@capillarytech1.com` is the email
* `915795008395` is the mobile number

**Note:** If you provide only one identifier that is not the primary identifier, the system will return an error, `8015 - Customer not found for given identifiers`.

## Example request

```json Sample request Get referrals lookup
curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/referrals?source=INSTORE&identifierName=mobile&identifierValue=919777785205&campaignToken=SL7UN' \
--header 'accept: application/json' \
--header 'Authorization: Basic ='
```

# Resource Information

| URI                | v2/customers/lookup/referrals |
| :----------------- | :---------------------------- |
| HTTP method        | GET                           |
| Authentication     | Basic                         |
| Pagination support | Yes                           |
| Batch support      | NA                            |

# Query Parameter

| Parameter         | Type   | Required | Description                                              |
| :---------------- | :----- | :------- | :------------------------------------------------------- |
| `source`          | string | Yes      | Source system where the referral originated              |
| `identifierName`  | string | Yes      | Type of identifier used for lookup                       |
| `identifierValue` | string | Yes      | Value of the identifier to lookup                        |
| `campaignToken`   | string | Yes      | Unique token identifying the referral campaign           |
| `limit`           | int    | No       | Maximum records returned per page. Default value: 10     |
| `offset`          | int    | No       | Number of records skipped (zero-based). Default value: 0 |

# Example response

```json Sample response Get referrals lookup
{
    "pagination": {
        "limit": 10,
        "offset": 0,
        "total": 0
    },
    "data": [
        {
            "customer": {
                "id": 564955301,
                "profiles": [
                    {
                        "firstName": "testgrp3",
                        "lastName": "testgrpv2",
                        "fields": {},
                        "allFields": {},
                        "identifiers": [
                            {
                                "type": "externalId",
                                "value": "434547"
                            },
                            {
                                "type": "email",
                                "value": "testgrp3@gmail.com"
                            },
                            {
                                "type": "mobile",
                                "value": "919777785205"
                            }
                        ],
                        "commChannels": [],
                        "userId": 564955301,
                        "accountId": "",
                        "autoUpdateTime": "2025-09-08T11:32:27Z",
                        "identifiersAll": [
                            {
                                "type": "externalId",
                                "value": "434547"
                            },
                            {
                                "type": "email",
                                "value": "testgrp3@gmail.com"
                            },
                            {
                                "type": "mobile",
                                "value": "919777785205"
                            }
                        ]
                    }
                ]
            },
            "referralCode": "testgrp3rp5ZKo",
            "invitees": [],
            "referee": [],
            "incentives": []
        }
    ],
    "warnings": [],
    "errors": []
}
```

# Response Parameter

| Parameter                                                                                                                     | Type    | Description                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------ |
| .pagination                                                                                                                   | object  | Object containing the pagination details                                                                                  |
| ..limit                                                                                                                       | integer | Maximum number of records to return                                                                                       |
| ..offset                                                                                                                      | integer | Starting index for returning the records                                                                                  |
| ..total                                                                                                                       | integer | Total records matching the query                                                                                          |
| .data                                                                                                                         | array   | Array containing referral information                                                                                     |
| ..customer                                                                                                                    | object  | Customer details                                                                                                          |
| ...id                                                                                                                         | long    | Unique customer ID                                                                                                        |
| ...profiles                                                                                                                   | array   | Array containing the customer details                                                                                     |
| ....firstName                                                                                                                 | string  | Customer's first name                                                                                                     |
| ....lastName                                                                                                                  | string  | Customer's last name                                                                                                      |
| ....fields                                                                                                                    | object  | Custom fields (key-value pairs)                                                                                           |
| .....allFields                                                                                                                | object  | All available fields (including system fields)                                                                            |
| ....identifiers                                                                                                               | array   | Array containing information on the identifiers associated with the specific source for the customer(e.g., email, mobile) |
| .....type                                                                                                                     | string  | Identifier type (e.g., `"externalId"`, `"email"`, `"mobile"`)                                                             |
| .....value                                                                                                                    | string  | Identifier value (e.g., email address, phone number)                                                                      |
| ....commChannels                                                                                                              | array   | Communication channels (e.g., email, SMS)                                                                                 |
| ....userId                                                                                                                    | long    | Unique user ID (matches customer.id)                                                                                      |
| ....accountId                                                                                                                 | string  | Account ID (for multi-account systems)                                                                                    |
| ....autoUpdateTime                                                                                                            | string  | Timestamp of last profile update (ISO 8601) YY-MM-DD-HH-MM-SS                                                             |
| ....identifiersAll                                                                                                            | array   | Array containing information on all the identifiers known for the customer across sources                                 |
| .....type                                                                                                                     | string  | Identifier type (e.g., `"externalId"`, `"email"`, `"mobile"`)                                                             |
| .....value                                                                                                                    | string  | Identifier value (e.g., email address, phone number)                                                                      |
| ..referralCode                                                                                                                | string  | unique code assigned to the referrer customer, to be shared with referees; used to attribute the referral and rewards.    |
| ..<Anchor label="invitees" target="_blank" href="https://docs.capillarytech.com/reference/refer-customer#/">invitees</Anchor> | array   | Customers invited by this customer                                                                                        |
| ..<Anchor label="referee" target="_blank" href="https://docs.capillarytech.com/reference/refer-customer#/">referee</Anchor>   | array   | List of referee details                                                                                                   |
| ..incentives                                                                                                                  | array   | Incentives earned via referrals                                                                                           |
| .warnings                                                                                                                     | array   | Array containing warnings, if any.                                                                                        |
| .errors                                                                                                                       | array   | Array containing errors, if any.                                                                                          |

# Error Code

| Error Code | Description                                  | Reason                                                                                                                                      |
| :--------- | :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| 8015       | Customer not found for the given identifiers | The identifier provided is incorrect. Also occurs when a customer does not exist and when a lookup uses a valid but non-primary identifier. |
| 8003       | Invalid source                               | Unsupported source passed                                                                                                                   |
| 8013       | Lookup,Invalid identifier passed             | Unsupported identifier value passed                                                                                                         |
| 1222       | Internal error with the referral system      | `campaigntoken` value is invalid                                                                                                            |

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
    "/customers/lookup/referrals": {
      "get": {
        "summary": "Get Referrals (Lookup)",
        "description": "Retrieves the referee details of a customer (referral).",
        "operationId": "get-referrals-lookup",
        "parameters": [
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the identifier is available.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "FACEBOOK",
                "WEB_ENGAGE",
                "WECHAT",
                "INSTORE",
                "MARTJACK",
                "TMALL",
                "TAOBAO",
                "JD",
                "ECOMMERCE",
                "WEBSITE",
                "LINE",
                "MOBILE_APP"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "Account ID for sources with multiple accounts.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "identifierName",
            "in": "query",
            "description": "Customer identifier to fetch referral details.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "mobile",
                "email",
                "externalId",
                "cardExternalId",
                "cardNumber"
              ]
            }
          },
          {
            "name": "identifierValue",
            "in": "query",
            "description": "Identifier value as per the specified identifierName.",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "campaignToken",
            "in": "query",
            "description": "Unique token generated for the referral campaign.",
            "required": true,
            "schema": {
              "type": "string"
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
                      "pagination": {
                        "limit": 10,
                        "offset": 0,
                        "total": 0
                      },
                      "data": [
                        {
                          "customer": {
                            "id": 564955301,
                            "profiles": [
                              {
                                "firstName": "testgrp3",
                                "lastName": "testgrpv2",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "434547"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp3@gmail.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919777785205"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564955301,
                                "accountId": "",
                                "autoUpdateTime": "2025-09-29T06:49:06Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "434547"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp3@gmail.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919777785205"
                                  }
                                ]
                              }
                            ]
                          },
                          "referralCode": "testgrp3rp5ZKo",
                          "invitees": [],
                          "referee": [],
                          "incentives": []
                        }
                      ],
                      "warnings": [],
                      "errors": []
                    }
                  },
                  "Sample response Get referrals lookup": {
                    "summary": "Sample response Get referrals lookup",
                    "value": {
                      "pagination": {
                        "limit": 10,
                        "offset": 0,
                        "total": 0
                      },
                      "data": [
                        {
                          "customer": {
                            "id": 564955301,
                            "profiles": [
                              {
                                "firstName": "testgrp3",
                                "lastName": "testgrpv2",
                                "fields": {},
                                "allFields": {},
                                "identifiers": [
                                  {
                                    "type": "externalId",
                                    "value": "434547"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp3@gmail.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919777785205"
                                  }
                                ],
                                "commChannels": [],
                                "userId": 564955301,
                                "accountId": "",
                                "autoUpdateTime": "2025-09-08T11:32:27Z",
                                "identifiersAll": [
                                  {
                                    "type": "externalId",
                                    "value": "434547"
                                  },
                                  {
                                    "type": "email",
                                    "value": "testgrp3@gmail.com"
                                  },
                                  {
                                    "type": "mobile",
                                    "value": "919777785205"
                                  }
                                ]
                              }
                            ]
                          },
                          "referralCode": "testgrp3rp5ZKo",
                          "invitees": [],
                          "referee": [],
                          "incentives": []
                        }
                      ],
                      "warnings": [],
                      "errors": []
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/customers/lookup/referrals?source=INSTORE&identifierName=mobile&identifierValue=919777785205&campaignToken=SL7UN' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic ='",
              "language": "shell",
              "name": "Sample request Get referrals lookup"
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