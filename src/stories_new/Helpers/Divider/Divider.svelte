<div class="p-3">
  <Message color="" inner_class="p-1">
    <div class="wrap" class:is-vertical={vertical}>
      <p>Divider with</p>
      <KwsDivider
        {color}
        {light}
        {vertical}
        {alignment}
        {style}
        class={klass} />
      <p>No text in between</p>
    </div>
  </Message>
  <Message color="" inner_class="p-1">
    <div class="wrap" class:is-vertical={vertical}>
      <p>There is some text here</p>
      <KwsDivider {color} {light} {vertical} {alignment} {style} class={klass}>
        Divider Text
      </KwsDivider>
      <p>In between the Divider lines</p>
    </div>
  </Message>
  <Message color="" inner_class="p-1">
    <div class="wrap" class:is-vertical={vertical}>
      <p>Oh Look!</p>
      <KwsDivider {color} {light} {vertical} {alignment} {style} class={klass}>
        <span class="has-text-success-dark">Another color</span>
      </KwsDivider>
      <p>We used a different color text</p>
    </div>
  </Message>
  <Message color="" inner_class="p-1">
    <div class="wrap" class:is-vertical={vertical}>
      <p>Can do...</p>
      <KwsDivider {color} {light} {vertical} {alignment} {style} class={klass}>
        <Icon icon="user" size="medium" color="danger" />
      </KwsDivider>
      <p>Icons too</p>
    </div>
  </Message>
  <Message color="" inner_class="p-1">
    <div class="wrap" class:is-vertical={vertical}>
      <p>Even those</p>
      <KwsDivider {color} {light} {vertical} {alignment} {style} class={klass}>
        <p><Icon icon="check" size="small" color="success" /> Some Text</p>
      </KwsDivider>
      <p>Icons with text next to them</p>
    </div>
  </Message>
  <Message color="" inner_class="p-1">
    <div class="wrap" class:is-vertical={vertical}>
      <p>Tags?</p>
      <KwsDivider {color} {light} {vertical} {alignment} {style} class={klass}>
        <span class="tag is-success">A tag</span>
      </KwsDivider>
      <p>Oh Yes!!!</p>
    </div>
  </Message>
</div>

<style>
  .wrap {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .wrap.is-vertical {
    flex-direction: row;
  }
</style>

<script>
  import { Divider as KwsDivider, Icon, Message } from "@kws3/ui";

  /**
   * Color of the Divider lines
   * @type {import('@kws3/ui/types').ColorOptions}
   */
  export let color = "",
    light = false,
    vertical = false,
    /**
     * Alignment of the Divider text. `top`/`left` and `bottom`/`right` are analogous for vertical Dividers
     * @type {Exclude<import('@kws3/ui/types').Positions, 'start'|'end'>}
     */
    alignment = "center",
    style = "";

  let klass = "";
  export { klass as class };
</script>
