<!--
  @component


  @param {boolean} [has_visibility_switcher=true] - whether has visibility feature or not, Default: `true`
  @param {?string} [value=] - Value of the Input

This property can be bound to, to fetch the current value, Default: ``
  @param {SizeOptions} [size=] - Size of the PasswordInput, Default: ``
  @param {ColorOptions} [color=] - Colour of the PasswordInput, Default: ``
  @param {string} [style=""] - Inline CSS for the PasswordInput, Default: `""`
  @param {boolean} [disabled=false] - Disables the PasswordInput, Default: `false`
  @param {string} [placeholder=""] - Input placeholder, Default: `""`
  @param {FontFamilies} [icon_family=] - Icon family to be used

Defaults to global family set via `Icon.setDefaultIconType()`

Ultimately defaults to `fa`, if family is not set anywhere, Default: ``
  @param {string} [class=""] - CSS classes of the PasswordInput, Default: `""`

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

    <span class="icon is-left">
      <Icon family={icon_family} icon="lock" size={iconSizes[size]} color="dark" />
    </span>

    {#if has_visibility_switcher}
      <span
        class="icon is-right visibility-btn"
        on:click={() => {
          visibility = !visibility;
        }}>
        <Icon
          family={icon_family}
          color="dark"
          icon={visibility ? visibility_icon.show : visibility_icon.hide}
          size={iconSizes[size]} />
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
   * @typedef {import('@kws3/ui/types').FontFamilies} FontFamilies
   *
   */
  let visibility = false;

  /**
   * whether has visibility feature or not
   * @type {boolean}
   */
  export let has_visibility_switcher = true;

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
   * @type {FontFamilies}
   */
  export let icon_family = "";
  /**
   * CSS classes of the PasswordInput
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  function onInput(event) {
    value = event.target.value;
  }

  let iconSizes = {
    large: "medium",
  };

  $: type = visibility ? "text" : "password";

  $: visibility_icon = {
    show: icon_family === "material" ? "visibility" : "eye",
    hide: icon_family === "material" ? "visibility-off" : "eye-slash",
  };
</script>
