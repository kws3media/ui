<!--
  @component


  @param {string} [size=""] - size doc, should apply to size only, and not get copied to others in block, Default: `""`
  @param {string} [color="info"] - Color property, Default: `"info"`
  @param {string} [style=""] - Style property, Default: `""`
  @param {string} [inner_style=""] - this is inner_style docs, Default: `""`
  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [header_classes=""] - Header_classes property, Default: `""`
  @param {array} [inner_classes=[]] - Inner_classes property, Default: `[]`
  @param {object} [title=null] - Title property, Default: `null`
  @param {boolean} [has_title=false] - Has_title property, Default: `false`
  @param {boolean} [dismissable=false] - Dismissable property, Default: `false`
  @param {Date} [today="new Date()"] - today property docs, Default: `"new Date()"`
  @param {function} [subtract(x, y = 15)] - subtract 2 number
  @param {Date} [tomorrow="new Date()"] - tomorrow property docs, Default: `"new Date()"`
  @param {object} [thisShouldbeanObject={}] - ThisShouldbeanObject property, Default: `{}`
  @param {object} [thisShouldbeAnotherObject={}] - ThisShouldbeAnotherObject property, Default: `{}`
  @param {number} [oneItem=1] - one Item doc, Default: `1`
  @param {function} [divide(x, y = 20)] - divides 2 number
  @param {function} [add(x, y = null)] - adds 2 numbers

  ### Module
  @param {function} [setDefaultIconType(type)] - SetDefaultIconType function

  ### Slots
  - `<slot name="title"  />` - Title slot, falls back to a text node
  - `<slot name="default"  />`
  - `<slot name="another" {size} {inner_color} />` - another slot

-->
<div class="message is-{color} is-{size} {classes}" {style} bind:this={_comp}>
  {#if title || has_title}
    <div class="message-header {header_classes}">
      <!--Title slot, falls back to a text node-->
      <slot name="title"><p>{title}</p></slot>
      {#if dismissable}
        <button class="delete" on:click={dismiss} />
      {/if}
    </div>
  {/if}
  <div class="message-body {inner_classes}" style={inner_style}>
    <slot />
  </div>
  <!--another slot-->
  <slot name="another" {size} inner_color={color} />
</div>

<script context="module">
  let family;

  export function setDefaultIconType(type) {
    family = type;
  }
</script>

<script>
  //@ts-nocheck
  /**
   * size doc, should apply to size only, and not get copied to others in block
   */
  export let size = "",
    color = "info",
    style = "",
    /**
     * this is inner_style docs
     */
    inner_style = "",
    classes = "",
    header_classes = "",
    inner_classes = [],
    title = null,
    has_title = false,
    dismissable = false,
    /**
     * today property docs
     * @type {Date}
     * @default "new Date()"
     */
    today = new Date(),
    /**
     * subtract 2 number
     * @param x
     * @param y
     */
    subtract = (x, y = 15) => {
      return x - y;
    };

  /**
   * tomorrow property docs
   * @type {Date}
   * @default "new Date()"
   */
  export let tomorrow = new Date();

  export let thisShouldbeanObject = {};

  /**
   * @type {object}
   */
  export let thisShouldbeAnotherObject = { done: false };

  /**
   * one Item doc
   */
  export let oneItem = 1;

  /**
   * adds 2 numbers
   */
  export function add(x, y = null) {
    return x + y;
  }

  /**
   * divides 2 number
   * @param x
   * @param y
   */
  export let divide = (x, y = 20) => {
    return x / y;
  };

  let _comp;

  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }

  // reviewd
</script>
