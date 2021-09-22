<!--
  @component


  @param {string} [iteration_key="id"] - Iteration key, Default: `"id"`
  @param {array} [data=[]] - Contains all the results which need to list, Default: `[]`
  @param {boolean} [transition=false] - Determines whether it has transision effect or not, Default: `false`
  @param {object} [tileItemComponent=null] - It contains a custom component, Default: `null`
  @param {number} [per_row=3] - Set how many items in a row, Default: `3`
  @param {string} [columns=""] - Table coulumn names. {db_field_name: column_name}, Default: `""`
  @param {boolean} [clickableRows=false] - Determines whether rows are clickable or not, Default: `false`
  @param {boolean} [bulk_actions=false] - If it is true, can select multiple rows and do multiple actions, Default: `false`
  @param {boolean} [selectAll=false] - If it is true, it will select all rows checkbox, Default: `false`
  @param {array} [selectedIds=[]] - This one contains all the selected rows unique id value, Default: `[]`
  @param {string} [selectCheckboxColor="info"] - This will set color for the select all checkbox, Default: `"info"`
  @param {string} [selectCheckboxSize="medium"] - This will set the size of each checkbox, Default: `"medium"`
  @param {object} [valueTransformers={}] - It contains all the custom values for each column, Default: `{}`
  @param {object} [classTransformers={}] - It contains css class names for each column, Default: `{}`
  @param {object} [styleTransformers={}] - It contains css styles for each column, Default: `{}`
  @param {object} [visibilityMap={}] - it contains list of columns which can be visible or not, Default: `{}`

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
     * Contains all the results which need to list
     */
    data = [],
    /**
     * Determines whether it has transision effect or not
     */
    transition = false,
    /**
     * It contains a custom component
     */
    tileItemComponent = null,
    /**
     * Set how many items in a row
     */
    per_row = 3,
    /**
     * Table coulumn names. {db_field_name: column_name}
     */
    columns = "",
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
