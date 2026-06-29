# v1 API Reference — Groups Overview

**Tab:** `v1 API Reference`
**Total Pages:** 184
**Total Groups:** 15
**Last Updated:** 2026-06-26

> Pages marked ⚠️ are **not present** in the live site sidebar (`API_Reference_Structure.md`).

---

## Summary

| # | Group | Pages | Live Site Section Match |
|---|-------|-------|-------------------------|
| 1 | Customer Authentication (Web/Mobile) | 22 | ✅ Matches live site |
| 2 | Customer (V1) | 1 | ✅ Matches live site |
| 3 | Coupon | 4 | ✅ Partial (2 matched, 2 not on live site) |
| 4 | Search APIs | 11 | ✅ Matches live site |
| 5 | Badges | 28 | ✅ 25 matched, 3 not on live site |
| 6 | Rewards Catalog | 66 | ✅ Partial (many matched, some not on live site) |
| 7 | Target/Milestone | 6 | ✅ Partial (5 matched, 1 not on live site) |
| 8 | Cart Promotions | 21 | ✅ Partial (12 matched, 9 not on live site) |
| 9 | Points | 9 | ✅ Partial (2 matched, 7 not on live site) |
| 10 | Audit logs | 1 | ✅ Matches live site |
| 11 | Request workflow | 3 | ✅ Matches live site |
| 12 | Recommendations | 3 | ⚠️ Not on live site |
| 13 | DAS | 1 | ⚠️ Not on live site |
| 14 | Points (Event Logs) | 7 | ⚠️ Not on live site |
| 15 | Loyalty (Other) | 1 | ⚠️ Not on live site |
|16|   **Total**   | **184** | **134 matched / 50 unverified** |
---

## 1. Customer Authentication (Web/Mobile) — 22 pages

Web/Mobile auth token, OTP and MFA flows.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| POST | `generate-authentication-tokenapi` | `/auth/v1/web/token/generate` |
| POST | `generate-otp-api` | `/auth/v1/web/otp/generate` |
| POST | `validate-otp-api` | `/auth/v1/web/otp/validate` |
| POST | `validate-password` | `/auth/v1/web/password/validate` |
| POST | `regenerate-authentication-token` | `/auth/v1/web/token/regenerate` |
| POST | `change-password` | `/auth/v1/web/password/change` |
| POST | `forget-password` | `/auth/v1/web/password/forget` |
| POST | `generate-mfa-token` | `/auth/v1/mfa/token/generate` |
| POST | `generate-otp-mfa` | `/auth/v1/mfa/otp/generate` |
| POST | `validate-mfa-otp` | `/auth/v1/mfa/otp/validate` |
| POST | `validate-mfa-password` | `/auth/v1/mfa/password/validate` |
| POST | `change-mfa-password` | `/auth/v1/mfa/password/change` |
| POST | `mfa-forgot-password` | `/auth/v1/mfa/password/forget` |
| POST | `regenerate-token` | `/auth/v1/mfa/token/regenerate` |
| DELETE | `delete-token` | `/auth/v1/mfa/token/expire` |
| POST ⚠️ | `regenerate-authentication-token-1` | `/auth/v1/token/regenerate` |
| POST ⚠️ | `generate-authentication-token` | `/auth/v1/token/generate` |
| POST ⚠️ | `generate-otp-1-1` | `/auth/v1/otp/generate` |
| POST ⚠️ | `validate-otp-2` | `/auth/v1/otp/validate` |
| POST ⚠️ | `validate-password-1` | `/auth/v1/password/validate` |
| POST ⚠️ | `change-password-1` | `/auth/v1/password/change` |
| POST ⚠️ | `forget-password-1` | `/auth/v1/password/forget` |

> ⚠️ 7 pages are `/auth/v1/` generic path variants — the live site documents the `/auth/v1/web/` versions instead.

---

## 2. Customer (V1) — 1 page

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| POST | `change_identifier-on-auth-engine` | `/auth/v1/user/updateIdentifierValue` |

---

