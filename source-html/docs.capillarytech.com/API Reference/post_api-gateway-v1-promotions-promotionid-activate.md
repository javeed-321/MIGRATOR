> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Activate Promotion for Customer

This API allows you to activate a promotion for a specific customer to make it available for their use or to resume their participation in a campaign. This is primarily used for Customer Opt-in scenarios and to reactivate individual rewards via `earnId` that were previously suspended or opted out.

This endpoint only modifies the status for a single customer while other customers' eligibility remains unchanged. To activate promotion globally, use the <Anchor label="Activate Promotion" target="_blank" href="https://docs.capillarytech.com/reference/put_api-gateway-v1-promotions-id-activate">Activate Promotion</Anchor> API.

# Example request

```
curl --location 'https://{Host}/api_gateway/v1/promotions/{PromotionId}/activate?customerId=566881933' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjV1NTY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=JTn6J554SYRm2gTn9i2lJMz39zEaGAvDWdREw-1770697785684-0.0.1.1-604800000' \
--data '
{
  "customerId": "566881933",
  "earnId": "1234123"
}
'
```

# Prerequisites

* Authentication: Basic or OAuth authentication.
* Default access group

# Path parameters

| Field       | Type   | Required | Description                                          |
| :---------- | :----- | :------- | :--------------------------------------------------- |
| promotionId | String | Yes      | Unique identifier for the promotion to be activated. |

# Query parameters

| Field      | Type   | Required | Description                                                                                                                                     |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| customerId | Number | Yes      | The unique identifier of the customer.                                                                                                          |
| earnId     | String | Optional | The specific earn ID to link the activation to. Required for `PAYMENT_VOUCHER` modes. Not supported for promotions with PromotionMode.DISCOUNT. |

# Example response

```json
{
    "data": true,
    "errors": []
}

```

# Response parameters

| Field  | Type    | Description                                    |
| :----- | :------ | :--------------------------------------------- |
| data   | Boolean | Returns true if the activation was successful. |
| errors | Array   | A list of error objects (empty on success).    |

# Error codes

| Code | Description                                                                                                                                                                                                                                                 |
| :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | GLOBAL.INVALID\_INPUT: Check required parameters and formats.                                                                                                                                                                                               |
| 404  | GLOBAL.PROMOTION\_NOT\_FOUND: The specified promotionId does not exist or is not globally active.                                                                                                                                                           |
| 707  | PROMO.UNSUPPORTED\_PROMOTION\_TYPE: Cannot activate for POS or CODE promotion types.                                                                                                                                                                        |
| 731  | PROMO.EARN\_ID\_INVALID: The provided earnId is invalid or doesn't belong to the customer/promotion.                                                                                                                                                        |
| 736  | PROMO.UNSUPPORTED\_PREFERENCE\_CHANGE: Incorrect combination of earnId and promotion mode. This error occurs if you pass earnId for a promotion configured with PromotionMode.DISCOUNT, or if the instance-level change is not supported for the promotion. |
| 737  | PROMO.UNSUPPORTED\_PREFERENCE\_CHANGE\_PENDING\_CART: Cannot change status while the customer has an open cart.                                                                                                                                             |
| 500  | GLOBAL.UNEXPECTED\_ERROR: Internal server error. Retry after a delay.                                                                                                                                                                                       |

# OpenAPI definition

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Activate Promotion",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "{Host}",
      "variables": {
        "Host": {
          "default": "https://eu.intouch.capillarytech.com",
          "enum": [
            "https://eu.intouch.capillarytech.com",
            "https://intouch.capillary.co.in",
            "https://apac2.intouch.capillarytech.com",
            "https://sgcrm.cc.capillarytech.com",
            "http://intouch.capillarytech.cn.com",
            "https://north-america.intouch.capillarytech.com"
          ]
        }
      }
    }
  ],
  "paths": {
    "/api_gateway/v1/promotions/{promotionId}/activate": {
      "post": {
        "summary": "Activate Promotion",
        "parameters": [
          {
            "name": "promotionId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "example": "698ab5f73b42186a70163ddf"
          },
          {
            "name": "customerId",
            "in": "query",
            "schema": {
              "type": "string"
            },
            "example": "566881933"
          },
          {
            "name": "Authorization",
            "in": "header",
            "description": "Basic Auth Header",
            "schema": {
              "type": "string"
            },
            "example": "Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJi"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "customerId": {
                    "type": "string",
                    "example": "566881933"
                  },
                  "earnId": {
                    "type": "string",
                    "example": "1234123"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful response"
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      }
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ]
}
```