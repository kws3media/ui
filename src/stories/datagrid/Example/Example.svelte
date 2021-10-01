<div class="columns">
  <div class="column is-3">
    <ToggleControl>
      <label for="some-primary-text" class="label"> Grid/Tile view </label>
      <Toggle
        on={false}
        on:change={switchView}
        disabled={false}
        color="info"
        class=""
        on_text="Grid"
        off_text="Tile"
        size="medium" />
    </ToggleControl>
  </div>
</div>

{#if data}
  <div class="columns">
    <div class="column">
      <DataSearch
        {hasSearch}
        {hasFilters}
        {placeholder}
        {filters}
        {q}
        {filter_in_use_class}
        {filter_not_in_use_class}
        {filterComponent}
        {filter_label_map}
        on:search={search}
        on:resetSearch={resetSearch} />
      <DataSort {options} {sort_by} />
    </div>
  </div>

  <div class="columns">
    <div class="column">
      {#if is_tile_view}
        <TileView
          {iteration_key}
          {data}
          {transition}
          {tileItemComponent}
          {per_row}
          {columns}
          {clickableRows}
          {bulk_actions}
          {selectAll}
          {selectedIds}
          {selectCheckboxColor}
          {selectCheckboxSize}
          {valueTransformers}
          {classTransformers}
          {styleTransformers}
          {visibilityMap} />
      {:else}
        <GridView
          {iteration_key}
          {data}
          {columns}
          {transition}
          {is_striped}
          {clickableRows}
          {bulk_actions}
          {selectAll}
          {selectedIds}
          {selectAllCheckboxColor}
          {selectCheckboxColor}
          {selectCheckboxSize}
          {valueTransformers}
          {classTransformers}
          {styleTransformers}
          {visibilityMap}
          {cellComponentMap} />
      {/if}
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <Pagination {meta} {perPageOptions} on:paginate={paginate} />
    </div>
  </div>
{/if}

<!--<div class="">
  {#if is_searching}Searching...{/if}
</div>-->
<style global>
  .has-addons .select {
    margin-top: 8px;
  }
</style>

<script>
  import { onMount } from "svelte";
  import {
    DataSearch,
    DataSort,
    GridView,
    TileView,
    Pagination,
    Toggle,
    ToggleControl,
  } from "@kws3/ui";
  const response = require("./users.json");

  let hasSearch = true,
    hasFilters = true,
    placeholder = "",
    filters = response.filters,
    options = response.options,
    data = response.records,
    columns = {
      id: "ID",
      name: "Name",
      surname: "Surname",
      role: "Role",
    },
    meta = response.meta,
    q = "",
    filter_in_use_class = "is-in-use",
    filter_not_in_use_class = "is-not-in-use",
    filterComponent = null,
    filter_label_map = {},
    sort_by = "",
    iteration_key = "id",
    transition = false,
    is_striped = true,
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    selectAllCheckboxColor = "primary",
    selectCheckboxColor = "info",
    selectCheckboxSize = "medium",
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {},
    cellComponentMap = {},
    tileItemComponent = null,
    per_row = 5,
    perPageOptions = [5];

  let is_tile_view = false;

  let is_searching = false;
  let page_number = 1;
  let valueTransformers = {
    role(v, row) {
      switch (row.role) {
        case "A":
          return "Administrator";
          break;
        case "U":
          return "User";
          break;
      }
    },
  };

  $: {
    data = data.slice((page_number - 1) * per_row, page_number * per_row);
  }

  function search() {
    is_searching = true;
    setTimeout(() => {
      is_searching = false;
    }, 2000);
  }

  function resetSearch() {
    alert("Reset");
  }

  function switchView() {
    is_tile_view = !is_tile_view;
  }

  function paginate() {
    alert(1);
  }

  onMount(() => {});
</script>
