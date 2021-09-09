<!--
  @component


  @param {number} [x=0] - X Property, Default: `0`
  @param {number} [y=0] - Y Property, Default: `0`
  @param {number} [from=0.5] - From property, Default: `0.5`
  @param {number} [to=1] - To Property, Default: `1`
  @param {boolean} [transition=true] - True/False - transition will not run, and behave as if its a static element., Default: `true`
  @param {'fly'|'fade'|'scale'|'slide'} [type="fly"] - Transition types., Default: `"fly"`
  @param {number} [duration=300] - Duration - in milliseconds, duration of the transition, Default: `300`
  @param {number} [delay=0] - Delay - in milliseconds, delays the start of the transition, Default: `0`
  @param {string} [easing=""] - Specifies the easing function to be used. Any one of the following strings
`sineOut` | `elasticOut` | `expoOut` | `cubicOut` - (default easing) | `circOut` | `bounceOut` | `backOut`, Default: `""`
  @param {string} [class=""] - Wrapper class element, Default: `""`

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
     * True/False - transition will not run, and behave as if its a static element.
     */
    transition = true,
    /**
     * Transition types.
     * @type {'fly'|'fade'|'scale'|'slide'}
     */
    type = "fly",
    /**
     * Duration - in milliseconds, duration of the transition
     */
    duration = 300,
    /**
     * Delay - in milliseconds, delays the start of the transition
     */
    delay = 0,
    /**
     * Specifies the easing function to be used. Any one of the following strings
     * `sineOut` | `elasticOut` | `expoOut` | `cubicOut` - (default easing) | `circOut` | `bounceOut` | `backOut`
     */
    easing = "";

  /**
   * Wrapper class element
   */
  let klass = "";
  export { klass as class };
</script>
