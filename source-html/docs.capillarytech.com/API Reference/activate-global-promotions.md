> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Activate Cart Promotion

You can use this API to activate a promotion at the organisation level.

* When you activate a promotion globally, the system makes it eligible for evaluation during cart processing. The promotion applies to all eligible customers based on its configuration and targeting rules.
* Use this API when you are ready to move a configured promotion from an inactive state to an active state across the organisation.
* If you need to activate a promotion only for a specific customer, use the [Activate Promotion for Customer API](https://docs.capillarytech.com/reference/post_api-gateway-v1-promotions-promotionid-activate) instead.
* Activate a promotion only after you complete its configuration, including rules, rewards, validity, and targeting.

# Example request

```curl
curl --location --request PUT 'https://{Host}/api_gateway/v1/promotions/{Promotionid}/activate' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWY5NDk1YmNkNzUxYmJiY2U=' \
--header 'Cookie: _cfuvid=JTn6J5w_XI6I59i2lJMz39zEaGAvDWdREw-1770697785684-0.0.1.1-604800000'
```

# Prerequisites

* Authentication: Basic or OAuth authentication.
* Default access group

# Path parameters

| Field       | Type   | Required | Description                                                      |
| :---------- | :----- | :------- | :--------------------------------------------------------------- |
| promotionId | String | Yes      | The unique identifier of the promotion to be activated globally. |

# Example response

```Text 200 OK
{
    "data": true,
    "errors": []
}
```

# Response parameters

| Field  | Type    | Description                                           |
| :----- | :------ | :---------------------------------------------------- |
| data   | Boolean | Returns true if the global activation was successful. |
| errors | Array   | A list of error objects (empty on success).           |

# Error codes

| Code | Description                                                                                                                                            |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | GLOBAL.INVALID\_INPUT: Malformed request or invalid promotionId format.                                                                                |
| 404  | GLOBAL.PROMOTION\_NOT\_FOUND: The promotion configuration was not found for the given organization.                                                    |
| 705  | PROMO.MAX\_ACTIVE\_PROMOTION\_EXCEEDED: The organization has reached the maximum number of simultaneous active promotions allowed by its subscription. |
| 725  | PROMO.PROMOTION\_ID\_INVALID: The provided ID is not a valid format.                                                                                   |
| 744  | PROMO.DUPLICATE\_PROMOTION\_NAME: Another active promotion with the same name already exists in the organization.                                      |
| 811  | PROMO.UPDATE\_EXPIRY\_DATE\_NOT\_ALLOWED: Status change is blocked because an expiry date update job is currently running on this promotion.           |
| 500  | GLOBAL.UNEXPECTED\_ERROR: Internal server error.                                                                                                       |

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
    "/api_gateway/v1/promotions/{id}/activate": {
      "put": {
        "summary": "Activate Promotion",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "example": "698ab5f73b42186a70163ddf"
            }
          },
          {
            "name": "Authorization",
            "in": "header",
            "description": "Basic Auth Header (Corrupted as per instructions)",
            "required": true,
            "schema": {
              "type": "string",
              "default": "Basic Z2VvcmdlLmRvY2RlbW86NjVhMDgzYjk1MWY5MGY1NTY5NDk1YmNkNzUxYmJi"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        }
      }
    }
  }
}
```