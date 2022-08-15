<div id="story-root" class="columns">
  <div class="column">
    <div class="field">
      <p class="control">
        <label for="" class="label">Password</label>
        <input
          class="input is-fullwidth {password && !valid ? 'is-danger' : ''}"
          type="password"
          required
          bind:value={password}
          autocomplete="off" />
        <KwsPasswordValidator
          {compact}
          {password}
          {min}
          {lower}
          {upper}
          {digit}
          {special}
          {custom_rules}
          bind:valid
          class={klass}
          {style} />
      </p>
    </div>
  </div>
  <div class="column">
    Custom rule example:
    <pre>
<code>
&lt;PasswordValidator
  custom_rules=&#123;[
    &#123;
      name: "not_1234",
      text: "Should not be '1234'",
      identifier: "!1234",
      negate: true, //optional, negates the regex match
      regex: "(1234)",
      &#125;,
  ]&#125;
/&gt;
</code>
    </pre>
    <div class="field">
      <p class="control">
        <label for="" class="label">Password (with custom rule)</label>
        <input
          class="input is-fullwidth {password && !valid ? 'is-danger' : ''}"
          type="password"
          required
          bind:value={password}
          autocomplete="off" />
        <KwsPasswordValidator
          {compact}
          {password}
          {min}
          {lower}
          {upper}
          {digit}
          {special}
          custom_rules={[
            {
              name: "not_1234",
              text: "Should not be '1234'",
              identifier: "!1234",
              negate: true,
              regex: "(1234)",
            },
          ]}
          bind:valid
          class={klass}
          {style} />
      </p>
    </div>
  </div>
</div>

<script>
  import {
    PasswordValidator as KwsPasswordValidator,
    activateTooltips,
  } from "@kws3/ui";
  import { onMount } from "svelte";

  onMount(() => {
    activateTooltips("#story-root", null);
  });

  export let password = "",
    compact = true,
    min = 8,
    lower = true,
    upper = true,
    digit = true,
    special = true,
    custom_rules = [],
    valid = false,
    style = "";

  let klass = "";
  export { klass as class };
</script>
