<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={push}
      >Create Toast</button>
  </div>
</div>

<ToastOutput on:destroy={destroy} />

<script>
  import { Toast as KwsToast, ToastOutput } from "@kws3/ui";

  export let message = "I am a Toast...",
    duration = 3000,
    color = "primary",
    position = "bottom-right",
    is_dismissable = true,
    is_persistent = false,
    context = 1;

  let payload = {
    message,
    duration,
    color,
    position,
    is_dismissable,
    is_persistent,
    context,
  };

  function push(props) {
    KwsToast.push({ ...payload, ...props });
  }

  function destroy({ detail }) {
    KwsToast.pop(detail);
  }
</script>
