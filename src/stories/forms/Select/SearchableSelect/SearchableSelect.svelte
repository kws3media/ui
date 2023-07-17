<div id="ss_container">
  <div class="columns">
    <div class="column is-6">
      <Panel title="Input data" collapsible collapsed>
        <pre>{JSON.stringify(brands, null, 1)}</pre>
      </Panel>
    </div>
    <div class="column is-6">
      <KwsSearchableSelect
        {size}
        {color}
        options={brands}
        bind:value={selected_brand}
        search_key="name"
        value_key="id"
        {search_strategy}
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
        {popper_strategy}
        {selected_icon}
        {no_options_msg}
        {remove_all_tip} />
      Output data: <code>{JSON.stringify(selected_brand, null, 2)}</code>
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
      <KwsSearchableSelect
        {size}
        {color}
        options={brands_string_only}
        bind:value={selected_brand_string}
        {search_key}
        {value_key}
        {search_strategy}
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
        {popper_strategy}
        {selected_icon}
        {no_options_msg}
        {remove_all_tip} />
      Output data: <code>{JSON.stringify(selected_brand_string, null, 2)}</code>
    </div>
  </div>
</div>

<script>
  import {
    Panel,
    SearchableSelect as KwsSearchableSelect,
    activateTooltips,
  } from "@kws3/ui";

  import { onMount } from "svelte";

  import { brands, brands_string_only } from "../data.js";

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
    search_key = "name",
    value_key = "id",
    search_strategy = "fuzzy",
    selected_icon = "check",
    no_options_msg = "No matching options",
    remove_all_tip = "Remove all",
    placeholder = "Choose a Brand...",
    popper_strategy = "absolute",
    selected_brand = "", // single , also work with { id: 10, name: "Blackberry" }
    //selected_brand_multi = "", // max item null, not works if string given. should work?
    selected_brand_string = "BlackBerry";

  let klass = "";
  export { klass as class };
</script>
