<div
  class="action-modal-background"
  on:click={closable ? () => (open = false) : undefined}
  style={`opacity:${1 - $tween};visibility:${
    1 - $tween <= 0 ? "hidden" : "visible"
  }`} />
<div
  class="action-modal"
  style={`transform:translateY(${$tween * 100}%);visibility:${
    1 - $tween <= 0 ? "hidden" : "visible"
  };${style}`}>
  {#if closable}
    <span class="action-modal__close" on:click={() => (open = false)}>
      <Icon type="x" />
    </span>
  {/if}
  <slot />
</div>

<script>
  import { tweened } from "svelte/motion";
  import { Icon } from "@kws3/ui";
  export let open = false,
    closable = true,
    style = "";
  const tween = tweened(1, {
    duration: 200,
  });
  let index = 0;
  $: if (open) {
    open = true;
    tween.set(0);
  } else {
    open = false;
    tween.set(1);
  }
</script>
