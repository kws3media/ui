<div bind:this={container} class="toast-notifications" />

<script context="module">
  export const elements = {};
</script>

<script>
  export let container;

  export function insert(el) {
    container.insertAdjacentElement("afterbegin", el);
  }
</script>
