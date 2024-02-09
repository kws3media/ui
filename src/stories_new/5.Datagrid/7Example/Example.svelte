<div class="columns is-mobile">
  <div class="column is-3">
    <ToggleControl>
      <label for="some-primary-text" class="label">
        {is_tile_view ? "Tile" : "Grid"} view
      </label>
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

<hr />

{#if is_loading}
  <Loader
    spinner_color="primary"
    spinner_size="medium"
    background_color="transparent"
    background_size="medium"
    has_overlay={true} />
{/if}

{#if data}
  <div class="columns" id="datagrid-demo">
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
    </div>
  </div>
  <DataSort {options} {sort_by} on:sort={sort} />

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
          {valueTransformers}
          {classTransformers}
          {styleTransformers}
          {visibilityMap} />
      {:else}
        <div>
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
        </div>
      {/if}
    </div>
  </div>

  {#if has_pagination}
    <div class="columns">
      <div class="column">
        <Pagination {...meta} {perPageOptions} on:paginate={paginate} />
      </div>
    </div>
  {/if}
{/if}

<hr />

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
  import { response } from "./users.js";

  let hasSearch = true,
    hasFilters = true,
    placeholder = "Search by name or surname",
    filters = response.filters,
    options = response.options,
    data = [],
    columns = {
      id: "ID",
      name: "Name",
      surname: "Surname",
      role: "Role",
      status: "Status",
    },
    meta = response.meta,
    q = "",
    filter_in_use_class = "is-in-use",
    filter_not_in_use_class = "is-not-in-use",
    filterComponent = null,
    filter_label_map = {},
    sort_by = "",
    iteration_key = "id",
    transition = true,
    is_striped = true,
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    /**
     * @type {Exclude<import('@kws3/ui/types').ColorOptions, 'success'>}
     */
    selectAllCheckboxColor = "primary",
    /**
     * @type import('@kws3/ui/types').ColorOptions
     */
    selectCheckboxColor = "info",
    /**
     * @type import('@kws3/ui/types').SizeOptions
     */
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
        case "U":
          return "User";
      }
    },
    status(v) {
      return v === 1 ? "Active" : "Inactive";
    },
  };

  $: data = original_data.slice((page_number - 1) * limit, page_number * limit);
  $: has_pagination = original_data.length > limit;

  function search({ detail }) {
    page_number = 1;
    meta.offset = detail.offset;
    const data_from_json = response.records;
    const search_vals = detail.split("~");
    const input_field = search_vals[0].trim();
    let filtered = original_data;

    if (input_field) {
      filtered = data_from_json.filter(function (item) {
        return (
          item.name.toLowerCase().includes(input_field.toLowerCase()) ||
          item.surname.toLowerCase().includes(input_field.toLowerCase())
        );
      });
    }

    if (search_vals.length > 1) {
      let role_field = "";
      let sts_field = "";
      let serachString = "";
      for (const val of search_vals) {
        if (val.startsWith("role:")) {
          serachString += "R";
          role_field = val.split(":")[1];
        } else if (val.startsWith("status:")) {
          serachString += "S";
          sts_field = val.split(":")[1];
        }
      }

      var filter_data = data_from_json;
      if (input_field) {
        filter_data = filtered;
      }
      const statusValue =
        typeof sts_field !== "undefined" ? Number(sts_field) : sts_field;
      const roleValue =
        typeof role_field !== "undefined" ? role_field : role_field;

      filtered = filter_data.filter(function (item) {
        if (serachString === "RS") {
          return item["status"] === statusValue && item["role"] === roleValue;
        }
        if (serachString === "S") {
          return item["status"] === statusValue;
        }
        if (serachString === "R") {
          return item["role"] === roleValue;
        }
      });
    }

    q = input_field + "~";
    original_data = filtered;
    page_number = 1;
    meta.offset = detail.offset;
    meta.total = original_data.length;
  }

  function resetSearch() {
    q = "";
    original_data = response.records;
    meta.total = original_data.length;
  }

  function switchView() {
    is_tile_view = !is_tile_view;
    page_number = 1;
    meta.offset = 5;
  }

  function paginate({ detail }) {
    var pageArr = { 0: 1, 5: 2, 10: 3 };
    page_number = pageArr[detail.offset];
    meta.offset = detail.offset;
  }

  function sort({ detail }) {
    var sort_val = detail.split(" ");
    var key = sort_val[0];
    var val = sort_val[1];
    if (val === "DESC") {
      original_data = original_data.sort(
        (a, b) => Number(b[key]) - Number(a[key]),
      );
    } else {
      original_data = original_data.sort(
        (a, b) => Number(a[key]) - Number(b[key]),
      );
    }
  }

  onMount(() => {});
</script>
