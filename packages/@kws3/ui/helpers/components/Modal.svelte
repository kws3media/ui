<!--
  @component
  This is a modal component.

  @param {string} [size="empty"] - Size of the modal `small` `medium` `large`, Default: `"empty"`
  @param {boolean} [is_active=false] - Show or hide modal, Default: `false`
  @param {boolean} [closable=true] - Show close button, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Close modal on click outside, Default: `false`
  @param {string} [style="empty"] - Inline style for modal, Default: `"empty"`
  @param {string} [inner_style="empty"] - Inline style for modal content, Default: `"empty"`
  @param {string} [classes="empty"] - CSS classes for modal, Default: `"empty"`
  @param {string} [inner_class="empty"] - CSS classes for modal content, Default: `"empty"`
  @param {string} [cy="empty"] - data-cy attribute for cypress, Default: `"empty"`

  ### Slots
  - `<slot name="default"  />` - Slot for disply modal contents

-->

<div
  class="modal {classes} {is_active ? 'is-active' : ''}"
  {style}
  data-cy={cy}>
  <div class="modal-background" on:click={clickOutside} />

  <div class="modal-content is-{size} {inner_class}" style={inner_style}>
    <div class="box">
      <!-- Slot for disply modal contents-->
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

  function close() {
    is_active = false;
  }

  function open() {
    is_active = true;
  }
</script>
