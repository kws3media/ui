<!--
  @component
  

  @param {'small'|'medium'|'large'} [size="small"] - Size of the modal, Default: `"small"`
  @param {boolean} [is_active=false] - Determines whether modal is displayed or not, Default: `false`
  @param {boolean} [closable=true] - If this is set to false, the modal cannot be closed using the UI

Only programmatic closing is possible, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Determines if a closable modal can be closed by clicking anywhere outside the modal, Default: `false`
  @param {string} [style=""] - Inline CSS for modal container, Default: `""`
  @param {string} [inner_style=""] - Inline CSS for modal content, Default: `""`
  @param {string} [inner_class=""] - CSS classes for modal content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [class=""] - CSS class for modal container, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Used for the Modal content

-->

<div class="modal {klass} {is_active ? 'is-active' : ''}" {style} data-cy={cy}>
  <div class="modal-background" on:click={clickOutside} />

  <div class="modal-content is-{size} {inner_class}" style={inner_style}>
    <div class="box">
      <!-- Used for the Modal content--><slot />
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
  export let size = "small",
    /**
     * Determines whether modal is displayed or not
     */
    is_active = false,
    /**
     * If this is set to false, the modal cannot be closed using the UI
     *
     * Only programmatic closing is possible
     */
    closable = true,
    /**
     * Determines if a closable modal can be closed by clicking anywhere outside the modal
     */
    close_on_click_outside = false,
    /**
     * Inline CSS for modal container
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
