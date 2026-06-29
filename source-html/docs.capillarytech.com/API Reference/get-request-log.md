> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Request Logs

Retrieves the request logs of a specific duration. You can retrieve the either the logs of `CHANGE_IDENTIFIER` or `GOODWILL`.

# Example request

```curl Sample request
curl --location 'https://eu.api.capillarytech.com/v1.1/request/logs?format=json&start_date=2025-09-20&end_date=2026-10-07&type=GOODWILL&base_type=points' \
--header 'Authorization: Basic bWFkazI3MjU2YQ==' \
--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000'
```

# Query parameter

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter
      </th>

      <th style={{ textAlign: "left" }}>
        Datatype
      </th>

      <th style={{ textAlign: "left" }}>
        Mandatory
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        type
      </td>

      <td style={{ textAlign: "left" }}>
        enum
      </td>

      <td style={{ textAlign: "left" }}>
        yes
      </td>

      <td style={{ textAlign: "left" }}>
        Filters requests of a specific type. Supported values: `CHANGE_IDENTIFIER`, `GOODWILL`, `TRANSACTION_UPDATE`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        base_type
      </td>

      <td style={{ textAlign: "left" }}>
        enum
      </td>

      <td style={{ textAlign: "left" }}>
        yes
      </td>

      <td style={{ textAlign: "left" }}>
        Subtype of the specified type. Supported values: `EMAIL`, `MOBILE`, `EXTERNAL_ID`, `MERGE`, `ADDRESS`, `COUPON`, `POINTS`, `TIER`, `RETRO`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        start_date
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        yes
      </td>

      <td style={{ textAlign: "left" }}>
        Start date used to filter requests. Supported format: YYY-MM-DD
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        end_date
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        yes
      </td>

      <td style={{ textAlign: "left" }}>
        End date used to filter requests. Supported format: YYY-MM-DD
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        source
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        no
      </td>

      <td style={{ textAlign: "left" }}>
        Source from which the request was raised.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        status
      </td>

      <td style={{ textAlign: "left" }}>
        enum
      </td>

      <td style={{ textAlign: "left" }}>
        no
      </td>

      <td style={{ textAlign: "left" }}>
        Filters requests by request status.
        Supported values: `APPROVED`, `PENDING`, `REJECTED`, `CUSTOM`.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        limit
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        no
      </td>

      <td style={{ textAlign: "left" }}>
        Limits the number of results per page. For example, limit=10 shows 10 results per page on the UI.   
        The default value is 50.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        offset
      </td>

      <td style={{ textAlign: "left" }}>
        integer
      </td>

      <td style={{ textAlign: "left" }}>
        no
      </td>

      <td style={{ textAlign: "left" }}>
        Number of records to skip for pagination. Default value is 0.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        mobile
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        no
      </td>

      <td style={{ textAlign: "left" }}>
        The mobile number of the customer to get requests from a specific customer.
      </td>
    </tr>
  </tbody>
</Table>

# Example response

