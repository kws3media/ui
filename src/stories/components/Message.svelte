<Message
  {size}
  {color}
  {style}
  {inner_style}
  {classes}
  {header_classes}
  {inner_classes}
  {title}
  {has_title}
  {dismissable}>
  <h1>This is a Heading</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</Message>

<script>
  import { Message } from "@kws3/ui";

  export let size = "medium";
  export let color = "info";
  export let style = "",
    inner_style = "",
    classes = "",
    header_classes = "",
    inner_classes = "",
    title = null,
    has_title = false,
    dismissable = false;
</script>
