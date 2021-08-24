<!--
  @component


  @param {string} [size=""] - size doc, should apply to size only, and not get copied to others in block, Default: `""`
  @param {string} [color="info"] - size doc, should apply to size only, and not get copied to others in block, Default: `"info"`
  @param {string} [style=""] - size doc, should apply to size only, and not get copied to others in block, Default: `""`
  @param {string} [inner_style=""] - size doc, should apply to size only, and not get copied to others in block, Default: `""`
  @param {string} [classes=""] - size doc, should apply to size only, and not get copied to others in block, Default: `""`
  @param {string} [header_classes=""] - size doc, should apply to size only, and not get copied to others in block, Default: `""`
  @param {string} [inner_classes=""] - size doc, should apply to size only, and not get copied to others in block, Default: `""`
  @param {object} [title=null] - size doc, should apply to size only, and not get copied to others in block, Default: `null`
  @param {boolean} [has_title=false] - size doc, should apply to size only, and not get copied to others in block, Default: `false`
  @param {boolean} [dismissable=false] - size doc, should apply to size only, and not get copied to others in block, Default: `false`
  @param {number} [oneItem=1] - one Item doc, Default: `1`

  @function `add(x, y = null)` - Add function
  @function `divide(x, y = 20)` - Divide function

  ### Slots
  - `<slot name="title"  />`
  - `<slot name="default"  />`

-->
<div class="message is-{color} is-{size} {classes}" {style} bind:this={_comp}>
  {#if title || has_title}
    <div class="message-header {header_classes}">
      <slot name="title"><p>{title}</p></slot>
      {#if dismissable}
        <button class="delete" on:click={dismiss} />
      {/if}
    </div>
  {/if}
  <div class="message-body {inner_classes}" style={inner_style}>
    <slot />
  </div>
</div>

<script>
  /**
   * size doc, should apply to size only, and not get copied to others in block
   */
  export let size = "",
    color = "info",
    style = "",
    inner_style = "",
    classes = "",
    header_classes = "",
    inner_classes = "",
    title = null,
    has_title = false,
    dismissable = false;

  /**
   * one Item doc
   */
  export let oneItem = 1;

  export function add(x, y = null) {
    return x + y;
  }

  export let divide = (x, y = 20) => {
    return x / y;
  };

  let _comp;

  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }

  // reviewd
</script>
