<!--
  @component


  @param {string} [color="info"] - Color property, Default: `"info"`
  @param {string} [style=""] - Style property, Default: `""`
  @param {boolean} [light=false] - Light property, Default: `false`
  @param {boolean} [dismissable=false] - Dismissable property, Default: `false`

  ### Slots
  - `<slot name="default"  />`

-->
<div
  class="notification is-{color} {light ? 'is-light' : ''}"
  {style}
  bind:this={_comp}>
  {#if dismissable}
    <button class="delete" on:click={dismiss} />
  {/if}
  <slot />
</div>

<script>
  /**
   * Color of the Message box `primary`, `warning`, `info`, `danger`
   * @type {'primary'|'warning'|'info'|'danger'|'light'|'dark'}
   */
  export let color = "info";

  export let style = "";
  export let light = false;
  export let dismissable = false;

  let _comp;
  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }
</script>
