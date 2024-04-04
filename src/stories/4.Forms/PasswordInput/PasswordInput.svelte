<div id="story-root" class="columns">
  <div class="column">
    <div class="field">
      <KwsPasswordInput
        {size}
        {color}
        {placeholder}
        {show_visibility_switch}
        {disabled} />
    </div>
  </div>
  <div class="column">
    <div class="field">
      <div class="control">
        <KwsPasswordInput
          bind:value={new_pass}
          {size}
          {color}
          {placeholder}
          {show_visibility_switch}
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
    show_visibility_switch = true,
    disabled = false,
    placeholder = "Password";

  let new_pass = "";
</script>
