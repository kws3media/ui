<!--
  @component


  @param {array} [items=[]] - Array of items, Default: `[]`
  @param {string} [height="100%"] - Height of the wrapper, Default: `"100%"`
  @param {object} [itemHeight=null] - ItemHeight property, Default: `null`
  @param {number} [start=0] - first item index rendered inside viewport - readonly, Default: `0`
  @param {number} [end=0] - last item index rendered inside viewport - readonly, Default: `0`
  @param {number} [ending_threshold=10] - threshold from last index for firing on:end event, Default: `10`

  ### Events
  - `end`

  ### Slots
  - `<slot name="default" {item} {index} />`

-->
{#if hasResizeObserver}
  <div
    bind:this={viewport}
    class="kws-virtual-list with-resize-observer"
    on:scroll={handle_scroll}
    style="height:{height}"
    use:resizeObserver
    on:resize={resize}>
    <div
      bind:this={contents}
      style="padding-top: {top}px; padding-bottom: {bottom}px;">
      {#each visible as item (item.index)}
        <div class="row">
          <slot item={item.data} index={item.index} />
        </div>
      {/each}
    </div>
  </div>
{:else}
  <div
    bind:this={viewport}
    class="kws-virtual-list"
    on:scroll={handle_scroll}
    style="height:{height}"
    bind:offsetHeight={viewport_height}>
    <div
      bind:this={contents}
      style="padding-top: {top}px; padding-bottom: {bottom}px;">
      {#each visible as item (item.index)}
        <div class="row">
          <slot item={item.data} index={item.index} />
        </div>
      {/each}
    </div>
  </div>
{/if}

<script>
  import { onMount, tick } from "svelte";
  import { createEventDispatcher } from "svelte";
  import {
    resizeObserver,
    hasResizeObserver,
  } from "@kws3/ui/utils/resizeObserver";

  const fire = createEventDispatcher();
  /**
   * Array of items
   */
  export let items = [],
    /**
     * Height of the wrapper
     */
    height = "100%",
    itemHeight = null,
    /**
     * first item index rendered inside viewport - readonly
     */
    start = 0,
    /**
     *  last item index rendered inside viewport - readonly
     */
    end = 0,
    /**
     *  threshold from last index for firing on:end event
     */
    ending_threshold = 10;

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
    average_height;

  $: visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });

  // whenever `items` changes, invalidate the current heightmap
  $: items, viewport_height, itemHeight, mounted, refresh();

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
        itemHeight || (row ? row.offsetHeight : 0));
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
      height_map[start + v] = itemHeight || rows[v].offsetHeight;
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
          actual_height += itemHeight || rows[i - start].offsetHeight;
        }
      }
      const d = actual_height - expected_height;
      viewport.scrollTo(0, scrollTop + d);
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
