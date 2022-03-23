<div style="height:400px;width:500px;margin:0 auto;">
  {#if items.length}
    <KwsVirtualList Component={TargetComponent} {items} bind:start bind:end />
  {/if}
</div>
<div>
  <p>showing items {start}-{end} of 200</p>
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";
  import data from "./data.json";

  let items = data.records;
  let start = 10;
  let end = 0;
</script>
