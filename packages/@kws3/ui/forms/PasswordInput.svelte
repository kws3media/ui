<!--
  @component


  @param {boolean} [show_field_icon=true] - whether to show field icon or not, Default: `true`
  @param {string} [field_icon="lock"] - field icon name, Default: `"lock"`
  @param {FontFamilies} [field_icon_family=fa] - Icon family to be used

Defaults to global family set via `Icon.setDefaultIconType()`

Ultimately defaults to `fa`, if family is not set anywhere, Default: `fa`
  @param {boolean} [show_visibility_switch=true] - whether has visibility feature or not, Default: `true`
  @param {FontFamilies} [visibility_switch_icon_family=fa] - Icon family to be used

Defaults to global family set via `Icon.setDefaultIconType()`

Ultimately defaults to `fa`, if family is not set anywhere, Default: `fa`
  @param {string} [visibility_switch_on_icon="eye"] - visibility switch on icon name, Default: `"eye"`
  @param {string} [visibility_switch_off_icon="eye-slash"] - visibility switch off icon icon name, Default: `"eye-slash"`
  @param {ExtendedColorOptions} [visibility_switch_on_color=grey] - visibility switch on icon color, Default: `grey`
  @param {ExtendedColorOptions} [visibility_switch_off_color=grey] - visibility switch off icon color, Default: `grey`
  @param {?string} [value=] - Value of the Input

This property can be bound to, to fetch the current value, Default: ``
  @param {SizeOptions} [size=] - Size of the PasswordInput, Default: ``
  @param {ColorOptions} [color=] - Colour of the PasswordInput, Default: ``
  @param {string} [style=""] - Inline CSS for the PasswordInput, Default: `""`
  @param {boolean} [disabled=false] - Disables the PasswordInput, Default: `false`
  @param {string} [placeholder=""] - Input placeholder, Default: `""`
  @param {string} [class=""] - CSS classes of the PasswordInput, Default: `""`

  ### Events
  - `focus`
  - `blur`
  - `change`
  - `input`
  - `keyup`
  - `keydown`
  - `paste`

-->

<div class="field is-marginless">
  <p class="control has-icons-left has-icons-right is-marginless">
    <input
      type="password"
      bind:this={PASSWORD_INPUT}
      {style}
      bind:value
      class="input is-{size} is-{color} {klass} {style}"
      on:focus
      on:blur
      on:change
      on:input
      on:keyup
      on:keydown
      on:paste
      {placeholder}
      {disabled} />
    {#if show_field_icon}
      <span class="icon is-left">
        <Icon
          family={field_icon_family}
          icon={field_icon}
          size={iconSizes[size]} />
      </span>
    {/if}

    {#if show_visibility_switch}
      <span
        class="icon is-right visibility-btn"
        on:click={() => {
          visibility = !visibility;
        }}>
        <Icon
          family={visibility_switch_icon_family}
          color={visibility
            ? visibility_switch_on_color
            : visibility_switch_off_color}
          icon={visibility
            ? visibility_switch_on_icon
            : visibility_switch_off_icon}
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
   * @typedef {import('@kws3/ui/types').ExtendedColorOptions} ExtendedColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   * @typedef {import('@kws3/ui/types').FontFamilies} FontFamilies
   *
   */
  let visibility = false;
  let PASSWORD_INPUT;

  /**
   * whether to show field icon or not
   * @type {boolean}
   */
  export let show_field_icon = true;

  /**
   * field icon name
   * @type {string}
   */
  export let field_icon = "lock";

  /**
   * Icon family to be used
   *
   * Defaults to global family set via `Icon.setDefaultIconType()`
   *
   * Ultimately defaults to `fa`, if family is not set anywhere
   *
   * @type {FontFamilies}
   */
  export let field_icon_family = "fa";

  /**
   * whether has visibility feature or not
   * @type {boolean}
   */
  export let show_visibility_switch = true;
  /**
   * Icon family to be used
   *
   * Defaults to global family set via `Icon.setDefaultIconType()`
   *
   * Ultimately defaults to `fa`, if family is not set anywhere
   *
   * @type {FontFamilies}
   */
  export let visibility_switch_icon_family = "fa";
  /**
   * visibility switch on icon name
   * @type {string}
   */
  export let visibility_switch_on_icon = "eye";
  /**
   * visibility switch off icon icon name
   * @type {string}
   */
  export let visibility_switch_off_icon = "eye-slash";
  /**
   * visibility switch on icon color
   * @type {ExtendedColorOptions}
   */
  export let visibility_switch_on_color = "grey";
  /**
   * visibility switch off icon color
   * @type {ExtendedColorOptions}
   */
  export let visibility_switch_off_color = "grey";

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
   * CSS classes of the PasswordInput
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  // function onInput(event) {
  //   value = event.target.value;
  // }

  let iconSizes = {
    large: "medium",
  };

  $: visibility, setInputType();

  function setInputType() {
    if (PASSWORD_INPUT) {
      PASSWORD_INPUT.type = visibility ? "text" : "password";
    }
  }
</script>
