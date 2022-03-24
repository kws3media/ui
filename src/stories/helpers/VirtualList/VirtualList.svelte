<p class="has-text-centered">showing items {start}-{end} of {items.length}</p>
<div style="height:700px;width:90vw; border:1px solid rgba(0,0,0,0.1)">
  <KwsVirtualList
    Component={TargetComponent}
    {items}
    bind:start
    bind:end
    clickableRows={true}
    on:rowClick={(event) => rowClicked(event)} />
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";
  import data from "./data.json";

  export let items = data.records;

  let start = 0,
    end = 0;

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
