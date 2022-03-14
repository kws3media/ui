<div style="height:400px;width:500px;margin:0 auto;">
  <KwsVirtualList
    Component={TargetComponent}
    items={_items}
    bind:start
    bind:end />
</div>
<div>
  <p>showing items {start}-{end} of {_items.length}</p>
</div>

<script>
  import { VirtualList as KwsVirtualList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";

  export let items = [];
  export let _items = [];
  export let start = 0;
  export let end = 0;

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

  Array.from({ length: 10000 }).forEach((_, index) => {
    let item = {};
    item.name = randSentance(10);
    item.username = randSentance(10);
    item.id = index;

    if (index % 2 === 0) {
      item.password = randSentance(Math.floor(Math.random() * 20));
    }
    _items.push(item);
  });
  console.log(_items);
</script>
