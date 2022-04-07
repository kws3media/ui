<!--
  @component


  @param {boolean} [active=false] - Used to set the active pane, Default: `false`
  @param {string} [style=""] - Inline CSS of component, Default: `""`
  @param {boolean} [v_center=true] - Vertical alignment of content inside the active pane., Default: `true`
  @param {boolean} [h_center=true] - Horizontal alignment of content inside the active pane., Default: `true`
  @param {boolean} [track_height=true] - If this is set to `false`, the height of the panel will not change based on the pane height, Default: `true`
  @param {string} [class=""] - CSS classes for the panel, Default: `""`

  ### Events
  - `heightChange` - Event fired when the height of the pane changes

This will work only when `track_height` is set to `true`

  ### Slots
  - `<slot name="default"  />` - Used to display content

-->
{#if hasResizeObserver}
  <div
    class="sliding-pane with-resize-observer {v_center
      ? 'v-centered'
      : ''} {h_center ? 'h-centered' : ''} {active ? 'is-active' : ''} {klass}"
    {style}>
    <div
      bind:this={slideInner}
      class="sliding-pane-inner {v_center ? 'v-centered' : ''} {h_center
        ? 'h-centered'
        : ''}">
      <!--Used to display content--><slot />
    </div>
  </div>
{:else}
  <div
    bind:clientHeight={_height}
    class="sliding-pane with-legacy-observer {v_center
      ? 'v-centered'
      : ''} {h_center ? 'h-centered' : ''} {active ? 'is-active' : ''} {klass}"
    {style}>
    <div
      bind:this={slideInner}
      class="sliding-pane-inner {v_center ? 'v-centered' : ''} {h_center
        ? 'h-centered'
        : ''}">
      <!--Used to display content--><slot />
    </div>
  </div>
{/if}

<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { debounce } from "@kws3/ui/utils";

  const fire = createEventDispatcher();

  /**
   * Used to set the active pane
   */
  export let active = false,
    /**
     * Inline CSS of component
     */
    style = "",
    /**
     * Vertical alignment of content inside the active pane.
     */
    v_center = true,
    /**
     * Horizontal alignment of content inside the active pane.
     */
    h_center = true,
    /**
     * If this is set to `false`, the height of the panel will not change based on the pane height
     */
    track_height = true;

  const hasResizeObserver = typeof window.ResizeObserver != "undefined";
  let _height, slideInner, Observer;

  /**
   * CSS classes for the panel
   */
  let klass = "";
  export { klass as class };

  $: {
    if (active && track_height && (active || _height)) {
      fireSizeChange();
    }
  }

  function pollForRender() {
    if (slideInner && typeof slideInner != "undefined") {
      init();
    } else {
      setTimeout(() => {
        pollForRender();
      }, 50);
    }
  }

  function init() {
    setupResizeObserver();
    fireSizeChange();
  }

  function fireSizeChange() {
    if (track_height && active) {
      if (!slideInner || typeof slideInner == "undefined") {
        pollForRender();
      } else {
        if (!slideInner || typeof slideInner == "undefined") {
          return;
        }
        var h1 = slideInner.scrollHeight,
          h2 = slideInner.clientHeight;
        var new_height = Math.max(h1, h2);
        /**
         * Event fired when the height of the pane changes
         *
         * This will work only when `track_height` is set to `true`
         */
        fire("heightChange", { height: new_height });
      }
    }
  }

  const debouncedFireSizeChange = debounce(fireSizeChange, 150, false);

  const setupResizeObserver = () => {
    if (hasResizeObserver) {
      if (!slideInner || typeof slideInner == "undefined") {
        pollForRender();
      } else {
        Observer = new ResizeObserver(() => {
          debouncedFireSizeChange();
        });
        Observer.observe(slideInner);
      }
    }
  };

  onMount(() => {
    pollForRender();
    return () => {
      Observer && Observer.disconnect();
    };
  });
</script>
