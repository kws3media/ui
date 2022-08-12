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
      <p class="has-text-info">
        These tooltips don't disappear on hover out, and will remain visible
        until another click anywhere on the page.
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
      <p><strong>Don't hide on click</strong></p>
      <p>
        By default, tooltips disappear after clicking anywhere, even the target
        element.<br />But, sometimes you would like to keep showing the tooltip
        even after the target element has been clicked.
      </p>
      <p>
        Use <code>hideOnClick: false</code> in init config.
        <br />
        Or, use <code>data-tippy-hideOnClick="false"</code>
      </p>
    </div>
    <div class="column is-6">
      <pre
        data-tooltip="This is a tooltip"
        data-tippy-hideOnClick="false">
&lt;span
  data-tooltip="This is a tooltip"
  data-tippy-hideOnClick="false"&gt;
  hello
&lt;/span&gt;
      </pre>
    </div>
  </div>
  <hr class="is-small" />
  <div class="columns is-multiline">
    <div class="column is-6">
      <p><strong>Persistent Tooltips</strong></p>
      <p class="notification is-warning is-light">
        This does not work with event delegation.<br />
        Instead the <code>tooltip</code> action has to be used.<br />
        See:
        <a href="/?path=/docs/helpers-tooltips-3-tooltip-action--page"
          >Tooltip Action</a>
      </p>
      <div>
        Three parameters are required to achieve this:
        <ol style="margin-left:1.5rem;margin-bottom:2rem">
          <li><code>showOnCreate: true</code></li>
          <li><code>hideOnClick: false</code></li>
          <li><code>trigger: 'manual'</code></li>
        </ol>
      </div>
      <p>
        These options can be supplied either via <code>data-tippy-*</code> attributes,
        or as parameters to the action.
      </p>
    </div>
    <div class="column is-6">
      <pre
        use:tooltip
        data-tooltip="This is a persistent tooltip"
        data-tippy-theme="danger"
        data-tippy-showOnCreate="true"
        data-tippy-hideOnClick="false"
        data-tippy-trigger="manual">
&lt;span
  use:tooltip
  data-tooltip="This is a persistent tooltip"
  data-tippy-theme="danger"
  data-tippy-showOnCreate="true"
  data-tippy-hideOnClick="false"
  data-tippy-trigger="manual"&gt;
  hello
&lt;/span&gt;
      </pre>
      <br />
      <pre
        use:tooltip={{
          theme: "danger",
          showOnCreate: true,
          hideOnClick: false,
          trigger: "manual",
        }}
        data-tooltip="This is a persistent tooltip">

&lt;span
  use:tooltip=&#123;&#123;
    theme: "danger",
    showOnCreate: true,
    hideOnClick: false,
    trigger: "manual"
  &#125;&#125;
  data-tooltip="This is a persistent tooltip"&gt;
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
            type="button"
            data-tooltip="primary"
            data-tippy-theme="primary"
            class="button is-small is-primary">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="primary-light"
            data-tippy-theme="primary-light"
            class="button is-small is-primary is-light">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="info"
            data-tippy-theme="info"
            class="button is-small is-info">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="info-light"
            data-tippy-theme="info-light"
            class="button is-small is-info is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="success"
            data-tippy-theme="success"
            class="button is-small is-success">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="success-light"
            data-tippy-theme="success-light"
            class="button is-small is-success is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="danger"
            data-tippy-theme="danger"
            class="button is-small is-danger">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="danger-light"
            data-tippy-theme="danger-light"
            class="button is-small is-danger is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="dark"
            data-tippy-theme="dark"
            class="button is-small is-dark">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="dark-light"
            data-tippy-theme="dark-light"
            class="button is-small is-dark is-light">Hover me</button>
        </div>

        <div class="column is-narrow">
          <button
            type="button"
            data-tooltip="light"
            data-tippy-theme="light"
            class="button is-small is-light">Hover me</button>
        </div>
        <div class="column is-narrow">
          <button type="button" data-tooltip="default" class="button is-small"
            >Hover me</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  //@ts-nocheck
  import { activateTooltips, tooltip } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#tooltip-example-container-1");
  });
</script>
