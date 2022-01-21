<!--
  @component


  @param {number} [row_index=0] - Row index value, Default: `0`
  @param {object} [row={}] - Contains all the column values in a row, Default: `{}`
  @param {boolean} [rowActive=false] - Determines whether the row is selected or not, Default: `false`
  @param {object} [isVisible={}] - Determines whether column is visible or not, Default: `{}`
  @param {boolean} [clickableRows=false] - Determines whether the row is clickable or not, Default: `false`
  @param {object} [transforms={}] - Contains all custom values for each columns, Default: `{}`
  @param {object} [classNames={}] - Contails all CSS class for each column, Default: `{}`
  @param {boolean} [transition=false] - Determines whether the row has transition effect or not, Default: `false`
  @param {object} [styles={}] - Contains all CSS styles for each column, Default: `{}`
  @param {array} [column_keys=[]] - Column_keys property, Default: `[]`
  @param {boolean} [bulk_actions=false] - Determines if selecting multiple rows and doing multiple actions is allowed, Default: `false`
  @param {boolean} [checked=false] - Determines whether the checkbox is checked or not, Default: `false`
  @param {array} [selectedIds=[]] - List of unique IDs of all the selected rows, Default: `[]`
  @param {string} [selectCheckboxColor="info"] - Selected checkbox color, Default: `"info"`
  @param {string} [selectCheckboxSize="medium"] - selected checkbox size, Default: `"medium"`
  @param {function} [cellComponent()] - Custom cell component for a column

  ### Events
  - `rowSelectChecked`
  - `rowClick`
  - `_forwardEvent`

-->
{#if transition}
  <tr
    in:fly={{ x: 20, delay: 25 * row_index }}
    on:click|stopPropagation={rowClick}
    class:is-selected={rowActive}
    class:is-checked={checked}>
    {#if bulk_actions}
      <td style="vertical-align:middle;">
        <Checkbox
          size={selectCheckboxSize}
          color={selectCheckboxColor}
          style="margin:0;"
          inverted={false}
          bind:checked
          on:change={changed} />
      </td>
    {/if}
    {#each column_keys as column}
      {#if isVisible(column)}
        <svelte:component
          this={resolveComponent(column, row)}
          on:_forwardEvent
          {column}
          {row}
          {transforms}
          {classNames}
          {styles} />
      {/if}
    {/each}
  </tr>
{:else}
  <tr
    on:click|stopPropagation={rowClick}
    class:is-selected={rowActive}
    class:is-checked={checked}>
    {#if bulk_actions}
      <td style="vertical-align:middle;">
        <Checkbox
          size={selectCheckboxSize}
          color={selectCheckboxColor}
          style="margin:0;"
          inverted={false}
          bind:checked
          on:change={changed} />
      </td>
    {/if}
    {#each column_keys as column}
      {#if isVisible(column)}
        <svelte:component
          this={resolveComponent(column, row)}
          on:_forwardEvent
          {column}
          {row}
          {transforms}
          {classNames}
          {styles} />
      {/if}
    {/each}
  </tr>
{/if}

<script>
  import { fly } from "svelte/transition";
  import GridCell from "./GridCell.svelte";
  import { Checkbox } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * Row index value
   */
  export let row_index = 0,
    /**
     * Contains all the column values in a row
     */
    row = {},
    /**
     * Determines whether the row is selected or not
     */
    rowActive = false,
    /**
     * Determines whether column is visible or not
     */
    isVisible = {},
    /**
     * Determines whether the row is clickable or not
     */
    clickableRows = false,
    /**
     * Contains all custom values for each columns
     */
    transforms = {},
    /**
     * Contails all CSS class for each column
     */
    classNames = {},
    /**
     * Determines whether the row has transition effect or not
     */
    transition = false,
    /**
     * Contains all CSS styles for each column
     */
    styles = {},
    column_keys = [],
    /**
     * Determines if selecting multiple rows and doing multiple actions is allowed
     */
    bulk_actions = false,
    /**
     * Determines whether the checkbox is checked or not
     */
    checked = false,
    /**
     * List of unique IDs of all the selected rows
     */
    selectedIds = [],
    /**
     * Selected checkbox color
     */
    selectCheckboxColor = "info",
    /**
     * selected checkbox size
     */
    selectCheckboxSize = "medium",
    /**
     * Custom cell component for a column
     */
    cellComponent = () => null;

  $: resolveComponent = (column, row) => {
    return cellComponent(column, row) || GridCell;
  };

  $: selectedIds, setCheckedValue();

  function setCheckedValue() {
    checked = false;
    if (selectedIds.indexOf(row.id) != -1) {
      checked = true;
    }
  }

  function changed() {
    fire("rowSelectChecked", { checked, row });
  }

  function rowClick() {
    if (clickableRows) {
      rowActive = true;
      fire("rowClick", { row });
    }
  }
</script>
