<!--
  @component


  @param {string} [iteration_key="id"] - Iteration_key property, Default: `"id"`
  @param {array} [data=[]] - Data property, Default: `[]`
  @param {boolean} [transition=false] - Transition property, Default: `false`
  @param {object} [tileItemComponent=null] - TileItemComponent property, Default: `null`
  @param {number} [per_row=3] - Per_row property, Default: `3`
  @param {string} [columns=""] - Columns property, Default: `""`
  @param {boolean} [clickableRows=false] - ClickableRows property, Default: `false`
  @param {boolean} [bulk_actions=false] - Bulk_actions property, Default: `false`
  @param {boolean} [selectAll=false] - SelectAll property, Default: `false`
  @param {array} [selectedIds=[]] - SelectedIds property, Default: `[]`
  @param {string} [selectCheckboxColor="info"] - SelectCheckboxColor property, Default: `"info"`
  @param {string} [selectCheckboxSize="medium"] - SelectCheckboxSize property, Default: `"medium"`
  @param {object} [valueTransformers={}] - ValueTransformers property, Default: `{}`
  @param {object} [classTransformers={}] - ClassTransformers property, Default: `{}`
  @param {object} [styleTransformers={}] - StyleTransformers property, Default: `{}`
  @param {object} [visibilityMap={}] - VisibilityMap property, Default: `{}`

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

  export let iteration_key = "id",
    data = [],
    transition = false,
    tileItemComponent = null,
    per_row = 3,
    columns = "",
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    selectCheckboxColor = "info",
    selectCheckboxSize = "medium",
    valueTransformers = {},
    classTransformers = {},
    styleTransformers = {},
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
