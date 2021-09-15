<div class="toast-box is-bottom">
  {#each $notifications as notification}
    <Toast {...notification} on:destroy={destroy} />
  {/each}
</div>

<script context="module">
  import { writable } from "svelte/store";

  export const notifications = (() => {
    const { update, subscribe } = writable([]);

    const push = (newItem) =>
      update((items) => {
        if (!newItem.id) newItem.id = new Date().getTime();
        return [...items, newItem];
      });

    const pop = (id) =>
      update((items) => {
        return items.filter((i) => i.id != id);
      });

    return { pop, push, subscribe };
  })();

  export const boxes = [];
</script>

<script>
  import Toast from "./Toast.svelte";

  function destroy({ detail }) {
    notifications.pop(detail.id);
  }
</script>
