<!--
  @component
  

  @param {'primary'|'warning'|'info'|'danger'|'light'|'dark'} [color="info"] - Color of the Notification box, Default: `"info"`
  @param {string} [style=""] - Inline style for modal content, Default: `""`
  @param {boolean} [light=false] - Light Notification, Default: `false`
  @param {boolean} [dismissable=false] - Show close button, Default: `false`

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
   * Color of the Notification box
   * @type {'primary'|'warning'|'info'|'danger'|'light'|'dark'}
   */
  export let color = "info";

  /**
   * Inline style for modal content
   * @type {string}
   */
  export let style = "";

  /**
   * Light Notification
   * @type {boolean}
   */
  export let light = false;

  /**
   * Show close button
   * @type {boolean}
   */
  export let dismissable = false;

  let _comp;
  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }
</script>
