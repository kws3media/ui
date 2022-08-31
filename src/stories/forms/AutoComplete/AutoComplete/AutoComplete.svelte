<div id="ss_container">
  <div class="columns">
    <div class="column is-6">
      <Panel title="Input data" collapsible collapsed>
        <pre>{JSON.stringify(characters, null, 1)}</pre>
      </Panel>
    </div>
    <div class="column is-6">
      <KwsAutoComplete
        {size}
        {color}
        options={characters}
        bind:value={selected_character}
        {search_strategy}
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
        options={characters_string_only}
        bind:value={selected_character_string}
        {search_strategy}
        {highlighted_results}
        {scoreThreshold}
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

  import { characters, characters_string_only } from "../data.js";

  onMount(() => {
    activateTooltips("#ss_container", null);
  });

  /**
   * Size of the input
   *  @type {SizeOptions}
   */
  export let size = "",
    /**
     * Color of the input
     * @type {ColorOptions}
     */
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    search_strategy = "fuzzy",
    highlighted_results = true,
    scoreThreshold = 5,
    placeholder = "Marvel characters...",
    selected_character = "", // single , also work with { label: "Tony Stark", value: "Tony Stark"}
    selected_character_string = "Tony";

  let klass = "";
  export { klass as class };
</script>
