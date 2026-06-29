> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# API request (http_write) block

The `http_write` block sends data to an external HTTP API endpoint using OAuth-based authentication as a destination block in a Connect+ dataflow. It supports rate limiting, configurable retry logic, and response parsing. The block is typically used to post process data to Capillary or third-party APIs.

## When to use this block

Use this block when your dataflow needs to deliver data to an HTTP API, for example, posting transactions to the Capillary Transaction v2 API.

## Prerequisites

Before configuring this block, make sure you have:

* OAuth client key and secret
* The API endpoint path
* The HTTP method required by the API (`POST` or `PUT`)

## Standard properties

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field name
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Block name**
      </td>

      <td>
        Yes
      </td>

      <td>
        A name for the block instance. The name must be alphanumeric. There is no character limit.
      </td>
    </tr>

    <tr>
      <td>
        **Client Key**
      </td>

      <td>
        Yes
      </td>

      <td>
        The OAuth client key used for authentication. Select the client key from the dropdown. The list shows configurations created in the [Extension Configuration ](https://docs.capillarytech.com/docs/extension-configuration)section of the Dev Console.
      </td>
    </tr>

    <tr>
      <td>
        **Client Secret**
      </td>

      <td>
        Yes
      </td>

      <td>
        The OAuth client secret used for authentication. Select the client secret from the dropdown. The list shows configurations marked as secret in the [Extension Configuration ](https://docs.capillarytech.com/docs/extension-configuration)section of the Dev Console.

        **Note**: When creating a password configuration in the Extension Configuration section of the Dev Console, set `Is Secret` to make it available in the dropdown.
      </td>
    </tr>

    <tr>
      <td>
        **API Endpoint**
      </td>

      <td>
        Yes
      </td>

      <td>
        The relative endpoint path of the API to call.  
        For example, `/v2/transactions/bulk`.
        For Neo endpoints, use the format `/x/neo/<neo_dataflow_name>`.
      </td>
    </tr>

    <tr>
      <td>
        **API Method**
      </td>

      <td>
        Yes
      </td>

      <td>
        The HTTP method used to call the API.  
        Select `POST` or `PUT` from the dropdown.  
        Default value: `POST`.
      </td>
    </tr>

    <tr>
      <td>
        **Parse API Response**
      </td>

      <td>
        No
      </td>

      <td>
        Parses the API response after each request and extracts specific values using the Parse path map.  
        Select `true` to extract values from the response.  
        Select `false` to skip response parsing.  
        When set to `true`, the parse path map defines which fields to extract from the response:

        * status_code — the error code returned by the API
        * error_message — the error description
        * entity_id — the ID of the created or updated record

        Default value: `true`.  
        Set the value to `false` for Neo APIs.
      </td>
    </tr>
  </tbody>
</Table>

## Advanced properties

⚠️ Advanced properties for OAuth HTTP API Call. Make changes only if you know what you are doing.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field name
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **API Base URL**
      </td>

      <td>
        Yes
      </td>

      <td>
        The base URL of the API. You can use the default value.  
        If you enter a URL, do not include a trailing `/`.  
        Default value: `{intouch_url}`.
      </td>
    </tr>

    <tr>
      <td>
        **OAuth Base URL**
      </td>

      <td>
        Yes
      </td>

      <td>
        The base URL used to obtain the OAuth token. You can use the default value.  
        If you enter a URL, do not include a trailing `/`.  
        Default value: `{intouch_url}`.
      </td>
    </tr>

    <tr>
      <td>
        **Bulk Support**
      </td>

      <td>
        Yes
      </td>

      <td>
        Determines whether bulk API calls are supported. Select from the dropdown.  
        Select `false` when the target API expects individual objects.  
        Select `true` when the target API expects an array.Default value: `true`.
      </td>
    </tr>

    <tr>
      <td>
        **Request Split Path**
      </td>

      <td>
        Yes
      </td>

      <td>
        The JSONPath expression used to split outgoing requests.  
        Default value: `$.*`.
      </td>
    </tr>

    <tr>
      <td>
        **Response Split Path**
      </td>

      <td>
        Yes
      </td>

      <td>
        The JSONPath expression used to split API responses.  
        Default value: `$.*`.
      </td>
    </tr>

    <tr>
      <td>
        **Parse Path Map**
      </td>

      <td>
        Yes
      </td>

      <td>
        The JSONPath map used to parse API responses.  
        Default value: `{"status_code":"$.[errors'].*.code","error_message":"$.[errors'].*.r..."}`.
      </td>
    </tr>

    <tr>
      <td>
        **Recoverable Error Codes**
      </td>

      <td>
        No
      </td>

      <td>
        Comma-separated HTTP status codes that trigger a retry.  
        Default value: `521,502,503,504`.
      </td>
    </tr>

    <tr>
      <td>
        **Yielding Error Codes**
      </td>

      <td>
        No
      </td>

      <td>
        Comma-separated HTTP status codes that cause the block to yield and wait before retrying.  
        Default value: `429`.
      </td>
    </tr>

    <tr>
      <td>
        **Max Retries**
      </td>

      <td>
        No
      </td>

      <td>
        The maximum number of retry attempts on failure.  
        Default value: `3`.
      </td>
    </tr>

    <tr>
      <td>
        **Additional Headers**
      </td>

      <td>
        No
      </td>

      <td>
        Additional HTTP headers to include in the API request, entered as a JSON object.  
        For example, `{"X-Custom-Header": "value"}`.
      </td>
    </tr>

    <tr>
      <td>
        **Rate**
      </td>

      <td>
        Yes
      </td>

      <td>
        The number of flow files processed per time period.  
        Default value: `1000`.
      </td>
    </tr>

    <tr>
      <td>
        **Time Period**
      </td>

      <td>
        Yes
      </td>

      <td>
        The duration of the rate limiting time window. Default value: `1`.
      </td>
    </tr>

    <tr>
      <td>
        **Time Unit**
      </td>

      <td>
        Yes
      </td>

      <td>
        The time unit for the rate limiting period. Select `SECONDS`, `MINUTES`, or `HOURS` from the dropdown. Default value: `MINUTES`.
      </td>
    </tr>
  </tbody>
</Table>

<Image align="center" border={true} src="https://files.readme.io/fd5c7ebc2fae4e790dc3c2e149500141243b150b503aac4378d0236a08cf653b-Untitled_design_2.gif" className="border" />