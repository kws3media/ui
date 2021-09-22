<div class="level is-mobile" style="margin:0;max-width: 100%;">
  <div class="level-left" style="max-width: 60%">
    <div class="level-item" style="max-width: 100%">
      {#if password && !result.overall}
        <p class="help has-text-danger">
          Should be at least 8 characters in length and include at least one
          lower-case letter, one upper-case letter, one number, and one special
          character.
        </p>
      {:else if password && result.overall}
        <p class="help has-text-success">Password is strong.</p>
      {/if}
    </div>
  </div>
  <div class="level-right">
    <span class="tags">
      <span class="tag is-small is-{result.min_length ? 'success' : 'danger'}"
        >8+</span>
      <span class="tag is-small is-{result.lowercase ? 'success' : 'danger'}"
        >a-z</span>
      <span class="tag is-small is-{result.uppercase ? 'success' : 'danger'}"
        >A-Z</span>
      <span class="tag is-small is-{result.digit ? 'success' : 'danger'}"
        >0-9</span>
      <span class="tag is-small is-{result.special ? 'success' : 'danger'}"
        >!#@</span>
    </span>
  </div>
</div>

<script>
  import validate from "./validatePassword";

  export let password = "",
    is_valid = false;

  $: result = validate(password);

  $: {
    if (result.overall) {
      is_valid = true;
    }
  }
</script>
