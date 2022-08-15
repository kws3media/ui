<!--
  @component


  @param {string} [class=""] - CSS classes for the TimelineItem container, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Content of the header, recommended to wrap with a `.tag` element.

-->
<header class="kws-timeline-header {klass}">
  <!--Content of the header, recommended to wrap with a `.tag` element.--><slot />
</header>

<script>
  /**
   * CSS classes for the TimelineItem container
   */
  let klass = "";
  export { klass as class };
</script>
