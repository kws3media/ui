<div class="toast-box is-{position}">
  {#each $notifications as notification}
    {#if notification}
      <Toast {...notification} on:destroy={destroy} />
    {/if}
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
        let _items = [];

        //TODO: filter this array properlly
        items.forEach((e, i) => {
          if (e && e.id != id) _items[i] = e;
        });

        return _items;
      });

    return { pop, push, subscribe };
  })();

  export const boxes = [];
</script>

<script>
  import Toast from "./Toast.svelte";

  export let position = "bottom";

  const destroy = ({ detail }) => notifications.pop(detail.id);
</script>
