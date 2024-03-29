<!--
  @component


  @param {string} [iteration_key="id"] - Iteration key, Default: `"id"`
  @param {array} [data=[]] - Contains all the results to be listed, Default: `[]`
  @param {boolean} [transition=false] - Determines if a transition effect is used, Default: `false`
  @param {object} [tileItemComponent=null] - Contains a custom component, Default: `null`
  @param {number} [per_row=3] - Sets how many items to display in a row. This is ignored when `fluid_items_per_row` is `true`, Default: `3`
  @param {boolean} [fluid_items_per_row=false] - When set to `true`, the number of items per row varies with available space, Default: `false`
  @param {string} [min_width="unset"] - CSS string specifying minimum width, this is only applied when `fluid_items_per_row` is `true`, Default: `"unset"`
  @param {string} [max_width="unset"] - CSS string specifying maximum width, this is only applied when `fluid_items_per_row` is `true`, Default: `"unset"`
  @param {boolean} [grow=true] - Whether a tile can grow if there is space available, this is only applied when `fluid_items_per_row` is `true`, Default: `true`
  @param {boolean} [shrink=true] - Whether a tile can shrink if there isn't enough space available, this is only applied when `fluid_items_per_row` is `true`, Default: `true`
  @param {object} [columns={}] - Column names for the displayed table {db_field_name: column_name}, Default: `{}`
  @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
  @param {boolean} [clickableRows=false] - Determines whether rows are clickable or not, Default: `false`
  @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
  @param {object} [valueTransformers={}] - Contains all custom values for each column, Default: `{}`
  @param {object} [classTransformers={}] - CSS class names for each column, Default: `{}`
  @param {object} [styleTransformers={}] - CSS styles for each column, Default: `{}`
  @param {object} [visibilityMap={}] - Contains list of columns which can be visible or not, Default: `{}`
  @param {string} [class=""] - CSS classes for tiles wrapper, Default: `""`

  ### Events
  - `rowClick`
  - `rowSelectChecked`
  - `_forwardEvent`

-->
<div class="columns is-multiline {klass}">
  {#each data as row, row_index (row[iteration_key])}
    <div class="column is-{column_size}" style={fluid_css}>
      <Transition {transition} y={20} delay={20 * row_index}>
        <svelte:component
          this={mainTileComponent}
          on:rowClick
          on:rowSelectChecked
          on:_forwardEvent
          {row_index}
          {column_keys}
          {visualActivationOnClick}
          {clickableRows}
          {isVisible}
          {transforms}
          {classNames}
          {styles}
          {row}
          {bulk_actions}
          {activatedId}
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
     * Sets how many items to display in a row. This is ignored when `fluid_items_per_row` is `true`
     */
    per_row = 3,
    /**
     * When set to `true`, the number of items per row varies with available space
     */
    fluid_items_per_row = false,
    /**
     * CSS string specifying minimum width, this is only applied when `fluid_items_per_row` is `true`
     */
    min_width = "unset",
    /**
     * CSS string specifying maximum width, this is only applied when `fluid_items_per_row` is `true`
     */
    max_width = "unset",
    /**
     * Whether a tile can grow if there is space available, this is only applied when `fluid_items_per_row` is `true`
     */
    grow = true,
    /**
     * Whether a tile can shrink if there isn't enough space available, this is only applied when `fluid_items_per_row` is `true`
     */
    shrink = true,
    /**
     * Column names for the displayed table {db_field_name: column_name}
     */
    columns = {},
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

  let /**
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
    selectCheckboxSize = "medium";

  /**
   * CSS classes for tiles wrapper
   */
  let klass = "";
  export { klass as class };

  $: mainTileComponent = tileItemComponent ? tileItemComponent : TileViewItem;
  $: column_size = fluid_items_per_row
    ? "fluid"
    : per_row < 12
    ? Math.floor(12 / per_row)
    : 12;
  $: fluid_css = fluid_items_per_row
    ? `min-width:${min_width};max-width:${max_width};flex-shrink:${Number(
        shrink
      )};flex-grow:${Number(grow)};`
    : "";
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
