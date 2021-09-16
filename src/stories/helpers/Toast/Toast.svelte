<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={create}
      >Create Toast</button>
  </div>
</div>

<script>
  import { Toast as KwsToast } from "@kws3/ui";

  export let message = "I am a Toast...",
    duration = 3000,
    color = "primary",
    position = "bottom-right",
    is_dismissable = true,
    is_persistent = false,
    context = 1;

  function create() {
    KwsToast.create({
      message,
      duration,
      color,
      position,
      is_dismissable,
      is_persistent,
      context,
    });
  }
</script>
