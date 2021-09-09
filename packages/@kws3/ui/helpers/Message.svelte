<!--
  @component


  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Message, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="info"] - Color of the Message box, Default: `"info"`
  @param {string} [style=""] - Inline CSS for Message box, Default: `""`
  @param {string} [inner_style=""] - Inline CSS for Message content, Default: `""`
  @param {string} [header_classes=""] - CSS classes for Message box header, Default: `""`
  @param {string} [inner_class=""] - CSS classes for Message content, Default: `""`
  @param {string} [title=""] - Title of the message box

Having content here will display the title bar and content, even if has_title is false, Default: `""`
  @param {boolean} [has_title=false] - Determines whether to display title area

Can be used to display title area even when there is no title content, Default: `false`
  @param {boolean} [dismissable=false] - Determines whether close button is displayed or not, Default: `false`
  @param {string} [class=""] - CSS classes for Message box, Default: `""`

  ### Events
  - `dismiss` - Fired when dismiss button is clicked.
The parent can then decide what to do with the component

  ### Slots
  - `<slot name="title"  />` - Used for message title.<br/>
**Example:** <code>&lt;h1 slot="title"&gt; This is a Slot Header &lt;/h1&gt;</code>
  - `<slot name="default"  />` - Used for message content

-->
<div class="message is-{color} is-{size} {klass}" {style}>
  <div
    class="{title || has_title
      ? 'message-header'
      : 'no-message-header'} {header_classes}">
    {#if title || has_title}
      <!--
        Used for message title.<br/>
        **Example:** <code>&lt;h1 slot="title"&gt; This is a Slot Header &lt;/h1&gt;</code>
      -->
      <slot name="title"><p>{title}</p></slot>
    {/if}
    {#if dismissable}
      <button class="delete is-pulled-right is-{size}" on:click={dismiss} />
    {/if}
  </div>
  <div class="message-body {inner_class}" style={inner_style}>
    <!--Used for message content--><slot />
  </div>
</div>

<style>
  .message {
    position: relative;
  }
  .no-message-header {
    position: absolute;
    top: 1em;
    right: 0.75em;
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";
  const fire = createEventDispatcher();

  /**
   * Size of the Message
   * @type {''|'small'|'medium'|'large'}
   */
  export let size = "",
    /**
     * Color of the Message box
     * @type {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "info",
    /**
     * Inline CSS for Message box
     * @type {string}
     */
    style = "",
    /**
     * Inline CSS for Message content
     * @type {string}
     */
    inner_style = "",
    /**
     * CSS classes for Message box header
     * @type {string}
     */
    header_classes = "",
    /**
     * CSS classes for Message content
     * @type {string}
     */
    inner_class = "",
    /**
     * Title of the message box
     *
     * Having content here will display the title bar and content, even if has_title is false
     * @type {string}
     */
    title = "",
    /**
     * Determines whether to display title area
     *
     * Can be used to display title area even when there is no title content
     * @type {boolean}
     */
    has_title = false,
    /**
     * Determines whether close button is displayed or not
     * @type {boolean}
     */
    dismissable = false;

  /**
   * CSS classes for Message box
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  function dismiss() {
    /**
     * Fired when dismiss button is clicked.
     * The parent can then decide what to do with the component
     */
    fire("dismiss");
  }

  // reviewd
</script>
