<div class="field is-grouped marginless" style="align-items:center;">
  <div class="control">
    <Icon icon="car" size="medium" />
  </div>
  <div class="control is-expanded">
    {#if title}
      <h4 class="title is-5 marginless">{title}</h4>
    {/if}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <p>{@html message}</p>
  </div>
  <div class="control">
    <button
      class="button is-danger is-small"
      type="button"
      on:click={() => fire("destroy", $$props)}>Close</button>
  </div>
</div>

<script>
  import { Icon } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let title = "",
    message = "";
</script>
