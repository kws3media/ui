<!--
  @component


  @param {boolean} [hasSearch=true] - Weather it has a search input or not, Default: `true`
  @param {boolean} [hasFilters=true] - Weather it has a filters or not, Default: `true`
  @param {string} [placeholder=""] - Placeholder for the search input, Default: `""`
  @param {object} [filters={}] - It contains all the filter dropdown values, Default: `{}`
  @param {string} [q=""] - Query string from the browser url, Default: `""`
  @param {string} [filter_in_use_class="is-in-use"] - Css class for in use filter, Default: `"is-in-use"`
  @param {string} [filter_not_in_use_class="is-not-in-use"] - Css class for not in use filters, Default: `"is-not-in-use"`
  @param {object} [filterComponent=null] - Use a custom component for filters, Default: `null`
  @param {object} [filter_label_map={}] - Contains all the lables for the filter dropdowns, Default: `{}`

  ### Events
  - `resetSearch` - It fire an event on reset search
  - `search` - It fire an event on search

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

  /**
   * Weather it has a search input or not
   */
  export let hasSearch = true,
    /**
     * Weather it has a filters or not
     */
    hasFilters = true,
    /**
     * Placeholder for the search input
     */
    placeholder = "",
    /**
     * It contains all the filter dropdown values
     */
    filters = {},
    /**
     * Query string from the browser url
     */
    q = "",
    /**
     * Css class for in use filter
     */
    filter_in_use_class = "is-in-use",
    /**
     * Css class for not in use filters
     */
    filter_not_in_use_class = "is-not-in-use",
    /**
     * Use a custom component for filters
     */
    filterComponent = null,
    /**
     * Contains all the lables for the filter dropdowns
     */
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
        let obj = { name: i, options: [], type: "select" };
        if (Array.isArray(filters[i])) {
          obj.options = filters[i];
        } else {
          if (filters[i].options) {
            obj.options = filters[i].options;
          }
          if (filters[i].type) {
            obj.type = filters[i].type;
          }
        }
        _filters.push(obj);
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

    /**
     * It fire an event on reset search
     */
    fire("resetSearch");
  }

  function dosearch() {
    let ret = [];
    ret.push(query);
    for (var i in filterVals) {
      filterVals[i] && ret.push(i + ":" + filterVals[i]);
    }
    /**
     * It fire an event on search
     */
    fire("search", ret.join("~"));
  }
</script>
