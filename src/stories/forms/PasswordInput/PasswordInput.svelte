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
    Usage with PasswordValidator:
    <pre>
<code>
&lt;PasswordInput&gt;
  &lt;PasswordValidator ... /&gt;
&lt;PasswordInput/&gt;
</code>
    </pre>
    <div class="field">
      <KwsPasswordInput
        bind:value={new_pass}
        {size}
        {color}
        {placeholder}
        {has_visibility}
        {disabled}>
        <PasswordValidator password={new_pass} />
      </KwsPasswordInput>
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
    label = "Password",
    has_visibility = true,
    disabled = false,
    placeholder = "Password",
    password = "";

  let new_pass = "";
</script>
