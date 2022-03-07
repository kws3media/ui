<div
  bind:this={element}
  class="kws-virtual-list"
  on:scroll={() => refresh()}
  style:height
  bind:offsetHeight={viewportHeight}>
  <div
    bind:this={container}
    style="padding-top: {top}px; padding-bottom: {bottom}px;">
    <div class="row" />
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
    top,
    bottom,
    props = {},
    heightMap = [];

  let itemRows = container.getElementsByClassName("row");

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

  function refresh() {}

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
