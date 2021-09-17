<!--
  @component


  @param {boolean} [hasSearch=true] - HasSearch property, Default: `true`
  @param {boolean} [hasFilters=true] - HasFilters property, Default: `true`
  @param {string} [placeholder=""] - Placeholder property, Default: `""`
  @param {object} [filters={}] - Filters property, Default: `{}`
  @param {string} [q=""] - Q property, Default: `""`
  @param {string} [filter_in_use_class="is-in-use"] - Filter_in_use_class property, Default: `"is-in-use"`
  @param {string} [filter_not_in_use_class="is-not-in-use"] - Filter_not_in_use_class property, Default: `"is-not-in-use"`
  @param {object} [filterComponent=null] - FilterComponent property, Default: `null`
  @param {object} [filter_label_map={}] - Filter_label_map property, Default: `{}`

  ### Events
  - `resetSearch`
  - `search`

-->
<form on:submit|preventDefault={dosearch}>
  <div class="field has-addons">
    {#if hasSearch}
      <p class="control is-expanded">
        <input
          class="input {query != '' && query != undefined
            ? filter_in_use_class
            : filter_not_in_use_class}"
          type="text"
          {placeholder}
          bind:value={query} />
      </p>
    {/if}
    {#if hasFilters}
      {#each _filters as filter, i}
        <svelte:component
          this={usedFilterComponent}
          {filterVals}
          {filter}
          {filterWidthStyle}
          hilightClass={filterVals[filter.name] != "" &&
          filterVals[filter.name] != undefined
            ? filter_in_use_class
            : filter_not_in_use_class}
          {filter_label_map} />
      {/each}
    {/if}
    {#if changed}
      <p class="control">
        <button class="button is-danger" type="button" on:click={doresetSearch}>
          <Icon icon="close" size="small" />
        </button>
      </p>
    {/if}
    <p class="control">
      <button class="button is-primary" type="submit">
        <Icon icon="search" size="small" /> <span>Search</span>
      </button>
    </p>
  </div>
</form>

<script>
  import { createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";
  import SearchFilter from "./SearchFilter.svelte";

  const fire = createEventDispatcher();

  export let hasSearch = true,
    hasFilters = true,
    placeholder = "",
    filters = {},
    q = "",
    filter_in_use_class = "is-in-use",
    filter_not_in_use_class = "is-not-in-use",
    filterComponent = null,
    filter_label_map = {};

  let query = "",
    _filters = [],
    filterVals = {};

  $: usedFilterComponent = filterComponent ? filterComponent : SearchFilter;
  $: filterWidthStyle = hasSearch
    ? `max-width:${(1 / (_filters.length + 2)) * 100}%`
    : "";
  $: changed = q && q.trim() != "";
  $: q, qHasChanged();
  $: filters, filtersHaveChanged();

  function filtersHaveChanged() {
    if (filters) {
      _filters = [];
      for (let i in filters) {
        _filters.push({
          name: i,
          options: filters[i],
        });
      }
    }
  }

  function qHasChanged() {
    if (q == "") {
      //bail out early and reset all filters
      //this happens when using back/forward browser buttons
      return doresetSearch();
    }
    let qparts = q.split("~"),
      qstr = qparts.shift(),
      qfilters = {};
    query = qstr;
    for (let i = 0; i < qparts.length; i++) {
      let qqp = qparts[i].split(":");
      qfilters[qqp[0]] = qqp[1];
    }

    filterVals = qfilters;
  }

  function doresetSearch() {
    for (var i in filterVals) {
      filterVals[i] = "";
    }
    query = "";
    filterVals = filterVals;

    fire("resetSearch");
  }

  function dosearch() {
    let ret = [];
    ret.push(query);
    for (var i in filterVals) {
      filterVals[i] && ret.push(i + ":" + filterVals[i]);
    }
    fire("search", ret.join("~"));
  }
</script>