```json Sample response
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "SUCCESS"
        },
        "requests": {
            "count": "38",
            "rows": 10,
            "goodwill": [
                {
                    "id": "32628415",
                    "customer": {
                        "firstname": "John",
                        "lastname": "Pork",
                        "email": "naman.ganapathi+1@capillarytech.com",
                        "mobile": "918088369835",
                        "external_id": "696969",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "APPROVED",
                    "reason": "Issue Goodwill 30 points from API",
                    "comments": "API Service request - Awarding 30 points from API.",
                    "updated_comments": "Approving 30 points from API",
                    "one_step_change": "false",
                    "points": "30",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "madhu_rima",
                                "name": "madhurima"
                            },
                            "store": {
                                "code": "doc123",
                                "name": "DocStore"
                            },
                            "time": "2026-03-02T19:04:45+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": "george.docdemo",
                                "mobile": null,
                                "email": null
                            },
                            "ip": null,
                            "time": "2026-03-02T13:36:49+00:00"
                        }
                    }
                },
                {
                    "id": "17729827",
                    "customer": {
                        "firstname": "John",
                        "lastname": "Pork",
                        "email": "naman.ganapathi+1@capillarytech.com",
                        "mobile": "918088369835",
                        "external_id": "696969",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "APPROVED",
                    "reason": "GoodGuy",
                    "comments": "Good behaviour",
                    "updated_comments": "Good behaviour; AUTO_APPROVED",
                    "one_step_change": "true",
                    "points": "100",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "1746689082_",
                                "name": "Naman"
                            },
                            "store": {
                                "code": null,
                                "name": null
                            },
                            "time": "2026-02-10T20:25:58+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": " Naman Ganapathi",
                                "mobile": "",
                                "email": "naman.ganapathi@capillarytech.com"
                            },
                            "ip": null,
                            "time": "2026-02-10T14:55:59+00:00"
                        }
                    }
                },
                {
                    "id": "13675914",
                    "customer": {
                        "firstname": "TestUser",
                        "lastname": "TJThree",
                        "email": "testusertjthree@gmail.com",
                        "mobile": "919999988883",
                        "external_id": "0000011113",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "PENDING",
                    "reason": "Goodwill reason v2 1",
                    "comments": "Goodwill comment v2 1",
                    "updated_comments": null,
                    "one_step_change": "false",
                    "points": "105",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "tj_capillary",
                                "name": "tj_capillary"
                            },
                            "store": {
                                "code": "doc123",
                                "name": "DocStore"
                            },
                            "time": "2026-01-21T16:18:29+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": "tj_capillary",
                                "mobile": null,
                                "email": null
                            },
                            "ip": null,
                            "time": "2026-01-21T10:48:30+00:00"
                        }
                    }
                },
                {
                    "id": "13657196",
                    "customer": {
                        "firstname": "Bubalus",
                        "lastname": "bubalis",
                        "email": "dead.fool@capillarytech.com",
                        "mobile": "1234123412",
                        "external_id": "12341234",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "PENDING",
                    "reason": "POINTS_ISSUE",
                    "comments": "Test issue 50 pts.",
                    "updated_comments": null,
                    "one_step_change": "false",
                    "points": "50",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "george.docdemo",
                                "name": "george.docdemo"
                            },
                            "store": {
                                "code": "doc123",
                                "name": "DocStore"
                            },
                            "time": "2025-12-28T11:11:21+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": "george.docdemo",
                                "mobile": null,
                                "email": null
                            },
                            "ip": null,
                            "time": "2025-12-28T05:41:22+00:00"
                        }
                    }
                },
                {
                    "id": "13638222",
                    "customer": {
                        "firstname": "John",
                        "lastname": "Pork",
                        "email": "naman.ganapathi+1@capillarytech.com",
                        "mobile": "918088369835",
                        "external_id": "696969",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "APPROVED",
                    "reason": "New",
                    "comments": "d",
                    "updated_comments": "d; AUTO_APPROVED",
                    "one_step_change": "true",
                    "points": "1000000",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "1755508315203_",
                                "name": "1755508314_george"
                            },
                            "store": {
                                "code": null,
                                "name": null
                            },
                            "time": "2025-12-03T12:16:59+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": " george ",
                                "mobile": "",
                                "email": "george.johnson@capillarytech.com"
                            },
                            "ip": null,
                            "time": "2025-12-03T06:46:59+00:00"
                        }
                    }
                },
                {
                    "id": "13628608",
                    "customer": {
                        "firstname": "NeerajV2",
                        "lastname": "test",
                        "email": "testv2.8@gmail.com",
                        "mobile": null,
                        "external_id": "008",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "APPROVED",
                    "reason": "New",
                    "comments": "wfef",
                    "updated_comments": "wfef; AUTO_APPROVED",
                    "one_step_change": "true",
                    "points": "1000000",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "1755508315203_",
                                "name": "1755508314_george"
                            },
                            "store": {
                                "code": null,
                                "name": null
                            },
                            "time": "2025-11-20T11:54:14+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": " george ",
                                "mobile": "",
                                "email": "george.johnson@capillarytech.com"
                            },
                            "ip": null,
                            "time": "2025-11-20T06:24:14+00:00"
                        }
                    }
                },
                {
                    "id": "13615199",
                    "customer": {
                        "firstname": "Satish",
                        "lastname": "Customer1515 LN",
                        "email": "satishcustomer15@gmail.com",
                        "mobile": "2118201115",
                        "external_id": "extid15",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "APPROVED",
                    "reason": "GoodGuy",
                    "comments": "Adding 10 points",
                    "updated_comments": "Adding 10 points; AUTO_APPROVED",
                    "one_step_change": "true",
                    "points": "10",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "1736162491_",
                                "name": "1736162491_satish"
                            },
                            "store": {
                                "code": null,
                                "name": null
                            },
                            "time": "2025-11-04T14:38:52+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": " satish maharana",
                                "mobile": "",
                                "email": "satish.maharana@capillarytech.com"
                            },
                            "ip": null,
                            "time": "2025-11-04T09:08:53+00:00"
                        }
                    }
                },
                {
                    "id": "13615171",
                    "customer": {
                        "firstname": "TestUser",
                        "lastname": "TJThree",
                        "email": "testusertjthree@gmail.com",
                        "mobile": "919999988883",
                        "external_id": "0000011113",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "APPROVED",
                    "reason": "Goodwill reason v2 1",
                    "comments": "Goodwill comment v2 1",
                    "updated_comments": "",
                    "one_step_change": "false",
                    "points": "105",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "tj_capillary",
                                "name": "tj_capillary"
                            },
                            "store": {
                                "code": "doc123",
                                "name": "DocStore"
                            },
                            "time": "2025-11-04T14:27:02+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": " george ",
                                "mobile": "",
                                "email": "george.johnson@capillarytech.com"
                            },
                            "ip": "172.68.147.197",
                            "time": "2025-11-27T11:26:41+00:00"
                        }
                    }
                },
                {
                    "id": "13615170",
                    "customer": {
                        "firstname": "uat_request",
                        "lastname": "user1",
                        "email": "uat_request_user1@gmail.com",
                        "mobile": "2118201116",
                        "external_id": "2118201",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "PENDING",
                    "reason": "Goodwill reason v2 1",
                    "comments": "Goodwill comment v2 1",
                    "updated_comments": null,
                    "one_step_change": "false",
                    "points": "101",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "tj_capillary",
                                "name": "tj_capillary"
                            },
                            "store": {
                                "code": "doc123",
                                "name": "DocStore"
                            },
                            "time": "2025-11-04T14:26:10+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": "tj_capillary",
                                "mobile": null,
                                "email": null
                            },
                            "ip": null,
                            "time": "2025-11-04T08:56:11+00:00"
                        }
                    }
                },
                {
                    "id": "13615168",
                    "customer": {
                        "firstname": "uat_request",
                        "lastname": "user1",
                        "email": "uat_request_user1@gmail.com",
                        "mobile": "2118201116",
                        "external_id": "2118201",
                        "fraud_status": "NONE"
                    },
                    "type": "GOODWILL",
                    "base_type": "POINTS",
                    "status": "PENDING",
                    "reason": "Goodwill reason v2 1",
                    "comments": "Goodwill comment v2 1",
                    "updated_comments": null,
                    "one_step_change": "false",
                    "points": "101",
                    "logs": {
                        "added_by": {
                            "till": {
                                "code": "tj_capillary",
                                "name": "tj_capillary"
                            },
                            "store": {
                                "code": "doc123",
                                "name": "DocStore"
                            },
                            "time": "2025-11-04T14:24:36+00:00"
                        },
                        "updated_by": {
                            "user": {
                                "name": "tj_capillary",
                                "mobile": null,
                                "email": null
                            },
                            "ip": null,
                            "time": "2025-11-04T08:54:37+00:00"
                        }
                    }
                }
            ],
            "item_status": {
                "success": "true",
                "code": 9000,
                "message": "Request retrieved successfully"
            }
        }
    }
}
```

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
    "/request/logs": {
      "get": {
        "summary": "Get Request Logs",
        "description": "Retrieves the request logs of a specific duration. You can retrieve the either the logs of `CHANGE_IDENTIFIER` or `GOODWILL`.",
        "operationId": "get-request-log",
        "parameters": [
          {
            "name": "type",
            "in": "query",
            "description": "Filters requests of a specific type.",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "HANGE_IDENTIFIER",
                "GOODWILL",
                "TRANSACTION_UPDATE"
              ]
            }
          },
          {
            "name": "start_date",
            "in": "query",
            "description": "Get requests added on or after a specific date (YYYY-MM-DD). To get requests for a specific duration, pass the date-range in start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "end_date",
            "in": "query",
            "description": "Get requests added before a specific date (YYYY-MM-DD). To get requests for a specific duration, pass the date-range in start_date and end_date.",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "base_type",
            "in": "query",
            "description": "Sub type of the specified type.",
            "schema": {
              "type": "string",
              "enum": [
                "MOBILE",
                "EXTERNAL_ID",
                "EMAIL",
                "MERGE",
                "ADDRESS",
                "COUPONS",
                "POINTS"
              ]
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Filters requests by request status.",
            "schema": {
              "type": "string",
              "enum": [
                "APPROVED",
                "PENDING",
                "REJECTED"
              ]
            }
          },
          {
            "name": "request_id",
            "in": "query",
            "description": "Unique ID of the request to fetch the log of a specific request.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Limits the number of results per page. For example, limit=10 shows 10 results per page on the UI.",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "mobile",
            "in": "query",
            "description": "Mobile number of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "email",
            "in": "query",
            "description": "Email ID of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "external_id",
            "in": "query",
            "description": "External ID  of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "query",
            "description": "Unique ID of the customer to get requests of a specific customer.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "card_number",
            "in": "query",
            "description": "Card number of the customer to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "card_external_id",
            "in": "query",
            "description": "External ID of the customer's card to get requests of a specific customer.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "start_id",
            "in": "query",
            "description": "Get logs of requests starting on or after a specific ID. Get requests in a specific request range using start_id and end_id.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "end_id",
            "in": "query",
            "description": "Get logs of requests until a specific ID. Get requests in a specific request range using start_id and end_id.",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "format",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "xml",
                "json"
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
                  "Sample response": {
                    "value": {
                      "response": {
                        "status": {
                          "success": "true",
                          "code": 200,
                          "message": "SUCCESS"
                        },
                        "requests": {
                          "count": "38",
                          "rows": 10,
                          "goodwill": [
                            {
                              "id": "32628415",
                              "customer": {
                                "firstname": "John",
                                "lastname": "Pork",
                                "email": "naman.ganapathi+1@capillarytech.com",
                                "mobile": "918088369835",
                                "external_id": "696969",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "APPROVED",
                              "reason": "Issue Goodwill 30 points from API",
                              "comments": "API Service request - Awarding 30 points from API.",
                              "updated_comments": "Approving 30 points from API",
                              "one_step_change": "false",
                              "points": "30",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "madhu_rima",
                                    "name": "madhurima"
                                  },
                                  "store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "time": "2026-03-02T19:04:45+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": "george.docdemo",
                                    "mobile": null,
                                    "email": null
                                  },
                                  "ip": null,
                                  "time": "2026-03-02T13:36:49+00:00"
                                }
                              }
                            },
                            {
                              "id": "17729827",
                              "customer": {
                                "firstname": "John",
                                "lastname": "Pork",
                                "email": "naman.ganapathi+1@capillarytech.com",
                                "mobile": "918088369835",
                                "external_id": "696969",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "APPROVED",
                              "reason": "GoodGuy",
                              "comments": "Good behaviour",
                              "updated_comments": "Good behaviour; AUTO_APPROVED",
                              "one_step_change": "true",
                              "points": "100",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "1746689082_",
                                    "name": "Naman"
                                  },
                                  "store": {
                                    "code": null,
                                    "name": null
                                  },
                                  "time": "2026-02-10T20:25:58+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": " Naman Ganapathi",
                                    "mobile": "",
                                    "email": "naman.ganapathi@capillarytech.com"
                                  },
                                  "ip": null,
                                  "time": "2026-02-10T14:55:59+00:00"
                                }
                              }
                            },
                            {
                              "id": "13675914",
                              "customer": {
                                "firstname": "TestUser",
                                "lastname": "TJThree",
                                "email": "testusertjthree@gmail.com",
                                "mobile": "919999988883",
                                "external_id": "0000011113",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "PENDING",
                              "reason": "Goodwill reason v2 1",
                              "comments": "Goodwill comment v2 1",
                              "updated_comments": null,
                              "one_step_change": "false",
                              "points": "105",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "tj_capillary",
                                    "name": "tj_capillary"
                                  },
                                  "store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "time": "2026-01-21T16:18:29+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": "tj_capillary",
                                    "mobile": null,
                                    "email": null
                                  },
                                  "ip": null,
                                  "time": "2026-01-21T10:48:30+00:00"
                                }
                              }
                            },
                            {
                              "id": "13657196",
                              "customer": {
                                "firstname": "Bubalus",
                                "lastname": "bubalis",
                                "email": "dead.fool@capillarytech.com",
                                "mobile": "1234123412",
                                "external_id": "12341234",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "PENDING",
                              "reason": "POINTS_ISSUE",
                              "comments": "Test issue 50 pts.",
                              "updated_comments": null,
                              "one_step_change": "false",
                              "points": "50",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "george.docdemo",
                                    "name": "george.docdemo"
                                  },
                                  "store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "time": "2025-12-28T11:11:21+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": "george.docdemo",
                                    "mobile": null,
                                    "email": null
                                  },
                                  "ip": null,
                                  "time": "2025-12-28T05:41:22+00:00"
                                }
                              }
                            },
                            {
                              "id": "13638222",
                              "customer": {
                                "firstname": "John",
                                "lastname": "Pork",
                                "email": "naman.ganapathi+1@capillarytech.com",
                                "mobile": "918088369835",
                                "external_id": "696969",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "APPROVED",
                              "reason": "New",
                              "comments": "d",
                              "updated_comments": "d; AUTO_APPROVED",
                              "one_step_change": "true",
                              "points": "1000000",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "1755508315203_",
                                    "name": "1755508314_george"
                                  },
                                  "store": {
                                    "code": null,
                                    "name": null
                                  },
                                  "time": "2025-12-03T12:16:59+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": " george ",
                                    "mobile": "",
                                    "email": "george.johnson@capillarytech.com"
                                  },
                                  "ip": null,
                                  "time": "2025-12-03T06:46:59+00:00"
                                }
                              }
                            },
                            {
                              "id": "13628608",
                              "customer": {
                                "firstname": "NeerajV2",
                                "lastname": "test",
                                "email": "testv2.8@gmail.com",
                                "mobile": null,
                                "external_id": "008",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "APPROVED",
                              "reason": "New",
                              "comments": "wfef",
                              "updated_comments": "wfef; AUTO_APPROVED",
                              "one_step_change": "true",
                              "points": "1000000",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "1755508315203_",
                                    "name": "1755508314_george"
                                  },
                                  "store": {
                                    "code": null,
                                    "name": null
                                  },
                                  "time": "2025-11-20T11:54:14+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": " george ",
                                    "mobile": "",
                                    "email": "george.johnson@capillarytech.com"
                                  },
                                  "ip": null,
                                  "time": "2025-11-20T06:24:14+00:00"
                                }
                              }
                            },
                            {
                              "id": "13615199",
                              "customer": {
                                "firstname": "Satish",
                                "lastname": "Customer1515 LN",
                                "email": "satishcustomer15@gmail.com",
                                "mobile": "2118201115",
                                "external_id": "extid15",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "APPROVED",
                              "reason": "GoodGuy",
                              "comments": "Adding 10 points",
                              "updated_comments": "Adding 10 points; AUTO_APPROVED",
                              "one_step_change": "true",
                              "points": "10",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "1736162491_",
                                    "name": "1736162491_satish"
                                  },
                                  "store": {
                                    "code": null,
                                    "name": null
                                  },
                                  "time": "2025-11-04T14:38:52+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": " satish maharana",
                                    "mobile": "",
                                    "email": "satish.maharana@capillarytech.com"
                                  },
                                  "ip": null,
                                  "time": "2025-11-04T09:08:53+00:00"
                                }
                              }
                            },
                            {
                              "id": "13615171",
                              "customer": {
                                "firstname": "TestUser",
                                "lastname": "TJThree",
                                "email": "testusertjthree@gmail.com",
                                "mobile": "919999988883",
                                "external_id": "0000011113",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "APPROVED",
                              "reason": "Goodwill reason v2 1",
                              "comments": "Goodwill comment v2 1",
                              "updated_comments": "",
                              "one_step_change": "false",
                              "points": "105",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "tj_capillary",
                                    "name": "tj_capillary"
                                  },
                                  "store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "time": "2025-11-04T14:27:02+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": " george ",
                                    "mobile": "",
                                    "email": "george.johnson@capillarytech.com"
                                  },
                                  "ip": "172.68.147.197",
                                  "time": "2025-11-27T11:26:41+00:00"
                                }
                              }
                            },
                            {
                              "id": "13615170",
                              "customer": {
                                "firstname": "uat_request",
                                "lastname": "user1",
                                "email": "uat_request_user1@gmail.com",
                                "mobile": "2118201116",
                                "external_id": "2118201",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "PENDING",
                              "reason": "Goodwill reason v2 1",
                              "comments": "Goodwill comment v2 1",
                              "updated_comments": null,
                              "one_step_change": "false",
                              "points": "101",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "tj_capillary",
                                    "name": "tj_capillary"
                                  },
                                  "store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "time": "2025-11-04T14:26:10+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": "tj_capillary",
                                    "mobile": null,
                                    "email": null
                                  },
                                  "ip": null,
                                  "time": "2025-11-04T08:56:11+00:00"
                                }
                              }
                            },
                            {
                              "id": "13615168",
                              "customer": {
                                "firstname": "uat_request",
                                "lastname": "user1",
                                "email": "uat_request_user1@gmail.com",
                                "mobile": "2118201116",
                                "external_id": "2118201",
                                "fraud_status": "NONE"
                              },
                              "type": "GOODWILL",
                              "base_type": "POINTS",
                              "status": "PENDING",
                              "reason": "Goodwill reason v2 1",
                              "comments": "Goodwill comment v2 1",
                              "updated_comments": null,
                              "one_step_change": "false",
                              "points": "101",
                              "logs": {
                                "added_by": {
                                  "till": {
                                    "code": "tj_capillary",
                                    "name": "tj_capillary"
                                  },
                                  "store": {
                                    "code": "doc123",
                                    "name": "DocStore"
                                  },
                                  "time": "2025-11-04T14:24:36+00:00"
                                },
                                "updated_by": {
                                  "user": {
                                    "name": "tj_capillary",
                                    "mobile": null,
                                    "email": null
                                  },
                                  "ip": null,
                                  "time": "2025-11-04T08:54:37+00:00"
                                }
                              }
                            }
                          ],
                          "item_status": {
                            "success": "true",
                            "code": 9000,
                            "message": "Request retrieved successfully"
                          }
                        }
                      }
                    },
                    "summary": "Sample response"
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
                              "example": "SUCCESS"
                            }
                          }
                        },
                        "requests": {
                          "type": "object",
                          "properties": {
                            "count": {
                              "type": "string",
                              "example": "60"
                            },
                            "rows": {
                              "type": "string",
                              "example": "10"
                            },
                            "change_identifier": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string",
                                    "example": "263452"
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
                                        "example": "44700900000"
                                      },
                                      "external_id": {
                                        "type": "string",
                                        "example": "ts123"
                                      },
                                      "fraud_status": {
                                        "type": "string",
                                        "example": "NONE"
                                      }
                                    }
                                  },
                                  "type": {
                                    "type": "string",
                                    "example": "CHANGE_IDENTIFIER"
                                  },
                                  "base_type": {
                                    "type": "string",
                                    "example": "EMAIL"
                                  },
                                  "status": {
                                    "type": "string",
                                    "example": "PENDING"
                                  },
                                  "old_value": {
                                    "type": "string",
                                    "example": "tom.sawyerold@example.com"
                                  },
                                  "new_value": {
                                    "type": "string",
                                    "example": "tom.sawyer@example.com"
                                  },
                                  "one_step_change": {
                                    "type": "string",
                                    "example": "false"
                                  },
                                  "approval_type": {
                                    "type": "string",
                                    "example": "CLIENT"
                                  },
                                  "logs": {
                                    "type": "object",
                                    "properties": {
                                      "added_by": {
                                        "type": "object",
                                        "properties": {
                                          "till": {
                                            "type": "object",
                                            "properties": {
                                              "code": {
                                                "type": "string",
                                                "example": "Catherine"
                                              },
                                              "name": {
                                                "type": "string",
                                                "example": "James"
                                              }
                                            }
                                          },
                                          "store": {
                                            "type": "object",
                                            "properties": {}
                                          },
                                          "time": {
                                            "type": "string",
                                            "example": "2016-12-16T12:49:29+05:30"
                                          }
                                        }
                                      },
                                      "updated_by": {
                                        "type": "object",
                                        "properties": {
                                          "user": {
                                            "type": "object",
                                            "properties": {
                                              "name": {
                                                "type": "string",
                                                "example": "Catherine James"
                                              },
                                              "mobile": {
                                                "type": "string",
                                                "example": "44700200030"
                                              },
                                              "email": {
                                                "type": "string",
                                                "example": "catherine@example.com"
                                              }
                                            }
                                          },
                                          "ip": {
                                            "type": "string",
                                            "example": "115.114.139.186"
                                          },
                                          "time": {
                                            "type": "string",
                                            "example": "2016-12-16T12:49:29+05:30"
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
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
                                  "example": "9000"
                                },
                                "message": {
                                  "type": "string",
                                  "example": "Request retrieved successfully"
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
              "language": "shell",
              "code": "curl --location 'https://eu.api.capillarytech.com/v1.1/request/logs?format=json&start_date=2025-09-20&end_date=2026-10-07&type=GOODWILL&base_type=points' \\\n--header 'Authorization: Basic bWFkaHV4Zj2YQ==' \\\n--header 'Cookie: _cfuvid=zP64VTj6GdUFYZ2gjEkFMJ0lr.yGY2xiKhDjAViECSE-1772457459807-0.0.1.1-604800000'",
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