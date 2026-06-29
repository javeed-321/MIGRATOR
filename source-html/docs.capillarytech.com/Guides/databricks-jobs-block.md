> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Databricks (Jobs) block

<Callout icon="❗️">
  This block will be deprecated in future releases.
</Callout>

The `databricks_job_trigger_and_status_check` block triggers a pre-existing Databricks notebook job and monitors its completion status. It acts as a transformation block in a Connect+ dataflow, validating and processing incoming data before passing it to downstream blocks. The block authenticates with the Databricks API using a personal access token, stores processed files at a specified path, and retries status checks until the job completes or reaches the maximum retry limit.

## When to use this block

Use this block when your dataflow needs to trigger a Databricks job and wait for it to complete before downstream processing continues. This block triggers the job only.

**Note**: To run a custom Databricks job and return the results to Connect+ for use in downstream blocks, use the Databricks (Validation) block instead.

## Prerequisites

Before configuring this block, make sure you have:

* [The Databricks job ID](https://docs.capillarytech.com/docs/databricks-validation-block#creating-a-databricks-job-and-job-id)
* A Databricks personal access token registered in Connect+
* The Databricks API URL
* A file path where Databricks stores its output files

## Configuration fields

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
        **Job ID**
      </td>

      <td>
        Yes
      </td>

      <td>
        The [ID of the Databricks job](https://docs.capillarytech.com/docs/databricks-validation-block#creating-a-databricks-job-and-job-id) to trigger.
      </td>
    </tr>

    <tr>
      <td>
        **Max Retries**
      </td>

      <td>
        Yes
      </td>

      <td>
        The maximum number of times the system checks the job status before marking the file as failed.
      </td>
    </tr>

    <tr>
      <td>
        **dataBricks Processed Files Path**
      </td>

      <td>
        Yes
      </td>

      <td>
        The destination file path where Databricks stores the output files after executing the job, regardless of whether the job succeeds or fails.  
        For example, `/processed/output/`.
      </td>
    </tr>

    <tr>
      <td>
        **dataBricksToken**
      </td>

      <td>
        Yes
      </td>

      <td>
        The personal access token used to authenticate with the Databricks API. Select the token from the dropdown.
      </td>
    </tr>

    <tr>
      <td>
        **dataBricksUrl**
      </td>

      <td>
        Yes
      </td>

      <td>
        The Databricks API URL used to trigger and monitor the job.  
        For example, `https://capillary-scrum.cloud.databricks.com/api/2.1/jobs`.
      </td>
    </tr>
  </tbody>
</Table>

<Image align="center" border={true} src="https://files.readme.io/429301c34bd54599896985499d6a00a5a7302657f2f37cd8d2d9c971ddc211ac-Screenshot_2026-04-21_at_3.38.35_PM.png" className="border" />