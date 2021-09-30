<!--
  @component


  @param {string} [iteration_key="id"] - Iteration key, Default: `"id"`
  @param {array} [data=[]] - Contains all the results to be listed, Default: `[]`
  @param {boolean} [transition=false] - Determines if a transition effect is used, Default: `false`
  @param {object} [tileItemComponent=null] - Contains a custom component, Default: `null`
  @param {number} [per_row=3] - Sets how many items to display in a row, Default: `3`
  @param {string} [columns=""] - Column names for the displayed table {db_field_name: column_name}, Default: `""`
  @param {boolean} [clickableRows=false] - Determines whether rows are clickable or not, Default: `false`
  @param {boolean} [bulk_actions=false] - Determines if selecting multiple rows and doing multiple actions is allowed, Default: `false`
  @param {boolean} [selectAll=false] - Determines if all rows are selected, Default: `false`
  @param {array} [selectedIds=[]] - List of unique IDs of all the selected rows, Default: `[]`
  @param {string} [selectCheckboxColor="info"] - Color of the `select all` checkbox, Default: `"info"`
  @param {string} [selectCheckboxSize="medium"] - Size of each checkbox, Default: `"medium"`
  @param {object} [valueTransformers={}] - Contains all custom values for each column, Default: `{}`
  @param {object} [classTransformers={}] - CSS class names for each column, Default: `{}`
  @param {object} [styleTransformers={}] - CSS styles for each column, Default: `{}`
  @param {object} [visibilityMap={}] - Contains list of columns which can be visible or not, Default: `{}`

  ### Events
  - `rowClick`
  - `rowSelectChecked`
  - `_forwardEvent`

-->
<div class="columns is-multiline">
  {#each data as row, row_index (row[iteration_key])}
    <div class="column is-{column_size}">
      <Transition {transition} y={20} delay={20 * row_index}>
        <svelte:component
          this={mainTileComponent}
          on:rowClick
          on:rowSelectChecked
          on:_forwardEvent
          {row_index}
          {column_keys}
          {clickableRows}
          {isVisible}
          {transforms}
          {classNames}
          {styles}
          {row}
          {bulk_actions}
          {selectedIds}
          {selectCheckboxColor}
          {selectCheckboxSize}
          checked={selectAll} />
      </Transition>
    </div>
  {/each}
</div>

<script>
  import { Transition } from "@kws3/ui";
  import TileViewItem from "./TileViewItem.svelte";

  /**
   * Iteration key
   */
  export let iteration_key = "id",
    /**
     * Contains all the results to be listed
     */
    data = [],
    /**
     * Determines if a transition effect is used
     */
    transition = false,
    /**
     * Contains a custom component
     */
    tileItemComponent = null,
    /**
     * Sets how many items to display in a row
     */
    per_row = 3,
    /**
     * Column names for the displayed table {db_field_name: column_name}
     */
    columns = "",
    /**
     * Determines whether rows are clickable or not
     */
    clickableRows = false,
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
     * Color of the `select all` checkbox
     */
    selectCheckboxColor = "info",
    /**
     * Size of each checkbox
     */
    selectCheckboxSize = "medium",
    /**
     * Contains all custom values for each column
     */
    valueTransformers = {},
    /**
     * CSS class names for each column
     */
    classTransformers = {},
    /**
     * CSS styles for each column
     */
    styleTransformers = {},
    /**
     * Contains list of columns which can be visible or not
     */
    visibilityMap = {};

  $: mainTileComponent = tileItemComponent ? tileItemComponent : TileViewItem;
  $: column_size = per_row < 12 ? Math.floor(12 / per_row) : 12;
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

    var map = {
      title: "title is-4",
      subtitle: "subtitle is-5",
    };

    return map[column] ? map[column] : "";
  };

  $: styles = (column, row) => {
    if (styleTransformers && styleTransformers[column] && row) {
      return styleTransformers[column](row[column], row);
    }
    return "";
  };
</script>
