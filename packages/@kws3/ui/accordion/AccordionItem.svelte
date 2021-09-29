<article
  class="accordion {active ? 'is-active' : ''} is-{color} {klass}"
  {style}>
  <div
    class="accordion-header {title_click ? ' toggle' : ''}"
    on:click={() => {
      if (title_click) onToggle();
    }}>
    <div class="field is-grouped" style="align-items: center">
      <div class="control is-expanded">
        <slot name="title">{title}</slot>
      </div>
      <div class="control">
        <Icon icon="{active ? 'minus' : 'plus'}-circle" size="small" />
      </div>
    </div>
  </div>
  {#if active}
    <div class="accordion-body" transition:slide>
      <div class="accordion-content">
        <slot />
      </div>
    </div>
  {/if}
</article>

<script>
  import { Icon } from "@kws3/ui";
  import { slide } from "svelte/transition";
  import {
    onMount,
    afterUpdate,
    createEventDispatcher,
    getContext,
  } from "svelte";

  const fire = createEventDispatcher();
  const { items, add, remove, toggle } = getContext("kws-accordion");

  export let title = "",
    style = "",
    color = "primary",
    expanded = false,
    title_click = true,
    context = `__kws_accordion_item_${Math.random().toString(36)}`;

  let klass = "";
  export { klass as class };

  let unsubscribe,
    active = false;

  $: {
    add({ context, active });
    unsubscribe = items.subscribe((item) => {
      active = item[context];
    });
  }

  onMount(() => {
    return () => {
      remove && remove({ context });
      unsubscribe && unsubscribe();
    };
  });

  afterUpdate(() => {
    if (expanded === true) onToggle();
  });

  function onToggle() {
    toggle({ context, active: !active });
    fire("change", { context });
    expanded = false;
  }
</script>
