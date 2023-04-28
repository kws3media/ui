<!--
  @component


  @param {string} [icon="info-circle"] - Icon used when default slot has no content, Default: `"info-circle"`
  @param {string} [icon_color="primary"] - Colour of the trigger icon displayed when default slot has no content, Default: `"primary"`
  @param {string} [icon_size="small"] - Size of the trigger icon displayed when default slot has no content, Default: `"small"`
  @param {string} [trigger="click"] - Determines the events that cause the Popover to show. Multiple event names are separated by spaces.

**Examples:** `click`, `mouseenter`, `mouseenter focus`

If you would like to trigger the popover programatically only, you can use `manual`., Default: `"click"`
  @param {string} [placement="auto"] - Preferred placement of the Popover

Available options: <a target="_blank" href="https://atomiks.github.io/tippyjs/v6/all-props/#placement">https://atomiks.github.io/tippyjs/v6/all-props/#placement</a>, Default: `"auto"`
  @param {boolean} [interactive=false] - Allows you to interact with the Popover content, when turned on, Default: `false`
  @param {boolean} [hide_on_click=true] - Whether the popover should hide on clicking outside of it, Default: `true`
  @param {object} [external_target=null] - Specify a target node reference to use as the Popover content

When set to `null`, it will use the content of the `popover` slot, Default: `null`
  @param {string} [max_width="none"] - Maximum allowed width of the popover

It can be any CSS value associated with `max-width` property, including `"none"`, Default: `"none"`
  @param {string} [style=""] - Inline CSS for Popover trigger, Default: `""`
  @param {string} [class=""] - CSS classes for Popover trigger, Default: `""`
  @method `open()` - Open method
  @method `close()` - Close method
  @method `enable()` - Enable method
  @method `disable()` - Disable method
  @method `setProps(props)` - SetProps method

  ### Events
  - `opening` - Triggered when popover is opening
  - `open` - Triggered when popover is opened
  - `closing` - Triggered when popover is closing
  - `close` - Triggered when popover is closed
  - `trigger` - Triggered when popover is triggered either programatically or by user interaction

  ### Slots
  - `<slot name="default"  />` - Content of the Popover Trigger, by default it displays an Icon
  - `<slot name="popover"  />` - Slot containing the popover content

-->
<span
  use:popover={{ content: targetNode }}
  bind:this={popoverParent}
  on:showing={popoverShowing}
  on:shown={popoverShown}
  on:hiding={popoverHiding}
  on:hidden={popoverHidden}
  on:triggered={popoverTriggered}
  data-tippy-trigger={trigger}
  data-tippy-placement={placement}
  data-tippy-offset="[0, 10]"
  data-tippy-interactive={interactive ? "true" : "false"}
  data-tippy-maxWidth={max_width}
  data-tippy-hideOnClick={hide_on_click ? "true" : "false"}
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
  import { createEventDispatcher } from "svelte";
  import { popover } from "./Tooltip";
  import { Icon } from "@kws3/ui";

  const fire = createEventDispatcher();

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * Icon used when default slot has no content
   */
  export let icon = "info-circle";
  /**
   * Colour of the trigger icon displayed when default slot has no content
   * @type {ColorOptions | 'grey'}
   */
  export let icon_color = "primary";
  /**
   * Size of the trigger icon displayed when default slot has no content
   * @type {SizeOptions}
   */
  export let icon_size = "small";
  /**
   * Determines the events that cause the Popover to show. Multiple event names are separated by spaces.
   *
   * **Examples:** `click`, `mouseenter`, `mouseenter focus`
   *
   * If you would like to trigger the popover programatically only, you can use `manual`.
   */
  export let trigger = "click";
  /**
   * Preferred placement of the Popover
   *
   * Available options: <a target="_blank" href="https://atomiks.github.io/tippyjs/v6/all-props/#placement">https://atomiks.github.io/tippyjs/v6/all-props/#placement</a>
   */
  export let placement = "auto";
  /**
   * Allows you to interact with the Popover content, when turned on
   */
  export let interactive = false;
  /**
   * Whether the popover should hide on clicking outside of it
   */
  export let hide_on_click = true;
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

  let popoverNode, popoverParent;

  const getInstance = () => {
    return popoverParent._tippy;
  };

  export function open() {
    getInstance().show();
  }

  export function close() {
    getInstance().hide();
  }

  export function enable() {
    getInstance().enable();
  }

  export function disable() {
    getInstance().disable();
  }

  export function setProps(props) {
    getInstance().setProps(props);
  }

  const popoverShowing = ({ detail }) => {
    /**
     * Triggered when popover is opening
     */
    fire("opening", detail);
  };

  const popoverShown = ({ detail }) => {
    /**
     * Triggered when popover is opened
     */
    fire("open", detail);
  };

  const popoverHiding = ({ detail }) => {
    /**
     * Triggered when popover is closing
     */
    fire("closing", detail);
  };

  const popoverHidden = ({ detail }) => {
    /**
     * Triggered when popover is closed
     */
    fire("close", detail);
  };

  const popoverTriggered = ({ detail }) => {
    /**
     * Triggered when popover is triggered either programatically or by user interaction
     */
    fire("trigger", detail);
  };

  $: _style = `cursor:pointer;${style}`;
  $: targetNode = external_target ? external_target : popoverNode;
</script>
