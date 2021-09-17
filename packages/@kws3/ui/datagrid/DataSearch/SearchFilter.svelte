<!--
  @component


  @param {object} [filter={}] - Filter property, Default: `{}`
  @param {object} [filterVals={}] - FilterVals property, Default: `{}`
  @param {string} [filterWidthStyle=""] - FilterWidthStyle property, Default: `""`
  @param {string} [hilightClass=""] - HilightClass property, Default: `""`
  @param {object} [filter_label_map={}] - Filter_label_map property, Default: `{}`

-->
{#if filter.options.length > 10}
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
  import { SearchableSelect } from "@kws3/ui";
  export let filter = {},
    filterVals = {},
    filterWidthStyle = "",
    hilightClass = "",
    filter_label_map = {};

  $: name = filter_label_map[filter.name]
    ? filter_label_map[filter.name]
    : filter.name.replace(/_/g, " ");
  $: cy = name ? name.replace(/\s+/g, "-").toLowerCase() : "";
</script>
