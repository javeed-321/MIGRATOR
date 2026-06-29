> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Store Reports

Returns report of a specific store containing details like sales of previous day, week and month; customers visited; points and coupons issued; points and coupons redeemed etc will be returned. The report also includes the summary of transaction amount, number of customers registered, points and coupons redeemed, transaction types and so on.

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "customer-v11",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v1.1",
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
    "/store/reports": {
      "get": {
        "summary": "Get Store Reports",
        "description": "Returns report of a specific store containing details like sales of previous day, week and month; customers visited; points and coupons issued; points and coupons redeemed etc will be returned. The report also includes the summary of transaction amount, number of customers registered, points and coupons redeemed, transaction types and so on.",
        "operationId": "get-store-reports",
        "parameters": [
          {
            "name": "type",
            "in": "query",
            "description": "Type of the report to return.",
            "schema": {
              "type": "string",
              "enum": [
                "loyalty"
              ]
            }
          },
          {
            "name": "start_date",
            "in": "query",
            "description": "Returns the report for the specified duration (between start_date and end_date). if start_date is passed, end_date should also be passed and vice versa.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Returns the store report for the specified duration of start_date and end_date. <br>If start_date is passed, end_date should also be passed and vice versa",
            "schema": {
              "type": "string",
              "format": "date"
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
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"report\": {\n            \"loyalty\": {\n                \"row\": [\n                    {\n                        \"start_date\": \"2016-10-18 00:00:00\", \n                        \"end_date\": \"2016-10-18 23:59:59\", \n                        \"customers\": \"0\", \n                        \"transactions\": \"10\", \n                        \"not_interested_transactions\": \"0\", \n                        \"points_issued\": \"210\", \n                        \"points_redeemed\": \"50\"\n                    }, \n                    {\n                        \"start_date\": \"2016-10-17 00:00:00\", \n                        \"end_date\": \"2016-10-17 23:59:59\", \n                        \"customers\": \"1\", \n                        \"transactions\": \"8\", \n                        \"not_interested_transactions\": \"0\", \n                        \"points_issued\": \"310\", \n                        \"points_redeemed\": \"80\"\n                    }, \n                    {\n                        \"start_date\": \"2016-10-16 00:00:00\", \n                        \"end_date\": \"2016-10-16 23:59:59\", \n                        \"customers\": \"10\", \n                        \"transactions\": \"7\", \n                        \"not_interested_transactions\": \"3\", \n                        \"points_issued\": \"500\", \n                        \"points_redeemed\": \"200\"\n                    }, \n                    {\n                        \"start_date\": \"2016-10-13 00:00:00\", \n                        \"end_date\": \"2016-10-18 23:59:59\", \n                        \"customers\": \"3\", \n                        \"transactions\": \"11\", \n                        \"not_interested_transactions\": \"2\", \n                        \"points_issued\": \"340\", \n                        \"points_redeemed\": \"90\"\n                    }, \n\n                ]\n            }, \n            \"redemption\": {\n                \"row\": [\n                    {\n                        \"store_username\": \"till.005\", \n                        \"customer\": {\n                            \"firstname\": \"Tom\", \n                            \"lastname\": \"Sawyer\", \n                            \"mobile\": \"44700900000\"\n                        }, \n                        \"transaction_number\": \"\", \n                        \"points_redeemed\": \"100\", \n                        \"redemption_date\": \"2013-10-18 10:24:02\"\n                    }, \n                    {\n                        \"store_username\": \"till.005\", \n                        \"customer\": {\n                            \"firstname\": \"John\", \n                            \"lastname\": \"Rita\", \n                            \"mobile\": \"44700900999\"\n                        }, \n                        \"transaction_number\": \"aaj-1\", \n                        \"points_redeemed\": \"100\", \n                        \"redemption_date\": \"2013-10-18 10:49:54\"\n                    }, \n                  ]\n            }\n        }\n    }\n}"
                  }
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
              "code": "http://us.api.capillarytech.com/v1.1/store/reports.json\n",
              "name": "Sample request"
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