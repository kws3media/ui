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
  import Fly from "./helpers/Fly.svelte";
  import Fade from "./helpers/Fade.svelte";
  import Slide from "./helpers/Slide.svelte";
  import Scale from "./helpers/Scale.svelte";

  let TransitionComponents = {
    fly: Fly,
    fade: Fade,
    slide: Slide,
    scale: Scale,
  };
  /**
   * X Property
   * @type {number}
   */
  export let x = 0,
    /**
     * Y Property
     * @type {number}
     */
    y = 0,
    /**
     * From property
     * @type {number}
     */
    from = 0.5,
    /**
     * To Property
     * @type {number}
     */
    to = 1,
    /**
     * Transition - true/false
     * @type {boolean}
     */
    transition = true,
    /**
     * Type Property. Default option is `fly`. Other options are `fade`, `scale`, `slide`
     * @type {string}
     */
    type = "fly",
    /**
     * Duration
     * @type {number}
     */
    duration = 300,
    /**
     * Delay
     * @type {number}
     */
    delay = 0,
    /**
     * Easing property
     * @type {number}
     */
    easing = null,
    /**
     * Additional classes
     * @type {string}
     */
    classes = "";
</script>
