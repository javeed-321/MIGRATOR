> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Till

This API enables you to create a new Till for your store. You can also create or attach existing custom fields to a till. The till-level custom fields enable you to add additional information about the till, especially when you have multiple tills mapped to a store. For example, till code, till name, or a description about the till. The custom fields that you create for a till will be available for all tills under your organization.

> **Important**
>
> Till usernames must be unique across all organizations within the same cluster. You cannot create a till with a username that already exists in any organization in the cluster. Usernames from soft-deleted tills are also reserved and cannot be reused, even if they do not appear in active listings.

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# API endpoint example

`<https://eu.api.capillarytech.com/v2/orgEntity/till>`

# Prerequisites

* [ ] Authentication -  Basic or OAuth authentication details
* [ ] Access group resource - Access to Organisation resource
* [ ] Configuration -  If you want to create more than five custom fields, create a ticket to the sustenance team and increase the limit in the configuration `PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT`. By default, the maximum value is set as five.

# Resource information

|               |                   |
| :------------ | :---------------- |
| URI           | v2/orgEntity/till |
| HTTP method   | POST              |
| Rate limit    | Default           |
| Batch support | NA                |

# Request body parameters

> **Note**: Parameters marked with \* are mandatory.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        name\*
      </td>

      <td>
        string
      </td>

      <td>
        - **Length:** Between 3 and 50 characters.
        - **Allowed Characters:** Must match the regex ^\[a-z]\[a-z0-9.\_-]+$
        - Must start with a lowercase letter.
        - Can contain lowercase letters (a-z), digits (0-9).
        - Can contain dots (.), underscores (\_), and hyphens (-).
        - **Special Rules**: The name ROOT is strictly forbidden.
        - **Uniqueness** - Must be unique within your Organization.
        - **Case Sensitivity**- Must be provided in lowercase.    The Till name specified will also be copied to Till code in the backend.
      </td>
    </tr>

    <tr>
      <td>
        password\*
      </td>

      <td>
        string
      </td>

      <td>
        Password for the till.
      </td>
    </tr>

    <tr>
      <td>
        storeId\*
      </td>

      <td>
        long
      </td>

      <td>
        Store ID of the parent Store in which the Till has to be created.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        string
      </td>

      <td>
        Description for the till.
      </td>
    </tr>

    <tr>
      <td>
        billable
      </td>

      <td>
        boolean
      </td>

      <td>
        Specify if the till is used for billing. By default, the value is set as `true`.
      </td>
    </tr>

    <tr>
      <td>
        storeServerId
      </td>

      <td>
        long
      </td>

      <td>
        Store server ID of the parent Store if available.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        array-obj
      </td>

      <td>
        Specify the custom fields to be added to the org and attached to the till. You can create new fields or add existing ones.
      </td>
    </tr>

    <tr>
      <td>
        └─ name\*
      </td>

      <td>
        string
      </td>

      <td>
        Name for the custom field. Required if you are creating custom fields.
      </td>
    </tr>

    <tr>
      <td>
        └─ value\*
      </td>

      <td>
        string
      </td>

      <td>
        Value assigned to the custom field. Required if you are creating custom fields.
      </td>
    </tr>

    <tr>
      <td>
        └─ type
      </td>

      <td>
        string
      </td>

      <td>
        Type of the custom field (e.g., text, number, date).
      </td>
    </tr>

    <tr>
      <td>
        └─ dataType
      </td>

      <td>
        string
      </td>

      <td>
        Data type of the value stored in the field (e.g., string, integer, boolean).
      </td>
    </tr>

    <tr>
      <td>
        └─ rule
      </td>

      <td>
        string
      </td>

      <td>
        Client-side validation rule for the field (Infix expression).
      </td>
    </tr>

    <tr>
      <td>
        └─ serverRule
      </td>

      <td>
        string
      </td>

      <td>
        Server-side validation rule for the field (Infix expression).
      </td>
    </tr>

    <tr>
      <td>
        └─ regex
      </td>

      <td>
        string
      </td>

      <td>
        Regular expression for validating the field value.
      </td>
    </tr>

    <tr>
      <td>
        └─ error
      </td>

      <td>
        string
      </td>

      <td>
        Error message to be displayed.
      </td>
    </tr>

    <tr>
      <td>
        └─ options
      </td>

      <td>
        int
      </td>

      <td>
        Comma-separated options for selection fields. Example: `valueA, valueB, valueC`.
      </td>
    </tr>

    <tr>
      <td>
        └─ disableAtServer
      </td>

      <td>
        int
      </td>

      <td>
        Flag for disabling the field on the server-side (`0`: enabled, `1`: disabled).
      </td>
    </tr>

    <tr>
      <td>
        └─ enableAuditTrail
      </td>

      <td>
        int
      </td>

      <td>
        Flag for audit tracking (`0`: not tracked, `1`: tracked). Up to 5 fields can be tracked.
      </td>
    </tr>

    <tr>
      <td>
        └─ isPiiData
      </td>

      <td>
        int
      </td>

      <td>
        Flag for PII data (`0`: no, `1`: yes).
      </td>
    </tr>

    <tr>
      <td>
        └─ isPsiData
      </td>

      <td>
        int
      </td>

      <td>
        Flag for PSI data (`0`: no, `1`: yes). [Learn more](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi)
      </td>
    </tr>

    <tr>
      <td>
        └─ helptext
      </td>

      <td>
        string
      </td>

      <td>
        Help text displayed to the user.
      </td>
    </tr>

    <tr>
      <td>
        └─ attrs
      </td>

      <td>
        string
      </td>

      <td>
        Additional attributes associated with the custom field.
      </td>
    </tr>

    <tr>
      <td>
        timeZoneId
      </td>

      <td>
        Integer
      </td>

      <td>
        Time zone ID for the till. Refer to the [supported Timezone table](https://docs.capillarytech.com/reference/add-till-with-new-custom-fields#supported-timezones) for valid `timeZoneId` values. If you do not provide a time zone, the system derives it based on the [store hierarchy](https://docs.capillarytech.com/docs/store-hierarchy) in the following order: zone, store, and till.
      </td>
    </tr>
  </tbody>
</Table>

```curl Add till
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
  "description": "Testing description",
  "storeId": 50154731,
  "password": "123",
  "billable": true,
  "name": "new_till2239"
}'
```
```curl Add till with new custom fields
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
"description": "Testing description",
"storeId": 50154731,
"password": "123",
"billable": true,
"name": "new_till2239",
"customFields": [
{
  "name": "cf_1",
  "type": "text",
  "dataType": "string",
  "label": "Custom Field Label",
  "defaultValue": "14",
  "phase": "",
  "position": 1,
  "rule": "",
  "serverRule": "",
  "regex": "",
  "error": "",
  "options": "",
  "isDisabled": 0,
  "isCompulsory": 0,
  "disableAtServer": 0,
  "isUpdatable": 1,
  "enableAuditTrail": 0,
  "isPiiData": 0,
  "isPsiData": 0,
  "helptext": "This is a custom field",
  "attrs": "",
  "value": "15"
}
]
}'
```
```curl Add till with existing custom fields
curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \
--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \
--header 'Content-Type: application/json' \
--data '{
"description": "Testing description",
"storeId": 50154731,
"password": "123",
"billable": true,
"name": "new_till_2",
"customFields": [
{
  "name": "cf_1",
  "value": "16"
}
]
}'
```

# Response parameters

| Parameter | Description          |
| --------- | -------------------- |
| createdId | The till ID created. |
| warnings  | Warnings if any.     |

```json
{
    "createdId": 50157065,
    "warnings": []
}
```

# API-specific error codes

| Error code | Description                                                                                                                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1207       | Till name already exists. Use a unique name. This error occurs if the till username is already present in any organization within the same cluster, or if the username is reserved due to a soft-deleted till. |
| 1214       | The parent store is not valid. Use a valid parent store ID                                                                                                                                                     |
| 1023       | The number of custom fields that can be created is reached. In the org settings, increase the limit of `PRODUCT_CONF_ORG_AUDITABLE_CUSTOM_FIELDS_LIMIT`. Default value: 5.                                     |
| 1024       | The custom field parameter is null or empty. Enter a value for the parameter.                                                                                                                                  |
| 1025       | There are multiple custom fields with the same name. Use a unique custom field name.                                                                                                                           |

## Supported timezones

Use the `timeZoneid` field to assign a timezone to a till. Reference the table below for valid values.

| ID  | Timezone                         | Standard Offset |
| --- | -------------------------------- | --------------- |
| 1   | Europe/Andorra                   | UTC+01:00       |
| 2   | Asia/Dubai                       | UTC+04:00       |
| 3   | Asia/Kabul                       | UTC+04:30       |
| 4   | America/Antigua                  | UTC-04:00       |
| 5   | America/Anguilla                 | UTC-04:00       |
| 6   | Europe/Tirane                    | UTC+01:00       |
| 7   | Asia/Yerevan                     | UTC+04:00       |
| 9   | Africa/Luanda                    | UTC+01:00       |
| 10  | Antarctica/McMurdo               | UTC+12:00       |
| 11  | Antarctica/South\_Pole           | UTC+12:00       |
| 12  | Antarctica/Rothera               | UTC-03:00       |
| 13  | Antarctica/Palmer                | UTC-04:00       |
| 14  | Antarctica/Mawson                | UTC+06:00       |
| 15  | Antarctica/Davis                 | UTC+07:00       |
| 16  | Antarctica/Casey                 | UTC+08:00       |
| 17  | Antarctica/Vostok                | UTC+00:00       |
| 18  | Antarctica/DumontDUrville        | UTC+10:00       |
| 19  | Antarctica/Syowa                 | UTC+03:00       |
| 20  | America/Argentina/Buenos\_Aires  | UTC-03:00       |
| 21  | America/Argentina/Cordoba        | UTC-03:00       |
| 22  | America/Argentina/Salta          | UTC-03:00       |
| 23  | America/Argentina/Jujuy          | UTC-03:00       |
| 24  | America/Argentina/Tucuman        | UTC-03:00       |
| 25  | America/Argentina/Catamarca      | UTC-03:00       |
| 26  | America/Argentina/La\_Rioja      | UTC-03:00       |
| 27  | America/Argentina/San\_Juan      | UTC-03:00       |
| 28  | America/Argentina/Mendoza        | UTC-03:00       |
| 29  | America/Argentina/San\_Luis      | UTC-04:00       |
| 30  | America/Argentina/Rio\_Gallegos  | UTC-03:00       |
| 31  | America/Argentina/Ushuaia        | UTC-03:00       |
| 32  | Pacific/Pago\_Pago               | UTC-11:00       |
| 33  | Europe/Vienna                    | UTC+01:00       |
| 34  | Australia/Lord\_Howe             | UTC+10:30       |
| 35  | Australia/Hobart                 | UTC+10:00       |
| 36  | Australia/Currie                 | UTC+10:00       |
| 37  | Australia/Melbourne              | UTC+10:00       |
| 38  | Australia/Sydney                 | UTC+10:00       |
| 39  | Australia/Broken\_Hill           | UTC+09:30       |
| 40  | Australia/Brisbane               | UTC+10:00       |
| 41  | Australia/Lindeman               | UTC+10:00       |
| 42  | Australia/Adelaide               | UTC+09:30       |
| 43  | Australia/Darwin                 | UTC+09:30       |
| 44  | Australia/Perth                  | UTC+08:00       |
| 45  | Australia/Eucla                  | UTC+08:45       |
| 46  | America/Aruba                    | UTC-04:00       |
| 47  | Europe/Mariehamn                 | UTC+02:00       |
| 48  | Asia/Baku                        | UTC+04:00       |
| 49  | Europe/Sarajevo                  | UTC+01:00       |
| 50  | America/Barbados                 | UTC-04:00       |
| 51  | Asia/Dhaka                       | UTC+06:00       |
| 52  | Europe/Brussels                  | UTC+01:00       |
| 53  | Africa/Ouagadougou               | UTC+00:00       |
| 54  | Europe/Sofia                     | UTC+02:00       |
| 55  | Asia/Bahrain                     | UTC+03:00       |
| 56  | Africa/Bujumbura                 | UTC+02:00       |
| 57  | Africa/Porto-Novo                | UTC+01:00       |
| 58  | America/St\_Barthelemy           | UTC-04:00       |
| 59  | Atlantic/Bermuda                 | UTC-04:00       |
| 60  | Asia/Brunei                      | UTC+08:00       |
| 61  | America/La\_Paz                  | UTC-04:00       |
| 62  | America/Noronha                  | UTC-02:00       |
| 63  | America/Belem                    | UTC-03:00       |
| 64  | America/Fortaleza                | UTC-03:00       |
| 65  | America/Recife                   | UTC-03:00       |
| 66  | America/Araguaina                | UTC-03:00       |
| 67  | America/Maceio                   | UTC-03:00       |
| 68  | America/Bahia                    | UTC-03:00       |
| 69  | America/Sao\_Paulo               | UTC-03:00       |
| 70  | America/Campo\_Grande            | UTC-04:00       |
| 71  | America/Cuiaba                   | UTC-04:00       |
| 72  | America/Santarem                 | UTC-03:00       |
| 73  | America/Porto\_Velho             | UTC-04:00       |
| 74  | America/Boa\_Vista               | UTC-04:00       |
| 75  | America/Manaus                   | UTC-04:00       |
| 76  | America/Eirunepe                 | UTC-04:00       |
| 77  | America/Rio\_Branco              | UTC-04:00       |
| 78  | America/Nassau                   | UTC-05:00       |
| 79  | Asia/Thimphu                     | UTC+06:00       |
| 80  | Africa/Gaborone                  | UTC+02:00       |
| 81  | Europe/Minsk                     | UTC+02:00       |
| 82  | America/Belize                   | UTC-06:00       |
| 83  | America/St\_Johns                | UTC-03:30       |
| 84  | America/Halifax                  | UTC-04:00       |
| 85  | America/Glace\_Bay               | UTC-04:00       |
| 86  | America/Moncton                  | UTC-04:00       |
| 87  | America/Goose\_Bay               | UTC-04:00       |
| 88  | America/Blanc-Sablon             | UTC-04:00       |
| 89  | America/Montreal                 | UTC-05:00       |
| 90  | America/Toronto                  | UTC-05:00       |
| 91  | America/Nipigon                  | UTC-05:00       |
| 92  | America/Thunder\_Bay             | UTC-05:00       |
| 93  | America/Iqaluit                  | UTC-05:00       |
| 94  | America/Pangnirtung              | UTC-05:00       |
| 95  | America/Resolute                 | UTC-05:00       |
| 96  | America/Atikokan                 | UTC-05:00       |
| 97  | America/Rankin\_Inlet            | UTC-06:00       |
| 98  | America/Winnipeg                 | UTC-06:00       |
| 99  | America/Rainy\_River             | UTC-06:00       |
| 100 | America/Regina                   | UTC-06:00       |
| 101 | America/Swift\_Current           | UTC-06:00       |
| 102 | America/Edmonton                 | UTC-07:00       |
| 103 | America/Cambridge\_Bay           | UTC-07:00       |
| 104 | America/Yellowknife              | UTC-07:00       |
| 105 | America/Inuvik                   | UTC-07:00       |
| 106 | America/Dawson\_Creek            | UTC-07:00       |
| 107 | America/Vancouver                | UTC-08:00       |
| 108 | America/Whitehorse               | UTC-08:00       |
| 109 | America/Dawson                   | UTC-08:00       |
| 110 | Indian/Cocos                     | UTC+06:30       |
| 111 | Africa/Kinshasa                  | UTC+01:00       |
| 112 | Africa/Lubumbashi                | UTC+02:00       |
| 113 | Africa/Bangui                    | UTC+01:00       |
| 114 | Africa/Brazzaville               | UTC+01:00       |
| 115 | Europe/Zurich                    | UTC+01:00       |
| 116 | Africa/Abidjan                   | UTC+00:00       |
| 117 | Pacific/Rarotonga                | UTC-10:00       |
| 118 | America/Santiago                 | UTC-04:00       |
| 119 | Pacific/Easter                   | UTC-06:00       |
| 120 | Africa/Douala                    | UTC+01:00       |
| 121 | Asia/Shanghai                    | UTC+08:00       |
| 122 | Asia/Harbin                      | UTC+08:00       |
| 123 | Asia/Chongqing                   | UTC+08:00       |
| 124 | Asia/Urumqi                      | UTC+08:00       |
| 125 | Asia/Kashgar                     | UTC+08:00       |
| 126 | America/Bogota                   | UTC-05:00       |
| 127 | America/Costa\_Rica              | UTC-06:00       |
| 128 | America/Havana                   | UTC-05:00       |
| 129 | Atlantic/Cape\_Verde             | UTC-01:00       |
| 130 | Indian/Christmas                 | UTC+07:00       |
| 131 | Asia/Nicosia                     | UTC+02:00       |
| 132 | Europe/Prague                    | UTC+01:00       |
| 133 | Europe/Berlin                    | UTC+01:00       |
| 134 | Africa/Djibouti                  | UTC+03:00       |
| 135 | Europe/Copenhagen                | UTC+01:00       |
| 136 | America/Dominica                 | UTC-04:00       |
| 137 | America/Santo\_Domingo           | UTC-04:00       |
| 138 | Africa/Algiers                   | UTC+01:00       |
| 139 | America/Guayaquil                | UTC-05:00       |
| 140 | Pacific/Galapagos                | UTC-06:00       |
| 141 | Europe/Tallinn                   | UTC+02:00       |
| 142 | Africa/Cairo                     | UTC+02:00       |
| 143 | Africa/El\_Aaiun                 | UTC+00:00       |
| 144 | Africa/Asmara                    | UTC+03:00       |
| 145 | Europe/Madrid                    | UTC+01:00       |
| 146 | Africa/Ceuta                     | UTC+01:00       |
| 147 | Atlantic/Canary                  | UTC+00:00       |
| 148 | Africa/Addis\_Ababa              | UTC+03:00       |
| 149 | Europe/Helsinki                  | UTC+02:00       |
| 150 | Pacific/Fiji                     | UTC+12:00       |
| 151 | Atlantic/Stanley                 | UTC-04:00       |
| 152 | Pacific/Truk                     | UTC+10:00       |
| 153 | Pacific/Ponape                   | UTC+11:00       |
| 154 | Pacific/Kosrae                   | UTC+11:00       |
| 155 | Atlantic/Faroe                   | UTC+00:00       |
| 156 | Europe/Paris                     | UTC+01:00       |
| 157 | Africa/Libreville                | UTC+01:00       |
| 158 | Europe/London                    | UTC+00:00       |
| 159 | America/Grenada                  | UTC-04:00       |
| 160 | Asia/Tbilisi                     | UTC+04:00       |
| 161 | America/Cayenne                  | UTC-03:00       |
| 162 | Europe/Guernsey                  | UTC+00:00       |
| 163 | Africa/Accra                     | UTC+00:00       |
| 164 | Europe/Gibraltar                 | UTC+01:00       |
| 165 | America/Godthab                  | UTC-03:00       |
| 166 | America/Danmarkshavn             | UTC+00:00       |
| 167 | America/Scoresbysund             | UTC-01:00       |
| 168 | America/Thule                    | UTC-04:00       |
| 169 | Africa/Banjul                    | UTC+00:00       |
| 170 | Africa/Conakry                   | UTC+00:00       |
| 171 | America/Guadeloupe               | UTC-04:00       |
| 172 | Africa/Malabo                    | UTC+01:00       |
| 173 | Europe/Athens                    | UTC+02:00       |
| 174 | Atlantic/South\_Georgia          | UTC-02:00       |
| 175 | America/Guatemala                | UTC-06:00       |
| 176 | Pacific/Guam                     | UTC+10:00       |
| 177 | Africa/Bissau                    | UTC+00:00       |
| 178 | America/Guyana                   | UTC-04:00       |
| 179 | Asia/Hong\_Kong                  | UTC+08:00       |
| 180 | America/Tegucigalpa              | UTC-06:00       |
| 181 | Europe/Zagreb                    | UTC+01:00       |
| 182 | America/Port-au-Prince           | UTC-05:00       |
| 183 | Europe/Budapest                  | UTC+01:00       |
| 184 | Asia/Jakarta                     | UTC+07:00       |
| 185 | Asia/Pontianak                   | UTC+07:00       |
| 186 | Asia/Makassar                    | UTC+08:00       |
| 187 | Asia/Jayapura                    | UTC+09:00       |
| 188 | Europe/Dublin                    | UTC+00:00       |
| 189 | Asia/Jerusalem                   | UTC+02:00       |
| 190 | Europe/Isle\_of\_Man             | UTC+00:00       |
| 191 | Asia/Kolkata                     | UTC+05:30       |
| 192 | Indian/Chagos                    | UTC+06:00       |
| 193 | Asia/Baghdad                     | UTC+03:00       |
| 194 | Asia/Tehran                      | UTC+03:30       |
| 195 | Atlantic/Reykjavik               | UTC+00:00       |
| 196 | Europe/Rome                      | UTC+01:00       |
| 197 | Europe/Jersey                    | UTC+00:00       |
| 198 | America/Jamaica                  | UTC-05:00       |
| 199 | Asia/Amman                       | UTC+02:00       |
| 200 | Asia/Tokyo                       | UTC+09:00       |
| 201 | Africa/Nairobi                   | UTC+03:00       |
| 202 | Asia/Bishkek                     | UTC+06:00       |
| 203 | Asia/Phnom\_Penh                 | UTC+07:00       |
| 204 | Pacific/Tarawa                   | UTC+12:00       |
| 205 | Pacific/Enderbury                | UTC+13:00       |
| 206 | Pacific/Kiritimati               | UTC+14:00       |
| 207 | Indian/Comoro                    | UTC+03:00       |
| 208 | America/St\_Kitts                | UTC-04:00       |
| 209 | Asia/Pyongyang                   | UTC+09:00       |
| 210 | Asia/Seoul                       | UTC+09:00       |
| 211 | Asia/Kuwait                      | UTC+03:00       |
| 212 | America/Cayman                   | UTC-05:00       |
| 213 | Asia/Almaty                      | UTC+06:00       |
| 214 | Asia/Qyzylorda                   | UTC+06:00       |
| 215 | Asia/Aqtobe                      | UTC+05:00       |
| 216 | Asia/Aqtau                       | UTC+05:00       |
| 217 | Asia/Oral                        | UTC+05:00       |
| 218 | Asia/Vientiane                   | UTC+07:00       |
| 219 | Asia/Beirut                      | UTC+02:00       |
| 220 | America/St\_Lucia                | UTC-04:00       |
| 221 | Europe/Vaduz                     | UTC+01:00       |
| 222 | Asia/Colombo                     | UTC+05:30       |
| 223 | Africa/Monrovia                  | UTC+00:00       |
| 224 | Africa/Maseru                    | UTC+02:00       |
| 225 | Europe/Vilnius                   | UTC+02:00       |
| 226 | Europe/Luxembourg                | UTC+01:00       |
| 227 | Europe/Riga                      | UTC+02:00       |
| 228 | Africa/Tripoli                   | UTC+02:00       |
| 229 | Africa/Casablanca                | UTC+00:00       |
| 230 | Europe/Monaco                    | UTC+01:00       |
| 231 | Europe/Chisinau                  | UTC+02:00       |
| 232 | Europe/Podgorica                 | UTC+01:00       |
| 233 | America/Marigot                  | UTC-04:00       |
| 234 | Indian/Antananarivo              | UTC+03:00       |
| 235 | Pacific/Majuro                   | UTC+12:00       |
| 236 | Pacific/Kwajalein                | UTC+12:00       |
| 237 | Europe/Skopje                    | UTC+01:00       |
| 238 | Africa/Bamako                    | UTC+00:00       |
| 239 | Asia/Rangoon                     | UTC+06:30       |
| 240 | Asia/Ulaanbaatar                 | UTC+08:00       |
| 241 | Asia/Hovd                        | UTC+07:00       |
| 242 | Asia/Choibalsan                  | UTC+08:00       |
| 243 | Asia/Macau                       | UTC+08:00       |
| 244 | Pacific/Saipan                   | UTC+10:00       |
| 245 | America/Martinique               | UTC-04:00       |
| 246 | Africa/Nouakchott                | UTC+00:00       |
| 247 | America/Montserrat               | UTC-04:00       |
| 248 | Europe/Malta                     | UTC+01:00       |
| 249 | Indian/Mauritius                 | UTC+04:00       |
| 250 | Indian/Maldives                  | UTC+05:00       |
| 251 | Africa/Blantyre                  | UTC+02:00       |
| 252 | America/Mexico\_City             | UTC-06:00       |
| 253 | America/Cancun                   | UTC-06:00       |
| 254 | America/Merida                   | UTC-06:00       |
| 255 | America/Monterrey                | UTC-06:00       |
| 256 | America/Matamoros                | UTC-06:00       |
| 257 | America/Mazatlan                 | UTC-07:00       |
| 258 | America/Chihuahua                | UTC-07:00       |
| 259 | America/Ojinaga                  | UTC-07:00       |
| 260 | America/Hermosillo               | UTC-07:00       |
| 261 | America/Tijuana                  | UTC-08:00       |
| 262 | America/Santa\_Isabel            | UTC-08:00       |
| 263 | Asia/Kuala\_Lumpur               | UTC+08:00       |
| 264 | Asia/Kuching                     | UTC+08:00       |
| 265 | Africa/Maputo                    | UTC+02:00       |
| 266 | Africa/Windhoek                  | UTC+01:00       |
| 267 | Pacific/Noumea                   | UTC+11:00       |
| 268 | Africa/Niamey                    | UTC+01:00       |
| 269 | Pacific/Norfolk                  | UTC+11:30       |
| 270 | Africa/Lagos                     | UTC+01:00       |
| 271 | America/Managua                  | UTC-06:00       |
| 272 | Europe/Amsterdam                 | UTC+01:00       |
| 273 | Europe/Oslo                      | UTC+01:00       |
| 274 | Asia/Kathmandu                   | UTC+05:45       |
| 275 | Pacific/Nauru                    | UTC+12:00       |
| 276 | Pacific/Niue                     | UTC-11:00       |
| 277 | Pacific/Auckland                 | UTC+12:00       |
| 278 | Pacific/Chatham                  | UTC+12:45       |
| 279 | Asia/Muscat                      | UTC+04:00       |
| 280 | America/Panama                   | UTC-05:00       |
| 281 | America/Lima                     | UTC-05:00       |
| 282 | Pacific/Tahiti                   | UTC-10:00       |
| 283 | Pacific/Marquesas                | UTC-09:30       |
| 284 | Pacific/Gambier                  | UTC-09:00       |
| 285 | Pacific/Port\_Moresby            | UTC+10:00       |
| 286 | Asia/Manila                      | UTC+08:00       |
| 287 | Asia/Karachi                     | UTC+06:00       |
| 288 | Europe/Warsaw                    | UTC+01:00       |
| 289 | America/Miquelon                 | UTC-03:00       |
| 290 | Pacific/Pitcairn                 | UTC-08:00       |
| 291 | America/Puerto\_Rico             | UTC-04:00       |
| 292 | Asia/Gaza                        | UTC+02:00       |
| 293 | Europe/Lisbon                    | UTC+00:00       |
| 294 | Atlantic/Madeira                 | UTC+00:00       |
| 295 | Atlantic/Azores                  | UTC-01:00       |
| 296 | Pacific/Palau                    | UTC+09:00       |
| 297 | America/Asuncion                 | UTC-04:00       |
| 298 | Asia/Qatar                       | UTC+03:00       |
| 299 | Indian/Reunion                   | UTC+04:00       |
| 300 | Europe/Bucharest                 | UTC+02:00       |
| 301 | Europe/Belgrade                  | UTC+01:00       |
| 302 | Europe/Kaliningrad               | UTC+03:00       |
| 303 | Europe/Moscow                    | UTC+04:00       |
| 304 | Europe/Volgograd                 | UTC+04:00       |
| 305 | Europe/Samara                    | UTC+04:00       |
| 306 | Asia/Yekaterinburg               | UTC+06:00       |
| 307 | Asia/Omsk                        | UTC+07:00       |
| 308 | Asia/Novosibirsk                 | UTC+07:00       |
| 309 | Asia/Novokuznetsk                | UTC+07:00       |
| 310 | Asia/Krasnoyarsk                 | UTC+08:00       |
| 311 | Asia/Irkutsk                     | UTC+08:00       |
| 312 | Asia/Yakutsk                     | UTC+10:00       |
| 313 | Asia/Vladivostok                 | UTC+11:00       |
| 314 | Asia/Sakhalin                    | UTC+11:00       |
| 315 | Asia/Magadan                     | UTC+12:00       |
| 316 | Asia/Kamchatka                   | UTC+12:00       |
| 317 | Asia/Anadyr                      | UTC+12:00       |
| 318 | Africa/Kigali                    | UTC+02:00       |
| 319 | Asia/Riyadh                      | UTC+03:00       |
| 320 | Pacific/Guadalcanal              | UTC+11:00       |
| 321 | Indian/Mahe                      | UTC+04:00       |
| 322 | Africa/Khartoum                  | UTC+03:00       |
| 323 | Europe/Stockholm                 | UTC+01:00       |
| 324 | Asia/Singapore                   | UTC+08:00       |
| 325 | Atlantic/St\_Helena              | UTC+00:00       |
| 326 | Europe/Ljubljana                 | UTC+01:00       |
| 327 | Arctic/Longyearbyen              | UTC+01:00       |
| 328 | Europe/Bratislava                | UTC+01:00       |
| 329 | Africa/Freetown                  | UTC+00:00       |
| 330 | Europe/San\_Marino               | UTC+01:00       |
| 331 | Africa/Dakar                     | UTC+00:00       |
| 332 | Africa/Mogadishu                 | UTC+03:00       |
| 333 | America/Paramaribo               | UTC-03:00       |
| 334 | Africa/Sao\_Tome                 | UTC+00:00       |
| 335 | America/El\_Salvador             | UTC-06:00       |
| 336 | Asia/Damascus                    | UTC+02:00       |
| 337 | Africa/Mbabane                   | UTC+02:00       |
| 338 | America/Grand\_Turk              | UTC-05:00       |
| 339 | Africa/Ndjamena                  | UTC+01:00       |
| 340 | Indian/Kerguelen                 | UTC+05:00       |
| 341 | Africa/Lome                      | UTC+00:00       |
| 342 | Asia/Bangkok                     | UTC+07:00       |
| 343 | Asia/Dushanbe                    | UTC+05:00       |
| 344 | Pacific/Fakaofo                  | UTC-10:00       |
| 345 | Asia/Dili                        | UTC+09:00       |
| 346 | Asia/Ashgabat                    | UTC+05:00       |
| 347 | Africa/Tunis                     | UTC+01:00       |
| 348 | Pacific/Tongatapu                | UTC+13:00       |
| 349 | Europe/Istanbul                  | UTC+02:00       |
| 350 | America/Port\_of\_Spain          | UTC-04:00       |
| 351 | Pacific/Funafuti                 | UTC+12:00       |
| 352 | Asia/Taipei                      | UTC+08:00       |
| 353 | Africa/Dar\_es\_Salaam           | UTC+03:00       |
| 354 | Europe/Kiev                      | UTC+02:00       |
| 355 | Europe/Uzhgorod                  | UTC+02:00       |
| 356 | Europe/Zaporozhye                | UTC+02:00       |
| 357 | Europe/Simferopol                | UTC+02:00       |
| 358 | Africa/Kampala                   | UTC+03:00       |
| 359 | Pacific/Johnston                 | UTC-10:00       |
| 360 | Pacific/Midway                   | UTC-11:00       |
| 361 | Pacific/Wake                     | UTC+12:00       |
| 362 | America/New\_York                | UTC-05:00       |
| 363 | America/Detroit                  | UTC-05:00       |
| 364 | America/Kentucky/Louisville      | UTC-05:00       |
| 365 | America/Kentucky/Monticello      | UTC-05:00       |
| 366 | America/Indiana/Indianapolis     | UTC-05:00       |
| 367 | America/Indiana/Vincennes        | UTC-05:00       |
| 368 | America/Indiana/Winamac          | UTC-05:00       |
| 369 | America/Indiana/Marengo          | UTC-05:00       |
| 370 | America/Indiana/Petersburg       | UTC-05:00       |
| 371 | America/Indiana/Vevay            | UTC-05:00       |
| 372 | America/Chicago                  | UTC-06:00       |
| 373 | America/Indiana/Tell\_City       | UTC-06:00       |
| 374 | America/Indiana/Knox             | UTC-06:00       |
| 375 | America/Menominee                | UTC-06:00       |
| 376 | America/North\_Dakota/Center     | UTC-06:00       |
| 377 | America/North\_Dakota/New\_Salem | UTC-06:00       |
| 378 | America/Denver                   | UTC-07:00       |
| 379 | America/Boise                    | UTC-07:00       |
| 380 | America/Shiprock                 | UTC-07:00       |
| 381 | America/Phoenix                  | UTC-07:00       |
| 382 | America/Los\_Angeles             | UTC-08:00       |
| 383 | America/Anchorage                | UTC-09:00       |
| 384 | America/Juneau                   | UTC-09:00       |
| 385 | America/Yakutat                  | UTC-09:00       |
| 386 | America/Nome                     | UTC-09:00       |
| 387 | America/Adak                     | UTC-10:00       |
| 388 | Pacific/Honolulu                 | UTC-10:00       |
| 389 | America/Montevideo               | UTC-03:00       |
| 390 | Asia/Samarkand                   | UTC+05:00       |
| 391 | Asia/Tashkent                    | UTC+05:00       |
| 392 | Europe/Vatican                   | UTC+01:00       |
| 393 | America/St\_Vincent              | UTC-04:00       |
| 394 | America/Caracas                  | UTC-04:30       |
| 395 | America/Tortola                  | UTC-04:00       |
| 396 | America/St\_Thomas               | UTC-04:00       |
| 397 | Asia/Ho\_Chi\_Minh               | UTC+07:00       |
| 398 | Pacific/Efate                    | UTC+11:00       |
| 399 | Pacific/Wallis                   | UTC+12:00       |
| 400 | Pacific/Apia                     | UTC-11:00       |
| 401 | Asia/Aden                        | UTC+03:00       |
| 402 | Indian/Mayotte                   | UTC+03:00       |
| 403 | Africa/Johannesburg              | UTC+02:00       |
| 404 | Africa/Lusaka                    | UTC+02:00       |
| 405 | Africa/Harare                    | UTC+02:00       |

<br />

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "v2",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{host}/v2",
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
    "/v2/orgEntity/till": {
      "post": {
        "summary": "Add Till",
        "description": "",
        "operationId": "add-till-with-new-custom-fields",
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
                  "Result": {
                    "value": "{\n    \"createdId\": 50156992,      //createdId specifies the created TillId \n    \"warnings\": []\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "createdId": {
                      "type": "integer",
                      "example": 50156992,
                      "default": 0
                    },
                    "warnings": {
                      "type": "array"
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
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \\\n--header 'Authorization: Basic cmFuZG9tMTE6MjAY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  \"description\": \"Testing description\",\n  \"storeId\": 50154731,\n  \"password\": \"123\",\n  \"billable\": true,\n  \"name\": \"new_till\",\n  \"customFields\": [\n    {\n      \"name\": \"cf_1\",\n      \"type\": \"text\",\n      \"dataType\": \"string\",\n      \"label\": \"Custom Field Label\",\n      \"defaultValue\": \"14\",\n      \"phase\": \"\",\n      \"position\": 1,\n      \"rule\": \"\",\n      \"serverRule\": \"\",\n      \"regex\": \"\",\n      \"error\": \"\",\n      \"options\": \"\",\n      \"isDisabled\": 0,\n      \"isCompulsory\": 0,\n      \"disableAtServer\": 0,\n      \"isUpdatable\": 1,\n      \"enableAuditTrail\": 0,\n      \"isPiiData\": 0,\n      \"isPsiData\": 0,\n      \"helptext\": \"This is a custom field\",\n      \"attrs\": \"\",\n      \"value\": \"15\"\n    }\n  ]\n}'",
              "name": "Add till with new custom fields"
            },
            {
              "language": "curl",
              "code": "curl --location 'https://eu.api.capillarytech.com/v2/orgEntity/till' \\\n--header 'Authorization: Basic cmFuZG9tE6MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA=' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  \"description\": \"Testing description\",\n  \"storeId\": 50154731,\n  \"password\": \"123\",\n  \"billable\": true,\n  \"name\": \"new_till2239\"\n}'",
              "name": "Add till"
            },
            {
              "language": "curl",
              "code": "{\n  \"description\": \"Testing description\",\n  \"storeId\": 50154731,\n  \"password\": \"123\",\n  \"billable\": true,\n  \"name\": \"new_till_2\",\n  \"customFields\": [\n    {\n      \"name\": \"cf_1\",\n      \"value\": \"16\"\n    }\n  ]\n}",
              "name": "Add till with existing custom fields"
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
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": true
  },
  "x-readme-fauxas": true
}
```