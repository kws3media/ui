<div class="columns">
  <div class="column">
    <Panel title="Sample Text 1">
      <p>{text_area_1}</p>
      <KwsClipboardCopier
        {text}
        {icon}
        {copied_text}
        {copied_icon}
        copy={text_area_1}
        {copied} />
    </Panel>
  </div>
  <div class="column">
    <Panel title="Sample Text 2">
      <p>{text_area_2}</p>
      <KwsClipboardCopier
        {text}
        {icon}
        {copied_text}
        {copied_icon}
        copy={text_area_2}
        {copied}>Copy to clipboard</KwsClipboardCopier>
    </Panel>
  </div>
</div>

<script>
  import { ClipboardCopier as KwsClipboardCopier, Panel } from "@kws3/ui";
  export let text = "Copy to clipboard",
    icon = "copy",
    copied_text = "Copied!",
    copied_icon = "check",
    copied = false;

  let text_area_1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et libero in metus blandit malesuada vitae in dolor. ";
  let text_area_2 =
    "Praesent mattis neque sapien, ut aliquet eros maximus nec. Cras feugiat lectus non elit scelerisque dignissim.";
</script>
