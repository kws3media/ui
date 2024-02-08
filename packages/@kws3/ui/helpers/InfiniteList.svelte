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
    class="kws-infinite-list with-resize-observer {klass}"
    style="height:{height};{style}"
    use:resizeObserver
    on:resize={resize}>
    <div
      class="kws-infinite-list-inner"
      on:scroll={handle_scroll}
      bind:this={contents}>
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
    <div
      class="fake-shadow-contraint top"
      style="opacity:{needsScroll ? scale(scrollTop) : 0};">
      <div class="fake-inner-shadow" />
    </div>
    <div
      class="fake-shadow-contraint bottom"
      style="opacity:{needsScroll ? 1 - scale(scrollTop) : 0};">
      <div class="fake-inner-shadow" />
    </div>
  </div>
{:else}
  <div
    bind:this={viewport}
    class="kws-infinite-list {klass}"
    style="height:{height};{style}"
    bind:offsetHeight={viewportHeight}>
    <div
      class="kws-infinite-list-inner"
      on:scroll={handle_scroll}
      bind:this={contents}>
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
    <div
      class="fake-shadow-contraint top"
      style="opacity:{needsScroll ? scale(scrollTop) : 0};">
      <div class="fake-inner-shadow" />
    </div>
    <div
      class="fake-shadow-contraint bottom"
      style="opacity:{needsScroll ? 1 - scale(scrollTop) : 0};">
      <div class="fake-inner-shadow" />
    </div>
  </div>
{/if}

<style>
  .kws-infinite-list {
    position: relative;
    height: 100%;
  }

  .kws-infinite-list-inner {
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .fake-shadow-contraint {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    overflow: hidden;
  }
  .fake-shadow-contraint .fake-inner-shadow {
    position: absolute;
    left: 0;
    top: -1px;
    width: 100%;
    height: 1px;
    box-shadow:
      0 0 6px 0 #000,
      0 0 12px 0 #000,
      0 0 18px 0 #000,
      0 0 20px 0 #000;
  }

  .fake-shadow-contraint.bottom {
    top: auto;
    bottom: 0;
  }

  .fake-shadow-contraint.bottom .fake-inner-shadow {
    top: auto;
    bottom: -1px;
  }
</style>

<script>
  import { hasResizeObserver, resizeObserver } from "@kws3/ui/resizeObserver";
  import { createEventDispatcher, tick } from "svelte";
  import { createScaler } from "@kws3/ui/utils";

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
    viewportHeight = 0,
    scrollHeight = 0,
    offsetHeight = 0,
    visible,
    fired = false;

  let scale = createScaler([0, 1], [0, 1]);

  let needsScroll = false,
    scrollTop = 0;

  $: visible = items.slice().map((data, i) => ({
    index: iteration_key ? data[iteration_key] : i,
    data,
  }));

  $: viewportHeight, visible, relayout();

  function handle_scroll() {
    scrollHeight = contents.scrollHeight;
    scrollTop = contents.scrollTop;
    let offset = scrollHeight - viewportHeight - scrollTop;
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
    viewportHeight = viewport.offsetHeight;
  };

  export function relayout() {
    tick().then(() => {
      needsScroll = false;

      scrollHeight = contents.scrollHeight;
      offsetHeight = contents.offsetHeight;

      let diff = scrollHeight - offsetHeight;
      if (scrollHeight > offsetHeight) {
        needsScroll = true;
      }
      scale = createScaler([0, diff], [0, 1]);
    });
  }
</script>
