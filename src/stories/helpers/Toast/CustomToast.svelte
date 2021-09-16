<div class="field is-grouped is-marginless" style="align-items:center;">
  <div class="control is-expanded">
    <p>{@html message}</p>
  </div>
  <div class="control">
    <button class="button is-danger is-small" type="button" on:click
      >Close</button>
  </div>
</div>

<script>
  export let message = "I am a Toast...";
</script>
