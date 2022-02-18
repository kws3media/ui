<!--
  @component


  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'light'|'dark'} [color="info"] - Color of the Notification box, Default: `"info"`
  @param {string} [style=""] - Inline CSS for notification content, Default: `""`
  @param {boolean} [light=false] - Inverted colors for notification box and contents, Default: `false`
  @param {boolean} [dismissable=false] - Determines whether close button is displayed or not, Default: `false`
  @param {boolean} [active=true] - Determines whether the whole component is being displayed or not, Default: `true`
  @param {string} [class=""] - CSS classes for notification container, Default: `""`

  ### Events
  - `dismiss` - Fired when dismiss button is clicked.
Turns `active` to `false`, which hides the component.
The parent can then decide what to do with the component

  ### Slots
  - `<slot name="default"  />` - Used for notification content

-->
{#if active}
  <div
    class="notification is-{color} {light ? 'is-light' : ''} {klass}"
    {style}>
    {#if dismissable}
      <button type="button" class="delete" on:click={dismiss} />
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
   * Inline CSS for notification content
   */
  export let style = "";

  /**
   * Inverted colors for notification box and contents
   */
  export let light = false;

  /**
   * Determines whether close button is displayed or not
   */
  export let dismissable = false;

  /**
   * Determines whether the whole component is being displayed or not
   * @type {boolean}
   */
  export let active = true;

  /**
   * CSS classes for notification container
   */
  let klass = "";
  export { klass as class };

  function dismiss() {
    active = false;
    /**
     * Fired when dismiss button is clicked.
     * Turns `active` to `false`, which hides the component.
     * The parent can then decide what to do with the component
     */
    fire("dismiss");
  }
</script>