## 3. Coupon — 4 pages

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| POST | `upload-coupons-batch` | `/coupon/api/v1/upload/file/{couponSeriedId}` |
| POST | `upload-redeemed-coupons` | `/upload/redeemFile/{couponSeriesId}` |
| GET ⚠️ | `get-custom-fields-associated-with-coupon-redemption-global` | `/x/neo/couponRedemption/customFields` |
| GET ⚠️ | `get-custom-fields-associated-with-coupon-redemption` | `/das/getCouponRedemptionCustomFieldsData` |

---

## 4. Search APIs — 11 pages

Cortex search, data fields, and custom event configuration.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| POST | `create-meta-search` | `/api_gateway/cortex/v1/criteria` |
| GET | `get-meta` | `/api_gateway/cortex/v1/criteria/{id}` |
| DELETE | `deactivate-search-criteria` | `/api_gateway/cortex/v1/criteria/{id}` |
| POST | `enable-bulk-trigger` | `/api_gateway/cortex/v1/bulk/trigger/{id}` |
| GET | `get-data-field-detail-api` | `/api_gateway/cortex/v1/dataFields` |
| POST | `create-data-field` | `/api_gateway/cortex/v1/dataFields` |
| PUT | `put-data-field-api` | `/api_gateway/cortex/v1/dataFields/{id}` |
| POST | `search-api-cortex-api` | `/api_gateway/cortex/v1/search` |
| GET | `retrieve-custom-event-config-details-of-org` | `/api_gateway/cortex/v1/neo-config` |
| POST | `enable-custom-event-for-cortex-search` | `/api_gateway/cortex/v1/neo-config` |
| GET | `retrieve-custom-event-config-details-for-entity` | `/api_gateway/cortex/v1/neo-config/entity/{entityType}` |

---

## 5. Badges — 28 pages

Badge lifecycle, customer badge management, groups, and custom fields.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| GET ⚠️ | `v1-get-badges-org-meta` | `/api_gateway/v1/badges/orgMeta` |
| POST ⚠️ | `v1-create-badges-org-meta` | `/api_gateway/v1/badges/orgMeta` |
| PUT ⚠️ | `v1-update-badges-org-meta` | `/api_gateway/v1/badges/orgMeta` |
| GET | `get-all-badges` | `/api_gateway/v1/badges/badgeMeta` |
| POST | `create-badges-org` | `/api_gateway/v1/badges/badgeMeta` |
| PUT | `update-badges` | `/api_gateway/v1/badges/badgeMeta` |
| GET | `get-badge-by-id` | `/api_gateway/v1/badges/badgeMeta/{badgeId}` |
| POST | `claim-badge` | `/api_gateway/v1/badges/badgeMeta/{badgeId}/claim` |
| POST | `unclaim-badge` | `/api_gateway/v1/badges/badgeMeta/{badgeId}/unclaim` |
| PUT | `update-the-activation-status-of-badge` | `/api_gateway/v1/badges/badgeMeta/{badgeId}/{activationStatus}` |
| POST | `enrol-customers-for-badges` | `/api_gateway/v1/badges/badgeMeta/customer/issueBulk` |
| POST | `issue-badge-to-the-customer` | `/api_gateway/v1/badges/customer/earn` |
| POST | `issue-badge-to-multiple-customers` | `/api_gateway/v1/badges/customer/earnBulk` |
| POST | `import-earned-badges-of-customer` | `/api_gateway/v1/badges/import/customerBadges` |
| POST | `revoke-enrolment-of-a-badge` | `/api_gateway/v1/badges/badgeMeta/customer/revokeIssue` |
| POST | `revoke-issual-of-a-badge` | `/badges/customer/revokeEarn` |
| GET | `get-badges-for-customer` | `/api_gateway/v1/badges/customer/{customerId}` |
| GET | `get-all-customer-badges` | `/api_gateway/v1/badges/management/{customerId}` |
| GET | `get-individual-badge-details-of-a-customer` | `/api_gateway/v1/badges/management/{customerId}/badge/{badgeId}` |
| GET | `get-all-groups` | `/api_gateway/v1/badges/group` |
| POST | `create-badges-group` | `/api_gateway/v1/badges/group` |
| PUT | `update-badges-group` | `/api_gateway/v1/badges/{groupid}` |
| GET | `get-group-by-id` | `/api_gateway/v1/badges/group/{groupId}` |
| GET | `get-all-custom-fields` | `/api_gateway/v1/badges/customField` |
| POST | `create-custom-field` | `/api_gateway/v1/badges/customField` |
| GET | `get-custom-field-by-id` | `/api_gateway/v1/badges/customField/{customFieldId}` |
| PUT | `update-custom-field-badge` | `/api_gateway/v1/badges/customField/{customFieldId}` |
| GET | `get-fixed-window-details` | `/api_gateway/v1/badges/badgeMeta/getFixedWindowDetails` |

