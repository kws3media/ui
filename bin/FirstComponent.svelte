<!--
  @component
  

  @param [_] - No properties on this component

  ### Events
  - `clicked`
  - `erase`

-->
<div>
  <SecondComponent
    on:clicked
    on:mouseLeft={({ detail }) => fire("erase", detail)} />
</div>

<script>
  import SecondComponent from "./SecondComponent.svelte";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();
</script>
