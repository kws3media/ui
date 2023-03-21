<KwsModal
  {size}
  bind:is_active
  {closable}
  {close_on_click_outside}
  class={klass}
  {style}
  {inner_class}
  {inner_style}
  {cy}>
  <h1>This is a Heading</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</KwsModal>

<button
  class="button is-primary"
  type="button"
  on:click={() => (is_active = true)}>Open Modal</button>

<script>
  import { Modal as KwsModal } from "@kws3/ui";
  /**
   * Size of the modal
   * @type {import('@kws3/ui/types').SizeOptions}
   */
  export let size = "",
    is_active = false,
    closable = true,
    close_on_click_outside = false,
    style = "",
    inner_style = "",
    inner_class = "",
    cy = "";

  let klass = "";
  export { klass as class };
</script>
