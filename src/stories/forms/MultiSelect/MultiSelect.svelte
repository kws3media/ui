<div id="ms_container">
  <KwsMultiSelect
    {size}
    {color}
    {max}
    options={brands}
    bind:value={selected_brand}
    search_key="name"
    value_key="id"
    {placeholder}
    {style}
    class={klass}
    {disabled}
    {readonly}
    {no_options_msg}
    {remove_all_tip}
    {remove_btn_tip} />

  <code>{JSON.stringify(selected_brand, null, 2)}</code>
  <hr />
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
    {no_options_msg}
    {remove_all_tip}
    {remove_btn_tip} />

  <code>{JSON.stringify(selected_brand_string, null, 2)}</code>
</div>

<script>
  import { MultiSelect as KwsMultiSelect, activateTooltips } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => activateTooltips("#ms_container"));

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    max = null,
    search_key = "name",
    value_key = "id",
    no_options_msg = "No matching options",
    remove_all_tip = "Remove all",
    remove_btn_tip = "Remove",
    placeholder = "Choose a Brand...",
    selected_brand = [], // single , also work with { id: 10, name: "Blackberry" }
    //selected_brand_multi = "", // max item null, not works if string given. should work?
    selected_brand_string = ["Blackberry"];

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
