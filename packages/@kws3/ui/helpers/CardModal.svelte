<!--
  @component


  @param {string} [title=""] - Title of the modal, Default: `""`
  @param {'small'|'medium'|'large'} [size=""] - Size of the modal, Default: `""`
  @param {boolean} [is_active=false] - Show or hide modal, Default: `false`
  @param {boolean} [closable=true] - Show close button, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Close modal on click outside, Default: `false`
  @param {boolean} [has_footer=true] - Modal has footer, Default: `true`
  @param {string} [style=""] - Inline style for modal, Default: `""`
  @param {string} [inner_style=""] - Inline style for modal content, Default: `""`
  @param {string} [classes=""] - CSS classes for modal, Default: `""`
  @param {string} [inner_class=""] - CSS classes for modal content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

  ### Slots
  - `<slot name="title"  />`
  - `<slot name="default"  />`
  - `<slot name="footer"  />`

-->
<div
  class="modal {classes} {is_active ? 'is-active' : ''}"
  {style}
  data-cy={cy}>
  <div class="modal-background" on:click={clickOutside} />

  <div class="modal-card is-{size} {inner_class}" style={inner_style}>
    <div class="modal-card-head">
      <div class="modal-card-title">
        <slot name="title">{title}</slot>
      </div>
      {#if closable}
        <button
          class="delete"
          type="button"
          on:click={() => (is_active = false)} />
      {/if}
    </div>

    <div class="modal-card-body">
      <slot />
    </div>

    {#if has_footer}
      <div class="modal-card-foot">
        <slot name="footer" />
      </div>
    {/if}
  </div>
</div>

<script>
  /**
   * Title of the modal
   * @type {string}
   */
  export let title = "";

  /**
   * Size of the modal
   * @type {'small'|'medium'|'large'}
   */
  export let size = "";

  /**
   * Show or hide modal
   * @type {boolean}
   */
  export let is_active = false;

  /**
   * Show close button
   * @type {boolean}
   */
  export let closable = true;

  /**
   * Close modal on click outside
   * @type {boolean}
   */
  export let close_on_click_outside = false;

  /**
   * Modal has footer
   * @type {boolean}
   */
  export let has_footer = true;

  /**
   * Inline style for modal
   * @type {string}
   */
  export let style = "";

  /**
   * Inline style for modal content
   * @type {string}
   */
  export let inner_style = "";

  /**
   * CSS classes for modal
   * @type {string}
   */
  export let classes = "";

  /**
   * CSS classes for modal content
   * @type {string}
   */
  export let inner_class = "";

  /**
   * data-cy attribute for cypress
   * @type {string}
   */
  export let cy = "";

  function clickOutside() {
    if (close_on_click_outside && closable) {
      is_active = false;
    }
  }
</script>
