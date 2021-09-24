<section class="accordions">
  <slot />
</section>

<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const open = writable();
  setContext("accordion", {
    open,
    toggle: (item) => {
      if ($open === item) open.set();
      else open.set(item);
    },
  });
</script>
