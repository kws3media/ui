<article
  class="accordion {active ? 'is-active' : ''} is-{color}"
  bind:this={item}>
  <div class="accordion-header toggle" on:click={() => onToggle()}>
    <slot name="header" />
    {header}
    <button class="toggle" aria-label="toggle" />
  </div>
  <div class="accordion-body">
    <div class="accordion-content">
      <slot />
    </div>
  </div>
</article>

<script>
  import { createEventDispatcher, getContext, onMount } from "svelte";
  export let header = "",
    active = false,
    color = "primary";
  let item;

  const { toggle, open } = getContext("accordion");
  $: active = $open === item ? true : false;

  const onToggle = () => {
    toggle(item);
  };
</script>
