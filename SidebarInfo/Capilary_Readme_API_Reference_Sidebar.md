# API Reference — Sidebar Structure


## Getting Started
_Path: `reference/apioverview`_

- Overview — `reference/apioverview`
- Authentication — `reference/authentication`
  - OAuth — `reference/oauth`
  - Basic authentication — `reference/basic-authentication`
  - Auth for consumer or end-customer apps — `reference/auth-for-consumer-or-end-customer-apps`
- Authorisation — `reference/authorisation`
- Rate limits — `reference/rate-limits`
- API status codes — `reference/errors-and-warnings`
- Timezone Management in APIs — `reference/timezone-management`
  - Overview — `reference/timezone-management-api-overview`
  - How Date and Time Values are Handled — `reference/handling-datetime-in-apis`
  - Exceptions and Known Limitations — `reference/exceptions-and-known-limitations`
  - List of APIs with Additional Timezone Fields — `reference/apis-updated-with-additional-timezone-fields`
  - FAQ — `reference/timezone-faq`
- Make Your First API Request — `reference/make-your-first-api-call`
- Idempotency — `reference/idempotency`
- API Reference Guide — `reference/api-reference-guide`

## Customer (V1)
_Path: `reference/customer`_

- `POST` Add Customer — `reference/add-customer`
- `PUT` Update customer details — `reference/update-customer-details_v1api`
- update-customer-identifiers — `reference/update-customer-identifiers`
- `GET` Search Customers _(deprecated)_ — `reference/search-customers`
- `GET` Get customer details — `reference/get-customer-details-v1api`
- `GET` Get Customer Transactions — `reference/get-customer-transactions`
- `GET` Get Customer Redemptions — `reference/get-customer-redemptions`
- `POST` Add/Update Customer Notes — `reference/addupdate-customer-notes`
- `GET` Get Customer Notes — `reference/get-customer-notes`
- `GET` Get Customer Interactions — `reference/get-customer-interactions`
- `GET` Get Referral Details — `reference/get-referral-details`
- `POST` Add/Update Customer Preferences — `reference/addupdate-customer-preferences`
- `GET` Get Customer Preferences — `reference/get-customer-preferences`
- `POST` Update Subscription Details — `reference/update_subscription_details`
- `GET` Get Subscription Details — `reference/get-subscription-details-1`
- `POST` Change identifier on Auth engine — `reference/change_identifier-on-auth-engine`

## Customer (V2)
_Path: `reference/customer-1`_

- `POST` Add Customer — `reference/v2-add-customer`
- `PUT` Update Customer Details — `reference/update-customer-detail`
- `POST` Add or Remove Customer Identifiers — `reference/update-identifiersissue-card`
- `POST` Associate Customer — `reference/associate-customer`
- `GET` Get Customer Details — `reference/get-customer-details-v2`
- `GET` Get customer hierarchy in a user group — `reference/customer-hierarchy`
- `PUT` Update association details — `reference/update-association-details`
- `GET` Search Customers — `reference/search-customers-1`
- `POST` Update Subscription Details — `reference/update-subscription-details`
- `GET` Get Subscription Details — `reference/get-subscription-details-1-1`
- `GET` Get Customer Tracker Details — `reference/get_v2-customers-customerid-trackers`
- `GET` Get Loyalty Events — `reference/get-loyalty-events`
- `GET` Get Loyalty Details — `reference/get-loyalty-details-1`
- `GET` Get Customer Tier — `reference/get-customer-tier`
- `GET` Get Detailed Customer Coupon Data — `reference/get-customer-coupons-detailed`
- `GET` Get Retro Requests — `reference/get-retro-requests`
- `GET` Get Identifier Change Requests — `reference/get-identifier-change-requests`
- `GET` Get Goodwill Requests — `reference/get-goodwill-requests`
- `POST` Add Customer Image — `reference/add-customer-image`
- `DEL` Delete Customer Image — `reference/delete-customer-image`
- `GET` Get Customer Status Log — `reference/get-status-log-1`
- `GET` Get Customer Subscription Log — `reference/get-customer-subscription-log`
- `GET` Get Customer Image — `reference/get-customer-image`
- `GET` Get user group customer tracker details — `reference/get-user-group-customer-tracker-details`
- `GET` Get customer transactions — `reference/v2api-get-customer-transactions`
- `GET` Get Customer Interactions — `reference/v2get-customer-interactions`
- Status codes — `reference/status-codes-customer`
- `POST` Manual Tier Adjustment — `reference/manual-tier-adjustment`

## Customer (V2 Lookup)
_Path: `reference/customer-lookup`_

- `PUT` Update Customer Details — `reference/update-customers-lookup`
- `GET` Get Customer Details — `reference/get-customer-details`
- `GET` Get Customer ID — `reference/get-customer-id`
- `PUT` Update Customer Status — `reference/update-customer-status`
- `GET` Get Subscription Details — `reference/get-subscription-details`
- `GET` Get Customer Loyalty Details — `reference/get-customer-loyalty-details`
- `GET` Get Retro Requests — `reference/lookup-get-retro-requests`
- `POST` Add Customer Image — `reference/set-customer-image-1`
- `GET` Get Referrals (Lookup) — `reference/get-referrals-lookup`
- `GET` Get Customer Recommendations — `reference/get-customer-recommendations`
- `GET` Get Points Balance — `reference/get_points_balance`
- `GET` Get Customer Tier — `reference/lookup-get-customer-tier`
- `GET` Get Points Conversion Schedule — `reference/lookup-get-points-conversion-schedule`
- `GET` Lookup Customer Transactions — `reference/get-customers-lookup-transactions`

## Customer Labels
_Path: `reference/customer-labels`_

- `POST` Add Labels — `reference/add-labels`
- `GET` Get All Customer Labels for the Org — `reference/get-org-labels`
- `POST` Tag Customers (to Labels) — `reference/tag-customers-to-labels`
- `GET` Get Customer Labels — `reference/get-customer-labels`
- `GET` Search Customers by Label — `reference/search-customers-by-labels`

## Transaction
_Path: `reference/transaction`_

