<div id="tooltip-example-container-1">
  <h1 class="title is-5 has-text-centered">Hover over the code snippets</h1>

  <div class="columns is-multiline">
    <div class="column is-6">
      <p><strong>Multiline tooltips</strong></p>
      <p>
        Use <code>allowHTML: true</code> in init config.
        <br />
        Or, use <code>data-tippy-allowHTML="true"</code>
      </p>
      <p>
        And then just use <code>&lt;br&gt;</code> tags within the tooltip content
      </p>
    </div>
    <div class="column is-6">
      <pre
        data-tooltip="This<br> is a<br> tooltip">
&lt;span
  data-tooltip="This&lt;br&gt;  is a&lt;br&gt; tooltip"&gt;
  hello
&lt;/span&gt;
      </pre>
    </div>
  </div>
  <hr class="is-small" />
  <div class="columns is-multiline">
    <div class="column is-6">
      <p><strong>Show on click</strong></p>
      <p>
        Use <code>trigger: "click"</code> in init config.
        <br />
        Or, use <code>data-tippy-trigger="click"</code>
      </p>
    </div>
    <div class="column is-6">
      <pre
        data-tooltip="This is a tooltip"
        data-tippy-trigger="click">
&lt;span
  data-tooltip="This is a tooltip"
  data-tippy-trigger="click"&gt;
  hello
&lt;/span&gt;
      </pre>
    </div>
  </div>
</div>

<script>
  import { activateTooltips } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#tooltip-example-container-1");
  });
</script>
