<!--
  @component


  @param {array} [items=[]] - Array of items, Default: `[]`
  @param {string} [height="100%"] - Height of the wrapper, CSS String, Default: `"100%"`
  @param {number | null} [item_height=null] - Height of each list item. If not set, height will be calculated automatically based on each item's offsetHeight, Default: `null`
  @param {number} [start=0] - First item index rendered inside viewport - readonly, Default: `0`
  @param {number} [end=0] - Last item index rendered inside viewport - readonly, Default: `0`
  @param {number} [end_threshold=10] - `end` event will be fired when the list reaches this many items before the end of the list., Default: `10`
  @param {string} [style=""] - Inline CSS for scroller container, Default: `""`
  @param {string} [class=""] - CSS classes for scroller container, Default: `""`

  ### Events
  - `end` - Fired when the list reaches `end_threshold` items before the end of the list.

  ### Slots
  - `<slot name="default" {item} {index} />` - Default slot for list view items
  - `<slot name="loader"  />` - Optional slot to display a loading graphic at the bottom of the list
while more items are loading

-->
{#if hasResizeObserver}
  <div
    bind:this={viewport}
    class="kws-scrollable-list with-resize-observer {klass}"
    on:scroll={handle_scroll}
    style="height:{height};{style}"
    use:resizeObserver
    on:resize={resize}>
    <div
      bind:this={contents}
      style="padding-top: {top}px; padding-bottom: {bottom}px;">
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
    class="kws-scrollable-list {klass}"
    on:scroll={handle_scroll}
    style="height:{height};{style}"
    bind:offsetHeight={viewport_height}>
    <div
      bind:this={contents}
      style="padding-top: {top}px; padding-bottom: {bottom}px;">
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
  .kws-scrollable-list {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    height: 100%;
  }
</style>

<script>
  import { onMount, tick } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { resizeObserver, hasResizeObserver } from "@kws3/ui/resizeObserver";

  const fire = createEventDispatcher();
  /**
   * Array of items
   */
  export let items = [],
    /**
     * Height of the wrapper, CSS String
     */
    height = "100%",
    /**
     * Height of each list item. If not set, height will be calculated automatically based on each item's offsetHeight
     * @type {number | null}
     */
    item_height = null,
    /**
     * First item index rendered inside viewport - readonly
     */
    start = 0,
    /**
     * Last item index rendered inside viewport - readonly
     */
    end = 0,
    /**
     *  `end` event will be fired when the list reaches this many items before the end of the list.
     */
    end_threshold = 10,
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
  let height_map = [],
    rows,
    viewport,
    contents,
    viewport_height = 0,
    visible,
    mounted,
    top = 0,
    bottom = 0,
    average_height,
    items_count = 0;

  $: visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });

  // whenever `items` changes, invalidate the current heightmap
  $: items, viewport_height, item_height, mounted, refresh();

  async function refresh() {
    if (!mounted) return;
    const scrollTop = viewport.scrollTop;
    await tick(); // wait until the DOM is up to date
    let content_height = top - scrollTop;
    let i = start;
    while (content_height < viewport_height && i < items.length) {
      let row = rows[i - start];
      if (!row) {
        end = i + 1;
        await tick(); // render the newly visible row
        row = rows[i - start];
      }
      const row_height = (height_map[i] =
        item_height || (row ? row.offsetHeight : 0));
      content_height += row_height;
      i += 1;
    }
    end = i;
    const remaining = items.length - end;
    average_height = (top + content_height) / end;
    bottom = remaining * average_height;
    height_map.length = items.length;
  }

  async function handle_scroll() {
    const scrollTop = viewport.scrollTop;
    const old_start = start;
    for (let v = 0; v < rows.length; v += 1) {
      height_map[start + v] = item_height || rows[v].offsetHeight;
    }
    let i = 0;
    let y = 0;
    while (i < items.length) {
      const row_height = height_map[i] || average_height;
      if (y + row_height > scrollTop) {
        start = i;
        top = y;
        break;
      }
      y += row_height;
      i += 1;
    }
    while (i < items.length) {
      y += height_map[i] || average_height;
      i += 1;
      if (y > scrollTop + viewport_height) break;
    }
    end = i;
    const remaining = items.length - end;
    average_height = y / end;
    while (i < items.length) height_map[i++] = average_height;
    bottom = remaining * average_height;
    // prevent jumping if we scrolled up into unknown territory
    if (start < old_start) {
      await tick();
      let expected_height = 0;
      let actual_height = 0;
      for (let i = start; i < old_start; i += 1) {
        if (rows[i - start]) {
          expected_height += height_map[i];
          actual_height += item_height || rows[i - start].offsetHeight;
        }
      }
      const d = actual_height - expected_height;
      viewport.scrollTo(0, scrollTop + d);
    }
    // fire on:end event if we scrolled past the end of the list
    if (end > items.length - end_threshold) {
      if (items_count !== items.length) {
        items_count = items.length;
        await tick();
        /**
         * Fired when the list reaches `end_threshold` items before the end of the list.
         */
        fire("end", { start, end });
      }
    }
  }

  const resize = () => {
    viewport_height = viewport.offsetHeight;
  };

  // trigger initial refresh
  onMount(() => {
    rows = contents.getElementsByClassName("row");
    mounted = true;
  });
</script>
