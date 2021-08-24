<!--
  @component
  

  ### Events
  - `clicked`
  - `mouseLeft`

-->
<div on:click={click} on:mouseleave={msl} />

<script>
  import { createEventDispatcher } from "svelte";

  let fire = createEventDispatcher();

  function click() {
    fire("clicked");
  }

  function msl() {
    fire("mouseLeft");
  }
</script>
