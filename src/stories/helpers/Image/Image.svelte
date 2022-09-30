<!-- svelte-ignore missing-declaration -->
<div class="columns">
  <div class="column">
    {#each photos_id as id}
      <KwsImage {size} {alt_text} src={`https://source.unsplash.com/${id}`} />
    {/each}
  </div>
</div>

<script>
  import { Image as KwsImage } from "@kws3/ui";
  // import { onMount } from "svelte";

  export let size = "",
    alt_text = "";

  let photos_id = [
    "wz7Z51XjZ_E",
    "YZUgnOTxA44",
    "oGgLxhuu2EI",
    "bLobpucHIvw",
    "lkP1TaSZIPA",
    "5efR4mM5Nlk",
    "UFr2682tngs",
    "Nh8K3V6vucM",
    "ZN3Hsru3SIM",
    "5Eobs8jiW-c",
  ];
</script>
