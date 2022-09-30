<!-- svelte-ignore missing-declaration -->
<div class="columns is-multiline">
  {#each photos_id as id}
    <div class="column is-6">
      <div class="card p-2 has-background-white">
        <div class="card-image">
          <KwsImage
            {size}
            {alt_text}
            src={`https://source.unsplash.com/${id}`} />
        </div>
      </div>
    </div>
  {/each}
</div>

<script>
  import { Image as KwsImage } from "@kws3/ui";
  // import { onMount } from "svelte";

  export let size = "",
    alt_text = "";

  let photos_id = [
    "bLobpucHIvw",
    "YZUgnOTxA44",
    "MbbT3AXDcW8",
    "5efR4mM5Nlk",
    "lkP1TaSZIPA",
    "wz7Z51XjZ_E",
    "7N3iEdqgTlU",
    "tGQHbUrUMu0",
    "ZN3Hsru3SIM",
    "5Eobs8jiW-c",
    "O7NHbnjrz94",
    "Bkw-aS2Nvg8",
  ];
</script>
