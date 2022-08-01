<div id="ss_container">
  <div class="columns">
    <div class="column is-6">
      <KwsSearchTool
        {size}
        {color}
        {searchableKeys}
        bind:options
        {highlighted_results}
        {scoreThreshold}
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly} />
      Output data:
      <code>{JSON.stringify(selected_character, null, 2)}</code>
    </div>
  </div>
</div>

<script>
  import { SearchTool as KwsSearchTool } from "@kws3/ui";

  import { onMount } from "svelte";

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    options = [],
    searchableKeys = [],
    search_strategy = "fuzzy",
    highlighted_results = true,
    scoreThreshold = 5,
    placeholder = "Marvel characters...";

  let klass = "";
  export { klass as class };
</script>
