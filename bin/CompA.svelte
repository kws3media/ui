<!--
  @component


  ### Events
  - `mouseLeftProxied`

-->
<CompB
  on:clicked
  on:mouseLeft={({ detail }) => fire("mouseLeftProxied", detail)} />

<script>
  import CompB from "./CompB.svelte";
  import { createEventDispatcher } from "svelte";

  let fire = createEventDispatcher();
</script>
