<div style="height:400px;width:500px;margin:0 auto;">
  <KwsVirtualList
    Component={TargetComponent}
    {items}
    bind:start
    bind:end
    clickableRows={true}
    on:rowClick={(event) => rowClicked(event)} />
</div>
<div>
  <p>showing items {start}-{end} of 200</p>
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";
  import data from "./data.json";

  let items = data.records;
  let start = 0;
  let end = 0;
  $: {
    if (end === items.length) {
      let itemsToAdd = items.sort(() => 0.5 - Math.random()).slice(0, 5); // get random 5 items
      items = [...items, ...itemsToAdd];
    }
  }

  function rowClicked({ detail: data }) {
    console.log("row clicked", data);
  }
</script>
