<div id="story-root" class="columns" style="width:500px;">
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
        <KwsPasswordValidator {password} bind:valid class={klass} {style} />
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
    activateTooltips("#story-root");
  });

  export let password = "",
    valid = false,
    style = "";

  let klass = "";
  export { klass as class };
</script>
