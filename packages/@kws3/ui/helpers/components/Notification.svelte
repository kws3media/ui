<div
  class="notification is-{color} {light ? 'is-light' : ''}"
  style="{style}"
  bind:this="{_comp}">
  {#if dismissable}
    <button class="delete" on:click="{dismiss}"></button>
  {/if}
  <slot />
</div>

<script>
  export let color = "info",
    style = "",
    light = false,
    dismissable = false;

  let _comp;

  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }

  // reviwed
</script>
