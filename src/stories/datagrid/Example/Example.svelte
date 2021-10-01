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

{#if is_loading}
  <Loader
    spinner_color="primary"
    spinner_size="medium"
    background_color="transparent"
    background_size="medium"
    has_overlay={true} />
{/if}

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
    Loader,
  } from "@kws3/ui";
  const response = require("./users.json");

  let hasSearch = true,
    hasFilters = true,
    placeholder = "",
    filters = response.filters,
    options = response.options,
    data = [],
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
    per_row = 3,
    perPageOptions = [5];

  let is_loading = false;
  let original_data = response.records;
  let is_tile_view = false;
  let limit = meta.limit;
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
    data = original_data.slice((page_number - 1) * limit, page_number * limit);
    is_loading = false;
  }

  function search({ detail }) {
    console.log(detail);
    /*is_searching = true;
    setTimeout(() => {
      is_searching = false;
    }, 2000);*/
  }

  function resetSearch() {
    alert("Reset");
  }

  function switchView() {
    is_tile_view = !is_tile_view;
  }

  function paginate({ detail }) {
    var pageArr = { 0: 1, 5: 2, 10: 3 };
    page_number = pageArr[detail.offset];
    meta.offset = detail.offset;
  }

  onMount(() => {});
</script>