- Transaction (V1) — `reference/transaction`
  - `POST` Add Transaction — `reference/add-transaction`
  - `POST` Add Transaction with Local Currency — `reference/add-transaction-with-local-currency`
  - `POST` Update Transaction Details — `reference/update-transaction-details`
  - `POST` Cancel Transaction Lineitem — `reference/cancel-transaction-lineitem`
  - `GET` Get Transaction Details — `reference/get_transaction_detailsv1`
  - `POST` Return Transaction — `reference/return-transaction`
  - `POST` Retro Transaction — `reference/retro-transaction`
- Transaction (V2) — `reference/transaction_apis`
  - `POST` Add/Return transaction (single) — `reference/add-transaction-single`
  - Add/Return Transaction in Bulk — `reference/addreturn-transaction-bulk`
  - `PUT` Update Transaction — `reference/update-transaction`
  - `PUT` Update Transactions in Bulk — `reference/update-transaction-bulk`
  - `GET` Get Transaction Details With ID — `reference/get-transaction-details`
  - `GET` Get transaction details using bill number — `reference/retrieve-transaction-details-with-bill-number`
  - `POST` Simulation transaction add — `reference/simulate_transactionadd`
  - `POST` Expose Evaluation log for an event — `reference/expose-evaluation-log-for-an-event`
  - Status codes — `reference/transaction-status-codes`
- Transaction rejection — `reference/getrejectedtransactions`
  - `GET` getRejectedTransactions — `reference/getrejectedtransactions`
  - `GET` getReTriggerStatus — `reference/getretriggerstatus`
  - `PUT` markFailed — `reference/markfailed`
  - `POST` retriggerTransactionAdd — `reference/retriggertransactionadd`

## Coupon
_Path: `reference/coupon-1`_

- Coupon (V1.1 APIs) — `reference/coupon-1`
  - `GET` Resend Coupon — `reference/resend-coupon`
  - `POST` Redeem Coupon — `reference/redeem-coupon`
  - `GET` Get Coupon details — `reference/get-coupon-detail`
  - `GET` Get Customer Coupons — `reference/get-customer-coupons`
  - `GET` Is Coupon Redeemable — `reference/is-coupon-redeemable`
  - `GET` Get Coupon series details — `reference/get-coupon-series-details-v1-api`
- Coupon (V2 APIs) — `reference/coupon`
  - `POST` Create coupon series — `reference/create-coupon-series`
  - `PUT` Update coupon series — `reference/update-coupon-series`
  - `GET` Get coupon series details — `reference/get-coupon-series-details`
  - `POST` Issue single coupon — `reference/issue-single-coupon`
  - `POST` Issue bulk coupons — `reference/issue-bulk-coupons`
  - `POST` Issue multiple coupons to a customer from a series — `reference/issue-bulk-coupon-with-count-from-series`
  - `POST` Redeem single coupon — `reference/redeem-single-coupon`
  - `POST` Redeem bulk coupons — `reference/redeem-bulk-coupons`
  - `GET` Check if coupon is Redeemable — `reference/check-if-coupon-is-redeemable`
  - `POST` Reactivate redeemed coupon — `reference/reactivate-redeemed-coupon`
  - `GET` Get coupon details — `reference/get-coupon-details`
  - `GET` Get All Customer Coupons — `reference/get-customer-coupons-basic`
  - `PUT` Update coupon redeem field — `reference/update-coupon-redeem-field`
  - `PUT` Update coupon code expiry date — `reference/update-coupon-code-expiry-date`
  - `POST` Revoke coupon — `reference/revoke-coupon`
- Coupon Upload (V1 APIs) — `reference/coupon-upload`
  - `POST` Upload Redeemed Coupons — `reference/upload-redeemed-coupons`
  - `GET` Get Uploaded Coupons' Status — `reference/get-uploaded-coupons-status`
  - `GET` Get Status of Redeemed Coupons — `reference/get-status-of-redeemed-coupons`
  - `POST` Upload Coupons (Batch) — `reference/upload-coupons-batch`

## Cards
_Path: `reference/cards`_

- `POST` Add Card Series — `reference/v2addcardseries`
- `POST` Generate Cards — `reference/generate-cards`
- `GET` Get Card Generation Log — `reference/get-card-generation-log`
- `POST` Add Card Number to a Card Series — `reference/add-card-number-to-series`
- `PUT` Update Card Details (Single) — `reference/update-card-details-single`
- `PUT` Update Card Details (Bulk) — `reference/update-card-details-bulk`
- `GET` Get Card Details — `reference/get-card-details`
- `GET` Get Status Log — `reference/get-status-log`
- `PUT` Generate Card External ID — `reference/generate-card-external-id`

## Points
_Path: `reference/points-v2-api`_

- Points (v2) — `reference/points-v2-api`
  - `POST` Request Goodwill points (Group) — `reference/get-goodwill-request-group`
  - `GET` Get Points Conversion Schedule — `reference/get-points-conversion-schedule`
  - `GET` Get Points Balance — `reference/get-points-balance`
  - `GET` Get Points Transfer Summary — `reference/get-points-transfer-summary`
  - `GET` Get Points Expiry Schedule (Light API) — `reference/get-points-expiry-schedule-light-api`
  - `GET` Get Points Expiry Schedule — `reference/get-points-expiry-schedule`
  - `POST` Check if Points Transferable — `reference/-customer-points-transferrable`
  - `POST` Transfer Customer Points — `reference/transfer-points-customer`
  - `GET` Get Points Transfer Details — `reference/get-points-transfer-details`
  - `POST` Redeem customer points — `reference/redeem-customer-points`
  - `POST` Reverse Redeemed Points — `reference/reverse-redeemed-points`
  - `POST` Group Points Transferable — `reference/group-points-transferrable`
  - `POST` Transfer Group Points — `reference/transfer-group-points`
  - `POST` Convert Promised Points — `reference/points-unlock-api`
  - `PUT` Update redeem points — `reference/update-redeem-points`
  - `POST` Deduct points and alternate currencies from user — `reference/deduct-points-and-alternatecurrencies-from-user`
  - `POST` Deduct points and alternate currencies from user using userId — `reference/deduct-points-and-alternatecurrencies-from-user-using-userid`
  - `POST` Update Currency Expiry — `reference/update-points-expiry`
  - `POST` Issue points or alternate currencies to customers — `reference/issue-reward-currency`
  - `GET` Get Single Points Expiry Updates — `reference/getsinglepointsexpiryupdates`
  - `POST` Get historical points — `reference/get_historical_points`
  - `POST` Create Historical Points Custom Fields — `reference/historicalpoints-savecustomfields`
  - `GET` Get Custom Fields — `reference/historicalpoints-getcustomfields`
  - `GET` Delete Custom Fields for Historical Points — `reference/historicalpoints-deletecustomfields`
