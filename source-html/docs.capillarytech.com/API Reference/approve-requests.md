> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Approve Requests

Allows approving requests that are in pending status. You can use this API only when the auto-approval configurations are not enabled for your organization. Also, you cannot approve force approval requests made using `client_auto_approve=true`.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v1.1/request/approve' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic Z2VvcmdlmJiY2U=' \
--header 'Cookie: _cfuvid=FgEymYsZYsfUbnGO89C3IkMYh8nVc68sVjhcGSRM9UU-1772455278767-0.0.1.1-604800000; _cfuvid=t.LMvzCP548Jknof7R.KaHEkOeF1nPYif7.0fktppHM-1772453835616-0.0.1.1-604800000' \
--data '{
  "root": {
    "request": [
      {
        "type": "CHANGE_IDENTIFIER",
        "base_type": "MOBILE",
        "id": "32611949",
        "updated_comments": "1 Seems to a valid request. hence approving"
      }
    ]
  }
}
'
```
```curl Sample request_goodwill points
curl --location 'https://eu.api.capillarytech.com/v1.1/request/approve' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmYmJiY2U=' \
--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000; _cfuvid=t.LMvzCP548Jknof7R.KaHEkOeF1nPYif7.0fktppHM-1772453835616-0.0.1.1-604800000' \
--data '{
  "root": {
    "request": [
      {
        "type": "GOODWILL",
        "base_type": "POINTS",
        "id": "32628415",
        "points": "30",
        "updated_comments": "Approving 30 points from API"
      }
    ]
  }
}'
```
```json Sample request_coupons
 curl --location 'https://eu.api.capillarytech.com/v1.1/request/approve' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic ZGl2eWFfYyZTZm' \
--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000' \
--data '{
  "root": {
    "request": [  
      {
        "type": "GOODWILL",
        "base_type": "COUPON",
        "id": "32996817",
        "updated_comments": "Approving 5 the coupon from API",
        "series_id": "981965"
      }
    ]
  }
}
'
```

# Request body parameters

| Parameter    | Datatype | Mandatory | Description                                                                                                                                                                                                                                                                                            |
| ------------ | -------- | :-------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id\*         | long     | yes       | Reference id of the request that you want to approve.                                                                                                                                                                                                                                                  |
| type\*       | enum     | yes       | Type of request. Value: `CHANGE_IDENTIFIER`, `GOODWILL`, `TRANSACTION_UPDATE`.                                                                                                                                                                                                                         |
| base\_type\* | enum     | yes       | Sub-type of the request. Value: If `type=CHANGE_IDENTIFIER`, base\_type could be `MOBILE`, `EMAIL`, `EXTERNAL_ID`, `MERGE`, or `REALLOCATION`.                                                                                                                                                         |
| series\_id\* | string   | yes       | Represents the coupon series ID and is generated from the <Anchor label="create coupon series" target="_blank" href="https://docs.capillarytech.com/reference/create-coupon-series">create coupon series</Anchor>. The `id` field in the create coupon series response corresponds to the `series_id`. |

If `type=GOODWILL`, base\_type will be `POINTS` or `COUPON`, which is mandatory.

# Example response

```json Sample response
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "requests": {
            "request": [
                {
                    "id": "32611949",
                    "type": "CHANGE_IDENTIFIER",
                    "base_type": "MOBILE",
                    "status": "APPROVED",
                    "old_value": "1234512345",
                    "new_value": "1234123412",
                    "reason": "",
                    "updated_comments": "1 Seems to a valid request. hence approving",
                    "item_status": {
                        "success": "true",
                        "code": 9000,
                        "message": "Request updated successfully"
                    }
                }
            ]
        }
    }
}
```
```json Sample response_points
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "requests": {
            "request": [
                {
                    "id": "32628415",
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "APPROVED",
                    "approved_value": "30",
                    "assoc_id": "0",
                    "reason": "",
                    "updated_comments": "Approving 30 points from API",
                    "item_status": {
                        "success": "true",
                        "code": 9000,
                        "message": "Request updated successfully"
                    }
                }
            ]
        }
    }
}
```
```json Sample response_coupon
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success"
        },
        "requests": {
            "request": [
                {
                    "id": "32996817",
                    "type": "GOODWILL",
                    "base_type": "COUPON",
                    "status": "APPROVED",
                    "approved_value": "981965",
                    "assoc_id": "0",
                    "reason": "",
                    "updated_comments": "Approving 5 the coupon from API",
                    "item_status": {
                        "success": "true",
                        "code": 9000,
                        "message": "Request updated successfully"
                    }
                }
            ]
        }
    }
}
```

# Error code

| Error code | Description                          |
| :--------- | :----------------------------------- |
| 9056       | Same user cannot request and approve |
| 9017       | Invalid coupon series                |

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
    "/request/approve": {
      "post": {
        "summary": "Approve Requests",
        "description": "Allows approving requests that are in pending status. You can use this API only when the auto-approval configurations are not enabled for your organization. Also, you cannot approve force approval requests made using `client_auto_approve=true`.",
        "operationId": "approve-requests",
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
              },
              "examples": {
                "Sample POST Body": {
                  "value": {
                    "root": {
                      "request": [
                        {
                          "type": "GOODWILL",
                          "base_type": "POINTS",
                          "id": "23423",
                          "points": "20",
                          "updated_comments": "Seems to a valid request. hence approving"
                        }
                      ]
                    }
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
                  "Sample response": {
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success"
                        },
                        "requests": {
                          "request": [
                            {
                              "id": "32611949",
                              "type": "CHANGE_IDENTIFIER",
                              "base_type": "MOBILE",
                              "status": "APPROVED",
                              "old_value": "1234512345",
                              "new_value": "1234123412",
                              "reason": "",
                              "updated_comments": "1 Seems to a valid request. hence approving",
                              "item_status": {
                                "success": "true",
                                "code": 9000,
                                "message": "Request updated successfully"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "summary": "Sample response"
                  },
                  "": {
                    "summary": "",
                    "value": "{}"
                  },
                  "Sample response_coupon": {
                    "summary": "Sample response_coupon",
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success"
                        },
                        "requests": {
                          "request": [
                            {
                              "id": "32996817",
                              "type": "GOODWILL",
                              "base_type": "COUPON",
                              "status": "APPROVED",
                              "approved_value": "981965",
                              "assoc_id": "0",
                              "reason": "",
                              "updated_comments": "Approving 5 the coupon from API",
                              "item_status": {
                                "success": "true",
                                "code": 9000,
                                "message": "Request updated successfully"
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "Sample response_points": {
                    "summary": "Sample response_points",
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "Success"
                        },
                        "requests": {
                          "request": [
                            {
                              "id": "32628415",
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "APPROVED",
                              "approved_value": "30",
                              "assoc_id": "0",
                              "reason": "",
                              "updated_comments": "Approving 30 points from API",
                              "item_status": {
                                "success": "true",
                                "code": 9000,
                                "message": "Request updated successfully"
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "response": {
                      "type": "object",
                      "properties": {
                        "requests": {
                          "type": "object",
                          "properties": {
                            "goodwill": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "example": "POINTS"
                                },
                                "reason": {
                                  "type": "string",
                                  "example": "BILL_ISSUE"
                                },
                                "comments": {
                                  "type": "string",
                                  "example": "pls issue a coupon for the failed transaction"
                                },
                                "updated_comments": {
                                  "type": "string",
                                  "example": "Seems to a valid request. hence approving"
                                },
                                "status": {
                                  "type": "string",
                                  "example": "APPROVED"
                                },
                                "customer": {
                                  "type": "object",
                                  "properties": {
                                    "firstname": {
                                      "type": "string",
                                      "example": "Tom"
                                    },
                                    "lastname": {
                                      "type": "string",
                                      "example": "Sawyer"
                                    },
                                    "email": {
                                      "type": "string",
                                      "example": "tom.sawyer@example.com"
                                    },
                                    "mobile": {
                                      "type": "string",
                                      "example": "919999999999"
                                    },
                                    "external_id": {
                                      "type": "string",
                                      "example": "ts1234"
                                    }
                                  }
                                },
                                "added_on": {
                                  "type": "string",
                                  "example": "2014-01-22T03:06:11+05:30"
                                },
                                "last_action_on": {
                                  "type": "string",
                                  "example": "2016-01-23T03:06:11+05:30"
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
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/request/approve' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic Z2VvcmiY2U=' \\\n--header 'Cookie: _cfuvid=FgEymYsZYsfUbnGO89C3IkMYh8nVc68sVjhcGSRM9UU-1772455278767-0.0.1.1-604800000; _cfuvid=t.LMvzCP548Jknof7R.KaHEkOeF1nPYif7.0fktppHM-1772453835616-0.0.1.1-604800000' \\\n--data '{\n  \"root\": {\n    \"request\": [\n      {\n        \"type\": \"CHANGE_IDENTIFIER\",\n        \"base_type\": \"MOBILE\",\n        \"id\": \"32611949\",\n        \"updated_comments\": \"1 Seems to a valid request. hence approving\"\n      }\n    ]\n  }\n}\n'",
              "language": "shell",
              "name": "Sample request"
            },
            {
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/request/approve' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic Z2VvcmdlLmYmJiY2U=' \\\n--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000; _cfuvid=t.LMvzCP548Jknof7R.KaHEkOeF1nPYif7.0fktppHM-1772453835616-0.0.1.1-604800000' \\\n--data '{\n  \"root\": {\n    \"request\": [\n      {\n        \"type\": \"GOODWILL\",\n        \"base_type\": \"POINTS\",\n        \"id\": \"32628415\",\n        \"points\": \"30\",\n        \"updated_comments\": \"Approving 30 points from API\"\n      }\n    ]\n  }\n}'",
              "language": "shell",
              "name": "Sample request_goodwill points"
            },
            {
              "code": " curl --location 'https://eu.api.capillarytech.com/v1.1/request/approve' \\\n--header 'Accept: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'accept: application/json' \\\n--header 'Authorization: Basic ZGl2eWFfYyZTZm' \\\n--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000' \\\n--data '{\n  \"root\": {\n    \"request\": [  \n      {\n        \"type\": \"GOODWILL\",\n        \"base_type\": \"COUPON\",\n        \"id\": \"32996817\",\n        \"updated_comments\": \"Approving 5 the coupon from API\",\n        \"series_id\": \"981965\"\n      }\n    ]\n  }\n}\n'",
              "language": "shell",
              "name": "Sample request_coupons"
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