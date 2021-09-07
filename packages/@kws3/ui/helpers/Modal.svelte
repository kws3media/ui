<!--
  @component
  This is a modal component.

  @param {'small'|'medium'|'large'} [size=""] - Size of the modal, Default: `""`
  @param {boolean} [is_active=false] - Show or hide modal, Default: `false`
  @param {boolean} [closable=true] - Show close button, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Close modal on click outside, Default: `false`
  @param {string} [style=""] - Inline style for modal, Default: `""`
  @param {string} [inner_style=""] - Inline style for modal content, Default: `""`
  @param {string} [classes=""] - CSS classes for modal, Default: `""`
  @param {string} [inner_class=""] - CSS classes for modal content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Used for the Modal content

-->

<div class="modal {klass} {is_active ? 'is-active' : ''}" {style} data-cy={cy}>
  <div class="modal-background" on:click={clickOutside} />

  <div class="modal-content is-{size} {inner_class}" style={inner_style}>
    <div class="box">
      <!-- Used for the Modal content-->
      <slot />
    </div>
  </div>
  {#if closable}
    <button class="modal-close is-large" type="button" on:click={close} />
  {/if}
</div>

<style lang="scss">
  @media screen and (min-width: 769px), print {
    .modal-content,
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
   * Size of the modal
   */
  export let size = "small",
    /**
     * Determines whether modal is displayed or not
     */
    is_active = false,
    /**
     * If this is set to false, the modal cannot be closed using the UI
     */
    closable = true,
    /**
     * Determines if a closable modal can be closed by clicking anywhere outside the modal
     */
    close_on_click_outside = false,
    /**
     * Inline CSS for modal
     */
    style = "",
    /**
     * Inline CSS for modal content
     */
    inner_style = "",
    /**
     * CSS classes for modal content
     */
    inner_class = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "";

  /**
   * CSS class for modal container
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  function clickOutside() {
    if (close_on_click_outside && closable) {
      is_active = false;
    }
  }

  function close() {
    is_active = false;
  }

  function open() {
    is_active = true;
  }
</script>