- Points (v1.1) — `reference/points-v11-api`
  - `GET` Check If Points Redeemable — `reference/check-if-points-redeemable`
  - `GET` Issue Validation Code (to redeem points) — `reference/issue-validation-code`
  - `POST` Redeem Points — `reference/redeem-points`
- Points Ledger — `reference/points-ledger`
  - `GET` Get Customer Ledger Balance — `reference/get-customer-ledger-balance`
  - `GET` Get Points Ledger — `reference/get-ledger-information`
  - `GET` Get Points Ledger Explode Info — `reference/get-points-ledger-explode-info`
- Connected Org APIs — `reference/connectedorgs-get-customer-ledger-info`
  - `GET` Get Points Ledger Information in Connected Orgs — `reference/connectedorgs-get-customer-ledger-info`
  - `GET` Get Points Ledger Explode Info in Connected Orgs — `reference/connectedorgs-get-customer-ledger-explode-info`

## Search APIs
_Path: `reference/create-meta-search`_

- `POST` Create search filter — `reference/create-meta-search`
- `GET` Retrieve search criteria details — `reference/get-meta`
- `POST` Enable search index of older data — `reference/enable-bulk-trigger`
- `POST` Perform search — `reference/perform-search`
- `DEL` Deactivate search criteria — `reference/deactivate-search-criteria`
- `POST` Create Data Field — `reference/create-data-field`
- `PUT` Update Data Field — `reference/put-data-field-api`
- `GET` Get Data Field Detail — `reference/get-data-field-detail-api`
- `POST` Perform Search (Cortex API) — `reference/search-api-cortex-api`
- Event Transformation for Cortex Search — `reference/event-transformation-using-neo`
  - Use Case — `reference/use-case-1`
  - Quick Start — `reference/quick-start-event-transform-cortex-search`
  - `POST` Enable or Update Custom Event Tranformation — `reference/enable-custom-event-for-cortex-search`
  - `GET` Retrieve Custom Event Config Details for an Entity — `reference/retrieve-custom-event-config-details-for-entity`
  - `GET` Retrieve Custom Event Config Details of Org — `reference/retrieve-custom-event-config-details-of-org`
  - FAQs — `reference/event-tranform-cortex-search-faq`
  - Best Practices — `reference/best-practices-7`

## Badges
_Path: `reference/badges`_

- `POST` Create badges — `reference/create-badges-org`
  - Fixed Window Restriction in Badges — `reference/fixed-window-use-case`
- `PUT` Update badges — `reference/update-badges`
- `GET` Get badge by ID — `reference/get-badge-by-id`
- `GET` Get all badges — `reference/get-all-badges`
- `GET` Get fixed window details — `reference/get-fixed-window-details`
- `POST` Claim badge — `reference/claim-badge`
- `POST` Unclaim badge — `reference/unclaim-badge`
- `PUT` Update activation status of badge — `reference/update-the-activation-status-of-badge`
- `POST` Enrol customers for badges — `reference/enrol-customers-for-badges`
- `POST` Issue badge (earn) — `reference/issue-badge-to-the-customer`
  - Multiple Badge Issuances — `reference/multiple-badge-issuances`
- `POST` Issue badge to multiple customers — `reference/issue-badge-to-multiple-customers`
- `POST` Import earned (issued) badges of customer — `reference/import-earned-badges-of-customer`
- `POST` Revoke enrolled badges — `reference/revoke-enrolment-of-a-badge`
- `POST` Revoke issued badge — `reference/revoke-issual-of-a-badge`
- `GET` Get badges for customer — `reference/get-badges-for-customer`
- `GET` Get all customer badges — `reference/get-all-customer-badges`
- `GET` Get individual badge details of a customer — `reference/get-individual-badge-details-of-a-customer`
- `POST` Create badges group — `reference/create-badges-group`
- `PUT` Update badges group — `reference/update-badges-group`
- `GET` Get badge group by ID — `reference/get-group-by-id`
- `GET` Get all groups — `reference/get-all-groups`
- `POST` Create custom field for badges — `reference/create-custom-field`
- `PUT` Update badge custom field — `reference/update-custom-field-badge`
- `GET` Get badge custom field by ID — `reference/get-custom-field-by-id`
- `GET` Get all badge custom fields — `reference/get-all-custom-fields`

## Rewards Catalog
_Path: `reference/rewards-catalog-api`_

- Reward Catalog Management — `reference/post-create-reward`
  - `POST` Create Reward — `reference/post-create-reward`
  - `PUT` Update Reward — `reference/put-update-reward`
  - `GET` Get reward details by ID — `reference/get-reward-details-by-id`
  - Adding revenue metadata against a reward — `reference/adding-revenue-metadata-against-a-reward`
- Reward Catalog Categories — `reference/create-reward-category`
  - `POST` Create Reward Category — `reference/create-reward-category`
  - `PUT` Enable or Disable Reward Categories — `reference/enable-or-disable-reward-categories`
  - `GET` Get Reward Category — `reference/get-reward-category`
- Rich Text Content for Rewards — `reference/create-rich-content-meta`
  - `POST` Create Rich Text Content Metadata for Rewards — `reference/create-rich-content-meta`
  - `PUT` Update Rich Text Content Metadata for Rewards — `reference/update-rich-content`
  - `GET` Get all Rich Text Content Metadata for specific brand — `reference/get-all-rich-text-content-metadata-for-brand`
  - `POST` Adding Rich Text Content field for Reward — `reference/adding-rich-text-content-metadata`
