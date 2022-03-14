<div id="ms_container">
  <div class="columns">
    <div class="column is-6">
      <Panel title="Input data" collapsible collapsed>
        <pre>{JSON.stringify(brands, null, 1)}</pre>
      </Panel>
    </div>
    <div class="column is-6">
      <KwsMultiSelect
        {asyncSelect}
        {isLoading}
        {size}
        {color}
        {max}
        options={brands}
        bind:value={selected_brand}
        search_key="name"
        value_key="id"
        on:change={fetchItems}
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

  onMount(() => {
    fetchItems();
    activateTooltips("#ms_container");
  });

  let asyncSelect = true,
    isLoading = true;

  const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

  const fetchItems = async () => {
    isLoading = true;
    //Fetch your data here.
    await sleep(3000);
    brands = [
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

    isLoading = false;
  };

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    max = null,
    search_key = "name",
    value_key = "id",
    selected_icon = "check",
    no_options_msg = "No matching options",
    remove_all_tip = "Remove all",
    remove_btn_tip = "Remove",
    placeholder = "Choose a Brand...",
    summary_mode = false,
    selected_brand = [], // single , also work with { id: 10, name: "Blackberry" }
    //selected_brand_multi = "", // max item null, not works if string given. should work?
    selected_brand_string = ["Blackberry"];

  let brands = [
    // { id: 1, name: "LG" },
    // { id: 2, name: "Samsung" },
    // { id: 3, name: "Xiaomi" },
    // { id: 4, name: "Nokia" },
    // { id: 5, name: "Oppo" },
    // { id: 6, name: "Vivo" },
    // { id: 7, name: "Huawei" },
    // { id: 8, name: "Sony" },
    // { id: 9, name: "HTC" },
    // { id: 0, name: "Zero" },
    // { id: "", name: "Empty String" },
    // { id: 10, name: "Blackberry" },
    // { id: 11, name: "Apple" },
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
