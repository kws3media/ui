<!--
  @component


  @param {object} [value=null] - Value of the Toggle button, Default: `null`
  @param {boolean} [disabled=false] - Disables the Toggle button, Default: `false`
  @param {object} [options={}] - Create or remove button options as objects in an array, Default: `{}`
  @param {string} [inner_class=""] - CSS classes for Button, Default: `""`
  @param {string} [active_class="is-primary"] - Define classes for active (pressed) button

Supports `is-outlined` `is-inverted` etc.

and `is-primary` `is-warning` etc., Default: `"is-primary"`
  @param {string} [inactive_class="is-outlined"] - Define classes for inactive (not pressed) button

Supports `is-outlined` `is-inverted` etc.

and `is-primary` `is-warning` etc., Default: `"is-outlined"`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Toggle Buttons, Default: `""`
  @param {boolean} [fullwidth=false] - Force button to take full width of container, Default: `false`
  @param {string} [class=""] - CSS classes for the Button container, Default: `""`

  ### Events
  - `change` - Toggle button change event

-->
<div class="toggle-buttons field has-addons {klass}">
  {#each options as option}
    <div class="control {fullwidth ? 'is-expanded' : ''} {inner_class}">
      <button
        type="button"
        {disabled}
        on:click={setValue(option.value)}
        class="button is-{size}  {fullwidth ? 'is-fullwidth' : ''} {value ==
        option.value
          ? 'is-active ' +
            (option.active_class ? option.active_class : active_class)
          : option.inactive_class
          ? option.inactive_class
          : inactive_class}"
        style="height:auto">
        <span>
          {#if option.icon}
            <Icon icon={option.icon} size="small" icon_class="is-marginless" />
          {/if}
          <span class="is-block">{option.name}</span>
          {#if option.subtitle}
            <span
              style="font-size: 0.7em; display: block; margin-top: -0.3em; opacity: 0.7;"
              >{option.subtitle}</span>
          {/if}
        </span>
      </button>
    </div>
  {/each}
</div>

<style lang="scss">
  .toggle-buttons {
    .button,
    .button:focus {
      :global(.icon) {
        margin: 0;
      }
      box-shadow: none;
      &.is-active {
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3) inset !important;
      }
    }
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";

  const fire = createEventDispatcher();
  /**
   * Value of the Toggle button
   */
  export let value = null,
    /**
     * Disables the Toggle button
     */
    disabled = false,
    /**
     * Create or remove button options as objects in an array
     * @type {object}
     */
    options = [],
    /**
     * CSS classes for Button
     */
    inner_class = "",
    /**
     * Define classes for active (pressed) button
     *
     * Supports `is-outlined` `is-inverted` etc.
     *
     * and `is-primary` `is-warning` etc.
     */
    active_class = "is-primary",
    /**
     * Define classes for inactive (not pressed) button
     *
     * Supports `is-outlined` `is-inverted` etc.
     *
     * and `is-primary` `is-warning` etc.
     */
    inactive_class = "is-outlined",
    /**
     * Size of the Toggle Buttons
     * @type {''|'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Force button to take full width of container
     */
    fullwidth = false;

  /**
   * CSS classes for the Button container
   */
  let klass = "";
  export { klass as class };

  function setValue(v) {
    value = v;
    /**
     * Toggle button change event
     */
    fire("change");
  }
</script>
