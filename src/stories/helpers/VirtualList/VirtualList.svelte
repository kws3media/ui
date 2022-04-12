<p class="has-text-centered">showing items {start}-{end} of {_items.length}</p>
<div style="height:600px;width:500px; border:1px solid rgba(0,0,0,0.1)">
  <KwsVirtualList items={_items} bind:start bind:end let:item let:index>
    <TargetComponent {item} {index} on:rowClick={rowClicked} />
  </KwsVirtualList>
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";
  import data from "./data.json";

  let records = data.records;
  export let _items = new Array(100)
    .fill()
    .map(() => records[Math.floor(Math.random() * records.length)]);

  export let start = 0,
    end = 0;

  $: {
    if (end === _items.length) {
      let itemsToAdd = _items.sort(() => 0.5 - Math.random()).slice(0, 20); // get random 20 items
      _items = [..._items, ...itemsToAdd];
    }
  }

  function rowClicked(e) {
    console.log(e.detail);
  }
</script>
