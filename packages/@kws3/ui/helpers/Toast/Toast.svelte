<!--
  @component


  @param {string} [title=""] - Title for display, Default: `""`
  @param {string} [message=""] - Message for display, Default: `""`
  @param {number} [duration=3000] - Duration for display message, Default: `3000`
  @param {'warning'|'info'|'danger'|'primary'|'success'} [color="primary"] - Message background color, Default: `"primary"`
  @param {'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'} [position=""] - Position of the message, Default: `""`
  @param {boolean} [is_dismissable=true] - Dismissable message, Default: `true`
  @param {boolean} [is_persistent=false] - Persistent message, Default: `false`
  @param {string} [context=""] - Context value, Default: `""`
  @param {object} [component=null] - Custom component, Default: `null`

  ### Module
  @param {function} [setDefaultPlacement(position)] - It can set default position

  ### Events
  - `destroy`

-->

<div class="toast is-{usedPosition}">
  <div class="notification is-{color}">
    {#if component}
      <svelte:component this={component} {...$$props} />
    {:else}
      {#if title}
        <h4 class="title is-5 is-marginless">{title}</h4>
      {/if}
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

<script context="module">
  let globalPosition;

  /**
   * It can set default position
   *
   * @description
   * import { Toast } from `@kws3/ui`;
   * Toast.setDefaultPlacement("bottom-left");
   */
  export function setDefaultPlacement(position) {
    globalPosition = position;
  }
</script>

<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * Title for display
   */
  export let title = "",
    /**
     * Message for display
     */
    message = "",
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
    position = "",
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

  let timeout, usedPosition;

  $: {
    usedPosition =
      position && position != ""
        ? position
        : globalPosition
        ? globalPosition
        : "bottom-right";
  }

  const destroy = () => fire("destroy", $$props);

  onMount(() => {
    timeout = setTimeout(() => {
      if (!is_persistent) destroy();
    }, duration);
  });

  onDestroy(() => clearTimeout(timeout));
</script>
