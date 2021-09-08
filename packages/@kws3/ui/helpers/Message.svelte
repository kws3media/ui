<!--
  @component


  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Message, Default: `""`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="info"] - Color of the Message box, Default: `"info"`
  @param {string} [style=""] - Inline style for message content, Default: `""`
  @param {string} [inner_style=""] - CSS classes for message content, Default: `""`
  @param {string} [classes=""] - CSS classes for message box, Default: `""`
  @param {string} [header_classes=""] - CSS classes for message header, Default: `""`
  @param {string} [inner_class=""] - CSS classes for message body, Default: `""`
  @param {string} [title=""] - Title for message box, Default: `""`
  @param {boolean} [has_title=false] - Meesage box has title, Default: `false`
  @param {boolean} [dismissable=false] - Show close button, Default: `false`
  @param {string} [class=""] - `CONST` Additional class for message box, Default: `""`

  ### Slots
  - `<slot name="title"  />` - Used for message title.
Can use the slot title like..<br/>
&lt;h1 slot="title"&gt; This is a Slot Header &lt;/h1&gt;
  - `<slot name="default"  />` - Used for message content

-->
<div class="message is-{color} is-{size} {klass}" {style} bind:this={_comp}>
  <div class="{title || has_title ? 'message-header' : ''} {header_classes}">
    {#if title || has_title}
      <!--
        Used for message title.
        Can use the slot title like..<br/>
        <code>&lt;h1 slot="title"&gt; This is a Slot Header &lt;/h1&gt;</code>
      -->
      <slot name="title"><p>{title}</p></slot>
    {/if}
    {#if dismissable}
      <button class="delete is-pulled-right" on:click={dismiss} />
    {/if}
  </div>
  <div class="message-body {inner_class}" style={inner_style}>
    <!--Used for message content--><slot />
  </div>
</div>

<script>
  /**
   * Size of the Message
   * @type {''|'small'|'medium'|'large'}
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
     * CSS classes for message header
     * @type {string}
     */
    header_classes = "",
    /**
     * CSS classes for message body
     * @type {string}
     */
    inner_class = "",
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

  /**
   * Additional class for message box
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  let _comp;

  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }

  // reviewd
</script>
