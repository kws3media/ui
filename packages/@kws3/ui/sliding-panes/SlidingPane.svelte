<!--
  @component


  @param {boolean} [active=false] - Active step - true/false, Default: `false`
  @param {string} [style=""] - Inline style of component, Default: `""`
  @param {boolean} [v_center=false] - V-Center - true/false, Default: `false`
  @param {boolean} [h_center=false] - H-Center - true/false, Default: `false`
  @param {boolean} [track_height=false] - Track Height - true/false, Default: `false`
  @param {string} [class=""] - Additional class, Default: `""`

  ### Events
  - `heightChange` - Change height of the pane dynamically

  ### Slots
  - `<slot name="default"  />` - Used to display content

-->
<div
  bind:clientHeight={_height}
  class="sliding-pane {v_center ? 'v-centered' : ''} {h_center
    ? 'h-centered'
    : ''} {active ? 'is-active' : ''} {klass}"
  {style}>
  <div
    bind:this={slideInner}
    class="sliding-pane-inner {v_center ? 'v-centered' : ''} {h_center
      ? 'h-centered'
      : ''}">
    <!--Used to display content--><slot />
  </div>
</div>

<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { rAF } from "../utils";

  const fire = createEventDispatcher();

  /**
   * Active step - true/false
   */
  export let active = false,
    /**
     * Inline style of component
     */
    style = "",
    /**
     * V-Center - true/false
     */
    v_center = false,
    /**
     * H-Center - true/false
     */
    h_center = false,
    /**
     * Track Height - true/false
     */
    track_height = false;

  let _height, slideInner;

  /**
   * Additional class
   */
  let klass = "";
  export { klass as class };

  onMount(() => {
    pollForRender();
  });

  $: {
    if (active && track_height && (active || _height)) {
      rAF(() => {
        fireSizeChange();
      });
    }
  }

  function pollForRender() {
    if (slideInner && typeof slideInner != "undefined") {
      init();
    } else {
      setTimeout(() => {
        pollForRender();
      }, 200);
    }
  }

  function init() {
    fireSizeChange();
  }

  function fireSizeChange() {
    if (track_height && active) {
      if (!slideInner || typeof slideInner == "undefined") {
        pollForRender();
      } else {
        rAF(() => {
          if (!slideInner || typeof slideInner == "undefined") {
            return;
          }
          var h1 = slideInner.scrollHeight,
            h2 = slideInner.clientHeight;
          /**
           * Change height of the pane dynamically
           */
          fire("heightChange", { height: Math.max(h1, h2) });
        });
      }
    }
  }
</script>
