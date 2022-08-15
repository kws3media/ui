<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Add to list</h2>
      <div>
        <input class="input" type="text" bind:value={name} />
      </div>
      <br />
      <div>
        <input class="input" type="text" bind:value={surname} />
      </div>
      <br />
      <div>
        <button class="button" type="button" on:click={addItem}>Add</button>
      </div>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Users List</h2>
      <div>
        {#if hasResizeObserver}
          <ul
            class="kws-scrollable-list with-resize-observer"
            use:resizeObserver>
            {#each _items as item}
              <li class="row">
                {item.name}
                {item.surname}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .kws-scrollable-list {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    height: 100%;
  }
</style>

<script>
  import { resizeObserver, hasResizeObserver } from "@kws3/ui/resizeObserver";
  import { cloneObject } from "@kws3/ui/utils";
  let name = "User",
    surname = "B";
  let _items = [{ name: "User", surname: "A" }];

  function addItem() {
    let newItems = cloneObject(_items);
    newItems.push({ name, surname });
    _items = newItems;
  }
</script>
