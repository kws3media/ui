<!--
  @component


  @param {string} [icon="info-circle"] - Icon used when default slot has no content, Default: `"info-circle"`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [icon_color="primary"] - Icon color of icon used when default slot has no content, Default: `"primary"`
  @param {''|'small'|'medium'|'large'} [icon_size="small"] - Icon size of icon used when default slot has no content, Default: `"small"`
  @param {string} [trigger="click"] - Determines the events that cause the Popover to show. Multiple event names are separated by spaces.

**Examples:** `click`, `mouseenter`, `mouseenter focus`, Default: `"click"`
  @param {string} [placement="auto"] - Preferred placement of the Popover

Available options: https://atomiks.github.io/tippyjs/v6/all-props/#placement, Default: `"auto"`
  @param {boolean} [interactive=false] - Allows you to interact with the Popover content, when turned on, Default: `false`
  @param {object} [external_target=null] - Specify a target node reference to use as the Popover content

When set to `null`, it will use the content of the `popover` slot, Default: `null`
  @param {string} [max_width="none"] - Maximum allowed width of the popover

It can be any CSS value associated with `max-width` property, including `"none"`, Default: `"none"`
  @param {string} [style=""] - Inline CSS for Popover trigger, Default: `""`
  @param {string} [class=""] - CSS classes for Popover trigger, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Content of the Popover Trigger, by default it displays an Icon
  - `<slot name="popover"  />` - Slot containing the popover content

-->
<span
  use:popover={{ content: targetNode }}
  data-tippy-trigger={trigger}
  data-tippy-placement={placement}
  data-tippy-offset="[0, 10]"
  data-tippy-interactive={interactive ? "true" : "false"}
  data-tippy-maxWidth={max_width}
  style={_style}
  class={klass}>
  <!--Content of the Popover Trigger, by default it displays an Icon--><slot
    ><Icon {icon} color={icon_color} size={icon_size} /></slot>
</span>
<div class="is-hidden">
  <div class="tt-body" bind:this={popoverNode}>
    <!--Slot containing the popover content--><slot name="popover" />
  </div>
</div>

<style>
  .is-hidden {
    display: none !important;
  }
</style>

<script>
  import popover from "./actions";
  import { Icon } from "@kws3/ui";
  /**
   * Icon used when default slot has no content
   */
  export let icon = "info-circle";
  /**
   * Icon color of icon used when default slot has no content
   * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let icon_color = "primary";
  /**
   * Icon size of icon used when default slot has no content
   * @type {''|'small'|'medium'|'large'}
   */
  export let icon_size = "small";
  /**
   * Determines the events that cause the Popover to show. Multiple event names are separated by spaces.
   *
   * **Examples:** `click`, `mouseenter`, `mouseenter focus`
   */
  export let trigger = "click";
  /**
   * Preferred placement of the Popover
   *
   * Available options: https://atomiks.github.io/tippyjs/v6/all-props/#placement
   */
  export let placement = "auto";
  /**
   * Allows you to interact with the Popover content, when turned on
   */
  export let interactive = false;
  /**
   * Specify a target node reference to use as the Popover content
   *
   * When set to `null`, it will use the content of the `popover` slot
   */
  export let external_target = null;
  /**
   * Maximum allowed width of the popover
   *
   * It can be any CSS value associated with `max-width` property, including `"none"`
   */
  export let max_width = "none";
  /**
   * Inline CSS for Popover trigger
   */
  export let style = "";

  /**
   * CSS classes for Popover trigger
   */
  let klass = "";
  export { klass as class };

  let popoverNode;

  $: _style = `cursor:pointer;${style}`;
  $: targetNode = external_target ? external_target : popoverNode;
</script>
