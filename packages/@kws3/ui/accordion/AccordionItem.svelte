<article
  class="accordion {is_active ? 'is-active' : ''} is-{color} {klass}"
  {style}>
  <div class="accordion-header toggle" on:click={toggle}>
    <slot name="title">{title}</slot>
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
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  const fire = createEventDispatcher();

  export let title = "",
    style = "",
    color = "primary",
    is_active = false;

  let klass = "";
  export { klass as class };

  function toggle() {
    is_active = !is_active;
    fire("change");
  }
</script>
