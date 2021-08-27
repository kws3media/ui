<slot />
<button class="button is-primary" type="button" on:click={open}
  >Open Modal</button>

<script>
  export let is_active = false;
  export function open() {
    is_active = true;
  }
</script>
