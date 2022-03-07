<div
  bind:this={element}
  class="kws-virtual-list"
  on:scroll={() => refresh()}
  style:height
  bind:offsetHeight={viewportHeight}>
  <div
    bind:this={container}
    style="padding-top: {top}px; padding-bottom: {bottom}px;">
    <div class="row" bind:this={rows} />
  </div>
</div>

<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let items = [];
  export let height = "100%";
  export let itemHeight = 0;
  export let start = 0;
  export let end = 0;

  let element, //whole wrapping element
    viewportHeight, //height of the viewport
    container, //container element
    rows, //rows element
    top,
    bottom,
    props = {},
    heightMap = [];

  let itemRows = rows;

  function initialise() {
    if (itemHeight) {
      heightMap = items.map((_) => itemHeight);
      end = Math.min(items.length, Math.ceil(viewportHeight / itemHeight));
      bottom = items.length * itemHeight;
    } else {
      let height = 0;
      let i = 0;

      while (height < viewportHeight && i < items.length) {
        end = i + 1;

        const rowHeight = (heightMap[i] = itemRows[i].offsetHeight);
        height += rowHeight;

        i += 1;
      }

      const _end = i;
      const avg = Math.round(height / i);

      for (; i < items.length; i += 1) heightMap[i] = avg;

      bottom = (items.length - _end) * avg;
    }
  }

  function refresh() {
    const { scrollTop } = element;

    let paddingTop = 0;
    let offset = 0;
    let i = 0;

    if (!itemHeight) {
      for (let i = 0; i < rows.length; i += 1) {
        heightMap[start + i] = rows[i].offsetHeight;
      }
    }

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

  onMount(() => {
    if (items.length > 0) {
      initialise();
      refresh();
    }
  });

  $: visibleItems = () => {
    return items.slice(start, end).map((data, i) => {
      return { index: i + start, data };
    });
  };
</script>