- Reward Catalog Issuance — `reference/post-issue-user-reward`
  - `POST` Issue single reward — `reference/post-issue-user-reward`
  - Reward Issuance with Quantity and Redemption Value Details — `reference/reward-issuance-with-quantity-and-calculation-scenarios`
  - `POST` Issue bulk reward — `reference/issue-bulk-reward`
  - Idempotency Check for Issuing Reward — `reference/idempotency-check-for-issuing-reward`
- Reward State Management — `reference/reward-state-management`
  - `POST` Revoke User Reward — `reference/revoke-user-reward`
- User-Centric Reward Queries — `reference/get-rewards-for-user`
  - `GET` Get rewards for user — `reference/get-rewards-for-user`
  - `GET` Get customer reward transactions — `reference/get-all-reward-transactions-for-a-user`
  - `GET` Get Reward Transaction Details using Reward Transaction ID — `reference/get-transaction-details-by-reward-transaction-id`
  - `GET` Get Purchased Rewards for User (New API) — `reference/get-rewards-for-user-new-api`
  - `GET` Get available reward details for user by id — `reference/get-user-brand-specific-rewards`
- Brand-Level Reward Queries — `reference/get-reward-list`
  - `GET` Get all brand rewards using Brand ID — `reference/get-reward-list`
  - `GET` Get Brand Rewards — `reference/get-brands-rewards`
  - `GET` Get available brand rewards — `reference/get-available-brand-rewards`
  - `GET` Get Transaction Details by Customer ID and Reward Transaction ID — `reference/get-reward-issue-transaction-details`
- Reward Catalog Promotions — `reference/post-create-catalog-promotion`
  - `POST` Create catalog promotion — `reference/post-create-catalog-promotion`
  - `PUT` Update catalog promotion — `reference/put-update-catalog-promotion`
  - `GET` Get catalog promotion details — `reference/get-catalog-promotion-details`
  - `GET` Get list of Catalog promotions — `reference/get-list-of-catalog-promotions`
  - `PUT` Disable Catalog promotion — `reference/put-disable-catalog-promotion`
- Reward Catalog Custom Fields — `reference/post-create-custom-field`
  - `POST` Create custom field for reward — `reference/post-create-custom-field`
  - `PUT` Update reward custom field — `reference/update-custom-field`
  - `GET` Get all custom fields — `reference/get-custom-field`
- Reward Catalog Groups — `reference/create-group-reward`
  - `POST` Groups - Create reward group — `reference/create-group-reward`
  - `PUT` Groups - Update rewards group — `reference/update-group-reward`
  - `GET` Groups - Get all rewards group — `reference/get-group-rewards`
  - `GET` Groups - Get rewards group by ID — `reference/get-rewards-group-by-id`
- Points Restrictions — `reference/create-points-restriction`
  - `POST` Points Restrictions - Create points restriction — `reference/create-points-restriction`
  - `PUT` Points - Update points restriction — `reference/update-points-restriction`
  - `GET` Points - Get points constraints — `reference/get-points-constraints`
- Organization-Level Configuration — `reference/organisation-level-configuration-for-rewards-catalog`
  - `POST` Organisation Level Configuration for Rewards Catalog — `reference/organisation-level-configuration-for-rewards-catalog`
  - `GET` Get Organisation Level Configuration — `reference/retrieve-organisation-level-configuration-for-rewards-catalog`
- Vendor Management & Redemption — `reference/createvendor`
  - `POST` Create a Vendor — `reference/createvendor`
  - `PUT` Update Vendor Metadata — `reference/update-vendor-metadata`
  - `PUT` Enable or Disable a Vendor — `reference/enable-disable-vendor`
  - `GET` Get Vendor Details — `reference/get-vendor-explode-info`
  - `GET` Vendor List for Specific Brand — `reference/get-vendor-list-for-specific-brand`
  - `POST` Create Vendor Redemption — `reference/create-vendor-redemption-1`
  - `PUT` Update Vendor Redemption — `reference/update-vendor-redemption`
  - `GET` Get all vendor redemptions — `reference/get-vendor-redemptions-details`
  - `GET` Vendor Redemption Details by Redemption & Vendor ID — `reference/get-list-of-vendor-redemption-details-by-vendor-id`
  - `GET` Vendor Redemption Details by Brand ID and Vendor ID — `reference/get-vendor-redemption-details-by-brand-id-and-vendor-id`
- File Service — `reference/post-images-to-file-service`
  - `POST` Upload images to file service — `reference/post-images-to-file-service`
- Fulfillment Status — `reference/create-fulfillment-status`
  - `POST` Create fulfillment status — `reference/create-fulfillment-status`
  - `PUT` Update fulfillment status — `reference/update-fulfillment-status`
  - `GET` Get fulfillment status — `reference/get-fulfillment-status`
  - `PUT` Update fulfillment status and transaction custom fields for issued rewards — `reference/update-fulfilment-status-and-txn-custom-fields`
- Reward Expiry Reminders — `reference/create-reward-expiry-reminder`
  - `POST` Create Reward Expiry Reminder — `reference/create-reward-expiry-reminder`
  - `PUT` Update Reward Expiry Reminder — `reference/update-reward-expiry-reminder`
  - `GET` Get Reward Expiry Reminder — `reference/get-reward-expiry-reminder`
- Connected-Org APIs — `reference/issue-bulk-reward-connected-org`
  - `POST` Issue Reward in connected orgs — `reference/issue-bulk-reward-connected-org`
  - `GET` Get all available rewards for user in connected orgs — `reference/get-all-available-rewards-for-user-in-a-connected-org`
  - `GET` Get all reward transactions for a user in connected orgs — `reference/get-all-reward-transactions-for-a-user-in-connected-orgs`
  - `GET` Get Transaction Details by Reward Transaction ID in Connected orgs — `reference/get-transaction-details-by-reward-transaction-id-in-connected-orgs`
  - `GET` Get Purchased Rewards for User in Connected Orgs — `reference/get-purchased-rewards-for-user-connected-org`
  - `GET` Get reward details by ID in connected orgs — `reference/get-reward-details-by-id-in-a-connected-org`