> ⚠️ 3 pages (`v1-*-badges-org-meta`) not on the live site — kept with `v1-` prefix.

---

## 6. Rewards Catalog — 66 pages

Reward creation, issuance, categories, vendors, fulfillment, promotions, and connected-org APIs.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| POST | `post-create-reward` | `/api_gateway/rewards/core/v1/reward/create` |
| GET | `get-reward-details-by-id` | `/api_gateway/rewards/core/v1/reward/{rewardId}/brand/{brandId}` |
| PUT | `put-update-reward` | `/api_gateway/rewards/core/v1/reward/{rewardId}/brand/{brandId}` |
| POST | `create-reward-category` | `/api_gateway/rewards/core/v1/metadata/category/create` |
| PUT | `enable-or-disable-reward-categories` | `/api_gateway/rewards/core/v1/metadata/category/{categoryId}/status/{action}/brand/{brandId}` |
| GET | `get-reward-category` | `/api_gateway/rewards/core/v1/metadata/categories/brand/{brandId}` |
| GET | `get-all-rich-text-content-metadata-for-brand` | `/api_gateway/rewards/core/v1/brand/richContentMeta` |
| POST | `create-rich-content-meta` | `/api_gateway/rewards/core/v1/brand/richContentMeta` |
| PUT | `update-rich-content` | `/api_gateway/rewards/core/v1/brand/richContentMeta/{richcontentmetaID}` |
| POST | `post-issue-user-reward` | `/api_gateway/rewards/core/v1/user/reward/{rewardId}/issue` |
| POST | `issue-bulk-reward` | `/api_gateway/rewards/core/v1/user/rewards/issue` |
| GET | `get-rewards-for-user-new-api` | `/api_gateway/rewards/core/v1/user/userReward/brand/{brandName}` |
| GET | `get-user-brand-specific-rewards` | `/api_gateway/rewards/core/v1/user/reward/{rewardId}/brand/{brandName}` |
| GET | `get-reward-list` | `/api_gateway/rewards/core/v1/reward/list/brand/{brandID}` |
| GET | `get-brands-rewards` | `/api_gateway/rewards/core/v1/reward/brand/{brandId}` |
| GET | `get-available-brand-rewards` | `/api_gateway/rewards/core/v1/reward/brand/{brandId}/available` |
| GET | `get-transaction-details-by-reward-transaction-id` | `/api_gateway/rewards/core/v1/reward-transactions/{rewardTransactionId}` |
| GET | `get-reward-issue-transaction-details` | `/api_gateway/rewards/core/v1/management/customer/{customerId}/issuals/{rewardTransactionId}` |
| GET | `get-customer-reward-transactions` | `/api_gateway/rewards/core/v1/management/customer/{customerId}/issuals` |
| PUT | `update-fulfilment-status-and-txn-custom-fields` | `/api_gateway/rewards/core/v1/management/transactions` |
| GET | `get-custom-field` | `/api_gateway/rewards/core/v1/brand/customfield` |
| POST | `post-create-custom-field` | `/api_gateway/rewards/core/v1/brand/customfield` |
| PUT | `update-custom-field` | `/api_gateway/rewards/core/v1/brand/customfield/{id}` |
| GET | `get-rewards-group-by-id` | `/api_gateway/rewards/core/v1/group/{id}` |
| POST | `create-group-reward` | `/api_gateway/rewards/core/v1/group/create` |
| PUT | `update-group-reward` | `/api_gateway/rewards/core/v1/group/{id}` |
| GET | `get-group-rewards` | `/api_gateway/rewards/core/v1/group` |
| GET | `get-points-constraints` | `/api_gateway/rewards/core/v1/brand/constraints` |
| POST | `create-points-restriction` | `/api_gateway/rewards/core/v1/brand/constraints` |
| PUT | `update-points-restriction` | `/api_gateway/rewards/core/v1/brand/constraints` |
| POST | `organisation-level-configuration-for-rewards-catalog` | `/api_gateway/rewards/core/v1/brand/config` |
| GET | `retrieve-organisation-level-configuration-for-rewards-catalog` | `/api_gateway/rewards/core/v1/brand/{id}/getConfig` |
| POST | `createvendor` | `/api_gateway/rewards/core/v1/vendor/create` |
| PUT | `enable-disable-vendor` | `/api_gateway/rewards/core/v1/vendor/{vendorId}/status/{action}/brand/{brandId}` |
| GET | `get-vendor-explode-info` | `/api_gateway/rewards/core/v1/vendor/{vendorId}/details` |
| GET | `get-vendor-list-for-specific-brand` | `/api_gateway/rewards/core/v1/vendor/brand/{brandId}` |
| PUT | `update-vendor-redemption` | `/api_gateway/rewards/core/v1/vendor/redemption/{redemptionId}/brand/{brandId}` |
| GET | `get-vendor-redemptions-details` | `/api_gateway/rewards/core/v1/vendor/redemptions` |
| GET | `get-list-of-vendor-redemption-details-by-vendor-id` | `/api_gateway/rewards/core/v1/vendor/{vendorid}/redemption/{redemptionid}/brand/{brandid}` |
| GET | `get-vendor-redemption-details-by-brand-id-and-vendor-id` | `/api_gateway/rewards/core/v1/vendor/{vendorId}/redemption/brand/{brandId}` |
| POST | `post-images-to-file-service` | `/api_gateway/file-service/rewards/{fileNameWithExtension}` |
| GET | `get-fulfillment-status` | `/api_gateway/rewards/core/v1/fulfillmentStatus` |
| POST | `create-fulfillment-status` | `/api_gateway/rewards/core/v1/fulfillmentStatus` |
| PUT | `update-fulfillment-status` | `/api_gateway/rewards/core/v1/fulfillmentStatus` |
| GET | `get-reward-expiry-reminder` | `/api_gateway/rewards/core/v1/reward/expiryReminder` |
| POST | `create-reward-expiry-reminder` | `/api_gateway/rewards/core/v1/reward/expiryReminder` |
| PUT | `update-reward-expiry-reminder` | `/api_gateway/rewards/core/v1/reward/expiryReminder/{rewardExpiryReminderid}` |
| POST | `post-create-catalog-promotion` | `/api_gateway/rewards/core/v1/promotion/create` |
| GET | `get-catalog-promotion-details` | `/api_gateway/rewards/core/v1/promotion/{promotionId}/brand/{brandId}` |
| GET | `get-list-of-catalog-promotions` | `/api_gateway/rewards/core/v1/promotion/brand/{brandId}` |
| PUT | `put-update-catalog-promotion` | `/api_gateway/rewards/core/v1/promotion/{promotionId}/brand/{brandId}` |
| PUT | `put-disable-catalog-promotion` | `/api_gateway/rewards/core/v1/promotion/{promotionId}/status/false/brand/{brandId}` |
| POST | `issue-bulk-reward-connected-org` | `/v1.1/user/rewards/issue/` |
| GET | `get-all-available-rewards-for-user-in-a-connected-org` | `/api_gateway/rewards/core/v1.1/user/rewards` |
| GET | `get-all-reward-transactions-for-a-user-in-connected-orgs` | `/api_gateway/rewards/core/v1.1/reward-transactions` |
| GET | `get-transaction-details-by-reward-transaction-id-in-connected-orgs` | `/api_gateway/rewards/core/v1.1/reward-transactions/{rewardTransactionId}` |
| GET | `get-reward-details-by-id-in-a-connected-org` | `/v1.1/user/rewards/{rewardId}` |
| POST ⚠️ | `retrieve-brand-id` | `/api_gateway/rewards/core/v1/brand/getAll` |
| GET ⚠️ | `get-brand-rewards` | `/mobile/v2/api/marvel/reward/details` |
| GET ⚠️ | `get-user-rewards` | `/mobile/v2/api/marvel/r/vouchers/get` |
| POST ⚠️ | `issue-user-reward` | `/mobile/v2/api/marvel/reward/issue` |
| GET ⚠️ | `get-user-rewards-merge-details` | `/api_gateway/rewards/core/v1/user-merge` |
| POST ⚠️ | `merge-user-rewards` | `/api_gateway/rewards/core/v1/user-merge` |
| GET ⚠️ | `get-user-specific-reward-by-id` | `/api_gateway/rewards/core/v1/user/reward/{rewardId}/vouchers/brand/{brandName}` |
| GET ⚠️ | `get-user-reward` | `/api_gateway/rewards/core/v1/user/vouchers/brand/{brandName}` |
| POST ⚠️ | `claim-reward` | `/api_gateway/rewards/core/v1/reward/claim` |

