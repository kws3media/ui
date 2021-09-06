<KwsMessage
  {size}
  {color}
  class={klass}
  {style}
  {inner_class}
  {inner_style}
  {classes}
  {header_classes}
  {title}
  {has_title}
  {dismissable}>
  <h1>This is a Heading</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</KwsMessage>

<script>
  import { Message as KwsMessage } from "@kws3/ui";

  export let size = "medium",
    color = "info",
    style = "",
    inner_style = "",
    classes = "",
    header_classes = "",
    inner_class = "",
    title = null,
    has_title = false,
    dismissable = false;

  let klass = "";
  export { klass as class };
</script>
