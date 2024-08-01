<!--
  @component


  @param {any} [value=null] - Value of the Toggle button

This property can be bound to, to fetch the current value, Default: `null`
  @param {boolean} [disabled=false] - Disables the Toggle button, Default: `false`
  @param {array} [options=[]] - Define an array of button objects, each object can have the following properties:

- `name`: Main text of button
- `value`: Value of the button
- `subtitle`: Optional subtitle
- `icon`: Optional Icon to display
- `count`: Optional number to display on top right
- `active_class`: Custom class to apply when button is active
- `inactive_class`: Custom class to apply when button is inactive

---, Default: `[]`
  @param {string} [inner_class=""] - CSS classes for Button `.control` wrapper, Default: `""`
  @param {string} [active_class="is-primary"] - CSS classes to apply when a button is active (pressed), Default: `"is-primary"`
  @param {string} [inactive_class=""] - CSS classes to apply when a button is inactive (not pressed), Default: `""`
  @param {SizeOptions} [size=] - Size of the Toggle Buttons, Default: ``
  @param {boolean} [fullwidth=false] - Expand all buttons so that they occupy full width of wrapping element, Default: `false`
  @param {string} [class=""] - CSS classes for the Button container, Default: `""`

  ### Events
  - `change` - Toggle button change event

-->
<div class="kws-toggle-buttons field has-addons {klass}">
  {#each options as option}
    <div class="control {fullwidth ? 'is-expanded' : ''} {inner_class}">
      <button
        type="button"
        {disabled}
        on:click={() => {
          setValue(option.value);
        }}
        class="button is-{size}  {fullwidth ? 'is-fullwidth' : ''} {value ===
        option.value
          ? option.active_class
            ? option.active_class
            : active_class
          : option.inactive_class
            ? option.inactive_class
            : inactive_class}">
        <span>
          {#if option.icon}
            <Icon icon={option.icon} size="small" class="marginless" />
          {/if}
          <span class="is-block">{option.name}</span>
          {#if option.subtitle}
            <span class="option-subtitle">{option.subtitle}</span>
          {/if}
          {#if option.count}
            <span class="count">{option.count}</span>
          {/if}
        </span>
      </button>
    </div>
  {/each}
</div>

<script>
  import { createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";
  /**
   *
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   *
   */

  const fire = createEventDispatcher();
  /**
   * Value of the Toggle button
   *
   * This property can be bound to, to fetch the current value
   * @type {any}
   */
  export let value = null,
    /**
     * Disables the Toggle button
     */
    disabled = false,
    /**
     * Define an array of button objects, each object can have the following properties:
     *
     * - `name`: Main text of button
     * - `value`: Value of the button
     * - `subtitle`: Optional subtitle
     * - `icon`: Optional Icon to display
     * - `count`: Optional number to display on top right
     * - `active_class`: Custom class to apply when button is active
     * - `inactive_class`: Custom class to apply when button is inactive
     *
     * ---
     *
     *
     *
     * @type {array}
     */
    options = [],
    /**
     * CSS classes for Button `.control` wrapper
     */
    inner_class = "",
    /**
     * CSS classes to apply when a button is active (pressed)
     */
    active_class = "is-primary",
    /**
     * CSS classes to apply when a button is inactive (not pressed)
     */
    inactive_class = "",
    /**
     * Size of the Toggle Buttons
     * @type {SizeOptions}
     */
    size = "",
    /**
     * Expand all buttons so that they occupy full width of wrapping element
     */
    fullwidth = false;

  /**
   * CSS classes for the Button container
   */
  let klass = "";
  export { klass as class };

  function setValue(v) {
    if (!disabled && value !== v) {
      value = v;
      /**
       * Toggle button change event
       */
      fire("change");
    }
  }
</script>
