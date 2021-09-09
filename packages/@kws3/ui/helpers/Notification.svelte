<!--
  @component


  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'light'|'dark'} [color="info"] - Color of the Notification box, Default: `"info"`
  @param {string} [style=""] - Inline style for notification content, Default: `""`
  @param {boolean} [light=false] - Inverted style of notification, Default: `false`
  @param {boolean} [dismissable=false] - Show close button, Default: `false`
  @param {boolean} [active=true] - Determines whether the whole component is being displayed or not, Default: `true`
  @param {string} [class=""] - Additional class for Notification container, Default: `""`

  ### Events
  - `dismiss` - Fired when dismiss button is clicked.
Turns `active` off, which hides the component.
The parent can then decide what to do with the component

  ### Slots
  - `<slot name="default"  />` - Used for notification content

-->
{#if active}
  <div
    class="notification is-{color} {light ? 'is-light' : ''} {klass}"
    {style}>
    {#if dismissable}
      <button class="delete" on:click={dismiss} />
    {/if}
    <!--Used for notification content--><slot />
  </div>
{/if}

<script>
  import { createEventDispatcher } from "svelte";
  const fire = createEventDispatcher();

  /**
   * Color of the Notification box
   * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'light'|'dark'}
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
   * Determines whether the whole component is being displayed or not
   * @type {boolean}
   */
  export let active = true;

  /**
   * Additional class for Notification container
   */
  let klass = "";
  export { klass as class };

  function dismiss() {
    active = false;
    /**
     * Fired when dismiss button is clicked.
     * Turns `active` off, which hides the component.
     * The parent can then decide what to do with the component
     */
    fire("dismiss");
  }
</script>
