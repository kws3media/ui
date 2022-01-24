<!--
  @component


  @param {'left'|'center'|'right'} [align="left"] - Alignment of the Timeline child items, Default: `"left"`
  @param {string} [class=""] - CSS classes for the Timeline container, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Default slot for placing all TimelineItem and TimelineHeader components

-->
<ul class="kws-timeline is-{align} {klass}">
  <!--Default slot for placing all TimelineItem and TimelineHeader components--><slot />
</ul>

<script>
  /**
   * Alignment of the Timeline child items
   * @type {'left'|'center'|'right'}
   */
  export let align = "left";

  /**
   * CSS classes for the Timeline container
   */
  let klass = "";
  export { klass as class };
</script>
