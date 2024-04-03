<KwsDataSearch
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

<div class="">
  {#if is_searching}Searching...{/if}
</div>

<script>
  import { DataSearch as KwsDataSearch } from "@kws3/ui";

  export let hasSearch = true,
    hasFilters = true,
    placeholder = "",
    filters = {},
    q = "",
    filter_in_use_class = "is-in-use",
    filter_not_in_use_class = "is-not-in-use",
    filterComponent = null,
    filter_label_map = {};

  let is_searching = false;
  function search() {
    is_searching = true;
    setTimeout(() => {
      is_searching = false;
    }, 2000);
  }

  function resetSearch() {
    alert("Reset");
  }
</script>
