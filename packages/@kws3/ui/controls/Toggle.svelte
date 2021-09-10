<!--
  @component


  @param {boolean} [on=false] - Toggle On - true/false, Default: `false`
  @param {boolean} [disabled=false] - Disabled - true/false, Default: `false`
  @param {'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the Toggle, Default: `""`
  @param {string} [classes=""] - Supported classes, Default: `""`
  @param {string} [on_text=""] - On Text, Default: `""`
  @param {string} [off_text=""] - Off Text, Default: `""`
  @param {'small'|'medium'|'large'} [size=""] - Size of the Toggle Button, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

-->
<div
  class:on
  class:disabled
  class="toggle-button is-{color} is-{size} {klass}"
  on:click={toggle}
  data-cy={cy}>
  <div class="track">
    <p class="toggle-text">{on ? on_text : off_text}</p>
    <div class="handle" />
  </div>
</div>

<style lang="scss">
  .disabled {
    opacity: 0.5;
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";
  const fire = createEventDispatcher();

  /**
   * Toggle On - true/false
   */
  export let on = false,
    /**
     * Disabled - true/false
     */
    disabled = false,
    /**
     * Color of the Toggle
     * @type {'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * On Text
     */
    on_text = "",
    /**
     * Off Text
     */
    off_text = "",
    /**
     * Size of the Toggle Button
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "";

  /**
   * CSS classes
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  function toggle() {
    if (!disabled) {
      on = !on;
      /**
       * Toggle change event
       */
      fire("change");
    }
  }
</script>
