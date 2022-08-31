<!--
  @component


  @param {string} [title=""] - Title of the modal, Default: `""`
  @param {'small'|'medium'|'large'} [size="small"] - Size of the modal, Default: `"small"`
  @param {boolean} [is_active=false] - Determines whether modal is displayed or not, Default: `false`
  @param {boolean} [closable=true] - If this is set to false, the modal cannot be closed using the UI

Only programmatic closing is possible, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Determines if a closable modal can be closed by clicking anywhere outside the modal, Default: `false`
  @param {boolean} [has_footer=true] - Determines if modal has footer space, Default: `true`
  @param {string} [style=""] - Inline CSS for modal container, Default: `""`
  @param {string} [inner_style=""] - Inline CSS for modal content, Default: `""`
  @param {string} [inner_class=""] - CSS classes for the modal content, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [class=""] - CSS classes for modal, Default: `""`

  ### Slots
  - `<slot name="title"  />` - Used for the title of Modal

This can be used instead of the `title`
property, to send a `HTMLElement` in,
instead of just plain text
  - `<slot name="default"  />` - Used for the Modal content
  - `<slot name="footer"  />` - Used for the footer of Modal

Only visible when the
`has_footer` property is `true`

-->
<div class="modal {klass} {is_active ? 'is-active' : ''}" {style} data-cy={cy}>
  {#if is_active}<div
      transition:fade={{ duration: transitionDuration }}
      class="modal-background"
      on:click={clickOutside} />
    <div
      transition:scale={{
        duration: transitionDuration,
        // @ts-ignore
        from: 0.8,
        to: 1,
        delay: transitionDelay,
      }}
      class="modal-card is-{size} {inner_class}"
      style="transform:translate3d(0,0,0);{inner_style}">
      <div class="modal-card-head">
        <div class="modal-card-title">
          <!--
          Used for the title of Modal

          This can be used instead of the `title`
          property, to send a `HTMLElement` in,
          instead of just plain text
        --><slot
            name="title">{title}</slot>
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
          <!--
          Used for the footer of Modal

          Only visible when the
          `has_footer` property is `true`
        --><slot
            name="footer" />
        </div>
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  .modal {
    display: flex;
    visibility: hidden;
    &.is-active {
      visibility: visible;
    }
    .modal-card,
    .modal-background {
      transition: all 0.3s;
    }
  }
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
  import { fade, scale } from "svelte/transition";
  import { hasTransitions } from "../settings";
  /**
   * Title of the modal
   * @type {string}
   */
  export let title = "",
    /**
     * Size of the modal
     * @type {SIzeOptions}
     */
    size = "small",
    /**
     * Determines whether modal is displayed or not
     * @type {boolean}
     */
    is_active = false,
    /**
     * If this is set to false, the modal cannot be closed using the UI
     *
     * Only programmatic closing is possible
     * @type {boolean}
     */
    closable = true,
    /**
     * Determines if a closable modal can be closed by clicking anywhere outside the modal
     * @type {boolean}
     */
    close_on_click_outside = false,
    /**
     * Determines if modal has footer space
     * @type {boolean}
     */
    has_footer = true,
    /**
     * Inline CSS for modal container
     * @type {string}
     */
    style = "",
    /**
     * Inline CSS for modal content
     * @type {string}
     */
    inner_style = "",
    /**
     * CSS classes for the modal content
     * @type {string}
     */
    inner_class = "",
    /**
     * data-cy attribute for cypress
     * @type {string}
     */
    cy = "";

  /**
   * CSS classes for modal
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  $: transitionDuration = $hasTransitions ? 150 : 0;
  $: transitionDelay = $hasTransitions ? 50 : 0;

  function clickOutside() {
    if (close_on_click_outside && closable) {
      is_active = false;
    }
  }
</script>
