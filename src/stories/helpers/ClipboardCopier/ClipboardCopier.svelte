<div class="columns" id="cc-parent">
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
      <hr class="is-small" />
      <div class="has-text-danger is-size-6">
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
      <p class="help">Example of Copier with text in the <code>slot</code></p>
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
      <p class="help">
        Fill/Update <code>copy</code> property in table <em>(ArgsTable)</em> below
      </p>
    </Panel>
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="field">
      <label for="" class="label">Paste copied text</label>
      <textarea class="input is-fullwidth" />
    </div>
  </div>
</div>

<script>
  import {
    activateTooltips,
    ClipboardCopier as KwsClipboardCopier,
    Panel,
  } from "@kws3/ui";
  import { onMount } from "svelte";

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

  onMount(() => {
    activateTooltips("#cc-parent", null);
  });
</script>
