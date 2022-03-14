<div style="height:400px;width:500px;margin:0 auto;">
  <KwsVirtualList Component={TargetComponent} {items} bind:start bind:end />
</div>
<div>
  <p>showing items {start}-{end}</p>
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";

  export let items = [];
  export let start = 0;
  export let end = 20;

  function randSentance(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  items.forEach((item, index) => {
    if (index % 2 === 0) {
      item.password = randSentance(Math.floor(Math.random() * 20));
    }
  });
  console.log(items);
</script>
