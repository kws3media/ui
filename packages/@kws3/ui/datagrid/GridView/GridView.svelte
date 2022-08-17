<!--
  @component


  @param {string} [iteration_key="id"] - Iteration key, Default: `"id"`
  @param {array} [data=[]] - Contains all the results that needs to be displayed, Default: `[]`
  @param {object} [columns={}] - Table column names. {db_field_name: column_name}, Default: `{}`
  @param {boolean} [transition=false] - Determines if a transition effect is used, Default: `false`
  @param {boolean} [is_striped=true] - Determines whether to use alternating row shading in the table view, Default: `true`
  @param {boolean} [is_narrow=false] - Determines whether to display rows in a more compact manner, Default: `false`
  @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
  @param {boolean} [clickableRows=false] - Determines whether rows are clickable or not, Default: `false`
  @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
  @param {boolean} [bulk_actions=false] - Determines if selecting multiple rows and doing multiple actions is allowed, Default: `false`
  @param {boolean} [selectAll=false] - Determines if all rows are selected, Default: `false`
  @param {array} [selectedIds=[]] - List of unique IDs of all the selected rows, Default: `[]`
  @param {string} [selectAllCheckboxColor="primary"] - Colour of the `select all` checkbox, Default: `"primary"`
  @param {string} [selectCheckboxColor="info"] - Color of the checkbox on each row, Default: `"info"`
  @param {string} [selectCheckboxSize="medium"] - Size of the checkbox, Default: `"medium"`
  @param {object} [valueTransformers={}] - Contains all custom values for each column, Default: `{}`
  @param {object} [classTransformers={}] - CSS classes for each column, Default: `{}`
  @param {object} [styleTransformers={}] - CSS styles for each column, Default: `{}`
  @param {object} [visibilityMap={}] - Contains list of columns which can be visible or not, Default: `{}`
  @param {object} [cellComponentMap={}] - Contains list of columns with its custom cell component, Default: `{}`
  @param {any} [rowComponent="GridRow"] - Contains a custom row component, Default: `"GridRow"`
  @param {string} [class=""] - CSS classes for parent table, Default: `""`

  ### Events
  - `toggleSelectAll` - Fires an event every time the `select all` checkbox is toggled
  - `rowClick`
  - `rowSelectChecked`
  - `_forwardEvent`

-->
<div class="data-table" data-cy="data-table">
  <table
    class="table is-fullwidth {is_striped ? 'is-striped' : ''} {is_narrow
      ? 'is-narrow'
      : ''} {clickableRows ? 'is-hoverable' : ''} is-bordered {klass}">
    <thead>
      <tr>
        {#if bulk_actions}
          <th width="30">
            <Checkbox
              size="medium"
              color={selectAllCheckboxColor}
              style="margin:0;"
              inverted={true}
              bind:checked={selectAll}
              on:change={changed} />
          </th>
        {/if}
        {#each column_keys as column}
          {#if isVisible(column)}
            <th>{columns[column]}</th>
          {/if}
        {/each}
      </tr>
    </thead>
    <tbody data-cy="grid-view-tbody">
      {#each data as row, row_index (row[iteration_key])}
        <svelte:component
          this={mainRowComponent}
          on:rowClick
          on:rowSelectChecked
          on:_forwardEvent
          {row_index}
          {transition}
          {column_keys}
          {clickableRows}
          {visualActivationOnClick}
          {isVisible}
          {transforms}
          {classNames}
          {styles}
          {cellComponent}
          {row}
          {bulk_actions}
          {activatedId}
          {selectedIds}
          {selectCheckboxColor}
          {selectCheckboxSize}
          checked={selectAll} />
      {/each}
    </tbody>
  </table>
</div>

<script>
  import GridRow from "./GridRow.svelte";
  import { Checkbox } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * Iteration key
   */
  export let iteration_key = "id",
    /**
     * Contains all the results that needs to be displayed
     */
    data = [],
    /**
     * Table column names. {db_field_name: column_name}
     */
    columns = {},
    /**
     * Determines if a transition effect is used
     */
    transition = false,
    /**
     * Determines whether to use alternating row shading in the table view
     * @link https://bulma.io/documentation/elements/table/#modifiers
     */
    is_striped = true,
    /**
     * Determines whether to display rows in a more compact manner
     * @link https://bulma.io/documentation/elements/table/#modifiers
     */
    is_narrow = false,
    /**
     * Determines whether clickable rows activate visually on click
     */
    visualActivationOnClick = true,
    /**
     * Determines whether rows are clickable or not
     */
    clickableRows = false,
    /**
     * Unique id of row that is activated
     */
    activatedId = null,
    /**
     * Determines if selecting multiple rows and doing multiple actions is allowed
     */
    bulk_actions = false,
    /**
     *Determines if all rows are selected
     */
    selectAll = false,
    /**
     * List of unique IDs of all the selected rows
     */
    selectedIds = [],
    /**
     * Colour of the `select all` checkbox
     * @type {ColorOptions}
     */
    selectAllCheckboxColor = "primary",
    /**
     * Color of the checkbox on each row
     */
    selectCheckboxColor = "info",
    /**
     * Size of the checkbox
     */
    selectCheckboxSize = "medium",
    /**
     * Contains all custom values for each column
     */
    valueTransformers = {},
    /**
     * CSS classes for each column
     */
    classTransformers = {},
    /**
     * CSS styles for each column
     */
    styleTransformers = {},
    /**
     * Contains list of columns which can be visible or not
     */
    visibilityMap = {},
    /**
     * Contains list of columns with its custom cell component
     */
    cellComponentMap = {},
    /**
     * Contains a custom row component
     * @default "GridRow"
     */
    rowComponent = GridRow;

  /**
   * CSS classes for parent table
   */
  let klass = "";
  export { klass as class };

  $: mainRowComponent = rowComponent ? rowComponent : GridRow;
  $: column_keys = columns ? Object.keys(columns) : [];

  $: transforms = (column, row) => {
    if (valueTransformers && valueTransformers[column] && row) {
      return valueTransformers[column](row[column], row);
    }

    return row[column];
  };

  $: isVisible = (column) => {
    if (
      visibilityMap &&
      typeof visibilityMap[column] != "undefined" &&
      visibilityMap[column] === false
    ) {
      return false;
    }
    return true;
  };

  $: classNames = (column, row) => {
    if (classTransformers && classTransformers[column] && row) {
      return classTransformers[column](row[column], row);
    }

    return "";
  };

  $: styles = (column, row) => {
    if (styleTransformers && styleTransformers[column] && row) {
      return styleTransformers[column](row[column], row);
    }

    return "";
  };

  $: cellComponent = (column, row) => {
    if (cellComponentMap && cellComponentMap[column] && row) {
      return cellComponentMap[column](row[column], row);
    }

    return null;
  };

  function changed() {
    /**
     * Fires an event every time the `select all` checkbox is toggled
     */
    fire("toggleSelectAll", selectAll);
  }
</script>
