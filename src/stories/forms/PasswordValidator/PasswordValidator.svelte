<div class="columns" style="width:500px;">
  <div class="column">
    <div class="field">
      <p class="control">
        <label for="" class="label">Password</label>
        <input
          class="input is-fullwidth {password && !is_valid ? 'is-danger' : ''}"
          type="password"
          required
          bind:value={password}
          autocomplete="off" />
      </p>
      <p><KwsPasswordValidator {password} bind:is_valid /></p>
    </div>
  </div>
</div>

<script>
  import { PasswordValidator as KwsPasswordValidator } from "@kws3/ui";
  export let password = "",
    is_valid = false;
</script>