- Language — `reference/language`
  - `POST` Create Language Metadata for Rewards — `reference/create_language_metadata`
  - `GET` Get All Language Metadata — `reference/get_all_languages`
  - `PUT` Enable Language for Rewards — `reference/enable_disable_languagemetadata`
  - `PUT` Disable Language for Rewards — `reference/putapi_gatewayrewardscorev1metadatalanguage12statusdisable`

## Target/Milestone
_Path: `reference/target-milestones`_

- Milestone & Streaks APIs _(deprecated)_ — `reference/target-group-1`
- User-Created Challenges — `reference/user-created-challenges`
- Connected Org APIs — `reference/connected-org-apis`
  - `POST` Enroll/Re-Enroll a Customer to a Milestone or Streak — `reference/connectedorgs-enroll-customer-milestone-or-streak`
  - `POST` Unenroll a Customer to from Milestone or Streak — `reference/connectedorgs-unenroll-customer-milestone-or-streak`
  - `GET` Get Associated Target Groups of a User — `reference/connectedorgs-get-associated-target-groups-of-a-user`
  - Data Scopes — `reference/connected-orgs-data-scopes`
- Leaderboards — `reference/leaderboards`
  - `GET` Get top ranked users — `reference/get-top-ranked-users`
  - `GET` Get user rank across target groups — `reference/get-user-ranks-across-target-groups`

## Loyalty Promotions
_Path: `reference/loyalty-promotions`_

- `POST` Create a Loyalty Promotion — `reference/create-a-loyalty-promotion`
- `PUT` Update Promotion Status — `reference/submit-promotion-for-approval`
- `POST` Review a Loyalty Promotion — `reference/review-loyalty-promotion`
- `POST` Enrol Members to a Loyalty Promotion — `reference/enrol-loyalty-promotion`
- `PUT` Update a Loyalty Promotion — `reference/update-loyalty-promotion`
- `GET` Get Details of Loyalty Promotion using ID — `reference/get-loyalty-promotion-id`
- `GET` Get Details of all Loyalty Promotions — `reference/get-loyalty-promotion-all`
- `GET` List Member Promotions — `reference/list-member-promotions`
- `GET` Get Member Promotion Explode Details — `reference/list-member-promotions-explode`
- `GET` Get Customer Promotion Details — `reference/get-customer-promotion-details`
- `POST` Revoke a Loyalty Promotion — `reference/revoke-a-loyalty-promotion`

## Cart Promotions
_Path: `reference/loyalty-cart-promotions`_

- `POST` Create Cart Promotions — `reference/create-cart-promotion-api`
- `PUT` Update Cart Promotion — `reference/update-cart-promotion-details_`
- `POST` Issue Cart Promotion — `reference/issue-cart-promotion`
- `GET` Get Cart Promotion Redemptions — `reference/get-cart-promotion-redemptions`
- `POST` Activate Promotion for Customer — `reference/post_api-gateway-v1-promotions-promotionid-activate`
- `PUT` Activate Cart Promotion — `reference/activate-global-promotions`
- `GET` Get Cart Promotion Details using Code & Promotion mode — `reference/get-promotions-code-api`
- `POST` Deactivate Cart Promotion for Customer — `reference/post_api-gateway-v1-promotions-promotionid-deactivate`
- `PUT` Deactivate Cart Promotion — `reference/deactivate-global-promotion`
- `GET` Get Cart Promotions for a particular till — `reference/get-promotions-for-a-particular-till`
- `GET` Get Pending Carts Details (Cart Promotion) — `reference/get-lock-unlock-pending-carts`
- `GET` Get Cart Promotions Configurations Using Promotion ID — `reference/get-promotions-config-api`
- `GET` Get Cart Promotions available for a Customer — `reference/get-promotions-for-a-customer`
- `POST` Earn Cart Promotion — `reference/earn-promotion`
- `POST` Revoke Earned Cart Promotion — `reference/revoke-earned-promotion`
- `POST` Earn Cart Promotions in Bulk — `reference/post-earn-promotions-in-bulk`
- `POST` Evaluate Promotions — `reference/post_api-gateway-v1-promotions-evaluate`
- `PUT` Cancel Cart Evaluation - Cart Promotion — `reference/post-cancel-cart-evaluation`
- `POST` Link Cart Promotion Code to the Customer ID — `reference/post-promotions-code-link-api`
- `POST` Redeem Cart Promotion — `reference/redeem-cart-promotion`
- `GET` Get Cart Promotions (GET) — `reference/get_all_cart_promotion_details_`

## User Group
_Path: `reference/add-group`_

- `POST` Add User Group — `reference/add-group`
- `PUT` Update User Group — `reference/update-user-group`
- `POST` Deduct points and alternate currencies from user group — `reference/deduct-points-and-alternatecurrencies-from-user-group`
- `GET` Search user groups by name, ID, and mobile number — `reference/get-user-group-details`
- `DEL` Delete User Group — `reference/delete-user-group`
- `POST` Join Member to Group — `reference/join-member-to-group`
- `DEL` Remove group member — `reference/remove-group-member`
- `POST` Transfer Group Member — `reference/transfer-group-member`
- `GET` Get group transactions — `reference/get-group-transactions`
- `GET` Retrieve user group members list — `reference/retrieve-user-group-member-details`
- `GET` Retrieve user group member details — `reference/retrieve-primary-secondary-member-details`
- `GET` Retrieve group slab/tier log history — `reference/retrieve-group-tier-log-history`
- `GET` Retrieve points expiry schedule of a group — `reference/get-points-expiry-schedule-of-a-group`
- `GET` Retrieve points conversion schedule — `reference/retrieve-points-conversion-schedule`
- Status codes — `reference/user-group-status-codes`
- `PUT` Update permissions — `reference/update-user-group-permission`
- `POST` Search for groups using the extended fields — `reference/search-for-groups-using-the-extended-fields`
- `GET` Get group points ledger — `reference/get-group-points-ledger`

