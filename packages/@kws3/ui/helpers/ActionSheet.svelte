<div
  class="action-modal-background"
  on:click={closable && close_on_click_outside
    ? () => (open = false)
    : undefined}
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
      <Icon icon={close_icon} />
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
    /**
     * Close icon
     */
    close_icon = "times-circle",
    /**
     * Determines if a closable modal can be closed by clicking anywhere outside the modal
     */
    close_on_click_outside = false,
    /**
     * Inline css of action sheet
     */
    style = "";

  /**
   * CSS class of action sheet
   */
  let klass = "";
  export { klass as class };

  const tween = tweened(1, {
    duration: 200,
  });

  $: if (open) {
    tween.set(0);
  } else {
    tween.set(1);
  }
</script>
