<!--
  @component


  @param {string} [outer_class=""] - CSS classes for the outer container, Default: `""`
  @param {string} [inner_class=""] - CSS classes for the inner container, Default: `""`
  @param {string} [width="100%"] - CSS value string to determine the width of the inner table, Default: `"100%"`
  @method `relayout()` - Method to recalculate layouts.
Call this method when the content of the <slot> changes

  ### Slots
  - `<slot name="default"  />`

-->
<svelte:window on:resize={debouncedResize} />
<div class="kws-sticky-columns-table-wrapper data-table-wrapper {outer_class}">
  <div class="data-list-inner-wrapper {inner_class}">
    <div
      class="data-table has-custom-scrollbar"
      bind:this={scrollContainer}
      on:scroll={scrollHandler}>
      <slot />
    </div>
  </div>
  <div
    class="fake-shadow-contraint left"
    style="left: {leftShadowLeft}px;opacity:{needsScroll
      ? scale(scrollLeft)
      : 0};">
    <div class="fake-inner-shadow" />
  </div>
  <div
    class="fake-shadow-contraint right"
    style="opacity:{needsScroll ? 1 - scale(scrollLeft) : 0};">
    <div class="fake-inner-shadow" />
  </div>
</div>

<script>
  import { debounce, createScaler } from "@kws3/ui/utils";
  import { onMount, tick } from "svelte";

  /** CSS classes for the outer container*/
  export let outer_class = "";
  /** CSS classes for the inner container*/
  export let inner_class = "";
  /** CSS value string to determine the width of the inner table*/
  export let width = "100%";

  $: width, applyWidth(width);

  let scrollContainer;

  let leftShadowLeft = 0;
  let scrollWidth = 0;
  let offsetWidth = 0;
  let needsScroll = false;
  let scrollLeft = 0;

  let scale = createScaler([0, 1], [0, 1]);

  onMount(mounted);

  function mounted() {
    relayout();
  }

  /**
   * Method to recalculate layouts.
   * Call this method when the content of the <slot> changes
   */
  export function relayout() {
    tick().then(() => {
      leftShadowLeft = -1;
      needsScroll = false;
      const stickies = scrollContainer.querySelectorAll(
        "thead>tr>th.is-sticky-column",
      );

      stickies.forEach((th) => {
        leftShadowLeft += th.offsetWidth;
      });

      scrollWidth = scrollContainer.scrollWidth;
      offsetWidth = scrollContainer.offsetWidth;

      let diff = scrollWidth - offsetWidth;
      if (scrollWidth > offsetWidth) {
        needsScroll = true;
      }
      scale = createScaler([0, diff], [0, 1]);
    });
  }

  const debouncedResize = debounce(relayout, 350);

  function scrollHandler(e) {
    scrollLeft = e.target.scrollLeft;
  }

  function applyWidth(width) {
    tick().then(() => {
      scrollContainer.querySelector("table.table").style.width = width;
      debouncedResize();
    });
  }
</script>
