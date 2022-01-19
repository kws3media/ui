<!--
  @component


  @param {boolean} [hasSearch=true] - Determines whether there is a search input or not, Default: `true`
  @param {boolean} [hasFilters=true] - Determines if there are filters on search, Default: `true`
  @param {string} [placeholder=""] - Placeholder text for the search input, Default: `""`
  @param {object} [filters={}] - Contains all the filter dropdown values, Default: `{}`
  @param {string} [q=""] - Query string from the browser url, Default: `""`
  @param {string} [filter_in_use_class="is-in-use"] - CSS class for in use filters, Default: `"is-in-use"`
  @param {string} [filter_not_in_use_class="is-not-in-use"] - Css class for not in use filters, Default: `"is-not-in-use"`
  @param {object} [filterComponent=null] - To use a custom component for filters, Default: `null`
  @param {object} [filter_label_map={}] - Contains all the labels for the filter dropdowns, Default: `{}`

  ### Events
  - `resetSearch` - Triggered when the search is reset
  - `search` - Event triggered on search

-->

<form class="kws-grid-search" on:submit|preventDefault={dosearch}>
  <div class="field has-addons outer-level-field">
    {#if hasSearch}
      <div class="control is-expanded main-search">
        <input
          class="input {query != '' && query != undefined
            ? filter_in_use_class
            : filter_not_in_use_class}"
          type="text"
          {placeholder}
          bind:value={query} />
      </div>
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

    <div class="field has-addons action-buttons-field">
      {#if changed}
        <div class="control is-expanded clear-search">
          <button
            class="button is-danger"
            type="button"
            on:click={doresetSearch}>
            <Icon icon="close" size="small" />
            <span class="is-hidden-desktop is-hidden-tablet">Clear</span>
          </button>
        </div>
      {/if}
      <div class="control is-expanded search-submit">
        <button class="button is-primary" type="submit">
          <Icon icon="search" size="small" /> <span>Search</span>
        </button>
      </div>
    </div>
  </div>
</form>

<script>
  import { createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";
  import SearchFilter from "./SearchFilter.svelte";

  const fire = createEventDispatcher();

  /**
   * Determines whether there is a search input or not
   */
  export let hasSearch = true,
    /**
     * Determines if there are filters on search
     */
    hasFilters = true,
    /**
     * Placeholder text for the search input
     */
    placeholder = "",
    /**
     * Contains all the filter dropdown values
     */
    filters = {},
    /**
     * Query string from the browser url
     */
    q = "",
    /**
     * CSS class for in use filters
     */
    filter_in_use_class = "is-in-use",
    /**
     * Css class for not in use filters
     */
    filter_not_in_use_class = "is-not-in-use",
    /**
     * To use a custom component for filters
     */
    filterComponent = null,
    /**
     * Contains all the labels for the filter dropdowns
     */
    filter_label_map = {};

  let query = "",
    _filters = [],
    filterVals = {},
    filterWidthStyle = "";

  $: usedFilterComponent = filterComponent ? filterComponent : SearchFilter;
  $: changed = q && q.trim() != "";
  $: q, qHasChanged();
  $: filters, filtersHaveChanged();

  function calculateMaxWidths() {
    filterWidthStyle = hasSearch
      ? `max-width:${(1 / (_filters.length + 2)) * 100}%`
      : "";
  }

  function filtersHaveChanged() {
    if (filters) {
      _filters = [];
      let temp = [];
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
        temp.push(obj);
      }
      _filters = temp;
    }

    calculateMaxWidths();
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

    if (hasFilters) {
      for (let i in _filters) {
        let filter = _filters[i];
        if (typeof qfilters[filter.name] == "undefined") {
          qfilters[filter.name] = "";
        }
      }
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
     * Triggered when the search is reset
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
     * Event triggered on search
     */
    fire("search", ret.join("~"));
  }
</script>
