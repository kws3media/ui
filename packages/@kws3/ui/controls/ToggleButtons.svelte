<!--
  @component


  @param {object} [value=null] - Toggle button value, Default: `null`
  @param {boolean} [disabled=false] - Disabled - true/false, Default: `false`
  @param {object} [options={}] - Array of options, Default: `{}`
  @param {string} [inner_class=""] - Additional internal classes, Default: `""`
  @param {string} [active_class="is-primary"] - Active class, Default: `"is-primary"`
  @param {string} [inactive_class="is-outlined"] - Inactive class, Default: `"is-outlined"`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Toggle Button, Default: `""`
  @param {boolean} [fullwidth=false] - Full width of toggle button, Default: `false`
  @param {string} [class=""] - Additional CSS classes, Default: `""`

  ### Events
  - `change` - Used to handle change event

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
     *  Define classes for active (pressed) button
     *
     * Supports `is-outlined` and
     *
     * `is-primary` `is-warning` `is-info` `is-danger` `is-dark` `is-light`
     */
    active_class = "is-primary",
    /**
     * Define classes for inactive (not pressed) button
     *
     * Supports `is-outlined` and
     *
     * `is-primary` `is-warning` `is-info` `is-danger` `is-dark` `is-light`
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
