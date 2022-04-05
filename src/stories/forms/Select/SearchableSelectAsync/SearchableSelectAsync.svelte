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
        options_loading={obj_brands_loading}
        search={fetchObjBrands}
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
        options_loading={brands_loading}
        search={fetchBrands}
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
  import { sleep } from "../../../../utils";

  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#ss_container");
  });

  let brands_loading = false,
    obj_brands_loading = false,
    selected_brand = { id: 10, name: "Blackberry" },
    selected_brand_string = "Blackberry";

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
    placeholder = "Choose a Brand...";

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

  const fetchBrands = async (filter) => {
    brands_loading = true;
    await sleep(Math.random() * 1000);
    brands_loading = false;
    if (filter) {
      return brands_string_only.filter((brand) => {
        return brand.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
    } else {
      return [];
    }
  };

  const fetchObjBrands = async (filter) => {
    obj_brands_loading = true;
    await sleep(Math.random() * 1000);
    obj_brands_loading = false;
    if (filter) {
      return brands.filter((brand) => {
        return (
          brand[search_key].toLowerCase().indexOf(filter.toLowerCase()) > -1
        );
      });
    } else {
      return [];
    }
  };

  let klass = "";
  export { klass as class };
</script>
