<section class="accordions {klass}" {style}>
  <slot />
</section>

<script>
  import { createEventDispatcher, setContext } from "svelte";
  import { writable } from "svelte/store";

  export let style = "";
  let klass = "";
  export { klass as class };

  const fire = createEventDispatcher();
  const open = writable();

  function changeSection(item) {
    console.log($open);
    console.log(item);
    if ($open === item) open.set();
    else open.set(item);
    fire("changeSection", item);
  }

  setContext("accordion", {
    open,
    changeSection,
  });
</script>
