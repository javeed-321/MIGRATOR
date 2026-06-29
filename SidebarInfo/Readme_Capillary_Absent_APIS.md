
Use Firecrawl scrape (mcp__claude_ai_Firecrawl__firecrawl_scrape) to check each of these 50 URLs. For each, fetch it and determine if the page is a 404 / "not found" page vs a real API reference page.

The site is https://docs.capillarytech.com/reference/ — it's a JavaScript SPA, so use `formats: ["json"]` with `jsonOptions: {"prompt": "Is this a 404/not found page? Does it show an API endpoint? Return the page title and whether it is a real API page (true/false) or a 404/empty/not-found page.", "mode": "freeform"}` and `waitFor: 5000` for each URL.

Check all these URLs (slug after the domain base https://docs.capillarytech.com/reference/):

GROUP: Customer Authentication (Web/Mobile)
1. regenerate-authentication-token-1
2. generate-authentication-token
3. generate-otp-1-1
4. validate-otp-2
5. validate-password-1
6. change-password-1
7. forget-password-1

GROUP: Coupon
8. get-custom-fields-associated-with-coupon-redemption-global
9. get-custom-fields-associated-with-coupon-redemption

GROUP: Badges
10. v1-get-badges-org-meta
11. v1-create-badges-org-meta
12. v1-update-badges-org-meta

GROUP: Rewards Catalog
13. get-brand-rewards
14. get-user-rewards
15. issue-user-reward
16. get-user-rewards-merge-details
17. merge-user-rewards
18. get-user-specific-reward-by-id
19. get-user-reward
20. claim-reward
21. get-customer-reward-transactions

GROUP: Target/Milestone
22. connectedorgs-get-promotion-list-for-a-customer

GROUP: Cart Promotions
23. add-promotion
24. create-promotion-for-ucc
25. get-promotion-details
26. get-loyalty-promotion-list-for-a-program
27. get-promotion-by-id
28. set-promotion-settings
29. add-promotion-redemption
30. evaluate-promotion
31. post-revoke-earned-promotion

GROUP: Points
32. get-reward-currency-limits
33. create-reward-currency-limits
34. get-point-allocation-event-id-global
35. retrieve-pointsaward-records-associated-with-a-specific-transaction-id
36. get-allocated-points-details-with-expiry-in-specified-date-range-global
37. get-allocated-points-details-with-event-id
38. get-expired-points-for-a-customer

GROUP: Recommendations
39. get-user-recommendations
40. get-item-recommendations
41. get-cart-recommendations

GROUP: DAS
42. retrieve-pa-id-for-specified-data-range

GROUP: Points (Event Logs)
43. get-event-log-ids-for-credit-debit
44. get-event-log-ids-with-credit-or-debit-for-alternate-currency
45. get-custom-field-for-transaction-add-event
46. get-point-redemption-details-for-redemption-events
47. get-target-completion-details
48. get-manual-points-adjustment-details
49. get-ledger-information-for-event-log-ids

GROUP: Loyalty (Other)
50. post_loyalty-api-v1-workflows-expjson-programid-eventtype

For each URL return a JSON result like:
{"slug": "xxx", "url": "https://docs.capillarytech.com/reference/xxx", "is_404": true/false, "page_title": "..."}

Return ONLY valid JSON array with all 50 results. No explanations.