> ⚠️ 9 pages not on the live site — includes mobile API endpoints and merge/claim utilities.

---

## 7. Target/Milestone — 6 pages

Connected-org milestone/streak enrollment and leaderboards.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| POST | `connectedorgs-enroll-customer-milestone-or-streak` | `/api_gateway/intouch-api-v3/v3.1/targetGroups/{targetGroupId}/targets/{targetId}/enroll` |
| POST | `connectedorgs-unenroll-customer-milestone-or-streak` | `/api_gateway/intouch-api-v3/v3.1/targetGroups/{targetGroupId}/targets/{targetId}/unEnroll` |
| GET | `connectedorgs-get-associated-target-groups-of-a-user` | `/api_gateway/intouch-api-v3/v3.1/users/{userId}/targetGroups` |
| GET | `get-user-ranks-across-target-groups` | `/api_gateway/intouch-api-v3/v3.1/leaderboards/user/{userID}` |
| GET | `get-top-ranked-users` | `/api_gateway/intouch-api-v3/v3.1/leaderboards/targetGroups/{targetGroupId}` |
| GET ⚠️ | `connectedorgs-get-promotion-list-for-a-customer` | `/v2.1/customers/lookup/promotionData` |

---

## 8. Cart Promotions — 21 pages

Cart promotion lifecycle, redemptions, earning, and evaluation.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| GET | `get-lock-unlock-pending-carts` | `/v1/promotions/customer/{customerId}/evaluations/pending_carts` |
| PUT | `post-cancel-cart-evaluation` | `/v1/promotions/customer/{customerId}/evaluation/{evaluationId}/cancel` |
| GET | `get-promotions-for-a-customer` | `/api_gateway/v1/promotions/customer/109943742` |
| POST | `issue-cart-promotion` | `/api_gateway/v1/promotions/{promotionId}/issueBulk` |
| POST | `redeem-cart-promotion` | `/api_gateway/v1/promotions/redemptions#` |
| GET | `get-cart-promotion-redemptions` | `/api_gateway/v1/promotions/redemptions` |
| GET | `get-promotions-code-api` | `/api_gateway/v1/promotions/code` |
| GET | `get-promotions-for-a-particular-till` | `/api_gateway/v1/promotions/till/{tillId}` |
| GET | `get-promotions-config-api` | `/api_gateway/v1/promotions/config` |
| POST | `post-promotions-code-link-api` | `/api_gateway/v1/promotions/{code}/link` |
| POST | `post-earn-promotions-in-bulk` | `/api_gateway/v1/promotions/earn/bulk` |
| POST | `earn-promotion` | `/api_gateway/v1/promotions/{promotionId}/earn` |
| POST ⚠️ | `add-promotion` | `/api_gateway/loyalty/v1/programs/{programId}/promotions/add/{promotionType}` |
| POST ⚠️ | `create-promotion-for-ucc` | `/api_gateway/loyalty/v1/programs/{programId}/createPromotion/{promotionType}` |
| GET ⚠️ | `get-promotion-details` | `/api_gateway/loyalty/v1/programs/promotions/list` |
| GET ⚠️ | `get-loyalty-promotion-list-for-a-program` | `/api_gateway/loyalty/v1/programs/{programId}/promotionsV2` |
| GET ⚠️ | `get-promotion-by-id` | `/api_gateway/loyalty/v1/programs/{programId}/promotions/{promotionId}/get` |
| POST ⚠️ | `set-promotion-settings` | `/v1/management/promotions/settings/strategy` |
| POST ⚠️ | `add-promotion-redemption` | `/api_gateway/v1/promotions/redemptions` |
| POST ⚠️ | `evaluate-promotion` | `/api_gateway/v1/promotions/evaluate` |
| POST ⚠️ | `post-revoke-earned-promotion` | `/api_gateway/v1/promotions/revokeEarn` |

