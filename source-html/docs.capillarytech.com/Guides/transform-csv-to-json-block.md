> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Transform (CSV to JSON) block

The `convert_csv_to_json` block transforms CSV files into JSON format with optional sorting and grouping. It acts as a transformation block in a Connect+ dataflow, sitting between the source and destination blocks to convert ingested CSV data into structured JSON. The block supports header-based sorting, alphabetical ordering, record grouping by a specified field, and configurable grouping limits to manage payload size for downstream processing.

## When to use this block

Use this block when your dataflow ingests CSV files and needs to convert them to JSON before posting to a Capillary API or another destination.

## Prerequisites

Before configuring this block, make sure you have:

* A clear understanding of the CSV column headers and the desired output structure
* Identified whether records need to be grouped and by which field

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
        No
      </td>

      <td>
        A name for the block instance. The name must be alphanumeric. There is no character limit.
      </td>
    </tr>

    <tr>
      <td>
        **File Type (Record Reader Controller Service)**
      </td>

      <td>
        Yes
      </td>

      <td>
        The record reader controller service used to parse the source file. Default value: `csv`.
      </td>
    </tr>

    <tr>
      <td>
        **Sort Headers**
      </td>

      <td>
        No
      </td>

      <td>
        A comma-separated list of header names that defines the order in which rows are sorted.  
        For example, `bill ID,itemID`.
      </td>
    </tr>

    <tr>
      <td>
        **Alphabetical sort?**
      </td>

      <td>
        No
      </td>

      <td>
        When set to `true`, sorts headers alphabetically.  
        Select `true` to enable or `false` to disable.  
        Default value: `false`.
      </td>
    </tr>

    <tr>
      <td>
        **Grouping Limit**
      </td>

      <td>
        No
      </td>

      <td>
        The maximum number of records per group. Accepts values between 1 and 1000.  
        Default value: `1`.
      </td>
    </tr>

    <tr>
      <td>
        **Group By**
      </td>

      <td>
        No
      </td>

      <td>
        A comma-separated list of fields to group records by.  
        For example, `bill ID`.
      </td>
    </tr>

    <tr>
      <td>
        **JsonPath Expression
        Json expression**
      </td>

      <td>
        No
      </td>

      <td>
        A JSONPath expression that specifies which elements to extract from the JSON structure.  
        The default value $.[*] selects all elements in the root array.  
        Use this when you want to split the response.
      </td>
    </tr>

    <tr>
      <td>
        **Split Response**
      </td>

      <td>
        No
      </td>

      <td>
        Determines whether the block splits the JSON array into individual objects before passing them to the next block.  
        Select `true` to send each element as a separate message. Select `false` to pass the entire array as a single message.
      </td>
    </tr>
  </tbody>
</Table>

## Advanced properties

⚠️ Make changes to advanced properties only if you know what you are doing.

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
        **attribution type**
      </td>

      <td>
        No
      </td>

      <td>
        The type of attribution to apply to the records. For example, `TILL`.
      </td>
    </tr>

    <tr>
      <td>
        **attribution code**
      </td>

      <td>
        No
      </td>

      <td>
        The code associated with the attribution type. For example, `store_till_001`.
      </td>
    </tr>

    <tr>
      <td>
        **header value to pass**
      </td>

      <td>
        No
      </td>

      <td>
        The header value to pass along with the request.
      </td>
    </tr>

    <tr>
      <td>
        **child org till**
      </td>

      <td>
        No
      </td>

      <td>
        The till identifier for the child organisation.
      </td>
    </tr>

    <tr>
      <td>
        **child org Id**
      </td>

      <td>
        No
      </td>

      <td>
        The ID of the child organisation.
      </td>
    </tr>

    <tr>
      <td>
        **lineNo parsing**
      </td>

      <td>
        No
      </td>

      <td>
        The expression used to parse the line number from the source record.  
        Default value: `$[0].LINE_NO`.
      </td>
    </tr>

    <tr>
      <td>
        **JsonPath Expression**
      </td>

      <td>
        No
      </td>

      <td>
        The JSONPath expression used to extract records from the JSON output. Default value: `$.[*]`.
      </td>
    </tr>

    <tr>
      <td>
        **Split Response**
      </td>

      <td>
        No
      </td>

      <td>
        Splits the output when the block produces an array of objects. Select `true` to split each array element into individual responses, or `false` to keep the response as a single array. Default value: `false`.
      </td>
    </tr>
  </tbody>
</Table>

<Image align="center" border={true} src="https://files.readme.io/5a11bbdcd992bce37de14c67adbdaf46ac0a863107a017e316141dd907933f4d-Untitled_design_1.gif" className="border" />