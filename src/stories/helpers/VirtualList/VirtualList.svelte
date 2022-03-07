<div class="p-4" style="width:500px;margin:0 auto;">
  <KwsVirtualList items={users} itemHeight={54} bind:start bind:end />
</div>

<script>
  const response = require("./users.json");
  import { VirtualList as KwsVirtualList } from "@kws3/ui";

  let users = response.records;
  let start = 0;
  let end = users.length;
</script>
