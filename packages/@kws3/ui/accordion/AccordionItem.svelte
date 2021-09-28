<article
  class="accordion {is_active ? 'is-active' : ''} is-{color} {klass}"
  {style}
  bind:this={item}>
  <div class="accordion-header toggle" on:click={() => activateSection(item)}>
    <slot name="header">{header}</slot>
    <button class="toggle" aria-label="toggle" />
  </div>
  {#if is_active}
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
    expanded = false,
    style = "",
    /**
     * Color of the Button
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    allow_header_click = true;

  let klass = "";
  export { klass as class };

  let item = null,
    is_active = false;

  var { changeSection, open } = getContext("accordion");

  $: is_active = $open === item;
  $: {
    if (expanded) {
      toggleSection(item);
    }
  }

  /*onMount(() => {
    if (expanded) {
      toggleSection(item);
    }
  });*/

  function toggleSection(item) {
    changeSection(item);
    is_active = true;
    expanded = false;
  }

  function activateSection(item) {
    if (!allow_header_click) return;
    changeSection(item);
    expanded = false;
  }
</script>
