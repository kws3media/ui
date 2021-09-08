<!--
  @component
  

  @param {'primary'|'success'|'warning'|'info'|'danger'|'light'|'dark'} [color="info"] - Color of the Notification box, Default: `"info"`
  @param {string} [style=""] - Inline style for notification content, Default: `""`
  @param {boolean} [light=false] - Inverted style of notification, Default: `false`
  @param {boolean} [dismissable=false] - Show close button, Default: `false`
  @param {string} [class=""] - Additional class for Notification container, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Used for notification content

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
   * Inline style for notification content
   */
  export let style = "";

  /**
   * Inverted style of notification
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
