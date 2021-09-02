<!--
  @component


  @param {boolean} [on=false] - `CONST` On property, Default: `false`
  @param {object} [value=null] - Value property, Default: `null`
  @param {boolean} [disabled=false] - Disabled property, Default: `false`
  @param {array} [options=[]] - Options property, Default: `[]`
  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [inner_class=""] - Inner_class property, Default: `""`
  @param {string} [active_class="is-primary"] - Active_class property, Default: `"is-primary"`
  @param {string} [inactive_class="is-outlined"] - Inactive_class property, Default: `"is-outlined"`
  @param {string} [size=""] - Size property, Default: `""`
  @param {boolean} [fullwidth=false] - Fullwidth property, Default: `false`

  ### Events
  - `change`

-->
<div class="toggle-buttons field has-addons {classes}">
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
   * Toggle On - true/false
   * @type {boolean}
   */
  export const on = false;

  export let value = null,
    /**
     * Disabled - true/false
     * @type {boolean}
     */
    disabled = false,
    /**
     * Array of options
     * @type {object}
     */
    options = [],
    /**
     * Additional classes
     * @type {string}
     */
    classes = "",
    /**
     * Additional internal classes
     * @type {string}
     */
    inner_class = "",
    /**
     * Active class
     * @type {string}
     */
    active_class = "is-primary",
    /**
     * Inactive class
     * @type {string}
     */
    inactive_class = "is-outlined",
    /**
     * Size of the Toggle Button
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Full width of toggle button
     * @type {boolean}
     */
    fullwidth = false;

  function setValue(v) {
    value = v;
    fire("change");
  }
</script>
