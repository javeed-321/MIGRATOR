> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Supported Labels across Engage+

Labels are dynamic tags used to personalize the message content used in the respective communication channel. These tags allow you to insert specific information, such as a recipient's name, store name, or other relevant details, into the message.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Label
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        **Store**
      </td>

      <td style={{ textAlign: "left" }}>
        Name of the branch or outlet of the organization.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Registered Store**
      </td>

      <td style={{ textAlign: "left" }}>
        The store where the customer originally registered.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Name**
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the registered store where the customer originally registered.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Last transacted Store**
      </td>

      <td style={{ textAlign: "left" }}>
        The most recent store where the customer made a purchase.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Name**
      </td>

      <td style={{ textAlign: "left" }}>
        The name of the last transacted store where the customer made the transaction.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Customer**
      </td>

      <td style={{ textAlign: "left" }}>
        The full name of the customer. Example- Tom Johnson
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**First Name**
      </td>

      <td style={{ textAlign: "left" }}>
        The customer’s first name, used for personalization. Example- Tom
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Last Name**
      </td>

      <td style={{ textAlign: "left" }}>
        The customer’s last name. Example- Johnson
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**First name** (capitalized)
      </td>

      <td style={{ textAlign: "left" }}>
        The customer’s first name capitalized. Example- TOM
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Last name** (capitalized)
      </td>

      <td style={{ textAlign: "left" }}>
        The customer’s last name capitalized. Example- JOHNSON
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Full name** (capitalized)
      </td>

      <td style={{ textAlign: "left" }}>
        Full name of the customer with proper capitalization. Example - TOM JOHNSON
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Loyalty Points**
      </td>

      <td style={{ textAlign: "left" }}>
        Current available loyalty points of the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Loyalty Points Floor**
      </td>

      <td style={{ textAlign: "left" }}>
        Rounds loyalty points down to the nearest whole number.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Loyalty Points Value**
      </td>

      <td style={{ textAlign: "left" }}>
        Monetary equivalent of the loyalty points.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Loyalty Points Value Floor**
      </td>

      <td style={{ textAlign: "left" }}>
        Rounded value of loyalty points in currency.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Slab Name**
      </td>

      <td style={{ textAlign: "left" }}>
        Name of the tier or slab assigned to the customer. For example - Loyalty tier
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Lifetime Purchases**
      </td>

      <td style={{ textAlign: "left" }}>
        Total purchase value made by the customer to date.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Lifetime Points**
      </td>

      <td style={{ textAlign: "left" }}>
        Total loyalty points earned by the customer over time.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Customer Email**
      </td>

      <td style={{ textAlign: "left" }}>
        Email address of the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -Customer Mobile
      </td>

      <td style={{ textAlign: "left" }}>
        Mobile number of the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**User Id AES**
      </td>

      <td style={{ textAlign: "left" }}>
        Unique encrypted identifier of the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Promotion Points**
      </td>

      <td style={{ textAlign: "left" }}>
        Points awarded as part of a promotion.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points Expiry Date**
      </td>

      <td style={{ textAlign: "left" }}>
        Date when the customer’s loyalty points will expire.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire.  Date format: month/day/year. For example- 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire. Date format: day/month/year.  For example- 12/12/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire.  Date format: year-month-day. For example- 2025-12-20
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire.  Date format: month/day/two-digit year. For example-12/12/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire.  Date format: day abbreviated month year. For example-12 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire.  Date format: weekday, abbreviated month day, two-digit year. For example- Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire.  Date format: day.month.year (two-digit). For example- 02.12.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) on which the promotion points expire.  Date format: day abbreviated month. For example- 02 Dec
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Number of points floor**
      </td>

      <td style={{ textAlign: "left" }}>
        Rounds numbers by removing the decimal points after the whole number. For example, 225.12 points will round to 225.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points issued on action**
      </td>

      <td style={{ textAlign: "left" }}>
        [Points](https://docs.capillarytech.com/docs/points) awarded to the customer by this specific [Issue Currency action](https://docs.capillarytech.com/docs/loyalty-promotions-actions).
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points issued on event**
      </td>

      <td style={{ textAlign: "left" }}>
        Total [points](https://docs.capillarytech.com/docs/points) awarded to the customer across all sources (regular and [loyalty promotions](https://docs.capillarytech.com/docs/loyalty-promotions-introduction)) during this event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points issued from promotion**
      </td>

      <td style={{ textAlign: "left" }}>
        Total [points](https://docs.capillarytech.com/docs/points) awarded to the customer through [loyalty promotions](https://docs.capillarytech.com/docs/loyalty-promotions-introduction) during this event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points issued from benefit**
      </td>

      <td style={{ textAlign: "left" }}>
        Total [points](https://docs.capillarytech.com/docs/points) awarded to the customer through program benefits during this event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Alternate Currency**
      </td>

      <td style={{ textAlign: "left" }}>
        Labels for non-standard currencies configured for your organisation (for example, stars or coins). The currency name in the label reflects the configured currency identifier.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**\{Currency name\} currency issued on action**
      </td>

      <td style={{ textAlign: "left" }}>
        Amount of the alternate currency issued by this specific [Issue Currency action](https://docs.capillarytech.com/docs/loyalty-promotions-actions).
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**\{Currency name\} currency issued on event**
      </td>

      <td style={{ textAlign: "left" }}>
        Total amount of the alternate currency issued across all sources during this event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**\{Currency name\} currency issued from promotion**
      </td>

      <td style={{ textAlign: "left" }}>
        Total amount of the alternate currency issued through [loyalty promotions](https://docs.capillarytech.com/docs/loyalty-promotions-introduction) during this event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**\{Currency name\} currency issued from benefit**
      </td>

      <td style={{ textAlign: "left" }}>
        Total amount of the alternate currency issued through program benefits during this event.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Unsubscribe**
      </td>

      <td style={{ textAlign: "left" }}>
        Provides customers with a clear and easy way to opt out of future communications.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Coupons**
      </td>

      <td style={{ textAlign: "left" }}>
        List of active coupon codes available to the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Voucher**
      </td>

      <td style={{ textAlign: "left" }}>
        Specific voucher assigned to the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Coupon Expiry Date**
      </td>

      <td style={{ textAlign: "left" }}>
        Expiry date of the customer’s coupon.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        --- **mm/dd/yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) until which the coupon remains valid.  Date format: month/day/two-digit year.  For Example - 12/12/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        --- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) until which the coupon remains valid.  Date format: day abbreviated month year. For Example - 12 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Voucher Validity**
      </td>

      <td style={{ textAlign: "left" }}>
        Validity period of the voucher.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        --- **Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) until which the coupon remains valid.  Date format: weekday, abbreviated month day, two-digit year. For Example - Monday, Dec 12, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        ---** dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) until which the coupon remains valid.  Date format: day.month.year (two-digit). For Example - 12.02.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        --- **dd Mon**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in the specified format) until which the coupon remains valid.  Date format: day abbreviated month. For Example - 12 Dec
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Coupon Start Date**
      </td>

      <td style={{ textAlign: "left" }}>
        Start date when the coupon becomes valid.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid.  Date format: month/day/year.  For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid. Date format: day/month/year. For example: 02/12/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid. Date format: year-month-day. For example: 2025-02-12
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid. Date format: month/day/two-digit year. For example: 12/02/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid. Date format: day abbreviated month year. For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid.   
        Date format: weekday, abbreviated month day, two-digit year.   
        For example: Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid. Date format: day.month.year (two-digit). For example: 02.12.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon**
      </td>

      <td style={{ textAlign: "left" }}>
        The start date (in the specified format) when the coupon becomes valid. Date format: day abbreviated month. For example: 02 Dec
      </td>
    </tr>


    <tr>
      <td style={{ textAlign: "left" }}>
        -**Bulk voucher code**
      </td>

      <td style={{ textAlign: "left" }}>
        Comma-separated list of all coupon codes issued in bulk by this action.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Number of vouchers issued**
      </td>

      <td style={{ textAlign: "left" }}>
        Total number of coupons issued by this action.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Badge**
      </td>

      <td style={{ textAlign: "left" }}>
        Information about [badges](https://docs.capillarytech.com/docs/customer_badges) earned by the customer through a [loyalty promotion](https://docs.capillarytech.com/docs/loyalty-promotions-introduction) or workflow.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Badge expiry date**
      </td>

      <td style={{ textAlign: "left" }}>
        Date when the issued badge expires.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in month/day/year format. For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in day/month/year format. For example: 02/12/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in year-month-day format. For example: 2025-12-02
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in month/day/two-digit year format. For example: 12/02/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in day abbreviated-month year format. For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in weekday, abbreviated-month day, two-digit year format. For example: Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in day.month.two-digit year format. For example: 02.12.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon**
      </td>

      <td style={{ textAlign: "left" }}>
        The badge expiry date in day abbreviated-month format. For example: 02 Dec
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Days until badge expiry**
      </td>

      <td style={{ textAlign: "left" }}>
        Number of days remaining until the issued badge expires.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Rewards**
      </td>

      <td style={{ textAlign: "left" }}>
        Information about [catalog rewards](https://docs.capillarytech.com/docs/rewards-catalog) issued to the customer through a [loyalty promotion](https://docs.capillarytech.com/docs/loyalty-promotions-introduction) or workflow.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Number of rewards issued**
      </td>

      <td style={{ textAlign: "left" }}>
        Total number of catalog rewards issued to the customer by this action.
      </td>
    </tr>
    <tr>
      <td style={{ textAlign: "left" }}>
        **Dynamic Dates**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto-fills a date based on the number of days you enter .
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.  
        Date format: month/day/year.  
        For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.  
        Date format: day/month/year.  
        For example: 02/12/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.
        Date format: year-month-day.  
        For example: 2025-12-02
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**mm/dd/yy**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.
        Date format: month/day/two-digit year.  
        For example: 12/02/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.
        Date format: day abbreviated month year.  
        For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.  
        Date format: weekday, abbreviated month day, two-digit year.  
        For example: Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.  
        Date format: day.month.year (two-digit).  
        For example: 02.12.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd Mon**
      </td>

      <td style={{ textAlign: "left" }}>
        Auto fills a date (in the specified format) based on the number of days you enter.  
        Date format: day abbreviated month.  
        For example: 02 12
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Slab Expiring On**
      </td>

      <td style={{ textAlign: "left" }}>
        Date when the customer’s current slab/tier will expire.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: month/day/year. For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: day/month/year. For example: 02/122025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: year-month-day. For example: 2025-12-02
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**mm/dd/yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: month/day/two-digit year. For example: 12/02/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: day abbreviated month year. For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: weekday, abbreviated month day, two-digit year. For example: Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: day.month.year (two-digit). For example: 02.12.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**dd Mon**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in the specified format) when the customer’s current slab/tier will expire. Date format: day abbreviated month. For example: 02 Dec
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Gap to renew**
      </td>

      <td style={{ textAlign: "left" }}>
        Remaining visits, points, or purchases needed to retain loyalty benefits.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew visits**
      </td>

      <td style={{ textAlign: "left" }}>
        Number of visits remaining to retain slab/loyalty benefits.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew tracker**
      </td>

      <td style={{ textAlign: "left" }}>
        Tracking metric for renewal calculations.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew current visits value**
      </td>

      <td style={{ textAlign: "left" }}>
        Current count of visits considered for renewal.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew tracker value**
      </td>

      <td style={{ textAlign: "left" }}>
        Current value in tracker for renewal.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew points**
      </td>

      <td style={{ textAlign: "left" }}>
        Points required to renew the slab.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew purchase**
      </td>

      <td style={{ textAlign: "left" }}>
        Purchase value required to renew slab.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew current points value**
      </td>

      <td style={{ textAlign: "left" }}>
        Current points considered in renewal calculation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to renew current purchase value**
      </td>

      <td style={{ textAlign: "left" }}>
        Current purchase value considered in renewal calculation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Gap to upgrade
      </td>

      <td style={{ textAlign: "left" }}>
        Days or points remaining for a customer to upgrade their tier/slab.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to upgrade lifetime points**
      </td>

      <td style={{ textAlign: "left" }}>
        Lifetime points required to upgrade tier.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to upgrade lifetime purchase**
      </td>

      <td style={{ textAlign: "left" }}>
        Lifetime purchase value required to upgrade tier.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to upgrade tracker**
      </td>

      <td style={{ textAlign: "left" }}>
        Tracker metric for upgrade calculation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to upgrade customer points**
      </td>

      <td style={{ textAlign: "left" }}>
        Customer points considered for upgrade.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gap to upgrade tracker value**
      </td>

      <td style={{ textAlign: "left" }}>
        Tracker value used in upgrade calculation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Offer Name**
      </td>

      <td style={{ textAlign: "left" }}>
        Name of the offer being sent to the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Points Expiry Tags**
      </td>

      <td style={{ textAlign: "left" }}>
        Date when the customer’s loyalty points will expire.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Loyalty Points Expiry**
      </td>

      <td style={{ textAlign: "left" }}>
        Date when the customer’s loyalty points will expire.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Regular Points Expiring on 7th Day**
      </td>

      <td style={{ textAlign: "left" }}>
        Loyalty points expiring in 7 days.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Regular Points Expiring on 15th Day**
      </td>

      <td style={{ textAlign: "left" }}>
        Loyalty points expiring in 15 days.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Regular Points Expiring on 30th Day**
      </td>

      <td style={{ textAlign: "left" }}>
        Loyalty points expiring in 30 days.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Regular Points Expiring by Month End**
      </td>

      <td style={{ textAlign: "left" }}>
        Loyalty points expiring by the end of the month.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Currency Value of Regular Points Expiring by Month End**
      </td>

      <td style={{ textAlign: "left" }}>
        Monetary value of points expiring by month end.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Loyalty & Promotional Points Expiry**
      </td>

      <td style={{ textAlign: "left" }}>
        Combined expiry date of loyalty and promotional points.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points Expiring on 7th Day**
      </td>

      <td style={{ textAlign: "left" }}>
        Total points expiring in 7 days.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points Expiring on 15th Day**
      </td>

      <td style={{ textAlign: "left" }}>
        Total points expiring in 15 days.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points Expiring on 30th Day**
      </td>

      <td style={{ textAlign: "left" }}>
        Total points expiring in 30 days.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Points Expiring by Month End**
      </td>

      <td style={{ textAlign: "left" }}>
        Total points expiring by month end.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Currency Value of Points Expiring by Month End**
      </td>

      <td style={{ textAlign: "left" }}>
        Monetary value of points expiring by month end.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Gift Voucher**
      </td>

      <td style={{ textAlign: "left" }}>
        Gift voucher assigned to the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Gift voucher expiry date**
      </td>

      <td style={{ textAlign: "left" }}>
        Expiry date of the assigned gift voucher.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: month/day/year. For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: day/month/year. For example: 02/12/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: year-month-day. For example: 2025-12-02
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: month/day/two-digit year. For example: 12/02/25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: day abbreviated month year. For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: weekday, abbreviated month day, two-digit year. For example: Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: day.month.year (two-digit). For example: 02.12.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon**
      </td>

      <td style={{ textAlign: "left" }}>
        The date (in specified format) when the assigned gift voucher will expire. Date format: day abbreviated month. For example: 02 Dec
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Badge**
      </td>

      <td style={{ textAlign: "left" }}>
        Badge earned by the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Badge Expiry Date**
      </td>

      <td style={{ textAlign: "left" }}>
        Date when the earned badge will expire.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: month/day/year. For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: day/month/year. For example: 02/12/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: year-month-day. For example: 2025-12-02
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: month/day/year. For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: day abbreviated month year. For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: weekday, abbreviated month day, two-digit year. For example: Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: day.month.year (two-digit). For example: 02.12.25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the earned badge will expire. Date format: day abbreviated month year  For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Badge Issue Expiry Date**
      </td>

      <td style={{ textAlign: "left" }}>
        Expiry date based on when the badge was issued.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: month/day/year. For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd/mm/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: day/month/year. For example: 02/12/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **yyyy-mm-dd**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: year-month-day. For example: 2025-12-02
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **mm/dd/yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: month/day/year. For example: 12/02/2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: day abbreviated month year. For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Day, Mon dd, yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: weekday, abbreviated month day, two-digit year. For example: Monday, Dec 02, 25
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd.mm.yy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: day.month.year (two-digit). For example: 02.12.2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **dd Mon yyyy**
      </td>

      <td style={{ textAlign: "left" }}>
        The Date (in specified format) when the badge issued to the customer will expire. Date format: day abbreviated month year. For example: 02 Dec 2025
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Days Until Expiry**
      </td>

      <td style={{ textAlign: "left" }}>
        Number of days left before a point, voucher, or badge expires.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Issue Days Until Expiry**
      </td>

      <td style={{ textAlign: "left" }}>
        Days remaining from badge/voucher issuance until expiry.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Badges Issue No Expiry**
      </td>

      <td style={{ textAlign: "left" }}>
        Badges issued with no expiry date.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Badges Enroll No Expiry**
      </td>

      <td style={{ textAlign: "left" }}>
        Badges earned via enrollment that don’t have an expiry.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Promotion**
      </td>

      <td style={{ textAlign: "left" }}>
        Name or description of the active promotion for the customer.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Promotion expiry date**
      </td>

      <td style={{ textAlign: "left" }}>
        Expiry date of the customer's promotion benefits or points.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Concept**
      </td>

      <td style={{ textAlign: "left" }}>
        <Anchor label="Concept" target="_blank" href="https://docs.capillarytech.com/docs/store-hierarchy#/create-concept">Concept</Anchor> associated with the store or program.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Registered Concept**
      </td>

      <td style={{ textAlign: "left" }}>
        The concept where the customer originally registered.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Concept Name**
      </td>

      <td style={{ textAlign: "left" }}>
        Name of the registered concept.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Last transacted Concept**
      </td>

      <td style={{ textAlign: "left" }}>
        The concept where the customer last made a transaction.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -- **Concept Name**
      </td>

      <td style={{ textAlign: "left" }}>
        Name of the last transacted concept.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Optout**
      </td>

      <td style={{ textAlign: "left" }}>
        A label allowing customers to opt out of future communications.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **view_in_browser** (Email only)
      </td>

      <td style={{ textAlign: "left" }}>
        Generates a View in Browser link that allows recipients to open the email content in a web browser.  

        **Note**: The `{{view_in_browser}}` label must be placed directly in the email content where you want the link to appear. It automatically renders as a clickable View in Browser link when the email is delivered. This tag cannot be used inside HTML attributes such as href=`{{view_in_browser}}`, and it cannot be customized or embedded within another link.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Registration custom fields**
      </td>

      <td style={{ textAlign: "left" }}>
        Custom fields collected during customer registration. Example: Accessibility Needs, Address, contractstatus, corporatename etc.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Customer extended fields**
      </td>

      <td style={{ textAlign: "left" }}>
        Additional customer attributes beyond standard profile fields. Example: Gender, DOB, Ethnicity, Nationality etc.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Entry Event** ( This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures the information linked to the conditions that trigger a customer’s entry into the journey.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Customer profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures customer related information  from the entry conditions when either **Current Transaction**, **Partner program linked**, **Customer update**, **Customer Registration**, **Target Enrollment**, **Promotion Issued**, **Reward Issued**, **Points Issued**, **Coupon Issued**, **Tier Upgraded** and **Tier Downgraded**  is selected as the Event Type in the <Anchor label="entry trigger" target="_blank" href="https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger">entry trigger</Anchor>. For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor> documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Transaction Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures transaction related information  from the entry conditions when **Current Transaction** is selected as the Event Type in the <Anchor label="entry trigger" target="_blank" href="https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger">entry trigger</Anchor>. For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor> documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        -**Store Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures store related information from the entry conditions when either **Current Transaction**, **Customer update**, **Coupon Issued**,  is selected as the Event Type in the <Anchor label="entry trigger" target="_blank" href="https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger">entry trigger</Anchor>. For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor> documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Customer Registration Event Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures customer registration related information from the entry conditions when **Customer Registration** is selected as the Event Type in the <Anchor label="entry trigger" target="_blank" href="https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger">entry trigger</Anchor>. For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor> documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Target Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures information related to a customer’s enrollment in a target-based promotion  from the entry conditions when either **Target Enrollment**, **Target value**, **Promotion issued** is selected as the Event Type in the <Anchor label="entry trigger" target="_blank" href="https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger">entry trigger</Anchor>. For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor>documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Promotion Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures promotion related information from the entry conditions when **Promotion Issued** is selected as the Event Type in the <Anchor label="entry trigger" target="_blank" href="https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger">entry trigger</Anchor>.  For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor>documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Customer Updated Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures information related to a customer’s profile update from the entry conditions when **Customer Update** is selected as the Event Type in the [entry trigger](https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger) . For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor> documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Reward Issued Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures information related to a reward issued to a customer from the entry conditions when **Reward Issued** is selected as the Event Type in the [entry trigger](https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger) . For more information refer to [Configure events and conditions](http://link) documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Points issued Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures points issued related information from the entry conditions when **Points Issued** is selected as the Event Type in the [entry trigger](https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger) . For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor>documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Coupon Series Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures coupon series related information from the entry conditions when **Coupon Issued** is selected as the Event Type in the [entry trigger](https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger). For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor> documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Tier Upgraded**(This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures tier upgrade related information from the entry conditions when **Tier Upgraded** is selected as the Event Type in the [entry trigger](https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger) . For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor>  documentation.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Tier downgraded Profile** (This is applicable only for journeys)
      </td>

      <td style={{ textAlign: "left" }}>
        Captures tier downgrade–related information from the entry conditions when **Tier Downgraded** is selected as the Event Type in the [entry trigger](https://docs.capillarytech.com/docs/configure-journey#/configuring-the-entry-trigger). For more information refer to <Anchor label="Configure events and conditions" target="_blank" href="https://docs.capillarytech.com/docs/configure-events-and-conditions#/">Configure events and conditions</Anchor>   documentation.
      </td>
    </tr>
  </tbody>
</Table>

<br />