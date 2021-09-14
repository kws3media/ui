<div class="toast">
  <div class="notification is-{color}">
    {#if is_dismissable}
      <button class="delete" on:click={destroy} />
    {/if}

    {@html message}

    <div
      class="toast-progress"
      style="animation-duration:{!is_persistent && duration}ms" />
  </div>
</div>

<script>
  import { onMount, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let message = "",
    duration = 3000,
    color = "info",
    is_dismissable = true,
    is_persistent = false,
    id = null;

  onMount(() => {
    setTimeout(() => {
      if (!is_persistent) destroy();
    }, duration);
  });

  function destroy() {
    fire("destroy", { id });
  }
</script>
