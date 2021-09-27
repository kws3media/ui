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
  @param {function} [beforeClose(props)] - Callback function call before close event
  @param {function} [afterClose(props)] - Callback function call after close event
-->

<div class="kws-toast-item is-{usedPosition}">
  <div class="notification is-{color} {light ? 'is-light' : ''}">
    {#if component}
      <svelte:component this={component} {...$$props} on:destroy={destroy} />
    {:else}
      {#if is_dismissable}
        <button class="delete" on:click={destroy} />
      {/if}
      {#if title}
        <h4 class="title is-5 is-marginless">{title}</h4>
      {/if}

      <p>{@html message}</p>

      {#if !is_persistent}
        <div class="toast-progress" style="animation-duration:{duration}ms" />
      {/if}
    {/if}
  </div>
</div>

<script>
  //TODO: use svelte animation so we can transition out
  //TODO: document multiline
  //TODO: snackbar variant
  //TODO: toast variant
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { defaultToastPlacement } from "../../settings";

  const fire = createEventDispatcher();

  /**
   * Title/Heading of the notification
   */
  export let title = "",
    /**
     * Message in the notification
     */
    message = "",
    /**
     * Duration of the notification
     */
    duration = 3000,
    /**
     * Toast notification background color
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * Inverted colors for notification box and contents
     */
    light = false,
    /**
     * Position of the notification. `""` defaults to `top-right`
     * @type {''|'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'}
     */
    position = "",
    /**
     * Determines if notification is dismissable
     */
    is_dismissable = true,
    /**
     * A persistent notification without duration, stays till dismissed
     */
    is_persistent = false,
    /**
     * Context value
     */
    context = "",
    /**
     * Custom component
     */
    component = null,
    /**
     * Callback function call before close event
     */
    beforeClose = (props) => {},
    /**
     * Callback function call after close event
     */
    afterClose = (props) => {};

  let timeout,
    usedPosition,
    globalPosition = $defaultToastPlacement;

  $: {
    usedPosition =
      position && position != ""
        ? position
        : globalPosition
        ? globalPosition
        : "bottom-right";
  }

  const destroy = () =>
    Promise.resolve(beforeClose($$props))
      .then(() => fire("destroy", $$props))
      .then(() => afterClose($$props));

  onMount(() => {
    timeout = setTimeout(() => {
      if (!is_persistent) destroy();
    }, duration);
  });

  onDestroy(() => clearTimeout(timeout));
</script>
