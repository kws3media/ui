<!--
  @component


  @param {number} [x=0] - X Property, Default: `0`
  @param {number} [y=0] - Y Property, Default: `0`
  @param {number} [from=0.5] - From property, Default: `0.5`
  @param {number} [to=1] - To Property, Default: `1`
  @param {boolean} [transition=true] - If `false`, transition animations will not run, and behave like a static element., Default: `true`
  @param {'fly'|'fade'|'scale'|'slide'} [type="fly"] - Transition types., Default: `"fly"`
  @param {number} [duration=300] - Duration of the transition in milliseconds, Default: `300`
  @param {number} [delay=0] - Delays the start of the transition - in milliseconds, Default: `0`
  @param {string} [easing="cubicOut"] - Specifies the easing function to be used

Defaults to `cubicOut` if left empty

`cubicOut` | `sineOut` | `elasticOut` | `expoOut` | `circOut` | `bounceOut` | `backOut`, Default: `"cubicOut"`
  @param {string} [class=""] - CSS classes for the wrapper element, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Used to display content

-->
{#if transition}
  <svelte:component
    this={TransitionComponents[type]}
    {klass}
    {duration}
    {delay}
    {easing}
    {x}
    {y}
    {from}
    {to}>
    <slot />
  </svelte:component>
{:else}
  <div>
    <!--Used to display content--><slot />
  </div>
{/if}

<script>
  import Fly from "./components/Fly.svelte";
  import Fade from "./components/Fade.svelte";
  import Slide from "./components/Slide.svelte";
  import Scale from "./components/Scale.svelte";

  let TransitionComponents = {
    fly: Fly,
    fade: Fade,
    slide: Slide,
    scale: Scale,
  };
  /**
   * X Property
   */
  export let x = 0,
    /**
     * Y Property
     */
    y = 0,
    /**
     * From property
     */
    from = 0.5,
    /**
     * To Property
     */
    to = 1,
    /**
     * If `false`, transition animations will not run, and behave like a static element.
     */
    transition = true,
    /**
     * Transition types.
     * @type {'fly'|'fade'|'scale'|'slide'}
     */
    type = "fly",
    /**
     * Duration of the transition in milliseconds
     */
    duration = 300,
    /**
     * Delays the start of the transition - in milliseconds
     */
    delay = 0,
    /**
     * Specifies the easing function to be used
     *
     * Defaults to `cubicOut` if left empty
     *
     * `cubicOut` | `sineOut` | `elasticOut` | `expoOut` | `circOut` | `bounceOut` | `backOut`
     */
    easing = "cubicOut";

  /**
   * CSS classes for the wrapper element
   */
  let klass = "";
  export { klass as class };
</script>
