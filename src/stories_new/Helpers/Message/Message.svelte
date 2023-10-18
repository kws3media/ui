<KwsMessage
  {size}
  {color}
  class={klass}
  {style}
  {inner_class}
  {inner_style}
  {title_class}
  {title}
  {has_title}
  {dismissable}
  {active}
  on:dismiss>
  <h1>This is a Heading</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</KwsMessage>

<script>
  import { Message as KwsMessage } from "@kws3/ui";

  /**
   * Size of the Message
   * @type {import('@kws3/ui/types').SizeOptions}
   */
  export let size = "medium",
    /**
     * Color of the Message box
     * @type {import('@kws3/ui/types').ColorOptions}
     */
    color = "info",
    style = "",
    inner_style = "",
    title_class = "",
    inner_class = "",
    title = null,
    has_title = false,
    dismissable = false,
    active = true;

  let klass = "";
  export { klass as class };
</script>
