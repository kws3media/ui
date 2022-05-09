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
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
        {selected_icon}
        {no_options_msg}
        {remove_all_tip} />
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
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
        {selected_icon}
        {no_options_msg}
        {remove_all_tip} />
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

  import { characters, characters_string_only } from "./data.js";

  onMount(() => {
    activateTooltips("#ss_container");
  });

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    search_strategy = "fuzzy",
    selected_icon = "check",
    no_options_msg = "No matching options",
    remove_all_tip = "Remove all",
    placeholder = "Choose a Brand...",
    selected_character = "", // single , also work with { label: "Tony Stark", value: "Tony Stark"}
    selected_character_string = "Tony";

  let klass = "";
  export { klass as class };
</script>
