> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Customer

Lets you register customers in the org’s loyalty program or just register their identifiers across sources such as InStore, Facebook,Webengage, WeChat, Martjack, TMall, Taobao, JD, ecommerce, Line, Website, and Mobile app. You can also add customer-level extended and custom field details.

You can also issue loyalty card to the customer using this API.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# Example Request

```json
curl --location 'https://eu.api.capillarytech.com/v2/customers' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic bmVlcmFqLmRTcwNmM0YzM0YTE2ODkxZjg0ZTdi' \
--header 'Cookie: _cfuvid=jJD8ai0qoDkyBs88swzPhdWr7Zrog49xTlDBOl11Kmg-1765536308629-0.0.1.1-604800000' \
--data-raw '{
    "associatedWith": "sant.p_123",
    "profiles": [
        {
            "firstName": "NeerajDec12",
            "lastName": "Loyal",
            "identifiers": [
                {
                    "type": "mobile",
                    "value": "9986000555"
                },
                {
                    "type": "email",
                    "value": "testdec12@gmail.com"
                },
                {
                    "type": "externalId",
                    "value": "test1223322"
                }
            ],
            "fields": {
                "employee": "loyal",
                "dateofbirth": "01/01/1996"
            },
            "source": "INSTORE"
             
        }
    ],
    "extendedFields": {
        "gender": "Male",
        "city": "Sattari",
        "state": "GOA",
        "area": "House no 2051,opposite  Sesa Goa  Colony,",
        "zip": "403505"
    },
    "referralCode": "xyzwqw"
}'
```
```curl registering a non-loyal customer
curl -L 'https://eu.api.capillarytech.com/v2/customers' \
-H 'Content-Type: application/json' \
-H 'Authorization: Basic aJiOGQwMGM2ZmY5ZWMxNGEyYjE2YWNiYTg2MzA=' \
--data-raw '{
    "extendedFields": {
        "age": 50,
       "age_range_one": "test"
    },
    "profiles":
    [
        {
            "firstName":"testSubjectFname1",
            "lastName": "testSubjectLname1",
            "fields":
            {
                "gender": "Male",
                "city": "Banglore"
            },
            "identifiers": [
                {
                    "type": "email",
                    "value": "975419001712@mail.com"
                },
                {
                    "type": "mobile",
                    "value": "975419001811"
                },
                {
                    "type": "externalId",
                    "value": "ex-97541900171"
                }
            ],
            "commChannels": [
                {
                    "type": "email",
                    "value": "9754190017@mail.com",
                    "primary": "true",
                    "verified": "true",
                    "meta":
                    {
                        "residence": true
                    }
                }
            ],
             "source": "INSTORE"
        }
    ],
    "loyaltyInfo":
    {
        "loyaltyType": "non_loyalty"
    }
}'
```

# API Behavior

* Updates existing customer details other than primary/secondary identifiers including custom fields and extended fields.
* Secondary identifiers only with null values will be updated. Hence, existing identifiers cannot be updated with this API.
* Automatically trims leading and trailing whitespace from `firstName` and `lastName` values.

> 📘 **Notes**
>
> You can update secondary identifiers (mobile no./email id./external id) only if the respective config mentioned in the following are enabled on InTouch **Settings** > **Miscellaneous** > **Registration Configuration**.
>
> * CONF\_ALLOW\_MOBILE\_UPDATE (for mobile number).
> * CONF\_ALLOW\_EMAIL\_UPDATE (for email id).
> * CONF\_LOYALTY\_ALLOW\_EXTERNAL\_ID\_UPDATE (for external id).

## Extended field empty and null value validation

By default, the V2 Customer Add API rejects empty or null values in extended fields. This is controlled by the `CONF_REJECT_EMPTY_OR_NULL_EF_VALUES` configuration.

### Strict validation (default)

When `CONF_REJECT_EMPTY_OR_NULL_EF_VALUES` is set to `true` (default), the API rejects:

