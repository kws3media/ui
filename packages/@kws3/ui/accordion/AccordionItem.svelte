{active}
{expanded}
<article
  class="accordion {active ? 'is-active' : ''} is-{color} {item_class}"
  style={item_style}
  bind:this={item}>
  <div
    class="accordion-header toggle"
    on:click={() => activateThisSection(item)}>
    <slot name="header" />
    {header}
    <button class="toggle" aria-label="toggle" />
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
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import { slide } from "svelte/transition";
  const fire = createEventDispatcher();

  export let header = "",
    expanded = false,
    item_class = "",
    item_style = "",
    /**
     * Color of the Button
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    allow_header_click = true;
  let item = null,
    active = false;

  var { changeSection, open } = getContext("accordion");

  $: active = $open === item;
  $: {
    if (expanded) {
      nextSection(item);
    }
  }

  /*onMount(() => {
    if (expanded) {
      active = true;
    }
  });*/

  function nextSection(item) {
    changeSection(item);
    active = true;
  }

  function activateThisSection(item) {
    if (!allow_header_click) return;
    changeSection(item);
    expanded = false;
  }
</script>
