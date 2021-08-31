<!--
  @component


  @param {string} [size=""] - Size property, Default: `""`
  @param {string} [color="info"] - Color property, Default: `"info"`
  @param {string} [style=""] - Style property, Default: `""`
  @param {string} [inner_style=""] - Inner_style property, Default: `""`
  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [header_classes=""] - Header_classes property, Default: `""`
  @param {string} [inner_classes=""] - Inner_classes property, Default: `""`
  @param {object} [title=null] - Title property, Default: `null`
  @param {boolean} [has_title=false] - Has_title property, Default: `false`
  @param {boolean} [dismissable=false] - Dismissable property, Default: `false`

  ### Slots
  - `<slot name="title"  />`
  - `<slot name="default"  />`

-->
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
   * Size of the Message `small`, `medium` and `large`
   * @type {'small'|'medium'|'large'}
   */
  export let size = "";

  /**
   * Color of the Message box `primary`, `warning`, `info`, `danger`, `dark`, `light`
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let color = "info";

  /**
   * Inline style for message content
   * @type {string}
   * @defaultvalue empty
   */
  export let style = "";

  /**
   * CSS classes for message content
   * @type {string}
   * @defaultvalue empty
   */
  export let inner_style = "";

  /**
   * CSS classes for message box
   * @type {string}
   * @defaultvalue empty
   */
  export let classes = "";

  /**
   * CSS classes for message header
   * @type {string}
   * @defaultvalue empty
   */
  export let header_classes = "";

  /**
   * CSS classes for message body
   * @type {string}
   * @defaultvalue empty
   */
  export let inner_classes = "";

  /**
   * Title for message box
   * @type {string}
   * @defaultvalue empty
   */
  export let title = "";

  /**
   * Meesage box has title
   * @type {boolean}
   * @defaultvalue false
   */
  export let has_title = false;

  /**
   * Show close button
   * @type {boolean}
   * @defaultvalue false
   */
  export let dismissable = false;

  let _comp;

  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }

  // reviewd
</script>
