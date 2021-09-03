<KwsSearchableSelect
  scrollTarget="contentArea"
  data={brands}
  placeholder="Choose a Brand..."
  bind:value={selected_brand}
  searchKey="name"
  searchValue="name" />

<script>
  import { SearchableSelect as KwsSearchableSelect } from "@kws3/ui";

  export let brands = [
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
    ],
    selected_brand = "Blackberry";
</script>
