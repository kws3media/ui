<!--
  @component


  @param {object} [filter={}] - Contains filter options for dropdown, Default: `{}`
  @param {object} [filterVals={}] - Contains the selected filter values, Default: `{}`
  @param {string} [filterWidthStyle=""] - css style for the filters, Default: `""`
  @param {string} [hilightClass=""] - css class for heighlight the filter, Default: `""`
  @param {object} [filter_label_map={}] - Contains custome labes for the filter, Default: `{}`

-->

{#if filter.type == "multiselect"}
  <div class="control" style={filterWidthStyle}>NOT IMPLEMENTED YET</div>
{:else if filter.type == "date"}
  <div class="control" style={filterWidthStyle}>
    <Datepicker
      class={hilightClass}
      bind:value={filterVals[filter.name]}
      placeholder="{capitaliseFirstLetter(name)} Date" />
  </div>
{:else if filter.type == "daterange"}
  <div class="control" style={filterWidthStyle}>
    <Datepicker
      class={hilightClass}
      bind:value={filterVals[filter.name]}
      range_mode
      placeholder="{capitaliseFirstLetter(name)} Date Range" />
  </div>
{:else if filter.options.length > 10}
  <SearchableSelect
    data={filter.options}
    placeholder={`Any ${name}`}
    bind:value={filterVals[filter.name]}
    searchKey="name"
    searchValue="id"
    classes={`control ${hilightClass}`}
    style={filterWidthStyle}
    {cy} />
{:else}
  <div
    class="select {hilightClass}"
    style={filterWidthStyle}
    data-cy="select-container">
    <select
      bind:value={filterVals[filter.name]}
      class="is-radiusless {hilightClass}"
      style="max-width:100%"
      data-cy={cy}>
      <option value="">Any {name}</option>
      {#each filter.options as option}
        <option value={option.id + ""}>{option.name}</option>
      {/each}
    </select>
  </div>
{/if}

<script>
  import { SearchableSelect, Datepicker } from "@kws3/ui";
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
     * css style for the filters
     */
    filterWidthStyle = "",
    /**
     * css class for heighlight the filter
     */
    hilightClass = "",
    /**
     * Contains custome labes for the filter
     */
    filter_label_map = {};

  $: name = filter_label_map[filter.name]
    ? filter_label_map[filter.name]
    : filter.name.replace(/_/g, " ");
  $: cy = name ? name.replace(/\s+/g, "-").toLowerCase() : "";
</script>
