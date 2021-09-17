<!--
  @component

  @param [_] - No properties on this component

  ### Module
  @param {any} [notifications=undefined] - `CONST` Notifications property, Default: `undefined`
-->

{#each Object.keys($notifications) as position}
  <ToastBox {position}>
    {#each $notifications[position] as notification}
      {#if notification}
        <Toast {...notification} on:destroy={destroy} />
      {/if}
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
        let _position = getPosition(props);
        let _items = items[_position];
        let _index;

        _items.forEach((e, i) => {
          if (e && e.id == props.id) {
            _index = i;
            return;
          }
        });

        if (typeof _index != "undefined") {
          delete _items[_index];
        }

        //reset the array index to 0
        let _filterdItems = _items.filter((i) => i);
        if (!_filterdItems.length) _items = [];

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

  const destroy = ({ detail }) => Toast.close(detail);
</script>
