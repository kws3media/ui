<!--
  @component


  @param {boolean} [on=false] - Current value of the Toggle

This property can be bound to, to fetch the current value, Default: `false`
  @param {boolean} [disabled=false] - Disables the Toggle, Default: `false`
  @param {ColorOptions} [color=] - Color of the Toggle, Default: ``
  @param {string} [on_text=""] - Text displayed on the Toggle when ON, Default: `""`
  @param {string} [off_text=""] - Text displayed on the Toggle when OFF, Default: `""`
  @param {SizeOptions} [size=] - Size of the Toggle, Default: ``
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [class=""] - CSS classes for the Toggle, Default: `""`

  ### Events
  - `change` - Fires an event on change of Toggle state

-->
<div
  class:on
  class:disabled
  class="kws-toggle-button is-{color} is-{size} {klass}"
  on:click={toggle}
  data-cy={cy}>
  <div class="track">
    <p class="toggle-text">{on ? on_text : off_text}</p>
    <div class="handle" />
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte";

  /**
   *
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   *
   */
  const fire = createEventDispatcher();

  /**
   * Current value of the Toggle
   *
   * This property can be bound to, to fetch the current value
   */
  export let on = false,
    /**
     * Disables the Toggle
     */
    disabled = false,
    /**
     * Color of the Toggle
     * @type {ColorOptions}
     */
    color = "",
    /**
     * Text displayed on the Toggle when ON
     */
    on_text = "",
    /**
     * Text displayed on the Toggle when OFF
     */
    off_text = "",
    /**
     * Size of the Toggle
     * @type {SizeOptions}
     */
    size = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "";

  /**
   * CSS classes for the Toggle
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  function toggle() {
    if (!disabled) {
      on = !on;
      /**
       * Fires an event on change of Toggle state
       */
      fire("change");
    }
  }
</script>
