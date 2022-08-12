<!--
  @component
  Some description of the component

  @param [_] - No properties on this component

  ### Events
  - `clicked`
  - `mouseLeft` - some docs for mouseLeft
  - `focus`

-->
<div on:focus on:click={click} on:mouseleave={msl}>s</div>

<script>
  //@ts-nocheck
  import { createEventDispatcher } from "svelte";

  let fire = createEventDispatcher();

  //export let x = 8;

  function click() {
    fire("clicked");
  }

  function msl() {
    /**
     * some docs for mouseLeft
     */
    fire("mouseLeft");
  }
</script>
