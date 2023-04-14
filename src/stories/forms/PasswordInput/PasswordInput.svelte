<div id="story-root" class="columns">
  <div class="column">
    <div class="field">
        <KwsPasswordInput
        {size}
        {color}
        {placeholder}
        {style}
        {label}
        {has_visibility}
        class={klass}
        {disabled} />
    </div>
  </div>
  <div class="column">
    <div class="field">
      <label for="" class="label">PasswordInput (with custom rule)</label>
        <KwsPasswordInput
        {size}
        {color}
        {placeholder}
        {style}
        label={false}
        {has_visibility}
        class={klass}
        {disabled} 
       />
        <p class="control">
        <PasswordValidator
          {compact}
          {password}
          {min}
          {lower}
          {upper}
          {digit}
          {special}
          custom_rules={[
            {
              name: "not_1234",
              text: "Should not be '1234'",
              identifier: "!1234",
              negate: true,
              regex: "(1234)",
            },
          ]}
          bind:valid
          class={klass}
          {style} />
      </p>
    </div>
  </div>
</div>

<script>
  import {
    PasswordInput as KwsPasswordInput,
    activateTooltips, PasswordValidator
  } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#story-root", null);
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
    label = true,
    has_visibility = true,
    disabled = false,
    placeholder = "Password",
    password = "",
    compact = true,
    min = 8,
    lower = true,
    upper = true,
    digit = true,
    special = true,
    custom_rules = [],
    valid = false,
    style = "";

  let klass = "";
  export { klass as class };
</script>
