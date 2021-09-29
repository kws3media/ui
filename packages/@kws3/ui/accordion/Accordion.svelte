<!--
  @component


  @param {string} [style=""] - CSS styles for the item, Default: `""`
  @param {string} [class=""] - CSS classes for the item, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Content slot

-->
<section class="accordions {klass}" {style}>
  <!--Content slot-->
  <slot />
</section>

<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  /**
   * CSS styles for the item
   */
  export let style = "";

  /**
   * CSS classes for the item
   */
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
        Object.keys(i).forEach((context) => (i[context] = false));
        i[item.context] = item.active;
        return i;
      });
    },
  });
</script>
