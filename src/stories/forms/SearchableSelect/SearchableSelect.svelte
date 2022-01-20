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
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
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
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly}
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

  onMount(() => activateTooltips("#ss_container"));

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    search_key = "name",
    value_key = "id",
    selected_icon = "check",
    no_options_msg = "No matching options",
    remove_all_tip = "Remove all",
    placeholder = "Choose a Brand...",
    selected_brand = "", // single , also work with { id: 10, name: "Blackberry" }
    //selected_brand_multi = "", // max item null, not works if string given. should work?
    selected_brand_string = "Blackberry";

  let brands = [
    { id: 1, name: "LG" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Xiaomi" },
    { id: 4, name: "Nokia" },
    { id: 5, name: "Oppo" },
    { id: 6, name: "Vivo" },
    { id: 7, name: "Huawei" },
    { id: 8, name: "Sony" },
    { id: 9, name: "HTC" },
    { id: 0, name: "Zero" },
    { id: "", name: "Empty String" },
    { id: 10, name: "Blackberry" },
    { id: 11, name: "Apple" },
  ];

  let brands_string_only = [
    "LG",
    "Samsung",
    "Xiaomi",
    "Nokia",
    "Oppo",
    "Vivo",
    "Huawei",
    "Sony",
    "HTC",
    "Blackberry",
    "Apple",
  ];

  let klass = "";
  export { klass as class };
</script>
