<!--
  @component


  @param {array} [items=[]] - Array of items, Default: `[]`
  @param {string} [height="100%"] - Height of the wrapper, Default: `"100%"`
  @param {number} [start=0] - first item index rendered inside viewport - readonly, Default: `0`
  @param {number} [end=0] - last item index rendered inside viewport - readonly, Default: `0`
  @param {string} [itemHeight="auto"] - item element height, Default: `"auto"`
  @param {object} [Component=null] - Target component, Default: `null`

  ### Events
  - `rowClick`

-->
<div
  bind:this={ELEMENT}
  class="kws-virtual-list"
  on:scroll={() => window.requestAnimationFrame(() => refresh())}
  style="height:{height}"
  bind:offsetHeight={viewportHeight}>
  <div style="padding-top: {top}px; padding-bottom: {bottom}px;">
    {#each visibleItems as item, i (item.index)}
      <div
        class="row"
        bind:this={ROWS[i]}
        style="height: {itemHeight}; overflow: hidden;">
        <svelte:component
          this={Component}
          on:rowClick
          {...item.data}
          {...props} />
      </div>
    {/each}
  </div>
</div>

<script>
  import { onMount, tick } from "svelte";

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
    end = 0,
    /**
     *  item element height
     */
    itemHeight = "auto",
    /**
     * Target component
     */
    Component = null;

  let ELEMENT, //whole wrapping ELEMENT
    viewportHeight = 0, //height of the viewport
    ROWS = [], //per row DOM elemnent
    itemRows = [], //array of rows
    top = 0,
    bottom = 0,
    heightMap = [],
    visibleItems = [];

  $: visibleItems = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });

  $: visibleItems, (itemRows = ROWS.filter(Boolean));

  $: props = ["Component", "items", "start", "end"].reduce(
    (result, key) => {
      delete result[key];
      return result;
    },
    { ...$$props }
  );

  onMount(() => {
    if (Component === null || Component === undefined) {
      throw new Error("Component is not defined");
    }

    if (!Array.isArray(items)) {
      throw new Error("items must be an array");
    }

    initialise();
  });

  async function initialise() {
    let height = 0;
    let i = 0;
    while (height < viewportHeight && i < items.length) {
      end = start + i + 1;
      await tick();
      height += heightMap[i] = itemRows[i].offsetHeight;
      i += 1;
    }

    const _end = i;
    const avg = Math.round(height / i);

    for (; i < items.length; i += 1) heightMap[i] = avg; // rethink this

    bottom = (items.length - _end) * avg;
  }

  async function refresh() {
    console.log("refresh");
    const { scrollTop } = ELEMENT;

    for (let i = 0; i < itemRows.length; i += 1) {
      await tick();
      heightMap[start + i] = itemRows[i].offsetHeight;
    }

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
