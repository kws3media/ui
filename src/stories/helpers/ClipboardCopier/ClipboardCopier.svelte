<div class="columns">
  <div class="column">
    <Panel title="Sample Text" has_toolbar={true}>
      <div slot="toolbar">
        <KwsClipboardCopier
          {text}
          {icon}
          {copied_text}
          {copied_icon}
          copy={text_area_1}
          {copied}
          {copied_icon_color}
          class={klass} />
      </div>
      <p>{text_area_1}</p>
      <div class="has-text-danger is-size-6">
        <p class="help is-warning">Example of Copier with Text</p>
        <KwsClipboardCopier
          {text}
          {icon}
          {copied_text}
          {copied_icon}
          copy={text_area_1}
          {copied}
          {copied_icon_color}
          class={klass}>Copy above text</KwsClipboardCopier>
      </div>
    </Panel>
    <Panel>
      <div class="has-text-info is-size-4">
        <div class="is-pulled-right">
          <KwsClipboardCopier
            {text}
            {icon}
            {copied_text}
            {copied_icon}
            {copy}
            {copied}
            {copied_icon_color}
            class={klass} />
        </div>
      </div>
      <p>{copy}</p>
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
    copied_icon_color = "",
    copy = "";

  let klass = "";
  export { klass as class };

  let text_area_1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et libero in metus blandit malesuada vitae in dolor. ";
</script>
