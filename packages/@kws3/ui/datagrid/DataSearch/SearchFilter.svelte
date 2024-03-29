<!--
  @component


  @param {object} [filter={}] - Contains filter options for dropdown, Default: `{}`
  @param {object} [filterVals={}] - Contains the selected filter values, Default: `{}`
  @param {string} [filterWidthStyle=""] - Inline CSS style for the filters, Default: `""`
  @param {string} [hilightClass=""] - CSS classes for highlighted filter, Default: `""`
  @param {object} [filter_label_map={}] - Contains custom labels for the filter, Default: `{}`

-->

{#if filter.type === "multiselect"}
  <div
    class="control search-control"
    class:is-expanded={shouldExpandToFill}
    style={filterWidthStyle}>
    <MultiSelect
      options={sanitizedOptions}
      placeholder={`Any ${name}`}
      bind:value={multiSelectValue}
      on:change={convertValuesToString}
      search_key="name"
      value_key="id"
      summary_mode
      class={hilightClass} />
  </div>
{:else if filter.type === "date"}
  <div
    class="control search-control"
    class:is-expanded={shouldExpandToFill}
    style={filterWidthStyle}>
    <Datepicker
      class={hilightClass}
      bind:value={filterVals[filter.name]}
      placeholder="{capitaliseFirstLetter(name)} Date" />
  </div>
{:else if filter.type === "daterange"}
  <div
    class="control search-control"
    class:is-expanded={shouldExpandToFill}
    style={filterWidthStyle}>
    <Datepicker
      class={hilightClass}
      bind:value={filterVals[filter.name]}
      range_mode
      placeholder="{capitaliseFirstLetter(name)} Date Range" />
  </div>
{:else if filter.options.length > 10}
  <div
    class="control search-control"
    class:is-expanded={shouldExpandToFill}
    style={filterWidthStyle}>
    <SearchableSelect
      options={sanitizedOptions}
      placeholder={`Any ${name}`}
      bind:value={filterVals[filter.name]}
      search_key="name"
      value_key="id"
      class={hilightClass} />
  </div>
{:else}
  <div
    class="select control search-control {hilightClass}"
    class:is-expanded={shouldExpandToFill}
    style={filterWidthStyle}
    data-cy="select-container">
    <select
      bind:value={filterVals[filter.name]}
      class="is-radiusless {hilightClass}"
      style="max-width:100%;width:100%;"
      data-cy={cy}>
      {#each sanitizedOptions as option}
        {#if option}
          <option value={option.id}>{option.name}</option>
        {/if}
      {/each}
    </select>
  </div>
{/if}

<script>
  import { tick } from "svelte";
  import { SearchableSelect, MultiSelect, Datepicker } from "@kws3/ui";
  import { capitaliseFirstLetter } from "@kws3/ui/utils";

  /**
   * Contains filter options for dropdown
   */
  export let filter = {},
    /**
     * Contains the selected filter values
     */
    filterVals = {},
    /**
     * Inline CSS style for the filters
     */
    filterWidthStyle = "",
    /**
     * CSS classes for highlighted filter
     */
    hilightClass = "",
    /**
     * Contains custom labels for the filter
     */
    filter_label_map = {};

  let sanitizedOptions = [],
    multiSelectValue = [];

  $: name = filter_label_map[filter.name]
    ? filter_label_map[filter.name]
    : filter.name.replace(/_/g, " ");
  $: filter, name, sanitizeOptions();
  $: cy = name ? name.replace(/\s+/g, "-").toLowerCase() : "";

  $: filterVals, filter, convertToValuesArray();

  $: shouldExpandToFill = !filterWidthStyle || filterWidthStyle.trim() === "";

  function convertValuesToString() {
    tick().then(() => {
      filterVals[filter.name] = multiSelectValue
        ? multiSelectValue.join("|")
        : "";
    });
  }
  function convertToValuesArray() {
    if (filter && filter.type === "multiselect") {
      multiSelectValue = filterVals[filter.name]
        ? filterVals[filter.name].split("|")
        : [];
    }
  }

  function sanitizeOptions() {
    let options = filter.options || [];
    if (options.length) {
      options =
        filter.type === "multiselect"
          ? options
          : [{ id: "", name: `Any ${name}` }, ...options];
      options = options.map((el) => {
        el.id = el.id + "";
        return el;
      });
    }
    sanitizedOptions = options;
  }
</script>
