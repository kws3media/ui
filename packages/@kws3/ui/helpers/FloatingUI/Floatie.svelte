<!--
  @component


  @param {string} [title=""] - Title/Heading of the notification, Default: `""`
  @param {string} [message=""] - Message in the notification, Default: `""`
  @param {'notification'|'snackbar'|'toast'} [variant="notification"] - variation of floating UI, Default: `"notification"`
  @param {number} [duration=3000] - Duration of the notification, Default: `3000`
  @param {ColorOptions} [color=primary] - Toast notification background color, Default: `primary`
  @param {boolean} [light=false] - Inverted colors for notification box and contents, Default: `false`
  @param {boolean} [dismissable=true] - Determines if notification is dismissable, Default: `true`
  @param {boolean} [persistent=false] - A persistent notification without duration, stays till dismissed, Default: `false`
  @param {object} [component=null] - Custom component, Default: `null`
  @param {function} [beforeClose(props)] - Callback function call before close event
  @param {function} [afterClose(props)] - Callback function call after close event
  @param {array} [buttons=[]] - List of buttons to show in snackbar, Default: `[]`

-->

{#if variant === "snackbar"}
  <div class="snackbar is-{color} {light ? 'is-light' : ''}">
    <div class="text">{message}</div>
    <div class="action">
      {#each buttonsToRender as { text, color: text_color, click }}
        <button
          type="button"
          class="button is-{color} has-text-{text_color}"
          on:click={click}
          on:click={destroy}>{text}</button>
      {/each}
    </div>
    {#if !persistent}
      <div class="floatie-progress" style="animation-duration:{duration}ms" />
    {/if}
  </div>
{:else if variant === "toast"}
  <div class="toast is-{color} {light ? 'is-light' : ''}">
    {message}
  </div>
{:else}
  <div class="notification is-{color} {light ? 'is-light' : ''}">
    {#if component}
      <svelte:component this={component} {...$$props} on:destroy={destroy} />
    {:else}
      {#if dismissable}
        <button type="button" class="delete" on:click={destroy} />
      {/if}
      {#if title}
        <h4 class="title is-5 is-marginless">{title}</h4>
      {/if}

      <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
      <p>{@html message}</p>

      {#if !persistent}
        <div class="floatie-progress" style="animation-duration:{duration}ms" />
      {/if}
    {/if}
  </div>
{/if}

<script>
  //TODO: Icon support
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   */

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
     * @type {ColorOptions}
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
     * Custom component
     */
    component = null,
    /**
     * Callback function call before close event
     */
    beforeClose = (props) => {
      props;
    },
    /**
     * Callback function call after close event
     */
    afterClose = (props) => {
      props;
    },
    /**
     * List of buttons to show in snackbar
     */
    buttons = ["Ok"];

  let timeout;

  $: buttonsToRender = (buttons || []).map((b) => {
    let defaults = { text: "Ok", color: "", click: () => {} },
      obj = b;
    if (typeof b == "string") {
      // @ts-ignore
      obj = { text: b };
    }
    return Object.assign({}, defaults, obj);
  });

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
