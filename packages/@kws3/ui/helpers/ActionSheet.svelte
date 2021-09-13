<div
  class="action-modal-background"
  on:click={closable ? () => (open = false) : undefined}
  style={`opacity:${1 - $tween};visibility:${
    1 - $tween <= 0 ? "hidden" : "visible"
  }`} />
<div
  class="action-modal {klass}"
  style={`transform:translateY(${$tween * 100}%);visibility:${
    1 - $tween <= 0 ? "hidden" : "visible"
  };${style}`}>
  {#if closable}
    <span class="action-modal__close" on:click={() => (open = false)}>
      <Icon type="x" />
    </span>
  {/if}
  <!--Used to display sheet content--><slot />
</div>

<script>
  import { tweened } from "svelte/motion";
  import { Icon } from "@kws3/ui";
  /**
   * Open Action Sheet
   */
  export let open = false,
    /**
     * Clasable action sheet
     */
    closable = true,
    style = "";

  let klass = "";
  export { klass as class };

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
