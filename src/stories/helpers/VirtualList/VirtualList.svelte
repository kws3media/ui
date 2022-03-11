<div style="height:400px;width:500px;margin:0 auto;">
  <KwsVirtualList Component={TargetComponent} {items} bind:start bind:end />
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";

  export let items = [];
  export let start = 0;
  export let end = 20;
  console.log(items);
</script>