> ⚠️ 9 pages not on the live site — mostly older loyalty program promotion APIs.

---

## 9. Points — 9 pages

Points ledger (connected-org), reward currency limits, and point allocation queries.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| GET | `connectedorgs-get-customer-ledger-info` | `/v2.1/pointsLedger/getCustomerLedgerInfo` |
| GET | `connectedorgs-get-customer-ledger-explode-info` | `/v2.1/pointsLedger/getLedgerExplodeInfo` |
| GET ⚠️ | `get-reward-currency-limits` | `/api_gateway/loyalty/v1/programs/{programId}/cappings` |
| POST ⚠️ | `create-reward-currency-limits` | `/api_gateway/loyalty/v1/programs/{programId}/cappings` |
| GET ⚠️ | `get-point-allocation-event-id-global` | `/x/neo/pointsAllocation/event` |
| GET ⚠️ | `retrieve-pointsaward-records-associated-with-a-specific-transaction-id` | `/x/neo/pointsAllocationId/transactionId` |
| GET ⚠️ | `get-allocated-points-details-with-expiry-in-specified-date-range-global` | `/x/neo/pointsAllocation/dateRange` |
| GET ⚠️ | `get-allocated-points-details-with-event-id` | `/das/getPaDetailsByEventId` |
| GET ⚠️ | `get-expired-points-for-a-customer` | `/das/getExpiredPointsByCustomerIdAndYear` |

