<div class="toast">
  <div class="notification is-{type}">
    {#if dismissable}
      <button class="delete" on:click={destroy} />
    {/if}

    {@html message}

    <div
      class="toast-progress"
      style="animation-duration:{!persistent && timeout}ms" />
  </div>
</div>

<script>
  import { onMount, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let message = "",
    timeout = 30000,
    type = "info",
    dismissable = true,
    persistent = false,
    global_scope = false;

  onMount(() => {
    setTimeout(() => {
      if (!persistent) destroy();
    }, timeout);
  });

  function destroy() {
    fire("destroy");
  }
</script>
