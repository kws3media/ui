<!--
  @component


  @param {number} [row_index=0] - Row index value, Default: `0`
  @param {object} [row={}] - Contains all the column values in a row, Default: `{}`
  @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
  @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
  @param {object} [isVisible={}] - Determines whether column is visible or not, Default: `{}`
  @param {boolean} [clickableRows=false] - Determines whether the row is clickable or not, Default: `false`
  @param {object} [transforms={}] - Contains all custom values for each columns, Default: `{}`
  @param {object} [classNames={}] - Contails all CSS class for each column, Default: `{}`
  @param {boolean} [transition=false] - Determines whether the row has transition effect or not, Default: `false`
  @param {object} [styles={}] - Contains all CSS styles for each column, Default: `{}`
  @param {array} [column_keys=[]] - Column keys, Default: `[]`
  @param {boolean} [bulk_actions=false] - Determines if selecting multiple rows and doing multiple actions is allowed, Default: `false`
  @param {boolean} [checked=false] - Determines whether the checkbox is checked or not, Default: `false`
  @param {array} [selectedIds=[]] - List of unique IDs of all the selected rows, Default: `[]`
  @param {Exclude<ColorOptions, 'success'>} [selectCheckboxColor=info] - Selected checkbox color, Default: `info`
  @param {SizeOptions} [selectCheckboxSize=medium] - selected checkbox size, Default: `medium`
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
    class:is-selected={activated && visualActivationOnClick}
    class:is-checked={checked}>
    {#if bulk_actions}
      <td
        style="vertical-align:middle;"
        on:click={(e) => {
          clickableRows && e.stopImmediatePropagation();
        }}>
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
    class:is-selected={activated && visualActivationOnClick}
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
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * Row index value
   */
  export let row_index = 0,
    /**
     * Contains all the column values in a row
     */
    row = {},
    /**
     * Determines whether clickable rows activate visually on click
     */
    visualActivationOnClick = true,
    /**
     * Unique id of row that is activated
     */
    activatedId = null,
    /**
     * Determines whether column is visible or not
     * @type {object}
     */
    isVisible = {},
    /**
     * Determines whether the row is clickable or not
     */
    clickableRows = false,
    /**
     * Contains all custom values for each columns
     * @type {object}
     */
    transforms = {},
    /**
     * Contails all CSS class for each column
     * @type {object}
     */
    classNames = {},
    /**
     * Determines whether the row has transition effect or not
     */
    transition = false,
    /**
     * Contains all CSS styles for each column
     * @type {object}
     */
    styles = {},
    /**
     * Column keys
     */
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
     * @type {Exclude<ColorOptions, 'success'>}
     */
    selectCheckboxColor = "info",
    /**
     * selected checkbox size
     * @type {SizeOptions}
     */
    selectCheckboxSize = "medium",
    /**
     * Custom cell component for a column
     */
    cellComponent = () => null;

  $: resolveComponent = (column, row) => {
    // @ts-ignore
    return cellComponent(column, row) || GridCell;
  };

  $: selectedIds, setCheckedValue();
  $: activated = activatedId === row.id;

  function setCheckedValue() {
    checked = false;
    if (selectedIds.indexOf(row.id) !== -1) {
      checked = true;
    }
  }

  function changed() {
    fire("rowSelectChecked", { checked, row });
  }

  function rowClick() {
    if (clickableRows) {
      fire("rowClick", { row });
    }
  }
</script>
