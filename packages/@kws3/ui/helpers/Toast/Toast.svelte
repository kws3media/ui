<div class="toast is-{position}">
  <div class="notification is-{color}">
    <div class="field is-grouped is-marginless" style="align-items:center;">
      <div class="control is-expanded">
        <p>{@html message}</p>
      </div>
      {#if is_dismissable}
        <div class="control">
          <button class="delete" on:click={destroy} />
        </div>
      {/if}
    </div>
    {#if !is_persistent}
      <div class="toast-progress" style="animation-duration:{duration}ms" />
    {/if}
  </div>
</div>

<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

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
    color = "primary",
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

  let timeout;

  const destroy = () => fire("destroy", { id });

  onMount(() => {
    timeout = setTimeout(() => {
      if (!is_persistent) destroy();
    }, duration);
  });

  onDestroy(() => clearTimeout(timeout));
</script>
