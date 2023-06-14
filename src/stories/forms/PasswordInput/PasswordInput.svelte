<div id="story-root" class="columns">
  <div class="column">
    <div class="field">
      <KwsPasswordInput
        {name}
        {size}
        {color}
        {placeholder}
        {show_field_icon}
        {field_icon}
        {field_icon_family}
        {show_visibility_switch}
        {visibility_switch_icon_family}
        {visibility_switch_on_icon}
        {visibility_switch_off_icon}
        {visibility_switch_on_color}
        {visibility_switch_off_color}
        {required}
        {autocomplete}
        {disabled} />
    </div>
  </div>
  <div class="column">
    <div class="field">
      <div class="control">
        <KwsPasswordInput
          bind:value={new_pass}
          {name}
          {size}
          {color}
          {placeholder}
          {show_field_icon}
          {field_icon}
          {field_icon_family}
          {show_visibility_switch}
          {visibility_switch_icon_family}
          {visibility_switch_on_icon}
          {visibility_switch_off_icon}
          {visibility_switch_on_color}
          {visibility_switch_off_color}
          {required}
          {autocomplete}
          {disabled} />
        <PasswordValidator password={new_pass} />
      </div>
    </div>
  </div>
</div>

<script>
  import {
    PasswordInput as KwsPasswordInput,
    activateTooltips,
    PasswordValidator,
  } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#story-root");
  });
  /**
   * Size of the input
   *  @type {import('@kws3/ui/types').SizeOptions}
   */
  export let size = "",
    /**
     * Color of the input
     * @type {import('@kws3/ui/types').ColorOptions}
     */
    color = "",
    name = "",
    disabled = false,
    required = false,
    autocomplete = "on",
    placeholder = "Password",
    show_field_icon = true,
    field_icon = "lock",
    /**
     * Color of the input
     * @type {import('@kws3/ui/types').FontFamilies}
     */
    field_icon_family = "fa",
    show_visibility_switch = true,
    /**
     * Color of the input
     * @type {import('@kws3/ui/types').FontFamilies}
     */
    visibility_switch_icon_family = "fa",
    visibility_switch_on_icon = "eye",
    visibility_switch_off_icon = "eye-slash",
    /**
     * Color of the input
     * @type {import('@kws3/ui/types').ExtendedColorOptions}
     */
    visibility_switch_on_color = "grey",
    /**
     * Color of the input
     * @type {import('@kws3/ui/types').ExtendedColorOptions}
     */
    visibility_switch_off_color = "grey";

  let new_pass = "";
</script>
