> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Store Configurations

Returns InStore configuration details of a specific store.

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
    "/store/configurations": {
      "get": {
        "summary": "Get Store Configurations",
        "description": "Returns InStore configuration details of a specific store.",
        "operationId": "get-store-configurations",
        "parameters": [
          {
            "name": "format",
            "in": "query",
            "description": "Preferred response format.",
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
                  "Result": {
                    "value": "{\n    \"response\": {\n        \"status\": {\n            \"success\": \"true\", \n            \"code\": \"200\", \n            \"message\": \"SUCCESS\"\n        }, \n        \"store\": {\n            \"configurations\": {\n                \"last_modified_time\": {\n                    \"comment\": [\n                        \"\", \n                        \"\", \n                        \"\"\n                    ], \n                    \"configurations\": \"2016-07-03 15:40:29\", \n                    \"custom_fields\": \"2016-07-01 15:40:29\", \n                    \"countries\": \"\", \n                    \"store_attributes\": \"\", \n                    \"cron_entries\": \"\", \n                    \"store_tasks\": \"\", \n                    \"store_tasks_entries\": \"\", \n                    \"purchased_features\": \"\"\n                }, \n                \"comment\": [\n                    \"\", \n                    \"\", \n                    \"\", \n                    \"\", \n                    \"\", \n                    \"\"\n                ], \n                \"data_providers_file\": \"323\", \n                \"client_log_config_file\": \"\", \n                \"printer_templates\": {\n                    \"comment\": \"\", \n                    \"dvs_coupon\": \"\", \n                    \"transaction\": \"\", \n                    \"customer\": \"\", \n                    \"campaign_coupon\": \"\", \n                    \"points_redemption\": \"\"\n                }, \n                \"rules_packages\": {\n                    \"dvs_issue\": {\n                        \"version\": \"\", \n                        \"file_id\": \"\", \n                        \"comment\": \"\"\n                    }, \n                    \"dvs_redeem\": {\n                        \"version\": \"\", \n                        \"file_id\": \"\", \n                        \"comment\": \"\"\n                    }\n                }, \n                \"inventory_version\": \"\", \n                \"integration_output_templates\": {\n                    \"comment\": \"\", \n                    \"points_redemption\": \"-1\", \n                    \"coupon_redemption\": \"\", \n                    \"coupon_issue\": \"\", \n                    \"customer_register\": \"\", \n                    \"customer_update\": \"\", \n                    \"transaction_submit\": \"\", \n                    \"gift_card\": \"\"\n                }, \n                \"integration_post_output_templates\": {\n                    \"points_redemption\": {\n                        \"id\": \"234\", \n                        \"comment\": [\n                            \"\", \n                            \"\"\n                        ], \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"coupon_redemption\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"coupon_issue\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"customer_register\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"customer_update\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"transaction_submit\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"auto_configure\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"nightly_sync\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"eod_sync\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"pre_auto_configure\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"pre_nightly_sync\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"pre_eod_sync\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"os_startup\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }, \n                    \"gift_card\": {\n                        \"id\": \"234\", \n                        \"name\": \"IntegrationPostOutputTemplate\", \n                        \"client_monitoring_type\": \"FILE_CHECK\"\n                    }\n                }, \n                \"customer_attribute_version\": \"\", \n                \"store_server_prefix\": \"\", \n                \"time_zone_offset\": \"\", \n                \"store_tasks_max_entries_id\": \"\", \n                \"client_debug_level\": \"\", \n                \"client_test_mode\": \"\", \n                \"client_upload_logs\": \"\"\n            }\n        }\n    }\n}"
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
                        "store": {
                          "type": "object",
                          "properties": {
                            "configurations": {
                              "type": "object",
                              "properties": {
                                "last_modified_time": {
                                  "type": "object",
                                  "properties": {
                                    "comment": {
                                      "type": "array",
                                      "items": {
                                        "type": "string",
                                        "example": ""
                                      }
                                    },
                                    "configurations": {
                                      "type": "string",
                                      "example": "2016-07-03 15:40:29"
                                    },
                                    "custom_fields": {
                                      "type": "string",
                                      "example": "2016-07-01 15:40:29"
                                    },
                                    "countries": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "store_attributes": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "cron_entries": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "store_tasks": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "store_tasks_entries": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "purchased_features": {
                                      "type": "string",
                                      "example": ""
                                    }
                                  }
                                },
                                "comment": {
                                  "type": "array",
                                  "items": {
                                    "type": "string",
                                    "example": ""
                                  }
                                },
                                "data_providers_file": {
                                  "type": "string",
                                  "example": "323"
                                },
                                "client_log_config_file": {
                                  "type": "string",
                                  "example": ""
                                },
                                "printer_templates": {
                                  "type": "object",
                                  "properties": {
                                    "comment": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "dvs_coupon": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "transaction": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "customer": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "campaign_coupon": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "points_redemption": {
                                      "type": "string",
                                      "example": ""
                                    }
                                  }
                                },
                                "rules_packages": {
                                  "type": "object",
                                  "properties": {
                                    "dvs_issue": {
                                      "type": "object",
                                      "properties": {
                                        "version": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "file_id": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "comment": {
                                          "type": "string",
                                          "example": ""
                                        }
                                      }
                                    },
                                    "dvs_redeem": {
                                      "type": "object",
                                      "properties": {
                                        "version": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "file_id": {
                                          "type": "string",
                                          "example": ""
                                        },
                                        "comment": {
                                          "type": "string",
                                          "example": ""
                                        }
                                      }
                                    }
                                  }
                                },
                                "inventory_version": {
                                  "type": "string",
                                  "example": ""
                                },
                                "integration_output_templates": {
                                  "type": "object",
                                  "properties": {
                                    "comment": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "points_redemption": {
                                      "type": "string",
                                      "example": "-1"
                                    },
                                    "coupon_redemption": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "coupon_issue": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "customer_register": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "customer_update": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "transaction_submit": {
                                      "type": "string",
                                      "example": ""
                                    },
                                    "gift_card": {
                                      "type": "string",
                                      "example": ""
                                    }
                                  }
                                },
                                "integration_post_output_templates": {
                                  "type": "object",
                                  "properties": {
                                    "points_redemption": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "comment": {
                                          "type": "array",
                                          "items": {
                                            "type": "string",
                                            "example": ""
                                          }
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "coupon_redemption": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "coupon_issue": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "customer_register": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "customer_update": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "transaction_submit": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "auto_configure": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "nightly_sync": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "eod_sync": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "pre_auto_configure": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "pre_nightly_sync": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "pre_eod_sync": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "os_startup": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    },
                                    "gift_card": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string",
                                          "example": "234"
                                        },
                                        "name": {
                                          "type": "string",
                                          "example": "IntegrationPostOutputTemplate"
                                        },
                                        "client_monitoring_type": {
                                          "type": "string",
                                          "example": "FILE_CHECK"
                                        }
                                      }
                                    }
                                  }
                                },
                                "customer_attribute_version": {
                                  "type": "string",
                                  "example": ""
                                },
                                "store_server_prefix": {
                                  "type": "string",
                                  "example": ""
                                },
                                "time_zone_offset": {
                                  "type": "string",
                                  "example": ""
                                },
                                "store_tasks_max_entries_id": {
                                  "type": "string",
                                  "example": ""
                                },
                                "client_debug_level": {
                                  "type": "string",
                                  "example": ""
                                },
                                "client_test_mode": {
                                  "type": "string",
                                  "example": ""
                                },
                                "client_upload_logs": {
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
        },
        "deprecated": false,
        "x-readme": {
          "code-samples": [
            {
              "language": "curl",
              "code": "http://us.api.capillarytech.com/store/configurations?format=json",
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