## Organization
_Path: `reference/organization`_

- Organization (V1) — `reference/organization`
  - `GET` Get Org Details — `reference/get-org-details`
  - `GET` Get Org Entities — `reference/get-org-entities`
  - `GET` Get Org Configurations — `reference/get-org-configurations`
  - `GET` Get Org Statistics _(deprecated)_ — `reference/get-org-statistics`
  - `GET` Get Org Custom Fields — `reference/get-org-custom-fields-1`
  - `POST` Retrieve Brand ID — `reference/retrieve-brand-id`
  - `GET` Get Org Payment Modes — `reference/get-org-payment-modes`
- Organization (V2) — `reference/organization-api`
  - `POST` Add Till — `reference/add-till-with-new-custom-fields`
  - `POST` Set Organisation Configuration — `reference/limit-active-cards-per-customer`
  - `PUT` Update Till with Custom Fields — `reference/update-till-with-custom-field-info`
  - `GET` Get Custom Fields — `reference/get-org-custom-fields`
  - `GET` Get Config Key Values — `reference/get-organization-configs`
  - `GET` Get org till details — `reference/get-tills`
  - `GET` Get Active Tills — `reference/get-active-tills`
  - `GET` Get Loyalty Programs — `reference/get-loyalty-programs`
  - `GET` Retrieve org hierarchy details — `reference/retrieve-org-hierarchy-details`
  - `GET` Get Till ID Details — `reference/get-till-id-details`

## Product
_Path: `reference/product-v2-apis`_

- Product APIs (v2) — `reference/product-v2-apis`
  - `POST` Add Brands — `reference/post_v2-product-brands`
  - `PUT` Update Brands — `reference/put_v2-product-brands`
  - `GET` Get/Search Brands — `reference/get_v2-product-brands`
  - `POST` Add Categories — `reference/post_v2-product-categories`
  - `PUT` Update Categories — `reference/put_v2-product-categories`
  - `GET` Get/Search Categories — `reference/get_v2-product-categories`
  - `POST` Add Attributes — `reference/add_product_attributes_v2`
  - `PUT` Update Attributes — `reference/put_v2-product-attributes`
  - `GET` Get/Search Attributes — `reference/get_v2-product-attributes`
  - `POST` Add Attribute Values — `reference/add_product_attribute_values_v2`
  - `PUT` Update Attribute Values — `reference/put_v2-product-attributevalues`
  - `GET` Get/Search Attribute Values — `reference/get_v2-product-attributes-attributeid-values`
  - `POST` Add SKUs — `reference/post_v2-product-skus`
  - `PUT` Update SKUs — `reference/put_v2-product-skus`
  - `GET` Get/Search Product SKUs — `reference/get_v2-product-skus`
  - `POST` Create Labels — `reference/create-labels`
  - `PUT` Update labels — `reference/update-labels`
  - `GET` Get/Search labels — `reference/get-labels`
  - `POST` Create label assignments — `reference/create-label-assignments`
  - `PUT` Update label assignments — `reference/update-label-assignments`
  - `GET` Get label assignments — `reference/get-label-assignments`
  - `GET` Search Label Assignments — `reference/search-label-assignments`
  - `DEL` Remove label assignments — `reference/remove-label-assignments`
- Product APIs (v1) — `reference/v1-apis`
  - `POST` Add Product _(deprecated)_ — `reference/add-product`
  - `GET` Get Product Attributes _(deprecated)_ — `reference/get-product-attributes`
  - `GET` Get Product Brands _(deprecated)_ — `reference/get-product-brands`
  - `GET` Get Product Categories _(deprecated)_ — `reference/get-product-categories`
  - `GET` Get Product Colors _(deprecated)_ — `reference/get-product-colors`
  - `GET` Get Product Details _(deprecated)_ — `reference/get-product-details`
  - `GET` Get Product Meta Sizes _(deprecated)_ — `reference/get-product-meta-sizes`
  - `GET` Get Product Sizes _(deprecated)_ — `reference/get-product-sizes`
  - `GET` Search Products _(deprecated)_ — `reference/search-products`
  - Response codes _(deprecated)_ — `reference/response-codes-1`

## Store
_Path: `reference/store-apis-v1`_

- Store APIs (v1) — `reference/store-apis-v1`
  - `POST` Add Store — `reference/add-store`
  - `POST` Add Store in bulk — `reference/add-store-in-bulk`
  - `PUT` Update Bulk Stores — `reference/put_v2-orgentity-store-bulk`
  - `GET` Get Store Configurations — `reference/get-store-configurations`
  - `GET` Get Store Details — `reference/get-store-details`
  - `GET` Get Store Reports — `reference/get-store-reports`
  - `GET` Get Store Staff Details — `reference/get-store-staff-details`
  - `GET` Get Store Tasks — `reference/get-store-tasks`
  - `POST` Upload Store Reports — `reference/upload-store-reports`
  - `GET` Verify Login Credentials — `reference/verify-login-credentials`
  - `POST` Upload Store Logs _(deprecated)_ — `reference/upload-store-logs`

## Store Locator API
_Path: `reference/store-locator-api`_

- Overview — `reference/overview`
- `POST` Authentication Token — `reference/generateauthtoken`
- `GET` Locate nearby stores — `reference/getstorelocatorv1brandnearbystores`
- `GET` Retrieve Organization Sync Data — `reference/getintegrationv1syncorg7borgid7d`
- `POST` Store Locator Custom Fields — `reference/postintegrationv1brand7bbrandid7dstorelocatorcustomfieldsmap`
- `GET` Retrieve Mapped Custom Field — `reference/getintegrationv1brand119storelocatorcustomfieldsmap`

## Communications (v2)
_Path: `reference/v2-send-communication-message`_

- `POST` Send communication message — `reference/v2-send-communication-message`
- `POST` Resend a communication message — `reference/post_v2-communications-resend`
- Error code — `reference/error-code-copy`

## Communications (v1)
_Path: `reference/communications`_

- `POST` Send communication message — `reference/send-communication-message`
- Error code — `reference/error-code`

