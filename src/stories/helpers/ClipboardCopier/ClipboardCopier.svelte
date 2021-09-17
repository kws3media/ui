<div class="columns">
  <div class="column">
    <Panel title="Sample Text 1" has_toolbar={true}>
      <div slot="toolbar">
        <KwsClipboardCopier
          {text}
          {icon}
          {copied_text}
          {copied_icon}
          copy={text_area_1}
          {copied}
          {size}
          {color}
          class={klass} />
      </div>
      <p>{text_area_1}</p>
    </Panel>
    <Panel>
      <p>{text_area_2}</p>
      <p>
        <KwsClipboardCopier
          {text}
          {icon}
          {copied_text}
          {copied_icon}
          copy={text_area_2}
          {copied}
          {size}
          {color}
          class={klass}>Copy above text</KwsClipboardCopier>
      </p>
    </Panel>
  </div>
</div>

<div class="columns">
  <div class="column">
    <h4 class="subtitle">Paste copied text</h4>
    <textarea class="input is-fullwidth" />
  </div>
</div>

<script>
  import { ClipboardCopier as KwsClipboardCopier, Panel } from "@kws3/ui";
  export let text = "Copy to clipboard",
    icon = "copy",
    copied_text = "Copied!",
    copied_icon = "check",
    copied = false,
    size = "",
    color = "";

  let klass = "";
  export { klass as class };

  let text_area_1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et libero in metus blandit malesuada vitae in dolor. ";
  let text_area_2 =
    "Praesent mattis neque sapien, ut aliquet eros maximus nec. Cras feugiat lectus non elit scelerisque dignissim.";
</script>
