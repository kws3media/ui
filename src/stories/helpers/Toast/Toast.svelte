<div class="columns">
  <div class="column has-text-centered">
    <button
      class="button is-primary"
      type="button"
      on:click={() => create({ position: "top-left" })}>Toast Top Left</button>
  </div>
  <div class="column has-text-centered">
    <button
      class="button is-info"
      type="button"
      on:click={() => create({ position: "bottom-right" })}
      >Toast Bottom left</button>
  </div>
</div>

<script>
  import { Toast as KwsToast } from "@kws3/ui";

  function create(prop) {
    KwsToast.push({ message: "I am a Toast...", ...prop });
  }
</script>
