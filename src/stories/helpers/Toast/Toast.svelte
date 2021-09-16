<div class="columns">
  <div class="column has-text-centered">
    <p>
      This will create a toast and it will bind to the document body
      automatically.
    </p>
    <button class="button is-primary" type="button" on:click={create}
      >Create Default</button>
  </div>
  <div class="column has-text-centered">
    <p>
      This will create a toast and it will need to bind the document body
      manualy.
    </p>
    <button class="button is-primary" type="button" on:click={push}
      >Create Manual</button>
  </div>
</div>

<ToastBox position="bottom">
  {#each $ToastNotifications as ToastNotification}
    <KwsToast {...ToastNotification} on:destroy={destroy} />
  {/each}
</ToastBox>

<script>
  import { Toast as KwsToast, ToastNotifications, ToastBox } from "@kws3/ui";

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

  function create(props) {
    KwsToast.create({ ...payload, ...props });
  }

  function push(props) {
    KwsToast.push({ ...payload, ...props });
  }

  function destroy({ detail }) {
    KwsToast.pop(detail);
  }
</script>
