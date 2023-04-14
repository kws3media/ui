<!--
  @component


  @param {''|'small'|'medium'|'large'} [size=""] - Size of the PasswordInput, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the PasswordInput, Default: `""`
  @param {string} [style=""] - Inline CSS for the PasswordInput, Default: `""`
  @param {string} [class=""] - CSS classes of the PasswordInput, Default: `""`

  Checked\Not Checked, Default: `false`
  @param {boolean} [disabled=false] - Disables the PasswordInput, Default: `false`

-->

<div class="field is-marginless">
  <p class="control has-icons-left has-icons-right is-marginless">
    <input
      {type}
      {style}
      {value}
      class="input is-{size} is-{color} {klass} {style}"
      on:input={(event) => onInput(event)}
      {placeholder}
      {disabled} />

    <span class="icon is-{size} is-left">
      <Icon family={icon_family} icon="lock" {size} />
    </span>

    {#if has_visibility}
      <span
        class="icon is-{size} is-right visibility-btn"
        on:click={() => {
          visibility = !visibility;
        }}>
        <Icon
          family={icon_family}
          icon={visibility ? visibility_icon.show : visibility_icon.hide}
          {size} />
      </span>
    {/if}
  </p>
</div>

<style lang="scss">
  .visibility-btn {
    pointer-events: fill !important;
    cursor: pointer;
  }
</style>

<script>
  import { Icon } from "@kws3/ui";
  /**
   *
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   *
   */
  let visibility = false;
  export let has_visibility = true;

  /**
   * Value of the Input
   *
   * This property can be bound to, to fetch the current value
   * @type {?string}
   */
  export let value = "";

  /**
   * Size of the PasswordInput
   * @type {SizeOptions}
   */
  export let size = "";
  /**
   * Colour of the PasswordInput
   * @type {ColorOptions}
   */
  export let color = "";
  /**
   * Inline CSS for the PasswordInput
   * @type {string}
   */
  export let style = "";
  /**
   * Disables the PasswordInput
   * @type {boolean}
   */
  export let disabled = false;
  /**
   * Input placeholder
   * @type {string}
   */
  export let placeholder = "";
  /**
   * Icon family to be used
   *
   * Defaults to global family set via `Icon.setDefaultIconType()`
   *
   * Ultimately defaults to `fa`, if family is not set anywhere
   *
   * @type {string|''|'fa'|'lar'|'las'|'gg'|'unicons'|'material'}
   */
  export let icon_family = "";
  /**
   * CSS classes of the PasswordInput
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  function onInput(event) {
    console.log("value change");
    value = event.target.value;
  }

  $: type = visibility ? "text" : "password";

  $: visibility_icon = {
    show: icon_family === "material" ? "visibility" : "eye",
    hide: icon_family === "material" ? "visibility-off" : "eye-slash",
  };
</script>
