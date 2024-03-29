<!--
  @component


  @param {SizeOptions} [size=] - Size of the Icon, Default: ``
  @param {ExtendedColorOptions} [color=] - Color of the Icon, Default: ``
  @param {string} [icon=""] - The name of the icon that is to be displayed, from the relevant icon family, Default: `""`
  @param {FontFamilies} [family=] - Icon family, can be modified globally in framework settings

Ultimately defaults to `fa`, if family is not set anywhere, Default: ``
  @param {string} [style=""] - Inline CSS for icon container, Default: `""`
  @param {string} [inner_class=""] - CSS classes for icon, Default: `""`
  @param {string} [inner_style=""] - Inline CSS for icon, Default: `""`
  @param {string} [class=""] - CSS classes for icon container, Default: `""`

-->

<span class="icon is-{size} has-text-{color} {klass}" {style}>
  <i
    class="icon-i {familyClass}{icon} {internal_size} {inner_class}"
    style={inner_style}>{inner_icon}</i>
</span>

<style>
  .fa-lg {
    font-size: 1.33333333em;
    line-height: 0.75em;
    vertical-align: -15%;
  }
  .fa-2x {
    font-size: 2em;
  }
  .fa-3x {
    font-size: 3em;
  }
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

  .icon .material-icons {
    font-size: 1.25em;
  }
  .icon .material-icons.fa-lg {
    font-size: 1.5em;
  }
  .icon .material-icons.fa-2x {
    font-size: 2em;
  }
  .icon .material-icons.fa-3x {
    font-size: 3em;
  }
</style>

<script>
  import { defaultIconFamily } from "../settings";

  /**
   * @typedef {import('@kws3/ui/types').ExtendedColorOptions} ExtendedColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   * @typedef {import('@kws3/ui/types').FontFamilies} FontFamilies
   *
   */

  /**
   * Size of the Icon
   *  @type {SizeOptions}
   */
  export let size = "",
    /**
     * Color of the Icon
     * @type {ExtendedColorOptions}
     */
    color = "",
    /**
     * The name of the icon that is to be displayed, from the relevant icon family
     */
    icon = "",
    /**
     * Icon family, can be modified globally in framework settings
     *
     * Ultimately defaults to `fa`, if family is not set anywhere
     * @type {FontFamilies}
     */
    family = "",
    /**
     * Inline CSS for icon container
     */
    style = "",
    /**
     * CSS classes for icon
     */
    inner_class = "",
    /**
     * Inline CSS for icon
     */
    inner_style = "";

  /**
   * CSS classes for icon container
   */
  let klass = "";
  export { klass as class };

  let globalFamily = $defaultIconFamily,
    familyClass,
    internal_size,
    usedFamily;

  $: inner_icon = usedFamily === "material" ? icon : "";
  $: {
    usedFamily = family !== "" ? family : globalFamily ? globalFamily : "fa";

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
      case "material":
        familyClass = "material-icons material-symbols-outlined ";
        break;
      case "fa":
        familyClass = "fa fa-";
        break;
      default:
        familyClass = usedFamily + "-";
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
