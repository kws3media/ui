<div id="tooltip-example-container-1">
  <h1 class="title is-5 has-text-centered">Hover over the code snippets</h1>

  <h2 class="subtitle is-5">Different containers, different variations</h2>
  <div class="columns is-multiline">
    <div class="column is-6" id="dt-1">
      <pre
        data-tooltip="This is a tooltip">
activateTooltips("#dt-1");
      </pre>
    </div>
    <div class="column is-6" id="dt-2">
      <pre
        data-tooltip="This is a tooltip">
activateTooltips("#dt-2", &#123;
  theme: 'light'
&#125;);
      </pre>
    </div>
  </div>
  <hr class="is-small" />
  <h2 class="subtitle is-5">Same container, different target selector</h2>
  <div class="columns is-multiline" id="an-1">
    <div class="column is-6">
      <pre
        data-tooltip="This is a tooltip">
activateTooltips("#an-1", &#123;
  animation: 'fade',
  theme: "light",
&#125;);
      </pre>
    </div>
    <div class="column is-6">
      <pre
        data-scaled-tooltip="This is a tooltip">
activateTooltips("#an-1", &#123;
  target: "[data-scaled-tooltip]",
  content: (el) =&gt; el.getAttribute("data-scaled-tooltip"),
  animation: "scale",
&#125;);
      </pre>
    </div>
  </div>
</div>

<script>
  import { activateTooltips } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#dt-1");
    activateTooltips("#dt-2", {
      theme: "light",
    });
    activateTooltips("#an-1", {
      animation: "fade",
      theme: "light",
    });
    activateTooltips("#an-1", {
      target: "[data-scaled-tooltip]",
      content: (el) => el.getAttribute("data-scaled-tooltip"),
      animation: "scale",
    });
  });
</script>
