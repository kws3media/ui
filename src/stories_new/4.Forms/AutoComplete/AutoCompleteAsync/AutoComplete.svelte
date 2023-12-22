<div id="ss_container">
  <div class="columns">
    <div class="column is-6">
      <Panel title="Input data" collapsible collapsed>
        <pre>{JSON.stringify(characters_string_only, null, 1)}</pre>
      </Panel>
    </div>
    <div class="column is-6">
      <KwsAutoComplete
        {size}
        {color}
        search={fetchCharacters}
        options={characters_string_only}
        bind:value={selected_character_string}
        {search_strategy}
        {highlighted_results}
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly} />
      Output data:
      <code>{JSON.stringify(selected_character_string, null, 2)}</code>
    </div>
  </div>
</div>

<script>
  import {
    Panel,
    AutoComplete as KwsAutoComplete,
    activateTooltips,
  } from "@kws3/ui";

  import { onMount } from "svelte";

  import { characters_string_only, fetchCharacters } from "../data.js";

  onMount(() => {
    activateTooltips("#ss_container");
  });

  /**
   * Size of the input
   *  @type {import('@kws3/ui/types').SizeOptions}
   */
  export let size = "",
    /**
     * Color of the input
     * @type {import('@kws3/ui/types').ColorOptions}
     */
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    search_strategy = "fuzzy",
    highlighted_results = true,
    placeholder = "Marvel characters...",
    selected_character_string = "Tony";

  let klass = "";
  export { klass as class };
</script>
