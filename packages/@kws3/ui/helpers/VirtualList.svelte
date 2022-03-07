<div
  bind:this={element}
  class="kws-virtual-list"
  on:scroll={() => refresh()}
  style:height
  bind:offsetHeight={viewportHeight}>
  <div
    bind:this={container}
    style="padding-top: {top}px; padding-bottom: {bottom}px;" />
</div>

<script>
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
    props = {}; //height of the viewport

  function refresh() {}

  $: visibleItems = () => {
    return items.slice(start, end).map((data, i) => {
      return { index: i + start, data };
    });
  };
</script>
