<div class="p-4" style="width:500px;margin:0 auto;">
  <KwsVirtualList items={users} itemHeight={54} bind:start bind:end />
</div>

<script>
  const response = require("./users.json");
  import { VirtualList as KwsVirtualList } from "@kws3/ui";

  console.log(response);

  export let users = response.records;
  export let start = 0;
  export let end = users.length;
</script>