> ⚠️ 7 pages not on the live site — internal DAS/NEO points allocation detail endpoints.

---

## 10. Audit logs — 1 page

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| GET | `get-entity-audit-logs` | `/api_gateway/v2/audits` |

---

## 11. Request workflow — 3 pages

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| PUT | `approve-or-reject-a-request` | `/api_gateway/v2/request-workflow/{requestType}` |
| GET | `get-all-requests` | `/api_gateway/v2/request-workflow/requests` |
| GET | `get-request-info` | `/api_gateway/v2/request-workflow/requests/{requestId}` |

---

## 12. Recommendations — 3 pages ⚠️

> Not present on the live site sidebar. All 3 endpoints are unverified.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| GET | `get-user-recommendations` | `/api_gateway/v1/recommendations/user` |
| GET | `get-item-recommendations` | `/api_gateway/v1/recommendations/item` |
| GET | `get-cart-recommendations` | `/api_gateway/v1/recommendations/cart` |

---

## 13. DAS — 1 page ⚠️

> Not present on the live site sidebar.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| GET | `retrieve-pa-id-for-specified-data-range` | `/das/getPAIdsForProvidedDateRange` |

---

## 14. Points (Event Logs) — 7 pages ⚠️

Internal DAS/NEO ledger explode detail endpoints — not present on the live site sidebar.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| GET | `get-event-log-ids-for-credit-debit` | `/das/getLedgerEntriesWithEventId` |
| GET | `get-event-log-ids-with-credit-or-debit-for-alternate-currency` | `/das/getACLedgerEntriesWithEventId` |
| GET | `get-custom-field-for-transaction-add-event` | `/das/getTransactionAddExplodeLedger` |
| GET | `get-point-redemption-details-for-redemption-events` | `/das/getPointsRedemptionExplodeLedger` |
| GET | `get-target-completion-details` | `/das/getTargetCompletedExplodeLedger` |
| GET | `get-manual-points-adjustment-details` | `/das/getManualPointsAdjustmentExplodeLedger` |
| GET | `get-ledger-information-for-event-log-ids` | `/x/neo/customer/ledgerDetails` |

