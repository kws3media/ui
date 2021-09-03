<!--
  @component


  @param {boolean} [active=false] - Active - true/false, Default: `false`
  @param {string} [classes=""] - Additional classes, Default: `""`
  @param {string} [style=""] - Inline style of component, Default: `""`
  @param {boolean} [v_center=false] - V-Center - true/false, Default: `false`
  @param {boolean} [h_center=false] - H-Center - true/false, Default: `false`
  @param {boolean} [track_height=false] - Track Height - true/false, Default: `false`

  ### Slots
  - `<slot name="default"  />`

-->
<div
  bind:clientHeight={_height}
  class="sliding-pane {v_center ? 'v-centered' : ''} {h_center
    ? 'h-centered'
    : ''} {active ? 'is-active' : ''} {classes}"
  {style}>
  <div
    bind:this={slideInner}
    class="sliding-pane-inner {v_center ? 'v-centered' : ''} {h_center
      ? 'h-centered'
      : ''}">
    <slot />
  </div>
</div>

<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { rAF } from "@kws3/utils";

  const fire = createEventDispatcher();

  /**
   * Active - true/false
   * @type {boolean}
   */
  export let active = false,
    /**
     * Additional classes
     * @type {string}
     */
    classes = "",
    /**
     * Inline style of component
     * @type {string}
     */
    style = "",
    /**
     * V-Center - true/false
     * @type {boolean}
     */
    v_center = false,
    /**
     * H-Center - true/false
     * @type {boolean}
     */
    h_center = false,
    /**
     * Track Height - true/false
     * @type {boolean}
     */
    track_height = false;

  let _height, slideInner;

  onMount(() => {
    pollForRender();
  });

  $: {
    if (active && track_height && (active || _height)) {
      rAF(() => {
        this.fireSizeChange();
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
          fire("heightChange", { height: Math.max(h1, h2) });
        });
      }
    }
  }
</script>
