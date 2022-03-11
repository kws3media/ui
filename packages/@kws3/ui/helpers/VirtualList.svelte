<div
  bind:this={element}
  class="kws-virtual-list"
  on:scroll={() => refresh()}
  style:height
  bind:offsetHeight={viewportHeight}>
  <div
    bind:this={container}
    style="padding-top: {top}px; padding-bottom: {bottom}px;">
    {#each visibleItems as item (item.index)}
      <div class="row">
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
  import { createEventDispatcher, onMount, tick } from "svelte";

  export let Component = null;
  export let items = [];
  export let height = "100%";
  export let itemHeight = 0;
  export let start = 0;
  export let end = 0;

  let element, //whole wrapping element
    viewportHeight, //height of the viewport
    container, //container element
    itemRows, //array of rows
    top,
    bottom,
    props = {},
    heightMap = [],
    visibleItems = [],
    averageHeight;

  onMount(() => {
    console.log(items);
    if (items.length > 0) {
      console.log(container);
      tick();
      itemRows = container.querySelectorAll("div.row");
      console.log("52|itemRows:", itemRows);
      console.log(items);
      // initialise();
      // tick();
      refresh();
    }
  });

  $: visibleItems = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  console.log("60|visibleItems:", visibleItems);
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

  async function refresh() {
    const { scrollTop } = element;
    console.log("90|scrolltop:", scrollTop);

    await tick();

    let paddingTop = 0;
    let offset = 0;
    let i = 0;
    console.log("95|itemHeight:", itemHeight);
    if (!itemHeight) {
      console.log("97|itemRows:", itemRows);
      for (let i = 0; i < itemRows.length; i += 1) {
        await tick();
        heightMap[start + i] = itemRows[i].offsetHeight || 48;
      }
      console.log("101|heightMap:", heightMap);
    }

    console.log("call refresh");

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

  $: items,
    height,
    itemHeight,
    viewportHeight,
    console.log(
      "133|items:",
      items,
      "height:",
      height,
      "itemHeight:",
      itemHeight,
      "viewportHeight:",
      viewportHeight
    );
</script>
