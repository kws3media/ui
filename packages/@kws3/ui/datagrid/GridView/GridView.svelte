<!--
  @component


  @param {string} [iteration_key="id"] - Iteration key, Default: `"id"`
  @param {array} [data=[]] - Contains all the results which need to display in table, Default: `[]`
  @param {object} [columns={}] - Table coulumn names. {db_field_name: column_name}, Default: `{}`
  @param {boolean} [transition=false] - Determines whether it has transision effect or not, Default: `false`
  @param {boolean} [is_striped=true] - Determines whether it has stripes to the table, Default: `true`
  @param {boolean} [clickableRows=false] - Determines whether rows are clickable or not, Default: `false`
  @param {boolean} [bulk_actions=false] - If it is true, can select multiple rows and do multiple actions, Default: `false`
  @param {boolean} [selectAll=false] - If it is true, it will select all rows checkbox, Default: `false`
  @param {array} [selectedIds=[]] - This one contains all the selected rows unique id value, Default: `[]`
  @param {string} [selectAllCheckboxColor="primary"] - This will set color for the select all checkbox, Default: `"primary"`
  @param {string} [selectCheckboxColor="info"] - This will set color for the checkbox on each row, Default: `"info"`
  @param {string} [selectCheckboxSize="medium"] - This will set the size of each checkbox, Default: `"medium"`
  @param {object} [valueTransformers={}] - It contains all the custom values for each column, Default: `{}`
  @param {object} [classTransformers={}] - It contains css class names for each column, Default: `{}`
  @param {object} [styleTransformers={}] - It contains css styles for each column, Default: `{}`
  @param {object} [visibilityMap={}] - it contains list of columns which can be visible or not, Default: `{}`
  @param {object} [cellComponentMap={}] - it contains list of columns with its custom cell component, Default: `{}`
  @param {any} [rowComponent="GridRow"] - it contains a custom row component, Default: `"GridRow"`

  ### Events
  - `toggleSelectAll` - It fires an event on every time toggle the select all checkbox
  - `rowClick`
  - `rowSelectChecked`
  - `_forwardEvent`

-->
<div class="data-table" data-cy="data-table">
  <table
    class="table is-fullwidth {is_striped ? 'is-striped' : ''} {clickableRows
      ? 'is-hoverable'
      : ''} is-bordered">
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
          {isVisible}
          {transforms}
          {classNames}
          {styles}
          {cellComponent}
          {row}
          {bulk_actions}
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
   * Iteration key
   */
  export let iteration_key = "id",
    /**
     * Contains all the results which need to display in table
     */
    data = [],
    /**
     * Table coulumn names. {db_field_name: column_name}
     */
    columns = {},
    /**
     * Determines whether it has transision effect or not
     */
    transition = false,
    /**
     * Determines whether it has stripes to the table
     * @link https://bulma.io/documentation/elements/table/#modifiers
     */
    is_striped = true,
    /**
     * Determines whether rows are clickable or not
     */
    clickableRows = false,
    /**
     * If it is true, can select multiple rows and do multiple actions
     */
    bulk_actions = false,
    /**
     *If it is true, it will select all rows checkbox
     */
    selectAll = false,
    /**
     * This one contains all the selected rows unique id value
     */
    selectedIds = [],
    /**
     * This will set color for the select all checkbox
     */
    selectAllCheckboxColor = "primary",
    /**
     * This will set color for the checkbox on each row
     */
    selectCheckboxColor = "info",
    /**
     * This will set the size of each checkbox
     */
    selectCheckboxSize = "medium",
    /**
     * It contains all the custom values for each column
     */
    valueTransformers = {},
    /**
     * It contains css class names for each column
     */
    classTransformers = {},
    /**
     * It contains css styles for each column
     */
    styleTransformers = {},
    /**
     * it contains list of columns which can be visible or not
     */
    visibilityMap = {},
    /**
     * it contains list of columns with its custom cell component
     */
    cellComponentMap = {},
    /**
     *  it contains a custom row component
     * @default "GridRow"
     */
    rowComponent = GridRow;

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
     * It fires an event on every time toggle the select all checkbox
     */
    fire("toggleSelectAll", selectAll);
  }
</script>
