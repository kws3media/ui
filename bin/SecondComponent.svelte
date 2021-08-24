<!--
  @component
  

  @param [_] - No properties on this component

  ### Events
  - `clicked`
  - `mouseLeft`

-->
<div on:click={click} on:mouseleave={msl}>s</div>

<script>
  import { createEventDispatcher } from "svelte";

  let fire = createEventDispatcher();

  //export let x = 8;

  function click() {
    fire("clicked");
  }

  function msl() {
    fire("mouseLeft");
  }
</script>
