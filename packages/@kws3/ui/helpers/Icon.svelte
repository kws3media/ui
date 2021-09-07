<!--
  @component


  @param {string} [size=""] - Size of the Icon ('small'|'medium'|'large'), Default: `""`
  @param {string} [color=""] - Color of the Icon ('primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'), Default: `""`
  @param {string} [icon=""] - Icon name to display, Default: `""`
  @param {string} [style=""] - Inline style of icon, Default: `""`
  @param {string} [inner_class=""] - Inner class of icon, Default: `""`
  @param {string} [inner_style=""] - Inline style for Icon, Default: `""`
  @param {string} [class=""] - `CONST` CSS classes for icon, Default: `""`

  ### Module
  @param {function} [setDefaultIconType(type)] - It can set default icon type

-->

<span class="icon is-{size} has-text-{color} {klass}" {style}>
  <i
    class="icon-i {familyClass}{icon} {internal_size} {inner_class}"
    style={inner_style} />
</span>

<style>
  .icon .gg {
    transform: scale(0.75);
  }
  .icon .gg.fa-lg {
    transform: scale(1);
  }
  .icon .gg.fa-2x {
    transform: scale(1.5);
  }
  .icon .gg.fa-3x {
    transform: scale(2);
  }

  .icon .uil {
    font-size: 1.25em;
  }
  .icon .uil.fa-lg {
    font-size: 1.5em;
  }
  .icon .uil.fa-2x {
    font-size: 2em;
  }
  .icon .uil.fa-3x {
    font-size: 3em;
  }
</style>

<script context="module">
  let family;

  /**
   * It can set default icon type
   *
   * @description
   * import {Icon} from `@kws3/ui`;
   * Icon.setDefaultIconType("fa");
   */
  export function setDefaultIconType(type) {
    family = type;
  }
</script>

<script>
  /**
   * Size of the Icon ('small'|'medium'|'large')
   * * @type {'small'|'medium'|'large'}
   */
  export let size = "",
    /**
     * Color of the Icon
     * @type {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * Icon name to display
     */
    icon = "",
    /**
     * Inline style of icon
     */
    style = "",
    /**
     * Inner class of icon
     */
    inner_class = "",
    /**
     * Inline style for Icon
     */
    inner_style = "";

  /**
   * CSS classes for icon
   */
  let klass = "";
  export { klass as class };

  let familyClass, internal_size, usedFamily;

  $: {
    usedFamily = family ? family : "fa";

    switch (usedFamily) {
      case "lar":
        familyClass = "lar la-";
        break;
      case "las":
        familyClass = "las la-";
        break;
      case "lab":
        familyClass = "lab la-";
        break;
      case "gg":
        familyClass = "gg gg-";
        break;
      case "unicons":
        familyClass = "uil uil-";
        break;
      default:
        familyClass = "fa fa-";
        break;
    }
  }

  $: {
    switch (size) {
      case "small":
        internal_size = "";
        break;
      case "medium":
        internal_size = "fa-2x";
        break;
      case "large":
        internal_size = "fa-3x";
        break;
      default:
        internal_size = "fa-lg";
        break;
    }
  }
</script>
