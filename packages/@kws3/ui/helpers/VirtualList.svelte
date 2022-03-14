<div
  bind:this={ELEMENT}
  class="kws-virtual-list"
  on:scroll={() => refresh()}
  style:height
  bind:offsetHeight={viewportHeight}>
  <div style="padding-top: {top}px; padding-bottom: {bottom}px;">
    {#each visibleItems as item, i (item.index)}
      <div class="row" bind:this={ROWS[i]}>
        <svelte:component
          this={Component}
          on:rowClick
          on:_forwardEvent
          {...item.data}
          {...props} />
      </div>
    {/each}
  </div>
</div>

<script>
  import { onMount, tick } from "svelte";

  export let Component = null;
  export let items = [];
  export let height = "100%";
  export let itemHeight = 0;
  export let start = 0;
  export let end = 0;

  let ELEMENT, //whole wrapping ELEMENT
    viewportHeight = 0, //height of the viewport
    ROWS = [], //per row DOM elemnent
    itemRows = [], //array of rows
    top = 0,
    bottom = 0,
    props = {},
    heightMap = [],
    visibleItems = [];

  $: visibleItems = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });

  $: visibleItems, (itemRows = ROWS.filter(Boolean));

  onMount(() => {
    initialise();
  });

  async function initialise() {
    console.log("initialise");
    if (itemHeight) {
      heightMap = new Array(items.length).fill(itemHeight);
      end = Math.min(items.length, Math.ceil(viewportHeight / itemHeight));
      bottom = items.length * itemHeight;
    } else {
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
  }

  async function refresh() {
    console.log("refresh");
    const { scrollTop } = ELEMENT;

    if (!itemHeight) {
      for (let i = 0; i < itemRows.length; i += 1) {
        await tick();
        heightMap[start + i] = itemRows[i].offsetHeight;
      }
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

    if (newStart === start && newEnd === end) return;

    let paddingBottom = 0;
    for (; i < items.length; i += 1) paddingBottom += heightMap[i];

    top = paddingTop;
    bottom = paddingBottom;
    start = newStart;
    end = newEnd;
  }
</script>