## Custom Fields
_Path: `reference/create-a-custom-field`_

- `POST` Create a Custom Field — `reference/create-a-custom-field`
- `GET` Get Custom Fields — `reference/get-custom-fields`
- `POST` Tag Custom Field to an Entity — `reference/tag-custom-field-to-an-entity`

## Audit logs
_Path: `reference/audit-logs`_

- `GET` Get audit logs of entities — `reference/get-entity-audit-logs`
- `GET` Get Audit Logs by Event Name — `reference/get-audit-logs`

## PII deletion
_Path: `reference/pii-deletion`_

- `POST` Add a PII deletion request — `reference/add-a-pii-deletion-request`
- `PUT` Update PII deletion status — `reference/update-pii-deletion-status`
- `GET` Retrieve request status of PII deletion — `reference/retrieve-pii-deletion-request-status`
- `GET` Retrieve Request Details using Type and Subtype — `reference/retrieve-pii-deletion-request-details`
- Error codes — `reference/pii-deletion-error-codes`

## Leads
_Path: `reference/leads`_

- `PATCH` Add Lead — `reference/add-lead-1`
- `POST` Add Lead Substatus — `reference/create-lead-substatus`
- `PUT` Update Lead Status — `reference/update-lead-status`
- `POST` Update Lead Followups — `reference/update-lead-followups`
- `PUT` Update Lead — `reference/update-lead`
- `POST` Configure lead reasons — `reference/set-lead-reasons`
- `GET` Get Lead Status Log — `reference/get-lead-status-log`
- `GET` Get Lead follow-ups — `reference/get-lead-follow-ups`
- `GET` Get Lead Reasons — `reference/get-lead-reasons`
- `GET` Get Lead Details — `reference/get-lead-details`
- `GET` Get Lead Substatus — `reference/get-lead-substatus`
- `GET` Search lead — `reference/search-lead`
- `GET` Assign Lead — `reference/assign-lead`

## Staff
_Path: `reference/staff`_

- `POST` Add Staff Account _(deprecated)_ — `reference/add-staff-account`
- `POST` Get Access Token _(deprecated)_ — `reference/get-access-token`
- `POST` Edit Staff Details _(deprecated)_ — `reference/edit-staff-details`
- `GET` Get Staff Details _(deprecated)_ — `reference/get-staff-details`
- `POST` Change Account Password _(deprecated)_ — `reference/change-account-password`
- `POST` Send OTP _(deprecated)_ — `reference/send-otp`
- `POST` Validate OTP _(deprecated)_ — `reference/validate-otp-1`
- `POST` Change Identifier (Send OTP) _(deprecated)_ — `reference/change-identifier-send-otp`
- `POST` Change Identifier (Validate OTP) _(deprecated)_ — `reference/change-identifier-validate-otp`
- `POST` Transfer Staff User _(deprecated)_ — `reference/transfer-staff-user`
- `GET` Get Staff of Store/Zone _(deprecated)_ — `reference/get-staff-of-storezone`
- `GET` Logout Staff Account _(deprecated)_ — `reference/logout-staff-account`
- `POST` Remove Staff Account _(deprecated)_ — `reference/remove-staff-account`

## Behavioral Events
_Path: `reference/behavioral-events-and-status-code`_

- `POST` Create Event (Custom) — `reference/create-event-custom-be`
- `PUT` Update Event (Custom) — `reference/update-event-custom`
- `GET` Get Org Events — `reference/get-org-all-events`
- `GET` Get Running Events Status — `reference/get-running-event-status`
- `GET` Get Customer Events — `reference/get-customer-events-data`
- `PUT` Disable Event — `reference/disable-event`
- `POST` Add Webhook — `reference/add-webhook`
- Get Org Webhooks — `reference/get-webhook-details`
- `GET` Get Events Logs — `reference/get-events-logs`
- `GET` Get Events Meta — `reference/get-events-meta`
- `GET` Get event data using request ID — `reference/get-specific-event-data`
- `GET` Search events — `reference/search-events`
- `POST` Post Event — `reference/post-event`

## Event notification logs
_Path: `reference/event-logs`_

- `POST` Add Webhook — `reference/add-v3-webhooks`
- `GET` Get Webhook — `reference/get-v3-webhooks`
- `PUT` Update Webhook — `reference/update-v3-webhook`
- `DEL` Delete Webhook — `reference/delete-v3-webhook`
- `GET` Get Event Log (by Request ID) — `reference/get-event-log-by-request-id-`
- `GET` Get Event Log (by Reference ID) — `reference/get-event-log-by-reference-id-`
- `GET` Get Event Log (by Event ID) _(deprecated)_ — `reference/get-event-log-by-event-id`
- `GET` Get Event Logs by Webhook ID — `reference/geteventsbyconsumergroupid`
- `GET` Get Event Matrix by Webhook ID — `reference/geteventmatrix`
- Response code — `reference/response-codes`

## Company
_Path: `reference/company-1`_

- `POST` Add Company — `reference/add-company`
- `PUT` Update Company — `reference/update-company`
- `GET` Get Company Details — `reference/get-company-details`
- `DEL` Remove Company — `reference/remove-company`
- `GET` Get Org Companies — `reference/get-org-companies`
- `GET` Get Companies by Extended Field Values — `reference/get-companies-by-extended-field-values`

## Request (V1)
_Path: `reference/request`_

- `POST` Add Request — `reference/add-request`
- `POST` Approve Requests — `reference/approve-requests`
- `POST` Reject Requests — `reference/reject-requests`
- `GET` Get Request Details — `reference/get-request-details`
- `GET` Get Request Logs — `reference/get-request-log`

## Requests (V2)
_Path: `reference/requests`_

- `POST` Add Request — `reference/add-request-transaction-customer-merge`
- `PUT` Update Request — `reference/update-transaction-customer-merge-request`
- `GET` Retrieve Request Status using ID — `reference/retrieve-transaction-customer-merge-request-status`
- `GET` Retrieve Request Details using Type and Subtype — `reference/retrieve-transaction-customer-merge-request-details`
- Status event notification — `reference/request-event-notification`
- Error codes — `reference/error-codes`

