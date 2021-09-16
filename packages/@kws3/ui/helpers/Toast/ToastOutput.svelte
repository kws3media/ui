{#each Object.keys($notifications) as position}
  <ToastBox {position}>
    {#each $notifications[position] as notification}
      <Toast {...notification} on:destroy={destroy} />
    {/each}
  </ToastBox>
{/each}

<script context="module">
  import { writable } from "svelte/store";

  export const notifications = (() => {
    const { update, subscribe } = writable({
      top: [],
      bottom: [],
    });

    const push = (newItem) => {
      update((items) => {
        if (!newItem.id) newItem.id = new Date().getTime();
        items[getPosition(newItem)].push(newItem);
        return items;
      });
    };

    const pop = (props) => {
      update((items) => {
        //TODO: filter array index making issue

        let _position = getPosition(props);
        let _items = items[_position];
        _items = _items.filter((i) => i.id != props.id);
        items[_position] = _items;

        return items;
      });
    };

    return { pop, push, subscribe };
  })();

  function getPosition(props) {
    return props.position && props.position.indexOf("top") === 0
      ? "top"
      : "bottom";
  }
</script>

<script>
  import Toast from "./Toast.svelte";
  import ToastBox from "./ToastBox.svelte";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  function destroy({ detail }) {
    fire("destroy", { ...detail });
  }
</script>
