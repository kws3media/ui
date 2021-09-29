<!--
  @component

  @param {string} [title=""] - Title for display, Default: `""`
  @param {string} [message=""] - Message for display, Default: `""`
  @param {number} [duration=3000] - Duration for display message, Default: `3000`
  @param {'warning'|'info'|'danger'|'primary'|'success'} [color="primary"] - Message background color, Default: `"primary"`
  @param {'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'} [position=""] - Position of the message, Default: `""`
  @param {boolean} [dismissable=true] - Dismissable message, Default: `true`
  @param {boolean} [persistent=false] - Persistent message, Default: `false`
  @param {string} [context=""] - Context value, Default: `""`
  @param {object} [component=null] - Custom component, Default: `null`
  @param {function} [beforeClose(props)] - Callback function call before close event
  @param {function} [afterClose(props)] - Callback function call after close event
-->

{#if variant == "snackbar"}
  <div class="snackbar is-{color} {light ? 'is-light' : ''}">
    <div class="text">{message}</div>
    <div class="action">
      <button class="button is-{color}">Undo</button>
      <button class="button is-{color}">Dismiss</button>
    </div>
    {#if !persistent}
      <div class="toast-progress" style="animation-duration:{duration}ms" />
    {/if}
  </div>
{:else if variant == "toast"}
  <div class="toast is-{color} {light ? 'is-light' : ''}">
    {message}
  </div>
{:else}
  <div class="notification is-{color} {light ? 'is-light' : ''}">
    {#if component}
      <svelte:component this={component} {...$$props} on:destroy={destroy} />
    {:else}
      {#if dismissable}
        <button class="delete" on:click={destroy} />
      {/if}
      {#if title}
        <h4 class="title is-5 is-marginless">{title}</h4>
      {/if}

      <p>{@html message}</p>

      {#if !persistent}
        <div class="toast-progress" style="animation-duration:{duration}ms" />
      {/if}
    {/if}
  </div>
{/if}

<script>
  //TODO: document multiline
  //TODO: button event support for snackbars
  //TODO: Icon support
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

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
     * variation of floating UI
     * @type {'notification'|'snackbar'|'toast'}
     */
    variant = "notification",
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
     * Determines if notification is dismissable
     */
    dismissable = true,
    /**
     * A persistent notification without duration, stays till dismissed
     */
    persistent = false,
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

  let timeout;

  const destroy = () =>
    Promise.resolve(beforeClose($$props))
      .then(() => fire("destroy", $$props))
      .then(() => afterClose($$props));

  onMount(() => {
    timeout = setTimeout(() => {
      if (!persistent) destroy();
    }, duration);
  });

  onDestroy(() => clearTimeout(timeout));
</script>
