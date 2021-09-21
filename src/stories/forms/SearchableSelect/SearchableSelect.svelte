<div style="height:300px;overflow:auto">
  <KwsSearchableSelect
    scrollTarget="contentArea"
    data={brands}
    bind:value={selected_brand}
    searchKey="name"
    valueKey="id"
    {placeholder}
    {filter}
    {style}
    class={klass}
    {dd_class}
    {cy}
    {open}
    {disabled} />
  <br />
  {JSON.stringify(selected_brand, null, 2)}
  <KwsSearchableSelect
    scrollTarget="contentArea"
    data={brands_2}
    bind:value={selected_brand_2}
    searchKey="name"
    valueKey="id"
    maxSelect={null}
    {placeholder}
    {filter}
    {style}
    class={klass}
    {dd_class}
    {cy}
    {open}
    {disabled} />

  {JSON.stringify(selected_brand_2, null, 2)}
</div>

<script>
  import { SearchableSelect as KwsSearchableSelect } from "@kws3/ui";

  export let filter = "",
    style = "",
    dd_class = "",
    cy = "",
    open = false,
    disabled = false,
    placeholder = "Choose a Brand...",
    selected_brand = "Blackberry", // max item one
    selected_brand_2 = [{ id: 4, name: "Nokia" }]; // max item null, not works if string given. should work?

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

  let brands_2 = [
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
  export { brands as data };

  let klass = "";
  export { klass as class };
</script>
