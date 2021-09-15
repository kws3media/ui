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
   * Used to set the active pane.
   */
  export let active = false,
    /**
     * Inline style of component
     */
    style = "",
    /**
     * Vertical alignment of content inside the active pane.
     */
    v_center = false,
    /**
     * Horizontal alignment of content inside the active pane.
     */
    h_center = false,
    /**
     * Used to set the height of the active pane.
     */
    track_height = false;

  let _height, slideInner;

  /**
   * Additional css classes
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
          var new_height = Math.max(h1, h2);
          /**
           * Event used to dynamically change the height of the active pane content.<br/>
           * This will be work based on the `track_height` true.
           */
          fire("heightChange", { height: new_height });
        });
      }
    }
  }
</script>
