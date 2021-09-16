<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={push}
      >Create Toast</button>
  </div>
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={pushCustom}
      >Custom Component Toast</button>
  </div>
</div>

<ToastOutput on:destroy={destroy} />

<script>
  import { Toast as KwsToast, ToastOutput } from "@kws3/ui";
  import CustomToast from "./CustomToast.svelte";

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

  function push() {
    KwsToast.push({ ...payload });
  }

  function pushCustom() {
    KwsToast.push({
      component: CustomToast,
      message: "I am a customized Toast...",
      is_persistent: true,
      is_dismissable: false,
      position: "top-left",
    });
  }

  function destroy({ detail }) {
    KwsToast.pop(detail);
  }
</script>