* Null values in extended fields (`null`, `NULL` `"NULL"`,`"null"` etc.
* Empty strings (`""`)

The API won't store these fields in the customer profile and will omit them from the response.

To allow empty or null values in extended fields, set `CONF_REJECT_EMPTY_OR_NULL_EF_VALUES` to `false`. Contact Capillary Product support to modify this configuration.

When set to `false`, the API will accept all extended field values (including empty strings and null values) and process them according to standard extended field validation rules.

### Use cases

**Strict validation** is recommended for:

* Ensuring data quality and completeness
* Preventing accidental empty value submissions
* Maintaining consistent customer profiles

**Permissive mode** is useful for:

* Data migrations where extended fields may be legitimately empty
* Integrations with systems that don't enforce required field validation
* Flexible data collection workflows where extended fields are optional

# Header information

You can define certain attributes in the API header section and define the <Anchor target="_blank" href="https://docs.capillarytech.com/reference/add-customer#/adding-user-context-details">user context details</Anchor>.

| Header name     | Description                                                                                                                                                                                                                                                                                                               |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SKIP-DOWNSTREAM | If set to true, the API request adds the customer record directly without notifying downstream systems such as the Loyalty Engine (EMF) or event notification services, and no side effects will be generated. This allows the API to behave like a data import, where no loyalty actions or event triggers are executed. |

# Body Parameters

| Parameter                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mobile/email/external\_id/id\* | Pass any one of the following identifiers of the customer whose details you want to update. <br /><br />**Note:** For external\_id, the value must match the prefix and length configured in Org Settings > Registration. The API strictly enforces these rules. Only external IDs that meet the configured prefix (for example, LM\*) and length (for example, 10 digits) are accepted. If the external ID does not match the required format, the request will be rejected. This ensures consistency across import and API workflows. |
| firstname                      | First name of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| lastname                       | Last name of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| registered\_on                 | Date on which the customer is registered. Format: `YYYY-MM-DD HH:MM:SS`, <br />Example: 2016-09-11 11:11:11                                                                                                                                                                                                                                                                                                                                                                                                                             |
| registered\_till               | The TILL at which customer is registered.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| associated\_with               | Till code that you want to associate with the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| type                           | Pass `LOYALTY` to convert a non\_loyalty customer to loyalty. You cannot change a loyalty customer non-loyalty (NON\_LOYALTY).                                                                                                                                                                                                                                                                                                                                                                                                          |
| custom\_fields                 | Provide the custom field values of the customer in name and value pairs. You can only pass custom fields that are configured for the org. For information on custom fields refer to [Custom Fields Documentation](https://docs.capillarytech.com/docs/data-fields#custom-fields).                                                                                                                                                                                                                                                       |
| extended\_fields               | Provide the extended field details of the customer in name and value pairs. You can only pass extended fields that are configured for the org. **Note:** By default, empty or null values are rejected. For more information, see [Extended field empty and null value validation](#extended-field-empty-and-null-value-validation).                                                                                                                                                                                                    |
| subscriptions                  | Provide the subscription details of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| priority                       | Type of message. Value: `TRANS` for personalized or transaction messages, `BULK` for promotional messages.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| channel                        | Current communication channel. Value: `sms<code>, </code>email`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| fraud\_status                  | Update the fraud status of the customer in `status`. Values: `CONFIRMED`, `NONE`.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

Parameter marked with \* is mandatory.

# Response Parameters

| Parameter            | Description                                                                                                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user\_id             | Unique ID of the customer generated by the system.                                                                                                                                                                         |
| total                | Number of customers passed for registration.                                                                                                                                                                               |
| success\_count       | Number of customers that registered successfully.                                                                                                                                                                          |
| lifetime\_points     | Total loyalty points earned by the customer to date.                                                                                                                                                                       |
| lifetime\_purchases  | Total purchases amount (loyalty or non-loyalty transactions) of the customer across all stores of the org.                                                                                                                 |
| loyalty\_points      | Current active loyalty points (neither redeemed nor expired) of the customers.                                                                                                                                             |
| current\_slab        | Current loyalty tier of the customer.                                                                                                                                                                                      |
| tier\_expiry\_date   | Expiry date of the current tier in `YYYY-MM-DD HH:MM:SS` format.                                                                                                                                                           |
| points\_summaries    | Shows the details of the loyalty points.                                                                                                                                                                                   |
| programId            | Unique ID of the loyalty program associated to the points summary.                                                                                                                                                         |
| redeemed             | In total points earned from the program, the total number of points that are redeemed.                                                                                                                                     |
| expired              | In total points earned from the program, the total number of points that are expired.                                                                                                                                      |
| returned             | In total points earned from the program, the total number of points that are returned. Usually, for transaction returns.                                                                                                   |
| adjusted             | Points that are either credited to or debited from the customer account in adjustments. The value will be negative if  debited points are more than credited, and positive if credited points are more than debited.       |
| cumulativePurchases  | Total purchases amount of the customer in the stores associated to the current loyalty program.                                                                                                                            |
| currentSlab          | Current tier of the customer in the loyalty program.                                                                                                                                                                       |
| nextSlab             | Next loyalty tier of the customer.                                                                                                                                                                                         |
| nextSlabSerialNumber | Serial number of the next tier. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                                            |
| nextSlabDescription  | Description of the next tier as saved in the loyalty program.                                                                                                                                                              |
| slabSNo              | Serial number of the current tier of the customer. Lowest tier will have 1, succeeding tier will have 2 and so on.                                                                                                         |
| slabExpiryDate       | Expiry date of the current loyalty tier of the customer in `YYYY-MM-DD HH:MM:SS`.                                                                                                                                          |
| registered\_on       | Date on which the customer is enrolled in the org's loyalty.                                                                                                                                                               |
| updated\_on          | Recent date on which the customer details are updated.                                                                                                                                                                     |
| type                 | Loyalty type of the customer. `LOYALTY` if the customer is enrolled in the org's loyalty program, `NON_LOYALTY` if customer has not enrolled in the loyalty program but registered mobile number or email id with the org. |
| custom\_fields       | Custom field details of the customer - custom field name (`name<code>) and custom field value (</code>value`).                                                                                                             |
| extended\_fields     | Extended field details of the customer - extended field name (`name`) and extended field value (`value`).                                                                                                                  |
| subscriptions        | Mobile number and email ID subscription details of the customer.                                                                                                                                                           |
| channel              | Subscription channel. Value: `SMS`, `EMAIL`.                                                                                                                                                                               |
| priority             | Type of subscription. Value: `TRANS<code> for transaction or personalized messages, </code>BULK` for campaign or promotion messages.                                                                                       |
| status               | `0` for unsubscribed, `1` for subscribed.                                                                                                                                                                                  |
| side\_effects        | Other activities triggered because of the customer update. For example, points rewarded to the customer for updating profile (if configured).                                                                              |

## API specific Error Code

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error code
      </th>

      <th>
        Description
      </th>

      <th>
        Reason
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        500
      </td>

      <td>
        All requests have failed due to errors
      </td>

      <td>
        - Invalid inputs passed.<br />- Tried to update secondary identifier
      </td>
    </tr>

    <tr>
      <td>
        8014
      </td>

      <td>
        Mobile number validation failed
      </td>

      <td>
        The organization's 'Base Country' is not set, or the country configuration is missing required mobile number validation details (mobile\_country\_code, mobile\_regex, or mobile\_length\_csv).
      </td>
    </tr>

    <tr>
      <td>
        1006
      </td>

      <td>
        Mobile number validation failed
      </td>

      <td>
        The organization's 'Base Country' is not set, or the country configuration is missing required mobile number validation details (mobile\_country\_code, mobile\_regex, or mobile\_length\_csv).
      </td>
    </tr>

    <tr>
      <td>
        8020
      </td>

      <td>
        External ID validation failed
      </td>

      <td>
        The external ID does not match the required prefix or length as configured in Org Settings > Registration.
      </td>
    </tr>
  </tbody>
</Table>

<br />

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
    "/customers": {
      "post": {
        "summary": "Add Customer",
        "description": "Lets you register customers in the org’s loyalty program or just register their identifiers across sources such as InStore, Facebook,Webengage, WeChat, Martjack, TMall, Taobao, JD, ecommerce, Line, Website, and Mobile app. You can also add customer-level extended and custom field details.\n\nYou can also issue loyalty card to the customer using this API.",
        "operationId": "add_customer",
        "parameters": [
          {
            "name": "rawSideEffects",
            "in": "query",
            "description": "Pass true to get complete details of incentives such as awardOn, expiryDate, strategyIds and so on. See rawSideEffects in response for more details.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "X-CAP-API-OAUTH-TOKEN",
            "in": "header",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "WAIT_FOR_DOWNSTREAM",
            "in": "header",
            "description": "Pass `true` to wait for the loyalty activities to complete and then respond to the client with side effects in the API response; pass `false` to run Loyalty activities in the background. No side effects are returned in the API response.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "X-CAP-DIRECT-REPLAY",
            "in": "header",
            "description": "Pass true to add the customer but enable loyalty events to be executed at a later point of time. The events will be pushed to queue and will be executed in near real-time.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "mlp_single_enroll",
            "in": "query",
            "description": "Pass true to enroll a customer in all the loyalty programs available for the org. Pass false to enroll in a specific program or the default program of the till.",
            "schema": {
              "type": "boolean",
              "default": false
            }
          },
          {
            "name": "source",
            "in": "query",
            "description": "Source in which the customer needs to be added.",
            "schema": {
              "type": "string",
              "enum": [
                "INSTORE",
                "FACEBOOK",
                "WEB_ENGAGE",
                "WECHAT",
                "MARTJACK",
                "TMALL",
                "TAOBAO",
                "JD",
                "ECOMMERCE",
                "WEBSITE"
              ]
            }
          },
          {
            "name": "accountId",
            "in": "query",
            "description": "Specific account ID of the source. Required for sources with multiple accounts.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "USER-CONTEXT-ENTITY-TYPE",
            "in": "header",
            "description": "If required, add entity information of the user who is adding or updating this info.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "USER-CONTEXT-ENTITY-ID",
            "in": "header",
            "description": "Enter user ID",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "USER-CONTEXT-ENTITY-SOURCE",
            "in": "header",
            "description": "Enter user source.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "USER-CONTEXT-ENTITY-SOURCE-ID",
            "in": "header",
            "description": "Enter user source ID.",
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
                "properties": {
                  "RAW_BODY": {
                    "type": "string",
                    "format": "json"
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
                    "value": "{\n    \"createdId\": 130713699,\n    \"warnings\": [],\n    \"sideEffects\": [\n        {\n            \"awardedPoints\": 100,\n            \"type\": \"points\"\n        },\n        {\n            \"id\": 263244517,\n            \"couponType\": \"PE\",\n            \"couponCode\": \"HL1FALGQ\",\n            \"validTill\": \"2120-02-11T23:59:59Z\",\n            \"description\": \"Test Offer 20\",\n            \"discountCode\": \"NO_VALUE\",\n            \"trimmedCouponCode\": \"HL1FALGQ\",\n            \"type\": \"coupon\"\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "createdId": {
                      "type": "integer",
                      "example": 130713699,
                      "default": 0
                    },
                    "warnings": {
                      "type": "array"
                    },
                    "sideEffects": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "awardedPoints": {
                            "type": "integer",
                            "example": 100,
                            "default": 0
                          },
                          "type": {
                            "type": "string",
                            "example": "points"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"createdId\": 342963216,\n    \"warnings\": [\n        {\n            \"status\": false,\n            \"code\": 8050,\n            \"message\": \"Same Customer found in other sources,Combining\"\n        }\n    ],\n    \"sideEffects\": [\n        {\n            \"awardedPoints\": 100,\n            \"type\": \"points\"\n        },\n        {\n            \"id\": 263244517,\n            \"couponType\": \"PE\",\n            \"couponCode\": \"HL1FALGQ\",\n            \"validTill\": \"2120-02-11T23:59:59Z\",\n            \"description\": \"Test Offer 20\",\n            \"discountCode\": \"NO_VALUE\",\n            \"trimmedCouponCode\": \"HL1FALGQ\",\n            \"type\": \"coupon\"\n        }\n    ]\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "createdId": {
                      "type": "integer",
                      "example": 342963216,
                      "default": 0
                    },
                    "warnings": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "boolean",
                            "example": false,
                            "default": true
                          },
                          "code": {
                            "type": "integer",
                            "example": 8050,
                            "default": 0
                          },
                          "message": {
                            "type": "string",
                            "example": "Same Customer found in other sources,Combining"
                          }
                        }
                      }
                    },
                    "sideEffects": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "awardedPoints": {
                            "type": "integer",
                            "example": 100,
                            "default": 0
                          },
                          "type": {
                            "type": "string",
                            "example": "points"
                          }
                        }
                      }
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
              "language": "curl",
              "code": "{\n    \"profiles\": [\n        {\n            \"firstName\": \"Customer_add_1\",\n            \"lastName\": \"Test123\",\n            \"identifiers\": [\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"919988221100\"\n                },\n                {\n                    \"type\": \"email\",\n                    \"value\": \"tom.sawyer@capillarytech.com\"\n                }\n            ],\n            \"commChannels\": [\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"919988221100\",\n                    \"primary\": \"true\",\n                    \"verified\": \"true\",\n                    \"meta\": {\n                        \"residence\": \"true\"\n                    }\n                },\n                {\n                    \"type\": \"email\",\n                    \"value\": \"tom.sawyer@capillarytech.com\",\n                    \"primary\": \"true\",\n                    \"verified\": \"true\",\n                    \"meta\": {\n                        \"residence\": \"true\"\n                    }\n                }\n            ],\n            \"fields\": {},\n            \"source\": \"INSTORE\"\n        }\n    ],\n    \"extendedFields\": {},\n    \"referralCode\": \"\"\n}",
              "name": "Source Instore"
            },
            {
              "language": "curl",
              "code": "{\n  \"loyaltyInfo\": {\n    \"loyaltyType\": \"loyalty\"\n  },\n  \"associatedWith\": \"bukl.till\",\n  \"profiles\": [\n    {\n      \"firstName\": \"Mark12\",\n      \"lastName\": \"Twain\",\n      \"identifiers\": [\n        {\n          \"type\": \"mobile\",\n          \"value\": \"919988221100\"\n        },\n        {\n          \"type\": \"cuid\",\n          \"value\": \"cuid_919804542631\"\n        },\n        {\n          \"type\": \"unionId\",\n          \"value\": \"unionId_919804542631\"\n        }\n      ],\n      \"commChannels\": [\n        {\n          \"type\": \"mobilePush\",\n          \"meta\": {\n            \"lastViewedDate\": \"2019-10-10T22:04:38+05:30\",\n            \"residence\": false,\n            \"office\": false\n          },\n          \"verified\": \"true\",\n          \"primary\": \"true\",\n          \"value\": \"abc123456\"\n        },\n        {\n          \"type\": \"mobile\",\n          \"value\": \"919988221100\",\n          \"primary\": true,\n          \"verified\": true,\n          \"meta\": {\n            \"lastViewedDate\": \"\",\n            \"residence\": true,\n            \"office\": false\n          }\n        }\n      ],\n      \"source\": \"MOBILE_APP\",\n      \"accountId\":\"testmobilepush1\",\n      \"fields\": {\n        \"employee\": \"true\",\n        \"dateofbirth\": \"22-10-2000\"\n      }\n    }\n  ],\n  \"extendedFields\": {\n    \"gender\": \"Male\",\n    \"city\": \"Bangalore\"\n  }\n}",
              "name": "Source Mobile_App"
            },
            {
              "code": "{\n    \"profiles\": [\n        {\n            \"firstName\": \"Mark\",\n            \"lastName\": \"Twain\",\n            \"identifiers\": [\n                {\n                    \"type\": \"email\",\n                    \"value\": \"tom.sawyer@capillarytech.com\"\n                },\n                {\n                    \"type\": \"line\",\n                    \"value\": \"Ud7b7ec422d4914011f9c14b51ff48519\"\n                }\n            ],\n            \"commChannels\": [\n                {\n                    \"type\": \"line\",\n                    \"value\": \"Ud7b7ec422dd34914011f9c14b51ff48519\",\n                    \"primary\": \"true\",\n                    \"verified\": \"true\",\n                    \"meta\": {\n                        \"residence\": \"true\"\n                    }\n                }\n            ],\n            \"fields\": {\n                \"gender\": \"\",\n                \"city\": \"\"\n            },\n            \"source\": \"LINE\",\n            \"accountId\": \"2001914141242\"\n        }\n    ],\n    \"extendedFields\": {},\n    \"referralCode\": \"\"\n}",
              "language": "shell",
              "name": "source: line"
            },
            {
              "code": "{\n    \"profiles\": [\n        {\n            \"firstName\": \"Tom\",\n            \"lastName\": \"Sawyer\",\n            \"identifiers\": [\n                {\n                    \"type\": \"email\",\n                    \"value\": \"tom.sawyer@capillarytech.com\"\n                },\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"4567890\"\n                },\n                {\n                    \"type\": \"cardnumber\",\n                    \"value\": \"12345678\",\n                    \"seriesId\": 73,\n                    \"statusLabel\": \"ACTIVE\",\n                    \"extendedFields\": {\n                        \"custom_card_name\": \"Mystays\"\n                    }\n                }\n            ],\n            \"fields\": {\n                \"kanjifirstname\": \"Tom\",\n                \"kanjilastname\": \"Sawyer\",\n                \"email2\": \"tom.sawyer@capillarytech.com\",\n                \"mobile2\": \"919988221100\",\n                \"fax\": \"12345678\",\n                \"customer_address\": \"abc123\"\n            },\n            \"source\": \"INSTORE\",\n            \"commChannels\": [\n                {\n                    \"type\": \"email\",\n                    \"value\": \"tom.sawyer@capillarytech.com\",\n                    \"primary\": true,\n                    \"verified\": true,\n                    \"subscribed\": true,\n                    \"meta\": {}\n                }\n            ]\n        }\n    ],\n    \"extendedFields\": {\n        \"zip\": \"123456\",\n        \"area\": \"Test1\",\n        \"city\": \"Test2\",\n        \"state\": \"Test3\",\n        \"country_of_residence\": \"Japan\",\n        \"gender\": \"Male\",\n        \"dob\": \"1988/05/10\",\n        \"acquisition_channel\": \"Microsite\",\n        \"preferred_language\": \"Japanese\"\n    }\n}",
              "language": "shell",
              "name": "with card information"
            },
            {
              "code": "{\n    \"profiles\": [\n        {\n            \"firstName\": \"Customer_add_23\",\n            \"lastName\": \"Test123\",\n             \"identifiers\": [\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"919988221100\"\n                },\n                {\n                    \"type\": \"email\",\n                    \"value\": \"tom.sawyer@capillarytech.com\"\n                },\n                {\n                    \"type\": \"cardnumber\",\n                    \"value\": \"12345678\",\n                    \"seriesId\": 73,\n                    \"statusLabel\": \"ACTIVE\",\n                    \"extendedFields\": {\n                        \"custom_card_name\": \"Mystays\"\n                    }\n                }\n            ],\n            \"commChannels\": [\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"8795772141\",\n                    \"primary\": \"true\",\n                    \"verified\": \"true\",\n                    \"meta\": {\n                        \"residence\": \"true\"\n                    }\n                },\n                {\n                    \"type\": \"email\",\n                    \"value\": \"tom.sawyer@capillarytech.com\",\n                    \"primary\": \"true\",\n                    \"verified\": \"true\",\n                    \"meta\": {\n                        \"residence\": \"true\"\n                    }\n                }\n            ],\n            \"fields\": {\n                \n                \"employee\": \"true\",\n        \"dateofbirth\": \"22-10-2000\"\n            },\n            \"source\": \"INSTORE\"\n        }\n    ],\n    \"extendedFields\": {\n        \"acquisition_channel\": \"Facebook\"\n        \n    },     \n    \n    \"referralCode\": \"\",\n    \"statusLabel\":\"active-1\"\n}",
              "language": "shell",
              "name": "with customer status"
            },
            {
              "code": "{\n    \"profiles\": [\n        {\n            \"identifiers\": [\n                {\n                    \"type\": \"externalId\",\n                    \"value\": \"879577211225\"\n                }\n            ],\n            \"source\": \"INSTORE\"\n        }\n    ]\n}",
              "language": "shell",
              "name": "with external id"
            },
            {
              "code": "curl -L 'https://eu.api.capillarytech.com/v2/customers' \\\n-H 'Accept: application/json' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: Basic lY2I2MmEy' \\\n--data-raw '{\n    \"profiles\": [\n        {\n            \"firstName\": \"Jordan\",\n            \"lastName\": \"Rivers\",\n            \"identifiers\": [\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"91827364502\"\n                },\n                {\n                    \"type\": \"email\",\n                    \"value\": \"jordan.rivers@testmail.org\"\n                }\n            ],\n            \"commChannels\": [\n                {\n                    \"type\": \"email\",\n                    \"value\": \"jordan.rivers@testmail.org\",\n                    \"primary\": true,\n                    \"verified\": true,\n                    \"meta\": {\n                        \"residence\": true\n                    }\n                },\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"91827364502\",\n                    \"primary\": true,\n                    \"verified\": true\n                }\n            ],\n            \"source\": \"INSTORE\",\n            \"fields\": {\n                \"business_phone\": \"8877665544\",\n                \"home_phone\": \"2233445566\",\n                \"middle_name\": \"Lee\",\n                \"sms_optin\": 1,\n                \"t&c\": 1,\n                \"clubone_optin\": 1\n            }\n        }\n    ],\n    \"extendedFields\": {\n        \"dob_date\": \"1992-05-15\",\n        \"dob\": \"1992-05-15 10:00:00\",\n        \"city\": \"Manchester\",\n        \"state\": \"Greater Manchester\",\n        \"marital_status\": \"Married\",\n        \"zip\": \"M1 1AD\",\n        \"gender\": \"Male\"\n    },\n    \"subscriptionInfo\": {\n        \"subscriptions\": [\n            {\n                \"channel\": \"SMS\",\n                \"accountId\": \"\",\n                \"priority\": \"BULK\",\n                \"type\": \"OPTIN\",\n                \"sourceName\": \"INSTORE\"\n            },\n            {\n                \"channel\": \"EMAIL\",\n                \"accountId\": \"\",\n                \"priority\": \"BULK\",\n                \"type\": \"OPTIN\",\n                \"sourceName\": \"INSTORE\"\n            }\n        ]\n    }\n}'",
              "language": "shell",
              "name": "with subscription status"
            },
            {
              "code": "curl -L 'https://eu.api.capillarytech.com/v2/customers' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: Basic aJiOGQwMGM2ZmY5ZWMxNGEyYjE2YWNiYTg2MzA=' \\\n--data-raw '{\n    \"extendedFields\": {\n        \"age\": 50,\n       \"age_range_one\": \"test\"\n    },\n    \"profiles\":\n    [\n        {\n            \"firstName\":\"testSubjectFname1\",\n            \"lastName\": \"testSubjectLname1\",\n            \"fields\":\n            {\n                \"gender\": \"Male\",\n                \"city\": \"Banglore\"\n            },\n            \"identifiers\": [\n                {\n                    \"type\": \"email\",\n                    \"value\": \"975419001712@mail.com\"\n                },\n                {\n                    \"type\": \"mobile\",\n                    \"value\": \"975419001811\"\n                },\n                {\n                    \"type\": \"externalId\",\n                    \"value\": \"ex-97541900171\"\n                }\n            ],\n            \"commChannels\": [\n                {\n                    \"type\": \"email\",\n                    \"value\": \"9754190017@mail.com\",\n                    \"primary\": \"true\",\n                    \"verified\": \"true\",\n                    \"meta\":\n                    {\n                        \"residence\": true\n                    }\n                }\n            ],\n             \"source\": \"INSTORE\"\n        }\n    ],\n    \"loyaltyInfo\":\n    {\n        \"loyaltyType\": \"non_loyalty\"\n    }\n}'",
              "language": "shell",
              "name": "register a non-loyal customer"
            }
          ],
          "samples-languages": [
            "curl",
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