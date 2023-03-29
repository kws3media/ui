<div id="ss_container">
  <div class="columns">
    <div class="column is-6">
      <PasswordInput
        {size}
        {color}
        {placeholder}
        {style}
        class={klass}
        {disabled} />
    </div>
  </div>
</div>

<script>
  import { PasswordInput } from "@kws3/ui";

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
    style = "",
    disabled = false,
    placeholder = "Password";

  let klass = "";
  export { klass as class };
</script>
