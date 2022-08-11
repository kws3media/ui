<div id="ms_container">
  <div class="columns">
    <div class="column is-6">
      <Panel title="Input data" collapsible collapsed>
        <pre>{JSON.stringify(brands, null, 1)}</pre>
      </Panel>
    </div>
    <div class="column is-6">
      <KwsMultiSelect
        {size}
        {color}
        {max}
        options={brands}
        bind:value={selected_brand}
        search_key="name"
        value_key="id"
        {search_strategy}
        {scoreThreshold}
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
        {summary_mode}
        {selected_icon}
        {no_options_msg}
        {remove_all_tip}
        {remove_btn_tip} />
      Output data:
      <code>{JSON.stringify(selected_brand, null)}</code>
    </div>
  </div>

  <hr />
  <div class="columns">
    <div class="column is-6">
      <Panel title="Input data" collapsible collapsed>
        <pre>{JSON.stringify(brands_string_only, null, 1)}</pre>
      </Panel>
    </div>
    <div class="column is-6">
      <KwsMultiSelect
        {size}
        {color}
        {max}
        options={brands_string_only}
        bind:value={selected_brand_string}
        {search_key}
        {value_key}
        {search_strategy}
        {scoreThreshold}
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
        {summary_mode}
        {selected_icon}
        {no_options_msg}
        {remove_all_tip}
        {remove_btn_tip} />
      Output data:
      <code>{JSON.stringify(selected_brand_string, null, 2)}</code>
    </div>
  </div>
</div>

<script>
  import {
    Panel,
    MultiSelect as KwsMultiSelect,
    activateTooltips,
  } from "@kws3/ui";
  import { onMount } from "svelte";

  import { brands, brands_string_only } from "../data.js";

  onMount(() => activateTooltips("#ms_container"));

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    max = null,
    search_key = "name",
    value_key = "id",
    search_strategy = "fuzzy",
    scoreThreshold = 5,
    selected_icon = "check",
    no_options_msg = "No matching options",
    remove_all_tip = "Remove all",
    remove_btn_tip = "Remove",
    placeholder = "Choose a Brand...",
    summary_mode = false,
    selected_brand = [], // single , also work with { id: 10, name: "Blackberry" }
    //selected_brand_multi = "", // max item null, not works if string given. should work?
    selected_brand_string = ["BlackBerry"];

  let klass = "";
  export { klass as class };
</script>
