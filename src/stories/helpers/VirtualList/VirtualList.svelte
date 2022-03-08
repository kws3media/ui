<div class="p-4" style="width:500px;margin:0 auto;">
  <KwsVirtualList {items} itemHeight={54} bind:start bind:end />
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";

  export let items = [];
  export let start = 0;
  export let end = 10;
</script>