## Request workflow
_Path: `reference/request-workflow`_

- Create a request — `reference/create-a-request`
  - `POST` Change customer status request — `reference/change-customer-status`
  - `POST` Points redemption request — `reference/points-redemption`
  - `POST` Issue goodwill points request — `reference/issue-goodwill-points`
  - `POST` Issue/Earn badge request — `reference/earn-badge-issue-badge-to-single-customercustomer-earns-the-badge`
  - `POST` Enrol customers for badges — `reference/issue-badge-enrol-customers-for-badges`
  - `POST` Retro transaction - Claim transaction — `reference/retro-transaction-claim-transaction`
- `PUT` Approve or reject a request — `reference/approve-or-reject-a-request`
- `GET` Get details of all requests — `reference/get-all-requests`
- `GET` Get details of a particular request — `reference/get-request-info`
- Error codes — `reference/error-codes-request-workflow`

## Partner Program
_Path: `reference/partner-program`_

- `POST` Link Customer to Partner Program — `reference/link-customer-to-partner-program__`
- `POST` Update Customer Tier — `reference/update-customer`
- `POST` Delink Customer — `reference/delink-customer`
- `GET` Get customer activity history — `reference/customeractivityhistories`

## User Authentication
_Path: `reference/user-authentication`_

- `POST` Register User — `reference/register-users`
- `POST` Authorize User — `reference/authorize-user`
- `PUT` Update Password — `reference/update-password`

## OTP
_Path: `reference/otp`_

- `POST` Generate OTP — `reference/generate-otp`
  - OTP template guidelines — `reference/otp-template-guidelines`
- `POST` Validate OTP — `reference/validate-otp`
- `GET` Get OTP — `reference/get-otp`
- Success and error codes — `reference/success-and-error-codes`

## Task
_Path: `reference/task`_

- `POST` Add Tasks — `reference/add-tasks`
- `POST` Update Tasks — `reference/update-tasks`
- `GET` Get Tasks Metadata — `reference/get-tasks-metadata`
- `GET` Get Task Logs — `reference/get-task-logs`
- `POST` Update Status Mappings — `reference/update-status-mappings`
- `GET` Get Status Mappings — `reference/get-status-mappings`
- `GET` Get Task Reminders — `reference/get-task-reminders`
- `POST` Create/Update Task Reminders — `reference/createupdate-task-reminders`
- `GET` Retrieve Individual Task Details — `reference/retrieve-individual-task-details`

## Customer Authentication (Web/Mobile)
_Path: `reference/first-factor-authentication`_

- First factor authentication — `reference/generate-authentication-tokenapi`
  - `POST` Generate Authentication Token — `reference/generate-authentication-tokenapi`
  - `POST` Generate OTP — `reference/generate-otp-api`
  - `POST` Validate OTP — `reference/validate-otp-api`
  - `POST` Validate Password — `reference/validate-password`
  - `POST` Regenerate Authentication Token — `reference/regenerate-authentication-token`
  - `POST` Change Password — `reference/change-password`
  - `POST` Forget Password — `reference/forget-password`
  - Status codes — `reference/status-codes`
- Multi-factor authentication — `reference/multi-factor-authentication`
  - `POST` Generate MFA token — `reference/generate-mfa-token`
  - `POST` Generate MFA OTP — `reference/generate-otp-mfa`
  - `POST` Validate MFA OTP — `reference/validate-mfa-otp`
  - MFA password flow — `reference/mfa-password-flow`
    - `POST` Validate password — `reference/validate-mfa-password`
    - `POST` Change password — `reference/change-mfa-password`
    - `POST` Forgot password — `reference/mfa-forgot-password`
  - `POST` Regenerate token — `reference/regenerate-token`
  - `POST` Check if MFA is Registered — `reference/check-if-mfa-is-registered`
  - `DEL` Delete token — `reference/delete-token`
- Authentication configurations — `reference/authentication-configurations`

## Referral
_Path: `reference/refer-customer`_

- `POST` Refer Customer — `reference/refer-customer`
- `GET` Add Referrals — `reference/get-referrals`
- `GET` Validate Referral Code — `reference/validate-referral-code`

## Connect+ DIY Template APIs
_Path: `reference/diy-template-apis`_

- `POST` Create DIY Template — `reference/post-create-api-diy-template-connectplus`
- `GET` Retrieve Workspaces — `reference/get-workspaces-diy-connectplus-template`
- `GET` Retrieve Blocks Supported by the Template — `reference/get-processor-diy-connectplus-template`

## Other APIs
_Path: `reference/trigger-walk-in-notifications-on-instore`_

- `GET` Trigger Walk-in Notifications on InStore _(deprecated)_ — `reference/trigger-walk-in-notifications-on-instore`
- `GET` Get Transaction Earning — `reference/get-transaction-earning`
- `POST` Update Currency Ratio — `reference/update-currency-ratio`
- `POST` Configure Org Extended Field — `reference/configure-org-extended-field`
- `GET` Get Org Extended Fields — `reference/get-org-extended-fields`
- `POST` Create Store Associates — `reference/create-store-associates`
- `POST` Feed (Scan Event) — `reference/feed-scan-event`
- `GET` Get Configured Card Limit per Customer — `reference/get-configured-card-limit-per-customer`
- `GET` Get Org Sources — `reference/get-org-sources`
- `GET` Get org configs — `reference/get-org-config-key-values`
- `GET` Retrieve extended field config details — `reference/retrieve-extended-field-config-details`

## SCIM
_Path: `reference/scim`_

- `POST` Create SCIM Token — `reference/create-scim-token`
- `PUT` Revoke SCIM Token — `reference/revoke-scim-token`
- `POST` Create User — `reference/create-user`
- `GET` Get List of User — `reference/get-list-of-user`
- `GET` Get User by Filter name — `reference/get-users-by-filter-name`
- `GET` Get User by SCIM Id — `reference/get-users-by-scim-id`
- `POST` Create Group — `reference/create-group`
- `PATCH` Add or Remove group members — `reference/add-group-members`
