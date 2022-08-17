<!--
  @component


  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Checkbox, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Checkbox, Default: `""`
  @param {string} [style=""] - Inline CSS for the Checkbox, Default: `""`
  @param {boolean} [inverted=false] - Inverts the Checkbox colour theme, Default: `false`
  @param {boolean} [circle=false] - Makes the Checkbox round, Default: `false`
  @param {boolean} [checked=false] - Determines the current state of the Checkbox

Checked\Not Checked, Default: `false`
  @param {boolean} [disabled=false] - Disables the Checkbox, Default: `false`
  @param {string} [icon="check"] - The name of the icon that is to be used in the Checkbox, Default: `"check"`
  @param {string} [label_style=""] - Inline CSS for the Checkbox label, Default: `""`
  @param {''|'fa'|'lar'|'las'|'gg'|'unicons'} [icon_family="null"] - Icon family to be used

Defaults to global family set via `Icon.setDefaultIconType()`

Ultimately defaults to `fa`, if family is not set anywhere, Default: `"null"`
  @param {string} [class=""] - CSS classes of the Checkbox, Default: `""`

  ### Events
  - `change` - Checkbox change event

  ### Slots
  - `<slot name="default"  />` - Used for the Checkbox label

-->
<label
  class:has-icon={has_icon}
  class:is-inverted={inverted}
  class:is-circle={circle}
  class="checkbox kws-checkbox is-{size} is-{color} {klass}"
  {style}>
  <!--Checkbox change event-->
  <input role="checkbox" type="checkbox" {disabled} bind:checked on:change />
  <span class="kws-checkbox-label" style={label_style}>
    <!-- Used for the Checkbox label--><slot />
  </span>
  {#if has_icon}
    <Icon family={icon_family} {icon} size="small" />
  {/if}
</label>

<script>
  import { Icon } from "@kws3/ui";

   /**
   *
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   *
   */
  /**
   * Size of the Checkbox
   * @type {SizeOptions}
   */
  export let size = "",
    /**
     * Colour of the Checkbox
     * @type {ColorOptions}
     */
    color = "",
    /**
     * Inline CSS for the Checkbox
     * @type {string}
     */
    style = "",
    /**
     * Inverts the Checkbox colour theme
     * @type {boolean}
     */
    inverted = false,
    /**
     * Makes the Checkbox round
     * @type {boolean}
     */
    circle = false,
    /**
     * Determines the current state of the Checkbox
     *
     * Checked\Not Checked
     * @type {boolean}
     */
    checked = false,
    /**
     * Disables the Checkbox
     * @type {boolean}
     */
    disabled = false,
    /**
     * The name of the icon that is to be used in the Checkbox
     * @type {string}
     */
    icon = "check",
    /**
     * Inline CSS for the Checkbox label
     * @type {string}
     */
    label_style = "",
    /**
     * Icon family to be used
     *
     * Defaults to global family set via `Icon.setDefaultIconType()`
     *
     * Ultimately defaults to `fa`, if family is not set anywhere
     *
     * @type {string|''|'fa'|'lar'|'las'|'gg'|'unicons'|'material'}
     */
    icon_family = "";

  /**
   * CSS classes of the Checkbox
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  $: has_icon = icon && icon !== "";
</script>
