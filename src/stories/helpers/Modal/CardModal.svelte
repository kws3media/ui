<KwsCardModal
  {title}
  {size}
  bind:is_active
  {closable}
  {close_on_click_outside}
  {has_footer}
  {style}
  {inner_style}
  class={klass}
  {inner_class}
  {cy}>
  <h1>This is a Heading</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</KwsCardModal>

<button
  class="button is-primary"
  type="button"
  on:click={() => (is_active = true)}>Open Card Modal</button>

<script>
  import { CardModal as KwsCardModal } from "@kws3/ui";
  export let title = "Card Modal",
    /**
     * Size of the modal
     * @type {import('@kws3/ui/types').SizeOptions}
     */
    size = "",
    is_active = false,
    closable = true,
    close_on_click_outside = false,
    has_footer = true,
    style = "",
    inner_style = "",
    inner_class = "",
    cy = "";

  let klass = "";
  export { klass as class };
</script>
