<!--
  @component


  @param {object} [size=null] - Size property, Default: `null`
  @param {object} [color=null] - Color property, Default: `null`
  @param {string} [icon=""] - Icon property, Default: `""`
  @param {string} [icon_class=""] - Icon_class property, Default: `""`
  @param {string} [icon_style=""] - Icon_style property, Default: `""`
  @param {object} [inner_class=null] - Inner_class property, Default: `null`
  @param {object} [inner_style=null] - Inner_style property, Default: `null`

-->
<span
  class="icon {size ? 'is-' + size : ''} {color
    ? 'has-text-' + color
    : ''} {icon_class}"
  style={icon_style}>
  <i
    class="icon-i {familyClass}{icon} {internal_size} {_used_inner_class}"
    style={_used_inner_style} />
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

  export function setDefaultIconType(type) {
    family = type;
  }
</script>

<script>
  /**
   * Size of the Icon
   * @type {'small'|'medium'|'large'}
   */
  export let size = null,
    /**
     * Color of the Icon
     * @type {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = null,
    /**
     * Icon name to display
     * @type {string}
     */
    icon = "",
    /**
     * CSS classes for icon
     * @type {string}
     */
    icon_class = "",
    /**
     * Inline style of icon
     * @type {string}
     */
    icon_style = "",
    /**
     * Inner class of icon
     * @type {string}
     */
    inner_class = null,
    /**
     * Inline style for Icon
     * @type {string}
     */
    inner_style = null;

  let _used_inner_class,
    _used_inner_style,
    familyClass,
    internal_size,
    usedFamily;

  $: {
    _used_inner_class = inner_class || "";
    _used_inner_style = inner_style || "";
    usedFamily = family ? family : "fa";
  }

  $: {
    switch (usedFamily) {
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
