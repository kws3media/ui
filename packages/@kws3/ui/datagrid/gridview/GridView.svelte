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

  export let iteration_key = "id",
    data = [],
    columns = {},
    meta = {},
    transition = false,
    is_striped = true,
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    selectAllCheckboxColor = "primary",
    selectCheckboxColor = "info",
    selectCheckboxSize = "medium",
    valueTransformers = {},
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {},
    cellComponentMap = {},
    tileItemComponent = null,
    per_row = 3,
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
    fire("toggleSelectAll", selectAll);
  }
</script>
