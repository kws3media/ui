<!--
  @component


  @param {number} [lines=1] - Lines property, Default: `1`
  @param {string} [width="100%"] - CSS string denoting width of the Skeleton
**Examples:** `10px` | `5rem` | `100vh`, Default: `"100%"`
  @param {string} [height="auto"] - CSS string denoting height of the Skeleton
**Examples:** `10px` | `5rem` | `100vh` | `auto`, Default: `"auto"`
  @param {string} [radius="0px"] - CSS string denoting border-radius of the Skeleton
**Examples:** `10px` | `5rem`, Default: `"0px"`
  @param {boolean} [circle=false] - Whether the Skeleton should be rendered as a circle.
If this is set to `true`, the `radius` property will be ignored., Default: `false`
  @param {'' | 'transparent' | 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'link'} [color=""] - Color of the Skeleton lines, Default: `""`
  @param {string} [class=""] - CSS class for Skeleton, Default: `""`

-->
<!-- eslint-disable-next-line no-unused-vars -->
{#each { length: lines } as _, i}
  <span
    class="kws-skeleton is-{color} {klass}"
    style="width:{width};height:{height};border-radius:{border_radius}">
    &zwnj;
  </span>
{/each}

<script>
  export let /**
     * Number of lines of text to display.
     */
    lines = 1,
    /**
     * CSS string denoting width of the Skeleton
     * **Examples:** `10px` | `5rem` | `100vh`
     */
    width = "100%",
    /**
     * CSS string denoting height of the Skeleton
     * **Examples:** `10px` | `5rem` | `100vh` | `auto`
     */
    height = "auto",
    /**
     * CSS string denoting border-radius of the Skeleton
     * **Examples:** `10px` | `5rem`
     */
    radius = "0px",
    /**
     * Whether the Skeleton should be rendered as a circle.
     * If this is set to `true`, the `radius` property will be ignored.
     */
    circle = false,
    /**
     * Color of the Skeleton lines
     * @type {'' | 'transparent' | 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'link'}
     */
    color = "";

  /**
   * CSS class for Skeleton
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  $: border_radius = circle ? "50%" : radius;
</script>
