<div
  class="message is-{color} is-{size} {classes}"
  style="{style}"
  bind:this="{_comp}">
  {#if title || has_title}
    <div class="message-header {header_classes}">
      <slot name="title"><p>{title}</p></slot>
      {#if dismissable}
        <button class="delete" on:click="{dismiss}"></button>
      {/if}
    </div>
  {/if}
  <div class="message-body {inner_classes}" style="{inner_style}">
    <slot />
  </div>
</div>

<script>
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

  let _comp;

  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }

  // reviewd
</script>
