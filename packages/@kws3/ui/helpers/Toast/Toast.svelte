<div class="toast is-{position}">
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

  /**
   * Message for display
   */
  export let message = "",
    /**
     * Duration for display message
     */
    duration = 3000,
    /**
     * Message background color
     * @type {'warning' | 'info' | 'danger' | 'primary' | 'success'}
     */
    color = "info",
    /**
     * Position of the message
     * @type {'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'}
     */
    position = "bottom-right",
    /**
     * Dismissable message
     */
    is_dismissable = true,
    /**
     * Persistent message
     */
    is_persistent = false,
    /**
     * Message unique id
     */
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
