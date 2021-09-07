<!--
  @component


  @param {string} [title=""] - Title of the modal, Default: `""`
  @param {'small'|'medium'|'large'} [size=""] - Size of the modal, Default: `""`
  @param {boolean} [is_active=false] - Determines whether modal is displayed or not, Default: `false`
  @param {boolean} [closable=true] - If this is set to false, the modal cannot be dismissed at all, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Determines if a closable modal can be dismissed by clicking anywhere outside the modal, Default: `false`
  @param {boolean} [has_footer=true] - Determines if modal has footer space, Default: `true`
  @param {string} [style=""] - Inline CSS for modal, Default: `""`
  @param {string} [inner_style=""] - Inline CSS for modal content, Default: `""`
  @param {string} [inner_class=""] - Optional CSS classes for the modal content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [class=""] - `CONST` Optional class for modal, Default: `""`

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
    size = "small",
    /**
     * Determines whether modal is displayed or not
     * @type {boolean}
     */
    is_active = false,
    /**
     * If this is set to false, the modal cannot be dismissed at all
     * @type {boolean}
     */
    closable = true,
    /**
     * Determines if a closable modal can be dismissed by clicking anywhere outside the modal
     * @type {boolean}
     */
    close_on_click_outside = false,
    /**
     * Determines if modal has footer space
     * @type {boolean}
     */
    has_footer = true,
    /**
     * Inline CSS for modal
     * @type {string}
     */
    style = "",
    /**
     * Inline CSS for modal content
     * @type {string}
     */
    inner_style = "",
    /**
     * Optional CSS classes for the modal content
     * @type {string}
     */
    inner_class = "",
    /**
     * data-cy attribute for cypress
     * @type {string}
     */
    cy = "";

  /**
   * Optional class for modal
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
