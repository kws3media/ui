<div>
  <div class="columns is-marginless">
    <div class="column is-paddingless">
      <input type="text" value="sdsd" class="input is-{color} is-{size}" />
    </div>
    <div class="column is-paddingless">
      <KwsSearchableSelect
        {size}
        {color}
        options={brands}
        bind:value={selected_brand}
        search_key="name"
        value_key="id"
        {placeholder}
        {style}
        max={1}
        class={klass}
        {cy} />
    </div>
  </div>

  <br />
  {JSON.stringify(selected_brand, null, 2)}

  <KwsSearchableSelect
    {size}
    {color}
    options={brands}
    bind:value={selected_brand_multi}
    search_key="name"
    value_key="id"
    max={null}
    {placeholder}
    {style}
    class={klass}
    {cy}
    {disabled} />

  {JSON.stringify(selected_brand_multi, null, 2)}

  <KwsSearchableSelect
    {placeholder}
    options={brands_string_only}
    max={1}
    bind:value={selected_brand_string} />

  {selected_brand_string}

  <KwsSearchableSelect
    {placeholder}
    options={brands_string_only}
    bind:value={selected_brand_string_multi}
    max={null} />

  {selected_brand_string_multi}
</div>

<script>
  import {
    SearchableSelect as KwsSearchableSelect,
    activateTooltips,
  } from "@kws3/ui";

  activateTooltips("body");

  export let size = "",
    color = "",
    style = "",
    cy = "",
    disabled = false,
    placeholder = "Choose a Brand...",
    selected_brand = "", // single , also work with { id: 10, name: "Blackberry" }
    selected_brand_multi = "", // max item null, not works if string given. should work?
    selected_brand_string = "Blackberry",
    selected_brand_string_multi = ["HTC"];

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
  export { brands as options };

  let klass = "";
  export { klass as class };
</script>
