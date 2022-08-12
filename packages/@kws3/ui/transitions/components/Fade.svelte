<!--
  @component


  @param {object} [easing=null] - Easing property, Default: `null`
  @param {number} [delay=0] - Delay property, Default: `0`
  @param {number} [duration=300] - Duration property, Default: `300`
  @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`

  ### Slots
  - `<slot name="default"  />`

-->
<div
  class="transible {klass}"
  in:fade={{
    duration: duration || 300,
    delay: delay || 0,
    easing: getEasing(easing),
  }}>
  <slot />
</div>

<script>
  //@ts-nocheck
  import { fade } from "svelte/transition";
  import getEasing from "./getEasing";

  export let easing = null,
    delay = 0,
    duration = 300;

  /**
   * CSS classes for the wrapper element
   */
  let klass = "";
  export { klass as class };
</script>
