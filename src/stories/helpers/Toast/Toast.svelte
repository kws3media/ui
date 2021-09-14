<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={create}
      >Create Toast</button>
  </div>
</div>

<Toasts />

<script>
  import { Toasts, Toast } from "@kws3/ui";

  function create() {
    Toast.push({ message: "I am a Toast..." });
  }
</script>
