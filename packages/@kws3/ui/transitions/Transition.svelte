<!--
  @component


  @param {number} [x=0] - X property, Default: `0`
  @param {number} [y=0] - Y property, Default: `0`
  @param {number} [from=0.5] - From property, Default: `0.5`
  @param {number} [to=1] - To property, Default: `1`
  @param {boolean} [transition=true] - Transition property, Default: `true`
  @param {string} [type="fly"] - Type property, Default: `"fly"`
  @param {number} [duration=300] - Duration property, Default: `300`
  @param {number} [delay=0] - Delay property, Default: `0`
  @param {object} [easing=null] - Easing property, Default: `null`
  @param {string} [classes=""] - Classes property, Default: `""`

  ### Slots
  - `<slot name="default"  />`

-->
{#if transition}
  <svelte:component
    this={TransitionComponents[type]}
    {classes}
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
    <slot />
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
     * Transition - true/false
     */
    transition = true,
    /**
     * Transition types.
     * @type {'fly'|'fade'|'scale'|'slide'}
     */
    type = "fly",
    /**
     * Duration
     */
    duration = 300,
    /**
     * Delay
     */
    delay = 0,
    /**
     * Easing property
     */
    easing = null,
    /**
     * Additional classes
     */
    classes = "";
</script>
