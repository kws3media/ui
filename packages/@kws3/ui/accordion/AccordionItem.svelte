<article
  class="accordion {expanded ? 'is-active' : ''} is-{color} {klass}"
  {style}>
  <div class="accordion-header toggle" on:click={onToggle}>
    <slot name="title">{title}</slot>
    <button class="toggle" aria-label="toggle" />
  </div>
  {#if expanded}
    <div class="accordion-body" transition:slide>
      <div class="accordion-content">
        <slot />
      </div>
    </div>
  {/if}
</article>

<script>
  import { slide } from "svelte/transition";
  import { onMount, createEventDispatcher, getContext } from "svelte";

  const fire = createEventDispatcher();
  const { items, add, remove, toggle } = getContext("kws-accordion");

  export let title = "",
    style = "",
    color = "primary",
    expanded = false,
    context = `__kws_accordion_item_${Math.random().toString(36)}`;

  let klass = "";
  export { klass as class };

  let unsubscribe;

  $: {
    add({ context, expanded });
    unsubscribe = items.subscribe((item) => {
      expanded = item[context];
    });
  }

  onMount(() => {
    return () => {
      remove && remove({ context });
      unsubscribe && unsubscribe();
    };
  });

  function onToggle() {
    toggle({ context, expanded: !expanded });
    fire("change", { context });
  }
</script>
