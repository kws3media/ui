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
  @param {string} [inner_class=""] - CSS classes for modal content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [class=""] - `CONST` Additional class for modal, Default: `""`

  ### Slots
  - `<slot name="title"  />` - Used for the title of Modal
  - `<slot name="default"  />` - Used for the Modal content
  - `<slot name="footer"  />` - Used for the footer of Modal

-->
<div class="modal {klass} {is_active ? 'is-active' : ''}" {style} data-cy={cy}>
  <div class="modal-background" on:click={clickOutside} />

  <div class="modal-card is-{size} {inner_class}" style={inner_style}>
    <div class="modal-card-head">
      <div class="modal-card-title">
        <!--Used for the title of Modal--><slot name="title">{title}</slot>
      </div>
      {#if closable}
        <button
          class="delete"
          type="button"
          on:click={() => (is_active = false)} />
      {/if}
    </div>

    <div class="modal-card-body">
      <!--Used for the Modal content--><slot />
    </div>

    {#if has_footer}
      <div class="modal-card-foot">
        <!--Used for the footer of Modal--><slot name="footer" />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @media screen and (min-width: 769px), print {
    .modal-card {
      min-width: 640px;
      &.is-medium {
        width: 70%;
      }
      &.is-large {
        width: 90%;
      }
    }
  }
</style>

<script>
  /**
   * Title of the modal
   * @type {string}
   */
  export let title = "",
    /**
     * Size of the modal
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Show or hide modal
     * @type {boolean}
     */
    is_active = false,
    /**
     * Show close button
     * @type {boolean}
     */
    closable = true,
    /**
     * Close modal on click outside
     * @type {boolean}
     */
    close_on_click_outside = false,
    /**
     * Modal has footer
     * @type {boolean}
     */
    has_footer = true,
    /**
     * Inline style for modal
     * @type {string}
     */
    style = "",
    /**
     * Inline style for modal content
     * @type {string}
     */
    inner_style = "",
    /**
     * CSS classes for modal content
     * @type {string}
     */
    inner_class = "",
    /**
     * data-cy attribute for cypress
     * @type {string}
     */
    cy = "";

  /**
   * Additional class for modal
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  function clickOutside() {
    if (close_on_click_outside && closable) {
      is_active = false;
    }
  }
</script>
