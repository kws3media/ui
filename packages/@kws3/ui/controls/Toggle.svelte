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
  class="toggle-button is-{color} is-{size} {classes}"
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
   * @type {boolean}
   */
  export let on = false,
    /**
     * Disabled - true/false
     * @type {boolean}
     */
    disabled = false,
    /**
     * Color of the Toggle
     * @type {'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * Supported classes
     * @type {string}
     */
    classes = "",
    /**
     * On Text
     * @type {string}
     */
    on_text = "",
    /**
     * Off Text
     * @type {string}
     */
    off_text = "",
    /**
     * Size of the Toggle Button
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * data-cy attribute for cypress
     * @type {string}
     */
    cy = "";

  function toggle() {
    if (!disabled) {
      on = !on;
      fire("change");
    }
  }
</script>
