> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Coupon series details

This API retrieves the details of a specific series of a campaign based on the series id passed. If no series id is passed, all coupon series details are retrieved.

# Resource information

|               |                     |
| :------------ | :------------------ |
| URI           | /v1.1/coupon/series |
| HTTP method   | Get                 |
| Pagination    | NA                  |
| Batch support | No                  |

<br />

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
    "/coupon/series": {
      "get": {
        "summary": "Get Coupon series details",
        "description": "",
        "operationId": "get-coupon-series-details-1",
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "Unique ID of the specific coupon series that you want to retrieve.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "expired",
            "in": "query",
            "description": "Retrieves the details of the expired coupon series if expired=true and active coupon series details if expired=false. To also include coupon configuration details, pass expired=extended.",
            "schema": {
              "type": "string",
              "enum": [
                "true",
                "false",
                "extended"
              ]
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
                    "value": "{\n  \"response\": {\n    \"status\": {\n      \"success\": \"true\",\n      \"code\": \"200\",\n      \"message\": \"Success\"\n    },\n    \"series\": {\n      \"items\": {\n        \"item\": {\n          \"id\": \"405\",\n          \"description\": \"API Coupon 3\",\n          \"series_type\": \"CAMPAIGN\",\n          \"client_handling_type\": \"DISC_CODE\",\n          \"discount_code\": \"XYZ123\",\n          \"valid_till_date\": \"2017-12-31\",\n          \"valid_days_from_create\": \"30\",\n          \"expiry_strategy_type\": \"DAYS\",\n          \"expiry_strategy_value\": \"30\",\n          \"max_create\": \"-1\",\n          \"max_redeem\": \"-1\",\n          \"transferrable\": \"0\",\n          \"any_user\": \"0\",\n          \"same_user_multiple_redeem\": \"0\",\n          \"allow_referral_existing_users\": \"0\",\n          \"multiple_use\": \"0\",\n          \"is_validation_required\": \"0\",\n          \"valid_with_discounted_item\": \"false\",\n          \"created_by\": \"4\",\n          \"created\": \"2016-12-09 08:35:15\",\n          \"last_used\": \"2016-12-09 08:35:15\",\n          \"series_code\": \"G8Z08NZL\",\n          \"disable_sms\": \"0\",\n          \"info\": \"API Coupon 3\",\n          \"allow_multiple_vouchers_per_user\": \"1\",\n          \"do_not_resend_existing_voucher\": \"0\",\n          \"mutual_exclusive_series_ids\": \"[-1]\",\n          \"store_ids_json\": \"[-1]\",\n          \"dvs_enabled\": \"0\",\n          \"dvs_expiry_date\": \"2017-01-09\",\n          \"priority\": \"0\",\n          \"short_sms_template\": \"Hello {{cust_name}}, your voucher code is {{voucher_code}}\",\n          \"max_vouchers_per_user\": \"-1\",\n          \"min_days_between_vouchers\": \"-1\",\n          \"max_referrals_per_referee\": \"-1\",\n          \"discount_on\": \"BILL\",\n          \"discount_type\": \"PERC\",\n          \"discount_value\": \"10\",\n          \"redemption_range\": \"{\\\"dom\\\":[\\\"-1\\\"],\\\"dow\\\":[\\\"-1\\\"],\\\"hours\\\":[\\\"-1\\\"]}\",\n          \"min_bill_amount\": \"0\",\n          \"max_bill_amount\": \"0\",\n          \"redeem_at_store\": \"[-1]\",\n          \"campaign_id\": \"458\",\n          \"max_redemptions_in_series_per_user\": \"-1\",\n          \"min_days_between_redemption\": \"-1\",\n          \"redemption_valid_from\": \"2014-04-30\",\n          \"source_org_id\": \"-1\",\n          \"issue_to_loyalty\": \"0\",\n          \"redeem_store_type\": \"redeemable_stores\",\n          \"old_flow_enabled\": \"0\",\n          \"pre_redeem_event_required\": \"0\",\n          \"coupons\": {\n            \"issued\": \"4558\",\n            \"redeemed\": \"924\"\n          },\n          \"offline_redemption_enabled\": \"true\",\n          \"item_status\": {\n            \"success\": \"true\",\n            \"code\": \"700\",\n            \"message\": \"Coupon series fetched successfully\"\n          },\n          \"valid_redemption_org_entities\":{\n              \"concepts\":null,\n\n              \"zones\":null,\n\n              \"stores\":null,\n\n              \"tills\":\"[12808452]\"\n          },\n          \"products\": \"\",\n          \"brands\": \"\",\n          \"categories\": \"\"\n        }\n      }\n    }\n  }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "object",
                          "properties": {
                            "success": {
                              "type": "string",
                              "example": "true"
                            },
                            "code": {
                              "type": "string",
                              "example": "200"
                            },
                            "message": {
                              "type": "string",
                              "example": "Success"
                            }
                          }
                        },
                        "series": {
                          "type": "object",
                          "properties": {
                            "items": {
                              "type": "object",
                              "properties": {
                                "item": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "string",
                                      "example": "405"
                                    },
                                    "description": {
                                      "type": "string",
                                      "example": "API Coupon 3"
                                    },
                                    "series_type": {
                                      "type": "string",
                                      "example": "CAMPAIGN"
                                    },
                                    "client_handling_type": {
                                      "type": "string",
                                      "example": "DISC_CODE"
                                    },
                                    "discount_code": {
                                      "type": "string",
                                      "example": "XYZ123"
                                    },
                                    "valid_till_date": {
                                      "type": "string",
                                      "example": "2017-12-31"
                                    },
                                    "valid_days_from_create": {
                                      "type": "string",
                                      "example": "30"
                                    },
                                    "expiry_strategy_type": {
                                      "type": "string",
                                      "example": "DAYS"
                                    },
                                    "expiry_strategy_value": {
                                      "type": "string",
                                      "example": "30"
                                    },
                                    "max_create": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "max_redeem": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "transferrable": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "any_user": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "same_user_multiple_redeem": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "allow_referral_existing_users": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "multiple_use": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "is_validation_required": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "valid_with_discounted_item": {
                                      "type": "string",
                                      "example": "false"
                                    },
                                    "created_by": {
                                      "type": "string",
                                      "example": "4"
                                    },
                                    "created": {
                                      "type": "string",
                                      "example": "2016-12-09 08:35:15"
                                    },
                                    "last_used": {
                                      "type": "string",
                                      "example": "2016-12-09 08:35:15"
                                    },
                                    "series_code": {
                                      "type": "string",
                                      "example": "G8Z08NZL"
                                    },
                                    "disable_sms": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "info": {
                                      "type": "string",
                                      "example": "API Coupon 3"
                                    },
                                    "allow_multiple_vouchers_per_user": {
                                      "type": "string",
                                      "example": "1"
                                    },
                                    "do_not_resend_existing_voucher": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "mutual_exclusive_series_ids": {
                                      "type": "string",
                                      "example": "[-1]"
                                    },
                                    "store_ids_json": {
                                      "type": "string",
                                      "example": "[-1]"
                                    },
                                    "dvs_enabled": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "dvs_expiry_date": {
                                      "type": "string",
                                      "example": "2017-01-09"
                                    },
                                    "priority": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "short_sms_template": {
                                      "type": "string",
                                      "example": "Hello {{cust_name}}, your voucher code is {{voucher_code}}"
                                    },
                                    "max_vouchers_per_user": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "min_days_between_vouchers": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "max_referrals_per_referee": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "discount_on": {
                                      "type": "string",
                                      "example": "BILL"
                                    },
                                    "discount_type": {
                                      "type": "string",
                                      "example": "PERC"
                                    },
                                    "discount_value": {
                                      "type": "string",
                                      "example": "10"
                                    },
                                    "redemption_range": {
                                      "type": "string",
                                      "example": "{\"dom\":[\"-1\"],\"dow\":[\"-1\"],\"hours\":[\"-1\"]}"
                                    },
                                    "min_bill_amount": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "max_bill_amount": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "redeem_at_store": {
                                      "type": "string",
                                      "example": "[-1]"
                                    },
                                    "campaign_id": {
                                      "type": "string",
                                      "example": "458"
                                    },
                                    "max_redemptions_in_series_per_user": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "min_days_between_redemption": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "redemption_valid_from": {
                                      "type": "string",
                                      "example": "2014-04-30"
                                    },
                                    "source_org_id": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "issue_to_loyalty": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "redeem_store_type": {
                                      "type": "string",
                                      "example": "redeemable_stores"
                                    },
                                    "old_flow_enabled": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "pre_redeem_event_required": {
                                      "type": "string",
                                      "example": "0"
                                    },
                                    "coupons": {
                                      "type": "object",
                                      "properties": {
                                        "issued": {
                                          "type": "string",
                                          "example": "4558"
                                        },
                                        "redeemed": {
                                          "type": "string",
                                          "example": "924"
                                        }
                                      }
                                    },
                                    "offline_redemption_enabled": {
                                      "type": "string",
                                      "example": "true"
                                    },
                                    "item_status": {
                                      "type": "object",
                                      "properties": {
                                        "success": {
                                          "type": "string",
                                          "example": "true"
                                        },
                                        "code": {
                                          "type": "string",
                                          "example": "700"
                                        },
                                        "message": {
                                          "type": "string",
                                          "example": "Coupon series fetched successfully"
                                        }
                                      }
                                    },
                                    "valid_redemption_org_entities": {
                                      "type": "object",
                                      "properties": {
                                        "concepts": {},
                                        "zones": {},
                                        "stores": {},
                                        "tills": {
                                          "type": "string",
                                          "example": "[12808452]"
                                        }
                                      }
                                    },
                                    "products": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "brands": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "categories": {
                                      "type": "string",
                                      "example": ""
                                    }
                                  }
                                }
                              }
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
              "code": "http://us.intouch.capillarytech.com/v1.1/coupon/series?format=json&id=7033",
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