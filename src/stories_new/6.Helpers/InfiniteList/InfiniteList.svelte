<div class="columns is-centered">
  <div class="column is-narrow">
    <p class="has-text-centered">
      Showing {_items.length} items
    </p>
    <div
      style="height:{height}px;width:500px; border:1px solid rgba(0,0,0,0.1);">
      <KwsInfiniteList
        class={klass}
        items={_items}
        {style}
        {height}
        {end_offset}
        on:end={(e) => lastItemsRendered(e)}>
        <span slot="default" let:item let:index
          ><TargetComponent {item} {index} on:rowClick={rowClicked} /></span>
        <div slot="loader" class="has-text-centered">
          {#if loading}
            <span class="button is-text is-large is-loading" style="" />
          {/if}
        </div>
      </KwsInfiniteList>
    </div>
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte";
  import { InfiniteList as KwsInfiniteList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";
  import { sleep } from "../../../utils";
  import data from "./data.json";

  const fire = createEventDispatcher();

  export let height = "600",
    end_offset = 400,
    style = "";

  let klass = "";
  export { klass as class };

  let records = data.records;
  let loading = false;
  let _items = new Array(100)
    // @ts-ignore
    .fill()
    .map(() => records[Math.floor(Math.random() * records.length)]);

  const loadMore = async () => {
    loading = true;
    await sleep(1000);
    let itemsToAdd = _items.sort(() => 0.5 - Math.random()).slice(0, 20); // get random 20 items
    _items = [..._items, ...itemsToAdd];
    loading = false;
  };

  const lastItemsRendered = ({ detail }) => {
    if (_items.length >= 200) {
      return;
    }
    loadMore();
    fire("end", detail);
  };

  function rowClicked(e) {
    console.log(e.detail);
  }
</script>
