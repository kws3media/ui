<div
  bind:this={element}
  class="kws-virtual-list"
  on:scroll={() => refresh()}
  style:height
  bind:offsetHeight={viewportHeight} />

<script>
  export let height;

  let element, //whole wrapping element
    viewportHeight; //height of the viewport

  function refresh() {}
</script>
