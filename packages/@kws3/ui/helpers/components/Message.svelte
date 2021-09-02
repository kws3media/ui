<div class="message is-{color} is-{size} {classes}" {style} bind:this={_comp}>
  {#if title || has_title}
    <div class="message-header {header_classes}">
      <slot name="title"><p>{title}</p></slot>
      {#if dismissable}
        <button class="delete" on:click={dismiss} />
      {/if}
    </div>
  {/if}
  <div class="message-body {inner_classes}" style={inner_style}>
    <slot />
  </div>
</div>

<script>
  /**
   * Size of the Message
   * @type {'small'|'medium'|'large'}
   */
  export let size = "",
    /**
     * Color of the Message box
     * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "info",
    /**
     * Inline style for message content
     * @type {string}
     */
    style = "",
    /**
     * CSS classes for message content
     * @type {string}
     */
    inner_style = "",
    /**
     * CSS classes for message box
     * @type {string}
     */
    classes = "",
    /**
     * CSS classes for message header
     * @type {string}
     */
    header_classes = "",
    /**
     * CSS classes for message body
     * @type {string}
     */
    inner_classes = "",
    /**
     * Title for message box
     * @type {string}
     */
    title = "",
    /**
     * Meesage box has title
     * @type {boolean}
     */
    has_title = false,
    /**
     * Show close button
     * @type {boolean}
     */
    dismissable = false;

  let _comp;

  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }

  // reviewd
</script>
