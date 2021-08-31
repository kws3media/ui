<!--
  @component


  @param {string} [title=""] - Title property, Default: `""`
  @param {string} [size=""] - Size property, Default: `""`
  @param {boolean} [is_active=false] - Is_active property, Default: `false`
  @param {boolean} [closable=true] - Closable property, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Close_on_click_outside property, Default: `false`
  @param {boolean} [has_footer=true] - Has_footer property, Default: `true`
  @param {string} [style=""] - Style property, Default: `""`
  @param {string} [inner_style=""] - Inner_style property, Default: `""`
  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [inner_class=""] - Inner_class property, Default: `""`
  @param {string} [cy=""] - Cy property, Default: `""`

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
   * @defaultvalue ""
   */
  export let title = "";

  /**
   * Size of the modal `medium` `large`
   * @type {'small'|'medium'|'large'}
   * @defaultvalue empty
   */
  export let size = "";

  /**
   * Show or hide modal
   * @type {boolean}
   * @defaultvalue false
   */
  export let is_active = false;

  /**
   * Show close button
   * @type {boolean}
   * @defaultvalue true
   */
  export let closable = true;

  /**
   * Close modal on click outside
   * @type {boolean}
   * @defaultvalue false
   */
  export let close_on_click_outside = false;

  /**
   * Modal has footer
   * @type {boolean}
   * @defaultvalue false
   */
  export let has_footer = true;

  /**
   * Inline style for modal
   * @type {string}
   * @defaultvalue empty
   */
  export let style = "";

  /**
   * Inline style for modal content
   * @type {string}
   * @defaultvalue empty
   */
  export let inner_style = "";

  /**
   * CSS classes for modal
   * @type {string}
   * @defaultvalue empty
   */
  export let classes = "";

  /**
   * CSS classes for modal content
   * @type {string}
   * @defaultvalue empty
   */
  export let inner_class = "";

  /**
   * data-cy attribute for cypress
   * @type {string}
   * @defaultvalue empty
   */
  export let cy = "";

  function clickOutside() {
    if (close_on_click_outside && closable) {
      is_active = false;
    }
  }
</script>
