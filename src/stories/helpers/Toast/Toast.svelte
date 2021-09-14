<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={create}
      >Open Toast</button>
  </div>
</div>

<script>
  import { Toast as KwsToast } from "@kws3/ui";

  function create() {
    KwsToast.create({ message: "I am a Toast..." });
  }
</script>
