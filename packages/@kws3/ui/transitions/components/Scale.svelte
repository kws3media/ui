<!--
  @component


  @param {number} [from=0.5] - From property, Default: `0.5`
  @param {number} [to=1] - To property, Default: `1`
  @param {object} [easing=null] - Easing property, Default: `null`
  @param {number} [delay=0] - Delay property, Default: `0`
  @param {number} [duration=300] - Duration property, Default: `300`
  @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`

  ### Slots
  - `<slot name="default"  />`

-->
<div
  class="transible {klass}"
  style="transform:translate3d(0,0,0)"
  in:scale|global={{
    // @ts-ignore
    from: from || 0.5,
    to: to || 1,
    duration: duration || 300,
    delay: delay || 0,
    easing: getEasing(easing),
  }}>
  <slot />
</div>

<script>
  import { scale } from "svelte/transition";
  import getEasing from "./getEasing";

  export let from = 0.5,
    to = 1,
    easing = null,
    delay = 0,
    duration = 300;

  /**
   * CSS classes for the wrapper element
   */
  let klass = "";
  export { klass as class };
</script>