---

## 15. Loyalty (Other) — 1 page ⚠️

> Not present on the live site sidebar.

| Method | Slug | HTTP Endpoint |
|--------|------|---------------|
| POST | `post_loyalty-api-v1-workflows-expjson-programid-eventtype` | `/loyalty/api/v1/workflows/expJSON/{programId}/{eventType}` |

---

## Pages Not on the Live Site (50 total)

These 50 pages exist in our docs but have no matching slug in `API_Reference_Structure.md`. They should be verified via the live site before keeping or removing.

| Group | Slug |
|-------|------|
| Customer Authentication | `regenerate-authentication-token-1` |
| Customer Authentication | `generate-authentication-token` |
| Customer Authentication | `generate-otp-1-1` |
| Customer Authentication | `validate-otp-2` |
| Customer Authentication | `validate-password-1` |
| Customer Authentication | `change-password-1` |
| Customer Authentication | `forget-password-1` |
| Coupon | `get-custom-fields-associated-with-coupon-redemption-global` |
| Coupon | `get-custom-fields-associated-with-coupon-redemption` |
| Badges | `v1-get-badges-org-meta` |
| Badges | `v1-create-badges-org-meta` |
| Badges | `v1-update-badges-org-meta` |
| Rewards Catalog | `retrieve-brand-id` |
| Rewards Catalog | `get-brand-rewards` |
| Rewards Catalog | `get-user-rewards` |
| Rewards Catalog | `issue-user-reward` |
| Rewards Catalog | `get-user-rewards-merge-details` |
| Rewards Catalog | `merge-user-rewards` |
| Rewards Catalog | `get-user-specific-reward-by-id` |
| Rewards Catalog | `get-user-reward` |
| Rewards Catalog | `claim-reward` |
| Rewards Catalog | `get-customer-reward-transactions` |
| Target/Milestone | `connectedorgs-get-promotion-list-for-a-customer` |
| Cart Promotions | `add-promotion` |
| Cart Promotions | `create-promotion-for-ucc` |
| Cart Promotions | `get-promotion-details` |
| Cart Promotions | `get-loyalty-promotion-list-for-a-program` |
| Cart Promotions | `get-promotion-by-id` |
| Cart Promotions | `set-promotion-settings` |
| Cart Promotions | `add-promotion-redemption` |
| Cart Promotions | `evaluate-promotion` |
| Cart Promotions | `post-revoke-earned-promotion` |
| Points | `get-reward-currency-limits` |
| Points | `create-reward-currency-limits` |
| Points | `get-point-allocation-event-id-global` |
| Points | `retrieve-pointsaward-records-associated-with-a-specific-transaction-id` |
| Points | `get-allocated-points-details-with-expiry-in-specified-date-range-global` |
| Points | `get-allocated-points-details-with-event-id` |
| Points | `get-expired-points-for-a-customer` |
| Recommendations | `get-user-recommendations` |
| Recommendations | `get-item-recommendations` |
| Recommendations | `get-cart-recommendations` |
| DAS | `retrieve-pa-id-for-specified-data-range` |
| Points (Event Logs) | `get-event-log-ids-for-credit-debit` |
| Points (Event Logs) | `get-event-log-ids-with-credit-or-debit-for-alternate-currency` |
| Points (Event Logs) | `get-custom-field-for-transaction-add-event` |
| Points (Event Logs) | `get-point-redemption-details-for-redemption-events` |
| Points (Event Logs) | `get-target-completion-details` |
| Points (Event Logs) | `get-manual-points-adjustment-details` |
| Points (Event Logs) | `get-ledger-information-for-event-log-ids` |
| Loyalty (Other) | `post_loyalty-api-v1-workflows-expjson-programid-eventtype` |
