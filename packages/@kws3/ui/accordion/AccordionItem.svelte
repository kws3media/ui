<article
  class="accordion {_active ? 'is-active' : ''} is-{color}"
  bind:this={item}>
  <div class="accordion-header toggle" on:click={() => changeSection(item)}>
    <slot name="header" />
    {header}
    <button class="toggle" aria-label="toggle" />
  </div>
  {#if _active}
    <div class="accordion-body" transition:slide>
      <div class="accordion-content">
        <slot />
      </div>
    </div>
  {/if}
</article>

<script>
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import { slide } from "svelte/transition";
  const fire = createEventDispatcher();

  export let header = "",
    is_active = false,
    color = "primary",
    item = null;
  let _active;

  var { changeSection, open } = getContext("accordion");
  $: _active = $open === item;

  onMount(() => {
    if (is_active) {
      _active = true;
      changeSection(item);
    }
  });
</script>
