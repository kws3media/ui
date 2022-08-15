<!--
  @component


  @param {number} [x=0] - X property, Default: `0`
  @param {number} [y=0] - Y property, Default: `0`
  @param {object} [easing=null] - Easing property, Default: `null`
  @param {number} [delay=0] - Delay property, Default: `0`
  @param {number} [duration=300] - Duration property, Default: `300`
  @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`

  ### Slots
  - `<slot name="default"  />`

-->
<div
  class="transible {klass}"
  in:fly={{
    x: x || 0,
    y: y || 0,
    duration: duration || 300,
    delay: delay || 0,
    easing: getEasing(easing),
  }}>
  <slot />
</div>

<script>
  import { fly } from "svelte/transition";
  import getEasing from "./getEasing";

  export let x = 0,
    y = 0,
    easing = null,
    delay = 0,
    duration = 300;

  /**
   * CSS classes for the wrapper element
   */
  let klass = "";
  export { klass as class };
</script>
