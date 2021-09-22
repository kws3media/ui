<div class="field">
  <p class="control">
    <label for="" class="label">Password</label>
    <input
      class="input {password && !is_valid ? 'is-danger' : ''}"
      type="password"
      required
      bind:value={password}
      autocomplete="off" />
    <KwsPasswordValidator {password} bind:is_valid />
  </p>
</div>

<script>
  import { PasswordValidator as KwsPasswordValidator } from "@kws3/ui";
  export let password = "",
    is_valid = false;
</script>
