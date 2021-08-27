<KwsModal
  {size}
  {is_active}
  {closable}
  {close_on_click_outside}
  {style}
  {inner_style}
  {classes}
  {inner_class}
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
  export let size = "";
  export let is_active = false;
  export let closable = true;
  export let close_on_click_outside = false;
  export let style = "";
  export let inner_style = "";
  export let classes = "";
  export let inner_class = "";
  export let cy = "";
</script>
