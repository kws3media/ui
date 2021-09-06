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
  class="notification is-{color} {light ? 'is-light' : ''} {klass}"
  {style}
  bind:this={_comp}>
  {#if dismissable}
    <button class="delete" on:click={dismiss} />
  {/if}
  <!--Used for notification content--><slot />
</div>

<script>
  /**
   * Color of the Notification box
   * @type {'primary'|'success'|'warning'|'info'|'danger'|'light'|'dark'}
   */
  export let color = "info";

  /**
   * Inline style for modal content
   */
  export let style = "";

  /**
   * Light Notification
   */
  export let light = false;

  /**
   * Show close button
   */
  export let dismissable = false;

  /**
   * Additional class for Notification container
   */
  let klass = "";
  export { klass as class };

  let _comp;
  function dismiss() {
    _comp.parentNode.removeChild(_comp);
  }
</script>
