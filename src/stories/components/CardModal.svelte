<CardModal
  {title}
  {size}
  {is_active}
  {closable}
  {close_on_click_outside}
  {has_footer}
  {style}
  {inner_style}
  {classes}
  {inner_class}
  {cy}>
  Your have 41 notifications
</CardModal>

<button
  class="button is-primary"
  type="button"
  on:click={() => (is_active = true)}>Open Model</button>

<script>
  import { CardModal } from "@kws3/ui";
  export let title = "Card Modal",
    size = "",
    is_active = false,
    closable = true,
    close_on_click_outside = false,
    has_footer = true,
    style = "",
    inner_style = "",
    classes = "",
    inner_class = "",
    cy = "";
</script>
