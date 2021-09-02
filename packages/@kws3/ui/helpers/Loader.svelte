<!--
  @component
  

  @param {'transparent'|'warning'|'info'|'danger'|'primary'} [color="transparent"] - Color of the Loader, Default: `"transparent"`
  @param {'small'|'medium'|'large'} [size="medium"] - size of the Loader, Default: `"medium"`
  @param {string} [type=""] - Type of loader, Default: `""`
  @param {string} [style=""] - Inline Style of loader, Default: `""`
  @param {boolean} [large_loader=false] - Large loader, Default: `false`

-->
<div
  class="kws-loader hero is-{color} is-{size} {large_loader
    ? 'is-large-loader'
    : ''}"
  {style}>
  <div class="hero-body" style={type == "inline" ? "padding:1rem" : ""}>
    &nbsp;
  </div>
</div>

<script>
  /**
   * Color of the Loader
   * @type {'transparent'|'warning'|'info'|'danger'|'primary'}
   */
  export let color = "transparent";

  /**
   * size of the Loader
   * @type {'small'|'medium'|'large'}
   */
  export let size = "medium";

  /**
   * Type of loader
   * @type {string}
   */
  export let type = "";

  /**
   * Inline Style of loader
   * @type {string}
   */
  export let style = "";

  /**
   * Large loader
   * @type {boolean}
   */
  export let large_loader = false;
</script>
