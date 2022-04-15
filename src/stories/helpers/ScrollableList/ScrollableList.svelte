<div class="columns is-centered">
  <div class="column is-narrow">
    <p class="has-text-centered">
      Showing items {start}-{end} of {_items.length}
    </p>
    <div
      style="height:{height}px;width:500px; border:1px solid rgba(0,0,0,0.1);">
      <KwsScrollableList
        class={klass}
        items={_items}
        {height}
        {item_height}
        {end_threshold}
        bind:start
        bind:end
        on:end={(e) => lastItemsRendered(e)}>
        <span slot="default" let:item let:index
          ><TargetComponent {item} {index} on:rowClick={rowClicked} /></span>
        <div slot="loader" class="has-text-centered">
          {#if loading}
            <span class="button is-text is-large is-loading" style="" />
          {/if}
        </div>
      </KwsScrollableList>
    </div>
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte";
  import { ScrollableList as KwsScrollableList } from "@kws3/ui";
  import TargetComponent from "./TargetComponent.svelte";
  import { sleep } from "../../../utils";
  import data from "./data.json";

  const fire = createEventDispatcher();

  export let start = 0,
    end = 0,
    height = "600",
    item_height = null,
    end_threshold = 10;

  let klass = "";
  export { klass as class };

  let records = data.records;
  let loading = false;
  let _items = new Array(100)
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
    console.log("last items rendered", detail);
    loadMore();
    fire("end", detail);
  };

  function rowClicked(e) {
    console.log(e.detail);
  }
</script>
