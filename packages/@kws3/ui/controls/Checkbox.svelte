<!--
  @component
  

  @param {'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the Button, Default: `""`
  @param {string} [classes=""] - CSS classes, Default: `""`
  @param {string} [style=""] - Inline styles, Default: `""`
  @param {boolean} [inverted=false] - Inverted Property, Default: `false`
  @param {boolean} [circle=false] - Circle checkbox, Default: `false`
  @param {boolean} [checked=false] - Checkbox checked Property, Default: `false`
  @param {boolean} [disabled=false] - Boolean - true/false, Default: `false`
  @param {string} [icon="check"] - Icon of the checkbox, Default: `"check"`
  @param {string} [label_style=""] - Inline style of Checkbox label, Default: `""`
  @param {string} [icon_family="null"] - Family of Icon - fa, gg or unicons, Default: `"null"`

  ### Events
  - `change`

  ### Slots
  - `<slot name="default"  />`

-->
<label
  class:has-icon={has_icon}
  class:is-inverted={inverted}
  class:is-circle={circle}
  class="checkbox kws-checkbox is-{size} is-{color} {classes}"
  {style}>
  <input type="checkbox" {disabled} bind:checked on:change />
  <span class="kws-checkbox-label" style={label_style}>
    <slot />
  </span>
  {#if has_icon}
    <Icon family={icon_family} {icon} size="small" />
  {/if}
</label>

<script>
  import { Icon } from "@kws3/ui";

  /**
   * Size of the Button
   * @type {'small'|'medium'|'large'}
   */
  export let size = "";

  /**
   * Color of the Button
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let color = "";

  /**
   * CSS classes
   * @type {string}
   */
  export let classes = "";

  /**
   * Inline styles
   * @type {string}
   */
  export let style = "";

  /**
   * Inverted Property
   * @type {boolean}
   */
  export let inverted = false;

  /**
   * Circle checkbox
   * @type {boolean}
   */
  export let circle = false;

  /**
   * Checkbox checked Property
   * @type {boolean}
   */
  export let checked = false;

  /**
   * Boolean - true/false
   * @type {boolean}
   */
  export let disabled = false;

  /**
   * Icon of the checkbox
   * @type {string}
   */
  export let icon = "check";

  /**
   * Inline style of Checkbox label
   * @type {string}
   */
  export let label_style = "";

  /**
   * Family of Icon - fa, gg or unicons
   * @type {string}
   */
  export let icon_family = null;

  $: has_icon = icon && icon != "";
</script>
