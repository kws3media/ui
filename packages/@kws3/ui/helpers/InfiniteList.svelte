<!--
  @component


  @param {array} [items=[]] - Array of items, Default: `[]`
  @param {object} [iteration_key=null] - Iteration key - by default it uses the index of the array inside the keyed each block, Default: `null`
  @param {string} [height="100%"] - Height of the wrapper, CSS String, Default: `"100%"`
  @param {number} [end_offset=400] - `end` event will be fired when the scroll position reaches this many pixels from the end of the list., Default: `400`
  @param {string} [style=""] - Inline CSS for scroller container, Default: `""`
  @param {string} [class=""] - CSS classes for scroller container, Default: `""`

  ### Events
  - `end` - Fired when the scroll position reaches `end_offset` pixels from the end of the list.

  ### Slots
  - `<slot name="default" {item} {index} />` - Default slot for list view items
  - `<slot name="loader"  />` - Optional slot to display a loading graphic at the bottom of the list
while more items are loading

-->
{#if hasResizeObserver}
  <div
    bind:this={viewport}
    class="kws-scrollable-list kws-infinite-list with-resize-observer {klass}"
    on:scroll={handle_scroll}
    style="height:{height};{style}"
    use:resizeObserver
    on:resize={resize}>
    <div bind:this={contents}>
      {#each visible as item (item.index)}
        <div class="row">
          <!--Default slot for list view items-->
          <slot item={item.data} index={item.index} />
        </div>
      {/each}
      <!--Optional slot to display a loading graphic at the bottom of the list
        while more items are loading-->
      <slot name="loader" />
    </div>
  </div>
{:else}
  <div
    bind:this={viewport}
    class="kws-scrollable-list kws-infinite-list {klass}"
    on:scroll={handle_scroll}
    style="height:{height};{style}"
    bind:offsetHeight={viewport_height}>
    <div bind:this={contents}>
      {#each visible as item (item.index)}
        <div class="row">
          <!--Default slot for list view items-->
          <slot item={item.data} index={item.index} />
        </div>
      {/each}
      <!--Optional slot to display a loading graphic at the bottom of the list
        while more items are loading-->
      <slot name="loader" />
    </div>
  </div>
{/if}

<style>
  .kws-infinite-list {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    height: 100%;
  }
</style>

<script>
  import { hasResizeObserver, resizeObserver } from "@kws3/ui/resizeObserver";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();
  /**
   * Array of items
   */
  export let items = [],
    /**
     * Iteration key - by default it uses the index of the array inside the keyed each block
     */
    iteration_key = null,
    /**
     * Height of the wrapper, CSS String
     */
    height = "100%",
    /**
     *  `end` event will be fired when the scroll position reaches this many pixels from the end of the list.
     */
    end_offset = 400,
    /**
     * Inline CSS for scroller container
     */
    style = "";

  /**
   * CSS classes for scroller container
   */
  let klass = "";
  export { klass as class };

  // local state
  let viewport,
    contents,
    viewport_height = 0,
    visible,
    fired = false;

  $: visible = items.slice().map((data, i) => ({
    index: iteration_key ? data[iteration_key] : i,
    data,
  }));

  function handle_scroll() {
    const { scrollTop, scrollHeight } = viewport;
    let offset = scrollHeight - viewport_height - scrollTop;
    // fire on:end event if we scrolled past the end_offset
    if (offset <= end_offset) {
      if (!fired) {
        /**
         * Fired when the scroll position reaches `end_offset` pixels from the end of the list.
         */
        fire("end");
      }
      fired = true;
    } else {
      fired = false;
    }
  }

  const resize = () => {
    viewport_height = viewport.offsetHeight;
    handle_scroll();
  };
</script>
