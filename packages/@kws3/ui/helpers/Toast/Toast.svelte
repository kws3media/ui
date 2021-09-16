<!--
  @component

  @param {string} [message=""] - Message for display, Default: `""`
  @param {number} [duration=3000] - Duration for display message, Default: `3000`
  @param {'warning'|'info'|'danger'|'primary'|'success'} [color="primary"] - Message background color, Default: `"primary"`
  @param {'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'} [position="bottom-right"] - Position of the message, Default: `"bottom-right"`
  @param {boolean} [is_dismissable=true] - Dismissable message, Default: `true`
  @param {boolean} [is_persistent=false] - Persistent message, Default: `false`
  @param {string} [context=""] - Context value, Default: `""`
  @param {object} [custom_component=null] - Custom component, Default: `null`

  ### Events
  - `destroy`
-->

<div class="toast is-{position}">
  <div class="notification is-{color}">
    {#if component}
      <svelte:component this={component} {...$$props} />
    {:else}
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
     * @type {'warning'|'info'|'danger'|'primary'|'success'}
     */
    color = "primary",
    /**
     * Position of the message
     * @type {'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'}
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
     * Context value
     */
    context = "",
    /**
     * Custom component
     */
    component = null;

  let timeout;

  const destroy = () => fire("destroy", { ...$$props });

  onMount(() => {
    timeout = setTimeout(() => {
      if (!is_persistent) destroy();
    }, duration);
  });

  onDestroy(() => clearTimeout(timeout));
</script>
