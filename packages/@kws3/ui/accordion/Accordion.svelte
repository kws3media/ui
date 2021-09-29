<section class="accordions {klass}" {style}>
  <slot />
</section>

<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  export let style = "";

  let klass = "";
  export { klass as class };

  const items = writable({});

  setContext("kws-accordion", {
    items,
    add: (item) => {
      items.update((i) => {
        i[item.context] = item.active;
        return i;
      });
    },
    remove: (item) => {
      items.update((i) => {
        const _items = { ...i };
        delete _items[item.context];
        return _items;
      });
    },
    toggle: (item) => {
      items.update((i) => {
        if (i[item.context] === true) {
          i[item.context] = false;
        } else {
          Object.keys(i).forEach((context) => (i[context] = false));
        }
        i[item.context] = item.active;
        return i;
      });
    },
  });
</script>
