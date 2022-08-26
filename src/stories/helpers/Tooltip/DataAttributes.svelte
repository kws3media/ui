<div id="tooltip-example-container-1">
  <h1 class="title is-5 has-text-centered">Hover over the code snippets</h1>

  <h2 class="subtitle is-5">Placement</h2>
  <div class="columns is-multiline">
    <div class="column is-6">
      <pre
        data-tooltip="Some Text">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent()}
      </pre>
    </div>
    <div class="column is-6">
      <pre
        data-tooltip="Some Text"
        data-tippy-placement="bottom">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('placement', 'bottom')}
      </pre>
    </div>
    <div class="column is-6">
      <pre
        data-tooltip="Some Text"
        data-tippy-placement="left">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('placement', 'left')}
      </pre>
    </div>
    <div class="column is-6">
      <pre
        data-tooltip="Some Text"
        data-tippy-placement="right">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('placement', 'right')}
      </pre>
    </div>
  </div>
  <hr class="is-small" />
  <h2 class="subtitle is-5">Animation</h2>
  <div class="columns is-multiline">
    <div class="column is-6">
      <pre
        data-tooltip="Some Text"
        data-tippy-animation="fade">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('animation', 'fade')}
    </pre>
    </div>
    <div class="column is-6">
      <pre
        data-tooltip="Some Text"
        data-tippy-animation="scale">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('animation', 'scale')}
      </pre>
    </div>
  </div>
  <hr class="is-small" />
  <h2 class="subtitle is-5">Duration</h2>
  <div class="columns is-multiline">
    <div class="column is-6">
      <p>Same duration for in and out</p>
      <pre
        data-tooltip="Some Text"
        data-tippy-duration="800">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('duration', '800')}
    </pre>
    </div>
    <div class="column is-6">
      <p>Different durations for in and out</p>
      <pre
        data-tooltip="Some Text"
        data-tippy-duration="[800, 100]">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('duration', '[800,100]')}
      </pre>
    </div>
  </div>
  <hr class="is-small" />
  <h2 class="subtitle is-5">Delay</h2>
  <div class="columns is-multiline">
    <div class="column is-6">
      <p>Same delay for in and out</p>
      <pre
        data-tooltip="Some Text"
        data-tippy-delay="800">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('delay', '800')}
    </pre>
    </div>
    <div class="column is-6">
      <p>Different delay for in and out</p>
      <pre
        data-tooltip="Some Text"
        data-tippy-delay="[800, 100]">
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
{@html generateContent('delay', '[800,100]')}
      </pre>
    </div>
  </div>
</div>

<script>
  import { activateTooltips } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#tooltip-example-container-1", null);
  });

  function generateContent(att, val) {
    return `&lt;span
  data-tooltip="Some Text"
  ${
    att
      ? `<code class="has-text-danger">data-tippy-${att}="${val}"</code>&gt;`
      : "&gt;"
  }
  hello
&lt;/span&gt;
    `;
  }
</script>
