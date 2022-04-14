<!--
  @component


  @param {array} [items=[]] - Array of items, Default: `[]`
  @param {string} [height="100%"] - Height of the wrapper, Default: `"100%"`
  @param {number} [start=0] - first item index rendered inside viewport - readonly, Default: `0`
  @param {number} [end=0] - last item index rendered inside viewport - readonly, Default: `0`

  ### Slots
  - `<slot name="default" {item} {index} />`

-->

{#if hasResizeObserver}
  <div
    bind:this={ELEMENT}
    class="kws-virtual-list"
    on:scroll={() => window.requestAnimationFrame(() => refresh())}
    style="height:{height}"
    use:resizeObserver
    on:resize={resize}>
    <div
      bind:this={ROWS_CONTAINER}
      style="padding-top: {top}px; padding-bottom: {bottom}px;">
      {#each visibleItems as item (item.index)}
        <div class="row">
          <slot item={item.data} index={item.index} />
        </div>
      {/each}
    </div>
  </div>
{:else}
  <div
    bind:this={ELEMENT}
    class="kws-virtual-list"
    on:scroll={() => window.requestAnimationFrame(() => refresh())}
    style="height:{height}"
    bind:offsetHeight={viewportHeight}>
    <div
      bind:this={ROWS_CONTAINER}
      style="padding-top: {top}px; padding-bottom: {bottom}px;">
      {#each visibleItems as item (item.index)}
        <div class="row">
          <slot item={item.data} index={item.index} />
        </div>
      {/each}
    </div>
  </div>
{/if}

<script>
  import { onMount, tick } from "svelte";
  import {
    resizeObserver,
    hasResizeObserver,
  } from "@kws3/ui/utils/resizeObserver";

  /**
   * Array of items
   */
  export let items = [],
    /**
     * Height of the wrapper
     */
    height = "100%",
    /**
     * first item index rendered inside viewport - readonly
     */
    start = 0,
    /**
     *  last item index rendered inside viewport - readonly
     */
    end = 0;

  let ELEMENT, //whole wrapping ELEMENT
    viewportHeight = 0, //height of the viewport
    ROWS_CONTAINER, //container for rows
    itemRows = [], //array of rows
    top = 0,
    bottom = 0,
    heightMap = [],
    visibleItems = [],
    initialized = false;

  $: visibleItems = items
    .slice(start, end)
    .map((data, i) => ({ index: i + start, data }));

  $: items, viewportHeight, render();

  const resize = () => {
    console.log("resize");
    viewportHeight = ELEMENT.offsetHeight;
  };

  onMount(() => {
    if (!Array.isArray(items)) {
      throw new Error("items must be an array");
    }
    itemRows = ROWS_CONTAINER.children;
    initialized = true;
  });

  async function render() {
    if (!initialized) return;
    console.log("render");
    let height = 0;
    let i = 0;
    while (height < viewportHeight && i < items.length) {
      end = start + i + 1;
      await tick();
      height += heightMap[i] = itemRows[i] ? itemRows[i].offsetHeight : 0;
      i += 1;
    }
    const avg = Math.round(height / i);

    for (; i < items.length; i += 1) heightMap[i] = avg;

    refresh();
  }

  async function refresh() {
    console.log("refresh");
    const { scrollTop } = ELEMENT;

    let paddingTop = 0;
    let offset = 0;
    let i = 0;

    for (; i < items.length; i += 1) {
      if (!(i in heightMap)) break;

      offset += heightMap[i];
      if (offset > scrollTop) break;

      paddingTop = offset;
    }

    const newStart = i++;

    for (; i < items.length; i += 1) {
      if (offset > scrollTop + viewportHeight) break;
      offset += heightMap[i];
    }

    const newEnd = i;

    // if (newStart === start && newEnd === end) return;

    let paddingBottom = 0;
    for (; i < items.length; i += 1) paddingBottom += heightMap[i];

    top = paddingTop;
    bottom = paddingBottom;
    start = newStart;
    end = newEnd;
  }
</script>
