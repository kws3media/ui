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
  <hr class="is-small" />
  <div class="columns is-multiline">
    <div class="column is-6">
      <p><strong>Themes</strong></p>
      <p>
        Use <code>theme: "[theme_name]"</code> in init config.
        <br />
        Or, use <code>data-tippy-theme="[theme_name]"</code>
      </p>
      <p>
        Available themes are:<br />
        <code>primary</code>,
        <code>primary-light</code>,
        <code>info</code>,
        <code>info-light</code>,
        <code>success</code>,
        <code>success-light</code>,
        <code>danger</code>,
        <code>danger-light</code>,
        <code>dark</code>,
        <code>dark-light</code> and
        <code>light</code>
      </p>
    </div>
    <div class="column is-6">
      <div class="columns is-multiline is-centered">
        <div class="column is-narrow">
          <button
            data-tooltip="primary"
            data-tippy-theme="primary"
            class="button is-small is-primary">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            data-tooltip="primary-light"
            data-tippy-theme="primary-light"
            class="button is-small is-primary is-light">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            data-tooltip="info"
            data-tippy-theme="info"
            class="button is-small is-info">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            data-tooltip="info-light"
            data-tippy-theme="info-light"
            class="button is-small is-info is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            data-tooltip="success"
            data-tippy-theme="success"
            class="button is-small is-success">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            data-tooltip="success-light"
            data-tippy-theme="success-light"
            class="button is-small is-success is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            data-tooltip="danger"
            data-tippy-theme="danger"
            class="button is-small is-danger">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            data-tooltip="danger-light"
            data-tippy-theme="danger-light"
            class="button is-small is-danger is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            data-tooltip="dark"
            data-tippy-theme="dark"
            class="button is-small is-dark">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            data-tooltip="dark-light"
            data-tippy-theme="dark-light"
            class="button is-small is-dark is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            data-tooltip="light"
            data-tippy-theme="light"
            class="button is-small is-light">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button data-tooltip="default" class="button is-small"
            >Hover me</button>
        </div>
      </div>
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
