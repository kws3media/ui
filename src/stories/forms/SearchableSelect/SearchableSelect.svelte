<div style="height:300px;overflow:auto">
  <KwsSearchableSelect
    scrollTarget="contentArea"
    data={brands}
    bind:value={selected_brand}
    searchKey="name"
    searchValue="name"
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
    selected_brand = "Blackberry";

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
  export { brands as data };

  let klass = "";
  export { klass as class };
</script>
