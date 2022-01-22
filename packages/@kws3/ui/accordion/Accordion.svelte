<!--
  @component


  @param {string} [style=""] - Inline CSS for the component, Default: `""`
  @param {string} [class=""] - CSS classes for the component, Default: `""`

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
   * Inline CSS for the component
   */
  export let style = "";

  /**
   * CSS classes for the component
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
