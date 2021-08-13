<script>
  import { onMount } from 'svelte';

  export let type = 'text';
  export let placeholder = '';
  export let value = '';
  export let label = '';
  export let error = '';
  export let disabled = false;

  onMount(() => {
  });
</script>

<div class="dev-input-container">
  <span class="dev-label" class:dev-label-error={error}>{label}</span>
  <input
    {placeholder}
    bind:value
    class="dev-input"
    class:dev-input-error={error}
    on:change
    bind:this={type}
    {disabled}
  />
  <div class="dev-error">{error}</div>
</div>

<style>
  .dev-input {
    border: 1px solid grey;
    border-radius: 4px;
    width: 100%;
    height: 30px;
    font-size: 13px;
    margin: 0;
    padding: 0 0 0 15px;
    box-sizing: border-box;
    outline: none;
    caret-color: grey;
  }
  .dev-input:disabled {
    border: 0.5px dashed;
    cursor: not-allowed;
  }
  .dev-input-error {
    border-color: #ff6a61;
    color: #ff6a61;
  }
  .dev-error {
    color: #ff6a61;
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin: 7px 0 0;
  }
  .dev-label {
    display: block;
    margin: 5px;
    font-weight: 100;
  }
  .dev-label-error {
    color: #ff6a61;
  }
  .dev-input-container {
    width: 100%;
    transition: all ease 0.5s;
  }
</style>