<!--
  @component


  @param {'left'|'center'|'right'} [align="left"] - Alignment of the Timeline child items, Default: `"left"`
  @param {string} [class=""] - CSS classes for the Timeline container, Default: `""`

-->
<ul class="kws-timeline is-{align} {klass}" />

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
