<section class="accordions">
  <slot />
</section>

<script>
  import { createEventDispatcher, setContext } from "svelte";
  import { writable } from "svelte/store";
  const fire = createEventDispatcher();
  const open = writable();

  function changeSection(item) {
    if ($open === item) open.set();
    else open.set(item);
    console.log("ITEM", item);
    fire("changeSection", item);
  }

  setContext("accordion", {
    open,
    changeSection,
  });
</script>
